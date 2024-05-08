/* clarity-js v0.7.26: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get queue() {
                return Ya
            },
            get start() {
                return Xa
            },
            get stop() {
                return qa
            },
            get track() {
                return La
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get clone() {
                return sr
            },
            get compute() {
                return lr
            },
            get data() {
                return er
            },
            get keys() {
                return nr
            },
            get reset() {
                return dr
            },
            get start() {
                return ur
            },
            get stop() {
                return hr
            },
            get trigger() {
                return cr
            },
            get update() {
                return fr
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get check() {
                return yr
            },
            get compute() {
                return kr
            },
            get data() {
                return tr
            },
            get start() {
                return br
            },
            get stop() {
                return Er
            },
            get trigger() {
                return wr
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get compute() {
                return Tr
            },
            get data() {
                return Or
            },
            get log() {
                return Mr
            },
            get reset() {
                return _r
            },
            get start() {
                return Nr
            },
            get stop() {
                return xr
            },
            get updates() {
                return Sr
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get callbacks() {
                return Cr
            },
            get clear() {
                return Wr
            },
            get consent() {
                return Hr
            },
            get data() {
                return Ir
            },
            get electron() {
                return Dr
            },
            get id() {
                return zr
            },
            get metadata() {
                return Rr
            },
            get save() {
                return Xr
            },
            get shortid() {
                return Ur
            },
            get start() {
                return Ar
            },
            get stop() {
                return Lr
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return Gr
            },
            get envelope() {
                return $r
            },
            get start() {
                return Zr
            },
            get stop() {
                return Qr
            }
        }),
        o = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null,
            dob: null
        };

    function u(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now();
        return Math.max(Math.round(e - c), 0)
    }
    var l = "0.7.26";

    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi,
        h = !0,
        p = null,
        v = null,
        g = null;

    function m(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                a = !1,
                                r = !1,
                                i = !1,
                                o = null;
                            O();
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = h && null !== g ? s.match(g) ? s : k(s, "▪", "▫") : w(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t);
                    case "input":
                    case "change":
                        return E(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                    case "change":
                        return E(t);
                    case "placeholder":
                        return w(t)
                }
                break;
            case 4:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                        return ""
                }
                break;
            case 5:
                switch (e) {
                    case "*T":
                    case "data-":
                        return k(t, "▪", "▫");
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                    case "src":
                    case "srcset":
                    case "alt":
                    case "title":
                        return ""
                }
        }
        return t
    }

    function b(t, e) {
        if (void 0 === e && (e = !1), e) return "".concat("https://").concat("Electron");
        var n = o.drop;
        if (n && n.length > 0 && t && t.indexOf("?") > 0) {
            var a = t.split("?"),
                r = a[0],
                i = a[1];
            return r + "?" + i.split("&").map((function(t) {
                return n.some((function(e) {
                    return 0 === t.indexOf("".concat(e, "="))
                })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
            })).join("&")
        }
        return t
    }

    function y(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function w(t) {
        return t.replace(f, "•")
    }

    function k(t, e, n) {
        return O(), t ? t.replace(v, e).replace(p, n) : t
    }

    function E(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function O() {
        if (h && null === p) try {
            p = new RegExp("\\p{N}", "gu"), v = new RegExp("\\p{L}", "gu"), g = new RegExp("\\p{Sc}", "gu")
        } catch (t) {
            h = !1
        }
    }
    var S = null,
        N = null,
        x = !1;

    function M() {
        x && (S = {
            time: s(),
            event: 4,
            data: {
                visible: N.visible,
                docWidth: N.docWidth,
                docHeight: N.docHeight,
                screenWidth: N.screenWidth,
                screenHeight: N.screenHeight,
                scrollX: N.scrollX,
                scrollY: N.scrollY,
                pointerX: N.pointerX,
                pointerY: N.pointerY,
                activityTime: N.activityTime
            }
        }), N = N || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function T(t, e, n) {
        switch (t) {
            case 8:
                N.docWidth = e, N.docHeight = n;
                break;
            case 11:
                N.screenWidth = e, N.screenHeight = n;
                break;
            case 10:
                N.scrollX = e, N.scrollY = n;
                break;
            default:
                N.pointerX = e, N.pointerY = n
        }
        x = !0
    }

    function _(t) {
        N.activityTime = t
    }

    function I(t, e) {
        N.visible = "visible" === e ? 1 : 0, N.visible || _(t), x = !0
    }

    function C() {
        x && mr(4)
    }
    var D = Object.freeze({
            __proto__: null,
            activity: _,
            compute: C,
            reset: M,
            start: function() {
                x = !1, M()
            },
            get state() {
                return S
            },
            stop: function() {
                M()
            },
            track: T,
            visibility: I
        }),
        j = null;

    function A(t, e) {
        mi() && t && "string" == typeof t && t.length < 255 && (j = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        }, mr(24))
    }
    var L, R = null,
        z = null;

    function H(t) {
        t in R || (R[t] = 0), t in z || (z[t] = 0), R[t]++, z[t]++
    }

    function W(t, e) {
        null !== e && (t in R || (R[t] = 0), t in z || (z[t] = 0), R[t] += e, z[t] += e)
    }

    function X(t, e) {
        null !== e && !1 === isNaN(e) && (t in R || (R[t] = 0), (e > R[t] || 0 === R[t]) && (z[t] = e, R[t] = e))
    }

    function Y(t, e, n) {
        return window.setTimeout(ni(t), e, n)
    }

    function q(t) {
        return window.clearTimeout(t)
    }
    var U = 0,
        P = 0,
        V = null;

    function B() {
        V && q(V), V = Y(F, P), U = s()
    }

    function F() {
        var t = s();
        L = {
            gap: t - U
        }, mr(25), L.gap < 3e5 ? V = Y(F, P) : pi && (A("clarity", "suspend"), ji(), ["mousemove", "touchstart"].forEach((function(t) {
            return ri(document, t, yi)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return ri(window, t, yi)
        })))
    }
    var J = Object.freeze({
            __proto__: null,
            get data() {
                return L
            },
            reset: B,
            start: function() {
                P = 6e4, U = 0
            },
            stop: function() {
                q(V), U = 0, P = 0
            }
        }),
        K = null;

    function G(t, e) {
        if (t in K) {
            var n = K[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? K[t].push([e, 0]) : a[1] = e - a[0]
        } else K[t] = [
            [e, 0]
        ]
    }

    function Z() {
        mr(36)
    }

    function Q() {
        K = {}
    }
    var $ = Object.freeze({
            __proto__: null,
            compute: Z,
            get data() {
                return K
            },
            reset: Q,
            start: function() {
                K = {}
            },
            stop: function() {
                K = {}
            },
            track: G
        }),
        tt = null;

    function et(t) {
        mi() && o.lean && (o.lean = !1, tt = {
            key: t
        }, Xr(), o.upgrade && o.upgrade(t), mr(3))
    }
    var nt = Object.freeze({
        __proto__: null,
        get data() {
            return tt
        },
        start: function() {
            !o.lean && o.upgrade && o.upgrade("Config"), tt = null
        },
        stop: function() {
            tt = null
        },
        upgrade: et
    });

    function at(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function rt(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var it = null;

    function ot(t, e) {
        ct(t, "string" == typeof e ? [e] : e)
    }

    function ut(t, e, n, a) {
        return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), at(this, void 0, void 0, (function() {
            var r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return i = {}, [4, dt(t)];
                    case 1:
                        return i.userId = o.sent(), i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(k(u.substring(2), "*", "*")) : k(u, "*", "*")), ct("userId", [(r = i).userId]), ct("userHint", [r.userHint]), ct("userType", [ft(t)]), e && (ct("sessionId", [e]), r.sessionId = e), n && (ct("pageId", [n]), r.pageId = n), [2, r]
                }
                var u
            }))
        }))
    }

    function ct(t, e) {
        if (mi() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in it ? it[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            it[t] = n
        }
    }

    function st() {
        mr(34)
    }

    function lt() {
        it = {}
    }

    function dt(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 4, , 5]), crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                    case 1:
                        return e = n.sent(), [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                            return ("00" + t.toString(16)).slice(-2)
                        })).join("")];
                    case 2:
                        return [2, ""];
                    case 3:
                        return [3, 5];
                    case 4:
                        return n.sent(), [2, ""];
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    function ft(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var ht = "CompressionStream" in window;

    function pt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), ht ? (e = new ReadableStream({
                            start: function(e) {
                                return at(this, void 0, void 0, (function() {
                                    return rt(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, vt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function vt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var gt = [D, a, Object.freeze({
        __proto__: null,
        compute: st,
        get data() {
            return it
        },
        identify: ut,
        reset: lt,
        set: ot,
        start: function() {
            lt()
        },
        stop: function() {
            lt()
        }
    }), n, $, r, i, t, J, nt, e];

    function mt() {
        R = {}, z = {}, H(5), gt.forEach((function(t) {
            return ni(t.start)()
        }))
    }

    function bt() {
        gt.slice().reverse().forEach((function(t) {
            return ni(t.stop)()
        })), R = {}, z = {}
    }

    function yt() {
        st(), C(), Tr(), mr(0), Z(), kr(), lr()
    }
    var wt, kt = [];

    function Et(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (wt = {
            id: t,
            target: e,
            checksum: d(n, 24)
        }, kt.indexOf(wt.checksum) < 0 && (kt.push(wt.checksum), Ga(41)))
    }
    var Ot = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        St = {};

    function Nt(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return xt(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in St || (St[c] = []), St[c].indexOf(t.id) < 0 && St[c].push(t.id), i = "".concat(c).concat("~").concat(St[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && xt(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function xt(t) {
        if (!t) return !1;
        if (Ot.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var Mt = 1,
        Tt = null,
        _t = [],
        It = [],
        Ct = {},
        Dt = [],
        jt = [],
        At = [],
        Lt = [],
        Rt = [],
        zt = [],
        Ht = null,
        Wt = null,
        Xt = null,
        Yt = null;

    function qt() {
        Pt(), Vt(document, !0)
    }

    function Ut() {
        Pt()
    }

    function Pt() {
        Mt = 1, _t = [], It = [], Ct = {}, Dt = [], jt = [], At = "address,password,contact".split(","), Lt = "password,secret,pass,social,ssn,code,hidden".split(","), Rt = "radio,checkbox,range,button,reset,submit".split(","), zt = "INPUT,SELECT,TEXTAREA".split(","), Tt = new Map, Ht = new WeakMap, Wt = new WeakMap, Xt = new WeakMap, Yt = new WeakMap, St = {}
    }

    function Vt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? jt.push(t) : Dt.push(t.substr(1))
            })), "querySelectorAll" in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Je(t, "".concat(e[0]))
                }))
            })), o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Xt.set(t, 3)
                }))
            })), o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Yt.set(t, e[0])
                }))
            })), jt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Xt.set(t, 0)
                }))
            })))
        } catch (t) {
            $a(5, 1, t ? t.name : null)
        }
    }

    function Bt(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Ht.get(t);
        return !n && e && (n = Mt++, Ht.set(t, n)), n || null
    }

    function Ft(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Wt.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Jt(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Wt.has(e) ? Wt.get(e) : null
    }

    function Kt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Gt(t) {
        var e = t.parent && t.parent in _t ? _t[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = _t[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [Nt(i, 0), Nt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return Ct[e] = t.id
        }))
    }

    function Zt(t) {
        var e = Qt(te(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function Qt(t) {
        return Tt.has(t) ? Tt.get(t) : null
    }

    function $t(t) {
        var e = Bt(t);
        return e in _t ? _t[e] : null
    }

    function te(t) {
        return t in Ct ? Ct[t] : null
    }

    function ee(t) {
        return Tt.has(Bt(t))
    }

    function ne() {
        for (var t = [], e = 0, n = It; e < n.length; e++) {
            var a = n[e];
            a in _t && t.push(_t[a])
        }
        return It = [], t
    }

    function ae(t) {
        Tt.delete(t);
        var e = t in _t ? _t[t] : null;
        if (e && e.children)
            for (var n = 0, a = e.children; n < a.length; n++) {
                ae(a[n])
            }
    }

    function re(t) {
        for (var e = null; null === e && t.previousSibling;) e = Bt(t.previousSibling), t = t.previousSibling;
        return e
    }

    function ie(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = It.indexOf(t);
        r >= 0 && 1 === e && a ? (It.splice(r, 1), It.push(t)) : -1 === r && n && It.push(t)
    }
    var oe = Object.freeze({
            __proto__: null,
            add: function(t, e, n, a) {
                var r, i = Bt(t, !0),
                    u = e ? Bt(e) : null,
                    c = re(t),
                    s = null,
                    l = Ke(t) ? i : null,
                    d = Yt.has(t) ? Yt.get(t) : null,
                    f = o.content ? 1 : 3;
                u >= 0 && _t[u] && ((s = _t[u]).children.push(i), l = null === l ? s.region : l, d = null === d ? s.metadata.fraud : d, f = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Je(t, n.attributes["data-clarity-region"]), l = i), Tt.set(i, t), _t[i] = {
                        id: i,
                        parent: u,
                        previous: c,
                        children: [],
                        data: n,
                        selector: null,
                        hash: null,
                        region: l,
                        metadata: {
                            active: !0,
                            suspend: !1,
                            privacy: f,
                            position: null,
                            fraud: d,
                            size: null
                        }
                    },
                    function(t, e, n) {
                        var a = e.data,
                            r = e.metadata,
                            i = r.privacy,
                            o = a.attributes || {},
                            u = a.tag.toUpperCase();
                        switch (!0) {
                            case zt.indexOf(u) >= 0:
                                var c = o.type,
                                    s = "";
                                Object.keys(o).forEach((function(t) {
                                    return s += o[t].toLowerCase()
                                }));
                                var l = Lt.some((function(t) {
                                    return s.indexOf(t) >= 0
                                }));
                                r.privacy = "INPUT" === u && Rt.indexOf(c) >= 0 ? i : l ? 4 : 2;
                                break;
                            case "data-clarity-mask" in o:
                                r.privacy = 3;
                                break;
                            case "data-clarity-unmask" in o:
                                r.privacy = 0;
                                break;
                            case Xt.has(t):
                                r.privacy = Xt.get(t);
                                break;
                            case Yt.has(t):
                                r.privacy = 2;
                                break;
                            case "*T" === u:
                                var d = n && n.data ? n.data.tag : "",
                                    f = n && n.selector ? n.selector[1] : "",
                                    h = ["STYLE", "TITLE", "svg:style"];
                                r.privacy = h.includes(d) || Dt.some((function(t) {
                                    return f.indexOf(t) >= 0
                                })) ? 0 : i;
                                break;
                            case 1 === i:
                                r.privacy = function(t, e, n) {
                                    if (t && e.some((function(e) {
                                            return t.indexOf(e) >= 0
                                        }))) return 2;
                                    return n.privacy
                                }(o.class, At, r)
                        }
                    }(t, _t[i], s), Gt(_t[i]), "IMG" === (r = _t[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), ie(i, a)
            },
            get: $t,
            getId: Bt,
            getNode: Qt,
            getValue: function(t) {
                return t in _t ? _t[t] : null
            },
            has: ee,
            hashText: Zt,
            iframe: Jt,
            lookup: te,
            parse: Vt,
            sameorigin: Ft,
            start: qt,
            stop: Ut,
            update: function(t, e, n, a) {
                var r = Bt(t),
                    i = e ? Bt(e) : null,
                    o = re(t),
                    u = !1,
                    c = !1;
                if (r in _t) {
                    var s = _t[r];
                    if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                        u = !0;
                        var l = s.parent;
                        if (s.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : _t[i].children.indexOf(o) + 1;
                            _t[i].children.splice(d, 0, r), s.region = Ke(t) ? r : _t[i].region
                        } else ! function(t, e) {
                            if (t in _t) {
                                var n = _t[t];
                                n.metadata.active = !1, n.parent = null, ie(t, e), ae(t)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = _t[l].children.indexOf(r);
                            f >= 0 && _t[l].children.splice(f, 1)
                        }
                        c = !0
                    }
                    for (var h in n) Kt(s.data, n, h) && (u = !0, s.data[h] = n[h]);
                    Gt(s), ie(r, a, u, c)
                }
            },
            updates: ne
        }),
        ue = 5e3,
        ce = {},
        se = [],
        le = null,
        de = null,
        fe = null;

    function he() {
        ce = {}, se = [], le = null, de = null
    }

    function pe(t, e) {
        return void 0 === e && (e = 0), at(this, void 0, void 0, (function() {
            var n, a, r;
            return rt(this, (function(i) {
                for (n = 0, a = se; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    se[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: zr()
                    })
                })), null === le && null === de && ve(), [2, r]
            }))
        }))
    }

    function ve() {
        var t = se.shift();
        t && (le = t, t.task().then((function() {
            t.id === zr() && (t.resolve(), le = null, ve())
        })).catch((function(e) {
            t.id === zr() && (e && $a(0, 1, e.name, e.message, e.stack), le = null, ve())
        })))
    }

    function ge(t) {
        var e = we(t);
        return e in ce ? performance.now() - ce[e].start > ce[e].yield ? 0 : 1 : 2
    }

    function me(t) {
        ce[we(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function be(t) {
        var e = performance.now(),
            n = we(t),
            a = e - ce[n].start;
        W(t.cost, a), H(5), ce[n].calls > 0 && W(4, a)
    }

    function ye(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = we(t)) in ce ? (be(t), n = ce[e], [4, ke()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = we(t);
                                if (ce && ce[e]) {
                                    var n = ce[e].calls,
                                        a = ce[e].yield;
                                    me(t), ce[e].calls = n + 1, ce[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in ce ? 1 : 2]
                }
            }))
        }))
    }

    function we(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function ke() {
        return at(this, void 0, void 0, (function() {
            return rt(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return de ? [4, de] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Oe(t, {
                                timeout: ue
                            })
                        }))]
                }
            }))
        }))
    }
    var Ee, Oe = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function Se() {
        Ee = null
    }

    function Ne() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, h, p);
        null !== Ee && c === Ee.width && v === Ee.height || null === c || null === v || (Ee = {
            width: c,
            height: v
        }, He(8))
    }
    var xe = [],
        Me = [],
        Te = null,
        _e = null,
        Ie = null,
        Ce = null,
        De = "clarityAnimationId",
        je = "clarityOperationCount",
        Ae = 20;

    function Le() {
        Me = []
    }

    function Re(t, e, n, a, r, i, o) {
        Me.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: r,
                targetId: i,
                timeline: o
            }
        }), He(44)
    }

    function ze(t, e) {
        null === t && (t = Animation.prototype[e], Animation.prototype[e] = function() {
            if (mi()) {
                var n = this.effect,
                    a = Bt(this.effect.target);
                if (null !== a && n.getKeyframes && n.getTiming) {
                    if (!this[De]) {
                        this[De] = Ur(), this[je] = 0;
                        var r = n.getKeyframes(),
                            i = n.getTiming();
                        Re(s(), this[De], 0, JSON.stringify(r), JSON.stringify(i), a)
                    }
                    if (this[je]++ < Ae) {
                        var o = null;
                        switch (e) {
                            case "play":
                                o = 1;
                                break;
                            case "pause":
                                o = 2;
                                break;
                            case "cancel":
                                o = 3;
                                break;
                            case "finish":
                                o = 4
                        }
                        o && Re(s(), this[De], o)
                    }
                }
            }
            return t.apply(this, arguments)
        })
    }

    function He(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), at(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, h, p, v, g, b, y, w, k, E, O, S, N, x, M, I, C, D, j, A, L, R;
            return rt(this, (function(z) {
                switch (z.label) {
                    case 0:
                        switch (a = n || s(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 45:
                                return [3, 3];
                            case 46:
                                return [3, 4];
                            case 44:
                                return [3, 5];
                            case 5:
                            case 6:
                                return [3, 6]
                        }
                        return [3, 13];
                    case 1:
                        return i = Ee, r.push(i.width), r.push(i.height), T(t, i.width, i.height), Ya(r), [3, 13];
                    case 2:
                        for (u = 0, c = qe; u < c.length; u++) l = c[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), Ya(r);
                        return tn(), [3, 13];
                    case 3:
                        for (d = 0, f = xe; d < f.length; d++) b = f[d], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.newIds), Ya(r);
                        return [3, 13];
                    case 4:
                        for (h = 0, p = xe; h < p.length; h++) b = p[h], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.cssRules), Ya(r);
                        z.label = 5;
                    case 5:
                        for (v = 0, g = Me; v < g.length; v++) b = g[v], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.keyFrames), r.push(b.data.timing), r.push(b.data.timeline), r.push(b.data.targetId), Ya(r);
                        return Le(), [3, 13];
                    case 6:
                        if (2 === ge(e)) return [3, 13];
                        if (!((y = ne()).length > 0)) return [3, 12];
                        w = 0, k = y, z.label = 7;
                    case 7:
                        return w < k.length ? (E = k[w], 0 !== (O = ge(e)) ? [3, 9] : [4, ye(e)]) : [3, 11];
                    case 8:
                        O = z.sent(), z.label = 9;
                    case 9:
                        if (2 === O) return [3, 11];
                        for (S = E.data, N = E.metadata.active, x = E.metadata.suspend, M = E.metadata.privacy, I = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(E), C = 0, D = N ? ["tag", "attributes", "value"] : ["tag"]; C < D.length; C++)
                            if (S[j = D[C]]) switch (j) {
                                case "tag":
                                    A = We(E), L = I ? -1 : 1, r.push(E.id * L), E.parent && N && r.push(E.parent), E.previous && N && r.push(E.previous), r.push(x ? "*M" : S[j]), A && 2 === A.length && r.push("".concat("#").concat(Xe(A[0]), ".").concat(Xe(A[1])));
                                    break;
                                case "attributes":
                                    for (R in S[j]) void 0 !== S[j][R] && r.push(Ye(R, S[j][R], M));
                                    break;
                                case "value":
                                    Et(E.metadata.fraud, E.id, S[j]), r.push(m(S[j], S.tag, M, I))
                            }
                        z.label = 10;
                    case 10:
                        return w++, [3, 7];
                    case 11:
                        6 === t && _(a), Ya(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !o.lean), z.label = 12;
                    case 12:
                        return [3, 13];
                    case 13:
                        return [2]
                }
            }))
        }))
    }

    function We(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = Qt(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Xe(t) {
        return t.toString(36)
    }

    function Ye(t, e, n) {
        return "".concat(t, "=").concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }
    var qe = [],
        Ue = null,
        Pe = {},
        Ve = [],
        Be = !1,
        Fe = null;

    function Je(t, e) {
        !1 === Ue.has(t) && (Ue.set(t, e), (Fe = null === Fe && Be ? new IntersectionObserver(Ze, {
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : Fe) && t && t.nodeType === Node.ELEMENT_NODE && Fe.observe(t))
    }

    function Ke(t) {
        return Ue && Ue.has(t)
    }

    function Ge() {
        for (var t = [], e = 0, n = Ve; e < n.length; e++) {
            var a = n[e],
                r = Bt(a.node);
            r ? (a.state.data.id = r, Pe[r] = a.state.data, qe.push(a.state)) : t.push(a)
        }
        Ve = t, qe.length > 0 && He(7)
    }

    function Ze(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Ue.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Bt(r) : null,
                    s = c in Pe ? Pe[c] : {
                        id: c,
                        name: Ue.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                Qe(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Fe && Fe.unobserve(r)
            }
        }
        qe.length > 0 && He(7)
    }

    function Qe(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Pe && r || !(e.id in Pe)) && (Pe[e.id] = e, qe.push($e(e))) : Ve.push({
            node: t,
            state: $e(e)
        })
    }

    function $e(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function tn() {
        qe = []
    }
    var en = [];

    function nn(t) {
        var e = Sa(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && o.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? d(n, 24) : "";
            en.push({
                time: s(t),
                event: 42,
                data: {
                    target: Sa(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), pe(xa.bind(this, 42))
        }
    }

    function an() {
        en = []
    }

    function rn(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Jt(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var on = ["input", "textarea", "radio", "button", "canvas"],
        un = [];

    function cn(t) {
        ri(t, "click", sn.bind(this, 9, t), !0)
    }

    function sn(t, e, n) {
        var a = Jt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = rn(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = Sa(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (un.push({
            time: s(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: dn(c),
                context: fn(l),
                text: ln(c),
                link: l ? l.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), pe(xa.bind(this, t)))
    }

    function ln(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25))
        }
        return e
    }

    function dn(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (on.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function fn(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function hn() {
        un = []
    }
    var pn = [];

    function vn(t, e) {
        pn.push({
            time: s(e),
            event: 38,
            data: {
                target: Sa(e),
                action: t
            }
        }), pe(xa.bind(this, 38))
    }

    function gn() {
        pn = []
    }
    var mn = null,
        bn = [];

    function yn(t) {
        var e = Sa(t),
            n = $t(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {
                target: e,
                value: a
            };
            bn.length > 0 && bn[bn.length - 1].data.target === r.target && bn.pop(), bn.push({
                time: s(t),
                event: 27,
                data: r
            }), q(mn), mn = Y(wn, 1e3, 27)
        }
    }

    function wn(t) {
        pe(xa.bind(this, t))
    }

    function kn() {
        bn = []
    }
    var En, On = [],
        Sn = null;

    function Nn(t, e, n) {
        var a = Jt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = rn(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && Mn({
            time: s(n),
            event: t,
            data: {
                target: Sa(n),
                x: i,
                y: o
            }
        })
    }

    function xn(t, e, n) {
        var a = Jt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d, null !== l && null !== d && Mn({
                    time: o,
                    event: t,
                    data: {
                        target: Sa(n),
                        x: l,
                        y: d
                    }
                })
            }
    }

    function Mn(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = On.length,
                    n = e > 1 ? On[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && On.pop(), On.push(t), q(Sn), Sn = Y(Tn, 500, t.event);
                break;
            default:
                On.push(t), Tn(t.event)
        }
    }

    function Tn(t) {
        pe(xa.bind(this, t))
    }

    function _n() {
        On = []
    }

    function In() {
        var t = document.documentElement;
        En = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, xa(11)
    }

    function Cn() {
        En = null
    }
    var Dn = [],
        jn = null;

    function An(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            a = t ? Sa(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Jt(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = {
                time: s(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o
                }
            };
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var c = Dn.length,
                l = c > 1 ? Dn[c - 2] : null;
            l && function(t, e) {
                var n = t.data.x - e.data.x,
                    a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(l, u) && Dn.pop(), Dn.push(u), q(jn), jn = Y(Ln, 500, 10)
        }
    }

    function Ln(t) {
        pe(xa.bind(this, t))
    }
    var Rn = null,
        zn = null,
        Hn = null;

    function Wn(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = Rn.start ? Rn.start : null;
            null !== zn && null !== Rn.start && n !== e.anchorNode && (q(Hn), Xn(21)), Rn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, zn = e, q(Hn), Hn = Y(Xn, 500, 21)
        }
    }

    function Xn(t) {
        pe(xa.bind(this, t))
    }

    function Yn() {
        zn = null, Rn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var qn, Un, Pn = [];

    function Vn(t) {
        Pn.push({
            time: s(t),
            event: 39,
            data: {
                target: Sa(t)
            }
        }), pe(xa.bind(this, 39))
    }

    function Bn() {
        Pn = []
    }

    function Fn(t) {
        qn = {
            name: t.type
        }, xa(26, s(t)), ji()
    }

    function Jn() {
        qn = null
    }

    function Kn(t) {
        void 0 === t && (t = null), Un = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, xa(28, s(t))
    }

    function Gn() {
        Un = null
    }

    function Zn(t) {
        ! function(t) {
            var e = Jt(t);
            ri(e ? e.contentWindow : t === document ? window : t, "scroll", An, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (cn(t), function(t) {
            ri(t, "cut", vn.bind(this, 0), !0), ri(t, "copy", vn.bind(this, 1), !0), ri(t, "paste", vn.bind(this, 2), !0)
        }(t), function(t) {
            ri(t, "mousedown", Nn.bind(this, 13, t), !0), ri(t, "mouseup", Nn.bind(this, 14, t), !0), ri(t, "mousemove", Nn.bind(this, 12, t), !0), ri(t, "wheel", Nn.bind(this, 15, t), !0), ri(t, "dblclick", Nn.bind(this, 16, t), !0), ri(t, "touchstart", xn.bind(this, 17, t), !0), ri(t, "touchend", xn.bind(this, 18, t), !0), ri(t, "touchmove", xn.bind(this, 19, t), !0), ri(t, "touchcancel", xn.bind(this, 20, t), !0)
        }(t), function(t) {
            ri(t, "input", yn, !0)
        }(t), function(t) {
            ri(t, "selectstart", Wn.bind(this, t), !0), ri(t, "selectionchange", Wn.bind(this, t), !0)
        }(t), function(t) {
            ri(t, "change", nn, !0)
        }(t), function(t) {
            ri(t, "submit", Vn, !0)
        }(t))
    }
    var Qn = Object.freeze({
            __proto__: null,
            observe: Zn,
            start: function() {
                Ma = [], _a(), hn(), gn(), _n(), kn(), ri(window, "resize", In), In(), ri(document, "visibilitychange", Kn), Kn(), Dn = [], An(), Yn(), an(), Bn(), ri(window, "pagehide", Fn)
            },
            stop: function() {
                Ma = [], _a(), hn(), gn(), q(Sn), On.length > 0 && Tn(On[On.length - 1].event), q(mn), kn(), Cn(), Gn(), q(jn), Dn = [], Yn(), q(Hn), an(), Bn(), Jn()
            }
        }),
        $n = /[^0-9\.]/g;

    function ta(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    Mr(5, t[a]), Mr(8, t.creator), Mr(18, t.headline);
                    break;
                case "product":
                    Mr(5, t[a]), Mr(10, t.name), Mr(12, t.sku), t.brand && Mr(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (X(11, ea(t.ratingValue, 100)), X(18, ea(t.bestRating)), X(19, ea(t.worstRating))), X(12, ea(t.ratingCount)), X(17, ea(t.reviewCount));
                    break;
                case "person":
                    Mr(8, t.name);
                    break;
                case "offer":
                    Mr(7, t.availability), Mr(14, t.itemCondition), Mr(13, t.priceCurrency), Mr(12, t.sku), X(13, ea(t.price));
                    break;
                case "brand":
                    Mr(6, t.name)
            }
            null !== r && "object" == typeof r && ta(r)
        }
    }

    function ea(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace($n, "")) * e)
        }
        return null
    }
    var na = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last"],
        aa = /[\r\n]+/g;

    function ra(t, e) {
        var n, a = null;
        if (2 === e && !1 === ee(t)) return a;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var r = !1 === ee(t) ? "add" : "update",
            i = t.parentElement ? t.parentElement : null,
            o = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                i = o && t.parentNode ? Jt(t.parentNode) : i;
                var u = t,
                    c = {
                        tag: (o ? "iframe:" : "") + "*D",
                        attributes: {
                            name: u.name,
                            publicId: u.publicId,
                            systemId: u.systemId
                        }
                    };
                oe[r](t, i, c, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Vt(document), ia(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var s = t;
                if (s.host)
                    if (Vt(s), "function" === typeof s.constructor && s.constructor.toString().indexOf("[native code]") >= 0) {
                        ia(s);
                        var l = {
                            tag: "*S",
                            attributes: {
                                style: ""
                            }
                        };
                        oe[r](t, s.host, l, e)
                    } else oe[r](t, s.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                break;
            case Node.TEXT_NODE:
                if (i = i || t.parentNode, "update" === r || i && ee(i) && "STYLE" !== i.tagName && "NOSCRIPT" !== i.tagName) {
                    var d = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    oe[r](t, i, d, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var f = t,
                    h = f.tagName,
                    p = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                na.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(f);
                switch (i = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === f.namespaceURI && (h = "svg:" + h), h) {
                    case "HTML":
                        i = o && i ? Jt(i) : null;
                        var v = {
                            tag: (o ? "iframe:" : "") + h,
                            attributes: p
                        };
                        oe[r](t, i, v, e);
                        break;
                    case "SCRIPT":
                        if ("type" in p && "application/ld+json" === p.type) try {
                            ta(JSON.parse(f.text.replace(aa, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        var g = {
                            tag: h,
                            attributes: {},
                            value: ""
                        };
                        oe[r](t, i, g, e);
                        break;
                    case "META":
                        var m = "property" in p ? "property" : "name" in p ? "name" : null;
                        if (m && "content" in p) {
                            var b = p.content;
                            switch (p[m]) {
                                case "og:title":
                                    Mr(20, b);
                                    break;
                                case "og:type":
                                    Mr(19, b);
                                    break;
                                case "generator":
                                    Mr(21, b)
                            }
                        }
                        break;
                    case "HEAD":
                        var y = {
                                tag: h,
                                attributes: p
                            },
                            w = o && (null === (n = t.ownerDocument) || void 0 === n ? void 0 : n.location) ? t.ownerDocument.location : location;
                        y.attributes["*B"] = w.protocol + "//" + w.host + w.pathname, oe[r](t, i, y, e);
                        break;
                    case "BASE":
                        var k = $t(t.parentElement);
                        if (k) {
                            var E = document.createElement("a");
                            E.href = p.href, k.data.attributes["*B"] = E.protocol + "//" + E.host + E.pathname
                        }
                        break;
                    case "STYLE":
                        var O = {
                            tag: h,
                            attributes: p,
                            value: oa(f)
                        };
                        oe[r](t, i, O, e);
                        break;
                    case "IFRAME":
                        var S = t,
                            N = {
                                tag: h,
                                attributes: p
                            };
                        Ft(S) && (! function(t) {
                            !1 === ee(t) && ri(t, "load", Oa.bind(this, t, "childList"), !0)
                        }(S), N.attributes["*O"] = "true", S.contentDocument && S.contentWindow && "loading" !== S.contentDocument.readyState && (a = S.contentDocument)), oe[r](t, i, N, e);
                        break;
                    case "LINK":
                        if (Dr && "stylesheet" === p.rel) {
                            for (var x in Object.keys(document.styleSheets)) {
                                var M = document.styleSheets[x];
                                if (M.ownerNode == f) {
                                    var T = {
                                        tag: "STYLE",
                                        attributes: p,
                                        value: ua(M)
                                    };
                                    oe[r](t, i, T, e);
                                    break
                                }
                            }
                            break
                        }
                        var _ = {
                            tag: h,
                            attributes: p
                        };
                        oe[r](t, i, _, e);
                        break;
                    case "VIDEO":
                    case "AUDIO":
                    case "SOURCE":
                        "src" in p && p.src.startsWith("data:") && delete p.src;
                        var I = {
                            tag: h,
                            attributes: p
                        };
                        oe[r](t, i, I, e);
                        break;
                    default:
                        var C = {
                            tag: h,
                            attributes: p
                        };
                        f.shadowRoot && (a = f.shadowRoot), oe[r](t, i, C, e)
                }
        }
        return a
    }

    function ia(t) {
        ee(t) || (! function(t) {
            try {
                var e = u("MutationObserver"),
                    n = e in window ? new window[e](ni(ba)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), sa.push(n))
            } catch (t) {
                $a(2, 0, t ? t.name : null)
            }
        }(t), Zn(t))
    }

    function oa(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = ua(t.sheet)), e
    }

    function ua(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if ($a(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function ca(t, e, n) {
        return at(this, void 0, void 0, (function() {
            var a, r, i, o, u;
            return rt(this, (function(c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = ge(e)) ? [3, 3] : [4, ye(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = ra(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var sa = [],
        la = [],
        da = null,
        fa = null,
        ha = null,
        pa = [],
        va = null,
        ga = null,
        ma = {};

    function ba(t) {
        var e = s();
        G(6, e), la.push({
            time: e,
            mutations: t
        }), pe(ya, 1).then((function() {
            Y(Ne), ni(Ge)()
        }))
    }

    function ya() {
        return at(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c, l;
            return rt(this, (function(d) {
                switch (d.label) {
                    case 0:
                        me(t = {
                            id: zr(),
                            cost: 3
                        }), d.label = 1;
                    case 1:
                        if (!(la.length > 0)) return [3, 8];
                        e = la.shift(), n = s(), a = 0, r = e.mutations, d.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], 0 !== (o = ge(t)) ? [3, 4] : [4, ye(t)]) : [3, 6];
                    case 3:
                        o = d.sent(), d.label = 4;
                    case 4:
                        if (2 === o) return [3, 6];
                        switch (u = i.target, c = function(t, e, n) {
                            var a = t.target ? $t(t.target.parentNode) : null;
                            if (a && "HTML" !== a.data.tag) {
                                var r = s() > ga,
                                    i = $t(t.target),
                                    o = i && i.selector ? i.selector.join() : t.target.nodeName,
                                    u = [a.selector ? a.selector.join() : "", o, t.attributeName, wa(t.addedNodes), wa(t.removedNodes)].join();
                                ma[u] = u in ma ? ma[u] : [0, n];
                                var c = ma[u];
                                if (!1 === r && c[0] >= 10 && ka(c[2], 2, e), c[0] = r ? c[1] === n ? c[0] : c[0] + 1 : 1, c[1] = n, 10 === c[0]) return c[2] = t.removedNodes, "suspend";
                                if (c[0] > 10) return ""
                            }
                            return t.type
                        }(i, t, n), c && u && u.ownerDocument && Vt(u.ownerDocument), c && u && u.nodeType == Node.DOCUMENT_FRAGMENT_NODE && u.host && Vt(u), c) {
                            case "attributes":
                                ra(u, 3);
                                break;
                            case "characterData":
                                ra(u, 4);
                                break;
                            case "childList":
                                ka(i.addedNodes, 1, t), ka(i.removedNodes, 2, t);
                                break;
                            case "suspend":
                                (l = $t(u)) && (l.metadata.suspend = !0)
                        }
                        d.label = 5;
                    case 5:
                        return a++, [3, 2];
                    case 6:
                        return [4, He(6, t, e.time)];
                    case 7:
                        return d.sent(), [3, 1];
                    case 8:
                        return be(t), [2]
                }
            }))
        }))
    }

    function wa(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function ka(t, e, n) {
        return at(this, void 0, void 0, (function() {
            var a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (ca(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = ge(n)) ? [3, 4] : [4, ye(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        ra(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function Ea(t) {
        return pa.indexOf(t) < 0 && pa.push(t), va && q(va), va = Y((function() {
            ! function() {
                for (var t = 0, e = pa; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && ee(n)) continue;
                        Oa(n, a ? "childList" : "characterData")
                    }
                }
                pa = []
            }()
        }), 33), t
    }

    function Oa(t, e) {
        ni(ba)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    function Sa(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return ga = s() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function Na(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = $t(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = Qt(t),
                        a = t in Pe ? Pe[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Ue.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    Qe(n, a, r, a.visibility)
                }(r.region, e), i.fraud && Et(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function xa(t, e) {
        return void 0 === e && (e = null), at(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, h, p, v, g, y, w, k, E, O, S, N, x, M, _, C, D, j, A, L, R, z;
            return rt(this, (function(H) {
                switch (n = e || s(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = On; r < i.length; r++) R = i[r], (o = Na(R.data.target, R.event)).id > 0 && ((a = [R.time, R.event]).push(o.id), a.push(R.data.x), a.push(R.data.y), Ya(a), T(R.event, R.data.x, R.data.y));
                        _n();
                        break;
                    case 9:
                        for (u = 0, c = un; u < c.length; u++) R = c[u], l = Na(R.data.target, R.event, R.data.text), a = [R.time, R.event], d = l.hash ? l.hash.join(".") : "", a.push(l.id), a.push(R.data.x), a.push(R.data.y), a.push(R.data.eX), a.push(R.data.eY), a.push(R.data.button), a.push(R.data.reaction), a.push(R.data.context), a.push(m(R.data.text, "click", l.privacy)), a.push(b(R.data.link)), a.push(d), a.push(R.data.trust), Ya(a), Ia(R.time, R.event, d, R.data.x, R.data.y, R.data.reaction, R.data.context);
                        hn();
                        break;
                    case 38:
                        for (f = 0, h = pn; f < h.length; f++) R = h[f], a = [R.time, R.event], (j = Na(R.data.target, R.event)).id > 0 && (a.push(j.id), a.push(R.data.action), Ya(a));
                        gn();
                        break;
                    case 11:
                        p = En, a.push(p.width), a.push(p.height), T(t, p.width, p.height), Cn(), Ya(a);
                        break;
                    case 26:
                        v = qn, a.push(v.name), Jn(), Ya(a);
                        break;
                    case 27:
                        for (g = 0, y = bn; g < y.length; g++) R = y[g], w = Na(R.data.target, R.event, R.data.value), (a = [R.time, R.event]).push(w.id), a.push(m(R.data.value, "input", w.privacy)), Ya(a);
                        kn();
                        break;
                    case 21:
                        (k = Rn) && (E = Na(k.start, t), O = Na(k.end, t), a.push(E.id), a.push(k.startOffset), a.push(O.id), a.push(k.endOffset), Yn(), Ya(a));
                        break;
                    case 10:
                        for (S = 0, N = Dn; S < N.length; S++) R = N[S], (x = Na(R.data.target, R.event)).id > 0 && ((a = [R.time, R.event]).push(x.id), a.push(R.data.x), a.push(R.data.y), Ya(a), T(R.event, R.data.x, R.data.y));
                        Dn = [];
                        break;
                    case 42:
                        for (M = 0, _ = en; M < _.length; M++) R = _[M], a = [R.time, R.event], (j = Na(R.data.target, R.event)).id > 0 && ((a = [R.time, R.event]).push(j.id), a.push(R.data.type), a.push(m(R.data.value, "change", j.privacy)), a.push(m(R.data.checksum, "checksum", j.privacy)), Ya(a));
                        an();
                        break;
                    case 39:
                        for (C = 0, D = Pn; C < D.length; C++) R = D[C], a = [R.time, R.event], (j = Na(R.data.target, R.event)).id > 0 && (a.push(j.id), Ya(a));
                        Bn();
                        break;
                    case 22:
                        for (A = 0, L = Ta; A < L.length; A++) R = L[A], (a = [R.time, R.event]).push(R.data.type), a.push(R.data.hash), a.push(R.data.x), a.push(R.data.y), a.push(R.data.reaction), a.push(R.data.context), Ya(a, !1);
                        _a();
                        break;
                    case 28:
                        z = Un, a.push(z.visible), Ya(a), I(n, z.visible), Gn()
                }
                return [2]
            }))
        }))
    }
    var Ma = [],
        Ta = [];

    function _a() {
        Ta = []
    }

    function Ia(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), Ma.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), T(e, a, r)
    }
    var Ca, Da, ja, Aa, La, Ra = 0,
        za = 0,
        Ha = null,
        Wa = 0;

    function Xa() {
        Aa = !0, Ra = 0, za = 0, Wa = 0, Ca = [], Da = [], ja = {}, La = null
    }

    function Ya(t, e) {
        if (void 0 === e && (e = !0), Aa) {
            var n = s(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    Ra += r.length;
                case 37:
                case 6:
                case 43:
                case 45:
                case 46:
                    za += r.length, Ca.push(r);
                    break;
                default:
                    Da.push(r)
            }
            H(25);
            var i = function() {
                var t = !1 === o.lean && Ra > 0 ? 100 : Gr.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - Wa > 2 * i && (q(Ha), Ha = null), e && null === Ha && (25 !== a && B(), Ha = Y(Ua, i), Wa = n, yr(za))
        }
    }

    function qa() {
        q(Ha), Ua(!0), Ra = 0, za = 0, Wa = 0, Ca = [], Da = [], ja = {}, La = null, Aa = !1
    }

    function Ua(t) {
        return void 0 === t && (t = !1), at(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return rt(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return Ha = null, (e = !1 === o.lean && za > 0 && (za < 1048576 || Gr.sequence > 0)) && X(1, 1), Ge(),
                            function() {
                                var t = [];
                                Ta = [];
                                for (var e = Gr.start + Gr.duration, n = Math.max(e - 2e3, 0), a = 0, r = Ma; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && Ta.push(i), t.push(i))
                                }
                                Ma = t, xa(22)
                            }(), yt(), n = !0 === t, a = JSON.stringify($r(n)), r = "[".concat(Da.join(), "]"), i = e ? "[".concat(Ca.join(), "]") : "", u = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, pt(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return W(2, (c = s) ? c.length : u.length), Pa(u, c, Gr.sequence, n), Da = [], e && (Ca = [], za = 0, Ra = 0), [2]
                }
            }))
        }))
    }

    function Pa(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof o.upload) {
            var r = o.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && Ba(n)
            } catch (t) {}
            if (!1 === i) {
                n in ja ? ja[n].attempts++ : ja[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r, !0), u.timeout = 15e3, u.ontimeout = function() {
                    ei(new Error("".concat("Timeout", " : ").concat(r)))
                }, null !== n && (u.onreadystatechange = function() {
                    ni(Va)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0, o.upload)(t), Ba(n)
        }
    }

    function Va(t, e) {
        var n = ja[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? wr(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload), Pa(n.data, null, e)) : (La = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && mr(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        wr(6);
                        break;
                    case "UPGRADE":
                        et("Auto");
                        break;
                    case "ACTION":
                        o.action && i.length > 1 && o.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && cr(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (Pa(n.data, null, e, !0), wr(3)), t.status >= 200 && t.status <= 208 && Ba(e), delete ja[e]))
    }

    function Ba(t) {
        1 === t && Xr()
    }
    var Fa, Ja = {};

    function Ka(t) {
        var e = t.error || t;
        return e.message in Ja || (Ja[e.message] = 0), Ja[e.message]++ >= 5 || e && e.message && (Fa = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, Ga(31)), !0
    }

    function Ga(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (e = [s(), t], t) {
                    case 31:
                        e.push(Fa.message), e.push(Fa.line), e.push(Fa.column), e.push(Fa.stack), e.push(b(Fa.source)), Ya(e);
                        break;
                    case 33:
                        Za && (e.push(Za.code), e.push(Za.name), e.push(Za.message), e.push(Za.stack), e.push(Za.severity), Ya(e, !1));
                        break;
                    case 41:
                        wt && (e.push(wt.id), e.push(wt.target), e.push(wt.checksum), Ya(e, !1))
                }
                return [2]
            }))
        }))
    }
    var Za, Qa = {};

    function $a(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in Qa && Qa[t].indexOf(i) >= 0 || (Za = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in Qa ? Qa[t].push(i) : Qa[t] = [i], Ga(33))
    }
    var tr, er = {},
        nr = new Set,
        ar = {},
        rr = {},
        ir = {},
        or = {};

    function ur() {
        dr()
    }

    function cr(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = e[0].split(/\|(.*)/),
                a = parseInt(n[0]),
                r = n.length > 1 ? n[1] : "",
                i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in ar[a] = {}, rr[a] = {}, ir[a] = {}, or[a] = r, i) {
                var u = parseInt(o),
                    c = i[o],
                    s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4), s) {
                    case 0:
                        var l = c.substring(1, c.length);
                        ar[a][u] = pr(l);
                        break;
                    case 2:
                        rr[a][u] = c;
                        break;
                    case 4:
                        var d = c.substring(1, c.length);
                        ir[a][u] = d
                }
            }
        } catch (t) {
            $a(8, 1, t ? t.name : null)
        }
    }

    function sr(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function lr() {
        try {
            for (var t in ar) {
                var e = parseInt(t);
                if ("" == or[e] || document.querySelector(or[e])) {
                    var n = ar[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (h = vr(sr(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
                        i && fr(e, r, i)
                    }
                    var o = rr[e];
                    for (var u in o) {
                        var c = parseInt(u),
                            s = document.querySelectorAll(o[c]);
                        if (s) fr(e, c, Array.from(s).map((function(t) {
                            return t.textContent
                        })).join("<SEP>").substring(0, 1e4))
                    }
                    var l = ir[e];
                    for (var d in l) {
                        var f = parseInt(d);
                        fr(e, f, Zt(l[f]).trim().substring(0, 1e4))
                    }
                }
            }
            nr.size > 0 && mr(40)
        } catch (t) {
            $a(5, 1, t ? t.name : null)
        }
        var h
    }

    function dr() {
        nr.clear()
    }

    function fr(t, e, n) {
        var a, r = !1;
        t in er || (er[t] = {}, r = !0), a = ir[t], 0 == Object.keys(a).length || e in er[t] && er[t][e] == n || (r = !0), er[t][e] = n, r && nr.add(t)
    }

    function hr() {
        dr()
    }

    function pr(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function vr(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && gr(r, a.condition)) n = vr(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (gr(c, a.condition)) {
                        var s = vr(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function gr(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function mr(t) {
        var e = [s(), t];
        switch (t) {
            case 4:
                var n = S;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), Ya(e, !1)), M();
                break;
            case 25:
                e.push(L.gap), Ya(e);
                break;
            case 35:
                e.push(tr.check), Ya(e, !1);
                break;
            case 3:
                e.push(tt.key), Ya(e);
                break;
            case 2:
                e.push(La.sequence), e.push(La.attempts), e.push(La.status), Ya(e, !1);
                break;
            case 24:
                j.key && e.push(j.key), e.push(j.value), Ya(e);
                break;
            case 34:
                var a = Object.keys(it);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(it[o])
                    }
                    lt(), Ya(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(z);
                if (u.length > 0) {
                    for (var c = 0, l = u; c < l.length; c++) {
                        var d = l[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(z[d]))
                    }
                    z = {}, Ya(e, !1)
                }
                break;
            case 1:
                var h = Object.keys(Sr);
                if (h.length > 0) {
                    for (var p = 0, v = h; p < v.length; p++) {
                        var g = v[p];
                        f = parseInt(g, 10);
                        e.push(f), e.push(Sr[g])
                    }
                    _r(), Ya(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(K);
                if (m.length > 0) {
                    for (var b = 0, y = m; b < y.length; b++) {
                        var w = y[b];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], K[w]))
                    }
                    Q(), Ya(e, !1)
                }
                break;
            case 40:
                nr.forEach((function(t) {
                    e.push(t);
                    var n = [];
                    for (var a in er[t]) {
                        var r = parseInt(a, 10);
                        n.push(r), n.push(er[t][a])
                    }
                    e.push(n)
                })), dr(), Ya(e, !1)
        }
    }

    function br() {
        tr = {
            check: 0
        }
    }

    function yr(t) {
        if (0 === tr.check) {
            var e = tr.check;
            e = Gr.sequence >= 128 ? 1 : e, e = Gr.pageNum >= 128 ? 7 : e, e = s() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== tr.check && wr(e)
        }
    }

    function wr(t) {
        tr.check = t, Wr(), ji()
    }

    function kr() {
        0 !== tr.check && mr(35)
    }

    function Er() {
        tr = null
    }
    var Or = null,
        Sr = null;

    function Nr() {
        Or = {}, Sr = {}
    }

    function xr() {
        Or = {}, Sr = {}
    }

    function Mr(t, e) {
        e && (e = "".concat(e), t in Or || (Or[t] = []), Or[t].indexOf(e) < 0 && (Or[t].push(e), t in Sr || (Sr[t] = []), Sr[t].push(e), Or[t].length > 128 && wr(5)))
    }

    function Tr() {
        mr(1)
    }

    function _r() {
        Sr = {}
    }
    var Ir = null,
        Cr = [],
        Dr = 0,
        jr = null;

    function Ar() {
        jr = null;
        var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            e = document && document.title ? document.title : "";
        Dr = t.indexOf("Electron") > 0 ? 1 : 0;
        var n, a = function() {
                var t = {
                        session: Ur(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = Br("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - Pr(n[1]) < 18e5 && (t.session = n[0], t.count = Pr(n[2]) + 1, t.upgrade = Pr(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            r = Vr(),
            i = o.projectId || d(location.host);
        Ir = {
            projectId: i,
            userId: r.id,
            sessionId: a.session,
            pageNum: a.count
        }, o.lean = o.track && null !== a.upgrade ? 0 === a.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && a.upload && a.upload.length > "https://".length ? a.upload : o.upload, Mr(0, t), Mr(3, e), Mr(1, b(location.href, !!Dr)), Mr(2, document.referrer), Mr(15, function() {
            var t = Ur();
            if (o.track && Yr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), Mr(16, document.documentElement.lang), Mr(17, document.dir), Mr(26, "".concat(window.devicePixelRatio)), Mr(28, r.dob.toString()), Mr(29, r.version.toString()), X(0, a.ts), X(1, 0), X(35, Dr), navigator && (Mr(9, navigator.language), X(33, navigator.hardwareConcurrency), X(32, navigator.maxTouchPoints), X(34, Math.round(navigator.deviceMemory)), (n = navigator.userAgentData) && n.getHighEntropyValues ? n.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            Mr(22, t.platform), Mr(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                Mr(24, t.name + "~" + t.version)
            })), Mr(25, t.model), X(27, t.mobile ? 1 : 0)
        })) : Mr(22, navigator.platform)), screen && (X(14, Math.round(screen.width)), X(15, Math.round(screen.height)), X(16, Math.round(screen.colorDepth)));
        for (var u = 0, c = o.cookies; u < c.length; u++) {
            var s = c[u],
                l = Br(s);
            l && ot(s, l)
        }
        qr(r)
    }

    function Lr() {
        jr = null, Ir = null
    }

    function Rr(t, e) {
        void 0 === e && (e = !0);
        var n = o.lean ? 0 : 1;
        Ir && (n || !1 === e) ? t(Ir, !o.lean) : Cr.push({
            callback: t,
            wait: e
        })
    }

    function zr() {
        return Ir ? [Ir.userId, Ir.sessionId, Ir.pageNum].join(".") : ""
    }

    function Hr(t) {
        if (void 0 === t && (t = !0), !t) return o.track = !1, Jr("_clsk", "", -Number.MAX_VALUE), Jr("_clck", "", -Number.MAX_VALUE), ji(), void window.setTimeout(Di, 250);
        mi() && (o.track = !0, qr(Vr(), 1))
    }

    function Wr() {
        Jr("_clsk", "", 0)
    }

    function Xr() {
        var t = Math.round(Date.now()),
            e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : "",
            n = o.lean ? 0 : 1;
        ! function(t) {
            Cr.length > 0 && Cr.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(Ir, !o.lean)
            }))
        }(n), Jr("_clsk", [Ir.sessionId, t, Ir.pageNum, n, e].join("|"), 1)
    }

    function Yr(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function qr(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5),
            a = 0 === t.dob ? null === o.dob ? 0 : o.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && Jr("_clck", [Ir.userId, 2, n.toString(36), e, a].join("|"), 365)
    }

    function Ur() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function Pr(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function Vr() {
        var t = {
                id: Ur(),
                version: 0,
                expiry: null,
                consent: 0,
                dob: 0
            },
            e = Br("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 1 && (t.version = Pr(n[1])), n.length > 2 && (t.expiry = Pr(n[2], 36)), n.length > 3 && 1 === Pr(n[3]) && (t.consent = 1), n.length > 4 && Pr(n[1]) > 1 && (t.dob = Pr(n[4])), o.track = o.track || 1 === t.consent, t.id = o.track ? n[0] : t.id
        }
        return t
    }

    function Br(t) {
        var e;
        if (Yr(document, "cookie")) {
            var n = document.cookie.split(";");
            if (n)
                for (var a = 0; a < n.length; a++) {
                    var r = n[a].split("=");
                    if (r.length > 1 && r[0] && r[0].trim() === t) {
                        for (var i = Fr(r[1]), o = i[0], u = i[1]; o;) o = (e = Fr(u))[0], u = e[1];
                        return u
                    }
                }
        }
        return null
    }

    function Fr(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }

    function Jr(t, e, n) {
        if ((o.track || "" == e) && (navigator && navigator.cookieEnabled || Yr(document, "cookie"))) {
            var a = function(t) {
                    return encodeURIComponent(t)
                }(e),
                r = new Date;
            r.setDate(r.getDate() + n);
            var i = r ? "expires=" + r.toUTCString() : "",
                u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
            try {
                if (null === jr) {
                    for (var c = location.hostname ? location.hostname.split(".") : [], s = c.length - 1; s >= 0; s--)
                        if (jr = ".".concat(c[s]).concat(jr || ""), s < c.length - 1 && (document.cookie = "".concat(u).concat(";").concat("domain=").concat(jr), Br(t) === e)) return;
                    jr = ""
                }
            } catch (t) {
                jr = ""
            }
            document.cookie = jr ? "".concat(u).concat(";").concat("domain=").concat(jr) : u
        }
    }
    var Kr, Gr = null;

    function Zr() {
        var t = Ir;
        Gr = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function Qr() {
        Gr = null
    }

    function $r(t) {
        return Gr.start = Gr.start + Gr.duration, Gr.duration = s() - Gr.start, Gr.sequence++, Gr.upload = t && "sendBeacon" in navigator ? 1 : 0, Gr.end = t ? 1 : 0, [Gr.version, Gr.sequence, Gr.start, Gr.duration, Gr.projectId, Gr.userId, Gr.sessionId, Gr.pageNum, Gr.upload, Gr.end]
    }

    function ti() {
        Kr = []
    }

    function ei(t) {
        if (Kr && -1 === Kr.indexOf(t.message)) {
            var e = o.report;
            if (e && e.length > 0) {
                var n = {
                    v: Gr.version,
                    p: Gr.projectId,
                    u: Gr.userId,
                    s: Gr.sessionId,
                    n: Gr.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), a.send(JSON.stringify(n)), Kr.push(t.message)
            }
        }
        return t
    }

    function ni(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw ei(t)
            }
            var n = performance.now() - e;
            W(4, n), n > 30 && (H(7), X(6, n))
        }
    }
    var ai = [];

    function ri(t, e, n, a) {
        void 0 === a && (a = !1), n = ni(n);
        try {
            t[u("addEventListener")](e, n, a), ai.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function ii() {
        for (var t = 0, e = ai; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        ai = []
    }
    var oi = null,
        ui = null,
        ci = null,
        si = 0;

    function li() {
        return !(si++ > 20) || ($a(4, 0), !1)
    }

    function di() {
        si = 0, ci !== hi() && (ji(), window.setTimeout(fi, 250))
    }

    function fi() {
        Di(), X(29, 1)
    }

    function hi() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var pi = !1;

    function vi() {
        pi = !0, c = performance.now(), he(), ii(), ti(), ci = hi(), si = 0, ri(window, "popstate", di), null === oi && (oi = history.pushState, history.pushState = function() {
            oi.apply(this, arguments), mi() && li() && di()
        }), null === ui && (ui = history.replaceState, history.replaceState = function() {
            ui.apply(this, arguments), mi() && li() && di()
        })
    }

    function gi() {
        ci = null, si = 0, ti(), ii(), he(), c = 0, pi = !1
    }

    function mi() {
        return pi
    }

    function bi(t) {
        if (null === t || pi) return !1;
        for (var e in t) e in o && (o[e] = t[e]);
        return !0
    }

    function yi() {
        Di(), A("clarity", "restart")
    }
    var wi = Object.freeze({
        __proto__: null,
        start: function() {
            ! function() {
                kt = [], X(26, navigator.webdriver ? 1 : 0);
                try {
                    X(31, window.top == window.self ? 1 : 2)
                } catch (t) {
                    X(31, 0)
                }
            }(), ri(window, "error", Ka), Ja = {}, Qa = {}
        },
        stop: function() {
            Qa = {}
        }
    });

    function ki() {
        return at(this, void 0, void 0, (function() {
            var t, e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = s(), me(e = {
                            id: zr(),
                            cost: 3
                        }), [4, ca(document, e, 0)];
                    case 1:
                        return n.sent(), [4, He(5, e, t)];
                    case 2:
                        return n.sent(), be(e), [2]
                }
            }))
        }))
    }
    var Ei = Object.freeze({
        __proto__: null,
        hashText: Zt,
        start: function() {
            Se(), Ne(), tn(), Fe = null, Ue = new WeakMap, Pe = {}, Ve = [], Be = !!window.IntersectionObserver, qt(),
                function() {
                    if (sa = [], pa = [], va = null, ga = 0, ma = {}, null === da && (da = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                            return mi() && Ea(this.ownerNode), da.apply(this, arguments)
                        }), null === fa && (fa = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                            return mi() && Ea(this.ownerNode), fa.apply(this, arguments)
                        }), null === ha) {
                        ha = Element.prototype.attachShadow;
                        try {
                            Element.prototype.attachShadow = function() {
                                return mi() ? Ea(ha.apply(this, arguments)) : ha.apply(this, arguments)
                            }
                        } catch (t) {
                            ha = null
                        }
                    }
                }(), pe(ki, 1).then((function() {
                    ni(Ne)(), ni(Ge)()
                })), window.Animation && window.KeyframeEffect && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (Le(), ze(Te, "play"), ze(_e, "pause"), ze(Ie, "cancel"), ze(Ce, "finish"))
        },
        stop: function() {
            tn(), Ue = null, Pe = {}, Ve = [], Fe && (Fe.disconnect(), Fe = null), Be = !1, Ut(),
                function() {
                    for (var t = 0, e = sa; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    sa = [], ma = {}, la = [], pa = [], ga = 0, va = null
                }(), Se(), Le()
        }
    });
    var Oi, Si = null;

    function Ni() {
        Si = null
    }

    function xi(t) {
        Si = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                at(this, void 0, void 0, (function() {
                    var e, n;
                    return rt(this, (function(a) {
                        return e = s(), n = [e, t], 29 === t && (n.push(Si.fetchStart), n.push(Si.connectStart), n.push(Si.connectEnd), n.push(Si.requestStart), n.push(Si.responseStart), n.push(Si.responseEnd), n.push(Si.domInteractive), n.push(Si.domComplete), n.push(Si.loadEventStart), n.push(Si.loadEventEnd), n.push(Si.redirectCount), n.push(Si.size), n.push(Si.type), n.push(Si.protocol), n.push(Si.encodedSize), n.push(Si.decodedSize), Ni(), Ya(n)), [2]
                    }))
                }))
            }(29)
    }
    var Mi = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function Ti() {
        try {
            Oi && Oi.disconnect(), Oi = new PerformanceObserver(ni(_i));
            for (var t = 0, e = Mi; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && W(9, 0), Oi.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            $a(3, 1)
        }
    }

    function _i(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        xi(a);
                        break;
                    case "resource":
                        var r = a.name;
                        Mr(4, Ii(r)), r !== o.upload && r !== o.fallback || X(28, a.duration);
                        break;
                    case "longtask":
                        H(7);
                        break;
                    case "first-input":
                        e && X(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && W(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && X(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function Ii(t) {
        var e = document.createElement("a");
        return e.href = t, e.host
    }
    var Ci = [wi, Ei, Qn, Object.freeze({
        __proto__: null,
        start: function() {
            Ni(),
                function() {
                    navigator && "connection" in navigator && Mr(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? ri(window, "load", Y.bind(this, Ti, 0)) : Ti() : $a(3, 0)
                }()
        },
        stop: function() {
            Oi && Oi.disconnect(), Oi = null, Ni()
        }
    })];

    function Di(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    return !1 === pi && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
                } catch (t) {
                    return !1
                }
            }() && (bi(t), vi(), mt(), Ci.forEach((function(t) {
                return ni(t.start)()
            })), null === t && zi())
    }

    function ji() {
        mi() && (Ci.slice().reverse().forEach((function(t) {
            return ni(t.stop)()
        })), bt(), gi(), void 0 !== Li && (Li[Ri] = function() {
            (Li[Ri].q = Li[Ri].q || []).push(arguments), "start" === arguments[0] && Li[Ri].q.unshift(Li[Ri].q.pop()) && zi()
        }))
    }
    var Ai = Object.freeze({
            __proto__: null,
            consent: Hr,
            event: A,
            hashText: Zt,
            identify: ut,
            metadata: Rr,
            pause: function() {
                mi() && (A("clarity", "pause"), null === de && (de = new Promise((function(t) {
                    fe = t
                }))))
            },
            resume: function() {
                mi() && (de && (fe(), de = null, null === le && ve()), A("clarity", "resume"))
            },
            set: ot,
            start: Di,
            stop: ji,
            upgrade: et,
            version: l
        }),
        Li = window,
        Ri = "clarity";

    function zi() {
        if (void 0 !== Li) {
            if (Li[Ri] && Li[Ri].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = Li[Ri] && Li[Ri].q || [];
            for (Li[Ri] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return Ai[t].apply(Ai, e)
                }, Li[Ri].v = l; t.length > 0;) Li[Ri].apply(Li, t.shift())
        }
    }
    zi()
}();