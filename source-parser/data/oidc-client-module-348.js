function(t, e) {
    "use strict";
    // @preserve Copyright (c) Microsoft Open Technologies, Inc.
    function n() {
		var t = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx",
			e = "0123456789abcdef",
			n = 0,
			r = "";
        for (var i = 0; i < t.length; i++) {
			if ("-" !== t[i] && "4" !== t[i]) n = 16 * Math.random() | 0;
			if ("x" === t[i]) r += e[n];
			else if ("y" === t[i]) {
				n &= 3;
				n |= 8;
				r += e[n];
			} else r += t[i];
		}
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n, t.exports = e.default
}
