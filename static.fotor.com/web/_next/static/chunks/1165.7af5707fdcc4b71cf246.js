(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1165], {
        21165: function(e, l, r) {
            "use strict";
            r.r(l), r.d(l, {
                default: function() {
                    return f
                }
            });
            var t = r(92809),
                i = r(91742),
                o = (r(59748), r(49613)),
                n = r.n(o),
                a = r(86010),
                c = r(46066),
                s = r(39887),
                d = r(8311);

            function _(e, l) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    l && (t = t.filter((function(l) {
                        return Object.getOwnPropertyDescriptor(e, l).enumerable
                    }))), r.push.apply(r, t)
                }
                return r
            }

            function u(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var r = null != arguments[l] ? arguments[l] : {};
                    l % 2 ? _(Object(r), !0).forEach((function(l) {
                        (0, t.Z)(e, l, r[l])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(l) {
                        Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(r, l))
                    }))
                }
                return e
            }

            function f(e) {
                var l = e.data;
                return (0, d.tZ)("section", {
                    style: {
                        backgroundColor: null === l || void 0 === l ? void 0 : l.backgroundGradient,
                        color: null === l || void 0 === l ? void 0 : l.fontColor
                    },
                    className: n().container,
                    children: (0, d.tZ)(i.Z, {
                        className: n()["content-fra"],
                        children: (0, d.BX)(i.Z.Row, {
                            className: n().row,
                            children: [(0, d.BX)("div", {
                                className: n()["content-row-content"],
                                children: [(0, d.tZ)("h2", {
                                    style: {
                                        color: null === l || void 0 === l ? void 0 : l.fontColor
                                    },
                                    className: n().title,
                                    children: null === l || void 0 === l ? void 0 : l.headingH2
                                }), (0, d.tZ)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: l.subheading
                                    },
                                    className: n()["minor-title"]
                                })]
                            }), (0, d.tZ)("div", {
                                className: n()["gallery-show"],
                                children: null === l || void 0 === l ? void 0 : l.galleryImage.map((function(e, r) {
                                    return (0, d.tZ)("div", {
                                        className: (0, a.Z)(n()["gallery-show-fra"], n()[l.imageRowNum && (l.imageRowNum >= 3 || l.imageRowNum <= 6) ? "gallery-show-fra_".concat(l.imageRowNum) : ""]),
                                        children: (0, d.tZ)("div", {
                                            className: n()["gallery-show-list"],
                                            children: (0, d.tZ)(s.Z, {
                                                src: e
                                            })
                                        })
                                    }, r)
                                }))
                            }), (0, d.tZ)(c.Z, u(u({
                                className: (0, a.Z)("indicator-blue", "indicator-topic", n()["slider-fra"])
                            }, {
                                dots: !0,
                                infinite: !0,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                initialSlide: 0,
                                padding: 0,
                                useCSS: !0,
                                responsive: [{
                                    breakpoint: 750,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        infinite: !0,
                                        dots: !0,
                                        arrows: !1
                                    }
                                }]
                            }), {}, {
                                children: null === l || void 0 === l ? void 0 : l.galleryImage.map((function(e, l) {
                                    return (0, d.tZ)("div", {
                                        className: n()["slider-list"],
                                        children: (0, d.tZ)(s.Z, {
                                            src: e
                                        })
                                    }, l)
                                }))
                            }))]
                        })
                    })
                })
            }
        },
        39887: function(e, l, r) {
            "use strict";
            var t = r(59748),
                i = r(51699),
                o = r.n(i),
                n = r(58464),
                a = r(8311);
            l.Z = function(e) {
                var l = e.isLzy,
                    r = void 0 === l || l,
                    i = (0, t.useRef)(),
                    c = (0, t.useState)(!1),
                    s = c[0],
                    d = c[1];

                function _() {
                    d(!0)
                }
                return (0, t.useEffect)((function() {
                    var e, l, r;
                    if (null !== i && void 0 !== i && i.current && null !== i && void 0 !== i && null !== (e = i.current) && void 0 !== e && e.querySelector) return null === (l = i.current) || void 0 === l || null === (r = l.querySelector("img")) || void 0 === r || r.addEventListener("load", _),
                        function() {
                            var e, l;
                            null === (e = i.current) || void 0 === e || null === (l = e.querySelector("img")) || void 0 === l || l.removeEventListener("load", _)
                        }
                }), [i]), (0, a.BX)("div", {
                    ref: i,
                    className: "".concat(o()["fra-skeleton"], " ").concat(null !== e && void 0 !== e && e.mainClassName ? null === e || void 0 === e ? void 0 : e.mainClassName : ""),
                    children: [(0, a.tZ)(n.Z, {
                        className: "".concat(o()["boot-image"], " ").concat(null !== e && void 0 !== e && e.className ? null === e || void 0 === e ? void 0 : e.className : ""),
                        data: e.src,
                        isLzy: r,
                        srcSet: e.srcSet
                    }), !s && r && (0, a.tZ)("div", {
                        className: o()["fra-skeleton-loading"]
                    })]
                })
            }
        },
        49613: function(e) {
            e.exports = {
                container: "AiGallerySection_container__27LVw",
                row: "AiGallerySection_row__s_E17",
                grid: "AiGallerySection_grid__EwEtu",
                "content-row-content": "AiGallerySection_content-row-content__3R6qH",
                title: "AiGallerySection_title__5c3tm",
                "minor-title": "AiGallerySection_minor-title__1ETxb",
                "gallery-show": "AiGallerySection_gallery-show__1YsEF",
                "gallery-show-list": "AiGallerySection_gallery-show-list__9oUg0",
                "gallery-show-fra_6": "AiGallerySection_gallery-show-fra_6__3E1mh",
                "gallery-show-fra_5": "AiGallerySection_gallery-show-fra_5__3Szfb",
                "gallery-show-fra_4": "AiGallerySection_gallery-show-fra_4__fE5_L",
                "gallery-show-fra_3": "AiGallerySection_gallery-show-fra_3__2Ae37",
                "slider-fra": "AiGallerySection_slider-fra__lGAZ7",
                "content-fra": "AiGallerySection_content-fra__3pobe",
                "gallery-show-fra": "AiGallerySection_gallery-show-fra__DrUcB",
                "boot-image": "AiGallerySection_boot-image__2y6rq",
                "slider-list": "AiGallerySection_slider-list__k6vcT",
                "grid-content-btn": "AiGallerySection_grid-content-btn__1r8_a",
                Gradient: "AiGallerySection_Gradient__176rq"
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