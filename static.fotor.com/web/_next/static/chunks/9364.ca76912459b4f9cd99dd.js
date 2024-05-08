(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9364, 5198], {
        15198: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return l
                },
                BlackDataReveal: function() {
                    return s
                }
            });
            t(59748);
            var i = t(44924),
                o = t.n(i),
                r = t(86340),
                a = t(38388),
                c = t(86010),
                u = t(8311);

            function l(e) {
                var n = e.score,
                    t = e.lang,
                    i = e.className;
                return (0, u.BX)("div", {
                    className: (0, c.Z)(o().data_reveal, i),
                    children: [(0, u.tZ)("div", {
                        className: o().block,
                        children: (0, u.BX)("div", {
                            children: [(0, u.tZ)("p", {
                                className: o().title,
                                children: a.Z[t].aigc_data_reveal_num1
                            }), (0, u.tZ)("p", {
                                children: a.Z[t].aigc_data_reveal_title1
                            })]
                        })
                    }), (0, u.BX)("div", {
                        className: o().block,
                        children: [(0, u.tZ)(r.Z, {
                            style: {
                                transform: "rotateY(180deg)"
                            },
                            viewBox: "0 0 20.271574020385742 52"
                        }), (0, u.BX)("div", {
                            className: o().flex,
                            children: [(0, u.tZ)("p", {
                                className: o().title,
                                children: a.Z[t].aigc_data_reveal_num2
                            }), (0, u.tZ)("p", {
                                children: a.Z[t].aigc_data_reveal_title2
                            })]
                        }), (0, u.tZ)(r.Z, {
                            viewBox: "0 0 20.271574020385742 52"
                        })]
                    }), (0, u.tZ)("div", {
                        className: o().block,
                        children: (0, u.BX)("div", {
                            children: [(0, u.tZ)("p", {
                                className: o().title,
                                children: n
                            }), (0, u.tZ)("p", {
                                children: a.Z[t].aigc_data_reveal_title3
                            })]
                        })
                    })]
                })
            }

            function s(e) {
                var n = e.data,
                    t = n.isStartScore,
                    i = n.ratingValue,
                    r = n.lang;
                return t ? (0, u.tZ)(l, {
                    className: o().black_font,
                    lang: r,
                    score: i
                }) : (0, u.tZ)(u.HY, {})
            }
        },
        59364: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                BlackDataReveal: function() {
                    return h.BlackDataReveal
                },
                default: function() {
                    return C
                }
            });
            var i = t(92809),
                o = t(30266),
                r = t(809),
                a = t.n(r),
                c = t(86010),
                u = t(5152),
                l = t(91742),
                s = t(47677),
                d = t(59748),
                _ = t(72938),
                v = t.n(_),
                m = t(69918),
                f = t(50264),
                p = t(23279),
                g = t.n(p),
                b = t(49437),
                h = t(15198),
                w = t(43262),
                Z = t(67275),
                S = t.n(Z),
                B = (t(91234), t(38388)),
                x = t(8311),
                A = (0, u.default)((function() {
                    return t.e(6581).then(t.bind(t, 6581))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [6581]
                        },
                        modules: ["../components/ai-sections/AiImageBannerSection/AiImageBannerSection.tsx -> assets/icons/three-star.svg"]
                    }
                }),
                y = (0, u.default)((function() {
                    return Promise.all([t.e(3932), t.e(9864)]).then(t.bind(t, 95856))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [95856]
                        },
                        modules: ["../components/ai-sections/AiImageBannerSection/AiImageBannerSection.tsx -> ft-ai-image"]
                    }
                });

            function I(e) {
                var n = d.default.useContext(m.y),
                    t = n.state,
                    i = (n.dispatch, (0, d.useState)(!1)),
                    r = i[0],
                    u = i[1],
                    s = (0, d.useState)(!1),
                    _ = s[0],
                    v = s[1],
                    p = (0, d.useState)(!1),
                    Z = p[0],
                    I = p[1],
                    k = (0, d.useState)(""),
                    N = k[0],
                    O = k[1],
                    C = (0, d.useState)(!1),
                    T = C[0],
                    X = C[1],
                    E = e.data,
                    L = e.siteId,
                    V = (0, d.useRef)(null),
                    P = (0, d.useRef)(null),
                    R = (0, d.useRef)(null),
                    j = (0, d.useRef)(null),
                    M = w.wb[L],
                    F = B.Z[w.wb[L]].ai_textarea_placeholder,
                    D = function() {
                        return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > window.innerHeight
                    },
                    H = g()((function() {
                        E.userAgent.isMobile ? R && R.current && v(D()) : V && V.current && v(D())
                    }), 50),
                    z = function() {
                        var e = (0, o.Z)(a().mark((function e() {
                            var n;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, f.TQ)("demo");
                                    case 2:
                                        n = e.sent, O(n), u(!0);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, d.useEffect)((function() {
                    return window.addEventListener("scroll", H),
                        function() {
                            return window.removeEventListener("scroll", H)
                        }
                }), [V, R]), (0, d.useEffect)((function() {
                    null !== t && void 0 !== t && t.useCookieShow ? I(!0) : I(!1)
                }), [t.useCookieShow]), (0, d.useEffect)((function() {
                    E.userAgent.isMobile && r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
                }), [E.userAgent.isMobile, r]), (0, x.BX)("section", {
                    className: S().section,
                    style: {
                        background: null === E || void 0 === E ? void 0 : E.backgroundGradient
                    },
                    children: [(0, x.tZ)("div", {
                        className: S().gradient_block
                    }), (0, x.tZ)("div", {
                        className: S().gradient_block
                    }), (0, x.tZ)(l.Z, {
                        className: (0, c.Z)(S().container),
                        children: (0, x.BX)(l.Z.Row, {
                            className: S().row_container,
                            children: [(0, x.BX)("div", {
                                className: (0, c.Z)(S().row_container__info),
                                children: [(0, x.tZ)("h1", {
                                    dangerouslySetInnerHTML: {
                                        __html: null === E || void 0 === E ? void 0 : E.headingH1
                                    }
                                }), (null === E || void 0 === E ? void 0 : E.subheading) && (0, x.tZ)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: null === E || void 0 === E ? void 0 : E.subheading
                                    }
                                }), null !== E && void 0 !== E && E.buttonLink ? (0, x.tZ)("div", {
                                    className: S().button_box,
                                    ref: V,
                                    children: (0, x.tZ)("button", {
                                        className: (0, c.Z)(S().button_link, _ && S().isFixedInput),
                                        onClick: function() {
                                            var e = "".concat(b.ZP, "images/create?type=text&prompt=").concat(encodeURIComponent(N));
                                            null !== E && void 0 !== E && E.buttonLink && (e = null === E || void 0 === E ? void 0 : E.buttonLink), window && window.open(e, "_self")
                                        },
                                        children: null === E || void 0 === E ? void 0 : E.buttonText
                                    })
                                }) : (0, x.BX)("div", {
                                    className: (0, c.Z)(S().input_and_surpriseme_container, r && S().ai_image_and_input_fous),
                                    style: r ? {
                                        width: "100%"
                                    } : {},
                                    ref: j,
                                    children: [!T && (0, x.BX)("div", {
                                        className: (0, c.Z)(S().ai_image_and_input),
                                        onClick: function() {
                                            u(!0)
                                        },
                                        children: [(0, x.BX)("div", {
                                            className: (0, c.Z)(S().input_container),
                                            style: _ && Z ? {
                                                bottom: "48px"
                                            } : {},
                                            ref: V,
                                            children: [(0, x.tZ)("textarea", {
                                                placeholder: r ? "" : F,
                                                value: N,
                                                ref: P,
                                                readOnly: !0,
                                                onFocus: function() {
                                                    u(!0)
                                                },
                                                onChange: function(e) {
                                                    O(e.target.value)
                                                }
                                            }), (0, x.tZ)("button", {
                                                onClick: function() {
                                                    u(!0)
                                                },
                                                children: null === E || void 0 === E ? void 0 : E.buttonText
                                            })]
                                        }), (0, x.BX)("div", {
                                            className: S().ai_image_module,
                                            children: [(0, x.BX)("div", {
                                                className: S().col,
                                                children: [(0, x.BX)("div", {
                                                    children: [(0, x.tZ)("div", {}), (0, x.tZ)("div", {})]
                                                }), (0, x.tZ)("div", {})]
                                            }), (0, x.BX)("div", {
                                                className: S().col,
                                                children: [(0, x.tZ)("div", {}), (0, x.BX)("div", {
                                                    children: [(0, x.tZ)("div", {}), (0, x.tZ)("div", {})]
                                                })]
                                            })]
                                        })]
                                    }), r && (0, d.createPortal)((0, x.tZ)("div", {
                                        className: S().FTAIImage_container,
                                        children: (0, x.tZ)(y, {
                                            initText: N,
                                            onRendered: function() {
                                                X(!0)
                                            },
                                            style: E.userAgent.isMobile ? {
                                                height: window.innerHeight - 64 + "px"
                                            } : {},
                                            isVip: t.isVip,
                                            userInfo: t.userInfo,
                                            onClose: function() {
                                                X(!1), u(!1)
                                            },
                                            env: "production",
                                            lang: M
                                        })
                                    }), E.userAgent.isMobile ? document.body : j.current), (0, x.BX)("div", {
                                        className: S().surprise_me,
                                        onClick: z,
                                        children: [(0, x.tZ)(A, {}), (0, x.tZ)("button", {
                                            dangerouslySetInnerHTML: {
                                                __html: null === E || void 0 === E ? void 0 : E.text
                                            }
                                        })]
                                    })]
                                }), (0, x.tZ)("button", {
                                    className: (0, c.Z)(S().mobile_generate, _ && S().isFixedButton),
                                    ref: R,
                                    onClick: function() {
                                        u(!0)
                                    },
                                    children: null === E || void 0 === E ? void 0 : E.buttonText
                                })]
                            }), (null === E || void 0 === E ? void 0 : E.isStartScore) && (0, x.tZ)(h.default, {
                                score: E.ratingValue,
                                lang: w.wb[L]
                            })]
                        })
                    })]
                })
            }

            function k(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }
            var N = (0, u.default)((function() {
                    return t.e(6581).then(t.bind(t, 6581))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [6581]
                        },
                        modules: ["../components/ai-sections/AiBannerSection/AiBannerSection.tsx -> assets/icons/three-star.svg"]
                    }
                }),
                O = (0, u.default)((function() {
                    return t.e(7454).then(t.bind(t, 67454))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [67454]
                        },
                        modules: ["../components/ai-sections/AiBannerSection/AiBannerSection.tsx -> assets/icons/magic-wand.svg"]
                    }
                });

            function C(e) {
                var n = d.default.useContext(m.y).state,
                    t = (0, d.useState)(!1),
                    r = t[0],
                    u = t[1],
                    _ = (0, d.useState)(!1),
                    p = _[0],
                    Z = _[1],
                    S = (0, d.useState)(!1),
                    B = S[0],
                    A = S[1],
                    y = (0, d.useState)(""),
                    C = y[0],
                    T = y[1],
                    X = e.data,
                    E = e.siteId,
                    L = e.pathname,
                    V = (0, d.useRef)(null),
                    P = (0, d.useRef)(null),
                    R = (0, d.useRef)(null),
                    j = (0, d.useRef)(null),
                    M = function() {
                        return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > window.innerHeight
                    },
                    F = g()((function() {
                        X.userAgent.isMobile ? j && j.current && Z(M()) : V && V.current && Z(M())
                    }), 50),
                    D = function() {
                        var e = (0, o.Z)(a().mark((function e() {
                            var n;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, f.TQ)("demo");
                                    case 2:
                                        n = e.sent, T(n);
                                    case 4:
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
                        var e = "".concat(b.ZP, "images/create?type=text&prompt=").concat(encodeURIComponent(C));
                        null !== X && void 0 !== X && X.buttonLink && (e = null === X || void 0 === X ? void 0 : X.buttonLink), window && window.open(e, "_self")
                    },
                    z = function(e) {
                        e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"
                    };
                return (0, d.useEffect)((function() {
                    return window.addEventListener("scroll", F),
                        function() {
                            return window.removeEventListener("scroll", F)
                        }
                }), [V, j]), (0, d.useEffect)((function() {
                    null !== n && void 0 !== n && n.useCookieShow ? A(!0) : A(!1)
                }), [n.useCookieShow]), (0, d.useEffect)((function() {
                    var e;
                    return null === P || void 0 === P || null === (e = P.current) || void 0 === e || e.addEventListener("input", z),
                        function() {
                            var e;
                            null === P || void 0 === P || null === (e = P.current) || void 0 === e || e.removeEventListener("input", z)
                        }
                }), []), L && L.indexOf("/features/ai-art-generator") > -1 ? (0, x.tZ)(I, function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? k(Object(t), !0).forEach((function(n) {
                            (0, i.Z)(e, n, t[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }))
                    }
                    return e
                }({}, e)) : (0, x.BX)("section", {
                    className: v().section,
                    style: {
                        background: null === X || void 0 === X ? void 0 : X.backgroundGradient
                    },
                    children: [(0, x.tZ)("div", {
                        className: v().gradient_block
                    }), (0, x.tZ)("div", {
                        className: v().gradient_block
                    }), (0, x.tZ)("div", {
                        className: v().gradient_block
                    }), (0, x.tZ)(l.Z, {
                        className: (0, c.Z)(v().container, v().container_mobileV2),
                        children: (0, x.BX)(l.Z.Row, {
                            className: v().row_container,
                            children: [(0, x.BX)("div", {
                                className: (0, c.Z)(v().row_container__info),
                                children: [(0, x.tZ)("h1", {
                                    dangerouslySetInnerHTML: {
                                        __html: null === X || void 0 === X ? void 0 : X.headingH1
                                    }
                                }), (0, x.tZ)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: null === X || void 0 === X ? void 0 : X.subheading
                                    }
                                }), null !== X && void 0 !== X && X.buttonLink ? (0, x.tZ)("div", {
                                    className: v().button_box,
                                    ref: V,
                                    children: (0, x.tZ)("button", {
                                        className: (0, c.Z)(v().button_link, p && v().isFixedInput),
                                        onClick: H,
                                        children: null === X || void 0 === X ? void 0 : X.buttonText
                                    })
                                }) : (0, x.BX)("div", {
                                    className: (0, c.Z)(v().input_and_surpriseme_container, !(X.homeVideoCarouselList && X.homeVideoCarouselList.length > 0 && X.youtubeVideo && X.youtubeVideo.length > 0) && v().input_and_surpriseme_container_nomargin_bottom),
                                    children: [(0, x.tZ)("div", {
                                        className: (0, c.Z)(v().input_container, r && v().input_container_focus),
                                        style: p && B ? {
                                            bottom: "48px"
                                        } : {},
                                        ref: V,
                                        onClick: function() {
                                            var e;
                                            null === P || void 0 === P || null === (e = P.current) || void 0 === e || e.focus()
                                        },
                                        children: (0, x.tZ)("textarea", {
                                            placeholder: r ? "" : null === X || void 0 === X ? void 0 : X.placeholderText,
                                            value: C,
                                            ref: P,
                                            onBlur: function() {
                                                u(!1)
                                            },
                                            onFocus: function() {
                                                u(!0)
                                            },
                                            onChange: function(e) {
                                                T(e.target.value)
                                            }
                                        })
                                    }), (0, x.BX)("div", {
                                        className: v().surprise_me,
                                        children: [(0, x.BX)("div", {
                                            onClick: D,
                                            children: [(0, x.tZ)(N, {}), (0, x.tZ)("button", {
                                                className: v().surprise_me_button,
                                                dangerouslySetInnerHTML: {
                                                    __html: null === X || void 0 === X ? void 0 : X.text
                                                }
                                            })]
                                        }), (0, x.tZ)("div", {
                                            children: (0, x.BX)("button", {
                                                onClick: H,
                                                className: v().green_button,
                                                children: [(0, x.tZ)(O, {}), null === X || void 0 === X ? void 0 : X.buttonText]
                                            })
                                        })]
                                    })]
                                }), (0, x.BX)("button", {
                                    className: (0, c.Z)(v().mobile_generate, p && v().isFixedButton),
                                    ref: j,
                                    onClick: H,
                                    children: [(0, x.tZ)(O, {}), null === X || void 0 === X ? void 0 : X.buttonText]
                                })]
                            }), X.homeVideoCarouselList && X.homeVideoCarouselList.length > 0 && X.youtubeVideo && X.youtubeVideo.length > 0 && (0, x.tZ)("div", {
                                className: v().video_container,
                                children: (0, x.tZ)(s.Z, {
                                    data: X.homeVideoCarouselList,
                                    userAgent: X.userAgent,
                                    youtubeVideo: X.youtubeVideo
                                })
                            }), (null === X || void 0 === X ? void 0 : X.isStartScore) && (0, x.tZ)(h.default, {
                                score: X.ratingValue,
                                lang: w.wb[E]
                            }), !(null !== X && void 0 !== X && X.buttonLink) && (0, x.tZ)("div", {
                                className: (0, c.Z)(v().input_and_surpriseme_container, v().input_fixed, p && v().input_fixed_show, v().float_input_and_surpriseme_container),
                                children: (0, x.BX)("div", {
                                    className: (0, c.Z)(v().input_container, r && v().input_container_focus, v().isFixedInput),
                                    onClick: function() {
                                        var e;
                                        null === R || void 0 === R || null === (e = R.current) || void 0 === e || e.focus()
                                    },
                                    style: p && B ? {
                                        bottom: "48px"
                                    } : {},
                                    children: [(0, x.tZ)("textarea", {
                                        placeholder: r ? "" : null === X || void 0 === X ? void 0 : X.placeholderText,
                                        value: C,
                                        ref: R,
                                        onBlur: function() {
                                            u(!1)
                                        },
                                        onFocus: function() {
                                            u(!0)
                                        },
                                        onChange: function(e) {
                                            T(e.target.value)
                                        }
                                    }), (0, x.BX)("button", {
                                        onClick: H,
                                        className: v().green_button,
                                        children: [(0, x.tZ)(O, {}), null === X || void 0 === X ? void 0 : X.buttonText]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        46880: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            t(59748);
            var i = t(34952),
                o = t(8311),
                r = function(e) {
                    var n = e.autoPlay,
                        t = void 0 === n || n,
                        r = e.handleMouseOver,
                        a = void 0 === r ? function() {} : r,
                        c = e.handleMouseOut,
                        u = void 0 === c ? function() {} : c,
                        l = e.poster ? i.Z[e.poster.volumeId] + e.poster.filename : void 0,
                        s = i.Z[e.videos[0].volumeId] + e.videos[0].filename,
                        d = void 0;
                    return e.videos[1] && (d = i.Z[e.videos[1].volumeId] + e.videos[1].filename), (0, o.BX)("video", {
                        autoPlay: t,
                        loop: !Object.getOwnPropertyDescriptor(e, "loop") || e.loop,
                        muted: !Object.getOwnPropertyDescriptor(e, "muted") || e.muted,
                        playsInline: !0,
                        className: e.className,
                        poster: l,
                        controls: e.controls,
                        onEnded: e.handleEnded,
                        onMouseOver: a,
                        onMouseOut: u,
                        children: [e.isMobile && d ? (0, o.tZ)("source", {
                            src: d,
                            type: "video/mp4"
                        }) : (0, o.tZ)("source", {
                            src: s,
                            type: "video/mp4"
                        }), "Your browser does not support Video tags."]
                    })
                }
        },
        47677: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return b
                }
            });
            var i = t(92809),
                o = t(80318),
                r = t(59748),
                a = t(94599),
                c = t(6045),
                u = t.n(c);
            var l = function(e, n) {
                    var t = (0, r.useRef)();
                    (0, r.useEffect)((function() {
                        t.current = e
                    }), [e]), (0, r.useEffect)((function() {
                        if (null !== n) {
                            var e = setInterval((function() {
                                t.current()
                            }), n);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                    }), [n])
                },
                s = t(46880),
                d = t(86010),
                _ = t(59359),
                v = (t(34952), t(8311));

            function m(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? m(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var p = 0;

            function g(e) {
                var n, t, i = e.data,
                    c = e.userAgent,
                    m = e.className,
                    g = e.isNeedSrcSet,
                    b = void 0 !== g && g,
                    h = e.youtubeVideo,
                    w = void 0 === h ? null : h,
                    Z = r.default.useState(0),
                    S = (0, o.Z)(Z, 2),
                    B = S[0],
                    x = S[1];
                i[B].duration || (i[B].duration = 3), l((function() {
                    if (!i[B].isRepeat)
                        if (i[B].duration > p) p++;
                        else {
                            p = 0;
                            var e = B + 1 === i.length ? 0 : B + 1;
                            x(e)
                        }
                }), i[B].duration <= p || i[B].video && i[B].video.length > 0 ? null : 1e3);
                var A = function(e) {
                    if (e.target && e.target.load && e.target.load(), !i[B].isRepeat) {
                        p = 0;
                        var n = B + 1 === i.length ? 0 : B + 1;
                        x(n)
                    }
                };
                r.default.useEffect((function() {
                    var e = document.querySelector(".videoCarouseActive");
                    e && e.load && e.load()
                }), [B]);
                var y = function(e) {
                    return 2 == e.length && (c.isMobile || _.tq) ? e[1] : e[0]
                };
                return (0, v.tZ)(v.HY, {
                    children: (0, v.tZ)("div", {
                        className: (0, d.Z)(u().videoCarouseImage, m || "", null !== (n = i[0]) && void 0 !== n && null !== (t = n.video) && void 0 !== t && t.length ? "" : u().videoCarouseActiveNoShadow),
                        children: i.map((function(e, n) {
                            return e.video && e.video.length > 0 ? (0, v.tZ)("div", {
                                style: {
                                    paddingTop: "".concat(y(e.videoImage).height / y(e.videoImage).width * 100, "%"),
                                    position: "relative",
                                    width: "100%",
                                    height: "100%"
                                },
                                children: w && w.length > 0 && w[0].videoUrl ? (0, v.tZ)("iframe", {
                                    src: w[0].videoUrl,
                                    className: u().iframes,
                                    title: w[0].videoTitle,
                                    frameBorder: "no"
                                }) : (0, v.tZ)(s.Z, {
                                    videos: e.video,
                                    poster: y(e.videoImage),
                                    isMobile: c.isMobile,
                                    className: (0, d.Z)(u().video, n === B ? "videoCarouseActive" : u().disable),
                                    controls: !1,
                                    handleEnded: A,
                                    loop: !1
                                })
                            }) : (0, v.tZ)(a.Z, {
                                data: f(f({}, y(e.videoImage)), {}, {
                                    imageLink: e.href
                                }),
                                className: n === B ? "videoCarouseActive" : u().disable,
                                isLzy: 0 !== n,
                                srcSet: b ? [{
                                    size: "(max-width:460px) 100vw",
                                    srcset: "500w"
                                }, {
                                    size: "(max-width:750px) 100vw",
                                    srcset: "750w"
                                }, {
                                    size: "(max-width:964px) 33vw",
                                    srcset: "350w"
                                }, {
                                    size: "(max-width:1192px) 33vw",
                                    srcset: "400w"
                                }, {
                                    size: "(max-width:1920px) 30vw",
                                    srcset: "600w"
                                }, {
                                    size: "30vw",
                                    srcset: "".concat(y(e.videoImage).width, "w")
                                }] : []
                            })
                        }))
                    })
                })
            }
            var b = (0, r.memo)(g)
        },
        72938: function(e) {
            e.exports = {
                green_button: "AiBannerSection_green_button__2JlOY",
                section: "AiBannerSection_section__1jTLi",
                gradient_block: "AiBannerSection_gradient_block__3RzqI",
                button_box: "AiBannerSection_button_box__1Imcp",
                container: "AiBannerSection_container__3-vYN",
                row_container: "AiBannerSection_row_container__Quwp7",
                row_container__info: "AiBannerSection_row_container__info__2qzMg",
                button_link: "AiBannerSection_button_link__1cimY",
                isFixedInput: "AiBannerSection_isFixedInput__xT6oK",
                input_fixed: "AiBannerSection_input_fixed__yVS_-",
                input_fixed_show: "AiBannerSection_input_fixed_show__MbyC9",
                input_and_surpriseme_container: "AiBannerSection_input_and_surpriseme_container__1GwlT",
                input_container_focus: "AiBannerSection_input_container_focus__XJ-EL",
                input_container: "AiBannerSection_input_container__1Zqqo",
                surprise_me: "AiBannerSection_surprise_me__2K2y3",
                surprise_me_button: "AiBannerSection_surprise_me_button__nzRwo",
                input_and_surpriseme_container_nomargin_bottom: "AiBannerSection_input_and_surpriseme_container_nomargin_bottom__Ug4_u",
                float_input_and_surpriseme_container: "AiBannerSection_float_input_and_surpriseme_container__1yoc8",
                video_container: "AiBannerSection_video_container__3x4Pg",
                mobile_generate: "AiBannerSection_mobile_generate__16CmD",
                container_mobileV2: "AiBannerSection_container_mobileV2__yVXNi",
                isFixedButton: "AiBannerSection_isFixedButton__2mvID",
                "gradient-color-conversion": "AiBannerSection_gradient-color-conversion__2ibfu"
            }
        },
        44924: function(e) {
            e.exports = {
                data_reveal: "DataReveal_data_reveal__1mq30",
                block: "DataReveal_block__2EFqZ",
                title: "DataReveal_title__3Fdr0",
                black_font: "DataReveal_black_font__RJCfS"
            }
        },
        67275: function(e) {
            e.exports = {
                section: "AiImageBannerSection_section__Exh7S",
                gradient_block: "AiImageBannerSection_gradient_block__2XIHS",
                button_box: "AiImageBannerSection_button_box__3rr7f",
                container: "AiImageBannerSection_container__3z65L",
                row_container: "AiImageBannerSection_row_container__3z31W",
                row_container__info: "AiImageBannerSection_row_container__info__KkASv",
                "gradient-color-conversion": "AiImageBannerSection_gradient-color-conversion__1PLUX",
                button_link: "AiImageBannerSection_button_link__2Aev0",
                isFixedInput: "AiImageBannerSection_isFixedInput__1twKN",
                input_fixed: "AiImageBannerSection_input_fixed__3uH24",
                input_fixed_show: "AiImageBannerSection_input_fixed_show__2uu0T",
                input_and_surpriseme_container: "AiImageBannerSection_input_and_surpriseme_container__1w6HJ",
                input_container_focus: "AiImageBannerSection_input_container_focus__37UTP",
                input_container: "AiImageBannerSection_input_container__zOatg",
                surprise_me: "AiImageBannerSection_surprise_me__3JM2q",
                ai_image_and_input: "AiImageBannerSection_ai_image_and_input__1RAjc",
                ai_image_and_input_fous: "AiImageBannerSection_ai_image_and_input_fous__1zbX0",
                ai_image_module: "AiImageBannerSection_ai_image_module__qJm1w",
                FTAIImage_container: "AiImageBannerSection_FTAIImage_container__3G79v",
                col: "AiImageBannerSection_col__ocWzO",
                video_container: "AiImageBannerSection_video_container__1ZNGl",
                mobile_generate: "AiImageBannerSection_mobile_generate__i0Spt",
                isFixedButton: "AiImageBannerSection_isFixedButton__1AWdN",
                fra_skeleton_loading: "AiImageBannerSection_fra_skeleton_loading__2ET3V",
                image_loading: "AiImageBannerSection_image_loading__28EJZ"
            }
        },
        6045: function(e) {
            e.exports = {
                videoCarouseImage: "VideoCarouse_videoCarouseImage__2IHfu",
                disable: "VideoCarouse_disable__JnAkT",
                video: "VideoCarouse_video__2A-dZ",
                videoCarouseActiveNoShadow: "VideoCarouse_videoCarouseActiveNoShadow__3K5Hx",
                iframes: "VideoCarouse_iframes__hdPLb"
            }
        },
        91234: function() {}
    }
]);