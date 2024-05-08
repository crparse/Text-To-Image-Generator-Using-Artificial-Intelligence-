"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [264], {
        50264: function(e, t, r) {
            r.d(t, {
                TQ: function() {
                    return L
                },
                Bz: function() {
                    return R
                },
                ev: function() {
                    return B
                },
                Ig: function() {
                    return G
                },
                LS: function() {
                    return H
                },
                vS: function() {
                    return U
                },
                HU: function() {
                    return D
                },
                g$: function() {
                    return j
                },
                H0: function() {
                    return Z
                },
                fi: function() {
                    return _
                },
                fG: function() {
                    return q
                },
                DG: function() {
                    return Y
                },
                qY: function() {
                    return T
                },
                Qh: function() {
                    return A
                },
                XE: function() {
                    return M
                },
                eN: function() {
                    return C
                },
                VC: function() {
                    return Q
                },
                Df: function() {
                    return N
                }
            });
            var n = r(92809),
                a = r(30266),
                u = r(809),
                c = r.n(u),
                o = r(49437),
                i = r(83608),
                s = r.n(i),
                p = r(90520),
                d = r(9669);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var g = r.n(d)().create({
                timeout: 6e4,
                baseURL: "https://www.fotor.com",
                withCredentials: !0
            });
            g.interceptors.request.use((function(e) {
                return e.headers["Content-Type"] = e.headers["Content-Type"] ? e.headers["Content-Type"] : "application/x-www-form-urlencoded", e.headers["x-app-id"] = "app-fotor-web", e
            }), (function(e) {
                return Promise.reject(e)
            })), g.interceptors.response.use((function(e) {
                return 200 === e.status ? e.data : {
                    msg: e.data.msg
                }
            }), (function(e) {
                if (e.response) {
                    switch (e.response.status) {
                        case 400:
                            e.message = "\u8bf7\u6c42\u9519\u8bef(400)";
                            break;
                        case 401:
                            e.message = "\u672a\u6388\u6743\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55(401)";
                            break;
                        case 403:
                            e.message = "\u62d2\u7edd\u8bbf\u95ee(403)";
                            break;
                        case 404:
                            e.message = "\u8bf7\u6c42\u51fa\u9519(404)";
                            break;
                        case 408:
                            e.message = "\u8bf7\u6c42\u8d85\u65f6(408)";
                            break;
                        case 500:
                            e.message = "\u670d\u52a1\u5668\u9519\u8bef(500)";
                            break;
                        case 501:
                            e.message = "\u670d\u52a1\u672a\u5b9e\u73b0(501)";
                            break;
                        case 502:
                            e.message = "\u7f51\u7edc\u9519\u8bef(502)";
                            break;
                        case 503:
                            e.message = "\u670d\u52a1\u4e0d\u53ef\u7528(503)";
                            break;
                        case 504:
                            e.message = "\u7f51\u7edc\u8d85\u65f6(504)";
                            break;
                        case 505:
                            e.message = "HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301(505)";
                            break;
                        default:
                            e.message = "\u8fde\u63a5\u51fa\u9519(".concat(e.response.status, ")!")
                    }
                    return {
                        msg: e.message
                    }
                }
                return {
                    msg: "\u8bf7\u6c42\u8d85\u65f6, \u8bf7\u5237\u65b0\u91cd\u8bd5"
                }
            }));
            var v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return new Promise((function(n, a) {
                        g(l({
                            method: "get",
                            url: e,
                            params: t
                        }, r)).then((function(e) {
                            n(e)
                        })).catch((function(e) {
                            a(e)
                        }))
                    }))
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return new Promise((function(n, a) {
                        g(l({
                            method: "post",
                            url: e,
                            data: t
                        }, r)).then((function(e) {
                            n(e)
                        })).catch((function(e) {
                            a(e)
                        }))
                    }))
                },
                b = r(7739),
                m = r.n(b),
                y = r(35161),
                w = r.n(y),
                k = r(63105),
                x = r.n(k);

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var P = "b31749015e7f45f6928871196b448c47,a2c8b818acb74da6982ece0b478a2f2f,f752a0875f02433188c096e575394edd,3c6aa76d-a61e-43e3-9389-e3b23288ac69",
                _ = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                        pageNo: 1,
                                        pageSize: 12,
                                        categorys: P
                                    }, e.next = 3, v("/api/v1/app/resources/ends/templates/list_by_categrorys?ran=" + s()(1e5), O({}, t));
                                case 3:
                                    if (!(r = e.sent) || "000" !== r.code) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        pageNo: t.pageNo,
                                        pageSize: t.pageSize,
                                        categorys: t.categorys,
                                        totalPage: r.data.totalPage,
                                        total: r.data.total,
                                        list: r.data.list.map((function(e) {
                                            return {
                                                height: e.Source.height,
                                                width: e.Source.width,
                                                title: e.Source.title,
                                                thumb: "".concat(o.Qu).concat(e.Source.thumb),
                                                id: e.Source.id,
                                                link: "".concat(o.ZP, "design/project/create?template=").concat(e.Source.id)
                                            }
                                        }))
                                    });
                                case 8:
                                    return e.abrupt("return", null);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        siteId: 1,
                                        search: ""
                                    }, e.next = 3, v("/api/v1/app/resources/ends/blogs/search", t);
                                case 3:
                                    if (!(r = e.sent) || "000" !== r.code || !r.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return n = r.data, e.abrupt("return", {
                                        pageData: n.pageData,
                                        totalPages: n.totalPages
                                    });
                                case 9:
                                    return e.abrupt("return", {
                                        pageData: null,
                                        totalPages: 0
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        siteId: 1,
                                        limit: 4,
                                        offset: 0,
                                        sort: "dateUpdated",
                                        order: "desc"
                                    }, e.next = 3, v("/api/v1/app/resources/ends/blogs/recommendations", t);
                                case 3:
                                    if (!(r = e.sent) || "000" !== r.code || !r.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return n = r.data, e.abrupt("return", {
                                        pageData: n.pageData
                                    });
                                case 9:
                                    return e.abrupt("return", {
                                        pageData: null
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        siteId: 1,
                                        limit: 9,
                                        offset: 0,
                                        slug: "",
                                        type: "category"
                                    }, e.next = 3, v("/api/v1/app/resources/ends/blogs/list", t);
                                case 3:
                                    if (!(r = e.sent) || "000" !== r.code || !r.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return n = r.data, e.abrupt("return", {
                                        pageData: n.pageData,
                                        totalPages: n.totalPages
                                    });
                                case 9:
                                    return e.abrupt("return", {
                                        pageData: null,
                                        totalPages: 0
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        themesCategorySlug: "",
                                        pageNo: 1,
                                        pageSize: 16
                                    }, r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 4, v("/api/v1/app/resources/ends/templates/inner-link/list", t, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", n.data);
                                case 9:
                                    return e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : "", r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 4, v("/pay/service/en/payment/renew-recovery/activity/".concat(t), {}, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", n.data);
                                case 9:
                                    return e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : "", r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 4, h("/pay/service/en/payment/renew-recovery/activity/".concat(t), {}, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    return n = e.sent, e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                z = function(e) {
                    return e.mode
                },
                E = function(e) {
                    return e.interval
                },
                I = function(e) {
                    return e.type
                },
                T = function() {
                    var e = (0, a.Z)(c().mark((function e(t) {
                        var r, n, a, u, o, i;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v("/pay/service/en/payment/pricing/getPlansByDisplayLocation", t);
                                case 2:
                                    if (r = e.sent, ["YEAR", "MONTH", "WEEK", "DAY"], n = "US", a = "US$", !r || "000" !== r.code || !r.data) {
                                        e.next = 17;
                                        break
                                    }
                                    if (r.data.length > 0 && r.data[0].countryCode && ((n = r.data[0].countryCode.toUpperCase()) && (a = p.tg[p.Jg[n]]), u = function(e) {
                                            var t = x()(e.currencyAmounts, (function(e) {
                                                return e.currency === p.Jg[n]
                                            }));
                                            return t && t.length > 0 ? O(O({}, e), t[0]) : e
                                        }, r.data = w()(r.data, u)), (o = m()(r.data, z)).period && o.period.length > 0 && (o.period = m()(o.period, E)), !(o.credits && o.credits.length > 0)) {
                                        e.next = 16;
                                        break
                                    }
                                    return (i = m()(o.credits, I)) && i.subscription && i.subscription.length > 0 && (i.subscription = m()(i.subscription, E), o.credits = i), e.abrupt("return", {
                                        countryCode: n,
                                        currentCurrency: a,
                                        planList: o
                                    });
                                case 16:
                                    return e.abrupt("return", null);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                L = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a, u = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = u.length > 0 && void 0 !== u[0] ? u[0] : "demo", r = u.length > 1 && void 0 !== u[1] ? u[1] : "en_US", e.next = 4, v("api/image/text-to-image/recommend/style?pageNo=1&pageSize=50&type=".concat(t), {}, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 10;
                                        break
                                    }
                                    return a = Math.floor(Math.random() * n.data.list.length), e.abrupt("return", n.data.list[a].content);
                                case 10:
                                    return e.abrupt("return", "");
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                H = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        search: "",
                                        pageNo: 1,
                                        pageSize: 12
                                    }, r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 4, v("/api/app/backgroundImg/page", t, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", n.data);
                                case 9:
                                    return e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a, u = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = u.length > 0 && void 0 !== u[0] ? u[0] : {
                                        creativeType: "textToImage",
                                        page: 1,
                                        proportion: "1:1",
                                        size: 12
                                    }, r = u.length > 1 && void 0 !== u[1] ? u[1] : "en_US", e.next = 4, v("/api/aigc/community/works", t, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 10;
                                        break
                                    }
                                    return a = n.data.map((function(e) {
                                        var t, r, n, a, u, c, o;
                                        return O({
                                            href: "/images/create?type=text&prompt=".concat(encodeURIComponent(null === e || void 0 === e || null === (t = e.source_option_params) || void 0 === t ? void 0 : t.aigc_prompt)),
                                            src: null === (r = e.images[0]) || void 0 === r ? void 0 : r.thumbnail_url,
                                            width: null === (n = e.images[0]) || void 0 === n ? void 0 : n.width,
                                            height: null === (a = e.images[0]) || void 0 === a ? void 0 : a.height,
                                            alt: null === e || void 0 === e || null === (u = e.source_option_params) || void 0 === u ? void 0 : u.aigc_prompt,
                                            ratio: (null === (c = e.images[0]) || void 0 === c ? void 0 : c.height) / (null === (o = e.images[0]) || void 0 === o ? void 0 : o.width) * 100,
                                            work_id: e.work_id
                                        }, e)
                                    })), e.abrupt("return", a);
                                case 10:
                                    return e.abrupt("return", null);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        pageNo: 1,
                                        pageSize: 20,
                                        deviceId: ""
                                    }, r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 4, v("/api/v1/credits/activity/list", t, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 9:
                                    return e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 4, v("/api/v1/credits/activity/public-key", t, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 9:
                                    return e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Q = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a, u = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = u.length > 0 && void 0 !== u[0] ? u[0] : "", r = u.length > 1 && void 0 !== u[1] ? u[1] : "en_US", (n = new URLSearchParams).append("sign", t), e.next = 6, h("/api/v1/credits/activity/sync-complete", n, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 6:
                                    return a = e.sent, e.abrupt("return", a);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = function() {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 4, v("/api/create/getScore", t, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 4:
                                    if (!(n = e.sent) || "000" !== n.code || !n.data) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 9:
                                    return e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                q = function() {
                    var e = (0, a.Z)(c().mark((function e(t, r, n, a) {
                        var u;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v("api/v1/app/resources/ends/templates/designer", {
                                        pageNo: r,
                                        pageSize: n,
                                        designerId: a
                                    }, {
                                        headers: {
                                            language: t
                                        }
                                    });
                                case 2:
                                    if (!(u = e.sent) || "000" !== u.code) {
                                        e.next = 8;
                                        break
                                    }
                                    return u.data.list = (u.data.list || []).map((function(e) {
                                        if ("template" === e.type) {
                                            var t = O(O({}, e.Source), {}, {
                                                category: (0, p.tr)(e.Source.category),
                                                thumb: (0, p.KI)(e.Source.thumb),
                                                pages: (0, p.zU)(e.Source.pages)
                                            });
                                            e.Source = t
                                        }
                                        return e
                                    })), e.abrupt("return", u.data);
                                case 8:
                                    return e.abrupt("return", null);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = function() {
                    var e = (0, a.Z)(c().mark((function e(t) {
                        var r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 3, v("/api/aigc/community/work/like-info/".concat(t), {}, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                G = function() {
                    var e = (0, a.Z)(c().mark((function e(t) {
                        var r, n, a = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 1 && void 0 !== a[1] ? a[1] : "en_US", e.next = 3, h("/api/aigc/community/work/like", t, {
                                        headers: {
                                            language: r
                                        }
                                    });
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        }
    }
]);