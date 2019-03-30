! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}([function(e) {
    e.exports = {
        ACCOUNT_TITLE: "Aanmelden",
        UNKNOWN_ERROR: "Er is een onbekende fout opgetreden.",
        NETWORK_ERROR: "Er is een netwerkfout opgetreden.",
        WRONG_USERNAME: "Ongeldig account of verkeerde gebruikersnaam.",
        WRONG_PASSWORD: "Ongeldig account of verkeerde combinatie van gebruikersnaam en wachtwoord.",
        INCORRECT_CODE: "Ongeldige code.",
        INCORRECT_VALUE: "Ongeldige waarde.",
        INCORRECT_CHALLENGE: "Ongeldige stap in het inlogproces.",
        SELECT_SCHOOL: "Kies je school",
        NO_SCHOOL_SELECTED: "Er is geen school gekozen.",
        TOKEN_TITLE: "Token",
        NO_USERNAME: "Gebruikersnaam is niet ingevuld.",
        NO_PASSWORD: "Wachtwoord is niet ingevuld.",
        SAME_PASSWORD: "Wachtwoord moet ongelijk aan huidige wachtwoord zijn.",
        VERIFY_PASSWORD: "Het verificatie wachtwoord moet gelijk aan het nieuwe wachtwoord zijn.",
        PASSWORD_TOOSHORT: "Het wachtwoord moet minimaal 5 karakters bevatten.",
        PASSWORD_POLICY: "Het wachtwoord voldoet niet aan de voorwaarden.",
        NO_CODE: "De code is niet ingevuld.",
        UNKNOWN_SESSION: "Geen sessie gevonden.",
        BLOCKED_ACCOUNT: "Dit account is geblokkeerd.",
        INACTIVE_ACCOUNT: "Dit account is niet actief.",
        MISSING_CONTACTINFO: "E-mailadres onbekend.",
        UNKNOWN_PROFILE: "Gebruiker niet gevonden.",
        RESETCODE_ALREADY_REQUESTED: "Er is al een code verstuurd.",
        MAIL_NOT_SENT: "Er kan geen e-mail worden gestuurd.",
        DEVICE_LOCKED_OUT: "Het account op dit apparaat is 10 minuten geblokkeerd wegens overschrijding van het maximale aantal foutieve inlogpogingen.",
        USER_LOCKED_OUT: "Het account is 10 minuten geblokkeerd wegens overschrijding van het maximale aantal foutieve inlogpogingen.",
        OFFLINE: "U bent offline. Controleer uw internetverbinding.",
        INVALID_TENANT: "Ongeldige school.",
        NO_ALLOWED_TENANTS: "Deze applicatie heeft nog geen toegang tot een school.",
        TENTANT_NOT_ALLOWED: "Deze applicatie heeft geen toegang tot de gekozen school."
    }
}, function(e, t, n) {
    n(24), e.exports = angular
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, i = n(1),
        o = (n(23), n(21), function() {
            function e() {
                this.supportsLocalStorage = !1, this.probeLocalStorage()
            }
            return e.prototype.probeLocalStorage = function() {
                try {
                    this.set("test", "test"), this.remove("test"), this.supportsLocalStorage = !0
                } catch (e) {
                    this.supportsLocalStorage = !1
                }
            }, e.prototype.set = function(e, t) {
                this.supportsLocalStorage && window.localStorage.setItem(e, t)
            }, e.prototype.get = function(e) {
                return this.supportsLocalStorage ? window.localStorage.getItem(e) : null
            }, e.prototype.remove = function(e) {
                this.supportsLocalStorage && window.localStorage.removeItem(e)
            }, e
        }()),
        a = function() {
            function e(e) {
                this.settingsStore = e
            }
            return e.$inject = ["settingsStore"], e.prototype.set = function(e, t) {
                this.settingsStore.set(e, t)
            }, e.prototype.get = function(e) {
                return this.settingsStore.get(e)
            }, e.prototype.remove = function(e) {
                this.settingsStore.remove(e)
            }, e
        }();
    ! function(e) {
        e.SHOW_ERROR = "show_error", e.HIDE_ERROR = "hide_error"
    }(r || (r = {}));
    var s = function() {
            function e() {
                this.actionHandlers = {}
            }
            return e.prototype.registerActionHandler = function(e, t) {
                this.actionHandlers[e] = t
            }, e.prototype.unregisterActionHandler = function(e) {
                delete this.actionHandlers[e]
            }, e.prototype.invoke = function(e, t) {
                this.actionHandlers && e in this.actionHandlers && this.actionHandlers[e](t)
            }, e.prototype.showError = function(e, t) {
                void 0 === t && (t = "error"), this.invoke(r.SHOW_ERROR, {
                    message: e,
                    type: t
                })
            }, e.prototype.hideError = function() {
                this.invoke(r.HIDE_ERROR)
            }, e
        }(),
        c = n(38),
        u = n.n(c),
        l = (n(20), {
            template: u.a,
            controller: function() {},
            bindings: {
                isLoading: "<",
                caption: "@"
            }
        }),
        h = n(37),
        f = n.n(h),
        d = (n(18), function() {
            function e(e) {
                this.$attrs = e, this.hidePassword = !0
            }
            return e.$inject = ["$attrs"], e.prototype.$onInit = function() {
                "mId" in this.$attrs && (this.id = this.$attrs.mId), "mAutofocus" in this.$attrs && (this.autofocus = this.$attrs.mAutofocus)
            }, e.prototype.onTogglePassword = function(e) {
                e.preventDefault(), this.hidePassword = !this.hidePassword
            }, e
        }()),
        p = {
            template: f.a,
            controller: d,
            bindings: {
                mModel: "=",
                mChange: "=",
                mPlaceholder: "@"
            }
        },
        $ = (n(16), n(36)),
        v = n.n($),
        g = function() {
            function e(e) {
                this.$element = e
            }
            return e.$inject = ["$element"], e.prototype.$onInit = function() {
                this.$element.removeAttr("id")
            }, e
        }(),
        m = {
            template: v.a,
            controller: g,
            bindings: {
                type: "@",
                name: "@",
                id: "@",
                maxlength: "@",
                placeholder: "@",
                model: "="
            }
        },
        y = (n(14), {
            template: '<div class="alert alert-danger" role="alert">\n                    <span ng-bind="$ctrl.message"></span>\n                </div>',
            controller: function() {
                function e() {}
                return e.prototype.$onInit = function() {}, e
            }(),
            bindings: {
                message: "<"
            }
        }),
        w = function() {
            function e(e, t) {
                this.$interval = e, this.settingsService = t, this.fadeDirection = "none"
            }
            return e.$inject = ["$interval", "settingsService"], e.prototype.$onInit = function() {
                var e = Number(this.settingsService.get("SPLASH_IMAGE_INDEX") || "0");
                this.crossFade(e, !0)
            }, e.prototype.crossFade = function(e, t) {
                var n = this,
                    r = (e + 1) % 3,
                    i = "image" + r.toString();
                e % 2 == 0 ? (this.bottomImageClassName = i, this.fadeDirection = "out") : (this.topImageClassName = i, t || (this.fadeDirection = "in")), this.settingsService.set("SPLASH_IMAGE_INDEX", r.toString()), this.$interval(function() {
                    return n.crossFade(e + 1, !1)
                }, 65e3, 1)
            }, e
        }(),
        b = (n(12), {
            template: '\n        <div class="image-carrousel">\n            <div class="top-image" ng-class="[$ctrl.topImageClassName, {\'fadeIn\': $ctrl.fadeDirection === \'in\', \'fadeOut\': $ctrl.fadeDirection === \'out\'}]"></div>\n            <div class="bottom-image" ng-class="[$ctrl.bottomImageClassName]" ></div>\n        </div>\n    ',
            controller: w
        }),
        S = n(35),
        x = n.n(S),
        C = (n(10), {
            template: x.a,
            controller: function() {},
            bindings: {
                large: "<"
            }
        });

    function E(e) {
        return {
            restrict: "AC",
            link: function(t, n, r) {
                var i = n[0];
                r.mgAutofocus && (n.attr("autofocus"), t.$on("focus", function(e, t) {
                    r.id && t.id && r.id === t.id && n[0].focus()
                }), e(function() {
                    i.focus()
                }, 10), i.focus())
            }
        }
    }
    E.$inject = ["$timeout"];
    var O, k = i.module("Magister.Core", []);
    k.service("settingsStore", o).service("settingsService", a).service("messageService", s), k.component("mgButton", l).component("mgPassword", p).component("mgInput", m).component("mgError", y).component("mgImageCarrousel", b).component("mgSpinner", C), k.directive("mgAutofocus", E).directive("mgCharFilter", function() {
            return {
                restrict: "AC",
                link: function(e, t) {
                    t.on("keypress", function(e) {
                        var t = e.which ? e.which : e.keyCode;
                        t && t > 31 && (t < 48 || t > 57) && (e.preventDefault(), e.stopPropagation())
                    })
                }
            }
        }).directive("mgCapslock", function() {
            return {
                restrict: "AC",
                link: function(e, t, n) {
                    var r = !1;
                    t.on("keypress", function(e) {
                        var i = String.fromCharCode(e.which);
                        if (i.toUpperCase() !== i || i.toLowerCase() === i || e.shiftKey) {
                            if (r) {
                                var o = document.getElementById("capslock_warning");
                                o && o.parentNode && o.parentNode.removeChild(o), r = !1
                            }
                        } else r || (t.parent().append('<span id="capslock_warning" class="message">' + n.mgCapslock + "</span>"), r = !0)
                    })
                }
            }
        }).directive("mgPlaceholder", function() {
            return {
                restrict: "A",
                link: function(e, t, n) {
                    if ("id" in n && "mgPlaceholder" in n) {
                        var r = n.id,
                            i = n.mgPlaceholder;
                        if (!t.parent().attr("has-label")) {
                            var o = '<label class="placeholder" for="' + r + '">' + i + "</label>";
                            t.parent().attr("has-label", "true"), t.parent().append(o)
                        }
                        document.activeElement && document.activeElement.id === r && t.parent().addClass("is-focused"), t.on("focus", function() {
                            t.parent().addClass("is-focused")
                        }), t.on("blur", function() {
                            t.parent().removeClass("is-focused")
                        }), e.$watch(n.ngModel, function(e) {
                            "string" == typeof e && e.length > 0 ? t.parent().addClass("is-dirty") : t.parent().removeClass("is-dirty")
                        })
                    }
                }
            }
        }),
        function(e) {
            e.tenantselector = "tenantselector", e.username = "username", e.password = "password", e.resetpassword = "resetpassword", e.resetpasswordcode = "resetpasswordcode", e.rswp = "rswp", e.changepassword = "changepassword", e.softtoken = "softtoken", e.pairsofttoken = "pairsofttoken", e.hardtoken = "hardtoken", e.forgotpassword = "forgotpassword"
        }(O || (O = {}));
    var A, _ = {
        scholenkiezer: {
            route: "/kies-je-school",
            challenges: [O.tenantselector]
        },
        user: {
            route: "/gebruikersnaam",
            challenges: [O.username]
        },
        password: {
            route: "/wachtwoord",
            challenges: [O.password]
        },
        rswp: {
            route: "/rswp",
            challenges: [O.rswp]
        },
        changepassword: {
            route: "/wachtwoord-wijzigen",
            challenges: [O.changepassword]
        },
        resetpassword: {
            route: "/wachtwoord-herstellen",
            challenges: [O.resetpassword]
        },
        resetpasswordcode: {
            route: "/code-verificatie",
            challenges: [O.resetpasswordcode]
        },
        token: {
            route: "/token",
            challenges: [O.hardtoken, O.softtoken]
        },
        pair: {
            route: "/token-koppelen",
            challenges: [O.pairsofttoken]
        }
    };
    ! function(e) {
        e.TOGGLE_QR_CODE = "toggle_qr_code", e.SHOW_FORGOT_PASSWORD = "show_forgot_password"
    }(A || (A = {}));
    var I = "6234be",
        T = function() {
            function e(e, t, n, r, i, o, a, s, c, u, l, h, f) {
                var d = this;
                this.$q = e, this.$location = t, this.$rootScope = n, this.$interval = r, this.$window = i, this.usernameValidator = o, this.passwordValidator = a, this.changePasswordValidator = s, this.resetPasswordValidator = c, this.resetPasswordCodeValidator = u, this.tokenValidator = l, this.challengeService = h, this.messageService = f, this.selectFuncs = [], this.foundUserFuncs = [], this.preRedirectChallengeFuncs = [], this.qrImageUrl = "", this.initializingChallenge = !1, this.registerSelectSchool(function(e) {
                    return d.onSelectSchool(e)
                }), this.registerRouteListener()
            }
            return e.$inject = ["$q", "$location", "$rootScope", "$interval", "$window", "usernameValidator", "passwordValidator", "changePasswordValidator", "resetPasswordValidator", "resetPasswordCodeValidator", "tokenValidator", "challengeService", "messageService"], Object.defineProperty(e.prototype, "allowAccountOptions", {
                get: function() {
                    return !(!this.currentChallenge || this.currentChallenge.action !== O.password && this.currentChallenge.action !== O.softtoken && this.currentChallenge.action !== O.hardtoken && this.currentChallenge.action !== O.rswp)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "allowChangeUser", {
                get: function() {
                    return !(!this.currentChallenge || this.currentChallenge.reAuthenticate || this.currentChallenge.action !== O.password && this.currentChallenge.action !== O.softtoken && this.currentChallenge.action !== O.hardtoken && this.currentChallenge.action !== O.rswp)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.startChallenges = function() {
                var e = this;
                return this.initializingChallenge ? this.$q.resolve(void 0) : (this.initializingChallenge = !0, this.challengeService.getChallenge().then(function(t) {
                    return e.nextChallenge(t), e.initializingChallenge = !1, t
                }).catch(function(t) {
                    throw e.initializingChallenge = !1, t
                }))
            }, e.prototype.handlePreSessionTimeout = function() {
                var e = this;
                this.challengeService.getChallenge().then(function(t) {
                    e.nextChallenge(t)
                }).catch(function(t) {
                    if (-1 === t.status) e.sessionTimeoutTimer = e.$interval(function() {
                        return e.handlePreSessionTimeout()
                    }, 1e3, 1);
                    else {
                        if (!t.data || !t.data.action && !t.data.redirectURL) throw t;
                        e.nextChallenge(t.data)
                    }
                })
            }, e.prototype.setSessionTimeout = function(e) {
                var t = this;
                this.sessionTimeoutTimer && this.$interval.cancel(this.sessionTimeoutTimer), e && e > 10 && (this.sessionTimeoutTimer = this.$interval(function() {
                    return t.handlePreSessionTimeout()
                }, 1e3 * (e - 10), 1))
            }, e.prototype.redirect = function(e) {
                for (var t = 0, n = this.preRedirectChallengeFuncs; t < n.length; t++) {
                    (0, n[t])()
                }
                this.$window.location.replace(e)
            }, e.prototype.nextChallenge = function(e) {
                if (e.redirectURL) return this.redirect(e.redirectURL);
                this.setSessionTimeout(e.expiresIn), this.messageService.invoke(A.SHOW_FORGOT_PASSWORD, e.isForgotPasswordEnabled), this.currentChallenge = e, this.foundUser({
                    name: "string" == typeof e.username ? e.username : void 0,
                    email: "string" == typeof e.useremail ? e.useremail : void 0
                });
                var t = e.action.toLocaleLowerCase();
                switch (t) {
                    case O.tenantselector:
                        this.$location.path(_.scholenkiezer.route);
                        break;
                    case O.username:
                        this.$location.path(_.user.route);
                        break;
                    case O.password:
                        this.$location.path(_.password.route);
                        break;
                    case O.resetpassword:
                        this.$location.path(_.resetpassword.route);
                        break;
                    case O.rswp:
                        this.$location.path(_.rswp.route);
                        break;
                    case O.changepassword:
                        this.$location.path(_.changepassword.route);
                        break;
                    case O.resetpasswordcode:
                        this.$location.path(_.resetpasswordcode.route);
                        break;
                    case O.softtoken:
                    case O.hardtoken:
                        this.tokenChallengeAction = t, this.$location.path(_.token.route);
                        break;
                    case O.pairsofttoken:
                        this.tokenChallengeAction = t, this.qrImageUrl = e.qrImageUrl || "", this.$location.path(_.pair.route)
                }
            }, e.prototype.getUserEmail = function() {
                return this.user ? this.user.email : void 0
            }, e.prototype.getQrImageUrl = function() {
                return this.qrImageUrl
            }, e.prototype.submitUsername = function(e) {
                var t = [];
                if (e = e.trim(), !this.usernameValidator.validate(e, t)) return this.$q.reject(t.shift());
                var n = {
                    action: "username",
                    username: e
                };
                return this.submit(n)
            }, e.prototype.submitPassword = function(e) {
                var t = [];
                if (!this.passwordValidator.validate(e, t)) return this.$q.reject(t.shift());
                var n = {
                    action: "password",
                    password: e
                };
                return this.submit(n)
            }, e.prototype.submitChangePassword = function(e) {
                var t = [];
                if (!this.changePasswordValidator.validate(e, t)) return this.$q.reject(t.shift());
                var n = {
                    action: "changepassword",
                    password: e.password,
                    newpassword: e.newpassword
                };
                return this.submit(n)
            }, e.prototype.submitResetPassword = function(e) {
                var t = [];
                if (!this.resetPasswordValidator.validate(e, t)) return this.$q.reject(t.shift());
                var n = {
                    action: "resetpassword",
                    newpassword: e.newpassword
                };
                return this.submit(n)
            }, e.prototype.submitResetPasswordCode = function(e) {
                var t = [];
                if (!this.resetPasswordCodeValidator.validate(e, t)) return this.$q.reject(t.shift());
                var n = {
                    action: "resetpasswordcode",
                    code: e
                };
                return this.submit(n)
            }, e.prototype.submitToken = function(e) {
                var t = [];
                if (!this.tokenValidator.validate(e, t)) return this.$q.reject(t.shift());
                if (!this.tokenChallengeAction) return this.$q.reject();
                var n = {
                    action: this.tokenChallengeAction,
                    code: e
                };
                return this.submit(n)
            }, e.prototype.submitForgotPassword = function() {
                return this.submit({
                    action: "forgotpassword"
                })
            }, e.prototype.submit = function(e) {
                var t = this;
                return this.challengeService.submitChallenge(e).then(function(e) {
                    t.nextChallenge(e)
                }).catch(function(n) {
                    if (n && n.data) {
                        if ("InvalidChallengeValue" === n.data.error) switch (e.action) {
                            case O.softtoken:
                            case O.hardtoken:
                            case O.pairsofttoken:
                                n.data.error = "IncorrectToken";
                                break;
                            case O.resetpasswordcode:
                                n.data.error = "IncorrectCode"
                        }
                        throw n.data.error
                    }
                    throw t.$window.navigator.onLine ? "NetworkError" : "Offline"
                })
            }, e.prototype.startUsernameChallenge = function() {
                var e = this;
                this.challengeService.resetChallenges().then(function(t) {
                    e.nextChallenge(t)
                })
            }, e.prototype.startSelectSchool = function() {
                var e = this;
                this.challengeService.resetChallenges().then(function() {
                    e.nextChallenge({
                        action: O.tenantselector
                    })
                })
            }, e.prototype.selectSchool = function(e, t) {
                var n = this,
                    r = e && e.domain || "";
                return this.challengeService.submitTenant(r).then(function() {
                    n.notifySelectSchool(e, t)
                })
            }, e.prototype.notifySelectSchool = function(e, t) {
                this.selectFuncs.length && this.selectFuncs.forEach(function(n) {
                    n(e, t)
                })
            }, e.prototype.onSelectSchool = function(e) {
                e && e.domain && (this.school = e)
            }, e.prototype.foundUser = function(e) {
                this.user = e, this.foundUserFuncs.length && this.foundUserFuncs.forEach(function(t) {
                    return t(e)
                })
            }, e.prototype.getSelectedSchool = function() {
                if (!this.school) throw new Error("No school selected");
                return this.school
            }, e.prototype.registerPreRedirectChallenge = function(e) {
                this.preRedirectChallengeFuncs.push(e)
            }, e.prototype.registerSelectSchool = function(e) {
                this.selectFuncs.push(e)
            }, e.prototype.registerFoundUser = function(e) {
                this.foundUserFuncs.push(e)
            }, e.prototype.registerRouteListener = function() {
                var e = this;
                this.$rootScope.$on("$routeChangeStart", function(t, n) {
                    if (e.currentChallenge && n.$$route) {
                        var r = e.findRoute(n && n.$$route.originalPath);
                        if (r && r.challenges) r.challenges.indexOf(e.currentChallenge.action.toLowerCase()) < 0 && t.preventDefault()
                    }
                })
            }, e.prototype.findRoute = function(e) {
                for (var t in _)
                    if (_.hasOwnProperty(t) && _[t].route === e) return _[t]
            }, e
        }(),
        M = "fa9a",
        R = function() {
            function e(e) {
                this.$http = e
            }
            return e.$inject = ["$http"], e.prototype.searchSchool = function(e) {
                return this.$http.get("/api/tenant?key=" + e).then(function(e) {
                    return e.data
                })
            }, e
        }(),
        N = "b539",
        V = function() {
            function e(e) {
                this.$window = e
            }
            return e.$inject = ["$window"], e.prototype.getQueryVariable = function(e, t) {
                for (var n = 0, r = t.split("&"); n < r.length; n++) {
                    var i = r[n].split("=");
                    if (decodeURIComponent(i[0]) === e) return decodeURIComponent(i[1])
                }
            }, e.prototype.getSessionId = function() {
                return this.getQueryVariable("sessionId", this.$window.location.search.substring(1))
            }, e.prototype.getReturnUrl = function() {
                return this.getQueryVariable("returnUrl", this.$window.location.search.substring(1))
            }, e.prototype.getClientId = function() {
                var e = this.getReturnUrl();
                if (e && -1 !== e.indexOf("?")) {
                    var t = e.substr(e.indexOf("?") + 1);
                    return this.getQueryVariable("client_id", t)
                }
            }, e
        }(),
        P = ["authCode"],
        D = "5c0d2a28";
    var j, U = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        L = function() {
            function e(e, t, n) {
                this.$http = e, this.$window = t, this.sessionService = n
            }
            return e.$inject = ["$http", "$window", "sessionService"], e.prototype.addSessionData = function(e) {
                var t, n = U({}, e, {
                    sessionId: this.sessionService.getSessionId() || "",
                    returnUrl: this.sessionService.getReturnUrl() || ""
                });
                return n[P[0]] = (t = [D, I, M, N], ["0", "1"].map(function(e) {
                    return t[parseInt(e) || 0]
                }).join("")), n
            }, e.prototype.post = function(e, t) {
                var n = this,
                    r = this.addSessionData(t);
                return this.$http.post(e, r).then(function(e) {
                    return e.data
                }).catch(function(t) {
                    if (t.data && t.data.error) {
                        if ("AntiforgeryValidation" === t.data.error) return n.$http.post(e, r).then(function(e) {
                            return e.data
                        });
                        "AuthCodeValidation" === t.data.error && n.$window.location.reload()
                    }
                    throw t
                })
            }, e.prototype.submitTenant = function(e) {
                return this.post("/api/tenant", {
                    tenant: e
                })
            }, e.prototype.getChallenge = function() {
                return this.post("/challenge/current", {})
            }, e.prototype.resetChallenges = function() {
                return this.post("/challenge/reset", {})
            }, e.prototype.submitChallenge = function(e) {
                var t = e.action;
                return delete e.action, this.post("/challenge/" + t, e)
            }, e
        }(),
        q = function() {
            function e() {}
            return e.prototype.validate = function(e, t) {
                return "" !== e || (Object(i.isArray)(t) && t.push("NoUsername"), !1)
            }, e
        }(),
        F = function() {
            function e() {}
            return e.prototype.validate = function(e, t) {
                return "" !== e || (Object(i.isArray)(t) && t.push("NoPassword"), !1)
            }, e
        }(),
        H = function() {
            function e() {
                this.pwdValidator = new F
            }
            return e.prototype.validate = function(e, t) {
                return !!(this.pwdValidator.validate(e.password, t) && this.pwdValidator.validate(e.newpassword, t) && this.pwdValidator.validate(e.verifypassword, t)) && (e.newpassword === e.password ? (Object(i.isArray)(t) && t.push("NewPasswordEqualsOldPassword"), !1) : e.verifypassword === e.newpassword || (Object(i.isArray)(t) && t.push("VerifyPassword"), !1))
            }, e
        }(),
        z = function() {
            function e() {
                this.pwdValidator = new F
            }
            return e.prototype.validate = function(e, t) {
                return !(!this.pwdValidator.validate(e.newpassword, t) || !this.pwdValidator.validate(e.verifypassword, t)) && (e.verifypassword === e.newpassword || (Object(i.isArray)(t) && t.push("VerifyPassword"), !1))
            }, e
        }(),
        B = function() {
            function e() {}
            return e.prototype.validate = function(e, t) {
                return "" === e ? (Object(i.isArray)(t) && t.push("NoCode"), !1) : !(6 !== e.length || !/^\d+$/.test(e)) || (Object(i.isArray)(t) && t.push("IncorrectToken"), !1)
            }, e
        }(),
        W = function() {
            function e() {}
            return e.prototype.validate = function(e, t) {
                return "" === e ? (Object(i.isArray)(t) && t.push("NoCode"), !1) : 6 === e.length || (Object(i.isArray)(t) && t.push("IncorrectToken"), !1)
            }, e
        }(),
        G = n(0),
        K = {
            Unknown: G.UNKNOWN_ERROR,
            NetworkError: G.NETWORK_ERROR,
            UserHasNoAccess: G.WRONG_USERNAME,
            UserIsBlocked: G.BLOCKED_ACCOUNT,
            UserIsNotActive: G.INACTIVE_ACCOUNT,
            UnableToLoadSession: G.UNKNOWN_SESSION,
            InvalidUsername: G.WRONG_USERNAME,
            InvalidPassword: G.WRONG_PASSWORD,
            InvalidUsernameOrPassword: G.WRONG_PASSWORD,
            InvalidChallenge: G.INCORRECT_CHALLENGE,
            InvalidChallengeValue: G.INCORRECT_VALUE,
            InvalidCode: G.INCORRECT_CODE,
            IncorrectToken: G.INCORRECT_CODE,
            NoUsername: G.NO_USERNAME,
            NoPassword: G.NO_PASSWORD,
            SamePassword: G.SAME_PASSWORD,
            VerifyPassword: G.VERIFY_PASSWORD,
            ContactInfoNotFound: G.MISSING_CONTACTINFO,
            ProfileNotFound: G.UNKNOWN_PROFILE,
            NoSchoolSelected: G.NO_SCHOOL_SELECTED,
            ResetPasswordCodeAlreadyRequested: G.RESETCODE_ALREADY_REQUESTED,
            MailNotSent: G.MAIL_NOT_SENT,
            NoCode: G.NO_CODE,
            ContactInfoVerificationNotFound: G.MISSING_CONTACTINFO,
            ContactInfoVerificationExpired: G.MISSING_CONTACTINFO,
            ContactInfoVerificationContactInfoNotFound: G.MISSING_CONTACTINFO,
            ContactInfoNotVerfied: G.MISSING_CONTACTINFO,
            NoPasswordChallenge: G.Unknown,
            PasswordDoesNotMeetPolicy: G.PASSWORD_POLICY,
            NewPasswordEqualsOldPassword: G.SAME_PASSWORD,
            DeviceLockedOut: G.DEVICE_LOCKED_OUT,
            UserLockedOut: G.USER_LOCKED_OUT,
            Offline: G.OFFLINE,
            InvalidTenant: G.INVALID_TENANT,
            NoAllowedTenants: G.NO_ALLOWED_TENANTS,
            TenantNotAllowed: G.TENTANT_NOT_ALLOWED
        },
        J = function() {
            function e() {}
            return e.getError = function(e) {
                return e in K ? K[e] : K.Unknown
            }, e
        }(),
        Q = function() {
            function e() {
                this.isLoading = !1, this.canContinue = !1, this.error = {
                    visible: !1,
                    message: ""
                }
            }
            return e.prototype.setFocus = function(e) {
                if (document) {
                    var t = document.getElementById(e);
                    t && (t.focus(), t.select())
                }
            }, e.prototype.$onInit = function() {
                var e = this;
                this.messageService.registerActionHandler(r.SHOW_ERROR, function(t) {
                    return e.onShowMessage(t)
                }), this.messageService.registerActionHandler(r.HIDE_ERROR, function() {
                    return e.onHideMessage()
                })
            }, e.prototype.$onDestroy = function() {
                this.messageService.unregisterActionHandler(r.SHOW_ERROR), this.messageService.unregisterActionHandler(r.HIDE_ERROR)
            }, e.prototype.onShowMessage = function(e) {
                var t = e.message;
                void 0 === t && console.error("'" + e.message + "' does not exist in DomainError table.");
                var n = J.getError(t);
                this.error.visible = !0, this.error.message = n
            }, e.prototype.onHideMessage = function() {
                this.error.visible = !1
            }, e
        }(),
        Y = n(34),
        Z = n.n(Y),
        X = (j = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                j(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        ee = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.authService = t, r.messageService = n, r.username = "", r
            }
            return X(t, e), t.$inject = ["authService", "messageService"], t.prototype.onSubmitUsername = function() {
                var e = this;
                this.messageService.hideError(), this.isLoading || (this.isLoading = !0, this.username = this.username.trim(), this.authService.submitUsername(this.username).catch(function(t) {
                    e.messageService.showError(t), e.setFocus("username")
                }).finally(function() {
                    e.isLoading = !1
                }))
            }, t
        }(Q),
        te = {
            template: Z.a,
            controller: ee
        },
        ne = n(33),
        re = n.n(ne),
        ie = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        oe = function(e) {
            function t(t, n, r, i) {
                var o = e.call(this) || this;
                return o.$rootScope = t, o.passwordValidator = n, o.authService = r, o.messageService = i, o.password = "", o
            }
            return ie(t, e), t.$inject = ["$rootScope", "passwordValidator", "authService", "messageService"], t.prototype.onSubmitPassword = function(e) {
                var t = this;
                (this.messageService.hideError(), this.isLoading) || (this.isLoading = !0, this.authService.submitPassword(this.password).catch(function(e) {
                    t.messageService.showError(e), t.password = "", t.$rootScope.$broadcast("focus", {
                        id: "password"
                    })
                }).finally(function() {
                    t.isLoading = !1
                }));
                e.preventDefault()
            }, t.prototype.onChange = function() {
                this.canContinue = this.passwordValidator.validate(this.password)
            }, t.prototype.togglePasswordVisibility = function(e) {
                var t = document.getElementById("password");
                t && t.setAttribute("type", e ? "text" : "password");
                var n = document.getElementById("eye");
                n && n.setAttribute("xlink:href", e ? "#eye-open" : "#eye-blocked")
            }, t.prototype.onTogglePassword = function() {
                var e = this;
                this.togglePasswordVisibility(!0);
                var t = function() {
                    e.togglePasswordVisibility(!1), document.removeEventListener("mouseup", t, !0), document.removeEventListener("touchend", t, !0)
                };
                document.addEventListener("mouseup", t, !0), document.addEventListener("touchend", t, !0)
            }, t
        }(Q),
        ae = {
            template: re.a,
            controller: oe,
            bindings: {}
        },
        se = n(32),
        ce = n.n(se),
        ue = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        le = function(e) {
            function t(t, n, r, i) {
                var o = e.call(this) || this;
                return o.$rootScope = t, o.passwordValidator = n, o.authService = r, o.messageService = i, o.password = "", o
            }
            return ue(t, e), t.$inject = ["$rootScope", "passwordValidator", "authService", "messageService"], t.prototype.onSubmitPassword = function(e) {
                var t = this;
                this.isLoading || (this.isLoading = !0, this.authService.submitPassword(this.password).catch(function(e) {
                    t.messageService.showError(e), t.password = "", t.$rootScope.$broadcast("focus", {
                        id: "password"
                    })
                }).finally(function() {
                    t.isLoading = !1
                }));
                e.preventDefault()
            }, t.prototype.onChange = function() {
                this.canContinue = this.passwordValidator.validate(this.password)
            }, t
        }(Q),
        he = {
            template: ce.a,
            controller: le,
            bindings: {}
        },
        fe = n(31),
        de = n.n(fe),
        pe = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        $e = function(e) {
            function t(t, n, r) {
                var i = e.call(this) || this;
                return i.$rootScope = t, i.authService = n, i.messageService = r, i.isLoading = !1, i.isChangePasswordValid = !1, i.vm = {
                    password: "",
                    newpassword: "",
                    verifypassword: ""
                }, i.canContinue = !1, i
            }
            return pe(t, e), t.$inject = ["$rootScope", "authService", "messageService"], t.prototype.$onInit = function() {
                e.prototype.$onInit.call(this), this.messageService.invoke(A.TOGGLE_QR_CODE, !1)
            }, t.prototype.onSubmitChangePassword = function(e) {
                var t = this;
                e.preventDefault(), this.authService.submitChangePassword(this.vm).catch(function(e) {
                    t.messageService.showError(e), t.vm.password = "", t.vm.newpassword = "", t.vm.verifypassword = "", t.canContinue = !1, t.$rootScope.$broadcast("focus", {
                        id: "password"
                    })
                })
            }, t.prototype.validateChangePassword = function() {
                this.canContinue = "" !== this.vm.password && "" !== this.vm.newpassword && "" !== this.vm.verifypassword
            }, t
        }(Q),
        ve = {
            template: de.a,
            controller: $e,
            bindings: {}
        },
        ge = n(30),
        me = n.n(ge),
        ye = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        we = function(e) {
            function t(t, n, r) {
                var i = e.call(this) || this;
                return i.$rootScope = t, i.authService = n, i.messageService = r, i.isLoading = !1, i.isResetPasswordValid = !1, i.vm = {
                    newpassword: "",
                    verifypassword: ""
                }, i.canContinue = !1, i
            }
            return ye(t, e), t.$inject = ["$rootScope", "authService", "messageService"], t.prototype.$onInit = function() {
                e.prototype.$onInit.call(this), this.messageService.invoke(A.TOGGLE_QR_CODE, !1)
            }, t.prototype.onSubmitResetPassword = function(e) {
                var t = this;
                e.preventDefault(), this.authService.submitResetPassword(this.vm).catch(function(e) {
                    t.messageService.showError(e), t.vm.newpassword = "", t.vm.verifypassword = "", t.canContinue = !1, t.$rootScope.$broadcast("focus", {
                        id: "newpassword"
                    })
                })
            }, t.prototype.validateResetPassword = function() {
                this.canContinue = "" !== this.vm.newpassword && "" !== this.vm.verifypassword
            }, t
        }(Q),
        be = {
            template: me.a,
            controller: we,
            bindings: {}
        },
        Se = n(29),
        xe = n.n(Se),
        Ce = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        Ee = function(e) {
            function t(t, n, r) {
                var i = e.call(this) || this;
                return i.authService = t, i.resetPasswordCodeValidator = n, i.messageService = r, i.vm = {
                    code: ""
                }, i.message = "Er is een code verstuurd via email. Vul deze code hieronder in.", i
            }
            return Ce(t, e), t.$inject = ["authService", "resetPasswordCodeValidator", "messageService"], t.prototype.$onInit = function() {
                e.prototype.$onInit.call(this);
                var t = this.authService.getUserEmail();
                void 0 !== t && (this.message = "Er is een code verstuurd naar " + t + ". Vul deze code hieronder in.")
            }, t.prototype.validateCode = function() {
                this.canContinue = this.resetPasswordCodeValidator.validate(this.vm.code)
            }, t.prototype.onSubmitCode = function() {
                var e = this;
                this.isLoading = !0, this.authService.submitResetPasswordCode(this.vm.code).catch(function(t) {
                    e.messageService.showError(t)
                }).finally(function() {
                    e.isLoading = !1
                })
            }, t
        }(Q),
        Oe = {
            template: xe.a,
            controller: Ee
        },
        ke = n(28),
        Ae = n.n(ke),
        _e = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(),
        Ie = function(e) {
            function t(t, n, r) {
                var i = e.call(this) || this;
                return i.authService = t, i.tokenValidator = n, i.messageService = r, i.vm = {
                    code: ""
                }, i
            }
            return _e(t, e), t.$inject = ["authService", "tokenValidator", "messageService"], t.prototype.validateToken = function() {
                this.canContinue = this.tokenValidator.validate(this.vm.code)
            }, t.prototype.onSubmitToken = function() {
                var e = this;
                this.isLoading = !0, this.authService.submitToken(this.vm.code).catch(function(t) {
                    e.messageService.showError(t)
                }).finally(function() {
                    e.isLoading = !1
                })
            }, t
        }(Q),
        Te = {
            template: Ae.a,
            controller: Ie
        },
        Me = n(27),
        Re = n.n(Me),
        Ne = (n(8), function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }()),
        Ve = function(e) {
            function t(t, n, r) {
                var i = e.call(this) || this;
                return i.authService = t, i.tokenValidator = n, i.messageService = r, i.vm = {
                    code: ""
                }, i
            }
            return Ne(t, e), t.$inject = ["authService", "tokenValidator", "messageService"], t.prototype.$onInit = function() {
                e.prototype.$onInit.call(this), this.qrImageUrl = this.authService.getQrImageUrl(), this.messageService.invoke(A.TOGGLE_QR_CODE, !0)
            }, t.prototype.validateToken = function() {
                this.canContinue = this.tokenValidator.validate(this.vm.code)
            }, t.prototype.onSubmitToken = function() {
                var e = this;
                this.isLoading || (this.isLoading = !0, this.authService.submitToken(this.vm.code).catch(function(t) {
                    e.messageService.showError(t), e.setFocus("token")
                }).finally(function() {
                    e.isLoading = !1
                }))
            }, t
        }(Q),
        Pe = {
            template: Re.a,
            controller: Ve
        },
        De = n(26),
        je = n.n(De),
        Ue = (n(6), function() {
            function e(e, t, n, r, i) {
                var o = this;
                this.$rootScope = e, this.$q = t, this.schoolService = n, this.authService = r, this.messageService = i, this.selectSchool = function(e) {
                    return o.selectSchoolImpl(e)
                }, this.searchSchools = function(e) {
                    return o.searchSchoolsImpl(e)
                }, this.isLoading = !1, this.showError = !1, this.error = {
                    visible: !1,
                    message: ""
                }
            }
            return e.$inject = ["$rootScope", "$q", "schoolService", "authService", "messageService"], e.prototype.$onInit = function() {
                var e = this;
                this.schoolService, this.$q, this.messageService.registerActionHandler(r.SHOW_ERROR, function(t) {
                    return e.onShowMessage(t)
                }), this.messageService.registerActionHandler(r.HIDE_ERROR, function() {
                    return e.onHideMessage()
                })
            }, e.prototype.$onDestroy = function() {
                this.messageService.unregisterActionHandler(r.SHOW_ERROR), this.messageService.unregisterActionHandler(r.HIDE_ERROR)
            }, e.prototype.onSubmitSchool = function() {
                var e = this;
                return this.selectedSchool ? (this.messageService.invoke(r.HIDE_ERROR), this.isLoading ? this.$q.reject() : (this.isLoading = !0, this.authService.selectSchool(this.selectedSchool, !0).then(function() {
                    return e.authService.startChallenges().then(function() {})
                }).catch(function(t) {
                    e.messageService.showError(t || "Unknown"), e.setFocus()
                }).finally(function() {
                    e.isLoading = !1
                }))) : (this.messageService.showError("NoSchoolSelected"), this.$rootScope.$broadcast("focus", {
                    id: "scholenkiezer_value"
                }), this.setFocus(), this.$q.reject())
            }, e.prototype.selectSchoolImpl = function(e) {
                this.messageService.hideError(), this.selectedSchool = {
                    displayName: e.originalObject.displayName,
                    domain: e.originalObject.domain
                }
            }, e.prototype.searchSchoolsImpl = function(e) {
                var t = this;
                return this.schoolService.searchSchool(e).then(function(e) {
                    return e && e.length > 0 && t.selectSchool({
                        originalObject: {
                            displayName: e[0].displayName,
                            domain: e[0].domain
                        }
                    }), e
                })
            }, e.prototype.onShowMessage = function(e) {
                this.error.visible = !0, this.error.message = J.getError(e.message)
            }, e.prototype.onHideMessage = function() {
                this.error.visible = !1
            }, e.prototype.setFocus = function() {
                var e = document.getElementById("scholenkiezer_value");
                e && e.focus()
            }, e
        }()),
        Le = {
            template: je.a,
            controller: Ue
        },
        qe = {
            template: '<div class="alert alert-danger" ng-if="$ctrl.startupError">{{$ctrl.startupError}}</div>',
            controller: function() {
                function e(e) {
                    this.authService = e
                }
                return e.$inject = ["authService"], e.prototype.$onInit = function() {
                    var e = this;
                    this.authService.startChallenges().catch(function(t) {
                        e.startupError = J.getError(t)
                    })
                }, e
            }()
        },
        Fe = Object(i.module)("magister.core.account", [k.name, "ngRoute", "angucomplete-alt"]);
    Fe.config(["$routeProvider", function(e) {
        e.when(_.user.route, {
            template: "<mg-username></mg-username>"
        }).when(_.password.route, {
            template: "<mg-password-challenge></mg-password-challenge>"
        }).when(_.rswp.route, {
            template: "<mg-rswp></mg-rswp>"
        }).when(_.changepassword.route, {
            template: "<mg-changepassword></mg-changepassword>"
        }).when(_.resetpassword.route, {
            template: "<mg-resetpassword></mg-resetpassword>"
        }).when(_.resetpasswordcode.route, {
            template: "<mg-resetpasswordcode></mg-resetpasswordcode>"
        }).when(_.token.route, {
            template: "<mg-token></mg-token>"
        }).when(_.pair.route, {
            template: "<mg-pair></mg-pair>"
        }).when(_.scholenkiezer.route, {
            template: "<mg-schoolkiezer></mg-schoolkiezer>"
        }).otherwise({
            template: "<mg-not-found></mg-not-found>"
        })
    }]), Fe.component("mgUsername", te).component("mgPasswordChallenge", ae).component("mgRswp", he).component("mgChangepassword", ve).component("mgResetpassword", be).component("mgResetpasswordcode", Oe).component("mgToken", Te).component("mgPair", Pe).component("mgSchoolkiezer", Le).component("mgNotFound", qe), Fe.service("authService", T).service("usernameValidator", q).service("tokenValidator", B).service("resetPasswordCodeValidator", W).service("passwordValidator", F).service("changePasswordValidator", H).service("resetPasswordValidator", z).service("schoolService", R).service("sessionService", V), Fe.run(["sessionService", "$http", function(e, t) {
        var n = e.getClientId();
        n && t.defaults.headers && (t.defaults.headers.common["x-client-id"] = n)
    }]), Fe.service("challengeService", L);
    var He = n(25),
        ze = n.n(He),
        Be = (n(4), "Kies je school"),
        We = function() {
            function e(e, t, n, r, i) {
                this.$rootScope = e, this.$timeout = t, this.$window = n, this.authService = r, this.messageService = i, this.showAvatar = !1, this.showQrCode = !1, this.showForgotPassword = !1, this.showLoadRetry = !1, this.runStage = "initializing", this.error = {
                    visible: !1,
                    message: ""
                }, this.school = {
                    name: Be,
                    canEdit: !1
                }
            }
            return e.$inject = ["$rootScope", "$timeout", "$window", "authService", "messageService"], Object.defineProperty(e.prototype, "showAccountOptions", {
                get: function() {
                    return this.authService.allowAccountOptions
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "showChangeUser", {
                get: function() {
                    return this.authService.allowChangeUser
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.$onInit = function() {
                var e = this;
                this.authService.registerSelectSchool(function(t, n) {
                    return e.onSelectSchool(t, n)
                }), this.authService.registerFoundUser(function(t) {
                    return e.onFoundUser(t)
                }), this.authService.registerPreRedirectChallenge(function() {
                    return e.onPreRedirectChallenge()
                }), this.messageService.registerActionHandler(A.TOGGLE_QR_CODE, function(t) {
                    return e.onToggleQrCode(t)
                }), this.messageService.registerActionHandler(A.SHOW_FORGOT_PASSWORD, function(t) {
                    return e.onSetForgotPassword(t)
                }), this.$rootScope.$on("$routeChangeSuccess", function() {
                    e.error.visible = !1
                }), this.authService.startChallenges().then(function(t) {
                    t && t.action !== O.tenantselector && t.tenantname && (e.school.name = t.tenantname), e.runStage = "show-challenges"
                }).catch(function(t) {
                    e.startupError = J.getError(t)
                }), this.$timeout(5e3).then(function() {
                    "initializing" === e.runStage && (e.showLoadRetry = !0)
                })
            }, e.prototype.$onDestroy = function() {
                this.messageService.unregisterActionHandler(A.TOGGLE_QR_CODE), this.messageService.unregisterActionHandler(A.SHOW_FORGOT_PASSWORD)
            }, e.prototype.onToggleQrCode = function(e) {
                this.showQrCode = e, this.$rootScope.$applyAsync()
            }, e.prototype.onSelectSchool = function(e, t) {
                this.school.canEdit = t, this.school.name = e.displayName
            }, e.prototype.onReload = function(e) {
                e && e.preventDefault(), this.$window.location.reload(!0)
            }, e.prototype.onChangeSchool = function(e) {
                e && e.preventDefault(), this.school.canEdit = !1, this.school.name = Be, this.authService.startSelectSchool()
            }, e.prototype.onPreRedirectChallenge = function() {
                this.runStage = "redirecting"
            }, e.prototype.onFoundUser = function(e) {
                this.user = e, this.showAvatar = void 0 !== e.name && e.name.length > 0
            }, e.prototype.onChangeUsername = function(e) {
                e && e.preventDefault(), this.user = void 0, this.authService.startUsernameChallenge()
            }, e.prototype.onForgotPassword = function(e) {
                var t = this;
                e && e.preventDefault(), this.authService.submitForgotPassword().catch(function(e) {
                    t.messageService.showError(e), t.$rootScope.$broadcast("focus", {
                        id: "password"
                    })
                })
            }, e.prototype.onSetForgotPassword = function(e) {
                this.showForgotPassword = e
            }, e
        }(),
        Ge = {
            template: ze.a,
            controller: We
        },
        Ke = i.module("account.desktop", [Fe.name]);
    Ke.config(["$compileProvider", function(e) {
        e.debugInfoEnabled(!1), e.commentDirectivesEnabled(!1), e.cssClassDirectivesEnabled(!1)
    }]), Ke.component("magisterAccount", Ge), i.element(document).ready(function() {
        i.bootstrap(document, [Ke.name], {
            strictDi: !0
        })
    })
}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, , function(e, t, n) {}, function(e, t, n) {
    var r, i, o;
    /*! Copyright (c) 2014 Hidenari Nozaki and contributors | Licensed under the MIT license */
    /*! Copyright (c) 2014 Hidenari Nozaki and contributors | Licensed under the MIT license */
    ! function(a, s) {
        "use strict";
        void 0 !== e && e.exports ? e.exports = s(n(1)) : (i = [n(1)], void 0 === (o = "function" == typeof(r = s) ? r.apply(t, i) : r) || (e.exports = o))
    }(window, function(e) {
        "use strict";
        e.module("angucomplete-alt", []).directive("angucompleteAlt", ["$q", "$parse", "$http", "$sce", "$timeout", "$templateCache", "$interpolate", function(e, t, n, r, i, o, a) {
            var s = 40,
                c = 39,
                u = 38,
                l = 37,
                h = 27,
                f = 13,
                d = 9,
                p = 3,
                $ = 524288,
                v = 500,
                g = 200,
                m = "autocomplete-required",
                y = "Searching...",
                w = "No results found";

            function b(t, o, a, b) {
                var S, x, C, E, O, k, A = o.find("input"),
                    _ = p,
                    I = null,
                    T = m,
                    M = null,
                    R = null,
                    N = !1,
                    V = o[0].querySelector(".angucomplete-dropdown"),
                    P = !1,
                    D = null;

                function j(e, n) {
                    e && ("object" == typeof e ? (t.searchStr = F(e), q({
                        originalObject: e
                    })) : "string" == typeof e && e.length > 0 ? t.searchStr = e : console && console.error && console.error("Tried to set " + (n ? "initial" : "") + " value of angucomplete to", e, "which is an invalid value"), B(!0))
                }

                function U(e) {
                    D = null, t.hideResults(e), document.body.removeEventListener("click", U)
                }

                function L(e) {
                    return e.which ? e.which : e.keyCode
                }

                function q(e) {
                    "function" == typeof t.selectedObject ? t.selectedObject(e, t.selectedObjectData) : t.selectedObject = e, B(!!e)
                }

                function F(e) {
                    return t.titleField.split(",").map(function(t) {
                        return H(e, t)
                    }).join(" ")
                }

                function H(e, t) {
                    var n, r;
                    if (t) {
                        n = t.split("."), r = e;
                        for (var i = 0; i < n.length; i++) r = r[n[i]]
                    } else r = e;
                    return r
                }

                function z(e, n) {
                    var i, o, a;
                    if (a = new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), e) return e.match && e.replace || (e = e.toString()), i = (o = e.match(a)) ? e.replace(a, '<span class="' + t.matchClass + '">' + o[0] + "</span>") : e, r.trustAsHtml(i)
                }

                function B(e) {
                    t.notEmpty = e, M = t.searchStr, t.fieldRequired && b && t.inputName && b[t.inputName].$setValidity(T, e)
                }

                function W(e) {
                    !t.overrideSuggestions || t.selectedObject && t.selectedObject.originalObject === t.searchStr || (e && e.preventDefault(), i.cancel(I), Z(), q({
                        originalObject: t.searchStr
                    }), t.clearSelected && (t.searchStr = null), te())
                }

                function G() {
                    return o[0].querySelectorAll(".angucomplete-row")[t.currentIndex]
                }

                function K(e) {
                    V.scrollTop = V.scrollTop + e
                }

                function J() {
                    var e = t.results[t.currentIndex];
                    t.matchClass ? A.val(F(e.originalObject)) : A.val(e.title)
                }

                function Q(e) {
                    return function(n, r, i, o) {
                        r || i || o || !n.data || (n = n.data), t.searching = !1, ie(H(x(n), t.remoteUrlDataField), e)
                    }
                }

                function Y(e, n, r, i) {
                    t.searching = N, n || r || i || (n = e.status), 0 !== n && -1 !== n && (t.remoteUrlErrorCallback ? t.remoteUrlErrorCallback(e, n, r, i) : console && console.error && console.error("http error"))
                }

                function Z() {
                    R && R.resolve()
                }

                function X(r) {
                    var i = {},
                        o = t.remoteUrl + encodeURIComponent(r);
                    t.remoteUrlRequestFormatter && (i = {
                        params: t.remoteUrlRequestFormatter(r)
                    }, o = t.remoteUrl), t.remoteUrlRequestWithCredentials && (i.withCredentials = !0), Z(), R = e.defer(), i.timeout = R.promise, N = !0, n.get(o, i).then(Q(r)).catch(Y).finally(function() {
                        N = !1
                    })
                }

                function ee(n) {
                    Z(), R = e.defer(), t.remoteApiHandler(n, R.promise).then(Q(n)).catch(Y)
                }

                function te() {
                    t.showDropdown = !1, t.results = [], V && (V.scrollTop = 0)
                }

                function ne() {
                    t.showDropdown = E, t.currentIndex = t.focusFirst ? 0 : -1, t.results = []
                }

                function re(e) {
                    !e || e.length < _ || (t.localData ? t.$apply(function() {
                        var n;
                        n = void 0 !== t.localSearch() ? t.localSearch()(e, t.localData) : function(e) {
                            var n, r, i, o, a = t.searchFields.split(","),
                                s = [];
                            for (void 0 !== t.parseInput() && (e = t.parseInput()(e)), n = 0; n < t.localData.length; n++) {
                                for (r = !1, i = 0; i < a.length; i++) o = H(t.localData[n], a[i]) || "", r = r || o.toString().toLowerCase().indexOf(e.toString().toLowerCase()) >= 0;
                                r && (s[s.length] = t.localData[n])
                            }
                            return s
                        }(e), t.searching = !1, ie(n, e)
                    }) : t.remoteApiHandler ? ee(e) : X(e))
                }

                function ie(e, n) {
                    var r, i, o, a, s, c;
                    if (e && e.length > 0)
                        for (t.results = [], r = 0; r < e.length; r++) t.titleField && "" !== t.titleField && (a = s = F(e[r])), i = "", t.descriptionField && (i = c = H(e[r], t.descriptionField)), o = "", t.imageField && (o = H(e[r], t.imageField)), t.matchClass && (s = z(a, n), c = z(i, n)), t.results[t.results.length] = {
                            title: s,
                            description: c,
                            image: o,
                            originalObject: e[r]
                        };
                    else t.results = [];
                    t.autoMatch && 1 === t.results.length && function(e, n, r) {
                        if (!r) return !1;
                        for (var i in n)
                            if (n[i].toLowerCase() === r.toLowerCase()) return t.selectResult(e), !0;
                        return !1
                    }(t.results[0], {
                        title: a,
                        desc: i || ""
                    }, t.searchStr) ? t.showDropdown = !1 : 0 !== t.results.length || O ? t.showDropdown = !0 : t.showDropdown = !1
                }

                function oe() {
                    t.localData ? (t.searching = !1, ie(t.localData, "")) : t.remoteApiHandler ? (t.searching = !0, ee("")) : (t.searching = !0, X(""))
                }
                o.on("mousedown", function(e) {
                    e.target.id ? (D = e.target.id) === t.id + "_dropdown" && document.body.addEventListener("click", U) : D = e.target.className
                }), t.currentIndex = t.focusFirst ? 0 : null, t.searching = !1, C = t.$watch("initialValue", function(e) {
                    e && (C(), j(e, !0))
                }), t.$watch("fieldRequired", function(e, n) {
                    e !== n && (e ? M && -1 !== t.currentIndex ? B(!0) : B(!1) : b[t.inputName].$setValidity(T, !0))
                }), t.$on("angucomplete-alt:clearInput", function(e, n) {
                    n && n !== t.id || (t.searchStr = null, q(), B(!1), te())
                }), t.$on("angucomplete-alt:changeInput", function(e, n, r) {
                    n && n === t.id && j(r)
                }), t.onFocusHandler = function() {
                    t.focusIn && t.focusIn(), 0 !== _ || t.searchStr && 0 !== t.searchStr.length || (t.currentIndex = t.focusFirst ? 0 : t.currentIndex, t.showDropdown = !0, oe())
                }, t.hideResults = function() {
                    D && (D === t.id + "_dropdown" || D.indexOf("angucomplete") >= 0) ? D = null : (S = i(function() {
                        te(), t.$apply(function() {
                            t.searchStr && t.searchStr.length > 0 && A.val(t.searchStr)
                        })
                    }, g), Z(), t.focusOut && t.focusOut(), t.overrideSuggestions && t.searchStr && t.searchStr.length > 0 && -1 === t.currentIndex && W())
                }, t.resetHideResults = function() {
                    S && i.cancel(S)
                }, t.hoverRow = function(e) {
                    t.currentIndex = e
                }, t.selectResult = function(e) {
                    t.matchClass && (e.title = F(e.originalObject), e.description = H(e.originalObject, t.descriptionField)), t.clearSelected ? t.searchStr = null : t.searchStr = e.title, q(e), te()
                }, t.inputChangeHandler = function(e) {
                    return e.length < _ ? (Z(), te()) : 0 === e.length && 0 === _ && oe(), t.inputChanged && (e = t.inputChanged(e)), e
                }, t.fieldRequiredClass && "" !== t.fieldRequiredClass && (T = t.fieldRequiredClass), t.minlength && "" !== t.minlength && (_ = parseInt(t.minlength, 10)), t.pause || (t.pause = v), t.clearSelected || (t.clearSelected = !1), t.overrideSuggestions || (t.overrideSuggestions = !1), t.fieldRequired && b && (t.initialValue ? B(!0) : B(!1)), t.inputType = a.type ? a.type : "text", t.textSearching = a.textSearching ? a.textSearching : y, t.textNoResults = a.textNoResults ? a.textNoResults : w, E = "false" !== t.textSearching, O = "false" !== t.textNoResults, t.maxlength = a.maxlength ? a.maxlength : $, A.on("keydown", function(e) {
                    var n = L(e),
                        r = null,
                        i = null;
                    n === f && t.results ? (t.currentIndex >= 0 && t.currentIndex < t.results.length ? (e.preventDefault(), t.selectResult(t.results[t.currentIndex])) : (W(e), te()), t.$apply()) : n === s && t.results ? (e.preventDefault(), t.currentIndex + 1 < t.results.length && t.showDropdown && (t.$apply(function() {
                        t.currentIndex++, J()
                    }), P && (r = G(), V.getBoundingClientRect().top + parseInt(getComputedStyle(V).maxHeight, 10) < r.getBoundingClientRect().bottom && K(function(e) {
                        var t = getComputedStyle(e);
                        return e.offsetHeight + parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
                    }(r))))) : n === u && t.results ? (e.preventDefault(), t.currentIndex >= 1 ? (t.$apply(function() {
                        t.currentIndex--, J()
                    }), P && (i = G().getBoundingClientRect().top - (V.getBoundingClientRect().top + parseInt(getComputedStyle(V).paddingTop, 10))) < 0 && K(i - 1)) : 0 === t.currentIndex && t.$apply(function() {
                        t.currentIndex = -1, A.val(t.searchStr)
                    })) : n === d ? t.results && t.results.length > 0 && t.showDropdown ? -1 === t.currentIndex && t.overrideSuggestions ? W() : (-1 === t.currentIndex && (t.currentIndex = 0), t.selectResult(t.results[t.currentIndex]), t.$digest()) : t.searchStr && t.searchStr.length > 0 && W() : n === h && e.preventDefault()
                }), A.on("keyup compositionend", function(e) {
                    var n = L(e);
                    if (n !== l && n !== c)
                        if (n === u || n === f) e.preventDefault();
                        else if (n === s) e.preventDefault(), !t.showDropdown && t.searchStr && t.searchStr.length >= _ && (ne(), t.searching = !0, re(t.searchStr));
                    else if (n === h) te(), t.$apply(function() {
                        A.val(t.searchStr)
                    });
                    else {
                        if (0 === _ && !t.searchStr) return;
                        t.searchStr && "" !== t.searchStr ? t.searchStr.length >= _ && (ne(), I && i.cancel(I), t.searching = !0, I = i(function() {
                            re(t.searchStr)
                        }, t.pause)) : t.showDropdown = !1, M && M !== t.searchStr && !t.clearSelected && t.$apply(function() {
                            q()
                        })
                    }
                }), k = "remoteUrlResponseFormatter", x = function(e) {
                    return t[k] ? t[k](e) : e
                }, i(function() {
                    var e = getComputedStyle(V);
                    P = e.maxHeight && "auto" === e.overflowY
                })
            }
            return o.put("/angucomplete-alt/index.html", '<div class="angucomplete-holder" ng-class="{\'angucomplete-dropdown-visible\': showDropdown}">  <input id="{{id}}_value" name="{{inputName}}" tabindex="{{fieldTabindex}}" ng-class="{\'angucomplete-input-not-empty\': notEmpty}" ng-model="searchStr" ng-disabled="disableInput" type="{{inputType}}" placeholder="{{placeholder}}" maxlength="{{maxlength}}" ng-focus="onFocusHandler()" class="{{inputClass}}" ng-focus="resetHideResults()" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off" ng-change="inputChangeHandler(searchStr)"/>  <div id="{{id}}_dropdown" class="angucomplete-dropdown" ng-show="showDropdown">    <div class="angucomplete-searching" ng-show="searching" ng-bind="textSearching"></div>    <div class="angucomplete-searching" ng-show="!searching && (!results || results.length == 0)" ng-bind="textNoResults"></div>    <div class="angucomplete-row" ng-repeat="result in results" ng-click="selectResult(result)" ng-mouseenter="hoverRow($index)" ng-class="{\'angucomplete-selected-row\': $index == currentIndex}">      <div ng-if="imageField" class="angucomplete-image-holder">        <img ng-if="result.image && result.image != \'\'" ng-src="{{result.image}}" class="angucomplete-image"/>        <div ng-if="!result.image && result.image != \'\'" class="angucomplete-image-default"></div>      </div>      <div class="angucomplete-title" ng-if="matchClass" ng-bind-html="result.title"></div>      <div class="angucomplete-title" ng-if="!matchClass">{{ result.title }}</div>      <div ng-if="matchClass && result.description && result.description != \'\'" class="angucomplete-description" ng-bind-html="result.description"></div>      <div ng-if="!matchClass && result.description && result.description != \'\'" class="angucomplete-description">{{result.description}}</div>    </div>  </div></div>'), {
                restrict: "EA",
                require: "^?form",
                scope: {
                    selectedObject: "=",
                    selectedObjectData: "=",
                    disableInput: "=",
                    initialValue: "=",
                    localData: "=",
                    localSearch: "&",
                    remoteUrlRequestFormatter: "=",
                    remoteUrlRequestWithCredentials: "@",
                    remoteUrlResponseFormatter: "=",
                    remoteUrlErrorCallback: "=",
                    remoteApiHandler: "=",
                    id: "@",
                    type: "@",
                    placeholder: "@",
                    textSearching: "@",
                    textNoResults: "@",
                    remoteUrl: "@",
                    remoteUrlDataField: "@",
                    titleField: "@",
                    descriptionField: "@",
                    imageField: "@",
                    inputClass: "@",
                    pause: "@",
                    searchFields: "@",
                    minlength: "@",
                    matchClass: "@",
                    clearSelected: "@",
                    overrideSuggestions: "@",
                    fieldRequired: "=",
                    fieldRequiredClass: "@",
                    inputChanged: "=",
                    autoMatch: "@",
                    focusOut: "&",
                    focusIn: "&",
                    fieldTabindex: "@",
                    inputName: "@",
                    focusFirst: "@",
                    parseInput: "&"
                },
                templateUrl: function(e, t) {
                    return t.templateUrl || "/angucomplete-alt/index.html"
                },
                compile: function(e) {
                    var t = a.startSymbol(),
                        n = a.endSymbol();
                    if ("{{" !== t || "}}" !== n) {
                        var r = e.html().replace(/\{\{/g, t).replace(/\}\}/g, n);
                        e.html(r)
                    }
                    return b
                }
            }
        }])
    })
}, function(e, t) {
    /**
     * @license AngularJS v1.7.0
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    ! function(e, t) {
        "use strict";
        var n, r, i, o, a, s = t.module("ngRoute", []).info({
                angularVersion: "1.7.0"
            }).provider("$route", function() {
                function e(e, n) {
                    return t.extend(Object.create(e), n)
                }
                n = t.isArray, r = t.isObject, i = t.isDefined, o = t.noop;
                var s = {};

                function u(e, t) {
                    var n = t.caseInsensitiveMatch,
                        r = {
                            originalPath: e,
                            regexp: e
                        },
                        i = r.keys = [];
                    return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function(e, t, n, r) {
                        var o = "?" === r || "*?" === r ? "?" : null,
                            a = "*" === r || "*?" === r ? "*" : null;
                        return i.push({
                            name: n,
                            optional: !!o
                        }), t = t || "", (o ? "" : t) + "(?:" + (o ? t : "") + (a ? "(.+?)" : "([^/]+)") + (o || "") + ")" + (o || "")
                    }).replace(/([/$*])/g, "\\$1"), r.regexp = new RegExp("^" + e + "$", n ? "i" : ""), r
                }
                this.when = function(e, i) {
                    var o = function(e, t) {
                        if (n(e)) {
                            t = t || [];
                            for (var i = 0, o = e.length; i < o; i++) t[i] = e[i]
                        } else if (r(e))
                            for (var a in t = t || {}, e) "$" === a.charAt(0) && "$" === a.charAt(1) || (t[a] = e[a]);
                        return t || e
                    }(i);
                    if (t.isUndefined(o.reloadOnSearch) && (o.reloadOnSearch = !0), t.isUndefined(o.caseInsensitiveMatch) && (o.caseInsensitiveMatch = this.caseInsensitiveMatch), s[e] = t.extend(o, e && u(e, o)), e) {
                        var a = "/" === e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
                        s[a] = t.extend({
                            redirectTo: e
                        }, u(a, o))
                    }
                    return this
                }, this.caseInsensitiveMatch = !1, this.otherwise = function(e) {
                    return "string" == typeof e && (e = {
                        redirectTo: e
                    }), this.when(null, e), this
                }, a = !0, this.eagerInstantiationEnabled = function(e) {
                    return i(e) ? (a = e, this) : a
                }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", "$browser", function(n, r, i, a, u, l, h, f) {
                    var d, p, $ = !1,
                        v = {
                            routes: s,
                            reload: function() {
                                $ = !0;
                                var e = {
                                    defaultPrevented: !1,
                                    preventDefault: function() {
                                        this.defaultPrevented = !0, $ = !1
                                    }
                                };
                                n.$evalAsync(function() {
                                    g(e), e.defaultPrevented || m()
                                })
                            },
                            updateParams: function(e) {
                                if (!this.current || !this.current.$$route) throw c("norout", "Tried updating route with no current route");
                                e = t.extend({}, this.current.params, e), r.path(S(this.current.$$route.originalPath, e)), r.search(e)
                            }
                        };
                    return n.$on("$locationChangeStart", g), n.$on("$locationChangeSuccess", m), v;

                    function g(i) {
                        var o, a, c = v.current;
                        t.forEach(s, function(n, i) {
                            !a && (o = function(e, t) {
                                var n = t.keys,
                                    r = {};
                                if (!t.regexp) return null;
                                var i = t.regexp.exec(e);
                                if (!i) return null;
                                for (var o = 1, a = i.length; o < a; ++o) {
                                    var s = n[o - 1],
                                        c = i[o];
                                    s && c && (r[s.name] = c)
                                }
                                return r
                            }(r.path(), n)) && ((a = e(n, {
                                params: t.extend({}, r.search(), o),
                                pathParams: o
                            })).$$route = n)
                        }), d = a || s.null && e(s.null, {
                            params: {},
                            pathParams: {}
                        }), (p = d && c && d.$$route === c.$$route && t.equals(d.pathParams, c.pathParams) && !d.reloadOnSearch && !$) || !c && !d || n.$broadcast("$routeChangeStart", d, c).defaultPrevented && i && i.preventDefault()
                    }

                    function m() {
                        var e = v.current,
                            r = d;
                        if (p) e.params = r.params, t.copy(e.params, i), n.$broadcast("$routeUpdate", e);
                        else if (r || e) {
                            $ = !1, v.current = r;
                            var s = a.resolve(r);
                            f.$$incOutstandingRequestCount(), s.then(y).then(w).then(function(o) {
                                return o && s.then(b).then(function(o) {
                                    r === v.current && (r && (r.locals = o, t.copy(r.params, i)), n.$broadcast("$routeChangeSuccess", r, e))
                                })
                            }).catch(function(t) {
                                r === v.current && n.$broadcast("$routeChangeError", r, e, t)
                            }).finally(function() {
                                f.$$completeOutstandingRequest(o)
                            })
                        }
                    }

                    function y(e) {
                        var n = {
                            route: e,
                            hasRedirection: !1
                        };
                        if (e)
                            if (e.redirectTo)
                                if (t.isString(e.redirectTo)) n.path = S(e.redirectTo, e.params), n.search = e.params, n.hasRedirection = !0;
                                else {
                                    var i = r.path(),
                                        o = r.search(),
                                        s = e.redirectTo(e.pathParams, i, o);
                                    t.isDefined(s) && (n.url = s, n.hasRedirection = !0)
                                }
                        else if (e.resolveRedirectTo) return a.resolve(u.invoke(e.resolveRedirectTo)).then(function(e) {
                            return t.isDefined(e) && (n.url = e, n.hasRedirection = !0), n
                        });
                        return n
                    }

                    function w(e) {
                        var t = !0;
                        if (e.route !== v.current) t = !1;
                        else if (e.hasRedirection) {
                            var n = r.url(),
                                i = e.url;
                            i ? r.url(i).replace() : i = r.path(e.path).search(e.search).replace().url(), i !== n && (t = !1)
                        }
                        return t
                    }

                    function b(e) {
                        if (e) {
                            var n = t.extend({}, e.resolve);
                            t.forEach(n, function(e, r) {
                                n[r] = t.isString(e) ? u.get(e) : u.invoke(e, null, null, r)
                            });
                            var r = function(e) {
                                var n, r;
                                t.isDefined(n = e.template) ? t.isFunction(n) && (n = n(e.params)) : t.isDefined(r = e.templateUrl) && (t.isFunction(r) && (r = r(e.params)), t.isDefined(r) && (e.loadedTemplateUrl = h.valueOf(r), n = l(r)));
                                return n
                            }(e);
                            return t.isDefined(r) && (n.$template = r), a.all(n)
                        }
                    }

                    function S(e, n) {
                        var r = [];
                        return t.forEach((e || "").split(":"), function(e, t) {
                            if (0 === t) r.push(e);
                            else {
                                var i = e.match(/(\w+)(?:[?*])?(.*)/),
                                    o = i[1];
                                r.push(n[o]), r.push(i[2] || ""), delete n[o]
                            }
                        }), r.join("")
                    }
                }]
            }).run(u),
            c = t.$$minErr("ngRoute");

        function u(e) {
            a && e.get("$route")
        }

        function l(e, n, r) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function(i, o, a, s, c) {
                    var u, l, h, f = a.autoscroll,
                        d = a.onload || "";

                    function p() {
                        h && (r.cancel(h), h = null), u && (u.$destroy(), u = null), l && ((h = r.leave(l)).done(function(e) {
                            !1 !== e && (h = null)
                        }), l = null)
                    }

                    function $() {
                        var a = e.current && e.current.locals,
                            s = a && a.$template;
                        if (t.isDefined(s)) {
                            var h = i.$new(),
                                $ = e.current,
                                v = c(h, function(e) {
                                    r.enter(e, null, l || o).done(function(e) {
                                        !1 === e || !t.isDefined(f) || f && !i.$eval(f) || n()
                                    }), p()
                                });
                            l = v, (u = $.scope = h).$emit("$viewContentLoaded"), u.$eval(d)
                        } else p()
                    }
                    i.$on("$routeChangeSuccess", $), $()
                }
            }
        }

        function h(e, t, n) {
            return {
                restrict: "ECA",
                priority: -400,
                link: function(r, i) {
                    var o = n.current,
                        a = o.locals;
                    i.html(a.$template);
                    var s = e(i.contents());
                    if (o.controller) {
                        a.$scope = r;
                        var c = t(o.controller, a);
                        o.controllerAs && (r[o.controllerAs] = c), i.data("$ngControllerController", c), i.children().data("$ngControllerController", c)
                    }
                    r[o.resolveAs || "$resolve"] = a, s(r)
                }
            }
        }
        u.$inject = ["$injector"], s.provider("$routeParams", function() {
            this.$get = function() {
                return {}
            }
        }), s.directive("ngView", l), s.directive("ngView", h), l.$inject = ["$route", "$anchorScroll", "$animate"], h.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular)
}, function(e, t, n) {
    n(22), e.exports = "ngRoute"
}, function(e, t) {
    /**
     * @license AngularJS v1.7.0
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    ! function(e) {
        "use strict";
        var t = {
            objectMaxDepth: 5
        };

        function n(e) {
            if (!L(e)) return t;
            U(e.objectMaxDepth) && (t.objectMaxDepth = r(e.objectMaxDepth) ? e.objectMaxDepth : NaN)
        }

        function r(e) {
            return H(e) && e > 0
        }

        function i(e, n) {
            n = n || Error;
            var r = "https://errors.angularjs.org/1.7.0/",
                i = r.replace(".", "\\.") + "[\\s\\S]*",
                o = new RegExp(i, "g");
            return function() {
                var i, a, s = arguments[0],
                    c = arguments[1],
                    u = "[" + (e ? e + ":" : "") + s + "] ",
                    l = fe(arguments, 2).map(function(e) {
                        return Ke(e, t.objectMaxDepth)
                    });
                for (u += c.replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1);
                        return t < l.length ? l[t].replace(o, "") : e
                    }), u += "\n" + r + (e ? e + "/" : "") + s, a = 0, i = "?"; a < l.length; a++, i = "&") u += i + "p" + a + "=" + encodeURIComponent(l[a]);
                return new n(u)
            }
        }
        var o, a, s, c, u = /^\/(.+)\/([a-z]*)$/,
            l = "validity",
            h = Object.prototype.hasOwnProperty,
            f = function(e) {
                return F(e) ? e.toLowerCase() : e
            },
            d = function(e) {
                return F(e) ? e.toUpperCase() : e
            },
            p = [].slice,
            $ = [].splice,
            v = [].push,
            g = Object.prototype.toString,
            m = Object.getPrototypeOf,
            y = i("ng"),
            w = e.angular || (e.angular = {}),
            b = 0;

        function S(e) {
            if (null == e || J(e)) return !1;
            if (B(e) || F(e) || a && e instanceof a) return !0;
            var t = "length" in Object(e) && e.length;
            return H(t) && (t >= 0 && t - 1 in e || "function" == typeof e.item)
        }

        function x(e, t, n) {
            var r, i;
            if (e)
                if (G(e))
                    for (r in e) "prototype" !== r && "length" !== r && "name" !== r && e.hasOwnProperty(r) && t.call(n, e[r], r, e);
                else if (B(e) || S(e)) {
                var o = "object" != typeof e;
                for (r = 0, i = e.length; r < i; r++)(o || r in e) && t.call(n, e[r], r, e)
            } else if (e.forEach && e.forEach !== x) e.forEach(t, n, e);
            else if (q(e))
                for (r in e) t.call(n, e[r], r, e);
            else if ("function" == typeof e.hasOwnProperty)
                for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
            else
                for (r in e) h.call(e, r) && t.call(n, e[r], r, e);
            return e
        }

        function C(e, t, n) {
            for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
            return r
        }

        function E(e) {
            return function(t, n) {
                e(n, t)
            }
        }

        function O() {
            return ++b
        }

        function k(e, t) {
            t ? e.$$hashKey = t : delete e.$$hashKey
        }

        function A(e, t, n) {
            for (var r = e.$$hashKey, i = 0, o = t.length; i < o; ++i) {
                var a = t[i];
                if (L(a) || G(a))
                    for (var s = Object.keys(a), c = 0, u = s.length; c < u; c++) {
                        var l = s[c],
                            h = a[l];
                        n && L(h) ? z(h) ? e[l] = new Date(h.valueOf()) : K(h) ? e[l] = new RegExp(h) : h.nodeName ? e[l] = h.cloneNode(!0) : ne(h) ? e[l] = h.clone() : (L(e[l]) || (e[l] = B(h) ? [] : {}), A(e[l], [h], !0)) : e[l] = h
                    }
            }
            return k(e, r), e
        }

        function _(e) {
            return A(e, p.call(arguments, 1), !1)
        }

        function I(e) {
            return A(e, p.call(arguments, 1), !0)
        }

        function T(e) {
            return parseInt(e, 10)
        }
        o = e.document.documentMode;
        var M = Number.isNaN || function(e) {
            return e != e
        };

        function R(e, t) {
            return _(Object.create(e), t)
        }

        function N() {}

        function V(e) {
            return e
        }

        function P(e) {
            return function() {
                return e
            }
        }

        function D(e) {
            return G(e.toString) && e.toString !== g
        }

        function j(e) {
            return void 0 === e
        }

        function U(e) {
            return void 0 !== e
        }

        function L(e) {
            return null !== e && "object" == typeof e
        }

        function q(e) {
            return null !== e && "object" == typeof e && !m(e)
        }

        function F(e) {
            return "string" == typeof e
        }

        function H(e) {
            return "number" == typeof e
        }

        function z(e) {
            return "[object Date]" === g.call(e)
        }

        function B(e) {
            return Array.isArray(e) || e instanceof Array
        }

        function W(e) {
            switch (g.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error
            }
        }

        function G(e) {
            return "function" == typeof e
        }

        function K(e) {
            return "[object RegExp]" === g.call(e)
        }

        function J(e) {
            return e && e.window === e
        }

        function Q(e) {
            return e && e.$evalAsync && e.$watch
        }

        function Y(e) {
            return "boolean" == typeof e
        }

        function Z(e) {
            return e && G(e.then)
        }
        N.$inject = [], V.$inject = [];
        var X = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;
        var ee = function(e) {
                return F(e) ? e.trim() : e
            },
            te = function(e) {
                return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            };

        function ne(e) {
            return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
        }

        function re(e) {
            return f(e.nodeName || e[0] && e[0].nodeName)
        }

        function ie(e, t) {
            return -1 !== Array.prototype.indexOf.call(e, t)
        }

        function oe(e, t) {
            var n = e.indexOf(t);
            return n >= 0 && e.splice(n, 1), n
        }

        function ae(e, t, n) {
            var i, o, a = [],
                s = [];
            if (n = r(n) ? n : NaN, t) {
                if ((o = t) && H(o.length) && X.test(g.call(o)) || (i = t, "[object ArrayBuffer]" === g.call(i))) throw y("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                if (e === t) throw y("cpi", "Can't copy! Source and destination are identical.");
                return B(t) ? t.length = 0 : x(t, function(e, n) {
                    "$$hashKey" !== n && delete t[n]
                }), a.push(e), s.push(t), c(e, t, n)
            }
            return u(e, n);

            function c(e, t, n) {
                if (--n < 0) return "...";
                var r, i = t.$$hashKey;
                if (B(e))
                    for (var o = 0, a = e.length; o < a; o++) t.push(u(e[o], n));
                else if (q(e))
                    for (r in e) t[r] = u(e[r], n);
                else if (e && "function" == typeof e.hasOwnProperty)
                    for (r in e) e.hasOwnProperty(r) && (t[r] = u(e[r], n));
                else
                    for (r in e) h.call(e, r) && (t[r] = u(e[r], n));
                return k(t, i), t
            }

            function u(e, t) {
                if (!L(e)) return e;
                var n = a.indexOf(e);
                if (-1 !== n) return s[n];
                if (J(e) || Q(e)) throw y("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                var r = !1,
                    i = function(e) {
                        switch (g.call(e)) {
                            case "[object Int8Array]":
                            case "[object Int16Array]":
                            case "[object Int32Array]":
                            case "[object Float32Array]":
                            case "[object Float64Array]":
                            case "[object Uint8Array]":
                            case "[object Uint8ClampedArray]":
                            case "[object Uint16Array]":
                            case "[object Uint32Array]":
                                return new e.constructor(u(e.buffer), e.byteOffset, e.length);
                            case "[object ArrayBuffer]":
                                if (!e.slice) {
                                    var t = new ArrayBuffer(e.byteLength);
                                    return new Uint8Array(t).set(new Uint8Array(e)), t
                                }
                                return e.slice(0);
                            case "[object Boolean]":
                            case "[object Number]":
                            case "[object String]":
                            case "[object Date]":
                                return new e.constructor(e.valueOf());
                            case "[object RegExp]":
                                var n = new RegExp(e.source, e.toString().match(/[^/]*$/)[0]);
                                return n.lastIndex = e.lastIndex, n;
                            case "[object Blob]":
                                return new e.constructor([e], {
                                    type: e.type
                                })
                        }
                        if (G(e.cloneNode)) return e.cloneNode(!0)
                    }(e);
                return void 0 === i && (i = B(e) ? [] : Object.create(m(e)), r = !0), a.push(e), s.push(i), r ? c(e, i, t) : i
            }
        }

        function se(e, t) {
            return e === t || e != e && t != t
        }

        function ce(e, t) {
            if (e === t) return !0;
            if (null === e || null === t) return !1;
            if (e != e && t != t) return !0;
            var n, r, i, o = typeof e;
            if (o === typeof t && "object" === o) {
                if (!B(e)) {
                    if (z(e)) return !!z(t) && se(e.getTime(), t.getTime());
                    if (K(e)) return !!K(t) && e.toString() === t.toString();
                    if (Q(e) || Q(t) || J(e) || J(t) || B(t) || z(t) || K(t)) return !1;
                    for (r in i = Le(), e)
                        if ("$" !== r.charAt(0) && !G(e[r])) {
                            if (!ce(e[r], t[r])) return !1;
                            i[r] = !0
                        } for (r in t)
                        if (!(r in i) && "$" !== r.charAt(0) && U(t[r]) && !G(t[r])) return !1;
                    return !0
                }
                if (!B(t)) return !1;
                if ((n = e.length) === t.length) {
                    for (r = 0; r < n; r++)
                        if (!ce(e[r], t[r])) return !1;
                    return !0
                }
            }
            return !1
        }
        var ue = function() {
                if (!U(ue.rules)) {
                    var t = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
                    if (t) {
                        var n = t.getAttribute("ng-csp") || t.getAttribute("data-ng-csp");
                        ue.rules = {
                            noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                            noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                        }
                    } else ue.rules = {
                        noUnsafeEval: function() {
                            try {
                                return new Function(""), !1
                            } catch (e) {
                                return !0
                            }
                        }(),
                        noInlineStyle: !1
                    }
                }
                return ue.rules
            },
            le = function() {
                if (U(le.name_)) return le.name_;
                var t, n, r, i, o = ke.length;
                for (n = 0; n < o; ++n)
                    if (r = ke[n], t = e.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                        i = t.getAttribute(r + "jq");
                        break
                    } return le.name_ = i
            };

        function he(e, t, n) {
            return e.concat(p.call(t, n))
        }

        function fe(e, t) {
            return p.call(e, t || 0)
        }

        function de(e, t) {
            var n = arguments.length > 2 ? fe(arguments, 2) : [];
            return !G(t) || t instanceof RegExp ? t : n.length ? function() {
                return arguments.length ? t.apply(e, he(n, arguments, 0)) : t.apply(e, n)
            } : function() {
                return arguments.length ? t.apply(e, arguments) : t.call(e)
            }
        }

        function pe(t, n) {
            var r = n;
            return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = void 0 : J(n) ? r = "$WINDOW" : n && e.document === n ? r = "$DOCUMENT" : Q(n) && (r = "$SCOPE"), r
        }

        function $e(e, t) {
            if (!j(e)) return H(t) || (t = t ? 2 : null), JSON.stringify(e, pe, t)
        }

        function ve(e) {
            return F(e) ? JSON.parse(e) : e
        }
        var ge = /:/g;

        function me(e, t) {
            e = e.replace(ge, "");
            var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
            return M(n) ? t : n
        }

        function ye(e, t) {
            return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e
        }

        function we(e, t, n) {
            n = n ? -1 : 1;
            var r = e.getTimezoneOffset();
            return ye(e, n * (me(t, r) - r))
        }

        function be(e) {
            e = a(e).clone().empty();
            var t = a("<div></div>").append(e).html();
            try {
                return e[0].nodeType === He ? f(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(e, t) {
                    return "<" + f(t)
                })
            } catch (e) {
                return f(t)
            }
        }

        function Se(e) {
            try {
                return decodeURIComponent(e)
            } catch (e) {}
        }

        function xe(e) {
            var t = {};
            return x((e || "").split("&"), function(e) {
                var n, r, i;
                e && (r = e = e.replace(/\+/g, "%20"), -1 !== (n = e.indexOf("=")) && (r = e.substring(0, n), i = e.substring(n + 1)), U(r = Se(r)) && (i = !U(i) || Se(i), h.call(t, r) ? B(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
            }), t
        }

        function Ce(e) {
            var t = [];
            return x(e, function(e, n) {
                B(e) ? x(e, function(e) {
                    t.push(Oe(n, !0) + (!0 === e ? "" : "=" + Oe(e, !0)))
                }) : t.push(Oe(n, !0) + (!0 === e ? "" : "=" + Oe(e, !0)))
            }), t.length ? t.join("&") : ""
        }

        function Ee(e) {
            return Oe(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function Oe(e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
        }
        var ke = ["ng-", "data-ng-", "ng:", "x-ng-"];
        var Ae = function(t) {
            var n = t.currentScript;
            if (!n) return !0;
            if (!(n instanceof e.HTMLScriptElement || n instanceof e.SVGScriptElement)) return !1;
            var r = n.attributes;
            return [r.getNamedItem("src"), r.getNamedItem("href"), r.getNamedItem("xlink:href")].every(function(e) {
                if (!e) return !0;
                if (!e.value) return !1;
                var n = t.createElement("a");
                if (n.href = e.value, t.location.origin === n.origin) return !0;
                switch (n.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "blob:":
                    case "file:":
                    case "data:":
                        return !0;
                    default:
                        return !1
                }
            })
        }(e.document);

        function _e(t, n) {
            var r, i, o = {};
            if (x(ke, function(e) {
                    var n = e + "app";
                    !r && t.hasAttribute && t.hasAttribute(n) && (r = t, i = t.getAttribute(n))
                }), x(ke, function(e) {
                    var n, o = e + "app";
                    !r && (n = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(o))
                }), r) {
                if (!Ae) return void e.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
                o.strictDi = null !== function(e, t) {
                    var n, r, i = ke.length;
                    for (r = 0; r < i; ++r)
                        if (n = ke[r] + t, F(n = e.getAttribute(n))) return n;
                    return null
                }(r, "strict-di"), n(r, i ? [i] : [], o)
            }
        }

        function Ie(t, n, r) {
            L(r) || (r = {});
            r = _({
                strictDi: !1
            }, r);
            var i = function() {
                    if ((t = a(t)).injector()) {
                        var i = t[0] === e.document ? "document" : be(t);
                        throw y("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }(n = n || []).unshift(["$provide", function(e) {
                        e.value("$rootElement", t)
                    }]), r.debugInfoEnabled && n.push(["$compileProvider", function(e) {
                        e.debugInfoEnabled(!0)
                    }]), n.unshift("ng");
                    var o = Zt(n, r.strictDi);
                    return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                        e.$apply(function() {
                            t.data("$injector", r), n(t)(e)
                        })
                    }]), o
                },
                o = /^NG_ENABLE_DEBUG_INFO!/,
                s = /^NG_DEFER_BOOTSTRAP!/;
            if (e && o.test(e.name) && (r.debugInfoEnabled = !0, e.name = e.name.replace(o, "")), e && !s.test(e.name)) return i();
            e.name = e.name.replace(s, ""), w.resumeBootstrap = function(e) {
                return x(e, function(e) {
                    n.push(e)
                }), i()
            }, G(w.resumeDeferredBootstrap) && w.resumeDeferredBootstrap()
        }

        function Te() {
            e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
        }

        function Me(e) {
            var t = w.element(e).injector();
            if (!t) throw y("test", "no injector found for element argument to getTestability");
            return t.get("$$testability")
        }
        var Re = /[A-Z]/g;

        function Ne(e, t) {
            return t = t || "_", e.replace(Re, function(e, n) {
                return (n ? t : "") + e.toLowerCase()
            })
        }
        var Ve = !1;

        function Pe(e, t, n) {
            if (!e) throw y("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function De(e, t, n) {
            return n && B(e) && (e = e[e.length - 1]), Pe(G(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
        }

        function je(e, t) {
            if ("hasOwnProperty" === e) throw y("badname", "hasOwnProperty is not a valid {0} name", t)
        }

        function Ue(e) {
            for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = a(p.call(e, 0, i))), t.push(n));
            return t || e
        }

        function Le() {
            return Object.create(null)
        }

        function qe(e) {
            if (null == e) return "";
            switch (typeof e) {
                case "string":
                    break;
                case "number":
                    e = "" + e;
                    break;
                default:
                    e = !D(e) || B(e) || z(e) ? $e(e) : e.toString()
            }
            return e
        }
        var Fe = 1,
            He = 3,
            ze = 8,
            Be = 9,
            We = 11;

        function Ge(e, t) {
            if (B(e)) {
                t = t || [];
                for (var n = 0, r = e.length; n < r; n++) t[n] = e[n]
            } else if (L(e))
                for (var i in t = t || {}, e) "$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i]);
            return t || e
        }

        function Ke(e, t) {
            return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : j(e) ? "undefined" : "string" != typeof e ? function(e, t) {
                var n = [];
                return r(t) && (e = w.copy(e, null, t)), JSON.stringify(e, function(e, t) {
                    if (L(t = pe(e, t))) {
                        if (n.indexOf(t) >= 0) return "...";
                        n.push(t)
                    }
                    return t
                })
            }(e, t) : e
        }
        var Je = {
            full: "1.7.0",
            major: 1,
            minor: 7,
            dot: 0,
            codeName: "nonexistent-physiology"
        };
        dt.expando = "ng339";
        var Qe = dt.cache = {},
            Ye = 1;
        dt._data = function(e) {
            return this.cache[e[this.expando]] || {}
        };
        var Ze = /-([a-z])/g,
            Xe = /^-ms-/,
            et = {
                mouseleave: "mouseout",
                mouseenter: "mouseover"
            },
            tt = i("jqLite");

        function nt(e, t) {
            return t.toUpperCase()
        }

        function rt(e) {
            return e.replace(Ze, nt)
        }
        var it = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ot = /<|&#?\w+;/,
            at = /<([\w:-]+)/,
            st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ct = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ut(e) {
            return !ot.test(e)
        }

        function lt(e) {
            var t = e.nodeType;
            return t === Fe || !t || t === Be
        }

        function ht(e, t) {
            var n, r, i, o, a = t.createDocumentFragment(),
                s = [];
            if (ut(e)) s.push(t.createTextNode(e));
            else {
                for (n = a.appendChild(t.createElement("div")), r = (at.exec(e) || ["", ""])[1].toLowerCase(), i = ct[r] || ct._default, n.innerHTML = i[1] + e.replace(st, "<$1></$2>") + i[2], o = i[0]; o--;) n = n.lastChild;
                s = he(s, n.childNodes), (n = a.firstChild).textContent = ""
            }
            return a.textContent = "", a.innerHTML = "", x(s, function(e) {
                a.appendChild(e)
            }), a
        }
        ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td;
        var ft = e.Node.prototype.contains || function(e) {
            return !!(16 & this.compareDocumentPosition(e))
        };

        function dt(t) {
            if (t instanceof dt) return t;
            var n, r, i, o;
            if (F(t) && (t = ee(t), n = !0), !(this instanceof dt)) {
                if (n && "<" !== t.charAt(0)) throw tt("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new dt(t)
            }
            n ? Et(this, (r = t, i = i || e.document, (o = it.exec(r)) ? [i.createElement(o[1])] : (o = ht(r, i)) ? o.childNodes : [])) : G(t) ? It(t) : Et(this, t)
        }

        function pt(e) {
            return e.cloneNode(!0)
        }

        function $t(e, t) {
            !t && lt(e) && a.cleanData([e]), e.querySelectorAll && a.cleanData(e.querySelectorAll("*"))
        }

        function vt(e) {
            var t;
            for (t in e) return !1;
            return !0
        }

        function gt(e) {
            var t = e.ng339,
                n = t && Qe[t],
                r = n && n.events,
                i = n && n.data;
            i && !vt(i) || r && !vt(r) || (delete Qe[t], e.ng339 = void 0)
        }

        function mt(e, t, n, r) {
            if (U(r)) throw tt("offargs", "jqLite#off() does not support the `selector` argument");
            var i = wt(e),
                o = i && i.events,
                a = i && i.handle;
            if (a) {
                if (t) {
                    var s = function(t) {
                        var r = o[t];
                        U(n) && oe(r || [], n), U(n) && r && r.length > 0 || (e.removeEventListener(t, a), delete o[t])
                    };
                    x(t.split(" "), function(e) {
                        s(e), et[e] && s(et[e])
                    })
                } else
                    for (t in o) "$destroy" !== t && e.removeEventListener(t, a), delete o[t];
                gt(e)
            }
        }

        function yt(e, t) {
            var n = e.ng339,
                r = n && Qe[n];
            r && (t ? delete r.data[t] : r.data = {}, gt(e))
        }

        function wt(e, t) {
            var n = e.ng339,
                r = n && Qe[n];
            return t && !r && (e.ng339 = n = ++Ye, r = Qe[n] = {
                events: {},
                data: {},
                handle: void 0
            }), r
        }

        function bt(e, t, n) {
            if (lt(e)) {
                var r, i = U(n),
                    o = !i && t && !L(t),
                    a = !t,
                    s = wt(e, !o),
                    c = s && s.data;
                if (i) c[rt(t)] = n;
                else {
                    if (a) return c;
                    if (o) return c && c[rt(t)];
                    for (r in t) c[rt(r)] = t[r]
                }
            }
        }

        function St(e, t) {
            return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
        }

        function xt(e, t) {
            if (t && e.setAttribute) {
                var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                    r = n;
                x(t.split(" "), function(e) {
                    e = ee(e), r = r.replace(" " + e + " ", " ")
                }), r !== n && e.setAttribute("class", ee(r))
            }
        }

        function Ct(e, t) {
            if (t && e.setAttribute) {
                var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                    r = n;
                x(t.split(" "), function(e) {
                    e = ee(e), -1 === r.indexOf(" " + e + " ") && (r += e + " ")
                }), r !== n && e.setAttribute("class", ee(r))
            }
        }

        function Et(e, t) {
            if (t)
                if (t.nodeType) e[e.length++] = t;
                else {
                    var n = t.length;
                    if ("number" == typeof n && t.window !== t) {
                        if (n)
                            for (var r = 0; r < n; r++) e[e.length++] = t[r]
                    } else e[e.length++] = t
                }
        }

        function Ot(e, t) {
            return kt(e, "$" + (t || "ngController") + "Controller")
        }

        function kt(e, t, n) {
            e.nodeType === Be && (e = e.documentElement);
            for (var r = B(t) ? t : [t]; e;) {
                for (var i = 0, o = r.length; i < o; i++)
                    if (U(n = a.data(e, r[i]))) return n;
                e = e.parentNode || e.nodeType === We && e.host
            }
        }

        function At(e) {
            for ($t(e, !0); e.firstChild;) e.removeChild(e.firstChild)
        }

        function _t(e, t) {
            t || $t(e);
            var n = e.parentNode;
            n && n.removeChild(e)
        }

        function It(t) {
            function n() {
                e.document.removeEventListener("DOMContentLoaded", n), e.removeEventListener("load", n), t()
            }
            "complete" === e.document.readyState ? e.setTimeout(t) : (e.document.addEventListener("DOMContentLoaded", n), e.addEventListener("load", n))
        }
        var Tt = dt.prototype = {
                ready: It,
                toString: function() {
                    var e = [];
                    return x(this, function(t) {
                        e.push("" + t)
                    }), "[" + e.join(", ") + "]"
                },
                eq: function(e) {
                    return a(e >= 0 ? this[e] : this[this.length + e])
                },
                length: 0,
                push: v,
                sort: [].sort,
                splice: [].splice
            },
            Mt = {};
        x("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
            Mt[f(e)] = e
        });
        var Rt = {};
        x("input,select,option,textarea,button,form,details".split(","), function(e) {
            Rt[e] = !0
        });
        var Nt = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern",
            ngStep: "step"
        };

        function Vt(e, t) {
            var n = Mt[t.toLowerCase()];
            return n && Rt[re(e)] && n
        }

        function Pt(e, t, n) {
            n.call(e, t)
        }

        function Dt(e, t, n) {
            var r = t.relatedTarget;
            r && (r === e || ft.call(e, r)) || n.call(e, t)
        }

        function jt() {
            this.$get = function() {
                return _(dt, {
                    hasClass: function(e, t) {
                        return e.attr && (e = e[0]), St(e, t)
                    },
                    addClass: function(e, t) {
                        return e.attr && (e = e[0]), Ct(e, t)
                    },
                    removeClass: function(e, t) {
                        return e.attr && (e = e[0]), xt(e, t)
                    }
                })
            }
        }

        function Ut(e, t) {
            var n = e && e.$$hashKey;
            if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
            var r = typeof e;
            return n = "function" === r || "object" === r && null !== e ? e.$$hashKey = r + ":" + (t || O)() : r + ":" + e
        }
        x({
            data: bt,
            removeData: yt,
            hasData: function(e) {
                for (var t in Qe[e.ng339]) return !0;
                return !1
            },
            cleanData: function(e) {
                for (var t = 0, n = e.length; t < n; t++) yt(e[t]), mt(e[t])
            }
        }, function(e, t) {
            dt[t] = e
        }), x({
            data: bt,
            inheritedData: kt,
            scope: function(e) {
                return a.data(e, "$scope") || kt(e.parentNode || e, ["$isolateScope", "$scope"])
            },
            isolateScope: function(e) {
                return a.data(e, "$isolateScope") || a.data(e, "$isolateScopeNoTemplate")
            },
            controller: Ot,
            injector: function(e) {
                return kt(e, "$injector")
            },
            removeAttr: function(e, t) {
                e.removeAttribute(t)
            },
            hasClass: St,
            css: function(e, t, n) {
                if (t = function(e) {
                        return rt(e.replace(Xe, "ms-"))
                    }(t), !U(n)) return e.style[t];
                e.style[t] = n
            },
            attr: function(e, t, n) {
                var r, i = e.nodeType;
                if (i !== He && 2 !== i && i !== ze && e.getAttribute) {
                    var o = f(t),
                        a = Mt[o];
                    if (!U(n)) return r = e.getAttribute(t), a && null !== r && (r = o), null === r ? void 0 : r;
                    null === n || !1 === n && a ? e.removeAttribute(t) : e.setAttribute(t, a ? o : n)
                }
            },
            prop: function(e, t, n) {
                if (!U(n)) return e[t];
                e[t] = n
            },
            text: function() {
                return e.$dv = "", e;

                function e(e, t) {
                    if (j(t)) {
                        var n = e.nodeType;
                        return n === Fe || n === He ? e.textContent : ""
                    }
                    e.textContent = t
                }
            }(),
            val: function(e, t) {
                if (j(t)) {
                    if (e.multiple && "select" === re(e)) {
                        var n = [];
                        return x(e.options, function(e) {
                            e.selected && n.push(e.value || e.text)
                        }), n
                    }
                    return e.value
                }
                e.value = t
            },
            html: function(e, t) {
                if (j(t)) return e.innerHTML;
                $t(e, !0), e.innerHTML = t
            },
            empty: At
        }, function(e, t) {
            dt.prototype[t] = function(t, n) {
                var r, i, o = this.length;
                if (e !== At && j(2 === e.length && e !== St && e !== Ot ? t : n)) {
                    if (L(t)) {
                        for (r = 0; r < o; r++)
                            if (e === bt) e(this[r], t);
                            else
                                for (i in t) e(this[r], i, t[i]);
                        return this
                    }
                    for (var a = e.$dv, s = j(a) ? Math.min(o, 1) : o, c = 0; c < s; c++) {
                        var u = e(this[c], t, n);
                        a = a ? a + u : u
                    }
                    return a
                }
                for (r = 0; r < o; r++) e(this[r], t, n);
                return this
            }
        }), x({
            removeData: yt,
            on: function(e, t, n, r) {
                if (U(r)) throw tt("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (lt(e)) {
                    var i = wt(e, !0),
                        o = i.events,
                        a = i.handle;
                    a || (a = i.handle = function(e, t) {
                        var n = function(n, r) {
                            n.isDefaultPrevented = function() {
                                return n.defaultPrevented
                            };
                            var i = t[r || n.type],
                                o = i ? i.length : 0;
                            if (o) {
                                if (j(n.immediatePropagationStopped)) {
                                    var a = n.stopImmediatePropagation;
                                    n.stopImmediatePropagation = function() {
                                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                                    }
                                }
                                n.isImmediatePropagationStopped = function() {
                                    return !0 === n.immediatePropagationStopped
                                };
                                var s = i.specialHandlerWrapper || Pt;
                                o > 1 && (i = Ge(i));
                                for (var c = 0; c < o; c++) n.isImmediatePropagationStopped() || s(e, n, i[c])
                            }
                        };
                        return n.elem = e, n
                    }(e, o));
                    for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], c = s.length, u = function(t, r, i) {
                            var s = o[t];
                            s || ((s = o[t] = []).specialHandlerWrapper = r, "$destroy" === t || i || e.addEventListener(t, a)), s.push(n)
                        }; c--;) t = s[c], et[t] ? (u(et[t], Dt), u(t, void 0, !0)) : u(t)
                }
            },
            off: mt,
            one: function(e, t, n) {
                (e = a(e)).on(t, function r() {
                    e.off(t, n), e.off(t, r)
                }), e.on(t, n)
            },
            replaceWith: function(e, t) {
                var n, r = e.parentNode;
                $t(e), x(new dt(t), function(t) {
                    n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
                })
            },
            children: function(e) {
                var t = [];
                return x(e.childNodes, function(e) {
                    e.nodeType === Fe && t.push(e)
                }), t
            },
            contents: function(e) {
                return e.contentDocument || e.childNodes || []
            },
            append: function(e, t) {
                var n = e.nodeType;
                if (n === Fe || n === We)
                    for (var r = 0, i = (t = new dt(t)).length; r < i; r++) {
                        var o = t[r];
                        e.appendChild(o)
                    }
            },
            prepend: function(e, t) {
                if (e.nodeType === Fe) {
                    var n = e.firstChild;
                    x(new dt(t), function(t) {
                        e.insertBefore(t, n)
                    })
                }
            },
            wrap: function(e, t) {
                var n, r, i;
                n = e, r = a(t).eq(0).clone()[0], (i = n.parentNode) && i.replaceChild(r, n), r.appendChild(n)
            },
            remove: _t,
            detach: function(e) {
                _t(e, !0)
            },
            after: function(e, t) {
                var n = e,
                    r = e.parentNode;
                if (r)
                    for (var i = 0, o = (t = new dt(t)).length; i < o; i++) {
                        var a = t[i];
                        r.insertBefore(a, n.nextSibling), n = a
                    }
            },
            addClass: Ct,
            removeClass: xt,
            toggleClass: function(e, t, n) {
                t && x(t.split(" "), function(t) {
                    var r = n;
                    j(r) && (r = !St(e, t)), (r ? Ct : xt)(e, t)
                })
            },
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== We ? t : null
            },
            next: function(e) {
                return e.nextElementSibling
            },
            find: function(e, t) {
                return e.getElementsByTagName ? e.getElementsByTagName(t) : []
            },
            clone: pt,
            triggerHandler: function(e, t, n) {
                var r, i, o, a = t.type || t,
                    s = wt(e),
                    c = s && s.events,
                    u = c && c[a];
                u && (r = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return !0 === this.defaultPrevented
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0
                    },
                    isImmediatePropagationStopped: function() {
                        return !0 === this.immediatePropagationStopped
                    },
                    stopPropagation: N,
                    type: a,
                    target: e
                }, t.type && (r = _(r, t)), i = Ge(u), o = n ? [r].concat(n) : [r], x(i, function(t) {
                    r.isImmediatePropagationStopped() || t.apply(e, o)
                }))
            }
        }, function(e, t) {
            dt.prototype[t] = function(t, n, r) {
                for (var i, o = 0, s = this.length; o < s; o++) j(i) ? U(i = e(this[o], t, n, r)) && (i = a(i)) : Et(i, e(this[o], t, n, r));
                return U(i) ? i : this
            }
        }), dt.prototype.bind = dt.prototype.on, dt.prototype.unbind = dt.prototype.off;
        var Lt = Object.create(null);

        function qt() {
            this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
        }
        qt.prototype = {
            _idx: function(e) {
                return e === this._lastKey ? this._lastIndex : (this._lastKey = e, this._lastIndex = this._keys.indexOf(e), this._lastIndex)
            },
            _transformKey: function(e) {
                return M(e) ? Lt : e
            },
            get: function(e) {
                e = this._transformKey(e);
                var t = this._idx(e);
                if (-1 !== t) return this._values[t]
            },
            set: function(e, t) {
                e = this._transformKey(e);
                var n = this._idx(e); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = e, this._values[n] = t
            },
            delete: function(e) {
                e = this._transformKey(e);
                var t = this._idx(e);
                return -1 !== t && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
            }
        };
        var Ft = qt,
            Ht = [function() {
                this.$get = [function() {
                    return Ft
                }]
            }],
            zt = /^([^(]+?)=>/,
            Bt = /^[^(]*\(\s*([^)]*)\)/m,
            Wt = /,/,
            Gt = /^\s*(_?)(\S+?)\1\s*$/,
            Kt = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            Jt = i("$injector");

        function Qt(e) {
            return Function.prototype.toString.call(e)
        }

        function Yt(e) {
            var t = Qt(e).replace(Kt, "");
            return t.match(zt) || t.match(Bt)
        }

        function Zt(e, t) {
            t = !0 === t;
            var n = {},
                r = "Provider",
                i = [],
                a = new Ft,
                s = {
                    $provide: {
                        provider: p($),
                        factory: p(v),
                        service: p(function(e, t) {
                            return v(e, ["$injector", function(e) {
                                return e.instantiate(t)
                            }])
                        }),
                        value: p(function(e, t) {
                            return v(e, P(t), !1)
                        }),
                        constant: p(function(e, t) {
                            je(e, "constant"), s[e] = t, l[e] = t
                        }),
                        decorator: function(e, t) {
                            var n = u.get(e + r),
                                i = n.$get;
                            n.$get = function() {
                                var e = f.invoke(i, n);
                                return f.invoke(t, null, {
                                    $delegate: e
                                })
                            }
                        }
                    }
                },
                u = s.$injector = m(s, function(e, t) {
                    throw w.isString(t) && i.push(t), Jt("unpr", "Unknown provider: {0}", i.join(" <- "))
                }),
                l = {},
                h = m(l, function(e, t) {
                    var n = u.get(e + r, t);
                    return f.invoke(n.$get, n, void 0, e)
                }),
                f = h;
            s["$injector" + r] = {
                $get: P(h)
            }, f.modules = u.modules = Le();
            var d = g(e);
            return (f = h.get("$injector")).strictDi = t, x(d, function(e) {
                e && f.invoke(e)
            }), f.loadNewModules = function(e) {
                x(g(e), function(e) {
                    e && f.invoke(e)
                })
            }, f;

            function p(e) {
                return function(t, n) {
                    if (!L(t)) return e(t, n);
                    x(t, E(e))
                }
            }

            function $(e, t) {
                if (je(e, "service"), (G(t) || B(t)) && (t = u.instantiate(t)), !t.$get) throw Jt("pget", "Provider '{0}' must define $get factory method.", e);
                return s[e + r] = t
            }

            function v(e, t, n) {
                return $(e, {
                    $get: !1 !== n ? function(e, t) {
                        return function() {
                            var n = f.invoke(t, this);
                            if (j(n)) throw Jt("undef", "Provider '{0}' must return a value from $get factory method.", e);
                            return n
                        }
                    }(e, t) : t
                })
            }

            function g(e) {
                Pe(j(e) || B(e), "modulesToLoad", "not an array");
                var t, n = [];
                return x(e, function(e) {
                    if (!a.get(e)) {
                        a.set(e, !0);
                        try {
                            F(e) ? (t = c(e), f.modules[e] = t, n = n.concat(g(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : G(e) ? n.push(u.invoke(e)) : B(e) ? n.push(u.invoke(e)) : De(e, "module")
                        } catch (t) {
                            throw B(e) && (e = e[e.length - 1]), t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), Jt("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
                        }
                    }

                    function r(e) {
                        var t, n;
                        for (t = 0, n = e.length; t < n; t++) {
                            var r = e[t],
                                i = u.get(r[0]);
                            i[r[1]].apply(i, r[2])
                        }
                    }
                }), n
            }

            function m(e, a) {
                function c(t, r) {
                    if (e.hasOwnProperty(t)) {
                        if (e[t] === n) throw Jt("cdep", "Circular dependency found: {0}", t + " <- " + i.join(" <- "));
                        return e[t]
                    }
                    try {
                        return i.unshift(t), e[t] = n, e[t] = a(t, r), e[t]
                    } catch (r) {
                        throw e[t] === n && delete e[t], r
                    } finally {
                        i.shift()
                    }
                }

                function u(e, n, r) {
                    for (var i = [], o = Zt.$$annotate(e, t, r), a = 0, s = o.length; a < s; a++) {
                        var u = o[a];
                        if ("string" != typeof u) throw Jt("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                        i.push(n && n.hasOwnProperty(u) ? n[u] : c(u, r))
                    }
                    return i
                }
                return {
                    invoke: function(e, t, n, r) {
                        "string" == typeof n && (r = n, n = null);
                        var i = u(e, n, r);
                        return B(e) && (e = e[e.length - 1]),
                            function(e) {
                                if (o || "function" != typeof e) return !1;
                                var t = e.$$ngIsClass;
                                return Y(t) || (t = e.$$ngIsClass = /^class\b/.test(Qt(e))), t
                            }(e) ? (i.unshift(null), new(Function.prototype.bind.apply(e, i))) : e.apply(t, i)
                    },
                    instantiate: function(e, t, n) {
                        var r = B(e) ? e[e.length - 1] : e,
                            i = u(e, t, n);
                        return i.unshift(null), new(Function.prototype.bind.apply(r, i))
                    },
                    get: c,
                    annotate: Zt.$$annotate,
                    has: function(t) {
                        return s.hasOwnProperty(t + r) || e.hasOwnProperty(t)
                    }
                }
            }
        }

        function Xt() {
            var t = !0;
            this.disableAutoScrolling = function() {
                t = !1
            }, this.$get = ["$window", "$location", "$rootScope", function(n, r, i) {
                var o = n.document;

                function s(e) {
                    if (e) {
                        e.scrollIntoView();
                        var t = function() {
                            var e = c.yOffset;
                            if (G(e)) e = e();
                            else if (ne(e)) {
                                var t = e[0];
                                e = "fixed" !== n.getComputedStyle(t).position ? 0 : t.getBoundingClientRect().bottom
                            } else H(e) || (e = 0);
                            return e
                        }();
                        if (t) {
                            var r = e.getBoundingClientRect().top;
                            n.scrollBy(0, r - t)
                        }
                    } else n.scrollTo(0, 0)
                }

                function c(e) {
                    var t, n, i;
                    (e = F(e) ? e : H(e) ? e.toString() : r.hash()) ? (t = o.getElementById(e)) ? s(t): (n = o.getElementsByName(e), i = null, Array.prototype.some.call(n, function(e) {
                        if ("a" === re(e)) return i = e, !0
                    }), (t = i) ? s(t) : "top" === e && s(null)): s(null)
                }
                return t && i.$watch(function() {
                    return r.hash()
                }, function(t, n) {
                    var r, o;
                    t === n && "" === t || (r = function() {
                        i.$evalAsync(c)
                    }, "complete" === (o = o || e).document.readyState ? o.setTimeout(r) : a(o).on("load", r))
                }), c
            }]
        }
        Zt.$$annotate = function(e, t, n) {
            var r, i;
            if ("function" == typeof e) {
                if (!(r = e.$inject)) {
                    if (r = [], e.length) {
                        if (t) throw F(n) && n || (n = e.name || function(e) {
                            var t = Yt(e);
                            return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
                        }(e)), Jt("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                        x(Yt(e)[1].split(Wt), function(e) {
                            e.replace(Gt, function(e, t, n) {
                                r.push(n)
                            })
                        })
                    }
                    e.$inject = r
                }
            } else B(e) ? (De(e[i = e.length - 1], "fn"), r = e.slice(0, i)) : De(e, "fn", !0);
            return r
        };
        var en = i("$animate"),
            tn = 1;

        function nn(e, t) {
            return e || t ? e ? t ? (B(e) && (e = e.join(" ")), B(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function rn(e) {
            return L(e) ? e : {}
        }
        var on = function() {
                this.$get = N
            },
            an = function() {
                var e = new Ft,
                    t = [];
                this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                    return {
                        enabled: N,
                        on: N,
                        off: N,
                        pin: N,
                        push: function(a, s, c, u) {
                            u && u(), (c = c || {}).from && a.css(c.from), c.to && a.css(c.to), (c.addClass || c.removeClass) && function(n, a, s) {
                                var c = e.get(n) || {},
                                    u = i(c, a, !0),
                                    l = i(c, s, !1);
                                (u || l) && (e.set(n, c), t.push(n), 1 === t.length && r.$$postDigest(o))
                            }(a, c.addClass, c.removeClass);
                            var l = new n;
                            return l.complete(), l
                        }
                    };

                    function i(e, t, n) {
                        var r = !1;
                        return t && x(t = F(t) ? t.split(" ") : B(t) ? t : [], function(t) {
                            t && (r = !0, e[t] = n)
                        }), r
                    }

                    function o() {
                        x(t, function(t) {
                            var n = e.get(t);
                            if (n) {
                                var r = function(e) {
                                        F(e) && (e = e.split(" "));
                                        var t = Le();
                                        return x(e, function(e) {
                                            e.length && (t[e] = !0)
                                        }), t
                                    }(t.attr("class")),
                                    i = "",
                                    o = "";
                                x(n, function(e, t) {
                                    e !== !!r[t] && (e ? i += (i.length ? " " : "") + t : o += (o.length ? " " : "") + t)
                                }), x(t, function(e) {
                                    i && Ct(e, i), o && xt(e, o)
                                }), e.delete(t)
                            }
                        }), t.length = 0
                    }
                }]
            },
            sn = ["$provide", function(e) {
                var t = this,
                    n = null,
                    r = null;
                this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                    if (n && "." !== n.charAt(0)) throw en("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                    var i = n + "-animation";
                    t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
                }, this.customFilter = function(e) {
                    return 1 === arguments.length && (r = G(e) ? e : null), r
                }, this.classNameFilter = function(e) {
                    if (1 === arguments.length && ((n = e instanceof RegExp ? e : null) && new RegExp("[(\\s|\\/)]ng-animate[(\\s|\\/)]").test(n.toString()))) throw n = null, en("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate");
                    return n
                }, this.$get = ["$$animateQueue", function(e) {
                    function t(e, t, n) {
                        if (n) {
                            var r = function(e) {
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    if (n.nodeType === tn) return n
                                }
                            }(n);
                            !r || r.parentNode || r.previousElementSibling || (n = null)
                        }
                        n ? n.after(e) : t.prepend(e)
                    }
                    return {
                        on: e.on,
                        off: e.off,
                        pin: e.pin,
                        enabled: e.enabled,
                        cancel: function(e) {
                            e.cancel && e.cancel()
                        },
                        enter: function(n, r, i, o) {
                            return r = r && a(r), i = i && a(i), t(n, r = r || i.parent(), i), e.push(n, "enter", rn(o))
                        },
                        move: function(n, r, i, o) {
                            return r = r && a(r), i = i && a(i), t(n, r = r || i.parent(), i), e.push(n, "move", rn(o))
                        },
                        leave: function(t, n) {
                            return e.push(t, "leave", rn(n), function() {
                                t.remove()
                            })
                        },
                        addClass: function(t, n, r) {
                            return (r = rn(r)).addClass = nn(r.addclass, n), e.push(t, "addClass", r)
                        },
                        removeClass: function(t, n, r) {
                            return (r = rn(r)).removeClass = nn(r.removeClass, n), e.push(t, "removeClass", r)
                        },
                        setClass: function(t, n, r, i) {
                            return (i = rn(i)).addClass = nn(i.addClass, n), i.removeClass = nn(i.removeClass, r), e.push(t, "setClass", i)
                        },
                        animate: function(t, n, r, i, o) {
                            return (o = rn(o)).from = o.from ? _(o.from, n) : n, o.to = o.to ? _(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = nn(o.tempClasses, i), e.push(t, "animate", o)
                        }
                    }
                }]
            }],
            cn = function() {
                this.$get = ["$$rAF", function(e) {
                    var t = [];

                    function n(n) {
                        t.push(n), t.length > 1 || e(function() {
                            for (var e = 0; e < t.length; e++) t[e]();
                            t = []
                        })
                    }
                    return function() {
                        var e = !1;
                        return n(function() {
                                e = !0
                            }),
                            function(t) {
                                e ? t() : n(t)
                            }
                    }
                }]
            },
            un = function() {
                this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(e, t, n, r, i) {
                    function o(e) {
                        this.setHost(e);
                        var t = n();
                        this._doneCallbacks = [], this._tick = function(e) {
                            r() ? function(e) {
                                i(e, 0, !1)
                            }(e) : t(e)
                        }, this._state = 0
                    }
                    return o.chain = function(e, t) {
                        var n = 0;
                        ! function r() {
                            if (n === e.length) return void t(!0);
                            e[n](function(e) {
                                !1 !== e ? (n++, r()) : t(!1)
                            })
                        }()
                    }, o.all = function(e, t) {
                        var n = 0,
                            r = !0;

                        function i(i) {
                            r = r && i, ++n === e.length && t(r)
                        }
                        x(e, function(e) {
                            e.done(i)
                        })
                    }, o.prototype = {
                        setHost: function(e) {
                            this.host = e || {}
                        },
                        done: function(e) {
                            2 === this._state ? e() : this._doneCallbacks.push(e)
                        },
                        progress: N,
                        getPromise: function() {
                            if (!this.promise) {
                                var t = this;
                                this.promise = e(function(e, n) {
                                    t.done(function(t) {
                                        !1 === t ? n() : e()
                                    })
                                })
                            }
                            return this.promise
                        },
                        then: function(e, t) {
                            return this.getPromise().then(e, t)
                        },
                        catch: function(e) {
                            return this.getPromise().catch(e)
                        },
                        finally: function(e) {
                            return this.getPromise().finally(e)
                        },
                        pause: function() {
                            this.host.pause && this.host.pause()
                        },
                        resume: function() {
                            this.host.resume && this.host.resume()
                        },
                        end: function() {
                            this.host.end && this.host.end(), this._resolve(!0)
                        },
                        cancel: function() {
                            this.host.cancel && this.host.cancel(), this._resolve(!1)
                        },
                        complete: function(e) {
                            var t = this;
                            0 === t._state && (t._state = 1, t._tick(function() {
                                t._resolve(e)
                            }))
                        },
                        _resolve: function(e) {
                            2 !== this._state && (x(this._doneCallbacks, function(t) {
                                t(e)
                            }), this._doneCallbacks.length = 0, this._state = 2)
                        }
                    }, o
                }]
            },
            ln = function() {
                this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
                    return function(t, r) {
                        var i = r || {};
                        i.$$prepared || (i = ae(i)), i.cleanupStyles && (i.from = i.to = null), i.from && (t.css(i.from), i.from = null);
                        var o, a = new n;
                        return {
                            start: s,
                            end: s
                        };

                        function s() {
                            return e(function() {
                                ! function() {
                                    i.addClass && (t.addClass(i.addClass), i.addClass = null);
                                    i.removeClass && (t.removeClass(i.removeClass), i.removeClass = null);
                                    i.to && (t.css(i.to), i.to = null)
                                }(), o || a.complete(), o = !0
                            }), a
                        }
                    }
                }]
            };

        function hn() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
                return new function(e, t, n, r) {
                    var i = this,
                        o = e.location,
                        s = e.history,
                        c = e.setTimeout,
                        u = e.clearTimeout,
                        l = {};
                    i.isMock = !1;
                    var h = 0,
                        f = [];

                    function d(e) {
                        try {
                            e.apply(null, fe(arguments, 1))
                        } finally {
                            if (0 == --h)
                                for (; f.length;) try {
                                    f.pop()()
                                } catch (e) {
                                    n.error(e)
                                }
                        }
                    }
                    i.$$completeOutstandingRequest = d, i.$$incOutstandingRequestCount = function() {
                        h++
                    }, i.notifyWhenNoOutstandingRequests = function(e) {
                        0 === h ? e() : f.push(e)
                    };
                    var p, $, v = o.href,
                        g = t.find("base"),
                        m = null,
                        y = r.history ? function() {
                            try {
                                return s.state
                            } catch (e) {}
                        } : N;
                    E(), i.url = function(t, n, a) {
                        if (j(a) && (a = null), o !== e.location && (o = e.location), s !== e.history && (s = e.history), t) {
                            var c = $ === a;
                            if (v === t && (!r.history || c)) return i;
                            var u = v && sr(v) === sr(t);
                            return v = t, $ = a, !r.history || u && c ? (u || (m = t), n ? o.replace(t) : u ? o.hash = function(e) {
                                var t = e.indexOf("#");
                                return -1 === t ? "" : e.substr(t)
                            }(t) : o.href = t, o.href !== t && (m = t)) : (s[n ? "replaceState" : "pushState"](a, "", t), E()), m && (m = t), i
                        }
                        return m || o.href
                    }, i.state = function() {
                        return p
                    };
                    var w = [],
                        b = !1;

                    function S() {
                        m = null, O()
                    }
                    var C = null;

                    function E() {
                        ce(p = j(p = y()) ? null : p, C) && (p = C), C = p, $ = p
                    }

                    function O() {
                        var e = $;
                        E(), v === i.url() && e === p || (v = i.url(), $ = p, x(w, function(e) {
                            e(i.url(), p)
                        }))
                    }
                    i.onUrlChange = function(t) {
                        return b || (r.history && a(e).on("popstate", S), a(e).on("hashchange", S), b = !0), w.push(t), t
                    }, i.$$applicationDestroyed = function() {
                        a(e).off("hashchange popstate", S)
                    }, i.$$checkUrlChange = O, i.baseHref = function() {
                        var e = g.attr("href");
                        return e ? e.replace(/^(https?:)?\/\/[^/]*/, "") : ""
                    }, i.defer = function(e, t) {
                        var n;
                        return h++, n = c(function() {
                            delete l[n], d(e)
                        }, t || 0), l[n] = !0, n
                    }, i.defer.cancel = function(e) {
                        return !!l[e] && (delete l[e], u(e), d(N), !0)
                    }
                }(e, r, t, n)
            }]
        }

        function fn() {
            this.$get = function() {
                var e = {};

                function t(t, n) {
                    if (t in e) throw i("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                    var r = 0,
                        o = _({}, n, {
                            id: t
                        }),
                        a = Le(),
                        s = n && n.capacity || Number.MAX_VALUE,
                        c = Le(),
                        u = null,
                        l = null;
                    return e[t] = {
                        put: function(e, t) {
                            if (!j(t)) {
                                if (s < Number.MAX_VALUE) h(c[e] || (c[e] = {
                                    key: e
                                }));
                                return e in a || r++, a[e] = t, r > s && this.remove(l.key), t
                            }
                        },
                        get: function(e) {
                            if (s < Number.MAX_VALUE) {
                                var t = c[e];
                                if (!t) return;
                                h(t)
                            }
                            return a[e]
                        },
                        remove: function(e) {
                            if (s < Number.MAX_VALUE) {
                                var t = c[e];
                                if (!t) return;
                                t === u && (u = t.p), t === l && (l = t.n), f(t.n, t.p), delete c[e]
                            }
                            e in a && (delete a[e], r--)
                        },
                        removeAll: function() {
                            a = Le(), r = 0, c = Le(), u = l = null
                        },
                        destroy: function() {
                            a = null, o = null, c = null, delete e[t]
                        },
                        info: function() {
                            return _({}, o, {
                                size: r
                            })
                        }
                    };

                    function h(e) {
                        e !== u && (l ? l === e && (l = e.n) : l = e, f(e.n, e.p), f(e, u), (u = e).n = null)
                    }

                    function f(e, t) {
                        e !== t && (e && (e.p = t), t && (t.n = e))
                    }
                }
                return t.info = function() {
                    var t = {};
                    return x(e, function(e, n) {
                        t[n] = e.info()
                    }), t
                }, t.get = function(t) {
                    return e[t]
                }, t
            }
        }

        function dn() {
            this.$get = ["$cacheFactory", function(e) {
                return e("templates")
            }]
        }
        var pn = i("$compile");
        var $n = new function() {};

        function vn(t, n) {
            var r = {},
                i = "Directive",
                s = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
                c = /(([\w-]+)(?::([^;]+))?;?)/,
                u = function(e) {
                    var t, n = {},
                        r = e.split(",");
                    for (t = 0; t < r.length; t++) n[r[t]] = !0;
                    return n
                }("ngSrc,ngSrcset,src,srcset"),
                l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                d = /^(on[a-z]+|formaction)$/,
                p = Le();

            function $(e, t, n) {
                var r = /^([@&<]|=(\*?))(\??)\s*([\w$]*)$/,
                    i = Le();
                return x(e, function(e, o) {
                    if ((e = e.trim()) in p) i[o] = p[e];
                    else {
                        var a = e.match(r);
                        if (!a) throw pn("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                        i[o] = {
                            mode: a[1][0],
                            collection: "*" === a[2],
                            optional: "?" === a[3],
                            attrName: a[4] || o
                        }, a[4] && (p[e] = i[o])
                    }
                }), i
            }

            function v(e, t) {
                var n = {
                    isolateScope: null,
                    bindToController: null
                };
                if (L(e.scope) && (!0 === e.bindToController ? (n.bindToController = $(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = $(e.scope, t, !1)), L(e.bindToController) && (n.bindToController = $(e.bindToController, t, !0)), n.bindToController && !e.controller) throw pn("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                return n
            }
            this.directive = function e(n, o) {
                return Pe(n, "name"), je(n, "directive"), F(n) ? (! function(e) {
                    var t = e.charAt(0);
                    if (!t || t !== f(t)) throw pn("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
                    if (e !== e.trim()) throw pn("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
                }(n), Pe(o, "directiveFactory"), r.hasOwnProperty(n) || (r[n] = [], t.factory(n + i, ["$injector", "$exceptionHandler", function(e, t) {
                    var i = [];
                    return x(r[n], function(r, o) {
                        try {
                            var a = e.invoke(r);
                            G(a) ? a = {
                                compile: P(a)
                            } : !a.compile && a.link && (a.compile = P(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || n, a.require = function(e) {
                                var t = e.require || e.controller && e.name;
                                return !B(t) && L(t) && x(t, function(e, n) {
                                    var r = e.match(l);
                                    e.substring(r[0].length) || (t[n] = r[0] + n)
                                }), t
                            }(a), a.restrict = function(e, t) {
                                if (e && (!F(e) || !/[EACM]/.test(e))) throw pn("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
                                return e || "EA"
                            }(a.restrict, n), a.$$moduleName = r.$$moduleName, i.push(a)
                        } catch (e) {
                            t(e)
                        }
                    }), i
                }])), r[n].push(o)) : x(n, E(e)), this
            }, this.component = function e(t, n) {
                if (!F(t)) return x(t, E(de(this, e))), this;
                var r = n.controller || function() {};

                function i(e) {
                    function t(t) {
                        return G(t) || B(t) ? function(n, r) {
                            return e.invoke(t, this, {
                                $element: n,
                                $attrs: r
                            })
                        } : t
                    }
                    var i = n.template || n.templateUrl ? n.template : "",
                        o = {
                            controller: r,
                            controllerAs: function(e, t) {
                                if (t && F(t)) return t;
                                if (F(e)) {
                                    var n = Cn.exec(e);
                                    if (n) return n[3]
                                }
                            }(n.controller) || n.controllerAs || "$ctrl",
                            template: t(i),
                            templateUrl: t(n.templateUrl),
                            transclude: n.transclude,
                            scope: {},
                            bindToController: n.bindings || {},
                            restrict: "E",
                            require: n.require
                        };
                    return x(n, function(e, t) {
                        "$" === t.charAt(0) && (o[t] = e)
                    }), o
                }
                return x(n, function(e, t) {
                    "$" === t.charAt(0) && (i[t] = e, G(r) && (r[t] = e))
                }), i.$inject = ["$injector"], this.directive(t, i)
            }, this.aHrefSanitizationWhitelist = function(e) {
                return U(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function(e) {
                return U(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
            };
            var m = !0;
            this.debugInfoEnabled = function(e) {
                return U(e) ? (m = e, this) : m
            };
            var y = !1;
            this.strictComponentBindingsEnabled = function(e) {
                return U(e) ? (y = e, this) : y
            };
            var w = 10;
            this.onChangesTtl = function(e) {
                return arguments.length ? (w = e, this) : w
            };
            var b = !0;
            this.commentDirectivesEnabled = function(e) {
                return arguments.length ? (b = e, this) : b
            };
            var S = !0;
            this.cssClassDirectivesEnabled = function(e) {
                return arguments.length ? (S = e, this) : S
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function(t, n, p, $, C, E, O, k, A) {
                var I, T = /^\w/,
                    M = e.document.createElement("div"),
                    P = b,
                    D = S,
                    U = w;

                function q() {
                    try {
                        if (!--U) throw I = void 0, pn("infchng", "{0} $onChanges() iterations reached. Aborting!\n", w);
                        O.$apply(function() {
                            for (var e = 0, t = I.length; e < t; ++e) try {
                                I[e]()
                            } catch (e) {
                                p(e)
                            }
                            I = void 0
                        })
                    } finally {
                        U++
                    }
                }

                function H(e, t) {
                    if (t) {
                        var n, r, i, o = Object.keys(t);
                        for (n = 0, r = o.length; n < r; n++) this[i = o[n]] = t[i]
                    } else this.$attr = {};
                    this.$$element = e
                }

                function z(e, t) {
                    try {
                        e.addClass(t)
                    } catch (e) {}
                }
                H.prototype = {
                    $normalize: wn,
                    $addClass: function(e) {
                        e && e.length > 0 && A.addClass(this.$$element, e)
                    },
                    $removeClass: function(e) {
                        e && e.length > 0 && A.removeClass(this.$$element, e)
                    },
                    $updateClass: function(e, t) {
                        var n = bn(e, t);
                        n && n.length && A.addClass(this.$$element, n);
                        var r = bn(t, e);
                        r && r.length && A.removeClass(this.$$element, r)
                    },
                    $set: function(e, t, n, r) {
                        var i = Vt(this.$$element[0], e),
                            o = Nt[e],
                            a = e;
                        if (i ? (this.$$element.prop(e, t), r = i) : o && (this[o] = t, a = o), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e]) || (this.$attr[e] = r = Ne(e, "-")), "img" === re(this.$$element) && "srcset" === e && t) {
                            if (!F(t)) throw pn("srcset", "Can't pass trusted values to `$set('srcset', value)`: \"{0}\"", t.toString());
                            for (var s = "", c = ee(t), u = /\s/.test(c) ? /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/ : /(,)/, l = c.split(u), h = Math.floor(l.length / 2), f = 0; f < h; f++) {
                                var d = 2 * f;
                                s += k.getTrustedMediaUrl(ee(l[d])), s += " " + ee(l[d + 1])
                            }
                            var $ = ee(l[2 * f]).split(/\s/);
                            s += k.getTrustedMediaUrl(ee($[0])), 2 === $.length && (s += " " + ee($[1])), this[e] = t = s
                        }!1 !== n && (null === t || j(t) ? this.$$element.removeAttr(r) : T.test(r) ? this.$$element.attr(r, t) : function(e, t, n) {
                            M.innerHTML = "<span " + t + ">";
                            var r = M.firstChild.attributes,
                                i = r[0];
                            r.removeNamedItem(i.name), i.value = n, e.attributes.setNamedItem(i)
                        }(this.$$element[0], r, t));
                        var v = this.$$observers;
                        v && x(v[a], function(e) {
                            try {
                                e(t)
                            } catch (e) {
                                p(e)
                            }
                        })
                    },
                    $observe: function(e, t) {
                        var n = this,
                            r = n.$$observers || (n.$$observers = Le()),
                            i = r[e] || (r[e] = []);
                        return i.push(t), O.$evalAsync(function() {
                                i.$$inter || !n.hasOwnProperty(e) || j(n[e]) || t(n[e])
                            }),
                            function() {
                                oe(i, t)
                            }
                    }
                };
                var K = n.startSymbol(),
                    J = n.endSymbol(),
                    Z = "{{" === K && "}}" === J ? V : function(e) {
                        return e.replace(/\{\{/g, K).replace(/}}/g, J)
                    },
                    X = /^ngAttr[A-Z]/,
                    te = /^(.+)Start$/;
                return ne.$$addBindingInfo = m ? function(e, t) {
                    var n = e.data("$binding") || [];
                    B(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
                } : N, ne.$$addBindingClass = m ? function(e) {
                    z(e, "ng-binding")
                } : N, ne.$$addScopeInfo = m ? function(e, t, n, r) {
                    var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    e.data(i, t)
                } : N, ne.$$addScopeClass = m ? function(e, t) {
                    z(e, t ? "ng-isolate-scope" : "ng-scope")
                } : N, ne.$$createComment = function(t, n) {
                    var r = "";
                    return m && (r = " " + (t || "") + ": ", n && (r += n + " ")), e.document.createComment(r)
                }, ne;

                function ne(e, t, n, r, i) {
                    e instanceof a || (e = a(e));
                    var o = ie(e, t, e, n, r, i);
                    ne.$$addScopeClass(e);
                    var s = null;
                    return function(t, n, r) {
                        if (!e) throw pn("multilink", "This element has already been linked.");
                        Pe(t, "scope"), i && i.needsNewScope && (t = t.$parent.$new());
                        var c, u, l, h = (r = r || {}).parentBoundTranscludeFn,
                            f = r.transcludeControllers,
                            d = r.futureParentElement;
                        if (h && h.$$boundTransclude && (h = h.$$boundTransclude), s || (u = (c = d) && c[0], s = u && "foreignobject" !== re(u) && g.call(u).match(/SVG/) ? "svg" : "html"), l = "html" !== s ? a(Oe(s, a("<div></div>").append(e).html())) : n ? Tt.clone.call(e) : e, f)
                            for (var p in f) l.data("$" + p + "Controller", f[p].instance);
                        return ne.$$addScopeInfo(l, t), n && n(l, t), o && o(t, l, l, h), n || (e = o = null), l
                    }
                }

                function ie(e, t, n, r, i, s) {
                    for (var c, u, l, h, f, d, p, $ = [], v = B(e) || e instanceof a, g = 0; g < e.length; g++) c = new H, 11 === o && ae(e, g, v), (l = (u = le(e[g], [], c, 0 === g ? r : void 0, i)).length ? ve(u, e[g], c, t, n, null, [], [], s) : null) && l.scope && ne.$$addScopeClass(c.$$element), f = l && l.terminal || !(h = e[g].childNodes) || !h.length ? null : ie(h, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t), (l || f) && ($.push(g, l, f), d = !0, p = p || l), s = null;
                    return d ? function(e, n, r, i) {
                        var o, s, c, u, l, h, f, d, v;
                        if (p) {
                            var g = n.length;
                            for (v = new Array(g), l = 0; l < $.length; l += 3) f = $[l], v[f] = n[f]
                        } else v = n;
                        for (l = 0, h = $.length; l < h;) c = v[$[l++]], o = $[l++], s = $[l++], o ? (o.scope ? (u = e.$new(), ne.$$addScopeInfo(a(c), u)) : u = e, d = o.transcludeOnThisElement ? ue(e, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && t ? ue(e, t) : null, o(s, u, c, r, d)) : s && s(e, c.childNodes, void 0, i)
                    } : null
                }

                function ae(e, t, n) {
                    var r, i = e[t],
                        o = i.parentNode;
                    if (i.nodeType === He)
                        for (;
                            (r = o ? i.nextSibling : e[t + 1]) && r.nodeType === He;) i.nodeValue = i.nodeValue + r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === e[t + 1] && e.splice(t + 1, 1)
                }

                function ue(e, t, n) {
                    function r(r, i, o, a, s) {
                        return r || ((r = e.$new(!1, s)).$$transcluded = !0), t(r, i, {
                            parentBoundTranscludeFn: n,
                            transcludeControllers: o,
                            futureParentElement: a
                        })
                    }
                    var i = r.$$slots = Le();
                    for (var o in t.$$slots) t.$$slots[o] ? i[o] = ue(e, t.$$slots[o], n) : i[o] = null;
                    return r
                }

                function le(e, t, r, i, o) {
                    var a, u, l, h = e.nodeType,
                        f = r.$attr;
                    switch (h) {
                        case Fe:
                            ye(t, wn(u = re(e)), "E", i, o);
                            for (var d, p, $, v, g, m, y = e.attributes, w = 0, b = y && y.length; w < b; w++) {
                                var S = !1,
                                    x = !1;
                                p = (d = y[w]).name, g = d.value, v = wn(p), (m = X.test(v)) && (p = p.replace(mn, "").substr(8).replace(/_(.)/g, function(e, t) {
                                    return t.toUpperCase()
                                }));
                                var C = v.match(te);
                                C && we(C[1]) && (S = p, x = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6)), f[$ = wn(p.toLowerCase())] = p, !m && r.hasOwnProperty($) || (r[$] = g, Vt(e, $) && (r[$] = !0)), ke(e, t, g, $, m), ye(t, $, "A", i, o, S, x)
                            }
                            if ("input" === u && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), !D) break;
                            if (L(l = e.className) && (l = l.animVal), F(l) && "" !== l)
                                for (; a = c.exec(l);) ye(t, $ = wn(a[2]), "C", i, o) && (r[$] = ee(a[3])), l = l.substr(a.index + a[0].length);
                            break;
                        case He:
                            ! function(e, t) {
                                var r = n(t, !0);
                                r && e.push({
                                    priority: 0,
                                    compile: function(e) {
                                        var t = e.parent(),
                                            n = !!t.length;
                                        return n && ne.$$addBindingClass(t),
                                            function(e, t) {
                                                var i = t.parent();
                                                n || ne.$$addBindingClass(i), ne.$$addBindingInfo(i, r.expressions), e.$watch(r, function(e) {
                                                    t[0].nodeValue = e
                                                })
                                            }
                                    }
                                })
                            }(t, e.nodeValue);
                            break;
                        case ze:
                            if (!P) break;
                            ! function(e, t, n, r, i) {
                                try {
                                    var o = s.exec(e.nodeValue);
                                    if (o) {
                                        var a = wn(o[1]);
                                        ye(t, a, "M", r, i) && (n[a] = ee(o[2]))
                                    }
                                } catch (e) {}
                            }(e, t, r, i, o)
                    }
                    return t.sort(Ce), t
                }

                function he(e, t, n) {
                    var r = [],
                        i = 0;
                    if (t && e.hasAttribute && e.hasAttribute(t))
                        do {
                            if (!e) throw pn("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                            e.nodeType === Fe && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                        } while (i > 0);
                    else r.push(e);
                    return a(r)
                }

                function pe(e, t, n) {
                    return function(r, i, o, a, s) {
                        return i = he(i[0], t, n), e(r, i, o, a, s)
                    }
                }

                function $e(e, t, n, r, i, o) {
                    var a;
                    return e ? ne(t, n, r, i, o) : function() {
                        return a || (a = ne(t, n, r, i, o), t = n = o = null), a.apply(this, arguments)
                    }
                }

                function ve(e, t, n, r, i, o, s, c, u) {
                    u = u || {};
                    for (var l, h, f, d, $, v = -Number.MAX_VALUE, g = u.newScopeDirective, m = u.controllerDirectives, y = u.newIsolateScopeDirective, w = u.templateDirective, b = u.nonTlbTranscludeDirective, S = !1, C = !1, O = u.hasElementTranscludeDirective, k = n.$$element = a(t), A = o, I = r, T = !1, M = !1, R = 0, N = e.length; R < N; R++) {
                        var V = (l = e[R]).$$start,
                            P = l.$$end;
                        if (V && (k = he(t, V, P)), f = void 0, v > l.priority) break;
                        if (($ = l.scope) && (l.templateUrl || (L($) ? (Ee("new/isolated scope", y || g, l, k), y = l) : Ee("new/isolated scope", y, l, k)), g = g || l), h = l.name, !T && (l.replace && (l.templateUrl || l.template) || l.transclude && !l.$$tlb)) {
                            for (var D, U = R + 1; D = e[U++];)
                                if (D.transclude && !D.$$tlb || D.replace && (D.templateUrl || D.template)) {
                                    M = !0;
                                    break
                                } T = !0
                        }
                        if (!l.templateUrl && l.controller && (m = m || Le(), Ee("'" + h + "' controller", m[h], l, k), m[h] = l), $ = l.transclude)
                            if (S = !0, l.$$tlb || (Ee("transclusion", b, l, k), b = l), "element" === $) O = !0, v = l.priority, f = k, k = n.$$element = a(ne.$$createComment(h, n[h])), t = k[0], Ae(i, fe(f), t), I = $e(M, f, r, v, A && A.name, {
                                nonTlbTranscludeDirective: b
                            });
                            else {
                                var q = Le();
                                if (L($)) {
                                    f = [];
                                    var F = Le(),
                                        z = Le();
                                    for (var W in x($, function(e, t) {
                                            var n = "?" === e.charAt(0);
                                            e = n ? e.substring(1) : e, F[e] = t, q[t] = null, z[t] = n
                                        }), x(k.contents(), function(e) {
                                            var t = F[wn(re(e))];
                                            t ? (z[t] = !0, q[t] = q[t] || [], q[t].push(e)) : f.push(e)
                                        }), x(z, function(e, t) {
                                            if (!e) throw pn("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                                        }), q) q[W] && (q[W] = $e(M, q[W], r))
                                } else f = a(pt(t)).contents();
                                k.empty(), (I = $e(M, f, r, void 0, void 0, {
                                    needsNewScope: l.$$isolateScope || l.$$newScope
                                })).$$slots = q
                            } if (l.template)
                            if (C = !0, Ee("template", w, l, k), w = l, $ = G(l.template) ? l.template(k, n) : l.template, $ = Z($), l.replace) {
                                if (A = l, f = ut($) ? [] : Sn(Oe(l.templateNamespace, ee($))), t = f[0], 1 !== f.length || t.nodeType !== Fe) throw pn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", h, "");
                                Ae(i, k, t);
                                var K = {
                                        $attr: {}
                                    },
                                    J = le(t, [], K),
                                    Y = e.splice(R + 1, e.length - (R + 1));
                                (y || g) && me(J, y, g), e = e.concat(J).concat(Y), Se(n, K), N = e.length
                            } else k.html($);
                        if (l.templateUrl) C = !0, Ee("template", w, l, k), w = l, l.replace && (A = l), ie = xe(e.splice(R, e.length - R), k, n, i, S && I, s, c, {
                            controllerDirectives: m,
                            newScopeDirective: g !== l && g,
                            newIsolateScopeDirective: y,
                            templateDirective: w,
                            nonTlbTranscludeDirective: b
                        }), N = e.length;
                        else if (l.compile) try {
                            d = l.compile(k, n, I);
                            var X = l.$$originalDirective || l;
                            G(d) ? te(null, de(X, d), V, P) : d && te(de(X, d.pre), de(X, d.post), V, P)
                        } catch (e) {
                            p(e, be(k))
                        }
                        l.terminal && (ie.terminal = !0, v = Math.max(v, l.priority))
                    }
                    return ie.scope = g && !0 === g.scope, ie.transcludeOnThisElement = S, ie.templateOnThisElement = C, ie.transclude = I, u.hasElementTranscludeDirective = O, ie;

                    function te(e, t, n, r) {
                        e && (n && (e = pe(e, n, r)), e.require = l.require, e.directiveName = h, (y === l || l.$$isolateScope) && (e = _e(e, {
                            isolateScope: !0
                        })), s.push(e)), t && (n && (t = pe(t, n, r)), t.require = l.require, t.directiveName = h, (y === l || l.$$isolateScope) && (t = _e(t, {
                            isolateScope: !0
                        })), c.push(t))
                    }

                    function ie(e, r, i, o, u) {
                        var l, h, f, d, $, v, b, S, C, k;
                        for (var A in t === i ? (C = n, S = n.$$element) : C = new H(S = a(i), n), $ = r, y ? d = r.$new(!0) : g && ($ = r.$parent), u && ((b = function(e, t, n, r) {
                                var i;
                                Q(e) || (r = n, n = t, t = e, e = void 0);
                                O && (i = v);
                                n || (n = O ? S.parent() : S);
                                if (!r) return u(e, t, i, n, R);
                                var o = u.$$slots[r];
                                if (o) return o(e, t, i, n, R);
                                if (j(o)) throw pn("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, be(S))
                            }).$$boundTransclude = u, b.isSlotFilled = function(e) {
                                return !!u.$$slots[e]
                            }), m && (v = function(e, t, n, r, i, o, a) {
                                var s = Le();
                                for (var c in r) {
                                    var u = r[c],
                                        l = {
                                            $scope: u === a || u.$$isolateScope ? i : o,
                                            $element: e,
                                            $attrs: t,
                                            $transclude: n
                                        },
                                        h = u.controller;
                                    "@" === h && (h = t[u.name]);
                                    var f = E(h, l, !0, u.controllerAs);
                                    s[u.name] = f, e.data("$" + u.name + "Controller", f.instance)
                                }
                                return s
                            }(S, C, b, m, d, r, y)), y && (ne.$$addScopeInfo(S, d, !0, !(w && (w === y || w === y.$$originalDirective))), ne.$$addScopeClass(S, !0), d.$$isolateBindings = y.$$isolateBindings, (k = Me(r, C, d, d.$$isolateBindings, y)).removeWatches && d.$on("$destroy", k.removeWatches)), v) {
                            var I = m[A],
                                T = v[A],
                                M = I.$$bindings.bindToController;
                            T.instance = T(), S.data("$" + I.name + "Controller", T.instance), T.bindingInfo = Me($, C, T.instance, M, I)
                        }
                        for (x(m, function(e, t) {
                                var n = e.require;
                                e.bindToController && !B(n) && L(n) && _(v[t].instance, ge(t, n, S, v))
                            }), x(v, function(e) {
                                var t = e.instance;
                                if (G(t.$onChanges)) try {
                                    t.$onChanges(e.bindingInfo.initialChanges)
                                } catch (e) {
                                    p(e)
                                }
                                if (G(t.$onInit)) try {
                                    t.$onInit()
                                } catch (e) {
                                    p(e)
                                }
                                G(t.$doCheck) && ($.$watch(function() {
                                    t.$doCheck()
                                }), t.$doCheck()), G(t.$onDestroy) && $.$on("$destroy", function() {
                                    t.$onDestroy()
                                })
                            }), l = 0, h = s.length; l < h; l++) Ie(f = s[l], f.isolateScope ? d : r, S, C, f.require && ge(f.directiveName, f.require, S, v), b);
                        var R = r;
                        for (y && (y.template || null === y.templateUrl) && (R = d), e && e(R, i.childNodes, void 0, u), l = c.length - 1; l >= 0; l--) Ie(f = c[l], f.isolateScope ? d : r, S, C, f.require && ge(f.directiveName, f.require, S, v), b);
                        x(v, function(e) {
                            var t = e.instance;
                            G(t.$postLink) && t.$postLink()
                        })
                    }
                }

                function ge(e, t, n, r) {
                    var i;
                    if (F(t)) {
                        var o = t.match(l),
                            a = t.substring(o[0].length),
                            s = o[1] || o[3],
                            c = "?" === o[2];
                        if ("^^" === s ? n = n.parent() : i = (i = r && r[a]) && i.instance, !i) {
                            var u = "$" + a + "Controller";
                            i = s ? n.inheritedData(u) : n.data(u)
                        }
                        if (!i && !c) throw pn("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, e)
                    } else if (B(t)) {
                        i = [];
                        for (var h = 0, f = t.length; h < f; h++) i[h] = ge(e, t[h], n, r)
                    } else L(t) && (i = {}, x(t, function(t, o) {
                        i[o] = ge(e, t, n, r)
                    }));
                    return i || null
                }

                function me(e, t, n) {
                    for (var r = 0, i = e.length; r < i; r++) e[r] = R(e[r], {
                        $$isolateScope: t,
                        $$newScope: n
                    })
                }

                function ye(e, n, o, a, s, c, u) {
                    if (n === s) return null;
                    var l = null;
                    if (r.hasOwnProperty(n))
                        for (var h, f = t.get(n + i), d = 0, p = f.length; d < p; d++)
                            if (h = f[d], (j(a) || a > h.priority) && -1 !== h.restrict.indexOf(o)) {
                                if (c && (h = R(h, {
                                        $$start: c,
                                        $$end: u
                                    })), !h.$$bindings) {
                                    var $ = h.$$bindings = v(h, h.name);
                                    L($.isolateScope) && (h.$$isolateBindings = $.isolateScope)
                                }
                                e.push(h), l = h
                            } return l
                }

                function we(e) {
                    if (r.hasOwnProperty(e))
                        for (var n = t.get(e + i), o = 0, a = n.length; o < a; o++)
                            if (n[o].multiElement) return !0;
                    return !1
                }

                function Se(e, t) {
                    var n = t.$attr,
                        r = e.$attr;
                    x(e, function(r, i) {
                        "$" !== i.charAt(0) && (t[i] && t[i] !== r && (r.length ? r += ("style" === i ? ";" : " ") + t[i] : r = t[i]), e.$set(i, r, !0, n[i]))
                    }), x(t, function(t, i) {
                        e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t, "class" !== i && "style" !== i && (r[i] = n[i]))
                    })
                }

                function xe(e, t, n, r, i, o, s, c) {
                    var u, l, h = [],
                        f = t[0],
                        d = e.shift(),
                        v = R(d, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: d
                        }),
                        g = G(d.templateUrl) ? d.templateUrl(t, n) : d.templateUrl,
                        m = d.templateNamespace;
                    return t.empty(), $(g).then(function(p) {
                            var $, y, w, b;
                            if (p = Z(p), d.replace) {
                                if (w = ut(p) ? [] : Sn(Oe(m, ee(p))), $ = w[0], 1 !== w.length || $.nodeType !== Fe) throw pn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", d.name, g);
                                y = {
                                    $attr: {}
                                }, Ae(r, t, $);
                                var S = le($, [], y);
                                L(d.scope) && me(S, !0), e = S.concat(e), Se(n, y)
                            } else $ = f, t.html(p);
                            for (e.unshift(v), u = ve(e, $, n, i, t, d, o, s, c), x(r, function(e, n) {
                                    e === $ && (r[n] = t[0])
                                }), l = ie(t[0].childNodes, i); h.length;) {
                                var C = h.shift(),
                                    E = h.shift(),
                                    O = h.shift(),
                                    k = h.shift(),
                                    A = t[0];
                                if (!C.$$destroyed) {
                                    if (E !== f) {
                                        var _ = E.className;
                                        c.hasElementTranscludeDirective && d.replace || (A = pt($)), Ae(O, a(E), A), z(a(A), _)
                                    }
                                    b = u.transcludeOnThisElement ? ue(C, u.transclude, k) : k, u(l, C, A, r, b)
                                }
                            }
                            h = null
                        }).catch(function(e) {
                            W(e) && p(e)
                        }),
                        function(e, t, n, r, i) {
                            var o = i;
                            t.$$destroyed || (h ? h.push(t, n, r, o) : (u.transcludeOnThisElement && (o = ue(t, u.transclude, i)), u(l, t, n, r, o)))
                        }
                }

                function Ce(e, t) {
                    var n = t.priority - e.priority;
                    return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
                }

                function Ee(e, t, n, r) {
                    function i(e) {
                        return e ? " (module: " + e + ")" : ""
                    }
                    if (t) throw pn("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, be(r))
                }

                function Oe(t, n) {
                    switch (t = f(t || "html")) {
                        case "svg":
                        case "math":
                            var r = e.document.createElement("div");
                            return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                        default:
                            return n
                    }
                }

                function ke(e, t, r, i, o) {
                    var a = function(e, t) {
                            if ("srcdoc" === t) return k.HTML;
                            var n = re(e);
                            return "src" === t || "ngSrc" === t ? -1 === ["img", "video", "audio", "source", "track"].indexOf(n) ? k.RESOURCE_URL : k.MEDIA_URL : "xlinkHref" === t ? "image" === n ? k.MEDIA_URL : "a" === n ? k.URL : k.RESOURCE_URL : "form" === n && "action" === t || "base" === n && "href" === t || "link" === n && "href" === t ? k.RESOURCE_URL : "a" !== n || "href" !== t && "ngHref" !== t ? void 0 : k.URL
                        }(e, i),
                        s = !o,
                        c = u[i] || o,
                        l = n(r, s, a, c);
                    if (l) {
                        if ("multiple" === i && "select" === re(e)) throw pn("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", be(e));
                        if (d.test(i)) throw pn("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                        t.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(e, t, o) {
                                        var s = o.$$observers || (o.$$observers = Le()),
                                            u = o[i];
                                        u !== r && (l = u && n(u, !0, a, c), r = u), l && (o[i] = l(e), (s[i] || (s[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || e).$watch(l, function(e, t) {
                                            "class" === i && e !== t ? o.$updateClass(e, t) : o.$set(i, e)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function Ae(t, n, r) {
                    var i, o, s = n[0],
                        c = n.length,
                        u = s.parentNode;
                    if (t)
                        for (i = 0, o = t.length; i < o; i++)
                            if (t[i] === s) {
                                t[i++] = r;
                                for (var l = i, h = l + c - 1, f = t.length; l < f; l++, h++) h < f ? t[l] = t[h] : delete t[l];
                                t.length -= c - 1, t.context === s && (t.context = r);
                                break
                            } u && u.replaceChild(r, s);
                    var d = e.document.createDocumentFragment();
                    for (i = 0; i < c; i++) d.appendChild(n[i]);
                    for (a.hasData(s) && (a.data(r, a.data(s)), a(s).off("$destroy")), a.cleanData(d.querySelectorAll("*")), i = 1; i < c; i++) delete n[i];
                    n[0] = r, n.length = 1
                }

                function _e(e, t) {
                    return _(function() {
                        return e.apply(null, arguments)
                    }, e, t)
                }

                function Ie(e, t, n, r, i, o) {
                    try {
                        e(t, n, r, i, o)
                    } catch (e) {
                        p(e, be(n))
                    }
                }

                function Te(e, t) {
                    if (y) throw pn("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", e, t)
                }

                function Me(e, t, r, i, o) {
                    var a, s = [],
                        c = {};

                    function u(t, n, i) {
                        G(r.$onChanges) && !se(n, i) && (I || (e.$$postDigest(q), I = []), a || (a = {}, I.push(l)), a[t] && (i = a[t].previousValue), a[t] = new gn(i, n))
                    }

                    function l() {
                        r.$onChanges(a), a = void 0
                    }
                    return x(i, function(i, a) {
                        var l, f, d, p, $, v = i.attrName,
                            g = i.optional;
                        switch (i.mode) {
                            case "@":
                                g || h.call(t, v) || (Te(v, o.name), r[a] = t[v] = void 0), $ = t.$observe(v, function(e) {
                                    if (F(e) || Y(e)) {
                                        var t = r[a];
                                        u(a, e, t), r[a] = e
                                    }
                                }), t.$$observers[v].$$scope = e, F(l = t[v]) ? r[a] = n(l)(e) : Y(l) && (r[a] = l), c[a] = new gn($n, r[a]), s.push($);
                                break;
                            case "=":
                                if (!h.call(t, v)) {
                                    if (g) break;
                                    Te(v, o.name), t[v] = void 0
                                }
                                if (g && !t[v]) break;
                                f = C(t[v]), p = f.literal ? ce : se, d = f.assign || function() {
                                    throw l = r[a] = f(e), pn("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[v], v, o.name)
                                }, l = r[a] = f(e);
                                var m = function(t) {
                                    return p(t, r[a]) || (p(t, l) ? d(e, t = r[a]) : r[a] = t), l = t
                                };
                                m.$stateful = !0, $ = i.collection ? e.$watchCollection(t[v], m) : e.$watch(C(t[v], m), null, f.literal), s.push($);
                                break;
                            case "<":
                                if (!h.call(t, v)) {
                                    if (g) break;
                                    Te(v, o.name), t[v] = void 0
                                }
                                if (g && !t[v]) break;
                                var y = (f = C(t[v])).literal,
                                    w = r[a] = f(e);
                                c[a] = new gn($n, r[a]), $ = e.$watch(f, function(e, t) {
                                    if (t === e) {
                                        if (t === w || y && ce(t, w)) return;
                                        t = w
                                    }
                                    u(a, e, t), r[a] = e
                                }), s.push($);
                                break;
                            case "&":
                                if (g || h.call(t, v) || Te(v, o.name), (f = t.hasOwnProperty(v) ? C(t[v]) : N) === N && g) break;
                                r[a] = function(t) {
                                    return f(e, t)
                                }
                        }
                    }), {
                        initialChanges: c,
                        removeWatches: s.length && function() {
                            for (var e = 0, t = s.length; e < t; ++e) s[e]()
                        }
                    }
                }
            }]
        }

        function gn(e, t) {
            this.previousValue = e, this.currentValue = t
        }
        vn.$inject = ["$provide", "$$sanitizeUriProvider"], gn.prototype.isFirstChange = function() {
            return this.previousValue === $n
        };
        var mn = /^((?:x|data)[:\-_])/i,
            yn = /[:\-_]+(.)/g;

        function wn(e) {
            return e.replace(mn, "").replace(yn, function(e, t, n) {
                return n ? t.toUpperCase() : t
            })
        }

        function bn(e, t) {
            var n = "",
                r = e.split(/\s+/),
                i = t.split(/\s+/);
            e: for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++)
                    if (a === i[s]) continue e;
                n += (n.length > 0 ? " " : "") + a
            }
            return n
        }

        function Sn(e) {
            var t = (e = a(e)).length;
            if (t <= 1) return e;
            for (; t--;) {
                var n = e[t];
                (n.nodeType === ze || n.nodeType === He && "" === n.nodeValue.trim()) && $.call(e, t, 1)
            }
            return e
        }
        var xn = i("$controller"),
            Cn = /^(\S+)(\s+as\s+([\w$]+))?$/;

        function En() {
            var e = {};
            this.has = function(t) {
                return e.hasOwnProperty(t)
            }, this.register = function(t, n) {
                je(t, "controller"), L(t) ? _(e, t) : e[t] = n
            }, this.$get = ["$injector", function(t) {
                return function(r, i, o, a) {
                    var s, c, u, l;
                    if (o = !0 === o, a && F(a) && (l = a), F(r)) {
                        if (!(c = r.match(Cn))) throw xn("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                        if (u = c[1], l = l || c[3], !(r = e.hasOwnProperty(u) ? e[u] : function(e, t, n) {
                                if (!t) return e;
                                for (var r, i = t.split("."), o = e, a = i.length, s = 0; s < a; s++) r = i[s], e && (e = (o = e)[r]);
                                return !n && G(e) ? de(o, e) : e
                            }(i.$scope, u, !0))) throw xn("ctrlreg", "The controller with the name '{0}' is not registered.", u);
                        De(r, u, !0)
                    }
                    if (o) {
                        var h = (B(r) ? r[r.length - 1] : r).prototype;
                        return s = Object.create(h || null), l && n(i, l, s, u || r.name), _(function() {
                            var e = t.invoke(r, s, i, u);
                            return e !== s && (L(e) || G(e)) && (s = e, l && n(i, l, s, u || r.name)), s
                        }, {
                            instance: s,
                            identifier: l
                        })
                    }
                    return s = t.instantiate(r, i, u), l && n(i, l, s, u || r.name), s
                };

                function n(e, t, n, r) {
                    if (!e || !L(e.$scope)) throw i("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, t);
                    e.$scope[t] = n
                }
            }]
        }

        function On() {
            this.$get = ["$window", function(e) {
                return a(e.document)
            }]
        }

        function kn() {
            this.$get = ["$document", "$rootScope", function(e, t) {
                var n = e[0],
                    r = n && n.hidden;

                function i() {
                    r = n.hidden
                }
                return e.on("visibilitychange", i), t.$on("$destroy", function() {
                        e.off("visibilitychange", i)
                    }),
                    function() {
                        return r
                    }
            }]
        }

        function An() {
            this.$get = ["$log", function(e) {
                return function(t, n) {
                    e.error.apply(e, arguments)
                }
            }]
        }
        var _n = function() {
                this.$get = ["$document", function(e) {
                    return function(t) {
                        return t ? !t.nodeType && t instanceof a && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                    }
                }]
            },
            In = "application/json",
            Tn = {
                "Content-Type": In + ";charset=utf-8"
            },
            Mn = /^\[|^\{(?!\{)/,
            Rn = {
                "[": /]$/,
                "{": /}$/
            },
            Nn = /^\)]\}',?\n/,
            Vn = i("$http");

        function Pn(e) {
            return L(e) ? z(e) ? e.toISOString() : $e(e) : e
        }

        function Dn() {
            this.$get = function() {
                return function(e) {
                    if (!e) return "";
                    var t = [];
                    return C(e, function(e, n) {
                        null === e || j(e) || G(e) || (B(e) ? x(e, function(e) {
                            t.push(Oe(n) + "=" + Oe(Pn(e)))
                        }) : t.push(Oe(n) + "=" + Oe(Pn(e))))
                    }), t.join("&")
                }
            }
        }

        function jn() {
            this.$get = function() {
                return function(e) {
                    if (!e) return "";
                    var t = [];
                    return function e(n, r, i) {
                        B(n) ? x(n, function(t, n) {
                            e(t, r + "[" + (L(t) ? n : "") + "]")
                        }) : L(n) && !z(n) ? C(n, function(t, n) {
                            e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
                        }) : (G(n) && (n = n()), t.push(Oe(r) + "=" + (null == n ? "" : Oe(Pn(n)))))
                    }(e, "", !0), t.join("&")
                }
            }
        }

        function Un(e, t) {
            if (F(e)) {
                var n = e.replace(Nn, "").trim();
                if (n) {
                    var r = t("Content-Type"),
                        i = r && 0 === r.indexOf(In);
                    if (i || (a = (o = n).match(Mn)) && Rn[a[0]].test(o)) try {
                        e = ve(n)
                    } catch (t) {
                        if (!i) return e;
                        throw Vn("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', e, t)
                    }
                }
            }
            var o, a;
            return e
        }

        function Ln(e) {
            var t, n = Le();

            function r(e, t) {
                e && (n[e] = n[e] ? n[e] + ", " + t : t)
            }
            return F(e) ? x(e.split("\n"), function(e) {
                t = e.indexOf(":"), r(f(ee(e.substr(0, t))), ee(e.substr(t + 1)))
            }) : L(e) && x(e, function(e, t) {
                r(f(t), ee(e))
            }), n
        }

        function qn(e) {
            var t;
            return function(n) {
                if (t || (t = Ln(e)), n) {
                    var r = t[f(n)];
                    return void 0 === r && (r = null), r
                }
                return t
            }
        }

        function Fn(e, t, n, r) {
            return G(r) ? r(e, t, n) : (x(r, function(r) {
                e = r(e, t, n)
            }), e)
        }

        function Hn(e) {
            return 200 <= e && e < 300
        }

        function zn() {
            var e = this.defaults = {
                    transformResponse: [Un],
                    transformRequest: [function(e) {
                        return !L(e) || (t = e, "[object File]" === g.call(t)) || function(e) {
                            return "[object Blob]" === g.call(e)
                        }(e) || function(e) {
                            return "[object FormData]" === g.call(e)
                        }(e) ? e : $e(e);
                        var t
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: Ge(Tn),
                        put: Ge(Tn),
                        patch: Ge(Tn)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    paramSerializer: "$httpParamSerializer",
                    jsonpCallbackParam: "callback"
                },
                t = !1;
            this.useApplyAsync = function(e) {
                return U(e) ? (t = !!e, this) : t
            };
            var n = this.interceptors = [],
                r = this.xsrfWhitelistedOrigins = [];
            this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(o, a, s, c, u, l, h, p) {
                var $ = c("$http");
                e.paramSerializer = F(e.paramSerializer) ? h.get(e.paramSerializer) : e.paramSerializer;
                var v = [];
                x(n, function(e) {
                    v.unshift(F(e) ? h.get(e) : h.invoke(e))
                });
                var g, m = (g = [si].concat(r.map(ci)), function(e) {
                    var t = ci(e);
                    return g.some(ui.bind(null, t))
                });

                function y(n) {
                    if (!L(n)) throw i("$http")("badreq", "Http request configuration must be an object.  Received: {0}", n);
                    if (!F(p.valueOf(n.url))) throw i("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", n.url);
                    var r = _({
                        method: "get",
                        transformRequest: e.transformRequest,
                        transformResponse: e.transformResponse,
                        paramSerializer: e.paramSerializer,
                        jsonpCallbackParam: e.jsonpCallbackParam
                    }, n);
                    r.headers = function(t) {
                        var n, r, i, o = e.headers,
                            a = _({}, t.headers);
                        o = _({}, o.common, o[f(t.method)]);
                        e: for (n in o) {
                            for (i in r = f(n), a)
                                if (f(i) === r) continue e;
                            a[n] = o[n]
                        }
                        return function(e, t) {
                            var n, r = {};
                            return x(e, function(e, i) {
                                G(e) ? null != (n = e(t)) && (r[i] = n) : r[i] = e
                            }), r
                        }(a, Ge(t))
                    }(n), r.method = d(r.method), r.paramSerializer = F(r.paramSerializer) ? h.get(r.paramSerializer) : r.paramSerializer, o.$$incOutstandingRequestCount();
                    var c = [],
                        g = [],
                        w = l.resolve(r);
                    return x(v, function(e) {
                        (e.request || e.requestError) && c.unshift(e.request, e.requestError), (e.response || e.responseError) && g.push(e.response, e.responseError)
                    }), w = (w = b(w = (w = b(w, c)).then(function(n) {
                        var r = n.headers,
                            i = Fn(n.data, qn(r), void 0, n.transformRequest);
                        j(i) && x(r, function(e, t) {
                            "content-type" === f(t) && delete r[t]
                        });
                        j(n.withCredentials) && !j(e.withCredentials) && (n.withCredentials = e.withCredentials);
                        return function(n, r) {
                            var i, o, c = l.defer(),
                                h = c.promise,
                                d = n.headers,
                                v = "jsonp" === f(n.method),
                                g = n.url;
                            v ? g = p.getTrustedResourceUrl(g) : F(g) || (g = p.valueOf(g));
                            g = function(e, t) {
                                return t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
                            }(g, n.paramSerializer(n.params)), v && (g = function(e, t) {
                                var n = e.split("?");
                                if (n.length > 2) throw Vn("badjsonp", 'Illegal use more than one "?", in url, "{1}"', e);
                                return x(xe(n[1]), function(n, r) {
                                    if ("JSON_CALLBACK" === n) throw Vn("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', e);
                                    if (r === t) throw Vn("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', t, e)
                                }), e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK"
                            }(g, n.jsonpCallbackParam));
                            y.pendingRequests.push(n), h.then(E, E), !n.cache && !e.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (i = L(n.cache) ? n.cache : L(e.cache) ? e.cache : $);
                            i && (U(o = i.get(g)) ? Z(o) ? o.then(C, C) : B(o) ? S(o[1], o[0], Ge(o[2]), o[3], o[4]) : S(o, 200, {}, "OK", "complete") : i.put(g, h));
                            if (j(o)) {
                                var w = m(n.url) ? s()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
                                w && (d[n.xsrfHeaderName || e.xsrfHeaderName] = w), a(n.method, g, r, function(e, n, r, o, a) {
                                    i && (Hn(e) ? i.put(g, [e, n, Ln(r), o, a]) : i.remove(g));

                                    function s() {
                                        S(n, e, r, o, a)
                                    }
                                    t ? u.$applyAsync(s) : (s(), u.$$phase || u.$apply())
                                }, d, n.timeout, n.withCredentials, n.responseType, b(n.eventHandlers), b(n.uploadEventHandlers))
                            }
                            return h;

                            function b(e) {
                                if (e) {
                                    var n = {};
                                    return x(e, function(e, r) {
                                        n[r] = function(n) {
                                            function r() {
                                                e(n)
                                            }
                                            t ? u.$applyAsync(r) : u.$$phase ? r() : u.$apply(r)
                                        }
                                    }), n
                                }
                            }

                            function S(e, t, r, i, o) {
                                (Hn(t = t >= -1 ? t : 0) ? c.resolve : c.reject)({
                                    data: e,
                                    status: t,
                                    headers: qn(r),
                                    config: n,
                                    statusText: i,
                                    xhrStatus: o
                                })
                            }

                            function C(e) {
                                S(e.data, e.status, Ge(e.headers()), e.statusText, e.xhrStatus)
                            }

                            function E() {
                                var e = y.pendingRequests.indexOf(n); - 1 !== e && y.pendingRequests.splice(e, 1)
                            }
                        }(n, i).then(S, S)
                    }), g)).finally(function() {
                        o.$$completeOutstandingRequest(N)
                    });

                    function b(e, t) {
                        for (var n = 0, r = t.length; n < r;) {
                            var i = t[n++],
                                o = t[n++];
                            e = e.then(i, o)
                        }
                        return t.length = 0, e
                    }

                    function S(e) {
                        var t = _({}, e);
                        return t.data = Fn(e.data, e.headers, e.status, r.transformResponse), Hn(e.status) ? t : l.reject(t)
                    }
                }
                return y.pendingRequests = [],
                    function(e) {
                        x(arguments, function(e) {
                            y[e] = function(t, n) {
                                return y(_({}, n || {}, {
                                    method: e,
                                    url: t
                                }))
                            }
                        })
                    }("get", "delete", "head", "jsonp"),
                    function(e) {
                        x(arguments, function(e) {
                            y[e] = function(t, n, r) {
                                return y(_({}, r || {}, {
                                    method: e,
                                    url: t,
                                    data: n
                                }))
                            }
                        })
                    }("post", "put", "patch"), y.defaults = e, y
            }]
        }

        function Bn() {
            this.$get = function() {
                return function() {
                    return new e.XMLHttpRequest
                }
            }
        }

        function Wn() {
            this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, r) {
                return function(e, t, n, r, i) {
                    return function(o, a, s, c, u, l, h, d, p, $) {
                        if (a = a || e.url(), "jsonp" === f(o)) var v = r.createCallback(a),
                            g = function(e, t, n) {
                                e = e.replace("JSON_CALLBACK", t);
                                var o = i.createElement("script"),
                                    a = null;
                                return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                                    o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null;
                                    var s = -1,
                                        c = "unknown";
                                    e && ("load" !== e.type || r.wasCalled(t) || (e = {
                                        type: "error"
                                    }), c = e.type, s = "error" === e.type ? 404 : 200), n && n(s, c)
                                }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a
                            }(a, v, function(e, t) {
                                var n = 200 === e && r.getResponse(v);
                                S(c, e, n, "", t, "complete"), r.removeCallback(v)
                            });
                        else {
                            var m = t(o, a),
                                y = !1;
                            m.open(o, a, !0), x(u, function(e, t) {
                                U(e) && m.setRequestHeader(t, e)
                            }), m.onload = function() {
                                var e = m.statusText || "",
                                    t = "response" in m ? m.response : m.responseText,
                                    n = 1223 === m.status ? 204 : m.status;
                                0 === n && (n = t ? 200 : "file" === ci(a).protocol ? 404 : 0), S(c, n, t, m.getAllResponseHeaders(), e, "complete")
                            };
                            if (m.onerror = function() {
                                    S(c, -1, null, null, "", "error")
                                }, m.ontimeout = function() {
                                    S(c, -1, null, null, "", "timeout")
                                }, m.onabort = function() {
                                    S(c, -1, null, null, "", y ? "timeout" : "abort")
                                }, x(p, function(e, t) {
                                    m.addEventListener(t, e)
                                }), x($, function(e, t) {
                                    m.upload.addEventListener(t, e)
                                }), h && (m.withCredentials = !0), d) try {
                                m.responseType = d
                            } catch (e) {
                                if ("json" !== d) throw e
                            }
                            m.send(j(s) ? null : s)
                        }
                        if (l > 0) var w = n(function() {
                            b("timeout")
                        }, l);
                        else Z(l) && l.then(function() {
                            b(U(l.$$timeoutId) ? "timeout" : "abort")
                        });

                        function b(e) {
                            y = "timeout" === e, g && g(), m && m.abort()
                        }

                        function S(e, t, r, i, o, a) {
                            U(w) && n.cancel(w), g = m = null, e(t, r, i, o, a)
                        }
                    }
                }(e, r, e.defer, t, n[0])
            }]
        }
        var Gn = w.$interpolateMinErr = i("$interpolate");

        function Kn() {
            var e = "{{",
                t = "}}";
            this.startSymbol = function(t) {
                return t ? (e = t, this) : e
            }, this.endSymbol = function(e) {
                return e ? (t = e, this) : t
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                var o = e.length,
                    a = t.length,
                    s = new RegExp(e.replace(/./g, u), "g"),
                    c = new RegExp(t.replace(/./g, u), "g");

                function u(e) {
                    return "\\\\\\" + e
                }

                function l(n) {
                    return n.replace(s, e).replace(c, t)
                }

                function h(e, t, n, r) {
                    var i = e.$watch(function(e) {
                        return i(), r(e)
                    }, t, n);
                    return i
                }

                function f(s, c, u, f) {
                    var d = u === i.URL || u === i.MEDIA_URL;
                    if (!s.length || -1 === s.indexOf(e)) {
                        if (c && !d) return;
                        var p = l(s);
                        d && (p = i.getTrusted(u, p));
                        var $ = P(p);
                        return $.exp = s, $.expressions = [], $.$$watchDelegate = h, $
                    }
                    f = !!f;
                    for (var v, g, m, y, w, b = 0, S = [], x = s.length, C = [], E = []; b < x;) {
                        if (-1 === (v = s.indexOf(e, b)) || -1 === (g = s.indexOf(t, v + o))) {
                            b !== x && C.push(l(s.substring(b)));
                            break
                        }
                        b !== v && C.push(l(s.substring(b, v))), y = s.substring(v + o, g), S.push(y), b = g + a, E.push(C.length), C.push("")
                    }
                    w = 1 === C.length && 1 === E.length;
                    var O = d && w ? void 0 : function(e) {
                        try {
                            return e = u && !d ? i.getTrusted(u, e) : i.valueOf(e), f && !U(e) ? e : qe(e)
                        } catch (e) {
                            r(Gn.interr(s, e))
                        }
                    };
                    if (m = S.map(function(e) {
                            return n(e, O)
                        }), !c || S.length) {
                        var k = function(e) {
                            for (var t = 0, n = S.length; t < n; t++) {
                                if (f && j(e[t])) return;
                                C[E[t]] = e[t]
                            }
                            return d ? i.getTrusted(u, w ? C[0] : C.join("")) : (u && C.length > 1 && Gn.throwNoconcat(s), C.join(""))
                        };
                        return _(function(e) {
                            var t = 0,
                                n = S.length,
                                i = new Array(n);
                            try {
                                for (; t < n; t++) i[t] = m[t](e);
                                return k(i)
                            } catch (e) {
                                r(Gn.interr(s, e))
                            }
                        }, {
                            exp: s,
                            expressions: S,
                            $$watchDelegate: function(e, t) {
                                var n;
                                return e.$watchGroup(m, function(r, i) {
                                    var o = k(r);
                                    t.call(this, o, r !== i ? n : o, e), n = o
                                })
                            }
                        })
                    }
                }
                return f.startSymbol = function() {
                    return e
                }, f.endSymbol = function() {
                    return t
                }, f
            }]
        }
        Gn.throwNoconcat = function(e) {
            throw Gn("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
        }, Gn.interr = function(e, t) {
            return Gn("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
        };
        var Jn = i("$interval");

        function Qn() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(e, t, n, r, i) {
                var o = {};

                function a(a, s, c, u) {
                    var l = arguments.length > 4,
                        h = l ? fe(arguments, 4) : [],
                        f = t.setInterval,
                        d = t.clearInterval,
                        p = 0,
                        $ = U(u) && !u,
                        v = ($ ? r : n).defer(),
                        g = v.promise;
                    return c = U(c) ? c : 0, g.$$intervalId = f(function() {
                        $ ? i.defer(m) : e.$evalAsync(m), v.notify(p++), c > 0 && p >= c && (v.resolve(p), d(g.$$intervalId), delete o[g.$$intervalId]), $ || e.$apply()
                    }, s), o[g.$$intervalId] = v, g;

                    function m() {
                        l ? a.apply(null, h) : a(p)
                    }
                }
                return a.cancel = function(e) {
                    if (!e) return !1;
                    if (!e.hasOwnProperty("$$intervalId")) throw Jn("badprom", "`$interval.cancel()` called with a promise that was not generated by `$interval()`.");
                    if (!o.hasOwnProperty(e.$$intervalId)) return !1;
                    var n = e.$$intervalId,
                        r = o[n];
                    return Fr(r.promise), r.reject("canceled"), t.clearInterval(n), delete o[n], !0
                }, a
            }]
        }
        var Yn = function() {
                this.$get = function() {
                    var e = w.callbacks,
                        t = {};
                    return {
                        createCallback: function(n) {
                            var r = "_" + (e.$$counter++).toString(36),
                                i = "angular.callbacks." + r,
                                o = function(e) {
                                    var t = function(e) {
                                        t.data = e, t.called = !0
                                    };
                                    return t.id = e, t
                                }(r);
                            return t[i] = e[r] = o, i
                        },
                        wasCalled: function(e) {
                            return t[e].called
                        },
                        getResponse: function(e) {
                            return t[e].data
                        },
                        removeCallback: function(n) {
                            var r = t[n];
                            delete e[r.id], delete t[n]
                        }
                    }
                }
            },
            Zn = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
            Xn = {
                http: 80,
                https: 443,
                ftp: 21
            },
            er = i("$location");

        function tr(e) {
            for (var t = e.split("/"), n = t.length; n--;) t[n] = Ee(t[n].replace(/%2F/g, "/"));
            return t.join("/")
        }

        function nr(e, t) {
            var n = ci(e);
            t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = T(n.port) || Xn[n.protocol] || null
        }
        var rr = /^\s*[\\/]{2,}/;

        function ir(e, t, n) {
            if (rr.test(e)) throw er("badpath", 'Invalid url "{0}".', e);
            var r = "/" !== e.charAt(0);
            r && (e = "/" + e);
            var i = ci(e),
                o = r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname;
            t.$$path = function(e, t) {
                for (var n = e.split("/"), r = n.length; r--;) n[r] = decodeURIComponent(n[r]), t && (n[r] = n[r].replace(/\//g, "%2F"));
                return n.join("/")
            }(o, n), t.$$search = xe(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
        }

        function or(e, t) {
            return e.slice(0, t.length) === t
        }

        function ar(e, t) {
            if (or(t, e)) return t.substr(e.length)
        }

        function sr(e) {
            var t = e.indexOf("#");
            return -1 === t ? e : e.substr(0, t)
        }

        function cr(e) {
            return e.replace(/(#.+)|#$/, "$1")
        }

        function ur(e, t, n) {
            this.$$html5 = !0, n = n || "", nr(e, this), this.$$parse = function(e) {
                var n = ar(t, e);
                if (!F(n)) throw er("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
                ir(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function() {
                var e = Ce(this.$$search),
                    n = this.$$hash ? "#" + Ee(this.$$hash) : "";
                this.$$url = tr(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1), this.$$urlUpdatedByLocation = !0
            }, this.$$parseLinkUrl = function(r, i) {
                return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (U(o = ar(e, r)) ? (a = o, s = n && U(o = ar(n, o)) ? t + (ar("/", o) || o) : e + a) : U(o = ar(t, r)) ? s = t + o : t === r + "/" && (s = t), s && this.$$parse(s), !!s);
                var o, a, s
            }
        }

        function lr(e, t, n) {
            nr(e, this), this.$$parse = function(r) {
                var i, o = ar(e, r) || ar(t, r);
                j(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", j(o) && (e = r, this.replace())) : j(i = ar(n, o)) && (i = o), ir(i, this, !1), this.$$path = function(e, t, n) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    or(t, n) && (t = t.replace(n, ""));
                    if (i.exec(t)) return e;
                    return (r = i.exec(e)) ? r[1] : e
                }(this.$$path, i, e), this.$$compose()
            }, this.$$compose = function() {
                var t = Ce(this.$$search),
                    r = this.$$hash ? "#" + Ee(this.$$hash) : "";
                this.$$url = tr(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : ""), this.$$urlUpdatedByLocation = !0
            }, this.$$parseLinkUrl = function(t, n) {
                return sr(e) === sr(t) && (this.$$parse(t), !0)
            }
        }

        function hr(e, t, n) {
            this.$$html5 = !0, lr.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
                return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (e === sr(r) ? o = r : (a = ar(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o);
                var o, a
            }, this.$$compose = function() {
                var t = Ce(this.$$search),
                    r = this.$$hash ? "#" + Ee(this.$$hash) : "";
                this.$$url = tr(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url, this.$$urlUpdatedByLocation = !0
            }
        }
        var fr = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: dr("$$absUrl"),
            url: function(e) {
                if (j(e)) return this.$$url;
                var t = Zn.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: dr("$$protocol"),
            host: dr("$$host"),
            port: dr("$$port"),
            path: pr("$$path", function(e) {
                return "/" === (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
            }),
            search: function(e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (F(e) || H(e)) e = e.toString(), this.$$search = xe(e);
                        else {
                            if (!L(e)) throw er("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            x(e = ae(e, {}), function(t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        j(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: pr("$$hash", function(e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };

        function dr(e) {
            return function() {
                return this[e]
            }
        }

        function pr(e, t) {
            return function(n) {
                return j(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
            }
        }

        function $r() {
            var e = "!",
                t = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function(t) {
                return U(t) ? (e = t, this) : e
            }, this.html5Mode = function(e) {
                return Y(e) ? (t.enabled = e, this) : L(e) ? (Y(e.enabled) && (t.enabled = e.enabled), Y(e.requireBase) && (t.requireBase = e.requireBase), (Y(e.rewriteLinks) || F(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks), this) : t
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, s) {
                var c, u, l, h, f = r.baseHref(),
                    d = r.url();
                if (t.enabled) {
                    if (!f && t.requireBase) throw er("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    l = (h = d).substring(0, h.indexOf("/", h.indexOf("//") + 2)) + (f || "/"), u = i.history ? ur : hr
                } else l = sr(d), u = lr;
                var p = function(e) {
                    return e.substr(0, sr(e).lastIndexOf("/") + 1)
                }(l);
                (c = new u(l, p, "#" + e)).$$parseLinkUrl(d, d), c.$$state = r.state();
                var $ = /^\s*(javascript|mailto):/i;

                function v(e, t, n) {
                    var i = c.url(),
                        o = c.$$state;
                    try {
                        r.url(e, t, n), c.$$state = r.state()
                    } catch (e) {
                        throw c.url(i), c.$$state = o, e
                    }
                }
                o.on("click", function(e) {
                    var i = t.rewriteLinks;
                    if (i && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button) {
                        for (var s = a(e.target);
                            "a" !== re(s[0]);)
                            if (s[0] === o[0] || !(s = s.parent())[0]) return;
                        if (!F(i) || !j(s.attr(i))) {
                            var u = s.prop("href"),
                                l = s.attr("href") || s.attr("xlink:href");
                            L(u) && "[object SVGAnimatedString]" === u.toString() && (u = ci(u.animVal).href), $.test(u) || !u || s.attr("target") || e.isDefaultPrevented() || c.$$parseLinkUrl(u, l) && (e.preventDefault(), c.absUrl() !== r.url() && n.$apply())
                        }
                    }
                }), cr(c.absUrl()) !== cr(d) && r.url(c.absUrl(), !0);
                var g = !0;
                return r.onUrlChange(function(e, t) {
                    or(e, p) ? (n.$evalAsync(function() {
                        var r, i = c.absUrl(),
                            o = c.$$state;
                        e = cr(e), c.$$parse(e), c.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, c.absUrl() === e && (r ? (c.$$parse(i), c.$$state = o, v(i, !1, o)) : (g = !1, m(i, o)))
                    }), n.$$phase || n.$digest()) : s.location.href = e
                }), n.$watch(function() {
                    if (g || c.$$urlUpdatedByLocation) {
                        c.$$urlUpdatedByLocation = !1;
                        var e = cr(r.url()),
                            t = cr(c.absUrl()),
                            o = r.state(),
                            a = c.$$replace,
                            s = e !== t || c.$$html5 && i.history && o !== c.$$state;
                        (g || s) && (g = !1, n.$evalAsync(function() {
                            var t = c.absUrl(),
                                r = n.$broadcast("$locationChangeStart", t, e, c.$$state, o).defaultPrevented;
                            c.absUrl() === t && (r ? (c.$$parse(e), c.$$state = o) : (s && v(t, a, o === c.$$state ? null : c.$$state), m(e, o)))
                        }))
                    }
                    c.$$replace = !1
                }), c;

                function m(e, t) {
                    n.$broadcast("$locationChangeSuccess", c.absUrl(), e, c.$$state, t)
                }
            }]
        }

        function vr() {
            var e = !0,
                t = this;
            this.debugEnabled = function(t) {
                return U(t) ? (e = t, this) : e
            }, this.$get = ["$window", function(n) {
                var r, i = o || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
                return {
                    log: a("log"),
                    info: a("info"),
                    warn: a("warn"),
                    error: a("error"),
                    debug: (r = a("debug"), function() {
                        e && r.apply(t, arguments)
                    })
                };

                function a(e) {
                    var t = n.console || {},
                        r = t[e] || t.log || N;
                    return function() {
                        var e = [];
                        return x(arguments, function(t) {
                            e.push(function(e) {
                                return W(e) && (e.stack && i ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                            }(t))
                        }), Function.prototype.apply.call(r, t, e)
                    }
                }
            }]
        }
        x([hr, lr, ur], function(e) {
            e.prototype = Object.create(fr), e.prototype.state = function(t) {
                if (!arguments.length) return this.$$state;
                if (e !== ur || !this.$$html5) throw er("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = j(t) ? null : t, this.$$urlUpdatedByLocation = !0, this
            }
        });
        var gr = i("$parse"),
            mr = {}.constructor.prototype.valueOf;

        function yr(e) {
            return e + ""
        }
        var wr = Le();
        x("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
            wr[e] = !0
        });
        var br = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "\t",
                v: "\v",
                "'": "'",
                '"': '"'
            },
            Sr = function(e) {
                this.options = e
            };
        Sr.prototype = {
            constructor: Sr,
            lex: function(e) {
                for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var t = this.text.charAt(this.index);
                    if ('"' === t || "'" === t) this.readString(t);
                    else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
                    else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: t
                    }), this.index++;
                    else if (this.isWhitespace(t)) this.index++;
                    else {
                        var n = t + this.peek(),
                            r = n + this.peek(2),
                            i = wr[t],
                            o = wr[n],
                            a = wr[r];
                        if (i || o || a) {
                            var s = a ? r : o ? n : t;
                            this.tokens.push({
                                index: this.index,
                                text: s,
                                operator: !0
                            }), this.index += s.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            },
            is: function(e, t) {
                return -1 !== t.indexOf(e)
            },
            peek: function(e) {
                var t = e || 1;
                return this.index + t < this.text.length && this.text.charAt(this.index + t)
            },
            isNumber: function(e) {
                return "0" <= e && e <= "9" && "string" == typeof e
            },
            isWhitespace: function(e) {
                return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
            },
            isIdentifierStart: function(e) {
                return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
            },
            isValidIdentifierStart: function(e) {
                return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
            },
            isIdentifierContinue: function(e) {
                return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
            },
            isValidIdentifierContinue: function(e, t) {
                return this.isValidIdentifierStart(e, t) || this.isNumber(e)
            },
            codePointAt: function(e) {
                return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
            },
            peekMultichar: function() {
                var e = this.text.charAt(this.index),
                    t = this.peek();
                if (!t) return e;
                var n = e.charCodeAt(0),
                    r = t.charCodeAt(0);
                return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? e + t : e
            },
            isExpOperator: function(e) {
                return "-" === e || "+" === e || this.isNumber(e)
            },
            throwError: function(e, t, n) {
                n = n || this.index;
                var r = U(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
                throw gr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
            },
            readNumber: function() {
                for (var e = "", t = this.index; this.index < this.text.length;) {
                    var n = f(this.text.charAt(this.index));
                    if ("." === n || this.isNumber(n)) e += n;
                    else {
                        var r = this.peek();
                        if ("e" === n && this.isExpOperator(r)) e += n;
                        else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === e.charAt(e.length - 1)) e += n;
                        else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== e.charAt(e.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({
                    index: t,
                    text: e,
                    constant: !0,
                    value: Number(e)
                })
            },
            readIdent: function() {
                var e = this.index;
                for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                    var t = this.peekMultichar();
                    if (!this.isIdentifierContinue(t)) break;
                    this.index += t.length
                }
                this.tokens.push({
                    index: e,
                    text: this.text.slice(e, this.index),
                    identifier: !0
                })
            },
            readString: function(e) {
                var t = this.index;
                this.index++;
                for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                        } else {
                            n += br[o] || o
                        }
                        i = !1
                    } else if ("\\" === o) i = !0;
                    else {
                        if (o === e) return this.index++, void this.tokens.push({
                            index: t,
                            text: r,
                            constant: !0,
                            value: n
                        });
                        n += o
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", t)
            }
        };
        var xr = function(e, t) {
            this.lexer = e, this.options = t
        };

        function Cr(e, t) {
            return void 0 !== e ? e : t
        }

        function Er(e, t) {
            return void 0 === e ? t : void 0 === t ? e : e + t
        }
        xr.Program = "Program", xr.ExpressionStatement = "ExpressionStatement", xr.AssignmentExpression = "AssignmentExpression", xr.ConditionalExpression = "ConditionalExpression", xr.LogicalExpression = "LogicalExpression", xr.BinaryExpression = "BinaryExpression", xr.UnaryExpression = "UnaryExpression", xr.CallExpression = "CallExpression", xr.MemberExpression = "MemberExpression", xr.Identifier = "Identifier", xr.Literal = "Literal", xr.ArrayExpression = "ArrayExpression", xr.Property = "Property", xr.ObjectExpression = "ObjectExpression", xr.ThisExpression = "ThisExpression", xr.LocalsExpression = "LocalsExpression", xr.NGValueParameter = "NGValueParameter", xr.prototype = {
            ast: function(e) {
                this.text = e, this.tokens = this.lexer.lex(e);
                var t = this.program();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
            },
            program: function() {
                for (var e = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                        type: xr.Program,
                        body: e
                    }
            },
            expressionStatement: function() {
                return {
                    type: xr.ExpressionStatement,
                    expression: this.filterChain()
                }
            },
            filterChain: function() {
                for (var e = this.expression(); this.expect("|");) e = this.filter(e);
                return e
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var e = this.ternary();
                if (this.expect("=")) {
                    if (!Ir(e)) throw gr("lval", "Trying to assign a value to a non l-value");
                    e = {
                        type: xr.AssignmentExpression,
                        left: e,
                        right: this.assignment(),
                        operator: "="
                    }
                }
                return e
            },
            ternary: function() {
                var e, t, n = this.logicalOR();
                return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                    type: xr.ConditionalExpression,
                    test: n,
                    alternate: e,
                    consequent: t
                }) : n
            },
            logicalOR: function() {
                for (var e = this.logicalAND(); this.expect("||");) e = {
                    type: xr.LogicalExpression,
                    operator: "||",
                    left: e,
                    right: this.logicalAND()
                };
                return e
            },
            logicalAND: function() {
                for (var e = this.equality(); this.expect("&&");) e = {
                    type: xr.LogicalExpression,
                    operator: "&&",
                    left: e,
                    right: this.equality()
                };
                return e
            },
            equality: function() {
                for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                    type: xr.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.relational()
                };
                return t
            },
            relational: function() {
                for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                    type: xr.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.additive()
                };
                return t
            },
            additive: function() {
                for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                    type: xr.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.multiplicative()
                };
                return t
            },
            multiplicative: function() {
                for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                    type: xr.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.unary()
                };
                return t
            },
            unary: function() {
                var e;
                return (e = this.expect("+", "-", "!")) ? {
                    type: xr.UnaryExpression,
                    operator: e.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary()
            },
            primary: function() {
                var e, t;
                for (this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = ae(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
                        type: xr.Literal,
                        value: this.options.literals[this.consume().text]
                    } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek()); t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                    type: xr.CallExpression,
                    callee: e,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === t.text ? (e = {
                    type: xr.MemberExpression,
                    object: e,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === t.text ? e = {
                    type: xr.MemberExpression,
                    object: e,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return e
            },
            filter: function(e) {
                for (var t = [e], n = {
                        type: xr.CallExpression,
                        callee: this.identifier(),
                        arguments: t,
                        filter: !0
                    }; this.expect(":");) t.push(this.expression());
                return n
            },
            parseArguments: function() {
                var e = [];
                if (")" !== this.peekToken().text)
                    do {
                        e.push(this.filterChain())
                    } while (this.expect(","));
                return e
            },
            identifier: function() {
                var e = this.consume();
                return e.identifier || this.throwError("is not a valid identifier", e), {
                    type: xr.Identifier,
                    name: e.text
                }
            },
            constant: function() {
                return {
                    type: xr.Literal,
                    value: this.consume().value
                }
            },
            arrayDeclaration: function() {
                var e = [];
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        e.push(this.expression())
                    } while (this.expect(","));
                return this.consume("]"), {
                    type: xr.ArrayExpression,
                    elements: e
                }
            },
            object: function() {
                var e, t = [];
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        e = {
                            type: xr.Property,
                            kind: "init"
                        }, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
                    } while (this.expect(","));
                return this.consume("}"), {
                    type: xr.ObjectExpression,
                    properties: t
                }
            },
            throwError: function(e, t) {
                throw gr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
            },
            consume: function(e) {
                if (0 === this.tokens.length) throw gr("ueoe", "Unexpected end of expression: {0}", this.text);
                var t = this.expect(e);
                return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw gr("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function(e, t, n, r) {
                return this.peekAhead(0, e, t, n, r)
            },
            peekAhead: function(e, t, n, r, i) {
                if (this.tokens.length > e) {
                    var o = this.tokens[e],
                        a = o.text;
                    if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
                }
                return !1
            },
            expect: function(e, t, n, r) {
                var i = this.peek(e, t, n, r);
                return !!i && (this.tokens.shift(), i)
            },
            selfReferential: {
                this: {
                    type: xr.ThisExpression
                },
                $locals: {
                    type: xr.LocalsExpression
                }
            }
        };
        var Or = 1,
            kr = 2;

        function Ar(e, t, n) {
            var r, i, o, a = e.isPure = function(e, t) {
                switch (e.type) {
                    case xr.MemberExpression:
                        if (e.computed) return !1;
                        break;
                    case xr.UnaryExpression:
                        return Or;
                    case xr.BinaryExpression:
                        return "+" !== e.operator && Or;
                    case xr.CallExpression:
                        return !1
                }
                return void 0 === t ? kr : t
            }(e, n);
            switch (e.type) {
                case xr.Program:
                    r = !0, x(e.body, function(e) {
                        Ar(e.expression, t, a), r = r && e.expression.constant
                    }), e.constant = r;
                    break;
                case xr.Literal:
                    e.constant = !0, e.toWatch = [];
                    break;
                case xr.UnaryExpression:
                    Ar(e.argument, t, a), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                    break;
                case xr.BinaryExpression:
                    Ar(e.left, t, a), Ar(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                    break;
                case xr.LogicalExpression:
                    Ar(e.left, t, a), Ar(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case xr.ConditionalExpression:
                    Ar(e.test, t, a), Ar(e.alternate, t, a), Ar(e.consequent, t, a), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case xr.Identifier:
                    e.constant = !1, e.toWatch = [e];
                    break;
                case xr.MemberExpression:
                    Ar(e.object, t, a), e.computed && Ar(e.property, t, a), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = e.constant ? [] : [e];
                    break;
                case xr.CallExpression:
                    o = !!e.filter && function(e, t) {
                        return !e(t).$stateful
                    }(t, e.callee.name), r = o, i = [], x(e.arguments, function(e) {
                        Ar(e, t, a), r = r && e.constant, i.push.apply(i, e.toWatch)
                    }), e.constant = r, e.toWatch = o ? i : [e];
                    break;
                case xr.AssignmentExpression:
                    Ar(e.left, t, a), Ar(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                    break;
                case xr.ArrayExpression:
                    r = !0, i = [], x(e.elements, function(e) {
                        Ar(e, t, a), r = r && e.constant, i.push.apply(i, e.toWatch)
                    }), e.constant = r, e.toWatch = i;
                    break;
                case xr.ObjectExpression:
                    r = !0, i = [], x(e.properties, function(e) {
                        Ar(e.value, t, a), r = r && e.value.constant, i.push.apply(i, e.value.toWatch), e.computed && (Ar(e.key, t, !1), r = r && e.key.constant, i.push.apply(i, e.key.toWatch))
                    }), e.constant = r, e.toWatch = i;
                    break;
                case xr.ThisExpression:
                case xr.LocalsExpression:
                    e.constant = !1, e.toWatch = []
            }
        }

        function _r(e) {
            if (1 === e.length) {
                var t = e[0].expression,
                    n = t.toWatch;
                return 1 !== n.length ? n : n[0] !== t ? n : void 0
            }
        }

        function Ir(e) {
            return e.type === xr.Identifier || e.type === xr.MemberExpression
        }

        function Tr(e) {
            if (1 === e.body.length && Ir(e.body[0].expression)) return {
                type: xr.AssignmentExpression,
                left: e.body[0].expression,
                right: {
                    type: xr.NGValueParameter
                },
                operator: "="
            }
        }

        function Mr(e) {
            this.$filter = e
        }

        function Rr(e) {
            this.$filter = e
        }

        function Nr(e, t, n) {
            this.ast = new xr(e, n), this.astCompiler = n.csp ? new Rr(t) : new Mr(t)
        }

        function Vr(e) {
            return G(e.valueOf) ? e.valueOf() : mr.call(e)
        }

        function Pr() {
            var e, t, n = Le(),
                r = {
                    true: !0,
                    false: !1,
                    null: null,
                    undefined: void 0
                };
            this.addLiteral = function(e, t) {
                r[e] = t
            }, this.setIdentifierFns = function(n, r) {
                return e = n, t = r, this
            }, this.$get = ["$filter", function(i) {
                var o = {
                    csp: ue().noUnsafeEval,
                    literals: ae(r),
                    isIdentifierStart: G(e) && e,
                    isIdentifierContinue: G(t) && t
                };
                return a.$$getAst = function(e) {
                    return new Nr(new Sr(o), i, o).getAst(e).ast
                }, a;

                function a(e, t) {
                    var r, a;
                    switch (typeof e) {
                        case "string":
                            if (e = e.trim(), !(r = n[a = e])) r = new Nr(new Sr(o), i, o).parse(e), n[a] = f(r);
                            return d(r, t);
                        case "function":
                            return d(e, t);
                        default:
                            return d(N, t)
                    }
                }

                function s(e, t, n) {
                    return null == e || null == t ? e === t : !("object" == typeof e && "object" == typeof(e = Vr(e)) && !n) && (e === t || e != e && t != t)
                }

                function c(e, t, n, r, i) {
                    var o, a = r.inputs;
                    if (1 === a.length) {
                        var c = s;
                        return a = a[0], e.$watch(function(e) {
                            var t = a(e);
                            return s(t, c, a.isPure) || (o = r(e, void 0, void 0, [t]), c = t && Vr(t)), o
                        }, t, n, i)
                    }
                    for (var u = [], l = [], h = 0, f = a.length; h < f; h++) u[h] = s, l[h] = null;
                    return e.$watch(function(e) {
                        for (var t = !1, n = 0, i = a.length; n < i; n++) {
                            var c = a[n](e);
                            (t || (t = !s(c, u[n], a[n].isPure))) && (l[n] = c, u[n] = c && Vr(c))
                        }
                        return t && (o = r(e, void 0, void 0, l)), o
                    }, t, n, i)
                }

                function u(e, t, n, r, i) {
                    var o, a, s = r.literal ? l : U,
                        c = r.$$intercepted || r,
                        u = r.$$interceptor || V,
                        h = r.inputs && !c.inputs;
                    return p.literal = r.literal, p.constant = r.constant, p.inputs = r.inputs, f(p), o = e.$watch(p, t, n, i);

                    function d() {
                        s(a) && o()
                    }

                    function p(e, t, n, r) {
                        return a = h && r ? r[0] : c(e, t, n, r), s(a) && e.$$postDigest(d), u(a)
                    }
                }

                function l(e) {
                    var t = !0;
                    return x(e, function(e) {
                        U(e) || (t = !1)
                    }), t
                }

                function h(e, t, n, r) {
                    var i = e.$watch(function(e) {
                        return i(), r(e)
                    }, t, n);
                    return i
                }

                function f(e) {
                    return e.constant ? e.$$watchDelegate = h : e.oneTime ? e.$$watchDelegate = u : e.inputs && (e.$$watchDelegate = c), e
                }

                function d(e, t) {
                    if (!t) return e;
                    e.$$interceptor && (t = function(e, t) {
                        function n(n) {
                            return t(e(n))
                        }
                        return n.$stateful = e.$stateful || t.$stateful, n.$$pure = e.$$pure && t.$$pure, n
                    }(e.$$interceptor, t), e = e.$$intercepted);
                    var n = !1,
                        r = function(r, i, o, a) {
                            var s = n && a ? a[0] : e(r, i, o, a);
                            return t(s)
                        };
                    return r.$$intercepted = e, r.$$interceptor = t, r.literal = e.literal, r.oneTime = e.oneTime, r.constant = e.constant, t.$stateful || (n = !e.inputs, r.inputs = e.inputs ? e.inputs : [e], t.$$pure || (r.inputs = r.inputs.map(function(e) {
                        return e.isPure === kr ? function(t) {
                            return e(t)
                        } : e
                    }))), f(r)
                }
            }]
        }

        function Dr() {
            var e = !0;
            this.$get = ["$rootScope", "$exceptionHandler", function(t, n) {
                return Ur(function(e) {
                    t.$evalAsync(e)
                }, n, e)
            }], this.errorOnUnhandledRejections = function(t) {
                return U(t) ? (e = t, this) : e
            }
        }

        function jr() {
            var e = !0;
            this.$get = ["$browser", "$exceptionHandler", function(t, n) {
                return Ur(function(e) {
                    t.defer(e)
                }, n, e)
            }], this.errorOnUnhandledRejections = function(t) {
                return U(t) ? (e = t, this) : e
            }
        }

        function Ur(e, t, n) {
            var r = i("$q", TypeError),
                o = 0,
                a = [];

            function s() {
                return new function() {
                    var e = this.promise = new c;
                    this.resolve = function(t) {
                        h(e, t)
                    }, this.reject = function(t) {
                        f(e, t)
                    }, this.notify = function(t) {
                        p(e, t)
                    }
                }
            }

            function c() {
                this.$$state = {
                    status: 0
                }
            }

            function u() {
                for (; !o && a.length;) {
                    var e = a.shift();
                    if (!Lr(e)) {
                        qr(e);
                        var n = "Possibly unhandled rejection: " + Ke(e.value);
                        W(e.value) ? t(e.value, n) : t(n)
                    }
                }
            }

            function l(r) {
                !n || r.pending || 2 !== r.status || Lr(r) || (0 === o && 0 === a.length && e(u), a.push(r)), !r.processScheduled && r.pending && (r.processScheduled = !0, ++o, e(function() {
                    ! function(r) {
                        var i, a, s;
                        s = r.pending, r.processScheduled = !1, r.pending = void 0;
                        try {
                            for (var c = 0, l = s.length; c < l; ++c) {
                                qr(r), a = s[c][0], i = s[c][r.status];
                                try {
                                    G(i) ? h(a, i(r.value)) : 1 === r.status ? h(a, r.value) : f(a, r.value)
                                } catch (e) {
                                    f(a, e), e && !0 === e.$$passToExceptionHandler && t(e)
                                }
                            }
                        } finally {
                            --o, n && 0 === o && e(u)
                        }
                    }(r)
                }))
            }

            function h(e, t) {
                e.$$state.status || (t === e ? d(e, r("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : function e(t, n) {
                    var r;
                    var i = !1;
                    try {
                        (L(n) || G(n)) && (r = n.then), G(r) ? (t.$$state.status = -1, r.call(n, function o(e) {
                            if (i) return;
                            i = !0,
                                function e(t, n) {
                                    var r;
                                    var i = !1;
                                    try {
                                        (L(n) || G(n)) && (r = n.then), G(r) ? (t.$$state.status = -1, r.call(n, o, a, function(e) {
                                            p(t, e)
                                        })) : (t.$$state.value = n, t.$$state.status = 1, l(t.$$state))
                                    } catch (e) {
                                        a(e)
                                    }

                                    function o(n) {
                                        i || (i = !0, e(t, n))
                                    }

                                    function a(e) {
                                        i || (i = !0, d(t, e))
                                    }
                                }(t, e)
                        }, a, function(e) {
                            p(t, e)
                        })) : (t.$$state.value = n, t.$$state.status = 1, l(t.$$state))
                    } catch (e) {
                        a(e)
                    }

                    function o(n) {
                        i || (i = !0, e(t, n))
                    }

                    function a(e) {
                        i || (i = !0, d(t, e))
                    }
                }(e, t))
            }

            function f(e, t) {
                e.$$state.status || d(e, t)
            }

            function d(e, t) {
                e.$$state.value = t, e.$$state.status = 2, l(e.$$state)
            }

            function p(n, r) {
                var i = n.$$state.pending;
                n.$$state.status <= 0 && i && i.length && e(function() {
                    for (var e, n, o = 0, a = i.length; o < a; o++) {
                        n = i[o][0], e = i[o][3];
                        try {
                            p(n, G(e) ? e(r) : r)
                        } catch (e) {
                            t(e)
                        }
                    }
                })
            }

            function $(e) {
                var t = new c;
                return f(t, e), t
            }

            function v(e, t, n) {
                var r = null;
                try {
                    G(n) && (r = n())
                } catch (e) {
                    return $(e)
                }
                return Z(r) ? r.then(function() {
                    return t(e)
                }, $) : t(e)
            }

            function g(e, t, n, r) {
                var i = new c;
                return h(i, e), i.then(t, n, r)
            }
            _(c.prototype, {
                then: function(e, t, n) {
                    if (j(e) && j(t) && j(n)) return this;
                    var r = new c;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && l(this.$$state), r
                },
                catch: function(e) {
                    return this.then(null, e)
                },
                finally: function(e, t) {
                    return this.then(function(t) {
                        return v(t, m, e)
                    }, function(t) {
                        return v(t, $, e)
                    }, t)
                }
            });
            var m = g;

            function y(e) {
                if (!G(e)) throw r("norslvr", "Expected resolverFn, got '{0}'", e);
                var t = new c;
                return e(function(e) {
                    h(t, e)
                }, function(e) {
                    f(t, e)
                }), t
            }
            return y.prototype = c.prototype, y.defer = s, y.reject = $, y.when = g, y.resolve = m, y.all = function(e) {
                var t = new c,
                    n = 0,
                    r = B(e) ? [] : {};
                return x(e, function(e, i) {
                    n++, g(e).then(function(e) {
                        r[i] = e, --n || h(t, r)
                    }, function(e) {
                        f(t, e)
                    })
                }), 0 === n && h(t, r), t
            }, y.race = function(e) {
                var t = s();
                return x(e, function(e) {
                    g(e).then(t.resolve, t.reject)
                }), t.promise
            }, y
        }

        function Lr(e) {
            return !!e.pur
        }

        function qr(e) {
            e.pur = !0
        }

        function Fr(e) {
            qr(e.$$state)
        }

        function Hr() {
            this.$get = ["$window", "$timeout", function(e, t) {
                var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                    r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                    i = !!n,
                    o = i ? function(e) {
                        var t = n(e);
                        return function() {
                            r(t)
                        }
                    } : function(e) {
                        var n = t(e, 16.66, !1);
                        return function() {
                            t.cancel(n)
                        }
                    };
                return o.supported = i, o
            }]
        }

        function zr() {
            var e = 10,
                t = i("$rootScope"),
                n = null,
                r = null;
            this.digestTtl = function(t) {
                return arguments.length && (e = t), e
            }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(i, a, s) {
                function c(e) {
                    e.currentScope.$$destroyed = !0
                }

                function u() {
                    this.$id = O(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$suspended = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
                }
                u.prototype = {
                    constructor: u,
                    $new: function(e, t) {
                        var n;
                        return t = t || this, e ? (n = new u).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(e) {
                            function t() {
                                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = O(), this.$$ChildScope = null, this.$$suspended = !1
                            }
                            return t.prototype = e, t
                        }(this)), n = new this.$$ChildScope), n.$parent = t, n.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = n, t.$$childTail = n) : t.$$childHead = t.$$childTail = n, (e || t !== this) && n.$on("$destroy", c), n
                    },
                    $watch: function(e, t, r, i) {
                        var o = a(e),
                            s = G(t) ? t : N;
                        if (o.$$watchDelegate) return o.$$watchDelegate(this, s, r, o, e);
                        var c = this,
                            u = c.$$watchers,
                            l = {
                                fn: s,
                                last: w,
                                get: o,
                                exp: i || e,
                                eq: !!r
                            };
                        return n = null, u || ((u = c.$$watchers = []).$$digestWatchIndex = -1), u.unshift(l), u.$$digestWatchIndex++, m(this, 1),
                            function() {
                                var e = oe(u, l);
                                e >= 0 && (m(c, -1), e < u.$$digestWatchIndex && u.$$digestWatchIndex--), n = null
                            }
                    },
                    $watchGroup: function(e, t) {
                        var n = new Array(e.length),
                            r = new Array(e.length),
                            i = [],
                            o = this,
                            a = !1,
                            s = !0;
                        if (!e.length) {
                            var c = !0;
                            return o.$evalAsync(function() {
                                    c && t(r, r, o)
                                }),
                                function() {
                                    c = !1
                                }
                        }
                        if (1 === e.length) return this.$watch(e[0], function(e, i, o) {
                            r[0] = e, n[0] = i, t(r, e === i ? r : n, o)
                        });

                        function u() {
                            a = !1;
                            try {
                                s ? (s = !1, t(r, r, o)) : t(r, n, o)
                            } finally {
                                for (var i = 0; i < e.length; i++) n[i] = r[i]
                            }
                        }
                        return x(e, function(e, t) {
                                var n = o.$watch(e, function(e) {
                                    r[t] = e, a || (a = !0, o.$evalAsync(u))
                                });
                                i.push(n)
                            }),
                            function() {
                                for (; i.length;) i.shift()()
                            }
                    },
                    $watchCollection: function(e, t) {
                        $.$$pure = a(e).literal, $.$stateful = !$.$$pure;
                        var n, r, i, o = this,
                            s = t.length > 1,
                            c = 0,
                            u = a(e, $),
                            l = [],
                            f = {},
                            d = !0,
                            p = 0;

                        function $(e) {
                            var t, i, o, a;
                            if (!j(n = e)) {
                                if (L(n))
                                    if (S(n)) {
                                        r !== l && (p = (r = l).length = 0, c++), t = n.length, p !== t && (c++, r.length = p = t);
                                        for (var s = 0; s < t; s++) a = r[s], o = n[s], a != a && o != o || a === o || (c++, r[s] = o)
                                    } else {
                                        for (i in r !== f && (r = f = {}, p = 0, c++), t = 0, n) h.call(n, i) && (t++, o = n[i], a = r[i], i in r ? a != a && o != o || a === o || (c++, r[i] = o) : (p++, r[i] = o, c++));
                                        if (p > t)
                                            for (i in c++, r) h.call(n, i) || (p--, delete r[i])
                                    }
                                else r !== n && (r = n, c++);
                                return c
                            }
                        }
                        return this.$watch(u, function() {
                            if (d ? (d = !1, t(n, n, o)) : t(n, i, o), s)
                                if (L(n))
                                    if (S(n)) {
                                        i = new Array(n.length);
                                        for (var e = 0; e < n.length; e++) i[e] = n[e]
                                    } else
                                        for (var r in i = {}, n) h.call(n, r) && (i[r] = n[r]);
                            else i = n
                        })
                    },
                    $digest: function() {
                        var o, a, c, u, h, p, m, y, S, x = e,
                            C = f.length ? l : this,
                            E = [];
                        v("$digest"), s.$$checkUrlChange(), this === l && null !== r && (s.defer.cancel(r), b()), n = null;
                        do {
                            h = !1, m = C;
                            for (var O = 0; O < f.length; O++) {
                                try {
                                    (0, (S = f[O]).fn)(S.scope, S.locals)
                                } catch (e) {
                                    i(e)
                                }
                                n = null
                            }
                            f.length = 0;
                            e: do {
                                if (u = !m.$$suspended && m.$$watchers)
                                    for (u.$$digestWatchIndex = u.length; u.$$digestWatchIndex--;) try {
                                        if (o = u[u.$$digestWatchIndex])
                                            if ((a = (0, o.get)(m)) === (c = o.last) || (o.eq ? ce(a, c) : M(a) && M(c))) {
                                                if (o === n) {
                                                    h = !1;
                                                    break e
                                                }
                                            } else h = !0, n = o, o.last = o.eq ? ae(a, null) : a, (0, o.fn)(a, c === w ? a : c, m), x < 5 && (E[y = 4 - x] || (E[y] = []), E[y].push({
                                                msg: G(o.exp) ? "fn: " + (o.exp.name || o.exp.toString()) : o.exp,
                                                newVal: a,
                                                oldVal: c
                                            }))
                                    } catch (e) {
                                        i(e)
                                    }
                                if (!(p = !m.$$suspended && m.$$watchersCount && m.$$childHead || m !== C && m.$$nextSibling))
                                    for (; m !== C && !(p = m.$$nextSibling);) m = m.$parent
                            } while (m = p);
                            if ((h || f.length) && !x--) throw g(), t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, E)
                        } while (h || f.length);
                        for (g(); $ < d.length;) try {
                            d[$++]()
                        } catch (e) {
                            i(e)
                        }
                        d.length = $ = 0, s.$$checkUrlChange()
                    },
                    $suspend: function() {
                        this.$$suspended = !0
                    },
                    $isSuspended: function() {
                        return this.$$suspended
                    },
                    $resume: function() {
                        this.$$suspended = !1
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var e = this.$parent;
                            for (var t in this.$broadcast("$destroy"), this.$$destroyed = !0, this === l && s.$$applicationDestroyed(), m(this, -this.$$watchersCount), this.$$listenerCount) y(this, this.$$listenerCount[t], t);
                            e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = N, this.$on = this.$watch = this.$watchGroup = function() {
                                    return N
                                }, this.$$listeners = {}, this.$$nextSibling = null,
                                function e(t) {
                                    9 === o && (t.$$childHead && e(t.$$childHead), t.$$nextSibling && e(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
                                }(this)
                        }
                    },
                    $eval: function(e, t) {
                        return a(e)(this, t)
                    },
                    $evalAsync: function(e, t) {
                        l.$$phase || f.length || s.defer(function() {
                            f.length && l.$digest()
                        }), f.push({
                            scope: this,
                            fn: a(e),
                            locals: t
                        })
                    },
                    $$postDigest: function(e) {
                        d.push(e)
                    },
                    $apply: function(e) {
                        try {
                            v("$apply");
                            try {
                                return this.$eval(e)
                            } finally {
                                g()
                            }
                        } catch (e) {
                            i(e)
                        } finally {
                            try {
                                l.$digest()
                            } catch (e) {
                                throw i(e), e
                            }
                        }
                    },
                    $applyAsync: function(e) {
                        var t = this;
                        e && p.push(function() {
                            t.$eval(e)
                        }), e = a(e), null === r && (r = s.defer(function() {
                            l.$apply(b)
                        }))
                    },
                    $on: function(e, t) {
                        var n = this.$$listeners[e];
                        n || (this.$$listeners[e] = n = []), n.push(t);
                        var r = this;
                        do {
                            r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
                        } while (r = r.$parent);
                        var i = this;
                        return function() {
                            var r = n.indexOf(t); - 1 !== r && (delete n[r], y(i, 1, e))
                        }
                    },
                    $emit: function(e, t) {
                        var n, r, o, a = [],
                            s = this,
                            c = !1,
                            u = {
                                name: e,
                                targetScope: s,
                                stopPropagation: function() {
                                    c = !0
                                },
                                preventDefault: function() {
                                    u.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            l = he([u], arguments, 1);
                        do {
                            for (n = s.$$listeners[e] || a, u.currentScope = s, r = 0, o = n.length; r < o; r++)
                                if (n[r]) try {
                                    n[r].apply(null, l)
                                } catch (e) {
                                    i(e)
                                } else n.splice(r, 1), r--, o--;
                            if (c) break;
                            s = s.$parent
                        } while (s);
                        return u.currentScope = null, u
                    },
                    $broadcast: function(e, t) {
                        var n = this,
                            r = this,
                            o = {
                                name: e,
                                targetScope: this,
                                preventDefault: function() {
                                    o.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            };
                        if (!this.$$listenerCount[e]) return o;
                        for (var a, s, c, u = he([o], arguments, 1); n = r;) {
                            for (o.currentScope = n, s = 0, c = (a = n.$$listeners[e] || []).length; s < c; s++)
                                if (a[s]) try {
                                    a[s].apply(null, u)
                                } catch (e) {
                                    i(e)
                                } else a.splice(s, 1), s--, c--;
                            if (!(r = n.$$listenerCount[e] && n.$$childHead || n !== this && n.$$nextSibling))
                                for (; n !== this && !(r = n.$$nextSibling);) n = n.$parent
                        }
                        return o.currentScope = null, o
                    }
                };
                var l = new u,
                    f = l.$$asyncQueue = [],
                    d = l.$$postDigestQueue = [],
                    p = l.$$applyAsyncQueue = [],
                    $ = 0;
                return l;

                function v(e) {
                    if (l.$$phase) throw t("inprog", "{0} already in progress", l.$$phase);
                    l.$$phase = e
                }

                function g() {
                    l.$$phase = null
                }

                function m(e, t) {
                    do {
                        e.$$watchersCount += t
                    } while (e = e.$parent)
                }

                function y(e, t, n) {
                    do {
                        e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
                    } while (e = e.$parent)
                }

                function w() {}

                function b() {
                    for (; p.length;) try {
                        p.shift()()
                    } catch (e) {
                        i(e)
                    }
                    r = null
                }
            }]
        }

        function Br() {
            var e = /^\s*(https?|s?ftp|mailto|tel|file):/,
                t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(t) {
                return U(t) ? (e = t, this) : e
            }, this.imgSrcSanitizationWhitelist = function(e) {
                return U(e) ? (t = e, this) : t
            }, this.$get = function() {
                return function(n, r) {
                    var i = r ? t : e,
                        o = ci(n && n.trim()).href;
                    return "" === o || o.match(i) ? n : "unsafe:" + o
                }
            }
        }
        Mr.prototype = {
            compile: function(e) {
                var t = this;
                this.state = {
                    nextId: 0,
                    filters: {},
                    fn: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    assign: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    inputs: []
                }, Ar(e, t.$filter);
                var n, r = "";
                if (this.stage = "assign", n = Tr(e)) {
                    this.state.computing = "assign";
                    var i = this.nextId();
                    this.recurse(n, i), this.return_(i), r = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                }
                var o = _r(e.body);
                t.stage = "inputs", x(o, function(e, n) {
                    var r = "fn" + n;
                    t.state[r] = {
                        vars: [],
                        body: [],
                        own: {}
                    }, t.state.computing = r;
                    var i = t.nextId();
                    t.recurse(e, i), t.return_(i), t.state.inputs.push({
                        name: r,
                        isPure: e.isPure
                    }), e.watchId = n
                }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
                var a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;",
                    s = new Function("$filter", "getStringValue", "ifDefined", "plus", a)(this.$filter, yr, Cr, Er);
                return this.state = this.stage = void 0, s
            },
            USE: "use",
            STRICT: "strict",
            watchFns: function() {
                var e = [],
                    t = this.state.inputs,
                    n = this;
                return x(t, function(t) {
                    e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")), t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
                }), t.length && e.push("fn.inputs=[" + t.map(function(e) {
                    return e.name
                }).join(",") + "];"), e.join("")
            },
            generateFunction: function(e, t) {
                return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
            },
            filterPrefix: function() {
                var e = [],
                    t = this;
                return x(this.state.filters, function(n, r) {
                    e.push(n + "=$filter(" + t.escape(r) + ")")
                }), e.length ? "var " + e.join(",") + ";" : ""
            },
            varsPrefix: function(e) {
                return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
            },
            body: function(e) {
                return this.state[e].body.join("")
            },
            recurse: function(e, t, n, r, i, o) {
                var a, s, c, u, l, h = this;
                if (r = r || N, !o && U(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, i, !0));
                switch (e.type) {
                    case xr.Program:
                        x(e.body, function(t, n) {
                            h.recurse(t.expression, void 0, void 0, function(e) {
                                s = e
                            }), n !== e.body.length - 1 ? h.current().body.push(s, ";") : h.return_(s)
                        });
                        break;
                    case xr.Literal:
                        u = this.escape(e.value), this.assign(t, u), r(t || u);
                        break;
                    case xr.UnaryExpression:
                        this.recurse(e.argument, void 0, void 0, function(e) {
                            s = e
                        }), u = e.operator + "(" + this.ifDefined(s, 0) + ")", this.assign(t, u), r(u);
                        break;
                    case xr.BinaryExpression:
                        this.recurse(e.left, void 0, void 0, function(e) {
                            a = e
                        }), this.recurse(e.right, void 0, void 0, function(e) {
                            s = e
                        }), u = "+" === e.operator ? this.plus(a, s) : "-" === e.operator ? this.ifDefined(a, 0) + e.operator + this.ifDefined(s, 0) : "(" + a + ")" + e.operator + "(" + s + ")", this.assign(t, u), r(u);
                        break;
                    case xr.LogicalExpression:
                        t = t || this.nextId(), h.recurse(e.left, t), h.if_("&&" === e.operator ? t : h.not(t), h.lazyRecurse(e.right, t)), r(t);
                        break;
                    case xr.ConditionalExpression:
                        t = t || this.nextId(), h.recurse(e.test, t), h.if_(t, h.lazyRecurse(e.alternate, t), h.lazyRecurse(e.consequent, t)), r(t);
                        break;
                    case xr.Identifier:
                        t = t || this.nextId(), n && (n.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", e.name)), function() {
                            h.if_("inputs" === h.stage || "s", function() {
                                i && 1 !== i && h.if_(h.isNull(h.nonComputedMember("s", e.name)), h.lazyAssign(h.nonComputedMember("s", e.name), "{}")), h.assign(t, h.nonComputedMember("s", e.name))
                            })
                        }, t && h.lazyAssign(t, h.nonComputedMember("l", e.name))), r(t);
                        break;
                    case xr.MemberExpression:
                        a = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), h.recurse(e.object, a, void 0, function() {
                            h.if_(h.notNull(a), function() {
                                e.computed ? (s = h.nextId(), h.recurse(e.property, s), h.getStringValue(s), i && 1 !== i && h.if_(h.not(h.computedMember(a, s)), h.lazyAssign(h.computedMember(a, s), "{}")), u = h.computedMember(a, s), h.assign(t, u), n && (n.computed = !0, n.name = s)) : (i && 1 !== i && h.if_(h.isNull(h.nonComputedMember(a, e.property.name)), h.lazyAssign(h.nonComputedMember(a, e.property.name), "{}")), u = h.nonComputedMember(a, e.property.name), h.assign(t, u), n && (n.computed = !1, n.name = e.property.name))
                            }, function() {
                                h.assign(t, "undefined")
                            }), r(t)
                        }, !!i);
                        break;
                    case xr.CallExpression:
                        t = t || this.nextId(), e.filter ? (s = h.filter(e.callee.name), c = [], x(e.arguments, function(e) {
                            var t = h.nextId();
                            h.recurse(e, t), c.push(t)
                        }), u = s + "(" + c.join(",") + ")", h.assign(t, u), r(t)) : (s = h.nextId(), a = {}, c = [], h.recurse(e.callee, s, a, function() {
                            h.if_(h.notNull(s), function() {
                                x(e.arguments, function(t) {
                                    h.recurse(t, e.constant ? void 0 : h.nextId(), void 0, function(e) {
                                        c.push(e)
                                    })
                                }), u = a.name ? h.member(a.context, a.name, a.computed) + "(" + c.join(",") + ")" : s + "(" + c.join(",") + ")", h.assign(t, u)
                            }, function() {
                                h.assign(t, "undefined")
                            }), r(t)
                        }));
                        break;
                    case xr.AssignmentExpression:
                        s = this.nextId(), a = {}, this.recurse(e.left, void 0, a, function() {
                            h.if_(h.notNull(a.context), function() {
                                h.recurse(e.right, s), u = h.member(a.context, a.name, a.computed) + e.operator + s, h.assign(t, u), r(t || u)
                            })
                        }, 1);
                        break;
                    case xr.ArrayExpression:
                        c = [], x(e.elements, function(t) {
                            h.recurse(t, e.constant ? void 0 : h.nextId(), void 0, function(e) {
                                c.push(e)
                            })
                        }), u = "[" + c.join(",") + "]", this.assign(t, u), r(t || u);
                        break;
                    case xr.ObjectExpression:
                        c = [], l = !1, x(e.properties, function(e) {
                            e.computed && (l = !0)
                        }), l ? (t = t || this.nextId(), this.assign(t, "{}"), x(e.properties, function(e) {
                            e.computed ? (a = h.nextId(), h.recurse(e.key, a)) : a = e.key.type === xr.Identifier ? e.key.name : "" + e.key.value, s = h.nextId(), h.recurse(e.value, s), h.assign(h.member(t, a, e.computed), s)
                        })) : (x(e.properties, function(t) {
                            h.recurse(t.value, e.constant ? void 0 : h.nextId(), void 0, function(e) {
                                c.push(h.escape(t.key.type === xr.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                            })
                        }), u = "{" + c.join(",") + "}", this.assign(t, u)), r(t || u);
                        break;
                    case xr.ThisExpression:
                        this.assign(t, "s"), r(t || "s");
                        break;
                    case xr.LocalsExpression:
                        this.assign(t, "l"), r(t || "l");
                        break;
                    case xr.NGValueParameter:
                        this.assign(t, "v"), r(t || "v")
                }
            },
            getHasOwnProperty: function(e, t) {
                var n = e + "." + t,
                    r = this.current().own;
                return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
            },
            assign: function(e, t) {
                if (e) return this.current().body.push(e, "=", t, ";"), e
            },
            filter: function(e) {
                return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
            },
            ifDefined: function(e, t) {
                return "ifDefined(" + e + "," + this.escape(t) + ")"
            },
            plus: function(e, t) {
                return "plus(" + e + "," + t + ")"
            },
            return_: function(e) {
                this.current().body.push("return ", e, ";")
            },
            if_: function(e, t, n) {
                if (!0 === e) t();
                else {
                    var r = this.current().body;
                    r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
                }
            },
            not: function(e) {
                return "!(" + e + ")"
            },
            isNull: function(e) {
                return e + "==null"
            },
            notNull: function(e) {
                return e + "!=null"
            },
            nonComputedMember: function(e, t) {
                return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t) ? e + "." + t : e + '["' + t.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]'
            },
            computedMember: function(e, t) {
                return e + "[" + t + "]"
            },
            member: function(e, t, n) {
                return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
            },
            getStringValue: function(e) {
                this.assign(e, "getStringValue(" + e + ")")
            },
            lazyRecurse: function(e, t, n, r, i, o) {
                var a = this;
                return function() {
                    a.recurse(e, t, n, r, i, o)
                }
            },
            lazyAssign: function(e, t) {
                var n = this;
                return function() {
                    n.assign(e, t)
                }
            },
            stringEscapeRegex: /[^ a-zA-Z0-9]/g,
            stringEscapeFn: function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            },
            escape: function(e) {
                if (F(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (H(e)) return e.toString();
                if (!0 === e) return "true";
                if (!1 === e) return "false";
                if (null === e) return "null";
                if (void 0 === e) return "undefined";
                throw gr("esc", "IMPOSSIBLE")
            },
            nextId: function(e, t) {
                var n = "v" + this.state.nextId++;
                return e || this.current().vars.push(n + (t ? "=" + t : "")), n
            },
            current: function() {
                return this.state[this.state.computing]
            }
        }, Rr.prototype = {
            compile: function(e) {
                var t, n, r = this;
                Ar(e, r.$filter), (t = Tr(e)) && (n = this.recurse(t));
                var i, o = _r(e.body);
                o && (i = [], x(o, function(e, t) {
                    var n = r.recurse(e);
                    n.isPure = e.isPure, e.input = n, i.push(n), e.watchId = t
                }));
                var a = [];
                x(e.body, function(e) {
                    a.push(r.recurse(e.expression))
                });
                var s = 0 === e.body.length ? N : 1 === e.body.length ? a[0] : function(e, t) {
                    var n;
                    return x(a, function(r) {
                        n = r(e, t)
                    }), n
                };
                return n && (s.assign = function(e, t, r) {
                    return n(e, r, t)
                }), i && (s.inputs = i), s
            },
            recurse: function(e, t, n) {
                var r, i, o, a = this;
                if (e.input) return this.inputs(e.input, e.watchId);
                switch (e.type) {
                    case xr.Literal:
                        return this.value(e.value, t);
                    case xr.UnaryExpression:
                        return i = this.recurse(e.argument), this["unary" + e.operator](i, t);
                    case xr.BinaryExpression:
                    case xr.LogicalExpression:
                        return r = this.recurse(e.left), i = this.recurse(e.right), this["binary" + e.operator](r, i, t);
                    case xr.ConditionalExpression:
                        return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                    case xr.Identifier:
                        return a.identifier(e.name, t, n);
                    case xr.MemberExpression:
                        return r = this.recurse(e.object, !1, !!n), e.computed || (i = e.property.name), e.computed && (i = this.recurse(e.property)), e.computed ? this.computedMember(r, i, t, n) : this.nonComputedMember(r, i, t, n);
                    case xr.CallExpression:
                        return o = [], x(e.arguments, function(e) {
                            o.push(a.recurse(e))
                        }), e.filter && (i = this.$filter(e.callee.name)), e.filter || (i = this.recurse(e.callee, !0)), e.filter ? function(e, n, r, a) {
                            for (var s = [], c = 0; c < o.length; ++c) s.push(o[c](e, n, r, a));
                            var u = i.apply(void 0, s, a);
                            return t ? {
                                context: void 0,
                                name: void 0,
                                value: u
                            } : u
                        } : function(e, n, r, a) {
                            var s, c = i(e, n, r, a);
                            if (null != c.value) {
                                for (var u = [], l = 0; l < o.length; ++l) u.push(o[l](e, n, r, a));
                                s = c.value.apply(c.context, u)
                            }
                            return t ? {
                                value: s
                            } : s
                        };
                    case xr.AssignmentExpression:
                        return r = this.recurse(e.left, !0, 1), i = this.recurse(e.right),
                            function(e, n, o, a) {
                                var s = r(e, n, o, a),
                                    c = i(e, n, o, a);
                                return s.context[s.name] = c, t ? {
                                    value: c
                                } : c
                            };
                    case xr.ArrayExpression:
                        return o = [], x(e.elements, function(e) {
                                o.push(a.recurse(e))
                            }),
                            function(e, n, r, i) {
                                for (var a = [], s = 0; s < o.length; ++s) a.push(o[s](e, n, r, i));
                                return t ? {
                                    value: a
                                } : a
                            };
                    case xr.ObjectExpression:
                        return o = [], x(e.properties, function(e) {
                                e.computed ? o.push({
                                    key: a.recurse(e.key),
                                    computed: !0,
                                    value: a.recurse(e.value)
                                }) : o.push({
                                    key: e.key.type === xr.Identifier ? e.key.name : "" + e.key.value,
                                    computed: !1,
                                    value: a.recurse(e.value)
                                })
                            }),
                            function(e, n, r, i) {
                                for (var a = {}, s = 0; s < o.length; ++s) o[s].computed ? a[o[s].key(e, n, r, i)] = o[s].value(e, n, r, i) : a[o[s].key] = o[s].value(e, n, r, i);
                                return t ? {
                                    value: a
                                } : a
                            };
                    case xr.ThisExpression:
                        return function(e) {
                            return t ? {
                                value: e
                            } : e
                        };
                    case xr.LocalsExpression:
                        return function(e, n) {
                            return t ? {
                                value: n
                            } : n
                        };
                    case xr.NGValueParameter:
                        return function(e, n, r) {
                            return t ? {
                                value: r
                            } : r
                        }
                }
            },
            "unary+": function(e, t) {
                return function(n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = U(a) ? +a : 0, t ? {
                        value: a
                    } : a
                }
            },
            "unary-": function(e, t) {
                return function(n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = U(a) ? -a : -0, t ? {
                        value: a
                    } : a
                }
            },
            "unary!": function(e, t) {
                return function(n, r, i, o) {
                    var a = !e(n, r, i, o);
                    return t ? {
                        value: a
                    } : a
                }
            },
            "binary+": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = Er(e(r, i, o, a), t(r, i, o, a));
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary-": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a),
                        c = t(r, i, o, a),
                        u = (U(s) ? s : 0) - (U(c) ? c : 0);
                    return n ? {
                        value: u
                    } : u
                }
            },
            "binary*": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) * t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary/": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) / t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary%": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) % t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary===": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) === t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!==": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) !== t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary==": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) == t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) != t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) < t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) > t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) <= t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) >= t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary&&": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) && t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary||": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) || t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "ternary?:": function(e, t, n, r) {
                return function(i, o, a, s) {
                    var c = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
                    return r ? {
                        value: c
                    } : c
                }
            },
            value: function(e, t) {
                return function() {
                    return t ? {
                        context: void 0,
                        name: void 0,
                        value: e
                    } : e
                }
            },
            identifier: function(e, t, n) {
                return function(r, i, o, a) {
                    var s = i && e in i ? i : r;
                    n && 1 !== n && s && null == s[e] && (s[e] = {});
                    var c = s ? s[e] : void 0;
                    return t ? {
                        context: s,
                        name: e,
                        value: c
                    } : c
                }
            },
            computedMember: function(e, t, n, r) {
                return function(i, o, a, s) {
                    var c, u, l = e(i, o, a, s);
                    return null != l && (c = yr(c = t(i, o, a, s)), r && 1 !== r && l && !l[c] && (l[c] = {}), u = l[c]), n ? {
                        context: l,
                        name: c,
                        value: u
                    } : u
                }
            },
            nonComputedMember: function(e, t, n, r) {
                return function(i, o, a, s) {
                    var c = e(i, o, a, s);
                    r && 1 !== r && c && null == c[t] && (c[t] = {});
                    var u = null != c ? c[t] : void 0;
                    return n ? {
                        context: c,
                        name: t,
                        value: u
                    } : u
                }
            },
            inputs: function(e, t) {
                return function(n, r, i, o) {
                    return o ? o[t] : e(n, r, i)
                }
            }
        }, Nr.prototype = {
            constructor: Nr,
            parse: function(e) {
                var t = this.getAst(e),
                    n = this.astCompiler.compile(t.ast);
                return n.literal = function(e) {
                    return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === xr.Literal || e.body[0].expression.type === xr.ArrayExpression || e.body[0].expression.type === xr.ObjectExpression)
                }(t.ast), n.constant = function(e) {
                    return e.constant
                }(t.ast), n.oneTime = t.oneTime, n
            },
            getAst: function(e) {
                var t = !1;
                return ":" === (e = e.trim()).charAt(0) && ":" === e.charAt(1) && (t = !0, e = e.substring(2)), {
                    ast: this.ast.ast(e),
                    oneTime: t
                }
            }
        };
        var Wr = i("$sce"),
            Gr = {
                HTML: "html",
                CSS: "css",
                MEDIA_URL: "mediaUrl",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            Kr = /_([a-z])/g;

        function Jr(e) {
            return e.replace(Kr, nt)
        }

        function Qr(e) {
            var t = [];
            return U(e) && x(e, function(e) {
                t.push(function(e) {
                    if ("self" === e) return e;
                    if (F(e)) {
                        if (e.indexOf("***") > -1) throw Wr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                        return e = te(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + e + "$")
                    }
                    if (K(e)) return new RegExp("^" + e.source + "$");
                    throw Wr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
                }(e))
            }), t
        }

        function Yr() {
            this.SCE_CONTEXTS = Gr;
            var t = ["self"],
                n = [];
            this.resourceUrlWhitelist = function(e) {
                return arguments.length && (t = Qr(e)), t
            }, this.resourceUrlBlacklist = function(e) {
                return arguments.length && (n = Qr(e)), n
            }, this.$get = ["$injector", "$$sanitizeUri", function(r, i) {
                var o = function(e) {
                    throw Wr("unsafe", "Attempting to use an unsafe value in a safe context.")
                };

                function a(t, n) {
                    return "self" === t ? ui(n, si) || function(t) {
                        return ui(t, function() {
                            if (e.document.baseURI) return e.document.baseURI;
                            oi || ((oi = e.document.createElement("a")).href = ".", oi = oi.cloneNode(!1));
                            return oi.href
                        }())
                    }(n) : !!t.exec(n.href)
                }

                function s(e) {
                    var t = function(e) {
                        this.$$unwrapTrustedValue = function() {
                            return e
                        }
                    };
                    return e && (t.prototype = new e), t.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, t.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, t
                }
                r.has("$sanitize") && (o = r.get("$sanitize"));
                var c = s(),
                    u = {};
                return u[Gr.HTML] = s(c), u[Gr.CSS] = s(c), u[Gr.MEDIA_URL] = s(c), u[Gr.URL] = s(u[Gr.MEDIA_URL]), u[Gr.JS] = s(c), u[Gr.RESOURCE_URL] = s(u[Gr.URL]), {
                    trustAs: function(e, t) {
                        var n = u.hasOwnProperty(e) ? u[e] : null;
                        if (!n) throw Wr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                        if (null === t || j(t) || "" === t) return t;
                        if ("string" != typeof t) throw Wr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                        return new n(t)
                    },
                    getTrusted: function(e, r) {
                        if (null === r || j(r) || "" === r) return r;
                        var s = u.hasOwnProperty(e) ? u[e] : null;
                        if (s && r instanceof s) return r.$$unwrapTrustedValue();
                        if (G(r.$$unwrapTrustedValue) && (r = r.$$unwrapTrustedValue()), e === Gr.MEDIA_URL || e === Gr.URL) return i(r, e === Gr.MEDIA_URL);
                        if (e === Gr.RESOURCE_URL) {
                            if (function(e) {
                                    var r, i, o = ci(e.toString()),
                                        s = !1;
                                    for (r = 0, i = t.length; r < i; r++)
                                        if (a(t[r], o)) {
                                            s = !0;
                                            break
                                        } if (s)
                                        for (r = 0, i = n.length; r < i; r++)
                                            if (a(n[r], o)) {
                                                s = !1;
                                                break
                                            } return s
                                }(r)) return r;
                            throw Wr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", r.toString())
                        }
                        if (e === Gr.HTML) return o(r);
                        throw Wr("unsafe", "Attempting to use an unsafe value in a safe context.")
                    },
                    valueOf: function(e) {
                        return e instanceof c ? e.$$unwrapTrustedValue() : e
                    }
                }
            }]
        }

        function Zr() {
            var e = !0;
            this.enabled = function(t) {
                return arguments.length && (e = !!t), e
            }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
                if (e && o < 8) throw Wr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var r = Ge(Gr);
                r.isEnabled = function() {
                    return e
                }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                    return t
                }, r.valueOf = V), r.parseAs = function(e, n) {
                    var i = t(n);
                    return i.literal && i.constant ? i : t(n, function(t) {
                        return r.getTrusted(e, t)
                    })
                };
                var i = r.parseAs,
                    a = r.getTrusted,
                    s = r.trustAs;
                return x(Gr, function(e, t) {
                    var n = f(t);
                    r[Jr("parse_as_" + n)] = function(t) {
                        return i(e, t)
                    }, r[Jr("get_trusted_" + n)] = function(t) {
                        return a(e, t)
                    }, r[Jr("trust_as_" + n)] = function(t) {
                        return s(e, t)
                    }
                }), r
            }]
        }

        function Xr() {
            this.$get = ["$window", "$document", function(e, t) {
                var n = {},
                    r = !(!(e.nw && e.nw.process) && e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id)) && e.history && e.history.pushState,
                    i = T((/android (\d+)/.exec(f((e.navigator || {}).userAgent)) || [])[1]),
                    a = /Boxee/i.test((e.navigator || {}).userAgent),
                    s = t[0] || {},
                    c = s.body && s.body.style,
                    u = !1,
                    l = !1;
                return c && (u = !!("transition" in c || "webkitTransition" in c), l = !!("animation" in c || "webkitAnimation" in c)), {
                    history: !(!r || i < 4 || a),
                    hasEvent: function(e) {
                        if ("input" === e && o) return !1;
                        if (j(n[e])) {
                            var t = s.createElement("div");
                            n[e] = "on" + e in t
                        }
                        return n[e]
                    },
                    csp: ue(),
                    transitions: u,
                    animations: l,
                    android: i
                }
            }]
        }
        var ei = i("$templateRequest");

        function ti() {
            var e;
            this.httpOptions = function(t) {
                return t ? (e = t, this) : e
            }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(t, n, r, i, o) {
                function a(s, c) {
                    a.totalPendingRequests++, F(s) && !j(n.get(s)) || (s = o.getTrustedResourceUrl(s));
                    var u = r.defaults && r.defaults.transformResponse;
                    return B(u) ? u = u.filter(function(e) {
                        return e !== Un
                    }) : u === Un && (u = null), r.get(s, _({
                        cache: n,
                        transformResponse: u
                    }, e)).finally(function() {
                        a.totalPendingRequests--
                    }).then(function(e) {
                        return n.put(s, e.data)
                    }, function(e) {
                        c || (e = ei("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, e.status, e.statusText), t(e));
                        return i.reject(e)
                    })
                }
                return a.totalPendingRequests = 0, a
            }]
        }

        function ni() {
            this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
                var r = {
                    findBindings: function(e, t, n) {
                        var r = [];
                        return x(e.getElementsByClassName("ng-binding"), function(e) {
                            var i = w.element(e).data("$binding");
                            i && x(i, function(i) {
                                n ? new RegExp("(^|\\s)" + te(t) + "(\\s|\\||$)").test(i) && r.push(e) : -1 !== i.indexOf(t) && r.push(e)
                            })
                        }), r
                    },
                    findModels: function(e, t, n) {
                        for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                            var o = "[" + r[i] + "model" + (n ? "=" : "*=") + '"' + t + '"]',
                                a = e.querySelectorAll(o);
                            if (a.length) return a
                        }
                    },
                    getLocation: function() {
                        return n.url()
                    },
                    setLocation: function(t) {
                        t !== n.url() && (n.url(t), e.$digest())
                    },
                    whenStable: function(e) {
                        t.notifyWhenNoOutstandingRequests(e)
                    }
                };
                return r
            }]
        }
        var ri = i("$timeout");

        function ii() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
                var o = {};

                function a(a, s, c) {
                    G(a) || (c = s, s = a, a = N);
                    var u, l = fe(arguments, 3),
                        h = U(c) && !c,
                        f = (h ? r : n).defer(),
                        d = f.promise;
                    return u = t.defer(function() {
                        try {
                            f.resolve(a.apply(null, l))
                        } catch (e) {
                            f.reject(e), i(e)
                        } finally {
                            delete o[d.$$timeoutId]
                        }
                        h || e.$apply()
                    }, s), d.$$timeoutId = u, o[u] = f, d
                }
                return a.cancel = function(e) {
                    if (!e) return !1;
                    if (!e.hasOwnProperty("$$timeoutId")) throw ri("badprom", "`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.");
                    if (!o.hasOwnProperty(e.$$timeoutId)) return !1;
                    var n = e.$$timeoutId,
                        r = o[n];
                    return Fr(r.promise), r.reject("canceled"), delete o[n], t.defer.cancel(n)
                }, a
            }]
        }
        var oi, ai = e.document.createElement("a"),
            si = ci(e.location.href);

        function ci(e) {
            if (!F(e)) return e;
            var t = e;
            return o && (ai.setAttribute("href", t), t = ai.href), ai.setAttribute("href", t), {
                href: ai.href,
                protocol: ai.protocol ? ai.protocol.replace(/:$/, "") : "",
                host: ai.host,
                search: ai.search ? ai.search.replace(/^\?/, "") : "",
                hash: ai.hash ? ai.hash.replace(/^#/, "") : "",
                hostname: ai.hostname,
                port: ai.port,
                pathname: "/" === ai.pathname.charAt(0) ? ai.pathname : "/" + ai.pathname
            }
        }

        function ui(e, t) {
            return e = ci(e), t = ci(t), e.protocol === t.protocol && e.host === t.host
        }

        function li() {
            this.$get = P(e)
        }

        function hi(e) {
            var t = e[0] || {},
                n = {},
                r = "";

            function i(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }
            return function() {
                var e, o, a, s, c, u = function(e) {
                    try {
                        return e.cookie || ""
                    } catch (e) {
                        return ""
                    }
                }(t);
                if (u !== r)
                    for (e = (r = u).split("; "), n = {}, a = 0; a < e.length; a++)(s = (o = e[a]).indexOf("=")) > 0 && (c = i(o.substring(0, s)), j(n[c]) && (n[c] = i(o.substring(s + 1))));
                return n
            }
        }

        function fi() {
            this.$get = hi
        }

        function di(e) {
            var t = "Filter";

            function n(r, i) {
                if (L(r)) {
                    var o = {};
                    return x(r, function(e, t) {
                        o[t] = n(t, e)
                    }), o
                }
                return e.factory(r + t, i)
            }
            this.register = n, this.$get = ["$injector", function(e) {
                return function(n) {
                    return e.get(n + t)
                }
            }], n("currency", wi), n("date", Mi), n("filter", pi), n("json", Ri), n("limitTo", Pi), n("lowercase", Ni), n("number", bi), n("orderBy", ji), n("uppercase", Vi)
        }

        function pi() {
            return function(e, t, n, r) {
                if (!S(e)) {
                    if (null == e) return e;
                    throw i("filter")("notarray", "Expected array but received: {0}", e)
                }
                var o, a;
                switch (r = r || "$", vi(t)) {
                    case "function":
                        o = t;
                        break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        a = !0;
                    case "object":
                        o = function(e, t, n, r) {
                            var i = L(e) && n in e;
                            !0 === t ? t = ce : G(t) || (t = function(e, t) {
                                return !j(e) && (null === e || null === t ? e === t : !(L(t) || L(e) && !D(e)) && (e = f("" + e), t = f("" + t), -1 !== e.indexOf(t)))
                            });
                            return function(o) {
                                return i && !L(o) ? $i(o, e[n], t, n, !1) : $i(o, e, t, n, r)
                            }
                        }(t, n, r, a);
                        break;
                    default:
                        return e
                }
                return Array.prototype.filter.call(e, o)
            }
        }

        function $i(e, t, n, r, i, o) {
            var a = vi(e),
                s = vi(t);
            if ("string" === s && "!" === t.charAt(0)) return !$i(e, t.substring(1), n, r, i);
            if (B(e)) return e.some(function(e) {
                return $i(e, t, n, r, i)
            });
            switch (a) {
                case "object":
                    var c;
                    if (i) {
                        for (c in e)
                            if (c.charAt && "$" !== c.charAt(0) && $i(e[c], t, n, r, !0)) return !0;
                        return !o && $i(e, t, n, r, !1)
                    }
                    if ("object" === s) {
                        for (c in t) {
                            var u = t[c];
                            if (!G(u) && !j(u)) {
                                var l = c === r;
                                if (!$i(l ? e : e[c], u, n, r, l, l)) return !1
                            }
                        }
                        return !0
                    }
                    return n(e, t);
                case "function":
                    return !1;
                default:
                    return n(e, t)
            }
        }

        function vi(e) {
            return null === e ? "null" : typeof e
        }
        hi.$inject = ["$document"], di.$inject = ["$provide"];
        var gi = 22,
            mi = ".",
            yi = "0";

        function wi(e) {
            var t = e.NUMBER_FORMATS;
            return function(e, n, r) {
                j(n) && (n = t.CURRENCY_SYM), j(r) && (r = t.PATTERNS[1].maxFrac);
                var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
                return null == e ? e : Si(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(i, n)
            }
        }

        function bi(e) {
            var t = e.NUMBER_FORMATS;
            return function(e, n) {
                return null == e ? e : Si(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
            }
        }

        function Si(e, t, n, r, i) {
            if (!F(e) && !H(e) || isNaN(e)) return "";
            var o, a = !isFinite(e),
                s = !1,
                c = Math.abs(e) + "",
                u = "";
            if (a) u = "∞";
            else {
                (function(e, t, n, r) {
                    var i = e.d,
                        o = i.length - e.i,
                        a = (t = j(t) ? Math.min(Math.max(n, o), r) : +t) + e.i,
                        s = i[a];
                    if (a > 0) {
                        i.splice(Math.max(e.i, a));
                        for (var c = a; c < i.length; c++) i[c] = 0
                    } else {
                        o = Math.max(0, o), e.i = 1, i.length = Math.max(1, a = t + 1), i[0] = 0;
                        for (var u = 1; u < a; u++) i[u] = 0
                    }
                    if (s >= 5)
                        if (a - 1 < 0) {
                            for (var l = 0; l > a; l--) i.unshift(0), e.i++;
                            i.unshift(1), e.i++
                        } else i[a - 1]++;
                    for (; o < Math.max(0, t); o++) i.push(0);
                    var h = i.reduceRight(function(e, t, n, r) {
                        return t += e, r[n] = t % 10, Math.floor(t / 10)
                    }, 0);
                    h && (i.unshift(h), e.i++)
                })(o = function(e) {
                    var t, n, r, i, o, a = 0;
                    for ((n = e.indexOf(mi)) > -1 && (e = e.replace(mi, "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charAt(r) === yi; r++);
                    if (r === (o = e.length)) t = [0], n = 1;
                    else {
                        for (o--; e.charAt(o) === yi;) o--;
                        for (n -= r, t = [], i = 0; r <= o; r++, i++) t[i] = +e.charAt(r)
                    }
                    return n > gi && (t = t.splice(0, gi - 1), a = n - 1, n = 1), {
                        d: t,
                        e: a,
                        i: n
                    }
                }(c), i, t.minFrac, t.maxFrac);
                var l = o.d,
                    h = o.i,
                    f = o.e,
                    d = [];
                for (s = l.reduce(function(e, t) {
                        return e && !t
                    }, !0); h < 0;) l.unshift(0), h++;
                h > 0 ? d = l.splice(h, l.length) : (d = l, l = [0]);
                var p = [];
                for (l.length >= t.lgSize && p.unshift(l.splice(-t.lgSize, l.length).join("")); l.length > t.gSize;) p.unshift(l.splice(-t.gSize, l.length).join(""));
                l.length && p.unshift(l.join("")), u = p.join(n), d.length && (u += r + d.join("")), f && (u += "e+" + f)
            }
            return e < 0 && !s ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf
        }

        function xi(e, t, n, r) {
            var i = "";
            for ((e < 0 || r && e <= 0) && (r ? e = 1 - e : (e = -e, i = "-")), e = "" + e; e.length < t;) e = yi + e;
            return n && (e = e.substr(e.length - t)), i + e
        }

        function Ci(e, t, n, r, i) {
            return n = n || 0,
                function(o) {
                    var a = o["get" + e]();
                    return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), xi(a, t, r, i)
                }
        }

        function Ei(e, t, n) {
            return function(r, i) {
                var o = r["get" + e]();
                return i[d((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o]
            }
        }

        function Oi(e) {
            var t = new Date(e, 0, 1).getDay();
            return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
        }

        function ki(e) {
            return function(t) {
                var n, r = Oi(t.getFullYear()),
                    i = +(n = t, new Date(n.getFullYear(), n.getMonth(), n.getDate() + (4 - n.getDay()))) - +r;
                return xi(1 + Math.round(i / 6048e5), e)
            }
        }

        function Ai(e, t) {
            return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
        }
        wi.$inject = ["$locale"], bi.$inject = ["$locale"];
        var _i = {
                yyyy: Ci("FullYear", 4, 0, !1, !0),
                yy: Ci("FullYear", 2, 0, !0, !0),
                y: Ci("FullYear", 1, 0, !1, !0),
                MMMM: Ei("Month"),
                MMM: Ei("Month", !0),
                MM: Ci("Month", 2, 1),
                M: Ci("Month", 1, 1),
                LLLL: Ei("Month", !1, !0),
                dd: Ci("Date", 2),
                d: Ci("Date", 1),
                HH: Ci("Hours", 2),
                H: Ci("Hours", 1),
                hh: Ci("Hours", 2, -12),
                h: Ci("Hours", 1, -12),
                mm: Ci("Minutes", 2),
                m: Ci("Minutes", 1),
                ss: Ci("Seconds", 2),
                s: Ci("Seconds", 1),
                sss: Ci("Milliseconds", 3),
                EEEE: Ei("Day"),
                EEE: Ei("Day", !0),
                a: function(e, t) {
                    return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
                },
                Z: function(e, t, n) {
                    var r = -1 * n,
                        i = r >= 0 ? "+" : "";
                    return i += xi(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + xi(Math.abs(r % 60), 2)
                },
                ww: ki(2),
                w: ki(1),
                G: Ai,
                GG: Ai,
                GGG: Ai,
                GGGG: function(e, t) {
                    return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
                }
            },
            Ii = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
            Ti = /^-?\d+$/;

        function Mi(e) {
            var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(n, r, i) {
                var o, a, s = "",
                    c = [];
                if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, F(n) && (n = Ti.test(n) ? T(n) : function(e) {
                        var n;
                        if (n = e.match(t)) {
                            var r = new Date(0),
                                i = 0,
                                o = 0,
                                a = n[8] ? r.setUTCFullYear : r.setFullYear,
                                s = n[8] ? r.setUTCHours : r.setHours;
                            n[9] && (i = T(n[9] + n[10]), o = T(n[9] + n[11])), a.call(r, T(n[1]), T(n[2]) - 1, T(n[3]));
                            var c = T(n[4] || 0) - i,
                                u = T(n[5] || 0) - o,
                                l = T(n[6] || 0),
                                h = Math.round(1e3 * parseFloat("0." + (n[7] || 0)));
                            return s.call(r, c, u, l, h), r
                        }
                        return e
                    }(n)), H(n) && (n = new Date(n)), !z(n) || !isFinite(n.getTime())) return n;
                for (; r;)(a = Ii.exec(r)) ? r = (c = he(c, a, 1)).pop() : (c.push(r), r = null);
                var u = n.getTimezoneOffset();
                return i && (u = me(i, u), n = we(n, i, !0)), x(c, function(t) {
                    o = _i[t], s += o ? o(n, e.DATETIME_FORMATS, u) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), s
            }
        }

        function Ri() {
            return function(e, t) {
                return j(t) && (t = 2), $e(e, t)
            }
        }
        Mi.$inject = ["$locale"];
        var Ni = P(f),
            Vi = P(d);

        function Pi() {
            return function(e, t, n) {
                return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : T(t), M(t) ? e : (H(e) && (e = e.toString()), S(e) ? (n = (n = !n || isNaN(n) ? 0 : T(n)) < 0 ? Math.max(0, e.length + n) : n, t >= 0 ? Di(e, n, n + t) : 0 === n ? Di(e, t, e.length) : Di(e, Math.max(0, n + t), n)) : e)
            }
        }

        function Di(e, t, n) {
            return F(e) ? e.slice(t, n) : p.call(e, t, n)
        }

        function ji(e) {
            return function(r, o, a, s) {
                if (null == r) return r;
                if (!S(r)) throw i("orderBy")("notarray", "Expected array but received: {0}", r);
                B(o) || (o = [o]), 0 === o.length && (o = ["+"]);
                var c = o.map(function(t) {
                        var n = 1,
                            r = V;
                        if (G(t)) r = t;
                        else if (F(t) && ("+" !== t.charAt(0) && "-" !== t.charAt(0) || (n = "-" === t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (r = e(t)).constant)) {
                            var i = r();
                            r = function(e) {
                                return e[i]
                            }
                        }
                        return {
                            get: r,
                            descending: n
                        }
                    }),
                    u = a ? -1 : 1,
                    l = G(s) ? s : n,
                    h = Array.prototype.map.call(r, function(e, n) {
                        return {
                            value: e,
                            tieBreaker: {
                                value: n,
                                type: "number",
                                index: n
                            },
                            predicateValues: c.map(function(r) {
                                return function(e, n) {
                                    var r = typeof e;
                                    null === e ? r = "null" : "object" === r && (e = function(e) {
                                        if (G(e.valueOf) && t(e = e.valueOf())) return e;
                                        if (D(e) && t(e = e.toString())) return e;
                                        return e
                                    }(e));
                                    return {
                                        value: e,
                                        type: r,
                                        index: n
                                    }
                                }(r.get(e), n)
                            })
                        }
                    });
                return h.sort(function(e, t) {
                    for (var r = 0, i = c.length; r < i; r++) {
                        var o = l(e.predicateValues[r], t.predicateValues[r]);
                        if (o) return o * c[r].descending * u
                    }
                    return (l(e.tieBreaker, t.tieBreaker) || n(e.tieBreaker, t.tieBreaker)) * u
                }), r = h.map(function(e) {
                    return e.value
                })
            };

            function t(e) {
                switch (typeof e) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function n(e, t) {
                var n = 0,
                    r = e.type,
                    i = t.type;
                if (r === i) {
                    var o = e.value,
                        a = t.value;
                    "string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && (L(o) && (o = e.index), L(a) && (a = t.index)), o !== a && (n = o < a ? -1 : 1)
                } else n = "undefined" === r ? 1 : "undefined" === i ? -1 : "null" === r ? 1 : "null" === i ? -1 : r < i ? -1 : 1;
                return n
            }
        }

        function Ui(e) {
            return G(e) && (e = {
                link: e
            }), e.restrict = e.restrict || "AC", P(e)
        }
        ji.$inject = ["$parse"];
        var Li = P({
                restrict: "E",
                compile: function(e, t) {
                    if (!t.href && !t.xlinkHref) return function(e, t) {
                        if ("a" === t[0].nodeName.toLowerCase()) {
                            var n = "[object SVGAnimatedString]" === g.call(t.prop("href")) ? "xlink:href" : "href";
                            t.on("click", function(e) {
                                t.attr(n) || e.preventDefault()
                            })
                        }
                    }
                }
            }),
            qi = {};
        x(Mt, function(e, t) {
            if ("multiple" !== e) {
                var n = wn("ng-" + t),
                    r = i;
                "checked" === e && (r = function(e, t, r) {
                    r.ngModel !== r[n] && i(e, 0, r)
                }), qi[n] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: r
                    }
                }
            }

            function i(e, r, i) {
                e.$watch(i[n], function(e) {
                    i.$set(t, !!e)
                })
            }
        }), x(Nt, function(e, t) {
            qi[t] = function() {
                return {
                    priority: 100,
                    link: function(e, n, r) {
                        if ("ngPattern" === t && "/" === r.ngPattern.charAt(0)) {
                            var i = r.ngPattern.match(u);
                            if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                        }
                        e.$watch(r[t], function(e) {
                            r.$set(t, e)
                        })
                    }
                }
            }
        }), x(["src", "srcset", "href"], function(e) {
            var t = wn("ng-" + e);
            qi[t] = function() {
                return {
                    priority: 99,
                    link: function(n, r, i) {
                        var a = e,
                            s = e;
                        "href" === e && "[object SVGAnimatedString]" === g.call(r.prop("href")) && (s = "xlinkHref", i.$attr[s] = "xlink:href", a = null), i.$observe(t, function(t) {
                            t ? (i.$set(s, t), o && a && r.prop(a, i[s])) : "href" === e && i.$set(s, null)
                        })
                    }
                }
            }
        });
        var Fi = {
                $addControl: N,
                $$renameControl: function(e, t) {
                    e.$name = t
                },
                $removeControl: N,
                $setValidity: N,
                $setDirty: N,
                $setPristine: N,
                $setSubmitted: N,
                $$setSubmitted: N
            },
            Hi = "ng-pending";

        function zi(e, t, n, r, i) {
            this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(t.name || t.ngForm || "")(n), this.$dirty = !1, this.$pristine = !0, this.$valid = !0, this.$invalid = !1, this.$submitted = !1, this.$$parentForm = Fi, this.$$element = e, this.$$animate = r, Ki(this)
        }
        zi.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], zi.prototype = {
            $rollbackViewValue: function() {
                x(this.$$controls, function(e) {
                    e.$rollbackViewValue()
                })
            },
            $commitViewValue: function() {
                x(this.$$controls, function(e) {
                    e.$commitViewValue()
                })
            },
            $addControl: function(e) {
                je(e.$name, "input"), this.$$controls.push(e), e.$name && (this[e.$name] = e), e.$$parentForm = this
            },
            $$renameControl: function(e, t) {
                var n = e.$name;
                this[n] === e && delete this[n], this[t] = e, e.$name = t
            },
            $removeControl: function(e) {
                e.$name && this[e.$name] === e && delete this[e.$name], x(this.$pending, function(t, n) {
                    this.$setValidity(n, null, e)
                }, this), x(this.$error, function(t, n) {
                    this.$setValidity(n, null, e)
                }, this), x(this.$$success, function(t, n) {
                    this.$setValidity(n, null, e)
                }, this), oe(this.$$controls, e), e.$$parentForm = Fi
            },
            $setDirty: function() {
                this.$$animate.removeClass(this.$$element, Ho), this.$$animate.addClass(this.$$element, zo), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
            },
            $setPristine: function() {
                this.$$animate.setClass(this.$$element, Ho, zo + " ng-submitted"), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, x(this.$$controls, function(e) {
                    e.$setPristine()
                })
            },
            $setUntouched: function() {
                x(this.$$controls, function(e) {
                    e.$setUntouched()
                })
            },
            $setSubmitted: function() {
                for (var e = this; e.$$parentForm && e.$$parentForm !== Fi;) e = e.$$parentForm;
                e.$$setSubmitted()
            },
            $$setSubmitted: function() {
                this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, x(this.$$controls, function(e) {
                    e.$$setSubmitted && e.$$setSubmitted()
                })
            }
        }, Ji({
            clazz: zi,
            set: function(e, t, n) {
                var r = e[t];
                r ? -1 === r.indexOf(n) && r.push(n) : e[t] = [n]
            },
            unset: function(e, t, n) {
                var r = e[t];
                r && (oe(r, n), 0 === r.length && delete e[t])
            }
        });
        var Bi = function(e) {
                return ["$timeout", "$parse", function(t, n) {
                    return {
                        name: "form",
                        restrict: e ? "EAC" : "E",
                        require: ["form", "^^?form"],
                        controller: zi,
                        compile: function(n, i) {
                            n.addClass(Ho).addClass(qo);
                            var o = i.name ? "name" : !(!e || !i.ngForm) && "ngForm";
                            return {
                                pre: function(e, n, i, a) {
                                    var s = a[0];
                                    if (!("action" in i)) {
                                        var c = function(t) {
                                            e.$apply(function() {
                                                s.$commitViewValue(), s.$setSubmitted()
                                            }), t.preventDefault()
                                        };
                                        n[0].addEventListener("submit", c), n.on("$destroy", function() {
                                            t(function() {
                                                n[0].removeEventListener("submit", c)
                                            }, 0, !1)
                                        })
                                    }(a[1] || s.$$parentForm).$addControl(s);
                                    var u = o ? r(s.$name) : N;
                                    o && (u(e, s), i.$observe(o, function(t) {
                                        s.$name !== t && (u(e, void 0), s.$$parentForm.$$renameControl(s, t), (u = r(s.$name))(e, s))
                                    })), n.on("$destroy", function() {
                                        s.$$parentForm.$removeControl(s), u(e, void 0), _(s, Fi)
                                    })
                                }
                            }
                        }
                    };

                    function r(e) {
                        return "" === e ? n('this[""]').assign : n(e).assign || N
                    }
                }]
            },
            Wi = Bi(),
            Gi = Bi(!0);

        function Ki(e) {
            e.$$classCache = {}, e.$$classCache[Fo] = !(e.$$classCache[qo] = e.$$element.hasClass(qo))
        }

        function Ji(e) {
            var t = e.clazz,
                n = e.set,
                r = e.unset;

            function i(e, t, n) {
                n && !e.$$classCache[t] ? (e.$$animate.addClass(e.$$element, t), e.$$classCache[t] = !0) : !n && e.$$classCache[t] && (e.$$animate.removeClass(e.$$element, t), e.$$classCache[t] = !1)
            }

            function o(e, t, n) {
                t = t ? "-" + Ne(t, "-") : "", i(e, qo + t, !0 === n), i(e, Fo + t, !1 === n)
            }
            t.prototype.$setValidity = function(e, t, a) {
                var s;
                j(t) ? function(e, t, r, i) {
                    e[t] || (e[t] = {});
                    n(e[t], r, i)
                }(this, "$pending", e, a) : function(e, t, n, i) {
                    e[t] && r(e[t], n, i);
                    Qi(e[t]) && (e[t] = void 0)
                }(this, "$pending", e, a), Y(t) ? t ? (r(this.$error, e, a), n(this.$$success, e, a)) : (n(this.$error, e, a), r(this.$$success, e, a)) : (r(this.$error, e, a), r(this.$$success, e, a)), this.$pending ? (i(this, Hi, !0), this.$valid = this.$invalid = void 0, o(this, "", null)) : (i(this, Hi, !1), this.$valid = Qi(this.$error), this.$invalid = !this.$valid, o(this, "", this.$valid)), o(this, e, s = this.$pending && this.$pending[e] ? void 0 : !this.$error[e] && (!!this.$$success[e] || null)), this.$$parentForm.$setValidity(e, s, this)
            }
        }

        function Qi(e) {
            if (e)
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
            return !0
        }
        var Yi = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
            Zi = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
            Xi = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
            eo = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
            to = /^(\d{4,})-(\d{2})-(\d{2})$/,
            no = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            ro = /^(\d{4,})-W(\d\d)$/,
            io = /^(\d{4,})-(\d\d)$/,
            oo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            ao = "keydown wheel mousedown",
            so = Le();
        x("date,datetime-local,month,time,week".split(","), function(e) {
            so[e] = !0
        });
        var co = {
            text: function(e, t, n, r, i, o) {
                lo(e, t, n, r, i, o), uo(r)
            },
            date: fo("date", to, ho(to, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": fo("datetimelocal", no, ho(no, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: fo("time", oo, ho(oo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: fo("week", ro, function(e, t) {
                if (z(e)) return e;
                if (F(e)) {
                    ro.lastIndex = 0;
                    var n = ro.exec(e);
                    if (n) {
                        var r = +n[1],
                            i = +n[2],
                            o = 0,
                            a = 0,
                            s = 0,
                            c = 0,
                            u = Oi(r),
                            l = 7 * (i - 1);
                        return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), c = t.getMilliseconds()), new Date(r, 0, u.getDate() + l, o, a, s, c)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: fo("month", io, ho(io, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(e, t, n, r, i, o) {
                var a, s;
                po(e, t, n, r, "number"), $o(r), lo(e, t, n, r, i, o), (U(n.min) || n.ngMin) && (r.$validators.min = function(e, t) {
                    return r.$isEmpty(t) || j(a) || t >= a
                }, n.$observe("min", function(e) {
                    a = vo(e), r.$validate()
                }));
                (U(n.max) || n.ngMax) && (r.$validators.max = function(e, t) {
                    return r.$isEmpty(t) || j(s) || t <= s
                }, n.$observe("max", function(e) {
                    s = vo(e), r.$validate()
                }));
                if (U(n.step) || n.ngStep) {
                    var c;
                    r.$validators.step = function(e, t) {
                        return r.$isEmpty(t) || j(c) || yo(t, a || 0, c)
                    }, n.$observe("step", function(e) {
                        c = vo(e), r.$validate()
                    })
                }
            },
            url: function(e, t, n, r, i, o) {
                lo(e, t, n, r, i, o), uo(r), r.$validators.url = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || Zi.test(n)
                }
            },
            email: function(e, t, n, r, i, o) {
                lo(e, t, n, r, i, o), uo(r), r.$validators.email = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || Xi.test(n)
                }
            },
            radio: function(e, t, n, r) {
                var i = !n.ngTrim || "false" !== ee(n.ngTrim);
                j(n.name) && t.attr("name", O());
                t.on("change", function(e) {
                    var o;
                    t[0].checked && (o = n.value, i && (o = ee(o)), r.$setViewValue(o, e && e.type))
                }), r.$render = function() {
                    var e = n.value;
                    i && (e = ee(e)), t[0].checked = e === r.$viewValue
                }, n.$observe("value", r.$render)
            },
            range: function(e, t, n, r, i, o) {
                po(e, t, n, r, "range"), $o(r), lo(e, t, n, r, i, o);
                var a = r.$$hasNativeValidators && "range" === t[0].type,
                    s = a ? 0 : void 0,
                    c = a ? 100 : void 0,
                    u = a ? 1 : void 0,
                    l = t[0].validity,
                    h = U(n.min),
                    f = U(n.max),
                    d = U(n.step),
                    p = r.$render;
                r.$render = a && U(l.rangeUnderflow) && U(l.rangeOverflow) ? function() {
                    p(), r.$setViewValue(t.val())
                } : p, h && (r.$validators.min = a ? function() {
                    return !0
                } : function(e, t) {
                    return r.$isEmpty(t) || j(s) || t >= s
                }, $("min", function(e) {
                    if (s = vo(e), M(r.$modelValue)) return;
                    if (a) {
                        var n = t.val();
                        s > n && (n = s, t.val(n)), r.$setViewValue(n)
                    } else r.$validate()
                }));
                f && (r.$validators.max = a ? function() {
                    return !0
                } : function(e, t) {
                    return r.$isEmpty(t) || j(c) || t <= c
                }, $("max", function(e) {
                    if (c = vo(e), M(r.$modelValue)) return;
                    if (a) {
                        var n = t.val();
                        c < n && (t.val(c), n = c < s ? s : c), r.$setViewValue(n)
                    } else r.$validate()
                }));
                d && (r.$validators.step = a ? function() {
                    return !l.stepMismatch
                } : function(e, t) {
                    return r.$isEmpty(t) || j(u) || yo(t, s || 0, u)
                }, $("step", function(e) {
                    if (u = vo(e), M(r.$modelValue)) return;
                    a && r.$viewValue !== t.val() ? r.$setViewValue(t.val()) : r.$validate()
                }));

                function $(e, r) {
                    t.attr(e, n[e]), n.$observe(e, r)
                }
            },
            checkbox: function(e, t, n, r, i, o, a, s) {
                var c = wo(s, e, "ngTrueValue", n.ngTrueValue, !0),
                    u = wo(s, e, "ngFalseValue", n.ngFalseValue, !1);
                t.on("change", function(e) {
                    r.$setViewValue(t[0].checked, e && e.type)
                }), r.$render = function() {
                    t[0].checked = r.$viewValue
                }, r.$isEmpty = function(e) {
                    return !1 === e
                }, r.$formatters.push(function(e) {
                    return ce(e, c)
                }), r.$parsers.push(function(e) {
                    return e ? c : u
                })
            },
            hidden: N,
            button: N,
            submit: N,
            reset: N,
            file: N
        };

        function uo(e) {
            e.$formatters.push(function(t) {
                return e.$isEmpty(t) ? t : t.toString()
            })
        }

        function lo(e, t, n, r, i, o) {
            var a, s = f(t[0].type);
            if (!i.android) {
                var c = !1;
                t.on("compositionstart", function() {
                    c = !0
                }), t.on("compositionupdate", function(e) {
                    (j(e.data) || "" === e.data) && (c = !1)
                }), t.on("compositionend", function() {
                    c = !1, u()
                })
            }
            var u = function(e) {
                if (a && (o.defer.cancel(a), a = null), !c) {
                    var i = t.val(),
                        u = e && e.type;
                    "password" === s || n.ngTrim && "false" === n.ngTrim || (i = ee(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
                }
            };
            if (i.hasEvent("input")) t.on("input", u);
            else {
                var h = function(e, t, n) {
                    a || (a = o.defer(function() {
                        a = null, t && t.value === n || u(e)
                    }))
                };
                t.on("keydown", function(e) {
                    var t = e.keyCode;
                    91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || h(e, this, this.value)
                }), i.hasEvent("paste") && t.on("paste cut drop", h)
            }
            t.on("change", u), so[s] && r.$$hasNativeValidators && s === n.type && t.on(ao, function(e) {
                if (!a) {
                    var t = this[l],
                        n = t.badInput,
                        r = t.typeMismatch;
                    a = o.defer(function() {
                        a = null, t.badInput === n && t.typeMismatch === r || u(e)
                    })
                }
            }), r.$render = function() {
                var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                t.val() !== e && t.val(e)
            }
        }

        function ho(e, t) {
            return function(n, r) {
                var i, o;
                if (z(n)) return n;
                if (F(n)) {
                    if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Yi.test(n)) return new Date(n);
                    if (e.lastIndex = 0, i = e.exec(n)) {
                        i.shift(), o = r ? {
                            yyyy: r.getFullYear(),
                            MM: r.getMonth() + 1,
                            dd: r.getDate(),
                            HH: r.getHours(),
                            mm: r.getMinutes(),
                            ss: r.getSeconds(),
                            sss: r.getMilliseconds() / 1e3
                        } : {
                            yyyy: 1970,
                            MM: 1,
                            dd: 1,
                            HH: 0,
                            mm: 0,
                            ss: 0,
                            sss: 0
                        }, x(i, function(e, n) {
                            n < t.length && (o[t[n]] = +e)
                        });
                        var a = new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0);
                        return o.yyyy < 100 && a.setFullYear(o.yyyy), a
                    }
                }
                return NaN
            }
        }

        function fo(e, t, n, r) {
            return function(i, o, a, s, c, u, l) {
                var h, f, d, p;
                (po(i, o, a, s, e), lo(0, o, a, s, c, u), s.$parsers.push(function(n) {
                    return s.$isEmpty(n) ? null : t.test(n) ? g(n, h) : void(s.$$parserName = e)
                }), s.$formatters.push(function(e) {
                    if (e && !z(e)) throw Bo("datefmt", "Expected `{0}` to be a date", e);
                    if ($(e)) {
                        h = e;
                        var t = s.$options.getOption("timezone");
                        return t && (f = t, h = we(h, t, !0)), l("date")(e, r, t)
                    }
                    return h = null, f = null, ""
                }), U(a.min) || a.ngMin) && (s.$validators.min = function(e) {
                    return !$(e) || j(d) || n(e) >= d
                }, a.$observe("min", function(e) {
                    d = v(e), s.$validate()
                }));
                (U(a.max) || a.ngMax) && (s.$validators.max = function(e) {
                    return !$(e) || j(p) || n(e) <= p
                }, a.$observe("max", function(e) {
                    p = v(e), s.$validate()
                }));

                function $(e) {
                    return e && !(e.getTime && e.getTime() != e.getTime())
                }

                function v(e) {
                    return U(e) && !z(e) ? g(e) || void 0 : e
                }

                function g(e, t) {
                    var r = s.$options.getOption("timezone");
                    f && f !== r && (t = ye(t, me(f)));
                    var i = n(e, t);
                    return !isNaN(i) && r && (i = we(i, r)), i
                }
            }
        }

        function po(e, t, n, r, i) {
            var o = t[0];
            (r.$$hasNativeValidators = L(o.validity)) && r.$parsers.push(function(e) {
                var n = t.prop(l) || {};
                if (!n.badInput && !n.typeMismatch) return e;
                r.$$parserName = i
            })
        }

        function $o(e) {
            e.$parsers.push(function(t) {
                return e.$isEmpty(t) ? null : eo.test(t) ? parseFloat(t) : void(e.$$parserName = "number")
            }), e.$formatters.push(function(t) {
                if (!e.$isEmpty(t)) {
                    if (!H(t)) throw Bo("numfmt", "Expected `{0}` to be a number", t);
                    t = t.toString()
                }
                return t
            })
        }

        function vo(e) {
            return U(e) && !H(e) && (e = parseFloat(e)), M(e) ? void 0 : e
        }

        function go(e) {
            return (0 | e) === e
        }

        function mo(e) {
            var t = e.toString(),
                n = t.indexOf(".");
            if (-1 === n) {
                if (-1 < e && e < 1) {
                    var r = /e-(\d+)$/.exec(t);
                    if (r) return Number(r[1])
                }
                return 0
            }
            return t.length - n - 1
        }

        function yo(e, t, n) {
            var r = Number(e),
                i = !go(r),
                o = !go(t),
                a = !go(n);
            if (i || o || a) {
                var s = i ? mo(r) : 0,
                    c = o ? mo(t) : 0,
                    u = a ? mo(n) : 0,
                    l = Math.max(s, c, u),
                    h = Math.pow(10, l);
                r *= h, t *= h, n *= h, i && (r = Math.round(r)), o && (t = Math.round(t)), a && (n = Math.round(n))
            }
            return (r - t) % n == 0
        }

        function wo(e, t, n, r, i) {
            var o;
            if (U(r)) {
                if (!(o = e(r)).constant) throw Bo("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
                return o(t)
            }
            return i
        }
        var bo = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
                return {
                    restrict: "E",
                    require: ["?ngModel"],
                    link: {
                        pre: function(i, o, a, s) {
                            s[0] && (co[f(a.type)] || co.text)(i, o, a, s[0], t, e, n, r)
                        }
                    }
                }
            }],
            So = /^(true|false|\d+)$/,
            xo = function() {
                function e(e, t, n) {
                    var r = U(n) ? n : 9 === o ? "" : null;
                    e.prop("value", r), t.$set("value", n)
                }
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function(t, n) {
                        return So.test(n.ngValue) ? function(t, n, r) {
                            e(n, r, t.$eval(r.ngValue))
                        } : function(t, n, r) {
                            t.$watch(r.ngValue, function(t) {
                                e(n, r, t)
                            })
                        }
                    }
                }
            },
            Co = ["$compile", function(e) {
                return {
                    restrict: "AC",
                    compile: function(t) {
                        return e.$$addBindingClass(t),
                            function(t, n, r) {
                                e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                                    n.textContent = qe(e)
                                })
                            }
                    }
                }
            }],
            Eo = ["$interpolate", "$compile", function(e, t) {
                return {
                    compile: function(n) {
                        return t.$$addBindingClass(n),
                            function(n, r, i) {
                                var o = e(r.attr(i.$attr.ngBindTemplate));
                                t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(e) {
                                    r.textContent = j(e) ? "" : e
                                })
                            }
                    }
                }
            }],
            Oo = ["$sce", "$parse", "$compile", function(e, t, n) {
                return {
                    restrict: "A",
                    compile: function(r, i) {
                        var o = t(i.ngBindHtml),
                            a = t(i.ngBindHtml, function(t) {
                                return e.valueOf(t)
                            });
                        return n.$$addBindingClass(r),
                            function(t, r, i) {
                                n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                                    var n = o(t);
                                    r.html(e.getTrustedHtml(n) || "")
                                })
                            }
                    }
                }
            }],
            ko = P({
                restrict: "A",
                require: "ngModel",
                link: function(e, t, n, r) {
                    r.$viewChangeListeners.push(function() {
                        e.$eval(n.ngChange)
                    })
                }
            });

        function Ao(e, t) {
            var n;
            return e = "ngClass" + e, ["$parse", function(a) {
                return {
                    restrict: "AC",
                    link: function(s, c, u) {
                        var l, h = c.data("$classCounts"),
                            f = !0;

                        function d(e, t) {
                            var n = [];
                            return x(e, function(e) {
                                (t > 0 || h[e]) && (h[e] = (h[e] || 0) + t, h[e] === +(t > 0) && n.push(e))
                            }), n.join(" ")
                        }
                        h || (h = Le(), c.data("$classCounts", h)), "ngClass" !== e && (n || (n = a("$index", function(e) {
                            return 1 & e
                        })), s.$watch(n, function(e) {
                            e === t ? (n = d(i(n = l), 1), u.$addClass(n)) : function(e) {
                                e = d(i(e), -1), u.$removeClass(e)
                            }(l);
                            var n;
                            f = e
                        })), s.$watch(a(u[e], o), function(e) {
                            f === t && function(e, t) {
                                var n = i(e),
                                    o = i(t),
                                    a = r(n, o),
                                    s = r(o, n),
                                    c = d(a, -1),
                                    l = d(s, 1);
                                u.$addClass(l), u.$removeClass(c)
                            }(l, e);
                            l = e
                        })
                    }
                }
            }];

            function r(e, t) {
                if (!e || !e.length) return [];
                if (!t || !t.length) return e;
                var n = [];
                e: for (var r = 0; r < e.length; r++) {
                    for (var i = e[r], o = 0; o < t.length; o++)
                        if (i === t[o]) continue e;
                    n.push(i)
                }
                return n
            }

            function i(e) {
                return e && e.split(" ")
            }

            function o(e) {
                var t = e;
                return B(e) ? t = e.map(o).join(" ") : L(e) && (t = Object.keys(e).filter(function(t) {
                    return e[t]
                }).join(" ")), t
            }
        }
        var _o = Ao("", !0),
            Io = Ao("Odd", 0),
            To = Ao("Even", 1),
            Mo = Ui({
                compile: function(e, t) {
                    t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
                }
            }),
            Ro = [function() {
                return {
                    restrict: "A",
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            No = {},
            Vo = {
                blur: !0,
                focus: !0
            };
        x("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
            var t = wn("ng-" + e);
            No[t] = ["$parse", "$rootScope", function(n, r) {
                return {
                    restrict: "A",
                    compile: function(i, o) {
                        var a = n(o[t]);
                        return function(t, n) {
                            n.on(e, function(n) {
                                var i = function() {
                                    a(t, {
                                        $event: n
                                    })
                                };
                                Vo[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                            })
                        }
                    }
                }
            }]
        });
        var Po = ["$animate", "$compile", function(e, t) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(n, r, i, o, a) {
                        var s, c, u;
                        n.$watch(i.ngIf, function(n) {
                            n ? c || a(function(n, o) {
                                c = o, n[n.length++] = t.$$createComment("end ngIf", i.ngIf), s = {
                                    clone: n
                                }, e.enter(n, r.parent(), r)
                            }) : (u && (u.remove(), u = null), c && (c.$destroy(), c = null), s && (u = Ue(s.clone), e.leave(u).done(function(e) {
                                !1 !== e && (u = null)
                            }), s = null))
                        })
                    }
                }
            }],
            Do = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: w.noop,
                    compile: function(r, i) {
                        var o = i.ngInclude || i.src,
                            a = i.onload || "",
                            s = i.autoscroll;
                        return function(r, i, c, u, l) {
                            var h, f, d, p = 0,
                                $ = function() {
                                    f && (f.remove(), f = null), h && (h.$destroy(), h = null), d && (n.leave(d).done(function(e) {
                                        !1 !== e && (f = null)
                                    }), f = d, d = null)
                                };
                            r.$watch(o, function(o) {
                                var c = function(e) {
                                        !1 === e || !U(s) || s && !r.$eval(s) || t()
                                    },
                                    f = ++p;
                                o ? (e(o, !0).then(function(e) {
                                    if (!r.$$destroyed && f === p) {
                                        var t = r.$new();
                                        u.template = e;
                                        var s = l(t, function(e) {
                                            $(), n.enter(e, null, i).done(c)
                                        });
                                        d = s, (h = t).$emit("$includeContentLoaded", o), r.$eval(a)
                                    }
                                }, function() {
                                    r.$$destroyed || f === p && ($(), r.$emit("$includeContentError", o))
                                }), r.$emit("$includeContentRequested", o)) : ($(), u.template = null)
                            })
                        }
                    }
                }
            }],
            jo = ["$compile", function(t) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(n, r, i, o) {
                        if (g.call(r[0]).match(/SVG/)) return r.empty(), void t(ht(o.template, e.document).childNodes)(n, function(e) {
                            r.append(e)
                        }, {
                            futureParentElement: r
                        });
                        r.html(o.template), t(r.contents())(n)
                    }
                }
            }],
            Uo = Ui({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(e, t, n) {
                            e.$eval(n.ngInit)
                        }
                    }
                }
            }),
            Lo = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function(e, t, n, r) {
                        var i = n.ngList || ", ",
                            o = "false" !== n.ngTrim,
                            a = o ? ee(i) : i;
                        r.$parsers.push(function(e) {
                            if (!j(e)) {
                                var t = [];
                                return e && x(e.split(a), function(e) {
                                    e && t.push(o ? ee(e) : e)
                                }), t
                            }
                        }), r.$formatters.push(function(e) {
                            if (B(e)) return e.join(i)
                        }), r.$isEmpty = function(e) {
                            return !e || !e.length
                        }
                    }
                }
            },
            qo = "ng-valid",
            Fo = "ng-invalid",
            Ho = "ng-pristine",
            zo = "ng-dirty",
            Bo = i("ngModel");

        function Wo(e, t, n, r, i, o, a, s, c) {
            var u;
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = c(n.name || "", !1)(e), this.$$parentForm = Fi, this.$options = Go, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$parserName = "parse", this.$$currentValidationRunId = 0, this.$$scope = e, this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = t, Ki(this), (u = this).$$scope.$watch(function(e) {
                var t = u.$$ngModelGet(e);
                return t === u.$modelValue || u.$modelValue != u.$modelValue && t != t || u.$$setModelValue(t), t
            })
        }
        Wo.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"], Wo.prototype = {
            $$initGetterSetters: function() {
                if (this.$options.getOption("getterSetter")) {
                    var e = this.$$parse(this.$$attr.ngModel + "()"),
                        t = this.$$parse(this.$$attr.ngModel + "($$$p)");
                    this.$$ngModelGet = function(t) {
                        var n = this.$$parsedNgModel(t);
                        return G(n) && (n = e(t)), n
                    }, this.$$ngModelSet = function(e, n) {
                        G(this.$$parsedNgModel(e)) ? t(e, {
                            $$$p: n
                        }) : this.$$parsedNgModelAssign(e, n)
                    }
                } else if (!this.$$parsedNgModel.assign) throw Bo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, be(this.$$element))
            },
            $render: N,
            $isEmpty: function(e) {
                return j(e) || "" === e || null === e || e != e
            },
            $$updateEmptyClasses: function(e) {
                this.$isEmpty(e) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
            },
            $setPristine: function() {
                this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, zo), this.$$animate.addClass(this.$$element, Ho)
            },
            $setDirty: function() {
                this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Ho), this.$$animate.addClass(this.$$element, zo), this.$$parentForm.$setDirty()
            },
            $setUntouched: function() {
                this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
            },
            $setTouched: function() {
                this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
            },
            $rollbackViewValue: function() {
                this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
            },
            $validate: function() {
                if (!M(this.$modelValue)) {
                    var e = this.$$lastCommittedViewValue,
                        t = this.$$rawModelValue,
                        n = this.$valid,
                        r = this.$modelValue,
                        i = this.$options.getOption("allowInvalid"),
                        o = this;
                    this.$$runValidators(t, e, function(e) {
                        i || n === e || (o.$modelValue = e ? t : void 0, o.$modelValue !== r && o.$$writeModelToScope())
                    })
                }
            },
            $$runValidators: function(e, t, n) {
                this.$$currentValidationRunId++;
                var r, i, o = this.$$currentValidationRunId,
                    a = this;
                (function() {
                    var e = a.$$parserName;
                    if (!j(a.$$parserValid)) return a.$$parserValid || (x(a.$validators, function(e, t) {
                        s(t, null)
                    }), x(a.$asyncValidators, function(e, t) {
                        s(t, null)
                    })), s(e, a.$$parserValid), a.$$parserValid;
                    s(e, null);
                    return !0
                })() ? ! function() {
                    var n = !0;
                    if (x(a.$validators, function(r, i) {
                            var o = Boolean(r(e, t));
                            n = n && o, s(i, o)
                        }), !n) return x(a.$asyncValidators, function(e, t) {
                        s(t, null)
                    }), !1;
                    return !0
                }() ? c(!1): (r = [], i = !0, x(a.$asyncValidators, function(n, o) {
                    var a = n(e, t);
                    if (!Z(a)) throw Bo("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                    s(o, void 0), r.push(a.then(function() {
                        s(o, !0)
                    }, function() {
                        i = !1, s(o, !1)
                    }))
                }), r.length ? a.$$q.all(r).then(function() {
                    c(i)
                }, N) : c(!0)): c(!1);

                function s(e, t) {
                    o === a.$$currentValidationRunId && a.$setValidity(e, t)
                }

                function c(e) {
                    o === a.$$currentValidationRunId && n(e)
                }
            },
            $commitViewValue: function() {
                var e = this.$viewValue;
                this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== e || "" === e && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(e), this.$$lastCommittedViewValue = e, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
            },
            $$parseAndValidate: function() {
                var e = this.$$lastCommittedViewValue,
                    t = this;
                if (this.$$parserValid = !j(e) || void 0, this.$setValidity(this.$$parserName, null), this.$$parserName = "parse", this.$$parserValid)
                    for (var n = 0; n < this.$parsers.length; n++)
                        if (j(e = this.$parsers[n](e))) {
                            this.$$parserValid = !1;
                            break
                        } M(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
                var r = this.$modelValue,
                    i = this.$options.getOption("allowInvalid");

                function o() {
                    t.$modelValue !== r && t.$$writeModelToScope()
                }
                this.$$rawModelValue = e, i && (this.$modelValue = e, o()), this.$$runValidators(e, this.$$lastCommittedViewValue, function(n) {
                    i || (t.$modelValue = n ? e : void 0, o())
                })
            },
            $$writeModelToScope: function() {
                this.$$ngModelSet(this.$$scope, this.$modelValue), x(this.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (e) {
                        this.$$exceptionHandler(e)
                    }
                }, this)
            },
            $setViewValue: function(e, t) {
                this.$viewValue = e, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t)
            },
            $$debounceViewValueCommit: function(e) {
                var t = this.$options.getOption("debounce");
                H(t[e]) ? t = t[e] : H(t.default) && -1 === this.$options.getOption("updateOn").indexOf(e) ? t = t.default : H(t["*"]) && (t = t["*"]), this.$$timeout.cancel(this.$$pendingDebounce);
                var n = this;
                t > 0 ? this.$$pendingDebounce = this.$$timeout(function() {
                    n.$commitViewValue()
                }, t) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                    n.$commitViewValue()
                })
            },
            $overrideModelOptions: function(e) {
                this.$options = this.$options.createChild(e), this.$$setUpdateOnEvents()
            },
            $processModelValue: function() {
                var e = this.$$format();
                this.$viewValue !== e && (this.$$updateEmptyClasses(e), this.$viewValue = this.$$lastCommittedViewValue = e, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, N))
            },
            $$format: function() {
                for (var e = this.$formatters, t = e.length, n = this.$modelValue; t--;) n = e[t](n);
                return n
            },
            $$setModelValue: function(e) {
                this.$modelValue = this.$$rawModelValue = e, this.$$parserValid = void 0, this.$processModelValue()
            },
            $$setUpdateOnEvents: function() {
                this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), this.$$updateEvents = this.$options.getOption("updateOn"), this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
            },
            $$updateEventHandler: function(e) {
                this.$$debounceViewValueCommit(e && e.type)
            }
        }, Ji({
            clazz: Wo,
            set: function(e, t) {
                e[t] = !0
            },
            unset: function(e, t) {
                delete e[t]
            }
        });
        var Go, Ko = ["$rootScope", function(e) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: Wo,
                    priority: 1,
                    compile: function(t) {
                        return t.addClass(Ho).addClass("ng-untouched").addClass(qo), {
                            pre: function(e, t, n, r) {
                                var i = r[0],
                                    o = r[1] || i.$$parentForm,
                                    a = r[2];
                                a && (i.$options = a.$options), i.$$initGetterSetters(), o.$addControl(i), n.$observe("name", function(e) {
                                    i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                                }), e.$on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i)
                                })
                            },
                            post: function(t, n, r, i) {
                                var o = i[0];

                                function a() {
                                    o.$setTouched()
                                }
                                o.$$setUpdateOnEvents(), n.on("blur", function() {
                                    o.$touched || (e.$$phase ? t.$evalAsync(a) : t.$apply(a))
                                })
                            }
                        }
                    }
                }
            }],
            Jo = /(\s+|^)default(\s+|$)/;

        function Qo(e) {
            this.$$options = e
        }
        Qo.prototype = {
            getOption: function(e) {
                return this.$$options[e]
            },
            createChild: function(e) {
                var t = !1;
                return x(e = _({}, e), function(n, r) {
                    "$inherit" === n ? "*" === r ? t = !0 : (e[r] = this.$$options[r], "updateOn" === r && (e.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (e.updateOnDefault = !1, e[r] = ee(n.replace(Jo, function() {
                        return e.updateOnDefault = !0, " "
                    })))
                }, this), t && (delete e["*"], Zo(e, this.$$options)), Zo(e, Go.$$options), new Qo(e)
            }
        }, Go = new Qo({
            updateOn: "",
            updateOnDefault: !0,
            debounce: 0,
            getterSetter: !1,
            allowInvalid: !1,
            timezone: null
        });
        var Yo = function() {
            function e(e, t) {
                this.$$attrs = e, this.$$scope = t
            }
            return e.$inject = ["$attrs", "$scope"], e.prototype = {
                $onInit: function() {
                    var e = this.parentCtrl ? this.parentCtrl.$options : Go,
                        t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = e.createChild(t)
                }
            }, {
                restrict: "A",
                priority: 10,
                require: {
                    parentCtrl: "?^^ngModelOptions"
                },
                bindToController: !0,
                controller: e
            }
        };

        function Zo(e, t) {
            x(t, function(t, n) {
                U(e[n]) || (e[n] = t)
            })
        }
        var Xo = Ui({
                terminal: !0,
                priority: 1e3
            }),
            ea = i("ngOptions"),
            ta = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            na = ["$compile", "$document", "$parse", function(t, n, r) {
                var i = e.document.createElement("option"),
                    o = e.document.createElement("optgroup");
                return {
                    restrict: "A",
                    terminal: !0,
                    require: ["select", "ngModel"],
                    link: {
                        pre: function(e, t, n, r) {
                            r[0].registerOption = N
                        },
                        post: function(e, s, c, u) {
                            for (var l = u[0], h = u[1], f = c.multiple, d = 0, p = s.children(), $ = p.length; d < $; d++)
                                if ("" === p[d].value) {
                                    l.hasEmptyOption = !0, l.emptyOption = p.eq(d);
                                    break
                                } s.empty();
                            var v, g = !!l.emptyOption;
                            a(i.cloneNode(!1)).val("?");
                            var m = function(e, t, n) {
                                    var i = e.match(ta);
                                    if (!i) throw ea("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, be(t));
                                    var o = i[5] || i[7],
                                        a = i[6],
                                        s = / as /.test(i[0]) && i[1],
                                        c = i[9],
                                        u = r(i[2] ? i[1] : o),
                                        l = s && r(s) || u,
                                        h = c && r(c),
                                        f = c ? function(e, t) {
                                            return h(n, t)
                                        } : function(e) {
                                            return Ut(e)
                                        },
                                        d = function(e, t) {
                                            return f(e, y(e, t))
                                        },
                                        p = r(i[2] || i[1]),
                                        $ = r(i[3] || ""),
                                        v = r(i[4] || ""),
                                        g = r(i[8]),
                                        m = {},
                                        y = a ? function(e, t) {
                                            return m[a] = t, m[o] = e, m
                                        } : function(e) {
                                            return m[o] = e, m
                                        };

                                    function w(e, t, n, r, i) {
                                        this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                                    }

                                    function b(e) {
                                        var t;
                                        if (!a && S(e)) t = e;
                                        else
                                            for (var n in t = [], e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
                                        return t
                                    }
                                    return {
                                        trackBy: c,
                                        getTrackByValue: d,
                                        getWatchables: r(g, function(e) {
                                            for (var t = [], r = b(e = e || []), o = r.length, a = 0; a < o; a++) {
                                                var s = e === r ? a : r[a],
                                                    c = e[s],
                                                    u = y(c, s),
                                                    l = f(c, u);
                                                if (t.push(l), i[2] || i[1]) {
                                                    var h = p(n, u);
                                                    t.push(h)
                                                }
                                                if (i[4]) {
                                                    var d = v(n, u);
                                                    t.push(d)
                                                }
                                            }
                                            return t
                                        }),
                                        getOptions: function() {
                                            for (var e = [], t = {}, r = g(n) || [], i = b(r), o = i.length, a = 0; a < o; a++) {
                                                var s = r === i ? a : i[a],
                                                    u = r[s],
                                                    h = y(u, s),
                                                    m = l(n, h),
                                                    S = f(m, h),
                                                    x = new w(S, m, p(n, h), $(n, h), v(n, h));
                                                e.push(x), t[S] = x
                                            }
                                            return {
                                                items: e,
                                                selectValueMap: t,
                                                getOptionFromViewValue: function(e) {
                                                    return t[d(e)]
                                                },
                                                getViewValueFromOption: function(e) {
                                                    return c ? ae(e.viewValue) : e.viewValue
                                                }
                                            }
                                        }
                                    }
                                }(c.ngOptions, s, e),
                                y = n[0].createDocumentFragment();

                            function w(e, t) {
                                var n = i.cloneNode(!1);
                                t.appendChild(n),
                                    function(e, t) {
                                        e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), t.value = e.selectValue
                                    }(e, n)
                            }

                            function b(e) {
                                var t = v.getOptionFromViewValue(e),
                                    n = t && t.element;
                                return n && !n.selected && (n.selected = !0), t
                            }
                            l.generateUnknownOptionValue = function(e) {
                                return "?"
                            }, f ? (l.writeValue = function(e) {
                                if (v) {
                                    var t = e && e.map(b) || [];
                                    v.items.forEach(function(e) {
                                        e.element.selected && !ie(t, e) && (e.element.selected = !1)
                                    })
                                }
                            }, l.readValue = function() {
                                var e = [];
                                return x(s.val() || [], function(t) {
                                    var n = v.selectValueMap[t];
                                    n && !n.disabled && e.push(v.getViewValueFromOption(n))
                                }), e
                            }, m.trackBy && e.$watchCollection(function() {
                                if (B(h.$viewValue)) return h.$viewValue.map(function(e) {
                                    return m.getTrackByValue(e)
                                })
                            }, function() {
                                h.$render()
                            })) : (l.writeValue = function(e) {
                                if (v) {
                                    var t = s[0].options[s[0].selectedIndex],
                                        n = v.getOptionFromViewValue(e);
                                    t && t.removeAttribute("selected"), n ? (s[0].value !== n.selectValue && (l.removeUnknownOption(), s[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : l.selectUnknownOrEmptyOption(e)
                                }
                            }, l.readValue = function() {
                                var e = v.selectValueMap[s.val()];
                                return e && !e.disabled ? (l.unselectEmptyOption(), l.removeUnknownOption(), v.getViewValueFromOption(e)) : null
                            }, m.trackBy && e.$watch(function() {
                                return m.getTrackByValue(h.$viewValue)
                            }, function() {
                                h.$render()
                            })), g && (t(l.emptyOption)(e), s.prepend(l.emptyOption), l.emptyOption[0].nodeType === ze ? (l.hasEmptyOption = !1, l.registerOption = function(e, t) {
                                "" === t.val() && (l.hasEmptyOption = !0, l.emptyOption = t, l.emptyOption.removeClass("ng-scope"), h.$render(), t.on("$destroy", function() {
                                    var e = l.$isEmptyOptionSelected();
                                    l.hasEmptyOption = !1, l.emptyOption = void 0, e && h.$render()
                                }))
                            }) : l.emptyOption.removeClass("ng-scope")), e.$watchCollection(m.getWatchables, function() {
                                var e = v && l.readValue();
                                if (v)
                                    for (var t = v.items.length - 1; t >= 0; t--) {
                                        var n = v.items[t];
                                        U(n.group) ? _t(n.element.parentNode) : _t(n.element)
                                    }
                                var r = {};
                                if ((v = m.getOptions()).items.forEach(function(e) {
                                        var t;
                                        U(e.group) ? ((t = r[e.group]) || (t = o.cloneNode(!1), y.appendChild(t), t.label = null === e.group ? "null" : e.group, r[e.group] = t), w(e, t)) : w(e, y)
                                    }), s[0].appendChild(y), h.$render(), !h.$isEmpty(e)) {
                                    var i = l.readValue(),
                                        a = m.trackBy || f;
                                    (a ? ce(e, i) : e === i) || (h.$setViewValue(i), h.$render())
                                }
                            })
                        }
                    }
                }
            }],
            ra = ["$locale", "$interpolate", "$log", function(e, t, n) {
                var r = /{}/g,
                    i = /^when(Minus)?(.+)$/;
                return {
                    link: function(o, a, s) {
                        var c, u = s.count,
                            l = s.$attr.when && a.attr(s.$attr.when),
                            h = s.offset || 0,
                            d = o.$eval(l) || {},
                            p = {},
                            $ = t.startSymbol(),
                            v = t.endSymbol(),
                            g = $ + u + "-" + h + v,
                            m = w.noop;

                        function y(e) {
                            a.text(e || "")
                        }
                        x(s, function(e, t) {
                            var n = i.exec(t);
                            if (n) {
                                var r = (n[1] ? "-" : "") + f(n[2]);
                                d[r] = a.attr(s.$attr[t])
                            }
                        }), x(d, function(e, n) {
                            p[n] = t(e.replace(r, g))
                        }), o.$watch(u, function(t) {
                            var r = parseFloat(t),
                                i = M(r);
                            if (i || r in d || (r = e.pluralCat(r - h)), !(r === c || i && M(c))) {
                                m();
                                var a = p[r];
                                j(a) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + l), m = N, y()) : m = o.$watch(a, y), c = r
                            }
                        })
                    }
                }
            }],
            ia = ["$parse", "$animate", "$compile", function(e, t, n) {
                var r = i("ngRepeat"),
                    o = function(e, t, n, r, i, o, a) {
                        e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 == (1 & t))
                    },
                    a = function(e) {
                        return e.clone[0]
                    },
                    s = function(e) {
                        return e.clone[e.clone.length - 1]
                    };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function(i, c) {
                        var u = c.ngRepeat,
                            l = n.$$createComment("end ngRepeat", u),
                            f = u.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!f) throw r("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", u);
                        var d = f[1],
                            p = f[2],
                            $ = f[3],
                            v = f[4];
                        if (!(f = d.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw r("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", d);
                        var g, m, y, w, b = f[3] || f[1],
                            C = f[2];
                        if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($))) throw r("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", $);
                        var E = {
                            $id: Ut
                        };
                        return v ? g = e(v) : (y = function(e, t) {
                                return Ut(t)
                            }, w = function(e) {
                                return e
                            }),
                            function(e, n, i, c, f) {
                                g && (m = function(t, n, r) {
                                    return C && (E[C] = t), E[b] = n, E.$index = r, g(e, E)
                                });
                                var d = Le();
                                e.$watchCollection(p, function(i) {
                                    var c, p, v, g, E, O, k, A, _, I, T, M, R = n[0],
                                        N = Le();
                                    if ($ && (e[$] = i), S(i)) _ = i, A = m || y;
                                    else
                                        for (var V in A = m || w, _ = [], i) h.call(i, V) && "$" !== V.charAt(0) && _.push(V);
                                    for (g = _.length, T = new Array(g), c = 0; c < g; c++)
                                        if (E = i === _ ? c : _[c], O = i[E], k = A(E, O, c), d[k]) I = d[k], delete d[k], N[k] = I, T[c] = I;
                                        else {
                                            if (N[k]) throw x(T, function(e) {
                                                e && e.scope && (d[e.id] = e)
                                            }), r("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", u, k, O);
                                            T[c] = {
                                                id: k,
                                                scope: void 0,
                                                clone: void 0
                                            }, N[k] = !0
                                        } for (var P in d) {
                                        if (M = Ue((I = d[P]).clone), t.leave(M), M[0].parentNode)
                                            for (c = 0, p = M.length; c < p; c++) M[c].$$NG_REMOVED = !0;
                                        I.scope.$destroy()
                                    }
                                    for (c = 0; c < g; c++)
                                        if (E = i === _ ? c : _[c], O = i[E], (I = T[c]).scope) {
                                            v = R;
                                            do {
                                                v = v.nextSibling
                                            } while (v && v.$$NG_REMOVED);
                                            a(I) !== v && t.move(Ue(I.clone), null, R), R = s(I), o(I.scope, c, b, O, C, E, g)
                                        } else f(function(e, n) {
                                            I.scope = n;
                                            var r = l.cloneNode(!1);
                                            e[e.length++] = r, t.enter(e, null, R), R = r, I.clone = e, N[I.id] = I, o(I.scope, c, b, O, C, E, g)
                                        });
                                    d = N
                                })
                            }
                    }
                }
            }],
            oa = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngShow, function(t) {
                            e[t ? "removeClass" : "addClass"](n, "ng-hide", {
                                tempClasses: "ng-hide-animate"
                            })
                        })
                    }
                }
            }],
            aa = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngHide, function(t) {
                            e[t ? "addClass" : "removeClass"](n, "ng-hide", {
                                tempClasses: "ng-hide-animate"
                            })
                        })
                    }
                }
            }],
            sa = Ui(function(e, t, n) {
                e.$watchCollection(n.ngStyle, function(e, n) {
                    n && e !== n && x(n, function(e, n) {
                        t.css(n, "")
                    }), e && t.css(e)
                })
            }),
            ca = ["$animate", "$compile", function(e, t) {
                return {
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }],
                    link: function(n, r, i, o) {
                        var a = i.ngSwitch || i.on,
                            s = [],
                            c = [],
                            u = [],
                            l = [],
                            h = function(e, t) {
                                return function(n) {
                                    !1 !== n && e.splice(t, 1)
                                }
                            };
                        n.$watch(a, function(n) {
                            for (var r, i; u.length;) e.cancel(u.pop());
                            for (r = 0, i = l.length; r < i; ++r) {
                                var a = Ue(c[r].clone);
                                l[r].$destroy(), (u[r] = e.leave(a)).done(h(u, r))
                            }
                            c.length = 0, l.length = 0, (s = o.cases["!" + n] || o.cases["?"]) && x(s, function(n) {
                                n.transclude(function(r, i) {
                                    l.push(i);
                                    var o = n.element;
                                    r[r.length++] = t.$$createComment("end ngSwitchWhen");
                                    var a = {
                                        clone: r
                                    };
                                    c.push(a), e.enter(r, o.parent(), o)
                                })
                            })
                        })
                    }
                }
            }],
            ua = Ui({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    x(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(e, t, n) {
                        return n[t - 1] !== e
                    }), function(e) {
                        r.cases["!" + e] = r.cases["!" + e] || [], r.cases["!" + e].push({
                            transclude: i,
                            element: t
                        })
                    })
                }
            }),
            la = Ui({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                        transclude: i,
                        element: t
                    })
                }
            }),
            ha = i("ngTransclude"),
            fa = ["$compile", function(e) {
                return {
                    restrict: "EAC",
                    compile: function(t) {
                        var n = e(t.contents());
                        return t.empty(),
                            function(e, t, r, i, o) {
                                if (!o) throw ha("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", be(t));
                                r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
                                var a = r.ngTransclude || r.ngTranscludeSlot;

                                function s() {
                                    n(e, function(e) {
                                        t.append(e)
                                    })
                                }
                                o(function(e, n) {
                                    e.length && function(e) {
                                        for (var t = 0, n = e.length; t < n; t++) {
                                            var r = e[t];
                                            if (r.nodeType !== He || r.nodeValue.trim()) return !0
                                        }
                                    }(e) ? t.append(e) : (s(), n.$destroy())
                                }, null, a), a && !o.isSlotFilled(a) && s()
                            }
                    }
                }
            }],
            da = ["$templateCache", function(e) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(t, n) {
                        if ("text/ng-template" === n.type) {
                            var r = n.id,
                                i = t[0].text;
                            e.put(r, i)
                        }
                    }
                }
            }],
            pa = {
                $setViewValue: N,
                $render: N
            };

        function $a(e, t) {
            e.prop("selected", t), e.attr("selected", t)
        }
        var va = ["$element", "$scope", function(t, n) {
                var r = this,
                    i = new Ft;
                r.selectValueMap = {}, r.ngModelCtrl = pa, r.multiple = !1, r.unknownOption = a(e.document.createElement("option")), r.hasEmptyOption = !1, r.emptyOption = void 0, r.renderUnknownOption = function(e) {
                    var n = r.generateUnknownOptionValue(e);
                    r.unknownOption.val(n), t.prepend(r.unknownOption), $a(r.unknownOption, !0), t.val(n)
                }, r.updateUnknownOption = function(e) {
                    var n = r.generateUnknownOptionValue(e);
                    r.unknownOption.val(n), $a(r.unknownOption, !0), t.val(n)
                }, r.generateUnknownOptionValue = function(e) {
                    return "? " + Ut(e) + " ?"
                }, r.removeUnknownOption = function() {
                    r.unknownOption.parent() && r.unknownOption.remove()
                }, r.selectEmptyOption = function() {
                    r.emptyOption && (t.val(""), $a(r.emptyOption, !0))
                }, r.unselectEmptyOption = function() {
                    r.hasEmptyOption && $a(r.emptyOption, !1)
                }, n.$on("$destroy", function() {
                    r.renderUnknownOption = N
                }), r.readValue = function() {
                    var e = t.val(),
                        n = e in r.selectValueMap ? r.selectValueMap[e] : e;
                    return r.hasOption(n) ? n : null
                }, r.writeValue = function(e) {
                    var n = t[0].options[t[0].selectedIndex];
                    if (n && $a(a(n), !1), r.hasOption(e)) {
                        r.removeUnknownOption();
                        var i = Ut(e);
                        t.val(i in r.selectValueMap ? i : e);
                        var o = t[0].options[t[0].selectedIndex];
                        $a(a(o), !0)
                    } else r.selectUnknownOrEmptyOption(e)
                }, r.addOption = function(e, t) {
                    if (t[0].nodeType !== ze) {
                        je(e, '"option value"'), "" === e && (r.hasEmptyOption = !0, r.emptyOption = t);
                        var n = i.get(e) || 0;
                        i.set(e, n + 1), s()
                    }
                }, r.removeOption = function(e) {
                    var t = i.get(e);
                    t && (1 === t ? (i.delete(e), "" === e && (r.hasEmptyOption = !1, r.emptyOption = void 0)) : i.set(e, t - 1))
                }, r.hasOption = function(e) {
                    return !!i.get(e)
                }, r.$hasEmptyOption = function() {
                    return r.hasEmptyOption
                }, r.$isUnknownOptionSelected = function() {
                    return t[0].options[0] === r.unknownOption[0]
                }, r.$isEmptyOptionSelected = function() {
                    return r.hasEmptyOption && t[0].options[t[0].selectedIndex] === r.emptyOption[0]
                }, r.selectUnknownOrEmptyOption = function(e) {
                    null == e && r.emptyOption ? (r.removeUnknownOption(), r.selectEmptyOption()) : r.unknownOption.parent().length ? r.updateUnknownOption(e) : r.renderUnknownOption(e)
                };
                var o = !1;

                function s() {
                    o || (o = !0, n.$$postDigest(function() {
                        o = !1, r.ngModelCtrl.$render()
                    }))
                }
                var c = !1;

                function u(e) {
                    c || (c = !0, n.$$postDigest(function() {
                        n.$$destroyed || (c = !1, r.ngModelCtrl.$setViewValue(r.readValue()), e && r.ngModelCtrl.$render())
                    }))
                }
                r.registerOption = function(e, t, n, i, o) {
                    if (n.$attr.ngValue) {
                        var a, c = NaN;
                        n.$observe("value", function(e) {
                            var n, i = t.prop("selected");
                            U(c) && (r.removeOption(a), delete r.selectValueMap[c], n = !0), c = Ut(e), a = e, r.selectValueMap[c] = e, r.addOption(e, t), t.attr("value", c), n && i && u()
                        })
                    } else i ? n.$observe("value", function(e) {
                        var n;
                        r.readValue();
                        var i = t.prop("selected");
                        U(a) && (r.removeOption(a), n = !0), a = e, r.addOption(e, t), n && i && u()
                    }) : o ? e.$watch(o, function(e, i) {
                        n.$set("value", e);
                        var o = t.prop("selected");
                        i !== e && r.removeOption(i), r.addOption(e, t), i && o && u()
                    }) : r.addOption(n.value, t);
                    n.$observe("disabled", function(e) {
                        ("true" === e || e && t.prop("selected")) && (r.multiple ? u(!0) : (r.ngModelCtrl.$setViewValue(null), r.ngModelCtrl.$render()))
                    }), t.on("$destroy", function() {
                        var e = r.readValue(),
                            t = n.value;
                        r.removeOption(t), s(), (r.multiple && e && -1 !== e.indexOf(t) || e === t) && u(!0)
                    })
                }
            }],
            ga = function() {
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: va,
                    priority: 1,
                    link: {
                        pre: function(e, t, n, r) {
                            var i = r[0],
                                o = r[1];
                            if (!o) return void(i.registerOption = N);
                            if (i.ngModelCtrl = o, t.on("change", function() {
                                    i.removeUnknownOption(), e.$apply(function() {
                                        o.$setViewValue(i.readValue())
                                    })
                                }), n.multiple) {
                                i.multiple = !0, i.readValue = function() {
                                    var e = [];
                                    return x(t.find("option"), function(t) {
                                        if (t.selected && !t.disabled) {
                                            var n = t.value;
                                            e.push(n in i.selectValueMap ? i.selectValueMap[n] : n)
                                        }
                                    }), e
                                }, i.writeValue = function(e) {
                                    x(t.find("option"), function(t) {
                                        var n = !!e && (ie(e, t.value) || ie(e, i.selectValueMap[t.value])),
                                            r = t.selected;
                                        n !== r && $a(a(t), n)
                                    })
                                };
                                var s, c = NaN;
                                e.$watch(function() {
                                    c !== o.$viewValue || ce(s, o.$viewValue) || (s = Ge(o.$viewValue), o.$render()), c = o.$viewValue
                                }), o.$isEmpty = function(e) {
                                    return !e || 0 === e.length
                                }
                            }
                        },
                        post: function(e, t, n, r) {
                            var i = r[1];
                            if (!i) return;
                            var o = r[0];
                            i.$render = function() {
                                o.writeValue(i.$viewValue)
                            }
                        }
                    }
                }
            },
            ma = ["$interpolate", function(e) {
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(t, n) {
                        var r, i;
                        return U(n.ngValue) || (U(n.value) ? r = e(n.value, !0) : (i = e(t.text(), !0)) || n.$set("value", t.text())),
                            function(e, t, n) {
                                var o = t.parent(),
                                    a = o.data("$selectController") || o.parent().data("$selectController");
                                a && a.registerOption(e, t, n, r, i)
                            }
                    }
                }
            }],
            ya = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        r && (n.required = !0, r.$validators.required = function(e, t) {
                            return !n.required || !r.$isEmpty(t)
                        }, n.$observe("required", function() {
                            r.$validate()
                        }))
                    }
                }
            },
            wa = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var o, a = n.ngPattern || n.pattern;
                            n.$observe("pattern", function(e) {
                                if (F(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw i("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, e, be(t));
                                o = e || void 0, r.$validate()
                            }), r.$validators.pattern = function(e, t) {
                                return r.$isEmpty(t) || j(o) || o.test(t)
                            }
                        }
                    }
                }
            },
            ba = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = -1;
                            n.$observe("maxlength", function(e) {
                                var t = T(e);
                                i = M(t) ? -1 : t, r.$validate()
                            }), r.$validators.maxlength = function(e, t) {
                                return i < 0 || r.$isEmpty(t) || t.length <= i
                            }
                        }
                    }
                }
            },
            Sa = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = 0;
                            n.$observe("minlength", function(e) {
                                i = T(e) || 0, r.$validate()
                            }), r.$validators.minlength = function(e, t) {
                                return r.$isEmpty(t) || t.length >= i
                            }
                        }
                    }
                }
            };
        e.angular.bootstrap ? e.console && console.log("WARNING: Tried to load AngularJS more than once.") : (! function() {
            var t;
            if (!Ve) {
                var n = le();
                (s = j(n) ? e.jQuery : n ? e[n] : void 0) && s.fn.on ? (a = s, _(s.fn, {
                    scope: Tt.scope,
                    isolateScope: Tt.isolateScope,
                    controller: Tt.controller,
                    injector: Tt.injector,
                    inheritedData: Tt.inheritedData
                })) : a = dt, t = a.cleanData, a.cleanData = function(e) {
                    for (var n, r, i = 0; null != (r = e[i]); i++)(n = a._data(r).events) && n.$destroy && a(r).triggerHandler("$destroy");
                    t(e)
                }, w.element = a, Ve = !0
            }
        }(), function(t) {
            _(t, {
                errorHandlingConfig: n,
                bootstrap: Ie,
                copy: ae,
                extend: _,
                merge: I,
                equals: ce,
                element: a,
                forEach: x,
                injector: Zt,
                noop: N,
                bind: de,
                toJson: $e,
                fromJson: ve,
                identity: V,
                isUndefined: j,
                isDefined: U,
                isString: F,
                isFunction: G,
                isObject: L,
                isNumber: H,
                isElement: ne,
                isArray: B,
                version: Je,
                isDate: z,
                callbacks: {
                    $$counter: 0
                },
                getTestability: Me,
                reloadWithDebugInfo: Te,
                $$minErr: i,
                $$csp: ue,
                $$encodeUriSegment: Ee,
                $$encodeUriQuery: Oe,
                $$lowercase: f,
                $$stringify: qe,
                $$uppercase: d
            }), (c = function(e) {
                var t = i("$injector"),
                    n = i("ng");

                function r(e, t, n) {
                    return e[t] || (e[t] = n())
                }
                var o = r(e, "angular", Object);
                return o.$$minErr = o.$$minErr || i, r(o, "module", function() {
                    var e = {};
                    return function(i, o, a) {
                        var s = {};
                        return function(e, t) {
                            if ("hasOwnProperty" === e) throw n("badname", "hasOwnProperty is not a valid {0} name", t)
                        }(i, "module"), o && e.hasOwnProperty(i) && (e[i] = null), r(e, i, function() {
                            if (!o) throw t("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", i);
                            var e = [],
                                r = [],
                                c = [],
                                u = h("$injector", "invoke", "push", r),
                                l = {
                                    _invokeQueue: e,
                                    _configBlocks: r,
                                    _runBlocks: c,
                                    info: function(e) {
                                        if (U(e)) {
                                            if (!L(e)) throw n("aobj", "Argument '{0}' must be an object", "value");
                                            return s = e, this
                                        }
                                        return s
                                    },
                                    requires: o,
                                    name: i,
                                    provider: f("$provide", "provider"),
                                    factory: f("$provide", "factory"),
                                    service: f("$provide", "service"),
                                    value: h("$provide", "value"),
                                    constant: h("$provide", "constant", "unshift"),
                                    decorator: f("$provide", "decorator", r),
                                    animation: f("$animateProvider", "register"),
                                    filter: f("$filterProvider", "register"),
                                    controller: f("$controllerProvider", "register"),
                                    directive: f("$compileProvider", "directive"),
                                    component: f("$compileProvider", "component"),
                                    config: u,
                                    run: function(e) {
                                        return c.push(e), this
                                    }
                                };
                            return a && u(a), l;

                            function h(t, n, r, i) {
                                return i || (i = e),
                                    function() {
                                        return i[r || "push"]([t, n, arguments]), l
                                    }
                            }

                            function f(t, n, r) {
                                return r || (r = e),
                                    function(e, o) {
                                        return o && G(o) && (o.$$moduleName = i), r.push([t, n, arguments]), l
                                    }
                            }
                        })
                    }
                })
            }(e))("ng", ["ngLocale"], ["$provide", function(e) {
                e.provider({
                    $$sanitizeUri: Br
                }), e.provider("$compile", vn).directive({
                    a: Li,
                    input: bo,
                    textarea: bo,
                    form: Wi,
                    script: da,
                    select: ga,
                    option: ma,
                    ngBind: Co,
                    ngBindHtml: Oo,
                    ngBindTemplate: Eo,
                    ngClass: _o,
                    ngClassEven: To,
                    ngClassOdd: Io,
                    ngCloak: Mo,
                    ngController: Ro,
                    ngForm: Gi,
                    ngHide: aa,
                    ngIf: Po,
                    ngInclude: Do,
                    ngInit: Uo,
                    ngNonBindable: Xo,
                    ngPluralize: ra,
                    ngRepeat: ia,
                    ngShow: oa,
                    ngStyle: sa,
                    ngSwitch: ca,
                    ngSwitchWhen: ua,
                    ngSwitchDefault: la,
                    ngOptions: na,
                    ngTransclude: fa,
                    ngModel: Ko,
                    ngList: Lo,
                    ngChange: ko,
                    pattern: wa,
                    ngPattern: wa,
                    required: ya,
                    ngRequired: ya,
                    minlength: Sa,
                    ngMinlength: Sa,
                    maxlength: ba,
                    ngMaxlength: ba,
                    ngValue: xo,
                    ngModelOptions: Yo
                }).directive({
                    ngInclude: jo
                }).directive(qi).directive(No), e.provider({
                    $anchorScroll: Xt,
                    $animate: sn,
                    $animateCss: ln,
                    $$animateJs: on,
                    $$animateQueue: an,
                    $$AnimateRunner: un,
                    $$animateAsyncRun: cn,
                    $browser: hn,
                    $cacheFactory: fn,
                    $controller: En,
                    $document: On,
                    $$isDocumentHidden: kn,
                    $exceptionHandler: An,
                    $filter: di,
                    $$forceReflow: _n,
                    $interpolate: Kn,
                    $interval: Qn,
                    $http: zn,
                    $httpParamSerializer: Dn,
                    $httpParamSerializerJQLike: jn,
                    $httpBackend: Wn,
                    $xhrFactory: Bn,
                    $jsonpCallbacks: Yn,
                    $location: $r,
                    $log: vr,
                    $parse: Pr,
                    $rootScope: zr,
                    $q: Dr,
                    $$q: jr,
                    $sce: Zr,
                    $sceDelegate: Yr,
                    $sniffer: Xr,
                    $templateCache: dn,
                    $templateRequest: ti,
                    $$testability: ni,
                    $timeout: ii,
                    $window: li,
                    $$rAF: Hr,
                    $$jqLite: jt,
                    $$Map: Ht,
                    $$cookieReader: fi
                })
            }]).info({
                angularVersion: "1.7.0"
            })
        }(w), w.module("ngLocale", [], ["$provide", function(e) {
            var t = "one",
                n = "other";
            e.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["AM", "PM"],
                    DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-¤",
                        negSuf: "",
                        posPre: "¤",
                        posSuf: ""
                    }]
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function(e, r) {
                    var i = 0 | e,
                        o = function(e, t) {
                            var n = t;
                            void 0 === n && (n = Math.min(function(e) {
                                var t = (e += "").indexOf(".");
                                return -1 == t ? 0 : e.length - t - 1
                            }(e), 3));
                            var r = Math.pow(10, n);
                            return {
                                v: n,
                                f: (e * r | 0) % r
                            }
                        }(e, r);
                    return 1 == i && 0 == o.v ? t : n
                }
            })
        }]), a(function() {
            _e(e.document, Ie)
        }))
    }(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
}, function(e, t) {
    e.exports = '<div class="container-fluid app-container" ng-class="{\'less-space\': $ctrl.showQrCode}">\r\n    <div class="row row-no-padding">\r\n        <div class="col-xs-12 col-sm-6 splash-container">\r\n            <mg-image-carrousel delay="60s">\r\n        </div>\r\n        <div class="col-xs-12 col-sm-6 challenge-container">\r\n            <div class="logo">\r\n                <svg class="logo__icon" aria-hidden="true" viewBox="0 0 32 32">\r\n                    <path d="M27.328 27.328c-3.136 3.104-6.912 4.672-11.328 4.672s-8.192-1.568-11.296-4.672-4.704-6.912-4.704-11.328c0-4.416 1.568-8.192 4.704-11.328s6.88-4.672 11.296-4.672c4.416 0 8.192 1.568 11.328 4.672s4.672 6.912 4.672 11.328c0 4.416-1.568 8.192-4.672 11.328zM26.080 5.92c-2.816-2.784-6.176-4.16-10.080-4.16s-7.264 1.376-10.048 4.16c-2.816 2.816-4.192 6.176-4.192 10.080 0 3.968 1.376 7.328 4.192 10.112 2.784 2.816 6.144 4.192 10.048 4.192s7.264-1.376 10.080-4.192c2.784-2.784 4.16-6.144 4.16-10.112 0-3.904-1.376-7.264-4.16-10.080zM22.176 15.872c1.216 0.448 2.208 0.992 2.944 1.632s1.28 1.312 1.6 2.048 0.512 1.472 0.608 2.112c0.064 0.64 0.128 1.408 0.16 2.272 0 0.256 0 0.448 0 0.576-1.376 1.472-3.040 2.368-4.992 2.688-1.952 0.288-3.68 0.128-5.184-0.448s-2.592-1.344-3.232-2.304c-1.728 0.608-3.648 0.608-5.824 0-2.176-0.64-3.392-1.312-3.616-2.080 0-0.032-0.032-0.224-0.064-0.544-0.064-0.352-0.064-0.64-0.064-0.896s0-0.576 0.032-1.024c0-0.448 0.064-0.832 0.128-1.184s0.16-0.768 0.352-1.184 0.416-0.832 0.672-1.184c0.256-0.352 0.576-0.704 1.024-1.056 0.448-0.32 0.928-0.608 1.472-0.864-1.344-0.576-2.144-1.76-2.432-3.552s-0.032-3.168 0.8-4.128c0.672-0.832 1.344-1.376 2.048-1.664 0.672-0.256 1.568-0.384 2.72-0.352 0.864 0.064 1.696 0.416 2.464 1.152 0.768 0.704 1.056 1.664 0.832 2.848 0.096-0.416-0.032-0.832-0.384-1.248-0.288-0.48-0.832-0.8-1.632-0.896-0.832-0.096-1.472 0-1.984 0.288-0.8 0.48-1.312 0.896-1.568 1.184s-0.704 0.608-1.376 0.992c-1.184 0.768-1.44 1.824-0.704 3.264 0.736 1.408 1.792 2.24 3.168 2.496-1.312-0.256-2.24-1.312-2.816-3.136-0.32-0.832-0.192-1.44 0.352-1.856 0.288-0.224 0.512-0.224 0.64 0 0.544-0.832 1.664-1.44 3.36-1.76 0.416-0.096 0.992-0.064 1.664 0.096 0.704 0.128 1.088 0.416 1.216 0.768v-0.064c0 0.128 0.032 0.352 0.032 0.64 0.032 0.288 0.032 0.512 0.032 0.672 0 0.8-0.096 1.504-0.32 2.144-0.032 1.024 0.128 1.664 0.448 1.856h0.064c-0.512 0.192-0.896 0.224-1.184 0.128-0.096 0-0.16-0.032-0.256-0.128 1.376 0.672 2.368 1.536 2.944 2.624l0.928-0.544c-1.152-0.768-1.824-2.080-1.92-3.936-0.064-1.344 0-2.336 0.16-2.944-0.064-0.096-0.096-0.288-0.096-0.576 0.096-1.504 1.056-2.368 2.784-2.624 3.104-0.48 5.024 0.352 5.824 2.56 0.416 0.832 0.448 1.952 0.128 3.328s-0.992 2.24-1.952 2.624v1.184zM8.512 16.448c0.224 0.768 0.768 1.28 1.6 1.504 0.832 0.256 1.632 0.128 2.368-0.288 0.704-0.448 1.056-1.088 0.96-1.984-0.032-0.448-0.224-0.832-0.512-1.184v1.12c-0.032 0.416-0.384 0.704-1.088 0.896-0.672 0.16-1.248 0.16-1.728 0-0.864-0.32-1.312-0.736-1.312-1.312v-0.512c-0.032 0-0.096-0.032-0.16-0.064-0.32 0.544-0.352 1.152-0.128 1.824zM9.056 13.632c0.704 0.896 1.536 1.344 2.496 1.312 0.416 0 0.864-0.192 1.312-0.576l-0.064-0.064-1.248 0.32c-0.96 0.032-1.792-0.288-2.496-0.992zM14.016 13.12l-0.128 0.256c0.224 0.544 0.448 0.8 0.608 0.8-0.256 0-0.416-0.352-0.48-1.056zM15.936 9.568c0.256 0 0.672-0.032 1.28-0.064s1.056-0.032 1.344 0c0.96 0.064 1.664 0.288 2.080 0.608 0.16 0.192 0.288 0.352 0.416 0.576 0.128 0.192 0.224 0.384 0.256 0.576 0.032 0.16 0.096 0.416 0.128 0.736s0.096 0.544 0.128 0.608v-0.032c0.288-0.416 0.352-1.056 0.192-1.888-0.16-0.8-0.544-1.312-1.12-1.568-0.64-0.256-1.664-0.448-3.136-0.544-0.16 0-0.448-0.096-0.864-0.288s-0.672-0.416-0.704-0.672c-0.256 0.256-0.416 0.608-0.512 1.056-0.064 0.48 0.096 0.768 0.512 0.896zM22.56 17.632c0.128-0.768 0-1.312-0.384-1.696v0.32c0 0.032 0 0.16 0 0.352s0 0.288 0 0.32c0 0.064 0 0.128-0.032 0.256 0 0.128-0.032 0.224-0.096 0.256-0.032 0.032-0.096 0.096-0.16 0.192-0.096 0.064-0.192 0.16-0.32 0.256-0.512 0.32-1.12 0.48-1.888 0.448-0.736 0-1.312-0.256-1.664-0.704-0.128-0.16-0.192-0.48-0.192-0.96 0.128 0.128 0.256 0.256 0.448 0.32 0.192 0.096 0.352 0.128 0.48 0.128h0.192c1.12 0 2.144-0.736 3.072-2.24v-0.064c-0.928 1.376-1.984 2.048-3.2 2.048-0.32-0.032-0.736-0.192-1.184-0.416-0.096 0.224-0.128 0.416-0.128 0.544-0.032 0.896 0.288 1.568 1.024 2.048s1.536 0.576 2.368 0.32c0.864-0.224 1.408-0.832 1.664-1.728z"></path>\r\n                </svg>\r\n                <span class="logo__text">Magister</span>\r\n            </div>\r\n\r\n            <div class="conditions">\r\n                <a href="https://www.magister.nl/gebruiksvoorwaarden/" target="_blank" title="Meer over het gebruik van je gebruikersnaam en wachtwoord?">\r\n                    gebruiksvoorwaarden\r\n                </a>\r\n            </div>\r\n\r\n            <div class="podium" ng-if="$ctrl.runStage === \'show-challenges\'">\r\n                <div class="alert alert-danger" ng-if="$ctrl.startupError">\r\n                    {{ $ctrl.startupError}} <a href="#" ng-click="$ctrl.onReload($event)">opnieuw proberen</a>\r\n                </div>\r\n                <div class="header" ng-class="{\'extra-space\': $ctrl.showAvatar}">\r\n                    <div class="header__tenant" ng-if="!$ctrl.showAvatar">\r\n                        <p class="header__tenant-title" ng-bind="$ctrl.school.name"></p>\r\n                    </div>\r\n                    <div class="header__tenant__user" ng-if="$ctrl.showAvatar">\r\n                        <p class="header__tenant__user-user" ng-bind="$ctrl.user.name"></p>\r\n                        <p class="header__tenant__user-tenant" ng-bind="$ctrl.school.name"></p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="view-container2" ng-view></div>\r\n\r\n                <div class="account-options">\r\n                    <ul>\r\n                        <li ng-if="$ctrl.showChangeUser && $ctrl.showAccountOptions">\r\n                            <a href="#" ng-click="$ctrl.onChangeUsername($event);">\r\n                                <svg style="transform: rotate(180deg);" width="14" height="14" aria-hidden="true" viewBox="0 0 32 32">\r\n                                    <path d="M12.804 24.911l8.107-8.107q0.339-0.339 0.339-0.804t-0.339-0.804l-8.107-8.107q-0.339-0.339-0.804-0.339t-0.804 0.339l-1.821 1.821q-0.339 0.339-0.339 0.804t0.339 0.804l5.482 5.482-5.482 5.482q-0.339 0.339-0.339 0.804t0.339 0.804l1.821 1.821q0.339 0.339 0.804 0.339t0.804-0.339zM27.429 16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z"></path>\r\n                                </svg>\r\n                                <span>inloggen met een ander account</span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li ng-if="$ctrl.school.canEdit">\r\n                            <a href="#" ng-click="$ctrl.onChangeSchool($event);">\r\n                                <svg style="transform: rotate(180deg);" width="14" height="14" aria-hidden="true" viewBox="0 0 32 32">\r\n                                    <path d="M12.804 24.911l8.107-8.107q0.339-0.339 0.339-0.804t-0.339-0.804l-8.107-8.107q-0.339-0.339-0.804-0.339t-0.804 0.339l-1.821 1.821q-0.339 0.339-0.339 0.804t0.339 0.804l5.482 5.482-5.482 5.482q-0.339 0.339-0.339 0.804t0.339 0.804l1.821 1.821q0.339 0.339 0.804 0.339t0.804-0.339zM27.429 16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z"></path>\r\n                                </svg>\r\n                                <span>een andere school kiezen</span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li ng-if="$ctrl.showForgotPassword && $ctrl.showAccountOptions">\r\n                            <a href="#" ng-click="$ctrl.onForgotPassword($event);">\r\n                                <svg width="14" height="14" aria-hidden="true" viewBox="0 0 32 32">\r\n                                    <path d="M16 24.571v-3.429q0-0.25-0.161-0.411t-0.411-0.161h-3.429q-0.25 0-0.411 0.161t-0.161 0.411v3.429q0 0.25 0.161 0.411t0.411 0.161h3.429q0.25 0 0.411-0.161t0.161-0.411zM20.571 12.571q0-1.571-0.991-2.911t-2.473-2.071-3.036-0.732q-4.339 0-6.625 3.804-0.268 0.429 0.143 0.75l2.357 1.786q0.125 0.107 0.339 0.107 0.286 0 0.446-0.214 0.946-1.214 1.536-1.643 0.607-0.429 1.536-0.429 0.857 0 1.527 0.464t0.67 1.054q0 0.679-0.357 1.089t-1.214 0.804q-1.125 0.5-2.063 1.545t-0.938 2.241v0.643q0 0.25 0.161 0.411t0.411 0.161h3.429q0.25 0 0.411-0.161t0.161-0.411q0-0.339 0.384-0.884t0.973-0.884q0.571-0.321 0.875-0.509t0.821-0.625 0.795-0.857 0.5-1.080 0.223-1.446zM27.429 16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z"></path>\r\n                                </svg>\r\n                                <span>wachtwoord vergeten</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class="account-redirecting" ng-if="$ctrl.runStage === \'redirecting\'">\r\n                <div class="account-redirecting-center">\r\n                    <mg-spinner large="true"></mg-spinner>\r\n                    <div class="account-redirecting-text">je wordt doorgestuurd ...</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="account-initializing" ng-if="$ctrl.runStage === \'initializing\'">\r\n                <div class="account-initializing-center">\r\n                    <mg-spinner large="true"></mg-spinner>\r\n                    <div class="account-initializing-text">laden ...</div>\r\n                    <p ng-if="$ctrl.showLoadRetry">\r\n                        <a href="#" ng-click="$ctrl.onReload($event)">opnieuw proberen</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
}, function(e, t) {
    e.exports = '\x3c!--<h2 class="challenge-title">Schoolkeuze</h2>--\x3e\r\n<div class="container0">\r\n    <mg-error ng-if="$ctrl.error.visible" message="$ctrl.error.message"></mg-error>\r\n        \r\n\r\n    <form novalidate class="auth-form" ng-submit="$ctrl.onSubmitSchool()" ng-class="{\'error\': $ctrl.error.visible}">\r\n        <div class="form-group" style="position: relative;">\r\n            <div angucomplete-alt\r\n                mg-autofocus="scholenkiezer_value"\r\n                placeholder="bijvoorbeeld Terra College"\r\n                maxlength="50"\r\n                id="scholenkiezer"\r\n                pause="100"\r\n                selected-object="$ctrl.selectSchool"\r\n                remote-api-handler="$ctrl.searchSchools"\r\n                search-fields="displayName"\r\n                title-field="displayName"\r\n                minlength="3"\r\n                text-searching="zoeken..."\r\n                text-no-results="geen resultaten gevonden."\r\n                class="dropdown-container"\r\n                match-class="highlight"></div>\r\n\r\n            <svg width="22" height="22" aria-hidden="true" class="error-icon" viewBox="0 0 32 32">\r\n                <path d="M13.714 2.286q3.732 0 6.884 1.839t4.991 4.991 1.839 6.884-1.839 6.884-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839zM16 24.554v-3.393q0-0.25-0.161-0.42t-0.393-0.17h-3.429q-0.232 0-0.411 0.179t-0.179 0.411v3.393q0 0.232 0.179 0.411t0.411 0.179h3.429q0.232 0 0.393-0.17t0.161-0.42zM15.964 18.411l0.321-11.089q0-0.214-0.179-0.321-0.179-0.143-0.429-0.143h-3.929q-0.25 0-0.429 0.143-0.179 0.107-0.179 0.321l0.304 11.089q0 0.179 0.179 0.313t0.429 0.134h3.304q0.25 0 0.42-0.134t0.188-0.313z"></path>\r\n            </svg>\r\n        </div>\r\n        <div class="form-group">\r\n            <mg-button id="schoolkiezer_submit" caption="bevestigen" is-loading="$ctrl.isLoading"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="container1">\r\n    <div class="profile section"></div>\r\n    <div class="explanation section">\r\n        <h2 class="heading">2 Factor Authenticatie instellen</h2>\r\n        <p>Zo werkt het: gebruikersnaam:{{$ctrl.username}}</p>\r\n        <ol>\r\n            <li>Download een authenticatie app op je smartphone. Bijvoorbeeld Google Authenticator</li>\r\n            <li>Voeg in de authenticator een nieuwe account toe en scan de onderstaande barcode</li>\r\n            <li>In de authenticator verschijnt een unieke cijferreeks. Voer die reeks in op deze pagina.</li>\r\n        </ol>\r\n    </div>\r\n    <form autocomplete="false" novalidate class="auth-form" ng-submit="$ctrl.onSubmitToken()" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <div class="form-group" style="text-align: center;">\r\n            <div class="qr-container">\r\n                <img ng-src="{{$ctrl.qrImageUrl}}" alt="qr code" />\r\n                <svg style="background: #fff; fill: #000; position: absolute; left: 62px; top: 60px; width: 37px; height: 37px;" viewBox="0 0 32 32">\r\n                    <path d="M27.328 27.328c-3.136 3.104-6.912 4.672-11.328 4.672s-8.192-1.568-11.296-4.672-4.704-6.912-4.704-11.328c0-4.416 1.568-8.192 4.704-11.328s6.88-4.672 11.296-4.672c4.416 0 8.192 1.568 11.328 4.672s4.672 6.912 4.672 11.328c0 4.416-1.568 8.192-4.672 11.328zM26.080 5.92c-2.816-2.784-6.176-4.16-10.080-4.16s-7.264 1.376-10.048 4.16c-2.816 2.816-4.192 6.176-4.192 10.080 0 3.968 1.376 7.328 4.192 10.112 2.784 2.816 6.144 4.192 10.048 4.192s7.264-1.376 10.080-4.192c2.784-2.784 4.16-6.144 4.16-10.112 0-3.904-1.376-7.264-4.16-10.080zM22.176 15.872c1.216 0.448 2.208 0.992 2.944 1.632s1.28 1.312 1.6 2.048 0.512 1.472 0.608 2.112c0.064 0.64 0.128 1.408 0.16 2.272 0 0.256 0 0.448 0 0.576-1.376 1.472-3.040 2.368-4.992 2.688-1.952 0.288-3.68 0.128-5.184-0.448s-2.592-1.344-3.232-2.304c-1.728 0.608-3.648 0.608-5.824 0-2.176-0.64-3.392-1.312-3.616-2.080 0-0.032-0.032-0.224-0.064-0.544-0.064-0.352-0.064-0.64-0.064-0.896s0-0.576 0.032-1.024c0-0.448 0.064-0.832 0.128-1.184s0.16-0.768 0.352-1.184 0.416-0.832 0.672-1.184c0.256-0.352 0.576-0.704 1.024-1.056 0.448-0.32 0.928-0.608 1.472-0.864-1.344-0.576-2.144-1.76-2.432-3.552s-0.032-3.168 0.8-4.128c0.672-0.832 1.344-1.376 2.048-1.664 0.672-0.256 1.568-0.384 2.72-0.352 0.864 0.064 1.696 0.416 2.464 1.152 0.768 0.704 1.056 1.664 0.832 2.848 0.096-0.416-0.032-0.832-0.384-1.248-0.288-0.48-0.832-0.8-1.632-0.896-0.832-0.096-1.472 0-1.984 0.288-0.8 0.48-1.312 0.896-1.568 1.184s-0.704 0.608-1.376 0.992c-1.184 0.768-1.44 1.824-0.704 3.264 0.736 1.408 1.792 2.24 3.168 2.496-1.312-0.256-2.24-1.312-2.816-3.136-0.32-0.832-0.192-1.44 0.352-1.856 0.288-0.224 0.512-0.224 0.64 0 0.544-0.832 1.664-1.44 3.36-1.76 0.416-0.096 0.992-0.064 1.664 0.096 0.704 0.128 1.088 0.416 1.216 0.768v-0.064c0 0.128 0.032 0.352 0.032 0.64 0.032 0.288 0.032 0.512 0.032 0.672 0 0.8-0.096 1.504-0.32 2.144-0.032 1.024 0.128 1.664 0.448 1.856h0.064c-0.512 0.192-0.896 0.224-1.184 0.128-0.096 0-0.16-0.032-0.256-0.128 1.376 0.672 2.368 1.536 2.944 2.624l0.928-0.544c-1.152-0.768-1.824-2.080-1.92-3.936-0.064-1.344 0-2.336 0.16-2.944-0.064-0.096-0.096-0.288-0.096-0.576 0.096-1.504 1.056-2.368 2.784-2.624 3.104-0.48 5.024 0.352 5.824 2.56 0.416 0.832 0.448 1.952 0.128 3.328s-0.992 2.24-1.952 2.624v1.184zM8.512 16.448c0.224 0.768 0.768 1.28 1.6 1.504 0.832 0.256 1.632 0.128 2.368-0.288 0.704-0.448 1.056-1.088 0.96-1.984-0.032-0.448-0.224-0.832-0.512-1.184v1.12c-0.032 0.416-0.384 0.704-1.088 0.896-0.672 0.16-1.248 0.16-1.728 0-0.864-0.32-1.312-0.736-1.312-1.312v-0.512c-0.032 0-0.096-0.032-0.16-0.064-0.32 0.544-0.352 1.152-0.128 1.824zM9.056 13.632c0.704 0.896 1.536 1.344 2.496 1.312 0.416 0 0.864-0.192 1.312-0.576l-0.064-0.064-1.248 0.32c-0.96 0.032-1.792-0.288-2.496-0.992zM14.016 13.12l-0.128 0.256c0.224 0.544 0.448 0.8 0.608 0.8-0.256 0-0.416-0.352-0.48-1.056zM15.936 9.568c0.256 0 0.672-0.032 1.28-0.064s1.056-0.032 1.344 0c0.96 0.064 1.664 0.288 2.080 0.608 0.16 0.192 0.288 0.352 0.416 0.576 0.128 0.192 0.224 0.384 0.256 0.576 0.032 0.16 0.096 0.416 0.128 0.736s0.096 0.544 0.128 0.608v-0.032c0.288-0.416 0.352-1.056 0.192-1.888-0.16-0.8-0.544-1.312-1.12-1.568-0.64-0.256-1.664-0.448-3.136-0.544-0.16 0-0.448-0.096-0.864-0.288s-0.672-0.416-0.704-0.672c-0.256 0.256-0.416 0.608-0.512 1.056-0.064 0.48 0.096 0.768 0.512 0.896zM22.56 17.632c0.128-0.768 0-1.312-0.384-1.696v0.32c0 0.032 0 0.16 0 0.352s0 0.288 0 0.32c0 0.064 0 0.128-0.032 0.256 0 0.128-0.032 0.224-0.096 0.256-0.032 0.032-0.096 0.096-0.16 0.192-0.096 0.064-0.192 0.16-0.32 0.256-0.512 0.32-1.12 0.48-1.888 0.448-0.736 0-1.312-0.256-1.664-0.704-0.128-0.16-0.192-0.48-0.192-0.96 0.128 0.128 0.256 0.256 0.448 0.32 0.192 0.096 0.352 0.128 0.48 0.128h0.192c1.12 0 2.144-0.736 3.072-2.24v-0.064c-0.928 1.376-1.984 2.048-3.2 2.048-0.32-0.032-0.736-0.192-1.184-0.416-0.096 0.224-0.128 0.416-0.128 0.544-0.032 0.896 0.288 1.568 1.024 2.048s1.536 0.576 2.368 0.32c0.864-0.224 1.408-0.832 1.664-1.728z"></path>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="alert alert-danger" role="alert" ng-if="$ctrl.error.visible" ng-bind="$ctrl.error.message"></div>\r\n\r\n        <div class="form-group">\r\n            <div style="position: relative;">\r\n                <input ng-model="$ctrl.vm.code" ng-change="$ctrl.validateToken()" mg-autofocus="token" mg-char-filter="" id="token" type="text"\r\n                    name="token" autofocus maxlength="6" class="input-box" mg-placeholder="code" autocomplete="false" autocapitalize="off"\r\n                    spellcheck="false" autocorrect="off" />\r\n\r\n                <svg width="22" height="22" aria-hidden="true" class="error-icon" viewBox="0 0 32 32">\r\n                    <path d="M13.714 2.286q3.732 0 6.884 1.839t4.991 4.991 1.839 6.884-1.839 6.884-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839zM16 24.554v-3.393q0-0.25-0.161-0.42t-0.393-0.17h-3.429q-0.232 0-0.411 0.179t-0.179 0.411v3.393q0 0.232 0.179 0.411t0.411 0.179h3.429q0.232 0 0.393-0.17t0.161-0.42zM15.964 18.411l0.321-11.089q0-0.214-0.179-0.321-0.179-0.143-0.429-0.143h-3.929q-0.25 0-0.429 0.143-0.179 0.107-0.179 0.321l0.304 11.089q0 0.179 0.179 0.313t0.429 0.134h3.304q0.25 0 0.42-0.134t0.188-0.313z"></path>\r\n                </svg>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <mg-button caption="controleren" ng-click="$ctrl.onSubmitToken()"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="container0">\r\n    <div class="alert alert-danger" role="alert" ng-if="$ctrl.error.visible" ng-bind="$ctrl.error.message"></div>\r\n        \r\n    <form autocomplete="false" novalidate class="auth-form" ng-submit="$ctrl.onSubmitToken()" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <div class="form-group" style="position: relative;">\r\n            <input ng-model="$ctrl.vm.code"\r\n                ng-change="$ctrl.validateToken()"\r\n                mg-autofocus="token"\r\n                mg-char-filter=""\r\n                id="token"\r\n                type="text"\r\n                name="token"\r\n                autofocus\r\n                maxlength="6"\r\n                class="input-box"\r\n                mg-placeholder="code"\r\n                autocomplete="false"\r\n                autocapitalize="off"\r\n                spellcheck="false"\r\n                autocorrect="off" />\r\n        </div> \r\n        <div class="form-group">\r\n            <mg-button id="token_submit" caption="doorgaan" is-loading="$ctrl.isLoading"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="container0">\r\n    <div class="explanation section">\r\n        <p>{{$ctrl.message}}</p>\r\n    </div>\r\n    <div class="alert alert-danger" role="alert" ng-if="$ctrl.error.visible" ng-bind="$ctrl.error.message"></div>\r\n    \r\n    <form autocomplete="false" novalidate class="auth-form" ng-submit="$ctrl.onSubmitCode()" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <div class="form-group" style="position: relative;">\r\n            <input ng-model="$ctrl.vm.code"\r\n                ng-change="$ctrl.validateCode()"\r\n                mg-autofocus="code"\r\n                id="code"\r\n                type="text"\r\n                name="code"\r\n                autofocus\r\n                maxlength="6"\r\n                class="input-box"\r\n                mg-placeholder="password reset code"\r\n                autocomplete="false"\r\n                autocapitalize="off"\r\n                spellcheck="false"\r\n                autocorrect="off" />\r\n        </div> \r\n        <div class="form-group">\r\n            <mg-button  id="resetpasswordcode_submit" caption="doorgaan" is-loading="$ctrl.isLoading"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="container0">\r\n    <div class="profile section"></div>\r\n    \r\n    <div class="alert alert-danger" role="alert" ng-if="$ctrl.error.visible" ng-bind="$ctrl.error.message"></div>\r\n    \r\n    <form autocomplete="false" novalidate class="auth-form" ng-submit="$ctrl.onSubmitResetPassword($event)" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <div class="form-group">\r\n            <div style="margin-bottom: 6px;">\r\n                <mg-password m-id="passwordnew" m-model="$ctrl.vm.newpassword" m-change="$ctrl.validateResetPassword()" m-placeholder="nieuwe wachtwoord" m-autofocus="passwordnew"></mg-password>\r\n            </div>\r\n            <div>\r\n                <mg-password m-id="passwordverify" m-model="$ctrl.vm.verifypassword" m-change="$ctrl.validateResetPassword()" m-placeholder="verifieer wachtwoord"></mg-password>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <mg-button caption="herstellen" is-loading="$ctrl.isLoading" ng-click="$ctrl.onSubmitResetPassword($event)"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="container0">\r\n    <div class="profile section"></div>\r\n    \r\n    <div class="alert alert-danger" role="alert" ng-if="$ctrl.error.visible" ng-bind="$ctrl.error.message"></div>\r\n\r\n    <form autocomplete="false" novalidate class="auth-form" ng-submit="$ctrl.onSubmitChangePassword($event)" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <div class="form-group" style="margin-bottom: 6px;">\r\n            <mg-password m-id="password" m-model="$ctrl.vm.password" m-change="$ctrl.validateChangePassword()" m-placeholder="oude wachtwoord" m-autofocus="password"></mg-password>\r\n        </div>\r\n        <div class="form-group">\r\n            <div style="margin-bottom: 6px;">\r\n                <mg-password m-id="passwordnew" m-model="$ctrl.vm.newpassword" m-change="$ctrl.validateChangePassword()" m-placeholder="nieuwe wachtwoord"></mg-password>\r\n            </div>\r\n            <div>\r\n                <mg-password m-id="passwordverify" m-model="$ctrl.vm.verifypassword" m-change="$ctrl.validateChangePassword()" m-placeholder="verifieer wachtwoord"></mg-password>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <mg-button caption="wijzigen" is-loading="$ctrl.isLoading" ng-click="$ctrl.onSubmitChangePassword($event)"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="container0">\r\n    <div class="alert alert-danger" role="alert" ng-if="$ctrl.error.visible" ng-bind="$ctrl.error.message"></div>\r\n        \r\n    <form autocomplete="false" novalidate class="auth-form" ng-submit="$ctrl.onSubmitPassword($event)" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <div class="form-group" style="position: relative;">\r\n            <input ng-model="$ctrl.password"\r\n                ng-change="$ctrl.onChange()"\r\n                mg-autofocus="rswp-password"\r\n                mg-capslock="De toets Caps Lock is ingeschakeld."\r\n                id="rswp-password"\r\n                type="password"\r\n                name="rswp-password"\r\n                class="input-box"\r\n                mg-placeholder="wachtwoord"\r\n                autocomplete="false"\r\n                autocapitalize="off"\r\n                spellcheck="false"\r\n                autocorrect="off" />\r\n        </div>\r\n        <div class="form-group">\r\n            <mg-button id="rswp_submit" caption="doorgaan" is-loading="$ctrl.isLoading"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="container0">\r\n    <div class="alert alert-danger" role="alert" ng-if="$ctrl.error.visible" ng-bind="$ctrl.error.message"></div>\r\n\r\n    <form autocomplete="false" novalidate class="auth-form" ng-submit="$ctrl.onSubmitPassword($event)" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <div class="form-group">\r\n            <mg-password m-id="password" m-autofocus="password" m-model="$ctrl.password" m-change="$ctrl.onChange()" m-placeholder="wachtwoord"></mg-password>\r\n        </div>\r\n        <div class="form-group">\r\n            <mg-button id="password_submit" is-loading="$ctrl.isLoading" caption="doorgaan" ng-click="$ctrl.onSubmitPassword($event)"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>'
}, function(e, t) {
    e.exports = '<div>\r\n    <mg-error ng-if="$ctrl.error.visible" message="$ctrl.error.message"></mg-error>\r\n    \r\n    <form novalidate class="auth-form" ng-submit="$ctrl.onSubmitUsername()" ng-class="{\'busy\': $ctrl.isLoading, \'error\': $ctrl.error.visible}">\r\n        <mg-input model="$ctrl.username" name="username" id="username" placeholder="gebruikersnaam" maxlength="1024"></mg-input>\r\n        <div class="form-group">\r\n            <mg-button id="username_submit" caption="doorgaan" is-loading="$ctrl.isLoading"></mg-button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'
}, function(e, t) {
    e.exports = '<div class="rotating-spinner" ng-class="{\'rotating-spinner-large\': $ctrl.large}">\r\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">\r\n        <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">\r\n        </path>\r\n    </svg>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="form-group" style="position: relative;">\r\n    <input ng-model="$ctrl.model"\r\n           ng-attr-type="{{$ctrl.type}}"\r\n           ng-attr-name="{{$ctrl.name}}"\r\n           ng-attr-id="{{$ctrl.id}}"\r\n           ng-attr-maxlength="{{$ctrl.maxlength}}"\r\n           class="input-box"\r\n           mg-placeholder="{{$ctrl.placeholder}}"\r\n           autocomplete="false"\r\n           autocapitalize="off"\r\n           spellcheck="false"\r\n           autocorrect="off"\r\n           mg-autofocus="{{$ctrl.id}}" />\r\n    <svg width="22" height="22" aria-hidden="true" class="error-icon" viewBox="0 0 32 32" focusable="false">\r\n        <path d="M13.714 2.286q3.732 0 6.884 1.839t4.991 4.991 1.839 6.884-1.839 6.884-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884\r\n                 1.839-6.884 4.991-4.991 6.884-1.839zM16 24.554v-3.393q0-0.25-0.161-0.42t-0.393-0.17h-3.429q-0.232 0-0.411 0.179t-0.179 0.411v3.393q0\r\n                 0.232 0.179 0.411t0.411 0.179h3.429q0.232 0 0.393-0.17t0.161-0.42zM15.964 18.411l0.321-11.089q0-0.214-0.179-0.321-0.179-0.143-0.429-0.143h-3.929q-0.25\r\n                 0-0.429 0.143-0.179 0.107-0.179 0.321l0.304 11.089q0 0.179 0.179 0.313t0.429 0.134h3.304q0.25 0 0.42-0.134t0.188-0.313z">\r\n        </path>\r\n    </svg>\r\n</div>'
}, function(e, t) {
    e.exports = '<div style="position: relative;">\r\n    <input ng-if="$ctrl.hidePassword" ng-model="$ctrl.mModel" ng-change="$ctrl.onChange()" mg-autofocus="{{$ctrl.autofocus}}" mg-capslock="De toets Caps Lock is ingeschakeld."\r\n        id="{{$ctrl.id}}" type="password" name="password" class="input-box" mg-placeholder="{{$ctrl.mPlaceholder}}" autocomplete="false" autocapitalize="off"\r\n        spellcheck="false" autocorrect="off" />\r\n\r\n    <input ng-if="!$ctrl.hidePassword" ng-model="$ctrl.mModel" ng-change="$ctrl.onChange()" mg-autofocus="{{$ctrl.autofocus}}" mg-capslock="De toets Caps Lock is ingeschakeld."\r\n        id="{{$ctrl.id}}" type="text" name="password" class="input-box" mg-placeholder="{{$ctrl.mPlaceholder}}" autocomplete="false" autocapitalize="off"\r\n        spellcheck="false" autocorrect="off" />\r\n\r\n    <div class="password__eye" id="eye-container" ng-click="$ctrl.onTogglePassword($event)" tabindex="-1">\r\n        <svg class="password__eye-icon" viewBox="0 0 32 32" ng-if="$ctrl.hidePassword">\r\n            <path d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path>\r\n            <path d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path>\r\n            <path d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path>\r\n        </svg>\r\n\r\n        <svg class="password__eye-icon" viewBox="0 0 32 32" ng-if="!$ctrl.hidePassword">\r\n            <path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>\r\n        </svg>\r\n    </div>\r\n\r\n    <svg width="22" height="22" aria-hidden="true" class="error-icon" viewBox="0 0 32 32" focusable="false">\r\n        <path d="M13.714 2.286q3.732 0 6.884 1.839t4.991 4.991 1.839 6.884-1.839 6.884-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839zM16 24.554v-3.393q0-0.25-0.161-0.42t-0.393-0.17h-3.429q-0.232 0-0.411 0.179t-0.179 0.411v3.393q0 0.232 0.179 0.411t0.411 0.179h3.429q0.232 0 0.393-0.17t0.161-0.42zM15.964 18.411l0.321-11.089q0-0.214-0.179-0.321-0.179-0.143-0.429-0.143h-3.929q-0.25 0-0.429 0.143-0.179 0.107-0.179 0.321l0.304 11.089q0 0.179 0.179 0.313t0.429 0.134h3.304q0.25 0 0.42-0.134t0.188-0.313z"></path>\r\n    </svg>\r\n</div>'
}, function(e, t) {
    e.exports = '<button ng-class="{\'active\': $ctrl.isLoading}" ng-disabled="$ctrl.isLoading" type="submit" class="primary-button ripple">\r\n    <em><span>{{ $ctrl.caption }}</span>\r\n        <svg class="primary-button__icon" aria-hidden="true" viewBox="0 0 32 32">\r\n            <path d="M12.804 24.911l8.107-8.107q0.339-0.339 0.339-0.804t-0.339-0.804l-8.107-8.107q-0.339-0.339-0.804-0.339t-0.804 0.339l-1.821 1.821q-0.339\r\n                     0.339-0.339 0.804t0.339 0.804l5.482 5.482-5.482 5.482q-0.339 0.339-0.339 0.804t0.339 0.804l1.821 1.821q0.339 0.339 0.804 0.339t0.804-0.339zM27.429\r\n                     16q0 3.732-1.839 6.884t-4.991 4.991-6.884 1.839-6.884-1.839-4.991-4.991-1.839-6.884 1.839-6.884 4.991-4.991 6.884-1.839 6.884 1.839 4.991 4.991 1.839 6.884z">\r\n            </path>\r\n        </svg>\r\n    </em>\r\n    <mg-spinner ng-if="$ctrl.isLoading"></mg-spinner>\r\n</button>'
}]);