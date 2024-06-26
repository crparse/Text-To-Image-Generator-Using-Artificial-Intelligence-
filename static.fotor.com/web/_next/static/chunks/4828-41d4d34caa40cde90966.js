(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4828], {
        78907: function(e, n, a) {
            "use strict";
            a(59748);
            var t = a(86010),
                i = a(6717),
                o = a.n(i),
                c = a(8311),
                r = function(e) {
                    return (0, c.tZ)("div", {
                        className: (0, t.Z)(o().container, e.className),
                        children: e.children
                    })
                };
            r.Row = function(e) {
                return (0, c.tZ)("div", {
                    className: (0, t.Z)(o().row, e.className, e.column && (n = +e.column, n >= 4 ? 6 === n ? [o()["column" + n], o()["columnLG" + (n - 3)], o()["columnTablet" + (n - 4)], o()["columnMobile" + (n - 5)]] : [o()["column" + n], o()["columnLG" + (n - 1)], o()["columnTablet" + (n - 2)], o()["columnMobile" + (n - 3)]] : [o()["column" + n], o().columnMobile2])),
                    id: e.id,
                    children: e.children
                });
                var n
            }, r.Grid = function(e) {
                return (0, c.tZ)("div", {
                    className: (0, t.Z)(o().grid, e.className),
                    children: e.children
                })
            }, n.Z = r
        },
        91742: function(e, n, a) {
            "use strict";
            a.d(n, {
                Z: function() {
                    return t.Z
                }
            });
            var t = a(78907)
        },
        58464: function(e, n, a) {
            "use strict";
            var t = a(59748),
                i = a(86010),
                o = a(52732),
                c = a.n(o),
                r = a(34952),
                l = a(18186),
                s = a.n(l),
                u = a(84847),
                d = a(87185),
                p = a.n(d),
                m = a(18446),
                _ = a.n(m),
                f = a(8311);
            "undefined" === typeof document || document.lazyLoadInstance || (document.lazyLoadInstance = new(c())({
                elements_selector: ".lzy",
                callback_loaded: function(e) {
                    e && e.parentNode && (e.parentNode.style.backgroundColor = "unset")
                },
                threshold: 100
            }));
            var g = function(e, n) {
                    var a = e.split("/"),
                        t = "".concat(n, "/") + a[a.length - 1];
                    return e.replace(a[a.length - 1], "") + t + " " + n
                },
                h = function(e, n) {
                    if (e && e.length > 0) {
                        for (var a = [], t = [], i = 0; i < e.length; i++) {
                            var o = e[i],
                                c = o.size,
                                r = o.srcset;
                            a.push(c), t.push(g(n, r))
                        }
                        return t = p()(t, _()), {
                            sizes: a.join(","),
                            srcset: t.join(",")
                        }
                    }
                    return {
                        sizes: "",
                        srcset: ""
                    }
                };
            n.Z = function(e) {
                var n = e.isLzy,
                    a = void 0 === n || n,
                    o = e.srcSet;
                if (t.default.useEffect((function() {
                        document.lazyLoadInstance.update()
                    })), e.data) {
                    var c = r.Z[e.data.volumeId] + e.data.filename,
                        l = h(o, c),
                        d = l.sizes,
                        p = l.srcset;
                    return (0, f.tZ)(u.Z, {
                        data: [{
                            appDeeplink: e.data.linkAppDeeplink,
                            href: e.data.imageLink,
                            isImageLink: !0
                        }],
                        linkIndex: e.data.filename,
                        className: e.linkStyle,
                        children: (0, f.tZ)("span", {
                            className: (0, i.Z)(s().imageWrapper, e.className),
                            style: {
                                paddingTop: "".concat(e.data.height / e.data.width * 100, "%")
                            },
                            children: a ? (0, f.tZ)("img", {
                                className: (0, i.Z)("lzy", s().image),
                                "data-src": c,
                                onError: function(e) {
                                    e.target.style.opacity = 0
                                },
                                alt: e.data.title,
                                width: e.data.width,
                                height: e.data.height,
                                onClick: function() {
                                    return e.handleClick && e.handleClick()
                                },
                                "data-srcset": p,
                                "data-sizes": d
                            }) : (0, f.tZ)("img", {
                                className: (0, i.Z)(s().image),
                                src: c,
                                onError: function(e) {
                                    e.target.style.opacity = 0
                                },
                                alt: e.data.title,
                                width: e.data.width,
                                height: e.data.height,
                                onClick: function() {
                                    return e.handleClick && e.handleClick()
                                },
                                srcSet: p,
                                sizes: d
                            })
                        })
                    })
                }
                if (e.src && e.ratio) {
                    var m = h(o, e.src),
                        _ = m.sizes,
                        g = m.srcset;
                    return (0, f.tZ)("span", {
                        className: (0, i.Z)(s().imageWrapper, e.className),
                        style: {
                            paddingTop: "".concat(e.ratio, "%")
                        },
                        children: (0, f.tZ)("img", {
                            className: (0, i.Z)("lzy", s().image, e.imgClassName),
                            alt: e.alt || "",
                            "data-src": e.src,
                            "data-srcset": g,
                            "data-sizes": _
                        })
                    })
                }
                if (e.src) {
                    var k = h(o, e.src),
                        w = k.sizes,
                        y = k.srcset;
                    return (0, f.tZ)("img", {
                        className: (0, i.Z)("lzy", s().imageNotSrc, e.className),
                        alt: e.alt || "",
                        "data-src": e.src,
                        "data-srcset": y,
                        "data-sizes": w
                    })
                }
                return (0, f.tZ)(f.HY, {})
            }
        },
        94599: function(e, n, a) {
            "use strict";
            a.d(n, {
                Z: function() {
                    return t.Z
                }
            });
            var t = a(58464)
        },
        84847: function(e, n, a) {
            "use strict";
            a.d(n, {
                Z: function() {
                    return N
                }
            });
            var t = a(92809),
                i = a(80318),
                o = a(59748),
                c = a(86010),
                r = a(40416),
                l = a(83803),
                s = a.n(l),
                u = a(94599),
                d = (a(20640), a(90520)),
                p = a(69918),
                m = a(9669),
                _ = a.n(m),
                f = a(49437),
                g = a(11163),
                h = a(24756),
                k = a(5152),
                w = a(59359),
                y = a(8311);

            function b(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, t)
                }
                return a
            }
            var v = (0, k.default)((function() {
                return a.e(993).then(a.bind(a, 56177))
            }), {
                loadableGenerated: {
                    webpack: function() {
                        return [56177]
                    },
                    modules: ["../components/public-components/PageLink/PageLink.tsx -> assets/icons/upload.svg"]
                }
            });
            _().defaults.withCredentials = !0;
            var C = "inner-button",
                Z = function(e) {
                    var n = o.default.useContext(p.y),
                        a = n.state,
                        l = n.dispatch,
                        m = o.default.useState(null),
                        k = (0, i.Z)(m, 2),
                        Z = (k[0], k[1]),
                        N = a.userInfo,
                        L = o.default.useState(null),
                        T = (0, i.Z)(L, 2),
                        I = T[0],
                        S = T[1],
                        M = e.data[0],
                        P = (0, g.useRouter)(),
                        O = {},
                        D = function() {
                            var n = window.localStorage.getItem("fotor_common_user_Info");
                            n && JSON.parse(n);
                            window.Payment && window.Payment.showPayment && window.Payment.showPayment((function(e) {
                                window.location.pathname && (window.location.pathname.indexOf("/design/design") > -1 || /^\/(en|es|jp|pt|fr|ru|tw|cn|de)?[/]?$/.test(window.location.pathname)) ? P.reload() : e && "008" === e.code && window && window.open("https://www.fotor.com", "_parent")
                            }), M.href.indexOf("upgradesvip") > -1 ? 1 : 0, "other", "", "", {
                                position: "link_upgrade_".concat(e.linkIndex)
                            }, {
                                promotionId: ""
                            })
                        },
                        x = function(e) {
                            var n;
                            0 !== e.code && 2 !== e.code && 1 !== e.code || (l({
                                type: "LOG_IN",
                                payload: e.userInfo.data
                            }), n = 1, _().get("".concat(f.ZP, "pay/service/en/payment/check/isvip")).then((function(e) {
                                l({
                                    type: "UPDATE_IS_VIP",
                                    payload: !!(200 === e.status && e.data && e.data.data && e.data.data.vipStatus)
                                }), 1 === n && 200 === e.status && e.data && e.data.data && !e.data.data.vipStatus && D()
                            }))), 1 !== e.code && S(null)
                        };
                    "trackPageView" === e.trackingType && (O = {
                        url: "count/feature/".concat(e.currentSlug, "/getstarted").concat(e.linkIndex),
                        path: M.href,
                        openInNewTab: M.openInNewTab
                    }), "trackEvent" === e.trackingType && (O = function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var a = null != arguments[n] ? arguments[n] : {};
                            n % 2 ? b(Object(a), !0).forEach((function(n) {
                                (0, t.Z)(e, n, a[n])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                            }))
                        }
                        return e
                    }({
                        path: M.href
                    }, e.trackingConfig)), o.default.useEffect((function() {
                        var e = (0, d.os)(),
                            n = e.isAndroid,
                            a = e.isPhone,
                            t = e.isiOS;
                        Z({
                            isAndroid: n,
                            isiPhone: a,
                            isiOS: t
                        })
                    }), []), o.default.useEffect((function() {
                        window.login && I && window.login.showLogin("signUp", x, "", {
                            position: "link_upgrade_".concat(e.linkIndex)
                        }, !0, {
                            scenesId: "001"
                        })
                    }), [I]);
                    return M.isImageLink ? M.appDeeplink ? (0, y.tZ)("div", {
                        className: (0, c.Z)(e.className),
                        onClick: function(e) {
                            (0, d.DT)(M.appDeeplink)
                        },
                        children: e.children
                    }) : M.href && M.href.indexOf("upgrade") > -1 || !M.href ? (0, y.tZ)("div", {
                        className: (0, c.Z)(e.className, M.href && s().links),
                        children: e.children
                    }) : (0, y.tZ)("a", {
                        className: (0, c.Z)(e.className, M.href && s().links),
                        href: M.href ? M.href : "#",
                        onClick: function(e) {
                            ! function(e, n) {
                                e.preventDefault(), n && (n.indexOf("upgrade") > -1 ? N ? D() : (S("loginCOM"), h.Z.showLoginModal({
                                    needRefsh: !1
                                })) : window.open(n))
                            }(e, M.href)
                        },
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e.children
                    }) : M.href.indexOf("upgrade") > -1 ? (0, y.tZ)("span", {
                        className: (0, c.Z)(s().pageLink, e.className),
                        onClick: function() {
                            N ? D() : (S("loginCOM"), h.Z.showLoginModal({
                                needRefsh: !1
                            }))
                        },
                        children: M.text
                    }) : M.href.indexOf("landingpage") > -1 ? (0, y.tZ)("span", {
                        className: (0, c.Z)(s().pageLink, e.className),
                        onClick: function() {
                            if (M.imageType && "facebook-post" !== M.imageType && "instagram-post" !== M.imageType) window.open((0, d.Ky)(M.imageType), "_parent");
                            else {
                                if (N && N.id && ("facebook-post" === M.imageType || "instagram-post" === M.imageType)) return void window.open((0, d.Ky)(M.imageType), "_parent");
                                P.push("/p/pro-signup?".concat(M.imageType ? "imageType=" + M.imageType : "", "&redirect=").concat(encodeURI((0, d.Ky)(M.imageType))))
                            }
                        },
                        children: M.text
                    }) : M.mobileImage && M.mobileImage.length > 0 ? (0, y.tZ)("a", {
                        className: (0, c.Z)(e.className, s().pcLink),
                        href: M.href,
                        target: M.openInNewTab ? "_blank" : "",
                        onClick: function(n) {
                            e.onClick && !M.href ? e.onClick(n) : (0, r.Z)(n, e.trackingType, O)
                        },
                        children: (0, y.tZ)(u.Z, {
                            linkStyle: s().link,
                            data: M.mobileImage[0]
                        })
                    }) : e.userAgent && M.appDeeplink ? (0, y.tZ)("div", {
                        className: (0, c.Z)(s().pageLink, e.className),
                        onClick: function(e) {
                            (0, d.DT)(M.appDeeplink)
                        },
                        children: M.text
                    }) : "null" !== M.uploadImageType && M.uploadImageType ? (0, y.BX)("button", {
                        id: "cta_".concat(M.id),
                        className: (0, c.Z)(s().pageLink, e.className),
                        onClick: function(n) {
                            var a = M.appSchema;
                            void 0 === a && d.Rk, M.linkid;
                            if (M.isMobileDiversion && w.tq) return n.preventDefault(), void(0, d.rH)({
                                cmsPageLink: e.data,
                                adgroup: C,
                                openAppBoxDescPrefix: M.text,
                                stayOnWebHandle: t
                            });

                            function t() {
                                e.onClick && !M.href ? e.onClick(n) : (0, r.Z)(n, e.trackingType, O)
                            }
                            t()
                        },
                        children: [(0, y.tZ)(v, {}), " ", M.text]
                    }) : (0, y.BX)("a", {
                        id: "cta_".concat(M.id),
                        href: M.href,
                        target: M.openInNewTab ? "_blank" : "",
                        className: (0, c.Z)(s().pageLink, e.className),
                        onClick: function(n) {
                            var a = M.appSchema;
                            void 0 === a && d.Rk, M.linkid;
                            if (M.isMobileDiversion && w.tq) return n.preventDefault(), void(0, d.rH)({
                                cmsPageLink: e.data,
                                adgroup: C,
                                openAppBoxDescPrefix: M.text,
                                stayOnWebHandle: t
                            });

                            function t() {
                                e.onClick && !M.href ? e.onClick(n) : (0, r.Z)(n, e.trackingType, O)
                            }
                            t()
                        },
                        children: ["null" !== M.uploadImageType && M.uploadImageType && (0, y.tZ)(v, {}), " ", M.text]
                    })
                };
            Z.defaultProps = {
                trackingType: "trackPageView"
            };
            var N = Z
        },
        40416: function(e, n) {
            "use strict";
            n.Z = function(e, n, a) {
                e.preventDefault(), "trackPageView" === n && window.dataLayer.push({
                    event: "trackPageView",
                    url: a.url,
                    locale: a.locale || "zh-cn",
                    userId: a.userId || "",
                    token: a.token || "",
                    isVip: a.isVip || null,
                    visitTimes: "",
                    visitDuration: "",
                    usingDuration: "",
                    appVersion: "1.0.0",
                    adblock: null,
                    specialContent: null,
                    product: "h5-app",
                    host: document.location.host,
                    apiKey: "fotor"
                }), "trackEvent" === n && window.dataLayer.push({
                    event: "trackEvent",
                    category: a.category,
                    action: a.action,
                    label: a.label,
                    locale: a.locale || "zh-cn",
                    userId: a.userId || "",
                    token: a.token || "",
                    isVip: a.isVip || null,
                    visitTimes: "",
                    visitDuration: "",
                    usingDuration: "",
                    appVersion: "1.0.0",
                    adblock: null,
                    specialContent: null,
                    product: "h5-app",
                    host: document.location.host,
                    apiKey: "fotor"
                }), a.path && window.open(a.path, a.openInNewTab ? "_blank" : "_self")
            }
        },
        6717: function(e) {
            e.exports = {
                container: "Container_container__3erG2",
                row: "Container_row__1l6HT",
                column2: "Container_column2__bx69Y",
                grid: "Container_grid__aDrtA",
                column3: "Container_column3__3B5RS",
                column4: "Container_column4__2KF4w",
                column5: "Container_column5__3MzGp",
                column6: "Container_column6__3l2e4",
                column7: "Container_column7__kFJwQ",
                column8: "Container_column8__3v9WO",
                columnLG2: "Container_columnLG2__2pDEx",
                columnLG3: "Container_columnLG3__ppv7L",
                columnLG4: "Container_columnLG4__1zJiS",
                columnLG5: "Container_columnLG5__1jdbF",
                columnLG6: "Container_columnLG6__2wCtU",
                columnLG7: "Container_columnLG7__1JvjD",
                columnLG8: "Container_columnLG8__21oOZ",
                columnSM2: "Container_columnSM2__1KVzs",
                columnSM3: "Container_columnSM3__2bX-v",
                columnSM4: "Container_columnSM4__1srpK",
                columnSM5: "Container_columnSM5__2yy2U",
                columnSM6: "Container_columnSM6__3tH-G",
                columnSM7: "Container_columnSM7__2egbk",
                columnSM8: "Container_columnSM8__1XNEk",
                columnTablet2: "Container_columnTablet2__2Heol",
                columnTablet3: "Container_columnTablet3__37rTX",
                columnTablet4: "Container_columnTablet4__1wMOn",
                columnTablet5: "Container_columnTablet5__2jQVF",
                columnTablet6: "Container_columnTablet6__28VsW",
                columnMobile2: "Container_columnMobile2__1eY1F",
                columnMobile3: "Container_columnMobile3__3EK_m",
                columnMobile4: "Container_columnMobile4__3Um8H",
                columnMobile1: "Container_columnMobile1__3u7qa"
            }
        },
        18186: function(e) {
            e.exports = {
                imageWrapper: "Image_imageWrapper__vikrc",
                image: "Image_image__MPSDi",
                imageNotSrc: "Image_imageNotSrc__2Hv_Q"
            }
        },
        83803: function(e) {
            e.exports = {
                pageLink: "PageLink_pageLink__1twZl",
                image: "PageLink_image__3VoXK",
                link: "PageLink_link__5WMmU",
                pcLink: "PageLink_pcLink__a9AGD",
                links: "PageLink_links__3aaq7"
            }
        }
    }
]);