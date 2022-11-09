; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/.default/js/jquery.js?158209708686927";s:6:"source";s:38:"/local/templates/.default/js/jquery.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            m(e)
        },
        each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                p()
            },
            ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function (e) {
                    return e = e.replace(Z, ee),
                        function (t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !r.pseudos.empty(e)
                },
                header: function (e) {
                    return Y.test(e.nodeName)
                },
                input: function (e) {
                    return G.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function () {
                    return [0]
                }),
                last: he(function (e, t) {
                    return [t - 1]
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                    return e === t
                }, s, !0), f = me(function (e) {
                    return O(t, e) > -1
                }, s, !0), p = [function (e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                } return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                } c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return k(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function (e) {
            return P(e, "nextSibling")
        },
        prev: function (e) {
            return P(e, "previousSibling")
        },
        nextAll: function (e) {
            return k(e, "nextSibling")
        },
        prevAll: function (e) {
            return k(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function (n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function (e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function () {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0)
        },
        hide: function () {
            return fe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), u
            },
            scrollboxSize: function () {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [ct],
            prefilter: function (e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.timers = [], w.fx.tick = function () {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function () {
            rt || (rt = !0, at())
        }, w.fx.stop = function () {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function (t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:57:"/local/templates/.default/js/main.min.js?1585113274123019";s:6:"source";s:40:"/local/templates/.default/js/main.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (c, r, g, v) {
    "use strict";

    function o(t) {
        var e = g(t.currentTarget),
            o = t.data ? t.data.options : {},
            i = e.attr("data-fancybox") || "",
            n = 0,
            s = [];
        t.isDefaultPrevented() || (t.preventDefault(), i ? (n = (s = (s = o.selector ? g(o.selector) : t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + i + '"]') : g('[data-fancybox="' + i + '"]')).index(e)) < 0 && (n = 0) : s = [e], g.fancybox.open(s, o, n))
    }
    if (g) {
        if (g.fn.fancybox) return "console" in c && console.log("fancyBox already initialized");
        var t = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !0,
                toolbar: !0,
                buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                idleTime: 3,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: {
                    preload: "auto"
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 500,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                },
                parentEl: "body",
                autoFocus: !1,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                onInit: g.noop,
                beforeLoad: g.noop,
                afterLoad: g.noop,
                beforeShow: g.noop,
                afterShow: g.noop,
                beforeClose: g.noop,
                afterClose: g.noop,
                onActivate: g.noop,
                onDeactivate: g.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    margin: 0,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Maßstab"
                    }
                }
            },
            s = g(c),
            l = g(r),
            n = 0,
            p = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function (t) {
                return c.setTimeout(t, 1e3 / 60)
            },
            u = function () {
                var t, e = r.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (e.style[t] !== v) return o[t];
                return "transitionend"
            }(),
            f = function (t) {
                return t && t.length && t[0].offsetHeight
            },
            i = function (t, e, o) {
                var i = this;
                i.opts = g.extend(!0, {
                    index: o
                }, g.fancybox.defaults, e || {}), g.fancybox.isMobile && (i.opts = g.extend(!0, {}, i.opts, i.opts.mobile)), e && g.isArray(e.buttons) && (i.opts.buttons = e.buttons), i.id = i.opts.id || ++n, i.group = [], i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = null, i.createGroup(t), i.group.length && (i.$lastFocus = g(r.activeElement).blur(), i.slides = {}, i.init())
            };
        g.extend(i.prototype, {
            init: function () {
                var t, e, o, i = this,
                    n = i.group[i.currIndex],
                    s = n.opts,
                    a = g.fancybox.scrollbarWidth;
                i.scrollTop = l.scrollTop(), i.scrollLeft = l.scrollLeft(), g.fancybox.getInstance() || (g("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !c.MSStream ? "image" !== n.type && g("body").css("top", -1 * g("body").scrollTop()).addClass("fancybox-iosfix") : !g.fancybox.isMobile && r.body.scrollHeight > c.innerHeight && (a === v && (t = g('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), a = g.fancybox.scrollbarWidth = t[0].offsetWidth - t[0].clientWidth, t.remove()), g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + a + "px; }</style>"), g("body").addClass("compensate-for-scrollbar"))), o = "", g.each(s.buttons, function (t, e) {
                    o += s.btnTpl[e] || ""
                }), e = g(i.translate(i, s.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass("fancybox-is-hidden").addClass(s.baseClass).data("FancyBox", i).appendTo(s.parentEl), i.$refs = {
                    container: e
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                    i.$refs[t] = e.find(".fancybox-" + t)
                }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
            },
            translate: function (t, e) {
                var i = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    var o = i[e];
                    return o === v ? t : o
                })
            },
            createGroup: function (t) {
                var l = this,
                    e = g.makeArray(t);
                g.each(e, function (t, e) {
                    var o, i, n, s, a = {},
                        r = {};
                    g.isPlainObject(e) ? r = (a = e).opts || e : "object" === g.type(e) && g(e).length ? (r = (o = g(e)).data(), (r = g.extend({}, r, r.options || {})).$orig = o, a.src = r.src || o.attr("href"), a.type || a.src || (a.type = "inline", a.src = e)) : a = {
                        type: "html",
                        src: e + ""
                    }, a.opts = g.extend(!0, {}, l.opts, r), g.isArray(r.buttons) && (a.opts.buttons = r.buttons), i = a.type || a.opts.type, n = a.src || "", !i && n && (n.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : n.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : "#" === n.charAt(0) && (i = "inline")), i ? a.type = i : l.trigger("objectNeedsType", a), a.index = l.group.length, a.opts.$orig && !a.opts.$orig.length && delete a.opts.$orig, !a.opts.$thumb && a.opts.$orig && (a.opts.$thumb = a.opts.$orig.find("img:first")), a.opts.$thumb && !a.opts.$thumb.length && delete a.opts.$thumb, "function" === g.type(a.opts.caption) && (a.opts.caption = a.opts.caption.apply(e, [l, a])), "function" === g.type(l.opts.caption) && (a.opts.caption = l.opts.caption.apply(e, [l, a])), a.opts.caption instanceof g || (a.opts.caption = a.opts.caption === v ? "" : a.opts.caption + ""), "ajax" !== i || 1 < (s = n.split(/\s+/, 2)).length && (a.src = s.shift(), a.opts.filter = s.shift()), "auto" == a.opts.smallBtn && (-1 < g.inArray(i, ["html", "inline", "ajax"]) ? (a.opts.toolbar = !1, a.opts.smallBtn = !0) : a.opts.smallBtn = !1), "pdf" === i && (a.type = "iframe", a.opts.iframe.preload = !1), a.opts.modal && (a.opts = g.extend(!0, a.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), l.group.push(a)
                })
            },
            addEvents: function () {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.close(t)
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.previous()
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.next()
                }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                    i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), s.on("orientationchange.fb resize.fb", function (t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? p(function () {
                        i.update()
                    }) : (i.$refs.stage.hide(), setTimeout(function () {
                        i.$refs.stage.show(), i.update()
                    }, 600))
                }), l.on("focusin.fb", function (t) {
                    var e = g.fancybox ? g.fancybox.getInstance() : null;
                    e.isClosing || !e.current || !e.current.opts.trapFocus || g(t.target).hasClass("fancybox-container") || g(t.target).is(r) || e && "fixed" !== g(t.target).css("position") && !e.$refs.container.has(t.target).length && (t.stopPropagation(), e.focus(), s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                }), l.on("keydown.fb", function (t) {
                    var e = i.current,
                        o = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !g(t.target).is("input") && !g(t.target).is("textarea")) return 8 === o || 27 === o ? (t.preventDefault(), void i.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void i.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, o)
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                }), i.idleInterval = c.setInterval(function () {
                    i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                }, 1e3))
            },
            removeEvents: function () {
                s.off("orientationchange.fb resize.fb"), l.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
            },
            previous: function (t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function (t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function (t, i, e) {
                var o, n, s, a, r, l, c, d = this,
                    p = d.group.length;
                if (!(d.isSliding || d.isClosing || d.isAnimating && d.firstRun)) {
                    if (t = parseInt(t, 10), !(n = d.current ? d.current.opts.loop : d.opts.loop) && (t < 0 || p <= t)) return !1;
                    if (o = d.firstRun = null === d.firstRun, !(p < 2 && !o && d.isSliding)) {
                        if (a = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, s = d.createSlide(t), 1 < p && ((n || 0 < s.index) && d.createSlide(t - 1), (n || s.index < p - 1) && d.createSlide(t + 1)), d.current = s, d.currIndex = s.index, d.currPos = s.pos, d.trigger("beforeShow", o), d.updateControls(), l = g.fancybox.getTranslate(s.$slide), s.isMoved = (0 !== l.left || 0 !== l.top) && !s.$slide.hasClass("fancybox-animated"), s.forcedDuration = v, g.isNumeric(i) ? s.forcedDuration = i : i = s.opts[o ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), o) return s.opts.animationEffect && i && d.$refs.container.css("transition-duration", i + "ms"), d.$refs.container.removeClass("fancybox-is-hidden"), f(d.$refs.container), d.$refs.container.addClass("fancybox-is-open"), s.$slide.addClass("fancybox-slide--current"), d.loadSlide(s), void d.preload();
                        g.each(d.slides, function (t, e) {
                            g.fancybox.stop(e.$slide)
                        }), s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), s.isMoved ? (r = Math.round(s.$slide.width()), g.each(d.slides, function (t, e) {
                            var o = e.pos - s.pos;
                            g.fancybox.animate(e.$slide, {
                                top: 0,
                                left: o * r + o * e.opts.gutter
                            }, i, function () {
                                e.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === d.currPos && (s.isMoved = !1, d.complete())
                            })
                        })) : d.$refs.stage.children().removeAttr("style"), s.isLoaded ? d.revealContent(s) : d.loadSlide(s), d.preload(), a.pos !== s.pos && (c = "fancybox-slide--" + (a.pos > s.pos ? "next" : "previous"), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), a.isComplete = !1, i && (s.isMoved || s.opts.transitionEffect) && (s.isMoved ? a.$slide.addClass(c) : (c = "fancybox-animated " + c + " fancybox-fx-" + s.opts.transitionEffect, g.fancybox.animate(a.$slide, c, i, function () {
                            a.$slide.removeClass(c).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function (t) {
                var e, o, i = this;
                return o = (o = t % i.group.length) < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = g('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = g.extend(!0, {}, i.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), i.updateSlide(i.slides[t])), i.slides[t]
            },
            scaleToActual: function (t, e, o) {
                var i, n, s, a, r, l = this,
                    c = l.current,
                    d = c.$content,
                    p = parseInt(c.$slide.width(), 10),
                    u = parseInt(c.$slide.height(), 10),
                    f = c.width,
                    h = c.height;
                "image" != c.type || c.hasError || !d || l.isAnimating || (g.fancybox.stop(d), l.isAnimating = !0, t = t === v ? .5 * p : t, e = e === v ? .5 * u : e, a = f / (i = g.fancybox.getTranslate(d)).width, r = h / i.height, n = .5 * p - .5 * f, s = .5 * u - .5 * h, p < f && (0 < (n = i.left * a - (t * a - t)) && (n = 0), n < p - f && (n = p - f)), u < h && (0 < (s = i.top * r - (e * r - e)) && (s = 0), s < u - h && (s = u - h)), l.updateCursor(f, h), g.fancybox.animate(d, {
                    top: s,
                    left: n,
                    scaleX: a,
                    scaleY: r
                }, o || 330, function () {
                    l.isAnimating = !1
                }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
            },
            scaleToFit: function (t) {
                var e, o = this,
                    i = o.current,
                    n = i.$content;
                "image" != i.type || i.hasError || !n || o.isAnimating || (g.fancybox.stop(n), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), g.fancybox.animate(n, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / n.width(),
                    scaleY: e.height / n.height()
                }, t || 330, function () {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function (t) {
                var e, o, i, n, s, a = t.$content,
                    r = t.width,
                    l = t.height,
                    c = t.opts.margin;
                return !(!a || !a.length || !r && !l) && ("number" === g.type(c) && (c = [c, c]), 2 == c.length && (c = [c[0], c[1], c[0], c[1]]), e = parseInt(this.$refs.stage.width(), 10) - (c[1] + c[3]), o = parseInt(this.$refs.stage.height(), 10) - (c[0] + c[2]), i = Math.min(1, e / r, o / l), n = Math.floor(i * r), s = Math.floor(i * l), {
                    top: Math.floor(.5 * (o - s)) + c[0],
                    left: Math.floor(.5 * (e - n)) + c[3],
                    width: n,
                    height: s
                })
            },
            update: function () {
                var o = this;
                g.each(o.slides, function (t, e) {
                    o.updateSlide(e)
                })
            },
            updateSlide: function (t) {
                var e = this,
                    o = t.$content;
                o && (t.width || t.height) && (e.isAnimating = !1, g.fancybox.stop(o), g.fancybox.setTranslate(o, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)
            },
            updateCursor: function (t, e) {
                var o = this,
                    i = o.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                o.current && !o.isClosing && (o.isZoomable() ? (i.addClass("fancybox-is-zoomable"), (t !== v && e !== v ? t < o.current.width && e < o.current.height : o.isScaledDown()) ? i.addClass("fancybox-can-zoomIn") : o.current.opts.touch ? i.addClass("fancybox-can-drag") : i.addClass("fancybox-can-zoomOut")) : o.current.opts.touch && i.addClass("fancybox-can-drag"))
            },
            isZoomable: function () {
                var t, e = this.current;
                if (e && !this.isClosing) return !!("image" === e.type && e.isLoaded && !e.hasError && ("zoom" === e.opts.clickContent || g.isFunction(e.opts.clickContent) && "zoom" === e.opts.clickContent(e)) && (t = this.getFitPos(e), e.width > t.width || e.height > t.height))
            },
            isScaledDown: function () {
                var t = this.current,
                    e = t.$content,
                    o = !1;
                return e && (o = (o = g.fancybox.getTranslate(e)).width < t.width || o.height < t.height), o
            },
            canPan: function () {
                var t = this.current,
                    e = t.$content,
                    o = !1;
                return e && (o = this.getFitPos(t), o = 1 < Math.abs(e.width() - o.width) || 1 < Math.abs(e.height() - o.height)), o
            },
            loadSlide: function (o) {
                var t, e, i, n = this;
                if (!o.isLoading && !o.isLoaded) {
                    switch (o.isLoading = !0, n.trigger("beforeLoad", o), t = o.type, (e = o.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(o.opts.slideClass), t) {
                        case "image":
                            n.setImage(o);
                            break;
                        case "iframe":
                            n.setIframe(o);
                            break;
                        case "html":
                            n.setContent(o, o.src || o.content);
                            break;
                        case "inline":
                            g(o.src).length ? n.setContent(o, g(o.src)) : n.setError(o);
                            break;
                        case "ajax":
                            n.showLoading(o), i = g.ajax(g.extend({}, o.opts.ajax.settings, {
                                url: o.src,
                                success: function (t, e) {
                                    "success" === e && n.setContent(o, t)
                                },
                                error: function (t, e) {
                                    t && "abort" !== e && n.setError(o)
                                }
                            })), e.one("onReset", function () {
                                i.abort()
                            });
                            break;
                        default:
                            n.setError(o)
                    }
                    return !0
                }
            },
            setImage: function (t) {
                var e, o, i, n, s = this,
                    a = t.opts.srcset || t.opts.image.srcset;
                if (a) {
                    i = c.devicePixelRatio || 1, n = c.innerWidth * i, (o = a.split(",").map(function (t) {
                        var i = {};
                        return t.trim().split(/\s+/).forEach(function (t, e) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === e ? i.url = t : void(o && (i.value = o, i.postfix = t[t.length - 1]))
                        }), i
                    })).sort(function (t, e) {
                        return t.value - e.value
                    });
                    for (var r = 0; r < o.length; r++) {
                        var l = o[r];
                        if ("w" === l.postfix && l.value >= n || "x" === l.postfix && l.value >= i) {
                            e = l;
                            break
                        }
                    }!e && o.length && (e = o[o.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value))
                }
                t.$content = g('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = g("<img />").one("error", function () {
                    g(this).remove(), t.$ghost = null, s.setBigImage(t)
                }).one("load", function () {
                    s.afterLoad(t), s.setBigImage(t)
                }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : s.setBigImage(t)
            },
            setBigImage: function (t) {
                var e = this,
                    o = g("<img />");
                t.$image = o.one("error", function () {
                    e.setError(t)
                }).one("load", function () {
                    clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function () {
                        t.timouts = null, t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function () {
                    o[0].complete || t.hasError || e.showLoading(t)
                }, 100)
            },
            setIframe: function (s) {
                var a, e = this,
                    r = s.opts.iframe,
                    t = s.$slide;
                s.$content = g('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(t), a = g(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(s.$content), r.preload ? (e.showLoading(s), a.on("load.fb error.fb", function (t) {
                    this.isReady = 1, s.$slide.trigger("refresh"), e.afterLoad(s)
                }), t.on("refresh.fb", function () {
                    var t, e, o = s.$content,
                        i = r.css.width,
                        n = r.css.height;
                    if (1 === a[0].isReady) {
                        try {
                            e = a.contents().find("body")
                        } catch (t) {}
                        e && e.length && (i === v && (t = a[0].contentWindow.document.documentElement.scrollWidth, i = Math.ceil(e.outerWidth(!0) + (o.width() - t)), i += o.outerWidth() - o.innerWidth()), n === v && (n = Math.ceil(e.outerHeight(!0)), n += o.outerHeight() - o.innerHeight()), i && o.width(i), n && o.height(n)), o.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(s), a.attr("src", s.src), !0 === s.opts.smallBtn && s.$content.prepend(e.translate(s, s.opts.btnTpl.smallBtn)), t.one("onReset", function () {
                    try {
                        g(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (t) {}
                    g(this).empty(), s.isLoaded = !1
                })
            },
            setContent: function (t, e) {
                var o;
                this.isClosing || (this.hideLoading(t), t.$slide.empty(), (o = e) && o.hasOwnProperty && o instanceof g && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = g("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" !== g.type(e) || 3 === (e = g("<div>").append(g.trim(e)).contents())[0].nodeType && (e = g("<div>").html(e)), t.opts.filter && (e = g("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (g(this).empty(), t.isLoaded = !1)
                }), t.$content = g(e).appendTo(t.$slide), this.afterLoad(t))
            },
            setError: function (t) {
                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
            },
            showLoading: function (t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = g(this.opts.spinnerTpl).appendTo(t.$slide))
            },
            hideLoading: function (t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
            },
            afterLoad: function (t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = g(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
            },
            revealContent: function (e) {
                var t, o, i, n, s, a = this,
                    r = e.$slide,
                    l = !1;
                return t = e.opts[a.firstRun ? "animationEffect" : "transitionEffect"], i = e.opts[a.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(e.forcedDuration === v ? i : e.forcedDuration, 10), !e.isMoved && e.pos === a.currPos && i || (t = !1), "zoom" !== t || e.pos === a.currPos && i && "image" === e.type && !e.hasError && (l = a.getThumbPos(e)) || (t = "fade"), "zoom" === t ? ((s = a.getFitPos(e)).scaleX = s.width / l.width, s.scaleY = s.height / l.height, delete s.width, delete s.height, "auto" == (n = e.opts.zoomOpacity) && (n = .1 < Math.abs(e.width / e.height - l.width / l.height)), n && (l.opacity = .1, s.opacity = 1), g.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), f(e.$content), void g.fancybox.animate(e.$content, s, i, function () {
                    a.complete()
                })) : (a.updateSlide(e), t ? (g.fancybox.stop(r), o = "fancybox-animated fancybox-slide--" + (e.pos >= a.prevPos ? "next" : "previous") + " fancybox-fx-" + t, r.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), e.$content.removeClass("fancybox-is-hidden"), f(r), void g.fancybox.animate(r, "fancybox-slide--current", i, function (t) {
                    r.removeClass(o).removeAttr("style"), e.pos === a.currPos && a.complete()
                }, !0)) : (f(r), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === a.currPos && a.complete())))
            },
            getThumbPos: function (t) {
                var e, o = !1,
                    i = t.opts.$thumb,
                    n = i ? i.offset() : 0;
                return n && i[0].ownerDocument === r && function (t) {
                    for (var e = t[0], i = e.getBoundingClientRect(), o = []; null !== e.parentElement;) "hidden" !== g(e.parentElement).css("overflow") && "auto" !== g(e.parentElement).css("overflow") || o.push(e.parentElement.getBoundingClientRect()), e = e.parentElement;
                    return o.every(function (t) {
                        var e = Math.min(i.right, t.right) - Math.max(i.left, t.left),
                            o = Math.min(i.bottom, t.bottom) - Math.max(i.top, t.top);
                        return 0 < e && 0 < o
                    }) && 0 < i.bottom && 0 < i.right && i.left < g(c).width() && i.top < g(c).height()
                }(i) && (e = this.$refs.stage.offset(), o = {
                    top: n.top - e.top + parseFloat(i.css("border-top-width") || 0),
                    left: n.left - e.left + parseFloat(i.css("border-left-width") || 0),
                    width: i.width(),
                    height: i.height(),
                    scaleX: 1,
                    scaleY: 1
                }), o
            },
            complete: function () {
                var o = this,
                    t = o.current,
                    i = {};
                t.isMoved || !t.isLoaded || t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), f(t.$slide), t.$slide.addClass("fancybox-slide--complete"), g.each(o.slides, function (t, e) {
                    e.pos >= o.currPos - 1 && e.pos <= o.currPos + 1 ? i[e.pos] = e : e && (g.fancybox.stop(e.$slide), e.$slide.off().remove())
                }), o.slides = i, o.updateCursor(), o.trigger("afterShow"), (g(r.activeElement).is("[disabled]") || t.opts.autoFocus && "image" != t.type && "iframe" !== t.type) && o.focus())
            },
            preload: function () {
                var t, e, o = this;
                o.group.length < 2 || (t = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], t && "image" === t.type && o.loadSlide(t), e && "image" === e.type && o.loadSlide(e))
            },
            focus: function () {
                var t, e = this.current;
                this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
            },
            activate: function () {
                var e = this;
                g(".fancybox-container").each(function () {
                    var t = g(this).data("FancyBox");
                    t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
            },
            close: function (t, e) {
                function o() {
                    c.cleanUp(t)
                }
                var i, n, s, a, r, l, c = this,
                    d = c.current;
                return !c.isClosing && (!(c.isClosing = !0) === c.trigger("beforeClose", t) ? (c.isClosing = !1, p(function () {
                    c.update()
                }), !1) : (c.removeEvents(), d.timouts && clearTimeout(d.timouts), s = d.$content, i = d.opts.animationEffect, n = g.isNumeric(e) ? e : i ? d.opts.animationDuration : 0, d.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), d.$slide.siblings().trigger("onReset").remove(), n && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(d), c.hideControls(), c.updateCursor(), "zoom" !== i || !0 !== t && s && n && "image" === d.type && !d.hasError && (l = c.getThumbPos(d)) || (i = "fade"), "zoom" === i ? (g.fancybox.stop(s), (r = g.fancybox.getTranslate(s)).width = r.width * r.scaleX, r.height = r.height * r.scaleY, "auto" == (a = d.opts.zoomOpacity) && (a = .1 < Math.abs(d.width / d.height - l.width / l.height)), a && (l.opacity = 0), r.scaleX = r.width / l.width, r.scaleY = r.height / l.height, r.width = l.width, r.height = l.height, g.fancybox.setTranslate(d.$content, r), f(d.$content), g.fancybox.animate(d.$content, l, n, o)) : i && n ? !0 === t ? setTimeout(o, n) : g.fancybox.animate(d.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, n, o) : o(), !0))
            },
            cleanUp: function (t) {
                var e, o, i = this,
                    n = g("body");
                i.current.$slide.trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", t), i.$lastFocus && i.current.opts.backFocus && i.$lastFocus.focus(), i.current = null, (e = g.fancybox.getInstance()) ? e.activate() : (s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft), n.removeClass("fancybox-active compensate-for-scrollbar"), n.hasClass("fancybox-iosfix") && (o = parseInt(r.body.style.top, 10), n.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * o)), g("#fancybox-style-noscroll").remove())
            },
            trigger: function (t, e) {
                var o, i = Array.prototype.slice.call(arguments, 1),
                    n = this,
                    s = e && e.opts ? e : n.current;
                return s ? i.unshift(s) : s = n, i.unshift(n), g.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o ? o : void("afterClose" !== t && n.$refs ? n.$refs.container.trigger(t + ".fb", i) : l.trigger(t + ".fb", i))
            },
            updateControls: function (t) {
                var e = this,
                    o = e.current,
                    i = o.index,
                    n = o.opts.caption,
                    s = e.$refs.container,
                    a = e.$refs.caption;
                o.$slide.trigger("refresh"), e.$caption = n && n.length ? a.html(n) : null, e.isHiddenControls || e.isIdle || e.showControls(), s.find("[data-fancybox-count]").html(e.group.length), s.find("[data-fancybox-index]").html(i + 1), s.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), s.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= e.group.length - 1), "image" === o.type ? s.find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : s.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function () {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function () {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    o = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, o.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? o.addClass("fancybox-show-caption ") : o.removeClass("fancybox-show-caption")
            },
            toggleControls: function () {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), g.fancybox = {
            version: "3.2.5",
            defaults: t,
            getInstance: function (t) {
                var e = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    o = Array.prototype.slice.call(arguments, 1);
                return e instanceof i && ("string" === g.type(t) ? e[t].apply(e, o) : "function" === g.type(t) && t.apply(e, o), e)
            },
            open: function (t, e, o) {
                return new i(t, e, o)
            },
            close: function (t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close())
            },
            destroy: function () {
                this.close(!0), l.off("click.fb-start")
            },
            isMobile: r.createTouch !== v && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (e = r.createElement("div"), c.getComputedStyle && c.getComputedStyle(e).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
            getTranslate: function (t) {
                var e;
                if (!t || !t.length) return !1;
                if ((e = (e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = (e = e.split("(")[1]).split(")")[0]).split(",") : []).length) e = (e = 10 < e.length ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
                else {
                    e = [0, 0, 1, 1];
                    var o = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                    o && (e[0] = parseFloat(o[2]), e[1] = parseFloat(o[1]))
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                }
            },
            setTranslate: function (t, e) {
                var o = "",
                    i = {};
                if (t && e) return e.left === v && e.top === v || (o = (e.left === v ? t.position().left : e.left) + "px, " + (e.top === v ? t.position().top : e.top) + "px", o = this.use3d ? "translate3d(" + o + ", 0px)" : "translate(" + o + ")"), e.scaleX !== v && e.scaleY !== v && (o = (o.length ? o + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), o.length && (i.transform = o), e.opacity !== v && (i.opacity = e.opacity), e.width !== v && (i.width = e.width), e.height !== v && (i.height = e.height), t.css(i)
            },
            animate: function (e, o, t, i, n) {
                g.isFunction(t) && (i = t, t = null), g.isPlainObject(o) || e.removeAttr("style"), e.on(u, function (t) {
                    t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (g.fancybox.stop(e), g.isPlainObject(o) ? o.scaleX !== v && o.scaleY !== v && (e.css("transition-duration", ""), o.width = Math.round(e.width() * o.scaleX), o.height = Math.round(e.height() * o.scaleY), o.scaleX = 1, o.scaleY = 1, g.fancybox.setTranslate(e, o)) : !0 !== n && e.removeClass(o), g.isFunction(i) && i(t))
                }), g.isNumeric(t) && e.css("transition-duration", t + "ms"), g.isPlainObject(o) ? g.fancybox.setTranslate(e, o) : e.addClass(o), o.scaleX && e.hasClass("fancybox-image-wrap") && e.parent().addClass("fancybox-is-scaling"), e.data("timer", setTimeout(function () {
                    e.trigger("transitionend")
                }, t + 16))
            },
            stop: function (t) {
                clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling")
            }
        }, g.fn.fancybox = function (t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? g("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, o), this
        }, l.on("click.fb-start", "[data-fancybox]", o)
    }
    var e
}(window, document, window.jQuery || jQuery),
function (u) {
    "use strict";

    function f(o, t, e) {
        if (o) return e = e || "", "object" === u.type(e) && (e = u.param(e, !0)), u.each(t, function (t, e) {
            o = o.replace("$" + t, e || "")
        }), e.length && (o += (0 < o.indexOf("?") ? "&" : "?") + e), o
    }
    var h = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    u(document).on("objectNeedsType.fb", function (t, e, n) {
        var o, s, a, r, l, c, i, d = n.src || "",
            p = !1;
        o = u.extend(!0, {}, h, n.opts.media), u.each(o, function (t, e) {
            if (a = d.match(e.matcher)) {
                if (p = e.type, c = {}, e.paramPlace && a[e.paramPlace]) {
                    "?" == (l = a[e.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                    for (var o = 0; o < l.length; ++o) {
                        var i = l[o].split("=", 2);
                        2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
                    }
                }
                return r = u.extend(!0, {}, e.params, n.opts[t], c), d = "function" === u.type(e.url) ? e.url.call(this, a, r, n) : f(e.url, a, r), s = "function" === u.type(e.thumb) ? e.thumb.call(this, a, r, n) : f(e.thumb, a), "vimeo" === t && (d = d.replace("&%23", "#")), !1
            }
        }), p ? (n.src = d, n.type = p, n.opts.thumb || n.opts.$thumb && n.opts.$thumb.length || (n.opts.thumb = s), "iframe" === p && (u.extend(!0, n.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        }), n.contentProvider = i, n.opts.slideClass += " fancybox-slide--video")) : d && (n.type = n.opts.defaultType)
    })
}(window.jQuery || jQuery),
function (h, r, g) {
    "use strict";

    function d(t) {
        var e = [];
        for (var o in t = (t = t.originalEvent || t || h.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[o].pageX ? e.push({
            x: t[o].pageX,
            y: t[o].pageY
        }) : t[o].clientX && e.push({
            x: t[o].clientX,
            y: t[o].clientY
        });
        return e
    }

    function v(t, e, o) {
        return e && t ? "x" === o ? t.x - e.x : "y" === o ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }

    function l(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || g.isFunction(t.get(0).onclick) || t.data("selectable")) return 1;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return 1
    }

    function c(t) {
        for (var e = !1;
            (o = t.get(0), 0, i = h.getComputedStyle(o)["overflow-y"], n = h.getComputedStyle(o)["overflow-x"], s = ("scroll" === i || "auto" === i) && o.scrollHeight > o.clientHeight, a = ("scroll" === n || "auto" === n) && o.scrollWidth > o.clientWidth, !(e = s || a)) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
        var o, i, n, s, a;
        return e
    }

    function o(t) {
        var e = this;
        e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", g.proxy(e, "ontouchstart"))
    }
    var b = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || function (t) {
            return h.setTimeout(t, 1e3 / 60)
        },
        m = h.cancelAnimationFrame || h.webkitCancelAnimationFrame || h.mozCancelAnimationFrame || h.oCancelAnimationFrame || function (t) {
            h.clearTimeout(t)
        };
    o.prototype.destroy = function () {
        this.$container.off(".fb.touch")
    }, o.prototype.ontouchstart = function (t) {
        var e = this,
            o = g(t.target),
            i = e.instance,
            n = i.current,
            s = n.$content,
            a = "touchstart" == t.type;
        if (a && e.$container.off("mousedown.fb.touch"), !n || e.instance.isAnimating || e.instance.isClosing) return t.stopPropagation(), void t.preventDefault();
        if ((!t.originalEvent || 2 != t.originalEvent.button) && o.length && !l(o) && !l(o.parent()) && !(t.originalEvent.clientX > o[0].clientWidth + o.offset().left) && (e.startPoints = d(t), e.startPoints && !(1 < e.startPoints.length && i.isSliding))) {
            if (e.$target = o, e.$content = s, e.canTap = !0, e.opts = n.opts.touch, g(r).off(".fb.touch"), g(r).on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", g.proxy(e, "ontouchend")), g(r).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", g.proxy(e, "ontouchmove")), !e.opts && !i.canPan() || !o.is(e.$stage) && !e.$stage.find(o).length) return void(o.is("img") && t.preventDefault());
            t.stopPropagation(), g.fancybox.isMobile && (c(e.$target) || c(e.$target.parent())) || t.preventDefault(), e.canvasWidth = Math.round(n.$slide[0].clientWidth), e.canvasHeight = Math.round(n.$slide[0].clientHeight), e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.sliderStartPos = e.sliderLastPos || {
                top: 0,
                left: 0
            }, e.contentStartPos = g.fancybox.getTranslate(e.$content), e.contentLastPos = null, 1 !== e.startPoints.length || e.isZooming || (e.canTap = !i.isSliding, "image" === n.type && (e.contentStartPos.width > e.canvasWidth + 1 || e.contentStartPos.height > e.canvasHeight + 1) ? (g.fancybox.stop(e.$content), e.$content.css("transition-duration", "0ms"), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-controls--isGrabbing")), 2 !== e.startPoints.length || i.isAnimating || n.hasError || "image" !== n.type || !n.isLoaded && !n.$ghost || (e.isZooming = !0, e.isSwiping = !1, e.isPanning = !1, g.fancybox.stop(e.$content), e.$content.css("transition-duration", "0ms"), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - g(h).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - g(h).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = v(e.startPoints[0], e.startPoints[1]))
        }
    }, o.prototype.ontouchmove = function (t) {
        var e = this;
        if (e.newPoints = d(t), g.fancybox.isMobile && (c(e.$target) || c(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
        if ((e.opts || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = v(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = v(e.newPoints[0], e.startPoints[0], "y"), e.distance = v(e.newPoints[0], e.startPoints[0]), 0 < e.distance)) {
            if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
            t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
        }
    }, o.prototype.onSwipe = function () {
        var t, i = this,
            e = i.isSwiping,
            o = i.sliderStartPos.left || 0;
        !0 === e ? 10 < Math.abs(i.distance) && (i.canTap = !1, i.instance.group.length < 2 && i.opts.vertical ? i.isSwiping = "y" : i.instance.isSliding || !1 === i.opts.vertical || "auto" === i.opts.vertical && 800 < g(h).width() ? i.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < t && t < 135 ? "y" : "x"), i.instance.isSliding = i.isSwiping, i.startPoints = i.newPoints, g.each(i.instance.slides, function (t, e) {
            g.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === i.instance.current.pos && (i.sliderStartPos.left = g.fancybox.getTranslate(e.$slide).left)
        }), i.instance.SlideShow && i.instance.SlideShow.isActive && i.instance.SlideShow.stop()) : ("x" == e && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? o += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? o -= Math.pow(-i.distanceX, .8) : o += i.distanceX), i.sliderLastPos = {
            top: "x" == e ? 0 : i.sliderStartPos.top + i.distanceY,
            left: o
        }, i.requestId && (m(i.requestId), i.requestId = null), i.requestId = b(function () {
            i.sliderLastPos && (g.each(i.instance.slides, function (t, e) {
                var o = e.pos - i.instance.currPos;
                g.fancybox.setTranslate(e.$slide, {
                    top: i.sliderLastPos.top,
                    left: i.sliderLastPos.left + o * i.canvasWidth + o * e.opts.gutter
                })
            }), i.$container.addClass("fancybox-is-sliding"))
        }))
    }, o.prototype.onPan = function () {
        var t, e, o, i = this;
        i.canTap = !1, t = i.contentStartPos.width > i.canvasWidth ? i.contentStartPos.left + i.distanceX : i.contentStartPos.left, e = i.contentStartPos.top + i.distanceY, (o = i.limitMovement(t, e, i.contentStartPos.width, i.contentStartPos.height)).scaleX = i.contentStartPos.scaleX, o.scaleY = i.contentStartPos.scaleY, i.contentLastPos = o, i.requestId && (m(i.requestId), i.requestId = null), i.requestId = b(function () {
            g.fancybox.setTranslate(i.$content, i.contentLastPos)
        })
    }, o.prototype.limitMovement = function (t, e, o, i) {
        var n, s, a, r, l = this,
            c = l.canvasWidth,
            d = l.canvasHeight,
            p = l.contentStartPos.left,
            u = l.contentStartPos.top,
            f = l.distanceX,
            h = l.distanceY;
        return n = Math.max(0, .5 * c - .5 * o), s = Math.max(0, .5 * d - .5 * i), a = Math.min(c - o, .5 * c - .5 * o), r = Math.min(d - i, .5 * d - .5 * i), c < o && (0 < f && n < t && (t = n - 1 + Math.pow(-n + p + f, .8) || 0), f < 0 && t < a && (t = a + 1 - Math.pow(a - p - f, .8) || 0)), d < i && (0 < h && s < e && (e = s - 1 + Math.pow(-s + u + h, .8) || 0), h < 0 && e < r && (e = r + 1 - Math.pow(r - u - h, .8) || 0)), {
            top: e,
            left: t
        }
    }, o.prototype.limitPosition = function (t, e, o, i) {
        var n = this.canvasWidth,
            s = this.canvasHeight;
        return t = n < o ? (t = 0 < t ? 0 : t) < n - o ? n - o : t : Math.max(0, n / 2 - o / 2), {
            top: e = s < i ? (e = 0 < e ? 0 : e) < s - i ? s - i : e : Math.max(0, s / 2 - i / 2),
            left: t
        }
    }, o.prototype.onZoom = function () {
        var t = this,
            e = t.contentStartPos.width,
            o = t.contentStartPos.height,
            i = t.contentStartPos.left,
            n = t.contentStartPos.top,
            s = v(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            a = Math.floor(e * s),
            r = Math.floor(o * s),
            l = (e - a) * t.percentageOfImageAtPinchPointX,
            c = (o - r) * t.percentageOfImageAtPinchPointY,
            d = (t.newPoints[0].x + t.newPoints[1].x) / 2 - g(h).scrollLeft(),
            p = (t.newPoints[0].y + t.newPoints[1].y) / 2 - g(h).scrollTop(),
            u = d - t.centerPointStartX,
            f = {
                top: n + (c + (p - t.centerPointStartY)),
                left: i + (l + u),
                scaleX: t.contentStartPos.scaleX * s,
                scaleY: t.contentStartPos.scaleY * s
            };
        t.canTap = !1, t.newWidth = a, t.newHeight = r, t.contentLastPos = f, t.requestId && (m(t.requestId), t.requestId = null), t.requestId = b(function () {
            g.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, o.prototype.ontouchend = function (t) {
        var e = this,
            o = Math.max((new Date).getTime() - e.startTime, 1),
            i = e.isSwiping,
            n = e.isPanning,
            s = e.isZooming;
        return e.endPoints = d(t), e.$container.removeClass("fancybox-controls--isGrabbing"), g(r).off(".fb.touch"), e.requestId && (m(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.onTap(t) : (e.speed = 366, e.velocityX = e.distanceX / o * .5, e.velocityY = e.distanceY / o * .5, e.speedX = Math.max(.5 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), void(n ? e.endPanning() : s ? e.endZooming() : e.endSwiping(i)))
    }, o.prototype.endSwiping = function (t) {
        var e = this,
            o = !1;
        e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && 50 < Math.abs(e.distanceY) ? (g.fancybox.animate(e.instance.current.$slide, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            opacity: 0
        }, 150), o = e.instance.close(!0, 300)) : "x" == t && 50 < e.distanceX && 1 < e.instance.group.length ? o = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && 1 < e.instance.group.length && (o = e.instance.next(e.speedX)), !1 !== o || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
    }, o.prototype.endPanning = function () {
        var t, e, o, i = this;
        i.contentLastPos && (e = !1 === i.opts.momentum ? (t = i.contentLastPos.left, i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, i.contentLastPos.top + i.velocityY * i.speed), (o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, o.height = i.contentStartPos.height, g.fancybox.animate(i.$content, o, 330))
    }, o.prototype.endZooming = function () {
        var t, e, o, i, n = this,
            s = n.instance.current,
            a = n.newWidth,
            r = n.newHeight;
        n.contentLastPos && (t = n.contentLastPos.left, i = {
            top: e = n.contentLastPos.top,
            left: t,
            width: a,
            height: r,
            scaleX: 1,
            scaleY: 1
        }, g.fancybox.setTranslate(n.$content, i), a < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : a > s.width || r > s.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (o = n.limitPosition(t, e, a, r), g.fancybox.setTranslate(n.content, g.fancybox.getTranslate(n.$content)), g.fancybox.animate(n.$content, o, 150)))
    }, o.prototype.onTap = function (o) {
        function t(t) {
            var e = a.opts[t];
            if (g.isFunction(e) && (e = e.apply(s, [a, o])), e) switch (e) {
                case "close":
                    s.close(i.startEvent);
                    break;
                case "toggleControls":
                    s.toggleControls(!0);
                    break;
                case "next":
                    s.next();
                    break;
                case "nextOrClose":
                    1 < s.group.length ? s.next() : s.close(i.startEvent);
                    break;
                case "zoom":
                    "image" == a.type && (a.isLoaded || a.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, c) : s.group.length < 2 && s.close(i.startEvent))
            }
        }
        var e, i = this,
            n = g(o.target),
            s = i.instance,
            a = s.current,
            r = o && d(o) || i.startPoints,
            l = r[0] ? r[0].x - i.$stage.offset().left : 0,
            c = r[0] ? r[0].y - i.$stage.offset().top : 0;
        if (!(o.originalEvent && 2 == o.originalEvent.button || s.isSliding || l > n[0].clientWidth + n.offset().left)) {
            if (n.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
            else if (n.is(".fancybox-slide")) e = "Slide";
            else {
                if (!s.current.$content || !s.current.$content.has(o.target).length) return;
                e = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY) || s.isSliding) return this;
                t("dblclick" + e)
            } else i.tapX = l, i.tapY = c, a.opts["dblclick" + e] && a.opts["dblclick" + e] !== a.opts["click" + e] ? i.tapped = setTimeout(function () {
                i.tapped = null, t("click" + e)
            }, 300) : t("click" + e);
            return this
        }
    }, g(r).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new o(e))
    }), g(r).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, window.jQuery || jQuery),
function (a, r) {
    "use strict";
    r.extend(!0, r.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });

    function o(t) {
        this.instance = t, this.init()
    }
    r.extend(o.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function (t) {
            var e = this;
            e.instance && e.instance.current && (!0 === t || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function () {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        },
        clear: function () {
            clearTimeout(this.timer), this.timer = null
        },
        start: function () {
            var t = this.instance.current;
            t && (this.isActive = !0, this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.set(!0))
        },
        stop: function () {
            var t = this.instance.current;
            this.clear(), this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1
        },
        toggle: function () {
            this.isActive ? this.stop() : this.start()
        }
    }), r(a).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new o(e))
        },
        "beforeShow.fb": function (t, e, o, i) {
            var n = e && e.SlideShow;
            i ? n && o.opts.slideShow.autoStart && n.start() : n && n.isActive && n.clear()
        },
        "afterShow.fb": function (t, e, o) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function (t, e, o, i, n) {
            var s = e && e.SlideShow;
            !s || !o.opts.slideShow || 80 !== n && 32 !== n || r(a.activeElement).is("button,a,input") || (i.preventDefault(), s.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
            var o = e && e.SlideShow;
            o && o.stop()
        }
    }), r(a).on("visibilitychange", function () {
        var t = r.fancybox.getInstance(),
            e = t && t.SlideShow;
        e && e.isActive && (a.hidden ? e.clear() : e.set())
    })
}(document, window.jQuery || jQuery),
function (s, o) {
    "use strict";
    var e = function () {
        var t, e, o, i = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            n = {};
        for (e = 0; e < i.length; e++)
            if ((t = i[e]) && t[1] in s) {
                for (o = 0; o < t.length; o++) n[i[0][o]] = t[o];
                return n
            } return !1
    }();
    if (e) {
        var i = {
            request: function (t) {
                (t = t || s.documentElement)[e.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                s[e.exitFullscreen]()
            },
            toggle: function (t) {
                t = t || s.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function () {
                return Boolean(s[e.fullscreenElement])
            },
            enabled: function () {
                return Boolean(s[e.fullscreenEnabled])
            }
        };
        o.extend(!0, o.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), o(s).on({
            "onInit.fb": function (t, e) {
                var o;
                e && e.group[e.currIndex].opts.fullScreen ? ((o = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle(o[0])
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(o[0]), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function (t, e, o, i, n) {
                e && e.FullScreen && 70 === n && (i.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function (t) {
                t && t.FullScreen && i.exit()
            }
        }), o(s).on(e.fullscreenchange, function () {
            var t = i.isFullscreen(),
                e = o.fancybox.getInstance();
            e && (e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0)), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t))
        })
    } else o && o.fancybox && (o.fancybox.defaults.btnTpl.fullScreen = !1)
}(document, window.jQuery || jQuery),
function (t, r) {
    "use strict";
    r.fancybox.defaults = r.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, r.fancybox.defaults);

    function i(t) {
        this.init(t)
    }
    r.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
            var e = this;
            (e.instance = t).Thumbs = e;
            var o = t.group[0],
                i = t.group[1];
            e.opts = t.group[t.currIndex].opts.thumbs, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), e.opts && o && i && ("image" == o.type || o.opts.thumb || o.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (e.$button.show().on("click", function () {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function () {
            var o, i, t = this,
                e = t.instance,
                n = t.opts.parentEl;
            t.$grid = r('<div class="fancybox-thumbs fancybox-thumbs-' + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(n).addBack().filter(n)), o = "<ul>", r.each(e.group, function (t, e) {
                (i = e.opts.thumb || (e.opts.$thumb ? e.opts.$thumb.attr("src") : null)) || "image" !== e.type || (i = e.src), i && i.length && (o += '<li data-index="' + t + '" tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
            }), o += "</ul>", t.$list = r(o).appendTo(t.$grid).on("click", "li", function () {
                e.jumpTo(r(this).data("index"))
            }), t.$list.find("img").hide().one("load", function () {
                var t, e, o, i, n = r(this).parent().removeClass("fancybox-thumbs-loading"),
                    s = n.outerWidth(),
                    a = n.outerHeight();
                t = this.naturalWidth || this.width, i = (e = this.naturalHeight || this.height) / a, 1 <= (o = t / s) && 1 <= i && (i < o ? (t /= i, e = a) : (t = s, e /= o)), r(this).css({
                    width: Math.floor(t),
                    height: Math.floor(e),
                    "margin-top": a < e ? Math.floor(.3 * a - .3 * e) : Math.floor(.5 * a - .5 * e),
                    "margin-left": Math.floor(.5 * s - .5 * t)
                }).show()
            }).each(function () {
                this.src = r(this).data("src")
            }), "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right")) + e.group.length * t.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function (t) {
            var e, o, i = this,
                n = i.$list;
            i.instance.current && (o = (e = n.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (o.top < 0 || o.top > n.height() - e.outerHeight()) ? n.stop().animate({
                scrollTop: n.scrollTop() + o.top
            }, t) : "x" === i.opts.axis && (o.left < n.parent().scrollLeft() || o.left > n.parent().scrollLeft() + (n.parent().width() - e.outerWidth())) && n.parent().stop().animate({
                scrollLeft: o.left
            }, t))
        },
        update: function () {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), r(t).on({
        "onInit.fb": function (t, e) {
            var o;
            !e || e.Thumbs || (o = new i(e)).isActive && !0 === o.opts.autoStart && o.show()
        },
        "beforeShow.fb": function (t, e, o, i) {
            var n = e && e.Thumbs;
            n && n.isVisible && n.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function (t, e, o, i, n) {
            var s = e && e.Thumbs;
            s && s.isActive && 71 === n && (i.preventDefault(), s.toggle())
        },
        "beforeClose.fb": function (t, e) {
            var o = e && e.Thumbs;
            o && o.isVisible && !1 !== o.opts.hideOnClose && o.$grid.hide()
        }
    })
}(document, window.jQuery),
function (t, n) {
    "use strict";
    n.extend(!0, n.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a href="https://www.facebook.com/sharer/sharer.php?u={{src}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#3b5998"><path d="M27.6 3h-23.2c-.8 0-1.4.6-1.4 1.4v23.1c0 .9.6 1.5 1.4 1.5h12.5v-10.1h-3.4v-3.9h3.4v-2.9c0-3.4 2.1-5.2 5-5.2 1.4 0 2.7.1 3 .2v3.5h-2.1c-1.6 0-1.9.8-1.9 1.9v2.5h3.9l-.5 3.9h-3.4v10.1h6.6c.8 0 1.4-.6 1.4-1.4v-23.2c.1-.8-.5-1.4-1.3-1.4z"></path></svg><span>Facebook</span></a><a href="https://www.pinterest.com/pin/create/button/?url={{src}}&amp;description={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#c92228"><path d="M16 3c-7.2 0-13 5.8-13 13 0 5.5 3.4 10.2 8.3 12.1-.1-1-.2-2.6 0-3.7.2-1 1.5-6.5 1.5-6.5s-.4-.8-.4-1.9c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1.1 4.3-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.4 4.1-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.9 2.8-5.9 5.6 0 1.1.4 2.3 1 3 .1.1.1.2.1.4-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.6-.8-2.6-3.1-2.6-5 0-4.1 3-7.9 8.6-7.9 4.5 0 8 3.2 8 7.5 0 4.5-2.8 8.1-6.7 8.1-1.3 0-2.6-.7-3-1.5 0 0-.7 2.5-.8 3.1-.3 1.1-1.1 2.5-1.6 3.4 1.2.4 2.5.6 3.8.6 7.2 0 13-5.8 13-13 0-7.1-5.8-12.9-13-12.9z"></path></svg><span>Pinterest</span></a><a href="https://twitter.com/intent/tweet?url={{src}}&amp;text={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#1da1f2"><path d="M30 7.3c-1 .5-2.1.8-3.3.9 1.2-.7 2.1-1.8 2.5-3.2-1.1.7-2.3 1.1-3.6 1.4-1-1.1-2.5-1.8-4.2-1.8-3.2 0-5.7 2.6-5.7 5.7 0 .5.1.9.1 1.3-4.8-.2-9-2.5-11.8-6-.5.9-.8 1.9-.8 3 0 2 1 3.8 2.6 4.8-.9 0-1.8-.3-2.6-.7v.1c0 2.8 2 5.1 4.6 5.6-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.3 2.9 3.9 5.4 4-2 1.5-4.4 2.5-7.1 2.5-.5 0-.9 0-1.4-.1 2.5 1.6 5.6 2.6 8.8 2.6 10.6 0 16.3-8.8 16.3-16.3v-.7c1.1-1 2-2 2.8-3.2z"></path></svg><span>Twitter</span></a></p><p><input type="text" value="{{src_raw}}" onfocus="this.select()" /></p></div>'
        }
    }), n(t).on("click", "[data-fancybox-share]", function () {
        var t, e, o, i = n.fancybox.getInstance();
        i && (t = !1 === i.current.opts.hash ? i.current.src : window.location, e = i.current.opts.share.tpl.replace(/\{\{src\}\}/g, encodeURIComponent(t)).replace(/\{\{src_raw\}\}/g, (o = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return o[t]
        }))).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), n.fancybox.open({
            src: i.translate(i, e),
            type: "html",
            opts: {
                animationEffect: "fade",
                animationDuration: 250
            }
        }))
    })
}(document, window.jQuery || jQuery),
function (s, a, r) {
    "use strict";

    function n() {
        var t = a.location.hash.substr(1),
            e = t.split("-"),
            o = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
        return o < 1 && (o = 1), {
            hash: t,
            index: o,
            gallery: e.join("-")
        }
    }

    function e(t) {
        var e;
        "" !== t.gallery && ((e = r("[data-fancybox='" + r.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = r("#" + r.escapeSelector(t.gallery))), e.length && (c = !1, e.trigger("click")))
    }

    function l(t) {
        var e;
        return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""))
    }
    r.escapeSelector || (r.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    });
    var c = !0,
        d = null,
        p = null;
    r(function () {
        !1 !== r.fancybox.defaults.hash && (r(s).on({
            "onInit.fb": function (t, e) {
                var o, i;
                !1 !== e.group[e.currIndex].opts.hash && (o = n(), (i = l(e)) && o.gallery && i == o.gallery && (e.currIndex = o.index - 1))
            },
            "beforeShow.fb": function (t, e, o) {
                var i;
                !o || !1 === o.opts.hash || (i = l(e)) && "" !== i && (a.location.hash.indexOf(i) < 0 && (e.opts.origHash = a.location.hash), d = i + (1 < e.group.length ? "-" + (o.index + 1) : ""), "replaceState" in a.history ? (p && clearTimeout(p), p = setTimeout(function () {
                    a.history[c ? "pushState" : "replaceState"]({}, s.title, a.location.pathname + a.location.search + "#" + d), p = null, c = !1
                }, 300)) : a.location.hash = d)
            },
            "beforeClose.fb": function (t, e, o) {
                var i, n;
                p && clearTimeout(p), !1 !== o.opts.hash && (i = l(e), n = e && e.opts.origHash ? e.opts.origHash : "", i && "" !== i && ("replaceState" in history ? a.history.replaceState({}, s.title, a.location.pathname + a.location.search + n) : (a.location.hash = n, r(a).scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))), d = null)
            }
        }), r(a).on("hashchange.fb", function () {
            var t = n();
            r.fancybox.getInstance() ? !d || d === t.gallery + "-" + t.index || 1 === t.index && d == t.gallery || (d = null, r.fancybox.close()) : "" !== t.gallery && e(t)
        }), setTimeout(function () {
            e(n())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (c) {
    "use strict";
    var n, a = window.Slick || {};
    n = 0, (a = function (t, e) {
        var o, i = this;
        i.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(t),
            appendDots: c(t),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (t, e) {
                return c('<div data-role="none" role="button" tabindex="0" />').text(e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, i.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(t), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, o = c(t).data("slick") || {}, i.options = c.extend({}, i.defaults, e, o), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = n++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, a.prototype.addSlide = a.prototype.slickAdd = function (t, e, o) {
        var i = this;
        if ("boolean" == typeof e) o = e, e = null;
        else if (e < 0 || e >= i.slideCount) return !1;
        i.unload(), "number" == typeof e ? 0 === e && 0 === i.$slides.length ? c(t).appendTo(i.$slideTrack) : o ? c(t).insertBefore(i.$slides.eq(e)) : c(t).insertAfter(i.$slides.eq(e)) : !0 === o ? c(t).prependTo(i.$slideTrack) : c(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (t, e) {
            c(e).attr("data-slick-index", t)
        }), i.$slidesCache = i.$slides, i.reinit()
    }, a.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, a.prototype.animateSlide = function (t, e) {
        var o = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (t = -t), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: t
        }, i.options.speed, i.options.easing, e) : i.$slideTrack.animate({
            top: t
        }, i.options.speed, i.options.easing, e) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
            animStart: i.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === i.options.vertical ? o[i.animType] = "translate(" + t + "px, 0px)" : o[i.animType] = "translate(0px," + t + "px)", i.$slideTrack.css(o)
            },
            complete: function () {
                e && e.call()
            }
        })) : (i.applyTransition(), t = Math.ceil(t), !1 === i.options.vertical ? o[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(o), e && setTimeout(function () {
            i.disableTransition(), e.call()
        }, i.options.speed))
    }, a.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = c(t).not(this.$slider)), t
    }, a.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = c(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, a.prototype.applyTransition = function (t) {
        var e = this,
            o = {};
        !1 === e.options.fade ? o[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : o[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(o) : e.$slides.eq(t).css(o)
    }, a.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, a.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, a.prototype.autoPlayIterator = function () {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, a.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, a.prototype.buildDots = function () {
        var t, e, o = this;
        if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(o.options.dotsClass), t = 0; t <= o.getDotCount(); t += 1) e.append(c("<li />").append(o.options.customPaging.call(this, o, t)));
            o.$dots = e.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, a.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
            c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, a.prototype.buildRows = function () {
        var t, e, o, i, n, s, a, r = this;
        if (i = document.createDocumentFragment(), s = r.$slider.children(), 1 < r.options.rows) {
            for (a = r.options.slidesPerRow * r.options.rows, n = Math.ceil(s.length / a), t = 0; t < n; t++) {
                var l = document.createElement("div");
                for (e = 0; e < r.options.rows; e++) {
                    var c = document.createElement("div");
                    for (o = 0; o < r.options.slidesPerRow; o++) {
                        var d = t * a + (e * r.options.slidesPerRow + o);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            r.$slider.empty().append(i), r.$slider.children().children().children().css({
                width: 100 / r.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, a.prototype.checkResponsive = function (t, e) {
        var o, i, n, s = this,
            a = !1,
            r = s.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === s.respondTo ? n = l : "slider" === s.respondTo ? n = r : "min" === s.respondTo && (n = Math.min(l, r)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (o in i = null, s.breakpoints) s.breakpoints.hasOwnProperty(o) && (!1 === s.originalSettings.mobileFirst ? n < s.breakpoints[o] && (i = s.breakpoints[o]) : n > s.breakpoints[o] && (i = s.breakpoints[o]));
            null !== i ? null !== s.activeBreakpoint && i === s.activeBreakpoint && !e || (s.activeBreakpoint = i, "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = i) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = i), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, a.prototype.changeSlide = function (t, e) {
        var o, i, n = this,
            s = c(t.currentTarget);
        switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), o = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, t.data.message) {
            case "previous":
                i = 0 == o ? n.options.slidesToScroll : n.options.slidesToShow - o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - i, !1, e);
                break;
            case "next":
                i = 0 == o ? n.options.slidesToScroll : o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + i, !1, e);
                break;
            case "index":
                var a = 0 === t.data.index ? 0 : t.data.index || s.index() * n.options.slidesToScroll;
                n.slideHandler(n.checkNavigable(a), !1, e), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, a.prototype.checkNavigable = function (t) {
        var e, o;
        if (o = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
            for (var i in e) {
                if (t < e[i]) {
                    t = o;
                    break
                }
                o = e[i]
            }
        return t
    }, a.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, a.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }, a.prototype.cleanUpRows = function () {
        var t;
        1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
    }, a.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, a.prototype.destroy = function (t) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            c(this).attr("style", c(this).data("originalStyling"))
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
    }, a.prototype.disableTransition = function (t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }, a.prototype.fadeSlide = function (t, e) {
        var o = this;
        !1 === o.cssTransitions ? (o.$slides.eq(t).css({
            zIndex: o.options.zIndex
        }), o.$slides.eq(t).animate({
            opacity: 1
        }, o.options.speed, o.options.easing, e)) : (o.applyTransition(t), o.$slides.eq(t).css({
            opacity: 1,
            zIndex: o.options.zIndex
        }), e && setTimeout(function () {
            o.disableTransition(t), e.call()
        }, o.options.speed))
    }, a.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, a.prototype.filterSlides = a.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, a.prototype.focusHandler = function () {
        var o = this;
        o.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (t) {
            t.stopImmediatePropagation();
            var e = c(this);
            setTimeout(function () {
                o.options.pauseOnFocus && (o.focussed = e.is(":focus"), o.autoPlay())
            }, 0)
        })
    }, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, a.prototype.getDotCount = function () {
        var t = this,
            e = 0,
            o = 0,
            i = 0;
        if (!0 === t.options.infinite)
            for (; e < t.slideCount;) ++i, e = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) i = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++i, e = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return i - 1
    }, a.prototype.getLeft = function (t) {
        var e, o, i, n = this,
            s = 0;
        return n.slideOffset = 0, o = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = o * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (s = t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (t - n.slideCount)) * o * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * o * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, s = (t + n.options.slidesToShow - n.slideCount) * o), n.slideCount <= n.options.slidesToShow && (s = n.slideOffset = 0), !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * o * -1 + s, !0 === n.options.variableWidth && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === n.options.centerMode && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (n.$list.width() - i.outerWidth()) / 2)), e
    }, a.prototype.getOption = a.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, a.prototype.getNavigableIndexes = function () {
        var t, e = this,
            o = 0,
            i = 0,
            n = [];
        for (t = !1 === e.options.infinite ? e.slideCount : (o = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, 2 * e.slideCount); o < t;) n.push(o), o = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }, a.prototype.getSlick = function () {
        return this
    }, a.prototype.getSlideCount = function () {
        var o, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (t, e) {
            return e.offsetLeft - i + c(e).outerWidth() / 2 > -1 * n.swipeLeft ? (o = e, !1) : void 0
        }), Math.abs(c(o).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, a.prototype.goTo = a.prototype.slickGoTo = function (t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, a.prototype.init = function (t) {
        var e = this;
        c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, a.prototype.initADA = function () {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            c(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + t
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (t) {
            c(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + t,
                id: "slick-slide" + e.instanceUid + t
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, a.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, a.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }, a.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.interrupt, t, !1)))
    }, a.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, a.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, a.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, a.prototype.lazyLoad = function () {
        function t(t) {
            c("img[data-lazy]", t).each(function () {
                var t = c(this),
                    e = c(this).attr("data-lazy"),
                    o = document.createElement("img");
                o.onload = function () {
                    t.animate({
                        opacity: 0
                    }, 100, function () {
                        t.attr("src", e).animate({
                            opacity: 1
                        }, 200, function () {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }), i.$slider.trigger("lazyLoaded", [i, t, e])
                    })
                }, o.onerror = function () {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, t, e])
                }, o.src = e
            })
        }
        var e, o, i = this;
        !0 === i.options.centerMode ? o = !0 === i.options.infinite ? (e = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (e = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (e = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, o = Math.ceil(e + i.options.slidesToShow), !0 === i.options.fade && (0 < e && e--, o <= i.slideCount && o++)), t(i.$slider.find(".slick-slide").slice(e, o)), i.slideCount <= i.options.slidesToShow ? t(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? t(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && t(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
    }, a.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, a.prototype.next = a.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, a.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, a.prototype.pause = a.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, a.prototype.play = a.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, a.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
    }, a.prototype.prev = a.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, a.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, a.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var e, o, i, n = this,
            s = c("img[data-lazy]", n.$slider);
        s.length ? (e = s.first(), o = e.attr("data-lazy"), (i = document.createElement("img")).onload = function () {
            e.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), !0 === n.options.adaptiveHeight && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, e, o]), n.progressiveLazyLoad()
        }, i.onerror = function () {
            t < 3 ? setTimeout(function () {
                n.progressiveLazyLoad(t + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, o]), n.progressiveLazyLoad())
        }, i.src = o) : n.$slider.trigger("allImagesLoaded", [n])
    }, a.prototype.refresh = function (t) {
        var e, o, i = this;
        o = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > o && (i.currentSlide = o), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), e = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
            currentSlide: e
        }), i.init(), t || i.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    }, a.prototype.registerBreakpoints = function () {
        var t, e, o, i = this,
            n = i.options.responsive || null;
        if ("array" === c.type(n) && n.length) {
            for (t in i.respondTo = i.options.respondTo || "window", n)
                if (o = i.breakpoints.length - 1, e = n[t].breakpoint, n.hasOwnProperty(t)) {
                    for (; 0 <= o;) i.breakpoints[o] && i.breakpoints[o] === e && i.breakpoints.splice(o, 1), o--;
                    i.breakpoints.push(e), i.breakpointSettings[e] = n[t].settings
                } i.breakpoints.sort(function (t, e) {
                return i.options.mobileFirst ? t - e : e - t
            })
        }
    }, a.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, a.prototype.resize = function () {
        var t = this;
        c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, a.prototype.removeSlide = a.prototype.slickRemove = function (t, e, o) {
        var i = this;
        return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t, !(i.slideCount < 1 || t < 0 || t > i.slideCount - 1) && (i.unload(), !0 === o ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, a.prototype.setCSS = function (t) {
        var e, o, i = this,
            n = {};
        !0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", o = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", n[i.positionProp] = t, !1 === i.transformsEnabled || (!(n = {}) === i.cssTransitions ? n[i.animType] = "translate(" + e + ", " + o + ")" : n[i.animType] = "translate3d(" + e + ", " + o + ", 0px)"), i.$slideTrack.css(n)
    }, a.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, a.prototype.setFade = function () {
        var o, i = this;
        i.$slides.each(function (t, e) {
            o = i.slideWidth * t * -1, !0 === i.options.rtl ? c(e).css({
                position: "relative",
                right: o,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : c(e).css({
                position: "relative",
                left: o,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, a.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, a.prototype.setOption = a.prototype.slickSetOption = function () {
        var t, e, o, i, n, s = this,
            a = !1;
        if ("object" === c.type(arguments[0]) ? (o = arguments[0], a = arguments[1], n = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[1], a = arguments[2], "responsive" === (o = arguments[0]) && "array" === c.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) s.options[o] = i;
        else if ("multiple" === n) c.each(o, function (t, e) {
            s.options[t] = e
        });
        else if ("responsive" === n)
            for (e in i)
                if ("array" !== c.type(s.options.responsive)) s.options.responsive = [i[e]];
                else {
                    for (t = s.options.responsive.length - 1; 0 <= t;) s.options.responsive[t].breakpoint === i[e].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(i[e])
                } a && (s.unload(), s.reinit())
    }, a.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, a.prototype.setProps = function () {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 !== t.options.useCSS || (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, a.prototype.setSlideClasses = function (t) {
        var e, o, i, n, s = this;
        o = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= t && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + t, o.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? o.eq(o.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && o.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= s.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? o.slice(i - (s.options.slidesToShow - n), i + n).addClass("slick-active").attr("aria-hidden", "false") : o.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, a.prototype.setupInfinite = function () {
        var t, e, o, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (e = null, i.slideCount > i.options.slidesToShow)) {
            for (o = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - o; --t) e = t - 1, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < o; t += 1) e = t, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                c(this).attr("id", "")
            })
        }
    }, a.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, a.prototype.selectHandler = function (t) {
        var e = this,
            o = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
            i = parseInt(o.attr("data-slick-index"));
        return i = i || 0, e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(i), void e.asNavFor(i)) : void e.slideHandler(i)
    }, a.prototype.slideHandler = function (t, e, o) {
        var i, n, s, a, r, l = null,
            c = this;
        return e = e || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t), i = t, l = c.getLeft(i), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll) || !1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (i = c.currentSlide, !0 !== o ? c.animateSlide(a, function () {
            c.postSlide(i)
        }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), n = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), s = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((r = (r = c.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== o ? (c.fadeSlideOut(s), c.fadeSlide(n, function () {
            c.postSlide(n)
        })) : c.postSlide(n), void c.animateHeight()) : void(!0 !== o ? c.animateSlide(l, function () {
            c.postSlide(n)
        }) : c.postSlide(n))))
    }, a.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, a.prototype.swipeDirection = function () {
        var t, e, o, i, n = this;
        return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, o = Math.atan2(e, t), (i = Math.round(180 * o / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i || i <= 360 && 315 <= i ? !1 === n.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
    }, a.prototype.swipeEnd = function (t) {
        var e, o, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (o = i.swipeDirection()) {
                case "left":
                case "down":
                    e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != o && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, o]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, a.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, a.prototype.swipeMove = function (t) {
        var e, o, i, n, s, a = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (o = a.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && t.preventDefault(), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === o || a.currentSlide >= a.getDotCount() && "left" === o) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + i * n : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
    }, a.prototype.swipeStart = function (t) {
        var e, o = this;
        return o.interrupted = !0, 1 !== o.touchObject.fingerCount || o.slideCount <= o.options.slidesToShow ? !(o.touchObject = {}) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), o.touchObject.startX = o.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, o.touchObject.startY = o.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(o.dragging = !0))
    }, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, a.prototype.unload = function () {
        var t = this;
        c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, a.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy()
    }, a.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, a.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, a.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function () {
        var t, e, o = this,
            i = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            s = o.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof i || void 0 === i ? o[t].slick = new a(o[t], i) : e = o[t].slick[i].apply(o[t].slick, n), void 0 !== e) return e;
        return o
    }
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function ($) {
    var i, t = navigator.userAgent,
        T = /iphone/i.test(t),
        n = /chrome/i.test(t),
        C = /android/i.test(t);
    $.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function (t, e) {
            var o;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && ((o = this.createTextRange()).collapse(!0), o.moveEnd("character", e), o.moveStart("character", t), o.select())
            })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (o = document.selection.createRange(), t = 0 - o.duplicate().moveStart("character", -1e5), e = t + o.text.length), {
                begin: t,
                end: e
            })
        },
        unmask: function () {
            return this.trigger("unmask")
        },
        mask: function (e, b) {
            var o, m, y, w, x, S, k;
            if (!e && 0 < this.length) {
                var t = $(this[0]).data($.mask.dataName);
                return t ? t() : void 0
            }
            return b = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, b), o = $.mask.definitions, m = [], y = S = e.length, w = null, $.each(e.split(""), function (t, e) {
                "?" == e ? (S--, y = t) : o[e] ? (m.push(new RegExp(o[e])), null === w && (w = m.length - 1), t < y && (x = m.length - 1)) : m.push(null)
            }), this.trigger("unmask").each(function () {
                function a() {
                    if (b.completed) {
                        for (var t = w; t <= x; t++)
                            if (m[t] && h[t] === r(t)) return;
                        b.completed.call(f)
                    }
                }

                function r(t) {
                    return b.placeholder.charAt(t < b.placeholder.length ? t : 0)
                }

                function l(t) {
                    for (; ++t < S && !m[t];);
                    return t
                }

                function c(t, e) {
                    var o, i;
                    if (!(t < 0)) {
                        for (o = t, i = l(e); o < S; o++)
                            if (m[o]) {
                                if (!(i < S && m[o].test(h[i]))) break;
                                h[o] = h[i], h[i] = r(i), i = l(i)
                            } p(), f.caret(Math.max(w, t))
                    }
                }

                function s() {
                    u(), f.val() != v && f.change()
                }

                function d(t, e) {
                    var o;
                    for (o = t; o < e && o < S; o++) m[o] && (h[o] = r(o))
                }

                function p() {
                    f.val(h.join(""))
                }

                function u(t) {
                    var e, o, i, n = f.val(),
                        s = -1;
                    for (i = e = 0; e < S; e++)
                        if (m[e]) {
                            for (h[e] = r(e); i++ < n.length;)
                                if (o = n.charAt(i - 1), m[e].test(o)) {
                                    h[e] = o, s = e;
                                    break
                                } if (i > n.length) {
                                d(e + 1, S);
                                break
                            }
                        } else h[e] === n.charAt(i) && i++, e < y && (s = e);
                    return t ? p() : s + 1 < y ? b.autoclear || h.join("") === g ? (f.val() && f.val(""), d(0, S)) : p() : (p(), f.val(f.val().substring(0, s + 1))), y ? e : w
                }
                var f = $(this),
                    h = $.map(e.split(""), function (t, e) {
                        return "?" != t ? o[t] ? r(e) : t : void 0
                    }),
                    g = h.join(""),
                    v = f.val();
                f.data($.mask.dataName, function () {
                    return $.map(h, function (t, e) {
                        return m[e] && t != r(e) ? t : null
                    }).join("")
                }), f.one("unmask", function () {
                    f.off(".mask").removeData($.mask.dataName)
                }).on("focus.mask", function () {
                    var t;
                    f.prop("readonly") || (clearTimeout(i), v = f.val(), t = u(), i = setTimeout(function () {
                        f.get(0) === document.activeElement && (p(), t == e.replace("?", "").length ? f.caret(0, t) : f.caret(t))
                    }, 10))
                }).on("blur.mask", s).on("keydown.mask", function (t) {
                    if (!f.prop("readonly")) {
                        var e, o, i, n = t.which || t.keyCode;
                        k = f.val(), 8 === n || 46 === n || T && 127 === n ? (o = (e = f.caret()).begin, (i = e.end) - o == 0 && (o = 46 !== n ? function (t) {
                            for (; 0 <= --t && !m[t];);
                            return t
                        }(o) : i = l(o - 1), i = 46 === n ? l(i) : i), d(o, i), c(o, i - 1), t.preventDefault()) : 13 === n ? s.call(this, t) : 27 === n && (f.val(v), f.caret(0, u()), t.preventDefault())
                    }
                }).on("keypress.mask", function (t) {
                    if (!f.prop("readonly")) {
                        var e, o, i, n = t.which || t.keyCode,
                            s = f.caret();
                        if (!(t.ctrlKey || t.altKey || t.metaKey || n < 32) && n && 13 !== n) {
                            if (s.end - s.begin != 0 && (d(s.begin, s.end), c(s.begin, s.end - 1)), (e = l(s.begin - 1)) < S && (o = String.fromCharCode(n), m[e].test(o))) {
                                if (function (t) {
                                        var e, o, i, n;
                                        for (o = r(e = t); e < S; e++)
                                            if (m[e]) {
                                                if (i = l(e), n = h[e], h[e] = o, !(i < S && m[i].test(n))) break;
                                                o = n
                                            }
                                    }(e), h[e] = o, p(), i = l(e), C) {
                                    setTimeout(function () {
                                        $.proxy($.fn.caret, f, i)()
                                    }, 0)
                                } else f.caret(i);
                                s.begin <= x && a()
                            }
                            t.preventDefault()
                        }
                    }
                }).on("input.mask paste.mask", function () {
                    f.prop("readonly") || setTimeout(function () {
                        var t = u(!0);
                        f.caret(t), a()
                    }, 0)
                }), n && C && f.off("input.mask").on("input.mask", function () {
                    var t = f.val(),
                        e = f.caret();
                    if (k && k.length && k.length > t.length) {
                        for (u(!0); 0 < e.begin && !m[e.begin - 1];) e.begin--;
                        if (0 === e.begin)
                            for (; e.begin < w && !m[e.begin];) e.begin++;
                        f.caret(e.begin, e.begin)
                    } else {
                        for (u(!0); e.begin < S && !m[e.begin];) e.begin++;
                        f.caret(e.begin, e.begin)
                    }
                    a()
                }), u()
            })
        }
    })
}),
function (t, e) {
    "function" == typeof define && define.amd ? define([], function () {
        return t.svg4everybody = e()
    }) : "object" == typeof exports ? module.exports = e() : t.svg4everybody = e()
}(this, function () {
    function h(t, e) {
        if (e) {
            var o = document.createDocumentFragment(),
                i = !t.getAttribute("viewBox") && e.getAttribute("viewBox");
            i && t.setAttribute("viewBox", i);
            for (var n = e.cloneNode(!0); n.childNodes.length;) o.appendChild(n.firstChild);
            t.appendChild(o)
        }
    }

    function g(i) {
        i.onreadystatechange = function () {
            if (4 === i.readyState) {
                var o = i._cachedDocument;
                o || ((o = i._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = i.responseText, i._cachedTarget = {}), i._embeds.splice(0).map(function (t) {
                    var e = i._cachedTarget[t.id];
                    e = e || (i._cachedTarget[t.id] = o.getElementById(t.id)), h(t.svg, e)
                })
            }
        }, i.onreadystatechange()
    }
    return function (t) {
        var c, d = Object(t);
        c = "polyfill" in d ? d.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537;
        var p = {},
            u = window.requestAnimationFrame || setTimeout,
            f = document.getElementsByTagName("use");
        c && function t() {
            for (var e = 0; e < f.length;) {
                var o = f[e],
                    i = o.parentNode;
                if (i && /svg/i.test(i.nodeName)) {
                    var n = o.getAttribute("xlink:href");
                    if (c && (!d.validate || d.validate(n, i, o))) {
                        i.removeChild(o);
                        var s = n.split("#"),
                            a = s.shift(),
                            r = s.join("#");
                        if (a.length) {
                            var l = p[a];
                            l || ((l = p[a] = new XMLHttpRequest).open("GET", a), l.send(), l._embeds = []), l._embeds.push({
                                svg: i,
                                id: r
                            }), g(l)
                        } else h(i, document.getElementById(r))
                    }
                } else ++e
            }
            u(t, 67)
        }()
    }
}),
function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.scrollLock = e() : t.scrollLock = e()
}(window, function () {
    return i = {}, n.m = o = [function (t, e, o) {
        "use strict";
        o.r(e);

        function i(t) {
            return Array.isArray(t) ? t : [t]
        }

        function r(t) {
            return t instanceof Node
        }

        function n(t, e) {
            if (t && e) {
                t = t instanceof NodeList ? t : [t];
                for (var o = 0; o < t.length && !0 !== e(t[o], o, t.length); o++);
            }
        }

        function s(t) {
            return console.error("[scroll-lock] ".concat(t))
        }

        function v(t) {
            if (Array.isArray(t)) return t.join(", ")
        }

        function a(t) {
            var e = [];
            return n(t, function (t) {
                return e.push(t)
            }), e
        }

        function b(t, e) {
            var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : document;
            if ((!(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]) && -1 !== a(o.querySelectorAll(e)).indexOf(t)) return t;
            for (;
                (t = t.parentElement) && -1 === a(o.querySelectorAll(e)).indexOf(t););
            return t
        }

        function m(t, e) {
            var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document;
            return -1 !== a(o.querySelectorAll(e)).indexOf(t)
        }

        function l(t) {
            return t && "hidden" === getComputedStyle(t).overflow
        }

        function y(t) {
            return t && (!!l(t) || t.scrollTop <= 0)
        }

        function w(t) {
            if (t) {
                if (l(t)) return 1;
                var e = t.scrollTop;
                return t.scrollHeight <= e + t.offsetHeight
            }
        }

        function x(t) {
            return t && (!!l(t) || t.scrollLeft <= 0)
        }

        function S(t) {
            if (t) {
                if (l(t)) return 1;
                var e = t.scrollLeft;
                return t.scrollWidth <= e + t.offsetWidth
            }
        }
        o.d(e, "disablePageScroll", function () {
            return d
        }), o.d(e, "enablePageScroll", function () {
            return p
        }), o.d(e, "getScrollState", function () {
            return u
        }), o.d(e, "clearQueueScrollLocks", function () {
            return f
        }), o.d(e, "getTargetScrollBarWidth", function () {
            return h
        }), o.d(e, "getCurrentTargetScrollBarWidth", function () {
            return g
        }), o.d(e, "getPageScrollBarWidth", function () {
            return $
        }), o.d(e, "getCurrentPageScrollBarWidth", function () {
            return T
        }), o.d(e, "addScrollableTarget", function () {
            return C
        }), o.d(e, "removeScrollableTarget", function () {
            return P
        }), o.d(e, "addScrollableSelector", function () {
            return L
        }), o.d(e, "removeScrollableSelector", function () {
            return A
        }), o.d(e, "addLockableTarget", function () {
            return E
        }), o.d(e, "addLockableSelector", function () {
            return M
        }), o.d(e, "setFillGapMethod", function () {
            return O
        }), o.d(e, "addFillGapTarget", function () {
            return F
        }), o.d(e, "removeFillGapTarget", function () {
            return I
        }), o.d(e, "addFillGapSelector", function () {
            return j
        }), o.d(e, "removeFillGapSelector", function () {
            return z
        }), o.d(e, "refillGaps", function () {
            return D
        });
        var c = ["padding", "margin", "width", "max-width", "none"],
            k = {
                scroll: !0,
                queue: 0,
                scrollableSelectors: ["[data-scroll-lock-scrollable]"],
                lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
                fillGapSelectors: ["body", "[data-scroll-lock-fill-gap]", "[data-scroll-lock-lockable]"],
                fillGapMethod: c[0],
                startTouchY: 0,
                startTouchX: 0
            },
            d = function (t) {
                k.queue <= 0 && (k.scroll = !1, H(), B()), C(t), k.queue++
            },
            p = function (t) {
                0 < k.queue && k.queue--, k.queue <= 0 && (k.scroll = !0, W(), X()), P(t)
            },
            u = function () {
                return k.scroll
            },
            f = function () {
                k.queue = 0
            },
            h = function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                if (r(t)) {
                    var o = t.style.overflowY;
                    e ? u() || (t.style.overflowY = t.dataset.scrollLockSavedOverflowYProperty) : t.style.overflowY = "scroll";
                    var i = g(t);
                    return t.style.overflowY = o, i
                }
                return 0
            },
            g = function (t) {
                if (r(t)) {
                    if (t === document.body) {
                        var e = document.documentElement.clientWidth;
                        return window.innerWidth - e
                    }
                    var o = t.style.borderLeftWidth,
                        i = t.style.borderRightWidth;
                    t.style.borderLeftWidth = "0px", t.style.borderRightWidth = "0px";
                    var n = t.offsetWidth - t.clientWidth;
                    return t.style.borderLeftWidth = o, t.style.borderRightWidth = i, n
                }
                return 0
            },
            $ = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                return h(document.body, t)
            },
            T = function () {
                return g(document.body)
            },
            C = function (t) {
                t && i(t).map(function (t) {
                    n(t, function (t) {
                        r(t) ? t.dataset.scrollLockScrollable = "" : s('"'.concat(t, '" is not a Element.'))
                    })
                })
            },
            P = function (t) {
                t && i(t).map(function (t) {
                    n(t, function (t) {
                        r(t) ? delete t.dataset.scrollLockScrollable : s('"'.concat(t, '" is not a Element.'))
                    })
                })
            },
            L = function (t) {
                t && i(t).map(function (t) {
                    k.scrollableSelectors.push(t)
                })
            },
            A = function (t) {
                t && i(t).map(function (e) {
                    k.scrollableSelectors = k.scrollableSelectors.filter(function (t) {
                        return t !== e
                    })
                })
            },
            E = function (t) {
                t && (i(t).map(function (t) {
                    n(t, function (t) {
                        r(t) ? t.dataset.scrollLockLockable = "" : s('"'.concat(t, '" is not a Element.'))
                    })
                }), u() || H())
            },
            M = function (t) {
                t && (i(t).map(function (t) {
                    k.lockableSelectors.push(t)
                }), u() || H(), j(t))
            },
            O = function (t) {
                if (t)
                    if (-1 !== c.indexOf(t)) k.fillGapMethod = t, D();
                    else {
                        var e = c.join(", ");
                        s('"'.concat(t, '" method is not available!\nAvailable fill gap methods: ').concat(e, "."))
                    }
            },
            F = function (t) {
                t && i(t).map(function (t) {
                    n(t, function (t) {
                        r(t) ? (t.dataset.scrollLockFillGap = "", k.scroll || G(t)) : s('"'.concat(t, '" is not a Element.'))
                    })
                })
            },
            I = function (t) {
                t && i(t).map(function (t) {
                    n(t, function (t) {
                        r(t) ? (delete t.dataset.scrollLockFillGap, k.scroll || Z(t)) : s('"'.concat(t, '" is not a Element.'))
                    })
                })
            },
            j = function (t) {
                t && i(t).map(function (t) {
                    k.fillGapSelectors.push(t), k.scroll || N(t)
                })
            },
            z = function (t) {
                t && i(t).map(function (e) {
                    k.fillGapSelectors = k.fillGapSelectors.filter(function (t) {
                        return t !== e
                    }), k.scroll || U(e)
                })
            },
            D = function () {
                k.scroll || B()
            },
            H = function () {
                var t = v(k.lockableSelectors);
                R(t)
            },
            W = function () {
                var t = v(k.lockableSelectors);
                q(t)
            },
            R = function (t) {
                var e = document.querySelectorAll(t);
                n(e, function (t) {
                    Y(t)
                })
            },
            q = function (t) {
                var e = document.querySelectorAll(t);
                n(e, function (t) {
                    _(t)
                })
            },
            Y = function (t) {
                if (r(t) && "true" !== t.dataset.scrollLockLocked) {
                    var e = window.getComputedStyle(t);
                    t.dataset.scrollLockSavedOverflowYProperty = e.overflowY, t.dataset.scrollLockSavedInlineOverflowProperty = t.style.overflow, t.dataset.scrollLockSavedInlineOverflowYProperty = t.style.overflowY, t.style.overflow = "hidden", t.dataset.scrollLockLocked = "true"
                }
            },
            _ = function (t) {
                r(t) && "true" === t.dataset.scrollLockLocked && (t.style.overflow = t.dataset.scrollLockSavedInlineOverflowProperty, t.style.overflowY = t.dataset.scrollLockSavedInlineOverflowYProperty, delete t.dataset.scrollLockSavedOverflowYProperty, delete t.dataset.scrollLockSavedInlineOverflowProperty, delete t.dataset.scrollLockSavedInlineOverflowYProperty, delete t.dataset.scrollLockLocked)
            },
            B = function () {
                k.fillGapSelectors.map(function (t) {
                    N(t)
                })
            },
            X = function () {
                k.fillGapSelectors.map(function (t) {
                    U(t)
                })
            },
            N = function (t) {
                var e = document.querySelectorAll(t),
                    o = -1 !== k.lockableSelectors.indexOf(t);
                n(e, function (t) {
                    G(t, o)
                })
            },
            G = function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                if (r(t)) {
                    var o;
                    if ("" === t.dataset.scrollLockLockable || e) o = h(t, !0);
                    else {
                        var i = b(t, v(k.lockableSelectors));
                        o = h(i, !0)
                    }
                    "true" === t.dataset.scrollLockFilledGap && Z(t);
                    var n = window.getComputedStyle(t);
                    if (t.dataset.scrollLockFilledGap = "true", t.dataset.scrollLockCurrentFillGapMethod = k.fillGapMethod, "margin" === k.fillGapMethod) {
                        var s = parseFloat(n.marginRight);
                        t.style.marginRight = "".concat(s + o, "px")
                    } else if ("width" === k.fillGapMethod) t.style.width = "calc(100% - ".concat(o, "px)");
                    else if ("max-width" === k.fillGapMethod) t.style.maxWidth = "calc(100% - ".concat(o, "px)");
                    else if ("padding" === k.fillGapMethod) {
                        var a = parseFloat(n.paddingRight);
                        t.style.paddingRight = "".concat(a + o, "px")
                    }
                }
            },
            U = function (t) {
                var e = document.querySelectorAll(t);
                n(e, function (t) {
                    Z(t)
                })
            },
            Z = function (t) {
                if (r(t) && "true" === t.dataset.scrollLockFilledGap) {
                    var e = t.dataset.scrollLockCurrentFillGapMethod;
                    delete t.dataset.scrollLockFilledGap, delete t.dataset.scrollLockCurrentFillGapMethod, "margin" === e ? t.style.marginRight = "" : "width" === e ? t.style.width = "" : "max-width" === e ? t.style.maxWidth = "" : "padding" === e && (t.style.paddingRight = "")
                }
            };
        window.addEventListener("resize", function (t) {
            D()
        }), document.addEventListener("touchstart", function (t) {
            k.scroll || (k.startTouchY = t.touches[0].clientY, k.startTouchX = t.touches[0].clientX)
        }), document.addEventListener("touchmove", function (a) {
            if (!k.scroll) {
                var t = k.startTouchY,
                    e = k.startTouchX,
                    o = a.touches[0].clientY,
                    i = a.touches[0].clientX;
                if (a.touches.length < 2) {
                    var r = v(k.scrollableSelectors),
                        l = t < o,
                        c = o < t,
                        d = e < i,
                        p = i < e,
                        u = t + 3 < o,
                        f = o < t - 3,
                        h = e + 3 < i,
                        g = i < e - 3;
                    ! function t(e, o) {
                        var i = 1 < arguments.length && void 0 !== o && o;
                        if (e) {
                            var n = b(e, r, !1);
                            if (i || m(e, 'textarea, [contenteditable="true"]') && b(e, r) || m(e, r)) {
                                var s = !1;
                                x(e) && S(e) ? (l && y(e) || c && w(e)) && (s = !0) : y(e) && w(e) ? (d && x(e) || p && S(e)) && (s = !0) : (u && y(e) || f && w(e) || h && x(e) || g && S(e)) && (s = !0), s && (n ? t(n, !0) : a.preventDefault())
                            } else t(n)
                        } else a.preventDefault()
                    }(a.target)
                }
            }
        }, {
            passive: !1
        }), document.addEventListener("touchend", function (t) {
            k.scroll || (k.startTouchY = 0, k.startTouchX = 0)
        });
        var Q = {
                hide: function (t) {
                    s('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'), d(t)
                },
                show: function (t) {
                    s('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'), p(t)
                },
                toggle: function (t) {
                    s('"toggle" is deprecated! Do not use it.'), u() ? d() : p(t)
                },
                getState: function () {
                    return s('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'), u()
                },
                getWidth: function () {
                    return s('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'), $()
                },
                getCurrentWidth: function () {
                    return s('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'), T()
                },
                setScrollableTargets: function (t) {
                    s('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'), C(t)
                },
                setFillGapSelectors: function (t) {
                    s('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'), j(t)
                },
                setFillGapTargets: function (t) {
                    s('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'), F(t)
                },
                clearQueue: function () {
                    s('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'), f()
                }
            },
            K = function (n) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        e = Object.keys(s);
                    "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(s, t).enumerable
                    }))), e.forEach(function (t) {
                        var e, o, i;
                        e = n, i = s[o = t], o in e ? Object.defineProperty(e, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[o] = i
                    })
                }
                return n
            }({
                disablePageScroll: d,
                enablePageScroll: p,
                getScrollState: u,
                clearQueueScrollLocks: f,
                getTargetScrollBarWidth: h,
                getCurrentTargetScrollBarWidth: g,
                getPageScrollBarWidth: $,
                getCurrentPageScrollBarWidth: T,
                addScrollableSelector: L,
                removeScrollableSelector: A,
                addScrollableTarget: C,
                removeScrollableTarget: P,
                addLockableSelector: M,
                addLockableTarget: E,
                addFillGapSelector: j,
                removeFillGapSelector: z,
                addFillGapTarget: F,
                removeFillGapTarget: I,
                setFillGapMethod: O,
                refillGaps: D,
                _state: k
            }, Q);
        e.default = K
    }], n.c = i, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0).default;

    function n(t) {
        if (i[t]) return i[t].exports;
        var e = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return o[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }
    var o, i
}),
function () {
    var n = {
        win: $(window),
        body: $("body"),
        nav: $(".nav"),
        header: $(".header"),
        footer: $(".footer"),
        btnMenu: $(".js-toggle-menu"),
        mSlider: $(".slider"),
        gallerySlider: $(".gallery-slider"),
        baseEvents: $(".base-events"),
        shadowMenu: $(".nav_shadow"),
        scrollableElement: document.querySelector(".nav"),
        eventMenu: function () {
            var t = n.win.width();
            n.nav.toggleClass("nav_open"), n.btnMenu.toggleClass("toggle-menu_active"), n.shadowMenu.toggleClass("nav_shadow_active"), n.nav.hasClass("nav_open") && t < 1200 ? scrollLock.disablePageScroll(n.scrollableElement) : scrollLock.enablePageScroll(n.scrollableElement)
        }
    };
    $(".cnt table").wrap('<div class="table-wrp"></div>'), svg4everybody(), n.btnMenu.on("click", function () {
        n.eventMenu()
    }), n.shadowMenu.on("click", function () {
        n.eventMenu()
    }), $(".submenu__opener").on("click", function () {
        $(this).toggleClass("submenu__opener_active").closest(".menu__item").find(".submenu").toggleClass("submenu_open")
    }), n.body.on("click", ".js-open-left-nav", function (t) {
        $(".left-nav").stop(!0).slideToggle(400), t.preventDefault()
    }), $(document).on("click", function (t) {
        $(t.target).closest(".header__search, .show-search").length || ($(".show-search").removeClass("show-search_active"), $(".header__search").removeClass("header__search_open"), t.stopPropagation())
    }),
    n.win.resize(function () {
        setTimeout(function () {
            var t = n.footer.outerHeight();
            $(".footer-margin").css("height", t), n.footer.css("margin-top", -t)
        }, 100)
    }), 
    n.win.resize(), n.win.scroll(function () {
        var t = n.win.scrollTop(),
            e = n.win.width(),
            o = n.header.outerHeight(),
            i = n.nav.outerHeight();
        o <= t && 1200 <= e ? n.header.hasClass("header_fixed") || (n.header.addClass("header_fixed").css("padding-bottom", i), n.nav.css("top", -o).animate({
            top: "0"
        }, 500).addClass("compensate-for-scrollbar")) : (n.header.removeClass("header_fixed").attr("style", ""), n.nav.removeClass("compensate-for-scrollbar"))
    }), n.win.scroll(), n.body.on("click", ".js-accordion", function () {
        $(this).closest(".js-accordion-wrp").toggleClass("js-accordion_active").find(".js-accordion-info").stop(!0).slideToggle()
    }), n.mSlider.slick({
        dots: !0,
        infinite: !0,
        speed: 500,
        fade: !0,
        arrows: !0,
        appendArrows: $(".slider__nav"),
        mobileFirst: !0,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-right"></use></svg></button>',
        cssEase: "linear"
    }), $(".left-nav").length ? n.gallerySlider.each(function () {
        var t = $(this),
            e = t.closest(".gallery-slider-wrp").find(".gallery-slider-nav");
        t.slick({
            dots: !1,
            infinite: !1,
            speed: 1e3,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: !1,
            fade: !1,
            arrows: !0,
            appendArrows: e,
            prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-right"></use></svg></button>',
            cssEase: "ease",
            responsive: [{
                breakpoint: 641,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2
                }
            }]
        })
    }) : n.gallerySlider.each(function () {
        var t = $(this),
            e = t.closest(".gallery-slider-wrp").find(".gallery-slider-nav");
        t.slick({
            dots: !1,
            infinite: !1,
            speed: 1e3,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: !1,
            fade: !1,
            arrows: !0,
            appendArrows: e,
            prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-right"></use></svg></button>',
            cssEase: "ease",
            responsive: [{
                breakpoint: 641,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2
                }
            }]
        })
    }), n.baseEvents.slick({
        dots: !1,
        infinite: !0,
        speed: 1e3,
        autoplay: !1,
        fade: !0,
        arrows: !0,
        appendArrows: $(".base-events-nav"),
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-arrow-right"></use></svg></button>',
        cssEase: "ease"
    }), $(".js-popup-lnk").fancybox({
        buttons: !1,
        smallBtn: !1,
        animationEffect: "fade",
        afterClose: function (t, e) {
            $('.popup input:not([type="submit"]),.popup textarea').removeClass("err"), $(".popup .err_mess,.popup .complet").remove()
        }
    }), n.body.on("click", ".js-ajax", function (t) {
        t.preventDefault(), $.fancybox.open({
            src: $(this).attr("href"),
            type: "ajax",
            opts: {
                buttons: !1,
                smallBtn: !1,
                animationEffect: "fade"
            }
        })
    });
    var o = $(".file__path"),
        i = o.text();
    $(".file-info").on("click", function () {
        $("input", this.parentNode).click()
    }), $(".inputfile").on("change", function () {
        var t = $(this).val(),
            e = t.replace("C:\\fakepath\\", "");
        "" !== t ? o.text(e) : o.text(i)
    }), $(".field_tel").mask("+375 (99) 999-99-99"), n.body.on("click", ".js-tabs-lnk", function (t) {
        t.preventDefault();
        var e = $(this),
            o = e.closest(".js-tabs-wrp"),
            i = o.find(".js-tabs-lnk"),
            n = o.find(".js-tab"),
            s = e.attr("href");
        i.removeClass("js-tabs-lnk_active"), o.find('.js-tabs-lnk[href="' + s + '"]').addClass("js-tabs-lnk_active"), n.removeClass("js-tab_show"), (n = $(s)).addClass("js-tab_show")
    });

    function e(t, e) {
        var o, i = 0,
            n = (e = e || !1, $(t)),
            s = n.data("ajax"),
            a = (n.find(".inputfile")[0], n.find(".inputfile").attr("data-size"), n.find('input[type="email"].chk')),
            r = a.val();
        if (n.find(".err_mess,.complete").remove(), n.find(".chk").each(function () {
                var t = $(this);
                t.val() ? (t.removeClass("err"), t.next(".selected").removeClass("err")) : (t.is(":hidden") && t.next(".selected").addClass("err"), t.addClass("err"), i = 1)
            }), a.length && (o = r, new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(o) ? a.removeClass("err") : (a.addClass("err"), i = 1)), 0 !== i) return n.find(".err_mess,.complete").remove(), n.find(".form-message").html('<div class="err_mess">Заполните обязательные поля</div>'), !1;
        if (void 0 === s) return !0;
        n.find("[type=submit]").prop("disabled", !0);
        var l = new FormData(n.get(0));
        return 0 != e && l.append(e.attr("name"), e.val()), $.ajax({
            type: "POST",
            url: s,
            data: l,
            processData: !1,
            contentType: !1,
            dataType: "html",
            success: function (t) {
                n.find(".err_mess,.complite").remove(), n.find("[type=submit]").prop("disabled", !1), "Y" === (l = JSON.parse(t)).result && n.find('input:not([type="submit"],[type="hidden"]),textarea').val(""), n.find(".form-message").html(l.txt)
            }
        }), !1
    }
    n.body.on("submit", "form", function (t) {
        if (void 0 === $(this).attr("data-ajax")) return e(this);
        t.preventDefault()
    }), n.body.on("click", "[type = submit]", function () {
        return e($(this).closest("form"), $(this))
    })
}();
/* End */
;; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/.default/dist/js/scripts.min.js?15820970853538";s:6:"source";s:44:"/local/templates/.default/dist/js/scripts.js";s:3:"min";s:48:"/local/templates/.default/dist/js/scripts.min.js";s:3:"map";s:48:"/local/templates/.default/dist/js/scripts.js.map";}"*/
"use strict";

// function _typeof(t) {
//     return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
//         return typeof t
//     } : function (t) {
//         return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//     })(t)
// }! function (n) {
//     var r = {
//         properties: {
//             searchTimer: !1,
//             searchTimerTime: 300,
//             notificationDefault: {
//                 notification: {
//                     maxWidth: 420
//                 },
//                 behaviour: {
//                     htmlMode: !0
//                 }
//             }
//         },
//         f: {
//             addSiteOptions: function () {
//                 if ("undefined" !== siteParams && "object" == ("undefined" == typeof siteParams ? "undefined" : _typeof(siteParams)))
//                     for (var t in siteParams) r.properties[t] = siteParams[t]
//             },
//             showResultPopup: function (t) {
//                 var e = '\n\t\t\t\t\t<div id="popup-result" class="popup">\n\t\t\t\t\t\t<div class="popup__inner">\n\t\t\t\t\t\t\t<div class="popup__ttl">'.concat(t.title, ' <div class="close_popup" data-fancybox-close><svg class="icon icon-close"><use xlink:href="/local/templates/.default/images/sprite.svg#icon-close"></use></svg></div></div>\n\t\t\t\t\t\t\t<div class="popup__message">').concat(t.message, "</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t");
//                 n.fancybox.open(e, {
//                     buttons: !1,
//                     smallBtn: !1,
//                     animationEffect: "fade"
//                 })
//             },
//             showErrors: function (t) {
//                 var e = "";
//                 for (var s in t) e += "".concat(t[s].message, " [").concat(t[s].code, "]");
//                 console.error(e)
//             },
//             init: function () {
//                 "en" != r.properties.lang && (n.fancybox.defaults.lang = r.properties.lang, n.fancybox.defaults.i18n[r.properties.lang] = r.properties.localization.fancybox)
//             }
//         },
//         message: function (t) {
//             var e = r.properties;
//             if (e.hasOwnProperty("localization") && e.localization.hasOwnProperty("messages")) {
//                 var s = e.localization.messages;
//                 if (s.hasOwnProperty(t)) return s[t]
//             }
//         }
//     };
//     // r.f.addSiteOptions(), r.f.init(), window.app = r, n(document).ready(function () {
//     //     n("body").on("submit", ".form-ajax", function (t) {
//     //         t.preventDefault();
//     //         var s = n(this)[0],
//     //             e = new FormData(s),
//     //             a = "",
//     //             o = n(this).find('button[type="submit"]'),
//     //             i = n(this).find(".field-captcha").length;
//     //         i && "object" == ("undefined" == typeof grecaptcha ? "undefined" : _typeof(grecaptcha)) && (a = grecaptcha.getResponse()), o.attr("disabled", "disabled"), i && "" === a ? (r.f.notify("error", "captcha fail"), o.removeAttr("disabled")) : BX.ajax.runAction("kosmos:main.api.form.process", {
//     //             data: e
//     //         }).then(function (t) {
//     //             if ("success" === t.status)
//     //                 if (t.data.success && (n(s).find('input[type="number"], input[type="tel"], input[type="text"], input[type="email"], input[type="file"], textarea').not(".hide").val(""), n(s).find(".field-label_focus").removeClass("field-label_focus"), n(s).find(".compl").removeClass("compl")), n(s).hasClass("form-popup-result")) r.f.showResultPopup(t.data);
//     //                 else {
//     //                     var e = t.data.success ? "complete" : "err_mess";
//     //                     n(s).find(".form-message").html('<div class="' + e + '">' + t.data.message + "</div>")
//     //                 }
//     //             else r.f.showErrors(t.errors);
//     //             i && "object" == ("undefined" == typeof grecaptcha ? "undefined" : _typeof(grecaptcha)) && grecaptcha.reset(), o.removeAttr("disabled")
//     //         })
//     //     }).on("submit", ".form-simple-ajax", function (t) {
//     //         t.preventDefault();
//     //         var s = n(this)[0],
//     //             e = new FormData(s);
//     //         BX.ajax.runAction("kosmos:main.api.formsimple.process", {
//     //             data: e
//     //         }).then(function (t) {
//     //             if ("success" === t.status)
//     //                 if (t.data.success && (n(s).find('input[type="number"], input[type="tel"], input[type="text"], input[type="email"], input[type="file"], textarea').not(".hide").val(""), n(s).find(".field-label_focus").removeClass("field-label_focus"), n(s).find(".compl").removeClass("compl")), n(s).hasClass("form-popup-result")) r.f.showResultPopup(t.data);
//     //                 else {
//     //                     var e = t.data.success ? "complete" : "err_mess";
//     //                     n(s).find(".form-message").html('<div class="' + e + '">' + t.data.message + "</div>")
//     //                 }
//     //             else r.f.showErrors(t.errors)
//     //         })
//     //     })
//     // })
// }(jQuery);
/* End */
;; /* /local/templates/.default/js/jquery.js?158209708686927*/ ; /* /local/templates/.default/js/main.min.js?1585113274123019*/ ; /* /local/templates/.default/dist/js/scripts.min.js?15820970853538*/

//# sourceMappingURL=template_88e46275ee3a857bfebcebe14cde8094.map.js