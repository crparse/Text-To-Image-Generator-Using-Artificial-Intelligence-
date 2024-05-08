(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3006], {
        3006: function(e, i, t) {
            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return h
                }
            });
            var n = t(92809),
                r = t(59748),
                o = t(94599),
                a = t(97957),
                c = t.n(a),
                l = t(86010),
                s = t(90520),
                d = t(46066),
                _ = t(5152),
                u = t(91742),
                m = t(8311);

            function v(e, i) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    i && (n = n.filter((function(i) {
                        return Object.getOwnPropertyDescriptor(e, i).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function f(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var t = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? v(Object(t), !0).forEach((function(i) {
                        (0, n.Z)(e, i, t[i])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function(i) {
                        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
                    }))
                }
                return e
            }
            var Z = (0, _.default)((function() {
                return t.e(2870).then(t.bind(t, 62870))
            }), {
                loadableGenerated: {
                    webpack: function() {
                        return [62870]
                    },
                    modules: ["../components/ai-sections/AiTestimonialSection/AiTestimonialSection.tsx -> assets/icons/new-star.svg"]
                }
            });

            function h(e) {
                var i, t, n = e.data,
                    r = n.userAgent.isMobile;
                return (0, m.BX)("section", {
                    style: {
                        padding: 0,
                        background: null === n || void 0 === n ? void 0 : n.backgroundGradient
                    },
                    className: (0, l.Z)(c().section),
                    children: [(0, m.tZ)("div", {
                        className: c().color_block
                    }), (0, m.tZ)("div", {
                        className: c().color_block
                    }), (0, m.BX)(u.Z, {
                        className: c().res_container,
                        children: [(0, m.tZ)(u.Z.Row, {
                            className: c().row,
                            children: (0, m.tZ)(u.Z.Grid, {
                                children: (0, m.tZ)(p, {
                                    data: n
                                })
                            })
                        }), r ? (0, m.tZ)(d.Z, f(f({}, s.FU), {}, {
                            className: (0, l.Z)("indicator-gradient-green", c().slide),
                            children: null === n || void 0 === n || null === (i = n.testimonialEntry) || void 0 === i ? void 0 : i.map((function(e, i) {
                                return (0, m.tZ)(g, {
                                    data: e
                                }, i)
                            }))
                        })) : (0, m.tZ)(u.Z.Row, {
                            className: c().row,
                            children: null === n || void 0 === n || null === (t = n.testimonialEntry) || void 0 === t ? void 0 : t.map((function(e, i) {
                                return (0, m.tZ)(u.Z.Grid, {
                                    className: c().grid,
                                    children: (0, m.tZ)(g, {
                                        data: e
                                    })
                                }, i)
                            }))
                        })]
                    })]
                })
            }

            function g(e) {
                var i = e.data,
                    t = (0, r.useRef)(null),
                    n = (0, r.useState)(!0),
                    a = n[0],
                    s = n[1],
                    d = function() {
                        s(!1)
                    };
                return (0, r.useEffect)((function() {
                    return t.current && t.current.querySelector("img").addEventListener("load", d),
                        function() {
                            return t.current.querySelector("img").removeEventListener("load", d)
                        }
                }), [t]), (0, m.BX)("div", {
                    className: (0, l.Z)(c().container, c().card),
                    children: [(0, m.tZ)("div", {
                        className: c().card_text,
                        dangerouslySetInnerHTML: {
                            __html: null === i || void 0 === i ? void 0 : i.testimonialQuote
                        }
                    }), (0, m.BX)("div", {
                        className: c().card_avatar,
                        children: [(0, m.tZ)("div", {
                            ref: t,
                            className: (0, l.Z)(c().image, a && c().image_loading),
                            children: (0, m.tZ)(o.Z, {
                                data: null === i || void 0 === i ? void 0 : i.testimonialIcon[0]
                            })
                        }), (0, m.BX)("div", {
                            className: c().info,
                            children: [(0, m.tZ)("p", {
                                children: null === i || void 0 === i ? void 0 : i.testimonialAuthor
                            }), (0, m.tZ)("p", {
                                children: null === i || void 0 === i ? void 0 : i.testimonialCompany
                            })]
                        })]
                    }), (0, m.tZ)("div", {
                        className: c().star_container,
                        children: new Array(null === i || void 0 === i ? void 0 : i.testimonialRate).fill("").map((function(e, i) {
                            return (0, m.tZ)(Z, {}, i)
                        }))
                    })]
                })
            }

            function p(e) {
                var i = e.data;
                return (0, m.tZ)("div", {
                    className: c().container,
                    children: (0, m.tZ)("h2", {
                        className: (0, l.Z)(c().text_h2),
                        children: null === i || void 0 === i ? void 0 : i.headingH2
                    })
                })
            }
        },
        97957: function(e) {
            e.exports = {
                section: "AiTestimonialSection_section__4MKdB",
                color_block: "AiTestimonialSection_color_block__2eC3L",
                res_container: "AiTestimonialSection_res_container__2JeEj",
                row: "AiTestimonialSection_row__2Fa3M",
                grid: "AiTestimonialSection_grid__3STjQ",
                container: "AiTestimonialSection_container__1l74X",
                text_h2: "AiTestimonialSection_text_h2__DfvJp",
                card: "AiTestimonialSection_card__10WEK",
                card_text: "AiTestimonialSection_card_text__3uM85",
                card_avatar: "AiTestimonialSection_card_avatar__3xjdD",
                image: "AiTestimonialSection_image__k8WSn",
                info: "AiTestimonialSection_info__30dna",
                star_container: "AiTestimonialSection_star_container__1yJm5",
                image_loading: "AiTestimonialSection_image_loading__7qeIX",
                slide: "AiTestimonialSection_slide__1NW_r"
            }
        }
    }
]);