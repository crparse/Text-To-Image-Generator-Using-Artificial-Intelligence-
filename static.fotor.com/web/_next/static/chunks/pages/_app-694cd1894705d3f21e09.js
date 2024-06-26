(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        69918: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return f
                },
                Z: function() {
                    return p
                }
            });
            var o = n(80318),
                r = n(59748),
                i = n(92809);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function(e, t) {
                    if (!t.type) return a(a({}, e), t);
                    switch (t.type) {
                        case "LOG_IN":
                            return a(a({}, e), {}, {
                                userInfo: t.payload
                            });
                        case "LOG_OUT":
                            return a(a({}, e), {}, {
                                userInfo: null,
                                isVip: !1,
                                vipStatus: "",
                                messageData: null
                            });
                        case "UPDATE_IS_VIP":
                            return t.payload && window.$ && window.$("#upGradeIconBtn, .upGradeIconBtn").hide(), a(a({}, e), {}, {
                                isVip: t.payload
                            });
                        case "UPDATE_VIP_STATUS":
                            return t.payload && window.$ && window.$("#upGradeIconBtn, .upGradeIconBtn").hide(), a(a({}, e), {}, {
                                vipStatus: t.payload
                            });
                        case "UPDATE_MESSAGE_DATA":
                            return a(a({}, e), {}, {
                                messageData: t.payload
                            });
                        case "TOGGLE_FIXED_HEADER":
                            return a(a({}, e), {}, {
                                headerState: t.payload
                            });
                        case "TOGGLE_SHOW_NOTIFICATION":
                            return a(a({}, e), {}, {
                                showNotification: t.payload
                            });
                        case "UPDATE_VIDEOMODAL":
                            return a(a({}, e), {}, {
                                videoModal: t.payload
                            });
                        case "UPDATE_APP_LINK_MODAL":
                            return a(a({}, e), {}, {
                                appLinkModal: t.payload
                            });
                        case "UPDATE_FOTOR_APP_TOP_AD":
                            return a(a({}, e), {}, {
                                fotor_app_top_ad: t.payload
                            });
                        case "UPDATE_USE_COOKIE_SHOW":
                            return a(a({}, e), {}, {
                                useCookieShow: t.payload
                            });
                        case "UPDATE_SHARE_DISTANCE":
                            return a(a({}, e), {}, {
                                shareDistance: t.payload
                            });
                        default:
                            return e
                    }
                },
                c = window.localStorage.getItem("fotor_common_user_Info"),
                l = {
                    userInfo: c ? JSON.parse(c) : null,
                    isVip: !1,
                    messageData: null,
                    isHeaderShadow: !0,
                    showNotification: !1,
                    videoModal: null,
                    headerState: {
                        isFixedHeader: !1,
                        bgcolor: "gray"
                    },
                    appLinkModal: !1,
                    fotor_app_top_ad: "1",
                    loginJs: null,
                    a8sJs: null,
                    useCookieShow: !1,
                    shareDistance: void 0,
                    vipStatus: "",
                    fotorToken: ""
                },
                d = n(8311),
                f = r.default.createContext({}),
                p = function(e) {
                    var t = e.initValue,
                        n = r.default.useReducer(u, l),
                        i = (0, o.Z)(n, 2),
                        s = i[0],
                        a = i[1],
                        c = {
                            state: s,
                            dispatch: a
                        };
                    return r.default.useEffect((function() {
                        a(t)
                    }), [t]), (0, d.tZ)(f.Provider, {
                        value: c,
                        children: e.children
                    })
                }
        },
        49437: function(e, t, n) {
            "use strict";
            n.d(t, {
                Qu: function() {
                    return o
                },
                G3: function() {
                    return r
                },
                x4: function() {
                    return i
                },
                d8: function() {
                    return s
                },
                zk: function() {
                    return a
                },
                KP: function() {
                    return u
                }
            });
            var o = "https://pub-static.fotor.com";
            t.ZP = "https://www.fotor.com/";
            var r = "https://www.fotor.com/design/project/create",
                i = "https://pub-static.fotor.com/static/web/lib/account/bundle.js",
                s = "https://pub-static.fotor.com/static/web/lib/mobile-common/bundle.js",
                a = "https://pub-static.fotor.com/static/web/lib/a8s/bundle.js",
                u = "https://pub-static.fotor.com/static/web/lib/payment/bundle.js"
        },
        83706: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return r
                }
            });
            var o = ["id", "it", "th", "vi", "tr", "pl", "nl"],
                r = function(e) {
                    return -1 !== o.indexOf(e)
                }
        },
        10518: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return o
                }
            });
            var o = {
                en_US: "en",
                es_ES: "es",
                pt_BR: "pt",
                ru_RU: "ru",
                fr_FR: "fr",
                de_DE: "de",
                zh_CN: "cn",
                zh_TW: "tw",
                ja_JP: "jp",
                id_ID: "id",
                it_IT: "it",
                th_TH: "th",
                vi_VN: "vi",
                tr_TR: "tr",
                pl_PL: "pl",
                nl_NL: "nl"
            };
            t.Z = {
                en: "en_US",
                es: "es_ES",
                pt: "pt_BR",
                ru: "ru_RU",
                fr: "fr_FR",
                de: "de_DE",
                cn: "zh_CN",
                tw: "zh_TW",
                jp: "ja_JP",
                id: "id_ID",
                it: "it_IT",
                th: "th_TH",
                vi: "vi_VN",
                tr: "tr_TR",
                pl: "pl_PL",
                nl: "nl_NL"
            }
        },
        43262: function(e, t, n) {
            "use strict";
            n.d(t, {
                $L: function() {
                    return o
                },
                wb: function() {
                    return r
                },
                fc: function() {
                    return i
                }
            });
            var o = {
                    1: "en",
                    2: "es",
                    3: "pt",
                    4: "ru",
                    5: "fr",
                    6: "de",
                    7: "cn",
                    8: "tw",
                    9: "jp",
                    10: "id",
                    11: "it",
                    12: "th",
                    13: "vi",
                    14: "tr",
                    15: "pl",
                    16: "nl"
                },
                r = {
                    1: "en_US",
                    2: "es_ES",
                    3: "pt_BR",
                    4: "ru_RU",
                    5: "fr_FR",
                    6: "de_DE",
                    7: "zh_CN",
                    8: "zh_TW",
                    9: "ja_JP",
                    10: "id_ID",
                    11: "it_IT",
                    12: "th_TH",
                    13: "vi_VN",
                    14: "tr_TR",
                    15: "pl_PL",
                    16: "nl_NL"
                },
                i = {
                    1: "en-us",
                    2: "es-es",
                    3: "pt-br",
                    4: "ru-ru",
                    5: "fr-fr",
                    6: "de-de",
                    7: "zh-cn",
                    8: "zh-tw",
                    9: "ja-jp",
                    10: "id-id",
                    11: "it-it",
                    12: "th-th",
                    13: "vi-vn",
                    14: "tr-tr",
                    15: "pl-pl",
                    16: "nl-nl"
                };
            t.ZP = {
                en: "1",
                es: "2",
                pt: "3",
                ru: "4",
                fr: "5",
                de: "6",
                cn: "7",
                tw: "8",
                jp: "9",
                id: "10",
                it: "11",
                th: "12",
                vi: "13",
                tr: "14",
                pl: "15",
                nl: "16"
            }
        },
        18504: function(e, t) {
            "use strict";
            t.Z = {
                "/features/goart.html": "app-id=1148932799",
                "/nft-creator": "app-id=1148932799"
            }
        },
        46356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var o = n(92809),
                r = n(59748),
                i = n(9008),
                s = n(94717),
                a = n.n(s),
                u = n(49437),
                c = n(10518),
                l = n(83706);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e) {
                return e.replace(/(\\u)(\w{4}|\w{2})/gi, (function(e, t, n) {
                    return String.fromCharCode(parseInt(n, 16))
                }))
            }

            function m(e) {
                switch (e) {
                    case "ja":
                        return "ja_JP";
                    case "zh-cn":
                    case "zh":
                        return "zh_CN";
                    case "zh-tw":
                        return "zh_TW";
                    case "en":
                    case "en-us":
                        return "en_US";
                    case "pt":
                    case "pt-br":
                    case "pt-pt":
                        return "pt_BR";
                    case "fr":
                    case "fr-fr":
                    case "fr-ca":
                    case "fr-ch":
                        return "fr_FR";
                    case "de":
                    case "de-at":
                    case "de-de":
                    case "de-li":
                    case "de-ch":
                        return "de_DE";
                    case "ru":
                        return "ru_RU";
                    default:
                        return "en_US"
                }
            }

            function w(e) {
                for (var t = document.cookie.split("; "), n = 0; n < t.length; n++) {
                    var o = t[n].split("=");
                    if (o[0] == e) try {
                        return decodeURI(p(o[1]))
                    } catch (r) {
                        return p(o[1])
                    }
                }
                return ""
            }

            function g(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2592e6,
                    o = window.document.location.hostname;
                "www.fotor.com" !== o && "test-www.fotor.com" !== o || (o = ".fotor.com");
                var r = new Date;
                r.setTime(r.getTime() + n), document.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + r.toGMTString() + ";path=/;domain=" + o
            }
            var b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = "production";
                    r.default.useEffect((function() {
                        var e = window.document.location.pathname;
                        if ("/events/get-credits/" === e) {
                            if (!w("locale")) {
                                var o = m((window.navigator.language || "en").toLocaleLowerCase());
                                g("locale", o), g("clientLocale", o)
                            }
                        } else {
                            var r = "en";
                            if (-1 !== e.indexOf("/") && "/" !== e) {
                                var i = e.split("/");
                                r = i.length >= 2 ? i[1] : "en"
                            }
                            w("locale") || ((0, l.a)(r) && (r = "en"), c.Z[r] ? g("locale", c.Z[r]) : g("locale", c.Z.en), c.Z[r] ? g("clientLocale", c.Z[r]) : g("clientLocale", c.Z.en))
                        }
                        window.GATEWAY_URL = u.ZP, window.UNIVERSAL_VERSION = !0;
                        var s = t ? "https://datasink-sa.fotor.com.cn" : "https://datasink-sa.fotor.com";
                        ! function(e) {
                            var t = e.sdk_url,
                                n = e.name,
                                o = window,
                                r = document,
                                i = "script",
                                s = null,
                                a = null;
                            if ("undefined" !== typeof o.sensorsDataAnalytic201505) return !1;
                            o.sensorsDataAnalytic201505 = n, o[n] = o[n] || function(e) {
                                return function() {
                                    (o[n]._q = o[n]._q || []).push([e, arguments])
                                }
                            };
                            for (var u = ["track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "getAppStatus"], c = 0; c < u.length; c++) o[n][u[c]] = o[n].call(null, u[c]);
                            o[n]._t || (s = r.createElement(i), a = r.getElementsByTagName(i)[0], s.async = 1, s.src = t, s.setAttribute("charset", "UTF-8"), o[n].para = e, a.parentNode.insertBefore(s, a))
                        }({
                            show_log: "production" !== n,
                            sdk_url: "https://pub-static.fotor.com/static/web/lib/sensors/sensorsdata.min.js",
                            name: "sensors",
                            server_url: "production" === n ? s + "/sa?project=fotorglobalproduct" : s + "/sa?project=fotorglobaldefault",
                            heatmap: {
                                scroll_notice_map: "not_collect"
                            },
                            source_type: {
                                search: ["yandex.", "duckduckgo.com", "ecosia.org"]
                            }
                        });
                        var a = {
                            is_login: !1,
                            vip_status: 0,
                            platform_type: "web"
                        };
                        try {
                            var d = window.localStorage.getItem("fotor_common_user_Info");
                            if (d) {
                                var p = JSON.parse(d);
                                a = f(f({}, a), {}, {
                                    is_login: !0,
                                    vip_status: p.vipStatus || 0 == p.vipStatus ? p.vipStatus : 0
                                })
                            }
                        } catch (h) {}
                        var b = w("_ga");
                        window.sensors && window.sensors.registerPage({
                            ga: b
                        }), window.sensors && window.sensors.registerPage(a), window.sensors && window.sensors.quick("autoTrack", {
                            ga: b,
                            location: "pageHome"
                        })
                    }), [])
                },
                h = n(69918),
                v = (n(76157), n(84706)),
                y = n(4298),
                E = n(18504),
                O = (n(90163), n(88473), n(50447), n(19366)),
                _ = n(43262),
                T = n(59359),
                x = n(8311);

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var P = function(e) {
                var t = e.Component,
                    n = e.pageProps,
                    o = (0, r.useState)(""),
                    s = o[0],
                    c = o[1],
                    l = (0, r.useState)(!1),
                    d = l[0],
                    f = l[1],
                    p = (0, r.useState)(null),
                    m = p[0],
                    w = p[1],
                    g = (0, r.useState)(null),
                    S = g[0],
                    P = g[1],
                    C = (r.default.useContext(h.y).dispatch, !1);
                C = -1 !== window.location.href.indexOf("/mobile/download-app");
                try {
                    n && n.userAgent && Object.keys(n.userAgent).forEach((function(e) {
                        n.userAgent[e] && (n.userAgent[e] = JSON.parse(n.userAgent[e]))
                    }))
                } catch (N) {}
                return b(n.userAgent, C), (0, r.useEffect)((function() {
                    var e, t;
                    (c(function() {
                        var e = (0, O.D)(),
                            t = location.hostname;
                        return E.Z.hasOwnProperty(t) ? E.Z[t] : E.Z.hasOwnProperty(e) ? E.Z[e] : E.Z.default
                    }()), f(!0), null !== n && void 0 !== n && null !== (e = n.data) && void 0 !== e && e.lang) && (window.currentPageDisplayLang = _.wb[_.ZP[null === n || void 0 === n || null === (t = n.data) || void 0 === t ? void 0 : t.lang]], T.tq && (0, O.f)((function() {
                        window.mobileCommon.refreshLanguage(window.currentPageDisplayLang || "en_US")
                    })))
                }), []), (0, x.BX)(x.HY, {
                    children: [(0, x.BX)(i.default, {
                        children: [!!s && (0, x.tZ)("meta", {
                            name: "apple-itunes-app",
                            content: s
                        }), (0, x.tZ)("link", {
                            rel: "shortcut icon",
                            href: a()
                        }), (0, x.tZ)("link", {
                            rel: "preload",
                            as: "style",
                            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                        }), (0, x.tZ)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
                            rel: "stylesheet"
                        })]
                    }), (0, x.BX)(h.Z, {
                        initValue: {
                            loginJs: m,
                            a8sJs: S
                        },
                        children: [(0, x.tZ)(v.Ix, {
                            className: "custom_toast",
                            position: "top-center",
                            autoClose: 3e3,
                            closeButton: !1,
                            hideProgressBar: !0,
                            limit: 2
                        }), (0, x.tZ)(t, k({}, n))]
                    }), d && (0, x.tZ)(y.default, {
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: '(function (w, d, s, l, i) {\n      w[l] = w[l] || [];\n      (w[l]).push({\n        "gtm.start": new Date().getTime(),\n        event: "gtm.js"\n      });\n      const f = d.getElementsByTagName(s)[0],\n        j = d.createElement(s),\n        dl = l !== "dataLayer" ? "&l=" + l : "";\n      j.async=true;\n      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n      (f).parentNode.insertBefore(j, f);\n    })(window, document, "script", "dataLayer", "GTM-5763HM");'
                        }
                    }), n.userAgent && n.userAgent.isMobile && (0, x.tZ)(y.default, {
                        src: u.d8,
                        strategy: "afterInteractive",
                        onLoad: function() {}
                    }), n.userAgent && (!n.userAgent.isMobile || n.userAgent.isTablet || n.userAgent.isDesktop) && (0, x.BX)(x.HY, {
                        children: [(0, x.tZ)(y.default, {
                            src: u.KP,
                            strategy: "lazyOnload"
                        }), (0, x.tZ)(y.default, {
                            src: u.x4,
                            strategy: "lazyOnload",
                            onLoad: function() {
                                w(window.login)
                            }
                        }), (0, x.tZ)(y.default, {
                            src: u.zk,
                            strategy: "lazyOnload",
                            onLoad: function() {
                                P(window.adpopup)
                            }
                        })]
                    })]
                })
            }
        },
        19366: function(e, t, n) {
            "use strict";

            function o(e) {
                if (window.mobileCommon) return e && e(window.mobileCommon),
                    function() {};

                function t() {
                    window.removeEventListener("mobile_common_sdk_loaded", n)
                }

                function n() {
                    e && e(window.mobileCommon), t()
                }
                return window.addEventListener("mobile_common_sdk_loaded", n), t
            }

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.pathname;
                return "/" === e[e.length - 1] && (e = e.substring(0, e.length - 1)), e
            }
            n.d(t, {
                f: function() {
                    return o
                },
                D: function() {
                    return r
                }
            })
        },
        76363: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(46356)
            }])
        },
        90163: function() {},
        88473: function() {},
        50447: function() {},
        76157: function() {},
        9008: function(e, t, n) {
            e.exports = n(70639)
        },
        4298: function(e, t, n) {
            e.exports = n(37926)
        },
        59359: function(e, t, n) {
            "use strict";
            var o, r = n(59748),
                i = (o = r) && "object" === typeof o && "default" in o ? o.default : o,
                s = new(n(23451)),
                a = s.getBrowser(),
                u = (s.getCPU(), s.getDevice()),
                c = s.getEngine(),
                l = s.getOS(),
                d = s.getUA(),
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                    return e || t
                },
                p = function() {
                    return !("undefined" === typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
                },
                m = function(e) {
                    var t = p();
                    return t && (t.platform.includes(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
                };

            function w(e) {
                return (w = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var _ = "mobile",
                T = "tablet",
                x = "smarttv",
                S = "console",
                k = "wearable",
                P = void 0,
                C = "Chrome",
                N = "Firefox",
                A = "Opera",
                I = "Yandex",
                j = "Safari",
                D = "Internet Explorer",
                R = "Edge",
                L = "Chromium",
                M = "IE",
                B = "Mobile Safari",
                U = "iOS",
                z = "Android",
                Z = "Windows Phone",
                F = {
                    isMobile: !1,
                    isTablet: !1,
                    isBrowser: !1,
                    isSmartTV: !1,
                    isConsole: !1,
                    isWearable: !1
                },
                V = function(e, t, n, o) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? v(n, !0).forEach((function(t) {
                                b(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e, {
                        vendor: f(t.vendor),
                        model: f(t.model),
                        os: f(n.name),
                        osVersion: f(n.version),
                        ua: f(o)
                    })
                },
                G = function(e) {
                    switch (e) {
                        case _:
                            return {
                                isMobile: !0
                            };
                        case T:
                            return {
                                isTablet: !0
                            };
                        case x:
                            return {
                                isSmartTV: !0
                            };
                        case S:
                            return {
                                isConsole: !0
                            };
                        case k:
                            return {
                                isWearable: !0
                            };
                        case P:
                            return {
                                isBrowser: !0
                            };
                        default:
                            return F
                    }
                }(u.type);
            var H = u.type === x,
                X = u.type === S,
                q = u.type === k,
                W = a.name === B,
                Q = a.name === L,
                J = function() {
                    switch (u.type) {
                        case _:
                        case T:
                            return !0;
                        default:
                            return !1
                    }
                }(),
                K = u.type === _,
                $ = u.type === T,
                Y = u.type === P,
                ee = l.name === z,
                te = l.name === Z,
                ne = l.name === U,
                oe = a.name === C,
                re = a.name === N,
                ie = a.name === j || a.name === B,
                se = a.name === A,
                ae = a.name === D || a.name === M,
                ue = f(l.version),
                ce = f(l.name),
                le = f(a.version),
                de = f(a.major),
                fe = f(a.name),
                pe = f(u.vendor),
                me = f(u.model),
                we = f(c.name),
                ge = f(c.version),
                be = f(d),
                he = a.name === R,
                ve = a.name === I,
                ye = f(u.type, "browser"),
                Ee = function() {
                    var e = p();
                    return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
                }(),
                Oe = m("iPad"),
                _e = m("iPhone"),
                Te = m("iPod"),
                xe = function() {
                    var e = p(),
                        t = e && e.userAgent.toLowerCase();
                    return "string" === typeof t && t.includes("electron")
                }();
            t.Dt = ee, t.tq = J, t.Em = $
        },
        84706: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ix: function() {
                    return Z
                },
                Am: function() {
                    return ee
                }
            });
            var o = n(59748);

            function r(e, t) {
                return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            n(45697);
            var i = !1,
                s = o.default.createContext(null),
                a = "unmounted",
                u = "exited",
                c = "entering",
                l = "entered",
                d = "exiting",
                f = function(e) {
                    var t, n;

                    function f(t, n) {
                        var o;
                        o = e.call(this, t, n) || this;
                        var r, i = n && !n.isMounting ? t.enter : t.appear;
                        return o.appearStatus = null, t.in ? i ? (r = u, o.appearStatus = c) : r = l : r = t.unmountOnExit || t.mountOnEnter ? a : u, o.state = {
                            status: r
                        }, o.nextCallback = null, o
                    }
                    n = e, (t = f).prototype = Object.create(n.prototype), t.prototype.constructor = t, r(t, n), f.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === a ? {
                            status: u
                        } : null
                    };
                    var p = f.prototype;
                    return p.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, p.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== c && n !== l && (t = c) : n !== c && n !== l || (t = d)
                        }
                        this.updateStatus(!1, t)
                    }, p.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, p.getTimeouts = function() {
                        var e, t, n, o = this.props.timeout;
                        return e = t = n = o, null != o && "number" !== typeof o && (e = o.exit, t = o.enter, n = void 0 !== o.appear ? o.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, p.updateStatus = function(e, t) {
                        void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), t === c ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === u && this.setState({
                            status: a
                        })
                    }, p.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            s = this.props.nodeRef ? [r] : [o.default.findDOMNode(this), r],
                            a = s[0],
                            u = s[1],
                            d = this.getTimeouts(),
                            f = r ? d.appear : d.enter;
                        !e && !n || i ? this.safeSetState({
                            status: l
                        }, (function() {
                            t.props.onEntered(a)
                        })) : (this.props.onEnter(a, u), this.safeSetState({
                            status: c
                        }, (function() {
                            t.props.onEntering(a, u), t.onTransitionEnd(f, (function() {
                                t.safeSetState({
                                    status: l
                                }, (function() {
                                    t.props.onEntered(a, u)
                                }))
                            }))
                        })))
                    }, p.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : o.default.findDOMNode(this);
                        t && !i ? (this.props.onExit(r), this.safeSetState({
                            status: d
                        }, (function() {
                            e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: u
                                }, (function() {
                                    e.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: u
                        }, (function() {
                            e.props.onExited(r)
                        }))
                    }, p.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, p.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, p.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(o) {
                            n && (n = !1, t.nextCallback = null, e(o))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, p.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : o.default.findDOMNode(this),
                            r = null == e && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    s = i[0],
                                    a = i[1];
                                this.props.addEndListener(s, a)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, p.render = function() {
                        var e = this.state.status;
                        if (e === a) return null;
                        var t = this.props,
                            n = t.children,
                            r = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, function(e, t) {
                                if (null == e) return {};
                                var n, o, r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r
                            }(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return o.default.createElement(s.Provider, {
                            value: null
                        }, "function" === typeof n ? n(e, r) : o.default.cloneElement(o.default.Children.only(n), r))
                    }, f
                }(o.default.Component);

            function p() {}
            f.contextType = s, f.propTypes = {}, f.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: p,
                onEntering: p,
                onEntered: p,
                onExit: p,
                onExiting: p,
                onExited: p
            }, f.UNMOUNTED = a, f.EXITED = u, f.ENTERING = c, f.ENTERED = l, f.EXITING = d;
            var m = f;

            function w(e) {
                var t, n, o = "";
                if ("string" === typeof e || "number" === typeof e) o += e;
                else if ("object" === typeof e)
                    if (Array.isArray(e))
                        for (t = 0; t < e.length; t++) e[t] && (n = w(e[t])) && (o && (o += " "), o += n);
                    else
                        for (t in e) e[t] && (o && (o += " "), o += t);
                return o
            }

            function g() {
                for (var e, t, n = 0, o = ""; n < arguments.length;)(e = arguments[n++]) && (t = w(e)) && (o && (o += " "), o += t);
                return o
            }

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function h(e, t) {
                if (null == e) return {};
                var n, o, r = {},
                    i = Object.keys(e);
                for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }

            function v(e) {
                return "number" === typeof e && !isNaN(e)
            }

            function y(e) {
                return "boolean" === typeof e
            }

            function E(e) {
                return "string" === typeof e
            }

            function O(e) {
                return "function" === typeof e
            }

            function _(e) {
                return E(e) || O(e) ? e : null
            }

            function T(e) {
                return 0 === e || e
            }
            var x = !("undefined" === typeof window || !window.document || !window.document.createElement);

            function S(e) {
                return (0, o.isValidElement)(e) || E(e) || O(e) || v(e)
            }
            var k = {
                    TOP_LEFT: "top-left",
                    TOP_RIGHT: "top-right",
                    TOP_CENTER: "top-center",
                    BOTTOM_LEFT: "bottom-left",
                    BOTTOM_RIGHT: "bottom-right",
                    BOTTOM_CENTER: "bottom-center"
                },
                P = {
                    INFO: "info",
                    SUCCESS: "success",
                    WARNING: "warning",
                    ERROR: "error",
                    DEFAULT: "default",
                    DARK: "dark"
                };

            function C(e) {
                var t, n, r = e.enter,
                    i = e.exit,
                    s = e.duration,
                    a = void 0 === s ? 750 : s,
                    u = e.appendPosition,
                    c = void 0 !== u && u,
                    l = e.collapse,
                    d = void 0 === l || l,
                    f = e.collapseDuration,
                    p = void 0 === f ? 300 : f;
                return Array.isArray(a) && 2 === a.length ? (t = a[0], n = a[1]) : t = n = a,
                    function(e) {
                        var s = e.children,
                            a = e.position,
                            u = e.preventExitTransition,
                            l = e.done,
                            f = h(e, ["children", "position", "preventExitTransition", "done"]),
                            w = c ? r + "--" + a : r,
                            g = c ? i + "--" + a : i,
                            b = function e() {
                                var t = f.nodeRef.current;
                                t && (t.removeEventListener("animationend", e), d ? function(e, t, n) {
                                    void 0 === n && (n = 300);
                                    var o = e.scrollHeight,
                                        r = e.style;
                                    requestAnimationFrame((function() {
                                        r.minHeight = "initial", r.height = o + "px", r.transition = "all " + n + "ms", requestAnimationFrame((function() {
                                            r.height = "0", r.padding = "0", r.margin = "0", setTimeout((function() {
                                                return t()
                                            }), n)
                                        }))
                                    }))
                                }(t, l, p) : l())
                            };
                        return (0, o.createElement)(m, Object.assign({}, f, {
                            timeout: u ? d ? p : 50 : {
                                enter: t,
                                exit: d ? n + p : n + 50
                            },
                            onEnter: function() {
                                var e = f.nodeRef.current;
                                e && (e.classList.add(w), e.style.animationFillMode = "forwards", e.style.animationDuration = t + "ms")
                            },
                            onEntered: function() {
                                var e = f.nodeRef.current;
                                e && (e.classList.remove(w), e.style.removeProperty("animationFillMode"), e.style.removeProperty("animationDuration"))
                            },
                            onExit: u ? b : function() {
                                var e = f.nodeRef.current;
                                e && (e.classList.add(g), e.style.animationFillMode = "forwards", e.style.animationDuration = n + "ms", e.addEventListener("animationend", b))
                            },
                            unmountOnExit: !0
                        }), s)
                    }
            }
            var N = {
                list: new Map,
                emitQueue: new Map,
                on: function(e, t) {
                    return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
                },
                off: function(e, t) {
                    if (t) {
                        var n = this.list.get(e).filter((function(e) {
                            return e !== t
                        }));
                        return this.list.set(e, n), this
                    }
                    return this.list.delete(e), this
                },
                cancelEmit: function(e) {
                    var t = this.emitQueue.get(e);
                    return t && (t.forEach((function(e) {
                        return clearTimeout(e)
                    })), this.emitQueue.delete(e)), this
                },
                emit: function(e) {
                    for (var t = this, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                    this.list.has(e) && this.list.get(e).forEach((function(n) {
                        var r = setTimeout((function() {
                            n.apply(void 0, o)
                        }), 0);
                        t.emitQueue.has(e) || t.emitQueue.set(e, []), t.emitQueue.get(e).push(r)
                    }))
                }
            };

            function A(e, t) {
                void 0 === t && (t = !1);
                var n = (0, o.useRef)(e);
                return (0, o.useEffect)((function() {
                    t && (n.current = e)
                })), n.current
            }

            function I(e, t) {
                switch (t.type) {
                    case "ADD":
                        return [].concat(e, [t.toastId]).filter((function(e) {
                            return e !== t.staleId
                        }));
                    case "REMOVE":
                        return T(t.toastId) ? e.filter((function(e) {
                            return e !== t.toastId
                        })) : []
                }
            }

            function j(e) {
                var t = (0, o.useReducer)((function(e) {
                        return e + 1
                    }), 0)[1],
                    n = (0, o.useReducer)(I, []),
                    r = n[0],
                    i = n[1],
                    s = (0, o.useRef)(null),
                    a = A(0),
                    u = A([]),
                    c = A({}),
                    l = A({
                        toastKey: 1,
                        displayedToast: 0,
                        props: e,
                        containerId: null,
                        isToastActive: d,
                        getToast: function(e) {
                            return c[e] || null
                        }
                    });

                function d(e) {
                    return -1 !== r.indexOf(e)
                }

                function f(e) {
                    var t = e.containerId,
                        n = l.props,
                        o = n.limit,
                        r = n.enableMultiContainer;
                    o && (!t || l.containerId === t && r) && (a -= u.length, u = [])
                }

                function p(e) {
                    var t = u.length;
                    if ((a = T(e) ? a - 1 : a - l.displayedToast) < 0 && (a = 0), t > 0) {
                        var n = T(e) ? 1 : l.props.limit;
                        if (1 === t || 1 === n) l.displayedToast++, m();
                        else {
                            var o = n > t ? t : n;
                            l.displayedToast = o;
                            for (var r = 0; r < o; r++) m()
                        }
                    }
                    i({
                        type: "REMOVE",
                        toastId: e
                    })
                }

                function m() {
                    var e = u.shift(),
                        t = e.toastContent,
                        n = e.toastProps,
                        o = e.staleId;
                    setTimeout((function() {
                        g(t, n, o)
                    }), 500)
                }

                function w(e, n) {
                    var r = n.delay,
                        i = n.staleId,
                        d = h(n, ["delay", "staleId"]);
                    if (S(e) && ! function(e) {
                            var t = e.containerId,
                                n = e.toastId,
                                o = e.updateId;
                            return !!(!s.current || l.props.enableMultiContainer && t !== l.props.containerId || l.isToastActive(n) && null == o)
                        }(d)) {
                        var f = d.toastId,
                            m = d.updateId,
                            w = l.props,
                            b = function() {
                                return p(f)
                            },
                            T = !(0, l.isToastActive)(f);
                        T && a++;
                        var x, k, P = {
                            toastId: f,
                            updateId: m,
                            key: d.key || l.toastKey++,
                            type: d.type,
                            closeToast: b,
                            closeButton: d.closeButton,
                            rtl: w.rtl,
                            position: d.position || w.position,
                            transition: d.transition || w.transition,
                            className: _(d.className || w.toastClassName),
                            bodyClassName: _(d.bodyClassName || w.bodyClassName),
                            style: d.style || w.toastStyle,
                            bodyStyle: d.bodyStyle || w.bodyStyle,
                            onClick: d.onClick || w.onClick,
                            pauseOnHover: y(d.pauseOnHover) ? d.pauseOnHover : w.pauseOnHover,
                            pauseOnFocusLoss: y(d.pauseOnFocusLoss) ? d.pauseOnFocusLoss : w.pauseOnFocusLoss,
                            draggable: y(d.draggable) ? d.draggable : w.draggable,
                            draggablePercent: v(d.draggablePercent) ? d.draggablePercent : w.draggablePercent,
                            closeOnClick: y(d.closeOnClick) ? d.closeOnClick : w.closeOnClick,
                            progressClassName: _(d.progressClassName || w.progressClassName),
                            progressStyle: d.progressStyle || w.progressStyle,
                            autoClose: (x = d.autoClose, k = w.autoClose, !1 === x || v(x) && x > 0 ? x : k),
                            hideProgressBar: y(d.hideProgressBar) ? d.hideProgressBar : w.hideProgressBar,
                            progress: d.progress,
                            role: E(d.role) ? d.role : w.role,
                            deleteToast: function() {
                                ! function(e) {
                                    delete c[e], t()
                                }(f)
                            }
                        };
                        O(d.onOpen) && (P.onOpen = d.onOpen), O(d.onClose) && (P.onClose = d.onClose);
                        var C = w.closeButton;
                        !1 === d.closeButton || S(d.closeButton) ? C = d.closeButton : !0 === d.closeButton && (C = !S(w.closeButton) || w.closeButton), P.closeButton = C;
                        var N = e;
                        (0, o.isValidElement)(e) && !E(e.type) ? N = (0, o.cloneElement)(e, {
                            closeToast: b,
                            toastProps: P
                        }) : O(e) && (N = e({
                            closeToast: b,
                            toastProps: P
                        })), w.limit && w.limit > 0 && a > w.limit && T ? u.push({
                            toastContent: N,
                            toastProps: P,
                            staleId: i
                        }) : v(r) && r > 0 ? setTimeout((function() {
                            g(N, P, i)
                        }), r) : g(N, P, i)
                    }
                }

                function g(e, t, n) {
                    var o = t.toastId;
                    c[o] = {
                        content: e,
                        props: t
                    }, i({
                        type: "ADD",
                        toastId: o,
                        staleId: n
                    })
                }
                return (0, o.useEffect)((function() {
                    return l.containerId = e.containerId, N.cancelEmit(3).on(0, w).on(1, (function(e) {
                            return s.current && p(e)
                        })).on(5, f).emit(2, l),
                        function() {
                            return N.emit(3, l)
                        }
                }), []), (0, o.useEffect)((function() {
                    l.isToastActive = d, l.displayedToast = r.length, N.emit(4, r.length, e.containerId)
                }), [r]), (0, o.useEffect)((function() {
                    l.props = e
                })), {
                    getToastToRender: function(t) {
                        for (var n = {}, o = e.newestOnTop ? Object.keys(c).reverse() : Object.keys(c), r = 0; r < o.length; r++) {
                            var i = c[o[r]],
                                s = i.props.position;
                            n[s] || (n[s] = []), n[s].push(i)
                        }
                        return Object.keys(n).map((function(e) {
                            return t(e, n[e])
                        }))
                    },
                    collection: c,
                    containerRef: s,
                    isToastActive: d
                }
            }

            function D(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
            }

            function R(e) {
                var t = (0, o.useState)(!0),
                    n = t[0],
                    r = t[1],
                    i = (0, o.useState)(!1),
                    s = i[0],
                    a = i[1],
                    u = (0, o.useRef)(null),
                    c = A({
                        start: 0,
                        x: 0,
                        y: 0,
                        deltaX: 0,
                        removalDistance: 0,
                        canCloseOnClick: !0,
                        canDrag: !1,
                        boundingRect: null
                    }),
                    l = A(e, !0),
                    d = e.autoClose,
                    f = e.pauseOnHover,
                    p = e.closeToast,
                    m = e.onClick,
                    w = e.closeOnClick;

                function g(t) {
                    var n = u.current;
                    c.canCloseOnClick = !0, c.canDrag = !0, c.boundingRect = n.getBoundingClientRect(), n.style.transition = "", c.start = c.x = D(t.nativeEvent), c.removalDistance = n.offsetWidth * (e.draggablePercent / 100)
                }

                function b() {
                    if (c.boundingRect) {
                        var t = c.boundingRect,
                            n = t.top,
                            o = t.bottom,
                            r = t.left,
                            i = t.right;
                        e.pauseOnHover && c.x >= r && c.x <= i && c.y >= n && c.y <= o ? v() : h()
                    }
                }

                function h() {
                    r(!0)
                }

                function v() {
                    r(!1)
                }

                function y(e) {
                    e.preventDefault();
                    var t = u.current;
                    c.canDrag && (n && v(), c.x = D(e), c.deltaX = c.x - c.start, c.y = function(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
                    }(e), c.start !== c.x && (c.canCloseOnClick = !1), t.style.transform = "translateX(" + c.deltaX + "px)", t.style.opacity = "" + (1 - Math.abs(c.deltaX / c.removalDistance)))
                }

                function E() {
                    var t = u.current;
                    if (c.canDrag) {
                        if (c.canDrag = !1, Math.abs(c.deltaX) > c.removalDistance) return a(!0), void e.closeToast();
                        t.style.transition = "transform 0.2s, opacity 0.2s", t.style.transform = "translateX(0)", t.style.opacity = "1"
                    }
                }(0, o.useEffect)((function() {
                    return O(e.onOpen) && e.onOpen((0, o.isValidElement)(e.children) && e.children.props),
                        function() {
                            O(l.onClose) && l.onClose((0, o.isValidElement)(l.children) && l.children.props)
                        }
                }), []), (0, o.useEffect)((function() {
                    return e.draggable && (document.addEventListener("mousemove", y), document.addEventListener("mouseup", E), document.addEventListener("touchmove", y), document.addEventListener("touchend", E)),
                        function() {
                            e.draggable && (document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", E), document.removeEventListener("touchmove", y), document.removeEventListener("touchend", E))
                        }
                }), [e.draggable]), (0, o.useEffect)((function() {
                    return e.pauseOnFocusLoss && (window.addEventListener("focus", h), window.addEventListener("blur", v)),
                        function() {
                            e.pauseOnFocusLoss && (window.removeEventListener("focus", h), window.removeEventListener("blur", v))
                        }
                }), [e.pauseOnFocusLoss]);
                var _ = {
                    onMouseDown: g,
                    onTouchStart: g,
                    onMouseUp: b,
                    onTouchEnd: b
                };
                return d && f && (_.onMouseEnter = v, _.onMouseLeave = h), w && (_.onClick = function(e) {
                    m && m(e), c.canCloseOnClick && p()
                }), {
                    playToast: h,
                    pauseToast: v,
                    isRunning: n,
                    preventExitTransition: s,
                    toastRef: u,
                    eventHandlers: _
                }
            }

            function L(e) {
                var t = e.closeToast,
                    n = e.type,
                    r = e.ariaLabel,
                    i = void 0 === r ? "close" : r;
                return (0, o.createElement)("button", {
                    className: "Toastify__close-button Toastify__close-button--" + n,
                    type: "button",
                    onClick: function(e) {
                        e.stopPropagation(), t(e)
                    },
                    "aria-label": i
                }, (0, o.createElement)("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 14 16"
                }, (0, o.createElement)("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
                })))
            }

            function M(e) {
                var t, n, r = e.delay,
                    i = e.isRunning,
                    s = e.closeToast,
                    a = e.type,
                    u = e.hide,
                    c = e.className,
                    l = e.style,
                    d = e.controlledProgress,
                    f = e.progress,
                    p = e.rtl,
                    m = e.isIn,
                    w = b({}, l, {
                        animationDuration: r + "ms",
                        animationPlayState: i ? "running" : "paused",
                        opacity: u ? 0 : 1
                    });
                d && (w.transform = "scaleX(" + f + ")");
                var h = ["Toastify__progress-bar", d ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar--" + a, (t = {}, t["Toastify__progress-bar--rtl"] = p, t)],
                    v = O(c) ? c({
                        rtl: p,
                        type: a,
                        defaultClassName: g.apply(void 0, h)
                    }) : g.apply(void 0, [].concat(h, [c])),
                    y = ((n = {})[d && f >= 1 ? "onTransitionEnd" : "onAnimationEnd"] = d && f < 1 ? null : function() {
                        m && s()
                    }, n);
                return (0, o.createElement)("div", Object.assign({
                    className: v,
                    style: w
                }, y))
            }
            M.defaultProps = {
                type: P.DEFAULT,
                hide: !1
            };
            var B = function(e) {
                    var t, n = R(e),
                        r = n.isRunning,
                        i = n.preventExitTransition,
                        s = n.toastRef,
                        a = n.eventHandlers,
                        u = e.closeButton,
                        c = e.children,
                        l = e.autoClose,
                        d = e.onClick,
                        f = e.type,
                        p = e.hideProgressBar,
                        m = e.closeToast,
                        w = e.transition,
                        b = e.position,
                        h = e.className,
                        v = e.style,
                        y = e.bodyClassName,
                        E = e.bodyStyle,
                        _ = e.progressClassName,
                        T = e.progressStyle,
                        x = e.updateId,
                        S = e.role,
                        k = e.progress,
                        P = e.rtl,
                        C = e.toastId,
                        N = e.deleteToast,
                        A = ["Toastify__toast", "Toastify__toast--" + f, (t = {}, t["Toastify__toast--rtl"] = P, t)],
                        I = O(h) ? h({
                            rtl: P,
                            position: b,
                            type: f,
                            defaultClassName: g.apply(void 0, A)
                        }) : g.apply(void 0, [].concat(A, [h])),
                        j = !!k;
                    return (0, o.createElement)(w, { in: e.in,
                        appear: !0,
                        done: N,
                        position: b,
                        preventExitTransition: i,
                        nodeRef: s
                    }, (0, o.createElement)("div", Object.assign({
                        id: C,
                        onClick: d,
                        className: I || void 0
                    }, a, {
                        style: v,
                        ref: s
                    }), (0, o.createElement)("div", Object.assign({}, e.in && {
                        role: S
                    }, {
                        className: O(y) ? y({
                            type: f
                        }) : g("Toastify__toast-body", y),
                        style: E
                    }), c), function(e) {
                        if (e) {
                            var t = {
                                closeToast: m,
                                type: f
                            };
                            return O(e) ? e(t) : (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, t) : void 0
                        }
                    }(u), (l || j) && (0, o.createElement)(M, Object.assign({}, x && !j ? {
                        key: "pb-" + x
                    } : {}, {
                        rtl: P,
                        delay: l,
                        isRunning: r,
                        isIn: e.in,
                        closeToast: m,
                        hide: p,
                        type: f,
                        style: T,
                        className: _,
                        controlledProgress: j,
                        progress: k
                    }))))
                },
                U = C({
                    enter: "Toastify__bounce-enter",
                    exit: "Toastify__bounce-exit",
                    appendPosition: !0
                }),
                z = function(e) {
                    var t = e.children,
                        n = e.className,
                        r = e.style,
                        i = h(e, ["children", "className", "style"]);
                    return delete i.in, (0, o.createElement)("div", {
                        className: n,
                        style: r
                    }, o.Children.map(t, (function(e) {
                        return (0, o.cloneElement)(e, i)
                    })))
                },
                Z = function(e) {
                    var t = j(e),
                        n = t.getToastToRender,
                        r = t.containerRef,
                        i = t.isToastActive,
                        s = e.className,
                        a = e.style,
                        u = e.rtl,
                        c = e.containerId;
                    return (0, o.createElement)("div", {
                        ref: r,
                        className: "Toastify",
                        id: c
                    }, n((function(e, t) {
                        var n, r, c = {
                            className: O(s) ? s({
                                position: e,
                                rtl: u,
                                defaultClassName: g("Toastify__toast-container", "Toastify__toast-container--" + e, (n = {}, n["Toastify__toast-container--rtl"] = u, n))
                            }) : g("Toastify__toast-container", "Toastify__toast-container--" + e, (r = {}, r["Toastify__toast-container--rtl"] = u, r), _(s)),
                            style: 0 === t.length ? b({}, a, {
                                pointerEvents: "none"
                            }) : b({}, a)
                        };
                        return (0, o.createElement)(z, Object.assign({}, c, {
                            key: "container-" + e
                        }), t.map((function(e) {
                            var t = e.content,
                                n = e.props;
                            return (0, o.createElement)(B, Object.assign({}, n, { in: i(n.toastId),
                                key: "toast-" + n.key,
                                closeButton: !0 === n.closeButton ? L : n.closeButton
                            }), t)
                        })))
                    })))
                };
            Z.defaultProps = {
                position: k.TOP_RIGHT,
                transition: U,
                rtl: !1,
                autoClose: 5e3,
                hideProgressBar: !1,
                closeButton: L,
                pauseOnHover: !0,
                pauseOnFocusLoss: !0,
                closeOnClick: !0,
                newestOnTop: !1,
                draggable: !0,
                draggablePercent: 80,
                role: "alert"
            };
            var F, V, G, H = new Map,
                X = [],
                q = !1;

            function W() {
                return H.size > 0
            }

            function Q(e, t) {
                var n = function(e) {
                    return W() ? H.get(e || F) : null
                }(t.containerId);
                return n ? n.getToast(e) : null
            }

            function J() {
                return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10)
            }

            function K(e) {
                return e && (E(e.toastId) || v(e.toastId)) ? e.toastId : J()
            }

            function $(e, t) {
                return W() ? N.emit(0, e, t) : (X.push({
                    content: e,
                    options: t
                }), q && x && (q = !1, V = document.createElement("div"), document.body.appendChild(V), (0, o.render)((0, o.createElement)(Z, Object.assign({}, G)), V))), t.toastId
            }

            function Y(e, t) {
                return b({}, t, {
                    type: t && t.type || e,
                    toastId: K(t)
                })
            }
            var ee = function(e, t) {
                return $(e, Y(P.DEFAULT, t))
            };
            ee.success = function(e, t) {
                return $(e, Y(P.SUCCESS, t))
            }, ee.info = function(e, t) {
                return $(e, Y(P.INFO, t))
            }, ee.error = function(e, t) {
                return $(e, Y(P.ERROR, t))
            }, ee.warning = function(e, t) {
                return $(e, Y(P.WARNING, t))
            }, ee.dark = function(e, t) {
                return $(e, Y(P.DARK, t))
            }, ee.warn = ee.warning, ee.dismiss = function(e) {
                return W() && N.emit(1, e)
            }, ee.clearWaitingQueue = function(e) {
                return void 0 === e && (e = {}), W() && N.emit(5, e)
            }, ee.isActive = function(e) {
                var t = !1;
                return H.forEach((function(n) {
                    n.isToastActive && n.isToastActive(e) && (t = !0)
                })), t
            }, ee.update = function(e, t) {
                void 0 === t && (t = {}), setTimeout((function() {
                    var n = Q(e, t);
                    if (n) {
                        var o = n.props,
                            r = n.content,
                            i = b({}, o, t, {
                                toastId: t.toastId || e,
                                updateId: J()
                            });
                        i.toastId !== e && (i.staleId = e);
                        var s = "undefined" !== typeof i.render ? i.render : r;
                        delete i.render, $(s, i)
                    }
                }), 0)
            }, ee.done = function(e) {
                ee.update(e, {
                    progress: 1
                })
            }, ee.onChange = function(e) {
                return O(e) && N.on(4, e),
                    function() {
                        O(e) && N.off(4, e)
                    }
            }, ee.configure = function(e) {
                void 0 === e && (e = {}), q = !0, G = e
            }, ee.POSITION = k, ee.TYPE = P, N.on(2, (function(e) {
                F = e.containerId || e, H.set(F, e), X.forEach((function(e) {
                    N.emit(0, e.content, e.options)
                })), X = []
            })).on(3, (function(e) {
                H.delete(e.containerId || e), 0 === H.size && N.off(0).off(1).off(5), x && V && document.body.removeChild(V)
            }))
        },
        23451: function(e, t, n) {
            var o;
            ! function(r, i) {
                "use strict";
                var s = "function",
                    a = "undefined",
                    u = "object",
                    c = "model",
                    l = "name",
                    d = "type",
                    f = "vendor",
                    p = "version",
                    m = "architecture",
                    w = "console",
                    g = "mobile",
                    b = "tablet",
                    h = "smarttv",
                    v = "wearable",
                    y = {
                        extend: function(e, t) {
                            var n = {};
                            for (var o in e) t[o] && t[o].length % 2 === 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                            return n
                        },
                        has: function(e, t) {
                            return "string" === typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return "string" === typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : i
                        },
                        trim: function(e) {
                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                    },
                    E = {
                        rgx: function(e, t) {
                            for (var n, o, r, a, c, l, d = 0; d < t.length && !c;) {
                                var f = t[d],
                                    p = t[d + 1];
                                for (n = o = 0; n < f.length && !c;)
                                    if (c = f[n++].exec(e))
                                        for (r = 0; r < p.length; r++) l = c[++o], typeof(a = p[r]) === u && a.length > 0 ? 2 == a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 == a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : i : this[a[0]] = l ? a[1].call(this, l, a[2]) : i : 4 == a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : i) : this[a] = l || i;
                                d += 2
                            }
                        },
                        str: function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === u && t[n].length > 0) {
                                    for (var o = 0; o < t[n].length; o++)
                                        if (y.has(t[n][o], e)) return "?" === n ? i : n
                                } else if (y.has(t[n], e)) return "?" === n ? i : n;
                            return e
                        }
                    },
                    O = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    _ = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [l, p],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [l, "Opera Mini"], p
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [l, "Opera"], p
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                            [l, p],
                            [/(konqueror)\/([\w\.]+)/i],
                            [
                                [l, "Konqueror"], p
                            ],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [l, "IE"], p
                            ],
                            [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                            [
                                [l, "Edge"], p
                            ],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [l, "Yandex"], p
                            ],
                            [/(Avast)\/([\w\.]+)/i],
                            [
                                [l, "Avast Secure Browser"], p
                            ],
                            [/(AVG)\/([\w\.]+)/i],
                            [
                                [l, "AVG Secure Browser"], p
                            ],
                            [/(puffin)\/([\w\.]+)/i],
                            [
                                [l, "Puffin"], p
                            ],
                            [/(focus)\/([\w\.]+)/i],
                            [
                                [l, "Firefox Focus"], p
                            ],
                            [/(opt)\/([\w\.]+)/i],
                            [
                                [l, "Opera Touch"], p
                            ],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [l, "UCBrowser"], p
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [l, /_/g, " "], p
                            ],
                            [/(windowswechat qbcore)\/([\w\.]+)/i],
                            [
                                [l, "WeChat(Win) Desktop"], p
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [l, "WeChat"], p
                            ],
                            [/(brave)\/([\w\.]+)/i],
                            [
                                [l, "Brave"], p
                            ],
                            [/(qqbrowserlite)\/([\w\.]+)/i],
                            [l, p],
                            [/(QQ)\/([\d\.]+)/i],
                            [l, p],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [l, p],
                            [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                            [l, p],
                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                            [l, p],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                            [l],
                            [/(LBBROWSER)/i],
                            [l],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [p, [l, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [p, [l, "Facebook"]],
                            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                            [l, p],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [p, [l, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [l, /(.+)/, "$1 WebView"], p
                            ],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [
                                [l, /(.+(?:g|us))(.+)/, "$1 $2"], p
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [p, [l, "Android Browser"]],
                            [/(sailfishbrowser)\/([\w\.]+)/i],
                            [
                                [l, "Sailfish Browser"], p
                            ],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [l, p],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [l, "Dolphin"], p
                            ],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [l, "360 Browser"]
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [l, "Chrome"], p
                            ],
                            [/(coast)\/([\w\.]+)/i],
                            [
                                [l, "Opera Coast"], p
                            ],
                            [/fxios\/([\w\.-]+)/i],
                            [p, [l, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [p, [l, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [p, l],
                            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [
                                [l, "GSA"], p
                            ],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [l, [p, E.str, O.browser.oldsafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [l, p],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [l, "Netscape"], p
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [l, p]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [m, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [m, y.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [m, "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [m, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [m, /ower/, "", y.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [m, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                [m, y.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                            [c, f, [d, b]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [c, [f, "Apple"],
                                [d, b]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [c, "Apple TV"],
                                [f, "Apple"],
                                [d, h]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [f, c, [d, b]],
                            [/(kf[A-z]+)\sbuild\/.+silk\//i],
                            [c, [f, "Amazon"],
                                [d, b]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                            [
                                [c, E.str, O.device.amazon.model],
                                [f, "Amazon"],
                                [d, g]
                            ],
                            [/android.+aft([bms])\sbuild/i],
                            [c, [f, "Amazon"],
                                [d, h]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [c, f, [d, g]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [c, [f, "Apple"],
                                [d, g]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [f, c, [d, g]],
                            [/\(bb10;\s(\w+)/i],
                            [c, [f, "BlackBerry"],
                                [d, g]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                            [c, [f, "Asus"],
                                [d, b]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [f, "Sony"],
                                [c, "Xperia Tablet"],
                                [d, b]
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [c, [f, "Sony"],
                                [d, g]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [f, c, [d, w]],
                            [/android.+;\s(shield)\sbuild/i],
                            [c, [f, "Nvidia"],
                                [d, w]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [c, [f, "Sony"],
                                [d, w]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [f, E.str, O.device.sprint.vendor],
                                [c, E.str, O.device.sprint.model],
                                [d, g]
                            ],
                            [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [f, [c, /_/g, " "],
                                [d, g]
                            ],
                            [/(nexus\s9)/i],
                            [c, [f, "HTC"],
                                [d, b]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                            [c, [f, "Huawei"],
                                [d, g]
                            ],
                            [/android.+(bah2?-a?[lw]\d{2})/i],
                            [c, [f, "Huawei"],
                                [d, b]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [f, c, [d, g]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [c, [f, "Microsoft"],
                                [d, w]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [c, /\./g, " "],
                                [f, "Microsoft"],
                                [d, g]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [c, [f, "Motorola"],
                                [d, g]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [c, [f, "Motorola"],
                                [d, b]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [f, y.trim],
                                [c, y.trim],
                                [d, h]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [c, /^/, "SmartTV"],
                                [f, "Samsung"],
                                [d, h]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [c, [f, "Sharp"],
                                [d, h]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [f, "Samsung"], c, [d, b]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [f, [d, h], c],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                            [
                                [f, "Samsung"], c, [d, g]
                            ],
                            [/sie-(\w*)/i],
                            [c, [f, "Siemens"],
                                [d, g]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                            [
                                [f, "Nokia"], c, [d, g]
                            ],
                            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [c, [f, "Acer"],
                                [d, b]
                            ],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [c, [f, "LG"],
                                [d, b]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [f, "LG"], c, [d, b]
                            ],
                            [/(lg) netcast\.tv/i],
                            [f, c, [d, h]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [c, [f, "LG"],
                                [d, g]
                            ],
                            [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                            [f, c, [d, b]],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [c, [f, "Lenovo"],
                                [d, b]
                            ],
                            [/(lenovo)[_\s-]?([\w-]+)/i],
                            [f, c, [d, g]],
                            [/linux;.+((jolla));/i],
                            [f, c, [d, g]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [f, c, [d, v]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [f, c, [d, g]],
                            [/crkey/i],
                            [
                                [c, "Chromecast"],
                                [f, "Google"],
                                [d, h]
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [c, [f, "Google"],
                                [d, v]
                            ],
                            [/android.+;\s(pixel c)[\s)]/i],
                            [c, [f, "Google"],
                                [d, b]
                            ],
                            [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                            [c, [f, "Google"],
                                [d, g]
                            ],
                            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [c, /_/g, " "],
                                [f, "Xiaomi"],
                                [d, g]
                            ],
                            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [c, /_/g, " "],
                                [f, "Xiaomi"],
                                [d, b]
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [c, [f, "Meizu"],
                                [d, g]
                            ],
                            [/(mz)-([\w-]{2,})/i],
                            [
                                [f, "Meizu"], c, [d, g]
                            ],
                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                            [c, [f, "OnePlus"],
                                [d, g]
                            ],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [c, [f, "RCA"],
                                [d, b]
                            ],
                            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                            [c, [f, "Dell"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [c, [f, "Verizon"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [
                                [f, "Barnes & Noble"], c, [d, b]
                            ],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [c, [f, "NuVision"],
                                [d, b]
                            ],
                            [/android.+;\s(k88)\sbuild/i],
                            [c, [f, "ZTE"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [c, [f, "Swiss"],
                                [d, g]
                            ],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [c, [f, "Swiss"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [c, [f, "Zeki"],
                                [d, b]
                            ],
                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                            [
                                [f, "Dragon Touch"], c, [d, b]
                            ],
                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                            [c, [f, "Insignia"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                            [c, [f, "NextBook"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [
                                [f, "Voice"], c, [d, g]
                            ],
                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                            [
                                [f, "LvTel"], c, [d, g]
                            ],
                            [/android.+;\s(PH-1)\s/i],
                            [c, [f, "Essential"],
                                [d, g]
                            ],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [c, [f, "Envizen"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                            [f, c, [d, b]],
                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                            [c, [f, "MachSpeed"],
                                [d, b]
                            ],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [f, c, [d, b]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [c, [f, "Rotor"],
                                [d, b]
                            ],
                            [/android.+(KS(.+))\s+build/i],
                            [c, [f, "Amazon"],
                                [d, b]
                            ],
                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                            [f, c, [d, b]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [d, y.lowerize], f, c
                            ],
                            [/[\s\/\(](smart-?tv)[;\)]/i],
                            [
                                [d, h]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [c, [f, "Generic"]]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [p, [l, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [p, [l, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [l, p],
                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                            [p, l]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [l, p],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [l, [p, E.str, O.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [l, "Windows"],
                                [p, E.str, O.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [l, "BlackBerry"], p
                            ],
                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                            [l, p],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                            [
                                [l, "Symbian"], p
                            ],
                            [/\((series40);/i],
                            [l],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [l, "Firefox OS"], p
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                            [l, p],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [l, "Chromium OS"], p
                            ],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [l, "Solaris"], p
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                            [l, p],
                            [/(haiku)\s(\w+)/i],
                            [l, p],
                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [p, /_/g, "."],
                                [l, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [l, "Mac OS"],
                                [p, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [l, p]
                        ]
                    },
                    T = function(e, t) {
                        if ("object" === typeof e && (t = e, e = i), !(this instanceof T)) return new T(e, t).getResult();
                        var n = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                            o = t ? y.extend(_, t) : _;
                        return this.getBrowser = function() {
                            var e = {
                                name: i,
                                version: i
                            };
                            return E.rgx.call(e, n, o.browser), e.major = y.major(e.version), e
                        }, this.getCPU = function() {
                            var e = {
                                architecture: i
                            };
                            return E.rgx.call(e, n, o.cpu), e
                        }, this.getDevice = function() {
                            var e = {
                                vendor: i,
                                model: i,
                                type: i
                            };
                            return E.rgx.call(e, n, o.device), e
                        }, this.getEngine = function() {
                            var e = {
                                name: i,
                                version: i
                            };
                            return E.rgx.call(e, n, o.engine), e
                        }, this.getOS = function() {
                            var e = {
                                name: i,
                                version: i
                            };
                            return E.rgx.call(e, n, o.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(e) {
                            return n = e, this
                        }, this
                    };
                T.VERSION = "0.7.21", T.BROWSER = {
                    NAME: l,
                    MAJOR: "major",
                    VERSION: p
                }, T.CPU = {
                    ARCHITECTURE: m
                }, T.DEVICE = {
                    MODEL: c,
                    VENDOR: f,
                    TYPE: d,
                    CONSOLE: w,
                    MOBILE: g,
                    SMARTTV: h,
                    TABLET: b,
                    WEARABLE: v,
                    EMBEDDED: "embedded"
                }, T.ENGINE = {
                    NAME: l,
                    VERSION: p
                }, T.OS = {
                    NAME: l,
                    VERSION: p
                }, typeof t !== a ? (e.exports && (t = e.exports = T), t.UAParser = T) : (o = function() {
                    return T
                }.call(t, n, t, e)) === i || (e.exports = o);
                var x = r && (r.jQuery || r.Zepto);
                if (x && !x.ua) {
                    var S = new T;
                    x.ua = S.getResult(), x.ua.get = function() {
                        return S.getUA()
                    }, x.ua.set = function(e) {
                        S.setUA(e);
                        var t = S.getResult();
                        for (var n in t) x.ua[n] = t[n]
                    }
                }
            }("object" === typeof window ? window : this)
        },
        94717: function(e) {
            e.exports = "https://static.fotor.com/web/_next/static/images/favicon-d4b8dbe4630a2bc790117e61267bbb33.png"
        },
        56586: function(e, t, n) {
            "use strict";

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        },
        92809: function(e, t, n) {
            "use strict";

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        },
        80318: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(16988);

            function r(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, r, i = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (o = n.next()).done) && (i.push(o.value), !t || i.length !== t); s = !0);
                        } catch (u) {
                            a = !0, r = u
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return i
                    }
                }(e, t) || (0, o.Z)(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        16988: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(56586);

            function r(e, t) {
                if (e) {
                    if ("string" === typeof e) return (0, o.Z)(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, o.Z)(e, t) : void 0
                }
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [9774, 179], (function() {
            return t(76363), t(34651)
        }));
        var n = e.O();
        _N_E = n
    }
]);