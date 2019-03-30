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
}