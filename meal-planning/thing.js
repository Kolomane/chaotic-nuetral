(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [58615], {
        75481: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/recipe-detail/[...slug]", function() {
                return r(495561)
            }])
        },
        557769: function(e, t, r) {
            "use strict";
            r.d(t, {
                j: function() {
                    return b
                }
            });
            var n, o, i = r(456552),
                a = r(865051),
                l = r(74186),
                c = r(221527),
                u = r(951730);

            function s(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }
            var p = function(e, t) {
                    var r, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
                            return function(i) {
                                if (r) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                d = (n = function(e, t) {
                    var r, n, o, i, l, c = arguments;
                    return p(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return n = void 0 === (r = e.id) ? "me" : r, o = e.systemCountry, i = e.locale, l = e.parentSpan, [4, (c.length > 2 && void 0 !== c[2] ? c[2] : a.Z)("/api/customers/".concat(n, "/info"), t, {
                                    query: {
                                        country: o,
                                        locale: i
                                    },
                                    parentSpan: l
                                })];
                            case 1:
                                return [2, u.sent().json()]
                        }
                    })
                }, o = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, o) {
                        var i = n.apply(e, t);

                        function a(e) {
                            s(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            s(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    })
                }, function(e, t) {
                    return o.apply(this, arguments)
                }),
                b = function() {
                    var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = (0, l.Z)().fetch,
                        a = f({}, r, (0, c.O)()),
                        s = (0, c.C)(n.enabled),
                        p = [u.Z["customer.info"], a];
                    return (0, i.useQuery)(p, function() {
                        return d(a, p, o)
                    }, (e = f({}, n), t = t = {
                        enabled: s
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(t)).forEach(function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }), e))
                }
        },
        870973: function(e, t, r) {
            "use strict";
            r.d(t, {
                r: function() {
                    return d
                }
            });
            var n, o, i = r(456552),
                a = r(865051),
                l = r(74186),
                c = r(221527),
                u = r(951730);

            function s(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }
            var f = function(e, t) {
                    var r, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
                            return function(i) {
                                if (r) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                p = (n = function(e, t) {
                    var r, n, o, i, l = arguments;
                    return f(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return r = e.id, n = e.systemCountry, o = e.locale, i = e.parentSpan, [4, (l.length > 2 && void 0 !== l[2] ? l[2] : a.Z)("/recipes/recipes/".concat(r), t, {
                                    query: {
                                        country: n,
                                        locale: o
                                    },
                                    parentSpan: i
                                })];
                            case 1:
                                return [2, c.sent().json()]
                        }
                    })
                }, o = function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, o) {
                        var i = n.apply(e, t);

                        function a(e) {
                            s(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            s(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    })
                }, function(e, t) {
                    return o.apply(this, arguments)
                }),
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = (0, l.Z)().fetch,
                        n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    var n;
                                    n = r[t], t in e ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = n
                                })
                            }
                            return e
                        }({}, e, (0, c.O)()),
                        o = [u.Z["recipe.byId"], n];
                    return (0, i.useQuery)(o, function() {
                        return p(n, o, r)
                    }, t)
                }
        },
        427795: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378);
            var o = r(561853),
                i = r(109282),
                a = r(334765),
                l = r(686051),
                c = r(394349);
            t.Z = function(e, t) {
                var r, u, s = (0, c.S)().locale,
                    f = (0, a.z)() || {
                        name: "web-foundation",
                        slackChannel: "#squad-web-foundation",
                        jiraPrefix: "FI",
                        githubTeam: "hellofresh/front-end-infra-squad",
                        tribe: "app-foundation",
                        alliance: "foundations",
                        teamIdentifier: "web-foundation"
                    },
                    p = (0, o.X)({
                        group: e,
                        locale: s
                    }, (r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({}, t), u = u = {
                        suspense: !1
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(u)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(u, e))
                    }), r)).data;
                return {
                    translate: function(t, r) {
                        return p ? (0, n.tZ)("span", {
                            "data-translation-id": t,
                            children: (0, l.WS)(p, s, e, t, r)
                        }) : ""
                    },
                    translateRaw: function(t, r) {
                        return p ? (0, l.WS)(p, s, e, t, r) : ""
                    },
                    translateJSON: function(t, r) {
                        if (!p) return null;
                        try {
                            return JSON.parse((0, l.WS)(p, s, e, t, r))
                        } catch (e) {
                            var n = Error("useApplanga.translateJSON: error parsing ".concat(t), {
                                cause: e
                            });
                            return (0, i.Z)(f, n), {}
                        }
                    },
                    getRawData: function() {
                        return p
                    },
                    getDebugProps: function(t) {
                        return (0, l.Hw)(e, t)
                    }
                }
            }
        },
        950013: function(e, t, r) {
            "use strict";
            r.d(t, {
                F: function() {
                    return l
                }
            });
            var n = r(221527),
                o = r(264879),
                i = r(529378),
                a = r(827378),
                l = function() {
                    var e = (0, i.ew)(),
                        t = (0, n.O)(),
                        r = t.systemCountry,
                        l = t.locale,
                        c = (0, o.Z)();
                    return (0, a.useMemo)(function() {
                        return {
                            locale: l,
                            country: r,
                            platform: null == c ? void 0 : c.platform,
                            environment: e.NEXT_PUBLIC_SERVER_ENV,
                            viewport: null == c ? void 0 : c.viewport
                        }
                    }, [l, r, null == c ? void 0 : c.platform, e.NEXT_PUBLIC_SERVER_ENV, null == c ? void 0 : c.viewport])
                }
        },
        109383: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return a
                }
            });
            var n = r(993438),
                o = r(827378),
                i = r(950013),
                a = function() {
                    var e = (0, i.F)();
                    return (0, o.useMemo)(function() {
                        return {
                            id: (0, n.Z)(),
                            attributes: e
                        }
                    }, [e])
                }
        },
        74138: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return g
                }
            });
            var n = r(687800);
            r(827378);
            var o = r(438579),
                i = r.n(o),
                a = r(788141),
                l = r(38246),
                c = r(466290),
                u = r(366416);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return s(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = r(531175);

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }

            function b(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }
            var y = function(e) {
                    switch (e) {
                        case a.Z.hellofresh:
                            return "https://img.hellofresh.com";
                        case a.Z.greenchef:
                            return "https://images.greenchef.com";
                        case a.Z.everyplate:
                            return "https://images.everyplate.com";
                        default:
                            return "https://img.hellofresh.com"
                    }
                },
                h = function(e) {
                    e.height;
                    var t = e.fetchFormat,
                        r = e.crop,
                        n = e.flags,
                        o = e.root,
                        i = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, ["height", "fetchFormat", "crop", "flags", "root"]);
                    return function(e) {
                        var a, l = e.src,
                            c = e.width,
                            s = e.quality,
                            p = Object.keys(a = b(d({}, i), {
                                width: c,
                                quality: s || "auto",
                                fetchFormat: t || "auto",
                                crop: r || "limit",
                                flags: n || "lossy"
                            })).reduce(function(e, t) {
                                if (t in u.t) {
                                    if ("flags" === t) {
                                        var r = u.t.flags,
                                            n = Array.isArray(a.flags) ? a.flags.map(function(e) {
                                                return "".concat(r).concat(e)
                                            }).join(",") : "".concat(r).concat(a.flags);
                                        return f(e).concat([n])
                                    }
                                    return f(e).concat(["".concat(u.t[t]).concat(a[t])])
                                }
                                return e
                            }, []).join(",");
                        return "".concat(o, "/").concat(p).concat(l)
                    }
                },
                g = function(e) {
                    var t = (0, l.Z)(),
                        r = y(t),
                        o = (0, p.T)();
                    return (0, n.tZ)(c.Z, {
                        scope: "next-image",
                        fallback: (0, n.tZ)(n.HY, {}),
                        level: "warning",
                        children: (0, n.tZ)(i(), b(d({
                            loader: h(d({
                                root: r
                            }, e))
                        }, e), {
                            onError: function(n) {
                                if ("function" == typeof e.onError && e.onError(n), .01 > Math.random()) {
                                    var i = o.startSpan("libs-image-error"),
                                        a = "string" == typeof e.src ? e.src : "statically imported image";
                                    i.setAttributes({
                                        root: r,
                                        src: a,
                                        brand: t,
                                        id: e.id,
                                        width: e.width,
                                        height: e.height,
                                        loading: e.loading
                                    }), i.end()
                                }
                            }
                        }))
                    })
                }
        },
        366416: function(e, t, r) {
            "use strict";
            r.d(t, {
                b: function() {
                    return o
                },
                t: function() {
                    return i
                }
            }), (n = o || (o = {})).cloudfront = "cloudfront", n.website = "website";
            var n, o, i = {
                width: "w_",
                height: "h_",
                crop: "c_",
                gravity: "g_",
                background: "b_",
                x: "x_",
                y: "y_",
                aspectRatio: "ar_",
                radius: "r_",
                opacity: "o_",
                effect: "e_",
                flags: "fl_",
                overlay: "l_",
                zoom: "z_",
                fetchFormat: "f_",
                quality: "q_",
                angle: "a_",
                border: "bo_",
                color: "co_"
            }
        },
        357933: function(e, t, r) {
            "use strict";
            var n = r(366416),
                o = r(788141),
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.b.cloudfront;
                    if (t === n.b.cloudfront) {
                        var r = e.split(/\//);
                        return r.splice(0, 4), "/hellofresh_s3/".concat(r.join("/"))
                    }
                    var o = e.split(/\//);
                    return o.splice(0, 3), "/hellofresh_website/".concat(o.join("/"))
                };
            t.Z = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.b.cloudfront;
                if (!RegExp("^http(s)?.").test(e) && t === n.b.cloudfront) return e.startsWith("/") ? "/hellofresh_s3".concat(e) : "/hellofresh_s3/".concat(e);
                var r = new URL(e);
                return r.hostname.includes("cloudfront") ? i(e, n.b.cloudfront) : Object.keys(o.Z).some(function(e) {
                    return r.hostname.includes("cdn.".concat(e, ".com"))
                }) || r.hostname.includes("hf-website-live.s3-eu-west-1.amazonaws.com") || r.hostname.includes("hf-website-live.s3.eu-west-1.amazonaws.com") ? i(e, n.b.website) : r.pathname
            }
        },
        338425: function(e, t, r) {
            "use strict";
            r.d(t, {
                n: function() {
                    return o
                }
            });
            var n = r(687800),
                o = (0, r(827378).createContext)("");
            t.Z = function(e) {
                var t = e.IPCountry,
                    r = e.children;
                return (0, n.tZ)(o.Provider, {
                    value: t,
                    children: r
                })
            }
        },
        807579: function(e, t, r) {
            "use strict";
            r.d(t, {
                v: function() {
                    return o
                },
                w: function() {
                    return i
                }
            }), (n = o || (o = {})).wine = "wine", n.cloudfront = "cloudfront", n.website = "website";
            var n, o, i = {
                fetch_format: "auto",
                flags: "lossy",
                quality: "auto"
            }
        },
        271416: function(e, t, r) {
            "use strict";
            var n = r(350676);
            t.ZP = n.ZP
        },
        233449: function(e, t, r) {
            "use strict";
            r.d(t, {
                f: function() {
                    return n
                }
            });
            var n = function(e) {
                if (e && e.match(/,/)) {
                    var t = e.split(","),
                        r = parseInt(t[0], 10),
                        n = parseInt(t[1], 10),
                        o = {};
                    return n > 0 && (o.height = n), r > 0 && (o.width = r), o
                }
                return {}
            }
        },
        350676: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZP: function() {
                    return h
                },
                LJ: function() {
                    return b
                }
            });
            var n, o = {
                    width: function(e) {
                        return e > 0 ? "w_".concat(e) : ""
                    },
                    height: function(e) {
                        return e > 0 ? "h_".concat(e) : ""
                    },
                    crop: function(e) {
                        return "c_".concat(e)
                    },
                    gravity: function(e) {
                        return "g_".concat(e)
                    },
                    background: function(e) {
                        return "b_".concat(e)
                    },
                    x: function(e) {
                        return "x_".concat(e)
                    },
                    y: function(e) {
                        return "y_".concat(e)
                    },
                    aspect_ratio: function(e) {
                        return "ar_".concat(e)
                    },
                    radius: function(e) {
                        return "r_".concat(e)
                    },
                    opacity: function(e) {
                        return "o_".concat(e)
                    },
                    dpr: function(e) {
                        return "dpr_".concat(e)
                    },
                    effect: function(e) {
                        return "e_".concat(e)
                    },
                    flags: function(e) {
                        return "fl_".concat(e)
                    },
                    overlay: function(e) {
                        return "l_".concat(e)
                    },
                    zoom: function(e) {
                        return "z_".concat(e)
                    },
                    fetch_format: function(e) {
                        return "f_".concat(e)
                    },
                    quality: function(e) {
                        return "q_".concat(e)
                    },
                    angle: function(e) {
                        return "a_".concat(e)
                    },
                    border: function(e) {
                        return "bo_".concat(e)
                    },
                    color: function(e) {
                        return "co_".concat(e)
                    }
                },
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.keys(e).reduce(function(t, r) {
                        var n = o[r],
                            i = e[r],
                            a = n && i && n(i);
                        return a ? t.concat([a]) : t
                    }, []).sort().join(",")
                },
                a = function(e, t) {
                    var r = i(t);
                    return "".concat("https://img.hellofresh.com", "/").concat(r, "/").concat(e)
                },
                l = r(807579),
                c = r(233449);

            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var s = (u(n = {}, l.v.wine, {
                proxyName: "lot18",
                extractImageId: function(e) {
                    var t = e.split(/\//);
                    return t.splice(0, 3), t.join("/")
                },
                extractSize: function() {
                    return {}
                }
            }), u(n, l.v.cloudfront, {
                proxyName: "hellofresh_s3",
                extractImageId: function(e) {
                    var t = e.split(/\//);
                    return t.splice(0, 4), t.join("/")
                },
                extractSize: function(e) {
                    var t = e.split(/\//)[3];
                    return (0, c.f)(t)
                }
            }), u(n, l.v.website, {
                proxyName: "hellofresh_website",
                extractImageId: function(e) {
                    var t = e.split(/\//);
                    return t.splice(0, 3), t.join("/")
                },
                extractSize: function(e) {
                    var t = e.split(/\//)[3];
                    return (0, c.f)(t)
                }
            }), n);

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }
            var p = RegExp("^http(s)?."),
                d = {
                    hasWarned: !1,
                    markAsWarned: function() {
                        this.hasWarned = !0
                    }
                },
                b = function(e, t) {
                    return a(e, f({}, l.w, t))
                },
                y = function(e) {
                    var t = p.test(e);
                    return t && !d.hasWarned && (console.warn("\uD83D\uDE35 using imageLink for cloudfront images will be deprecated soon, pass an imagePath instead!"), d.markAsWarned()), t
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.v.cloudfront;
                    if (!e || !e.length) return function() {
                        return e
                    };
                    var r = s[t],
                        n = r.extractImageId,
                        o = r.extractSize,
                        i = r.proxyName,
                        a = "/".concat(n(e));
                    t !== l.v.cloudfront || y(e) || (a = e);
                    var c = "".concat(i).concat(a);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return b(c, f({}, o(e), t))
                    }
                }
        },
        92974: function(e, t) {
            "use strict";
            var r, n;
            (n = r || (r = {})).enAU = "en-AU", n.deAT = "de-AT", n.frBE = "fr-BE", n.nlBE = "nl-BE", n.deDE = "de-DE", n.esES = "es-ES", n.frFR = "fr-FR", n.itIT = "it-IT", n.frLU = "fr-LU", n.nlNL = "nl-NL", n.enCA = "en-CA", n.frCA = "fr-CA", n.enUS = "en-US", n.deCH = "de-CH", n.daDK = "da-DK", n.enGB = "en-GB", n.enIE = "en-IE", n.jaJP = "ja-JP", n.nbNO = "nb-NO", n.enNZ = "en-NZ", n.svSE = "sv-SE", t.Z = r
        },
        226476: function(e, t, r) {
            "use strict";
            var n = r(940548),
                o = r.n(n),
                i = r(435444),
                a = r.n(i),
                l = r(391482),
                c = r.n(l),
                u = r(283735),
                s = r.n(u),
                f = r(843308),
                p = r.n(f),
                d = r(970862),
                b = r.n(d),
                y = r(146139),
                h = r.n(y),
                g = r(331233),
                m = r.n(g),
                v = r(752090),
                O = r.n(v),
                w = r(371638),
                j = r.n(w);
            t.Z = function(e) {
                return e.startsWith("en") ? o() : e.startsWith("nl") ? s() : e.startsWith("fr") ? c() : e.startsWith("de") ? a() : e.startsWith("sv") ? p() : e.startsWith("da") ? b() : e.startsWith("nb") ? h() : e.startsWith("it") ? m() : e.startsWith("ja") ? O() : e.startsWith("es") ? j() : o()
            }
        },
        109282: function(e, t, r) {
            "use strict";
            var n = r(393117);
            t.Z = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = r.tags || {};
                for (var i in e) o["claim.".concat(i)] = e[i];
                (0, n.Tb)(t, r)
            }
        },
        511002: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378);
            var o = r(611691);
            t.Z = function(e) {
                var t = e.children,
                    r = e.viewports,
                    i = (0, o.S)();
                return r.includes(i) ? (0, n.tZ)(n.HY, {
                    children: t
                }) : null
            }
        },
        162883: function(e, t, r) {
            "use strict";
            var n = r(827378),
                o = r(393117),
                i = r(266726),
                a = r.n(i),
                l = r(652022);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            l = !0, n = e
                        } finally {
                            try {
                                a || null == o.return || o.return()
                            } finally {
                                if (l) throw n
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.Z = function(e) {
                var t = u((0, n.useState)([0, 0]), 2),
                    r = t[0],
                    i = t[1],
                    c = u(r, 2),
                    s = c[0],
                    f = c[1],
                    p = u((0, l.Z)().breakpoints.map(function(e) {
                        return Number(e.slice(0, -2))
                    }).sort(function(e, t) {
                        return e - t
                    }), 2),
                    d = p[0],
                    b = p[1];
                (0, n.useEffect)(function() {
                    i([window.innerWidth, window.innerHeight]);
                    var t = a()(function() {
                        e && o.n_({
                            message: "debounced set size state",
                            category: "@/libs/window-api/useWindowSize",
                            level: "debug",
                            data: {
                                newWidth: window.innerWidth,
                                newHeight: window.innerHeight,
                                previousWidth: s,
                                previousHeight: f
                            }
                        }), i([window.innerWidth, window.innerHeight])
                    }, 250);
                    return window.addEventListener("resize", t),
                        function() {
                            e && o.n_({
                                message: "removing event listener and cancelling debounced function",
                                category: "@/libs/window-api/useWindowSize",
                                level: "debug"
                            }), window.removeEventListener("resize", t), t.cancel()
                        }
                }, []);
                var y = !!s && s < d,
                    h = !!s && s >= d && s < b,
                    g = !!s && s >= b;
                return {
                    width: s,
                    height: f,
                    tabletWidth: d,
                    isMobile: y,
                    isTablet: h,
                    isDesktop: g
                }
            }
        },
        883009: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378), t.Z = function(e) {
                var t, r, o = e.title,
                    i = e.titleId,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["title", "titleId"]);
                return (0, n.BX)("svg", (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    color: "inherit",
                    "aria-labelledby": i
                }, a), r = r = {
                    children: [o ? (0, n.tZ)("title", {
                        id: i,
                        children: o
                    }) : null, (0, n.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m8 12.333-6-6L3.333 5 8 9.667 12.667 5 14 6.333l-6 6Z",
                        fill: "currentColor"
                    })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            }
        },
        816516: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378), t.Z = function(e) {
                var t, r, o = e.title,
                    i = e.titleId,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["title", "titleId"]);
                return (0, n.BX)("svg", (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    color: "inherit",
                    "aria-labelledby": i
                }, a), r = r = {
                    children: [o ? (0, n.tZ)("title", {
                        id: i,
                        children: o
                    }) : null, (0, n.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m8 4 6 6-1.333 1.333L8 6.667l-4.667 4.666L2 10l6-6Z",
                        fill: "currentColor"
                    })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            }
        },
        835972: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378), t.Z = function(e) {
                var t, r, o = e.title,
                    i = e.titleId,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["title", "titleId"]);
                return (0, n.BX)("svg", (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    color: "inherit",
                    "aria-labelledby": i
                }, a), r = r = {
                    children: [o ? (0, n.tZ)("title", {
                        id: i,
                        children: o
                    }) : null, (0, n.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m15 12-5.727 6L8 16.667 12.454 12 8 7.333 9.273 6 15 12Z",
                        fill: "currentColor"
                    })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            }
        },
        307280: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378), t.Z = function(e) {
                var t, r, o = e.title,
                    i = e.titleId,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["title", "titleId"]);
                return (0, n.BX)("svg", (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    color: "inherit",
                    "aria-labelledby": i
                }, a), r = r = {
                    children: [o ? (0, n.tZ)("title", {
                        id: i,
                        children: o
                    }) : null, (0, n.tZ)("path", {
                        d: "M11 6v8l-3-3-1.5 1.5L12 18l5.5-5.5L16 11l-3 3V6h-2Z",
                        fill: "currentColor"
                    }), (0, n.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
                        fill: "currentColor"
                    })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            }
        },
        546604: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378), t.Z = function(e) {
                var t, r, o = e.title,
                    i = e.titleId,
                    a = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["title", "titleId"]);
                return (0, n.BX)("svg", (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    color: "inherit",
                    "aria-labelledby": i
                }, a), r = r = {
                    children: [o ? (0, n.tZ)("title", {
                        id: i,
                        children: o
                    }) : null, (0, n.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22 19H2V5h20v14ZM20 7.414 15.414 12 20 16.586V7.414Zm-16 0v9.172L8.586 12 4 7.414ZM6.414 17h11.172L14 13.414l-2 2-2-2L6.414 17Zm0-10h11.172L12 12.586 6.414 7Z",
                        fill: "currentColor"
                    })]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            }
        },
        136943: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return k
                }
            });
            var n = r(687800),
                o = r(827378),
                i = r(22951),
                a = r(797560),
                l = {
                    width: 1,
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "border-radius-sm",
                    borderStyle: "none",
                    fontSize: "body-md-regular",
                    lineHeight: "line-height-md-2",
                    cursor: "pointer",
                    py: "sm-1",
                    px: "md-1"
                },
                c = r(607131);

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }

            function s(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }
            var f = o.forwardRef(function(e, t) {
                    var r = e.size,
                        o = void 0 === r ? "lg" : r,
                        f = e.as,
                        p = e.disabled,
                        d = e.leadingIcon,
                        b = e.trailingIcon,
                        y = e.children,
                        h = e.variants,
                        g = e.loading,
                        m = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, ["size", "as", "disabled", "leadingIcon", "trailingIcon", "children", "variants", "loading"]);
                    return (0, n.tZ)(i.Z, s(u(s(u({}, m), {
                        size: o,
                        as: void 0 === f ? "button" : f,
                        disabled: void 0 !== p && p || g,
                        variants: h
                    }), l), {
                        ref: t,
                        children: g ? (0, n.tZ)(c.Z, u({
                            variant: "currentColor"
                        }, "sm" === o && {
                            size: "16"
                        })) : (0, n.BX)(n.HY, {
                            children: [d && (0, n.tZ)(i.Z, {
                                mr: "xs",
                                display: "flex",
                                children: d
                            }), (0, n.tZ)(a.Z, {
                                type: "body-md-bold",
                                color: "inherit",
                                children: y
                            }), b && (0, n.tZ)(i.Z, {
                                ml: "xs",
                                display: "flex",
                                children: b
                            })]
                        })
                    }))
                }),
                p = [{
                    prop: "size",
                    variants: {
                        lg: {
                            py: "sm-1",
                            ":hover": {
                                py: "sm-1"
                            }
                        },
                        sm: {
                            py: "xs",
                            ":hover": {
                                py: "xs"
                            }
                        }
                    }
                }];

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = [{
                    prop: "variant",
                    variants: {
                        primary: {
                            bg: "primary.600",
                            color: "neutral.100",
                            ":hover": {
                                bg: "primary.700"
                            },
                            ":active": {
                                bg: "primary.800"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "primary.800"
                            },
                            ":disabled": {
                                opacity: ".4",
                                pointerEvents: "none"
                            }
                        },
                        secondary: {
                            background: "none",
                            borderStyle: "none",
                            boxShadow: "outline-sm",
                            color: "primary.600",
                            ":hover": {
                                bg: "primary.200"
                            },
                            ":active": {
                                bg: "primary.300"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "primary.800"
                            },
                            ":disabled": {
                                opacity: ".4",
                                pointerEvents: "none"
                            }
                        },
                        tertiary: {
                            background: "none",
                            color: "primary.600",
                            ":hover": {
                                bg: "primary.200"
                            },
                            ":active": {
                                bg: "primary.300"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "primary.800"
                            },
                            ":disabled": {
                                pointerEvents: "none",
                                opacity: ".4"
                            }
                        }
                    }
                }].concat(b(p)),
                h = [{
                    prop: "variant",
                    variants: {
                        primary: {
                            bg: "primary.800",
                            color: "neutral.100",
                            pointerEvents: "none"
                        },
                        secondary: {
                            bg: "primary.300",
                            borderStyle: "none",
                            boxShadow: "outline-sm",
                            color: "primary.600",
                            pointerEvents: "none"
                        },
                        tertiary: {
                            bg: "primary.300",
                            color: "primary.600",
                            pointerEvents: "none"
                        }
                    }
                }].concat(b(p));

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return g(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = [{
                    prop: "variant",
                    variants: {
                        primary: {
                            bg: "error.600",
                            color: "neutral.100",
                            ":hover": {
                                bg: "error.700",
                                borderColor: "error.700"
                            },
                            ":active": {
                                bg: "error.800",
                                borderColor: "error.800"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "error.800"
                            },
                            ":disabled": {
                                opacity: ".4",
                                pointerEvents: "none"
                            }
                        },
                        secondary: {
                            background: "none",
                            borderStyle: "none",
                            boxShadow: "outline-sm",
                            color: "error.600",
                            ":hover": {
                                bg: "error.200"
                            },
                            ":active": {
                                bg: "error.300"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "error.800"
                            },
                            ":disabled": {
                                opacity: ".4",
                                pointerEvents: "none"
                            }
                        },
                        tertiary: {
                            background: "none",
                            color: "error.600",
                            ":hover": {
                                bg: "error.200"
                            },
                            ":active": {
                                bg: "error.300"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "error.800"
                            },
                            ":disabled": {
                                pointerEvents: "none",
                                opacity: ".4"
                            }
                        }
                    }
                }].concat(m(p)),
                O = [{
                    prop: "variant",
                    variants: {
                        primary: {
                            bg: "error.800",
                            color: "neutral.100",
                            pointerEvents: "none"
                        },
                        secondary: {
                            bg: "error.300",
                            borderStyle: "none",
                            boxShadow: "outline-sm",
                            color: "error.600",
                            pointerEvents: "none"
                        },
                        tertiary: {
                            bg: "error.300",
                            color: "error.600",
                            pointerEvents: "none"
                        }
                    }
                }].concat(m(p));

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function j(e) {
                return function(e) {
                    if (Array.isArray(e)) return w(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return w(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = [{
                    prop: "variant",
                    variants: {
                        primary: {
                            bg: "neutral.100",
                            borderColor: "neutral.100",
                            color: "neutral.800",
                            ":hover": {
                                bg: "neutral.400"
                            },
                            ":active": {
                                bg: "neutral.500"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "none",
                                outlineOffset: "1px",
                                outlineColor: "neutral.500"
                            },
                            ":disabled": {
                                color: "neutral.600",
                                bg: "neutral.700",
                                pointerEvents: "none"
                            }
                        },
                        secondary: {
                            background: "none",
                            borderStyle: "none",
                            boxShadow: "outline-sm",
                            color: "neutral.100",
                            ":hover": {
                                bg: "neutral.700"
                            },
                            ":active": {
                                bg: "neutral.600"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "neutral.500"
                            },
                            ":disabled": {
                                color: "neutral.700",
                                pointerEvents: "none"
                            }
                        },
                        tertiary: {
                            background: "none",
                            color: "neutral.100",
                            ":hover": {
                                bg: "neutral.700"
                            },
                            ":active": {
                                bg: "neutral.600"
                            },
                            ":focus-visible": {
                                outlineWidth: "2px",
                                outlineStyle: "solid",
                                outlineOffset: "1px",
                                outlineColor: "neutral.500"
                            },
                            ":disabled": {
                                color: "neutral.700",
                                pointerEvents: "none"
                            }
                        }
                    }
                }].concat(j(p)),
                S = [{
                    prop: "variant",
                    variants: {
                        primary: {
                            bg: "neutral.500",
                            color: "neutral.800",
                            pointerEvents: "none"
                        },
                        secondary: {
                            bg: "neutral.600",
                            boxShadow: "outline-sm",
                            borderStyle: "solid",
                            color: "neutral.100",
                            pointerEvents: "none"
                        },
                        tertiary: {
                            bg: "neutral.600",
                            color: "neutral.100",
                            pointerEvents: "none"
                        }
                    }
                }].concat(j(p)),
                P = {
                    brand: y,
                    negative: v,
                    neutral: Z
                },
                x = {
                    brand: h,
                    negative: O,
                    neutral: S
                },
                k = {
                    Primary: o.forwardRef(function(e, t) {
                        var r, o, i = e.children,
                            a = e.appearance,
                            l = void 0 === a ? "brand" : a,
                            c = e.loading,
                            u = void 0 !== c && c,
                            s = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                                }
                                return o
                            }(e, ["children", "appearance", "loading"]),
                            p = u ? x[l] : P[l];
                        return (0, n.tZ)(f, (r = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    var n;
                                    n = r[t], t in e ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = n
                                })
                            }
                            return e
                        }({}, s), o = o = {
                            variants: p,
                            variant: "primary",
                            loading: u,
                            ref: t,
                            children: i
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n)
                            }
                            return r
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                        }), r))
                    }),
                    Secondary: o.forwardRef(function(e, t) {
                        var r, o, i = e.children,
                            a = e.appearance,
                            l = void 0 === a ? "brand" : a,
                            c = e.loading,
                            u = void 0 !== c && c,
                            s = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                                }
                                return o
                            }(e, ["children", "appearance", "loading"]),
                            p = u ? x[l] : P[l];
                        return (0, n.tZ)(f, (r = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    var n;
                                    n = r[t], t in e ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = n
                                })
                            }
                            return e
                        }({}, s), o = o = {
                            variants: p,
                            variant: "secondary",
                            loading: u,
                            ref: t,
                            children: i
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n)
                            }
                            return r
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                        }), r))
                    }),
                    Tertiary: o.forwardRef(function(e, t) {
                        var r, o, i = e.children,
                            a = e.appearance,
                            l = void 0 === a ? "brand" : a,
                            c = e.loading,
                            u = void 0 !== c && c,
                            s = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                                }
                                return o
                            }(e, ["children", "appearance", "loading"]),
                            p = u ? x[l] : P[l];
                        return (0, n.tZ)(f, (r = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    var n;
                                    n = r[t], t in e ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = n
                                })
                            }
                            return e
                        }({}, s), o = o = {
                            variants: p,
                            variant: "tertiary",
                            loading: u,
                            ref: t,
                            children: i
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n)
                            }
                            return r
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                        }), r))
                    })
                }
        },
        270984: function(e, t, r) {
            "use strict";
            var n = r(687800),
                o = r(827378),
                i = r(579894),
                a = r.n(i),
                l = r(797560),
                c = r(22951),
                u = r(759425);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }

            function p(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }
            var d = o.forwardRef(function(e, t) {
                var r = e.children,
                    o = e.href,
                    i = e.type,
                    d = e.prefetch,
                    b = e.styles,
                    y = e.noStyle,
                    h = e.strong,
                    g = e.visitedColor,
                    m = e.hoverColor,
                    v = e.activeColor,
                    O = e.customColor,
                    w = e.shallow,
                    j = e.leadingIcon,
                    Z = e.trailingIcon,
                    S = e.scroll,
                    P = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["children", "href", "type", "prefetch", "styles", "noStyle", "strong", "visitedColor", "hoverColor", "activeColor", "customColor", "shallow", "leadingIcon", "trailingIcon", "scroll"]),
                    x = j || Z,
                    k = (0, u.B)(O),
                    E = [g || k.visited, m || k.hover, v || k.active],
                    C = {
                        passHref: !0,
                        href: o || "#",
                        shallow: w,
                        legacyBehavior: !0,
                        scroll: S
                    };
                return (0, n.tZ)(a(), p(f({}, !1 === d ? p(f({}, C), {
                    prefetch: d
                }) : f({}, C)), {
                    children: (0, n.BX)(c.Z, p(f(p(f({}, P), {
                        as: "a",
                        textDecorationLine: y ? "none" : "underline",
                        pseudo: u.Y.apply(void 0, function(e) {
                            if (Array.isArray(e)) return s(e)
                        }(E) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(E) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return s(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                            }
                        }(E) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        color: k.main
                    }), x && {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "xs"
                    }, b), {
                        children: [j, (0, n.tZ)(l.Z, p(f({}, {
                            as: "span",
                            type: void 0 === i ? "body-md-regular" : i
                        }), {
                            ref: t,
                            strong: h,
                            color: "inherit",
                            children: r
                        })), Z]
                    }))
                }))
            });
            t.Z = d
        },
        759425: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return n
                },
                Y: function() {
                    return o
                }
            });
            var n = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "primary.600",
                        t = e.split(".")[0];
                    return {
                        main: e,
                        visited: "".concat(t, ".800"),
                        hover: "".concat(t, ".700"),
                        active: "".concat(t, ".800")
                    }
                },
                o = function(e, t, r) {
                    return {
                        ":visited": {
                            color: e,
                            "& > *": {
                                color: e
                            }
                        },
                        ":active": {
                            color: r,
                            "& > *": {
                                color: r
                            }
                        },
                        ":hover": {
                            color: t,
                            "& > *": {
                                color: t
                            }
                        }
                    }
                }
        },
        557300: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return y
                }
            });
            var n = r(687800),
                o = r(827378),
                i = r(22951),
                a = r(797560),
                l = {
                    px: "sm-2",
                    borderRadius: "border-radius-sm",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "primary.600",
                    textDecorationLine: "none",
                    cursor: "pointer",
                    fontWeight: "body-regular",
                    lineHeight: "line-height-md-2"
                },
                c = {
                    ":disabled": {
                        opacity: ".4",
                        pointerEvents: "none"
                    },
                    "::before": {
                        display: "block",
                        content: "''attr(data-pseudoContent)''",
                        fontFamily: "secondary",
                        fontWeight: "body-bold",
                        fontSize: "body-md-regular",
                        height: 0,
                        overflow: "hidden",
                        visibility: "hidden"
                    }
                },
                u = {
                    ":first-of-type": {
                        borderBottomRightRadius: "border-radius-zero",
                        borderTopRightRadius: "border-radius-zero"
                    },
                    ":last-of-type": {
                        borderBottomLeftRadius: "border-radius-zero",
                        borderTopLeftRadius: "border-radius-zero",
                        marginLeft: "-1px"
                    },
                    ":not(:first-of-type):not(:last-of-type)": {
                        borderRadius: "border-radius-zero",
                        marginLeft: "-1px"
                    },
                    ":active:not(.active)": {
                        bg: "primary.200",
                        color: "primary.800",
                        fontWeight: "body-bold"
                    },
                    ":hover": {
                        bg: "primary.100",
                        color: "primary.800",
                        fontWeight: "body-bold",
                        letterSpacing: 0
                    },
                    ":hover.active": {
                        bg: "primary.600",
                        color: "neutral.100"
                    }
                };

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }

            function f(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }
            var p = o.forwardRef(function(e, t) {
                var r = e.children,
                    o = e.active,
                    p = void 0 !== o && o,
                    d = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["children", "active"]);
                return (0, n.tZ)(i.Z, f(s(f(s({}, d), {
                    as: "button"
                }), l), {
                    __dangerouslySetCustomCSS: u,
                    pseudo: c,
                    "data-pseudoContent": r,
                    className: p ? "active" : "",
                    fontWeight: p ? "body-bold" : "body-regular",
                    bg: p ? "primary.600" : "neutral.100",
                    color: p ? "neutral.100" : "primary.600",
                    ref: t,
                    children: (0, n.tZ)(a.Z, {
                        color: "inherit",
                        children: r
                    })
                }))
            });

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }

            function b(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }
            var y = Object.assign(o.forwardRef(function(e, t) {
                var r = e.children,
                    a = e.size,
                    l = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }(e, ["children", "size"]);
                if (!Array.isArray(r)) return null;
                var c = "sm" === (void 0 === a ? "lg" : a) ? "xxs" : "xs";
                return (0, n.tZ)(i.Z, b(d({}, l), {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    ref: t,
                    children: o.Children.map(r, function(e, t) {
                        return (0, o.createElement)(p, b(d({}, e.props), {
                            key: "".concat(e.props.children, "_").concat(t),
                            py: c,
                            flexGrow: 1
                        }), e.props.children)
                    })
                }))
            }), {
                Button: p
            })
        },
        607131: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(687800),
                o = r(827378),
                i = r(22951),
                a = {
                    animation: "spin 2s linear infinite",
                    "@keyframes spin": {
                        "0%": {
                            transform: "rotateZ(0deg)"
                        },
                        "100%": {
                            transform: "rotateZ(360deg)"
                        }
                    }
                },
                l = {
                    animation: "1.4s ease-in-out infinite both circle-animation",
                    transformOrigin: "50% 50%",
                    "@keyframes circle-animation": {
                        "0%, 25%": {
                            strokeDashoffset: 280,
                            transform: "rotate(0)"
                        },
                        "50%,75%": {
                            strokeDashoffset: 75,
                            transform: "rotate(45deg)"
                        },
                        "100%": {
                            strokeDashoffset: 280,
                            transform: "rotate(360deg)"
                        }
                    }
                },
                c = [{
                    prop: "variant",
                    variants: {
                        primary: {
                            color: "components.spinner.color.brand"
                        },
                        neutral: {
                            color: "components.spinner.color.neutral"
                        },
                        currentColor: {
                            color: "inherit"
                        }
                    }
                }],
                u = (0, o.forwardRef)(function(e, t) {
                    var r = e.size,
                        o = void 0 === r ? "24" : r,
                        u = e.variant;
                    return (0, n.tZ)(i.d, {
                        display: "flex",
                        variant: void 0 === u ? "neutral" : u,
                        variants: c,
                        children: (0, n.tZ)(i.d, {
                            as: "svg",
                            viewBox: "0 0 100 100",
                            height: "".concat(o, "px"),
                            maxWidth: "".concat(o, "px"),
                            __dangerouslySetCustomCSS: a,
                            ref: t,
                            children: (0, n.tZ)(i.d, {
                                as: "circle",
                                cx: "50",
                                cy: "50",
                                r: "45",
                                fill: "none",
                                display: "block",
                                strokeLinecap: "round",
                                strokeDasharray: 283,
                                strokeDashoffset: 280,
                                strokeWidth: "64" === o ? "8px" : "6px",
                                stroke: "currentColor",
                                __dangerouslySetCustomCSS: l
                            })
                        })
                    })
                }),
                s = (0, o.forwardRef)(function(e, t) {
                    var r, o;
                    return (0, n.tZ)(u, (r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({}, e), o = o = {
                        ref: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    }), r))
                })
        },
        797560: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var n = r(687800),
                o = r(827378),
                i = r(22951),
                a = [{
                    prop: "type",
                    variants: {
                        "body-xxl-regular": {
                            fontWeight: "body-regular",
                            fontSize: "body-xxl-regular",
                            lineHeight: "line-height-md-3"
                        },
                        "body-xxl-bold": {
                            fontWeight: "body-bold",
                            fontSize: "body-xxl-regular",
                            lineHeight: "line-height-md-3"
                        },
                        "body-xl-regular": {
                            fontWeight: "body-regular",
                            fontSize: "body-xl-regular",
                            lineHeight: "line-height-md-3"
                        },
                        "body-xl-bold": {
                            fontWeight: "body-bold",
                            fontSize: "body-xl-regular",
                            lineHeight: "line-height-md-3"
                        },
                        "body-md-bold": {
                            fontWeight: "body-bold",
                            fontSize: "body-md-regular",
                            lineHeight: "line-height-md-2"
                        },
                        "body-md-regular": {
                            fontWeight: "body-regular",
                            fontSize: "body-md-regular",
                            lineHeight: "line-height-md-2"
                        },
                        "body-lg-regular": {
                            fontWeight: "body-regular",
                            fontSize: "body-lg-regular",
                            lineHeight: "line-height-md-3"
                        },
                        "body-lg-bold": {
                            fontWeight: "body-bold",
                            fontSize: "body-lg-regular",
                            lineHeight: "line-height-md-3"
                        },
                        "body-sm-regular": {
                            fontWeight: "body-regular",
                            fontSize: "body-sm-regular",
                            lineHeight: "line-height-md-1"
                        },
                        "body-sm-bold": {
                            fontWeight: "body-bold",
                            fontSize: "body-sm-regular",
                            lineHeight: "line-height-md-1"
                        },
                        "body-xs-regular": {
                            fontWeight: "body-regular",
                            fontSize: "body-xs-regular",
                            lineHeight: "line-height-sm-1"
                        },
                        "body-xs-bold": {
                            fontWeight: "body-bold",
                            fontSize: "body-xs-regular",
                            lineHeight: "line-height-sm-1"
                        }
                    }
                }, {
                    prop: "as",
                    variants: {
                        h1: {
                            fontFamily: "primary",
                            fontWeight: "headline",
                            fontSize: ["headline-xl-mobile-tablet", "headline-xl-mobile-tablet", "headline-xl-desktop"],
                            lineHeight: ["line-height-lg-1", "line-height-lg-1", "line-height-lg-2"]
                        },
                        h2: {
                            fontFamily: "primary",
                            fontWeight: "headline",
                            fontSize: ["headline-lg-mobile-tablet", "headline-lg-mobile-tablet", "headline-lg-desktop"],
                            lineHeight: ["line-height-md-3", "line-height-md-3", "line-height-lg-1"]
                        },
                        h3: {
                            fontFamily: "primary",
                            fontWeight: "headline",
                            fontSize: ["headline-md-mobile-tablet", "headline-md-mobile-tablet", "headline-md-desktop"],
                            lineHeight: ["line-height-md-2", "line-height-md-2", "line-height-md-3"]
                        },
                        h4: {
                            fontFamily: "primary",
                            fontWeight: "headline",
                            fontSize: ["headline-sm-mobile-tablet", "headline-sm-mobile-tablet", "headline-sm-desktop"],
                            lineHeight: ["line-height-md-1", "line-height-md-1", "line-height-md-2"]
                        }
                    }
                }, {
                    prop: "strikethrough",
                    variants: {
                        true: {
                            textDecorationLine: "line-through"
                        }
                    }
                }, {
                    prop: "strong",
                    variants: {
                        true: {
                            fontWeight: "body-bold"
                        }
                    }
                }, {
                    prop: "error",
                    variants: {
                        true: {
                            color: "error.600"
                        }
                    }
                }, {
                    prop: "success",
                    variants: {
                        true: {
                            color: "success.600"
                        }
                    }
                }, {
                    prop: "hint",
                    variants: {
                        true: {
                            color: "neutral.800"
                        }
                    }
                }],
                l = ["h1", "h2", "h3", "h4"],
                c = {
                    color: "neutral.800",
                    fontFamily: "secondary",
                    fontSize: "body-md-regular",
                    margin: "zero"
                },
                u = o.forwardRef(function(e, t) {
                    var r, o, u = e.children,
                        s = e.as,
                        f = void 0 === s ? "span" : s,
                        p = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, ["children", "as"]);
                    return l.includes(f) && delete p.type, (0, n.tZ)(i.Z, (r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        as: f
                    }, c, p), o = o = {
                        type: p.type,
                        variants: a,
                        ref: t,
                        children: u
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    }), r))
                })
        },
        82558: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return y
                }
            });
            var n = r(687800),
                o = r(827378),
                i = r(661706),
                a = [{
                    prop: "variant",
                    variants: {
                        light: {
                            color: "components.tooltip.color.light.background",
                            boxShadow: "shadow-lg"
                        },
                        dark: {
                            color: "components.tooltip.color.dark.background",
                            boxShadow: "shadow-lg"
                        }
                    }
                }],
                l = [{
                    prop: "variant",
                    variants: {
                        light: {
                            backgroundColor: "components.tooltip.color.light.background",
                            color: "components.tooltip.color.light.foreground",
                            "::before": {
                                borderColor: "components.tooltip.color.light.background"
                            }
                        },
                        dark: {
                            backgroundColor: "components.tooltip.color.dark.background",
                            color: "components.tooltip.color.dark.foreground",
                            "::before": {
                                borderColor: "components.tooltip.color.dark.background"
                            }
                        }
                    }
                }],
                c = r(22951),
                u = r(797560),
                s = {
                    borderRadius: "border-radius-sm",
                    display: "flex",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))",
                    fontSize: "body-md-regular",
                    paddingY: "xs",
                    paddingX: "sm-2"
                },
                f = {
                    fill: "currentColor",
                    width: "14px",
                    height: "8px"
                };

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }

            function d(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            var y = (0, o.forwardRef)(function(e, t) {
                var r = e.trigger,
                    o = b(e, ["trigger"]),
                    y = o.asChild,
                    h = void 0 !== y && y,
                    g = o.contentStyle,
                    m = o.position,
                    v = o.placement,
                    O = o.variant,
                    w = o.content,
                    j = o.maxWidth,
                    Z = o.triggerStyles,
                    S = o.isVisible,
                    P = o.defaultOpen,
                    x = o.onOpenChange,
                    k = b(o, ["asChild", "contentStyle", "position", "placement", "variant", "content", "maxWidth", "triggerStyles", "isVisible", "defaultOpen", "onOpenChange"]);
                return (0, n.tZ)(c.Z, {
                    ref: t,
                    children: (0, n.tZ)(i.zt, {
                        delayDuration: 800,
                        skipDelayDuration: 400,
                        children: (0, n.BX)(i.fC, {
                            open: S,
                            defaultOpen: P,
                            onOpenChange: x,
                            children: [(0, n.tZ)(i.xz, {
                                asChild: h,
                                style: p({}, h ? {} : {
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    padding: 0
                                }, Z),
                                children: r || "+"
                            }), (0, n.tZ)(i.VY, d(p({
                                side: void 0 === m ? "bottom" : m,
                                align: void 0 === v ? "start" : v,
                                sideOffset: 8,
                                style: g
                            }, k), {
                                children: (0, n.BX)(c.d, d(p({}, s), {
                                    maxWidth: void 0 === j ? "300px" : j,
                                    variants: l,
                                    variant: O,
                                    children: [(0, n.tZ)(u.Z, {
                                        color: "inherit",
                                        children: w
                                    }), (0, n.tZ)(c.d, {
                                        variants: a,
                                        variant: O,
                                        children: (0, n.tZ)(i.Eh, {
                                            style: f
                                        })
                                    })]
                                }))
                            }))]
                        })
                    })
                })
            })
        },
        495561: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return e7
                },
                default: function() {
                    return e8
                }
            });
            var n = r(687800),
                o = r(827378),
                i = r(310725),
                a = r(233169),
                l = r(165218),
                c = r.n(l),
                u = r(22951),
                s = r(870973),
                f = r(427795),
                p = r(357933),
                d = [{
                    value: .25,
                    symbol: "\xbc"
                }, {
                    value: .5,
                    symbol: "\xbd"
                }, {
                    value: .75,
                    symbol: "\xbe"
                }, {
                    value: .33,
                    symbol: "⅓"
                }, {
                    value: .34,
                    symbol: "⅓"
                }, {
                    value: .66,
                    symbol: "⅔"
                }, {
                    value: .67,
                    symbol: "⅔"
                }, {
                    value: .2,
                    symbol: "⅕"
                }, {
                    value: .4,
                    symbol: "⅖"
                }, {
                    value: .6,
                    symbol: "⅗"
                }, {
                    value: .8,
                    symbol: "⅘"
                }];

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return b(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = function(e) {
                    var t = d.find(function(t) {
                        return t.value === e
                    });
                    return t ? t.symbol : e
                },
                g = function(e, t) {
                    if (!t) return "";
                    var r = t.ingredients.find(function(t) {
                        return t.id === e
                    });
                    if (r) {
                        var n = [],
                            o = r.amount,
                            i = r.unit;
                        return o && n.push(h(Math.round(100 * o) / 100)), i && n.push(i), n.length > 1 ? n.toString().replace(",", " ") : n.toString()
                    }
                    return ""
                },
                m = function(e, t, r, n) {
                    return e.filter(function(e) {
                        return e.shipped === n
                    }).map(function(e) {
                        var n, o;
                        return n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    var n;
                                    n = r[t], t in e ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = n
                                })
                            }
                            return e
                        }({}, e), o = o = {
                            allergens: e.allergens.map(function(e) {
                                return t.find(function(t) {
                                    return t.id === e
                                })
                            }),
                            amount: g(e.id, r)
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n)
                            }
                            return r
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                        }), n
                    })
                },
                v = function(e) {
                    var t = e.reduce(function(e, t) {
                        return t ? t.triggersTracesOf ? (e.showTraces = !0, e) : (t.tracesOf ? e.traceAllergens = y(e.traceAllergens).concat([t.name.replace("Traces of ", "")]) : e.fullAllergens = y(e.fullAllergens).concat([t.name]), e) : e
                    }, {
                        fullAllergens: [],
                        traceAllergens: [],
                        showTraces: !1,
                        showAllergens: !1
                    });
                    return t.traceAllergens.length || (t.showTraces = !1), t.fullAllergens.length && (t.showAllergens = !0), t
                };

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }
            var j = {
                    calories: "57b42a48b7e8697d4b305304",
                    fatContent: "57b42a48b7e8697d4b305307",
                    saturatedFatContent: "57b42a48b7e8697d4b305308",
                    carbohydrateContent: "57b42a48b7e8697d4b305305",
                    sugarContent: "57b42a48b7e8697d4b305306",
                    proteinContent: "57b42a48b7e8697d4b305309",
                    fiberContent: "57b42a48b7e8697d4b30530a",
                    cholesterolContent: "57b42a48b7e8697d4b30530c",
                    sodiumContent: "57b42a48b7e8697d4b30530b",
                    servingSize: null
                },
                Z = function(e, t) {
                    var r, n, o, i = (r = function(t) {
                            var r = e && e.find(function(e) {
                                return e.type === t
                            });
                            return r ? "".concat(r.amount, " ").concat(r.unit) : null
                        }, Object.fromEntries(Object.entries(j).map(function(e) {
                            var t = function(e) {
                                if (Array.isArray(e)) return e
                            }(e) || function(e, t) {
                                var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var i = [],
                                        a = !0,
                                        l = !1;
                                    try {
                                        for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                    } catch (e) {
                                        l = !0, n = e
                                    } finally {
                                        try {
                                            a || null == o.return || o.return()
                                        } finally {
                                            if (l) throw n
                                        }
                                    }
                                    return i
                                }
                            }(e, 2) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return O(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(e, t)
                                }
                            }(e, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }();
                            return [t[0], r(t[1])]
                        }))),
                        a = t ? (n = w({}, i), o = o = {
                            servingSize: t.toString()
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n)
                            }
                            return r
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                        }), n) : i;
                    return w({
                        "@type": "NutritionInformation"
                    }, a)
                },
                S = function(e, t) {
                    var r = t.find(function(e) {
                        return 2 === e.yields
                    }) || (null == t ? void 0 : t[0]);
                    return e.map(function(e) {
                        var t = e.name,
                            n = g(e.id, r);
                        return "".concat(n, " ").concat(t)
                    })
                },
                P = function(e) {
                    var t = e.name,
                        r = e.headline,
                        n = e.imagePath,
                        o = e.description,
                        i = e.createdAt,
                        a = e.prepTime,
                        l = e.nutrition,
                        c = e.servingSize,
                        u = e.steps,
                        s = e.ingredients,
                        f = e.tags,
                        d = e.cuisines,
                        b = e.recipeCategory,
                        y = e.yields,
                        h = n ? (0, p.Z)(n) : "/";
                    return {
                        "@context": "http://schema.org/",
                        "@type": "Recipe",
                        name: "".concat(t, " ").concat(r || ""),
                        author: "HelloFresh",
                        image: "https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200".concat(h),
                        thumbnailUrl: "https://img.hellofresh.com/f_auto,fl_lossy,h_300,q_auto,w_450".concat(h),
                        description: o,
                        datePublished: i,
                        totalTime: a,
                        nutrition: Z(l, c),
                        recipeInstructions: u.length && u.map(function(e) {
                            return {
                                "@type": "HowToStep",
                                text: e.instructions
                            }
                        }),
                        recipeIngredient: S(s, y),
                        recipeYield: 2,
                        keywords: f.map(function(e) {
                            return e.name
                        }),
                        recipeCategory: b,
                        recipeCuisine: d.length && d[0].name
                    }
                },
                x = function(e) {
                    var t = e.name,
                        r = e.headline,
                        o = e.imagePath,
                        i = e.description,
                        a = e.createdAt,
                        l = e.prepTime,
                        c = e.nutrition,
                        u = e.servingSize,
                        s = e.steps,
                        p = e.ingredients,
                        d = e.tags,
                        b = e.cuisines,
                        y = e.yields,
                        h = P({
                            name: t,
                            headline: r,
                            imagePath: o,
                            description: i,
                            createdAt: a,
                            prepTime: l,
                            nutrition: c,
                            servingSize: u,
                            steps: s,
                            ingredients: p,
                            tags: d,
                            cuisines: b,
                            recipeCategory: (0, (0, f.Z)("recipe-detail").translateRaw)("recipe-detail.metadata.recipeCategory"),
                            yields: y
                        });
                    return (0, n.tZ)("script", {
                        type: "application/ld+json",
                        id: "schema-org",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(h)
                        }
                    }, "schema-org")
                },
                k = r(102097),
                E = r(188038),
                C = r.n(E),
                I = r(686677);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var D = function() {
                    var e, t = (function(e) {
                            if (Array.isArray(e)) return e
                        }(e = (0, o.useState)(0)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(e, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return A(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(e, t)
                            }
                        }(e, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[1],
                        r = (0, I.useRouter)();
                    (0, o.useEffect)(function() {
                        t(function(e) {
                            return e + 1
                        })
                    }, [r.query.slug])
                },
                _ = r(101518),
                T = r(479231),
                B = function() {
                    var e = (0, _.Z)(),
                        t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), n.forEach(function(t) {
                                    var n;
                                    n = r[t], t in e ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = n
                                })
                            }
                            return e
                        }({}, (0, I.useRouter)().query);
                    delete t.slug;
                    var r = e === T.Z.BE || e === T.Z.CA;
                    return 0 === Object.keys(t).length || r ? "index,follow" : "noindex,follow"
                },
                z = function(e) {
                    var t = e.name,
                        r = e.seoName,
                        i = e.description,
                        a = e.imagePath,
                        l = e.createdAt,
                        c = e.updatedAt,
                        u = e.tags,
                        s = e.websiteUrl,
                        d = e.seoDescription,
                        b = e.canonicalLink,
                        y = (0, f.Z)("recipe-detail").translateRaw,
                        h = (0, k.Z)(),
                        g = B(),
                        m = (0, o.useMemo)(function() {
                            var e = r || t,
                                n = y("recipe-detail.recipe-detail.recipe");
                            return "".concat(e, " ").concat(n, " | HelloFresh")
                        }, [t, r, y]),
                        v = h.replace("-", "_"),
                        O = a ? "https://img.hellofresh.com".concat((0, p.Z)(a)) : "https://cdn.hellofresh.com/de/cms/raf/hellofresh-logo.png";
                    return D(), (0, n.BX)(C(), {
                        children: [(0, n.tZ)("title", {
                            children: m
                        }, "title"), (0, n.tZ)("meta", {
                            name: "description",
                            content: d || i
                        }, "description"), (0, n.tZ)("meta", {
                            name: "thumbnail",
                            content: O
                        }, "thumbnail"), (0, n.tZ)("meta", {
                            name: "author",
                            content: "HelloFresh"
                        }, "author"), (0, n.tZ)("meta", {
                            property: "og:locale",
                            content: v
                        }, "og:locale"), (0, n.tZ)("meta", {
                            property: "og:title",
                            content: m
                        }, "og:title"), (0, n.tZ)("meta", {
                            property: "og:image",
                            content: O
                        }, "og:image"), (0, n.tZ)("meta", {
                            property: "og:url",
                            content: b || s
                        }, "og:url"), (0, n.tZ)("meta", {
                            property: "og:type",
                            content: "article"
                        }, "og:type"), (0, n.tZ)("meta", {
                            property: "og:description",
                            content: d || i
                        }, "og:description"), (0, n.tZ)("meta", {
                            property: "og:updated_time",
                            content: c
                        }, "og:updated_time"), (0, n.tZ)("meta", {
                            content: g,
                            name: "robots"
                        }), (0, n.tZ)("meta", {
                            property: "og:site_name",
                            content: "HelloFresh"
                        }, "og:site_name"), u.map(function(e) {
                            return (0, n.tZ)(o.Fragment, {
                                children: (0, n.tZ)("meta", {
                                    property: "article:tag",
                                    content: e.name
                                }, "article:tag")
                            }, e.id)
                        }), (0, n.tZ)("meta", {
                            property: "article:published_time",
                            content: l
                        }, "article:published_time"), (0, n.tZ)("meta", {
                            property: "article:modified_time",
                            content: c
                        }, "article:modified_time"), (0, n.tZ)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }, "twitter:card"), (0, n.tZ)("meta", {
                            name: "twitter:description",
                            content: d || i
                        }, "twitter:description"), (0, n.tZ)("meta", {
                            name: "twitter:title",
                            content: m
                        }, "twitter:title"), (0, n.tZ)("meta", {
                            name: "twitter:site",
                            content: "@hellofresh"
                        }, "twitter:site"), (0, n.tZ)("meta", {
                            name: "twitter:image",
                            content: O
                        }, "twitter:image"), (0, n.tZ)("link", {
                            rel: "canonical",
                            href: b || s
                        }, "canonical"), (0, n.tZ)("link", {
                            rel: "preconnect",
                            href: "https://img.hellofresh.com/"
                        }), (0, n.tZ)("link", {
                            rel: "dns-prefetch",
                            href: "https://img.hellofresh.com/"
                        })]
                    })
                },
                W = function(e) {
                    var t = e.children;
                    return (0, n.tZ)(u.Z, {
                        px: ["sm-1", "md-1", "zero"],
                        children: (0, n.tZ)(u.Z, {
                            maxWidth: ["100%", "960px", "1140px"],
                            mx: "auto",
                            pb: "md-1",
                            position: "relative",
                            children: t
                        })
                    })
                },
                R = r(270984),
                L = r(797560),
                X = function(e) {
                    var t = e.text,
                        r = e.link,
                        o = e.itemPropContentPosition;
                    return (0, n.BX)(u.Z, {
                        "data-test-id": "breadcrumbs-item-text",
                        itemProp: "itemListElement",
                        itemType: "http://schema.org/ListItem",
                        itemScope: !0,
                        children: [(0, n.tZ)("meta", {
                            itemProp: "position",
                            content: o
                        }), r ? (0, n.tZ)(R.Z, {
                            href: r,
                            itemProp: "item",
                            type: ["body-sm-regular", "body-md-regular"],
                            noStyle: !0,
                            children: (0, n.tZ)(L.Z, {
                                type: ["body-sm-regular", "body-md-regular"],
                                itemProp: "name",
                                children: t
                            })
                        }) : (0, n.tZ)(u.Z, {
                            as: "span",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            __dangerouslySetCustomCSS: {
                                "-webkit-line-clamp": "2",
                                "-webkit-box-orient": "vertical"
                            },
                            overflow: "hidden",
                            children: (0, n.tZ)(L.Z, {
                                itemProp: "name",
                                type: ["body-sm-regular", "body-md-regular"],
                                children: t
                            })
                        })]
                    })
                },
                M = r(835972),
                H = function() {
                    return (0, n.tZ)(u.Z, {
                        mx: ["xxs", "xs"],
                        display: "flex",
                        children: (0, n.tZ)(M.Z, {})
                    })
                },
                U = function(e, t) {
                    if ((null == e ? void 0 : e.length) && (null == t ? void 0 : t.length)) {
                        var r, n = null === (r = e[0]) || void 0 === r ? void 0 : r.id;
                        if (n) return t.find(function(e) {
                            return e.cuisine === n
                        })
                    }
                },
                N = function(e) {
                    var t = e.name,
                        r = e.cuisines,
                        i = e.collections,
                        a = (0, (0, f.Z)("recipe-detail").translateRaw)("breadcrumbs-recipes-anchor-translation"),
                        l = (0, o.useMemo)(function() {
                            return U(r, i)
                        }, [r, i]);
                    return (0, n.tZ)(u.Z, {
                        width: "100%",
                        minHeight: "56px",
                        backgroundColor: "neutral.100",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderBottomColor: "neutral.400",
                        itemScope: !0,
                        itemType: "http://schema.org/BreadcrumbList",
                        "data-test-id": "recipe-details-breadcrumbs",
                        children: (0, n.tZ)(u.Z, {
                            width: ["100%", "100%", "1140px"],
                            minHeight: "56px",
                            mx: "auto",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            p: "xs",
                            children: (0, n.BX)(u.Z, {
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                children: [(0, n.tZ)(X, {
                                    text: "HelloFresh",
                                    link: "/",
                                    itemPropContentPosition: "1"
                                }), (0, n.tZ)(H, {}), (0, n.tZ)(X, {
                                    text: a || "Recipes",
                                    link: "/recipes",
                                    itemPropContentPosition: "2"
                                }), (0, n.tZ)(H, {}), l && (0, n.BX)(n.HY, {
                                    children: [(0, n.tZ)(X, {
                                        text: l.name,
                                        link: l.url,
                                        itemPropContentPosition: "3"
                                    }), (0, n.tZ)(H, {})]
                                }), (0, n.tZ)(X, {
                                    text: t,
                                    itemPropContentPosition: l ? "4" : "3"
                                })]
                            })
                        })
                    })
                },
                F = r(74138),
                $ = r(575491),
                q = r(336052),
                V = function(e) {
                    var t = e.hasSEOTag,
                        r = (0, q.bD)(),
                        o = r.ads,
                        i = r.voucherUrlOverrides,
                        l = (0, a.Z)().push,
                        c = (0, $.Z)();
                    if (!o.enabled || c) return null;
                    var s = "topBannerName",
                        f = t && i ? i.adUrl : o.url;
                    return (0, n.tZ)(u.Z, {
                        display: "flex",
                        paddingY: "sm-1",
                        alignItems: "center",
                        justifyContent: "center",
                        children: (0, n.BX)(R.Z, {
                            href: f,
                            onClick: function() {
                                l({
                                    event: "gaEventTrigger",
                                    gaEventCategory: "RecipeArchive-DetailPage",
                                    gaEventLabel: s,
                                    gaEventAction: "top-display-banner-click"
                                })
                            },
                            "data-test-id": "top-banner-ad-link",
                            children: [(0, n.tZ)(u.Z, {
                                display: ["none", "none", "block"],
                                height: "90px",
                                children: (0, n.tZ)(F.Z, {
                                    "data-test-id": "top-banner-ad-desktop",
                                    src: (0, p.Z)(o.topImageUrlDesktop),
                                    width: 970,
                                    height: 90,
                                    alt: "".concat(s, " Desktop")
                                })
                            }), (0, n.tZ)(u.Z, {
                                display: ["none", "block", "none"],
                                height: "90px",
                                children: (0, n.tZ)(F.Z, {
                                    "data-test-id": "top-banner-ad-tablet",
                                    src: (0, p.Z)(o.topImageUrlTablet),
                                    width: 728,
                                    height: 90,
                                    alt: "".concat(s, " Tablet")
                                })
                            }), (0, n.tZ)(u.Z, {
                                display: ["block", "none", "none"],
                                height: "50px",
                                children: (0, n.tZ)(F.Z, {
                                    "data-test-id": "top-banner-ad-mobile",
                                    src: (0, p.Z)(o.topImageUrlMobile),
                                    width: 320,
                                    height: 50,
                                    alt: "".concat(s, " Mobile")
                                })
                            })]
                        })
                    })
                },
                Y = r(82558),
                G = r(546604),
                J = function(e) {
                    var t = e.children,
                        r = e.onClick;
                    return (0, n.tZ)(u.Z, {
                        as: "div",
                        px: "xs",
                        pt: "sm-1",
                        pb: "xs",
                        pseudo: {
                            ":hover": {
                                cursor: "pointer"
                            }
                        },
                        "data-test-id": "socialbutton",
                        backgroundColor: "transparent",
                        borderStyle: "none",
                        onClick: r,
                        children: t
                    })
                };

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Q = function(e) {
                    var t, r = e.label,
                        i = e.message,
                        l = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, o.useState)(!1)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return K(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return K(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        c = l[0],
                        u = l[1],
                        s = (0, f.Z)("recipe-detail").translateRaw,
                        p = (0, a.Z)().push;
                    return (0, n.tZ)(Y.Z, {
                        trigger: (0, n.tZ)(J, {
                            onClick: function() {
                                window.open("mailto:?body=".concat(i), "_self"), p({
                                    event: "gaEventTrigger",
                                    gaEventCategory: "recipe share",
                                    gaEventAction: "shareEmail",
                                    gaEventLabel: r,
                                    gaEventNonInteraction: !1
                                })
                            },
                            onToggle: function() {
                                return u(!c)
                            },
                            children: (0, n.tZ)(G.Z, {
                                title: "Email",
                                titleId: "email"
                            })
                        }),
                        position: "top",
                        placement: "center",
                        variant: "dark",
                        content: s("recipe-detail.share-email")
                    })
                },
                ee = r(468891),
                et = function(e) {
                    var t, r, o = e.title,
                        i = e.titleId,
                        a = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, ["title", "titleId"]);
                    return (0, n.BX)("svg", (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 48 48",
                        fill: "#1877F2",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": i
                    }, a), r = r = {
                        children: [o ? (0, n.tZ)("title", {
                            id: i,
                            children: o
                        }) : null, (0, n.tZ)("path", {
                            d: "M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.98 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.626 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.748V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.98 48 24"
                        }), (0, n.tZ)("path", {
                            fill: "#fff",
                            d: "M33.342 30.938L34.406 24H27.75v-4.502c0-1.898.93-3.748 3.911-3.748h3.026V9.844s-2.746-.469-5.372-.469c-5.482 0-9.065 3.322-9.065 9.337V24h-6.094v6.938h6.094v16.77a24.174 24.174 0 007.5 0v-16.77h5.592z",
                            className: "facebook"
                        })]
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }), t))
                },
                er = "810745035675402";

            function en(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var eo = function(e) {
                    var t, r = e.label,
                        i = e.message,
                        l = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, o.useState)(!1)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return en(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return en(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        c = l[0],
                        u = l[1],
                        s = (0, f.Z)("recipe-detail").translateRaw,
                        p = (0, a.Z)().push;
                    return (0, n.tZ)(Y.Z, {
                        trigger: (0, n.tZ)(J, {
                            onClick: function() {
                                var e = (0, ee.stringify)({
                                    app_id: er,
                                    display: "popup",
                                    caption: i,
                                    link: window.location.href,
                                    redirect_uri: "https://www.facebook.com/"
                                });
                                window.open("".concat("https://www.facebook.com/dialog/feed", "?").concat(e), "_blank", "height=600,width=750"), p({
                                    event: "gaEventTrigger",
                                    gaEventCategory: "recipe share",
                                    gaEventAction: "shareFacebook",
                                    gaEventLabel: r,
                                    gaEventNonInteraction: !1
                                })
                            },
                            onToggle: function() {
                                return u(!c)
                            },
                            children: (0, n.tZ)(et, {
                                title: "Facebook",
                                titleId: "facebook"
                            })
                        }),
                        position: "top",
                        placement: "center",
                        variant: "dark",
                        content: s("recipe-detail.share-facebook")
                    })
                },
                ei = function(e) {
                    var t, r, o = e.title,
                        i = e.titleId,
                        a = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, ["title", "titleId"]);
                    return (0, n.BX)("svg", (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 48 48",
                        fill: "#1DA1F2",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": i
                    }, a), r = r = {
                        children: [o ? (0, n.tZ)("title", {
                            id: i,
                            children: o
                        }) : null, (0, n.tZ)("path", {
                            d: "M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0"
                        }), (0, n.tZ)("path", {
                            fill: "#fff",
                            d: "M19.608 36.66c10.644 0 16.464-8.82 16.464-16.464 0-.252 0-.504-.012-.744a11.855 11.855 0 002.892-3 11.745 11.745 0 01-3.324.912 5.783 5.783 0 002.544-3.204 11.718 11.718 0 01-3.672 1.404 5.758 5.758 0 00-4.224-1.824 5.787 5.787 0 00-5.784 5.784c0 .456.048.9.156 1.32-4.812-.24-9.072-2.544-11.928-6.048a5.805 5.805 0 00-.78 2.904 5.76 5.76 0 002.58 4.812 5.684 5.684 0 01-2.616-.72v.072a5.793 5.793 0 004.644 5.676c-.48.132-.996.204-1.524.204-.372 0-.732-.036-1.092-.108a5.778 5.778 0 005.4 4.02 11.632 11.632 0 01-7.188 2.472c-.468 0-.924-.024-1.38-.084a16.122 16.122 0 008.844 2.616",
                            className: "twitter"
                        })]
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }), t))
                };

            function ea(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var el = function(e) {
                    var t, r = e.label,
                        i = e.message,
                        l = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, o.useState)(!1)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return ea(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ea(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        c = l[0],
                        u = l[1],
                        s = (0, f.Z)("recipe-detail").translateRaw,
                        p = (0, a.Z)().push;
                    return (0, n.tZ)(Y.Z, {
                        trigger: (0, n.tZ)(J, {
                            onClick: function() {
                                window.open("".concat("https://twitter.com/intent/tweet", "?").concat((0, ee.stringify)({
                                    text: i
                                })), "_blank", "height=600,width=750"), p({
                                    event: "gaEventTrigger",
                                    gaEventCategory: "recipe share",
                                    gaEventAction: "shareTwitter",
                                    gaEventLabel: r,
                                    gaEventNonInteraction: !1
                                })
                            },
                            onToggle: function() {
                                return u(!c)
                            },
                            children: (0, n.tZ)(ei, {
                                title: "Twitter",
                                titleId: "twitter"
                            })
                        }),
                        position: "top",
                        placement: "center",
                        variant: "dark",
                        content: s("recipe-detail.share-twitter")
                    })
                },
                ec = function(e) {
                    var t, r, o = e.title,
                        i = e.titleId,
                        a = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, ["title", "titleId"]);
                    return (0, n.BX)("svg", (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        width: 25,
                        height: 25,
                        viewBox: "0 0 24 24",
                        fill: "#E60019",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": i
                    }, a), r = r = {
                        children: [o ? (0, n.tZ)("title", {
                            id: i,
                            children: o
                        }) : null, (0, n.tZ)("path", {
                            fill: "#fff",
                            d: "M12 0c6.627 0 12 5.35 12 11.95 0 6.601-5.373 11.952-12 11.952S0 18.552 0 11.95C0 5.35 5.373 0 12 0",
                            className: "pinterest"
                        }), (0, n.tZ)("path", {
                            fill: "#E60019",
                            d: "M12 0C5.373 0 0 5.35 0 11.95c0 5.066 3.16 9.394 7.625 11.135-.109-.944-.198-2.4.04-3.433.216-.934 1.402-5.94 1.402-5.94s-.356-.719-.356-1.771c0-1.662.968-2.902 2.173-2.902 1.027 0 1.52.768 1.52 1.682 0 1.023-.65 2.558-.997 3.984-.286 1.19.603 2.164 1.778 2.164 2.134 0 3.773-2.243 3.773-5.469 0-2.862-2.064-4.859-5.017-4.859-3.418 0-5.422 2.548-5.422 5.184 0 1.023.395 2.124.888 2.724a.355.355 0 01.08.344c-.09.374-.297 1.19-.336 1.358-.05.216-.178.265-.405.157-1.502-.698-2.44-2.872-2.44-4.633 0-3.767 2.746-7.23 7.931-7.23 4.158 0 7.398 2.952 7.398 6.906 0 4.121-2.608 7.436-6.223 7.436-1.214 0-2.36-.63-2.745-1.377l-.751 2.842c-.267 1.043-.997 2.341-1.491 3.138 1.126.344 2.31.531 3.555.531 6.627 0 12-5.35 12-11.95C24 5.35 18.627 0 12 0"
                        })]
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }), t))
                };

            function eu(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var es = function(e) {
                    var t, r = e.label,
                        i = e.imagePath,
                        l = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, o.useState)(!1)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return eu(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eu(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        c = l[0],
                        u = l[1],
                        s = (0, f.Z)("recipe-detail").translateRaw,
                        d = (0, a.Z)().push,
                        b = s("recipe-detail.share-pinterest");
                    return (0, n.tZ)(Y.Z, {
                        trigger: (0, n.tZ)(J, {
                            onClick: function() {
                                var e = (0, ee.stringify)({
                                    description: b,
                                    media: "https://img.hellofresh.com".concat((0, p.Z)(i)),
                                    url: window.location.href
                                });
                                window.open("".concat("https://www.pinterest.com/pin/create/button/", "?").concat(e), "_blank", "height=600,width=750"), d({
                                    event: "gaEventTrigger",
                                    gaEventCategory: "recipe share",
                                    gaEventAction: "sharePinIt",
                                    gaEventLabel: r,
                                    gaEventNonInteraction: !1
                                })
                            },
                            onToggle: function() {
                                return u(!c)
                            },
                            children: (0, n.tZ)(ec, {
                                title: "Pinterest",
                                titleId: "pinterest"
                            })
                        }),
                        position: "top",
                        placement: "center",
                        variant: "dark",
                        content: b
                    })
                },
                ef = function(e) {
                    var t, r, o = e.title,
                        i = e.titleId,
                        a = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, ["title", "titleId"]);
                    return (0, n.BX)("svg", (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        width: 25,
                        height: 25,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "#1173FB",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        "aria-labelledby": i
                    }, a), r = r = {
                        children: [o ? (0, n.tZ)("title", {
                            id: i,
                            children: o
                        }) : null, (0, n.tZ)("path", {
                            d: "M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 5.5c-3.866 0-7 2.902-7 6.481 0 2.04 1.018 3.86 2.609 5.048v2.471l2.383-1.308c.636.176 1.31.271 2.008.271 3.866 0 7-2.902 7-6.482 0-3.579-3.134-6.481-7-6.481zm.696 8.728l-1.783-1.901-3.478 1.901 3.826-4.061 1.826 1.901 3.435-1.901-3.826 4.061z"
                        })]
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }), t))
                };

            function ep(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ed = function(e) {
                    var t, r = e.label,
                        i = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, o.useState)(!1)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return ep(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ep(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        l = i[0],
                        c = i[1],
                        s = (0, f.Z)("recipe-detail").translateRaw,
                        p = (0, a.Z)().push;
                    return (0, n.tZ)(u.Z, {
                        display: ["block", "none"],
                        children: (0, n.tZ)(Y.Z, {
                            trigger: (0, n.tZ)(J, {
                                onClick: function() {
                                    var e = (0, ee.stringify)({
                                        app_id: er,
                                        link: window.location.href
                                    });
                                    window.open("".concat("fb-messenger://share", "?").concat(e), "_self"), p({
                                        event: "gaEventTrigger",
                                        gaEventCategory: "recipe share",
                                        gaEventAction: "shareMessenger",
                                        gaEventLabel: r,
                                        gaEventNonInteraction: !1
                                    })
                                },
                                onToggle: function() {
                                    return c(!l)
                                },
                                children: (0, n.tZ)(ef, {
                                    title: "Messenger",
                                    titleId: "messenger"
                                })
                            }),
                            position: "top",
                            placement: "center",
                            variant: "dark",
                            content: s("recipe-detail.share-messenger")
                        })
                    })
                },
                eb = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = window.location.href;
                    return r ? "".concat(e, " ").concat(n) : "".concat(encodeURIComponent(e), " ").concat(escape("\n"), " ").concat(encodeURIComponent(t), " ").concat(escape("\n"), " ").concat(n)
                },
                ey = function(e) {
                    var t = e.id,
                        r = e.name,
                        o = e.description,
                        i = e.imagePath,
                        a = "".concat(r, "|").concat(t),
                        l = eb(r, o),
                        c = eb(r, o, !0);
                    return (0, n.tZ)(u.Z, {
                        backgroundColor: "neutral.100",
                        position: ["fixed", "absolute"],
                        right: ["unset", "zero"],
                        bottom: ["zero", "unset"],
                        top: ["unset", "-70px"],
                        left: ["zero", "unset"],
                        width: ["100%", "auto"],
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "neutral.300",
                        zIndex: 9,
                        "data-test-id": "socail-sharing",
                        children: (0, n.BX)(u.Z, {
                            display: "flex",
                            px: "xs",
                            children: [(0, n.tZ)(Q, {
                                label: a,
                                message: l
                            }), (0, n.tZ)(eo, {
                                label: a,
                                message: l
                            }), (0, n.tZ)(el, {
                                label: a,
                                message: c
                            }), (0, n.tZ)(ed, {
                                label: a
                            }), (0, n.tZ)(es, {
                                label: a,
                                imagePath: i
                            })]
                        })
                    })
                },
                eh = r(271416);

            function eg(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var em = [
                    [320, 100],
                    [380, 100],
                    [420, 200],
                    [800, 400],
                    [1024, 500],
                    [1260, 500],
                    [1900, 500],
                    [2600, 1100]
                ],
                ev = function(e) {
                    var t = em.map(function(t) {
                        var r = function(e) {
                                if (Array.isArray(e)) return e
                            }(t) || function(e, t) {
                                var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var i = [],
                                        a = !0,
                                        l = !1;
                                    try {
                                        for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                    } catch (e) {
                                        l = !0, n = e
                                    } finally {
                                        try {
                                            a || null == o.return || o.return()
                                        } finally {
                                            if (l) throw n
                                        }
                                    }
                                    return i
                                }
                            }(t, 2) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return eg(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eg(e, t)
                                }
                            }(t, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            n = r[0],
                            o = r[1];
                        return "".concat((0, eh.ZP)(e)({
                            width: n,
                            height: o,
                            crop: "fit",
                            quality: 30
                        }), " ").concat(n, "w")
                    });
                    return {
                        src: (0, eh.ZP)(e)({
                            width: 1200
                        }),
                        srcset: t.join(", ")
                    }
                },
                eO = function(e) {
                    var t = e.id,
                        r = e.name,
                        o = e.imagePath,
                        i = o ? ev(o) : null;
                    return (0, n.tZ)(u.Z, {
                        height: ["211px", "400px", "500px"],
                        position: "relative",
                        "data-test-id": "recipe-hero-image",
                        overflow: "hidden",
                        children: i && (0, n.BX)(n.HY, {
                            children: [(0, n.tZ)(C(), {
                                children: (0, n.tZ)("link", {
                                    rel: "preload",
                                    as: "image",
                                    href: i.src,
                                    imageSrcSet: i.srcset
                                }, "image-".concat(t))
                            }), (0, n.tZ)("img", {
                                src: i.src,
                                srcSet: i.srcset,
                                alt: r,
                                sizes: "100vw",
                                width: "100%",
                                style: {
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%,-50%)"
                                },
                                fetchpriority: "high"
                            }, t)]
                        })
                    })
                },
                ew = r(136943),
                ej = function(e) {
                    var t = e.hasSEOTag,
                        r = (0, a.Z)().push,
                        o = (0, f.Z)("recipe-detail").translate,
                        i = (0, q.bD)(),
                        l = i.ctaButton,
                        c = i.voucherUrlOverrides,
                        s = l.name || o("recipe-detail.delivered-to-your-door"),
                        p = t && c ? c.ctaUrl : l.url;
                    return (0, n.tZ)(u.Z, {
                        display: "flex",
                        children: (0, n.tZ)(ew.Z.Primary, {
                            as: "a",
                            href: p || "/plans",
                            "data-test-id": "recipe-cta-button",
                            onClick: function() {
                                r({
                                    event: "gaEventTrigger",
                                    gaEventCategory: "RecipeDetailPage-ProductPage",
                                    gaEventAction: "CTA",
                                    gaEventNonInteraction: !1
                                })
                            },
                            children: s
                        })
                    })
                },
                eZ = r(362420),
                eS = r(307280),
                eP = function(e) {
                    var t = e.id,
                        r = e.name,
                        o = e.cardLink,
                        i = (0, a.Z)().push;
                    return o ? (0, n.tZ)(u.Z, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        children: (0, n.tZ)(R.Z, {
                            href: o,
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            onClick: function() {
                                i({
                                    event: "gaEventTrigger",
                                    event_name: "Cookbook_RecipeCardSearchDownload",
                                    recipe_id: t,
                                    recipe_name: r,
                                    gaEventCategory: "recipe download",
                                    gaEventAction: o
                                })
                            },
                            noStyle: !0,
                            children: (0, n.tZ)(u.Z, {
                                as: "button",
                                display: "flex",
                                width: "50px",
                                height: "50px",
                                borderRadius: "border-radius-circle",
                                borderColor: "primary.600",
                                color: "primary.600",
                                backgroundColor: "neutral.100",
                                borderStyle: "solid",
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                pseudo: {
                                    ":hover": {
                                        cursor: "pointer",
                                        color: "neutral.100",
                                        backgroundColor: "primary.600"
                                    }
                                },
                                "data-test-id": "recipe-download-button",
                                children: (0, n.tZ)(eS.Z, {})
                            })
                        })
                    }) : null
                },
                ex = function(e) {
                    var t = e.id,
                        r = e.name,
                        o = e.headline,
                        i = e.authorInfo,
                        a = e.cardLink,
                        l = e.hasSEOTag,
                        c = (0, $.Z)();
                    return (0, n.BX)(u.Z, {
                        display: "flex",
                        flexDirection: ["column", "row"],
                        children: [(0, n.BX)(u.Z, {
                            flex: "1",
                            pr: ["zero", "sm-1"],
                            children: [(0, n.tZ)(L.Z, {
                                as: "h1",
                                mb: "xs",
                                children: r
                            }), (0, n.tZ)(L.Z, {
                                as: "h2",
                                children: o
                            }), (null == i ? void 0 : i.displayLabel) && (0, n.tZ)(u.Z, {
                                mt: "xs",
                                children: (0, n.tZ)(eZ.Z, {
                                    name: i.name,
                                    foregroundColor: i.foregroundColor,
                                    backgroundColor: i.backgroundColor
                                })
                            })]
                        }), (0, n.tZ)(u.Z, {
                            pl: ["zero", "sm-1"],
                            mt: ["sm-2", "zero"],
                            children: c ? (0, n.tZ)(eP, {
                                id: t,
                                name: r,
                                cardLink: a
                            }) : (0, n.tZ)(ej, {
                                hasSEOTag: l
                            })
                        })]
                    })
                },
                ek = function(e) {
                    var t = e.title,
                        r = e.items,
                        o = e.itemTestId;
                    return (null == r ? void 0 : r.length) ? (0, n.BX)(u.Z, {
                        mt: "md-1",
                        children: [(0, n.BX)(L.Z, {
                            strong: !0,
                            mr: "xs",
                            children: [t, ":"]
                        }), r.map(function(e, t) {
                            var r = e.id,
                                i = e.name;
                            return (0, n.BX)(u.Z, {
                                display: "inline-block",
                                "data-test-id": o,
                                children: [0 !== t && (0, n.tZ)(L.Z, {
                                    mx: "xs",
                                    color: "neutral.800",
                                    children: "•"
                                }), (0, n.tZ)(L.Z, {
                                    color: "neutral.800",
                                    children: i
                                })]
                            }, r)
                        })]
                    }) : null
                },
                eE = function(e) {
                    var t = e.onClick,
                        r = (0, f.Z)("recipe-detail").translate;
                    return (0, n.tZ)(u.Z, {
                        display: ["flex", "none"],
                        position: "absolute",
                        bottom: "0",
                        width: "100%",
                        height: "60px",
                        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), #ffffff)",
                        children: (0, n.tZ)(u.Z, {
                            as: "button",
                            width: "100%",
                            height: "24px",
                            mt: "auto",
                            borderWidth: 0,
                            backgroundColor: "transparent",
                            textDecorationLine: "underline",
                            color: "neutral.700",
                            onClick: t,
                            pseudo: {
                                ":hover": {
                                    cursor: "pointer"
                                }
                            },
                            children: (0, n.tZ)(L.Z, {
                                color: "neutral.700",
                                children: r("recipe-detail.read-more")
                            })
                        })
                    })
                };

            function eC(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var eI = function(e) {
                    var t, r = e.description,
                        i = e.tags,
                        a = void 0 === i ? [] : i,
                        l = e.allergens,
                        c = (0, f.Z)("recipe-detail").translate,
                        s = (0, q.bD)().showAllergenDisclaimer,
                        p = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, o.useState)(!1)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return eC(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eC(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        d = p[0],
                        b = p[1],
                        y = (0, o.useMemo)(function() {
                            return l.filter(function(e) {
                                return !e.tracesOf && !e.triggersTracesOf
                            })
                        }, [l]),
                        h = (0, o.useMemo)(function() {
                            return a.filter(function(e) {
                                return !0 === e.displayLabel
                            })
                        }, [a]);
                    return (0, n.BX)(u.Z, {
                        position: "relative",
                        width: [1, 2 / 3],
                        pr: ["zero", "sm-2"],
                        height: [d ? "auto" : "100px", "auto"],
                        overflow: [d ? "visible" : "hidden", "visible"],
                        children: [r && (0, n.tZ)(u.Z, {
                            __dangerouslySetCustomCSS: {
                                p: {
                                    marginTop: 0
                                }
                            },
                            children: (0, n.tZ)(L.Z, {
                                "data-test-id": "description-body-title",
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            })
                        }), (0, n.tZ)(ek, {
                            title: c("recipe-detail.tags"),
                            items: h,
                            itemTestId: "recipe-description-tag"
                        }), (0, n.tZ)(ek, {
                            title: c("recipe-detail.allergens"),
                            items: y,
                            itemTestId: "recipe-description-allergen"
                        }), s && (0, n.tZ)(L.Z, {
                            as: "p",
                            type: "body-sm-regular",
                            mt: "md-1",
                            children: c("recipe-detail.allergens-disclaimer")
                        }), !d && (0, n.tZ)(eE, {
                            onClick: function() {
                                return b(!0)
                            }
                        })]
                    })
                },
                eA = r(147448),
                eD = function(e) {
                    var t = e.prepTime,
                        r = e.totalTime,
                        o = e.difficulty,
                        i = e.author,
                        a = (0, k.Z)(),
                        l = (0, f.Z)("recipe-detail").translate;
                    return (0, n.BX)(u.Z, {
                        width: [1, 1 / 3],
                        mt: ["md-1", "zero"],
                        children: [t && (0, n.BX)(u.Z, {
                            display: "flex",
                            justifyContent: "space-between",
                            mb: "md-1",
                            children: [(0, n.tZ)(L.Z, {
                                strong: !0,
                                children: l("recipe-detail.preparation-time")
                            }), (0, n.tZ)(L.Z, {
                                textAlign: "right",
                                children: (0, eA.D)(t, a)
                            })]
                        }), r && (0, n.BX)(u.Z, {
                            display: "flex",
                            justifyContent: "space-between",
                            mb: "md-1",
                            children: [(0, n.tZ)(L.Z, {
                                strong: !0,
                                children: l("recipe-detail.cooking-time")
                            }), (0, n.tZ)(L.Z, {
                                textAlign: "right",
                                children: (0, eA.D)(r, a)
                            })]
                        }), o && (0, n.BX)(u.Z, {
                            display: "flex",
                            justifyContent: "space-between",
                            children: [(0, n.tZ)(L.Z, {
                                strong: !0,
                                children: l("recipe-detail.difficulty")
                            }), (0, n.tZ)(L.Z, {
                                textAlign: "right",
                                children: l("recipe-detail.level-number-".concat(o))
                            })]
                        }), "thermomix" === i && (0, n.tZ)(L.Z, {
                            as: "p",
                            mt: "md-1",
                            children: l("recipe-detail.cook-this-recipe-with-thermomix")
                        })]
                    })
                },
                e_ = function(e) {
                    var t = e.id,
                        r = e.name,
                        o = e.headline,
                        i = e.description,
                        a = e.tags,
                        l = e.allergens,
                        c = e.authorInfo,
                        s = e.author,
                        f = e.difficulty,
                        p = e.totalTime,
                        d = e.prepTime,
                        b = e.cardLink,
                        y = e.hasSEOTag;
                    return (0, n.BX)(u.Z, {
                        position: "relative",
                        backgroundColor: "neutral.100",
                        p: ["sm-1", "sm-2", "md-1"],
                        __dangerouslySetCustomCSS: {
                            marginTop: "-60px"
                        },
                        "data-test-id": "recipe-description",
                        children: [(0, n.tZ)(ex, {
                            id: t,
                            name: r,
                            headline: o,
                            authorInfo: c,
                            cardLink: b,
                            hasSEOTag: y
                        }), (0, n.BX)(u.Z, {
                            mt: "md-1",
                            pt: "md-1",
                            borderTopStyle: "solid",
                            borderTopWidth: 1,
                            borderTopColor: "neutral.300",
                            display: "flex",
                            flexDirection: ["column", "row"],
                            children: [(0, n.tZ)(eI, {
                                description: i,
                                tags: a,
                                allergens: l
                            }), (0, n.tZ)(eD, {
                                author: s,
                                prepTime: d,
                                totalTime: p,
                                difficulty: f
                            })]
                        })]
                    })
                },
                eT = r(331243),
                eB = r(511002),
                ez = function(e) {
                    var t = e.testId,
                        r = e.imagePath,
                        o = e.name,
                        i = e.amount,
                        a = e.allergens,
                        l = (0, f.Z)("recipe-detail").translateRaw,
                        c = v(a),
                        s = c.showAllergens,
                        d = c.fullAllergens,
                        b = c.showTraces,
                        y = c.traceAllergens;
                    return (0, n.BX)(u.Z, {
                        flex: "50%",
                        flexGrow: 0,
                        display: "flex",
                        mt: "md-1",
                        alignItems: "center",
                        "data-test-id": t,
                        children: [(0, n.tZ)(u.Z, {
                            flexShrink: 0,
                            position: "relative",
                            borderRadius: "border-radius-circle",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "neutral.300",
                            width: ["50px", "70px"],
                            height: ["50px", "70px"],
                            overflow: "hidden",
                            children: r && (0, n.BX)(n.HY, {
                                children: [(0, n.tZ)(eB.Z, {
                                    viewports: ["mobile"],
                                    children: (0, n.tZ)(F.Z, {
                                        src: (0, p.Z)(r),
                                        width: "50",
                                        height: "50",
                                        alt: o
                                    })
                                }), (0, n.tZ)(eB.Z, {
                                    viewports: ["tablet", "desktop"],
                                    children: (0, n.tZ)(F.Z, {
                                        src: (0, p.Z)(r),
                                        width: "70",
                                        height: "70",
                                        alt: o
                                    })
                                })]
                            })
                        }), (0, n.BX)(u.Z, {
                            ml: "sm-1",
                            children: [(0, n.tZ)(L.Z, {
                                as: "p",
                                type: "body-sm-regular",
                                children: i
                            }), (0, n.tZ)(L.Z, {
                                as: "p",
                                type: "body-sm-regular",
                                my: "xxs",
                                children: o
                            }), (s || b) && (0, n.BX)(L.Z, {
                                as: "p",
                                children: ["(", s && (0, n.BX)(n.HY, {
                                    children: [(0, n.tZ)(L.Z, {
                                        type: "body-sm-regular",
                                        dangerouslySetInnerHTML: {
                                            __html: l("recipe-detail.contains", {
                                                allergens: " ".concat(d.join(", "))
                                            })
                                        }
                                    }), b && " "]
                                }), b && (0, n.tZ)(n.HY, {
                                    children: (0, n.tZ)(L.Z, {
                                        type: "body-sm-regular",
                                        dangerouslySetInnerHTML: {
                                            __html: l("recipe-detail.may-be-present", {
                                                allergens: " ".concat(y.join(", "))
                                            })
                                        }
                                    })
                                }), ")"]
                            })]
                        })]
                    })
                },
                eW = r(557300),
                eR = function(e) {
                    var t, r = e.servingSize,
                        o = e.servings,
                        i = e.onClick,
                        a = (0, f.Z)("recipe-detail"),
                        l = a.translate,
                        c = a.translateRaw;
                    return (0, n.tZ)(u.Z, {
                        display: "flex",
                        alignItems: "center",
                        children: o.length > 1 ? (0, n.BX)(n.HY, {
                            children: [(0, n.tZ)(L.Z, {
                                mr: "sm-1",
                                color: "neutral.600",
                                children: l("recipe-detail.recipe-detail.serving-amount")
                            }), (0, n.tZ)(eW.Z, {
                                children: o.map(function(e) {
                                    var t = e.yields;
                                    return (0, n.tZ)(eW.Z.Button, {
                                        "aria-label": "".concat(t),
                                        active: t === r,
                                        onClick: function() {
                                            return i(t)
                                        },
                                        children: t
                                    }, t)
                                })
                            })]
                        }) : (0, n.BX)(L.Z, {
                            color: "neutral.600",
                            children: ["/", " ", c("recipe-detail.recipe-detail.serving-amount-dynamic", {
                                size: (null == o ? void 0 : null === (t = o[0]) || void 0 === t ? void 0 : t.yields) || 2
                            })]
                        })
                    })
                };

            function eL(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function eX(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }

            function eM(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }
            var eH = function(e) {
                    var t, r, i = e.ingredients,
                        a = e.allergens,
                        l = e.yields,
                        c = (0, f.Z)("recipe-detail").translate,
                        s = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, o.useState)((null === (r = l[0]) || void 0 === r ? void 0 : r.yields) || 2)) || function(e, t) {
                            var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    l = !1;
                                try {
                                    for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    l = !0, n = e
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (l) throw n
                                    }
                                }
                                return i
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return eL(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eL(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        p = s[0],
                        d = s[1],
                        b = (0, o.useMemo)(function() {
                            return l.find(function(e) {
                                return e.yields === p
                            })
                        }, [l, p]),
                        y = (0, o.useMemo)(function() {
                            return m(i, a, b, !0)
                        }, [i, a, b]),
                        h = (0, o.useMemo)(function() {
                            return m(i, a, b, !1)
                        }, [i, a, b]);
                    return i.length ? (0, n.tZ)(u.Z, {
                        "data-test-id": "ingredients-list",
                        width: [1, 1, 2 / 3],
                        order: [2, 2, 1],
                        backgroundColor: "neutral.100",
                        p: ["sm-1", "sm-2", "md-1"],
                        mt: ["md-1", "md-1", "zero"],
                        children: (0, n.BX)(eT.Z, {
                            title: c("recipe-detail.ingredients"),
                            children: [(0, n.tZ)(u.Z, {
                                display: ["flex", "block"],
                                justifyContent: "center",
                                mt: ["sm-2", "zero"],
                                position: ["relative", "absolute"],
                                top: ["unset", "zero"],
                                right: ["unset", "zero"],
                                children: (0, n.tZ)(eR, {
                                    servingSize: p,
                                    servings: l,
                                    onClick: d
                                })
                            }), (0, n.tZ)(u.Z, {
                                display: "flex",
                                flexWrap: "wrap",
                                children: y.map(function(e) {
                                    return (0, n.tZ)(ez, eM(eX({}, e), {
                                        testId: "ingredient-item-shipped"
                                    }), e.id)
                                })
                            }), !!h.length && (0, n.BX)(u.Z, {
                                mt: "md-1",
                                borderTopWidth: 1,
                                borderTopStyle: "solid",
                                borderTopColor: "neutral.300",
                                children: [(0, n.tZ)(L.Z, {
                                    as: "h3",
                                    mt: "md-1",
                                    children: c("recipe-detail.ingredients.not-included")
                                }), (0, n.tZ)(u.Z, {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    children: h.map(function(e) {
                                        return (0, n.tZ)(ez, eM(eX({}, e), {
                                            testId: "ingredient-item-not-shipped"
                                        }), e.id)
                                    })
                                })]
                            })]
                        })
                    }) : null
                },
                eU = function(e) {
                    var t = e.imagePath,
                        r = e.caption;
                    return (0, n.tZ)(u.Z, {
                        flex: 1,
                        width: "340px",
                        height: "250px",
                        children: t && (0, n.tZ)(F.Z, {
                            width: "340",
                            height: "250",
                            src: (0, p.Z)(t),
                            alt: r,
                            style: {
                                objectFit: "cover"
                            }
                        })
                    })
                },
                eN = function(e) {
                    var t, r, o = e.index,
                        i = e.instruction,
                        a = e.numberOfSteps;
                    return (0, n.BX)(u.Z, (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({
                        display: "flex",
                        alignItems: ["center", "flex-start"],
                        gap: "md-2",
                        flexDirection: ["column", "row"],
                        flex: 2,
                        pt: ["zero", "sm-2"]
                    }, 1 !== o && {
                        borderTopWidth: ["0", "1px"],
                        borderTopStyle: ["none", "solid"],
                        borderTopColor: "neutral.400"
                    }, o !== a && {
                        borderBottomWidth: ["1px", "0"],
                        borderBottomStyle: ["solid", "none"],
                        borderBottomColor: "neutral.400"
                    }), r = r = {
                        children: [(0, n.tZ)(u.Z, {
                            display: "flex",
                            children: (0, n.tZ)(u.Z, {
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "neutral.400",
                                borderRadius: "border-radius-circle",
                                textAlign: "center",
                                children: (0, n.tZ)(L.Z, {
                                    type: "body-xl-regular",
                                    children: o
                                })
                            })
                        }), (0, n.tZ)(u.Z, {
                            pb: ["sm-2", "zero"],
                            __dangerouslySetCustomCSS: {
                                p: {
                                    marginTop: 0
                                }
                            },
                            children: (0, n.tZ)(L.Z, {
                                type: "body-md-regular",
                                dangerouslySetInnerHTML: {
                                    __html: i
                                }
                            })
                        })]
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n)
                        }
                        return r
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }), t))
                },
                eF = function(e) {
                    var t = e.steps,
                        r = t.length;
                    return (0, n.tZ)(u.Z, {
                        "data-test-id": "instructions",
                        children: t.map(function(e) {
                            var t = e.images,
                                o = e.instructions,
                                i = e.index,
                                a = e.instructionsHTML,
                                l = t[0];
                            return (0, n.BX)(u.Z, {
                                "data-test-id": "instruction-step",
                                display: "flex",
                                flexDirection: ["column", "row"],
                                mt: "md-1",
                                gap: "md-2",
                                alignItems: ["center", "flex-start"],
                                children: [l && (0, n.tZ)(eU, {
                                    imagePath: l.path,
                                    caption: l.caption
                                }), (0, n.tZ)(eN, {
                                    index: i,
                                    instruction: a || o,
                                    numberOfSteps: r
                                })]
                            }, i)
                        })
                    })
                },
                e$ = function(e) {
                    var t = e.steps,
                        r = e.cardLink,
                        o = (0, f.Z)("recipe-detail").translate;
                    return (0, n.tZ)(u.Z, {
                        mt: "md-1",
                        backgroundColor: "neutral.100",
                        p: ["sm-1", "sm-2", "md-1"],
                        "data-test-id": "instructions",
                        children: (0, n.BX)(eT.Z, {
                            title: o("recipe-detail.instructions"),
                            isDefaultExpanded: !0,
                            children: [r && (0, n.tZ)(u.Z, {
                                position: "absolute",
                                right: "zero",
                                top: "zero",
                                children: (0, n.tZ)(R.Z, {
                                    href: r,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "data-test-id": "recipe-pdf",
                                    noStyle: !0,
                                    children: (0, n.BX)(u.Z, {
                                        display: "flex",
                                        color: "neutral.700",
                                        textDecorationLine: "none",
                                        children: [(0, n.tZ)(eS.Z, {}), (0, n.tZ)(L.Z, {
                                            ml: "xxs",
                                            color: "neutral.700",
                                            children: "PDF"
                                        })]
                                    })
                                })
                            }), (0, n.tZ)(eF, {
                                steps: t
                            })]
                        })
                    })
                },
                eq = "https://cdn.hellofresh.com/landing-pages/Pages",
                eV = function(e) {
                    var t = e.collections,
                        r = (0, f.Z)("recipe-detail").translateRaw;
                    return (null == t ? void 0 : t.length) ? (0, n.BX)(u.Z, {
                        mt: "md-1",
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                        backgroundColor: "neutral.100",
                        "data-test-id": "links-list",
                        children: [(0, n.tZ)(u.Z, {
                            position: "absolute",
                            right: "0",
                            width: ["60px", "100px"],
                            height: "100%",
                            children: (0, n.tZ)(u.Z, {
                                position: "relative",
                                height: "100%",
                                children: (0, n.tZ)(F.Z, {
                                    src: (0, p.Z)(eq + "/menu-top.png"),
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        objectPosition: "right top"
                                    },
                                    alt: "Meal right image"
                                })
                            })
                        }), (0, n.BX)(u.Z, {
                            p: ["sm-1", "sm-2", "md-1"],
                            maxWidth: "85%",
                            width: "100%",
                            mx: "auto",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            children: [(0, n.tZ)(L.Z, {
                                as: "h2",
                                children: r("recipe-detail.page-list.title")
                            }), (0, n.tZ)(u.Z, {
                                mt: "sm-2",
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "center",
                                maxHeight: ["216px", "108px", "72px"],
                                overflow: "hidden",
                                children: t.map(function(e, t) {
                                    var r = e.name,
                                        o = e.url;
                                    return (0, n.tZ)(u.Z, {
                                        width: [1, .5, 1 / 3],
                                        children: (0, n.tZ)(u.Z, {
                                            pb: "sm-1",
                                            children: (0, n.tZ)(R.Z, {
                                                title: r,
                                                href: o,
                                                children: r
                                            })
                                        })
                                    }, "".concat(o, "-").concat(t))
                                })
                            })]
                        }), (0, n.tZ)(u.Z, {
                            position: "absolute",
                            left: "0",
                            width: ["60px", "100px"],
                            height: "100%",
                            children: (0, n.tZ)(u.Z, {
                                position: "relative",
                                height: "100%",
                                children: (0, n.tZ)(F.Z, {
                                    src: (0, p.Z)(eq + "/menu-bottom.png"),
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        objectPosition: "left bottom"
                                    },
                                    alt: "Meal left image"
                                })
                            })
                        })]
                    }) : null
                },
                eY = c()(function() {
                    return r.e(7631).then(r.bind(r, 707631))
                }, {
                    loadableGenerated: {
                        webpack: () => [707631]
                    }
                }),
                eG = c()(function() {
                    return r.e(49242).then(r.bind(r, 749242))
                }, {
                    loadableGenerated: {
                        webpack: () => [749242]
                    }
                }),
                eJ = c()(function() {
                    return r.e(51177).then(r.bind(r, 751177))
                }, {
                    loadableGenerated: {
                        webpack: () => [751177]
                    }
                }),
                eK = c()(function() {
                    return r.e(92333).then(r.bind(r, 292333))
                }, {
                    loadableGenerated: {
                        webpack: () => [292333]
                    }
                }),
                eQ = function(e) {
                    var t, r, i, l = e.contentfulEntries,
                        c = e.authorInfo,
                        f = e.recipeId,
                        p = (0, a.Z)().push,
                        d = (0, s.r)({
                            id: f
                        }).data.recipe,
                        b = d.id,
                        y = d.name,
                        h = d.description,
                        g = d.descriptionHTML,
                        m = d.headline,
                        v = d.imagePath,
                        O = d.tags,
                        w = d.allergens,
                        j = d.author,
                        Z = d.prepTime,
                        S = d.totalTime,
                        P = d.difficulty,
                        k = d.ingredients,
                        E = d.yields,
                        C = d.utensils,
                        I = d.nutrition,
                        A = d.servingSize,
                        D = d.steps,
                        _ = d.cardLink,
                        T = d.cuisines,
                        B = d.seoName,
                        R = d.updatedAt,
                        L = d.createdAt,
                        X = d.websiteUrl,
                        M = d.seoDescription,
                        H = d.canonicalLink,
                        U = O.find(function(e) {
                            return "SEO" === e.name
                        });
                    return (0, o.useEffect)(function() {
                        p({
                            event: "gaEventTrigger",
                            gaEventCategory: "viewRecipeDetail",
                            gaEventAction: "pageView",
                            gaEventLabel: b
                        })
                    }, [p, b]), (0, n.BX)(n.HY, {
                        children: [(0, n.tZ)(z, {
                            name: y,
                            seoName: B,
                            description: h,
                            imagePath: v,
                            createdAt: L,
                            updatedAt: R,
                            tags: O,
                            websiteUrl: X,
                            seoDescription: M,
                            canonicalLink: H
                        }), (0, n.BX)(u.Z, {
                            "data-test-id": "recipe-details-container",
                            children: [(0, n.tZ)(N, {
                                name: y,
                                cuisines: T,
                                collections: null == l ? void 0 : null === (t = l.fields) || void 0 === t ? void 0 : t.cuisineCollections
                            }), (0, n.tZ)(V, {
                                hasSEOTag: U
                            }), (0, n.tZ)(eO, {
                                id: b,
                                name: y,
                                imagePath: v
                            }), (0, n.BX)(W, {
                                children: [(0, n.tZ)(ey, {
                                    id: b,
                                    name: y,
                                    description: h,
                                    imagePath: v
                                }), (0, n.tZ)(e_, {
                                    id: b,
                                    name: y,
                                    headline: m,
                                    description: g || h,
                                    tags: O,
                                    allergens: w,
                                    authorInfo: c,
                                    author: j,
                                    prepTime: Z,
                                    totalTime: S,
                                    difficulty: P,
                                    cardLink: _,
                                    hasSEOTag: U
                                }), (0, n.BX)(u.Z, {
                                    display: "flex",
                                    flexDirection: ["column", "column", "row"],
                                    mt: "md-1",
                                    children: [(0, n.tZ)(eH, {
                                        ingredients: k,
                                        allergens: w,
                                        yields: E
                                    }), (0, n.tZ)(eJ, {
                                        servingSize: A,
                                        nutrition: I,
                                        hasSEOTag: U
                                    })]
                                }), (0, n.tZ)(eY, {
                                    utensils: C
                                }), (0, n.tZ)(e$, {
                                    steps: D,
                                    cardLink: _
                                }), (0, n.tZ)(eK, {
                                    ingredients: k,
                                    collections: null == l ? void 0 : null === (r = l.fields) || void 0 === r ? void 0 : r.collections
                                }), (0, n.tZ)(eV, {
                                    collections: null == l ? void 0 : null === (i = l.fields) || void 0 === i ? void 0 : i.pageCollections
                                }), (0, n.tZ)(eG, {
                                    recipeId: b
                                })]
                            })]
                        }), (0, n.tZ)(x, {
                            name: y,
                            headline: m,
                            imagePath: v,
                            description: h,
                            createdAt: L,
                            prepTime: Z,
                            nutrition: I,
                            servingSize: A,
                            steps: D,
                            ingredients: k,
                            tags: O,
                            cuisines: T,
                            yields: E
                        })]
                    })
                },
                e0 = r(338425),
                e1 = r(544454),
                e2 = r(462807),
                e3 = function(e) {
                    var t = e.ssrPayload;
                    return (0, n.BX)(q.m4, {
                        children: [(0, n.BX)(e0.Z, {
                            IPCountry: null == t ? void 0 : t.IPCountry,
                            children: [(0, n.tZ)(e1.Z, {
                                microTagsEntries: null == t ? void 0 : t.microTagsEntries
                            }), (0, n.tZ)(eQ, {
                                recipeId: null == t ? void 0 : t.recipeId,
                                authorInfo: null == t ? void 0 : t.authorInfo,
                                contentfulEntries: null == t ? void 0 : t.contentfulEntries
                            })]
                        }), (0, n.tZ)(e2.Z, {})]
                    })
                };
            e3.customLayout = i.Z, e3.provideCustomLayoutProps = {
                header: {
                    position: "sticky"
                },
                footer: {
                    pageName: "recipes",
                    displaySeoFooter: !0
                }
            };
            var e7 = !0,
                e8 = e3
        },
        331243: function(e, t, r) {
            "use strict";
            var n = r(687800),
                o = r(827378),
                i = r(162883),
                a = r(22951),
                l = r(797560),
                c = r(883009),
                u = r(816516);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            t.Z = function(e) {
                var t, r = e.title,
                    f = e.isDefaultExpanded,
                    p = e.children,
                    d = (0, o.useRef)(null),
                    b = function(e) {
                        if (Array.isArray(e)) return e
                    }(t = (0, o.useState)(void 0 !== f && f)) || function(e, t) {
                        var r, n, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                l = !1;
                            try {
                                for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                l = !0, n = e
                            } finally {
                                try {
                                    a || null == o.return || o.return()
                                } finally {
                                    if (l) throw n
                                }
                            }
                            return i
                        }
                    }(t, 2) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                        }
                    }(t, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    y = b[0],
                    h = b[1],
                    g = (0, i.Z)().isMobile;
                return (0, n.BX)(a.Z, {
                    position: "relative",
                    children: [(0, n.tZ)(a.Z, {
                        ref: d,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        "data-test-id": "expand-block",
                        onClick: function() {
                            h(!y), d && g && requestAnimationFrame(function() {
                                var e;
                                null === (e = d.current) || void 0 === e || e.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                })
                            })
                        },
                        children: (0, n.BX)(a.Z, {
                            display: "flex",
                            alignItems: "center",
                            gap: "sm-2",
                            children: [(0, n.tZ)(l.Z, {
                                as: "h2",
                                children: r
                            }), (0, n.tZ)(a.Z, {
                                display: ["flex", "none"],
                                alignItems: "center",
                                children: y ? (0, n.tZ)(u.Z, {
                                    "data-test-id": "up-arrow"
                                }) : (0, n.tZ)(c.Z, {
                                    "data-test-id": "down-arrow"
                                })
                            })]
                        })
                    }), (0, n.tZ)(a.Z, {
                        display: [y ? "block" : "none", "block"],
                        "data-test-id": "expanded-body",
                        children: p
                    })]
                })
            }
        },
        362420: function(e, t, r) {
            "use strict";
            var n = r(687800);
            r(827378);
            var o = r(22951),
                i = r(797560);
            t.Z = function(e) {
                var t = e.name,
                    r = e.backgroundColor,
                    a = e.foregroundColor;
                return (0, n.tZ)(o.Z, {
                    display: "inline-block",
                    backgroundColor: r,
                    px: "xxs",
                    borderRadius: "border-radius-sm",
                    "data-test-id": "label-text",
                    children: (0, n.tZ)(i.Z, {
                        color: a,
                        type: "body-xs-bold",
                        children: t.toUpperCase()
                    })
                })
            }
        },
        336052: function(e, t, r) {
            "use strict";
            r.d(t, {
                bD: function() {
                    return u
                },
                m4: function() {
                    return c
                }
            });
            var n, o = r(398252);

            function i(e, t, r, n, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }
            var a = function(e, t) {
                    var r, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
                            return function(i) {
                                if (r) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                l = (0, o.Z)("hf.recipe.detail", (n = function() {
                    return a(this, function(e) {
                        return [2, r.e(91077).then(r.bind(r, 791077))]
                    })
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, o) {
                        var a = n.apply(e, t);

                        function l(e) {
                            i(a, r, o, l, c, "next", e)
                        }

                        function c(e) {
                            i(a, r, o, l, c, "throw", e)
                        }
                        l(void 0)
                    })
                })),
                c = l.ProjectConfigProvider,
                u = (l.configMiddleware, l.useConfig)
        },
        147448: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return f
                }
            });
            var n = r(92974),
                o = r(158883),
                i = r.n(o),
                a = r(1973),
                l = r.n(a),
                c = r(769829),
                u = r.n(c),
                s = r(226476),
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.Z.enUS;
                    if (!e) return "";
                    var r = e.split("PT")[1],
                        o = [],
                        a = new Date;
                    if (!r) return "";
                    if (r.match("H")) {
                        var c = r.split("H"),
                            f = c.shift();
                        r = c.join(), o.push(i()(a, l()(a, parseInt(f || "0", 10)), {
                            locale: (0, s.Z)(t),
                            unit: "h"
                        }))
                    }
                    if (r.match("M")) {
                        var p = r.split("M"),
                            d = p.shift() || "0",
                            b = parseInt(d) > 120;
                        r = p.join(), o.push(i()(a, u()(a, parseInt(d, 10)), {
                            locale: (0, s.Z)(t),
                            unit: b ? "h" : "m",
                            partialMethod: "round"
                        }))
                    }
                    return o.join(" ")
                }
        }
    },
    function(e) {
        e.O(0, [96728, 79894, 30809, 72953, 61706, 38579, 33064, 51632, 44454, 62807, 49774, 92888, 40179], function() {
            return e(e.s = 75481)
        }), _N_E = e.O()
    }
]);