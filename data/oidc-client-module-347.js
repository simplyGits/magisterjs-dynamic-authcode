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
}