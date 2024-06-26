(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8483], {
        13637: function(e, t, a) {
            "use strict";
            var r = a(10219),
                i = a(83789),
                o = a(30266),
                n = a(68216),
                s = a(25997),
                _ = a(92809),
                c = a(809),
                p = a.n(c),
                u = a(9669),
                l = a.n(u),
                d = a(49437),
                m = a(62830),
                g = a.n(m),
                f = a(91632),
                h = a(27361),
                b = a.n(h),
                y = a(36968),
                v = a.n(y),
                w = a(8804),
                k = a.n(w),
                A = a(63105),
                P = a.n(A),
                I = a(39693),
                F = a.n(I),
                S = a(18871),
                q = a.n(S),
                x = a(90520),
                C = ["search", "lang"];

            function D(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(a), !0).forEach((function(t) {
                        (0, _.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : D(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            t.Z = new(function() {
                function e() {
                    (0, n.Z)(this, e), (0, _.Z)(this, "language", "en_US"), (0, _.Z)(this, "languageConfig", {
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
                    }), (0, _.Z)(this, "isLinux", !1), (0, _.Z)(this, "isPre", !1), (0, _.Z)(this, "isProd", !0), (0, _.Z)(this, "localUrl", "http://rcpcarrier-694-website-pre/"), (0, _.Z)(this, "cookie", ""), (0, _.Z)(this, "tempWordMap", new Map), (0, _.Z)(this, "categroyGroupMap", new Map), (0, _.Z)(this, "keywordMappingPath", new Map), (0, _.Z)(this, "pathMappingKeyword", new Map), (0, _.Z)(this, "clearPages", (function(e) {
                        return e.map((function(e) {
                            return {
                                pageId: e.pageId,
                                parentId: e.parentId,
                                thumb: (0, x.KI)(e.thumb),
                                contentText: e.contentText
                            }
                        }))
                    })), (0, _.Z)(this, "clearCategory", (function(e) {
                        return z(z({}, e), {}, {
                            iconUrl: (0, x.KI)(e.iconUrl),
                            imgUrl: (0, x.KI)(e.imgUrl)
                        })
                    })), (0, _.Z)(this, "clearCategroyGroup", (function(e) {
                        return z(z({}, e), {}, {
                            iconUrl: (0, x.KI)(e.iconUrl),
                            cover: (0, x.KI)(e.cover),
                            banner: e.banner ? (0, x.KI)(e.banner) : ""
                        })
                    }))
                }
                return (0, s.Z)(e, [{
                    key: "getHost",
                    value: function() {
                        return d.ZP
                    }
                }, {
                    key: "getCuid",
                    value: function() {
                        return g()()
                    }
                }, {
                    key: "setLanguage",
                    value: function(e) {
                        this.language = e
                    }
                }, {
                    key: "headers",
                    value: function(e) {
                        var t = {
                            "x-app-id": "app-fotor-web",
                            language: e ? this.languageConfig[e] : this.language
                        };
                        return t
                    }
                }, {
                    key: "getCategoryGroup",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r, i, o = this;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, l().get("".concat(this.getHost(), "api/v1/app/resources/ends/templates/menus?cuid=").concat(this.getCuid()), {
                                            headers: this.headers(t)
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 2:
                                        return a = e.sent, r = b()(a, ["data", "data"]) || [], (i = (i = (k()(P()(r, (function(e) {
                                            return "categoryGroup" === e.type
                                        }))) || []).items || []).map((function(e) {
                                            return z(z({}, e), {}, {
                                                cover: (0, x.KI)(e.cover),
                                                items: e.items.map((function(e) {
                                                    return o.clearCategroyGroup(e)
                                                })),
                                                banner: e.banner ? (0, x.KI)(e.banner) : ""
                                            })
                                        }))) && i.length > 0 && this.categroyGroupMap.set(this.headers(t).language, i), e.abrupt("return", i);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getTagsBySizeId",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a) {
                            var r, i, o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templates/getSearchWordBySizeId"), {
                                            sizeId: t,
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(r), {
                                            headers: this.headers(a)
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return i = e.sent, o = P()(b()(i, ["data", "data"])).map((function(e) {
                                            return {
                                                name: e.word,
                                                path: e.path
                                            }
                                        })), e.abrupt("return", o);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getTempWords",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e() {
                            var t, a, r, i, o, n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this.language, !this.tempWordMap.has(t)) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", this.tempWordMap.get(t));
                                    case 3:
                                        return a = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templateTags/list"), {
                                            langEnv: t,
                                            sizeId: "all",
                                            pageNo: 1,
                                            pageSize: 9,
                                            cuid: this.getCuid()
                                        }), e.next = 6, l().get(encodeURI(a), {
                                            headers: this.headers()
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 6:
                                        return r = e.sent, i = b()(r, ["data", "data", "list"]) || [], o = i.map((function(e) {
                                            return e.name
                                        })), n = i.map((function(e) {
                                            return {
                                                name: e.name,
                                                sizeId: e.sizeId
                                            }
                                        })), o && this.tempWordMap.set(t, o), e.abrupt("return", n);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "pathToSearch",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a) {
                            var r, i, o, n, s;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = this.headers(a), i = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templates/getWordByPath"), {
                                            path: t,
                                            env: r.language,
                                            cuid: this.getCuid()
                                        }), e.next = 4, l().get(encodeURI(i), {
                                            headers: r
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 4:
                                        if (o = e.sent, n = b()(o, ["data", "code"]), s = b()(o, ["data", "data"]), "000" !== n) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", s);
                                    case 11:
                                        return e.abrupt("return", "");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "searchsToPaths",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r, o, n, s;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templates/getSearchWordsPath"), {
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().post(encodeURI(a), {
                                            keys: t
                                        }, {
                                            headers: this.headers()
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        if (r = e.sent, o = b()(r, ["data", "code"]), n = b()(r, ["data", "data"]), (s = []).push.apply(s, (0, i.Z)(P()(n).map((function(e) {
                                                return {
                                                    name: Object.keys(e)[0],
                                                    path: Object.values(e)[0]
                                                }
                                            })))), "000" !== o) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return", s);
                                    case 12:
                                        return e.abrupt("return", []);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "searchToPath",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a) {
                            var r, i, o, n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templates/getSearchWordPath"), {
                                            word: t,
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(r), {
                                            headers: this.headers(a)
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        if (i = e.sent, o = b()(i, ["data", "code"]), n = b()(i, ["data", "data"]), "000" !== o) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", n);
                                    case 10:
                                        return e.abrupt("return", "");
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getTempRelation",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = q()("".concat(this.getHost(), "api/app/recommend/temp-expandwords"), {
                                            search: t,
                                            size: 5,
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(a), {
                                            headers: this.headers()
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        if (!(r = e.sent)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", r.data.data);
                                    case 8:
                                        return e.abrupt("return", []);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "search",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, i, o, n, s, _;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.search, i = t.lang, o = (0, r.Z)(t, C), a = (a || "").split(/[,|\uff0c]+/).join(","), n = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templates/list"), z({
                                            search: a,
                                            cuid: this.getCuid()
                                        }, o)), e.next = 5, l().get(encodeURI(n), {
                                            headers: this.headers(i)
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 5:
                                        return s = e.sent, b()(s, ["data", "code"]) || "", _ = b()(s, ["data", "data"]) || "", e.abrupt("return", _);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getFavorStateByids",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r, i;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templates-favors"), {
                                            ids: t.join(","),
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(a), {
                                            headers: this.headers()
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return r = e.sent, i = b()(r, ["data", "data"]) || [], e.abrupt("return", i);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "favorTemplate",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = q()("".concat(this.getHost(), "api/app/template/favor"), {
                                            templateId: t,
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().post(encodeURI(a), {
                                            headers: this.headers()
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return r = e.sent, e.abrupt("return", !!r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "unFavorTemplate",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = q()("".concat(this.getHost(), "api/app/template/unfavor"), {
                                            templateId: t,
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().post(encodeURI(a), {
                                            headers: this.headers()
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return r = e.sent, e.abrupt("return", !!r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getPerviewDatails",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a) {
                            var r, i, o, n, s, _ = this;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templates/sub-").concat(t), {
                                            rc: 10,
                                            rs: 10,
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(r), {
                                            headers: this.headers(a)
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return i = e.sent, o = (o = b()(i, ["data", "data", "similars"]) || []).map((function(e) {
                                            return z(z({}, e), {}, {
                                                thumb: (0, x.KI)(e.thumb),
                                                pages: _.clearPages(e.pages || []),
                                                category: e.category ? _.clearCategory(e.category) : null
                                            })
                                        })), n = z(z({}, n = b()(i, ["data", "data", "templateInfo"]) || []), {}, {
                                            thumb: (0, x.KI)(n.thumb),
                                            pages: this.clearPages(n.pages || []),
                                            category: n.category ? this.clearCategory(n.category) : null
                                        }), s = (s = b()(i, ["data", "data", "recommendCategorys"]) || []).map((function(e) {
                                            return _.clearCategory(e)
                                        })), v()(i, ["data", "data", "templateInfo"], n), v()(i, ["data", "data", "similars"], o), v()(i, ["data", "data", "recommendCategorys"], s), e.abrupt("return", i);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getDesinerNameById",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r, i;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = q()("".concat(this.getHost(), "api/app/template/designer/").concat(t), {
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(a), {
                                            headers: this.headers()
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return r = e.sent, i = b()(r, ["data", "data", "nickname"]), e.abrupt("return", i || (0, f.Z)("template_designer_name"));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getFloorList",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a) {
                            var r, i, o;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templateTags/group/list"), {
                                            langEnv: a ? this.languageConfig[a] : this.language,
                                            pageNo: t,
                                            pageSize: 3,
                                            page: "design",
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(r), {
                                            headers: this.headers(a)
                                        }).catch((function(e) {
                                            console.log("error:", e)
                                        }));
                                    case 3:
                                        return i = e.sent, o = b()(i, ["data"]) || [], e.abrupt("return", o);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getFloorListV2",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a, r, i) {
                            var o, n, s, _, c, u, d = this;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = q()("".concat(this.getHost(), "api/v1/app/resources/ends/templateCenter/homepageSizes/sizesAndTemplates"), {
                                            pageNo: t,
                                            pageSize: r || 10,
                                            templatesNum: i || 12
                                        }), e.next = 3, l().get(encodeURI(c), {
                                            headers: this.headers(a)
                                        }).catch((function(e) {
                                            console.log("error:", e)
                                        }));
                                    case 3:
                                        return u = e.sent, e.abrupt("return", {
                                            pageNo: t,
                                            total: null !== (o = b()(u, ["data", "data", "total"])) && void 0 !== o ? o : 0,
                                            pageSize: 3,
                                            ids: (null === (n = b()(u, ["data", "data", "sizes"])) || void 0 === n ? void 0 : n.map((function(e) {
                                                return e.id
                                            }))) || [],
                                            totalPage: null !== (s = b()(u, ["data", "data", "totalPage"])) && void 0 !== s ? s : 1,
                                            floorListDatas: (null === (_ = b()(u, ["data", "data", "sizes"])) || void 0 === _ ? void 0 : _.map((function(e) {
                                                return {
                                                    title: null === e || void 0 === e ? void 0 : e.name,
                                                    categoryId: null === e || void 0 === e ? void 0 : e.id,
                                                    templateDatas: null === e || void 0 === e ? void 0 : e.templates.map((function(e) {
                                                        var t = z(z({}, e), {}, {
                                                            category: d.clearCategory(e.category),
                                                            pages: d.clearPages(e.pages),
                                                            thumb: (0, x.KI)(e.thumb)
                                                        });
                                                        return delete t.tagI18n, t
                                                    })),
                                                    description: null === e || void 0 === e ? void 0 : e.description
                                                }
                                            }))) || []
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a, r, i) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getTemplateByFloorId",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a) {
                            var r, i;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = q()("".concat(this.getHost(), "api/app/template/search/pages"), {
                                            floorId: t,
                                            pageSize: 12,
                                            pageNo: 1,
                                            cuid: this.getCuid()
                                        }), e.next = 3, l().get(encodeURI(r), {
                                            headers: this.headers(a)
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return i = e.sent, e.abrupt("return", b()(i, ["data"]) || []);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getValidCategoryGroup",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t, a) {
                            var r, i, o, n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getCategoryGroup(t).then((function(e) {
                                            return e.map((function(e) {
                                                if (e.items) return e.items
                                            })).flat() || []
                                        }));
                                    case 2:
                                        return r = e.sent, e.next = 5, this.search({
                                            search: null !== a && void 0 !== a ? a : "",
                                            lang: t,
                                            pageNo: 1,
                                            pageSize: 1
                                        });
                                    case 5:
                                        return i = e.sent, o = i.categorys, n = void 0 === o ? [] : o, e.abrupt("return", F()(n.map((function(e) {
                                            for (var t = 0; t < r.length; t++)
                                                if (e.key === r[t].path && e.doc_count > 0) return r[t]
                                        }))));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getHomeSeo",
                    value: function() {
                        var e = (0, o.Z)(p().mark((function e(t) {
                            var a, r, i;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = "".concat(this.getHost(), "api/v1/app/resources/ends/templates/home/seo?cuid=").concat(this.getCuid()), e.next = 3, l().get(encodeURI(a), {
                                            headers: this.headers(t)
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return r = e.sent, i = b()(r, ["data", "data"]) || {}, e.abrupt("return", i);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), e
            }())
        },
        78479: function(e, t, a) {
            "use strict";
            var r = a(83789),
                i = a(92809),
                o = a(30266),
                n = a(809),
                s = a.n(n),
                _ = a(62830),
                c = a.n(_),
                p = a(91632),
                u = a(52353),
                l = a.n(u),
                d = a(45578),
                m = a.n(d),
                g = a(63105),
                f = a.n(g),
                h = a(68949),
                b = a(59359),
                y = a(84706),
                v = a(18871),
                w = a.n(v),
                k = a(24756),
                A = a(13637),
                P = a(34584),
                I = a(82654),
                F = a(27484),
                S = a.n(F),
                q = a(90520);

            function x(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(a), !0).forEach((function(t) {
                        (0, i.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : x(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }(0, h.jQ)({
                enforceActions: "never"
            });
            var D = new Map,
                z = (0, h.LO)({
                    isMobile: b.tq,
                    isTemplate: !1,
                    currentUrl: "",
                    templateCanonicalurl: "",
                    v: "1.0.2",
                    a: "",
                    b: "",
                    sizeid: "",
                    d: "",
                    t: "",
                    equalWidth: !1,
                    search: "",
                    pageNo: 1,
                    pageSize: 40,
                    pageTtaol: 0,
                    seo: {},
                    recommendTags: [],
                    pageEndContent: "",
                    serverParam: {},
                    serverSeo: {},
                    local: "en",
                    langPath: "",
                    templateTotal: 0,
                    userInfo: void 0,
                    categroyGroup: [],
                    limitWidth: 300,
                    limitHeight: 366,
                    _pageContent: void 0,
                    setPageContent: function(e) {
                        this._pageContent = e
                    },
                    scrooltoTop: function() {
                        this._pageContent && (this._pageContent.scrollTop = 0)
                    },
                    setLimitSize: function(e, t) {
                        this.limitWidth = e, this.limitHeight = t
                    },
                    setUserInfo: function(e) {
                        this.userInfo = e
                    },
                    favorIds: [],
                    setlocal: function(e) {
                        this.local = e, this.langPath = ["", "en"].includes(e) ? "" : "/".concat(e);
                        var t = {
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
                        };
                        A.Z.setLanguage(t[e]), P.Z.setLanguage(t[e])
                    },
                    loadState: I.j.LOAD_SUCCESS,
                    templateDatas: [],
                    setA: function(e) {
                        this.searchTemplate({
                            a: e,
                            pageNo: 1
                        })
                    },
                    setB: function(e) {
                        this.b = e, this.pageTtaol = 0, this.sizeid = "", this.searchTemplate({
                            pageNo: 1
                        })
                    },
                    getSceneNameByScenePath: function(e, t) {
                        var a = "";
                        return (t || this.categroyGroup).map((function(t) {
                            t.path === e && (a = t.name)
                        })), a
                    },
                    getSceneBannerByScenePath: function(e) {
                        var t = "";
                        return this.categroyGroup.map((function(a) {
                            t || a.path !== e || (t = a.banner)
                        })), t
                    },
                    getSizeNameByCategoryPath: function(e) {
                        var t = "";
                        return this.categroyGroup.map((function(a) {
                            var r;
                            null === (r = a.items) || void 0 === r || r.map((function(a) {
                                a.path === e && (t = a.name)
                            }))
                        })), t
                    },
                    getSizeBannerByCategoryPath: function(e) {
                        var t = "";
                        return this.categroyGroup.map((function(a) {
                            var r;
                            null === (r = a.items) || void 0 === r || r.map((function(a) {
                                t || a.path !== e || (t = a.banner)
                            }))
                        })), t
                    },
                    getCategroyPathBysizeId: function(e) {
                        var t = "";
                        return this.categroyGroup.map((function(a) {
                            var r;
                            null === (r = a.items) || void 0 === r || r.map((function(a) {
                                a.sizeId === e && (t = a.path)
                            }))
                        })), t
                    },
                    getSizeIdByCategroyPath: function(e, t) {
                        var a = "";
                        return (t || this.categroyGroup).map((function(t) {
                            var r;
                            null === (r = t.items) || void 0 === r || r.map((function(t) {
                                t.path === e && (a = t.sizeId)
                            }))
                        })), a
                    },
                    getScenePathByCategroyPath: function(e, t) {
                        var a = "";
                        return (t || this.categroyGroup).map((function(t) {
                            var r;
                            null === (r = t.items) || void 0 === r || r.map((function(r) {
                                r.path === e && (a = t.path)
                            }))
                        })), a
                    },
                    getCategoryNameByCategroyPath: function(e, t) {
                        var a = t || this.categroyGroup,
                            r = "";
                        return a.map((function(t) {
                            var a;
                            null === (a = t.items) || void 0 === a || a.map((function(t) {
                                t.path === e && (r = t.name)
                            }))
                        })), r
                    },
                    getCategoryListByScenePath: function(e) {
                        var t = [];
                        return this.categroyGroup.map((function(a) {
                            a.path === e && (t = a.items || [])
                        })), t
                    },
                    setD: function(e) {
                        this.d = e, this.pageTtaol = 0, e || (this.search = "", this.sizeid = ""), this.searchTemplate({
                            pageNo: 1
                        })
                    },
                    setPage: function(e) {
                        var t = {
                            pageNo: e
                        };
                        this.sizeid && (t.sizeId = this.sizeid), this.searchTemplate(t);
                        var a = w()("/".concat(this.currentUrl), P.Z.filter({
                            search: this.d ? "" : this.search,
                            page: e,
                            sizeid: this.sizeid ? this.sizeid : ""
                        }));
                        P.Z.push(a)
                    },
                    setSearch: function(e, t, a, r) {
                        var i = this;
                        return (0, o.Z)(s().mark((function o() {
                            var n, _, c, p, u, l;
                            return s().wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (n = {}, _ = "", t && (n.project_type = "templates", n.position = t, r && (n.key_word_origin = r), _ = JSON.stringify(n)), !a) {
                                            o.next = 7;
                                            break
                                        }
                                        return c = w()("".concat(i.langPath, "/templates/?search=").concat(e).concat(t ? "&analytic=" + _ : "").concat(a.sizeId ? "&sizeid=" + a.sizeId : "")), window.open(c, "_self"), o.abrupt("return");
                                    case 7:
                                        if (!e) {
                                            o.next = 21;
                                            break
                                        }
                                        return o.next = 10, A.Z.searchToPath(e);
                                    case 10:
                                        if (!(p = o.sent)) {
                                            o.next = 16;
                                            break
                                        }
                                        u = w()("".concat(i.langPath, "/templates/search/").concat(p, "/").concat(t ? "?analytic=" + _ : "")), window.open(u, "_self"), o.next = 19;
                                        break;
                                    case 16:
                                        return l = w()("".concat(i.langPath, "/templates/?search=").concat(e).concat(t ? "&analytic=" + _ : "")), window.open(l, "_self"), o.abrupt("return");
                                    case 19:
                                        o.next = 21;
                                        break;
                                    case 21:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    searchTemplate: function() {
                        var e = arguments,
                            t = this;
                        return (0, o.Z)(s().mark((function a() {
                            var i, o, n, _, p, u, d, g, f, b, y, v, w, k, F, x, D, z, T, j, E, U, G;
                            return s().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return i = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = i.search, n = i.a, _ = i.b, p = i.d, u = i.pageNo, d = void 0 === u ? 1 : u, g = i.seo, f = void 0 === g ? "1" : g, b = i.lang, y = i.analytic, v = i.sizeId, o && (o = o.replace(/-+/g, " ")), t.scrooltoTop(), !l()(n) && (t.a = n), !l()(_) && (t.b = _), !l()(p) && (t.d = p), !l()(d) && (t.pageNo = d), !l()(o) && (t.search = o), !l()(v) && (t.sizeid = v), t.loadState = I.j.LOADING, t.seo = {}, t.templateDatas = [], w = {
                                            a: t.a,
                                            b: t.b,
                                            d: t.d,
                                            search: t.search,
                                            pageNo: t.pageNo,
                                            pageSize: t.pageSize,
                                            seo: f,
                                            sort: _ || t.b || v ? "new" : "recommend",
                                            lang: b,
                                            cuid: c()()
                                        }, y && (w.analytic = y), v && (w.sizeId = v), a.next = 17, A.Z.search(w).catch((function(e) {
                                            return e
                                        }));
                                    case 17:
                                        return k = a.sent, k.categorys, k.industrys, F = k.seo, x = k.list, k.sizeGroups, k.tags, k.searchTags, D = k.totalPage, z = void 0 === D ? 0 : D, k.err, T = k.total, t.templateTotal = T, t.seo = C(C({}, F), {}, {
                                            seoDate: S()().format("YYYY-MM-DD HH:mm:ss")
                                        }), P.Z.isLikelyNode && (t.serverSeo = C(C({}, F), {}, {
                                            seoDate: S()().format("YYYY-MM-DD HH:mm:ss")
                                        })), t.pageTtaol = z, j = [], (x || []).map((function(e) {
                                            if ("template" === e.type) {
                                                var t = C(C({}, e.Source), {}, {
                                                    category: A.Z.clearCategory(e.Source.category),
                                                    thumb: (0, q.KI)(e.Source.thumb),
                                                    pages: A.Z.clearPages(e.Source.pages)
                                                });
                                                j.push(t)
                                            }
                                        })), E = (0, h.ZN)(t.templateDatas), E = m()([].concat((0, r.Z)(E), j), (function(e) {
                                            return e.id
                                        })), t.templateDatas = E, t.templateDatas.length > 0 ? t.loadState = I.j.LOAD_SUCCESS : t.loadState = I.j.NO_DATA, P.Z.isLikelyNode || (U = (0, h.ZN)(t.templateDatas), G = U.map((function(e) {
                                            return e.id
                                        })), t.updateFavorState(G)), a.abrupt("return", {
                                            seo: F,
                                            templateDatas: j,
                                            pageTtaol: z,
                                            loadState: t.loadState,
                                            total: T
                                        });
                                    case 41:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    switchFavor: function(e) {
                        var t = this;
                        return (0, o.Z)(s().mark((function a() {
                            var i, o, n;
                            return s().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, k.Z.isLogin();
                                    case 2:
                                        if (i = a.sent) {
                                            a.next = 7;
                                            break
                                        }
                                        return a.next = 6, k.Z.login({});
                                    case 6:
                                        i = a.sent;
                                    case 7:
                                        if (i) {
                                            a.next = 9;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 9:
                                        return a.next = 11, A.Z.getFavorStateByids([e]);
                                    case 11:
                                        if (o = a.sent, !o.includes(e)) {
                                            a.next = 24;
                                            break
                                        }
                                        return a.next = 16, A.Z.unFavorTemplate(e);
                                    case 16:
                                        if (!a.sent) {
                                            a.next = 21;
                                            break
                                        }
                                        n = y.Am.success((0, p.Z)("template_unfavor_success")), t.favorIds = f()(t.favorIds, (function(t) {
                                            return t !== e
                                        })), a.next = 22;
                                        break;
                                    case 21:
                                        n = y.Am.error((0, p.Z)("template_unfavor_fail"));
                                    case 22:
                                        a.next = 32;
                                        break;
                                    case 24:
                                        return a.next = 26, A.Z.favorTemplate(e);
                                    case 26:
                                        if (!a.sent) {
                                            a.next = 31;
                                            break
                                        }
                                        n = y.Am.success((0, p.Z)("template_favor_success")), t.favorIds = [].concat((0, r.Z)(t.favorIds), [e]), a.next = 32;
                                        break;
                                    case 31:
                                        n = y.Am.error((0, p.Z)("template_favor_fail"));
                                    case 32:
                                        setTimeout((function() {
                                            y.Am.dismiss(n)
                                        }), 3e3);
                                    case 33:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    getTempLateUrl: function() {
                        var e = this.local;
                        return "en" === e ? "/template" : "/".concat(e, "/template")
                    },
                    updateFavorState: function(e) {
                        var t = this;
                        return (0, o.Z)(s().mark((function a() {
                            var i;
                            return s().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, A.Z.getFavorStateByids(e);
                                    case 2:
                                        i = a.sent, t.favorIds = [].concat((0, r.Z)(t.favorIds), (0, r.Z)(i));
                                    case 4:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    setCategroyGroup: function(e, t) {
                        this.categroyGroup = e, D.set("".concat(t || this.local, "categroyGroup"), e)
                    },
                    fetchCategoryIds: function(e) {
                        var t = this;
                        return (0, o.Z)(s().mark((function a() {
                            var r;
                            return s().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, A.Z.getCategoryGroup(e);
                                    case 2:
                                        return r = a.sent, t.setCategroyGroup(r, e), a.abrupt("return", r);
                                    case 5:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    categoryNameTolowerCase: function(e, t) {
                        var a = t || this.local;
                        if (["jp"].includes(a)) return e;
                        return {
                            "Youtube Thumbnail": "Youtube thumbnail",
                            "Youtube Channel Art": "Youtube channel art",
                            "Facebook Post": "Facebook post",
                            "Facebook Cover": "Facebook cover",
                            "Facebook Event Cover": "Facebook event cover",
                            "Instagram Post": "Instagram post",
                            "instagram post": "Instagram post",
                            "Instagram Story": "Instagram story",
                            "Twitter Post": "Twitter post",
                            "Twitter Cover": "Twitter cover",
                            "Pinterest Post": "Pinterest post",
                            "Tumblr Graphic": "Tumblr graphic",
                            "Tumblr Banner": "Tumblr banner",
                            "Snapchat Geofilter": "Snapchat geofilter",
                            "Twitch Banner": "Twitch banner",
                            "Soundcloud Banner": "Soundcloud banner",
                            "LinkedIn Background": "LinkedIn background",
                            "Youtube End Screen": "Youtube end screen",
                            "Line Rich Message": "Line rich message",
                            "ETSY Cover Photo": "Etsy cover photo",
                            "ETSY Shop Icon": "Etsy shop icon",
                            "Zoom Background": "Zoom background",
                            "Wattpad Book Cover": "Wattpad book cover",
                            "ID Card": "ID card",
                            "Facebook Ad Medium": "Facebook ad medium",
                            "Instagram Ad": "Instagram ad",
                            "Facebook App Ad": "Facebook App ad"
                        }[e] || e.toLowerCase()
                    },
                    firstToUpper: function(e) {
                        if (e) {
                            var t = e.trim().toLowerCase();
                            return t = t.replace(t[0], t[0].toUpperCase())
                        }
                        return e
                    },
                    ToUpper: function(e) {
                        var t = this;
                        if (e) {
                            var a = e.split(" ").map((function(e) {
                                return t.firstToUpper(e)
                            })).join(" ");
                            return a = a.replace(/\\u2019|\\u2018/g, "'").replace(/\\u201c|\\u201d/g, '"')
                        }
                        return e
                    },
                    encode: function(e) {
                        return e.replace(/\\u2019|\\u2018/g, "'").replace(/\\u201c|\\u201d/g, '"')
                    },
                    init: function(e) {
                        var t = this;
                        return (0, o.Z)(s().mark((function a() {
                            return s().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return t.a = "", t.b = "", t.d = "", t.seo = {}, t.serverSeo = {}, a.next = 7, t.fetchCategoryIds(e);
                                    case 7:
                                        return a.abrupt("return", a.sent);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    getHomeSeo: function() {
                        A.Z.getHomeSeo()
                    },
                    getNextData: function() {
                        return JSON.parse(document.getElementById("__NEXT_DATA__").innerText)
                    },
                    toJson: function() {
                        return (0, h.ZN)(this)
                    }
                }, {}, {
                    name: "templateStore",
                    deep: !1
                });
            P.Z.isLikelyNode || (window.addEventListener("resize", (function() {
                window.innerWidth > 1660 && 240 === z.limitWidth ? z.setLimitSize(300, 366) : window.innerWidth < 1660 && 300 === z.limitWidth && z.setLimitSize(240, 300)
            })), window.TemplateStore = z), t.Z = z
        },
        34584: function(e, t, a) {
            "use strict";
            var r = a(30266),
                i = a(68216),
                o = a(25997),
                n = a(92809),
                s = a(809),
                _ = a.n(s),
                c = a(86010),
                p = a(49437),
                u = a(52353),
                l = a.n(u),
                d = a(41609),
                m = a.n(d),
                g = a(59359),
                f = a(18871),
                h = a.n(f),
                b = a(21233),
                y = a.n(b),
                v = a(48764).Buffer,
                w = function() {
                    function e() {
                        (0, i.Z)(this, e), (0, n.Z)(this, "isInit", !0), (0, n.Z)(this, "IS_CN", !1), (0, n.Z)(this, "IS_PRE", !1), (0, n.Z)(this, "IS_PROD", !0), (0, n.Z)(this, "isLikelyNode", "undefined" !== typeof v && !1), (0, n.Z)(this, "imgurlHead", this.IS_PROD || this.IS_PRE ? "https://pub-static.fotor.com" : "https://test-pub-static.fotor.com"), (0, n.Z)(this, "language", "en_US"), (0, n.Z)(this, "_router", void 0), (0, n.Z)(this, "_historyPathname", ""), (0, n.Z)(this, "templateUrl", "/templates"), (0, n.Z)(this, "searchResult", "/search/templates"), (0, n.Z)(this, "tempWordMap", new Map), (0, n.Z)(this, "_browserInfo", void 0), (0, n.Z)(this, "_cookieEnabled", !this.isLikelyNode && navigator.cookieEnabled)
                    }
                    return (0, o.Z)(e, [{
                        key: "setLanguage",
                        value: function(e) {
                            this.language = e
                        }
                    }, {
                        key: "imageLoadingClassName",
                        value: function(t) {
                            return " ".concat((0, c.Z)(y().imageLoading, t && y().isLight, y()["imageLoadingDelay".concat(e.delay++ % 10)]), " ")
                        }
                    }, {
                        key: "setRouter",
                        value: function(e) {
                            this._router = e
                        }
                    }, {
                        key: "creatTemplateDateilsUrl",
                        value: function(e, t, a) {
                            var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                i = {
                                    en_US: "",
                                    es_ES: "/es",
                                    pt_BR: "/pt",
                                    ru_RU: "/ru",
                                    fr_FR: "/fr",
                                    de_DE: "/de",
                                    zh_CN: "/cn",
                                    zh_TW: "/tw",
                                    ja_JP: "/jp"
                                },
                                o = "";
                            [e, t, a].map((function(e, t) {
                                if (e)
                                    if (0 === t) o += e.trim().replace(/ +/g, "-").toLowerCase();
                                    else if (1 === t) {
                                    new RegExp("".concat(e.toLowerCase(), "$"), "g").test(o) || (o += "-" + e.toLowerCase())
                                } else o += "-" + e.toLowerCase()
                            }));
                            var n = h()("".concat(p.ZP.replace(/\/$/, "")).concat(i[this.language] || "").concat(this.templateUrl, "/").concat(o, "/")).toLowerCase();
                            return r && this.push(n), n
                        }
                    }, {
                        key: "getQueryVariable",
                        value: function(e, t) {
                            l()(t) && (t = this.isLikelyNode ? "" : window.location.search.substring(1));
                            for (var a = t.split("&"), r = 0; r < a.length; r++) {
                                var i = a[r].split("=");
                                if (i[0] == e) return decodeURI(i[1])
                            }
                        }
                    }, {
                        key: "getSearchUrlParam",
                        value: function(e) {
                            var t = e.split(this.templateUrl)[1] || "",
                                a = this.getQueryVariable("search"),
                                r = this.getQueryVariable("sort"),
                                i = this.getQueryVariable("page"),
                                o = Number(i) > 1 ? Number(i) : 1,
                                n = decodeURI(t.replace(/\//g, "")).split("-"),
                                s = {};
                            n.map((function(e) {
                                s[e.slice(0, 1)] = e.slice(1, 1 / 0)
                            }));
                            var _ = s.a,
                                c = s.b,
                                p = s.c,
                                u = s.d,
                                l = s.t,
                                d = void 0 === l ? "" : l;
                            return this.filter({
                                a: _,
                                b: c,
                                c: p,
                                d: u,
                                t: d,
                                search: a,
                                sort: r,
                                page: o
                            })
                        }
                    }, {
                        key: "getServerUrlParam",
                        value: function(e, t) {
                            var a = e.split(this.templateUrl)[1],
                                r = this.getQueryVariable("search", t),
                                i = this.getQueryVariable("page", t),
                                o = Number(i) > 1 ? Number(i) : 1,
                                n = decodeURI(a.replace("/", "")).split("-"),
                                s = {};
                            n.map((function(e) {
                                s[e.slice(0, 1)] = e.slice(1, 1 / 0)
                            }));
                            var _ = s.a,
                                c = s.b,
                                p = s.c,
                                u = s.d,
                                l = s.t;
                            return this.filter({
                                a: _,
                                b: c,
                                c: p,
                                d: u,
                                t: l,
                                search: r,
                                page: o
                            })
                        }
                    }, {
                        key: "filter",
                        value: function(e) {
                            for (var t in e) e[t] || delete e[t], "page" === t && 1 === e[t] && delete e[t];
                            return e
                        }
                    }, {
                        key: "push",
                        value: function(e) {
                            var t, a, r, i, o, n, s, _;
                            this.isLikelyNode || e === (null === (t = window) || void 0 === t || null === (a = t.location) || void 0 === a ? void 0 : a.pathname) + (null !== (r = window) && void 0 !== r && null !== (i = r.location) && void 0 !== i && i.search ? null === (o = window) || void 0 === o || null === (n = o.location) || void 0 === n ? void 0 : n.search : "") || (null === (s = window) || void 0 === s || null === (_ = s.history) || void 0 === _ || _.pushState(null, e, e))
                        }
                    }, {
                        key: "gotoLink",
                        value: function(e) {
                            !this.isLikelyNode && e && window.open(e, "_self")
                        }
                    }, {
                        key: "getBrowserInfo",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e() {
                                var t = this;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this._browserInfo) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 3, a.e(3200).then(a.t.bind(a, 53200, 23)).then((function(e) {
                                                t._browserInfo = e.default()
                                            }));
                                        case 3:
                                            return e.abrupt("return", this._browserInfo);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isIos",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e() {
                                var t;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getBrowserInfo();
                                        case 2:
                                            return t = e.sent, e.abrupt("return", ["iOS"].includes(t.os));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isAndroid",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e() {
                                var t;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getBrowserInfo();
                                        case 2:
                                            return t = e.sent, e.abrupt("return", ["Android"].includes(t.os));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "copyText",
                        value: function(e) {
                            var t = document.createElement("input");
                            t.value = e, document.body.append(t), t.select(), t.setSelectionRange(0, t.value.length), document.execCommand("copy"), t.remove()
                        }
                    }, {
                        key: "goToApp",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e(t) {
                                var a, r;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!m()(t)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 2:
                                            if (g.tq) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 4:
                                            if (!this.IS_CN) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 6:
                                            if (this.IS_CN) {
                                                e.next = 16;
                                                break
                                            }
                                            return this.copyText(t), e.next = 10, this.isAndroid();
                                        case 10:
                                            return a = e.sent, e.next = 13, this.isIos();
                                        case 13:
                                            r = e.sent, a && (location.href = "https://datasink-sa.fotor.com.cn/r/jt"), r && (location.href = "https://datasink-sa.fotor.com.cn/r/1t");
                                        case 16:
                                            return e.abrupt("return", !0);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "cookieEnabled",
                        value: function() {
                            return this._cookieEnabled
                        }
                    }, {
                        key: "storePerfix",
                        value: function(e) {
                            return "fotor_common_hub_".concat(e)
                        }
                    }, {
                        key: "localStorageGetItem",
                        value: function(e) {
                            if (this._cookieEnabled) try {
                                var t = localStorage.getItem(this.storePerfix(e)) || localStorage.getItem(e) || "";
                                return JSON.parse(t)
                            } catch (a) {
                                return null
                            }
                            return null
                        }
                    }, {
                        key: "localStorageRemoveItem",
                        value: function(e) {
                            if (this._cookieEnabled) try {
                                localStorage.removeItem(this.storePerfix(e))
                            } catch (t) {
                                return
                            }
                        }
                    }, {
                        key: "localStorageSetItem",
                        value: function(e, t) {
                            if (this._cookieEnabled) try {
                                localStorage.setItem(this.storePerfix(e), JSON.stringify(t))
                            } catch (a) {
                                return
                            } else;
                        }
                    }, {
                        key: "SessionStorageGetItem",
                        value: function(e) {
                            if (this._cookieEnabled) try {
                                var t = sessionStorage.getItem(this.storePerfix(e)) || "";
                                return JSON.parse(t)
                            } catch (a) {
                                return null
                            }
                            return null
                        }
                    }, {
                        key: "SessionStorageRemoveItem",
                        value: function(e) {
                            if (this._cookieEnabled) try {
                                sessionStorage.removeItem(this.storePerfix(e))
                            } catch (t) {
                                return
                            }
                        }
                    }, {
                        key: "SessionStorageSetItem",
                        value: function(e, t) {
                            if (this._cookieEnabled) try {
                                sessionStorage.setItem(this.storePerfix(e), JSON.stringify(t))
                            } catch (a) {
                                return
                            } else;
                        }
                    }, {
                        key: "useTemplate",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e(t) {
                                var a, r, i;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.vip, a = t.pages, r = t.id, i = a.length > 2 ? "fotor://design/home?channel=web" : "fotor://design/edit?templateId=".concat(r, "&channel=web"), e.next = 4, this.goToApp(i);
                                        case 4:
                                            if (!e.sent) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            window.open("".concat(p.ZP, "design/project/create?template=").concat(r));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "log",
                        value: function(e) {
                            this.IS_PROD || console.log(e)
                        }
                    }, {
                        key: "firstToUpper",
                        value: function(e) {
                            if (e) {
                                var t = e.trim().toLowerCase();
                                return t = t.replace(t[0], t[0].toUpperCase())
                            }
                            return e
                        }
                    }, {
                        key: "ToUpper",
                        value: function(e) {
                            var t = this;
                            if (e) {
                                var a = e.split(" ").map((function(e) {
                                    return t.firstToUpper(e)
                                })).join(" ");
                                return a = a.replace(/\\u2019|\\u2018/g, "'").replace(/\\u201c|\\u201d/g, '"')
                            }
                            return e
                        }
                    }]), e
                }();
            (0, n.Z)(w, "delay", 0);
            var k = new w;
            t.Z = k
        },
        82654: function(e, t, a) {
            "use strict";
            var r;
            a.d(t, {
                    j: function() {
                        return r
                    }
                }),
                function(e) {
                    e.LOADING = "loading", e.LOAD_SUCCESS = "load_success", e.LOAD_ERROR = "load_error", e.NO_MORE = "no_more", e.NO_DATA = "no_data"
                }(r || (r = {}))
        },
        34952: function(e, t) {
            "use strict";
            var a = "https://imgv3.fotor.com",
                r = {
                    1: a + "/images/background/",
                    3: a + "/images/gallery/",
                    4: a + "/images/comparison/",
                    5: a + "/images/side/",
                    6: a + "/images/feature-card/",
                    7: a + "/images/avatar/",
                    8: a + "/images/share/",
                    9: a + "/images/partners/",
                    10: a + "/images/interface/",
                    11: a + "/videos/themes/",
                    12: a + "/images/videoImage/",
                    13: a + "/images/homepage-feature-card/",
                    14: a + "/images/main-function/",
                    15: a + "/images/user-assess/",
                    16: a + "/images/schema-app/",
                    17: a + "/images/cover-photo-image/",
                    18: a + "/images/slider-image/",
                    19: a + "/images/banner-maker-image/",
                    21: a + "/images/blog-cover-image/",
                    22: a + "/images/pricing/",
                    23: a + "/images/example/",
                    24: a + "/images/trusted/"
                };
            t.Z = r
        },
        38388: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return r
                }
            });
            var r = {
                en_US: JSON.parse('{"ai_textarea_placeholder":"Describe what you want see","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Users","aigc_data_reveal_title2":"Images Generated","aigc_data_reveal_title3":"Rating","back_to_top":"Scroll to top","breadCrumbs_home":"Home","credits_unit":"/Credit","drop_image_to_upload":"Drop image here","header_logo_hover_info":"Drag the logo into the bookmark bar to visit Fotor easier next time!","join_discord_title":"Click to visit Discord","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"Not now","mobile_to_app_desc":"Edit and design your photos on the go.","mobile_to_app_desc1":"Share to social media smoother and easier!","mobile_to_app_ok":"Explore App","mobile_to_app_title":"Continue in the app","mobile_to_more_text":"Start editing and designing","more":"More","more_templates_button":"Browse More  {sizeName} Templates","original_before":"Before","pointsActivityPage_activity_list_mobile_title":"Earn Credits","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"Credits:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Task Center","pointsActivityPage_desc":"It\'s easy and fun to get more rewards doing what you already love to do in Fotor. Start earning with Fotor rewards today!","pointsActivityPage_download_app_text":"Download Fotor App and sign up to earn 5 free credits on the App. The earned credits can be used both on our website and App!","pointsActivityPage_download_app_title":"Download App","pointsActivityPage_my_credits_text":"My Credits","pointsActivityPage_novip_text":"Join Fotor Pro to earn double credits","pointsActivityPage_one_activity_type_mobile_text":"Earn Once","pointsActivityPage_receive_activity_button_mobile_text":"Earn","pointsActivityPage_receive_activity_button_text":"Earn Credits","pointsActivityPage_receive_points_toast":"{numbers} credit(s) received!","pointsActivityPage_received_activity_button_mobile_text":"Received","pointsActivityPage_received_activity_button_text":"Received","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"Earn Daily","pointsActivityPage_svip_text":"Pro+ exclusive credits rewards","pointsActivityPage_title":"Join Fotor and Play with Fotor to Get Rewards Easily | Fotor","pointsActivityPage_upgrade_button_text":"Upgrade","pointsActivityPage_username_prefix_text":"Hi,","pointsActivityPage_vip_text":"Pro exclusive credits rewards","pointsActivityPage_welcome":"Welcome to Fotor Task Center!","pointsActivityPage_what_use_credits_mobile_text":"You can use credits to generate AI images with Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">Create Now</a>","pointsActivityPage_what_use_credits_text":"You can use credits to generate a wide range of AI images with <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image\\n          Generator</a>, create stunning backgrounds for your cutouts in <a href=\\"https://www.fotor.com/features/background-remover/upload\\">Fotor Background\\n          Remover</a>, and craft unique designs by generating your own elements or images in\\n          <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. Generating one AI image consumes 1 or 2 credits in those tools.","pointsActivityPage_what_use_credits_title":"What can I do with the credits?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Create Now","pointsActivityPage_what_use_credits_to_link_text":"Generate Now","preview_upload_limit_size":"Upload failed because of the excessive image size or file size.{link}.","preview_upload_more":"Learn More","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"HD JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 credits/month","price_page_feature_desc19_list_desc2":"300 credits/month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Art Effects","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Image Generator (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"Click to read AIGC tips","result_after":"After","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"Share","unitMonth":"/month","upload_background":"Change Photo Background Now","upload_background_remover":"Remove Background Now","upload_fail":"Failed to open image, please try again.","upload_format_custom":"Support {JPG,PNG,HEIC/HEIF,WebP} formats","upload_number_tip":"This page only supports adding 1 photo for editing, you can add more photos in our editing tool.","upload_start":"Start Now\uff01","upload_sure":"Confirm","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"Copied","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_to_app_popup_title":"Continue in the App?","mobile_to_app_popup_subtitle":"Enjoy a better experience tailored for your mobile device!","mobile_to_app_popup_button_stay":"Stay on Web","mobile_to_app_popup_button_open":"Open App","mobile_app_entry_pop_title":"Wanna try Fotor Pro free?","mobile_app_entry_pop_content":"Download Fotor App for easier editing and free trial on pro features! \ud83d\udc47"}'),
                zh_CN: JSON.parse('{"ai_textarea_placeholder":"\u63cf\u8ff0\u60a8\u5e0c\u671b\u4eba\u5de5\u667a\u80fd\u7ed8\u5236\u7684\u5185\u5bb9","aigc_data_reveal_num1":"600\u4e07+","aigc_data_reveal_num2":"5000\u4e07+","aigc_data_reveal_title1":"\u7528\u6237","aigc_data_reveal_title2":"\u56fe\u50cf\u751f\u6210\u6570\u91cf","aigc_data_reveal_title3":"\u8a55\u5206","back_to_top":"\u56de\u5230\u9876\u90e8","breadCrumbs_home":"\u9996\u9875","credits_unit":"/\u79ef\u5206","drop_image_to_upload":"\u62d6\u52a8\u56fe\u7247\u5230\u8fd9\u91cc","header_logo_hover_info":"\u62d6\u52a8Logo\u5230\u4e66\u7b7e\u680f\uff0c\u4e0b\u6b21\u8f7b\u677e\u8bbf\u95eeFotor\uff01","join_discord_title":"\u70b9\u51fb\u8bbf\u95eeDiscord","mobile_open_app_fixed_popup_desc":"\u4eab\u53d7\u4e3a\u4f60\u5347\u7ea7\u5b9a\u5236\u7684\u6d41\u7545\u7f16\u8f91\u4f53\u9a8c\u5427\uff01","mobile_to_app_cancel":"\u73b0\u5728\u4e0d\u7528","mobile_to_app_desc":"\u968f\u65f6\u968f\u5730\u7f16\u8f91\u548c\u8bbe\u8ba1\u4f60\u7684\u4f5c\u54c1\u3002","mobile_to_app_desc1":"\u5206\u4eab\u5230\u793e\u4ea4\u5a92\u4f53\u66f4\u987a\u7545\u3001\u4fbf\u6377\uff01","mobile_to_app_ok":"\u63a2\u7d22App","mobile_to_app_title":"\u5728App\u4e0a\u8fdb\u884c","mobile_to_more_text":"\u5373\u523b\u5f00\u59cb\u7f16\u8f91\u548c\u8bbe\u8ba1","more":"\u66f4\u591a","more_templates_button":"\u6d4f\u89c8\u66f4\u591a\u6a21\u677f","original_before":"\u8c03\u6574\u524d","pointsActivityPage_activity_list_mobile_title":"\u9886\u53d6\u79ef\u5206","pointsActivityPage_copied":"\u5df2\u590d\u5236","pointsActivityPage_copy":"\u590d\u5236","pointsActivityPage_credits":"\u79ef\u5206\uff1a","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"\u4efb\u52a1\u4e2d\u5fc3","pointsActivityPage_desc":"\u5728Fotor\u4e2d\u505a\u60a8\u559c\u6b22\u7684\u4e8b\u60c5\uff0c\u5c31\u80fd\u8f7b\u677e\u6709\u8da3\u5730\u83b7\u5f97\u66f4\u591a\u5956\u52b1\u3002\u4eca\u5929\u5c31\u5f00\u59cb\u8d5a\u53d6Fotor\u5956\u52b1\u5427\uff01","pointsActivityPage_download_app_text":"\u9996\u6b21\u4e0b\u8f7d\u5e76\u767b\u5f55Fotor App\u5373\u53ef\u514d\u8d39\u9886\u53d65\u4e2a\u79ef\u5206\uff0c\u79ef\u5206\u5728\u7f51\u7ad9\u548cApp\u5747\u53ef\u4f7f\u7528\u3002","pointsActivityPage_download_app_title":"\u4e0b\u8f7dApp","pointsActivityPage_my_credits_text":"\u6211\u7684\u79ef\u5206","pointsActivityPage_novip_text":"\u52a0\u5165FotorPro \u5b8c\u6210\u4efb\u52a1\u4eab\u53cc\u500d\u79ef\u5206","pointsActivityPage_one_activity_type_mobile_text":"\u4e00\u6b21\u6027\u4efb\u52a1","pointsActivityPage_receive_activity_button_mobile_text":"\u9886\u53d6","pointsActivityPage_receive_activity_button_text":"\u9886\u53d6\u79ef\u5206","pointsActivityPage_receive_points_toast":"\u5df2\u6210\u529f\u9886\u53d6{numbers}\u79ef\u5206\uff01","pointsActivityPage_received_activity_button_mobile_text":"\u5df2\u9886\u53d6","pointsActivityPage_received_activity_button_text":"\u5df2\u9886\u53d6","pointsActivityPage_share_link":"\u5206\u4eab\u94fe\u63a5","pointsActivityPage_some_activity_type_mobile_text":"\u6bcf\u65e5\u4efb\u52a1","pointsActivityPage_svip_text":"\u5df2\u4eabPro+\u4f1a\u5458\u4e13\u5c5e\u79ef\u5206\u5956\u52b1","pointsActivityPage_title":"\u52a0\u5165Fotor\u5e76\u53c2\u4e0eFotor\u7684\u6d3b\u52a8\u83b7\u5f97\u5956\u52b1 | Fotor","pointsActivityPage_upgrade_button_text":"\u7acb\u5373\u5347\u7ea7","pointsActivityPage_username_prefix_text":"\u4f60\u597d\uff0c","pointsActivityPage_vip_text":"\u5df2\u4eabPro\u4f1a\u5458\u4e13\u5c5e\u79ef\u5206\u5956\u52b1","pointsActivityPage_welcome":"\u6b22\u8fce\u6765\u5230Fotor\u4efb\u52a1\u4e2d\u5fc3\uff01","pointsActivityPage_what_use_credits_mobile_text":"\u60a8\u53ef\u4ee5\u4f7f\u7528\u79ef\u5206\u5728Fotor AI\u56fe\u50cf\u751f\u6210\u5de5\u5177\u4e2d\u751f\u6210\u5404\u79cdAI\u56fe\u50cf\u3002<a href=\\"https://www.fotor.com/images/create\\">\u7acb\u5373\u751f\u6210</a>","pointsActivityPage_what_use_credits_text":"\u60a8\u53ef\u4ee5\u4f7f\u7528\u79ef\u5206\u5728 <a href=\\"https://www.fotor.com/images/create\\">Fotor AI \u56fe\u50cf\u751f\u6210\u5de5\u5177</a>\u4e2d\u751f\u6210\u5404\u79cd AI \u56fe\u50cf\uff0c\u5728 <a href=\\"https://www.fotor.com/features/background-remover/upload\\">Fotor \u667a\u80fd\u62a0\u56fe\u5de5\u5177</a>\u751f\u6210\u81ea\u5b9a\u4e49\u80cc\u666f\uff0c\u4ee5\u53ca\u5728 <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor \u8bbe\u8ba1\u5de5\u5177</a>\u4e2d\u751f\u6210\u81ea\u5df1\u7684\u7d20\u6750\u6216\u56fe\u7247\u6765\u81ea\u5b9a\u4e49\u8bbe\u8ba1\u3002\u5728\u8fd9\u4e9b\u5de5\u5177\u4e2d\uff0c\u751f\u6210\u4e00\u5f20 AI \u56fe\u50cf\u6d88\u80171~2\u4e2a\u79ef\u5206\u3002","pointsActivityPage_what_use_credits_title":"\u79ef\u5206\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f","pointsActivityPage_what_use_credits_to_link_mobile_text":"\u7acb\u5373\u751f\u6210","pointsActivityPage_what_use_credits_to_link_text":"\u7acb\u5373\u751f\u6210","preview_upload_limit_size":"\u56e0\u56fe\u7247\u5c3a\u5bf8\u6216\u8005\u6587\u4ef6\u5927\u5c0f\u8d85\u51fa\u9650\u5236\uff0c\u4e0a\u4f20\u5931\u8d25\u3002{link}\u3002","preview_upload_more":"\u4e86\u89e3\u66f4\u591a","price_monthly_switch":"\u6309\u6708","price_page_activity_btn_discount":"\u4ee5{discount_cn}\u6298\u5347\u7ea7","price_page_billed_annually":"\u6309\u5e74\u4ed8\u8d39","price_page_buy_now":"\u7acb\u5373\u8d2d\u4e70","price_page_credits_once_info":"\u79ef\u5206\u8d2d\u4e70\u540e2\u5e74\u5185\u6709\u6548\u3002","price_page_credits_plans":"\u79ef\u5206\u5957\u9910","price_page_credits_subscribe_info":"\u8ba2\u9605\u671f\u95f4\uff0c\u672a\u4f7f\u7528\u7684\u79ef\u5206\u53ef\u4ee5\u7ed3\u8f6c\uff0c\u6700\u591a\u7d2f\u79ef5\u4e2a\u6708\u3002","price_page_feature_desc1":"\u5305\u62ec\u57fa\u7840\u7f16\u8f91\u529f\u80fd\u3001\u57fa\u7840\u7f8e\u989c\u529f\u80fd\uff0c\u4ee5\u53ca\u90e8\u5206\u7279\u6548\u3001\u6ee4\u955c\u548c\u8fb9\u6846\u7d20\u6750\u3002","price_page_feature_desc10":"\u8ba9\u7167\u7247\u53d8\u6210\u7d20\u63cf\u3001\u6cb9\u753b\u3001\u6c34\u5f69\u3001\u5361\u901a\u6216\u5176\u4ed6\u98ce\u683c\u7684\u827a\u672f\u4f5c\u54c1\u3002","price_page_feature_desc10_list_desc1":"\u666e\u901a\u6e05\u6670\u5ea6\uff0c\u5e26\u6c34\u5370\u4e0b\u8f7d","price_page_feature_desc10_list_desc2":"\u9ad8\u6e05\uff0c\u65e0\u6c34\u5370\u4e0b\u8f7d","price_page_feature_desc11":"\u4e3a\u9ed1\u767d\u7167\u7247\u667a\u80fd\u4e0a\u8272\u3002","price_page_feature_desc12":"\u4f7f\u7528\u9884\u8bbe\u597d\u7684\u6a21\u677f\uff0c\u5feb\u901f\u5b8c\u6210\u6d77\u62a5\u3001\u8d3a\u5361\u3001\u793e\u4ea4\u5a92\u4f53\u5e16\u5b50\u7b49\u5404\u79cd\u573a\u666f\u7684\u8bbe\u8ba1\u9700\u6c42\u3002","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"\u5404\u79cd\u98ce\u683c\u7c7b\u578b\u7684\u7248\u6743\u5b57\u4f53\u3002","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & \u4e0a\u4f20\u5b57\u4f53","price_page_feature_desc13_list_desc3":"523 & \u4e0a\u4f20\u5b57\u4f53","price_page_feature_desc14":"\u5305\u62ec\u80cc\u666f\u3001\u56fe\u7247\u3001\u63d2\u753b\u3001\u77e2\u91cf\u56fe\u7b49\u5143\u7d20\u548c\u8d34\u7eb8\u3002","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"\u5728\u4e91\u7aef\u50a8\u5b58\u60a8\u7684\u5de5\u7a0b\u6587\u4ef6\u4ee5\u53ca\u4f60\u4e0a\u4f20\u7684\u56fe\u7247\u3002","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"\u652f\u6301\u4e0b\u8f7d\u7684\u6587\u4ef6\u683c\u5f0f","price_page_feature_desc16_list_desc1":"\u666e\u901a\u6e05\u6670\u5ea6\u7684JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"\u9ad8\u6e05\u7684JPG/ PNG/ PDF\uff0c\u4ee5\u53ca\u900f\u660e\u80cc\u666f\u7684PNG","price_page_feature_desc17":"\u4f7f\u7528\u7edf\u4e00\u7684\u5b57\u4f53\u3001logo\u548c\u989c\u8272\u6765\u7ba1\u7406\u54c1\u724c\u8bbe\u8ba1\u3002\u5e76\u4e14\u53ef\u4ee5\u4e0a\u4f20\u672c\u5730\u5b57\u4f53\u3002","price_page_feature_desc18":"\u65e0\u5e7f\u544a\u6253\u6270\uff0c\u7545\u4eab\u66f4\u5927\u7684\u753b\u5e03\u3002","price_page_feature_desc19":"\u514d\u8d39\u83b7\u5f97\u79ef\u5206\u8d60\u9001\uff0c\u53ef\u7528\u4e8eAIGC\u76f8\u5173\u529f\u80fd\u3002","price_page_feature_desc19_list_desc1":"100 \u79ef\u5206/\u6708","price_page_feature_desc19_list_desc2":"300 \u79ef\u5206/\u6708","price_page_feature_desc2":"\u5305\u62ec\u57fa\u7840\u8bbe\u8ba1\u529f\u80fd\u4ee5\u53ca\u90e8\u5206\u7d20\u6750\u8d44\u6e90\u3002","price_page_feature_desc3":"\u5305\u62ec\u57fa\u7840\u62fc\u56fe\u5e03\u5c40\u53ca\u90e8\u5206\u62fc\u56fe\u6a21\u677f\u3002","price_page_feature_desc4":"\u5305\u62ec\u6240\u6709\u9ad8\u7ea7\u7f16\u8f91\u529f\u80fd\uff0c\u4f8b\u5982HSL\u3001\u964d\u566a\u3001\u76f8\u53cd\u989c\u8272\u3001\u5ae9\u80a4\u3001\u5851\u5f62\u7b49\uff0c\u4ee5\u53ca\u6240\u6709\u9ad8\u7ea7\u6ee4\u955c\u548c\u8fb9\u6846\u3002","price_page_feature_desc5":"\u6279\u91cf\u7f16\u8f91\u591a\u5f20\u56fe\u7247\uff0c\u6279\u91cf\u88c1\u526a\u3001\u6279\u91cf\u8c03\u6574\u5c3a\u5bf8\u3001\u6279\u91cf\u52a0\u5b57\u3001\u6279\u91cf\u4fee\u6539\u6587\u4ef6\u683c\u5f0f\u3002","price_page_feature_desc6":"\u63d0\u9ad8\u7167\u7247\u5206\u8fa8\u7387\u3001\u9510\u5316\u56fe\u50cf\u7ec6\u8282\u3001\u63d0\u9ad8\u56fe\u50cf\u8d28\u91cf\uff0c\u8ba9\u7167\u7247\u53d8\u5f97\u66f4\u6e05\u6670\u3002","price_page_feature_desc7":"\u4e00\u952e\u79fb\u9664\u7167\u7247\u80cc\u666f\uff0c\u4e3a\u7167\u7247\u4fee\u6539\u80cc\u666f\u989c\u8272\u6216\u80cc\u666f\u56fe\u7247\u3002","price_page_feature_desc8":"\u79fb\u9664\u56fe\u7247\u4e0a\u4e0d\u60f3\u8981\u7684\u7269\u54c1\u3001\u6587\u5b57\u6216\u6c34\u5370\u3002","price_page_feature_desc9":"\u8f93\u5165\u6587\u5b57\u6216\u5bfc\u5165\u56fe\u7247\uff0c\u8ba9AI\u4e3a\u60a8\u8fdb\u884c\u521b\u4f5c\u3002","price_page_feature_title1":"\u57fa\u7840\u7f16\u8f91\u529f\u80fd","price_page_feature_title10":"AI\u827a\u672f\u7279\u6548","price_page_feature_title11":"AI\u667a\u80fd\u4e0a\u8272","price_page_feature_title12":"\u6a21\u677f","price_page_feature_title13":"\u5b57\u4f53","price_page_feature_title14":"\u8d44\u6e90","price_page_feature_title15":"\u4e91\u50a8\u5b58","price_page_feature_title16":"\u6587\u4ef6\u683c\u5f0f","price_page_feature_title17":"\u54c1\u724c\u5de5\u5177\u7bb1","price_page_feature_title18":"\u53bb\u5e7f\u544a","price_page_feature_title19":"\u79ef\u5206\u8d60\u9001","price_page_feature_title2":"\u57fa\u7840\u8bbe\u8ba1\u529f\u80fd","price_page_feature_title3":"\u57fa\u7840\u62fc\u56fe\u529f\u80fd","price_page_feature_title4":"\u9ad8\u7ea7\u7f16\u8f91\u529f\u80fd","price_page_feature_title5":"\u6279\u91cf\u7f16\u8f91","price_page_feature_title6":"AI\u667a\u80fd\u4f18\u5316","price_page_feature_title7":"AI\u667a\u80fd\u62a0\u56fe","price_page_feature_title8":"AI\u667a\u80fd\u6d88\u9664","price_page_feature_title9":"AI\u751f\u6210\u5185\u5bb9\uff08AIGC\uff09","price_page_free_info":"\u514d\u8d39","price_page_free_trial":"\u514d\u8d39\u8bd5\u7528","price_page_most_popular":"\u6700\u53d7\u6b22\u8fce","price_page_one_time_payment":"\u5355\u6b21\u8d2d\u4e70","price_page_platform_title":"\u8de8\u5e73\u53f0\u53ef\u7528","price_page_premium_plans":"\u4f1a\u5458\u5957\u9910","price_page_subscribe_now":"\u7acb\u5373\u8ba2\u9605","price_page_subscription_plan":"\u8ba2\u9605\u8ba1\u5212","price_page_try_now":"\u7acb\u5373\u4f7f\u7528","price_yearly_switch":"\u6309\u5e74","read_aigc_tips_title":"\u70b9\u51fb\u6d4f\u89c8AIGC\u653b\u7565","result_after":"\u8c03\u6574\u540e","resume_uns_active_button":"\u6211\u77e5\u9053\u4e86","resume_uns_active_desc":"\u5f53\u524d\u4f18\u60e0\u5df2\u88ab\u9886\u53d6\uff0c\u60a8\u5df2\u53ef\u4eab\u53d7\u8ba2\u9605\u6298\u6263\u3002","resume_uns_active_title":"\u4f60\u5df2\u7ecf\u9886\u53d6\u4e86\u4f18\u60e0\uff01","resume_uns_button":"\u4ee57\u6298\u6062\u590d\u8ba2\u9605","resume_uns_card_number":"\u5361\u53f7\uff1a","resume_uns_click_download_app_title":"\u4e0b\u8f7d\u684c\u9762\u5e94\u7528","resume_uns_desc":"\u6062\u590d\u8ba2\u9605\u540e\uff0c\u4e0d\u4f1a\u7acb\u5373\u5411\u60a8\u6536\u8d39\uff0c\u800c\u662f\u5728\u8ba2\u9605\u5230\u671f\u65e5\u518d\u8fdb\u884c\u6536\u8d39\u3002\u60a8\u5c06\u4ece\u6b64\u4eab\u53d7\u8ba2\u9605\u8d397\u6298\u7684\u4f18\u60e0\u3002","resume_uns_discounted_subscription_fee":"\u6298\u540e\u8ba2\u9605\u8d39\u7528\uff1a","resume_uns_download_app_title":"\u4f1a\u5458\u591a\u7aef\u4e92\u901a\uff0c\u8de8\u8bbe\u5907\u7545\u4eab\u9ad8\u7ea7\u6743\u76ca\uff01","resume_uns_download_button":"\u4e0b\u8f7d","resume_uns_email":"\u90ae\u7bb1\uff1a","resume_uns_expiration_date":"\u8ba2\u9605\u5230\u671f\u65e5\uff1a","resume_uns_expired_button":"\u4ee58\u6298\u518d\u6b21\u8ba2\u9605","resume_uns_expired_desc":"\u4f60\u7684\u8ba2\u9605\u5df2\u8fc7\u671f\uff0c7\u6298\u4f18\u60e0\u4ec5\u5728\u5230\u671f\u65e5\u4e4b\u524d\u6709\u6548\u3002\u4f46\u522b\u6025\uff0c\u5982\u60a8\u518d\u6b21\u8ba2\u9605\u4f1a\u5458\uff0c\u4ecd\u53ef\u4eab\u53d78\u6298\u4f18\u60e0!","resume_uns_expired_title":"\u4f18\u60e0\u5df2\u8fc7\u671f...\u4f46\u8fd8\u6709\u5176\u4ed6\u798f\u5229\uff01","resume_uns_mobile_download_app_title":"\u7acb\u5373\u83b7\u53d6Fotor App","resume_uns_month":"\u6708","resume_uns_nickname":"\u6635\u79f0\uff1a","resume_uns_payment_method":"\u652f\u4ed8\u65b9\u5f0f\uff1a","resume_uns_payment_method_value":"\u4fe1\u7528\u5361\u6216\u501f\u8bb0\u5361","resume_uns_scan_download_app_title":"\u626b\u63cf\u4e0b\u8f7dFotor App","resume_uns_status":"\u8ba2\u9605\u72b6\u6001\uff1a","resume_uns_status_cancel":"\u5df2\u53d6\u6d88","resume_uns_subscription_fee":"\u8ba2\u9605\u8d39\u7528\uff1a","resume_uns_subscription_plan":"\u8ba2\u9605\u5957\u9910\uff1a","resume_uns_success_button":"\u6211\u77e5\u9053\u4e86","resume_uns_success_desc":"\u60a8\u5df2\u7ecf\u6210\u529f\u6062\u590d\u4e86\u8ba2\u9605\u3002","resume_uns_success_title":"\u592a\u68d2\u4e86\uff01","resume_uns_top_title":"\u6062\u590d\u8ba2\u9605","resume_uns_year":"\u5e74","share_button_text":"\u5206\u4eab","unitMonth":"/\u6708","upload_background":"\u7acb\u5373\u4f53\u9a8c","upload_background_remover":"\u7acb\u5373\u62a0\u56fe","upload_fail":"\u6253\u5f00\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u3002","upload_format_custom":"\u4ec5\u652f\u6301\u6253\u5f00 {JPG\u3001PNG\u3001HEIC/HEIF \u548c WebP} \u683c\u5f0f\u56fe\u7247\u3002","upload_number_tip":"\u8be5\u9875\u9762\u652f\u6301\u6dfb\u52a0 1 \u5f20\u7167\u7247\u8fdb\u884c\u7f16\u8f91\uff0c\u60a8\u53ef\u4ee5\u524d\u5f80\u5de5\u5177\u540e\u6dfb\u52a0\u66f4\u591a\u7167\u7247\u3002","upload_start":"\u7acb\u5373\u5f00\u59cb","upload_sure":"\u786e\u8ba4","year_credit_discount_tip":"\u8282\u770170%","year_discount_tip":"\u8282\u770162%","copy_success":"\u590d\u5236\u6210\u529f","price_page_feature_title20":"\u4eba\u50cf\u6a21\u7cca\u4fee\u590d","price_page_feature_desc20":"\u667a\u80fd\u4fee\u590d\u6a21\u7cca\u4eba\u50cf\uff0c\u4e00\u952e\u53d8\u6e05\u6670\u3002","price_page_feature_title21":"\u667a\u80fd\u7f8e\u80a4","price_page_feature_desc21":"\u795e\u5947\u800c\u5b8c\u7f8e\u5730\u6539\u53d8\u4f60\u7684\u8096\u50cf\u548c\u7167\u7247\u3002\u53ea\u9700\u70b9\u51fb\u4e00\u4e0b\uff0c\u5373\u53ef\u5728\u7ebf\u4fee\u9970\u7167\u7247\uff0c\u5c55\u73b0\u5149\u5f69\u7167\u4eba\u7684 \\"\u4f60\\"\u3002","price_page_feature_title22":"AI \u6269\u56fe","price_page_feature_desc22":"\u4e00\u952e\u6269\u5c55\u7167\u7247\u5c3a\u5bf8\u3002\u81ea\u52a8\u6269\u5c55\u7167\u7247\u7684\u4e3b\u9898\u5185\u5bb9\u3001\u80cc\u666f\u548c\u7eb9\u7406\u3002","price_page_feature_title23":"AI \u5c40\u90e8\u91cd\u7ed8","price_page_feature_desc23":"\u66f4\u6539\u548c\u66ff\u6362\u7167\u7247\u4e2d\u7684\u5185\u5bb9\u3002","price_page_feature_title24":"\u65e7\u7167\u7247\u4fee\u590d","price_page_feature_desc24":"\u81ea\u52a8\u4fee\u590d\u635f\u574f\u3001\u6d88\u9664\u6a21\u7cca\u3001\u6062\u590d\u892a\u8272\u7684\u8272\u5f69\u548c\u7ec6\u8282\uff0c\u8ba9\u4f60\u7684\u65e7\u7167\u7247\u7115\u7136\u4e00\u65b0\u3002","price_page_feature_title25":"AI \u5934\u50cf","price_page_feature_desc25":"\u8f7b\u677e\u5feb\u901f\u5730\u521b\u5efa\u4e13\u4e1a\u3001\u6709\u521b\u610f\u3001\u903c\u771f\u7684\u9ad8\u6e05 AI \u5934\u50cf\u548c\u4e2a\u4eba\u8d44\u6599\u7167\u7247\u3002","price_page_feature_desc25_list_desc1":"5\u6298","price_page_feature_title26":"AI \u6362\u8138","price_page_feature_desc26":"\u4e0a\u4f20\u7167\u7247\u6362\u8138\uff0c\u5b9e\u73b0\u5b8c\u7f8e\u903c\u771f\u3001\u5929\u8863\u65e0\u7f1d\u7684 AI \u751f\u6210\u6362\u8138\u6548\u679c\uff0c\u6ee1\u8db3\u5404\u79cd\u5a31\u4e50\u9700\u6c42\u3002","price_page_feature_title27":"AI \u89c6\u9891\u589e\u5f3a","price_page_feature_desc27":"\u6539\u5584\u89c6\u9891\u8d28\u91cf\uff0c\u5305\u62ec\u9510\u5ea6\u3001\u4eae\u5ea6\u7b49\u8bbe\u7f6e\uff0c\u8ba9\u89c6\u9891\u66f4\u6e05\u6670\u3002","price_page_feature_desc27_list_desc1":"3\u79d2\uff0c\u666e\u6e05\u89c6\u9891","price_page_feature_desc27_list_desc2":"\u5168\u90e8\u65f6\u957f\uff0c\u9ad8\u6e05\u89c6\u9891","price_page_feature_title28":"AI \u89c6\u9891\u80cc\u666f\u79fb\u9664","price_page_feature_desc28":"\u53ea\u9700\u8f7b\u70b9\u4e00\u4e0b\uff0c\u5373\u53ef\u77ac\u95f4\u79fb\u9664\u4eba\u50cf\u89c6\u9891\u4e2d\u7684\u80cc\u666f\u3002","price_page_feature_desc28_list_desc1":"3\u79d2\uff0c\u666e\u6e05\u89c6\u9891","price_page_feature_desc28_list_desc2":"\u5168\u90e8\u65f6\u957f\uff0c\u9ad8\u6e05\u89c6\u9891","price_page_feature_title29":"AI \u6279\u91cf\u7f16\u8f91","price_page_feature_desc29":"AI \u6279\u91cf\u7f16\u8f91\u56fe\u7247\uff0c\u5982\u6279\u91cf\u53bb\u9664\u80cc\u666f\u3001\u6279\u91cf\u66f4\u6539\u80cc\u666f\u7b49\u3002","price_page_feature_desc29_list_desc1":"\u6700\u591a\u540c\u65f6\u5904\u74063\u5f20\u56fe\u7247","price_page_feature_desc29_list_desc2":"\u6700\u591a\u540c\u65f6\u5904\u740650\u5f20\u56fe\u7247","price_page_faq_credit_answer1":"\u79ef\u5206\u662f\u4e00\u79cd\u865a\u62df\u4ee3\u5e01\u5f62\u5f0f\uff0c\u60a8\u53ef\u4ee5\u8d2d\u4e70\u79ef\u5206\uff0c\u5e76\u7528\u4e8e\u652f\u4ed8Fotor\u7f51\u7ad9\u548cApp\u4e0a\u7684\u9ad8\u7ea7\u529f\u80fd\u548c\u670d\u52a1\u3002\u76ee\u524d\uff0c\u79ef\u5206\u53ef\u4ee5\u7528\u4e8eAI\u56fe\u50cf\u751f\u6210\u3001AI\u80cc\u666f\u751f\u6210\u3002","price_page_faq_credit_answer2":"\u53ea\u8981\u60a8\u4fdd\u6301\u8ba2\u9605\uff0c\u5f53\u6708\u672a\u4f7f\u7528\u5b8c\u7684\u8ba2\u9605\u79ef\u5206\u53ef\u4ee5\u6eda\u52a8\u7ed3\u8f6c\u5230\u4e0b\u4e2a\u6708\uff0c\u5e76\u4e14\u6700\u591a\u53ef\u4ee5\u7d2f\u79ef\u4e94\u4e2a\u6708\u3002\u4e00\u65e6\u60a8\u53d6\u6d88\u8ba2\u9605\uff0c\u60a8\u7684\u79ef\u5206\u5c06\u5728\u8ba2\u9605\u5230\u671f\u5f53\u5929\u5230\u671f\u3002","price_page_faq_credit_answer3":"\u5982\u679c\u60a8\u8d2d\u4e70\u4e86\u79ef\u5206\u8ba2\u9605\u5957\u9910\uff0c\u4f46\u79ef\u5206\u7528\u5b8c\u4e86\uff0c\u60a8\u53ef\u4ee5\u5347\u7ea7\u5230\u66f4\u591a\u79ef\u5206\u7684\u8ba2\u9605\u5957\u9910\uff0c\u4e5f\u53ef\u4ee5\u8d2d\u4e70\u4e00\u6b21\u6027\u79ef\u5206\u3002","price_page_faq_credit_answer4":"\u662f\u7684\uff0c\u60a8\u7684\u79ef\u5206\u53ef\u4ee5\u5728Fotor\u6240\u6709\u5e73\u53f0\u4e0a\u4f7f\u7528\uff0c\u5305\u62ecFotor\u7f51\u7ad9\u3001App\uff08iOS/Android\uff09\u548c\u684c\u9762\u8f6f\u4ef6\uff08Mac/Windows\uff09\u3002","price_page_faq_credit_answer5":"\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u53d6\u6d88\u60a8\u7684\u79ef\u5206\u8ba2\u9605\u5957\u9910\u3002","price_page_faq_credit_answer6":"\u60a8\u53ef\u4ee5\u4f7f\u7528PayPal\u6216\u94f6\u884c\u5361\u652f\u4ed8\u3002\u6211\u4eec\u652f\u6301Visa\u3001\u4e07\u4e8b\u8fbe\u3001\u7f8e\u56fd\u8fd0\u901a\u3001JCB\u7b49\u7684\u4fe1\u7528\u5361\u6216\u501f\u8bb0\u5361\u3002","price_page_faq_credit_answer7":"\u53ef\u4ee5\u3002\u7531\u4e8e\u4f1a\u5458\u5957\u9910\u8d60\u9001\u7684\u79ef\u5206\u6709\u9650\uff0c\u5982\u679c\u60a8\u9700\u8981\u66f4\u591a\u7684\u79ef\u5206\uff0c\u60a8\u53ef\u4ee5\u8ba2\u9605\u79ef\u5206\u5957\u9910\u6216\u8005\u5355\u6b21\u8d2d\u4e70\u79ef\u5206\u3002\u4f1a\u5458\u5957\u9910\u3001\u79ef\u5206\u5957\u9910\u5e76\u4e0d\u51b2\u7a81\uff0c\u53ef\u4ee5\u540c\u65f6\u5b58\u5728\u3002","price_page_faq_credit_question1":"\u79ef\u5206\u662f\u4ec0\u4e48\uff1f\u79ef\u5206\u53ef\u4ee5\u7528\u6765\u505a\u4ec0\u4e48\uff1f","price_page_faq_credit_question2":"\u79ef\u5206\u7684\u6709\u6548\u671f\u662f\u591a\u4e45\uff1f\u672a\u4f7f\u7528\u7684\u79ef\u5206\u53ef\u4ee5\u7d2f\u79ef\u5417\uff1f","price_page_faq_credit_question3":"\u5982\u679c\u6211\u7684\u79ef\u5206\u7528\u5b8c\u4e86\u600e\u4e48\u529e\uff1f","price_page_faq_credit_question4":"\u79ef\u5206\u53ef\u4ee5\u5728\u624b\u673a\u7aef\u4f7f\u7528\u5417\uff1f","price_page_faq_credit_question5":"\u6211\u53ef\u4ee5\u53d6\u6d88\u79ef\u5206\u8ba2\u9605\u5957\u9910\u5417\uff1f","price_page_faq_credit_question6":"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u652f\u4ed8\u65b9\u5f0f\uff1f","price_page_faq_credit_question7":"\u6211\u8ba2\u9605\u4e86\u4f1a\u5458\u5957\u9910\uff0c\u8fd8\u53ef\u4ee5\u518d\u8ba2\u9605\u79ef\u5206\u5957\u9910\u5417\uff1f","price_page_faq_member_answer1":"\u53ef\u4ee5\uff0cFotor\u6709\u5f88\u591a\u57fa\u7840\u7684\u514d\u8d39\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528\u3002\u4f46\u5982\u679c\u60a8\u60f3\u4f53\u9a8c\u9ad8\u7ea7\u529f\u80fd\u3001\u66f4\u591a\u7684\u7d20\u6750\u8d44\u6e90\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5347\u7ea7\u6210\u4e3aFotor Pro\u6216Fotor Pro+\u3002","price_page_faq_member_answer2":"Fotor Pro+\u5305\u542b\u4e86\u6240\u6709Fotor Pro\u7684\u6743\u76ca\u3002\u53e6\u5916\uff0cFotor Pro+\u989d\u5916\u7545\u4eab\u66f4\u591a\u9ad8\u6e05\u7248\u6743\u56fe\u7247\u7684\u5546\u7528\u7279\u6743\uff0cFotor Pro+\u8fd8\u53ef\u4ee5\u4f7f\u7528\u54c1\u724c\u5de5\u5177\u7bb1\u6765\u7ba1\u7406\u54c1\u724clogo\u3001\u989c\u8272\u548c\u5b57\u4f53\uff0c\u5e76\u4e14\u53ef\u4ee5\u4e0a\u4f20\u672c\u5730\u5b57\u4f53\u3002","price_page_faq_member_answer3":"\u662f\u7684\uff0cFotor Pro\u548cFotor Pro+\u90fd\u53ef\u4ee5\u8de8\u5e73\u53f0\u4f7f\u7528\u3002\u53ea\u8981\u4f60\u8d2d\u4e70\u4e86\u4f1a\u5458\u5957\u9910\uff0c\u4f60\u5c31\u53ef\u4ee5\u89e3\u9501Fotor\u7f51\u7ad9\u3001App\uff08iOS/Android\uff09 \u3001\u684c\u9762\u7aef\uff08Mac/Windows\uff09\u7684\u6240\u6709\u9ad8\u7ea7\u6743\u76ca\u3002\u4f60\u7684\u5de5\u7a0b\u6587\u4ef6\u4e5f\u4f1a\u540c\u6b65\u5230\u5404\u4e2a\u5e73\u53f0\uff0c\u4fbf\u4e8e\u60a8\u8de8\u5e73\u53f0\u4f7f\u7528\u3002","price_page_faq_member_answer4":"\u60a8\u53ef\u4ee5\u4f7f\u7528PayPal\u6216\u94f6\u884c\u5361\u652f\u4ed8\u3002\u6211\u4eec\u652f\u6301Visa\u3001\u4e07\u4e8b\u8fbe\u3001\u7f8e\u56fd\u8fd0\u901a\u3001JCB\u7b49\u7684\u4fe1\u7528\u5361\u6216\u501f\u8bb0\u5361\u3002","price_page_faq_member_answer5":"\u662f\u7684\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7\u90ae\u4ef6\u7ed9\u60a8\u53d1\u9001\u53d1\u7968\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6\u6216\u65e0\u6cd5\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u4e0b\u8f7d\u53d1\u7968\uff0c\u60a8\u53ef\u4ee5\u767b\u5f55Fotor\u7f51\u7ad9\uff0c\u70b9\u51fb\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u5934\u50cf\u5e76\u67e5\u627e\u4ed8\u6b3e\u5386\u53f2\u8bb0\u5f55\u2192 \u53d1\u7968\u3002\u53ea\u9700\u70b9\u51fb\u60a8\u9700\u8981\u7684\u53d1\u7968\uff0c\u7136\u540e\u4e0b\u8f7d\u5373\u53ef\u3002","price_page_faq_member_answer6":"\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u53d6\u6d88\u8ba2\u9605\u3002\u767b\u5f55Fotor\u7f51\u7ad9\uff0c\u70b9\u51fb\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u5934\u50cf\uff0c\u627e\u5230\u8ba2\u9605\u6309\u94ae\uff0c\u70b9\u51fb\u53d6\u6d88\u8ba2\u9605\uff0c\u7136\u540e\u6309\u7167\u6b65\u9aa4\u64cd\u4f5c\u5373\u53ef\u53d6\u6d88\u8ba2\u9605\u3002","price_page_faq_member_answer7":"\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u4ece\u6708\u5ea6\u5957\u9910\u5347\u7ea7\u5230\u5e74\u5ea6\u5957\u9910\uff0c\u6216\u4ecePro\u5347\u7ea7\u5230Pro+\u3002\u5982\u9700\u5347\u7ea7\uff0c\u8bf7\u767b\u5f55Fotor\u7f51\u7ad9\uff0c\u70b9\u51fb\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u5934\u50cf\uff0c\u627e\u5230\u8ba2\u9605\u6309\u94ae\uff0c\u60a8\u4f1a\u5728\u90a3\u91cc\u770b\u5230\u66f4\u6539\u5957\u9910\u7684\u9009\u9879\u3002","price_page_faq_member_answer8":"\u662f\u7684\uff0c\u8ba2\u9605\u5957\u9910\u5c06\u81ea\u52a8\u7eed\u8ba2\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u88ab\u6536\u53d6\u8d39\u7528\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u53d6\u6d88\u8ba2\u9605\uff0c\u76f4\u81f3\u672c\u6b21\u8ba2\u9605\u5468\u671f\u5230\u671f\uff1b\u5426\u5219\uff0c\u60a8\u5c06\u5728\u8ba2\u9605\u5468\u671f\u5230\u671f\u540e\u81ea\u52a8\u6263\u8d39\u3002","price_page_faq_member_answer9":"\u60a8\u53ef\u4ee5\u5728\u6211\u4eec\u7684AI\u56fe\u50cf\u751f\u6210\u5668\u3001AI\u80cc\u666f\u751f\u6210\u5668\u7b49\u5de5\u5177\u4e2d\u4f7f\u7528\u79ef\u5206\u3002\u7531\u4e8eAIGC\u76f8\u5173\u529f\u80fd\u7684\u670d\u52a1\u5668\u6210\u672c\u5f88\u9ad8\uff0c\u56e0\u6b64\u65e0\u6cd5\u63d0\u4f9b\u65e0\u9650\u4f7f\u7528\u3002\u5982\u679c\u60a8\u7684\u79ef\u5206\u7528\u5b8c\u4e86\uff0c\u60a8\u53ef\u4ee5\u8d2d\u4e70\u5355\u72ec\u7684\u79ef\u5206\u5957\u9910\u8fdb\u884c\u8865\u5145\u3002","price_page_faq_member_question1":"\u6211\u53ef\u4ee5\u514d\u8d39\u4f7f\u7528Fotor\u5417\uff1f","price_page_faq_member_question2":"Fotor Pro\u548cFotor Pro+\u6709\u4ec0\u4e48\u533a\u522b\uff1f","price_page_faq_member_question3":"\u6211\u7684\u4f1a\u5458\u5957\u9910\u652f\u6301\u5728\u79fb\u52a8\u7aef\u4f7f\u7528\u5417\uff1f","price_page_faq_member_question4":"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u652f\u4ed8\u65b9\u5f0f\uff1f","price_page_faq_member_question5":"\u8d2d\u4e70\u540e\u6709\u53d1\u7968\u5417\uff1f","price_page_faq_member_question6":"\u6211\u53ef\u4ee5\u53d6\u6d88\u8ba2\u9605\u5417\uff1f","price_page_faq_member_question7":"\u6211\u53ef\u4ee5\u5347\u7ea7\u5f53\u524d\u7684\u5957\u9910\u5417\uff1f","price_page_faq_member_question8":"\u6211\u7684\u8ba2\u9605\u5957\u9910\u4f1a\u81ea\u52a8\u7eed\u8ba2\u5417\uff1f","price_page_faq_member_question9":"\u8d2d\u4e70\u4f1a\u5458\u5957\u9910\u989d\u5916\u8d60\u9001\u7684\u79ef\u5206\u53ef\u4ee5\u7528\u6765\u505a\u4ec0\u4e48\uff1f","mobile_to_app_popup_title":"\u4e0b\u8f7dAPP\u8bd5\u8bd5\uff1f","mobile_to_app_popup_subtitle":"\u53bbApp\u83b7\u53d6\u66f4\u597d\u7684\u7f16\u8f91\u4f53\u9a8c\uff01","mobile_to_app_popup_button_stay":"\u7559\u5728\u7f51\u9875","mobile_to_app_popup_button_open":"\u6253\u5f00App","mobile_app_entry_pop_title":"\u60f3\u514d\u8d39\u4f53\u9a8cFotor\u4f1a\u5458\u5417\uff1f","mobile_app_entry_pop_content":"\u4e0b\u8f7dFotor App\uff0c\u83b7\u5f97\u66f4\u8f7b\u677e\u7684\u7f16\u8f91\u4f53\u9a8c\uff0c\u4eab\u53d7\u66f4\u591a\u4f1a\u5458\u529f\u80fd\u7684\u514d\u8d39\u8bd5\u7528\uff01\ud83d\udc47"}'),
                de_DE: JSON.parse('{"ai_textarea_placeholder":"Beschreiben Sie, was Sie m\xf6chten, dass die KI zeichnet.","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Benutzer","aigc_data_reveal_title2":"Bilder Generiert","aigc_data_reveal_title3":"Bewertung","back_to_top":"Nach oben scrollen","breadCrumbs_home":"Startseite","credits_unit":"/Kreditpunkt","drop_image_to_upload":"Bild hier ablegen","header_logo_hover_info":"Ziehen Sie das Logo in die Lesezeichenleiste,\\num beim n\xe4chsten Mal leichter auf Fodor zugreifen zu k\xf6nnen!","join_discord_title":"Klicken Sie hier, um Discord zu besuchen","mobile_open_app_fixed_popup_desc":"Genie\xdfen Sie eine bessere Bearbeitungserfahrung, ma\xdfgeschneidert f\xfcr Ihr mobiles Ger\xe4t!","mobile_to_app_cancel":"Nicht jetzt","mobile_to_app_desc":"Bearbeiten und entwerfen Sie Ihre Fotos unterwegs.","mobile_to_app_desc1":"Einfacher und schneller in den sozialen Medien teilen!","mobile_to_app_ok":"App entdecken","mobile_to_app_title":"Weiter in der App","mobile_to_more_text":"Mit der Bearbeitung und Gestaltung beginnen","more":"Mehr","more_templates_button":"Alle Vorlagen durchsuchen","original_before":"Vor","pointsActivityPage_activity_list_mobile_title":"Credits verdienen","pointsActivityPage_copied":"Kopiert","pointsActivityPage_copy":"kopieren","pointsActivityPage_credits":"Kredite:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Aufgabencenter","pointsActivityPage_desc":"Wenn Sie auf Fotor tun, was Sie gerne tun, k\xf6nnen Sie leicht und lustig mehr Belohnungen erhalten. Fangen Sie heute an, mit den Belohnungen von Fotor zu verdienen!","pointsActivityPage_download_app_text":"Laden Sie die Fotor App herunter und melden Sie sich an, um 5 kostenlose Credits in der App zu verdienen. Die verdienten Credits k\xf6nnen sowohl auf unserer Website als auch in der App verwendet werden!","pointsActivityPage_download_app_title":"App herunterladen","pointsActivityPage_my_credits_text":"Meine Credits","pointsActivityPage_novip_text":"Werden Sie Mitglied bei Fotor Pro und verdienen Sie doppelte Credits","pointsActivityPage_one_activity_type_mobile_text":"Einmalig verdienen","pointsActivityPage_receive_activity_button_mobile_text":"Verdienen","pointsActivityPage_receive_activity_button_text":"Credits verdienen","pointsActivityPage_receive_points_toast":"{numbers} Kredit(e) erhalten!","pointsActivityPage_received_activity_button_mobile_text":"Erhalten","pointsActivityPage_received_activity_button_text":"Empfangen","pointsActivityPage_share_link":"Link freigeben","pointsActivityPage_some_activity_type_mobile_text":"T\xe4glich verdienen","pointsActivityPage_svip_text":"Pro+ exklusive Belohnungen","pointsActivityPage_title":"Treten Sie Fotor bei und spielen Sie mit Fotor, um leicht Belohnungen zu erhalten | Fotor","pointsActivityPage_upgrade_button_text":"Aktualisieren","pointsActivityPage_username_prefix_text":"Hallo!","pointsActivityPage_vip_text":"Exklusive Pro-Credits-Belohnungen","pointsActivityPage_welcome":"Willkommen im Fotor Task Center!","pointsActivityPage_what_use_credits_mobile_text":"Sie k\xf6nnen Credits verwenden, um mit dem Fotor AI Image Generator AI-Bilder zu erzeugen. <a href=\\"https://www.fotor.com/images/create\\">Jetzt erstellen</a>","pointsActivityPage_what_use_credits_text":"Sie k\xf6nnen Credits verwenden, um mit dem <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a> eine Vielzahl von AI-Bildern zu erstellen, mit dem <a href=\\"https://www.fotor.com/de/features/background-remover/upload\\">Fotor Background Remover</a> atemberaubende Hintergr\xfcnde f\xfcr Ihre Ausschnitte zu erstellen und mit <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a> einzigartige Designs zu entwerfen, indem Sie Ihre eigenen Elemente oder Bilder generieren. Die Erstellung eines KI-Bildes verbraucht 1 oder 2 Kreditepunkte in diesen Tools.","pointsActivityPage_what_use_credits_title":"Was kann ich mit den Credits machen?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Jetzt erstellen","pointsActivityPage_what_use_credits_to_link_text":"Jetzt generieren","preview_upload_limit_size":"Das Hochladen ist aufgrund der zu gro\xdfen Bild- oder Dateigr\xf6\xdfe fehlgeschlagen.{link}.","preview_upload_more":"Erfahre mehr","price_monthly_switch":"Monatlich","price_page_activity_btn_discount":"Aktualisieren Sie mit {discount_en} % Rabatt","price_page_billed_annually":"j\xe4hrlich abgerechnet","price_page_buy_now":"Jetzt kaufen","price_page_credits_once_info":"Credits k\xf6nnen innerhalb von zwei Jahren nach dem Kauf jederzeit eingel\xf6st werden.","price_page_credits_plans":"Kredite Pl\xe4ne","price_page_credits_subscribe_info":"Ungenutzte Guthaben werden \xfcbertragen, solange Sie ein Abonnement haben, bis zu 5 Monate lang.","price_page_feature_desc1":"Dazu geh\xf6ren die grundlegenden Anpassungs- und Sch\xf6nheitsfunktionen sowie partielle Effekte, Filter und Rahmen.","price_page_feature_desc10":"Verwandeln Sie Fotos in Skizzen, \xd6lgem\xe4lde, Aquarelle, Karikaturen und andere Arten von Bildern.","price_page_feature_desc10_list_desc1":"Nicht-HD-Download mit Wasserzeichen","price_page_feature_desc10_list_desc2":"HD-Download ohne Wasserzeichen","price_page_feature_desc11":"Verwandlung von Schwarz-Wei\xdf-Fotos in farbige Fotos.","price_page_feature_desc12":"Gebrauchsfertige Vorlagen f\xfcr Plakate, Karten, Beitr\xe4ge in sozialen Medien und andere grafische Designanl\xe4sse.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Urheberrechtlich gesch\xfctzte Schriftarten in verschiedenen Stilen.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & Schriftarten hochladen","price_page_feature_desc13_list_desc3":"523 & Schriftarten hochladen","price_page_feature_desc14":"Dazu geh\xf6ren Hintergr\xfcnde, Fotos, Illustrationen, Icons, Muster und andere Elemente und Aufkleber.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud-Speicherplatz f\xfcr Ihre Projekte und Uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"Dateiformate, in denen Bilder heruntergeladen werden k\xf6nnen.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"Hochaufl\xf6sende JPG/ PNG/ PDF & transparentes PNG","price_page_feature_desc17":"Verwalten Sie Markendesigns mit einheitlichen Schriftarten, Logos und Farben. Eigene Schriftarten hochladen k\xf6nnen.","price_page_feature_desc18":"Genie\xdfen Sie eine gr\xf6\xdfere Leinwand ohne Ablenkung durch Werbung.","price_page_feature_desc19":"Erhalten Sie kostenlose Credits f\xfcr AIGC-bezogene Funktionen.","price_page_feature_desc19_list_desc1":"100 Kreditpunkte/Monat","price_page_feature_desc19_list_desc2":"300 Kreditpunkte/Monat","price_page_feature_desc2":"Einschlie\xdflich teilweiser kreativer Ressourcen und Bearbeitungsfunktionen im Design-Tool.","price_page_feature_desc3":"Einschlie\xdflich partieller Collagenvorlagen und Bearbeitungsfunktionen im Collagenwerkzeug.","price_page_feature_desc4":"Inklusive aller fortschrittlichen Bearbeitungsfunktionen wie HSL, Denoise, Farbumkehr, Gl\xe4ttung, Umformung sowie aller Premium-Filter und Rahmen.","price_page_feature_desc5":"Stapelverarbeitung mehrerer Bilder, z. B. Zuschneiden, Gr\xf6\xdfe \xe4ndern, Text hinzuf\xfcgen, Dateiformat \xe4ndern.","price_page_feature_desc6":"Entsch\xe4rfen Sie auf intelligente Weise die Unsch\xe4rfe von Bildern, indem Sie die Fotoaufl\xf6sung erh\xf6hen, die Bilddetails sch\xe4rfen und die Bildqualit\xe4t verbessern.","price_page_feature_desc7":"Sofortiges Entfernen von Bildhintergr\xfcnden mit einem Klick. Auch in der Lage sein, den Hintergrund mit jeder Farbe und Bild zu \xe4ndern.","price_page_feature_desc8":"Entfernen Sie unerw\xfcnschte Objekte, Text und Wasserzeichen aus dem Foto, und AI f\xfcllt den verbleibenden Bildinhalt auf intelligente Weise auf.","price_page_feature_desc9":"AI generiert Bilder aus Textvorgaben oder Bildern.","price_page_feature_title1":"Grundlegende Bearbeitungsfunktionen","price_page_feature_title10":"AI-Fotoeffekt","price_page_feature_title11":"AI Einf\xe4rben","price_page_feature_title12":"Schablonen","price_page_feature_title13":"Schriftarten","price_page_feature_title14":"Kreative Ressourcen","price_page_feature_title15":"Cloud-Speicher","price_page_feature_title16":"Dateiformat","price_page_feature_title17":"Marke Kits","price_page_feature_title18":"Werbefrei","price_page_feature_title19":"Zus\xe4tzliche Kredite","price_page_feature_title2":"Grundlegende Konstruktionsmerkmale","price_page_feature_title3":"Grundlegende Collagenlayouts und Funktionen","price_page_feature_title4":"Erweiterte Bearbeitungsfunktionen","price_page_feature_title5":"Batch-Bearbeitung","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Hintergrund-Entferner","price_page_feature_title8":"AI-Objekt-Entferner","price_page_feature_title9":"KI-generierte Inhalte","price_page_free_info":"Free","price_page_free_trial":"Kostenlose Testversion","price_page_most_popular":"Am beliebtesten","price_page_one_time_payment":"Einzelkauf","price_page_platform_title":"Plattform\xfcbergreifend verf\xfcgbar","price_page_premium_plans":"Premium-Pl\xe4ne","price_page_subscribe_now":"Jetzt abonnieren","price_page_subscription_plan":"Monats-Abo","price_page_try_now":"Jetzt ausprobieren","price_yearly_switch":"J\xe4hrlich","read_aigc_tips_title":"Klicken Sie hier, um AIGC-Tipps zu lesen","result_after":"Nach","resume_uns_active_button":"Ok, ich hab\'s erhalten","resume_uns_active_desc":"Das aktuelle Angebot wurde in Anspruch genommen und Sie k\xf6nnen bereits den verg\xfcnstigten Abonnementpreis genie\xdfen.","resume_uns_active_title":"Sie haben das Angebot in Anspruch genommen!","resume_uns_button":"Wiederherstellung des Abonnements mit 30% Rabatt","resume_uns_card_number":"Kartennummer:","resume_uns_click_download_app_title":"Desktop-App herunterladen","resume_uns_desc":"Nach der Wiederherstellung Ihres Abonnements stellen wir Ihnen den Betrag nicht sofort in Rechnung, sondern erst zum Ablaufdatum des Abonnements. Von diesem Zeitpunkt an erhalten Sie einen Rabatt von 30% auf Ihre Abonnementgeb\xfchr.","resume_uns_discounted_subscription_fee":"Erm\xe4\xdfigte Abonnementgeb\xfchr:","resume_uns_download_app_title":"Genie\xdfen Sie die Premium-Vorteile von Fotor auf allen Ger\xe4ten!","resume_uns_download_button":"Herunterladen","resume_uns_email":"Email:","resume_uns_expiration_date":"Ablaufdatum:","resume_uns_expired_button":"Abonnieren Sie mit 20% Rabatt","resume_uns_expired_desc":"Ihr Abonnement ist abgelaufen und das 30%-Rabattangebot ist nur vor dem Ablaufdatum g\xfcltig. Sie k\xf6nnen jedoch weiterhin ein beliebiges Premium-Abo mit 20% Rabatt abschlie\xdfen!","resume_uns_expired_title":"Abonnements laufen ab... Aber es gibt noch andere Angebote!","resume_uns_mobile_download_app_title":"Holen Sie sich jetzt die Fotor-App","resume_uns_month":"Monat","resume_uns_nickname":"Spitzname:","resume_uns_payment_method":"Zahlungsmethode:","resume_uns_payment_method_value":"Kredit- oder Debitkarte","resume_uns_scan_download_app_title":"Scannen, um die Fotor-App herunterzuladen","resume_uns_status":"Status des Abonnements:","resume_uns_status_cancel":"Gek\xfcndigt","resume_uns_subscription_fee":"Abonnementgeb\xfchr:","resume_uns_subscription_plan":"Abonnement-Plan:","resume_uns_success_button":"Ok, ich hab\'s erhalten","resume_uns_success_desc":"Sie haben das Abonnement jetzt erfolgreich wiederhergestellt.","resume_uns_success_title":"Gro\xdfartig!","resume_uns_top_title":"Abonnement Wiederherstellen","resume_uns_year":"Jahr","share_button_text":"Teilen","unitMonth":"/monat","upload_background":"Jetzt ausprobieren!","upload_background_remover":"Jetzt ausprobieren!","upload_fail":"Das Bild konnte nicht ge\xf6ffnet werden. Bitte versuchen Sie es erneut.","upload_format_custom":"Nur {JPG, PNG,HEIC/HEIF und WebP} werden zum \xd6ffnen unterst\xfctzt.","upload_number_tip":"Diese Seite unterst\xfctzt nur das Hinzuf\xfcgen von 1 Foto zur Bearbeitung. Sie k\xf6nnen in unserem Bearbeitungstool weitere Fotos hinzuf\xfcgen.","upload_start":"Jetzt beginnen\uff01","upload_sure":"Ersetzen","year_credit_discount_tip":"Sparen Sie 70%","year_discount_tip":"Sparen Sie 62 %","copy_success":"Kopiert","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unsch\xe4rfe entfernen und Portr\xe4tfoto sch\xe4rfen.","price_page_feature_title21":"AI Haut retuschieren","price_page_feature_desc21":"Verwandeln Sie Ihre Portr\xe4ts und Fotos auf magische und makellose Weise. Retuschieren Sie Fotos online und enth\xfcllen Sie Ihr strahlendes Ich mit nur einem Klick.","price_page_feature_title22":"AI Erweitern","price_page_feature_desc22":"Erweitern Sie die Dimensionen Ihrer Fotos mit einem einzigen Klick. Erweitern Sie automatisch Motivinhalte, Hintergr\xfcnde und Texturen Ihrer Fotos.","price_page_feature_title23":"AI Ersetzen","price_page_feature_desc23":"\xc4ndern und ersetzen Sie Objekte in Ihren Fotos.","price_page_feature_title24":"Alte Fotos restaurieren","price_page_feature_desc24":"Reparieren Sie automatisch Sch\xe4den, entfernen Sie Unsch\xe4rfen und stellen Sie verblasste Farben und Details wieder her, um Ihr altes Foto in ein neues Foto zu verwandeln.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Erstellen Sie schnell und einfach professionelle, kreative und realistische HD AI Headshots und Profilbilder.","price_page_feature_desc25_list_desc1":"50% Erm\xe4\xdfigung","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Laden Sie Ihre Fotos hoch und tauschen Sie das Gesicht aus. Erzielen Sie einen perfekt realistischen und nahtlosen AI-generierten Gesichtstausch f\xfcr jede Art von Unterhaltung.","price_page_feature_title27":"AI Video-Verbesserung","price_page_feature_desc27":"Sofortige Verbesserung der Videoqualit\xe4t, einschlie\xdflich Einstellungen f\xfcr Sch\xe4rfe, Helligkeit usw., um Videos klarer zu machen.","price_page_feature_desc27_list_desc1":"3s\uff0cVorschau-Video","price_page_feature_desc27_list_desc2":"Vollzeit\uff0cHD-Video","price_page_feature_title28":"AI Video Hintergrundentferner","price_page_feature_desc28":"Entfernen Sie den Hintergrund von Hochformatvideos mit einem einzigen Fingertipp. ","price_page_feature_desc28_list_desc1":"3s\uff0cVorschau Video","price_page_feature_desc28_list_desc2":"Vollzeit, HD-Video","price_page_feature_title29":"AI Batch-Bearbeitung","price_page_feature_desc29":"AI Batch-Bearbeitung wie Batch-Hintergrund-Entferner, Batch-Hintergrund \xe4ndern und so weiter.","price_page_feature_desc29_list_desc1":"Bis zu 3 Bilder auf einmal","price_page_feature_desc29_list_desc2":"Bis zu 50 Bilder auf einmal","price_page_faq_credit_answer1":"Credits sind eine Form von virtuellen Token, die Sie mit echtem Geld kaufen und f\xfcr Premium-Funktionen und -Dienste auf der Website und in den Anwendungen von Fotor verwenden k\xf6nnen. Derzeit k\xf6nnen Credits f\xfcr die Erstellung von AI-Bildern, AI-Hintergr\xfcnden usw. verwendet werden.","price_page_faq_credit_answer2":"Guthaben f\xfcr Abonnements, die im laufenden Monat nicht aufgebraucht werden, k\xf6nnen auf den n\xe4chsten Monat \xfcbertragen werden, solange Sie Ihr Abonnement aufrechterhalten, und k\xf6nnen bis zu f\xfcnf Monate lang angesammelt werden. Sobald Sie das Abonnement k\xfcndigen, verfallen Ihre Guthaben an dem Tag, an dem das Abonnement ausl\xe4uft. Gutschriften f\xfcr einmalige Zahlungen sind zwei Jahre nach dem Kauf g\xfcltig.","price_page_faq_credit_answer3":"Wenn Sie einen Abo-Plan mit Guthaben kaufen und das Guthaben aufgebraucht ist, k\xf6nnen Sie entweder auf einen h\xf6heren Plan mit mehr Guthaben pro Monat umsteigen oder Sie k\xf6nnen einmalig Guthaben kaufen, um es wieder aufzuf\xfcllen.","price_page_faq_credit_answer4":"Ja, Ihre Credits k\xf6nnen auf allen Plattformen verwendet werden, einschlie\xdflich der Fotor-Website, mobilen Apps (iOS/Android) und Desktop-Software (Mac/Windows).","price_page_faq_credit_answer5":"Ja, Sie k\xf6nnen Ihr Abonnement jederzeit k\xfcndigen.","price_page_faq_credit_answer6":"Um Fotor Premium-Pl\xe4ne zu abonnieren, k\xf6nnen Sie per Paypal oder Kreditkarte bezahlen. Wir akzeptieren Kredit-oder Debitkarte von folgenden: Visa, Mastercard, American Express, JCB, und mehr.","price_page_faq_credit_answer7":"Ja, das kannst du. Da die Anzahl der Credits in den Premium-Pl\xe4nen begrenzt ist, k\xf6nnen Sie, wenn Sie mehr Credits ben\xf6tigen, einen Credit Plan abonnieren oder einmalige Credits kaufen. Der Premium-Plan und der Credits-Plan k\xf6nnen nebeneinander existieren und stehen nicht in Konflikt.","price_page_faq_credit_question1":"Was sind Guthaben und was kann ich mit Guthaben machen?","price_page_faq_credit_question2":"Wie lange sind die Gutschriften g\xfcltig, und k\xf6nnen ungenutzte Gutschriften angesammelt werden?","price_page_faq_credit_question3":"Was ist, wenn ich kein Guthaben mehr habe?","price_page_faq_credit_question4":"Funktioniert mein Guthaben auch auf dem Handy?","price_page_faq_credit_question5":"Kann ich mein Guthaben-Abonnement k\xfcndigen?","price_page_faq_credit_question6":"Welche Zahlungsmittel kann ich verwenden?","price_page_faq_credit_question7":"Wenn ich die Premium-Pl\xe4ne abonniert habe, kann ich die Credits-Pl\xe4ne abonnieren?","price_page_faq_member_answer1":"Ja, es gibt viele grundlegende Funktionen, die kostenlos genutzt werden k\xf6nnen. F\xfcr eine fortgeschrittene Erfahrung empfehlen wir jedoch unsere Premium-Pl\xe4ne.","price_page_faq_member_answer2":"Der Fotor Pro+ Plan beinhaltet alle erweiterten Funktionen von Fotor Pro. Dar\xfcber hinaus bietet der Pro+-Tarif einen gr\xf6\xdferen Cloud-Speicherplatz und 1.000.000 HD-Fotos f\xfcr die private und kommerzielle Nutzung. Die Brand Kits sind auch exklusiv f\xfcr den Pro+ Plan f\xfcr diejenigen, die Markenschriften, Logos und Farben verwalten m\xfcssen, um Markenmaterialien zu entwerfen.","price_page_faq_member_answer3":"Ja, Fotor Pro- und Pro+-Abonnements sind auf allen Plattformen verf\xfcgbar. Das bedeutet, dass Sie mit einem Pro- oder Pro+-Konto alle erweiterten Funktionen der Fotor-Website, der mobilen Apps (iOS/Android) und der Desktop-Software (Mac/Windows) nutzen k\xf6nnen. Ihre Designs und Collage-Projekte k\xf6nnen auch ger\xe4te\xfcbergreifend synchronisiert werden.","price_page_faq_member_answer4":"Um Fotor Premium-Pl\xe4ne zu abonnieren, k\xf6nnen Sie per Paypal oder Kreditkarte bezahlen. Wir akzeptieren Kredit-oder Debitkarte von folgenden: Visa, Mastercard, American Express, JCB, und mehr.","price_page_faq_member_answer5":"Ja, wir verschicken Rechnungen f\xfcr jeden Abzug per E-Mail. Wenn Sie keine E-Mail erhalten oder nicht in der Lage sind, sie per E-Mail herunterzuladen, k\xf6nnen Sie sich auf der Fotor-Website anmelden, auf Ihr Profilavatar klicken und Zahlungsverlauf \u2192 Rechnungen aufrufen. Klicken Sie einfach auf die gew\xfcnschte Rechnung und laden Sie sie herunter.","price_page_faq_member_answer6":"Ja, Sie k\xf6nnen das Abonnement jederzeit k\xfcndigen. Melden Sie sich auf der Fotor-Website an, klicken Sie auf Ihr Profil-Avatar, suchen Sie die Schaltfl\xe4che \\"Abonnement\\", klicken Sie auf \\"Abonnement k\xfcndigen\\" und folgen Sie den Schritten, um das Abonnement zu k\xfcndigen.","price_page_faq_member_answer7":"Ja, Sie k\xf6nnen jederzeit von einem Monatstarif auf einen Jahrestarif oder von Pro auf Pro+ wechseln. Melden Sie sich dazu auf der Fotor-Website an, klicken Sie auf Ihr Profil-Avatar, suchen Sie den Punkt \\"Abonnement\\" und Sie sehen dort die Option \\"Plan \xe4ndern\\".","price_page_faq_member_answer8":"Ja, das Abonnement wird automatisch verl\xe4ngert. Wenn Sie keine Rechnung erhalten m\xf6chten, k\xf6nnen Sie Ihr Abonnement bis zum Ablaufdatum k\xfcndigen; andernfalls werden Sie automatisch am Datum Ihres Abonnementzyklus belastet.","price_page_faq_member_answer9":"Sie k\xf6nnen Credits f\xfcr die Erzeugung von AI-Bildern in unserem AI Image Generator, AI Background Generator usw. verwenden. Da die AIGC-bezogenen Funktionen mit hohen Serverkosten verbunden sind, k\xf6nnen sie nicht in den Abonnementplan f\xfcr unbegrenzte Nutzung aufgenommen werden. Wenn Ihnen die Credits ausgehen, k\xf6nnen Sie zur Aufstockung separate Credits-Pl\xe4ne erwerben.","price_page_faq_member_question1":"Kann ich Fotor kostenlos benutzen\uff1f","price_page_faq_member_question2":"Was ist der Unterschied zwischen Fotor Pro und Fotor Pro+?","price_page_faq_member_question3":"Funktioniert mein Fotor-Abonnement auch auf dem Handy?","price_page_faq_member_question4":"Welche Zahlungsmittel kann ich verwenden?","price_page_faq_member_question5":"Kann ich eine Rechnung erhalten?","price_page_faq_member_question6":"Kann ich mein Abonnement k\xfcndigen?","price_page_faq_member_question7":"Kann ich meinen aktuellen Tarif aufr\xfcsten\uff1f","price_page_faq_member_question8":"Wird mein Abonnement automatisch verl\xe4ngert?","price_page_faq_member_question9":"Was kann ich mit dem zus\xe4tzlichen Guthaben tun, das in den Premium-Tarifen enthalten ist?","mobile_to_app_popup_title":"In der App fortfahren?","mobile_to_app_popup_subtitle":"Genie\xdfen Sie eine bessere Erfahrung, die speziell auf Ihr mobiles Ger\xe4t zugeschnitten ist!","mobile_to_app_popup_button_stay":"Bleiben Sie auf dem Web","mobile_to_app_popup_button_open":"App \xf6ffnen","mobile_app_entry_pop_title":"M\xf6chtest du Fotor Pro kostenlos ausprobieren?","mobile_app_entry_pop_content":"Laden Sie die Fotor App herunter f\xfcr einfachere Bearbeitung und eine kostenlose Testversion der Profi-Funktionen! \ud83d\udc47"}'),
                es_ES: JSON.parse('{"ai_textarea_placeholder":"Describe lo que quieres que dibuje la IA","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Usuarios","aigc_data_reveal_title2":"Im\xe1genes Generadas","aigc_data_reveal_title3":"Calificaci\xf3n","back_to_top":"Vuelve al comienzo","breadCrumbs_home":"Inicio","credits_unit":"/Cr\xe9dito","drop_image_to_upload":"Soltar imagen aqu\xed","header_logo_hover_info":"\xa1Arrastre el logo dentro de la barra de favorito\\npara visitar Fotor m\xe1s facil la pr\xf3xima vez!","join_discord_title":"Haga clic para visitar Discord","mobile_open_app_fixed_popup_desc":"\xa1disfruta de una mejor experiencia de edici\xf3n adaptada a tu dispositivo m\xf3vil!","mobile_to_app_cancel":"Ahora no","mobile_to_app_desc":"\xa1Edita y dise\xf1a tus fotos en cualquier lugar.","mobile_to_app_desc1":"\xa1Comp\xe1rtelo en las redes sociales de forma flu\xedda y sencilla!","mobile_to_app_ok":"Explorar la aplicaci\xf3n","mobile_to_app_title":"Continuar en la aplicaci\xf3n","mobile_to_more_text":"Empieza a editar y dise\xf1ar","more":"M\xe1s","more_templates_button":"Explorar todas las plantillas","original_before":"Antes","pointsActivityPage_activity_list_mobile_title":"Ganar cr\xe9ditos","pointsActivityPage_copied":"Copiado de","pointsActivityPage_copy":"Copiar","pointsActivityPage_credits":"Cr\xe9ditos:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Centro de tareas","pointsActivityPage_desc":"Hacer lo que te gusta en Fotor te permite obtener m\xe1s recompensas de forma f\xe1cil y divertida. \xa1Empieza a ganar con las recompensas de Fotor hoy mismo!","pointsActivityPage_download_app_text":"Descarga Fotor App y reg\xedstrate para ganar 5 cr\xe9ditos gratis en la App. Los cr\xe9ditos obtenidos se pueden utilizar tanto en nuestro sitio web como en la aplicaci\xf3n.","pointsActivityPage_download_app_title":"Descargar App","pointsActivityPage_my_credits_text":"Mis cr\xe9ditos","pointsActivityPage_novip_text":"\xdanete a Fotor Pro para ganar el doble de cr\xe9ditos","pointsActivityPage_one_activity_type_mobile_text":"Ganar una vez","pointsActivityPage_receive_activity_button_mobile_text":"Gane","pointsActivityPage_receive_activity_button_text":"Ganar cr\xe9ditos","pointsActivityPage_receive_points_toast":"\xa1Ha recibido {numbers} cr\xe9dito(s)!","pointsActivityPage_received_activity_button_mobile_text":"Recibido","pointsActivityPage_received_activity_button_text":"Recibido","pointsActivityPage_share_link":"Compartir enlace","pointsActivityPage_some_activity_type_mobile_text":"Ganar diariamente","pointsActivityPage_svip_text":"Recompensas de cr\xe9ditos exclusivos Pro","pointsActivityPage_title":"\xdanete a Fotor y juega con Fotor para obtener recompensas f\xe1cilmente | Fotor","pointsActivityPage_upgrade_button_text":"Actualizar","pointsActivityPage_username_prefix_text":"Hola,","pointsActivityPage_vip_text":"Recompensas exclusivas de cr\xe9ditos Pro","pointsActivityPage_welcome":"\xa1Bienvenido al Centro de Tareas de Fotor!","pointsActivityPage_what_use_credits_mobile_text":"Puede utilizar cr\xe9ditos para generar im\xe1genes AI con el Generador de im\xe1genes AI de Fotor. <a href=\\"https://www.fotor.com/images/create\\">Crear ahora</a>","pointsActivityPage_what_use_credits_text":"Puede utilizar los cr\xe9ditos para generar una amplia gama de im\xe1genes AI con el <a href=\\"https://www.fotor.com/images/create\\">Generador de im\xe1genes AI de Fotor</a>, crear impresionantes fondos para sus recortes en <a href=\\"https://www.fotor.com/es/features/background-remover/upload\\">Fotor Background Remover</a> y crear dise\xf1os \xfanicos generando sus propios elementos o im\xe1genes en <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. Generar una imagen AI consume 1 o 2 cr\xe9ditos en esas herramientas.","pointsActivityPage_what_use_credits_title":"\xbfQu\xe9 puedo hacer con los cr\xe9ditos?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Crear ahora","pointsActivityPage_what_use_credits_to_link_text":"Generar ahora","preview_upload_limit_size":"La carga fall\xf3 debido al tama\xf1o excesivo de la imagen o del archivo.{link}.","preview_upload_more":"Saber m\xe1s","price_monthly_switch":"Mensual","price_page_activity_btn_discount":"Cambiarse con un descuento del {discount_en}%","price_page_billed_annually":"facturado anualmente","price_page_buy_now":"Compra ya","price_page_credits_once_info":"Cr\xe9ditos disponibles para su uso en cualquier momento dentro de los dos a\xf1os posteriores a la compra.","price_page_credits_plans":"Paquete de Puntos","price_page_credits_subscribe_info":"Los cr\xe9ditos no utilizados se acumular\xe1n mientras est\xe9 suscrito, hasta 5 meses de acumulaci\xf3n.","price_page_feature_desc1":"Incluyendo funciones b\xe1sicas de ajuste y belleza, as\xed como efectos parciales, filtros y marcos.","price_page_feature_desc10":"Transformar fotos en bocetos, pinturas al \xf3leo, acuarelas, caricaturas y otros tipos de pinturas.","price_page_feature_desc10_list_desc1":"Descargar no HD con marca de agua","price_page_feature_desc10_list_desc2":"Descargar HD sin marca de agua","price_page_feature_desc11":"Convertir fotos en blanco y negro en fotos a color.","price_page_feature_desc12":"Plantillas listas para usar para carteles, tarjetas, publicaciones en redes sociales y otras ocasiones de dise\xf1o gr\xe1fico.","price_page_feature_desc12_list_desc1":"50.000+","price_page_feature_desc12_list_desc2":"100.000+","price_page_feature_desc13":"Fuentes con derechos de autor en varios estilos.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & carga de fuentes","price_page_feature_desc13_list_desc3":"523 & carga de fuentes","price_page_feature_desc14":"Incluyendo fondos, fotos, ilustraciones, iconos, patrones y otros elementos y pegatinas.","price_page_feature_desc14_list_desc1":"30.000+","price_page_feature_desc14_list_desc2":"60.000+","price_page_feature_desc15":"Capacidad de almacenamiento en la nube para sus proyectos y cargas.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"Formatos de archivo en los que se pueden descargar im\xe1genes.","price_page_feature_desc16_list_desc1":"JPG / PNG / PDF normal","price_page_feature_desc16_list_desc2":"JPG / PNG / PDF de alta resoluci\xf3n y PNG transparente","price_page_feature_desc17":"Administrar dise\xf1os de marca con fuentes, logotipos y colores unificados. Poder subir tus propias fuentes.","price_page_feature_desc18":"Disfrutar de una pantalla m\xe1s grande sin distracciones publicitarias.","price_page_feature_desc19":"Obtener cr\xe9ditos gratuitos para funciones relacionadas con AIGC.","price_page_feature_desc19_list_desc1":"100 Cr\xe9ditos/Mes","price_page_feature_desc19_list_desc2":"300 Cr\xe9ditos/Mes","price_page_feature_desc2":"Incluyendo recursos creativos parciales y funciones de edici\xf3n en la herramienta de dise\xf1o.","price_page_feature_desc3":"Incluyendo plantillas parciales de collage y funciones de edici\xf3n en la herramienta de collage.","price_page_feature_desc4":"Incluyendo todas las funciones de edici\xf3n avanzadas, como HSL, cancelaci\xf3n de ruido, color inverso, rejuvenecimiento de la piel, escultura y m\xe1s, as\xed como todos los filtros y bordes avanzados.","price_page_feature_desc5":"Editar varias im\xe1genes en lote, como recortar, cambiar tama\xf1o, agregar texto, cambiar el formato de archivo.","price_page_feature_desc6":"Hacer que fotos sean m\xe1s n\xedtidas, aumentando su resoluci\xf3n, enfocando los detalles de la imagen y mejorando la calidad de la imagen.","price_page_feature_desc7":"Eliminaci\xf3n instant\xe1nea de fondos de im\xe1genes con un solo clic. Adem\xe1s, se puede cambiar el fondo con cualquier color e imagen.","price_page_feature_desc8":"Eliminar objetos no deseados, texto y marcas de agua de las fotos, y AI llenar\xe1 inteligentemente el contenido restante de la imagen.","price_page_feature_desc9":"AI genera im\xe1genes a partir de indicaciones de texto o im\xe1genes.","price_page_feature_title1":"Funciones B\xe1sicas de Edici\xf3n","price_page_feature_title10":"Efectos de Fotos AI","price_page_feature_title11":"Colorizaci\xf3n AI","price_page_feature_title12":"Plantillas","price_page_feature_title13":"Fuentes","price_page_feature_title14":"Recursos Creativos","price_page_feature_title15":"Almacenamiento en la Nube","price_page_feature_title16":"Formato de Archivo","price_page_feature_title17":"Kits de Marca","price_page_feature_title18":"Sin publicidad","price_page_feature_title19":"Cr\xe9ditos Adicionales","price_page_feature_title2":"Funciones B\xe1sicas de Dise\xf1o","price_page_feature_title3":"Dise\xf1os y Funciones B\xe1sicas de Collage","price_page_feature_title4":"Funciones Avanzadas de Edici\xf3n","price_page_feature_title5":"Edici\xf3n por Lotes","price_page_feature_title6":"Editor de Fotos AI","price_page_feature_title7":"Remoci\xf3n de Fondo AI","price_page_feature_title8":"Eliminador de Objetos AI","price_page_feature_title9":"Contenido Generado por AI","price_page_free_info":"Free","price_page_free_trial":"Prueba gratis","price_page_most_popular":"M\xe1s Popular","price_page_one_time_payment":"Pago por cr\xe9dito","price_page_platform_title":"Disponible en todas las plataformas.","price_page_premium_plans":"Paquete de Membres\xeda","price_page_subscribe_now":"Suscr\xedbete ahora","price_page_subscription_plan":"Plan de suscripci\xf3n","price_page_try_now":"Probar Ahora","price_yearly_switch":"Anual","read_aigc_tips_title":"Haga clic para leer los consejos de AIGC","result_after":"Despu\xe9s","resume_uns_active_button":"Bien, entendido","resume_uns_active_desc":"Se ha reclamado la oferta actual y ya puede disfrutar del precio de suscripci\xf3n con descuento.","resume_uns_active_title":"\xa1Has reclamado la oferta!","resume_uns_button":"Suscripci\xf3n renovada con un 30% de Descuento","resume_uns_card_number":"N\xfamero de tarjeta:","resume_uns_click_download_app_title":"Descargar aplicaci\xf3n de escritorio","resume_uns_desc":"Una vez restablecida la suscripci\xf3n no se le cobrar\xe1 enseguida, sino en la fecha de vencimiento de la adhesi\xf3n. En adelante, obtendr\xe1 un 30% de descuento en su cuota de abonado.","resume_uns_discounted_subscription_fee":"Descuento en la Cuota de Abono:","resume_uns_download_app_title":"Disfruta de las ventajas premium de Fotor en todos tus dispositivos!","resume_uns_download_button":"Descargar","resume_uns_email":"Email:","resume_uns_expiration_date":"Fecha de Validez:","resume_uns_expired_button":"Ab\xf3nese con un 20% de Descuento","resume_uns_expired_desc":"La suscripci\xf3n ha caducado y la oferta del 30% de descuento s\xf3lo es aplicable antes de la fecha de vencimiento. \xa1Pero puede contratar cualquier plan Premium con un 20% de Descuento!","resume_uns_expired_title":"Oferta caducada... \xa1Pero hay otra!","resume_uns_mobile_download_app_title":"Obtenga la aplicaci\xf3n Fotor ahora","resume_uns_month":"mes","resume_uns_nickname":"El apodo:","resume_uns_payment_method":"Forma de Pago:","resume_uns_payment_method_value":"Tarjeta de cr\xe9dito o d\xe9bito","resume_uns_scan_download_app_title":"Escanear para descargar Fotor App","resume_uns_status":"Estado de la Suscripci\xf3n:","resume_uns_status_cancel":"Cancelada","resume_uns_subscription_fee":"Cuota de Abono:","resume_uns_subscription_plan":"Plan de suscripci\xf3n:","resume_uns_success_button":"Bien, entendido","resume_uns_success_desc":"Ahora ya ha completado con \xe9xito la suscripci\xf3n.","resume_uns_success_title":"\xa1Genial!","resume_uns_top_title":"Restablecer Suscripci\xf3n","resume_uns_year":"a\xf1o","share_button_text":"Compartir","unitMonth":"/mes","upload_background":"Empieza","upload_background_remover":"Empieza","upload_fail":"No se pudo abrir la imagen, intente nuevamente.","upload_format_custom":"S\xf3lo se admite la apertura de {JPG,PNG,HEIC/HEIF} y WebP .","upload_number_tip":"Esta p\xe1gina solo admite agregar 1 foto para editar, puede agregar m\xe1s fotos en nuestra herramienta de edici\xf3n.","upload_start":"Empezar ahora\uff01","upload_sure":"Sustituir","year_credit_discount_tip":"Ahorra 70%","year_discount_tip":"Ahorra 62%","copy_success":"Copiado","price_page_feature_title20":"Desenfoque facial AI","price_page_feature_desc20":"Desenfocar y dar nitidez a fotos de retratos.","price_page_feature_title21":"Retoque de piel AI","price_page_feature_desc21":"Transforma tus retratos y fotos de forma m\xe1gica e impecable. Retoque fotos en l\xednea y revele su \\"yo\\" radiante con un solo clic.","price_page_feature_title22":"AI Expandir","price_page_feature_desc22":"Ampl\xeda las dimensiones de tus fotos con un solo clic. Ampl\xeda autom\xe1ticamente el contenido del sujeto, los fondos y las texturas de tus fotos.","price_page_feature_title23":"AI Reemplazar","price_page_feature_desc23":"Cambia y sustituye objetos en tus fotos.","price_page_feature_title24":"Restaurador de fotos antiguas","price_page_feature_desc24":"Repare autom\xe1ticamente los da\xf1os, elimine la borrosidad y restaure los colores y detalles desva\xeddos para convertir su foto antigua en una foto nueva.","price_page_feature_title25":"Avatar AI y Fotograf\xeda AI","price_page_feature_desc25":"Crea de forma f\xe1cil y r\xe1pida retratos y fotos de perfil profesionales, creativos y realistas en alta definici\xf3n.","price_page_feature_desc25_list_desc1":"50% de descuento","price_page_feature_title26":"Intercambio de caras AI","price_page_feature_desc26":"Sube tus fotos para cambiar la cara. Consigue un intercambio de caras perfectamente realista y sin fisuras generado por IA para cualquier tipo de diversi\xf3n.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Mejora instant\xe1neamente la calidad del v\xeddeo, incluyendo ajustes de nitidez, brillo, etc. para que los v\xeddeos sean m\xe1s claros.","price_page_feature_desc27_list_desc1":"3s\uff0cvista previa de v\xeddeo","price_page_feature_desc27_list_desc2":"tiempo completo\uff0cv\xeddeo HD","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Elimina instant\xe1neamente el fondo de un v\xeddeo vertical con un solo toque. ","price_page_feature_desc28_list_desc1":"3s\uff0cver v\xeddeo","price_page_feature_desc28_list_desc2":"tiempo completo\uff0cv\xeddeo HD","price_page_feature_title29":"Edici\xf3n por lotes AI","price_page_feature_desc29":"Edici\xf3n por lotes AI como removedor de fondo por lotes, cambio de fondo por lotes, etc.","price_page_feature_desc29_list_desc1":"Hasta 3 im\xe1genes a la vez","price_page_feature_desc29_list_desc2":"Hasta 50 im\xe1genes a la vez","price_page_faq_credit_answer1":"Los cr\xe9ditos son una forma de tokens virtuales que puedes comprar con dinero real y utilizar para pagar por funciones y servicios premium en el sitio web y las aplicaciones de Fotor. Actualmente, los cr\xe9ditos se pueden utilizar para la generaci\xf3n de im\xe1genes de inteligencia artificial, la generaci\xf3n de fondos de inteligencia artificial, etc.","price_page_faq_credit_answer2":"Los cr\xe9ditos para las suscripciones que no se utilizan en el mes actual se pueden acumular para el pr\xf3ximo mes, siempre y cuando mantengas tu suscripci\xf3n, y se pueden acumular durante un m\xe1ximo de cinco meses. Una vez que canceles la suscripci\xf3n, tus cr\xe9ditos expirar\xe1n el d\xeda en que la suscripci\xf3n expire. Los cr\xe9ditos para un pago \xfanico son v\xe1lidos durante dos a\xf1os despu\xe9s de la compra.","price_page_faq_credit_answer3":"Si compras un plan de suscripci\xf3n de cr\xe9ditos y te quedas sin cr\xe9ditos, puedes actualizar a un plan superior con m\xe1s cr\xe9ditos emitidos cada mes, o puedes comprar cr\xe9ditos de un solo uso para recargar.","price_page_faq_credit_answer4":"S\xed. Tus cr\xe9ditos pueden funcionar en todas las plataformas, incluyendo el sitio web de Fotor, aplicaciones m\xf3viles (iOS/Android) y software de escritorio (Mac/Windows).","price_page_faq_credit_answer5":"S\xed. Puedes cancelar tu suscripci\xf3n en cualquier momento.","price_page_faq_credit_answer6":"Para suscribirte al paquete de membres\xeda de Fotor, puedes pagar a trav\xe9s de Paypal o tarjeta de cr\xe9dito. Aceptamos tarjetas de cr\xe9dito o d\xe9bito de las siguientes marcas: Visa, Mastercard, American Express, JCB y m\xe1s.","price_page_faq_credit_answer7":"S\xed, puedes. Debido al n\xfamero limitado de puntos en el programa avanzado, si necesita m\xe1s puntos, puede suscribirse al programa de puntos o comprar puntos \xfanicos. El plan de primas y el plan de puntos pueden coexistir y no chocar\xe1n.","price_page_faq_credit_question1":"\xbfQu\xe9 son los cr\xe9ditos y qu\xe9 puedo hacer con ellos?","price_page_faq_credit_question2":"\xbfCu\xe1nto tiempo son v\xe1lidos los cr\xe9ditos y se pueden acumular cr\xe9ditos no utilizados?","price_page_faq_credit_question3":"\xbfQu\xe9 sucede si me quedo sin cr\xe9ditos?","price_page_faq_credit_question4":"\xbfMis cr\xe9ditos funcionan en dispositivos m\xf3viles?","price_page_faq_credit_question5":"\xbfPuedo cancelar mi suscripci\xf3n de cr\xe9ditos?","price_page_faq_credit_question6":"\xbfQu\xe9 m\xe9todos de pago puedo usar?","price_page_faq_credit_question7":"\xbfSi ya me he suscrito al programa avanzado, \xbf puedo suscribirme al programa de puntos?","price_page_faq_member_answer1":"S\xed, hay muchas funciones b\xe1sicas que se pueden utilizar de forma gratuita. Sin embargo, para una experiencia m\xe1s avanzada, recomendamos probar nuestros Fotor Pro y Fotor Pro+.","price_page_faq_member_answer2":"El Fotor Pro+ incluye todas las funciones avanzadas que se encuentran en Fotor Pro. Adem\xe1s, el Fotor Pro+ ofrece un espacio en la nube m\xe1s grande y 1,000,000 de fotos HD para uso personal y comercial. Los kits de marca tambi\xe9n son exclusivos de Fotor Pro+ para aquellos que necesitan administrar fuentes, logotipos y colores de marca para dise\xf1ar materiales de marca.","price_page_faq_member_answer3":"S\xed, las suscripciones Fotor Pro y Pro+ est\xe1n disponibles en todas las plataformas. Esto significa que con una cuenta Pro o Pro+, puede disfrutar de todas las funciones avanzadas del sitio web de Fotor, aplicaciones m\xf3viles (iOS / Android) y software de escritorio (Mac / Windows). Sus dise\xf1os y proyectos de collage tambi\xe9n se pueden sincronizar en varios dispositivos.","price_page_faq_member_answer4":"Para suscribirte al paquete de membres\xeda de Fotor, puedes pagar a trav\xe9s de Paypal o tarjeta de cr\xe9dito. Aceptamos tarjetas de cr\xe9dito o d\xe9bito de las siguientes marcas: Visa, Mastercard, American Express, JCB y m\xe1s.","price_page_faq_member_answer5":"S\xed, enviamos facturas por correo electr\xf3nico para cada deducci\xf3n. Si no recibe un correo electr\xf3nico o no puede descargarlo por correo electr\xf3nico, puede iniciar sesi\xf3n en el sitio web de Fotor, hacer clic en su avatar de perfil y encontrar Historial de Pagos \u2192 Facturas. Simplemente, haga clic en la factura que necesita y luego desc\xe1rguela.","price_page_faq_member_answer6":"S\xed, puede cancelar la suscripci\xf3n en cualquier momento. Inicie sesi\xf3n en el sitio web de Fotor, haga clic en su avatar de perfil, encuentre la pesta\xf1a de Suscripci\xf3n, haga clic en Cancelar suscripci\xf3n y siga los pasos para darse de baja.","price_page_faq_member_answer7":"S\xed, puede actualizar de plan mensual a plan anual o de Pro a Pro+ en cualquier momento. Para hacerlo, inicie sesi\xf3n en el sitio web de Fotor, haga clic en su avatar de perfil, encuentre la pesta\xf1a de Suscripci\xf3n y ver\xe1 la opci\xf3n de cambiar el plan all\xed.","price_page_faq_member_answer8":"S\xed, el plan de suscripci\xf3n se renovar\xe1 autom\xe1ticamente. Si no desea que se le facture, puede cancelar su suscripci\xf3n hasta la fecha de vencimiento; de lo contrario, se le cobrar\xe1 autom\xe1ticamente en la fecha de su ciclo de suscripci\xf3n.","price_page_faq_member_answer9":"Puede usar los cr\xe9ditos para la generaci\xf3n de im\xe1genes de inteligencia artificial en nuestro Generador de im\xe1genes AI, Generador de fondo AI, etc. Como las caracter\xedsticas relacionadas con AIGC conllevan un gran costo de servidor, no se pueden incluir en el plan de suscripci\xf3n para uso ilimitado. Si se queda sin cr\xe9ditos, puede comprar planes de cr\xe9ditos separados para complementarlos.","price_page_faq_member_question1":"\xbfPuedo usar Fotor de forma gratuita?","price_page_faq_member_question2":"\xbfCu\xe1l es la diferencia entre Fotor Pro y Fotor Pro+?","price_page_faq_member_question3":"\xbfFunciona mi suscripci\xf3n de Fotor en dispositivos m\xf3viles?","price_page_faq_member_question4":"\xbfQu\xe9 m\xe9todos de pago puedo usar?","price_page_faq_member_question5":"\xbfPuedo recibir una factura?","price_page_faq_member_question6":"\xbfPuedo cancelar mi suscripci\xf3n?","price_page_faq_member_question7":"\xbfPuedo actualizar mi plan actual?","price_page_faq_member_question8":"\xbfMi plan de suscripci\xf3n se renovar\xe1 autom\xe1ticamente?","price_page_faq_member_question9":"\xbfQu\xe9 puedo hacer con los cr\xe9ditos extra incluidos en los planes premium?","mobile_to_app_popup_title":"\xbfContinuar en la aplicaci\xf3n?","mobile_to_app_popup_subtitle":"\xa1Disfruta de una mejor experiencia adaptada para tu dispositivo m\xf3vil!","mobile_to_app_popup_button_stay":"Permanece en la web","mobile_to_app_popup_button_open":"Abrir aplicaci\xf3n","mobile_app_entry_pop_title":"\xbfQuieres probar Fotor Pro gratis?","mobile_app_entry_pop_content":"\xa1Descarga la aplicaci\xf3n Fotor para una edici\xf3n m\xe1s f\xe1cil y una prueba gratuita de las funciones profesionales! \ud83d\udc47"}'),
                fr_FR: JSON.parse('{"ai_textarea_placeholder":"D\xe9crivez ce que vous voulez que l\'IA dessine","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Utilisateurs","aigc_data_reveal_title2":"Images G\xe9n\xe9r\xe9es","aigc_data_reveal_title3":"\xc9valuation","back_to_top":"Faites d\xe9filer vers le haut","breadCrumbs_home":"Accueil","credits_unit":"/Cr\xe9dit","drop_image_to_upload":"D\xe9poser l\'image ici","header_logo_hover_info":"Glissez le logo dans la barre des signets\\npour visiter Fotor plus facilement la prochaine fois !","join_discord_title":"Cliquez pour visiter Discord","mobile_open_app_fixed_popup_desc":"profitez d\'une meilleure exp\xe9rience d\'\xe9dition adapt\xe9e \xe0 votre appareil mobile !","mobile_to_app_cancel":"Pas maintenant","mobile_to_app_desc":"Modifiez et concevez vos photos en d\xe9placement.","mobile_to_app_desc1":"Partagez vos photos sur les r\xe9seaux sociaux en toute simplicit\xe9 !","mobile_to_app_ok":"Explorer l\'application","mobile_to_app_title":"Continuer dans l\'appli","mobile_to_more_text":"Commencez \xe0 \xe9diter et \xe0 concevoir","more":"Plus","more_templates_button":"Parcourir tous les mod\xe8les","original_before":"Avant","pointsActivityPage_activity_list_mobile_title":"Gagner des cr\xe9dits","pointsActivityPage_copied":"Copi\xe9","pointsActivityPage_copy":"Copier","pointsActivityPage_credits":"Cr\xe9dits:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Centre de t\xe2ches","pointsActivityPage_desc":"Faire ce que vous aimez sur Fotor vous permet d\u2019obtenir plus de r\xe9compenses facilement et amusamment. Commencez \xe0 gagner avec les r\xe9compenses de Fotor d\xe8s aujourd\u2019hui !","pointsActivityPage_download_app_text":"T\xe9l\xe9chargez l\'application Fotor et inscrivez-vous pour gagner 5 cr\xe9dits gratuits sur l\'application. Les cr\xe9dits gagn\xe9s peuvent \xeatre utilis\xe9s \xe0 la fois sur notre site web et sur l\'application !","pointsActivityPage_download_app_title":"T\xe9l\xe9charger l\'application","pointsActivityPage_my_credits_text":"Mes cr\xe9dits","pointsActivityPage_novip_text":"Rejoignez Fotor Pro pour gagner le double de cr\xe9dits","pointsActivityPage_one_activity_type_mobile_text":"Gagner une fois","pointsActivityPage_receive_activity_button_mobile_text":"Gagner","pointsActivityPage_receive_activity_button_text":"Gagner des cr\xe9dits","pointsActivityPage_receive_points_toast":"{numbers} cr\xe9dit(s) re\xe7u(s) !","pointsActivityPage_received_activity_button_mobile_text":"Re\xe7u","pointsActivityPage_received_activity_button_text":"Re\xe7u","pointsActivityPage_share_link":"Lien de partage","pointsActivityPage_some_activity_type_mobile_text":"Gagner quotidiennement","pointsActivityPage_svip_text":"R\xe9compenses de cr\xe9dits exclusifs Pro+","pointsActivityPage_title":"Rejoignez Fotor et jouez avec Fotor pour obtenir facilement des r\xe9compenses | Fotor","pointsActivityPage_upgrade_button_text":"Mise \xe0 jour","pointsActivityPage_username_prefix_text":"Bonjour !","pointsActivityPage_vip_text":"R\xe9compenses en cr\xe9dits exclusifs Pro","pointsActivityPage_welcome":"Bienvenue dans le Centre des t\xe2ches Fotor !","pointsActivityPage_what_use_credits_mobile_text":"Vous pouvez utiliser des cr\xe9dits pour g\xe9n\xe9rer des images AI avec Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">Cr\xe9er maintenant</a>","pointsActivityPage_what_use_credits_text":"Vous pouvez utiliser les cr\xe9dits pour g\xe9n\xe9rer une large gamme d\'images AI avec <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>, cr\xe9er de superbes arri\xe8re-plans pour vos d\xe9coupes avec <a href=\\"https://www.fotor.com/fr/features/background-remover/upload\\">Fotor Background Remover</a>, et cr\xe9er des designs uniques en g\xe9n\xe9rant vos propres \xe9l\xe9ments ou images dans <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. La g\xe9n\xe9ration d\'une image AI consomme 1 ou 2 cr\xe9dits dans ces outils.","pointsActivityPage_what_use_credits_title":"Que puis-je faire avec les cr\xe9dits ?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Cr\xe9er maintenant","pointsActivityPage_what_use_credits_to_link_text":"G\xe9n\xe9rer maintenant","preview_upload_limit_size":"Le chargement a \xe9chou\xe9 en raison de la taille excessive de l\'image ou du fichier.{link}.","preview_upload_more":"En savoir plus","price_monthly_switch":"Mensuel","price_page_activity_btn_discount":"Mise \xe0 niveau avec {discount_en}% DE REDUCTION","price_page_billed_annually":"paiement annuel","price_page_buy_now":"Acheter maintenant","price_page_credits_once_info":"Cr\xe9dits disponibles \xe0 tout moment dans les deux ans suivant l\'achat.","price_page_credits_plans":"Plans de cr\xe9dits","price_page_credits_subscribe_info":"Les cr\xe9dits inutilis\xe9s seront report\xe9s tant que vous serez abonn\xe9, jusqu\'\xe0 5 mois d\'accumulation.","price_page_feature_desc1":"Comprenant les fonctions de base d\'ajustement et de beaut\xe9, ainsi que des effets partiels, des filtres et des cadres.","price_page_feature_desc10":"Transformer les photos en esquisses, peintures \xe0 l\'huile, aquarelles, dessins anim\xe9s et autres types de peintures.","price_page_feature_desc10_list_desc1":"T\xe9l\xe9charger non HD avec filigrane","price_page_feature_desc10_list_desc2":"T\xe9l\xe9charger HD sans filigrane","price_page_feature_desc11":"Transformer les photos en noir et blanc en photos color\xe9es.","price_page_feature_desc12":"Mod\xe8les pr\xeats \xe0 l\'emploi pour affiches, cartes, publications sur les r\xe9seaux sociaux et autres occasions de conception graphique.","price_page_feature_desc12_list_desc1":"50 000+","price_page_feature_desc12_list_desc2":"100 000+","price_page_feature_desc13":"Polices de droits d\'auteur dans diff\xe9rents types de styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 et t\xe9l\xe9charger de polices","price_page_feature_desc13_list_desc3":"523 et t\xe9l\xe9charger de polices","price_page_feature_desc14":"Comprenant des fonds, des photos, des illustrations, des ic\xf4nes, des motifs et autres \xe9l\xe9ments et autocollants.","price_page_feature_desc14_list_desc1":"30 000+","price_page_feature_desc14_list_desc2":"60 000+","price_page_feature_desc15":"Capacit\xe9 de stockage en nuage pour vos projets et t\xe9l\xe9chargements.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"Formats de fichier dans lesquels les images peuvent \xeatre t\xe9l\xe9charg\xe9es.","price_page_feature_desc16_list_desc1":"JPG/PNG/PDF normaux","price_page_feature_desc16_list_desc2":"JPG/PNG/PDF en haute r\xe9solution et PNG transparent","price_page_feature_desc17":"G\xe9rez les conceptions de votre marque avec des polices, des logos et des couleurs unifi\xe9s. Possibilit\xe9 de t\xe9l\xe9charger vos propres polices de caract\xe8res.","price_page_feature_desc18":"Profitez d\'un plus grand espace de travail sans distractions publicitaires.","price_page_feature_desc19":"Obtenez des cr\xe9dits gratuits pour les fonctionnalit\xe9s li\xe9es au CGIA.","price_page_feature_desc19_list_desc1":"100 Cr\xe9dits/Mois","price_page_feature_desc19_list_desc2":"300 Cr\xe9dits/Mois","price_page_feature_desc2":"Comprenant des ressources cr\xe9atives partielles et des fonctions d\'\xe9dition dans l\'outil de conception.","price_page_feature_desc3":"Comprenant des mod\xe8les de collage partiels et des fonctions d\'\xe9dition dans l\'outil de collage.","price_page_feature_desc4":"Comprenant toutes les fonctions d\'\xe9dition avanc\xe9es telles que HSL, d\xe9bruitage, inverser les couleurs, lissage, remodeler, ainsi que tous les filtres et cadres de qualit\xe9 sup\xe9rieure.","price_page_feature_desc5":"Modifier par lots plusieurs images, par exemple recadrer, redimensionner, ajouter du texte, modifier le format de fichier.","price_page_feature_desc6":"D\xe9flouter les photos de fa\xe7on intelligente en augmentant la r\xe9solution de la photo, accentuant les d\xe9tails de l\'image et am\xe9liorant la qualit\xe9 de l\'image.","price_page_feature_desc7":"Supprimer instantan\xe9ment le fond d\'une image en un seul clic. Il est \xe9galement possible de changer le fond par n\'importe quelle couleur ou image.","price_page_feature_desc8":"Supprimer des objets, du texte et des filigranes ind\xe9sirables d\'une photo, et AI remplira intelligemment le contenu restant de l\'image.","price_page_feature_desc9":"G\xe9n\xe9rer des images \xe0 partir de textes ou d\'images.","price_page_feature_title1":"Fonctions d\'\xe9dition de base","price_page_feature_title10":"Effet photo AI","price_page_feature_title11":"Coloriser AI","price_page_feature_title12":"Mod\xe8les","price_page_feature_title13":"Polices de caract\xe8res","price_page_feature_title14":"Ressources cr\xe9atives","price_page_feature_title15":"Stockage en nuage","price_page_feature_title16":"Format de fichier","price_page_feature_title17":"Kits de marque","price_page_feature_title18":"Sans publicit\xe9","price_page_feature_title19":"Cr\xe9dits suppl\xe9mentaires","price_page_feature_title2":"Fonctions de conception de base","price_page_feature_title3":"Mises en page et fonctions de collage de base","price_page_feature_title4":"Fonctions d\'\xe9dition avanc\xe9es","price_page_feature_title5":"Edition par lots","price_page_feature_title6":"Am\xe9lioration de photos AI","price_page_feature_title7":"Suppresseur de fonds AI","price_page_feature_title8":"Suppresseur d\'objet AI","price_page_feature_title9":"Contenu g\xe9n\xe9r\xe9 par AI","price_page_free_info":"Free","price_page_free_trial":"Essai Gratuit","price_page_most_popular":"Le plus populaire","price_page_one_time_payment":"Payer au fur et \xe0 mesure","price_page_platform_title":"Disponible sur toutes les plateformes.","price_page_premium_plans":"Plans Premium","price_page_subscribe_now":"S\'abonner maintenant","price_page_subscription_plan":"Forfait","price_page_try_now":"Essayez maintenant","price_yearly_switch":"Annuel","read_aigc_tips_title":"Cliquez pour lire les conseils de l\'AIGC","result_after":"Apr\xe8s","resume_uns_active_button":"Ok, je l\'ai eu","resume_uns_active_desc":"L\'offre actuelle a \xe9t\xe9 r\xe9clam\xe9e et vous pouvez d\xe9j\xe0 profiter du prix r\xe9duit de l\'abonnement.","resume_uns_active_title":"Vous avez r\xe9clam\xe9 l\'offre !","resume_uns_button":"R\xe9tablissement de l\'Abonnement avec 30% de R\xe9duction","resume_uns_card_number":"Num\xe9ro de Carte :","resume_uns_click_download_app_title":"Application de bureau","resume_uns_desc":"Une fois votre abonnement r\xe9tabli, vous ne serez pas factur\xe9 imm\xe9diatement, mais plut\xf4t \xe0 la date d\'expiration de l\'abonnement. \xc0 compter de cette date, vous b\xe9n\xe9ficierez d\'une r\xe9duction de 30% sur vos frais d\'abonnement.","resume_uns_discounted_subscription_fee":"Frais d\'Abonnement avec Remise:","resume_uns_download_app_title":"Profitez des avantages de Fotor Premium sur tous les appareils !","resume_uns_download_button":"T\xe9l\xe9charger","resume_uns_email":"Email:","resume_uns_expiration_date":"Date d\'Expiration:","resume_uns_expired_button":"Abonnez-vous avec 20% de R\xe9duction","resume_uns_expired_desc":"Votre abonnement a expir\xe9 et la r\xe9duction de 30% n\'est valable qu\'avant la date d\'expiration. Vous pouvez n\xe9anmoins vous abonner \xe0 n\'importe quelle formule premium avec une Remise de 20% !","resume_uns_expired_title":"Offre expir\xe9e... Mais il y en a une autre !","resume_uns_mobile_download_app_title":"Obtenez l\'application Fotor maintenant","resume_uns_month":"mois","resume_uns_nickname":"Surnom:","resume_uns_payment_method":"Mode de Paiement:","resume_uns_payment_method_value":"Carte de cr\xe9dit ou de d\xe9bit","resume_uns_scan_download_app_title":"Scanner pour t\xe9l\xe9charger Fotor App","resume_uns_status":"Statut de l\'Abonnement:","resume_uns_status_cancel":"Annul\xe9","resume_uns_subscription_fee":"Frais d\'Abonnement:","resume_uns_subscription_plan":"Plan d\'abonnement :","resume_uns_success_button":"Ok, je l\'ai eu","resume_uns_success_desc":"Vous venez de r\xe9tablir l\'abonnement avec succ\xe8s.","resume_uns_success_title":"Parfait!","resume_uns_top_title":"Restaurer l\'abonnement","resume_uns_year":"an","share_button_text":"Partager","unitMonth":"/mois","upload_background":"Commencer","upload_background_remover":"Commencer","upload_fail":"Impossible d\'ouvrir l\'image, veuillez r\xe9essayer.","upload_format_custom":"Seuls les formats {JPG, PNG,HEIC/HEIF et WebP} sont pris en charge pour l\'ouverture.","upload_number_tip":"Cette page ne prend en charge que l\'ajout d\'une photo pour l\'\xe9dition, vous pouvez ajouter plus de photos dans notre outil d\'\xe9dition.","upload_start":"Commencez maintenant !","upload_sure":"Oui","year_credit_discount_tip":"\xc9conomisez 70%","year_discount_tip":"\xc9conomisez 62%","copy_success":"Copi\xe9","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Rendre les photos de portrait floues et plus nettes.","price_page_feature_title21":"Retouche de peau AI","price_page_feature_desc21":"Transformez vos portraits et vos photos de fa\xe7on magique et impeccable. Retouchez vos photos en ligne et r\xe9v\xe9lez un \\"vous\\" radieux en un seul clic.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Agrandissez les dimensions de vos photos en un seul clic. Agrandissez automatiquement le contenu du sujet, les arri\xe8re-plans et les textures de vos photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Modifiez et remplacez les objets de vos photos.","price_page_feature_title24":"Restaurateur de vieilles photos","price_page_feature_desc24":"R\xe9parez automatiquement les dommages, supprimez le flou et restaurez les couleurs et les d\xe9tails d\xe9lav\xe9s pour transformer vos vieilles photos en nouvelles photos.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Cr\xe9ez facilement et rapidement des photos de profil et des headshots HD AI professionnels, cr\xe9atifs et r\xe9alistes.","price_page_feature_desc25_list_desc1":"50% de r\xe9duction","price_page_feature_title26":"\xc9change de visage AI","price_page_feature_desc26":"T\xe9l\xe9chargez vos photos pour \xe9changer les visages. Obtenez un \xe9change de visage parfaitement r\xe9aliste et transparent g\xe9n\xe9r\xe9 par l\'IA pour tout type d\'amusement.","price_page_feature_title27":"Am\xe9liorateur vid\xe9o AI","price_page_feature_desc27":"Am\xe9liorez instantan\xe9ment la qualit\xe9 de vos vid\xe9os, notamment en r\xe9glant la nettet\xe9, la luminosit\xe9, etc. pour les rendre plus claires.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"vid\xe9o HD en temps r\xe9el","price_page_feature_title28":"Suppression de l\'arri\xe8re-plan vid\xe9o AI","price_page_feature_desc28":"Supprimez instantan\xe9ment l\'arri\xe8re-plan d\'une vid\xe9o portrait d\'une simple pression. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"plein temps\uff0cVid\xe9o HD","price_page_feature_title29":"\xc9dition par lots AI","price_page_feature_desc29":"L\'\xe9dition par lots AI permet de supprimer l\'arri\xe8re-plan par lots, de changer l\'arri\xe8re-plan par lots, etc.","price_page_feature_desc29_list_desc1":"Jusqu\'\xe0 3 images \xe0 la fois","price_page_feature_desc29_list_desc2":"Jusqu\'\xe0 50 images \xe0 la fois","price_page_faq_credit_answer1":"Les cr\xe9dits sont une forme de jetons virtuels que vous pouvez acheter avec de l\'argent r\xe9el et utiliser pour payer les fonctions et les services premium sur le site Web et les applications de Fotor. Actuellement, les cr\xe9dits peuvent \xeatre utilis\xe9s pour la g\xe9n\xe9ration d\'images AI, la g\xe9n\xe9ration de fonds AI, etc.","price_page_faq_credit_answer2":"Les cr\xe9dits pour les abonnements qui ne sont pas utilis\xe9s au cours du mois en cours peuvent \xeatre report\xe9s sur le mois suivant tant que vous maintenez votre abonnement et peuvent \xeatre accumul\xe9s jusqu\'\xe0 cinq mois. Une fois que vous avez annul\xe9 l\'abonnement, vos cr\xe9dits expireront le jour de l\'expiration de l\'abonnement. Les cr\xe9dits pour les paiements uniques sont valables pendant deux ans apr\xe8s l\'achat.","price_page_faq_credit_answer3":"Si vous achetez une formule d\'abonnement \xe0 cr\xe9dit et que vous \xe9puisez vos cr\xe9dits, vous pouvez soit passer \xe0 une formule sup\xe9rieure avec plus de cr\xe9dits \xe9mis chaque mois, soit acheter des cr\xe9dits \xe0 usage unique pour les recharger.","price_page_faq_credit_answer4":"Oui, vos cr\xe9dits peuvent fonctionner sur toutes les plateformes, y compris le site Web de Fotor, les applications mobiles (iOS/Android) et les logiciels de bureau (Mac/Windows).","price_page_faq_credit_answer5":"Oui, vous pouvez annuler votre abonnement \xe0 tout moment.","price_page_faq_credit_answer6":"Pour vous abonner aux plans premium de Fotor, vous pouvez payer par Paypal ou par carte de cr\xe9dit. Nous acceptons les cartes de cr\xe9dit ou de d\xe9bit suivantes : Visa, Mastercard, American Express, JCB, et autres.","price_page_faq_credit_answer7":"Oui, vous pouvez. En raison du nombre limit\xe9 de points dans le plan Premium, vous pouvez vous abonner au plan de points ou acheter des points uniques si vous avez besoin de plus de points. Le plan de prime et le plan de points peuvent coexister et ne pas entrer en conflit.","price_page_faq_credit_question1":"Quels sont les cr\xe9dits et que puis-je faire avec les cr\xe9dits ?","price_page_faq_credit_question2":"Combien de temps les cr\xe9dits sont-ils valables et les cr\xe9dits inutilis\xe9s peuvent-ils \xeatre accumul\xe9s ?","price_page_faq_credit_question3":"Que se passe-t-il si je n\'ai plus de cr\xe9dits ? ?","price_page_faq_credit_question4":"Mes cr\xe9dits fonctionnent-ils sur mobile ?","price_page_faq_credit_question5":"Puis-je annuler mon abonnement de cr\xe9dits ?","price_page_faq_credit_question6":"Quels sont les modes de paiement accept\xe9s ?","price_page_faq_credit_question7":"Puis - je m\'abonner au plan de points si je suis d\xe9j\xe0 abonn\xe9 au plan Premium?","price_page_faq_member_answer1":"Oui, il y a de nombreuses fonctions de base qui sont gratuites. Cependant, pour une exp\xe9rience plus avanc\xe9e, nous recommandons d\'essayer nos plans premium.","price_page_faq_member_answer2":"Le plan Fotor Pro+ comprend toutes les fonctions avanc\xe9es trouv\xe9es dans Fotor Pro. De plus, le plan Pro+ offre un espace de stockage en nuage plus grand et 1 000 000 de photos HD pour un usage personnel et commercial. Les kits de marque sont \xe9galement exclusifs au plan Pro+ pour ceux qui ont besoin de g\xe9rer les polices, les logos et les couleurs de leur marque pour concevoir des supports de marque.","price_page_faq_member_answer3":"Oui, les abonnements de Fotor Pro et de Pro+ sont disponibles sur toutes les plateformes. Cela signifie qu\'avec un compte Pro ou Pro+, vous pouvez profiter de toutes les fonctions avanc\xe9es du site Web de Fotor, des applications mobiles (iOS/Android) et des logiciels de bureau (Mac/Windows). Vos projets de conception et de collage peuvent \xe9galement \xeatre synchronis\xe9s sur plusieurs appareils.","price_page_faq_member_answer4":"Pour vous abonner aux plans premium de Fotor, vous pouvez payer par Paypal ou par carte de cr\xe9dit. Nous acceptons les cartes de cr\xe9dit ou de d\xe9bit suivantes : Visa, Mastercard, American Express, JCB, et autres.","price_page_faq_member_answer5":"Oui, nous envoyons des factures par e-mail pour chaque d\xe9duction. Si vous ne recevez pas d\'e-mail ou si vous ne parvenez pas \xe0 t\xe9l\xe9charger la facture par e-mail, vous pouvez vous connecter sur le site Web de Fotor, cliquer sur votre avatar de profil et acc\xe9der \xe0 Historique des paiements \u2192 Factures. Il vous suffit de cliquer sur la facture dont vous avez besoin, puis de la t\xe9l\xe9charger.","price_page_faq_member_answer6":"Oui, vous pouvez annuler votre abonnement \xe0 tout moment. Connectez-vous sur le site de Fotor, cliquez sur votre avatar de profil, trouvez l\'onglet Abonnement, cliquez sur Annuler l\'abonnement, puis suivez les \xe9tapes pour vous d\xe9sabonner.","price_page_faq_member_answer7":"Oui, vous pouvez passer d\'un plan mensuel \xe0 un plan annuel ou d\'un plan Pro \xe0 un plan Pro+ \xe0 tout moment. Pour ce faire, connectez-vous sur le site de Fotor, cliquez sur votre avatar de profil, trouvez l\'onglet Abonnement, puis vous verrez l\'option de changement de plan.","price_page_faq_member_answer8":"Oui, le plan d\'abonnement se renouvellera automatiquement. Si vous ne souhaitez pas \xeatre factur\xe9, vous pouvez annuler votre abonnement jusqu\'\xe0 la date d\'expiration ; sinon, vous serez automatiquement factur\xe9 \xe0 la date de renouvellement de votre abonnement.","price_page_faq_member_answer9":"Vous pouvez utiliser les cr\xe9dits pour la g\xe9n\xe9ration d\'images AI dans notre g\xe9n\xe9rateur d\'images AI, notre g\xe9n\xe9rateur de fonds AI, etc. Comme les fonctions li\xe9es \xe0 AIGC entra\xeenent des co\xfbts de serveur importants, elles ne peuvent pas \xeatre incluses dans le plan d\'abonnement pour une utilisation illimit\xe9e. Si vous manquez de cr\xe9dits, vous pouvez acheter des plans de cr\xe9dits s\xe9par\xe9s pour compl\xe9ter votre compte.","price_page_faq_member_question1":"Puis-je utiliser Fotor gratuitement ?","price_page_faq_member_question2":"Quelle est la diff\xe9rence entre Fotor Pro et Fotor Pro+ ?","price_page_faq_member_question3":"Mon abonnement Fotor fonctionne-t-il sur mobile ?","price_page_faq_member_question4":"Quels sont les modes de paiement accept\xe9s ?","price_page_faq_member_question5":"Puis-je recevoir une facture ?","price_page_faq_member_question6":"Puis-je annuler mon abonnement ?","price_page_faq_member_question7":"Puis-je mettre \xe0 niveau mon plan actuel ?","price_page_faq_member_question8":"Mon plan d\'abonnement sera-t-il renouvel\xe9 automatiquement ?","price_page_faq_member_question9":"Que puis-je faire avec les cr\xe9dits suppl\xe9mentaires inclus dans les plans premium ?","mobile_to_app_popup_title":"Continuer dans l\'application ?","mobile_to_app_popup_subtitle":"Profitez d\'une meilleure exp\xe9rience adapt\xe9e \xe0 votre appareil mobile !","mobile_to_app_popup_button_stay":"Restez sur le Web","mobile_to_app_popup_button_open":"Ouvrir l\'application","mobile_app_entry_pop_title":"Envie d\'essayer Fotor Pro gratuitement ?","mobile_app_entry_pop_content":"T\xe9l\xe9chargez l\'application Fotor pour une \xe9dition plus facile et un essai gratuit des fonctionnalit\xe9s professionnelles ! \ud83d\udc47"}'),
                ja_JP: JSON.parse('{"ai_textarea_placeholder":"AI\u306b\u63cf\u3044\u3066\u6b32\u3057\u3044\u5185\u5bb9\u3092\u8aac\u660e\u3057\u3066\u304f\u3060\u3055\u3044","aigc_data_reveal_num1":"600\u4e07\u4ee5\u4e0a","aigc_data_reveal_num2":"5000\u4e07\u4ee5\u4e0a","aigc_data_reveal_title1":"\u30e6\u30fc\u30b6\u30fc\u6570","aigc_data_reveal_title2":"\u751f\u6210\u3055\u308c\u305f\u753b\u50cf","aigc_data_reveal_title3":"\u8a55\u4fa1","back_to_top":"\u30c8\u30c3\u30d7\u306b\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u307e\u3059","breadCrumbs_home":"\u30db\u30fc\u30e0","credits_unit":"/\u30af\u30ec\u30b8\u30c3\u30c8","drop_image_to_upload":"\u753b\u50cf\u3092\u3053\u3053\u306b\u30c9\u30ed\u30c3\u30d7\u3059\u308b","header_logo_hover_info":"\u6b21\u56de\u304b\u3089Fotor\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\\n\u305d\u306e\u30ed\u30b4\u3092\u30d6\u30c3\u30af\u30de\u30fc\u30af\u30d0\u30fc\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044\uff01","join_discord_title":"\u30af\u30ea\u30c3\u30af\u3057\u3066 Discord \u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059","mobile_open_app_fixed_popup_desc":"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u306b\u5408\u308f\u305b\u305f\u3088\u308a\u826f\u3044\u7de8\u96c6\u4f53\u9a13\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\uff01","mobile_to_app_cancel":"\u4eca\u306f\u3084\u3081\u308b","mobile_to_app_desc":"\u79fb\u52d5\u4e2d\u306b\u3082\u5199\u771f\u306e\u30c7\u30b6\u30a4\u30f3\u3084\u7de8\u96c6\u304c\u53ef\u80fd","mobile_to_app_desc1":"\u3088\u308a\u30b9\u30e0\u30fc\u30ba\u304b\u3064\u7c21\u5358\u306b\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u3067\u5171\u6709\u53ef\u80fd\uff01","mobile_to_app_ok":"\u30a2\u30d7\u30ea\u3092\u691c\u7d22\u3059\u308b","mobile_to_app_title":"\u30a2\u30d7\u30ea\u3067\u7d9a\u3051\u308b","mobile_to_more_text":"\u7de8\u96c6\u30fb\u30c7\u30b6\u30a4\u30f3\u3092\u59cb\u3081\u308b","more":"\u305d\u306e\u4ed6","more_templates_button":"\u3059\u3079\u3066\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u53c2\u7167","original_before":"\u524d","pointsActivityPage_activity_list_mobile_title":"\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u7372\u5f97\u3059\u308b","pointsActivityPage_copied":"\u30b3\u30d4\u30fc","pointsActivityPage_copy":"\u30b3\u30d4\u30fc","pointsActivityPage_credits":"\u30af\u30ec\u30b8\u30c3\u30c8\uff1a","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"\u30bf\u30b9\u30af\u30bb\u30f3\u30bf\u30fc","pointsActivityPage_desc":"Fotor\u3067\u597d\u304d\u306a\u3053\u3068\u3092\u3059\u308c\u3070\u3001\u7c21\u5358\u306b\u697d\u3057\u304f\u3082\u3063\u3068\u5831\u916c\u3092\u5f97\u3089\u308c\u307e\u3059\u3002\u4eca\u65e5\u304b\u3089Fotor\u306e\u5831\u916c\u3092\u7a3c\u304e\u307e\u3057\u3087\u3046\uff01","pointsActivityPage_download_app_text":"Fotor\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u4e0a\u30675\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u7121\u6599\u3067\u7372\u5f97\u3067\u304d\u307e\u3059\u3002\u7372\u5f97\u3057\u305f\u30af\u30ec\u30b8\u30c3\u30c8\u306f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3068\u30a2\u30d7\u30ea\u306e\u4e21\u65b9\u3067\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\uff01","pointsActivityPage_download_app_title":"\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","pointsActivityPage_my_credits_text":"\u30de\u30a4\u30af\u30ec\u30b8\u30c3\u30c8","pointsActivityPage_novip_text":"Fotor Pro \u306b\u52a0\u5165\u3057\u3066 2 \u500d\u306e\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u7372\u5f97","pointsActivityPage_one_activity_type_mobile_text":"\u4e00\u5ea6\u7372\u5f97","pointsActivityPage_receive_activity_button_mobile_text":"\u7372\u5f97","pointsActivityPage_receive_activity_button_text":"\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u7372\u5f97\u3059\u308b","pointsActivityPage_receive_points_toast":"{numbers}\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u53d7\u3051\u53d6\u308a\u307e\u3057\u305f\uff01","pointsActivityPage_received_activity_button_mobile_text":"\u53d7\u3051\u53d6\u308b","pointsActivityPage_received_activity_button_text":"\u53d7\u9818","pointsActivityPage_share_link":"\u30ea\u30f3\u30af\u3092\u5171\u6709","pointsActivityPage_some_activity_type_mobile_text":"\u6bce\u65e5\u7372\u5f97","pointsActivityPage_svip_text":"Pro+\u9650\u5b9a\u30af\u30ec\u30b8\u30c3\u30c8\u7279\u5178","pointsActivityPage_title":"Fotor\u306b\u53c2\u52a0\u3057\u3066Fotor\u3067\u904a\u3073\u3001\u7c21\u5358\u306b\u5831\u916c\u3092\u5f97\u308b | Fotor","pointsActivityPage_upgrade_button_text":"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","pointsActivityPage_username_prefix_text":"\u3053\u3093\u306b\u3061\u306f\uff01","pointsActivityPage_vip_text":"\u30d7\u30ed\u9650\u5b9a\u30af\u30ec\u30b8\u30c3\u30c8\u7279\u5178","pointsActivityPage_welcome":"\u3088\u3046\u3053\u305d\u3001Fotor \u30bf\u30b9\u30af\u30bb\u30f3\u30bf\u30fc\u3078\uff01","pointsActivityPage_what_use_credits_mobile_text":"Fotor AI Image Generator \u3067 AI \u753b\u50cf\u3092\u751f\u6210\u3059\u308b\u306b\u306f\u3001\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002<a href=\\"https://www.fotor.com/images/create\\">\u4eca\u3059\u3050\u4f5c\u6210</a>","pointsActivityPage_what_use_credits_text":"\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001<a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>\u3067\u3055\u307e\u3056\u307e\u306a AI \u753b\u50cf\u3092\u751f\u6210\u3057\u305f\u308a\u3001<a href=\\"https://www.fotor.com/jp/features/background-remover/upload\\">Fotor Background Remover</a>\u3067\u5207\u308a\u629c\u304d\u7528\u306e\u7f8e\u3057\u3044\u80cc\u666f\u3092\u4f5c\u6210\u3057\u305f\u308a\u3001<a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>\u3067\u72ec\u81ea\u306e\u8981\u7d20\u3084\u753b\u50cf\u3092\u751f\u6210\u3057\u3066\u30e6\u30cb\u30fc\u30af\u306a\u30c7\u30b6\u30a4\u30f3\u3092\u4f5c\u6210\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002AI\u753b\u50cf\u30921\u3064\u751f\u6210\u3059\u308b\u306e\u306b\u3001\u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u3067\u306f1\uff5e2\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u6d88\u8cbb\u3059\u308b\u3002","pointsActivityPage_what_use_credits_title":"\u30af\u30ec\u30b8\u30c3\u30c8\u3092\u4f7f\u3063\u3066\u4f55\u304c\u3067\u304d\u307e\u3059\u304b\uff1f","pointsActivityPage_what_use_credits_to_link_mobile_text":"\u4eca\u3059\u3050\u4f5c\u6210","pointsActivityPage_what_use_credits_to_link_text":"\u4eca\u3059\u3050\u4f5c\u6210","preview_upload_limit_size":"\u753b\u50cf\u30b5\u30a4\u30ba\u307e\u305f\u306f\u30b9\u30c8\u30ec\u30fc\u30b8\u304c\u5236\u9650\u3092\u8d85\u3048\u305f\u305f\u3081\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002{link}\u3002","preview_upload_more":"\u8a73\u7d30\u3092\u898b\u308b","price_monthly_switch":"\u6708\u6255\u3044","price_page_activity_btn_discount":"{discount_jp}\u5272\u5f15\u3067\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","price_page_billed_annually":"\u5e74\u6255\u3044","price_page_buy_now":"\u8cfc\u5165","price_page_credits_once_info":"\u30dd\u30a4\u30f3\u30c8\u306e\u6709\u52b9\u671f\u9650\u306f\u8cfc\u5165\u65e5\u304b\u30892\u5e74\u9593\u3067\u3059\u3002","price_page_credits_plans":"\u30af\u30ec\u30b8\u30c3\u30c8\u30d7\u30e9\u30f3","price_page_credits_subscribe_info":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u671f\u9593\u4e2d\u3001\u672a\u4f7f\u7528\u306e\u30dd\u30a4\u30f3\u30c8\u3092\u6700\u59275\u304b\u6708\u9593\u307e\u3067\u7e70\u308a\u8d8a\u305b\u307e\u3059\u3002","price_page_feature_desc1":"\u57fa\u672c\u7684\u306a\u8abf\u6574\u3084\u7f8e\u5316\u6a5f\u80fd\u3001\u307e\u305f\u90e8\u5206\u7684\u306a\u52b9\u679c\u3001\u30d5\u30a3\u30eb\u30bf\u30fc\u3001\u30d5\u30ec\u30fc\u30e0\u3092\u542b\u3080\u3002","price_page_feature_desc10":"\u5199\u771f\u3092\u30b9\u30b1\u30c3\u30c1\u3001\u6cb9\u7d75\u3001\u6c34\u5f69\u753b\u3001\u30ab\u30fc\u30c8\u30a5\u30fc\u30f3\u307e\u305f\u306f\u4ed6\u306e\u30b9\u30bf\u30a4\u30eb\u306e\u30a2\u30fc\u30c8\u4f5c\u54c1\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc10_list_desc1":"\u901a\u5e38\u306e\u30af\u30ea\u30a2\u5ea6\u3001\u900f\u304b\u3057\u4ed8\u304d\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","price_page_feature_desc10_list_desc2":"\u9ad8\u753b\u8cea\u3001\u900f\u304b\u3057\u7121\u3057\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","price_page_feature_desc11":"\u767d\u9ed2\u5199\u771f\u3092\u81ea\u52d5\u7684\u306b\u30ab\u30e9\u30fc\u5316\u3057\u307e\u3059\u3002","price_page_feature_desc12":"\u3042\u3089\u304b\u3058\u3081\u8a2d\u5b9a\u3055\u308c\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u30dd\u30b9\u30bf\u30fc\u3084\u30ab\u30fc\u30c9\u3001SNS\u6295\u7a3f\u306a\u3069\u306e\u69d8\u3005\u306a\u30c7\u30b6\u30a4\u30f3\u30cb\u30fc\u30ba\u3092\u8fc5\u901f\u306b\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"\u69d8\u3005\u306a\u30b9\u30bf\u30a4\u30eb\u3068\u30bf\u30a4\u30d7\u306e\u30d5\u30a9\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & \u30d5\u30a9\u30f3\u30c8\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9","price_page_feature_desc13_list_desc3":"523 & \u30d5\u30a9\u30f3\u30c8\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9","price_page_feature_desc14":"\u80cc\u666f\u3001\u753b\u50cf\u3001\u30a4\u30e9\u30b9\u30c8\u3001\u30d9\u30af\u30bf\u30fc\u56f3\u306a\u3069\u306e\u8981\u7d20\u3068\u30b9\u30c6\u30c3\u30ab\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"\u30af\u30e9\u30a6\u30c9\u306b\u5de5\u7a0b\u30d5\u30a1\u30a4\u30eb\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u753b\u50cf\u3092\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u666e\u901a\u306eJPG / PNG / PDF\u3001\u9ad8\u89e3\u50cf\u5ea6\u306eJPG / PNG / PDF\u3001\u304a\u3088\u3073\u900f\u660e\u306a\u80cc\u666f\u306ePNG\u3067\u3059\u3002","price_page_feature_desc16_list_desc1":"\u666e\u901a\u306eJPG / PNG / PDF","price_page_feature_desc16_list_desc2":"\u9ad8\u89e3\u50cf\u5ea6\u306eJPG / PNG / PDF\u3001\u304a\u3088\u3073\u900f\u660e\u306a\u80cc\u666f\u306ePNG\u3067\u3059\u3002","price_page_feature_desc17":"\u4e00\u8cab\u3057\u305f\u30d5\u30a9\u30f3\u30c8\u3001\u30ed\u30b4\u3001\u8272\u3092\u4f7f\u7528\u3057\u3066\u30d6\u30e9\u30f3\u30c9\u30c7\u30b6\u30a4\u30f3\u3092\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30ed\u30fc\u30ab\u30eb\u30d5\u30a9\u30f3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc18":"\u5e83\u544a\u306e\u5e72\u6e09\u304c\u306a\u304f\u3001\u3088\u308a\u5927\u304d\u306a\u30ad\u30e3\u30f3\u30d0\u30b9\u3092\u697d\u3057\u3081\u307e\u3059\u3002","price_page_feature_desc19":"AIGC\u95a2\u9023\u6a5f\u80fd\u306b\u5229\u7528\u3067\u304d\u308b\u7121\u6599\u30dd\u30a4\u30f3\u30c8\u3092\u7372\u5f97\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc19_list_desc1":"100 \u30af\u30ec\u30b8\u30c3\u30c8/\u6708","price_page_feature_desc19_list_desc2":"300 \u30af\u30ec\u30b8\u30c3\u30c8/\u6708","price_page_feature_desc2":"\u30c7\u30b6\u30a4\u30f3\u30c4\u30fc\u30eb\u5185\u306e\u4e00\u90e8\u306e\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u30ea\u30bd\u30fc\u30b9\u3084\u7de8\u96c6\u6a5f\u80fd\u3092\u542b\u3080\u3002","price_page_feature_desc3":"\u30b3\u30e9\u30fc\u30b8\u30e5\u30c4\u30fc\u30eb\u5185\u306e\u4e00\u90e8\u306e\u30b3\u30e9\u30fc\u30b8\u30e5\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3084\u7de8\u96c6\u6a5f\u80fd\u3092\u542b\u3080\u3002","price_page_feature_desc4":"HSL\u3001\u30ce\u30a4\u30ba\u4f4e\u6e1b\u3001\u53cd\u8ee2\u30ab\u30e9\u30fc\u3001\u7f8e\u808c\u3001\u30b7\u30a7\u30a4\u30d7\u306a\u3069\u306e\u3059\u3079\u3066\u306e\u9ad8\u5ea6\u306a\u7de8\u96c6\u6a5f\u80fd\u3001\u9ad8\u5ea6\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u3001\u30d5\u30ec\u30fc\u30e0\u3092\u542b\u307f\u307e\u3059\u3002","price_page_feature_desc5":"\u8907\u6570\u306e\u753b\u50cf\u3092\u4e00\u5ea6\u306b\u7de8\u96c6\u3057\u3001\u30d0\u30c3\u30c1\u30af\u30ed\u30c3\u30d7\u3001\u30d0\u30c3\u30c1\u30ea\u30b5\u30a4\u30ba\u3001\u30d0\u30c3\u30c1\u30c6\u30ad\u30b9\u30c8\u8ffd\u52a0\u3001\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f\u3092\u307e\u3068\u3081\u3066\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc6":"\u5199\u771f\u306e\u89e3\u50cf\u5ea6\u3092\u9ad8\u3081\u3001\u753b\u50cf\u306e\u8a73\u7d30\u3092\u9bae\u660e\u306b\u3057\u3001\u753b\u50cf\u306e\u54c1\u8cea\u3092\u5411\u4e0a\u3055\u305b\u3066\u3001\u5199\u771f\u3092\u3088\u308a\u30af\u30ea\u30a2\u306b\u3057\u307e\u3059\u3002","price_page_feature_desc7":"\u5199\u771f\u306e\u80cc\u666f\u3092\u4e00\u77ac\u3067\u53d6\u308a\u9664\u304d\u3001\u80cc\u666f\u8272\u3084\u80cc\u666f\u753b\u50cf\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc8":"\u5199\u771f\u4e0a\u306e\u4e0d\u8981\u306a\u7269\u3001\u30c6\u30ad\u30b9\u30c8\u3001\u307e\u305f\u306f\u30a6\u30a9\u30fc\u30bf\u30fc\u30de\u30fc\u30af\u3092\u9664\u53bb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc9":"\u30c6\u30ad\u30b9\u30c8\u306e\u5165\u529b\u307e\u305f\u306f\u753b\u50cf\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u306b\u3088\u308a\u3001AI\u306b\u3088\u308b\u4f5c\u6210\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002","price_page_feature_title1":"\u57fa\u672c\u7684\u306a\u7de8\u96c6\u6a5f\u80fd","price_page_feature_title10":"AI\u30a2\u30fc\u30c8\u30a8\u30d5\u30a7\u30af\u30c8","price_page_feature_title11":"AI\u81ea\u52d5\u7740\u8272","price_page_feature_title12":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","price_page_feature_title13":"\u30d5\u30a9\u30f3\u30c8","price_page_feature_title14":"\u30ea\u30bd\u30fc\u30b9","price_page_feature_title15":"\u30af\u30e9\u30a6\u30c9\u30b9\u30c8\u30ec\u30fc\u30b8","price_page_feature_title16":"\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8","price_page_feature_title17":"\u30d6\u30e9\u30f3\u30c9\u30c4\u30fc\u30eb\u30ad\u30c3\u30c8","price_page_feature_title18":"\u5e83\u544a\u975e\u8868\u793a","price_page_feature_title19":"\u30dd\u30a4\u30f3\u30c8\u30d7\u30ec\u30bc\u30f3\u30c8","price_page_feature_title2":"\u57fa\u672c\u7684\u306a\u30c7\u30b6\u30a4\u30f3\u6a5f\u80fd","price_page_feature_title3":"\u57fa\u672c\u7684\u306a\u30b3\u30e9\u30fc\u30b8\u30e5\u30ec\u30a4\u30a2\u30a6\u30c8\uff06\u6a5f\u80fd","price_page_feature_title4":"\u9ad8\u5ea6\u306a\u7de8\u96c6\u6a5f\u80fd","price_page_feature_title5":"\u30d0\u30c3\u30c1\u7de8\u96c6","price_page_feature_title6":"AI\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u6700\u9069\u5316","price_page_feature_title7":"AI\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u62a0\u50cf","price_page_feature_title8":"AI\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u9664\u53bb","price_page_feature_title9":"AI\u751f\u6210\u30b3\u30f3\u30c6\u30f3\u30c4\uff08AIGC\uff09","price_page_free_info":"Free","price_page_free_trial":"\u7121\u6599\u304a\u8a66\u3057","price_page_most_popular":"\u6700\u3082\u4eba\u6c17\u306e\u3042\u308b","price_page_one_time_payment":"\u5f93\u91cf\u5236\u306e\u652f\u6255\u3044","price_page_platform_title":"\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5bfe\u5fdc","price_page_premium_plans":"\u30d7\u30ec\u30df\u30a2\u30e0\u30d7\u30e9\u30f3","price_page_subscribe_now":"\u4eca\u3059\u3050\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6","price_page_subscription_plan":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30d7\u30e9\u30f3","price_page_try_now":"\u4eca\u3059\u3050\u304a\u8a66\u3057\u304f\u3060\u3055\u3044","price_yearly_switch":"\u5e74\u6255\u3044","read_aigc_tips_title":"\u30af\u30ea\u30c3\u30af\u3057\u3066 AIGC \u306e\u30d2\u30f3\u30c8\u3092\u8aad\u3080","result_after":"\u5f8c","resume_uns_active_button":"OK\u3001\u5206\u304b\u308a\u307e\u3057\u305f","resume_uns_active_desc":"\u73fe\u5728\u306e\u30aa\u30d5\u30a1\u30fc\u306f\u8acb\u6c42\u3055\u308c\u3066\u304a\u308a\u3001\u5272\u5f15\u3055\u308c\u305f\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u4fa1\u683c\u3092\u3059\u3067\u306b\u304a\u697d\u3057\u307f\u3044\u305f\u3060\u3051\u307e\u3059\u3002","resume_uns_active_title":"\u30aa\u30d5\u30a1\u30fc\u3092\u53d7\u3051\u53d6\u308a\u307e\u3057\u305f\uff01","resume_uns_button":"30%\u5272\u5f15\u3067\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u5fa9\u5143","resume_uns_card_number":"\u30ab\u30fc\u30c9\u756a\u53f7:","resume_uns_click_download_app_title":"\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea","resume_uns_desc":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u5fa9\u5143\u3057\u305f\u5f8c\u3001\u3059\u3050\u306b\u306f\u8ab2\u91d1\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u306b\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002 \u305d\u308c\u4ee5\u964d\u306f\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u6599\u91d1\u304c30%\u5272\u5f15\u306b\u306a\u308a\u307e\u3059\u3002","resume_uns_discounted_subscription_fee":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u6599\u91d1\u306e\u5272\u5f15\uff1a","resume_uns_download_app_title":"Fotor\u30d7\u30ec\u30df\u30a2\u30e0\u7279\u5178\u3092\u30c7\u30d0\u30a4\u30b9\u9593\u3067\u304a\u697d\u3057\u307f\u3044\u305f\u3060\u3051\u307e\u3059\uff01","resume_uns_download_button":"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","resume_uns_email":"Email\uff1a","resume_uns_expiration_date":"\u6709\u52b9\u671f\u9650\uff1a","resume_uns_expired_button":"20%\u5272\u5f15\u3067\u8cfc\u8aad","resume_uns_expired_desc":"\u3042\u306a\u305f\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u3066\u304a\u308a\u300130%\u5272\u5f15\u306f\u6709\u52b9\u671f\u9650\u306b\u306e\u307f\u6709\u52b9\u3067\u3059\u3002 \u3057\u304b\u3057\u3001\u3042\u306a\u305f\u306f\u307e\u306020%\u5272\u5f15\u306e\u30d7\u30ec\u30df\u30a2\u30e0\u30d7\u30e9\u30f3\u3092\u8cfc\u8aad\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059!","resume_uns_expired_title":"\u8cfc\u8aad\u671f\u9593\u304c\u7d42\u4e86\u3057\u307e\u3057\u305f... \u3067\u3082\u3001\u3061\u3087\u3063\u3068\u5f85\u3063\u3066\uff01","resume_uns_mobile_download_app_title":"\u4eca\u3059\u3050Fotor\u30a2\u30d7\u30ea\u3092\u5165\u624b","resume_uns_month":"\u304b\u6708","resume_uns_nickname":"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\uff1a","resume_uns_payment_method":"\u304a\u652f\u6255\u3044\u65b9\u6cd5\uff1a","resume_uns_payment_method_value":"\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u307e\u305f\u306f\u30c7\u30d3\u30c3\u30c8\u30ab\u30fc\u30c9","resume_uns_scan_download_app_title":"\u30b9\u30ad\u30e3\u30f3\u3057\u3066Fotor App\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","resume_uns_status":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30bf\u30b9\uff1a","resume_uns_status_cancel":"\u30ad\u30e3\u30f3\u30bb\u30eb\u6e08\u307f","resume_uns_subscription_fee":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u6599\u91d1\uff1a","resume_uns_subscription_plan":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30d7\u30e9\u30f3:","resume_uns_success_button":"OK\u3001\u5206\u304b\u308a\u307e\u3057\u305f","resume_uns_success_desc":"\u3053\u308c\u3067\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u304c\u6b63\u5e38\u306b\u5fa9\u5143\u3055\u308c\u307e\u3057\u305f\u3002","resume_uns_success_title":"\u7d20\u6674\u3089\u3057\u3044\uff01","resume_uns_top_title":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306e\u5fa9\u5143","resume_uns_year":"\u5e74\u9593","share_button_text":"\u30b7\u30a7\u30a2","unitMonth":"/\u6708","upload_background":"\u3044\u307e\u3059\u3050\u59cb\u3081\u308b\uff01","upload_background_remover":"\u3044\u307e\u3059\u3050\u59cb\u3081\u308b\uff01","upload_fail":"\u753b\u50cf\u3092\u958b\u3051\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002","upload_format_custom":"\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u306f\u3001{JPG\u3001PNG\u3001HEIC/HEIF\u3001WebP} \u306e\u307f\u3067\u3059","upload_number_tip":"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u7de8\u96c6\u7528\u306b 1 \u679a\u306e\u5199\u771f\u306e\u8ffd\u52a0\u306e\u307f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u7de8\u96c6\u30c4\u30fc\u30eb\u3067\u3055\u3089\u306b\u5199\u771f\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002","upload_start":"\u4eca\u3059\u3050\u59cb\u3081\u308b\uff01","upload_sure":"\u78ba\u8a8d","year_credit_discount_tip":"70\uff05\u5272\u5f15","year_discount_tip":"62\uff05\u5272\u5f15","copy_success":"\u30b3\u30d4\u30fc\u306b\u6210\u529f\u3057\u307e\u3057\u305f","price_page_feature_title20":"AI\u9854\u307c\u304b\u3057\u9664\u53bb","price_page_feature_desc20":"\u30dd\u30fc\u30c8\u30ec\u30fc\u30c8\u5199\u771f\u306e\u307c\u304b\u3057\u3092\u9664\u53bb\u3057\u3001\u30b7\u30e3\u30fc\u30d7\u306b\u3057\u307e\u3059\u3002","price_page_feature_title21":"AI\u30b9\u30ad\u30f3\u30ec\u30bf\u30c3\u30c1","price_page_feature_desc21":"\u3042\u306a\u305f\u306e\u30dd\u30fc\u30c8\u30ec\u30fc\u30c8\u3084\u5199\u771f\u3092\u9b54\u6cd5\u306e\u3088\u3046\u306b\u5b8c\u74a7\u306b\u5909\u8eab\u3055\u305b\u307e\u3059\u3002\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u5199\u771f\u3092\u30ec\u30bf\u30c3\u30c1\u3057\u3001\u30ef\u30f3\u30af\u30ea\u30c3\u30af\u3067\u8f1d\u304f\u300c\u3042\u306a\u305f\u300d\u3092\u660e\u3089\u304b\u306b\u3057\u307e\u3059\u3002","price_page_feature_title22":"AI\u62e1\u5927","price_page_feature_desc22":"\u5199\u771f\u306e\u88ab\u5199\u4f53\u3001\u80cc\u666f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u81ea\u52d5\u7684\u306b\u62e1\u5f35\u3057\u307e\u3059\u3002","price_page_feature_title23":"AI\u7f6e\u63db","price_page_feature_desc23":"\u5199\u771f\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5909\u66f4\u3057\u305f\u308a\u3001\u7f6e\u304d\u63db\u3048\u305f\u308a\u3067\u304d\u307e\u3059\u3002","price_page_feature_title24":"\u53e4\u3044\u5199\u771f\u306e\u4fee\u5fa9","price_page_feature_desc24":"\u30c0\u30e1\u30fc\u30b8\u3092\u81ea\u52d5\u4fee\u5fa9\u3057\u3001\u307c\u304b\u3057\u3092\u9664\u53bb\u3057\u3001\u8272\u3042\u305b\u305f\u8272\u3084\u30c7\u30a3\u30c6\u30fc\u30eb\u3092\u5fa9\u5143\u3057\u3066\u3001\u53e4\u3044\u5199\u771f\u3092\u65b0\u3057\u3044\u5199\u771f\u306b\u751f\u307e\u308c\u5909\u308f\u3089\u305b\u307e\u3059\u3002","price_page_feature_title25":"AI\u30a2\u30d0\u30bf\u30fc","price_page_feature_desc25":"\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u3067\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u3001\u30ea\u30a2\u30eb\u306aHD AI\u30d8\u30c3\u30c9\u30b7\u30e7\u30c3\u30c8\u3084\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5199\u771f\u3092\u7c21\u5358\u304b\u3064\u8fc5\u901f\u306b\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002","price_page_feature_desc25_list_desc1":"50\uff05\u5272\u5f15","price_page_feature_title26":"AI\u30d5\u30a7\u30a4\u30b9\u30b9\u30ef\u30c3\u30d7","price_page_feature_desc26":"\u5199\u771f\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u9854\u3092\u5165\u308c\u66ff\u3048\u307e\u3057\u3087\u3046\u3002\u5b8c\u74a7\u306b\u30ea\u30a2\u30eb\u3067\u30b7\u30fc\u30e0\u30ec\u30b9\u306aAI\u751f\u6210\u306e\u9854\u5165\u308c\u66ff\u3048\u3067\u3001\u3069\u3093\u306a\u5a2f\u697d\u306b\u3082\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002","price_page_feature_title27":"AI\u30d3\u30c7\u30aa\u30a8\u30f3\u30cf\u30f3\u30b5\u30fc","price_page_feature_desc27":"\u30b7\u30e3\u30fc\u30d7\u30cd\u30b9\u3001\u660e\u308b\u3055\u306a\u3069\u3001\u30d3\u30c7\u30aa\u3092\u3088\u308a\u9bae\u660e\u306b\u3059\u308b\u305f\u3081\u306e\u8a2d\u5b9a\u3092\u542b\u3081\u3001\u30d3\u30c7\u30aa\u306e\u54c1\u8cea\u3092\u5373\u5ea7\u306b\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002","price_page_feature_desc27_list_desc1":"3s\uff0c\u30d7\u30ec\u30d3\u30e5\u30fc\u30d3\u30c7\u30aa","price_page_feature_desc27_list_desc2":"\u30d5\u30eb\u30bf\u30a4\u30e0\u3001HD\u30d3\u30c7\u30aa","price_page_feature_title28":"AI\u30d3\u30c7\u30aa\u80cc\u666f\u9664\u53bb","price_page_feature_desc28":"\u30ef\u30f3\u30bf\u30c3\u30d7\u3067\u30dd\u30fc\u30c8\u30ec\u30fc\u30c8\u30d3\u30c7\u30aa\u306e\u80cc\u666f\u3092\u524a\u9664\u3057\u307e\u3059\u3002","price_page_feature_desc28_list_desc1":"3s\u3001\u30d3\u30c7\u30aa\u3092\u30d7\u30ec\u30d3\u30e5\u30fc","price_page_feature_desc28_list_desc2":"\u30d5\u30eb\u30bf\u30a4\u30e0\u3001HD\u30d3\u30c7\u30aa","price_page_feature_title29":"AI\u30d0\u30c3\u30c1\u7de8\u96c6","price_page_feature_desc29":"\u30d0\u30c3\u30c1\u80cc\u666f\u30ea\u30e0\u30fc\u30d0\u30fc\u3001\u30d0\u30c3\u30c1\u80cc\u666f\u5909\u66f4\u306a\u3069\u306eAI\u30d0\u30c3\u30c1\u7de8\u96c6\u3002","price_page_feature_desc29_list_desc1":"\u4e00\u5ea6\u306b3\u679a\u307e\u3067","price_page_feature_desc29_list_desc2":"\u4e00\u5ea6\u306b50\u679a\u307e\u3067","price_page_faq_credit_answer1":"\u30dd\u30a4\u30f3\u30c8\u306f\u4eee\u60f3\u901a\u8ca8\u5f62\u5f0f\u3067\u3001Fotor\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3084\u30a2\u30d7\u30ea\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u652f\u6255\u3044\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u73fe\u5728\u3001\u30dd\u30a4\u30f3\u30c8\u306fAI\u30a4\u30e1\u30fc\u30b8\u751f\u6210\u3084AI\u80cc\u666f\u751f\u6210\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_faq_credit_answer2":"\u5b9a\u671f\u8cfc\u8aad\u3092\u7dad\u6301\u3057\u3066\u3044\u308b\u9650\u308a\u3001\u5f53\u6708\u4f7f\u7528\u3057\u306a\u304b\u3063\u305f\u5b9a\u671f\u8cfc\u8aad\u30dd\u30a4\u30f3\u30c8\u306f\u7fcc\u6708\u306b\u8ee2\u9001\u3055\u308c\u3001\u6700\u5927\u30675\u304b\u6708\u307e\u3067\u84c4\u7a4d\u3067\u304d\u307e\u3059\u3002\u5b9a\u671f\u8cfc\u8aad\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u3068\u3001\u30dd\u30a4\u30f3\u30c8\u306f\u5b9a\u671f\u8cfc\u8aad\u671f\u9593\u306e\u7d42\u4e86\u65e5\u306b\u5931\u52b9\u3057\u307e\u3059\u3002","price_page_faq_credit_answer3":"\u30dd\u30a4\u30f3\u30c8\u5b9a\u671f\u8cfc\u5165\u30d7\u30e9\u30f3\u3092\u8cfc\u5165\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30dd\u30a4\u30f3\u30c8\u304c\u4f7f\u3044\u5207\u3063\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u306f\u3001\u3088\u308a\u591a\u304f\u306e\u30dd\u30a4\u30f3\u30c8\u3092\u6301\u3064\u5b9a\u671f\u8cfc\u5165\u30d7\u30e9\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u304b\u3001\u5358\u767a\u3067\u30dd\u30a4\u30f3\u30c8\u3092\u8cfc\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_faq_credit_answer4":"\u306f\u3044\u3001\u30dd\u30a4\u30f3\u30c8\u306fFotor\u306e\u3059\u3079\u3066\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002Fotor\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3001App\uff08iOS/Android\uff09\u3001\u304a\u3088\u3073\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff08Mac/Windows\uff09\u3092\u542b\u307f\u307e\u3059\u3002","price_page_faq_credit_answer5":"\u306f\u3044\u3001\u30dd\u30a4\u30f3\u30c8\u5b9a\u671f\u8cfc\u5165\u30d7\u30e9\u30f3\u306f\u3044\u3064\u3067\u3082\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u3059\u3002","price_page_faq_credit_answer6":"PayPal\u307e\u305f\u306f\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u652f\u6255\u3044\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002VISA\u3001MasterCard\u3001American Express\u3001JCB\u306a\u3069\u306e\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u307e\u305f\u306f\u30c7\u30d3\u30c3\u30c8\u30ab\u30fc\u30c9\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002","price_page_faq_credit_answer7":"\u306f\u3044\u3002\u4f1a\u54e1\u30b3\u30fc\u30b9\u306b\u306f\u30dd\u30a4\u30f3\u30c8\u304c\u9650\u3089\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u3088\u308a\u591a\u304f\u306e\u30dd\u30a4\u30f3\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u30dd\u30a4\u30f3\u30c8\u30b3\u30fc\u30b9\u3092\u8cfc\u8aad\u3057\u305f\u308a\u3001\u30dd\u30a4\u30f3\u30c8\u3092\u4e00\u5ea6\u306b\u8cfc\u5165\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f1a\u54e1\u30b3\u30fc\u30b9\u3001\u30dd\u30a4\u30f3\u30c8\u30b3\u30fc\u30b9\u306f\u7af6\u5408\u305b\u305a\u3001\u540c\u6642\u306b\u5b58\u5728\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_faq_credit_question1":"\u30dd\u30a4\u30f3\u30c8\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f\u30dd\u30a4\u30f3\u30c8\u306f\u4f55\u306b\u4f7f\u3048\u307e\u3059\u304b\uff1f","price_page_faq_credit_question2":"\u30dd\u30a4\u30f3\u30c8\u306e\u6709\u52b9\u671f\u9650\u306f\u3069\u306e\u304f\u3089\u3044\u3067\u3059\u304b\uff1f\u672a\u4f7f\u7528\u306e\u30dd\u30a4\u30f3\u30c8\u306f\u84c4\u7a4d\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_credit_question3":"\u30dd\u30a4\u30f3\u30c8\u304c\u4f7f\u3044\u5207\u3063\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u3001\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f","price_page_faq_credit_question4":"\u30dd\u30a4\u30f3\u30c8\u306f\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_credit_question5":"\u30dd\u30a4\u30f3\u30c8\u5b9a\u671f\u8cfc\u5165\u30d7\u30e9\u30f3\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_credit_question6":"\u3069\u306e\u3088\u3046\u306a\u652f\u6255\u3044\u65b9\u6cd5\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_credit_question7":"\u4f1a\u54e1\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u52a0\u5165\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30dd\u30a4\u30f3\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3082\u52a0\u5165\u3067\u304d\u307e\u3059\u304b?","price_page_faq_member_answer1":"\u306f\u3044\u3001Fotor\u306b\u306f\u591a\u304f\u306e\u57fa\u672c\u7684\u306a\u7121\u6599\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3084\u3088\u308a\u591a\u304f\u306e\u7d20\u6750\u30ea\u30bd\u30fc\u30b9\u3092\u4f53\u9a13\u3057\u305f\u3044\u5834\u5408\u306f\u3001Fotor Pro\u307e\u305f\u306fFotor Pro+\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002","price_page_faq_member_answer2":"Fotor Pro+\u306b\u306f\u3001\u3059\u3079\u3066\u306eFotor Pro\u306e\u6a29\u5229\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u3055\u3089\u306b\u3001Fotor Pro+\u306f\u3001\u8ffd\u52a0\u306e\u5546\u7528\u7279\u6a29\u3067\u3088\u308a\u591a\u304f\u306e\u9ad8\u54c1\u8cea\u306e\u8457\u4f5c\u6a29\u753b\u50cf\u3092\u5229\u7528\u3067\u304d\u3001\u30d6\u30e9\u30f3\u30c9\u30c4\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u3092\u4f7f\u7528\u3057\u3066\u30d6\u30e9\u30f3\u30c9\u30ed\u30b4\u3001\u8272\u3001\u30d5\u30a9\u30f3\u30c8\u3092\u7ba1\u7406\u3067\u304d\u3001\u30ed\u30fc\u30ab\u30eb\u30d5\u30a9\u30f3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002","price_page_faq_member_answer3":"\u306f\u3044\u3001Fotor Pro\u3068Fotor Pro+\u306f\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7\u3092\u8cfc\u5165\u3059\u308b\u3068\u3001Fotor\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3001\u30a2\u30d7\u30ea\uff08iOS/Android\uff09\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u7248\uff08Mac/Windows\uff09\u306e\u3059\u3079\u3066\u306e\u9ad8\u5ea6\u306a\u6a29\u5229\u304c\u30ed\u30c3\u30af\u89e3\u9664\u3055\u308c\u307e\u3059\u3002\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3082\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u540c\u671f\u3055\u308c\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_faq_member_answer4":"PayPal\u307e\u305f\u306f\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u652f\u6255\u3044\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002VISA\u3001MasterCard\u3001American Express\u3001JCB\u306a\u3069\u306e\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u307e\u305f\u306f\u30c7\u30d3\u30c3\u30c8\u30ab\u30fc\u30c9\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002","price_page_faq_member_answer5":"\u306f\u3044\u3001\u8acb\u6c42\u66f8\u3092\u30e1\u30fc\u30eb\u3067\u304a\u9001\u308a\u3057\u307e\u3059\u3002\u96fb\u5b50\u30e1\u30fc\u30eb\u3067\u8acb\u6c42\u66f8\u3092\u53d7\u4fe1\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001Fotor\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u500b\u4eba\u60c5\u5831\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u652f\u6255\u3044\u5c65\u6b74\u2192\u8acb\u6c42\u66f8\u3092\u691c\u7d22\u3057\u307e\u3059\u3002\u5fc5\u8981\u306a\u8acb\u6c42\u66f8\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3060\u3051\u3067\u3059\u3002","price_page_faq_member_answer6":"\u306f\u3044\u3001\u3044\u3064\u3067\u3082\u89e3\u7d04\u3067\u304d\u307e\u3059\u3002Fotor\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u898b\u3064\u3051\u3066\u3001\u89e3\u7d04\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u624b\u9806\u306b\u5f93\u3063\u3066\u89e3\u7d04\u3067\u304d\u307e\u3059\u3002","price_page_faq_member_answer7":"\u306f\u3044\u3001\u3044\u3064\u3067\u3082\u6708\u9593\u30d7\u30e9\u30f3\u304b\u3089\u5e74\u9593\u30d7\u30e9\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u305f\u308a\u3001Pro\u304b\u3089Pro+\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001Fotor\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u898b\u3064\u3051\u3001\u30d7\u30e9\u30f3\u3092\u5909\u66f4\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u307e\u3059\u3002","price_page_faq_member_answer8":"\u306f\u3044\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30d7\u30e9\u30f3\u306f\u81ea\u52d5\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002\u6599\u91d1\u3092\u8acb\u6c42\u3055\u308c\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u3044\u3064\u3067\u3082\u89e3\u7d04\u3067\u304d\u307e\u3059\u304c\u3001\u73fe\u5728\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u671f\u9593\u304c\u7d42\u4e86\u3059\u308b\u307e\u3067\u306b\u89e3\u7d04\u3057\u306a\u3044\u3068\u3001\u81ea\u52d5\u7684\u306b\u8acb\u6c42\u3055\u308c\u307e\u3059\u3002","price_page_faq_member_answer9":"\u30dd\u30a4\u30f3\u30c8\u306f\u3001AI\u30a4\u30e1\u30fc\u30b8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3084AI\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306a\u3069\u306e\u30c4\u30fc\u30eb\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002AIGC\u95a2\u9023\u6a5f\u80fd\u306e\u30b5\u30fc\u30d0\u30fc\u8cbb\u7528\u304c\u975e\u5e38\u306b\u9ad8\u3044\u305f\u3081\u3001\u7121\u5236\u9650\u306e\u4f7f\u7528\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u30dd\u30a4\u30f3\u30c8\u304c\u4f7f\u3044\u679c\u305f\u3055\u308c\u305f\u5834\u5408\u306f\u3001\u5358\u72ec\u306e\u30dd\u30a4\u30f3\u30c8\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8cfc\u5165\u3057\u3066\u88dc\u5145\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","price_page_faq_member_question1":"\u79c1\u306f\u7121\u6599\u3067Fotor\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_member_question2":"Fotor Pro\u3068Fotor Pro+\u306e\u9055\u3044\u306f\u4f55\u3067\u3059\u304b\uff1f","price_page_faq_member_question3":"\u79c1\u306e\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7\u306f\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_member_question4":"\u3069\u306e\u3088\u3046\u306a\u652f\u6255\u3044\u65b9\u6cd5\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_member_question5":"\u8cfc\u5165\u5f8c\u306b\u8acb\u6c42\u66f8\u304c\u3042\u308a\u307e\u3059\u304b\uff1f","price_page_faq_member_question6":"\u89e3\u7d04\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_member_question7":"\u73fe\u5728\u306e\u30d7\u30e9\u30f3\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3067\u304d\u307e\u3059\u304b\uff1f","price_page_faq_member_question8":"\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u30d7\u30e9\u30f3\u306f\u81ea\u52d5\u66f4\u65b0\u3055\u308c\u307e\u3059\u304b\uff1f","price_page_faq_member_question9":"\u4f1a\u54e1\u30d7\u30e9\u30f3\u3092\u8cfc\u5165\u3059\u308b\u3068\u4ed8\u4e0e\u3055\u308c\u308b\u30dd\u30a4\u30f3\u30c8\u306f\u4f55\u306b\u4f7f\u3048\u307e\u3059\u304b\uff1f","mobile_to_app_popup_title":"\u30a2\u30d7\u30ea\u3067\u7d9a\u884c\u3057\u307e\u3059\u304b\uff1f","mobile_to_app_popup_subtitle":"\u3042\u306a\u305f\u306e\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u5411\u3051\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u305f\u3088\u308a\u826f\u3044\u4f53\u9a13\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\uff01","mobile_to_app_popup_button_stay":"\u30a6\u30a7\u30d6\u306b\u6ede\u5728\u3057\u3066\u304f\u3060\u3055\u3044","mobile_to_app_popup_button_open":"\u30a2\u30d7\u30ea\u3092\u958b\u304f","mobile_app_entry_pop_title":"Fotor Pro \u3092\u7121\u6599\u3067\u8a66\u3057\u3066\u307f\u305f\u3044\u3067\u3059\u304b\uff1f","mobile_app_entry_pop_content":"\u7c21\u5358\u306a\u7de8\u96c6\u3068\u30d7\u30ed\u306e\u6a5f\u80fd\u306e\u7121\u6599\u30c8\u30e9\u30a4\u30a2\u30eb\u306e\u305f\u3081\u306bFotor\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\uff01\ud83d\udc47"}'),
                pt_BR: JSON.parse('{"ai_textarea_placeholder":"Descreva o que voc\xea quer que a IA desenhe","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Usu\xe1rios","aigc_data_reveal_title2":"Imagens Geradas","aigc_data_reveal_title3":"Classifica\xe7\xe3o","back_to_top":"Role para cima","breadCrumbs_home":"In\xedcio","credits_unit":"/Cr\xe9dito","drop_image_to_upload":"Coloque a imagem aqui","header_logo_hover_info":"Arraste o logotipo para dentro da barra de favoritos\\npara visitar o Fotor mais facilmente da pr\xf3xima vez!","join_discord_title":"Clique para visitar o Discord","mobile_open_app_fixed_popup_desc":"desfrute de uma experi\xeancia de edi\xe7\xe3o aprimorada adaptada para o seu dispositivo m\xf3vel!","mobile_to_app_cancel":"Agora n\xe3o","mobile_to_app_desc":"Editar e fazer o design de suas fotos onde estiver.","mobile_to_app_desc1":"Compartilhar com as redes sociais de forma mais r\xe1pida e f\xe1cil!","mobile_to_app_ok":"Explorar o Aplicativo","mobile_to_app_title":"Continuar no aplicativo","mobile_to_more_text":"Comece a editar e projetar","more":"Mais","more_templates_button":"Explorar todos os templates","original_before":"Antes","pointsActivityPage_activity_list_mobile_title":"Ganhe cr\xe9ditos","pointsActivityPage_copied":"Copiado","pointsActivityPage_copy":"Copiar","pointsActivityPage_credits":"Cr\xe9ditos:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Centro de Tarefas","pointsActivityPage_desc":"Fazer o que voc\xea gosta no Fotor permite que voc\xea obtenha mais recompensas de forma f\xe1cil e divertida. Comece a ganhar com as recompensas do Fotor hoje mesmo!","pointsActivityPage_download_app_text":"Baixe o aplicativo Fotor e registre-se para ganhar 5 cr\xe9ditos gratuitos no aplicativo. Os cr\xe9ditos ganhos podem ser usados tanto em nosso site quanto no aplicativo!","pointsActivityPage_download_app_title":"Baixar o aplicativo","pointsActivityPage_my_credits_text":"Meus cr\xe9ditos","pointsActivityPage_novip_text":"Registre-se no Fotor Pro para ganhar o dobro de cr\xe9ditos","pointsActivityPage_one_activity_type_mobile_text":"Ganhe uma vez","pointsActivityPage_receive_activity_button_mobile_text":"Ganhar","pointsActivityPage_receive_activity_button_text":"Ganhe cr\xe9ditos","pointsActivityPage_receive_points_toast":"Recebeu {numbers} cr\xe9dito(s)!","pointsActivityPage_received_activity_button_mobile_text":"Recebidos","pointsActivityPage_received_activity_button_text":"Recebidos","pointsActivityPage_share_link":"Compartilhar link","pointsActivityPage_some_activity_type_mobile_text":"Ganhe diariamente","pointsActivityPage_svip_text":"Pr\xeamios de cr\xe9ditos exclusivos Pro+","pointsActivityPage_title":"Junte-se ao Fotor e jogue com o Fotor para obter recompensas facilmente | Fotor","pointsActivityPage_upgrade_button_text":"Atualizar","pointsActivityPage_username_prefix_text":"Ol\xe1!","pointsActivityPage_vip_text":"Pr\xeamios de cr\xe9ditos exclusivos Pro","pointsActivityPage_welcome":"Bem-vindo ao Centro de Tarefas do Fotor!","pointsActivityPage_what_use_credits_mobile_text":"Voc\xea pode usar cr\xe9ditos para gerar imagens de IA com o Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">Criar agora</a>","pointsActivityPage_what_use_credits_text":"Voc\xea pode usar cr\xe9ditos para gerar uma ampla gama de imagens de IA com o <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>, criar fundos incr\xedveis para seus recortes no <a href=\\"https://www.fotor.com/pt/features/background-remover/upload\\">Fotor Background Remover</a> e criar designs exclusivos gerando seus pr\xf3prios elementos ou imagens no <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. A gera\xe7\xe3o de uma imagem de IA consome 1 ou 2 cr\xe9ditos nessas ferramentas.","pointsActivityPage_what_use_credits_title":"O que posso fazer com os cr\xe9ditos?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Criar agora","pointsActivityPage_what_use_credits_to_link_text":"Gerar agora","preview_upload_limit_size":"O carregamento falhou devido ao tamanho excessivo da imagem ou do tamanho do arquivo.{link}.","preview_upload_more":"Saiba Mais","price_monthly_switch":"Mensal","price_page_activity_btn_discount":"Mude de plano com {discount_en}% de desconto","price_page_billed_annually":"faturado anualmente","price_page_buy_now":"Compre agora","price_page_credits_once_info":"Cr\xe9ditos dispon\xedveis para uso a qualquer momento dentro de dois anos ap\xf3s a compra.","price_page_credits_plans":"Planos de Cr\xe9ditos","price_page_credits_subscribe_info":"Cr\xe9ditos n\xe3o utilizados ser\xe3o acumulados enquanto voc\xea estiver inscrito, at\xe9 5 meses de acumula\xe7\xe3o.","price_page_feature_desc1":"Incluindo ajustes b\xe1sicos e recursos de beleza, bem como efeitos parciais, filtros e molduras.","price_page_feature_desc10":"Transforme fotos em esbo\xe7os, pinturas a \xf3leo, aquarelas, desenhos animados e outros tipos de pinturas.","price_page_feature_desc10_list_desc1":"Download n\xe3o-HD com marca d\'\xe1gua","price_page_feature_desc10_list_desc2":"Download HD sem marca d\'\xe1gua","price_page_feature_desc11":"Transforma\xe7\xe3o de fotos em preto e branco em coloridas.","price_page_feature_desc12":"Modelos prontos para cartazes, cart\xf5es, postagens em m\xeddias sociais e outras ocasi\xf5es de design gr\xe1fico.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Fontes protegidas por direitos autorais em v\xe1rios estilos.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 e envio de fontes","price_page_feature_desc13_list_desc3":"523 e envio de fontes","price_page_feature_desc14":"Incluindo fundos, fotos, ilustra\xe7\xf5es, \xedcones, padr\xf5es e outros elementos e adesivos.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Capacidade de armazenamento em nuvem para seus projetos e uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"Formatos de arquivo nos quais as imagens podem ser baixadas.","price_page_feature_desc16_list_desc1":"JPG / PNG / PDF normal","price_page_feature_desc16_list_desc2":"JPG / PNG / PDF de alta resolu\xe7\xe3o e PNG transparente","price_page_feature_desc17":"Gerencie designs de marca com fontes, logotipos e cores unificadas. Capacidade de fazer upload de suas pr\xf3prias fontes.","price_page_feature_desc18":"Desfrute de uma tela maior sem distra\xe7\xf5es de an\xfancios.","price_page_feature_desc19":"Obtenha cr\xe9ditos gratuitos para recursos relacionados ao AIGC.","price_page_feature_desc19_list_desc1":"100 Cr\xe9ditos/M\xeas","price_page_feature_desc19_list_desc2":"300 Cr\xe9ditos/M\xeas","price_page_feature_desc2":"Incluindo recursos criativos parciais e recursos de edi\xe7\xe3o na ferramenta de design.","price_page_feature_desc3":"Incluindo modelos de colagem parciais e recursos de edi\xe7\xe3o na ferramenta de colagem.","price_page_feature_desc4":"Incluindo todos os recursos avan\xe7ados de edi\xe7\xe3o, como HSL, remo\xe7\xe3o de ru\xeddo, invers\xe3o de cores, suaviza\xe7\xe3o, reformula\xe7\xe3o, bem como todos os filtros e molduras premium.","price_page_feature_desc5":"Edite em lote v\xe1rias imagens, como cortar, redimensionar, adicionar texto, alterar formato de arquivo.","price_page_feature_desc6":"Desfoque inteligente de fotos aumentando a resolu\xe7\xe3o, detalhes de afia\xe7\xe3o de imagens e melhorando a qualidade da imagem.","price_page_feature_desc7":"Remova instantaneamente fundos de imagem com um clique. Tamb\xe9m \xe9 poss\xedvel trocar o fundo por qualquer cor ou imagem.","price_page_feature_desc8":"Remova objetos indesejados, texto e marcas d\'\xe1gua da foto, e a IA preencher\xe1 inteligentemente o conte\xfado restante da imagem.","price_page_feature_desc9":"A IA gera imagens a partir de prompts de texto ou imagens.","price_page_feature_title1":"Recursos B\xe1sicos de Edi\xe7\xe3o","price_page_feature_title10":"Efeito de foto IA","price_page_feature_title11":"Coloriza\xe7\xe3o IA","price_page_feature_title12":"Modelos","price_page_feature_title13":"Fontes","price_page_feature_title14":"Recursos Criativos","price_page_feature_title15":"Armazenamento em Nuvem","price_page_feature_title16":"Formato do Arquivo","price_page_feature_title17":"Kits de Marca","price_page_feature_title18":"Sem an\xfancios","price_page_feature_title19":"Cr\xe9ditos extras","price_page_feature_title2":"Recursos B\xe1sicos de Design","price_page_feature_title3":"Layouts e Recursos B\xe1sicos de Colagem","price_page_feature_title4":"Recursos Avan\xe7ados de Edi\xe7\xe3o","price_page_feature_title5":"Edi\xe7\xe3o em Lote","price_page_feature_title6":"Aprimorador de fotos IA","price_page_feature_title7":"Removedor de fundo IA","price_page_feature_title8":"Removedor de objetos IA","price_page_feature_title9":"Conte\xfado Gerado por IA","price_page_free_info":"Free","price_page_free_trial":"Teste Gr\xe1tis","price_page_most_popular":"Mais Popular","price_page_one_time_payment":"Pr\xe9-pago","price_page_platform_title":"Dispon\xedvel em todas as plataformas.","price_page_premium_plans":"Planos Premium","price_page_subscribe_now":"Assinar agora","price_page_subscription_plan":"Plano de Assinatura","price_page_try_now":"Experimente Agora","price_yearly_switch":"Anual","read_aigc_tips_title":"Clique para ler dicas da AIGC","result_after":"Depois","resume_uns_active_button":"Ok, entendi","resume_uns_active_desc":"A oferta atual foi reivindicada e voc\xea j\xe1 pode usufruir do pre\xe7o de assinatura com desconto.","resume_uns_active_title":"Voc\xea reivindicou a oferta!","resume_uns_button":"Restaurar Assinatura com 30% de Desconto","resume_uns_card_number":"N\xfamero do cart\xe3o:","resume_uns_click_download_app_title":"Aplicativo de \xe1rea de trabalho","resume_uns_desc":"Ap\xf3s o restabelecimento de sua assinatura, a cobran\xe7a n\xe3o ser\xe1 feita imediatamente, mas sim na data de vencimento da assinatura. A partir de ent\xe3o, voc\xea ter\xe1 um desconto de 30% em sua taxa de assinatura.","resume_uns_discounted_subscription_fee":"Taxa de Assinatura com Desconto:","resume_uns_download_app_title":"Aproveite os benef\xedcios do Fotor Premium em todos os dispositivos!","resume_uns_download_button":"Baixar","resume_uns_email":"Email:","resume_uns_expiration_date":"Data de Vencimento:","resume_uns_expired_button":"Assine com 20% de Desconto","resume_uns_expired_desc":"Sua assinatura expirou e a oferta de 30% de desconto s\xf3 \xe9 v\xe1lida antes da sua data de expira\xe7\xe3o. Mas voc\xea ainda pode assinar qualquer plano premium por 20% de Desconto!","resume_uns_expired_title":"Oferta expirada... Mas h\xe1 outra!","resume_uns_mobile_download_app_title":"Obtenha o aplicativo Fotor agora","resume_uns_month":"M\xeas","resume_uns_nickname":"Apelido:","resume_uns_payment_method":"Forma de Pagamento:","resume_uns_payment_method_value":"Cart\xe3o de cr\xe9dito ou d\xe9bito","resume_uns_scan_download_app_title":"Scan para baixar o Fotor App","resume_uns_status":"Status da Assinatura:","resume_uns_status_cancel":"Cancelado","resume_uns_subscription_fee":"Taxa de Assinatura:","resume_uns_subscription_plan":"Plano de Assinatura:","resume_uns_success_button":"Ok, entendi","resume_uns_success_desc":"Agora voc\xea restaurou a assinatura com sucesso.","resume_uns_success_title":"Legal!","resume_uns_top_title":"Restaurar Assinatura","resume_uns_year":"Ano","share_button_text":"Partilhar","unitMonth":"/m\xeas","upload_background":"Come\xe7ar","upload_background_remover":"Come\xe7ar","upload_fail":"Falha ao abrir a imagem, tente novamente.","upload_format_custom":"Apenas {JPG, PNG,HEIC/HEIF,WebP} s\xe3o suportados para abertura.","upload_number_tip":"Esta p\xe1gina suporta apenas a adi\xe7\xe3o de 1 foto para edi\xe7\xe3o, voc\xea pode adicionar mais fotos em nossa ferramenta de edi\xe7\xe3o.","upload_start":"Iniciar Now\uff01","upload_sure":"Substituir","year_credit_discount_tip":"Economize 70%","year_discount_tip":"Economize 62%","copy_success":"Copiado","price_page_feature_title20":"Desfocagem de rosto AI","price_page_feature_desc20":"Desfocar e tornar mais n\xedtida uma fotografia de retrato.","price_page_feature_title21":"Retoque de pele AI","price_page_feature_desc21":"Transforme os seus retratos e fotografias de forma m\xe1gica e sem falhas. Retoque fotos online e revele o seu \\"eu\\" radiante com apenas um clique.","price_page_feature_title22":"AI Expandir","price_page_feature_desc22":"Expanda as dimens\xf5es das suas fotografias com um \xfanico clique. Aumente automaticamente o conte\xfado do motivo, os fundos e as texturas das suas fotografias.","price_page_feature_title23":"AI Substituir","price_page_feature_desc23":"Altere e substitua objectos nas suas fotografias.","price_page_feature_title24":"Restaurador de fotografias antigas","price_page_feature_desc24":"Repara automaticamente os danos, remove a desfocagem e restaura cores e detalhes desvanecidos para transformar a sua fotografia antiga numa fotografia nova.","price_page_feature_title25":"Avatar de IA e foto de rosto de IA","price_page_feature_desc25":"Crie de forma f\xe1cil e r\xe1pida fotografias de perfil e headshots HD AI profissionais, criativas e realistas.","price_page_feature_desc25_list_desc1":"50% de desconto","price_page_feature_title26":"Troca de rosto AI","price_page_feature_desc26":"Carregue as suas fotografias para trocar o rosto. Obtenha uma troca de rosto perfeitamente realista e sem falhas gerada por IA para qualquer tipo de divers\xe3o.","price_page_feature_title27":"Melhorador de v\xeddeo com IA","price_page_feature_desc27":"Melhora instantaneamente a qualidade do v\xeddeo, incluindo defini\xe7\xf5es de nitidez, brilho, etc., para tornar os v\xeddeos mais n\xedtidos.","price_page_feature_desc27_list_desc1":"3s\uff0cvisualiza\xe7\xe3o de v\xeddeo","price_page_feature_desc27_list_desc2":"v\xeddeo em tempo integral, v\xeddeo HD","price_page_feature_title28":"Removedor de fundo de v\xeddeo AI","price_page_feature_desc28":"Remova instantaneamente o fundo do v\xeddeo em retrato com um \xfanico toque. ","price_page_feature_desc28_list_desc1":"3s\uff0cvisualizar v\xeddeo","price_page_feature_desc28_list_desc2":"tempo inteiro\uff0cV\xeddeo HD","price_page_feature_title29":"Edi\xe7\xe3o em lote AI","price_page_feature_desc29":"Edi\xe7\xe3o em lote AI, como removedor de fundo em lote, mudan\xe7a de fundo em lote e assim por diante.","price_page_feature_desc29_list_desc1":"At\xe9 3 imagens de cada vez","price_page_feature_desc29_list_desc2":"At\xe9 50 imagens de cada vez","price_page_faq_credit_answer1":"Cr\xe9ditos s\xe3o uma forma de token virtual que voc\xea pode comprar com dinheiro real e usar para pagar recursos e servi\xe7os premium no site e aplicativos da Fotor. Atualmente, os cr\xe9ditos podem ser usados para gerar imagens e fundos de intelig\xeancia artificial, etc.","price_page_faq_credit_answer2":"Os cr\xe9ditos para assinaturas n\xe3o utilizados no m\xeas corrente podem ser rolados para o pr\xf3ximo m\xeas, desde que voc\xea mantenha sua assinatura, e podem ser acumulados por at\xe9 cinco meses. Depois de cancelar a assinatura, seus cr\xe9ditos expirar\xe3o no dia em que a assinatura expirar. Os cr\xe9ditos para pagamento \xfanico s\xe3o v\xe1lidos por dois anos ap\xf3s a compra.","price_page_faq_credit_answer3":"Se voc\xea comprar um plano de assinatura de cr\xe9dito e ficar sem cr\xe9ditos, poder\xe1 atualizar para um plano superior com mais cr\xe9ditos emitidos a cada m\xeas, ou poder\xe1 comprar cr\xe9ditos \xfanicos para recarregar.","price_page_faq_credit_answer4":"Sim. Seus cr\xe9ditos podem funcionar em todas as plataformas, incluindo o site da Fotor, aplicativos m\xf3veis (iOS / Android) e softwares para desktop (Mac / Windows).","price_page_faq_credit_answer5":"Sim. Voc\xea pode cancelar sua assinatura a qualquer momento.","price_page_faq_credit_answer6":"Para assinar os planos premium do Fotor, voc\xea pode pagar atrav\xe9s do Paypal ou cart\xe3o de cr\xe9dito. Aceitamos cart\xe3o de cr\xe9dito ou d\xe9bito das seguintes bandeiras: Visa, Mastercard, American Express, JCB, e mais.","price_page_faq_credit_answer7":"Sim, podes. Como o n\xfamero de cr\xe9ditos nos Planos Premium \xe9 limitado, se precisar de mais cr\xe9ditos, pode subscrever um Plano de Cr\xe9dito ou comprar Cr\xe9ditos \xfanicos. O Plano Premium e o Plano de Cr\xe9ditos podem coexistir e n\xe3o entram em conflito.","price_page_faq_credit_question1":"O que s\xe3o cr\xe9ditos e o que posso fazer com eles?","price_page_faq_credit_question2":"Por quanto tempo os cr\xe9ditos s\xe3o v\xe1lidos e os cr\xe9ditos n\xe3o utilizados podem ser acumulados?","price_page_faq_credit_question3":"O que acontece se eu ficar sem cr\xe9ditos?","price_page_faq_credit_question4":"Meus cr\xe9ditos funcionam em dispositivos m\xf3veis?","price_page_faq_credit_question5":"Posso cancelar minha assinatura de cr\xe9ditos?","price_page_faq_credit_question6":"Quais m\xe9todos de pagamento posso usar?","price_page_faq_credit_question7":"Se eu subscrever os Planos Premium, posso subscrever os Planos de Cr\xe9ditos?","price_page_faq_member_answer1":"Sim, existem muitos recursos b\xe1sicos que podem ser usados de gra\xe7a. No entanto, para uma experi\xeancia mais avan\xe7ada, recomendamos experimentar nossos planos premium.","price_page_faq_member_answer2":"O plano Fotor Pro+ inclui todos os recursos avan\xe7ados encontrados no Fotor Pro. Al\xe9m disso, o plano Pro+ oferece mais espa\xe7o na nuvem e 1.000.000 de fotos em HD para uso pessoal e comercial. Os Kits de Marca tamb\xe9m s\xe3o exclusivos do plano Pro+ para aqueles que precisam gerenciar fontes, logotipos e cores de marca para criar materiais de marca.","price_page_faq_member_answer3":"Sim, as assinaturas Fotor Pro e Pro+ est\xe3o dispon\xedveis em todas as plataformas. Isso significa que, com uma conta Pro ou Pro+, voc\xea pode desfrutar de todos os recursos avan\xe7ados do site Fotor, aplicativos m\xf3veis (iOS / Android) e softwares para desktop (Mac / Windows). Seus projetos de design e colagem tamb\xe9m podem ser sincronizados entre dispositivos.","price_page_faq_member_answer4":"Para assinar os planos premium do Fotor, voc\xea pode pagar atrav\xe9s do Paypal ou cart\xe3o de cr\xe9dito. Aceitamos cart\xe3o de cr\xe9dito ou d\xe9bito das seguintes bandeiras: Visa, Mastercard, American Express, JCB, e mais.","price_page_faq_member_answer5":"Sim, enviamos faturas por e-mail para cada dedu\xe7\xe3o. Se voc\xea n\xe3o receber um e-mail ou n\xe3o conseguir fazer o download por e-mail, pode fazer login no site Fotor, clicar em seu avatar de perfil e encontrar Hist\xf3rico de Pagamento \u2192 Faturas. Basta clicar na fatura que precisa e fazer o download.","price_page_faq_member_answer6":"Sim, voc\xea pode cancelar a assinatura a qualquer momento. Fa\xe7a login no site da Fotor, clique no seu avatar de perfil, encontre a aba Assinatura, clique em Cancelar Assinatura e siga as etapas para cancelar a assinatura.","price_page_faq_member_answer7":"Sim, voc\xea pode atualizar de um plano mensal para um plano anual ou de Pro para Pro+ a qualquer momento. Para fazer isso, fa\xe7a login no site da Fotor, clique no seu avatar de perfil, encontre a aba Assinatura e voc\xea ver\xe1 a op\xe7\xe3o de mudar de plano l\xe1.","price_page_faq_member_answer8":"Sim, o plano de assinatura ser\xe1 renovado automaticamente. Se voc\xea n\xe3o quiser ser cobrado, pode cancelar sua assinatura at\xe9 a data de expira\xe7\xe3o; caso contr\xe1rio, voc\xea ser\xe1 cobrado automaticamente na data do ciclo da assinatura.","price_page_faq_member_answer9":"Voc\xea pode usar cr\xe9ditos para gerar imagens de IA em nosso Gerador de Imagens de IA, Gerador de Fundos de IA, etc. Como os recursos relacionados \xe0 AIGC envolvem altos custos de servidor, eles n\xe3o podem ser inclu\xeddos no plano de assinatura para uso ilimitado. Se voc\xea ficar sem cr\xe9ditos, poder\xe1 comprar planos de cr\xe9ditos separados para complementa\xe7\xe3o.","price_page_faq_member_question1":"Posso usar o Fotor gratuitamente?","price_page_faq_member_question2":"Qual \xe9 a diferen\xe7a entre o Fotor Pro e o Fotor Pro+?","price_page_faq_member_question3":"Minha assinatura Fotor funciona em dispositivos m\xf3veis?","price_page_faq_member_question4":"Quais m\xe9todos de pagamento posso usar?","price_page_faq_member_question5":"Posso receber uma fatura?","price_page_faq_member_question6":"Posso cancelar minha assinatura?","price_page_faq_member_question7":"Posso atualizar meu plano atual?","price_page_faq_member_question8":"Meu plano de assinatura ser\xe1 renovado automaticamente?","price_page_faq_member_question9":"O que posso fazer com os cr\xe9ditos extras inclu\xeddos nos planos premium?","mobile_to_app_popup_title":"Continuar na aplica\xe7\xe3o?","mobile_to_app_popup_subtitle":"Desfrute de uma experi\xeancia melhor adaptada para o seu dispositivo m\xf3vel!","mobile_to_app_popup_button_stay":"Fique na web","mobile_to_app_popup_button_open":"Abrir aplicativo","mobile_app_entry_pop_title":"Quer experimentar o Fotor Pro gratuitamente?","mobile_app_entry_pop_content":"Baixe o aplicativo Fotor para uma edi\xe7\xe3o mais f\xe1cil e um teste gratuito dos recursos profissionais! \ud83d\udc47"}'),
                ru_RU: JSON.parse('{"ai_textarea_placeholder":"\u041e\u043f\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442 \u043d\u0430\u0440\u0438\u0441\u043e\u0432\u0430\u043b","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438","aigc_data_reveal_title2":"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f","aigc_data_reveal_title3":"\u0420\u0435\u0439\u0442\u0438\u043d\u0433","back_to_top":"\u041f\u0440\u0430\u043a\u0440\u0443\u0446\u0456\u0446\u0435 \u045e\u0432\u0435\u0440\u0445","breadCrumbs_home":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","credits_unit":"/\u041a\u0440\u0435\u0434\u0438\u0442","drop_image_to_upload":"\u041e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u044e\u0434\u0430","header_logo_hover_info":"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u044c \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a,\\n\u0447\u0442\u043e\u0431\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 Fotor \u0431\u044b\u043b\u043e \u043b\u0435\u0433\u0447\u0435!","join_discord_title":"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u044c Discord","mobile_open_app_fixed_popup_desc":"\u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u043b\u0443\u0447\u0448\u0438\u043c \u043e\u043f\u044b\u0442\u043e\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430!","mobile_to_app_cancel":"\u041d\u0435 \u0441\u0435\u0439\u0447\u0430\u0441","mobile_to_app_desc":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0443\u0439\u0442\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043d\u0430 \u0445\u043e\u0434\u0443.","mobile_to_app_desc1":"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0441\u043d\u0438\u043c\u043a\u043e\u0432 \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445 \u0441\u0442\u0430\u043b\u0430 \u0435\u0449\u0435 \u043b\u0435\u0433\u0447\u0435 \u0438 \u043f\u0440\u0438\u044f\u0442\u043d\u0435\u0435!","mobile_to_app_ok":"\u041e\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","mobile_to_app_title":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438","mobile_to_more_text":"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","more":"\u0415\u0449\u0435","more_templates_button":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b","original_before":"\u0414\u043e","pointsActivityPage_activity_list_mobile_title":"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b","pointsActivityPage_copied":"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e","pointsActivityPage_copy":"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","pointsActivityPage_credits":"\u041a\u0440\u0435\u0434\u0438\u0442\u044b:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"\u0426\u0435\u043d\u0442\u0440 \u0437\u0430\u0434\u0430\u0447","pointsActivityPage_desc":"\u0414\u0435\u043b\u0430\u044f \u0442\u043e, \u0447\u0442\u043e \u0432\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0432 Fotor, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0435\u0433\u043a\u043e \u0438 \u0432\u0435\u0441\u0435\u043b\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0430\u0433\u0440\u0430\u0434. \u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441 \u043d\u0430\u0433\u0440\u0430\u0434\u0430\u043c\u0438 Fotor \u0443\u0436\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f!","pointsActivityPage_download_app_text":"\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Fotor App \u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c 5 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438. \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435, \u0442\u0430\u043a \u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438!","pointsActivityPage_download_app_title":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","pointsActivityPage_my_credits_text":"\u041c\u043e\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u044b","pointsActivityPage_novip_text":"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u043a Fotor Pro, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b","pointsActivityPage_one_activity_type_mobile_text":"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0440\u0430\u0437","pointsActivityPage_receive_activity_button_mobile_text":"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c","pointsActivityPage_receive_activity_button_text":"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b","pointsActivityPage_receive_points_toast":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e {numbers} \u043a\u0440\u0435\u0434\u0438\u0442(\u043e\u0432)!","pointsActivityPage_received_activity_button_mobile_text":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e","pointsActivityPage_received_activity_button_text":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e","pointsActivityPage_share_link":"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439","pointsActivityPage_some_activity_type_mobile_text":"\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e","pointsActivityPage_svip_text":"\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b Pro+","pointsActivityPage_title":"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u043a Fotor \u0438 \u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u0432 Fotor, \u0447\u0442\u043e\u0431\u044b \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u0430\u0433\u0440\u0430\u0434\u044b | Fotor","pointsActivityPage_upgrade_button_text":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435","pointsActivityPage_username_prefix_text":"\u041f\u0440\u0438\u0432\u0435\u0442!","pointsActivityPage_vip_text":"\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u044f \u0437\u0430 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0434\u043b\u044f Pro","pointsActivityPage_welcome":"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0426\u0435\u043d\u0442\u0440 \u0437\u0430\u0434\u0430\u0447 Fotor!","pointsActivityPage_what_use_credits_mobile_text":"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f AI-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441</a>","pointsActivityPage_what_use_credits_text":"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0441\u043f\u0435\u043a\u0442\u0440\u0430 AI-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>, \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u0442\u0440\u044f\u0441\u0430\u044e\u0449\u0438\u0445 \u0444\u043e\u043d\u043e\u0432 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0432\u044b\u0440\u0435\u0437\u043e\u043a \u0432 <a href=\\"https://www.fotor.com/ru/features/background-remover/upload\\">Fotor Background Remover</a>, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0432 <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. \u041d\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e AI-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0443\u0445\u043e\u0434\u0438\u0442 1-2 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0432 \u044d\u0442\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u0445.","pointsActivityPage_what_use_credits_title":"\u0427\u0442\u043e \u044f \u043c\u043e\u0433\u0443 \u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u043a\u0440\u0435\u0434\u0438\u0442\u044b?","pointsActivityPage_what_use_credits_to_link_mobile_text":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441","pointsActivityPage_what_use_credits_to_link_text":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441","preview_upload_limit_size":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437-\u0437\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0444\u0430\u0439\u043b\u0430.{link}.","preview_upload_more":"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435","price_monthly_switch":"\u041f\u043e\u043c\u0435\u0441\u044f\u0447\u043d\u043e","price_page_activity_btn_discount":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 {discount_en}%","price_page_billed_annually":"\u0435\u0436\u0435\u0433\u043e\u0434\u043d\u044b\u0439 \u0441\u0447\u0435\u0442","price_page_buy_now":"\u041a\u0443\u043f\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441","price_page_credits_once_info":"\u041a\u0440\u0435\u0434\u0438\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0432\u0443\u0445 \u043b\u0435\u0442 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438","price_page_credits_plans":"\u041f\u043b\u0430\u043d\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c","price_page_credits_subscribe_info":"\u041d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u043a\u0430\u043f\u043b\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u043c, \u0434\u043e 5 \u043c\u0435\u0441\u044f\u0446\u0435\u0432.","price_page_feature_desc1":"\u0412\u043a\u043b\u044e\u0447\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0438 \u043a\u0440\u0430\u0441\u043e\u0442\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u044b, \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u0438 \u0440\u0430\u043c\u043a\u0438.","price_page_feature_desc10":"\u041f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 \u044d\u0441\u043a\u0438\u0437\u044b, \u043a\u0430\u0440\u0442\u0438\u043d\u044b \u043c\u0430\u0441\u043b\u043e\u043c, \u0430\u043a\u0432\u0430\u0440\u0435\u043b\u044c\u044e, \u043a\u0430\u0440\u0438\u043a\u0430\u0442\u0443\u0440\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u044b \u0436\u0438\u0432\u043e\u043f\u0438\u0441\u0438.","price_page_feature_desc10_list_desc1":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0431\u0435\u0437 HD \u0441 \u0432\u043e\u0434\u044f\u043d\u044b\u043c \u0437\u043d\u0430\u043a\u043e\u043c","price_page_feature_desc10_list_desc2":"HD \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u0435\u0437 \u0432\u043e\u0434\u044f\u043d\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u0432","price_page_feature_desc11":"\u041f\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u043d\u043e-\u0431\u0435\u043b\u044b\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0432 \u0446\u0432\u0435\u0442\u043d\u044b\u0435.","price_page_feature_desc12":"\u0413\u043e\u0442\u043e\u0432\u044b\u0435 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u043f\u043b\u0430\u043a\u0430\u0442\u043e\u0432, \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043a, \u043f\u043e\u0441\u0442\u043e\u0432 \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \u0448\u0440\u0438\u0444\u0442\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0448\u0440\u0438\u0444\u0442\u044b","price_page_feature_desc13_list_desc3":"523 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0448\u0440\u0438\u0444\u0442\u044b","price_page_feature_desc14":"\u0412 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0444\u043e\u043d\u044b, \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438, \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0438\u043a\u043e\u043d\u043a\u0438, \u0443\u0437\u043e\u0440\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0438 \u0441\u0442\u0438\u043a\u0435\u0440\u044b.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"\u041e\u0431\u044a\u0435\u043c \u043e\u0431\u043b\u0430\u0447\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043e\u043a.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u0444\u0430\u0439\u043b\u043e\u0432, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f.","price_page_feature_desc16_list_desc1":"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"JPG/ PNG/ PDF \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 PNG \u0441 \u0432\u044b\u0441\u043e\u043a\u0438\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c","price_page_feature_desc17":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c \u0431\u0440\u0435\u043d\u0434\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u043d\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0448\u0440\u0438\u0444\u0442\u043e\u0432, \u043b\u043e\u0433\u043e\u0442\u0438\u043f\u043e\u0432 \u0438 \u0446\u0432\u0435\u0442\u043e\u0432. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0448\u0440\u0438\u0444\u0442\u044b.","price_page_feature_desc18":"\u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0445\u043e\u043b\u0441\u0442\u043e\u043c, \u043d\u0435 \u043e\u0442\u0432\u043b\u0435\u043a\u0430\u044f\u0441\u044c \u043d\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0443.","price_page_feature_desc19":"\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0432 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f\u0445, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 AIGC.","price_page_feature_desc19_list_desc1":"100 \u041a\u0440\u0435\u0434\u0438\u0442\u043e\u0432/\u043c\u0435\u0441\u044f\u0446","price_page_feature_desc19_list_desc2":"300 \u041a\u0440\u0435\u0434\u0438\u0442\u043e\u0432/\u043c\u0435\u0441\u044f\u0446","price_page_feature_desc2":"\u0412\u043a\u043b\u044e\u0447\u0430\u044f \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.","price_page_feature_desc3":"\u0412\u043a\u043b\u044e\u0447\u0430\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0445 \u043a\u043e\u043b\u043b\u0430\u0436\u0435\u0439 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0435 \u043a\u043e\u043b\u043b\u0430\u0436\u0430.","price_page_feature_desc4":"\u0412\u043a\u043b\u044e\u0447\u0430\u044f \u0432\u0441\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a HSL, \u0434\u0435\u043d\u0443\u0430\u0437, \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u043e\u0432, \u0441\u0433\u043b\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u0435, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432\u0441\u0435 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u0444\u0438\u043b\u044c\u0442\u0440\u044b \u0438 \u0440\u0430\u043c\u043a\u0438.","price_page_feature_desc5":"\u041f\u0430\u043a\u0435\u0442\u043d\u043e\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u0440\u0435\u0437\u043a\u0430, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0444\u0430\u0439\u043b\u0430.","price_page_feature_desc6":"\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0437\u043c\u044b\u0442\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0437\u0430 \u0441\u0447\u0435\u0442 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u043a\u043e\u0441\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430.","price_page_feature_desc7":"\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u0438\u043c \u0449\u0435\u043b\u0447\u043a\u043e\u043c \u043c\u044b\u0448\u0438. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u043d \u043b\u044e\u0431\u044b\u043c \u0446\u0432\u0435\u0442\u043e\u043c \u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","price_page_feature_desc8":"\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u0441 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u0442\u0435\u043a\u0441\u0442 \u0438 \u0432\u043e\u0434\u044f\u043d\u044b\u0435 \u0437\u043d\u0430\u043a\u0438, \u0430 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442 \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442 \u043e\u0441\u0442\u0430\u0432\u0448\u0435\u0435\u0441\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438.","price_page_feature_desc9":"\u0418\u0418 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u043a \u0438\u043b\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439.","price_page_feature_title1":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f","price_page_feature_title10":"\u0424\u043e\u0442\u043e\u044d\u0444\u0444\u0435\u043a\u0442 AI","price_page_feature_title11":"AI \u041a\u043e\u043b\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f","price_page_feature_title12":"\u0428\u0430\u0431\u043b\u043e\u043d\u044b","price_page_feature_title13":"\u0428\u0440\u0438\u0444\u0442\u044b","price_page_feature_title14":"\u0422\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b","price_page_feature_title15":"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435","price_page_feature_title16":"\u0424\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0430","price_page_feature_title17":"\u0411\u0440\u0435\u043d\u0434\u043e\u0432\u044b\u0435 \u043d\u0430\u0431\u043e\u0440\u044b","price_page_feature_title18":"\u0411\u0435\u0437 \u0440\u0435\u043a\u043b\u0430\u043c\u044b","price_page_feature_title19":"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b","price_page_feature_title2":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438","price_page_feature_title3":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043c\u0430\u043a\u0435\u0442\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043e\u043b\u043b\u0430\u0436\u0435\u0439","price_page_feature_title4":"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f","price_page_feature_title5":"\u041f\u0430\u043a\u0435\u0442\u043d\u043e\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0430","price_page_feature_title8":"\u0423\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0430","price_page_feature_title9":"\u041a\u043e\u043d\u0442\u0435\u043d\u0442, \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u043e\u043c","price_page_free_info":"Free","price_page_free_trial":"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0440\u043e\u0431\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f","price_page_most_popular":"\u0421\u0430\u043c\u044b\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435","price_page_one_time_payment":"\u041e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f","price_page_platform_title":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445","price_page_premium_plans":"\u041f\u0440\u0435\u043c\u0438\u0443\u043c-\u043f\u043b\u0430\u043d\u044b","price_page_subscribe_now":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0441\u0435\u0439\u0447\u0430\u0441","price_page_subscription_plan":"\u041f\u043b\u0430\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438","price_page_try_now":"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441","price_yearly_switch":"\u041d\u0430 \u0433\u043e\u0434","read_aigc_tips_title":"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u043e\u0432\u0435\u0442\u044b AIGC","result_after":"\u041f\u043e\u0441\u043b\u0435","resume_uns_active_button":"\u041e\u043a, \u043f\u043e\u043d\u044f\u0442\u043d\u043e","resume_uns_active_desc":"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u043e, \u0438 \u0432\u044b \u0443\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u043d\u043e\u0439 \u0446\u0435\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438.","resume_uns_active_title":"\u0412\u044b \u0437\u0430\u044f\u0432\u0438\u043b\u0438 \u043e \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0438!","resume_uns_button":"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u0441\u043e \u0421\u043a\u0438\u0434\u043a\u043e\u0439 30%","resume_uns_card_number":"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b:","resume_uns_click_download_app_title":"\u041d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","resume_uns_desc":"\u041f\u043e\u0441\u043b\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0412\u0430\u0448\u0435\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0432\u0437\u0438\u043c\u0430\u0442\u044c \u043f\u043b\u0430\u0442\u0443 \u043d\u0435 \u0441\u0440\u0430\u0437\u0443, \u0430 \u0432 \u0434\u0435\u043d\u044c \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438. \u0421 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u043a\u0438\u0434\u043a\u0443 30% \u043d\u0430 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438.","resume_uns_discounted_subscription_fee":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u0441\u043e \u0421\u043a\u0438\u0434\u043a\u043e\u0439:","resume_uns_download_app_title":"\u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043c\u0438 Fotor premium \u043d\u0430 \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445!","resume_uns_download_button":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c","resume_uns_email":"Email:","resume_uns_expiration_date":"\u0414\u0430\u0442\u0430 \u0418\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u0421\u0440\u043e\u043a\u0430 \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f:","resume_uns_expired_button":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u0421\u043a\u0438\u0434\u043a\u043e\u0439 20%","resume_uns_expired_desc":"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0412\u0430\u0448\u0435\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u0438\u0441\u0442\u0435\u043a, \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 30% \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041e\u0434\u043d\u0430\u043a\u043e \u0412\u044b \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u043f\u043b\u0430\u043d \u0441\u043e \u0421\u043a\u0438\u0434\u043a\u043e\u0439 20%!","resume_uns_expired_title":"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u0435\u043a\u043b\u043e... \u041d\u043e \u0435\u0441\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u043e!","resume_uns_mobile_download_app_title":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Fotor \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441","resume_uns_month":"\u043c\u0435\u0441\u044f\u0446","resume_uns_nickname":"\u041f\u0440\u043e\u0437\u0432\u0438\u0449\u0435:","resume_uns_payment_method":"\u0421\u043f\u043e\u0441\u043e\u0431 \u041e\u043f\u043b\u0430\u0442\u044b:","resume_uns_payment_method_value":"\u041a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f \u0438\u043b\u0438 \u0434\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430","resume_uns_scan_download_app_title":"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 Fotor App","resume_uns_status":"\u0421\u0442\u0430\u0442\u0443\u0441 \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438:","resume_uns_status_cancel":"\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u043e","resume_uns_subscription_fee":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438:","resume_uns_subscription_plan":"\u041f\u043b\u0430\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438:","resume_uns_success_button":"\u041e\u043a, \u043f\u043e\u043d\u044f\u0442\u043d\u043e","resume_uns_success_desc":"\u0412\u0430\u0448\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430.","resume_uns_success_title":"\u041e\u0442\u043b\u0438\u0447\u043d\u043e!","resume_uns_top_title":"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443","resume_uns_year":"\u0433\u043e\u0434","share_button_text":"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f","unitMonth":"/\u043c\u0435\u0441\u044f\u0446","upload_background":"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441","upload_background_remover":"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441","upload_fail":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","upload_format_custom":"\u0414\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a {JPG,PNG,SVG,HEIC/HEIF,WebP}.","upload_number_tip":"\u042d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u043b\u044c\u043a\u043e 1 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0432 \u043d\u0430\u0448\u0435\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.","upload_start":"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441\uff01","upload_sure":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c","year_credit_discount_tip":"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u044f 70%","year_discount_tip":"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u044f 62%","copy_success":"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"\u0420\u0430\u0437\u043c\u044b\u0442\u0438\u0435 \u0438 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u043a\u043e\u0441\u0442\u0438 \u043f\u043e\u0440\u0442\u0440\u0435\u0442\u043d\u044b\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439.","price_page_feature_title21":"\u0420\u0435\u0442\u0443\u0448\u044c \u043a\u043e\u0436\u0438 AI","price_page_feature_desc21":"\u0412\u043e\u043b\u0448\u0435\u0431\u043d\u043e\u0435 \u0438 \u0431\u0435\u0437\u0443\u043f\u0440\u0435\u0447\u043d\u043e\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0438\u0445 \u043f\u043e\u0440\u0442\u0440\u0435\u0442\u043e\u0432 \u0438 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439. \u0420\u0435\u0442\u0443\u0448\u0438\u0440\u0443\u0439\u0442\u0435 \u0444\u043e\u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u0438 \u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u0441\u0438\u044f\u043d\u0438\u0435 \\"\u0441\u0435\u0431\u044f\\" \u043e\u0434\u043d\u0438\u043c \u0449\u0435\u043b\u0447\u043a\u043e\u043c \u043c\u044b\u0448\u0438.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"\u0420\u0430\u0441\u0448\u0438\u0440\u044f\u0439\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u043e\u0434\u043d\u0438\u043c \u0449\u0435\u043b\u0447\u043a\u043e\u043c \u043c\u044b\u0448\u0438. \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0439\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0444\u043e\u043d\u044b \u0438 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"\u0418\u0437\u043c\u0435\u043d\u044f\u0439\u0442\u0435 \u0438 \u0437\u0430\u043c\u0435\u043d\u044f\u0439\u0442\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u0445.","price_page_feature_title24":"\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0442\u043e\u0440 \u0441\u0442\u0430\u0440\u044b\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439","price_page_feature_desc24":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0439, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u044b\u0442\u043e\u0441\u0442\u0438, \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u0443\u0441\u043a\u043d\u0435\u0432\u0448\u0438\u0445 \u0446\u0432\u0435\u0442\u043e\u0432 \u0438 \u0434\u0435\u0442\u0430\u043b\u0435\u0439, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0441\u0442\u0430\u0440\u0443\u044e \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0432 \u043d\u043e\u0432\u0443\u044e.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"\u041b\u0435\u0433\u043a\u043e \u0438 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435, \u043a\u0440\u0435\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0438 \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u0435 HD AI \u0441\u043d\u0438\u043c\u043a\u0438 \u0433\u043e\u043b\u043e\u0432\u044b \u0438 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f.","price_page_feature_desc25_list_desc1":"50% \u0441\u043a\u0438\u0434\u043a\u0430","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u043b\u0438\u0446\u0430 \u043c\u0435\u0441\u0442\u0430\u043c\u0438. \u0414\u043e\u0431\u0435\u0439\u0442\u0435\u0441\u044c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u0439 \u0438 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u043e\u0439 \u0437\u0430\u043c\u0435\u043d\u044b \u043b\u0438\u0446\u0430, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u043e\u043c, \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0439.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0443\u043b\u0443\u0447\u0448\u0430\u0439\u0442\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0434\u0435\u043e, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u0435\u0437\u043a\u043e\u0441\u0442\u0438, \u044f\u0440\u043a\u043e\u0441\u0442\u0438 \u0438 \u0442. \u0434., \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u0442\u043a\u0438\u043c.","price_page_feature_desc27_list_desc1":"3 \u0441, \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0432\u0438\u0434\u0435\u043e","price_page_feature_desc27_list_desc2":"\u043f\u043e\u043b\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, HD-\u0432\u0438\u0434\u0435\u043e","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430 \u0438\u0437 \u043f\u043e\u0440\u0442\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0435\u043e \u043e\u0434\u043d\u0438\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c. ","price_page_feature_desc28_list_desc1":"3 \u0441, \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0432\u0438\u0434\u0435\u043e","price_page_feature_desc28_list_desc2":"\u043f\u043e\u043b\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, HD \u0432\u0438\u0434\u0435\u043e","price_page_feature_title29":"\u041f\u0430\u043a\u0435\u0442\u043d\u043e\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 AI","price_page_feature_desc29":"\u041f\u0430\u043a\u0435\u0442\u043d\u043e\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 AI, \u0442\u0430\u043a\u043e\u0435 \u043a\u0430\u043a \u043f\u0430\u043a\u0435\u0442\u043d\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430, \u043f\u0430\u043a\u0435\u0442\u043d\u043e\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435.","price_page_feature_desc29_list_desc1":"\u0414\u043e 3 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e","price_page_feature_desc29_list_desc2":"\u0414\u043e 50 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e","price_page_faq_credit_answer1":"\u041a\u0440\u0435\u0434\u0438\u0442\u044b - \u044d\u0442\u043e \u0444\u043e\u0440\u043c\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0436\u0435\u0442\u043e\u043d\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0437\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0435\u043d\u044c\u0433\u0438 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0438 \u0443\u0441\u043b\u0443\u0433 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445 Fotor. \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 AI \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, AI \u0444\u043e\u043d\u043e\u0432 \u0438 \u0442.\u0434.","price_page_faq_credit_answer2":"\u041a\u0440\u0435\u0434\u0438\u0442\u044b \u0437\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043c\u0435\u0441\u044f\u0446\u0435, \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u044b \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446, \u0435\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443, \u0438 \u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u043a\u0430\u043f\u043b\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u043f\u044f\u0442\u0438 \u043c\u0435\u0441\u044f\u0446\u0435\u0432. \u0415\u0441\u043b\u0438 \u0432\u044b \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443, \u0441\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0430\u0448\u0438\u0445 \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432 \u0438\u0441\u0442\u0435\u0447\u0435\u0442 \u0432 \u0434\u0435\u043d\u044c \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438. \u041a\u0440\u0435\u0434\u0438\u0442\u044b \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0432\u0443\u0445 \u043b\u0435\u0442 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438.","price_page_faq_credit_answer3":"\u0415\u0441\u043b\u0438 \u0432\u044b \u043a\u0443\u043f\u0438\u043b\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0439 \u043f\u043b\u0430\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u0438 \u0443 \u0432\u0430\u0441 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0438\u0431\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u043b\u0430\u043d \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432, \u0432\u044b\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0445 \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0441\u044f\u0446, \u043b\u0438\u0431\u043e \u043a\u0443\u043f\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.","price_page_faq_credit_answer4":"\u0414\u0430. \u0412\u0430\u0448\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0441\u0430\u0439\u0442 Fotor, \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f (iOS/Android) \u0438 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b (Mac/Windows).","price_page_faq_credit_answer5":"\u0414\u0430. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f.","price_page_faq_credit_answer6":"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u043f\u043b\u0430\u043d\u044b Fotor, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 Paypal \u0438\u043b\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439. \u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0435 \u0438\u043b\u0438 \u0434\u0435\u0431\u0435\u0442\u043e\u0432\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043c\u0430\u0440\u043e\u043a: Visa, Mastercard, American Express, JCB \u0438 \u0434\u0440\u0443\u0433\u0438\u0435.","price_page_faq_credit_answer7":"\u0414\u0430, \u043c\u043e\u0436\u0435\u0448\u044c. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0447\u043a\u043e\u0432 \u0432 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e, \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0447\u043a\u043e\u0432, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043e\u0447\u043a\u043e\u0432 \u0438\u043b\u0438 \u043a\u0443\u043f\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u0435 \u0431\u0430\u043b\u043b\u044b. \u0421\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u0435 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0445\u0435\u043c\u044b \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0438 \u043d\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432\u0430\u0442\u044c.","price_page_faq_credit_question1":"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0438 \u0447\u0442\u043e \u044f \u043c\u043e\u0433\u0443 \u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c\u0438?","price_page_faq_credit_question2":"\u041a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0438 \u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u043d\u0430\u043a\u0430\u043f\u043b\u0438\u0432\u0430\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u044b?","price_page_faq_credit_question3":"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0443 \u043c\u0435\u043d\u044f \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b?","price_page_faq_credit_question4":"\u0420\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043b\u0438 \u043c\u043e\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445?","price_page_faq_credit_question5":"\u041c\u043e\u0433\u0443 \u043b\u0438 \u044f \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u043a\u0440\u0435\u0434\u0438\u0442\u044b?","price_page_faq_credit_question6":"\u041a\u0430\u043a\u0438\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b \u044f \u043c\u043e\u0433\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c?","price_page_faq_credit_question7":"\u0415\u0441\u043b\u0438 \u0443 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u043f\u043b\u0430\u043d, \u043c\u043e\u0433\u0443 \u043b\u0438 \u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0431\u043e\u043d\u0443\u0441\u043d\u044b\u0439 \u043f\u043b\u0430\u043d?","price_page_faq_member_answer1":"\u0414\u0430, \u0435\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e. \u041e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u043e\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0448\u0438 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u043f\u043b\u0430\u043d\u044b.","price_page_faq_member_answer2":"\u041f\u043b\u0430\u043d Fotor Pro+ \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0432\u0441\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 Fotor Pro. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043f\u043b\u0430\u043d Pro+ \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043c\u0435\u0441\u0442\u0430 \u0432 \u043e\u0431\u043b\u0430\u043a\u0435 \u0438 1 000 000 HD \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438 \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u0431\u043e\u0440\u044b Brand Kits \u0442\u0430\u043a\u0436\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u043c\u0438 \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0430 Pro+ \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u043e\u043c\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0448\u0440\u0438\u0444\u0442\u0430\u043c\u0438, \u043b\u043e\u0433\u043e\u0442\u0438\u043f\u0430\u043c\u0438 \u0438 \u0446\u0432\u0435\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432.","price_page_faq_member_answer3":"\u0414\u0430, \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 Fotor Pro \u0438 Pro+ \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0441 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u044c\u044e Pro \u0438\u043b\u0438 Pro+ \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u0441\u0435\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430 Fotor, \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (iOS/Android) \u0438 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f (Mac/Windows). \u0412\u0430\u0448\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0438 \u043a\u043e\u043b\u043b\u0430\u0436\u0438 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445.","price_page_faq_member_answer4":"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u043f\u043b\u0430\u043d\u044b Fotor, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 Paypal \u0438\u043b\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439. \u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0435 \u0438\u043b\u0438 \u0434\u0435\u0431\u0435\u0442\u043e\u0432\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043c\u0430\u0440\u043e\u043a: Visa, Mastercard, American Express, JCB \u0438 \u0434\u0440\u0443\u0433\u0438\u0435.","price_page_faq_member_answer5":"\u0414\u0430, \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0447\u0435\u0442\u0430 \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0432\u044b\u0447\u0435\u0442. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u043f\u0438\u0441\u044c\u043c\u043e \u0438\u043b\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0433\u043e \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442 Fotor, \u043d\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0438 \u043d\u0430\u0439\u0442\u0438 \u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439 \u2192 \u0421\u0447\u0435\u0442\u0430-\u0444\u0430\u043a\u0442\u0443\u0440\u044b. \u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0443\u0436\u043d\u044b\u0439 \u0432\u0430\u043c \u0441\u0447\u0435\u0442, \u0430 \u0437\u0430\u0442\u0435\u043c \u0441\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0435\u0433\u043e.","price_page_faq_member_answer6":"\u0414\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. \u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442 Fotor, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f, \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u043a\u0440\u0430\u043d \\"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430\\", \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \\"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443\\" \u0438 \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0448\u0430\u0433\u0430\u043c, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438.","price_page_faq_member_answer7":"\u0414\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. \u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442 Fotor, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f, \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u043a\u0440\u0430\u043d \\"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430\\", \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \\"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443\\" \u0438 \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0448\u0430\u0433\u0430\u043c, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438.","price_page_faq_member_answer8":"\u0414\u0430, \u043f\u043b\u0430\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0430\u043c \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u043b\u0438 \u0441\u0447\u0435\u0442, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u0434\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f; \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043b\u0430\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0437\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0432 \u0434\u0430\u0442\u0443 \u0446\u0438\u043a\u043b\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438.","price_page_faq_member_answer9":"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 AI \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0432 \u043d\u0430\u0448\u0438\u0445 AI Image Generator, AI Background Generator \u0438 \u0442.\u0434. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 AIGC, \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0437\u0430\u0442\u0440\u0430\u0442 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u043e\u043d\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u043f\u043b\u0430\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043d\u0430 \u043d\u0435\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0435 \u043f\u043b\u0430\u043d\u044b \u0434\u043b\u044f \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.","price_page_faq_member_question1":"\u041c\u043e\u0433\u0443 \u043b\u0438 \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Fotor \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\uff1f","price_page_faq_member_question2":"\u0412 \u0447\u0435\u043c \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 Fotor Pro \u0438 Fotor Pro+?","price_page_faq_member_question3":"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0438 \u043c\u043e\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 Fotor \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445?","price_page_faq_member_question4":"\u041a\u0430\u043a\u0438\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b \u044f \u043c\u043e\u0433\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c?","price_page_faq_member_question5":"\u041c\u043e\u0433\u0443 \u043b\u0438 \u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0447\u0435\u0442-\u0444\u0430\u043a\u0442\u0443\u0440\u0443?","price_page_faq_member_question6":"\u041c\u043e\u0433\u0443 \u043b\u0438 \u044f \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443?","price_page_faq_member_question7":"\u041c\u043e\u0433\u0443 \u043b\u0438 \u044f \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444\u043d\u044b\u0439 \u043f\u043b\u0430\u043d\uff1f","price_page_faq_member_question8":"\u0411\u0443\u0434\u0435\u0442 \u043b\u0438 \u043c\u043e\u0439 \u043f\u043b\u0430\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438?","price_page_faq_member_question9":"\u0427\u0442\u043e \u044f \u043c\u043e\u0433\u0443 \u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c\u0438, \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u0432 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u043f\u043b\u0430\u043d\u044b?","mobile_to_app_popup_title":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438?","mobile_to_app_popup_subtitle":"\u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u043b\u0443\u0447\u0448\u0438\u043c \u043e\u043f\u044b\u0442\u043e\u043c, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430!","mobile_to_app_popup_button_stay":"\u041e\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u0432 \u0441\u0435\u0442\u0438","mobile_to_app_popup_button_open":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","mobile_app_entry_pop_title":"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c Fotor Pro \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e?","mobile_app_entry_pop_content":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Fotor \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0431\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439! \ud83d\udc47"}'),
                zh_TW: JSON.parse('{"ai_textarea_placeholder":"\u63cf\u8ff0\u60a8\u5e0c\u671b\u4eba\u5de5\u667a\u80fd\u7e6a\u88fd\u7684\u5185\u5bb9","aigc_data_reveal_num1":"600\u842c+","aigc_data_reveal_num2":"5000\u842c+","aigc_data_reveal_title1":"\u7528\u6236","aigc_data_reveal_title2":"\u5716\u50cf\u751f\u6210\u6570\u91cf","aigc_data_reveal_title3":"\u8a55\u5206","back_to_top":"\u56de\u5230\u9876\u90e8","breadCrumbs_home":"\u9996\u9801","credits_unit":"/\u7a4d\u5206","drop_image_to_upload":"\u62d6\u52d5\u5716\u7247\u5230\u9019\u88cf","header_logo_hover_info":"\u62d6\u52d5Logo\u5230\u66f8\u7c64\u6b04\uff0c\u4e0b\u6b21\u8f15\u9b06\u8a2a\u554fFotor\uff01","join_discord_title":"\u9ede\u64ca\u8a2a\u554fDiscord","mobile_open_app_fixed_popup_desc":"\u4eab\u53d7\u70ba\u60a8\u5347\u7d1a\u5ba2\u88fd\u5316\u7684\u6d41\u66a2\u7de8\u8f2f\u9ad4\u9a57\uff01","mobile_to_app_cancel":"\u73fe\u5728\u4e0d\u7528","mobile_to_app_desc":"\u96a8\u6642\u96a8\u5730\u7de8\u8f2f\u548c\u8a2d\u8a08\u4f60\u7684\u4f5c\u54c1\u3002","mobile_to_app_desc1":"\u5206\u4eab\u5230\u793e\u4ea4\u5a92\u9ad4\u66f4\u9806\u66a2\u3001\u4fbf\u6377\u3002","mobile_to_app_ok":"\u63a2\u7d22App","mobile_to_app_title":"\u5728App\u4e0a\u9032\u884c","mobile_to_more_text":"\u5373\u523b\u958b\u59cb\u7de8\u8f2f\u548c\u8a2d\u8a08","more":"\u66f4\u591a","more_templates_button":"\u700f\u89bd\u66f4\u591a\u6a21\u677f","original_before":"\u8abf\u6574\u524d","pointsActivityPage_activity_list_mobile_title":"\u9818\u53d6\u7a4d\u5206","pointsActivityPage_copied":"\u5df2\u8907\u88fd","pointsActivityPage_copy":"\u8907\u88fd","pointsActivityPage_credits":"\u7a4d\u5206\uff1a","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"\u4efb\u52d9\u4e2d\u5fc3","pointsActivityPage_desc":"\u5728Fotor\u4e2d\u505a\u60a8\u559c\u6b61\u7684\u4e8b\u60c5\uff0c\u5c31\u80fd\u8f15\u9b06\u6709\u8da3\u5730\u7372\u5f97\u66f4\u591a\u734e\u52f5\u3002\u4eca\u5929\u5c31\u958b\u59cb\u8cfa\u53d6Fotor\u734e\u52f5\u5427\uff01","pointsActivityPage_download_app_text":"\u9996\u6b21\u4e0b\u8f09\u4e26\u767b\u9304Fotor App\u5373\u53ef\u514d\u8cbb\u9818\u53d65\u500b\u7a4d\u5206\uff0c\u7a4d\u5206\u5728\u7db2\u7ad9\u548cApp\u5747\u53ef\u4f7f\u7528\u3002","pointsActivityPage_download_app_title":"\u4e0b\u8f09App","pointsActivityPage_my_credits_text":"\u6211\u7684\u7a4d\u5206","pointsActivityPage_novip_text":"\u52a0\u5165FotorPro \u5b8c\u6210\u4efb\u52d9\u4eab\u96d9\u500d\u7a4d\u5206","pointsActivityPage_one_activity_type_mobile_text":"\u4e00\u6b21\u6027\u4efb\u52d9","pointsActivityPage_receive_activity_button_mobile_text":"\u9818\u53d6","pointsActivityPage_receive_activity_button_text":"\u9818\u53d6\u7a4d\u5206","pointsActivityPage_receive_points_toast":"\u5df2\u6210\u529f\u9818\u53d6{numbers}\u7a4d\u5206\uff01","pointsActivityPage_received_activity_button_mobile_text":"\u5df2\u9818\u53d6","pointsActivityPage_received_activity_button_text":"\u5df2\u9818\u53d6","pointsActivityPage_share_link":"\u5206\u4eab\u9023\u7d50","pointsActivityPage_some_activity_type_mobile_text":"\u6bcf\u65e5\u4efb\u52d9","pointsActivityPage_svip_text":"\u5df2\u4eabPro+\u6703\u54e1\u5c08\u5c6c\u7a4d\u5206\u734e\u52f5","pointsActivityPage_title":"\u52a0\u5165Fotor\u4f75\u53c3\u8207Fotor\u7684\u6d3b\u52d5\u7372\u5f97\u734e\u52f5| Fotor","pointsActivityPage_upgrade_button_text":"\u7acb\u5373\u5347\u7d1a","pointsActivityPage_username_prefix_text":"\u4f60\u597d\uff0c","pointsActivityPage_vip_text":"\u5df2\u4eabPro\u6703\u54e1\u5c08\u5c6c\u7a4d\u5206\u734e\u52f5","pointsActivityPage_welcome":"\u6b61\u8fce\u4f86\u5230Fotor\u4efb\u52d9\u4e2d\u5fc3\uff01","pointsActivityPage_what_use_credits_mobile_text":"\u60a8\u53ef\u4ee5\u4f7f\u7528\u7a4d\u5206\u5728Fotor AI\u5716\u50cf\u751f\u6210\u5de5\u5177\u4e2d\u751f\u6210\u5404\u7a2eAI\u5716\u50cf\u3002 <a href=\\"https://www.fotor.com/images/create\\">\u7acb\u5373\u751f\u6210</a>","pointsActivityPage_what_use_credits_text":"\u60a8\u53ef\u4ee5\u4f7f\u7528\u7a4d\u5206\u5728<a href=\\"https://www.fotor.com/images/create\\">Fotor AI \u5716\u50cf\u751f\u6210\u5de5\u5177</a>\u4e2d\u751f\u6210\u5404\u7a2eAI \u5716\u50cf\uff0c\u5728<a href=\\"https://www.fotor.com/tw/features/background-remover/upload\\">Fotor \u667a\u80fd\u6473\u5716\u5de5\u5177</a>\u751f\u6210\u81ea\u5b9a\u7fa9\u80cc\u666f\uff0c\u4ee5\u53ca\u5728<a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor \u8a2d\u8a08\u5de5\u5177</a>\u4e2d\u751f\u6210\u81ea\u5df1\u7684\u7d20\u6750\u6216\u5716\u7247\u4f86\u81ea\u5b9a\u7fa9\u8a2d\u8a08\u3002\u5728\u9019\u4e9b\u5de5\u5177\u4e2d\uff0c\u751f\u6210\u4e00\u5f35 AI \u5716\u50cf\u5747\u6d88\u80171~2\u500b\u7a4d\u5206\u3002","pointsActivityPage_what_use_credits_title":"\u7a4d\u5206\u53ef\u4ee5\u505a\u4ec0\u9ebc\uff1f","pointsActivityPage_what_use_credits_to_link_mobile_text":"\u7acb\u5373\u751f\u6210","pointsActivityPage_what_use_credits_to_link_text":"\u7acb\u5373\u751f\u6210","preview_upload_limit_size":"\u56e0\u5716\u7247\u5c3a\u5bf8\u6216\u8005\u6a94\u5927\u5c0f\u8d85\u51fa\u9650\u5236\uff0c\u4e0a\u50b3\u5931\u6557\u3002{link}\u3002","preview_upload_more":"\u77ad\u89e3\u66f4\u591a","price_monthly_switch":"\u6309\u6708","price_page_activity_btn_discount":"\u4ee5{discount_cn}\u6298\u5347\u7d1a","price_page_billed_annually":"\u6309\u5e74\u4ed8\u8cbb","price_page_buy_now":"\u7acb\u5373\u8cfc\u8cb7","price_page_credits_once_info":"\u7a4d\u5206\u8cfc\u8cb7\u5f8c2\u5e74\u5167\u6709\u6548\u3002","price_page_credits_plans":"\u7a4d\u5206\u5957\u9910","price_page_credits_subscribe_info":"\u8a02\u95b1\u671f\u9593\uff0c\u672a\u4f7f\u7528\u7684\u7a4d\u5206\u53ef\u4ee5\u7d50\u8f49\uff0c\u6700\u591a\u7d2f\u7a4d5\u500b\u6708\u3002","price_page_feature_desc1":"\u5305\u62ec\u57fa\u790e\u7de8\u8f2f\u529f\u80fd\u3001\u57fa\u790e\u7f8e\u984f\u529f\u80fd\uff0c\u4ee5\u53ca\u90e8\u5206\u7279\u6548\u3001\u6ffe\u93e1\u548c\u908a\u6846\u7d20\u6750\u3002","price_page_feature_desc10":"\u8b93\u7167\u7247\u8b8a\u6210\u7d20\u63cf\u3001\u6cb9\u756b\u3001\u6c34\u5f69\u3001\u5361\u901a\u6216\u5176\u4ed6\u98a8\u683c\u7684\u85dd\u8853\u4f5c\u54c1\u3002","price_page_feature_desc10_list_desc1":"\u666e\u901a\u6e05\u6670\u5ea6\uff0c\u5e36\u6c34\u5370\u4e0b\u8f09","price_page_feature_desc10_list_desc2":"\u9ad8\u6e05\uff0c\u7121\u6c34\u5370\u4e0b\u8f09","price_page_feature_desc11":"\u70ba\u9ed1\u767d\u7167\u7247\u667a\u80fd\u4e0a\u8272\u3002","price_page_feature_desc12":"\u4f7f\u7528\u9810\u8a2d\u597d\u7684\u6a21\u677f\uff0c\u5feb\u901f\u5b8c\u6210\u6d77\u5831\u3001\u8cc0\u5361\u3001\u793e\u4ea4\u5a92\u9ad4\u5e16\u5b50\u7b49\u5404\u7a2e\u5834\u666f\u7684\u8a2d\u8a08\u9700\u6c42\u3002","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"\u5404\u7a2e\u98a8\u683c\u985e\u578b\u7684\u7248\u6b0a\u5b57\u9ad4\u3002","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & \u4e0a\u50b3\u5b57\u9ad4","price_page_feature_desc13_list_desc3":"523 & \u4e0a\u50b3\u5b57\u9ad4","price_page_feature_desc14":"\u5305\u62ec\u80cc\u666f\u3001\u5716\u7247\u3001\u63d2\u756b\u3001\u77e2\u91cf\u5716\u7b49\u5143\u7d20\u548c\u8cbc\u7d19\u3002","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"\u5728\u96f2\u7aef\u5132\u5b58\u60a8\u7684\u5de5\u7a0b\u6a94\u6848\u4ee5\u53ca\u4f60\u4e0a\u50b3\u7684\u5716\u7247\u3002","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"\u652f\u63f4\u4e0b\u8f09\u7684\u6a94\u6848\u683c\u5f0f","price_page_feature_desc16_list_desc1":"\u666e\u901a\u6e05\u6670\u5ea6\u7684JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"\u9ad8\u6e05\u7684JPG/PNG/PDF\uff0c\u4ee5\u53ca\u900f\u660e\u80cc\u666f\u7684PNG","price_page_feature_desc17":"\u4f7f\u7528\u7d71\u4e00\u7684\u5b57\u9ad4\u3001logo\u548c\u984f\u8272\u4f86\u7ba1\u7406\u54c1\u724c\u8a2d\u8a08\u3002\u4e26\u4e14\u53ef\u4ee5\u4e0a\u50b3\u672c\u5730\u5b57\u9ad4\u3002","price_page_feature_desc18":"\u7121\u5ee3\u544a\u6253\u64fe\uff0c\u66a2\u4eab\u66f4\u5927\u7684\u756b\u5e03\u3002","price_page_feature_desc19":"\u514d\u8cbb\u7372\u5f97\u7a4d\u5206\u8d08\u9001\uff0c\u53ef\u7528\u65bcAIGC\u76f8\u95dc\u529f\u80fd\u3002","price_page_feature_desc19_list_desc1":"100 \u7a4d\u5206/\u6708","price_page_feature_desc19_list_desc2":"300 \u7a4d\u5206/\u6708","price_page_feature_desc2":"\u5305\u62ec\u57fa\u790e\u8a2d\u8a08\u529f\u80fd\u4ee5\u53ca\u90e8\u5206\u7d20\u6750\u8cc7\u6e90\u3002","price_page_feature_desc3":"\u5305\u62ec\u57fa\u790e\u62fc\u5716\u5e03\u5c40\u53ca\u90e8\u5206\u62fc\u5716\u6a21\u677f\u3002","price_page_feature_desc4":"\u5305\u62ec\u6240\u6709\u9ad8\u7d1a\u7de8\u8f2f\u529f\u80fd\uff0c\u4f8b\u5982HSL\u3001\u964d\u566a\u3001\u76f8\u53cd\u984f\u8272\u3001\u5ae9\u819a\u3001\u5851\u5f62\u7b49\uff0c\u4ee5\u53ca\u6240\u6709\u9ad8\u7d1a\u6ffe\u93e1\u548c\u908a\u6846\u3002","price_page_feature_desc5":"\u6279\u91cf\u7de8\u8f2f\u591a\u5f35\u5716\u7247\uff0c\u6279\u91cf\u88c1\u526a\u3001\u6279\u91cf\u8abf\u6574\u5c3a\u5bf8\u3001\u6279\u91cf\u52a0\u5b57\u3001\u6279\u91cf\u4fee\u6539\u6a94\u6848\u683c\u5f0f\u3002","price_page_feature_desc6":"\u63d0\u9ad8\u7167\u7247\u5206\u8fa8\u7387\u3001\u92b3\u5316\u5716\u50cf\u7d30\u7bc0\u3001\u63d0\u9ad8\u5716\u50cf\u54c1\u8cea\uff0c\u8b93\u7167\u7247\u8b8a\u5f97\u66f4\u6e05\u6670\u3002","price_page_feature_desc7":"\u4e00\u9375\u79fb\u9664\u7167\u7247\u80cc\u666f\uff0c\u70ba\u7167\u7247\u4fee\u6539\u80cc\u666f\u984f\u8272\u6216\u80cc\u666f\u5716\u7247\u3002","price_page_feature_desc8":"\u79fb\u9664\u5716\u7247\u4e0a\u4e0d\u60f3\u8981\u7684\u7269\u54c1\u3001\u6587\u5b57\u6216\u6c34\u5370\u3002","price_page_feature_desc9":"\u8f38\u5165\u6587\u5b57\u6216\u532f\u5165\u5716\u7247\uff0c\u8b93AI\u70ba\u60a8\u9032\u884c\u5275\u4f5c\u3002","price_page_feature_title1":"\u57fa\u790e\u7de8\u8f2f\u529f\u80fd","price_page_feature_title10":"AI\u85dd\u8853\u7279\u6548","price_page_feature_title11":"AI\u667a\u80fd\u4e0a\u8272","price_page_feature_title12":"\u6a21\u677f","price_page_feature_title13":"\u5b57\u9ad4","price_page_feature_title14":"\u8cc7\u6e90","price_page_feature_title15":"\u96f2\u5132\u5b58","price_page_feature_title16":"\u6a94\u6848\u683c\u5f0f","price_page_feature_title17":"\u54c1\u724c\u5de5\u5177\u7bb1","price_page_feature_title18":"\u53bb\u5ee3\u544a","price_page_feature_title19":"\u7a4d\u5206\u8d08\u9001","price_page_feature_title2":"\u57fa\u790e\u8a2d\u8a08\u529f\u80fd","price_page_feature_title3":"\u57fa\u790e\u62fc\u5716\u529f\u80fd","price_page_feature_title4":"\u9ad8\u7d1a\u7de8\u8f2f\u529f\u80fd","price_page_feature_title5":"\u6279\u91cf\u7de8\u8f2f","price_page_feature_title6":"AI\u667a\u80fd\u512a\u5316","price_page_feature_title7":"AI\u667a\u80fd\u62a0\u5716","price_page_feature_title8":"AI\u667a\u80fd\u6d88\u9664","price_page_feature_title9":"AI\u751f\u6210\u5167\u5bb9\uff08AIGC\uff09","price_page_free_info":"Free","price_page_free_trial":"\u514d\u8cbb\u8a66\u7528","price_page_most_popular":"\u6700\u53d7\u6b61\u8fce","price_page_one_time_payment":"\u55ae\u6b21\u8cfc\u8cb7","price_page_platform_title":"\u8de8\u5e73\u53f0\u53ef\u7528","price_page_premium_plans":"\u6703\u54e1\u5957\u9910","price_page_subscribe_now":"\u7acb\u5373\u8a02\u95b1","price_page_subscription_plan":"\u8a02\u95b1\u65b9\u6848","price_page_try_now":"\u7acb\u5373\u4f7f\u7528","price_yearly_switch":"\u6309\u5e74","read_aigc_tips_title":"\u9ede\u64ca\u700f\u89bdAIGC\u653b\u7565","result_after":"\u8abf\u6574\u5f8c","resume_uns_active_button":"\u6211\u77e5\u9053\u4e86","resume_uns_active_desc":"\u7576\u524d\u512a\u60e0\u5df2\u88ab\u9818\u53d6\uff0c\u60a8\u5df2\u53ef\u4eab\u53d7\u8a02\u95b1\u6298\u6263\u3002","resume_uns_active_title":"\u4f60\u5df2\u7d93\u9818\u53d6\u4e86\u512a\u60e0\uff01","resume_uns_button":"\u4ee57\u6298\u6062\u5fa9\u8a02\u95b1","resume_uns_card_number":"\u5361\u865f\uff1a","resume_uns_click_download_app_title":"\u4e0b\u8f09\u684c\u9762\u61c9\u7528","resume_uns_desc":"\u6062\u5fa9\u8a02\u95b1\u5f8c\uff0c\u4e0d\u6703\u7acb\u5373\u5411\u60a8\u6536\u8cbb\uff0c\u800c\u662f\u5728\u8a02\u95b1\u5230\u671f\u65e5\u518d\u9032\u884c\u6536\u8cbb\u3002\u60a8\u5c07\u5f9e\u6b64\u4eab\u53d7\u8a02\u95b1\u8cbb7\u6298\u7684\u512a\u60e0\u3002","resume_uns_discounted_subscription_fee":"\u6298\u5f8c\u8a02\u95b1\u8cbb\u7528\uff1a","resume_uns_download_app_title":"\u6703\u54e1\u591a\u7aef\u4e92\u901a\uff0c\u8de8\u8a2d\u5099\u66a2\u4eab\u9ad8\u7d1a\u6b0a\u76ca\uff01","resume_uns_download_button":"\u4e0b\u8f09","resume_uns_email":"\u90f5\u7bb1\uff1a","resume_uns_expiration_date":"\u8a02\u95b1\u5230\u671f\u65e5\uff1a","resume_uns_expired_button":"\u4ee58\u6298\u518d\u6b21\u8a02\u95b1","resume_uns_expired_desc":"\u4f60\u7684\u8a02\u95b1\u5df2\u904e\u671f\uff0c7\u6298\u512a\u60e0\u50c5\u5728\u5230\u671f\u65e5\u4e4b\u524d\u6709\u6548\u3002\u4f46\u5225\u6025\uff0c\u5982\u60a8\u518d\u6b21\u8a02\u95b1\u6703\u54e1\uff0c\u53ef\u4eab\u53d78\u6298\u512a\u60e0!","resume_uns_expired_title":"\u512a\u60e0\u5df2\u904e\u671f...\u4f46\u9084\u6709\u5176\u4ed6\u798f\u5229\uff01","resume_uns_mobile_download_app_title":"\u7acb\u5373\u7372\u53d6Fotor App","resume_uns_month":"\u6708","resume_uns_nickname":"\u66b1\u7a31:","resume_uns_payment_method":"\u652f\u4ed8\u65b9\u5f0f\uff1a","resume_uns_payment_method_value":"\u4fe1\u7528\u5361\u6216\u501f\u8a18\u5361","resume_uns_scan_download_app_title":"\u6383\u63cf\u4e0b\u8f09Fotor App","resume_uns_status":"\u8a02\u95b1\u72c0\u614b\uff1a","resume_uns_status_cancel":"\u5df2\u53d6\u6d88","resume_uns_subscription_fee":"\u8a02\u95b1\u8cbb\u7528\uff1a","resume_uns_subscription_plan":"\u8a02\u95b1\u5957\u9910\uff1a","resume_uns_success_button":"\u6211\u77e5\u9053\u4e86","resume_uns_success_desc":"\u60a8\u5df2\u7d93\u6210\u529f\u6062\u5fa9\u4e86\u8a02\u95b1\u3002","resume_uns_success_title":"\u592a\u68d2\u4e86\uff01","resume_uns_top_title":"\u6062\u5fa9\u8a02\u95b1","resume_uns_year":"\u5e74","share_button_text":"\u5206\u4eab","unitMonth":"/\u6708","upload_background":"\u7acb\u5373\u9ad4\u9a57","upload_background_remover":"\u7acb\u5373\u53bb\u80cc","upload_fail":"\u6253\u958b\u5716\u7247\u5931\u6557\uff0c\u8acb\u91cd\u8a66\u3002","upload_format_custom":"\u50c5\u652f\u6301\u6253\u958b {JPG\u3001PNG\u3001HEIC/HEIF \u548c WebP} \u683c\u5f0f\u5716\u7247\u3002","upload_number_tip":"\u8a72\u9801\u9762\u50c5\u652f\u6301\u6dfb\u52a0 1 \u5f35\u7167\u7247\u9032\u884c\u7de8\u8f2f\uff0c\u60a8\u53ef\u4ee5\u524d\u5f80\u7de8\u8f2f\u5de5\u5177\u6dfb\u52a0\u66f4\u591a\u7167\u7247\u3002","upload_start":"\u7acb\u5373\u958b\u59cb\uff01","upload_sure":"\u78ba\u8a8d","year_credit_discount_tip":"\u7bc0\u7701 70%","year_discount_tip":"\u7bc0\u7701 62%","copy_success":"\u8907\u88fd\u6210\u529f","price_page_feature_title20":"\u4eba\u50cf\u6a21\u7cca\u4fee\u5fa9","price_page_feature_desc20":"\u667a\u6167\u4fee\u5fa9\u6a21\u7cca\u4eba\u50cf\uff0c\u4e00\u9375\u8b8a\u6e05\u6670\u3002","price_page_feature_title21":"\u667a\u6167\u7f8e\u819a","price_page_feature_desc21":"\u795e\u5947\u800c\u5b8c\u7f8e\u5730\u6539\u8b8a\u4f60\u7684\u8096\u50cf\u548c\u7167\u7247\u3002 \u53ea\u9700\u9ede\u64ca\u4e00\u4e0b\uff0c\u5373\u53ef\u7dda\u4e0a\u4fee\u98fe\u7167\u7247\uff0c\u5c55\u73fe\u5149\u5f69\u7167\u4eba\u7684\u201c\u4f60\u201d\u3002","price_page_feature_title22":"AI\u64f4\u5716","price_page_feature_desc22":"\u4e00\u9375\u64f4\u5c55\u7167\u7247\u5c3a\u5bf8\u3002 \u81ea\u52d5\u64f4\u5c55\u7167\u7247\u7684\u4e3b\u984c\u5167\u5bb9\u3001\u80cc\u666f\u548c\u7d0b\u7406\u3002","price_page_feature_title23":"AI\u5c40\u90e8\u91cd\u7e6a","price_page_feature_desc23":"\u66f4\u6539\u548c\u66ff\u63db\u7167\u7247\u4e2d\u7684\u5167\u5bb9\u3002","price_page_feature_title24":"\u820a\u7167\u7247\u4fee\u5fa9","price_page_feature_desc24":"\u81ea\u52d5\u4fee\u5fa9\u640d\u58de\u3001\u6d88\u9664\u6a21\u7cca\u3001\u6062\u5fa9\u892a\u8272\u7684\u8272\u5f69\u548c\u7d30\u7bc0\uff0c\u8b93\u4f60\u7684\u820a\u7167\u7247\u7165\u7136\u4e00\u65b0\u3002","price_page_feature_title25":"AI\u982d\u50cf","price_page_feature_desc25":"\u8f15\u9b06\u5feb\u901f\u5730\u5275\u5efa\u5c08\u696d\u3001\u6709\u5275\u610f\u3001\u903c\u771f\u7684\u9ad8\u6e05AI\u982d\u50cf\u548c\u500b\u4eba\u8cc7\u6599\u7167\u7247\u3002","price_page_feature_desc25_list_desc1":"5\u6298","price_page_feature_title26":"AI\u63db\u81c9","price_page_feature_desc26":"\u4e0a\u50b3\u7167\u7247\u63db\u81c9\uff0c\u5be6\u73fe\u5b8c\u7f8e\u903c\u771f\u3001\u5929\u8863\u7121\u7e2b\u7684AI\u751f\u6210\u63db\u81c9\u6548\u679c\uff0c\u6eff\u8db3\u5404\u7a2e\u5a1b\u6a02\u9700\u6c42\u3002","price_page_feature_title27":"AI\u8996\u983b\u589e\u5f3a","price_page_feature_desc27":"\u6539\u5584\u8996\u983b\u8cea\u91cf\uff0c\u5305\u62ec\u92b3\u5ea6\u3001\u4eae\u5ea6\u7b49\u8a2d\u5b9a\uff0c\u8b93\u8996\u983b\u66f4\u6e05\u6670\u3002","price_page_feature_desc27_list_desc1":"3\u79d2\uff0c\u666e\u6e05\u8996\u983b","price_page_feature_desc27_list_desc2":"\u5168\u90e8\u6642\u9577\uff0c\u9ad8\u6e05\u8996\u983b","price_page_feature_title28":"AI\u8996\u983b\u80cc\u666f\u79fb\u9664","price_page_feature_desc28":"\u53ea\u9700\u8f15\u9ede\u4e00\u4e0b\uff0c\u5373\u53ef\u77ac\u9593\u79fb\u9664\u4eba\u50cf\u8996\u983b\u4e2d\u7684\u80cc\u666f\u3002","price_page_feature_desc28_list_desc1":"3\u79d2\uff0c\u666e\u6e05\u8996\u983b","price_page_feature_desc28_list_desc2":"\u5168\u90e8\u6642\u9577\uff0c\u9ad8\u6e05\u8996\u983b","price_page_feature_title29":"AI\u6279\u91cf\u7de8\u8f2f","price_page_feature_desc29":"AI\u6279\u91cf\u7de8\u8f2f\u5716\u7247\uff0c\u5982\u6279\u91cf\u53bb\u9664\u80cc\u666f\u3001\u6279\u91cf\u66f4\u6539\u80cc\u666f\u7b49\u3002","price_page_feature_desc29_list_desc1":"\u6700\u591a\u540c\u6642\u8655\u74063\u5f35\u5716\u7247","price_page_feature_desc29_list_desc2":"\u6700\u591a\u540c\u6642\u8655\u740650\u5f35\u5716\u7247","price_page_faq_credit_answer1":"\u7a4d\u5206\u662f\u4e00\u7a2e\u865b\u64ec\u4ee3\u5e63\u5f62\u5f0f\uff0c\u60a8\u53ef\u4ee5\u8cfc\u8cb7\u7a4d\u5206\uff0c\u4e26\u7528\u65bc\u652f\u4ed8Fotor\u7db2\u7ad9\u548cApp\u4e0a\u7684\u9ad8\u7d1a\u529f\u80fd\u548c\u670d\u52d9\u3002\u76ee\u524d\uff0c\u7a4d\u5206\u53ef\u4ee5\u7528\u65bcAI\u5716\u50cf\u751f\u6210\u3001AI\u80cc\u666f\u751f\u6210\u3002","price_page_faq_credit_answer2":"\u53ea\u8981\u60a8\u4fdd\u6301\u8a02\u95b1\uff0c\u7576\u6708\u672a\u4f7f\u7528\u5b8c\u7684\u8a02\u95b1\u7a4d\u5206\u53ef\u4ee5\u6efe\u52d5\u7d50\u8f49\u5230\u4e0b\u500b\u6708\uff0c\u4e26\u4e14\u6700\u591a\u53ef\u4ee5\u7d2f\u7a4d\u4e94\u500b\u6708\u3002\u4e00\u65e6\u60a8\u53d6\u6d88\u8a02\u95b1\uff0c\u60a8\u7684\u7a4d\u5206\u5c07\u5728\u8a02\u95b1\u5230\u671f\u7576\u5929\u5230\u671f\u3002","price_page_faq_credit_answer3":"\u5982\u679c\u60a8\u8cfc\u8cb7\u4e86\u7a4d\u5206\u8a02\u95b1\u5957\u9910\uff0c\u4f46\u7a4d\u5206\u7528\u5b8c\u4e86\uff0c\u60a8\u53ef\u4ee5\u5347\u7d1a\u5230\u66f4\u591a\u7a4d\u5206\u7684\u8a02\u95b1\u5957\u9910\uff0c\u4e5f\u53ef\u4ee5\u8cfc\u8cb7\u4e00\u6b21\u6027\u7a4d\u5206\u3002","price_page_faq_credit_answer4":"\u662f\u7684\uff0c\u60a8\u7684\u7a4d\u5206\u53ef\u4ee5\u5728Fotor\u6240\u6709\u5e73\u53f0\u4e0a\u4f7f\u7528\uff0c\u5305\u62ecFotor\u7db2\u7ad9\u3001App\uff08iOS/Android\uff09\u548c\u684c\u9762\u8edf\u4ef6\uff08Mac/Windows\uff09\u3002","price_page_faq_credit_answer5":"\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u96a8\u6642\u53d6\u6d88\u60a8\u7684\u7a4d\u5206\u8a02\u95b1\u5957\u9910\u3002","price_page_faq_credit_answer6":"\u60a8\u53ef\u4ee5\u4f7f\u7528PayPal\u6216\u9280\u884c\u5361\u652f\u4ed8\u3002\u6211\u5011\u652f\u6301Visa\u3001\u842c\u4e8b\u9054\u3001\u7f8e\u570b\u904b\u901a\u3001JCB\u7b49\u7684\u4fe1\u7528\u5361\u6216\u501f\u8a18\u5361\u3002","price_page_faq_credit_answer7":"\u53ef\u4ee5\u3002 \u7531\u65bc\u6703\u54e1\u5957\u9910\u8d08\u9001\u7684\u7a4d\u5206\u6709\u9650\uff0c\u5982\u679c\u60a8\u9700\u8981\u66f4\u591a\u7684\u7a4d\u5206\uff0c\u60a8\u53ef\u4ee5\u8a02\u95b1\u7a4d\u5206\u5957\u9910\u6216\u8005\u55ae\u6b21\u8cfc\u8cb7\u7a4d\u5206\u3002 \u6703\u54e1\u5957\u9910\u3001\u7a4d\u5206\u5957\u9910\u4e26\u4e0d\u885d\u7a81\uff0c\u53ef\u4ee5\u540c\u6642\u5b58\u5728\u3002","price_page_faq_credit_question1":"\u7a4d\u5206\u662f\u4ec0\u9ebc\uff1f\u7a4d\u5206\u53ef\u4ee5\u7528\u4f86\u505a\u4ec0\u9ebc\uff1f","price_page_faq_credit_question2":"\u7a4d\u5206\u7684\u6709\u6548\u671f\u662f\u591a\u4e45\uff1f\u672a\u4f7f\u7528\u7684\u7a4d\u5206\u53ef\u4ee5\u7d2f\u7a4d\u55ce\uff1f","price_page_faq_credit_question3":"\u5982\u679c\u6211\u7684\u7a4d\u5206\u7528\u5b8c\u4e86\u600e\u9ebc\u8fa6\uff1f","price_page_faq_credit_question4":"\u7a4d\u5206\u53ef\u4ee5\u5728\u624b\u6a5f\u7aef\u4f7f\u7528\u55ce\uff1f","price_page_faq_credit_question5":"\u6211\u53ef\u4ee5\u53d6\u6d88\u7a4d\u5206\u8a02\u95b1\u5957\u9910\u55ce\uff1f","price_page_faq_credit_question6":"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u652f\u4ed8\u65b9\u5f0f\uff1f","price_page_faq_credit_question7":"\u6211\u8a02\u95b1\u4e86\u6703\u54e1\u5957\u9910\uff0c\u9084\u53ef\u4ee5\u518d\u8a02\u95b1\u7a4d\u5206\u5957\u9910\u55ce\uff1f","price_page_faq_member_answer1":"\u53ef\u4ee5\uff0cFotor\u6709\u5f88\u591a\u57fa\u790e\u7684\u514d\u8cbb\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528\u3002\u4f46\u5982\u679c\u60a8\u60f3\u9ad4\u9a57\u9ad8\u7d1a\u529f\u80fd\u3001\u66f4\u591a\u7684\u7d20\u6750\u8cc7\u6e90\uff0c\u6211\u5011\u5efa\u8b70\u60a8\u5347\u7d1a\u6210\u70baFotor Pro\u6216Fotor Pro+\u3002","price_page_faq_member_answer2":"Fotor Pro+\u5305\u542b\u4e86\u6240\u6709Fotor Pro\u7684\u6b0a\u76ca\u3002\u53e6\u5916\uff0cFotor Pro+\u984d\u5916\u66a2\u4eab\u66f4\u591a\u9ad8\u6e05\u7248\u6b0a\u5716\u7247\u7684\u5546\u7528\u7279\u6b0a\uff0cFotor Pro+\u9084\u53ef\u4ee5\u4f7f\u7528\u54c1\u724c\u5de5\u5177\u7bb1\u4f86\u7ba1\u7406\u54c1\u724clogo\u3001\u984f\u8272\u548c\u5b57\u9ad4\uff0c\u4e26\u4e14\u53ef\u4ee5\u4e0a\u50b3\u672c\u5730\u5b57\u9ad4\u3002","price_page_faq_member_answer3":"\u662f\u7684\uff0cFotor Pro\u548cFotor Pro+\u90fd\u53ef\u4ee5\u8de8\u5e73\u53f0\u4f7f\u7528\u3002\u53ea\u8981\u4f60\u8cfc\u8cb7\u4e86\u6703\u54e1\u5957\u9910\uff0c\u4f60\u5c31\u53ef\u4ee5\u89e3\u9396Fotor\u7db2\u7ad9\u3001App\uff08iOS/Android\uff09 \u3001\u684c\u9762\u7aef\uff08Mac/Windows\uff09\u7684\u6240\u6709\u9ad8\u7d1a\u6b0a\u76ca\u3002\u4f60\u7684\u5de5\u7a0b\u6587\u4ef6\u4e5f\u6703\u540c\u6b65\u5230\u5404\u500b\u5e73\u53f0\uff0c\u4fbf\u65bc\u60a8\u8de8\u5e73\u53f0\u4f7f\u7528\u3002","price_page_faq_member_answer4":"\u60a8\u53ef\u4ee5\u4f7f\u7528PayPal\u6216\u9280\u884c\u5361\u652f\u4ed8\u3002\u6211\u5011\u652f\u6301Visa\u3001\u842c\u4e8b\u9054\u3001\u7f8e\u570b\u904b\u901a\u3001JCB\u7b49\u7684\u4fe1\u7528\u5361\u6216\u501f\u8a18\u5361\u3002","price_page_faq_member_answer5":"\u662f\u7684\uff0c\u6211\u5011\u6703\u901a\u904e\u90f5\u4ef6\u7d66\u60a8\u767c\u9001\u767c\u7968\u3002\u5982\u679c\u60a8\u6c92\u6709\u6536\u5230\u96fb\u5b50\u90f5\u4ef6\u6216\u7121\u6cd5\u901a\u904e\u96fb\u5b50\u90f5\u4ef6\u4e0b\u8f09\u767c\u7968\uff0c\u60a8\u53ef\u4ee5\u767b\u9304Fotor\u7db2\u7ad9\uff0c\u9ede\u64ca\u60a8\u7684\u500b\u4eba\u8cc7\u6599\u982d\u50cf\u4e26\u67e5\u627e\u4ed8\u6b3e\u6b77\u53f2\u8a18\u9304\u2192 \u767c\u7968\u3002\u53ea\u9700\u9ede\u64ca\u60a8\u9700\u8981\u7684\u767c\u7968\uff0c\u7136\u5f8c\u4e0b\u8f09\u5373\u53ef\u3002","price_page_faq_member_answer6":"\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u96a8\u6642\u53d6\u6d88\u8a02\u95b1\u3002\u767b\u9304Fotor\u7db2\u7ad9\uff0c\u9ede\u64ca\u60a8\u7684\u500b\u4eba\u8cc7\u6599\u982d\u50cf\uff0c\u627e\u5230\u8a02\u95b1\u6309\u9215\uff0c\u9ede\u64ca\u53d6\u6d88\u8a02\u95b1\uff0c\u7136\u5f8c\u6309\u7167\u6b65\u9a5f\u64cd\u4f5c\u5373\u53ef\u53d6\u6d88\u8a02\u95b1\u3002","price_page_faq_member_answer7":"\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u96a8\u6642\u5f9e\u6708\u5ea6\u5957\u9910\u5347\u7d1a\u5230\u5e74\u5ea6\u5957\u9910\uff0c\u6216\u5f9ePro\u5347\u7d1a\u5230Pro+\u3002\u5982\u9700\u5347\u7d1a\uff0c\u8acb\u767b\u9304Fotor\u7db2\u7ad9\uff0c\u9ede\u64ca\u60a8\u7684\u500b\u4eba\u8cc7\u6599\u982d\u50cf\uff0c\u627e\u5230\u8a02\u95b1\u6309\u9215\uff0c\u60a8\u6703\u5728\u90a3\u88e1\u770b\u5230\u66f4\u6539\u5957\u9910\u7684\u9078\u9805\u3002","price_page_faq_member_answer8":"\u662f\u7684\uff0c\u8a02\u95b1\u5957\u9910\u5c07\u81ea\u52d5\u7e8c\u8a02\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u88ab\u6536\u53d6\u8cbb\u7528\uff0c\u60a8\u53ef\u4ee5\u96a8\u6642\u53d6\u6d88\u8a02\u95b1\uff0c\u76f4\u81f3\u672c\u6b21\u8a02\u95b1\u5468\u671f\u5230\u671f\uff1b\u5426\u5247\uff0c\u60a8\u5c07\u5728\u8a02\u95b1\u5468\u671f\u5230\u671f\u5f8c\u81ea\u52d5\u6263\u8cbb\u3002","price_page_faq_member_answer9":"\u60a8\u53ef\u4ee5\u5728\u6211\u5011\u7684AI\u5716\u50cf\u751f\u6210\u5668\u3001AI\u80cc\u666f\u751f\u6210\u5668\u7b49\u5de5\u5177\u4e2d\u4f7f\u7528\u7a4d\u5206\u3002\u7531\u65bcAIGC\u76f8\u95dc\u529f\u80fd\u7684\u4f3a\u670d\u5668\u6210\u672c\u5f88\u9ad8\uff0c\u56e0\u6b64\u7121\u6cd5\u63d0\u4f9b\u7121\u9650\u4f7f\u7528\u3002\u5982\u679c\u60a8\u7684\u7a4d\u5206\u7528\u5b8c\u4e86\uff0c\u60a8\u53ef\u4ee5\u8cfc\u8cb7\u55ae\u7368\u7684\u7a4d\u5206\u5957\u9910\u9032\u884c\u88dc\u5145\u3002","price_page_faq_member_question1":"\u6211\u53ef\u4ee5\u514d\u8cbb\u4f7f\u7528Fotor\u55ce\uff1f","price_page_faq_member_question2":"Fotor Pro\u548cFotor Pro+\u6709\u4ec0\u9ebc\u5340\u5225\uff1f","price_page_faq_member_question3":"\u6211\u7684\u6703\u54e1\u5957\u9910\u652f\u6301\u5728\u79fb\u52d5\u7aef\u4f7f\u7528\u55ce\uff1f","price_page_faq_member_question4":"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u652f\u4ed8\u65b9\u5f0f\uff1f","price_page_faq_member_question5":"\u8cfc\u8cb7\u5f8c\u6709\u767c\u7968\u55ce\uff1f","price_page_faq_member_question6":"\u6211\u53ef\u4ee5\u53d6\u6d88\u8a02\u95b1\u55ce\uff1f","price_page_faq_member_question7":"\u6211\u53ef\u4ee5\u5347\u7d1a\u7576\u524d\u7684\u5957\u9910\u55ce\uff1f","price_page_faq_member_question8":"\u6211\u7684\u8a02\u95b1\u5957\u9910\u6703\u81ea\u52d5\u7e8c\u8a02\u55ce\uff1f","price_page_faq_member_question9":"\u8cfc\u8cb7\u6703\u54e1\u5957\u9910\u984d\u5916\u8d08\u9001\u7684\u7a4d\u5206\u53ef\u4ee5\u7528\u4f86\u505a\u4ec0\u9ebc\uff1f","mobile_to_app_popup_title":"\u4e0b\u8f09APP\u8a66\u8a66\uff1f","mobile_to_app_popup_subtitle":"\u53bbApp\u53d6\u5f97\u66f4\u597d\u7684\u7de8\u8f2f\u9ad4\u9a57\uff01","mobile_to_app_popup_button_stay":"\u7559\u5728\u7db2\u9801","mobile_to_app_popup_button_open":"\u6253\u958bApp","mobile_app_entry_pop_title":"\u60f3\u514d\u8cbb\u9ad4\u9a57Fotor\u6703\u54e1\u55ce\uff1f","mobile_app_entry_pop_content":"\u4e0b\u8f09Fotor App\uff0c\u7372\u5f97\u66f4\u8f15\u9b06\u7684\u7de8\u8f2f\u9ad4\u9a57\uff0c\u4eab\u53d7\u66f4\u591a\u6703\u54e1\u529f\u80fd\u7684\u514d\u8cbb\u8a66\u7528\uff01 \ud83d\udc47"}'),
                id_ID: JSON.parse('{"ai_textarea_placeholder":"Deskripsikan apa yang ingin Anda gambar oleh AI","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Pengguna","aigc_data_reveal_title2":"Gambar Dihasilkan","aigc_data_reveal_title3":"Peringkat","back_to_top":"Scroll to top","breadCrumbs_home":"Beranda","credits_unit":"/Credit","drop_image_to_upload":"Letakkan gambar di sini","header_logo_hover_info":"Seret logo ke bilah bookmark untuk mengunjungi Fotor dengan lebih mudah di lain waktu!","join_discord_title":"Klik untuk mengunjungi Discord","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"Tidak sekarang","mobile_to_app_desc":"Edit dan rancang foto Anda saat bepergian.","mobile_to_app_desc1":"Bagikan ke media sosial dengan lebih lancar dan mudah!","mobile_to_app_ok":"Jelajahi Aplikasi","mobile_to_app_title":"Lanjutkan di aplikasi","mobile_to_more_text":"Mulai mengedit dan mendesain","more":"Lagi","more_templates_button":"Jelajahi Lebih Banyak Template {sizeName}","original_before":"Sebelum","pointsActivityPage_activity_list_mobile_title":"Dapatkan Kredit","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"Kredit:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Pusat Tugas","pointsActivityPage_desc":"Melakukan apa yang Anda sukai di Fotor memungkinkan Anda mendapatkan lebih banyak hadiah dengan mudah dan menyenangkan. Mulai mendapatkan dengan hadiah Fotor hari ini!","pointsActivityPage_download_app_text":"Unduh Aplikasi Fotor dan daftar untuk mendapatkan 5 kredit gratis di Aplikasi. Kredit yang diperoleh dapat digunakan di situs web dan Aplikasi kami!","pointsActivityPage_download_app_title":"Unduh Aplikasi","pointsActivityPage_my_credits_text":"Kredit Saya","pointsActivityPage_novip_text":"Bergabunglah dengan Fotor Pro untuk mendapatkan kredit ganda","pointsActivityPage_one_activity_type_mobile_text":"Hasilkan Sekali","pointsActivityPage_receive_activity_button_mobile_text":"Hasilkan","pointsActivityPage_receive_activity_button_text":"Dapatkan Kredit","pointsActivityPage_receive_points_toast":"Menerima {numbers} kredit!","pointsActivityPage_received_activity_button_mobile_text":"Diterima","pointsActivityPage_received_activity_button_text":"Diterima","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"Hasilkan Setiap Hari","pointsActivityPage_svip_text":"Hadiah kredit eksklusif Pro+","pointsActivityPage_title":"Bergabunglah dengan Fotor dan mainkan Fotor untuk mendapatkan hadiah dengan mudah | Fotor","pointsActivityPage_upgrade_button_text":"Tingkatkan","pointsActivityPage_username_prefix_text":"Hai!","pointsActivityPage_vip_text":"Hadiah kredit eksklusif Pro","pointsActivityPage_welcome":"Selamat datang di Pusat Tugas Fotor!","pointsActivityPage_what_use_credits_mobile_text":"Anda dapat menggunakan kredit untuk menghasilkan gambar AI dengan Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">Buat Sekarang</a>","pointsActivityPage_what_use_credits_text":"Anda dapat menggunakan kredit untuk menghasilkan berbagai macam gambar AI dengan <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>, membuat latar belakang yang menakjubkan untuk guntingan Anda di <a href=\\"https://www.fotor.com/id/features/background-remover/upload\\">Fotor Background Remover</a>, dan membuat desain yang unik dengan membuat elemen atau gambar Anda sendiri di <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. Menghasilkan satu gambar AI menghabiskan 1 atau 2 kredit dalam alat tersebut.","pointsActivityPage_what_use_credits_title":"Apa yang bisa saya lakukan dengan kredit?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Buat Sekarang","pointsActivityPage_what_use_credits_to_link_text":"Hasilkan Sekarang","preview_upload_limit_size":"Upload gagal karena ukuran gambar atau ukuran file yang berlebihan.{link}.","preview_upload_more":"Belajarlah lagi","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"High-resolution JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 Credits/Month","price_page_feature_desc19_list_desc2":"300 Credits/Month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Photo Effect","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Generated Content (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"Klik untuk membaca tip AIGC","result_after":"Setelah","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"Membagikan","unitMonth":"/month","upload_background":"Ubah Latar Belakang Foto Sekarang","upload_background_remover":"Hapus Latar Belakang Sekarang","upload_fail":"Gagal membuka gambar, harap coba lagi.","upload_format_custom":"Mendukung format {JPG, PNG, HEIC/HEIF, WebP}","upload_number_tip":"Halaman ini hanya mendukung penambahan 1 foto untuk diedit, Anda dapat menambahkan lebih banyak foto di alat pengeditan kami.","upload_start":"Mulai sekarang!","upload_sure":"Mengonfirmasi","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"disalin","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_app_entry_pop_title":"Vuoi provare Fotor Pro gratuitamente?","mobile_app_entry_pop_content":"Scarica l\'app Fotor per un editing pi\xf9 facile e una prova gratuita delle funzionalit\xe0 professionali! \ud83d\udc47"}'),
                it_IT: JSON.parse('{"ai_textarea_placeholder":"Describe what you want see","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Utenti","aigc_data_reveal_title2":"Immagini generate","aigc_data_reveal_title3":"Valutazione","back_to_top":"Scroll to top","breadCrumbs_home":"Home","credits_unit":"/Credit","drop_image_to_upload":"Trascina l\'immagine qui","header_logo_hover_info":"Trascina il logo nella barra dei segnalibri per visitare Fotor pi\xf9 facilmente la prossima volta!","join_discord_title":"Fare clic per visitare Discord","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"Non ora","mobile_to_app_desc":"Modifica e progetta le tue foto ovunque ti trovi.","mobile_to_app_desc1":"Condividi sui social media in modo pi\xf9 fluido e facile!","mobile_to_app_ok":"Esplora l\'app","mobile_to_app_title":"Continua nell\'app","mobile_to_more_text":"Inizia a modificare e progettare","more":"Di pi\xf9","more_templates_button":"Sfoglia altri modelli {sizeName}","original_before":"Prima","pointsActivityPage_activity_list_mobile_title":"Guadagnare crediti","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"I crediti:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Centro attivit\xe0","pointsActivityPage_desc":"Fare ci\xf2 che ti piace su Fotor ti permette di ottenere pi\xf9 ricompense in modo facile e divertente. Inizia a guadagnare con le ricompense di Fotor oggi stesso!","pointsActivityPage_download_app_text":"Scaricate l\'App Fotor e iscrivetevi per guadagnare 5 crediti gratuiti sull\'App. I crediti guadagnati possono essere utilizzati sia sul nostro sito web che sull\'App!","pointsActivityPage_download_app_title":"Scarica l\'App","pointsActivityPage_my_credits_text":"I miei crediti","pointsActivityPage_novip_text":"Iscriviti a Fotor Pro per guadagnare crediti doppi","pointsActivityPage_one_activity_type_mobile_text":"Guadagna una volta","pointsActivityPage_receive_activity_button_mobile_text":"Guadagnare","pointsActivityPage_receive_activity_button_text":"Guadagnare crediti","pointsActivityPage_receive_points_toast":"Ricevuti {numbers} credito/i!","pointsActivityPage_received_activity_button_mobile_text":"Ricevuto","pointsActivityPage_received_activity_button_text":"Ricevuto","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"Guadagnare ogni giorno","pointsActivityPage_svip_text":"Crediti esclusivi Pro+","pointsActivityPage_title":"Unisciti a Fotor e gioca con Fotor per ottenere facilmente ricompense | Fotor","pointsActivityPage_upgrade_button_text":"Aggiornamento","pointsActivityPage_username_prefix_text":"Ciao!","pointsActivityPage_vip_text":"Premi esclusivi per i crediti Pro","pointsActivityPage_welcome":"Benvenuto nel Centro attivit\xe0 Fotor!","pointsActivityPage_what_use_credits_mobile_text":"\xc8 possibile utilizzare i crediti per generare immagini AI con Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">Crea ora</a>","pointsActivityPage_what_use_credits_text":"\xc8 possibile utilizzare i crediti per generare un\'ampia gamma di immagini AI con <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>, creare sfondi straordinari per i ritagli con <a href=\\"https://www.fotor.com/it/features/background-remover/upload\\">Fotor Background Remover</a> e creare design unici generando i propri elementi o immagini in <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. La generazione di un\'immagine AI consuma 1 o 2 crediti in questi strumenti.","pointsActivityPage_what_use_credits_title":"Cosa posso fare con i crediti?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Crea ora","pointsActivityPage_what_use_credits_to_link_text":"Genera ora","preview_upload_limit_size":"Caricamento fallito a causa della dimensione dell\'immagine o del file eccessivi. {link}.","preview_upload_more":"Scopri di pi\xf9","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"High-resolution JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 Credits/Month","price_page_feature_desc19_list_desc2":"300 Credits/Month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Photo Effect","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Generated Content (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"Fare clic per leggere i suggerimenti AIGC","result_after":"Dopo","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"Condividi","unitMonth":"/month","upload_background":"Cambia lo sfondo della foto ora","upload_background_remover":"Rimuovi lo sfondo ora","upload_fail":"Impossibile aprire l\'immagine, per favore riprova.","upload_format_custom":"Supporto formati {JPG, PNG, HEIC/HEIF, WebP}","upload_number_tip":"Questa pagina supporta solo l\'aggiunta di 1 foto per la modifica, puoi aggiungere pi\xf9 foto nel nostro strumento di modifica.","upload_start":"Inizia ora!","upload_sure":"Conferma","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"Copiato","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_app_entry_pop_title":"Mau coba Fotor Pro gratis?","mobile_app_entry_pop_content":"Unduh aplikasi Fotor untuk pengeditan yang lebih mudah dan uji coba gratis fitur pro! \ud83d\udc47"}'),
                th_TH: JSON.parse('{"ai_textarea_placeholder":"Describe what you want see","aigc_data_reveal_num1":"6 \u0e25\u0e49\u0e32\u0e19+","aigc_data_reveal_num2":"50 \u0e25\u0e49\u0e32\u0e19+","aigc_data_reveal_title1":"\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49","aigc_data_reveal_title2":"\u0e20\u0e32\u0e1e\u0e16\u0e39\u0e01\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19","aigc_data_reveal_title3":"\u0e04\u0e30\u0e41\u0e19\u0e19","back_to_top":"Scroll to top","breadCrumbs_home":"\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01","credits_unit":"/Credit","drop_image_to_upload":"\u0e27\u0e32\u0e07\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48","header_logo_hover_info":"\u0e25\u0e32\u0e01\u0e42\u0e25\u0e42\u0e01\u0e49\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e41\u0e16\u0e1a\u0e1a\u0e38\u0e4a\u0e04\u0e21\u0e32\u0e23\u0e4c\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e22\u0e37\u0e2d\u0e19 Fotor \u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22\u0e02\u0e36\u0e49\u0e19\u0e04\u0e23\u0e31\u0e49\u0e07\u0e16\u0e31\u0e14\u0e44\u0e1b!","join_discord_title":"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e0a\u0e21 Discord","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49","mobile_to_app_desc":"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e41\u0e25\u0e30\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e20\u0e32\u0e1e\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e17\u0e38\u0e01\u0e17\u0e35\u0e48","mobile_to_app_desc1":"\u0e41\u0e0a\u0e23\u0e4c\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e42\u0e0b\u0e40\u0e0a\u0e35\u0e22\u0e25\u0e21\u0e35\u0e40\u0e14\u0e35\u0e22\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e32\u0e1a\u0e23\u0e37\u0e48\u0e19\u0e41\u0e25\u0e30\u0e07\u0e48\u0e32\u0e22\u0e02\u0e36\u0e49\u0e19!","mobile_to_app_ok":"\u0e2a\u0e33\u0e23\u0e27\u0e08\u0e41\u0e2d\u0e1b","mobile_to_app_title":"\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d\u0e43\u0e19\u0e41\u0e2d\u0e1b","mobile_to_more_text":"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e41\u0e01\u0e49\u0e44\u0e02\u0e41\u0e25\u0e30\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a","more":"\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32","more_templates_button":"\u0e40\u0e23\u0e35\u0e22\u0e01\u0e14\u0e39\u0e41\u0e21\u0e48\u0e41\u0e1a\u0e1a\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21 {sizeName}","original_before":"\u0e01\u0e48\u0e2d\u0e19","pointsActivityPage_activity_list_mobile_title":"\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e07\u0e32\u0e19","pointsActivityPage_desc":"\u0e01\u0e32\u0e23\u0e17\u0e33\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e0a\u0e2d\u0e1a\u0e43\u0e19 Fotor \u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e48\u0e32\u0e22\u0e14\u0e32\u0e22\u0e41\u0e25\u0e30\u0e2a\u0e19\u0e38\u0e01\u0e2a\u0e19\u0e32\u0e19 \u0e40\u0e23\u0e34\u0e48\u0e21\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e08\u0e32\u0e01 Fotor \u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e40\u0e25\u0e22!","pointsActivityPage_download_app_text":"\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e41\u0e2d\u0e1b Fotor \u0e41\u0e25\u0e30\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a 5 \u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e1f\u0e23\u0e35\u0e1a\u0e19\u0e41\u0e2d\u0e1b \u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e17\u0e31\u0e49\u0e07\u0e1a\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e41\u0e25\u0e30\u0e41\u0e2d\u0e1e\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32!","pointsActivityPage_download_app_title":"\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e41\u0e2d\u0e1b","pointsActivityPage_my_credits_text":"\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19","pointsActivityPage_novip_text":"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21 Fotor Pro \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e2a\u0e2d\u0e07\u0e40\u0e17\u0e48\u0e32","pointsActivityPage_one_activity_type_mobile_text":"\u0e23\u0e31\u0e1a\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27","pointsActivityPage_receive_activity_button_mobile_text":"\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a","pointsActivityPage_receive_activity_button_text":"\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15","pointsActivityPage_receive_points_toast":"\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15 {numbers}!","pointsActivityPage_received_activity_button_mobile_text":"\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a","pointsActivityPage_received_activity_button_text":"\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19","pointsActivityPage_svip_text":"\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e40\u0e09\u0e1e\u0e32\u0e30 Pro+","pointsActivityPage_title":"\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e1a Fotor \u0e41\u0e25\u0e30\u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a Fotor \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22\u0e46 | Fotor","pointsActivityPage_upgrade_button_text":"\u0e2d\u0e31\u0e1e\u0e40\u0e01\u0e23\u0e14","pointsActivityPage_username_prefix_text":"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35!","pointsActivityPage_vip_text":"\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e02\u0e2d\u0e07 Pro","pointsActivityPage_welcome":"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a\u0e2a\u0e39\u0e48 Fotor Task Center!","pointsActivityPage_what_use_credits_mobile_text":"\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e20\u0e32\u0e1e AI \u0e14\u0e49\u0e27\u0e22 Fotor AI Image Generator <a href=\\"https://www.fotor.com/images/create\\">\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49</a>","pointsActivityPage_what_use_credits_text":"\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e20\u0e32\u0e1e AI \u0e17\u0e35\u0e48\u0e2b\u0e25\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e14\u0e49\u0e27\u0e22 <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a> \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1e\u0e37\u0e49\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e17\u0e35\u0e48\u0e19\u0e48\u0e32\u0e17\u0e36\u0e48\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e20\u0e32\u0e1e\u0e15\u0e31\u0e14\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e43\u0e19 <a href=\\"https://www.fotor.com/th/features/background-remover/upload\\">Fotor Background Remover</a> \u0e41\u0e25\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2d\u0e01\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2d\u0e07\u0e04\u0e4c\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e2b\u0e23\u0e37\u0e2d\u0e20\u0e32\u0e1e\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e2d\u0e07\u0e43\u0e19 <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a> \u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e20\u0e32\u0e1e AI \u0e2b\u0e19\u0e36\u0e48\u0e07\u0e20\u0e32\u0e1e\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49 1 \u0e2b\u0e23\u0e37\u0e2d 2 \u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e43\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19","pointsActivityPage_what_use_credits_title":"\u0e09\u0e31\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23\u0e01\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e44\u0e14\u0e49\u0e1a\u0e49\u0e32\u0e07?","pointsActivityPage_what_use_credits_to_link_mobile_text":"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49","pointsActivityPage_what_use_credits_to_link_text":"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49","preview_upload_limit_size":"\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e02\u0e19\u0e32\u0e14\u0e20\u0e32\u0e1e\u0e2b\u0e23\u0e37\u0e2d\u0e02\u0e19\u0e32\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e40\u0e01\u0e34\u0e19 {link}","preview_upload_more":"\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"High-resolution JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 Credits/Month","price_page_feature_desc19_list_desc2":"300 Credits/Month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Photo Effect","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Generated Content (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a\u0e02\u0e2d\u0e07 AIGC","result_after":"\u0e2b\u0e25\u0e31\u0e07","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"\u0e41\u0e0a\u0e23\u0e4c","unitMonth":"/month","upload_background":"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e02\u0e2d\u0e07\u0e20\u0e32\u0e1e\u0e17\u0e31\u0e19\u0e17\u0e35","upload_background_remover":"\u0e25\u0e1a\u0e1e\u0e37\u0e49\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e17\u0e31\u0e19\u0e17\u0e35","upload_fail":"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e34\u0e14\u0e20\u0e32\u0e1e\u0e44\u0e14\u0e49 \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07","upload_format_custom":"\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a {JPG, PNG, HEIC/HEIF, \u0e41\u0e25\u0e30 WebP}","upload_number_tip":"\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e01\u0e32\u0e23\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e 1 \u0e23\u0e39\u0e1b\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e01\u0e49\u0e44\u0e02 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e43\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32","upload_start":"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e40\u0e25\u0e22!","upload_sure":"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_app_entry_pop_title":"Fotor Pro\'yu \xfccretsiz denemek ister misin?","mobile_app_entry_pop_content":"Daha kolay d\xfczenleme ve profesyonel \xf6zelliklerin \xfccretsiz deneme s\xfcr\xfcm\xfc i\xe7in Fotor App\'i indirin! \ud83d\udc47"}'),
                vi_VN: JSON.parse('{"ai_textarea_placeholder":"Describe what you want see","aigc_data_reveal_num1":"6 tri\u1ec7u+","aigc_data_reveal_num2":"50 tri\u1ec7u+","aigc_data_reveal_title1":"Ng\u01b0\u1eddi d\xf9ng","aigc_data_reveal_title2":"H\xecnh \u1ea3nh \u0111\xe3 t\u1ea1o","aigc_data_reveal_title3":"\u0110\xe1nh gi\xe1","back_to_top":"Scroll to top","breadCrumbs_home":"Trang ch\u1ee7","credits_unit":"/Credit","drop_image_to_upload":"K\xe9o \u1ea3nh v\xe0o \u0111\xe2y","header_logo_hover_info":"K\xe9o bi\u1ec3u tr\u01b0ng v\xe0o thanh \u0111\xe1nh d\u1ea5u \u0111\u1ec3 truy c\u1eadp Fotor d\u1ec5 d\xe0ng h\u01a1n v\xe0o l\u1ea7n t\u1edbi!","join_discord_title":"Nh\u1ea5n v\xe0o \u0111\xe2y \u0111\u1ec3 truy c\u1eadp Discord","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"Kh\xf4ng ph\u1ea3i b\xe2y gi\u1edd","mobile_to_app_desc":"Ch\u1ec9nh s\u1eeda v\xe0 thi\u1ebft k\u1ebf \u1ea3nh c\u1ee7a b\u1ea1n tr\xean \u0111\u01b0\u1eddng \u0111i.","mobile_to_app_desc1":"Chia s\u1ebb l\xean m\u1ea1ng x\xe3 h\u1ed9i m\u01b0\u1ee3t m\xe0 v\xe0 d\u1ec5 d\xe0ng h\u01a1n!","mobile_to_app_ok":"Kh\xe1m ph\xe1 \u1ee9ng d\u1ee5ng","mobile_to_app_title":"Ti\u1ebfp t\u1ee5c trong \u1ee9ng d\u1ee5ng","mobile_to_more_text":"B\u1eaft \u0111\u1ea7u ch\u1ec9nh s\u1eeda v\xe0 thi\u1ebft k\u1ebf","more":"H\u01a1n","more_templates_button":"Duy\u1ec7t qua th\xeam {sizeName} m\u1eabu","original_before":"Tr\u01b0\u1edbc","pointsActivityPage_activity_list_mobile_title":"Gi\xe0nh \u0111\u01b0\u1ee3c s\u1ef1 tin c\u1eady","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"T\xedn d\u1ee5ng:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Trung t\xe2m t\xe1c v\u1ee5","pointsActivityPage_desc":"L\xe0m nh\u1eefng g\xec b\u1ea1n th\xedch tr\xean Fotor s\u1ebd gi\xfap b\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c nhi\u1ec1u ph\u1ea7n th\u01b0\u1edfng m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng v\xe0 th\xfa v\u1ecb. B\u1eaft \u0111\u1ea7u ki\u1ebfm \u0111\u01b0\u1ee3c v\u1edbi ph\u1ea7n th\u01b0\u1edfng c\u1ee7a Fotor ngay h\xf4m nay!","pointsActivityPage_download_app_text":"T\u1ea3i xu\u1ed1ng \u1ee8ng d\u1ee5ng Fotor v\xe0 \u0111\u0103ng k\xfd \u0111\u1ec3 ki\u1ebfm 5 t\xedn d\u1ee5ng mi\u1ec5n ph\xed tr\xean \u1ee8ng d\u1ee5ng. C\xe1c kho\u1ea3n t\xedn d\u1ee5ng ki\u1ebfm \u0111\u01b0\u1ee3c c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng c\u1ea3 tr\xean trang web v\xe0 \u1ee8ng d\u1ee5ng c\u1ee7a ch\xfang t\xf4i!","pointsActivityPage_download_app_title":"T\u1ea3i \u1ee9ng d\u1ee5ng","pointsActivityPage_my_credits_text":"T\xedn d\u1ee5ng c\u1ee7a t\xf4i","pointsActivityPage_novip_text":"Tham gia Fotor Pro \u0111\u1ec3 ki\u1ebfm g\u1ea5p \u0111\xf4i s\u1ed1 t\xedn ch\u1ec9","pointsActivityPage_one_activity_type_mobile_text":"Ki\u1ebfm ti\u1ec1n m\u1ed9t l\u1ea7n","pointsActivityPage_receive_activity_button_mobile_text":"Ki\u1ebfm","pointsActivityPage_receive_activity_button_text":"Gi\xe0nh \u0111\u01b0\u1ee3c s\u1ef1 tin c\u1eady","pointsActivityPage_receive_points_toast":"Nh\u1eadn \u0111\u01b0\u1ee3c {numbers} t\xedn d\u1ee5ng!","pointsActivityPage_received_activity_button_mobile_text":"\u0110a\u0303 nh\xe2\u0323n","pointsActivityPage_received_activity_button_text":"\u0110a\u0303 nh\xe2\u0323n","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"Ki\u1ebfm ti\u1ec1n h\xe0ng ng\xe0y","pointsActivityPage_svip_text":"Ph\u1ea7n th\u01b0\u1edfng t\xedn d\u1ee5ng \u0111\u1ed9c quy\u1ec1n Pro+","pointsActivityPage_title":"Tham gia v\xe0o Fotor v\xe0 ch\u01a1i v\u1edbi Fotor \u0111\u1ec3 d\u1ec5 d\xe0ng nh\u1eadn ph\u1ea7n th\u01b0\u1edfng | Fotor","pointsActivityPage_upgrade_button_text":"N\xe2ng c\u1ea5p","pointsActivityPage_username_prefix_text":"CH\xc0O!","pointsActivityPage_vip_text":"Ph\u1ea7n th\u01b0\u1edfng t\xedn d\u1ee5ng \u0111\u1ed9c quy\u1ec1n c\u1ee7a Pro","pointsActivityPage_welcome":"Ch\xe0o m\u1eebng \u0111\u1ebfn Trung t\xe2m Nhi\u1ec7m v\u1ee5 c\u1ee7a Fotor!","pointsActivityPage_what_use_credits_mobile_text":"B\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c kho\u1ea3n t\xedn d\u1ee5ng \u0111\u1ec3 t\u1ea1o h\xecnh \u1ea3nh AI b\u1eb1ng Tr\xecnh t\u1ea1o h\xecnh \u1ea3nh AI c\u1ee7a Fotor. <a href=\\"https://www.fotor.com/images/create\\">H\xe3y t\u1ea1o ngay</a>","pointsActivityPage_what_use_credits_text":"B\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng c\xe1c kho\u1ea3n t\xedn d\u1ee5ng \u0111\u1ec3 t\u1ea1o ra nhi\u1ec1u lo\u1ea1i h\xecnh \u1ea3nh AI b\u1eb1ng <a href=\\"https://www.fotor.com/images/create\\">Tr\xecnh t\u1ea1o h\xecnh \u1ea3nh AI c\u1ee7a Fotor</a>, t\u1ea1o h\xecnh n\u1ec1n tuy\u1ec7t \u0111\u1eb9p cho c\xe1c \u1ea3nh c\u1eaft c\u1ee7a b\u1ea1n trong <a href=\\"https://www.fotor.com/vi/features/background-remover/upload\\">C\xf4ng c\u1ee5 x\xf3a n\u1ec1n Fotor</a> v\xe0 t\u1ea1o ra c\xe1c thi\u1ebft k\u1ebf \u0111\u1ed9c \u0111\xe1o b\u1eb1ng c\xe1ch t\u1ea1o c\xe1c y\u1ebfu t\u1ed1 ho\u1eb7c h\xecnh \u1ea3nh c\u1ee7a ri\xeang b\u1ea1n trong <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. Vi\u1ec7c t\u1ea1o m\u1ed9t h\xecnh \u1ea3nh AI ti\xeau t\u1ed1n 1 ho\u1eb7c 2 t\xedn ch\u1ec9 trong c\xe1c c\xf4ng c\u1ee5 \u0111\xf3.","pointsActivityPage_what_use_credits_title":"T\xf4i c\xf3 th\u1ec3 l\xe0m g\xec v\u1edbi c\xe1c kho\u1ea3n t\xedn d\u1ee5ng?","pointsActivityPage_what_use_credits_to_link_mobile_text":"H\xe3y t\u1ea1o ngay","pointsActivityPage_what_use_credits_to_link_text":"T\u1ea1o ngay b\xe2y gi\u1edd","preview_upload_limit_size":"T\u1ea3i l\xean th\u1ea5t b\u1ea1i do k\xedch th\u01b0\u1edbc h\xecnh \u1ea3nh ho\u1eb7c k\xedch th\u01b0\u1edbc t\u1ec7 qu\xe1 l\u1edbn.{link}.","preview_upload_more":"T\xecm hi\u1ec3u th\xeam","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"High-resolution JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 Credits/Month","price_page_feature_desc19_list_desc2":"300 Credits/Month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Photo Effect","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Generated Content (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"B\u1ea5m \u0111\u1ec3 \u0111\u1ecdc l\u1eddi khuy\xean c\u1ee7a AIGC","result_after":"Sau","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"Chia s\u1ebb","unitMonth":"/month","upload_background":"Thay \u0111\u1ed5i n\u1ec1n h\xecnh \u1ea3nh ngay b\xe2y gi\u1edd","upload_background_remover":"X\xf3a n\u1ec1n ngay b\xe2y gi\u1edd","upload_fail":"Kh\xf4ng th\u1ec3 m\u1edf h\xecnh \u1ea3nh, vui l\xf2ng th\u1eed l\u1ea1i.","upload_format_custom":"H\u1ed7 tr\u1ee3 \u0111\u1ecbnh d\u1ea1ng {JPG, PNG, HEIC/HEIF, WebP}","upload_number_tip":"Trang n\xe0y ch\u1ec9 h\u1ed7 tr\u1ee3 th\xeam 1 \u1ea3nh \u0111\u1ec3 ch\u1ec9nh s\u1eeda, b\u1ea1n c\xf3 th\u1ec3 th\xeam nhi\u1ec1u \u1ea3nh h\u01a1n trong c\xf4ng c\u1ee5 ch\u1ec9nh s\u1eeda c\u1ee7a ch\xfang t\xf4i.","upload_start":"B\u1eaft \u0111\u1ea7u ngay b\xe2y gi\u1edd!","upload_sure":"X\xe1c nh\u1eadn","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"\u0110\xe3 sao ch\xe9p","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_app_entry_pop_title":"Wil je Fotor Pro gratis proberen?","mobile_app_entry_pop_content":"Download de Fotor-app voor eenvoudigere bewerking en een gratis proefperiode van professionele functies! \ud83d\udc47"}'),
                tr_TR: JSON.parse('{"ai_textarea_placeholder":"Describe what you want see","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Kullan\u0131c\u0131","aigc_data_reveal_title2":"Olu\u015fturulan G\xf6rsel","aigc_data_reveal_title3":"Derecelendirme","back_to_top":"Scroll to top","breadCrumbs_home":"Ana Sayfa","credits_unit":"/Credit","drop_image_to_upload":"Resmi Buraya B\u0131rak\u0131n","header_logo_hover_info":"Logoyu yer imi \xe7ubu\u011funa s\xfcr\xfckleyerek bir sonraki seferde Fotor\'u daha kolay ziyaret edin!","join_discord_title":"Discord\'u ziyaret etmek i\xe7in t\u0131klay\u0131n","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"\u015eimdi de\u011fil","mobile_to_app_desc":"Hareket halindeyken foto\u011fraflar\u0131n\u0131z\u0131 d\xfczenleyin ve tasarlay\u0131n.","mobile_to_app_desc1":"Sosyal medyada daha d\xfczenli ve kolay payla\u015f\u0131m!","mobile_to_app_ok":"Uygulamay\u0131 Ke\u015ffet","mobile_to_app_title":"Uygulamada devam et","mobile_to_more_text":"D\xfczenlemeye ba\u015fla","more":"Daha","more_templates_button":"Daha Fazla {sizeName} \u015eablonu G\xf6z At\u0131n","original_before":"\xd6nce","pointsActivityPage_activity_list_mobile_title":"Kredi Kazan\u0131n","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"Krediler:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"G\xf6rev Merkezi","pointsActivityPage_desc":"Fotor\u2019da sevdi\u011finiz \u015feyleri yapmak size kolay ve e\u011flenceli bir \u015fekilde daha fazla \xf6d\xfcl kazand\u0131r\u0131r. Bug\xfcn Fotor \xf6d\xfclleriyle kazanmaya ba\u015flay\u0131n!","pointsActivityPage_download_app_text":"Fotor Uygulamas\u0131n\u0131 indirin ve Uygulamada 5 \xfccretsiz kredi kazanmak i\xe7in kaydolun. Kazan\u0131lan krediler hem web sitemizde hem de Uygulamada kullan\u0131labilir!","pointsActivityPage_download_app_title":"Uygulama \u0130ndir","pointsActivityPage_my_credits_text":"Kredilerim","pointsActivityPage_novip_text":"\xc7ift kredi kazanmak i\xe7in Fotor Pro\'ya kat\u0131l\u0131n","pointsActivityPage_one_activity_type_mobile_text":"Bir Kez Kazan","pointsActivityPage_receive_activity_button_mobile_text":"Kazanmak","pointsActivityPage_receive_activity_button_text":"Kredi Kazan\u0131n","pointsActivityPage_receive_points_toast":"{numbers} kredi ald\u0131n\u0131z!","pointsActivityPage_received_activity_button_mobile_text":"Al\u0131nd\u0131","pointsActivityPage_received_activity_button_text":"Al\u0131nd\u0131","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"G\xfcnl\xfck Kazan","pointsActivityPage_svip_text":"Pro+ \xf6zel kredi \xf6d\xfclleri","pointsActivityPage_title":"Fotora kat\u0131l\u0131n ve kolayca \xf6d\xfcl almak i\xe7in Fotora oynay\u0131n | Fotor","pointsActivityPage_upgrade_button_text":"Y\xfckseltme","pointsActivityPage_username_prefix_text":"Merhaba!","pointsActivityPage_vip_text":"Pro \xf6zel kredi \xf6d\xfclleri","pointsActivityPage_welcome":"Fotor G\xf6rev Merkezi\'ne ho\u015f geldiniz!","pointsActivityPage_what_use_credits_mobile_text":"Fotor AI Image Generator ile AI g\xf6rselleri olu\u015fturmak i\xe7in kredileri kullanabilirsiniz. <a href=\\"https://www.fotor.com/images/create\\">\u015eimdi Olu\u015ftur</a>","pointsActivityPage_what_use_credits_text":"<a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a> ile \xe7ok \xe7e\u015fitli AI g\xf6rselleri olu\u015fturmak, <a href=\\"https://www.fotor.com/tr/features/background-remover/upload\\">Fotor Background Remover</a>\'da kesikleriniz i\xe7in \xe7arp\u0131c\u0131 arka planlar olu\u015fturmak ve <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>\'da kendi \xf6\u011felerinizi veya g\xf6rsellerinizi olu\u015fturarak benzersiz tasar\u0131mlar yapmak i\xe7in kredileri kullanabilirsiniz. Bir AI g\xf6r\xfcnt\xfcs\xfc olu\u015fturmak, bu ara\xe7larda 1 veya 2 kredi t\xfcketir.","pointsActivityPage_what_use_credits_title":"Kredilerle ne yapabilirim?","pointsActivityPage_what_use_credits_to_link_mobile_text":"\u015eimdi Olu\u015ftur","pointsActivityPage_what_use_credits_to_link_text":"\u015eimdi \xdcret","preview_upload_limit_size":"Resmin boyutu veya dosya boyutu fazla oldu\u011fu i\xe7in y\xfcklenemedi. {link}.","preview_upload_more":"Daha Fazla Bilgi Edinin","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"High-resolution JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 Credits/Month","price_page_feature_desc19_list_desc2":"300 Credits/Month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Photo Effect","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Generated Content (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"AIGC ipu\xe7lar\u0131n\u0131 okumak i\xe7in t\u0131klay\u0131n","result_after":"Sonra","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"Payla\u015f","unitMonth":"/month","upload_background":"\u015eimdi Foto\u011fraf Arka Plan\u0131n\u0131 De\u011fi\u015ftir","upload_background_remover":"\u015eimdi Arkaplan\u0131 Kald\u0131r","upload_fail":"Resim a\xe7\u0131lamad\u0131, l\xfctfen tekrar deneyin.","upload_format_custom":"{JPG, PNG, HEIC/HEIF, WebP} formatlar\u0131n\u0131 destekler","upload_number_tip":"Bu sayfa yaln\u0131zca d\xfczenleme i\xe7in 1 foto\u011fraf eklemeyi destekler, daha fazla foto\u011fraf eklemek i\xe7in d\xfczenleme arac\u0131m\u0131za gidebilirsiniz.","upload_start":"\u015eimdi Ba\u015fla!","upload_sure":"Onayla","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"Kopyaland\u0131","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_app_entry_pop_title":"Chcesz wypr\xf3bowa\u0107 Fotor Pro za darmo?","mobile_app_entry_pop_content":"Pobierz aplikacj\u0119 Fotor, aby \u0142atwiej edytowa\u0107 i przetestowa\u0107 funkcje profesjonalne za darmo! \ud83d\udc47"}'),
                pl_PL: JSON.parse('{"ai_textarea_placeholder":"Describe what you want see","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"U\u017cytkownik\xf3w","aigc_data_reveal_title2":"Wygenerowanych Obraz\xf3w","aigc_data_reveal_title3":"Ocena","back_to_top":"Scroll to top","breadCrumbs_home":"Strona G\u0142\xf3wna","credits_unit":"/Credit","drop_image_to_upload":"Upu\u015b\u0107 obraz tutaj","header_logo_hover_info":"Przeci\u0105gnij logo na pasek zak\u0142adek, aby \u0142atwiej odwiedza\u0107 Fotor nast\u0119pnym razem!","join_discord_title":"Kliknij, aby odwiedzi\u0107 Discord","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"Nie teraz","mobile_to_app_desc":"Edytuj i projektuj swoje zdj\u0119cia w podr\xf3\u017cy.","mobile_to_app_desc1":"U\u0142atwione i p\u0142ynniejsze udost\u0119pnianie na mediach spo\u0142eczno\u015bciowych!","mobile_to_app_ok":"Odkryj Aplikacj\u0119","mobile_to_app_title":"Kontynuuj w aplikacji","mobile_to_more_text":"Zacznij edytowa\u0107 i projektowa\u0107","more":"Wi\u0119cej","more_templates_button":"Przegl\u0105daj Wi\u0119cej Szablon\xf3w {sizeName}","original_before":"Przed","pointsActivityPage_activity_list_mobile_title":"Zdobywanie kredyt\xf3w","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"Kredyty:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Centrum zada\u0144","pointsActivityPage_desc":"Robi\u0105c to, co lubisz w Fotor, mo\u017cesz \u0142atwo i zabawnie zdobywa\u0107 wi\u0119cej nagr\xf3d. Zacznij zarabia\u0107 z nagrodami od Fotor ju\u017c dzi\u015b!","pointsActivityPage_download_app_text":"Pobierz aplikacj\u0119 Fotor i zarejestruj si\u0119, aby zdoby\u0107 5 darmowych kredyt\xf3w w aplikacji. Zdobyte kredyty mo\u017cna wykorzysta\u0107 zar\xf3wno na naszej stronie internetowej, jak i w aplikacji!","pointsActivityPage_download_app_title":"Pobierz aplikacj\u0119","pointsActivityPage_my_credits_text":"Moje kredyty","pointsActivityPage_novip_text":"Do\u0142\u0105cz do Fotor Pro, aby zarabia\u0107 podw\xf3jne kredyty","pointsActivityPage_one_activity_type_mobile_text":"Zarobione raz","pointsActivityPage_receive_activity_button_mobile_text":"Kredyty","pointsActivityPage_receive_activity_button_text":"Kredyty","pointsActivityPage_receive_points_toast":"Otrzymano {numbers} kredyt(\xf3w)!","pointsActivityPage_received_activity_button_mobile_text":"Otrzymane","pointsActivityPage_received_activity_button_text":"Otrzymane","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"Zarabiaj codziennie","pointsActivityPage_svip_text":"Nagrody w postaci ekskluzywnych kredyt\xf3w Pro","pointsActivityPage_title":"Do\u0142\u0105cz do Fotora i graj w Fotora, aby \u0142atwo zdobywa\u0107 nagrody | Fotor","pointsActivityPage_upgrade_button_text":"Aktualizacja","pointsActivityPage_username_prefix_text":"Cze\u015b\u0107!","pointsActivityPage_vip_text":"Ekskluzywne nagrody za kredyty Pro","pointsActivityPage_welcome":"Witaj w Centrum Zada\u0144 Fotor!","pointsActivityPage_what_use_credits_mobile_text":"Kredyty mo\u017cna wykorzysta\u0107 do generowania obraz\xf3w AI w Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">Utw\xf3rz teraz</a>","pointsActivityPage_what_use_credits_text":"Kredyty mo\u017cna wykorzysta\u0107 do generowania szerokiej gamy obraz\xf3w AI za pomoc\u0105 <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>, tworzenia wspania\u0142ych te\u0142 do wycinanek w <a href=\\"https://www.fotor.com/pl/features/background-remover/upload\\">Fotor Background Remover</a> i tworzenia unikalnych projekt\xf3w poprzez generowanie w\u0142asnych element\xf3w lub obraz\xf3w w <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. Wygenerowanie jednego obrazu AI zu\u017cywa 1 lub 2 kredyty w tych narz\u0119dziach.","pointsActivityPage_what_use_credits_title":"Co mog\u0119 zrobi\u0107 z kredytami?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Utw\xf3rz teraz","pointsActivityPage_what_use_credits_to_link_text":"Wygeneruj teraz","preview_upload_limit_size":"Nie uda\u0142o si\u0119 przes\u0142a\u0107 obrazu z powodu zbyt du\u017cej wielko\u015bci lub rozmiaru pliku.{link}.","preview_upload_more":"Dowiedz si\u0119 wi\u0119cej","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"High-resolution JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 Credits/Month","price_page_feature_desc19_list_desc2":"300 Credits/Month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Photo Effect","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Generated Content (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"Kliknij, aby przeczyta\u0107 wskaz\xf3wki AIGC","result_after":"Po","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"Udost\u0119pnij","unitMonth":"/month","upload_background":"Zmie\u0144 Teraz T\u0142o Zdj\u0119cia","upload_background_remover":"Usu\u0144 Teraz T\u0142o","upload_fail":"Nie uda\u0142o si\u0119 otworzy\u0107 obrazu, spr\xf3buj ponownie.","upload_format_custom":"Obs\u0142ugiwane formaty: {JPG, PNG, HEIC/HEIF, WebP}","upload_number_tip":"Ta strona obs\u0142uguje tylko dodawanie 1 zdj\u0119cia do edycji, w narz\u0119dziu do edycji mo\u017cesz doda\u0107 wi\u0119cej zdj\u0119\u0107.","upload_start":"Zacznij Teraz!","upload_sure":"Potwierd\u017a","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"Skopiowano","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_app_entry_pop_title":"Mu\u1ed1n th\u1eed Fotor Pro mi\u1ec5n ph\xed kh\xf4ng?","mobile_app_entry_pop_content":"T\u1ea3i \u1ee9ng d\u1ee5ng Fotor \u0111\u1ec3 ch\u1ec9nh s\u1eeda d\u1ec5 d\xe0ng h\u01a1n v\xe0 th\u1eed nghi\u1ec7m mi\u1ec5n ph\xed c\xe1c t\xednh n\u0103ng chuy\xean nghi\u1ec7p! \ud83d\udc47"}'),
                nl_NL: JSON.parse('{"ai_textarea_placeholder":"Describe what you want see","aigc_data_reveal_num1":"6M+","aigc_data_reveal_num2":"50M+","aigc_data_reveal_title1":"Gebruikers","aigc_data_reveal_title2":"Afbeeldingen gegenereerd","aigc_data_reveal_title3":"Beoordeling","back_to_top":"Scroll to top","breadCrumbs_home":"Home","credits_unit":"/Credit","drop_image_to_upload":"Drop afbeelding hier","header_logo_hover_info":"Sleep het logo naar de bladwijzerbalk om Fotor gemakkelijker te bezoeken bij uw volgende bezoek!","join_discord_title":"Klik om Discord te bezoeken","mobile_open_app_fixed_popup_desc":"enjoy a better editing experience tailored for your mobile device!","mobile_to_app_cancel":"Niet nu","mobile_to_app_desc":"Bewerk en ontwerp uw foto\'s onderweg.","mobile_to_app_desc1":"Gemakkelijker en soepeler delen op sociale media!","mobile_to_app_ok":"Ontdek de App","mobile_to_app_title":"Doorgaan in de app","mobile_to_more_text":"Begin met bewerken en ontwerpen","more":"Meer","more_templates_button":"Blader door meer {sizeName} sjablonen","original_before":"Voor","pointsActivityPage_activity_list_mobile_title":"Credits verdienen","pointsActivityPage_copied":"Copied","pointsActivityPage_copy":"Copy","pointsActivityPage_credits":"Credits:","pointsActivityPage_crumbs_label1":"Fotor","pointsActivityPage_crumbs_label2":"Taakcentrum","pointsActivityPage_desc":"Door te doen wat je leuk vindt in Fotor kun je gemakkelijk en leuk meer beloningen krijgen. Begin vandaag nog met verdienen met de beloningen van Fotor!","pointsActivityPage_download_app_text":"Download de Fotor App en meld je aan om 5 gratis credits te verdienen op de App. De verdiende credits kunnen zowel op onze website als op de App gebruikt worden!","pointsActivityPage_download_app_title":"App downloaden","pointsActivityPage_my_credits_text":"Mijn credits","pointsActivityPage_novip_text":"Word lid van Fotor Pro om dubbele credits te verdienen","pointsActivityPage_one_activity_type_mobile_text":"Eenmalig verdienen","pointsActivityPage_receive_activity_button_mobile_text":"verdienen","pointsActivityPage_receive_activity_button_text":"Credits verdienen","pointsActivityPage_receive_points_toast":"{numbers} krediet(en) ontvangen!","pointsActivityPage_received_activity_button_mobile_text":"Ontvangen","pointsActivityPage_received_activity_button_text":"Ontvangen","pointsActivityPage_share_link":"Share link","pointsActivityPage_some_activity_type_mobile_text":"Dagelijks verdienen","pointsActivityPage_svip_text":"Pro+ exclusieve credits beloningen","pointsActivityPage_title":"Doe mee met Fotor en speel met Fotor om gemakkelijk beloningen te krijgen | Fotor","pointsActivityPage_upgrade_button_text":"Upgrade","pointsActivityPage_username_prefix_text":"Hallo!","pointsActivityPage_vip_text":"Pro exclusieve kredietbeloningen","pointsActivityPage_welcome":"Welkom bij het Fotor Taakcentrum!","pointsActivityPage_what_use_credits_mobile_text":"Je kunt credits gebruiken om AI-afbeeldingen te genereren met Fotor AI Image Generator. <a href=\\"https://www.fotor.com/images/create\\">Nu cre\xebren</a>","pointsActivityPage_what_use_credits_text":"Je kunt credits gebruiken om een breed scala aan AI-afbeeldingen te genereren met <a href=\\"https://www.fotor.com/images/create\\">Fotor AI Image Generator</a>, prachtige achtergronden te maken voor je knipsels in <a href=\\"https://www.fotor.com/nl/features/background-remover/upload\\">Fotor Background Remover</a> en unieke ontwerpen te maken door je eigen elementen of afbeeldingen te genereren in <a href=\\"https://www.fotor.com/design/project/create?category=b31749015e7f45f6928871196b448c47&menu=sticker\\">Fotor Design</a>. Het genereren van \xe9\xe9n AI-afbeelding kost in die tools 1 of 2 credits.","pointsActivityPage_what_use_credits_title":"Wat kan ik doen met de credits?","pointsActivityPage_what_use_credits_to_link_mobile_text":"Nu cre\xebren","pointsActivityPage_what_use_credits_to_link_text":"Nu genereren","preview_upload_limit_size":"Het uploaden is mislukt vanwege de te grote bestandsgrootte of afmetingen.{link}.","preview_upload_more":"Meer informatie","price_monthly_switch":"Monthly","price_page_activity_btn_discount":"Upgrade with {discount_en}% OFF","price_page_billed_annually":"Billed Annually","price_page_buy_now":"Buy Now","price_page_credits_once_info":"Credits available for use anytime within 2 years of purchase","price_page_credits_plans":"Credits Plans","price_page_credits_subscribe_info":"Unused credits will roll over as long as you\'re subscribed, up to 5 months of accumulation","price_page_feature_desc1":"Including the basic adjust and beauty features, as well as partial effects, filters and frames.","price_page_feature_desc10":"Turn photos into sketches, oil paintings, watercolors, cartoons, and other types of paintings.","price_page_feature_desc10_list_desc1":"Non-HD download with watermark","price_page_feature_desc10_list_desc2":"HD download without watermark","price_page_feature_desc11":"Turning black-and-white photos into colorful ones.","price_page_feature_desc12":"Ready-to-use templates for posters, cards, social media posts and other graphic design occassions.","price_page_feature_desc12_list_desc1":"50,000+","price_page_feature_desc12_list_desc2":"100,000+","price_page_feature_desc13":"Copyrighted fonts in various styles.","price_page_feature_desc13_list_desc1":"473","price_page_feature_desc13_list_desc2":"523 & upload fonts","price_page_feature_desc13_list_desc3":"523 & upload fonts","price_page_feature_desc14":"Including backgrounds, photos, illustrations, icons, patterns and other elements and stickers.","price_page_feature_desc14_list_desc1":"30,000+","price_page_feature_desc14_list_desc2":"60,000+","price_page_feature_desc15":"Cloud storage capacity for your projects and uploads.","price_page_feature_desc15_list_desc1":"500M","price_page_feature_desc15_list_desc2":"2G","price_page_feature_desc15_list_desc3":"10G","price_page_feature_desc16":"File formats in which images can be downloaded.","price_page_feature_desc16_list_desc1":"Normal JPG/ PNG/ PDF","price_page_feature_desc16_list_desc2":"High-resolution JPG/ PNG/ PDF & transparent PNG","price_page_feature_desc17":"Manage brand designs with unified fonts, logos and colors. Being able to upload your own fonts.","price_page_feature_desc18":"Enjoy a larger canvas with no ad distractions.","price_page_feature_desc19":"Get free credits for AIGC-related features.","price_page_feature_desc19_list_desc1":"100 Credits/Month","price_page_feature_desc19_list_desc2":"300 Credits/Month","price_page_feature_desc2":"Inlcluding partial creative resources and editing features in the design tool.","price_page_feature_desc3":"Including partial collage templates and editing features in the collage tool.","price_page_feature_desc4":"Including all the advanced editing features like HSL, denoise, invert colors, smoothing, reshape, as well as all the premium filters and frames.","price_page_feature_desc5":"Batch edit multiple images, such as crop, resize, add text, change file format.","price_page_feature_desc6":"Smartly unblur picture by increasing photo resolution, sharpening images details, and enhancing image quality.","price_page_feature_desc7":"Instantly remove image backgrounds with one click. Also, being able to change the background with any color and image.","price_page_feature_desc8":"Remove unwanted objects, text, and watermarks from photo, and AI will smartly fill in the remaining picture content.","price_page_feature_desc9":"AI generate images from text prompts or images.","price_page_feature_title1":"Basic Editing Features","price_page_feature_title10":"AI Photo Effect","price_page_feature_title11":"AI Colorize","price_page_feature_title12":"Templates","price_page_feature_title13":"Fonts","price_page_feature_title14":"Creative Resources","price_page_feature_title15":"Cloud Storage","price_page_feature_title16":"File Format","price_page_feature_title17":"Brand Kits","price_page_feature_title18":"Ad-free","price_page_feature_title19":"Extra Credits","price_page_feature_title2":"Basic Design Features","price_page_feature_title3":"Basic Collage Layouts & Features","price_page_feature_title4":"Advanced Editing Features","price_page_feature_title5":"Batch Editing","price_page_feature_title6":"AI Photo Enhancer","price_page_feature_title7":"AI Background Remover","price_page_feature_title8":"AI Object Remover","price_page_feature_title9":"AI Generated Content (AIGC)","price_page_free_info":"Free","price_page_free_trial":"Free Trial","price_page_most_popular":"Most Popular","price_page_one_time_payment":"One-time Payment","price_page_platform_title":"Available Across Platforms","price_page_premium_plans":"Premium Plans","price_page_subscribe_now":"Subscribe Now","price_page_subscription_plan":"Subscription Plan","price_page_try_now":"Try Now","price_yearly_switch":"Yearly","read_aigc_tips_title":"Klik om AIGC-tips te lezen","result_after":"Na","resume_uns_active_button":"Ok, got it","resume_uns_active_desc":"The current offer has been claimed and you can already enjoy the discounted subscription price.","resume_uns_active_title":"You\'ve Claimed the Offer!","resume_uns_button":"Restore Subscription with 30% Off","resume_uns_card_number":"Card Number:","resume_uns_click_download_app_title":"Download Desk App","resume_uns_desc":"After restoring your subscription, we will not charge you immediately, but on the subscription expiration date. From then on, you will get a 30% discount on your subscription fee.","resume_uns_discounted_subscription_fee":"Discounted Subscription Fee:","resume_uns_download_app_title":"Enjoy Fotor premium benefits across devices!","resume_uns_download_button":"Download","resume_uns_email":"Email:","resume_uns_expiration_date":"Expiration Date:","resume_uns_expired_button":"Re-subscribe at 20% Off","resume_uns_expired_desc":"Your subscription has expired and the 30% discount offer is only valid before your expiration date. But you can still subscribe to any premium plan for 20% Off!","resume_uns_expired_title":"Offer expired... But there\'s another one!","resume_uns_mobile_download_app_title":"Get Fotor App Now","resume_uns_month":"Month","resume_uns_nickname":"Nickname:","resume_uns_payment_method":"Payment Method:","resume_uns_payment_method_value":"Credit or debit card","resume_uns_scan_download_app_title":"Scan to download Fotor App","resume_uns_status":"Subscription Status:","resume_uns_status_cancel":"Canceled","resume_uns_subscription_fee":"Subscription Fee:","resume_uns_subscription_plan":"Subscription Plan:","resume_uns_success_button":"Ok, got it","resume_uns_success_desc":"Now you\'ve successfully restored the subscription.","resume_uns_success_title":"Great!","resume_uns_top_title":"Restore Subscription","resume_uns_year":"Year","share_button_text":"Delen","unitMonth":"/month","upload_background":"Nu Fotoachtergrond Wijzigen","upload_background_remover":"Nu Achtergrond Verwijderen","upload_fail":"Het openen van de afbeelding is mislukt, probeer het opnieuw.","upload_format_custom":"Ondersteunde formaten: {JPG, PNG, HEIC/HEIF, WebP}","upload_number_tip":"Deze pagina ondersteunt slechts het toevoegen van 1 foto voor bewerking; u kunt meer foto\'s toevoegen in onze bewerkingstool.","upload_start":"Nu Beginnen!","upload_sure":"Bevestigen","year_credit_discount_tip":"Save 70%","year_discount_tip":"Save 62%","copy_success":"Gekopieerd","price_page_feature_title20":"AI Face Unblur","price_page_feature_desc20":"Unblur and sharpen portrait photo.","price_page_feature_title21":"AI Skin Retouch","price_page_feature_desc21":"Magically and flawlessly transform your portraits and photos. Retouch photo online and reveal the radiant \u201cyou\u201d with just one click.","price_page_feature_title22":"AI Expand","price_page_feature_desc22":"Expand the dimensions of your photos with a single click. automatically extend the subject content, backgrounds, and textures of your photos.","price_page_feature_title23":"AI Replace","price_page_feature_desc23":"Change and replace objects in your photos.","price_page_feature_title24":"Old Photo Restorer","price_page_feature_desc24":"Auto-repair damages, remove blurriness, and restore faded colors & details to turn your old photo to new photo.","price_page_feature_title25":"AI Avatar & AI Headshot","price_page_feature_desc25":"Easily and quickly create professional, creative and realistic HD AI headshots and profile pictures.","price_page_feature_desc25_list_desc1":"50% off","price_page_feature_title26":"AI Face Swap","price_page_feature_desc26":"Upload your photos to swap the face. Achieve a perfectly realistic and seamless AI-generated face swap for any kind of amusement.","price_page_feature_title27":"AI Video Enhancer","price_page_feature_desc27":"Instantly improve video quality, including settings for sharpness, brightness and so on to make videos clearer.","price_page_feature_desc27_list_desc1":"3s\uff0cpreview video","price_page_feature_desc27_list_desc2":"Full time\uff0cHD video","price_page_feature_title28":"AI Video Background Remover","price_page_feature_desc28":"Instantly remove background from portrait video with a single tap. ","price_page_feature_desc28_list_desc1":"3s\uff0cpreview video","price_page_feature_desc28_list_desc2":"Full time\uff0cHD video","price_page_feature_title29":"AI Batch Editing","price_page_feature_desc29":"AI batch editing such as batch background remover, batch background changing and so on.","price_page_feature_desc29_list_desc1":"3 images at once","price_page_feature_desc29_list_desc2":"50 images at once","price_page_faq_credit_answer1":"Credits are a form of virtual tokens that you can purchase with real money and use to pay for premium features and services on Fotor\u2019s website and applications. Currently, credits can be used for AI image generating, AI background generating, etc.","price_page_faq_credit_answer2":"Credits for subscriptions that are not used up in the current month can be rolled over to the next month as long as you maintain your subscription, and can be accumulated for up to five months. Once you cancel the subscription, your credits will expire on the day the subscription expires.\\nCredits for one-time payment are valid for two years after purchase.","price_page_faq_credit_answer3":"If you buy a credit subscription plan and run out of the credits, you can either upgrade to a higher plan with more credits issued each month, or you can buy one-time credits to refill.","price_page_faq_credit_answer4":"Yes. Your credits can work on all platforms, including Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows).","price_page_faq_credit_answer5":"Yes. You can cancle your suscription anytime.","price_page_faq_credit_answer6":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_credit_answer7":"Yes, you can. Since the number of credits in the Premium Plans is limited, if you need more credits, you can subscribe to a Credit Plan or buy one-time Credits. The Premium Plan and Credits Plan can co-exist and they do not conflict.","price_page_faq_credit_question1":"What are credits and what can I do with credits?","price_page_faq_credit_question2":"How long are the credits valid for and can unused credits be accumulated?","price_page_faq_credit_question3":"What if I run out of credits?","price_page_faq_credit_question4":"Does my credits work on mobile?","price_page_faq_credit_question5":"Can I cancel my credits subscription?","price_page_faq_credit_question6":"What payment methods can I use?","price_page_faq_credit_question7":"If I have subscribed the Premium Plans, can I subscribe the Credits Plans?","price_page_faq_member_answer1":"Yes, there are many basic features that are free to use. However, for a more advanced experience, we recommend trying our premium plans.","price_page_faq_member_answer2":"The Fotor Pro+ plan includes all of the advanced features found in Fotor Pro. In addition, the Pro+ plan offers larger cloud space and 1,000,000 HD photos for personal and commercial use. The Brand Kits are also exclusive to the Pro+ plan for those who need to manage brand fonts, logos and colors to design brand materials.","price_page_faq_member_answer3":"Yes, Fotor Pro and Pro+ subscriptions are available on all platforms. This means that with a Pro or Pro+ account, you can enjoy all the advanced features of the Fotor website, mobile apps (iOS/Android) and desktop softwares (Mac/Windows). Your designs and collage projects can also be synced across devices.","price_page_faq_member_answer4":"To subscribe Fotor premium plans, you can pay through Paypal or credit card. We accept credit or debit card from following: Visa, Mastercard, American Express, JCB, and More.","price_page_faq_member_answer5":"Yes, we send invoices via email for each deduction. If you do not receive an email or are unable to download via email, you can sign in to the Fotor website, click on your profile avatar and find Payment History \u2192 Invoices. Simply click on the invoice you need and then download it.","price_page_faq_member_answer6":"Yes, you can cancel the suscription anytime. Sign in to the Fotor website, click on your profile avatar, find the Subscription tap, click on Cancel Subscription, and follow the steps to unsubscribe.","price_page_faq_member_answer7":"Yes, you can upgrade from monthly plan to yearly plan, or from Pro to Pro+ at anytime. To do so, sign in to the Fotor website, click on your profile avatar, find the Subscription tap and you will see the change plan option there.","price_page_faq_member_answer8":"Yes, the subscription plan will renew automatically. If you don\u2019t want to be billed, you can cancel your subscription until the expiration date; otherwise, you will be automatically charged on your subscription cycle date.","price_page_faq_member_answer9":"You can use credits for AI image generating in our AI Image Generator, AI Background Generator, etc. As the AIGC-related features come with a large server cost, they cannot be included in the subscription plan for unlimited use. If you run out of the credits, you can purchase separate credits plans for supplementation.","price_page_faq_member_question1":"Can I use Fotor for free\uff1f","price_page_faq_member_question2":"What\u2019s the difference between the Fotor Pro and Fotor Pro+?","price_page_faq_member_question3":"Does my Fotor subscription work on mobile?","price_page_faq_member_question4":"What payment methods can I use?","price_page_faq_member_question5":"Can I receive an invoice?","price_page_faq_member_question6":"Can I cancel my subscription?","price_page_faq_member_question7":"Can I upgrade my current plan\uff1f","price_page_faq_member_question8":"Will my subscription plan renew automatically?","price_page_faq_member_question9":"What can I do with the extra credits included in the premium plans?","mobile_app_entry_pop_title":"\u0e2d\u0e22\u0e32\u0e01\u0e25\u0e2d\u0e07 Fotor Pro \u0e1f\u0e23\u0e35\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48? ","mobile_app_entry_pop_content":"\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e41\u0e2d\u0e1b Fotor \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02\u0e17\u0e35\u0e48\u0e07\u0e48\u0e32\u0e22\u0e02\u0e36\u0e49\u0e19\u0e41\u0e25\u0e30\u0e17\u0e14\u0e25\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e1f\u0e23\u0e35\u0e1a\u0e19\u0e04\u0e38\u0e13\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e40\u0e09\u0e1e\u0e32\u0e30! \ud83d\udc47"}')
            }
        },
        91632: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return g
                }
            });
            var r = a(13218),
                i = a.n(r),
                o = a(78479),
                n = JSON.parse('{"bottomLine":"Keine Daten mehr","call_back_link":"Please try something else.","copy_success":"Kopiert","design":"-","designGallery":"vorlage","edit":"-","header_logo_hover_info":"Ziehen Sie das Logo in die Lesezeichenleiste,\\num beim n\xe4chsten Mal leichter auf Fodor zugreifen zu k\xf6nnen!","loading":"Wird geladen\u2026","no_find_by":"Sorry, we can\'t find what you\'re looking for.","recommend_category":"Empfohlene Gr\xf6\xdfe","recommend_template":"Empfohlene Vorlagen","share_button_text":"Teilen","signin":"-","signup":"-","template":"\u6a21\u677f","template_black_entry_title":"\u521b\u5efa\u7a7a\u767d{templateSize}","template_category_title":"Nach Kategorie durchsuchen","template_claer_filter":"Filter l\xf6schen","template_class":"Vorlagenkategorien","template_designer_name":"-","template_favor":"Sammeln","template_favor_fail":"Fehler beim Sammeln der Vorlage","template_favor_success":"Vorlage gesammelt","template_filter":"Filter","template_fold_close":"Falten","template_fold_open":"Entfalten","template_more":"Alle anzeigen","template_no_vip":"Standardvorlagen","template_page_number_title":"Seite {number}","template_preview":"Vorschau","template_result_all_size":"Alles","template_result_home":"Startseite","template_result_next_page":"N\xe4chste","template_result_pre_page":"Vorherige","template_result_size":"Gr\xf6\xdfe","template_search_cancel":"Stornieren","template_search_placeholder":"Nach Vorlage suchen","template_size":"Vorlagenabmessungen","template_title":"vorlage","template_total_show":"{number} Vorlagen","template_type":"Vorlagentypen","template_unfavor_fail":"Fehler beim Abbrechen der Vorlagensammlung","template_unfavor_success":"Das Sammeln der Vorlage wurde abgebrochen","template_use":"Verwenden Sie diese Vorlage","template_vip":"Premium-Vorlagen","template_words_history":"Letzte Suchanfragen","template_words_title":"Beliebte Suchanfragen","top_header_right_drop_cloud":"Meine bearbeiteten Fotos","top_header_right_drop_collage":"Meine Collagen","top_header_right_drop_design":"Meine Entw\xfcrfe","try_replace":"-","zendesk_bind_email_desc":"Bitte geben Sie eine E-Mail-Adresse an, damit wir Sie kontaktieren und Ihnen helfen k\xf6nnen.","zendesk_bind_email_title":"Verkn\xfcpfen Sie eine E-Mail-Adresse mit Ihrem Fotor-Konto","zendesk_bind_now_btn":"jetzt binden","zendesk_fail_to_bind":"Anbindung gescheitert","zendesk_got_it":"Verstanden","zendesk_next_btn":"n\xe4chste Bindung","zendesk_sign_in_title":"Melden Sie sich an, damit wir Sie besser bedienen k\xf6nnen"}'),
                s = JSON.parse('{"bottomLine":"No More Data","call_back_link":"Please try something else.","copy_success":"Copied","design":"-","designGallery":"Templates","edit":"-","header_logo_hover_info":"Drag the logo into the bookmark bar to visit Fotor easier next time!","loading":"Loading...","no_find_by":"Sorry, we can\'t find what you\'re looking for.","recommend_category":"Recommended Size","recommend_template":"Recommended Templates","share_button_text":"Share","signin":"-","signup":"-","template":"template","template_black_entry_title":"Create a blank {templateSize}","template_category_title":"Browse by category","template_claer_filter":"Clear Filters","template_class":"Template categories","template_designer_name":"-","template_favor":"My Favorites","template_favor_fail":"Failed to add to \\"My Favorites\\"","template_favor_success":"Added to \\"My Favorites\\"","template_filter":"Filter","template_fold_close":"Fold","template_fold_open":"Unfold","template_more":"View all","template_no_vip":"Free templates","template_page_number_title":"Page {number}","template_preview":"Preview","template_result_all_size":"All","template_result_home":"Home","template_result_next_page":"Next","template_result_pre_page":"Previous","template_result_size":"Size","template_search_cancel":"Cancel","template_search_placeholder":"Search Templates","template_size":"Template dimensions","template_title":"Templates","template_total_show":"{number} templates","template_type":"Template types","template_unfavor_fail":"Failed to remove from \\"My Favorites\\"","template_unfavor_success":"Removed from \\"My Favorites\\"","template_use":"Use this Template","template_vip":"Premium templates","template_words_history":"Recent Searches","template_words_title":"Popular Searches","top_header_right_drop_cloud":"My Edited Photos","top_header_right_drop_collage":"My Collages","top_header_right_drop_design":"My Designs","try_replace":"-","zendesk_bind_email_desc":"Please add an email address so we can reach you to provide help.","zendesk_bind_email_title":"Link an email address to your Fotor account","zendesk_bind_now_btn":"Bind an Email Now","zendesk_fail_to_bind":"Failed to Bind","zendesk_got_it":"Got it","zendesk_next_btn":"Next time","zendesk_sign_in_title":"Sign in so we can serve you better"}'),
                _ = JSON.parse('{"bottomLine":"No hay m\xe1s datos","call_back_link":"Please try something else.","copy_success":"Copiado","design":"-","designGallery":"Plantillas","edit":"-","header_logo_hover_info":"\xa1Arrastre el logo dentro de la barra de favorito\\npara visitar Fotor m\xe1s facil la pr\xf3xima vez!","loading":"Cargando\u2026","no_find_by":"Sorry, we can\'t find what you\'re looking for.","recommend_category":"Tama\xf1o recomendado","recommend_template":"Plantillas recomendadas","share_button_text":"Compartir","signin":"-","signup":"-","template":"\u6a21\u677f","template_black_entry_title":"\u521b\u5efa\u7a7a\u767d{templateSize}","template_category_title":"Buscar por categor\xeda","template_claer_filter":"Limpiar filtro","template_class":"Categor\xedas de plantillas","template_designer_name":"-","template_favor":"Recoger","template_favor_fail":"Fallo en la recogida de la plantilla","template_favor_success":"Plantilla recogida","template_filter":"Filtro","template_fold_close":"Plegar","template_fold_open":"Desplegar","template_more":"Ver todo","template_no_vip":"Plantillas est\xe1ndar","template_page_number_title":"P\xe1gina {number}","template_preview":"Vista previa","template_result_all_size":"Todo","template_result_home":"Inicio","template_result_next_page":"Siguiente","template_result_pre_page":"Anterior","template_result_size":"Tama\xf1o","template_search_cancel":"Cancelar","template_search_placeholder":"Plantillas de b\xfasqueda","template_size":"Dimensiones de plantillas","template_title":"Plantillas","template_total_show":"{number} plantillas","template_type":"Tipos de plantillas","template_unfavor_fail":"Fallo en la cancelaci\xf3n de la recogida de la plantilla","template_unfavor_success":"Cancelar la recogida de la plantilla","template_use":"Usa esta plantilla","template_vip":"Plantillas premium","template_words_history":"B\xfasquedas recientes","template_words_title":"B\xfasquedas populares","top_header_right_drop_cloud":"Mis fotos editadas","top_header_right_drop_collage":"Mis collages","top_header_right_drop_design":"Mis dise\xf1os","try_replace":"-","zendesk_bind_email_desc":"Agregue una direcci\xf3n de correo electr\xf3nico para que podamos contactarlo y ayudarlo.","zendesk_bind_email_title":"Vincula una direcci\xf3n de correo electr\xf3nico a tu cuenta de Fotor","zendesk_bind_now_btn":"enlazar ahora","zendesk_fail_to_bind":"No se pudo enlazar.","zendesk_got_it":"Entendido","zendesk_next_btn":"siguiente enlace","zendesk_sign_in_title":"Por favor inicie sesi\xf3n para que podamos servirle mejor"}'),
                c = JSON.parse('{"bottomLine":"Plus de donn\xe9es","call_back_link":"Please try something else.","copy_success":"Copi\xe9","design":"-","designGallery":"Mod\xe8le","edit":"-","header_logo_hover_info":"Glissez le logo dans la barre des signets\\npour visiter Fotor plus facilement la prochaine fois !","loading":"Chargement\u2026","no_find_by":"Sorry, we can\'t find what you\'re looking for.","recommend_category":"Taille recommand\xe9e","recommend_template":"Mod\xe8les recommand\xe9s","share_button_text":"Partager","signin":"-","signup":"-","template":"\u6a21\u677f","template_black_entry_title":"\u521b\u5efa\u7a7a\u767d{templateSize}","template_category_title":"Parcourir par cat\xe9gorie","template_claer_filter":"Effacer le filtre","template_class":"Cat\xe9gories de mod\xe8les","template_designer_name":"-","template_favor":"Collecter","template_favor_fail":"\xc9chec de la collecte du mod\xe8le","template_favor_success":"Template collected","template_filter":"Filtrer","template_fold_close":"Plier","template_fold_open":"D\xe9plier","template_more":"Voir tous","template_no_vip":"Mod\xe8les standard","template_page_number_title":"Page {number}","template_preview":"Aper\xe7u","template_result_all_size":"Tout","template_result_home":"Accueil","template_result_next_page":"Suivant","template_result_pre_page":"Pr\xe9c\xe9dent","template_result_size":"Taille","template_search_cancel":"Annuler","template_search_placeholder":"Mod\xe8les de recherche","template_size":"Template dimensions","template_title":"Mod\xe8le","template_total_show":"{number} mod\xe8les","template_type":"Types de mod\xe8les","template_unfavor_fail":"\xc9chec de l\'annulation de la collection de mod\xe8les","template_unfavor_success":"Collecte du mod\xe8le annul\xe9e","template_use":"Utilisez ce mod\xe8le","template_vip":"Mod\xe8les premium","template_words_history":"recherches r\xe9centes","template_words_title":"Recherches populaires","top_header_right_drop_cloud":"Mes photos modifi\xe9es","top_header_right_drop_collage":"Mes collages","top_header_right_drop_design":"Mes cr\xe9ations","try_replace":"-","zendesk_bind_email_desc":"Veuillez ajouter une adresse \xe9lectronique afin que nous puissions vous contacter et vous aider.","zendesk_bind_email_title":"Associez une adresse e-mail \xe0 votre compte Fotor","zendesk_bind_now_btn":"lier maintenant","zendesk_fail_to_bind":"\xc9chec de la liaison","zendesk_got_it":"OK","zendesk_next_btn":"reliure suivante","zendesk_sign_in_title":"Connectez-vous afin que nous puissions mieux vous servir"}'),
                p = JSON.parse('{"bottomLine":"\u3053\u308c\u4ee5\u4e0a\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u3042\u308a\u307e\u305b\u3093","call_back_link":"\u4ed6\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002","copy_success":"\u30b3\u30d4\u30fc\u306b\u6210\u529f\u3057\u307e\u3057\u305f","design":"-","designGallery":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","edit":"-","header_logo_hover_info":"\u6b21\u56de\u304b\u3089Fotor\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\\n\u305d\u306e\u30ed\u30b4\u3092\u30d6\u30c3\u30af\u30de\u30fc\u30af\u30d0\u30fc\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044\uff01","loading":"\u8aad\u307f\u8fbc\u307f\u4e2d...","no_find_by":"\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u8868\u793a\u3059\u308b\u95a2\u9023\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u3053\u308c\u4ee5\u4e0a\u3042\u308a\u307e\u305b\u3093\u3002","recommend_category":"\u304a\u3059\u3059\u3081\u30b5\u30a4\u30ba","recommend_template":"\u304a\u3059\u3059\u3081\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","share_button_text":"\u30b7\u30a7\u30a2","signin":"-","signup":"-","template":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","template_black_entry_title":"\u7a7a\u767d\u306e{templateSize}\u3092\u4f5c\u6210","template_category_title":"\u30ab\u30c6\u30b4\u30ea\u3067\u898b\u308b","template_claer_filter":"\u6761\u4ef6\u3092\u524a\u9664","template_class":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30ab\u30c6\u30b4\u30ea\u30fc","template_designer_name":"-","template_favor":"\u304a\u6c17\u306b\u5165\u308a","template_favor_fail":"\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u304a\u6c17\u306b\u5165\u308a\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f","template_favor_success":"\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u304a\u6c17\u306b\u5165\u308a\u306b\u8ffd\u52a0\u3057\u307e\u3057\u305f","template_filter":"\u6761\u4ef6","template_fold_close":"\u9589\u3058\u308b","template_fold_open":"\u958b\u304f","template_more":"\u3059\u3079\u3066\u8868\u793a","template_no_vip":"\u7121\u6599\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","template_page_number_title":"{number} \u30da\u30fc\u30b8","template_preview":"\u30d7\u30ec\u30d3\u30e5\u30fc","template_result_all_size":"\u3059\u3079\u3066","template_result_home":"\u30db\u30fc\u30e0","template_result_next_page":"\u6b21\u3078","template_result_pre_page":"\u524d\u3078","template_result_size":"\u30b5\u30a4\u30ba","template_search_cancel":"\u30ad\u30e3\u30f3\u30bb\u30eb","template_search_placeholder":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u691c\u7d22","template_size":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30b5\u30a4\u30ba","template_title":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","template_total_show":"{number} \u70b9\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","template_type":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30bf\u30a4\u30d7","template_unfavor_fail":"\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u304a\u6c17\u306b\u5165\u308a\u304b\u3089\u524a\u9664\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f","template_unfavor_success":"\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u304a\u6c17\u306b\u5165\u308a\u304b\u3089\u524a\u9664","template_use":"\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u3046","template_vip":"\u30d7\u30ec\u30df\u30a2\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","template_words_history":"\u691c\u7d22\u5c65\u6b74","template_words_title":"\u4eba\u6c17\u691c\u7d22","top_header_right_drop_cloud":"\u81ea\u5206\u306e\u753b\u50cf\u7de8\u96c6\u4f5c\u54c1","top_header_right_drop_collage":"\u81ea\u5206\u306e\u30b3\u30e9\u30fc\u30b8\u30e5\u4f5c\u54c1","top_header_right_drop_design":"\u81ea\u5206\u306e\u30c7\u30b6\u30a4\u30f3\u4f5c\u54c1","try_replace":"-","zendesk_bind_email_desc":"\u30d8\u30eb\u30d7\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u306b\u9023\u7d61\u3092\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002","zendesk_bind_email_title":"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092Fotor\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ea\u30f3\u30af\u3057\u307e\u3059","zendesk_bind_now_btn":"\u4eca\u3059\u3050\u30d0\u30a4\u30f3\u30c9","zendesk_fail_to_bind":"\u9023\u643a\u5931\u6557","zendesk_got_it":"\u4e86\u89e3","zendesk_next_btn":"\u6b21\u306e\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0","zendesk_sign_in_title":"\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3066\u3001\u3088\u308a\u826f\u3044\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059"}'),
                u = JSON.parse('{"bottomLine":"Sem Mais Dados","call_back_link":"Please try something else.","copy_success":"Copiado","design":"-","designGallery":"Modelos","edit":"-","header_logo_hover_info":"Arraste o logotipo para dentro da barra de favoritos\\npara visitar o Fotor mais facilmente da pr\xf3xima vez!","loading":"Carregando\u2026","no_find_by":"Sorry, we can\'t find what you\'re looking for.","recommend_category":"Tamanho Recomendado","recommend_template":"Modelos Recomendados","share_button_text":"Partilhar","signin":"-","signup":"-","template":"\u6a21\u677f","template_black_entry_title":"\u521b\u5efa\u7a7a\u767d{templateSize}","template_category_title":"Procurar por categoria","template_claer_filter":"Limpar Filtros","template_class":"Categorias de modelo","template_designer_name":"-","template_favor":"Colete","template_favor_fail":"Falha ao coletar o modelo","template_favor_success":"Template coletado","template_filter":"Filtro","template_fold_close":"Dobrar","template_fold_open":"Desdobrar","template_more":"Ver tudo","template_no_vip":"Modelos padr\xe3o","template_page_number_title":"P\xe1gina {number}","template_preview":"Antevis\xe3o","template_result_all_size":"Tudo","template_result_home":"In\xedcio","template_result_next_page":"Pr\xf3ximo","template_result_pre_page":"Anterior","template_result_size":"Tamanho","template_search_cancel":"Cancelar","template_search_placeholder":"Pesquisar modelos","template_size":"Dimens\xf5es de modelo","template_title":"Modelos","template_total_show":"{number} modelos","template_type":"Tipos de modelo","template_unfavor_fail":"Falha ao cancelar cole\xe7\xe3o de modelos","template_unfavor_success":"Coleta de modelo cancelada","template_use":"Use este modelo","template_vip":"Modelos Premium","template_words_history":"Pesquisas recentes","template_words_title":"Pesquisas populares","top_header_right_drop_cloud":"As Minhas Fotos Editadas","top_header_right_drop_collage":"As minhas colagens","top_header_right_drop_design":"Os Meus Desenhos","try_replace":"-","zendesk_bind_email_desc":"Por favor, adicione um endere\xe7o de e-mail para que possamos entrar em contato com voc\xea e ajud\xe1-lo.","zendesk_bind_email_title":"Vincule um endere\xe7o de e-mail \xe0 sua conta Fotor","zendesk_bind_now_btn":"ligue agora","zendesk_fail_to_bind":"Falha na liga\xe7\xe3o do email","zendesk_got_it":"OK","zendesk_next_btn":"pr\xf3xima liga\xe7\xe3o","zendesk_sign_in_title":"Fa\xe7a login para que possamos atend\xea-lo melhor"}'),
                l = JSON.parse('{"bottomLine":"\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445","call_back_link":"Please try something else.","copy_success":"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e","design":"-","designGallery":"\u0428\u0430\u0431\u043b\u043e\u043d","edit":"-","header_logo_hover_info":"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u044c \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a,\\n\u0447\u0442\u043e\u0431\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 Fotor \u0431\u044b\u043b\u043e \u043b\u0435\u0433\u0447\u0435!","loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026","no_find_by":"Sorry, we can\'t find what you\'re looking for.","recommend_category":"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440","recommend_template":"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b","share_button_text":"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f","signin":"-","signup":"-","template":"\u6a21\u677f","template_black_entry_title":"\u521b\u5efa\u7a7a\u767d{templateSize}","template_category_title":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c","template_claer_filter":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440","template_class":"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432","template_designer_name":"-","template_favor":"\u0421\u043e\u0431\u0440\u0430\u0442\u044c","template_favor_fail":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d","template_favor_success":"\u0428\u0430\u0431\u043b\u043e\u043d \u0441\u043e\u0431\u0440\u0430\u043d","template_filter":"\u0424\u0438\u043b\u044c\u0442\u0440","template_fold_close":"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c","template_fold_open":"\u0420\u0430\u0441\u043a\u0440\u044b\u0442\u044c","template_more":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435","template_no_vip":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b","template_page_number_title":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 {number}","template_preview":"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","template_result_all_size":"\u0412\u0441\u0435","template_result_home":"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430","template_result_next_page":"\u0414\u0430\u043b\u0435\u0435","template_result_pre_page":"\u041d\u0430\u0437\u0430\u0434","template_result_size":"\u0420\u0430\u0437\u043c\u0435\u0440","template_search_cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","template_search_placeholder":"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u043f\u043e\u0438\u0441\u043a\u0430","template_size":"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432","template_title":"\u0428\u0430\u0431\u043b\u043e\u043d","template_total_show":"{number} \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432","template_type":"\u0422\u0438\u043f\u044b \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432","template_unfavor_fail":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0431\u043e\u0440 \u0448\u0430\u0431\u043b\u043e\u043d\u0430","template_unfavor_success":"\u0421\u0431\u043e\u0440 \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u0431\u044b\u043b \u043e\u0442\u043c\u0435\u043d\u0435\u043d","template_use":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0448\u0430\u0431\u043b\u043e\u043d","template_vip":"\u041f\u0440\u0435\u043c\u0438\u0443\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u044b","template_words_history":"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b","template_words_title":"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b","top_header_right_drop_cloud":"\u041c\u043e\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0435 \u0444\u043e\u0442\u043e","top_header_right_drop_collage":"\u041c\u043e\u0438 \u043a\u043e\u043b\u043b\u0430\u0436\u0438","top_header_right_drop_design":"\u041c\u043e\u0438 \u0434\u0438\u0437\u0430\u0439\u043d\u044b","try_replace":"-","zendesk_bind_email_desc":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c.","zendesk_bind_email_title":"\u041f\u0440\u0438\u0432\u044f\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u043a \u0441\u0432\u043e\u0435\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 Fotor","zendesk_bind_now_btn":"\u0441\u0432\u044f\u0437\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441","zendesk_fail_to_bind":"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c","zendesk_got_it":"\u0413\u043e\u0442\u043e\u0432\u043e","zendesk_next_btn":"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430","zendesk_sign_in_title":"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u043b\u0443\u0447\u0448\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0442\u044c \u0432\u0430\u0441"}'),
                d = JSON.parse('{"bottomLine":"\u6ca1\u6709\u66f4\u591a\u5185\u5bb9\u4e86","call_back_link":"\u8bf7\u67e5\u770b\u5176\u4ed6\u5185\u5bb9\u3002","copy_success":"\u590d\u5236\u6210\u529f","design":"\u8bbe\u8ba1","designGallery":"\u6a21\u677f\u4e2d\u5fc3","edit":"\u7f16\u8f91","header_logo_hover_info":"\u62d6\u52a8Logo\u5230\u4e66\u7b7e\u680f\uff0c\u4e0b\u6b21\u8f7b\u677e\u8bbf\u95eeFotor\uff01","loading":"\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d...","no_find_by":"\u62b1\u6b49\uff0c\u6ca1\u6709\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u8fdb\u884c\u5c55\u793a\u3002","recommend_category":"\u63a8\u8350\u5c3a\u5bf8","recommend_template":"\u63a8\u8350\u6a21\u677f","share_button_text":"\u5206\u4eab","signin":"\u767b\u5f55","signup":"\u6ce8\u518c","template":"\u6a21\u677f","template_black_entry_title":"\u521b\u5efa\u7a7a\u767d{templateSize}","template_category_title":"\u6309\u7c7b\u522b\u6d4f\u89c8","template_claer_filter":"\u6e05\u9664\u7b5b\u9009","template_class":"\u6a21\u677f\u5206\u7c7b","template_designer_name":"\u5b98\u65b9\u8bbe\u8ba1\u5e08","template_favor":"\u6536\u85cf","template_favor_fail":"\u6536\u85cf\u5931\u8d25","template_favor_success":"\u6536\u85cf\u6210\u529f","template_filter":"\u7b5b\u9009","template_fold_close":"\u6536\u8d77","template_fold_open":"\u5c55\u5f00","template_more":"\u66f4\u591a","template_no_vip":"\u514d\u8d39\u6a21\u677f","template_page_number_title":"\u7b2c {number} \u9875","template_preview":"\u9884\u89c8","template_result_all_size":"\u5168\u90e8","template_result_home":"\u9996\u9875","template_result_next_page":"\u4e0b\u4e00\u9875","template_result_pre_page":"\u4e0a\u4e00\u9875","template_result_size":"\u5c3a\u5bf8","template_search_cancel":"\u53d6\u6d88","template_search_placeholder":"\u641c\u7d22\u6a21\u677f","template_size":"\u6a21\u677f\u5c3a\u5bf8","template_title":"\u6a21\u677f\u4e2d\u5fc3","template_total_show":"{number} \u4e2a\u6a21\u7248","template_type":"\u6a21\u677f\u7c7b\u578b","template_unfavor_fail":"\u53d6\u6d88\u6536\u85cf\u5931\u8d25","template_unfavor_success":"\u53d6\u6d88\u6536\u85cf\u6210\u529f","template_use":"\u4f7f\u7528\u6b64\u6a21\u677f","template_vip":"\u4f1a\u5458\u6a21\u677f","template_words_history":"\u5386\u53f2\u641c\u7d22","template_words_title":"\u70ed\u95e8\u641c\u7d22","top_header_right_drop_cloud":"\u6211\u7684\u7167\u7247\u7f16\u8f91","top_header_right_drop_collage":"\u6211\u7684\u62fc\u56fe","top_header_right_drop_design":"\u6211\u7684\u8bbe\u8ba1","try_replace":"\u6362\u4e2a\u641c\u7d22\u8bcd\u8bd5\u8bd5\uff1f","zendesk_bind_email_desc":"\u8bf7\u6dfb\u52a0\u4e00\u4e2a\u90ae\u7bb1\u5730\u5740\uff0c\u4fbf\u4e8e\u6211\u4eec\u8054\u7cfb\u60a8\u5e76\u63d0\u4f9b\u5e2e\u52a9\u3002","zendesk_bind_email_title":"\u5173\u8054\u4e00\u4e2a\u90ae\u7bb1\u5730\u5740\u5230\u60a8\u7684Fotor\u8d26\u6237","zendesk_bind_now_btn":"\u7acb\u5373\u7ed1\u5b9a","zendesk_fail_to_bind":"\u7ed1\u5b9a\u5931\u8d25","zendesk_got_it":"\u77e5\u9053\u4e86","zendesk_next_btn":"\u4e0b\u6b21\u7ed1\u5b9a","zendesk_sign_in_title":"\u767b\u5f55\u4ee5\u4fbf\u6211\u4eec\u66f4\u597d\u5730\u4e3a\u60a8\u670d\u52a1"}'),
                m = JSON.parse('{"bottomLine":"\u6c92\u6709\u66f4\u591a\u5167\u5bb9\u4e86","call_back_link":"Please try something else.","copy_success":"\u8907\u88fd\u6210\u529f","design":"-","designGallery":"\u7bc4\u672c\u4e2d\u5fc3","edit":"-","header_logo_hover_info":"\u62d6\u52d5Logo\u5230\u66f8\u7c64\u6b04\uff0c\u4e0b\u6b21\u8f15\u9b06\u8a2a\u554fFotor\uff01","loading":"\u6b63\u5728\u8f09\u5165\u2026","no_find_by":"Sorry, we can\'t find what you\'re looking for.","recommend_category":"\u63a8\u85a6\u5c3a\u5bf8","recommend_template":"\u63a8\u85a6\u6a21\u677f","share_button_text":"\u5206\u4eab","signin":"-","signup":"-","template":"\u6a21\u677f","template_black_entry_title":"\u5275\u5efa\u7a7a\u767d{templateSize}","template_category_title":"\u6309\u985e\u5225\u6d41\u89bd","template_claer_filter":"\u6e05\u9664\u7be9\u9078","template_class":"\u6a21\u677f\u5206\u985e","template_designer_name":"-","template_favor":"\u6536\u85cf","template_favor_fail":"\u6a21\u677f\u6536\u85cf\u5931\u6557","template_favor_success":"\u6a21\u677f\u6536\u85cf\u6210\u529f","template_filter":"\u7be9\u9078","template_fold_close":"\u6536\u8d77","template_fold_open":"\u5c55\u958b","template_more":"\u66f4\u591a","template_no_vip":"\u514d\u8cbb\u6a21\u677f","template_page_number_title":"\u7b2c {number} \u9801","template_preview":"\u9810\u89bd","template_result_all_size":"\u5168\u90e8","template_result_home":"\u9996\u9801","template_result_next_page":"\u4e0b\u4e00\u9801","template_result_pre_page":"\u4e0a\u4e00\u9801","template_result_size":"\u5c3a\u5bf8","template_search_cancel":"\u53d6\u6d88","template_search_placeholder":"\u641c\u7d22\u6a21\u677f","template_size":"\u6a21\u677f\u5c3a\u5bf8","template_title":"\u7bc4\u672c\u4e2d\u5fc3","template_total_show":"{number} \u500b\u6a21\u677f","template_type":"\u6a21\u677f\u985e\u578b","template_unfavor_fail":"\u6a21\u677f\u53d6\u6d88\u6536\u85cf\u5931\u6557","template_unfavor_success":"\u6a21\u677f\u53d6\u6d88\u6536\u85cf\u6210\u529f","template_use":"\u4f7f\u7528\u6b64\u6a21\u677f","template_vip":"\u6703\u54e1\u6a21\u677f","template_words_history":"\u6b77\u53f2\u641c\u7d22","template_words_title":"\u71b1\u9580\u641c\u7d22","top_header_right_drop_cloud":"\u6211\u7684\u7167\u7247\u7de8\u8f2f","top_header_right_drop_collage":"\u6211\u7684\u62fc\u5716","top_header_right_drop_design":"\u6211\u7684\u8a2d\u8a08","try_replace":"-","zendesk_bind_email_desc":"\u8acb\u6dfb\u52a0\u4e00\u500b\u90f5\u7bb1\u5730\u5740\uff0c\u4fbf\u65bc\u6211\u5011\u806f\u7e6b\u60a8\u4e26\u63d0\u4f9b\u5e6b\u52a9\u3002","zendesk_bind_email_title":"\u95dc\u806f\u4e00\u500b\u90f5\u7bb1\u5730\u5740\u5230\u60a8\u7684Fotor\u8cec\u6236","zendesk_bind_now_btn":"\u7acb\u5373\u7d81\u5b9a","zendesk_fail_to_bind":"\u7d81\u5b9a\u5931\u6557","zendesk_got_it":"\u77e5\u9053\u4e86","zendesk_next_btn":"\u4e0b\u6b21\u7d81\u5b9a","zendesk_sign_in_title":"\u767b\u9304\u4ee5\u4fbf\u6211\u5011\u66f4\u597d\u5730\u70ba\u60a8\u670d\u52d9"}');

            function g(e, t) {
                var a = "";
                switch (o.Z.local) {
                    case "en":
                        a = s[e];
                        break;
                    case "es":
                        a = _[e];
                        break;
                    case "pt":
                        a = u[e];
                        break;
                    case "ru":
                        a = l[e];
                        break;
                    case "fr":
                        a = c[e];
                        break;
                    case "de":
                        a = n[e];
                        break;
                    case "cn":
                        a = d[e];
                        break;
                    case "tw":
                        a = m[e];
                        break;
                    case "jp":
                        a = p[e]
                }
                if (i()(t))
                    for (var r in t) a = a.replace(new RegExp("{".concat(r, "}"), "g"), t[r]);
                return a
            }
        },
        79611: function(e, t, a) {
            "use strict";
            var r = a(92809),
                i = a(30266),
                o = a(68216),
                n = a(25997),
                s = a(809),
                _ = a.n(s);

            function c(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var u = new(function() {
                function e() {
                    (0, o.Z)(this, e)
                }
                return (0, n.Z)(e, [{
                    key: "_addSensorPv",
                    value: function() {
                        var e = (0, i.Z)(_().mark((function e(t) {
                            var a, r;
                            return _().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = t.action, r = t.label;
                                    case 1:
                                        if (window.sensors) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4, new Promise((function(e) {
                                            return setTimeout(e, 200)
                                        }));
                                    case 4:
                                        e.next = 1;
                                        break;
                                    case 6:
                                        window.sensors.track(a, p({}, r));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "templateSearch",
                    value: function(e) {
                        var t = e.key_word,
                            a = e.word_type;
                        this._addSensorPv({
                            action: "fotor_ web$search$content",
                            label: {
                                location: "template_center",
                                search_type: "template",
                                key_word: t,
                                word_type: a
                            }
                        })
                    }
                }, {
                    key: "sendTracker",
                    value: function(e, t) {
                        this._addSensorPv({
                            action: e,
                            label: t
                        })
                    }
                }]), e
            }());
            t.Z = u
        },
        90520: function(e, t, a) {
            "use strict";
            a.d(t, {
                tg: function() {
                    return Ne
                },
                KM: function() {
                    return et
                },
                aA: function() {
                    return pe
                },
                xh: function() {
                    return Ze
                },
                tr: function() {
                    return it
                },
                zU: function() {
                    return ot
                },
                Jg: function() {
                    return Ve
                },
                Tu: function() {
                    return at
                },
                QK: function() {
                    return _e
                },
                Ji: function() {
                    return ce
                },
                r: function() {
                    return Ke
                },
                Rk: function() {
                    return He
                },
                FE: function() {
                    return Le
                },
                t9: function() {
                    return me
                },
                Ff: function() {
                    return ie
                },
                G3: function() {
                    return Oe
                },
                Ky: function() {
                    return fe
                },
                XZ: function() {
                    return Y
                },
                fx: function() {
                    return Ue
                },
                DW: function() {
                    return L.D
                },
                Dv: function() {
                    return Ee
                },
                JL: function() {
                    return De
                },
                rd: function() {
                    return Q
                },
                Re: function() {
                    return Te
                },
                XD: function() {
                    return je
                },
                BN: function() {
                    return $e
                },
                fo: function() {
                    return de
                },
                JG: function() {
                    return he
                },
                v4: function() {
                    return rt
                },
                ce: function() {
                    return Ce
                },
                DT: function() {
                    return Fe
                },
                rH: function() {
                    return qe
                },
                os: function() {
                    return K
                },
                Xu: function() {
                    return We
                },
                PK: function() {
                    return oe
                },
                Im: function() {
                    return ae
                },
                b9: function() {
                    return re
                },
                ti: function() {
                    return $
                },
                l3: function() {
                    return ee
                },
                JQ: function() {
                    return ne
                },
                nR: function() {
                    return X
                },
                mP: function() {
                    return te
                },
                yA: function() {
                    return Je
                },
                o7: function() {
                    return ze
                },
                wZ: function() {
                    return tt
                },
                d8: function() {
                    return se
                },
                KI: function() {
                    return Re
                },
                HX: function() {
                    return Me
                },
                FU: function() {
                    return Ge
                },
                P7: function() {
                    return Be
                },
                md: function() {
                    return Qe
                },
                fS: function() {
                    return Z
                },
                Mu: function() {
                    return Ye
                },
                i8: function() {
                    return Xe
                },
                bI: function() {
                    return ue
                },
                cE: function() {
                    return le
                }
            });
            var r = a(30266),
                i = a(83789),
                o = a(92809),
                n = a(809),
                s = a.n(n),
                _ = a(34952),
                c = a(49437),
                p = {
                    development: {
                        ios: {
                            general_all: "https://datasink-sa.fotor.com.cn/r/Eu",
                            homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/6F",
                            general_nav_button: "https://datasink-sa.fotor.com.cn/r/72",
                            homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/pF",
                            homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/xX",
                            homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/aX",
                            homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/rX",
                            features_nav_button: "https://datasink-sa.fotor.com.cn/r/K2",
                            hub_nav_button: "https://datasink-sa.fotor.com.cn/r/z2",
                            goart_app_ad: "https://datasink-sa.fotor.com.cn/r/hU",
                            goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/yk",
                            homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/vv",
                            generic_top_banner: "https://datasink-sa.fotor.com.cn/r/tv",
                            general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/7h",
                            general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                            homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Kh",
                            homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/zh"
                        },
                        android: {
                            general_all: "https://datasink-sa.fotor.com.cn/r/7u",
                            homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/sX",
                            general_nav_button: "https://datasink-sa.fotor.com.cn/r/v2",
                            homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/oX",
                            homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/AX",
                            homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/BX",
                            homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/SX",
                            features_nav_button: "https://datasink-sa.fotor.com.cn/r/U2",
                            hub_nav_button: "https://datasink-sa.fotor.com.cn/r/E2",
                            goart_app_ad: "https://datasink-sa.fotor.com.cn/r/RU",
                            goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/9k",
                            homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/D7",
                            generic_top_banner: "https://datasink-sa.fotor.com.cn/r/rv",
                            general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/vh",
                            general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                            homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Uh",
                            homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/Eh"
                        }
                    },
                    production: {
                        ios: {
                            general_all: "https://datasink-sa.fotor.com.cn/r/Eu",
                            homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/FX",
                            general_nav_button: "https://datasink-sa.fotor.com.cn/r/X2",
                            homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/XX",
                            homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/2X",
                            homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/KX",
                            homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/RX",
                            features_nav_button: "https://datasink-sa.fotor.com.cn/r/o2",
                            hub_nav_button: "https://datasink-sa.fotor.com.cn/r/B2",
                            goart_app_ad: "https://datasink-sa.fotor.com.cn/r/7U",
                            goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/Wk",
                            homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/vv",
                            generic_top_banner: "https://datasink-sa.fotor.com.cn/r/tv",
                            general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/7h",
                            general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                            homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Kh",
                            homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/zh",
                            features_nav_photo_to_cartoon: "https://datasink-sa.fotor.com.cn/r/6t",
                            features_nav_photo_to_anime: "https://datasink-sa.fotor.com.cn/r/xQ"
                        },
                        android: {
                            general_all: "https://datasink-sa.fotor.com.cn/r/7u",
                            homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/UX",
                            general_nav_button: "https://datasink-sa.fotor.com.cn/r/22",
                            homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/zX",
                            homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/EX",
                            homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/7X",
                            homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/HX",
                            features_nav_button: "https://datasink-sa.fotor.com.cn/r/A2",
                            hub_nav_button: "https://datasink-sa.fotor.com.cn/r/F2",
                            goart_app_ad: "https://datasink-sa.fotor.com.cn/r/vU",
                            goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/jk",
                            homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/D7",
                            generic_top_banner: "https://datasink-sa.fotor.com.cn/r/rv",
                            general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/vh",
                            general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                            homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Uh",
                            homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/Eh",
                            features_nav_photo_to_cartoon: "https://datasink-sa.fotor.com.cn/r/Tt",
                            features_nav_photo_to_anime: "https://datasink-sa.fotor.com.cn/r/pt"
                        }
                    }
                };
            p.staging = p.development, p.preRelease = p.production;
            var u = p.production,
                l = {
                    development: {
                        ios: {
                            "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                            "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                            "": "https://test-www.fotor.com/photo-editor-app/",
                            "/es": "https://test-www.fotor.com/photo-editor-app/",
                            "/pt": "https://test-www.fotor.com/photo-editor-app/",
                            "/ru": "https://test-www.fotor.com/photo-editor-app/",
                            "/fr": "https://test-www.fotor.com/photo-editor-app/",
                            "/de": "https://test-www.fotor.com/photo-editor-app/",
                            "/cn": "https://test-www.fotor.com/photo-editor-app/",
                            "/tw": "https://test-www.fotor.com/photo-editor-app/",
                            "/jp": "https://test-www.fotor.com/photo-editor-app/"
                        },
                        android: {
                            "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                            "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                            "": "https://test-www.fotor.com/photo-editor-app/",
                            "/es": "https://test-www.fotor.com/photo-editor-app/",
                            "/pt": "https://test-www.fotor.com/photo-editor-app/",
                            "/ru": "https://test-www.fotor.com/photo-editor-app/",
                            "/fr": "https://test-www.fotor.com/photo-editor-app/",
                            "/de": "https://test-www.fotor.com/photo-editor-app/",
                            "/cn": "https://test-www.fotor.com/photo-editor-app/",
                            "/tw": "https://test-www.fotor.com/photo-editor-app/",
                            "/jp": "https://test-www.fotor.com/photo-editor-app/"
                        }
                    },
                    production: {
                        ios: {
                            "": "https://www.fotor.com/photo-editor-app/",
                            "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                            "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                            "/es": "https://www.fotor.com/photo-editor-app/",
                            "/pt": "https://www.fotor.com/photo-editor-app/",
                            "/ru": "https://www.fotor.com/photo-editor-app/",
                            "/fr": "https://www.fotor.com/photo-editor-app/",
                            "/de": "https://www.fotor.com/photo-editor-app/",
                            "/cn": "https://www.fotor.com/photo-editor-app/",
                            "/tw": "https://www.fotor.com/photo-editor-app/",
                            "/jp": "https://www.fotor.com/photo-editor-app/"
                        },
                        android: {
                            "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                            "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                            "/": "https://www.fotor.com/photo-editor-app/",
                            "/es": "https://www.fotor.com/photo-editor-app/",
                            "/pt": "https://www.fotor.com/photo-editor-app/",
                            "/ru": "https://www.fotor.com/photo-editor-app/",
                            "/fr": "https://www.fotor.com/photo-editor-app/",
                            "/de": "https://www.fotor.com/photo-editor-app/",
                            "/cn": "https://www.fotor.com/photo-editor-app/",
                            "/tw": "https://www.fotor.com/photo-editor-app/",
                            "/jp": "https://www.fotor.com/photo-editor-app/"
                        }
                    }
                },
                d = {
                    development: {
                        ios: {
                            "": p.development.ios.homepage_continue_in_the_app
                        },
                        android: {
                            "": p.development.android.homepage_continue_in_the_app
                        }
                    },
                    production: {
                        ios: {
                            "": p.production.ios.homepage_continue_in_the_app
                        },
                        android: {
                            "": p.production.android.homepage_continue_in_the_app
                        }
                    }
                },
                m = {
                    development: {
                        ios: {
                            "": p.development.ios.homepage_top_banner
                        },
                        android: {
                            "": p.development.android.homepage_top_banner
                        }
                    },
                    production: {
                        ios: {
                            "": p.production.ios.homepage_top_banner
                        },
                        android: {
                            "": p.production.android.homepage_top_banner
                        }
                    }
                },
                g = {
                    development: {
                        ios: {
                            "": p.development.ios.homepage_nav_button,
                            "/features/blur.html": p.development.ios.features_nav_button,
                            "/features/collage": p.development.ios.features_nav_button,
                            "/es/features/one-tap-enhance.html": p.development.ios.features_nav_button,
                            "/pt/colagem/index.html": p.development.ios.features_nav_button,
                            "/ru/collage": p.development.ios.features_nav_button,
                            "/features/frames": p.development.ios.features_nav_button,
                            "/features/crop": p.development.ios.features_nav_button,
                            "/features/color-splash": p.development.ios.features_nav_button,
                            "/es/features/montage.html": p.development.ios.features_nav_button,
                            "/features/photo-stitch": p.development.ios.features_nav_button,
                            "/design/mobile-wallpaper": p.development.ios.features_nav_button,
                            "/how-to/blur-background": p.development.ios.features_nav_button,
                            "/es/features/blur.html": p.development.ios.features_nav_button,
                            "/es/features/crop.html": p.development.ios.features_nav_button,
                            "/pt/features/blur.html": p.development.ios.features_nav_button,
                            "/features/resize.html": p.development.ios.features_nav_button,
                            "/features/text.html": p.development.ios.features_nav_button,
                            "/features/photo-effects": p.development.ios.features_nav_button,
                            "/ru/features/blur.html": p.development.ios.features_nav_button,
                            "/es/collage": p.development.ios.features_nav_button,
                            "/how-to/add-vintage-effects": p.development.ios.features_nav_button,
                            "/how-to/make-photo-grid": p.development.ios.features_nav_button,
                            "/pt/features/resize.html": p.development.ios.features_nav_button,
                            "/pt/features/montage.html": p.development.ios.features_nav_button,
                            "/features/poster.html": p.development.ios.features_nav_button,
                            "banner.fotor.com": p.development.ios.features_nav_button,
                            "/ru/features/one-tap-enhance.html": p.development.ios.features_nav_button,
                            "/design": p.development.ios.hub_nav_button,
                            "/photo-editor": p.development.ios.hub_nav_button,
                            "/nft-creator": {
                                link: "https://datasink-sa.fotor.com.cn/r/zU",
                                schema: "goart://"
                            },
                            "/features/goart.html": {
                                link: "https://datasink-sa.fotor.com.cn/r/zU",
                                schema: "goart://"
                            },
                            "/features/ai-art-generator": {
                                link: p.development.ios.goart_ai_art_generator,
                                schema: "goart://"
                            },
                            "/features/photo-to-sketch": {
                                link: "https://datasink-sa.fotor.com.cn/r/1Q",
                                schema: "goart://"
                            }
                        },
                        android: {
                            "": p.development.android.homepage_nav_button,
                            "/features/blur.html": p.development.android.features_nav_button,
                            "/features/collage": p.development.android.features_nav_button,
                            "/es/features/one-tap-enhance.html": p.development.android.features_nav_button,
                            "/pt/colagem/index.html": p.development.android.features_nav_button,
                            "/ru/collage": p.development.android.features_nav_button,
                            "/features/frames": p.development.android.features_nav_button,
                            "/features/crop": p.development.android.features_nav_button,
                            "/features/color-splash": p.development.android.features_nav_button,
                            "/es/features/montage.html": p.development.android.features_nav_button,
                            "/features/photo-stitch": p.development.android.features_nav_button,
                            "/design/mobile-wallpaper": p.development.android.features_nav_button,
                            "/how-to/blur-background": p.development.android.features_nav_button,
                            "/es/features/blur.html": p.development.android.features_nav_button,
                            "/es/features/crop.html": p.development.android.features_nav_button,
                            "/pt/features/blur.html": p.development.android.features_nav_button,
                            "/features/resize.html": p.development.android.features_nav_button,
                            "/features/text.html": p.development.android.features_nav_button,
                            "/features/photo-effects": p.development.android.features_nav_button,
                            "/ru/features/blur.html": p.development.android.features_nav_button,
                            "/es/collage": p.development.android.features_nav_button,
                            "/how-to/add-vintage-effects": p.development.android.features_nav_button,
                            "/how-to/make-photo-grid": p.development.android.features_nav_button,
                            "/pt/features/resize.html": p.development.android.features_nav_button,
                            "/pt/features/montage.html": p.development.android.features_nav_button,
                            "/features/poster.html": p.development.android.features_nav_button,
                            "banner.fotor.com": p.development.android.features_nav_button,
                            "/ru/features/one-tap-enhance.html": p.development.android.features_nav_button,
                            "/design": p.development.android.hub_nav_button,
                            "/photo-editor": p.development.android.hub_nav_button,
                            "/nft-creator": {
                                link: "https://datasink-sa.fotor.com.cn/r/EU",
                                schema: "goart://"
                            },
                            "/features/goart.html": {
                                link: "https://datasink-sa.fotor.com.cn/r/EU",
                                schema: "goart://"
                            },
                            "/features/ai-art-generator": {
                                link: p.development.android.goart_ai_art_generator,
                                schema: "goart://"
                            },
                            "/features/photo-to-sketch": {
                                link: "https://datasink-sa.fotor.com.cn/r/3Q",
                                schema: "goart://"
                            }
                        }
                    },
                    production: {
                        ios: {
                            "": p.production.ios.homepage_nav_button,
                            "/features/blur.html": p.production.ios.features_nav_button,
                            "/features/collage": p.production.ios.features_nav_button,
                            "/es/features/one-tap-enhance.html": p.production.ios.features_nav_button,
                            "/pt/colagem/index.html": p.production.ios.features_nav_button,
                            "/ru/collage": p.production.ios.features_nav_button,
                            "/features/frames": p.production.ios.features_nav_button,
                            "/features/crop": p.production.ios.features_nav_button,
                            "/features/color-splash": p.production.ios.features_nav_button,
                            "/es/features/montage.html": p.production.ios.features_nav_button,
                            "/features/photo-stitch": p.production.ios.features_nav_button,
                            "/design/mobile-wallpaper": p.production.ios.features_nav_button,
                            "/how-to/blur-background": p.production.ios.features_nav_button,
                            "/es/features/blur.html": p.production.ios.features_nav_button,
                            "/es/features/crop.html": p.production.ios.features_nav_button,
                            "/pt/features/blur.html": p.production.ios.features_nav_button,
                            "/features/resize.html": p.production.ios.features_nav_button,
                            "/features/text.html": p.production.ios.features_nav_button,
                            "/features/photo-effects": p.production.ios.features_nav_button,
                            "/ru/features/blur.html": p.production.ios.features_nav_button,
                            "/es/collage": p.production.ios.features_nav_button,
                            "/how-to/add-vintage-effects": p.production.ios.features_nav_button,
                            "/how-to/make-photo-grid": p.production.ios.features_nav_button,
                            "/pt/features/resize.html": p.production.ios.features_nav_button,
                            "/pt/features/montage.html": p.production.ios.features_nav_button,
                            "/features/poster.html": p.production.ios.features_nav_button,
                            "banner.fotor.com": p.production.ios.features_nav_button,
                            "/ru/features/one-tap-enhance.html": p.production.ios.features_nav_button,
                            "/design": p.production.ios.hub_nav_button,
                            "/photo-editor": p.production.ios.hub_nav_button,
                            "/nft-creator": {
                                link: "https://datasink-sa.fotor.com.cn/r/zU",
                                schema: "goart://"
                            },
                            "/features/goart.html": {
                                link: "https://datasink-sa.fotor.com.cn/r/zU",
                                schema: "goart://"
                            },
                            "/features/ai-art-generator": {
                                link: p.production.ios.goart_ai_art_generator,
                                schema: "goart://"
                            },
                            "/features/photo-to-sketch": {
                                link: "https://datasink-sa.fotor.com.cn/r/1Q",
                                schema: "goart://"
                            },
                            "/features/photo-to-cartoon": p.production.ios.features_nav_photo_to_cartoon,
                            "/features/photo-to-anime": p.production.ios.features_nav_photo_to_anime
                        },
                        android: {
                            "": p.production.android.homepage_nav_button,
                            "/features/blur.html": p.production.android.features_nav_button,
                            "/features/collage": p.production.android.features_nav_button,
                            "/es/features/one-tap-enhance.html": p.production.android.features_nav_button,
                            "/pt/colagem/index.html": p.production.android.features_nav_button,
                            "/ru/collage": p.production.android.features_nav_button,
                            "/features/frames": p.production.android.features_nav_button,
                            "/features/crop": p.production.android.features_nav_button,
                            "/features/color-splash": p.production.android.features_nav_button,
                            "/es/features/montage.html": p.production.android.features_nav_button,
                            "/features/photo-stitch": p.production.android.features_nav_button,
                            "/design/mobile-wallpaper": p.production.android.features_nav_button,
                            "/how-to/blur-background": p.production.android.features_nav_button,
                            "/es/features/blur.html": p.production.android.features_nav_button,
                            "/es/features/crop.html": p.production.android.features_nav_button,
                            "/pt/features/blur.html": p.production.android.features_nav_button,
                            "/features/resize.html": p.production.android.features_nav_button,
                            "/features/text.html": p.production.android.features_nav_button,
                            "/features/photo-effects": p.production.android.features_nav_button,
                            "/ru/features/blur.html": p.production.android.features_nav_button,
                            "/es/collage": p.production.android.features_nav_button,
                            "/how-to/add-vintage-effects": p.production.android.features_nav_button,
                            "/how-to/make-photo-grid": p.production.android.features_nav_button,
                            "/pt/features/resize.html": p.production.android.features_nav_button,
                            "/pt/features/montage.html": p.production.android.features_nav_button,
                            "/features/poster.html": p.production.android.features_nav_button,
                            "banner.fotor.com": p.production.android.features_nav_button,
                            "/ru/features/one-tap-enhance.html": p.production.android.features_nav_button,
                            "/design": p.production.android.hub_nav_button,
                            "/photo-editor": p.production.android.hub_nav_button,
                            "/nft-creator": {
                                link: "https://datasink-sa.fotor.com.cn/r/EU",
                                schema: "goart://"
                            },
                            "/features/goart.html": {
                                link: "https://datasink-sa.fotor.com.cn/r/EU",
                                schema: "goart://"
                            },
                            "/features/ai-art-generator": {
                                link: p.production.android.goart_ai_art_generator,
                                schema: "goart://"
                            },
                            "/features/photo-to-sketch": {
                                link: "https://datasink-sa.fotor.com.cn/r/3Q",
                                schema: "goart://"
                            },
                            "/features/photo-to-cartoon": p.production.android.features_nav_photo_to_cartoon,
                            "/features/photo-to-anime": p.production.android.features_nav_photo_to_anime
                        }
                    }
                };
            g.staging = g.development, g.preRelease = g.production;
            var f = g.production;
            m.staging = m.development, m.preRelease = m.production;
            var h = m.production;
            d.staging = d.development, d.preRelease = d.production;
            var b = d.production;
            l.staging = l.development, l.preRelease = l.production;
            var y = l.production,
                v = (a(18504), a(27361)),
                w = a.n(v),
                k = a(8804),
                A = a.n(k),
                P = a(13311),
                I = a.n(P),
                F = a(35161),
                S = a.n(F),
                q = a(84706),
                x = {
                    "/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                    "/features/collage": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                    "/ru/collage/": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                    "/pt/colagem/index.html": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                    "/es/collage/": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                    "/how-to/remove-unwanted-objects/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/features/ai-image-extender/": "fotor://pictureTools?type=editor&subType=AIExtender&channel=web",
                    "/es/features/ai-image-extender/": "fotor://pictureTools?type=editor&subType=AIExtender&channel=web",
                    "/features/background-remover/upload": "fotor://mattingFunction?type=3&theme=background_remover&channel=web",
                    "/features/backgrounds.html": "fotor://mattingFunction?type=0&channel=web",
                    "/features/backgrounds": "fotor://mattingFunction?type=0&channel=web",
                    "/features/background-remover": "fotor://mattingFunction?type=3&theme=background_remover&channel=web",
                    "/id/features/backgrounds.html": "fotor://mattingFunction?type=0&channel=web",
                    "/id/features/backgrounds": "fotor://mattingFunction?type=0&channel=web",
                    "/features/one-tap-enhance": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                    "/avatar/create": "fotor://AIAvatars?channel=web",
                    "/photo-editor-app/editor/ai/ai-enlarger": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                    "/features/ai-portrait-generator/": "fotor://AIAvatars?channel=web",
                    "/features/ai-headshot-generator/": "fotor://AIAvatars?channel=web",
                    "/features/ai-profile-picture-generator/": "fotor://AI_Image_From_Image?channel=web",
                    "/ru/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                    "/es/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                    "/fr/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                    "/it/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                    "/blog/how-to-overlay-photos-on-iphone/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                    "/ru/how-to/remove-unwanted-objects/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/id/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/id/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/pt/features/remover-marca-d-agua/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/remove-object-from-photo-app/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/features/remove-glare-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/how-to-remove-the-tiktok-watermark/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/pt/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/es/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/ru/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/ru/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/es/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/ru/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/ru/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/es/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/id/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/pt/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/remove-instagram-watermark/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/tw/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/how-to-remove-a-person-from-a-photo-on-iphone/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/fr/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/fr/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/fr/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/remove-people-from-photos-app/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/how-to-remove-an-object-in-photoshop/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/de/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/de/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/how-to-remove-date-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/how-to-remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/how-to-remove-people-from-pictures/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/blog/best-watermark-remover-app/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                    "/fr/features/ai-image-extender/": "fotor://pictureTools?type=editor&subType=AIExtender&channel=web",
                    "/id/features/photo-enhancer/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/ru/features/one-tap-enhance.html": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/es/features/one-tap-enhance.html": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/pt/features/one-tap-enhance.html": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/blog/best-photo-enhancer-apps/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/de/features/photo-enhancer/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/blog/how-to-enhance-photos-in-photoshop/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/jp/features/one-tap-enhance": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                    "/id/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                    "/es/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                    "/de/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                    "/tw/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                    "/jp/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                    "/it/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                    "/features/ai-avatar-generator/": "fotor://AIAvatars?channel=web",
                    "/avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/es/avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/pt/avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/avatar/create/": "fotor://AIAvatars?channel=web",
                    "/avatar/creation": "fotor://AIAvatars?channel=web",
                    "/fr/avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/features/3d-avatar-creator/": "fotor://AIAvatars?channel=web",
                    "/de/avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/es/features/3d-avatar-creator/": "fotor://AIAvatars?channel=web",
                    "/cartoon-avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/features/realistic-avatar-creator/": "fotor://AIAvatars?channel=web",
                    "/features/anime-avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/features/gaming-avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/blog/best-avatar-maker/": "fotor://AIAvatars?channel=web",
                    "/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                    "/es/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                    "/pt/features/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                    "/fr/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                    "/de/features/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                    "/blog/best-old-photo-restoration-apps/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/blog/restore-old-photo/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/blog/how-to-restore-old-photos-in-photoshop/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/es/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/pt/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/id/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/ru/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                    "/features/ai-sketch/": "fotor://AISketch?channel=web",
                    "/es/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                    "/pt/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                    "/fr/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                    "/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                    "/id/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                    "/blog/photo-to-sketch-app/": "fotor://AISketch?channel=web",
                    "/features/ai-face-generator/": "fotor://AI_Image_From_Image?channel=web",
                    "/features/ai-image-generator/": "fotor://AI_Image_Generator?channel=web",
                    "/features/hairstyle-changer/": "fotor://AIFaceSwap?gender=female&selectStyles=black_hair&channel=web"
                };
            x["/features/blur"] = x["/features/blur.html"];
            var C = function(e, t, a) {
                var r, i = "";
                e && ("string" !== typeof e && e[a] ? i = (null === e || void 0 === e || null === (r = e[a]) || void 0 === r ? void 0 : r[t]) || i : "deep_link" === t && (i = e));
                return i
            };

            function D(e, t) {
                if (e && ("string" === typeof e || e[t])) return {
                    deep_link: C(e, "deep_link", t),
                    creative: C(e, "creative", t),
                    theme: C(e, "theme", t),
                    channel: C(e, "channel", t),
                    campaign: C(e, "campaign", t),
                    redirect_ios: C(e, "redirect_ios", t),
                    redirect_android: C(e, "redirect_android", t)
                }
            }
            var z = {
                development: {
                    android: "https://app.adjust.com/sp92lsw",
                    ios: "https://app.adjust.com/filvaq8"
                },
                production: {
                    android: "https://app.adjust.com/5t0c3sp",
                    ios: "https://app.adjust.com/mh8zuw6"
                }
            };
            z.staging = z.development, z.preRelease = z.production;
            var T = z.production,
                j = a(20640),
                E = a.n(j),
                U = {
                    1: [{
                        title: "English",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Spanish",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portuguese",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Russian",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "French",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "German",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: " Simplified Chinese",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Traditional Chinese",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japanese",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indonesian",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Italian",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Thai",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamese",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Turkish",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Polish",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Dutch",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    2: [{
                        title: "Ingl\xe9s",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Espa\xf1ol",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portugu\xe9s",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Ruso",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Franc\xe9s",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Alem\xe1n",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Chino simplificado",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Chino tradicional",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japon\xe9s",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indonesio",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Italiano",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Tailand\xe9s",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamita",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Turco",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Polaco",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Holand\xe9s",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    3: [{
                        title: "Ingl\xeas",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Espanhol",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portugu\xeas",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Russo",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Franc\xeas",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Alem\xe3o",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Chin\xeas simplificado",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Chin\xeas tradicional",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japon\xeas",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indon\xe9sio",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Italiano",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Tailand\xeas",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamita",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Turco",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Polon\xeas",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Holand\xeas",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    4: [{
                        title: "\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "\u041f\u043e\u0440\u0442\u0443\u0433\u0430\u043b\u044c\u0441\u043a\u0438\u0439",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u044b\u0439 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "\u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0439",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u0439\u0441\u043a\u0438\u0439",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "\u0418\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0439",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "\u0422\u0430\u0439\u0441\u043a\u0438\u0439",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "\u0412\u044c\u0435\u0442\u043d\u0430\u043c\u0441\u043a\u0438\u0439",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "\u0422\u0443\u0440\u0435\u0446\u043a\u0438\u0439",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "\u0413\u043e\u043b\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    5: [{
                        title: "Anglais",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Espagnol",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portugais",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Russe",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Fran\xe7ais",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Allemand",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Chinois simplifi\xe9",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Chinois traditionnel",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japonais",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indon\xe9sien",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Italien",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Tha\xef",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamien",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Turc",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Polonais",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "N\xe9erlandais",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    6: [{
                        title: "Englisch",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Spanisch",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portugiesisch",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Russisch",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Franz\xf6sisch",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Deutsch",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Vereinfachtes Chinesisch",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Traditionelles Chinesisch",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japanisch",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indonesisch",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Italienisch",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Thail\xe4ndisch",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamesisch",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "T\xfcrkisch",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Polnisch",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Niederl\xe4ndisch",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    7: [{
                        title: "\u82f1\u8bed",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "\u897f\u73ed\u7259\u8bed",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "\u8461\u8404\u7259\u8bed",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "\u4fc4\u8bed",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "\u6cd5\u8bed ",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "\u5fb7\u8bed",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "\u7b80\u4f53\u4e2d\u6587",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "\u7e41\u4f53\u4e2d\u6587",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "\u65e5\u8bed",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "\u5370\u5c3c\u8bed",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "\u610f\u5927\u5229\u8bed",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "\u6cf0\u8bed",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "\u8d8a\u5357\u8bed",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "\u571f\u8033\u5176\u8bed",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "\u6ce2\u5170\u8bed",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "\u8377\u5170\u8bed",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    8: [{
                        title: "\u82f1\u8a9e",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "\u897f\u73ed\u7259\u8a9e",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "\u8461\u8404\u7259\u8a9e",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "\u4fc4\u8a9e",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "\u6cd5\u8a9e",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "\u5fb7\u8a9e",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "\u7c21\u9ad4\u4e2d\u6587",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "\u7e41\u9ad4\u4e2d\u6587",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "\u65e5\u8a9e",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "\u5370\u5c3c\u8a9e",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "\u610f\u5927\u5229\u8a9e",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "\u6cf0\u8a9e",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "\u8d8a\u5357\u8a9e",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "\u571f\u8033\u5176\u8a9e",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "\u6ce2\u862d\u8a9e",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "\u8377\u862d\u8a9e",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    9: [{
                        title: "\u82f1\u8a9e",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "\u30b9\u30da\u30a4\u30f3\u8a9e",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "\u30dd\u30eb\u30c8\u30ac\u30eb\u8a9e",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "\u30ed\u30b7\u30a2\u8a9e",
                        name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "\u30d5\u30e9\u30f3\u30b9\u8a9e",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "\u30c9\u30a4\u30c4\u8a9e",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "\u7c21\u4f53\u4e2d\u56fd\u8a9e",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "\u7e41\u4f53\u4e2d\u56fd\u8a9e",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "\u65e5\u672c\u8a9e",
                        name: "\u65e5\u672c\u8a9e",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2\u8a9e",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "\u30a4\u30bf\u30ea\u30a2\u8a9e",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "\u30bf\u30a4\u8a9e",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "\u30d9\u30c8\u30ca\u30e0\u8a9e",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "\u30c8\u30eb\u30b3\u8a9e",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "\u30dd\u30fc\u30e9\u30f3\u30c9\u8a9e",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "\u30aa\u30e9\u30f3\u30c0\u8a9e",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    10: [{
                        title: "Bahasa Inggris",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Bahasa Spanyol",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portugis",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Bahasa Rusia",
                        name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Perancis",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Jerman",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Cina Disederhanakan",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Cina Tradisional",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Bahasa Jepang",
                        name: "Japanese",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Bahasa Indonesia",
                        name: "Bahasa Indonesia",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Bahasa Italia",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Bahasa Thailand",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Bahasa Vietnam",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Bahasa Turki",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Bahasa Polandia",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Bahasa Belanda",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    11: [{
                        title: "Inglese",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Spagnolo",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portoghese",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Russo",
                        name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Francese",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Tedesco",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Cinese semplificato",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Cinese tradizionale",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Giapponese",
                        name: "Japanese",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indonesiano",
                        name: "Indonesian",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Italiano",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Tailandese",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamita",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Turco",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Polacco",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Olandese",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    12: [{
                        title: "\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "\u0e2a\u0e40\u0e1b\u0e19",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "\u0e42\u0e1b\u0e23\u0e15\u0e38\u0e40\u0e01\u0e2a",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "\u0e23\u0e31\u0e2a\u0e40\u0e0b\u0e35\u0e22",
                        name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "\u0e1d\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "\u0e40\u0e22\u0e2d\u0e23\u0e21\u0e31\u0e19",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "\u0e08\u0e35\u0e19\u0e15\u0e31\u0e27\u0e22\u0e48\u0e2d",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "\u0e08\u0e35\u0e19\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "\u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19",
                        name: "Japanese",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22",
                        name: "Indonesian",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "\u0e2d\u0e34\u0e15\u0e32\u0e40\u0e25\u0e35\u0e22\u0e19",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "\u0e44\u0e17\u0e22",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "\u0e40\u0e27\u0e35\u0e22\u0e15\u0e19\u0e32\u0e21",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "\u0e15\u0e38\u0e23\u0e01\u0e35",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "\u0e42\u0e1b\u0e41\u0e25\u0e19\u0e14\u0e4c",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "\u0e40\u0e19\u0e40\u0e18\u0e2d\u0e23\u0e4c\u0e41\u0e25\u0e19\u0e14\u0e4c",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    13: [{
                        title: "Ti\u1ebfng Anh",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Ti\u1ebfng T\xe2y Ban Nha",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Ti\u1ebfng B\u1ed3 \u0110\xe0o Nha",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Ti\u1ebfng Nga",
                        name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Ti\u1ebfng Ph\xe1p",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Ti\u1ebfng \u0110\u1ee9c",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Ti\u1ebfng Trung gi\u1ea3n th\u1ec3",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Ti\u1ebfng Trung ph\u1ed3n th\u1ec3",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Ti\u1ebfng Nh\u1eadt",
                        name: "Japanese",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Ti\u1ebfng Indonesia",
                        name: "Indonesian",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Ti\u1ebfng \xdd",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Ti\u1ebfng Th\xe1i",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Ti\u1ebfng Vi\u1ec7t",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Ti\u1ebfng Th\u1ed5 Nh\u0129 K\u1ef3",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Ti\u1ebfng Ba Lan",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Ti\u1ebfng H\xe0 Lan",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    14: [{
                        title: "\u0130ngilizce",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "\u0130spanyolca",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portekizce",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Rus\xe7a",
                        name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Frans\u0131zca",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Almanca",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Basitle\u015ftirilmi\u015f \xc7ince",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Geleneksel \xc7ince",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japonca",
                        name: "Japanese",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Endonezyaca",
                        name: "Indonesian",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "\u0130talyanca",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Tayca",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamca",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "T\xfcrk\xe7e",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Leh\xe7e",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Hollandaca",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    15: [{
                        title: "Angielski",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Hiszpa\u0144ski",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portugalski",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Rosyjski",
                        name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Francuski",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Niemiecki",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Chi\u0144ski uproszczony",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Chi\u0144ski tradycyjny",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japo\u0144ski",
                        name: "Japanese",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indonezyjski",
                        name: "Indonesian",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "W\u0142oski",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Tajski",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Wietnamski",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Turecki",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Polski",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Holenderski",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }],
                    16: [{
                        title: "Engels",
                        name: "English",
                        url: "/",
                        key: "1"
                    }, {
                        title: "Spaans",
                        name: "Espa\xf1ol",
                        url: "/es/",
                        key: "2"
                    }, {
                        title: "Portugees",
                        name: "Portugu\xeas",
                        url: "/pt/",
                        key: "3"
                    }, {
                        title: "Russisch",
                        name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                        url: "/ru/",
                        key: "4"
                    }, {
                        title: "Frans",
                        name: "Fran\xe7ais",
                        url: "/fr/",
                        key: "5"
                    }, {
                        title: "Duits",
                        name: "Deutsch",
                        url: "/de/",
                        key: "6"
                    }, {
                        title: "Vereenvoudigd Chinees",
                        name: "\u7b80\u4f53\u4e2d\u6587",
                        url: "/cn/",
                        key: "7"
                    }, {
                        title: "Traditioneel Chinees",
                        name: "\u6b63\u9ad4\u4e2d\u6587",
                        url: "/tw/",
                        key: "8"
                    }, {
                        title: "Japans",
                        name: "Japanese",
                        url: "/jp/",
                        key: "9"
                    }, {
                        title: "Indonesisch",
                        name: "Indonesian",
                        url: "/id/",
                        key: "10"
                    }, {
                        title: "Italiaans",
                        name: "Italiano",
                        url: "/it/",
                        key: "11"
                    }, {
                        title: "Thais",
                        name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                        url: "/th/",
                        key: "12"
                    }, {
                        title: "Vietnamees",
                        name: "Ti\u1ebfng Vi\u1ec7t",
                        url: "/vi/",
                        key: "13"
                    }, {
                        title: "Turks",
                        name: "T\xfcrk\xe7e",
                        url: "/tr/",
                        key: "14"
                    }, {
                        title: "Pools",
                        name: "Polski",
                        url: "/pl/",
                        key: "15"
                    }, {
                        title: "Nederlands",
                        name: "Nederlands",
                        url: "/nl/",
                        key: "16"
                    }]
                },
                G = a(78479),
                M = (a(18871), a(10518), a(4424)),
                B = a(62830),
                O = a.n(B),
                R = a(43262),
                N = a(79611),
                H = a(86438),
                L = a(19366);

            function W(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(a), !0).forEach((function(t) {
                        (0, o.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function V(e) {
                return e.replace(/(\\u)(\w{4}|\w{2})/gi, (function(e, t, a) {
                    return String.fromCharCode(parseInt(a, 16))
                }))
            }

            function Y(e) {
                for (var t = document.cookie.split("; "), a = 0; a < t.length; a++) {
                    var r = t[a].split("=");
                    if (r[0] == e) try {
                        return decodeURI(V(r[1]))
                    } catch (i) {
                        return V(r[1])
                    }
                }
                return ""
            }

            function Z(e) {
                "number" === typeof e && (e = e.toString());
                for (var t = ""; e.length > 3;) t = "," + e.slice(-3) + t, e = e.slice(0, e.length - 3);
                return e && (t = e + t), t
            }

            function K() {
                var e = navigator.userAgent,
                    t = navigator.userAgent.toLowerCase(),
                    a = /(?:Windows Phone)/.test(e),
                    r = /(?:SymbianOS)/.test(e) || a,
                    i = /(?:Android)/.test(e),
                    o = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
                    n = /(?:Firefox)/.test(e),
                    s = /(?:Chrome|CriOS)/.test(e),
                    _ = /(?:iPad|PlayBook)/.test(e) || i && !/(?:Mobile)/.test(e) || n && /(?:Tablet)/.test(e),
                    c = /(?:iPhone)/.test(e) && !_;
                return {
                    isiOS: o,
                    isTablet: _,
                    isPhone: c,
                    isAndroid: i,
                    isPc: !c && !i && !r,
                    isIE: !!t.match(/msie ([\d.]+)/) || !!t.match(/rv:([\d.]+)\) like gecko/),
                    isSafari: !!t.match(/version\/([\d.]+).*safari/),
                    isChrome: s,
                    isWechat: e.match(/MicroMessenger/i)
                }
            }

            function Q(e) {
                if ((document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset) + (document.documentElement.clientHeight || document.body.clientHeight) - 150 > e.current.offsetTop) return !0
            }

            function X(e, t, a, r, i) {
                return e ? {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: t,
                    description: a,
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: r,
                        ratingCount: i
                    }
                } : null
            }

            function $(e) {
                var t = {
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    name: "",
                    image: {},
                    step: []
                };
                if (!e || !e.featureSteps) return null;
                t.name = e.headingH2, e.sideImage && e.sideImage.length > 0 && (t.image = {
                    "@type": "ImageObject",
                    url: _.Z[e.sideImage[0].volumeId] + e.sideImage[0].filename
                });
                for (var a = 0; a < e.featureSteps.length; a++) t.step.push({
                    "@type": "HowToStep",
                    position: a + 1,
                    text: e.featureSteps[a].stepContent,
                    name: e.featureSteps[a].stepContent
                });
                return t
            }

            function ee(e) {
                var t = {
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    name: "",
                    step: []
                };
                if (!e || !e.featuresFunctionList) return null;
                t.name = e.headingH2;
                for (var a = 0; a < e.featuresFunctionList.length; a++) t.step.push({
                    "@type": "HowToStep",
                    position: a + 1,
                    name: e.featuresFunctionList[a].heading,
                    text: e.featuresFunctionList[a].text,
                    url: e.featuresFunctionList[a].imageJumpLink,
                    image: _.Z[e.featuresFunctionList[a].featureImage[0].volumeId] + e.featuresFunctionList[a].featureImage[0].filename
                });
                return t
            }

            function te() {
                return {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Fotor",
                    url: "https://www.fotor.com/"
                }
            }

            function ae(e) {
                return {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: e.map((function(e, t) {
                        var a = {
                            "@type": "ListItem",
                            position: t + 1,
                            name: e.label
                        };
                        return e.link && (a = J(J({}, a), {}, {
                            item: e.link
                        })), a
                    }))
                }
            }

            function re(e) {
                return 1 == e.length ? ae(e[0]) : e && e.length > 0 && e.map((function(e) {
                    return ae(e)
                }))
            }

            function ie(e) {
                var t = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: []
                };
                if (!e || !e.qnaList) return null;
                for (var a = 0; a < e.qnaList.length; a++) t.mainEntity.push({
                    "@type": "Question",
                    name: e.qnaList[a].question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: e.qnaList[a].answer
                    }
                });
                return t
            }

            function oe(e) {
                var t = {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: "",
                    image: [],
                    datePublished: "",
                    dateModified: "",
                    author: []
                };
                return e ? (t.headline = e.headline, t.datePublished = e.datePublished, t.dateModified = e.dateModified, t.image = e.image, t.author = e.author, t) : null
            }

            function ne() {
                return {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Fotor",
                    url: "https://www.fotor.com/",
                    logo: "https://pub-static.fotor.com/anon_home/fotor-logo.png",
                    contactPoint: [{
                        "@type": "ContactPoint",
                        url: "https://support.fotor.com/hc/en-us",
                        contactType: "Customer Support"
                    }],
                    sameAs: ["https://www.facebook.com/fotorapp/", "https://twitter.com/fotor_com", "https://www.instagram.com/fotor_app/", "https://www.youtube.com/@Fotor2012", "https://www.pinterest.com/fotor2012/"]
                }
            }

            function se(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2592e6,
                    r = window.document.location.hostname;
                "www.fotor.com" !== r && "test-www.fotor.com" !== r || (r = ".fotor.com");
                var i = new Date;
                i.setTime(i.getTime() + a), document.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + i.toGMTString() + ";path=/;domain=" + r
            }

            function _e(e) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = "https://pub-static.fotor.com/static/web/lib/account/bundle.js", document.head.appendChild(t), t.onload = function() {
                    e && e()
                }
            }

            function ce(e) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = "https://pub-static.fotor.com/static/web/lib/payment/bundle.js", t.onload = function() {
                    e && e()
                }, document.head.appendChild(t)
            }
            var pe = function() {
                    return {
                        headingH1: "Image Design Tools at Your Fingertips",
                        subheading: "<p>With professional templates & design resources, Fotor helps you bring your creative vision to life. Start Free Trial Now.</p>",
                        buttonColor: "blue",
                        pageLink: [{
                            text: "Get Started Now",
                            href: "https://landingpage",
                            openInNewTab: !0,
                            nofollow: !0
                        }],
                        alignment: "left"
                    }
                },
                ue = function() {
                    return {
                        headingH1: "Quick & Easy to Create Awesome Youtube Banner",
                        subheading: "<p>All Fotor editable YouTube banner templates can be customized in a flash to give your YouTube channel superior style and branded look. Try for free!</p>",
                        buttonColor: "blue",
                        pageLink: [{
                            text: "Create a YouTube banner",
                            href: "https://landingpage",
                            openInNewTab: !0,
                            nofollow: !0,
                            imageType: "youtube-banner"
                        }],
                        alignment: "left"
                    }
                },
                le = function() {
                    return {
                        headingH1: "Easy to Create Professional YouTube Thumbnail",
                        subheading: "<p>Custom awesome-looking Youtube thumbnail with ease in minutes to attract more views for your videos. Head to Fotor's thumbnail maker now!</p>",
                        buttonColor: "blue",
                        pageLink: [{
                            text: "Create a YouTube thumbnail",
                            href: "https://landingpage",
                            openInNewTab: !0,
                            nofollow: !0,
                            imageType: "youtube-thumbnail"
                        }],
                        alignment: "left"
                    }
                },
                de = function() {
                    return {
                        headingH1: "Easy-to-use Instagram Posts Maker Online",
                        subheading: "<p>Fotor helps you to create engaging Instagram posts from well-designed Instagram post templates easily. Sign up for free!</p>",
                        buttonColor: "blue",
                        pageLink: [{
                            text: "Create a Instagram Post",
                            href: "https://landingpage",
                            openInNewTab: !0,
                            nofollow: !0,
                            imageType: "instagram-post"
                        }],
                        alignment: "left"
                    }
                },
                me = function() {
                    return {
                        headingH1: "Quick & Easy to Make Stunning Facebook Post",
                        subheading: "<p>You can make beautiful facebook posts to attract more audience. Start from popular Facebook Post Templates and Layouts to personalize in minutes.</p>",
                        buttonColor: "blue",
                        pageLink: [{
                            text: "Create a Facebook Post",
                            href: "https://landingpage",
                            openInNewTab: !0,
                            nofollow: !0,
                            imageType: "facebook-post"
                        }],
                        alignment: "left"
                    }
                },
                ge = {
                    "youtube-banner": c.ZP + "design/project/create?category=9594c943f5d2453ba72ba1d41b7155ce",
                    "youtube-thumbnail": c.ZP + "design/project/create?category=493a984248904fbdb868fe0fd1c395bb",
                    "facebook-post": c.ZP + "design/project/create?category=a2c8b818acb74da6982ece0b478a2f2f",
                    "instagram-post": c.ZP + "design/project/create?category=b31749015e7f45f6928871196b448c47"
                },
                fe = function(e) {
                    var t = c.ZP;
                    return e && (t = ge[e] ? ge[e] : t), t
                };

            function he() {
                return window.__isInFotorAppBrowser || (window.__isInFotorAppBrowser = "true" === (0, H.ej)("FotorInnerBrowser") || (0, H.ej)("language")), window.__isInFotorAppBrowser
            }

            function be(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K(),
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "fotor://",
                    r = t.isAndroid,
                    i = t.isiOS;

                function o() {
                    location.assign(e)
                }
                i ? o() : r ? (a && location.assign(a), o()) : o()
            }

            function ye(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K(),
                    a = u[t.isiOS ? "ios" : "android"];
                return a[e]
            }
            var ve = function(e) {
                var t = e.campaign,
                    a = void 0 === t ? "" : t,
                    r = e.adgroup,
                    i = void 0 === r ? "" : r,
                    o = e.creative,
                    n = void 0 === o ? "" : o,
                    s = e.deep_link,
                    _ = void 0 === s ? "" : s,
                    c = e.redirect_ios,
                    p = void 0 === c ? "" : c,
                    u = e.redirect_android,
                    l = void 0 === u ? "" : u,
                    d = e.theme,
                    m = void 0 === d ? "" : d,
                    g = e.channel,
                    f = void 0 === g ? "" : g,
                    h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K(),
                    b = h.isiOS ? "ios" : "android",
                    y = T[b],
                    v = [];
                return a && v.push("campaign=".concat(encodeURIComponent(a))), i && v.push("adgroup=".concat(encodeURIComponent(i))), n && v.push("creative=".concat(encodeURIComponent(n))), m && v.push("theme=".concat(encodeURIComponent(m))), f && v.push("channel=".concat(encodeURIComponent(f))), _ && v.push("deep_link=".concat(encodeURIComponent(_))), p && v.push("redirect_ios=".concat(encodeURIComponent(p))), l && v.push("redirect_android=".concat(encodeURIComponent(l))), y + "?" + v.join("&")
            };

            function we(e, t, a) {
                return e + (-1 !== e.indexOf("?") ? "&" : "?") + "url=".concat(t, "&adgroup=").concat(a)
            }
            var ke = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K(),
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "homepage_nav_button",
                    r = x[e] || x[e + "/"];
                if (r) {
                    var i = D(r, t.isiOS ? "ios" : "android");
                    if (i) {
                        var o = i.campaign || e,
                            n = i.deep_link;
                        return n && (n = we(n, o, a)), ve({
                            campaign: o,
                            theme: i.theme,
                            channel: i.channel,
                            adgroup: a,
                            deep_link: n,
                            creative: i.creative,
                            redirect_ios: i.redirect_ios,
                            redirect_android: i.redirect_android
                        }, t)
                    }
                }
                return ""
            };

            function Ae(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fotor://",
                    a = (0, L.D)();
                return ve({
                    campaign: a,
                    adgroup: e,
                    deep_link: we(t, a, e)
                })
            }

            function Pe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K(),
                    a = (0, L.D)(),
                    r = ke(a, t, e);
                if (r) {
                    var i = x[a];
                    E()("".concat(i, "&url=").concat(window.location.host + window.location.pathname))
                }
                return r
            }

            function Ie(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K(),
                    a = (0, L.D)(),
                    r = location.hostname,
                    i = t.isiOS ? "ios" : "android";
                if ("homepage_nav_button" === e) {
                    var o = f[i];
                    return o.hasOwnProperty(r) ? o[r] : o.hasOwnProperty(a) ? o[a] : u[i].general_nav_button
                }
                if ("custom_smart_banner" === e) {
                    var n = h[i];
                    return n.hasOwnProperty(r) ? n[r] : n.hasOwnProperty(a) ? n[a] : u[i].generic_top_banner
                }
                if ("continue_in_the_app" === e) {
                    var s = b[i];
                    return s.hasOwnProperty(r) ? s[r] : s.hasOwnProperty(a) ? s[a] : u[i].general_continue_in_the_app
                }
                if ("hover_button" === e) {
                    var _ = y[i];
                    return _.hasOwnProperty(r) ? _[r] : _.hasOwnProperty(a) ? _[a] : u[i].general_hover_button
                }
                return u[i].general_all
            }

            function Fe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K(),
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "fotor://";
                be(ye(e, t), t, a)
            }

            function Se(e) {
                N.Z.sendTracker("fotor_web$event$open_app_visit", e)
            }

            function qe(e) {
                var t = e.cmsPageLink,
                    a = e.adgroup,
                    r = e.client,
                    i = void 0 === r ? K() : r,
                    o = e.schema,
                    n = void 0 === o ? "fotor://" : o,
                    s = e.stayOnWebHandle,
                    _ = e.openAppBoxDescPrefix,
                    c = (0, L.D)();
                if ((["/features/disney-character-generator", "/features/photo-to-anime", "/features/ai-illustration-generator", "/features/anime-ai-art-generator"].some((function(e) {
                        return c.indexOf(e) > -1
                    })) || ["/features/backgrounds", "/id/features/backgrounds", "/features/hairstyle-changer"].some((function(e) {
                        return c.startsWith(e)
                    }))) && window.mobileCommon) {
                    var p, u, l = window.mobileCommon.FTOpenAppConfirmInstance(),
                        d = window.currentPageDisplayLang || "en_US",
                        m = _ ? {
                            desc: _.charAt(0).toLocaleUpperCase() + _.toLocaleLowerCase().slice(1).replace(" ai ", " AI ") + (["zh_CN", "zh_TW", "ja_JP"].includes(d) ? "\uff0c" : ", ") + (null === (p = window.mobileCommon.i18n[d]) || void 0 === p || null === (u = p.mobile_open_app_fixed_popup_desc) || void 0 === u ? void 0 : u.toLocaleLowerCase())
                        } : void 0;
                    l.show({
                        langMap: m,
                        openAppHandle: function() {
                            xe(t, a, i, n), l.hide()
                        },
                        stayOnWebHandle: function() {
                            s && s()
                        }
                    })
                } else xe(t, a, i, n)
            }

            function xe(e, t) {
                var a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : K(),
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "fotor://",
                    o = Pe(t, r);
                if (o) return Se({
                    position: t,
                    url: (0, L.D)(),
                    type: "adjust",
                    key: "adjust"
                }), be(o, r, ""), o;
                var n, s = null === e || void 0 === e || null === (a = e[0]) || void 0 === a ? void 0 : a.appSchema;
                if (s) {
                    var _ = Ae(t, s);
                    return Se({
                        position: t,
                        url: (0, L.D)(),
                        type: "adjust",
                        key: "adjust"
                    }), be(_, r, ""), _
                }
                var c = Ie(t, r),
                    p = Object.prototype.toString.call(c).toLowerCase();
                return "[object object]" === p ? (n = c.link, i = c.schema) : n = c, n ? (Se({
                    position: t,
                    url: (0, L.D)(),
                    type: "sa",
                    key: n.slice(-2)
                }), be(n, r, i), n) : void 0
            }

            function Ce(e, t) {
                return !(!e || !["/features/one-tap-enhance"].find((function(e) {
                    return -1 !== t.indexOf(e)
                })) && "/" !== t)
            }

            function De(e, t) {
                if (t)
                    for (var a = t.split("; "), r = 0; r < a.length; r++) {
                        var i = a[r].split("=");
                        if (i[0] == e) try {
                            return decodeURI(V(i[1]))
                        } catch (o) {
                            return V(i[1])
                        }
                    }
                return ""
            }
            var ze = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".jpg,.jpeg,.png",
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new Promise((function(a) {
                        var r = document.createElement("input");
                        r.type = "file", r.accept = e, r.multiple = t, r.style.display = "none", document.body.append(r), r.onchange = function(e) {
                            e.target ? a((0, i.Z)(w()(e, ["target", "files"]))) : a([]), r.remove()
                        }, r.click()
                    }))
                },
                Te = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    if (e && e.length) {
                        var r = e[0].size > 1048576 * t ? q.Am.error(a) : "";
                        return r && setTimeout((function() {
                            q.Am.dismiss(r)
                        }), 3e3), !r
                    }
                    return !0
                },
                je = function(e, t) {
                    return new Promise((function(a) {
                        var r = null;
                        if (e && e.length) {
                            var i = new Image;
                            i.crossOrigin = "anonymous", i.src = window.URL.createObjectURL(e[0]), i.onload = function() {
                                if (i.width > 8192 || i.width < 50 || i.height > 8192 || i.height < 50) {
                                    a(null);
                                    var e = q.Am.error(t);
                                    e && setTimeout((function() {
                                        q.Am.dismiss(e)
                                    }), 3e3)
                                }
                                r = {
                                    width: i.width,
                                    height: i.height,
                                    blob: i.src
                                }, i.remove(), a(r || null)
                            }
                        }
                    }))
                },
                Ee = function(e) {
                    for (var t = window.location.search.substring(1).split("&"), a = 0; a < t.length; a++) {
                        var r = t[a].split("=");
                        if (r[0] == e) return r[1]
                    }
                    return !1
                },
                Ue = function(e) {
                    var t;
                    return e.indexOf("/page/") && (t = e.match(/\d+/g)), t ? t[0] : 1
                },
                Ge = {
                    dots: !0,
                    infinite: !1,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                },
                Me = {
                    dots: !1,
                    infinite: !1,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 0,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !1,
                            dots: !1
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !1,
                            dots: !1
                        }
                    }, {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !1,
                            dots: !1
                        }
                    }]
                },
                Be = {
                    dots: !1,
                    infinite: !1,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !1,
                            dots: !1
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !1,
                            dots: !1
                        }
                    }, {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !1,
                            dots: !1
                        }
                    }]
                },
                Oe = function(e, t, a) {
                    var r = U[e];
                    if ("home" === t) return a ? S()(a, (function(e) {
                        return function(e, t) {
                            var a = e.siteId;
                            return J({}, I()(t, (function(e) {
                                return e.key == a
                            })))
                        }(e, r)
                    })) : r.slice(0, 10);
                    if ("feature" === t) return a ? S()(a, (function(e) {
                        return function(e, t) {
                            var a = e.slug,
                                r = e.siteId,
                                i = e.canonical,
                                o = e.featurePageUrlDirectory,
                                n = A()(o),
                                s = I()(t, (function(e) {
                                    return e.key == r
                                }));
                            return J(J({}, s), {}, {
                                url: i || "".concat(s.url).concat(n.slug, "/").concat(a, "/")
                            })
                        }(e, r)
                    })) : [I()(r, (function(t) {
                        return t.key == e
                    }))];
                    if ("blogHome" === t) return S()(a, (function(e) {
                        return function(e, t) {
                            var a = e.siteId,
                                r = I()(t, (function(e) {
                                    return e.key == a
                                }));
                            return J(J({}, r), {}, {
                                url: "".concat(r.url, "blog/")
                            })
                        }(e, r)
                    }));
                    if ("blogCategory" === t && a) return S()(a, (function(e) {
                        return function(e, t) {
                            var a = e.slug,
                                r = e.siteId,
                                i = e.canonical,
                                o = I()(t, (function(e) {
                                    return e.key == r
                                }));
                            return J(J({}, o), {}, {
                                url: i || "".concat(o.url).concat(a, "/")
                            })
                        }(e, r)
                    }));
                    if ("blogDetail" === t && a) return S()(a, (function(e) {
                        return function(e, t) {
                            var a = e.slug,
                                r = e.siteId,
                                i = e.canonical,
                                o = I()(t, (function(e) {
                                    return e.key == r
                                }));
                            return J(J({}, o), {}, {
                                url: i || "".concat(o.url, "blog/").concat(a, "/")
                            })
                        }(e, r)
                    }));
                    if ("templates" === t) {
                        var i = G.Z.templateCanonicalurl.replace(/^(cn|jp|es|pt|ru|fr|de|tw|id|it|th|vi|tr|pl|nl")\//, "");
                        i.indexOf("?") > -1 && (i = i.split("?")[0]);
                        return S()(["1", "7", "9"], (function(e) {
                            return function(e, t, a) {
                                var r = I()(t, (function(t) {
                                    return t.key == e
                                }));
                                return J(J({}, r), {}, {
                                    url: "".concat(r.url).concat(a)
                                })
                            }(e, r, i)
                        }))
                    }
                    return "templates_details" === t || "templates_search" === t ? null : "creditsActivity" === t ? r.map((function(e) {
                        return J(J({}, e), {}, {
                            url: e.url + "rewards/"
                        })
                    })) : null
                },
                Re = function(e) {
                    if (!e) return "";
                    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(e) ? e : "".concat(c.Qu).concat(e)
                },
                Ne = {
                    USD: "US$",
                    EUR: "\u20ac",
                    BRL: "R$",
                    CAD: "CA$",
                    CHF: "CHF",
                    JPY: "JP\xa5",
                    RUB: "RUB",
                    GBP: "\xa3",
                    AUD: "AU$",
                    HKD: "HK$",
                    TWD: "NT$",
                    INR: "\u20b9"
                },
                He = "",
                Le = "",
                We = "",
                Je = function(e) {
                    return [{
                        id: 0,
                        value: 0,
                        title: e.price_yearly_switch
                    }, {
                        id: 1,
                        value: 1,
                        title: e.price_monthly_switch
                    }]
                },
                Ve = {
                    AD: "USD",
                    AE: "USD",
                    AF: "USD",
                    AG: "USD",
                    AI: "USD",
                    AL: "USD",
                    AM: "USD",
                    AO: "USD",
                    AQ: "USD",
                    AR: "USD",
                    AS: "USD",
                    AT: "EUR",
                    AU: "AUD",
                    AW: "USD",
                    AX: "USD",
                    AZ: "USD",
                    BA: "USD",
                    BB: "USD",
                    BD: "USD",
                    BE: "EUR",
                    BF: "USD",
                    BG: "USD",
                    BH: "USD",
                    BI: "USD",
                    BJ: "USD",
                    BL: "USD",
                    BM: "USD",
                    BN: "USD",
                    BO: "USD",
                    BQ: "USD",
                    BR: "BRL",
                    BS: "USD",
                    BT: "USD",
                    BV: "USD",
                    BW: "USD",
                    BY: "USD",
                    BZ: "USD",
                    CA: "CAD",
                    CC: "USD",
                    CF: "USD",
                    CH: "CHF",
                    CL: "USD",
                    CM: "USD",
                    CO: "USD",
                    CR: "USD",
                    CU: "USD",
                    CV: "USD",
                    CX: "USD",
                    CY: "EUR",
                    CZ: "USD",
                    DE: "EUR",
                    DJ: "USD",
                    DK: "USD",
                    DM: "USD",
                    DO: "USD",
                    DZ: "USD",
                    EC: "USD",
                    EE: "EUR",
                    EG: "USD",
                    EH: "USD",
                    ER: "USD",
                    ES: "EUR",
                    FI: "EUR",
                    FJ: "USD",
                    FK: "USD",
                    FM: "USD",
                    FO: "USD",
                    FR: "EUR",
                    GA: "USD",
                    GD: "USD",
                    GE: "USD",
                    GF: "USD",
                    GH: "USD",
                    GI: "USD",
                    GL: "USD",
                    GN: "USD",
                    GP: "USD",
                    GQ: "USD",
                    GR: "EUR",
                    GS: "USD",
                    GT: "USD",
                    GU: "USD",
                    GW: "USD",
                    GY: "USD",
                    HK: "HKD",
                    HM: "USD",
                    HN: "USD",
                    HR: "USD",
                    HT: "USD",
                    HU: "USD",
                    ID: "USD",
                    IE: "EUR",
                    IL: "USD",
                    IM: "USD",
                    IN: "INR",
                    IO: "USD",
                    IQ: "USD",
                    IR: "USD",
                    IS: "USD",
                    IT: "EUR",
                    JE: "USD",
                    JM: "USD",
                    JO: "USD",
                    JP: "JPY",
                    KH: "USD",
                    KI: "USD",
                    KM: "USD",
                    KW: "USD",
                    KY: "USD",
                    LB: "USD",
                    LI: "USD",
                    LK: "USD",
                    LR: "USD",
                    LS: "USD",
                    LT: "EUR",
                    LU: "EUR",
                    LV: "EUR",
                    LY: "USD",
                    MA: "USD",
                    MC: "USD",
                    MD: "USD",
                    ME: "USD",
                    MF: "USD",
                    MG: "USD",
                    MH: "USD",
                    MK: "USD",
                    ML: "USD",
                    MM: "USD",
                    MO: "USD",
                    MQ: "USD",
                    MR: "USD",
                    MS: "USD",
                    MT: "EUR",
                    MV: "USD",
                    MW: "USD",
                    MX: "USD",
                    MY: "USD",
                    NA: "USD",
                    NE: "USD",
                    NF: "USD",
                    NG: "USD",
                    NI: "USD",
                    NL: "EUR",
                    NO: "USD",
                    NP: "USD",
                    NR: "USD",
                    OM: "USD",
                    PA: "USD",
                    PE: "USD",
                    PF: "USD",
                    PG: "USD",
                    PH: "USD",
                    PK: "USD",
                    PL: "USD",
                    PN: "USD",
                    PR: "USD",
                    PS: "USD",
                    PW: "USD",
                    PY: "USD",
                    QA: "USD",
                    RE: "USD",
                    RO: "USD",
                    RS: "USD",
                    RU: "RUB",
                    RW: "USD",
                    SB: "USD",
                    SC: "USD",
                    SD: "USD",
                    SE: "USD",
                    SG: "USD",
                    SI: "EUR",
                    SJ: "USD",
                    SK: "EUR",
                    SL: "USD",
                    SM: "USD",
                    SN: "USD",
                    SO: "USD",
                    SR: "USD",
                    SS: "USD",
                    ST: "USD",
                    SV: "USD",
                    SY: "USD",
                    SZ: "USD",
                    TC: "USD",
                    TD: "USD",
                    TG: "USD",
                    TH: "USD",
                    TK: "USD",
                    TL: "USD",
                    TN: "USD",
                    TO: "USD",
                    TR: "USD",
                    TV: "USD",
                    TZ: "USD",
                    UA: "USD",
                    UG: "USD",
                    US: "USD",
                    UY: "USD",
                    VA: "USD",
                    VE: "USD",
                    VG: "USD",
                    VI: "USD",
                    VN: "USD",
                    WF: "USD",
                    WS: "USD",
                    YE: "USD",
                    YT: "USD",
                    ZA: "USD",
                    ZM: "USD",
                    ZW: "USD",
                    CN: "USD",
                    CG: "USD",
                    CD: "USD",
                    MZ: "USD",
                    GG: "USD",
                    GM: "USD",
                    MP: "USD",
                    ET: "USD",
                    NC: "USD",
                    VU: "USD",
                    TF: "USD",
                    NU: "USD",
                    UM: "USD",
                    CK: "USD",
                    GB: "GBP",
                    TT: "USD",
                    VC: "USD",
                    TW: "TWD",
                    NZ: "USD",
                    SA: "USD",
                    LA: "USD",
                    KP: "USD",
                    KR: "USD",
                    PT: "EUR",
                    KG: "USD",
                    KZ: "USD",
                    TJ: "USD",
                    TM: "USD",
                    UZ: "USD",
                    KN: "USD",
                    PM: "USD",
                    SH: "USD",
                    LC: "USD",
                    MU: "USD",
                    CI: "USD",
                    KE: "USD",
                    MN: "USD"
                },
                Ye = function(e) {
                    if (!e) return "";
                    var t = e.type,
                        a = e.totalAmount,
                        r = e.creditsQuantity,
                        i = e.monthAmount;
                    if ("once" == t) {
                        var o = (a / r).toFixed(3);
                        return "0" == o.charAt(o.length - 1) && (o = o.substring(0, o.length - 1)), o
                    }
                    if ("subscription" == t) {
                        var n = (i / r).toFixed(3);
                        return "0" == n.charAt(n.length - 1) && (n = n.substring(0, n.length - 1)), n
                    }
                    return ""
                },
                Ze = function(e, t) {
                    if (!e) return "";
                    var a = e.canBy,
                        r = e.codeType,
                        i = e.percentOff,
                        o = e.type;
                    if (!a) return t.price_page_try_now;
                    if (!r) return "once" === o ? t.price_page_buy_now : t.price_page_subscribe_now;
                    if ("try" == r || "try_discount" == r) return t.price_page_free_trial;
                    if ("discount" === r && i) {
                        var n = {};
                        return n.discount_cn = (100 - i) / 10, n.discount_en = i, n.discount_jp = i / 10,
                            function(e, t) {
                                if (e && "[object Object]" === Object.prototype.toString.call(t))
                                    for (var a in t) e = e.replace(new RegExp("{".concat(a, "}"), "g"), t[a]);
                                return e
                            }(t.price_page_activity_btn_discount, n)
                    }
                },
                Ke = "FotorFeatureDB",
                Qe = "userUploadImage",
                Xe = 1,
                $e = function() {
                    var e = (0, r.Z)(s().mark((function e(t, a, r, i, o, n) {
                        var _, c, p;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, M.X3)(t, r, {
                                        upgrade: function(e, t, r, i, o) {
                                            e.createObjectStore(a)
                                        },
                                        blocked: function(e, t, a) {},
                                        blocking: function(e, t, a) {},
                                        terminated: function() {}
                                    });
                                case 2:
                                    if (_ = e.sent, !(i && i.length > 0)) {
                                        e.next = 20;
                                        break
                                    }
                                    return c = (new Date).getTime(), p = "".concat(O()(), "_").concat(c), e.prev = 6, e.next = 9, _.put(a, i[0], p);
                                case 9:
                                    e.sent, e.next = 17;
                                    break;
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(6), console.log(e.t0), n(""), e.abrupt("return");
                                case 17:
                                    n(p, o), e.next = 21;
                                    break;
                                case 20:
                                    n("");
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 12]
                        ])
                    })));
                    return function(t, a, r, i, o, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                et = ["click", "drag", "example_"],
                tt = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    window.sensors && window.sensors.track(e, t)
                },
                at = function(e) {
                    if (e && e.length > 0) {
                        var t = null,
                            a = e.map((function(e) {
                                var a = e.siteId,
                                    r = e.slug,
                                    i = e.canonical,
                                    o = e.featurePageUrlDirectory,
                                    n = "";
                                if (i) n = i;
                                else if (o && o.length > 0) {
                                    var s = o[0].slug;
                                    n = c.ZP + (1 != a ? R.$L[a] + "/" : "") + s + "/" + r
                                }
                                return 1 == a && (t = {
                                    hrefLang: "x-default",
                                    href: n
                                }), {
                                    hrefLang: R.fc[a],
                                    href: n
                                }
                            }));
                        return t && a.unshift(t), a
                    }
                    return null
                },
                rt = function(e) {
                    var t, a, r, i, o, n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (!e) return !1;
                    var _ = (null === (t = window) || void 0 === t ? void 0 : t.innerHeight) || (null === (a = document) || void 0 === a || null === (r = a.documentElement) || void 0 === r ? void 0 : r.clientHeight),
                        c = (null === (i = window) || void 0 === i ? void 0 : i.innerWidth) || (null === (o = document) || void 0 === o || null === (n = o.documentElement) || void 0 === n ? void 0 : n.clientWidth),
                        p = e.getBoundingClientRect(),
                        u = p.top,
                        l = p.left,
                        d = p.bottom,
                        m = p.right,
                        g = u >= 0 && l >= 0 && d - (null === e || void 0 === e ? void 0 : e.offsetHeight) <= _ + s && m <= c;
                    return g
                },
                it = function(e) {
                    return J(J({}, e), {}, {
                        iconUrl: Re(e.iconUrl),
                        imgUrl: Re(e.imgUrl)
                    })
                },
                ot = function(e) {
                    return e.map((function(e) {
                        return {
                            pageId: e.pageId,
                            parentId: e.parentId,
                            thumb: Re(e.thumb),
                            contentText: e.contentText
                        }
                    }))
                }
        },
        86438: function(e, t, a) {
            "use strict";
            a.d(t, {
                eT: function() {
                    return c
                },
                ej: function() {
                    return p
                },
                fB: function() {
                    return u
                }
            });
            var r = a(20640),
                i = a.n(r),
                o = a(38388),
                n = a(91632),
                s = a(84706),
                _ = a(79611),
                c = function(e, t, a) {
                    var r = (window.screen.availHeight - 30 - 450) / 2,
                        i = (window.screen.availWidth - 10 - 650) / 2,
                        o = window.open("about:blank", "Fotor", "width=650, height=450, top=" + r + ", left=" + i),
                        n = encodeURIComponent(t.url),
                        s = "";
                    switch (a || _.Z.sendTracker("fotor_web$click_up$share_website", {
                        location: window.location.href,
                        button_position: e
                    }), e) {
                        case "facebook":
                            s = "https://www.facebook.com/sharer/sharer.php?u=" + n, o.title = "Share to Facebook", o.location.href = s;
                            break;
                        case "twitter":
                            var c;
                            s = "https://twitter.com/share?source=" + n + "&url=" + n + "&text=" + encodeURIComponent(null !== (c = t.description) && void 0 !== c ? c : ""), o.title = "Share to Twitter", o.location.href = s;
                            break;
                        case "tumblr":
                            var p;
                            s = "https://www.tumblr.com/widgets/share/tool?shareSource=legacy&url=" + n + "&posttype=link&title=" + encodeURIComponent(null !== (p = t.title) && void 0 !== p ? p : "") + "&content=" + n, o.title = "Share to Tumblr", o.location.href = s;
                            break;
                        case "pinterest":
                            var u;
                            s = "https://pinterest.com/pin/create/button/?url=" + n + "&media=" + t.thumb + "&description=" + encodeURIComponent(null !== (u = t.description) && void 0 !== u ? u : ""), o.title = "Share to Pinterest", o.location.href = s;
                            break;
                        case "facebookmsg":
                            s = "https://www.facebook.com/dialog/send?" + "app_id=".concat("242107232563837"), s += "&link=" + n, s += "&redirect_uri=" + n, o.title = "Send Facebook Message", o.location.href = s;
                            break;
                        case "linkedin":
                            s = "https://www.linkedin.com/shareArticle?mini=true&url=" + n, o.title = "Share to Linkedin", o.location.href = s
                    }
                },
                p = function(e) {
                    for (var t = e + "=", a = window && window.document.cookie.split(";"), r = 0; r < a.length; r++) {
                        var i = a[r].trim();
                        if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                    }
                    return ""
                },
                u = function(e) {
                    if (i()(e)) {
                        _.Z.sendTracker("fotor_web$click_up$share_website", {
                            location: window.location.href,
                            button_position: "copyLink"
                        });
                        var t = s.Am.success((0, n.Z)("copy_success") || o.Z[p("locale")].copy_success);
                        setTimeout((function() {
                            s.Am.dismiss(t)
                        }), 3e3)
                    }
                }
        },
        24756: function(e, t, a) {
            "use strict";
            var r = a(30266),
                i = a(68216),
                o = a(25997),
                n = a(92809),
                s = a(809),
                _ = a.n(s),
                c = a(27361),
                p = a.n(c),
                u = a(90520),
                l = new(function() {
                    function e() {
                        (0, i.Z)(this, e), (0, n.Z)(this, "needRefsh", !0)
                    }
                    return (0, o.Z)(e, [{
                        key: "loginSuccessCall",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e() {
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "showLoginModal",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.needRefsh,
                                a = void 0 === t || t;
                            this.needRefsh = a
                        }
                    }, {
                        key: "isRedeay",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e() {
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            window.login || (0, u.QK)((function() {}));
                                        case 1:
                                            if (window.login) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, new Promise((function(e) {
                                                return setTimeout(e, 200)
                                            }));
                                        case 4:
                                            e.next = 1;
                                            break;
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "login",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e(t) {
                                var a, i, o, n, s, c, p;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.sensorsData, i = t.signType, o = void 0 === i ? "login" : i, n = t.isShowScenes, s = void 0 === n || n, c = t.otherParm, p = void 0 === c ? null : c, e.next = 3, this.isRedeay();
                                        case 3:
                                            return e.abrupt("return", new Promise(function() {
                                                var e = (0, r.Z)(_().mark((function e(t) {
                                                    return _().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                window.login.showLogin(o, (function(e) {
                                                                    [0, 1, 2, 5, 6, 3].includes(e.code) ? t(!0) : t(!1)
                                                                }), "", a, s, p);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isLogin",
                        value: function() {
                            var e = (0, r.Z)(_().mark((function e() {
                                var t;
                                return _().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.isRedeay();
                                        case 2:
                                            return e.next = 4, window.login.FTGetLoginState();
                                        case 4:
                                            return t = e.sent, e.abrupt("return", "000" === p()(t, ["code"]));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), e
                }());
            t.Z = l
        },
        21233: function(e) {
            e.exports = {
                imageLoading: "TemplateUtils_imageLoading__2jjLb",
                "ant-skeleton-loading": "TemplateUtils_ant-skeleton-loading__bJfp7",
                isLight: "TemplateUtils_isLight__3uBUE",
                imageLoadingDelay1: "TemplateUtils_imageLoadingDelay1__2Jpp0",
                imageLoadingDelay2: "TemplateUtils_imageLoadingDelay2__SFxzy",
                imageLoadingDelay3: "TemplateUtils_imageLoadingDelay3__3cFaa",
                imageLoadingDelay4: "TemplateUtils_imageLoadingDelay4__3p8fU",
                imageLoadingDelay5: "TemplateUtils_imageLoadingDelay5__1l3am",
                imageLoadingDelay6: "TemplateUtils_imageLoadingDelay6__3hMXx",
                imageLoadingDelay7: "TemplateUtils_imageLoadingDelay7__2eQBb",
                imageLoadingDelay8: "TemplateUtils_imageLoadingDelay8__3MbfQ"
            }
        }
    }
]);