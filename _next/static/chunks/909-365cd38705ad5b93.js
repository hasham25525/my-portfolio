// Navbar Menu

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [909], {
        3909: function(e, s, n) {
            n.d(s, {
                Z: function() {
                    return v
                }
            });
            var a = n(5893),
                c = n(7294),
                i = function(e) {
                    var s = (0, c.useRef)();
                    return (0, c.useEffect)(function() {
                        var n = function(n) {
                            s.current.contains(n.target) || e()
                        };
                        return document.addEventListener("mousedown", n),
                            function() {
                                document.removeEventListener("mousedown", n)
                            }
                    }), s
                },
                r = function(e) {
                    var s = e.close,
                        n = e.src,
                        r = i(function() {
                            s(!1)
                        });
                    return (0, a.jsxs)(c.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mfp-bg mfp-ready",
                            onClick: function() {
                                return s(!1)
                            }
                        }), (0, a.jsx)("div", {
                            className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                            tabIndex: -1,
                            style: {
                                overflow: "hidden auto"
                            },
                            children: (0, a.jsxs)("div", {
                                className: "mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",
                                children: [(0, a.jsx)("div", {
                                    className: "mfp-content",
                                    ref: r,
                                    children: (0, a.jsx)("div", {
                                        className: "mfp-iframe-scaler",
                                        children: (0, a.jsx)("img", {
                                            className: "mfp-img",
                                            src: n
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })]
                            })
                        })]
                    })
                },
                l = function() {
                    var e = (0, c.useState)(!1),
                        s = e[0],
                        n = e[1],
                        i = (0, c.useState)(null),
                        l = i[0],
                        t = i[1];
                    return (0, c.useEffect)(function() {
                        setTimeout(function() {
                            document.querySelectorAll("a").forEach(function(e) {
                                e.href.includes("static/img") && null === e.getAttribute("download") && e.addEventListener("click", function(s) {
                                    s.preventDefault(), t(e.href), n(!0)
                                })
                            })
                        }, 1500)
                    }, []), (0, a.jsx)(c.Fragment, {
                        children: s && (0, a.jsx)(r, {
                            close: function() {
                                return n(!1)
                            },
                            src: l
                        })
                    })
                },
                t = n(1163),
                o = function() {
                    var e = (0, t.useRouter)();
                    return (0, a.jsx)("a", {
                        className: "demo-back-link",
                        onClick: function() {
                            return e.back()
                        },
                        href: "#",
                        children: (0, a.jsx)("i", {
                            className: "fas fa-arrow-left"
                        })
                    })
                },
                d = function() {
                    var e = (0, c.useState)(!0);
                    e[0], e[1];
                    var s = function() {
                        document.querySelector("body").classList.toggle("theme-light")
                    };
                    return (0, a.jsx)("label", {
                        className: "color_switch",
                        onClick: function() {
                            return s()
                        },
                        children: (0, a.jsx)("i", {
                            className: "fas fa-moon"
                        })
                    })
                },
                m = n(1664),
                u = n.n(m),
                h = n(1917),
                f = function(e) {
                    var s = e.blog,
                        n = (0, c.useState)(!1),
                        i = n[0],
                        r = n[1];
                    return (0, c.useEffect)(function() {
                        s || (0, h.j1)()
                    }, []), (0, a.jsxs)(c.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mob-header",
                            children: (0, a.jsxs)("div", {
                                className: "d-flex",
                                children: [(0, a.jsx)("div", {
                                    className: "navbar-brand",
                                    children: (0, a.jsx)(u(), {
                                        href: "/",
                                        children: (0, a.jsx)("a", {
                                            className: "logo-text",
                                            children: "Portfolio"
                                        })
                                    })
                                }), (0, a.jsxs)("button", {
                                    className: "toggler-menu ".concat(i ? "open" : ""),
                                    onClick: function() {
                                        return r(!i)
                                    },
                                    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                                })]
                            })
                        }), (0, a.jsxs)("header", {
                            className: "header-left ".concat(i ? "menu-open menu-open-desk" : ""),
                            children: [(0, a.jsxs)("div", {
                                className: "scroll-bar",
                                children: [(0, a.jsx)("div", {
                                    className: "hl-top",
                                    children: (0, a.jsxs)("div", {
                                        className: "hl-logo",
                                        children: [(0, a.jsx)("div", {
                                            className: "img",
                                            children: (0, a.jsx)("img", {
                                                src: "static/img/about-me.jpg",
                                                title: "",
                                                alt: ""
                                            })
                                        }), (0, a.jsx)("h5", {
                                            children: "Hasham"
                                        })]
                                    })
                                }), s ? (0, a.jsx)(x, {}) : (0, a.jsx)(j, {})]
                            }), (0, a.jsxs)("div", {
                                className: "nav justify-content-center social-icons",
                                children: [(0, a.jsx)("a", {
                                    href: "https://github.com/hasham25525",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-github"
                                    })
                                }), (0, a.jsx)("a", {
                                    href: "https://www.fiverr.com/cartisthasham",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-fonticons-fi"
                                    })
                                }), (0, a.jsx)("a", {
                                    href: "https://www.linkedin.com/in/hasham25525",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-linkedin-in"
                                    })
                                
                                })]
                            })]
                        })]
                    })
                },
                j = function() {
                    return (0, a.jsxs)("ul", {
                        className: "nav nav-menu",
                        id: "pp-menu",
                        children: [(0, a.jsx)("li", {
                            "data-menuanchor": "home",
                            className: "active",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#home",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-home"
                                }), (0, a.jsx)("span", {
                                    children: "Home"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "about",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#about",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-id-badge"
                                }), (0, a.jsx)("span", {
                                    children: "About Me"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "services",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#services",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-panel"
                                }), (0, a.jsx)("span", {
                                    children: "Services"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "work",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#work",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-bookmark-alt"
                                }), (0, a.jsx)("span", {
                                    children: "Portfolio"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "blog",
                            className: "blog",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#blog",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-layout-media-overlay-alt-2"
                                }), (0, a.jsx)("span", {
                                    children: "Blogs"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "contactus",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#contactus",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-map-alt"
                                }), (0, a.jsx)("span", {
                                    children: "Contact Me"
                                })]
                            })
                        })]
                    })
                },
                x = function() {
                    return (0, c.useEffect)(function() {
                        window.addEventListener("scroll", function() {
                            return document.querySelector(".blog").classList.add("active")
                        })
                    }), (0, a.jsx)(c.Fragment, {
                        children: (0, a.jsxs)("ul", {
                            className: "nav nav-menu",
                            id: "pp-menu",
                            children: [(0, a.jsx)("li", {
                                "data-menuanchor": "home",
                                children: (0, a.jsx)(u(), {
                                    href: "/#home",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-home"
                                        }), (0, a.jsx)("span", {
                                            children: "Home"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "about",
                                children: (0, a.jsx)(u(), {
                                    href: "/#about",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-id-badge"
                                        }), (0, a.jsx)("span", {
                                            children: "About Me"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "services",
                                children: (0, a.jsx)(u(), {
                                    href: "/#services",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-panel"
                                        }), (0, a.jsx)("span", {
                                            children: "Services"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "work",
                                children: (0, a.jsx)(u(), {
                                    href: "/#work",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-bookmark-alt"
                                        }), (0, a.jsx)("span", {
                                            children: "Portfolio"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "blog",
                                className: "blog active",
                                children: (0, a.jsx)(u(), {
                                    href: "/#blog",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-layout-media-overlay-alt-2"
                                        }), (0, a.jsx)("span", {
                                            children: "Blogs"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "contactus",
                                children: (0, a.jsx)(u(), {
                                    href: "/#contactus",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-map-alt"
                                        }), (0, a.jsx)("span", {
                                            children: "Contact Me"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                v = function(e) {
                    var s = e.children,
                        n = e.blog;
                    return (0, a.jsxs)(c.Fragment, {
                        children: [(0, a.jsx)(l, {}), (0, a.jsx)(f, {
                            blog: n
                        }), (0, a.jsx)("main", {
                            className: "main-left pp-main-section",
                            children: s
                        }), (0, a.jsx)(d, {}), n && (0, a.jsx)(o, {})]
                    })
                }
        },
        1917: function(e, s, n) {
            n.d(s, {
                j1: function() {
                    return a
                },
                oA: function() {
                    return i
                },
                ot: function() {
                    return c
                }
            });
            var a = function() {
                    window.location.pathname, window.addEventListener("scroll", function() {
                        var e = document.querySelectorAll(".pp-section"),
                            s = document.querySelectorAll(".nav-menu li"),
                            n = "";
                        e.forEach(function(e) {
                            var s;
                            pageYOffset >= e.offsetTop - e.clientHeight / 3 && (n = e.getAttribute("id"))
                        }), s.forEach(function(e) {
                            e.classList.remove("active"), e.getElementsByTagName("a")[0].getAttribute("href") == "#".concat(n) && e.classList.add("active")
                        })
                    })
                },
                c = function(e, s) {
                    return Array(Math.ceil(e / s)).fill().map(function(e, s) {
                        return s + 1
                    })
                },
                i = function(e, s, n) {
                    for (var a = document.querySelectorAll(e), c = 0; c < a.length; c++) {
                        var i = a[c];
                        1 === n ? c < s ? i.classList.remove("d-none") : i.classList.add("d-none") : c >= (n - 1) * s && c < n * s ? i.classList.remove("d-none") : i.classList.add("d-none")
                    }
                }
        }
    }
]);