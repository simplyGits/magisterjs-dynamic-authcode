const babelParser = require('@babel/parser')
const getAccountJS = require('./getAccountJS.js')
const symbolicExecute = require('./symbolicExecute.js')

function getMainCall(js) {
	if (js.program.body.length !== 1) {
		throw new Error('Expected exactly one expression in account.js')
	}

	// I've only observed the file being !function(){...}([...]); but I'd say
	// that the ! is at the very least unimportant for our analysis, so if it
	// isn't there, don't panic.
	if (js.program.body[0].expression.type === 'UnaryExpression') {
		return js.program.body[0].expression.argument
	} else {
		return js.program.body[0]
	}
}

function getMainLoader(mainCall) {
	return mainCall.callee
}

function getModuleList(mainCall) {
	if (mainCall.arguments.length !== 1) {
		throw new Error('Expected exactly one argument (the module list) in the function call in account.js')
	}
	return mainCall.arguments[0].elements
}

function findNode(js, predicate) {
	if (Array.isArray(js)) {
		for (const item of js) {
			const res = findNode(item, predicate)
			if (res != null) {
				return res
			}
		}
		return null
	}

	if (predicate(js)) {
		return js
	}

	switch (js.type) {
	case 'BlockStatement':
		return findNode(js.body, predicate)

	case 'ExpressionStatement':
		return findNode(js.expression, predicate)

	case 'IfStatement':
		return findNode(js.test, predicate) ||
					findNode(js.consequent, predicate) ||
					(js.alternate != null && findNode(js.alternate, predicate)) ||
					null

	case 'ThrowStatement':
		return findNode(js.argument, predicate)

	case 'ReturnStatement':
		return findNode(js.argument, predicate)

	case 'TryStatement':
		return findNode(js.block, predicate) ||
					(js.handler != null && findNode(js.handler, predicate)) ||
					findNode(js.guardedHandlers, predicate) ||
					(js.finalizer != null && findNode(js.finalizer, predicate)) ||
					null

	case 'ForStatement':
		return (js.init != null && findNode(js.init, predicate)) ||
					(js.test != null && findNode(js.test, predicate)) ||
					(js.update != null && findNode(js.update, predicate)) ||
					findNode(js.body, predicate) ||
					null

	case 'ForInStatement':
		return findNode(js.left, predicate) ||
					findNode(js.right, predicate) ||
					findNode(js.body, predicate) ||
					null

	case 'SwitchStatement':
		return findNode(js.discriminant, predicate) ||
					findNode(js.cases, predicate) ||
					null

	case 'SwitchCase':
		return findNode(js.consequent, predicate)

	case 'BreakStatement':
		return null

	case 'CatchClause':
		return (js.param != null && findNode(js.param, predicate)) ||
					findNode(js.body, predicate) ||
					null

	case 'VariableDeclaration':
		return findNode(js.declarations, predicate)

	case 'VariableDeclarator':
		return findNode(js.id, predicate) ||
					(js.init != null && findNode(js.init, predicate)) ||
					null

	case 'ObjectProperty':
		return findNode(js.value, predicate)

	case 'FunctionDeclaration':
		return findNode(js.body, predicate)

	case 'FunctionExpression':
		return findNode(js.body, predicate)

	case 'ObjectExpression':
		return findNode(js.properties, predicate)

	case 'SequenceExpression':
		return findNode(js.expressions, predicate)

	case 'AssignmentExpression':
		return findNode(js.left, predicate) || findNode(js.right, predicate) || null

	case 'NewExpression':
		return findNode(js.callee, predicate) || findNode(js.arguments, predicate) || null

	case 'CallExpression':
		return findNode(js.callee, predicate) || findNode(js.arguments, predicate) || null

	case 'ArrayExpression':
		return findNode(js.elements, predicate)

	case 'MemberExpression':
		return findNode(js.object, predicate) || findNode(js.property, predicate) || null

	case 'ConditionalExpression':
		return findNode(js.test, predicate) ||
					findNode(js.consequent, predicate) ||
					findNode(js.alternate, predicate) ||
					null

	case 'LogicalExpression':
		return findNode(js.left, predicate) || findNode(js.right, predicate) || null

	case 'BinaryExpression':
		return findNode(js.left, predicate) || findNode(js.right, predicate) || null

	case 'UpdateExpression':
		return findNode(js.argument, predicate)

	case 'UnaryExpression':
		return findNode(js.argument, predicate)

	case 'NullLiteral':
		return null

	case 'ThisExpression':
		return null

	case 'NumericLiteral':
		return null

	case 'RegExpLiteral':
		return null

	case 'StringLiteral':
		return null

	case 'Identifier':
		return null

	default:
		throw new Error('Unhandled node type in findNode: ' + js.type)
	}
}

function zipApply(fs, xs) {
	return fs.reduce((accum, f, i) => accum && f(xs[i]), true)
}

function isListP(fs, xs) {
	if (typeof fs === 'function') {
		return fs(xs)
	} else {
		return fs.length === xs.length && zipApply(fs, xs)
	}
}

function isMemberExpression(objPred, propPred) {
	return function(js) {
		return js.type === 'MemberExpression' && objPred(js.object) && propPred(js.property)
	}
}

function isCallExpression(calleePred, argPreds) {
	return function(js) {
		return js.type === 'CallExpression' &&
				calleePred(js.callee) &&
				isListP(argPreds, js.arguments)
	}
}

function isSequenceExpression(preds) {
	return function(js) {
		return js.type === 'SequenceExpression' &&
				isListP(preds, js.expressions)
	}
}

function isArrayExpression(preds) {
	return function(js) {
		return js.type === 'ArrayExpression' &&
				isListP(preds, js.elements)
	}
}

function isAssignmentExpression(leftPred, rightPred) {
	return function(js) {
		return js.type === 'AssignmentExpression' && leftPred(js.left) && rightPred(js.right)
	}
}

function isVariableDeclarator(idPred, initPred) {
	return function(js) {
		return js.type === 'VariableDeclarator' && idPred(js.id) && initPred(js.init)
	}
}

function isStringLiteral(pred) {
	return function(js) {
		return js.type === 'StringLiteral' && pred(js.value)
	}
}

function isIdentifier(pred) {
	return function(js) {
		return js.type === 'Identifier' && pred(js.name)
	}
}

function or(p1, p2) {
	return function(js) {
		return p1(js) || p2(js)
	}
}

function getAuthcode(js) {
	const mainCall = getMainCall(js)
	const mainLoader = getMainLoader(mainCall)
	const moduleList = getModuleList(mainCall)

	const modulesInitialised = []

	const noopCallProxy = {
		functionCall: function(args) {},
	}
	noopCallProxy[symbolicExecute.symMagic] = true

	const moduleProxy = function(index) {
		const proxy = {
			getProperty: function(name) {
				if (name === 'call') {
					return noopCallProxy
				} else {
					throw new Error('Unexpected property get on module: ' + name)
				}
			},
		}
		proxy[symbolicExecute.symMagic] = true

		return proxy
	}

	const argProxy = {
		getProperty: function(index) {
			modulesInitialised.push(index)
			return moduleProxy(index)
		},
	}
	argProxy[symbolicExecute.symMagic] = true

	const environment = {}
	environment[mainLoader.params[0].name] = argProxy
	symbolicExecute(mainLoader.body, environment)

	if (modulesInitialised.length !== 1) {
		throw new Error('Expected exactly one module to get top-initialised, not [' + modulesInitialised + ']')
	}

	const moduleIndex = modulesInitialised[0]

	const serviceCall = findNode(moduleList[moduleIndex],
		isCallExpression(
			isMemberExpression(_ => true, isIdentifier(s => s === 'service')),
			[ isStringLiteral(s => s === 'challengeService'), _ => true ]
		)
	)
	if (serviceCall == null) {
		throw new Error('No call to _.service("challengeService", _) found!')
	}

	const csFactoryRef = serviceCall.arguments[1]
	if (csFactoryRef.type !== 'Identifier') {
		throw new Error('Expected challengeService instance to be a variable, but it\'s a ' + csFactoryRef.type)
	}

	const csFactoryName = csFactoryRef.name

	const csFunction = findNode(moduleList[moduleIndex],
		or(
			isAssignmentExpression(
				isIdentifier(s => s === csFactoryName),
				_ => true
			),
			isVariableDeclarator(
				isIdentifier(s => s === csFactoryName),
				_ => true
			)
		)
	)

	if (csFunction == null) {
		throw new Error('Could not find definition of challengeService variable')
	}

	const asdAssignment = findNode(csFunction,
		isAssignmentExpression(
			isMemberExpression(
				isMemberExpression(
					_ => true,
					isIdentifier(s => s === 'prototype')
				),
				isIdentifier(s => s === 'addSessionData')
			),
			_ => true
		)
	)

	if (asdAssignment == null) {
		throw new Error('Could not find definition of addSessionData method')
	}

	const asdFunction = asdAssignment.right

	// The return statement is of the form:
	// return n[P[0]] = (t = [D, I, M, N], ["0", "1"].map(function(e) {
	//            return t[parseInt(e) || 0]
	//        }).join("")),
	//        n
	// We match the first assignment in the return statement.

	const retAsg = findNode(asdFunction,
		// ... = (t = [D, I, M, N], ["0", "1"].map(...).join(...))
		isAssignmentExpression(
			_ => true,
			isSequenceExpression([
				// t = [D, I, M, N]
				isAssignmentExpression(
					_ => true,
					isArrayExpression(_ => true)
				),
				// ["0", "1"].map(...).join(...)
				isCallExpression(
					isMemberExpression(
						// ["0", "1"].map(...)
						isCallExpression(
							isMemberExpression(
								isArrayExpression(_ => true),
								isIdentifier(s => s === 'map')
							),
							_ => true
						),
						isIdentifier(s => s === 'join')
					),
					_ => true
				),
			])
		)
	)

	if (retAsg == null) {
		throw new Error('Return statement with the authcode construction not found')
	}

	const partsArray = retAsg.right.expressions[0].right.elements
	const indicesArray = retAsg.right.expressions[1].callee.object.callee.object.elements

	for (let i = 0; i < partsArray.length; i++) {
		switch (partsArray[i].type) {
		case 'Identifier': {
			const name = partsArray[i].name
			partsArray[i] = findNode(moduleList[moduleIndex],
				or(
					isAssignmentExpression(
						isIdentifier(s => s === name),
						isStringLiteral(_ => true)
					),
					isVariableDeclarator(
						isIdentifier(s => s === name),
						isStringLiteral(_ => true)
					)
				)
			)

			if (partsArray[i] == null) {
				throw new Error('Can\'t find assignment to authcode part ' + name)
			}

			partsArray[i] =
					partsArray[i].type === 'AssignmentExpression'
						? partsArray[i].right.value
						: partsArray[i].init.value
			break
		}

		// Haven't observed this, but I can imagine it happens
		case 'StringLiteral':
			partsArray[i] = partsArray[i].value
			break

		default:
			throw new Error('Unexpected node type in authcode parts array: ' + partsArray[i].type)
		}
	}

	const authcode = indicesArray.map(se => partsArray[+se.value]).join('')

	return authcode
}

async function getAuthcodeFromNet(timeout) {
	const text = await getAccountJS(timeout)
	return getAuthcode(babelParser.parse(text))
}

module.exports = getAuthcodeFromNet
