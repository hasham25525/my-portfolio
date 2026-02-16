// Portfolio Collection

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [424],
  {
    9424: function (i, s, o) {
      o.r(s);
      var l = o(5893),
        a = o(3391),
        e = o.n(a),
        c = o(7294),
        r = function () {
          var i = (0, c.useRef)(),
            s = (0, c.useState)("*"),
            o = s[0],
            a = s[1];
          (0, c.useEffect)(function () {
            window.addEventListener("load", function () {
              return (
                (i.current = new (e())(".portfolio-content", {
                  itemSelector: ".grid-item",
                  percentPosition: !0,
                  masonry: {
                    columnWidth: ".grid-item",
                  },
                  animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1,
                  },
                })),
                function () {
                  return i.current.destroy();
                }
              );
            });
          }),
            (0, c.useEffect)(
              function () {
                i.current &&
                  ("*" === o
                    ? i.current.arrange({
                      filter: "*",
                    })
                    : i.current.arrange({
                      filter: ".".concat(o),
                    }));
              },
              [o]
            );
          var r = function (i) {
            return function () {
              a(i);
            };
          },
            t = function (i) {
              return i === o ? "active" : "";
            };
          return (0, l.jsx)("section", {
            id: "work",
            "data-nav-tooltip": "Work",
            className: "pp-section pp-scrollable section dark-bg",
            children: (0, l.jsxs)("div", {
              className: "container",
              children: [
                (0, l.jsx)("div", {
                  className: "title",
                  children: (0, l.jsx)("h3", {
                    children: "My Portfolio.",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "portfolio-filter-01",
                  children: (0, l.jsxs)("ul", {
                    className: "filter nav",
                    children: [
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("*")),
                        onClick: r("*"),
                        "data-filter": "*",
                        children: "All",
                      }),
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("devtest")),
                        onClick: r("devtest"),
                        "data-filter": ".devtest",
                        children: "DevTest",
                      }),
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("mailbot")),
                        onClick: r("mailbot"),
                        "data-filter": ".mailbot",
                        children: "MailBot",
                      }),
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("Product Customizer")),
                        onClick: r("customizer"),
                        "data-filter": ".customizer",
                        children: "Product Customizer",
                      }),
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("ecommerce")),
                        onClick: r("ecommerce"),
                        "data-filter": ".ecommerce",
                        children: "Ecommerce App",
                      }),
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("chatapp")),
                        onClick: r("chatapp"),
                        "data-filter": ".chatapp",
                        children: "ChatWithAnyone",
                      }),
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("promptopia")),
                        onClick: r("promptopia"),
                        "data-filter": ".promptopia",
                        children: "Promptopia",
                      }),
                      (0, l.jsx)("li", {
                        className: "c-pointer ".concat(t("notesapp")),
                        onClick: r("notesapp"),
                        "data-filter": ".notesapp",
                        children: "Notes App",
                      }),
                    ],
                  }),
                }),
                " ",
                (0, l.jsxs)("div", {
                  className:
                    "portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery",
                  children: [
                    (0, l.jsx)("div", {
                      className: "grid-item  devtest ",
                      children: (0, l.jsxs)("div", {
                        className: "portfolio-box-01",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "portfolio-info",
                            children: [
                              (0, l.jsx)("h5", {
                                className: "white-color font-weight-bold",
                                children: "DevTest",
                              }),
                              (0, l.jsx)("span", {
                                children:
                                  "A Realtime Coding Interview App using Socket.io",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "portfolio-img",
                            children: [
                              (0, l.jsx)(
                                "img",
                                ("a",
                                {
                                  src: "static/img/devtest.png",
                                  title:
                                    "DevTest - Realtime Coding Interview App",
                                  alt: "DevTest - Realtime Coding Interview App",
                                })
                              ),
                              (0, l.jsx)("div", {
                                className: "portfolio-icon",
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://devtest-live.vercel.app/",
                                  className: "gallery-link",
                                  children: (0, l.jsx)("span", {
                                    className: "ti-link",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    " ",
                    (0, l.jsx)("div", {
                      className: "grid-item  mailbot ",
                      children: (0, l.jsxs)("div", {
                        className: "portfolio-box-01",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "portfolio-info",
                            children: [
                              (0, l.jsx)("h5", {
                                className: "white-color font-weight-bold",
                                children: "MailBot",
                              }),
                              (0, l.jsx)("span", {
                                children:
                                  "Subscription Based Email Automation Tool",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "portfolio-img",
                            children: [
                              (0, l.jsx)(
                                "img",
                                ("a",
                                {
                                  src: "static/img/mailbot.jpg",
                                  title:
                                    "MailBot - Never Miss a Renewal Again",
                                  alt: "MailBot - Never Miss a Renewal Again",
                                })
                              ),
                              (0, l.jsx)("div", {
                                className: "portfolio-icon",
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://mail-bot-subscription-manager.vercel.app/",
                                  className: "gallery-link",
                                  children: (0, l.jsx)("span", {
                                    className: "ti-link",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    " ",
                    (0, l.jsx)("div", {
                      className: "grid-item  customizer",
                      children: (0, l.jsxs)("div", {
                        className: "portfolio-box-01",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "portfolio-info",
                            children: [
                              (0, l.jsx)("h5", {
                                className: "white-color font-weight-bold",
                                children: "Product Customizer",
                              }),
                              (0, l.jsx)("span", {
                                children:
                                  "A dynamic e-commerce product customizer with advanced text, image editing, and reusable design templates.",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "portfolio-img",
                            children: [
                              (0, l.jsx)(
                                "img",
                                ("a",
                                {
                                  src: "static/img/product-customizer.png",
                                  title: "Product Customizer",
                                  alt: "Product Customizer",
                                })
                              ),
                              (0, l.jsx)("div", {
                                className: "portfolio-icon",
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://my-product-customizer.vercel.app/",
                                  className: "gallery-link",
                                  children: (0, l.jsx)("span", {
                                    className: "ti-link",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    " ",
                    (0, l.jsx)("div", {
                      className: "grid-item  ecommerce ",
                      children: (0, l.jsxs)("div", {
                        className: "portfolio-box-01",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "portfolio-info",
                            children: [
                              (0, l.jsx)("h5", {
                                className: "white-color font-weight-bold",
                                children: "Flair",
                              }),
                              (0, l.jsx)("span", {
                                children: "Ecommerce App",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "portfolio-img",
                            children: [
                              (0, l.jsx)(
                                "img",
                                ("a",
                                {
                                  src: "static/img/p1.png",
                                  title: "Flair - Ecommerce",
                                  alt: "Flair - Ecommerce",
                                })
                              ),
                              (0, l.jsx)("div", {
                                className: "portfolio-icon",
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://ecommerce-app-hasham25525.vercel.app/",
                                  className: "gallery-link",
                                  children: (0, l.jsx)("span", {
                                    className: "ti-link",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    " ",
                    (0, l.jsx)("div", {
                      className: "grid-item chatapp",
                      children: (0, l.jsxs)("div", {
                        className: "portfolio-box-01",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "portfolio-info",
                            children: [
                              (0, l.jsx)("h5", {
                                className: "white-color font-weight-bold",
                                children: "ChatWithAnyone",
                              }),
                              (0, l.jsx)("span", {
                                children: "Chat App",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "portfolio-img",
                            children: [
                              (0, l.jsx)("img", {
                                src: "static/img/p2.png",
                                title: "ChatWithAnyone",
                                alt: "ChatWithAnyone",
                              }),
                              (0, l.jsx)("div", {
                                className: "portfolio-icon",
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://epic-chat.web.app/",
                                  className: "gallery-link",
                                  children: (0, l.jsx)("span", {
                                    className: "ti-link",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    " ",
                    (0, l.jsx)("div", {
                      className: "grid-item promptopia ",
                      children: (0, l.jsxs)("div", {
                        className: "portfolio-box-01",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "portfolio-info",
                            children: [
                              (0, l.jsx)("h5", {
                                className: "white-color font-weight-bold",
                                children: "Promptopia",
                              }),
                              (0, l.jsx)("span", {
                                children: "Prompts Sharing website",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "portfolio-img",
                            children: [
                              (0, l.jsx)("img", {
                                src: "static/img/p3.png",
                                title: "Promptopia",
                                alt: "Promptopia",
                              }),
                              (0, l.jsx)("div", {
                                className: "portfolio-icon",
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://project-promtopia-beta.vercel.app/",
                                  className: "gallery-link",
                                  children: (0, l.jsx)("span", {
                                    className: "ti-link",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    " ",
                    (0, l.jsx)("div", {
                      className: "grid-item notesapp ",
                      children: (0, l.jsxs)("div", {
                        className: "portfolio-box-01",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "portfolio-info",
                            children: [
                              (0, l.jsx)("h5", {
                                className: "white-color font-weight-bold",
                                children: "Notes App",
                              }),
                              (0, l.jsx)("span", {
                                children: "Notes App",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "portfolio-img",
                            children: [
                              (0, l.jsx)("img", {
                                src: "static/img/p4-1.png",
                                title: "Notes App",
                                alt: "Notes App",
                              }),
                              (0, l.jsx)("div", {
                                className: "portfolio-icon",
                                children: (0, l.jsx)("a", {
                                  target: "_blank",
                                  href: "https://notes-github-io-lyart.vercel.app/",
                                  className: "gallery-link",
                                  children: (0, l.jsx)("span", {
                                    className: "ti-link",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    ,
                    // " ", (0, l.jsx)("div", {
                    //     className: "grid-item ecommerce",
                    //     children: (0, l.jsxs)("div", {
                    //         className: "portfolio-box-01",
                    //         children: [(0, l.jsxs)("div", {
                    //             className: "portfolio-info",
                    //             children: [(0, l.jsx)("h5", {
                    //                 className: "white-color font-weight-bold",
                    //                 children: "Momb ios App"
                    //             }), (0, l.jsx)("span", {
                    //                 children: "Broadcasting ios App"
                    //             })]
                    //         }), (0, l.jsxs)("div", {
                    //             className: "portfolio-img",
                    //             children: [(0, l.jsx)("img", {
                    //                 src: "static/img/m-portfolio-4.jpg",
                    //                 title: "",
                    //                 alt: ""
                    //             }), (0, l.jsx)("div", {
                    //                 className: "portfolio-icon",
                    //                 children: (0, l.jsx)("a", {
                    //                     href: "static/img/m-portfolio-4.jpg",
                    //                     className: "gallery-link",
                    //                     children: (0, l.jsx)("span", {
                    //                         className: "ti-plus"
                    //                     })
                    //                 })
                    //             })]
                    //         })]
                    //     })
                    // }), " ", (0, l.jsx)("div", {
                    //     className: "grid-item notesapp chatapp",
                    //     children: (0, l.jsxs)("div", {
                    //         className: "portfolio-box-01",
                    //         children: [(0, l.jsxs)("div", {
                    //             className: "portfolio-info",
                    //             children: [(0, l.jsx)("h5", {
                    //                 className: "white-color font-weight-bold",
                    //                 children: "Momb ios App"
                    //             }), (0, l.jsx)("span", {
                    //                 children: "Broadcasting ios App"
                    //             })]
                    //         }), (0, l.jsxs)("div", {
                    //             className: "portfolio-img",
                    //             children: [(0, l.jsx)("img", {
                    //                 src: "static/img/m-portfolio-6.jpg",
                    //                 title: "",
                    //                 alt: ""
                    //             }), (0, l.jsx)("div", {
                    //                 className: "portfolio-icon",
                    //                 children: (0, l.jsx)("a", {
                    //                     href: "static/img/m-portfolio-6.jpg",
                    //                     className: "gallery-link",
                    //                     children: (0, l.jsx)("span", {
                    //                         className: "ti-plus"
                    //                     })
                    //                 })
                    //             })]
                    //         })]
                    //     })
                    // }), " ", (0, l.jsx)("div", {
                    //     className: "grid-item promptopia",
                    //     children: (0, l.jsxs)("div", {
                    //         className: "portfolio-box-01",
                    //         children: [(0, l.jsxs)("div", {
                    //             className: "portfolio-info",
                    //             children: [(0, l.jsx)("h5", {
                    //                 className: "white-color font-weight-bold",
                    //                 children: "Momb ios App"
                    //             }), (0, l.jsx)("span", {
                    //                 children: "Broadcasting ios App"
                    //             })]
                    //         }), (0, l.jsxs)("div", {
                    //             className: "portfolio-img",
                    //             children: [(0, l.jsx)("img", {
                    //                 src: "static/img/m-portfolio-7.jpg",
                    //                 title: "",
                    //                 alt: ""
                    //             }), (0, l.jsx)("div", {
                    //                 className: "portfolio-icon",
                    //                 children: (0, l.jsx)("a", {
                    //                     href: "static/img/m-portfolio-7.jpg",
                    //                     className: "gallery-link",
                    //                     children: (0, l.jsx)("span", {
                    //                         className: "ti-plus"
                    //                     })
                    //                 })
                    //             })]
                    //         })]
                    //     })
                    // }), " ", (0, l.jsx)("div", {
                    //     className: "grid-item notesapp ecommerce",
                    //     children: (0, l.jsxs)("div", {
                    //         className: "portfolio-box-01",
                    //         children: [(0, l.jsxs)("div", {
                    //             className: "portfolio-info",
                    //             children: [(0, l.jsx)("h5", {
                    //                 className: "white-color font-weight-bold",
                    //                 children: "Momb ios App"
                    //             }), (0, l.jsx)("span", {
                    //                 children: "Broadcasting ios App"
                    //             })]
                    //         }), (0, l.jsxs)("div", {
                    //             className: "portfolio-img",
                    //             children: [(0, l.jsx)("img", {
                    //                 src: "static/img/m-portfolio-8.jpg",
                    //                 title: "",
                    //                 alt: ""
                    //             }), (0, l.jsx)("div", {
                    //                 className: "portfolio-icon",
                    //                 children: (0, l.jsx)("a", {
                    //                     href: "static/img/m-portfolio-8.jpg",
                    //                     className: "gallery-link",
                    //                     children: (0, l.jsx)("span", {
                    //                         className: "ti-plus"
                    //                     })
                    //                 })
                    //             })]
                    //         })]
                    //     })
                    // }), " ", (0, l.jsx)("div", {
                    //     className: "grid-item promptopia",
                    //     children: (0, l.jsxs)("div", {
                    //         className: "portfolio-box-01",
                    //         children: [(0, l.jsxs)("div", {
                    //             className: "portfolio-info",
                    //             children: [(0, l.jsx)("h5", {
                    //                 className: "white-color font-weight-bold",
                    //                 children: "Momb ios App"
                    //             }), (0, l.jsx)("span", {
                    //                 children: "Broadcasting ios App"
                    //             })]
                    //         }), (0, l.jsxs)("div", {
                    //             className: "portfolio-img",
                    //             children: [(0, l.jsx)("img", {
                    //                 src: "static/img/m-portfolio-9.jpg",
                    //                 title: "",
                    //                 alt: ""
                    //             }), (0, l.jsx)("div", {
                    //                 className: "portfolio-icon",
                    //                 children: (0, l.jsx)("a", {
                    //                     href: "static/img/m-portfolio-9.jpg",
                    //                     className: "gallery-link",
                    //                     children: (0, l.jsx)("span", {
                    //                         className: "ti-plus"
                    //                     })
                    //                 })
                    //             })]
                    //         })]
                    //     })
                    // })
                    " ",
                  ],
                }),
              ],
            }),
          });
        };
      s.default = r;
    },
  },
]);
