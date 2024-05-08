(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6689], {
        82863: function(e, t, o) {
            var r, n = o(48764).Buffer;
            "undefined" != typeof self && self, r = e => (() => {
                var t = {
                        365: (e, t, o) => {
                            e.exports = o(5370)
                        },
                        1105: (e, t, o) => {
                            "use strict";
                            var r = o(2136),
                                n = o(9886),
                                a = o(7051),
                                i = o(4011),
                                s = o(4247),
                                c = o(8030),
                                u = o(9658),
                                l = o(1701),
                                p = o(1779),
                                f = o(4034),
                                d = o(2065);
                            e.exports = function(e) {
                                return new Promise((function(t, o) {
                                    var m, h = e.data,
                                        g = e.headers,
                                        w = e.responseType;

                                    function v() {
                                        e.cancelToken && e.cancelToken.unsubscribe(m), e.signal && e.signal.removeEventListener("abort", m)
                                    }
                                    r.isFormData(h) && r.isStandardBrowserEnv() && delete g["Content-Type"];
                                    var _ = new XMLHttpRequest;
                                    if (e.auth) {
                                        var y = e.auth.username || "",
                                            b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                                        g.Authorization = "Basic " + btoa(y + ":" + b)
                                    }
                                    var k = s(e.baseURL, e.url);

                                    function E() {
                                        if (_) {
                                            var r = "getAllResponseHeaders" in _ ? c(_.getAllResponseHeaders()) : null,
                                                a = {
                                                    data: w && "text" !== w && "json" !== w ? _.response : _.responseText,
                                                    status: _.status,
                                                    statusText: _.statusText,
                                                    headers: r,
                                                    config: e,
                                                    request: _
                                                };
                                            n((function(e) {
                                                t(e), v()
                                            }), (function(e) {
                                                o(e), v()
                                            }), a), _ = null
                                        }
                                    }
                                    if (_.open(e.method.toUpperCase(), i(k, e.params, e.paramsSerializer), !0), _.timeout = e.timeout, "onloadend" in _ ? _.onloadend = E : _.onreadystatechange = function() {
                                            _ && 4 === _.readyState && (0 !== _.status || _.responseURL && 0 === _.responseURL.indexOf("file:")) && setTimeout(E)
                                        }, _.onabort = function() {
                                            _ && (o(new p("Request aborted", p.ECONNABORTED, e, _)), _ = null)
                                        }, _.onerror = function() {
                                            o(new p("Network Error", p.ERR_NETWORK, e, _, _)), _ = null
                                        }, _.ontimeout = function() {
                                            var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                                r = e.transitional || l;
                                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), o(new p(t, r.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED, e, _)), _ = null
                                        }, r.isStandardBrowserEnv()) {
                                        var L = (e.withCredentials || u(k)) && e.xsrfCookieName ? a.read(e.xsrfCookieName) : void 0;
                                        L && (g[e.xsrfHeaderName] = L)
                                    }
                                    "setRequestHeader" in _ && r.forEach(g, (function(e, t) {
                                        void 0 === h && "content-type" === t.toLowerCase() ? delete g[t] : _.setRequestHeader(t, e)
                                    })), r.isUndefined(e.withCredentials) || (_.withCredentials = !!e.withCredentials), w && "json" !== w && (_.responseType = e.responseType), "function" == typeof e.onDownloadProgress && _.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && _.upload && _.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (m = function(e) {
                                        _ && (o(!e || e && e.type ? new f : e), _.abort(), _ = null)
                                    }, e.cancelToken && e.cancelToken.subscribe(m), e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m))), h || (h = null);
                                    var x = d(k);
                                    x && -1 === ["http", "https", "file"].indexOf(x) ? o(new p("Unsupported protocol " + x + ":", p.ERR_BAD_REQUEST, e)) : _.send(h)
                                }))
                            }
                        },
                        5370: (e, t, o) => {
                            "use strict";
                            var r = o(2136),
                                n = o(2956),
                                a = o(7460),
                                i = o(1569),
                                s = function e(t) {
                                    var o = new a(t),
                                        s = n(a.prototype.request, o);
                                    return r.extend(s, a.prototype, o), r.extend(s, o), s.create = function(o) {
                                        return e(i(t, o))
                                    }, s
                                }(o(6492));
                            s.Axios = a, s.CanceledError = o(4034), s.CancelToken = o(7767), s.isCancel = o(7367), s.VERSION = o(56).version, s.toFormData = o(8982), s.AxiosError = o(1779), s.Cancel = s.CanceledError, s.all = function(e) {
                                return Promise.all(e)
                            }, s.spread = o(539), s.isAxiosError = o(9901), e.exports = s, e.exports.default = s
                        },
                        7767: (e, t, o) => {
                            "use strict";
                            var r = o(4034);

                            function n(e) {
                                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                                var t;
                                this.promise = new Promise((function(e) {
                                    t = e
                                }));
                                var o = this;
                                this.promise.then((function(e) {
                                    if (o._listeners) {
                                        var t, r = o._listeners.length;
                                        for (t = 0; t < r; t++) o._listeners[t](e);
                                        o._listeners = null
                                    }
                                })), this.promise.then = function(e) {
                                    var t, r = new Promise((function(e) {
                                        o.subscribe(e), t = e
                                    })).then(e);
                                    return r.cancel = function() {
                                        o.unsubscribe(t)
                                    }, r
                                }, e((function(e) {
                                    o.reason || (o.reason = new r(e), t(o.reason))
                                }))
                            }
                            n.prototype.throwIfRequested = function() {
                                if (this.reason) throw this.reason
                            }, n.prototype.subscribe = function(e) {
                                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                            }, n.prototype.unsubscribe = function(e) {
                                if (this._listeners) {
                                    var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                                }
                            }, n.source = function() {
                                var e;
                                return {
                                    token: new n((function(t) {
                                        e = t
                                    })),
                                    cancel: e
                                }
                            }, e.exports = n
                        },
                        4034: (e, t, o) => {
                            "use strict";
                            var r = o(1779);

                            function n(e) {
                                r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED), this.name = "CanceledError"
                            }
                            o(2136).inherits(n, r, {
                                __CANCEL__: !0
                            }), e.exports = n
                        },
                        7367: e => {
                            "use strict";
                            e.exports = function(e) {
                                return !(!e || !e.__CANCEL__)
                            }
                        },
                        7460: (e, t, o) => {
                            "use strict";
                            var r = o(2136),
                                n = o(4011),
                                a = o(8514),
                                i = o(6866),
                                s = o(1569),
                                c = o(4247),
                                u = o(6225),
                                l = u.validators;

                            function p(e) {
                                this.defaults = e, this.interceptors = {
                                    request: new a,
                                    response: new a
                                }
                            }
                            p.prototype.request = function(e, t) {
                                "string" == typeof e ? (t = t || {}).url = e : t = e || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                                var o = t.transitional;
                                void 0 !== o && u.assertOptions(o, {
                                    silentJSONParsing: l.transitional(l.boolean),
                                    forcedJSONParsing: l.transitional(l.boolean),
                                    clarifyTimeoutError: l.transitional(l.boolean)
                                }, !1);
                                var r = [],
                                    n = !0;
                                this.interceptors.request.forEach((function(e) {
                                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (n = n && e.synchronous, r.unshift(e.fulfilled, e.rejected))
                                }));
                                var a, c = [];
                                if (this.interceptors.response.forEach((function(e) {
                                        c.push(e.fulfilled, e.rejected)
                                    })), !n) {
                                    var p = [i, void 0];
                                    for (Array.prototype.unshift.apply(p, r), p = p.concat(c), a = Promise.resolve(t); p.length;) a = a.then(p.shift(), p.shift());
                                    return a
                                }
                                for (var f = t; r.length;) {
                                    var d = r.shift(),
                                        m = r.shift();
                                    try {
                                        f = d(f)
                                    } catch (e) {
                                        m(e);
                                        break
                                    }
                                }
                                try {
                                    a = i(f)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                for (; c.length;) a = a.then(c.shift(), c.shift());
                                return a
                            }, p.prototype.getUri = function(e) {
                                e = s(this.defaults, e);
                                var t = c(e.baseURL, e.url);
                                return n(t, e.params, e.paramsSerializer)
                            }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                                p.prototype[e] = function(t, o) {
                                    return this.request(s(o || {}, {
                                        method: e,
                                        url: t,
                                        data: (o || {}).data
                                    }))
                                }
                            })), r.forEach(["post", "put", "patch"], (function(e) {
                                function t(t) {
                                    return function(o, r, n) {
                                        return this.request(s(n || {}, {
                                            method: e,
                                            headers: t ? {
                                                "Content-Type": "multipart/form-data"
                                            } : {},
                                            url: o,
                                            data: r
                                        }))
                                    }
                                }
                                p.prototype[e] = t(), p.prototype[e + "Form"] = t(!0)
                            })), e.exports = p
                        },
                        1779: (e, t, o) => {
                            "use strict";
                            var r = o(2136);

                            function n(e, t, o, r, n) {
                                Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), o && (this.config = o), r && (this.request = r), n && (this.response = n)
                            }
                            r.inherits(n, Error, {
                                toJSON: function() {
                                    return {
                                        message: this.message,
                                        name: this.name,
                                        description: this.description,
                                        number: this.number,
                                        fileName: this.fileName,
                                        lineNumber: this.lineNumber,
                                        columnNumber: this.columnNumber,
                                        stack: this.stack,
                                        config: this.config,
                                        code: this.code,
                                        status: this.response && this.response.status ? this.response.status : null
                                    }
                                }
                            });
                            var a = n.prototype,
                                i = {};
                            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function(e) {
                                i[e] = {
                                    value: e
                                }
                            })), Object.defineProperties(n, i), Object.defineProperty(a, "isAxiosError", {
                                value: !0
                            }), n.from = function(e, t, o, i, s, c) {
                                var u = Object.create(a);
                                return r.toFlatObject(e, u, (function(e) {
                                    return e !== Error.prototype
                                })), n.call(u, e.message, t, o, i, s), u.name = e.name, c && Object.assign(u, c), u
                            }, e.exports = n
                        },
                        8514: (e, t, o) => {
                            "use strict";
                            var r = o(2136);

                            function n() {
                                this.handlers = []
                            }
                            n.prototype.use = function(e, t, o) {
                                return this.handlers.push({
                                    fulfilled: e,
                                    rejected: t,
                                    synchronous: !!o && o.synchronous,
                                    runWhen: o ? o.runWhen : null
                                }), this.handlers.length - 1
                            }, n.prototype.eject = function(e) {
                                this.handlers[e] && (this.handlers[e] = null)
                            }, n.prototype.forEach = function(e) {
                                r.forEach(this.handlers, (function(t) {
                                    null !== t && e(t)
                                }))
                            }, e.exports = n
                        },
                        4247: (e, t, o) => {
                            "use strict";
                            var r = o(9065),
                                n = o(1e3);
                            e.exports = function(e, t) {
                                return e && !r(t) ? n(e, t) : t
                            }
                        },
                        6866: (e, t, o) => {
                            "use strict";
                            var r = o(2136),
                                n = o(6824),
                                a = o(7367),
                                i = o(6492),
                                s = o(4034);

                            function c(e) {
                                if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new s
                            }
                            e.exports = function(e) {
                                return c(e), e.headers = e.headers || {}, e.data = n.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                                    delete e.headers[t]
                                })), (e.adapter || i.adapter)(e).then((function(t) {
                                    return c(e), t.data = n.call(e, t.data, t.headers, e.transformResponse), t
                                }), (function(t) {
                                    return a(t) || (c(e), t && t.response && (t.response.data = n.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                                }))
                            }
                        },
                        1569: (e, t, o) => {
                            "use strict";
                            var r = o(2136);
                            e.exports = function(e, t) {
                                t = t || {};
                                var o = {};

                                function n(e, t) {
                                    return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                                }

                                function a(o) {
                                    return r.isUndefined(t[o]) ? r.isUndefined(e[o]) ? void 0 : n(void 0, e[o]) : n(e[o], t[o])
                                }

                                function i(e) {
                                    if (!r.isUndefined(t[e])) return n(void 0, t[e])
                                }

                                function s(o) {
                                    return r.isUndefined(t[o]) ? r.isUndefined(e[o]) ? void 0 : n(void 0, e[o]) : n(void 0, t[o])
                                }

                                function c(o) {
                                    return o in t ? n(e[o], t[o]) : o in e ? n(void 0, e[o]) : void 0
                                }
                                var u = {
                                    url: i,
                                    method: i,
                                    data: i,
                                    baseURL: s,
                                    transformRequest: s,
                                    transformResponse: s,
                                    paramsSerializer: s,
                                    timeout: s,
                                    timeoutMessage: s,
                                    withCredentials: s,
                                    adapter: s,
                                    responseType: s,
                                    xsrfCookieName: s,
                                    xsrfHeaderName: s,
                                    onUploadProgress: s,
                                    onDownloadProgress: s,
                                    decompress: s,
                                    maxContentLength: s,
                                    maxBodyLength: s,
                                    beforeRedirect: s,
                                    transport: s,
                                    httpAgent: s,
                                    httpsAgent: s,
                                    cancelToken: s,
                                    socketPath: s,
                                    responseEncoding: s,
                                    validateStatus: c
                                };
                                return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                                    var t = u[e] || a,
                                        n = t(e);
                                    r.isUndefined(n) && t !== c || (o[e] = n)
                                })), o
                            }
                        },
                        9886: (e, t, o) => {
                            "use strict";
                            var r = o(1779);
                            e.exports = function(e, t, o) {
                                var n = o.config.validateStatus;
                                o.status && n && !n(o.status) ? t(new r("Request failed with status code " + o.status, [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o)) : e(o)
                            }
                        },
                        6824: (e, t, o) => {
                            "use strict";
                            var r = o(2136),
                                n = o(6492);
                            e.exports = function(e, t, o) {
                                var a = this || n;
                                return r.forEach(o, (function(o) {
                                    e = o.call(a, e, t)
                                })), e
                            }
                        },
                        6492: (e, t, o) => {
                            "use strict";
                            var r = o(4224),
                                n = o(2136),
                                a = o(3031),
                                i = o(1779),
                                s = o(1701),
                                c = o(8982),
                                u = {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                };

                            function l(e, t) {
                                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                            }
                            var p, f = {
                                transitional: s,
                                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== r && "[object process]" === Object.prototype.toString.call(r)) && (p = o(1105)), p),
                                transformRequest: [function(e, t) {
                                    if (a(t, "Accept"), a(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e)) return e;
                                    if (n.isArrayBufferView(e)) return e.buffer;
                                    if (n.isURLSearchParams(e)) return l(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
                                    var o, r = n.isObject(e),
                                        i = t && t["Content-Type"];
                                    if ((o = n.isFileList(e)) || r && "multipart/form-data" === i) {
                                        var s = this.env && this.env.FormData;
                                        return c(o ? {
                                            "files[]": e
                                        } : e, s && new s)
                                    }
                                    return r || "application/json" === i ? (l(t, "application/json"), function(e, t, o) {
                                        if (n.isString(e)) try {
                                            return (0, JSON.parse)(e), n.trim(e)
                                        } catch (e) {
                                            if ("SyntaxError" !== e.name) throw e
                                        }
                                        return (0, JSON.stringify)(e)
                                    }(e)) : e
                                }],
                                transformResponse: [function(e) {
                                    var t = this.transitional || f.transitional,
                                        o = t && t.silentJSONParsing,
                                        r = t && t.forcedJSONParsing,
                                        a = !o && "json" === this.responseType;
                                    if (a || r && n.isString(e) && e.length) try {
                                        return JSON.parse(e)
                                    } catch (e) {
                                        if (a) {
                                            if ("SyntaxError" === e.name) throw i.from(e, i.ERR_BAD_RESPONSE, this, null, this.response);
                                            throw e
                                        }
                                    }
                                    return e
                                }],
                                timeout: 0,
                                xsrfCookieName: "XSRF-TOKEN",
                                xsrfHeaderName: "X-XSRF-TOKEN",
                                maxContentLength: -1,
                                maxBodyLength: -1,
                                env: {
                                    FormData: o(7363)
                                },
                                validateStatus: function(e) {
                                    return e >= 200 && e < 300
                                },
                                headers: {
                                    common: {
                                        Accept: "application/json, text/plain, */*"
                                    }
                                }
                            };
                            n.forEach(["delete", "get", "head"], (function(e) {
                                f.headers[e] = {}
                            })), n.forEach(["post", "put", "patch"], (function(e) {
                                f.headers[e] = n.merge(u)
                            })), e.exports = f
                        },
                        1701: e => {
                            "use strict";
                            e.exports = {
                                silentJSONParsing: !0,
                                forcedJSONParsing: !0,
                                clarifyTimeoutError: !1
                            }
                        },
                        56: e => {
                            e.exports = {
                                version: "0.27.2"
                            }
                        },
                        2956: e => {
                            "use strict";
                            e.exports = function(e, t) {
                                return function() {
                                    for (var o = new Array(arguments.length), r = 0; r < o.length; r++) o[r] = arguments[r];
                                    return e.apply(t, o)
                                }
                            }
                        },
                        4011: (e, t, o) => {
                            "use strict";
                            var r = o(2136);

                            function n(e) {
                                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                            }
                            e.exports = function(e, t, o) {
                                if (!t) return e;
                                var a;
                                if (o) a = o(t);
                                else if (r.isURLSearchParams(t)) a = t.toString();
                                else {
                                    var i = [];
                                    r.forEach(t, (function(e, t) {
                                        null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(n(t) + "=" + n(e))
                                        })))
                                    })), a = i.join("&")
                                }
                                if (a) {
                                    var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
                                }
                                return e
                            }
                        },
                        1e3: e => {
                            "use strict";
                            e.exports = function(e, t) {
                                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                            }
                        },
                        7051: (e, t, o) => {
                            "use strict";
                            var r = o(2136);
                            e.exports = r.isStandardBrowserEnv() ? {
                                write: function(e, t, o, n, a, i) {
                                    var s = [];
                                    s.push(e + "=" + encodeURIComponent(t)), r.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()), r.isString(n) && s.push("path=" + n), r.isString(a) && s.push("domain=" + a), !0 === i && s.push("secure"), document.cookie = s.join("; ")
                                },
                                read: function(e) {
                                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                                    return t ? decodeURIComponent(t[3]) : null
                                },
                                remove: function(e) {
                                    this.write(e, "", Date.now() - 864e5)
                                }
                            } : {
                                write: function() {},
                                read: function() {
                                    return null
                                },
                                remove: function() {}
                            }
                        },
                        9065: e => {
                            "use strict";
                            e.exports = function(e) {
                                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
                            }
                        },
                        9901: (e, t, o) => {
                            "use strict";
                            var r = o(2136);
                            e.exports = function(e) {
                                return r.isObject(e) && !0 === e.isAxiosError
                            }
                        },
                        9658: (e, t, o) => {
                            "use strict";
                            var r = o(2136);
                            e.exports = r.isStandardBrowserEnv() ? function() {
                                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                                    o = document.createElement("a");

                                function n(e) {
                                    var r = e;
                                    return t && (o.setAttribute("href", r), r = o.href), o.setAttribute("href", r), {
                                        href: o.href,
                                        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                                        host: o.host,
                                        search: o.search ? o.search.replace(/^\?/, "") : "",
                                        hash: o.hash ? o.hash.replace(/^#/, "") : "",
                                        hostname: o.hostname,
                                        port: o.port,
                                        pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                                    }
                                }
                                return e = n(window.location.href),
                                    function(t) {
                                        var o = r.isString(t) ? n(t) : t;
                                        return o.protocol === e.protocol && o.host === e.host
                                    }
                            }() : function() {
                                return !0
                            }
                        },
                        3031: (e, t, o) => {
                            "use strict";
                            var r = o(2136);
                            e.exports = function(e, t) {
                                r.forEach(e, (function(o, r) {
                                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = o, delete e[r])
                                }))
                            }
                        },
                        7363: e => {
                            e.exports = null
                        },
                        8030: (e, t, o) => {
                            "use strict";
                            var r = o(2136),
                                n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                            e.exports = function(e) {
                                var t, o, a, i = {};
                                return e ? (r.forEach(e.split("\n"), (function(e) {
                                    if (a = e.indexOf(":"), t = r.trim(e.substr(0, a)).toLowerCase(), o = r.trim(e.substr(a + 1)), t) {
                                        if (i[t] && n.indexOf(t) >= 0) return;
                                        i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([o]) : i[t] ? i[t] + ", " + o : o
                                    }
                                })), i) : i
                            }
                        },
                        2065: e => {
                            "use strict";
                            e.exports = function(e) {
                                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                                return t && t[1] || ""
                            }
                        },
                        539: e => {
                            "use strict";
                            e.exports = function(e) {
                                return function(t) {
                                    return e.apply(null, t)
                                }
                            }
                        },
                        8982: (e, t, o) => {
                            "use strict";
                            var r = o(2136);
                            e.exports = function(e, t) {
                                t = t || new FormData;
                                var o = [];

                                function a(e) {
                                    return null === e ? "" : r.isDate(e) ? e.toISOString() : r.isArrayBuffer(e) || r.isTypedArray(e) ? "function" == typeof Blob ? new Blob([e]) : n.from(e) : e
                                }
                                return function e(n, i) {
                                    if (r.isPlainObject(n) || r.isArray(n)) {
                                        if (-1 !== o.indexOf(n)) throw Error("Circular reference detected in " + i);
                                        o.push(n), r.forEach(n, (function(o, n) {
                                            if (!r.isUndefined(o)) {
                                                var s, c = i ? i + "." + n : n;
                                                if (o && !i && "object" == typeof o)
                                                    if (r.endsWith(n, "{}")) o = JSON.stringify(o);
                                                    else if (r.endsWith(n, "[]") && (s = r.toArray(o))) return void s.forEach((function(e) {
                                                    !r.isUndefined(e) && t.append(c, a(e))
                                                }));
                                                e(o, c)
                                            }
                                        })), o.pop()
                                    } else t.append(i, a(n))
                                }(e), t
                            }
                        },
                        6225: (e, t, o) => {
                            "use strict";
                            var r = o(56).version,
                                n = o(1779),
                                a = {};
                            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                                a[e] = function(o) {
                                    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e
                                }
                            }));
                            var i = {};
                            a.transitional = function(e, t, o) {
                                function a(e, t) {
                                    return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (o ? ". " + o : "")
                                }
                                return function(o, r, s) {
                                    if (!1 === e) throw new n(a(r, " has been removed" + (t ? " in " + t : "")), n.ERR_DEPRECATED);
                                    return t && !i[r] && (i[r] = !0, console.warn(a(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(o, r, s)
                                }
                            }, e.exports = {
                                assertOptions: function(e, t, o) {
                                    if ("object" != typeof e) throw new n("options must be an object", n.ERR_BAD_OPTION_VALUE);
                                    for (var r = Object.keys(e), a = r.length; a-- > 0;) {
                                        var i = r[a],
                                            s = t[i];
                                        if (s) {
                                            var c = e[i],
                                                u = void 0 === c || s(c, i, e);
                                            if (!0 !== u) throw new n("option " + i + " must be " + u, n.ERR_BAD_OPTION_VALUE)
                                        } else if (!0 !== o) throw new n("Unknown option " + i, n.ERR_BAD_OPTION)
                                    }
                                },
                                validators: a
                            }
                        },
                        2136: (e, t, o) => {
                            "use strict";
                            var r, n = o(2956),
                                a = Object.prototype.toString,
                                i = (r = Object.create(null), function(e) {
                                    var t = a.call(e);
                                    return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
                                });

                            function s(e) {
                                return e = e.toLowerCase(),
                                    function(t) {
                                        return i(t) === e
                                    }
                            }

                            function c(e) {
                                return Array.isArray(e)
                            }

                            function u(e) {
                                return void 0 === e
                            }
                            var l = s("ArrayBuffer");

                            function p(e) {
                                return null !== e && "object" == typeof e
                            }

                            function f(e) {
                                if ("object" !== i(e)) return !1;
                                var t = Object.getPrototypeOf(e);
                                return null === t || t === Object.prototype
                            }
                            var d = s("Date"),
                                m = s("File"),
                                h = s("Blob"),
                                g = s("FileList");

                            function w(e) {
                                return "[object Function]" === a.call(e)
                            }
                            var v = s("URLSearchParams");

                            function _(e, t) {
                                if (null != e)
                                    if ("object" != typeof e && (e = [e]), c(e))
                                        for (var o = 0, r = e.length; o < r; o++) t.call(null, e[o], o, e);
                                    else
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
                            }
                            var y, b = (y = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function(e) {
                                return y && e instanceof y
                            });
                            e.exports = {
                                isArray: c,
                                isArrayBuffer: l,
                                isBuffer: function(e) {
                                    return null !== e && !u(e) && null !== e.constructor && !u(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                                },
                                isFormData: function(e) {
                                    var t = "[object FormData]";
                                    return e && ("function" == typeof FormData && e instanceof FormData || a.call(e) === t || w(e.toString) && e.toString() === t)
                                },
                                isArrayBufferView: function(e) {
                                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && l(e.buffer)
                                },
                                isString: function(e) {
                                    return "string" == typeof e
                                },
                                isNumber: function(e) {
                                    return "number" == typeof e
                                },
                                isObject: p,
                                isPlainObject: f,
                                isUndefined: u,
                                isDate: d,
                                isFile: m,
                                isBlob: h,
                                isFunction: w,
                                isStream: function(e) {
                                    return p(e) && w(e.pipe)
                                },
                                isURLSearchParams: v,
                                isStandardBrowserEnv: function() {
                                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                                },
                                forEach: _,
                                merge: function e() {
                                    var t = {};

                                    function o(o, r) {
                                        f(t[r]) && f(o) ? t[r] = e(t[r], o) : f(o) ? t[r] = e({}, o) : c(o) ? t[r] = o.slice() : t[r] = o
                                    }
                                    for (var r = 0, n = arguments.length; r < n; r++) _(arguments[r], o);
                                    return t
                                },
                                extend: function(e, t, o) {
                                    return _(t, (function(t, r) {
                                        e[r] = o && "function" == typeof t ? n(t, o) : t
                                    })), e
                                },
                                trim: function(e) {
                                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                                },
                                stripBOM: function(e) {
                                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                                },
                                inherits: function(e, t, o, r) {
                                    e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, o && Object.assign(e.prototype, o)
                                },
                                toFlatObject: function(e, t, o) {
                                    var r, n, a, i = {};
                                    t = t || {};
                                    do {
                                        for (n = (r = Object.getOwnPropertyNames(e)).length; n-- > 0;) i[a = r[n]] || (t[a] = e[a], i[a] = !0);
                                        e = Object.getPrototypeOf(e)
                                    } while (e && (!o || o(e, t)) && e !== Object.prototype);
                                    return t
                                },
                                kindOf: i,
                                kindOfTest: s,
                                endsWith: function(e, t, o) {
                                    e = String(e), (void 0 === o || o > e.length) && (o = e.length), o -= t.length;
                                    var r = e.indexOf(t, o);
                                    return -1 !== r && r === o
                                },
                                toArray: function(e) {
                                    if (!e) return null;
                                    var t = e.length;
                                    if (u(t)) return null;
                                    for (var o = new Array(t); t-- > 0;) o[t] = e[t];
                                    return o
                                },
                                isTypedArray: b,
                                isFileList: g
                            }
                        },
                        6322: (e, t, o) => {
                            "use strict";
                            var r = o(6935),
                                n = {
                                    "text/plain": "Text",
                                    "text/html": "Url",
                                    default: "Text"
                                };
                            e.exports = function(e, t) {
                                var o, a, i, s, c, u, l = !1;
                                t || (t = {}), o = t.debug || !1;
                                try {
                                    if (i = r(), s = document.createRange(), c = document.getSelection(), (u = document.createElement("span")).textContent = e, u.ariaHidden = "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "pre", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener("copy", (function(r) {
                                            if (r.stopPropagation(), t.format)
                                                if (r.preventDefault(), void 0 === r.clipboardData) {
                                                    o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                                    var a = n[t.format] || n.default;
                                                    window.clipboardData.setData(a, e)
                                                } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                                            t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                                        })), document.body.appendChild(u), s.selectNodeContents(u), c.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                                    l = !0
                                } catch (r) {
                                    o && console.error("unable to copy using execCommand: ", r), o && console.warn("trying IE specific stuff");
                                    try {
                                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0
                                    } catch (r) {
                                        o && console.error("unable to copy using clipboardData: ", r), o && console.error("falling back to prompt"), a = function(e) {
                                            var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                                            return e.replace(/#{\s*key\s*}/g, t)
                                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
                                    }
                                } finally {
                                    c && ("function" == typeof c.removeRange ? c.removeRange(s) : c.removeAllRanges()), u && document.body.removeChild(u), i()
                                }
                                return l
                            }
                        },
                        4224: e => {
                            var t, o, r = e.exports = {};

                            function n() {
                                throw new Error("setTimeout has not been defined")
                            }

                            function a() {
                                throw new Error("clearTimeout has not been defined")
                            }

                            function i(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === n || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (o) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (o) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : n
                                } catch (e) {
                                    t = n
                                }
                                try {
                                    o = "function" == typeof clearTimeout ? clearTimeout : a
                                } catch (e) {
                                    o = a
                                }
                            }();
                            var s, c = [],
                                u = !1,
                                l = -1;

                            function p() {
                                u && s && (u = !1, s.length ? c = s.concat(c) : l = -1, c.length && f())
                            }

                            function f() {
                                if (!u) {
                                    var e = i(p);
                                    u = !0;
                                    for (var t = c.length; t;) {
                                        for (s = c, c = []; ++l < t;) s && s[l].run();
                                        l = -1, t = c.length
                                    }
                                    s = null, u = !1,
                                        function(e) {
                                            if (o === clearTimeout) return clearTimeout(e);
                                            if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                                            try {
                                                o(e)
                                            } catch (t) {
                                                try {
                                                    return o.call(null, e)
                                                } catch (t) {
                                                    return o.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function d(e, t) {
                                this.fun = e, this.array = t
                            }

                            function m() {}
                            r.nextTick = function(e) {
                                var t = new Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                                c.push(new d(e, t)), 1 !== c.length || u || i(f)
                            }, d.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(e) {
                                return []
                            }, r.binding = function(e) {
                                throw new Error("process.binding is not supported")
                            }, r.cwd = function() {
                                return "/"
                            }, r.chdir = function(e) {
                                throw new Error("process.chdir is not supported")
                            }, r.umask = function() {
                                return 0
                            }
                        },
                        8170: (e, t) => {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.ContentRect = function(e) {
                                if ("getBBox" in e) {
                                    var t = e.getBBox();
                                    return Object.freeze({
                                        height: t.height,
                                        left: 0,
                                        top: 0,
                                        width: t.width
                                    })
                                }
                                var o = window.getComputedStyle(e);
                                return Object.freeze({
                                    height: parseFloat(o.height || "0"),
                                    left: parseFloat(o.paddingLeft || "0"),
                                    top: parseFloat(o.paddingTop || "0"),
                                    width: parseFloat(o.width || "0")
                                })
                            }
                        },
                        3714: (e, t, o) => {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var r = o(8170),
                                n = function() {
                                    function e(e) {
                                        this.target = e, this.$$broadcastWidth = this.$$broadcastHeight = 0
                                    }
                                    return Object.defineProperty(e.prototype, "broadcastWidth", {
                                        get: function() {
                                            return this.$$broadcastWidth
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    }), Object.defineProperty(e.prototype, "broadcastHeight", {
                                        get: function() {
                                            return this.$$broadcastHeight
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    }), e.prototype.isActive = function() {
                                        var e = r.ContentRect(this.target);
                                        return !!e && (e.width !== this.broadcastWidth || e.height !== this.broadcastHeight)
                                    }, e
                                }();
                            t.ResizeObservation = n
                        },
                        4730: (e, t, o) => {
                            "use strict";
                            var r = o(3714),
                                n = o(1951),
                                a = [],
                                i = function() {
                                    function e(e) {
                                        this.$$observationTargets = [], this.$$activeTargets = [], this.$$skippedTargets = [];
                                        var t = function(e) {
                                            return void 0 === e ? "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present." : "function" != typeof e ? "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function." : void 0
                                        }(e);
                                        if (t) throw TypeError(t);
                                        this.$$callback = e
                                    }
                                    return e.prototype.observe = function(e) {
                                        var t = c("observe", e);
                                        if (t) throw TypeError(t);
                                        u(this.$$observationTargets, e) >= 0 || (this.$$observationTargets.push(new r.ResizeObservation(e)), a.indexOf(this) < 0 && (a.push(this), m()))
                                    }, e.prototype.unobserve = function(e) {
                                        var t = c("unobserve", e);
                                        if (t) throw TypeError(t);
                                        var o = u(this.$$observationTargets, e);
                                        o < 0 || (this.$$observationTargets.splice(o, 1), 0 === this.$$observationTargets.length && s(this))
                                    }, e.prototype.disconnect = function() {
                                        this.$$observationTargets = [], this.$$activeTargets = [], s(this)
                                    }, e
                                }();

                            function s(e) {
                                var t = a.indexOf(e);
                                t >= 0 && (a.splice(t, 1), g())
                            }

                            function c(e, t) {
                                return void 0 === t ? "Failed to execute '" + e + "' on 'ResizeObserver': 1 argument required, but only 0 present." : t && t.nodeType === window.Node.ELEMENT_NODE ? void 0 : "Failed to execute '" + e + "' on 'ResizeObserver': parameter 1 is not of type 'Element'."
                            }

                            function u(e, t) {
                                for (var o = 0; o < e.length; o += 1)
                                    if (e[o].target === t) return o;
                                return -1
                            }
                            var l, p = function(e) {
                                    a.forEach((function(t) {
                                        t.$$activeTargets = [], t.$$skippedTargets = [], t.$$observationTargets.forEach((function(o) {
                                            o.isActive() && (d(o.target) > e ? t.$$activeTargets.push(o) : t.$$skippedTargets.push(o))
                                        }))
                                    }))
                                },
                                f = function() {
                                    var e = 1 / 0;
                                    return a.forEach((function(t) {
                                        if (t.$$activeTargets.length) {
                                            var o = [];
                                            t.$$activeTargets.forEach((function(t) {
                                                var r = new n.ResizeObserverEntry(t.target);
                                                o.push(r), t.$$broadcastWidth = r.contentRect.width, t.$$broadcastHeight = r.contentRect.height;
                                                var a = d(t.target);
                                                a < e && (e = a)
                                            })), t.$$callback(o, t), t.$$activeTargets = []
                                        }
                                    })), e
                                },
                                d = function(e) {
                                    for (var t = 0; e.parentNode;) e = e.parentNode, t += 1;
                                    return t
                                },
                                m = function() {
                                    l || h()
                                },
                                h = function() {
                                    l = window.requestAnimationFrame((function() {
                                        (function() {
                                            var e, t = 0;
                                            for (p(t); a.some((function(e) {
                                                    return !!e.$$activeTargets.length
                                                }));) t = f(), p(t);
                                            a.some((function(e) {
                                                return !!e.$$skippedTargets.length
                                            })) && (e = new window.ErrorEvent("ResizeLoopError", {
                                                message: "ResizeObserver loop completed with undelivered notifications."
                                            }), window.dispatchEvent(e))
                                        })(), h()
                                    }))
                                },
                                g = function() {
                                    l && !a.some((function(e) {
                                        return !!e.$$observationTargets.length
                                    })) && (window.cancelAnimationFrame(l), l = void 0)
                                };
                            t.N9 = function() {
                                return window.ResizeObserver = i
                            }
                        },
                        1951: (e, t, o) => {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var r = o(8170);
                            t.ResizeObserverEntry = function(e) {
                                this.target = e, this.contentRect = r.ContentRect(e)
                            }
                        },
                        5376: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 24 24"><defs><linearGradient x1="0.0003513336705509573" y1="0.5" x2="0.9957629442214966" y2="0.5" id="master_svg0_979_05473"><stop offset="0%" stop-color="#CD76FF" stop-opacity="1"></stop><stop offset="100%" stop-color="#6527FF" stop-opacity="1"></stop></linearGradient></defs><g><g><rect x="0" y="0" width="24" height="24" rx="12" fill="url(#master_svg0_979_05473)" fill-opacity="1"></rect></g><g><g><g><path d="M4.125,8.66058L5.27026,16.5625L12,16.5625L12,4.75L7.5212900000000005,11.64062L4.125,8.66058Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g><g transform="matrix(-1,0,0,1,39.75,0)" style="opacity:0.800000011920929;"><path d="M19.875,8.66058L21.02026,16.5625L27.75,16.5625L27.75,4.75L23.27129,11.64062L19.875,8.66058Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g></g></g></g></svg>'
                        },
                        9484: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 24 24"><defs><linearGradient x1="1" y1="1" x2="0" y2="0.2101779580116272" id="master_svg0_216_5893"><stop offset="0%" stop-color="#FF6812" stop-opacity="1"></stop><stop offset="100%" stop-color="#FFD25E" stop-opacity="1"></stop></linearGradient></defs><g><g><rect x="0" y="0" width="24" height="24" rx="12" fill="url(#master_svg0_216_5893)" fill-opacity="1"></rect></g><g><g><g><path d="M6.90937,6.75L4.125,11.23425L12,20.25L12,6.75L6.90937,6.75Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g><g transform="matrix(-1,0,0,1,39.75,0)" style="opacity:0.800000011920929;"><path d="M22.65937,6.75L19.875,11.23425L27.75,20.25L27.75,6.75L22.65937,6.75Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g></g></g></g></svg>'
                        },
                        3668: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M10.1114545,7.97581818 L9.225,8.88327273 C8.97554545,9.17409091 8.854,9.46809091 8.854,9.78245455 L8.854,10.037 L8.854,10.1642727 L8.72672727,10.1642727 L7.50172727,10.1642727 L7.37445455,10.1642727 L7.37445455,10.037 L7.37445455,9.78245455 C7.37445455,9.34463636 7.489,8.91763636 7.71618182,8.51163636 C7.90963636,8.17563636 8.17309091,7.85363636 8.49954545,7.55327273 C8.86418182,7.21854545 8.98381818,7.07854545 9.022,7.02509091 C9.13718182,6.86472727 9.19318182,6.68527273 9.19318182,6.47590909 C9.19318182,6.19145455 9.09009091,5.95918182 8.87690909,5.76509091 C8.67263636,5.57927273 8.39518182,5.47681818 8.09609091,5.47681818 C7.71872727,5.47681818 7.37,5.641 7.16381818,5.91463636 C6.98690909,6.14881818 6.901,6.41418182 6.901,6.726 L6.901,6.98118182 L6.901,7.10845455 L6.77372727,7.10845455 L5.57736364,7.10845455 L5.45009091,7.10845455 L5.45009091,6.98118182 L5.45009091,6.52363636 C5.45009091,6.20036364 5.52136364,5.87645455 5.662,5.56081818 C5.802,5.24836364 5.99545455,4.97090909 6.23854545,4.73609091 C6.48481818,4.49681818 6.77309091,4.31163636 7.09381818,4.18563636 C7.41327273,4.059 7.76009091,3.99536364 8.12409091,3.99536364 C8.84572727,3.99536364 9.45727273,4.24036364 9.94154545,4.72527273 C10.4264545,5.21018182 10.6727273,5.82490909 10.6727273,6.55290909 C10.6727273,7.05627273 10.4862727,7.53290909 10.1114545,7.97581818 M8.12536364,13.0909091 C7.63345455,13.0909091 7.23509091,12.6919091 7.23509091,12.2 C7.23509091,11.7087273 7.63345455,11.3097273 8.12536364,11.3097273 C8.61727273,11.3097273 9.01563636,11.7087273 9.01563636,12.2 C9.01563636,12.6919091 8.61727273,13.0909091 8.12536364,13.0909091 M8,1 C4.13345455,1 1,4.13345455 1,8 C1,11.8659091 4.13345455,15 8,15 C11.8659091,15 15,11.8659091 15,8 C15,4.13345455 11.8659091,1 8,1" transform="translate(-1 -1)"></path></svg>'
                        },
                        1999: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_2019_48311"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_2019_48311)"><g><path d="M5.0803119140625,1.27146484375Q3.8804919140625,2.50220484375,3.8804919140625,4.23885484375Q3.8804919140625,5.97551484375,5.0803119140625,7.20625484375Q6.2879319140625,8.44500484375,7.9997919140625,8.44500484375Q9.7116519140625,8.44500484375,10.9192619140625,7.20625484375Q12.1190619140625,5.97550484375,12.1190619140625,4.23885484375Q12.1190619140625,2.50220484375,10.9192619140625,1.27146484375Q9.7116519140625,0.03271484375,7.9997919140625,0.03271484375Q6.2879219140625,0.03271484375,5.0803119140625,1.27146484375ZM6.1543819140625,6.15917484375Q5.3804919140625,5.36534484375,5.3804919140625,4.23885484375Q5.3804919140625,3.11237484375,6.1543819140625,2.31854484375Q6.9204519140625,1.53271484375,7.9997919140625,1.53271484375Q9.0791219140625,1.53271484375,9.8452019140625,2.31854484375Q10.6190619140625,3.11237484375,10.6190619140625,4.23885484375Q10.6190619140625,5.36534484375,9.8452019140625,6.15917484375Q9.0791219140625,6.94500484375,7.9997919140625,6.94500484375Q6.9204519140625,6.94500484375,6.1543819140625,6.15917484375ZM15.0663619140625,9.26414484375C15.0862619140625,9.30740484375,15.1210619140625,9.34212484375,15.1642619140625,9.36205484375L15.7618619140625,9.63749484375C15.9168619140625,9.70895484375,15.9168619140625,9.92930484375,15.7618619140625,10.00076484375L15.1642619140625,10.27621484375C15.1210619140625,10.29611484375,15.0862619140625,10.33081484375,15.0663619140625,10.37411484375L14.7909619140625,10.97171484375C14.7194619140625,11.12671484375,14.4991619140625,11.12671484375,14.4276619140625,10.97171484375L14.1522619140625,10.37411484375C14.1322619140625,10.33081484375,14.0975619140625,10.29611484375,14.0542619140625,10.27621484375L13.4567619140625,10.00076484375C13.3016619140625,9.92930484375,13.3016619140625,9.70895484375,13.4567619140625,9.63749484375L14.0542619140625,9.36205484375C14.0975619140625,9.34212484375,14.1322619140625,9.30740484375,14.1522619140625,9.26414484375L14.4276619140625,8.66657484375C14.4991619140625,8.51153484375,14.7194619140625,8.51153484375,14.7909619140625,8.66657484375L15.0663619140625,9.26414484375ZM7.9997219140625,10.15841484375Q9.6343419140625,10.15841484375,10.9695619140625,10.94361484375L10.9695619140625,10.94361484375C11.0766619140625,11.00091484375,11.1990619140625,11.03391484375,11.3290619140625,11.03391484375C11.7443619140625,11.03391484375,12.0809619140625,10.69731484375,12.0809619140625,10.28211484375C12.0809619140625,9.98096484375,11.9038619140625,9.72117484375,11.6481619140625,9.60115484375L11.6481619140625,9.60115484375Q10.0035319140625,8.65844484375,7.9997219140625,8.65844484375Q5.1732319140625,8.65844484375,3.0612519140625,10.53291484375Q0.9676299140625,12.39111484375,0.6169242840625,15.15571484375C0.6129531840625,15.18701484375,0.6109619140625,15.21851484375,0.6109619140625,15.25011484375C0.6109619140625,15.66431484375,0.9467489140625001,16.000114843749998,1.3609619140625,16.000114843749998C1.7386919140625,16.000114843749998,2.0574819140625,15.71921484375,2.1050019140625,15.34441484375L2.1051519140624997,15.34321484375Q2.3852619140625,13.13851484375,4.0569619140625,11.65481484375Q5.7428819140625,10.15841484375,7.9997219140625,10.15841484375ZM14.0564619140625,12.37441484375C14.0131619140625,12.35441484375,13.9784619140625,12.31971484375,13.9585619140625,12.27651484375L13.2442619140625,10.72691484375C13.1728619140625,10.57181484375,12.9524619140625,10.57181484375,12.8810619140625,10.72691484375L12.1667619140625,12.27651484375C12.1468619140625,12.31971484375,12.1120619140625,12.35441484375,12.0688619140625,12.37441484375L10.5192319140625,13.08861484375C10.3641919140625,13.16011484375,10.3641919140625,13.38051484375,10.5192319140625,13.45191484375L12.0688619140625,14.16621484375C12.1120619140625,14.18611484375,12.1468619140625,14.22081484375,12.1667619140625,14.26411484375L12.8810619140625,15.81371484375C12.9524619140625,15.96871484375,13.1728619140625,15.96871484375,13.2442619140625,15.81371484375L13.9585619140625,14.26411484375C13.9784619140625,14.22081484375,14.0131619140625,14.18611484375,14.0564619140625,14.16621484375L15.6060619140625,13.45191484375C15.7610619140625,13.38051484375,15.7610619140625,13.16011484375,15.6060619140625,13.08861484375L14.0564619140625,12.37441484375Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        9663: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_2019_48252"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_2019_48252)"><g><path d="M12.400718152999877,0.7113958790428162C12.349518152999877,0.6028811790428161,12.196318152999877,0.5996388790428162,12.140618152999878,0.7058927790428162L11.304818152999879,2.300852679042816L9.719598152999877,3.047862679042816C9.611078152999879,3.098992679042816,9.607838152999879,3.252192679042816,9.714088152999878,3.3078726790428163L11.307118152999879,4.142642679042816L12.054818152999879,5.727662679042816C12.106018152999878,5.836152679042816,12.259218152999878,5.839332679042816,12.314818152999878,5.7330526790428165L13.147118152999878,4.143212679042817L14.735818152999878,3.393702679042816C14.844318152999877,3.342522679042816,14.847518152999879,3.189322679042816,14.741218152999878,3.133692679042816L13.149418152999878,2.3004126790428163L12.400718152999877,0.7113958790428162ZM15.611618152999878,5.9601526790428165L15.611618152999878,13.588672679042816Q15.611618152999878,14.186472679042817,15.188918152999879,14.609072679042816Q14.766318152999878,15.031772679042817,14.168518152999878,15.031772679042817L1.693288152999878,15.031772679042817Q1.095549152999878,15.031772679042817,0.672883152999878,14.609072679042816Q0.25021815299987793,14.186472679042817,0.25021815299987793,13.588672679042816L0.25021815299987793,3.192662679042816Q0.25021815299987793,2.594922679042816,0.672883152999878,2.172252679042816Q1.095549152999878,1.7495926790428162,1.693288152999878,1.7495926790428162L8.255618152999878,1.7495926790428162C8.669828152999878,1.7495926790428162,9.005618152999878,2.085372679042816,9.005618152999878,2.4995926790428165C9.005618152999878,2.913802679042816,8.669828152999878,3.249592679042816,8.255618152999878,3.249592679042816L1.750218152999878,3.249592679042816L1.750218152999878,12.546272679042817L9.196748152999877,7.687812679042816Q9.585688152999879,7.434052679042816,10.049628152999878,7.454762679042816Q10.513618152999879,7.4754726790428165,10.878318152999878,7.762882679042816L14.111418152999878,10.310182679042816L14.111418152999878,10.123242679042816L14.111618152999878,5.9601526790428165C14.111618152999878,5.545942679042816,14.447418152999878,5.2101526790428165,14.861618152999878,5.2101526790428165C15.275818152999879,5.2101526790428165,15.611618152999878,5.545942679042816,15.611618152999878,5.9601526790428165ZM5.072978152999878,4.840802679042816C5.039738152999878,4.770262679042816,4.940158152999878,4.768162679042816,4.9039681529998775,4.837222679042816L4.360718152999878,5.873902679042816L3.3303181529998778,6.359442679042816C3.259788152999878,6.392682679042816,3.257678152999878,6.492262679042816,3.326748152999878,6.528452679042816L4.362078152999878,7.070992679042816L4.8481781529998775,8.101402679042817C4.881448152999878,8.171922679042815,4.981028152999878,8.173982679042815,5.017188152999878,8.104902679042816L5.5581781529998775,7.0714526790428165L6.590918152999878,6.584242679042816C6.661438152999878,6.550972679042816,6.663508152999878,6.4514026790428165,6.594428152999878,6.415232679042816L5.559618152999878,5.873532679042816L5.072978152999878,4.840802679042816ZM9.982148152999878,8.966412679042817L2.984838152999878,13.531772679042817L14.111618152999878,13.531772679042817L14.111618152999878,12.219972679042817L9.982148152999878,8.966412679042817Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        3841: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_2019_48227"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_2019_48227)"><g><path d="M1.981008125,6.5609740234375L1.981008125,2.0833740234375C1.981008125,1.6691600234375,2.316798125,1.3333740234375,2.731008125,1.3333740234375C3.145228125,1.3333740234375,3.481008125,1.6691600234375,3.481008125,2.0833740234375L3.481008125,6.5609740234375C3.481008125,6.9751840234375,3.145228125,7.3109740234375,2.731008125,7.3109740234375C2.316798125,7.3109740234375,1.981008125,6.9751840234375,1.981008125,6.5609740234375ZM9.865778125,4.6171840234375L8.744198125,4.6171840234375L8.744198125,2.0833740234375C8.744198125,1.6691600234375,8.408408125,1.3333740234375,7.994198125,1.3333740234375C7.579978125,1.3333740234375,7.244198125,1.6691600234375,7.244198125,2.0833740234375L7.244198125,4.6171840234375L6.123048125,4.6171840234375C5.708828125,4.6171840234375,5.373048125,4.9529740234375,5.373048125,5.3671840234375C5.373048125,5.7814040234375,5.708828125,6.1171840234375,6.123048125,6.1171840234375L9.865778125,6.1171840234375C10.279978125,6.1171840234375,10.615778125,5.7814040234375,10.615778125,5.3671840234375C10.615778125,4.9529740234375,10.279978125,4.6171840234375,9.865778125,4.6171840234375ZM12.541078125,7.9242540234375L12.541078125,2.0833740234375C12.541078125,1.6691600234375,12.876878125,1.3333740234375,13.291078125,1.3333740234375C13.705278125,1.3333740234375,14.041078125,1.6691600234375,14.041078125,2.0833740234375L14.041078125,7.9242540234375C14.041078125,8.338474023437499,13.705278125,8.6742540234375,13.291078125,8.6742540234375C12.876878125,8.6742540234375,12.541078125,8.338474023437499,12.541078125,7.9242540234375ZM7.244198125,13.9166740234375L7.244198125,8.075804023437499C7.244198125,7.6615940234375,7.579978125,7.3258040234375,7.994198125,7.3258040234375C8.408408125,7.3258040234375,8.744198125,7.6615940234375,8.744198125,8.075804023437499L8.744198125,13.9166740234375C8.744198125,14.3308740234375,8.408408125,14.6666740234375,7.994198125,14.6666740234375C7.579978125,14.6666740234375,7.244198125,14.3308740234375,7.244198125,13.9166740234375ZM0.892578125,8.6743140234375L4.569388125,8.6743140234375C4.983598125,8.6743140234375,5.319388125,9.0101040234375,5.319388125,9.4243140234375C5.319388125,9.8385340234375,4.983598125,10.1743140234375,4.569388125,10.1743140234375L3.481008125,10.1743140234375L3.481008125,13.9166740234375C3.481008125,14.3308740234375,3.145228125,14.6666740234375,2.731008125,14.6666740234375C2.316798125,14.6666740234375,1.981008125,14.3308740234375,1.981008125,13.9166740234375L1.981008125,10.1743140234375L0.892578125,10.1743140234375C0.478365125,10.1743140234375,0.142578125,9.8385340234375,0.142578125,9.4243140234375C0.142578125,9.0101040234375,0.478365125,8.6743140234375,0.892578125,8.6743140234375ZM11.419478125,9.8835440234375L15.162178125,9.8835440234375C15.576378125,9.8835440234375,15.912178125,10.2193340234375,15.912178125,10.6335440234375C15.912178125,11.0477540234375,15.576378125,11.3835740234375,15.162178125,11.3835740234375L14.041078125,11.3835740234375L14.041078125,13.9166740234375C14.041078125,14.3308740234375,13.705278125,14.6666740234375,13.291078125,14.6666740234375C12.876878125,14.6666740234375,12.541078125,14.3308740234375,12.541078125,13.9166740234375L12.541078125,11.3835740234375L11.419478125,11.3835740234375C11.005178125,11.3835740234375,10.669478125,11.0477540234375,10.669478125,10.6335440234375C10.669478125,10.2193340234375,11.005178125,9.8835440234375,11.419478125,9.8835440234375Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        6583: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_2019_48282"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_2019_48282)"><g><path d="M8.750113487243652,2.7499914169311523L8.750113487243652,4.925301416931152L10.925413487243652,2.7499914169311523L8.750113487243652,2.7499914169311523ZM7.250113487243652,2.7499914169311523L7.250113487243652,13.249991416931152L2.0001134872436523,13.249991416931152Q1.7501134872436523,13.249991416931152,1.7501134872436523,12.999991416931152L1.7501134872436523,2.9999914169311523Q1.7501134872436523,2.7499914169311523,2.0001134872436523,2.7499914169311523L7.250113487243652,2.7499914169311523ZM7.250113487243652,1.2499914169311523L2.0001134872436523,1.2499914169311523Q1.2752434872436524,1.2499914169311523,0.7626774872436524,1.7625514169311522Q0.25011348724365234,2.275121416931152,0.25011348724365234,2.9999914169311523L0.25011348724365234,12.999991416931152Q0.25011348724365234,13.724891416931152,0.7626774872436524,14.237391416931152Q1.2752434872436524,14.749991416931152,2.0001134872436523,14.749991416931152L7.250113487243652,14.749991416931152L7.250113487243652,15.249991416931152C7.250113487243652,15.664191416931152,7.585903487243653,15.999991416931152,8.000113487243652,15.999991416931152C8.414323487243653,15.999991416931152,8.750113487243652,15.664191416931152,8.750113487243652,15.249991416931152L8.750113487243652,14.749991416931152L14.000113487243652,14.749991416931152Q14.725013487243652,14.749991416931152,15.237513487243652,14.237391416931152Q15.750113487243652,13.724891416931152,15.750113487243652,12.999991416931152L15.750113487243652,2.9999914169311523Q15.750113487243652,2.275121416931152,15.237513487243652,1.7625514169311522Q14.725013487243652,1.2499914169311523,14.000113487243652,1.2499914169311523L8.750113487243652,1.2499914169311523L8.750113487243652,0.7499914169311523C8.750113487243652,0.3357774169311523,8.414323487243653,-0.00000858306884765625,8.000113487243652,-0.00000858306884765625C7.585903487243653,-0.00000858306884765625,7.250113487243652,0.3357774169311523,7.250113487243652,0.7499914169311523L7.250113487243652,1.2499914169311523ZM8.750113487243652,13.249991416931152L9.751093487243653,13.249991416931152L14.250113487243652,8.750821416931153L14.250113487243652,6.185901416931152L8.750113487243652,11.685891416931153L8.750113487243652,13.249991416931152ZM14.250113487243652,4.064581416931152L14.250113487243652,2.9999914169311523Q14.250113487243652,2.7499914169311523,14.000113487243652,2.7499914169311523L13.046713487243652,2.7499914169311523L8.750113487243652,7.046621416931153L8.750113487243652,9.564581416931153L14.250113487243652,4.064581416931152ZM14.250113487243652,10.872191416931152L11.872413487243652,13.249991416931152L14.000113487243652,13.249991416931152Q14.250113487243652,13.249991416931152,14.250113487243652,12.999991416931152L14.250113487243652,10.872191416931152Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        7501: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_9195_44685"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_9195_44685)"><g><path d="M1,15.3138C1.107563,15.3686,1.681794,15.9452,1.789315,16C1.526994,13.6517,2.5289,12.9446,3.58036,12.9681C11.5498,13.1509,15.2218,6.65366,15.7327,0C13.6243,1.69612,-1.5465499999999999,0.380945,1.526881,10.5205C3.36256,6.6066,6.56201,5.58106,10.39362,5.24465C4.98104,6.55185,1.9858120000000001,10.0248,1.0000464467,15.3137L1,15.3138Z" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        3954: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 15.999999046325684"><defs><clipPath id="master_svg0_2019_48307"><rect x="0" y="0" width="16" height="15.999999046325684" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_2019_48307)"><g><path d="M15,4.00013L7.96335,0L1,4.00013L1,11.8536L8,16L15,11.8164L15,9.17462L7.96335,5.32074L7.96335,8.55075L11.8482,10.6426L8,12.9173L3.67539,10.4591L3.67539,5.54093L8,3.08267L15,7.3764L15,4.00013Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        7388: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_2019_48219"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_2019_48219)"><g><path d="M8.918775937500001,0.88419325390625Q8.0004759375,0.31809225390625,7.0821459375,0.8841632539062501L1.9759159375,4.03174525390625Q1.3818359375,4.39794525390625,1.3818359375,5.09582525390625L1.3818359375,12.94153525390625Q1.3818359375,13.66643525390625,1.8943989375,14.17893525390625Q2.4069659375,14.69153525390625,3.1318359375,14.69153525390625L5.2910159375,14.69153525390625L10.7075159375,14.69153525390625L12.8686359375,14.69153525390625Q13.5935359375,14.69153525390625,14.1061359375,14.17893525390625Q14.6186359375,13.66643525390625,14.6186359375,12.94153525390625L14.6186359375,5.09581525390625Q14.6186359375,4.39796525390625,14.0246359375,4.031755253906249L8.918775937500001,0.88419325390625ZM10.7075159375,13.19153525390625L12.8686359375,13.19153525390625Q13.1186359375,13.19153525390625,13.1186359375,12.94153525390625L13.1186359375,5.23538525390625L8.1316259375,2.16106525390625Q8.0004459375,2.08019525390625,7.8692559375,2.16106525390625L2.8818359375,5.23540525390625L2.8818359375,12.94153525390625Q2.8818359375,13.19153525390625,3.1318359375,13.19153525390625L5.2910159375,13.19153525390625L5.2910159375,9.13269525390625Q5.2910159375,8.40781525390625,5.8035759375,7.89525525390625Q6.3161459375,7.38269525390625,7.0410159375,7.38269525390625L8.9575159375,7.38269525390625Q9.6823959375,7.38269525390625,10.1949559375,7.89525525390625Q10.7075159375,8.40781525390625,10.7075159375,9.13269525390625L10.7075159375,13.19153525390625ZM9.2075159375,13.19153525390625L6.7910159375,13.19153525390625L6.7910159375,9.13269525390625Q6.7910159375,8.88269525390625,7.0410159375,8.88269525390625L8.9575159375,8.88269525390625Q9.2075159375,8.88269525390625,9.2075159375,9.13269525390625L9.2075159375,13.19153525390625Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        670: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_2019_48330"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_2019_48330)"><g><path d="M13.338371875,13.3380056640625Q15.549471875,11.1269056640625,15.549471875,7.9999756640625Q15.549471875,4.8730056640625,13.338371875,2.6619056640625Q11.127271875,0.4508056640625,8.000341875,0.4508056640625Q4.873371875,0.4508056640625,2.662271875,2.6619056640625Q0.451171875,4.8730056640625,0.451171875,7.9999756640625Q0.451171875,11.1269056640625,2.662271875,13.3380056640625Q4.873371875,15.5491056640625,8.000341875,15.5491056640625Q11.127271875,15.5491056640625,13.338371875,13.3380056640625ZM9.468301875,3.6330956640625Q10.288081875,5.3953756640625,10.288081875,7.9344456640625Q10.288081875,7.9994856640625,10.287551875,8.0640956640625Q9.229861875,8.1812756640625,8.000601875000001,8.1812756640625Q6.770931875,8.1812756640625,5.712941875,8.064015664062499Q5.712401875,7.9994856640625,5.712401875,7.9344456640625Q5.712401875,5.3953756640625,6.532191875,3.6330956640625Q7.220221875,2.1540556640624997,8.000241875,2.1540556640624997Q8.780271875,2.1540556640624997,9.468301875,3.6330956640625ZM5.808451875,9.5816656640625Q5.993011875,11.0767056640625,6.532191875,12.2358056640625Q7.220221875,13.7148056640625,8.000241875,13.7148056640625Q8.780271875,13.7148056640625,9.468301875,12.2358056640625Q10.007461875,11.0768056640625,10.192021875,9.5817356640625Q9.162551875,9.6812756640625,8.000601875000001,9.6812756640625Q6.838251875,9.6812756640625,5.808451875,9.5816656640625ZM4.276511875000001,9.3644956640625Q4.460451875,11.3386056640625,5.172141875,12.8685056640625Q5.341721875,13.2330056640625,5.526861875,13.5409056640625Q4.545761875,13.1002056640625,3.722931875,12.2774056640625Q2.193511875,10.7480056640625,1.984321875,8.6716956640625Q2.441151875,8.8875256640625,3.042571875,9.0662456640625Q3.626921875,9.2398856640625,4.276511875000001,9.3644956640625ZM4.212781875,7.8200056640625Q4.231581875,5.0223256640625,5.172141875,3.0004256640625Q5.293721875,2.7390756640625,5.423291875,2.5068456640625Q4.502141875,2.9433556640625,3.722931875,3.7225656640625Q2.349151875,5.0963456640625,2.040571875,6.9113456640625C2.040861875,6.9200256640625,2.0410118749999997,6.9287456640625,2.0410118749999997,6.9374956640625L2.0450318750000003,6.9139456640625Q2.101511875,6.9959556640625,2.249431875,7.0998756640625Q2.658551875,7.3873056640625,3.469841875,7.6283856640625Q3.826451875,7.7343456640625,4.212781875,7.8200056640625ZM11.723971875,9.3646356640625Q11.539971875,11.3386056640625,10.828371875,12.8685056640625Q10.658771875,13.2331056640625,10.473571875,13.5410056640625Q11.454771875,13.1003056640625,12.277771875,12.2774056640625Q13.807071875,10.7481056640625,14.016371875,8.6719556640625Q13.559671875,8.8876356640625,12.958671875,9.0662456640625Q12.373971875,9.2399856640625,11.723971875,9.3646356640625ZM11.787671875,7.8201656640625Q12.174471875,7.7344456640625,12.531371875,7.6283856640625Q13.342671875,7.3873056640625,13.751771875,7.0998756640625Q13.899671875,6.9959556640625,13.956171875,6.9139456640625L13.960171875,6.9374956640625C13.960171875,6.9296156640625,13.960271875,6.9217656640625,13.960571875,6.9139356640625Q13.652471875,5.0973256640625,12.277771875,3.7225656640625Q11.498471875,2.9432456640625,10.577071875,2.5067156640625Q10.706771875,2.7390156640625,10.828371875,3.0004256640625Q11.768971875,5.0223756640625,11.787671875,7.8201656640625Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        5755: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_9195_44607"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_9195_44607)"><g><path d="M5.018515004768371,5.6803335937499995C5.283205004768371,5.28368359375,5.437505004768371,4.80707359375,5.437505004768371,4.29443359375C5.437505004768371,2.91372359375,4.318215004768372,1.79443359375,2.9375050047683717,1.79443359375C1.5567950047683716,1.79443359375,0.4375050047683716,2.91372359375,0.4375050047683716,4.29443359375C0.4375050047683716,5.39653359375,1.1506440047683717,6.33206359375,2.1406350047683715,6.66475359375L2.1406350047683715,12.69563359375L1.0156250047683715,12.69563359375C0.5986500047683716,12.69563359375,0.2606250047683716,13.03373359375,0.2606250047683716,13.45063359375C0.2606250047683716,13.86763359375,0.5986500047683716,14.20563359375,1.0156250047683715,14.20563359375L14.984425004768372,14.20563359375C15.401325004768372,14.20563359375,15.739425004768371,13.86763359375,15.739425004768371,13.45063359375C15.739425004768371,13.03373359375,15.401325004768372,12.69563359375,14.984425004768372,12.69563359375L13.870425004768371,12.69563359375L13.870425004768371,6.66101359375C14.854625004768371,6.32510359375,15.562525004768371,5.39243359375,15.562525004768371,4.29443359375C15.562525004768371,2.91372359375,14.443225004768372,1.79443359375,13.062525004768371,1.79443359375C11.681825004768372,1.79443359375,10.562525004768371,2.91372359375,10.562525004768371,4.29443359375C10.562525004768371,4.84440359375,10.740125004768371,5.35290359375,11.041025004768372,5.7657035937500005Q9.547985004768371,6.47699359375,8.093755004768372,6.47699359375Q6.555745004768371,6.47699359375,5.018515004768371,5.6803335937499995ZM3.7551550047683717,6.65766359375C3.7206550047683717,6.66960359375,3.6858050047683717,6.68080359375,3.6506350047683718,6.69124359375L3.6506350047683718,12.69563359375L12.360425004768372,12.69563359375L12.360425004768372,6.78002359375Q10.225535004768371,7.98699359375,8.093755004768372,7.98699359375Q5.883685004768371,7.98699359375,3.7350550047683715,6.69099359375L3.7551550047683717,6.65766359375Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        5565: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16.000244140625"><g><g><path d="M3.001,0.000244140625L10.489,0.000244140625C12.056,1.566244140625,12.934,2.445244140625,14.5,4.011244140625L14.5,14.499244140625C14.5,15.328244140625,13.828,16.000244140625,12.999,16.000244140625L3.001,16.000244140625C2.172,16.000244140625,1.5,15.328244140625,1.5,14.499244140625L1.5,1.501244140625C1.5,0.671244140625,2.172,0.000244140625,3.001,0.000244140625ZM5,6.481204140625L11,6.481204140625C11.414,6.481204140625,11.75,6.145204140625,11.75,5.731204140625C11.75,5.317204140625,11.414,4.981204140625,11,4.981204140625L5,4.981204140625C4.586,4.981204140625,4.25,5.317204140625,4.25,5.731204140625C4.25,6.145204140625,4.586,6.481204140625,5,6.481204140625ZM5,11.019244140625L11,11.019244140625C11.414,11.019244140625,11.75,10.683244140625,11.75,10.269244140625C11.75,9.855284140625,11.414,9.519284140625,11,9.519284140625L5,9.519284140625C4.586,9.519284140625,4.25,9.855284140625,4.25,10.269244140625C4.25,10.683244140625,4.586,11.019244140625,5,11.019244140625Z" fill-rule="evenodd" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        5498: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><g><g><g><path d="M1,5.47607L2.0180100000000003,12.5L8,12.5L8,2L4.01892,8.125L1,5.47607Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g><g transform="matrix(-1,0,0,1,30,0)" style="opacity:0.800000011920929;"><path d="M15,5.47607L16.01801,12.5L22,12.5L22,2L18.01892,8.125L15,5.47607Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g></g></g></svg>'
                        },
                        8771: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><g><g><g><path d="M3.475,2L1,5.986000000000001L8,14L8,2L3.475,2Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g><g transform="matrix(-1,0,0,1,30,0)" style="opacity:0.800000011920929;"><path d="M17.475,2L15,5.986000000000001L22,14L22,2L17.475,2Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g></g></g></svg>'
                        },
                        5830: e => {
                            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_9195_45762"><rect x="0" y="0" width="16" height="16" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_9195_45762)"><g><path d="M6.66668701171875,7.3333740234375L2.66668701171875,7.3333740234375L2.66668701171875,2.0000410234375C2.66668701171875,1.6318510234375,2.96516401171875,1.3333740234375,3.33335401171875,1.3333740234375L12.66668701171875,1.3333740234375C13.03488701171875,1.3333740234375,13.33338701171875,1.6318510234375,13.33338701171875,2.0000410234375L13.33338701171875,14.0000740234375C13.33338701171875,14.3682740234375,13.03488701171875,14.6666740234375,12.66668701171875,14.6666740234375L3.33335401171875,14.6666740234375C2.96516401171875,14.6666740234375,2.66668701171875,14.3682740234375,2.66668701171875,14.0000740234375L2.66668701171875,8.6667040234375L6.66668701171875,8.6667040234375L6.66668701171875,10.6667040234375L10.00001701171875,8.0000440234375L6.66668701171875,5.3333740234375L6.66668701171875,7.3333740234375Z" fill="#414751" fill-opacity="1"></path></g></g></svg>'
                        },
                        6935: e => {
                            e.exports = function() {
                                var e = document.getSelection();
                                if (!e.rangeCount) return function() {};
                                for (var t = document.activeElement, o = [], r = 0; r < e.rangeCount; r++) o.push(e.getRangeAt(r));
                                switch (t.tagName.toUpperCase()) {
                                    case "INPUT":
                                    case "TEXTAREA":
                                        t.blur();
                                        break;
                                    default:
                                        t = null
                                }
                                return e.removeAllRanges(),
                                    function() {
                                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || o.forEach((function(t) {
                                            e.addRange(t)
                                        })), t && t.focus()
                                    }
                            }
                        },
                        8156: t => {
                            "use strict";
                            t.exports = e
                        }
                    },
                    o = {};

                function r(e) {
                    var n = o[e];
                    if (void 0 !== n) return n.exports;
                    var a = o[e] = {
                        exports: {}
                    };
                    return t[e](a, a.exports, r), a.exports
                }
                r.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return r.d(t, {
                        a: t
                    }), t
                }, r.d = (e, t) => {
                    for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: t[o]
                    })
                }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                };
                var a = {};
                return (() => {
                    "use strict";
                    r.r(a), r.d(a, {
                        AdLocation: () => zo,
                        OpenInApp: () => Fo,
                        ToolsHeader: () => ao,
                        default: () => Bo
                    });
                    var e = r(8156),
                        t = r.n(e);
                    const o = {
                            websiteHeader: "websiteHeader",
                            websiteHeader_logo: "websiteHeader_logo",
                            websiteHeader_logo_bookmark: "websiteHeader_logo_bookmark",
                            websiteHeader_logo_bookmark_box: "websiteHeader_logo_bookmark_box",
                            websiteHeader_logo_bookmark_box_icon: "websiteHeader_logo_bookmark_box_icon",
                            websiteHeader_menu: "websiteHeader_menu",
                            websiteHeader_menu_link: "websiteHeader_menu_link",
                            websiteHeader_menu_link_icon: "websiteHeader_menu_link_icon",
                            websiteHeader_menu_link_dropdown: "websiteHeader_menu_link_dropdown",
                            websiteHeader_menu_link_dropdown_swraper: "websiteHeader_menu_link_dropdown_swraper",
                            websiteHeader_menu_link_dropdown_box: "websiteHeader_menu_link_dropdown_box",
                            websiteHeader_menu_link_dropdown_box_title: "websiteHeader_menu_link_dropdown_box_title",
                            websiteHeader_menu_link_dropdown_box_group_title: "websiteHeader_menu_link_dropdown_box_group_title",
                            websiteHeader_menu_link_dropdown_box_feature: "websiteHeader_menu_link_dropdown_box_feature",
                            websiteHeader_menu_link_dropdown_box_link: "websiteHeader_menu_link_dropdown_box_link",
                            websiteHeader_menu_link_dropdown_box_menu: "websiteHeader_menu_link_dropdown_box_menu",
                            websiteHeader_menu_link_dropdown_box_menu_item: "websiteHeader_menu_link_dropdown_box_menu_item",
                            desc: "desc",
                            group: "group",
                            more: "more",
                            feature: "feature",
                            childMenu: "childMenu",
                            noChildMenu: "noChildMenu",
                            websiteHeader_messageBell: "websiteHeader_messageBell",
                            websiteHeader_messageBell_icon: "websiteHeader_messageBell_icon",
                            websiteHeader_messageBell_sup: "websiteHeader_messageBell_sup",
                            left_line: "left_line",
                            sec_menu_swraper: "sec_menu_swraper",
                            scroll_style_y: "scroll_style_y",
                            btnOpenApp: "btnOpenApp",
                            websiteHeader_layout: "websiteHeader_layout",
                            menu_group: "menu_group",
                            template_search_box: "template_search_box",
                            scroll_theme: "scroll_theme",
                            black_theme: "black_theme",
                            white_theme: "white_theme",
                            ad_button: "ad_button",
                            ad_button_mb_hide: "ad_button_mb_hide",
                            pc_logo: "pc_logo",
                            mobile_logo: "mobile_logo",
                            credits_container: "credits_container",
                            credit_help: "credit_help",
                            credits_message: "credits_message"
                        },
                        n = {
                            en_US: JSON.parse('[{"title":"Photo Editing Tools","item":[{"title":"Online Photo Editor","url":"https://www.fotor.com/photo-editor/","item":[{"title":"Crop Image","url":"https://www.fotor.com/features/crop"},{"title":"Resize Image","url":"https://www.fotor.com/features/resize.html"},{"title":"Circle Crop","url":"https://www.fotor.com/features/circle-crop/"},{"title":"Shape Image","url":"https://www.fotor.com/features/shape-image/"},{"title":"Text Editor","url":"https://www.fotor.com/features/text.html"},{"title":"Add Border to Photo","url":"https://www.fotor.com/features/add-border-to-photo/"},{"title":"Blur Background","url":"https://www.fotor.com/features/blur.html"},{"title":"Photo Frame","url":"https://www.fotor.com/features/frames"},{"title":"Change Backgrounds","url":"https://www.fotor.com/features/backgrounds.html"},{"title":"Collage Maker","url":"https://www.fotor.com/features/collage"},{"title":"Merge Images","url":"https://www.fotor.com/features/merge-images/"},{"title":"Flip Image","url":"https://www.fotor.com/features/flip-image/"},{"title":"Png Maker","url":"https://www.fotor.com/png-maker/"},{"title":"Sharpen Image","url":"https://www.fotor.com/features/sharpen-image/"},{"title":"Unblur Image","url":"https://www.fotor.com/features/unblur-image/"},{"title":"Photo to Sketch","url":"https://www.fotor.com/features/photo-to-sketch/"},{"title":"Photo to Cartoon","url":"https://www.fotor.com/features/photo-to-cartoon/"},{"title":"Image Upscaler","url":"https://www.fotor.com/image-upscaler/"},{"title":"Photo Retouch","url":"https://www.fotor.com/features/photo-retouching"},{"title":"Face Editor","url":"https://www.fotor.com/features/face-editor/"},{"title":"Image Enlarger","url":"https://www.fotor.com/image-enlarger/"},{"title":"Overlay Images","url":"https://www.fotor.com/features/overlay-images/"},{"title":"Photo Effects","url":"https://www.fotor.com/features/photo-effects"},{"title":"Blur Image","url":"https://www.fotor.com/features/blur-image/"},{"title":"Batch Photo Editor ","url":"https://www.fotor.com/batch-photo-editor/"},{"title":"Font Generator","url":"https://www.fotor.com/font-generator/"},{"title":"QR Code Generator","url":"https://www.fotor.com/qr-code-generator/"}],"more":{"title":"See All","url":"https://www.fotor.com/photo-editing-tools/"}},{"title":"Other Platforms","type":"group","item":[{"title":"Photo Editor App","subTitle":"All-in-One Image Editing Mobile App in iOS and Android You Need","url":"https://www.fotor.com/mobile.html"},{"title":"Photo Editor for Windows","subTitle":"Easy-to-Use Photo Editing Software on Windows for You","url":"https://www.fotor.com/windows/index.html"},{"title":"Photo Editor for Mac","subTitle":"Powerful Photo Editing Software for Mac You\'ll Ever Need","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"Create","item":[{"title":"Marketing","item":[{"title":"Logo Maker","url":"https://www.fotor.com/design/logo"},{"title":"Flyer Maker","url":"https://www.fotor.com/design/flyer"},{"title":"Poster Maker","url":"https://www.fotor.com/features/poster.html"},{"title":"Business Card Maker","url":"https://www.fotor.com/design/business-card"},{"title":"Resume Maker","url":"https://www.fotor.com/design/resume"},{"title":"Card Maker","url":"https://www.fotor.com/features/card-maker/"}],"more":{"title":"See All","url":"https://www.fotor.com/design/"}},{"title":"Social Media","item":[{"title":"YouTube Thumbnail Maker","url":"https://www.fotor.com/design/youtube-thumbnail.html"},{"title":"YouTube Cover Maker","url":"https://www.fotor.com/features/youtube.html"},{"title":"Instagram Post Maker","url":"https://www.fotor.com/features/instagram-post.html"},{"title":"Facebook Cover Maker","url":"https://www.fotor.com/features/facebook.html"},{"title":"Twitch Cover Maker","url":"https://www.fotor.com/design/twitch-banner"},{"title":"Twitter Cover Maker","url":"https://www.fotor.com/features/twitter.html"}]},{"title":"Events","item":[{"title":"Valentine\'s Day","url":"https://www.fotor.com/marketing-calendar/valentines-day/"},{"title":"Thanksgiving","url":"https://www.fotor.com/marketing-calendar/thanksgiving/"},{"title":"Christmas","url":"https://www.fotor.com/marketing-calendar/christmas/"},{"title":"Halloween","url":"https://www.fotor.com/marketing-calendar/halloween/"}]}]},{"title":"AI Tools","item":[{"title":"AI Image Generator","url":"https://www.fotor.com/ai-image-generator/"},{"title":"AI Face Generator","url":"https://www.fotor.com/features/ai-face-generator/"},{"title":"AI Art Generator","url":"https://www.fotor.com/ai-art-generator/"},{"title":"AI Photo Effect","url":"https://www.fotor.com/features/goart.html"},{"title":"Photo Enhancer","url":"https://www.fotor.com/features/one-tap-enhance"},{"title":"Background Remover","url":"https://www.fotor.com/features/background-remover"},{"title":"Photo Eraser","url":"https://www.fotor.com/features/remove-object-from-photo/"},{"title":"AI Avatar Generator","url":"https://www.fotor.com/avatar-maker/"}]},{"title":"Templates","item":[{"title":"Marketing","item":[{"title":"Poster","url":"https://www.fotor.com/poster/templates/"},{"title":"Flyer","url":"https://www.fotor.com/flyer/templates/"},{"title":"Invitation","url":"https://www.fotor.com/invitation/templates/"},{"title":"Cards","url":"https://www.fotor.com/card/templates/"},{"title":"Logos","url":"https://www.fotor.com/logo/templates/"},{"title":"Certificate","url":"https://www.fotor.com/certificate/templates/"}]},{"title":"Social Media","item":[{"title":"Instagram Story","url":"https://www.fotor.com/instagram-story/templates/"},{"title":"Instagram Post","url":"https://www.fotor.com/instagram-post/templates/"},{"title":"YouTube Thumbnail","url":"https://www.fotor.com/youtube-thumbnail/templates/"},{"title":"YouTube Cover","url":"https://www.fotor.com/youtube-banner/templates/"},{"title":"Presentation","url":"https://www.fotor.com/presentation/templates/"},{"title":"Resume","url":"https://www.fotor.com/resume/templates/"}],"more":{"title":"See All","url":"https://www.fotor.com/templates/"}},{"title":"Themes","item":[{"title":"Party","url":"https://www.fotor.com/templates/search/party/"},{"title":"Wanted","url":"https://www.fotor.com/templates/search/wanted/"},{"title":"Campaign","url":"https://www.fotor.com/templates/search/campaign/"},{"title":"Volunteer","url":"https://www.fotor.com/templates/search/volunteer/"},{"title":"Birthday","url":"https://www.fotor.com/templates/search/birthday/"},{"title":"Wedding","url":"https://www.fotor.com/templates/search/wedding/"}]}]},{"title":"Support","item":[{"title":"Blog","url":"https://www.fotor.com/blog/"},{"title":"Tutorial","url":"https://www.fotor.com/how-to/"},{"title":"Help Center","url":"https://support.fotor.com/hc/en-us"},{"title":"Contact Us","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            de_DE: JSON.parse('[{"title":"Fotoeditor","item":[{"title":"Fotobearbeitung","url":"https://www.fotor.com/de/photo-editor/","item":[{"title":"Collagen erstellen","url":"https://www.fotor.com/de/collage/index.html"},{"title":"Bilderrahmen","url":"https://www.fotor.com/de/features/frames.html"},{"title":"Bilder zuschneiden","url":"https://www.fotor.com/de/features/circle-crop/"},{"title":"Foto in Zeichnung umwandeln","url":"https://www.fotor.com/de/features/photo-to-cartoon/"},{"title":"Unsch\xe4rfe Hintergrund","url":"https://www.fotor.com/de/features/blur-photo/"},{"title":"Moodboard Ersteller","url":"https://www.fotor.com/de/moodboard-maker/"},{"title":"WhatsApp-Sticker erstellen","url":"https://www.fotor.com/de/whatsapp-sticker-erstellen/"}]},{"title":"Andere Plattformen","type":"group","item":[{"title":"Foto-Editor-App","subTitle":"All-in-One-Bildbearbeitungs-App f\xfcr iOS und Android, die Sie ben\xf6tigen","url":"https://www.fotor.com/de/mobile.html"},{"title":"Foto-Editor f\xfcr Windows","subTitle":"Benutzerfreundliche Fotobearbeitungssoftware unter Windows f\xfcr Sie","url":"https://www.fotor.com/windows/index.html"},{"title":"Foto-Editor f\xfcr Mac","subTitle":"Leistungsstarke Fotobearbeitungssoftware f\xfcr Mac, die Sie jemals brauchen werden","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"KI-Tools","item":[{"title":"Verbessern Sie die Bildqualit\xe4t","url":"https://www.fotor.com/de/features/photo-enhancer/"},{"title":"AI Bild Generator","url":"https://www.fotor.com/de/ai-image-generator/"}]},{"title":"Unterst\xfctzung","item":[{"title":"Hilfecenter","url":"https://support.fotor.com/hc/en-us"},{"title":"Kontaktiere uns","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            es_ES: JSON.parse('[{"title":"Edicion basica","item":[{"title":"Editor de fotos online ","url":"https://www.fotor.com/es/photo-editor/","item":[{"title":"Recortar Fotos","url":"https://www.fotor.com/es/features/crop.html"},{"title":"Desenfoca Im\xe1genes","url":"https://www.fotor.com/es/features/blur.html"},{"title":"Incre\xedbles Efectos Para Fotos","url":"https://www.fotor.com/es/features/photo-effects.html"},{"title":"Crea Montajes de Fotos","url":"https://www.fotor.com/es/features/montage.html"},{"title":"Retoque de Fotos","url":"https://www.fotor.com/es/features/photo-retouching.html"},{"title":"Convertir foto a caricatura","url":"https://www.fotor.com/es/features/photo-to-cartoon/"},{"title":"Agrega Texto a tus Fotos ","url":"https://www.fotor.com/es/features/text.html"},{"title":"Convertir foto en dibujo","url":"https://www.fotor.com/es/features/photo-to-sketch/"},{"title":"Pon un fondo blanco a tu foto","url":"https://www.fotor.com/es/features/add-white-background-to-photo/"},{"title":"Cortar imagen en c\xedrculo","url":"https://www.fotor.com/es/features/circle-crop/"},{"title":"collage de fotos","url":"https://www.fotor.com/es/collage/"}]},{"title":"Otras plataformas","type":"group","item":[{"title":"Aplicaci\xf3n de edici\xf3n de fotos ","subTitle":"Aplicaci\xf3n m\xf3vil de edici\xf3n de im\xe1genes todo en uno en iOS y Android que necesitas","url":"https://www.fotor.com/es/mobile.html"},{"title":"Editor de fotos para Windows","subTitle":"Software de edici\xf3n de fotos f\xe1cil de usar en Windows para ti","url":"https://www.fotor.com/windows/index.html"},{"title":"Editor de fotos para Mac","subTitle":"Potente software de edici\xf3n de fotos para Mac que siempre necesitar\xe1s","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"Dise\xf1ar","item":[{"title":"Creador de horarios escolares","url":"https://www.fotor.com/es/design/class-schedule"},{"title":"Dise\xf1ador de tarjetas","url":"https://www.fotor.com/es/design/cards"},{"title":"Fondo de pantalla para ordenador","url":"https://www.fotor.com/es/design/wallpaper"},{"title":"Tarjetas de presentaci\xf3n","url":"https://www.fotor.com/es/design/business-card"},{"title":"Creador de boletos","url":"https://www.fotor.com/es/design/ticket"},{"title":"Creador de logos","url":"https://www.fotor.com/es/design/logo"},{"title":"Ver todo","type":"more","url":"https://www.fotor.com/es/design/"}]},{"title":"Herramientas de IA","item":[{"title":"Borrador de fondos ","url":"https://www.fotor.com/es/features/background-remover"},{"title":"Mejorador de fotos","url":"https://www.fotor.com/es/features/one-tap-enhance.html"},{"title":"IA generador de im\xe1genes","url":"https://www.fotor.com/es/ia-generador-de-imagenes/"}]},{"title":"Ayuda","item":[{"title":"Centro de ayuda","url":"https://support.fotor.com/hc/en-us"},{"title":"Contacto","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            fr_FR: JSON.parse('[{"title":"Retouche","item":[{"title":"Retouche photo en ligne","url":"https://www.fotor.com/fr/photo-editor/","item":[{"title":"Collage de Photos","url":"https://www.fotor.com/fr/collage/index.html"},{"title":"Montage Photos","url":"https://www.fotor.com/fr/features/montage.html"},{"title":"Retoque de Fotos","url":"https://www.fotor.com/fr/features/photo-retouching.html"},{"title":"Cadres Photo","url":"https://www.fotor.com/fr/features/frames.html"},{"title":"Redimensionnement images","url":"https://www.fotor.com/fr/features/resize-image/"}]},{"title":"Appli de retouche photo","type":"group","item":[{"title":"Appli de retouche photo","subTitle":"La retouche de photo tout-en-un sur iOS et Android dont vous avez besoin","url":"https://www.fotor.com/fr/mobile.html"},{"title":"Logiciel de retouche-photo sur votre Windows","subTitle":"Facile \xe0 utiliser sur votre ordinateur Windows","url":"https://www.fotor.com/windows/index.html"},{"title":"Logiciel de retouche-photo sur votre Mac","subTitle":"Facile \xe0 utiliser sur votre ordinateur Mac","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"Outils d\'IA","item":[{"title":"Am\xe9liorer qualite photo","url":"https://www.fotor.com/fr/features/photo-enhancer/"},{"title":"G\xe9n\xe9rateur d\u2019images par IA","url":"https://www.fotor.com/fr/ai-image-generator/"}]},{"title":"Soutien","item":[{"title":"Centre de Support","url":"https://support.fotor.com/hc/en-us"},{"title":"Nous contacter","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            id_ID: JSON.parse('[{"title":"alat pengeditan foto","item":[{"title":"Editor foto","item":[{"title":"Potong Foto","url":"https://www.fotor.com/id/features/crop/"},{"title":"Pemblur Latar Belakang Foto","url":"https://www.fotor.com/id/features/blur.html"},{"title":"Menghilangkan Objek Di Fotor","url":"https://www.fotor.com/id/features/remove-object-from-photo/"},{"title":"Gabung Foto","url":"https://www.fotor.com/id/features/gabung-foto-online/"},{"title":"Pembuat Kolase","url":"https://www.fotor.com/id/features/collage/"},{"title":"Hapus Watermark Dari Foto","url":"https://www.fotor.com/id/features/remove-watermark-from-photo/"},{"title":"Ubah Ukuran Foto ","url":"https://www.fotor.com/id/features/resize/"},{"title":"Menggabungkan Foto","url":"https://www.fotor.com/id/features/merge-images/"}]},{"title":"Platform Lainnya","type":"group","item":[{"title":"Aplikasi Editor Foto","subTitle":"Aplikasi Seluler Pengeditan Gambar All-in-One di iOS dan Android yang Anda Butuhkan","url":"https://www.fotor.com/mobile.html"},{"title":"Editor Foto untuk Windows","subTitle":"Perangkat Lunak Pengeditan Foto yang Mudah Digunakan di Windows untuk Anda","url":"https://www.fotor.com/windows/index.html"},{"title":"Editor Foto untuk Mac","subTitle":"Perangkat Lunak Pengeditan Foto yang Kuat untuk Mac yang Anda Butuhkan","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"Alat AI","item":[{"title":"Penghapus Latar Belakang","url":"https://www.fotor.com/id/features/background-remover"}]},{"title":"Mendukung","item":[{"title":"Pusat Bantuan","url":"https://support.fotor.com/hc/en-us"},{"title":"Hubungi kami","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            ja_JP: JSON.parse('[{"title":"\u753b\u50cf\u7de8\u96c6","item":[{"title":"\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u753b\u50cf\u7de8\u96c6","url":"https://www.fotor.com/jp/photo-editor/","item":[{"title":"\u30c8\u30ea\u30df\u30f3\u30b0","url":"https://www.fotor.com/jp/features/crop.html"},{"title":"\u30b5\u30a4\u30ba\u5909\u66f4","url":"https://www.fotor.com/jp/features/resize.html"},{"title":"\u30b3\u30e9\u30fc\u30b8\u30e5","url":"https://www.fotor.com/jp/collage"},{"title":"\u6587\u5b57\u5165\u308c","url":"https://www.fotor.com/jp/features/text.html"},{"title":"\u5199\u771f\u306e\u30ec\u30bf\u30c3\u30c1","url":"https://www.fotor.com/jp/features/photo-retouching"},{"title":"\u30a8\u30d5\u30a7\u30af\u30c8\u6a5f\u80fd","url":"https://www.fotor.com/jp/features/photo-effects.html"},{"title":"\u30e2\u30b6\u30a4\u30af \u30d5\u30ea\u30fc","url":"https://www.fotor.com/jp/features/mosaics/"},{"title":"\u30d5\u30ec\u30fc\u30e0","url":"https://www.fotor.com/jp/features/frames.html"},{"title":"\u5199\u771f\u3092\u307c\u304b\u3059","url":"https://www.fotor.com/jp/features/blur/"}]},{"title":"\u305d\u306e\u4ed6\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0","type":"group","item":[{"title":"\u5199\u771f\u7de8\u96c6\u30a2\u30d7\u30ea","subTitle":"\u5fc5\u8981\u306a iOS \u3068 Android \u306e\u30aa\u30fc\u30eb\u30a4\u30f3\u30ef\u30f3\u753b\u50cf\u7de8\u96c6\u30e2\u30d0\u30a4\u30eb \u30a2\u30d7\u30ea","url":"https://www.fotor.com/jp/mobile.html"},{"title":"Windows\u7528\u30d5\u30a9\u30c8\u30a8\u30c7\u30a3\u30bf","subTitle":"Windows \u7528\u306e\u4f7f\u3044\u3084\u3059\u3044\u5199\u771f\u7de8\u96c6\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2","url":"https://www.fotor.com/windows/index.html"},{"title":"Mac\u7528\u30d5\u30a9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc","subTitle":"\u5fc5\u8981\u306a Mac \u7528\u306e\u5f37\u529b\u306a\u5199\u771f\u7de8\u96c6\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"\u30c7\u30b6\u30a4\u30f3","item":[{"title":"\u30c1\u30b1\u30c3\u30c8","url":"https://www.fotor.com/jp/design/ticket"},{"title":"\u30dd\u30b9\u30bf\u30fc","url":"https://www.fotor.com/jp/design/poster"},{"title":"Twitter\u30d8\u30c3\u30c0\u30fc","url":"https://www.fotor.com/jp/design/twitter-header"},{"title":"Zoom\u80cc\u666f","url":"https://www.fotor.com/jp/design/zoom-background"},{"title":"\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u58c1\u7d19","url":"https://www.fotor.com/jp/design/wallpaper"},{"title":"\u3059\u3079\u3066\u3092\u898b\u308b","type":"more","url":"https://www.fotor.com/jp/design/"}]},{"title":"AI \u30c4\u30fc\u30eb","item":[{"title":"\u5207\u308a\u629c\u304d","url":"https://www.fotor.com/jp/features/background-remover"},{"title":"\u5199\u771f\u3092\u81ea\u52d5\u88dc\u6b63","url":"https://www.fotor.com/jp/features/one-tap-enhance"},{"title":"AI\u753b\u50cf\u751f\u6210","url":"https://www.fotor.com/jp/ai-image-generator/"},{"title":"ai \u30a4\u30e9\u30b9\u30c8","url":"https://www.fotor.com/jp/features/ai-illustration-generator/"},{"title":"\u30a2\u30d0\u30bf\u30fc\u4f5c\u6210","url":"https://www.fotor.com/jp/avatar-maker/"}]},{"title":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8","item":[{"title":"YouTube\u30b5\u30e0\u30cd\u30a4\u30eb","url":"https://www.fotor.com/jp/youtube-banner/templates/"},{"title":"\u62db\u5f85\u72b6","url":"https://www.fotor.com/jp/invitation/templates/"},{"title":"\u30d5\u30a9\u30c8\u30b3\u30e9\u30fc\u30b8\u30e5","url":"https://www.fotor.com/jp/square-collage/templates/"},{"title":"\u30ed\u30b4","url":"https://www.fotor.com/jp/logo/templates/"},{"title":"Line\u30ea\u30c3\u30c1\u30e1\u30c3\u30bb\u30fc\u30b8","url":"https://www.fotor.com/jp/line-rich-message/templates/"},{"title":"\u3059\u3079\u3066\u3092\u898b\u308b","url":"https://www.fotor.com/jp/templates/","type":"more"}]},{"title":"\u652f\u6301","item":[{"title":"\u30ab\u30b9\u30bf\u30de\u30fc\u30b5\u30dd\u30fc\u30c8","url":"https://support.fotor.com/hc/en-us"},{"title":"\u304a\u554f\u5408\u305b","url":"https://support.fotor.com/hc/en-us/requests/new"},{"title":"\u4f7f\u3044\u65b9","url":"https://www.fotor.com/jp/how-to/"}]}]'),
                            pt_BR: JSON.parse('[{"title":"Edicion basica","item":[{"title":"Editor de fotos online ","url":"https://www.fotor.com/pt/photo-editor/","item":[{"title":"Desfocar Foto","url":"https://www.fotor.com/pt/features/blur.html"},{"title":"Colagem de Fotos","url":"https://www.fotor.com/pt/colagem/index.html"},{"title":"Escrever em Fotos","url":"https://www.fotor.com/pt/features/text.html"},{"title":"Montagem de Fotos","url":"https://www.fotor.com/pt/features/montage.html"},{"title":"Efeitos Para Fotos","url":"https://www.fotor.com/pt/features/photo-effects.html"},{"title":"Cortar Fotos","url":"https://www.fotor.com/pt/features/crop.html"},{"title":"Retoque de Fotos","url":"https://www.fotor.com/pt/features/photo-retouching.html"},{"title":"Redimensionar Imagens","url":"https://www.fotor.com/pt/features/resize.html"},{"title":"Convers\xe3o de Fotos para Desenhos","url":"https://www.fotor.com/pt/features/photo-to-sketch/"},{"title":"Criador de Avatar","url":"https://www.fotor.com/pt/avatar-maker/"}]},{"title":"Outras plataformas","type":"group","item":[{"title":"Aplicativo editor de fotos","subTitle":"Aplicativo m\xf3vel de edi\xe7\xe3o de imagem tudo-em-um em iOS e Android que voc\xea precisa","url":"https://www.fotor.com/pt/mobile.html"},{"title":"Editor de fotos para Windows","subTitle":"Software de edi\xe7\xe3o de fotos f\xe1cil de usar no Windows para voc\xea","url":"https://www.fotor.com/windows/index.html"},{"title":"Editor de fotos para Mac","subTitle":"Poderoso software de edi\xe7\xe3o de fotos para Mac que voc\xea precisar\xe1","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"Design","item":[{"title":"Crie um calend\xe1rio","url":"https://www.fotor.com/pt/design/calendar"},{"title":"Papel de parede","url":"https://www.fotor.com/pt/design/wallpaper"},{"title":"Miniatura YouTube","url":"https://www.fotor.com/pt/design/youtube-thumbnail"},{"title":"Criador de p\xf4steres","url":"https://www.fotor.com/pt/design/poster"},{"title":"Cart\xe3o de visita","url":"https://www.fotor.com/pt/design/business-card"},{"title":"ver tudo","type":"more","url":"https://www.fotor.com/pt/design/"}]},{"title":"Ferramentas de IA","item":[{"title":"Removedor de Fundo","url":"https://www.fotor.com/pt/features/background-remover"},{"title":"Aprimorador de Fotos","url":"https://www.fotor.com/pt/features/one-tap-enhance.html"},{"title":"Gerador de Imagens AI","url":"https://www.fotor.com/pt/gerador-de-imagens-ai/"}]},{"title":"Suporte","item":[{"title":"Central de Ajuda","url":"https://support.fotor.com/hc/en-us"},{"title":"Fale com Fotor","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            ru_RU: JSON.parse('[{"title":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","item":[{"title":"\u0444\u043e\u0442\u043e\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043e\u043d\u043b\u0430\u0439\u043d","url":"https://www.fotor.com/ru/photo-editor/","item":[{"title":"\u0424\u043e\u0442\u043e\u043a\u043e\u043b\u043b\u0430\u0436\u0438 ","url":"https://www.fotor.com/ru/collage/"},{"title":"\u0424\u043e\u0442\u043e\u043c\u043e\u043d\u0442\u0430\u0436\u0438 ","url":"https://www.fotor.com/ru/features/montage.html"},{"title":"\u041e\u0431\u0440\u0435\u0437\u0430\u0442\u044c \u0424\u043e\u0442\u043e","url":"https://www.fotor.com/ru/features/crop.html"},{"title":"\u0424\u043e\u0442\u043e\u0440\u0430\u043c\u043a\u0438","url":"https://www.fotor.com/ru/features/frames.html"},{"title":"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0440\u0430\u0437\u043c\u044b\u0442\u0438\u044f \u0444\u043e\u043d\u0430","url":"https://www.fotor.com/ru/features/blur.html"},{"title":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0420\u0430\u0437\u043c\u0435\u0440 \u0424\u043e\u0442\u043e","url":"https://www.fotor.com/ru/features/resize.html"},{"title":"\u0420\u0435\u0442\u0443\u0448\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439","url":"https://www.fotor.com/ru/features/photo-retouching.html"},{"title":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e ","url":"https://www.fotor.com/ru/features/add-text-to-photo/"},{"title":"\u0444\u043e\u0442\u043e\u044d\u0444\u0444\u0435\u043a\u0442\u044b","url":"https://www.fotor.com/ru/features/photo-effects.html"}]},{"title":"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b","type":"group","item":[{"title":"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439","subTitle":"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 iOS \u0438 Android, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e","url":"https://www.fotor.com/ru/mobile.html"},{"title":"\u0424\u043e\u0442\u043e\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0434\u043b\u044f Windows","subTitle":"\u041f\u0440\u043e\u0441\u0442\u043e\u0435 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0432 Windows \u0434\u043b\u044f \u0432\u0430\u0441","url":"https://www.fotor.com/windows/index.html"},{"title":"\u0424\u043e\u0442\u043e\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0434\u043b\u044f Mac","subTitle":"\u041c\u043e\u0449\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0434\u043b\u044f Mac, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0430\u043c \u043a\u043e\u0433\u0434\u0430-\u043b\u0438\u0431\u043e \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"C\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c","item":[{"title":"\u043a\u0440\u0435\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442","url":"https://www.fotor.com/ru/design/certificates"},{"title":"\u0412\u0438\u0437\u0438\u0442\u043a\u0430","url":"https://www.fotor.com/ru/design/business-card/"},{"title":"\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0448\u0430\u043f\u043a\u0438 \u0434\u043b\u044f \u044e\u0442\u0443\u0431\u0430","url":"https://www.fotor.com/ru/features/youtube.html"},{"title":"\u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0441\u0435","url":"https://www.fotor.com/ru/design/"}]},{"title":"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435","item":[{"title":"\u0423\u0431\u0440\u0430\u0442\u044c \u0444\u043e\u043d","url":"https://www.fotor.com/ru/features/background-remover"},{"title":"\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0444\u043e\u0442\u043e","url":"https://www.fotor.com/ru/features/one-tap-enhance.html"}]},{"title":"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","item":[{"title":"\u0446\u0435\u043d\u0442\u0440 \u043f\u043e\u043c\u043e\u0449\u0438","url":"https://support.fotor.com/hc/en-us"},{"title":"\u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            zh_CN: JSON.parse('[{"title":"\u56fe\u7247\u7f16\u8f91","item":[{"title":"\u5728\u7ebf\u56fe\u7247\u7f16\u8f91\u8f6f\u4ef6","item":[{"title":"\u56fe\u7247\u62fc\u56fe","url":"https://www.fotor.com/cn/features/collage.html"},{"title":"\u56fe\u7247\u88c1\u526a","url":"https://www.fotor.com/cn/features/crop.html"},{"title":"\u6dfb\u52a0\u6587\u5b57","url":"https://www.fotor.com/cn/features/text.html"},{"title":"\u56fe\u7247\u9a6c\u8d5b\u514b","url":"https://www.fotor.com/cn/features/mosaics.html"},{"title":"\u56fe\u7247\u7279\u6548","url":"https://www.fotor.com/cn/features/photo-effects.html"},{"title":"\u56fe\u7247\u7f8e\u5316","url":"https://www.fotor.com/cn/features/one-tap-enhance.html"}]},{"title":"\u5176\u4ed6\u5e73\u53f0","type":"group","item":[{"title":"\u7167\u7247\u7f16\u8f91\u5668\u5e94\u7528","subTitle":"\u60a8\u9700\u8981\u7684 iOS \u548c Android \u591a\u5408\u4e00\u56fe\u50cf\u7f16\u8f91\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f","url":"https://www.fotor.com/cn/mobile.html"},{"title":"\u9002\u7528\u4e8e Windows \u7684\u7167\u7247\u7f16\u8f91\u5668","subTitle":"\u9002\u7528\u4e8e Windows \u7684\u6613\u4e8e\u4f7f\u7528\u7684\u7167\u7247\u7f16\u8f91\u8f6f\u4ef6","url":"https://www.fotor.com/windows/index.html"},{"title":"\u9002\u7528\u4e8e Mac \u7684\u7167\u7247\u7f16\u8f91\u5668","subTitle":"\u60a8\u6c38\u8fdc\u9700\u8981\u7684\u9002\u7528\u4e8e Mac \u7684\u5f3a\u5927\u7167\u7247\u7f16\u8f91\u8f6f\u4ef6","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"\u6a21\u677f","item":[{"title":"\u5ba3\u4f20\u518c","url":"https://www.fotor.com/cn/brochure/templates/"},{"title":"\u6d77\u62a5","url":"https://www.fotor.com/cn/poster/templates/"},{"title":"logo","url":"https://www.fotor.com/cn/logo/templates/"},{"title":"\u793c\u54c1\u5238","url":"https://www.fotor.com/cn/gift-certificate/templates/"},{"title":"\u8bfe\u7a0b\u8868","url":"https://www.fotor.com/cn/class-schedule/templates/"},{"title":"\u65e5\u5386","url":"https://www.fotor.com/cn/calendar/templates/"},{"title":"\u67e5\u770b\u66f4\u591a\u6a21\u677f","url":"https://www.fotor.com/cn/templates/","type":"more"}]},{"title":"\u652f\u6301","item":[{"title":"\u5e2e\u52a9\u4e2d\u5fc3","url":"https://support.fotor.com/hc/en-us"},{"title":"\u8054\u7cfb\u6211\u4eec","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]'),
                            zh_TW: JSON.parse('[{"title":"\u5716\u7247\u7de8\u8f2f\u5de5\u5177","item":[{"title":"\u7dda\u4e0a\u7167\u7247\u7de8\u8f2f\u8edf\u9ad4","item":[{"title":"\u5716\u7247\u62fc\u5716","url":"https://www.fotor.com/tw/features/collage.html"},{"title":"\u5716\u7247\u88c1\u526a","url":"https://www.fotor.com/tw/features/crop.html"},{"title":"\u6dfb\u52a0\u5716\u7247\u6587\u5b57","url":"https://www.fotor.com/tw/features/text.html"},{"title":"\u5716\u7247\u99ac\u8cfd\u514b","url":"https://www.fotor.com/tw/features/mosaics.html"},{"title":"\u5716\u7247\u7279\u6548","url":"https://www.fotor.com/tw/features/photo-effects.html"},{"title":"\u5716\u7247\u7f8e\u5316","url":"https://www.fotor.com/tw/features/one-tap-enhance.html"}]},{"title":"\u5176\u4ed6\u5e73\u81fa","type":"group","item":[{"title":"\u7167\u7247\u7de8\u8f2f\u5668\u61c9\u7528","subTitle":"\u60a8\u9700\u8981\u7684 iOS \u548c Android \u591a\u5408\u4e00\u5716\u50cf\u7de8\u8f2f\u79fb\u52d5\u61c9\u7528\u7a0b\u5e8f","url":"https://www.fotor.com/tw/mobile.html"},{"title":"\u9069\u7528\u65bc Windows \u7684\u7167\u7247\u7de8\u8f2f\u5668","subTitle":"\u9069\u7528\u65bc Windows \u7684\u6613\u65bc\u4f7f\u7528\u7684\u7167\u7247\u7de8\u8f2f\u8edf\u4ef6","url":"https://www.fotor.com/windows/index.html"},{"title":"\u9069\u7528\u65bc Mac \u7684\u7167\u7247\u7de8\u8f2f\u5668","subTitle":"\u60a8\u6c38\u9060\u9700\u8981\u7684\u9069\u7528\u65bc Mac \u7684\u5f37\u5927\u7167\u7247\u7de8\u8f2f\u8edf\u4ef6","url":"https://www.fotor.com/mac/index.html"}]}]},{"title":"AI \u5de5\u5177","item":[{"title":"AI\u7e6a\u5716","url":"https://www.fotor.com/tw/ai-image-generator/"}]},{"title":"\u652f\u6301","item":[{"title":"\u5e6b\u52a9\u4e2d\u5fc3","url":"https://support.fotor.com/hc/en-us"},{"title":"\u806f\u7e6b\u6211\u5011","url":"https://support.fotor.com/hc/en-us/requests/new"}]}]')
                        };

                    function i(e) {
                        var t, o, r = "";
                        if ("string" == typeof e || "number" == typeof e) r += e;
                        else if ("object" == typeof e)
                            if (Array.isArray(e))
                                for (t = 0; t < e.length; t++) e[t] && (o = i(e[t])) && (r && (r += " "), r += o);
                            else
                                for (t in e) e[t] && (r && (r += " "), r += t);
                        return r
                    }
                    const s = function() {
                            for (var e, t, o = 0, r = ""; o < arguments.length;)(e = arguments[o++]) && (t = i(e)) && (r && (r += " "), r += t);
                            return r
                        },
                        c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAWCAYAAACyjt6wAAAABHNCSVQICAgIfAhkiAAABIBJREFUSImNlk1oHVUUx39n3kvSBJtAovlsbANa2qYlqQa60AgpmI0N6qZ1YUXBhagbLXZRCBTr0m67qYJdGazFj9SFpFQC0YUWE1sMT5MK8vJ8z2hf0pivxjdzXNz5uDPzUrwwzJ3z+T/n3nPmCIBOPtuNOqN43gietuN64Hngqnl7Hrj+E+61Ot1L8DwPtWRENdIJ6WrbKOJ6V8nIOblQzotOvtBNpjKjrteM6yEBoLhSAkTkRFN8NTYSoDUISuPgJOXHD061TEb6HWq9UYVmAAQQMU/wnVxiESVJl4jtf0d08eUtetJPKANAM66OOiqMRDqWEQuIAho4DA0lHIWkao4DNYlyYMUQC9yiqTCSFWhXX9lA8QWGx9OJcrdgtQALUzD7MWyuWAIBMAUBtWJJ8uzMbssTELTdQfz0h+irnau/MrXQ1AO9J+GZS1DfYmUyGY1xpAEvzEzsGBN6lqxPzMYF7Uj8tbWCzl4ET5H6Vuh6Chr3QMNDcPg1mHoPWvYi3YOgCgs30PwPsOtxaOyGm5djgKnfCT1PQlMXbK5CMQfz3/l8tWQVVMnG75MmLgbgbsDCRFS9v16BY5dNNjuPGPGWR+GxV428U4P0vQh7BmHlD7j5qbGZycCRl2HwTcjWxU+mlIOxt+D3GT/rGubMSWcwji91FJVVqGyYfU19OqCDxw04W0+AoXdg6FQaHED7Pnjjc9jVGz9ihawpECutSYeSQRraTPYkC7uPQV2T4S3Np53VNMDdPMx9DYs5Y6qzDwZeMvz1JRg/A7nrUPsAPH0aBk5ATR0cPw/nhxER1M9kVsI2EYBL3MEdD8LRS2kg6sKtj0hd+n+K8MkJuLdpGi4Cvc9F/G/eh1+umYa9XoYvzkDXIeg4AN190LEfCrPhgTrp6vsfa+Mv+PYslG6gEjYnswrfm3YU9DKA5p6I/9tUvKq9CsxPRfyOfRYeIRvvSZoGurUCuQ9NhW4uw/oduJMzRVMtuLVFn2Y179qGiF+5F7cvAltr0XdNXaxoszEnsSbqL3cTChOx/6+dAUne2dCYRraW89DW62foIMxNmv6IICh09Eaqi7ctPOJXcVjBkvYVRGn7trNeRV7toAFuX4+YQ6dgZ2tktv95ODBseHeLsPBT7IeRjfdAn7Hd38SWtQHY4CyQEujMXYPCNHQdhrb98PoEUpqFHY3QujdS/vIseG5UrIBzX0A2sG0GgKp7STC8Coy/DYUfzXdtAzw8EIHbWocrp+HWVylb2eg+iT+xmHYjyz+b/b2ltHMbgAhsluHPaVBFVkvh/VI/0yIC63/D2Cuw+wl45Cg0dcJaGYqzMP0ZLBWsYo2ukOjMySKu2x4NoNEAKbFhVFNDaGxQtfiaHEirDLopO9UGZNcrOahetY9RUlniPscrpK+IIEGF2gNotUF3u3ewd5xxh2zlXRwpx4/QSnMCXNCYNZw6LQAWiKrDaMyHrWNsKX5piIA4ZdzKOUcOjeX51+1H+AChFJvfEo7VBk7QTqQ6AEjJahV6IK8RqwRcxHH65UI5/x8kxBSL9NBV8gAAAABJRU5ErkJggg==",
                        u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAWCAYAAACPHL/WAAAABHNCSVQICAgIfAhkiAAABQNJREFUWIWdl2to1WUYwH/P2f+YS5tyNvSYbiPWVkE2TW1iF1EKa7qky4coghIy6EugRSTsi/qhCMIghUjQ+tIHKyGXZBcpEMUueJdcmyWTdrzszLk53XbO/+nD+79fjtLDOf/3/z735/m/z/O+rwBsXqf1FnRqmQ5V8qqAgtr+qDZoFKdACi3Io7Y6OCGo2/2jAfmALlfWxXnynk1FbenHpmt8nE07eqVPNq/T+qxw1LY1l2TUN67GgIqv0FGKLbcUkOdUJBlhXneuYT4VL/BwQJ7e4sQ48zLZDJ2qmgNAhCiY2NSZxel4dE2keSAgKfIVBIyEhCU1yRUlZ2XptBQ6EMMlQHYyVN8ezq5dgqGiY0aNQgHUf8QsBMNz3QnjAo5pEBEJKgoaHCWEVNUOSyAf1HNPK6x6MVnp5QKc+hUOfAulsTiPiPP5o7YrOB1DBXhFjaybxFRQs0pEJZ8JJ6HysqnLw9Kn4eW3oCobDeem4qnOpIKz5OrqoW0VtHUoNXUpjA5Y4e8ehoPfQ+8pU3xT7hCWrYbcDGhohoXL4NB3UD0FZs5RVIUrF2HwIkydDnV3wtkTYX1WFmY3Qe0sGB6Avm64NlghMAfX1AovdRo/t6yFoUsJgauggJUUpQsDF+Bct3q1NHRZWPOuod09Fw7tg3wDvLrByO7/EjIZeGy1qbkPXjc+VVXB0ufh0WdMAlywy/DHj7DnExgZjJlPjTMVBKykgk6Dkav+u5WNSy1cDjW5uNwL62Hukjg+UwWLVkDjfbBtHQxdNnh1HupNIlChpixfxc2CEuY/4s+KF+IcNTkYHYbeE75zC5b7wQwPwtdb4d8emFYLK1+DxnthRoN5/+I940puFix6EnfPYHazb2NxBzQ/6Defrq2JAUliGS15Ah5oM4FOq4XptQZfmoDDP8QDGrkCH79jlo/aBvfQCp++c6OpG7WhWIDtG2DD51A9FRY8Dl99BGPXIJeHp9Yk5NQJKAhdWwNdUCGTtJm6UJuHxhbzd4MZGYJd2+Di+fhnP3nYBBWEhhYzDvTD+b/CtOsjcOZ3856pgvoW/l+nFH+00mgA3cegcB7vyFHog57j0T3Ih9Hh8Nya5L+7S9AFZyvk+ohv8bZqg+85Am8+jHcEa2t3uxxsWQvdv/lHpChYXhAJhXbmOBw7SPysFdlAo+CSShMwfgMmTYaZjRGioyCX9+WuFgNKkncSn5ziQyZdJO5gWGNlAVfm7EkzTqkxHS2o8a77oXm+wVwbMs0iqQKi9uPHOPc07XwhDRFvEVIYNTL5ZTe0zDc18uwbMKcJzv0p5Btg8UqDB9j3GZTLyTrHRqHYb3THl7s6PwnX0C2cl4HISkgV8An/nIa9O4X2V4zzi9vNPwiH98KB3akqOLofjvyEf22oYDvWFCbG/JP1+Fg4iPiyVkoTcOWSWQQ3RsM87njgG9Phlj4Hza2mWdhl+PsU/LwLTh9MVG4QKsFZ6D2phuT9t7VfbfLhyxSJl7Voc1BbvQ5oZCVwE9XQhS6oQwTKJahkM3Z5dPlsc270b7fuJU9Q1UIG6PKi8x6xPPlZCaVDHAEJZdKledcyCcvZKbUSMuYKxvyRiK/GvgCisidjldkoUIwJxq6IN4dKrdxVlHw0c1OVTE/0IeCfk9diqcymzPoPpW9CmQdsRyhU1BctjiQbqdeAgLAk9NVApwlRNcYZtVlA+NSqYt6OXun7Dx2Fzaa4NTm5AAAAAElFTkSuQmCC",
                        l = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbiAvIE1vcmU8L3RpdGxlPgogICAgPGcgaWQ9Ikljb24tLy1Nb3JlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTQsMTIgQzE0LjU1MiwxMiAxNSwxMi40NDcgMTUsMTMgQzE1LDEzLjU1MyAxNC41NTIsMTQgMTQsMTQgTDIsMTQgQzEuNDQ4LDE0IDEsMTMuNTUzIDEsMTMgQzEsMTIuNDQ3IDEuNDQ4LDEyIDIsMTIgTDE0LDEyIFogTTE0LDcgQzE0LjU1Miw3IDE1LDcuNDQ3IDE1LDggQzE1LDguNTUzIDE0LjU1Miw5IDE0LDkgTDIsOSBDMS40NDgsOSAxLDguNTUzIDEsOCBDMSw3LjQ0NyAxLjQ0OCw3IDIsNyBMMTQsNyBaIE0xNCwyIEMxNC41NTIsMiAxNSwyLjQ0NyAxNSwzIEMxNSwzLjU1MyAxNC41NTIsNCAxNCw0IEwyLDQgQzEuNDQ4LDQgMSwzLjU1MyAxLDMgQzEsMi40NDcgMS40NDgsMiAyLDIgTDE0LDIgWiIgaWQ9IuWQiOW5tuW9oueKtiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=",
                        p = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbiAvIGNsb3NlX2xhcmdlPC90aXRsZT4KICAgIDxnIGlkPSJJY29uLS8tY2xvc2VfbGFyZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik05LjQyNjcxNDE3LDggTDEzLjcwNTk4MTYsMy43MjEgQzE0LjA5ODAwNjEsMy4zMjggMTQuMDk4MDA2MSwyLjY4NyAxMy43MDU5ODE2LDIuMjk0IEMxMy4zMTM5NTcxLDEuOTAyIDEyLjY3MTkxNywxLjkwMiAxMi4yNzk4OTI1LDIuMjk0IEw3Ljk5OTYyNDk4LDYuNTc0IEwzLjcyMDM1NzUyLDIuMjk0IEMzLjMyNzMzMjk2LDEuOTAyIDIuNjg2MjkyODksMS45MDIgMi4yOTMyNjgzMywyLjI5NCBDMS45MDIyNDM4OSwyLjY4NyAxLjkwMjI0Mzg5LDMuMzI4IDIuMjkzMjY4MzMsMy43MjEgTDYuNTcyNTM1NzgsOCBMMi4yOTMyNjgzMywxMi4yNzkgQzEuOTAyMjQzODksMTIuNjcxIDEuOTAyMjQzODksMTMuMzEzIDIuMjkzMjY4MzMsMTMuNzA2IEMyLjY4NjI5Mjg5LDE0LjA5OCAzLjMyNzMzMjk2LDE0LjA5OCAzLjcyMDM1NzUyLDEzLjcwNiBMNy45OTk2MjQ5OCw5LjQyNiBMMTIuMjc5ODkyNSwxMy43MDYgQzEyLjY3MTkxNywxNC4wOTggMTMuMzEzOTU3MSwxNC4wOTggMTMuNzA1OTgxNiwxMy43MDYgQzE0LjA5ODAwNjEsMTMuMzEzIDE0LjA5ODAwNjEsMTIuNjcxIDEzLjcwNTk4MTYsMTIuMjc5IEw5LjQyNjcxNDE3LDggWiIgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+";
                    var f = r(9484),
                        d = r.n(f),
                        m = r(5376),
                        h = r.n(m);
                    const g = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyAgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cGF0aCBkPSJNMTIuNzAzIDUuNzI4YS44MjQuODI0IDAgMDAtMS4xODggMEw3Ljk0OSA5LjM5IDQuMzg0IDUuNzI4YS44MjQuODI0IDAgMDAtMS4xODggMCAuODguODggMCAwMDAgMS4yMmw0LjE2IDQuMjc0YS44MjQuODI0IDAgMDAxLjE4NyAwbDQuMTYtNC4yNzNhLjg4Ljg4IDAgMDAwLTEuMjIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KPC9zdmc+";

                    function w() {
                        return (w = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = arguments[t];
                                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                            }
                            return e
                        }).apply(this, arguments)
                    }

                    function v(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var r, n, a = [],
                                    i = !0,
                                    s = !1;
                                try {
                                    for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return _(e, t);
                                var o = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function _(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }

                    function y(o) {
                        var r = o.itemMenus,
                            n = o.onNavClick,
                            a = v((0, e.useState)(""), 2),
                            i = a[0],
                            s = a[1],
                            c = v((0, e.useState)(""), 2),
                            u = c[0],
                            l = c[1],
                            p = v((0, e.useState)(null), 2),
                            f = p[0],
                            d = p[1];
                        return (0, e.useEffect)((function() {
                            n && n(f)
                        }), [f]), (0, e.useEffect)((function() {
                            l(""), s(""), d(null)
                        }), [r]), t().createElement(t().Fragment, null, r && r.map((function(e, o) {
                            var r;
                            return null != e && e.item && 0 !== (null == e ? void 0 : e.item.length) ? t().createElement("div", w({
                                className: "menuItem-wraper first-menu ".concat(null != e && e.mode ? null == e ? void 0 : e.mode : ""),
                                key: o
                            }, null == e ? void 0 : e.labelAttr), t().createElement("div", {
                                className: "menuItem",
                                onClick: function(e) {
                                    s((function(e) {
                                        return e === o ? "" : o
                                    })), d(e.target)
                                }
                            }, null == e ? void 0 : e.icon, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title), (null == e ? void 0 : e.item) && "tiling" !== (null == e ? void 0 : e.mode) && t().createElement("img", {
                                src: g,
                                alt: g,
                                className: i === o ? "arrow-expand" : "arrow",
                                width: 16
                            })), (i === o || "tiling" === (null == e ? void 0 : e.mode)) && t().createElement("ul", {
                                className: "menuItem-menu"
                            }, null == e || null === (r = e.item) || void 0 === r ? void 0 : r.map((function(e, o) {
                                return t().createElement("div", w({
                                    className: "menuItem-wraper",
                                    key: o
                                }, null == e ? void 0 : e.labelAttr), null != e && e.item ? t().createElement("div", {
                                    className: "menuItem",
                                    onClick: function() {
                                        l((function(e) {
                                            return e === o ? "" : o
                                        })), (null == e ? void 0 : e.onClick) && (null == e || e.onClick(e))
                                    }
                                }, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title), t().createElement("img", {
                                    src: g,
                                    alt: g,
                                    className: u === o ? "arrow-expand" : "arrow",
                                    width: 16
                                })) : null != e && e.value || null != e && e.url ? t().createElement("a", {
                                    className: "menuItem",
                                    href: (null == e ? void 0 : e.value) || (null == e ? void 0 : e.url),
                                    onClick: null == e ? void 0 : e.onClick
                                }, null == e ? void 0 : e.icon, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title)) : t().createElement("div", {
                                    className: "menuItem",
                                    onClick: null == e ? void 0 : e.onClick
                                }, null == e ? void 0 : e.icon, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title)), u === o && e.item && t().createElement("ul", {
                                    className: "menuItem-menu"
                                }, e.item.map((function(e, o) {
                                    return null != e && e.value || null != e && e.url ? t().createElement("a", {
                                        key: o,
                                        href: (null == e ? void 0 : e.value) || (null == e ? void 0 : e.url),
                                        onClick: null == e ? void 0 : e.onClick
                                    }, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title)) : t().createElement("div", {
                                        key: o,
                                        onClick: null == e ? void 0 : e.onClick
                                    }, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title))
                                }))))
                            })))) : null != e && e.value || null != e && e.url ? t().createElement("div", w({
                                className: "first-menu"
                            }, e.labelAttr, {
                                key: o
                            }), t().createElement("a", {
                                className: "menuItem",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: e.value || e.url,
                                onClick: e.onClick,
                                key: o
                            }, null == e ? void 0 : e.icon, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title), (null == e ? void 0 : e.arrow) && t().createElement("img", {
                                src: g,
                                alt: g,
                                className: "arrow",
                                width: 16
                            }), (null == e ? void 0 : e.unReadNum) > 0 && t().createElement("span", {
                                className: "message-bell"
                            }, null == e ? void 0 : e.unReadNum))) : t().createElement("div", w({
                                className: "first-menu"
                            }, null == e ? void 0 : e.labelAttr, {
                                key: o
                            }), t().createElement("div", {
                                className: "menuItem",
                                onClick: null == e ? void 0 : e.onClick
                            }, null == e ? void 0 : e.icon, (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title), (null == e ? void 0 : e.arrow) && t().createElement("img", {
                                src: g,
                                alt: g,
                                className: "arrow",
                                width: 16
                            })))
                        })))
                    }
                    var b = r(6322),
                        k = r.n(b),
                        E = {
                            development: {
                                ios: {
                                    general_all: "https://datasink-sa.fotor.com.cn/r/Eu",
                                    homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/6F",
                                    general_nav_button: "https://datasink-sa.fotor.com.cn/r/72",
                                    homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/pF",
                                    homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/xX",
                                    homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/aX",
                                    homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/rX",
                                    features_nav_button: "https://datasink-sa.fotor.com.cn/r/K2",
                                    hub_nav_button: "https://datasink-sa.fotor.com.cn/r/z2",
                                    goart_app_ad: "https://datasink-sa.fotor.com.cn/r/hU",
                                    goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/yk",
                                    homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/vv",
                                    generic_top_banner: "https://datasink-sa.fotor.com.cn/r/tv",
                                    general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/7h",
                                    general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                                    homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Kh",
                                    homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/zh"
                                },
                                android: {
                                    general_all: "https://datasink-sa.fotor.com.cn/r/7u",
                                    homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/sX",
                                    general_nav_button: "https://datasink-sa.fotor.com.cn/r/v2",
                                    homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/oX",
                                    homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/AX",
                                    homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/BX",
                                    homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/SX",
                                    features_nav_button: "https://datasink-sa.fotor.com.cn/r/U2",
                                    hub_nav_button: "https://datasink-sa.fotor.com.cn/r/E2",
                                    goart_app_ad: "https://datasink-sa.fotor.com.cn/r/RU",
                                    goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/9k",
                                    homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/D7",
                                    generic_top_banner: "https://datasink-sa.fotor.com.cn/r/rv",
                                    general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/vh",
                                    general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                                    homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Uh",
                                    homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/Eh"
                                }
                            },
                            production: {
                                ios: {
                                    general_all: "https://datasink-sa.fotor.com.cn/r/Eu",
                                    homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/FX",
                                    general_nav_button: "https://datasink-sa.fotor.com.cn/r/X2",
                                    homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/XX",
                                    homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/2X",
                                    homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/KX",
                                    homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/RX",
                                    features_nav_button: "https://datasink-sa.fotor.com.cn/r/o2",
                                    hub_nav_button: "https://datasink-sa.fotor.com.cn/r/B2",
                                    goart_app_ad: "https://datasink-sa.fotor.com.cn/r/7U",
                                    goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/Wk",
                                    homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/vv",
                                    generic_top_banner: "https://datasink-sa.fotor.com.cn/r/tv",
                                    general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/7h",
                                    general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                                    homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Kh",
                                    homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/zh",
                                    features_nav_photo_to_cartoon: "https://datasink-sa.fotor.com.cn/r/6t",
                                    features_nav_photo_to_anime: "https://datasink-sa.fotor.com.cn/r/xQ"
                                },
                                android: {
                                    general_all: "https://datasink-sa.fotor.com.cn/r/7u",
                                    homepage_nav_button: "https://datasink-sa.fotor.com.cn/r/UX",
                                    general_nav_button: "https://datasink-sa.fotor.com.cn/r/22",
                                    homepage_banner_button: "https://datasink-sa.fotor.com.cn/r/zX",
                                    homepage_edit_guide_button_1: "https://datasink-sa.fotor.com.cn/r/EX",
                                    homepage_edit_guide_button_2: "https://datasink-sa.fotor.com.cn/r/7X",
                                    homepage_banner_image: "https://datasink-sa.fotor.com.cn/r/HX",
                                    features_nav_button: "https://datasink-sa.fotor.com.cn/r/A2",
                                    hub_nav_button: "https://datasink-sa.fotor.com.cn/r/F2",
                                    goart_app_ad: "https://datasink-sa.fotor.com.cn/r/vU",
                                    goart_ai_art_generator: "https://datasink-sa.fotor.com.cn/r/jk",
                                    homepage_top_banner: "https://datasink-sa.fotor.com.cn/r/D7",
                                    generic_top_banner: "https://datasink-sa.fotor.com.cn/r/rv",
                                    general_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/vh",
                                    general_hover_button: "https://datasink-sa.fotor.com.cn/t/wh",
                                    homepage_continue_in_the_app: "https://datasink-sa.fotor.com.cn/t/Uh",
                                    homepage_hover_button: "https://datasink-sa.fotor.com.cn/t/Eh",
                                    features_nav_photo_to_cartoon: "https://datasink-sa.fotor.com.cn/r/Tt",
                                    features_nav_photo_to_anime: "https://datasink-sa.fotor.com.cn/r/pt"
                                }
                            }
                        };
                    E.staging = E.development, E.preRelease = E.production;
                    const L = E[{
                        npm_config_save_dev: "",
                        npm_config_legacy_bundling: "",
                        npm_config_dry_run: "",
                        npm_package_devDependencies_react_dom: "17.0.0",
                        PUBLIC_URL: "https://pub-static.fotor.com/static/web/lib/fotor-bundle/public",
                        npm_config_viewer: "man",
                        npm_config_only: "",
                        npm_config_commit_hooks: "true",
                        npm_config_browser: "",
                        npm_package_gitHead: "29b50232e91790ef7f2f1d8a6f2c9b89455801f1",
                        npm_package_devDependencies_prettier: "^2.7.1",
                        npm_config_also: "",
                        npm_config_sign_git_commit: "",
                        npm_config_rollback: "true",
                        npm_package_scripts_build_websiteHeader: "env-cmd -f .env.production webpack --mode=production --node-env=production --config=./config/websiteHeader.config.js",
                        npm_package_webpackpath: "--config=./config/webpack.config.js",
                        TERM_PROGRAM: "iTerm.app",
                        NODE: "/Users/fotor1/.nvm/versions/node/v14.21.3/bin/node",
                        npm_config_usage: "",
                        npm_config_audit: "true",
                        npm_package_devDependencies_env_cmd: "^10.1.0",
                        INIT_CWD: "/Users/fotor1/workspace/fotor-bundle",
                        npm_package_dependencies_axios: "0.27.2",
                        npm_package_devDependencies_typescript: "^4.8.4",
                        NVM_CD_FLAGS: "-q",
                        npm_config_globalignorefile: "/Users/fotor1/.nvm/versions/node/v14.21.3/etc/npmignore",
                        TERM: "xterm-256color",
                        SHELL: "/bin/zsh",
                        npm_config_shell: "/bin/zsh",
                        npm_config_maxsockets: "50",
                        npm_config_init_author_url: "",
                        npm_package_devDependencies_style_loader: "^3.3.1",
                        npm_config_shrinkwrap: "true",
                        npm_config_parseable: "",
                        npm_config_metrics_registry: "https://repo-n3.everimaging.cn/repository/npm-group/",
                        TMPDIR: "/var/folders/fm/nt5zd9sj523_6kn2szc_4hbw0000gp/T/",
                        REACT_APP_USER_ASSETS_URL: "https://u-static.fotor.com",
                        npm_config_timing: "",
                        npm_config_init_license: "ISC",
                        npm_package_dependencies_copy_to_clipboard: "^3.3.2",
                        npm_package_devDependencies__babel_preset_typescript: "^7.18.6",
                        CONDA_SHLVL: "1",
                        Apple_PubSub_Socket_Render: "/private/tmp/com.apple.launchd.hXZcBNmGZP/Render",
                        npm_config_if_present: "",
                        npm_package_dependencies_cuid: "^2.1.8",
                        CONDA_PROMPT_MODIFIER: "(base) ",
                        TERM_PROGRAM_VERSION: "3.3.12",
                        npm_package_scripts_dev: "env-cmd -f .env.development webpack serve --config=./config/webpack.config.js",
                        npm_config_sign_git_tag: "",
                        npm_config_init_author_email: "",
                        npm_config_cache_max: "Infinity",
                        npm_package_dependencies_preact: "^10.11.1",
                        npm_config_preid: "",
                        npm_config_long: "",
                        npm_config_local_address: "",
                        npm_config_git_tag_version: "true",
                        npm_config_cert: "",
                        npm_package_devDependencies_webpack_bundle_analyzer: "^4.6.1",
                        TERM_SESSION_ID: "w0t2p0:5CDC8608-6419-43A6-B7EA-782E77163358",
                        npm_config_noproxy: "",
                        npm_config_fetch_retries: "2",
                        npm_config_registry: "https://repo-n3.everimaging.cn/repository/npm-group/",
                        npm_package_scripts_analyze: "USE_ANALYZER=true env-cmd -f .env.production webpack --mode=production --node-env=production --config=./config/webpack.config.js",
                        npm_package_dependencies_lottie_web: "^5.12.2",
                        npm_package_devDependencies_clean_webpack_plugin: "^4.0.0",
                        PNPM_HOME: "/Users/fotor1/.pnpm/store",
                        ZSH: "/Users/fotor1/.oh-my-zsh",
                        npm_config_versions: "",
                        npm_config_message: "%s",
                        npm_config_key: "",
                        npm_package_readmeFilename: "README.md",
                        npm_package_devDependencies_svg_inline_loader: "^0.8.2",
                        npm_package_devDependencies_webpack: "^5.74.0",
                        npm_package_devDependencies_react: "17.0.0",
                        npm_package_scripts_build_test: "env-cmd -f .env.test webpack --mode=development --config=./config/webpack.config.js",
                        npm_package_description: "My webpack project",
                        NVM_DIR: "/Users/fotor1/.nvm",
                        USER: "fotor1",
                        npm_package_devDependencies_webpack_cli: "^4.10.0",
                        npm_package_license: "ISC",
                        REACT_APP_AD: "https://pub-static.fotor.com/static/web/lib/a8s/bundle.js",
                        npm_package_devDependencies_postcss_loader: "^7.0.1",
                        npm_package_devDependencies_less_loader: "^11.0.0",
                        COMMAND_MODE: "unix2003",
                        npm_config_globalconfig: "/Users/fotor1/.nvm/versions/node/v14.21.3/etc/npmrc",
                        CONDA_EXE: "/opt/anaconda3/bin/conda",
                        REACT_APP_ASSETS_URL: "https://static.fotor.com",
                        npm_config_prefer_online: "",
                        npm_config_logs_max: "10",
                        npm_config_always_auth: "true",
                        npm_package_devDependencies_webpack_dev_server: "^4.11.1",
                        npm_package_devDependencies__babel_core: "^7.19.6",
                        npm_package_dependencies_resize_observer: "^1.0.4",
                        npm_package_devDependencies_babel_loader: "^9.0.1",
                        SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.b8dxVCVPWT/Listeners",
                        npm_package_devDependencies_postcss: "^8.4.16",
                        npm_package_devDependencies_less: "^4.1.3",
                        npm_package_scripts_dev_prod_cn: "NODE_ENV=development env-cmd -f .env.production.cn webpack serve --config=./config/webpack.config.js",
                        __CF_USER_TEXT_ENCODING: "0x1F6:0x19:0x34",
                        npm_execpath: "/Users/fotor1/.nvm/versions/node/v14.21.3/lib/node_modules/npm/bin/npm-cli.js",
                        npm_config_global_style: "",
                        npm_config_cache_lock_retries: "10",
                        npm_config_update_notifier: "true",
                        npm_config_cafile: "",
                        PAGER: "less",
                        npm_config_heading: "npm",
                        npm_config_audit_level: "low",
                        npm_package_dependencies_glob: "^8.1.0",
                        npm_package_devDependencies_mini_css_extract_plugin: "^2.7.2",
                        npm_package_devDependencies__svgr_webpack: "^6.5.1",
                        _CE_CONDA: "",
                        LSCOLORS: "Gxfxcxdxbxegedabagacad",
                        npm_config_searchlimit: "20",
                        npm_config_read_only: "",
                        npm_config_offline: "",
                        npm_config_fetch_retry_mintimeout: "10000",
                        npm_config_json: "",
                        npm_config_access: "",
                        npm_config_argv: '{"remain":[],"cooked":["run","build:websiteHeaderNoCss"],"original":["run","build:websiteHeaderNoCss"]}',
                        PATH: "/Users/fotor1/.nvm/versions/node/v14.21.3/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/fotor1/workspace/fotor-bundle/node_modules/.bin:/Users/fotor1/.pnpm/store:/Users/fotor1/.yarn/bin:/Users/fotor1/.config/yarn/global/node_modules/.bin:/opt/anaconda3/bin:/opt/anaconda3/condabin:/Users/fotor1/.nvm/versions/node/v14.21.3/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/Users/fotor1/.cargo/bin",
                        npm_config_allow_same_version: "",
                        npm_config_https_proxy: "",
                        npm_config_engine_strict: "",
                        npm_config_description: "true",
                        npm_config_userconfig: "/Users/fotor1/.npmrc",
                        npm_config_init_module: "/Users/fotor1/.npm-init.js",
                        npm_package_dependencies_react_toastify: "^9.1.1",
                        npm_package_author: "",
                        CONDA_PREFIX: "/opt/anaconda3",
                        REACT_APP_SA_DATA_URL: "https://datasink-sa.fotor.com/sa?project=fotorglobalproduct",
                        npm_config_cidr: "",
                        PWD: "/Users/fotor1/workspace/fotor-bundle",
                        npm_config_user: "502",
                        npm_config_node_version: "14.21.3",
                        npm_lifecycle_event: "build:websiteHeaderNoCss",
                        npm_config_save: "true",
                        npm_config_ignore_prepublish: "",
                        npm_config_editor: "vi",
                        npm_config_auth_type: "legacy",
                        npm_package_name: "fotor-bundle",
                        LANG: "zh_CN.UTF-8",
                        npm_config_tag: "latest",
                        npm_config_script_shell: "",
                        npm_package_devDependencies__babel_preset_react: "^7.18.6",
                        npm_package_devDependencies__babel_preset_env: "^7.19.4",
                        npm_package_scripts_dev_prod: "NODE_ENV=development env-cmd -f .env.production webpack serve --config=./config/webpack.config.js",
                        npm_package_scripts_dev_cn: "env-cmd -f .env.development.cn webpack serve --config=./config/webpack.config.js",
                        ITERM_PROFILE: "Default",
                        npm_config_progress: "true",
                        npm_config_global: "",
                        npm_config_before: "",
                        NODE_PATH: "/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/webpack@5.74.0_webpack-cli@4.10.0/node_modules/webpack/bin/node_modules:/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/webpack@5.74.0_webpack-cli@4.10.0/node_modules/webpack/node_modules:/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/webpack@5.74.0_webpack-cli@4.10.0/node_modules:/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/node_modules:/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/env-cmd@10.1.0/node_modules/env-cmd/bin/node_modules:/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/env-cmd@10.1.0/node_modules/env-cmd/node_modules:/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/env-cmd@10.1.0/node_modules:/Users/fotor1/workspace/fotor-bundle/node_modules/.pnpm/node_modules",
                        npm_config_searchstaleness: "900",
                        npm_config_optional: "true",
                        npm_config_ham_it_up: "",
                        npm_package_devDependencies_ts_loader: "^9.4.1",
                        XPC_FLAGS: "0x0",
                        REACT_APP_IS_CN: "false",
                        NODE_ENV: "production",
                        npm_config_save_prod: "",
                        npm_config_force: "",
                        npm_config_bin_links: "true",
                        npm_package_scripts_language: "python ./script/translator.py",
                        npm_config_searchopts: "",
                        REACT_APP_SIGN_SDK: "https://pub-static.fotor.com/static/web/lib/account/bundle.js",
                        npm_config_node_gyp: "/Users/fotor1/.nvm/versions/node/v14.21.3/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
                        npm_config_depth: "Infinity",
                        npm_package_scripts_build_prod: "env-cmd -f .env.production webpack --mode=production --node-env=production --config=./config/webpack.config.js",
                        npm_package_main: "index.js",
                        npm_config_sso_poll_frequency: "500",
                        npm_config_rebuild_bundle: "true",
                        npm_package_scripts_watch: "webpack --watch",
                        npm_package_version: "1.0.0",
                        _CE_M: "",
                        XPC_SERVICE_NAME: "0",
                        npm_config_unicode: "true",
                        npm_package_devDependencies_autoprefixer: "^10.4.12",
                        npm_package_dependencies_spark_md5: "^3.0.2",
                        SHLVL: "2",
                        HOME: "/Users/fotor1",
                        COLORFGBG: "15;0",
                        npm_config_fetch_retry_maxtimeout: "60000",
                        npm_config_tag_version_prefix: "v",
                        npm_config_strict_ssl: "true",
                        npm_config_sso_type: "oauth",
                        npm_config_scripts_prepend_node_path: "warn-only",
                        npm_config_save_prefix: "^",
                        npm_config_loglevel: "notice",
                        npm_config_ca: "",
                        npm_package_scripts_serve: "webpack serve --config=./config/webpack.config.js",
                        LC_TERMINAL_VERSION: "3.3.12",
                        npm_config_save_exact: "",
                        npm_config_group: "20",
                        npm_config_fetch_retry_factor: "10",
                        npm_config_dev: "",
                        npm_package_scripts_build_pre: "env-cmd -f .env.production webpack --mode=production --node-env=production --config=./config/webpack.config.js",
                        npm_config_version: "",
                        npm_config_prefer_offline: "",
                        npm_config_cache_lock_stale: "60000",
                        npm_config_otp: "",
                        npm_config_cache_min: "10",
                        ITERM_SESSION_ID: "w0t2p0:5CDC8608-6419-43A6-B7EA-782E77163358",
                        REACT_APP_PAYMENT_SDK: "https://pub-static.fotor.com/static/web/lib/payment/bundle.js",
                        npm_config_searchexclude: "",
                        npm_config_cache: "/Users/fotor1/.npm",
                        npm_package_devDependencies_html_webpack_plugin: "^5.5.0",
                        CONDA_PYTHON_EXE: "/opt/anaconda3/bin/python",
                        LESS: "-R",
                        LOGNAME: "fotor1",
                        npm_lifecycle_script: "env-cmd -f .env.production webpack --mode=production --node-env=production --config=./config/websiteHeaderNoCss.config.js",
                        npm_config_color: "true",
                        npm_package_scripts_build_pre_cn: "env-cmd -f .env.production.cn webpack --mode=production --node-env=production --config=./config/webpack.config.js",
                        npm_config_proxy: "",
                        npm_config_package_lock: "true",
                        npm_config_package_lock_only: "",
                        npm_config_fund: "true",
                        npm_config_save_optional: "",
                        CONDA_DEFAULT_ENV: "base",
                        NVM_BIN: "/Users/fotor1/.nvm/versions/node/v14.21.3/bin",
                        npm_config_ignore_scripts: "",
                        npm_config_user_agent: "npm/6.14.18 node/v14.21.3 darwin x64",
                        REACT_APP_BASE_URL: "https://www.fotor.com/",
                        npm_config_cache_lock_wait: "10000",
                        npm_package_dependencies_clsx: "^1.2.1",
                        npm_package_devDependencies__types_node: "^18.8.3",
                        npm_config_production: "",
                        LC_TERMINAL: "iTerm2",
                        npm_config_send_metrics: "",
                        npm_config_save_bundle: "",
                        npm_package_devDependencies_process: "^0.11.10",
                        npm_package_scripts_build_test_cn: "env-cmd -f .env.test.cn webpack --mode=development --config=./config/webpack.config.js",
                        npm_config_umask: "0022",
                        npm_config_node_options: "",
                        npm_config_init_version: "1.0.0",
                        npm_package_devDependencies_raw_loader: "^4.0.2",
                        npm_package_devDependencies__webpack_cli_generators: "^2.5.0",
                        npm_config_init_author_name: "",
                        npm_config_git: "git",
                        npm_config_scope: "",
                        npm_package_devDependencies_css_loader: "^6.7.1",
                        SECURITYSESSIONID: "186a8",
                        npm_config_unsafe_perm: "true",
                        npm_config_tmp: "/var/folders/fm/nt5zd9sj523_6kn2szc_4hbw0000gp/T",
                        npm_config_onload_script: "",
                        npm_package_scripts_build_prod_cn: "env-cmd -f .env.production.cn webpack --mode=production --node-env=production --config=./config/webpack.config.js",
                        npm_node_execpath: "/Users/fotor1/.nvm/versions/node/v14.21.3/bin/node",
                        npm_config_prefix: "/Users/fotor1/.nvm/versions/node/v14.21.3",
                        npm_config_link: "",
                        npm_config_format_package_lock: "true",
                        npm_package_dependencies_qrcode: "^1.5.1",
                        npm_package_scripts_build_websiteHeaderNoCss: "env-cmd -f .env.production webpack --mode=production --node-env=production --config=./config/websiteHeaderNoCss.config.js",
                        COLORTERM: "truecolor"
                    }.SERVER_ENV || "production"];
                    var x = {
                            development: {
                                ios: {
                                    "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "": "https://test-www.fotor.com/photo-editor-app/",
                                    "/es": "https://test-www.fotor.com/photo-editor-app/",
                                    "/pt": "https://test-www.fotor.com/photo-editor-app/",
                                    "/ru": "https://test-www.fotor.com/photo-editor-app/",
                                    "/fr": "https://test-www.fotor.com/photo-editor-app/",
                                    "/de": "https://test-www.fotor.com/photo-editor-app/",
                                    "/cn": "https://test-www.fotor.com/photo-editor-app/",
                                    "/tw": "https://test-www.fotor.com/photo-editor-app/",
                                    "/jp": "https://test-www.fotor.com/photo-editor-app/"
                                },
                                android: {
                                    "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "": "https://test-www.fotor.com/photo-editor-app/",
                                    "/es": "https://test-www.fotor.com/photo-editor-app/",
                                    "/pt": "https://test-www.fotor.com/photo-editor-app/",
                                    "/ru": "https://test-www.fotor.com/photo-editor-app/",
                                    "/fr": "https://test-www.fotor.com/photo-editor-app/",
                                    "/de": "https://test-www.fotor.com/photo-editor-app/",
                                    "/cn": "https://test-www.fotor.com/photo-editor-app/",
                                    "/tw": "https://test-www.fotor.com/photo-editor-app/",
                                    "/jp": "https://test-www.fotor.com/photo-editor-app/"
                                }
                            },
                            production: {
                                ios: {
                                    "": "https://www.fotor.com/photo-editor-app/",
                                    "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "/es": "https://www.fotor.com/photo-editor-app/",
                                    "/pt": "https://www.fotor.com/photo-editor-app/",
                                    "/ru": "https://www.fotor.com/photo-editor-app/",
                                    "/fr": "https://www.fotor.com/photo-editor-app/",
                                    "/de": "https://www.fotor.com/photo-editor-app/",
                                    "/cn": "https://www.fotor.com/photo-editor-app/",
                                    "/tw": "https://www.fotor.com/photo-editor-app/",
                                    "/jp": "https://www.fotor.com/photo-editor-app/"
                                },
                                android: {
                                    "/nft-creator": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "/features/goart.html": "https://datasink-sa.fotor.com.cn/r/zU",
                                    "/": "https://www.fotor.com/photo-editor-app/",
                                    "/es": "https://www.fotor.com/photo-editor-app/",
                                    "/pt": "https://www.fotor.com/photo-editor-app/",
                                    "/ru": "https://www.fotor.com/photo-editor-app/",
                                    "/fr": "https://www.fotor.com/photo-editor-app/",
                                    "/de": "https://www.fotor.com/photo-editor-app/",
                                    "/cn": "https://www.fotor.com/photo-editor-app/",
                                    "/tw": "https://www.fotor.com/photo-editor-app/",
                                    "/jp": "https://www.fotor.com/photo-editor-app/"
                                }
                            }
                        },
                        S = {
                            development: {
                                ios: {
                                    "": E.development.ios.homepage_continue_in_the_app
                                },
                                android: {
                                    "": E.development.android.homepage_continue_in_the_app
                                }
                            },
                            production: {
                                ios: {
                                    "": E.production.ios.homepage_continue_in_the_app
                                },
                                android: {
                                    "": E.production.android.homepage_continue_in_the_app
                                }
                            }
                        },
                        A = {
                            development: {
                                ios: {
                                    "": E.development.ios.homepage_top_banner
                                },
                                android: {
                                    "": E.development.android.homepage_top_banner
                                }
                            },
                            production: {
                                ios: {
                                    "": E.production.ios.homepage_top_banner
                                },
                                android: {
                                    "": E.production.android.homepage_top_banner
                                }
                            }
                        },
                        T = {
                            development: {
                                ios: {
                                    "": E.development.ios.homepage_nav_button,
                                    "/features/blur.html": E.development.ios.features_nav_button,
                                    "/features/collage": E.development.ios.features_nav_button,
                                    "/es/features/one-tap-enhance.html": E.development.ios.features_nav_button,
                                    "/pt/colagem/index.html": E.development.ios.features_nav_button,
                                    "/ru/collage": E.development.ios.features_nav_button,
                                    "/features/frames": E.development.ios.features_nav_button,
                                    "/features/crop": E.development.ios.features_nav_button,
                                    "/features/color-splash": E.development.ios.features_nav_button,
                                    "/es/features/montage.html": E.development.ios.features_nav_button,
                                    "/features/photo-stitch": E.development.ios.features_nav_button,
                                    "/design/mobile-wallpaper": E.development.ios.features_nav_button,
                                    "/how-to/blur-background": E.development.ios.features_nav_button,
                                    "/es/features/blur.html": E.development.ios.features_nav_button,
                                    "/es/features/crop.html": E.development.ios.features_nav_button,
                                    "/pt/features/blur.html": E.development.ios.features_nav_button,
                                    "/features/resize.html": E.development.ios.features_nav_button,
                                    "/features/text.html": E.development.ios.features_nav_button,
                                    "/features/photo-effects": E.development.ios.features_nav_button,
                                    "/ru/features/blur.html": E.development.ios.features_nav_button,
                                    "/es/collage": E.development.ios.features_nav_button,
                                    "/how-to/add-vintage-effects": E.development.ios.features_nav_button,
                                    "/how-to/make-photo-grid": E.development.ios.features_nav_button,
                                    "/pt/features/resize.html": E.development.ios.features_nav_button,
                                    "/pt/features/montage.html": E.development.ios.features_nav_button,
                                    "/features/poster.html": E.development.ios.features_nav_button,
                                    "banner.fotor.com": E.development.ios.features_nav_button,
                                    "/ru/features/one-tap-enhance.html": E.development.ios.features_nav_button,
                                    "/design": E.development.ios.hub_nav_button,
                                    "/photo-editor": E.development.ios.hub_nav_button,
                                    "/nft-creator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/zU",
                                        schema: "goart://"
                                    },
                                    "/features/goart.html": {
                                        link: "https://datasink-sa.fotor.com.cn/r/zU",
                                        schema: "goart://"
                                    },
                                    "/features/ai-art-generator": {
                                        link: E.development.ios.goart_ai_art_generator,
                                        schema: "goart://"
                                    },
                                    "/features/ai-face-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/nQ",
                                        schema: "goart://"
                                    },
                                    "/features/ai-image-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/1k",
                                        schema: "goart://"
                                    }
                                },
                                android: {
                                    "": E.development.android.homepage_nav_button,
                                    "/features/blur.html": E.development.android.features_nav_button,
                                    "/features/collage": E.development.android.features_nav_button,
                                    "/es/features/one-tap-enhance.html": E.development.android.features_nav_button,
                                    "/pt/colagem/index.html": E.development.android.features_nav_button,
                                    "/ru/collage": E.development.android.features_nav_button,
                                    "/features/frames": E.development.android.features_nav_button,
                                    "/features/crop": E.development.android.features_nav_button,
                                    "/features/color-splash": E.development.android.features_nav_button,
                                    "/es/features/montage.html": E.development.android.features_nav_button,
                                    "/features/photo-stitch": E.development.android.features_nav_button,
                                    "/design/mobile-wallpaper": E.development.android.features_nav_button,
                                    "/how-to/blur-background": E.development.android.features_nav_button,
                                    "/es/features/blur.html": E.development.android.features_nav_button,
                                    "/es/features/crop.html": E.development.android.features_nav_button,
                                    "/pt/features/blur.html": E.development.android.features_nav_button,
                                    "/features/resize.html": E.development.android.features_nav_button,
                                    "/features/text.html": E.development.android.features_nav_button,
                                    "/features/photo-effects": E.development.android.features_nav_button,
                                    "/ru/features/blur.html": E.development.android.features_nav_button,
                                    "/es/collage": E.development.android.features_nav_button,
                                    "/how-to/add-vintage-effects": E.development.android.features_nav_button,
                                    "/how-to/make-photo-grid": E.development.android.features_nav_button,
                                    "/pt/features/resize.html": E.development.android.features_nav_button,
                                    "/pt/features/montage.html": E.development.android.features_nav_button,
                                    "/features/poster.html": E.development.android.features_nav_button,
                                    "banner.fotor.com": E.development.android.features_nav_button,
                                    "/ru/features/one-tap-enhance.html": E.development.android.features_nav_button,
                                    "/design": E.development.android.hub_nav_button,
                                    "/photo-editor": E.development.android.hub_nav_button,
                                    "/nft-creator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/EU",
                                        schema: "goart://"
                                    },
                                    "/features/goart.html": {
                                        link: "https://datasink-sa.fotor.com.cn/r/EU",
                                        schema: "goart://"
                                    },
                                    "/features/ai-art-generator": {
                                        link: E.development.android.goart_ai_art_generator,
                                        schema: "goart://"
                                    },
                                    "/features/ai-face-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/qQ",
                                        schema: "goart://"
                                    },
                                    "/features/ai-image-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/3k",
                                        schema: "goart://"
                                    }
                                }
                            },
                            production: {
                                ios: {
                                    "": E.production.ios.homepage_nav_button,
                                    "/features/blur.html": E.production.ios.features_nav_button,
                                    "/features/collage": E.production.ios.features_nav_button,
                                    "/es/features/one-tap-enhance.html": E.production.ios.features_nav_button,
                                    "/pt/colagem/index.html": E.production.ios.features_nav_button,
                                    "/ru/collage": E.production.ios.features_nav_button,
                                    "/features/frames": E.production.ios.features_nav_button,
                                    "/features/crop": E.production.ios.features_nav_button,
                                    "/features/color-splash": E.production.ios.features_nav_button,
                                    "/es/features/montage.html": E.production.ios.features_nav_button,
                                    "/features/photo-stitch": E.production.ios.features_nav_button,
                                    "/design/mobile-wallpaper": E.production.ios.features_nav_button,
                                    "/how-to/blur-background": E.production.ios.features_nav_button,
                                    "/es/features/blur.html": E.production.ios.features_nav_button,
                                    "/es/features/crop.html": E.production.ios.features_nav_button,
                                    "/pt/features/blur.html": E.production.ios.features_nav_button,
                                    "/features/resize.html": E.production.ios.features_nav_button,
                                    "/features/text.html": E.production.ios.features_nav_button,
                                    "/features/photo-effects": E.production.ios.features_nav_button,
                                    "/ru/features/blur.html": E.production.ios.features_nav_button,
                                    "/es/collage": E.production.ios.features_nav_button,
                                    "/how-to/add-vintage-effects": E.production.ios.features_nav_button,
                                    "/how-to/make-photo-grid": E.production.ios.features_nav_button,
                                    "/pt/features/resize.html": E.production.ios.features_nav_button,
                                    "/pt/features/montage.html": E.production.ios.features_nav_button,
                                    "/features/poster.html": E.production.ios.features_nav_button,
                                    "banner.fotor.com": E.production.ios.features_nav_button,
                                    "/ru/features/one-tap-enhance.html": E.production.ios.features_nav_button,
                                    "/design": E.production.ios.hub_nav_button,
                                    "/photo-editor": E.production.ios.hub_nav_button,
                                    "/nft-creator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/zU",
                                        schema: "goart://"
                                    },
                                    "/features/goart.html": {
                                        link: "https://datasink-sa.fotor.com.cn/r/zU",
                                        schema: "goart://"
                                    },
                                    "/features/ai-art-generator": {
                                        link: E.production.ios.goart_ai_art_generator,
                                        schema: "goart://"
                                    },
                                    "/features/ai-face-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/nQ",
                                        schema: "goart://"
                                    },
                                    "/features/ai-image-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/1k",
                                        schema: "goart://"
                                    },
                                    "/images/create": {
                                        link: "https://datasink-sa.fotor.com.cn/r/hS",
                                        schema: "goart://"
                                    },
                                    "/images/inspiration": {
                                        link: "https://datasink-sa.fotor.com.cn/r/hS",
                                        schema: "goart://"
                                    },
                                    "/images/my-creations": {
                                        link: "https://datasink-sa.fotor.com.cn/r/hS",
                                        schema: "goart://"
                                    },
                                    "/features/photo-to-cartoon": E.production.ios.features_nav_photo_to_cartoon,
                                    "/features/photo-to-anime": E.production.ios.features_nav_photo_to_anime
                                },
                                android: {
                                    "": E.production.android.homepage_nav_button,
                                    "/features/blur.html": E.production.android.features_nav_button,
                                    "/features/collage": E.production.android.features_nav_button,
                                    "/es/features/one-tap-enhance.html": E.production.android.features_nav_button,
                                    "/pt/colagem/index.html": E.production.android.features_nav_button,
                                    "/ru/collage": E.production.android.features_nav_button,
                                    "/features/frames": E.production.android.features_nav_button,
                                    "/features/crop": E.production.android.features_nav_button,
                                    "/features/color-splash": E.production.android.features_nav_button,
                                    "/es/features/montage.html": E.production.android.features_nav_button,
                                    "/features/photo-stitch": E.production.android.features_nav_button,
                                    "/design/mobile-wallpaper": E.production.android.features_nav_button,
                                    "/how-to/blur-background": E.production.android.features_nav_button,
                                    "/es/features/blur.html": E.production.android.features_nav_button,
                                    "/es/features/crop.html": E.production.android.features_nav_button,
                                    "/pt/features/blur.html": E.production.android.features_nav_button,
                                    "/features/resize.html": E.production.android.features_nav_button,
                                    "/features/text.html": E.production.android.features_nav_button,
                                    "/features/photo-effects": E.production.android.features_nav_button,
                                    "/ru/features/blur.html": E.production.android.features_nav_button,
                                    "/es/collage": E.production.android.features_nav_button,
                                    "/how-to/add-vintage-effects": E.production.android.features_nav_button,
                                    "/how-to/make-photo-grid": E.production.android.features_nav_button,
                                    "/pt/features/resize.html": E.production.android.features_nav_button,
                                    "/pt/features/montage.html": E.production.android.features_nav_button,
                                    "/features/poster.html": E.production.android.features_nav_button,
                                    "banner.fotor.com": E.production.android.features_nav_button,
                                    "/ru/features/one-tap-enhance.html": E.production.android.features_nav_button,
                                    "/design": E.production.android.hub_nav_button,
                                    "/photo-editor": E.production.android.hub_nav_button,
                                    "/nft-creator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/EU",
                                        schema: "goart://"
                                    },
                                    "/features/goart.html": {
                                        link: "https://datasink-sa.fotor.com.cn/r/EU",
                                        schema: "goart://"
                                    },
                                    "/features/ai-art-generator": {
                                        link: E.production.android.goart_ai_art_generator,
                                        schema: "goart://"
                                    },
                                    "/features/ai-face-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/qQ",
                                        schema: "goart://"
                                    },
                                    "/features/ai-image-generator": {
                                        link: "https://datasink-sa.fotor.com.cn/r/3k",
                                        schema: "goart://"
                                    },
                                    "/images/create": {
                                        link: "https://datasink-sa.fotor.com.cn/r/dS",
                                        schema: "goart://"
                                    },
                                    "/images/inspiration": {
                                        link: "https://datasink-sa.fotor.com.cn/r/dS",
                                        schema: "goart://"
                                    },
                                    "/images/my-creations": {
                                        link: "https://datasink-sa.fotor.com.cn/r/dS",
                                        schema: "goart://"
                                    },
                                    "/features/photo-to-cartoon": E.production.android.features_nav_photo_to_cartoon,
                                    "/features/photo-to-anime": E.production.android.features_nav_photo_to_anime
                                }
                            }
                        };
                    T.staging = T.development, T.preRelease = T.production;
                    var C = T;
                    A.staging = A.development, A.preRelease = A.production, S.staging = S.development, S.preRelease = S.production, x.staging = x.development, x.preRelease = x.production;
                    var j = {
                        "/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                        "/features/collage": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                        "/ru/collage/": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                        "/pt/colagem/index.html": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                        "/es/collage/": "fotor://pictureTools?type=collage&subType=CLASSIC&channel=web",
                        "/how-to/remove-unwanted-objects/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/features/ai-image-extender/": "fotor://pictureTools?type=editor&subType=AIExtender&channel=web",
                        "/es/features/ai-image-extender/": "fotor://pictureTools?type=editor&subType=AIExtender&channel=web",
                        "/features/background-remover/upload": "fotor://mattingFunction?type=3&theme=background_remover&channel=web",
                        "/features/backgrounds.html": "fotor://mattingFunction?type=3&theme=background_remover&channel=web",
                        "/features/background-remover": "fotor://mattingFunction?type=3&theme=background_remover&channel=web",
                        "/id/features/backgrounds.html": "fotor://mattingFunction?type=3&theme=background_remover&channel=web",
                        "/features/one-tap-enhance": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                        "/avatar/create": "fotor://AIAvatars?channel=web",
                        "/photo-editor-app/editor/ai/ai-enlarger": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                        "/features/ai-portrait-generator/": "fotor://AIAvatars?channel=web",
                        "/features/ai-headshot-generator/": "fotor://AIAvatars?channel=web",
                        "/features/ai-profile-picture-generator/": "fotor://AI_Image_From_Image?channel=web",
                        "/ru/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                        "/es/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                        "/fr/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                        "/it/features/overlay-images/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                        "/blog/how-to-overlay-photos-on-iphone/": "fotor://pictureTools?type=editor&subType=Overlay&channel=web",
                        "/ru/how-to/remove-unwanted-objects/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/id/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/id/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/pt/features/remover-marca-d-agua/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/remove-object-from-photo-app/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/features/remove-glare-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/how-to-remove-the-tiktok-watermark/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/pt/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/es/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/ru/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/ru/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/es/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/ru/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/ru/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/es/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/id/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/pt/features/remove-object-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/remove-instagram-watermark/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/tw/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/how-to-remove-a-person-from-a-photo-on-iphone/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/fr/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/fr/features/remove-text-from-image/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/fr/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/remove-people-from-photos-app/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/how-to-remove-an-object-in-photoshop/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/de/features/remove-people-from-photos/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/de/features/remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/how-to-remove-date-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/how-to-remove-watermark-from-photo/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/how-to-remove-people-from-pictures/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/blog/best-watermark-remover-app/": "fotor://pictureTools?type=editor&subType=ObjectRemover&channel=web",
                        "/fr/features/ai-image-extender/": "fotor://pictureTools?type=editor&subType=AIExtender&channel=web",
                        "/id/features/photo-enhancer/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/ru/features/one-tap-enhance.html": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/es/features/one-tap-enhance.html": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/pt/features/one-tap-enhance.html": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/blog/best-photo-enhancer-apps/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/de/features/photo-enhancer/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/blog/how-to-enhance-photos-in-photoshop/": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/jp/features/one-tap-enhance": "fotor://pictureTools?type=editor&subType=TonyEnhance&channel=web",
                        "/id/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                        "/es/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                        "/de/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                        "/tw/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                        "/jp/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                        "/it/features/unblur-image/": "fotor://pictureTools?type=editor&subType=face_unblur&channel=web",
                        "/features/ai-avatar-generator/": "fotor://AIAvatars?channel=web",
                        "/avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/es/avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/pt/avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/avatar/create/": "fotor://AIAvatars?channel=web",
                        "/avatar/creation": "fotor://AIAvatars?channel=web",
                        "/fr/avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/features/3d-avatar-creator/": "fotor://AIAvatars?channel=web",
                        "/de/avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/es/features/3d-avatar-creator/": "fotor://AIAvatars?channel=web",
                        "/cartoon-avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/features/realistic-avatar-creator/": "fotor://AIAvatars?channel=web",
                        "/features/anime-avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/features/gaming-avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/blog/best-avatar-maker/": "fotor://AIAvatars?channel=web",
                        "/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                        "/es/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                        "/pt/features/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                        "/fr/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                        "/de/features/image-enlarger/": "fotor://pictureTools?type=editor&subType=SuperResolution&channel=web",
                        "/blog/best-old-photo-restoration-apps/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/blog/restore-old-photo/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/blog/how-to-restore-old-photos-in-photoshop/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/es/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/pt/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/id/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/ru/features/photo-restoration/": "fotor://pictureTools?type=editor&subType=old_photo_restorer&channel=web",
                        "/features/ai-sketch/": "fotor://AISketch?channel=web",
                        "/es/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                        "/pt/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                        "/fr/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                        "/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                        "/id/features/photo-to-sketch/": "fotor://AISketch?channel=web",
                        "/blog/photo-to-sketch-app/": "fotor://AISketch?channel=web",
                        "/features/ai-face-generator/": "fotor://AI_Image_From_Image?channel=web",
                        "/features/ai-image-generator/": "fotor://AI_Image_Generator?channel=web",
                        "/images/create": "fotor://?channel=web",
                        "/images/inspiration": "fotor://?channel=web",
                        "/images/my-creations": "fotor://?channel=web",
                        "/features/photo-to-cartoon/": "fotor://AI_Image_From_Image?channel=web",
                        "/features/photo-to-anime/": "fotor://AI_Image_From_Image?channel=web"
                    };
                    j["/features/blur"] = j["/features/blur.html"];
                    var O = function(e, t, o) {
                        var r, n = "";
                        return e && ("string" != typeof e && e[o] ? n = (null == e || null === (r = e[o]) || void 0 === r ? void 0 : r[t]) || n : "deep_link" === t && (n = e)), n
                    };

                    function N(e, t) {
                        if (e && ("string" == typeof e || e[t])) return {
                            deep_link: O(e, "deep_link", t),
                            creative: O(e, "creative", t),
                            theme: O(e, "theme", t),
                            channel: O(e, "channel", t),
                            campaign: O(e, "campaign", t),
                            redirect_ios: O(e, "redirect_ios", t),
                            redirect_android: O(e, "redirect_android", t)
                        }
                    }
                    var I = {
                        development: {
                            android: "https://app.adjust.com/sp92lsw",
                            ios: "https://app.adjust.com/filvaq8"
                        },
                        production: {
                            android: "https://app.adjust.com/5t0c3sp",
                            ios: "https://app.adjust.com/mh8zuw6"
                        }
                    };
                    I.staging = I.development, I.preRelease = I.production;
                    var M = I.production;

                    function P(e) {
                        return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function D() {
                        D = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == P(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function R(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, r)
                        }
                        return o
                    }

                    function U(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? R(Object(o), !0).forEach((function(t) {
                                H(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : R(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    function H(e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }

                    function F(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function z(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var r = t[o];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    const B = new(function() {
                        function e() {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e)
                        }
                        var t, o, r, n;
                        return t = e, (o = [{
                            key: "_addSensorPv",
                            value: (r = D().mark((function e(t) {
                                var o, r;
                                return D().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            o = t.action, r = t.label;
                                        case 1:
                                            if (window.sensors) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, new Promise((function(e) {
                                                return setTimeout(e, 200)
                                            }));
                                        case 4:
                                            e.next = 1;
                                            break;
                                        case 6:
                                            window.sensors.track(o, U({}, r));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), n = function() {
                                var e = this,
                                    t = arguments;
                                return new Promise((function(o, n) {
                                    var a = r.apply(e, t);

                                    function i(e) {
                                        F(a, o, n, i, s, "next", e)
                                    }

                                    function s(e) {
                                        F(a, o, n, i, s, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            }, function(e) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "userMenu",
                            value: function(e, t) {
                                this._addSensorPv({
                                    action: "fotor_web$click_bundle$header_user_info",
                                    label: {
                                        position: e,
                                        project_type: t
                                    }
                                })
                            }
                        }, {
                            key: "headerMenu",
                            value: function(e, t) {
                                this._addSensorPv({
                                    action: "fotor_web$click_up$project_top_feature",
                                    label: {
                                        position: e,
                                        project_type: t
                                    }
                                })
                            }
                        }, {
                            key: "templateSearch",
                            value: function(e) {
                                var t = e.key_word,
                                    o = e.word_type;
                                this._addSensorPv({
                                    action: "fotor_ web$search$content",
                                    label: {
                                        location: "template_center",
                                        search_type: "template",
                                        key_word: t,
                                        word_type: o
                                    }
                                })
                            }
                        }, {
                            key: "sendTracker",
                            value: function(e, t) {
                                this._addSensorPv({
                                    action: e,
                                    label: t
                                })
                            }
                        }]) && z(t.prototype, o), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e
                    }());

                    function Q(e) {
                        B.sendTracker("fotor_web$event$open_app_visit", e)
                    }

                    function G(e, t) {
                        var o, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "production",
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : X(),
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "fotor://",
                            i = W(t, n);
                        if (i) return Q({
                            position: t,
                            url: q(),
                            type: "adjust",
                            key: "adjust"
                        }), $(i, n, ""), i;
                        var s, c = null == e || null === (o = e[0]) || void 0 === o ? void 0 : o.appSchema;
                        if (c) {
                            var u = V(t, c);
                            return Q({
                                position: t,
                                url: q(),
                                type: "adjust",
                                key: "adjust"
                            }), $(u, n, ""), u
                        }
                        var l = K(t, r, n),
                            p = Object.prototype.toString.call(l).toLowerCase();
                        return "[object object]" === p ? (s = l.link, a = l.schema) : s = l, s ? (Q({
                            position: t,
                            url: q(),
                            type: "sa",
                            key: s.slice(-2)
                        }), $(s, n, a), s) : void 0
                    }

                    function W(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X(),
                            o = q(),
                            r = Y(o, t, e);
                        if (r) {
                            var n = j[o];
                            k()("".concat(n, "&url=").concat(window.location.host + window.location.pathname))
                        }
                        return r
                    }

                    function J(e, t, o) {
                        return e + (-1 !== e.indexOf("?") ? "&" : "?") + "url=".concat(t, "&adgroup=").concat(o)
                    }
                    var Y = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X(),
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "homepage_nav_button",
                            r = j[e] || j[e + "/"];
                        if (r) {
                            var n = N(r, t.isiOS ? "ios" : "android");
                            if (n) {
                                var a = n.campaign || e || "/",
                                    i = n.deep_link;
                                return i && (i = J(i, a, o)), Z({
                                    campaign: a,
                                    theme: n.theme,
                                    channel: n.channel,
                                    adgroup: o,
                                    deep_link: i,
                                    creative: n.creative,
                                    redirect_ios: n.redirect_ios,
                                    redirect_android: n.redirect_android
                                }, t)
                            }
                        }
                        return ""
                    };

                    function V(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fotor://",
                            o = q(),
                            r = o || "/";
                        return Z({
                            campaign: r,
                            adgroup: e,
                            deep_link: J(t, r, e)
                        })
                    }
                    var Z = function(e) {
                        var t = e.campaign,
                            o = void 0 === t ? "" : t,
                            r = e.adgroup,
                            n = void 0 === r ? "" : r,
                            a = e.creative,
                            i = void 0 === a ? "" : a,
                            s = e.deep_link,
                            c = void 0 === s ? "" : s,
                            u = e.redirect_ios,
                            l = void 0 === u ? "" : u,
                            p = e.redirect_android,
                            f = void 0 === p ? "" : p,
                            d = e.theme,
                            m = void 0 === d ? "" : d,
                            h = e.channel,
                            g = void 0 === h ? "" : h,
                            w = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X(),
                            v = w.isiOS ? "ios" : "android",
                            _ = M[v],
                            y = [];
                        return o && y.push("campaign=".concat(encodeURIComponent(o))), n && y.push("adgroup=".concat(encodeURIComponent(n))), i && y.push("creative=".concat(encodeURIComponent(i))), m && y.push("theme=".concat(encodeURIComponent(m))), g && y.push("channel=".concat(encodeURIComponent(g))), c && y.push("deep_link=".concat(encodeURIComponent(c))), l && y.push("redirect_ios=".concat(encodeURIComponent(l))), f && y.push("redirect_android=".concat(encodeURIComponent(f))), _ + "?" + y.join("&")
                    };

                    function q() {
                        var e = location.pathname;
                        return "/" === e[e.length - 1] && (e = e.substring(0, e.length - 1)), e
                    }

                    function X() {
                        if ("undefined" != typeof window) {
                            var e = window.navigator.userAgent,
                                t = window.navigator.userAgent.toLowerCase(),
                                o = /(?:Windows Phone)/.test(e),
                                r = /(?:SymbianOS)/.test(e) || o,
                                n = /(?:Android)/.test(e),
                                a = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
                                i = /(?:Firefox)/.test(e),
                                s = /(?:Chrome|CriOS)/.test(e),
                                c = /(?:iPad|PlayBook)/.test(e) || n && !/(?:Mobile)/.test(e) || i && /(?:Tablet)/.test(e),
                                u = /(?:iPhone)/.test(e) && !c;
                            return {
                                isiOS: a,
                                isTablet: c,
                                isPhone: u,
                                isAndroid: n,
                                isPc: !u && !n && !r,
                                isIE: !!t.match(/msie ([\d.]+)/) || !!t.match(/rv:([\d.]+)\) like gecko/),
                                isSafari: !!t.match(/version\/([\d.]+).*safari/),
                                isChrome: s,
                                isWechat: e.match(/MicroMessenger/i),
                                isMobile: !!e.match(/AppleWebKit.*Mobile.*/)
                            }
                        }
                        return {}
                    }

                    function K(e, t) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : X(),
                            r = q(),
                            n = location.hostname,
                            a = o.isiOS ? "ios" : "android";
                        if ("homepage_nav_button" === e) {
                            var i = C[t][a];
                            return i.hasOwnProperty(n) ? i[n] : i.hasOwnProperty(r) ? i[r] : L[a].general_nav_button
                        }
                        return L[a].general_all
                    }

                    function $(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X(),
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "fotor://",
                            r = t.isAndroid,
                            n = t.isiOS;

                        function a() {
                            location.assign(e)
                        }
                        n ? a() : r ? (o && location.assign(o), a()) : a()
                    }
                    var ee = r(365),
                        te = r.n(ee);

                    function oe(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, r)
                        }
                        return o
                    }

                    function re(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? oe(Object(o), !0).forEach((function(t) {
                                ne(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : oe(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    function ne(e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }
                    var ae = te().create({
                        timeout: 6e4,
                        baseURL: "https://www.fotor.com",
                        withCredentials: !0
                    });
                    ae.interceptors.request.use((function(e) {
                        return e.headers["Content-Type"] = e.headers["Content-Type"] ? e.headers["Content-Type"] : "application/x-www-form-urlencoded", e.headers["x-app-id"] = "app-fotor-web", e
                    }), (function(e) {
                        return Promise.reject(e)
                    })), ae.interceptors.response.use((function(e) {
                        return 200 === e.status ? e.data : {
                            msg: e.data.msg
                        }
                    }), (function(e) {
                        if (e.response) {
                            switch (e.response.status) {
                                case 400:
                                    e.message = "\u8bf7\u6c42\u9519\u8bef(400)";
                                    break;
                                case 401:
                                    e.message = "\u672a\u6388\u6743\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55(401)";
                                    break;
                                case 403:
                                    e.message = "\u62d2\u7edd\u8bbf\u95ee(403)";
                                    break;
                                case 404:
                                    e.message = "\u8bf7\u6c42\u51fa\u9519(404)";
                                    break;
                                case 408:
                                    e.message = "\u8bf7\u6c42\u8d85\u65f6(408)";
                                    break;
                                case 500:
                                    e.message = "\u670d\u52a1\u5668\u9519\u8bef(500)";
                                    break;
                                case 501:
                                    e.message = "\u670d\u52a1\u672a\u5b9e\u73b0(501)";
                                    break;
                                case 502:
                                    e.message = "\u7f51\u7edc\u9519\u8bef(502)";
                                    break;
                                case 503:
                                    e.message = "\u670d\u52a1\u4e0d\u53ef\u7528(503)";
                                    break;
                                case 504:
                                    e.message = "\u7f51\u7edc\u8d85\u65f6(504)";
                                    break;
                                case 505:
                                    e.message = "HTTP\u7248\u672c\u4e0d\u53d7\u652f\u6301(505)";
                                    break;
                                default:
                                    e.message = "\u8fde\u63a5\u51fa\u9519(".concat(e.response.status, ")!")
                            }
                            return {
                                msg: e.message
                            }
                        }
                        return {
                            msg: "\u8bf7\u6c42\u8d85\u65f6, \u8bf7\u5237\u65b0\u91cd\u8bd5"
                        }
                    }));
                    var ie = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return new Promise((function(r, n) {
                                ae(re({
                                    method: "get",
                                    url: e,
                                    params: t
                                }, o)).then((function(e) {
                                    r(e)
                                })).catch((function(e) {
                                    n(e)
                                }))
                            }))
                        },
                        se = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return new Promise((function(r, n) {
                                ae(re({
                                    method: "post",
                                    url: e,
                                    data: t
                                }, o)).then((function(e) {
                                    r(e)
                                })).catch((function(e) {
                                    n(e)
                                }))
                            }))
                        };

                    function ce(e) {
                        return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function ue() {
                        ue = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == ce(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function le(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function pe(e) {
                        return function() {
                            var t = this,
                                o = arguments;
                            return new Promise((function(r, n) {
                                var a = e.apply(t, o);

                                function i(e) {
                                    le(a, r, n, i, s, "next", e)
                                }

                                function s(e) {
                                    le(a, r, n, i, s, "throw", e)
                                }
                                i(void 0)
                            }))
                        }
                    }

                    function fe() {
                        var e = "";
                        return window && (e = "localhost.fotor.com.cn:8080" === window.location.host ? "https://test-www.fotor.com.cn" : -1 === window.location.host.indexOf("test") ? "https://www.fotor.com.cn" : "https://test-www.fotor.com.cn"), e
                    }

                    function de() {
                        return (de = pe(ue().mark((function e() {
                            var t;
                            return ue().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!window) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 3, se("".concat(fe(), "/message/getMsgUserReadflag"), {}).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        if (!(t = e.sent)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", t.data);
                                    case 8:
                                        return e.abrupt("return", []);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    const me = {
                        development: {
                            baseUrl: "https://test-www.fotor.com",
                            loginJsUrl: "https://test-pub-static.fotor.com/static/web/lib/account/bundle.js",
                            fotorBodyJsUrl: "https://test-static.fotor.com.cn/static/web/fotorCommon/v5/FotorCommonBody.beta.9165bc77139a15c65d02.1614688824285.js",
                            fotorHeadJsUrl: "https://test-static.fotor.com.cn/static/web/fotorCommon/v5/FotorCommonHead.beta.fbe5dc216ed24e7b370f.1614688824285.js",
                            signalJsUrl: "https://test-static.fotor.com.cn/static/web/share/js/libs/signals.modified.min.js",
                            paymentUrl: "https://test-pub-static.fotor.com/static/web/lib/payment/bundle.js",
                            publicUrl: "https://test-pub-static.fotor.com/static/web/lib/fotor-bundle"
                        },
                        production: {
                            baseUrl: "https://www.fotor.com",
                            loginJsUrl: "https://pub-static.fotor.com/static/web/lib/account/bundle.js",
                            fotorBodyJsUrl: "https://static.fotor.com.cn/static/web/fotorCommon/v5/FotorCommonBody.5b08659fa66c48f2b884.1614688843992.js",
                            fotorHeadJsUrl: "https://static.fotor.com.cn/static/web/fotorCommon/v5/FotorCommonHead.2f7b67a233b46ec9bc49.1614688843992.js",
                            signalJsUrl: "https://static.fotor.com.cn/static/web/share/js/libs/signals.modified.min.js",
                            paymentUrl: "https://pub-static.fotor.com/static/web/lib/payment/bundle.js",
                            publicUrl: "https://pub-static.fotor.com/static/web/lib/fotor-bundle"
                        },
                        ulinkJsUrl: "https://g.alicdn.com/jssdk/u-link/index.min.js",
                        jqJsUrl: "https://static.fotor.com.cn/static/web/share/js/libs/jquery-3.1.1.min.js"
                    };

                    function he(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, r)
                        }
                        return o
                    }

                    function ge(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? he(Object(o), !0).forEach((function(t) {
                                we(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : he(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    function we(e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }

                    function ve(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var r, n, a = [],
                                    i = !0,
                                    s = !1;
                                try {
                                    for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return _e(e, t);
                                var o = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _e(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function _e(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }

                    function ye(e, t) {
                        var o = document.createElement("script");
                        o.src = e, o.onload = function() {
                            return t(null, o)
                        }, o.onerror = function() {
                            return t(new Error("Script load error for ".concat(e)))
                        }, document.head.append(o)
                    }
                    const be = function(t) {
                        var o = t.env,
                            r = (t.showLoginType, t.callback),
                            n = t.loginSensorsData,
                            a = void 0 === n ? {} : n,
                            i = t.signUpSensorData,
                            s = void 0 === i ? {} : i,
                            c = (t.customUserMenuData, t.onUnReadNum),
                            u = t.projectType,
                            l = ve((0, e.useState)(null), 2),
                            p = l[0],
                            f = l[1],
                            d = ve((0, e.useState)(0), 2),
                            m = d[0],
                            h = d[1],
                            g = ve((0, e.useState)(0), 2),
                            w = g[0],
                            v = g[1],
                            _ = ve((0, e.useState)(""), 2),
                            y = _[0],
                            b = _[1],
                            k = ve((0, e.useState)(!1), 2),
                            E = k[0],
                            L = k[1];
                        return (0, e.useEffect)((function() {
                            var e, t = (e = ye, function() {
                                for (var t = this, o = arguments.length, r = new Array(o), n = 0; n < o; n++) r[n] = arguments[n];
                                return new Promise((function(o, n) {
                                    r.push((function(e, t) {
                                        e ? n(e) : o(t)
                                    })), e.call.apply(e, [t].concat(r))
                                }))
                            });
                            return Promise.all([t(me.jqJsUrl), t(me[o].signalJsUrl), t(me[o].fotorHeadJsUrl), t(me[o].fotorBodyJsUrl)]).then((function() {
                                    var e = window.FotorUser,
                                        t = window.FotorCommon.UserEvent;
                                    window.FotorUser.checkLoginState(), f(window.FotorUser.getLoginedUser()), e.on(t.LOGIN_CHECK, (function() {
                                        console.log("UserEvent.LOGIN_CHECK", window.FotorUser.getLoginedUser()), f(window.FotorUser.getLoginedUser()), r && r({
                                            type: "login",
                                            res: window.FotorUser.getLoginedUser()
                                        })
                                    })), e.on(t.LOGIN_FAIL, (function() {
                                        console.log("UserEvent.LOGIN_FAIL")
                                    })), e.on(t.REGISTER_SUCCESS, (function() {
                                        console.log("UserEvent.REGISTER_SUCCESS"), f(window.FotorUser.getLoginedUser()), r && r({
                                            type: "register",
                                            res: window.FotorUser.getLoginedUser()
                                        })
                                    })), e.on(t.LOGIN_PANEL_CLOSE, (function() {}))
                                })),
                                function() {
                                    window.FotorUser && (window.FotorUser.off(window.FotorCommon.UserEvent.LOGIN_CHECK), window.FotorUser.off(window.FotorCommon.UserEvent.REGISTER_SUCCESS), window.FotorUser.off(window.FotorCommon.UserEvent.LOGIN_FAIL))
                                }
                        }), []), (0, e.useEffect)((function() {
                            h(p ? 1 : 2), p && function() {
                                return de.apply(this, arguments)
                            }().then((function(e) {
                                e && e.unreadNum && v(e.unreadNum)
                            }))
                        }), [p]), (0, e.useEffect)((function() {
                            c && c(w)
                        }), [w]), {
                            userInfo: p,
                            showLoginPopup: function() {
                                window.FotorUser && window.FotorUser.show(null, !0, null, {}, ge(ge({}, a), {}, {
                                    project_type: u
                                }))
                            },
                            unReadNum: w,
                            isLogin: m,
                            vipStatus: y,
                            logout: function() {
                                window.FotorUser && (window.FotorUser.logOut((function() {
                                    h(2), f(null), b(""), r && r({
                                        type: "logout",
                                        res: null
                                    })
                                })), L(!1))
                            },
                            showMenu: E,
                            setShowMenu: L,
                            showSignUpPopup: function() {
                                window.FotorUser && window.FotorUser.show(null, !1, null, {}, ge(ge({}, s), {}, {
                                    project_type: u
                                }))
                            }
                        }
                    };
                    var ke, Ee, Le = function(e) {
                        var t = ("; " + document.cookie).split("; " + e + "=");
                        return 2 === t.length ? t.pop().split(";").shift() : "locale" === e ? Ae() : void 0
                    };

                    function xe(e, t) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2592e6,
                            r = window.document.location.hostname;
                        "www.fotor.com" !== r && "test-www.fotor.com" !== r || (r = ".fotor.com");
                        var n = new Date;
                        n.setTime(n.getTime() + o), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString() + ";path=/;domain=" + r
                    }! function(e) {
                        e.ZH_CN = "zh_CN", e.ZH_TW = "zh_TW", e.EN_US = "en_US", e.ES_ES = "es_ES", e.PT_BR = "pt_BR", e.RU_RU = "ru_RU", e.FR_FR = "fr_FR", e.DE_DE = "de_DE", e.JA_JP = "ja_JP"
                    }(ke || (ke = {})),
                    function(e) {
                        e.en_US = "en", e.es_ES = "es", e.pt_BR = "pt", e.ru_RU = "ru", e.fr_FR = "fr", e.de_DE = "de", e.zh_CN = "cn", e.zh_TW = "tw", e.ja_JP = "jp", e.id_ID = "id"
                    }(Ee || (Ee = {}));
                    var Se = function() {
                            return Le("locale") || Ae()
                        },
                        Ae = function() {
                            var e = (navigator.language || "").toLocaleLowerCase();
                            if (/^es/.test(e)) return ke.EN_US;
                            switch (e) {
                                case "ja":
                                    return ke.JA_JP;
                                case "zh-cn":
                                case "zh":
                                    return ke.ZH_CN;
                                case "zh-tw":
                                    return ke.ZH_TW;
                                case "en":
                                case "en-us":
                                case "es":
                                default:
                                    return ke.EN_US;
                                case "pt":
                                case "pt-br":
                                case "pt-pt":
                                    return ke.PT_BR;
                                case "fr":
                                case "fr-fr":
                                case "fr-ca":
                                case "fr-ch":
                                    return ke.FR_FR;
                                case "de":
                                case "de-at":
                                case "de-de":
                                case "de-li":
                                case "de-ch":
                                    return ke.DE_DE;
                                case "ru":
                                    return ke.RU_RU
                            }
                        };
                    class Te {
                        constructor() {
                            this.storage = window.localStorage, Object.keys(window.localStorage).map((e => {
                                ["setItem", "getItem", "removeItem", "clear", "key"].includes(e) || (this[e] = window.localStorage.getItem(e))
                            })), Object.defineProperty(window, "localStorage", {
                                value: this,
                                writable: !0
                            }), this.reWrite = !0
                        }
                        setItem(e, t) {
                            const o = new Event("localStorage.setItem");
                            o.key = e, o.value = t, window.dispatchEvent(o), this.storage.setItem(e, t)
                        }
                        getItem(e) {
                            const t = new Event("localStorage.getItem");
                            return t.key = e, window.dispatchEvent(t), this.storage.getItem(e)
                        }
                        removeItem(e) {
                            const t = new Event("localStorage.removeItem");
                            return t.key = e, window.dispatchEvent(t), this.storage.removeItem(e)
                        }
                        clear() {
                            const e = new Event("localStorage.clear");
                            return window.dispatchEvent(e), this.storage.clear()
                        }
                        key(e) {
                            const t = new Event("localStorage.key");
                            return t.key = key, window.dispatchEvent(t), this.storage.key(e)
                        }
                    }

                    function Ce(e) {
                        return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function je() {
                        je = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == Ce(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function Oe(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function Ne(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Pe(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || Me(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Ie(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var r, n, a = [],
                                    i = !0,
                                    s = !1;
                                try {
                                    for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, t) || Me(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Me(e, t) {
                        if (e) {
                            if ("string" == typeof e) return Pe(e, t);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Pe(e, t) : void 0
                        }
                    }

                    function Pe(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }
                    "undefined" != typeof window && function() {
                        let e;
                        e = window.localStorage.reWrite ? window.localStorage : new Te
                    }();
                    const De = function(t) {
                        var o = t.env,
                            r = t.loginSensorsData,
                            n = void 0 === r ? [] : r,
                            a = t.signUpSensorData,
                            i = void 0 === a ? [] : a,
                            s = t.projectType,
                            c = t.callback,
                            u = t.watchUser,
                            l = Ie((0, e.useState)(null), 2),
                            p = l[0],
                            f = l[1],
                            d = Ie((0, e.useState)(0), 2),
                            m = d[0],
                            h = d[1],
                            g = Ie((0, e.useState)(0), 2),
                            w = g[0],
                            v = g[1],
                            _ = Ie((0, e.useState)(""), 2),
                            y = _[0],
                            b = _[1],
                            k = Ie((0, e.useState)(!1), 2),
                            E = k[0],
                            L = k[1],
                            x = function(e) {
                                f(e), h(1), S((function() {
                                    window.login.FTUserMessage().then((function(e) {
                                        e.data && v(e.data)
                                    })), window.login.FTIsVIP().then((function(e) {
                                        e.data.vipStatus ? b(e.data.vipStatus) : b("")
                                    }))
                                }))
                            },
                            S = function(e) {
                                if (window.login) e && e();
                                else if (window) {
                                    var t = document.createElement("script");
                                    t.type = "text/javascript", t.src = me[o].loginJsUrl, document.head.appendChild(t), t.onload = function() {
                                        e && e()
                                    }
                                }
                            },
                            A = function(e) {
                                var t = i;
                                s && (t[0] ? t[0].project_type = s : t[0] = {
                                    project_type: s
                                }), S((function() {
                                    var o;
                                    (o = window.login).showLogin.apply(o, ["signUp", function(t) {
                                        [0, 1, 2, 3, 5, 6].includes(t.code) ? h(1) : h(2), e ? e && e({
                                            type: "login",
                                            res: t
                                        }) : c && c({
                                            type: "login",
                                            res: t
                                        })
                                    }, ""].concat(Ne(t)))
                                }))
                            },
                            T = function(e) {
                                if ("fotor_common_user_Info" === e.key && "[object Object]" === Object.prototype.toString.call(JSON.parse(e.value)) && e.value !== JSON.stringify(p)) {
                                    var t = JSON.parse(e.value);
                                    x(t)
                                }
                            },
                            C = function(e) {
                                "fotor_common_user_Info" === e.key && h(2)
                            },
                            j = function() {
                                var e = Le("register_inviter");
                                if (e) {
                                    var t = JSON.parse(decodeURIComponent(e));
                                    0 === t.total && S((function() {
                                        window.login.FTGetLoginState().then((function(e) {
                                            "000" !== e.code ? (t.total = 1, A(), xe("register_inviter", JSON.stringify(t))) : e && e.data && e.data.fotorToken && (L(!0), setTimeout((function() {
                                                L(!1)
                                            }), 3500), xe("register_inviter", ""))
                                        }))
                                    }))
                                }
                            };
                        return (0, e.useEffect)((function() {
                            var e;
                            (e = je().mark((function e() {
                                return je().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            localStorage.getItem("fotor_common_user_Info") && "[object Object]" === Object.prototype.toString.call(JSON.parse(localStorage.getItem("fotor_common_user_Info"))) ? x(JSON.parse(localStorage.getItem("fotor_common_user_Info"))) : h(2), j();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    o = arguments;
                                return new Promise((function(r, n) {
                                    var a = e.apply(t, o);

                                    function i(e) {
                                        Oe(a, r, n, i, s, "next", e)
                                    }

                                    function s(e) {
                                        Oe(a, r, n, i, s, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            })()
                        }), []), (0, e.useEffect)((function() {
                            return window.addEventListener("localStorage.setItem", T), window.addEventListener("localStorage.removeItem", C),
                                function() {
                                    window.removeEventListener("localStorage.setItem", T), window.removeEventListener("localStorage.removeItem", C)
                                }
                        }), [p]), (0, e.useEffect)((function() {
                            u && u({
                                userInfo: p,
                                vipStatus: y
                            })
                        }), [p, y]), {
                            userInfo: p,
                            showLoginPopup: function(e) {
                                var t = n;
                                s && (t[0] ? t[0].project_type = s : t[0] = {
                                    project_type: s
                                }), S((function() {
                                    var o;
                                    (o = window.login).showLogin.apply(o, ["login", function(t) {
                                        [0, 1, 2, 3, 5, 6].includes(t.code) ? h(1) : h(2), e ? e && e({
                                            type: "login",
                                            res: t
                                        }) : c && c({
                                            type: "login",
                                            res: t
                                        })
                                    }, ""].concat(Ne(t)))
                                }))
                            },
                            unReadNum: w,
                            isLogin: m,
                            vipStatus: y,
                            logout: function(e) {
                                S((function() {
                                    window.login.FTLogout().then((function(t) {
                                        "000" === t.code && (h(2), f(null), b(""), e ? e && e({
                                            type: "logout",
                                            res: t
                                        }) : c && c({
                                            type: "logout",
                                            res: t
                                        }))
                                    }))
                                }))
                            },
                            showSignUpPopup: A,
                            showTip: E
                        }
                    };

                    function Re(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var r = t[o];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    var Ue = function() {
                        function e() {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.EventList = new Array
                        }
                        var t, o, r;
                        return t = e, r = [{
                            key: "getInstance",
                            value: function() {
                                var e = "instance_" + this.name;
                                return this[e] || window.FTevent || (this[e] = new this, window.FTevent = this[e]), this[e] || window.FTevent
                            }
                        }], (o = [{
                            key: "getEventList",
                            value: function() {
                                return this.EventList
                            }
                        }, {
                            key: "addEventListener",
                            value: function(e, t) {
                                this.EventList.push({
                                    name: e,
                                    listener: t
                                })
                            }
                        }, {
                            key: "removeEventListener",
                            value: function(e, t) {
                                this.EventList = t ? this.EventList.filter((function(o) {
                                    return !(o.name === e && o.listener === t)
                                })) : this.EventList.filter((function(t) {
                                    return t.name !== e
                                }))
                            }
                        }, {
                            key: "dispatchEvent",
                            value: function(e, t) {
                                this.EventList.filter((function(t) {
                                    return t.name === e
                                })).map((function(e) {
                                    return e.listener
                                })).forEach((function(e) {
                                    return e(t)
                                }))
                            }
                        }]) && Re(t.prototype, o), r && Re(t, r), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e
                    }();
                    const He = (e, t) => {
                            const o = {
                                en_US: "/",
                                es_ES: "/es/",
                                pt_BR: "/pt/",
                                ru_RU: "/ru/",
                                fr_FR: "/fr/",
                                de_DE: "/de/",
                                zh_CN: "/cn/",
                                zh_TW: "/tw/",
                                ja_JP: "/jp/",
                                id_ID: "/id/",
                                it_IT: "/it/",
                                th_TH: "/th/",
                                vi_VN: "/vi/",
                                tr_TR: "/tr/",
                                pl_PL: "/pl/",
                                nl_NL: "/nl/"
                            };
                            return e || (o[t] ? o[t] : "/")
                        },
                        Fe = (e, t = "production") => {
                            if (window.Payment) e && e();
                            else if (window) {
                                const o = document.createElement("script");
                                o.type = "text/javascript", o.src = me[t].paymentUrl, document.head.appendChild(o), o.onload = function() {
                                    e && e()
                                }
                            }
                        };

                    function ze({
                        src: e,
                        width: t,
                        height: o
                    }) {
                        const r = ["u-static.fotor.com", "u-static.haozhaopian.net", "pub-static.fotor.com", "pub-static.haozhaopian.net"];
                        let n = !1;
                        for (let a = 0; a < r.length; a++) - 1 !== e.indexOf(r[a]) && (n = !0);
                        return n && (e += `@${t=Math.floor(t)}w_${o=Math.floor(o)}h_1l.src`), e
                    }

                    function Be(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Qe(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Qe(e, t);
                                var o = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Qe(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Qe(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }

                    function Ge(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, r)
                        }
                        return o
                    }

                    function We(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ge(Object(o), !0).forEach((function(t) {
                                Je(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ge(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    function Je(e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }

                    function Ye(e) {
                        var o = e.onClickItem,
                            r = e.menuItem,
                            n = e.projectType,
                            a = e.callback,
                            i = (e.unReadNum, e.userInfo),
                            s = e.logout,
                            c = e.language,
                            u = e.customUserMenuData,
                            l = e.setShowLoginedMenu,
                            p = e.vipStatus,
                            f = e.AvatarNav,
                            d = e.below750,
                            m = e.setShowMenu,
                            h = e.languageData,
                            g = e.displayLanguageMenu,
                            w = e.env,
                            v = e.ShowUpgradeButton,
                            _ = e.paymentDisplayStand,
                            y = e.paymentSensorData,
                            b = e.paymentOther,
                            k = t().useMemo((function() {
                                return me[w].baseUrl
                            }), [w]),
                            E = function(e) {
                                return Fe(e, w)
                            },
                            L = function(e) {
                                var t = Ee[e];
                                return t && "en" !== t && "id" !== t ? "/" + t : ""
                            },
                            x = t().useMemo((function() {
                                var e = {
                                    title: t().createElement(f, {
                                        vipStatus: p,
                                        userInfo: i,
                                        showVipMark: !0,
                                        userInfoStyle: {
                                            borderBottom: "none",
                                            padding: "0"
                                        }
                                    }),
                                    url: "".concat(k).concat(L(c), "/user/settings"),
                                    onClick: function(e) {
                                        e.preventDefault(), B.userMenu("account", n), a && a({
                                            type: "link",
                                            value: "account"
                                        }) || window && (-1 === window.location.pathname.indexOf("/user/settings") ? window.open("".concat(k).concat(L(c), "/user/settings"), "_blank") : l(!1))
                                    },
                                    labelAttr: {
                                        className: "first-menu custom-avatar-nav"
                                    }
                                };
                                return i ? d ? [e] : v ? [e, {
                                    title: t().createElement(fo, {
                                        vipStatus: p,
                                        userInfo: i,
                                        createPayment: E,
                                        callback: a,
                                        languageData: h,
                                        projectType: n,
                                        paymentDisplayStand: _,
                                        paymentSensorData: y,
                                        paymentOther: b,
                                        env: w
                                    }),
                                    labelAttr: {
                                        className: "first-menu custom-upgrade-nav"
                                    }
                                }] : [e] : []
                            }), [d, p, i, h, v, c]);
                        return {
                            languageMenu: [{
                                name: "English",
                                enName: "English",
                                key: "en",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "en_US",
                                        key: "en",
                                        event: e
                                    })
                                }
                            }, {
                                name: "Espa\xf1ol",
                                enName: "Spanish",
                                key: "es",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "es_ES",
                                        key: "es",
                                        event: e
                                    })
                                }
                            }, {
                                name: "Portugu\xeas",
                                enName: "Portuguese",
                                key: "pt",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "pt_BR",
                                        key: "pt",
                                        event: e
                                    })
                                }
                            }, {
                                name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                                enName: "Russian",
                                key: "ru",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "ru_RU",
                                        key: "ru",
                                        event: e
                                    })
                                }
                            }, {
                                name: "Fran\xe7ais",
                                enName: "French",
                                key: "fr",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "fr_FR",
                                        key: "fr",
                                        event: e
                                    })
                                }
                            }, {
                                name: "Deutsch",
                                enName: "German",
                                key: "de",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "de_DE",
                                        key: "de",
                                        event: e
                                    })
                                }
                            }, {
                                name: "\u7b80\u4f53\u4e2d\u6587",
                                enName: "Chinese, Simplified",
                                key: "cn",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "zh_CN",
                                        key: "cn",
                                        event: e
                                    })
                                }
                            }, {
                                name: "\u6b63\u9ad4\u4e2d\u6587",
                                enName: "Traditional Chinese",
                                key: "tw",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "zh_TW",
                                        key: "tw",
                                        event: e
                                    })
                                }
                            }, {
                                name: "\u65e5\u672c\u8a9e",
                                enName: "Japanese",
                                key: "jp",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "ja_JP",
                                        key: "jp",
                                        event: e
                                    })
                                }
                            }, {
                                name: "Indon\xe9sien",
                                enName: "Indonesian",
                                key: "id",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "id_ID"
                                    })
                                }
                            }, {
                                name: "Italiano",
                                enName: "Italian",
                                key: "it",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "it_IT"
                                    })
                                }
                            }, {
                                name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                                enName: "Thai",
                                key: "th",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "th_TH"
                                    })
                                }
                            }, {
                                name: "Ti\u1ebfng Vi\u1ec7t",
                                enName: "Vietnamese",
                                key: "vi",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "vi_VN"
                                    })
                                }
                            }, {
                                name: "T\xfcrk\xe7e",
                                enName: "Turkish",
                                key: "tr",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "tr_TR"
                                    })
                                }
                            }, {
                                name: "Polski",
                                enName: "Polish",
                                key: "pl",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "pl_PL"
                                    })
                                }
                            }, {
                                name: "Nederlands",
                                enName: "Dutch",
                                key: "nl",
                                onClick: function(e) {
                                    o && o({
                                        type: "language",
                                        value: "nl_NL"
                                    })
                                }
                            }].filter((function(e) {
                                return g.includes(e.key)
                            })),
                            menuItemData: r.map((function(e) {
                                return We(We({}, e), {}, {
                                    labelAttr: {
                                        className: "menuItem-wraper first-menu custom-menu"
                                    }
                                })
                            })),
                            userMenuData: ((e, t, o) => t.reduce(((e, t) => {
                                let o = !1;
                                return e.forEach((e => {
                                    e.key === t.key && (o = !0, e = Object.assign(e, t))
                                })), o || e.push(t), e
                            }), e))([].concat(Be(x), [{
                                title: null == h ? void 0 : h.login_header_my_account,
                                url: "".concat(k).concat(L(c), "/user/settings"),
                                key: "settings",
                                onClick: function(e) {
                                    e.preventDefault(), B.userMenu("account", n), a && a({
                                        type: "link",
                                        value: "account"
                                    }) || window && (-1 === window.location.pathname.indexOf("/user/settings") ? window.open("".concat(k).concat(L(c), "/user/settings"), "_blank") : l(!1))
                                },
                                labelAttr: {
                                    className: "first-menu custom-menu"
                                }
                            }, {
                                title: null == h ? void 0 : h.login_header_my_project,
                                url: "".concat(k, "/cloud/all-projects/"),
                                key: "myProjects",
                                onClick: function(e) {
                                    e.preventDefault(), B.userMenu("projects", n), a && a({
                                        type: "link",
                                        value: "projects"
                                    }) || window && (-1 === window.location.pathname.indexOf("/cloud/all-projects") ? window.open("".concat(k, "/cloud/all-projects/"), "_blank") : l(!1))
                                },
                                labelAttr: {
                                    className: "first-menu custom-menu"
                                }
                            }, {
                                title: null == h ? void 0 : h.toolsHeader_usermenu_my_creations_name,
                                url: "".concat(k).concat(d ? "/images/my-creations/" : "/cloud/all-creations/"),
                                key: "myCreations",
                                onClick: function(e) {
                                    e.preventDefault(), B.userMenu("myCreations", n), a && a({
                                        type: "link",
                                        value: "myCreations"
                                    }) || window && (window.open("".concat(k).concat(d ? "/images/my-creations/" : "/cloud/all-creations/"), "_blank"), l(!1))
                                },
                                labelAttr: {
                                    className: "first-menu custom-menu"
                                }
                            }, {
                                title: null == h ? void 0 : h.login_header_sign_out,
                                key: "signOut",
                                onClick: function() {
                                    B.userMenu("sign_out", n), a && a({
                                        type: "link",
                                        value: "signOut"
                                    }) || s((function(e) {
                                        l(!1), m(!1), setTimeout((function() {
                                            a && a(e)
                                        }))
                                    }))
                                },
                                labelAttr: {
                                    className: "first-menu custom-menu"
                                }
                            }]), u)
                        }
                    }
                    const Ve = {
                        toolsHeader: "toolsHeader",
                        menu_logo: "menu_logo",
                        toolsHeader_fotor_logo: "toolsHeader_fotor_logo",
                        toolsHeader_group: "toolsHeader_group",
                        login_in: "login_in",
                        avatar_container: "avatar_container",
                        avatar: "avatar",
                        avatar_container_head: "avatar_container_head",
                        avatar_container_selected: "avatar_container_selected",
                        toolsHeader_avatar_nav: "toolsHeader_avatar_nav",
                        "avatar-container": "avatar-container",
                        "user-info": "user-info",
                        "info-swiper": "info-swiper",
                        "avatar-border": "avatar-border",
                        menu_item_icon: "menu_item_icon",
                        toolsHeader_language_menu: "toolsHeader_language_menu",
                        menuItem: "menuItem",
                        arrow: "arrow",
                        "arrow-expand": "arrow-expand",
                        "menuItem-menu": "menuItem-menu",
                        "menuItem-wraper": "menuItem-wraper",
                        toolsHeader_menu_item: "toolsHeader_menu_item",
                        icon: "icon",
                        toolsHeader_credits_item: "toolsHeader_credits_item",
                        toolsHeader_ad_item: "toolsHeader_ad_item",
                        toolsHeader_menu: "toolsHeader_menu",
                        arrow_mark: "arrow_mark",
                        toolsHeader_menu_inner: "toolsHeader_menu_inner",
                        toolsHeader_menu_children: "toolsHeader_menu_children",
                        toolsHeader_menu_show: "toolsHeader_menu_show",
                        toolsHeader_menu_hide: "toolsHeader_menu_hide",
                        toolsAdButton: "toolsAdButton",
                        toolsAdButton_try: "toolsAdButton_try",
                        toolsAdButton_upgrade: "toolsAdButton_upgrade",
                        toolsHeader_credits_container: "toolsHeader_credits_container",
                        help_icon: "help_icon",
                        credits: "credits",
                        toolsHeader_credit_help: "toolsHeader_credit_help",
                        toolsHeader_credits_message: "toolsHeader_credits_message",
                        toolsHeader_credits_message_show: "toolsHeader_credits_message_show",
                        tool_open_in_app: "tool_open_in_app",
                        theme_white: "theme_white",
                        header_toast: "header_toast",
                        "Toastify__toast-body": "Toastify__toast-body"
                    };
                    var Ze, qe, Xe, Ke, $e = r(8771),
                        et = r.n($e),
                        tt = r(5498),
                        ot = r.n(tt),
                        rt = r(7501),
                        nt = r.n(rt),
                        at = r(3668),
                        it = r.n(at),
                        st = r(7388),
                        ct = r.n(st),
                        ut = r(1999),
                        lt = r.n(ut),
                        pt = r(3841),
                        ft = r.n(pt),
                        dt = r(9663),
                        mt = r.n(dt),
                        ht = r(6583),
                        gt = r.n(ht),
                        wt = r(3954),
                        vt = r.n(wt),
                        _t = r(670),
                        yt = r.n(_t),
                        bt = r(5755),
                        kt = r.n(bt),
                        Et = r(5565),
                        Lt = r.n(Et),
                        xt = r(5830),
                        St = r.n(xt);

                    function At(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Tt(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Tt(e, t);
                                var o = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Tt(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Tt(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }

                    function Ct(e) {
                        return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function jt() {
                        jt = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == Ct(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function Ot(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function Nt(e) {
                        return function() {
                            var t = this,
                                o = arguments;
                            return new Promise((function(r, n) {
                                var a = e.apply(t, o);

                                function i(e) {
                                    Ot(a, r, n, i, s, "next", e)
                                }

                                function s(e) {
                                    Ot(a, r, n, i, s, "throw", e)
                                }
                                i(void 0)
                            }))
                        }
                    }

                    function It(e) {
                        return Mt.apply(this, arguments)
                    }

                    function Mt() {
                        return (Mt = Nt(jt().mark((function e(t) {
                            var o;
                            return jt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!window) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 3, ie("".concat(me[t].baseUrl, "/api/create/getScore"), {}).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        if ("000" !== (o = e.sent).code) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", o.data.subScore);
                                    case 6:
                                        return e.abrupt("return", 0);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function Pt(e) {
                        return Dt.apply(this, arguments)
                    }

                    function Dt() {
                        return (Dt = Nt(jt().mark((function e(t) {
                            var o;
                            return jt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!window) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 3, ie("".concat(me[t].baseUrl, "/pay/service/en/payment/pre-activity"), {}).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        if ("000" !== (o = e.sent).code) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", o);
                                    case 6:
                                        return e.abrupt("return", o);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function(e) {
                        e.COPY = "copy"
                    }(Ze || (Ze = {})),
                    function(e) {
                        e.LANGUAGE_LOAD = "language_load"
                    }(qe || (qe = {})),
                    function(e) {
                        e.development = "https://test-pub-static.fotor.com/static/web/lib/a8s/bundle.js", e.test = "https://test-pub-static.fotor.com/static/web/lib/a8s/bundle.js", e.production = "https://pub-static.fotor.com/static/web/lib/a8s/bundle.js"
                    }(Xe || (Xe = {})),
                    function(e) {
                        e.UPDATESTATE = "UPDATESTATE", e.CLEAR_USER_INFO = "clear_user_info"
                    }(Ke || (Ke = {}));
                    var Rt = function(e) {
                        var t = e.url;
                        return te()({
                            baseURL: "",
                            url: t
                        }).then((function(e) {
                            return e.data
                        }))
                    };

                    function Ut(e) {
                        return (Ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function Ht() {
                        Ht = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == Ut(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function Ft(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, r)
                        }
                        return o
                    }

                    function zt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ft(Object(o), !0).forEach((function(t) {
                                Bt(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Ft(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    function Bt(e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }

                    function Qt(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function Gt(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }

                    function Wt(t) {
                        var o = t.lang,
                            r = t.env,
                            n = t.url,
                            a = function(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function(e, t) {
                                    var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != o) {
                                        var r, n, a = [],
                                            i = !0,
                                            s = !1;
                                        try {
                                            for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                        } catch (e) {
                                            s = !0, n = e
                                        } finally {
                                            try {
                                                i || null == o.return || o.return()
                                            } finally {
                                                if (s) throw n
                                            }
                                        }
                                        return a
                                    }
                                }(e, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return Gt(e, t);
                                        var o = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Gt(e, t) : void 0
                                    }
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }((0, e.useState)({
                                en_US: {},
                                de_DE: {},
                                es_ES: {},
                                fr_FR: {},
                                id_ID: {},
                                ja_JP: {},
                                pt_BR: {},
                                ru_RU: {},
                                zh_CN: {},
                                zh_TW: {},
                                it_IT: {},
                                th_TH: {},
                                vi_VN: {},
                                tr_TR: {},
                                pl_PL: {},
                                nl_NL: {}
                            }), 2),
                            i = a[0],
                            s = a[1],
                            c = (0, e.useMemo)((function() {
                                return i[o]
                            }), [i, o]);
                        return (0, e.useEffect)((function() {
                            var e;
                            (e = Ht().mark((function e() {
                                var t, a;
                                return Ht().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!i[o] || 0 !== Object.keys(i[o]).length) {
                                                e.next = 6;
                                                break
                                            }
                                            return t = (new Date).getTime(), e.next = 4, Rt({
                                                url: n || "".concat(me[r].publicUrl, "/public/websiteHeader/lang/").concat(o, ".json?v=").concat(t)
                                            });
                                        case 4:
                                            a = e.sent, s((function(e) {
                                                return zt(zt({}, e), {}, Bt({}, o, a))
                                            }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    o = arguments;
                                return new Promise((function(r, n) {
                                    var a = e.apply(t, o);

                                    function i(e) {
                                        Qt(a, r, n, i, s, "next", e)
                                    }

                                    function s(e) {
                                        Qt(a, r, n, i, s, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            })()
                        }), [o]), c
                    }

                    function Jt(e) {
                        return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function Yt() {
                        Yt = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == Jt(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function Vt(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, r)
                        }
                        return o
                    }

                    function Zt(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Vt(Object(o), !0).forEach((function(t) {
                                qt(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Vt(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    function qt(e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }

                    function Xt(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function Kt(e) {
                        return function() {
                            var t = this,
                                o = arguments;
                            return new Promise((function(r, n) {
                                var a = e.apply(t, o);

                                function i(e) {
                                    Xt(a, r, n, i, s, "next", e)
                                }

                                function s(e) {
                                    Xt(a, r, n, i, s, "throw", e)
                                }
                                i(void 0)
                            }))
                        }
                    }

                    function $t(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var r, n, a = [],
                                    i = !0,
                                    s = !1;
                                try {
                                    for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return eo(e, t);
                                var o = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? eo(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function eo(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }
                    var to = (0, e.forwardRef)((function(o, r) {
                            var n = o.callback,
                                a = o.onUnReadNum,
                                i = o.loginSensorsData,
                                c = o.signUpSensorData,
                                u = o.onClickItem,
                                f = o.env,
                                d = void 0 === f ? "production" : f,
                                m = o.projectType,
                                h = void 0 === m ? "" : m,
                                g = o.headContent,
                                w = void 0 === g ? null : g,
                                v = o.paymentSensorData,
                                _ = o.paymentOther,
                                b = o.paymentDisplayStand,
                                k = void 0 === b ? "other" : b,
                                E = o.realityContent,
                                L = o.showOpenInApp,
                                x = void 0 !== L && L,
                                S = o.theme,
                                A = void 0 === S ? "" : S,
                                T = o.lang,
                                C = o.displayLanguageMenu,
                                j = void 0 === C ? ["en", "es", "pt", "ru", "fr", "de", "cn", "tw", "jp"] : C,
                                O = o.logoHref,
                                N = void 0 === O ? "" : O,
                                I = o.className,
                                M = void 0 === I ? "" : I,
                                P = o.adLocation,
                                D = void 0 === P ? "" : P,
                                R = o.showMobileAd,
                                U = void 0 !== R && R,
                                H = o.showUpgradeButton,
                                F = void 0 === H || H,
                                z = $t(t().useState("en_US"), 2),
                                Q = z[0],
                                G = z[1],
                                W = $t(t().useState(!1), 2),
                                J = W[0],
                                Y = W[1],
                                V = $t(t().useState(!1), 2),
                                Z = V[0],
                                q = V[1],
                                K = $t(t().useState(0), 2),
                                $ = K[0],
                                ee = K[1],
                                te = (0, e.useRef)(),
                                oe = "".concat(me[d].publicUrl, "/9d3a9d230faf9f901b16.svg"),
                                re = "".concat(me[d].publicUrl, "/6ce130d2365d8b44a294.svg"),
                                ne = Wt({
                                    lang: Q,
                                    env: d
                                }),
                                ae = function(e) {
                                    G(e || Se())
                                },
                                ie = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                                        t = Number(e);
                                    t >= 0 ? ee(t) : It(d).then((function(e) {
                                        ee(e)
                                    }))
                                },
                                se = De({
                                    env: d,
                                    callback: n,
                                    loginSensorsData: i,
                                    signUpSensorData: c,
                                    projectType: h
                                }),
                                ce = se.showSignUpPopup,
                                ue = se.isLogin,
                                le = se.userInfo,
                                pe = se.vipStatus,
                                fe = se.unReadNum,
                                de = se.logout,
                                he = se.showTip,
                                ge = function(o) {
                                    var r = o.setLanguage,
                                        n = o.language,
                                        a = o.languageData,
                                        i = o.onClickItem,
                                        s = o.vipStatus,
                                        c = o.userInfo,
                                        u = o.styles,
                                        l = o.ToolsAdButton,
                                        p = o.logout,
                                        f = o.callback,
                                        d = o.setShowLoginedMenu,
                                        m = o.createPayment,
                                        h = o.paymentSensorData,
                                        g = o.paymentOther,
                                        w = o.paymentDisplayStand,
                                        v = o.CreditsMenu,
                                        _ = o.credits,
                                        y = o.updateCredits,
                                        b = o.projectType,
                                        k = o.displayLanguageMenu,
                                        E = o.showUpgradeButton,
                                        L = o.env,
                                        x = (0, e.useRef)(),
                                        S = function() {
                                            var e = "https://www.fotor.com",
                                                t = {
                                                    en_US: "en",
                                                    es_ES: "es",
                                                    pt_BR: "pt",
                                                    ru_RU: "ru",
                                                    fr_FR: "fr",
                                                    de_DE: "de",
                                                    zh_CN: "cn",
                                                    zh_TW: "tw",
                                                    ja_JP: "jp"
                                                }[n];
                                            return "en" === t ? e + "/features/background-remover/upload" : "ru" === t || "es" === t || "pt" === t || "fr" === t || "jp" === t || "tw" === t || "de" === t ? e + "/".concat(t, "/features/background-remover/upload") : e + "/features/background-remover/upload"
                                        },
                                        A = (0, e.useMemo)((function() {
                                            return E ? [{
                                                name: t().createElement(l, {
                                                    position: "toolsHeader_upgrade_button",
                                                    userInfo: c,
                                                    env: L,
                                                    languageData: a,
                                                    vipStatus: s,
                                                    paymentSensorData: h,
                                                    paymentOther: g,
                                                    updateCredits: y,
                                                    callback: f,
                                                    createPayment: m,
                                                    paymentDisplayStand: w,
                                                    projectType: b
                                                }),
                                                labelAttr: {
                                                    className: "first-menu ".concat(u.toolsHeader_ad_item)
                                                }
                                            }] : []
                                        }), [E, c, a, s, h, g, y, f, m, w, b]),
                                        T = k.length > 0 ? [{
                                            name: null == a ? void 0 : a.login_header_language,
                                            labelAttr: {
                                                className: "first-menu ".concat(u.toolsHeader_language_menu)
                                            },
                                            icon: t().createElement("span", {
                                                className: u.menu_item_icon,
                                                dangerouslySetInnerHTML: {
                                                    __html: yt()
                                                }
                                            }),
                                            item: [{
                                                name: "English",
                                                enName: "English",
                                                key: "en",
                                                onClick: function(e) {
                                                    r("en_US"), i && i({
                                                        type: "language",
                                                        value: "en_US"
                                                    })
                                                }
                                            }, {
                                                name: "Espa\xf1ol",
                                                enName: "Spanish",
                                                key: "es",
                                                onClick: function(e) {
                                                    r("es_ES"), i && i({
                                                        type: "language",
                                                        value: "es_ES"
                                                    })
                                                }
                                            }, {
                                                name: "Portugu\xeas",
                                                enName: "Portuguese",
                                                key: "pt",
                                                onClick: function(e) {
                                                    r("pt_BR"), i && i({
                                                        type: "language",
                                                        value: "pt_BR"
                                                    })
                                                }
                                            }, {
                                                name: "P\u0443\u0441\u0441\u043a\u0438\u0439",
                                                enName: "Russian",
                                                key: "ru",
                                                onClick: function(e) {
                                                    r("ru_RU"), i && i({
                                                        type: "language",
                                                        value: "ru_RU"
                                                    })
                                                }
                                            }, {
                                                name: "Fran\xe7ais",
                                                enName: "French",
                                                key: "fr",
                                                onClick: function(e) {
                                                    r("fr_FR"), i && i({
                                                        type: "language",
                                                        value: "fr_FR"
                                                    })
                                                }
                                            }, {
                                                name: "Deutsch",
                                                enName: "German",
                                                key: "de",
                                                onClick: function(e) {
                                                    r("de_DE"), i && i({
                                                        type: "language",
                                                        value: "de_DE"
                                                    })
                                                }
                                            }, {
                                                name: "\u7b80\u4f53\u4e2d\u6587",
                                                enName: "Chinese, Simplified",
                                                key: "cn",
                                                onClick: function(e) {
                                                    r("zh_CN"), i && i({
                                                        type: "language",
                                                        value: "zh_CN"
                                                    })
                                                }
                                            }, {
                                                name: "\u6b63\u9ad4\u4e2d\u6587",
                                                enName: "Traditional Chinese",
                                                key: "tw",
                                                onClick: function(e) {
                                                    r("zh_TW"), i && i({
                                                        type: "language",
                                                        value: "zh_TW"
                                                    })
                                                }
                                            }, {
                                                name: "\u65e5\u672c\u8a9e",
                                                enName: "Japanese",
                                                key: "jp",
                                                onClick: function(e) {
                                                    r("ja_JP"), i && i({
                                                        type: "language",
                                                        value: "ja_JP"
                                                    })
                                                }
                                            }, {
                                                name: "Indon\xe9sien",
                                                enName: "Indonesian",
                                                key: "id",
                                                onClick: function(e) {
                                                    r("id_ID"), i && i({
                                                        type: "language",
                                                        value: "id_ID"
                                                    })
                                                }
                                            }, {
                                                name: "Italiano",
                                                enName: "Italian",
                                                key: "it",
                                                onClick: function(e) {
                                                    r("it_IT"), i && i({
                                                        type: "language",
                                                        value: "it_IT"
                                                    })
                                                }
                                            }, {
                                                name: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                                                enName: "Thai",
                                                key: "th",
                                                onClick: function(e) {
                                                    r("th_TH"), i && i({
                                                        type: "language",
                                                        value: "th_TH"
                                                    })
                                                }
                                            }, {
                                                name: "Ti\u1ebfng Vi\u1ec7t",
                                                enName: "Vietnamese",
                                                key: "vi",
                                                onClick: function(e) {
                                                    r("vi_VN"), i && i({
                                                        type: "language",
                                                        value: "vi_VN"
                                                    })
                                                }
                                            }, {
                                                name: "T\xfcrk\xe7e",
                                                enName: "Turkish",
                                                key: "tr",
                                                onClick: function(e) {
                                                    r("tr_TR"), i && i({
                                                        type: "language",
                                                        value: "tr_TR"
                                                    })
                                                }
                                            }, {
                                                name: "Polski",
                                                enName: "Polish",
                                                key: "pl",
                                                onClick: function(e) {
                                                    r("pl_PL"), i && i({
                                                        type: "language",
                                                        value: "pl_PL"
                                                    })
                                                }
                                            }, {
                                                name: "Nederlands",
                                                enName: "Dutch",
                                                key: "nl",
                                                onClick: function(e) {
                                                    r("nl_NL"), i && i({
                                                        type: "language",
                                                        value: "nl_NL"
                                                    })
                                                }
                                            }].filter((function(e) {
                                                return k.includes(e.key)
                                            }))
                                        }] : [];
                                    return {
                                        userMenuData: [{
                                            name: t().createElement(lo, {
                                                vipStatus: s,
                                                userInfo: c,
                                                className: u.toolsHeader_avatar_nav,
                                                userInfoStyle: {
                                                    borderBottom: "none",
                                                    padding: "0"
                                                }
                                            }),
                                            value: "https://www.fotor.com/user/settings",
                                            labelAttr: {
                                                className: "first-menu ".concat(u.toolsHeader_menu_item)
                                            },
                                            onClick: function(e) {
                                                e.preventDefault(), B.userMenu("account", b), window.open("https://www.fotor.com/user/settings")
                                            },
                                            arrow: !0
                                        }, {
                                            name: t().createElement(v, {
                                                credits: _,
                                                languageData: a,
                                                ref: x
                                            }),
                                            labelAttr: {
                                                className: "first-menu ".concat(u.toolsHeader_credits_item)
                                            }
                                        }].concat(At(A), [{
                                            name: null == a ? void 0 : a.toolsHeader_usermenu_my_projects_name,
                                            icon: t().createElement("span", {
                                                className: u.icon,
                                                dangerouslySetInnerHTML: {
                                                    __html: Lt()
                                                }
                                            }),
                                            onClick: function(e) {
                                                e.preventDefault(), B.userMenu("projects", b), window.open("https://www.fotor.com/cloud/all-projects/")
                                            },
                                            value: "https://www.fotor.com/cloud/all-projects/",
                                            labelAttr: {
                                                className: "first-menu ".concat(u.toolsHeader_menu_item)
                                            }
                                        }, {
                                            name: null == a ? void 0 : a.toolsHeader_usermenu_my_creations_name,
                                            value: "https://www.fotor.com/images/my-creations",
                                            onClick: function(e) {
                                                e.preventDefault(), B.userMenu("myCreations", b), window.open("https://www.fotor.com/images/my-creations")
                                            },
                                            icon: t().createElement("span", {
                                                className: u.icon,
                                                dangerouslySetInnerHTML: {
                                                    __html: kt()
                                                }
                                            }),
                                            labelAttr: {
                                                className: "first-menu ".concat(u.toolsHeader_menu_item)
                                            }
                                        }, {
                                            name: null == a ? void 0 : a.login_header_sign_out,
                                            icon: t().createElement("span", {
                                                className: u.icon,
                                                dangerouslySetInnerHTML: {
                                                    __html: St()
                                                }
                                            }),
                                            labelAttr: {
                                                className: "first-menu ".concat(u.toolsHeader_menu_item)
                                            },
                                            onClick: function() {
                                                B.userMenu("sign_out", b), p((function(e) {
                                                    d(!1), f && f(e)
                                                }))
                                            }
                                        }]),
                                        menuItemData: [{
                                            name: null == a ? void 0 : a.toolsHeader_menu_home_name,
                                            value: "https://www.fotor.com",
                                            onClick: function(e) {
                                                e.preventDefault(), B.headerMenu("home", b), window.open("https://www.fotor.com")
                                            },
                                            labelAttr: {
                                                className: "first-menu ".concat(u.toolsHeader_menu_item)
                                            },
                                            icon: t().createElement("span", {
                                                className: u.menu_item_icon,
                                                dangerouslySetInnerHTML: {
                                                    __html: ct()
                                                }
                                            })
                                        }, {
                                            name: null == a ? void 0 : a.toolsHeader_menu_tools_name,
                                            mode: "tiling",
                                            item: [{
                                                name: null == a ? void 0 : a.toolsHeader_menu_tools_ai_photo_editor,
                                                value: "https://www.fotor.com/photo-editor-app/editor/ai",
                                                onClick: function(e) {
                                                    e.preventDefault(), B.headerMenu("editor", b), window.open("https://www.fotor.com/photo-editor-app/editor/ai")
                                                },
                                                icon: t().createElement("span", {
                                                    className: u.menu_item_icon,
                                                    dangerouslySetInnerHTML: {
                                                        __html: ft()
                                                    }
                                                })
                                            }, {
                                                name: null == a ? void 0 : a.toolsHeader_menu_tools_ai_image_generator,
                                                value: "https://www.fotor.com/images/create",
                                                onClick: function(e) {
                                                    e.preventDefault(), B.headerMenu("generator", b), window.open("https://www.fotor.com/images/create")
                                                },
                                                icon: t().createElement("span", {
                                                    className: u.menu_item_icon,
                                                    dangerouslySetInnerHTML: {
                                                        __html: mt()
                                                    }
                                                })
                                            }, {
                                                name: null == a ? void 0 : a.toolsHeader_menu_tools_background_remover,
                                                value: S(),
                                                onClick: function(e) {
                                                    e.preventDefault(), B.headerMenu("bgRemover", b), window.open(S())
                                                },
                                                icon: t().createElement("span", {
                                                    className: u.menu_item_icon,
                                                    dangerouslySetInnerHTML: {
                                                        __html: gt()
                                                    }
                                                })
                                            }, {
                                                name: null == a ? void 0 : a.toolsHeader_menu_tools_go_art,
                                                value: "https://goart.fotor.com/",
                                                onClick: function(e) {
                                                    e.preventDefault(), B.headerMenu("goart", b), window.open("https://goart.fotor.com/")
                                                },
                                                icon: t().createElement("span", {
                                                    className: u.menu_item_icon,
                                                    dangerouslySetInnerHTML: {
                                                        __html: vt()
                                                    }
                                                })
                                            }, {
                                                name: null == a ? void 0 : a.toolsHeader_menu_tools_ai_avatar,
                                                value: "https://www.fotor.com/features/ai-avatar-generator/",
                                                onClick: function(e) {
                                                    e.preventDefault(), B.headerMenu("ai_avatar", b), window.open("https://www.fotor.com/features/ai-avatar-generator/")
                                                },
                                                icon: t().createElement("span", {
                                                    className: u.menu_item_icon,
                                                    dangerouslySetInnerHTML: {
                                                        __html: lt()
                                                    }
                                                })
                                            }]
                                        }].concat(T),
                                        creditsMenuRef: x
                                    }
                                }({
                                    userInfo: le,
                                    vipStatus: pe,
                                    onClickItem: u,
                                    language: Q,
                                    ToolsAdButton: ro,
                                    callback: n,
                                    logout: de,
                                    styles: Ve,
                                    setShowLoginedMenu: Y,
                                    createPayment: function(e) {
                                        return Fe(e, d)
                                    },
                                    paymentSensorData: v,
                                    paymentOther: _,
                                    paymentDisplayStand: k,
                                    CreditsMenu: no,
                                    credits: $,
                                    updateCredits: ie,
                                    projectType: h,
                                    languageData: ne,
                                    setLanguage: G,
                                    displayLanguageMenu: j,
                                    showUpgradeButton: F,
                                    env: d
                                }),
                                we = ge.menuItemData,
                                ve = ge.userMenuData,
                                _e = ge.creditsMenuRef;
                            return (0, e.useEffect)((function() {
                                return te && te.current && E && te.current.appendChild(E), ae(), Ue.getInstance().addEventListener(qe.LANGUAGE_LOAD, ae), Ue.getInstance().addEventListener("update-credits", ie), n && n({
                                        type: "rendered"
                                    }),
                                    function() {
                                        Ue.getInstance().removeEventListener("update-credits", ie), Ue.getInstance().removeEventListener(qe.LANGUAGE_LOAD, ae)
                                    }
                            }), []), (0, e.useEffect)((function() {
                                a && a(fe)
                            }), [fe]), (0, e.useImperativeHandle)(r, (function() {
                                return {
                                    updateCredits: ie
                                }
                            })), (0, e.useEffect)((function() {
                                le && le.fotorToken && ie()
                            }), [null == le ? void 0 : le.fotorToken]), (0, e.useEffect)((function() {
                                ae(T)
                            }), [T]), t().createElement("div", {
                                className: s(Ve.toolsHeader, A && Ve["theme_".concat(A)], M),
                                ref: r
                            }, t().createElement("div", {
                                className: Ve.menu_logo,
                                onClick: function(e) {
                                    e.nativeEvent.stopImmediatePropagation(), q(!Z), !Z && J && Y(!1)
                                }
                            }, t().createElement("img", {
                                src: Z ? p : l,
                                alt: ""
                            })), t().createElement("a", {
                                href: He(N, Q),
                                className: Ve.toolsHeader_fotor_logo
                            }, t().createElement("img", {
                                src: "white" === A ? re : oe,
                                className: Ve.mobile_logo,
                                width: "86px",
                                height: "23px",
                                alt: "Fotor"
                            })), w, E && t().createElement("div", {
                                ref: te
                            }), t().createElement(zo, {
                                adLocation: D,
                                showMobileAd: U
                            }), x && X().isMobile && t().createElement(Fo, {
                                env: d,
                                buttonText: null == ne ? void 0 : ne.open_in_app_label,
                                className: Ve.tool_open_in_app,
                                projectType: h
                            }), 2 === ue && t().createElement("div", {
                                className: Ve.toolsHeader_group,
                                onClick: function() {
                                    B.userMenu("signUp", h), ce()
                                }
                            }, t().createElement("button", {
                                className: Ve.login_in
                            }, null == ne ? void 0 : ne.login_header_sign_up)), 1 === ue && t().createElement("div", {
                                className: s(Ve.avatar_container, Ve.avatar_container_head, J && Ve.avatar_container_selected),
                                onClick: function(e) {
                                    e.nativeEvent.stopImmediatePropagation(), Y(!J), !J && Z && q(!1)
                                }
                            }, t().createElement("img", {
                                className: Ve.avatar,
                                src: le && le.headerUrl,
                                alt: le && le.nickName
                            })), t().createElement(oo, {
                                showMenu: Z,
                                setShowMenu: q,
                                onOutSide: function() {
                                    q(!1)
                                }
                            }, t().createElement(y, {
                                itemMenus: we
                            })), 1 === ue && t().createElement(oo, {
                                showMenu: J,
                                setShowMenu: Y,
                                showArrow: !0,
                                onOutSide: function() {
                                    _e.current.show || Y(!1)
                                }
                            }, t().createElement(y, {
                                itemMenus: ve
                            })), he && t().createElement("div", {
                                className: "copy-tips ".concat(he ? "copy-show-animate" : "")
                            }, "\ud83d\udc4c", t().createElement("span", null, null == ne ? void 0 : ne.header_invite_toast)))
                        })),
                        oo = function(o) {
                            var r = o.showMenu,
                                n = o.children,
                                a = o.showArrow,
                                i = o.arrowClass,
                                c = o.onOutSide,
                                u = o.className,
                                l = o.topExcessHeight,
                                p = void 0 === l ? 60 : l,
                                f = (0, e.useRef)(),
                                d = $t(t().useState({}), 2),
                                m = d[0],
                                h = d[1],
                                g = function() {
                                    if ("undefined" != typeof window && f.current) {
                                        var e, t = f.current.getBoundingClientRect().top - p;
                                        return {
                                            maxHeight: (null === (e = window) || void 0 === e ? void 0 : e.innerHeight) - p - t + "px"
                                        }
                                    }
                                    return {}
                                };
                            (0, e.useEffect)((function() {
                                r && h(g())
                            }), [p, r]), (0, e.useEffect)((function() {
                                return document.addEventListener("click", w), h(g()),
                                    function() {
                                        document.removeEventListener("click", w)
                                    }
                            }), []);
                            var w = function(e) {
                                var t = f.current,
                                    o = e.target;
                                t == o || t.contains(o) || c && c()
                            };
                            return t().createElement("div", {
                                className: s("".concat(Ve.toolsHeader_menu, " ").concat(r ? Ve.toolsHeader_menu_show : Ve.toolsHeader_menu_hide), u)
                            }, a && t().createElement("div", {
                                className: s(Ve.arrow_mark, i && i)
                            }), t().createElement("div", {
                                className: Ve.toolsHeader_menu_inner
                            }, t().createElement("div", {
                                className: Ve.toolsHeader_menu_children,
                                ref: f,
                                style: m
                            }, n)))
                        },
                        ro = function(o) {
                            var r, n, a, i = o.userInfo,
                                c = o.vipStatus,
                                u = o.paymentOther,
                                l = void 0 === u ? {} : u,
                                p = o.paymentSensorData,
                                f = void 0 === p ? {} : p,
                                d = o.callback,
                                m = o.paymentDisplayStand,
                                h = o.updateCredits,
                                g = o.languageData,
                                w = o.showButtonIcon,
                                v = void 0 === w || w,
                                _ = o.className,
                                y = o.projectType,
                                b = o.position,
                                k = o.env,
                                E = $t(t().useState({
                                    copywriting: "",
                                    buttonType: "",
                                    discountPercent: null
                                }), 2),
                                L = E[0],
                                x = E[1],
                                S = function() {
                                    var e = Kt(Yt().mark((function e() {
                                        var t, o, r, n, a, i, s, c;
                                        return Yt().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, Pt(k);
                                                case 2:
                                                    return r = e.sent, n = Zt(Zt({}, null == r ? void 0 : r.data), null !== (t = null == r || null === (o = r.data) || void 0 === o ? void 0 : o.activity) && void 0 !== t ? t : {}), a = "", i = "", s = n.discountPercent, (c = n.favorType) ? ["try", "try_discount"].includes(c) ? 0 === n.vipStatus && (a = "toolsHeader_btn_free", i = "try_free") : "discount" === c && s && (n.discount_cn = s / 10, n.discount_en = 100 - s, n.discount_jp = (100 - s) / 10, 1 === n.vipStatus ? (a = "toolsHeader_btn_free_discount_pro+", i = "upgrade_pro+") : 0 === n.vipStatus && (a = "toolsHeader_btn_free_discount", i = "upgrade_pro")) : 0 === n.vipStatus && (a = "toolsHeader_btn_upgrade_pro", i = "upgrade_pro"), e.abrupt("return", {
                                                        copywriting: a,
                                                        discountPercent: s,
                                                        buttonType: i,
                                                        paymentActivity: n
                                                    });
                                                case 10:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }();
                            return (0, e.useEffect)((function() {
                                Kt(Yt().mark((function e() {
                                    var t;
                                    return Yt().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!i || !i.fotorToken) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.next = 3, S();
                                            case 3:
                                                t = e.sent, x(t);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            }), [null == i ? void 0 : i.fotorToken, c]), L.buttonType ? t().createElement("button", {
                                className: s(Ve.toolsAdButton, "try_free" === L.buttonType || "upgrade_pro" === L.buttonType ? Ve.toolsAdButton_try : Ve.toolsAdButton_upgrade, _ && _),
                                onClick: function() {
                                    var e = Zt({
                                        project_type: y,
                                        position: b
                                    }, f);
                                    ! function(e) {
                                        Fe(e, k)
                                    }((function() {
                                        window.Payment.showPayment((function(e) {
                                            "success" === e.type && (S().then((function(e) {
                                                x(e)
                                            })), h && h()), d && d({
                                                type: "payment",
                                                res: e
                                            })
                                        }), 0, m || "other", "", "", e, l)
                                    }))
                                }
                            }, v && t().createElement("span", {
                                className: Ve.icon,
                                dangerouslySetInnerHTML: {
                                    __html: "try_free" === L.buttonType || "upgrade_pro" === L.buttonType ? et() : ot()
                                }
                            }), t().createElement("span", null, function(e, t) {
                                var o = g[e];
                                if (o && "[object Object]" === Object.prototype.toString.call(t))
                                    for (var r in t) o = o.replace(new RegExp("{".concat(r, "}"), "g"), t[r]);
                                return o
                            }(L.copywriting, {
                                discount_cn: null == L || null === (r = L.paymentActivity) || void 0 === r ? void 0 : r.discount_cn,
                                discount_en: null == L || null === (n = L.paymentActivity) || void 0 === n ? void 0 : n.discount_en,
                                discount_jp: null == L || null === (a = L.paymentActivity) || void 0 === a ? void 0 : a.discount_jp
                            }))) : null
                        },
                        no = (0, e.forwardRef)((function(o, r) {
                            var n = o.credits,
                                a = o.languageData,
                                i = $t(t().useState(!1), 2),
                                c = i[0],
                                u = i[1],
                                l = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                                    (0, e.useEffect)((function() {
                                        return document.addEventListener("click", o),
                                            function() {
                                                document.removeEventListener("click", o)
                                            }
                                    }), []);
                                    var o = function() {
                                        t && t()
                                    };
                                    return {
                                        clickToggle: function(e, t) {
                                            e.nativeEvent.stopImmediatePropagation(), t && t()
                                        }
                                    }
                                }((function() {
                                    u(!1)
                                })).clickToggle;
                            return (0, e.useImperativeHandle)(r, (function() {
                                return {
                                    show: c
                                }
                            })), t().createElement("div", {
                                className: Ve.toolsHeader_credits_container
                            }, t().createElement("span", {
                                className: Ve.icon,
                                dangerouslySetInnerHTML: {
                                    __html: nt()
                                }
                            }), t().createElement("span", null, null == a ? void 0 : a.toolsHeader_usermenu_credits_name, n), t().createElement("div", {
                                className: Ve.toolsHeader_credit_help
                            }, t().createElement("span", {
                                className: Ve.help_icon,
                                onClick: function(e) {
                                    return l(e, (function() {
                                        u(!c)
                                    }))
                                },
                                dangerouslySetInnerHTML: {
                                    __html: it()
                                }
                            }), t().createElement("div", {
                                className: s(Ve.toolsHeader_credits_message, c && Ve.toolsHeader_credits_message_show)
                            }, null == a ? void 0 : a.toolsHeader_usermenu_credits_popover)))
                        }));
                    const ao = to,
                        io = {
                            de_DE: {
                                login_header_sign_in: "Einloggen",
                                login_header_sign_up: "Registrieren"
                            },
                            en_US: {
                                login_header_sign_in: "Sign in",
                                login_header_sign_up: "Sign up"
                            },
                            es_ES: {
                                login_header_sign_in: "Iniciar sesi\xf3n",
                                login_header_sign_up: "Reg\xedstrate"
                            },
                            fr_FR: {
                                login_header_sign_in: "Se Connecter",
                                login_header_sign_up: "Inscrivez-vous"
                            },
                            id_ID: {
                                login_header_sign_in: "Masuk",
                                login_header_sign_up: "Mendaftar"
                            },
                            it_IT: {
                                login_header_sign_in: "Accedi",
                                login_header_sign_up: "Iscriviti"
                            },
                            ja_JP: {
                                login_header_sign_in: "\u30ed\u30b0\u30a4\u30f3",
                                login_header_sign_up: "\u767b\u9332"
                            },
                            nl_NL: {
                                login_header_sign_in: "Aanmelden",
                                login_header_sign_up: "Registreren"
                            },
                            pl_PL: {
                                login_header_sign_in: "Zaloguj si\u0119",
                                login_header_sign_up: "Zarejestruj si\u0119"
                            },
                            pt_BR: {
                                login_header_sign_in: "Entrar",
                                login_header_sign_up: "Registrar-se"
                            },
                            ru_RU: {
                                login_header_sign_in: "\u0432\u043e\u0439\u0442\u0438",
                                login_header_sign_up: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"
                            },
                            th_TH: {
                                login_header_sign_in: "\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a",
                                login_header_sign_up: "\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"
                            },
                            tr_TR: {
                                login_header_sign_in: "Giri\u015f yap",
                                login_header_sign_up: "Kaydol"
                            },
                            vi_VN: {
                                login_header_sign_in: "\u0110\u0103ng nh\u1eadp",
                                login_header_sign_up: "\u0110\u0103ng k\xfd"
                            },
                            zh_CN: {
                                login_header_sign_in: "\u767b\u5f55",
                                login_header_sign_up: "\u6ce8\u518c"
                            },
                            zh_TW: {
                                login_header_sign_in: "\u767b\u9304",
                                login_header_sign_up: "\u8a3b\u518a"
                            }
                        };

                    function so(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var r, n, a = [],
                                    i = !0,
                                    s = !1;
                                try {
                                    for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, t) || co(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function co(e, t) {
                        if (e) {
                            if ("string" == typeof e) return uo(e, t);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? uo(e, t) : void 0
                        }
                    }

                    function uo(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }
                    var lo = function(e) {
                        var o = e.vipStatus,
                            r = e.userInfo,
                            n = e.userInfoStyle,
                            a = e.className,
                            i = e.showVipMark,
                            s = void 0 !== i && i;
                        return t().createElement("div", {
                            className: "user-info-wraper".concat(a ? " " + a : "")
                        }, t().createElement("div", {
                            className: "user-info",
                            style: n
                        }, t().createElement("div", {
                            className: "avatar-container".concat(s ? " " + o : "")
                        }, t().createElement("div", {
                            className: "avatar-border"
                        }, t().createElement("img", {
                            className: "avatar",
                            src: r && ze({
                                src: r.headerUrl,
                                width: 80,
                                height: 80
                            }),
                            alt: r && r.nickName
                        }))), t().createElement("div", {
                            className: "info-swiper"
                        }, t().createElement("div", null, t().createElement("p", null, r && r.nickName), "vip" === o && t().createElement("img", {
                            src: c,
                            alt: c
                        }), "svip" === o && t().createElement("img", {
                            src: u,
                            alt: u
                        })), t().createElement("p", null, r && r.email))))
                    };

                    function po(o) {
                        var r = o.callback,
                            n = o.onUnReadNum,
                            a = o.menuClassName,
                            i = o.menuItem,
                            f = void 0 === i ? [] : i,
                            d = o.customUserMenuData,
                            m = void 0 === d ? [] : d,
                            h = o.lang,
                            g = void 0 === h ? "en_US" : h,
                            w = o.loginSensorsData,
                            v = o.signUpSensorData,
                            _ = o.noLanguage,
                            b = o.onClickItem,
                            k = o.showLoginType,
                            E = void 0 === k ? "login" : k,
                            L = o.env,
                            x = void 0 === L ? "production" : L,
                            S = o.isCN,
                            A = void 0 !== S && S,
                            T = o.projectType,
                            C = void 0 === T ? "" : T,
                            j = o.themeStyle,
                            O = void 0 !== j && j,
                            N = o.theme,
                            I = void 0 === N ? "" : N,
                            M = o.isShowSignUp,
                            P = void 0 === M || M,
                            D = o.userMenuTopExcessHeight,
                            R = o.displayLanguageMenu,
                            U = void 0 === R ? ["en", "es", "pt", "ru", "fr", "de", "cn", "tw", "jp"] : R,
                            H = o.ShowUpgradeButton,
                            F = void 0 === H || H,
                            z = o.paymentOther,
                            Q = o.paymentSensorData,
                            G = o.paymentDisplayStand,
                            W = o.watchUser,
                            J = o.signIn,
                            Y = o.signUp,
                            V = (0, e.useRef)(),
                            Z = so(t().useState(g), 2),
                            q = Z[0],
                            K = Z[1],
                            $ = so(t().useState(!1), 2),
                            ee = $[0],
                            te = $[1],
                            oe = so(t().useState(!1), 2),
                            re = oe[0],
                            ne = oe[1],
                            ae = so(t().useState(!1), 2),
                            ie = ae[0],
                            se = ae[1],
                            ce = Wt({
                                lang: q,
                                env: x
                            }),
                            ue = t().useMemo((function() {
                                return io[q]
                            }), [q]),
                            le = A ? be({
                                env: x,
                                showLoginType: E,
                                callback: r,
                                loginSensorsData: w,
                                signUpSensorData: v,
                                onUnReadNum: n,
                                os: X,
                                projectType: C,
                                customUserMenuData: m
                            }) : De({
                                env: x,
                                showLoginType: E,
                                callback: r,
                                loginSensorsData: w,
                                signUpSensorData: v,
                                onUnReadNum: n,
                                os: X,
                                language: q,
                                menuItem: f,
                                projectType: C,
                                customUserMenuData: m,
                                below750: ie,
                                regInviteToast: null == ce ? void 0 : ce.header_invite_toast,
                                watchUser: W
                            }),
                            pe = le.showLoginPopup,
                            fe = le.showSignUpPopup,
                            de = le.isLogin,
                            me = le.vipStatus,
                            he = le.userInfo,
                            ge = le.unReadNum,
                            we = le.logout,
                            ve = le.showTip,
                            _e = A ? function(e) {
                                var o = e.projectType,
                                    r = e.callback,
                                    n = e.unReadNum,
                                    a = e.userInfo,
                                    i = e.logout,
                                    s = e.setShowLoginedMenu,
                                    c = e.vipStatus,
                                    u = e.AvatarNav,
                                    l = e.setShowMenu;
                                return {
                                    languageMenu: [],
                                    menuItemData: [{
                                        title: "\u7f16\u8f91",
                                        url: "/editor/"
                                    }, {
                                        title: "\u8bbe\u8ba1",
                                        item: [{
                                            title: "\u4e3a\u60a8\u63a8\u8350",
                                            url: "/design/"
                                        }, {
                                            title: "\u65b0\u5efa\u8bbe\u8ba1",
                                            url: "/design/create/"
                                        }, {
                                            title: "\u6211\u7684\u8bbe\u8ba1",
                                            url: "/design/all-designs/"
                                        }, {
                                            title: "\u6211\u7684\u7d20\u6750",
                                            url: "/design/my-cloud/"
                                        }, {
                                            title: "\u6a21\u677f\u4e2d\u5fc3",
                                            url: "/design/template/"
                                        }, {
                                            title: "\u56de\u6536\u7ad9",
                                            url: "/design/trash/"
                                        }]
                                    }],
                                    userMenuData: [{
                                        title: t().createElement(u, {
                                            vipStatus: c,
                                            userInfo: a,
                                            className: Ve.toolsHeader_avatar_nav,
                                            userInfoStyle: {
                                                borderBottom: "none",
                                                padding: "0"
                                            }
                                        }),
                                        labelAttr: {
                                            className: "first-menu custom-avatar-nav"
                                        }
                                    }, {
                                        title: "\u6211\u7684\u8d26\u53f7",
                                        url: "/account",
                                        key: "myAccount",
                                        onClick: function(e) {
                                            e.preventDefault(), B.userMenu("account", o), r && r({
                                                type: "link",
                                                value: "account"
                                            }), window && window.open("".concat(window.location.origin, "/account"), "_blank")
                                        },
                                        labelAttr: {
                                            className: "first-menu custom-menu"
                                        }
                                    }, {
                                        title: "\u6211\u7684\u8bbe\u8ba1",
                                        url: "/cloud/all-projects/",
                                        key: "myProjects",
                                        onClick: function(e) {
                                            e.preventDefault(), B.userMenu("projects", o), r && r({
                                                type: "link",
                                                value: "projects"
                                            }), window && window.open("".concat(window.location.origin, "/cloud/all-projects/"), "_blank")
                                        },
                                        labelAttr: {
                                            className: "first-menu custom-menu"
                                        }
                                    }, {
                                        title: "\u6d88\u606f\u4e2d\u5fc3",
                                        url: "/account/message-center",
                                        key: "myMessage",
                                        onClick: function(e) {
                                            e.preventDefault(), B.userMenu("message", o), r && r({
                                                type: "link",
                                                value: "message"
                                            }), window && window.open("".concat(window.location.origin, "/account/message-center"), "_blank")
                                        },
                                        labelAttr: {
                                            className: "first-menu custom-menu"
                                        },
                                        unReadNum: n
                                    }, {
                                        title: "\u8ba2\u5355\u548c\u53d1\u7968",
                                        url: "/User/order/index.html#/print/all/page/1",
                                        key: "orderAndTicket",
                                        onClick: function(e) {
                                            e.preventDefault(), B.userMenu("orders_and_Invoices", o), r && r({
                                                type: "link",
                                                value: "account"
                                            }), window && window.open("".concat(window.location.origin, "/User/order/index.html#/print/all/page/1"), "_blank")
                                        },
                                        labelAttr: {
                                            className: "first-menu custom-menu"
                                        }
                                    }, function() {
                                        if (a) return a.superFotor ? {
                                            title: "\u6211\u7684\u4f9b\u7a3f\u4e2d\u5fc3",
                                            url: "/design/designer-admin",
                                            onClick: function(e) {
                                                e.preventDefault(), B.userMenu("designer_admin", o), r && r({
                                                    type: "link",
                                                    value: "account"
                                                }), window && window.open("".concat(window.location.origin, "/design/designer-admin"), "_blank")
                                            },
                                            labelAttr: {
                                                className: "first-menu custom-menu"
                                            }
                                        } : a.isDesigner ? {
                                            title: "\u6211\u7684\u4f9b\u7a3f\u4e2d\u5fc3",
                                            url: "/design/designer",
                                            onClick: function(e) {
                                                e.preventDefault(), B.userMenu("designer", o), r && r({
                                                    type: "link",
                                                    value: "account"
                                                }), window && window.open("".concat(window.location.origin, "/design/designer"), "_blank")
                                            },
                                            labelAttr: {
                                                className: "first-menu custom-menu"
                                            }
                                        } : {
                                            title: "\u7533\u8bf7\u6210\u4e3a\u8bbe\u8ba1\u5e08",
                                            url: "/designer.html#/i",
                                            onClick: function(e) {
                                                e.preventDefault(), B.userMenu("apply_designer", o), r && r({
                                                    type: "link",
                                                    value: "account"
                                                }), window && window.open("".concat(window.location.origin, "/designer.html#/i"), "_blank")
                                            },
                                            labelAttr: {
                                                className: "first-menu custom-menu"
                                            }
                                        }
                                    }(), {
                                        title: "\u9000\u51fa",
                                        key: "signOut",
                                        onClick: function() {
                                            i((function(e) {
                                                s(!1), l(!1), r && r(e)
                                            }))
                                        },
                                        labelAttr: {
                                            className: "first-menu custom-menu"
                                        }
                                    }]
                                }
                            }({
                                onClickItem: b,
                                isCN: A,
                                menuItem: f,
                                projectType: C,
                                callback: r,
                                unReadNum: ge,
                                userInfo: he,
                                logout: we,
                                language: q,
                                customUserMenuData: m,
                                setShowLoginedMenu: ne,
                                vipStatus: me,
                                AvatarNav: lo,
                                setShowMenu: te
                            }) : Ye({
                                onClickItem: b,
                                isCN: A,
                                menuItem: f,
                                projectType: C,
                                callback: r,
                                unReadNum: ge,
                                userInfo: he,
                                logout: we,
                                language: q,
                                customUserMenuData: m,
                                setShowLoginedMenu: ne,
                                vipStatus: me,
                                AvatarNav: lo,
                                below750: ie,
                                setShowMenu: te,
                                languageData: ce,
                                env: x,
                                displayLanguageMenu: U,
                                ShowUpgradeButton: F,
                                paymentDisplayStand: G,
                                paymentSensorData: Q,
                                paymentOther: z
                            }),
                            ye = _e.languageMenu,
                            ke = _e.userMenuData,
                            Ee = _e.menuItemData,
                            Le = t().useMemo((function() {
                                return _ || A ? Ee : [].concat(function(e) {
                                    return function(e) {
                                        if (Array.isArray(e)) return uo(e)
                                    }(e) || function(e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                    }(e) || co(e) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }(Ee), [{
                                    name: null == ce ? void 0 : ce.login_header_language,
                                    item: ye,
                                    labelAttr: {
                                        className: "menuItem-wraper first-menu custom-menu"
                                    }
                                }])
                            }), [_, A, Ee]);
                        (0, e.useEffect)((function() {
                            return Ue.getInstance().addEventListener("update-login-header-language", Se), window.addEventListener("resize", xe), se(window.innerWidth < 750), r && r({
                                    type: "rendered"
                                }),
                                function() {
                                    Ue.getInstance().removeEventListener("update-login-header-language", Se), window.removeEventListener("resize", xe)
                                }
                        }), []), (0, e.useEffect)((function() {
                            K(g)
                        }), [g]);
                        var xe = function() {
                                se(window.innerWidth < 750)
                            },
                            Se = function(e) {
                                K(e)
                            };
                        return t().createElement("div", {
                            className: "login-header"
                        }, t().createElement("div", {
                            className: "logined-container"
                        }, 1 === de && t().createElement("div", {
                            className: "avatar-container",
                            style: {
                                backgroundImage: "".concat("vip" === me ? "url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABHNCSVQICAgIfAhkiAAAC7pJREFUeJztnX9sVNeVxz/nzZgf8kRraY2yCK9iYguqFYmo3N1NAhEDoaQVm2arJsFJm02aeLepYLdJAGm1bVcjtQ3aAmlXhS2RnDT0h0J+0FQlbLoJJE4bCGlwQ5tqVSwjoDViSazIVUyxPfPud/94M+P3xjP+gfHM2OH7B2Pue3PfeV+fc++55557bFQQOvCpK6mpaQF3DWIxohGYj1w9kMBpNhLAIFI/ohfpLOgUzo7j++/g0p1268FzlXoHK+fD9D9311I7cBNya4Ek0iIEWZKCz9z/S7UJINwGoC4cHXjsp8YdtJtfOl+udyoLgTqybg2+uw9pLZCIkFJIRoS4EUSNo039SPvBnrBPv/zSVL/blBGo1z91BbE5bYj1oKbRtWiUtnFrYpE2dALndlIz1G63HvpgKt7zkhOoX99dy8DgBhwbgXljvjgcQ+4IjhPIuvHT3biafub4/bZyXy+A9t1STzydwI8l8FwzjmaMJpy7DrG0pHbmNVzv4bSdwVk77B8urXlfUgL11rpWfG0FaxjFBHuRnsbxAuiIrfxJ36Se+Xyyjtis5Th9AliHU/0o2tmD2GytHXsm+ap5XBICdeiuq4j57RirS5hgBrQHaTeZ9ztsZUfmUjx3hByvJuO8H0ti3IOjFSlefAjgAEq32WcPn57sMydNoN5svR/TNkRdEfPpw2k3GW2zlT/umeyzJiTX3mQDvrcJdA9S3QhLcPRhbLLP/vzxyTznognU4dvnUhN7FPFAEVPJ4PQY6cxXJmuik4W+l6xjDl/H9AVEfOSYrF3McQ/bHW9cuJj+L4pAHf3cfJy/D9Qy0m/jAEo/ZMue/+3F9D1V0J7kEqTv4JQs4gJ14nm32N2/ODvRfidMoI6ua0L2MmJhgZuRQW6z3fDctyfaZzmhH974ILA1GB8J/fJ1Euzjdu/hExPpb0IE6s11i4h5r+C0oGCm68bpdlv27LGJ9Fcp6Ec3LMW3ZxHNBS7VGdL+KvunX3aNt69xE6ij65rAew3HggKf6xAD+oStfLZ/4q9SOWhnMkFt+megZQX+6Rky6RX2hc5xaaI3rocd/dz8rNkuGP6NAdJeBt5NTjfyAGx9Rz+napKIvUFLXiEW4MVe1mMt88fTz5gE6vDtc8HtA1sYmcEc/8nAu61T5dOVA5bqyHB6Vityj0XdHBZisX165vq5Y/UxtgbW1DyK1FLg3+1l8Nym6UxeDpbqyPD7uRuQCjWxhffTj475/dEu6q277ge1Fzighxg4l5wJ5IWhVDLOgvMdyKJjIrTZA0dLOtslCdSv7roKX8cQdaFJo5sL7qPTccwbD7TzrxLUJN5Gag5ZXB/OLbUNbxdd9pU2YV/tkCMPEBk8d/tMJQ/A1v9vP447A5+W3HBVh9Fe6jtFCdSv7moFVhdMGpvtb6aHnzcZ2AO/PIpjc242ySrPau34aGvR+wsb9Ou7axnK/A6pIeQbHbDrnv74FMpdddB/tfwCaXlotdLDoPuIbf5NJJ44UgPT/gZEQ7abYInm81A5hK4qmH0RkclrIjQw2zYU3hYhUL+77wrkNkZWGvCYLXu6qgID5YB98ehvQY8XRJo26j8WXxG+L6qBf/xTG2JefqWB+rgw9JWySV1tSOtfkfrySijNo2ZWW/iWKIEe6yMRFqfdlY7nVRL20LE+xO7I8tVYH74nT6COrluDo2l49lEGz99WToGrEua2ITKhLdgmPbpkTe7ysAY6u68gtLPHritvGL4aYf/ymx5wwSbUsEt3X+66B1nXxWltwYJ6d/nFrVKI3cM+MYDWauu1tZDTwKH0TeQyBoIv9DLwbkclZK1K/PHPO5B68wyKBM6/CXIE+lqbvzmw9R/NtGDBZGCpjgywNxQHBQs4y42ByYiKOn5WGVGrGi+EhjdwSgJ4OnLnlfksqRyDmfSRCglZvfDirwc/5ElcpG8sudIDvyVyQRz7MPt+pRD4hDoWybmxoRYPcU1BGsZl7SsFcSQSpTG7Jg4sjqw+fCa0L/qhgtwJsLCrtziOU2No9QFGd+UkrHI468YiW6CNHmh+xIH23WUCS0E55cqTOD+Ooz7UAGjGhuwnDU/9BWly9R5GIriaI9G/TGApDLr+yHyBEh7KHiXIXsil1V7GSFiqqzcyX6DZ8QIX5jLGQjTgggc2OHxR6NVb6isjWfVDqca/CJkviEEPuf5IgiSxRKUEnAaYAxCy2n4PWS8hUsEuE1gSsUQkIoN6PdDZSCTaV3NlhaxixGjOr4MBnJ2N4zgFhEzYNVVCtmkBR8BNTtk8TsUxdzy0bQfisgaWQi4lOAfHcQ/xTsHUfF1lpJsOsICb3KTr/Hc8nDoL0v6X6vm/r6uonFUIpRrrQEujkXuv07PVPz0HdEUmkrlDl7VwBGLJgkVHlz1y8lx2T0QdUTO2taW6+dBCujmUtQpOHZDbVHJuf4GH3apXk/GyC1mlUIo4cFvESs32Q45ApQ8C4VBNPedrk5USuPpwdRJRH3Kg+xn400HIEmg3v3Qeuf0RFTXdUxFZqxHSPREHWrbftp07D+HcGC/2RERF5Vr1359sqIC4VQWlmhsQQXpv3nz9J3LX8wTamn0vIU6E/ME4zm0ss7zVB99tJHxMFk7Y1/+QL2YRzQ+U25n9Ievn6F49n/zQ+oRZ3+/eqJ+c4yhAlMDMrHak94bN2OrwZn+tfCJXGXxvC1JWgQTiPTIXIkceIgTarT/9ALQ96tK4B/TjNUvKInAVQf/WtAQUpPMOa+B2+2ZvpHzKyCz9Gu1A9ISWLHHMfasMMlcXPPddckUrAovsYWhwx4jbChuCsknaHHFpxGrtXfXgFItcNdBXGx+E3BkRgn9Mm3OuSxilz8r9ZM3LSKtD6pvB9//a7uiY0aeV9OW//BgWfwMpHnLrDtiW3xc9aDTKWblM23CKv0CKY96zeiY5Y0P+Ss1L4HlPQYS8PobSbaW+U5JA+8wrp5E2DXcESM1gL87EdbJSxMkkXkQWPqkJuE22/WzJAj2jHri2zxx8HGlXJDNTWs67PKXUzCExIG/hU8G4F0nd2GVbekYtzDP2iXV34WGgM6KJTrfxEbd1JpCoFHH8xu+AbotMGtDJoHt4rO+Pq2qH9t44n0zsEGJh0JDbR9ZzdMXuzCZhTzsE5C18CmXJGx73TmK2zB45PWYhnvGXPdmzqgnca0gLomqu15kd/6Td0TGtkpKUmpfAJV7EaXnQkPc2zpDWCtv6h0tX9gTAWl85AZlVwJmIjwjLGUi/re/dsHQiL1BJ6MtXfwyXeBsxkjz5q8ZLHkyAQABrfb0LS69AnCzYyWvGs7e0+/ovTaS/SkD/fvWXiOkNRGi2BdBJ0lphW86Mu2oRXGzxsR/cOB/TPkRLwawFqAPf/tnaDlfVGWOlmpYgfTd6Ch2ywnciu2U8Y14hLr783TPXz2XAy5a/i2yLgiMD7CI28FX7/LHKlr9LNdaBtwXRRrjgGOTG8F1ccA/bt3rKV/4uIuCTy+5H2gbhIod5AftwehLP227/+GZ5CzCmmhuAjdl43rBs4RWGY5NtOV2ZAowRYdtvuArPtSNWBw2iwLSDEqD4T/J/f/baVLk9ShHHFq3A3L0oVAI06qKAdAC8NvvGycqXAA1D7X/bSlCbr2GkqeQ+1Qt6Dl8v4HPIHpqciSvVWEdNzTLE3+G4DVRfxBKyz3c9mG22r52qriK0Yej719YyMGcDaCMqKIMc0YL85zHQEUQ3znWD140b6gf/vG3qCsogb1tUD7FaMpYAvxlZM07NoNJlkIGQJbyHtJ2BCzuKhaQmg6krxP34sisYGmzDWI+KFOIe+ZKUMLfSbaX6yLcRFOIemt1u3zw+PQpxF4N2tqwBBaXgRaK4JhY19yJtlNbmoK0f2A/uCUudnL6l4ItBW6+tZU7sJtBapCSORWNr0bi0swtnHaD99H9w8FKb6WgoK4GF0LeXXIlvLcA1GIuRGlH2z2EEmjo7G/0ZJEg96UWcRZxCHAe9w4V0pz1ysmJ/DuP/ATc2yAHuyltCAAAAAElFTkSuQmCC", ")") : "svip" === me ? "url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABHNCSVQICAgIfAhkiAAACelJREFUeJztnX1sVeUdxz+/c2+BSnFNrGNEEiU0YBi6Gtyi0oxbQXRB/5jDrf5hYNCo47W87U1dbrIXk1HeRBhsSGTG4aImW4CgArY6QLJJQDBOWAmawJixJghFgd7zfPdHXzjn3F7b0vb29uWTNOn5Pc95zvN873Oe+5zfeZ7fNXqQvzys4SmfCXLcIhjrHDcBI5yjSKJAYrATSFySqHdQ58QZiY8Ex/wURy86Dj6xxz7pqTZYNi/250c0NK+BycA0JxJOjFGjQDQJRWvHbaUhjgtqfJ8dXh57lr1hF7LVpqwI+PIMTVWKWRLTXGPP6rBI7Ulr+r9esANj8y/etDe6u23dJuDfZ2mY71MhMdc5Rrez8V0hYOMfIHHCOdYNcmz62T473x3t7HIBX39EQ7+MMU9iicT1bTUYOCzHgRScMFHrO2obRL3nU//YNqsD2PiAilwDBZdjFHiOYgfFOEY7cYcTJZkEDBx/KrHi/DmerTrStbd3lwq4fbbKfbFcjpEZewzUOcdfnbE99SUHfvw3O9uZa65KqNDFKPXhPsSPnChqRcDG/x2nDJYl99tLXdTkrhFwx2zdKGOTHFNau+UkUoKXnGPL1/9LTVmNpbriulGSCcUHQ8JghoNyJ+KRL5vmuu12RsVv99vHnb1mpwXcWaHZDqokCtN6HJx1Yov5VP3gRTvV2Wt1hGRCI/McSx3MkCiMCIgcZ32x9Ol/2nOduc5VC7h/kfLP1bNS8Hgr409Kjo0ynvz+8527RTtLMqFCS/EbwWOIuIt8yE5suBRj8ap37MurKf+qBHztUY3wPLY5x4RorwN2NxiLHnzO3r+asruL5F0aj7HWiUTaB+446IkHfnfQznS03A4LuOdRjXYxdskxqpVet+z+zba6o2Vmk6fuVCWwPDo+SpyUuGf5QTvRkfI6JODuuRpjjjeduCHyKdbKeGjan+xwh1rTQ/zyLpWY42WJ4kg7Tvsp7l75nh1vb1ntFnDPfI02n7eaxQtceN/5PO774Xqrv7rm9AzJcSq4PIzXJCZGpjunPWNSe3ui155Mb1dqhOfYJbghkvTqkP+Q6G3iASQ/sPpB+SQkXo0k3eAcuyonaER7ymlTwP2LlC+fbcCoSNKawccp7645XTZI1lhqyFDKERuDdsEoUmxbdKfy2yqjTQEbGlgpMSFifjVvBEt7s3jNJGsslV/APBHuiWZMcF+wsq3zv3IM3LtQs33Hpshsfp83nERZsveLFySZUPzCeWqcmBh5iqpYcyTzZDujgPvm6kYX47ALPGEIak3cVtYLx7z2MGecCvKHcKj527mp05z1GyhZ9+/WH/sy3sKKsQkobDEYKRMP9VXxANZ/YPVOPGwQvLsKvTibMp3TqoAHFqkcY0rIKJaVre8d87zOsOqQvSuxLGKesuCbKm8tf9ot/PpSDR2W4kOnRpeUExjs/u5au6dbapyjLC7RP5woDcwRT33ucfMLEX9iWg+81jFPMLL52IyUbyzKRqVziZTjJ4Rv5ZHX+syL5gsJuPenGoZYErRJbCx7JrccA9ngmSP2viD87SuWzBqrYUFTSMBYAxXA9S0G46yL8WQ31jOnMePnQIs7Tsb1Q+JUBPOEBPQ85oZKEFvKVvesP68nWX3YzgJbgjYprFGLgO8u01SJ0S0pRiolqrq7krmOoCoyrRk952ZNbT5oETDlmBU80YyXytZm1w2fi6w9YqeA0Eso365o5QG8t1RDDaYFM7lI1+3PKKKFwbRHbtVQaBLwssdkoCCQoy71NWqyWMec5rrrqDFRFzAVFFxiMjTfwgr3PsSLfc1Z0BmSNZZyFvbWOGvUzAOQSAQTzXgta7XrPWwPHohGzbwDCzUcGBNMvCQOZK9evYO8OHsjpjEVozTciw0KO0sNDvfnuV8mmuaEYWdKHhM8M24J2sRA78tI5M404xZPjrGhPEaH3ov2M0LaGIz1zLiJsLU2mzXqTUhp2tzkAaHXdxoQMCMiTZsRHlAUtHgp+qzLvtMorI2gyMMCTyDAxdiAgJlwLk2bAg8xOGgpW2F1DNAqfzyeps3gdi3tGCAzHsaloKF6iYoyZe7vzBmnb0RMl7zowDjED4+JA1zBOYZETPUehNw0uPiAgBmJfOEa1HlAaFmrieKsVqoXYaRpc8aT+Cho8VzgvcgAIczStPnIM49jQYvSVR7gCiFtBMc8iaNBo8Ed2a1TL8LC2kgc9fzLHAwZoaS6UoUMEKKyRIVAScjYwEHvjjX2CRBalT7YBnphlJQffu0BHN900j7xAMzS3sBNY4Aw4t7godGomdd0tCOcl/LqpOLZqluuk0wobmJ60OapUTMPYJBjDwSeSERR/PO0Lttv+ewzErKQ26++fjB7oEnAb1XZBRHuhR7MyGIdcxqLaCHY0bzQssUbE/fYHMokyqvnayT9nPm3aiQQWt4b0xWtWgS8fbm9YcEXSiKe54UXW/ZHPFgiCH4fnFj/4ZVgFiF/oHOsCx4LZvbnOWFliQoFM4M2s7BGIQH9PDYBn7YYRGHM59fdWMecRuJpAls9THx6MRXe8hASsPT3dh5jRagQ4/HqBRrfrTXNQRbcqvFGeDkvxorNx8LhU9Jc+uc8njW4srBSxE2s6q6K5iqexx8Ij32nzsV4Ni1f1HBvlV3wLLLRREypnqvKLq9ljrK4RJUGpUGbJ5ZF94jAV+yV27tAuwRTAhE4Ug2Ob0/t47uVFt2m2z14pzkkQHOYlLVHW99olPGtnPlUEFjij4jHjZer56jPuvznjFOBZ2yNTFvOulRkLAyQUcCJ6+xjM5YGbRLFPuzsi8/JyYTi1+Szk4jT1GBppp2a0MaG69I19hxiQ8goSv3/sbUviZhMKP5FPVuj455gw1ftFYZ27FjPy2OxWZrTdfrlMyyvTvR+EZMJxS/WsxbC3haJg941LG7r/HZF7Xi7UiP8BvY5MSq0mxteGXSMh3vr1v9kQvFLX7DViemRXfknfY+Jq9sRiKfzYU9g7/k43+ttkTuawp7sVHhLa/eEPQGYvNZOOONug9OhBFFacJlDO2aqJMOpOccT39HtDddyiMiYB5yWz90diV7UocVFU9bZcXwmYZyMJBUT51/bZmthR8rrCX51pxZ6Md4h/fXtSWBSR6IWQXcEHxM1DSnmP/hCbu0xTt6l8TL+IFHao8HHmmkr/J1zbMB4KhfC33k+TztRkTPh74K0FYBR8DwpVvREAMa4Y4lgZk4GYAzS3hCgiOeLTvNWd4YAzTcmOTFTvSUEaJB2BaEVdRiv4Nh+8SL7uiIIbSrORIP7nWN6rwxCG6TDYZDFYb9xB1Ctg1pP1KZEvd/AheYwyFUPqGiIz1BiFOBT7ESxHMV9LgxykIFA3F3IQCj4LmLgxwi6mL7wcxj/B0LHG1HHvahdAAAAAElFTkSuQmCC", ")") : "none"),
                                backgroundSize: "cover"
                            },
                            onMouseOver: function() {
                                !X().isMobile && !ie && te(!0), !X().isMobile && !ie && re && ne(!1)
                            },
                            onMouseOut: function() {
                                !X().isMobile && !ie && te(!1)
                            },
                            onClick: function(e) {
                                X().isMobile && ie ? (e.nativeEvent.stopImmediatePropagation(), ee && !re && te(!1), ne(!re)) : te(!ee)
                            }
                        }, t().createElement("div", {
                            className: "avatar-border"
                        }, t().createElement("img", {
                            className: "avatar",
                            src: he && ze({
                                src: he.headerUrl,
                                width: 80,
                                height: 80
                            }),
                            alt: he && he.nickName,
                            style: me ? {} : {
                                width: "40px",
                                height: "40px"
                            }
                        }), "vip" === me && t().createElement("img", {
                            src: c,
                            alt: c,
                            className: "pro"
                        }), "svip" === me && t().createElement("img", {
                            src: u,
                            alt: u,
                            className: "pro-plus"
                        }))), t().createElement("div", {
                            className: "menu-logo",
                            onClick: function() {
                                te(!ee)
                            }
                        }, t().createElement("img", {
                            src: ee ? p : l,
                            alt: "",
                            width: "16",
                            height: "14"
                        })), t().createElement("div", {
                            onMouseOver: function() {
                                !X().isMobile && he && te(!0)
                            },
                            onMouseOut: function() {
                                !X().isMobile && he && te(!1)
                            },
                            className: s("menu ".concat(ee ? "menu-show" : "menu-hide"), a && a),
                            style: 1 !== de ? {
                                transition: "none"
                            } : {},
                            ref: V
                        }, !ie && 1 === de && t().createElement("div", {
                            className: "pc-menu"
                        }, t().createElement(y, {
                            itemMenus: ke
                        })), ie && t().createElement("div", {
                            className: "mb-menu"
                        }, t().createElement(y, {
                            itemMenus: Le,
                            onNavClick: function(e) {
                                if (e) {
                                    var t = e.offsetTop;
                                    V.current.scrollTo({
                                        top: t,
                                        behavior: "smooth"
                                    })
                                }
                            }
                        }))), ie && 1 === de && t().createElement(oo, {
                            showMenu: re,
                            setShowMenu: ne,
                            topExcessHeight: D || 64,
                            className: "user-menu-modal",
                            onOutSide: function() {
                                ne(!1)
                            }
                        }, t().createElement(y, {
                            itemMenus: ke
                        }))), 2 === de && t().createElement("div", {
                            className: "button-group"
                        }, P && t().createElement("button", {
                            className: "".concat(O || "black" !== I ? "register-header-button" : "register-header-button register-header-button-black"),
                            onClick: function() {
                                fe()
                            }
                        }, Y || (null == ue ? void 0 : ue.login_header_sign_up)), t().createElement("button", {
                            className: "login-header-button",
                            onClick: function() {
                                pe()
                            }
                        }, J || (null == ue ? void 0 : ue.login_header_sign_in))), ve && (null == ce ? void 0 : ce.header_invite_toast) && t().createElement("div", {
                            className: "loginHeader-copy-tips ".concat(ve ? "loginHeader-copy-show-animate" : "")
                        }, t().createElement("span", null, null == ce ? void 0 : ce.header_invite_toast)))
                    }
                    var fo = function(e) {
                        var o = e.vipStatus,
                            r = e.userInfo,
                            n = e.createPayment,
                            a = e.languageData,
                            i = e.projectType,
                            s = e.callback,
                            c = e.env,
                            u = e.paymentDisplayStand,
                            l = e.paymentSensorData,
                            p = e.paymentOther,
                            f = t().useMemo((function() {
                                return o ? {
                                    title: a["UpgradeCardNav_".concat(o, "_title")] || "",
                                    desc: null == a ? void 0 : a.UpgradeCardNav_member_desc
                                } : {
                                    title: null == a ? void 0 : a.UpgradeCardNav_title,
                                    desc: null == a ? void 0 : a.UpgradeCardNav_desc
                                }
                            }), [o, a]);
                        return t().createElement("div", {
                            className: "upgrade-card-nav ".concat("svip" === o ? o + "_bg" : "bg")
                        }, t().createElement("div", {
                            className: "title ".concat(o)
                        }, o && t().createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: "vip" === o ? d() : h()
                            }
                        }), t().createElement("p", null, f.title)), t().createElement("p", {
                            className: "text"
                        }, f.desc), t().createElement(ro, {
                            env: c,
                            className: "upgrade-card-nav-button",
                            position: "loginHeader_upgrade_button",
                            paymentDisplayStand: u,
                            paymentSensorData: l,
                            paymentOther: p,
                            vipStatus: o,
                            userInfo: r,
                            callback: s,
                            projectType: i,
                            createPayment: n,
                            languageData: a,
                            showButtonIcon: !1
                        }))
                    };
                    const mo = "temp_words_title",
                        ho = "temp_words_item";

                    function go(e) {
                        return (go = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function wo() {
                        wo = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == go(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function vo(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function _o(e) {
                        return function() {
                            var t = this,
                                o = arguments;
                            return new Promise((function(r, n) {
                                var a = e.apply(t, o);

                                function i(e) {
                                    vo(a, r, n, i, s, "next", e)
                                }

                                function s(e) {
                                    vo(a, r, n, i, s, "throw", e)
                                }
                                i(void 0)
                            }))
                        }
                    }

                    function yo() {
                        return (yo = _o(wo().mark((function e(t, o) {
                            var r, n, a, i;
                            return wo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!window) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 3, ie("".concat(me[o].baseUrl, "/api/v1/app/resources/ends/templateTags/list"), {
                                            langEnv: t,
                                            sizeId: "all",
                                            pageNo: 1,
                                            pageSize: 9
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        return n = e.sent, a = (null == n || null === (r = n.data) || void 0 === r ? void 0 : r.list) || [], i = a.map((function(e) {
                                            return {
                                                name: e.name,
                                                sizeId: e.sizeId
                                            }
                                        })), e.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function bo() {
                        return (bo = _o(wo().mark((function e(t, o) {
                            var r;
                            return wo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!window) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 3, ie("".concat(me[o].baseUrl, "/api/app/recommend/temp-expandwords"), {
                                            search: t,
                                            size: 5
                                        }).catch((function(e) {
                                            return e
                                        }));
                                    case 3:
                                        if (!(r = e.sent)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", r.data);
                                    case 8:
                                        return e.abrupt("return", []);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function ko(t, o) {
                        var r = (0, e.useRef)(),
                            n = (0, e.useRef)();
                        return (0, e.useEffect)((function() {
                            n.current = t
                        }), [t]), (0, e.useEffect)((function() {
                            return function() {
                                clearTimeout(r.current)
                            }
                        }), []), (0, e.useMemo)((function() {
                            return function() {
                                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                clearTimeout(r.current), r.current = setTimeout((function() {
                                    n.current && n.current.apply(n, t)
                                }), o)
                            }
                        }), [o])
                    }

                    function Eo(e) {
                        return (Eo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function Lo(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Co(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || To(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function xo() {
                        xo = function() {
                            return e
                        };
                        var e = {},
                            t = Object.prototype,
                            o = t.hasOwnProperty,
                            r = Object.defineProperty || function(e, t, o) {
                                e[t] = o.value
                            },
                            n = "function" == typeof Symbol ? Symbol : {},
                            a = n.iterator || "@@iterator",
                            i = n.asyncIterator || "@@asyncIterator",
                            s = n.toStringTag || "@@toStringTag";

                        function c(e, t, o) {
                            return Object.defineProperty(e, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            c({}, "")
                        } catch (e) {
                            c = function(e, t, o) {
                                return e[t] = o
                            }
                        }

                        function u(e, t, o, n) {
                            var a = t && t.prototype instanceof f ? t : f,
                                i = Object.create(a.prototype),
                                s = new x(n || []);
                            return r(i, "_invoke", {
                                value: b(e, o, s)
                            }), i
                        }

                        function l(e, t, o) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, o)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = u;
                        var p = {};

                        function f() {}

                        function d() {}

                        function m() {}
                        var h = {};
                        c(h, a, (function() {
                            return this
                        }));
                        var g = Object.getPrototypeOf,
                            w = g && g(g(S([])));
                        w && w !== t && o.call(w, a) && (h = w);
                        var v = m.prototype = f.prototype = Object.create(h);

                        function _(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                c(e, t, (function(e) {
                                    return this._invoke(t, e)
                                }))
                            }))
                        }

                        function y(e, t) {
                            function n(r, a, i, s) {
                                var c = l(e[r], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        p = u.value;
                                    return p && "object" == Eo(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        n("next", e, i, s)
                                    }), (function(e) {
                                        n("throw", e, i, s)
                                    })) : t.resolve(p).then((function(e) {
                                        u.value = e, i(u)
                                    }), (function(e) {
                                        return n("throw", e, i, s)
                                    }))
                                }
                                s(c.arg)
                            }
                            var a;
                            r(this, "_invoke", {
                                value: function(e, o) {
                                    function r() {
                                        return new t((function(t, r) {
                                            n(e, o, t, r)
                                        }))
                                    }
                                    return a = a ? a.then(r, r) : r()
                                }
                            })
                        }

                        function b(e, t, o) {
                            var r = "suspendedStart";
                            return function(n, a) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === n) throw a;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                for (o.method = n, o.arg = a;;) {
                                    var i = o.delegate;
                                    if (i) {
                                        var s = k(i, o);
                                        if (s) {
                                            if (s === p) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === o.method) o.sent = o._sent = o.arg;
                                    else if ("throw" === o.method) {
                                        if ("suspendedStart" === r) throw r = "completed", o.arg;
                                        o.dispatchException(o.arg)
                                    } else "return" === o.method && o.abrupt("return", o.arg);
                                    r = "executing";
                                    var c = l(e, t, o);
                                    if ("normal" === c.type) {
                                        if (r = o.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                        return {
                                            value: c.arg,
                                            done: o.done
                                        }
                                    }
                                    "throw" === c.type && (r = "completed", o.method = "throw", o.arg = c.arg)
                                }
                            }
                        }

                        function k(e, t) {
                            var o = e.iterator[t.method];
                            if (void 0 === o) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return p;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = l(o, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                            var n = r.arg;
                            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                        }

                        function E(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function L(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(E, this), this.reset(!0)
                        }

                        function S(e) {
                            if (e) {
                                var t = e[a];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function t() {
                                            for (; ++r < e.length;)
                                                if (o.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = void 0, t.done = !0, t
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: A
                            }
                        }

                        function A() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return d.prototype = m, r(v, "constructor", {
                            value: m,
                            configurable: !0
                        }), r(m, "constructor", {
                            value: d,
                            configurable: !0
                        }), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, _(y.prototype), c(y.prototype, i, (function() {
                            return this
                        })), e.AsyncIterator = y, e.async = function(t, o, r, n, a) {
                            void 0 === a && (a = Promise);
                            var i = new y(u(t, o, r, n), a);
                            return e.isGeneratorFunction(o) ? i : i.next().then((function(e) {
                                return e.done ? e.value : i.next()
                            }))
                        }, _(v), c(v, s, "Generator"), c(v, a, (function() {
                            return this
                        })), c(v, "toString", (function() {
                            return "[object Generator]"
                        })), e.keys = function(e) {
                            var t = Object(e),
                                o = [];
                            for (var r in t) o.push(r);
                            return o.reverse(),
                                function e() {
                                    for (; o.length;) {
                                        var r = o.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = S, x.prototype = {
                            constructor: x,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e)
                                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;

                                function r(o, r) {
                                    return i.type = "throw", i.arg = e, t.next = o, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var a = this.tryEntries[n],
                                        i = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var s = o.call(a, "catchLoc"),
                                            c = o.call(a, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (s) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var a = n;
                                        break
                                    }
                                }
                                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                                var i = a ? a.completion : {};
                                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), p
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var o = this.tryEntries[t];
                                    if (o.tryLoc === e) {
                                        var r = o.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            L(o)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, o) {
                                return this.delegate = {
                                    iterator: S(e),
                                    resultName: t,
                                    nextLoc: o
                                }, "next" === this.method && (this.arg = void 0), p
                            }
                        }, e
                    }

                    function So(e, t, o, r, n, a, i) {
                        try {
                            var s = e[a](i),
                                c = s.value
                        } catch (e) {
                            return void o(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, n)
                    }

                    function Ao(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var r, n, a = [],
                                    i = !0,
                                    s = !1;
                                try {
                                    for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, t) || To(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function To(e, t) {
                        if (e) {
                            if ("string" == typeof e) return Co(e, t);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Co(e, t) : void 0
                        }
                    }

                    function Co(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }

                    function jo(o) {
                        var r = o.className,
                            n = o.env,
                            a = Ao((0, e.useState)(""), 2),
                            i = a[0],
                            c = a[1],
                            u = Ao((0, e.useState)([]), 2),
                            l = u[0],
                            p = u[1],
                            f = Ao((0, e.useState)(!1), 2),
                            d = f[0],
                            m = f[1],
                            h = Ao((0, e.useState)([]), 2),
                            g = h[0],
                            w = h[1],
                            v = Ao((0, e.useState)([]), 2),
                            _ = v[0],
                            y = v[1],
                            b = (0, e.useRef)(),
                            k = o.templateWordsTitle,
                            E = o.templateWordsHistory,
                            L = o.templateSearchPlaceholder,
                            x = o.lang,
                            S = {
                                en_US: "",
                                es_ES: "es",
                                pt_BR: "pt",
                                ru_RU: "ru",
                                fr_FR: "fr",
                                de_DE: "de",
                                zh_CN: "cn",
                                zh_TW: "tw",
                                ja_JP: "jp",
                                id_ID: "id"
                            },
                            A = ko((function(e) {
                                (function(e, t) {
                                    return bo.apply(this, arguments)
                                })(e, n).then((function(e) {
                                    y(e)
                                }))
                            }), 500),
                            T = function(e) {
                                b.current.contains(e.target) || m(!1)
                            };
                        return (0, e.useEffect)((function() {
                            return function(e, t) {
                                    return yo.apply(this, arguments)
                                }(x, n).then((function(e) {
                                    p(e)
                                })), window && (c(function(e) {
                                    for (var t = window.location.search.substring(1).split("&"), o = 0; o < t.length; o++) {
                                        var r = t[o].split("=");
                                        if ("search" == r[0]) return r[1]
                                    }
                                    return ""
                                }().replace(/(%20)/g, " ")), window.localStorage.getItem("fotor_common_hub_templateSearchHistory") && w(JSON.parse(window.localStorage.getItem("fotor_common_hub_templateSearchHistory"))), document.addEventListener("mouseup", T)),
                                function() {
                                    document.removeEventListener("mouseup", T)
                                }
                        }), []), t().createElement("div", {
                            className: "template_search"
                        }, t().createElement("div", {
                            className: s(r, "large_template_search_small"),
                            ref: b,
                            onFocus: function() {
                                m(!0)
                            }
                        }, t().createElement("textarea", {
                            value: i,
                            className: "textaera",
                            placeholder: L,
                            onChange: function() {
                                var e, t = (e = xo().mark((function e(t) {
                                    var o;
                                    return xo().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                (o = t.target.value.replace(/[\r|\n]/g, "")) !== i && (c(o), A(o));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })), function() {
                                    var t = this,
                                        o = arguments;
                                    return new Promise((function(r, n) {
                                        var a = e.apply(t, o);

                                        function i(e) {
                                            So(a, r, n, i, s, "next", e)
                                        }

                                        function s(e) {
                                            So(a, r, n, i, s, "throw", e)
                                        }
                                        i(void 0)
                                    }))
                                });
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            onKeyDown: function(e) {
                                13 === e.keyCode && window && (e.preventDefault(), i && (w([].concat(Lo(g), [i])), window.localStorage.setItem("fotor_common_hub_templateSearchHistory", JSON.stringify(Lo(new Set([].concat(Lo(g), [i])))))), window.open("".concat(window.location.origin, "/").concat(S[x], "/templates/?search=").concat(i, '&analytic={"project_type":"templates","position":"input"}'), "_self"), B.templateSearch({
                                    word_type: "search",
                                    key_word: i
                                }))
                            }
                        }), i && t().createElement("svg", {
                            className: "close_icon",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            onClick: function() {
                                c("")
                            }
                        }, t().createElement("path", {
                            d: "M18.289 3.44a1.5 1.5 0 012.12 2.12l-6.364 6.364 6.365 6.365a1.5 1.5 0 01-2.121 2.12l-6.365-6.364-6.363 6.365a1.5 1.5 0 01-2.008.103l-.114-.103a1.5 1.5 0 010-2.121l6.364-6.365-6.364-6.363a1.5 1.5 0 112.122-2.122l6.363 6.364z",
                            "fill-rule": "evenodd"
                        })), t().createElement("div", {
                            className: "search_icon_btn",
                            onClick: function() {
                                i && window && (w([].concat(Lo(g), [i])), window.localStorage.setItem("fotor_common_hub_templateSearchHistory", JSON.stringify(Lo(new Set([].concat(Lo(g), [i]))))), window.open("".concat(window.location.origin, "/").concat(S[x], "/templates/?search=").concat(i, '&analytic={"project_type":"templates","position":"input"}'), "_self"), B.templateSearch({
                                    word_type: "search",
                                    key_word: i
                                }))
                            }
                        }, t().createElement("svg", {
                            viewBox: "0 0 15 14",
                            className: "search_icon"
                        }, t().createElement("path", {
                            d: "M3.324 9.833a4.673 4.673 0 010-6.6 4.64 4.64 0 013.3-1.366c1.247 0 2.418.485 3.3 1.366a4.672 4.672 0 010 6.6 4.634 4.634 0 01-3.3 1.367 4.636 4.636 0 01-3.3-1.367zm8.528.608a6.53 6.53 0 00-9.848-8.528 6.535 6.535 0 004.62 11.154 6.522 6.522 0 003.908-1.306l1.966 1.965a.931.931 0 001.32 0 .931.931 0 000-1.319l-1.966-1.966z"
                        }))), d && !i && t().createElement("div", {
                            className: "temp_words"
                        }, l && t().createElement(t().Fragment, null, t().createElement("div", {
                            className: mo
                        }, k, " :"), l.map((function(e, o) {
                            return t().createElement("span", {
                                key: o,
                                className: ho,
                                onMouseDown: function() {
                                    window && (m(!1), B.templateSearch({
                                        word_type: "recommend",
                                        key_word: i
                                    }), window.open("".concat(window.location.origin, "/").concat(S[x], '/templates/?search=&analytic={"project_type":"templates","position":"recommend"}&sizeid=').concat(e.sizeId), "_self"))
                                }
                            }, e.name)
                        }))), g && g.length > 0 && t().createElement(t().Fragment, null, t().createElement("div", {
                            className: mo
                        }, E, ":", t().createElement("svg", {
                            width: "16px",
                            height: "16px",
                            viewBox: "0 0 16 16",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            className: "clear_histtory",
                            onMouseDown: function(e) {
                                window && (window.localStorage.removeItem("fotor_common_hub_templateSearchHistory"), w([]))
                            }
                        }, t().createElement("title", null, "Icon / Delete2"), t().createElement("desc", null, "Created with Sketch."), t().createElement("g", {
                            id: "Icon-/-Delete2",
                            stroke: "none",
                            "stroke-width": "1"
                        }, t().createElement("path", {
                            d: "M13.7843333,3.46153846 L13.7843333,13.8242308 C13.7843333,14.4738462 13.1858333,15 12.4485,15 L12.4485,15 L3.36366667,15 C2.6765,15 2.11766667,14.5096154 2.11766667,13.905 L2.11766667,13.905 L2.11766667,3.46153846 L13.7843333,3.46153846 Z M6.83333333,5.76923077 L5.66666667,5.76923077 L5.66666667,12.6923077 L6.83333333,12.6923077 L6.83333333,5.76923077 Z M10.3333333,5.76923077 L9.16666667,5.76923077 L9.16666667,12.6923077 L10.3333333,12.6923077 L10.3333333,5.76923077 Z M10.3333333,0 C10.9773333,0 11.5,0.516923077 11.5,1.15384615 L11.5,1.15384615 L15,1.15384615 L15,2.30769231 L1,2.30769231 L1,1.15384615 L4.5,1.15384615 C4.5,0.516923077 5.02266667,0 5.66666667,0 L5.66666667,0 Z",
                            id: "icon"
                        })))), g.map((function(e, o) {
                            return t().createElement("span", {
                                key: o,
                                className: ho,
                                onMouseDown: function() {
                                    m(!1), B.templateSearch({
                                        word_type: "history",
                                        key_word: e
                                    }), window.open("".concat(window.location.origin, "/").concat(S[x], "/templates/?search=").concat(e, '&analytic={"project_type":"templates","position":"input"}'), "_self")
                                }
                            }, e)
                        })))), d && i && _ && t().createElement("div", {
                            className: "relation"
                        }, _.map((function(e, o) {
                            return t().createElement("div", {
                                key: o,
                                className: "relation_item",
                                onMouseDown: function() {
                                    window && (m(!1), w([].concat(Lo(g), [e])), window.localStorage.setItem("fotor_common_hub_templateSearchHistory", JSON.stringify(Lo(new Set([].concat(Lo(g), [e]))))), window.open("".concat(window.location.origin, "/").concat(S[x], "/templates/?search=").concat(e, '&analytic={"project_type":"templates","position":"input"}'), "_self"), B.templateSearch({
                                        word_type: "automate",
                                        key_word: e
                                    }))
                                }
                            }, e)
                        })))))
                    }
                    var Oo = r(4730);

                    function No(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, r)
                        }
                        return o
                    }

                    function Io(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? No(Object(o), !0).forEach((function(t) {
                                Mo(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : No(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }

                    function Mo(e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }

                    function Po(e) {
                        return function(e) {
                            if (Array.isArray(e)) return Uo(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || Ro(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Do(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var r, n, a = [],
                                    i = !0,
                                    s = !1;
                                try {
                                    for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, t) || Ro(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function Ro(e, t) {
                        if (e) {
                            if ("string" == typeof e) return Uo(e, t);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Uo(e, t) : void 0
                        }
                    }

                    function Uo(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                        return r
                    }
                    "undefined" != typeof window && (0, Oo.N9)();
                    var Ho = (0, e.forwardRef)((function(r, a) {
                            var i, c = r.callback,
                                u = r.theme,
                                l = r.customTheme,
                                p = r.adLocation,
                                f = r.logoRight,
                                d = void 0 === f ? null : f,
                                m = r.showMobileAd,
                                h = void 0 !== m && m,
                                g = r.lang,
                                w = void 0 === g ? "en_US" : g,
                                v = r.loginSensorsData,
                                _ = r.signUpSensorData,
                                y = r.noLanguage,
                                b = void 0 !== y && y,
                                k = r.noNavMenu,
                                E = void 0 !== k && k,
                                L = r.showLoginType,
                                x = void 0 === L ? "login" : L,
                                S = r.isRenderShow,
                                A = void 0 === S || S,
                                T = r.showTemplateSearch,
                                C = void 0 !== T && T,
                                j = r.showOpenInApp,
                                O = void 0 !== j && j,
                                N = r.env,
                                I = void 0 === N ? "production" : N,
                                M = r.style,
                                P = void 0 === M ? {} : M,
                                D = r.logoHref,
                                R = r.projectType,
                                U = void 0 === R ? "" : R,
                                H = r.navData,
                                F = void 0 === H ? null : H,
                                z = r.isShowSignUp,
                                B = void 0 === z || z,
                                Q = r.showCredits,
                                G = void 0 === Q ? "" : Q,
                                W = r.showCreditsMessage,
                                J = void 0 === W ? "" : W,
                                Y = r.children,
                                V = void 0 === Y ? null : Y,
                                Z = r.customUserMenuData,
                                q = void 0 === Z ? [] : Z,
                                K = r.userMenuTopExcessHeight,
                                $ = r.displayLanguageMenu,
                                ee = r.ShowUpgradeButton,
                                te = r.cmsPageLink,
                                oe = void 0 === te ? [] : te,
                                re = r.paymentOther,
                                ne = r.paymentSensorData,
                                ae = r.paymentDisplayStand,
                                ie = r.watchUser,
                                se = r.signIn,
                                ce = r.signUp,
                                ue = r.themeStyleLogo,
                                le = Do((0, e.useState)([]), 2),
                                pe = le[0],
                                fe = le[1],
                                de = Do((0, e.useState)([]), 2),
                                he = de[0],
                                ge = de[1],
                                we = Do((0, e.useState)([]), 2),
                                ve = we[0],
                                _e = we[1],
                                ye = Do((0, e.useState)(""), 2),
                                be = ye[0],
                                ke = ye[1],
                                Ee = Do((0, e.useState)([]), 2),
                                Le = Ee[0],
                                xe = Ee[1],
                                Ae = Do((0, e.useState)(!1), 2),
                                Te = Ae[0],
                                Ce = Ae[1],
                                je = Do((0, e.useState)(0), 2),
                                Oe = je[0],
                                Ne = je[1],
                                Ie = Do((0, e.useState)(!1), 2),
                                Me = Ie[0],
                                Pe = Ie[1],
                                De = Do((0, e.useState)(null), 2),
                                Re = De[0],
                                Fe = De[1],
                                ze = Do((0, e.useState)(!0), 2),
                                Be = ze[0],
                                Qe = ze[1],
                                Ge = Do((0, e.useState)(0), 2),
                                We = Ge[0],
                                Je = Ge[1],
                                Ye = Do((0, e.useState)(w), 2),
                                Ve = Ye[0],
                                Ze = Ye[1],
                                Xe = (0, e.useRef)(),
                                Ke = (0, e.useRef)(),
                                $e = F || (null !== (i = n[Ve]) && void 0 !== i ? i : []),
                                et = Do((0, e.useState)($e), 2),
                                tt = et[0],
                                ot = et[1],
                                rt = Do((0, e.useState)($e.length), 2),
                                nt = rt[0],
                                at = rt[1],
                                it = Wt({
                                    lang: Ve,
                                    env: I
                                }),
                                st = "".concat(me[I].publicUrl, "/9d3a9d230faf9f901b16.svg"),
                                ct = "".concat(me[I].publicUrl, "/6ce130d2365d8b44a294.svg");
                            (0, e.useImperativeHandle)(a, (function() {
                                return {
                                    updateCredits: pt,
                                    languageData: it
                                }
                            }));
                            var ut = ko((function() {
                                    if (Xe.current.offsetWidth + 64 > 750)
                                        for (var e = Ke.current.getBoundingClientRect().width, t = Po(Ke.current.children).filter((function(e, t) {
                                                return t < $e.length
                                            })).map((function(e) {
                                                return e.getBoundingClientRect().width
                                            })), o = 0; o < t.length; o++) {
                                            if (!(e - t[o] > 1)) return e - t[o] <= .05 && e - t[o] > -.05 ? (at(t.length), void Qe(!1)) : (at(Math.max(o - 1, 0)), void Qe(!1));
                                            e -= t[o]
                                        } else at(0)
                                }), 0),
                                lt = ko((function() {
                                    var e = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                                    window.innerWidth > 750 ? Ce(e > 32) : Ce(!1)
                                }), 100),
                                pt = function(e) {
                                    0 === e || e ? Je(e) : It(I).then((function(e) {
                                        Je(e)
                                    }))
                                },
                                ft = function(e) {
                                    Ze(e || Se())
                                };
                            return (0, e.useEffect)((function() {
                                if (Ke.current && !E) {
                                    var e = Po(Ke.current.children).filter((function(e, t) {
                                        return t < $e.length
                                    })).map((function(e) {
                                        return e.offsetWidth
                                    }));
                                    Ne(0 === nt ? 0 : e.filter((function(e, t) {
                                        return t < nt
                                    })).reduce((function(e, t) {
                                        return e + t
                                    })))
                                }
                            }), [nt, Ke, E]), (0, e.useEffect)((function() {
                                Re && ot(function e(t) {
                                    return t.map((function(t) {
                                        return t.item ? t.more ? Io(Io({}, t), {}, {
                                            item: e(t.item),
                                            more: {
                                                title: t.more.title,
                                                url: "https://test-www.fotor.com" === Re.location.origin ? t.more.url.replace("https://www.fotor.com", "https://test-www.fotor.com") : t.more.url
                                            }
                                        }) : Io(Io({}, t), {}, {
                                            item: e(t.item)
                                        }) : t.url ? Io(Io({}, t), {}, {
                                            url: "https://test-www.fotor.com" === Re.location.origin ? t.url.replace("https://www.fotor.com", "https://test-www.fotor.com") : t.url
                                        }) : void 0
                                    }))
                                }($e))
                            }), [Ve, Re]), (0, e.useEffect)((function() {
                                if (Xe.current && Ke.current) {
                                    var e = Po(Ke.current.children);
                                    0 === he.length && e[0] && e[0].offsetWidth > 0 && ge(e.filter((function(t, o) {
                                        return o + 1 !== e.length
                                    })).map((function(e) {
                                        return e.offsetWidth
                                    }))), fe(e.filter((function(t, o) {
                                        return o + 1 !== e.length
                                    })).map((function(e) {
                                        return e.offsetWidth
                                    }))), e.forEach((function(t, r) {
                                        if (r > 0 && t.querySelector(".".concat(o.websiteHeader_menu_link_dropdown))) {
                                            var n = t.querySelector(".".concat(o.websiteHeader_menu_link_dropdown)).offsetWidth / 2 - (t.offsetWidth - 32) / 2,
                                                a = e.map((function(e) {
                                                    return e.offsetWidth
                                                })).reduce((function(e, t, o) {
                                                    return o < r ? e + t : e
                                                }));
                                            t.querySelector(".".concat(o.websiteHeader_menu_link_dropdown)).setAttribute("style", "left:-".concat(n < a ? n : a, "px"))
                                        }
                                    }))
                                }
                            }), [Xe, nt, tt, Ke]), (0, e.useEffect)((function() {
                                if (Xe.current && pe.length > 0) {
                                    var e = new ResizeObserver((function() {
                                        ut()
                                    }));
                                    return e.observe(Xe.current),
                                        function() {
                                            e.disconnect(), e = null
                                        }
                                }
                            }), [pe, Xe, tt]), (0, e.useEffect)((function() {
                                Ze(w)
                            }), [w]), (0, e.useEffect)((function() {
                                return window.addEventListener("scroll", lt), Ue.getInstance().addEventListener(qe.LANGUAGE_LOAD, ft), Fe(window), Pe(!0), pt(),
                                    function() {
                                        window.removeEventListener("scroll", lt), Ue.getInstance().removeEventListener(qe.LANGUAGE_LOAD, ft)
                                    }
                            }), []), t().createElement("div", {
                                className: s(o.websiteHeader_layout, Te && o.scroll_theme, !Te && u && o["".concat(u, "_theme")], l && l),
                                ref: a,
                                style: A ? Io({
                                    display: Me ? "block" : "none"
                                }, P) : P
                            }, t().createElement("div", {
                                className: o.websiteHeader,
                                ref: Xe
                            }, t().createElement("a", {
                                href: He(D, Ve),
                                className: o.websiteHeader_logo
                            }, "black" === u && t().createElement("img", {
                                src: "black" !== u || Te ? "whiteLogo" === ue ? st : ct : st,
                                alt: "Fotor",
                                className: o.pc_logo,
                                width: "86px",
                                height: "23px"
                            }), ("white" === u || !u) && t().createElement("img", {
                                src: ct,
                                className: o.pc_logo,
                                width: "86px",
                                height: "23px",
                                alt: "Fotor"
                            }), t().createElement("img", {
                                src: ct,
                                className: o.mobile_logo,
                                width: "86px",
                                height: "23px",
                                alt: "Fotor"
                            }), d), V, t().createElement("div", {
                                style: {
                                    display: "flex",
                                    width: "100%",
                                    minWidth: "0",
                                    maxWidth: "max-content",
                                    marginRight: "auto",
                                    overflow: Be ? "hidden" : "visible"
                                }
                            }, t().createElement("div", {
                                style: {
                                    width: "100%"
                                }
                            }, t().createElement("nav", {
                                className: o.websiteHeader_menu,
                                ref: Ke
                            }, !E && tt.map((function(e, r) {
                                var n;
                                return e.item ? t().createElement("div", {
                                    className: o.websiteHeader_menu_link,
                                    key: r,
                                    style: {
                                        visibility: r < nt ? "visible" : "hidden",
                                        opacity: r < nt ? "1" : "0",
                                        transition: "opacity 0.25s linear"
                                    }
                                }, t().createElement("div", {
                                    className: o.menu_group
                                }, e.title, e.item && t().createElement("svg", {
                                    width: "16",
                                    height: "16",
                                    className: s(o.websiteHeader_menu_link_icon)
                                }, t().createElement("path", {
                                    d: "M12.703 5.728a.824.824 0 00-1.188 0L7.949 9.39 4.384 5.728a.824.824 0 00-1.188 0 .88.88 0 000 1.22l4.16 4.274a.824.824 0 001.187 0l4.16-4.273a.88.88 0 000-1.221",
                                    fillRule: "evenodd"
                                })), e.item && t().createElement("div", {
                                    className: o.websiteHeader_menu_link_dropdown
                                }, t().createElement("div", {
                                    className: s(o.websiteHeader_menu_link_dropdown_swraper, 0 === e.item.filter((function(e) {
                                        return e.item
                                    })).length && o.sec_menu_swraper)
                                }, null == e || null === (n = e.item) || void 0 === n ? void 0 : n.map((function(e, r) {
                                    var n;
                                    return t().createElement("div", {
                                        key: r,
                                        className: s(o.websiteHeader_menu_link_dropdown_box, e.item ? o.childMenu : o.noChildMenu, "group" === e.type && o.left_line, "feature" === e.type && o.feature)
                                    }, e.item && "feature" !== e.type ? e.url ? t().createElement("a", {
                                        className: "group" === e.type ? o.websiteHeader_menu_link_dropdown_box_group_title : o.websiteHeader_menu_link_dropdown_box_title,
                                        href: e.url
                                    }, e.title) : t().createElement("div", {
                                        className: "group" === e.type ? o.websiteHeader_menu_link_dropdown_box_group_title : o.websiteHeader_menu_link_dropdown_box_title
                                    }, e.title) : t().createElement("a", {
                                        className: s(o["websiteHeader_menu_link_dropdown_box_".concat("feature" === e.type ? "feature" : "link")], "more" === e.type && o.more),
                                        href: e.url
                                    }, e.title), e.item && t().createElement("ul", {
                                        className: s(o.websiteHeader_menu_link_dropdown_box_menu),
                                        style: {
                                            margin: "0 -8px 0 0"
                                        }
                                    }, null == e || null === (n = e.item) || void 0 === n ? void 0 : n.map((function(r, n) {
                                        return t().createElement(t().Fragment, {
                                            key: n
                                        }, t().createElement("li", {
                                            className: o.websiteHeader_menu_link_dropdown_box_menu_item,
                                            style: {
                                                margin: "0 8px 0 0"
                                            }
                                        }, t().createElement("a", {
                                            href: r.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: s("group" === e.type && o.group, "more" === r.type && o.more),
                                            style: r.subTitle ? {
                                                padding: "12px 16px",
                                                lineHeight: "20px"
                                            } : {}
                                        }, r.title, r.subTitle && t().createElement("span", {
                                            style: {
                                                display: "block"
                                            }
                                        }, r.subTitle))), 5 === n && e.more && t().createElement("li", {
                                            className: o.websiteHeader_menu_link_dropdown_box_menu_item,
                                            style: {
                                                margin: "0 8px 0 0"
                                            }
                                        }, t().createElement("a", {
                                            href: e.more.url,
                                            className: o.more
                                        }, e.more.title)))
                                    }))))
                                })))))) : t().createElement("a", {
                                    href: e.url,
                                    className: s(o.websiteHeader_menu_link),
                                    key: "a" + r
                                }, e.title)
                            })), !E && t().createElement("div", {
                                className: o.websiteHeader_menu_link,
                                style: {
                                    display: nt < $e.length ? "flex" : "none",
                                    position: "absolute",
                                    left: Oe + "px"
                                }
                            }, t().createElement("div", {
                                className: o.menu_group
                            }, Ve && it && (null == it ? void 0 : it.header_nav_more), t().createElement("svg", {
                                width: "16",
                                height: "16",
                                className: o.websiteHeader_menu_link_icon
                            }, t().createElement("path", {
                                d: "M12.703 5.728a.824.824 0 00-1.188 0L7.949 9.39 4.384 5.728a.824.824 0 00-1.188 0 .88.88 0 000 1.22l4.16 4.274a.824.824 0 001.187 0l4.16-4.273a.88.88 0 000-1.221",
                                fillRule: "evenodd"
                            })), t().createElement("div", {
                                className: o.websiteHeader_menu_link_dropdown
                            }, t().createElement("div", {
                                className: o.websiteHeader_menu_link_dropdown_swraper,
                                style: {
                                    padding: 0 === ve.length ? "24px 16px" : "0",
                                    margin: "0",
                                    width: "284px",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    maxHeight: "none"
                                }
                            }, 0 === ve.length && t().createElement(t().Fragment, null, tt.filter((function(e, t) {
                                return t >= nt
                            })).map((function(e, r) {
                                return t().createElement("div", {
                                    className: o.websiteHeader_menu_link_dropdown_box,
                                    style: {
                                        display: "block",
                                        paddingRight: "0"
                                    },
                                    key: r
                                }, e.url ? t().createElement("a", {
                                    className: o.websiteHeader_menu_link_dropdown_box_link,
                                    style: {
                                        display: "flex",
                                        width: "100%",
                                        padding: "10px 16px",
                                        boxSizing: "border-box",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    },
                                    href: e.url,
                                    onClick: e.item ? function(t) {
                                        t.preventDefault(), _e(e.item), ke(e.title)
                                    } : null
                                }, t().createElement("span", {
                                    style: {
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        width: "calc(100% - 1px)"
                                    }
                                }, e.title), e.item && t().createElement("svg", {
                                    width: "16",
                                    height: "16",
                                    className: o.websiteHeader_menu_link_icon,
                                    style: {
                                        transform: "rotate(270deg)",
                                        marginLeft: "auto"
                                    }
                                }, t().createElement("path", {
                                    d: "M12.703 5.728a.824.824 0 00-1.188 0L7.949 9.39 4.384 5.728a.824.824 0 00-1.188 0 .88.88 0 000 1.22l4.16 4.274a.824.824 0 001.187 0l4.16-4.273a.88.88 0 000-1.221",
                                    fillRule: "evenodd"
                                }))) : t().createElement("div", {
                                    className: o.websiteHeader_menu_link_dropdown_box_link,
                                    style: {
                                        display: "flex",
                                        width: "100%",
                                        padding: "10px 16px",
                                        boxSizing: "border-box",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    },
                                    href: e.url,
                                    onClick: e.item ? function(t) {
                                        t.preventDefault(), _e(e.item), ke(e.title)
                                    } : null
                                }, t().createElement("span", {
                                    style: {
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        width: "calc(100% - 1px)"
                                    }
                                }, e.title), e.item && t().createElement("svg", {
                                    width: "16",
                                    height: "16",
                                    className: o.websiteHeader_menu_link_icon,
                                    style: {
                                        transform: "rotate(270deg)",
                                        marginLeft: "auto"
                                    }
                                }, t().createElement("path", {
                                    d: "M12.703 5.728a.824.824 0 00-1.188 0L7.949 9.39 4.384 5.728a.824.824 0 00-1.188 0 .88.88 0 000 1.22l4.16 4.274a.824.824 0 001.187 0l4.16-4.273a.88.88 0 000-1.221",
                                    fillRule: "evenodd"
                                }))))
                            }))), ve.length > 0 && t().createElement(t().Fragment, null, t().createElement("div", {
                                onClick: function(e) {
                                    e.preventDefault(), _e(Le), Le.length > 0 && xe([])
                                },
                                style: {
                                    display: "flex",
                                    padding: "24px 16px 24px 32px",
                                    borderBottom: "1px solid #E7E8E9",
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    color: "#414751",
                                    cursor: "pointer"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: '<svg\n                        xmlns="http://www.w3.org/2000/svg"\n                        xmlnsXlink="http://www.w3.org/1999/xlink"\n                        fill="none"\n                        version="1.1"\n                        width="16"\n                        height="16"\n                        viewBox="0 0 16 16"\n                        style={{\n                          color: "#414751",\n                          marginRight: "8px",\n                        }}\n                      >\n                        <g\n                          style="mix-blend-mode:passthrough"\n                          transform="matrix(-1,0,0,1,32,0)"\n                        >\n                          <g\n                            style="mix-blend-mode:passthrough"\n                            transform="matrix(-1,0,0,1,56,0)"\n                          >\n                            <path\n                              d="M30.41423,7.945899940395355L35.71069,13.296499940395355C36.09923,13.688999940395355,36.09601,14.322199940395356,35.7035,14.710699940395354C35.311,15.099199940395355,34.67784,15.095999940395355,34.28931,14.703499940395355L28.289307,8.642179940395355C27.9007593,8.249659940395356,27.9039951,7.616469940395355,28.296535,7.227949940395355L34.29653,1.2892709403953553C34.68906,0.9007573403953553,35.32222,0.9040095403953552,35.71073,1.2965349403953552C36.09924,1.6890599403953552,36.09599,2.322219940395355,35.70347,2.710729940395355L30.41423,7.945899940395355Z"\n                              fill="#414751"\n                              fillOpacity="1"\n                            />\n                          </g>\n                        </g>\n                      </svg>'.concat(be)
                                }
                            }), t().createElement("div", {
                                style: {
                                    padding: "0 16px",
                                    maxHeight: "calc(100vh - 217px)",
                                    overflowY: "auto",
                                    overflowX: "hidden",
                                    margin: "16px 0",
                                    marginRight: "4px"
                                },
                                className: o.scroll_style_y
                            }, ve.map((function(e, r) {
                                return t().createElement("div", {
                                    className: o.websiteHeader_menu_link_dropdown_box,
                                    style: {
                                        display: "block",
                                        paddingRight: "0"
                                    },
                                    key: r
                                }, t().createElement("a", {
                                    className: o.websiteHeader_menu_link_dropdown_box_link,
                                    style: {
                                        display: "flex",
                                        width: "100%",
                                        padding: "10px 16px",
                                        boxSizing: "border-box",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    },
                                    href: e.url,
                                    onClick: e.item ? function(t) {
                                        t.preventDefault(), _e(e.item), ke(e.title), xe(ve)
                                    } : null
                                }, t().createElement("span", {
                                    style: {
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        width: "calc(100% - 1px)"
                                    }
                                }, e.title), e.item && t().createElement("svg", {
                                    width: "16",
                                    height: "16",
                                    className: o.websiteHeader_menu_link_icon,
                                    style: {
                                        transform: "rotate(270deg)",
                                        marginLeft: "auto"
                                    }
                                }, t().createElement("path", {
                                    d: "M12.703 5.728a.824.824 0 00-1.188 0L7.949 9.39 4.384 5.728a.824.824 0 00-1.188 0 .88.88 0 000 1.22l4.16 4.274a.824.824 0 001.187 0l4.16-4.273a.88.88 0 000-1.221",
                                    fillRule: "evenodd"
                                }))))
                            }))))))))))), C && t().createElement(jo, {
                                templateWordsTitle: null == it ? void 0 : it.template_words_title,
                                templateWordsHistory: null == it ? void 0 : it.template_words_history,
                                env: I,
                                templateSearchPlaceholder: null == it ? void 0 : it.template_search_placeholder,
                                lang: Ve
                            }), G && t().createElement("div", {
                                className: o.credits_container
                            }, t().createElement("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAYAAAAFQMh/AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASPSURBVEiJvZVtaJZVGICv+zxnc8qc2Ub0Y0E/JIyCXgjKHyM2pmCRsEhR6Lu0WRCJ9AGZ+EafIqJlIiVkgab0S9HIUJiBQZCCwaAF/vCH2BiWW1s6955z3/143o/n/cgp5Q487/uc59znvu7Pc4QZHC+PjLReDU2Lo29a6W8W5MULv3U0i7vXmpruMU0WRvyigOQkUe+IQ/8ZnB8ZaI2+5b6Iz6km90aSnJIsVNNbFEE1ooAD1AzB4+DcDYPzFw53+DnNvaquW/GL1FzOLIKBFAFYZoNU5iIgBgrX5/Enf+ztDG7WygJJn5p2mQYgKSpMynIKCIYTA8vQi3Atwh36yzXBOy7t6Tbxr0bco2bRu+J3K/1mvEEqi1blqVXWi69R3amG4J1jOxcIyQ6zsFQBZ1bxTECtGFJIY5f1LmNLlWEYiCEwuvP2OwfrwF+Mb++PptvVaNGsgqzxkoatytvMu9WuZeYmchygCvzl+OZtqmGdYAgJroHFmBVzmfG6Cm4ohqM6ChUtdqgKvG/83U3Rwjok3VCsvppwpXOxtIi0xpusrJXXsjmWyUISjpTBB8Y2LFLC266qQktWWx1ci3CHjCI2BDKB2UKgM1vBVRHBwHFw+/z7R8tgl+iHWPTT5UpEzmMcEeQHVAZVwuLEkseBxUhSLZuNWFGPIV+VzHDfTLyecxa6HQFHxElM/4kIEZEYhLjX6VTP2rb+O2Bqq5PQm7jwcyJxmxC7SvLp3oAjIBIo6ySSiJ75qP2Bo2XwLBd6nVRvqsD1iFq4e/W89U95OLN77ONdHvtVLKwWQkutoXXzss6Is8I72cB7KOQctV0lEyay5um5bx0A2PPX5j4j7HaWdGSl0jxafS9LKbSlUMvJje29B6vACbEz7deklI9hNbfkibn5wbzl/V0Tbku0wjrFp1WczSPpYZKFZU8qM0AkYFMv1XiGd4SsxaOq0rOq7YOhAcv7kYmwP+KWV6rdqp66fq7pexUDtfc3tD82WAcW4kVHapkzXdHXtnVowPL+z8sT+wW/PCGp87RkgyDXPMUEOXn51vb3aqFFj/VsMUJbH2nddRxg7PKl3WJuuZP0DnV13lA+syXb71nPkaGpKVbkpSc0BEPhtHP+7KwWzQMcHu9fa4Rns5eCNfC2NK/vVwNhOBCWvXHbk8ONoAC+eXbTcf17qrVHvp48OvbCAk10i1qsElIBVy6c7JNdKxkjQyHokvXta87/GzRrJwDfX3nmO1O3VPEoSfpYgmXey99JUEvlrLgWcYdU4ur+ttcuXgsKmUvi2JVV3WJhqTao4PK52yDP6W1lo2Ab18x789PpgHXgJuKm2rO1pLxxvwLCJPBZCDH//Pz86PVCy+AfJ/pygdBdV53FUenXchR+MmzfZKF573M3CKwCiw/9zlx6h6anzaQIw5ggxigi50RkqBA57e3qiWVtn0+bw+mGDFi3n3215Xe1JATzr8TZYwd75ETD3vs/h2+dpEsldgj0PDTn2xM3G1gGJ057IQw+2HJsxqAA3ol2mcmpmYQCOCx0egrnZhzcZPIwFsdmGvwP1W1WwmlifYUAAAAASUVORK5CYII="
                            }), t().createElement("span", null, G, " ", We), t().createElement("div", {
                                className: o.credit_help
                            }, t().createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14"
                            }, t().createElement("path", {
                                fillRule: "evenodd",
                                d: "M10.1114545,7.97581818 L9.225,8.88327273 C8.97554545,9.17409091 8.854,9.46809091 8.854,9.78245455 L8.854,10.037 L8.854,10.1642727 L8.72672727,10.1642727 L7.50172727,10.1642727 L7.37445455,10.1642727 L7.37445455,10.037 L7.37445455,9.78245455 C7.37445455,9.34463636 7.489,8.91763636 7.71618182,8.51163636 C7.90963636,8.17563636 8.17309091,7.85363636 8.49954545,7.55327273 C8.86418182,7.21854545 8.98381818,7.07854545 9.022,7.02509091 C9.13718182,6.86472727 9.19318182,6.68527273 9.19318182,6.47590909 C9.19318182,6.19145455 9.09009091,5.95918182 8.87690909,5.76509091 C8.67263636,5.57927273 8.39518182,5.47681818 8.09609091,5.47681818 C7.71872727,5.47681818 7.37,5.641 7.16381818,5.91463636 C6.98690909,6.14881818 6.901,6.41418182 6.901,6.726 L6.901,6.98118182 L6.901,7.10845455 L6.77372727,7.10845455 L5.57736364,7.10845455 L5.45009091,7.10845455 L5.45009091,6.98118182 L5.45009091,6.52363636 C5.45009091,6.20036364 5.52136364,5.87645455 5.662,5.56081818 C5.802,5.24836364 5.99545455,4.97090909 6.23854545,4.73609091 C6.48481818,4.49681818 6.77309091,4.31163636 7.09381818,4.18563636 C7.41327273,4.059 7.76009091,3.99536364 8.12409091,3.99536364 C8.84572727,3.99536364 9.45727273,4.24036364 9.94154545,4.72527273 C10.4264545,5.21018182 10.6727273,5.82490909 10.6727273,6.55290909 C10.6727273,7.05627273 10.4862727,7.53290909 10.1114545,7.97581818 M8.12536364,13.0909091 C7.63345455,13.0909091 7.23509091,12.6919091 7.23509091,12.2 C7.23509091,11.7087273 7.63345455,11.3097273 8.12536364,11.3097273 C8.61727273,11.3097273 9.01563636,11.7087273 9.01563636,12.2 C9.01563636,12.6919091 8.61727273,13.0909091 8.12536364,13.0909091 M8,1 C4.13345455,1 1,4.13345455 1,8 C1,11.8659091 4.13345455,15 8,15 C11.8659091,15 15,11.8659091 15,8 C15,4.13345455 11.8659091,1 8,1",
                                transform: "translate(-1 -1)"
                            })), J && t().createElement("div", {
                                className: o.credits_message
                            }, J))), t().createElement(zo, {
                                adLocation: p,
                                showMobileAd: h,
                                callback: function() {
                                    ut()
                                }
                            }), O && X().isMobile && t().createElement(Fo, {
                                buttonText: null == it ? void 0 : it.open_in_app_label,
                                style: {
                                    marginRight: "16px"
                                },
                                projectType: U,
                                cmsPageLink: oe
                            }), t().createElement(po, {
                                theme: u,
                                themeStyle: Te,
                                onClickItem: c,
                                callback: c,
                                ShowUpgradeButton: ee,
                                menuClassName: o.loginHeader_menu,
                                menuItem: E ? [] : tt,
                                loginSensorsData: v,
                                signUpSensorData: _,
                                noLanguage: b,
                                lang: Ve,
                                showLoginType: x,
                                projectType: U,
                                env: I,
                                isShowSignUp: B,
                                customUserMenuData: q,
                                userMenuTopExcessHeight: K,
                                displayLanguageMenu: $,
                                paymentDisplayStand: ae,
                                paymentSensorData: ne,
                                paymentOther: re,
                                watchUser: ie,
                                signIn: se,
                                signUp: ce
                            })))
                        })),
                        Fo = function(e) {
                            var r = e.env,
                                n = e.buttonText,
                                a = e.style,
                                i = e.className,
                                c = e.projectType,
                                u = e.cmsPageLink;
                            return t().createElement("button", {
                                id: "btn_navigation_open_in_app",
                                className: s(o.btnOpenApp, i),
                                style: a,
                                onClick: function() {
                                    B.sendTracker("fotor_web$click_up$drownload_app_popup", {
                                            position: "nav_bar",
                                            button_position: "open_in_app",
                                            project_type: c
                                        }),
                                        function(e, t) {
                                            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "production",
                                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : X(),
                                                n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "fotor://";
                                            q(), G(e, t, o, r, n)
                                        }(u, "homepage_nav_button", r)
                                }
                            }, n)
                        },
                        zo = function(r) {
                            var n = r.adLocation,
                                a = r.showMobileAd,
                                i = r.callback,
                                c = void 0 === i ? function() {} : i,
                                u = (0, e.useRef)(null);
                            return (0, e.useEffect)((function() {
                                var e = new MutationObserver(c);
                                return u && u.current && e.observe(u.current, {
                                        childList: !0,
                                        attributes: !1,
                                        subtree: !0
                                    }),
                                    function() {
                                        e.disconnect()
                                    }
                            }), []), n ? t().createElement("div", {
                                ref: u,
                                id: n,
                                className: s(o.ad_button, !a && o.ad_button_mb_hide)
                            }) : null
                        };
                    const Bo = Ho
                })(), a
            })(), e.exports = r(o(59748))
        }
    }
]);