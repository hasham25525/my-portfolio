"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [719], {
        719: function(e, t, i) {
            i.d(t, {
                tq: function() {
                    return w
                },
                o5: function() {
                    return y
                }
            });
            var s = i(7294),
                r = i(8197);

            function a(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function n(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : a(t[i]) && a(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : n(e[i], t[i]) : e[i] = t[i]
                })
            }

            function l(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function o(e = {}) {
                return e.pagination && void 0 === e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function p(e = "") {
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let u = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
                c = (e, t) => {
                    let i = t.slidesPerView;
                    if (t.breakpoints) {
                        let s = r.ZP.prototype.getBreakpoint(t.breakpoints),
                            a = s in t.breakpoints ? t.breakpoints[s] : void 0;
                        a && a.slidesPerView && (i = a.slidesPerView)
                    }
                    let n = Math.ceil(parseFloat(t.loopedSlides || i, 10));
                    return (n += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (n = e.length), n
                };

            function h(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }
            let f = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function m(e, t) {
                return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
            }
            let g = (0, s.createContext)(null),
                v = (0, s.createContext)(null);

            function b() {
                return (b = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            let w = (0, s.forwardRef)(function(e, t) {
                let {
                    className: i,
                    tag: g = "div",
                    wrapperTag: w = "div",
                    children: C,
                    onSwiper: y,
                    ...S
                } = void 0 === e ? {} : e, T = !1, [E, x] = (0, s.useState)("swiper"), [M, k] = (0, s.useState)(null), [P, $] = (0, s.useState)(!1), O = (0, s.useRef)(!1), L = (0, s.useRef)(null), _ = (0, s.useRef)(null), z = (0, s.useRef)(null), A = (0, s.useRef)(null), D = (0, s.useRef)(null), I = (0, s.useRef)(null), N = (0, s.useRef)(null), B = (0, s.useRef)(null), {
                    params: G,
                    passedParams: j,
                    rest: F,
                    events: H
                } = function(e = {}, t = !0) {
                    let i = {
                            on: {}
                        },
                        s = {},
                        l = {};
                    n(i, r.ZP.defaults), n(i, r.ZP.extendedDefaults), i._emitClasses = !0, i.init = !1;
                    let o = {},
                        d = u.map(e => e.replace(/_/, "")),
                        p = Object.assign({}, e);
                    return Object.keys(p).forEach(r => {
                        void 0 !== e[r] && (d.indexOf(r) >= 0 ? a(e[r]) ? (i[r] = {}, l[r] = {}, n(i[r], e[r]), n(l[r], e[r])) : (i[r] = e[r], l[r] = e[r]) : 0 === r.search(/on[A-Z]/) && "function" == typeof e[r] ? t ? s[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : o[r] = e[r])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {
                        params: i,
                        passedParams: l,
                        rest: o,
                        events: s
                    }
                }(S), {
                    slides: R,
                    slots: V
                } = function(e) {
                    let t = [],
                        i = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return s.Children.toArray(e).forEach(e => {
                        if (h(e)) t.push(e);
                        else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            let r = function e(t) {
                                let i = [];
                                return s.Children.toArray(t).forEach(t => {
                                    h(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                }), i
                            }(e.props.children);
                            r.length > 0 ? r.forEach(e => t.push(e)) : i["container-end"].push(e)
                        } else i["container-end"].push(e)
                    }), {
                        slides: t,
                        slots: i
                    }
                }(C), W = () => {
                    $(!P)
                };
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        x(t)
                    }
                });
                let q = () => {
                    if (Object.assign(G.on, H), T = !0, _.current = new r.ZP(G), _.current.loopCreate = () => {}, _.current.loopDestroy = () => {}, G.loop && (_.current.loopedSlides = c(R, G)), _.current.virtual && _.current.params.virtual.enabled) {
                        _.current.virtual.slides = R;
                        let e = {
                            cache: !1,
                            slides: R,
                            renderExternal: k,
                            renderExternalUpdate: !1
                        };
                        n(_.current.params.virtual, e), n(_.current.originalParams.virtual, e)
                    }
                };
                L.current || q(), _.current && _.current.on("_beforeBreakpoint", W);
                let X = () => {
                        !T && H && _.current && Object.keys(H).forEach(e => {
                            _.current.on(e, H[e])
                        })
                    },
                    Y = () => {
                        H && _.current && Object.keys(H).forEach(e => {
                            _.current.off(e, H[e])
                        })
                    };
                return (0, s.useEffect)(() => () => {
                    _.current && _.current.off("_beforeBreakpoint", W)
                }), (0, s.useEffect)(() => {
                    !O.current && _.current && (_.current.emitSlidesClasses(), O.current = !0)
                }), m(() => {
                    if (t && (t.current = L.current), L.current) return _.current.destroyed && q(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: i,
                            paginationEl: s,
                            scrollbarEl: r,
                            swiper: a
                        }, n) {
                            l(n) && t && i && (a.params.navigation.nextEl = t, a.originalParams.navigation.nextEl = t, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), o(n) && s && (a.params.pagination.el = s, a.originalParams.pagination.el = s), d(n) && r && (a.params.scrollbar.el = r, a.originalParams.scrollbar.el = r), a.init(e)
                        }({
                            el: L.current,
                            nextEl: D.current,
                            prevEl: I.current,
                            paginationEl: N.current,
                            scrollbarEl: B.current,
                            swiper: _.current
                        }, G), y && y(_.current), () => {
                            _.current && !_.current.destroyed && _.current.destroy(!0, !1)
                        }
                }, []), m(() => {
                    X();
                    let e = function(e, t, i, s, r) {
                        let n = [];
                        if (!t) return n;
                        let l = e => {
                            0 > n.indexOf(e) && n.push(e)
                        };
                        if (i && s) {
                            let o = s.map(r),
                                d = i.map(r);
                            o.join("") !== d.join("") && l("children"), s.length !== i.length && l("children")
                        }
                        let p = u.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                        return p.forEach(i => {
                            if (i in e && i in t) {
                                if (a(e[i]) && a(t[i])) {
                                    let s = Object.keys(e[i]),
                                        r = Object.keys(t[i]);
                                    s.length !== r.length ? l(i) : (s.forEach(s => {
                                        e[i][s] !== t[i][s] && l(i)
                                    }), r.forEach(s => {
                                        e[i][s] !== t[i][s] && l(i)
                                    }))
                                } else e[i] !== t[i] && l(i)
                            }
                        }), n
                    }(j, z.current, R, A.current, e => e.key);
                    return z.current = j, A.current = R, e.length && _.current && !_.current.destroyed && function({
                        swiper: e,
                        slides: t,
                        passedParams: i,
                        changedParams: s,
                        nextEl: r,
                        prevEl: l,
                        scrollbarEl: o,
                        paginationEl: d
                    }) {
                        let p = s.filter(e => "children" !== e && "direction" !== e),
                            {
                                params: u,
                                pagination: c,
                                navigation: h,
                                scrollbar: f,
                                virtual: m,
                                thumbs: g
                            } = e,
                            v, b, w, C, y;
                        s.includes("thumbs") && i.thumbs && i.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (v = !0), s.includes("controller") && i.controller && i.controller.control && u.controller && !u.controller.control && (b = !0), s.includes("pagination") && i.pagination && (i.pagination.el || d) && (u.pagination || !1 === u.pagination) && c && !c.el && (w = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (u.scrollbar || !1 === u.scrollbar) && f && !f.el && (C = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || r) && (u.navigation || !1 === u.navigation) && h && !h.prevEl && !h.nextEl && (y = !0);
                        let S = t => {
                            e[t] && (e[t].destroy(), "navigation" === t ? (u[t].prevEl = void 0, u[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (u[t].el = void 0, e[t].el = void 0))
                        };
                        if (p.forEach(e => {
                                if (a(u[e]) && a(i[e])) n(u[e], i[e]);
                                else {
                                    let t = i[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && S(e): u[e] = i[e]
                                }
                            }), p.includes("controller") && !b && e.controller && e.controller.control && u.controller && u.controller.control && (e.controller.control = u.controller.control), s.includes("children") && t && m && u.virtual.enabled ? (m.slides = t, m.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), v) {
                            let T = g.init();
                            T && g.update(!0)
                        }
                        b && (e.controller.control = u.controller.control), w && (d && (u.pagination.el = d), c.init(), c.render(), c.update()), C && (o && (u.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), y && (r && (u.navigation.nextEl = r), l && (u.navigation.prevEl = l), h.init(), h.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), e.update()
                    }({
                        swiper: _.current,
                        slides: R,
                        passedParams: j,
                        changedParams: e,
                        nextEl: D.current,
                        prevEl: I.current,
                        scrollbarEl: B.current,
                        paginationEl: N.current
                    }), () => {
                        Y()
                    }
                }), m(() => {
                    f(_.current)
                }, [M]), s.createElement(g, b({
                    ref: L,
                    className: p(`${E}${i?` ${i}`:""}`)
                }, F), s.createElement(v.Provider, {
                    value: _.current
                }, V["container-start"], s.createElement(w, {
                    className: "swiper-wrapper"
                }, V["wrapper-start"], G.virtual ? function(e, t, i) {
                    if (!i) return null;
                    let r = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                    } : {
                        top: `${i.offset}px`
                    };
                    return t.filter((e, t) => t >= i.from && t <= i.to).map(t => s.cloneElement(t, {
                        swiper: e,
                        style: r
                    }))
                }(_.current, R, M) : !G.loop || _.current && _.current.destroyed ? R.map(e => s.cloneElement(e, {
                    swiper: _.current
                })) : function(e, t, i) {
                    let r = t.map((t, i) => s.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": i
                    }));

                    function a(e, t, r) {
                        return s.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${r}`,
                            className: `${e.props.className||""} ${i.slideDuplicateClass}`
                        })
                    }
                    if (i.loopFillGroupWithBlank) {
                        let n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                        if (n !== i.slidesPerGroup)
                            for (let l = 0; l < n; l += 1) {
                                let o = s.createElement("div", {
                                    className: `${i.slideClass} ${i.slideBlankClass}`
                                });
                                r.push(o)
                            }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length);
                    let d = c(r, i),
                        p = [],
                        u = [];
                    for (let h = 0; h < d; h += 1) {
                        let f = h - Math.floor(h / r.length) * r.length;
                        u.push(a(r[f], h, "append")), p.unshift(a(r[r.length - f - 1], h, "prepend"))
                    }
                    return e && (e.loopedSlides = d), [...p, ...r, ...u]
                }(_.current, R, G), V["wrapper-end"]), l(G) && s.createElement(s.Fragment, null, s.createElement("div", {
                    ref: I,
                    className: "swiper-button-prev"
                }), s.createElement("div", {
                    ref: D,
                    className: "swiper-button-next"
                })), d(G) && s.createElement("div", {
                    ref: B,
                    className: "swiper-scrollbar"
                }), o(G) && s.createElement("div", {
                    ref: N,
                    className: "swiper-pagination"
                }), V["container-end"]))
            });

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            w.displayName = "Swiper";
            let y = (0, s.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: r,
                    className: a = "",
                    swiper: n,
                    zoom: l,
                    virtualIndex: o,
                    ...d
                } = void 0 === e ? {} : e, u = (0, s.useRef)(null), [c, h] = (0, s.useState)("swiper-slide");

                function f(e, t, i) {
                    t === u.current && h(i)
                }
                m(() => {
                    if (t && (t.current = u.current), u.current && n) {
                        if (n.destroyed) {
                            "swiper-slide" !== c && h("swiper-slide");
                            return
                        }
                        return n.on("_slideClass", f), () => {
                            n && n.off("_slideClass", f)
                        }
                    }
                }), m(() => {
                    n && u.current && !n.destroyed && h(n.getSlideClasses(u.current))
                }, [n]);
                let v = {
                        isActive: c.indexOf("swiper-slide-active") >= 0 || c.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: c.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: c.indexOf("swiper-slide-prev") >= 0 || c.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: c.indexOf("swiper-slide-next") >= 0 || c.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    b = () => "function" == typeof r ? r(v) : r;
                return s.createElement(i, C({
                    ref: u,
                    className: p(`${c}${a?` ${a}`:""}`),
                    "data-swiper-slide-index": o
                }, d), s.createElement(g.Provider, {
                    value: v
                }, l ? s.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof l ? l : void 0
                }, b()) : b()))
            });
            y.displayName = "SwiperSlide"
        },
        8197: function(e, t, i) {
            function s(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e = {}, t = {}) {
                Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i])
                })
            }
            i.d(t, {
                pt: function() {
                    return X
                },
                xW: function() {
                    return Z
                },
                rj: function() {
                    return Y
                },
                W_: function() {
                    return V
                },
                tl: function() {
                    return q
                },
                ZP: function() {
                    return H
                }
            });
            let a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function n() {
                let e = "undefined" != typeof document ? document : {};
                return r(e, a), e
            }
            let l = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                let e = "undefined" != typeof window ? window : {};
                return r(e, l), e
            }
            class d extends Array {
                constructor(e) {
                    "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                        let t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function p(e = []) {
                let t = [];
                return e.forEach(e => {
                    Array.isArray(e) ? t.push(...p(e)) : t.push(e)
                }), t
            }

            function u(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function c(e, t) {
                let i = o(),
                    s = n(),
                    r = [];
                if (!t && e instanceof d) return e;
                if (!e) return new d(r);
                if ("string" == typeof e) {
                    let a = e.trim();
                    if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                        let l = "div";
                        0 === a.indexOf("<li") && (l = "ul"), 0 === a.indexOf("<tr") && (l = "tbody"), (0 === a.indexOf("<td") || 0 === a.indexOf("<th")) && (l = "tr"), 0 === a.indexOf("<tbody") && (l = "table"), 0 === a.indexOf("<option") && (l = "select");
                        let p = s.createElement(l);
                        p.innerHTML = a;
                        for (let u = 0; u < p.childNodes.length; u += 1) r.push(p.childNodes[u])
                    } else r = function(e, t) {
                        if ("string" != typeof e) return [e];
                        let i = [],
                            s = t.querySelectorAll(e);
                        for (let r = 0; r < s.length; r += 1) i.push(s[r]);
                        return i
                    }(e.trim(), t || s)
                } else if (e.nodeType || e === i || e === s) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    r = e
                }
                return new d(function(e) {
                    let t = [];
                    for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t
                }(r))
            }
            c.fn = d.prototype;
            let h = "resize scroll".split(" ");

            function f(e) {
                return function(...t) {
                    if (void 0 === t[0]) {
                        for (let i = 0; i < this.length; i += 1) 0 > h.indexOf(e) && (e in this[i] ? this[i][e]() : c(this[i]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            f("click"), f("blur"), f("focus"), f("focusin"), f("focusout"), f("keyup"), f("keydown"), f("keypress"), f("submit"), f("change"), f("mousedown"), f("mousemove"), f("mouseup"), f("mouseenter"), f("mouseleave"), f("mouseout"), f("mouseover"), f("touchstart"), f("touchend"), f("touchmove"), f("resize"), f("scroll");
            let m = {
                addClass: function(...e) {
                    let t = p(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.add(...t)
                    }), this
                },
                removeClass: function(...e) {
                    let t = p(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.remove(...t)
                    }), this
                },
                hasClass: function(...e) {
                    let t = p(e.map(e => e.split(" ")));
                    return u(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
                },
                toggleClass: function(...e) {
                    let t = p(e.map(e => e.split(" ")));
                    this.forEach(e => {
                        t.forEach(t => {
                            e.classList.toggle(t)
                        })
                    })
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (let s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let [t, i, s, r] = e;

                    function a(e) {
                        let t = e.target;
                        if (!t) return;
                        let r = e.target.dom7EventData || [];
                        if (0 > r.indexOf(e) && r.unshift(e), c(t).is(i)) s.apply(t, r);
                        else {
                            let a = c(t).parents();
                            for (let n = 0; n < a.length; n += 1) c(a[n]).is(i) && s.apply(a[n], r)
                        }
                    }

                    function n(e) {
                        let t = e && e.target && e.target.dom7EventData || [];
                        0 > t.indexOf(e) && t.unshift(e), s.apply(this, t)
                    }
                    "function" == typeof e[1] && ([t, s, r] = e, i = void 0), r || (r = !1);
                    let l = t.split(" "),
                        o;
                    for (let d = 0; d < this.length; d += 1) {
                        let p = this[d];
                        if (i)
                            for (o = 0; o < l.length; o += 1) {
                                let u = l[o];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[u] || (p.dom7LiveListeners[u] = []), p.dom7LiveListeners[u].push({
                                    listener: s,
                                    proxyListener: a
                                }), p.addEventListener(u, a, r)
                            } else
                                for (o = 0; o < l.length; o += 1) {
                                    let h = l[o];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[h] || (p.dom7Listeners[h] = []), p.dom7Listeners[h].push({
                                        listener: s,
                                        proxyListener: n
                                    }), p.addEventListener(h, n, r)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, i, s, r] = e;
                    "function" == typeof e[1] && ([t, s, r] = e, i = void 0), r || (r = !1);
                    let a = t.split(" ");
                    for (let n = 0; n < a.length; n += 1) {
                        let l = a[n];
                        for (let o = 0; o < this.length; o += 1) {
                            let d = this[o],
                                p;
                            if (!i && d.dom7Listeners ? p = d.dom7Listeners[l] : i && d.dom7LiveListeners && (p = d.dom7LiveListeners[l]), p && p.length)
                                for (let u = p.length - 1; u >= 0; u -= 1) {
                                    let c = p[u];
                                    s && c.listener === s ? (d.removeEventListener(l, c.proxyListener, r), p.splice(u, 1)) : s && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === s ? (d.removeEventListener(l, c.proxyListener, r), p.splice(u, 1)) : s || (d.removeEventListener(l, c.proxyListener, r), p.splice(u, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    let t = o(),
                        i = e[0].split(" "),
                        s = e[1];
                    for (let r = 0; r < i.length; r += 1) {
                        let a = i[r];
                        for (let n = 0; n < this.length; n += 1) {
                            let l = this[n];
                            if (t.CustomEvent) {
                                let d = new t.CustomEvent(a, {
                                    detail: s,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                l.dom7EventData = e.filter((e, t) => t > 0), l.dispatchEvent(d), l.dom7EventData = [], delete l.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    let t = this;

                    function i(s) {
                        s.target === this && (e.call(this, s), t.off("transitionend", i))
                    }
                    return e && t.on("transitionend", i), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    let e = o();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        let e = o(),
                            t = n(),
                            i = this[0],
                            s = i.getBoundingClientRect(),
                            r = t.body,
                            a = i.clientTop || r.clientTop || 0,
                            l = i.clientLeft || r.clientLeft || 0,
                            d = i === e ? e.scrollY : i.scrollTop,
                            p = i === e ? e.scrollX : i.scrollLeft;
                        return {
                            top: s.top + d - a,
                            left: s.left + p - l
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i = o(),
                        s;
                    if (1 === arguments.length) {
                        if ("string" == typeof e) {
                            if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
                        } else {
                            for (s = 0; s < this.length; s += 1)
                                for (let r in e) this[s].style[r] = e[r];
                            return this
                        }
                    }
                    if (2 === arguments.length && "string" == typeof e)
                        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this
                },
                each: function(e) {
                    return e && this.forEach((t, i) => {
                        e.apply(t, [t, i])
                    }), this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    let t = o(),
                        i = n(),
                        s = this[0],
                        r, a;
                    if (!s || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (s.matches) return s.matches(e);
                        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                        if (s.msMatchesSelector) return s.msMatchesSelector(e);
                        for (a = 0, r = c(e); a < r.length; a += 1)
                            if (r[a] === s) return !0;
                        return !1
                    }
                    if (e === i) return s === i;
                    if (e === t) return s === t;
                    if (e.nodeType || e instanceof d) {
                        for (a = 0, r = e.nodeType ? [e] : e; a < r.length; a += 1)
                            if (r[a] === s) return !0
                    }
                    return !1
                },
                index: function() {
                    let e = this[0],
                        t;
                    if (e) {
                        for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                        return t
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    let t = this.length;
                    if (e > t - 1) return c([]);
                    if (e < 0) {
                        let i = t + e;
                        return i < 0 ? c([]) : c([this[i]])
                    }
                    return c([this[e]])
                },
                append: function(...e) {
                    let t, i = n();
                    for (let s = 0; s < e.length; s += 1) {
                        t = e[s];
                        for (let r = 0; r < this.length; r += 1)
                            if ("string" == typeof t) {
                                let a = i.createElement("div");
                                for (a.innerHTML = t; a.firstChild;) this[r].appendChild(a.firstChild)
                            } else if (t instanceof d)
                            for (let l = 0; l < t.length; l += 1) this[r].appendChild(t[l]);
                        else this[r].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let t = n(),
                        i, s;
                    for (i = 0; i < this.length; i += 1)
                        if ("string" == typeof e) {
                            let r = t.createElement("div");
                            for (r.innerHTML = e, s = r.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(r.childNodes[s], this[i].childNodes[0])
                        } else if (e instanceof d)
                        for (s = 0; s < e.length; s += 1) this[i].insertBefore(e[s], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                    return this
                },
                next: function(e) {
                    if (this.length > 0) {
                        if (e) return this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? c([this[0].nextElementSibling]) : c([]);
                        if (this[0].nextElementSibling) return c([this[0].nextElementSibling])
                    }
                    return c([])
                },
                nextAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return c([]);
                    for (; i.nextElementSibling;) {
                        let s = i.nextElementSibling;
                        e ? c(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return c(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        let t = this[0];
                        if (e) return t.previousElementSibling && c(t.previousElementSibling).is(e) ? c([t.previousElementSibling]) : c([]);
                        if (t.previousElementSibling) return c([t.previousElementSibling])
                    }
                    return c([])
                },
                prevAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return c([]);
                    for (; i.previousElementSibling;) {
                        let s = i.previousElementSibling;
                        e ? c(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return c(t)
                },
                parent: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? c(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return c(t)
                },
                parents: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].parentNode;
                        for (; s;) e ? c(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                    }
                    return c(t)
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].querySelectorAll(e);
                        for (let r = 0; r < s.length; r += 1) t.push(s[r])
                    }
                    return c(t)
                },
                children: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].children;
                        for (let r = 0; r < s.length; r += 1)(!e || c(s[r]).is(e)) && t.push(s[r])
                    }
                    return c(t)
                },
                filter: function(e) {
                    let t = u(this, e);
                    return c(t)
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };

            function g(e, t = 0) {
                return setTimeout(e, t)
            }

            function v() {
                return Date.now()
            }

            function b(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function w(e) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function C(...e) {
                let t = Object(e[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < e.length; s += 1) {
                    let r = e[s];
                    if (null != r && !w(r)) {
                        let a = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                        for (let n = 0, l = a.length; n < l; n += 1) {
                            let o = a[n],
                                d = Object.getOwnPropertyDescriptor(r, o);
                            void 0 !== d && d.enumerable && (b(t[o]) && b(r[o]) ? r[o].__swiper__ ? t[o] = r[o] : C(t[o], r[o]) : !b(t[o]) && b(r[o]) ? (t[o] = {}, r[o].__swiper__ ? t[o] = r[o] : C(t[o], r[o])) : t[o] = r[o])
                        }
                    }
                }
                return t
            }

            function y(e, t, i) {
                e.style.setProperty(t, i)
            }

            function S({
                swiper: e,
                targetPosition: t,
                side: i
            }) {
                let s = o(),
                    r = -e.translate,
                    a = null,
                    n, l = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
                let d = t > r ? "next" : "prev",
                    p = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                    u = () => {
                        n = new Date().getTime(), null === a && (a = n);
                        let o = Math.max(Math.min((n - a) / l, 1), 0),
                            d = r + (.5 - Math.cos(o * Math.PI) / 2) * (t - r);
                        if (p(d, t) && (d = t), e.wrapperEl.scrollTo({
                                [i]: d
                            }), p(d, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [i]: d
                                })
                            }), s.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = s.requestAnimationFrame(u)
                    };
                u()
            }
            Object.keys(m).forEach(e => {
                Object.defineProperty(c.fn, e, {
                    value: m[e],
                    writable: !0
                })
            });
            let T;

            function E() {
                return T || (T = function() {
                    let e = o(),
                        t = n();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                let i = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, i)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), T
            }
            let x, M;

            function k({
                swiper: e,
                runCallbacks: t,
                direction: i,
                step: s
            }) {
                let {
                    activeIndex: r,
                    previousIndex: a
                } = e, n = i;
                if (n || (n = r > a ? "next" : r < a ? "prev" : "reset"), e.emit(`transition${s}`), t && r !== a) {
                    if ("reset" === n) {
                        e.emit(`slideResetTransition${s}`);
                        return
                    }
                    e.emit(`slideChangeTransition${s}`), "next" === n ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
                }
            }

            function P(e) {
                let t = this,
                    i = n(),
                    s = o(),
                    r = t.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        enabled: d
                    } = t;
                if (!d || t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let p = e;
                p.originalEvent && (p = p.originalEvent);
                let u = c(p.target);
                if ("wrapper" === a.touchEventsTarget && !u.closest(t.wrapperEl).length || (r.isTouchEvent = "touchstart" === p.type, !r.isTouchEvent && "which" in p && 3 === p.which || !r.isTouchEvent && "button" in p && p.button > 0 || r.isTouched && r.isMoved)) return;
                let h = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    f = e.composedPath ? e.composedPath() : e.path;
                h && p.target && p.target.shadowRoot && f && (u = c(f[0]));
                let m = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    g = !!(p.target && p.target.shadowRoot);
                if (a.noSwiping && (g ? function(e, t = this) {
                        return function t(i) {
                            if (!i || i === n() || i === o()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            let s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                    }(m, u[0]) : u.closest(m)[0])) {
                    t.allowClick = !0;
                    return
                }
                if (a.swipeHandler && !u.closest(a.swipeHandler)[0]) return;
                l.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, l.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
                let b = l.currentX,
                    w = l.currentY,
                    C = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    y = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (C && (b <= y || b >= s.innerWidth - y)) {
                    if ("prevent" !== C) return;
                    e.preventDefault()
                }
                if (Object.assign(r, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = b, l.startY = w, r.touchStartTime = v(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== p.type) {
                    let S = !0;
                    u.is(r.focusableElements) && (S = !1, "SELECT" === u[0].nodeName && (r.isTouched = !1)), i.activeElement && c(i.activeElement).is(r.focusableElements) && i.activeElement !== u[0] && i.activeElement.blur();
                    let T = S && t.allowTouchMove && a.touchStartPreventDefault;
                    (a.touchStartForcePreventDefault || T) && !u[0].isContentEditable && p.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
            }

            function $(e) {
                let t = n(),
                    i = this,
                    s = i.touchEventsData,
                    {
                        params: r,
                        touches: a,
                        rtlTranslate: l,
                        enabled: o
                    } = i;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !s.isTouched) {
                    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", d);
                    return
                }
                if (s.isTouchEvent && "touchmove" !== d.type) return;
                let p = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    u = "touchmove" === d.type ? p.pageX : d.pageX,
                    h = "touchmove" === d.type ? p.pageY : d.pageY;
                if (d.preventedByNestedSwiper) {
                    a.startX = u, a.startY = h;
                    return
                }
                if (!i.allowTouchMove) {
                    c(d.target).is(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(a, {
                        startX: u,
                        startY: h,
                        currentX: u,
                        currentY: h
                    }), s.touchStartTime = v());
                    return
                }
                if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
                    if (i.isVertical()) {
                        if (h < a.startY && i.translate <= i.maxTranslate() || h > a.startY && i.translate >= i.minTranslate()) {
                            s.isTouched = !1, s.isMoved = !1;
                            return
                        }
                    } else if (u < a.startX && i.translate <= i.maxTranslate() || u > a.startX && i.translate >= i.minTranslate()) return
                }
                if (s.isTouchEvent && t.activeElement && d.target === t.activeElement && c(d.target).is(s.focusableElements)) {
                    s.isMoved = !0, i.allowClick = !1;
                    return
                }
                if (s.allowTouchCallbacks && i.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                a.currentX = u, a.currentY = h;
                let f = a.currentX - a.startX,
                    m = a.currentY - a.startY;
                if (i.params.threshold && Math.sqrt(f ** 2 + m ** 2) < i.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let g;
                    i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : f * f + m * m >= 25 && (g = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, s.isScrolling = i.isHorizontal() ? g > r.touchAngle : 90 - g > r.touchAngle)
                }
                if (s.isScrolling && i.emit("touchMoveOpposite", d), void 0 === s.startMoving && (a.currentX !== a.startX || a.currentY !== a.startY) && (s.startMoving = !0), s.isScrolling) {
                    s.isTouched = !1;
                    return
                }
                if (!s.startMoving) return;
                i.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation(), s.isMoved || (r.loop && !r.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, r.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0), i.emit("sliderFirstMove", d)), i.emit("sliderMove", d), s.isMoved = !0;
                let b = i.isHorizontal() ? f : m;
                a.diff = b, b *= r.touchRatio, l && (b = -b), i.swipeDirection = b > 0 ? "prev" : "next", s.currentTranslate = b + s.startTranslate;
                let w = !0,
                    C = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (C = 0), b > 0 && s.currentTranslate > i.minTranslate() ? (w = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + b) ** C)) : b < 0 && s.currentTranslate < i.maxTranslate() && (w = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - b) ** C)), w && (d.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                    if (Math.abs(b) > r.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                            return
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return
                    }
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
            }

            function O(e) {
                let t = this,
                    i = t.touchEventsData,
                    {
                        params: s,
                        touches: r,
                        rtlTranslate: a,
                        slidesGrid: n,
                        enabled: l
                    } = t;
                if (!l) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", o), i.allowTouchCallbacks = !1, !i.isTouched) {
                    i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
                    return
                }
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                let d = v(),
                    p = d - i.touchStartTime;
                if (t.allowClick) {
                    let u = o.path || o.composedPath && o.composedPath();
                    t.updateClickedSlide(u && u[0] || o.target), t.emit("tap click", o), p < 300 && d - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
                }
                if (i.lastClickTime = v(), g(() => {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) {
                    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
                    return
                }
                i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
                let c;
                if (c = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, s.cssMode) return;
                if (t.params.freeMode && s.freeMode.enabled) {
                    t.freeMode.onTouchEnd({
                        currentPos: c
                    });
                    return
                }
                let h = 0,
                    f = t.slidesSizesGrid[0];
                for (let m = 0; m < n.length; m += m < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    let b = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== n[m + b] ? c >= n[m] && c < n[m + b] && (h = m, f = n[m + b] - n[m]) : c >= n[m] && (h = m, f = n[n.length - 1] - n[n.length - 2])
                }
                let w = null,
                    C = null;
                s.rewind && (t.isBeginning ? C = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
                let y = (c - n[h]) / f,
                    S = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (p > s.longSwipesMs) {
                    if (!s.longSwipes) {
                        t.slideTo(t.activeIndex);
                        return
                    }
                    "next" === t.swipeDirection && (y >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? w : h + S) : t.slideTo(h)), "prev" === t.swipeDirection && (y > 1 - s.longSwipesRatio ? t.slideTo(h + S) : null !== C && y < 0 && Math.abs(y) > s.longSwipesRatio ? t.slideTo(C) : t.slideTo(h))
                } else {
                    if (!s.shortSwipes) {
                        t.slideTo(t.activeIndex);
                        return
                    }
                    let T = t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl);
                    T ? o.target === t.navigation.nextEl ? t.slideTo(h + S) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : h + S), "prev" === t.swipeDirection && t.slideTo(null !== C ? C : h))
                }
            }

            function L() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function _(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function z() {
                let e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: i,
                        enabled: s
                    } = e;
                if (!s) return;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                let r, a = e.maxTranslate() - e.minTranslate();
                (0 === a ? 0 : (e.translate - e.minTranslate()) / a) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let A = !1;

            function D() {}
            let I = (e, t) => {
                    let i = n(),
                        {
                            params: s,
                            touchEvents: r,
                            el: a,
                            wrapperEl: l,
                            device: o,
                            support: d
                        } = e,
                        p = !!s.nested,
                        u = "on" === t ? "addEventListener" : "removeEventListener";
                    if (d.touch) {
                        let c = "touchstart" === r.start && !!d.passiveListener && !!s.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        a[u](r.start, e.onTouchStart, c), a[u](r.move, e.onTouchMove, d.passiveListener ? {
                            passive: !1,
                            capture: p
                        } : p), a[u](r.end, e.onTouchEnd, c), r.cancel && a[u](r.cancel, e.onTouchEnd, c)
                    } else a[u](r.start, e.onTouchStart, !1), i[u](r.move, e.onTouchMove, p), i[u](r.end, e.onTouchEnd, !1);
                    (s.preventClicks || s.preventClicksPropagation) && a[u]("click", e.onClick, !0), s.cssMode && l[u]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", L, !0) : e[t]("observerUpdate", L, !0)
                },
                N = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var B = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let G = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r(...i) {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(s, i)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit(...e) {
                            let t = this;
                            if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
                            let i, s, r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), r = t) : (i = e[0].events, s = e[0].data, r = e[0].context || t), s.unshift(r);
                            let a = Array.isArray(i) ? i : i.split(" ");
                            return a.forEach(e => {
                                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(t => {
                                    t.apply(r, [e, ...s])
                                }), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(e => {
                                    e.apply(r, s)
                                })
                            }), t
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t, i = this.$el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, !(0 === e && this.isHorizontal() || 0 === t && this.isVertical()) && (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e = this;

                            function t(t) {
                                return e.isHorizontal() ? t : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[t]
                            }

                            function i(e, i) {
                                return parseFloat(e.getPropertyValue(t(i)) || 0)
                            }
                            let s = e.params,
                                {
                                    $wrapperEl: r,
                                    size: a,
                                    rtlTranslate: n,
                                    wrongRTL: l
                                } = e,
                                o = e.virtual && s.virtual.enabled,
                                d = o ? e.virtual.slides.length : e.slides.length,
                                p = r.children(`.${e.params.slideClass}`),
                                u = o ? e.virtual.slides.length : p.length,
                                c = [],
                                h = [],
                                f = [],
                                m = s.slidesOffsetBefore;
                            "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
                            let g = s.slidesOffsetAfter;
                            "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
                            let v = e.snapGrid.length,
                                b = e.slidesGrid.length,
                                w = s.spaceBetween,
                                C = -m,
                                S = 0,
                                T = 0;
                            if (void 0 === a) return;
                            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * a), e.virtualSize = -w, n ? p.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : p.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), s.centeredSlides && s.cssMode && (y(e.wrapperEl, "--swiper-centered-offset-before", ""), y(e.wrapperEl, "--swiper-centered-offset-after", ""));
                            let E = s.grid && s.grid.rows > 1 && e.grid;
                            E && e.grid.initSlides(u);
                            let x, M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                            for (let k = 0; k < u; k += 1) {
                                x = 0;
                                let P = p.eq(k);
                                if (E && e.grid.updateSlide(k, P, u, t), "none" !== P.css("display")) {
                                    if ("auto" === s.slidesPerView) {
                                        M && (p[k].style[t("width")] = "");
                                        let $ = getComputedStyle(P[0]),
                                            O = P[0].style.transform,
                                            L = P[0].style.webkitTransform;
                                        if (O && (P[0].style.transform = "none"), L && (P[0].style.webkitTransform = "none"), s.roundLengths) x = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                                        else {
                                            let _ = i($, "width"),
                                                z = i($, "padding-left"),
                                                A = i($, "padding-right"),
                                                D = i($, "margin-left"),
                                                I = i($, "margin-right"),
                                                N = $.getPropertyValue("box-sizing");
                                            if (N && "border-box" === N) x = _ + D + I;
                                            else {
                                                let {
                                                    clientWidth: B,
                                                    offsetWidth: G
                                                } = P[0];
                                                x = _ + z + A + D + I + (G - B)
                                            }
                                        }
                                        O && (P[0].style.transform = O), L && (P[0].style.webkitTransform = L), s.roundLengths && (x = Math.floor(x))
                                    } else x = (a - (s.slidesPerView - 1) * w) / s.slidesPerView, s.roundLengths && (x = Math.floor(x)), p[k] && (p[k].style[t("width")] = `${x}px`);
                                    p[k] && (p[k].swiperSlideSize = x), f.push(x), s.centeredSlides ? (C = C + x / 2 + S / 2 + w, 0 === S && 0 !== k && (C = C - a / 2 - w), 0 === k && (C = C - a / 2 - w), .001 > Math.abs(C) && (C = 0), s.roundLengths && (C = Math.floor(C)), T % s.slidesPerGroup == 0 && c.push(C), h.push(C)) : (s.roundLengths && (C = Math.floor(C)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && c.push(C), h.push(C), C = C + x + w), e.virtualSize += x + w, S = x, T += 1
                                }
                            }
                            if (e.virtualSize = Math.max(e.virtualSize, a) + g, n && l && ("slide" === s.effect || "coverflow" === s.effect) && r.css({
                                    width: `${e.virtualSize+s.spaceBetween}px`
                                }), s.setWrapperSize && r.css({
                                    [t("width")]: `${e.virtualSize+s.spaceBetween}px`
                                }), E && e.grid.updateWrapperSize(x, c, t), !s.centeredSlides) {
                                let j = [];
                                for (let F = 0; F < c.length; F += 1) {
                                    let H = c[F];
                                    s.roundLengths && (H = Math.floor(H)), c[F] <= e.virtualSize - a && j.push(H)
                                }
                                c = j, Math.floor(e.virtualSize - a) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - a)
                            }
                            if (0 === c.length && (c = [0]), 0 !== s.spaceBetween) {
                                let R = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                                p.filter((e, t) => !s.cssMode || t !== p.length - 1).css({
                                    [R]: `${w}px`
                                })
                            }
                            if (s.centeredSlides && s.centeredSlidesBounds) {
                                let V = 0;
                                f.forEach(e => {
                                    V += e + (s.spaceBetween ? s.spaceBetween : 0)
                                }), V -= s.spaceBetween;
                                let W = V - a;
                                c = c.map(e => e < 0 ? -m : e > W ? W + g : e)
                            }
                            if (s.centerInsufficientSlides) {
                                let q = 0;
                                if (f.forEach(e => {
                                        q += e + (s.spaceBetween ? s.spaceBetween : 0)
                                    }), (q -= s.spaceBetween) < a) {
                                    let X = (a - q) / 2;
                                    c.forEach((e, t) => {
                                        c[t] = e - X
                                    }), h.forEach((e, t) => {
                                        h[t] = e + X
                                    })
                                }
                            }
                            if (Object.assign(e, {
                                    slides: p,
                                    snapGrid: c,
                                    slidesGrid: h,
                                    slidesSizesGrid: f
                                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                                y(e.wrapperEl, "--swiper-centered-offset-before", `${-c[0]}px`), y(e.wrapperEl, "--swiper-centered-offset-after", `${e.size/2-f[f.length-1]/2}px`);
                                let Y = -e.snapGrid[0],
                                    U = -e.slidesGrid[0];
                                e.snapGrid = e.snapGrid.map(e => e + Y), e.slidesGrid = e.slidesGrid.map(e => e + U)
                            }
                            if (u !== d && e.emit("slidesLengthChange"), c.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !o && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                                let Z = `${s.containerModifierClass}backface-hidden`,
                                    K = e.$el.hasClass(Z);
                                u <= s.maxBackfaceHiddenSlides ? K || e.$el.addClass(Z) : K && e.$el.removeClass(Z)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t = this,
                                i = [],
                                s = t.virtual && t.params.virtual.enabled,
                                r = 0,
                                a;
                            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                            let n = e => s ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
                            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
                                if (t.params.centeredSlides)(t.visibleSlides || c([])).each(e => {
                                    i.push(e)
                                });
                                else
                                    for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                                        let l = t.activeIndex + a;
                                        if (l > t.slides.length && !s) break;
                                        i.push(n(l))
                                    }
                            } else i.push(n(t.activeIndex));
                            for (a = 0; a < i.length; a += 1)
                                if (void 0 !== i[a]) {
                                    let o = i[a].offsetHeight;
                                    r = o > r ? o : r
                                }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides;
                            for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this,
                                i = t.params,
                                {
                                    slides: s,
                                    rtlTranslate: r,
                                    snapGrid: a
                                } = t;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                            let n = -e;
                            r && (n = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let l = 0; l < s.length; l += 1) {
                                let o = s[l],
                                    d = o.swiperSlideOffset;
                                i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                                let p = (n + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
                                    u = (n - a[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
                                    h = -(n - d),
                                    f = h + t.slidesSizesGrid[l],
                                    m = h >= 0 && h < t.size - 1 || f > 1 && f <= t.size || h <= 0 && f >= t.size;
                                m && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(l), s.eq(l).addClass(i.slideVisibleClass)), o.progress = r ? -p : p, o.originalProgress = r ? -u : u
                            }
                            t.visibleSlides = c(t.visibleSlides)
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let i = this.params,
                                s = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: r,
                                    isBeginning: a,
                                    isEnd: n
                                } = this,
                                l = a,
                                o = n;
                            0 === s ? (r = 0, a = !0, n = !0) : (a = (r = (e - this.minTranslate()) / s) <= 0, n = r >= 1), Object.assign(this, {
                                progress: r,
                                isBeginning: a,
                                isEnd: n
                            }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), a && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !a || o && !n) && this.emit("fromEdge"), this.emit("progress", r)
                        },
                        updateSlidesClasses: function() {
                            let {
                                slides: e,
                                params: t,
                                $wrapperEl: i,
                                activeIndex: s,
                                realIndex: r
                            } = this, a = this.virtual && t.virtual.enabled;
                            e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);
                            let n;
                            (n = a ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s)).addClass(t.slideActiveClass), t.loop && (n.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(t.slideDuplicateActiveClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(t.slideDuplicateActiveClass));
                            let l = n.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
                            t.loop && 0 === l.length && (l = e.eq(0)).addClass(t.slideNextClass);
                            let o = n.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
                            t.loop && 0 === o.length && (o = e.eq(-1)).addClass(t.slidePrevClass), t.loop && (l.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass), o.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t = this,
                                i = t.rtlTranslate ? t.translate : -t.translate,
                                {
                                    slidesGrid: s,
                                    snapGrid: r,
                                    params: a,
                                    activeIndex: n,
                                    realIndex: l,
                                    snapIndex: o
                                } = t,
                                d = e,
                                p;
                            if (void 0 === d) {
                                for (let u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? d = u : i >= s[u] && i < s[u + 1] && (d = u + 1) : i >= s[u] && (d = u);
                                a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                            }
                            if (r.indexOf(i) >= 0) p = r.indexOf(i);
                            else {
                                let c = Math.min(a.slidesPerGroupSkip, d);
                                p = c + Math.floor((d - c) / a.slidesPerGroup)
                            }
                            if (p >= r.length && (p = r.length - 1), d === n) {
                                p !== o && (t.snapIndex = p, t.emit("snapIndexChange"));
                                return
                            }
                            let h = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                            Object.assign(t, {
                                snapIndex: p,
                                realIndex: h,
                                previousIndex: n,
                                activeIndex: d
                            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== h && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t = this,
                                i = t.params,
                                s = c(e).closest(`.${i.slideClass}`)[0],
                                r = !1,
                                a;
                            if (s) {
                                for (let n = 0; n < t.slides.length; n += 1)
                                    if (t.slides[n] === s) {
                                        r = !0, a = n;
                                        break
                                    }
                            }
                            if (s && r) t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(c(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a;
                            else {
                                t.clickedSlide = void 0, t.clickedIndex = void 0;
                                return
                            }
                            i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                $wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = function(e, t = "x") {
                                let i = o(),
                                    s, r, a, n = function(e) {
                                        let t = o(),
                                            i;
                                        return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
                                    }(e, null);
                                return i.WebKitCSSMatrix ? ((r = n.transform || n.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new i.WebKitCSSMatrix("none" === r ? "" : r)) : s = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = i.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (r = i.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), r || 0
                            }(r[0], e);
                            return i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let i = this,
                                {
                                    rtlTranslate: s,
                                    params: r,
                                    $wrapperEl: a,
                                    wrapperEl: n,
                                    progress: l
                                } = i,
                                o = 0,
                                d = 0;
                            i.isHorizontal() ? o = s ? -e : e : d = e, r.roundLengths && (o = Math.floor(o), d = Math.floor(d)), r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : r.virtualTranslate || a.transform(`translate3d(${o}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : d;
                            let p, u = i.maxTranslate() - i.minTranslate();
                            (0 === u ? 0 : (e - i.minTranslate()) / u) !== l && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                            let a = this,
                                {
                                    params: n,
                                    wrapperEl: l
                                } = a;
                            if (a.animating && n.preventInteractionOnTransition) return !1;
                            let o = a.minTranslate(),
                                d = a.maxTranslate(),
                                p;
                            if (p = s && e > o ? o : s && e < d ? d : e, a.updateProgress(p), n.cssMode) {
                                let u = a.isHorizontal();
                                if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -p;
                                else {
                                    if (!a.support.smoothScroll) return S({
                                        swiper: a,
                                        targetPosition: -p,
                                        side: u ? "left" : "top"
                                    }), !0;
                                    l.scrollTo({
                                        [u ? "left" : "top"]: -p,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (a.setTransition(0), a.setTranslate(p), i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                                a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"))
                            }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), k({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let i = this,
                                {
                                    params: s
                                } = i;
                            i.animating = !1, s.cssMode || (i.setTransition(0), k({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s, r) {
                            if ("number" != typeof e && "string" != typeof e) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                            if ("string" == typeof e) {
                                let a = parseInt(e, 10),
                                    n = isFinite(a);
                                if (!n) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = a
                            }
                            let l = this,
                                o = e;
                            o < 0 && (o = 0);
                            let {
                                params: d,
                                snapGrid: p,
                                slidesGrid: u,
                                previousIndex: c,
                                activeIndex: h,
                                rtlTranslate: f,
                                wrapperEl: m,
                                enabled: g
                            } = l;
                            if (l.animating && d.preventInteractionOnTransition || !g && !s && !r) return !1;
                            let v = Math.min(l.params.slidesPerGroupSkip, o),
                                b = v + Math.floor((o - v) / l.params.slidesPerGroup);
                            b >= p.length && (b = p.length - 1);
                            let w = -p[b];
                            if (d.normalizeSlideIndex)
                                for (let C = 0; C < u.length; C += 1) {
                                    let y = -Math.floor(100 * w),
                                        T = Math.floor(100 * u[C]),
                                        E = Math.floor(100 * u[C + 1]);
                                    void 0 !== u[C + 1] ? y >= T && y < E - (E - T) / 2 ? o = C : y >= T && y < E && (o = C + 1) : y >= T && (o = C)
                                }
                            if (l.initialized && o !== h && (!l.allowSlideNext && w < l.translate && w < l.minTranslate() || !l.allowSlidePrev && w > l.translate && w > l.maxTranslate() && (h || 0) !== o)) return !1;
                            o !== (c || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(w);
                            let x;
                            if (x = o > h ? "next" : o < h ? "prev" : "reset", f && -w === l.translate || !f && w === l.translate) return l.updateActiveIndex(o), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(w), "reset" !== x && (l.transitionStart(i, x), l.transitionEnd(i, x)), !1;
                            if (d.cssMode) {
                                let M = l.isHorizontal(),
                                    k = f ? w : -w;
                                if (0 === t) {
                                    let P = l.virtual && l.params.virtual.enabled;
                                    P && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), m[M ? "scrollLeft" : "scrollTop"] = k, P && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return S({
                                        swiper: l,
                                        targetPosition: k,
                                        side: M ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [M ? "left" : "top"]: k,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(w), l.updateActiveIndex(o), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, x), 0 === t ? l.transitionEnd(i, x) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, x))
                            }), l.$wrapperEl[0].addEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            if ("string" == typeof e) {
                                let r = parseInt(e, 10),
                                    a = isFinite(r);
                                if (!a) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = r
                            }
                            let n = e;
                            return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    animating: r,
                                    enabled: a,
                                    params: n
                                } = s;
                            if (!a) return s;
                            let l = n.slidesPerGroup;
                            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                            if (n.loop) {
                                if (r && n.loopPreventsSlide) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    params: r,
                                    animating: a,
                                    snapGrid: n,
                                    slidesGrid: l,
                                    rtlTranslate: o,
                                    enabled: d
                                } = s;
                            if (!d) return s;
                            if (r.loop) {
                                if (a && r.loopPreventsSlide) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            let p = o ? s.translate : -s.translate;

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let c = u(p),
                                h = n.map(e => u(e)),
                                f = n[h.indexOf(c) - 1];
                            if (void 0 === f && r.cssMode) {
                                let m;
                                n.forEach((e, t) => {
                                    c >= e && (m = t)
                                }), void 0 !== m && (f = n[m > 0 ? m - 1 : m])
                            }
                            let g = 0;
                            if (void 0 !== f && ((g = l.indexOf(f)) < 0 && (g = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let v = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(v, e, t, i)
                            }
                            return s.slideTo(g, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                n = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                l = this.rtlTranslate ? this.translate : -this.translate;
                            if (l >= this.snapGrid[n]) {
                                let o = this.snapGrid[n],
                                    d = this.snapGrid[n + 1];
                                l - o > (d - o) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let p = this.snapGrid[n - 1],
                                    u = this.snapGrid[n];
                                l - p <= (u - p) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e = this,
                                {
                                    params: t,
                                    $wrapperEl: i
                                } = e,
                                s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView,
                                r = e.clickedIndex,
                                a;
                            if (t.loop) {
                                if (e.animating) return;
                                a = parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g(() => {
                                    e.slideTo(r)
                                })) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g(() => {
                                    e.slideTo(r)
                                })) : e.slideTo(r)
                            } else e.slideTo(r)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let e = this,
                                t = n(),
                                {
                                    params: i,
                                    $wrapperEl: s
                                } = e,
                                r = s.children().length > 0 ? c(s.children()[0].parentNode) : s;
                            r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                            let a = r.children(`.${i.slideClass}`);
                            if (i.loopFillGroupWithBlank) {
                                let l = i.slidesPerGroup - a.length % i.slidesPerGroup;
                                if (l !== i.slidesPerGroup) {
                                    for (let o = 0; o < l; o += 1) {
                                        let d = c(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                        r.append(d)
                                    }
                                    a = r.children(`.${i.slideClass}`)
                                }
                            }
                            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                            let p = [],
                                u = [];
                            a.each((e, t) => {
                                let i = c(e);
                                i.attr("data-swiper-slide-index", t)
                            });
                            for (let h = 0; h < e.loopedSlides; h += 1) {
                                let f = h - Math.floor(h / a.length) * a.length;
                                u.push(a.eq(f)[0]), p.unshift(a.eq(a.length - f - 1)[0])
                            }
                            for (let m = 0; m < u.length; m += 1) r.append(c(u[m].cloneNode(!0)).addClass(i.slideDuplicateClass));
                            for (let g = p.length - 1; g >= 0; g -= 1) r.prepend(c(p[g].cloneNode(!0)).addClass(i.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let e = this;
                            e.emit("beforeLoopFix");
                            let {
                                activeIndex: t,
                                slides: i,
                                loopedSlides: s,
                                allowSlidePrev: r,
                                allowSlideNext: a,
                                snapGrid: n,
                                rtlTranslate: l
                            } = e, o;
                            e.allowSlidePrev = !0, e.allowSlideNext = !0;
                            let d = -n[t],
                                p = d - e.getTranslate();
                            if (t < s) {
                                o = i.length - 3 * s + t, o += s;
                                let u = e.slideTo(o, 0, !1, !0);
                                u && 0 !== p && e.setTranslate((l ? -e.translate : e.translate) - p)
                            } else if (t >= i.length - s) {
                                o = -i.length + t + s, o += s;
                                let c = e.slideTo(o, 0, !1, !0);
                                c && 0 !== p && e.setTranslate((l ? -e.translate : e.translate) - p)
                            }
                            e.allowSlidePrev = r, e.allowSlideNext = a, e.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: e,
                                params: t,
                                slides: i
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            !e.support.touch && (!e.params.watchOverflow || !e.isLocked) && !e.params.cssMode && (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = this,
                                t = n(),
                                {
                                    params: i,
                                    support: s
                                } = e;
                            e.onTouchStart = P.bind(e), e.onTouchMove = $.bind(e), e.onTouchEnd = O.bind(e), i.cssMode && (e.onScroll = z.bind(e)), e.onClick = _.bind(e), s.touch && !A && (t.addEventListener("touchstart", D), A = !0), I(e, "on")
                        },
                        detachEvents: function() {
                            I(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    activeIndex: t,
                                    initialized: i,
                                    loopedSlides: s = 0,
                                    params: r,
                                    $el: a
                                } = e,
                                n = r.breakpoints;
                            if (!n || n && 0 === Object.keys(n).length) return;
                            let l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let o = l in n ? n[l] : void 0,
                                d = o || e.originalParams,
                                p = N(e, r),
                                u = N(e, d),
                                c = r.enabled;
                            p && !u ? (a.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && u && (a.addClass(`${r.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === r.grid.fill) && a.addClass(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                let i = r[t] && r[t].enabled,
                                    s = d[t] && d[t].enabled;
                                i && !s && e[t].disable(), !i && s && e[t].enable()
                            });
                            let h = d.direction && d.direction !== r.direction,
                                f = r.loop && (d.slidesPerView !== r.slidesPerView || h);
                            h && i && e.changeDirection(), C(e.params, d);
                            let m = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), f && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t = "window", i) {
                            if (!e || "container" === t && !i) return;
                            let s = !1,
                                r = o(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                n = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let l = 0; l < n.length; l += 1) {
                                let {
                                    point: d,
                                    value: p
                                } = n[l];
                                "window" === t ? r.matchMedia(`(min-width: ${p}px)`).matches && (s = d) : p <= i.clientWidth && (s = d)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let e = this,
                                {
                                    isLocked: t,
                                    params: i
                                } = e,
                                {
                                    slidesOffsetBefore: s
                                } = i;
                            if (s) {
                                let r = e.slides.length - 1,
                                    a = e.slidesGrid[r] + e.slidesSizesGrid[r] + 2 * s;
                                e.isLocked = e.size > a
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                $el: s,
                                device: r,
                                support: a
                            } = this, n = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "pointer-events": !a.touch
                            }, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...n), s.addClass([...e].join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, i, s, r, a) {
                            let n = o(),
                                l;

                            function d() {
                                a && a()
                            }
                            let p = c(e).parent("picture")[0];
                            p || e.complete && r ? d() : t ? ((l = new n.Image).onload = d, l.onerror = d, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : d()
                        },
                        preloadImages: function() {
                            let e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                                let s = e.imagesToLoad[i];
                                e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                j = {};
            class F {
                constructor(...e) {
                    let t, i;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = C({}, i), t && !i.el && (i.el = t), i.el && c(i.el).length > 1) {
                        let s = [];
                        return c(i.el).each(e => {
                            let t = C({}, i, {
                                el: e
                            });
                            s.push(new F(t))
                        }), s
                    }
                    let r = this;
                    r.__swiper__ = !0, r.support = E(), r.device = function(e = {}) {
                        return x || (x = function({
                            userAgent: e
                        } = {}) {
                            let t = E(),
                                i = o(),
                                s = i.navigator.platform,
                                r = e || i.navigator.userAgent,
                                a = {
                                    ios: !1,
                                    android: !1
                                },
                                n = i.screen.width,
                                l = i.screen.height,
                                d = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                p = r.match(/(iPad).*OS\s([\d_]+)/),
                                u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                h = "MacIntel" === s;
                            return !p && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${l}`) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), h = !1), d && "Win32" !== s && (a.os = "android", a.android = !0), (p || c || u) && (a.os = "ios", a.ios = !0), a
                        }(e)), x
                    }({
                        userAgent: i.userAgent
                    }), r.browser = (M || (M = function() {
                        let e = o();
                        return {
                            isSafari: function() {
                                let t = e.navigator.userAgent.toLowerCase();
                                return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                            }(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), M), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
                    let a = {};
                    r.modules.forEach(e => {
                        var t, s;
                        e({
                            swiper: r,
                            extendParams: (t = i, function(e = {}) {
                                let i = Object.keys(e)[0],
                                    s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                        auto: !0
                                    }), !(i in t && "enabled" in s))) {
                                    C(a, e);
                                    return
                                }!0 === t[i] && (t[i] = {
                                    enabled: !0
                                }), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                                    enabled: !1
                                }), C(a, e)
                            }),
                            on: r.on.bind(r),
                            once: r.once.bind(r),
                            off: r.off.bind(r),
                            emit: r.emit.bind(r)
                        })
                    });
                    let n = C({}, B, a);
                    return r.params = C({}, n, j, i), r.originalParams = C({}, r.params), r.passedParams = C({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
                        r.on(e, r.params.on[e])
                    }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = c, Object.assign(r, {
                        enabled: r.params.enabled,
                        el: t,
                        classNames: [],
                        slides: c(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === r.params.direction,
                        isVertical: () => "vertical" === r.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: function() {
                            let e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return r.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, r.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: r.params.focusableElements,
                            lastClickTime: v(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.emit("_swiper"), r.params.init && r.init(), r
                }
                enable() {
                    let e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    let e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.each(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: n,
                        activeIndex: l
                    } = this, o = 1;
                    if (i.centeredSlides) {
                        let d = s[l].swiperSlideSize,
                            p;
                        for (let u = l + 1; u < s.length; u += 1) s[u] && !p && (d += s[u].swiperSlideSize, o += 1, d > n && (p = !0));
                        for (let c = l - 1; c >= 0; c -= 1) s[c] && !p && (d += s[c].swiperSlideSize, o += 1, d > n && (p = !0))
                    } else if ("current" === e)
                        for (let h = l + 1; h < s.length; h += 1) {
                            let f = t ? r[h] + a[h] - r[l] < n : r[h] - r[l] < n;
                            f && (o += 1)
                        } else
                            for (let m = l - 1; m >= 0; m -= 1) {
                                let g = r[l] - r[m] < n;
                                g && (o += 1)
                            }
                    return o
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: i
                    } = e;

                    function s() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
                    let r;
                    e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this,
                        s = i.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }
                changeLanguageDirection(e) {
                    let t = this;
                    (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = c(e || t.params.el);
                    if (!(e = i[0])) return !1;
                    e.swiper = t;
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                let t = c(e.shadowRoot.querySelector(s()));
                                return t.children = e => i.children(e), t
                            }
                            return i.children ? i.children(s()) : c(i).children(s())
                        })();
                    if (0 === r.length && t.params.createElements) {
                        let a = n(),
                            l = a.createElement("div");
                        r = c(l), l.className = t.params.wrapperClass, i.append(l), i.children(`.${t.params.slideClass}`).each(e => {
                            r.append(e)
                        })
                    }
                    return Object.assign(t, {
                        $el: i,
                        el: e,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            $el: r,
                            $wrapperEl: a,
                            slides: n
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, function(e) {
                        let t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null
                            } catch (i) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    C(j, e)
                }
                static get extendedDefaults() {
                    return j
                }
                static get defaults() {
                    return B
                }
                static installModule(e) {
                    F.prototype.__modules__ || (F.prototype.__modules__ = []);
                    let t = F.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => F.installModule(e)), F) : (F.installModule(e), F)
                }
            }
            Object.keys(G).forEach(e => {
                Object.keys(G[e]).forEach(t => {
                    F.prototype[t] = G[e][t]
                })
            }), F.use([function({
                swiper: e,
                on: t,
                emit: i
            }) {
                let s = o(),
                    r = null,
                    a = null,
                    n = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
                    },
                    l = () => {
                        e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                            a = s.requestAnimationFrame(() => {
                                let {
                                    width: i,
                                    height: s
                                } = e, r = i, a = s;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: i,
                                    target: s
                                }) => {
                                    s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, a = i ? i.height : (t[0] || t).blockSize)
                                }), (r !== i || a !== s) && n()
                            })
                        })).observe(e.el)
                    },
                    d = () => {
                        a && s.cancelAnimationFrame(a), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
                    },
                    p = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        l();
                        return
                    }
                    s.addEventListener("resize", n), s.addEventListener("orientationchange", p)
                }), t("destroy", () => {
                    d(), s.removeEventListener("resize", n), s.removeEventListener("orientationchange", p)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = [],
                    a = o(),
                    n = (e, t = {}) => {
                        let i = a.MutationObserver || a.WebkitMutationObserver,
                            n = new i(e => {
                                if (1 === e.length) {
                                    s("observerUpdate", e[0]);
                                    return
                                }
                                let t = function() {
                                    s("observerUpdate", e[0])
                                };
                                a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                            });
                        n.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), r.push(n)
                    },
                    l = () => {
                        if (e.params.observer) {
                            if (e.params.observeParents) {
                                let t = e.$el.parents();
                                for (let i = 0; i < t.length; i += 1) n(t[i])
                            }
                            n(e.$el[0], {
                                childList: e.params.observeSlideChildren
                            }), n(e.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    d = () => {
                        r.forEach(e => {
                            e.disconnect()
                        }), r.splice(0, r.length)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", l), i("destroy", d)
            }]);
            var H = F;

            function R(e, t, i, s) {
                let r = n();
                return e.params.createElements && Object.keys(s).forEach(a => {
                    if (!i[a] && !0 === i.auto) {
                        let n = e.$el.children(`.${s[a]}`)[0];
                        n || ((n = r.createElement("div")).className = s[a], e.$el.append(n)), i[a] = n, t[a] = n
                    }
                }), i
            }

            function V({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                function r(t) {
                    let i;
                    return t && (i = c(t), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))), i
                }

                function a(t, i) {
                    let s = e.params.navigation;
                    t && t.length > 0 && (t[i ? "addClass" : "removeClass"](s.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
                }

                function n() {
                    if (e.params.loop) return;
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    a(i, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
                }

                function l(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
                }

                function o(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
                }

                function d() {
                    let t = e.params.navigation;
                    if (e.params.navigation = R(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(t.nextEl || t.prevEl)) return;
                    let i = r(t.nextEl),
                        s = r(t.prevEl);
                    i && i.length > 0 && i.on("click", o), s && s.length > 0 && s.on("click", l), Object.assign(e.navigation, {
                        $nextEl: i,
                        nextEl: i && i[0],
                        $prevEl: s,
                        prevEl: s && s[0]
                    }), !e.enabled && (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass))
                }

                function p() {
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(e.params.navigation.disabledClass))
                }
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, i("init", () => {
                    !1 === e.params.navigation.enabled ? h() : (d(), n())
                }), i("toEdge fromEdge lock unlock", () => {
                    n()
                }), i("destroy", () => {
                    p()
                }), i("enable disable", () => {
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                }), i("click", (t, i) => {
                    let {
                        $nextEl: r,
                        $prevEl: a
                    } = e.navigation, n = i.target;
                    if (e.params.navigation.hideOnClick && !c(n).is(a) && !c(n).is(r)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                        let l;
                        r ? l = r.hasClass(e.params.navigation.hiddenClass) : a && (l = a.hasClass(e.params.navigation.hiddenClass)), !0 === l ? s("navigationShow") : s("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
                    }
                });
                let u = () => {
                        e.$el.removeClass(e.params.navigation.navigationDisabledClass), d(), n()
                    },
                    h = () => {
                        e.$el.addClass(e.params.navigation.navigationDisabledClass), p()
                    };
                Object.assign(e.navigation, {
                    enable: u,
                    disable: h,
                    update: n,
                    init: d,
                    destroy: p
                })
            }

            function W(e = "") {
                return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function q({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = "swiper-pagination";
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${r}-bullet`,
                        bulletActiveClass: `${r}-bullet-active`,
                        modifierClass: `${r}-`,
                        currentClass: `${r}-current`,
                        totalClass: `${r}-total`,
                        hiddenClass: `${r}-hidden`,
                        progressbarFillClass: `${r}-progressbar-fill`,
                        progressbarOppositeClass: `${r}-progressbar-opposite`,
                        clickableClass: `${r}-clickable`,
                        lockClass: `${r}-lock`,
                        horizontalClass: `${r}-horizontal`,
                        verticalClass: `${r}-vertical`,
                        paginationDisabledClass: `${r}-disabled`
                    }
                }), e.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let a, n = 0;

                function l() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
                }

                function o(t, i) {
                    let {
                        bulletActiveClass: s
                    } = e.params.pagination;
                    t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
                }

                function d() {
                    let t = e.rtl,
                        i = e.params.pagination;
                    if (l()) return;
                    let r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        d = e.pagination.$el,
                        p, u = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e.loopedSlides && (p -= r - 2 * e.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== e.params.paginationType && (p = u + p)) : p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        let h = e.pagination.bullets,
                            f, m, g;
                        if (i.dynamicBullets && (a = h.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(e.isHorizontal() ? "width" : "height", `${a*(i.dynamicMainBullets+4)}px`), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((n += p - (e.previousIndex - e.loopedSlides || 0)) > i.dynamicMainBullets - 1 ? n = i.dynamicMainBullets - 1 : n < 0 && (n = 0)), g = ((m = (f = Math.max(p - n, 0)) + (Math.min(h.length, i.dynamicMainBullets) - 1)) + f) / 2), h.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${i.bulletActiveClass}${e}`).join(" ")), d.length > 1) h.each(e => {
                            let t = c(e),
                                s = t.index();
                            s === p && t.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= f && s <= m && t.addClass(`${i.bulletActiveClass}-main`), s === f && o(t, "prev"), s === m && o(t, "next"))
                        });
                        else {
                            let v = h.eq(p),
                                b = v.index();
                            if (v.addClass(i.bulletActiveClass), i.dynamicBullets) {
                                let w = h.eq(f),
                                    C = h.eq(m);
                                for (let y = f; y <= m; y += 1) h.eq(y).addClass(`${i.bulletActiveClass}-main`);
                                if (e.params.loop) {
                                    if (b >= h.length) {
                                        for (let S = i.dynamicMainBullets; S >= 0; S -= 1) h.eq(h.length - S).addClass(`${i.bulletActiveClass}-main`);
                                        h.eq(h.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                                    } else o(w, "prev"), o(C, "next")
                                } else o(w, "prev"), o(C, "next")
                            }
                        }
                        if (i.dynamicBullets) {
                            let T = Math.min(h.length, i.dynamicMainBullets + 4),
                                E = (a * T - a) / 2 - g * a;
                            h.css(e.isHorizontal() ? t ? "right" : "left" : "top", `${E}px`)
                        }
                    }
                    if ("fraction" === i.type && (d.find(W(i.currentClass)).text(i.formatFractionCurrent(p + 1)), d.find(W(i.totalClass)).text(i.formatFractionTotal(u))), "progressbar" === i.type) {
                        let x;
                        x = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        let M = (p + 1) / u,
                            k = 1,
                            P = 1;
                        "horizontal" === x ? k = M : P = M, d.find(W(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${P})`).transition(e.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (d.html(i.renderCustom(e, p + 1, u)), s("paginationRender", d[0])) : s("paginationUpdate", d[0]), e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }

                function p() {
                    let t = e.params.pagination;
                    if (l()) return;
                    let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        a = "";
                    if ("bullets" === t.type) {
                        let n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && n > i && (n = i);
                        for (let o = 0; o < n; o += 1) t.renderBullet ? a += t.renderBullet.call(e, o, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        r.html(a), e.pagination.bullets = r.find(W(t.bulletClass))
                    }
                    "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, r.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, r.html(a)), "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
                }

                function u() {
                    e.params.pagination = R(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let t = e.params.pagination;
                    if (!t.el) return;
                    let i = c(t.el);
                    0 === i.length || (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)).length > 1 && (i = i.filter(t => c(t).parents(".swiper")[0] === e.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", W(t.bulletClass), function(t) {
                        t.preventDefault();
                        let i = c(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), Object.assign(e.pagination, {
                        $el: i,
                        el: i[0]
                    }), e.enabled || i.addClass(t.lockClass))
                }

                function h() {
                    let t = e.params.pagination;
                    if (l()) return;
                    let i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", W(t.bulletClass))
                }
                i("init", () => {
                    !1 === e.params.pagination.enabled ? m() : (u(), p(), d())
                }), i("activeIndexChange", () => {
                    e.params.loop ? d() : void 0 === e.snapIndex && d()
                }), i("snapIndexChange", () => {
                    e.params.loop || d()
                }), i("slidesLengthChange", () => {
                    e.params.loop && (p(), d())
                }), i("snapGridLengthChange", () => {
                    e.params.loop || (p(), d())
                }), i("destroy", () => {
                    h()
                }), i("enable disable", () => {
                    let {
                        $el: t
                    } = e.pagination;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                }), i("lock unlock", () => {
                    d()
                }), i("click", (t, i) => {
                    let r = i.target,
                        {
                            $el: a
                        } = e.pagination;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !c(r).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && r === e.navigation.nextEl || e.navigation.prevEl && r === e.navigation.prevEl)) return;
                        let n = a.hasClass(e.params.pagination.hiddenClass);
                        !0 === n ? s("paginationShow") : s("paginationHide"), a.toggleClass(e.params.pagination.hiddenClass)
                    }
                });
                let f = () => {
                        e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), u(), p(), d()
                    },
                    m = () => {
                        e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), h()
                    };
                Object.assign(e.pagination, {
                    enable: f,
                    disable: m,
                    render: p,
                    update: d,
                    init: u,
                    destroy: h
                })
            }

            function X({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r;

                function a() {
                    if (!e.size) {
                        e.autoplay.running = !1, e.autoplay.paused = !1;
                        return
                    }
                    let t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = g(() => {
                        let t;
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), s("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), s("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), s("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), s("autoplay")), e.params.cssMode && e.autoplay.running ? a() : !1 === t && a()
                    }, i)
                }

                function l() {
                    return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, s("autoplayStart"), a(), !0)
                }

                function o() {
                    return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, s("autoplayStop"), !0)
                }

                function d(t) {
                    e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].addEventListener(t, u)
                    }) : (e.autoplay.paused = !1, a())))
                }

                function p() {
                    let t = n();
                    "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (a(), e.autoplay.paused = !1)
                }

                function u(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].removeEventListener(t, u)
                    }), e.autoplay.paused = !1, e.autoplay.running ? a() : o())
                }

                function c() {
                    e.params.autoplay.disableOnInteraction ? o() : (s("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].removeEventListener(t, u)
                    })
                }

                function h() {
                    !e.params.autoplay.disableOnInteraction && (e.autoplay.paused = !1, s("autoplayResume"), a())
                }
                e.autoplay = {
                    running: !1,
                    paused: !1
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), i("init", () => {
                    if (e.params.autoplay.enabled) {
                        l();
                        let t = n();
                        t.addEventListener("visibilitychange", p), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", c), e.$el.on("mouseleave", h))
                    }
                }), i("beforeTransitionStart", (t, i, s) => {
                    e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(i) : o())
                }), i("sliderFirstMove", () => {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
                }), i("touchEnd", () => {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && a()
                }), i("destroy", () => {
                    e.$el.off("mouseenter", c), e.$el.off("mouseleave", h), e.autoplay.running && o();
                    let t = n();
                    t.removeEventListener("visibilitychange", p)
                }), Object.assign(e.autoplay, {
                    pause: d,
                    run: a,
                    start: l,
                    stop: o
                })
            }

            function Y({
                swiper: e,
                extendParams: t
            }) {
                t({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                });
                let i, s, r, a = t => {
                        let {
                            slidesPerView: a
                        } = e.params, {
                            rows: n,
                            fill: l
                        } = e.params.grid;
                        s = i / n, r = Math.floor(t / n), i = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n, "auto" !== a && "row" === l && (i = Math.max(i, a * n))
                    },
                    n = (t, a, n, l) => {
                        let {
                            slidesPerGroup: o,
                            spaceBetween: d
                        } = e.params, {
                            rows: p,
                            fill: u
                        } = e.params.grid, c, h, f;
                        if ("row" === u && o > 1) {
                            let m = Math.floor(t / (o * p)),
                                g = t - p * o * m,
                                v = 0 === m ? o : Math.min(Math.ceil((n - m * p * o) / p), o);
                            f = Math.floor(g / v), c = (h = g - f * v + m * o) + f * i / p, a.css({
                                "-webkit-order": c,
                                order: c
                            })
                        } else "column" === u ? (h = Math.floor(t / p), f = t - h * p, (h > r || h === r && f === p - 1) && (f += 1) >= p && (f = 0, h += 1)) : (f = Math.floor(t / s), h = t - f * s);
                        a.css(l("margin-top"), 0 !== f ? d && `${d}px` : "")
                    },
                    l = (t, s, r) => {
                        let {
                            spaceBetween: a,
                            centeredSlides: n,
                            roundLengths: l
                        } = e.params, {
                            rows: o
                        } = e.params.grid;
                        if (e.virtualSize = (t + a) * i, e.virtualSize = Math.ceil(e.virtualSize / o) - a, e.$wrapperEl.css({
                                [r("width")]: `${e.virtualSize+a}px`
                            }), n) {
                            s.splice(0, s.length);
                            let d = [];
                            for (let p = 0; p < s.length; p += 1) {
                                let u = s[p];
                                l && (u = Math.floor(u)), s[p] < e.virtualSize + s[0] && d.push(u)
                            }
                            s.push(...d)
                        }
                    };
                e.grid = {
                    initSlides: a,
                    updateSlide: n,
                    updateWrapperSize: l
                }
            }

            function U(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function Z({
                swiper: e,
                extendParams: t,
                on: i
            }) {
                t({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                });
                let s = () => {
                        let {
                            slides: t
                        } = e, i = e.params.fadeEffect;
                        for (let s = 0; s < t.length; s += 1) {
                            let r = e.slides.eq(s),
                                a = r[0].swiperSlideOffset,
                                n = -a;
                            e.params.virtualTranslate || (n -= e.translate);
                            let l = 0;
                            e.isHorizontal() || (l = n, n = 0);
                            let o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0),
                                d = U(i, r);
                            d.css({
                                opacity: o
                            }).transform(`translate3d(${n}px, ${l}px, 0px)`)
                        }
                    },
                    r = t => {
                        let {
                            transformEl: i
                        } = e.params.fadeEffect, s = i ? e.slides.find(i) : e.slides;
                        s.transition(t),
                            function({
                                swiper: e,
                                duration: t,
                                transformEl: i,
                                allSlides: s
                            }) {
                                let {
                                    slides: r,
                                    activeIndex: a,
                                    $wrapperEl: n
                                } = e;
                                if (e.params.virtualTranslate && 0 !== t) {
                                    let l = !1,
                                        o;
                                    (s ? i ? r.find(i) : r : i ? r.eq(a).find(i) : r.eq(a)).transitionEnd(() => {
                                        if (l || !e || e.destroyed) return;
                                        l = !0, e.animating = !1;
                                        let t = ["webkitTransitionEnd", "transitionend"];
                                        for (let i = 0; i < t.length; i += 1) n.trigger(t[i])
                                    })
                                }
                            }({
                                swiper: e,
                                duration: t,
                                transformEl: i,
                                allSlides: !0
                            })
                    };
                ! function(e) {
                    let {
                        effect: t,
                        swiper: i,
                        on: s,
                        setTranslate: r,
                        setTransition: a,
                        overwriteParams: n,
                        perspective: l,
                        recreateShadows: o,
                        getEffectParams: d
                    } = e;
                    s("beforeInit", () => {
                        if (i.params.effect !== t) return;
                        i.classNames.push(`${i.params.containerModifierClass}${t}`), l && l() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                        let e = n ? n() : {};
                        Object.assign(i.params, e), Object.assign(i.originalParams, e)
                    }), s("setTranslate", () => {
                        i.params.effect === t && r()
                    }), s("setTransition", (e, s) => {
                        i.params.effect === t && a(s)
                    }), s("transitionEnd", () => {
                        i.params.effect === t && o && d && d().slideShadows && (i.slides.each(e => {
                            let t = i.$(e);
                            t.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                        }), o())
                    });
                    let p;
                    s("virtualUpdate", () => {
                        i.params.effect === t && (i.slides.length || (p = !0), requestAnimationFrame(() => {
                            p && i.slides && i.slides.length && (r(), p = !1)
                        }))
                    })
                }({
                    effect: "fade",
                    swiper: e,
                    on: i,
                    setTranslate: s,
                    setTransition: r,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }
        }
    }
]);