"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6581], {
        6581: function(e, t, l) {
            l.r(t);
            var r = l(59748);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var n = r.createElement("defs", null, r.createElement("clipPath", {
                    id: "three-star_svg__a"
                }, r.createElement("rect", {
                    width: 24,
                    height: 24,
                    rx: 0
                }))),
                c = r.createElement("path", {
                    d: "M7.5 6l1.94 3.56L13 11.5l-3.56 1.94L7.5 17l-1.94-3.56L2 11.5l3.56-1.94L7.5 6z",
                    fill: "#62FFB8"
                }),
                h = r.createElement("path", {
                    d: "M17 13l1.411 2.589L21 17l-2.589 1.411L17 21l-1.411-2.589L13 17l2.589-1.411L17 13z",
                    fill: "#FFF"
                }),
                i = r.createElement("path", {
                    d: "M15 2l1.059 1.941L18 5l-1.941 1.059L15 8l-1.059-1.941L12 5l1.941-1.059L15 2z",
                    fill: "#D1FB7D"
                });
            t.default = function(e) {
                return r.createElement("svg", a({
                    fill: "none",
                    width: 24,
                    height: 24
                }, e), n, r.createElement("g", {
                    style: {
                        mixBlendMode: "passthrough"
                    },
                    clipPath: "url(#three-star_svg__a)"
                }, c, h, i))
            }
        }
    }
]);