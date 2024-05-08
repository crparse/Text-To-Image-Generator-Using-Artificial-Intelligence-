(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3054, 56], {
        99607: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(59748);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            var r = i.createElement("defs", null, i.createElement("linearGradient", {
                    x1: 0,
                    y1: 1,
                    x2: 1,
                    y2: .098,
                    id: "aiimage-arrow_svg__a"
                }, i.createElement("stop", {
                    offset: "0%",
                    stopColor: "#E6FA72"
                }), i.createElement("stop", {
                    offset: "58.676%",
                    stopColor: "#62FFB8"
                }))),
                a = i.createElement("path", {
                    d: "M15.695 7.255c-.002-.002-.005-.002-.007-.005L9.783 1.307a1.045 1.045 0 00-1.479 0 1.061 1.061 0 000 1.488L12.483 7H1a1 1 0 100 2h11.483l-4.179 4.206a1.06 1.06 0 000 1.487c.407.41 1.073.41 1.479 0l5.904-5.943c.003-.002.006-.002.008-.005C15.899 8.54 16 8.27 16 8s-.101-.54-.305-.745z",
                    fillRule: "evenodd",
                    fill: "url(#aiimage-arrow_svg__a)"
                });
            t.default = function(e) {
                return i.createElement("svg", o({
                    fill: "none",
                    width: 16,
                    height: 16
                }, e), r, a)
            }
        },
        63054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n(91742),
                o = (n(59748), n(52698)),
                r = n.n(o),
                a = n(86010),
                l = n(34020),
                c = n(63628),
                s = n(99607),
                d = n(39887),
                u = n(8311);

            function m(e) {
                var t = e.data;
                return (0, u.BX)("section", {
                    className: r().container,
                    style: {
                        backgroundColor: null === t || void 0 === t ? void 0 : t.backgroundGradient
                    },
                    children: [(0, u.tZ)(l.Z, {
                        className: r().hack
                    }), (0, u.BX)(i.Z, {
                        className: r()["content-fra"],
                        children: [null !== t && void 0 !== t && t.buttonLink && null !== t && void 0 !== t && t.buttonText ? (0, u.BX)("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: null === t || void 0 === t ? void 0 : t.buttonLink,
                            className: r()["grid-title"],
                            children: [(0, u.tZ)(c.Z, {
                                style: {
                                    marginRight: "4px"
                                }
                            }), (0, u.tZ)("span", {
                                children: null === t || void 0 === t ? void 0 : t.buttonText
                            }), (0, u.tZ)(s.default, {
                                className: r().arrow
                            })]
                        }) : "", (0, u.tZ)("div", {
                            className: (0, a.Z)(r().row, r()["row-content"]),
                            children: null === t || void 0 === t ? void 0 : t.generatorList.map((function(e, n) {
                                return (0, u.tZ)("div", {
                                    className: (0, a.Z)(r()["image-list"], "3" != t.imageRowNum && t.imageRowNum ? "" : r()["image-list_3"]),
                                    children: (0, u.BX)("div", {
                                        className: r()["grid-content"],
                                        children: [(0, u.tZ)(d.Z, {
                                            src: e.coverImage[0]
                                        }), (0, u.BX)("a", {
                                            href: null === e || void 0 === e ? void 0 : e.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: r()["grid-content-btn"],
                                            children: [(0, u.tZ)(l.Z, {}), e.buttonText]
                                        })]
                                    })
                                }, n)
                            }))
                        }), (0, u.tZ)("div", {
                            className: r().moblie_container,
                            children: null === t || void 0 === t ? void 0 : t.generatorList.slice(0, 2).map((function(e, t) {
                                return (0, u.BX)("div", {
                                    className: r()["slider-list"],
                                    children: [(0, u.BX)("a", {
                                        href: null === e || void 0 === e ? void 0 : e.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: r()["grid-content-btn"],
                                        children: [(0, u.tZ)(l.Z, {
                                            width: 20
                                        }), null === e || void 0 === e ? void 0 : e.buttonText]
                                    }), (0, u.tZ)(d.Z, {
                                        src: e.coverImage[0],
                                        isLzy: 0 != t,
                                        srcSet: [{
                                            size: "(max-width:750) 50vw",
                                            srcset: "400w"
                                        }]
                                    })]
                                }, t)
                            }))
                        })]
                    })]
                })
            }
        },
        39887: function(e, t, n) {
            "use strict";
            var i = n(59748),
                o = n(51699),
                r = n.n(o),
                a = n(58464),
                l = n(8311);
            t.Z = function(e) {
                var t = e.isLzy,
                    n = void 0 === t || t,
                    o = (0, i.useRef)(),
                    c = (0, i.useState)(!1),
                    s = c[0],
                    d = c[1];

                function u() {
                    d(!0)
                }
                return (0, i.useEffect)((function() {
                    var e, t, n;
                    if (null !== o && void 0 !== o && o.current && null !== o && void 0 !== o && null !== (e = o.current) && void 0 !== e && e.querySelector) return null === (t = o.current) || void 0 === t || null === (n = t.querySelector("img")) || void 0 === n || n.addEventListener("load", u),
                        function() {
                            var e, t;
                            null === (e = o.current) || void 0 === e || null === (t = e.querySelector("img")) || void 0 === t || t.removeEventListener("load", u)
                        }
                }), [o]), (0, l.BX)("div", {
                    ref: o,
                    className: "".concat(r()["fra-skeleton"], " ").concat(null !== e && void 0 !== e && e.mainClassName ? null === e || void 0 === e ? void 0 : e.mainClassName : ""),
                    children: [(0, l.tZ)(a.Z, {
                        className: "".concat(r()["boot-image"], " ").concat(null !== e && void 0 !== e && e.className ? null === e || void 0 === e ? void 0 : e.className : ""),
                        data: e.src,
                        isLzy: n,
                        srcSet: e.srcSet
                    }), !s && n && (0, l.tZ)("div", {
                        className: r()["fra-skeleton-loading"]
                    })]
                })
            }
        },
        52698: function(e) {
            e.exports = {
                container: "AiCommunitySection_container__3QPX4",
                hack: "AiCommunitySection_hack__FbtRg",
                row: "AiCommunitySection_row__38j9d",
                "grid-content": "AiCommunitySection_grid-content__1zJ_u",
                "grid-content-btn": "AiCommunitySection_grid-content-btn__3UY1v",
                Gradient: "AiCommunitySection_Gradient__shwx2",
                "grid-title": "AiCommunitySection_grid-title__GaX2P",
                "slider-fra": "AiCommunitySection_slider-fra__3V7sL",
                moblie_container: "AiCommunitySection_moblie_container___5QRc",
                "boot-image": "AiCommunitySection_boot-image__25FBP",
                "slider-list": "AiCommunitySection_slider-list__3cWnZ",
                "image-list": "AiCommunitySection_image-list__HEq4L",
                "image-list_3": "AiCommunitySection_image-list_3__1wbrZ",
                "content-fra": "AiCommunitySection_content-fra__zFm9C",
                "row-content": "AiCommunitySection_row-content__3SKbf",
                arrow: "AiCommunitySection_arrow__2QbkT"
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