module.exports = [function(t, e, n) {
    n(1), t.exports = n(326)
}, function(t, e, n) {
    (function(t) {
        "use strict";

        function e(t, e, n) {
            t[e] || Object[r](t, e, {
                writable: !0,
                configurable: !0,
                value: n
            })
        }
        if (n(2), n(322), n(323), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        t._babelPolyfill = !0;
        var r = "defineProperty";
        e(String.prototype, "padLeft", "".padStart), e(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t) {
            [][t] && e(Array, t, Function.call.bind([][t]))
        })
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    n(3), n(51), n(52), n(53), n(54), n(56), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(69), n(71), n(73), n(75), n(78), n(79), n(80), n(84), n(86), n(88), n(91), n(92), n(93), n(94), n(96), n(97), n(98), n(99), n(100), n(101), n(102), n(104), n(105), n(106), n(108), n(109), n(110), n(112), n(114), n(115), n(116), n(117), n(118), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(126), n(131), n(132), n(136), n(137), n(138), n(139), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(157), n(158), n(160), n(161), n(167), n(168), n(170), n(171), n(172), n(176), n(177), n(178), n(179), n(180), n(182), n(183), n(184), n(185), n(188), n(190), n(191), n(192), n(194), n(196), n(198), n(199), n(200), n(202), n(203), n(204), n(205), n(215), n(219), n(220), n(222), n(223), n(227), n(228), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(250), n(251), n(252), n(253), n(254), n(256), n(257), n(258), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(269), n(270), n(272), n(273), n(274), n(275), n(278), n(279), n(281), n(282), n(283), n(284), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), t.exports = n(9)
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(5),
        s = n(6),
        o = n(8),
        a = n(18),
        u = n(22).KEY,
        c = n(7),
        f = n(23),
        h = n(24),
        l = n(19),
        d = n(25),
        p = n(26),
        g = n(27),
        y = n(29),
        v = n(44),
        m = n(12),
        S = n(32),
        b = n(16),
        w = n(17),
        _ = n(45),
        x = n(48),
        E = n(50),
        A = n(11),
        F = n(30),
        P = E.f,
        O = A.f,
        C = x.f,
        T = r.Symbol,
        j = r.JSON,
        I = j && j.stringify,
        R = "prototype",
        D = d("_hidden"),
        H = d("toPrimitive"),
        k = {}.propertyIsEnumerable,
        N = f("symbol-registry"),
        B = f("symbols"),
        M = f("op-symbols"),
        V = Object[R],
        L = "function" == typeof T,
        K = r.QObject,
        U = !K || !K[R] || !K[R].findChild,
        q = s && c(function() {
            return 7 != _(O({}, "a", {
                get: function() {
                    return O(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var r = P(V, e);
            r && delete V[e], O(t, e, n), r && t !== V && O(V, e, r)
        } : O,
        W = function(t) {
            var e = B[t] = _(T[R]);
            return e._k = t, e
        },
        z = L && "symbol" == typeof T.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof T
        },
        J = function(t, e, n) {
            return t === V && J(M, e, n), m(t), e = b(e, !0), m(n), i(B, e) ? (n.enumerable ? (i(t, D) && t[D][e] && (t[D][e] = !1), n = _(n, {
                enumerable: w(0, !1)
            })) : (i(t, D) || O(t, D, w(1, {})), t[D][e] = !0), q(t, e, n)) : O(t, e, n)
        },
        Y = function(t, e) {
            m(t);
            for (var n, r = y(e = S(e)), i = 0, s = r.length; s > i;) J(t, n = r[i++], e[n]);
            return t
        },
        G = function(t, e) {
            return void 0 === e ? _(t) : Y(_(t), e)
        },
        X = function(t) {
            var e = k.call(this, t = b(t, !0));
            return !(this === V && i(B, t) && !i(M, t)) && (!(e || !i(this, t) || !i(B, t) || i(this, D) && this[D][t]) || e)
        },
        $ = function(t, e) {
            if (t = S(t), e = b(e, !0), t !== V || !i(B, e) || i(M, e)) {
                var n = P(t, e);
                return !n || !i(B, e) || i(t, D) && t[D][e] || (n.enumerable = !0), n
            }
        },
        Q = function(t) {
            for (var e, n = C(S(t)), r = [], s = 0; n.length > s;) i(B, e = n[s++]) || e == D || e == u || r.push(e);
            return r
        },
        Z = function(t) {
            for (var e, n = t === V, r = C(n ? M : S(t)), s = [], o = 0; r.length > o;) !i(B, e = r[o++]) || n && !i(V, e) || s.push(B[e]);
            return s
        };
    L || (T = function() {
        if (this instanceof T) throw TypeError("Symbol is not a constructor!");
        var t = l(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === V && e.call(M, n), i(this, D) && i(this[D], t) && (this[D][t] = !1), q(this, t, w(1, n))
            };
        return s && U && q(V, t, {
            configurable: !0,
            set: e
        }), W(t)
    }, a(T[R], "toString", function() {
        return this._k
    }), E.f = $, A.f = J, n(49).f = x.f = Q, n(43).f = X, n(42).f = Z, s && !n(28) && a(V, "propertyIsEnumerable", X, !0), p.f = function(t) {
        return W(d(t))
    }), o(o.G + o.W + o.F * !L, {
        Symbol: T
    });
    for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) d(tt[et++]);
    for (var nt = F(d.store), rt = 0; nt.length > rt;) g(nt[rt++]);
    o(o.S + o.F * !L, "Symbol", {
        for: function(t) {
            return i(N, t += "") ? N[t] : N[t] = T(t)
        },
        keyFor: function(t) {
            if (!z(t)) throw TypeError(t + " is not a symbol!");
            for (var e in N)
                if (N[e] === t) return e
        },
        useSetter: function() {
            U = !0
        },
        useSimple: function() {
            U = !1
        }
    }), o(o.S + o.F * !L, "Object", {
        create: G,
        defineProperty: J,
        defineProperties: Y,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: Z
    }), j && o(o.S + o.F * (!L || c(function() {
        var t = T();
        return "[null]" != I([t]) || "{}" != I({
            a: t
        }) || "{}" != I(Object(t))
    })), "JSON", {
        stringify: function(t) {
            if (void 0 !== t && !z(t)) {
                for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                return e = r[1], "function" == typeof e && (n = e), !n && v(e) || (e = function(t, e) {
                    if (n && (e = n.call(this, t, e)), !z(e)) return e
                }), r[1] = e, I.apply(j, r)
            }
        }
    }), T[R][H] || n(10)(T[R], H, T[R].valueOf), h(T, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0)
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    t.exports = !n(7)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(9),
        s = n(10),
        o = n(18),
        a = n(20),
        u = "prototype",
        c = function(t, e, n) {
            var f, h, l, d, p = t & c.F,
                g = t & c.G,
                y = t & c.S,
                v = t & c.P,
                m = t & c.B,
                S = g ? r : y ? r[e] || (r[e] = {}) : (r[e] || {})[u],
                b = g ? i : i[e] || (i[e] = {}),
                w = b[u] || (b[u] = {});
            g && (n = e);
            for (f in n) h = !p && S && void 0 !== S[f], l = (h ? S : n)[f], d = m && h ? a(l, r) : v && "function" == typeof l ? a(Function.call, l) : l, S && o(S, f, l, t & c.U), b[f] != l && s(b, f, d), v && w[f] != l && (w[f] = l)
        };
    r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e) {
    var n = t.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var r = n(11),
        i = n(17);
    t.exports = n(6) ? function(t, e, n) {
        return r.f(t, e, i(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(14),
        s = n(16),
        o = Object.defineProperty;
    e.f = n(6) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = s(e, !0), r(n), i) try {
            return o(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    t.exports = !n(6) && !n(7)(function() {
        return 7 != Object.defineProperty(n(15)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var r = n(13),
        i = n(4).document,
        s = r(i) && r(i.createElement);
    t.exports = function(t) {
        return s ? i.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(10),
        s = n(5),
        o = n(19)("src"),
        a = "toString",
        u = Function[a],
        c = ("" + u).split(a);
    n(9).inspectSource = function(t) {
        return u.call(t)
    }, (t.exports = function(t, e, n, a) {
        var u = "function" == typeof n;
        u && (s(n, "name") || i(n, "name", e)), t[e] !== n && (u && (s(n, o) || i(n, o, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
    })(Function.prototype, a, function() {
        return "function" == typeof this && this[o] || u.call(this)
    })
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e, n) {
    var r = n(21);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var r = n(19)("meta"),
        i = n(13),
        s = n(5),
        o = n(11).f,
        a = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(7)(function() {
            return u(Object.preventExtensions({}))
        }),
        f = function(t) {
            o(t, r, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        },
        h = function(t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!s(t, r)) {
                if (!u(t)) return "F";
                if (!e) return "E";
                f(t)
            }
            return t[r].i
        },
        l = function(t, e) {
            if (!s(t, r)) {
                if (!u(t)) return !0;
                if (!e) return !1;
                f(t)
            }
            return t[r].w
        },
        d = function(t) {
            return c && p.NEED && u(t) && !s(t, r) && f(t), t
        },
        p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: h,
            getWeak: l,
            onFreeze: d
        }
}, function(t, e, n) {
    var r = n(4),
        i = "__core-js_shared__",
        s = r[i] || (r[i] = {});
    t.exports = function(t) {
        return s[t] || (s[t] = {})
    }
}, function(t, e, n) {
    var r = n(11).f,
        i = n(5),
        s = n(25)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, s) && r(t, s, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var r = n(23)("wks"),
        i = n(19),
        s = n(4).Symbol,
        o = "function" == typeof s,
        a = t.exports = function(t) {
            return r[t] || (r[t] = o && s[t] || (o ? s : i)("Symbol." + t))
        };
    a.store = r
}, function(t, e, n) {
    e.f = n(25)
}, function(t, e, n) {
    var r = n(4),
        i = n(9),
        s = n(28),
        o = n(26),
        a = n(11).f;
    t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = s ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {
            value: o.f(t)
        })
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r = n(30),
        i = n(42),
        s = n(43);
    t.exports = function(t) {
        var e = r(t),
            n = i.f;
        if (n)
            for (var o, a = n(t), u = s.f, c = 0; a.length > c;) u.call(t, o = a[c++]) && e.push(o);
        return e
    }
}, function(t, e, n) {
    var r = n(31),
        i = n(41);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(32),
        s = n(36)(!1),
        o = n(40)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = i(t),
            u = 0,
            c = [];
        for (n in a) n != o && r(a, n) && c.push(n);
        for (; e.length > u;) r(a, n = e[u++]) && (~s(c, n) || c.push(n));
        return c
    }
}, function(t, e, n) {
    var r = n(33),
        i = n(35);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    var r = n(34);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(32),
        i = n(37),
        s = n(39);
    t.exports = function(t) {
        return function(e, n, o) {
            var a, u = r(e),
                c = i(u.length),
                f = s(o, c);
            if (t && n != n) {
                for (; c > f;)
                    if (a = u[f++], a != a) return !0
            } else
                for (; c > f; f++)
                    if ((t || f in u) && u[f] === n) return t || f || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var r = n(38),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    var r = n(38),
        i = Math.max,
        s = Math.min;
    t.exports = function(t, e) {
        return t = r(t), t < 0 ? i(t + e, 0) : s(t, e)
    }
}, function(t, e, n) {
    var r = n(23)("keys"),
        i = n(19);
    t.exports = function(t) {
        return r[t] || (r[t] = i(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var r = n(34);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(46),
        s = n(41),
        o = n(40)("IE_PROTO"),
        a = function() {},
        u = "prototype",
        c = function() {
            var t, e = n(15)("iframe"),
                r = s.length,
                i = "<",
                o = ">";
            for (e.style.display = "none", n(47).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(i + "script" + o + "document.F=Object" + i + "/script" + o), t.close(), c = t.F; r--;) delete c[u][s[r]];
            return c()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a[u] = r(t), n = new a, a[u] = null, n[o] = t) : n = c(), void 0 === e ? n : i(n, e)
    }
}, function(t, e, n) {
    var r = n(11),
        i = n(12),
        s = n(30);
    t.exports = n(6) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var n, o = s(e), a = o.length, u = 0; a > u;) r.f(t, n = o[u++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(4).document;
    t.exports = r && r.documentElement
}, function(t, e, n) {
    var r = n(32),
        i = n(49).f,
        s = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        a = function(t) {
            try {
                return i(t)
            } catch (t) {
                return o.slice()
            }
        };
    t.exports.f = function(t) {
        return o && "[object Window]" == s.call(t) ? a(t) : i(r(t))
    }
}, function(t, e, n) {
    var r = n(31),
        i = n(41).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(43),
        i = n(17),
        s = n(32),
        o = n(16),
        a = n(5),
        u = n(14),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(6) ? c : function(t, e) {
        if (t = s(t), e = o(e, !0), u) try {
            return c(t, e)
        } catch (t) {}
        if (a(t, e)) return i(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Object", {
        create: n(45)
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S + r.F * !n(6), "Object", {
        defineProperty: n(11).f
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S + r.F * !n(6), "Object", {
        defineProperties: n(46)
    })
}, function(t, e, n) {
    var r = n(32),
        i = n(50).f;
    n(55)("getOwnPropertyDescriptor", function() {
        return function(t, e) {
            return i(r(t), e)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(9),
        s = n(7);
    t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
            o = {};
        o[t] = e(n), r(r.S + r.F * s(function() {
            n(1)
        }), "Object", o)
    }
}, function(t, e, n) {
    var r = n(57),
        i = n(58);
    n(55)("getPrototypeOf", function() {
        return function(t) {
            return i(r(t))
        }
    })
}, function(t, e, n) {
    var r = n(35);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(57),
        s = n(40)("IE_PROTO"),
        o = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), r(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
    }
}, function(t, e, n) {
    var r = n(57),
        i = n(30);
    n(55)("keys", function() {
        return function(t) {
            return i(r(t))
        }
    })
}, function(t, e, n) {
    n(55)("getOwnPropertyNames", function() {
        return n(48).f
    })
}, function(t, e, n) {
    var r = n(13),
        i = n(22).onFreeze;
    n(55)("freeze", function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function(t, e, n) {
    var r = n(13),
        i = n(22).onFreeze;
    n(55)("seal", function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function(t, e, n) {
    var r = n(13),
        i = n(22).onFreeze;
    n(55)("preventExtensions", function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function(t, e, n) {
    var r = n(13);
    n(55)("isFrozen", function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    })
}, function(t, e, n) {
    var r = n(13);
    n(55)("isSealed", function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    })
}, function(t, e, n) {
    var r = n(13);
    n(55)("isExtensible", function(t) {
        return function(e) {
            return !!r(e) && (!t || t(e))
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S + r.F, "Object", {
        assign: n(68)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(30),
        i = n(42),
        s = n(43),
        o = n(57),
        a = n(33),
        u = Object.assign;
    t.exports = !u || n(7)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach(function(t) {
            e[t] = t
        }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
    }) ? function(t, e) {
        for (var n = o(t), u = arguments.length, c = 1, f = i.f, h = s.f; u > c;)
            for (var l, d = a(arguments[c++]), p = f ? r(d).concat(f(d)) : r(d), g = p.length, y = 0; g > y;) h.call(d, l = p[y++]) && (n[l] = d[l]);
        return n
    } : u
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Object", {
        is: n(70)
    })
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Object", {
        setPrototypeOf: n(72).set
    })
}, function(t, e, n) {
    var r = n(13),
        i = n(12),
        s = function(t, e) {
            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                r = n(20)(Function.call, n(50).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return s(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: s
    }
}, function(t, e, n) {
    "use strict";
    var r = n(74),
        i = {};
    i[n(25)("toStringTag")] = "z", i + "" != "[object z]" && n(18)(Object.prototype, "toString", function() {
        return "[object " + r(this) + "]"
    }, !0)
}, function(t, e, n) {
    var r = n(34),
        i = n(25)("toStringTag"),
        s = "Arguments" == r(function() {
            return arguments
        }()),
        o = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        };
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = o(e = Object(t), i)) ? n : s ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.P, "Function", {
        bind: n(76)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(21),
        i = n(13),
        s = n(77),
        o = [].slice,
        a = {},
        u = function(t, e, n) {
            if (!(e in a)) {
                for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                a[e] = Function("F,a", "return new F(" + r.join(",") + ")")
            }
            return a[e](t, n)
        };
    t.exports = Function.bind || function(t) {
        var e = r(this),
            n = o.call(arguments, 1),
            a = function() {
                var r = n.concat(o.call(arguments));
                return this instanceof a ? u(e, r.length, r) : s(e, r, t)
            };
        return i(e.prototype) && (a.prototype = e.prototype), a
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var r = n(11).f,
        i = Function.prototype,
        s = /^\s*function ([^ (]*)/,
        o = "name";
    o in i || n(6) && r(i, o, {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(s)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(13),
        i = n(58),
        s = n(25)("hasInstance"),
        o = Function.prototype;
    s in o || n(11).f(o, s, {
        value: function(t) {
            if ("function" != typeof this || !r(t)) return !1;
            if (!r(this.prototype)) return t instanceof this;
            for (; t = i(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(81);
    r(r.G + r.F * (parseInt != i), {
        parseInt: i
    })
}, function(t, e, n) {
    var r = n(4).parseInt,
        i = n(82).trim,
        s = n(83),
        o = /^[-+]?0[xX]/;
    t.exports = 8 !== r(s + "08") || 22 !== r(s + "0x16") ? function(t, e) {
        var n = i(String(t), 3);
        return r(n, e >>> 0 || (o.test(n) ? 16 : 10))
    } : r
}, function(t, e, n) {
    var r = n(8),
        i = n(35),
        s = n(7),
        o = n(83),
        a = "[" + o + "]",
        u = "​",
        c = RegExp("^" + a + a + "*"),
        f = RegExp(a + a + "*$"),
        h = function(t, e, n) {
            var i = {},
                a = s(function() {
                    return !!o[t]() || u[t]() != u
                }),
                c = i[t] = a ? e(l) : o[t];
            n && (i[n] = c), r(r.P + r.F * a, "String", i)
        },
        l = h.trim = function(t, e) {
            return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(f, "")), t
        };
    t.exports = h
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    var r = n(8),
        i = n(85);
    r(r.G + r.F * (parseFloat != i), {
        parseFloat: i
    })
}, function(t, e, n) {
    var r = n(4).parseFloat,
        i = n(82).trim;
    t.exports = 1 / r(n(83) + "-0") !== -(1 / 0) ? function(t) {
        var e = i(String(t), 3),
            n = r(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : r
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(5),
        s = n(34),
        o = n(87),
        a = n(16),
        u = n(7),
        c = n(49).f,
        f = n(50).f,
        h = n(11).f,
        l = n(82).trim,
        d = "Number",
        p = r[d],
        g = p,
        y = p.prototype,
        v = s(n(45)(y)) == d,
        m = "trim" in String.prototype,
        S = function(t) {
            var e = a(t, !1);
            if ("string" == typeof e && e.length > 2) {
                e = m ? e.trim() : l(e, 3);
                var n, r, i, s = e.charCodeAt(0);
                if (43 === s || 45 === s) {
                    if (n = e.charCodeAt(2), 88 === n || 120 === n) return NaN
                } else if (48 === s) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, i = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var o, u = e.slice(2), c = 0, f = u.length; c < f; c++)
                        if (o = u.charCodeAt(c), o < 48 || o > i) return NaN;
                    return parseInt(u, r)
                }
            }
            return +e
        };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof p && (v ? u(function() {
                y.valueOf.call(n)
            }) : s(n) != d) ? o(new g(S(e)), n, p) : S(e)
        };
        for (var b, w = n(6) ? c(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; w.length > _; _++) i(g, b = w[_]) && !i(p, b) && h(p, b, f(g, b));
        p.prototype = y, y.constructor = p, n(18)(r, d, p)
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(72).set;
    t.exports = function(t, e, n) {
        var s, o = e.constructor;
        return o !== n && "function" == typeof o && (s = o.prototype) !== n.prototype && r(s) && i && i(t, s), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(38),
        s = n(89),
        o = n(90),
        a = 1..toFixed,
        u = Math.floor,
        c = [0, 0, 0, 0, 0, 0],
        f = "Number.toFixed: incorrect invocation!",
        h = "0",
        l = function(t, e) {
            for (var n = -1, r = e; ++n < 6;) r += t * c[n], c[n] = r % 1e7, r = u(r / 1e7)
        },
        d = function(t) {
            for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = u(n / t), n = n % t * 1e7
        },
        p = function() {
            for (var t = 6, e = ""; --t >= 0;)
                if ("" !== e || 0 === t || 0 !== c[t]) {
                    var n = String(c[t]);
                    e = "" === e ? n : e + o.call(h, 7 - n.length) + n
                } return e
        },
        g = function(t, e, n) {
            return 0 === e ? n : e % 2 === 1 ? g(t, e - 1, n * t) : g(t * t, e / 2, n)
        },
        y = function(t) {
            for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
            for (; n >= 2;) e += 1, n /= 2;
            return e
        };
    r(r.P + r.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(7)(function() {
        a.call({})
    })), "Number", {
        toFixed: function(t) {
            var e, n, r, a, u = s(this, f),
                c = i(t),
                v = "",
                m = h;
            if (c < 0 || c > 20) throw RangeError(f);
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (v = "-", u = -u), u > 1e-21)
                if (e = y(u * g(2, 69, 1)) - 69, n = e < 0 ? u * g(2, -e, 1) : u / g(2, e, 1), n *= 4503599627370496, e = 52 - e, e > 0) {
                    for (l(0, n), r = c; r >= 7;) l(1e7, 0), r -= 7;
                    for (l(g(10, r, 1), 0), r = e - 1; r >= 23;) d(1 << 23), r -= 23;
                    d(1 << r), l(1, 1), d(2), m = p()
                } else l(0, n), l(1 << -e, 0), m = p() + o.call(h, c);
            return c > 0 ? (a = m.length, m = v + (a <= c ? "0." + o.call(h, c - a) + m : m.slice(0, a - c) + "." + m.slice(a - c))) : m = v + m, m
        }
    })
}, function(t, e, n) {
    var r = n(34);
    t.exports = function(t, e) {
        if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
        return +t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(38),
        i = n(35);
    t.exports = function(t) {
        var e = String(i(this)),
            n = "",
            s = r(t);
        if (s < 0 || s == 1 / 0) throw RangeError("Count can't be negative");
        for (; s > 0;
            (s >>>= 1) && (e += e)) 1 & s && (n += e);
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(7),
        s = n(89),
        o = 1..toPrecision;
    r(r.P + r.F * (i(function() {
        return "1" !== o.call(1, void 0)
    }) || !i(function() {
        o.call({})
    })), "Number", {
        toPrecision: function(t) {
            var e = s(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? o.call(e) : o.call(e, t)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(4).isFinite;
    r(r.S, "Number", {
        isFinite: function(t) {
            return "number" == typeof t && i(t)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Number", {
        isInteger: n(95)
    })
}, function(t, e, n) {
    var r = n(13),
        i = Math.floor;
    t.exports = function(t) {
        return !r(t) && isFinite(t) && i(t) === t
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Number", {
        isNaN: function(t) {
            return t != t
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(95),
        s = Math.abs;
    r(r.S, "Number", {
        isSafeInteger: function(t) {
            return i(t) && s(t) <= 9007199254740991
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(85);
    r(r.S + r.F * (Number.parseFloat != i), "Number", {
        parseFloat: i
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(81);
    r(r.S + r.F * (Number.parseInt != i), "Number", {
        parseInt: i
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(103),
        s = Math.sqrt,
        o = Math.acosh;
    r(r.S + r.F * !(o && 710 == Math.floor(o(Number.MAX_VALUE)) && o(1 / 0) == 1 / 0), "Math", {
        acosh: function(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + s(t - 1) * s(t + 1))
        }
    })
}, function(t, e) {
    t.exports = Math.log1p || function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function(t, e, n) {
    function r(t) {
        return isFinite(t = +t) && 0 != t ? t < 0 ? -r(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
    }
    var i = n(8),
        s = Math.asinh;
    i(i.S + i.F * !(s && 1 / s(0) > 0), "Math", {
        asinh: r
    })
}, function(t, e, n) {
    var r = n(8),
        i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
        atanh: function(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(107);
    r(r.S, "Math", {
        cbrt: function(t) {
            return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = Math.exp;
    r(r.S, "Math", {
        cosh: function(t) {
            return (i(t = +t) + i(-t)) / 2
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(111);
    r(r.S + r.F * (i != Math.expm1), "Math", {
        expm1: i
    })
}, function(t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || n(-2e-17) != -2e-17 ? function(t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : n
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        fround: n(113)
    })
}, function(t, e, n) {
    var r = n(107),
        i = Math.pow,
        s = i(2, -52),
        o = i(2, -23),
        a = i(2, 127) * (2 - o),
        u = i(2, -126),
        c = function(t) {
            return t + 1 / s - 1 / s
        };
    t.exports = Math.fround || function(t) {
        var e, n, i = Math.abs(t),
            f = r(t);
        return i < u ? f * c(i / u / o) * u * o : (e = (1 + o / s) * i, n = e - (e - i), n > a || n != n ? f * (1 / 0) : f * n)
    }
}, function(t, e, n) {
    var r = n(8),
        i = Math.abs;
    r(r.S, "Math", {
        hypot: function(t, e) {
            for (var n, r, s = 0, o = 0, a = arguments.length, u = 0; o < a;) n = i(arguments[o++]), u < n ? (r = u / n, s = s * r * r + 1, u = n) : n > 0 ? (r = n / u, s += r * r) : s += n;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(s)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = Math.imul;
    r(r.S + r.F * n(7)(function() {
        return i(4294967295, 5) != -5 || 2 != i.length
    }), "Math", {
        imul: function(t, e) {
            var n = 65535,
                r = +t,
                i = +e,
                s = n & r,
                o = n & i;
            return 0 | s * o + ((n & r >>> 16) * o + s * (n & i >>> 16) << 16 >>> 0)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        log10: function(t) {
            return Math.log(t) * Math.LOG10E
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        log1p: n(103)
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        log2: function(t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        sign: n(107)
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(111),
        s = Math.exp;
    r(r.S + r.F * n(7)(function() {
        return !Math.sinh(-2e-17) != -2e-17
    }), "Math", {
        sinh: function(t) {
            return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (s(t - 1) - s(-t - 1)) * (Math.E / 2)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(111),
        s = Math.exp;
    r(r.S, "Math", {
        tanh: function(t) {
            var e = i(t = +t),
                n = i(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (s(t) + s(-t))
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        trunc: function(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(39),
        s = String.fromCharCode,
        o = String.fromCodePoint;
    r(r.S + r.F * (!!o && 1 != o.length), "String", {
        fromCodePoint: function(t) {
            for (var e, n = [], r = arguments.length, o = 0; r > o;) {
                if (e = +arguments[o++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? s(e) : s(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(32),
        s = n(37);
    r(r.S, "String", {
        raw: function(t) {
            for (var e = i(t.raw), n = s(e.length), r = arguments.length, o = [], a = 0; n > a;) o.push(String(e[a++])), a < r && o.push(String(arguments[a]));
            return o.join("")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(82)("trim", function(t) {
        return function() {
            return t(this, 3)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(127)(!0);
    n(128)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    var r = n(38),
        i = n(35);
    t.exports = function(t) {
        return function(e, n) {
            var s, o, a = String(i(e)),
                u = r(n),
                c = a.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (s = a.charCodeAt(u), s < 55296 || s > 56319 || u + 1 === c || (o = a.charCodeAt(u + 1)) < 56320 || o > 57343 ? t ? a.charAt(u) : s : t ? a.slice(u, u + 2) : (s - 55296 << 10) + (o - 56320) + 65536)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(28),
        i = n(8),
        s = n(18),
        o = n(10),
        a = n(5),
        u = n(129),
        c = n(130),
        f = n(24),
        h = n(58),
        l = n(25)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = "@@iterator",
        g = "keys",
        y = "values",
        v = function() {
            return this
        };
    t.exports = function(t, e, n, m, S, b, w) {
        c(n, e, m);
        var _, x, E, A = function(t) {
                if (!d && t in C) return C[t];
                switch (t) {
                    case g:
                        return function() {
                            return new n(this, t)
                        };
                    case y:
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            F = e + " Iterator",
            P = S == y,
            O = !1,
            C = t.prototype,
            T = C[l] || C[p] || S && C[S],
            j = T || A(S),
            I = S ? P ? A("entries") : j : void 0,
            R = "Array" == e ? C.entries || T : T;
        if (R && (E = h(R.call(new t)), E !== Object.prototype && E.next && (f(E, F, !0), r || a(E, l) || o(E, l, v))), P && T && T.name !== y && (O = !0, j = function() {
                return T.call(this)
            }), r && !w || !d && !O && C[l] || o(C, l, j), u[e] = j, u[F] = v, S)
            if (_ = {
                    values: P ? j : A(y),
                    keys: b ? j : A(g),
                    entries: I
                }, w)
                for (x in _) x in C || s(C, x, _[x]);
            else i(i.P + i.F * (d || O), e, _);
        return _
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    "use strict";
    var r = n(45),
        i = n(17),
        s = n(24),
        o = {};
    n(10)(o, n(25)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = r(o, {
            next: i(1, n)
        }), s(t, e + " Iterator")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(127)(!1);
    r(r.P, "String", {
        codePointAt: function(t) {
            return i(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(37),
        s = n(133),
        o = "endsWith",
        a = "" [o];
    r(r.P + r.F * n(135)(o), "String", {
        endsWith: function(t) {
            var e = s(this, t, o),
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = i(e.length),
                u = void 0 === n ? r : Math.min(i(n), r),
                c = String(t);
            return a ? a.call(e, c, u) : e.slice(u - c.length, u) === c
        }
    })
}, function(t, e, n) {
    var r = n(134),
        i = n(35);
    t.exports = function(t, e, n) {
        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(i(t))
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(34),
        s = n(25)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == i(t))
    }
}, function(t, e, n) {
    var r = n(25)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(133),
        s = "includes";
    r(r.P + r.F * n(135)(s), "String", {
        includes: function(t) {
            return !!~i(this, t, s).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.P, "String", {
        repeat: n(90)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(37),
        s = n(133),
        o = "startsWith",
        a = "" [o];
    r(r.P + r.F * n(135)(o), "String", {
        startsWith: function(t) {
            var e = s(this, t, o),
                n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                r = String(t);
            return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("anchor", function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(7),
        s = n(35),
        o = /"/g,
        a = function(t, e, n, r) {
            var i = String(s(t)),
                a = "<" + e;
            return "" !== n && (a += " " + n + '="' + String(r).replace(o, "&quot;") + '"'), a + ">" + i + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var n = {};
        n[t] = e(a), r(r.P + r.F * i(function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        }), "String", n)
    }
}, function(t, e, n) {
    "use strict";
    n(140)("big", function(t) {
        return function() {
            return t(this, "big", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("blink", function(t) {
        return function() {
            return t(this, "blink", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("bold", function(t) {
        return function() {
            return t(this, "b", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("fixed", function(t) {
        return function() {
            return t(this, "tt", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("fontcolor", function(t) {
        return function(e) {
            return t(this, "font", "color", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("fontsize", function(t) {
        return function(e) {
            return t(this, "font", "size", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("italics", function(t) {
        return function() {
            return t(this, "i", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("link", function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("small", function(t) {
        return function() {
            return t(this, "small", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("strike", function(t) {
        return function() {
            return t(this, "strike", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("sub", function(t) {
        return function() {
            return t(this, "sub", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(140)("sup", function(t) {
        return function() {
            return t(this, "sup", "", "")
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(57),
        s = n(16);
    r(r.P + r.F * n(7)(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    }), "Date", {
        toJSON: function(t) {
            var e = i(this),
                n = s(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(156);
    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
        toISOString: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(7),
        i = Date.prototype.getTime,
        s = Date.prototype.toISOString,
        o = function(t) {
            return t > 9 ? t : "0" + t
        };
    t.exports = r(function() {
        return "0385-07-25T07:06:39.999Z" != s.call(new Date(-5e13 - 1))
    }) || !r(function() {
        s.call(new Date(NaN))
    }) ? function() {
        if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
        var t = this,
            e = t.getUTCFullYear(),
            n = t.getUTCMilliseconds(),
            r = e < 0 ? "-" : e > 9999 ? "+" : "";
        return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + o(t.getUTCMonth() + 1) + "-" + o(t.getUTCDate()) + "T" + o(t.getUTCHours()) + ":" + o(t.getUTCMinutes()) + ":" + o(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + o(n)) + "Z"
    } : s
}, function(t, e, n) {
    var r = Date.prototype,
        i = "Invalid Date",
        s = "toString",
        o = r[s],
        a = r.getTime;
    new Date(NaN) + "" != i && n(18)(r, s, function() {
        var t = a.call(this);
        return t === t ? o.call(this) : i
    })
}, function(t, e, n) {
    var r = n(25)("toPrimitive"),
        i = Date.prototype;
    r in i || n(10)(i, r, n(159))
}, function(t, e, n) {
    "use strict";
    var r = n(12),
        i = n(16),
        s = "number";
    t.exports = function(t) {
        if ("string" !== t && t !== s && "default" !== t) throw TypeError("Incorrect hint");
        return i(r(this), t != s)
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Array", {
        isArray: n(44)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(20),
        i = n(8),
        s = n(57),
        o = n(162),
        a = n(163),
        u = n(37),
        c = n(164),
        f = n(165);
    i(i.S + i.F * !n(166)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, i, h, l = s(t),
                d = "function" == typeof this ? this : Array,
                p = arguments.length,
                g = p > 1 ? arguments[1] : void 0,
                y = void 0 !== g,
                v = 0,
                m = f(l);
            if (y && (g = r(g, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && a(m))
                for (e = u(l.length), n = new d(e); e > v; v++) c(n, v, y ? g(l[v], v) : l[v]);
            else
                for (h = m.call(l), n = new d; !(i = h.next()).done; v++) c(n, v, y ? o(h, g, [i.value, v], !0) : i.value);
            return n.length = v, n
        }
    })
}, function(t, e, n) {
    var r = n(12);
    t.exports = function(t, e, n, i) {
        try {
            return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var s = t.return;
            throw void 0 !== s && r(s.call(t)), e
        }
    }
}, function(t, e, n) {
    var r = n(129),
        i = n(25)("iterator"),
        s = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || s[i] === t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(11),
        i = n(17);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, i(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(74),
        i = n(25)("iterator"),
        s = n(129);
    t.exports = n(9).getIteratorMethod = function(t) {
        if (void 0 != t) return t[i] || t["@@iterator"] || s[r(t)]
    }
}, function(t, e, n) {
    var r = n(25)("iterator"),
        i = !1;
    try {
        var s = [7][r]();
        s.return = function() {
            i = !0
        }, Array.from(s, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var s = [7],
                o = s[r]();
            o.next = function() {
                return {
                    done: n = !0
                }
            }, s[r] = function() {
                return o
            }, t(s)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(164);
    r(r.S + r.F * n(7)(function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    }), "Array", {
        of: function() {
            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(32),
        s = [].join;
    r(r.P + r.F * (n(33) != Object || !n(169)(s)), "Array", {
        join: function(t) {
            return s.call(i(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(7);
    t.exports = function(t, e) {
        return !!t && r(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(47),
        s = n(34),
        o = n(39),
        a = n(37),
        u = [].slice;
    r(r.P + r.F * n(7)(function() {
        i && u.call(i)
    }), "Array", {
        slice: function(t, e) {
            var n = a(this.length),
                r = s(this);
            if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);
            for (var i = o(t, n), c = o(e, n), f = a(c - i), h = Array(f), l = 0; l < f; l++) h[l] = "String" == r ? this.charAt(i + l) : this[i + l];
            return h
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(21),
        s = n(57),
        o = n(7),
        a = [].sort,
        u = [1, 2, 3];
    r(r.P + r.F * (o(function() {
        u.sort(void 0)
    }) || !o(function() {
        u.sort(null)
    }) || !n(169)(a)), "Array", {
        sort: function(t) {
            return void 0 === t ? a.call(s(this)) : a.call(s(this), i(t))
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(173)(0),
        s = n(169)([].forEach, !0);
    r(r.P + r.F * !s, "Array", {
        forEach: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var r = n(20),
        i = n(33),
        s = n(57),
        o = n(37),
        a = n(174);
    t.exports = function(t, e) {
        var n = 1 == t,
            u = 2 == t,
            c = 3 == t,
            f = 4 == t,
            h = 6 == t,
            l = 5 == t || h,
            d = e || a;
        return function(e, a, p) {
            for (var g, y, v = s(e), m = i(v), S = r(a, p, 3), b = o(m.length), w = 0, _ = n ? d(e, b) : u ? d(e, 0) : void 0; b > w; w++)
                if ((l || w in m) && (g = m[w], y = S(g, w, v), t))
                    if (n) _[w] = y;
                    else if (y) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return w;
                case 2:
                    _.push(g)
            } else if (f) return !1;
            return h ? -1 : c || f ? f : _
        }
    }
}, function(t, e, n) {
    var r = n(175);
    t.exports = function(t, e) {
        return new(r(t))(e)
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(44),
        s = n(25)("species");
    t.exports = function(t) {
        var e;
        return i(t) && (e = t.constructor, "function" != typeof e || e !== Array && !i(e.prototype) || (e = void 0), r(e) && (e = e[s], null === e && (e = void 0))), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(173)(1);
    r(r.P + r.F * !n(169)([].map, !0), "Array", {
        map: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(173)(2);
    r(r.P + r.F * !n(169)([].filter, !0), "Array", {
        filter: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(173)(3);
    r(r.P + r.F * !n(169)([].some, !0), "Array", {
        some: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(173)(4);
    r(r.P + r.F * !n(169)([].every, !0), "Array", {
        every: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(181);
    r(r.P + r.F * !n(169)([].reduce, !0), "Array", {
        reduce: function(t) {
            return i(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, n) {
    var r = n(21),
        i = n(57),
        s = n(33),
        o = n(37);
    t.exports = function(t, e, n, a, u) {
        r(e);
        var c = i(t),
            f = s(c),
            h = o(c.length),
            l = u ? h - 1 : 0,
            d = u ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (l in f) {
                    a = f[l], l += d;
                    break
                }
                if (l += d, u ? l < 0 : h <= l) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? l >= 0 : h > l; l += d) l in f && (a = e(a, f[l], l, c));
        return a
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(181);
    r(r.P + r.F * !n(169)([].reduceRight, !0), "Array", {
        reduceRight: function(t) {
            return i(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(36)(!1),
        s = [].indexOf,
        o = !!s && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (o || !n(169)(s)), "Array", {
        indexOf: function(t) {
            return o ? s.apply(this, arguments) || 0 : i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(32),
        s = n(38),
        o = n(37),
        a = [].lastIndexOf,
        u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (u || !n(169)(a)), "Array", {
        lastIndexOf: function(t) {
            if (u) return a.apply(this, arguments) || 0;
            var e = i(this),
                n = o(e.length),
                r = n - 1;
            for (arguments.length > 1 && (r = Math.min(r, s(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in e && e[r] === t) return r || 0;
            return -1
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.P, "Array", {
        copyWithin: n(186)
    }), n(187)("copyWithin")
}, function(t, e, n) {
    "use strict";
    var r = n(57),
        i = n(39),
        s = n(37);
    t.exports = [].copyWithin || function(t, e) {
        var n = r(this),
            o = s(n.length),
            a = i(t, o),
            u = i(e, o),
            c = arguments.length > 2 ? arguments[2] : void 0,
            f = Math.min((void 0 === c ? o : i(c, o)) - u, o - a),
            h = 1;
        for (u < a && a < u + f && (h = -1, u += f - 1, a += f - 1); f-- > 0;) u in n ? n[a] = n[u] : delete n[a], a += h, u += h;
        return n
    }
}, function(t, e, n) {
    var r = n(25)("unscopables"),
        i = Array.prototype;
    void 0 == i[r] && n(10)(i, r, {}), t.exports = function(t) {
        i[r][t] = !0
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.P, "Array", {
        fill: n(189)
    }), n(187)("fill")
}, function(t, e, n) {
    "use strict";
    var r = n(57),
        i = n(39),
        s = n(37);
    t.exports = function(t) {
        for (var e = r(this), n = s(e.length), o = arguments.length, a = i(o > 1 ? arguments[1] : void 0, n), u = o > 2 ? arguments[2] : void 0, c = void 0 === u ? n : i(u, n); c > a;) e[a++] = t;
        return e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(173)(5),
        s = "find",
        o = !0;
    s in [] && Array(1)[s](function() {
        o = !1
    }), r(r.P + r.F * o, "Array", {
        find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(187)(s)
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(173)(6),
        s = "findIndex",
        o = !0;
    s in [] && Array(1)[s](function() {
        o = !1
    }), r(r.P + r.F * o, "Array", {
        findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(187)(s)
}, function(t, e, n) {
    n(193)("Array")
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(11),
        s = n(6),
        o = n(25)("species");
    t.exports = function(t) {
        var e = r[t];
        s && e && !e[o] && i.f(e, o, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(187),
        i = n(195),
        s = n(129),
        o = n(32);
    t.exports = n(128)(Array, "Array", function(t, e) {
        this._t = o(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
    }, "values"), s.Arguments = s.Array, r("keys"), r("values"), r("entries")
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(87),
        s = n(11).f,
        o = n(49).f,
        a = n(134),
        u = n(197),
        c = r.RegExp,
        f = c,
        h = c.prototype,
        l = /a/g,
        d = /a/g,
        p = new c(l) !== l;
    if (n(6) && (!p || n(7)(function() {
            return d[n(25)("match")] = !1, c(l) != l || c(d) == d || "/a/i" != c(l, "i")
        }))) {
        c = function(t, e) {
            var n = this instanceof c,
                r = a(t),
                s = void 0 === e;
            return !n && r && t.constructor === c && s ? t : i(p ? new f(r && !s ? t.source : t, e) : f((r = t instanceof c) ? t.source : t, r && s ? u.call(t) : e), n ? this : h, c)
        };
        for (var g = (function(t) {
                t in c || s(c, t, {
                    configurable: !0,
                    get: function() {
                        return f[t]
                    },
                    set: function(e) {
                        f[t] = e
                    }
                })
            }), y = o(f), v = 0; y.length > v;) g(y[v++]);
        h.constructor = c, c.prototype = h, n(18)(r, "RegExp", c)
    }
    n(193)("RegExp")
}, function(t, e, n) {
    "use strict";
    var r = n(12);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    n(199);
    var r = n(12),
        i = n(197),
        s = n(6),
        o = "toString",
        a = /./ [o],
        u = function(t) {
            n(18)(RegExp.prototype, o, t, !0)
        };
    n(7)(function() {
        return "/a/b" != a.call({
            source: "a",
            flags: "b"
        })
    }) ? u(function() {
        var t = r(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !s && t instanceof RegExp ? i.call(t) : void 0)
    }) : a.name != o && u(function() {
        return a.call(this)
    })
}, function(t, e, n) {
    n(6) && "g" != /./g.flags && n(11).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(197)
    })
}, function(t, e, n) {
    n(201)("match", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var r = t(this),
                i = void 0 == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, n]
    })
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(18),
        s = n(7),
        o = n(35),
        a = n(25);
    t.exports = function(t, e, n) {
        var u = a(t),
            c = n(o, u, "" [t]),
            f = c[0],
            h = c[1];
        s(function() {
            var e = {};
            return e[u] = function() {
                return 7
            }, 7 != "" [t](e)
        }) && (i(String.prototype, t, f), r(RegExp.prototype, u, 2 == e ? function(t, e) {
            return h.call(t, this, e)
        } : function(t) {
            return h.call(t, this)
        }))
    }
}, function(t, e, n) {
    n(201)("replace", 2, function(t, e, n) {
        return [function(r, i) {
            "use strict";
            var s = t(this),
                o = void 0 == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, s, i) : n.call(String(s), r, i)
        }, n]
    })
}, function(t, e, n) {
    n(201)("search", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var r = t(this),
                i = void 0 == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, n]
    })
}, function(t, e, n) {
    n(201)("split", 2, function(t, e, r) {
        "use strict";
        var i = n(134),
            s = r,
            o = [].push,
            a = "split",
            u = "length",
            c = "lastIndex";
        if ("c" == "abbc" [a](/(b)*/)[1] || 4 != "test" [a](/(?:)/, -1)[u] || 2 != "ab" [a](/(?:ab)*/)[u] || 4 != "." [a](/(.?)(.?)/)[u] || "." [a](/()()/)[u] > 1 || "" [a](/.?/)[u]) {
            var f = void 0 === /()??/.exec("")[1];
            r = function(t, e) {
                var n = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!i(t)) return s.call(n, t, e);
                var r, a, h, l, d, p = [],
                    g = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                    y = 0,
                    v = void 0 === e ? 4294967295 : e >>> 0,
                    m = new RegExp(t.source, g + "g");
                for (f || (r = new RegExp("^" + m.source + "$(?!\\s)", g));
                    (a = m.exec(n)) && (h = a.index + a[0][u], !(h > y && (p.push(n.slice(y, a.index)), !f && a[u] > 1 && a[0].replace(r, function() {
                        for (d = 1; d < arguments[u] - 2; d++) void 0 === arguments[d] && (a[d] = void 0)
                    }), a[u] > 1 && a.index < n[u] && o.apply(p, a.slice(1)), l = a[0][u], y = h, p[u] >= v)));) m[c] === a.index && m[c]++;
                return y === n[u] ? !l && m.test("") || p.push("") : p.push(n.slice(y)), p[u] > v ? p.slice(0, v) : p
            }
        } else "0" [a](void 0, 0)[u] && (r = function(t, e) {
            return void 0 === t && 0 === e ? [] : s.call(this, t, e)
        });
        return [function(n, i) {
            var s = t(this),
                o = void 0 == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, s, i) : r.call(String(s), n, i)
        }, r]
    })
}, function(t, e, n) {
    "use strict";
    var r, i, s, o, a = n(28),
        u = n(4),
        c = n(20),
        f = n(74),
        h = n(8),
        l = n(13),
        d = n(21),
        p = n(206),
        g = n(207),
        y = n(208),
        v = n(209).set,
        m = n(210)(),
        S = n(211),
        b = n(212),
        w = n(213),
        _ = "Promise",
        x = u.TypeError,
        E = u.process,
        A = u[_],
        F = "process" == f(E),
        P = function() {},
        O = i = S.f,
        C = !! function() {
            try {
                var t = A.resolve(1),
                    e = (t.constructor = {})[n(25)("species")] = function(t) {
                        t(P, P)
                    };
                return (F || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof e
            } catch (t) {}
        }(),
        T = function(t) {
            var e;
            return !(!l(t) || "function" != typeof(e = t.then)) && e
        },
        j = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m(function() {
                    for (var r = t._v, i = 1 == t._s, s = 0, o = function(e) {
                            var n, s, o = i ? e.ok : e.fail,
                                a = e.resolve,
                                u = e.reject,
                                c = e.domain;
                            try {
                                o ? (i || (2 == t._h && D(t), t._h = 1), o === !0 ? n = r : (c && c.enter(), n = o(r), c && c.exit()), n === e.promise ? u(x("Promise-chain cycle")) : (s = T(n)) ? s.call(n, a, u) : a(n)) : u(r)
                            } catch (t) {
                                u(t)
                            }
                        }; n.length > s;) o(n[s++]);
                    t._c = [], t._n = !1, e && !t._h && I(t)
                })
            }
        },
        I = function(t) {
            v.call(u, function() {
                var e, n, r, i = t._v,
                    s = R(t);
                if (s && (e = b(function() {
                        F ? E.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                            promise: t,
                            reason: i
                        }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                    }), t._h = F || R(t) ? 2 : 1), t._a = void 0, s && e.e) throw e.v
            })
        },
        R = function(t) {
            if (1 == t._h) return !1;
            for (var e, n = t._a || t._c, r = 0; n.length > r;)
                if (e = n[r++], e.fail || !R(e.promise)) return !1;
            return !0
        },
        D = function(t) {
            v.call(u, function() {
                var e;
                F ? E.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        H = function(t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), j(e, !0))
        },
        k = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw x("Promise can't be resolved itself");
                    (e = T(t)) ? m(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(k, r, 1), c(H, r, 1))
                        } catch (t) {
                            H.call(r, t)
                        }
                    }): (n._v = t, n._s = 1, j(n, !1))
                } catch (t) {
                    H.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    C || (A = function(t) {
        p(this, A, _, "_h"), d(t), r.call(this);
        try {
            t(c(k, this, 1), c(H, this, 1))
        } catch (t) {
            H.call(this, t)
        }
    }, r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(214)(A.prototype, {
        then: function(t, e) {
            var n = O(y(this, A));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = F ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && j(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), s = function() {
        var t = new r;
        this.promise = t, this.resolve = c(k, t, 1), this.reject = c(H, t, 1)
    }, S.f = O = function(t) {
        return t === A || t === o ? new s(t) : i(t)
    }), h(h.G + h.W + h.F * !C, {
        Promise: A
    }), n(24)(A, _), n(193)(_), o = n(9)[_], h(h.S + h.F * !C, _, {
        reject: function(t) {
            var e = O(this),
                n = e.reject;
            return n(t), e.promise
        }
    }), h(h.S + h.F * (a || !C), _, {
        resolve: function(t) {
            return w(a && this === o ? A : this, t)
        }
    }), h(h.S + h.F * !(C && n(166)(function(t) {
        A.all(t).catch(P)
    })), _, {
        all: function(t) {
            var e = this,
                n = O(e),
                r = n.resolve,
                i = n.reject,
                s = b(function() {
                    var n = [],
                        s = 0,
                        o = 1;
                    g(t, !1, function(t) {
                        var a = s++,
                            u = !1;
                        n.push(void 0), o++, e.resolve(t).then(function(t) {
                            u || (u = !0, n[a] = t, --o || r(n))
                        }, i)
                    }), --o || r(n)
                });
            return s.e && i(s.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = O(e),
                r = n.reject,
                i = b(function() {
                    g(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
            return i.e && r(i.v), n.promise
        }
    })
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(162),
        s = n(163),
        o = n(12),
        a = n(37),
        u = n(165),
        c = {},
        f = {},
        e = t.exports = function(t, e, n, h, l) {
            var d, p, g, y, v = l ? function() {
                    return t
                } : u(t),
                m = r(n, h, e ? 2 : 1),
                S = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (s(v)) {
                for (d = a(t.length); d > S; S++)
                    if (y = e ? m(o(p = t[S])[0], p[1]) : m(t[S]), y === c || y === f) return y
            } else
                for (g = v.call(t); !(p = g.next()).done;)
                    if (y = i(g, m, p.value, e), y === c || y === f) return y
        };
    e.BREAK = c, e.RETURN = f
}, function(t, e, n) {
    var r = n(12),
        i = n(21),
        s = n(25)("species");
    t.exports = function(t, e) {
        var n, o = r(t).constructor;
        return void 0 === o || void 0 == (n = r(o)[s]) ? e : i(n)
    }
}, function(t, e, n) {
    var r, i, s, o = n(20),
        a = n(77),
        u = n(47),
        c = n(15),
        f = n(4),
        h = f.process,
        l = f.setImmediate,
        d = f.clearImmediate,
        p = f.MessageChannel,
        g = f.Dispatch,
        y = 0,
        v = {},
        m = "onreadystatechange",
        S = function() {
            var t = +this;
            if (v.hasOwnProperty(t)) {
                var e = v[t];
                delete v[t], e()
            }
        },
        b = function(t) {
            S.call(t.data)
        };
    l && d || (l = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return v[++y] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }, r(y), y
    }, d = function(t) {
        delete v[t]
    }, "process" == n(34)(h) ? r = function(t) {
        h.nextTick(o(S, t, 1))
    } : g && g.now ? r = function(t) {
        g.now(o(S, t, 1))
    } : p ? (i = new p, s = i.port2, i.port1.onmessage = b, r = o(s.postMessage, s, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
        f.postMessage(t + "", "*")
    }, f.addEventListener("message", b, !1)) : r = m in c("script") ? function(t) {
        u.appendChild(c("script"))[m] = function() {
            u.removeChild(this), S.call(t)
        }
    } : function(t) {
        setTimeout(o(S, t, 1), 0)
    }), t.exports = {
        set: l,
        clear: d
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(209).set,
        s = r.MutationObserver || r.WebKitMutationObserver,
        o = r.process,
        a = r.Promise,
        u = "process" == n(34)(o);
    t.exports = function() {
        var t, e, n, c = function() {
            var r, i;
            for (u && (r = o.domain) && r.exit(); t;) {
                i = t.fn, t = t.next;
                try {
                    i()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (u) n = function() {
            o.nextTick(c)
        };
        else if (s) {
            var f = !0,
                h = document.createTextNode("");
            new s(c).observe(h, {
                characterData: !0
            }), n = function() {
                h.data = f = !f
            }
        } else if (a && a.resolve) {
            var l = a.resolve();
            n = function() {
                l.then(c)
            }
        } else n = function() {
            i.call(r, c)
        };
        return function(r) {
            var i = {
                fn: r,
                next: void 0
            };
            e && (e.next = i), t || (t = i, n()), e = i
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        }), this.resolve = i(e), this.reject = i(n)
    }
    var i = n(21);
    t.exports.f = function(t) {
        return new r(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(13),
        s = n(211);
    t.exports = function(t, e) {
        if (r(t), i(e) && e.constructor === t) return e;
        var n = s.f(t),
            o = n.resolve;
        return o(e), n.promise
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(216),
        i = n(217),
        s = "Map";
    t.exports = n(218)(s, function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var e = r.getEntry(i(this, s), t);
            return e && e.v
        },
        set: function(t, e) {
            return r.def(i(this, s), 0 === t ? 0 : t, e)
        }
    }, r, !0)
}, function(t, e, n) {
    "use strict";
    var r = n(11).f,
        i = n(45),
        s = n(214),
        o = n(20),
        a = n(206),
        u = n(207),
        c = n(128),
        f = n(195),
        h = n(193),
        l = n(6),
        d = n(22).fastKey,
        p = n(217),
        g = l ? "_s" : "size",
        y = function(t, e) {
            var n, r = d(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, c) {
            var f = t(function(t, r) {
                a(t, f, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[g] = 0, void 0 != r && u(r, n, t[c], t)
            });
            return s(f.prototype, {
                clear: function() {
                    for (var t = p(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    t._f = t._l = void 0, t[g] = 0
                },
                delete: function(t) {
                    var n = p(this, e),
                        r = y(n, t);
                    if (r) {
                        var i = r.n,
                            s = r.p;
                        delete n._i[r.i], r.r = !0, s && (s.n = i), i && (i.p = s), n._f == r && (n._f = i), n._l == r && (n._l = s), n[g]--
                    }
                    return !!r
                },
                forEach: function(t) {
                    p(this, e);
                    for (var n, r = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !!y(p(this, e), t)
                }
            }), l && r(f.prototype, "size", {
                get: function() {
                    return p(this, e)[g]
                }
            }), f
        },
        def: function(t, e, n) {
            var r, i, s = y(t, e);
            return s ? s.v = n : (t._l = s = {
                i: i = d(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = s), r && (r.n = s), t[g]++, "F" !== i && (t._i[i] = s)), t
        },
        getEntry: y,
        setStrong: function(t, e, n) {
            c(t, e, function(t, n) {
                this._t = p(t, e), this._k = n, this._l = void 0
            }, function() {
                for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? f(0, n.k) : "values" == e ? f(0, n.v) : f(0, [n.k, n.v]) : (t._t = void 0, f(1))
            }, n ? "entries" : "values", !n, !0), h(e)
        }
    }
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(8),
        s = n(18),
        o = n(214),
        a = n(22),
        u = n(207),
        c = n(206),
        f = n(13),
        h = n(7),
        l = n(166),
        d = n(24),
        p = n(87);
    t.exports = function(t, e, n, g, y, v) {
        var m = r[t],
            S = m,
            b = y ? "set" : "add",
            w = S && S.prototype,
            _ = {},
            x = function(t) {
                var e = w[t];
                s(w, t, "delete" == t ? function(t) {
                    return !(v && !f(t)) && e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(v && !f(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return v && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof S && (v || w.forEach && !h(function() {
                (new S).entries().next()
            }))) {
            var E = new S,
                A = E[b](v ? {} : -0, 1) != E,
                F = h(function() {
                    E.has(1)
                }),
                P = l(function(t) {
                    new S(t)
                }),
                O = !v && h(function() {
                    for (var t = new S, e = 5; e--;) t[b](e, e);
                    return !t.has(-0)
                });
            P || (S = e(function(e, n) {
                c(e, S, t);
                var r = p(new m, e, S);
                return void 0 != n && u(n, y, r[b], r), r
            }), S.prototype = w, w.constructor = S), (F || O) && (x("delete"), x("has"), y && x("get")), (O || A) && x(b), v && w.clear && delete w.clear
        } else S = g.getConstructor(e, t, y, b), o(S.prototype, n), a.NEED = !0;
        return d(S, t), _[t] = S, i(i.G + i.W + i.F * (S != m), _), v || g.setStrong(S, t, y), S
    }
}, function(t, e, n) {
    "use strict";
    var r = n(216),
        i = n(217),
        s = "Set";
    t.exports = n(218)(s, function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return r.def(i(this, s), t = 0 === t ? 0 : t, t)
        }
    }, r)
}, function(t, e, n) {
    "use strict";
    var r, i = n(173)(0),
        s = n(18),
        o = n(22),
        a = n(68),
        u = n(221),
        c = n(13),
        f = n(7),
        h = n(217),
        l = "WeakMap",
        d = o.getWeak,
        p = Object.isExtensible,
        g = u.ufstore,
        y = {},
        v = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        m = {
            get: function(t) {
                if (c(t)) {
                    var e = d(t);
                    return e === !0 ? g(h(this, l)).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return u.def(h(this, l), t, e)
            }
        },
        S = t.exports = n(218)(l, v, m, u, !0, !0);
    f(function() {
        return 7 != (new S).set((Object.freeze || Object)(y), 7).get(y)
    }) && (r = u.getConstructor(v, l), a(r.prototype, m), o.NEED = !0, i(["delete", "has", "get", "set"], function(t) {
        var e = S.prototype,
            n = e[t];
        s(e, t, function(e, i) {
            if (c(e) && !p(e)) {
                this._f || (this._f = new r);
                var s = this._f[t](e, i);
                return "set" == t ? this : s
            }
            return n.call(this, e, i)
        })
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(214),
        i = n(22).getWeak,
        s = n(12),
        o = n(13),
        a = n(206),
        u = n(207),
        c = n(173),
        f = n(5),
        h = n(217),
        l = c(5),
        d = c(6),
        p = 0,
        g = function(t) {
            return t._l || (t._l = new y)
        },
        y = function() {
            this.a = []
        },
        v = function(t, e) {
            return l(t.a, function(t) {
                return t[0] === e
            })
        };
    y.prototype = {
        get: function(t) {
            var e = v(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!v(this, t)
        },
        set: function(t, e) {
            var n = v(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = d(this.a, function(e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, s) {
            var c = t(function(t, r) {
                a(t, c, e, "_i"), t._t = e, t._i = p++, t._l = void 0, void 0 != r && u(r, n, t[s], t)
            });
            return r(c.prototype, {
                delete: function(t) {
                    if (!o(t)) return !1;
                    var n = i(t);
                    return n === !0 ? g(h(this, e)).delete(t) : n && f(n, this._i) && delete n[this._i]
                },
                has: function(t) {
                    if (!o(t)) return !1;
                    var n = i(t);
                    return n === !0 ? g(h(this, e)).has(t) : n && f(n, this._i)
                }
            }), c
        },
        def: function(t, e, n) {
            var r = i(s(e), !0);
            return r === !0 ? g(t).set(e, n) : r[t._i] = n, t
        },
        ufstore: g
    }
}, function(t, e, n) {
    "use strict";
    var r = n(221),
        i = n(217),
        s = "WeakSet";
    n(218)(s, function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return r.def(i(this, s), t, !0)
        }
    }, r, !1, !0)
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(224),
        s = n(225),
        o = n(12),
        a = n(39),
        u = n(37),
        c = n(13),
        f = n(4).ArrayBuffer,
        h = n(208),
        l = s.ArrayBuffer,
        d = s.DataView,
        p = i.ABV && f.isView,
        g = l.prototype.slice,
        y = i.VIEW,
        v = "ArrayBuffer";
    r(r.G + r.W + r.F * (f !== l), {
        ArrayBuffer: l
    }), r(r.S + r.F * !i.CONSTR, v, {
        isView: function(t) {
            return p && p(t) || c(t) && y in t
        }
    }), r(r.P + r.U + r.F * n(7)(function() {
        return !new l(2).slice(1, void 0).byteLength
    }), v, {
        slice: function(t, e) {
            if (void 0 !== g && void 0 === e) return g.call(o(this), t);
            for (var n = o(this).byteLength, r = a(t, n), i = a(void 0 === e ? n : e, n), s = new(h(this, l))(u(i - r)), c = new d(this), f = new d(s), p = 0; r < i;) f.setUint8(p++, c.getUint8(r++));
            return s
        }
    }), n(193)(v)
}, function(t, e, n) {
    for (var r, i = n(4), s = n(10), o = n(19), a = o("typed_array"), u = o("view"), c = !(!i.ArrayBuffer || !i.DataView), f = c, h = 0, l = 9, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); h < l;)(r = i[d[h++]]) ? (s(r.prototype, a, !0), s(r.prototype, u, !0)) : f = !1;
    t.exports = {
        ABV: c,
        CONSTR: f,
        TYPED: a,
        VIEW: u
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r, i, s, o = Array(n),
            a = 8 * n - e - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            f = 23 === e ? L(2, -24) - L(2, -77) : 0,
            h = 0,
            l = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = V(t), t != t || t === B ? (i = t != t ? 1 : 0, r = u) : (r = K(U(t) / q), t * (s = L(2, -r)) < 1 && (r--, s *= 2), t += r + c >= 1 ? f / s : f * L(2, 1 - c), t * s >= 2 && (r++, s /= 2), r + c >= u ? (i = 0, r = u) : r + c >= 1 ? (i = (t * s - 1) * L(2, e), r += c) : (i = t * L(2, c - 1) * L(2, e), r = 0)); e >= 8; o[h++] = 255 & i, i /= 256, e -= 8);
        for (r = r << e | i, a += e; a > 0; o[h++] = 255 & r, r /= 256, a -= 8);
        return o[--h] |= 128 * l, o
    }

    function i(t, e, n) {
        var r, i = 8 * n - e - 1,
            s = (1 << i) - 1,
            o = s >> 1,
            a = i - 7,
            u = n - 1,
            c = t[u--],
            f = 127 & c;
        for (c >>= 7; a > 0; f = 256 * f + t[u], u--, a -= 8);
        for (r = f & (1 << -a) - 1, f >>= -a, a += e; a > 0; r = 256 * r + t[u], u--, a -= 8);
        if (0 === f) f = 1 - o;
        else {
            if (f === s) return r ? NaN : c ? -B : B;
            r += L(2, e), f -= o
        }
        return (c ? -1 : 1) * r * L(2, f - e)
    }

    function s(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function o(t) {
        return [255 & t]
    }

    function a(t) {
        return [255 & t, t >> 8 & 255]
    }

    function u(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function c(t) {
        return r(t, 52, 8)
    }

    function f(t) {
        return r(t, 23, 4)
    }

    function h(t, e, n) {
        F(t[j], e, {
            get: function() {
                return this[n]
            }
        })
    }

    function l(t, e, n, r) {
        var i = +n,
            s = E(i);
        if (s + e > t[G]) throw N(R);
        var o = t[Y]._b,
            a = s + t[X],
            u = o.slice(a, a + e);
        return r ? u : u.reverse()
    }

    function d(t, e, n, r, i, s) {
        var o = +n,
            a = E(o);
        if (a + e > t[G]) throw N(R);
        for (var u = t[Y]._b, c = a + t[X], f = r(+i), h = 0; h < e; h++) u[c + h] = f[s ? h : e - h - 1]
    }
    var p = n(4),
        g = n(6),
        y = n(28),
        v = n(224),
        m = n(10),
        S = n(214),
        b = n(7),
        w = n(206),
        _ = n(38),
        x = n(37),
        E = n(226),
        A = n(49).f,
        F = n(11).f,
        P = n(189),
        O = n(24),
        C = "ArrayBuffer",
        T = "DataView",
        j = "prototype",
        I = "Wrong length!",
        R = "Wrong index!",
        D = p[C],
        H = p[T],
        k = p.Math,
        N = p.RangeError,
        B = p.Infinity,
        M = D,
        V = k.abs,
        L = k.pow,
        K = k.floor,
        U = k.log,
        q = k.LN2,
        W = "buffer",
        z = "byteLength",
        J = "byteOffset",
        Y = g ? "_b" : W,
        G = g ? "_l" : z,
        X = g ? "_o" : J;
    if (v.ABV) {
        if (!b(function() {
                D(1)
            }) || !b(function() {
                new D(-1)
            }) || b(function() {
                return new D, new D(1.5), new D(NaN), D.name != C
            })) {
            D = function(t) {
                return w(this, D), new M(E(t))
            };
            for (var $, Q = D[j] = M[j], Z = A(M), tt = 0; Z.length > tt;)($ = Z[tt++]) in D || m(D, $, M[$]);
            y || (Q.constructor = D)
        }
        var et = new H(new D(2)),
            nt = H[j].setInt8;
        et.setInt8(0, 2147483648), et.setInt8(1, 2147483649), !et.getInt8(0) && et.getInt8(1) || S(H[j], {
            setInt8: function(t, e) {
                nt.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                nt.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else D = function(t) {
        w(this, D, C);
        var e = E(t);
        this._b = P.call(Array(e), 0), this[G] = e
    }, H = function(t, e, n) {
        w(this, H, T), w(t, D, T);
        var r = t[G],
            i = _(e);
        if (i < 0 || i > r) throw N("Wrong offset!");
        if (n = void 0 === n ? r - i : x(n), i + n > r) throw N(I);
        this[Y] = t, this[X] = i, this[G] = n
    }, g && (h(D, z, "_l"), h(H, W, "_b"), h(H, z, "_l"), h(H, J, "_o")), S(H[j], {
        getInt8: function(t) {
            return l(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return l(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = l(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = l(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return s(l(this, 4, t, arguments[1]))
        },
        getUint32: function(t) {
            return s(l(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function(t) {
            return i(l(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function(t) {
            return i(l(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function(t, e) {
            d(this, 1, t, o, e)
        },
        setUint8: function(t, e) {
            d(this, 1, t, o, e)
        },
        setInt16: function(t, e) {
            d(this, 2, t, a, e, arguments[2])
        },
        setUint16: function(t, e) {
            d(this, 2, t, a, e, arguments[2])
        },
        setInt32: function(t, e) {
            d(this, 4, t, u, e, arguments[2])
        },
        setUint32: function(t, e) {
            d(this, 4, t, u, e, arguments[2])
        },
        setFloat32: function(t, e) {
            d(this, 4, t, f, e, arguments[2])
        },
        setFloat64: function(t, e) {
            d(this, 8, t, c, e, arguments[2])
        }
    });
    O(D, C), O(H, T), m(H[j], v.VIEW, !0), e[C] = D, e[T] = H
}, function(t, e, n) {
    var r = n(38),
        i = n(37);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = r(t),
            n = i(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.G + r.W + r.F * !n(224).ABV, {
        DataView: n(225).DataView
    })
}, function(t, e, n) {
    n(229)("Int8", 1, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    "use strict";
    if (n(6)) {
        var r = n(28),
            i = n(4),
            s = n(7),
            o = n(8),
            a = n(224),
            u = n(225),
            c = n(20),
            f = n(206),
            h = n(17),
            l = n(10),
            d = n(214),
            p = n(38),
            g = n(37),
            y = n(226),
            v = n(39),
            m = n(16),
            S = n(5),
            b = n(74),
            w = n(13),
            _ = n(57),
            x = n(163),
            E = n(45),
            A = n(58),
            F = n(49).f,
            P = n(165),
            O = n(19),
            C = n(25),
            T = n(173),
            j = n(36),
            I = n(208),
            R = n(194),
            D = n(129),
            H = n(166),
            k = n(193),
            N = n(189),
            B = n(186),
            M = n(11),
            V = n(50),
            L = M.f,
            K = V.f,
            U = i.RangeError,
            q = i.TypeError,
            W = i.Uint8Array,
            z = "ArrayBuffer",
            J = "Shared" + z,
            Y = "BYTES_PER_ELEMENT",
            G = "prototype",
            X = Array[G],
            $ = u.ArrayBuffer,
            Q = u.DataView,
            Z = T(0),
            tt = T(2),
            et = T(3),
            nt = T(4),
            rt = T(5),
            it = T(6),
            st = j(!0),
            ot = j(!1),
            at = R.values,
            ut = R.keys,
            ct = R.entries,
            ft = X.lastIndexOf,
            ht = X.reduce,
            lt = X.reduceRight,
            dt = X.join,
            pt = X.sort,
            gt = X.slice,
            yt = X.toString,
            vt = X.toLocaleString,
            mt = C("iterator"),
            St = C("toStringTag"),
            bt = O("typed_constructor"),
            wt = O("def_constructor"),
            _t = a.CONSTR,
            xt = a.TYPED,
            Et = a.VIEW,
            At = "Wrong length!",
            Ft = T(1, function(t, e) {
                return jt(I(t, t[wt]), e)
            }),
            Pt = s(function() {
                return 1 === new W(new Uint16Array([1]).buffer)[0]
            }),
            Ot = !!W && !!W[G].set && s(function() {
                new W(1).set({})
            }),
            Ct = function(t, e) {
                var n = p(t);
                if (n < 0 || n % e) throw U("Wrong offset!");
                return n
            },
            Tt = function(t) {
                if (w(t) && xt in t) return t;
                throw q(t + " is not a typed array!")
            },
            jt = function(t, e) {
                if (!(w(t) && bt in t)) throw q("It is not a typed array constructor!");
                return new t(e)
            },
            It = function(t, e) {
                return Rt(I(t, t[wt]), e)
            },
            Rt = function(t, e) {
                for (var n = 0, r = e.length, i = jt(t, r); r > n;) i[n] = e[n++];
                return i
            },
            Dt = function(t, e, n) {
                L(t, e, {
                    get: function() {
                        return this._d[n]
                    }
                })
            },
            Ht = function(t) {
                var e, n, r, i, s, o, a = _(t),
                    u = arguments.length,
                    f = u > 1 ? arguments[1] : void 0,
                    h = void 0 !== f,
                    l = P(a);
                if (void 0 != l && !x(l)) {
                    for (o = l.call(a), r = [], e = 0; !(s = o.next()).done; e++) r.push(s.value);
                    a = r
                }
                for (h && u > 2 && (f = c(f, arguments[2], 2)), e = 0, n = g(a.length), i = jt(this, n); n > e; e++) i[e] = h ? f(a[e], e) : a[e];
                return i
            },
            kt = function() {
                for (var t = 0, e = arguments.length, n = jt(this, e); e > t;) n[t] = arguments[t++];
                return n
            },
            Nt = !!W && s(function() {
                vt.call(new W(1))
            }),
            Bt = function() {
                return vt.apply(Nt ? gt.call(Tt(this)) : Tt(this), arguments)
            },
            Mt = {
                copyWithin: function(t, e) {
                    return B.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return N.apply(Tt(this), arguments)
                },
                filter: function(t) {
                    return It(this, tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return rt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return it(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return ot(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return st(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return dt.apply(Tt(this), arguments)
                },
                lastIndexOf: function(t) {
                    return ft.apply(Tt(this), arguments)
                },
                map: function(t) {
                    return Ft(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return ht.apply(Tt(this), arguments)
                },
                reduceRight: function(t) {
                    return lt.apply(Tt(this), arguments)
                },
                reverse: function() {
                    for (var t, e = this, n = Tt(e).length, r = Math.floor(n / 2), i = 0; i < r;) t = e[i], e[i++] = e[--n], e[n] = t;
                    return e
                },
                some: function(t) {
                    return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return pt.call(Tt(this), t)
                },
                subarray: function(t, e) {
                    var n = Tt(this),
                        r = n.length,
                        i = v(t, r);
                    return new(I(n, n[wt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, g((void 0 === e ? r : v(e, r)) - i))
                }
            },
            Vt = function(t, e) {
                return It(this, gt.call(Tt(this), t, e))
            },
            Lt = function(t) {
                Tt(this);
                var e = Ct(arguments[1], 1),
                    n = this.length,
                    r = _(t),
                    i = g(r.length),
                    s = 0;
                if (i + e > n) throw U(At);
                for (; s < i;) this[e + s] = r[s++]
            },
            Kt = {
                entries: function() {
                    return ct.call(Tt(this))
                },
                keys: function() {
                    return ut.call(Tt(this))
                },
                values: function() {
                    return at.call(Tt(this))
                }
            },
            Ut = function(t, e) {
                return w(t) && t[xt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            },
            qt = function(t, e) {
                return Ut(t, e = m(e, !0)) ? h(2, t[e]) : K(t, e)
            },
            Wt = function(t, e, n) {
                return !(Ut(t, e = m(e, !0)) && w(n) && S(n, "value")) || S(n, "get") || S(n, "set") || n.configurable || S(n, "writable") && !n.writable || S(n, "enumerable") && !n.enumerable ? L(t, e, n) : (t[e] = n.value, t)
            };
        _t || (V.f = qt, M.f = Wt), o(o.S + o.F * !_t, "Object", {
            getOwnPropertyDescriptor: qt,
            defineProperty: Wt
        }), s(function() {
            yt.call({})
        }) && (yt = vt = function() {
            return dt.call(this)
        });
        var zt = d({}, Mt);
        d(zt, Kt), l(zt, mt, Kt.values), d(zt, {
            slice: Vt,
            set: Lt,
            constructor: function() {},
            toString: yt,
            toLocaleString: Bt
        }), Dt(zt, "buffer", "b"), Dt(zt, "byteOffset", "o"), Dt(zt, "byteLength", "l"), Dt(zt, "length", "e"), L(zt, St, {
            get: function() {
                return this[xt]
            }
        }), t.exports = function(t, e, n, u) {
            u = !!u;
            var c = t + (u ? "Clamped" : "") + "Array",
                h = "get" + t,
                d = "set" + t,
                p = i[c],
                v = p || {},
                m = p && A(p),
                S = !p || !a.ABV,
                _ = {},
                x = p && p[G],
                P = function(t, n) {
                    var r = t._d;
                    return r.v[h](n * e + r.o, Pt)
                },
                O = function(t, n, r) {
                    var i = t._d;
                    u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[d](n * e + i.o, r, Pt)
                },
                C = function(t, e) {
                    L(t, e, {
                        get: function() {
                            return P(this, e)
                        },
                        set: function(t) {
                            return O(this, e, t);
                        },
                        enumerable: !0
                    })
                };
            S ? (p = n(function(t, n, r, i) {
                f(t, p, c, "_d");
                var s, o, a, u, h = 0,
                    d = 0;
                if (w(n)) {
                    if (!(n instanceof $ || (u = b(n)) == z || u == J)) return xt in n ? Rt(p, n) : Ht.call(p, n);
                    s = n, d = Ct(r, e);
                    var v = n.byteLength;
                    if (void 0 === i) {
                        if (v % e) throw U(At);
                        if (o = v - d, o < 0) throw U(At)
                    } else if (o = g(i) * e, o + d > v) throw U(At);
                    a = o / e
                } else a = y(n), o = a * e, s = new $(o);
                for (l(t, "_d", {
                        b: s,
                        o: d,
                        l: o,
                        e: a,
                        v: new Q(s)
                    }); h < a;) C(t, h++)
            }), x = p[G] = E(zt), l(x, "constructor", p)) : s(function() {
                p(1)
            }) && s(function() {
                new p(-1)
            }) && H(function(t) {
                new p, new p(null), new p(1.5), new p(t)
            }, !0) || (p = n(function(t, n, r, i) {
                f(t, p, c);
                var s;
                return w(n) ? n instanceof $ || (s = b(n)) == z || s == J ? void 0 !== i ? new v(n, Ct(r, e), i) : void 0 !== r ? new v(n, Ct(r, e)) : new v(n) : xt in n ? Rt(p, n) : Ht.call(p, n) : new v(y(n))
            }), Z(m !== Function.prototype ? F(v).concat(F(m)) : F(v), function(t) {
                t in p || l(p, t, v[t])
            }), p[G] = x, r || (x.constructor = p));
            var T = x[mt],
                j = !!T && ("values" == T.name || void 0 == T.name),
                I = Kt.values;
            l(p, bt, !0), l(x, xt, c), l(x, Et, !0), l(x, wt, p), (u ? new p(1)[St] == c : St in x) || L(x, St, {
                get: function() {
                    return c
                }
            }), _[c] = p, o(o.G + o.W + o.F * (p != v), _), o(o.S, c, {
                BYTES_PER_ELEMENT: e
            }), o(o.S + o.F * s(function() {
                v.of.call(p, 1)
            }), c, {
                from: Ht,
                of: kt
            }), Y in x || l(x, Y, e), o(o.P, c, Mt), k(c), o(o.P + o.F * Ot, c, {
                set: Lt
            }), o(o.P + o.F * !j, c, Kt), r || x.toString == yt || (x.toString = yt), o(o.P + o.F * s(function() {
                new p(1).slice()
            }), c, {
                slice: Vt
            }), o(o.P + o.F * (s(function() {
                return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
            }) || !s(function() {
                x.toLocaleString.call([1, 2])
            })), c, {
                toLocaleString: Bt
            }), D[c] = j ? T : I, r || j || l(x, mt, I)
        }
    } else t.exports = function() {}
}, function(t, e, n) {
    n(229)("Uint8", 1, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    n(229)("Uint8", 1, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }, !0)
}, function(t, e, n) {
    n(229)("Int16", 2, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    n(229)("Uint16", 2, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    n(229)("Int32", 4, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    n(229)("Uint32", 4, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    n(229)("Float32", 4, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    n(229)("Float64", 8, function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(21),
        s = n(12),
        o = (n(4).Reflect || {}).apply,
        a = Function.apply;
    r(r.S + r.F * !n(7)(function() {
        o(function() {})
    }), "Reflect", {
        apply: function(t, e, n) {
            var r = i(t),
                u = s(n);
            return o ? o(r, e, u) : a.call(r, e, u)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(45),
        s = n(21),
        o = n(12),
        a = n(13),
        u = n(7),
        c = n(76),
        f = (n(4).Reflect || {}).construct,
        h = u(function() {
            function t() {}
            return !(f(function() {}, [], t) instanceof t)
        }),
        l = !u(function() {
            f(function() {})
        });
    r(r.S + r.F * (h || l), "Reflect", {
        construct: function(t, e) {
            s(t), o(e);
            var n = arguments.length < 3 ? t : s(arguments[2]);
            if (l && !h) return f(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new(c.apply(t, r))
            }
            var u = n.prototype,
                d = i(a(u) ? u : Object.prototype),
                p = Function.apply.call(t, d, e);
            return a(p) ? p : d
        }
    })
}, function(t, e, n) {
    var r = n(11),
        i = n(8),
        s = n(12),
        o = n(16);
    i(i.S + i.F * n(7)(function() {
        Reflect.defineProperty(r.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }), "Reflect", {
        defineProperty: function(t, e, n) {
            s(t), e = o(e, !0), s(n);
            try {
                return r.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(50).f,
        s = n(12);
    r(r.S, "Reflect", {
        deleteProperty: function(t, e) {
            var n = i(s(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(12),
        s = function(t) {
            this._t = i(t), this._i = 0;
            var e, n = this._k = [];
            for (e in t) n.push(e)
        };
    n(130)(s, "Object", function() {
        var t, e = this,
            n = e._k;
        do
            if (e._i >= n.length) return {
                value: void 0,
                done: !0
            }; while (!((t = n[e._i++]) in e._t));
        return {
            value: t,
            done: !1
        }
    }), r(r.S, "Reflect", {
        enumerate: function(t) {
            return new s(t)
        }
    })
}, function(t, e, n) {
    function r(t, e) {
        var n, a, f = arguments.length < 3 ? t : arguments[2];
        return c(t) === f ? t[e] : (n = i.f(t, e)) ? o(n, "value") ? n.value : void 0 !== n.get ? n.get.call(f) : void 0 : u(a = s(t)) ? r(a, e, f) : void 0
    }
    var i = n(50),
        s = n(58),
        o = n(5),
        a = n(8),
        u = n(13),
        c = n(12);
    a(a.S, "Reflect", {
        get: r
    })
}, function(t, e, n) {
    var r = n(50),
        i = n(8),
        s = n(12);
    i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return r.f(s(t), e)
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(58),
        s = n(12);
    r(r.S, "Reflect", {
        getPrototypeOf: function(t) {
            return i(s(t))
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Reflect", {
        has: function(t, e) {
            return e in t
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(12),
        s = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function(t) {
            return i(t), !s || s(t)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Reflect", {
        ownKeys: n(249)
    })
}, function(t, e, n) {
    var r = n(49),
        i = n(42),
        s = n(12),
        o = n(4).Reflect;
    t.exports = o && o.ownKeys || function(t) {
        var e = r.f(s(t)),
            n = i.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(12),
        s = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function(t) {
            i(t);
            try {
                return s && s(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    function r(t, e, n) {
        var u, l, d = arguments.length < 4 ? t : arguments[3],
            p = s.f(f(t), e);
        if (!p) {
            if (h(l = o(t))) return r(l, e, n, d);
            p = c(0)
        }
        return a(p, "value") ? !(p.writable === !1 || !h(d)) && (u = s.f(d, e) || c(0), u.value = n, i.f(d, e, u), !0) : void 0 !== p.set && (p.set.call(d, n), !0)
    }
    var i = n(11),
        s = n(50),
        o = n(58),
        a = n(5),
        u = n(8),
        c = n(17),
        f = n(12),
        h = n(13);
    u(u.S, "Reflect", {
        set: r
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(72);
    i && r(r.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            i.check(t, e);
            try {
                return i.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(36)(!0);
    r(r.P, "Array", {
        includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(187)("includes")
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(255),
        s = n(57),
        o = n(37),
        a = n(21),
        u = n(174);
    r(r.P, "Array", {
        flatMap: function(t) {
            var e, n, r = s(this);
            return a(t), e = o(r.length), n = u(r, 0), i(n, r, r, e, 0, 1, t, arguments[1]), n
        }
    }), n(187)("flatMap")
}, function(t, e, n) {
    "use strict";

    function r(t, e, n, c, f, h, l, d) {
        for (var p, g, y = f, v = 0, m = !!l && a(l, d, 3); v < c;) {
            if (v in n) {
                if (p = m ? m(n[v], v, e) : n[v], g = !1, s(p) && (g = p[u], g = void 0 !== g ? !!g : i(p)), g && h > 0) y = r(t, e, p, o(p.length), y, h - 1) - 1;
                else {
                    if (y >= 9007199254740991) throw TypeError();
                    t[y] = p
                }
                y++
            }
            v++
        }
        return y
    }
    var i = n(44),
        s = n(13),
        o = n(37),
        a = n(20),
        u = n(25)("isConcatSpreadable");
    t.exports = r
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(255),
        s = n(57),
        o = n(37),
        a = n(38),
        u = n(174);
    r(r.P, "Array", {
        flatten: function() {
            var t = arguments[0],
                e = s(this),
                n = o(e.length),
                r = u(e, 0);
            return i(r, e, e, n, 0, void 0 === t ? 1 : a(t)), r
        }
    }), n(187)("flatten")
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(127)(!0);
    r(r.P, "String", {
        at: function(t) {
            return i(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(259);
    r(r.P, "String", {
        padStart: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function(t, e, n) {
    var r = n(37),
        i = n(90),
        s = n(35);
    t.exports = function(t, e, n, o) {
        var a = String(s(t)),
            u = a.length,
            c = void 0 === n ? " " : String(n),
            f = r(e);
        if (f <= u || "" == c) return a;
        var h = f - u,
            l = i.call(c, Math.ceil(h / c.length));
        return l.length > h && (l = l.slice(0, h)), o ? l + a : a + l
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(259);
    r(r.P, "String", {
        padEnd: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(82)("trimLeft", function(t) {
        return function() {
            return t(this, 1)
        }
    }, "trimStart")
}, function(t, e, n) {
    "use strict";
    n(82)("trimRight", function(t) {
        return function() {
            return t(this, 2)
        }
    }, "trimEnd")
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(35),
        s = n(37),
        o = n(134),
        a = n(197),
        u = RegExp.prototype,
        c = function(t, e) {
            this._r = t, this._s = e
        };
    n(130)(c, "RegExp String", function() {
        var t = this._r.exec(this._s);
        return {
            value: t,
            done: null === t
        }
    }), r(r.P, "String", {
        matchAll: function(t) {
            if (i(this), !o(t)) throw TypeError(t + " is not a regexp!");
            var e = String(this),
                n = "flags" in u ? String(t.flags) : a.call(t),
                r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
            return r.lastIndex = s(t.lastIndex), new c(r, e)
        }
    })
}, function(t, e, n) {
    n(27)("asyncIterator")
}, function(t, e, n) {
    n(27)("observable")
}, function(t, e, n) {
    var r = n(8),
        i = n(249),
        s = n(32),
        o = n(50),
        a = n(164);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n, r = s(t), u = o.f, c = i(r), f = {}, h = 0; c.length > h;) n = u(r, e = c[h++]), void 0 !== n && a(f, e, n);
            return f
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(268)(!1);
    r(r.S, "Object", {
        values: function(t) {
            return i(t)
        }
    })
}, function(t, e, n) {
    var r = n(30),
        i = n(32),
        s = n(43).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, o = i(e), a = r(o), u = a.length, c = 0, f = []; u > c;) s.call(o, n = a[c++]) && f.push(t ? [n, o[n]] : o[n]);
            return f
        }
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(268)(!0);
    r(r.S, "Object", {
        entries: function(t) {
            return i(t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(57),
        s = n(21),
        o = n(11);
    n(6) && r(r.P + n(271), "Object", {
        __defineGetter__: function(t, e) {
            o.f(i(this), t, {
                get: s(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    t.exports = n(28) || !n(7)(function() {
        var t = Math.random();
        __defineSetter__.call(null, t, function() {}), delete n(4)[t]
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(57),
        s = n(21),
        o = n(11);
    n(6) && r(r.P + n(271), "Object", {
        __defineSetter__: function(t, e) {
            o.f(i(this), t, {
                set: s(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(57),
        s = n(16),
        o = n(58),
        a = n(50).f;
    n(6) && r(r.P + n(271), "Object", {
        __lookupGetter__: function(t) {
            var e, n = i(this),
                r = s(t, !0);
            do
                if (e = a(n, r)) return e.get; while (n = o(n))
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(57),
        s = n(16),
        o = n(58),
        a = n(50).f;
    n(6) && r(r.P + n(271), "Object", {
        __lookupSetter__: function(t) {
            var e, n = i(this),
                r = s(t, !0);
            do
                if (e = a(n, r)) return e.set; while (n = o(n))
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.P + r.R, "Map", {
        toJSON: n(276)("Map")
    })
}, function(t, e, n) {
    var r = n(74),
        i = n(277);
    t.exports = function(t) {
        return function() {
            if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return i(this)
        }
    }
}, function(t, e, n) {
    var r = n(207);
    t.exports = function(t, e) {
        var n = [];
        return r(t, !1, n.push, n, e), n
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.P + r.R, "Set", {
        toJSON: n(276)("Set")
    })
}, function(t, e, n) {
    n(280)("Map")
}, function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = function(t) {
        r(r.S, t, {
            of: function() {
                for (var t = arguments.length, e = Array(t); t--;) e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}, function(t, e, n) {
    n(280)("Set")
}, function(t, e, n) {
    n(280)("WeakMap")
}, function(t, e, n) {
    n(280)("WeakSet")
}, function(t, e, n) {
    n(285)("Map")
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(21),
        s = n(20),
        o = n(207);
    t.exports = function(t) {
        r(r.S, t, {
            from: function(t) {
                var e, n, r, a, u = arguments[1];
                return i(this), e = void 0 !== u, e && i(u), void 0 == t ? new this : (n = [], e ? (r = 0, a = s(u, arguments[2], 2), o(t, !1, function(t) {
                    n.push(a(t, r++))
                })) : o(t, !1, n.push, n), new this(n))
            }
        })
    }
}, function(t, e, n) {
    n(285)("Set")
}, function(t, e, n) {
    n(285)("WeakMap")
}, function(t, e, n) {
    n(285)("WeakSet")
}, function(t, e, n) {
    var r = n(8);
    r(r.G, {
        global: n(4)
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "System", {
        global: n(4)
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(34);
    r(r.S, "Error", {
        isError: function(t) {
            return "Error" === i(t)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        clamp: function(t, e, n) {
            return Math.min(n, Math.max(e, t))
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        DEG_PER_RAD: Math.PI / 180
    })
}, function(t, e, n) {
    var r = n(8),
        i = 180 / Math.PI;
    r(r.S, "Math", {
        degrees: function(t) {
            return t * i
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(296),
        s = n(113);
    r(r.S, "Math", {
        fscale: function(t, e, n, r, o) {
            return s(i(t, e, n, r, o))
        }
    })
}, function(t, e) {
    t.exports = Math.scale || function(t, e, n, r, i) {
        return 0 === arguments.length || t != t || e != e || n != n || r != r || i != i ? NaN : t === 1 / 0 || t === -(1 / 0) ? t : (t - e) * (i - r) / (n - e) + r
    }
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        iaddh: function(t, e, n, r) {
            var i = t >>> 0,
                s = e >>> 0,
                o = n >>> 0;
            return s + (r >>> 0) + ((i & o | (i | o) & ~(i + o >>> 0)) >>> 31) | 0
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        isubh: function(t, e, n, r) {
            var i = t >>> 0,
                s = e >>> 0,
                o = n >>> 0;
            return s - (r >>> 0) - ((~i & o | ~(i ^ o) & i - o >>> 0) >>> 31) | 0
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        imulh: function(t, e) {
            var n = 65535,
                r = +t,
                i = +e,
                s = r & n,
                o = i & n,
                a = r >> 16,
                u = i >> 16,
                c = (a * o >>> 0) + (s * o >>> 16);
            return a * u + (c >> 16) + ((s * u >>> 0) + (c & n) >> 16)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        RAD_PER_DEG: 180 / Math.PI
    })
}, function(t, e, n) {
    var r = n(8),
        i = Math.PI / 180;
    r(r.S, "Math", {
        radians: function(t) {
            return t * i
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        scale: n(296)
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        umulh: function(t, e) {
            var n = 65535,
                r = +t,
                i = +e,
                s = r & n,
                o = i & n,
                a = r >>> 16,
                u = i >>> 16,
                c = (a * o >>> 0) + (s * o >>> 16);
            return a * u + (c >>> 16) + ((s * u >>> 0) + (c & n) >>> 16)
        }
    })
}, function(t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        signbit: function(t) {
            return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(9),
        s = n(4),
        o = n(208),
        a = n(213);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = o(this, i.Promise || s.Promise),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return a(e, t()).then(function() {
                    return n
                })
            } : t, n ? function(n) {
                return a(e, t()).then(function() {
                    throw n
                })
            } : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(211),
        s = n(212);
    r(r.S, "Promise", {
        try: function(t) {
            var e = i.f(this),
                n = s(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = r.key,
        o = r.set;
    r.exp({
        defineMetadata: function(t, e, n, r) {
            o(t, e, i(n), s(r))
        }
    })
}, function(t, e, n) {
    var r = n(215),
        i = n(8),
        s = n(23)("metadata"),
        o = s.store || (s.store = new(n(220))),
        a = function(t, e, n) {
            var i = o.get(t);
            if (!i) {
                if (!n) return;
                o.set(t, i = new r)
            }
            var s = i.get(e);
            if (!s) {
                if (!n) return;
                i.set(e, s = new r)
            }
            return s
        },
        u = function(t, e, n) {
            var r = a(e, n, !1);
            return void 0 !== r && r.has(t)
        },
        c = function(t, e, n) {
            var r = a(e, n, !1);
            return void 0 === r ? void 0 : r.get(t)
        },
        f = function(t, e, n, r) {
            a(n, r, !0).set(t, e)
        },
        h = function(t, e) {
            var n = a(t, e, !1),
                r = [];
            return n && n.forEach(function(t, e) {
                r.push(e)
            }), r
        },
        l = function(t) {
            return void 0 === t || "symbol" == typeof t ? t : String(t)
        },
        d = function(t) {
            i(i.S, "Reflect", t)
        };
    t.exports = {
        store: o,
        map: a,
        has: u,
        get: c,
        set: f,
        keys: h,
        key: l,
        exp: d
    }
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = r.key,
        o = r.map,
        a = r.store;
    r.exp({
        deleteMetadata: function(t, e) {
            var n = arguments.length < 3 ? void 0 : s(arguments[2]),
                r = o(i(e), n, !1);
            if (void 0 === r || !r.delete(t)) return !1;
            if (r.size) return !0;
            var u = a.get(e);
            return u.delete(n), !!u.size || a.delete(e)
        }
    })
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = n(58),
        o = r.has,
        a = r.get,
        u = r.key,
        c = function(t, e, n) {
            var r = o(t, e, n);
            if (r) return a(t, e, n);
            var i = s(e);
            return null !== i ? c(t, i, n) : void 0
        };
    r.exp({
        getMetadata: function(t, e) {
            return c(t, i(e), arguments.length < 3 ? void 0 : u(arguments[2]))
        }
    })
}, function(t, e, n) {
    var r = n(219),
        i = n(277),
        s = n(308),
        o = n(12),
        a = n(58),
        u = s.keys,
        c = s.key,
        f = function(t, e) {
            var n = u(t, e),
                s = a(t);
            if (null === s) return n;
            var o = f(s, e);
            return o.length ? n.length ? i(new r(n.concat(o))) : o : n
        };
    s.exp({
        getMetadataKeys: function(t) {
            return f(o(t), arguments.length < 2 ? void 0 : c(arguments[1]))
        }
    })
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = r.get,
        o = r.key;
    r.exp({
        getOwnMetadata: function(t, e) {
            return s(t, i(e), arguments.length < 3 ? void 0 : o(arguments[2]))
        }
    })
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = r.keys,
        o = r.key;
    r.exp({
        getOwnMetadataKeys: function(t) {
            return s(i(t), arguments.length < 2 ? void 0 : o(arguments[1]))
        }
    })
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = n(58),
        o = r.has,
        a = r.key,
        u = function(t, e, n) {
            var r = o(t, e, n);
            if (r) return !0;
            var i = s(e);
            return null !== i && u(t, i, n)
        };
    r.exp({
        hasMetadata: function(t, e) {
            return u(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = r.has,
        o = r.key;
    r.exp({
        hasOwnMetadata: function(t, e) {
            return s(t, i(e), arguments.length < 3 ? void 0 : o(arguments[2]))
        }
    })
}, function(t, e, n) {
    var r = n(308),
        i = n(12),
        s = n(21),
        o = r.key,
        a = r.set;
    r.exp({
        metadata: function(t, e) {
            return function(n, r) {
                a(t, e, (void 0 !== r ? i : s)(n), o(r))
            }
        }
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(210)(),
        s = n(4).process,
        o = "process" == n(34)(s);
    r(r.G, {
        asap: function(t) {
            var e = o && s.domain;
            i(e ? e.bind(t) : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(4),
        s = n(9),
        o = n(210)(),
        a = n(25)("observable"),
        u = n(21),
        c = n(12),
        f = n(206),
        h = n(214),
        l = n(10),
        d = n(207),
        p = d.RETURN,
        g = function(t) {
            return null == t ? void 0 : u(t)
        },
        y = function(t) {
            var e = t._c;
            e && (t._c = void 0, e())
        },
        v = function(t) {
            return void 0 === t._o
        },
        m = function(t) {
            v(t) || (t._o = void 0, y(t))
        },
        S = function(t, e) {
            c(t), this._c = void 0, this._o = t, t = new b(this);
            try {
                var n = e(t),
                    r = n;
                null != n && ("function" == typeof n.unsubscribe ? n = function() {
                    r.unsubscribe()
                } : u(n), this._c = n)
            } catch (e) {
                return void t.error(e)
            }
            v(this) && y(this)
        };
    S.prototype = h({}, {
        unsubscribe: function() {
            m(this)
        }
    });
    var b = function(t) {
        this._s = t
    };
    b.prototype = h({}, {
        next: function(t) {
            var e = this._s;
            if (!v(e)) {
                var n = e._o;
                try {
                    var r = g(n.next);
                    if (r) return r.call(n, t)
                } catch (t) {
                    try {
                        m(e)
                    } finally {
                        throw t
                    }
                }
            }
        },
        error: function(t) {
            var e = this._s;
            if (v(e)) throw t;
            var n = e._o;
            e._o = void 0;
            try {
                var r = g(n.error);
                if (!r) throw t;
                t = r.call(n, t)
            } catch (t) {
                try {
                    y(e)
                } finally {
                    throw t
                }
            }
            return y(e), t
        },
        complete: function(t) {
            var e = this._s;
            if (!v(e)) {
                var n = e._o;
                e._o = void 0;
                try {
                    var r = g(n.complete);
                    t = r ? r.call(n, t) : void 0
                } catch (t) {
                    try {
                        y(e)
                    } finally {
                        throw t
                    }
                }
                return y(e), t
            }
        }
    });
    var w = function(t) {
        f(this, w, "Observable", "_f")._f = u(t)
    };
    h(w.prototype, {
        subscribe: function(t) {
            return new S(t, this._f)
        },
        forEach: function(t) {
            var e = this;
            return new(s.Promise || i.Promise)(function(n, r) {
                u(t);
                var i = e.subscribe({
                    next: function(e) {
                        try {
                            return t(e)
                        } catch (t) {
                            r(t), i.unsubscribe()
                        }
                    },
                    error: r,
                    complete: n
                })
            })
        }
    }), h(w, {
        from: function(t) {
            var e = "function" == typeof this ? this : w,
                n = g(c(t)[a]);
            if (n) {
                var r = c(n.call(t));
                return r.constructor === e ? r : new e(function(t) {
                    return r.subscribe(t)
                })
            }
            return new e(function(e) {
                var n = !1;
                return o(function() {
                        if (!n) {
                            try {
                                if (d(t, !1, function(t) {
                                        if (e.next(t), n) return p
                                    }) === p) return
                            } catch (t) {
                                if (n) throw t;
                                return void e.error(t)
                            }
                            e.complete()
                        }
                    }),
                    function() {
                        n = !0
                    }
            })
        },
        of: function() {
            for (var t = 0, e = arguments.length, n = Array(e); t < e;) n[t] = arguments[t++];
            return new("function" == typeof this ? this : w)(function(t) {
                var e = !1;
                return o(function() {
                        if (!e) {
                            for (var r = 0; r < n.length; ++r)
                                if (t.next(n[r]), e) return;
                            t.complete()
                        }
                    }),
                    function() {
                        e = !0
                    }
            })
        }
    }), l(w.prototype, a, function() {
        return this
    }), r(r.G, {
        Observable: w
    }), n(193)("Observable")
}, function(t, e, n) {
    var r = n(4),
        i = n(8),
        s = r.navigator,
        o = [].slice,
        a = !!s && /MSIE .\./.test(s.userAgent),
        u = function(t) {
            return function(e, n) {
                var r = arguments.length > 2,
                    i = !!r && o.call(arguments, 2);
                return t(r ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, i)
                } : e, n)
            }
        };
    i(i.G + i.B + i.F * a, {
        setTimeout: u(r.setTimeout),
        setInterval: u(r.setInterval)
    })
}, function(t, e, n) {
    var r = n(8),
        i = n(209);
    r(r.G + r.B, {
        setImmediate: i.set,
        clearImmediate: i.clear
    })
}, function(t, e, n) {
    for (var r = n(194), i = n(30), s = n(18), o = n(4), a = n(10), u = n(129), c = n(25), f = c("iterator"), h = c("toStringTag"), l = u.Array, d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = i(d), g = 0; g < p.length; g++) {
        var y, v = p[g],
            m = d[v],
            S = o[v],
            b = S && S.prototype;
        if (b && (b[f] || a(b, f, l), b[h] || a(b, h, v), u[v] = l, m))
            for (y in r) b[y] || s(b, y, r[y], !0)
    }
}, function(t, e) {
    (function(e) {
        ! function(e) {
            "use strict";

            function n(t, e, n, r) {
                var s = e && e.prototype instanceof i ? e : i,
                    o = Object.create(s.prototype),
                    a = new d(r || []);
                return o._invoke = c(t, n, a), o
            }

            function r(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function i() {}

            function s() {}

            function o() {}

            function a(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function u(t) {
                function n(e, i, s, o) {
                    var a = r(t[e], t, i);
                    if ("throw" !== a.type) {
                        var u = a.arg,
                            c = u.value;
                        return c && "object" == typeof c && m.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                            n("next", t, s, o)
                        }, function(t) {
                            n("throw", t, s, o)
                        }) : Promise.resolve(c).then(function(t) {
                            u.value = t, s(u)
                        }, o)
                    }
                    o(a.arg)
                }

                function i(t, e) {
                    function r() {
                        return new Promise(function(r, i) {
                            n(t, e, r, i)
                        })
                    }
                    return s = s ? s.then(r, r) : r()
                }
                "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n));
                var s;
                this._invoke = i
            }

            function c(t, e, n) {
                var i = A;
                return function(s, o) {
                    if (i === P) throw new Error("Generator is already running");
                    if (i === O) {
                        if ("throw" === s) throw o;
                        return g()
                    }
                    for (n.method = s, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var u = f(a, n);
                            if (u) {
                                if (u === C) continue;
                                return u
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (i === A) throw i = O, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        i = P;
                        var c = r(t, e, n);
                        if ("normal" === c.type) {
                            if (i = n.done ? O : F, c.arg === C) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (i = O, n.method = "throw", n.arg = c.arg)
                    }
                }
            }

            function f(t, e) {
                var n = t.iterator[e.method];
                if (n === y) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = y, f(t, e), "throw" === e.method)) return C;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return C
                }
                var i = r(n, t.iterator, e.arg);
                if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, C;
                var s = i.arg;
                return s ? s.done ? (e[t.resultName] = s.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = y), e.delegate = null, C) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, C)
            }

            function h(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function l(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function d(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(h, this), this.reset(!0)
            }

            function p(t) {
                if (t) {
                    var e = t[b];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function e() {
                                for (; ++n < t.length;)
                                    if (m.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = y, e.done = !0, e
                            };
                        return r.next = r
                    }
                }
                return {
                    next: g
                }
            }

            function g() {
                return {
                    value: y,
                    done: !0
                }
            }
            var y, v = Object.prototype,
                m = v.hasOwnProperty,
                S = "function" == typeof Symbol ? Symbol : {},
                b = S.iterator || "@@iterator",
                w = S.asyncIterator || "@@asyncIterator",
                _ = S.toStringTag || "@@toStringTag",
                x = "object" == typeof t,
                E = e.regeneratorRuntime;
            if (E) return void(x && (t.exports = E));
            E = e.regeneratorRuntime = x ? t.exports : {}, E.wrap = n;
            var A = "suspendedStart",
                F = "suspendedYield",
                P = "executing",
                O = "completed",
                C = {},
                T = {};
            T[b] = function() {
                return this
            };
            var j = Object.getPrototypeOf,
                I = j && j(j(p([])));
            I && I !== v && m.call(I, b) && (T = I);
            var R = o.prototype = i.prototype = Object.create(T);
            s.prototype = R.constructor = o, o.constructor = s, o[_] = s.displayName = "GeneratorFunction", E.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === s || "GeneratorFunction" === (e.displayName || e.name))
            }, E.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : (t.__proto__ = o, _ in t || (t[_] = "GeneratorFunction")), t.prototype = Object.create(R), t
            }, E.awrap = function(t) {
                return {
                    __await: t
                }
            }, a(u.prototype), u.prototype[w] = function() {
                return this
            }, E.AsyncIterator = u, E.async = function(t, e, r, i) {
                var s = new u(n(t, e, r, i));
                return E.isGeneratorFunction(e) ? s : s.next().then(function(t) {
                    return t.done ? t.value : s.next()
                })
            }, a(R), R[_] = "Generator", R[b] = function() {
                return this
            }, R.toString = function() {
                return "[object Generator]"
            }, E.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, E.values = p, d.prototype = {
                constructor: d,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(l), !t)
                        for (var e in this) "t" === e.charAt(0) && m.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = y)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0],
                        e = t.completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    function e(e, r) {
                        return s.type = "throw", s.arg = t, n.next = e, r && (n.method = "next", n.arg = y), !!r
                    }
                    if (this.done) throw t;
                    for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r],
                            s = i.completion;
                        if ("root" === i.tryLoc) return e("end");
                        if (i.tryLoc <= this.prev) {
                            var o = m.call(i, "catchLoc"),
                                a = m.call(i, "finallyLoc");
                            if (o && a) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            } else if (o) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && m.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, C) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), C
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), l(n), C
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                l(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: p(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = y), C
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    n(324), t.exports = n(9).RegExp.escape
}, function(t, e, n) {
    var r = n(8),
        i = n(325)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    r(r.S, "RegExp", {
        escape: function(t) {
            return i(t)
        }
    })
}, function(t, e) {
    t.exports = function(t, e) {
        var n = e === Object(e) ? function(t) {
            return e[t]
        } : e;
        return function(e) {
            return String(e).replace(t, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = e.Log = n(327),
        i = e.OidcClient = n(328),
        s = e.OidcClientSettings = n(329),
        o = e.WebStorageStateStore = n(330),
        a = e.InMemoryWebStorage = n(352),
        u = e.UserManager = n(353),
        c = e.AccessTokenEvents = n(362),
        f = e.MetadataService = n(333),
        h = e.CordovaPopupNavigator = n(369),
        l = e.CordovaIFrameNavigator = n(371),
        d = e.CheckSessionIFrame = n(367),
        p = e.TokenRevocationClient = n(368),
        g = e.SessionMonitor = n(366),
        y = e.Global = n(331);
    e.default = {
        Log: r,
        OidcClient: i,
        OidcClientSettings: s,
        WebStorageStateStore: o,
        InMemoryWebStorage: a,
        UserManager: u,
        AccessTokenEvents: c,
        MetadataService: f,
        CordovaPopupNavigator: h,
        CordovaIFrameNavigator: l,
        CheckSessionIFrame: d,
        TokenRevocationClient: p,
        SessionMonitor: g,
        Global: y
    }
}, function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        i = {
            debug: function() {},
            info: function() {},
            warn: function() {},
            error: function() {}
        },
        s = 0,
        o = 1,
        a = 2,
        u = 3,
        c = 4,
        f = void 0,
        h = void 0,
        l = function() {
            function t() {
                n(this, t)
            }
            return t.reset = function() {
                h = u, f = i
            }, t.debug = function() {
                if (h >= c) {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    f.debug.apply(f, Array.from(e))
                }
            }, t.info = function() {
                if (h >= u) {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    f.info.apply(f, Array.from(e))
                }
            }, t.warn = function() {
                if (h >= a) {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    f.warn.apply(f, Array.from(e))
                }
            }, t.error = function() {
                if (h >= o) {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    f.error.apply(f, Array.from(e))
                }
            }, r(t, null, [{
                key: "NONE",
                get: function() {
                    return s
                }
            }, {
                key: "ERROR",
                get: function() {
                    return o
                }
            }, {
                key: "WARN",
                get: function() {
                    return a
                }
            }, {
                key: "INFO",
                get: function() {
                    return u
                }
            }, {
                key: "DEBUG",
                get: function() {
                    return c
                }
            }, {
                key: "level",
                get: function() {
                    return h
                },
                set: function(t) {
                    if (!(s <= t && t <= c)) throw new Error("Invalid log level");
                    h = t
                }
            }, {
                key: "logger",
                get: function() {
                    return f
                },
                set: function(t) {
                    if (!t.debug && t.info && (t.debug = t.info), !(t.debug && t.info && t.warn && t.error)) throw new Error("Invalid logger");
                    f = t
                }
            }]), t
        }();
    e.default = l, l.reset(), t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = n(329),
        c = r(u),
        f = n(336),
        h = r(f),
        l = n(344),
        d = r(l),
        p = n(349),
        g = r(p),
        y = n(350),
        v = r(y),
        m = n(351),
        S = r(m),
        b = n(346),
        w = r(b),
        _ = n(347),
        x = r(_),
        E = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t), e instanceof c.default ? this._settings = e : this._settings = new c.default(e)
            }
            return t.prototype.createSigninRequest = function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.response_type,
                    r = e.scope,
                    i = e.redirect_uri,
                    s = e.data,
                    o = e.state,
                    u = e.prompt,
                    c = e.display,
                    f = e.max_age,
                    h = e.ui_locales,
                    l = e.id_token_hint,
                    p = e.login_hint,
                    g = e.acr_values,
                    y = e.resource,
                    v = e.request,
                    m = e.request_uri,
                    S = e.extraQueryParams,
                    b = arguments[1];
                a.default.debug("OidcClient.createSigninRequest");
                var w = this._settings.client_id;
                n = n || this._settings.response_type, r = r || this._settings.scope, i = i || this._settings.redirect_uri, u = u || this._settings.prompt, c = c || this._settings.display, f = f || this._settings.max_age, h = h || this._settings.ui_locales, g = g || this._settings.acr_values, y = y || this._settings.resource, S = S || this._settings.extraQueryParams;
                var _ = this._settings.authority;
                return this._metadataService.getAuthorizationEndpoint().then(function(e) {
                    a.default.debug("Received authorization endpoint", e);
                    var x = new d.default({
                            url: e,
                            client_id: w,
                            redirect_uri: i,
                            response_type: n,
                            scope: r,
                            data: s || o,
                            authority: _,
                            prompt: u,
                            display: c,
                            max_age: f,
                            ui_locales: h,
                            id_token_hint: l,
                            login_hint: p,
                            acr_values: g,
                            resource: y,
                            request: v,
                            request_uri: m,
                            extraQueryParams: S
                        }),
                        E = x.state;
                    return b = b || t._stateStore, b.set(E.id, E.toStorageString()).then(function() {
                        return x
                    })
                })
            }, t.prototype.processSigninResponse = function(t, e) {
                var n = this;
                a.default.debug("OidcClient.processSigninResponse");
                var r = new g.default(t);
                return r.state ? (e = e || this._stateStore, e.remove(r.state).then(function(t) {
                    if (!t) throw a.default.error("No matching state found in storage"), new Error("No matching state found in storage");
                    var e = w.default.fromStorageString(t);
                    return a.default.debug("Received state from storage; validating response"), n._validator.validateSigninResponse(e, r)
                })) : (a.default.error("No state in response"), Promise.reject(new Error("No state in response")))
            }, t.prototype.createSignoutRequest = function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.id_token_hint,
                    r = e.data,
                    i = e.state,
                    s = e.post_logout_redirect_uri,
                    o = arguments[1];
                return a.default.debug("OidcClient.createSignoutRequest"), s = s || this._settings.post_logout_redirect_uri, this._metadataService.getEndSessionEndpoint().then(function(e) {
                    if (!e) throw a.default.error("No end session endpoint url returned"), new Error("no end session endpoint");
                    a.default.debug("Received end session endpoint", e);
                    var u = new v.default({
                            url: e,
                            id_token_hint: n,
                            post_logout_redirect_uri: s,
                            data: r || i
                        }),
                        c = u.state;
                    return c && (a.default.debug("Signout request has state to persist"), o = o || t._stateStore, o.set(c.id, c.toStorageString())), u
                })
            }, t.prototype.processSignoutResponse = function(t, e) {
                var n = this;
                a.default.debug("OidcClient.processSignoutResponse");
                var r = new S.default(t);
                if (!r.state) return a.default.debug("No state in response"), r.error ? (a.default.warn("Response was error", r.error), Promise.reject(new h.default(r))) : Promise.resolve(r);
                var i = r.state;
                return e = e || this._stateStore, e.remove(i).then(function(t) {
                    if (!t) throw a.default.error("No matching state found in storage"), new Error("No matching state found in storage");
                    var e = x.default.fromStorageString(t);
                    return a.default.debug("Received state from storage; validating response"), n._validator.validateSignoutResponse(e, r)
                })
            }, t.prototype.clearStaleState = function(t) {
                return a.default.debug("OidcClient.clearStaleState"), t = t || this._stateStore, x.default.clearStaleState(t, this.settings.staleStateAge)
            }, s(t, [{
                key: "_stateStore",
                get: function() {
                    return this.settings.stateStore
                }
            }, {
                key: "_validator",
                get: function() {
                    return this.settings.validator;
                }
            }, {
                key: "_metadataService",
                get: function() {
                    return this.settings.metadataService
                }
            }, {
                key: "settings",
                get: function() {
                    return this._settings
                }
            }, {
                key: "metadataService",
                get: function() {
                    return this._metadataService
                }
            }]), t
        }();
    e.default = E, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(327),
        u = r(a),
        c = n(330),
        f = r(c),
        h = n(332),
        l = r(h),
        d = n(333),
        p = r(d),
        g = ".well-known/openid-configuration",
        y = "id_token",
        v = "openid",
        m = 300,
        S = 300,
        b = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.authority,
                    r = e.metadataUrl,
                    o = e.metadata,
                    a = e.signingKeys,
                    u = e.client_id,
                    c = e.client_secret,
                    h = e.response_type,
                    d = void 0 === h ? y : h,
                    g = e.scope,
                    b = void 0 === g ? v : g,
                    w = e.redirect_uri,
                    _ = e.post_logout_redirect_uri,
                    x = e.prompt,
                    E = e.display,
                    A = e.max_age,
                    F = e.ui_locales,
                    P = e.acr_values,
                    O = e.resource,
                    C = e.filterProtocolClaims,
                    T = void 0 === C || C,
                    j = e.loadUserInfo,
                    I = void 0 === j || j,
                    R = e.staleStateAge,
                    D = void 0 === R ? m : R,
                    H = e.clockSkew,
                    k = void 0 === H ? S : H,
                    N = e.stateStore,
                    B = void 0 === N ? new f.default : N,
                    M = e.ResponseValidatorCtor,
                    V = void 0 === M ? l.default : M,
                    L = e.MetadataServiceCtor,
                    K = void 0 === L ? p.default : L,
                    U = e.extraQueryParams,
                    q = void 0 === U ? {} : U;
                i(this, t), this._authority = n, this._metadataUrl = r, this._metadata = o, this._signingKeys = a, this._client_id = u, this._client_secret = c, this._response_type = d, this._scope = b, this._redirect_uri = w, this._post_logout_redirect_uri = _, this._prompt = x, this._display = E, this._max_age = A, this._ui_locales = F, this._acr_values = P, this._resource = O, this._filterProtocolClaims = !!T, this._loadUserInfo = !!I, this._staleStateAge = D, this._clockSkew = k, this._stateStore = B, this._validator = new V(this), this._metadataService = new K(this), this._extraQueryParams = "object" === ("undefined" == typeof q ? "undefined" : s(q)) ? q : {}
            }
            return o(t, [{
                key: "client_id",
                get: function() {
                    return this._client_id
                },
                set: function(t) {
                    if (this._client_id) throw u.default.error("client_id has already been assigned."), new Error("client_id has already been assigned.");
                    this._client_id = t
                }
            }, {
                key: "client_secret",
                get: function() {
                    return this._client_secret
                }
            }, {
                key: "response_type",
                get: function() {
                    return this._response_type
                }
            }, {
                key: "scope",
                get: function() {
                    return this._scope
                }
            }, {
                key: "redirect_uri",
                get: function() {
                    return this._redirect_uri
                }
            }, {
                key: "post_logout_redirect_uri",
                get: function() {
                    return this._post_logout_redirect_uri
                }
            }, {
                key: "prompt",
                get: function() {
                    return this._prompt
                }
            }, {
                key: "display",
                get: function() {
                    return this._display
                }
            }, {
                key: "max_age",
                get: function() {
                    return this._max_age
                }
            }, {
                key: "ui_locales",
                get: function() {
                    return this._ui_locales
                }
            }, {
                key: "acr_values",
                get: function() {
                    return this._acr_values
                }
            }, {
                key: "resource",
                get: function() {
                    return this._resource
                }
            }, {
                key: "authority",
                get: function() {
                    return this._authority
                },
                set: function(t) {
                    if (this._authority) throw u.default.error("authority has already been assigned."), new Error("authority has already been assigned.");
                    this._authority = t
                }
            }, {
                key: "metadataUrl",
                get: function() {
                    return this._metadataUrl || (this._metadataUrl = this.authority, this._metadataUrl && this._metadataUrl.indexOf(g) < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += g)), this._metadataUrl
                }
            }, {
                key: "metadata",
                get: function() {
                    return this._metadata
                },
                set: function(t) {
                    this._metadata = t
                }
            }, {
                key: "signingKeys",
                get: function() {
                    return this._signingKeys
                },
                set: function(t) {
                    this._signingKeys = t
                }
            }, {
                key: "filterProtocolClaims",
                get: function() {
                    return this._filterProtocolClaims
                }
            }, {
                key: "loadUserInfo",
                get: function() {
                    return this._loadUserInfo
                }
            }, {
                key: "staleStateAge",
                get: function() {
                    return this._staleStateAge
                }
            }, {
                key: "clockSkew",
                get: function() {
                    return this._clockSkew
                }
            }, {
                key: "stateStore",
                get: function() {
                    return this._stateStore
                }
            }, {
                key: "validator",
                get: function() {
                    return this._validator
                }
            }, {
                key: "metadataService",
                get: function() {
                    return this._metadataService
                }
            }, {
                key: "extraQueryParams",
                get: function() {
                    return this._extraQueryParams
                },
                set: function(t) {
                    "object" === ("undefined" == typeof t ? "undefined" : s(t)) ? this._extraQueryParams = t: this._extraQueryParams = {}
                }
            }]), t
        }();
    e.default = b, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(331),
        u = r(a),
        c = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.prefix,
                    r = void 0 === n ? "oidc." : n,
                    s = e.store,
                    o = void 0 === s ? u.default.localStorage : s;
                i(this, t), this._store = o, this._prefix = r
            }
            return t.prototype.set = function(t, e) {
                return o.default.debug("WebStorageStateStore.set", t), t = this._prefix + t, this._store.setItem(t, e), Promise.resolve()
            }, t.prototype.get = function(t) {
                o.default.debug("WebStorageStateStore.get", t), t = this._prefix + t;
                var e = this._store.getItem(t);
                return Promise.resolve(e)
            }, t.prototype.remove = function(t) {
                o.default.debug("WebStorageStateStore.remove", t), t = this._prefix + t;
                var e = this._store.getItem(t);
                return this._store.removeItem(t), Promise.resolve(e)
            }, t.prototype.getAllKeys = function() {
                o.default.debug("WebStorageStateStore.getAllKeys");
                for (var t = [], e = 0; e < this._store.length; e++) {
                    var n = this._store.key(e);
                    0 === n.indexOf(this._prefix) && t.push(n.substr(this._prefix.length))
                }
                return Promise.resolve(t)
            }, t
        }();
    e.default = c, t.exports = e.default
}, function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        i = {
            setInterval: function(t) {
                function e(e, n) {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }, e
            }(function(t, e) {
                return setInterval(t, e)
            }),
            clearInterval: function(t) {
                function e(e) {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }, e
            }(function(t) {
                return clearInterval(t)
            })
        },
        s = !1,
        o = null,
        a = function() {
            function t() {
                n(this, t)
            }
            return t._testing = function() {
                s = !0
            }, t.setXMLHttpRequest = function(t) {
                o = t
            }, r(t, null, [{
                key: "location",
                get: function() {
                    if (!s) return location
                }
            }, {
                key: "localStorage",
                get: function() {
                    if (!s) return localStorage
                }
            }, {
                key: "sessionStorage",
                get: function() {
                    if (!s) return sessionStorage
                }
            }, {
                key: "XMLHttpRequest",
                get: function() {
                    if (!s) return o || XMLHttpRequest
                }
            }, {
                key: "timer",
                get: function() {
                    if (!s) return i
                }
            }]), t
        }();
    e.default = a, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(333),
        u = r(a),
        c = n(335),
        f = r(c),
        h = n(336),
        l = r(h),
        d = n(337),
        p = r(d),
        g = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"],
        y = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.default,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.default;
                if (i(this, t), !e) throw o.default.error("No settings passed to ResponseValidator"), new Error("settings");
                this._settings = e, this._metadataService = new n(this._settings), this._userInfoService = new r(this._settings), this._joseUtil = s
            }
            return t.prototype.validateSigninResponse = function(t, e) {
                var n = this;
                return o.default.debug("ResponseValidator.validateSigninResponse"), this._processSigninParams(t, e).then(function(e) {
                    return o.default.debug("state processed"), n._validateTokens(t, e).then(function(t) {
                        return o.default.debug("tokens validated"), n._processClaims(t).then(function(t) {
                            return o.default.debug("claims processed"), t
                        })
                    })
                })
            }, t.prototype.validateSignoutResponse = function(t, e) {
                return o.default.debug("ResponseValidator.validateSignoutResponse"), t.id !== e.state ? (o.default.error("State does not match"), Promise.reject(new Error("State does not match"))) : (o.default.debug("state validated"), e.state = t.data, e.error ? (o.default.warn("Response was error", e.error), Promise.reject(new l.default(e))) : Promise.resolve(e))
            }, t.prototype._processSigninParams = function(t, e) {
                if (o.default.debug("ResponseValidator._processSigninParams"), t.id !== e.state) return o.default.error("State does not match"), Promise.reject(new Error("State does not match"));
                if (!t.client_id) return o.default.error("No client_id on state"), Promise.reject(new Error("No client_id on state"));
                if (!t.authority) return o.default.error("No authority on state"), Promise.reject(new Error("No authority on state"));
                if (this._settings.authority) {
                    if (this._settings.authority && this._settings.authority !== t.authority) return o.default.error("authority mismatch on settings vs. signin state"), Promise.reject(new Error("authority mismatch on settings vs. signin state"))
                } else this._settings.authority = t.authority;
                if (this._settings.client_id) {
                    if (this._settings.client_id && this._settings.client_id !== t.client_id) return o.default.error("client_id mismatch on settings vs. signin state"), Promise.reject(new Error("client_id mismatch on settings vs. signin state"))
                } else this._settings.client_id = t.client_id;
                return o.default.debug("state validated"), e.state = t.data, e.error ? (o.default.warn("Response was error", e.error), Promise.reject(new l.default(e))) : t.nonce && !e.id_token ? (o.default.error("Expecting id_token in response"), Promise.reject(new Error("No id_token in response"))) : !t.nonce && e.id_token ? (o.default.error("Not expecting id_token in response"), Promise.reject(new Error("Unexpected id_token in response"))) : Promise.resolve(e)
            }, t.prototype._processClaims = function(t) {
                var e = this;
                if (o.default.debug("ResponseValidator._processClaims"), t.isOpenIdConnect) {
                    if (o.default.debug("response is OIDC, processing claims"), t.profile = this._filterProtocolClaims(t.profile), this._settings.loadUserInfo && t.access_token) return o.default.debug("loading user info"), this._userInfoService.getClaims(t.access_token).then(function(n) {
                        return o.default.debug("user info claims received from user info endpoint"), n.sub !== t.profile.sub ? (o.default.error("sub from user info endpoint does not match sub in access_token"), Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"))) : (t.profile = e._mergeClaims(t.profile, n), o.default.debug("user info claims received, updated profile:", t.profile), t)
                    });
                    o.default.debug("not loading user info")
                } else o.default.debug("response is not OIDC, not processing claims");
                return Promise.resolve(t)
            }, t.prototype._mergeClaims = function(t, e) {
                var n = Object.assign({}, t);
                for (var r in e) {
                    var i = e[r];
                    Array.isArray(i) || (i = [i]);
                    var s = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, c = i[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                            var f = u.value;
                            n[r] ? Array.isArray(n[r]) ? n[r].indexOf(f) < 0 && n[r].push(f) : n[r] !== f && (n[r] = [n[r], f]) : n[r] = f
                        }
                    } catch (t) {
                        o = !0, a = t
                    } finally {
                        try {
                            !s && c.return && c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                }
                return n
            }, t.prototype._filterProtocolClaims = function(t) {
                o.default.debug("ResponseValidator._filterProtocolClaims, incoming claims:", t);
                var e = Object.assign({}, t);
                return this._settings._filterProtocolClaims ? (g.forEach(function(t) {
                    delete e[t]
                }), o.default.debug("protocol claims filtered", e)) : o.default.debug("protocol claims not filtered"), e
            }, t.prototype._validateTokens = function(t, e) {
                return o.default.debug("ResponseValidator._validateTokens"), e.id_token ? e.access_token ? (o.default.debug("Validating id_token and access_token"), this._validateIdTokenAndAccessToken(t, e)) : (o.default.debug("Validating id_token"), this._validateIdToken(t, e)) : (o.default.debug("No id_token to validate"), Promise.resolve(e))
            }, t.prototype._validateIdTokenAndAccessToken = function(t, e) {
                var n = this;
                return o.default.debug("ResponseValidator._validateIdTokenAndAccessToken"), this._validateIdToken(t, e).then(function(t) {
                    return n._validateAccessToken(t)
                })
            }, t.prototype._validateIdToken = function(t, e) {
                var n = this;
                if (o.default.debug("ResponseValidator._validateIdToken"), !t.nonce) return o.default.error("No nonce on state"), Promise.reject(new Error("No nonce on state"));
                var r = this._joseUtil.parseJwt(e.id_token);
                if (!r || !r.header || !r.payload) return o.default.error("Failed to parse id_token", r), Promise.reject(new Error("Failed to parse id_token"));
                if (t.nonce !== r.payload.nonce) return o.default.error("Invalid nonce in id_token"), Promise.reject(new Error("Invalid nonce in id_token"));
                var i = r.header.kid;
                return this._metadataService.getIssuer().then(function(s) {
                    return o.default.debug("Received issuer"), n._metadataService.getSigningKeys().then(function(a) {
                        if (!a) return o.default.error("No signing keys from metadata"), Promise.reject(new Error("No signing keys from metadata"));
                        o.default.debug("Received signing keys");
                        var u = void 0;
                        if (i) u = a.filter(function(t) {
                            return t.kid === i
                        })[0];
                        else {
                            if (a = n._filterByAlg(a, r.header.alg), a.length > 1) return o.default.error("No kid found in id_token and more than one key found in metadata"), Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                            u = a[0]
                        }
                        if (!u) return o.default.error("No key matching kid or alg found in signing keys"), Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                        var c = t.client_id,
                            f = n._settings.clockSkew;
                        return o.default.debug("Validaing JWT; using clock skew (in seconds) of: ", f), n._joseUtil.validateJwt(e.id_token, u, s, c, f).then(function() {
                            return o.default.debug("JWT validation successful"), r.payload.sub ? (e.profile = r.payload, e) : (o.default.error("No sub present in id_token"), Promise.reject(new Error("No sub present in id_token")))
                        })
                    })
                })
            }, t.prototype._filterByAlg = function(t, e) {
                o.default.debug("ResponseValidator._filterByAlg", e);
                var n = null;
                if (e.startsWith("RS")) n = "RSA";
                else if (e.startsWith("PS")) n = "PS";
                else {
                    if (!e.startsWith("ES")) return o.default.debug("alg not supported: ", e), [];
                    n = "EC"
                }
                return o.default.debug("Looking for keys that match kty: ", n), t = t.filter(function(t) {
                    return t.kty === n
                }), o.default.debug("Number of keys that match kty: ", n, t.length), t
            }, t.prototype._validateAccessToken = function(t) {
                if (o.default.debug("ResponseValidator._validateAccessToken"), !t.profile) return o.default.error("No profile loaded from id_token"), Promise.reject(new Error("No profile loaded from id_token"));
                if (!t.profile.at_hash) return o.default.error("No at_hash in id_token"), Promise.reject(new Error("No at_hash in id_token"));
                if (!t.id_token) return o.default.error("No id_token"), Promise.reject(new Error("No id_token"));
                var e = this._joseUtil.parseJwt(t.id_token);
                if (!e || !e.header) return o.default.error("Failed to parse id_token", e), Promise.reject(new Error("Failed to parse id_token"));
                var n = e.header.alg;
                if (!n || 5 !== n.length) return o.default.error("Unsupported alg:", n), Promise.reject(new Error("Unsupported alg: " + n));
                var r = n.substr(2, 3);
                if (!r) return o.default.error("Unsupported alg:", n, r), Promise.reject(new Error("Unsupported alg: " + n));
                if (r = parseInt(r), 256 !== r && 384 !== r && 512 !== r) return o.default.error("Unsupported alg:", n, r), Promise.reject(new Error("Unsupported alg: " + n));
                var i = "sha" + r,
                    s = this._joseUtil.hashString(t.access_token, i);
                if (!s) return o.default.error("access_token hash failed:", i), Promise.reject(new Error("Failed to validate at_hash"));
                var a = s.substr(0, s.length / 2),
                    u = this._joseUtil.hexToBase64Url(a);
                return u !== t.profile.at_hash ? (o.default.error("Failed to validate at_hash", u, t.profile.at_hash), Promise.reject(new Error("Failed to validate at_hash"))) : Promise.resolve(t)
            }, t
        }();
    e.default = y, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = n(334),
        c = r(u),
        f = ".well-known/openid-configuration",
        h = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default;
                if (i(this, t), !e) throw a.default.error("No settings passed to MetadataService"), new Error("settings");
                this._settings = e, this._jsonService = new n
            }
            return t.prototype.getMetadata = function() {
                var t = this;
                return a.default.debug("MetadataService.getMetadata"), this._settings.metadata ? (a.default.debug("Returning metadata from settings"), Promise.resolve(this._settings.metadata)) : this.metadataUrl ? (a.default.debug("getting metadata from", this.metadataUrl), this._jsonService.getJson(this.metadataUrl).then(function(e) {
                    return a.default.debug("json received"), t._settings.metadata = e, e
                })) : (a.default.error("No authority or metadataUrl configured on settings"), Promise.reject(new Error("No authority or metadataUrl configured on settings")))
            }, t.prototype.getIssuer = function() {
                return a.default.debug("MetadataService.getIssuer"), this._getMetadataProperty("issuer")
            }, t.prototype.getAuthorizationEndpoint = function() {
                return a.default.debug("MetadataService.getAuthorizationEndpoint"), this._getMetadataProperty("authorization_endpoint")
            }, t.prototype.getUserInfoEndpoint = function() {
                return a.default.debug("MetadataService.getUserInfoEndpoint"), this._getMetadataProperty("userinfo_endpoint")
            }, t.prototype.getTokenEndpoint = function() {
                return a.default.debug("MetadataService.getTokenEndpoint"), this._getMetadataProperty("token_endpoint", !0)
            }, t.prototype.getCheckSessionIframe = function() {
                return a.default.debug("MetadataService.getCheckSessionIframe"), this._getMetadataProperty("check_session_iframe", !0)
            }, t.prototype.getEndSessionEndpoint = function() {
                return a.default.debug("MetadataService.getEndSessionEndpoint"), this._getMetadataProperty("end_session_endpoint", !0)
            }, t.prototype.getRevocationEndpoint = function() {
                return a.default.debug("MetadataService.getRevocationEndpoint"), this._getMetadataProperty("revocation_endpoint", !0)
            }, t.prototype._getMetadataProperty = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a.default.debug("MetadataService._getMetadataProperty", t), this.getMetadata().then(function(n) {
                    if (a.default.debug("metadata recieved"), void 0 === n[t]) {
                        if (e === !0) return void a.default.warn("Metadata does not contain optional property " + t);
                        throw a.default.error("Metadata does not contain property " + t), new Error("Metadata does not contain property " + t)
                    }
                    return n[t]
                })
            }, t.prototype.getSigningKeys = function() {
                var t = this;
                return a.default.debug("MetadataService.getSigningKeys"), this._settings.signingKeys ? (a.default.debug("Returning signingKeys from settings"), Promise.resolve(this._settings.signingKeys)) : this._getMetadataProperty("jwks_uri").then(function(e) {
                    return a.default.debug("jwks_uri received", e), t._jsonService.getJson(e).then(function(e) {
                        if (a.default.debug("key set received", e), !e.keys) throw a.default.error("Missing keys on keyset"), new Error("Missing keys on keyset");
                        return t._settings.signingKeys = e.keys, t._settings.signingKeys
                    })
                })
            }, s(t, [{
                key: "metadataUrl",
                get: function() {
                    return this._metadataUrl || (this._settings.metadataUrl ? this._metadataUrl = this._settings.metadataUrl : (this._metadataUrl = this._settings.authority, this._metadataUrl && this._metadataUrl.indexOf(f) < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += f))), this._metadataUrl
                }
            }]), t
        }();
    e.default = h, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(331),
        u = r(a),
        c = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.default.XMLHttpRequest;
                i(this, t), this._XMLHttpRequest = e
            }
            return t.prototype.getJson = function(t, e) {
                var n = this;
                if (o.default.debug("JsonService.getJson", t), !t) throw o.default.error("No url passed"), new Error("url");
                return new Promise(function(r, i) {
                    var s = new n._XMLHttpRequest;
                    s.open("GET", t), s.onload = function() {
                        if (o.default.debug("HTTP response received, status", s.status), 200 === s.status) try {
                            r(JSON.parse(s.responseText))
                        } catch (t) {
                            o.default.error("Error parsing JSON response", t.message), i(t)
                        } else i(Error(s.statusText + " (" + s.status + ")"))
                    }, s.onerror = function() {
                        o.default.error("network error"), i(Error("Network Error"))
                    }, e && (o.default.debug("token passed, setting Authorization header"), s.setRequestHeader("Authorization", "Bearer " + e)), s.send()
                })
            }, t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(334),
        o = r(s),
        a = n(333),
        u = r(a),
        c = n(327),
        f = r(c),
        h = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default;
                if (i(this, t), !e) throw f.default.error("No settings passed to UserInfoService"), new Error("settings");
                this._settings = e, this._jsonService = new n, this._metadataService = new r(this._settings)
            }
            return t.prototype.getClaims = function(t) {
                var e = this;
                return f.default.debug("UserInfoService.getClaims"), t ? this._metadataService.getUserInfoEndpoint().then(function(n) {
                    return f.default.debug("received userinfo url", n), e._jsonService.getJson(n, t).then(function(t) {
                        return f.default.debug("claims received", t), t
                    })
                }) : (f.default.error("No token passed"), Promise.reject(new Error("A token is required")))
            }, t
        }();
    e.default = h, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(327),
        u = r(a),
        c = function(t) {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.error,
                    o = n.error_description,
                    a = n.error_uri,
                    c = n.state;
                if (i(this, e), !r) throw u.default.error("No error passed to ErrorResponse"), new Error("error");
                var f = s(this, t.call(this, o || r));
                return f.name = "ErrorResponse", f.error = r, f.error_description = o, f.error_uri = a, f.state = c, f
            }
            return o(e, t), e
        }(Error);
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(338),
        o = n(327),
        a = r(o),
        u = ["RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"],
        c = function() {
            function t() {
                i(this, t)
            }
            return t.parseJwt = function(t) {
                a.default.debug("JoseUtil.parseJwt");
                try {
                    var e = s.jws.JWS.parse(t);
                    return {
                        header: e.headerObj,
                        payload: e.payloadObj
                    }
                } catch (t) {
                    a.default.error(t)
                }
            }, t.validateJwt = function(e, n, r, i, o, u) {
                a.default.debug("JoseUtil.validateJwt");
                try {
                    if ("RSA" === n.kty)
                        if (n.e && n.n) n = s.KEYUTIL.getKey(n);
                        else {
                            if (!n.x5c || !n.x5c.length) return a.default.error("RSA key missing key material", n), Promise.reject(new Error("RSA key missing key material"));
                            n = s.KEYUTIL.getKey(s.X509.getPublicKeyFromCertPEM(n.x5c[0]))
                        }
                    else {
                        if ("EC" !== n.kty) return a.default.error("Unsupported key type", n && n.kty), Promise.reject(new Error("Unsupported key type: " + n && n.kty));
                        if (!(n.crv && n.x && n.y)) return a.default.error("EC key missing key material", n), Promise.reject(new Error("EC key missing key material"));
                        n = s.KEYUTIL.getKey(n)
                    }
                    return t._validateJwt(e, n, r, i, o, u)
                } catch (t) {
                    return a.default.error(t && t.message || t), Promise.reject("JWT validation failed")
                }
            }, t._validateJwt = function(e, n, r, i, o, c) {
                a.default.debug("JoseUtil._validateJwt"), o || (o = 0), c || (c = parseInt(Date.now() / 1e3));
                var f = t.parseJwt(e).payload;
                if (!f.iss) return a.default.error("issuer was not provided"), Promise.reject(new Error("issuer was not provided"));
                if (f.iss !== r) return a.default.error("Invalid issuer in token", f.iss), Promise.reject(new Error("Invalid issuer in token: " + f.iss));
                if (!f.aud) return a.default.error("aud was not provided"), Promise.reject(new Error("aud was not provided"));
                var h = f.aud === i || Array.isArray(f.aud) && f.aud.indexOf(i) >= 0;
                if (!h) return a.default.error("Invalid audience in token", f.aud), Promise.reject(new Error("Invalid audience in token: " + f.aud));
                var l = c + o,
                    d = c - o;
                if (!f.iat) return a.default.error("iat was not provided"), Promise.reject(new Error("iat was not provided"));
                if (l < f.iat) return a.default.error("iat is in the future", f.iat), Promise.reject(new Error("iat is in the future: " + f.iat));
                if (f.nbf && l < f.nbf) return a.default.error("nbf is in the future", f.nbf), Promise.reject(new Error("nbf is in the future: " + f.nbf));
                if (!f.exp) return a.default.error("exp was not provided"), Promise.reject(new Error("exp was not provided"));
                if (f.exp < d) return a.default.error("exp is in the past", f.exp), Promise.reject(new Error("exp is in the past:" + f.exp));
                try {
                    if (!s.jws.JWS.verify(e, n, u)) return a.default.error("signature validation failed"), Promise.reject(new Error("signature validation failed"))
                } catch (t) {
                    return a.default.error(t && t.message || t), Promise.reject(new Error("signature validation failed"))
                }
                return Promise.resolve()
            }, t.hashString = function(t, e) {
                a.default.debug("JoseUtil.hashString", t, e);
                try {
                    return s.crypto.Util.hashString(t, e)
                } catch (t) {
                    a.default.error(t)
                }
            }, t.hexToBase64Url = function(t) {
                a.default.debug("JoseUtil.hexToBase64Url", t);
                try {
                    return (0, s.hextob64u)(t)
                } catch (t) {
                    a.default.error(t)
                }
            }, t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    (function(t) {
        function r(t) {
            var e, n, r = "";
            for (e = 0; e + 3 <= t.length; e += 3) n = parseInt(t.substring(e, e + 3), 16), r += ur.charAt(n >> 6) + ur.charAt(63 & n);
            if (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), r += ur.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), r += ur.charAt(n >> 2) + ur.charAt((3 & n) << 4)), cr)
                for (;
                    (3 & r.length) > 0;) r += cr;
            return r
        }

        function i(t) {
            var e, n, r, i = "",
                s = 0;
            for (e = 0; e < t.length && t.charAt(e) != cr; ++e) r = ur.indexOf(t.charAt(e)), r < 0 || (0 == s ? (i += h(r >> 2), n = 3 & r, s = 1) : 1 == s ? (i += h(n << 2 | r >> 4), n = 15 & r, s = 2) : 2 == s ? (i += h(n), i += h(r >> 2), n = 3 & r, s = 3) : (i += h(n << 2 | r >> 4), i += h(15 & r), s = 0));
            return 1 == s && (i += h(n << 2)), i
        }

        function s(t) {
            var e, n = i(t),
                r = new Array;
            for (e = 0; 2 * e < n.length; ++e) r[e] = parseInt(n.substring(2 * e, 2 * e + 2), 16);
            return r
        }

        function o(t, e, n) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
        }

        function a() {
            return new o(null)
        }

        function u(t, e, n, r, i, s) {
            for (; --s >= 0;) {
                var o = e * this[t++] + n[r] + i;
                i = Math.floor(o / 67108864), n[r++] = 67108863 & o
            }
            return i
        }

        function c(t, e, n, r, i, s) {
            for (var o = 32767 & e, a = e >> 15; --s >= 0;) {
                var u = 32767 & this[t],
                    c = this[t++] >> 15,
                    f = a * u + c * o;
                u = o * u + ((32767 & f) << 15) + n[r] + (1073741823 & i), i = (u >>> 30) + (f >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & u
            }
            return i
        }

        function f(t, e, n, r, i, s) {
            for (var o = 16383 & e, a = e >> 14; --s >= 0;) {
                var u = 16383 & this[t],
                    c = this[t++] >> 14,
                    f = a * u + c * o;
                u = o * u + ((16383 & f) << 14) + n[r] + i, i = (u >> 28) + (f >> 14) + a * c, n[r++] = 268435455 & u
            }
            return i
        }

        function h(t) {
            return gr.charAt(t)
        }

        function l(t, e) {
            var n = yr[t.charCodeAt(e)];
            return null == n ? -1 : n
        }

        function d(t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s
        }

        function p(t) {
            this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
        }

        function g(t) {
            var e = a();
            return e.fromInt(t), e
        }

        function y(t, e) {
            var n;
            if (16 == e) n = 4;
            else if (8 == e) n = 3;
            else if (256 == e) n = 8;
            else if (2 == e) n = 1;
            else if (32 == e) n = 5;
            else {
                if (4 != e) return void this.fromRadix(t, e);
                n = 2
            }
            this.t = 0, this.s = 0;
            for (var r = t.length, i = !1, s = 0; --r >= 0;) {
                var a = 8 == n ? 255 & t[r] : l(t, r);
                a < 0 ? "-" == t.charAt(r) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, s += n, s >= this.DB && (s -= this.DB))
            }
            8 == n && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), i && o.ZERO.subTo(this, this)
        }

        function v() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
        }

        function m(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var e;
            if (16 == t) e = 4;
            else if (8 == t) e = 3;
            else if (2 == t) e = 1;
            else if (32 == t) e = 5;
            else {
                if (4 != t) return this.toRadix(t);
                e = 2
            }
            var n, r = (1 << e) - 1,
                i = !1,
                s = "",
                o = this.t,
                a = this.DB - o * this.DB % e;
            if (o-- > 0)
                for (a < this.DB && (n = this[o] >> a) > 0 && (i = !0, s = h(n)); o >= 0;) a < e ? (n = (this[o] & (1 << a) - 1) << e - a, n |= this[--o] >> (a += this.DB - e)) : (n = this[o] >> (a -= e) & r, a <= 0 && (a += this.DB, --o)), n > 0 && (i = !0), i && (s += h(n));
            return i ? s : "0"
        }

        function S() {
            var t = a();
            return o.ZERO.subTo(this, t), t
        }

        function b() {
            return this.s < 0 ? this.negate() : this
        }

        function w(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var n = this.t;
            if (e = n - t.t, 0 != e) return this.s < 0 ? -e : e;
            for (; --n >= 0;)
                if (0 != (e = this[n] - t[n])) return e;
            return 0
        }

        function _(t) {
            var e, n = 1;
            return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n
        }

        function x() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + _(this[this.t - 1] ^ this.s & this.DM)
        }

        function E(t, e) {
            var n;
            for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
            for (n = t - 1; n >= 0; --n) e[n] = 0;
            e.t = this.t + t, e.s = this.s
        }

        function A(t, e) {
            for (var n = t; n < this.t; ++n) e[n - t] = this[n];
            e.t = Math.max(this.t - t, 0), e.s = this.s
        }

        function F(t, e) {
            var n, r = t % this.DB,
                i = this.DB - r,
                s = (1 << i) - 1,
                o = Math.floor(t / this.DB),
                a = this.s << r & this.DM;
            for (n = this.t - 1; n >= 0; --n) e[n + o + 1] = this[n] >> i | a, a = (this[n] & s) << r;
            for (n = o - 1; n >= 0; --n) e[n] = 0;
            e[o] = a, e.t = this.t + o + 1, e.s = this.s, e.clamp()
        }

        function P(t, e) {
            e.s = this.s;
            var n = Math.floor(t / this.DB);
            if (n >= this.t) return void(e.t = 0);
            var r = t % this.DB,
                i = this.DB - r,
                s = (1 << r) - 1;
            e[0] = this[n] >> r;
            for (var o = n + 1; o < this.t; ++o) e[o - n - 1] |= (this[o] & s) << i, e[o - n] = this[o] >> r;
            r > 0 && (e[this.t - n - 1] |= (this.s & s) << i), e.t = this.t - n, e.clamp()
        }

        function O(t, e) {
            for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] - t[n], e[n++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r -= t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; n < t.t;) r -= t[n], e[n++] = r & this.DM, r >>= this.DB;
                r -= t.s
            }
            e.s = r < 0 ? -1 : 0, r < -1 ? e[n++] = this.DV + r : r > 0 && (e[n++] = r), e.t = n, e.clamp()
        }

        function C(t, e) {
            var n = this.abs(),
                r = t.abs(),
                i = n.t;
            for (e.t = i + r.t; --i >= 0;) e[i] = 0;
            for (i = 0; i < r.t; ++i) e[i + n.t] = n.am(0, r[i], e, i, 0, n.t);
            e.s = 0, e.clamp(), this.s != t.s && o.ZERO.subTo(e, e)
        }

        function T(t) {
            for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0;
            for (n = 0; n < e.t - 1; ++n) {
                var r = e.am(n, e[n], t, 2 * n, 0, 1);
                (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp()
        }

        function j(t, e, n) {
            var r = t.abs();
            if (!(r.t <= 0)) {
                var i = this.abs();
                if (i.t < r.t) return null != e && e.fromInt(0), void(null != n && this.copyTo(n));
                null == n && (n = a());
                var s = a(),
                    u = this.s,
                    c = t.s,
                    f = this.DB - _(r[r.t - 1]);
                f > 0 ? (r.lShiftTo(f, s), i.lShiftTo(f, n)) : (r.copyTo(s), i.copyTo(n));
                var h = s.t,
                    l = s[h - 1];
                if (0 != l) {
                    var d = l * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0),
                        p = this.FV / d,
                        g = (1 << this.F1) / d,
                        y = 1 << this.F2,
                        v = n.t,
                        m = v - h,
                        S = null == e ? a() : e;
                    for (s.dlShiftTo(m, S), n.compareTo(S) >= 0 && (n[n.t++] = 1, n.subTo(S, n)), o.ONE.dlShiftTo(h, S), S.subTo(s, s); s.t < h;) s[s.t++] = 0;
                    for (; --m >= 0;) {
                        var b = n[--v] == l ? this.DM : Math.floor(n[v] * p + (n[v - 1] + y) * g);
                        if ((n[v] += s.am(0, b, n, m, 0, h)) < b)
                            for (s.dlShiftTo(m, S), n.subTo(S, n); n[v] < --b;) n.subTo(S, n)
                    }
                    null != e && (n.drShiftTo(h, e), u != c && o.ZERO.subTo(e, e)), n.t = h, n.clamp(), f > 0 && n.rShiftTo(f, n), u < 0 && o.ZERO.subTo(n, n)
                }
            }
        }

        function I(t) {
            var e = a();
            return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(o.ZERO) > 0 && t.subTo(e, e), e
        }

        function R(t) {
            this.m = t
        }

        function D(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
        }

        function H(t) {
            return t
        }

        function k(t) {
            t.divRemTo(this.m, null, t)
        }

        function N(t, e, n) {
            t.multiplyTo(e, n), this.reduce(n)
        }

        function B(t, e) {
            t.squareTo(e), this.reduce(e)
        }

        function M() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e
        }

        function V(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
        }

        function L(t) {
            var e = a();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(o.ZERO) > 0 && this.m.subTo(e, e), e
        }

        function K(t) {
            var e = a();
            return t.copyTo(e), this.reduce(e), e
        }

        function U(t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var n = 32767 & t[e],
                    r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (n = e + this.m.t, t[n] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++
            }
            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }

        function q(t, e) {
            t.squareTo(e), this.reduce(e)
        }

        function W(t, e, n) {
            t.multiplyTo(e, n), this.reduce(n)
        }

        function z() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }

        function J(t, e) {
            if (t > 4294967295 || t < 1) return o.ONE;
            var n = a(),
                r = a(),
                i = e.convert(this),
                s = _(t) - 1;
            for (i.copyTo(n); --s >= 0;)
                if (e.sqrTo(n, r), (t & 1 << s) > 0) e.mulTo(r, i, n);
                else {
                    var u = n;
                    n = r, r = u
                } return e.revert(n)
        }

        function Y(t, e) {
            var n;
            return n = t < 256 || e.isEven() ? new R(e) : new V(e), this.exp(t, n)
        }
        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
         */
        function G() {
            var t = a();
            return this.copyTo(t), t
        }

        function X() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }

        function $() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }

        function Q() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }

        function Z(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t))
        }

        function tt() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }

        function et(t) {
            if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
            var e = this.chunkSize(t),
                n = Math.pow(t, e),
                r = g(n),
                i = a(),
                s = a(),
                o = "";
            for (this.divRemTo(r, i, s); i.signum() > 0;) o = (n + s.intValue()).toString(t).substr(1) + o, i.divRemTo(r, i, s);
            return s.intValue().toString(t) + o
        }

        function nt(t, e) {
            this.fromInt(0), null == e && (e = 10);
            for (var n = this.chunkSize(e), r = Math.pow(e, n), i = !1, s = 0, a = 0, u = 0; u < t.length; ++u) {
                var c = l(t, u);
                c < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (i = !0) : (a = e * a + c, ++s >= n && (this.dMultiply(r), this.dAddOffset(a, 0), s = 0, a = 0))
            }
            s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)), i && o.ZERO.subTo(this, this)
        }

        function rt(t, e, n) {
            if ("number" == typeof e)
                if (t < 2) this.fromInt(1);
                else
                    for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(o.ONE.shiftLeft(t - 1), ht, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(o.ONE.shiftLeft(t - 1), this);
            else {
                var r = new Array,
                    i = 7 & t;
                r.length = (t >> 3) + 1, e.nextBytes(r), i > 0 ? r[0] &= (1 << i) - 1 : r[0] = 0, this.fromString(r, 256)
            }
        }

        function it() {
            var t = this.t,
                e = new Array;
            e[0] = this.s;
            var n, r = this.DB - t * this.DB % 8,
                i = 0;
            if (t-- > 0)
                for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); t >= 0;) r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r, n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (i > 0 || n != this.s) && (e[i++] = n);
            return e
        }

        function st(t) {
            return 0 == this.compareTo(t)
        }

        function ot(t) {
            return this.compareTo(t) < 0 ? this : t
        }

        function at(t) {
            return this.compareTo(t) > 0 ? this : t
        }

        function ut(t, e, n) {
            var r, i, s = Math.min(t.t, this.t);
            for (r = 0; r < s; ++r) n[r] = e(this[r], t[r]);
            if (t.t < this.t) {
                for (i = t.s & this.DM, r = s; r < this.t; ++r) n[r] = e(this[r], i);
                n.t = this.t
            } else {
                for (i = this.s & this.DM, r = s; r < t.t; ++r) n[r] = e(i, t[r]);
                n.t = t.t
            }
            n.s = e(this.s, t.s), n.clamp()
        }

        function ct(t, e) {
            return t & e
        }

        function ft(t) {
            var e = a();
            return this.bitwiseTo(t, ct, e), e
        }

        function ht(t, e) {
            return t | e
        }

        function lt(t) {
            var e = a();
            return this.bitwiseTo(t, ht, e), e
        }

        function dt(t, e) {
            return t ^ e
        }

        function pt(t) {
            var e = a();
            return this.bitwiseTo(t, dt, e), e
        }

        function gt(t, e) {
            return t & ~e
        }

        function yt(t) {
            var e = a();
            return this.bitwiseTo(t, gt, e), e
        }

        function vt() {
            for (var t = a(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
            return t.t = this.t, t.s = ~this.s, t
        }

        function mt(t) {
            var e = a();
            return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
        }

        function St(t) {
            var e = a();
            return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
        }

        function bt(t) {
            if (0 == t) return -1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
        }

        function wt() {
            for (var t = 0; t < this.t; ++t)
                if (0 != this[t]) return t * this.DB + bt(this[t]);
            return this.s < 0 ? this.t * this.DB : -1
        }

        function _t(t) {
            for (var e = 0; 0 != t;) t &= t - 1, ++e;
            return e
        }

        function xt() {
            for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n) t += _t(this[n] ^ e);
            return t
        }

        function Et(t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
        }

        function At(t, e) {
            var n = o.ONE.shiftLeft(t);
            return this.bitwiseTo(n, e, n), n
        }

        function Ft(t) {
            return this.changeBit(t, ht)
        }

        function Pt(t) {
            return this.changeBit(t, gt)
        }

        function Ot(t) {
            return this.changeBit(t, dt)
        }

        function Ct(t, e) {
            for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] + t[n], e[n++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r += t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; n < t.t;) r += t[n], e[n++] = r & this.DM, r >>= this.DB;
                r += t.s
            }
            e.s = r < 0 ? -1 : 0, r > 0 ? e[n++] = r : r < -1 && (e[n++] = this.DV + r), e.t = n, e.clamp()
        }

        function Tt(t) {
            var e = a();
            return this.addTo(t, e), e
        }

        function jt(t) {
            var e = a();
            return this.subTo(t, e), e
        }

        function It(t) {
            var e = a();
            return this.multiplyTo(t, e), e
        }

        function Rt() {
            var t = a();
            return this.squareTo(t), t
        }

        function Dt(t) {
            var e = a();
            return this.divRemTo(t, e, null), e
        }

        function Ht(t) {
            var e = a();
            return this.divRemTo(t, null, e), e
        }

        function kt(t) {
            var e = a(),
                n = a();
            return this.divRemTo(t, e, n), new Array(e, n)
        }

        function Nt(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
        }

        function Bt(t, e) {
            if (0 != t) {
                for (; this.t <= e;) this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
            }
        }

        function Mt() {}

        function Vt(t) {
            return t
        }

        function Lt(t, e, n) {
            t.multiplyTo(e, n)
        }

        function Kt(t, e) {
            t.squareTo(e)
        }

        function Ut(t) {
            return this.exp(t, new Mt)
        }

        function qt(t, e, n) {
            var r = Math.min(this.t + t.t, e);
            for (n.s = 0, n.t = r; r > 0;) n[--r] = 0;
            var i;
            for (i = n.t - this.t; r < i; ++r) n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
            for (i = Math.min(t.t, e); r < i; ++r) this.am(0, t[r], n, r, 0, e - r);
            n.clamp()
        }

        function Wt(t, e, n) {
            --e;
            var r = n.t = this.t + t.t - e;
            for (n.s = 0; --r >= 0;) n[r] = 0;
            for (r = Math.max(e - this.t, 0); r < t.t; ++r) n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
            n.clamp(), n.drShiftTo(1, n)
        }

        function zt(t) {
            this.r2 = a(), this.q3 = a(), o.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
        }

        function Jt(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var e = a();
            return t.copyTo(e), this.reduce(e), e
        }

        function Yt(t) {
            return t
        }

        function Gt(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
        }

        function Xt(t, e) {
            t.squareTo(e), this.reduce(e)
        }

        function $t(t, e, n) {
            t.multiplyTo(e, n), this.reduce(n)
        }

        function Qt(t, e) {
            var n, r, i = t.bitLength(),
                s = g(1);
            if (i <= 0) return s;
            n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, r = i < 8 ? new R(e) : e.isEven() ? new zt(e) : new V(e);
            var o = new Array,
                u = 3,
                c = n - 1,
                f = (1 << n) - 1;
            if (o[1] = r.convert(this), n > 1) {
                var h = a();
                for (r.sqrTo(o[1], h); u <= f;) o[u] = a(), r.mulTo(h, o[u - 2], o[u]), u += 2
            }
            var l, d, p = t.t - 1,
                y = !0,
                v = a();
            for (i = _(t[p]) - 1; p >= 0;) {
                for (i >= c ? l = t[p] >> i - c & f : (l = (t[p] & (1 << i + 1) - 1) << c - i, p > 0 && (l |= t[p - 1] >> this.DB + i - c)), u = n; 0 == (1 & l);) l >>= 1, --u;
                if ((i -= u) < 0 && (i += this.DB, --p), y) o[l].copyTo(s), y = !1;
                else {
                    for (; u > 1;) r.sqrTo(s, v), r.sqrTo(v, s), u -= 2;
                    u > 0 ? r.sqrTo(s, v) : (d = s, s = v, v = d), r.mulTo(v, o[l], s)
                }
                for (; p >= 0 && 0 == (t[p] & 1 << i);) r.sqrTo(s, v), d = s, s = v, v = d, --i < 0 && (i = this.DB - 1, --p)
            }
            return r.revert(s)
        }

        function Zt(t) {
            var e = this.s < 0 ? this.negate() : this.clone(),
                n = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(n) < 0) {
                var r = e;
                e = n, n = r
            }
            var i = e.getLowestSetBit(),
                s = n.getLowestSetBit();
            if (s < 0) return e;
            for (i < s && (s = i), s > 0 && (e.rShiftTo(s, e), n.rShiftTo(s, n)); e.signum() > 0;)(i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), e.compareTo(n) >= 0 ? (e.subTo(n, e), e.rShiftTo(1, e)) : (n.subTo(e, n), n.rShiftTo(1, n));
            return s > 0 && n.lShiftTo(s, n), n
        }

        function te(t) {
            if (t <= 0) return 0;
            var e = this.DV % t,
                n = this.s < 0 ? t - 1 : 0;
            if (this.t > 0)
                if (0 == e) n = this[0] % t;
                else
                    for (var r = this.t - 1; r >= 0; --r) n = (e * n + this[r]) % t;
            return n
        }

        function ee(t) {
            var e = t.isEven();
            if (this.isEven() && e || 0 == t.signum()) return o.ZERO;
            for (var n = t.clone(), r = this.clone(), i = g(1), s = g(0), a = g(0), u = g(1); 0 != n.signum();) {
                for (; n.isEven();) n.rShiftTo(1, n), e ? (i.isEven() && s.isEven() || (i.addTo(this, i), s.subTo(t, s)), i.rShiftTo(1, i)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                for (; r.isEven();) r.rShiftTo(1, r), e ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(t, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
                n.compareTo(r) >= 0 ? (n.subTo(r, n), e && i.subTo(a, i), s.subTo(u, s)) : (r.subTo(n, r), e && a.subTo(i, a), u.subTo(s, u))
            }
            return 0 != r.compareTo(o.ONE) ? o.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
        }

        function ne(t) {
            var e, n = this.abs();
            if (1 == n.t && n[0] <= vr[vr.length - 1]) {
                for (e = 0; e < vr.length; ++e)
                    if (n[0] == vr[e]) return !0;
                return !1
            }
            if (n.isEven()) return !1;
            for (e = 1; e < vr.length;) {
                for (var r = vr[e], i = e + 1; i < vr.length && r < mr;) r *= vr[i++];
                for (r = n.modInt(r); e < i;)
                    if (r % vr[e++] == 0) return !1
            }
            return n.millerRabin(t)
        }

        function re(t) {
            var e = this.subtract(o.ONE),
                n = e.getLowestSetBit();
            if (n <= 0) return !1;
            var r = e.shiftRight(n);
            t = t + 1 >> 1, t > vr.length && (t = vr.length);
            for (var i = a(), s = 0; s < t; ++s) {
                i.fromInt(vr[Math.floor(Math.random() * vr.length)]);
                var u = i.modPow(r, this);
                if (0 != u.compareTo(o.ONE) && 0 != u.compareTo(e)) {
                    for (var c = 1; c++ < n && 0 != u.compareTo(e);)
                        if (u = u.modPowInt(2, this), 0 == u.compareTo(o.ONE)) return !1;
                    if (0 != u.compareTo(e)) return !1
                }
            }
            return !0
        }
        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
         */
        function ie() {
            this.i = 0, this.j = 0, this.S = new Array
        }

        function se(t) {
            var e, n, r;
            for (e = 0; e < 256; ++e) this.S[e] = e;
            for (n = 0, e = 0; e < 256; ++e) n = n + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[n], this.S[n] = r;
            this.i = 0, this.j = 0
        }

        function oe() {
            var t;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
        }

        function ae() {
            return new ie
        }

        function ue(t) {
            br[wr++] ^= 255 & t, br[wr++] ^= t >> 8 & 255, br[wr++] ^= t >> 16 & 255, br[wr++] ^= t >> 24 & 255, wr >= _r && (wr -= _r)
        }

        function ce() {
            ue((new Date).getTime())
        }

        function fe() {
            if (null == Sr) {
                for (ce(), Sr = ae(), Sr.init(br), wr = 0; wr < br.length; ++wr) br[wr] = 0;
                wr = 0
            }
            return Sr.next()
        }

        function he(t) {
            var e;
            for (e = 0; e < t.length; ++e) t[e] = fe()
        }

        function le() {}
        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
         */
        function de(t, e) {
            return new o(t, e)
        }

        function pe(t, e) {
            if (e < t.length + 11) return alert("Message too long for RSA"), null;
            for (var n = new Array, r = t.length - 1; r >= 0 && e > 0;) {
                var i = t.charCodeAt(r--);
                i < 128 ? n[--e] = i : i > 127 && i < 2048 ? (n[--e] = 63 & i | 128, n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128, n[--e] = i >> 6 & 63 | 128, n[--e] = i >> 12 | 224)
            }
            n[--e] = 0;
            for (var s = new le, a = new Array; e > 2;) {
                for (a[0] = 0; 0 == a[0];) s.nextBytes(a);
                n[--e] = a[0]
            }
            return n[--e] = 2, n[--e] = 0, new o(n)
        }

        function ge(t, e, n) {
            for (var r = "", i = 0; r.length < e;) r += n(String.fromCharCode.apply(String, t.concat([(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i]))), i += 1;
            return r
        }

        function ye(t, e, n) {
            if (t.length + 2 * Fr + 2 > e) throw "Message too long for RSA";
            var r, i = "";
            for (r = 0; r < e - t.length - 2 * Fr - 2; r += 1) i += "\0";
            var s = rstr_sha1("") + i + "" + t,
                a = new Array(Fr);
            (new le).nextBytes(a);
            var u = ge(a, s.length, n || rstr_sha1),
                c = [];
            for (r = 0; r < s.length; r += 1) c[r] = s.charCodeAt(r) ^ u.charCodeAt(r);
            var f = ge(c, a.length, rstr_sha1),
                h = [0];
            for (r = 0; r < a.length; r += 1) h[r + 1] = a[r] ^ f.charCodeAt(r);
            return new o(h.concat(c))
        }

        function ve() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
        }

        function me(t, e) {
            this.isPublic = !0, "string" != typeof t ? (this.n = t, this.e = e) : null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = de(t, 16), this.e = parseInt(e, 16)) : alert("Invalid RSA public key")
        }

        function Se(t) {
            return t.modPowInt(this.e, this.n)
        }

        function be(t) {
            var e = pe(t, this.n.bitLength() + 7 >> 3);
            if (null == e) return null;
            var n = this.doPublic(e);
            if (null == n) return null;
            var r = n.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r
        }

        function we(t, e) {
            var n = ye(t, this.n.bitLength() + 7 >> 3, e);
            if (null == n) return null;
            var r = this.doPublic(n);
            if (null == r) return null;
            var i = r.toString(16);
            return 0 == (1 & i.length) ? i : "0" + i
        }
        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
         */
        function _e(t, e) {
            for (var n = t.toByteArray(), r = 0; r < n.length && 0 == n[r];) ++r;
            if (n.length - r != e - 1 || 2 != n[r]) return null;
            for (++r; 0 != n[r];)
                if (++r >= n.length) return null;
            for (var i = ""; ++r < n.length;) {
                var s = 255 & n[r];
                s < 128 ? i += String.fromCharCode(s) : s > 191 && s < 224 ? (i += String.fromCharCode((31 & s) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & s) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2)
            }
            return i
        }

        function xe(t, e, n) {
            for (var r = "", i = 0; r.length < e;) r += n(t + String.fromCharCode.apply(String, [(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i])), i += 1;
            return r
        }

        function Ee(t, e, n) {
            t = t.toByteArray();
            var r;
            for (r = 0; r < t.length; r += 1) t[r] &= 255;
            for (; t.length < e;) t.unshift(0);
            if (t = String.fromCharCode.apply(String, t), t.length < 2 * Fr + 2) throw "Cipher too short";
            var r, i = t.substr(1, Fr),
                s = t.substr(Fr + 1),
                o = xe(s, Fr, n || rstr_sha1),
                a = [];
            for (r = 0; r < i.length; r += 1) a[r] = i.charCodeAt(r) ^ o.charCodeAt(r);
            var u = xe(String.fromCharCode.apply(String, a), t.length - Fr, rstr_sha1),
                c = [];
            for (r = 0; r < s.length; r += 1) c[r] = s.charCodeAt(r) ^ u.charCodeAt(r);
            if (c = String.fromCharCode.apply(String, c), c.substr(0, Fr) !== rstr_sha1("")) throw "Hash mismatch";
            c = c.substr(Fr);
            var f = c.indexOf(""),
                h = f != -1 ? c.substr(0, f).lastIndexOf("\0") : -1;
            if (h + 1 != f) throw "Malformed data";
            return c.substr(f + 1)
        }

        function Ae(t, e, n) {
            this.isPrivate = !0, "string" != typeof t ? (this.n = t, this.e = e, this.d = n) : null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = de(t, 16), this.e = parseInt(e, 16), this.d = de(n, 16)) : alert("Invalid RSA private key")
        }

        function Fe(t, e, n, r, i, s, o, a) {
            if (this.isPrivate = !0, null == t) throw "RSASetPrivateEx N == null";
            if (null == e) throw "RSASetPrivateEx E == null";
            if (0 == t.length) throw "RSASetPrivateEx N.length == 0";
            if (0 == e.length) throw "RSASetPrivateEx E.length == 0";
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = de(t, 16), this.e = parseInt(e, 16), this.d = de(n, 16), this.p = de(r, 16), this.q = de(i, 16), this.dmp1 = de(s, 16), this.dmq1 = de(o, 16), this.coeff = de(a, 16)) : alert("Invalid RSA private key in RSASetPrivateEx")
        }

        function Pe(t, e) {
            var n = new le,
                r = t >> 1;
            this.e = parseInt(e, 16);
            for (var i = new o(e, 16);;) {
                for (; this.p = new o(t - r, 1, n), 0 != this.p.subtract(o.ONE).gcd(i).compareTo(o.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new o(r, 1, n), 0 != this.q.subtract(o.ONE).gcd(i).compareTo(o.ONE) || !this.q.isProbablePrime(10););
                if (this.p.compareTo(this.q) <= 0) {
                    var s = this.p;
                    this.p = this.q, this.q = s
                }
                var a = this.p.subtract(o.ONE),
                    u = this.q.subtract(o.ONE),
                    c = a.multiply(u);
                if (0 == c.gcd(i).compareTo(o.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = i.modInverse(c), this.dmp1 = this.d.mod(a), this.dmq1 = this.d.mod(u), this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }

        function Oe(t) {
            if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;) e = e.add(this.p);
            return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
        }

        function Ce(t) {
            var e = de(t, 16),
                n = this.doPrivate(e);
            return null == n ? null : _e(n, this.n.bitLength() + 7 >> 3)
        }

        function Te(t, e) {
            var n = de(t, 16),
                r = this.doPrivate(n);
            return null == r ? null : Ee(r, this.n.bitLength() + 7 >> 3, e)
        }
        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
         */
        function je(t, e) {
            this.x = e, this.q = t
        }

        function Ie(t) {
            return t == this || this.q.equals(t.q) && this.x.equals(t.x)
        }

        function Re() {
            return this.x
        }

        function De() {
            return new je(this.q, this.x.negate().mod(this.q))
        }

        function He(t) {
            return new je(this.q, this.x.add(t.toBigInteger()).mod(this.q))
        }

        function ke(t) {
            return new je(this.q, this.x.subtract(t.toBigInteger()).mod(this.q))
        }

        function Ne(t) {
            return new je(this.q, this.x.multiply(t.toBigInteger()).mod(this.q))
        }

        function Be() {
            return new je(this.q, this.x.square().mod(this.q))
        }

        function Me(t) {
            return new je(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
        }

        function Ve(t, e, n, r) {
            this.curve = t, this.x = e, this.y = n, null == r ? this.z = o.ONE : this.z = r, this.zinv = null
        }

        function Le() {
            return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
        }

        function Ke() {
            return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
        }

        function Ue(t) {
            if (t == this) return !0;
            if (this.isInfinity()) return t.isInfinity();
            if (t.isInfinity()) return this.isInfinity();
            var e, n;
            return e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q), !!e.equals(o.ZERO) && (n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q), n.equals(o.ZERO))
        }

        function qe() {
            return null == this.x && null == this.y || this.z.equals(o.ZERO) && !this.y.toBigInteger().equals(o.ZERO)
        }

        function We() {
            return new Ve(this.curve, this.x, this.y.negate(), this.z)
        }

        function ze(t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),
                n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
            if (o.ZERO.equals(n)) return o.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
            var r = new o("3"),
                i = this.x.toBigInteger(),
                s = this.y.toBigInteger(),
                a = (t.x.toBigInteger(), t.y.toBigInteger(), n.square()),
                u = a.multiply(n),
                c = i.multiply(a),
                f = e.square().multiply(this.z),
                h = f.subtract(c.shiftLeft(1)).multiply(t.z).subtract(u).multiply(n).mod(this.curve.q),
                l = c.multiply(r).multiply(e).subtract(s.multiply(u)).subtract(f.multiply(e)).multiply(t.z).add(e.multiply(u)).mod(this.curve.q),
                d = u.multiply(this.z).multiply(t.z).mod(this.curve.q);
            return new Ve(this.curve, this.curve.fromBigInteger(h), this.curve.fromBigInteger(l), d)
        }

        function Je() {
            if (this.isInfinity()) return this;
            if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
            var t = new o("3"),
                e = this.x.toBigInteger(),
                n = this.y.toBigInteger(),
                r = n.multiply(this.z),
                i = r.multiply(n).mod(this.curve.q),
                s = this.curve.a.toBigInteger(),
                a = e.square().multiply(t);
            o.ZERO.equals(s) || (a = a.add(this.z.square().multiply(s))), a = a.mod(this.curve.q);
            var u = a.square().subtract(e.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(r).mod(this.curve.q),
                c = a.multiply(t).multiply(e).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(a.square().multiply(a)).mod(this.curve.q),
                f = r.square().multiply(r).shiftLeft(3).mod(this.curve.q);
            return new Ve(this.curve, this.curve.fromBigInteger(u), this.curve.fromBigInteger(c), f)
        }

        function Ye(t) {
            if (this.isInfinity()) return this;
            if (0 == t.signum()) return this.curve.getInfinity();
            var e, n = t,
                r = n.multiply(new o("3")),
                i = this.negate(),
                s = this;
            for (e = r.bitLength() - 2; e > 0; --e) {
                s = s.twice();
                var a = r.testBit(e),
                    u = n.testBit(e);
                a != u && (s = s.add(a ? this : i))
            }
            return s
        }

        function Ge(t, e, n) {
            var r;
            r = t.bitLength() > n.bitLength() ? t.bitLength() - 1 : n.bitLength() - 1;
            for (var i = this.curve.getInfinity(), s = this.add(e); r >= 0;) i = i.twice(), t.testBit(r) ? i = n.testBit(r) ? i.add(s) : i.add(this) : n.testBit(r) && (i = i.add(e)), --r;
            return i
        }

        function Xe(t, e, n) {
            this.q = t, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(n), this.infinity = new Ve(this, null, null)
        }

        function $e() {
            return this.q
        }

        function Qe() {
            return this.a
        }

        function Ze() {
            return this.b
        }

        function tn(t) {
            return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
        }

        function en() {
            return this.infinity
        }

        function nn(t) {
            return new je(this.q, t)
        }

        function rn(t) {
            switch (parseInt(t.substr(0, 2), 16)) {
                case 0:
                    return this.infinity;
                case 2:
                case 3:
                    return null;
                case 4:
                case 6:
                case 7:
                    var e = (t.length - 2) / 2,
                        n = t.substr(2, e),
                        r = t.substr(e + 2, e);
                    return new Ve(this, this.fromBigInteger(new o(n, 16)), this.fromBigInteger(new o(r, 16)));
                default:
                    return null
            }
        }

        function sn(t) {
            for (var e = new Array, n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e
        }

        function on(t) {
            for (var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
            return e
        }

        function an(t) {
            for (var e = "", n = 0; n < t.length; n++) {
                var r = t[n].toString(16);
                1 == r.length && (r = "0" + r), e += r
            }
            return e
        }

        function un(t) {
            return an(sn(t))
        }

        function cn(t) {
            return r(un(t))
        }

        function fn(t) {
            return ln(r(un(t)))
        }

        function hn(t) {
            return on(s(dn(t)))
        }

        function ln(t) {
            return t = t.replace(/\=/g, ""), t = t.replace(/\+/g, "-"), t = t.replace(/\//g, "_")
        }

        function dn(t) {
            return t.length % 4 == 2 ? t += "==" : t.length % 4 == 3 && (t += "="), t = t.replace(/-/g, "+"), t = t.replace(/_/g, "/")
        }

        function pn(t) {
            return t.length % 2 == 1 && (t = "0" + t), ln(r(t))
        }

        function gn(t) {
            return i(dn(t))
        }

        function yn(t) {
            return r(xn(An(t)))
        }

        function vn(t) {
            return decodeURIComponent(En(i(t)))
        }

        function mn(t) {
            return xn(An(t))
        }

        function Sn(t) {
            return decodeURIComponent(En(t))
        }

        function bn(t) {
            for (var e = "", n = 0; n < t.length - 1; n += 2) e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
            return e
        }

        function wn(t) {
            for (var e = "", n = 0; n < t.length; n++) e += ("0" + t.charCodeAt(n).toString(16)).slice(-2);
            return e
        }

        function _n(t) {
            return r(t)
        }

        function xn(t) {
            return t.replace(/%/g, "")
        }

        function En(t) {
            return t.replace(/(..)/g, "%$1")
        }

        function An(t) {
            for (var e = encodeURIComponent(t), n = "", r = 0; r < e.length; r++) "%" == e[r] ? (n += e.substr(r, 3), r += 2) : n = n + "%" + un(e[r]);
            return n
        }

        function Fn(t) {
            return t = t.replace(/\r\n/gm, "\n")
        }

        function Pn(t) {
            return t = t.replace(/\r\n/gm, "\n"), t = t.replace(/\n/gm, "\r\n")
        }

        function On(t) {
            t = t.replace(/^\s*\[\s*/, ""), t = t.replace(/\s*\]\s*$/, ""), t = t.replace(/\s*/g, "");
            try {
                var e = t.split(/,/).map(function(t, e, n) {
                    var r = parseInt(t);
                    if (r < 0 || 255 < r) throw "integer not in range 0-255";
                    var i = ("00" + r.toString(16)).slice(-2);
                    return i
                }).join("");
                return e
            } catch (t) {
                throw "malformed integer array string: " + t
            }
        }
        /*! rsapem-1.1.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        function Cn(t) {
            var e = t;
            return e = e.replace("-----BEGIN RSA PRIVATE KEY-----", ""), e = e.replace("-----END RSA PRIVATE KEY-----", ""), e = e.replace(/[ \n]+/g, "")
        }

        function Tn(t) {
            var e = new Array,
                n = Or.getStartPosOfV_AtObj(t, 0),
                r = Or.getPosOfNextSibling_AtObj(t, n),
                i = Or.getPosOfNextSibling_AtObj(t, r),
                s = Or.getPosOfNextSibling_AtObj(t, i),
                o = Or.getPosOfNextSibling_AtObj(t, s),
                a = Or.getPosOfNextSibling_AtObj(t, o),
                u = Or.getPosOfNextSibling_AtObj(t, a),
                c = Or.getPosOfNextSibling_AtObj(t, u),
                f = Or.getPosOfNextSibling_AtObj(t, c);
            return e.push(n, r, i, s, o, a, u, c, f), e
        }

        function jn(t) {
            var e = Tn(t),
                n = Or.getHexOfV_AtObj(t, e[0]),
                r = Or.getHexOfV_AtObj(t, e[1]),
                i = Or.getHexOfV_AtObj(t, e[2]),
                s = Or.getHexOfV_AtObj(t, e[3]),
                o = Or.getHexOfV_AtObj(t, e[4]),
                a = Or.getHexOfV_AtObj(t, e[5]),
                u = Or.getHexOfV_AtObj(t, e[6]),
                c = Or.getHexOfV_AtObj(t, e[7]),
                f = Or.getHexOfV_AtObj(t, e[8]),
                h = new Array;
            return h.push(n, r, i, s, o, a, u, c, f), h
        }

        function In(t) {
            var e = jn(t);
            this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8])
        }

        function Rn(t) {
            var e = Cn(t),
                n = i(e),
                r = jn(n);
            this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8])
        }

        function Dn(t, e) {
            for (var n = "", r = e / 4 - t.length, i = 0; i < r; i++) n += "0";
            return n + t
        }

        function Hn(t, e) {
            var n = function(t) {
                    return Cr.crypto.Util.hashString(t, e)
                },
                r = n(t);
            return this.signWithMessageHash(r, e)
        }

        function kn(t, e) {
            var n = Cr.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()),
                r = de(n, 16),
                i = this.doPrivate(r),
                s = i.toString(16);
            return Dn(s, this.n.bitLength())
        }

        function Nn(t) {
            return Hn.call(this, t, "sha1")
        }

        function Bn(t) {
            return Hn.call(this, t, "sha256")
        }

        function Mn(t, e, n) {
            for (var r = "", i = 0; r.length < e;) r += bn(n(wn(t + String.fromCharCode.apply(String, [(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i])))), i += 1;
            return r
        }

        function Vn(t, e, n) {
            var r = function(t) {
                    return Cr.crypto.Util.hashHex(t, e)
                },
                i = r(wn(t));
            return void 0 === n && (n = -1), this.signWithMessageHashPSS(i, e, n)
        }

        function Ln(t, e, n) {
            var r, i = bn(t),
                s = i.length,
                a = this.n.bitLength() - 1,
                u = Math.ceil(a / 8),
                c = function(t) {
                    return Cr.crypto.Util.hashHex(t, e)
                };
            if (n === -1 || void 0 === n) n = s;
            else if (n === -2) n = u - s - 2;
            else if (n < -2) throw "invalid salt length";
            if (u < s + n + 2) throw "data too long";
            var f = "";
            n > 0 && (f = new Array(n), (new le).nextBytes(f), f = String.fromCharCode.apply(String, f));
            var h = bn(c(wn("\0\0\0\0\0\0\0\0" + i + f))),
                l = [];
            for (r = 0; r < u - n - s - 2; r += 1) l[r] = 0;
            var d = String.fromCharCode.apply(String, l) + "" + f,
                p = Mn(h, d.length, c),
                g = [];
            for (r = 0; r < d.length; r += 1) g[r] = d.charCodeAt(r) ^ p.charCodeAt(r);
            var y = 65280 >> 8 * u - a & 255;
            for (g[0] &= ~y, r = 0; r < s; r++) g.push(h.charCodeAt(r));
            return g.push(188), Dn(this.doPrivate(new o(g)).toString(16), this.n.bitLength())
        }

        function Kn(t, e, n) {
            var r = new ve;
            r.setPublic(e, n);
            var i = r.doPublic(t);
            return i
        }

        function Un(t, e, n) {
            var r = Kn(t, e, n),
                i = r.toString(16).replace(/^1f+00/, "");
            return i
        }

        function qn(t) {
            for (var e in Cr.crypto.Util.DIGESTINFOHEAD) {
                var n = Cr.crypto.Util.DIGESTINFOHEAD[e],
                    r = n.length;
                if (t.substring(0, r) == n) {
                    var i = [e, t.substring(r)];
                    return i
                }
            }
            return []
        }

        function Wn(t, e, n, r) {
            var i = Un(e, n, r),
                s = qn(i);
            if (0 == s.length) return !1;
            var o = s[0],
                a = s[1],
                u = function(t) {
                    return Cr.crypto.Util.hashString(t, o)
                },
                c = u(t);
            return a == c
        }

        function zn(t, e) {
            var n = de(t, 16),
                r = Wn(e, n, this.n.toString(16), this.e.toString(16));
            return r
        }

        function Jn(t, e) {
            e = e.replace(Hr, ""), e = e.replace(/[ \n]+/g, "");
            var n = de(e, 16);
            if (n.bitLength() > this.n.bitLength()) return 0;
            var r = this.doPublic(n),
                i = r.toString(16).replace(/^1f+00/, ""),
                s = qn(i);
            if (0 == s.length) return !1;
            var o = s[0],
                a = s[1],
                u = function(t) {
                    return Cr.crypto.Util.hashString(t, o)
                },
                c = u(t);
            return a == c
        }

        function Yn(t, e) {
            e = e.replace(Hr, ""), e = e.replace(/[ \n]+/g, "");
            var n = de(e, 16);
            if (n.bitLength() > this.n.bitLength()) return 0;
            var r = this.doPublic(n),
                i = r.toString(16).replace(/^1f+00/, ""),
                s = qn(i);
            if (0 == s.length) return !1;
            var o = (s[0], s[1]);
            return o == t
        }

        function Gn(t, e, n, r) {
            var i = function(t) {
                    return Cr.crypto.Util.hashHex(t, n)
                },
                s = i(wn(t));
            return void 0 === r && (r = -1), this.verifyWithMessageHashPSS(s, e, n, r)
        }

        function Xn(t, e, n, r) {
            var i = new o(e, 16);
            if (i.bitLength() > this.n.bitLength()) return !1;
            var s, a = function(t) {
                    return Cr.crypto.Util.hashHex(t, n)
                },
                u = bn(t),
                c = u.length,
                f = this.n.bitLength() - 1,
                h = Math.ceil(f / 8);
            if (r === -1 || void 0 === r) r = c;
            else if (r === -2) r = h - c - 2;
            else if (r < -2) throw "invalid salt length";
            if (h < c + r + 2) throw "data too long";
            var l = this.doPublic(i).toByteArray();
            for (s = 0; s < l.length; s += 1) l[s] &= 255;
            for (; l.length < h;) l.unshift(0);
            if (188 !== l[h - 1]) throw "encoded message does not end in 0xbc";
            l = String.fromCharCode.apply(String, l);
            var d = l.substr(0, h - c - 1),
                p = l.substr(d.length, c),
                g = 65280 >> 8 * h - f & 255;
            if (0 !== (d.charCodeAt(0) & g)) throw "bits beyond keysize not zero";
            var y = Mn(p, d.length, a),
                v = [];
            for (s = 0; s < d.length; s += 1) v[s] = d.charCodeAt(s) ^ y.charCodeAt(s);
            v[0] &= ~g;
            var m = h - c - r - 2;
            for (s = 0; s < m; s += 1)
                if (0 !== v[s]) throw "leftmost octets not zero";
            if (1 !== v[m]) throw "0x01 marker not found";
            return p === bn(a(wn("\0\0\0\0\0\0\0\0" + u + String.fromCharCode.apply(String, v.slice(-r)))))
        }
        /*! x509-1.1.9.js (c) 2012-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        function $n() {
            this.subjectPublicKeyRSA = null, this.subjectPublicKeyRSA_hN = null, this.subjectPublicKeyRSA_hE = null, this.hex = null, this.getSerialNumberHex = function() {
                return Or.getDecendantHexVByNthList(this.hex, 0, [0, 1])
            }, this.getSignatureAlgorithmField = function() {
                var t = Or.getDecendantHexVByNthList(this.hex, 0, [0, 2, 0]),
                    e = Cr.asn1.ASN1Util.oidHexToInt(t),
                    n = Cr.asn1.x509.OID.oid2name(e);
                return n
            }, this.getIssuerHex = function() {
                return Or.getDecendantHexTLVByNthList(this.hex, 0, [0, 3])
            }, this.getIssuerString = function() {
                return $n.hex2dn(Or.getDecendantHexTLVByNthList(this.hex, 0, [0, 3]))
            }, this.getSubjectHex = function() {
                return Or.getDecendantHexTLVByNthList(this.hex, 0, [0, 5])
            }, this.getSubjectString = function() {
                return $n.hex2dn(Or.getDecendantHexTLVByNthList(this.hex, 0, [0, 5]))
            }, this.getNotBefore = function() {
                var t = Or.getDecendantHexVByNthList(this.hex, 0, [0, 4, 0]);
                return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t)
            }, this.getNotAfter = function() {
                var t = Or.getDecendantHexVByNthList(this.hex, 0, [0, 4, 1]);
                return t = t.replace(/(..)/g, "%$1"), t = decodeURIComponent(t)
            }, this.readCertPEM = function(t) {
                var e = $n.pemToHex(t),
                    n = $n.getPublicKeyHexArrayFromCertHex(e),
                    r = new ve;
                r.setPublic(n[0], n[1]), this.subjectPublicKeyRSA = r, this.subjectPublicKeyRSA_hN = n[0], this.subjectPublicKeyRSA_hE = n[1], this.hex = e
            }, this.readCertPEMWithoutRSAInit = function(t) {
                var e = $n.pemToHex(t),
                    n = $n.getPublicKeyHexArrayFromCertHex(e);
                this.subjectPublicKeyRSA.setPublic(n[0], n[1]), this.subjectPublicKeyRSA_hN = n[0], this.subjectPublicKeyRSA_hE = n[1], this.hex = e
            }, this.getInfo = function() {
                var t = "Basic Fields\n";
                t += "  serial number: " + this.getSerialNumberHex() + "\n", t += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n", t += "  issuer: " + this.getIssuerString() + "\n", t += "  notBefore: " + this.getNotBefore() + "\n", t += "  notAfter: " + this.getNotAfter() + "\n", t += "  subject: " + this.getSubjectString() + "\n", t += "  subject public key info: \n";
                var e = $n.getSubjectPublicKeyInfoPosFromCertHex(this.hex),
                    n = Or.getHexOfTLV_AtObj(this.hex, e),
                    r = Dr.getKey(n, null, "pkcs8pub");
                r instanceof ve && (t += "    key algorithm: RSA\n", t += "    n=" + r.n.toString(16).substr(0, 16) + "...\n", t += "    e=" + r.e.toString(16) + "\n"), t += "X509v3 Extensions:\n";
                for (var i = $n.getV3ExtInfoListOfCertHex(this.hex), s = 0; s < i.length; s++) {
                    var o = i[s],
                        a = Cr.asn1.x509.OID.oid2name(o.oid);
                    "" === a && (a = o.oid);
                    var u = "";
                    if (o.critical === !0 && (u = "CRITICAL"), t += "  " + a + " " + u + ":\n", "basicConstraints" === a) {
                        var c = $n.getExtBasicConstraints(this.hex);
                        void 0 === c.cA ? t += "    {}\n" : (t += "    cA=true", void 0 !== c.pathLen && (t += ", pathLen=" + c.pathLen), t += "\n")
                    } else if ("keyUsage" === a) t += "    " + $n.getExtKeyUsageString(this.hex) + "\n";
                    else if ("subjectKeyIdentifier" === a) t += "    " + $n.getExtSubjectKeyIdentifier(this.hex) + "\n";
                    else if ("authorityKeyIdentifier" === a) {
                        var f = $n.getExtAuthorityKeyIdentifier(this.hex);
                        void 0 !== f.kid && (t += "    kid=" + f.kid + "\n")
                    } else if ("extKeyUsage" === a) {
                        var h = $n.getExtExtKeyUsageName(this.hex);
                        t += "    " + h.join(", ") + "\n"
                    } else if ("subjectAltName" === a) {
                        var l = $n.getExtSubjectAltName(this.hex);
                        t += "    " + l.join(", ") + "\n"
                    } else if ("cRLDistributionPoints" === a) {
                        var d = $n.getExtCRLDistributionPointsURI(this.hex);
                        t += "    " + d + "\n"
                    } else if ("authorityInfoAccess" === a) {
                        var p = $n.getExtAIAInfo(this.hex);
                        void 0 !== p.ocsp && (t += "    ocsp: " + p.ocsp.join(",") + "\n"), void 0 !== p.caissuer && (t += "    caissuer: " + p.caissuer.join(",") + "\n")
                    }
                }
                return t += "signature algorithm: " + $n.getSignatureAlgorithmName(this.hex) + "\n", t += "signature: " + $n.getSignatureValueHex(this.hex).substr(0, 16) + "...\n"
            }
        }
        /*! nodeutil-1.0.0 (c) 2015 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        function Qn(t) {
            return n(343).readFileSync(t, "utf8")
        }

        function Zn(t) {
            var e = n(338),
                r = n(343);
            return e.rstrtohex(r.readFileSync(t, "binary"))
        }

        function tr(t) {
            var e = n(343);
            return e.readFileSync(t, "binary")
        }

        function er(t, e) {
            var r = n(343);
            r.writeFileSync(t, e, "binary")
        }

        function nr(t, e) {
            var r = n(343),
                i = n(338),
                s = i.hextorstr(e);
            r.writeFileSync(t, s, "binary")
        }
        var rr = {};
        rr.userAgent = !1;
        var ir = {};
        if ("undefined" == typeof sr || !sr) var sr = {};
        sr.namespace = function() {
                var t, e, n, r = arguments,
                    i = null;
                for (t = 0; t < r.length; t += 1)
                    for (n = ("" + r[t]).split("."), i = sr, e = "YAHOO" == n[0] ? 1 : 0; e < n.length; e += 1) i[n[e]] = i[n[e]] || {}, i = i[n[e]];
                return i
            }, sr.log = function(t, e, n) {
                var r = sr.widget.Logger;
                return !(!r || !r.log) && r.log(t, e, n)
            }, sr.register = function(t, e, n) {
                var r, i, s, o, a, u = sr.env.modules;
                for (u[t] || (u[t] = {
                        versions: [],
                        builds: []
                    }), r = u[t], i = n.version, s = n.build, o = sr.env.listeners, r.name = t, r.version = i, r.build = s, r.versions.push(i), r.builds.push(s), r.mainClass = e, a = 0; a < o.length; a += 1) o[a](r);
                e ? (e.VERSION = i, e.BUILD = s) : sr.log("mainClass is undefined for module " + t, "warn")
            }, sr.env = sr.env || {
                modules: [],
                listeners: []
            }, sr.env.getVersion = function(t) {
                return sr.env.modules[t] || null
            }, sr.env.parseUA = function(t) {
                var e, n = function(t) {
                        var e = 0;
                        return parseFloat(t.replace(/\./g, function() {
                            return 1 == e++ ? "" : "."
                        }))
                    },
                    r = rr,
                    i = {
                        ie: 0,
                        opera: 0,
                        gecko: 0,
                        webkit: 0,
                        chrome: 0,
                        mobile: null,
                        air: 0,
                        ipad: 0,
                        iphone: 0,
                        ipod: 0,
                        ios: null,
                        android: 0,
                        webos: 0,
                        caja: r && r.cajaVersion,
                        secure: !1,
                        os: null
                    },
                    s = t || rr && rr.userAgent,
                    o = ir && ir.location,
                    a = o && o.href;
                return i.secure = a && 0 === a.toLowerCase().indexOf("https"), s && (/windows|win32/i.test(s) ? i.os = "windows" : /macintosh/i.test(s) ? i.os = "macintosh" : /rhino/i.test(s) && (i.os = "rhino"), /KHTML/.test(s) && (i.webkit = 1), e = s.match(/AppleWebKit\/([^\s]*)/), e && e[1] && (i.webkit = n(e[1]), / Mobile\//.test(s) ? (i.mobile = "Apple", e = s.match(/OS ([^\s]*)/), e && e[1] && (e = n(e[1].replace("_", "."))), i.ios = e, i.ipad = i.ipod = i.iphone = 0, e = s.match(/iPad|iPod|iPhone/), e && e[0] && (i[e[0].toLowerCase()] = i.ios)) : (e = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), e && (i.mobile = e[0]), /webOS/.test(s) && (i.mobile = "WebOS", e = s.match(/webOS\/([^\s]*);/), e && e[1] && (i.webos = n(e[1]))), / Android/.test(s) && (i.mobile = "Android", e = s.match(/Android ([^\s]*);/), e && e[1] && (i.android = n(e[1])))), e = s.match(/Chrome\/([^\s]*)/), e && e[1] ? i.chrome = n(e[1]) : (e = s.match(/AdobeAIR\/([^\s]*)/), e && (i.air = e[0]))), i.webkit || (e = s.match(/Opera[\s\/]([^\s]*)/), e && e[1] ? (i.opera = n(e[1]), e = s.match(/Version\/([^\s]*)/), e && e[1] && (i.opera = n(e[1])), e = s.match(/Opera Mini[^;]*/), e && (i.mobile = e[0])) : (e = s.match(/MSIE\s([^;]*)/), e && e[1] ? i.ie = n(e[1]) : (e = s.match(/Gecko\/([^\s]*)/), e && (i.gecko = 1, e = s.match(/rv:([^\s\)]*)/), e && e[1] && (i.gecko = n(e[1]))))))), i
            }, sr.env.ua = sr.env.parseUA(),
            function() {
                if (sr.namespace("util", "widget", "example"), "undefined" != typeof YAHOO_config) {
                    var t, e = YAHOO_config.listener,
                        n = sr.env.listeners,
                        r = !0;
                    if (e) {
                        for (t = 0; t < n.length; t++)
                            if (n[t] == e) {
                                r = !1;
                                break
                            } r && n.push(e)
                    }
                }
            }(), sr.lang = sr.lang || {},
            function() {
                var t = sr.lang,
                    e = Object.prototype,
                    n = "[object Array]",
                    r = "[object Function]",
                    i = "[object Object]",
                    s = [],
                    o = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "/": "&#x2F;",
                        "`": "&#x60;"
                    },
                    a = ["toString", "valueOf"],
                    u = {
                        isArray: function(t) {
                            return e.toString.apply(t) === n
                        },
                        isBoolean: function(t) {
                            return "boolean" == typeof t
                        },
                        isFunction: function(t) {
                            return "function" == typeof t || e.toString.apply(t) === r
                        },
                        isNull: function(t) {
                            return null === t
                        },
                        isNumber: function(t) {
                            return "number" == typeof t && isFinite(t)
                        },
                        isObject: function(e) {
                            return e && ("object" == typeof e || t.isFunction(e)) || !1
                        },
                        isString: function(t) {
                            return "string" == typeof t
                        },
                        isUndefined: function(t) {
                            return "undefined" == typeof t
                        },
                        _IEEnumFix: sr.env.ua.ie ? function(n, r) {
                            var i, s, o;
                            for (i = 0; i < a.length; i += 1) s = a[i], o = r[s], t.isFunction(o) && o != e[s] && (n[s] = o)
                        } : function() {},
                        escapeHTML: function(t) {
                            return t.replace(/[&<>"'\/`]/g, function(t) {
                                return o[t]
                            })
                        },
                        extend: function(n, r, i) {
                            if (!r || !n) throw new Error("extend failed, please check that all dependencies are included.");
                            var s, o = function() {};
                            if (o.prototype = r.prototype, n.prototype = new o, n.prototype.constructor = n, n.superclass = r.prototype, r.prototype.constructor == e.constructor && (r.prototype.constructor = r), i) {
                                for (s in i) t.hasOwnProperty(i, s) && (n.prototype[s] = i[s]);
                                t._IEEnumFix(n.prototype, i)
                            }
                        },
                        augmentObject: function(e, n) {
                            if (!n || !e) throw new Error("Absorb failed, verify dependencies.");
                            var r, i, s = arguments,
                                o = s[2];
                            if (o && o !== !0)
                                for (r = 2; r < s.length; r += 1) e[s[r]] = n[s[r]];
                            else {
                                for (i in n) !o && i in e || (e[i] = n[i]);
                                t._IEEnumFix(e, n)
                            }
                            return e
                        },
                        augmentProto: function(e, n) {
                            if (!n || !e) throw new Error("Augment failed, verify dependencies.");
                            var r, i = [e.prototype, n.prototype];
                            for (r = 2; r < arguments.length; r += 1) i.push(arguments[r]);
                            return t.augmentObject.apply(this, i), e
                        },
                        dump: function(e, n) {
                            var r, i, s = [],
                                o = "{...}",
                                a = "f(){...}",
                                u = ", ",
                                c = " => ";
                            if (!t.isObject(e)) return e + "";
                            if (e instanceof Date || "nodeType" in e && "tagName" in e) return e;
                            if (t.isFunction(e)) return a;
                            if (n = t.isNumber(n) ? n : 3, t.isArray(e)) {
                                for (s.push("["), r = 0, i = e.length; r < i; r += 1) t.isObject(e[r]) ? s.push(n > 0 ? t.dump(e[r], n - 1) : o) : s.push(e[r]), s.push(u);
                                s.length > 1 && s.pop(), s.push("]")
                            } else {
                                s.push("{");
                                for (r in e) t.hasOwnProperty(e, r) && (s.push(r + c), t.isObject(e[r]) ? s.push(n > 0 ? t.dump(e[r], n - 1) : o) : s.push(e[r]), s.push(u));
                                s.length > 1 && s.pop(), s.push("}")
                            }
                            return s.join("")
                        },
                        substitute: function(e, n, r, s) {
                            for (var o, a, u, c, f, h, l, d, p, g = [], y = e.length, v = "dump", m = " ", S = "{", b = "}";
                                (o = e.lastIndexOf(S, y), !(o < 0)) && (a = e.indexOf(b, o), !(o + 1 > a));) l = e.substring(o + 1, a), c = l, h = null, u = c.indexOf(m), u > -1 && (h = c.substring(u + 1), c = c.substring(0, u)), f = n[c], r && (f = r(c, f, h)), t.isObject(f) ? t.isArray(f) ? f = t.dump(f, parseInt(h, 10)) : (h = h || "", d = h.indexOf(v), d > -1 && (h = h.substring(4)), p = f.toString(), f = p === i || d > -1 ? t.dump(f, parseInt(h, 10)) : p) : t.isString(f) || t.isNumber(f) || (f = "~-" + g.length + "-~", g[g.length] = l), e = e.substring(0, o) + f + e.substring(a + 1), s === !1 && (y = o - 1);
                            for (o = g.length - 1; o >= 0; o -= 1) e = e.replace(new RegExp("~-" + o + "-~"), "{" + g[o] + "}", "g");
                            return e
                        },
                        trim: function(t) {
                            try {
                                return t.replace(/^\s+|\s+$/g, "")
                            } catch (e) {
                                return t
                            }
                        },
                        merge: function() {
                            var e, n = {},
                                r = arguments,
                                i = r.length;
                            for (e = 0; e < i; e += 1) t.augmentObject(n, r[e], !0);
                            return n
                        },
                        later: function(e, n, r, i, o) {
                            e = e || 0, n = n || {};
                            var a, u, c = r,
                                f = i;
                            if (t.isString(r) && (c = n[r]), !c) throw new TypeError("method undefined");
                            return t.isUndefined(i) || t.isArray(f) || (f = [i]), a = function() {
                                c.apply(n, f || s)
                            }, u = o ? setInterval(a, e) : setTimeout(a, e), {
                                interval: o,
                                cancel: function() {
                                    this.interval ? clearInterval(u) : clearTimeout(u)
                                }
                            }
                        },
                        isValue: function(e) {
                            return t.isObject(e) || t.isString(e) || t.isNumber(e) || t.isBoolean(e)
                        }
                    };
                t.hasOwnProperty = e.hasOwnProperty ? function(t, e) {
                    return t && t.hasOwnProperty && t.hasOwnProperty(e)
                } : function(e, n) {
                    return !t.isUndefined(e[n]) && e.constructor.prototype[n] !== e[n]
                }, u.augmentObject(t, u, !0), sr.util.Lang = t, t.augment = t.augmentProto, sr.augment = t.augmentProto, sr.extend = t.extend
            }(), sr.register("yahoo", sr, {
                version: "2.9.0",
                build: "2800"
            });
        /*! CryptoJS v3.1.2 core-fix.js
         * code.google.com/p/crypto-js
         * (c) 2009-2013 by Jeff Mott. All rights reserved.
         * code.google.com/p/crypto-js/wiki/License
         * THIS IS FIX of 'core.js' to fix Hmac issue.
         * https://code.google.com/p/crypto-js/issues/detail?id=84
         * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
         */
        var or = or || function(t, e) {
            var n = {},
                r = n.lib = {},
                i = r.Base = function() {
                    function t() {}
                    return {
                        extend: function(e) {
                            t.prototype = this;
                            var n = new t;
                            return e && n.mixIn(e), n.hasOwnProperty("init") || (n.init = function() {
                                n.$super.init.apply(this, arguments)
                            }), n.init.prototype = n, n.$super = this, n
                        },
                        create: function() {
                            var t = this.extend();
                            return t.init.apply(t, arguments), t
                        },
                        init: function() {},
                        mixIn: function(t) {
                            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }(),
                s = r.WordArray = i.extend({
                    init: function(t, n) {
                        t = this.words = t || [], n != e ? this.sigBytes = n : this.sigBytes = 4 * t.length
                    },
                    toString: function(t) {
                        return (t || a).stringify(this)
                    },
                    concat: function(t) {
                        var e = this.words,
                            n = t.words,
                            r = this.sigBytes,
                            i = t.sigBytes;
                        if (this.clamp(), r % 4)
                            for (var s = 0; s < i; s++) {
                                var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                e[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8
                            } else
                                for (var s = 0; s < i; s += 4) e[r + s >>> 2] = n[s >>> 2];
                        return this.sigBytes += i, this
                    },
                    clamp: function() {
                        var e = this.words,
                            n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t.words = this.words.slice(0), t
                    },
                    random: function(e) {
                        for (var n = [], r = 0; r < e; r += 4) n.push(4294967296 * t.random() | 0);
                        return new s.init(n, e)
                    }
                }),
                o = n.enc = {},
                a = o.Hex = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                            var s = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new s.init(n, e / 2)
                    }
                },
                u = o.Latin1 = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                            var s = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(s))
                        }
                        return r.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new s.init(n, e)
                    }
                },
                c = o.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(u.stringify(t)))
                        } catch (t) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return u.parse(unescape(encodeURIComponent(t)))
                    }
                },
                f = r.BufferedBlockAlgorithm = i.extend({
                    reset: function() {
                        this._data = new s.init, this._nDataBytes = 0
                    },
                    _append: function(t) {
                        "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                    },
                    _process: function(e) {
                        var n = this._data,
                            r = n.words,
                            i = n.sigBytes,
                            o = this.blockSize,
                            a = 4 * o,
                            u = i / a;
                        u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0);
                        var c = u * o,
                            f = t.min(4 * c, i);
                        if (c) {
                            for (var h = 0; h < c; h += o) this._doProcessBlock(r, h);
                            var l = r.splice(0, c);
                            n.sigBytes -= f
                        }
                        return new s.init(l, f)
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._data = this._data.clone(), t
                    },
                    _minBufferSize: 0
                }),
                h = (r.Hasher = f.extend({
                    cfg: i.extend(),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t), this.reset()
                    },
                    reset: function() {
                        f.reset.call(this), this._doReset()
                    },
                    update: function(t) {
                        return this._append(t), this._process(), this
                    },
                    finalize: function(t) {
                        t && this._append(t);
                        var e = this._doFinalize();
                        return e
                    },
                    blockSize: 16,
                    _createHelper: function(t) {
                        return function(e, n) {
                            return new t.init(n).finalize(e)
                        }
                    },
                    _createHmacHelper: function(t) {
                        return function(e, n) {
                            return new h.HMAC.init(t, n).finalize(e)
                        }
                    }
                }), n.algo = {});
            return n
        }(Math);
        ! function(t) {
            var e = or,
                n = e.lib,
                r = n.Base,
                i = n.WordArray,
                e = e.x64 = {};
            e.Word = r.extend({
                init: function(t, e) {
                    this.high = t, this.low = e
                }
            }), e.WordArray = r.extend({
                init: function(e, n) {
                    e = this.words = e || [], this.sigBytes = n != t ? n : 8 * e.length
                },
                toX32: function() {
                    for (var t = this.words, e = t.length, n = [], r = 0; r < e; r++) {
                        var s = t[r];
                        n.push(s.high), n.push(s.low)
                    }
                    return i.create(n, this.sigBytes)
                },
                clone: function() {
                    for (var t = r.clone.call(this), e = t.words = this.words.slice(0), n = e.length, i = 0; i < n; i++) e[i] = e[i].clone();
                    return t
                }
            })
        }(), or.lib.Cipher || function(t) {
                var e = or,
                    n = e.lib,
                    r = n.Base,
                    i = n.WordArray,
                    s = n.BufferedBlockAlgorithm,
                    o = e.enc.Base64,
                    a = e.algo.EvpKDF,
                    u = n.Cipher = s.extend({
                        cfg: r.extend(),
                        createEncryptor: function(t, e) {
                            return this.create(this._ENC_XFORM_MODE, t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.create(this._DEC_XFORM_MODE, t, e)
                        },
                        init: function(t, e, n) {
                            this.cfg = this.cfg.extend(n), this._xformMode = t, this._key = e, this.reset()
                        },
                        reset: function() {
                            s.reset.call(this), this._doReset()
                        },
                        process: function(t) {
                            return this._append(t), this._process()
                        },
                        finalize: function(t) {
                            return t && this._append(t), this._doFinalize()
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function(t) {
                            return {
                                encrypt: function(e, n, r) {
                                    return ("string" == typeof n ? p : d).encrypt(t, e, n, r)
                                },
                                decrypt: function(e, n, r) {
                                    return ("string" == typeof n ? p : d).decrypt(t, e, n, r)
                                }
                            }
                        }
                    });
                n.StreamCipher = u.extend({
                    _doFinalize: function() {
                        return this._process(!0)
                    },
                    blockSize: 1
                });
                var c = e.mode = {},
                    f = function(e, n, r) {
                        var i = this._iv;
                        i ? this._iv = t : i = this._prevBlock;
                        for (var s = 0; s < r; s++) e[n + s] ^= i[s]
                    },
                    h = (n.BlockCipherMode = r.extend({
                        createEncryptor: function(t, e) {
                            return this.Encryptor.create(t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.Decryptor.create(t, e)
                        },
                        init: function(t, e) {
                            this._cipher = t, this._iv = e
                        }
                    })).extend();
                h.Encryptor = h.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher,
                            r = n.blockSize;
                        f.call(this, t, e, r), n.encryptBlock(t, e), this._prevBlock = t.slice(e, e + r)
                    }
                }), h.Decryptor = h.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher,
                            r = n.blockSize,
                            i = t.slice(e, e + r);
                        n.decryptBlock(t, e), f.call(this, t, e, r), this._prevBlock = i
                    }
                }), c = c.CBC = h, h = (e.pad = {}).Pkcs7 = {
                    pad: function(t, e) {
                        for (var n = 4 * e, n = n - t.sigBytes % n, r = n << 24 | n << 16 | n << 8 | n, s = [], o = 0; o < n; o += 4) s.push(r);
                        n = i.create(s, n), t.concat(n)
                    },
                    unpad: function(t) {
                        t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                    }
                }, n.BlockCipher = u.extend({
                    cfg: u.cfg.extend({
                        mode: c,
                        padding: h
                    }),
                    reset: function() {
                        u.reset.call(this);
                        var t = this.cfg,
                            e = t.iv,
                            t = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var n = t.createEncryptor;
                        else n = t.createDecryptor, this._minBufferSize = 1;
                        this._mode = n.call(t, this, e && e.words)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0)
                        } else e = this._process(!0), t.unpad(e);
                        return e
                    },
                    blockSize: 4
                });
                var l = n.CipherParams = r.extend({
                        init: function(t) {
                            this.mixIn(t)
                        },
                        toString: function(t) {
                            return (t || this.formatter).stringify(this)
                        }
                    }),
                    c = (e.format = {}).OpenSSL = {
                        stringify: function(t) {
                            var e = t.ciphertext;
                            return t = t.salt, (t ? i.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(o)
                        },
                        parse: function(t) {
                            t = o.parse(t);
                            var e = t.words;
                            if (1398893684 == e[0] && 1701076831 == e[1]) {
                                var n = i.create(e.slice(2, 4));
                                e.splice(0, 4), t.sigBytes -= 16
                            }
                            return l.create({
                                ciphertext: t,
                                salt: n
                            })
                        }
                    },
                    d = n.SerializableCipher = r.extend({
                        cfg: r.extend({
                            format: c
                        }),
                        encrypt: function(t, e, n, r) {
                            r = this.cfg.extend(r);
                            var i = t.createEncryptor(n, r);
                            return e = i.finalize(e), i = i.cfg, l.create({
                                ciphertext: e,
                                key: n,
                                iv: i.iv,
                                algorithm: t,
                                mode: i.mode,
                                padding: i.padding,
                                blockSize: t.blockSize,
                                formatter: r.format
                            })
                        },
                        decrypt: function(t, e, n, r) {
                            return r = this.cfg.extend(r), e = this._parse(e, r.format), t.createDecryptor(n, r).finalize(e.ciphertext)
                        },
                        _parse: function(t, e) {
                            return "string" == typeof t ? e.parse(t, this) : t
                        }
                    }),
                    e = (e.kdf = {}).OpenSSL = {
                        execute: function(t, e, n, r) {
                            return r || (r = i.random(8)), t = a.create({
                                keySize: e + n
                            }).compute(t, r), n = i.create(t.words.slice(e), 4 * n), t.sigBytes = 4 * e, l.create({
                                key: t,
                                iv: n,
                                salt: r
                            })
                        }
                    },
                    p = n.PasswordBasedCipher = d.extend({
                        cfg: d.cfg.extend({
                            kdf: e
                        }),
                        encrypt: function(t, e, n, r) {
                            return r = this.cfg.extend(r), n = r.kdf.execute(n, t.keySize, t.ivSize), r.iv = n.iv, t = d.encrypt.call(this, t, e, n.key, r), t.mixIn(n), t
                        },
                        decrypt: function(t, e, n, r) {
                            return r = this.cfg.extend(r), e = this._parse(e, r.format), n = r.kdf.execute(n, t.keySize, t.ivSize, e.salt), r.iv = n.iv, d.decrypt.call(this, t, e, n.key, r)
                        }
                    })
            }(),
            function() {
                for (var t = or, e = t.lib.BlockCipher, n = t.algo, r = [], i = [], s = [], o = [], a = [], u = [], c = [], f = [], h = [], l = [], d = [], p = 0; 256 > p; p++) d[p] = 128 > p ? p << 1 : p << 1 ^ 283;
                for (var g = 0, y = 0, p = 0; 256 > p; p++) {
                    var v = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4,
                        v = v >>> 8 ^ 255 & v ^ 99;
                    r[g] = v, i[v] = g;
                    var m = d[g],
                        S = d[m],
                        b = d[S],
                        w = 257 * d[v] ^ 16843008 * v;
                    s[g] = w << 24 | w >>> 8, o[g] = w << 16 | w >>> 16, a[g] = w << 8 | w >>> 24, u[g] = w, w = 16843009 * b ^ 65537 * S ^ 257 * m ^ 16843008 * g, c[v] = w << 24 | w >>> 8, f[v] = w << 16 | w >>> 16, h[v] = w << 8 | w >>> 24, l[v] = w, g ? (g = m ^ d[d[d[b ^ m]]], y ^= d[d[y]]) : g = y = 1
                }
                var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    n = n.AES = e.extend({
                        _doReset: function() {
                            for (var t = this._key, e = t.words, n = t.sigBytes / 4, t = 4 * ((this._nRounds = n + 6) + 1), i = this._keySchedule = [], s = 0; s < t; s++)
                                if (s < n) i[s] = e[s];
                                else {
                                    var o = i[s - 1];
                                    s % n ? 6 < n && 4 == s % n && (o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o]) : (o = o << 8 | o >>> 24, o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o], o ^= _[s / n | 0] << 24), i[s] = i[s - n] ^ o
                                } for (e = this._invKeySchedule = [], n = 0; n < t; n++) s = t - n, o = n % 4 ? i[s] : i[s - 4], e[n] = 4 > n || 4 >= s ? o : c[r[o >>> 24]] ^ f[r[o >>> 16 & 255]] ^ h[r[o >>> 8 & 255]] ^ l[r[255 & o]]
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, s, o, a, u, r)
                        },
                        decryptBlock: function(t, e) {
                            var n = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, c, f, h, l, i), n = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = n
                        },
                        _doCryptBlock: function(t, e, n, r, i, s, o, a) {
                            for (var u = this._nRounds, c = t[e] ^ n[0], f = t[e + 1] ^ n[1], h = t[e + 2] ^ n[2], l = t[e + 3] ^ n[3], d = 4, p = 1; p < u; p++) var g = r[c >>> 24] ^ i[f >>> 16 & 255] ^ s[h >>> 8 & 255] ^ o[255 & l] ^ n[d++],
                                y = r[f >>> 24] ^ i[h >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[255 & c] ^ n[d++],
                                v = r[h >>> 24] ^ i[l >>> 16 & 255] ^ s[c >>> 8 & 255] ^ o[255 & f] ^ n[d++],
                                l = r[l >>> 24] ^ i[c >>> 16 & 255] ^ s[f >>> 8 & 255] ^ o[255 & h] ^ n[d++],
                                c = g,
                                f = y,
                                h = v;
                            g = (a[c >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ n[d++], y = (a[f >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & c]) ^ n[d++], v = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & f]) ^ n[d++], l = (a[l >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & h]) ^ n[d++], t[e] = g, t[e + 1] = y, t[e + 2] = v, t[e + 3] = l
                        },
                        keySize: 8
                    });
                t.AES = e._createHelper(n)
            }(),
            function() {
                function t(t, e) {
                    var n = (this._lBlock >>> t ^ this._rBlock) & e;
                    this._rBlock ^= n, this._lBlock ^= n << t
                }

                function e(t, e) {
                    var n = (this._rBlock >>> t ^ this._lBlock) & e;
                    this._lBlock ^= n, this._rBlock ^= n << t
                }
                var n = or,
                    r = n.lib,
                    i = r.WordArray,
                    r = r.BlockCipher,
                    s = n.algo,
                    o = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                    a = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                    u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                    c = [{
                        0: 8421888,
                        268435456: 32768,
                        536870912: 8421378,
                        805306368: 2,
                        1073741824: 512,
                        1342177280: 8421890,
                        1610612736: 8389122,
                        1879048192: 8388608,
                        2147483648: 514,
                        2415919104: 8389120,
                        2684354560: 33280,
                        2952790016: 8421376,
                        3221225472: 32770,
                        3489660928: 8388610,
                        3758096384: 0,
                        4026531840: 33282,
                        134217728: 0,
                        402653184: 8421890,
                        671088640: 33282,
                        939524096: 32768,
                        1207959552: 8421888,
                        1476395008: 512,
                        1744830464: 8421378,
                        2013265920: 2,
                        2281701376: 8389120,
                        2550136832: 33280,
                        2818572288: 8421376,
                        3087007744: 8389122,
                        3355443200: 8388610,
                        3623878656: 32770,
                        3892314112: 514,
                        4160749568: 8388608,
                        1: 32768,
                        268435457: 2,
                        536870913: 8421888,
                        805306369: 8388608,
                        1073741825: 8421378,
                        1342177281: 33280,
                        1610612737: 512,
                        1879048193: 8389122,
                        2147483649: 8421890,
                        2415919105: 8421376,
                        2684354561: 8388610,
                        2952790017: 33282,
                        3221225473: 514,
                        3489660929: 8389120,
                        3758096385: 32770,
                        4026531841: 0,
                        134217729: 8421890,
                        402653185: 8421376,
                        671088641: 8388608,
                        939524097: 512,
                        1207959553: 32768,
                        1476395009: 8388610,
                        1744830465: 2,
                        2013265921: 33282,
                        2281701377: 32770,
                        2550136833: 8389122,
                        2818572289: 514,
                        3087007745: 8421888,
                        3355443201: 8389120,
                        3623878657: 0,
                        3892314113: 33280,
                        4160749569: 8421378
                    }, {
                        0: 1074282512,
                        16777216: 16384,
                        33554432: 524288,
                        50331648: 1074266128,
                        67108864: 1073741840,
                        83886080: 1074282496,
                        100663296: 1073758208,
                        117440512: 16,
                        134217728: 540672,
                        150994944: 1073758224,
                        167772160: 1073741824,
                        184549376: 540688,
                        201326592: 524304,
                        218103808: 0,
                        234881024: 16400,
                        251658240: 1074266112,
                        8388608: 1073758208,
                        25165824: 540688,
                        41943040: 16,
                        58720256: 1073758224,
                        75497472: 1074282512,
                        92274688: 1073741824,
                        109051904: 524288,
                        125829120: 1074266128,
                        142606336: 524304,
                        159383552: 0,
                        176160768: 16384,
                        192937984: 1074266112,
                        209715200: 1073741840,
                        226492416: 540672,
                        243269632: 1074282496,
                        260046848: 16400,
                        268435456: 0,
                        285212672: 1074266128,
                        301989888: 1073758224,
                        318767104: 1074282496,
                        335544320: 1074266112,
                        352321536: 16,
                        369098752: 540688,
                        385875968: 16384,
                        402653184: 16400,
                        419430400: 524288,
                        436207616: 524304,
                        452984832: 1073741840,
                        469762048: 540672,
                        486539264: 1073758208,
                        503316480: 1073741824,
                        520093696: 1074282512,
                        276824064: 540688,
                        293601280: 524288,
                        310378496: 1074266112,
                        327155712: 16384,
                        343932928: 1073758208,
                        360710144: 1074282512,
                        377487360: 16,
                        394264576: 1073741824,
                        411041792: 1074282496,
                        427819008: 1073741840,
                        444596224: 1073758224,
                        461373440: 524304,
                        478150656: 0,
                        494927872: 16400,
                        511705088: 1074266128,
                        528482304: 540672
                    }, {
                        0: 260,
                        1048576: 0,
                        2097152: 67109120,
                        3145728: 65796,
                        4194304: 65540,
                        5242880: 67108868,
                        6291456: 67174660,
                        7340032: 67174400,
                        8388608: 67108864,
                        9437184: 67174656,
                        10485760: 65792,
                        11534336: 67174404,
                        12582912: 67109124,
                        13631488: 65536,
                        14680064: 4,
                        15728640: 256,
                        524288: 67174656,
                        1572864: 67174404,
                        2621440: 0,
                        3670016: 67109120,
                        4718592: 67108868,
                        5767168: 65536,
                        6815744: 65540,
                        7864320: 260,
                        8912896: 4,
                        9961472: 256,
                        11010048: 67174400,
                        12058624: 65796,
                        13107200: 65792,
                        14155776: 67109124,
                        15204352: 67174660,
                        16252928: 67108864,
                        16777216: 67174656,
                        17825792: 65540,
                        18874368: 65536,
                        19922944: 67109120,
                        20971520: 256,
                        22020096: 67174660,
                        23068672: 67108868,
                        24117248: 0,
                        25165824: 67109124,
                        26214400: 67108864,
                        27262976: 4,
                        28311552: 65792,
                        29360128: 67174400,
                        30408704: 260,
                        31457280: 65796,
                        32505856: 67174404,
                        17301504: 67108864,
                        18350080: 260,
                        19398656: 67174656,
                        20447232: 0,
                        21495808: 65540,
                        22544384: 67109120,
                        23592960: 256,
                        24641536: 67174404,
                        25690112: 65536,
                        26738688: 67174660,
                        27787264: 65796,
                        28835840: 67108868,
                        29884416: 67109124,
                        30932992: 67174400,
                        31981568: 4,
                        33030144: 65792
                    }, {
                        0: 2151682048,
                        65536: 2147487808,
                        131072: 4198464,
                        196608: 2151677952,
                        262144: 0,
                        327680: 4198400,
                        393216: 2147483712,
                        458752: 4194368,
                        524288: 2147483648,
                        589824: 4194304,
                        655360: 64,
                        720896: 2147487744,
                        786432: 2151678016,
                        851968: 4160,
                        917504: 4096,
                        983040: 2151682112,
                        32768: 2147487808,
                        98304: 64,
                        163840: 2151678016,
                        229376: 2147487744,
                        294912: 4198400,
                        360448: 2151682112,
                        425984: 0,
                        491520: 2151677952,
                        557056: 4096,
                        622592: 2151682048,
                        688128: 4194304,
                        753664: 4160,
                        819200: 2147483648,
                        884736: 4194368,
                        950272: 4198464,
                        1015808: 2147483712,
                        1048576: 4194368,
                        1114112: 4198400,
                        1179648: 2147483712,
                        1245184: 0,
                        1310720: 4160,
                        1376256: 2151678016,
                        1441792: 2151682048,
                        1507328: 2147487808,
                        1572864: 2151682112,
                        1638400: 2147483648,
                        1703936: 2151677952,
                        1769472: 4198464,
                        1835008: 2147487744,
                        1900544: 4194304,
                        1966080: 64,
                        2031616: 4096,
                        1081344: 2151677952,
                        1146880: 2151682112,
                        1212416: 0,
                        1277952: 4198400,
                        1343488: 4194368,
                        1409024: 2147483648,
                        1474560: 2147487808,
                        1540096: 64,
                        1605632: 2147483712,
                        1671168: 4096,
                        1736704: 2147487744,
                        1802240: 2151678016,
                        1867776: 4160,
                        1933312: 2151682048,
                        1998848: 4194304,
                        2064384: 4198464
                    }, {
                        0: 128,
                        4096: 17039360,
                        8192: 262144,
                        12288: 536870912,
                        16384: 537133184,
                        20480: 16777344,
                        24576: 553648256,
                        28672: 262272,
                        32768: 16777216,
                        36864: 537133056,
                        40960: 536871040,
                        45056: 553910400,
                        49152: 553910272,
                        53248: 0,
                        57344: 17039488,
                        61440: 553648128,
                        2048: 17039488,
                        6144: 553648256,
                        10240: 128,
                        14336: 17039360,
                        18432: 262144,
                        22528: 537133184,
                        26624: 553910272,
                        30720: 536870912,
                        34816: 537133056,
                        38912: 0,
                        43008: 553910400,
                        47104: 16777344,
                        51200: 536871040,
                        55296: 553648128,
                        59392: 16777216,
                        63488: 262272,
                        65536: 262144,
                        69632: 128,
                        73728: 536870912,
                        77824: 553648256,
                        81920: 16777344,
                        86016: 553910272,
                        90112: 537133184,
                        94208: 16777216,
                        98304: 553910400,
                        102400: 553648128,
                        106496: 17039360,
                        110592: 537133056,
                        114688: 262272,
                        118784: 536871040,
                        122880: 0,
                        126976: 17039488,
                        67584: 553648256,
                        71680: 16777216,
                        75776: 17039360,
                        79872: 537133184,
                        83968: 536870912,
                        88064: 17039488,
                        92160: 128,
                        96256: 553910272,
                        100352: 262272,
                        104448: 553910400,
                        108544: 0,
                        112640: 553648128,
                        116736: 16777344,
                        120832: 262144,
                        124928: 537133056,
                        129024: 536871040
                    }, {
                        0: 268435464,
                        256: 8192,
                        512: 270532608,
                        768: 270540808,
                        1024: 268443648,
                        1280: 2097152,
                        1536: 2097160,
                        1792: 268435456,
                        2048: 0,
                        2304: 268443656,
                        2560: 2105344,
                        2816: 8,
                        3072: 270532616,
                        3328: 2105352,
                        3584: 8200,
                        3840: 270540800,
                        128: 270532608,
                        384: 270540808,
                        640: 8,
                        896: 2097152,
                        1152: 2105352,
                        1408: 268435464,
                        1664: 268443648,
                        1920: 8200,
                        2176: 2097160,
                        2432: 8192,
                        2688: 268443656,
                        2944: 270532616,
                        3200: 0,
                        3456: 270540800,
                        3712: 2105344,
                        3968: 268435456,
                        4096: 268443648,
                        4352: 270532616,
                        4608: 270540808,
                        4864: 8200,
                        5120: 2097152,
                        5376: 268435456,
                        5632: 268435464,
                        5888: 2105344,
                        6144: 2105352,
                        6400: 0,
                        6656: 8,
                        6912: 270532608,
                        7168: 8192,
                        7424: 268443656,
                        7680: 270540800,
                        7936: 2097160,
                        4224: 8,
                        4480: 2105344,
                        4736: 2097152,
                        4992: 268435464,
                        5248: 268443648,
                        5504: 8200,
                        5760: 270540808,
                        6016: 270532608,
                        6272: 270540800,
                        6528: 270532616,
                        6784: 8192,
                        7040: 2105352,
                        7296: 2097160,
                        7552: 0,
                        7808: 268435456,
                        8064: 268443656
                    }, {
                        0: 1048576,
                        16: 33555457,
                        32: 1024,
                        48: 1049601,
                        64: 34604033,
                        80: 0,
                        96: 1,
                        112: 34603009,
                        128: 33555456,
                        144: 1048577,
                        160: 33554433,
                        176: 34604032,
                        192: 34603008,
                        208: 1025,
                        224: 1049600,
                        240: 33554432,
                        8: 34603009,
                        24: 0,
                        40: 33555457,
                        56: 34604032,
                        72: 1048576,
                        88: 33554433,
                        104: 33554432,
                        120: 1025,
                        136: 1049601,
                        152: 33555456,
                        168: 34603008,
                        184: 1048577,
                        200: 1024,
                        216: 34604033,
                        232: 1,
                        248: 1049600,
                        256: 33554432,
                        272: 1048576,
                        288: 33555457,
                        304: 34603009,
                        320: 1048577,
                        336: 33555456,
                        352: 34604032,
                        368: 1049601,
                        384: 1025,
                        400: 34604033,
                        416: 1049600,
                        432: 1,
                        448: 0,
                        464: 34603008,
                        480: 33554433,
                        496: 1024,
                        264: 1049600,
                        280: 33555457,
                        296: 34603009,
                        312: 1,
                        328: 33554432,
                        344: 1048576,
                        360: 1025,
                        376: 34604032,
                        392: 33554433,
                        408: 34603008,
                        424: 0,
                        440: 34604033,
                        456: 1049601,
                        472: 1024,
                        488: 33555456,
                        504: 1048577
                    }, {
                        0: 134219808,
                        1: 131072,
                        2: 134217728,
                        3: 32,
                        4: 131104,
                        5: 134350880,
                        6: 134350848,
                        7: 2048,
                        8: 134348800,
                        9: 134219776,
                        10: 133120,
                        11: 134348832,
                        12: 2080,
                        13: 0,
                        14: 134217760,
                        15: 133152,
                        2147483648: 2048,
                        2147483649: 134350880,
                        2147483650: 134219808,
                        2147483651: 134217728,
                        2147483652: 134348800,
                        2147483653: 133120,
                        2147483654: 133152,
                        2147483655: 32,
                        2147483656: 134217760,
                        2147483657: 2080,
                        2147483658: 131104,
                        2147483659: 134350848,
                        2147483660: 0,
                        2147483661: 134348832,
                        2147483662: 134219776,
                        2147483663: 131072,
                        16: 133152,
                        17: 134350848,
                        18: 32,
                        19: 2048,
                        20: 134219776,
                        21: 134217760,
                        22: 134348832,
                        23: 131072,
                        24: 0,
                        25: 131104,
                        26: 134348800,
                        27: 134219808,
                        28: 134350880,
                        29: 133120,
                        30: 2080,
                        31: 134217728,
                        2147483664: 131072,
                        2147483665: 2048,
                        2147483666: 134348832,
                        2147483667: 133152,
                        2147483668: 32,
                        2147483669: 134348800,
                        2147483670: 134217728,
                        2147483671: 134219808,
                        2147483672: 134350880,
                        2147483673: 134217760,
                        2147483674: 134219776,
                        2147483675: 0,
                        2147483676: 133120,
                        2147483677: 2080,
                        2147483678: 131104,
                        2147483679: 134350848
                    }],
                    f = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                    h = s.DES = r.extend({
                        _doReset: function() {
                            for (var t = this._key.words, e = [], n = 0; 56 > n; n++) {
                                var r = o[n] - 1;
                                e[n] = t[r >>> 5] >>> 31 - r % 32 & 1
                            }
                            for (t = this._subKeys = [], r = 0; 16 > r; r++) {
                                for (var i = t[r] = [], s = u[r], n = 0; 24 > n; n++) i[n / 6 | 0] |= e[(a[n] - 1 + s) % 28] << 31 - n % 6, i[4 + (n / 6 | 0)] |= e[28 + (a[n + 24] - 1 + s) % 28] << 31 - n % 6;
                                for (i[0] = i[0] << 1 | i[0] >>> 31, n = 1; 7 > n; n++) i[n] >>>= 4 * (n - 1) + 3;
                                i[7] = i[7] << 5 | i[7] >>> 27
                            }
                            for (e = this._invSubKeys = [], n = 0; 16 > n; n++) e[n] = t[15 - n]
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._subKeys)
                        },
                        decryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._invSubKeys)
                        },
                        _doCryptBlock: function(n, r, i) {
                            this._lBlock = n[r], this._rBlock = n[r + 1], t.call(this, 4, 252645135), t.call(this, 16, 65535), e.call(this, 2, 858993459), e.call(this, 8, 16711935), t.call(this, 1, 1431655765);
                            for (var s = 0; 16 > s; s++) {
                                for (var o = i[s], a = this._lBlock, u = this._rBlock, h = 0, l = 0; 8 > l; l++) h |= c[l][((u ^ o[l]) & f[l]) >>> 0];
                                this._lBlock = u, this._rBlock = a ^ h
                            }
                            i = this._lBlock, this._lBlock = this._rBlock, this._rBlock = i, t.call(this, 1, 1431655765), e.call(this, 8, 16711935), e.call(this, 2, 858993459), t.call(this, 16, 65535), t.call(this, 4, 252645135), n[r] = this._lBlock, n[r + 1] = this._rBlock
                        },
                        keySize: 2,
                        ivSize: 2,
                        blockSize: 2
                    });
                n.DES = r._createHelper(h), s = s.TripleDES = r.extend({
                    _doReset: function() {
                        var t = this._key.words;
                        this._des1 = h.createEncryptor(i.create(t.slice(0, 2))), this._des2 = h.createEncryptor(i.create(t.slice(2, 4))), this._des3 = h.createEncryptor(i.create(t.slice(4, 6)))
                    },
                    encryptBlock: function(t, e) {
                        this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e)
                    },
                    decryptBlock: function(t, e) {
                        this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e)
                    },
                    keySize: 6,
                    ivSize: 2,
                    blockSize: 2
                }), n.TripleDES = r._createHelper(s)
            }(),
            function() {
                var t = or,
                    e = t.lib.WordArray;
                t.enc.Base64 = {
                    stringify: function(t) {
                        var e = t.words,
                            n = t.sigBytes,
                            r = this._map;
                        t.clamp(), t = [];
                        for (var i = 0; i < n; i += 3)
                            for (var s = (e[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - 8 * ((i + 1) % 4) & 255) << 8 | e[i + 2 >>> 2] >>> 24 - 8 * ((i + 2) % 4) & 255, o = 0; 4 > o && i + .75 * o < n; o++) t.push(r.charAt(s >>> 6 * (3 - o) & 63));
                        if (e = r.charAt(64))
                            for (; t.length % 4;) t.push(e);
                        return t.join("")
                    },
                    parse: function(t) {
                        var n = t.length,
                            r = this._map,
                            i = r.charAt(64);
                        i && (i = t.indexOf(i), -1 != i && (n = i));
                        for (var i = [], s = 0, o = 0; o < n; o++)
                            if (o % 4) {
                                var a = r.indexOf(t.charAt(o - 1)) << 2 * (o % 4),
                                    u = r.indexOf(t.charAt(o)) >>> 6 - 2 * (o % 4);
                                i[s >>> 2] |= (a | u) << 24 - 8 * (s % 4), s++
                            } return e.create(i, s)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(),
            function(t) {
                function e(t, e, n, r, i, s, o) {
                    return t = t + (e & n | ~e & r) + i + o, (t << s | t >>> 32 - s) + e
                }

                function n(t, e, n, r, i, s, o) {
                    return t = t + (e & r | n & ~r) + i + o, (t << s | t >>> 32 - s) + e
                }

                function r(t, e, n, r, i, s, o) {
                    return t = t + (e ^ n ^ r) + i + o, (t << s | t >>> 32 - s) + e
                }

                function i(t, e, n, r, i, s, o) {
                    return t = t + (n ^ (e | ~r)) + i + o, (t << s | t >>> 32 - s) + e
                }
                for (var s = or, o = s.lib, a = o.WordArray, u = o.Hasher, o = s.algo, c = [], f = 0; 64 > f; f++) c[f] = 4294967296 * t.abs(t.sin(f + 1)) | 0;
                o = o.MD5 = u.extend({
                    _doReset: function() {
                        this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, s) {
                        for (var o = 0; 16 > o; o++) {
                            var a = s + o,
                                u = t[a];
                            t[a] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                        }
                        var o = this._hash.words,
                            a = t[s + 0],
                            u = t[s + 1],
                            f = t[s + 2],
                            h = t[s + 3],
                            l = t[s + 4],
                            d = t[s + 5],
                            p = t[s + 6],
                            g = t[s + 7],
                            y = t[s + 8],
                            v = t[s + 9],
                            m = t[s + 10],
                            S = t[s + 11],
                            b = t[s + 12],
                            w = t[s + 13],
                            _ = t[s + 14],
                            x = t[s + 15],
                            E = o[0],
                            A = o[1],
                            F = o[2],
                            P = o[3],
                            E = e(E, A, F, P, a, 7, c[0]),
                            P = e(P, E, A, F, u, 12, c[1]),
                            F = e(F, P, E, A, f, 17, c[2]),
                            A = e(A, F, P, E, h, 22, c[3]),
                            E = e(E, A, F, P, l, 7, c[4]),
                            P = e(P, E, A, F, d, 12, c[5]),
                            F = e(F, P, E, A, p, 17, c[6]),
                            A = e(A, F, P, E, g, 22, c[7]),
                            E = e(E, A, F, P, y, 7, c[8]),
                            P = e(P, E, A, F, v, 12, c[9]),
                            F = e(F, P, E, A, m, 17, c[10]),
                            A = e(A, F, P, E, S, 22, c[11]),
                            E = e(E, A, F, P, b, 7, c[12]),
                            P = e(P, E, A, F, w, 12, c[13]),
                            F = e(F, P, E, A, _, 17, c[14]),
                            A = e(A, F, P, E, x, 22, c[15]),
                            E = n(E, A, F, P, u, 5, c[16]),
                            P = n(P, E, A, F, p, 9, c[17]),
                            F = n(F, P, E, A, S, 14, c[18]),
                            A = n(A, F, P, E, a, 20, c[19]),
                            E = n(E, A, F, P, d, 5, c[20]),
                            P = n(P, E, A, F, m, 9, c[21]),
                            F = n(F, P, E, A, x, 14, c[22]),
                            A = n(A, F, P, E, l, 20, c[23]),
                            E = n(E, A, F, P, v, 5, c[24]),
                            P = n(P, E, A, F, _, 9, c[25]),
                            F = n(F, P, E, A, h, 14, c[26]),
                            A = n(A, F, P, E, y, 20, c[27]),
                            E = n(E, A, F, P, w, 5, c[28]),
                            P = n(P, E, A, F, f, 9, c[29]),
                            F = n(F, P, E, A, g, 14, c[30]),
                            A = n(A, F, P, E, b, 20, c[31]),
                            E = r(E, A, F, P, d, 4, c[32]),
                            P = r(P, E, A, F, y, 11, c[33]),
                            F = r(F, P, E, A, S, 16, c[34]),
                            A = r(A, F, P, E, _, 23, c[35]),
                            E = r(E, A, F, P, u, 4, c[36]),
                            P = r(P, E, A, F, l, 11, c[37]),
                            F = r(F, P, E, A, g, 16, c[38]),
                            A = r(A, F, P, E, m, 23, c[39]),
                            E = r(E, A, F, P, w, 4, c[40]),
                            P = r(P, E, A, F, a, 11, c[41]),
                            F = r(F, P, E, A, h, 16, c[42]),
                            A = r(A, F, P, E, p, 23, c[43]),
                            E = r(E, A, F, P, v, 4, c[44]),
                            P = r(P, E, A, F, b, 11, c[45]),
                            F = r(F, P, E, A, x, 16, c[46]),
                            A = r(A, F, P, E, f, 23, c[47]),
                            E = i(E, A, F, P, a, 6, c[48]),
                            P = i(P, E, A, F, g, 10, c[49]),
                            F = i(F, P, E, A, _, 15, c[50]),
                            A = i(A, F, P, E, d, 21, c[51]),
                            E = i(E, A, F, P, b, 6, c[52]),
                            P = i(P, E, A, F, h, 10, c[53]),
                            F = i(F, P, E, A, m, 15, c[54]),
                            A = i(A, F, P, E, u, 21, c[55]),
                            E = i(E, A, F, P, y, 6, c[56]),
                            P = i(P, E, A, F, x, 10, c[57]),
                            F = i(F, P, E, A, p, 15, c[58]),
                            A = i(A, F, P, E, w, 21, c[59]),
                            E = i(E, A, F, P, l, 6, c[60]),
                            P = i(P, E, A, F, S, 10, c[61]),
                            F = i(F, P, E, A, f, 15, c[62]),
                            A = i(A, F, P, E, v, 21, c[63]);
                        o[0] = o[0] + E | 0, o[1] = o[1] + A | 0, o[2] = o[2] + F | 0, o[3] = o[3] + P | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            n = e.words,
                            r = 8 * this._nDataBytes,
                            i = 8 * e.sigBytes;
                        n[i >>> 5] |= 128 << 24 - i % 32;
                        var s = t.floor(r / 4294967296);
                        for (n[(i + 64 >>> 9 << 4) + 15] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[(i + 64 >>> 9 << 4) + 14] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e.sigBytes = 4 * (n.length + 1), this._process(), e = this._hash, n = e.words, r = 0; 4 > r; r++) i = n[r], n[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                        return e
                    },
                    clone: function() {
                        var t = u.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                }), s.MD5 = u._createHelper(o), s.HmacMD5 = u._createHmacHelper(o)
            }(Math),
            function() {
                var t = or,
                    e = t.lib,
                    n = e.WordArray,
                    r = e.Hasher,
                    i = [],
                    e = t.algo.SHA1 = r.extend({
                        _doReset: function() {
                            this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = this._hash.words, r = n[0], s = n[1], o = n[2], a = n[3], u = n[4], c = 0; 80 > c; c++) {
                                if (16 > c) i[c] = 0 | t[e + c];
                                else {
                                    var f = i[c - 3] ^ i[c - 8] ^ i[c - 14] ^ i[c - 16];
                                    i[c] = f << 1 | f >>> 31
                                }
                                f = (r << 5 | r >>> 27) + u + i[c], f = 20 > c ? f + ((s & o | ~s & a) + 1518500249) : 40 > c ? f + ((s ^ o ^ a) + 1859775393) : 60 > c ? f + ((s & o | s & a | o & a) - 1894007588) : f + ((s ^ o ^ a) - 899497514), u = a, a = o, o = s << 30 | s >>> 2, s = r, r = f
                            }
                            n[0] = n[0] + r | 0, n[1] = n[1] + s | 0, n[2] = n[2] + o | 0, n[3] = n[3] + a | 0, n[4] = n[4] + u | 0
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                e = t.words,
                                n = 8 * this._nDataBytes,
                                r = 8 * t.sigBytes;
                            return e[r >>> 5] |= 128 << 24 - r % 32, e[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), e[(r + 64 >>> 9 << 4) + 15] = n, t.sigBytes = 4 * e.length, this._process(), this._hash
                        },
                        clone: function() {
                            var t = r.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });
                t.SHA1 = r._createHelper(e), t.HmacSHA1 = r._createHmacHelper(e)
            }(),
            function(t) {
                for (var e = or, n = e.lib, r = n.WordArray, i = n.Hasher, n = e.algo, s = [], o = [], a = function(t) {
                        return 4294967296 * (t - (0 | t)) | 0
                    }, u = 2, c = 0; 64 > c;) {
                    var f;
                    t: {
                        f = u;
                        for (var h = t.sqrt(f), l = 2; l <= h; l++)
                            if (!(f % l)) {
                                f = !1;
                                break t
                            } f = !0
                    }
                    f && (8 > c && (s[c] = a(t.pow(u, .5))), o[c] = a(t.pow(u, 1 / 3)), c++), u++
                }
                var d = [],
                    n = n.SHA256 = i.extend({
                        _doReset: function() {
                            this._hash = new r.init(s.slice(0))
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = this._hash.words, r = n[0], i = n[1], s = n[2], a = n[3], u = n[4], c = n[5], f = n[6], h = n[7], l = 0; 64 > l; l++) {
                                if (16 > l) d[l] = 0 | t[e + l];
                                else {
                                    var p = d[l - 15],
                                        g = d[l - 2];
                                    d[l] = ((p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3) + d[l - 7] + ((g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10) + d[l - 16]
                                }
                                p = h + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & c ^ ~u & f) + o[l] + d[l], g = ((r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)) + (r & i ^ r & s ^ i & s), h = f, f = c, c = u, u = a + p | 0, a = s, s = i, i = r, r = p + g | 0
                            }
                            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + s | 0, n[3] = n[3] + a | 0, n[4] = n[4] + u | 0, n[5] = n[5] + c | 0, n[6] = n[6] + f | 0, n[7] = n[7] + h | 0
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                n = e.words,
                                r = 8 * this._nDataBytes,
                                i = 8 * e.sigBytes;
                            return n[i >>> 5] |= 128 << 24 - i % 32, n[(i + 64 >>> 9 << 4) + 14] = t.floor(r / 4294967296), n[(i + 64 >>> 9 << 4) + 15] = r, e.sigBytes = 4 * n.length, this._process(), this._hash
                        },
                        clone: function() {
                            var t = i.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });
                e.SHA256 = i._createHelper(n), e.HmacSHA256 = i._createHmacHelper(n)
            }(Math),
            function() {
                var t = or,
                    e = t.lib.WordArray,
                    n = t.algo,
                    r = n.SHA256,
                    n = n.SHA224 = r.extend({
                        _doReset: function() {
                            this._hash = new e.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                        },
                        _doFinalize: function() {
                            var t = r._doFinalize.call(this);
                            return t.sigBytes -= 4, t
                        }
                    });
                t.SHA224 = r._createHelper(n), t.HmacSHA224 = r._createHmacHelper(n)
            }(),
            function() {
                function t() {
                    return i.create.apply(i, arguments)
                }
                for (var e = or, n = e.lib.Hasher, r = e.x64, i = r.Word, s = r.WordArray, r = e.algo, o = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)], a = [], u = 0; 80 > u; u++) a[u] = t();
                r = r.SHA512 = n.extend({
                    _doReset: function() {
                        this._hash = new s.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], s = n[2], u = n[3], c = n[4], f = n[5], h = n[6], n = n[7], l = r.high, d = r.low, p = i.high, g = i.low, y = s.high, v = s.low, m = u.high, S = u.low, b = c.high, w = c.low, _ = f.high, x = f.low, E = h.high, A = h.low, F = n.high, P = n.low, O = l, C = d, T = p, j = g, I = y, R = v, D = m, H = S, k = b, N = w, B = _, M = x, V = E, L = A, K = F, U = P, q = 0; 80 > q; q++) {
                            var W = a[q];
                            if (16 > q) var z = W.high = 0 | t[e + 2 * q],
                                J = W.low = 0 | t[e + 2 * q + 1];
                            else {
                                var z = a[q - 15],
                                    J = z.high,
                                    Y = z.low,
                                    z = (J >>> 1 | Y << 31) ^ (J >>> 8 | Y << 24) ^ J >>> 7,
                                    Y = (Y >>> 1 | J << 31) ^ (Y >>> 8 | J << 24) ^ (Y >>> 7 | J << 25),
                                    G = a[q - 2],
                                    J = G.high,
                                    X = G.low,
                                    G = (J >>> 19 | X << 13) ^ (J << 3 | X >>> 29) ^ J >>> 6,
                                    X = (X >>> 19 | J << 13) ^ (X << 3 | J >>> 29) ^ (X >>> 6 | J << 26),
                                    J = a[q - 7],
                                    $ = J.high,
                                    Q = a[q - 16],
                                    Z = Q.high,
                                    Q = Q.low,
                                    J = Y + J.low,
                                    z = z + $ + (J >>> 0 < Y >>> 0 ? 1 : 0),
                                    J = J + X,
                                    z = z + G + (J >>> 0 < X >>> 0 ? 1 : 0),
                                    J = J + Q,
                                    z = z + Z + (J >>> 0 < Q >>> 0 ? 1 : 0);
                                W.high = z, W.low = J
                            }
                            var $ = k & B ^ ~k & V,
                                Q = N & M ^ ~N & L,
                                W = O & T ^ O & I ^ T & I,
                                tt = C & j ^ C & R ^ j & R,
                                Y = (O >>> 28 | C << 4) ^ (O << 30 | C >>> 2) ^ (O << 25 | C >>> 7),
                                G = (C >>> 28 | O << 4) ^ (C << 30 | O >>> 2) ^ (C << 25 | O >>> 7),
                                X = o[q],
                                et = X.high,
                                nt = X.low,
                                X = U + ((N >>> 14 | k << 18) ^ (N >>> 18 | k << 14) ^ (N << 23 | k >>> 9)),
                                Z = K + ((k >>> 14 | N << 18) ^ (k >>> 18 | N << 14) ^ (k << 23 | N >>> 9)) + (X >>> 0 < U >>> 0 ? 1 : 0),
                                X = X + Q,
                                Z = Z + $ + (X >>> 0 < Q >>> 0 ? 1 : 0),
                                X = X + nt,
                                Z = Z + et + (X >>> 0 < nt >>> 0 ? 1 : 0),
                                X = X + J,
                                Z = Z + z + (X >>> 0 < J >>> 0 ? 1 : 0),
                                J = G + tt,
                                W = Y + W + (J >>> 0 < G >>> 0 ? 1 : 0),
                                K = V,
                                U = L,
                                V = B,
                                L = M,
                                B = k,
                                M = N,
                                N = H + X | 0,
                                k = D + Z + (N >>> 0 < H >>> 0 ? 1 : 0) | 0,
                                D = I,
                                H = R,
                                I = T,
                                R = j,
                                T = O,
                                j = C,
                                C = X + J | 0,
                                O = Z + W + (C >>> 0 < X >>> 0 ? 1 : 0) | 0
                        }
                        d = r.low = d + C, r.high = l + O + (d >>> 0 < C >>> 0 ? 1 : 0), g = i.low = g + j, i.high = p + T + (g >>> 0 < j >>> 0 ? 1 : 0), v = s.low = v + R, s.high = y + I + (v >>> 0 < R >>> 0 ? 1 : 0), S = u.low = S + H, u.high = m + D + (S >>> 0 < H >>> 0 ? 1 : 0), w = c.low = w + N, c.high = b + k + (w >>> 0 < N >>> 0 ? 1 : 0), x = f.low = x + M, f.high = _ + B + (x >>> 0 < M >>> 0 ? 1 : 0), A = h.low = A + L, h.high = E + V + (A >>> 0 < L >>> 0 ? 1 : 0), P = n.low = P + U, n.high = F + K + (P >>> 0 < U >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            e = t.words,
                            n = 8 * this._nDataBytes,
                            r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32, e[(r + 128 >>> 10 << 5) + 30] = Math.floor(n / 4294967296), e[(r + 128 >>> 10 << 5) + 31] = n, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32()
                    },
                    clone: function() {
                        var t = n.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    },
                    blockSize: 32
                }), e.SHA512 = n._createHelper(r), e.HmacSHA512 = n._createHmacHelper(r)
            }(),
            function() {
                var t = or,
                    e = t.x64,
                    n = e.Word,
                    r = e.WordArray,
                    e = t.algo,
                    i = e.SHA512,
                    e = e.SHA384 = i.extend({
                        _doReset: function() {
                            this._hash = new r.init([new n.init(3418070365, 3238371032), new n.init(1654270250, 914150663), new n.init(2438529370, 812702999), new n.init(355462360, 4144912697), new n.init(1731405415, 4290775857), new n.init(2394180231, 1750603025), new n.init(3675008525, 1694076839), new n.init(1203062813, 3204075428)])
                        },
                        _doFinalize: function() {
                            var t = i._doFinalize.call(this);
                            return t.sigBytes -= 16, t
                        }
                    });
                t.SHA384 = i._createHelper(e), t.HmacSHA384 = i._createHmacHelper(e)
            }(),
            function() {
                var t = or,
                    e = t.lib,
                    n = e.WordArray,
                    r = e.Hasher,
                    e = t.algo,
                    i = n.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                    s = n.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                    o = n.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                    a = n.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                    u = n.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                    c = n.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                    e = e.RIPEMD160 = r.extend({
                        _doReset: function() {
                            this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(t, e) {
                            for (var n = 0; 16 > n; n++) {
                                var r = e + n,
                                    f = t[r];
                                t[r] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8)
                            }
                            var h, l, d, p, g, y, v, m, S, b, r = this._hash.words,
                                f = u.words,
                                w = c.words,
                                _ = i.words,
                                x = s.words,
                                E = o.words,
                                A = a.words;
                            y = h = r[0], v = l = r[1], m = d = r[2], S = p = r[3], b = g = r[4];
                            for (var F, n = 0; 80 > n; n += 1) F = h + t[e + _[n]] | 0, F = 16 > n ? F + ((l ^ d ^ p) + f[0]) : 32 > n ? F + ((l & d | ~l & p) + f[1]) : 48 > n ? F + (((l | ~d) ^ p) + f[2]) : 64 > n ? F + ((l & p | d & ~p) + f[3]) : F + ((l ^ (d | ~p)) + f[4]), F |= 0, F = F << E[n] | F >>> 32 - E[n], F = F + g | 0, h = g, g = p, p = d << 10 | d >>> 22, d = l, l = F, F = y + t[e + x[n]] | 0, F = 16 > n ? F + ((v ^ (m | ~S)) + w[0]) : 32 > n ? F + ((v & S | m & ~S) + w[1]) : 48 > n ? F + (((v | ~m) ^ S) + w[2]) : 64 > n ? F + ((v & m | ~v & S) + w[3]) : F + ((v ^ m ^ S) + w[4]), F |= 0, F = F << A[n] | F >>> 32 - A[n], F = F + b | 0, y = b, b = S, S = m << 10 | m >>> 22, m = v, v = F;
                            F = r[1] + d + S | 0, r[1] = r[2] + p + b | 0, r[2] = r[3] + g + y | 0, r[3] = r[4] + h + v | 0, r[4] = r[0] + l + m | 0, r[0] = F
                        },
                        _doFinalize: function() {
                            var t = this._data,
                                e = t.words,
                                n = 8 * this._nDataBytes,
                                r = 8 * t.sigBytes;
                            for (e[r >>> 5] |= 128 << 24 - r % 32, e[(r + 64 >>> 9 << 4) + 14] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), t.sigBytes = 4 * (e.length + 1), this._process(), t = this._hash, e = t.words, n = 0; 5 > n; n++) r = e[n], e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                            return t
                        },
                        clone: function() {
                            var t = r.clone.call(this);
                            return t._hash = this._hash.clone(), t
                        }
                    });
                t.RIPEMD160 = r._createHelper(e), t.HmacRIPEMD160 = r._createHmacHelper(e)
            }(Math),
            function() {
                var t = or,
                    e = t.enc.Utf8;
                t.algo.HMAC = t.lib.Base.extend({
                    init: function(t, n) {
                        t = this._hasher = new t.init, "string" == typeof n && (n = e.parse(n));
                        var r = t.blockSize,
                            i = 4 * r;
                        n.sigBytes > i && (n = t.finalize(n)), n.clamp();
                        for (var s = this._oKey = n.clone(), o = this._iKey = n.clone(), a = s.words, u = o.words, c = 0; c < r; c++) a[c] ^= 1549556828, u[c] ^= 909522486;
                        s.sigBytes = o.sigBytes = i, this.reset()
                    },
                    reset: function() {
                        var t = this._hasher;
                        t.reset(), t.update(this._iKey)
                    },
                    update: function(t) {
                        return this._hasher.update(t), this
                    },
                    finalize: function(t) {
                        var e = this._hasher;
                        return t = e.finalize(t), e.reset(), e.finalize(this._oKey.clone().concat(t))
                    }
                })
            }(),
            function() {
                var t = or,
                    e = t.lib,
                    n = e.Base,
                    r = e.WordArray,
                    e = t.algo,
                    i = e.HMAC,
                    s = e.PBKDF2 = n.extend({
                        cfg: n.extend({
                            keySize: 4,
                            hasher: e.SHA1,
                            iterations: 1
                        }),
                        init: function(t) {
                            this.cfg = this.cfg.extend(t)
                        },
                        compute: function(t, e) {
                            for (var n = this.cfg, s = i.create(n.hasher, t), o = r.create(), a = r.create([1]), u = o.words, c = a.words, f = n.keySize, n = n.iterations; u.length < f;) {
                                var h = s.update(e).finalize(a);
                                s.reset();
                                for (var l = h.words, d = l.length, p = h, g = 1; g < n; g++) {
                                    p = s.finalize(p), s.reset();
                                    for (var y = p.words, v = 0; v < d; v++) l[v] ^= y[v]
                                }
                                o.concat(h), c[0]++
                            }
                            return o.sigBytes = 4 * f, o
                        }
                    });
                t.PBKDF2 = function(t, e, n) {
                    return s.create(n).compute(t, e)
                }
            }();
        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
         */
        var ar, ur = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            cr = "=",
            fr = 0xdeadbeefcafe,
            hr = 15715070 == (16777215 & fr);
        hr && "Microsoft Internet Explorer" == rr.appName ? (o.prototype.am = c, ar = 30) : hr && "Netscape" != rr.appName ? (o.prototype.am = u, ar = 26) : (o.prototype.am = f, ar = 28), o.prototype.DB = ar, o.prototype.DM = (1 << ar) - 1, o.prototype.DV = 1 << ar;
        var lr = 52;
        o.prototype.FV = Math.pow(2, lr), o.prototype.F1 = lr - ar, o.prototype.F2 = 2 * ar - lr;
        var dr, pr, gr = "0123456789abcdefghijklmnopqrstuvwxyz",
            yr = new Array;
        for (dr = "0".charCodeAt(0), pr = 0; pr <= 9; ++pr) yr[dr++] = pr;
        for (dr = "a".charCodeAt(0), pr = 10; pr < 36; ++pr) yr[dr++] = pr;
        for (dr = "A".charCodeAt(0), pr = 10; pr < 36; ++pr) yr[dr++] = pr;
        R.prototype.convert = D, R.prototype.revert = H, R.prototype.reduce = k, R.prototype.mulTo = N, R.prototype.sqrTo = B, V.prototype.convert = L, V.prototype.revert = K, V.prototype.reduce = U, V.prototype.mulTo = W, V.prototype.sqrTo = q, o.prototype.copyTo = d, o.prototype.fromInt = p, o.prototype.fromString = y, o.prototype.clamp = v, o.prototype.dlShiftTo = E, o.prototype.drShiftTo = A, o.prototype.lShiftTo = F, o.prototype.rShiftTo = P, o.prototype.subTo = O, o.prototype.multiplyTo = C, o.prototype.squareTo = T, o.prototype.divRemTo = j, o.prototype.invDigit = M, o.prototype.isEven = z, o.prototype.exp = J, o.prototype.toString = m, o.prototype.negate = S, o.prototype.abs = b, o.prototype.compareTo = w, o.prototype.bitLength = x, o.prototype.mod = I, o.prototype.modPowInt = Y, o.ZERO = g(0), o.ONE = g(1), Mt.prototype.convert = Vt, Mt.prototype.revert = Vt, Mt.prototype.mulTo = Lt, Mt.prototype.sqrTo = Kt, zt.prototype.convert = Jt, zt.prototype.revert = Yt, zt.prototype.reduce = Gt, zt.prototype.mulTo = $t, zt.prototype.sqrTo = Xt;
        var vr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
            mr = (1 << 26) / vr[vr.length - 1];
        o.prototype.chunkSize = Z, o.prototype.toRadix = et, o.prototype.fromRadix = nt, o.prototype.fromNumber = rt, o.prototype.bitwiseTo = ut, o.prototype.changeBit = At, o.prototype.addTo = Ct, o.prototype.dMultiply = Nt, o.prototype.dAddOffset = Bt, o.prototype.multiplyLowerTo = qt, o.prototype.multiplyUpperTo = Wt, o.prototype.modInt = te, o.prototype.millerRabin = re, o.prototype.clone = G, o.prototype.intValue = X, o.prototype.byteValue = $, o.prototype.shortValue = Q, o.prototype.signum = tt, o.prototype.toByteArray = it, o.prototype.equals = st, o.prototype.min = ot, o.prototype.max = at, o.prototype.and = ft, o.prototype.or = lt, o.prototype.xor = pt, o.prototype.andNot = yt, o.prototype.not = vt, o.prototype.shiftLeft = mt, o.prototype.shiftRight = St, o.prototype.getLowestSetBit = wt, o.prototype.bitCount = xt, o.prototype.testBit = Et, o.prototype.setBit = Ft, o.prototype.clearBit = Pt, o.prototype.flipBit = Ot, o.prototype.add = Tt, o.prototype.subtract = jt, o.prototype.multiply = It, o.prototype.divide = Dt, o.prototype.remainder = Ht, o.prototype.divideAndRemainder = kt, o.prototype.modPow = Qt, o.prototype.modInverse = ee, o.prototype.pow = Ut, o.prototype.gcd = Zt, o.prototype.isProbablePrime = ne, o.prototype.square = Rt, ie.prototype.init = se, ie.prototype.next = oe;
        var Sr, br, wr, _r = 256;
        if (null == br) {
            br = new Array, wr = 0;
            var xr;
            if (ir.crypto && ir.crypto.getRandomValues) {
                var Er = new Uint8Array(32);
                for (ir.crypto.getRandomValues(Er), xr = 0; xr < 32; ++xr) br[wr++] = Er[xr]
            }
            if ("Netscape" == rr.appName && rr.appVersion < "5" && ir.crypto) {
                var Ar = ir.crypto.random(32);
                for (xr = 0; xr < Ar.length; ++xr) br[wr++] = 255 & Ar.charCodeAt(xr)
            }
            for (; wr < _r;) xr = Math.floor(65536 * Math.random()), br[wr++] = xr >>> 8, br[wr++] = 255 & xr;
            wr = 0, ce()
        }
        le.prototype.nextBytes = he;
        var Fr = 20;
        ve.prototype.doPublic = Se, ve.prototype.setPublic = me, ve.prototype.encrypt = be, ve.prototype.encryptOAEP = we, ve.prototype.type = "RSA";
        var Fr = 20;
        ve.prototype.doPrivate = Oe, ve.prototype.setPrivate = Ae, ve.prototype.setPrivateEx = Fe, ve.prototype.generate = Pe, ve.prototype.decrypt = Ce, ve.prototype.decryptOAEP = Te, je.prototype.equals = Ie, je.prototype.toBigInteger = Re, je.prototype.negate = De, je.prototype.add = He, je.prototype.subtract = ke, je.prototype.multiply = Ne, je.prototype.square = Be, je.prototype.divide = Me, Ve.prototype.getX = Le, Ve.prototype.getY = Ke, Ve.prototype.equals = Ue, Ve.prototype.isInfinity = qe, Ve.prototype.negate = We, Ve.prototype.add = ze, Ve.prototype.twice = Je, Ve.prototype.multiply = Ye, Ve.prototype.multiplyTwo = Ge, Xe.prototype.getQ = $e, Xe.prototype.getA = Qe, Xe.prototype.getB = Ze, Xe.prototype.equals = tn, Xe.prototype.getInfinity = en, Xe.prototype.fromBigInteger = nn, Xe.prototype.decodePointHex = rn,
            /*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
             */
            je.prototype.getByteLength = function() {
                return Math.floor((this.toBigInteger().bitLength() + 7) / 8)
            }, Ve.prototype.getEncoded = function(t) {
                var e = function(t, e) {
                        var n = t.toByteArrayUnsigned();
                        if (e < n.length) n = n.slice(n.length - e);
                        else
                            for (; e > n.length;) n.unshift(0);
                        return n
                    },
                    n = this.getX().toBigInteger(),
                    r = this.getY().toBigInteger(),
                    i = e(n, 32);
                return t ? r.isEven() ? i.unshift(2) : i.unshift(3) : (i.unshift(4), i = i.concat(e(r, 32))), i
            }, Ve.decodeFrom = function(t, e) {
                var n = (e[0], e.length - 1),
                    r = e.slice(1, 1 + n / 2),
                    i = e.slice(1 + n / 2, 1 + n);
                r.unshift(0), i.unshift(0);
                var s = new o(r),
                    a = new o(i);
                return new Ve(t, t.fromBigInteger(s), t.fromBigInteger(a))
            }, Ve.decodeFromHex = function(t, e) {
                var n = (e.substr(0, 2), e.length - 2),
                    r = e.substr(2, n / 2),
                    i = e.substr(2 + n / 2, n / 2),
                    s = new o(r, 16),
                    a = new o(i, 16);
                return new Ve(t, t.fromBigInteger(s), t.fromBigInteger(a))
            }, Ve.prototype.add2D = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                if (this.x.equals(t.x)) return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
                var e = t.x.subtract(this.x),
                    n = t.y.subtract(this.y),
                    r = n.divide(e),
                    i = r.square().subtract(this.x).subtract(t.x),
                    s = r.multiply(this.x.subtract(i)).subtract(this.y);
                return new Ve(this.curve, i, s)
            }, Ve.prototype.twice2D = function() {
                if (this.isInfinity()) return this;
                if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                var t = this.curve.fromBigInteger(o.valueOf(2)),
                    e = this.curve.fromBigInteger(o.valueOf(3)),
                    n = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)),
                    r = n.square().subtract(this.x.multiply(t)),
                    i = n.multiply(this.x.subtract(r)).subtract(this.y);
                return new Ve(this.curve, r, i)
            }, Ve.prototype.multiply2D = function(t) {
                if (this.isInfinity()) return this;
                if (0 == t.signum()) return this.curve.getInfinity();
                var e, n = t,
                    r = n.multiply(new o("3")),
                    i = this.negate(),
                    s = this;
                for (e = r.bitLength() - 2; e > 0; --e) {
                    s = s.twice();
                    var a = r.testBit(e),
                        u = n.testBit(e);
                    a != u && (s = s.add2D(a ? this : i))
                }
                return s
            }, Ve.prototype.isOnCurve = function() {
                var t = this.getX().toBigInteger(),
                    e = this.getY().toBigInteger(),
                    n = this.curve.getA().toBigInteger(),
                    r = this.curve.getB().toBigInteger(),
                    i = this.curve.getQ(),
                    s = e.multiply(e).mod(i),
                    o = t.multiply(t).multiply(t).add(n.multiply(t)).add(r).mod(i);
                return s.equals(o)
            }, Ve.prototype.toString = function() {
                return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")"
            }, Ve.prototype.validate = function() {
                var t = this.curve.getQ();
                if (this.isInfinity()) throw new Error("Point is at infinity.");
                var e = this.getX().toBigInteger(),
                    n = this.getY().toBigInteger();
                if (e.compareTo(o.ONE) < 0 || e.compareTo(t.subtract(o.ONE)) > 0) throw new Error("x coordinate out of bounds");
                if (n.compareTo(o.ONE) < 0 || n.compareTo(t.subtract(o.ONE)) > 0) throw new Error("y coordinate out of bounds");
                if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
                if (this.multiply(t).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
                return !0
            };
        /*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
         */
        var Pr = function() {
            function t(t, e, n) {
                return e ? o[e] : String.fromCharCode(parseInt(n, 16))
            }
            var e = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",
                n = '(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',
                r = '(?:"' + n + '*")',
                i = new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|" + e + "|" + r + ")", "g"),
                s = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"),
                o = {
                    '"': '"',
                    "/": "/",
                    "\\": "\\",
                    b: "\b",
                    f: "\f",
                    n: "\n",
                    r: "\r",
                    t: "\t"
                },
                a = new String(""),
                u = "\\",
                c = ({
                    "{": Object,
                    "[": Array
                }, Object.hasOwnProperty);
            return function(e, n) {
                var r, o = e.match(i),
                    f = o[0],
                    h = !1;
                "{" === f ? r = {} : "[" === f ? r = [] : (r = [], h = !0);
                for (var l, d = [r], p = 1 - h, g = o.length; p < g; ++p) {
                    f = o[p];
                    var y;
                    switch (f.charCodeAt(0)) {
                        default:
                            y = d[0], y[l || y.length] = +f, l = void 0;
                            break;
                        case 34:
                            if (f = f.substring(1, f.length - 1), f.indexOf(u) !== -1 && (f = f.replace(s, t)), y = d[0], !l) {
                                if (!(y instanceof Array)) {
                                    l = f || a;
                                    break
                                }
                                l = y.length
                            }
                            y[l] = f, l = void 0;
                            break;
                        case 91:
                            y = d[0], d.unshift(y[l || y.length] = []), l = void 0;
                            break;
                        case 93:
                            d.shift();
                            break;
                        case 102:
                            y = d[0], y[l || y.length] = !1, l = void 0;
                            break;
                        case 110:
                            y = d[0], y[l || y.length] = null, l = void 0;
                            break;
                        case 116:
                            y = d[0], y[l || y.length] = !0, l = void 0;
                            break;
                        case 123:
                            y = d[0], d.unshift(y[l || y.length] = {}), l = void 0;
                            break;
                        case 125:
                            d.shift()
                    }
                }
                if (h) {
                    if (1 !== d.length) throw new Error;
                    r = r[0]
                } else if (d.length) throw new Error;
                if (n) {
                    var v = function(t, e) {
                        var r = t[e];
                        if (r && "object" == typeof r) {
                            var i = null;
                            for (var s in r)
                                if (c.call(r, s) && r !== t) {
                                    var o = v(r, s);
                                    void 0 !== o ? r[s] = o : (i || (i = []), i.push(s))
                                } if (i)
                                for (var a = i.length; --a >= 0;) delete r[i[a]]
                        }
                        return n.call(t, e, r)
                    };
                    r = v({
                        "": r
                    }, "")
                }
                return r
            }
        }();
        /*! asn1-1.0.10.js (c) 2013-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.asn1 && Cr.asn1 || (Cr.asn1 = {}), Cr.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e), e
            }, this.bigIntToMinTwosComplementsHex = function(t) {
                var e = t.toString(16);
                if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                else {
                    var n = e.substr(1),
                        r = n.length;
                    r % 2 == 1 ? r += 1 : e.match(/^[0-7]/) || (r += 2);
                    for (var i = "", s = 0; s < r; s++) i += "f";
                    var a = new o(i, 16),
                        u = a.xor(t).add(o.ONE);
                    e = u.toString(16).replace(/^-/, "")
                }
                return e
            }, this.getPEMStringFromHex = function(t, e) {
                var n = _n(t),
                    r = n.replace(/(.{64})/g, "$1\r\n");
                return r = r.replace(/\r\n$/, ""), "-----BEGIN " + e + "-----\r\n" + r + "\r\n-----END " + e + "-----\r\n"
            }, this.newObject = function(t) {
                var e = Cr.asn1,
                    n = Object.keys(t);
                if (1 != n.length) throw "key of param shall be only one.";
                var r = n[0];
                if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + r + ":") == -1) throw "undefined key: " + r;
                if ("bool" == r) return new e.DERBoolean(t[r]);
                if ("int" == r) return new e.DERInteger(t[r]);
                if ("bitstr" == r) return new e.DERBitString(t[r]);
                if ("octstr" == r) return new e.DEROctetString(t[r]);
                if ("null" == r) return new e.DERNull(t[r]);
                if ("oid" == r) return new e.DERObjectIdentifier(t[r]);
                if ("enum" == r) return new e.DEREnumerated(t[r]);
                if ("utf8str" == r) return new e.DERUTF8String(t[r]);
                if ("numstr" == r) return new e.DERNumericString(t[r]);
                if ("prnstr" == r) return new e.DERPrintableString(t[r]);
                if ("telstr" == r) return new e.DERTeletexString(t[r]);
                if ("ia5str" == r) return new e.DERIA5String(t[r]);
                if ("utctime" == r) return new e.DERUTCTime(t[r]);
                if ("gentime" == r) return new e.DERGeneralizedTime(t[r]);
                if ("seq" == r) {
                    for (var i = t[r], s = [], o = 0; o < i.length; o++) {
                        var a = e.ASN1Util.newObject(i[o]);
                        s.push(a)
                    }
                    return new e.DERSequence({
                        array: s
                    })
                }
                if ("set" == r) {
                    for (var i = t[r], s = [], o = 0; o < i.length; o++) {
                        var a = e.ASN1Util.newObject(i[o]);
                        s.push(a)
                    }
                    return new e.DERSet({
                        array: s
                    })
                }
                if ("tag" == r) {
                    var u = t[r];
                    if ("[object Array]" === Object.prototype.toString.call(u) && 3 == u.length) {
                        var c = e.ASN1Util.newObject(u[2]);
                        return new e.DERTaggedObject({
                            tag: u[0],
                            explicit: u[1],
                            obj: c
                        })
                    }
                    var f = {};
                    if (void 0 !== u.explicit && (f.explicit = u.explicit), void 0 !== u.tag && (f.tag = u.tag), void 0 === u.obj) throw "obj shall be specified for 'tag'.";
                    return f.obj = e.ASN1Util.newObject(u.obj), new e.DERTaggedObject(f)
                }
            }, this.jsonToASN1HEX = function(t) {
                var e = this.newObject(t);
                return e.getEncodedHex()
            }
        }, Cr.asn1.ASN1Util.oidHexToInt = function(t) {
            for (var e = "", n = parseInt(t.substr(0, 2), 16), r = Math.floor(n / 40), i = n % 40, e = r + "." + i, s = "", a = 2; a < t.length; a += 2) {
                var u = parseInt(t.substr(a, 2), 16),
                    c = ("00000000" + u.toString(2)).slice(-8);
                if (s += c.substr(1, 7), "0" == c.substr(0, 1)) {
                    var f = new o(s, 2);
                    e = e + "." + f.toString(10), s = ""
                }
            }
            return e
        }, Cr.asn1.ASN1Util.oidIntToHex = function(t) {
            var e = function(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e
                },
                n = function(t) {
                    var n = "",
                        r = new o(t, 10),
                        i = r.toString(2),
                        s = 7 - i.length % 7;
                    7 == s && (s = 0);
                    for (var a = "", u = 0; u < s; u++) a += "0";
                    i = a + i;
                    for (var u = 0; u < i.length - 1; u += 7) {
                        var c = i.substr(u, 7);
                        u != i.length - 7 && (c = "1" + c), n += e(parseInt(c, 2))
                    }
                    return n
                };
            if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
            var r = "",
                i = t.split("."),
                s = 40 * parseInt(i[0]) + parseInt(i[1]);
            r += e(s), i.splice(0, 2);
            for (var a = 0; a < i.length; a++) r += n(i[a]);
            return r
        }, Cr.asn1.ASN1Object = function() {
            var t = "";
            this.getLengthHexFromValue = function() {
                if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
                var e = this.hV.length / 2,
                    n = e.toString(16);
                if (n.length % 2 == 1 && (n = "0" + n), e < 128) return n;
                var r = n.length / 2;
                if (r > 15) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                var i = 128 + r;
                return i.toString(16) + n
            }, this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
            }, this.getValueHex = function() {
                return this.getEncodedHex(), this.hV
            }, this.getFreshValueHex = function() {
                return ""
            }
        }, Cr.asn1.DERAbstractString = function(t) {
            Cr.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function() {
                return this.s
            }, this.setString = function(t) {
                this.hTLV = null, this.isModified = !0, this.s = t, this.hV = un(this.s)
            }, this.setStringHex = function(t) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
        }, sr.lang.extend(Cr.asn1.DERAbstractString, Cr.asn1.ASN1Object), Cr.asn1.DERAbstractTime = function(t) {
            Cr.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function(t) {
                utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                var e = new Date(utc);
                return e
            }, this.formatDate = function(t, e, n) {
                var r = this.zeroPadding,
                    i = this.localDateToUTC(t),
                    s = String(i.getFullYear());
                "utc" == e && (s = s.substr(2, 2));
                var o = r(String(i.getMonth() + 1), 2),
                    a = r(String(i.getDate()), 2),
                    u = r(String(i.getHours()), 2),
                    c = r(String(i.getMinutes()), 2),
                    f = r(String(i.getSeconds()), 2),
                    h = s + o + a + u + c + f;
                if (n === !0) {
                    var l = i.getMilliseconds();
                    if (0 != l) {
                        var d = r(String(l), 3);
                        d = d.replace(/[0]+$/, ""), h = h + "." + d
                    }
                }
                return h + "Z"
            }, this.zeroPadding = function(t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
            }, this.getString = function() {
                return this.s
            }, this.setString = function(t) {
                this.hTLV = null, this.isModified = !0, this.s = t, this.hV = un(t)
            }, this.setByDateValue = function(t, e, n, r, i, s) {
                var o = new Date(Date.UTC(t, e - 1, n, r, i, s, 0));
                this.setByDate(o)
            }, this.getFreshValueHex = function() {
                return this.hV
            }
        }, sr.lang.extend(Cr.asn1.DERAbstractTime, Cr.asn1.ASN1Object), Cr.asn1.DERAbstractStructured = function(t) {
            Cr.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function(t) {
                this.hTLV = null, this.isModified = !0, this.asn1Array = t
            }, this.appendASN1Object = function(t) {
                this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
            }, this.asn1Array = new Array, "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
        }, sr.lang.extend(Cr.asn1.DERAbstractStructured, Cr.asn1.ASN1Object), Cr.asn1.DERBoolean = function() {
            Cr.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
        }, sr.lang.extend(Cr.asn1.DERBoolean, Cr.asn1.ASN1Object), Cr.asn1.DERInteger = function(t) {
            Cr.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                this.hTLV = null, this.isModified = !0, this.hV = Cr.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }, this.setByInteger = function(t) {
                var e = new o(String(t), 10);
                this.setByBigInteger(e)
            }, this.setValueHex = function(t) {
                this.hV = t
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
        }, sr.lang.extend(Cr.asn1.DERInteger, Cr.asn1.ASN1Object), Cr.asn1.DERBitString = function(t) {
            Cr.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
                this.hTLV = null, this.isModified = !0, this.hV = t
            }, this.setUnusedBitsAndHexValue = function(t, e) {
                if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                var n = "0" + t;
                this.hTLV = null, this.isModified = !0, this.hV = n + e
            }, this.setByBinaryString = function(t) {
                t = t.replace(/0+$/, "");
                var e = 8 - t.length % 8;
                8 == e && (e = 0);
                for (var n = 0; n <= e; n++) t += "0";
                for (var r = "", n = 0; n < t.length - 1; n += 8) {
                    var i = t.substr(n, 8),
                        s = parseInt(i, 2).toString(16);
                    1 == s.length && (s = "0" + s), r += s
                }
                this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
            }, this.setByBooleanArray = function(t) {
                for (var e = "", n = 0; n < t.length; n++) e += 1 == t[n] ? "1" : "0";
                this.setByBinaryString(e)
            }, this.newFalseArray = function(t) {
                for (var e = new Array(t), n = 0; n < t; n++) e[n] = !1;
                return e
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
        }, sr.lang.extend(Cr.asn1.DERBitString, Cr.asn1.ASN1Object), Cr.asn1.DEROctetString = function(t) {
            Cr.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
        }, sr.lang.extend(Cr.asn1.DEROctetString, Cr.asn1.DERAbstractString), Cr.asn1.DERNull = function() {
            Cr.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
        }, sr.lang.extend(Cr.asn1.DERNull, Cr.asn1.ASN1Object), Cr.asn1.DERObjectIdentifier = function(t) {
            var e = function(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e
                },
                n = function(t) {
                    var n = "",
                        r = new o(t, 10),
                        i = r.toString(2),
                        s = 7 - i.length % 7;
                    7 == s && (s = 0);
                    for (var a = "", u = 0; u < s; u++) a += "0";
                    i = a + i;
                    for (var u = 0; u < i.length - 1; u += 7) {
                        var c = i.substr(u, 7);
                        u != i.length - 7 && (c = "1" + c), n += e(parseInt(c, 2))
                    }
                    return n
                };
            Cr.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
            }, this.setValueOidString = function(t) {
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var r = "",
                    i = t.split("."),
                    s = 40 * parseInt(i[0]) + parseInt(i[1]);
                r += e(s), i.splice(0, 2);
                for (var o = 0; o < i.length; o++) r += n(i[o]);
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r
            }, this.setValueName = function(t) {
                if ("undefined" == typeof Cr.asn1.x509.OID.name2oidList[t]) throw "DERObjectIdentifier oidName undefined: " + t;
                var e = Cr.asn1.x509.OID.name2oidList[t];
                this.setValueOidString(e)
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof t && ("string" == typeof t && t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : void 0 !== Cr.asn1.x509.OID.name2oidList[t] ? this.setValueOidString(Cr.asn1.x509.OID.name2oidList[t]) : "undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
        }, sr.lang.extend(Cr.asn1.DERObjectIdentifier, Cr.asn1.ASN1Object), Cr.asn1.DEREnumerated = function(t) {
            Cr.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                this.hTLV = null, this.isModified = !0, this.hV = Cr.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }, this.setByInteger = function(t) {
                var e = new o(String(t), 10);
                this.setByBigInteger(e)
            }, this.setValueHex = function(t) {
                this.hV = t
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
        }, sr.lang.extend(Cr.asn1.DEREnumerated, Cr.asn1.ASN1Object), Cr.asn1.DERUTF8String = function(t) {
            Cr.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
        }, sr.lang.extend(Cr.asn1.DERUTF8String, Cr.asn1.DERAbstractString), Cr.asn1.DERNumericString = function(t) {
            Cr.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
        }, sr.lang.extend(Cr.asn1.DERNumericString, Cr.asn1.DERAbstractString), Cr.asn1.DERPrintableString = function(t) {
            Cr.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
        }, sr.lang.extend(Cr.asn1.DERPrintableString, Cr.asn1.DERAbstractString), Cr.asn1.DERTeletexString = function(t) {
            Cr.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
        }, sr.lang.extend(Cr.asn1.DERTeletexString, Cr.asn1.DERAbstractString), Cr.asn1.DERIA5String = function(t) {
            Cr.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
        }, sr.lang.extend(Cr.asn1.DERIA5String, Cr.asn1.DERAbstractString), Cr.asn1.DERUTCTime = function(t) {
            Cr.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = un(this.s)
            }, this.getFreshValueHex = function() {
                return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = un(this.s)), this.hV
            }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        }, sr.lang.extend(Cr.asn1.DERUTCTime, Cr.asn1.DERAbstractTime), Cr.asn1.DERGeneralizedTime = function(t) {
            Cr.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) {
                this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = un(this.s)
            }, this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = un(this.s)), this.hV
            }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), t.millis === !0 && (this.withMillis = !0))
        }, sr.lang.extend(Cr.asn1.DERGeneralizedTime, Cr.asn1.DERAbstractTime), Cr.asn1.DERSequence = function(t) {
            Cr.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                    var n = this.asn1Array[e];
                    t += n.getEncodedHex()
                }
                return this.hV = t, this.hV
            }
        }, sr.lang.extend(Cr.asn1.DERSequence, Cr.asn1.DERAbstractStructured), Cr.asn1.DERSet = function(t) {
            Cr.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                    var n = this.asn1Array[e];
                    t.push(n.getEncodedHex())
                }
                return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
            }, "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
        }, sr.lang.extend(Cr.asn1.DERSet, Cr.asn1.DERAbstractStructured), Cr.asn1.DERTaggedObject = function(t) {
            Cr.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, n) {
                this.hT = e, this.isExplicit = t, this.asn1Object = n, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag), "undefined" != typeof t.explicit && (this.isExplicit = t.explicit), "undefined" != typeof t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }, sr.lang.extend(Cr.asn1.DERTaggedObject, Cr.asn1.ASN1Object);
        /*! asn1hex-1.1.6.js (c) 2012-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        var Or = new function() {
            this.getByteLengthOfL_AtObj = function(t, e) {
                if ("8" != t.substring(e + 2, e + 3)) return 1;
                var n = parseInt(t.substring(e + 3, e + 4));
                return 0 == n ? -1 : 0 < n && n < 10 ? n + 1 : -2
            }, this.getHexOfL_AtObj = function(t, e) {
                var n = this.getByteLengthOfL_AtObj(t, e);
                return n < 1 ? "" : t.substring(e + 2, e + 2 + 2 * n)
            }, this.getIntOfL_AtObj = function(t, e) {
                var n = this.getHexOfL_AtObj(t, e);
                if ("" == n) return -1;
                var r;
                return r = parseInt(n.substring(0, 1)) < 8 ? new o(n, 16) : new o(n.substring(2), 16), r.intValue()
            }, this.getStartPosOfV_AtObj = function(t, e) {
                var n = this.getByteLengthOfL_AtObj(t, e);
                return n < 0 ? n : e + 2 * (n + 1)
            }, this.getHexOfV_AtObj = function(t, e) {
                var n = this.getStartPosOfV_AtObj(t, e),
                    r = this.getIntOfL_AtObj(t, e);
                return t.substring(n, n + 2 * r)
            }, this.getHexOfTLV_AtObj = function(t, e) {
                var n = t.substr(e, 2),
                    r = this.getHexOfL_AtObj(t, e),
                    i = this.getHexOfV_AtObj(t, e);
                return n + r + i
            }, this.getPosOfNextSibling_AtObj = function(t, e) {
                var n = this.getStartPosOfV_AtObj(t, e),
                    r = this.getIntOfL_AtObj(t, e);
                return n + 2 * r
            }, this.getPosArrayOfChildren_AtObj = function(t, e) {
                var n = new Array,
                    r = this.getStartPosOfV_AtObj(t, e);
                n.push(r);
                for (var i = this.getIntOfL_AtObj(t, e), s = r, o = 0;;) {
                    var a = this.getPosOfNextSibling_AtObj(t, s);
                    if (null == a || a - r >= 2 * i) break;
                    if (o >= 200) break;
                    n.push(a), s = a, o++
                }
                return n
            }, this.getNthChildIndex_AtObj = function(t, e, n) {
                var r = this.getPosArrayOfChildren_AtObj(t, e);
                return r[n]
            }, this.getDecendantIndexByNthList = function(t, e, n) {
                if (0 == n.length) return e;
                var r = n.shift(),
                    i = this.getPosArrayOfChildren_AtObj(t, e);
                return this.getDecendantIndexByNthList(t, i[r], n)
            }, this.getDecendantHexTLVByNthList = function(t, e, n) {
                var r = this.getDecendantIndexByNthList(t, e, n);
                return this.getHexOfTLV_AtObj(t, r)
            }, this.getDecendantHexVByNthList = function(t, e, n) {
                var r = this.getDecendantIndexByNthList(t, e, n);
                return this.getHexOfV_AtObj(t, r)
            }
        };
        Or.getVbyList = function(t, e, n, r) {
                var i = this.getDecendantIndexByNthList(t, e, n);
                if (void 0 === i) throw "can't find nthList object";
                if (void 0 !== r && t.substr(i, 2) != r) throw "checking tag doesn't match: " + t.substr(i, 2) + "!=" + r;
                return this.getHexOfV_AtObj(t, i)
            }, Or.hextooidstr = function(t) {
                var e = function(t, e) {
                        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                    },
                    n = [],
                    r = t.substr(0, 2),
                    i = parseInt(r, 16);
                n[0] = new String(Math.floor(i / 40)), n[1] = new String(i % 40);
                for (var s = t.substr(2), o = [], a = 0; a < s.length / 2; a++) o.push(parseInt(s.substr(2 * a, 2), 16));
                for (var u = [], c = "", a = 0; a < o.length; a++) 128 & o[a] ? c += e((127 & o[a]).toString(2), 7) : (c += e((127 & o[a]).toString(2), 7), u.push(new String(parseInt(c, 2))), c = "");
                var f = n.join(".");
                return u.length > 0 && (f = f + "." + u.join(".")), f
            }, Or.dump = function(t, e, n, r) {
                var i = function(t, e) {
                    if (t.length <= 2 * e) return t;
                    var n = t.substr(0, e) + "..(total " + t.length / 2 + "bytes).." + t.substr(t.length - e, e);
                    return n
                };
                void 0 === e && (e = {
                    ommit_long_octet: 32
                }), void 0 === n && (n = 0), void 0 === r && (r = "");
                var s = e.ommit_long_octet;
                if ("01" == t.substr(n, 2)) {
                    var o = Or.getHexOfV_AtObj(t, n);
                    return "00" == o ? r + "BOOLEAN FALSE\n" : r + "BOOLEAN TRUE\n"
                }
                if ("02" == t.substr(n, 2)) {
                    var o = Or.getHexOfV_AtObj(t, n);
                    return r + "INTEGER " + i(o, s) + "\n"
                }
                if ("03" == t.substr(n, 2)) {
                    var o = Or.getHexOfV_AtObj(t, n);
                    return r + "BITSTRING " + i(o, s) + "\n"
                }
                if ("04" == t.substr(n, 2)) {
                    var o = Or.getHexOfV_AtObj(t, n);
                    if (Or.isASN1HEX(o)) {
                        var a = r + "OCTETSTRING, encapsulates\n";
                        return a += Or.dump(o, e, 0, r + "  ")
                    }
                    return r + "OCTETSTRING " + i(o, s) + "\n"
                }
                if ("05" == t.substr(n, 2)) return r + "NULL\n";
                if ("06" == t.substr(n, 2)) {
                    var u = Or.getHexOfV_AtObj(t, n),
                        c = Cr.asn1.ASN1Util.oidHexToInt(u),
                        f = Cr.asn1.x509.OID.oid2name(c),
                        h = c.replace(/\./g, " ");
                    return "" != f ? r + "ObjectIdentifier " + f + " (" + h + ")\n" : r + "ObjectIdentifier (" + h + ")\n"
                }
                if ("0c" == t.substr(n, 2)) return r + "UTF8String '" + Sn(Or.getHexOfV_AtObj(t, n)) + "'\n";
                if ("13" == t.substr(n, 2)) return r + "PrintableString '" + Sn(Or.getHexOfV_AtObj(t, n)) + "'\n";
                if ("14" == t.substr(n, 2)) return r + "TeletexString '" + Sn(Or.getHexOfV_AtObj(t, n)) + "'\n";
                if ("16" == t.substr(n, 2)) return r + "IA5String '" + Sn(Or.getHexOfV_AtObj(t, n)) + "'\n";
                if ("17" == t.substr(n, 2)) return r + "UTCTime " + Sn(Or.getHexOfV_AtObj(t, n)) + "\n";
                if ("18" == t.substr(n, 2)) return r + "GeneralizedTime " + Sn(Or.getHexOfV_AtObj(t, n)) + "\n";
                if ("30" == t.substr(n, 2)) {
                    if ("3000" == t.substr(n, 4)) return r + "SEQUENCE {}\n";
                    var a = r + "SEQUENCE\n",
                        l = Or.getPosArrayOfChildren_AtObj(t, n),
                        d = e;
                    if ((2 == l.length || 3 == l.length) && "06" == t.substr(l[0], 2) && "04" == t.substr(l[l.length - 1], 2)) {
                        var p = Or.getHexOfV_AtObj(t, l[0]),
                            c = Cr.asn1.ASN1Util.oidHexToInt(p),
                            f = Cr.asn1.x509.OID.oid2name(c),
                            g = JSON.parse(JSON.stringify(e));
                        g.x509ExtName = f, d = g
                    }
                    for (var y = 0; y < l.length; y++) a += Or.dump(t, d, l[y], r + "  ");
                    return a
                }
                if ("31" == t.substr(n, 2)) {
                    for (var a = r + "SET\n", l = Or.getPosArrayOfChildren_AtObj(t, n), y = 0; y < l.length; y++) a += Or.dump(t, e, l[y], r + "  ");
                    return a
                }
                var v = parseInt(t.substr(n, 2), 16);
                if (0 != (128 & v)) {
                    var m = 31 & v;
                    if (0 != (32 & v)) {
                        for (var a = r + "[" + m + "]\n", l = Or.getPosArrayOfChildren_AtObj(t, n), y = 0; y < l.length; y++) a += Or.dump(t, e, l[y], r + "  ");
                        return a
                    }
                    var o = Or.getHexOfV_AtObj(t, n);
                    "68747470" == o.substr(0, 8) && (o = Sn(o)), "subjectAltName" === e.x509ExtName && 2 == m && (o = Sn(o));
                    var a = r + "[" + m + "] " + o + "\n";
                    return a
                }
                return r + "UNKNOWN(" + t.substr(n, 2) + ") " + Or.getHexOfV_AtObj(t, n) + "\n"
            }, Or.isASN1HEX = function(t) {
                if (t.length % 2 == 1) return !1;
                var e = Or.getIntOfL_AtObj(t, 0),
                    n = t.substr(0, 2),
                    r = Or.getHexOfL_AtObj(t, 0),
                    i = t.length - n.length - r.length;
                return i == 2 * e
            },
            /*! asn1x509-1.0.14.js (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.asn1 && Cr.asn1 || (Cr.asn1 = {}), "undefined" != typeof Cr.asn1.x509 && Cr.asn1.x509 || (Cr.asn1.x509 = {}), Cr.asn1.x509.Certificate = function(t) {
                Cr.asn1.x509.Certificate.superclass.constructor.call(this);
                this.setRsaPrvKeyByPEMandPass = function(t, e) {
                    var n = Rr.getDecryptedKeyHex(t, e),
                        r = new ve;
                    r.readPrivateKeyFromASN1HexString(n), this.prvKey = r
                }, this.sign = function() {
                    this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg, sig = new Cr.crypto.Signature({
                        alg: "SHA1withRSA"
                    }), sig.init(this.prvKey), sig.updateHex(this.asn1TBSCert.getEncodedHex()), this.hexSig = sig.sign(), this.asn1Sig = new Cr.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var t = new Cr.asn1.DERSequence({
                        array: [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = t.getEncodedHex(), this.isModified = !1
                }, this.setSignatureHex = function(t) {
                    this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg, this.hexSig = t, this.asn1Sig = new Cr.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var e = new Cr.asn1.DERSequence({
                        array: [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = e.getEncodedHex(), this.isModified = !1
                }, this.getEncodedHex = function() {
                    if (0 == this.isModified && null != this.hTLV) return this.hTLV;
                    throw "not signed yet"
                }, this.getPEMString = function() {
                    var t = this.getEncodedHex(),
                        e = or.enc.Hex.parse(t),
                        n = or.enc.Base64.stringify(e),
                        r = n.replace(/(.{64})/g, "$1\r\n");
                    return "-----BEGIN CERTIFICATE-----\r\n" + r + "\r\n-----END CERTIFICATE-----\r\n"
                }, "undefined" != typeof t && ("undefined" != typeof t.tbscertobj && (this.asn1TBSCert = t.tbscertobj), "undefined" != typeof t.prvkeyobj ? this.prvKey = t.prvkeyobj : "undefined" != typeof t.rsaprvkey ? this.prvKey = t.rsaprvkey : "undefined" != typeof t.rsaprvpem && "undefined" != typeof t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas))
            }, sr.lang.extend(Cr.asn1.x509.Certificate, Cr.asn1.ASN1Object), Cr.asn1.x509.TBSCertificate = function(t) {
                Cr.asn1.x509.TBSCertificate.superclass.constructor.call(this), this._initialize = function() {
                    this.asn1Array = new Array, this.asn1Version = new Cr.asn1.DERTaggedObject({
                        obj: new Cr.asn1.DERInteger({
                            int: 2
                        })
                    }), this.asn1SerialNumber = null, this.asn1SignatureAlg = null, this.asn1Issuer = null, this.asn1NotBefore = null, this.asn1NotAfter = null, this.asn1Subject = null, this.asn1SubjPKey = null, this.extensionsArray = new Array
                }, this.setSerialNumberByParam = function(t) {
                    this.asn1SerialNumber = new Cr.asn1.DERInteger(t)
                }, this.setSignatureAlgByParam = function(t) {
                    this.asn1SignatureAlg = new Cr.asn1.x509.AlgorithmIdentifier(t)
                }, this.setIssuerByParam = function(t) {
                    this.asn1Issuer = new Cr.asn1.x509.X500Name(t)
                }, this.setNotBeforeByParam = function(t) {
                    this.asn1NotBefore = new Cr.asn1.x509.Time(t)
                }, this.setNotAfterByParam = function(t) {
                    this.asn1NotAfter = new Cr.asn1.x509.Time(t)
                }, this.setSubjectByParam = function(t) {
                    this.asn1Subject = new Cr.asn1.x509.X500Name(t)
                }, this.setSubjectPublicKeyByParam = function(t) {
                    this.asn1SubjPKey = new Cr.asn1.x509.SubjectPublicKeyInfo(t)
                }, this.setSubjectPublicKeyByGetKey = function(t) {
                    var e = Dr.getKey(t);
                    this.asn1SubjPKey = new Cr.asn1.x509.SubjectPublicKeyInfo(e)
                }, this.appendExtension = function(t) {
                    this.extensionsArray.push(t)
                }, this.appendExtensionByName = function(t, e) {
                    if ("basicconstraints" == t.toLowerCase()) {
                        var n = new Cr.asn1.x509.BasicConstraints(e);
                        this.appendExtension(n)
                    } else if ("keyusage" == t.toLowerCase()) {
                        var n = new Cr.asn1.x509.KeyUsage(e);
                        this.appendExtension(n)
                    } else if ("crldistributionpoints" == t.toLowerCase()) {
                        var n = new Cr.asn1.x509.CRLDistributionPoints(e);
                        this.appendExtension(n)
                    } else if ("extkeyusage" == t.toLowerCase()) {
                        var n = new Cr.asn1.x509.ExtKeyUsage(e);
                        this.appendExtension(n)
                    } else {
                        if ("authoritykeyidentifier" != t.toLowerCase()) throw "unsupported extension name: " + t;
                        var n = new Cr.asn1.x509.AuthorityKeyIdentifier(e);
                        this.appendExtension(n)
                    }
                }, this.getEncodedHex = function() {
                    if (null == this.asn1NotBefore || null == this.asn1NotAfter) throw "notBefore and/or notAfter not set";
                    var t = new Cr.asn1.DERSequence({
                        array: [this.asn1NotBefore, this.asn1NotAfter]
                    });
                    if (this.asn1Array = new Array, this.asn1Array.push(this.asn1Version), this.asn1Array.push(this.asn1SerialNumber), this.asn1Array.push(this.asn1SignatureAlg), this.asn1Array.push(this.asn1Issuer), this.asn1Array.push(t), this.asn1Array.push(this.asn1Subject), this.asn1Array.push(this.asn1SubjPKey), this.extensionsArray.length > 0) {
                        var e = new Cr.asn1.DERSequence({
                                array: this.extensionsArray
                            }),
                            n = new Cr.asn1.DERTaggedObject({
                                explicit: !0,
                                tag: "a3",
                                obj: e
                            });
                        this.asn1Array.push(n)
                    }
                    var r = new Cr.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return this.hTLV = r.getEncodedHex(), this.isModified = !1, this.hTLV
                }, this._initialize()
            }, sr.lang.extend(Cr.asn1.x509.TBSCertificate, Cr.asn1.ASN1Object), Cr.asn1.x509.Extension = function(t) {
                Cr.asn1.x509.Extension.superclass.constructor.call(this);
                this.getEncodedHex = function() {
                    var t = new Cr.asn1.DERObjectIdentifier({
                            oid: this.oid
                        }),
                        e = new Cr.asn1.DEROctetString({
                            hex: this.getExtnValueHex()
                        }),
                        n = new Array;
                    n.push(t), this.critical && n.push(new Cr.asn1.DERBoolean), n.push(e);
                    var r = new Cr.asn1.DERSequence({
                        array: n
                    });
                    return r.getEncodedHex()
                }, this.critical = !1, "undefined" != typeof t && "undefined" != typeof t.critical && (this.critical = t.critical)
            }, sr.lang.extend(Cr.asn1.x509.Extension, Cr.asn1.ASN1Object), Cr.asn1.x509.KeyUsage = function(t) {
                Cr.asn1.x509.KeyUsage.superclass.constructor.call(this, t), this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }, this.oid = "2.5.29.15", "undefined" != typeof t && "undefined" != typeof t.bin && (this.asn1ExtnValue = new Cr.asn1.DERBitString(t))
            }, sr.lang.extend(Cr.asn1.x509.KeyUsage, Cr.asn1.x509.Extension), Cr.asn1.x509.BasicConstraints = function(t) {
                Cr.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
                this.getExtnValueHex = function() {
                    var t = new Array;
                    this.cA && t.push(new Cr.asn1.DERBoolean), this.pathLen > -1 && t.push(new Cr.asn1.DERInteger({
                        int: this.pathLen
                    }));
                    var e = new Cr.asn1.DERSequence({
                        array: t
                    });
                    return this.asn1ExtnValue = e, this.asn1ExtnValue.getEncodedHex()
                }, this.oid = "2.5.29.19", this.cA = !1, this.pathLen = -1, "undefined" != typeof t && ("undefined" != typeof t.cA && (this.cA = t.cA), "undefined" != typeof t.pathLen && (this.pathLen = t.pathLen))
            }, sr.lang.extend(Cr.asn1.x509.BasicConstraints, Cr.asn1.x509.Extension), Cr.asn1.x509.CRLDistributionPoints = function(t) {
                Cr.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t), this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }, this.setByDPArray = function(t) {
                    this.asn1ExtnValue = new Cr.asn1.DERSequence({
                        array: t
                    })
                }, this.setByOneURI = function(t) {
                    var e = new Cr.asn1.x509.GeneralNames([{
                            uri: t
                        }]),
                        n = new Cr.asn1.x509.DistributionPointName(e),
                        r = new Cr.asn1.x509.DistributionPoint({
                            dpobj: n
                        });
                    this.setByDPArray([r])
                }, this.oid = "2.5.29.31", "undefined" != typeof t && ("undefined" != typeof t.array ? this.setByDPArray(t.array) : "undefined" != typeof t.uri && this.setByOneURI(t.uri))
            }, sr.lang.extend(Cr.asn1.x509.CRLDistributionPoints, Cr.asn1.x509.Extension), Cr.asn1.x509.ExtKeyUsage = function(t) {
                Cr.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t), this.setPurposeArray = function(t) {
                    this.asn1ExtnValue = new Cr.asn1.DERSequence;
                    for (var e = 0; e < t.length; e++) {
                        var n = new Cr.asn1.DERObjectIdentifier(t[e]);
                        this.asn1ExtnValue.appendASN1Object(n)
                    }
                }, this.getExtnValueHex = function() {
                    return this.asn1ExtnValue.getEncodedHex()
                }, this.oid = "2.5.29.37", "undefined" != typeof t && "undefined" != typeof t.array && this.setPurposeArray(t.array)
            }, sr.lang.extend(Cr.asn1.x509.ExtKeyUsage, Cr.asn1.x509.Extension), Cr.asn1.x509.AuthorityKeyIdentifier = function(t) {
                Cr.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t), this.asn1KID = null, this.asn1CertIssuer = null, this.asn1CertSN = null, this.getExtnValueHex = function() {
                    var t = new Array;
                    this.asn1KID && t.push(new Cr.asn1.DERTaggedObject({
                        explicit: !1,
                        tag: "80",
                        obj: this.asn1KID
                    })), this.asn1CertIssuer && t.push(new Cr.asn1.DERTaggedObject({
                        explicit: !1,
                        tag: "a1",
                        obj: this.asn1CertIssuer
                    })), this.asn1CertSN && t.push(new Cr.asn1.DERTaggedObject({
                        explicit: !1,
                        tag: "82",
                        obj: this.asn1CertSN
                    }));
                    var e = new Cr.asn1.DERSequence({
                        array: t
                    });
                    return this.asn1ExtnValue = e, this.asn1ExtnValue.getEncodedHex()
                }, this.setKIDByParam = function(t) {
                    this.asn1KID = new Cr.asn1.DEROctetString(t)
                }, this.setCertIssuerByParam = function(t) {
                    this.asn1CertIssuer = new Cr.asn1.x509.X500Name(t)
                }, this.setCertSNByParam = function(t) {
                    this.asn1CertSN = new Cr.asn1.DERInteger(t)
                }, this.oid = "2.5.29.35", "undefined" != typeof t && ("undefined" != typeof t.kid && this.setKIDByParam(t.kid), "undefined" != typeof t.issuer && this.setCertIssuerByParam(t.issuer), "undefined" != typeof t.sn && this.setCertSNByParam(t.sn))
            }, sr.lang.extend(Cr.asn1.x509.AuthorityKeyIdentifier, Cr.asn1.x509.Extension), Cr.asn1.x509.CRL = function(t) {
                Cr.asn1.x509.CRL.superclass.constructor.call(this);
                this.setRsaPrvKeyByPEMandPass = function(t, e) {
                    var n = Rr.getDecryptedKeyHex(t, e),
                        r = new ve;
                    r.readPrivateKeyFromASN1HexString(n), this.rsaPrvKey = r
                }, this.sign = function() {
                    this.asn1SignatureAlg = this.asn1TBSCertList.asn1SignatureAlg, sig = new Cr.crypto.Signature({
                        alg: "SHA1withRSA",
                        prov: "cryptojs/jsrsa"
                    }), sig.initSign(this.rsaPrvKey), sig.updateHex(this.asn1TBSCertList.getEncodedHex()), this.hexSig = sig.sign(), this.asn1Sig = new Cr.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var t = new Cr.asn1.DERSequence({
                        array: [this.asn1TBSCertList, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = t.getEncodedHex(), this.isModified = !1
                }, this.getEncodedHex = function() {
                    if (0 == this.isModified && null != this.hTLV) return this.hTLV;
                    throw "not signed yet"
                }, this.getPEMString = function() {
                    var t = this.getEncodedHex(),
                        e = or.enc.Hex.parse(t),
                        n = or.enc.Base64.stringify(e),
                        r = n.replace(/(.{64})/g, "$1\r\n");
                    return "-----BEGIN X509 CRL-----\r\n" + r + "\r\n-----END X509 CRL-----\r\n"
                }, "undefined" != typeof t && ("undefined" != typeof t.tbsobj && (this.asn1TBSCertList = t.tbsobj), "undefined" != typeof t.rsaprvkey && (this.rsaPrvKey = t.rsaprvkey), "undefined" != typeof t.rsaprvpem && "undefined" != typeof t.rsaprvpas && this.setRsaPrvKeyByPEMandPass(t.rsaprvpem, t.rsaprvpas))
            }, sr.lang.extend(Cr.asn1.x509.CRL, Cr.asn1.ASN1Object), Cr.asn1.x509.TBSCertList = function(t) {
                Cr.asn1.x509.TBSCertList.superclass.constructor.call(this);
                this.setSignatureAlgByParam = function(t) {
                    this.asn1SignatureAlg = new Cr.asn1.x509.AlgorithmIdentifier(t)
                }, this.setIssuerByParam = function(t) {
                    this.asn1Issuer = new Cr.asn1.x509.X500Name(t)
                }, this.setThisUpdateByParam = function(t) {
                    this.asn1ThisUpdate = new Cr.asn1.x509.Time(t)
                }, this.setNextUpdateByParam = function(t) {
                    this.asn1NextUpdate = new Cr.asn1.x509.Time(t)
                }, this.addRevokedCert = function(t, e) {
                    var n = {};
                    void 0 != t && null != t && (n.sn = t), void 0 != e && null != e && (n.time = e);
                    var r = new Cr.asn1.x509.CRLEntry(n);
                    this.aRevokedCert.push(r)
                }, this.getEncodedHex = function() {
                    if (this.asn1Array = new Array, null != this.asn1Version && this.asn1Array.push(this.asn1Version), this.asn1Array.push(this.asn1SignatureAlg), this.asn1Array.push(this.asn1Issuer), this.asn1Array.push(this.asn1ThisUpdate), null != this.asn1NextUpdate && this.asn1Array.push(this.asn1NextUpdate), this.aRevokedCert.length > 0) {
                        var t = new Cr.asn1.DERSequence({
                            array: this.aRevokedCert
                        });
                        this.asn1Array.push(t)
                    }
                    var e = new Cr.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return this.hTLV = e.getEncodedHex(), this.isModified = !1, this.hTLV
                }, this._initialize = function() {
                    this.asn1Version = null, this.asn1SignatureAlg = null, this.asn1Issuer = null, this.asn1ThisUpdate = null, this.asn1NextUpdate = null, this.aRevokedCert = new Array
                }, this._initialize()
            }, sr.lang.extend(Cr.asn1.x509.TBSCertList, Cr.asn1.ASN1Object), Cr.asn1.x509.CRLEntry = function(t) {
                Cr.asn1.x509.CRLEntry.superclass.constructor.call(this);
                this.setCertSerial = function(t) {
                    this.sn = new Cr.asn1.DERInteger(t)
                }, this.setRevocationDate = function(t) {
                    this.time = new Cr.asn1.x509.Time(t)
                }, this.getEncodedHex = function() {
                    var t = new Cr.asn1.DERSequence({
                        array: [this.sn, this.time]
                    });
                    return this.TLV = t.getEncodedHex(), this.TLV
                }, "undefined" != typeof t && ("undefined" != typeof t.time && this.setRevocationDate(t.time), "undefined" != typeof t.sn && this.setCertSerial(t.sn))
            }, sr.lang.extend(Cr.asn1.x509.CRLEntry, Cr.asn1.ASN1Object), Cr.asn1.x509.X500Name = function(t) {
                if (Cr.asn1.x509.X500Name.superclass.constructor.call(this), this.asn1Array = new Array, this.setByString = function(t) {
                        var e = t.split("/");
                        e.shift();
                        for (var n = 0; n < e.length; n++) this.asn1Array.push(new Cr.asn1.x509.RDN({
                            str: e[n]
                        }))
                    }, this.setByObject = function(t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) {
                                var n = new Cr.asn1.x509.RDN({
                                    str: e + "=" + t[e]
                                });
                                this.asn1Array ? this.asn1Array.push(n) : this.asn1Array = [n]
                            }
                    }, this.getEncodedHex = function() {
                        if ("string" == typeof this.hTLV) return this.hTLV;
                        var t = new Cr.asn1.DERSequence({
                            array: this.asn1Array
                        });
                        return this.hTLV = t.getEncodedHex(), this.hTLV
                    }, "undefined" != typeof t) {
                    if ("undefined" != typeof t.str ? this.setByString(t.str) : "object" == typeof t && this.setByObject(t), "undefined" != typeof t.certissuer) {
                        var e = new $n;
                        e.hex = $n.pemToHex(t.certissuer), this.hTLV = e.getIssuerHex()
                    }
                    if ("undefined" != typeof t.certsubject) {
                        var e = new $n;
                        e.hex = $n.pemToHex(t.certsubject), this.hTLV = e.getSubjectHex()
                    }
                }
            }, sr.lang.extend(Cr.asn1.x509.X500Name, Cr.asn1.ASN1Object), Cr.asn1.x509.RDN = function(t) {
                Cr.asn1.x509.RDN.superclass.constructor.call(this), this.asn1Array = new Array, this.addByString = function(t) {
                    this.asn1Array.push(new Cr.asn1.x509.AttributeTypeAndValue({
                        str: t
                    }))
                }, this.getEncodedHex = function() {
                    var t = new Cr.asn1.DERSet({
                        array: this.asn1Array
                    });
                    return this.TLV = t.getEncodedHex(), this.TLV
                }, "undefined" != typeof t && "undefined" != typeof t.str && this.addByString(t.str)
            }, sr.lang.extend(Cr.asn1.x509.RDN, Cr.asn1.ASN1Object), Cr.asn1.x509.AttributeTypeAndValue = function(t) {
                Cr.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
                var e = "utf8";
                this.setByString = function(t) {
                    if (!t.match(/^([^=]+)=(.+)$/)) throw "malformed attrTypeAndValueStr: " + t;
                    this.setByAttrTypeAndValueStr(RegExp.$1, RegExp.$2)
                }, this.setByAttrTypeAndValueStr = function(t, n) {
                    this.typeObj = Cr.asn1.x509.OID.atype2obj(t);
                    var r = e;
                    "C" == t && (r = "prn"), this.valueObj = this.getValueObj(r, n)
                }, this.getValueObj = function(t, e) {
                    if ("utf8" == t) return new Cr.asn1.DERUTF8String({
                        str: e
                    });
                    if ("prn" == t) return new Cr.asn1.DERPrintableString({
                        str: e
                    });
                    if ("tel" == t) return new Cr.asn1.DERTeletexString({
                        str: e
                    });
                    if ("ia5" == t) return new Cr.asn1.DERIA5String({
                        str: e
                    });
                    throw "unsupported directory string type: type=" + t + " value=" + e
                }, this.getEncodedHex = function() {
                    var t = new Cr.asn1.DERSequence({
                        array: [this.typeObj, this.valueObj]
                    });
                    return this.TLV = t.getEncodedHex(), this.TLV
                }, "undefined" != typeof t && "undefined" != typeof t.str && this.setByString(t.str)
            }, sr.lang.extend(Cr.asn1.x509.AttributeTypeAndValue, Cr.asn1.ASN1Object), Cr.asn1.x509.SubjectPublicKeyInfo = function(t) {
                Cr.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
                this.setRSAKey = function(t) {
                    if (!ve.prototype.isPrototypeOf(t)) throw "argument is not RSAKey instance";
                    this.rsaKey = t;
                    var e = new Cr.asn1.DERInteger({
                            bigint: t.n
                        }),
                        n = new Cr.asn1.DERInteger({
                            int: t.e
                        }),
                        r = new Cr.asn1.DERSequence({
                            array: [e, n]
                        }),
                        i = r.getEncodedHex();
                    this.asn1AlgId = new Cr.asn1.x509.AlgorithmIdentifier({
                        name: "rsaEncryption"
                    }), this.asn1SubjPKey = new Cr.asn1.DERBitString({
                        hex: "00" + i
                    })
                }, this.setRSAPEM = function(t) {
                    if (!t.match(/-----BEGIN PUBLIC KEY-----/)) throw "key not supported";
                    var e = t;
                    e = e.replace(/^-----[^-]+-----/, ""), e = e.replace(/-----[^-]+-----\s*$/, "");
                    var n = e.replace(/\s+/g, ""),
                        r = or.enc.Base64.parse(n),
                        i = or.enc.Hex.stringify(r),
                        s = jn(i),
                        o = s[1],
                        a = o.substr(2),
                        u = jn(a),
                        c = new ve;
                    c.setPublic(u[0], u[1]), this.setRSAKey(c)
                }, this.getASN1Object = function() {
                    if (null == this.asn1AlgId || null == this.asn1SubjPKey) throw "algId and/or subjPubKey not set";
                    var t = new Cr.asn1.DERSequence({
                        array: [this.asn1AlgId, this.asn1SubjPKey]
                    });
                    return t
                }, this.getEncodedHex = function() {
                    var t = this.getASN1Object();
                    return this.hTLV = t.getEncodedHex(), this.hTLV
                }, this._setRSAKey = function(t) {
                    var e = Cr.asn1.ASN1Util.newObject({
                            seq: [{
                                int: {
                                    bigint: t.n
                                }
                            }, {
                                int: {
                                    int: t.e
                                }
                            }]
                        }),
                        n = e.getEncodedHex();
                    this.asn1AlgId = new Cr.asn1.x509.AlgorithmIdentifier({
                        name: "rsaEncryption"
                    }), this.asn1SubjPKey = new Cr.asn1.DERBitString({
                        hex: "00" + n
                    })
                }, this._setEC = function(t) {
                    var e = new Cr.asn1.DERObjectIdentifier({
                        name: t.curveName
                    });
                    this.asn1AlgId = new Cr.asn1.x509.AlgorithmIdentifier({
                        name: "ecPublicKey",
                        asn1params: e
                    }), this.asn1SubjPKey = new Cr.asn1.DERBitString({
                        hex: "00" + t.pubKeyHex
                    })
                }, this._setDSA = function(t) {
                    var e = new Cr.asn1.ASN1Util.newObject({
                        seq: [{
                            int: {
                                bigint: t.p
                            }
                        }, {
                            int: {
                                bigint: t.q
                            }
                        }, {
                            int: {
                                bigint: t.g
                            }
                        }]
                    });
                    this.asn1AlgId = new Cr.asn1.x509.AlgorithmIdentifier({
                        name: "dsa",
                        asn1params: e
                    });
                    var n = new Cr.asn1.DERInteger({
                        bigint: t.y
                    });
                    this.asn1SubjPKey = new Cr.asn1.DERBitString({
                        hex: "00" + n.getEncodedHex()
                    })
                }, "undefined" != typeof t && ("undefined" != typeof ve && t instanceof ve ? this._setRSAKey(t) : "undefined" != typeof Cr.crypto.ECDSA && t instanceof Cr.crypto.ECDSA ? this._setEC(t) : "undefined" != typeof Cr.crypto.DSA && t instanceof Cr.crypto.DSA ? this._setDSA(t) : "undefined" != typeof t.rsakey ? this.setRSAKey(t.rsakey) : "undefined" != typeof t.rsapem && this.setRSAPEM(t.rsapem))
            }, sr.lang.extend(Cr.asn1.x509.SubjectPublicKeyInfo, Cr.asn1.ASN1Object), Cr.asn1.x509.Time = function(t) {
                Cr.asn1.x509.Time.superclass.constructor.call(this);
                this.setTimeParams = function(t) {
                    this.timeParams = t
                }, this.getEncodedHex = function() {
                    var t = null;
                    return t = null != this.timeParams ? "utc" == this.type ? new Cr.asn1.DERUTCTime(this.timeParams) : new Cr.asn1.DERGeneralizedTime(this.timeParams) : "utc" == this.type ? new Cr.asn1.DERUTCTime : new Cr.asn1.DERGeneralizedTime, this.TLV = t.getEncodedHex(), this.TLV
                }, this.type = "utc", "undefined" != typeof t && ("undefined" != typeof t.type ? this.type = t.type : "undefined" != typeof t.str && (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"), t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")), this.timeParams = t)
            }, sr.lang.extend(Cr.asn1.x509.Time, Cr.asn1.ASN1Object), Cr.asn1.x509.AlgorithmIdentifier = function(t) {
                Cr.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this);
                this.getEncodedHex = function() {
                    if (null == this.nameAlg && null == this.asn1Alg) throw "algorithm not specified";
                    null != this.nameAlg && null == this.asn1Alg && (this.asn1Alg = Cr.asn1.x509.OID.name2obj(this.nameAlg));
                    var t = [this.asn1Alg];
                    this.paramEmpty || t.push(this.asn1Params);
                    var e = new Cr.asn1.DERSequence({
                        array: t
                    });
                    return this.hTLV = e.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && ("undefined" != typeof t.name && (this.nameAlg = t.name), "undefined" != typeof t.asn1params && (this.asn1Params = t.asn1params), "undefined" != typeof t.paramempty && (this.paramEmpty = t.paramempty)), null == this.asn1Params && (this.asn1Params = new Cr.asn1.DERNull)
            }, sr.lang.extend(Cr.asn1.x509.AlgorithmIdentifier, Cr.asn1.ASN1Object), Cr.asn1.x509.GeneralName = function(t) {
                Cr.asn1.x509.GeneralName.superclass.constructor.call(this);
                var e = {
                    rfc822: "81",
                    dns: "82",
                    dn: "a4",
                    uri: "86"
                };
                this.explicit = !1, this.setByParam = function(t) {
                    var n = null;
                    if ("undefined" != typeof t) {
                        if ("undefined" != typeof t.rfc822 && (this.type = "rfc822", n = new Cr.asn1.DERIA5String({
                                str: t[this.type]
                            })), "undefined" != typeof t.dns && (this.type = "dns", n = new Cr.asn1.DERIA5String({
                                str: t[this.type]
                            })), "undefined" != typeof t.uri && (this.type = "uri", n = new Cr.asn1.DERIA5String({
                                str: t[this.type]
                            })), "undefined" != typeof t.certissuer) {
                            this.type = "dn", this.explicit = !0;
                            var r = t.certissuer,
                                i = null;
                            if (r.match(/^[0-9A-Fa-f]+$/), r.indexOf("-----BEGIN ") != -1 && (i = $n.pemToHex(r)), null == i) throw "certissuer param not cert";
                            var s = new $n;
                            s.hex = i;
                            var o = s.getIssuerHex();
                            n = new Cr.asn1.ASN1Object, n.hTLV = o
                        }
                        if ("undefined" != typeof t.certsubj) {
                            this.type = "dn", this.explicit = !0;
                            var r = t.certsubj,
                                i = null;
                            if (r.match(/^[0-9A-Fa-f]+$/), r.indexOf("-----BEGIN ") != -1 && (i = $n.pemToHex(r)), null == i) throw "certsubj param not cert";
                            var s = new $n;
                            s.hex = i;
                            var o = s.getSubjectHex();
                            n = new Cr.asn1.ASN1Object, n.hTLV = o
                        }
                        if (null == this.type) throw "unsupported type in params=" + t;
                        this.asn1Obj = new Cr.asn1.DERTaggedObject({
                            explicit: this.explicit,
                            tag: e[this.type],
                            obj: n
                        })
                    }
                }, this.getEncodedHex = function() {
                    return this.asn1Obj.getEncodedHex()
                }, "undefined" != typeof t && this.setByParam(t)
            }, sr.lang.extend(Cr.asn1.x509.GeneralName, Cr.asn1.ASN1Object), Cr.asn1.x509.GeneralNames = function(t) {
                Cr.asn1.x509.GeneralNames.superclass.constructor.call(this);
                this.setByParamArray = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = new Cr.asn1.x509.GeneralName(t[e]);
                        this.asn1Array.push(n)
                    }
                }, this.getEncodedHex = function() {
                    var t = new Cr.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return t.getEncodedHex()
                }, this.asn1Array = new Array, "undefined" != typeof t && this.setByParamArray(t)
            }, sr.lang.extend(Cr.asn1.x509.GeneralNames, Cr.asn1.ASN1Object), Cr.asn1.x509.DistributionPointName = function(t) {
                Cr.asn1.x509.DistributionPointName.superclass.constructor.call(this);
                if (this.getEncodedHex = function() {
                        if ("full" != this.type) throw "currently type shall be 'full': " + this.type;
                        return this.asn1Obj = new Cr.asn1.DERTaggedObject({
                            explicit: !1,
                            tag: this.tag,
                            obj: this.asn1V
                        }), this.hTLV = this.asn1Obj.getEncodedHex(), this.hTLV
                    }, "undefined" != typeof t) {
                    if (!Cr.asn1.x509.GeneralNames.prototype.isPrototypeOf(t)) throw "This class supports GeneralNames only as argument";
                    this.type = "full", this.tag = "a0", this.asn1V = t
                }
            }, sr.lang.extend(Cr.asn1.x509.DistributionPointName, Cr.asn1.ASN1Object), Cr.asn1.x509.DistributionPoint = function(t) {
                Cr.asn1.x509.DistributionPoint.superclass.constructor.call(this);
                this.getEncodedHex = function() {
                    var t = new Cr.asn1.DERSequence;
                    if (null != this.asn1DP) {
                        var e = new Cr.asn1.DERTaggedObject({
                            explicit: !0,
                            tag: "a0",
                            obj: this.asn1DP
                        });
                        t.appendASN1Object(e)
                    }
                    return this.hTLV = t.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && "undefined" != typeof t.dpobj && (this.asn1DP = t.dpobj)
            }, sr.lang.extend(Cr.asn1.x509.DistributionPoint, Cr.asn1.ASN1Object), Cr.asn1.x509.OID = new function(t) {
                this.atype2oidList = {
                    C: "2.5.4.6",
                    O: "2.5.4.10",
                    OU: "2.5.4.11",
                    ST: "2.5.4.8",
                    L: "2.5.4.7",
                    CN: "2.5.4.3",
                    SN: "2.5.4.4",
                    DN: "2.5.4.49",
                    DC: "0.9.2342.19200300.100.1.25"
                }, this.name2oidList = {
                    sha1: "1.3.14.3.2.26",
                    sha256: "2.16.840.1.101.3.4.2.1",
                    sha384: "2.16.840.1.101.3.4.2.2",
                    sha512: "2.16.840.1.101.3.4.2.3",
                    sha224: "2.16.840.1.101.3.4.2.4",
                    md5: "1.2.840.113549.2.5",
                    md2: "1.3.14.7.2.2.1",
                    ripemd160: "1.3.36.3.2.1",
                    MD2withRSA: "1.2.840.113549.1.1.2",
                    MD4withRSA: "1.2.840.113549.1.1.3",
                    MD5withRSA: "1.2.840.113549.1.1.4",
                    SHA1withRSA: "1.2.840.113549.1.1.5",
                    SHA224withRSA: "1.2.840.113549.1.1.14",
                    SHA256withRSA: "1.2.840.113549.1.1.11",
                    SHA384withRSA: "1.2.840.113549.1.1.12",
                    SHA512withRSA: "1.2.840.113549.1.1.13",
                    SHA1withECDSA: "1.2.840.10045.4.1",
                    SHA224withECDSA: "1.2.840.10045.4.3.1",
                    SHA256withECDSA: "1.2.840.10045.4.3.2",
                    SHA384withECDSA: "1.2.840.10045.4.3.3",
                    SHA512withECDSA: "1.2.840.10045.4.3.4",
                    dsa: "1.2.840.10040.4.1",
                    SHA1withDSA: "1.2.840.10040.4.3",
                    SHA224withDSA: "2.16.840.1.101.3.4.3.1",
                    SHA256withDSA: "2.16.840.1.101.3.4.3.2",
                    rsaEncryption: "1.2.840.113549.1.1.1",
                    countryName: "2.5.4.6",
                    organization: "2.5.4.10",
                    organizationalUnit: "2.5.4.11",
                    stateOrProvinceName: "2.5.4.8",
                    locality: "2.5.4.7",
                    commonName: "2.5.4.3",
                    subjectKeyIdentifier: "2.5.29.14",
                    keyUsage: "2.5.29.15",
                    subjectAltName: "2.5.29.17",
                    basicConstraints: "2.5.29.19",
                    nameConstraints: "2.5.29.30",
                    cRLDistributionPoints: "2.5.29.31",
                    certificatePolicies: "2.5.29.32",
                    authorityKeyIdentifier: "2.5.29.35",
                    policyConstraints: "2.5.29.36",
                    extKeyUsage: "2.5.29.37",
                    authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
                    anyExtendedKeyUsage: "2.5.29.37.0",
                    serverAuth: "1.3.6.1.5.5.7.3.1",
                    clientAuth: "1.3.6.1.5.5.7.3.2",
                    codeSigning: "1.3.6.1.5.5.7.3.3",
                    emailProtection: "1.3.6.1.5.5.7.3.4",
                    timeStamping: "1.3.6.1.5.5.7.3.8",
                    ocspSigning: "1.3.6.1.5.5.7.3.9",
                    ecPublicKey: "1.2.840.10045.2.1",
                    secp256r1: "1.2.840.10045.3.1.7",
                    secp256k1: "1.3.132.0.10",
                    secp384r1: "1.3.132.0.34",
                    pkcs5PBES2: "1.2.840.113549.1.5.13",
                    pkcs5PBKDF2: "1.2.840.113549.1.5.12",
                    "des-EDE3-CBC": "1.2.840.113549.3.7",
                    data: "1.2.840.113549.1.7.1",
                    "signed-data": "1.2.840.113549.1.7.2",
                    "enveloped-data": "1.2.840.113549.1.7.3",
                    "digested-data": "1.2.840.113549.1.7.5",
                    "encrypted-data": "1.2.840.113549.1.7.6",
                    "authenticated-data": "1.2.840.113549.1.9.16.1.2",
                    tstinfo: "1.2.840.113549.1.9.16.1.4"
                }, this.objCache = {}, this.name2obj = function(t) {
                    if ("undefined" != typeof this.objCache[t]) return this.objCache[t];
                    if ("undefined" == typeof this.name2oidList[t]) throw "Name of ObjectIdentifier not defined: " + t;
                    var e = this.name2oidList[t],
                        n = new Cr.asn1.DERObjectIdentifier({
                            oid: e
                        });
                    return this.objCache[t] = n, n
                }, this.atype2obj = function(t) {
                    if ("undefined" != typeof this.objCache[t]) return this.objCache[t];
                    if ("undefined" == typeof this.atype2oidList[t]) throw "AttributeType name undefined: " + t;
                    var e = this.atype2oidList[t],
                        n = new Cr.asn1.DERObjectIdentifier({
                            oid: e
                        });
                    return this.objCache[t] = n, n
                }
            }, Cr.asn1.x509.OID.oid2name = function(t) {
                var e = Cr.asn1.x509.OID.name2oidList;
                for (var n in e)
                    if (e[n] == t) return n;
                return ""
            }, Cr.asn1.x509.OID.name2oid = function(t) {
                var e = Cr.asn1.x509.OID.name2oidList;
                return void 0 === e[t] ? "" : e[t]
            }, Cr.asn1.x509.X509Util = new function() {
                this.getPKCS8PubKeyPEMfromRSAKey = function(t) {
                    var e = null,
                        n = Cr.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t.n),
                        r = Cr.asn1.ASN1Util.integerToByteHex(t.e),
                        i = new Cr.asn1.DERInteger({
                            hex: n
                        }),
                        s = new Cr.asn1.DERInteger({
                            hex: r
                        }),
                        o = new Cr.asn1.DERSequence({
                            array: [i, s]
                        }),
                        a = o.getEncodedHex(),
                        u = new Cr.asn1.x509.AlgorithmIdentifier({
                            name: "rsaEncryption"
                        }),
                        c = new Cr.asn1.DERBitString({
                            hex: "00" + a
                        }),
                        f = new Cr.asn1.DERSequence({
                            array: [u, c]
                        }),
                        h = f.getEncodedHex(),
                        e = Cr.asn1.ASN1Util.getPEMStringFromHex(h, "PUBLIC KEY");
                    return e
                }
            }, Cr.asn1.x509.X509Util.newCertPEM = function(t) {
                var e = Cr.asn1.x509,
                    n = new e.TBSCertificate;
                if (void 0 === t.serial) throw "serial number undefined.";
                if (n.setSerialNumberByParam(t.serial), "string" != typeof t.sigalg.name) throw "unproper signature algorithm name";
                if (n.setSignatureAlgByParam(t.sigalg), void 0 === t.issuer) throw "issuer name undefined.";
                if (n.setIssuerByParam(t.issuer), void 0 === t.notbefore) throw "notbefore undefined.";
                if (n.setNotBeforeByParam(t.notbefore), void 0 === t.notafter) throw "notafter undefined.";
                if (n.setNotAfterByParam(t.notafter), void 0 === t.subject) throw "subject name undefined.";
                if (n.setSubjectByParam(t.subject), void 0 === t.sbjpubkey) throw "subject public key undefined.";
                if (n.setSubjectPublicKeyByGetKey(t.sbjpubkey), void 0 !== t.ext && void 0 !== t.ext.length)
                    for (var r = 0; r < t.ext.length; r++)
                        for (key in t.ext[r]) n.appendExtensionByName(key, t.ext[r][key]);
                if (void 0 === t.cakey && void 0 === t.sighex) throw "param cakey and sighex undefined.";
                var i = null,
                    s = null;
                return t.cakey && (i = Dr.getKey.apply(null, t.cakey), s = new e.Certificate({
                    tbscertobj: n,
                    prvkeyobj: i
                }), s.sign()), t.sighex && (s = new e.Certificate({
                    tbscertobj: n
                }), s.setSignatureHex(t.sighex)), s.getPEMString()
            },
            /*! asn1cms-1.0.2.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.asn1 && Cr.asn1 || (Cr.asn1 = {}), "undefined" != typeof Cr.asn1.cms && Cr.asn1.cms || (Cr.asn1.cms = {}), Cr.asn1.cms.Attribute = function(t) {
                Cr.asn1.cms.Attribute.superclass.constructor.call(this);
                this.getEncodedHex = function() {
                    var t, e, n;
                    t = new Cr.asn1.DERObjectIdentifier({
                        oid: this.attrTypeOid
                    }), e = new Cr.asn1.DERSet({
                        array: this.valueList
                    });
                    try {
                        e.getEncodedHex()
                    } catch (t) {
                        throw "fail valueSet.getEncodedHex in Attribute(1)/" + t
                    }
                    n = new Cr.asn1.DERSequence({
                        array: [t, e]
                    });
                    try {
                        this.hTLV = n.getEncodedHex()
                    } catch (t) {
                        throw "failed seq.getEncodedHex in Attribute(2)/" + t
                    }
                    return this.hTLV
                }
            }, sr.lang.extend(Cr.asn1.cms.Attribute, Cr.asn1.ASN1Object), Cr.asn1.cms.ContentType = function(t) {
                Cr.asn1.cms.ContentType.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.3";
                var e = null;
                if ("undefined" != typeof t) {
                    var e = new Cr.asn1.DERObjectIdentifier(t);
                    this.valueList = [e]
                }
            }, sr.lang.extend(Cr.asn1.cms.ContentType, Cr.asn1.cms.Attribute), Cr.asn1.cms.MessageDigest = function(t) {
                if (Cr.asn1.cms.MessageDigest.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.4", "undefined" != typeof t)
                    if (t.eciObj instanceof Cr.asn1.cms.EncapsulatedContentInfo && "string" == typeof t.hashAlg) {
                        var e = t.eciObj.eContentValueHex,
                            n = t.hashAlg,
                            r = Cr.crypto.Util.hashHex(e, n),
                            i = new Cr.asn1.DEROctetString({
                                hex: r
                            });
                        i.getEncodedHex(), this.valueList = [i]
                    } else {
                        var i = new Cr.asn1.DEROctetString(t);
                        i.getEncodedHex(), this.valueList = [i]
                    }
            }, sr.lang.extend(Cr.asn1.cms.MessageDigest, Cr.asn1.cms.Attribute), Cr.asn1.cms.SigningTime = function(t) {
                if (Cr.asn1.cms.SigningTime.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.5", "undefined" != typeof t) {
                    var e = new Cr.asn1.x509.Time(t);
                    try {
                        e.getEncodedHex()
                    } catch (t) {
                        throw "SigningTime.getEncodedHex() failed/" + t
                    }
                    this.valueList = [e]
                }
            }, sr.lang.extend(Cr.asn1.cms.SigningTime, Cr.asn1.cms.Attribute), Cr.asn1.cms.SigningCertificate = function(t) {
                Cr.asn1.cms.SigningCertificate.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.12";
                var e = Cr.asn1,
                    n = Cr.asn1.cms,
                    r = Cr.crypto;
                this.setCerts = function(t) {
                    for (var i = [], s = 0; s < t.length; s++) {
                        var o = Dr.getHexFromPEM(t[s]),
                            a = r.Util.hashHex(o, "sha1"),
                            u = new e.DEROctetString({
                                hex: a
                            });
                        u.getEncodedHex();
                        var c = new n.IssuerAndSerialNumber({
                            cert: t[s]
                        });
                        c.getEncodedHex();
                        var f = new e.DERSequence({
                            array: [u, c]
                        });
                        f.getEncodedHex(), i.push(f)
                    }
                    var h = new e.DERSequence({
                        array: i
                    });
                    h.getEncodedHex(), this.valueList = [h]
                }, "undefined" != typeof t && "object" == typeof t.array && this.setCerts(t.array)
            }, sr.lang.extend(Cr.asn1.cms.SigningCertificate, Cr.asn1.cms.Attribute), Cr.asn1.cms.SigningCertificateV2 = function(t) {
                Cr.asn1.cms.SigningCertificateV2.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.47";
                var e = Cr.asn1,
                    n = Cr.asn1.x509,
                    r = Cr.asn1.cms,
                    i = Cr.crypto;
                if (this.setCerts = function(t, s) {
                        for (var o = [], a = 0; a < t.length; a++) {
                            var u = Dr.getHexFromPEM(t[a]),
                                c = [];
                            "sha256" != s && c.push(new n.AlgorithmIdentifier({
                                name: s
                            }));
                            var f = i.Util.hashHex(u, s),
                                h = new e.DEROctetString({
                                    hex: f
                                });
                            h.getEncodedHex(), c.push(h);
                            var l = new r.IssuerAndSerialNumber({
                                cert: t[a]
                            });
                            l.getEncodedHex(), c.push(l);
                            var d = new e.DERSequence({
                                array: c
                            });
                            d.getEncodedHex(), o.push(d)
                        }
                        var p = new e.DERSequence({
                            array: o
                        });
                        p.getEncodedHex(), this.valueList = [p]
                    }, "undefined" != typeof t && "object" == typeof t.array) {
                    var s = "sha256";
                    "string" == typeof t.hashAlg && (s = t.hashAlg), this.setCerts(t.array, s)
                }
            }, sr.lang.extend(Cr.asn1.cms.SigningCertificateV2, Cr.asn1.cms.Attribute), Cr.asn1.cms.IssuerAndSerialNumber = function(t) {
                Cr.asn1.cms.IssuerAndSerialNumber.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = e.x509;
                this.setByCertPEM = function(t) {
                    var r = Dr.getHexFromPEM(t),
                        i = new $n;
                    i.hex = r;
                    var s = i.getIssuerHex();
                    this.dIssuer = new n.X500Name, this.dIssuer.hTLV = s;
                    var o = i.getSerialNumberHex();
                    this.dSerial = new e.DERInteger({
                        hex: o
                    })
                }, this.getEncodedHex = function() {
                    var t = new Cr.asn1.DERSequence({
                        array: [this.dIssuer, this.dSerial]
                    });
                    return this.hTLV = t.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && ("string" == typeof t && t.indexOf("-----BEGIN ") != -1 && this.setByCertPEM(t), t.issuer && t.serial && (t.issuer instanceof Cr.asn1.x509.X500Name ? this.dIssuer = t.issuer : this.dIssuer = new Cr.asn1.x509.X500Name(t.issuer), t.serial instanceof Cr.asn1.DERInteger ? this.dSerial = t.serial : this.dSerial = new Cr.asn1.DERInteger(t.serial)), "string" == typeof t.cert && this.setByCertPEM(t.cert))
            }, sr.lang.extend(Cr.asn1.cms.IssuerAndSerialNumber, Cr.asn1.ASN1Object), Cr.asn1.cms.AttributeList = function(t) {
                Cr.asn1.cms.AttributeList.superclass.constructor.call(this), this.list = new Array, this.sortFlag = !0, this.add = function(t) {
                    t instanceof Cr.asn1.cms.Attribute && this.list.push(t)
                }, this.length = function() {
                    return this.list.length
                }, this.clear = function() {
                    this.list = new Array, this.hTLV = null, this.hV = null
                }, this.getEncodedHex = function() {
                    if ("string" == typeof this.hTLV) return this.hTLV;
                    var t = new Cr.asn1.DERSet({
                        array: this.list,
                        sortflag: this.sortFlag
                    });
                    return this.hTLV = t.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
            }, sr.lang.extend(Cr.asn1.cms.AttributeList, Cr.asn1.ASN1Object), Cr.asn1.cms.SignerInfo = function(t) {
                Cr.asn1.cms.SignerInfo.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.cms,
                    r = Cr.asn1.x509;
                this.dCMSVersion = new e.DERInteger({
                    int: 1
                }), this.dSignerIdentifier = null, this.dDigestAlgorithm = null, this.dSignedAttrs = new n.AttributeList, this.dSigAlg = null, this.dSig = null, this.dUnsignedAttrs = new n.AttributeList, this.setSignerIdentifier = function(t) {
                    if ("string" == typeof t && t.indexOf("CERTIFICATE") != -1 && t.indexOf("BEGIN") != -1 && t.indexOf("END") != -1) {
                        this.dSignerIdentifier = new n.IssuerAndSerialNumber({
                            cert: t
                        })
                    }
                }, this.setForContentAndHash = function(t) {
                    "undefined" != typeof t && (t.eciObj instanceof Cr.asn1.cms.EncapsulatedContentInfo && (this.dSignedAttrs.add(new n.ContentType({
                        oid: "1.2.840.113549.1.7.1"
                    })), this.dSignedAttrs.add(new n.MessageDigest({
                        eciObj: t.eciObj,
                        hashAlg: t.hashAlg
                    }))), "undefined" != typeof t.sdObj && t.sdObj instanceof Cr.asn1.cms.SignedData && t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg) == -1 && t.sdObj.digestAlgNameList.push(t.hashAlg), "string" == typeof t.hashAlg && (this.dDigestAlgorithm = new r.AlgorithmIdentifier({
                        name: t.hashAlg
                    })))
                }, this.sign = function(t, n) {
                    this.dSigAlg = new r.AlgorithmIdentifier({
                        name: n
                    });
                    var i = this.dSignedAttrs.getEncodedHex(),
                        s = Dr.getKey(t),
                        o = new Cr.crypto.Signature({
                            alg: n
                        });
                    o.init(s), o.updateHex(i);
                    var a = o.sign();
                    this.dSig = new e.DEROctetString({
                        hex: a
                    })
                }, this.addUnsigned = function(t) {
                    this.hTLV = null, this.dUnsignedAttrs.hTLV = null, this.dUnsignedAttrs.add(t)
                }, this.getEncodedHex = function() {
                    if (this.dSignedAttrs instanceof Cr.asn1.cms.AttributeList && 0 == this.dSignedAttrs.length()) throw "SignedAttrs length = 0 (empty)";
                    var t = new e.DERTaggedObject({
                            obj: this.dSignedAttrs,
                            tag: "a0",
                            explicit: !1
                        }),
                        n = null;
                    this.dUnsignedAttrs.length() > 0 && (n = new e.DERTaggedObject({
                        obj: this.dUnsignedAttrs,
                        tag: "a1",
                        explicit: !1
                    }));
                    var r = [this.dCMSVersion, this.dSignerIdentifier, this.dDigestAlgorithm, t, this.dSigAlg, this.dSig];
                    null != n && r.push(n);
                    var i = new e.DERSequence({
                        array: r
                    });
                    return this.hTLV = i.getEncodedHex(), this.hTLV
                }
            }, sr.lang.extend(Cr.asn1.cms.SignerInfo, Cr.asn1.ASN1Object), Cr.asn1.cms.EncapsulatedContentInfo = function(t) {
                Cr.asn1.cms.EncapsulatedContentInfo.superclass.constructor.call(this);
                var e = Cr.asn1;
                Cr.asn1.cms, Cr.asn1.x509;
                this.dEContentType = new e.DERObjectIdentifier({
                    name: "data"
                }), this.dEContent = null, this.isDetached = !1, this.eContentValueHex = null, this.setContentType = function(t) {
                    t.match(/^[0-2][.][0-9.]+$/) ? this.dEContentType = new e.DERObjectIdentifier({
                        oid: t
                    }) : this.dEContentType = new e.DERObjectIdentifier({
                        name: t
                    })
                }, this.setContentValue = function(t) {
                    "undefined" != typeof t && ("string" == typeof t.hex ? this.eContentValueHex = t.hex : "string" == typeof t.str && (this.eContentValueHex = mn(t.str)))
                }, this.setContentValueHex = function(t) {
                    this.eContentValueHex = t
                }, this.setContentValueStr = function(t) {
                    this.eContentValueHex = mn(t)
                }, this.getEncodedHex = function() {
                    if ("string" != typeof this.eContentValueHex) throw "eContentValue not yet set";
                    var t = new e.DEROctetString({
                        hex: this.eContentValueHex
                    });
                    this.dEContent = new e.DERTaggedObject({
                        obj: t,
                        tag: "a0",
                        explicit: !0
                    });
                    var n = [this.dEContentType];
                    this.isDetached || n.push(this.dEContent);
                    var r = new e.DERSequence({
                        array: n
                    });
                    return this.hTLV = r.getEncodedHex(), this.hTLV
                }
            }, sr.lang.extend(Cr.asn1.cms.EncapsulatedContentInfo, Cr.asn1.ASN1Object), Cr.asn1.cms.ContentInfo = function(t) {
                Cr.asn1.cms.ContentInfo.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = (Cr.asn1.cms, Cr.asn1.x509);
                this.dContentType = null, this.dContent = null, this.setContentType = function(t) {
                    "string" == typeof t && (this.dContentType = n.OID.name2obj(t))
                }, this.getEncodedHex = function() {
                    var t = new e.DERTaggedObject({
                            obj: this.dContent,
                            tag: "a0",
                            explicit: !0
                        }),
                        n = new e.DERSequence({
                            array: [this.dContentType, t]
                        });
                    return this.hTLV = n.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && (t.type && this.setContentType(t.type), t.obj && t.obj instanceof e.ASN1Object && (this.dContent = t.obj))
            }, sr.lang.extend(Cr.asn1.cms.ContentInfo, Cr.asn1.ASN1Object), Cr.asn1.cms.SignedData = function(t) {
                Cr.asn1.cms.SignedData.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.cms,
                    r = Cr.asn1.x509;
                this.dCMSVersion = new e.DERInteger({
                    int: 1
                }), this.dDigestAlgs = null, this.digestAlgNameList = [], this.dEncapContentInfo = new n.EncapsulatedContentInfo, this.dCerts = null, this.certificateList = [], this.crlList = [], this.signerInfoList = [new n.SignerInfo], this.addCertificatesByPEM = function(t) {
                    var n = Dr.getHexFromPEM(t),
                        r = new e.ASN1Object;
                    r.hTLV = n, this.certificateList.push(r)
                }, this.getEncodedHex = function() {
                    if ("string" == typeof this.hTLV) return this.hTLV;
                    if (null == this.dDigestAlgs) {
                        for (var t = [], n = 0; n < this.digestAlgNameList.length; n++) {
                            var i = this.digestAlgNameList[n],
                                s = new r.AlgorithmIdentifier({
                                    name: i
                                });
                            t.push(s)
                        }
                        this.dDigestAlgs = new e.DERSet({
                            array: t
                        })
                    }
                    var o = [this.dCMSVersion, this.dDigestAlgs, this.dEncapContentInfo];
                    if (null == this.dCerts && this.certificateList.length > 0) {
                        var a = new e.DERSet({
                            array: this.certificateList
                        });
                        this.dCerts = new e.DERTaggedObject({
                            obj: a,
                            tag: "a0",
                            explicit: !1
                        })
                    }
                    null != this.dCerts && o.push(this.dCerts);
                    var u = new e.DERSet({
                        array: this.signerInfoList
                    });
                    o.push(u);
                    var c = new e.DERSequence({
                        array: o
                    });
                    return this.hTLV = c.getEncodedHex(), this.hTLV
                }, this.getContentInfo = function() {
                    this.getEncodedHex();
                    var t = new n.ContentInfo({
                        type: "signed-data",
                        obj: this
                    });
                    return t
                }, this.getContentInfoEncodedHex = function() {
                    var t = this.getContentInfo(),
                        e = t.getEncodedHex();
                    return e
                }, this.getPEM = function() {
                    var t = this.getContentInfoEncodedHex(),
                        n = e.ASN1Util.getPEMStringFromHex(t, "CMS");
                    return n
                }
            }, sr.lang.extend(Cr.asn1.cms.SignedData, Cr.asn1.ASN1Object), Cr.asn1.cms.CMSUtil = new function() {}, Cr.asn1.cms.CMSUtil.newSignedData = function(t) {
                var e = Cr.asn1.cms,
                    n = Cr.asn1.cades,
                    r = new e.SignedData;
                if (r.dEncapContentInfo.setContentValue(t.content), "object" == typeof t.certs)
                    for (var i = 0; i < t.certs.length; i++) r.addCertificatesByPEM(t.certs[i]);
                r.signerInfoList = [];
                for (var i = 0; i < t.signerInfos.length; i++) {
                    var s = t.signerInfos[i],
                        o = new e.SignerInfo;
                    o.setSignerIdentifier(s.signerCert), o.setForContentAndHash({
                        sdObj: r,
                        eciObj: r.dEncapContentInfo,
                        hashAlg: s.hashAlg
                    });
                    for (attrName in s.sAttr) {
                        var a = s.sAttr[attrName];
                        if ("SigningTime" == attrName) {
                            var u = new e.SigningTime(a);
                            o.dSignedAttrs.add(u)
                        }
                        if ("SigningCertificate" == attrName) {
                            var u = new e.SigningCertificate(a);
                            o.dSignedAttrs.add(u)
                        }
                        if ("SigningCertificateV2" == attrName) {
                            var u = new e.SigningCertificateV2(a);
                            o.dSignedAttrs.add(u)
                        }
                        if ("SignaturePolicyIdentifier" == attrName) {
                            var u = new n.SignaturePolicyIdentifier(a);
                            o.dSignedAttrs.add(u)
                        }
                    }
                    o.sign(s.signerPrvKey, s.sigAlg), r.signerInfoList.push(o)
                }
                return r
            },
            /*! asn1tsp-1.0.1.js (c) 2014 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.asn1 && Cr.asn1 || (Cr.asn1 = {}), "undefined" != typeof Cr.asn1.tsp && Cr.asn1.tsp || (Cr.asn1.tsp = {}), Cr.asn1.tsp.Accuracy = function(t) {
                Cr.asn1.tsp.Accuracy.superclass.constructor.call(this);
                var e = Cr.asn1;
                this.seconds = null, this.millis = null, this.micros = null, this.getEncodedHex = function() {
                    var t = null,
                        n = null,
                        r = null,
                        i = [];
                    if (null != this.seconds && (t = new e.DERInteger({
                            int: this.seconds
                        }), i.push(t)), null != this.millis) {
                        var s = new e.DERInteger({
                            int: this.millis
                        });
                        n = new e.DERTaggedObject({
                            obj: s,
                            tag: "80",
                            explicit: !1
                        }), i.push(n)
                    }
                    if (null != this.micros) {
                        var o = new e.DERInteger({
                            int: this.micros
                        });
                        r = new e.DERTaggedObject({
                            obj: o,
                            tag: "81",
                            explicit: !1
                        }), i.push(r)
                    }
                    var a = new e.DERSequence({
                        array: i
                    });
                    return this.hTLV = a.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && ("number" == typeof t.seconds && (this.seconds = t.seconds), "number" == typeof t.millis && (this.millis = t.millis), "number" == typeof t.micros && (this.micros = t.micros))
            }, sr.lang.extend(Cr.asn1.tsp.Accuracy, Cr.asn1.ASN1Object), Cr.asn1.tsp.MessageImprint = function(t) {
                Cr.asn1.tsp.MessageImprint.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.x509;
                this.dHashAlg = null, this.dHashValue = null, this.getEncodedHex = function() {
                    if ("string" == typeof this.hTLV) return this.hTLV;
                    var t = new e.DERSequence({
                        array: [this.dHashAlg, this.dHashValue]
                    });
                    return t.getEncodedHex()
                }, "undefined" != typeof t && ("string" == typeof t.hashAlg && (this.dHashAlg = new n.AlgorithmIdentifier({
                    name: t.hashAlg
                })), "string" == typeof t.hashValue && (this.dHashValue = new e.DEROctetString({
                    hex: t.hashValue
                })))
            }, sr.lang.extend(Cr.asn1.tsp.MessageImprint, Cr.asn1.ASN1Object), Cr.asn1.tsp.TimeStampReq = function(t) {
                Cr.asn1.tsp.TimeStampReq.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.tsp;
                this.dVersion = new e.DERInteger({
                    int: 1
                }), this.dMessageImprint = null, this.dPolicy = null, this.dNonce = null, this.certReq = !0, this.setMessageImprint = function(t) {
                    return t instanceof Cr.asn1.tsp.MessageImprint ? void(this.dMessageImprint = t) : void("object" == typeof t && (this.dMessageImprint = new n.MessageImprint(t)))
                }, this.getEncodedHex = function() {
                    if (null == this.dMessageImprint) throw "messageImprint shall be specified";
                    var t = [this.dVersion, this.dMessageImprint];
                    null != this.dPolicy && t.push(this.dPolicy), null != this.dNonce && t.push(this.dNonce), this.certReq && t.push(new e.DERBoolean);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && ("object" == typeof t.mi && this.setMessageImprint(t.mi), "object" == typeof t.policy && (this.dPolicy = new e.DERObjectIdentifier(t.policy)), "object" == typeof t.nonce && (this.dNonce = new e.DERInteger(t.nonce)), "boolean" == typeof t.certreq && (this.certReq = t.certreq))
            }, sr.lang.extend(Cr.asn1.tsp.TimeStampReq, Cr.asn1.ASN1Object), Cr.asn1.tsp.TSTInfo = function(t) {
                Cr.asn1.tsp.TSTInfo.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.x509,
                    r = Cr.asn1.tsp;
                if (this.dVersion = new e.DERInteger({
                        int: 1
                    }), this.dPolicy = null, this.dMessageImprint = null, this.dSerialNumber = null, this.dGenTime = null, this.dAccuracy = null, this.dOrdering = null, this.dNonce = null, this.dTsa = null, this.getEncodedHex = function() {
                        var t = [this.dVersion];
                        if (null == this.dPolicy) throw "policy shall be specified.";
                        if (t.push(this.dPolicy), null == this.dMessageImprint) throw "messageImprint shall be specified.";
                        if (t.push(this.dMessageImprint), null == this.dSerialNumber) throw "serialNumber shall be specified.";
                        if (t.push(this.dSerialNumber), null == this.dGenTime) throw "genTime shall be specified.";
                        t.push(this.dGenTime), null != this.dAccuracy && t.push(this.dAccuracy), null != this.dOrdering && t.push(this.dOrdering), null != this.dNonce && t.push(this.dNonce), null != this.dTsa && t.push(this.dTsa);
                        var n = new e.DERSequence({
                            array: t
                        });
                        return this.hTLV = n.getEncodedHex(), this.hTLV
                    }, "undefined" != typeof t) {
                    if ("string" == typeof t.policy) {
                        if (!t.policy.match(/^[0-9.]+$/)) throw "policy shall be oid like 0.1.4.134";
                        this.dPolicy = new e.DERObjectIdentifier({
                            oid: t.policy
                        })
                    }
                    "undefined" != typeof t.messageImprint && (this.dMessageImprint = new r.MessageImprint(t.messageImprint)), "undefined" != typeof t.serialNumber && (this.dSerialNumber = new e.DERInteger(t.serialNumber)), "undefined" != typeof t.genTime && (this.dGenTime = new e.DERGeneralizedTime(t.genTime)), "undefind" != typeof t.accuracy && (this.dAccuracy = new r.Accuracy(t.accuracy)), "undefined" != typeof t.ordering && 1 == t.ordering && (this.dOrdering = new e.DERBoolean), "undefined" != typeof t.nonce && (this.dNonce = new e.DERInteger(t.nonce)), "undefined" != typeof t.tsa && (this.dTsa = new n.X500Name(t.tsa))
                }
            }, sr.lang.extend(Cr.asn1.tsp.TSTInfo, Cr.asn1.ASN1Object), Cr.asn1.tsp.TimeStampResp = function(t) {
                Cr.asn1.tsp.TimeStampResp.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.tsp;
                this.dStatus = null, this.dTST = null, this.getEncodedHex = function() {
                    if (null == this.dStatus) throw "status shall be specified";
                    var t = [this.dStatus];
                    null != this.dTST && t.push(this.dTST);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && ("object" == typeof t.status && (this.dStatus = new n.PKIStatusInfo(t.status)), "undefined" != typeof t.tst && t.tst instanceof Cr.asn1.ASN1Object && (this.dTST = t.tst.getContentInfo()))
            }, sr.lang.extend(Cr.asn1.tsp.TimeStampResp, Cr.asn1.ASN1Object), Cr.asn1.tsp.PKIStatusInfo = function(t) {
                Cr.asn1.tsp.PKIStatusInfo.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.tsp;
                this.dStatus = null, this.dStatusString = null, this.dFailureInfo = null, this.getEncodedHex = function() {
                    if (null == this.dStatus) throw "status shall be specified";
                    var t = [this.dStatus];
                    null != this.dStatusString && t.push(this.dStatusString), null != this.dFailureInfo && t.push(this.dFailureInfo);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && ("object" == typeof t.status && (this.dStatus = new n.PKIStatus(t.status)), "object" == typeof t.statstr && (this.dStatusString = new n.PKIFreeText({
                    array: t.statstr
                })), "object" == typeof t.failinfo && (this.dFailureInfo = new n.PKIFailureInfo(t.failinfo)))
            }, sr.lang.extend(Cr.asn1.tsp.PKIStatusInfo, Cr.asn1.ASN1Object), Cr.asn1.tsp.PKIStatus = function(t) {
                Cr.asn1.tsp.PKIStatus.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.tsp;
                if (this.getEncodedHex = function() {
                        return this.hTLV = this.dStatus.getEncodedHex(), this.hTLV
                    }, "undefined" != typeof t)
                    if ("undefined" != typeof t.name) {
                        var r = n.PKIStatus.valueList;
                        if ("undefined" == typeof r[t.name]) throw "name undefined: " + t.name;
                        this.dStatus = new e.DERInteger({
                            int: r[t.name]
                        })
                    } else this.dStatus = new e.DERInteger(t)
            }, sr.lang.extend(Cr.asn1.tsp.PKIStatus, Cr.asn1.ASN1Object), Cr.asn1.tsp.PKIStatus.valueList = {
                granted: 0,
                grantedWithMods: 1,
                rejection: 2,
                waiting: 3,
                revocationWarning: 4,
                revocationNotification: 5
            }, Cr.asn1.tsp.PKIFreeText = function(t) {
                Cr.asn1.tsp.PKIFreeText.superclass.constructor.call(this);
                var e = Cr.asn1;
                this.textList = [], this.getEncodedHex = function() {
                    for (var t = [], n = 0; n < this.textList.length; n++) t.push(new e.DERUTF8String({
                        str: this.textList[n]
                    }));
                    var r = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = r.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && "object" == typeof t.array && (this.textList = t.array)
            }, sr.lang.extend(Cr.asn1.tsp.PKIFreeText, Cr.asn1.ASN1Object), Cr.asn1.tsp.PKIFailureInfo = function(t) {
                Cr.asn1.tsp.PKIFailureInfo.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.tsp;
                if (this.value = null, this.getEncodedHex = function() {
                        if (null == this.value) throw "value shall be specified";
                        var t = new Number(this.value).toString(2),
                            n = new e.DERBitString;
                        return n.setByBinaryString(t), this.hTLV = n.getEncodedHex(), this.hTLV
                    }, "undefined" != typeof t)
                    if ("string" == typeof t.name) {
                        var r = n.PKIFailureInfo.valueList;
                        if ("undefined" == typeof r[t.name]) throw "name undefined: " + t.name;
                        this.value = r[t.name]
                    } else "number" == typeof t.int && (this.value = t.int)
            }, sr.lang.extend(Cr.asn1.tsp.PKIFailureInfo, Cr.asn1.ASN1Object), Cr.asn1.tsp.PKIFailureInfo.valueList = {
                badAlg: 0,
                badRequest: 2,
                badDataFormat: 5,
                timeNotAvailable: 14,
                unacceptedPolicy: 15,
                unacceptedExtension: 16,
                addInfoNotAvailable: 17,
                systemFailure: 25
            }, Cr.asn1.tsp.AbstractTSAAdapter = function(t) {
                this.getTSTHex = function(t, e) {
                    throw "not implemented yet"
                }
            }, Cr.asn1.tsp.SimpleTSAAdapter = function(t) {
                Cr.asn1.tsp.SimpleTSAAdapter.superclass.constructor.call(this), this.params = null, this.serial = 0, this.getTSTHex = function(t, e) {
                    var n = Cr.crypto.Util.hashHex(t, e);
                    this.params.tstInfo.messageImprint = {
                        hashAlg: e,
                        hashValue: n
                    }, this.params.tstInfo.serialNumber = {
                        int: this.serial++
                    };
                    var r = Math.floor(1e9 * Math.random());
                    this.params.tstInfo.nonce = {
                        int: r
                    };
                    var i = Cr.asn1.tsp.TSPUtil.newTimeStampToken(this.params);
                    return i.getContentInfoEncodedHex()
                }, "undefined" != typeof t && (this.params = t)
            }, sr.lang.extend(Cr.asn1.tsp.SimpleTSAAdapter, Cr.asn1.tsp.AbstractTSAAdapter), Cr.asn1.tsp.FixedTSAAdapter = function(t) {
                Cr.asn1.tsp.FixedTSAAdapter.superclass.constructor.call(this), this.params = null, this.getTSTHex = function(t, e) {
                    var n = Cr.crypto.Util.hashHex(t, e);
                    this.params.tstInfo.messageImprint = {
                        hashAlg: e,
                        hashValue: n
                    };
                    var r = Cr.asn1.tsp.TSPUtil.newTimeStampToken(this.params);
                    return r.getContentInfoEncodedHex()
                }, "undefined" != typeof t && (this.params = t)
            }, sr.lang.extend(Cr.asn1.tsp.FixedTSAAdapter, Cr.asn1.tsp.AbstractTSAAdapter), Cr.asn1.tsp.TSPUtil = new function() {}, Cr.asn1.tsp.TSPUtil.newTimeStampToken = function(t) {
                var e = Cr.asn1.cms,
                    n = Cr.asn1.tsp,
                    r = new e.SignedData,
                    i = new n.TSTInfo(t.tstInfo),
                    s = i.getEncodedHex();
                if (r.dEncapContentInfo.setContentValue({
                        hex: s
                    }), r.dEncapContentInfo.setContentType("tstinfo"), "object" == typeof t.certs)
                    for (var o = 0; o < t.certs.length; o++) r.addCertificatesByPEM(t.certs[o]);
                var a = r.signerInfoList[0];
                a.setSignerIdentifier(t.signerCert), a.setForContentAndHash({
                    sdObj: r,
                    eciObj: r.dEncapContentInfo,
                    hashAlg: t.hashAlg
                });
                var u = new e.SigningCertificate({
                    array: [t.signerCert]
                });
                return a.dSignedAttrs.add(u), a.sign(t.signerPrvKey, t.sigAlg), r
            }, Cr.asn1.tsp.TSPUtil.parseTimeStampReq = function(t) {
                var e = {};
                e.certreq = !1;
                var n = Or.getPosArrayOfChildren_AtObj(t, 0);
                if (n.length < 2) throw "TimeStampReq must have at least 2 items";
                var r = Or.getHexOfTLV_AtObj(t, n[1]);
                e.mi = Cr.asn1.tsp.TSPUtil.parseMessageImprint(r);
                for (var i = 2; i < n.length; i++) {
                    var s = n[i],
                        o = t.substr(s, 2);
                    if ("06" == o) {
                        var a = Or.getHexOfV_AtObj(t, s);
                        e.policy = Or.hextooidstr(a)
                    }
                    "02" == o && (e.nonce = Or.getHexOfV_AtObj(t, s)), "01" == o && (e.certreq = !0)
                }
                return e
            }, Cr.asn1.tsp.TSPUtil.parseMessageImprint = function(t) {
                var e = {};
                if ("30" != t.substr(0, 2)) throw "head of messageImprint hex shall be '30'";
                var n = (Or.getPosArrayOfChildren_AtObj(t, 0), Or.getDecendantIndexByNthList(t, 0, [0, 0])),
                    r = Or.getHexOfV_AtObj(t, n),
                    i = Or.hextooidstr(r),
                    s = Cr.asn1.x509.OID.oid2name(i);
                if ("" == s) throw "hashAlg name undefined: " + i;
                var o = s,
                    a = Or.getDecendantIndexByNthList(t, 0, [1]);
                return e.hashAlg = o, e.hashValue = Or.getHexOfV_AtObj(t, a), e
            },
            /*! asn1cades-1.0.0.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.asn1 && Cr.asn1 || (Cr.asn1 = {}), "undefined" != typeof Cr.asn1.cades && Cr.asn1.cades || (Cr.asn1.cades = {}), Cr.asn1.cades.SignaturePolicyIdentifier = function(t) {
                Cr.asn1.cades.SignaturePolicyIdentifier.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.15";
                var e = Cr.asn1,
                    n = Cr.asn1.cades;
                if ("undefined" != typeof t && "string" == typeof t.oid && "object" == typeof t.hash) {
                    var r = new e.DERObjectIdentifier({
                            oid: t.oid
                        }),
                        i = new n.OtherHashAlgAndValue(t.hash),
                        s = new e.DERSequence({
                            array: [r, i]
                        });
                    this.valueList = [s]
                }
            }, sr.lang.extend(Cr.asn1.cades.SignaturePolicyIdentifier, Cr.asn1.cms.Attribute), Cr.asn1.cades.OtherHashAlgAndValue = function(t) {
                Cr.asn1.cades.OtherHashAlgAndValue.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.x509;
                this.dAlg = null, this.dHash = null, this.getEncodedHex = function() {
                    var t = new e.DERSequence({
                        array: [this.dAlg, this.dHash]
                    });
                    return this.hTLV = t.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && "string" == typeof t.alg && "string" == typeof t.hash && (this.dAlg = new n.AlgorithmIdentifier({
                    name: t.alg
                }), this.dHash = new e.DEROctetString({
                    hex: t.hash
                }))
            }, sr.lang.extend(Cr.asn1.cades.OtherHashAlgAndValue, Cr.asn1.ASN1Object), Cr.asn1.cades.SignatureTimeStamp = function(t) {
                Cr.asn1.cades.SignatureTimeStamp.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.14", this.tstHex = null;
                var e = Cr.asn1;
                if ("undefined" != typeof t) {
                    if ("undefined" != typeof t.res)
                        if ("string" == typeof t.res && t.res.match(/^[0-9A-Fa-f]+$/));
                        else if (!(t.res instanceof Cr.asn1.ASN1Object)) throw "res param shall be ASN1Object or hex string";
                    if ("undefined" != typeof t.tst)
                        if ("string" == typeof t.tst && t.tst.match(/^[0-9A-Fa-f]+$/)) {
                            var n = new e.ASN1Object;
                            this.tstHex = t.tst, n.hTLV = this.tstHex, n.getEncodedHex(), this.valueList = [n]
                        } else if (!(t.tst instanceof Cr.asn1.ASN1Object)) throw "tst param shall be ASN1Object or hex string"
                }
            }, sr.lang.extend(Cr.asn1.cades.SignatureTimeStamp, Cr.asn1.cms.Attribute), Cr.asn1.cades.CompleteCertificateRefs = function(t) {
                Cr.asn1.cades.CompleteCertificateRefs.superclass.constructor.call(this), this.attrTypeOid = "1.2.840.113549.1.9.16.2.21";
                var e = (Cr.asn1, Cr.asn1.cades);
                this.setByArray = function(t) {
                    this.valueList = [];
                    for (var n = 0; n < t.length; n++) {
                        var r = new e.OtherCertID(t[n]);
                        this.valueList.push(r)
                    }
                }, "undefined" != typeof t && "object" == typeof t && "number" == typeof t.length && this.setByArray(t)
            }, sr.lang.extend(Cr.asn1.cades.CompleteCertificateRefs, Cr.asn1.cms.Attribute), Cr.asn1.cades.OtherCertID = function(t) {
                Cr.asn1.cades.OtherCertID.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.cms,
                    r = Cr.asn1.cades;
                this.hasIssuerSerial = !0, this.dOtherCertHash = null, this.dIssuerSerial = null, this.setByCertPEM = function(t) {
                    this.dOtherCertHash = new r.OtherHash(t), this.hasIssuerSerial && (this.dIssuerSerial = new n.IssuerAndSerialNumber(t))
                }, this.getEncodedHex = function() {
                    if (null != this.hTLV) return this.hTLV;
                    if (null == this.dOtherCertHash) throw "otherCertHash not set";
                    var t = [this.dOtherCertHash];
                    null != this.dIssuerSerial && t.push(this.dIssuerSerial);
                    var n = new e.DERSequence({
                        array: t
                    });
                    return this.hTLV = n.getEncodedHex(), this.hTLV
                }, "undefined" != typeof t && ("string" == typeof t && t.indexOf("-----BEGIN ") != -1 && this.setByCertPEM(t), "object" == typeof t && (t.hasis === !1 && (this.hasIssuerSerial = !1), "string" == typeof t.cert && this.setByCertPEM(t.cert)))
            }, sr.lang.extend(Cr.asn1.cades.OtherCertID, Cr.asn1.ASN1Object), Cr.asn1.cades.OtherHash = function(t) {
                Cr.asn1.cades.OtherHash.superclass.constructor.call(this);
                var e = Cr.asn1,
                    n = Cr.asn1.cades;
                if (this.alg = "sha256", this.dOtherHash = null, this.setByCertPEM = function(t) {
                        if (t.indexOf("-----BEGIN ") == -1) throw "certPEM not to seem PEM format";
                        var e = $n.pemToHex(t),
                            r = Cr.crypto.Util.hashHex(e, this.alg);
                        this.dOtherHash = new n.OtherHashAlgAndValue({
                            alg: this.alg,
                            hash: r
                        })
                    }, this.getEncodedHex = function() {
                        if (null == this.dOtherHash) throw "OtherHash not set";
                        return this.dOtherHash.getEncodedHex()
                    }, "undefined" != typeof t)
                    if ("string" == typeof t)
                        if (t.indexOf("-----BEGIN ") != -1) this.setByCertPEM(t);
                        else {
                            if (!t.match(/^[0-9A-Fa-f]+$/)) throw "unsupported string value for params";
                            this.dOtherHash = new e.DEROctetString({
                                hex: t
                            })
                        }
                else "object" == typeof t && ("string" == typeof t.cert ? ("string" == typeof t.alg && (this.alg = t.alg), this.setByCertPEM(t.cert)) : this.dOtherHash = new n.OtherHashAlgAndValue(t))
            }, sr.lang.extend(Cr.asn1.cades.OtherHash, Cr.asn1.ASN1Object), Cr.asn1.cades.CAdESUtil = new function() {}, Cr.asn1.cades.CAdESUtil.addSigTS = function(t, e, n) {}, Cr.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(t) {
                var e = Cr.asn1,
                    n = Cr.asn1.cms,
                    r = Cr.asn1.cades.CAdESUtil,
                    i = {};
                if ("06092a864886f70d010702" != Or.getDecendantHexTLVByNthList(t, 0, [0])) throw "hex is not CMS SignedData";
                var s = Or.getDecendantIndexByNthList(t, 0, [1, 0]),
                    o = Or.getPosArrayOfChildren_AtObj(t, s);
                if (o.length < 4) throw "num of SignedData elem shall be 4 at least";
                var a = o.shift();
                i.version = Or.getHexOfTLV_AtObj(t, a);
                var u = o.shift();
                i.algs = Or.getHexOfTLV_AtObj(t, u);
                var c = o.shift();
                i.encapcontent = Or.getHexOfTLV_AtObj(t, c), i.certs = null, i.revs = null, i.si = [];
                var f = o.shift();
                "a0" == t.substr(f, 2) && (i.certs = Or.getHexOfTLV_AtObj(t, f), f = o.shift()), "a1" == t.substr(f, 2) && (i.revs = Or.getHexOfTLV_AtObj(t, f), f = o.shift());
                var h = f;
                if ("31" != t.substr(h, 2)) throw "Can't find signerInfos";
                for (var l = Or.getPosArrayOfChildren_AtObj(t, h), d = 0; d < l.length; d++) {
                    var p = l[d],
                        g = r.parseSignerInfoForAddingUnsigned(t, p, d);
                    i.si[d] = g
                }
                var y = null;
                i.obj = new n.SignedData, y = new e.ASN1Object, y.hTLV = i.version, i.obj.dCMSVersion = y, y = new e.ASN1Object, y.hTLV = i.algs, i.obj.dDigestAlgs = y, y = new e.ASN1Object, y.hTLV = i.encapcontent, i.obj.dEncapContentInfo = y, y = new e.ASN1Object, y.hTLV = i.certs, i.obj.dCerts = y, i.obj.signerInfoList = [];
                for (var d = 0; d < i.si.length; d++) i.obj.signerInfoList.push(i.si[d].obj);
                return i
            }, Cr.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(t, e, n) {
                var r = Cr.asn1,
                    i = Cr.asn1.cms,
                    s = {},
                    o = Or.getPosArrayOfChildren_AtObj(t, e);
                if (6 != o.length) throw "not supported items for SignerInfo (!=6)";
                var a = o.shift();
                s.version = Or.getHexOfTLV_AtObj(t, a);
                var u = o.shift();
                s.si = Or.getHexOfTLV_AtObj(t, u);
                var c = o.shift();
                s.digalg = Or.getHexOfTLV_AtObj(t, c);
                var f = o.shift();
                s.sattrs = Or.getHexOfTLV_AtObj(t, f);
                var h = o.shift();
                s.sigalg = Or.getHexOfTLV_AtObj(t, h);
                var l = o.shift();
                s.sig = Or.getHexOfTLV_AtObj(t, l), s.sigval = Or.getHexOfV_AtObj(t, l);
                var d = null;
                return s.obj = new i.SignerInfo, d = new r.ASN1Object, d.hTLV = s.version, s.obj.dCMSVersion = d, d = new r.ASN1Object, d.hTLV = s.si, s.obj.dSignerIdentifier = d, d = new r.ASN1Object, d.hTLV = s.digalg, s.obj.dDigestAlgorithm = d, d = new r.ASN1Object, d.hTLV = s.sattrs, s.obj.dSignedAttrs = d, d = new r.ASN1Object, d.hTLV = s.sigalg, s.obj.dSigAlg = d, d = new r.ASN1Object, d.hTLV = s.sig, s.obj.dSig = d, s.obj.dUnsignedAttrs = new i.AttributeList, s
            },
            /*! asn1csr-1.0.0.js (c) 2015 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr.asn1.csr && Cr.asn1.csr || (Cr.asn1.csr = {}), Cr.asn1.csr.CertificationRequest = function(t) {
                Cr.asn1.csr.CertificationRequest.superclass.constructor.call(this);
                this.sign = function(t, e) {
                    null == this.prvKey && (this.prvKey = e), this.asn1SignatureAlg = new Cr.asn1.x509.AlgorithmIdentifier({
                        name: t
                    }), sig = new Cr.crypto.Signature({
                        alg: t
                    }), sig.initSign(this.prvKey), sig.updateHex(this.asn1CSRInfo.getEncodedHex()), this.hexSig = sig.sign(), this.asn1Sig = new Cr.asn1.DERBitString({
                        hex: "00" + this.hexSig
                    });
                    var n = new Cr.asn1.DERSequence({
                        array: [this.asn1CSRInfo, this.asn1SignatureAlg, this.asn1Sig]
                    });
                    this.hTLV = n.getEncodedHex(), this.isModified = !1
                }, this.getPEMString = function() {
                    var t = Cr.asn1.ASN1Util.getPEMStringFromHex(this.getEncodedHex(), "CERTIFICATE REQUEST");
                    return t
                }, this.getEncodedHex = function() {
                    if (0 == this.isModified && null != this.hTLV) return this.hTLV;
                    throw "not signed yet"
                }, "undefined" != typeof t && "undefined" != typeof t.csrinfo && (this.asn1CSRInfo = t.csrinfo)
            }, sr.lang.extend(Cr.asn1.csr.CertificationRequest, Cr.asn1.ASN1Object), Cr.asn1.csr.CertificationRequestInfo = function(t) {
                Cr.asn1.csr.CertificationRequestInfo.superclass.constructor.call(this), this._initialize = function() {
                    this.asn1Array = new Array, this.asn1Version = new Cr.asn1.DERInteger({
                        int: 0
                    }), this.asn1Subject = null, this.asn1SubjPKey = null, this.extensionsArray = new Array
                }, this.setSubjectByParam = function(t) {
                    this.asn1Subject = new Cr.asn1.x509.X500Name(t)
                }, this.setSubjectPublicKeyByGetKey = function(t) {
                    var e = Dr.getKey(t);
                    this.asn1SubjPKey = new Cr.asn1.x509.SubjectPublicKeyInfo(e)
                }, this.getEncodedHex = function() {
                    this.asn1Array = new Array, this.asn1Array.push(this.asn1Version), this.asn1Array.push(this.asn1Subject), this.asn1Array.push(this.asn1SubjPKey);
                    var t = new Cr.asn1.DERSequence({
                            array: this.extensionsArray
                        }),
                        e = new Cr.asn1.DERTaggedObject({
                            explicit: !1,
                            tag: "a0",
                            obj: t
                        });
                    this.asn1Array.push(e);
                    var n = new Cr.asn1.DERSequence({
                        array: this.asn1Array
                    });
                    return this.hTLV = n.getEncodedHex(), this.isModified = !1, this.hTLV
                }, this._initialize()
            }, sr.lang.extend(Cr.asn1.csr.CertificationRequestInfo, Cr.asn1.ASN1Object), Cr.asn1.csr.CSRUtil = new function() {}, Cr.asn1.csr.CSRUtil.newCSRPEM = function(t) {
                var e = Cr.asn1.csr;
                if (void 0 === t.subject) throw "parameter subject undefined";
                if (void 0 === t.sbjpubkey) throw "parameter sbjpubkey undefined";
                if (void 0 === t.sigalg) throw "parameter sigalg undefined";
                if (void 0 === t.sbjprvkey) throw "parameter sbjpubkey undefined";
                var n = new e.CertificationRequestInfo;
                n.setSubjectByParam(t.subject), n.setSubjectPublicKeyByGetKey(t.sbjpubkey);
                var r = new e.CertificationRequest({
                        csrinfo: n
                    }),
                    i = Dr.getKey(t.sbjprvkey);
                r.sign(t.sigalg, i);
                var s = r.getPEMString();
                return s
            };
        /*! base64x-1.1.7 (c) 2012-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        var Cr;
        "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.lang && Cr.lang || (Cr.lang = {}), Cr.lang.String = function() {};
        var Tr, jr;
        "function" == typeof t ? (Tr = function(e) {
            return ln(new t(e, "utf8").toString("base64"))
        }, jr = function(e) {
            return new t(dn(e), "base64").toString("utf8")
        }) : (Tr = function(t) {
            return pn(xn(An(t)))
        }, jr = function(t) {
            return decodeURIComponent(En(gn(t)))
        }), Cr.lang.String.isInteger = function(t) {
            return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/)
        }, Cr.lang.String.isHex = function(t) {
            return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/))
        }, Cr.lang.String.isBase64 = function(t) {
            return t = t.replace(/\s+/g, ""), !(!t.match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0)
        }, Cr.lang.String.isBase64URL = function(t) {
            return !t.match(/[+\/=]/) && (t = dn(t), Cr.lang.String.isBase64(t))
        }, Cr.lang.String.isIntegerArray = function(t) {
            return t = t.replace(/\s+/g, ""), !!t.match(/^\[[0-9,]+\]$/)
        };
        var Ir = function(t, e) {
            var n = t.length;
            t.length > e.length && (n = e.length);
            for (var r = 0; r < n; r++)
                if (t.charCodeAt(r) != e.charCodeAt(r)) return r;
            return t.length != e.length ? n : -1
        };
        /*! crypto-1.1.8.js (c) 2013-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.crypto && Cr.crypto || (Cr.crypto = {}), Cr.crypto.Util = new function() {
                this.DIGESTINFOHEAD = {
                    sha1: "3021300906052b0e03021a05000414",
                    sha224: "302d300d06096086480165030402040500041c",
                    sha256: "3031300d060960864801650304020105000420",
                    sha384: "3041300d060960864801650304020205000430",
                    sha512: "3051300d060960864801650304020305000440",
                    md2: "3020300c06082a864886f70d020205000410",
                    md5: "3020300c06082a864886f70d020505000410",
                    ripemd160: "3021300906052b2403020105000414"
                }, this.DEFAULTPROVIDER = {
                    md5: "cryptojs",
                    sha1: "cryptojs",
                    sha224: "cryptojs",
                    sha256: "cryptojs",
                    sha384: "cryptojs",
                    sha512: "cryptojs",
                    ripemd160: "cryptojs",
                    hmacmd5: "cryptojs",
                    hmacsha1: "cryptojs",
                    hmacsha224: "cryptojs",
                    hmacsha256: "cryptojs",
                    hmacsha384: "cryptojs",
                    hmacsha512: "cryptojs",
                    hmacripemd160: "cryptojs",
                    MD5withRSA: "cryptojs/jsrsa",
                    SHA1withRSA: "cryptojs/jsrsa",
                    SHA224withRSA: "cryptojs/jsrsa",
                    SHA256withRSA: "cryptojs/jsrsa",
                    SHA384withRSA: "cryptojs/jsrsa",
                    SHA512withRSA: "cryptojs/jsrsa",
                    RIPEMD160withRSA: "cryptojs/jsrsa",
                    MD5withECDSA: "cryptojs/jsrsa",
                    SHA1withECDSA: "cryptojs/jsrsa",
                    SHA224withECDSA: "cryptojs/jsrsa",
                    SHA256withECDSA: "cryptojs/jsrsa",
                    SHA384withECDSA: "cryptojs/jsrsa",
                    SHA512withECDSA: "cryptojs/jsrsa",
                    RIPEMD160withECDSA: "cryptojs/jsrsa",
                    SHA1withDSA: "cryptojs/jsrsa",
                    SHA224withDSA: "cryptojs/jsrsa",
                    SHA256withDSA: "cryptojs/jsrsa",
                    MD5withRSAandMGF1: "cryptojs/jsrsa",
                    SHA1withRSAandMGF1: "cryptojs/jsrsa",
                    SHA224withRSAandMGF1: "cryptojs/jsrsa",
                    SHA256withRSAandMGF1: "cryptojs/jsrsa",
                    SHA384withRSAandMGF1: "cryptojs/jsrsa",
                    SHA512withRSAandMGF1: "cryptojs/jsrsa",
                    RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
                }, this.CRYPTOJSMESSAGEDIGESTNAME = {
                    md5: or.algo.MD5,
                    sha1: or.algo.SHA1,
                    sha224: or.algo.SHA224,
                    sha256: or.algo.SHA256,
                    sha384: or.algo.SHA384,
                    sha512: or.algo.SHA512,
                    ripemd160: or.algo.RIPEMD160
                }, this.getDigestInfoHex = function(t, e) {
                    if ("undefined" == typeof this.DIGESTINFOHEAD[e]) throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
                    return this.DIGESTINFOHEAD[e] + t
                }, this.getPaddedDigestInfoHex = function(t, e, n) {
                    var r = this.getDigestInfoHex(t, e),
                        i = n / 4;
                    if (r.length + 22 > i) throw "key is too short for SigAlg: keylen=" + n + "," + e;
                    for (var s = "0001", o = "00" + r, a = "", u = i - s.length - o.length, c = 0; c < u; c += 2) a += "ff";
                    var f = s + a + o;
                    return f
                }, this.hashString = function(t, e) {
                    var n = new Cr.crypto.MessageDigest({
                        alg: e
                    });
                    return n.digestString(t)
                }, this.hashHex = function(t, e) {
                    var n = new Cr.crypto.MessageDigest({
                        alg: e
                    });
                    return n.digestHex(t)
                }, this.sha1 = function(t) {
                    var e = new Cr.crypto.MessageDigest({
                        alg: "sha1",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }, this.sha256 = function(t) {
                    var e = new Cr.crypto.MessageDigest({
                        alg: "sha256",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }, this.sha256Hex = function(t) {
                    var e = new Cr.crypto.MessageDigest({
                        alg: "sha256",
                        prov: "cryptojs"
                    });
                    return e.digestHex(t)
                }, this.sha512 = function(t) {
                    var e = new Cr.crypto.MessageDigest({
                        alg: "sha512",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }, this.sha512Hex = function(t) {
                    var e = new Cr.crypto.MessageDigest({
                        alg: "sha512",
                        prov: "cryptojs"
                    });
                    return e.digestHex(t)
                }, this.md5 = function(t) {
                    var e = new Cr.crypto.MessageDigest({
                        alg: "md5",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }, this.ripemd160 = function(t) {
                    var e = new Cr.crypto.MessageDigest({
                        alg: "ripemd160",
                        prov: "cryptojs"
                    });
                    return e.digestString(t)
                }, this.getCryptoJSMDByName = function(t) {}
            }, Cr.crypto.MessageDigest = function(t) {
                this.setAlgAndProvider = function(t, e) {
                    if (null != t && void 0 === e && (e = Cr.crypto.Util.DEFAULTPROVIDER[t]), ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) != -1 && "cryptojs" == e) {
                        try {
                            this.md = Cr.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create()
                        } catch (e) {
                            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e
                        }
                        this.updateString = function(t) {
                            this.md.update(t)
                        }, this.updateHex = function(t) {
                            var e = or.enc.Hex.parse(t);
                            this.md.update(e)
                        }, this.digest = function() {
                            var t = this.md.finalize();
                            return t.toString(or.enc.Hex)
                        }, this.digestString = function(t) {
                            return this.updateString(t), this.digest()
                        }, this.digestHex = function(t) {
                            return this.updateHex(t), this.digest()
                        }
                    }
                    if (":sha256:".indexOf(t) != -1 && "sjcl" == e) {
                        try {
                            this.md = new sjcl.hash.sha256
                        } catch (e) {
                            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e
                        }
                        this.updateString = function(t) {
                            this.md.update(t)
                        }, this.updateHex = function(t) {
                            var e = sjcl.codec.hex.toBits(t);
                            this.md.update(e)
                        }, this.digest = function() {
                            var t = this.md.finalize();
                            return sjcl.codec.hex.fromBits(t)
                        }, this.digestString = function(t) {
                            return this.updateString(t), this.digest()
                        }, this.digestHex = function(t) {
                            return this.updateHex(t), this.digest()
                        }
                    }
                }, this.updateString = function(t) {
                    throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }, this.updateHex = function(t) {
                    throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }, this.digest = function() {
                    throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName
                }, this.digestString = function(t) {
                    throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }, this.digestHex = function(t) {
                    throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName
                }, void 0 !== t && void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov && (this.provName = Cr.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName))
            }, Cr.crypto.Mac = function(t) {
                this.setAlgAndProvider = function(t, e) {
                    if (t = t.toLowerCase(), null == t && (t = "hmacsha1"), t = t.toLowerCase(), "hmac" != t.substr(0, 4)) throw "setAlgAndProvider unsupported HMAC alg: " + t;
                    void 0 === e && (e = Cr.crypto.Util.DEFAULTPROVIDER[t]), this.algProv = t + "/" + e;
                    var n = t.substr(4);
                    if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(n) != -1 && "cryptojs" == e) {
                        try {
                            var r = Cr.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[n];
                            this.mac = or.algo.HMAC.create(r, this.pass)
                        } catch (t) {
                            throw "setAlgAndProvider hash alg set fail hashAlg=" + n + "/" + t
                        }
                        this.updateString = function(t) {
                            this.mac.update(t)
                        }, this.updateHex = function(t) {
                            var e = or.enc.Hex.parse(t);
                            this.mac.update(e)
                        }, this.doFinal = function() {
                            var t = this.mac.finalize();
                            return t.toString(or.enc.Hex)
                        }, this.doFinalString = function(t) {
                            return this.updateString(t), this.doFinal()
                        }, this.doFinalHex = function(t) {
                            return this.updateHex(t), this.doFinal()
                        }
                    }
                }, this.updateString = function(t) {
                    throw "updateString(str) not supported for this alg/prov: " + this.algProv
                }, this.updateHex = function(t) {
                    throw "updateHex(hex) not supported for this alg/prov: " + this.algProv
                }, this.doFinal = function() {
                    throw "digest() not supported for this alg/prov: " + this.algProv
                }, this.doFinalString = function(t) {
                    throw "digestString(str) not supported for this alg/prov: " + this.algProv
                }, this.doFinalHex = function(t) {
                    throw "digestHex(hex) not supported for this alg/prov: " + this.algProv
                }, this.setPassword = function(t) {
                    if ("string" == typeof t) {
                        var e = t;
                        return t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/) || (e = wn(t)), void(this.pass = or.enc.Hex.parse(e))
                    }
                    if ("object" != typeof t) throw "KJUR.crypto.Mac unsupported password type: " + t;
                    var e = null;
                    if (void 0 !== t.hex) {
                        if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + t.hex;
                        e = t.hex
                    }
                    if (void 0 !== t.utf8 && (e = mn(t.utf8)), void 0 !== t.rstr && (e = wn(t.rstr)), void 0 !== t.b64 && (e = i(t.b64)), void 0 !== t.b64u && (e = gn(t.b64u)), null == e) throw "KJUR.crypto.Mac unsupported password type: " + t;
                    this.pass = or.enc.Hex.parse(e)
                }, void 0 !== t && (void 0 !== t.pass && this.setPassword(t.pass), void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov && (this.provName = Cr.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName)))
            }, Cr.crypto.Signature = function(t) {
                var e = null;
                if (this._setAlgNames = function() {
                        this.algName.match(/^(.+)with(.+)$/) && (this.mdAlgName = RegExp.$1.toLowerCase(), this.pubkeyAlgName = RegExp.$2.toLowerCase())
                    }, this._zeroPaddingOfSignature = function(t, e) {
                        for (var n = "", r = e / 4 - t.length, i = 0; i < r; i++) n += "0";
                        return n + t
                    }, this.setAlgAndProvider = function(t, e) {
                        if (this._setAlgNames(), "cryptojs/jsrsa" != e) throw "provider not supported: " + e;
                        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName) != -1) {
                            try {
                                this.md = new Cr.crypto.MessageDigest({
                                    alg: this.mdAlgName
                                })
                            } catch (t) {
                                throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + t
                            }
                            this.init = function(t, e) {
                                var n = null;
                                try {
                                    n = void 0 === e ? Dr.getKey(t) : Dr.getKey(t, e)
                                } catch (t) {
                                    throw "init failed:" + t
                                }
                                if (n.isPrivate === !0) this.prvKey = n, this.state = "SIGN";
                                else {
                                    if (n.isPublic !== !0) throw "init failed.:" + n;
                                    this.pubKey = n, this.state = "VERIFY"
                                }
                            }, this.initSign = function(t) {
                                "string" == typeof t.ecprvhex && "string" == typeof t.eccurvename ? (this.ecprvhex = t.ecprvhex, this.eccurvename = t.eccurvename) : this.prvKey = t, this.state = "SIGN"
                            }, this.initVerifyByPublicKey = function(t) {
                                "string" == typeof t.ecpubhex && "string" == typeof t.eccurvename ? (this.ecpubhex = t.ecpubhex, this.eccurvename = t.eccurvename) : t instanceof Cr.crypto.ECDSA ? this.pubKey = t : t instanceof ve && (this.pubKey = t), this.state = "VERIFY"
                            }, this.initVerifyByCertificatePEM = function(t) {
                                var e = new $n;
                                e.readCertPEM(t), this.pubKey = e.subjectPublicKeyRSA, this.state = "VERIFY"
                            }, this.updateString = function(t) {
                                this.md.updateString(t)
                            }, this.updateHex = function(t) {
                                this.md.updateHex(t)
                            }, this.sign = function() {
                                if (this.sHashHex = this.md.digest(), "undefined" != typeof this.ecprvhex && "undefined" != typeof this.eccurvename) {
                                    var t = new Cr.crypto.ECDSA({
                                        curve: this.eccurvename
                                    });
                                    this.hSign = t.signHex(this.sHashHex, this.ecprvhex)
                                } else if (this.prvKey instanceof ve && "rsaandmgf1" == this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
                                else if (this.prvKey instanceof ve && "rsa" == this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
                                else if (this.prvKey instanceof Cr.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                                else {
                                    if (!(this.prvKey instanceof Cr.crypto.DSA)) throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                                    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex)
                                }
                                return this.hSign
                            }, this.signString = function(t) {
                                return this.updateString(t), this.sign()
                            }, this.signHex = function(t) {
                                return this.updateHex(t), this.sign()
                            }, this.verify = function(t) {
                                if (this.sHashHex = this.md.digest(), "undefined" != typeof this.ecpubhex && "undefined" != typeof this.eccurvename) {
                                    var e = new Cr.crypto.ECDSA({
                                        curve: this.eccurvename
                                    });
                                    return e.verifyHex(this.sHashHex, t, this.ecpubhex)
                                }
                                if (this.pubKey instanceof ve && "rsaandmgf1" == this.pubkeyAlgName) return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
                                if (this.pubKey instanceof ve && "rsa" == this.pubkeyAlgName) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                                if (this.pubKey instanceof Cr.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                                if (this.pubKey instanceof Cr.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                                throw "Signature: unsupported public key alg: " + this.pubkeyAlgName
                            }
                        }
                    }, this.init = function(t, e) {
                        throw "init(key, pass) not supported for this alg:prov=" + this.algProvName
                    }, this.initVerifyByPublicKey = function(t) {
                        throw "initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov=" + this.algProvName
                    }, this.initVerifyByCertificatePEM = function(t) {
                        throw "initVerifyByCertificatePEM(certPEM) not supported for this alg:prov=" + this.algProvName
                    }, this.initSign = function(t) {
                        throw "initSign(prvKey) not supported for this alg:prov=" + this.algProvName
                    }, this.updateString = function(t) {
                        throw "updateString(str) not supported for this alg:prov=" + this.algProvName
                    }, this.updateHex = function(t) {
                        throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName
                    }, this.sign = function() {
                        throw "sign() not supported for this alg:prov=" + this.algProvName
                    }, this.signString = function(t) {
                        throw "digestString(str) not supported for this alg:prov=" + this.algProvName
                    }, this.signHex = function(t) {
                        throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName
                    }, this.verify = function(t) {
                        throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName
                    }, this.initParams = t, void 0 !== t && (void 0 !== t.alg && (this.algName = t.alg, void 0 === t.prov ? this.provName = Cr.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov, this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), this._setAlgNames()), void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen), void 0 !== t.prvkeypem)) {
                    if (void 0 !== t.prvkeypas) throw "both prvkeypem and prvkeypas parameters not supported";
                    try {
                        var e = new ve;
                        e.readPrivateKeyFromPEMString(t.prvkeypem), this.initSign(e)
                    } catch (t) {
                        throw "fatal error to load pem private key: " + t
                    }
                }
            }, Cr.crypto.OID = new function() {
                this.oidhex2name = {
                    "2a864886f70d010101": "rsaEncryption",
                    "2a8648ce3d0201": "ecPublicKey",
                    "2a8648ce380401": "dsa",
                    "2a8648ce3d030107": "secp256r1",
                    "2b8104001f": "secp192k1",
                    "2b81040021": "secp224r1",
                    "2b8104000a": "secp256k1",
                    "2b81040023": "secp521r1",
                    "2b81040022": "secp384r1",
                    "2a8648ce380403": "SHA1withDSA",
                    "608648016503040301": "SHA224withDSA",
                    "608648016503040302": "SHA256withDSA"
                }
            },
            /*! ecdsa-modified-1.0.5.js (c) Stephan Thomas, Kenji Urushima | github.com/bitcoinjs/bitcoinjs-lib/blob/master/LICENSE
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.crypto && Cr.crypto || (Cr.crypto = {}), Cr.crypto.ECDSA = function(t) {
                var e = "secp256r1",
                    n = new le;
                this.type = "EC", this.getBigRandom = function(t) {
                    return new o(t.bitLength(), n).mod(t.subtract(o.ONE)).add(o.ONE)
                }, this.setNamedCurve = function(t) {
                    this.ecparams = Cr.crypto.ECParameterDB.getByName(t), this.prvKeyHex = null, this.pubKeyHex = null, this.curveName = t
                }, this.setPrivateKeyHex = function(t) {
                    this.isPrivate = !0, this.prvKeyHex = t
                }, this.setPublicKeyHex = function(t) {
                    this.isPublic = !0, this.pubKeyHex = t
                }, this.getPublicKeyXYHex = function() {
                    var t = this.pubKeyHex;
                    if ("04" !== t.substr(0, 2)) throw "this method supports uncompressed format(04) only";
                    var e = this.ecparams.keylen / 4;
                    if (t.length !== 2 + 2 * e) throw "malformed public key hex length";
                    var n = {};
                    return n.x = t.substr(2, e), n.y = t.substr(2 + e), n
                }, this.getShortNISTPCurveName = function() {
                    var t = this.curveName;
                    return "secp256r1" === t || "NIST P-256" === t || "P-256" === t || "prime256v1" === t ? "P-256" : "secp384r1" === t || "NIST P-384" === t || "P-384" === t ? "P-384" : null
                }, this.generateKeyPairHex = function() {
                    var t = this.ecparams.n,
                        e = this.getBigRandom(t),
                        n = this.ecparams.G.multiply(e),
                        r = n.getX().toBigInteger(),
                        i = n.getY().toBigInteger(),
                        s = this.ecparams.keylen / 4,
                        o = ("0000000000" + e.toString(16)).slice(-s),
                        a = ("0000000000" + r.toString(16)).slice(-s),
                        u = ("0000000000" + i.toString(16)).slice(-s),
                        c = "04" + a + u;
                    return this.setPrivateKeyHex(o), this.setPublicKeyHex(c), {
                        ecprvhex: o,
                        ecpubhex: c
                    }
                }, this.signWithMessageHash = function(t) {
                    return this.signHex(t, this.prvKeyHex)
                }, this.signHex = function(t, e) {
                    var n = new o(e, 16),
                        r = this.ecparams.n,
                        i = new o(t, 16);
                    do var s = this.getBigRandom(r),
                        a = this.ecparams.G,
                        u = a.multiply(s),
                        c = u.getX().toBigInteger().mod(r); while (c.compareTo(o.ZERO) <= 0);
                    var f = s.modInverse(r).multiply(i.add(n.multiply(c))).mod(r);
                    return Cr.crypto.ECDSA.biRSSigToASN1Sig(c, f)
                }, this.sign = function(t, e) {
                    var n = e,
                        r = this.ecparams.n,
                        i = o.fromByteArrayUnsigned(t);
                    do var s = this.getBigRandom(r),
                        a = this.ecparams.G,
                        u = a.multiply(s),
                        c = u.getX().toBigInteger().mod(r); while (c.compareTo(o.ZERO) <= 0);
                    var f = s.modInverse(r).multiply(i.add(n.multiply(c))).mod(r);
                    return this.serializeSig(c, f)
                }, this.verifyWithMessageHash = function(t, e) {
                    return this.verifyHex(t, e, this.pubKeyHex)
                }, this.verifyHex = function(t, e, n) {
                    var r, i, s = Cr.crypto.ECDSA.parseSigHex(e);
                    r = s.r, i = s.s;
                    var a;
                    a = Ve.decodeFromHex(this.ecparams.curve, n);
                    var u = new o(t, 16);
                    return this.verifyRaw(u, r, i, a)
                }, this.verify = function(t, e, n) {
                    var r, i;
                    if (Bitcoin.Util.isArray(e)) {
                        var s = this.parseSig(e);
                        r = s.r, i = s.s
                    } else {
                        if ("object" != typeof e || !e.r || !e.s) throw "Invalid value for signature";
                        r = e.r, i = e.s
                    }
                    var a;
                    if (n instanceof Ve) a = n;
                    else {
                        if (!Bitcoin.Util.isArray(n)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
                        a = Ve.decodeFrom(this.ecparams.curve, n)
                    }
                    var u = o.fromByteArrayUnsigned(t);
                    return this.verifyRaw(u, r, i, a)
                }, this.verifyRaw = function(t, e, n, r) {
                    var i = this.ecparams.n,
                        s = this.ecparams.G;
                    if (e.compareTo(o.ONE) < 0 || e.compareTo(i) >= 0) return !1;
                    if (n.compareTo(o.ONE) < 0 || n.compareTo(i) >= 0) return !1;
                    var a = n.modInverse(i),
                        u = t.multiply(a).mod(i),
                        c = e.multiply(a).mod(i),
                        f = s.multiply(u).add(r.multiply(c)),
                        h = f.getX().toBigInteger().mod(i);
                    return h.equals(e)
                }, this.serializeSig = function(t, e) {
                    var n = t.toByteArraySigned(),
                        r = e.toByteArraySigned(),
                        i = [];
                    return i.push(2), i.push(n.length), i = i.concat(n), i.push(2), i.push(r.length), i = i.concat(r), i.unshift(i.length), i.unshift(48), i
                }, this.parseSig = function(t) {
                    var e;
                    if (48 != t[0]) throw new Error("Signature not a valid DERSequence");
                    if (e = 2, 2 != t[e]) throw new Error("First element in signature must be a DERInteger");
                    var n = t.slice(e + 2, e + 2 + t[e + 1]);
                    if (e += 2 + t[e + 1], 2 != t[e]) throw new Error("Second element in signature must be a DERInteger");
                    var r = t.slice(e + 2, e + 2 + t[e + 1]);
                    e += 2 + t[e + 1];
                    var i = o.fromByteArrayUnsigned(n),
                        s = o.fromByteArrayUnsigned(r);
                    return {
                        r: i,
                        s: s
                    }
                }, this.parseSigCompact = function(t) {
                    if (65 !== t.length) throw "Signature has the wrong length";
                    var e = t[0] - 27;
                    if (e < 0 || e > 7) throw "Invalid signature type";
                    var n = this.ecparams.n,
                        r = o.fromByteArrayUnsigned(t.slice(1, 33)).mod(n),
                        i = o.fromByteArrayUnsigned(t.slice(33, 65)).mod(n);
                    return {
                        r: r,
                        s: i,
                        i: e
                    }
                }, void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve), void 0 === this.curveName && (this.curveName = e), this.setNamedCurve(this.curveName), void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv), void 0 !== t.pub && this.setPublicKeyHex(t.pub))
            }, Cr.crypto.ECDSA.parseSigHex = function(t) {
                var e = Cr.crypto.ECDSA.parseSigHexInHexRS(t),
                    n = new o(e.r, 16),
                    r = new o(e.s, 16);
                return {
                    r: n,
                    s: r
                }
            }, Cr.crypto.ECDSA.parseSigHexInHexRS = function(t) {
                if ("30" != t.substr(0, 2)) throw "signature is not a ASN.1 sequence";
                var e = Or.getPosArrayOfChildren_AtObj(t, 0);
                if (2 != e.length) throw "number of signature ASN.1 sequence elements seem wrong";
                var n = e[0],
                    r = e[1];
                if ("02" != t.substr(n, 2)) throw "1st item of sequene of signature is not ASN.1 integer";
                if ("02" != t.substr(r, 2)) throw "2nd item of sequene of signature is not ASN.1 integer";
                var i = Or.getHexOfV_AtObj(t, n),
                    s = Or.getHexOfV_AtObj(t, r);
                return {
                    r: i,
                    s: s
                }
            }, Cr.crypto.ECDSA.asn1SigToConcatSig = function(t) {
                var e = Cr.crypto.ECDSA.parseSigHexInHexRS(t),
                    n = e.r,
                    r = e.s;
                if ("00" == n.substr(0, 2) && n.length / 2 * 8 % 128 == 8 && (n = n.substr(2)), "00" == r.substr(0, 2) && r.length / 2 * 8 % 128 == 8 && (r = r.substr(2)), n.length / 2 * 8 % 128 != 0) throw "unknown ECDSA sig r length error";
                if (r.length / 2 * 8 % 128 != 0) throw "unknown ECDSA sig s length error";
                return n + r
            }, Cr.crypto.ECDSA.concatSigToASN1Sig = function(t) {
                if (t.length / 2 * 8 % 128 != 0) throw "unknown ECDSA concatinated r-s sig  length error";
                var e = t.substr(0, t.length / 2),
                    n = t.substr(t.length / 2);
                return Cr.crypto.ECDSA.hexRSSigToASN1Sig(e, n)
            }, Cr.crypto.ECDSA.hexRSSigToASN1Sig = function(t, e) {
                var n = new o(t, 16),
                    r = new o(e, 16);
                return Cr.crypto.ECDSA.biRSSigToASN1Sig(n, r)
            }, Cr.crypto.ECDSA.biRSSigToASN1Sig = function(t, e) {
                var n = new Cr.asn1.DERInteger({
                        bigint: t
                    }),
                    r = new Cr.asn1.DERInteger({
                        bigint: e
                    }),
                    i = new Cr.asn1.DERSequence({
                        array: [n, r]
                    });
                return i.getEncodedHex()
            },
            /*! ecparam-1.0.0.js (c) 2013 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.crypto && Cr.crypto || (Cr.crypto = {}), Cr.crypto.ECParameterDB = new function() {
                function t(t) {
                    return new o(t, 16)
                }
                var e = {},
                    n = {};
                this.getByName = function(t) {
                    var r = t;
                    if ("undefined" != typeof n[r] && (r = n[t]), "undefined" != typeof e[r]) return e[r];
                    throw "unregistered EC curve name: " + r
                }, this.regist = function(r, i, s, o, a, u, c, f, h, l, d, p) {
                    e[r] = {};
                    var g = t(s),
                        y = t(o),
                        v = t(a),
                        m = t(u),
                        S = t(c),
                        b = new Xe(g, y, v),
                        w = b.decodePointHex("04" + f + h);
                    e[r].name = r, e[r].keylen = i, e[r].curve = b, e[r].G = w, e[r].n = m, e[r].h = S, e[r].oid = d, e[r].info = p;
                    for (var _ = 0; _ < l.length; _++) n[l[_]] = r
                }
            }, Cr.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), Cr.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), Cr.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), Cr.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), Cr.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), Cr.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), Cr.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), Cr.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]), Cr.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]), Cr.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]),
            /*! dsa-modified-1.0.1.js (c) Recurity Labs GmbH, Kenji Urushimma | github.com/openpgpjs/openpgpjs/blob/master/LICENSE
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.crypto && Cr.crypto || (Cr.crypto = {}), Cr.crypto.DSA = function() {
                function t(t, e, n, i, s, a) {
                    var u = Cr.crypto.Util.hashString(e, t.toLowerCase()),
                        u = u.substr(0, s.bitLength() / 4),
                        c = new o(u, 16),
                        f = r(o.ONE.add(o.ONE), s.subtract(o.ONE)),
                        h = n.modPow(f, i).mod(s),
                        l = f.modInverse(s).multiply(c.add(a.multiply(h))).mod(s),
                        d = new Array;
                    return d[0] = h, d[1] = l, d
                }

                function e(t) {
                    var e = openpgp.config.config.prefer_hash_algorithm;
                    switch (Math.round(t.bitLength() / 8)) {
                        case 20:
                            return 2 != e && e > 11 && 10 != e && e < 8 ? 2 : e;
                        case 28:
                            return e > 11 && e < 8 ? 11 : e;
                        case 32:
                            return e > 10 && e < 8 ? 8 : e;
                        default:
                            return util.print_debug("DSA select hash algorithm: returning null for an unknown length of q"), null
                    }
                }

                function n(t, e, n, r, i, s, a, u) {
                    var c = Cr.crypto.Util.hashString(r, t.toLowerCase()),
                        c = c.substr(0, s.bitLength() / 4),
                        f = new o(c, 16);
                    if (o.ZERO.compareTo(e) > 0 || e.compareTo(s) > 0 || o.ZERO.compareTo(n) > 0 || n.compareTo(s) > 0) return util.print_error("invalid DSA Signature"), null;
                    var h = n.modInverse(s),
                        l = f.multiply(h).mod(s),
                        d = e.multiply(h).mod(s),
                        p = a.modPow(l, i).multiply(u.modPow(d, i)).mod(i).mod(s);
                    return 0 == p.compareTo(e)
                }

                function r(t, e) {
                    if (!(e.compareTo(t) <= 0)) {
                        for (var n = e.subtract(t), r = i(n.bitLength()); r > n;) r = i(n.bitLength());
                        return t.add(r)
                    }
                }

                function i(t) {
                    if (t < 0) return null;
                    var e = Math.floor((t + 7) / 8),
                        n = s(e);
                    return t % 8 > 0 && (n = String.fromCharCode(Math.pow(2, t % 8) - 1 & n.charCodeAt(0)) + n.substring(1)), new o(u(n), 16)
                }

                function s(t) {
                    for (var e = "", n = 0; n < t; n++) e += String.fromCharCode(a());
                    return e
                }

                function a() {
                    var t = new Uint32Array(1);
                    return ir.crypto.getRandomValues(t), 255 & t[0]
                }

                function u(t) {
                    if (null == t) return "";
                    for (var e, n = [], r = t.length, i = 0; i < r;) {
                        for (e = t[i++].charCodeAt().toString(16); e.length < 2;) e = "0" + e;
                        n.push("" + e)
                    }
                    return n.join("")
                }
                this.p = null, this.q = null, this.g = null, this.y = null, this.x = null, this.type = "DSA", this.setPrivate = function(t, e, n, r, i) {
                    this.isPrivate = !0, this.p = t, this.q = e, this.g = n, this.y = r, this.x = i
                }, this.setPublic = function(t, e, n, r) {
                    this.isPublic = !0, this.p = t, this.q = e, this.g = n, this.y = r, this.x = null
                }, this.signWithMessageHash = function(t) {
                    var e = this.p,
                        n = this.q,
                        i = this.g,
                        s = (this.y, this.x),
                        a = (t.substr(0, n.bitLength() / 4), new o(t, 16)),
                        u = r(o.ONE.add(o.ONE), n.subtract(o.ONE)),
                        c = i.modPow(u, e).mod(n),
                        f = u.modInverse(n).multiply(a.add(s.multiply(c))).mod(n),
                        h = Cr.asn1.ASN1Util.jsonToASN1HEX({
                            seq: [{
                                int: {
                                    bigint: c
                                }
                            }, {
                                int: {
                                    bigint: f
                                }
                            }]
                        });
                    return h
                }, this.verifyWithMessageHash = function(t, e) {
                    var n = this.p,
                        r = this.q,
                        i = this.g,
                        s = this.y,
                        a = this.parseASN1Signature(e),
                        u = a[0],
                        c = a[1],
                        t = t.substr(0, r.bitLength() / 4),
                        f = new o(t, 16);
                    if (o.ZERO.compareTo(u) > 0 || u.compareTo(r) > 0 || o.ZERO.compareTo(c) > 0 || c.compareTo(r) > 0) throw "invalid DSA signature";
                    var h = c.modInverse(r),
                        l = f.multiply(h).mod(r),
                        d = u.multiply(h).mod(r),
                        p = i.modPow(l, n).multiply(s.modPow(d, n)).mod(n).mod(r);
                    return 0 == p.compareTo(u)
                }, this.parseASN1Signature = function(t) {
                    try {
                        var e = new o(Or.getVbyList(t, 0, [0], "02"), 16),
                            n = new o(Or.getVbyList(t, 0, [1], "02"), 16);
                        return [e, n]
                    } catch (t) {
                        throw "malformed DSA signature"
                    }
                }, this.select_hash_algorithm = e, this.sign = t, this.verify = n, this.getRandomBigIntegerInRange = r, this.getRandomBigInteger = i, this.getRandomBytes = s
            };
        /*! pkcs5pkey-1.0.6.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        var Rr = function() {
                var t = function(t, e, r) {
                        return n(or.AES, t, e, r)
                    },
                    e = function(t, e, r) {
                        return n(or.TripleDES, t, e, r)
                    },
                    n = function(t, e, n, r) {
                        var i = or.enc.Hex.parse(e),
                            s = or.enc.Hex.parse(n),
                            o = or.enc.Hex.parse(r),
                            a = {};
                        a.key = s, a.iv = o, a.ciphertext = i;
                        var u = t.decrypt(a, s, {
                            iv: o
                        });
                        return or.enc.Hex.stringify(u)
                    },
                    r = function(t, e, n) {
                        return o(or.AES, t, e, n)
                    },
                    s = function(t, e, n) {
                        return o(or.TripleDES, t, e, n)
                    },
                    o = function(t, e, n, r) {
                        var i = or.enc.Hex.parse(e),
                            s = or.enc.Hex.parse(n),
                            o = or.enc.Hex.parse(r),
                            a = t.encrypt(i, s, {
                                iv: o
                            }),
                            u = or.enc.Hex.parse(a.toString()),
                            c = or.enc.Base64.stringify(u);
                        return c
                    },
                    a = {
                        "AES-256-CBC": {
                            proc: t,
                            eproc: r,
                            keylen: 32,
                            ivlen: 16
                        },
                        "AES-192-CBC": {
                            proc: t,
                            eproc: r,
                            keylen: 24,
                            ivlen: 16
                        },
                        "AES-128-CBC": {
                            proc: t,
                            eproc: r,
                            keylen: 16,
                            ivlen: 16
                        },
                        "DES-EDE3-CBC": {
                            proc: e,
                            eproc: s,
                            keylen: 24,
                            ivlen: 8
                        }
                    },
                    u = function(t) {
                        return a[t].proc
                    },
                    c = function(t) {
                        var e = or.lib.WordArray.random(t),
                            n = or.enc.Hex.stringify(e);
                        return n
                    },
                    f = function(t) {
                        var e = {};
                        t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m")) && (e.cipher = RegExp.$1, e.ivsalt = RegExp.$2), t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----")) && (e.type = RegExp.$1);
                        var n = -1,
                            r = 0;
                        t.indexOf("\r\n\r\n") != -1 && (n = t.indexOf("\r\n\r\n"), r = 2), t.indexOf("\n\n") != -1 && (n = t.indexOf("\n\n"), r = 1);
                        var i = t.indexOf("-----END");
                        if (n != -1 && i != -1) {
                            var s = t.substring(n + 2 * r, i - r);
                            s = s.replace(/\s+/g, ""), e.data = s
                        }
                        return e
                    },
                    h = function(t, e, n) {
                        for (var r = n.substring(0, 16), i = or.enc.Hex.parse(r), s = or.enc.Utf8.parse(e), o = a[t].keylen + a[t].ivlen, u = "", c = null;;) {
                            var f = or.algo.MD5.create();
                            if (null != c && f.update(c), f.update(s), f.update(i), c = f.finalize(), u += or.enc.Hex.stringify(c), u.length >= 2 * o) break
                        }
                        var h = {};
                        return h.keyhex = u.substr(0, 2 * a[t].keylen), h.ivhex = u.substr(2 * a[t].keylen, 2 * a[t].ivlen), h
                    },
                    l = function(t, e, n, r) {
                        var i = or.enc.Base64.parse(t),
                            s = or.enc.Hex.stringify(i),
                            o = a[e].proc,
                            u = o(s, n, r);
                        return u
                    },
                    d = function(t, e, n, r) {
                        var i = a[e].eproc,
                            s = i(t, n, r);
                        return s
                    };
                return {
                    version: "1.0.5",
                    getHexFromPEM: function(t, e) {
                        var n = t;
                        if (n.indexOf("BEGIN " + e) == -1) throw "can't find PEM header: " + e;
                        n = n.replace("-----BEGIN " + e + "-----", ""), n = n.replace("-----END " + e + "-----", "");
                        var r = n.replace(/\s+/g, ""),
                            s = i(r);
                        return s
                    },
                    getDecryptedKeyHexByKeyIV: function(t, e, n, r) {
                        var i = u(e);
                        return i(t, n, r)
                    },
                    parsePKCS5PEM: function(t) {
                        return f(t)
                    },
                    getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, n) {
                        return h(t, e, n)
                    },
                    decryptKeyB64: function(t, e, n, r) {
                        return l(t, e, n, r)
                    },
                    getDecryptedKeyHex: function(t, e) {
                        var n = f(t),
                            r = (n.type, n.cipher),
                            i = n.ivsalt,
                            s = n.data,
                            o = h(r, e, i),
                            a = o.keyhex,
                            u = l(s, r, a, i);
                        return u
                    },
                    getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
                        var n = this.getDecryptedKeyHex(t, e),
                            r = new ve;
                        return r.readPrivateKeyFromASN1HexString(n), r
                    },
                    getEryptedPKCS5PEMFromPrvKeyHex: function(t, e, n, r) {
                        var i = "";
                        if ("undefined" != typeof n && null != n || (n = "AES-256-CBC"), "undefined" == typeof a[n]) throw "PKCS5PKEY unsupported algorithm: " + n;
                        if ("undefined" == typeof r || null == r) {
                            var s = a[n].ivlen,
                                o = c(s);
                            r = o.toUpperCase()
                        }
                        var u = h(n, e, r),
                            f = u.keyhex,
                            l = d(t, n, f, r),
                            p = l.replace(/(.{64})/g, "$1\r\n"),
                            i = "-----BEGIN RSA PRIVATE KEY-----\r\n";
                        return i += "Proc-Type: 4,ENCRYPTED\r\n", i += "DEK-Info: " + n + "," + r + "\r\n", i += "\r\n", i += p, i += "\r\n-----END RSA PRIVATE KEY-----\r\n"
                    },
                    getEryptedPKCS5PEMFromRSAKey: function(t, e, n, r) {
                        var i = new Cr.asn1.DERInteger({
                                int: 0
                            }),
                            s = new Cr.asn1.DERInteger({
                                bigint: t.n
                            }),
                            o = new Cr.asn1.DERInteger({
                                int: t.e
                            }),
                            a = new Cr.asn1.DERInteger({
                                bigint: t.d
                            }),
                            u = new Cr.asn1.DERInteger({
                                bigint: t.p
                            }),
                            c = new Cr.asn1.DERInteger({
                                bigint: t.q
                            }),
                            f = new Cr.asn1.DERInteger({
                                bigint: t.dmp1
                            }),
                            h = new Cr.asn1.DERInteger({
                                bigint: t.dmq1
                            }),
                            l = new Cr.asn1.DERInteger({
                                bigint: t.coeff
                            }),
                            d = new Cr.asn1.DERSequence({
                                array: [i, s, o, a, u, c, f, h, l]
                            }),
                            p = d.getEncodedHex();
                        return this.getEryptedPKCS5PEMFromPrvKeyHex(p, e, n, r)
                    },
                    newEncryptedPKCS5PEM: function(t, e, n, r) {
                        "undefined" != typeof e && null != e || (e = 1024), "undefined" != typeof n && null != n || (n = "10001");
                        var i = new ve;
                        i.generate(e, n);
                        var s = null;
                        return s = "undefined" == typeof r || null == r ? this.getEncryptedPKCS5PEMFromRSAKey(pkey, t) : this.getEncryptedPKCS5PEMFromRSAKey(pkey, t, r)
                    },
                    getRSAKeyFromPlainPKCS8PEM: function(t) {
                        if (t.match(/ENCRYPTED/)) throw "pem shall be not ENCRYPTED";
                        var e = this.getHexFromPEM(t, "PRIVATE KEY"),
                            n = this.getRSAKeyFromPlainPKCS8Hex(e);
                        return n
                    },
                    getRSAKeyFromPlainPKCS8Hex: function(t) {
                        var e = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (3 != e.length) throw "outer DERSequence shall have 3 elements: " + e.length;
                        var n = Or.getHexOfTLV_AtObj(t, e[1]);
                        if ("300d06092a864886f70d0101010500" != n) throw "PKCS8 AlgorithmIdentifier is not rsaEnc: " + n;
                        var n = Or.getHexOfTLV_AtObj(t, e[1]),
                            r = Or.getHexOfTLV_AtObj(t, e[2]),
                            i = Or.getHexOfV_AtObj(r, 0),
                            s = new ve;
                        return s.readPrivateKeyFromASN1HexString(i), s
                    },
                    parseHexOfEncryptedPKCS8: function(t) {
                        var e = {},
                            n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length) throw "malformed format: SEQUENCE(0).items != 2: " + n.length;
                        e.ciphertext = Or.getHexOfV_AtObj(t, n[1]);
                        var r = Or.getPosArrayOfChildren_AtObj(t, n[0]);
                        if (2 != r.length) throw "malformed format: SEQUENCE(0.0).items != 2: " + r.length;
                        if ("2a864886f70d01050d" != Or.getHexOfV_AtObj(t, r[0])) throw "this only supports pkcs5PBES2";
                        var i = Or.getPosArrayOfChildren_AtObj(t, r[1]);
                        if (2 != r.length) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + i.length;
                        var s = Or.getPosArrayOfChildren_AtObj(t, i[1]);
                        if (2 != s.length) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
                        if ("2a864886f70d0307" != Or.getHexOfV_AtObj(t, s[0])) throw "this only supports TripleDES";
                        e.encryptionSchemeAlg = "TripleDES", e.encryptionSchemeIV = Or.getHexOfV_AtObj(t, s[1]);
                        var o = Or.getPosArrayOfChildren_AtObj(t, i[0]);
                        if (2 != o.length) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + o.length;
                        if ("2a864886f70d01050c" != Or.getHexOfV_AtObj(t, o[0])) throw "this only supports pkcs5PBKDF2";
                        var a = Or.getPosArrayOfChildren_AtObj(t, o[1]);
                        if (a.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + a.length;
                        e.pbkdf2Salt = Or.getHexOfV_AtObj(t, a[0]);
                        var u = Or.getHexOfV_AtObj(t, a[1]);
                        try {
                            e.pbkdf2Iter = parseInt(u, 16)
                        } catch (t) {
                            throw "malformed format pbkdf2Iter: " + u
                        }
                        return e
                    },
                    getPBKDF2KeyHexFromParam: function(t, e) {
                        var n = or.enc.Hex.parse(t.pbkdf2Salt),
                            r = t.pbkdf2Iter,
                            i = or.PBKDF2(e, n, {
                                keySize: 6,
                                iterations: r
                            }),
                            s = or.enc.Hex.stringify(i);
                        return s
                    },
                    getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getHexFromPEM(t, "ENCRYPTED PRIVATE KEY"),
                            r = this.parseHexOfEncryptedPKCS8(n),
                            i = Rr.getPBKDF2KeyHexFromParam(r, e),
                            s = {};
                        s.ciphertext = or.enc.Hex.parse(r.ciphertext);
                        var o = or.enc.Hex.parse(i),
                            a = or.enc.Hex.parse(r.encryptionSchemeIV),
                            u = or.TripleDES.decrypt(s, o, {
                                iv: a
                            }),
                            c = or.enc.Hex.stringify(u);
                        return c
                    },
                    getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e),
                            r = this.getRSAKeyFromPlainPKCS8Hex(n);
                        return r
                    },
                    getKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e),
                            r = this.getKeyFromPlainPrivatePKCS8Hex(n);
                        return r
                    },
                    parsePlainPrivatePKCS8Hex: function(t) {
                        var e = {};
                        if (e.algparam = null, "30" != t.substr(0, 2)) throw "malformed plain PKCS8 private key(code:001)";
                        var n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (3 != n.length) throw "malformed plain PKCS8 private key(code:002)";
                        if ("30" != t.substr(n[1], 2)) throw "malformed PKCS8 private key(code:003)";
                        var r = Or.getPosArrayOfChildren_AtObj(t, n[1]);
                        if (2 != r.length) throw "malformed PKCS8 private key(code:004)";
                        if ("06" != t.substr(r[0], 2)) throw "malformed PKCS8 private key(code:005)";
                        if (e.algoid = Or.getHexOfV_AtObj(t, r[0]), "06" == t.substr(r[1], 2) && (e.algparam = Or.getHexOfV_AtObj(t, r[1])), "04" != t.substr(n[2], 2)) throw "malformed PKCS8 private key(code:006)";
                        return e.keyidx = Or.getStartPosOfV_AtObj(t, n[2]), e
                    },
                    getKeyFromPlainPrivatePKCS8PEM: function(t) {
                        var e = this.getHexFromPEM(t, "PRIVATE KEY"),
                            n = this.getKeyFromPlainPrivatePKCS8Hex(e);
                        return n
                    },
                    getKeyFromPlainPrivatePKCS8Hex: function(t) {
                        var e = this.parsePlainPrivatePKCS8Hex(t);
                        if ("2a864886f70d010101" == e.algoid) {
                            this.parsePrivateRawRSAKeyHexAtObj(t, e);
                            var n = e.key,
                                r = new ve;
                            return r.setPrivateEx(n.n, n.e, n.d, n.p, n.q, n.dp, n.dq, n.co), r
                        }
                        if ("2a8648ce3d0201" == e.algoid) {
                            if (this.parsePrivateRawECKeyHexAtObj(t, e), void 0 === Cr.crypto.OID.oidhex2name[e.algparam]) throw "KJUR.crypto.OID.oidhex2name undefined: " + e.algparam;
                            var i = Cr.crypto.OID.oidhex2name[e.algparam],
                                r = new Cr.crypto.ECDSA({
                                    curve: i,
                                    prv: e.key
                                });
                            return r
                        }
                        throw "unsupported private key algorithm"
                    },
                    getRSAKeyFromPublicPKCS8PEM: function(t) {
                        var e = this.getHexFromPEM(t, "PUBLIC KEY"),
                            n = this.getRSAKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8PEM: function(t) {
                        var e = this.getHexFromPEM(t, "PUBLIC KEY"),
                            n = this.getKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8Hex: function(t) {
                        var e = this.parsePublicPKCS8Hex(t);
                        if ("2a864886f70d010101" == e.algoid) {
                            var n = this.parsePublicRawRSAKeyHex(e.key),
                                r = new ve;
                            return r.setPublic(n.n, n.e), r
                        }
                        if ("2a8648ce3d0201" == e.algoid) {
                            if (void 0 === Cr.crypto.OID.oidhex2name[e.algparam]) throw "KJUR.crypto.OID.oidhex2name undefined: " + e.algparam;
                            var i = Cr.crypto.OID.oidhex2name[e.algparam],
                                r = new Cr.crypto.ECDSA({
                                    curve: i,
                                    pub: e.key
                                });
                            return r
                        }
                        throw "unsupported public key algorithm"
                    },
                    parsePublicRawRSAKeyHex: function(t) {
                        var e = {};
                        if ("30" != t.substr(0, 2)) throw "malformed RSA key(code:001)";
                        var n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length) throw "malformed RSA key(code:002)";
                        if ("02" != t.substr(n[0], 2)) throw "malformed RSA key(code:003)";
                        if (e.n = Or.getHexOfV_AtObj(t, n[0]), "02" != t.substr(n[1], 2)) throw "malformed RSA key(code:004)";
                        return e.e = Or.getHexOfV_AtObj(t, n[1]), e
                    },
                    parsePrivateRawRSAKeyHexAtObj: function(t, e) {
                        var n = e.keyidx;
                        if ("30" != t.substr(n, 2)) throw "malformed RSA private key(code:001)";
                        var r = Or.getPosArrayOfChildren_AtObj(t, n);
                        if (9 != r.length) throw "malformed RSA private key(code:002)";
                        e.key = {}, e.key.n = Or.getHexOfV_AtObj(t, r[1]), e.key.e = Or.getHexOfV_AtObj(t, r[2]), e.key.d = Or.getHexOfV_AtObj(t, r[3]), e.key.p = Or.getHexOfV_AtObj(t, r[4]), e.key.q = Or.getHexOfV_AtObj(t, r[5]), e.key.dp = Or.getHexOfV_AtObj(t, r[6]), e.key.dq = Or.getHexOfV_AtObj(t, r[7]), e.key.co = Or.getHexOfV_AtObj(t, r[8])
                    },
                    parsePrivateRawECKeyHexAtObj: function(t, e) {
                        var n = e.keyidx;
                        if ("30" != t.substr(n, 2)) throw "malformed ECC private key(code:001)";
                        var r = Or.getPosArrayOfChildren_AtObj(t, n);
                        if (3 != r.length) throw "malformed ECC private key(code:002)";
                        if ("04" != t.substr(r[1], 2)) throw "malformed ECC private key(code:003)";
                        e.key = Or.getHexOfV_AtObj(t, r[1])
                    },
                    parsePublicPKCS8Hex: function(t) {
                        var e = {};
                        e.algparam = null;
                        var n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length) throw "outer DERSequence shall have 2 elements: " + n.length;
                        var r = n[0];
                        if ("30" != t.substr(r, 2)) throw "malformed PKCS8 public key(code:001)";
                        var i = Or.getPosArrayOfChildren_AtObj(t, r);
                        if (2 != i.length) throw "malformed PKCS8 public key(code:002)";
                        if ("06" != t.substr(i[0], 2)) throw "malformed PKCS8 public key(code:003)";
                        if (e.algoid = Or.getHexOfV_AtObj(t, i[0]), "06" == t.substr(i[1], 2) && (e.algparam = Or.getHexOfV_AtObj(t, i[1])), "03" != t.substr(n[1], 2)) throw "malformed PKCS8 public key(code:004)";
                        return e.key = Or.getHexOfV_AtObj(t, n[1]).substr(2), e
                    },
                    getRSAKeyFromPublicPKCS8Hex: function(t) {
                        var e = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != e.length) throw "outer DERSequence shall have 2 elements: " + e.length;
                        var n = Or.getHexOfTLV_AtObj(t, e[0]);
                        if ("300d06092a864886f70d0101010500" != n) throw "PKCS8 AlgorithmId is not rsaEncryption";
                        if ("03" != t.substr(e[1], 2)) throw "PKCS8 Public Key is not BITSTRING encapslated.";
                        var r = Or.getStartPosOfV_AtObj(t, e[1]) + 2;
                        if ("30" != t.substr(r, 2)) throw "PKCS8 Public Key is not SEQUENCE.";
                        var i = Or.getPosArrayOfChildren_AtObj(t, r);
                        if (2 != i.length) throw "inner DERSequence shall have 2 elements: " + i.length;
                        if ("02" != t.substr(i[0], 2)) throw "N is not ASN.1 INTEGER";
                        if ("02" != t.substr(i[1], 2)) throw "E is not ASN.1 INTEGER";
                        var s = Or.getHexOfV_AtObj(t, i[0]),
                            o = Or.getHexOfV_AtObj(t, i[1]),
                            a = new ve;
                        return a.setPublic(s, o), a
                    }
                }
            }(),
            Dr = function() {
                var t = function(t, e, n) {
                        return r(or.AES, t, e, n)
                    },
                    e = function(t, e, n) {
                        return r(or.TripleDES, t, e, n)
                    },
                    n = function(t, e, n) {
                        return r(or.DES, t, e, n)
                    },
                    r = function(t, e, n, r) {
                        var i = or.enc.Hex.parse(e),
                            s = or.enc.Hex.parse(n),
                            o = or.enc.Hex.parse(r),
                            a = {};
                        a.key = s, a.iv = o, a.ciphertext = i;
                        var u = t.decrypt(a, s, {
                            iv: o
                        });
                        return or.enc.Hex.stringify(u)
                    },
                    s = function(t, e, n) {
                        return c(or.AES, t, e, n)
                    },
                    a = function(t, e, n) {
                        return c(or.TripleDES, t, e, n)
                    },
                    u = function(t, e, n) {
                        return c(or.DES, t, e, n)
                    },
                    c = function(t, e, n, r) {
                        var i = or.enc.Hex.parse(e),
                            s = or.enc.Hex.parse(n),
                            o = or.enc.Hex.parse(r),
                            a = t.encrypt(i, s, {
                                iv: o
                            }),
                            u = or.enc.Hex.parse(a.toString()),
                            c = or.enc.Base64.stringify(u);
                        return c
                    },
                    f = {
                        "AES-256-CBC": {
                            proc: t,
                            eproc: s,
                            keylen: 32,
                            ivlen: 16
                        },
                        "AES-192-CBC": {
                            proc: t,
                            eproc: s,
                            keylen: 24,
                            ivlen: 16
                        },
                        "AES-128-CBC": {
                            proc: t,
                            eproc: s,
                            keylen: 16,
                            ivlen: 16
                        },
                        "DES-EDE3-CBC": {
                            proc: e,
                            eproc: a,
                            keylen: 24,
                            ivlen: 8
                        },
                        "DES-CBC": {
                            proc: n,
                            eproc: u,
                            keylen: 8,
                            ivlen: 8
                        }
                    },
                    h = function(t) {
                        return f[t].proc
                    },
                    l = function(t) {
                        var e = or.lib.WordArray.random(t),
                            n = or.enc.Hex.stringify(e);
                        return n
                    },
                    d = function(t) {
                        var e = {};
                        t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m")) && (e.cipher = RegExp.$1, e.ivsalt = RegExp.$2), t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----")) && (e.type = RegExp.$1);
                        var n = -1,
                            r = 0;
                        t.indexOf("\r\n\r\n") != -1 && (n = t.indexOf("\r\n\r\n"), r = 2), t.indexOf("\n\n") != -1 && (n = t.indexOf("\n\n"), r = 1);
                        var i = t.indexOf("-----END");
                        if (n != -1 && i != -1) {
                            var s = t.substring(n + 2 * r, i - r);
                            s = s.replace(/\s+/g, ""), e.data = s
                        }
                        return e
                    },
                    p = function(t, e, n) {
                        for (var r = n.substring(0, 16), i = or.enc.Hex.parse(r), s = or.enc.Utf8.parse(e), o = f[t].keylen + f[t].ivlen, a = "", u = null;;) {
                            var c = or.algo.MD5.create();
                            if (null != u && c.update(u), c.update(s), c.update(i), u = c.finalize(), a += or.enc.Hex.stringify(u), a.length >= 2 * o) break
                        }
                        var h = {};
                        return h.keyhex = a.substr(0, 2 * f[t].keylen), h.ivhex = a.substr(2 * f[t].keylen, 2 * f[t].ivlen), h
                    },
                    g = function(t, e, n, r) {
                        var i = or.enc.Base64.parse(t),
                            s = or.enc.Hex.stringify(i),
                            o = f[e].proc,
                            a = o(s, n, r);
                        return a
                    },
                    y = function(t, e, n, r) {
                        var i = f[e].eproc,
                            s = i(t, n, r);
                        return s
                    };
                return {
                    version: "1.0.0",
                    getHexFromPEM: function(t, e) {
                        var n = t;
                        if (n.indexOf("-----BEGIN ") == -1) throw "can't find PEM header: " + e;
                        "string" == typeof e && "" != e ? (n = n.replace("-----BEGIN " + e + "-----", ""), n = n.replace("-----END " + e + "-----", "")) : (n = n.replace(/-----BEGIN [^-]+-----/, ""), n = n.replace(/-----END [^-]+-----/, ""));
                        var r = n.replace(/\s+/g, ""),
                            s = i(r);
                        return s
                    },
                    getDecryptedKeyHexByKeyIV: function(t, e, n, r) {
                        var i = h(e);
                        return i(t, n, r)
                    },
                    parsePKCS5PEM: function(t) {
                        return d(t)
                    },
                    getKeyAndUnusedIvByPasscodeAndIvsalt: function(t, e, n) {
                        return p(t, e, n)
                    },
                    decryptKeyB64: function(t, e, n, r) {
                        return g(t, e, n, r)
                    },
                    getDecryptedKeyHex: function(t, e) {
                        var n = d(t),
                            r = (n.type, n.cipher),
                            i = n.ivsalt,
                            s = n.data,
                            o = p(r, e, i),
                            a = o.keyhex,
                            u = g(s, r, a, i);
                        return u
                    },
                    getRSAKeyFromEncryptedPKCS5PEM: function(t, e) {
                        var n = this.getDecryptedKeyHex(t, e),
                            r = new ve;
                        return r.readPrivateKeyFromASN1HexString(n), r
                    },
                    getEncryptedPKCS5PEMFromPrvKeyHex: function(t, e, n, r, i) {
                        var s = "";
                        if ("undefined" != typeof r && null != r || (r = "AES-256-CBC"), "undefined" == typeof f[r]) throw "KEYUTIL unsupported algorithm: " + r;
                        if ("undefined" == typeof i || null == i) {
                            var o = f[r].ivlen,
                                a = l(o);
                            i = a.toUpperCase()
                        }
                        var u = p(r, n, i),
                            c = u.keyhex,
                            h = y(e, r, c, i),
                            d = h.replace(/(.{64})/g, "$1\r\n"),
                            s = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
                        return s += "Proc-Type: 4,ENCRYPTED\r\n", s += "DEK-Info: " + r + "," + i + "\r\n", s += "\r\n", s += d, s += "\r\n-----END " + t + " PRIVATE KEY-----\r\n"
                    },
                    getEncryptedPKCS5PEMFromRSAKey: function(t, e, n, r) {
                        var i = new Cr.asn1.DERInteger({
                                int: 0
                            }),
                            s = new Cr.asn1.DERInteger({
                                bigint: t.n
                            }),
                            o = new Cr.asn1.DERInteger({
                                int: t.e
                            }),
                            a = new Cr.asn1.DERInteger({
                                bigint: t.d
                            }),
                            u = new Cr.asn1.DERInteger({
                                bigint: t.p
                            }),
                            c = new Cr.asn1.DERInteger({
                                bigint: t.q
                            }),
                            f = new Cr.asn1.DERInteger({
                                bigint: t.dmp1
                            }),
                            h = new Cr.asn1.DERInteger({
                                bigint: t.dmq1
                            }),
                            l = new Cr.asn1.DERInteger({
                                bigint: t.coeff
                            }),
                            d = new Cr.asn1.DERSequence({
                                array: [i, s, o, a, u, c, f, h, l]
                            }),
                            p = d.getEncodedHex();
                        return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", p, e, n, r)
                    },
                    newEncryptedPKCS5PEM: function(t, e, n, r) {
                        "undefined" != typeof e && null != e || (e = 1024), "undefined" != typeof n && null != n || (n = "10001");
                        var i = new ve;
                        i.generate(e, n);
                        var s = null;
                        return s = "undefined" == typeof r || null == r ? this.getEncryptedPKCS5PEMFromRSAKey(i, t) : this.getEncryptedPKCS5PEMFromRSAKey(i, t, r)
                    },
                    getRSAKeyFromPlainPKCS8PEM: function(t) {
                        if (t.match(/ENCRYPTED/)) throw "pem shall be not ENCRYPTED";
                        var e = this.getHexFromPEM(t, "PRIVATE KEY"),
                            n = this.getRSAKeyFromPlainPKCS8Hex(e);
                        return n
                    },
                    getRSAKeyFromPlainPKCS8Hex: function(t) {
                        var e = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (3 != e.length) throw "outer DERSequence shall have 3 elements: " + e.length;
                        var n = Or.getHexOfTLV_AtObj(t, e[1]);
                        if ("300d06092a864886f70d0101010500" != n) throw "PKCS8 AlgorithmIdentifier is not rsaEnc: " + n;
                        var n = Or.getHexOfTLV_AtObj(t, e[1]),
                            r = Or.getHexOfTLV_AtObj(t, e[2]),
                            i = Or.getHexOfV_AtObj(r, 0),
                            s = new ve;
                        return s.readPrivateKeyFromASN1HexString(i), s
                    },
                    parseHexOfEncryptedPKCS8: function(t) {
                        var e = {},
                            n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length) throw "malformed format: SEQUENCE(0).items != 2: " + n.length;
                        e.ciphertext = Or.getHexOfV_AtObj(t, n[1]);
                        var r = Or.getPosArrayOfChildren_AtObj(t, n[0]);
                        if (2 != r.length) throw "malformed format: SEQUENCE(0.0).items != 2: " + r.length;
                        if ("2a864886f70d01050d" != Or.getHexOfV_AtObj(t, r[0])) throw "this only supports pkcs5PBES2";
                        var i = Or.getPosArrayOfChildren_AtObj(t, r[1]);
                        if (2 != r.length) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + i.length;
                        var s = Or.getPosArrayOfChildren_AtObj(t, i[1]);
                        if (2 != s.length) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + s.length;
                        if ("2a864886f70d0307" != Or.getHexOfV_AtObj(t, s[0])) throw "this only supports TripleDES";
                        e.encryptionSchemeAlg = "TripleDES", e.encryptionSchemeIV = Or.getHexOfV_AtObj(t, s[1]);
                        var o = Or.getPosArrayOfChildren_AtObj(t, i[0]);
                        if (2 != o.length) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + o.length;
                        if ("2a864886f70d01050c" != Or.getHexOfV_AtObj(t, o[0])) throw "this only supports pkcs5PBKDF2";
                        var a = Or.getPosArrayOfChildren_AtObj(t, o[1]);
                        if (a.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + a.length;
                        e.pbkdf2Salt = Or.getHexOfV_AtObj(t, a[0]);
                        var u = Or.getHexOfV_AtObj(t, a[1]);
                        try {
                            e.pbkdf2Iter = parseInt(u, 16)
                        } catch (t) {
                            throw "malformed format pbkdf2Iter: " + u
                        }
                        return e
                    },
                    getPBKDF2KeyHexFromParam: function(t, e) {
                        var n = or.enc.Hex.parse(t.pbkdf2Salt),
                            r = t.pbkdf2Iter,
                            i = or.PBKDF2(e, n, {
                                keySize: 6,
                                iterations: r
                            }),
                            s = or.enc.Hex.stringify(i);
                        return s
                    },
                    getPlainPKCS8HexFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getHexFromPEM(t, "ENCRYPTED PRIVATE KEY"),
                            r = this.parseHexOfEncryptedPKCS8(n),
                            i = Dr.getPBKDF2KeyHexFromParam(r, e),
                            s = {};
                        s.ciphertext = or.enc.Hex.parse(r.ciphertext);
                        var o = or.enc.Hex.parse(i),
                            a = or.enc.Hex.parse(r.encryptionSchemeIV),
                            u = or.TripleDES.decrypt(s, o, {
                                iv: a
                            }),
                            c = or.enc.Hex.stringify(u);
                        return c
                    },
                    getRSAKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e),
                            r = this.getRSAKeyFromPlainPKCS8Hex(n);
                        return r
                    },
                    getKeyFromEncryptedPKCS8PEM: function(t, e) {
                        var n = this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e),
                            r = this.getKeyFromPlainPrivatePKCS8Hex(n);
                        return r
                    },
                    parsePlainPrivatePKCS8Hex: function(t) {
                        var e = {};
                        if (e.algparam = null, "30" != t.substr(0, 2)) throw "malformed plain PKCS8 private key(code:001)";
                        var n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (3 != n.length) throw "malformed plain PKCS8 private key(code:002)";
                        if ("30" != t.substr(n[1], 2)) throw "malformed PKCS8 private key(code:003)";
                        var r = Or.getPosArrayOfChildren_AtObj(t, n[1]);
                        if (2 != r.length) throw "malformed PKCS8 private key(code:004)";
                        if ("06" != t.substr(r[0], 2)) throw "malformed PKCS8 private key(code:005)";
                        if (e.algoid = Or.getHexOfV_AtObj(t, r[0]), "06" == t.substr(r[1], 2) && (e.algparam = Or.getHexOfV_AtObj(t, r[1])), "04" != t.substr(n[2], 2)) throw "malformed PKCS8 private key(code:006)";
                        return e.keyidx = Or.getStartPosOfV_AtObj(t, n[2]), e
                    },
                    getKeyFromPlainPrivatePKCS8PEM: function(t) {
                        var e = this.getHexFromPEM(t, "PRIVATE KEY"),
                            n = this.getKeyFromPlainPrivatePKCS8Hex(e);
                        return n
                    },
                    getKeyFromPlainPrivatePKCS8Hex: function(t) {
                        var e = this.parsePlainPrivatePKCS8Hex(t);
                        if ("2a864886f70d010101" == e.algoid) {
                            this.parsePrivateRawRSAKeyHexAtObj(t, e);
                            var n = e.key,
                                r = new ve;
                            return r.setPrivateEx(n.n, n.e, n.d, n.p, n.q, n.dp, n.dq, n.co), r
                        }
                        if ("2a8648ce3d0201" == e.algoid) {
                            if (this.parsePrivateRawECKeyHexAtObj(t, e), void 0 === Cr.crypto.OID.oidhex2name[e.algparam]) throw "KJUR.crypto.OID.oidhex2name undefined: " + e.algparam;
                            var i = Cr.crypto.OID.oidhex2name[e.algparam],
                                r = new Cr.crypto.ECDSA({
                                    curve: i
                                });
                            return r.setPublicKeyHex(e.pubkey), r.setPrivateKeyHex(e.key), r.isPublic = !1, r
                        }
                        if ("2a8648ce380401" == e.algoid) {
                            var s = Or.getVbyList(t, 0, [1, 1, 0], "02"),
                                a = Or.getVbyList(t, 0, [1, 1, 1], "02"),
                                u = Or.getVbyList(t, 0, [1, 1, 2], "02"),
                                c = Or.getVbyList(t, 0, [2, 0], "02"),
                                f = new o(s, 16),
                                h = new o(a, 16),
                                l = new o(u, 16),
                                d = new o(c, 16),
                                r = new Cr.crypto.DSA;
                            return r.setPrivate(f, h, l, null, d), r
                        }
                        throw "unsupported private key algorithm"
                    },
                    getRSAKeyFromPublicPKCS8PEM: function(t) {
                        var e = this.getHexFromPEM(t, "PUBLIC KEY"),
                            n = this.getRSAKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8PEM: function(t) {
                        var e = this.getHexFromPEM(t, "PUBLIC KEY"),
                            n = this.getKeyFromPublicPKCS8Hex(e);
                        return n
                    },
                    getKeyFromPublicPKCS8Hex: function(t) {
                        var e = this.parsePublicPKCS8Hex(t);
                        if ("2a864886f70d010101" == e.algoid) {
                            var n = this.parsePublicRawRSAKeyHex(e.key),
                                r = new ve;
                            return r.setPublic(n.n, n.e), r
                        }
                        if ("2a8648ce3d0201" == e.algoid) {
                            if (void 0 === Cr.crypto.OID.oidhex2name[e.algparam]) throw "KJUR.crypto.OID.oidhex2name undefined: " + e.algparam;
                            var i = Cr.crypto.OID.oidhex2name[e.algparam],
                                r = new Cr.crypto.ECDSA({
                                    curve: i,
                                    pub: e.key
                                });
                            return r
                        }
                        if ("2a8648ce380401" == e.algoid) {
                            var s = e.algparam,
                                a = Or.getHexOfV_AtObj(e.key, 0),
                                r = new Cr.crypto.DSA;
                            return r.setPublic(new o(s.p, 16), new o(s.q, 16), new o(s.g, 16), new o(a, 16)), r
                        }
                        throw "unsupported public key algorithm"
                    },
                    parsePublicRawRSAKeyHex: function(t) {
                        var e = {};
                        if ("30" != t.substr(0, 2)) throw "malformed RSA key(code:001)";
                        var n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length) throw "malformed RSA key(code:002)";
                        if ("02" != t.substr(n[0], 2)) throw "malformed RSA key(code:003)";
                        if (e.n = Or.getHexOfV_AtObj(t, n[0]), "02" != t.substr(n[1], 2)) throw "malformed RSA key(code:004)";
                        return e.e = Or.getHexOfV_AtObj(t, n[1]), e
                    },
                    parsePrivateRawRSAKeyHexAtObj: function(t, e) {
                        var n = e.keyidx;
                        if ("30" != t.substr(n, 2)) throw "malformed RSA private key(code:001)";
                        var r = Or.getPosArrayOfChildren_AtObj(t, n);
                        if (9 != r.length) throw "malformed RSA private key(code:002)";
                        e.key = {}, e.key.n = Or.getHexOfV_AtObj(t, r[1]), e.key.e = Or.getHexOfV_AtObj(t, r[2]), e.key.d = Or.getHexOfV_AtObj(t, r[3]), e.key.p = Or.getHexOfV_AtObj(t, r[4]), e.key.q = Or.getHexOfV_AtObj(t, r[5]), e.key.dp = Or.getHexOfV_AtObj(t, r[6]), e.key.dq = Or.getHexOfV_AtObj(t, r[7]), e.key.co = Or.getHexOfV_AtObj(t, r[8])
                    },
                    parsePrivateRawECKeyHexAtObj: function(t, e) {
                        var n = e.keyidx,
                            r = Or.getVbyList(t, n, [1], "04"),
                            i = Or.getVbyList(t, n, [2, 0], "03").substr(2);
                        e.key = r, e.pubkey = i
                    },
                    parsePublicPKCS8Hex: function(t) {
                        var e = {};
                        e.algparam = null;
                        var n = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != n.length) throw "outer DERSequence shall have 2 elements: " + n.length;
                        var r = n[0];
                        if ("30" != t.substr(r, 2)) throw "malformed PKCS8 public key(code:001)";
                        var i = Or.getPosArrayOfChildren_AtObj(t, r);
                        if (2 != i.length) throw "malformed PKCS8 public key(code:002)";
                        if ("06" != t.substr(i[0], 2)) throw "malformed PKCS8 public key(code:003)";
                        if (e.algoid = Or.getHexOfV_AtObj(t, i[0]), "06" == t.substr(i[1], 2) ? e.algparam = Or.getHexOfV_AtObj(t, i[1]) : "30" == t.substr(i[1], 2) && (e.algparam = {}, e.algparam.p = Or.getVbyList(t, i[1], [0], "02"), e.algparam.q = Or.getVbyList(t, i[1], [1], "02"), e.algparam.g = Or.getVbyList(t, i[1], [2], "02")), "03" != t.substr(n[1], 2)) throw "malformed PKCS8 public key(code:004)";
                        return e.key = Or.getHexOfV_AtObj(t, n[1]).substr(2), e
                    },
                    getRSAKeyFromPublicPKCS8Hex: function(t) {
                        var e = Or.getPosArrayOfChildren_AtObj(t, 0);
                        if (2 != e.length) throw "outer DERSequence shall have 2 elements: " + e.length;
                        var n = Or.getHexOfTLV_AtObj(t, e[0]);
                        if ("300d06092a864886f70d0101010500" != n) throw "PKCS8 AlgorithmId is not rsaEncryption";
                        if ("03" != t.substr(e[1], 2)) throw "PKCS8 Public Key is not BITSTRING encapslated.";
                        var r = Or.getStartPosOfV_AtObj(t, e[1]) + 2;
                        if ("30" != t.substr(r, 2)) throw "PKCS8 Public Key is not SEQUENCE.";
                        var i = Or.getPosArrayOfChildren_AtObj(t, r);
                        if (2 != i.length) throw "inner DERSequence shall have 2 elements: " + i.length;
                        if ("02" != t.substr(i[0], 2)) throw "N is not ASN.1 INTEGER";
                        if ("02" != t.substr(i[1], 2)) throw "E is not ASN.1 INTEGER";
                        var s = Or.getHexOfV_AtObj(t, i[0]),
                            o = Or.getHexOfV_AtObj(t, i[1]),
                            a = new ve;
                        return a.setPublic(s, o), a
                    }
                }
            }();
        Dr.getKey = function(t, e, n) {
            if ("undefined" != typeof ve && t instanceof ve) return t;
            if ("undefined" != typeof Cr.crypto.ECDSA && t instanceof Cr.crypto.ECDSA) return t;
            if ("undefined" != typeof Cr.crypto.DSA && t instanceof Cr.crypto.DSA) return t;
            if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d) return new Cr.crypto.ECDSA({
                pub: t.xy,
                curve: t.curve
            });
            if (void 0 !== t.curve && void 0 !== t.d) return new Cr.crypto.ECDSA({
                prv: t.d,
                curve: t.curve
            });
            if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
                var r = new ve;
                return r.setPublic(t.n, t.e), r
            }
            if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.co && void 0 === t.qi) {
                var r = new ve;
                return r.setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co), r
            }
            if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 === t.p) {
                var r = new ve;
                return r.setPrivate(t.n, t.e, t.d), r
            }
            if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 === t.x) {
                var r = new Cr.crypto.DSA;
                return r.setPublic(t.p, t.q, t.g, t.y), r
            }
            if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 !== t.x) {
                var r = new Cr.crypto.DSA;
                return r.setPrivate(t.p, t.q, t.g, t.y, t.x), r
            }
            if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
                var r = new ve;
                return r.setPublic(gn(t.n), gn(t.e)), r
            }
            if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.qi) {
                var r = new ve;
                return r.setPrivateEx(gn(t.n), gn(t.e), gn(t.d), gn(t.p), gn(t.q), gn(t.dp), gn(t.dq), gn(t.qi)), r
            }
            if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d) {
                var r = new ve;
                return r.setPrivate(gn(t.n), gn(t.e), gn(t.d)), r
            }
            if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 === t.d) {
                var i = new Cr.crypto.ECDSA({
                        curve: t.crv
                    }),
                    s = i.ecparams.keylen / 4,
                    a = ("0000000000" + gn(t.x)).slice(-s),
                    u = ("0000000000" + gn(t.y)).slice(-s),
                    c = "04" + a + u;
                return i.setPublicKeyHex(c), i
            }
            if ("EC" === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 !== t.d) {
                var i = new Cr.crypto.ECDSA({
                        curve: t.crv
                    }),
                    s = i.ecparams.keylen / 4,
                    a = ("0000000000" + gn(t.x)).slice(-s),
                    u = ("0000000000" + gn(t.y)).slice(-s),
                    c = "04" + a + u,
                    f = ("0000000000" + gn(t.d)).slice(-s);
                return i.setPublicKeyHex(c), i.setPrivateKeyHex(f), i
            }
            if (t.indexOf("-END CERTIFICATE-", 0) != -1 || t.indexOf("-END X509 CERTIFICATE-", 0) != -1 || t.indexOf("-END TRUSTED CERTIFICATE-", 0) != -1) return $n.getPublicKeyFromCertPEM(t);
            if ("pkcs8pub" === n) return Dr.getKeyFromPublicPKCS8Hex(t);
            if (t.indexOf("-END PUBLIC KEY-") != -1) return Dr.getKeyFromPublicPKCS8PEM(t);
            if ("pkcs5prv" === n) {
                var r = new ve;
                return r.readPrivateKeyFromASN1HexString(t), r
            }
            if ("pkcs5prv" === n) {
                var r = new ve;
                return r.readPrivateKeyFromASN1HexString(t), r
            }
            if (t.indexOf("-END RSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") == -1) {
                var h = Dr.getHexFromPEM(t, "RSA PRIVATE KEY");
                return Dr.getKey(h, null, "pkcs5prv")
            }
            if (t.indexOf("-END DSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") == -1) {
                var l = this.getHexFromPEM(t, "DSA PRIVATE KEY"),
                    d = Or.getVbyList(l, 0, [1], "02"),
                    p = Or.getVbyList(l, 0, [2], "02"),
                    g = Or.getVbyList(l, 0, [3], "02"),
                    y = Or.getVbyList(l, 0, [4], "02"),
                    v = Or.getVbyList(l, 0, [5], "02"),
                    r = new Cr.crypto.DSA;
                return r.setPrivate(new o(d, 16), new o(p, 16), new o(g, 16), new o(y, 16), new o(v, 16)), r
            }
            if (t.indexOf("-END PRIVATE KEY-") != -1) return Dr.getKeyFromPlainPrivatePKCS8PEM(t);
            if (t.indexOf("-END RSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") != -1) return Dr.getRSAKeyFromEncryptedPKCS5PEM(t, e);
            if (t.indexOf("-END EC PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") != -1) {
                var l = Dr.getDecryptedKeyHex(t, e),
                    r = Or.getVbyList(l, 0, [1], "04"),
                    m = Or.getVbyList(l, 0, [2, 0], "06"),
                    S = Or.getVbyList(l, 0, [3, 0], "03").substr(2),
                    b = "";
                if (void 0 === Cr.crypto.OID.oidhex2name[m]) throw "undefined OID(hex) in KJUR.crypto.OID: " + m;
                b = Cr.crypto.OID.oidhex2name[m];
                var i = new Cr.crypto.ECDSA({
                    name: b
                });
                return i.setPublicKeyHex(S), i.setPrivateKeyHex(r), i.isPublic = !1, i
            }
            if (t.indexOf("-END DSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") != -1) {
                var l = Dr.getDecryptedKeyHex(t, e),
                    d = Or.getVbyList(l, 0, [1], "02"),
                    p = Or.getVbyList(l, 0, [2], "02"),
                    g = Or.getVbyList(l, 0, [3], "02"),
                    y = Or.getVbyList(l, 0, [4], "02"),
                    v = Or.getVbyList(l, 0, [5], "02"),
                    r = new Cr.crypto.DSA;
                return r.setPrivate(new o(d, 16), new o(p, 16), new o(g, 16), new o(y, 16), new o(v, 16)), r
            }
            if (t.indexOf("-END ENCRYPTED PRIVATE KEY-") != -1) return Dr.getKeyFromEncryptedPKCS8PEM(t, e);
            throw "not supported argument"
        }, Dr.generateKeypair = function(t, e) {
            if ("RSA" == t) {
                var n = e,
                    r = new ve;
                r.generate(n, "10001"), r.isPrivate = !0, r.isPublic = !0;
                var i = new ve,
                    s = r.n.toString(16),
                    o = r.e.toString(16);
                i.setPublic(s, o), i.isPrivate = !1, i.isPublic = !0;
                var a = {};
                return a.prvKeyObj = r, a.pubKeyObj = i, a
            }
            if ("EC" == t) {
                var u = e,
                    c = new Cr.crypto.ECDSA({
                        curve: u
                    }),
                    f = c.generateKeyPairHex(),
                    r = new Cr.crypto.ECDSA({
                        curve: u
                    });
                r.setPublicKeyHex(f.ecpubhex), r.setPrivateKeyHex(f.ecprvhex), r.isPrivate = !0, r.isPublic = !1;
                var i = new Cr.crypto.ECDSA({
                    curve: u
                });
                i.setPublicKeyHex(f.ecpubhex), i.isPrivate = !1, i.isPublic = !0;
                var a = {};
                return a.prvKeyObj = r, a.pubKeyObj = i, a
            }
            throw "unknown algorithm: " + t
        }, Dr.getPEM = function(t, e, n, r, i) {
            function s(t) {
                var e = Cr.asn1.ASN1Util.newObject({
                    seq: [{
                        int: 0
                    }, {
                        int: {
                            bigint: t.n
                        }
                    }, {
                        int: t.e
                    }, {
                        int: {
                            bigint: t.d
                        }
                    }, {
                        int: {
                            bigint: t.p
                        }
                    }, {
                        int: {
                            bigint: t.q
                        }
                    }, {
                        int: {
                            bigint: t.dmp1
                        }
                    }, {
                        int: {
                            bigint: t.dmq1
                        }
                    }, {
                        int: {
                            bigint: t.coeff
                        }
                    }]
                });
                return e
            }

            function o(t) {
                var e = Cr.asn1.ASN1Util.newObject({
                    seq: [{
                        int: 1
                    }, {
                        octstr: {
                            hex: t.prvKeyHex
                        }
                    }, {
                        tag: ["a0", !0, {
                            oid: {
                                name: t.curveName
                            }
                        }]
                    }, {
                        tag: ["a1", !0, {
                            bitstr: {
                                hex: "00" + t.pubKeyHex
                            }
                        }]
                    }]
                });
                return e
            }

            function a(t) {
                var e = Cr.asn1.ASN1Util.newObject({
                    seq: [{
                        int: 0
                    }, {
                        int: {
                            bigint: t.p
                        }
                    }, {
                        int: {
                            bigint: t.q
                        }
                    }, {
                        int: {
                            bigint: t.g
                        }
                    }, {
                        int: {
                            bigint: t.y
                        }
                    }, {
                        int: {
                            bigint: t.x
                        }
                    }]
                });
                return e
            }
            var u = Cr.asn1,
                c = Cr.crypto;
            if (("undefined" != typeof ve && t instanceof ve || "undefined" != typeof c.DSA && t instanceof c.DSA || "undefined" != typeof c.ECDSA && t instanceof c.ECDSA) && 1 == t.isPublic && (void 0 === e || "PKCS8PUB" == e)) {
                var f = new Cr.asn1.x509.SubjectPublicKeyInfo(t),
                    h = f.getEncodedHex();
                return u.ASN1Util.getPEMStringFromHex(h, "PUBLIC KEY")
            }
            if ("PKCS1PRV" == e && "undefined" != typeof ve && t instanceof ve && (void 0 === n || null == n) && 1 == t.isPrivate) {
                var f = s(t),
                    h = f.getEncodedHex();
                return u.ASN1Util.getPEMStringFromHex(h, "RSA PRIVATE KEY")
            }
            if ("PKCS1PRV" == e && "undefined" != typeof ve && t instanceof Cr.crypto.ECDSA && (void 0 === n || null == n) && 1 == t.isPrivate) {
                var l = new Cr.asn1.DERObjectIdentifier({
                        name: t.curveName
                    }),
                    d = l.getEncodedHex(),
                    p = o(t),
                    g = p.getEncodedHex(),
                    y = "";
                return y += u.ASN1Util.getPEMStringFromHex(d, "EC PARAMETERS"), y += u.ASN1Util.getPEMStringFromHex(g, "EC PRIVATE KEY")
            }
            if ("PKCS1PRV" == e && "undefined" != typeof Cr.crypto.DSA && t instanceof Cr.crypto.DSA && (void 0 === n || null == n) && 1 == t.isPrivate) {
                var f = a(t),
                    h = f.getEncodedHex();
                return u.ASN1Util.getPEMStringFromHex(h, "DSA PRIVATE KEY")
            }
            if ("PKCS5PRV" == e && "undefined" != typeof ve && t instanceof ve && void 0 !== n && null != n && 1 == t.isPrivate) {
                var f = s(t),
                    h = f.getEncodedHex();
                return void 0 === r && (r = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", h, n, r)
            }
            if ("PKCS5PRV" == e && "undefined" != typeof Cr.crypto.ECDSA && t instanceof Cr.crypto.ECDSA && void 0 !== n && null != n && 1 == t.isPrivate) {
                var f = o(t),
                    h = f.getEncodedHex();
                return void 0 === r && (r = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", h, n, r)
            }
            if ("PKCS5PRV" == e && "undefined" != typeof Cr.crypto.DSA && t instanceof Cr.crypto.DSA && void 0 !== n && null != n && 1 == t.isPrivate) {
                var f = a(t),
                    h = f.getEncodedHex();
                return void 0 === r && (r = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", h, n, r)
            }
            var v = function(t, e) {
                    var n = m(t, e),
                        r = new Cr.asn1.ASN1Util.newObject({
                            seq: [{
                                seq: [{
                                    oid: {
                                        name: "pkcs5PBES2"
                                    }
                                }, {
                                    seq: [{
                                        seq: [{
                                            oid: {
                                                name: "pkcs5PBKDF2"
                                            }
                                        }, {
                                            seq: [{
                                                octstr: {
                                                    hex: n.pbkdf2Salt
                                                }
                                            }, {
                                                int: n.pbkdf2Iter
                                            }]
                                        }]
                                    }, {
                                        seq: [{
                                            oid: {
                                                name: "des-EDE3-CBC"
                                            }
                                        }, {
                                            octstr: {
                                                hex: n.encryptionSchemeIV
                                            }
                                        }]
                                    }]
                                }]
                            }, {
                                octstr: {
                                    hex: n.ciphertext
                                }
                            }]
                        });
                    return r.getEncodedHex()
                },
                m = function(t, e) {
                    var n = 100,
                        r = or.lib.WordArray.random(8),
                        i = "DES-EDE3-CBC",
                        s = or.lib.WordArray.random(8),
                        o = or.PBKDF2(e, r, {
                            keySize: 6,
                            iterations: n
                        }),
                        a = or.enc.Hex.parse(t),
                        u = or.TripleDES.encrypt(a, o, {
                            iv: s
                        }) + "",
                        c = {};
                    return c.ciphertext = u, c.pbkdf2Salt = or.enc.Hex.stringify(r), c.pbkdf2Iter = n, c.encryptionSchemeAlg = i, c.encryptionSchemeIV = or.enc.Hex.stringify(s), c
                };
            if ("PKCS8PRV" == e && "undefined" != typeof ve && t instanceof ve && 1 == t.isPrivate) {
                var S = s(t),
                    b = S.getEncodedHex(),
                    f = Cr.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "rsaEncryption"
                                }
                            }, {
                                null: !0
                            }]
                        }, {
                            octstr: {
                                hex: b
                            }
                        }]
                    }),
                    h = f.getEncodedHex();
                if (void 0 === n || null == n) return u.ASN1Util.getPEMStringFromHex(h, "PRIVATE KEY");
                var g = v(h, n);
                return u.ASN1Util.getPEMStringFromHex(g, "ENCRYPTED PRIVATE KEY");
            }
            if ("PKCS8PRV" == e && "undefined" != typeof Cr.crypto.ECDSA && t instanceof Cr.crypto.ECDSA && 1 == t.isPrivate) {
                var S = new Cr.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 1
                        }, {
                            octstr: {
                                hex: t.prvKeyHex
                            }
                        }, {
                            tag: ["a1", !0, {
                                bitstr: {
                                    hex: "00" + t.pubKeyHex
                                }
                            }]
                        }]
                    }),
                    b = S.getEncodedHex(),
                    f = Cr.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "ecPublicKey"
                                }
                            }, {
                                oid: {
                                    name: t.curveName
                                }
                            }]
                        }, {
                            octstr: {
                                hex: b
                            }
                        }]
                    }),
                    h = f.getEncodedHex();
                if (void 0 === n || null == n) return u.ASN1Util.getPEMStringFromHex(h, "PRIVATE KEY");
                var g = v(h, n);
                return u.ASN1Util.getPEMStringFromHex(g, "ENCRYPTED PRIVATE KEY")
            }
            if ("PKCS8PRV" == e && "undefined" != typeof Cr.crypto.DSA && t instanceof Cr.crypto.DSA && 1 == t.isPrivate) {
                var S = new Cr.asn1.DERInteger({
                        bigint: t.x
                    }),
                    b = S.getEncodedHex(),
                    f = Cr.asn1.ASN1Util.newObject({
                        seq: [{
                            int: 0
                        }, {
                            seq: [{
                                oid: {
                                    name: "dsa"
                                }
                            }, {
                                seq: [{
                                    int: {
                                        bigint: t.p
                                    }
                                }, {
                                    int: {
                                        bigint: t.q
                                    }
                                }, {
                                    int: {
                                        bigint: t.g
                                    }
                                }]
                            }]
                        }, {
                            octstr: {
                                hex: b
                            }
                        }]
                    }),
                    h = f.getEncodedHex();
                if (void 0 === n || null == n) return u.ASN1Util.getPEMStringFromHex(h, "PRIVATE KEY");
                var g = v(h, n);
                return u.ASN1Util.getPEMStringFromHex(g, "ENCRYPTED PRIVATE KEY")
            }
            throw "unsupported object nor format"
        }, Dr.getKeyFromCSRPEM = function(t) {
            var e = Dr.getHexFromPEM(t, "CERTIFICATE REQUEST"),
                n = Dr.getKeyFromCSRHex(e);
            return n
        }, Dr.getKeyFromCSRHex = function(t) {
            var e = Dr.parseCSRHex(t),
                n = Dr.getKey(e.p8pubkeyhex, null, "pkcs8pub");
            return n
        }, Dr.parseCSRHex = function(t) {
            var e = {},
                n = t;
            if ("30" != n.substr(0, 2)) throw "malformed CSR(code:001)";
            var r = Or.getPosArrayOfChildren_AtObj(n, 0);
            if (r.length < 1) throw "malformed CSR(code:002)";
            if ("30" != n.substr(r[0], 2)) throw "malformed CSR(code:003)";
            var i = Or.getPosArrayOfChildren_AtObj(n, r[0]);
            if (i.length < 3) throw "malformed CSR(code:004)";
            return e.p8pubkeyhex = Or.getHexOfTLV_AtObj(n, i[2]), e
        }, Dr.getJWKFromKey = function(t) {
            var e = {};
            if (t instanceof ve && t.isPrivate) return e.kty = "RSA", e.n = pn(t.n.toString(16)), e.e = pn(t.e.toString(16)), e.d = pn(t.d.toString(16)), e.p = pn(t.p.toString(16)), e.q = pn(t.q.toString(16)), e.dp = pn(t.dmp1.toString(16)), e.dq = pn(t.dmq1.toString(16)), e.qi = pn(t.coeff.toString(16)), e;
            if (t instanceof ve && t.isPublic) return e.kty = "RSA", e.n = pn(t.n.toString(16)), e.e = pn(t.e.toString(16)), e;
            if (t instanceof Cr.crypto.ECDSA && t.isPrivate) {
                var n = t.getShortNISTPCurveName();
                if ("P-256" !== n && "P-384" !== n) throw "unsupported curve name for JWT: " + n;
                var r = t.getPublicKeyXYHex();
                return e.kty = "EC", e.crv = n, e.x = pn(r.x), e.y = pn(r.y), e.d = pn(t.prvKeyHex), e
            }
            if (t instanceof Cr.crypto.ECDSA && t.isPublic) {
                var n = t.getShortNISTPCurveName();
                if ("P-256" !== n && "P-384" !== n) throw "unsupported curve name for JWT: " + n;
                var r = t.getPublicKeyXYHex();
                return e.kty = "EC", e.crv = n, e.x = pn(r.x), e.y = pn(r.y), e
            }
            throw "not supported key object"
        }, ve.prototype.readPrivateKeyFromPEMString = Rn, ve.prototype.readPrivateKeyFromASN1HexString = In;
        /*! rsasign-1.2.7.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
         */
        var Hr = new RegExp("");
        Hr.compile("[^0-9a-f]", "gi"), ve.prototype.signWithMessageHash = kn, ve.prototype.signString = Hn, ve.prototype.signStringWithSHA1 = Nn, ve.prototype.signStringWithSHA256 = Bn, ve.prototype.sign = Hn, ve.prototype.signWithSHA1 = Nn, ve.prototype.signWithSHA256 = Bn, ve.prototype.signWithMessageHashPSS = Ln, ve.prototype.signStringPSS = Vn, ve.prototype.signPSS = Vn, ve.SALT_LEN_HLEN = -1, ve.SALT_LEN_MAX = -2, ve.prototype.verifyWithMessageHash = Yn, ve.prototype.verifyString = Jn, ve.prototype.verifyHexSignatureForMessage = zn, ve.prototype.verify = Jn, ve.prototype.verifyHexSignatureForByteArrayMessage = zn, ve.prototype.verifyWithMessageHashPSS = Xn, ve.prototype.verifyStringPSS = Gn, ve.prototype.verifyPSS = Gn, ve.SALT_LEN_RECOVER = -2, $n.pemToBase64 = function(t) {
                var e = t;
                return e = e.replace("-----BEGIN CERTIFICATE-----", ""), e = e.replace("-----END CERTIFICATE-----", ""), e = e.replace(/[ \n]+/g, "")
            }, $n.pemToHex = function(t) {
                var e = $n.pemToBase64(t),
                    n = i(e);
                return n
            }, $n.getSubjectPublicKeyPosFromCertHex = function(t) {
                var e = $n.getSubjectPublicKeyInfoPosFromCertHex(t);
                if (e == -1) return -1;
                var n = Or.getPosArrayOfChildren_AtObj(t, e);
                if (2 != n.length) return -1;
                var r = n[1];
                if ("03" != t.substring(r, r + 2)) return -1;
                var i = Or.getStartPosOfV_AtObj(t, r);
                return "00" != t.substring(i, i + 2) ? -1 : i + 2
            }, $n.getSubjectPublicKeyInfoPosFromCertHex = function(t) {
                var e = Or.getStartPosOfV_AtObj(t, 0),
                    n = Or.getPosArrayOfChildren_AtObj(t, e);
                return n.length < 1 ? -1 : "a003020102" == t.substring(n[0], n[0] + 10) ? n.length < 6 ? -1 : n[6] : n.length < 5 ? -1 : n[5]
            }, $n.getPublicKeyHexArrayFromCertHex = function(t) {
                var e = $n.getSubjectPublicKeyPosFromCertHex(t),
                    n = Or.getPosArrayOfChildren_AtObj(t, e);
                if (2 != n.length) return [];
                var r = Or.getHexOfV_AtObj(t, n[0]),
                    i = Or.getHexOfV_AtObj(t, n[1]);
                return null != r && null != i ? [r, i] : []
            }, $n.getHexTbsCertificateFromCert = function(t) {
                var e = Or.getStartPosOfV_AtObj(t, 0);
                return e
            }, $n.getPublicKeyHexArrayFromCertPEM = function(t) {
                var e = $n.pemToHex(t),
                    n = $n.getPublicKeyHexArrayFromCertHex(e);
                return n
            }, $n.hex2dn = function(t) {
                for (var e = "", n = Or.getPosArrayOfChildren_AtObj(t, 0), r = 0; r < n.length; r++) {
                    var i = Or.getHexOfTLV_AtObj(t, n[r]);
                    e = e + "/" + $n.hex2rdn(i)
                }
                return e
            }, $n.hex2rdn = function(t) {
                var e = Or.getDecendantHexTLVByNthList(t, 0, [0, 0]),
                    n = Or.getDecendantHexVByNthList(t, 0, [0, 1]),
                    r = "";
                try {
                    r = $n.DN_ATTRHEX[e]
                } catch (t) {
                    r = e
                }
                n = n.replace(/(..)/g, "%$1");
                var i = decodeURIComponent(n);
                return r + "=" + i
            }, $n.DN_ATTRHEX = {
                "0603550406": "C",
                "060355040a": "O",
                "060355040b": "OU",
                "0603550403": "CN",
                "0603550405": "SN",
                "0603550408": "ST",
                "0603550407": "L",
                "0603550409": "streetAddress",
                "060355040f": "businessCategory",
                "0603550411": "postalCode",
                "060b2b0601040182373c020102": "jurisdictionOfIncorporationSP",
                "060b2b0601040182373c020103": "jurisdictionOfIncorporationC"
            }, $n.getPublicKeyFromCertPEM = function(t) {
                var e = $n.getPublicKeyInfoPropOfCertPEM(t);
                if ("2a864886f70d010101" == e.algoid) {
                    var n = Dr.parsePublicRawRSAKeyHex(e.keyhex),
                        r = new ve;
                    return r.setPublic(n.n, n.e), r
                }
                if ("2a8648ce3d0201" == e.algoid) {
                    var i = Cr.crypto.OID.oidhex2name[e.algparam],
                        r = new Cr.crypto.ECDSA({
                            curve: i,
                            info: e.keyhex
                        });
                    return r.setPublicKeyHex(e.keyhex), r
                }
                if ("2a8648ce380401" == e.algoid) {
                    var s = Or.getVbyList(e.algparam, 0, [0], "02"),
                        a = Or.getVbyList(e.algparam, 0, [1], "02"),
                        u = Or.getVbyList(e.algparam, 0, [2], "02"),
                        c = Or.getHexOfV_AtObj(e.keyhex, 0);
                    c = c.substr(2);
                    var r = new Cr.crypto.DSA;
                    return r.setPublic(new o(s, 16), new o(a, 16), new o(u, 16), new o(c, 16)), r
                }
                throw "unsupported key"
            }, $n.getPublicKeyInfoPropOfCertPEM = function(t) {
                var e = {};
                e.algparam = null;
                var n = $n.pemToHex(t),
                    r = Or.getPosArrayOfChildren_AtObj(n, 0);
                if (3 != r.length) throw "malformed X.509 certificate PEM (code:001)";
                if ("30" != n.substr(r[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
                var i = Or.getPosArrayOfChildren_AtObj(n, r[0]),
                    s = 6;
                if ("a0" !== n.substr(i[0], 2) && (s = 5), i.length < s + 1) throw "malformed X.509 certificate PEM (code:003)";
                var o = Or.getPosArrayOfChildren_AtObj(n, i[s]);
                if (2 != o.length) throw "malformed X.509 certificate PEM (code:004)";
                var a = Or.getPosArrayOfChildren_AtObj(n, o[0]);
                if (2 != a.length) throw "malformed X.509 certificate PEM (code:005)";
                if (e.algoid = Or.getHexOfV_AtObj(n, a[0]), "06" == n.substr(a[1], 2) ? e.algparam = Or.getHexOfV_AtObj(n, a[1]) : "30" == n.substr(a[1], 2) && (e.algparam = Or.getHexOfTLV_AtObj(n, a[1])), "03" != n.substr(o[1], 2)) throw "malformed X.509 certificate PEM (code:006)";
                var u = Or.getHexOfV_AtObj(n, o[1]);
                return e.keyhex = u.substr(2), e
            }, $n.getPublicKeyInfoPosOfCertHEX = function(t) {
                var e = Or.getPosArrayOfChildren_AtObj(t, 0);
                if (3 != e.length) throw "malformed X.509 certificate PEM (code:001)";
                if ("30" != t.substr(e[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
                var n = Or.getPosArrayOfChildren_AtObj(t, e[0]);
                if (n.length < 7) throw "malformed X.509 certificate PEM (code:003)";
                return n[6]
            }, $n.getV3ExtInfoListOfCertHex = function(t) {
                var e = Or.getPosArrayOfChildren_AtObj(t, 0);
                if (3 != e.length) throw "malformed X.509 certificate PEM (code:001)";
                if ("30" != t.substr(e[0], 2)) throw "malformed X.509 certificate PEM (code:002)";
                var n = Or.getPosArrayOfChildren_AtObj(t, e[0]);
                if (n.length < 8) throw "malformed X.509 certificate PEM (code:003)";
                if ("a3" != t.substr(n[7], 2)) throw "malformed X.509 certificate PEM (code:004)";
                var r = Or.getPosArrayOfChildren_AtObj(t, n[7]);
                if (1 != r.length) throw "malformed X.509 certificate PEM (code:005)";
                if ("30" != t.substr(r[0], 2)) throw "malformed X.509 certificate PEM (code:006)";
                for (var i = Or.getPosArrayOfChildren_AtObj(t, r[0]), s = i.length, o = new Array(s), a = 0; a < s; a++) o[a] = $n.getV3ExtItemInfo_AtObj(t, i[a]);
                return o
            }, $n.getV3ExtItemInfo_AtObj = function(t, e) {
                var n = {};
                n.posTLV = e;
                var r = Or.getPosArrayOfChildren_AtObj(t, e);
                if (2 != r.length && 3 != r.length) throw "malformed X.509v3 Ext (code:001)";
                if ("06" != t.substr(r[0], 2)) throw "malformed X.509v3 Ext (code:002)";
                var i = Or.getHexOfV_AtObj(t, r[0]);
                n.oid = Or.hextooidstr(i), n.critical = !1, 3 == r.length && (n.critical = !0);
                var s = r[r.length - 1];
                if ("04" != t.substr(s, 2)) throw "malformed X.509v3 Ext (code:003)";
                return n.posV = Or.getStartPosOfV_AtObj(t, s), n
            }, $n.getHexOfTLV_V3ExtValue = function(t, e) {
                var n = $n.getPosOfTLV_V3ExtValue(t, e);
                return n == -1 ? null : Or.getHexOfTLV_AtObj(t, n)
            }, $n.getHexOfV_V3ExtValue = function(t, e) {
                var n = $n.getPosOfTLV_V3ExtValue(t, e);
                return n == -1 ? null : Or.getHexOfV_AtObj(t, n)
            }, $n.getPosOfTLV_V3ExtValue = function(t, e) {
                var n = e;
                if (e.match(/^[0-9.]+$/) || (n = Cr.asn1.x509.OID.name2oid(e)), "" == n) return -1;
                for (var r = $n.getV3ExtInfoListOfCertHex(t), i = 0; i < r.length; i++) {
                    var s = r[i];
                    if (s.oid == n) return s.posV
                }
                return -1
            }, $n.getExtBasicConstraints = function(t) {
                var e = $n.getHexOfV_V3ExtValue(t, "basicConstraints");
                if (null === e) return null;
                if ("" === e) return {};
                if ("0101ff" === e) return {
                    cA: !0
                };
                if ("0101ff02" === e.substr(0, 8)) {
                    var n = Or.getHexOfV_AtObj(e, 6),
                        r = parseInt(n, 16);
                    return {
                        cA: !0,
                        pathLen: r
                    }
                }
                throw "unknown error"
            }, $n.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"], $n.getExtKeyUsageBin = function(t) {
                var e = $n.getHexOfV_V3ExtValue(t, "keyUsage");
                if ("" == e) return "";
                if (e.length % 2 != 0 || e.length <= 2) throw "malformed key usage value";
                var n = parseInt(e.substr(0, 2)),
                    r = parseInt(e.substr(2), 16).toString(2);
                return r.substr(0, r.length - n)
            }, $n.getExtKeyUsageString = function(t) {
                for (var e = $n.getExtKeyUsageBin(t), n = new Array, r = 0; r < e.length; r++) "1" == e.substr(r, 1) && n.push($n.KEYUSAGE_NAME[r]);
                return n.join(",")
            }, $n.getExtSubjectKeyIdentifier = function(t) {
                var e = $n.getHexOfV_V3ExtValue(t, "subjectKeyIdentifier");
                return e
            }, $n.getExtAuthorityKeyIdentifier = function(t) {
                var e = {},
                    n = $n.getHexOfTLV_V3ExtValue(t, "authorityKeyIdentifier");
                if (null === n) return null;
                for (var r = Or.getPosArrayOfChildren_AtObj(n, 0), i = 0; i < r.length; i++) "80" === n.substr(r[i], 2) && (e.kid = Or.getHexOfV_AtObj(n, r[i]));
                return e
            }, $n.getExtExtKeyUsageName = function(t) {
                var e = new Array,
                    n = $n.getHexOfTLV_V3ExtValue(t, "extKeyUsage");
                if (null === n) return null;
                for (var r = Or.getPosArrayOfChildren_AtObj(n, 0), i = 0; i < r.length; i++) {
                    var s = Or.getHexOfV_AtObj(n, r[i]),
                        o = Cr.asn1.ASN1Util.oidHexToInt(s),
                        a = Cr.asn1.x509.OID.oid2name(o);
                    e.push(a)
                }
                return e
            }, $n.getExtSubjectAltName = function(t) {
                for (var e = new Array, n = $n.getHexOfTLV_V3ExtValue(t, "subjectAltName"), r = Or.getPosArrayOfChildren_AtObj(n, 0), i = 0; i < r.length; i++)
                    if ("82" === n.substr(r[i], 2)) {
                        var s = Sn(Or.getHexOfV_AtObj(n, r[i]));
                        e.push(s)
                    } return e
            }, $n.getExtCRLDistributionPointsURI = function(t) {
                for (var e = new Array, n = $n.getHexOfTLV_V3ExtValue(t, "cRLDistributionPoints"), r = Or.getPosArrayOfChildren_AtObj(n, 0), i = 0; i < r.length; i++)
                    for (var s = Or.getHexOfTLV_AtObj(n, r[i]), o = Or.getPosArrayOfChildren_AtObj(s, 0), a = 0; a < o.length; a++)
                        if ("a0" === s.substr(o[a], 2)) {
                            var u = Or.getHexOfV_AtObj(s, o[a]);
                            if ("a0" === u.substr(0, 2)) {
                                var c = Or.getHexOfV_AtObj(u, 0);
                                if ("86" === c.substr(0, 2)) {
                                    var f = Or.getHexOfV_AtObj(c, 0),
                                        h = Sn(f);
                                    e.push(h)
                                }
                            }
                        } return e
            }, $n.getExtAIAInfo = function(t) {
                var e = {};
                e.ocsp = [], e.caissuer = [];
                var n = $n.getPosOfTLV_V3ExtValue(t, "authorityInfoAccess");
                if (n == -1) return null;
                if ("30" != t.substr(n, 2)) throw "malformed AIA Extn Value";
                for (var r = Or.getPosArrayOfChildren_AtObj(t, n), i = 0; i < r.length; i++) {
                    var s = r[i],
                        o = Or.getPosArrayOfChildren_AtObj(t, s);
                    if (2 != o.length) throw "malformed AccessDescription of AIA Extn";
                    var a = o[0],
                        u = o[1];
                    "2b06010505073001" == Or.getHexOfV_AtObj(t, a) && "86" == t.substr(u, 2) && e.ocsp.push(Sn(Or.getHexOfV_AtObj(t, u))), "2b06010505073002" == Or.getHexOfV_AtObj(t, a) && "86" == t.substr(u, 2) && e.caissuer.push(Sn(Or.getHexOfV_AtObj(t, u)))
                }
                return e
            }, $n.getSignatureAlgorithmName = function(t) {
                var e = Or.getDecendantHexVByNthList(t, 0, [1, 0]),
                    n = Cr.asn1.ASN1Util.oidHexToInt(e),
                    r = Cr.asn1.x509.OID.oid2name(n);
                return r
            }, $n.getSignatureValueHex = function(t) {
                var e = Or.getDecendantHexVByNthList(t, 0, [2]);
                if ("00" !== e.substr(0, 2)) throw "can't get signature value";
                return e.substr(2)
            }, $n.getSerialNumberHex = function(t) {
                return Or.getDecendantHexVByNthList(t, 0, [0, 1])
            },
            /*! jws-3.3.4 (c) 2013-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.jws && Cr.jws || (Cr.jws = {}), Cr.jws.JWS = function() {
                var t = Cr.jws.JWS;
                this.parseJWS = function(e, n) {
                    if (void 0 === this.parsedJWS || !n && void 0 === this.parsedJWS.sigvalH) {
                        if (null == e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/)) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                        var r = RegExp.$1,
                            i = RegExp.$2,
                            s = RegExp.$3,
                            o = r + "." + i;
                        if (this.parsedJWS = {}, this.parsedJWS.headB64U = r, this.parsedJWS.payloadB64U = i, this.parsedJWS.sigvalB64U = s, this.parsedJWS.si = o, !n) {
                            var a = gn(s),
                                u = de(a, 16);
                            this.parsedJWS.sigvalH = a, this.parsedJWS.sigvalBI = u
                        }
                        var c = jr(r),
                            f = jr(i);
                        if (this.parsedJWS.headS = c, this.parsedJWS.payloadS = f, !t.isSafeJSONString(c, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + c
                    }
                }
            }, Cr.jws.JWS.sign = function(t, e, n, r, i) {
                var s, o, a, u = Cr.jws.JWS;
                if ("string" != typeof e && "object" != typeof e) throw "spHeader must be JSON string or object: " + e;
                if ("object" == typeof e && (o = e, s = JSON.stringify(o)), "string" == typeof e) {
                    if (s = e, !u.isSafeJSONString(s)) throw "JWS Head is not safe JSON string: " + s;
                    o = u.readSafeJSONString(s)
                }
                if (a = n, "object" == typeof n && (a = JSON.stringify(n)), "" != t && null != t || void 0 === o.alg || (t = o.alg), "" != t && null != t && void 0 === o.alg && (o.alg = t, s = JSON.stringify(o)), t !== o.alg) throw "alg and sHeader.alg doesn't match: " + t + "!=" + o.alg;
                var c = null;
                if (void 0 === u.jwsalg2sigalg[t]) throw "unsupported alg name: " + t;
                c = u.jwsalg2sigalg[t];
                var f = Tr(s),
                    h = Tr(a),
                    l = f + "." + h,
                    d = "";
                if ("Hmac" == c.substr(0, 4)) {
                    if (void 0 === r) throw "mac key shall be specified for HS* alg";
                    var p = new Cr.crypto.Mac({
                        alg: c,
                        prov: "cryptojs",
                        pass: r
                    });
                    p.updateString(l), d = p.doFinal()
                } else if (c.indexOf("withECDSA") != -1) {
                    var g = new Cr.crypto.Signature({
                        alg: c
                    });
                    g.init(r, i), g.updateString(l), hASN1Sig = g.sign(), d = Cr.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)
                } else if ("none" != c) {
                    var g = new Cr.crypto.Signature({
                        alg: c
                    });
                    g.init(r, i), g.updateString(l), d = g.sign()
                }
                var y = pn(d);
                return l + "." + y
            }, Cr.jws.JWS.verify = function(t, e, n) {
                var r = Cr.jws.JWS,
                    i = t.split("."),
                    s = i[0],
                    o = i[1],
                    a = s + "." + o,
                    u = gn(i[2]),
                    c = r.readSafeJSONString(jr(i[0])),
                    f = null,
                    h = null;
                if (void 0 === c.alg) throw "algorithm not specified in header";
                if (f = c.alg, h = f.substr(0, 2), null != n && "[object Array]" === Object.prototype.toString.call(n) && n.length > 0) {
                    var l = ":" + n.join(":") + ":";
                    if (l.indexOf(":" + f + ":") == -1) throw "algorithm '" + f + "' not accepted in the list"
                }
                if ("none" != f && null === e) throw "key shall be specified to verify.";
                if ("string" == typeof e && e.indexOf("-----BEGIN ") != -1 && (e = Dr.getKey(e)), !("RS" != h && "PS" != h || e instanceof ve)) throw "key shall be a RSAKey obj for RS* and PS* algs";
                if ("ES" == h && !(e instanceof Cr.crypto.ECDSA)) throw "key shall be a ECDSA obj for ES* algs";
                var d = null;
                if (void 0 === r.jwsalg2sigalg[c.alg]) throw "unsupported alg name: " + f;
                if (d = r.jwsalg2sigalg[f], "none" == d) throw "not supported";
                if ("Hmac" == d.substr(0, 4)) {
                    var p = null;
                    if (void 0 === e) throw "hexadecimal key shall be specified for HMAC";
                    var g = new Cr.crypto.Mac({
                        alg: d,
                        pass: e
                    });
                    return g.updateString(a), p = g.doFinal(), u == p
                }
                if (d.indexOf("withECDSA") != -1) {
                    var y = null;
                    try {
                        y = Cr.crypto.ECDSA.concatSigToASN1Sig(u)
                    } catch (t) {
                        return !1
                    }
                    var v = new Cr.crypto.Signature({
                        alg: d
                    });
                    return v.init(e), v.updateString(a), v.verify(y)
                }
                var v = new Cr.crypto.Signature({
                    alg: d
                });
                return v.init(e), v.updateString(a), v.verify(u)
            }, Cr.jws.JWS.parse = function(t) {
                var e, n, r, i = t.split("."),
                    s = {};
                if (2 != i.length && 3 != i.length) throw "malformed sJWS: wrong number of '.' splitted elements";
                return e = i[0], n = i[1], 3 == i.length && (r = i[2]), s.headerObj = Cr.jws.JWS.readSafeJSONString(jr(e)), s.payloadObj = Cr.jws.JWS.readSafeJSONString(jr(n)), s.headerPP = JSON.stringify(s.headerObj, null, "  "), null == s.payloadObj ? s.payloadPP = jr(n) : s.payloadPP = JSON.stringify(s.payloadObj, null, "  "), void 0 !== r && (s.sigHex = gn(r)), s
            }, Cr.jws.JWS.verifyJWT = function(t, e, n) {
                var r = Cr.jws.JWS,
                    i = t.split("."),
                    s = i[0],
                    o = i[1],
                    a = (gn(i[2]), r.readSafeJSONString(jr(s))),
                    u = r.readSafeJSONString(jr(o));
                if (void 0 === a.alg) return !1;
                if (void 0 === n.alg) throw "acceptField.alg shall be specified";
                if (!r.inArray(a.alg, n.alg)) return !1;
                if (void 0 !== u.iss && "object" == typeof n.iss && !r.inArray(u.iss, n.iss)) return !1;
                if (void 0 !== u.sub && "object" == typeof n.sub && !r.inArray(u.sub, n.sub)) return !1;
                if (void 0 !== u.aud && "object" == typeof n.aud)
                    if ("string" == typeof u.aud) {
                        if (!r.inArray(u.aud, n.aud)) return !1
                    } else if ("object" == typeof u.aud && !r.includedArray(u.aud, n.aud)) return !1;
                var c = Cr.jws.IntDate.getNow();
                return void 0 !== n.verifyAt && "number" == typeof n.verifyAt && (c = n.verifyAt), void 0 !== n.gracePeriod && "number" == typeof n.gracePeriod || (n.gracePeriod = 0), !(void 0 !== u.exp && "number" == typeof u.exp && u.exp + n.gracePeriod < c) && (!(void 0 !== u.nbf && "number" == typeof u.nbf && c < u.nbf - n.gracePeriod) && (!(void 0 !== u.iat && "number" == typeof u.iat && c < u.iat - n.gracePeriod) && ((void 0 === u.jti || void 0 === n.jti || u.jti === n.jti) && !!Cr.jws.JWS.verify(t, e, n.alg))))
            }, Cr.jws.JWS.includedArray = function(t, e) {
                var n = Cr.jws.JWS.inArray;
                if (null === t) return !1;
                if ("object" != typeof t) return !1;
                if ("number" != typeof t.length) return !1;
                for (var r = 0; r < t.length; r++)
                    if (!n(t[r], e)) return !1;
                return !0
            }, Cr.jws.JWS.inArray = function(t, e) {
                if (null === e) return !1;
                if ("object" != typeof e) return !1;
                if ("number" != typeof e.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n] == t) return !0;
                return !1
            }, Cr.jws.JWS.jwsalg2sigalg = {
                HS256: "HmacSHA256",
                HS384: "HmacSHA384",
                HS512: "HmacSHA512",
                RS256: "SHA256withRSA",
                RS384: "SHA384withRSA",
                RS512: "SHA512withRSA",
                ES256: "SHA256withECDSA",
                ES384: "SHA384withECDSA",
                PS256: "SHA256withRSAandMGF1",
                PS384: "SHA384withRSAandMGF1",
                PS512: "SHA512withRSAandMGF1",
                none: "none"
            }, Cr.jws.JWS.isSafeJSONString = function(t, e, n) {
                var r = null;
                try {
                    return r = Pr(t), "object" != typeof r ? 0 : r.constructor === Array ? 0 : (e && (e[n] = r), 1)
                } catch (t) {
                    return 0
                }
            }, Cr.jws.JWS.readSafeJSONString = function(t) {
                var e = null;
                try {
                    return e = Pr(t), "object" != typeof e ? null : e.constructor === Array ? null : e
                } catch (t) {
                    return null
                }
            }, Cr.jws.JWS.getEncodedSignatureValueFromJWS = function(t) {
                if (null == t.match(/^[^.]+\.[^.]+\.([^.]+)$/)) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                return RegExp.$1
            }, Cr.jws.JWS.getJWKthumbprint = function(t) {
                if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty) throw "unsupported algorithm for JWK Thumprint";
                var e = "{";
                if ("RSA" === t.kty) {
                    if ("string" != typeof t.n || "string" != typeof t.e) throw "wrong n and e value for RSA key";
                    e += '"e":"' + t.e + '",', e += '"kty":"' + t.kty + '",', e += '"n":"' + t.n + '"}'
                } else if ("EC" === t.kty) {
                    if ("string" != typeof t.crv || "string" != typeof t.x || "string" != typeof t.y) throw "wrong crv, x and y value for EC key";
                    e += '"crv":"' + t.crv + '",', e += '"kty":"' + t.kty + '",', e += '"x":"' + t.x + '",', e += '"y":"' + t.y + '"}'
                } else if ("oct" === t.kty) {
                    if ("string" != typeof t.k) throw "wrong k value for oct(symmetric) key";
                    e += '"kty":"' + t.kty + '",', e += '"k":"' + t.k + '"}'
                }
                var n = wn(e),
                    r = Cr.crypto.Util.hashHex(n, "sha256"),
                    i = pn(r);
                return i
            }, Cr.jws.IntDate = {}, Cr.jws.IntDate.get = function(t) {
                if ("now" == t) return Cr.jws.IntDate.getNow();
                if ("now + 1hour" == t) return Cr.jws.IntDate.getNow() + 3600;
                if ("now + 1day" == t) return Cr.jws.IntDate.getNow() + 86400;
                if ("now + 1month" == t) return Cr.jws.IntDate.getNow() + 2592e3;
                if ("now + 1year" == t) return Cr.jws.IntDate.getNow() + 31536e3;
                if (t.match(/Z$/)) return Cr.jws.IntDate.getZulu(t);
                if (t.match(/^[0-9]+$/)) return parseInt(t);
                throw "unsupported format: " + t
            }, Cr.jws.IntDate.getZulu = function(t) {
                var e;
                if (e = t.match(/(\d+)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)) {
                    var n = RegExp.$1,
                        r = parseInt(n);
                    if (4 == n.length);
                    else {
                        if (2 != n.length) throw "malformed year string";
                        if (50 <= r && r < 100) r = 1900 + r;
                        else {
                            if (!(0 <= r && r < 50)) throw "malformed year string for UTCTime";
                            r = 2e3 + r
                        }
                    }
                    var i = parseInt(RegExp.$2) - 1,
                        s = parseInt(RegExp.$3),
                        o = parseInt(RegExp.$4),
                        a = parseInt(RegExp.$5),
                        u = parseInt(RegExp.$6),
                        c = new Date(Date.UTC(r, i, s, o, a, u));
                    return ~~(c / 1e3)
                }
                throw "unsupported format: " + t
            }, Cr.jws.IntDate.getNow = function() {
                var t = ~~(new Date / 1e3);
                return t
            }, Cr.jws.IntDate.intDate2UTCString = function(t) {
                var e = new Date(1e3 * t);
                return e.toUTCString()
            }, Cr.jws.IntDate.intDate2Zulu = function(t) {
                var e = new Date(1e3 * t),
                    n = ("0000" + e.getUTCFullYear()).slice(-4),
                    r = ("00" + (e.getUTCMonth() + 1)).slice(-2),
                    i = ("00" + e.getUTCDate()).slice(-2),
                    s = ("00" + e.getUTCHours()).slice(-2),
                    o = ("00" + e.getUTCMinutes()).slice(-2),
                    a = ("00" + e.getUTCSeconds()).slice(-2);
                return n + r + i + s + o + a + "Z"
            },
            /*! jwsjs-2.1.0 (c) 2010-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
             */
            "undefined" != typeof Cr && Cr || (Cr = {}), "undefined" != typeof Cr.jws && Cr.jws || (Cr.jws = {}), Cr.jws.JWSJS = function() {
                var t = Cr.jws.JWS,
                    e = Cr.jws.JWS;
                this.aHeader = [], this.sPayload = "", this.aSignature = [], this.init = function() {
                    this.aHeader = [], this.sPayload = void 0, this.aSignature = []
                }, this.initWithJWS = function(t) {
                    this.init();
                    var e = t.split(".");
                    if (3 != e.length) throw "malformed input JWS";
                    this.aHeader.push(e[0]), this.sPayload = e[1], this.aSignature.push(e[2])
                }, this.addSignature = function(t, e, n, r) {
                    if (void 0 === this.sPayload || null === this.sPayload) throw "there's no JSON-JS signature to add.";
                    var i = this.aHeader.length;
                    if (this.aHeader.length != this.aSignature.length) throw "aHeader.length != aSignature.length";
                    try {
                        var s = Cr.jws.JWS.sign(t, e, this.sPayload, n, r),
                            o = s.split(".");
                        o[0], o[2];
                        this.aHeader.push(o[0]), this.aSignature.push(o[2])
                    } catch (t) {
                        throw this.aHeader.length > i && this.aHeader.pop(), this.aSignature.length > i && this.aSignature.pop(), "addSignature failed: " + t
                    }
                }, this.addSignatureByHeaderKey = function(t, e) {
                    var n = jr(this.sPayload),
                        r = new Cr.jws.JWS;
                    r.generateJWSByP1PrvKey(t, n, e);
                    this.aHeader.push(r.parsedJWS.headB64U), this.aSignature.push(r.parsedJWS.sigvalB64U)
                }, this.addSignatureByHeaderPayloadKey = function(t, e, n) {
                    var r = new Cr.jws.JWS;
                    r.generateJWSByP1PrvKey(t, e, n);
                    this.aHeader.push(r.parsedJWS.headB64U), this.sPayload = r.parsedJWS.payloadB64U, this.aSignature.push(r.parsedJWS.sigvalB64U)
                }, this.verifyAll = function(t) {
                    if (this.aHeader.length !== t.length || this.aSignature.length !== t.length) return !1;
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (2 !== n.length) return !1;
                        var r = this.verifyNth(e, n[0], n[1]);
                        if (r === !1) return !1
                    }
                    return !0
                }, this.verifyNth = function(t, n, r) {
                    if (this.aHeader.length <= t || this.aSignature.length <= t) return !1;
                    var i = this.aHeader[t],
                        s = this.aSignature[t],
                        o = i + "." + this.sPayload + "." + s,
                        a = !1;
                    try {
                        a = e.verify(o, n, r)
                    } catch (t) {
                        return !1
                    }
                    return a
                }, this.verifyWithCerts = function(t) {
                    if (this.aHeader.length != t.length) throw "num headers does not match with num certs";
                    if (this.aSignature.length != t.length) throw "num signatures does not match with num certs";
                    for (var e = this.sPayload, n = "", r = 0; r < t.length; r++) {
                        var i = t[r],
                            s = this.aHeader[r],
                            o = this.aSignature[r],
                            a = s + "." + e + "." + o,
                            u = new Cr.jws.JWS;
                        try {
                            var c = u.verifyJWSByPemX509Cert(a, i);
                            1 != c && (n += r + 1 + "th signature unmatch. ")
                        } catch (t) {
                            n += r + 1 + "th signature fail(" + t + "). "
                        }
                    }
                    if ("" == n) return 1;
                    throw n
                }, this.readJWSJS = function(e) {
                    if ("string" == typeof e) {
                        var n = t.readSafeJSONString(e);
                        if (null == n) throw "argument is not safe JSON object string";
                        this.aHeader = n.headers, this.sPayload = n.payload, this.aSignature = n.signatures
                    } else try {
                        if (!(e.headers.length > 0)) throw "malformed header";
                        if (this.aHeader = e.headers, "string" != typeof e.payload) throw "malformed signatures";
                        if (this.sPayload = e.payload, !(e.signatures.length > 0)) throw "malformed signatures";
                        this.signatures = e.signatures
                    } catch (t) {
                        throw "malformed JWS-JS JSON object: " + t
                    }
                }, this.getJSON = function() {
                    return {
                        headers: this.aHeader,
                        payload: this.sPayload,
                        signatures: this.aSignature
                    }
                }, this.isEmpty = function() {
                    return 0 == this.aHeader.length ? 1 : 0
                }
            }, e.SecureRandom = le, e.rng_seed_time = ce, e.BigInteger = o, e.RSAKey = ve, e.ECDSA = Cr.crypto.ECDSA, e.DSA = Cr.crypto.DSA, e.Signature = Cr.crypto.Signature, e.MessageDigest = Cr.crypto.MessageDigest, e.Mac = Cr.crypto.Mac, e.KEYUTIL = Dr, e.ASN1HEX = Or, e.X509 = $n, e.CryptoJS = or, e.b64tohex = i, e.b64toBA = s, e.stoBA = sn, e.BAtos = on, e.BAtohex = an, e.stohex = un, e.stob64 = cn, e.stob64u = fn, e.b64utos = hn, e.b64tob64u = ln, e.b64utob64 = dn, e.hex2b64 = r, e.hextob64u = pn, e.b64utohex = gn, e.b64tohex = i, e.utf8tob64u = Tr, e.b64utoutf8 = jr, e.utf8tob64 = yn, e.b64toutf8 = vn, e.utf8tohex = mn, e.hextoutf8 = Sn, e.hextorstr = bn, e.rstrtohex = wn, e.newline_toUnix = Fn, e.newline_toDos = Pn, e.intarystrtohex = On, e.strdiffidx = Ir, e.KJUR = Cr, e.crypto = Cr.crypto, e.asn1 = Cr.asn1, e.jws = Cr.jws, e.lang = Cr.lang, e.readFileUTF8 = Qn, e.readFileHexByBin = Zn, e.readFile = tr, e.saveFile = er, e.saveFileBinByHex = nr
    }).call(e, n(339).Buffer)
}, function(t, e, n) {
    (function(t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        "use strict";

        function r() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }

        function i() {
            return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(t, e) {
            if (i() < e) throw new RangeError("Invalid typed array length");
            return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t
        }

        function o(t, e, n) {
            if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, n);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, t)
            }
            return a(this, t, e, n)
        }

        function a(t, e, n, r) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? d(t, e, n, r) : "string" == typeof e ? h(t, e, n) : p(t, e)
        }

        function u(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function c(t, e, n, r) {
            return u(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e)
        }

        function f(t, e) {
            if (u(e), t = s(t, e < 0 ? 0 : 0 | g(e)), !o.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < e; ++n) t[n] = 0;
            return t
        }

        function h(t, e, n) {
            if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | v(e, n);
            t = s(t, r);
            var i = t.write(e, n);
            return i !== r && (t = t.slice(0, i)), t
        }

        function l(t, e) {
            var n = e.length < 0 ? 0 : 0 | g(e.length);
            t = s(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t
        }

        function d(t, e, n, r) {
            if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
            return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = l(t, e), t
        }

        function p(t, e) {
            if (o.isBuffer(e)) {
                var n = 0 | g(e.length);
                return t = s(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t)
            }
            if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || X(e.length) ? s(t, 0) : l(t, e);
                if ("Buffer" === e.type && Z(e.data)) return l(t, e.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function g(t) {
            if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | t
        }

        function y(t) {
            return +t != t && (t = 0), o.alloc(+t)
        }

        function v(t, e) {
            if (o.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return W(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return Y(t).length;
                default:
                    if (r) return W(t).length;
                    e = ("" + e).toLowerCase(), r = !0
            }
        }

        function m(t, e, n) {
            var r = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if (n >>>= 0, e >>>= 0, n <= e) return "";
            for (t || (t = "utf8");;) switch (t) {
                case "hex":
                    return R(this, e, n);
                case "utf8":
                case "utf-8":
                    return C(this, e, n);
                case "ascii":
                    return j(this, e, n);
                case "latin1":
                case "binary":
                    return I(this, e, n);
                case "base64":
                    return O(this, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return D(this, e, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), r = !0
            }
        }

        function S(t, e, n) {
            var r = t[e];
            t[e] = t[n], t[n] = r
        }

        function b(t, e, n, r, i) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (i) return -1;
                n = t.length - 1
            } else if (n < 0) {
                if (!i) return -1;
                n = 0
            }
            if ("string" == typeof e && (e = o.from(e, r)), o.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, n, r, i);
            if ("number" == typeof e) return e &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : w(t, [e], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function w(t, e, n, r, i) {
            function s(t, e) {
                return 1 === o ? t[e] : t.readUInt16BE(e * o)
            }
            var o = 1,
                a = t.length,
                u = e.length;
            if (void 0 !== r && (r = String(r).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (t.length < 2 || e.length < 2) return -1;
                o = 2, a /= 2, u /= 2, n /= 2
            }
            var c;
            if (i) {
                var f = -1;
                for (c = n; c < a; c++)
                    if (s(t, c) === s(e, f === -1 ? 0 : c - f)) {
                        if (f === -1 && (f = c), c - f + 1 === u) return f * o
                    } else f !== -1 && (c -= c - f), f = -1
            } else
                for (n + u > a && (n = a - u), c = n; c >= 0; c--) {
                    for (var h = !0, l = 0; l < u; l++)
                        if (s(t, c + l) !== s(e, l)) {
                            h = !1;
                            break
                        } if (h) return c
                }
            return -1
        }

        function _(t, e, n, r) {
            n = Number(n) || 0;
            var i = t.length - n;
            r ? (r = Number(r), r > i && (r = i)) : r = i;
            var s = e.length;
            if (s % 2 !== 0) throw new TypeError("Invalid hex string");
            r > s / 2 && (r = s / 2);
            for (var o = 0; o < r; ++o) {
                var a = parseInt(e.substr(2 * o, 2), 16);
                if (isNaN(a)) return o;
                t[n + o] = a
            }
            return o
        }

        function x(t, e, n, r) {
            return G(W(e, t.length - n), t, n, r)
        }

        function E(t, e, n, r) {
            return G(z(e), t, n, r)
        }

        function A(t, e, n, r) {
            return E(t, e, n, r)
        }

        function F(t, e, n, r) {
            return G(Y(e), t, n, r)
        }

        function P(t, e, n, r) {
            return G(J(e, t.length - n), t, n, r)
        }

        function O(t, e, n) {
            return 0 === e && n === t.length ? $.fromByteArray(t) : $.fromByteArray(t.slice(e, n))
        }

        function C(t, e, n) {
            n = Math.min(t.length, n);
            for (var r = [], i = e; i < n;) {
                var s = t[i],
                    o = null,
                    a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                if (i + a <= n) {
                    var u, c, f, h;
                    switch (a) {
                        case 1:
                            s < 128 && (o = s);
                            break;
                        case 2:
                            u = t[i + 1], 128 === (192 & u) && (h = (31 & s) << 6 | 63 & u, h > 127 && (o = h));
                            break;
                        case 3:
                            u = t[i + 1], c = t[i + 2], 128 === (192 & u) && 128 === (192 & c) && (h = (15 & s) << 12 | (63 & u) << 6 | 63 & c, h > 2047 && (h < 55296 || h > 57343) && (o = h));
                            break;
                        case 4:
                            u = t[i + 1], c = t[i + 2], f = t[i + 3], 128 === (192 & u) && 128 === (192 & c) && 128 === (192 & f) && (h = (15 & s) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & f, h > 65535 && h < 1114112 && (o = h))
                    }
                }
                null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += a
            }
            return T(r)
        }

        function T(t) {
            var e = t.length;
            if (e <= tt) return String.fromCharCode.apply(String, t);
            for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += tt));
            return n
        }

        function j(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
            return r
        }

        function I(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
            return r
        }

        function R(t, e, n) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = "", s = e; s < n; ++s) i += q(t[s]);
            return i
        }

        function D(t, e, n) {
            for (var r = t.slice(e, n), i = "", s = 0; s < r.length; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
            return i
        }

        function H(t, e, n) {
            if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function k(t, e, n, r, i, s) {
            if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
            if (n + r > t.length) throw new RangeError("Index out of range")
        }

        function N(t, e, n, r) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, s = Math.min(t.length - n, 2); i < s; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }

        function B(t, e, n, r) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, s = Math.min(t.length - n, 4); i < s; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
        }

        function M(t, e, n, r, i, s) {
            if (n + r > t.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function V(t, e, n, r, i) {
            return i || M(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Q.write(t, e, n, r, 23, 4), n + 4
        }

        function L(t, e, n, r, i) {
            return i || M(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Q.write(t, e, n, r, 52, 8), n + 8
        }

        function K(t) {
            if (t = U(t).replace(et, ""), t.length < 2) return "";
            for (; t.length % 4 !== 0;) t += "=";
            return t
        }

        function U(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function q(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function W(t, e) {
            e = e || 1 / 0;
            for (var n, r = t.length, i = null, s = [], o = 0; o < r; ++o) {
                if (n = t.charCodeAt(o), n > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (e -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === r) {
                            (e -= 3) > -1 && s.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && s.push(239, 191, 189), i = n;
                        continue
                    }
                    n = (i - 55296 << 10 | n - 56320) + 65536
                } else i && (e -= 3) > -1 && s.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((e -= 1) < 0) break;
                    s.push(n)
                } else if (n < 2048) {
                    if ((e -= 2) < 0) break;
                    s.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((e -= 3) < 0) break;
                    s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return s
        }

        function z(t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
            return e
        }

        function J(t, e) {
            for (var n, r, i, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) n = t.charCodeAt(o), r = n >> 8, i = n % 256, s.push(i), s.push(r);
            return s
        }

        function Y(t) {
            return $.toByteArray(K(t))
        }

        function G(t, e, n, r) {
            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
            return i
        }

        function X(t) {
            return t !== t
        }
        var $ = n(340),
            Q = n(341),
            Z = n(342);
        e.Buffer = o, e.SlowBuffer = y, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(), e.kMaxLength = i(), o.poolSize = 8192, o._augment = function(t) {
            return t.__proto__ = o.prototype, t
        }, o.from = function(t, e, n) {
            return a(null, t, e, n)
        }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
            value: null,
            configurable: !0
        })), o.alloc = function(t, e, n) {
            return c(null, t, e, n)
        }, o.allocUnsafe = function(t) {
            return f(null, t)
        }, o.allocUnsafeSlow = function(t) {
            return f(null, t)
        }, o.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }, o.compare = function(t, e) {
            if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var n = t.length, r = e.length, i = 0, s = Math.min(n, r); i < s; ++i)
                if (t[i] !== e[i]) {
                    n = t[i], r = e[i];
                    break
                } return n < r ? -1 : r < n ? 1 : 0
        }, o.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, o.concat = function(t, e) {
            if (!Z(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return o.alloc(0);
            var n;
            if (void 0 === e)
                for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = o.allocUnsafe(e),
                i = 0;
            for (n = 0; n < t.length; ++n) {
                var s = t[n];
                if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(r, i), i += s.length
            }
            return r
        }, o.byteLength = v, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) S(this, e, e + 1);
            return this
        }, o.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) S(this, e, e + 3), S(this, e + 1, e + 2);
            return this
        }, o.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) S(this, e, e + 7), S(this, e + 1, e + 6), S(this, e + 2, e + 5), S(this, e + 3, e + 4);
            return this
        }, o.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : m.apply(this, arguments)
        }, o.prototype.equals = function(t) {
            if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === o.compare(this, t)
        }, o.prototype.inspect = function() {
            var t = "",
                n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
        }, o.prototype.compare = function(t, e, n, r, i) {
            if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;
            for (var s = i - r, a = n - e, u = Math.min(s, a), c = this.slice(r, i), f = t.slice(e, n), h = 0; h < u; ++h)
                if (c[h] !== f[h]) {
                    s = c[h], a = f[h];
                    break
                } return s < a ? -1 : a < s ? 1 : 0
        }, o.prototype.includes = function(t, e, n) {
            return this.indexOf(t, e, n) !== -1
        }, o.prototype.indexOf = function(t, e, n) {
            return b(this, t, e, n, !0)
        }, o.prototype.lastIndexOf = function(t, e, n) {
            return b(this, t, e, n, !1)
        }, o.prototype.write = function(t, e, n, r) {
            if (void 0 === e) r = "utf8", n = this.length, e = 0;
            else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var i = this.length - e;
            if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var s = !1;;) switch (r) {
                case "hex":
                    return _(this, t, e, n);
                case "utf8":
                case "utf-8":
                    return x(this, t, e, n);
                case "ascii":
                    return E(this, t, e, n);
                case "latin1":
                case "binary":
                    return A(this, t, e, n);
                case "base64":
                    return F(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return P(this, t, e, n);
                default:
                    if (s) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), s = !0
            }
        }, o.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var tt = 4096;
        o.prototype.slice = function(t, e) {
            var n = this.length;
            t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
            var r;
            if (o.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = o.prototype;
            else {
                var i = e - t;
                r = new o(i, void 0);
                for (var s = 0; s < i; ++s) r[s] = this[s + t]
            }
            return r
        }, o.prototype.readUIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || H(t, e, this.length);
            for (var r = this[t], i = 1, s = 0; ++s < e && (i *= 256);) r += this[t + s] * i;
            return r
        }, o.prototype.readUIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || H(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
            return r
        }, o.prototype.readUInt8 = function(t, e) {
            return e || H(t, 1, this.length), this[t]
        }, o.prototype.readUInt16LE = function(t, e) {
            return e || H(t, 2, this.length), this[t] | this[t + 1] << 8
        }, o.prototype.readUInt16BE = function(t, e) {
            return e || H(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, o.prototype.readUInt32LE = function(t, e) {
            return e || H(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, o.prototype.readUInt32BE = function(t, e) {
            return e || H(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, o.prototype.readIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || H(t, e, this.length);
            for (var r = this[t], i = 1, s = 0; ++s < e && (i *= 256);) r += this[t + s] * i;
            return i *= 128, r >= i && (r -= Math.pow(2, 8 * e)), r
        }, o.prototype.readIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || H(t, e, this.length);
            for (var r = e, i = 1, s = this[t + --r]; r > 0 && (i *= 256);) s += this[t + --r] * i;
            return i *= 128, s >= i && (s -= Math.pow(2, 8 * e)), s
        }, o.prototype.readInt8 = function(t, e) {
            return e || H(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t]
        }, o.prototype.readInt16LE = function(t, e) {
            e || H(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, o.prototype.readInt16BE = function(t, e) {
            e || H(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, o.prototype.readInt32LE = function(t, e) {
            return e || H(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, o.prototype.readInt32BE = function(t, e) {
            return e || H(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, o.prototype.readFloatLE = function(t, e) {
            return e || H(t, 4, this.length), Q.read(this, t, !0, 23, 4)
        }, o.prototype.readFloatBE = function(t, e) {
            return e || H(t, 4, this.length), Q.read(this, t, !1, 23, 4)
        }, o.prototype.readDoubleLE = function(t, e) {
            return e || H(t, 8, this.length), Q.read(this, t, !0, 52, 8)
        }, o.prototype.readDoubleBE = function(t, e) {
            return e || H(t, 8, this.length), Q.read(this, t, !1, 52, 8)
        }, o.prototype.writeUIntLE = function(t, e, n, r) {
            if (t = +t, e |= 0, n |= 0, !r) {
                var i = Math.pow(2, 8 * n) - 1;
                k(this, t, e, n, i, 0)
            }
            var s = 1,
                o = 0;
            for (this[e] = 255 & t; ++o < n && (s *= 256);) this[e + o] = t / s & 255;
            return e + n
        }, o.prototype.writeUIntBE = function(t, e, n, r) {
            if (t = +t, e |= 0, n |= 0, !r) {
                var i = Math.pow(2, 8 * n) - 1;
                k(this, t, e, n, i, 0)
            }
            var s = n - 1,
                o = 1;
            for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) this[e + s] = t / o & 255;
            return e + n
        }, o.prototype.writeUInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, o.prototype.writeUInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
        }, o.prototype.writeUInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
        }, o.prototype.writeUInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4
        }, o.prototype.writeUInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4
        }, o.prototype.writeIntLE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                k(this, t, e, n, i - 1, -i)
            }
            var s = 0,
                o = 1,
                a = 0;
            for (this[e] = 255 & t; ++s < n && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
            return e + n
        }, o.prototype.writeIntBE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                k(this, t, e, n, i - 1, -i)
            }
            var s = n - 1,
                o = 1,
                a = 0;
            for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
            return e + n
        }, o.prototype.writeInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, o.prototype.writeInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
        }, o.prototype.writeInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
        }, o.prototype.writeInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4
        }, o.prototype.writeInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || k(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4
        }, o.prototype.writeFloatLE = function(t, e, n) {
            return V(this, t, e, !0, n)
        }, o.prototype.writeFloatBE = function(t, e, n) {
            return V(this, t, e, !1, n)
        }, o.prototype.writeDoubleLE = function(t, e, n) {
            return L(this, t, e, !0, n)
        }, o.prototype.writeDoubleBE = function(t, e, n) {
            return L(this, t, e, !1, n)
        }, o.prototype.copy = function(t, e, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
            var i, s = r - n;
            if (this === t && n < e && e < r)
                for (i = s - 1; i >= 0; --i) t[i + e] = this[i + n];
            else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < s; ++i) t[i + e] = this[i + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
            return s
        }, o.prototype.fill = function(t, e, n, r) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
            if (n <= e) return this;
            e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
            var s;
            if ("number" == typeof t)
                for (s = e; s < n; ++s) this[s] = t;
            else {
                var a = o.isBuffer(t) ? t : W(new o(t, r).toString()),
                    u = a.length;
                for (s = 0; s < n - e; ++s) this[s + e] = a[s % u]
            }
            return this
        };
        var et = /[^+\/0-9A-Za-z-_]/g
    }).call(e, function() {
        return this
    }())
}, function(t, e) {
    "use strict";

    function n(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
    }

    function r(t) {
        return 3 * t.length / 4 - n(t)
    }

    function i(t) {
        var e, r, i, s, o, a = t.length;
        s = n(t), o = new f(3 * a / 4 - s), r = s > 0 ? a - 4 : a;
        var u = 0;
        for (e = 0; e < r; e += 4) i = c[t.charCodeAt(e)] << 18 | c[t.charCodeAt(e + 1)] << 12 | c[t.charCodeAt(e + 2)] << 6 | c[t.charCodeAt(e + 3)], o[u++] = i >> 16 & 255, o[u++] = i >> 8 & 255, o[u++] = 255 & i;
        return 2 === s ? (i = c[t.charCodeAt(e)] << 2 | c[t.charCodeAt(e + 1)] >> 4, o[u++] = 255 & i) : 1 === s && (i = c[t.charCodeAt(e)] << 10 | c[t.charCodeAt(e + 1)] << 4 | c[t.charCodeAt(e + 2)] >> 2, o[u++] = i >> 8 & 255, o[u++] = 255 & i), o
    }

    function s(t) {
        return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
    }

    function o(t, e, n) {
        for (var r, i = [], o = e; o < n; o += 3) r = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(s(r));
        return i.join("")
    }

    function a(t) {
        for (var e, n = t.length, r = n % 3, i = "", s = [], a = 16383, c = 0, f = n - r; c < f; c += a) s.push(o(t, c, c + a > f ? f : c + a));
        return 1 === r ? (e = t[n - 1], i += u[e >> 2], i += u[e << 4 & 63], i += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i += u[e >> 10], i += u[e >> 4 & 63], i += u[e << 2 & 63], i += "="), s.push(i), s.join("")
    }
    e.byteLength = r, e.toByteArray = i, e.fromByteArray = a;
    for (var u = [], c = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, d = h.length; l < d; ++l) u[l] = h[l], c[h.charCodeAt(l)] = l;
    c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
}, function(t, e) {
    e.read = function(t, e, n, r, i) {
        var s, o, a = 8 * i - r - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            f = -7,
            h = n ? i - 1 : 0,
            l = n ? -1 : 1,
            d = t[e + h];
        for (h += l, s = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; s = 256 * s + t[e + h], h += l, f -= 8);
        for (o = s & (1 << -f) - 1, s >>= -f, f += r; f > 0; o = 256 * o + t[e + h], h += l, f -= 8);
        if (0 === s) s = 1 - c;
        else {
            if (s === u) return o ? NaN : (d ? -1 : 1) * (1 / 0);
            o += Math.pow(2, r), s -= c
        }
        return (d ? -1 : 1) * o * Math.pow(2, s - r)
    }, e.write = function(t, e, n, r, i, s) {
        var o, a, u, c = 8 * s - i - 1,
            f = (1 << c) - 1,
            h = f >> 1,
            l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : s - 1,
            p = r ? 1 : -1,
            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = f) : (o = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), e += o + h >= 1 ? l / u : l * Math.pow(2, 1 - h), e * u >= 2 && (o++, u /= 2), o + h >= f ? (a = 0, o = f) : o + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i), o += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; t[n + d] = 255 & a, d += p, a /= 256, i -= 8);
        for (o = o << i | a, c += i; c > 0; t[n + d] = 255 & o, d += p, o /= 256, c -= 8);
        t[n + d - p] |= 128 * g
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == n.call(t)
    }
}, function(t, e) {}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(345),
        u = r(a),
        c = n(346),
        f = r(c),
        h = function() {
            function t(e) {
                var n = e.url,
                    r = e.client_id,
                    s = e.redirect_uri,
                    a = e.response_type,
                    c = e.scope,
                    h = e.authority,
                    l = e.data,
                    d = e.prompt,
                    p = e.display,
                    g = e.max_age,
                    y = e.ui_locales,
                    v = e.id_token_hint,
                    m = e.login_hint,
                    S = e.acr_values,
                    b = e.resource,
                    w = e.request,
                    _ = e.request_uri,
                    x = e.extraQueryParams;
                if (i(this, t), !n) throw o.default.error("No url passed to SigninRequest"), new Error("url");
                if (!r) throw o.default.error("No client_id passed to SigninRequest"), new Error("client_id");
                if (!s) throw o.default.error("No redirect_uri passed to SigninRequest"), new Error("redirect_uri");
                if (!a) throw o.default.error("No response_type passed to SigninRequest"), new Error("response_type");
                if (!c) throw o.default.error("No scope passed to SigninRequest"), new Error("scope");
                if (!h) throw o.default.error("No authority passed to SigninRequest"), new Error("authority");
                var E = t.isOidc(a);
                this.state = new f.default({
                    nonce: E,
                    data: l,
                    client_id: r,
                    authority: h
                }), n = u.default.addQueryParam(n, "client_id", r), n = u.default.addQueryParam(n, "redirect_uri", s), n = u.default.addQueryParam(n, "response_type", a), n = u.default.addQueryParam(n, "scope", c), n = u.default.addQueryParam(n, "state", this.state.id), E && (n = u.default.addQueryParam(n, "nonce", this.state.nonce));
                var A = {
                    prompt: d,
                    display: p,
                    max_age: g,
                    ui_locales: y,
                    id_token_hint: v,
                    login_hint: m,
                    acr_values: S,
                    resource: b,
                    request: w,
                    request_uri: _
                };
                for (var F in A) A[F] && (n = u.default.addQueryParam(n, F, A[F]));
                for (var P in x) n = u.default.addQueryParam(n, P, x[P]);
                this.url = n
            }
            return t.isOidc = function(t) {
                var e = t.split(/\s+/g).filter(function(t) {
                    return "id_token" === t
                });
                return !!e[0]
            }, t.isOAuth = function(t) {
                var e = t.split(/\s+/g).filter(function(t) {
                    return "token" === t
                });
                return !!e[0]
            }, t
        }();
    e.default = h, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(331),
        u = r(a),
        c = function() {
            function t() {
                i(this, t)
            }
            return t.addQueryParam = function(t, e, n) {
                return t.indexOf("?") < 0 && (t += "?"), "?" !== t[t.length - 1] && (t += "&"), t += encodeURIComponent(e), t += "=", t += encodeURIComponent(n)
            }, t.parseUrlFragment = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default;
                o.default.debug("UrlUtility.parseUrlFragment"), "string" != typeof t && (t = n.location.href);
                var r = t.lastIndexOf(e);
                r >= 0 && (t = t.substr(r + 1));
                for (var i, s = {}, a = /([^&=]+)=([^&]*)/g, c = 0; i = a.exec(t);)
                    if (s[decodeURIComponent(i[1])] = decodeURIComponent(i[2]), c++ > 50) return o.default.error("response exceeded expected number of parameters", t), {
                        error: "Response exceeded expected number of parameters"
                    };
                for (var f in s) return s;
                return {}
            }, t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(327),
        c = r(u),
        f = n(347),
        h = r(f),
        l = n(348),
        d = r(l),
        p = function(t) {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.nonce,
                    o = n.authority,
                    a = n.client_id;
                i(this, e);
                var u = s(this, t.call(this, arguments[0]));
                return r === !0 ? u._nonce = (0, d.default)() : r && (u._nonce = r), u._authority = o, u._client_id = a, u
            }
            return o(e, t), e.prototype.toStorageString = function() {
                return c.default.debug("SigninState.toStorageString"), JSON.stringify({
                    id: this.id,
                    data: this.data,
                    created: this.created,
                    nonce: this.nonce,
                    authority: this.authority,
                    client_id: this.client_id
                })
            }, e.fromStorageString = function(t) {
                c.default.debug("SigninState.fromStorageString");
                var n = JSON.parse(t);
                return new e(n)
            }, a(e, [{
                key: "nonce",
                get: function() {
                    return this._nonce
                }
            }, {
                key: "authority",
                get: function() {
                    return this._authority
                }
            }, {
                key: "client_id",
                get: function() {
                    return this._client_id
                }
            }]), e
        }(h.default);
    e.default = p, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = n(348),
        c = r(u),
        f = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.id,
                    r = e.data,
                    s = e.created;
                i(this, t), this._id = n || (0, c.default)(), this._data = r, "number" == typeof s && s > 0 ? this._created = s : this._created = parseInt(Date.now() / 1e3)
            }
            return t.prototype.toStorageString = function() {
                return a.default.debug("State.toStorageString"), JSON.stringify({
                    id: this.id,
                    data: this.data,
                    created: this.created
                })
            }, t.fromStorageString = function(e) {
                return a.default.debug("State.fromStorageString"), new t(JSON.parse(e))
            }, t.clearStaleState = function(e, n) {
                a.default.debug("State.clearStaleState");
                var r = Date.now() / 1e3 - n;
                return e.getAllKeys().then(function(n) {
                    a.default.debug("got keys", n);
                    var i = [],
                        s = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (var c, f = function() {
                                var n = c.value;
                                l = e.get(n).then(function(i) {
                                    var s = !1;
                                    if (i) try {
                                        var o = t.fromStorageString(i);
                                        a.default.debug("got item from key: ", n, o.created), o.created <= r && (s = !0)
                                    } catch (t) {
                                        a.default.error("Error parsing state for key", n, t.message), s = !0
                                    } else a.default.debug("no item in storage for key: ", n), s = !0;
                                    if (s) return a.default.debug("removed item for key: ", n), e.remove(n)
                                }), i.push(l)
                            }, h = n[Symbol.iterator](); !(s = (c = h.next()).done); s = !0) {
                            var l;
                            f()
                        }
                    } catch (t) {
                        o = !0, u = t
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (o) throw u
                        }
                    }
                    return a.default.debug("waiting on promise count:", i.length), Promise.all(i)
                })
            }, s(t, [{
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "data",
                get: function() {
                    return this._data
                }
            }, {
                key: "created",
                get: function() {
                    return this._created
                }
            }]), t
        }();
    e.default = f, t.exports = e.default
}, function(t, e) {
    "use strict";
    // @preserve Copyright (c) Microsoft Open Technologies, Inc.
    function n() {
        for (var t = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx", e = "0123456789abcdef", n = 0, r = "", i = 0; i < t.length; i++) "-" !== t[i] && "4" !== t[i] && (n = 16 * Math.random() | 0), "x" === t[i] ? r += e[n] : "y" === t[i] ? (n &= 3, n |= 8, r += e[n]) : r += t[i];
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(345),
        a = r(o),
        u = "openid",
        c = function() {
            function t(e) {
                i(this, t);
                var n = a.default.parseUrlFragment(e, "#");
                this.error = n.error, this.error_description = n.error_description, this.error_uri = n.error_uri, this.state = n.state, this.id_token = n.id_token, this.session_state = n.session_state, this.access_token = n.access_token, this.token_type = n.token_type, this.scope = n.scope, this.profile = void 0;
                var r = parseInt(n.expires_in);
                if ("number" == typeof r && r > 0) {
                    var s = parseInt(Date.now() / 1e3);
                    this.expires_at = s + r
                }
            }
            return s(t, [{
                key: "expires_in",
                get: function() {
                    if (this.expires_at) {
                        var t = parseInt(Date.now() / 1e3);
                        return this.expires_at - t
                    }
                }
            }, {
                key: "expired",
                get: function() {
                    var t = this.expires_in;
                    if (void 0 !== t) return t <= 0
                }
            }, {
                key: "scopes",
                get: function() {
                    return (this.scope || "").split(" ")
                }
            }, {
                key: "isOpenIdConnect",
                get: function() {
                    return this.scopes.indexOf(u) >= 0 || !!this.id_token
                }
            }]), t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(345),
        u = r(a),
        c = n(347),
        f = r(c),
        h = function t(e) {
            var n = e.url,
                r = e.id_token_hint,
                s = e.post_logout_redirect_uri,
                a = e.data;
            if (i(this, t), !n) throw o.default.error("No url passed to SignoutRequest"), new Error("url");
            r && (n = u.default.addQueryParam(n, "id_token_hint", r)), s && (n = u.default.addQueryParam(n, "post_logout_redirect_uri", s), a && (this.state = new f.default({
                data: a
            }), n = u.default.addQueryParam(n, "state", this.state.id))), this.url = n
        };
    e.default = h, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(345),
        o = r(s),
        a = function t(e) {
            i(this, t);
            var n = o.default.parseUrlFragment(e, "?");
            this.error = n.error, this.error_description = n.error_description, this.error_uri = n.error_uri, this.state = n.state
        };
    e.default = a, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = function() {
            function t() {
                i(this, t), this._data = {}
            }
            return t.prototype.getItem = function(t) {
                return a.default.debug("InMemoryWebStorage.getItem", t), this._data[t]
            }, t.prototype.setItem = function(t, e) {
                a.default.debug("InMemoryWebStorage.setItem", t), this._data[t] = e
            }, t.prototype.removeItem = function(t) {
                a.default.debug("InMemoryWebStorage.removeItem", t), delete this._data[t]
            }, t.prototype.key = function(t) {
                return Object.getOwnPropertyNames(this._data)[t]
            }, s(t, [{
                key: "length",
                get: function() {
                    return Object.getOwnPropertyNames(this._data).length
                }
            }]), t
        }();
    e.default = u, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(327),
        c = r(u),
        f = n(328),
        h = r(f),
        l = n(354),
        d = r(l),
        p = n(360),
        g = r(p),
        y = n(361),
        v = r(y),
        m = n(365),
        S = r(m),
        b = n(366),
        w = r(b),
        _ = n(368),
        x = r(_),
        E = function(t) {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.default,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.default,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : x.default;
                i(this, e), n instanceof d.default || (n = new d.default(n));
                var u = s(this, t.call(this, n));
                return u._events = new v.default(n), u._silentRenewService = new r(u), u.settings.automaticSilentRenew && (c.default.debug("automaticSilentRenew is configured, setting up silent renew"), u.startSilentRenew()), u.settings.monitorSession && (c.default.debug("monitorSession is configured, setting up session monitor"), u._sessionMonitor = new o(u)), u._tokenRevocationClient = new a(u._settings), u
            }
            return o(e, t), e.prototype.getUser = function() {
                var t = this;
                return c.default.debug("UserManager.getUser"), this._loadUser().then(function(e) {
                    return e ? (c.default.info("user loaded"), t._events.load(e, !1), e) : (c.default.info("user not found in storage"), null)
                })
            }, e.prototype.removeUser = function() {
                var t = this;
                return c.default.debug("UserManager.removeUser"), this.storeUser(null).then(function() {
                    c.default.info("user removed from storage"), t._events.unload()
                })
            }, e.prototype.signinRedirect = function(t) {
                return c.default.debug("UserManager.signinRedirect"), this._signinStart(t, this._redirectNavigator).then(function() {
                    c.default.info("signinRedirect successful")
                })
            }, e.prototype.signinRedirectCallback = function(t) {
                return c.default.debug("UserManager.signinRedirectCallback"), this._signinEnd(t || this._redirectNavigator.url).then(function(t) {
                    return t && (t.profile && t.profile.sub ? c.default.info("signinRedirectCallback successful, signed in sub: ", t.profile.sub) : c.default.info("signinRedirectCallback successful")), t
                })
            }, e.prototype.signinPopup = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                c.default.debug("UserManager.signinPopup");
                var e = t.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
                return e ? (t.redirect_uri = e, t.display = "popup", this._signin(t, this._popupNavigator, {
                    startUrl: e,
                    popupWindowFeatures: t.popupWindowFeatures || this.settings.popupWindowFeatures,
                    popupWindowTarget: t.popupWindowTarget || this.settings.popupWindowTarget
                }).then(function(t) {
                    return t && (t.profile && t.profile.sub ? c.default.info("signinPopup successful, signed in sub: ", t.profile.sub) : c.default.info("signinPopup successful")), t
                })) : (c.default.error("No popup_redirect_uri or redirect_uri configured"), Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured")))
            }, e.prototype.signinPopupCallback = function(t) {
                return c.default.debug("UserManager.signinPopupCallback"), this._signinCallback(t, this._popupNavigator).then(function(t) {
                    return t && (t.profile && t.profile.sub ? c.default.info("signinPopupCallback successful, signed in sub: ", t.profile.sub) : c.default.info("signinPopupCallback successful")), t
                })
            }, e.prototype.signinSilent = function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                c.default.debug("UserManager.signinSilent");
                var n = e.redirect_uri || this.settings.silent_redirect_uri;
                if (!n) return c.default.error("No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured"));
                e.redirect_uri = n, e.prompt = "none";
                var r = void 0;
                return r = e.id_token_hint || !this.settings.includeIdTokenInSilentRenew ? Promise.resolve() : this._loadUser().then(function(t) {
                    e.id_token_hint = t && t.id_token
                }), r.then(function() {
                    return t._signin(e, t._iframeNavigator, {
                        startUrl: n,
                        silentRequestTimeout: e.silentRequestTimeout || t.settings.silentRequestTimeout
                    })
                }).then(function(t) {
                    return t && (t.profile && t.profile.sub ? c.default.info("signinSilent successful, signed in sub: ", t.profile.sub) : c.default.info("signinSilent successful")), t
                })
            }, e.prototype.signinSilentCallback = function(t) {
                return c.default.debug("UserManager.signinSilentCallback"), this._signinCallback(t, this._iframeNavigator).then(function(t) {
                    return t && (t.profile && t.profile.sub ? c.default.info("signinSilentCallback successful, signed in sub: ", t.profile.sub) : c.default.info("signinSilentCallback successful")), t
                })
            }, e.prototype.querySessionStatus = function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                c.default.debug("UserManager.querySessionStatus");
                var n = e.redirect_uri || this.settings.silent_redirect_uri;
                return n ? (e.redirect_uri = n, e.prompt = "none", e.response_type = "id_token", e.scope = "openid", this._signinStart(e, this._iframeNavigator, {
                    startUrl: n,
                    silentRequestTimeout: e.silentRequestTimeout || this.settings.silentRequestTimeout
                }).then(function(e) {
                    return t.processSigninResponse(e.url).then(function(t) {
                        return c.default.debug("got signin response"), t.session_state && t.profile.sub && t.profile.sid ? (c.default.info("querySessionStatus success for sub: ", t.profile.sub), {
                            session_state: t.session_state,
                            sub: t.profile.sub,
                            sid: t.profile.sid
                        }) : void c.default.info("querySessionStatus successful, user not authenticated")
                    })
                })) : (c.default.error("No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured")))
            }, e.prototype._signin = function(t, e) {
                var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return c.default.debug("_signin"), this._signinStart(t, e, r).then(function(t) {
                    return n._signinEnd(t.url)
                })
            }, e.prototype._signinStart = function(t, e) {
                var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return c.default.debug("_signinStart"), e.prepare(r).then(function(e) {
                    return c.default.debug("got navigator window handle"), n.createSigninRequest(t).then(function(t) {
                        return c.default.debug("got signin request"), r.url = t.url, r.id = t.state.id, e.navigate(r)
                    }).catch(function(t) {
                        throw e.close && (c.default.debug("Error after preparing navigator, closing navigator window"), e.close()), t
                    })
                })
            }, e.prototype._signinEnd = function(t) {
                var e = this;
                return c.default.debug("_signinEnd"), this.processSigninResponse(t).then(function(t) {
                    c.default.debug("got signin response");
                    var n = new g.default(t);
                    return e.storeUser(n).then(function() {
                        return c.default.debug("user stored"), e._events.load(n), n
                    })
                })
            }, e.prototype._signinCallback = function(t, e) {
                return c.default.debug("_signinCallback"), e.callback(t)
            }, e.prototype.signoutRedirect = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                c.default.debug("UserManager.signoutRedirect");
                var e = t.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
                return e && (t.post_logout_redirect_uri = e), this._signoutStart(t, this._redirectNavigator).then(function() {
                    c.default.info("signoutRedirect successful")
                })
            }, e.prototype.signoutRedirectCallback = function(t) {
                return c.default.debug("UserManager.signoutRedirectCallback"), this._signoutEnd(t || this._redirectNavigator.url).then(function(t) {
                    return c.default.info("signoutRedirectCallback successful"), t
                })
            }, e.prototype.signoutPopup = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                c.default.debug("UserManager.signinPopup");
                var e = t.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
                return t.post_logout_redirect_uri = e, t.display = "popup", t.post_logout_redirect_uri && (t.state = t.state || {}), this._signout(t, this._popupNavigator, {
                    startUrl: e,
                    popupWindowFeatures: t.popupWindowFeatures || this.settings.popupWindowFeatures,
                    popupWindowTarget: t.popupWindowTarget || this.settings.popupWindowTarget
                }).then(function() {
                    c.default.info("signoutPopup successful")
                })
            }, e.prototype.signoutPopupCallback = function(t, e) {
                "undefined" == typeof e && "boolean" == typeof t && (t = null, e = !0), c.default.debug("UserManager.signoutPopupCallback");
                var n = "?";
                return this._popupNavigator.callback(t, e, n).then(function() {
                    c.default.info("signoutPopupCallback successful")
                })
            }, e.prototype._signout = function(t, e) {
                var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return c.default.debug("_signout"), this._signoutStart(t, e, r).then(function(t) {
                    return n._signoutEnd(t.url)
                })
            }, e.prototype._signoutStart = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = this,
                    n = arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return c.default.debug("_signoutStart"), n.prepare(r).then(function(n) {
                    return c.default.debug("got navigator window handle"), e._loadUser().then(function(i) {
                        c.default.debug("loaded current user from storage");
                        var s = e._settings.revokeAccessTokenOnSignout ? e._revokeInternal(i) : Promise.resolve();
                        return s.then(function() {
                            var s = t.id_token_hint || i && i.id_token;
                            return s && (c.default.debug("Setting id_token into signout request"), t.id_token_hint = s), e.removeUser().then(function() {
                                return c.default.debug("user removed, creating signout request"), e.createSignoutRequest(t).then(function(t) {
                                    return c.default.debug("got signout request"), r.url = t.url, t.state && (r.id = t.state.id), n.navigate(r)
                                })
                            })
                        })
                    }).catch(function(t) {
                        throw n.close && (c.default.debug("Error after preparing navigator, closing navigator window"), n.close()), t
                    })
                })
            }, e.prototype._signoutEnd = function(t) {
                return c.default.debug("_signoutEnd"), this.processSignoutResponse(t).then(function(t) {
                    return c.default.debug("got signout response"), t
                })
            }, e.prototype.revokeAccessToken = function() {
                var t = this;
                return c.default.debug("UserManager.revokeAccessToken"), this._loadUser().then(function(e) {
                    return t._revokeInternal(e, !0).then(function(n) {
                        if (n) return c.default.debug("removing token properties from user and re-storing"), e.access_token = null, e.expires_at = null, e.token_type = null, t.storeUser(e).then(function() {
                            c.default.debug("user stored"), t._events.load(e)
                        })
                    })
                }).then(function() {
                    c.default.info("access token revoked successfully")
                })
            }, e.prototype._revokeInternal = function(t, e) {
                c.default.debug("checking if token revocation is necessary");
                var n = t && t.access_token;
                return !n || n.indexOf(".") >= 0 ? (c.default.debug("no need to revoke due to no user, token, or JWT format"), Promise.resolve(!1)) : this._tokenRevocationClient.revoke(n, e).then(function() {
                    return !0
                })
            }, e.prototype.startSilentRenew = function() {
                this._silentRenewService.start()
            }, e.prototype.stopSilentRenew = function() {
                this._silentRenewService.stop()
            }, e.prototype._loadUser = function() {
                return c.default.debug("_loadUser"), this._userStore.get(this._userStoreKey).then(function(t) {
                    return t ? (c.default.debug("user storageString loaded"), g.default.fromStorageString(t)) : (c.default.debug("no user storageString"), null)
                })
            }, e.prototype.storeUser = function(t) {
                if (t) {
                    c.default.debug("storeUser storing user");
                    var e = t.toStorageString();
                    return this._userStore.set(this._userStoreKey, e)
                }
                return c.default.debug("storeUser removing user storage"), this._userStore.remove(this._userStoreKey)
            }, a(e, [{
                key: "_redirectNavigator",
                get: function() {
                    return this.settings.redirectNavigator
                }
            }, {
                key: "_popupNavigator",
                get: function() {
                    return this.settings.popupNavigator
                }
            }, {
                key: "_iframeNavigator",
                get: function() {
                    return this.settings.iframeNavigator
                }
            }, {
                key: "_userStore",
                get: function() {
                    return this.settings.userStore
                }
            }, {
                key: "events",
                get: function() {
                    return this._events
                }
            }, {
                key: "_userStoreKey",
                get: function() {
                    return "user:" + this.settings.authority + ":" + this.settings.client_id
                }
            }]), e
        }(h.default);
    e.default = E, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(327),
        c = (r(u), n(329)),
        f = r(c),
        h = n(355),
        l = r(h),
        d = n(356),
        p = r(d),
        g = n(358),
        y = r(g),
        v = n(330),
        m = r(v),
        S = n(331),
        b = r(S),
        w = 60,
        _ = 2e3,
        x = function(t) {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.popup_redirect_uri,
                    o = n.popup_post_logout_redirect_uri,
                    a = n.popupWindowFeatures,
                    u = n.popupWindowTarget,
                    c = n.silent_redirect_uri,
                    f = n.silentRequestTimeout,
                    h = n.automaticSilentRenew,
                    d = void 0 !== h && h,
                    g = n.includeIdTokenInSilentRenew,
                    v = void 0 === g || g,
                    S = n.monitorSession,
                    x = void 0 === S || S,
                    E = n.checkSessionInterval,
                    A = void 0 === E ? _ : E,
                    F = n.revokeAccessTokenOnSignout,
                    P = void 0 !== F && F,
                    O = n.accessTokenExpiringNotificationTime,
                    C = void 0 === O ? w : O,
                    T = n.redirectNavigator,
                    j = void 0 === T ? new l.default : T,
                    I = n.popupNavigator,
                    R = void 0 === I ? new p.default : I,
                    D = n.iframeNavigator,
                    H = void 0 === D ? new y.default : D,
                    k = n.userStore,
                    N = void 0 === k ? new m.default({
                        store: b.default.sessionStorage
                    }) : k;
                i(this, e);
                var B = s(this, t.call(this, arguments[0]));
                return B._popup_redirect_uri = r, B._popup_post_logout_redirect_uri = o, B._popupWindowFeatures = a, B._popupWindowTarget = u, B._silent_redirect_uri = c, B._silentRequestTimeout = f, B._automaticSilentRenew = !!d, B._includeIdTokenInSilentRenew = v, B._accessTokenExpiringNotificationTime = C, B._monitorSession = x, B._checkSessionInterval = A, B._revokeAccessTokenOnSignout = P, B._redirectNavigator = j, B._popupNavigator = R, B._iframeNavigator = H, B._userStore = N, B
            }
            return o(e, t), a(e, [{
                key: "popup_redirect_uri",
                get: function() {
                    return this._popup_redirect_uri
                }
            }, {
                key: "popup_post_logout_redirect_uri",
                get: function() {
                    return this._popup_post_logout_redirect_uri
                }
            }, {
                key: "popupWindowFeatures",
                get: function() {
                    return this._popupWindowFeatures
                }
            }, {
                key: "popupWindowTarget",
                get: function() {
                    return this._popupWindowTarget
                }
            }, {
                key: "silent_redirect_uri",
                get: function() {
                    return this._silent_redirect_uri
                }
            }, {
                key: "silentRequestTimeout",
                get: function() {
                    return this._silentRequestTimeout
                }
            }, {
                key: "automaticSilentRenew",
                get: function() {
                    return !(!this.silent_redirect_uri || !this._automaticSilentRenew)
                }
            }, {
                key: "includeIdTokenInSilentRenew",
                get: function() {
                    return this._includeIdTokenInSilentRenew
                }
            }, {
                key: "accessTokenExpiringNotificationTime",
                get: function() {
                    return this._accessTokenExpiringNotificationTime
                }
            }, {
                key: "monitorSession",
                get: function() {
                    return this._monitorSession
                }
            }, {
                key: "checkSessionInterval",
                get: function() {
                    return this._checkSessionInterval
                }
            }, {
                key: "revokeAccessTokenOnSignout",
                get: function() {
                    return this._revokeAccessTokenOnSignout
                }
            }, {
                key: "redirectNavigator",
                get: function() {
                    return this._redirectNavigator
                }
            }, {
                key: "popupNavigator",
                get: function() {
                    return this._popupNavigator
                }
            }, {
                key: "iframeNavigator",
                get: function() {
                    return this._iframeNavigator
                }
            }, {
                key: "userStore",
                get: function() {
                    return this._userStore
                }
            }]), e
        }(f.default);
    e.default = x, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = function() {
            function t() {
                i(this, t)
            }
            return t.prototype.prepare = function() {
                return Promise.resolve(this)
            }, t.prototype.navigate = function(t) {
                return a.default.debug("RedirectNavigator.navigate"), t && t.url ? (window.location = t.url, Promise.resolve()) : (a.default.error("No url provided"), Promise.reject(new Error("No url provided")))
            }, s(t, [{
                key: "url",
                get: function() {
                    return a.default.debug("RedirectNavigator.url"), window.location.href
                }
            }]), t
        }();
    e.default = u, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(357),
        u = r(a),
        c = function() {
            function t() {
                i(this, t)
            }
            return t.prototype.prepare = function(t) {
                var e = new u.default(t);
                return Promise.resolve(e)
            }, t.prototype.callback = function(t, e, n) {
                o.default.debug("PopupNavigator.callback");
                try {
                    return u.default.notifyOpener(t, e, n), Promise.resolve()
                } catch (t) {
                    return Promise.reject(t)
                }
            }, t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = n(345),
        c = r(u),
        f = 500,
        h = "location=no,toolbar=no,width=500,height=500,left=100,top=100;",
        l = "_blank",
        d = function() {
            function t(e) {
                var n = this;
                i(this, t), a.default.debug("PopupWindow.ctor"), this._promise = new Promise(function(t, e) {
                    n._resolve = t, n._reject = e
                });
                var r = e.popupWindowTarget || l,
                    s = e.popupWindowFeatures || h;
                this._popup = window.open("", r, s), this._popup && (a.default.debug("popup successfully created"), this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), f))
            }
            return t.prototype.navigate = function(t) {
                return a.default.debug("PopupWindow.navigate"), this._popup ? t && t.url ? (a.default.debug("Setting URL in popup"), this._id = t.id, this._id && (window["popupCallback_" + t.id] = this._callback.bind(this)), this._popup.focus(), this._popup.window.location = t.url) : this._error("No url provided") : this._error("Error opening popup window"), this.promise
            }, t.prototype._success = function(t) {
                this._cleanup(), a.default.debug("Successful response from popup window"), this._resolve(t)
            }, t.prototype._error = function(t) {
                this._cleanup(), a.default.error(t), this._reject(new Error(t))
            }, t.prototype.close = function() {
                this._cleanup(!1)
            }, t.prototype._cleanup = function(t) {
                a.default.debug("PopupWindow._cleanup"), window.clearInterval(this._checkForPopupClosedTimer), this._checkForPopupClosedTimer = null, delete window["popupCallback_" + this._id], this._popup && !t && this._popup.close(), this._popup = null
            }, t.prototype._checkForPopupClosed = function() {
                a.default.debug("PopupWindow._checkForPopupClosed"), this._popup && !this._popup.closed || this._error("Popup window closed")
            }, t.prototype._callback = function(t, e) {
                a.default.debug("PopupWindow._callback"), this._cleanup(e), t ? this._success({
                    url: t
                }) : this._error("Invalid response from popup")
            }, t.notifyOpener = function(t, e, n) {
                if (a.default.debug("PopupWindow.notifyOpener"), window.opener && (t = t || window.location.href)) {
                    var r = c.default.parseUrlFragment(t, n);
                    if (r.state) {
                        var i = "popupCallback_" + r.state,
                            s = window.opener[i];
                        s ? (a.default.debug("passing url message to opener"), s(t, e)) : a.default.warn("no matching callback found on opener")
                    } else a.default.warn("no state found in response url")
                }
            }, s(t, [{
                key: "promise",
                get: function() {
                    return this._promise
                }
            }]), t
        }();
    e.default = d, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(359),
        u = r(a),
        c = function() {
            function t() {
                i(this, t)
            }
            return t.prototype.prepare = function(t) {
                var e = new u.default(t);
                return Promise.resolve(e)
            }, t.prototype.callback = function(t) {
                o.default.debug("IFrameNavigator.callback");
                try {
                    return u.default.notifyParent(t), Promise.resolve()
                } catch (t) {
                    return Promise.reject(t)
                }
            }, t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = 1e4,
        c = function() {
            function t(e) {
                var n = this;
                i(this, t), a.default.debug("IFrameWindow.ctor"), this._promise = new Promise(function(t, e) {
                    n._resolve = t, n._reject = e
                }), this._boundMessageEvent = this._message.bind(this), window.addEventListener("message", this._boundMessageEvent, !1), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.style.display = "none", this._frame.style.width = 0, this._frame.style.height = 0, window.document.body.appendChild(this._frame)
            }
            return t.prototype.navigate = function(t) {
                if (a.default.debug("IFrameWindow.navigate"), t && t.url) {
                    var e = t.silentRequestTimeout || u;
                    a.default.debug("Using timeout of:", e), this._timer = window.setTimeout(this._timeout.bind(this), e), this._frame.src = t.url
                } else this._error("No url provided");
                return this.promise
            }, t.prototype._success = function(t) {
                this._cleanup(), a.default.debug("Successful response from frame window"), this._resolve(t)
            }, t.prototype._error = function(t) {
                this._cleanup(), a.default.error(t), this._reject(new Error(t))
            }, t.prototype.close = function() {
                this._cleanup()
            }, t.prototype._cleanup = function() {
                this._frame && (a.default.debug("IFrameWindow._cleanup"), window.removeEventListener("message", this._boundMessageEvent, !1), window.clearTimeout(this._timer), window.document.body.removeChild(this._frame), this._timer = null, this._frame = null, this._boundMessageEvent = null)
            }, t.prototype._timeout = function() {
                a.default.debug("IFrameWindow._timeout"), this._error("Frame window timed out")
            }, t.prototype._message = function(t) {
                if (a.default.debug("IFrameWindow._message"), this._timer && t.origin === this._origin && t.source === this._frame.contentWindow) {
                    var e = t.data;
                    e ? this._success({
                        url: e
                    }) : this._error("Invalid response from frame")
                }
            }, t.notifyParent = function(t) {
                a.default.debug("IFrameWindow.notifyParent"), window.parent && window !== window.parent && (t = t || window.location.href, t && (a.default.debug("posting url message to parent"), window.parent.postMessage(t, location.protocol + "//" + location.host)))
            }, s(t, [{
                key: "promise",
                get: function() {
                    return this._promise
                }
            }, {
                key: "_origin",
                get: function() {
                    return location.protocol + "//" + location.host
                }
            }]), t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = function() {
            function t(e) {
                var n = e.id_token,
                    r = e.session_state,
                    s = e.access_token,
                    o = e.token_type,
                    a = e.scope,
                    u = e.profile,
                    c = e.expires_at,
                    f = e.state;
                i(this, t), this.id_token = n, this.session_state = r, this.access_token = s, this.token_type = o, this.scope = a, this.profile = u, this.expires_at = c, this.state = f
            }
            return t.prototype.toStorageString = function() {
                return a.default.debug("User.toStorageString"), JSON.stringify({
                    id_token: this.id_token,
                    session_state: this.session_state,
                    access_token: this.access_token,
                    token_type: this.token_type,
                    scope: this.scope,
                    profile: this.profile,
                    expires_at: this.expires_at
                })
            }, t.fromStorageString = function(e) {
                return a.default.debug("User.fromStorageString"), new t(JSON.parse(e))
            }, s(t, [{
                key: "expires_in",
                get: function() {
                    if (this.expires_at) {
                        var t = parseInt(Date.now() / 1e3);
                        return this.expires_at - t
                    }
                }
            }, {
                key: "expired",
                get: function() {
                    var t = this.expires_in;
                    if (void 0 !== t) return t <= 0
                }
            }, {
                key: "scopes",
                get: function() {
                    return (this.scope || "").split(" ")
                }
            }]), t
        }();
    e.default = u, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(327),
        u = r(a),
        c = n(362),
        f = r(c),
        h = n(364),
        l = r(h),
        d = function(t) {
            function e(n) {
                i(this, e);
                var r = s(this, t.call(this, n));
                return r._userLoaded = new l.default("User loaded"), r._userUnloaded = new l.default("User unloaded"), r._silentRenewError = new l.default("Silent renew error"), r._userSignedOut = new l.default("User signed out"), r._userSessionChanged = new l.default("User session changed"), r
            }
            return o(e, t), e.prototype.load = function(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                u.default.debug("UserManagerEvents.load"), t.prototype.load.call(this, e), n && this._userLoaded.raise(e)
            }, e.prototype.unload = function() {
                u.default.debug("UserManagerEvents.unload"), t.prototype.unload.call(this), this._userUnloaded.raise()
            }, e.prototype.addUserLoaded = function(t) {
                this._userLoaded.addHandler(t)
            }, e.prototype.removeUserLoaded = function(t) {
                this._userLoaded.removeHandler(t)
            }, e.prototype.addUserUnloaded = function(t) {
                this._userUnloaded.addHandler(t)
            }, e.prototype.removeUserUnloaded = function(t) {
                this._userUnloaded.removeHandler(t)
            }, e.prototype.addSilentRenewError = function(t) {
                this._silentRenewError.addHandler(t)
            }, e.prototype.removeSilentRenewError = function(t) {
                this._silentRenewError.removeHandler(t)
            }, e.prototype._raiseSilentRenewError = function(t) {
                u.default.debug("UserManagerEvents._raiseSilentRenewError", t.message), this._silentRenewError.raise(t)
            }, e.prototype.addUserSignedOut = function(t) {
                this._userSignedOut.addHandler(t)
            }, e.prototype.removeUserSignedOut = function(t) {
                this._userSignedOut.removeHandler(t)
            }, e.prototype._raiseUserSignedOut = function(t) {
                u.default.debug("UserManagerEvents._raiseUserSignedOut"), this._userSignedOut.raise(t)
            }, e.prototype.addUserSessionChanged = function(t) {
                this._userSessionChanged.addHandler(t)
            }, e.prototype.removeUserSessionChanged = function(t) {
                this._userSessionChanged.removeHandler(t)
            }, e.prototype._raiseUserSessionChanged = function(t) {
                u.default.debug("UserManagerEvents._raiseUserSessionChanged"), this._userSessionChanged.raise(t)
            }, e
        }(f.default);
    e.default = d, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(363),
        u = r(a),
        c = 60,
        f = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.accessTokenExpiringNotificationTime,
                    r = void 0 === n ? c : n,
                    s = e.accessTokenExpiringTimer,
                    o = void 0 === s ? new u.default("Access token expiring") : s,
                    a = e.accessTokenExpiredTimer,
                    f = void 0 === a ? new u.default("Access token expired") : a;
                i(this, t), this._accessTokenExpiringNotificationTime = r, this._accessTokenExpiring = o, this._accessTokenExpired = f
            }
            return t.prototype.load = function(t) {
                if (o.default.debug("AccessTokenEvents.load"),
                    this._cancelTimers(), t.access_token) {
                    var e = t.expires_in;
                    if (o.default.debug("access token present, remaining duration:", e), e > 0) {
                        var n = e - this._accessTokenExpiringNotificationTime;
                        n <= 0 && (n = 1), o.default.debug("registering expiring timer in:", n), this._accessTokenExpiring.init(n)
                    }
                    var r = e + 1;
                    o.default.debug("registering expired timer in:", r), this._accessTokenExpired.init(r)
                }
            }, t.prototype.unload = function() {
                o.default.debug("AccessTokenEvents.unload"), this._cancelTimers()
            }, t.prototype._cancelTimers = function() {
                o.default.debug("canceling existing access token timers"), this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel()
            }, t.prototype.addAccessTokenExpiring = function(t) {
                this._accessTokenExpiring.addHandler(t)
            }, t.prototype.removeAccessTokenExpiring = function(t) {
                this._accessTokenExpiring.removeHandler(t)
            }, t.prototype.addAccessTokenExpired = function(t) {
                this._accessTokenExpired.addHandler(t)
            }, t.prototype.removeAccessTokenExpired = function(t) {
                this._accessTokenExpired.removeHandler(t)
            }, t
        }();
    e.default = f, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        u = n(327),
        c = r(u),
        f = n(331),
        h = r(f),
        l = n(364),
        d = r(l),
        p = 5,
        g = function(t) {
            function e(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.default.timer;
                i(this, e);
                var o = s(this, t.call(this, n));
                return o._timer = r, o._nowFunc = function() {
                    return Date.now() / 1e3
                }, o
            }
            return o(e, t), e.prototype.init = function(t) {
                this.cancel(), t <= 0 && (t = 1), t = parseInt(t), c.default.debug("Timer.init timer " + this._name + " for duration:", t), this._expiration = this.now + t;
                var e = p;
                t < e && (e = t), this._timerHandle = this._timer.setInterval(this._callback.bind(this), 1e3 * e)
            }, e.prototype.cancel = function() {
                this._timerHandle && (c.default.debug("Timer.cancel: ", this._name), this._timer.clearInterval(this._timerHandle), this._timerHandle = null)
            }, e.prototype._callback = function() {
                var e = this._expiration - this.now;
                c.default.debug("Timer._callback; " + this._name + " timer expires in:", e), this._expiration <= this.now && (this.cancel(), t.prototype.raise.call(this))
            }, a(e, [{
                key: "now",
                get: function() {
                    return parseInt(this._nowFunc())
                }
            }]), e
        }(d.default);
    e.default = g, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = function() {
            function t(e) {
                i(this, t), this._name = e, this._callbacks = []
            }
            return t.prototype.addHandler = function(t) {
                this._callbacks.push(t)
            }, t.prototype.removeHandler = function(t) {
                var e = this._callbacks.findIndex(function(e) {
                    return e === t
                });
                e >= 0 && this._callbacks.splice(e, 1)
            }, t.prototype.raise = function() {
                o.default.debug("Raising event: " + this._name);
                var t = !0,
                    e = !1,
                    n = void 0;
                try {
                    for (var r, i = this._callbacks[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                        var s = r.value;
                        s.apply(void 0, arguments)
                    }
                } catch (t) {
                    e = !0, n = t
                } finally {
                    try {
                        !t && i.return && i.return()
                    } finally {
                        if (e) throw n
                    }
                }
            }, t
        }();
    e.default = a, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = function() {
            function t(e) {
                i(this, t), this._userManager = e
            }
            return t.prototype.start = function() {
                this._callback || (this._callback = this._tokenExpiring.bind(this), this._userManager.events.addAccessTokenExpiring(this._callback), this._userManager.getUser().then(function(t) {}).catch(function(t) {
                    o.default.error("Error from getUser:", t.message)
                }))
            }, t.prototype.stop = function() {
                this._callback && (this._userManager.events.removeAccessTokenExpiring(this._callback), delete this._callback)
            }, t.prototype._tokenExpiring = function() {
                var t = this;
                o.default.debug("SilentRenewService automatically renewing access token"), this._userManager.signinSilent().then(function(t) {
                    o.default.debug("Silent token renewal successful")
                }, function(e) {
                    o.default.error("Error from signinSilent:", e.message), t._userManager.events._raiseSilentRenewError(e)
                })
            }, t
        }();
    e.default = a, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = n(367),
        c = r(u),
        f = function() {
            function t(e) {
                var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default;
                if (i(this, t), !e) throw a.default.error("No user manager passed to SessionMonitor"), new Error("userManager");
                this._userManager = e, this._CheckSessionIFrameCtor = r, this._userManager.events.addUserLoaded(this._start.bind(this)), this._userManager.events.addUserUnloaded(this._stop.bind(this)), this._userManager.getUser().then(function(t) {
                    t && n._start(t)
                }).catch(function(t) {
                    a.default.error("SessionMonitor ctor; error from getUser:", t.message)
                })
            }
            return t.prototype._start = function(t) {
                var e = this,
                    n = t.session_state;
                n && (this._sub = t.profile.sub, this._sid = t.profile.sid, a.default.debug("SessionMonitor._start; session_state:", n, ", sub:", this._sub), this._checkSessionIFrame ? this._checkSessionIFrame.start(n) : this._metadataService.getCheckSessionIframe().then(function(t) {
                    if (t) {
                        a.default.debug("Initializing check session iframe");
                        var r = e._client_id,
                            i = e._checkSessionInterval;
                        e._checkSessionIFrame = new e._CheckSessionIFrameCtor(e._callback.bind(e), r, t, i), e._checkSessionIFrame.load().then(function() {
                            e._checkSessionIFrame.start(n)
                        })
                    } else a.default.warn("No check session iframe found in the metadata")
                }).catch(function(t) {
                    a.default.error("Error from getCheckSessionIframe:", t.message)
                }))
            }, t.prototype._stop = function() {
                a.default.debug("SessionMonitor._stop"), this._sub = null, this._sid = null, this._checkSessionIFrame && this._checkSessionIFrame.stop()
            }, t.prototype._callback = function() {
                var t = this;
                a.default.debug("SessionMonitor._callback"), this._userManager.querySessionStatus().then(function(e) {
                    var n = !0;
                    e ? e.sub === t._sub ? (n = !1, t._checkSessionIFrame.start(e.session_state), e.sid === t._sid ? a.default.debug("Same sub still logged in at OP, restarting check session iframe; session_state:", e.session_state) : (a.default.debug("Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", e.session_state), t._userManager.events._raiseUserSessionChanged())) : a.default.debug("Different subject signed into OP:", e.sub) : a.default.debug("Subject no longer signed into OP"), n && (a.default.debug("SessionMonitor._callback; raising signed out event"), t._userManager.events._raiseUserSignedOut())
                }).catch(function(e) {
                    a.default.debug("Error calling queryCurrentSigninSession; raising signed out event", e.message), t._userManager.events._raiseUserSignedOut()
                })
            }, s(t, [{
                key: "_settings",
                get: function() {
                    return this._userManager.settings
                }
            }, {
                key: "_metadataService",
                get: function() {
                    return this._userManager.metadataService
                }
            }, {
                key: "_client_id",
                get: function() {
                    return this._settings.client_id
                }
            }, {
                key: "_checkSessionInterval",
                get: function() {
                    return this._settings.checkSessionInterval
                }
            }]), t
        }();
    e.default = f, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = 2e3,
        u = function() {
            function t(e, n, r, s) {
                i(this, t), this._callback = e, this._client_id = n, this._url = r, this._interval = s || a;
                var o = r.indexOf("/", r.indexOf("//") + 2);
                this._frame_origin = r.substr(0, o), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.style.display = "none", this._frame.style.width = 0, this._frame.style.height = 0, this._frame.src = r
            }
            return t.prototype.load = function() {
                var t = this;
                return new Promise(function(e) {
                    t._frame.onload = function() {
                        e()
                    }, window.document.body.appendChild(t._frame), t._boundMessageEvent = t._message.bind(t), window.addEventListener("message", t._boundMessageEvent, !1)
                })
            }, t.prototype._message = function(t) {
                t.origin === this._frame_origin && t.source === this._frame.contentWindow && ("error" === t.data ? (o.default.error("error message from check session op iframe"), this.stop()) : "changed" === t.data ? (o.default.debug("changed message from check session op iframe"), this.stop(), this._callback()) : o.default.debug(t.data + " message from check session op iframe"))
            }, t.prototype.start = function(t) {
                var e = this;
                this._session_state !== t && (o.default.debug("CheckSessionIFrame.start"), this.stop(), this._session_state = t, this._timer = window.setInterval(function() {
                    e._frame.contentWindow.postMessage(e._client_id + " " + e._session_state, e._frame_origin)
                }, this._interval))
            }, t.prototype.stop = function() {
                o.default.debug("CheckSessionIFrame.stop"), this._session_state = null, this._timer && (window.clearInterval(this._timer), this._timer = null)
            }, t
        }();
    e.default = u, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = r(s),
        a = n(333),
        u = r(a),
        c = n(331),
        f = r(c),
        h = "access_token",
        l = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.default.XMLHttpRequest,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default;
                if (i(this, t), !e) throw o.default.error("No settings provided"), new Error("No settings provided.");
                this._settings = e, this._XMLHttpRequestCtor = n, this._metadataService = new r(this._settings)
            }
            return t.prototype.revoke = function(t, e) {
                var n = this;
                if (o.default.debug("TokenRevocationClient.revoke"), !t) throw o.default.error("No accessToken provided"), new Error("No accessToken provided.");
                return this._metadataService.getRevocationEndpoint().then(function(r) {
                    if (r) {
                        var i = n._settings.client_id,
                            s = n._settings.client_secret;
                        return n._revoke(r, i, s, t)
                    }
                    if (e) throw o.default.error("Revocation not supported"), new Error("Revocation not supported")
                })
            }, t.prototype._revoke = function(t, e, n, r) {
                var i = this;
                return o.default.debug("Calling revocation endpoint"), new Promise(function(s, a) {
                    var u = new i._XMLHttpRequestCtor;
                    u.open("POST", t), u.onload = function() {
                        o.default.debug("HTTP response received, status", u.status), 200 === u.status ? s() : a(Error(u.statusText + " (" + u.status + ")"))
                    };
                    var c = "client_id=" + encodeURIComponent(e);
                    n && (c += "&client_secret=" + encodeURIComponent(n)), c += "&token_type_hint=" + encodeURIComponent(h), c += "&token=" + encodeURIComponent(r), u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), u.send(c)
                })
            }, t
        }();
    e.default = l, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = (r(s), n(370)),
        a = r(o),
        u = function() {
            function t() {
                i(this, t)
            }
            return t.prototype.prepare = function(t) {
                var e = new a.default(t);
                return Promise.resolve(e)
            }, t
        }();
    e.default = u, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        o = n(327),
        a = r(o),
        u = "location=no,toolbar=no,zoom=no",
        c = "_blank",
        f = function() {
            function t(e) {
                var n = this;
                i(this, t), a.default.debug("CordovaPopupWindow.ctor"), this._promise = new Promise(function(t, e) {
                    n._resolve = t, n._reject = e
                }), this.features = e.popupWindowFeatures || u, this.target = e.popupWindowTarget || c, this.redirect_uri = e.startUrl, a.default.debug("redirect_uri: " + this.redirect_uri)
            }
            return t.prototype._isInAppBrowserInstalled = function(t) {
                return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function(e) {
                    return t.hasOwnProperty(e)
                })
            }, t.prototype.navigate = function(t) {
                if (a.default.debug("CordovaPopupWindow.navigate"), t && t.url) {
                    if (!window.cordova) return this._error("cordova is undefined");
                    var e = window.cordova.require("cordova/plugin_list").metadata;
                    if (this._isInAppBrowserInstalled(e) === !1) return this._error("InAppBrowser plugin not found");
                    this._popup = cordova.InAppBrowser.open(t.url, this.target, this.features), this._popup ? (a.default.debug("popup successfully created"), this._exitCallbackEvent = this._exitCallback.bind(this), this._loadStartCallbackEvent = this._loadStartCallback.bind(this), this._popup.addEventListener("exit", this._exitCallbackEvent, !1), this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, !1)) : this._error("Error opening popup window")
                } else this._error("No url provided");
                return this.promise
            }, t.prototype._loadStartCallback = function(t) {
                0 === t.url.indexOf(this.redirect_uri) && this._success({
                    url: t.url
                })
            }, t.prototype._exitCallback = function(t) {
                this._error(t)
            }, t.prototype._success = function(t) {
                this._cleanup(), a.default.debug("Successful response from cordova popup window"), this._resolve(t)
            }, t.prototype._error = function(t) {
                this._cleanup(), a.default.error(t), this._reject(new Error(t))
            }, t.prototype.close = function() {
                this._cleanup()
            }, t.prototype._cleanup = function() {
                a.default.debug("CordovaPopupWindow._cleanup"), this._popup && (this._popup.removeEventListener("exit", this._exitCallbackEvent, !1), this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, !1), this._popup.close()), this._popup = null
            }, s(t, [{
                key: "promise",
                get: function() {
                    return this._promise
                }
            }]), t
        }();
    e.default = f, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(327),
        o = (r(s), n(370)),
        a = r(o),
        u = function() {
            function t() {
                i(this, t)
            }
            return t.prototype.prepare = function(t) {
                t.popupWindowFeatures = "hidden=yes";
                var e = new a.default(t);
                return Promise.resolve(e)
            }, t
        }();
    e.default = u, t.exports = e.default
}]
