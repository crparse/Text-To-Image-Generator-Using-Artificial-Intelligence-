(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8339], {
        966: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return u
                }
            });
            t(59748);
            var o = t(31283),
                a = t.n(o),
                i = t(91742),
                l = t(86010),
                s = t(55071),
                r = t(34952),
                d = t(52732),
                c = t.n(d),
                _ = t(8311);

            function u(n) {
                var e = n.data,
                    t = e.headingH2,
                    o = e.serverTip,
                    d = e.backgroundGradient,
                    c = e.vwMode,
                    u = void 0 !== c && c,
                    f = e.trustedImage,
                    p = "#ffffff" === d ? (0, l.Z)(a().container, u && a().container_px_to_vw) : (0, l.Z)(a().container, a().container_font_style, u && a().container_px_to_vw);
                return (0, _.tZ)("section", {
                    className: a().section,
                    style: {
                        background: d
                    },
                    children: u ? (0, _.tZ)(s.Z, {
                        children: (0, _.tZ)(s.Z.Row, {
                            children: (0, _.tZ)(s.Z.Grid, {
                                children: (0, _.BX)("div", {
                                    className: p,
                                    children: [(0, _.tZ)("h2", {
                                        children: t
                                    }), (0, _.tZ)("div", {
                                        className: a().logo_list,
                                        children: f.map((function(n, e) {
                                            return (0, _.tZ)("img", {
                                                "data-src": r.Z[n.volumeId] + n.filename,
                                                alt: n.title,
                                                className: "lzy",
                                                width: n.width,
                                                height: n.height
                                            }, e)
                                        }))
                                    }), o && (0, _.tZ)("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: o
                                        }
                                    })]
                                })
                            })
                        })
                    }) : (0, _.tZ)(i.Z, {
                        children: (0, _.tZ)(i.Z.Row, {
                            children: (0, _.BX)("div", {
                                className: p,
                                children: [(0, _.tZ)("h2", {
                                    children: t
                                }), (0, _.tZ)("div", {
                                    className: a().logo_list,
                                    children: f.map((function(n, e) {
                                        return (0, _.tZ)("img", {
                                            "data-src": r.Z[n.volumeId] + n.filename,
                                            alt: n.title,
                                            width: n.width,
                                            height: n.height,
                                            className: "lzy"
                                        }, e)
                                    }))
                                }), o && (0, _.tZ)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: o
                                    }
                                })]
                            })
                        })
                    })
                })
            }
            "undefined" === typeof document || document.lazyLoadInstance || (document.lazyLoadInstance = new(c())({
                elements_selector: ".lzy",
                callback_loaded: function(n) {
                    n && n.parentNode && (n.parentNode.style.backgroundColor = "unset")
                },
                threshold: 100
            }))
        },
        76899: function(n, e, t) {
            "use strict";
            t(59748);
            var o = t(86010),
                a = t(91169),
                i = t.n(a),
                l = t(8311);
            e.Z = function(n) {
                return (0, l.tZ)("button", {
                    className: (0, o.Z)(i().button, n.className, "primary" === n.type && i().primary),
                    onClick: n.onClick,
                    disabled: n.disabled,
                    style: n.style,
                    id: n.id ? n.id : "",
                    children: n.children
                })
            }
        },
        94492: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return o.Z
                }
            });
            var o = t(76899)
        },
        55071: function(n, e, t) {
            "use strict";
            t(59748);
            var o = t(86010),
                a = t(67408),
                i = t.n(a),
                l = t(8311),
                s = function(n) {
                    return (0, l.tZ)("div", {
                        className: (0, o.Z)(i().container, n.className),
                        style: null === n || void 0 === n ? void 0 : n.style,
                        children: n.children
                    })
                };
            s.Row = function(n) {
                return (0, l.tZ)("div", {
                    className: (0, o.Z)(i().row, n.className, n.column && (e = +n.column, e >= 4 ? 6 === e ? [i()["column" + e], i()["columnLG" + e], i()["columnSM" + (e - 3)], i()["columnTablet" + (e - 4)], i()["columnMobile" + (e - 5)]] : [i()["column" + e], i()["columnLG" + e], i()["columnSM" + (e - 1)], i()["columnTablet" + (e - 2)], i()["columnMobile" + (e - 3)]] : [i()["column" + e], i().columnMobile2])),
                    id: n.id,
                    children: n.children
                });
                var e
            }, s.Grid = function(n) {
                return (0, l.tZ)("div", {
                    className: (0, o.Z)(i().grid, n.className),
                    children: n.children
                })
            }, e.Z = s
        },
        25092: function(n, e, t) {
            "use strict";
            var o = t(92809),
                a = t(80318),
                i = t(59748),
                l = t(9669),
                s = t.n(l),
                r = t(69918),
                d = t(49437),
                c = t(71572),
                _ = t(59359),
                u = t(62830),
                f = t.n(u),
                p = t(90520),
                m = t(11163),
                h = t(24756);

            function g(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function w(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(t), !0).forEach((function(e) {
                        (0, o.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            s().defaults.withCredentials = !0;
            var v = {
                    position: "signIn"
                },
                b = "",
                y = "";
            e.Z = function(n) {
                var e = (0, c.Z)().windowWidth,
                    o = (0, m.useRouter)(),
                    l = i.default.useContext(r.y),
                    u = l.state,
                    g = l.dispatch,
                    L = u.loginJs,
                    Z = u.a8sJs,
                    I = u.userInfo,
                    S = n.isUAMobile,
                    C = n.pathname,
                    R = i.default.useState(null),
                    M = (0, a.Z)(R, 2),
                    D = M[0],
                    T = M[1],
                    O = i.default.useState(_.tq || S),
                    P = (0, a.Z)(O, 2),
                    j = P[0],
                    G = P[1],
                    k = function(n) {
                        h.Z.showLoginModal(), v = n && n.position ? n : {
                            position: "signIn"
                        }, T(null === D ? "loginCOM" : null)
                    },
                    U = i.default.useCallback((function() {
                        s().get("".concat(d.ZP, "pay/service/en/payment/check/isvip")).then((function(n) {
                            var e = n.data;
                            g({
                                type: "UPDATE_IS_VIP",
                                payload: !(!e.status || !e.data.vipStatus)
                            }), g({
                                type: "UPDATE_VIP_STATUS",
                                payload: e.status && e.data.vipStatus ? e.data.vipStatus : ""
                            })
                        }))
                    }), [g]),
                    x = i.default.useCallback((function() {
                        s().post("".concat(d.ZP, "message/getMsgUserReadflag")).then((function(n) {
                            var e = n.data;
                            e.status ? g({
                                type: "UPDATE_MESSAGE_DATA",
                                payload: e.data
                            }) : g({
                                type: "LOG_OUT"
                            })
                        }))
                    }), [g]),
                    E = function(n) {
                        0 !== n.code && 2 !== n.code && 1 !== n.code && 3 !== n.code && 5 !== n.code && 6 !== n.code || (g({
                            type: "LOG_IN",
                            payload: n.userInfo.data
                        }), v && v.position && v.position.indexOf("ad_") > -1 ? (h.Z.showLoginModal({
                            needRefsh: !1
                        }), window.Payment && window.Payment.showPayment && window.Payment.showPayment((function() {
                            C && (C.indexOf("/design/design") > -1 || /^\/(en|es|jp|pt|fr|ru|tw|cn|de||id|it|th|vi|tr|pl|nl)?[/]?$/.test(C) || C.indexOf("/features/pricing") > -1) && o.reload()
                        }), 0, "other", f()(), "", v, {
                            promotionId: b || "",
                            scenesId: y || ""
                        }), b = "", y = "") : (C && (C.indexOf("/design/design") > -1 || /^\/(en|es|jp|pt|fr|ru|tw|cn|de|id|it|th|vi|tr|pl|nl)?[/]?$/.test(C) || C.indexOf("/features/pricing") > -1) && h.Z.needRefsh && o.reload(), window && window.location.pathname && ["/features/collage/", "/features/collage", "/cn/features/collage.html", "/tw/features/collage.html", "/ru/collage/", "/jp/collage/", "/es/collage/", "/jp/collage", "/es/collage", "/de/collage/index.html", "/pt/colagem/index.html", "/fr/collage/index.html"].includes(window.location.pathname) && window.open("".concat(d.ZP, "?category=").concat("7e7d9a2fe3a14a559e4ba1d46be59006"), "_self"))), T(null)
                    },
                    N = function() {
                        window.login && window.login.showLogin && window.login.showLogin("login", E, "", v)
                    };
                i.default.useEffect((function() {
                    I && (U(), x()), (0, p.os)().isSafari || (0, p.os)().isIE || (0, p.os)().isAndroid || (0, p.os)().isPhone || Promise.all([t.e(3955), t.e(3631)]).then(t.bind(t, 33631)).then((function(n) {
                        try {
                            n.default()
                        } catch (e) {
                            console.log(e)
                        }
                    }))
                }), [I]), i.default.useEffect((function() {
                    G(_.tq || S || e <= 964)
                }), [_.tq, S, e]), i.default.useEffect((function() {
                    L && L.FTGetLoginState().then((function(n) {
                        if ("000" == n.code && n.data) g({
                            type: "LOG_IN",
                            payload: n.data
                        }), U(), x();
                        else {
                            g({
                                type: "LOG_OUT"
                            }), T(null);
                            var e = window.location.hash;
                            "#opensignup" !== e && "#opensign" !== e || h.Z.login({
                                sensorsData: v,
                                signType: "#opensignup" === e ? "signUp" : "login",
                                isShowScenes: !0
                            }).then((function(n) {
                                n && C && (C.indexOf("/design/design") > -1 || /^\/(en|es|jp|pt|fr|ru|tw|cn|de|id|it|th|vi|tr|pl|nl)?[/]?$/.test(C) || C.indexOf("/features/pricing") > -1) && o.reload()
                            }))
                        }
                    })), L && L.loginSuccess(E)
                }), [L]);
                return i.default.useEffect((function() {
                    Z && Z.fillAds([{
                        eleId: "rightBottomFloat",
                        type: "rightBottomFloat"
                    }], (function(n) {
                        "confirm" == n.type && 0 == n.action && ("upgrade" == n.adData.jumpUrl || "upgradesvip" == n.adData.jumpUrl ? window.login && window.login.FTGetLoginState && window.login && window.login.FTGetLoginState().then((function(e) {
                            "000" == e.code && e.data ? window.Payment.showPayment((function() {
                                U()
                            }), "upgrade" == n.adData.jumpUrl ? 0 : 1, "other", f()(), "", {
                                position: "ad_" + n.adData.id,
                                project_type: "ad_" + n.adData.type
                            }, function(n) {
                                var e = null;
                                return n.adData && (n.adData.promotionId && null !== n.adData.promotionId && "null" !== n.adData.promotionId && n.adData.promotionId.length > 0 && (e = w(w({}, e), {}, {
                                    promotionId: n.adData.promotionId[0]
                                })), n.adData.sceneId && (e = w(w({}, e), {}, {
                                    scenesId: n.adData.sceneId
                                }))), e
                            }(n)) : (b = n.adData.promotionId && null !== n.adData.promotionId && "null" !== n.adData.promotionId && n.adData.promotionId.length > 0 ? n.adData.promotionId[0] : "", y = n.adData.sceneId ? n.adData.sceneId : "", k({
                                position: "ad_" + n.adData.id,
                                project_type: "ad_" + n.adData.type
                            }), h.Z.showLoginModal({
                                needRefsh: !1
                            }))
                        })) : window.open(n.adData.jumpUrl, "__blanck"))
                    }))
                }), [Z]), i.default.useEffect((function() {
                    window.login && D && (v && v.position && v.position.indexOf("ad_") > -1 ? window.login.showLogin("signUp", E, "", v, !0, {
                        scenesId: "001"
                    }) : window.login.showLogin("login", E, "", v)), !window.login && j && D && (0, p.QK)(N)
                }), [D]), {
                    loginFunc: E,
                    checkIsVip: U,
                    getMessageData: x,
                    showAuthModalFunc: k,
                    logoutFunc: function n() {
                        window.login && window.login.FTLogout ? window.login.FTLogout().then((function(n) {
                            n.status && (g({
                                type: "LOG_OUT"
                            }), T(null), C.indexOf("/features/pricing") > -1 && o.reload())
                        })) : j && (0, p.QK)(n)
                    },
                    mobileLoginLoding: N
                }
            }
        },
        71572: function(n, e, t) {
            "use strict";
            var o = t(80318),
                a = t(59748);
            e.Z = function() {
                var n = window.innerWidth,
                    e = a.default.useState(n),
                    t = (0, o.Z)(e, 2),
                    i = t[0],
                    l = t[1],
                    s = a.default.useState(0),
                    r = (0, o.Z)(s, 2),
                    d = r[0],
                    c = r[1];
                return a.default.useEffect((function() {
                    var n = function() {
                        l(window.innerWidth);
                        var n = document.getElementById("notification");
                        n && c(n.offsetHeight)
                    };
                    return window.addEventListener("resize", n),
                        function() {
                            window.removeEventListener("resize", n)
                        }
                }), []), {
                    windowWidth: i,
                    notificationHeight: d
                }
            }
        },
        31283: function(n) {
            n.exports = {
                container: "TrustedListSection_container__zap6-",
                logo_list: "TrustedListSection_logo_list__fzjF1",
                container_font_style: "TrustedListSection_container_font_style__NEaNU",
                container_px_to_vw: "TrustedListSection_container_px_to_vw__2nsgR"
            }
        },
        91169: function(n) {
            n.exports = {
                button: "Button_button__3rC_R",
                primary: "Button_primary__39Kpu"
            }
        },
        67408: function(n) {
            n.exports = {
                container: "ResponsiveContainer_container__1fHeT",
                row: "ResponsiveContainer_row__2UyVD",
                column2: "ResponsiveContainer_column2__3w-k3",
                grid: "ResponsiveContainer_grid__1RM_N",
                column3: "ResponsiveContainer_column3__1ILFr",
                column4: "ResponsiveContainer_column4__3oHq9",
                column5: "ResponsiveContainer_column5__13w_P",
                column6: "ResponsiveContainer_column6__3jcAB",
                column7: "ResponsiveContainer_column7__18yLm",
                column8: "ResponsiveContainer_column8__2PlZa",
                columnLG2: "ResponsiveContainer_columnLG2__24m0r",
                columnLG3: "ResponsiveContainer_columnLG3__1JQcW",
                columnLG4: "ResponsiveContainer_columnLG4__2sW4n",
                columnLG5: "ResponsiveContainer_columnLG5__GEZj4",
                columnLG6: "ResponsiveContainer_columnLG6__2n5Vj",
                columnLG7: "ResponsiveContainer_columnLG7__3rFKa",
                columnLG8: "ResponsiveContainer_columnLG8__yJlNI",
                columnSM2: "ResponsiveContainer_columnSM2__3RMIq",
                columnSM3: "ResponsiveContainer_columnSM3__3Jcqm",
                columnSM4: "ResponsiveContainer_columnSM4__SLGVw",
                columnSM5: "ResponsiveContainer_columnSM5__t3_1f",
                columnSM6: "ResponsiveContainer_columnSM6__3aJih",
                columnSM7: "ResponsiveContainer_columnSM7__2-L_B",
                columnSM8: "ResponsiveContainer_columnSM8__b970o",
                columnTablet2: "ResponsiveContainer_columnTablet2__3scWO",
                columnTablet3: "ResponsiveContainer_columnTablet3__2fzb3",
                columnTablet4: "ResponsiveContainer_columnTablet4__KTKw_",
                columnTablet5: "ResponsiveContainer_columnTablet5__30omZ",
                columnTablet6: "ResponsiveContainer_columnTablet6__AZE3r",
                columnMobile2: "ResponsiveContainer_columnMobile2__2QHvK",
                columnMobile3: "ResponsiveContainer_columnMobile3__2S0fy",
                columnMobile4: "ResponsiveContainer_columnMobile4__DbQiH",
                columnMobile1: "ResponsiveContainer_columnMobile1__P9qZD"
            }
        },
        43388: function(n) {
            n.exports = {
                section: "shared_section__3Ujj7",
                gridsContainer: "shared_gridsContainer__TKf67",
                tabsContainer: "shared_tabsContainer__hhfSH",
                grid: "shared_grid__1XodY",
                pageLink: "shared_pageLink__3L8vi",
                paginationWrapper: "shared_paginationWrapper__36jiQ",
                white: "shared_white__g2LLx",
                gray: "shared_gray__feTmf",
                black: "shared_black__W0MU9",
                blue: "shared_blue__1iuDA",
                dark_gray: "shared_dark_gray__KVIg6",
                font_black: "shared_font_black__2tw5W",
                font_white: "shared_font_white__1BIb0",
                hover: "shared_hover__3a76C",
                line3: "shared_line3__1iz9E",
                line2: "shared_line2__2HsE8",
                breadCrumbs: "shared_breadCrumbs__1zms6",
                categoryPagination: "shared_categoryPagination__3uqwt",
                featurePagination: "shared_featurePagination__3DUCc",
                blogSearch: "shared_blogSearch__ojGKd",
                blogSearch_titleBox: "shared_blogSearch_titleBox__1jG3A",
                topicSection: "shared_topicSection__2BkQi",
                anmatefadein: "shared_anmatefadein__V3M7q",
                fadeInDown_s: "shared_fadeInDown_s__1oS0p",
                anmatefadeinUp: "shared_anmatefadeinUp__3e39H",
                fadeInUp: "shared_fadeInUp__32_oj",
                anmatefadeinRight: "shared_anmatefadeinRight__uQVFU",
                fadeInRight: "shared_fadeInRight__YUXAz",
                anmatefadeinLeft: "shared_anmatefadeinLeft__386Tk",
                fadeInLeft: "shared_fadeInLeft__30PEU",
                anmatefadeBg: "shared_anmatefadeBg__1LoIp",
                fadeBg: "shared_fadeBg__1BE70",
                index_mobile_btn: "shared_index_mobile_btn__3hkO_"
            }
        }
    }
]);