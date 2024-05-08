(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5350], {
        95350: function(o, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return b
                }
            });
            var t = n(92809),
                i = n(91742),
                r = n(59748),
                l = n(79496),
                c = n.n(l),
                d = n(94599),
                u = n(86010),
                a = n(90520),
                f = n(46066),
                s = n(8311);

            function v(o, e) {
                var n = Object.keys(o);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(o);
                    e && (t = t.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(o, e).enumerable
                    }))), n.push.apply(n, t)
                }
                return n
            }

            function _(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach((function(e) {
                        (0, t.Z)(o, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return o
            }

            function b(o) {
                var e = o.data,
                    n = (0, r.useMemo)((function() {
                        var o;
                        return null === e || void 0 === e || null === (o = e.userAgent) || void 0 === o ? void 0 : o.isMobile
                    }), [e]);
                return (0, s.tZ)("section", {
                    style: {
                        backgroundColor: null === e || void 0 === e ? void 0 : e.backgroundGradient
                    },
                    className: c().section,
                    children: (0, s.BX)(i.Z, {
                        children: [(0, s.tZ)(i.Z.Row, {
                            children: (0, s.tZ)(i.Z.Grid, {
                                children: (null === e || void 0 === e ? void 0 : e.headingH2) && (0, s.tZ)("h2", {
                                    style: {
                                        color: (null === e || void 0 === e ? void 0 : e.fontColor) || "#ffffff"
                                    },
                                    children: null === e || void 0 === e ? void 0 : e.headingH2
                                })
                            })
                        }), n ? (0, s.tZ)(f.Z, _(_({}, a.FU), {}, {
                            className: (0, u.Z)(null === e || void 0 === e || !e.backgroundGradient || "#fff" !== (null === e || void 0 === e ? void 0 : e.backgroundGradient) && "#ffffff" !== (null === e || void 0 === e ? void 0 : e.backgroundGradient) ? "indicator-gradient-green" : "indicator-gradient-blue", c().slide),
                            children: null === e || void 0 === e ? void 0 : e.homeFeaturesList.map((function(o, n) {
                                return (0, s.tZ)(i.Z.Grid, {
                                    className: c().grid_block,
                                    children: (0, s.tZ)(g, {
                                        data: o,
                                        fontColor: null === e || void 0 === e ? void 0 : e.fontColor
                                    })
                                }, n)
                            }))
                        })) : (0, s.tZ)(i.Z.Row, {
                            className: c().row_block,
                            column: (null === e || void 0 === e ? void 0 : e.columnCount) || "3",
                            children: null === e || void 0 === e ? void 0 : e.homeFeaturesList.map((function(o, n) {
                                return (0, s.tZ)(i.Z.Grid, {
                                    className: c().grid_block,
                                    children: (0, s.tZ)(g, {
                                        data: o,
                                        fontColor: null === e || void 0 === e ? void 0 : e.fontColor
                                    })
                                }, n)
                            }))
                        })]
                    })
                })
            }

            function g(o) {
                var e = o.data,
                    n = o.fontColor,
                    t = void 0 === n ? "#ffffff" : n;
                return (0, s.BX)("div", {
                    className: c().block,
                    children: [(0, s.tZ)("div", {
                        className: c().block_image,
                        children: (0, s.tZ)(d.Z, {
                            data: null === e || void 0 === e ? void 0 : e.iconImage[0]
                        })
                    }), (0, s.tZ)("h3", {
                        style: {
                            color: t
                        },
                        children: null === e || void 0 === e ? void 0 : e.heading
                    }), (0, s.tZ)("div", {
                        style: {
                            color: t
                        },
                        dangerouslySetInnerHTML: {
                            __html: null === e || void 0 === e ? void 0 : e.text
                        },
                        className: c().block__content
                    })]
                })
            }
        },
        79496: function(o) {
            o.exports = {
                section: "AiIntroduceSection_section__1pZPQ",
                row_block: "AiIntroduceSection_row_block__2CyNK",
                grid_block: "AiIntroduceSection_grid_block__2_QvZ",
                block: "AiIntroduceSection_block___x9eL",
                block_image: "AiIntroduceSection_block_image__2yDFv",
                block__content: "AiIntroduceSection_block__content__3kqDV"
            }
        }
    }
]);