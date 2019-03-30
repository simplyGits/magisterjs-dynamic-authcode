function TOP(env) {
	return env[env.length - 1];
}

function FIND(env, key) {
	for (let i = env.length - 1; i >= 0; i--) {
		if (key in env[i]) return env[i];
	}
	return null;
}

function ASSIGN(env, key, value) {
	const scope = FIND(env, key) || TOP(env);
	scope[key] = value;
}

const symMagic = Symbol("magic");
const symReturn = Symbol("return");

const executors = {
	BlockStatement: function(env, block) {
		let retval = undefined;

		env.push({});
		for (const item of block.body) {
			const ret = exec(env, item);
			if (ret != null && symReturn in ret) {
				retval = ret.value;
				break;
			}
		}
		env.pop();

		return retval;
	},

	ExpressionStatement: function(env, st) {
		return exec(env, st.expression);
	},

	IfStatement: function(env, st) {
		if (exec(env, st.test)) {
			exec(env, st.consequent);
		} else {
			if (st.alternate != null) exec(env, st.alternate);
		}
	},

	ReturnStatement: function(env, st) {
		const obj = {value: exec(env, st.argument)};
		obj[symReturn] = true;
		return obj;
	},

	VariableDeclaration: function(env, decl) {
		if (decl.kind != "var") {
			throw new Error("Only 'var' variable declarations supported");
		}

		for (const item of decl.declarations) {
			TOP(env)[item.id.name] = exec(env, item.init);
		}
	},

	FunctionDeclaration: function(env, decl) {
		const ex = {...decl};
		ex.type = "FunctionExpression";
		const f = exec(env, ex);

		ASSIGN(env, decl.id.name, f);
		return f;
	},

	FunctionExpression: function(env, ex) {
		for (const param of ex.params) {
			if (param.type != "Identifier") {
				throw new Error("Unsupported function parameter " + param.type);
			}
		}

		return function(args) {
			const scope = {};
			for (let i = 0; i < ex.params.length; i++) {
				// Properly becomes undefined if i >= args.length
				scope[ex.params[i].name] = args[i];
			}

			env.push(scope);
			const ret = exec(env, ex.body);
			env.pop();
			return ret;
		};
	},

	ObjectExpression: function(env, ex) {
		let obj = {};
		for (const item of ex.properties) {
			if (item.type != "ObjectProperty" ||
					item.method || item.computed || item.shorthand) {
				throw new Error("Unsupported object property");
			}

			obj[item.key.name] = exec(env, item.value);
		}
		return obj;
	},

	SequenceExpression: function(env, ex) {
		let ret;
		for (const item of ex.expressions) {
			ret = exec(env, item);
		}
		return ret;
	},

	AssignmentExpression: function(env, ex) {
		if (ex.left.type == "MemberExpression") {
			const object = exec(env, ex.left.object);

			if (ex.left.property.type == "Identifier") {
				const value = exec(env, ex.right);
				const key = ex.left.property.name;

				if (symMagic in object) {
					object.setProperty(ex.left.property.name, value);
				} else if (typeof (object[key]) == "object" && symMagic in object[key]) {
					object[key].assign(value);
				} else {
					object[key] = value;
				}

				return value;
			} else {
				throw new Error("Unsupported member property " + ex.left.property.type);
			}
		} else if (ex.left.type == "Identifier") {
			const value = exec(env, ex.right);
			const key = ex.left.name;
			const scope = FIND(env, key) || TOP(env);

			if (symMagic in TOP(env)[key]) {
				scope[key].assign(value);
			} else {
				scope[key] = value;
			}

			return value;
		} else {
			throw new Error("Unsupported assignment target " + ex.left.type);
		}
	},

	CallExpression: function(env, ex) {
		const callee = exec(env, ex.callee);
		const args = [];
		for (const item of ex.arguments) {
			args.push(exec(env, item));
		}

		if (symMagic in callee) {
			return callee.functionCall(args);
		} else if (typeof callee == "function") {
			return callee(args);
		} else {
			throw new Error("Cannot call non-function");
		}
	},

	MemberExpression: function(env, ex) {
		if (ex.property.type != "Identifier") {
			throw new Error("Unsupported member property " + key);
		}

		let key;
		if (ex.computed) {
			// array index
			key = exec(env, ex.property);
		} else {
			// normal property reference
			key = ex.property.name;
		}

		const object = exec(env, ex.object);

		if (symMagic in object) {
			return object.getProperty(key);
		} else {
			return object[key];
		}
	},

	UnaryExpression: function(env, ex) {
		switch (ex.operator) {
			case "!": return !exec(env, ex.argument);
			default:
				throw new Error("Unsupported unary operator '" + ex.operator + "'");
		}
	},

	NumericLiteral: function(env, lit) {
		return lit.value;
	},

	StringLiteral: function(env, lit) {
		return lit.value;
	},

	Identifier: function(env, id) {
		return FIND(env, id.name)[id.name];
	},
};

function exec(env, js) {
	if (js.type in executors) {
		// console.log("Executing " + js.type, env);
		// console.log(js);
		return executors[js.type](env, js);
	} else {
		throw new Error("No executor defined for AST node type " + js.type);
	}
}

function symbolicExecute(js, environment) {
	// Stack of scopes
	let env = [environment];

	// If the top-level thing is a block statement, put the declarations in the
	// global scope. Otherwise the symbolic execution is kinda useless,
	// usually.
	if (js.type == "BlockStatement") {
		for (const item of js.body) {
			exec(env, item);
		}
	} else {
		exec(env, js);
	}

	return env;
}

symbolicExecute.symMagic = symMagic;

module.exports = symbolicExecute;
