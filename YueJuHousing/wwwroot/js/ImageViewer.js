import { H as ae, V as ve, be as ke, d as Q, a as D, a1 as he, m as s, o, q as N, D as j, y as we, _ as U, c, k as e, G as S, I as b, J as Z, K as J, u as ge, l as w, v as I, b0 as et, A as G, az as $e, F as B, C as M, r as T, e as gt, T as E, B as te, av as He, h as Ce, a4 as Pe, aX as yt, U as ye, x as pe, a3 as be, aZ as Oe, b4 as tt, at as bt, Y as Xe, aV as ze, aE as Ht, aT as De, ay as me, a9 as _t, ax as At, a8 as It, b2 as $t, b3 as Ot, aM as Kt, a2 as wt, P as de, O as Me, W as Gt, b as Wt, bf as Ie, bg as xt, R as Je, aU as Ct, aA as Le, i as Yt, p as Fe, t as jt, E as fe, ao as Zt, ab as Dt, aH as Jt, Q as mt, N as Xt, bh as en, bi as tn, aW as nn } from "./DNoUG73g.js";
import { f as on, a as qe, S as nt, _ as Ke, d as sn, c as an, h as Et, G as ot, i as ln } from "./B4uPryFG.js";
import { i as cn, e as Ge, j as St, h as We, k as st, m as Bt, n as Tt, o as rn, p as dn, q as ft } from "./CQ9ya2IK.js";
import { b as un, a as Mt } from "./BsmBsmih.js";
import { w as Vt, q as xe, k as Ee, x as pn, s as Ne, v as _n, o as Ve, d as mn } from "./bwah8Zat.js";
import { _ as Re } from "./rd2eVD_k.js";
import "./C2QTGVcP.js";
import { a as fn } from "./Bl1A4UZq.js";
import { c as hn, P as vn } from "./Cig04ctF.js";
function kn(t) {
    var i, _, m, a, l, r, u, v;
    const n = {
        id: (i = t.basicData) == null ? void 0 : i.id,
        type: ((_ = t.basicData) == null ? void 0 : _.type) || 1,
        kind: ((m = t.basicData) == null ? void 0 : m.kind) || 6,
        kindStr: (a = t.basicData) == null ? void 0 : a.kindStr,
        regionName: (l = t.basicData) == null ? void 0 : l.region,
        region: (r = t.basicData) == null ? void 0 : r.regionId,
        sectionName: (u = t.basicData) == null ? void 0 : u.section,
        section: (v = t.basicData) == null ? void 0 : v.sectionId
    };
    return [{
        name: "首頁",
        link: ae.www
    }, {
        name: n.type === 1 ? "租土地" : "買土地",
        link: `${ae.land}/list?${ve(ke(n, ["type", "kind"]))}`
    }, {
        name: n.regionName,
        link: `${ae.land}/list?${ve(ke(n, ["type", "kind", "region"]))}`
    }, {
        name: n.sectionName,
        link: `${ae.land}/list?${ve(ke(n, ["type", "kind", "region", "section"]))}`
    }, {
        name: `${Vt[n.type || 1]}${n.id}`,
        link: "",
        style: "font-weight: bold;"
    }]
}
const gn = t => {
    var _;
    const n = ((_ = t.data.basicData) == null ? void 0 : _.kind) === 11 ? kn(t.data) : yn(t.data)
        , i = bn(t.data);
    return t.data.transformData = {
        breadCrumb: n,
        browse: i
    },
        t
}
    ;
function yn(t) {
    var i, _, m, a, l, r, u, v;
    const n = {
        id: (i = t.basicData) == null ? void 0 : i.id,
        type: ((_ = t.basicData) == null ? void 0 : _.type) || 1,
        kind: ((m = t.basicData) == null ? void 0 : m.kind) || 6,
        kindStr: (a = t.basicData) == null ? void 0 : a.kindStr,
        regionName: (l = t.basicData) == null ? void 0 : l.region,
        region: (r = t.basicData) == null ? void 0 : r.regionId,
        sectionName: (u = t.basicData) == null ? void 0 : u.section,
        section: (v = t.basicData) == null ? void 0 : v.sectionId
    };
    return [{
        name: n.type === 1 ? "租屋" : "中古屋",
        link: `${ae.business}/list?${ve(ke(n, ["type", "kind"]))}`
    }, {
        name: n.regionName,
        link: `${ae.business}/list?${ve(ke(n, ["type", "kind", "region"]))}`
    }, {
        name: n.sectionName,
        link: `${ae.business}/list?${ve(ke(n, ["type", "kind", "region", "section"]))}`
    }, {
        name: n.kindStr,
        link: `${ae.business}/list?${ve(ke(n, ["type", "kind", "region", "section"]))}`
    }, {
        name: `${Vt[n.type || 1]}${n.id}`,
        link: "",
        style: "font-weight: bold;"
    }]
}
function bn(t) {
    var _, m, a, l, r, u, v, d;
    const n = +((m = (_ = t.otherInfo) == null ? void 0 : _.browseView) == null ? void 0 : m.pc) || 0
        , i = +((l = (a = t.otherInfo) == null ? void 0 : a.browseView) == null ? void 0 : l.ios) + +((u = (r = t.otherInfo) == null ? void 0 : r.browseView) == null ? void 0 : u.android) + +((d = (v = t.otherInfo) == null ? void 0 : v.browseView) == null ? void 0 : d.touch) || 0;
    return {
        pc: n,
        mobile: i
    }
}
const An = we(on)
    , In = Q({
        __name: "Union.client",
        props: {
            position: {},
            type: {},
            kind: {}
        },
        setup(t) {
            const n = t
                , i = D(() => _(+n.type, +n.kind)[n.position] || 0);
            function _(m, a) {
                const l = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    middle: 0
                }
                    , { isMobile: r } = he();
                return m === 1 ? (l.top = 25,
                    l.bottom = 26) : m === 2 && (l.top = 20,
                        l.bottom = 21,
                        l.middle = r ? 99 : 0),
                    a === 6 ? l.right = 48 : a === 5 && (l.right = 46),
                    l
            }
            return (m, a) => {
                const l = An;
                return m.position === "middle" && s(i) ? (o(),
                    N(l, {
                        key: 0,
                        id: s(i),
                        class: "mobile-union-banner-middle"
                    }, null, 8, ["id"])) : (o(),
                        N(l, {
                            key: 1,
                            id: s(i),
                            class: j(["detail-union-banner", [m.position]])
                        }, null, 8, ["id", "class"]))
            }
        }
    })
    , Zu = U(In, [["__scopeId", "data-v-654f1ff0"]])
    , at = t => (Z("data-v-2b9b974f"),
        t = t(),
        J(),
        t)
    , $n = {
        class: "browse"
    }
    , wn = {
        class: "total"
    }
    , Cn = at(() => e("i", {
        class: "ic-house house-eye color-b3"
    }, null, -1))
    , Dn = {
        class: "mobile"
    }
    , En = at(() => e("i", {
        class: "ic-house house-phone color-ccc"
    }, null, -1))
    , Sn = {
        class: "pc"
    }
    , Bn = at(() => e("i", {
        class: "ic-house house-computer color-ccc"
    }, null, -1))
    , Tn = Q({
        __name: "BrowseCount",
        props: {
            data: {}
        },
        setup(t) {
            return (n, i) => {
                var _, m, a, l;
                return o(),
                    c("div", $n, [e("span", wn, [Cn, S(b(((_ = n.data) == null ? void 0 : _.mobile) + ((m = n.data) == null ? void 0 : m.pc)), 1)]), e("span", Dn, [En, S(b((a = n.data) == null ? void 0 : a.mobile), 1)]), e("span", Sn, [Bn, S(b((l = n.data) == null ? void 0 : l.pc), 1)])])
            }
        }
    })
    , Mn = U(Tn, [["__scopeId", "data-v-2b9b974f"]])
    , Vn = we(Ge)
    , Ln = {
        class: "crumb-container"
    }
    , zn = {
        class: "right-area"
    }
    , Nn = {
        key: 0,
        class: "end-time"
    }
    , Rn = Q({
        __name: "CrumbNav",
        props: {
            basicData: {},
            otherInfo: {},
            baseInfo: {},
            crumbData: {},
            browseData: {}
        },
        setup(t) {
            var a, l, r, u, v, d, p, f, g;
            const n = t
                , i = ge()
                , _ = un()
                , m = {
                    area: +((l = (a = n.otherInfo) == null ? void 0 : a.favInfo) == null ? void 0 : l.area),
                    groundType: (r = n.baseInfo) == null ? void 0 : r.groundType,
                    price: (v = (u = n.baseInfo) == null ? void 0 : u.price) == null ? void 0 : v.value,
                    sectionId: (d = n.basicData) == null ? void 0 : d.sectionId,
                    regionId: (p = n.basicData) == null ? void 0 : p.regionId,
                    kind: (f = n.basicData) == null ? void 0 : f.kind,
                    type: (g = n.basicData) == null ? void 0 : g.type
                };
            return (y, h) => {
                var C, L, P, Y, R;
                const k = cn
                    , A = Mn
                    , $ = Vn;
                return o(),
                    c("section", Ln, [w(k, {
                        data: y.crumbData
                    }, null, 8, ["data"]), e("div", zn, [y.baseInfo.endTime ? (o(),
                        c("div", Nn, " 有效期：" + b(y.baseInfo.endTime), 1)) : I("", !0), w(A, {
                            data: y.browseData
                        }, null, 8, ["data"]), w($, {
                            id: +((C = s(i).params) == null ? void 0 : C.id),
                            "share-count": ((P = (L = y.otherInfo) == null ? void 0 : L.behaviorData) == null ? void 0 : P.share) ?? 0,
                            "collect-count": ((R = (Y = y.otherInfo) == null ? void 0 : Y.behaviorData) == null ? void 0 : R.fav) ?? 0,
                            type: s(_),
                            "visible-print": !1,
                            theme: {
                                color: "#5a5a5a"
                            },
                            "subscribe-data": m
                        }, null, 8, ["id", "share-count", "collect-count", "type"])])])
            }
        }
    })
    , Ju = U(Rn, [["__scopeId", "data-v-b48d855f"]])
    , Qn = t => (Z("data-v-00ce289d"),
        t = t(),
        J(),
        t)
    , Un = {
        class: "contact"
    }
    , Pn = {
        class: "contact-avatar"
    }
    , Fn = ["src", "alt"]
    , qn = {
        class: "contact-info"
    }
    , Hn = {
        class: "base-info-pc"
    }
    , On = {
        class: "name"
    }
    , Kn = {
        key: 0,
        class: "is-recmoney"
    }
    , Gn = {
        key: 1
    }
    , Wn = {
        key: 2,
        class: "is-online"
    }
    , xn = {
        class: "base-info-mobile"
    }
    , Yn = Qn(() => e("em", null, null, -1))
    , jn = {
        class: "econ-text"
    }
    , Zn = {
        class: "company-info"
    }
    , Jn = {
        key: 0
    }
    , Xn = Q({
        __name: "ContactInfoCondition",
        props: {
            linkInfo: {},
            isOnline: {
                type: Boolean
            },
            kindStr: {}
        },
        setup(t) {
            var v;
            const n = t
                , { isMobile: i } = he()
                , { error: _ } = et({
                    src: (v = n.linkInfo) == null ? void 0 : v.avatar
                })
                , m = D(() => {
                    var d;
                    return _.value ? xe : (d = n.linkInfo) == null ? void 0 : d.avatar
                }
                )
                , a = D(() => {
                    var d, p;
                    return (d = n.linkInfo) != null && d.shop_id ? `${ae.www}/broker${(p = n.linkInfo) == null ? void 0 : p.shop_id}` : "javascript:;"
                }
                )
                , l = D(() => +n.linkInfo.role == 3)
                , r = D(() => i ? "click" : "hover")
                , u = D(() => {
                    var p;
                    const d = {
                        content: ((p = n.linkInfo) == null ? void 0 : p.approveStatus) === 1 ? "已認證" : "未認證",
                        trigger: r.value,
                        placement: "top"
                    };
                    return i ? null : d
                }
                );
            return (d, p) => {
                var y, h, k, A, $, C, L, P, Y, R, ne, x, ie, le, H;
                const f = St
                    , g = G("t5-tracker-click");
                return o(),
                    c("section", Un, [e("div", Pn, [e("img", {
                        src: s(m),
                        alt: `${(y = d.linkInfo) == null ? void 0 : y.identity}頭像`
                    }, null, 8, Fn)]), e("div", qn, [e("p", Hn, [e("span", On, [e("em", null, b((h = d.linkInfo) == null ? void 0 : h.identity) + ":", 1), S(" " + b(s($e)((k = d.linkInfo) == null ? void 0 : k.linkman, 3)), 1)]), s(l) ? (o(),
                        c(B, {
                            key: 0
                        }, [((A = d.linkInfo) == null ? void 0 : A.isServiceFee) === 1 ? (o(),
                            c("span", Kn, "(" + b(($ = d.linkInfo) == null ? void 0 : $.isrecmoney) + ")", 1)) : I("", !0), w(f, {
                                type: "profession",
                                "is-active": ((C = d.linkInfo) == null ? void 0 : C.approveStatus) === 1,
                                "tooltip-config": s(u),
                                style: {
                                    marginLeft: "2px"
                                }
                            }, null, 8, ["is-active", "tooltip-config"]), M(w(f, {
                                class: "shop",
                                type: "shop",
                                tag: "a",
                                href: s(a),
                                target: "_blank",
                                "is-active": ((L = d.linkInfo) == null ? void 0 : L.shop_open) === 1,
                                style: {
                                    marginLeft: "2px"
                                },
                                title: "店鋪"
                            }, null, 8, ["href", "is-active"]), [[g, `${d.kindStr ?? "屋況"}介紹_店鋪ICON`]])], 64)) : I("", !0), d.linkInfo.role === 1 && ((P = d.linkInfo) != null && P.warnmsg) ? (o(),
                                c("span", Gn, "(仲介勿擾)")) : I("", !0), d.isOnline ? (o(),
                                    c("span", Wn, "當前在線")) : I("", !0)]), e("div", xn, [e("p", null, [e("span", null, b((Y = d.linkInfo) == null ? void 0 : Y.identity), 1), ((R = d.linkInfo) == null ? void 0 : R.isServiceFee) === 1 ? (o(),
                                        c(B, {
                                            key: 0
                                        }, [Yn, e("span", null, b((ne = d.linkInfo) == null ? void 0 : ne.isrecmoney), 1)], 64)) : I("", !0)]), e("p", jn, b(!d.linkInfo.hidCompany && d.linkInfo.companyname || ((x = d.linkInfo) == null ? void 0 : x.econName)), 1)]), e("div", Zn, [e("p", null, [(ie = d.linkInfo) != null && ie.experience_time && s(l) ? (o(),
                                            c("span", Jn, b((le = d.linkInfo) == null ? void 0 : le.experience_time) + ", ", 1)) : I("", !0), S(" " + b((H = d.linkInfo) == null ? void 0 : H.join_time), 1)])])])])
            }
        }
    })
    , Lt = U(Xn, [["__scopeId", "data-v-00ce289d"]])
    , eo = we(Ge)
    , zt = t => (Z("data-v-c1822c2b"),
        t = t(),
        J(),
        t)
    , to = {
        class: "album-container-touch"
    }
    , no = {
        key: 0,
        class: "video-player"
    }
    , oo = {
        class: "req-btn"
    }
    , so = {
        class: "desc"
    }
    , ao = zt(() => e("div", null, [S(" 立即向他索取"), e("i", {
        class: "ic-house house-arrow-left"
    })], -1))
    , io = zt(() => e("div", null, null, -1))
    , lo = {
        class: "action-bar"
    }
    , co = {
        class: "catagory"
    }
    , ro = {
        class: "catagory-menu"
    }
    , uo = ["onClick"]
    , po = {
        key: 0,
        class: "catagory-count"
    }
    , _o = Q({
        __name: "SaleAlbum",
        props: {
            data: {},
            otherInfo: {},
            purposes: {},
            basicData: {},
            baseInfo: {},
            linkInfo: {},
            purposesAlbumData: {}
        },
        emits: ["openViewer"],
        setup(t, { emit: n }) {
            var L, P, Y, R, ne, x, ie, le, H, se, ce, re;
            const i = t
                , _ = n
                , m = ge()
                , a = {
                    area: +((P = (L = i.otherInfo) == null ? void 0 : L.favInfo) == null ? void 0 : P.area),
                    groundType: (Y = i.baseInfo) == null ? void 0 : Y.groundType,
                    price: (ne = (R = i.baseInfo) == null ? void 0 : R.price) == null ? void 0 : ne.value,
                    sectionId: (x = i.basicData) == null ? void 0 : x.sectionId,
                    regionId: (ie = i.basicData) == null ? void 0 : ie.regionId,
                    kind: (le = i.basicData) == null ? void 0 : le.kind,
                    type: (H = i.basicData) == null ? void 0 : H.type
                }
                , l = {
                    1: "VR賞屋",
                    2: "播放影片",
                    3: "查看大圖",
                    4: "查看大圖"
                }
                , r = T()
                , u = D(() => {
                    var O;
                    return i.purposesAlbumData[(O = r == null ? void 0 : r.value) == null ? void 0 : O.activeIndex]
                }
                )
                , v = T(1);
            gt(u, () => {
                const X = i.purposesAlbumData.filter(oe => oe.photo).findIndex(oe => {
                    var W;
                    return oe.photo === ((W = u.value) == null ? void 0 : W.photo)
                }
                );
                X >= 0 && (v.value = X + 1)
            }
            );
            const d = T(((ce = (se = i.purposes) == null ? void 0 : se[0]) == null ? void 0 : ce.key) || "")
                , p = D(() => {
                    var O, X;
                    return ((X = (O = i.purposes) == null ? void 0 : O.find(oe => oe.key === d.value)) == null ? void 0 : X.name) || ""
                }
                )
                , f = O => {
                    var X, oe, W;
                    if (r.value = O,
                        (X = i.purposes) != null && X.length) {
                        d.value = ((W = (oe = i.purposes) == null ? void 0 : oe.find(q => q.count)) == null ? void 0 : W.key) || "";
                        const V = i.purposesAlbumData.findIndex(q => (q == null ? void 0 : q.type) === 3 && q.isCover);
                        !i.purposesAlbumData.some(q => (q == null ? void 0 : q.type) === 2) && V && r.value.slideTo(V)
                    }
                }
                , g = O => {
                    d.value = O.key;
                    const X = i.purposesAlbumData.findIndex(oe => oe.key === O.key);
                    X >= 0 && r.value.slideTo(X)
                }
                ;
            function y() {
                d.value = u.value.key
            }
            function h() {
                if (history.length > 1 && history.state.position > 1 && (document.referrer === "" || document.referrer.includes("591"))) {
                    history.go(-1);
                    return
                }
                window.location.href = `${ae.m}/v2/business`
            }
            const { isMobile: k } = he()
                , A = D(() => {
                    var X, oe;
                    return [`您好，我對這筆土地感興趣，想看一下【${(oe = (X = i.purposes) == null ? void 0 : X.find(W => W.key === d.value)) == null ? void 0 : oe.name}】，方便提供嗎？`]
                }
                );
            async function $() {
                var X;
                k && He("喚起APP");
                const { sendHouseMessage: O } = We();
                O((X = i.linkInfo) == null ? void 0 : X.imUid, [{
                    msg: A.value.join(";")
                }], `基本資訊-${A.value.join(";")}`)
            }
            const C = T(!!+((re = i.otherInfo) == null ? void 0 : re.pageView));
            return C.value && setTimeout(() => {
                C.value = !1
            }
                , 5e3),
                (O, X) => {
                    var z, K, ue, Ae, dt;
                    const oe = Ee
                        , W = Ke
                        , V = st
                        , F = eo
                        , q = G("t5-tracker-click");
                    return o(),
                        c("div", to, [w(s(nt), {
                            "slides-per-view": 1,
                            onSwiper: f,
                            onSlideChange: y
                        }, {
                            default: E(() => [(o(!0),
                                c(B, null, te(O.purposesAlbumData, (ee, ut) => (o(),
                                    c(B, {
                                        key: ee == null ? void 0 : ee.photo
                                    }, [ee.photo ? M((o(),
                                        N(s(qe), {
                                            key: 0,
                                            "data-behavior-img": "",
                                            onClick: Ze => _("openViewer", s(v) - 1, ee)
                                        }, {
                                            default: E(() => {
                                                var Ze, pt;
                                                return [(ee == null ? void 0 : ee.type) === 2 ? (o(),
                                                    c("div", no, [w(oe, {
                                                        src: ee == null ? void 0 : ee.photo
                                                    }, null, 8, ["src"]), w(W, {
                                                        size: 48,
                                                        type: "video"
                                                    })])) : (o(),
                                                        N(oe, {
                                                            key: 1,
                                                            src: ee == null ? void 0 : ee.photo,
                                                            preload: ((Ze = s(r)) == null ? void 0 : Ze.activeIndex) > 0 && ut <= ((pt = s(r)) == null ? void 0 : pt.activeIndex) + 2
                                                        }, null, 8, ["src", "preload"]))]
                                            }
                                            ),
                                            _: 2
                                        }, 1032, ["onClick"])), [[q, `可視化看房_${l[(ee == null ? void 0 : ee.type) || 2]}`]]) : (o(),
                                            N(s(qe), {
                                                key: 1
                                            }, {
                                                default: E(() => [M((o(),
                                                    c("div", {
                                                        class: j(["request-img-container", [s(d)]]),
                                                        onClick: $
                                                    }, [e("div", oo, [e("div", so, b(O.linkInfo.identity.replace("屋", "地")) + "暫未上傳 ", 1), ao])], 2)), [[q, `圖片TAB欄_索取圖片-${s(p)}`]])]),
                                                _: 1
                                            }))], 64))), 128))]),
                            _: 1
                        }), io, e("div", lo, [w(V, {
                            size: 24,
                            color: "#fff",
                            onClick: h
                        }), w(F, {
                            id: +s(m).params.id,
                            "share-count": ((K = (z = O.otherInfo) == null ? void 0 : z.behaviorData) == null ? void 0 : K.share) ?? 0,
                            "collect-count": ((Ae = (ue = O.otherInfo) == null ? void 0 : ue.behaviorData) == null ? void 0 : Ae.fav) ?? 0,
                            type: O.basicData.type,
                            "visible-print": !1,
                            "subscribe-data": a
                        }, null, 8, ["id", "share-count", "collect-count", "type"])]), e("div", co, [e("div", ro, [(o(!0),
                            c(B, null, te(O.purposes, ee => M((o(),
                                c("span", {
                                    key: ee.key,
                                    class: j(["menu-item", {
                                        active: s(d) === ee.key
                                    }]),
                                    onClick: ut => g(ee)
                                }, [S(b(ee.name), 1)], 10, uo)), [[q, `圖像Tab欄_${ee.name}`]])), 128))]), ((dt = s(r)) == null ? void 0 : dt.activeIndex) >= 0 && O.data.length ? (o(),
                                    c("div", po, b(s(v)) + "/" + b(O.data.length), 1)) : I("", !0)])])
                }
        }
    })
    , mo = U(_o, [["__scopeId", "data-v-c1822c2b"]])
    , fo = we(Ge)
    , ho = {
        class: "album-container-touch"
    }
    , vo = {
        key: 0,
        class: "video-player"
    }
    , ko = {
        class: "action-bar"
    }
    , go = {
        key: 0,
        class: "page-view"
    }
    , yo = {
        key: 1,
        class: "tag-bar"
    }
    , bo = ["onClick"]
    , Ao = {
        key: 0,
        class: "catagory-count"
    }
    , Io = {
        class: "catagory"
    }
    , $o = ["onClick"]
    , wo = Q({
        __name: "TouchAlbum",
        props: {
            data: {},
            otherInfo: {},
            tags: {},
            purposes: {},
            basicData: {},
            baseInfo: {}
        },
        emits: ["openViewer"],
        setup(t, { emit: n }) {
            var g, y, h, k, A, $, C, L, P, Y;
            const i = t
                , _ = n
                , m = ge()
                , a = {
                    area: +((y = (g = i.otherInfo) == null ? void 0 : g.favInfo) == null ? void 0 : y.area),
                    groundType: (h = i.baseInfo) == null ? void 0 : h.groundType,
                    price: (A = (k = i.baseInfo) == null ? void 0 : k.price) == null ? void 0 : A.value,
                    sectionId: ($ = i.basicData) == null ? void 0 : $.sectionId,
                    regionId: (C = i.basicData) == null ? void 0 : C.regionId,
                    kind: (L = i.basicData) == null ? void 0 : L.kind,
                    type: (P = i.basicData) == null ? void 0 : P.type
                }
                , l = {
                    1: "VR賞屋",
                    2: "播放影片",
                    3: "查看大圖",
                    4: "查看大圖"
                }
                , r = T()
                , u = R => {
                    r.value = R
                }
                , v = D(() => {
                    var R;
                    return i.data[(R = r == null ? void 0 : r.value) == null ? void 0 : R.activeIndex]
                }
                )
                , d = R => {
                    const ne = i.data.findIndex(x => R.includeType.has(x == null ? void 0 : x.type));
                    r.value.slideTo(ne)
                }
                ;
            function p() {
                if (history.length > 1 && history.state.position > 1 && (document.referrer === "" || document.referrer.includes("591"))) {
                    history.go(-1);
                    return
                }
                window.location.href = `${ae.m}/v2/business`
            }
            Ce(() => {
                var R;
                if ((R = i.purposes) != null && R.length) {
                    const ne = i.data.findIndex(x => (x == null ? void 0 : x.type) === 3 && x.isCover);
                    ne && r.value.slideTo(ne)
                }
            }
            );
            const f = T(!!+((Y = i.otherInfo) == null ? void 0 : Y.pageView));
            return f.value && setTimeout(() => {
                f.value = !1
            }
                , 5e3),
                (R, ne) => {
                    var ce, re, O, X, oe, W, V, F, q;
                    const x = Ee
                        , ie = Ke
                        , le = st
                        , H = fo
                        , se = G("t5-tracker-click");
                    return o(),
                        c("div", ho, [w(s(nt), {
                            "slides-per-view": 1,
                            onSwiper: u
                        }, {
                            default: E(() => [(o(!0),
                                c(B, null, te(R.data, (z, K) => M((o(),
                                    N(s(qe), {
                                        key: z == null ? void 0 : z.photo,
                                        "data-behavior-img": "",
                                        onClick: ue => _("openViewer", K, z)
                                    }, {
                                        default: E(() => {
                                            var ue, Ae;
                                            return [(z == null ? void 0 : z.type) === 2 ? (o(),
                                                c("div", vo, [w(x, {
                                                    src: z == null ? void 0 : z.photo
                                                }, null, 8, ["src"]), w(ie, {
                                                    size: 48,
                                                    type: "video"
                                                })])) : (o(),
                                                    N(x, {
                                                        key: 1,
                                                        src: z == null ? void 0 : z.photo,
                                                        preload: ((ue = s(r)) == null ? void 0 : ue.activeIndex) > 0 && K <= ((Ae = s(r)) == null ? void 0 : Ae.activeIndex) + 2
                                                    }, null, 8, ["src", "preload"]))]
                                        }
                                        ),
                                        _: 2
                                    }, 1032, ["onClick"])), [[se, `可視化看房_${l[(z == null ? void 0 : z.type) || 2]}`]])), 128))]),
                            _: 1
                        }), e("div", ko, [w(le, {
                            size: 24,
                            color: "#fff",
                            onClick: p
                        }), w(H, {
                            id: +s(m).params.id,
                            "share-count": ((re = (ce = R.otherInfo) == null ? void 0 : ce.behaviorData) == null ? void 0 : re.share) ?? 0,
                            "collect-count": ((X = (O = R.otherInfo) == null ? void 0 : O.behaviorData) == null ? void 0 : X.fav) ?? 0,
                            type: R.basicData.type,
                            "visible-print": !1,
                            "subscribe-data": a
                        }, null, 8, ["id", "share-count", "collect-count", "type"])]), (oe = R.purposes) != null && oe.length ? (o(),
                            c(B, {
                                key: 1
                            }, [((F = s(r)) == null ? void 0 : F.activeIndex) >= 0 ? (o(),
                                c("div", Ao, b(((q = s(r)) == null ? void 0 : q.activeIndex) + 1) + "/" + b(R.data.length), 1)) : I("", !0), e("div", Io, [(o(!0),
                                    c(B, null, te(R.purposes.slice(0, 5), z => {
                                        var K, ue;
                                        return M((o(),
                                            c("span", {
                                                key: z.key,
                                                class: j(["catagory-item", {
                                                    active: z.start_index <= ((K = s(r)) == null ? void 0 : K.activeIndex) && z.start_index + z.count > ((ue = s(r)) == null ? void 0 : ue.activeIndex)
                                                }]),
                                                onClick: Ae => s(r).slideTo(z.start_index)
                                            }, [S(b(z.name), 1)], 10, $o)), [[se, `圖像Tab欄_${z.name}`]])
                                    }
                                    ), 128)), M(e("i", {
                                        class: "ic-house house-arrow-right",
                                        onClick: ne[0] || (ne[0] = z => {
                                            var K;
                                            return _("openViewer", (K = s(r)) == null ? void 0 : K.activeIndex)
                                        }
                                        )
                                    }, null, 512), [[se, "圖像Tab欄_通過[>]查看"]])])], 64)) : (o(),
                                        c(B, {
                                            key: 0
                                        }, [s(f) ? (o(),
                                            c("div", go, b(((W = R.otherInfo) == null ? void 0 : W.pageView) < 99999 ? (V = R.otherInfo) == null ? void 0 : V.pageView.toLocaleString() : "99,999+") + " 人看過 ", 1)) : I("", !0), R.tags.length ? (o(),
                                                c("div", yo, [(o(!0),
                                                    c(B, null, te(R.tags, z => {
                                                        var K;
                                                        return M((o(),
                                                            c("span", {
                                                                key: z.key,
                                                                class: j({
                                                                    active: z.includeType.has((K = s(v)) == null ? void 0 : K.type) && R.tags.length > 1
                                                                }),
                                                                onClick: ue => d(z)
                                                            }, [S(b(z.name) + " " + b(z.count > 1 ? z.count : ""), 1)], 10, bo)), [[se, `圖像Tab欄_${z.name}`]])
                                                    }
                                                    ), 128))])) : I("", !0)], 64))])
                }
        }
    })
    , Co = U(wo, [["__scopeId", "data-v-7687ab18"]])
    , Do = t => (Z("data-v-53586626"),
        t = t(),
        J(),
        t)
    , Eo = {
        class: "contact"
    }
    , So = {
        class: "contact-avatar"
    }
    , Bo = ["src"]
    , To = {
        class: "contact-info"
    }
    , Mo = {
        class: "base-info"
    }
    , Vo = {
        class: "name"
    }
    , Lo = {
        key: 0,
        class: "is-recmoney"
    }
    , zo = {
        key: 1
    }
    , No = {
        key: 0,
        class: "join-time"
    }
    , Ro = {
        key: 1,
        class: "company-info"
    }
    , Qo = {
        key: 0,
        class: "econ-name"
    }
    , Uo = Do(() => e("a", {
        class: "company-detail"
    }, "詳情", -1))
    , Po = {
        key: 0
    }
    , Fo = {
        key: 1
    }
    , qo = {
        key: 1
    }
    , Ho = {
        key: 2
    }
    , Oo = Q({
        __name: "ViewerContactInfo",
        props: {
            linkInfo: {}
        },
        setup(t) {
            var l;
            const n = t
                , { error: i } = et({
                    src: (l = n.linkInfo) == null ? void 0 : l.avatar
                })
                , _ = D(() => {
                    var r;
                    return i.value ? xe : (r = n.linkInfo) == null ? void 0 : r.avatar
                }
                )
                , m = D(() => +n.linkInfo.role == 3)
                , a = D(() => Pe() === "pc" ? "hover" : "click");
            return (r, u) => {
                var d, p, f, g, y, h, k, A, $, C;
                const v = yt;
                return o(),
                    c("section", Eo, [e("div", So, [e("img", {
                        src: s(_)
                    }, null, 8, Bo)]), e("div", To, [e("div", Mo, [e("span", Vo, [e("em", null, b((d = r.linkInfo) == null ? void 0 : d.identity) + ":", 1), S(" " + b(s($e)((p = r.linkInfo) == null ? void 0 : p.linkman, 3)), 1)]), s(m) ? (o(),
                        c(B, {
                            key: 0
                        }, [((f = r.linkInfo) == null ? void 0 : f.isServiceFee) === 1 ? (o(),
                            c("small", Lo, "(" + b((g = r.linkInfo) == null ? void 0 : g.isrecmoney) + ")", 1)) : I("", !0), ("getDeviceType" in r ? r.getDeviceType : s(Pe))() === "pc" ? (o(),
                                N(v, {
                                    key: 1,
                                    content: ((y = r.linkInfo) == null ? void 0 : y.approveStatus) === 1 ? "已認證" : "未認證",
                                    trigger: s(a),
                                    placement: "top"
                                }, {
                                    default: E(() => {
                                        var L;
                                        return [e("i", {
                                            class: j(["icon", ((L = r.linkInfo) == null ? void 0 : L.approveStatus) === 1 ? "professional-icon" : "professional-gray-icon"])
                                        }, null, 2)]
                                    }
                                    ),
                                    _: 1
                                }, 8, ["content", "trigger"])) : (o(),
                                    c("i", {
                                        key: 2,
                                        class: j(["icon", ((h = r.linkInfo) == null ? void 0 : h.approveStatus) === 1 ? "professional-icon" : "professional-gray-icon"])
                                    }, null, 2))], 64)) : I("", !0), r.linkInfo.role === 1 && ((k = r.linkInfo) != null && k.warnmsg) ? (o(),
                                        c("small", zo, "(仲介勿擾)")) : I("", !0)]), r.linkInfo.role === 1 ? (o(),
                                            c("div", No, b((A = r.linkInfo) == null ? void 0 : A.join_time), 1)) : I("", !0), s(m) ? (o(),
                                                c("div", Ro, [($ = r.linkInfo) != null && $.econName || (C = r.linkInfo) != null && C.companyname ? (o(),
                                                    c("span", Qo, b(s($e)(!r.linkInfo.hidCompany && r.linkInfo.companyname || r.linkInfo.econName, 12)), 1)) : I("", !0), r.linkInfo.econName ? (o(),
                                                        N(v, {
                                                            key: 1,
                                                            placement: "bottom"
                                                        }, {
                                                            content: E(() => [r.linkInfo.hidCompany ? I("", !0) : (o(),
                                                                c(B, {
                                                                    key: 0
                                                                }, [r.linkInfo.companyname ? (o(),
                                                                    c("p", Po, " 公司：" + b(r.linkInfo.companyname), 1)) : I("", !0), r.linkInfo.subcompanyname ? (o(),
                                                                        c("p", Fo, " 分公司：" + b(r.linkInfo.subcompanyname), 1)) : I("", !0)], 64)), r.linkInfo.econName ? (o(),
                                                                            c("p", qo, " 經紀業：" + b(r.linkInfo.econName), 1)) : I("", !0), r.linkInfo.certificateNum ? (o(),
                                                                                c("p", Ho, " 證書字號：" + b(r.linkInfo.certificateNum), 1)) : I("", !0)]),
                                                            default: E(() => [Uo]),
                                                            _: 1
                                                        })) : I("", !0)])) : I("", !0)])])
            }
        }
    })
    , Ko = U(Oo, [["__scopeId", "data-v-53586626"]])
    , Se = t => (Z("data-v-4e13f6c9"),
        t = t(),
        J(),
        t)
    , Go = {
        class: "view-contact"
    }
    , Wo = {
        key: 0,
        class: "view-contact-right"
    }
    , xo = Se(() => e("i", {
        class: "ic-house house-line"
    }, null, -1))
    , Yo = Se(() => e("em", null, "LINE 聯絡", -1))
    , jo = Se(() => e("i", {
        class: "ic-house house-talk"
    }, null, -1))
    , Zo = Se(() => e("em", null, "在線問", -1))
    , Jo = Se(() => e("i", {
        class: "ic-house house-telephone"
    }, null, -1))
    , Xo = Se(() => e("em", null, "打電話", -1))
    , ht = "查看大圖"
    , es = Q({
        __name: "ViewerContactBar",
        props: {
            linkInfo: {},
            basicData: {}
        },
        setup(t) {
            const n = t
                , { open: i } = Bt(() => {
                    var a;
                    return (a = n == null ? void 0 : n.linkInfo) == null ? void 0 : a.line
                }
                )
                , { isMobile: _ } = he();
            async function m() {
                var l;
                _ && He("喚起APP");
                const { sendHouseMessage: a } = We();
                a((l = n.linkInfo) == null ? void 0 : l.imUid, [{
                    msg: "您好"
                }], "查看圖片-房聊")
            }
            return (a, l) => {
                var p, f, g, y;
                const r = Ko
                    , u = ye
                    , v = Re
                    , d = G("t5-tracker-click");
                return o(),
                    c("div", Go, [w(r, {
                        "link-info": a.linkInfo
                    }, null, 8, ["link-info"]), (p = a.linkInfo) != null && p.dealTime ? I("", !0) : (o(),
                        c("div", Wo, [(f = a.linkInfo) != null && f.line && ((g = a.basicData) == null ? void 0 : g.kind) !== 11 ? M((o(),
                            N(u, {
                                key: 0,
                                class: "view-contact-btn line",
                                size: "large",
                                "data-behavior-friend": "",
                                "data-gtm-behavior": "line_friend",
                                onClick: s(i)
                            }, {
                                default: E(() => [xo, Yo]),
                                _: 1
                            }, 8, ["onClick"])), [[d, `${ht}_LINE`]]) : I("", !0), ((y = a.basicData) == null ? void 0 : y.kind) === 11 ? M((o(),
                                N(u, {
                                    key: 1,
                                    class: "view-contact-btn",
                                    size: "large",
                                    onClick: m
                                }, {
                                    default: E(() => [jo, Zo]),
                                    _: 1
                                })), [[d, "查看圖片_在線問_點擊"]]) : I("", !0), w(v, {
                                    "link-info": a.linkInfo,
                                    placement: "bottom"
                                }, {
                                    default: E(() => {
                                        var h;
                                        return [M((o(),
                                            N(u, {
                                                theme: ((h = a.basicData) == null ? void 0 : h.kind) === 11 ? "housing" : "",
                                                class: "view-contact-btn",
                                                size: "large",
                                                "data-behavior-call": "",
                                                "data-gtm-behavior": "call"
                                            }, {
                                                default: E(() => [Jo, Xo]),
                                                _: 1
                                            }, 8, ["theme"])), [[d, `${ht}_打電話`]])]
                                    }
                                    ),
                                    _: 1
                                }, 8, ["link-info"])]))])
            }
        }
    })
    , ts = U(es, [["__scopeId", "data-v-4e13f6c9"]]);
function ns(t) {
    let { swiper: n, extendParams: i, on: _, emit: m } = t;
    i({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
        n.navigation = {
            nextEl: null,
            prevEl: null
        };
    const a = h => (Array.isArray(h) ? h : [h]).filter(k => !!k);
    function l(h) {
        let k;
        return h && typeof h == "string" && n.isElement && (k = n.el.querySelector(h),
            k) ? k : (h && (typeof h == "string" && (k = [...document.querySelectorAll(h)]),
                n.params.uniqueNavElements && typeof h == "string" && k.length > 1 && n.el.querySelectorAll(h).length === 1 && (k = n.el.querySelector(h))),
                h && !k ? h : k)
    }
    function r(h, k) {
        const A = n.params.navigation;
        h = a(h),
            h.forEach($ => {
                $ && ($.classList[k ? "add" : "remove"](...A.disabledClass.split(" ")),
                    $.tagName === "BUTTON" && ($.disabled = k),
                    n.params.watchOverflow && n.enabled && $.classList[n.isLocked ? "add" : "remove"](A.lockClass))
            }
            )
    }
    function u() {
        const { nextEl: h, prevEl: k } = n.navigation;
        if (n.params.loop) {
            r(k, !1),
                r(h, !1);
            return
        }
        r(k, n.isBeginning && !n.params.rewind),
            r(h, n.isEnd && !n.params.rewind)
    }
    function v(h) {
        h.preventDefault(),
            !(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(),
                m("navigationPrev"))
    }
    function d(h) {
        h.preventDefault(),
            !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(),
                m("navigationNext"))
    }
    function p() {
        const h = n.params.navigation;
        if (n.params.navigation = hn(n, n.originalParams.navigation, n.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
            !(h.nextEl || h.prevEl))
            return;
        let k = l(h.nextEl)
            , A = l(h.prevEl);
        Object.assign(n.navigation, {
            nextEl: k,
            prevEl: A
        }),
            k = a(k),
            A = a(A);
        const $ = (C, L) => {
            C && C.addEventListener("click", L === "next" ? d : v),
                !n.enabled && C && C.classList.add(...h.lockClass.split(" "))
        }
            ;
        k.forEach(C => $(C, "next")),
            A.forEach(C => $(C, "prev"))
    }
    function f() {
        let { nextEl: h, prevEl: k } = n.navigation;
        h = a(h),
            k = a(k);
        const A = ($, C) => {
            $.removeEventListener("click", C === "next" ? d : v),
                $.classList.remove(...n.params.navigation.disabledClass.split(" "))
        }
            ;
        h.forEach($ => A($, "next")),
            k.forEach($ => A($, "prev"))
    }
    _("init", () => {
        n.params.navigation.enabled === !1 ? y() : (p(),
            u())
    }
    ),
        _("toEdge fromEdge lock unlock", () => {
            u()
        }
        ),
        _("destroy", () => {
            f()
        }
        ),
        _("enable disable", () => {
            let { nextEl: h, prevEl: k } = n.navigation;
            if (h = a(h),
                k = a(k),
                n.enabled) {
                u();
                return
            }
            [...h, ...k].filter(A => !!A).forEach(A => A.classList.add(n.params.navigation.lockClass))
        }
        ),
        _("click", (h, k) => {
            let { nextEl: A, prevEl: $ } = n.navigation;
            A = a(A),
                $ = a($);
            const C = k.target;
            if (n.params.navigation.hideOnClick && !$.includes(C) && !A.includes(C)) {
                if (n.pagination && n.params.pagination && n.params.pagination.clickable && (n.pagination.el === C || n.pagination.el.contains(C)))
                    return;
                let L;
                A.length ? L = A[0].classList.contains(n.params.navigation.hiddenClass) : $.length && (L = $[0].classList.contains(n.params.navigation.hiddenClass)),
                    m(L === !0 ? "navigationShow" : "navigationHide"),
                    [...A, ...$].filter(P => !!P).forEach(P => P.classList.toggle(n.params.navigation.hiddenClass))
            }
        }
        );
    const g = () => {
        n.el.classList.remove(...n.params.navigation.navigationDisabledClass.split(" ")),
            p(),
            u()
    }
        , y = () => {
            n.el.classList.add(...n.params.navigation.navigationDisabledClass.split(" ")),
                f()
        }
        ;
    Object.assign(n.navigation, {
        enable: g,
        disable: y,
        update: u,
        init: p,
        destroy: f
    })
}
const os = we(Ge)
    , ss = we(dn)
    , as = t => (Z("data-v-4b4ec5fa"),
        t = t(),
        J(),
        t)
    , is = {
        class: "album-container"
    }
    , ls = {
        class: "album-container-pc"
    }
    , cs = {
        key: 2,
        class: "purpose-tag"
    }
    , rs = {
        class: "right-container",
        "data-behavior-img": ""
    }
    , ds = ["onClick"]
    , us = {
        key: 0,
        class: "purpose-tag"
    }
    , ps = as(() => e("i", {
        class: "ic-house house-more"
    }, null, -1))
    , _s = {
        class: "sub-album-header"
    }
    , ms = {
        class: "sub-album-header-pc"
    }
    , fs = {
        class: "sub-album-header-touch"
    }
    , hs = {
        class: "pic-number"
    }
    , vs = {
        class: "number"
    }
    , ks = Q({
        __name: "AlbumLayout",
        props: {
            pcAlbumData: {},
            mobileAlbumData: {},
            otherInfo: {},
            basicData: {},
            linkInfo: {},
            baseInfo: {},
            mapInfo: {},
            isOnline: {
                type: Boolean
            }
        },
        setup(t) {
            const n = t
                , i = D(() => {
                    var p, f;
                    return ((p = n.basicData) == null ? void 0 : p.type) === 2 && ((f = n.basicData) == null ? void 0 : f.kind) === 11
                }
                )
                , _ = T(!1)
                , m = T(!1)
                , a = T(0)
                , l = D(() => {
                    var p, f, g;
                    return (g = (f = (p = n.mapInfo) == null ? void 0 : p.address) == null ? void 0 : f.detail) == null ? void 0 : g.lat
                }
                )
                , r = D(() => {
                    var p, f, g;
                    return (g = (f = (p = n.mapInfo) == null ? void 0 : p.address) == null ? void 0 : f.detail) == null ? void 0 : g.lng
                }
                )
                , u = (p, f) => {
                    if (!(f != null && f.isEmptyPic)) {
                        if ((f == null ? void 0 : f.purpose) === 35) {
                            window.open(`https://maps.google.com.tw/maps?f=q&t=k&hl=zh-TW&q=${s(l)},${s(r)}&z=17`);
                            return
                        }
                        a.value = p,
                            _.value = !0
                    }
                }
                , v = (p, f) => {
                    if (!(f != null && f.isEmptyPic)) {
                        if ((f == null ? void 0 : f.purpose) === 35) {
                            window.open(`https://maps.google.com.tw/maps?f=q&t=k&hl=zh-TW&q=${s(l)},${s(r)}&z=17`);
                            return
                        }
                        a.value = p,
                            m.value = !0
                    }
                }
                , d = D(() => n.pcAlbumData.pictures[0] || {});
            return (p, f) => {
                var x, ie, le;
                const g = Ee
                    , y = sn
                    , h = Lt
                    , k = Tt
                    , A = st
                    , $ = os
                    , C = ss
                    , L = mo
                    , P = Co
                    , Y = ts
                    , R = rn
                    , ne = G("t5-tracker-click");
                return o(),
                    c("section", is, [e("div", ls, [e("div", {
                        class: "left-container",
                        "data-behavior-img": "",
                        onClick: f[0] || (f[0] = H => u(0, s(d)))
                    }, [s(d).type === 2 ? (o(),
                        c(B, {
                            key: 0
                        }, [w(g, {
                            class: "video-bg",
                            src: s(d).thumbPhoto,
                            style: {
                                background: "#000"
                            }
                        }, null, 8, ["src"]), w(y, {
                            class: "video-player print-ignore",
                            "video-params": s(d),
                            "ga-text": `${(x = p.basicData) == null ? void 0 : x.kindStr}_可視化看房_播放影片`
                        }, null, 8, ["video-params", "ga-text"])], 64)) : M((o(),
                            N(g, {
                                key: 1,
                                src: (ie = s(d)) == null ? void 0 : ie.photo,
                                alt: "相冊大圖"
                            }, null, 8, ["src"])), [[ne, "可視化看房_查看大圖"]]), (le = s(d)) != null && le.purposeName ? (o(),
                                c("span", cs, b(s(d).purposeName), 1)) : I("", !0)]), M((o(),
                                    c("div", rs, [(o(!0),
                                        c(B, null, te(p.pcAlbumData.pictures.slice(1, 5), (H, se) => (o(),
                                            c("div", {
                                                key: se,
                                                class: "pic-item",
                                                onClick: ce => u(se + 1, H)
                                            }, [w(g, {
                                                src: H == null ? void 0 : H.photo,
                                                alt: ""
                                            }, null, 8, ["src"]), H != null && H.purposeName ? (o(),
                                                c("span", us, b(H == null ? void 0 : H.purposeName), 1)) : I("", !0)], 8, ds))), 128)), p.pcAlbumData.originPictures.length > 5 ? M((o(),
                                                    c("div", {
                                                        key: 0,
                                                        class: "view-more-btn",
                                                        "data-behavior-imglist": "",
                                                        onClick: f[1] || (f[1] = H => m.value = !0)
                                                    }, [ps, S("查看全部" + b(p.pcAlbumData.originPictures.length) + "張照片 ", 1)])), [[ne, "可視化看房_查看全部照片", void 0, {
                                                        stop: !0
                                                    }]]) : I("", !0)])), [[ne, "可視化看房_查看大圖"]])]), s(m) ? (o(),
                                                        N(C, {
                                                            key: 0,
                                                            modelValue: s(m),
                                                            "onUpdate:modelValue": f[3] || (f[3] = H => pe(m) ? m.value = H : null),
                                                            data: p.pcAlbumData.originPictures,
                                                            "init-index": s(a),
                                                            onOpen: u
                                                        }, {
                                                            header: E(() => {
                                                                var H, se, ce, re;
                                                                return [e("div", _s, [e("div", ms, [w(h, {
                                                                    "link-info": p.linkInfo,
                                                                    "is-online": p.isOnline,
                                                                    "kind-str": p.basicData.kindStr
                                                                }, null, 8, ["link-info", "is-online", "kind-str"]), p.linkInfo.dealTime ? I("", !0) : (o(),
                                                                    N(k, {
                                                                        key: 0,
                                                                        placement: "bottom",
                                                                        "link-info": p.linkInfo,
                                                                        "basic-data": p.basicData,
                                                                        "base-info": p.baseInfo,
                                                                        "position-ga-text": "二級相冊列表"
                                                                    }, null, 8, ["link-info", "basic-data", "base-info"]))]), e("div", fs, [w(A, {
                                                                        size: 24,
                                                                        color: "#000",
                                                                        onClick: f[2] || (f[2] = O => m.value = !1)
                                                                    }), e("div", hs, [S(" 圖片 · "), e("span", vs, b(p.pcAlbumData.originPictures.length), 1), S(" 張 ")]), (H = p.basicData) != null && H.id && ((se = p.basicData) != null && se.type) ? (o(),
                                                                        N($, {
                                                                            key: 0,
                                                                            id: (ce = p.basicData) == null ? void 0 : ce.id,
                                                                            "share-count": 0,
                                                                            "collect-count": 0,
                                                                            type: (re = p.basicData) == null ? void 0 : re.type,
                                                                            "visible-print": !1,
                                                                            theme: {
                                                                                color: "#5a5a5a"
                                                                            }
                                                                        }, null, 8, ["id", "type"])) : I("", !0)])])]
                                                            }
                                                            ),
                                                            _: 1
                                                        }, 8, ["modelValue", "data", "init-index"])) : I("", !0), s(i) ? (o(),
                                                            N(L, {
                                                                key: 1,
                                                                data: p.mobileAlbumData.pictures,
                                                                purposes: p.mobileAlbumData.purposes,
                                                                "purposes-album-data": p.mobileAlbumData.purposesAlbumData,
                                                                "other-info": p.otherInfo,
                                                                "basic-data": p.basicData,
                                                                "base-info": p.baseInfo,
                                                                "link-info": p.linkInfo,
                                                                onOpenViewer: v
                                                            }, null, 8, ["data", "purposes", "purposes-album-data", "other-info", "basic-data", "base-info", "link-info"])) : (o(),
                                                                N(P, {
                                                                    key: 2,
                                                                    data: p.mobileAlbumData.pictures,
                                                                    tags: p.mobileAlbumData.tags,
                                                                    purposes: p.mobileAlbumData.purposes,
                                                                    "other-info": p.otherInfo,
                                                                    "basic-data": p.basicData,
                                                                    "base-info": p.baseInfo,
                                                                    onOpenViewer: v
                                                                }, null, 8, ["data", "tags", "purposes", "other-info", "basic-data", "base-info"])), s(_) ? (o(),
                                                                    N(R, {
                                                                        key: 3,
                                                                        modelValue: s(_),
                                                                        "onUpdate:modelValue": f[4] || (f[4] = H => pe(_) ? _.value = H : null),
                                                                        data: p.pcAlbumData,
                                                                        "init-index": s(a) || 0
                                                                    }, {
                                                                        header: E(() => [w(Y, {
                                                                            "link-info": p.linkInfo,
                                                                            "basic-data": p.basicData
                                                                        }, null, 8, ["link-info", "basic-data"])]),
                                                                        footer: E(() => [w(Y, {
                                                                            "link-info": p.linkInfo,
                                                                            "basic-data": p.basicData
                                                                        }, null, 8, ["link-info", "basic-data"])]),
                                                                        _: 1
                                                                    }, 8, ["modelValue", "data", "init-index"])) : I("", !0)])
            }
        }
    })
    , Xu = U(ks, [["__scopeId", "data-v-4b4ec5fa"]])
    , gs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAuCAYAAAB3ebaPAAAACXBIWXMAAAsTAAALEwEAmpwYAAANtklEQVR4nO2dP2wcxxXGWaRym+6WR/KIFIHrIGld8c7yhYop0ydBDhyYPIkSYBt0LMiOlMi2kCCyIUq2ghSGuxRCYCCNm7S2gfSBO1U2WDoCAgiCA6hg8Nu7R759N7M7M7fHo4AtPpDi7e7tzr7v/fnmzWihf2l3oUEzBo0N7OZj0AxEQ4bGBi4djcHUg3F1czm7t7P697/sdB7ubXc+fe+Vn/y4MbLGyPpP6RhMdfKd4eovIMK9i50DwScXO9/y93k/WINmDPrHSYjb2523/3r5iAjg7nAlx51h54e7w9ULjVE2Rtl/ysYg+oRbW88+Q4qkiWAJAfa2QedTjp/3QzZoxqA/C0K8tbH807vDzjdlRLCk4Pjr51ZWG6NsjLL/FIxB8IF3hp2ztl7wkWEUHVYOPnpt9PP21sr3H73WOTXvh23QjEF/WkJ8/PrPf/TJxc7tMiKQQlEzfHyh808hgxBCY2+7c+MkGeW9nZUvqYMEKGbzvqeQ90Eayr0SsREw3jzdfu7aYGnj+mDpVX6Pud7lF7LPdk8vPhJcfqH9s3k/4zxR+iESKkbjIwLFM5FDnwMx+Lslw59/s5wD0pwUaZZ71YRAKJjF95Ay8l2A7wA4h+uDpQ8Btda1wdLf/vTq8j/A++eX/iV4Z7P94IPzS9/94dzSf26+svy/3w/aB+B3LxfxzksjcL2Ye7t6pv317q8WD8Drv8wqnQKfxwISh94PZIek293Wg+211sOZoNt6wHe47NB7Y3geJFR/etT5Bg9Vdq4mggYv+CRIswy+JgTP5DuWlE+MGcTcP0Tguf/4azc+OL9UwI1zbggZLCGEDOC3G+1rMWMA4SAC2D29+KhqvHZOtQ4sht0ittaK2O62Hl/otb4IcYTDXrZnz58dsvtBhOAFVqVIVeoRD080cBECI8DbnQRplmfRpHAZOs9KHVSsj8JrIggUQoQyQmgyEC1wKhgzHv7KmfbnRBiiQ2zKlKdK4+iw83z276p3WkYEHyHKDHCCEN3WV4ZMD2rG48Nrr7UelhLCJ6nqFCk2rSA1sGTQ4EXOU5rFsIUMPCvpiz2GtFA7BMgRkwbwHePU6AaQKINDIO8H1ACAY0mVNBnw+hhj3eNEOiPRAVw50/686viYyGBBlKi6J4xWn1N3eq2vX0qIUZ5blFStEaSmOXm6sbXyvc9LYgDHIc1ixAywAAPjb1o943dreNRROjogMszqHjE6oqeQgWhQJxEgF/kzwEAlOkiEuDz+DAy72U1dZDNWpMkhuHQq27WEGPayQdX9DbutfX1OjOMJgb4+vzsJgcFaSbWYIq18Oa0Cg8Fj+L50gRc/a2lWZtcFonoRFfSza6Fg5CiOyABSHIMtln0gFdLRgXGxx5Am+VDlWGwRXYadU63857CXrcc8KyTSqUlougTw2oWUqZe9Wyt0ytRtPZgghK0X7JwC3rAuluLpMD5f3sxP0odpvwOjEOiQ6yMEBq7HgNpHzuF+NSHKCu8yYOjT1A0+VUlwZWMxh0/osISoIsKORkVtUbj+5nJmvTx1QagNTRJpdnASQiKDJYJLUq0LGD1pgcsQ8IjTXJt75nms0Y+N+4ZPZrWKGi9WooMmROqY8Fyu6CiOoIwMZaqSJURVhKBOwMDBWy+2nxSI8Pzo78ASIyRt4xhXURxTB4TUInXBRfQFT1T4tsrTTAu8sk0PePH8nOa6Mol4pBodGXAZIbgfjhVIW7tOlRiX1GipaxcXcBJ6HHIFaXM5qzrPIlZhEjJgyH31GTVELCFIiwpkWGs9jLEjvsNEln3qjlnBpchNECI1R04lhcsjzkpGhSxaUSqTfTnP1g6zkokxZHEOMgazrqcwVB0d0P/76nMIoglRdT0MzESGx7ESMONQ5cFnjQVXH9Jx3oArPZjmenhxTQjt2YQQR/WS28CJAtQKmgyoZLwwmU0GVa0oSK1V8w6hadLVzfaTKpACaZSlTxiwIcTAEGJfyOCSJy0oWG0xHPvuiIi29uDvb6wvXhxFn3qBiuYlhH75x0kIlwHUNfMMOQxZgggxmiNwRweIIjPw1FllqQQFeQgRUuoGqRk0RD0SlKVQRARNCE2e9yYn4ArplPN63eymkVijlCmJWq55C5uK1QXXcy3olz5PQuiXn3ot0hxNCK0WiYEWFbVJQowa5jo/6PHQ14EseqKxrMjm+xAPfHCRQf4dEhF8kUFQRlYpnMf1Q0GPf/N0+7nCxFsv27PqnQU1hzY2vLrvWJ+Ej1zrkmrnRghpxDtOQrjkxHRCdM6aCFGYQCubbxDPaFMlyKG9J79rQpA6pdwrs9KWDNNKzqHAuHV0sHMEb6wvXjSEyAvQuhQgl9xZRgjp7NXgnqxES5Syx3FNDf2Zi5iHhNCdqfMghE4HUq+li+ZRs14xApQRgrrB1b7ualWBNEIIPH3sTLJVlABFtXS/xoJZ4ZiZfoxbzzlwvv58ay27rwkxNsD1ugjhK5a5L30cUcd1HPeiycB9QWLXsRi9nuzzXbNACNuqfZyEoJfJIvVaGHRZo57t09KEgEw2deR6LpnV9mfFzE1gwKlzDbZ20PUCKVLoWgbaN/Q8gz7v1tazz2Bsqkdp36UizYIQGLqpQ/YmjulmNzUx83utqFfsvZe1kCy41iwcJyHqhFWYbFGpCUHRLNKmiwxEAZ/nh2i6WTEkbRKFKoQMLlK4imhLCpcBuWDnGPRcwbCXDXR0EI/K/dv0Q8NOyGGkvmN9cxMThqtUIM+k32MiQ57OEcF62YB/o3AxFtKvBQEL5621Hvoi6swIwRdKB6cgZH5DJqkmUJESWIWJGXh7jIsQpFGWDEisVd9HiqNb2cvSJl6YaxJSWrntOIWCcdGEqOpWtUavZVXxshd6rS8KXawBDXlynja6lN432xCoU7m610n42kkWXOsV6iAEL2xCSz/T/rrqPF6q9XzM2lbl6VZhoiHRHkMKZBc5TTbu0bJSTVyiip5jcKVNuTIzWPqwbL6BZ0sdY4wuhRBifJMLfbKbOl3i99D6yHrvFEJYo9ep0GguIrmI55n2iRQ63XLOQ7gW79RBCDy9TQGuvrT037Jz8HgTevrpxUch0/92OahrXcMkISYjQ+gsPcdpQti0iehDVLBkoFvVpkuMSwpkcY+gqmD0Faeu9Q1bAQVoGSFS1jFYedW2no8Ke2qIEUiNIDbIUyXTyQopLaGlBhHC29n0AiHk5dZBCID3s7mwLxXh7/YFA5964CJEXgSP4fLYsq7BR4bY/i3pYHWlTahTeq6B3ylmOcZXRIfUDXZ8piEEGOf/+66Vb5cjNhyweXrKGg57jVhSaTUpZDLRhUNCaG9XFyFIF6xKQiplj4P9uk8/JQWoAi9IUiRLiNS9o+xMtCUhHgrVjKggZLOEGNcQBZUtTxsDYMcstKieeE/nVlY1KbbGaUbMmNiVbrH3gA34lnceRocK6PPz9CjgnAlCuFax1WWEGL/1eK5dIfCclgxvbyzu17VSjPQFBcpFhpD14WUk07tLhFwHr6ejwzSkx4PrxT6unDj0Oq6loMNuaz80Sug1EBhmyj34lpvapr+64FxCOktCYCSWELawzmW4F9tPUjX1MuDhyuqGWW07UzUmOlWC+KERwRUh8t0yxoSI3XFDjM2mTFvGaEK6VnW6kkIIWzTraGeb/mpUmiaXkLq6Mes0AOoInQ/rwhqPyuc2OtiZ0xSjQwUabbrsL6JnvebDR9KQhT6hdYNuwUghhMisYwM5yCVYh95fRYqq3SxiC2ot945Ie1RMO2EUqpGiVH6Oy84OCaE7Mes0gDwnNi9YJDnSJ/uCQ3Zm8AEDl7mGsi02UwlBLou6RGSJ7fXX96gJgYMgSqRAbyEDYh0Jx+uoMBzNO6zjqOy8QtWMsE21YsfVrqWOlW1tFEkRGHJCuFqT6ySESKna05HTu1IlXnLqtiO6T8m1HJaIQR2h+5TGUeSsC7LLnuysR+qFUiTOI7URj+fW0WGaVhW7piFUkQMcO6kqZZ9pI9WkkHoiL3C7ra+QPOXfdqWbr3nPB9vDlLIwyLaOpwoMBUKIRFjnXjjcqI0ChHZJlSQHBqleNyfeuZVVWRetiYAxi7fRzXu2f8u3y6Bv65zUtdU8oyYEdQDGmQIMOIUQ+RJKExkwwltGFDgiRXZfbMJ6YiKHVZhiCWFbx8WY81Spl+2FwKZcY5Up6FxNHich8Fp17oeTh3cz2WZz4FSFxEUKIYKVDfH6LjKEEkGnlqlLPCFEnXVD2ao3DxnyrtVC3TCexOo7jrd2YD2xp1gNngOQZkJ9vjjGkO+qqbg+KBDCtXprvCtGvl1iLKyShCJS9lJjtimpgizM930uxXZiZPgOZ0EqlRpFrRTtIkQZGaYlRL430ahwPkyFYuYbrm4uZ0SNsu1iYpaPysSgK7pMro+YDbQqtlC2lJHQrjVznyriakvWBkMo971QosVxb0PPvVEc4+XLwDGykKSuORGuR8o4C4SKBDw/RptvRZOotN2i+3TcSjEmSL53qqyui71eToxetqfTvnHKNDgGrDsJEdOOXBXqdT0gE0haM1deLXrtbYNmDPozGoN8Ay3bbGajgqvHpirUa6aTDuk9gHxbnzRoxqA/5zE4XM4YumViaBFodWC9ya6g+Q8ZGwL0T9gYHOaDZTsqpOCk/C9BDZox6McSokEzBo0N7DaEaIygcQR9EyH+D3nXi+m16D7CAAAAD3RFWHRDb3B5cmlnaHQAVDUtQ0n2YeOFAAAAAElFTkSuQmCC"
    , ys = ["width", "height"]
    , bs = e("path", {
        fill: "currentColor",
        d: "m245.248 191.488 4.25 3.738L512 457.676l262.502-262.45a38.4 38.4 0 0 1 58.01 49.97l-3.738 4.302L566.324 512l262.45 262.502a38.4 38.4 0 0 1-49.97 58.01l-4.302-3.738L512 566.324l-262.502 262.45a38.4 38.4 0 0 1-58.01-49.97l3.738-4.302L457.676 512l-262.45-262.502a38.4 38.4 0 0 1 49.97-58.01z"
    }, null, -1)
    , As = [bs]
    , Is = ["width", "height"]
    , $s = e("path", {
        fill: "currentColor",
        d: "m245.248 191.488 4.25 3.738L512 457.676l262.502-262.45a38.4 38.4 0 0 1 58.01 49.97l-3.738 4.302L566.324 512l262.45 262.502a38.4 38.4 0 0 1-49.97 58.01l-4.302-3.738L512 566.324l-262.502 262.45a38.4 38.4 0 0 1-58.01-49.97l3.738-4.302L457.676 512l-262.45-262.502a38.4 38.4 0 0 1 49.97-58.01z"
    }, null, -1)
    , ws = [$s];
function Cs(t, n) {
    return t.color || t.tag ? (o(),
        N(Oe(t.color ? t.tag || "span" : t.tag), {
            key: 0,
            style: be(t.normalizedStyle)
        }, {
            default: E(() => [(o(),
                c("svg", {
                    width: t.width || t.size || 16,
                    height: t.height || t.size || 16,
                    class: "icon",
                    viewBox: "0 0 1024 1024"
                }, [...As], 8, ys))]),
            _: 1
        }, 8, ["style"])) : (o(),
            c("svg", {
                key: 1,
                width: t.width || t.size || 16,
                height: t.height || t.size || 16,
                class: "icon",
                viewBox: "0 0 1024 1024"
            }, [...ws], 8, Is))
}
const Ds = {
    name: "iconfont-house-house-close",
    props: {
        size: Number,
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: ""
        },
        tag: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        return {
            normalizedStyle: D(() => {
                const { size: i, color: _, width: m, height: a } = t;
                return {
                    color: _ || void 0,
                    display: "inline-block",
                    height: (a || i || 16) + "px",
                    lineHeight: (a || i || 16) + "px",
                    width: (m || i || 16) + "px",
                    textAlign: "center"
                }
            }
            )
        }
    },
    render: Cs
}
    , Es = ["width", "height"]
    , Ss = e("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "m12.255 2.194 7.783 5.929a.95.95 0 0 1 .374.755v3.577h-2.353V10.01a.95.95 0 0 0-.374-.755l-5.426-4.133a.95.95 0 0 0-1.152.001L5.724 9.25a.95.95 0 0 0-.371.753v7.739c0 .524.425.949.949.949h6.98l.4 2.309H3.949A.95.95 0 0 1 3 20.05V8.879a.95.95 0 0 1 .371-.753l7.731-5.93a.95.95 0 0 1 1.153-.001M23 13.379l-5.531 7.39h-2.085l-1.796-7.373h2.394l.64 3.22c.165.865.269 1.441.31 1.73.041-.086.227-.374.578-.9.35-.525.557-.847.64-.948l2.229-3.119z"
    }, null, -1)
    , Bs = [Ss]
    , Ts = ["width", "height"]
    , Ms = e("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "m12.255 2.194 7.783 5.929a.95.95 0 0 1 .374.755v3.577h-2.353V10.01a.95.95 0 0 0-.374-.755l-5.426-4.133a.95.95 0 0 0-1.152.001L5.724 9.25a.95.95 0 0 0-.371.753v7.739c0 .524.425.949.949.949h6.98l.4 2.309H3.949A.95.95 0 0 1 3 20.05V8.879a.95.95 0 0 1 .371-.753l7.731-5.93a.95.95 0 0 1 1.153-.001M23 13.379l-5.531 7.39h-2.085l-1.796-7.373h2.394l.64 3.22c.165.865.269 1.441.31 1.73.041-.086.227-.374.578-.9.35-.525.557-.847.64-.948l2.229-3.119z"
    }, null, -1)
    , Vs = [Ms];
function Ls(t, n) {
    return t.color || t.tag ? (o(),
        N(Oe(t.color ? t.tag || "span" : t.tag), {
            key: 0,
            style: be(t.normalizedStyle)
        }, {
            default: E(() => [(o(),
                c("svg", {
                    width: t.width || t.size || 16,
                    height: t.height || t.size || 16,
                    viewBox: "0 0 24 24"
                }, [...Bs], 8, Es))]),
            _: 1
        }, 8, ["style"])) : (o(),
            c("svg", {
                key: 1,
                width: t.width || t.size || 16,
                height: t.height || t.size || 16,
                viewBox: "0 0 24 24"
            }, [...Vs], 8, Ts))
}
const zs = {
    name: "iconfont-house-house-hot-house",
    props: {
        size: Number,
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: ""
        },
        tag: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        return {
            normalizedStyle: D(() => {
                const { size: i, color: _, width: m, height: a } = t;
                return {
                    color: _ || void 0,
                    display: "inline-block",
                    height: (a || i || 16) + "px",
                    lineHeight: (a || i || 16) + "px",
                    width: (m || i || 16) + "px",
                    textAlign: "center"
                }
            }
            )
        }
    },
    render: Ls
}
    , Ns = ["width", "height"]
    , Rs = e("defs", null, [e("linearGradient", {
        id: "a",
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
    }, [e("stop", {
        offset: "0%",
        "stop-color": "#FFCD6E"
    }), e("stop", {
        offset: "100%",
        "stop-color": "#FFA600"
    })])], -1)
    , Qs = e("path", {
        fill: "currentColor",
        "fill-rule": "nonzero",
        d: "M3.155 5.921H1.846A1.844 1.844 0 0 0 .007 7.923l.7 7.013c.082.94.882 1.67 1.838 1.67h.61a1.844 1.844 0 0 0 1.846-1.843v-7a1.844 1.844 0 0 0-1.846-1.842m7.941-5.92a1.4 1.4 0 0 0-1.44 1.358l-.01.306c-.053 1.261-.247 2.148-.535 2.627-.314.52-1.082 1.06-1.99 1.486A1.914 1.914 0 0 0 6.004 7.5v7.263c0 1.019.828 1.842 1.846 1.842h7.371c.825 0 1.551-.546 1.776-1.34l1.934-7.014c.332-1.17-.555-2.336-1.779-2.336H13.42l.17-.635c.165-.637.252-1.055.267-1.31.056-.903-.067-1.73-.481-2.417a3.282 3.282 0 0 0-1.92-1.495A1.359 1.359 0 0 0 11.22.01z",
        transform: "translate(3 3.395)"
    }, null, -1)
    , Us = [Rs, Qs]
    , Ps = ["width", "height"]
    , Fs = e("defs", null, [e("linearGradient", {
        id: "a",
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
    }, [e("stop", {
        offset: "0%",
        "stop-color": "#FFCD6E"
    }), e("stop", {
        offset: "100%",
        "stop-color": "#FFA600"
    })])], -1)
    , qs = e("path", {
        fill: "currentColor",
        "fill-rule": "nonzero",
        d: "M3.155 5.921H1.846A1.844 1.844 0 0 0 .007 7.923l.7 7.013c.082.94.882 1.67 1.838 1.67h.61a1.844 1.844 0 0 0 1.846-1.843v-7a1.844 1.844 0 0 0-1.846-1.842m7.941-5.92a1.4 1.4 0 0 0-1.44 1.358l-.01.306c-.053 1.261-.247 2.148-.535 2.627-.314.52-1.082 1.06-1.99 1.486A1.914 1.914 0 0 0 6.004 7.5v7.263c0 1.019.828 1.842 1.846 1.842h7.371c.825 0 1.551-.546 1.776-1.34l1.934-7.014c.332-1.17-.555-2.336-1.779-2.336H13.42l.17-.635c.165-.637.252-1.055.267-1.31.056-.903-.067-1.73-.481-2.417a3.282 3.282 0 0 0-1.92-1.495A1.359 1.359 0 0 0 11.22.01z",
        transform: "translate(3 3.395)"
    }, null, -1)
    , Hs = [Fs, qs];
function Os(t, n) {
    return t.color || t.tag ? (o(),
        N(Oe(t.color ? t.tag || "span" : t.tag), {
            key: 0,
            style: be(t.normalizedStyle)
        }, {
            default: E(() => [(o(),
                c("svg", {
                    width: t.width || t.size || 16,
                    height: t.height || t.size || 16,
                    viewBox: "0 0 24 24"
                }, [...Us], 8, Ns))]),
            _: 1
        }, 8, ["style"])) : (o(),
            c("svg", {
                key: 1,
                width: t.width || t.size || 16,
                height: t.height || t.size || 16,
                viewBox: "0 0 24 24"
            }, [...Hs], 8, Ps))
}
const Ks = {
    name: "iconfont-house-house-like",
    props: {
        size: Number,
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: ""
        },
        tag: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        return {
            normalizedStyle: D(() => {
                const { size: i, color: _, width: m, height: a } = t;
                return {
                    color: _ || void 0,
                    display: "inline-block",
                    height: (a || i || 16) + "px",
                    lineHeight: (a || i || 16) + "px",
                    width: (m || i || 16) + "px",
                    textAlign: "center"
                }
            }
            )
        }
    },
    render: Os
}
    , Gs = ["width", "height"]
    , Ws = e("defs", null, [e("linearGradient", {
        id: "a",
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
    }, [e("stop", {
        offset: "0%",
        "stop-color": "#FFCD6E"
    }), e("stop", {
        offset: "100%",
        "stop-color": "#FFA600"
    })])], -1)
    , xs = e("path", {
        fill: "currentColor",
        "fill-rule": "nonzero",
        d: "M19 2a1 1 0 0 1 1 1v9h2.06a1 1 0 0 1 .705.291l.088.1a1 1 0 0 1-.183 1.402L12.61 21.53a1 1 0 0 1-1.22 0L1.33 13.793A1 1 0 0 1 1.94 12H4V3a1 1 0 0 1 1-1zm-6.696 2a1 1 0 0 0-1 1v.416h-.054l-.18.006C9.335 5.523 8 7.069 8 8.917c0 1.91 1.43 3.5 3.25 3.5.018 0 .036 0 .054-.002v3.001H9.615l-.117.007a1 1 0 0 0 .117 1.994l1.687-.001v.417l.007.117a1 1 0 0 0 1.994-.117v-.417h.062l.18-.005c1.733-.1 3.07-1.647 3.07-3.494 0-1.911-1.43-3.5-3.25-3.5l-.063-.001v-3H15l.117-.006A1 1 0 0 0 15 5.417l-1.697-.001V5l-.006-.117A1 1 0 0 0 12.304 4m1 8.416h.062l.116.007c.616.07 1.134.693 1.134 1.494 0 .85-.585 1.5-1.25 1.5l-.063-.001zm-2-5v3.003l-.054-.002-.116-.007C10.518 10.34 10 9.717 10 8.917c0-.85.584-1.5 1.25-1.5z"
    }, null, -1)
    , Ys = [Ws, xs]
    , js = ["width", "height"]
    , Zs = e("defs", null, [e("linearGradient", {
        id: "a",
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
    }, [e("stop", {
        offset: "0%",
        "stop-color": "#FFCD6E"
    }), e("stop", {
        offset: "100%",
        "stop-color": "#FFA600"
    })])], -1)
    , Js = e("path", {
        fill: "currentColor",
        "fill-rule": "nonzero",
        d: "M19 2a1 1 0 0 1 1 1v9h2.06a1 1 0 0 1 .705.291l.088.1a1 1 0 0 1-.183 1.402L12.61 21.53a1 1 0 0 1-1.22 0L1.33 13.793A1 1 0 0 1 1.94 12H4V3a1 1 0 0 1 1-1zm-6.696 2a1 1 0 0 0-1 1v.416h-.054l-.18.006C9.335 5.523 8 7.069 8 8.917c0 1.91 1.43 3.5 3.25 3.5.018 0 .036 0 .054-.002v3.001H9.615l-.117.007a1 1 0 0 0 .117 1.994l1.687-.001v.417l.007.117a1 1 0 0 0 1.994-.117v-.417h.062l.18-.005c1.733-.1 3.07-1.647 3.07-3.494 0-1.911-1.43-3.5-3.25-3.5l-.063-.001v-3H15l.117-.006A1 1 0 0 0 15 5.417l-1.697-.001V5l-.006-.117A1 1 0 0 0 12.304 4m1 8.416h.062l.116.007c.616.07 1.134.693 1.134 1.494 0 .85-.585 1.5-1.25 1.5l-.063-.001zm-2-5v3.003l-.054-.002-.116-.007C10.518 10.34 10 9.717 10 8.917c0-.85.584-1.5 1.25-1.5z"
    }, null, -1)
    , Xs = [Zs, Js];
function ea(t, n) {
    return t.color || t.tag ? (o(),
        N(Oe(t.color ? t.tag || "span" : t.tag), {
            key: 0,
            style: be(t.normalizedStyle)
        }, {
            default: E(() => [(o(),
                c("svg", {
                    width: t.width || t.size || 16,
                    height: t.height || t.size || 16,
                    viewBox: "0 0 24 24"
                }, [...Ys], 8, Gs))]),
            _: 1
        }, 8, ["style"])) : (o(),
            c("svg", {
                key: 1,
                width: t.width || t.size || 16,
                height: t.height || t.size || 16,
                viewBox: "0 0 24 24"
            }, [...Xs], 8, js))
}
const ta = {
    name: "iconfont-house-house-high-cost-perf",
    props: {
        size: Number,
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: ""
        },
        tag: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        return {
            normalizedStyle: D(() => {
                const { size: i, color: _, width: m, height: a } = t;
                return {
                    color: _ || void 0,
                    display: "inline-block",
                    height: (a || i || 16) + "px",
                    lineHeight: (a || i || 16) + "px",
                    width: (m || i || 16) + "px",
                    textAlign: "center"
                }
            }
            )
        }
    },
    render: ea
}
    , na = "" + new URL("hot-house-header.CG8M4dOu.png", import.meta.url).href
    , oa = "" + new URL("hot-house-header-xs.Dk4z3tpF.png", import.meta.url).href
    , Be = t => (Z("data-v-ca93b2a8"),
        t = t(),
        J(),
        t)
    , sa = {
        class: "content"
    }
    , aa = Be(() => e("h4", null, " 必看好屋是591為廣大購房者誠心推出的一項優質房屋計劃，多項標準為您精選高性價比房屋 ", -1))
    , ia = {
        class: "high-cost-perf"
    }
    , la = {
        class: "icon-wrapper"
    }
    , ca = Be(() => e("aside", null, [e("h5", null, "相同品質，花錢更少"), e("p", null, "同社區、同格局，讓您以最低的價格買到。")], -1))
    , ra = {
        class: "hot"
    }
    , da = {
        class: "icon-wrapper"
    }
    , ua = Be(() => e("aside", null, [e("h5", null, "熱門搶手，更多人看"), e("p", null, "無論您是看屋新手還是專家，讓您第一時間獲取最新 最熱的房源。")], -1))
    , pa = {
        class: "tag"
    }
    , _a = {
        class: "icon-wrapper"
    }
    , ma = Be(() => e("aside", null, [e("h5", null, "找房記得認準【必看好屋】標籤")], -1))
    , fa = {
        key: 0,
        class: "hot-house-modal t5-md-and-up"
    }
    , ha = Be(() => e("img", {
        src: na,
        class: "hot-house-logo"
    }, null, -1))
    , va = {
        key: 1,
        class: "hot-house-modal t5-xs-only"
    }
    , ka = {
        class: "header-wrap"
    }
    , ga = Be(() => e("img", {
        src: oa,
        class: "hot-house-header-logo-xs"
    }, null, -1))
    , ya = Q({
        __name: "HotHouseModal",
        props: {
            type: {
                type: String,
                default: "pc"
            },
            modalValue: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["close"],
        setup(t, { expose: n, emit: i }) {
            const _ = i
                , m = T(!1);
            n({
                show() {
                    m.value = !0
                },
                hide() {
                    m.value = !1
                }
            });
            const [a, l] = tt();
            return (r, u) => {
                const v = ta
                    , d = Ks
                    , p = zs
                    , f = Ds
                    , g = bt;
                return o(),
                    c(B, null, [w(s(a), null, {
                        default: E(() => [e("div", sa, [aa, e("ul", null, [e("li", ia, [e("span", la, [w(v, {
                            size: 24,
                            color: "#e2b163"
                        })]), ca]), e("li", ra, [e("span", da, [w(d, {
                            size: 24,
                            color: "#e2b163"
                        })]), ua]), e("li", pa, [e("span", _a, [w(p, {
                            size: 24,
                            color: "#e2b163"
                        })]), ma])])])]),
                        _: 1
                    }), t.type === "pc" ? (o(),
                        c("section", fa, [ha, w(s(l))])) : (o(),
                            c("section", va, [w(g, {
                                "model-value": s(m),
                                "append-to-body": !1,
                                header: !1,
                                onClose: u[1] || (u[1] = y => _("close"))
                            }, {
                                default: E(() => [e("h4", ka, [ga, w(f, {
                                    color: "#666",
                                    size: 20,
                                    class: "icon-close",
                                    onClick: u[0] || (u[0] = y => _("close"))
                                })]), w(s(l))]),
                                _: 1
                            }, 8, ["model-value"])]))], 64)
            }
        }
    })
    , vt = U(ya, [["__scopeId", "data-v-ca93b2a8"]]);
function ba(t, n = {}) {
    const { leaveTimeout: i = 0, enter: _ = () => { }
        , leave: m = () => { }
    } = n;
    let a = null;
    Xe(t, "mouseenter", () => {
        a && clearTimeout(a),
            _()
    }
    ),
        Xe(t, "mouseleave", () => {
            i ? a = window.setTimeout(() => {
                m()
            }
                , i) : m()
        }
        )
}
const Aa = t => (Z("data-v-67a5e64b"),
    t = t(),
    J(),
    t)
    , Ia = {
        class: "hot-house"
    }
    , $a = Aa(() => e("img", {
        src: gs
    }, null, -1))
    , wa = {
        class: "advantage"
    }
    , Ca = Q({
        __name: "HotHouse",
        props: {
            data: {}
        },
        setup(t) {
            const n = ft(vt, {
                withPlaceholder: !0
            })
                , { Placeholder: i, show: _, hide: m } = n({
                    type: "pc",
                    modalValue: !1
                })
                , a = T();
            ba(a, {
                leaveTimeout: 80,
                enter: _,
                leave: m
            });
            const l = T({
                type: "mobile",
                modalValue: !1
            })
                , u = ft(vt)(l, {
                    emits: {
                        onClose() {
                            u == null || u.exposed.value.hide(),
                                setTimeout(() => {
                                    u == null || u.hide()
                                }
                                    , 200)
                        }
                    }
                });
            function v() {
                u == null || u.show(),
                    setTimeout(() => {
                        u == null || u.exposed.value.show()
                    }
                    )
            }
            return (d, p) => (o(),
                c("div", Ia, [$a, e("i", {
                    ref_key: "ele",
                    ref: a,
                    class: "ic-house house-tips"
                }, [w(s(i))], 512), e("i", {
                    class: "ic-house house-tips mobile",
                    onClick: v
                }), e("ul", wa, [(o(!0),
                    c(B, null, te(d.data, (f, g) => (o(),
                        c("li", {
                            key: g
                        }, b(f == null ? void 0 : f.tag), 1))), 128))])]))
        }
    })
    , e1 = U(Ca, [["__scopeId", "data-v-67a5e64b"]])
    , it = t => (Z("data-v-1bd1ff69"),
        t = t(),
        J(),
        t)
    , Da = {
        class: "land-type-modal"
    }
    , Ea = {
        class: "header"
    }
    , Sa = it(() => e("h1", {
        class: "title"
    }, " 土地類型 ", -1))
    , Ba = it(() => e("p", null, "這裡的土地類型，是根據社會普遍認知所進行的分類", -1))
    , Ta = {
        class: "content"
    }
    , Ma = {
        class: "sub-title"
    }
    , Va = it(() => e("p", {
        class: "footer"
    }, " (詮釋由591整理，僅供參考) ", -1))
    , La = Q({
        __name: "LandTypeModal",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            modelModifiers: {}
        },
        emits: ["update:modelValue"],
        setup(t) {
            const n = ze(t, "modelValue")
                , i = [{
                    title: "住宅用地",
                    value: "通常指專門規劃用於建造住宅建築物的土地(以居住為目的)。"
                }, {
                    title: "建地",
                    value: "通常指可以進行建築物開發和建造的土地。可用於建造各種類型的建築物，包括住宅、商業、工業等不同用途的建築。"
                }, {
                    title: "商業用地",
                    value: "通常指專門規劃用於商業活動的土地。如建築商舖、辦公大樓、餐廳、飯店等商業設施。"
                }, {
                    title: "工業用地",
                    value: "常指專門規劃用於工業生產和相關活動的土地。如建設工廠、倉庫、生產設施等工業設施。"
                }, {
                    title: "農地",
                    value: "專門規劃用於農業生產和相關活動的土地。如種植作物、養殖畜禽等。"
                }, {
                    title: "林地",
                    value: "指專門規劃用於森林保育和相關活動的土地。如森林資源的保護、管理與利用等。"
                }, {
                    title: "山坡地",
                    value: "指地形較陡峭、傾斜度較大的地區。這些地區的土地利用受特殊規劃和管制，旨在保護其生態環境、防止自然災害。"
                }, {
                    title: "休閒用地",
                    value: "指專門規劃用於休閒、娛樂和休閒活動的土地。如公園、遊樂場、運動場所、休閒農場等。"
                }, {
                    title: "道路用地",
                    value: "道路用地是都市更新計畫裡「公共設施用地」其中的一種。因政府財政經費不足，被規劃成道路用地的公共設施用地，出現遲遲沒被徵收的情形。"
                }];
            return (_, m) => {
                const a = De;
                return o(),
                    N(Ht, {
                        to: "body"
                    }, [e("div", Da, [w(a, {
                        modelValue: n.value,
                        "onUpdate:modelValue": m[1] || (m[1] = l => n.value = l),
                        footer: !1,
                        "destroy-on-close": "",
                        "append-to-body": !1,
                        size: ("getDeviceType" in _ ? _.getDeviceType : s(Pe))() === "pc" ? "default" : "small"
                    }, {
                        header: E(() => [e("div", Ea, [Sa, Ba, e("i", {
                            class: "ic-house house-close",
                            onClick: m[0] || (m[0] = l => n.value = !1)
                        })])]),
                        default: E(() => [e("div", Ta, [(o(),
                            c(B, null, te(i, l => (o(),
                                c(B, {
                                    key: l.title
                                }, [e("h2", Ma, b(l.title), 1), e("p", null, b(l.value), 1)], 64))), 64)), Va])]),
                        _: 1
                    }, 8, ["modelValue", "size"])])])
            }
        }
    })
    , za = U(La, [["__scopeId", "data-v-1bd1ff69"]])
    , Na = {
        key: 0,
        class: "tags-container"
    }
    , Ra = {
        key: 0,
        class: "tag-yellow"
    }
    , Qa = ["onClick"]
    , Ua = {
        key: 0,
        class: "ic-house house-tips"
    }
    , Pa = Q({
        __name: "Tags",
        props: {
            data: {}
        },
        setup(t) {
            const n = T(!1);
            function i(_) {
                _ === 999 && (me("出售土地_基本資料_土地類型說明"),
                    n.value = !0)
            }
            return (_, m) => {
                const a = za;
                return _.data.length ? (o(),
                    c("div", Na, [_.data.some(l => l.name === "專任約") ? (o(),
                        c("div", Ra, " 專任約 ")) : I("", !0), (o(!0),
                            c(B, null, te(_.data.filter(l => l.name !== "專任約"), l => (o(),
                                c("div", {
                                    key: l.id,
                                    class: "tag",
                                    onClick: r => i(l.id)
                                }, [S(b(l.name) + " ", 1), l.id === 999 ? (o(),
                                    c("i", Ua)) : I("", !0)], 8, Qa))), 128)), w(a, {
                                        modelValue: s(n),
                                        "onUpdate:modelValue": m[0] || (m[0] = l => pe(n) ? n.value = l : null)
                                    }, null, 8, ["modelValue"])])) : I("", !0)
            }
        }
    })
    , t1 = U(Pa, [["__scopeId", "data-v-7ee12715"]])
    , Nt = t => (Z("data-v-21f92c2d"),
        t = t(),
        J(),
        t)
    , Fa = {
        class: "map-and-traffic-container"
    }
    , qa = {
        class: "title"
    }
    , Ha = Nt(() => e("i", {
        class: "ic-house house-arrow-right"
    }, null, -1))
    , Oa = {
        class: "advantage-info"
    }
    , Ka = ["href"]
    , Ga = Nt(() => e("div", {
        class: "map-tag"
    }, [e("div", {
        class: "map-tag-icon"
    }, [e("i", {
        class: "ic-house house-location-map"
    })]), e("div", null, "地圖")], -1))
    , Wa = {
        class: "address"
    }
    , xa = {
        key: 0,
        class: "traffic-info"
    }
    , Ya = Q({
        __name: "MapAndTraffic",
        props: {
            baseInfo: {},
            mapData: {}
        },
        setup(t) {
            const n = t
                , i = D(() => `https://maps.google.com.tw/maps?f=q&hl=zh-TW&q=${s(n.mapData.address.detail.lat)},${s(n.mapData.address.detail.lng)}&z=17`)
                , _ = D(() => {
                    var a, l;
                    return (a = n.baseInfo) != null && a.trafficAdvantage ? {
                        title: "交通優勢",
                        content: n.baseInfo.trafficAdvantage
                    } : (l = n.baseInfo) != null && l.featureText ? {
                        title: "亮點/特色",
                        content: n.baseInfo.featureText
                    } : {
                        title: "亮點/特色",
                        content: "暫無"
                    }
                }
                )
                , m = pn();
            return (a, l) => {
                var u;
                const r = G("t5-tracker-click");
                return o(),
                    c("section", Fa, [M((o(),
                        c("div", {
                            class: "traffic-advantage",
                            onClick: l[0] || (l[0] = v => s(m)("house-condition"))
                        }, [e("div", qa, [e("span", null, b(s(_).title), 1), Ha]), e("div", Oa, b(s(_).content), 1)])), [[r, `出售土地_土地介紹_${s(_).title}`]]), M((o(),
                            c("a", {
                                class: "map-info",
                                href: s(i),
                                target: "_blank"
                            }, [Ga, e("div", Wa, b((u = a.mapData) == null ? void 0 : u.address.desc), 1), a.mapData.address.station ? (o(),
                                c("div", xa, "距" + b(a.mapData.address.station) + " " + b(a.mapData.address.distance) + "公尺", 1)) : I("", !0)], 8, Ka)), [[r, "房屋地圖_看地址"]])])
            }
        }
    })
    , n1 = U(Ya, [["__scopeId", "data-v-21f92c2d"]])
    , ja = Q({
        __name: "ModuleTitle",
        props: {
            separator: {
                type: Boolean,
                default: !0
            }
        },
        setup(t) {
            return (n, i) => (o(),
                c("h3", {
                    class: j(["title", {
                        separator: t.separator
                    }])
                }, [_t(n.$slots, "default", {}, void 0, !0), _t(n.$slots, "more", {}, void 0, !0)], 2))
        }
    })
    , Qe = U(ja, [["__scopeId", "data-v-4e9999b2"]])
    , Za = {
        class: "content"
    }
    , Ja = {
        class: "facility-item"
    }
    , Xa = {
        class: "faci-name"
    }
    , ei = {
        key: 0,
        class: "cross-line"
    }
    , ti = {
        class: "facility-modal-pc"
    }
    , ni = Q({
        __name: "MoreFacilityModal",
        props: {
            modelValue: {
                type: Boolean
            },
            data: {}
        },
        emits: ["close"],
        setup(t, { emit: n }) {
            const i = t
                , _ = n
                , m = At(i, "modelValue", _)
                , [a, l] = tt();
            return (r, u) => {
                const v = De
                    , d = bt;
                return o(),
                    c(B, null, [w(s(a), null, {
                        default: E(() => [e("div", Za, [(o(!0),
                            c(B, null, te(r.data, (p, f) => (o(),
                                c(B, {
                                    key: p.key
                                }, [e("div", Ja, [e("i", {
                                    class: j(`ic-house house-${p.iconClass || "close"}`)
                                }, null, 2), e("span", Xa, b(p.name), 1)]), f === 14 && r.data.length > 15 ? (o(),
                                    c("div", ei)) : I("", !0)], 64))), 128))])]),
                        _: 1
                    }), e("section", ti, [w(v, {
                        modelValue: s(m),
                        "onUpdate:modelValue": u[0] || (u[0] = p => pe(m) ? m.value = p : null),
                        title: "提供設備",
                        "append-to-body": !1,
                        "modal-class": "facility-modal"
                    }, {
                        default: E(() => [w(s(l))]),
                        _: 1
                    }, 8, ["modelValue"])]), w(d, {
                        "model-value": s(m),
                        "append-to-body": !1,
                        closable: !0,
                        title: "提供設備",
                        class: "facility-modal-mobile",
                        onClose: u[1] || (u[1] = p => _("close"))
                    }, {
                        default: E(() => [w(s(l))]),
                        _: 1
                    }, 8, ["model-value"])], 64)
            }
        }
    })
    , oi = U(ni, [["__scopeId", "data-v-4b4aa075"]])
    , Ye = t => (Z("data-v-8fea98a4"),
        t = t(),
        J(),
        t)
    , si = {
        class: "facility-container"
    }
    , ai = ["data-key"]
    , ii = {
        class: "faci-name"
    }
    , li = {
        class: "number"
    }
    , ci = Ye(() => e("i", {
        class: "plus"
    }, "+", -1))
    , ri = Ye(() => e("span", {
        class: "faci-name"
    }, "查看更多", -1))
    , di = {
        key: 0,
        class: "equipment-title"
    }
    , ui = {
        class: "facility-container"
    }
    , pi = {
        class: "faci-name"
    }
    , _i = {
        class: "facility-consult"
    }
    , mi = Ye(() => e("div", {
        class: "consult-desc"
    }, [e("i", {
        class: "ic-house house-message"
    }), e("span", null, "對此房屋感興趣? 可隨時看房")], -1))
    , fi = {
        class: "consult-btn"
    }
    , hi = Ye(() => e("i", {
        class: "ic-house house-arrow-right"
    }, null, -1))
    , vi = Q({
        __name: "Facility",
        props: {
            data: {},
            linkInfo: {}
        },
        setup(t) {
            const n = t
                , i = Ne("facility")
                , _ = T(n.data.facility)
                , m = T(n.data.handlingEquipment)
                , a = T(null)
                , l = T(new Set([]))
                , r = T(!1)
                , u = T(!1)
                , v = T(1)
                , d = T({
                    top: "0px",
                    left: "0px"
                })
                , p = () => {
                    var g;
                    const f = new IntersectionObserver(y => {
                        y == null || y.forEach(h => {
                            var k, A, $, C;
                            h.isIntersecting ? l.value.add((A = (k = h.target) == null ? void 0 : k.dataset) == null ? void 0 : A.key) : l.value.delete((C = ($ = h.target) == null ? void 0 : $.dataset) == null ? void 0 : C.key)
                        }
                        )
                    }
                    );
                    (g = a.value) == null || g.forEach(y => {
                        f.observe(y)
                    }
                    )
                }
                ;
            return Ce(() => {
                p(),
                    gt(() => l.value.size, () => {
                        var f, g;
                        if (l.value.size < _.value.length) {
                            const y = (f = a.value) == null ? void 0 : f[l.value.size - 1]
                                , h = (((g = a.value) == null ? void 0 : g[0].offsetHeight) || 0) * 2;
                            +((y == null ? void 0 : y.offsetTop) || 0) > h && (r.value = !0,
                                d.value.left = `${(y == null ? void 0 : y.offsetLeft) || 0}px`,
                                d.value.top = `${(y == null ? void 0 : y.offsetTop) || 0}px`,
                                v.value = _.value.length - l.value.size + 1)
                        } else
                            r.value = !1
                    }
                    )
            }
            ),
                (f, g) => {
                    const y = Qe
                        , h = Re
                        , k = oi
                        , A = G("t5-tracker-click");
                    return o(),
                        c(B, null, [s(_).length || s(m).length ? (o(),
                            c("div", {
                                key: 0,
                                ref_key: "container",
                                ref: i,
                                class: "facility"
                            }, [s(_).length ? (o(),
                                c(B, {
                                    key: 0
                                }, [w(y, null, {
                                    default: E(() => [S("提供設備")]),
                                    _: 1
                                }), e("div", si, [(o(!0),
                                    c(B, null, te(s(_), $ => (o(),
                                        c("div", {
                                            key: $.key,
                                            ref_for: !0,
                                            ref_key: "facilityItemRefs",
                                            ref: a,
                                            class: "facility-item",
                                            "data-key": $.key
                                        }, [e("i", {
                                            class: j(`ic-house house-${$.iconClass || "close"}`)
                                        }, null, 2), e("span", ii, b($.name), 1)], 8, ai))), 128)), s(r) ? M((o(),
                                            c("div", {
                                                key: 0,
                                                class: "facility-item view-more",
                                                style: be(s(d)),
                                                onClick: g[0] || (g[0] = $ => u.value = !0)
                                            }, [e("span", li, [S(b(s(v)) + " ", 1), ci]), ri], 4)), [[A, "提供設備_查看更多"]]) : I("", !0)])], 64)) : I("", !0), s(m).length ? (o(),
                                                c(B, {
                                                    key: 1
                                                }, [s(_).length ? (o(),
                                                    c("h4", di, " 裝卸設備 ")) : (o(),
                                                        N(y, {
                                                            key: 1
                                                        }, {
                                                            default: E(() => [S(" 裝卸設備 ")]),
                                                            _: 1
                                                        })), e("div", ui, [(o(!0),
                                                            c(B, null, te(s(m), $ => (o(),
                                                                c("div", {
                                                                    key: $.key,
                                                                    ref_for: !0,
                                                                    ref_key: "facilityItemRefs",
                                                                    ref: a,
                                                                    class: "facility-item"
                                                                }, [e("i", {
                                                                    class: j(`ic-house house-${$.iconClass || "close"}`)
                                                                }, null, 2), e("span", pi, b($.name), 1)]))), 128))])], 64)) : I("", !0), e("div", _i, [mi, w(h, {
                                                                    display: "inline-block",
                                                                    "link-info": f.linkInfo
                                                                }, {
                                                                    default: E(() => [M((o(),
                                                                        c("span", fi, [S(" 我要看房 "), hi])), [[A, "提供設備_我要看房"]])]),
                                                                    _: 1
                                                                }, 8, ["link-info"])])], 512)) : I("", !0), w(k, {
                                                                    modelValue: s(u),
                                                                    "onUpdate:modelValue": g[1] || (g[1] = $ => pe(u) ? u.value = $ : null),
                                                                    data: s(_),
                                                                    onClose: g[2] || (g[2] = $ => u.value = !1)
                                                                }, null, 8, ["modelValue", "data"])], 64)
                }
        }
    })
    , o1 = U(vi, [["__scopeId", "data-v-8fea98a4"]])
    , ki = {
        class: "house-condition-header"
    }
    , gi = {
        class: "house-condition-content"
    }
    , yi = ["innerHTML"]
    , bi = {
        key: 0,
        class: "read-more"
    }
    , Ai = {
        key: 0,
        class: "white-block"
    }
    , Ii = {
        class: "contact-action-mobile"
    }
    , $i = Q({
        __name: "HouseCondition",
        props: {
            data: {},
            isOnline: {
                type: Boolean
            }
        },
        setup(t) {
            const n = t
                , i = D(() => {
                    var h;
                    return (h = n.data) == null ? void 0 : h.linkInfo
                }
                )
                , _ = D(() => {
                    var h;
                    return (h = n.data) == null ? void 0 : h.basicData
                }
                )
                , m = D(() => {
                    var h;
                    return (h = n.data) == null ? void 0 : h.baseInfo
                }
                )
                , a = Pe()
                , l = D(() => {
                    var h, k;
                    return a === "pc" ? (h = n.data) == null ? void 0 : h.remark : (k = n.data) == null ? void 0 : k.remark.replace(/\r\n/g, "<br/>")
                }
                )
                , r = T()
                , u = T(!1)
                , v = D(() => _.value.kind === 11 ? 750 : 250)
                , d = D(() => r.value && r.value.offsetHeight > v.value)
                , p = Ne("house-condition")
                , f = D(() => +n.data.linkInfo.role == 3)
                , g = () => {
                    var k, A, $;
                    u.value = !u.value;
                    const h = (((A = (k = p.value) == null ? void 0 : k.getBoundingClientRect()) == null ? void 0 : A.top) || 0) < 1;
                    !u.value && h && (($ = p.value) == null || $.scrollIntoView())
                }
                , y = D(() => [7, 11].includes(n.data.basicData.kind) ? `${n.data.basicData.kindStr}介紹` : "屋況介紹");
            return (h, k) => {
                const A = Qe
                    , $ = Lt
                    , C = Tt
                    , L = ye
                    , P = Re
                    , Y = G("t5-tracker-click");
                return o(),
                    c("div", {
                        ref_key: "container",
                        ref: p,
                        class: "house-condition"
                    }, [w(A, null, {
                        default: E(() => [S(b(s(y)), 1)]),
                        _: 1
                    }), e("div", ki, [w($, {
                        "link-info": s(i),
                        "is-online": h.isOnline,
                        "kind-str": h.data.basicData.kindStr
                    }, null, 8, ["link-info", "is-online", "kind-str"]), s(i).dealTime ? I("", !0) : (o(),
                        N(C, {
                            key: 0,
                            "link-info": s(i),
                            "position-ga-text": s(y),
                            "basic-data": s(_),
                            "base-info": s(m)
                        }, null, 8, ["link-info", "position-ga-text", "basic-data", "base-info"]))]), e("div", gi, [e("div", {
                            ref_key: "articleRef",
                            ref: r,
                            class: j(["article", {
                                more: s(u),
                                ground: s(_).kind === 11
                            }]),
                            innerHTML: s(l) || "暫未添加說明"
                        }, null, 10, yi), s(d) ? (o(),
                            c("div", bi, [M((o(),
                                N(L, {
                                    class: "read-more-btn",
                                    line: "",
                                    theme: "info",
                                    size: "large",
                                    onClick: g
                                }, {
                                    default: E(() => [S(b(s(u) ? "收起" : "查看全部"), 1)]),
                                    _: 1
                                })), [[Y, `${s(y)}_查看全部`]])])) : I("", !0)]), s(d) ? (o(),
                                    c("div", Ai)) : I("", !0), s(a) !== "pc" ? (o(),
                                        N(P, {
                                            key: 1,
                                            "link-info": s(i)
                                        }, {
                                            default: E(() => [e("div", Ii, [M((o(),
                                                N(L, {
                                                    line: "",
                                                    theme: "info",
                                                    size: "large"
                                                }, {
                                                    default: E(() => [S(b(s(f) ? `幫我找相似${s(_).kind === 11 ? "土地" : "房源"}` : "我還想知道更多詳情"), 1)]),
                                                    _: 1
                                                })), [[Y, `${s(y)}_${s(f) ? `幫我找相似${s(_).kind === 11 ? "土地" : "房源"}` : "我還想知道更多詳情"}`]])])]),
                                            _: 1
                                        }, 8, ["link-info"])) : I("", !0)], 512)
            }
        }
    })
    , s1 = U($i, [["__scopeId", "data-v-d0543abe"]])
    , _e = t => (Z("data-v-0eddf9ca"),
        t = t(),
        J(),
        t)
    , wi = _e(() => e("div", {
        class: "bg"
    }, null, -1))
    , Ci = {
        class: "business-circle-con"
    }
    , Di = ["href"]
    , Ei = _e(() => e("i", {
        class: "ic-house house-arrow-right"
    }, null, -1))
    , Si = {
        class: "desc"
    }
    , Bi = {
        class: "detail"
    }
    , Ti = _e(() => e("h4", null, "辦公行情", -1))
    , Mi = {
        class: "detail-price"
    }
    , Vi = ["href"]
    , Li = {
        class: "price"
    }
    , zi = _e(() => e("span", {
        class: "unit"
    }, "萬/坪", -1))
    , Ni = _e(() => e("span", {
        class: "des"
    }, " 成交均價 ", -1))
    , Ri = ["href"]
    , Qi = {
        class: "num"
    }
    , Ui = _e(() => e("span", null, [S("筆實價登錄"), e("i", {
        class: "ic-house house-arrow-right"
    })], -1))
    , Pi = {
        class: "detail-price"
    }
    , Fi = ["href"]
    , qi = {
        class: "price"
    }
    , Hi = _e(() => e("span", {
        class: "unit"
    }, "萬/坪", -1))
    , Oi = {
        class: "des"
    }
    , Ki = ["href"]
    , Gi = {
        class: "num"
    }
    , Wi = _e(() => e("span", null, [S("筆在售物件"), e("i", {
        class: "ic-house house-arrow-right"
    })], -1))
    , xi = {
        class: "detail-price"
    }
    , Yi = ["href"]
    , ji = {
        class: "price"
    }
    , Zi = _e(() => e("span", {
        class: "unit"
    }, "元/坪/月", -1))
    , Ji = {
        class: "des"
    }
    , Xi = ["href"]
    , el = {
        class: "num"
    }
    , tl = _e(() => e("span", null, [S("筆在租物件"), e("i", {
        class: "ic-house house-arrow-right"
    })], -1))
    , nl = Q({
        __name: "Circle",
        props: {
            data: {}
        },
        setup(t) {
            const n = Ne("business-circle");
            function i(a) {
                return a > 0 ? "red" : a < 0 ? "green" : "blue"
            }
            function _(a) {
                let l = "";
                return a === 0 ? l = "-持平" : a > 0 ? l = `+${a}%` : l = `${a}%`,
                    l
            }
            function m(a) {
                return +(a || 0) > 999 ? "999+" : a
            }
            return (a, l) => {
                var v, d, p, f, g, y, h, k, A, $;
                const r = Qe
                    , u = G("t5-tracker-click");
                return a.data.id ? (o(),
                    c("div", {
                        key: 0,
                        ref_key: "container",
                        ref: n,
                        class: "business-circle"
                    }, [wi, e("div", Ci, [w(r, null, {
                        more: E(() => [M((o(),
                            c("a", {
                                href: a.data.link,
                                class: "more",
                                target: "_blank"
                            }, [S("查看完整解析"), Ei], 8, Di)), [[u, "商圈解析_查看完整解析"]])]),
                        default: E(() => [S(" 所在商圈 : " + b(a.data.name) + " ", 1)]),
                        _: 1
                    }), e("p", Si, b(a.data.desc), 1), e("div", Bi, [Ti, e("ul", null, [e("li", null, [e("p", Mi, [M((o(),
                        c("a", {
                            href: `${a.data.link}&menu=07`,
                            target: "_blank"
                        }, [e("span", Li, b((v = a.data.market) == null ? void 0 : v.market_avg), 1), zi], 8, Vi)), [[u, "商圈解析_成交均價"]]), Ni]), M((o(),
                            c("a", {
                                class: "detail-count",
                                href: `${a.data.link}&menu=07`,
                                target: "_blank"
                            }, [e("span", Qi, b(m((d = a.data.market) == null ? void 0 : d.market_total)), 1), Ui], 8, Ri)), [[u, "商圈解析_X筆實價登錄"]])]), e("li", null, [e("p", Pi, [M((o(),
                                c("a", {
                                    href: `${a.data.link}&menu=06`,
                                    target: "_blank"
                                }, [e("span", qi, b((p = a.data.market) == null ? void 0 : p.sale_avg), 1), Hi], 8, Fi)), [[u, "商圈解析_平均售價"]]), e("span", Oi, [S(" 平均售價 "), e("em", {
                                    class: j(["trend", i(+((f = a.data.market) == null ? void 0 : f.sale_avg_trend))])
                                }, b(_(+((g = a.data.market) == null ? void 0 : g.sale_avg_trend))), 3)])]), M((o(),
                                    c("a", {
                                        class: "detail-count",
                                        href: `${a.data.link}&menu=06`,
                                        target: "_blank"
                                    }, [e("span", Gi, b(m((y = a.data.market) == null ? void 0 : y.sale_total)), 1), Wi], 8, Ki)), [[u, "商圈解析_X筆在售物件"]])]), e("li", null, [e("p", xi, [M((o(),
                                        c("a", {
                                            href: `${a.data.link}&menu=06`,
                                            target: "_blank"
                                        }, [e("span", ji, b((h = a.data.market) == null ? void 0 : h.rent_avg), 1), Zi], 8, Yi)), [[u, "商圈解析_平均租金"]]), e("span", Ji, [S(" 平均租金 "), e("em", {
                                            class: j(["trend", i(+((k = a.data.market) == null ? void 0 : k.rent_avg_trend))])
                                        }, b(_(+((A = a.data.market) == null ? void 0 : A.rent_avg_trend))), 3)])]), M((o(),
                                            c("a", {
                                                class: "detail-count",
                                                href: `${a.data.link}&menu=06`,
                                                target: "_blank"
                                            }, [e("span", el, b(m(($ = a.data.market) == null ? void 0 : $.rent_total)), 1), tl], 8, Xi)), [[u, "商圈解析_X筆在租物件"]])])])])])], 512)) : I("", !0)
            }
        }
    })
    , a1 = U(nl, [["__scopeId", "data-v-0eddf9ca"]])
    , Ue = t => (Z("data-v-f77926dc"),
        t = t(),
        J(),
        t)
    , ol = {
        class: "contact"
    }
    , sl = {
        class: "contact-avatar"
    }
    , al = {
        class: "contact-info"
    }
    , il = {
        class: "base-info-pc"
    }
    , ll = {
        class: "name"
    }
    , cl = {
        key: 0,
        class: "is-recmoney"
    }
    , rl = {
        key: 1
    }
    , dl = {
        key: 2,
        class: "is-online"
    }
    , ul = {
        class: "base-info-mobile"
    }
    , pl = Ue(() => e("em", null, null, -1))
    , _l = {
        class: "econ-text"
    }
    , ml = {
        class: "company-info"
    }
    , fl = {
        key: 0
    }
    , hl = {
        class: "company-econ"
    }
    , vl = {
        key: 0,
        class: "econ-name"
    }
    , kl = Ue(() => e("span", {
        class: "company-detail"
    }, "詳情", -1))
    , gl = {
        key: 0
    }
    , yl = Ue(() => e("span", null, "公司：", -1))
    , bl = {
        key: 1
    }
    , Al = Ue(() => e("span", null, "分公司：", -1))
    , Il = {
        key: 1
    }
    , $l = Ue(() => e("span", null, "經紀業：", -1))
    , wl = {
        key: 2
    }
    , Cl = Q({
        __name: "ContactInfoCard",
        props: {
            linkInfo: {},
            isOnline: {
                type: Boolean
            },
            kindStr: {}
        },
        setup(t) {
            var v;
            const n = t
                , { isMobile: i } = he()
                , { error: _ } = et({
                    src: (v = n.linkInfo) == null ? void 0 : v.avatar
                })
                , m = D(() => {
                    var d;
                    return _.value ? xe : (d = n.linkInfo) == null ? void 0 : d.avatar
                }
                )
                , a = D(() => {
                    var d, p;
                    return (d = n.linkInfo) != null && d.shop_id ? `${ae.www}/broker${(p = n.linkInfo) == null ? void 0 : p.shop_id}` : "javascript:;"
                }
                )
                , l = D(() => +n.linkInfo.role == 3)
                , r = D(() => i ? "click" : "hover")
                , u = D(() => {
                    var p;
                    const d = {
                        content: ((p = n.linkInfo) == null ? void 0 : p.approveStatus) === 1 ? "已認證" : "未認證",
                        trigger: r.value,
                        placement: "top"
                    };
                    return i ? null : d
                }
                );
            return (d, p) => {
                var k, A, $, C, L, P, Y, R, ne, x, ie, le, H, se, ce, re, O;
                const f = Ee
                    , g = St
                    , y = yt
                    , h = G("t5-tracker-click");
                return o(),
                    c("section", ol, [e("div", sl, [w(f, {
                        src: s(m),
                        placeholder: "avatar",
                        alt: ""
                    }, null, 8, ["src"])]), e("div", al, [e("p", il, [e("span", ll, [e("em", null, b((k = d.linkInfo) == null ? void 0 : k.identity) + ":", 1), S(" " + b(s($e)((A = d.linkInfo) == null ? void 0 : A.linkman, 3)), 1)]), s(l) ? (o(),
                        c(B, {
                            key: 0
                        }, [(($ = d.linkInfo) == null ? void 0 : $.isServiceFee) === 1 ? (o(),
                            c("span", cl, "(" + b((C = d.linkInfo) == null ? void 0 : C.isrecmoney) + ")", 1)) : I("", !0), w(g, {
                                type: "profession",
                                "is-active": ((L = d.linkInfo) == null ? void 0 : L.approveStatus) === 1,
                                "tooltip-config": s(u),
                                style: {
                                    marginLeft: "2px"
                                }
                            }, null, 8, ["is-active", "tooltip-config"]), M(w(g, {
                                class: "shop",
                                type: "shop",
                                tag: "a",
                                href: s(a),
                                target: "_blank",
                                "is-active": ((P = d.linkInfo) == null ? void 0 : P.shop_open) === 1,
                                style: {
                                    marginLeft: "2px"
                                },
                                title: "店鋪"
                            }, null, 8, ["href", "is-active"]), [[h, "聯繫卡片_店鋪ICON"]])], 64)) : I("", !0), d.linkInfo.role === 1 && ((Y = d.linkInfo) != null && Y.warnmsg) ? (o(),
                                c("span", rl, "(仲介勿擾)")) : I("", !0), d.isOnline ? (o(),
                                    c("span", dl, "當前在線")) : I("", !0)]), e("div", ul, [e("p", null, [e("span", null, b((R = d.linkInfo) == null ? void 0 : R.identity), 1), ((ne = d.linkInfo) == null ? void 0 : ne.isServiceFee) === 1 ? (o(),
                                        c(B, {
                                            key: 0
                                        }, [pl, e("span", null, b((x = d.linkInfo) == null ? void 0 : x.isrecmoney), 1)], 64)) : I("", !0)]), e("p", _l, b(!d.linkInfo.hidCompany && d.linkInfo.companyname || ((ie = d.linkInfo) == null ? void 0 : ie.econName)), 1)]), e("div", ml, [s(l) ? (o(),
                                            c(B, {
                                                key: 0
                                            }, [e("p", null, [(le = d.linkInfo) != null && le.experience_time ? (o(),
                                                c("span", fl, b((H = d.linkInfo) == null ? void 0 : H.experience_time) + ", ", 1)) : I("", !0), S(" " + b((se = d.linkInfo) == null ? void 0 : se.join_time), 1)]), e("p", hl, [(ce = d.linkInfo) != null && ce.econName || (re = d.linkInfo) != null && re.companyname ? (o(),
                                                    c("span", vl, b(s($e)(!d.linkInfo.hidCompany && d.linkInfo.companyname || d.linkInfo.econName, 10)), 1)) : I("", !0), d.linkInfo.econName ? (o(),
                                                        N(y, {
                                                            key: 1,
                                                            placement: "top"
                                                        }, {
                                                            content: E(() => [d.linkInfo.hidCompany ? I("", !0) : (o(),
                                                                c(B, {
                                                                    key: 0
                                                                }, [d.linkInfo.companyname ? (o(),
                                                                    c("p", gl, [yl, S(" " + b(d.linkInfo.companyname), 1)])) : I("", !0), d.linkInfo.subcompanyname ? (o(),
                                                                        c("p", bl, [Al, S(" " + b(d.linkInfo.subcompanyname), 1)])) : I("", !0)], 64)), d.linkInfo.econName ? (o(),
                                                                            c("p", Il, [$l, S(" " + b(d.linkInfo.econName), 1)])) : I("", !0), d.linkInfo.certificateNum ? (o(),
                                                                                c("p", wl, " 證書字號：" + b(d.linkInfo.certificateNum), 1)) : I("", !0)]),
                                                            default: E(() => [kl]),
                                                            _: 1
                                                        })) : I("", !0)])], 64)) : (o(),
                                                            c(B, {
                                                                key: 1
                                                            }, [S(b((O = d.linkInfo) == null ? void 0 : O.join_time), 1)], 64))])])])
            }
        }
    })
    , Dl = U(Cl, [["__scopeId", "data-v-f77926dc"]])
    , El = t => (Z("data-v-75165726"),
        t = t(),
        J(),
        t)
    , Sl = El(() => e("div", {
        class: "container"
    }, [e("div", {
        class: "tips"
    }, [e("div", {
        class: "bg"
    }), S(" 0986電話轉接服務，是便於商家為買家提供更好服務所推出的一項業務，不會產生額外的費用，請放心撥打！ ")]), e("ul", {
        class: "content"
    }, [e("li", null, [e("span", {
        class: "title"
    }, "1.撥打資費："), e("p", {
        class: "desc"
    }, " 0.11元/秒，按秒計算，部分內外網。 ")]), e("li", null, [e("span", {
        class: "title"
    }, "2.撥打限制："), e("p", {
        class: "desc"
    }, [e("span", {
        class: "symbol"
    }, "*"), S("094開頭的號碼 "), e("span", {
        class: "symbol"
    }, "*"), S("公司節費電話 ")])]), e("li", null, [e("span", {
        class: "title"
    }, "3.您撥打使用轉接號碼服務或使用轉號碼服務時："), e("p", {
        class: "desc"
    }, " 依據【個人資料保護法】及相關法令規範，向特定目的蒐集您的個人資料，所需個人資料蒐集類別包括連絡電話號碼等。 本公司對您的個人資料僅於因本次特定目的所生之各業務事項運作期間及範圍內，於中華民國境內以書面、電子、電話、網際網路或其他合理方式利用， 待年限到期將統一銷毀，您可向本公司行使之個資權利包括:查詢、閱覽、複製、補充、更正、處理、利用及冊除，隨時可向本公司出申請，我們電話02-2999-5691， 當您撥打使用轉接號碼服務爱，即視同已充分獲知且已瞭解上述告 ")])])], -1))
    , Bl = {
        class: "dialing-modal-pc"
    }
    , Tl = Q({
        __name: "DialingExplainModal",
        props: {
            modelValue: {
                type: Boolean
            }
        },
        emits: ["close"],
        setup(t, { emit: n }) {
            const m = At(t, "modelValue", n)
                , [a, l] = tt();
            return (r, u) => {
                const v = De;
                return o(),
                    c(B, null, [w(s(a), null, {
                        default: E(() => [Sl]),
                        _: 1
                    }), e("section", Bl, [w(v, {
                        modelValue: s(m),
                        "onUpdate:modelValue": u[0] || (u[0] = d => pe(m) ? m.value = d : null),
                        title: "電話撥打說明",
                        "modal-class": "dialing-modal",
                        footer: !1
                    }, {
                        default: E(() => [w(s(l))]),
                        _: 1
                    }, 8, ["modelValue"])])], 64)
            }
        }
    })
    , Ml = U(Tl, [["__scopeId", "data-v-75165726"]])
    , Vl = It("business-sale-detail", () => {
        const t = $t()
            , n = Ot()
            , i = Kt()
            , _ = T({})
            , m = T({})
            , a = T({})
            , l = T({})
            , r = T([])
            , u = T()
            , v = T([])
            , d = T(!1);
        async function p() {
            var Y;
            const k = ge()
                , A = D(() => k.params.id)
                , $ = wt()
                , C = de();
            ($.isLogin || $.isAdmin) && Object.assign(C, {
                "user-id": $.userId,
                "admin-id": $.adminId
            });
            const L = await Me(i.saleDetail, {
                headers: C,
                params: {
                    id: A.value
                },
                transform: gn
            }, "$qRlCzADS01");
            fn(L);
            const P = L.data.value;
            if ((P == null ? void 0 : P.status) === 1) {
                _.value = P.data;
                const R = Gt();
                R.firstGAText = P.data.basicData.kindStr,
                    R.isWareOwner = !!P.data.baseInfo.endTime,
                    (Y = window == null ? void 0 : window.dataLayer) == null || Y.push({
                        kind_name: P.data.basicData.kindStr
                    })
            }
        }
        async function f() {
            var $;
            if (!(($ = _.value) != null && $.linkInfo))
                return;
            const { data: k, execute: A } = await Me(t.getImStatus, {
                headers: de(),
                query: {
                    uid: _.value.linkInfo.imUid
                }
            }, "$WCnqqDbWMN");
            A().then(() => {
                var C, L, P;
                ((C = s(k)) == null ? void 0 : C.status) === 1 && (d.value = ((P = (L = s(k)) == null ? void 0 : L.data) == null ? void 0 : P.online) || !1)
            }
            )
        }
        async function g() {
            const k = ge()
                , A = D(() => k.params.id)
                , C = (await Me(n.businessAlbumData, {
                    headers: de(),
                    params: {
                        id: A.value,
                        type: 2
                    }
                }, "$GKytPtHwlz")).data.value;
            (C == null ? void 0 : C.status) === 1 && (m.value = C.data)
        }
        async function y() {
            const k = ge()
                , A = D(() => k.params.id)
                , C = (await Me(i.wareCircle, {
                    headers: de(),
                    params: {
                        post_id: A.value,
                        type: 2,
                        market: 1
                    }
                }, "$C3Mhnzd6VK")).data.value;
            (C == null ? void 0 : C.status) === 1 && (a.value = C.data)
        }
        async function h(k = 5, A = 1) {
            const C = (await Me(i.warePriceMarket, {
                headers: de(),
                params: {
                    kind: k,
                    region_id: A
                }
            }, "$Q8gv5WPAe1")).data.value;
            (C == null ? void 0 : C.status) === 1 && (l.value = C.data)
        }
        return {
            detailInfo: _,
            albumInfo: m,
            circle: a,
            priceMarket: l,
            isOnline: d,
            trendPriceAvg: v,
            trendPriceStatistic: r,
            trendPriceStatisticDate: u,
            getInfo: p,
            getImStatus: f,
            getAlbumInfo: g,
            getCircle: y,
            getPriceMarket: h
        }
    }
    )
    , Te = It("appointment", () => {
        const n = $t()
            , i = Vl()
            , _ = wt()
            , m = D(() => {
                const V = i.detailInfo.linkInfo;
                return `${V == null ? void 0 : V.identity}${V == null ? void 0 : V.linkman}`
            }
            )
            , a = D(() => {
                var V, F;
                return ((F = (V = i == null ? void 0 : i.detailInfo) == null ? void 0 : V.linkInfo) == null ? void 0 : F.identity) || ""
            }
            )
            , l = T({
                id: "",
                name: "",
                sex: 0,
                mobile: "",
                status: 0,
                simpleDateTxt: "",
                dateTxt: "",
                date_list: []
            })
            , r = D(() => l.value.status === 1)
            , u = D(() => l.value.dateTxt === "日期待定")
            , v = T([])
            , d = {
                name: "",
                mobile: "",
                sex: 0,
                code: "",
                date_times: [],
                agree: !0
            }
            , p = T({
                ...d
            })
            , f = D(() => l.value.mobile.replace(/^(\d{3})\d{4}(\d{3})$/, "$1****$2"))
            , g = T([])
            , y = T(!1)
            , h = T(!1)
            , k = T(!1)
            , A = T()
            , $ = T(!1)
            , C = async (V = !1) => {
                var q, z;
                const F = await $fetch(n.getReservationInfo, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        ...Ie(),
                        ...de()
                    },
                    query: {
                        source_type: 2,
                        source_id: (q = i.detailInfo.basicData) == null ? void 0 : q.id
                    }
                });
                (F == null ? void 0 : F.status) === 1 && (l.value = F == null ? void 0 : F.data,
                    P(((z = F == null ? void 0 : F.data) == null ? void 0 : z.date_list) || []),
                    Y(),
                    V && me(`預約帶看_${l.value.status === 1 ? "已預約" : "未預約"}_曝光`))
            }
            , L = Wt(async () => {
                var F;
                if (H()) {
                    const q = await $fetch(n.checkReservationMobile, {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            ...Ie(),
                            ...de()
                        },
                        query: {
                            mobile: p.value.mobile
                        }
                    });
                    y.value = (q == null ? void 0 : q.status) === 1 && ((F = q == null ? void 0 : q.data) == null ? void 0 : F.valid)
                }
            }
                , 200);
        function P(V) {
            const F = []
                , q = V.map(z => (z.check = z.selected,
                    z.selected && !z.expired && F.push(z.time),
                    z));
            v.value = q,
                g.value = F
        }
        function Y() {
            if (p.value = {
                ...d
            },
                y.value = !1,
                $.value = !1,
                p.value.date_times = g.value,
                r.value) {
                p.value.agree = !0,
                    y.value = !0;
                return
            }
            if (!r.value && l.value.mobile) {
                p.value.mobile = l.value.mobile,
                    p.value.name = l.value.name,
                    p.value.sex = l.value.sex,
                    $.value = !0,
                    L();
                return
            }
            !r.value && !l.value.mobile && _.isLogin && (p.value.name = _.realName,
                p.value.mobile = _.mobile,
                p.value.sex = +_.sex,
                $.value = !0,
                L())
        }
        function R() {
            var V;
            (V = A.value) == null || V.stop(),
                k.value = !1,
                A.value = void 0
        }
        function ne() {
            var V;
            if (!k.value) {
                if (!H()) {
                    W("請填寫正確手機號");
                    return
                }
                A.value = _n({
                    seconds: 90
                }, {
                    immediate: !1,
                    format: F => `${F.timestamp / 1e3}s`,
                    onStart: () => {
                        k.value = !0
                    }
                    ,
                    onStop: () => {
                        k.value = !1
                    }
                }),
                    A.value.resume(),
                    $fetch(n.sendReservationMobileCode, {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            ...Ie(),
                            ...de()
                        },
                        body: {
                            mobile: p.value.mobile,
                            source_type: 2,
                            source_id: (V = i.detailInfo.basicData) == null ? void 0 : V.id
                        }
                    })
            }
        }
        function x(V) {
            const F = p.value[V];
            /\D/g.test(F) && (p.value[V] = F.replace(/\D/g, ""))
        }
        function ie() {
            let V = !0;
            return r.value || (V = le()),
                V = V && se(),
                V = V && ce(),
                V
        }
        function le() {
            return p.value.name ? p.value.sex ? H() ? !y.value && !p.value.code ? (W("請填寫驗證碼"),
                !1) : !0 : (W("請填寫正確手機號"),
                    !1) : (W("請選擇性別"),
                        !1) : (W("請填寫姓名"),
                            !1)
        }
        function H() {
            return !(!p.value.mobile || p.value.mobile.length !== 10 || !xt(String(p.value.mobile)))
        }
        function se() {
            if (p.value.date_times.length === 0)
                return W("請選擇預約日期"),
                    !1;
            if (r.value) {
                const V = p.value.date_times;
                if (V.sort(),
                    V.toString() === g.value.toString())
                    return W("請勿重複預約"),
                        !1
            }
            return !0
        }
        function ce() {
            return p.value.agree ? !0 : (W("請同意預約條款"),
                !1)
        }
        function re() {
            const V = p.value.name;
            p.value.name = V.replace(/[^\u4E00-\u9FA5]/g, "")
        }
        function O() {
            x("mobile"),
                L()
        }
        async function X() {
            var q;
            let V = !1;
            const F = await $fetch(n.cancelReservation, {
                method: "POST",
                credentials: "include",
                headers: {
                    ...Ie(),
                    ...de()
                },
                body: {
                    id: l.value.id,
                    source_type: 2,
                    source_id: (q = i.detailInfo.basicData) == null ? void 0 : q.id
                }
            });
            return (F == null ? void 0 : F.status) === 1 ? (W("取消成功"),
                C(),
                V = !0) : W((F == null ? void 0 : F.msg) || "取消失敗"),
                new Promise(z => {
                    V && z()
                }
                )
        }
        async function oe() {
            var q, z;
            let V = !1;
            if (h.value = !0,
                ie())
                if (r.value) {
                    const K = await $fetch(n.updateReservation, {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            ...Ie(),
                            ...de()
                        },
                        body: {
                            id: l.value.id,
                            source_type: 2,
                            source_id: (q = i.detailInfo.basicData) == null ? void 0 : q.id,
                            date_times: p.value.date_times
                        }
                    });
                    (K == null ? void 0 : K.status) === 1 ? (W("修改成功"),
                        C(),
                        V = !0) : W((K == null ? void 0 : K.msg) || "修改失敗")
                } else {
                    const K = await $fetch(n.createReservation, {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            ...Ie(),
                            ...de()
                        },
                        body: {
                            source_type: 2,
                            source_id: (z = i.detailInfo.basicData) == null ? void 0 : z.id,
                            ...p.value
                        }
                    });
                    (K == null ? void 0 : K.status) === 1 ? (W("操作成功"),
                        C(),
                        V = !0,
                        R()) : W((K == null ? void 0 : K.msg) || "操作失敗")
                }
            return h.value = !1,
                new Promise(K => {
                    V && K()
                }
                )
        }
        function W(V) {
            He({
                message: V,
                center: !0
            })
        }
        return {
            UNCERTAIN_DATE: 9999999999,
            isEdit: r,
            isUncertain: u,
            linkName: m,
            identity: a,
            info: l,
            dateOptions: v,
            mobile: f,
            form: p,
            submitCancel: X,
            showCountdown: k,
            countdown: A,
            sendVerifyCode: ne,
            isPass: y,
            getInfo: C,
            submit: oe,
            formatNumber: x,
            submitLoading: h,
            handleMobileInput: O,
            isPrefill: $,
            handleNameInput: re,
            stopCountdown: R
        }
    }
    )
    , Ll = {
        class: "appointment-date-select"
    }
    , zl = ["onClick"]
    , Nl = {
        class: "date-text"
    }
    , Rl = {
        class: "week-text"
    }
    , Ql = {
        key: 0,
        class: "date-option__select"
    }
    , Ul = Q({
        __name: "AppointmentDateSelect",
        setup(t) {
            const n = Te();
            function i(_) {
                const m = n.form.date_times.length;
                if (_.check) {
                    if (m === 1)
                        return;
                    _.check = 0
                } else {
                    if (_.time === n.UNCERTAIN_DATE)
                        n.dateOptions.forEach(l => {
                            l.time !== n.UNCERTAIN_DATE && !l.expired && (l.check = 0)
                        }
                        );
                    else {
                        if (m === 3)
                            return;
                        n.dateOptions[7].check = 0
                    }
                    _.check = 1
                }
                const a = [];
                n.dateOptions.forEach(l => {
                    l.check && !l.expired && a.push(l.time)
                }
                ),
                    n.form.date_times = a
            }
            return (_, m) => (o(),
                c("div", Ll, [(o(!0),
                    c(B, null, te(s(n).dateOptions, a => {
                        var l;
                        return o(),
                            c("div", {
                                key: a.time,
                                class: j(["date-option", {
                                    "is-active": !a.expired && a.check,
                                    "is-disabled": a.expired && !a.selected || a.time !== s(n).UNCERTAIN_DATE && !a.expired && !a.check && ((l = s(n).form.date_times) == null ? void 0 : l.length) === 3,
                                    "is-active-disabled": a.expired && a.selected
                                }]),
                                onClick: r => i(a)
                            }, [e("div", {
                                class: j(["date-option__text", [a.time === s(n).UNCERTAIN_DATE ? "is-vertical" : ""]])
                            }, [e("div", Nl, b(a.date_name), 1), e("div", Rl, b(a.week_name), 1)], 2), a.selected && s(n).isEdit && a.time !== s(n).UNCERTAIN_DATE ? (o(),
                                c("div", Ql, " 已預約 ")) : I("", !0)], 10, zl)
                    }
                    ), 128))]))
        }
    })
    , Pl = U(Ul, [["__scopeId", "data-v-5c838e7e"]])
    , Fl = t => (Z("data-v-e3343f7d"),
        t = t(),
        J(),
        t)
    , ql = {
        class: "appointment-sex-radio"
    }
    , Hl = ["onClick"]
    , Ol = Fl(() => e("span", {
        class: "radio-input"
    }, [e("span", {
        class: "radio-inner"
    })], -1))
    , Kl = {
        class: "radio-label"
    }
    , Gl = Q({
        __name: "AppointmentSexRadio",
        props: {
            modelValue: {
                type: Number
            },
            modelModifiers: {}
        },
        emits: ["update:modelValue"],
        setup(t) {
            const n = ze(t, "modelValue")
                , i = T([{
                    label: "先生",
                    value: 1
                }, {
                    label: "女士",
                    value: 2
                }])
                , _ = m => {
                    n.value = m.value
                }
                ;
            return (m, a) => (o(),
                c("div", ql, [(o(!0),
                    c(B, null, te(s(i), l => (o(),
                        c("label", {
                            key: l.value,
                            class: j(["radio", {
                                "is-checked": n.value === l.value
                            }]),
                            onClick: r => _(l)
                        }, [Ol, e("span", Kl, b(l.label), 1)], 10, Hl))), 128))]))
        }
    })
    , Wl = U(Gl, [["__scopeId", "data-v-e3343f7d"]])
    , lt = t => (Z("data-v-8de62f2c"),
        t = t(),
        J(),
        t)
    , xl = {
        class: "appointment-notice"
    }
    , Yl = lt(() => e("span", {
        class: "checkbox-inner"
    }, null, -1))
    , jl = [Yl]
    , Zl = lt(() => e("span", null, "我已閱讀並同意各項條款。", -1))
    , Jl = lt(() => e("span", null, "我已閱讀並同意", -1))
    , Xl = ["href"]
    , ec = ["href"]
    , tc = ["href"]
    , nc = Q({
        __name: "AppointmentAgree",
        setup(t) {
            const n = Te()
                , i = T(!1);
            function _() {
                const m = n.form.agree;
                n.form.agree = !m
            }
            return (m, a) => (o(),
                c("div", xl, [e("label", {
                    class: j(["checkbox", [s(n).form.agree ? "is-checked" : ""]]),
                    onClick: _
                }, jl, 2), s(i) ? (o(),
                    c(B, {
                        key: 1
                    }, [Jl, e("a", {
                        href: `${("HOSTNAME" in m ? m.HOSTNAME : s(ae)).help}/content/74/184/tw/%E6%9C%8D%E5%8B%99%E6%A2%9D%E6%AC%BE.html`,
                        target: "_blank",
                        class: "blue-link"
                    }, "服務條款、", 8, Xl), e("a", {
                        href: `${("HOSTNAME" in m ? m.HOSTNAME : s(ae)).help}/content/75/185/tw/%E5%85%8D%E8%B2%AC%E8%81%B2%E6%98%8E.html`,
                        target: "_blank",
                        class: "blue-link"
                    }, "免責聲明、", 8, ec), e("a", {
                        href: `${("HOSTNAME" in m ? m.HOSTNAME : s(ae)).help}/content/76/186/tw/%E9%9A%B1%E7%A7%81%E6%AC%8A%E8%81%B2%E6%98%8E.html`,
                        target: "_blank",
                        class: "blue-link"
                    }, "隱私權聲明", 8, tc), e("span", null, "，並將個人資料傳送給" + b(s(n).linkName) + "。", 1)], 64)) : (o(),
                        c(B, {
                            key: 0
                        }, [Zl, e("span", {
                            class: "blue-link",
                            onClick: a[0] || (a[0] = l => i.value = !0)
                        }, "完整內容")], 64))]))
        }
    })
    , oc = U(nc, [["__scopeId", "data-v-8de62f2c"]])
    , sc = e("div", null, "預約帶看", -1)
    , ac = {
        class: "content"
    }
    , ic = {
        class: "tip"
    }
    , lc = {
        class: "form"
    }
    , cc = {
        class: "form-item-show"
    }
    , rc = e("label", {
        class: "form-item-label"
    }, "預約人", -1)
    , dc = {
        class: "form-item-content"
    }
    , uc = {
        class: "form-item-show is-mobile"
    }
    , pc = e("label", {
        class: "form-item-label"
    }, "行動電話", -1)
    , _c = {
        class: "form-item-content"
    }
    , mc = e("div", {
        class: "safe-tip"
    }, [e("i", {
        class: "ic-house house-security"
    }), e("span", {
        class: "font-bold",
        style: {
            margin: "0 4px"
        }
    }, "已啟用電話保護")], -1)
    , fc = {
        class: "form-item-show is-date"
    }
    , hc = e("label", {
        class: "form-item-label"
    }, "預約日期", -1)
    , vc = {
        class: "form-item-content"
    }
    , kc = {
        class: "date-show"
    }
    , gc = {
        class: "form-item"
    }
    , yc = e("label", {
        class: "form-item-label"
    }, "預約人", -1)
    , bc = {
        class: "form-item-content"
    }
    , Ac = {
        class: "form-item is-verify"
    }
    , Ic = e("label", {
        class: "form-item-label"
    }, "行動電話", -1)
    , $c = {
        class: "form-item-content"
    }
    , wc = {
        key: 0,
        class: "verify-btn-pass"
    }
    , Cc = e("i", {
        class: "ic-house house-success"
    }, null, -1)
    , Dc = e("span", null, "已驗證", -1)
    , Ec = [Cc, Dc]
    , Sc = {
        class: "safe-tip",
        style: {
            "margin-top": "4px"
        }
    }
    , Bc = e("i", {
        class: "ic-house house-security"
    }, null, -1)
    , Tc = e("span", {
        class: "font-bold",
        style: {
            margin: "0 4px"
        }
    }, "電話保護", -1)
    , Mc = {
        key: 0,
        class: "form-item is-verify"
    }
    , Vc = e("label", {
        class: "form-item-label"
    }, "驗證碼", -1)
    , Lc = {
        class: "form-item-content"
    }
    , zc = {
        key: 0
    }
    , Nc = {
        key: 1
    }
    , Rc = {
        class: "form-item",
        style: {
            "margin-top": "24px"
        }
    }
    , Qc = e("label", {
        class: "form-item-label"
    }, "預約日期", -1)
    , Uc = {
        class: "form-item-content"
    }
    , Pc = {
        class: "footer"
    }
    , Fc = Q({
        __name: "AppointmentFormModalPc",
        props: {
            modelValue: {},
            modelModifiers: {}
        },
        emits: ["update:modelValue"],
        setup(t) {
            const n = ze(t, "modelValue")
                , i = Te();
            function _() {
                n.value = !1,
                    i.getInfo(),
                    i.stopCountdown()
            }
            function m() {
                i.isEdit ? me("修改預約彈窗_預約送出_預約送出") : me(`預約資料填寫彈窗_${i.isPrefill ? "已預填資料" : "無預填資料"}_預約送出`),
                    i.submit().then(() => {
                        n.value = !1
                    }
                    )
            }
            function a() {
                i.isEdit ? me("修改預約彈窗_曝光_曝光") : me(`預約資料填寫彈窗_${i.isPrefill ? "已預填資料" : "無預填資料"}_曝光`)
            }
            return (l, r) => {
                const u = Pl
                    , v = Wl
                    , d = ye
                    , p = oc
                    , f = De;
                return o(),
                    N(f, {
                        modelValue: n.value,
                        "onUpdate:modelValue": r[8] || (r[8] = g => n.value = g),
                        footer: null,
                        "mask-closeable": !1,
                        "modal-class": "appointment-form-modal",
                        onOpen: r[9] || (r[9] = g => a())
                    }, {
                        header: E(() => [e("div", {
                            class: "header"
                        }, [sc, e("i", {
                            class: "ic-house house-close",
                            onClick: _
                        })])]),
                        default: E(() => {
                            var g;
                            return [e("div", ac, [e("div", ic, " 預約送出後，我們將盡快通知" + b(s(i).identity) + "回電給您 ", 1), e("div", lc, [s(i).isEdit ? (o(),
                                c(B, {
                                    key: 0
                                }, [e("div", cc, [rc, e("div", dc, b(s(i).info.name), 1)]), e("div", uc, [pc, e("div", _c, [e("span", null, b(s(i).mobile), 1), mc])]), e("div", fc, [hc, e("div", vc, [e("div", kc, b(s(i).info.dateTxt), 1), w(u)])])], 64)) : (o(),
                                    c(B, {
                                        key: 1
                                    }, [e("div", gc, [yc, e("div", bc, [M(e("input", {
                                        "onUpdate:modelValue": r[0] || (r[0] = y => s(i).form.name = y),
                                        type: "text",
                                        maxlength: 4,
                                        class: "form-input",
                                        placeholder: "請輸入您的姓名",
                                        style: {
                                            width: "310px"
                                        },
                                        onInput: r[1] || (r[1] = y => s(i).handleNameInput())
                                    }, null, 544), [[Je, s(i).form.name, void 0, {
                                        trim: !0
                                    }]]), w(v, {
                                        modelValue: s(i).form.sex,
                                        "onUpdate:modelValue": r[2] || (r[2] = y => s(i).form.sex = y)
                                    }, null, 8, ["modelValue"])])]), e("div", Ac, [Ic, e("div", $c, [M(e("input", {
                                        "onUpdate:modelValue": r[3] || (r[3] = y => s(i).form.mobile = y),
                                        type: "text",
                                        maxlength: 10,
                                        class: "form-input",
                                        placeholder: "請輸入行動電話",
                                        onInput: r[4] || (r[4] = y => s(i).handleMobileInput())
                                    }, null, 544), [[Je, s(i).form.mobile, void 0, {
                                        trim: !0
                                    }]]), s(i).isPass ? (o(),
                                        c("div", wc, Ec)) : I("", !0), e("div", Sc, [Bc, Tc, e("span", null, "已對" + b(s(i).identity) + "隱藏您的真實號碼，請放心送出", 1)])])]), s(i).isPass ? I("", !0) : (o(),
                                            c("div", Mc, [Vc, e("div", Lc, [M(e("input", {
                                                "onUpdate:modelValue": r[5] || (r[5] = y => s(i).form.code = y),
                                                type: "text",
                                                maxlength: 6,
                                                class: "form-input",
                                                placeholder: "請輸入6位數驗證碼",
                                                onInput: r[6] || (r[6] = y => s(i).formatNumber("code"))
                                            }, null, 544), [[Je, s(i).form.code]]), e("div", {
                                                class: "verify-btn",
                                                onClick: r[7] || (r[7] = (...y) => s(i).sendVerifyCode && s(i).sendVerifyCode(...y))
                                            }, [s(i).showCountdown ? (o(),
                                                c("span", zc, b((g = s(i).countdown) == null ? void 0 : g.format), 1)) : (o(),
                                                    c("span", Nc, "獲取驗證碼"))])])])), e("div", Rc, [Qc, e("div", Uc, [w(u)])])], 64))]), e("div", Pc, [w(d, {
                                                        theme: "housing",
                                                        size: "large",
                                                        loading: s(i).submitLoading,
                                                        "loading-text": "預約送出",
                                                        class: "submit-btn",
                                                        onClick: m
                                                    }, {
                                                        default: E(() => [S(" 預約送出 ")]),
                                                        _: 1
                                                    }, 8, ["loading"]), w(p)])])]
                        }
                        ),
                        _: 1
                    }, 8, ["modelValue"])
            }
        }
    })
    , qc = {
        key: 0,
        class: "content-mobile"
    }
    , Hc = {
        class: "title"
    }
    , Oc = {
        class: "btn-group"
    }
    , Kc = {
        key: 1,
        class: "content-pc"
    }
    , Gc = e("div", {
        class: "title"
    }, [e("i", {
        class: "ic-house house-exclamation"
    }), e("span", null, "確定要取消預約嗎？")], -1)
    , Wc = {
        class: "txt"
    }
    , xc = {
        class: "btn-group"
    }
    , Yc = Q({
        __name: "AppointmentCancelModal",
        props: {
            modelValue: {},
            modelModifiers: {}
        },
        emits: Ct(["close"], ["update:modelValue"]),
        setup(t, { emit: n }) {
            const i = n
                , { isMobile: _ } = he()
                , m = ze(t, "modelValue")
                , a = Te();
            function l() {
                m.value = !1
            }
            function r() {
                a.submitCancel().then(() => {
                    i("close")
                }
                )
            }
            return (u, v) => {
                const d = ye
                    , p = De
                    , f = G("t5-tracker-click");
                return o(),
                    N(p, {
                        modelValue: m.value,
                        "onUpdate:modelValue": v[4] || (v[4] = g => m.value = g),
                        footer: null,
                        "mask-closeable": !1,
                        "append-to-body": !0,
                        "modal-class": "appointment-cancel-modal",
                        onOpen: v[5] || (v[5] = g => s(me)("取消預約彈窗_曝光_曝光"))
                    }, {
                        header: E(() => []),
                        default: E(() => [s(_) ? (o(),
                            c("div", qc, [e("div", Hc, " 是否取消" + b(s(a).isUncertain ? "" : s(a).info.simpleDateTxt) + "預約帶看 ", 1), e("div", Oc, [e("div", {
                                class: "cancel-btn",
                                onClick: v[0] || (v[0] = g => l())
                            }, " 取消 "), M((o(),
                                c("div", {
                                    class: "submit-btn",
                                    onClick: v[1] || (v[1] = g => r())
                                }, [S(" 確認 ")])), [[f, "取消預約彈窗_確認_確認"]])])])) : (o(),
                                    c("div", Kc, [Gc, e("div", Wc, " 是否取消" + b(s(a).isUncertain ? "" : s(a).info.simpleDateTxt) + "預約帶看 ", 1), e("div", xc, [w(d, {
                                        theme: "info",
                                        line: "",
                                        onClick: v[2] || (v[2] = g => l())
                                    }, {
                                        default: E(() => [S(" 取消 ")]),
                                        _: 1
                                    }), M((o(),
                                        N(d, {
                                            onClick: v[3] || (v[3] = g => r())
                                        }, {
                                            default: E(() => [S(" 確認 ")]),
                                            _: 1
                                        })), [[f, "取消預約彈窗_確認_確認"]])])]))]),
                        _: 1
                    }, 8, ["modelValue"])
            }
        }
    })
    , jc = {
        class: "header"
    }
    , Zc = e("div", null, "預約帶看", -1)
    , Jc = ["onClick"]
    , Xc = {
        class: "content"
    }
    , er = {
        class: "form-item"
    }
    , tr = e("div", {
        class: "form-label"
    }, " 預約人 ", -1)
    , nr = {
        class: "form-content"
    }
    , or = {
        class: "form-item is-mobile"
    }
    , sr = e("div", {
        class: "form-label"
    }, " 行動電話 ", -1)
    , ar = {
        class: "form-content"
    }
    , ir = e("i", {
        class: "ic-house house-security"
    }, null, -1)
    , lr = e("span", {
        class: "blue-font"
    }, "已啟用電話保護", -1)
    , cr = {
        class: "form-item is-date"
    }
    , rr = e("div", {
        class: "form-label"
    }, " 預約日期 ", -1)
    , dr = {
        class: "form-content"
    }
    , ur = e("span", null, "修改", -1)
    , pr = e("i", {
        class: "ic-house house-arrow-right"
    }, null, -1)
    , _r = [ur, pr]
    , mr = {
        key: 0,
        class: "close-icon"
    }
    , fr = Q({
        __name: "AppointmentDetailModal",
        props: {
            modelValue: {},
            modelModifiers: {}
        },
        emits: Ct(["openEdit"], ["update:modelValue"]),
        setup(t, { emit: n }) {
            const i = n
                , { isMobile: _ } = he()
                , m = ze(t, "modelValue")
                , a = Te()
                , l = T(!1);
            function r() {
                l.value = !0
            }
            function u() {
                i("openEdit")
            }
            function v() {
                l.value = !1,
                    m.value = !1
            }
            return (d, p) => {
                const f = ye
                    , g = De
                    , y = Yc
                    , h = G("t5-tracker-click");
                return o(),
                    c(B, null, [w(g, {
                        modelValue: m.value,
                        "onUpdate:modelValue": p[3] || (p[3] = k => m.value = k),
                        footer: null,
                        "mask-closeable": !1,
                        "modal-class": "appointment-detail-modal",
                        onOpen: p[4] || (p[4] = k => s(me)("預約詳情彈窗_曝光_曝光"))
                    }, {
                        header: E(({ handleClose: k }) => [e("div", jc, [Zc, s(_) ? I("", !0) : (o(),
                            c("i", {
                                key: 0,
                                class: "ic-house house-close",
                                onClick: k
                            }, null, 8, Jc))])]),
                        default: E(() => [e("div", Xc, [e("div", er, [tr, e("div", nr, b(s(a).info.name), 1)]), e("div", or, [sr, e("div", ar, [e("span", null, b(s(a).mobile), 1), ir, lr])]), e("div", cr, [rr, e("div", dr, [e("span", null, b(s(a).info.dateTxt), 1), M((o(),
                            c("div", {
                                class: "edit-btn",
                                onClick: p[0] || (p[0] = k => u())
                            }, _r)), [[h, "預約詳情彈窗_修改_修改"]])])]), M((o(),
                                N(f, {
                                    theme: "info",
                                    size: "large",
                                    class: "cancel-btn",
                                    line: "",
                                    onClick: p[1] || (p[1] = k => r())
                                }, {
                                    default: E(() => [S(" 取消預約 ")]),
                                    _: 1
                                })), [[h, "預約詳情彈窗_取消預約_取消預約"]])]), s(_) ? (o(),
                                    c("div", mr, [e("i", {
                                        class: "ic-house house-close",
                                        onClick: p[2] || (p[2] = k => m.value = !1)
                                    })])) : I("", !0)]),
                        _: 1
                    }, 8, ["modelValue"]), w(y, {
                        modelValue: s(l),
                        "onUpdate:modelValue": p[5] || (p[5] = k => pe(l) ? l.value = k : null),
                        onClose: v
                    }, null, 8, ["modelValue"])], 64)
            }
        }
    })
    , Rt = Symbol("GetExposureFuncSymbol");
function i1() {
    const t = new Date().getTime();
    let n = 0;
    const i = Yt("land_exposure_data", "")
        , _ = {
            is_good: 0,
            page_duration: 0,
            key_info: "non_exposure",
            key_info_album: "non_exposure",
            key_info_main: "non_exposure",
            base_info: "non_exposure",
            view_reserve: "non_exposure",
            land_intro: "non_exposure",
            price_login: "non_exposure",
            around_facility: "non_exposure",
            nearby_land: "non_exposure",
            similar_price: "non_exposure",
            similar_area: "non_exposure",
            land_info: "non_exposure"
        };
    function m(r) {
        const { target: u, stop: v, key: d } = r;
        if (_[d] === "full_exposure")
            return v();
        u.isIntersecting && (_[d] = +u.intersectionRatio == 1 ? "full_exposure" : "exposure")
    }
    function a(r, u) {
        Object.keys(_).includes(r) && (_[r] = u)
    }
    function l() {
        var v;
        const r = Object.keys(_).filter(d => d.includes("key_info_"))
            , u = r.map(d => _[d]);
        _.key_info = u.filter(d => d === "full_exposure").length === r.length ? "full_exposure" : "exposure",
            n = new Date().getTime(),
            _.page_duration = n - t,
            (v = window == null ? void 0 : window.dataLayer) == null || v.push({
                event: "custom_event",
                event_name: "detail_page_view_stats",
                custom_params: JSON.stringify(_)
            }),
            i.value = JSON.stringify(_)
    }
    return Fe(Rt, {
        setExposureData: a,
        onExposureObserver: m
    }),
    {
        setExposureData: a,
        onExposureObserver: m,
        sendExposureData: l
    }
}
function ct() {
    const t = Le(Rt, null);
    if (!t)
        throw new Error("useGetExposureFunc must be used after useModuleExposure");
    return t
}
const rt = t => (Z("data-v-f8e43441"),
    t = t(),
    J(),
    t)
    , hr = rt(() => e("div", {
        class: "text-14"
    }, " 您已預約看現場 ", -1))
    , vr = {
        class: "text-12",
        style: {
            "font-weight": "normal"
        }
    }
    , kr = rt(() => e("i", {
        class: "ic-house house-calendar"
    }, null, -1))
    , gr = rt(() => e("span", null, "預約帶看", -1))
    , yr = Q({
        __name: "AppointmentButton",
        props: {
            linkInfo: {}
        },
        setup(t) {
            const { onExposureObserver: n } = ct()
                , i = Te()
                , _ = T(!1)
                , m = T(!1);
            function a() {
                i.isEdit ? m.value = !0 : _.value = !0
            }
            function l() {
                m.value = !1,
                    _.value = !0
            }
            return (r, u) => {
                var g;
                const v = Fc
                    , d = fr
                    , p = G("t5-tracker-click")
                    , f = G("module-exposure");
                return o(),
                    c(B, null, [M((o(),
                        c("div", jt({
                            class: ["appointment-button", [s(i).isEdit ? "is-column" : ""]]
                        }, r.$attrs, {
                            onClick: u[0] || (u[0] = y => a())
                        }), [s(i).isEdit ? (o(),
                            c(B, {
                                key: 0
                            }, [hr, e("div", vr, b(s(i).isUncertain ? `請留意${(g = r.linkInfo) == null ? void 0 : g.identity}來電` : s(i).info.simpleDateTxt), 1)], 64)) : (o(),
                                c(B, {
                                    key: 1
                                }, [kr, gr], 64))], 16)), [[p, `預約帶看_${s(i).isEdit ? "已預約" : "未預約"}_預約帶看`], [f, {
                                    key: "view_reserve",
                                    cb: s(n)
                                }]]), w(v, {
                                    modelValue: s(_),
                                    "onUpdate:modelValue": u[1] || (u[1] = y => pe(_) ? _.value = y : null)
                                }, null, 8, ["modelValue"]), w(d, {
                                    modelValue: s(m),
                                    "onUpdate:modelValue": u[2] || (u[2] = y => pe(m) ? m.value = y : null),
                                    onOpenEdit: l
                                }, null, 8, ["modelValue"])], 64)
            }
        }
    })
    , br = U(yr, [["__scopeId", "data-v-f8e43441"]])
    , Qt = t => (Z("data-v-b674691c"),
        t = t(),
        J(),
        t)
    , Ar = {
        class: "contact-button"
    }
    , Ir = Qt(() => e("i", {
        class: "ic-house house-im"
    }, null, -1))
    , $r = Qt(() => e("span", null, "在線問", -1))
    , wr = [Ir, $r]
    , Cr = Q({
        __name: "ContactButton",
        props: {
            linkInfo: {},
            type: {}
        },
        setup(t) {
            const n = t;
            async function i() {
                var m;
                const { sendHouseMessage: _ } = We();
                _((m = n.linkInfo) == null ? void 0 : m.imUid, [{
                    msg: "您好"
                }], "聯絡人模塊-房聊")
            }
            return (_, m) => {
                const a = br
                    , l = G("t5-tracker-click");
                return o(),
                    c("div", Ar, [_.type === 2 ? (o(),
                        N(a, {
                            key: 0,
                            class: "contact-button-item",
                            "link-info": _.linkInfo
                        }, null, 8, ["link-info"])) : I("", !0), M((o(),
                            c("div", {
                                class: "contact-button-item",
                                style: be({
                                    marginLeft: _.type === 2 ? "12px" : "0"
                                }),
                                onClick: i
                            }, wr, 4)), [[l, "聯繫人模塊_在線問_點擊"]])])
            }
        }
    })
    , Dr = U(Cr, [["__scopeId", "data-v-b674691c"]])
    , Ut = t => (Z("data-v-8dc280b7"),
        t = t(),
        J(),
        t)
    , Er = {
        key: 0,
        class: "deal-day"
    }
    , Sr = Ut(() => e("i", {
        class: "ic-house house-deal"
    }, null, -1))
    , Br = {
        class: "phone"
    }
    , Tr = Ut(() => e("i", {
        class: "ic-house house-telephone"
    }, null, -1))
    , Mr = {
        key: 0,
        class: "tips"
    }
    , Vr = Q({
        __name: "ContactCard",
        props: {
            linkInfo: {},
            basicData: {}
        },
        emits: ["show-qrcode", "hide-qrcode"],
        setup(t, { emit: n }) {
            const i = t
                , _ = n
                , m = T(!1)
                , a = u => u == null ? void 0 : u.replace(",", "轉")
                , l = D(() => {
                    var u, v;
                    return ((u = i == null ? void 0 : i.basicData) == null ? void 0 : u.type) === 2 && ((v = i == null ? void 0 : i.basicData) == null ? void 0 : v.kind) === 11
                }
                )
                , r = D(() => {
                    var u;
                    return ((u = i == null ? void 0 : i.basicData) == null ? void 0 : u.kind) === 11
                }
                );
            return (u, v) => {
                var k, A, $;
                const d = Dl
                    , p = ye
                    , f = Re
                    , g = Ml
                    , y = Dr
                    , h = G("t5-tracker-click");
                return o(),
                    c("section", {
                        class: j(["contact-card", {
                            "sale-land": s(l)
                        }])
                    }, [w(d, {
                        "link-info": u.linkInfo
                    }, null, 8, ["link-info"]), (k = u.linkInfo) != null && k.dealTime ? (o(),
                        c("div", Er, [Sr, S(" " + b((A = u.linkInfo) == null ? void 0 : A.dealDay) + "天成交 ", 1)])) : (o(),
                            c(B, {
                                key: 1
                            }, [e("div", Br, [w(f, {
                                "float-qr-code": s(l),
                                onShowTooltip: v[0] || (v[0] = C => _("show-qrcode")),
                                onHideTooltip: v[1] || (v[1] = C => _("hide-qrcode"))
                            }, {
                                default: E(() => [w(p, {
                                    size: "large",
                                    theme: "housing"
                                }, {
                                    icon: E(() => [Tr]),
                                    default: E(() => {
                                        var C, L;
                                        return [e("span", null, b(a(((C = u.linkInfo) == null ? void 0 : C.mobile) || ((L = u.linkInfo) == null ? void 0 : L.phone))), 1)]
                                    }
                                    ),
                                    _: 1
                                })]),
                                _: 1
                            }, 8, ["float-qr-code"]), w(g, {
                                modelValue: s(m),
                                "onUpdate:modelValue": v[2] || (v[2] = C => pe(m) ? m.value = C : null)
                            }, null, 8, ["modelValue"])]), s(r) ? I("", !0) : (o(),
                                c("div", Mr, [u.linkInfo.isTransferTel ? (o(),
                                    c(B, {
                                        key: 0
                                    }, [S(" 您的隱私已保護，放心撥 "), M(e("i", {
                                        class: "ic-house house-tips",
                                        onClick: v[3] || (v[3] = C => m.value = !0)
                                    }, null, 512), [[h, "聯繫卡片_放心撥提示"]])], 64)) : (o(),
                                        c(B, {
                                            key: 1
                                        }, [S(" 獲得更全面資訊 ")], 64))]))], 64)), s(r) ? (o(),
                                            N(y, {
                                                key: 2,
                                                type: ($ = i == null ? void 0 : i.basicData) == null ? void 0 : $.type,
                                                "link-info": u.linkInfo
                                            }, null, 8, ["type", "link-info"])) : I("", !0)], 2)
            }
        }
    })
    , l1 = U(Vr, [["__scopeId", "data-v-8dc280b7"]])
    , Lr = t => (Z("data-v-3a692898"),
        t = t(),
        J(),
        t)
    , zr = ["href"]
    , Nr = {
        class: "desc"
    }
    , Rr = Lr(() => e("div", {
        class: "guide"
    }, [e("p", null, "導航"), e("span", {
        class: "guide-icon"
    })], -1))
    , Qr = Q({
        __name: "MapAddress",
        setup(t) {
            var v, d;
            const n = Le("mapInfo")
                , i = Le("otherInfo")
                , _ = D(() => {
                    var p, f;
                    return (f = (p = n == null ? void 0 : n.address) == null ? void 0 : p.detail) == null ? void 0 : f.lat
                }
                )
                , m = D(() => {
                    var p, f;
                    return (f = (p = n == null ? void 0 : n.address) == null ? void 0 : p.detail) == null ? void 0 : f.lng
                }
                )
                , a = D(() => `https://maps.google.com.tw/maps?f=q&hl=zh-TW&q=${s(_)},${s(m)}&z=17`)
                , l = T(((v = i == null ? void 0 : i.communityInfo) == null ? void 0 : v.community_name) || ((d = i == null ? void 0 : i.communityInfo) == null ? void 0 : d.case_name) || "")
                , r = () => {
                    var f;
                    const p = (f = i == null ? void 0 : i.communityInfo) == null ? void 0 : f.community_id;
                    p && window.open(`${ae.market}/${p}`, "_blank")
                }
                , u = D(() => l.value ? ` · ${n == null ? void 0 : n.address.desc}` : n == null ? void 0 : n.address.desc);
            return (p, f) => {
                const g = G("t5-tracker-click");
                return M((o(),
                    c("a", {
                        href: s(a),
                        target: "_blank",
                        class: "map-address",
                        onClick: f[0] || (f[0] = fe(() => { }
                            , ["stop"]))
                    }, [e("span", Nr, [e("span", {
                        onClick: fe(r, ["prevent", "stop"])
                    }, b(s(l)), 1), S(" " + b(s(u)), 1)]), Rr], 8, zr)), [[g, "周邊配套_導航"]])
            }
        }
    })
    , Pt = U(Qr, [["__scopeId", "data-v-3a692898"]])
    , Ur = "" + new URL("streetview.Di7UP1dy.png", import.meta.url).href
    , Pr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='22px'%20height='22px'%20viewBox='0%200%2022%2022'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='商用-详情页确定版'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='商用详情页pc-3.31修改后备份'%20transform='translate(-1517.000000,%20-2792.000000)'%20fill='%234A4A4A'%20fill-rule='nonzero'%3e%3cg%20id='2.导航/9.固钉/图标按钮/默认'%20transform='translate(1508.000000,%202783.000000)'%3e%3cg%20id='-mockplus-'%20transform='translate(9.230769,%209.230769)'%3e%3cg%20id='报错'%20transform='translate(2.692308,%202.692308)'%3e%3cpath%20d='M5.38461538,0%20C5.88025554,0%206.28205128,0.401795737%206.28205128,0.897435897%20C6.28205128,1.35767319%205.93560496,1.73699361%205.48927537,1.78883409%20L5.38461538,1.79487179%20L2.69230769,1.79487179%20C2.2320704,1.79487179%201.85274998,2.14131812%201.8009095,2.58764771%20L1.79487179,2.69230769%20L1.79487179,5.38461538%20C1.79487179,5.88025554%201.39307606,6.28205128%200.897435897,6.28205128%20C0.437198606,6.28205128%200.0578781891,5.93560496%200.0060377076,5.48927537%20L0,5.38461538%20L0,2.69230769%20C0,1.25849151%201.12082561,0.0864581851%202.53411416,0.00457036588%20L2.69230769,0%20L5.38461538,0%20Z%20M5.38461538,16.1538462%20C5.88025554,16.1538462%206.28205128,15.7520504%206.28205128,15.2564103%20C6.28205128,14.796173%205.93560496,14.4168525%205.48927537,14.3650121%20L5.38461538,14.3589744%20L2.69230769,14.3589744%20C2.2320704,14.3589744%201.85274998,14.012528%201.8009095,13.5661984%20L1.79487179,13.4615385%20L1.79487179,10.7692308%20C1.79487179,10.2735906%201.39307606,9.87179487%200.897435897,9.87179487%20C0.437198606,9.87179487%200.0578781891,10.2182412%200.0060377076,10.6645708%20L0,10.7692308%20L0,13.4615385%20C0,14.8953546%201.12082561,16.067388%202.53411416,16.1492758%20L2.69230769,16.1538462%20L5.38461538,16.1538462%20Z%20M10.7692308,0%20C10.2735906,0%209.87179487,0.401795737%209.87179487,0.897435897%20C9.87179487,1.35767319%2010.2182412,1.73699361%2010.6645708,1.78883409%20L10.7692308,1.79487179%20L13.4615385,1.79487179%20C13.9217758,1.79487179%2014.3010962,2.14131812%2014.3529367,2.58764771%20L14.3589744,2.69230769%20L14.3589744,5.38461538%20C14.3589744,5.88025554%2014.7607701,6.28205128%2015.2564103,6.28205128%20C15.7166475,6.28205128%2016.095968,5.93560496%2016.1478084,5.48927537%20L16.1538462,5.38461538%20L16.1538462,2.69230769%20C16.1538462,1.25849151%2015.0330205,0.0864581851%2013.619732,0.00457036588%20L13.4615385,0%20L10.7692308,0%20Z%20M10.7692308,16.1538462%20C10.2735906,16.1538462%209.87179487,15.7520504%209.87179487,15.2564103%20C9.87179487,14.796173%2010.2182412,14.4168525%2010.6645708,14.3650121%20L10.7692308,14.3589744%20L13.4615385,14.3589744%20C13.9217758,14.3589744%2014.3010962,14.012528%2014.3529367,13.5661984%20L14.3589744,13.4615385%20L14.3589744,10.7692308%20C14.3589744,10.2735906%2014.7607701,9.87179487%2015.2564103,9.87179487%20C15.7166475,9.87179487%2016.095968,10.2182412%2016.1478084,10.6645708%20L16.1538462,10.7692308%20L16.1538462,13.4615385%20C16.1538462,14.8953546%2015.0330205,16.067388%2013.619732,16.1492758%20L13.4615385,16.1538462%20L10.7692308,16.1538462%20Z'%20id='形状结合'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
    , Fr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='22px'%20height='22px'%20viewBox='0%200%2022%2022'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='商用-详情页确定版'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='商用详情页pc-3.31修改后备份'%20transform='translate(-1517.000000,%20-2840.000000)'%20fill='%234A4A4A'%20fill-rule='nonzero'%3e%3cg%20id='2.导航/9.固钉/图标按钮/默认备份'%20transform='translate(1508.000000,%202831.000000)'%3e%3cg%20id='-mockplus-'%20transform='translate(9.230769,%209.230769)'%3e%3cg%20id='报错'%20transform='translate(3.589744,%201.794872)'%3e%3cpath%20d='M7.17948718,0%20C8.66640766,0%209.87179487,1.20538721%209.87179487,2.69230769%20C9.87179487,4.17922817%208.66640766,5.38461538%207.17948718,5.38461538%20C5.6925667,5.38461538%204.48717949,4.17922817%204.48717949,2.69230769%20C4.48717949,1.20538721%205.6925667,0%207.17948718,0%20Z%20M7.17948718,1.79487179%20C6.68384702,1.79487179%206.28205128,2.19666753%206.28205128,2.69230769%20C6.28205128,3.18794785%206.68384702,3.58974359%207.17948718,3.58974359%20C7.67512734,3.58974359%208.07692308,3.18794785%208.07692308,2.69230769%20C8.07692308,2.19666753%207.67512734,1.79487179%207.17948718,1.79487179%20Z'%20id='Oval-11-Copy-2备份'%20transform='translate(7.179487,%202.692308)%20rotate(-360.000000)%20translate(-7.179487,%20-2.692308)%20'%3e%3c/path%3e%3cpath%20d='M9.40823422,6.28205128%20C10.3995145,6.28205128%2011.203106,7.08564276%2011.203106,8.07692308%20C11.203106,8.31999678%2011.1537331,8.56053773%2011.0579817,8.78395772%20L9.25531414,12.990182%20C8.89943308,13.8205712%208.08292364,14.3589744%207.17948718,14.3589744%20C6.27605072,14.3589744%205.45954127,13.8205712%205.10366022,12.990182%20L3.30099265,8.78395772%20C2.9105082,7.87282734%203.33257512,6.81766004%204.2437055,6.42717559%20C4.46712549,6.33142417%204.70766644,6.28205128%204.95074014,6.28205128%20L9.40823422,6.28205128%20Z%20M6.75340771,12.2831474%20C6.82645504,12.4535912%206.99404989,12.5641026%207.17948718,12.5641026%20C7.36492447,12.5641026%207.53251932,12.4535912%207.60556665,12.2831474%20L9.40823422,8.07692308%20L4.95051002,8.07692308%20L6.75340771,12.2831474%20Z'%20id='形状结合'%3e%3c/path%3e%3cpath%20d='M3.22965631,13.2026731%20C3.71587846,13.1065108%204.18799435,13.4227167%204.28415665,13.9089389%20C4.38031896,14.395161%204.06411298,14.8672769%203.57789083,14.9634392%20C3.33985738,15.0105162%203.1173109,15.0619905%202.91265427,15.1171644%20C2.64086688,15.1904364%202.40549423,15.2690565%202.21294222,15.3487547%20L2.09282051,15.4013895%20L2.18324053,15.442051%20C2.35141097,15.5134136%202.55377924,15.5839441%202.78582006,15.6507452%20L2.96534358,15.7001015%20C4.05563287,15.9864101%205.56311697,16.1538462%207.17948718,16.1538462%20C8.79585739,16.1538462%2010.3033415,15.9864101%2011.3936308,15.7001015%20C11.7018736,15.6191573%2011.9655208,15.5312542%2012.1757338,15.442051%20L12.2661538,15.4013895%20L12.1526756,15.3515138%20C12.0098252,15.292066%2011.8430684,15.233164%2011.6550697,15.1766032%20L11.460089,15.1208894%20C11.2531947,15.0647233%2011.0277937,15.0123462%2010.7864,14.9644919%20C10.3002211,14.868111%209.98422748,14.395853%2010.0806084,13.9096741%20C10.1769893,13.4234953%2010.6492473,13.1075016%2011.1354262,13.2038825%20C11.4164006,13.2595834%2011.6821046,13.3213258%2011.9303272,13.3887113%20C13.4348668,13.797152%2014.3589744,14.3848291%2014.3589744,15.4016234%20C14.3589744,17.1253394%2011.2234734,17.9487179%207.17948718,17.9487179%20C3.13550096,17.9487179%201.77635684e-15,17.1253394%201.77635684e-15,15.4016234%20C1.77635684e-15,14.3813002%200.930376119,13.7926187%202.44545011,13.3841656%20C2.69065283,13.3180607%202.95276073,13.2574359%203.22965631,13.2026731%20Z'%20id='路径'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
    , je = t => (Z("data-v-745e8d10"),
        t = t(),
        J(),
        t)
    , qr = {
        class: "map-container"
    }
    , Hr = ["src"]
    , Or = je(() => e("div", {
        class: "street-flag"
    }, [e("i", {
        class: "ic-house house-street"
    }), e("span", {
        class: "street-txt"
    }, "街景")], -1))
    , Kr = je(() => e("img", {
        src: Ur,
        alt: ""
    }, null, -1))
    , Gr = [Or, Kr]
    , Wr = {
        class: "address-marker"
    }
    , xr = {
        key: 1,
        class: "custom-icon-container"
    }
    , Yr = je(() => e("div", {
        class: "custom-icon"
    }, [e("img", {
        src: Pr,
        alt: ""
    })], -1))
    , jr = je(() => e("div", {
        class: "custom-icon"
    }, [e("img", {
        src: Fr,
        alt: ""
    })], -1))
    , Zr = [Yr, jr]
    , Jr = Q({
        __name: "GoogleMap",
        props: {
            center: {},
            customIcon: {
                type: Boolean,
                default: !0
            },
            showStreet: {
                type: Boolean
            }
        },
        setup(t) {
            const n = t
                , _ = Zt().public.gmapKey
                , m = D(() => `https://www.google.com.tw/maps/embed/v1/place?key=${_}&q=${n.center.lat},${n.center.lng}&language=zh-TW`);
            function a() {
                const l = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${n.center.lat},${n.center.lng}&heading=265&language=zh-TW`;
                window.open(l, "_blank"),
                    me("周邊配套_街景")
            }
            return (l, r) => {
                const u = Pt
                    , v = Dt;
                return o(),
                    N(v, null, {
                        default: E(() => [e("div", qr, [e("iframe", {
                            src: s(m),
                            frameborder: "0",
                            title: "房屋位置"
                        }, null, 8, Hr), l.showStreet ? (o(),
                            c("div", {
                                key: 0,
                                class: "street-view-wrap",
                                onClick: r[0] || (r[0] = fe(d => a(), ["stop"]))
                            }, Gr)) : I("", !0), e("div", Wr, [w(u)]), l.customIcon ? (o(),
                                c("div", xr, Zr)) : I("", !0)])]),
                        _: 1
                    })
            }
        }
    })
    , Xr = U(Jr, [["__scopeId", "data-v-745e8d10"]])
    , ed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAYAAACsc+sjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVRogeWbvW7bMBDH+Qh+hz5EXyED53QpUFjyom4BAvQVhL6Bu3vpLrQSXBTo4KlbtgxdCqNAv9MhMJDWV/wd0zmwZCUdKcuOCByMWDJ1P90Hjx9ROjtTsWVS0YO0pNOkpDwtaZaWtEgqutxISUt8br4rqUhKmiYlnacVnWRzGnWhj87OVDy4kh5uwQCwDJACLyk2tArtAEpFgPPJFN7RK+jk1oJFR4C25KEWVsL4m+0J8E5u4/t8L6ApEoxJKP1JIbGuanoj3mbPgDtBTkDoRAXN5jTqxVUbuDI8LApoNqfRHhOO1LqNYFWNu04PAaZOmrixOoaYbOLGdeOt8mbXvpVv78KL/2Vj5zh5AEOIVKaNQY8lLtvGq3KUda07f/aOvl58odWfNa0pQru+ofXbj7QSwha1oNKh5MeKflMHDS9vLNAnrejEC4qLbTuEEs/f0xV12KSJSftAJdYE6IsL+mWU+nBFN0/f0M9Q4SGAsEgiWFXtMq0wLiEc9FFB30OFg6L/l5d0LbDq7B9QSXHAATno41f0OVRcSQ0h0lbHjI2rIrd98po+AcoFimsh4gNFiIwD6mC1LdxbxWUdqCRT8r59oLjWss98B9o22x4TaMqyryg+8UAkiH2BooBANhZYdMlBc4kyiCU83B5eYoNuklBF3/A8CehkO6tRktUDA4qhoGtQvEwDOQ6ofZW0UDCwHBQKohwMFe62GK9NRg4pB5V08dnActAumgGV6JiwIWY4oIlwxnI0oNWd687uM+iEJaM8NijGWAwLrqLC1ZDE0A9+40tGYtBqO7xIV/t8oCj2zSyk6VwVqwnmN3Z/oaBaWgLWgcIiZoB3VU+uxmc9gI4FmvISsG1R38R1AdvUbet+E2jRPGiaVgcaswVa9DR44m1Au1wzQpLCs6SgmT3xliylGAUQV23dtGlDvEqL+dS1lCJ1XwOK5GMnEVf82YLpl+9+JLKQYj51LY6FLHfymYxLcbifbxHMl5XxPa4HWHMRdQF7bMG6rMrHSL4Ahr8xBbNfDl4MElBMa+oYWxIc1IydZrq12VZgk2Z7EQwCKOPG+ERy4/d3siWhAzaZuAtz4ZaxBd+77o8x0dZdbRvaluIK+yzD77chO9821MKNYG4lW3yWcd1v+ul8I1gHbu1zJZsoPPZ87mVrXw/psIYe0vEbPZQDVTpCzB7NETltZ+P7fuhRD+kYqx7SwWQ9tKPmemj/PKD9cXxQ/w7yFyacdLFgpl//AAAAD3RFWHRDb3B5cmlnaHQAVDUtQ0n2YeOFAAAAAElFTkSuQmCC"
    , td = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAYAAACsc+sjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD7UlEQVRogeVbzW4TMRDeW1+gD9En4Bk4+MItByR2S4u0UgWqBEJCjpQbF/IQcMkdkQcIZy65ccrN/AqEoCqqBDX6Njup63g3tmc3m7IjjVSl3c18nplvxmM3Eflp0rTq0fGBlocDLbOxltlEy2ymZTbXMltomanyZ+i0/JtcD+/f0qOTvTbsEflp0hw4GLo0el6CiVEsxKRYpIZBJ2yAS89xwNWBlnp4tN8pUD08vF2GpGpZsYg518NJZIhOtwDQAfhwsBWgehmmRChd6TjGu4kXwNHJXkk0akd0Gpq7yeZQPdovS0TX4NZDeXR80AhQvQS5DcKJ1QU4gw9U7qQn1z3rEcZJDUi5AyB8dbqJoJIadlU3TMdBQJd9auclJFZzf6A3Iy+D8zVxdD1+L305/qHPfv7Vpnz9+Ec/f/S5Y7ByM1Df1u7ZvQ8FKJe8fnWmZdol0IXLq3aTrryBApBLZm/OOwaqXMQU582ndz/px4MvhY4efCvAkVz8vixCukktFi8Q7PC6V02m9X8JwALkwzvfC0W+ti3huZ+vAw1tDsir5NkXT361DpS+19/OmQtoxP4yvQKM8G1TQHz4njCgygxfatzjE5/CGLnpIyAxhHsVmbnk/fwiCqi82qiHsW0d0KpyYwvlNdSuw1UCMooCmq3YF2Gbs4HCCKx6nQAUFgMAicjwjM8CgezwHeH2TUyg40aAmiXG5RHyIkASifmyNsiuABpcn+cm0EkjQOtyDoaaIM1ajM83kRk9Ex66irZvkYxraqoKQ+q88u7teQGGFqbwTOkdfI7fVwlCGwsSA1JeMW/CH5WUQFHQfWRlcKq8yAh5DKCxbeWwMaAG8/oIFoTC0KckxTOusoHyh9EhJQYeQpjXhWszjKtsoJPGgG4qMTESz7jKJiP+YJpY1NdLIcJhXHm9vPAaBtJNJSZGuIwrzYaB2wLazOvb8/oIFo7DuNJsAblNPQGlPKVtG1dRX9FMcPJTGk19/DatIk/Npp2rq7Dl1VARvfGu86o5ZuEobezj83PGH6XUgUXYgX1R6M3mwFdpBoV3oIbG25PzhmN1apMRWDM0/O1aHAt26BiOBY87q7zpKi/wcEj42QLvMjbcgjXArvKGvYOBdxGKPoZSftttJBYvDOiidoAdfCThMhQkAsNomrDqU1P/WowIwLM0zyXm9Qcr2z1ksme9pCHM6SpPYZ3R3OuQiXVsaE8NQusgeY3Kiz2RaPrYUHAOgs3B9srAlPcO/+fDDoKNEI5sIkrDYncc155L2z3aF326rCH6dP1G9OVClejTFTmxzsb/76VH0bdrrKJPF5NF366ai77984Bwgd7Bfwf5B78VEnEpZJoVAAAAD3RFWHRDb3B5cmlnaHQAVDUtQ0n2YeOFAAAAAElFTkSuQmCC"
    , nd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAYAAACsc+sjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFC0lEQVRogeWbPWsUQRjHt7NMm0/gNwjYWgoLARFCIBy3OYwRbFJZ5gtY3EewS2t1YC1WEtEdSCMEmyRGIzEYFEUz8p/dZ+6Z2bndedkzgRt4IDc3u5nfPC/zzMtl+eOdrG+RBw9vS1Fsy7LYlaLYk6J4LUVRSlEcyrI4qv9G3USKYly1Ha3I/Se35tGf/PFO1h8cOlp1ulQwMYKBUAOzeb9v6CwZEJ2CdmLh2qBhEeXW0rWCynkBNoFh5tupGs4iTXQyd0An8Ob9/wIqKy1WAeW6BHEgQruZF+D+k1uVv1wjoAk7kWK03CuoLLeWVCS8bjiXKZejlV5AZQU5/4ATD3voC5u1++QN1KRLsx5mnM3W5g3yyW7YSVeAymZG15B/9PHZN+PzwaMz+eHpRaMN6u129rPxsOMg0DpP7ZhChlM5fv5dopy/+iHLwZGSX5/+qDoFO6ggUS4PfhvP4hn9LKuPh932B/XyS3Smhvr84nIKUddd/b5SdUpbg+lg/Ln4q9tACBQF71H1CbACkdidMlp+OVrxe+nADfp+/VgJB8VnDvp+41gLB+UDk6bZ3W5Q79SuhgQEB3334JMSDorPBujaiRYbFCav3x+t1UNXFI4IQLXZKq2snWgIBbp6qsQAXT3VbVBPgwE5e/nTADVMOAl23ALqq00CXT82tAXQt/e+KOGg+GyA1oMBcYEqP07UaglYU6vTSOv9khmg6CCgMGVQwXeoIyAOyuvtgudgMWla3W6CBiUHBLp2YoASLGmT+x0vAOwCNaJzNOikCRq0vuSgzP98C5l3G6iO2KlaHWnzrRL3oBdYoJQM+BRo2xcU38E9kkA39UI9PN2zQblPdhUesLpA9VSUoFUxjb5ZvS15FBeMal8DgE+h4OQDSilkGugeBx0ng0KrdhCyC4ISh/QBVdE3wXxFUXLQwDWnNb2gw/t3vypYmFubyaKdT9Q1/JSbb4Sf7lfLt8CIS1JnRhz0zZ1zJTw4ARzmR9+FglJamQJaVkl+FrdVwlJA6jSH4ebqggwGTTHf0XIC6AzzBRAguEY5KE//vEFXT/sCncSDWlolX6WCAGVokyX0s3JdJ+jaSfx8uqVNN2IDjC28bVj4JC8UYanDlDr6gCLq6ufgp8OkYDSOc3IOW5swOmWDUr3qLBbmbGBsUDzLhcw9FlSY00tgwtBhwnZKCFMmP9O7CzNAUUc+zf06HnQvIQVsC0yOJB+a4ZGzS6OuKB3ro4KngMFJfSzoRjcorKExFSVML4Il9eHLtA5Q2kPinffVKJ5tQCYk9oIt09J35S1Ql5Z8QSlVdEIOelh4H4RspcwCrTtv7+ypKcITlBJ/am9ADtO3UvIk8/UB9Yy6tKfUMNeIfV7h2ByLOm/RYmnJXpvC73xBaTpKXbGIlu3OeK1aoM5gxLTUNudCo3qDOxJUdGxghx1JtICS+cLfAG2kfxYoIixMG8k/hPaB05Zmuz0eMrWA8pWMMek7TNdey/LkPwZUeB4y+R8bWqA8GFHnSXgU1YPCtmH4oDRSvsH8jg3z4MDkWJva2yaGhqxFAB8Y28xDQEMPgvPgo31HYk8AsyZ+3ZbBOlO+wXyP9vPYQ2EDoJZGdtPStpEoDOd/WSMPun5jw9YHws7spqNtSDbU1/Wb3PtClQXgFJ7hdLX1guzvQlUedEVu2CGp7ed8RS5fpEuP+aJdY80X6WJyvmhXzfNF+/FA7oK+gT8H+QcHeqlh+q9/DgAAAA90RVh0Q29weXJpZ2h0AFQ1LUNJ9mHjhQAAAABJRU5ErkJggg=="
    , od = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAYAAACsc+sjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLklEQVRogeWbXWgcVRTHD0XBh0AfRMEH3/LmQ0F8EnZ2gxpqGamwCD6I0PigYadhV4JKiRAlFFEDBavgB8QXt09G6GpFW0GtFkGL1BbahzYKSoQirR9VQky78kv21Onszsy9M3c2gblwYD9mZu/vnnP/59w7s+JPtsS1BTUZDTzZ1fBkKvBkLvBkoVGRdsOTxaC6rcPr3mfzvWPqnDO7W24uoj/+ZEvcwVXlHjq9DlSRTiZjIBiYqoy5hpY8J9MZPNfzTja4BOhGRSaa4zKyqaDBhgcPOgfsN8K8ntfDYg1Yk9H1uVU84A1G1BDSQwENNgRmcdiQkZCeyuJdMZ2LzJdNBbzR5lv3ya1OQZvjMoISbgG4/lCuyagT0Oa4jAxJcLKG8aIprCR92fBkZtNh0q1tEsYSC7m15mSazacJlAxU16qMFdGh/Xt2fH5gb+14rwx0HcYzVqDredJxCpmp33n0+y/eX+722i/nT/0OsGvYwJNdxqCu5+WhV548feWP3652I+3q2uq1rw+//dP0zu1HHP5eO65k7PemwzA9f+rLi92Udvniz6vvPP/ISYewE6mgLkq7qbGbPjp26NUlPNa1aGdOfPg3IZ4b1JPFQSrsVICYd8tLp1e6GdvKP3/9+/HCC2dzi5UnU7GgebwZFZu4hpdNPJ1XrILqtk7Uq7nnZpzYRBvHvPviY6uYidfzilXgSb0PNEtxgBdNxAbAc98dWzv81r6VA3trlzBgvzmysKaWNFCIVSbvenKwH9SyniU00kIVjwDx2tMPXAFufvLe5bnH7zqLvfTE3UsKzfcMQtK1gEXkbGFbofDdKNwtIZv33/LJt5++92tS54BUwP17dpybfXT05LMP3XZ8euf2z/Y9fMcJ3iu0CSjn2YpUEFqob2yJWILyo3T+aPvlP0kL0dDrhdslBXx9+sEz5Eq8gpFjSUEY8xC1HQTItRmwN5/bfYFBsvaq97/6smtQzwIKAN4i9KLiQgeBxHMA8hmhTkc5HwHrGjQNezwPqLVHPZm7DtrborQOXX4YWEIvCgoU3zEgCsVnnIeZguq8ZsA4z1qQKtIOe9R690Bh1bNRUN6H5+MHbzzzI4UA7zG8zDFpOZWo4Dr8VtYiYra3fMtVKBCKgAzKi3hNQfFKWIzCYc8cjAPmuDyQjYp0tMi3Ti1RUDo/CBSBwnMKi/GajvMabwHLHIxTXQXN2r9GRTpPjcvthYJqo6ggbEn6qroUG0BgAANLUVEsaCVf6KaBaouqLimFuauhTaoqArSpoZtnK9MWlE5zjqou3tbQHqTELkBnr4uRZXqxAUVkmKsYlZSqLlCsUCgk9DOKhwJA25kLBlNQqiOK92jSV9VVJeZ93DXyggbhgsG2BDQFDde6FBUKFS42VInj6ubcHvVCJaBtUW/jUUITGPWkqi6dp94lhJPmd26PVkNFfZZlmukcDTfmJIqLkW7SjncB2gov07IuvFn502FEBO+ZdByVTVqtRBvH8ht438nCO7DcSsErJrsLrhoDY7ulEgzaSrHZHNOCnlAcFihpimrKtOYN4jbHbLY7dT3KYph154UfvrpWpFEaUkFZLby9hO1OU68qKHlQi3JyZVHG9UlPxqBeyga2zVzVFYju+RRpuh1jsWc04ewmU3jhzUgXbZqDnd1k8i1uG2pO1CKgKLNZdAc2tw1d3YcZutneCPbLdGvfL+im8JZ8WMMv0+M3flkeqPLL9IicX6aHHv2yPcbql+nBZL9sj5r7ZfrzgJ8wj7fa30H+Awr9d01CDuCEAAAAD3RFWHRDb3B5cmlnaHQAVDUtQ0n2YeOFAAAAAElFTkSuQmCC"
    , sd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAYAAACsc+sjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoUlEQVRogeWbu47TQBRAp90PyH/sZ1DMB0RCaOXITaQ0yzdQGAmhxJa2pCENLbhHoaRzQYc2lbVBEeyOQoQ2LARd24Mn9ozn4XFsbyxdxfEjM2fuY+48gvD4EtkW4gbnZBQMieN7xPHnxPEXxPEj4gTXxPHj9DyRMH0mmMA76/HVWRP1weNLZBcuBYsyGANJGmIOjWQbGtUGTDVXA64S2iNuMGgVlIz8J5lJxg0LmPykroaRoYmGRwAsA4+C4VFASWKm/wNKW+KZaBcpQ6aBJu6IhLq+ixRMdZB1EW3DlU3ZDc6tgK7HV2dHCjiGElyrwiKJuXZRkzzNSs0Y9cQnZRLKAhQSR9fWK68rcy3QtJ9svQsxlGCiDtoPvxRJJDJhjjZbr2xd8eSgSqndLN5M399u337cdABK1OUMhKBZki6FJC/e3e2z49eHzz+Ta4l0W6tIV5ugSQq6i5b3OWjHYN1DrSr6ZgpyezG9KYLCtc5BOuUInGkzmMhAAUgEmsN2CnjBAZWZbS9BY9Z86egkNgX9/uz1OodtpsKb529WINrvjvKBunK0BRCA4oHeXUxXzYDOEsi/ZPsHyku7tJlR9EVy/0wFQACoWqM2TXcmiPLsfenvhAyofJRCQUQatW+6KYSFKB+xoPO6oGBeD8tvO7gGZgZJBVsZyKQguYB34VzubyrBT63R1lnuq5QoyEB3n75s98zx++vNAwUt3qMHNAg0Dtw/bIA8AeG5inaUd9PIi1SmSqSg0fK+CAHPQ+X3mkexAdiGMooJrkXQIhCYKTwPn3uLRznK64GGdUDXT1/9AAG/BDCAhudAmgI11ejcBigrXQLFNroX8CeZtAwaaSUMItBjHwagoVYK2GNQTyup7y3oiEnqVYZpVT4KyUGTQjMuI1CXGaapDLyrou5q+HLTpNQYRCy0p1L6CRqUp1Jk5isDhb6T/Sye6wr7rjGoy5kck013sqDF6U5asaakWJ4iqGc8gU1BKSykerxsyJYUYdnUsho0qJ7ArvbVfCqlWAm2crQCNoRXFi1PktR7NRaZ8oEwr/XpPVoB27Ci8jigkdIik3jZUAzKAh7O2ptKOS6IIWfmy4aYuxCcg7IVYL/bnddVLa/GQjDmLu3nSxI8sT9xrV2e2dI+FvpruQLNLjIplVdvswbmbr+hPy72LfugVeVZ2n6DT2VDFRb67CPcIodL0fiRb3rEp7SNFZ/SxmR8alvN8an9eQCLoDv2d5B/9DUYD04Cr9sAAAAPdEVYdENvcHlyaWdodABUNS1DSfZh44UAAAAASUVORK5CYII="
    , ad = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAYAAACsc+sjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGElEQVRogeWbP2sbMRjGb+yWtd8hHyJzQRlKc2TI0qXgEGhPucEdPHRswXTo3iFkLgcZSz13y5YlZEiGOC3GhZomgTi1yqs72TqddHeS3vMVTiBi5/5YP+vV+zySzgHZpwF2ZYe7m4yGPUbDIaNhwmh4mtWrrJ5n75PsHDh3i/VfPmmiPWSfBnhw0NC00acsCq+davoFHDEahtjQAQJg6AVXDj1g8d5Gq6As7cEROqAeuOfbw4Hj+EsaBywCw5gO1wLK0jC9WjtkHnjo0ruBBeSwVcA8bMLi3aeooCze22glVOuE8uHuJgooSyGbTzjusOd1YYOKcD1qHaZOz9YI46AEctA6RH3YUVWCCozZte3G28MeWYFmOokrIe9e/WTfv92z+QPj5frykX18O20AtlcfFHtcAuTk5pGpBaA/f5iiJ6dYbxlVyK21QDYLO6gDmqwNsilYCr1azMLNJKC6kM3BDstAR41BAsjv6d9cvb9dNAob53t1lWmxPgCyqQpxffm46D37JVf29ctd7hy4BjMT03wGxjcHr5//KMBWgd7fLhbvoxm/NtoZI4GOdKAj73A9OZ4tQQ+2J7zhAhZ082B7wo9lx5egAlIcB1C4F0YYx6vwTY071piEBr55ccNBoecELIAue2tnzF8DaAbJexhA4Vq4B9aYpauJup926hKPDvbibJ6CSuF9cjwzQmIlKLrKvgDaQ4PUwPIK58J7cS28FiFsgsSApWEigw4bkRBonACCqgMV/4dzm5AeGp7KoAlKT0qZddlLHG5nvPwr30ccF1WEuk56BKyL/PTT6Zs9KMxCdCUDzYVj3XtKYWwEhQJfsC1onJp8O2mBxpvGpSohNqByKMvSoyk8uTlITIAKagtYqJL0mAoMHUfQxCrETKELSQQyp1qr7qm7BuTIFLq27ileha4daFmvunhXnTfWFZGMLEGJk7yI7Njfm5XCCkjZJJSFahXs/IEtPg3+rGyim7z0rECFlzXB6ryrTgP5WMtAVW+sgeTZ2DYH0LxhsLOAGSzXPBXW5F0hUan3gYRj8sY6SFvJilQL6GLqdbBlBh1A1UaKzGqC9YWMFFPvPE1TYEsNugoKr2UJ0cB6Q0bKNM1r4q2aczGGVIOukx5VQtSJgIvDiqom3j5LKapBN81C6hQB6+Ku6iylEKzFMWiY7QpgYYZimAR4hC1BX+4U47ZKZ0066W0hw+rlTrQF7CqdrdJJ356kFQvYaFsSZTpbBmnreny2JAjWJlMdWAyddN1kIpjbhiqsvG14cTYv6K7v59luGxLMfRjZG0vLLIUllzY2ggn21r4BdqmVbW7tE/RN4UwbBRyWjGA8rEG69PgN6coDVaRLj8iRrj30SLr0GCvp0oPJpGuPmpOu/XiAmMfxf/VzkH9ROBiSKvERcQAAAA90RVh0Q29weXJpZ2h0AFQ1LUNJ9mHjhQAAAABJRU5ErkJggg=="
    , id = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA4CAYAAACsc+sjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9klEQVRogeWbS2sUQRDH55izn8Avke/goc85BwQhrCARhGxnQEUMQojpISaidlARXfCiIO5FchEDiuAheNDLHhRRI4oxSkISXfknW0lnnGy6u3oeMg3FZjc7M/XrenT1YyMxMhqFlrErt46OKz0slZ6QSrek0otS6SWpdKep9Ife3/is3VQ6kUo3pJoflHN6IA99xMhoFOxGULSn9BJgfAQdsd0xiR4KDR2xAaGU0ou+cIdAx/GMPlIqaHNaH8sDMAMYbt7gWjjycdFebOUKmAmc6KFCQMd3Esx2QilREh/rRlZWnNMDyKAlA5rWbbvGbnTYF3BDZMKy4TJdWc0PBgGNdyBzTzgM2I4tbNQ/8VTPklmWRYHiDSqVjsuGcIBtH5agokzIRA+VrbyHJE6gcIMKDCFeMq70sDXo/xCX/eI1PmDYySrMS1eYCRtbgOZX2p2bvf3lzqMnqw8Xnv2cuftgJUfQTlYW3lek5wEHsDeddxvdVFv+9v3PwvNX65M37/8oIjFFoa1JlgPc5tZW16a9/7S89fjpi/WL1++thoKNU7G6m2m5Nwbcy9dvN23h+kHDC9BhTBdu/APqWxwQ3K+19W7ohg6DV/hCS6XbWaBObotkghjrFtgQzxz3jfDG9QZZySXvBguPXb7x0cmqyd5E3Tnb4mFw2aJBEbtnpq59dnTfiV1QBK0r6KlLsysYFkIkH9uG5wHUxapS6daeRZVOfEBHLiRrJ85Pb+CVhpNQUJR5zSSHocfDokumRVuuoHggYE9OzKwSMASfQUEo6goHKCQcAB0/O/UbwgVtArY3ffMqFAgWcnry6tc0NJSEYlC839ADt4f7I4tTZ5GXQMxr4bquyahpZN6Is1SCBxM0gCFpK0MAQuMtjY9wd3wPnUJwuBadRp0XAnSsV/eyQE0BjFnVZFmZxLQcwaGzKNZRDgKWQoCGFi5oOxSo6ZJktXQ8py1nWpsaXB7/Q4cBGtbEe67rtriQUMAETScZikNycYrfg6orsih1Dl59QSUlI9fh5SBQ9LpNZrWpiwmUYhWvXhlX7R9eGkWB2jaAUnFgigdoy7sELBqUo5c0S0Cfor4oUK5e0izqQ6wuVBU0NqdpIVblqwgqsybe3KWUioI2gi+OVRE0zloc4y53AhRjXai5KVVUuSx3CoZVCRTVDhcS1ZJvgdC0WcDmbEkQKEo1uJ3PwhmVilQN+Y6h0mZLgrPJBAsAND1TcRFcy6prleUmE2fbkKxKyyw+woF03jYUjI3g9CTcVZhln9tGsOHC3kVEuhi3lcK39kWdDmuIOh2/EXU5UCXqdERO1OnQo6jbMVZRp4PJom5HzUXdfjwgMqSKPwf5C9a0ri5VK+jtAAAAD3RFWHRDb3B5cmlnaHQAVDUtQ0n2YeOFAAAAAElFTkSuQmCC"
    , ld = ["href"]
    , cd = {
        class: "map-area"
    }
    , rd = {
        class: "map-container",
        "data-behavior-map": ""
    }
    , dd = {
        class: "surrounding-menu"
    }
    , ud = ["href"]
    , pd = ["src"]
    , _d = {
        class: "detail"
    }
    , md = {
        key: 0,
        class: "empty"
    }
    , fd = {
        class: "name"
    }
    , hd = {
        class: "distance"
    }
    , vd = ["href"]
    , kd = Q({
        __name: "Surrounding",
        props: {
            mapInfo: {},
            otherInfo: {},
            showStreet: {
                type: Boolean
            },
            separator: {
                type: Boolean,
                default: !0
            }
        },
        setup(t) {
            const n = t
                , i = {
                    traffic: ed,
                    shopping: td,
                    restaurant: nd,
                    bank: od,
                    hotel: sd,
                    medical: ad,
                    school: id
                }
                , _ = Ne("surrounding")
                , m = D(() => {
                    var u;
                    return (u = n.mapInfo) == null ? void 0 : u.surrounding
                }
                )
                , a = D(() => {
                    var u, v, d;
                    return (d = (v = (u = n.mapInfo) == null ? void 0 : u.address) == null ? void 0 : v.detail) == null ? void 0 : d.lat
                }
                )
                , l = D(() => {
                    var u, v, d;
                    return (d = (v = (u = n.mapInfo) == null ? void 0 : u.address) == null ? void 0 : v.detail) == null ? void 0 : d.lng
                }
                )
                , r = D(() => `https://maps.google.com.tw/maps?f=q&hl=zh-TW&q=${s(a)},${s(l)}&z=17`);
            return Fe("mapInfo", n.mapInfo),
                Fe("otherInfo", n.otherInfo),
                (u, v) => {
                    const d = Qe
                        , p = Xr
                        , f = Pt
                        , g = ye
                        , y = G("t5-tracker-click");
                    return o(),
                        c("div", {
                            ref_key: "container",
                            ref: _,
                            class: "surrounding"
                        }, [w(d, {
                            separator: u.separator
                        }, {
                            default: E(() => [S(" 周邊配套 ")]),
                            _: 1
                        }, 8, ["separator"]), e("a", {
                            href: s(r),
                            target: "_blank",
                            title: "周邊配套",
                            rel: "nofollow"
                        }, [e("div", cd, [M((o(),
                            c("div", rd, [w(p, {
                                center: {
                                    lat: +s(a),
                                    lng: +s(l)
                                },
                                "show-street": u.showStreet
                            }, null, 8, ["center", "show-street"])])), [[y, "周邊配套_點擊地圖"]])])], 8, ld), w(f, {
                                class: "map-address-mobile"
                            }), e("ul", dd, [(o(!0),
                                c(B, null, te(s(m), h => (o(),
                                    c("li", {
                                        key: h == null ? void 0 : h.key,
                                        class: "surrounding-menu-item"
                                    }, [M((o(),
                                        c("a", {
                                            class: j(["surrounding-menu-item-link", [h == null ? void 0 : h.key, h.data.length ? "" : "pointer-none"]]),
                                            href: s(r),
                                            target: "_blank",
                                            rel: "nofollow"
                                        }, [e("h4", null, [e("img", {
                                            src: i[h == null ? void 0 : h.key],
                                            alt: ""
                                        }, null, 8, pd), S(b(h.name), 1)]), e("div", _d, [h.data.length === 0 ? (o(),
                                            c("p", md, " 暫無資料 ")) : (o(!0),
                                                c(B, {
                                                    key: 1
                                                }, te(h.data, (k, A) => (o(),
                                                    c("p", {
                                                        key: A
                                                    }, [e("span", fd, [h.key === "traffic" ? (o(),
                                                        c("i", {
                                                            key: 0,
                                                            class: j(`ic-house house-${k.type}`)
                                                        }, null, 2)) : I("", !0), e("span", null, b(k.name), 1)]), e("span", hd, b(k.distanceText), 1)]))), 128))])], 10, ud)), [[y, `周邊配套_${h.name}`]])]))), 128))]), e("a", {
                                                            class: "surrounding-more-mobile",
                                                            href: s(r),
                                                            target: "_blank"
                                                        }, [M((o(),
                                                            N(g, {
                                                                line: "",
                                                                theme: "info",
                                                                size: "large"
                                                            }, {
                                                                default: E(() => [S(" 查看更多 ")]),
                                                                _: 1
                                                            })), [[y, "周邊配套_查看更多"]])], 8, vd)], 512)
                }
        }
    })
    , c1 = U(kd, [["__scopeId", "data-v-7a72fb6b"]])
    , gd = "" + new URL("recom-empty-touch.Dls1oRNx.png", import.meta.url).href
    , yd = t => (Z("data-v-b0af9dad"),
        t = t(),
        J(),
        t)
    , bd = ["href"]
    , Ad = {
        class: "ware-item-left"
    }
    , Id = {
        class: "ware-item-right"
    }
    , $d = {
        class: "top"
    }
    , wd = {
        class: "title"
    }
    , Cd = {
        key: 0,
        class: "goodhouse"
    }
    , Dd = {
        class: "layout"
    }
    , Ed = yd(() => e("span", {
        class: "divider"
    }, null, -1))
    , Sd = {
        key: 0,
        class: "labels"
    }
    , Bd = {
        class: "price bottom"
    }
    , Td = {
        class: "value"
    }
    , Md = {
        class: "unit"
    }
    , Vd = {
        key: 0,
        class: "unit-price"
    }
    , Ld = Q({
        __name: "RecomItemTouch",
        props: {
            data: {},
            tabKey: {}
        },
        setup(t) {
            const n = t
                , { type: i, typeStr: _ } = Mt()
                , m = D(() => {
                    var l, r, u;
                    return n.data.photo_list.length ? (u = (r = (l = n.data) == null ? void 0 : l.photo_list) == null ? void 0 : r[0]) == null ? void 0 : u.photo : gd
                }
                )
                , a = D(() => {
                    const { community_addr: l, kind: r, section_str: u, hide_addr_detail: v, addr_number: d, street_name: p, addr_number2: f, alley: g, lane: y, segment: h, small_segment: k } = n.data;
                    if (l && +r != 11)
                        return `${u}-${l}`;
                    const A = +v != 1 ? `${Ve(d, "號")}${f ? "之" : ""}${f}` : ""
                        , $ = p ? `${p}${Ve(g, "巷")}${Ve(y, "弄")}${A}` : ""
                        , C = `${Ve(h, "段")}${Ve(k, "小段")}`;
                    return `${u}-${$ || C}`
                }
                );
            return (l, r) => {
                var y, h, k;
                const u = Ee
                    , v = Ke
                    , d = an
                    , p = Et
                    , f = G("t5-tracker-click")
                    , g = G("t5-tracker-visually");
                return M((o(),
                    c("a", {
                        class: "ware-item",
                        href: `/${s(_)}/${l.data.post_id}?from=businessDetail`,
                        target: "_blank"
                    }, [e("div", Ad, [w(u, {
                        src: s(m),
                        alt: "物件封面"
                    }, null, 8, ["src"]), +((k = (h = (y = l.data) == null ? void 0 : y.photo_list) == null ? void 0 : h[0]) == null ? void 0 : k.type) == 2 ? (o(),
                        N(v, {
                            key: 0,
                            size: 20,
                            type: "video",
                            class: "touch-medium-icon"
                        })) : I("", !0), +l.data.isRecom ? (o(),
                            N(d, {
                                key: 1,
                                type: "recom"
                            })) : +l.data.is_mvip ? (o(),
                                N(d, {
                                    key: 2,
                                    type: "top"
                                })) : I("", !0)]), e("div", Id, [w(p, {
                                    class: "collect",
                                    "collect-info": {
                                        id: +l.data.post_id,
                                        type: s(i)
                                    },
                                    onClick: r[0] || (r[0] = fe(() => { }
                                        , ["prevent"]))
                                }, null, 8, ["collect-info"]), e("div", $d, [e("div", wd, [+l.data.good_house ? (o(),
                                    c("span", Cd, "必看好屋")) : I("", !0), S(" " + b(l.data.title), 1)]), e("div", Dd, [S(b(l.data.area) + " ", 1), Ed, S(" " + b(s(a)), 1)]), l.data.tags.length ? (o(),
                                        c("div", Sd, [(o(!0),
                                            c(B, null, te(l.data.tags, A => (o(),
                                                c("span", {
                                                    key: A.id
                                                }, b(A.name), 1))), 128))])) : I("", !0)]), e("div", Bd, [e("span", Td, b(l.data.price_value), 1), e("span", Md, b(l.data.price_unit), 1), l.data.unitPriceInfo.value ? (o(),
                                                    c("span", Vd, b(`${l.data.unitPriceInfo.value}${l.data.unitPriceInfo.unit}`), 1)) : I("", !0)])])], 8, bd)), [[f, {
                                                        id: l.data.post_id,
                                                        eventName: "recom",
                                                        key: l.tabKey
                                                    }], [g, {
                                                        id: l.data.post_id,
                                                        eventName: "recom",
                                                        key: l.tabKey
                                                    }]])
            }
        }
    })
    , zd = U(Ld, [["__scopeId", "data-v-b0af9dad"]])
    , Nd = {
        class: "recommend-container"
    }
    , Rd = {
        class: "recommend-container-top"
    }
    , Qd = {
        class: "tabs-container"
    }
    , Ud = ["onClick"]
    , Pd = {
        class: "recommend-container-bottom"
    }
    , Fd = {
        class: "title"
    }
    , qd = {
        class: "wares"
    }
    , Hd = ["onClick"]
    , Od = Q({
        __name: "RecomListTouch",
        props: {
            data: {},
            basicInfo: {}
        },
        setup(t) {
            var v;
            const n = t
                , { onExposureObserver: i, setExposureData: _ } = ct()
                , m = D(() => {
                    var d;
                    return [{
                        key: "nearbyHouse",
                        title: `附近${(d = n.basicInfo) == null ? void 0 : d.kindStr}`,
                        nodeClass: "nearby-house",
                        exposureKey: "nearby_land",
                        data: n.data.nearby_house || []
                    }, {
                        key: "similarPrice",
                        title: "相似價格",
                        nodeClass: "similar-price",
                        exposureKey: "similar_price",
                        data: n.data.like_price_house || []
                    }, {
                        key: "similarArea",
                        title: "相似面積",
                        nodeClass: "similar-area",
                        exposureKey: "similar_area",
                        data: n.data.like_area_house || []
                    }]
                }
                )
                , a = T({
                    nearbyHouse: !1,
                    similarPrice: !1,
                    similarArea: !1
                })
                , l = T(((v = m.value.find(d => d.data.length)) == null ? void 0 : v.key) || m.value[0].key);
            function r(d) {
                var f;
                l.value = d;
                const p = document.querySelector(`.${(f = m.value.find(g => g.key === d)) == null ? void 0 : f.nodeClass}`);
                p == null || p.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            function u(d) {
                var p;
                if (a.value[d] = !a.value[d],
                    !a.value[d]) {
                    const f = document.querySelector(`.${(p = m.value.find(g => g.key === d)) == null ? void 0 : p.nodeClass}`);
                    f == null || f.scrollIntoView({
                        block: "center"
                    })
                }
            }
            return Ce(() => {
                m.value.forEach(d => {
                    d.data.length || _(d.exposureKey, "none")
                }
                )
            }
            ),
                (d, p) => {
                    const f = Qe
                        , g = zd
                        , y = G("t5-tracker-click")
                        , h = G("module-exposure");
                    return o(),
                        c("div", Nd, [e("div", Rd, [w(f, null, {
                            default: E(() => [S(" 猜你喜歡 ")]),
                            _: 1
                        }), e("div", Qd, [(o(!0),
                            c(B, null, te(s(m), k => (o(),
                                c(B, {
                                    key: k.key
                                }, [k.data.length ? M((o(),
                                    c("div", {
                                        key: 0,
                                        ref_for: !0,
                                        ref: "tabRefs",
                                        class: j(["tab-item", {
                                            active: s(l) === k.key
                                        }]),
                                        onClick: A => r(k.key)
                                    }, [S(b(k.title), 1)], 10, Ud)), [[y, `${k.title}_${k.title}`]]) : I("", !0)], 64))), 128))])]), e("div", Pd, [(o(!0),
                                        c(B, null, te(s(m), k => (o(),
                                            c(B, {
                                                key: k.key
                                            }, [k.data.length ? M((o(),
                                                c("div", {
                                                    key: 0,
                                                    class: j(["content", k.nodeClass])
                                                }, [e("div", Fd, b(k.title), 1), e("div", qd, [(o(!0),
                                                    c(B, null, te(s(a)[k.key] ? k.data : k.data.slice(0, 3), A => (o(),
                                                        N(g, {
                                                            key: A.post_id,
                                                            data: A,
                                                            "tab-key": k.key
                                                        }, null, 8, ["data", "tab-key"]))), 128))]), k.data.length > 3 ? (o(),
                                                            c("div", {
                                                                key: 0,
                                                                class: "view-more",
                                                                onClick: A => u(k.key)
                                                            }, b(s(a)[k.key] ? "收起" : "查看更多"), 9, Hd)) : I("", !0)], 2)), [[h, {
                                                                key: k.exposureKey,
                                                                cb: d.basicInfo.kind === 11 ? s(i) : () => { }
                                                            }]]) : I("", !0)], 64))), 128))])])
                }
        }
    })
    , Kd = U(Od, [["__scopeId", "data-v-d286c7af"]])
    , Gd = "" + new URL("empty-guess-like.CUOlxyA8.png", import.meta.url).href
    , Wd = {
        class: "picture-container"
    }
    , xd = {
        class: "swiper-inner"
    }
    , Yd = Q({
        __name: "WarePicturePc",
        props: {
            pictures: {},
            prefetchCount: {}
        },
        setup(t) {
            const n = Le(ot, {})
                , i = T()
                , _ = m => {
                    i.value = m
                }
                ;
            return (m, a) => {
                var v, d;
                const l = Ee
                    , r = Ke
                    , u = G("t5-tracker-click");
                return o(),
                    c("div", Wd, [m.pictures.length > 1 ? (o(),
                        N(s(nt), {
                            key: 0,
                            "slides-per-view": 1,
                            navigation: {
                                nextEl: ".next",
                                prevEl: ".prev",
                                disabledClass: "swiper-button-disabled"
                            },
                            pagination: {
                                dynamicBullets: m.pictures.length > 6,
                                dynamicMainBullets: 3
                            },
                            modules: [s(ns), s(vn)],
                            class: "ware-picture-swiper",
                            onSwiper: _
                        }, {
                            default: E(() => [(o(!0),
                                c(B, null, te(m.pictures, (p, f) => (o(),
                                    N(s(qe), {
                                        key: p.photo
                                    }, {
                                        default: E(() => {
                                            var g, y;
                                            return [e("div", xd, [w(l, {
                                                src: p.photo,
                                                alt: "物件圖片",
                                                preload: m.prefetchCount ? ((g = s(i)) == null ? void 0 : g.activeIndex) > 0 && f <= ((y = s(i)) == null ? void 0 : y.activeIndex) + m.prefetchCount : !1
                                            }, null, 8, ["src", "preload"]), +p.type == 2 ? (o(),
                                                N(r, {
                                                    key: 0,
                                                    size: 48,
                                                    type: "video"
                                                })) : I("", !0)])]
                                        }
                                        ),
                                        _: 2
                                    }, 1024))), 128)), M(e("div", {
                                        class: "btn prev ic-house house-arrow-left",
                                        onClick: a[0] || (a[0] = fe(() => { }
                                            , ["stop"]))
                                    }, null, 512), [[u, `${s(n).secondLevel}_切換查看圖片`]]), M(e("div", {
                                        class: "btn next ic-house house-arrow-right",
                                        onClick: a[1] || (a[1] = fe(() => { }
                                            , ["stop"]))
                                    }, null, 512), [[u, `${s(n).secondLevel}_切換查看圖片`]])]),
                            _: 1
                        }, 8, ["pagination", "modules"])) : (o(),
                            c(B, {
                                key: 1
                            }, [w(l, {
                                src: ((v = m.pictures[0]) == null ? void 0 : v.photo) || s(Gd),
                                alt: "物件圖片"
                            }, null, 8, ["src"]), +((d = m.pictures[0]) == null ? void 0 : d.type) == 2 ? (o(),
                                N(r, {
                                    key: 0,
                                    size: 48,
                                    type: "video"
                                })) : I("", !0)], 64))])
            }
        }
    })
    , jd = U(Yd, [["__scopeId", "data-v-d3adfd91"]])
    , Zd = ["href", "title"]
    , Jd = ["href"]
    , Xd = {
        class: "layout"
    }
    , eu = {
        key: 0,
        class: "divider"
    }
    , tu = {
        key: 1,
        class: "divider"
    }
    , nu = {
        class: "ellipsis"
    }
    , ou = {
        class: "price"
    }
    , su = {
        class: "value"
    }
    , au = {
        class: "unit"
    }
    , iu = {
        key: 0,
        class: "unit-price"
    }
    , lu = {
        class: "unit-2"
    }
    , cu = Q({
        __name: "RecomItemPc",
        props: {
            data: {},
            tabKey: {}
        },
        setup(t, { expose: n }) {
            const i = t
                , _ = Le(ot, {})
                , { type: m, typeStr: a } = Mt()
                , l = D(() => i.data.photo_list || [])
                , r = T();
            return n({
                wareItemRef: r
            }),
                (u, v) => {
                    const d = ln
                        , p = Et
                        , f = jd
                        , g = G("t5-tracker-click")
                        , y = G("t5-tracker-visually");
                    return M((o(),
                        c("div", {
                            ref_key: "wareItemRef",
                            ref: r,
                            class: "ware-item"
                        }, [M((o(),
                            c("a", {
                                class: "pictures",
                                href: `/${s(a)}/${u.data.post_id}?from=businessDetail`,
                                target: "_blank",
                                title: u.data.title
                            }, [w(d, {
                                class: "ware-tags",
                                "is-good-house": +u.data.good_house,
                                tags: u.data.tags,
                                onClick: v[0] || (v[0] = fe(() => { }
                                    , ["stop", "prevent"]))
                            }, null, 8, ["is-good-house", "tags"]), w(p, {
                                "is-plane": !0,
                                class: "ware-collect",
                                "collect-info": {
                                    id: +u.data.post_id,
                                    type: s(m)
                                },
                                onClick: v[1] || (v[1] = fe(() => { }
                                    , ["stop", "prevent"]))
                            }, null, 8, ["collect-info"]), M(w(f, {
                                pictures: s(l),
                                "prefetch-count": 2
                            }, null, 8, ["pictures"]), [[g, {
                                id: u.data.post_id,
                                eventName: "recom",
                                key: u.tabKey
                            }]])], 8, Zd)), [[g, `${s(_).secondLevel}_點擊查看物件`]]), M((o(),
                                c("a", {
                                    class: "title",
                                    href: `/${s(a)}/${u.data.post_id}?from=businessDetail`,
                                    target: "_blank"
                                }, [S(b(u.data.title), 1)], 8, Jd)), [[g, `${s(_).secondLevel}_點擊查看物件`]]), e("div", Xd, [e("span", null, b(u.data.layoutInfo.one), 1), u.data.layoutInfo.two ? (o(),
                                    c("span", eu)) : I("", !0), e("span", null, b(u.data.layoutInfo.two), 1), u.data.layoutInfo.three ? (o(),
                                        c("span", tu)) : I("", !0), e("span", nu, b(u.data.layoutInfo.three), 1)]), e("div", ou, [e("span", su, [S(b(u.data.price_value), 1), e("span", au, b(u.data.price_unit) + b(u.data.price_car_str ? "(含車位)" : ""), 1)]), u.data.unitPriceInfo.value ? (o(),
                                            c("span", iu, [S(b(u.data.unitPriceInfo.value), 1), e("span", lu, b(u.data.unitPriceInfo.unit), 1)])) : I("", !0)])])), [[y, {
                                                id: u.data.post_id,
                                                eventName: "recom",
                                                key: u.tabKey
                                            }]])
                }
        }
    })
    , ru = U(cu, [["__scopeId", "data-v-b8039bba"]])
    , du = {
        class: "container"
    }
    , kt = 1
    , uu = Q({
        __name: "RecomSwiperPc",
        props: {
            data: {},
            gaMenu: {},
            tabKey: {}
        },
        setup(t) {
            Jt(g => ({
                "05f55583": s(p)
            }));
            const n = t;
            Fe(ot, {
                secondLevel: n.gaMenu
            });
            const i = D(() => n.data.length)
                , _ = T(1)
                , m = T(4)
                , a = i.value / m.value
                , l = T([])
                , r = T({});
            function u(g) {
                g ? _.value < a && _.value++ : _.value > kt && _.value--,
                    v()
            }
            function v() {
                var y, h;
                const g = ((y = l.value[1]) == null ? void 0 : y.wareItemRef.offsetLeft) - ((h = l.value[0]) == null ? void 0 : h.wareItemRef.offsetLeft);
                r.value = {
                    transform: `translateX(-${g * m.value * (_.value - 1)}px)`
                }
            }
            const d = T()
                , p = T("24px");
            function f() {
                var g, y;
                p.value = `${(((g = d.value) == null ? void 0 : g.offsetWidth) - ((y = l.value[0]) == null ? void 0 : y.wareItemRef.offsetWidth) * m.value) / 3}px`
            }
            return Ce(() => {
                f(),
                    Xe(window, "resize", () => {
                        f(),
                            _.value = 1,
                            r.value = {
                                transform: "translateX(0px)"
                            }
                    }
                    )
            }
            ),
                (g, y) => {
                    const h = ru
                        , k = G("t5-tracker-click");
                    return o(),
                        c("div", du, [e("div", {
                            ref_key: "wareListRef",
                            ref: d,
                            class: "ware-list"
                        }, [e("div", {
                            class: "ware-list-wrapper",
                            style: be(s(r))
                        }, [(o(!0),
                            c(B, null, te(g.data, A => (o(),
                                N(h, {
                                    key: A.post_id,
                                    ref_for: !0,
                                    ref_key: "wareItemRefs",
                                    ref: l,
                                    data: A,
                                    "tab-key": g.tabKey
                                }, null, 8, ["data", "tab-key"]))), 128))], 4)], 512), M(e("div", {
                                    class: "btn prev ic-house house-arrow-left",
                                    onClick: y[0] || (y[0] = A => u(!1))
                                }, null, 512), [[mt, s(_) > kt], [k, `${g.gaMenu}_切換查看更多物件`]]), M(e("div", {
                                    class: "btn next ic-house house-arrow-right",
                                    onClick: y[1] || (y[1] = A => u(!0))
                                }, null, 512), [[mt, s(_) < a], [k, `${g.gaMenu}_切換查看更多物件`]])])
                }
        }
    })
    , pu = U(uu, [["__scopeId", "data-v-d35e3cf7"]])
    , _u = {
        class: "recommend-container"
    }
    , mu = {
        class: "recommend-container-title"
    }
    , fu = {
        class: "recom-list"
    }
    , hu = Q({
        __name: "RecomListPc",
        props: {
            data: {},
            basicInfo: {}
        },
        setup(t) {
            const n = t
                , { onExposureObserver: i, setExposureData: _ } = ct()
                , m = D(() => {
                    var a;
                    return [{
                        title: `附近${(a = n.basicInfo) == null ? void 0 : a.kindStr}`,
                        key: "nearbyHouse",
                        exposureKey: "nearby_land",
                        data: n.data.nearby_house || []
                    }, {
                        title: "相似價格",
                        key: "similarPrice",
                        exposureKey: "similar_price",
                        data: n.data.like_price_house || []
                    }, {
                        title: "相似面積",
                        key: "similarArea",
                        exposureKey: "similar_area",
                        data: n.data.like_area_house || []
                    }]
                }
                );
            return Ce(() => {
                m.value.forEach(a => {
                    a.data.length || _(a.exposureKey, "none")
                }
                )
            }
            ),
                (a, l) => {
                    const r = pu
                        , u = G("module-exposure");
                    return o(),
                        c("div", _u, [(o(!0),
                            c(B, null, te(s(m), v => (o(),
                                c(B, {
                                    key: v.title
                                }, [v.data.length ? (o(),
                                    c(B, {
                                        key: 0
                                    }, [e("div", mu, b(v.title), 1), M((o(),
                                        c("div", fu, [w(r, {
                                            data: v.data,
                                            "ga-menu": v.title,
                                            "tab-key": v.key
                                        }, null, 8, ["data", "ga-menu", "tab-key"])])), [[u, {
                                            key: v.exposureKey,
                                            cb: a.basicInfo.kind === 11 ? s(i) : () => { }
                                        }]])], 64)) : I("", !0)], 64))), 128))])
                }
        }
    })
    , vu = U(hu, [["__scopeId", "data-v-ed7ead10"]])
    , ku = Q({
        __name: "Recommend",
        props: {
            data: {}
        },
        setup(t) {
            const n = t
                , i = ge()
                , _ = D(() => i.params.id)
                , m = Xt()
                , a = Ne("recommend")
                , { isMobile: l } = he()
                , r = T({})
                , u = D(() => {
                    var f, g, y, h, k, A;
                    return ((g = (f = r.value) == null ? void 0 : f.like_area_house) == null ? void 0 : g.length) || ((h = (y = r.value) == null ? void 0 : y.like_price_house) == null ? void 0 : h.length) || ((A = (k = r.value) == null ? void 0 : k.nearby_house) == null ? void 0 : A.length)
                }
                );
            Ce(() => {
                v()
            }
            );
            function v() {
                $fetch(m.recomList, {
                    method: "get",
                    credentials: "include",
                    headers: de(),
                    query: {
                        type: n.data.type,
                        post_id: _.value,
                        size: l ? 10 : 12
                    }
                }).then(f => {
                    f.status && (r.value = d(f.data),
                        en())
                }
                ).catch(f => {
                    console.log(f)
                }
                )
            }
            function d(f) {
                return Object.keys(f).forEach(g => {
                    var y;
                    (y = f[g]) != null && y.length && f[g].forEach(h => {
                        p(h)
                    }
                    )
                }
                ),
                    f
            }
            function p(f) {
                var $, C;
                const g = {
                    one: f.area,
                    two: f.floor,
                    three: ""
                };
                switch (+f.kind) {
                    case 5:
                        g.three = f.store_type_name;
                        break;
                    case 6:
                        g.three = f.fitment_name;
                        break;
                    case 7:
                        g.three = [f.land_use_zone_name, f.land_use_sub_zone_name].filter(L => !!L && L !== "工業區").join("·");
                        break;
                    case 11:
                        g.two = f.groundtype_name,
                            g.three = [f.land_use_zone_name, f.land_use_sub_zone_name].filter(L => !!L && L !== "工業區").join("·");
                        break
                }
                f.layoutInfo = g;
                const y = /^([\d\.]+)([^\d]+)/
                    , h = ($ = f.area_price) == null ? void 0 : $.replace(/,/g, "").match(y)
                    , k = (+((h == null ? void 0 : h[1]) || "")).toLocaleString();
                f.unitPriceInfo = {
                    value: f.area_price ? k : "",
                    unit: (h == null ? void 0 : h[2]) || ""
                };
                const A = (C = f.tags) == null ? void 0 : C.findIndex(L => +L.id == 7);
                if (+f.free_period > 0 && A > -1) {
                    const L = +f.free_period == .5 ? "半" : f.free_period
                        , P = +f.free_period_unit == 2 ? "個月" : "日";
                    f.tags[A].name = `免租${L}${P}`
                }
            }
            return (f, g) => {
                const y = Kd
                    , h = vu
                    , k = Dt;
                return o(),
                    N(k, null, {
                        default: E(() => [s(u) ? (o(),
                            c("div", {
                                key: 0,
                                ref_key: "container",
                                ref: a
                            }, [s(l) ? (o(),
                                N(y, {
                                    key: 0,
                                    data: s(r),
                                    "basic-info": f.data,
                                    clsss: "recommend-touch"
                                }, null, 8, ["data", "basic-info"])) : (o(),
                                    N(h, {
                                        key: 1,
                                        data: s(r),
                                        "basic-info": f.data,
                                        clsss: "recommend-pc"
                                    }, null, 8, ["data", "basic-info"]))], 512)) : I("", !0)]),
                        _: 1
                    })
            }
        }
    })
    , r1 = U(ku, [["__scopeId", "data-v-b8b9d341"]])
    , gu = {}
    , yu = t => (Z("data-v-414883c1"),
        t = t(),
        J(),
        t)
    , bu = {
        class: "remark"
    }
    , Au = yu(() => e("div", null, [e("p", null, "1. 房屋照片僅反應使用現況，用途以使用執照或謄本記載為準。刊登內容的法定用途與現況使用不同時，恐涉違反建管法規，有遭勒令拆 除、改建、停止使用或恢復原狀之風險，請消費者於購屋或承租前多加了解相關規定，以保障自身權益。"), e("p", null, "2. 本公司所使用之所有內容，任何人不得擅自使用非經授權之智慧財產權內容，亦不得使用網路爬蟲或其他自動下載程式或任何其他類似或具相同功能的手動程序來連續自動搜索、獲得、使用、下載，如有違反，除依相關法律規定論處，並應對591負損害賠償責任，本公司將收取一個刊登物件內容，三千元計算之費用，您與本公司簽署正式合作合約前，應立即停止非經合法授權之行為")], -1))
    , Iu = [Au];
function $u(t, n) {
    return o(),
        c("section", bu, Iu)
}
const d1 = U(gu, [["render", $u], ["__scopeId", "data-v-414883c1"]])
    , Ft = t => (Z("data-v-4fa9a5b1"),
        t = t(),
        J(),
        t)
    , wu = {
        class: "contact-bar-wrap"
    }
    , Cu = {
        class: "contact-bar"
    }
    , Du = {
        class: "contact-bar-left"
    }
    , Eu = {
        class: "contact"
    }
    , Su = {
        class: "contact-avatar"
    }
    , Bu = ["src"]
    , Tu = {
        class: "contact-info"
    }
    , Mu = {
        class: "base-info"
    }
    , Vu = {
        class: "name"
    }
    , Lu = {
        class: "company-info"
    }
    , zu = {
        class: "contact-bar-right"
    }
    , Nu = Ft(() => e("span", null, "視訊看屋更方便", -1))
    , Ru = Ft(() => e("span", null, "專業顧問秒答疑", -1))
    , Qu = Q({
        __name: "ContactBar",
        props: {
            linkInfo: {},
            kind: {}
        },
        setup(t) {
            const n = t
                , { open: i } = Bt(() => {
                    var a;
                    return (a = n.linkInfo) == null ? void 0 : a.line
                }
                )
                , _ = D(() => +n.linkInfo.role == 3);
            async function m() {
                var l;
                He("喚起APP");
                const { sendHouseMessage: a } = We();
                a((l = n.linkInfo) == null ? void 0 : l.imUid, [{
                    msg: "您好"
                }], "底欄-房聊")
            }
            return (a, l) => {
                var v, d;
                const r = Re
                    , u = G("t5-tracker-click");
                return o(),
                    c("section", wu, [e("div", Cu, [e("div", Du, [e("div", Eu, [e("div", Su, [e("img", {
                        src: a.linkInfo.avatar || s(xe)
                    }, null, 8, Bu)]), e("div", Tu, [e("p", Mu, [e("span", Vu, b(s($e)((v = a.linkInfo) == null ? void 0 : v.linkman, 3)), 1), s(_) ? (o(),
                        c("i", {
                            key: 0,
                            class: j(["icon", a.linkInfo.approveStatus === 1 ? "professional-icon" : "professional-gray-icon"])
                        }, null, 2)) : I("", !0)]), e("div", Lu, [e("p", null, b(!a.linkInfo.hidCompany && a.linkInfo.companyname || a.linkInfo.econName), 1)])])])]), e("div", zu, [(d = a.linkInfo) != null && d.line && a.kind !== 11 ? M((o(),
                            c("button", {
                                key: 0,
                                class: "line",
                                "data-behavior-friend": "",
                                "data-gtm-behavior": "line_friend",
                                onClick: l[0] || (l[0] = (...p) => s(i) && s(i)(...p))
                            }, [S(" LINE聯絡 "), Nu])), [[u, "底欄_LINE"]]) : I("", !0), a.kind === 11 ? M((o(),
                                c("button", {
                                    key: 1,
                                    class: "rent-theme",
                                    onClick: m
                                }, [S(" 在線問 "), Ru])), [[u, "底欄_在線問_點擊"]]) : I("", !0), w(r, {
                                    "link-info": a.linkInfo
                                }, {
                                    default: E(() => [M((o(),
                                        c("button", {
                                            "data-behavior-call": "",
                                            "data-gtm-behavior": "call",
                                            class: j([a.kind === 11 ? "land-theme" : "rent-theme"])
                                        }, [S(" 打電話 "), e("span", null, b(a.linkInfo.isTransferTel ? "隱私保護放心撥" : "獲得更全面資訊"), 1)], 2)), [[u, "底欄_打電話"]])]),
                                    _: 1
                                }, 8, ["link-info"])])])])
            }
        }
    })
    , u1 = U(Qu, [["__scopeId", "data-v-4fa9a5b1"]])
    , qt = t => (Z("data-v-2a3234b0"),
        t = t(),
        J(),
        t)
    , Uu = qt(() => e("div", {
        class: "question-container-title"
    }, " 591“土地”服務滿意度調查 ", -1))
    , Pu = qt(() => e("div", {
        class: "question-container-tip"
    }, " 希望您能抽出1分鐘時間，將您使用土地服務的感受和建議告訴我們 ", -1))
    , Fu = Q({
        __name: "QuestionNaireModal.client",
        setup(t) {
            const n = tn("land-question-naire", {
                default: () => 0,
                path: "/",
                domain: ".591.com.tw",
                expires: mn().add(30, "day").toDate()
            })
                , i = T(n.value === 0);
            n.value = 1;
            function _() {
                i.value = !1
            }
            return (m, a) => {
                const l = nn;
                return s(i) ? (o(),
                    N(l, {
                        key: 0,
                        mask: s(i)
                    }, {
                        default: E(() => [e("div", {
                            class: "question-container"
                        }, [e("a", {
                            class: "question-container-img",
                            href: "https://forms.gle/CTpNGCUqbnEhXAw38",
                            target: "_blank",
                            onClick: _
                        }), Uu, Pu, e("div", {
                            class: "question-container-btns"
                        }, [e("span", {
                            onClick: _
                        }, "不用了，謝謝"), e("a", {
                            class: "jump-btn",
                            href: "https://forms.gle/CTpNGCUqbnEhXAw38",
                            target: "_blank",
                            onClick: _
                        }, "現在馬上開始吧！")])])]),
                        _: 1
                    }, 8, ["mask"])) : I("", !0)
            }
        }
    })
    , p1 = U(Fu, [["__scopeId", "data-v-2a3234b0"]]);
function _1(t, n) {
    const _ = [7, 11].includes(t);
    return {
        config: [{
            name: "提供設備",
            id: "facility"
        }, {
            name: `${_ ? n : "屋況"}介紹`,
            id: "house-condition"
        }, {
            name: "實價登錄",
            id: "trend-price"
        }, {
            name: "商圈解析",
            id: "business-circle"
        }, {
            name: "價格行情",
            id: "price-market"
        }, {
            name: "周邊",
            id: "surrounding"
        }, {
            name: "推薦",
            id: "recommend"
        }, {
            name: "土地資訊",
            id: "news-land"
        }]
    }
}
export { Ju as _, Xu as a, e1 as b, o1 as c, s1 as d, a1 as e, l1 as f, _1 as g, c1 as h, r1 as i, d1 as j, u1 as k, Zu as l, p1 as m, t1 as n, n1 as o, Qe as p, Te as q, Pl as r, Wl as s, gn as t, Vl as u, oc as v, fr as w, ct as x, i1 as y };
