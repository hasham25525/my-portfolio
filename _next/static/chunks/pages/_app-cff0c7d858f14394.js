(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return s(8695)
            }])
        },
        8695: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s(6042),
                i = s(5893),
                r = s(9008),
                l = s.n(r),
                c = s(7294),
                o = function() {
                    return (0, i.jsx)("div", {
                        id: "loading",
                        children: (0, i.jsx)("div", {
                            className: "load-circle",
                            children: (0, i.jsx)("span", {
                                className: "one"
                            })
                        })
                    })
                };
            s(3021), s(906);
            var u = function(e) {
                var t = e.Component,
                    s = e.pageProps,
                    r = (0, c.useState)(!0),
                    u = r[0],
                    a = r[1];
                return (0, c.useEffect)(function() {
                    setTimeout(function() {
                        a(!1)
                    }, 1e3)
                }, []), (0, i.jsxs)(c.Fragment, {
                    children: [(0, i.jsxs)(l(), {
                        children: [(0, i.jsx)("title", {
                            children: "Muhammad Hasham - Portfolio"
                        }), (0, i.jsx)("link", {
                            rel: "shortcut icon",
                            type: "image/x-icon",
                            href: "/favicon.ico"
                        }), (0, i.jsx)("link", {
                            href: "static/plugin/bootstrap/css/bootstrap.min.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "static/plugin/font-awesome/css/all.min.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "static/plugin/et-line/style.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "static/plugin/themify-icons/themify-icons.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "static/plugin/owl-carousel/css/owl.carousel.min.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "static/plugin/magnific/magnific-popup.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "static/plugin/scroll/jquery.mCustomScrollbar.min.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "static/css/style.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                            rel: "stylesheet"
                        })]
                    }), u && (0, i.jsx)(o, {}), (0, i.jsx)(t, (0, n.Z)({}, s))]
                })
            }
        },
        3021: function() {},
        906: function() {},
        9008: function(e, t, s) {
            e.exports = s(5443)
        },
        4924: function(e, t, s) {
            "use strict";

            function n(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            s.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        6042: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = s(4924);

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(s);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    }))), i.forEach(function(t) {
                        (0, n.Z)(e, t, s[t])
                    })
                }
                return e
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(1118), t(387)
        }), _N_E = e.O()
    }
]);