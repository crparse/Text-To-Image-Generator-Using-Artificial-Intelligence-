(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9128], {
        99128: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return q
                }
            });
            var a = t(92809),
                r = t(59748),
                o = t(86010),
                c = t(7459),
                i = t(91742),
                _ = t(27706),
                s = t.n(_),
                l = t(43388),
                u = t.n(l),
                d = t(5152),
                f = t(8311);

            function g(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? g(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var h = (0, d.default)((function() {
                    return t.e(4197).then(t.bind(t, 74197))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [74197]
                        },
                        modules: ["../components/feature-sections/FaqSection/FaqSection.tsx -> assets/icons/arrow-right.svg"]
                    }
                }),
                q = function(e) {
                    var n = e.data,
                        t = n.qnaList,
                        a = n.backgroundGradient,
                        _ = t.map((function(e) {
                            return p(p({}, e), {}, {
                                expand: !1
                            })
                        })),
                        l = (0, r.useState)(_),
                        d = l[0],
                        g = l[1];
                    return (0, f.tZ)("section", {
                        className: (0, o.Z)(u().section, u()[n.backgroundColor] || u().white),
                        style: a ? {
                            backgroundColor: "".concat(a, " !important")
                        } : {},
                        children: (0, f.BX)(i.Z, {
                            children: [(0, f.tZ)(c.Z, {
                                heading: n.headingH2,
                                classNameH2: "white" === n.backgroundColor || "gray" === n.backgroundColor ? u().font_black : u().font_white
                            }), (0, f.tZ)("div", {
                                className: (0, o.Z)(s().faqBox, "white" !== n.backgroundColor ? s().faqBoxBlack : ""),
                                children: d.map((function(e, t) {
                                    return (0, f.BX)("div", {
                                        className: (0, o.Z)(s().faqEntry, s().active, "black" === n.contentBackgroundColor ? s().contentBlack : ""),
                                        children: [(0, f.BX)("div", {
                                            className: s().faqEntry__question,
                                            onClick: function() {
                                                ! function(e) {
                                                    var n = d.map((function(n, t) {
                                                        return t === e ? p(p({}, n), {}, {
                                                            expand: !n.expand
                                                        }) : n
                                                    }));
                                                    g(n)
                                                }(t)
                                            },
                                            children: [(0, f.tZ)("div", {
                                                className: s().row,
                                                children: (0, f.tZ)("h3", {
                                                    className: s().faqEntry__title,
                                                    children: e.question
                                                })
                                            }), (0, f.tZ)(h, {
                                                className: (0, o.Z)(s().arrow, (null === e || void 0 === e ? void 0 : e.expand) && s()["arrow-active"])
                                            })]
                                        }), (null === e || void 0 === e ? void 0 : e.expand) && (0, f.tZ)("div", {
                                            className: (0, o.Z)("nested-link", "nested-list", s().faqEntry__answer),
                                            dangerouslySetInnerHTML: {
                                                __html: e.answer
                                            }
                                        })]
                                    }, t)
                                }))
                            })]
                        })
                    })
                }
        },
        7459: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return i
                }
            });
            t(59748);
            var a = t(86010),
                r = t(40460),
                o = t.n(r),
                c = t(8311),
                i = function(e) {
                    return (0, c.BX)("div", {
                        className: (0, a.Z)(o().hgroup, e.className),
                        children: [(0, c.tZ)("h2", {
                            className: (0, a.Z)("h2", e.classNameH2 ? e.classNameH2 : ""),
                            dangerouslySetInnerHTML: {
                                __html: e.heading
                            },
                            style: e.style ? e.style : {}
                        }), e.subheading && (0, c.tZ)("div", {
                            className: (0, a.Z)("nested-link", o().hgroup__subheading, "white" === e.backgroundColor || "gray" === e.backgroundColor || "undefined" === typeof e.backgroundColor ? "" : o().hgroup__black, e.classNameSub ? e.classNameSub : ""),
                            dangerouslySetInnerHTML: {
                                __html: e.subheading
                            },
                            style: e.style ? e.style : {}
                        })]
                    })
                }
        },
        27706: function(e) {
            e.exports = {
                faqBox: "FaqSection_faqBox__3qrLL",
                faqBoxBlack: "FaqSection_faqBoxBlack__216up",
                faqEntry: "FaqSection_faqEntry__3S6x4",
                contentBlack: "FaqSection_contentBlack__1pT7Q",
                faqEntry__answer: "FaqSection_faqEntry__answer__1ASSL",
                faqEntry__title: "FaqSection_faqEntry__title__1zJbg",
                faqEntry__question: "FaqSection_faqEntry__question__39zDK",
                row: "FaqSection_row__oDyO5",
                arrow: "FaqSection_arrow__2A5jk",
                "arrow-active": "FaqSection_arrow-active__mDBtv",
                faqEntry__icon: "FaqSection_faqEntry__icon__3A_rl",
                faqEntry__arrow: "FaqSection_faqEntry__arrow__2Xyb6",
                active: "FaqSection_active__12tld"
            }
        },
        40460: function(e) {
            e.exports = {
                hgroup: "Hgroup_hgroup__3R5Vk",
                hgroup__subheading: "Hgroup_hgroup__subheading__3R5Hk",
                hgroup__black: "Hgroup_hgroup__black__2gPuW"
            }
        }
    }
]);