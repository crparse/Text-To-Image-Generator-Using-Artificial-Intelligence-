(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [91], {
        60091: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                default: function() {
                    return m
                }
            });
            var t = a(80318),
                _ = a(59748),
                u = a(75044),
                s = a.n(u),
                b = a(5152),
                c = a(86010),
                n = a(8311),
                d = (0, b.default)((function() {
                    return a.e(630).then(a.bind(a, 30630))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [30630]
                        },
                        modules: ["../components/public-components/FeatureBreadCrumbs/FeatureBreadCrumbs.tsx -> assets/icons/i-arrow-right.svg"]
                    }
                });
            (0, b.default)((function() {
                return a.e(2742).then(a.bind(a, 72742))
            }), {
                loadableGenerated: {
                    webpack: function() {
                        return [72742]
                    },
                    modules: ["../components/public-components/FeatureBreadCrumbs/FeatureBreadCrumbs.tsx -> assets/icons/home.svg"]
                }
            });

            function m(e) {
                var r = e.className,
                    a = void 0 === r ? "" : r,
                    u = e.style,
                    b = e.data,
                    m = e.mobileTheme,
                    i = e.isHeart,
                    l = e.theme,
                    o = _.default.useState(0),
                    h = (0, t.Z)(o, 2),
                    f = h[0],
                    w = h[1],
                    C = _.default.useState(!0),
                    B = (0, t.Z)(C, 2),
                    F = B[0],
                    g = B[1];
                return _.default.useEffect((function() {
                    var e = function() {
                        var e = document.documentElement.scrollTop;
                        g(e < f || 0 == e), w(e)
                    };
                    return window.addEventListener("scroll", e),
                        function() {
                            return window.removeEventListener("scroll", e)
                        }
                }), [f]), (0, n.tZ)("div", {
                    className: (0, c.Z)(s().bread_crumbs_bg, !F && s().hide, 0 !== f && s().white_bg, "black" === m && s().mobileblack, "white" === l && s().bread_crumbs_bg_white, a),
                    style: u || {},
                    children: (0, n.tZ)("div", {
                        className: (0, c.Z)(s().bread_crumbs, i ? s().heart : s().no_heart, "white" === l && s().bread_crumbs_white),
                        children: b && b.map((function(e, r) {
                            return (0, n.BX)("span", {
                                className: s().bread_crumbs__itme,
                                children: [(0, n.tZ)("a", {
                                    href: e.link,
                                    className: (0, c.Z)(e.isLast ? s().bread_crumbs__last : "", 0 !== f && e.isLast && s().black_color),
                                    children: e.label
                                }), !e.isLast && (0, n.tZ)(d, {
                                    className: s().rightArrow
                                })]
                            }, "breadCrumbs_".concat(r))
                        }))
                    })
                })
            }
        },
        75044: function(e) {
            e.exports = {
                bread_crumbs: "FeatureBreadCrumbs_bread_crumbs__3reN7",
                bread_crumbs__itme: "FeatureBreadCrumbs_bread_crumbs__itme__2KXWs",
                bread_crumbs__home: "FeatureBreadCrumbs_bread_crumbs__home__3_rZ3",
                bread_crumbs__last: "FeatureBreadCrumbs_bread_crumbs__last__3VfPJ",
                black_color: "FeatureBreadCrumbs_black_color__1WaRN",
                bread_crumbs_white: "FeatureBreadCrumbs_bread_crumbs_white__5wgkt",
                bread_crumbs_bg_white: "FeatureBreadCrumbs_bread_crumbs_bg_white__37F23",
                rightArrow: "FeatureBreadCrumbs_rightArrow__C9np1",
                black_bg: "FeatureBreadCrumbs_black_bg__2kXUW",
                white_bg: "FeatureBreadCrumbs_white_bg__3I0OT",
                heart: "FeatureBreadCrumbs_heart__3Bp1x",
                no_heart: "FeatureBreadCrumbs_no_heart__2KEGV",
                bread_crumbs_bg: "FeatureBreadCrumbs_bread_crumbs_bg__3lIK2",
                hide: "FeatureBreadCrumbs_hide__3YLzW",
                mobileblack: "FeatureBreadCrumbs_mobileblack__1Qnlp"
            }
        }
    }
]);