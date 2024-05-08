(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3971], {
        23971: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return v
                }
            });
            var a = i(10219),
                n = i(91742),
                l = i(59748),
                o = i(26388),
                r = i.n(o),
                c = i(86010),
                d = i(39887),
                s = i(8311),
                u = ["data"];

            function v(e) {
                var t, i, o, v, _, b, m = e.data,
                    g = ((0, a.Z)(e, u), (0, l.useState)(null === m || void 0 === m || null === (t = m.galleryImageGroup[0]) || void 0 === t ? void 0 : t.id)),
                    f = g[0],
                    y = g[1];
                return (0, s.tZ)("section", {
                    style: {
                        backgroundColor: null === m || void 0 === m ? void 0 : m.backgroundGradient,
                        color: null === m || void 0 === m ? void 0 : m.fontColor
                    },
                    className: r().container,
                    children: (0, s.tZ)(n.Z, {
                        className: r()["content-fra"],
                        children: (0, s.BX)(n.Z.Row, {
                            className: r().row,
                            children: [(0, s.tZ)("h2", {
                                className: r()["main-title"],
                                children: null === m || void 0 === m ? void 0 : m.headingH2
                            }), (0, s.tZ)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: null === m || void 0 === m ? void 0 : m.subheading
                                },
                                className: r()["minor-title"]
                            }), (0, s.tZ)("div", {
                                className: r()["tab-fra"],
                                children: (0, s.tZ)("div", {
                                    className: r()["tab-header"],
                                    children: null === m || void 0 === m || null === (i = m.galleryImageGroup) || void 0 === i ? void 0 : i.map((function(e, t) {
                                        return (0, s.tZ)("div", {
                                            onClick: function() {
                                                y(null === e || void 0 === e ? void 0 : e.id)
                                            },
                                            style: {
                                                backgroundImage: f === (null === e || void 0 === e ? void 0 : e.id) ? "linear-gradient(to right, ".concat((null === m || void 0 === m ? void 0 : m.backgroundGradient) || "#161619", ", ").concat((null === m || void 0 === m ? void 0 : m.backgroundGradient) || "#161619", "), linear-gradient(56deg, #e6fa72 0%, #62ffb8 56%)") : "unset"
                                            },
                                            className: (0, c.Z)(r().tab, f === (null === e || void 0 === e ? void 0 : e.id) && r().active),
                                            children: (0, s.tZ)("div", {
                                                className: r()["tab-text"],
                                                children: null === e || void 0 === e ? void 0 : e.imageGroupTitle
                                            })
                                        }, t)
                                    }))
                                })
                            }), (0, s.BX)("div", {
                                className: r()["tab-content"],
                                children: [(0, s.tZ)("div", {
                                    className: r()["tab-content-fra-seat"],
                                    children: (null === m || void 0 === m || null === (o = m.galleryImageGroup) || void 0 === o ? void 0 : o.length) > 0 && (null === m || void 0 === m || null === (v = m.galleryImageGroup[0]) || void 0 === v || null === (_ = v.galleryImage) || void 0 === _ ? void 0 : _.map((function(e, t) {
                                        return (0, s.tZ)("div", {
                                            children: (0, s.tZ)("div", {})
                                        }, t)
                                    })))
                                }), null === m || void 0 === m || null === (b = m.galleryImageGroup) || void 0 === b ? void 0 : b.map((function(e, t) {
                                    var i;
                                    return (0, s.tZ)("div", {
                                        className: r()["tab-content-fra"],
                                        children: null === (i = e.galleryImage) || void 0 === i ? void 0 : i.map((function(t, i) {
                                            return (0, s.tZ)("div", {
                                                style: {
                                                    visibility: e.id === f ? "visible" : "hidden"
                                                },
                                                className: r()["tab-content-list"],
                                                children: (0, s.tZ)("div", {
                                                    className: r()["tab-content-list-content"],
                                                    children: (0, s.tZ)(d.Z, {
                                                        src: t
                                                    })
                                                })
                                            }, "".concat(t.title).concat(i))
                                        }))
                                    }, t)
                                }))]
                            })]
                        })
                    })
                })
            }
        },
        39887: function(e, t, i) {
            "use strict";
            var a = i(59748),
                n = i(51699),
                l = i.n(n),
                o = i(58464),
                r = i(8311);
            t.Z = function(e) {
                var t = e.isLzy,
                    i = void 0 === t || t,
                    n = (0, a.useRef)(),
                    c = (0, a.useState)(!1),
                    d = c[0],
                    s = c[1];

                function u() {
                    s(!0)
                }
                return (0, a.useEffect)((function() {
                    var e, t, i;
                    if (null !== n && void 0 !== n && n.current && null !== n && void 0 !== n && null !== (e = n.current) && void 0 !== e && e.querySelector) return null === (t = n.current) || void 0 === t || null === (i = t.querySelector("img")) || void 0 === i || i.addEventListener("load", u),
                        function() {
                            var e, t;
                            null === (e = n.current) || void 0 === e || null === (t = e.querySelector("img")) || void 0 === t || t.removeEventListener("load", u)
                        }
                }), [n]), (0, r.BX)("div", {
                    ref: n,
                    className: "".concat(l()["fra-skeleton"], " ").concat(null !== e && void 0 !== e && e.mainClassName ? null === e || void 0 === e ? void 0 : e.mainClassName : ""),
                    children: [(0, r.tZ)(o.Z, {
                        className: "".concat(l()["boot-image"], " ").concat(null !== e && void 0 !== e && e.className ? null === e || void 0 === e ? void 0 : e.className : ""),
                        data: e.src,
                        isLzy: i,
                        srcSet: e.srcSet
                    }), !d && i && (0, r.tZ)("div", {
                        className: l()["fra-skeleton-loading"]
                    })]
                })
            }
        },
        26388: function(e) {
            e.exports = {
                container: "AiGalleryTabSection_container__2W9WL",
                "content-fra": "AiGalleryTabSection_content-fra__3jEQ0",
                row: "AiGalleryTabSection_row__y5Z9J",
                "main-title": "AiGalleryTabSection_main-title__1tv61",
                "minor-title": "AiGalleryTabSection_minor-title__1yhpK",
                "tab-fra": "AiGalleryTabSection_tab-fra__19iNX",
                "tab-header": "AiGalleryTabSection_tab-header__1YBS3",
                tab: "AiGalleryTabSection_tab__1bg8s",
                active: "AiGalleryTabSection_active__3R2Rz",
                "tab-text": "AiGalleryTabSection_tab-text__28iHW",
                "tab-content": "AiGalleryTabSection_tab-content__3Lu0v",
                "tab-content-fra-seat": "AiGalleryTabSection_tab-content-fra-seat__RQj3h",
                "tab-content-fra": "AiGalleryTabSection_tab-content-fra__2OH4Z",
                "tab-content-list": "AiGalleryTabSection_tab-content-list__3rk0a",
                "tab-content-list-content": "AiGalleryTabSection_tab-content-list-content__3xZLj",
                "slider-fra": "AiGalleryTabSection_slider-fra__2xOWm",
                "boot-image": "AiGalleryTabSection_boot-image__2JJ0p",
                grid: "AiGalleryTabSection_grid__278i0",
                "slider-list": "AiGalleryTabSection_slider-list__1YRL4",
                "grid-content-btn": "AiGalleryTabSection_grid-content-btn__93KPS",
                Gradient: "AiGalleryTabSection_Gradient__2wx2g"
            }
        },
        51699: function(e) {
            e.exports = {
                "fra-skeleton": "AiimageSkeleton_fra-skeleton__3Qg6P",
                "fra-skeleton-loading": "AiimageSkeleton_fra-skeleton-loading__1jiKf",
                image_loading: "AiimageSkeleton_image_loading__2V3GB"
            }
        }
    }
]);