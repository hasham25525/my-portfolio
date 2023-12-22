// Portfolio Collection

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [424], {
        9424: function(i, s, o) {
            o.r(s);
            var l = o(5893),
                a = o(3391),
                e = o.n(a),
                c = o(7294),
                r = function() {
                    var i = (0, c.useRef)(),
                        s = (0, c.useState)("*"),
                        o = s[0],
                        a = s[1];
                    (0, c.useEffect)(function() {
                        window.addEventListener("load", function() {
                            return i.current = new(e())(".portfolio-content", {
                                    itemSelector: ".grid-item",
                                    percentPosition: !0,
                                    masonry: {
                                        columnWidth: ".grid-item"
                                    },
                                    animationOptions: {
                                        duration: 750,
                                        easing: "linear",
                                        queue: !1
                                    }
                                }),
                                function() {
                                    return i.current.destroy()
                                }
                        })
                    }), (0, c.useEffect)(function() {
                        i.current && ("*" === o ? i.current.arrange({
                            filter: "*"
                        }) : i.current.arrange({
                            filter: ".".concat(o)
                        }))
                    }, [o]);
                    var r = function(i) {
                            return function() {
                                a(i)
                            }
                        },
                        t = function(i) {
                            return i === o ? "active" : ""
                        };
                    return (0, l.jsx)("section", {
                        id: "work",
                        "data-nav-tooltip": "Work",
                        className: "pp-section pp-scrollable section dark-bg",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsx)("div", {
                                className: "title",
                                children: (0, l.jsx)("h3", {
                                    children: "My Portfolio."
                                })
                            }), (0, l.jsx)("div", {
                                className: "portfolio-filter-01",
                                children: (0, l.jsxs)("ul", {
                                    className: "filter nav",
                                    children: [(0, l.jsx)("li", {
                                        className: "c-pointer ".concat(t("*")),
                                        onClick: r("*"),
                                        "data-filter": "*",
                                        children: "All"
                                    }), (0, l.jsx)("li", {
                                        className: "c-pointer ".concat(t("branding")),
                                        onClick: r("branding"),
                                        "data-filter": ".branding",
                                        children: "Ecommerce App"
                                    }), (0, l.jsx)("li", {
                                        className: "c-pointer ".concat(t("photoshop")),
                                        onClick: r("photoshop"),
                                        "data-filter": ".photoshop",
                                        children: "ChatWithAnyone"
                                    }), (0, l.jsx)("li", {
                                        className: "c-pointer ".concat(t("fashion")),
                                        onClick: r("fashion"),
                                        "data-filter": ".fashion",
                                        children: "Promptopia"
                                    }), (0, l.jsx)("li", {
                                        className: "c-pointer ".concat(t("product")),
                                        onClick: r("product"),
                                        "data-filter": ".product",
                                        children: "Notes App"
                                    })]
                                })
                            }), " ", (0, l.jsxs)("div", {
                                className: "portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery",
                                children: [(0, l.jsx)("div", {
                                    className: "grid-item product branding fashion",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Flair"
                                            }), (0, l.jsx)("span", {
                                                children: "Ecommerce App",
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", ("a", {
                                                src: "static/img/p1.png",
                                                title: "Flair - Ecommerce",
                                                alt: "Flair - Ecommerce"
                                            })), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "https://ecommerce-app-hasham25525.vercel.app/",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item photoshop",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "ChatWithAnyone"
                                            }), (0, l.jsx)("span", {
                                                children: "Chat App"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/p2.png",
                                                title: "ChatWithAnyone",
                                                alt: "ChatWithAnyone"
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "https://epic-chat.web.app/",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item product branding",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Promptopia"
                                            }), (0, l.jsx)("span", {
                                                children: "Prompts Sharing website"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/p3.png",
                                                title: "Promptopia",
                                                alt: "Promptopia"
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "https://project-promtopia-beta.vercel.app/",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item product photoshop",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Notes App"
                                            }), (0, l.jsx)("span", {
                                                children: "Notes App"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/p4-1.png",
                                                title: "Notes App",
                                                alt: "Notes App"
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "https://notes-github-io-lyart.vercel.app/",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item branding",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Momb ios App"
                                            }), (0, l.jsx)("span", {
                                                children: "Broadcasting ios App"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/m-portfolio-4.jpg",
                                                title: "",
                                                alt: ""
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "static/img/m-portfolio-4.jpg",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item product photoshop",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Momb ios App"
                                            }), (0, l.jsx)("span", {
                                                children: "Broadcasting ios App"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/m-portfolio-6.jpg",
                                                title: "",
                                                alt: ""
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "static/img/m-portfolio-6.jpg",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item fashion",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Momb ios App"
                                            }), (0, l.jsx)("span", {
                                                children: "Broadcasting ios App"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/m-portfolio-7.jpg",
                                                title: "",
                                                alt: ""
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "static/img/m-portfolio-7.jpg",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item product branding",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Momb ios App"
                                            }), (0, l.jsx)("span", {
                                                children: "Broadcasting ios App"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/m-portfolio-8.jpg",
                                                title: "",
                                                alt: ""
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "static/img/m-portfolio-8.jpg",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " ", (0, l.jsx)("div", {
                                    className: "grid-item fashion",
                                    children: (0, l.jsxs)("div", {
                                        className: "portfolio-box-01",
                                        children: [(0, l.jsxs)("div", {
                                            className: "portfolio-info",
                                            children: [(0, l.jsx)("h5", {
                                                className: "white-color font-weight-bold",
                                                children: "Momb ios App"
                                            }), (0, l.jsx)("span", {
                                                children: "Broadcasting ios App"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "portfolio-img",
                                            children: [(0, l.jsx)("img", {
                                                src: "static/img/m-portfolio-9.jpg",
                                                title: "",
                                                alt: ""
                                            }), (0, l.jsx)("div", {
                                                className: "portfolio-icon",
                                                children: (0, l.jsx)("a", {
                                                    href: "static/img/m-portfolio-9.jpg",
                                                    className: "gallery-link",
                                                    children: (0, l.jsx)("span", {
                                                        className: "ti-plus"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), " "]
                            })]
                        })
                    })
                };
            s.default = r
        }
    }
]);