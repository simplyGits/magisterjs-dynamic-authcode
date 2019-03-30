function(t, e, n) {
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
}