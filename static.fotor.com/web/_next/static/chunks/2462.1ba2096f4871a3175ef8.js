(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2462], {
        2462: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return y
                }
            });
            var n = i(92809),
                r = (i(59748), i(32002)),
                a = i.n(r),
                o = i(43388),
                c = i.n(o),
                s = i(91742),
                l = i(7459),
                u = i(90520),
                d = i(46066),
                _ = i(86010),
                g = i(94599),
                p = i(53294),
                f = i.n(p),
                h = i(5152),
                m = i(8311);

            function b(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(i), !0).forEach((function(t) {
                        (0, n.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : b(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var S = (0, h.default)((function() {
                return i.e(582).then(i.bind(i, 70582))
            }), {
                loadableGenerated: {
                    webpack: function() {
                        return [70582]
                    },
                    modules: ["../components/feature-sections/TopicSection/TopicSection.tsx -> assets/icons/Forward.svg"]
                }
            });

            function y(e) {
                var t = e.data,
                    i = e.classNameSection,
                    n = t.headingH2,
                    r = t.subheading,
                    o = t.topicList,
                    p = t.userAgent,
                    h = t.customConfig,
                    b = t.fontTextColor,
                    y = p.isMobile ? u.FU : h || u.HX;
                return !o || o && 0 == o.length ? (0, m.tZ)(m.HY, {}) : (0, m.tZ)("section", {
                    className: (0, _.Z)(c().section, i),
                    children: (0, m.BX)(s.Z, {
                        children: [(0, m.tZ)(s.Z.Row, {
                            children: (0, m.tZ)(l.Z, {
                                heading: n,
                                subheading: r,
                                style: {
                                    color: b || "#262b33"
                                }
                            })
                        }), (0, m.tZ)(d.Z, Z(Z({}, y), {}, {
                            className: "indicator-blue indicator-topic",
                            children: o && o.length > 0 && o.map((function(e) {
                                return (0, m.tZ)(s.Z.Grid, {
                                    className: a().gridpading,
                                    children: (0, m.tZ)("div", {
                                        className: a().featurelistContainer,
                                        children: (0, m.BX)("a", {
                                            href: e.url,
                                            target: "_self",
                                            children: [(0, m.tZ)(g.Z, {
                                                className: (0, _.Z)(a().addImageBg),
                                                src: e.img.url ? e.img.url : f(),
                                                ratio: 206 / 266 * 100,
                                                imgClassName: a().imgClass,
                                                alt: e.img.title ? e.img.title : "edit photos by Fotor"
                                            }), (0, m.tZ)("div", {
                                                className: (0, _.Z)(a().featureTextSize),
                                                children: (0, m.tZ)("h3", {
                                                    className: a().featureTextSize__name,
                                                    children: e.title
                                                })
                                            }), !p.isMobile && (0, m.tZ)("div", {
                                                className: a().card_pagelink,
                                                children: (0, m.tZ)(S, {})
                                            })]
                                        })
                                    })
                                }, "topic_".concat(e.id))
                            }))
                        }))]
                    })
                })
            }
        },
        7459: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return c
                }
            });
            i(59748);
            var n = i(86010),
                r = i(40460),
                a = i.n(r),
                o = i(8311),
                c = function(e) {
                    return (0, o.BX)("div", {
                        className: (0, n.Z)(a().hgroup, e.className),
                        children: [(0, o.tZ)("h2", {
                            className: (0, n.Z)("h2", e.classNameH2 ? e.classNameH2 : ""),
                            dangerouslySetInnerHTML: {
                                __html: e.heading
                            },
                            style: e.style ? e.style : {}
                        }), e.subheading && (0, o.tZ)("div", {
                            className: (0, n.Z)("nested-link", a().hgroup__subheading, "white" === e.backgroundColor || "gray" === e.backgroundColor || "undefined" === typeof e.backgroundColor ? "" : a().hgroup__black, e.classNameSub ? e.classNameSub : ""),
                            dangerouslySetInnerHTML: {
                                __html: e.subheading
                            },
                            style: e.style ? e.style : {}
                        })]
                    })
                }
        },
        32002: function(e) {
            e.exports = {
                gridpading: "TopicSection_gridpading__1RJ9q",
                featurelistContainer: "TopicSection_featurelistContainer__1T6d4",
                featureTextSize: "TopicSection_featureTextSize__3HJ2r",
                card_pagelink: "TopicSection_card_pagelink__2Xs10",
                addImageBg: "TopicSection_addImageBg__X1ad_",
                imgClass: "TopicSection_imgClass__2fqPC",
                featureTextSize__name: "TopicSection_featureTextSize__name__35MFT",
                featureTextSize__detail: "TopicSection_featureTextSize__detail__1fwx9"
            }
        },
        40460: function(e) {
            e.exports = {
                hgroup: "Hgroup_hgroup__3R5Vk",
                hgroup__subheading: "Hgroup_hgroup__subheading__3R5Hk",
                hgroup__black: "Hgroup_hgroup__black__2gPuW"
            }
        },
        53294: function(e) {
            e.exports = "https://static.fotor.com/web/_next/static/images/topicDefault-f24747380744e2125cb46cd28eb78d81.png"
        }
    }
]);