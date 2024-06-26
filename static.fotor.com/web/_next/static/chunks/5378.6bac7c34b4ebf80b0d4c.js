(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5378], {
        5378: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = o(92809),
                n = o(86010),
                a = o(59748),
                l = o(31779),
                i = o.n(l),
                u = o(5152),
                c = o(86438),
                s = o(91632),
                _ = o(38388),
                m = o(43262),
                h = o(10518),
                p = o(8311);

            function b(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(o), !0).forEach((function(e) {
                        (0, r.Z)(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : b(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }
            var f = (0, u.default)((function() {
                return o.e(6177).then(o.bind(o, 46177))
            }), {
                loadableGenerated: {
                    webpack: function() {
                        return [46177]
                    },
                    modules: ["../components/public-components/ShareToPlatform/ShareToPlatform.tsx -> assets/icons/share.svg"]
                }
            });
            e.default = function(t) {
                var e = t.facebook,
                    o = t.twitter,
                    r = void 0 === o ? {
                        url: void 0,
                        description: void 0
                    } : o,
                    l = t.pinterest,
                    u = void 0 === l ? {
                        url: void 0,
                        thumb: void 0,
                        description: void 0
                    } : l,
                    b = t.linkedin,
                    S = t.copyLink,
                    P = t.style,
                    T = t.mode,
                    w = void 0 === T ? "simple" : T,
                    y = t.className,
                    g = t.rowSmall,
                    v = void 0 !== g && g,
                    k = t.minScrollDistance,
                    F = t.maxScrollDistance,
                    O = t.siteId,
                    E = (0, a.useState)({}),
                    Z = E[0],
                    j = E[1],
                    N = (0, a.useState)(!1),
                    C = N[0],
                    x = N[1],
                    H = (0, a.useRef)(),
                    L = (0, a.useState)("en_US"),
                    D = L[0],
                    A = L[1];
                (0, a.useEffect)((function() {
                    var t = new Object;
                    [].forEach.call(document.querySelectorAll("meta[property]"), (function(e) {
                        var o = e.getAttribute("property").split(":");
                        t.hasOwnProperty(o[0]) || (t[o[0]] = {}), t[o[0]][o[1]] = e.getAttribute("content")
                    })), t.url = location.href, j(t)
                }), []), (0, a.useEffect)((function() {
                    A(h.Z[m.$L[O]])
                }), [O]), (0, a.useEffect)((function() {
                    return "simple" === w ? (k || F) && (B(), window && window.removeEventListener("scroll", B), window && window.addEventListener("scroll", B)) : (H.current.style.visibility = "visible", H.current.style.opacity = "1", window && window.removeEventListener("scroll", B)),
                        function() {
                            window.removeEventListener("scroll", B)
                        }
                }), [k, F, w]);
                var B = function() {
                    var t = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                        e = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight - (F || 0),
                        o = k || 0;
                    H.current && (t >= o && e >= t ? (H.current.style.visibility = "visible", H.current.style.opacity = "1") : (H.current.style.visibility = "hidden", H.current.style.opacity = "0"))
                };
                return (0, p.BX)("div", {
                    className: (0, n.Z)(i().ShareToPlatForm, i()[w], y && y),
                    style: "simple" === w ? d(d({}, P), {
                        visibility: "hidden",
                        opacity: 0
                    }) : P,
                    ref: H,
                    children: [(0, p.BX)("div", {
                        className: (0, n.Z)(i().ShareToPlatForm_button_group, C ? i().show : i().hide, v && i().small),
                        children: [(0, p.tZ)("button", {
                            className: i().ShareToPlatForm_button_group_facebook,
                            onClick: function() {
                                (0, c.eT)("facebook", {
                                    url: e || Z.url
                                })
                            },
                            "aria-label": "share to facebook"
                        }), (0, p.tZ)("button", {
                            className: i().ShareToPlatForm_button_group_twitter,
                            onClick: function() {
                                (0, c.eT)("twitter", {
                                    url: r.url || Z.url,
                                    description: r.description || Z.twitter.title
                                })
                            },
                            "aria-label": "share to twitter"
                        }), (0, p.tZ)("button", {
                            className: i().ShareToPlatForm_button_group_pinterest,
                            onClick: function() {
                                (0, c.eT)("pinterest", {
                                    url: u.url || Z.url,
                                    thumb: u.thumb || Z.og.image,
                                    description: u.description || Z.og.description
                                })
                            },
                            "aria-label": "share to pinterest"
                        }), (0, p.tZ)("button", {
                            className: i().ShareToPlatForm_button_group_linkedin,
                            onClick: function() {
                                (0, c.eT)("linkedin", {
                                    url: b || Z.url
                                })
                            },
                            "aria-label": "share to linkedin"
                        }), (0, p.tZ)("button", {
                            className: i().ShareToPlatForm_button_group_copy,
                            onClick: function() {
                                (0, c.fB)(S || Z.url)
                            },
                            "aria-label": "share the link"
                        })]
                    }), (0, p.BX)("button", {
                        className: i().ShareToPlatForm_share_button,
                        onClick: function() {
                            x(!C)
                        },
                        children: [(0, p.tZ)(f, {}), (0, p.tZ)("span", {
                            children: (0, s.Z)("share_button_text") || _.Z[D].share_button_text
                        })]
                    })]
                })
            }
        },
        31779: function(t) {
            t.exports = {
                ShareToPlatForm: "ShareToPlatform_ShareToPlatForm__aiYLc",
                ShareToPlatForm_button_group: "ShareToPlatform_ShareToPlatForm_button_group__10R1b",
                ShareToPlatForm_button_group_facebook: "ShareToPlatform_ShareToPlatForm_button_group_facebook__2ZceA",
                ShareToPlatForm_button_group_twitter: "ShareToPlatform_ShareToPlatForm_button_group_twitter__14HXQ",
                ShareToPlatForm_button_group_pinterest: "ShareToPlatform_ShareToPlatForm_button_group_pinterest__13oNv",
                ShareToPlatForm_button_group_linkedin: "ShareToPlatform_ShareToPlatForm_button_group_linkedin__rnE6d",
                ShareToPlatForm_button_group_copy: "ShareToPlatform_ShareToPlatForm_button_group_copy__1YZze",
                column: "ShareToPlatform_column__27CmR",
                ShareToPlatForm_share_button: "ShareToPlatform_ShareToPlatForm_share_button__uOJeh",
                hide: "ShareToPlatform_hide__33I-s",
                show: "ShareToPlatform_show__3xVly",
                row: "ShareToPlatform_row__2r01h",
                small: "ShareToPlatform_small__rvkdc",
                simple: "ShareToPlatform_simple__22Q4W"
            }
        }
    }
]);