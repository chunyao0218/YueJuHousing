function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
    )(t)
}
function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}
function _iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
        return Array.from(t)
}
function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = new Array(t.length); e < t.length; e++)
            i[e] = t[e];
        return i
    }
}
function ownKeys(e, t) {
    var i, r = Object.keys(e);
    return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e),
        t && (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        r.push.apply(r, i)),
        r
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(i, !0).forEach(function (t) {
            _defineProperty(e, t, i[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        })
    }
    return e
}
function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i,
        t
}
define("vue-search-item", function (require, exports, module) {
    module.exports = {
        template: "#vue-sale-search-item",
        props: {
            data: Object,
            index: Number,
            order: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            label: function () {
                return {
                    1: "縣市",
                    2: "鄉鎮",
                    3: "街道",
                    4: "社區",
                    5: "獨棟"
                }[this.data.type] || ""
            },
            name: function () {
                var t = this.data.type ? this.data.title_high_light : this.data.name
                    , e = /([碧筵綰]+)/g;
                return t && e.test(t) && (t = t.replaceAll(e, '<em style="font-weight: normal;">$1</em>')),
                    t || this.data.id
            },
            address: function () {
                var t = this.data
                    , e = t.shop_name ? "".concat(t.shop_name, " | ") : "";
                return {
                    1: t.region,
                    2: "".concat(t.region),
                    3: "".concat(t.region).concat(t.section),
                    4: "".concat(e).concat(t.section).concat(t.address_high_light),
                    5: "".concat(e).concat(t.section).concat(t.address_high_light)
                }[t.type] || this.data.address
            }
        },
        methods: {
            onSearchItem: function (t) {
                this.$emit("search-item", _objectSpread({}, t, {
                    actionType: 5
                }))
            }
        }
    }
}),
    define("mixin", function (require, exports, module) {
        module.exports = {
            props: ["dataSource"],
            data: function () {
                return {
                    activeIndex: -1
                }
            },
            filters: {
                zeroReplace: function (t) {
                    return parseInt(t) ? t : "--"
                }
            },
            methods: {
                onMouseOverHandle: function (t) {
                    this.activeIndex = t
                },
                onMouseOutHandle: function () {
                    this.activeIndex = -1
                },
                getHousingName: function (t) {
                    return {
                        1: "預售屋",
                        2: "新成屋",
                        4: "預推案"
                    }[t]
                }
            }
        }
    }),
    define("vue-search-match", ["vue-search-item"], function (require, exports, module) {
        var t = require("vue-search-item");
        module.exports = {
            template: "#vue-search-match",
            props: {
                data: Array
            },
            components: {
                "vue-search-item": t
            },
            methods: {
                onSearchItem: function (t) {
                    this.$emit("search-item", _objectSpread({}, t, {
                        actionType: 5
                    }))
                }
            }
        }
    }),
    define("vue-search-empty", function (require, exports, module) {
        module.exports = {
            template: "#vue-sale-search-empty",
            props: {
                keyWords: String
            },
            data: function () {
                return {
                    regionTxt: window.region_name
                }
            },
            methods: {
                toggleFeedBack: function () {
                    this.$emit("toggle-feed-back")
                }
            }
        }
    }),
    define("vue-search-hot", ["vue-search-item"], function (require, exports, module) {
        var t = require("vue-search-item");
        module.exports = {
            template: "#vue-sale-search-hot",
            props: {
                data: Array
            },
            components: {
                "vue-search-item": t
            },
            methods: {
                onSearchItem: function (t) {
                    this.$emit("search-item", _objectSpread({}, t, {
                        title: t.name,
                        type: 4,
                        isCommunity: !0,
                        actionType: 2
                    }))
                }
            }
        }
    }),
    define("vue-search-history", function (require, exports, module) {
        module.exports = {
            template: "#vue-sale-search-history",
            props: {
                data: Array
            },
            data: function () {
                return {
                    moreBtnvisible: !1,
                    moreVisible: !1
                }
            },
            watch: {
                data: function () {
                    this.initMoreVisible()
                }
            },
            mounted: function () {
                this.initMoreVisible()
            },
            methods: {
                initMoreVisible: function () {
                    var t = this.$refs.historyRef.scrollHeight || 0
                        , e = this.$refs.historyRef.clientHeight || 0;
                    this.moreBtnvisible = e < t
                },
                toggleMoreVisible: function () {
                    this.moreVisible = !this.moreVisible
                },
                onClearHistory: function () {
                    this.$emit("clear-history")
                },
                onSearchItem: function (t) {
                    this.$emit("search-item", _objectSpread({}, t, {
                        actionType: 1
                    }))
                }
            }
        }
    }),
    define("listItem", function (require, exports, module) {
        Vue.component("vue-search-list-item", {
            template: "#vue-search-list-item",
            props: {
                item: {
                    type: Object,
                    required: !0,
                    default: function () {
                        return {}
                    }
                },
                index: {
                    type: Number,
                    required: !0,
                    default: -1
                },
                activeIndex: {
                    type: Number,
                    required: !0,
                    default: -1
                }
            },
            filters: {
                zeroReplace: function (t) {
                    return parseInt(t) ? t : "--"
                }
            },
            methods: {
                getLabel: function (t) {
                    switch (t.search_type) {
                        case 1:
                            return "社區";
                        case 4:
                            return "街道";
                        case 5:
                            return "鄉鎮";
                        default:
                            return "獨棟"
                    }
                },
                getResultName: function (t) {
                    switch (t.search_type) {
                        case 1:
                            return t.name_highlight || t.name;
                        case 4:
                            return t.street_highlight || t.street;
                        case 5:
                            return t.section_highlight || t.section;
                        case 6:
                            return t.region_highlight || t.region;
                        case 7:
                            return t.name_highlight || t.name;
                        default:
                            return t.name
                    }
                },
                getResultAddress: function (t) {
                    switch (t.search_type) {
                        case 1:
                            return t.full_address_highlight || t.full_address;
                        case 4:
                            return "".concat(t.region, " ").concat(t.section);
                        case 5:
                        case 6:
                            return t.region;
                        case 7:
                            return "".concat(t.region, " ").concat(t.section);
                        default:
                            return t.full_address
                    }
                }
            }
        })
    }),
    define("emptyTips", ["_region-only"], function (require, exports, module) {
        var i = require("_region-only");
        Vue.component("vue-market-empty-tips", {
            template: "#vue-market-empty-tips",
            props: {
                keywords: {
                    type: String,
                    required: !1,
                    default: ""
                },
                overflowLimt: {
                    type: Number,
                    required: !1,
                    default: 5
                }
            },
            methods: {
                showFeedbackDialog: function () {
                    this.$emit("open-feedback-dialog")
                },
                overflowOmit: function (t) {
                    return t.length < this.overflowLimt + 1 ? t : t.substring(0, this.overflowLimt).concat("...")
                },
                getRegionName: function () {
                    var e = $.cookie("urlJumpIp")
                        , t = i.find(function (t) {
                            return t.id === +e
                        });
                    return t ? t.txt : ""
                }
            }
        })
    }),
    define("matchList", ["mixin"], function (require, exports, module) {
        var t = require("mixin");
        Vue.component("vue-market-match-list", {
            template: "#vue-market-match-list",
            mixins: [t],
            data: function () {
                return {
                    from: "match"
                }
            },
            methods: {
                onClickHandle: function (t, e) {
                    this.$emit("on-item-select", {
                        from: "match",
                        data: t,
                        index: e
                    })
                }
            }
        })
    }),
    define("historyList", ["mixin"], function (require, exports, module) {
        var t = require("mixin");
        Vue.component("vue-market-history-list", {
            template: "#vue-market-history-list",
            mixins: [t],
            props: {
                followInfo: {
                    type: Object,
                    default: function () {
                        return {
                            total: 0,
                            newCount: 0
                        }
                    }
                }
            },
            data: function () {
                return {
                    from: "history"
                }
            },
            methods: {
                clearHistory: function () {
                    this.$emit("on-clear")
                },
                onClickHandle: function (t) {
                    this.$emit("on-item-select", {
                        from: "history",
                        data: t
                    })
                },
                jumpFollows: function () {
                    $.cookie("market-search-params", JSON.stringify({
                        follows: 1
                    }), {
                        path: "/",
                        domain: "591.com.tw"
                    }),
                        window.location.href = $("#hid_marketUrl").val()
                }
            },
            mounted: function () {
                this.followInfo.total && hotEventSend && hotEventSend("房價地圖_搜尋功能_搜尋關注露出")
            }
        })
    }),
    define("vue-search-list", ["localStore", "utility"], function (require, exports, module) {
        var i = require("localStore")
            , r = "upscale-search-history"
            , e = require("utility");
        module.exports = {
            template: "#vue-upscale-search-list",
            props: {
                data: Array
            },
            data: function () {
                return {
                    regionId: $.cookie("urlJumpIp") || 0,
                    keywords: "",
                    visible: !1,
                    history: [],
                    searchList: []
                }
            },
            methods: {
                fetchData: function () {
                    var e = this;
                    $.get("".concat(HOST.bff, "/v1/upscale/search/keyword"), {
                        regionid: this.regionId,
                        keyword: this.keywords
                    }).then(function (t) {
                        t.status && (e.searchList = t.data)
                    })
                },
                onSearch: function (t) {
                    this.keywords = t,
                        this.visible = !0,
                        this.fetchData()
                },
                onChange: function (t) {
                    this.onSearch(t)
                },
                onBlur: function () {
                    this.visible = !1
                },
                clear: function () {
                    this.keywords = "",
                        this.searchList = []
                },
                highlightKey: function (t) {
                    return t.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(".concat(this.keywords.replace(/([^\w\s])/gi, "\\$1"), ")(?![^<>]*>)(?![^&;]+;)"), "gi"), '<strong style="color:#CC8F49">$1</strong>')
                },
                onClick: function (t) {
                    this.saveHistory(t)
                },
                getHistory: function () {
                    var t = i.get(r);
                    this.history = t || []
                },
                clearHistory: function () {
                    this.history.splice(0),
                        i.set(r, []),
                        this.visible = !1
                },
                saveHistory: function (e) {
                    this.history = this.history.filter(function (t) {
                        return t.params.hid !== e.params.hid
                    }),
                        this.history.unshift(e),
                        i.set(r, this.history)
                }
            },
            computed: {
                menuList: function () {
                    var e = this;
                    return [{
                        type: "history",
                        data: this.history,
                        title: "過往搜尋",
                        visible: function (t) {
                            return t.length && "" === e.keywords
                        }
                    }, {
                        type: "other",
                        data: this.searchList,
                        title: "大家都在搜",
                        visible: function (t) {
                            return t.length && !e.keywords
                        }
                    }, {
                        type: "present",
                        data: this.searchList,
                        title: "你可能在找",
                        visible: function (t) {
                            return t.length && "" !== e.keywords
                        }
                    }]
                },
                parseLink: function () {
                    return function (t) {
                        switch (t.to) {
                            case "detail":
                                return t.params.community_id ? "//market".concat(e.ENV, ".591.com.tw/").concat(t.params.community_id) : "//upscale".concat(e.ENV, ".591.com.tw/").concat(t.params.hid);
                            case "list":
                                return "//upscale".concat(e.ENV, ".591.com.tw/?").concat(e.urlEncode(t.params));
                            case "newCommunity-index":
                                return "//market".concat(e.ENV, ".591.com.tw/").concat(t.params.community_id);
                            default:
                                return "//upscale".concat(e.ENV, ".591.com.tw?regionid=").concat(this.regionId)
                        }
                    }
                },
                isEmpty: function () {
                    return this.keywords ? this.searchList.length <= 0 : !(0 < this.history.length || 0 < this.searchList.length)
                }
            },
            mounted: function () {
                this.getHistory()
            }
        }
    }),
    define("vue-search-feedback", ["element", "elementCSS", "utility", "_region-only", "_section"], function (require, exports, module) {
        require("element"),
            require("elementCSS");
        var e = require("utility").freezeBody
            , t = require("_region-only")
            , i = require("_section");
        module.exports = {
            template: "#vue-feedback-dialog",
            data: function () {
                return {
                    form: {
                        option: 1,
                        title: "",
                        regionid: "",
                        sectionid: "",
                        content: ""
                    },
                    message: "謝謝",
                    showMessage: !1,
                    regionList: t,
                    visible: !1
                }
            },
            props: {
                defaultTitle: String,
                feedBackType: Number,
                regionId: [String, Number],
                sectionId: [String, Number]
            },
            mounted: function () {
                this.init()
            },
            computed: {
                typeName: function () {
                    return ["社區名", "街道名稱", "關鍵字"][this.form.option - 1]
                },
                typeTips: function () {
                    return ["如:新城天下", "如:新城路", "如:新城市新城路8888號"][this.form.option - 1]
                },
                sectionList: function () {
                    return i[this.form.regionid] || []
                }
            },
            watch: {
                visible: function (t) {
                    t && this.init(),
                        e(t)
                }
            },
            methods: {
                init: function () {
                    this.form.option = this.feedBackType || 1,
                        this.form.title = this.defaultTitle || "",
                        this.form.regionid = this.regionId || "",
                        this.form.sectionid = this.sectionId || ""
                },
                openMessage: function (t) {
                    var e = this;
                    return this.message = t,
                        this.showMessage = !0,
                        new Promise(function (t) {
                            setTimeout(function () {
                                e.showMessage = !1,
                                    t()
                            }, 2e3)
                        }
                        )
                },
                submit: function () {
                    var e = this;
                    this.form.title = this.form.title.trim(),
                        this.form.content = this.form.content.trim(),
                        this.form.title ? this.form.regionid ? this.form.sectionid ? $.ajax({
                            url: "".concat(HOST.bff, "/v1/common/search-feedback"),
                            dataType: "json",
                            type: "POST",
                            timeout: 1e4,
                            data: this.form,
                            success: function (t) {
                                1 === t.status ? (e.openMessage("謝謝您的反饋！").then(function () {
                                    e.visible = !1
                                }),
                                    e.form.content = "") : e.openMessage("抱歉反饋失敗，請您再次反饋～")
                            },
                            error: function () {
                                e.openMessage("抱歉反饋失敗，請您再次反饋～")
                            }
                        }) : this.openMessage("請選擇所在鄉鎮") : this.openMessage("請選擇所在縣市") : this.openMessage("請輸入".concat(this.typeName))
                }
            }
        }
    }),
    define("index_gulp-seajs-cmobo_50", ["utility", "localStore", "vue-search-history", "vue-search-hot", "vue-search-empty", "vue-search-match"], function (require, exports, module) {
        var s = require("utility")
            , i = require("localStore")
            , t = require("vue-search-history")
            , e = require("vue-search-hot")
            , r = require("vue-search-empty")
            , o = require("vue-search-match");
        module.exports = {
            template: "#vue-sale-search-list",
            props: ["keywords"],
            components: {
                "vue-search-history": t,
                "vue-search-hot": e,
                "vue-search-empty": r,
                "vue-search-match": o
            },
            data: function () {
                return {
                    keyWords: "",
                    preKeyWords: null,
                    searchDropVisible: !1,
                    regionId: $.cookie("urlJumpIp") || 1,
                    hotList: [],
                    matchList: [],
                    matchType: "",
                    splitWord: "",
                    historyList: [],
                    historyLocalKey: "sale-search-history",
                    debounceTimer: null,
                    matchDone: !1,
                    searchStaticParams: null,
                    isStaticBlur: !0
                }
            },
            computed: {
                historyVisible: function () {
                    return !this.keyWords && this.historyList.length
                },
                hotVisible: function () {
                    return !this.keyWords && this.hotList.length
                },
                matchVisible: function () {
                    return this.keyWords && this.matchList.length && 6 !== this.matchList[0].type
                },
                emptyVisible: function () {
                    return this.keyWords && !this.matchList.length && this.matchDone
                }
            },
            methods: {
                onSearch: function (t) {
                    this.toggleSearchDrop(!0),
                        this.keyWords = t,
                        this.getMatch(t),
                        this.getHot(),
                        this.getHistory()
                },
                clear: function () {
                    this.historyList = [],
                        this.matchList = [],
                        this.toggleSearchDrop(!1)
                },
                onBlur: function () {
                    var t = this;
                    this.toggleSearchDrop(!1),
                        hotEventSend("中古列表頁_關鍵字搜尋-新_使用搜尋"),
                        this.emptyVisible && hotEventSend("中古列表頁_關鍵字搜尋-新_未匹配到提示詞"),
                        setTimeout(function () {
                            t.isStaticBlur ? t.searchStatic(6) : t.isStaticBlur = !0
                        }, 100)
                },
                onUpdateKeyWords: function (t) {
                    this.keyWords = t
                },
                clearKeyWords: function () {
                    this.keyWords = ""
                },
                toggleSearchDrop: function (t) {
                    this.searchDropVisible = t
                },
                onToggleFeedBack: function () {
                    this.$emit("toggle-feed-back")
                },
                getHot: function () {
                    var e = this;
                    $.get("".concat(HOST.bff, "/v1/community/rank-list"), {
                        regionid: this.regionId,
                        type: "hot",
                        from: "search"
                    }).then(function (t) {
                        +t.status && (e.hotList = t.data.items || [])
                    })
                },
                getMatch: function (t) {
                    var i = this;
                    return this.keyWords = t,
                        new Promise(function (e, t) {
                            i.matchDone = !1,
                                $.get("".concat(HOST.bff, "/v1/sale/search/match"), {
                                    regionid: i.regionId,
                                    keyword: i.keyWords
                                }).then(function (t) {
                                    i.matchDone = !0,
                                        i.preKeyWords = i.keyWords,
                                        +t.status && (i.matchList = t.data.items || [],
                                            i.matchType = t.data.match_type,
                                            i.splitWord = t.data.split_word,
                                            e(),
                                            i.$emit("change-feed-back-type", t.data.match_type))
                                })
                        }
                        )
                },
                getHistory: function () {
                    var t = i.get(this.historyLocalKey) || _defineProperty({}, this.regionId, [])
                        , e = [];
                    Array.isArray(t[this.regionId]) && (e = t[this.regionId].filter(function (t) {
                        return t.expires > (new Date).getTime()
                    })),
                        this.historyList = e,
                        i.set(this.historyLocalKey, _objectSpread({}, t, _defineProperty({}, this.regionId, e)))
                },
                saveHistory: function (t) {
                    var e;
                    t.keyWords && (this.getHistory(),
                        this.historyList = [t].concat(_toConsumableArray(this.historyList)).reduce(function (t, e) {
                            return t.some(function (t) {
                                return t.keyWords === e.keyWords && (t.type === e.type || !t.id && !e.id)
                            }) || t.push(e),
                                t
                        }, []).splice(0, 10),
                        e = i.get(this.historyLocalKey),
                        i.set(this.historyLocalKey, _objectSpread({}, e, _defineProperty({}, this.regionId, this.historyList))))
                },
                clearHistory: function () {
                    this.historyList = [];
                    var t = i.get(this.historyLocalKey);
                    i.set(this.historyLocalKey, _objectSpread({}, t, _defineProperty({}, this.regionId, [])))
                },
                normalizeEnter: function (t) {
                    hotEventSend("中古列表頁_關鍵字搜尋-新_使用".concat(3 === t ? "回車" : "搜尋按鈕", "提交"));
                    var e = {};
                    if (this.preKeyWords === this.keyWords && this.matchList.length) {
                        var i, r, o, n, a = this.matchList[0], s = this.matchList.filter(function (t) {
                            return 100 === t.similarity
                        });
                        e = 6 === a.type || s.length || 7 === a.type ? s.length ? (i = [],
                            s.forEach(function (t) {
                                i.push("".concat(t.title, ":").concat(Math.floor(t.similarity), "%"))
                            }),
                            _objectSpread({}, a, {
                                keyWords: this.keyWords,
                                id: s.map(function (t) {
                                    return t.id
                                }).toString(),
                                actionType: t,
                                matchWords: i.toString()
                            })) : _objectSpread({}, a, {
                                keyWords: this.keyWords,
                                uniqueTipWord: a.similarity ? a.title : "",
                                actionType: t,
                                matchWords: a.similarity ? "".concat(a.title, ":100%") : ""
                            }) : (r = [3, 4].includes(a.type) ? [3, 4] : [a.type],
                                o = 15 < (o = this.matchList.filter(function (t) {
                                    return r.includes(t.type)
                                })).length ? o.slice(0, 15) : o,
                                n = [],
                                o.forEach(function (t) {
                                    50 < t.similarity && n.push("".concat(t.title, ":").concat(Math.floor(t.similarity), "%"))
                                }),
                                _objectSpread({}, a, {
                                    keyWords: this.keyWords,
                                    id: o.map(function (t) {
                                        return t.id
                                    }).toString(),
                                    actionType: t,
                                    matchWords: n.toString()
                                })),
                            6 !== a.type && hotEventSend("中古列表頁_關鍵字搜尋-新_匹配到提示詞")
                    } else {
                        if (!this.keyWords)
                            return {};
                        e = {
                            type: 0,
                            id: 1,
                            keyWords: this.keyWords,
                            actionType: 6
                        }
                    }
                    return e
                },
                onKeyDownHandler: function (t, e) {
                    this.keyWords = e,
                        13 === t && this.enterSearch(3)
                },
                onSearchBtnHandler: function (t) {
                    this.keyWords = t,
                        this.enterSearch(4)
                },
                enterSearch: function (t) {
                    var e = this
                        , i = 0 < arguments.length && void 0 !== t ? t : 3;
                    this.isStaticBlur = !1;
                    var r = null;
                    this.matchList.length && this.preKeyWords === this.keyWords || !this.keyWords ? (r = this.normalizeEnter(i),
                        this.searchItem(r, i)) : this.getMatch(this.keyWords).then(function () {
                            r = e.normalizeEnter(i),
                                e.searchItem(r, i)
                        })
                },
                setSearchTraceCache: function (t) {
                    var e = {
                        actionType: t.actionType,
                        keyWords: t.keyWords,
                        uniqueTipWord: t.uniqueTipWord
                    };
                    t.keyWords ? $.cookie("sale_search_trace_cache", JSON.stringify(e), {
                        expires: 10800,
                        path: "/",
                        domain: "591.com.tw"
                    }, !0) : $.cookie("sale_search_trace_cache", "", {
                        path: "/",
                        domain: "591.com.tw"
                    })
                },
                normalizeItem: function (t) {
                    var e = this.splitWord && this.splitWord.toString()
                        , i = _objectSpread({}, t, {
                            splitKeywords: e || "",
                            searchType: t.searchType || this.matchType || "",
                            matchWords: "",
                            uniqueTipWord: "",
                            noResult: 0 === t.type ? "1" : "0",
                            expires: (new Date).getTime() + 6048e5
                        });
                    switch (t.actionType) {
                        case 1:
                            i = t;
                            break;
                        case 2:
                            i.matchWords = "".concat(t.keyWords, ":100%"),
                                i.searchType = 1,
                                i.uniqueTipWord = t.keyWords;
                            break;
                        case 3:
                        case 4:
                            i.uniqueTipWord = t.uniqueTipWord,
                                i.matchWords = t.matchWords,
                                100 === t.similarity && 4 == +t.type && (i.isCommunity = !0),
                                i.splitKeywords = e;
                            break;
                        case 5:
                            [4, 5].includes(t.type) && (i.isCommunity = !0),
                                i.uniqueTipWord = i.keyWords,
                                i.splitKeywords = e,
                                i.matchWords = "".concat(t.keyWords, ":100%")
                    }
                    return this.normalizeStaticParams(i),
                        i.keyWords && (this.setSearchTraceCache(i),
                            this.searchStatic()),
                        i
                },
                normalizeStaticParams: function (t) {
                    return this.searchStaticParams = {
                        handle_type: t.actionType,
                        keyword: t.keyWords,
                        split_keywords: t.splitKeywords,
                        search_type: t.searchType,
                        match_keywords: t.matchWords,
                        unique_prompt_word: t.uniqueTipWord
                    },
                        this.searchStaticParams
                },
                searchItem: function (t, e) {
                    var i, r;
                    7 === t.type && (this.keyWords = t.id,
                        r = e || t.actionType,
                        (t = this.normalizeEnter(r)).searchType = 3,
                        this.$emit("change-feed-back-type", 3)),
                        this.isStaticBlur = !1;
                    var o = {
                        1: "region",
                        2: "section",
                        3: "street",
                        4: "title",
                        5: "title",
                        6: "id",
                        7: "id"
                    }[t.type]
                        , n = t.keyWords || t[o];
                    this.saveHistory(this.normalizeItem(_objectSpread({}, t, {
                        keyWords: n
                    }))),
                        this.keyWords = n;
                    var a = (_defineProperty(i = {}, {
                        0: "noresult",
                        2: "section",
                        3: "streetid",
                        4: "community_id",
                        5: "community_id",
                        6: "keywords",
                        7: "keywords"
                    }[t.type], t.id),
                        _defineProperty(i, "keywords", this.keyWords),
                        i);
                    window.open("".concat(HOST.sale_env, "/?shType=list").concat(s.urlEncode(a))),
                        this.toggleSearchDrop()
                },
                searchStatic: function (t) {
                    var e = {};
                    if (6 === t) {
                        if (!this.keyWords)
                            return;
                        var i = this.normalizeEnter(t)
                            , e = this.normalizeStaticParams(i)
                    } else
                        e = this.searchStaticParams;
                    $.post("".concat(HOST.statistics, "/keyword/search-record"), _objectSpread({}, e, {
                        device: "pc",
                        mobile_id: s.T591_TOKEN
                    }))
                }
            }
        }
    }),
    define("vue-search-fb", ["layer", "cookie", "_region-only", "_section", "utility"], function (require, exports, module) {
        require("layer"),
            require("cookie");
        var t = require("_region-only")
            , e = require("_section")
            , i = require("utility").T591_TOKEN
            , r = {
                template: "#vue-search-fb",
                data: function () {
                    return {
                        fbDialog: {
                            isVisible: !1,
                            region: t,
                            section: e
                        },
                        fbSubimtData: {
                            type: 1,
                            name: "",
                            regionid: "",
                            sectionid: ""
                        }
                    }
                },
                computed: {
                    computedType: function () {
                        return {
                            type1: {
                                label: "社區名",
                                placeholder: "請輸入社區名稱"
                            },
                            type2: {
                                label: "街道名稱",
                                placeholder: "請輸入完整街道"
                            },
                            type3: {
                                label: "詳細地址",
                                placeholder: "請輸入完整地址門牌號"
                            }
                        }["type".concat(this.fbSubimtData.type)]
                    }
                },
                methods: {
                    regionChange: function () {
                        this.fbSubimtData.sectionid = ""
                    },
                    fbSubmit: function () {
                        var e = this;
                        this.fbSubimtData.name && this.fbSubimtData.regionid && this.fbSubimtData.sectionid ? $.ajax({
                            method: "POST",
                            url: "".concat(HOST.bff, "/v1/community/search/feedback"),
                            headers: {
                                device: "pc",
                                deviceid: i
                            },
                            data: this.fbSubimtData
                        }).then(function (t) {
                            e.fbDialog.isVisible = !1,
                                layer.msg(t.msg)
                        }) : layer.msg("請先填寫社區名和所在縣市")
                    }
                },
                watch: {
                    "fbDialog.isVisible": {
                        handler: function (t) {
                            this.fbSubimtData.type = 1,
                                this.fbSubimtData.sectionid = "",
                                t ? (this.fbSubimtData.name = $("#auto-search-input").val(),
                                    this.fbSubimtData.regionid = $.cookie("urlJumpIp")) : (this.fbSubimtData.name = "",
                                        this.fbSubimtData.regionid = "")
                        },
                        immediate: !0
                    }
                }
            };
        Vue.component("vue-search-fb", r),
            module.exports = r
    }),
    define("index_gulp-seajs-cmobo_48", ["cookie", "historyList", "matchList", "emptyTips", "listItem", "utility"], function (require, exports, module) {
        require("cookie"),
            require("historyList"),
            require("matchList"),
            require("emptyTips"),
            require("listItem");
        var o = require("utility").T591_TOKEN
            , n = "marketSearchHistory"
            , t = {
                template: "#vue-market-search-list",
                props: ["focusStatus", "emptyFocusStatus", "keywords"],
                data: function () {
                    return {
                        loading: !1,
                        historyList: [],
                        searchList: [],
                        searchRequest: null,
                        followInfo: {
                            total: 0,
                            newCount: 0
                        },
                        hasGetFollowInfo: !1,
                        showEmptyListStatus: !1,
                        pathStatTimer: null
                    }
                },
                computed: {
                    emptyStatus: function () {
                        return this.keywords && this.focusStatus && !this.loading && 0 === this.searchList.length && 0 === this.historyList.length
                    },
                    historyListVisible: function () {
                        return (this.historyList.length || this.followInfo.total) && !(this.emptyStatus || this.showEmptyListStatus) && 0 === this.searchList.length && !this.keywords && this.focusStatus
                    },
                    hasLineStyle: function () {
                        return this.historyListVisible || this.searchList.length
                    }
                },
                watch: {
                    emptyStatus: function (t, e) {
                        e && this.loading && (this.showEmptyListStatus = !0)
                    },
                    loading: function (t) {
                        t || this.showEmptyListStatus && (this.showEmptyListStatus = !1)
                    },
                    focusStatus: function (t) {
                        t && (this.loading = !0,
                            this.hasGetFollowInfo || this.getFollowInfo())
                    },
                    emptyFocusStatus: {
                        handler: function (t) {
                            t && this.init()
                        },
                        immediate: !0
                    },
                    keywords: function (t) {
                        t || (this.searchList = [])
                    }
                },
                methods: {
                    showFeedbackDialog: function () {
                        this.clear(),
                            this.stopSearchRequest(),
                            this.$emit("open-feedback-dialog")
                    },
                    isElementInViewport: function (t, e) {
                        var i = t.offsetTop
                            , r = e.scrollTop()
                            , o = e.height();
                        return i <= r ? -(r - i + 50) : r + o <= i ? i - (r + o) + 50 : void 0
                    },
                    move: function (t, e) {
                        var i = this.isElementInViewport(t, e);
                        i && e.animate({
                            scrollTop: e.scrollTop() + i
                        }, 200)
                    },
                    init: function () {
                        var e = this;
                        this.loading = !0,
                            this.stopSearchRequest();
                        var t = $.cookie(n);
                        this.followInfo.total && (this.searchList = []),
                            t.length ? $.ajax({
                                method: "POST",
                                url: "".concat(HOST.bff, "/v1/community/search/history"),
                                headers: {
                                    device: "pc",
                                    deviceid: o
                                },
                                data: {
                                    history: t
                                }
                            }).then(function (t) {
                                1 === (t = "string" == typeof t ? JSON.parse(t) : t).status && t.data && t.data[0] && (e.clear(),
                                    e.historyList = t.data.slice(0, 8),
                                    e.historyList.length && hotEventSend && hotEventSend("房價地圖_搜尋功能_搜尋歷史露出"),
                                    e.handleCookieUpdate(t.data),
                                    e.loading = !1)
                            }) : this.clear()
                    },
                    clear: function () {
                        this.historyList = [],
                            this.searchList = []
                    },
                    onKeyDownHandle: function (t) {
                        var e = this.$refs.matchList || this.$refs.historyList
                            , i = $("#marketSearchList div ul li")
                            , r = $("#marketSearchList div ul");
                        switch (t) {
                            case 40:
                                e && (e.activeIndex++,
                                    e.activeIndex >= e.dataSource.length && (e.activeIndex = 0),
                                    this.move(i[e.activeIndex], r));
                                break;
                            case 38:
                                e && (e.activeIndex--,
                                    e.activeIndex < 0 && (e.activeIndex = e.dataSource.length - 1),
                                    this.move(i[e.activeIndex], r));
                                break;
                            case 13:
                                var o = e.dataSource;
                                this.onItemClickHandle({
                                    from: e.from,
                                    data: o[e.activeIndex]
                                })
                        }
                    },
                    stopSearchRequest: function () {
                        this.$emit("clear-timer"),
                            this.searchRequest && (this.searchRequest.abort(),
                                this.searchRequest = null)
                    },
                    onSearch: function (t, e) {
                        var i = this;
                        this.loading = !0;
                        var r = $.cookie("urlJumpIp");
                        this.searchRequest = $.ajax({
                            method: "GET",
                            url: "".concat(HOST.bff, "/v1/community/search/match"),
                            headers: {
                                device: "pc",
                                deviceid: o
                            },
                            data: {
                                _from: "pc",
                                regionid: r,
                                keyword: t
                            }
                        }),
                            this.searchRequest.then(function (t) {
                                1 == ~~(t = "string" == typeof t ? JSON.parse(t) : t).status && i.searchRequest && ("suggest" !== e || i.focusStatus || i.$emit("make-focus"),
                                    i.clear(),
                                    i.searchList = t.data.items),
                                    i.loading = !1
                            })
                    },
                    clearHistory: function () {
                        this.historyList = [],
                            this.handleCookieUpdate([])
                    },
                    saveHistoryResult: function (t) {
                        var e = JSON.parse($.cookie(n) || "[]");
                        e.forEach(function (t) {
                            t.localKey = {
                                1: t.id,
                                4: t.streetid,
                                5: t.sectionid,
                                6: t.regionid,
                                7: t.id
                            }[t.search_type]
                        });
                        var i = {
                            1: t.id,
                            4: t.streetid,
                            5: t.sectionid,
                            6: t.regionid,
                            7: t.id
                        }[t.search_type]
                            , r = -1;
                        e.forEach(function (t, e) {
                            return t.localKey === i && (r = e)
                        }),
                            -1 !== r && e.splice(r, 1),
                            e.unshift(_objectSpread({}, t, {
                                localKey: i
                            })),
                            this.handleCookieUpdate(e.slice(0, 8))
                    },
                    getFollowInfo: function () {
                        var e = this;
                        this.hasGetFollowInfo = !0,
                            $.ajax({
                                method: "GET",
                                url: "".concat(HOST.bff, "/v1/community/follow-info"),
                                headers: {
                                    device: "pc",
                                    deviceid: o
                                }
                            }).then(function (t) {
                                1 === t.status && (e.followInfo.total = t.data.follow,
                                    e.followInfo.newCount = t.data.follow_new.count)
                            })
                    },
                    onItemClickHandle: function (t) {
                        var e = t.from
                            , i = t.data
                            , r = t.index;
                        this.saveHistoryResult(i),
                            this.$emit("on-item-click", i, e, r)
                    },
                    handleCookieUpdate: function (t) {
                        var e, i = [];
                        0 < t.length && (e = {
                            1: "id",
                            4: "streetid",
                            5: "sectionid",
                            6: "regionid",
                            7: "id"
                        },
                            i = t.map(function (t) {
                                return _defineProperty({
                                    search_type: t.search_type
                                }, e[t.search_type], t[e[t.search_type]])
                            })),
                            $.cookie(n, JSON.stringify(i), {
                                expires: 365,
                                path: "/",
                                domain: "591.com.tw"
                            })
                    }
                }
            };
        Vue.component("vue-market-search-list", t),
            module.exports = t
    }),
    define("housingStat", ["utility"], function (require, exports, module) {
        var o = require("utility").T591_TOKEN;
        exports.backEndCommonStat = function (t) {
            var e, i, r;
            $ && (e = "".concat(HOST.statistics, "/housing/conversion/stat"),
                i = {
                    device: "pc",
                    mobile_id: o
                },
                r = $.extend(i, t),
                $.post(e, r))
        }
    }),
    function (t) {
        "function" == typeof define ? define("vueSearchList", function (require, exports, module) {
            module.exports = t()
        }) : window.vueSearchList = t()
    }(function () {
        return {
            template: "#vue-search-list",
            props: {
                mode: String,
                from: String,
                data: Array,
                show: Boolean,
                options: Object
            },
            data: function () {
                return {
                    activeIndex: -1
                }
            },
            watch: {
                data: function () {
                    this.activeIndex = -1
                }
            },
            mounted: function () {
                this.keydownHandler()
            },
            updated: function () { },
            methods: {
                keydownHandler: function () {
                    var e = this
                        , i = 38
                        , r = 40
                        , o = 13;
                    $(this.options.input).bind("keydown.vue", function (t) {
                        if (!$("#marketSearchTab").hasClass("select") && $(this).is(":focus"))
                            switch (t.keyCode) {
                                case r:
                                    t.preventDefault(),
                                        e.activeIndex++,
                                        e.activeIndex >= e.data.length && (e.activeIndex = 0);
                                    break;
                                case i:
                                    t.preventDefault(),
                                        e.activeIndex--,
                                        e.activeIndex <= -1 && (e.activeIndex = e.data.length - 1);
                                    break;
                                case o:
                                    -1 < e.activeIndex && (t.preventDefault(),
                                        e.jump(e.activeIndex))
                            }
                    })
                },
                jump: function (t) {
                    var e = this.parseHref(this.data[t]);
                    "index" === this.from && (e += "&bid=3164"),
                        window.open(e),
                        this.clickHandler(this.data[t])
                },
                objToSearch: function (t) {
                    var e = [];
                    for (var i in t)
                        e.push(i + "=" + t[i]);
                    return e.join("&")
                },
                parseHref: function (t) {
                    var e = t.to
                        , i = location.host
                        , r = "https://newhouse." + (-1 < i.indexOf("dev") ? "dev." : -1 < i.indexOf("debug") ? "debug." : "") + "591.com.tw";
                    return "detail" === e ? r + "/" + t.params.hid : "list" === e ? r + "/housing-list.html?" + this.objToSearch(t.params) : "newCommunity-index" === e ? "/newCommunity-index.html?" + this.objToSearch(t.params) : void 0
                },
                clickHandler: function (t) {
                    this.saveHistorySearch(t),
                        this.$emit("click")
                },
                saveHistorySearch: function (e) {
                    var i = localStorage.getItem(this.options.storageName);
                    try {
                        i = JSON.parse(i) || []
                    } catch (t) {
                        i = []
                    }
                    var r = !1;
                    i.forEach(function (t) {
                        t.key === e.key && (r = !0)
                    }),
                        r || (i.push(e),
                            localStorage.setItem(this.options.storageName, JSON.stringify(i)))
                },
                emptyHistory: function () {
                    this.$emit("empty")
                }
            }
        }
    }),
    define("index_gulp-seajs-cmobo_32", ["vue-search-list", "utility"], function (require, exports, module) {
        var t = require("vue-search-list")
            , e = require("utility")
            , i = null;
        var r, o, n = new Vue({
            data: {
                regionId: $.cookie("urlJumpIp") || 0
            },
            components: {
                "vue-upscale-search-list": t
            },
            methods: {
                close: function () {
                    this.$refs.searchListRef && this.$refs.searchListRef.onBlur()
                },
                onFocus: function (t, e) {
                    var i = e || "";
                    this.$refs.searchListRef && (this.$refs.searchListRef.clear(),
                        this.$refs.searchListRef.onSearch(i))
                },
                onBlur: function () {
                    var t = this;
                    setTimeout(function () {
                        t.$refs.searchListRef.onBlur()
                    }, 200)
                },
                onKeyup: (r = function (t) {
                    var e = ""
                        , i = t.keyCode;
                    t.target && (e = t.target.value),
                        13 === i ? this.onBtnClick(e) : this.$refs.searchListRef.onChange(e)
                }
                    ,
                    o = 300,
                    function () {
                        var t = this
                            , e = Array.prototype.slice.call(arguments);
                        i && clearTimeout(i),
                            i = setTimeout(function () {
                                r.apply(t, e),
                                    clearTimeout(i),
                                    i = null
                            }, o)
                    }
                ),
                onBtnClick: function (t) {
                    window.open("//upscale".concat(e.ENV, ".591.com.tw/?regionid=").concat(this.regionId).concat(t ? "&keyword=" + t : ""))
                },
                onClearInput: function () {
                    this.$refs.searchListRef.clear()
                }
            }
        });
        n.$mount("#vue-upscale-search"),
            module.exports = {
                $set: function (t, e) {
                    n[t] = e
                },
                $vm: n
            }
    }),
    define("_vueSaleSearch", ["index_gulp-seajs-cmobo_50", "vue-search-feedback"], function (require, exports, module) {
        var t = require("index_gulp-seajs-cmobo_50")
            , e = require("vue-search-feedback")
            , i = null;
        var r, o, n = new Vue({
            data: {
                keywords: "",
                regionId: $.cookie("urlJumpIp") || 1,
                feedBackType: 1
            },
            components: {
                vueSaleSearch: t,
                vueSaleSearchFb: e
            },
            methods: {
                feedback: function () {
                    this.$refs.saleSearchFb.visible = !0
                },
                close: function () {
                    this.$refs.saleSearchList && this.$refs.saleSearchList.clear()
                },
                toggleFeedBack: function () {
                    this.feedback()
                },
                onChange: (r = function (t) {
                    this.keywords = t || "",
                        this.$refs.saleSearchList && this.$refs.saleSearchList.getMatch(t)
                }
                    ,
                    o = 300,
                    function () {
                        var t = this
                            , e = Array.prototype.slice.call(arguments);
                        i && clearTimeout(i),
                            i = setTimeout(function () {
                                r.apply(t, e),
                                    clearTimeout(i),
                                    i = null
                            }, o)
                    }
                ),
                onFocus: function (t, e) {
                    this.keywords = e || "",
                        this.$refs.saleSearchList && this.$refs.saleSearchList.onSearch(this.keywords)
                },
                onBlur: function () {
                    var t = this;
                    setTimeout(function () {
                        t.$refs.saleSearchList && t.$refs.saleSearchList.clear()
                    }, 200)
                },
                onKeyDownHandler: function (t) {
                    var e = t.keyCode;
                    this.$refs.saleSearchList && this.$refs.saleSearchList.onKeyDownHandler(e, this.keywords)
                },
                onSearchBtnHandler: function () {
                    this.$refs.saleSearchList && this.$refs.saleSearchList.onSearchBtnHandler(this.keywords)
                },
                onChangeFeedBackType: function (t) {
                    this.feedBackType = t
                },
                clearKeyWords: function () {
                    this.keywords = ""
                }
            }
        });
        n.$mount("#vue-sale-search"),
            module.exports = {
                $set: function (t, e) {
                    n[t] = e
                },
                $vm: n
            }
    }),
    define("_vueMarketSearch", ["index_gulp-seajs-cmobo_48", "vue-search-fb"], function (require, exports, module) {
        var t = require("index_gulp-seajs-cmobo_48")
            , e = require("vue-search-fb")
            , i = null;
        var r, o, n = new Vue({
            data: {
                keywords: "",
                focusStatus: !1
            },
            components: {
                vueMarketSearchList: t,
                vueMarketSearchFb: e
            },
            computed: {
                clearIconVisible: function () {
                    return 0 < this.keywords.length
                },
                emptyFocusStatus: function () {
                    return this.focusStatus && 0 === this.keywords.length
                }
            },
            methods: {
                feedback: function () {
                    this.$refs.searchFb.fbDialog.isVisible = !0
                },
                close: function () {
                    this.focusStatus = !1,
                        this.$refs.searchList && (this.$refs.searchList.stopSearchRequest(),
                            this.$refs.searchList.clear())
                },
                clearDebounceTimer: function () {
                    i && clearTimeout(i)
                },
                showFeedbackDialog: function () {
                    this.focusStatus = !1,
                        this.feedback()
                },
                onChange: (r = function (t) {
                    this.keywords = t || "",
                        this.$refs.searchList && (t ? this.$refs.searchList.onSearch(t) : this.$refs.searchList.stopSearchRequest())
                }
                    ,
                    o = 300,
                    function () {
                        var t = this
                            , e = Array.prototype.slice.call(arguments);
                        i && clearTimeout(i),
                            i = setTimeout(function () {
                                r.apply(t, e),
                                    clearTimeout(i),
                                    i = null
                            }, o)
                    }
                ),
                onFocus: function (t, e) {
                    this.focusStatus = !0,
                        this.keywords = e || "",
                        this.keywords && this.$refs.searchList && this.$refs.searchList.onSearch(this.keywords)
                },
                onBlur: function () {
                    var t = this;
                    setTimeout(function () {
                        t.focusStatus = !1,
                            t.$refs.searchList && (t.$refs.searchList.clear(),
                                t.$refs.searchList.stopSearchRequest())
                    }, 200)
                },
                onKeyDownHandle: function (t) {
                    var e = t.keyCode;
                    this.$refs.searchList && this.$refs.searchList.onKeyDownHandle(e)
                },
                onItemClickHandle: function (t, e, i) {
                    var r = {
                        data: t,
                        from: e,
                        index: 2 < arguments.length && void 0 !== i ? i : -1
                    };
                    $.cookie("market-search-params", JSON.stringify(r), {
                        path: "/",
                        domain: "591.com.tw"
                    }),
                        window.location.href = $("#hid_marketUrl").val()
                }
            }
        });
        n.$mount("#vue-market-search"),
            module.exports = {
                $set: function (t, e) {
                    n[t] = e
                },
                $vm: n
            }
    }),
    define("_vueSearchList", ["vueSearchList", "housingStat"], function (require, exports, module) {
        var t = require("vueSearchList")
            , e = require("housingStat")
            , i = "/home/housing/match-keyword"
            , r = new Vue({
                data: {
                    q: "",
                    data: [],
                    activeIndex: 0,
                    mode: "history",
                    show: !1,
                    type: 0,
                    options: {
                        input: "#auto-search-input",
                        storageName: "newSearch"
                    }
                },
                components: {
                    "vue-search-list": t
                },
                created: function () {
                    this.q && this.fetchData()
                },
                mounted: function () {
                    var i = this;
                    $(i.options.input).click(function (t) {
                        if (8 === i.type) {
                            if (t.stopPropagation(),
                                t.preventDefault(),
                                i.q && !i.show)
                                return i.fetchData();
                            if (!i.q) {
                                try {
                                    var e = JSON.parse(localStorage.getItem(i.options.storageName)) || [];
                                    i.data = e.slice(0, 30)
                                } catch (t) {
                                    i.data = []
                                }
                                i.mode = "history",
                                    i.show = !!i.data.length
                            }
                        }
                    }),
                        $(document).bind("click", function () {
                            i.show = !1
                        })
                },
                watch: {
                    q: function (t, e) {
                        var i = this;
                        if (!this.q)
                            return clearTimeout(this.timeID),
                                $(i.options.input).click();
                        t !== e && (clearTimeout(this.timeID),
                            this.timeID = setTimeout(function () {
                                i.fetchData()
                            }, 300))
                    }
                },
                methods: {
                    empty: function () {
                        localStorage.removeItem(this.options.storageName),
                            this.data = []
                    },
                    clickHandler: function () {
                        e.backEndCommonStat({
                            type: "7"
                        }),
                            hotEventSend("公共模塊_新建案聯想詞點擊_591首頁")
                    },
                    fetchData: function () {
                        var t = {
                            q: this.q
                        }
                            , e = this;
                        $.ajax({
                            url: i,
                            data: t,
                            success: function (t) {
                                1 === t.status ? (e.data = e.highlightQ(t.data),
                                    e.mode = "present",
                                    e.keywordsExposure(t.data.length),
                                    e.show = !!e.data.length) : e.data = []
                            }
                        })
                    },
                    highlightQ: function (t) {
                        var e = this;
                        return t.map(function (t) {
                            return t.parsedKey = e.highlight(t.key, e.q),
                                t
                        })
                    },
                    highlight: function (t, e) {
                        return e = e.trim(),
                            t.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + e.replace(/([\^$()[\]{}*.+?|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
                    },
                    keywordsExposure: function (t) {
                        for (var e = t - 1; 0 <= e; e--)
                            hotEventSend("公共模塊_新建案聯想詞曝光_591首頁")
                    }
                }
            });
        r.$mount("#vue-search"),
            module.exports = {
                $set: function (t, e) {
                    r[t] = e
                }
            }
    }),
    function (t, e) {
        if ("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)))
            module.exports = e();
        else if ("function" == typeof define && define.amd)
            define("UNION", [], e);
        else {
            var i = e();
            for (var r in i)
                ("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports : t)[r] = i[r]
        }
    }(self, function () {
        var __webpack_modules__ = {
            495: function _(module, exports, __webpack_require__) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                !function () {
                    "use strict";
                    var ERROR = "input is invalid type"
                        , WINDOW = "object" == ("undefined" == typeof window ? "undefined" : _typeof(window))
                        , root = WINDOW ? window : {};
                    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" == ("undefined" == typeof self ? "undefined" : _typeof(self))
                        , NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == ("undefined" == typeof process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
                    NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && module.exports, AMD = __webpack_require__.amdO, ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [128, 32768, 8388608, -2147483648], SHIFT = [0, 8, 16, 24], OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8, buffer, buffer8, blocks;
                    ARRAY_BUFFER && (buffer = new ArrayBuffer(68),
                        buffer8 = new Uint8Array(buffer),
                        blocks = new Uint32Array(buffer)),
                        !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        }
                        ),
                        !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
                            return "object" == _typeof(t) && t.buffer && t.buffer.constructor === ArrayBuffer
                        }
                        );
                    var createOutputMethod = function (e) {
                        return function (t) {
                            return new Md5(!0).update(t)[e]()
                        }
                    }
                        , createMethod = function () {
                            var e = createOutputMethod("hex");
                            NODE_JS && (e = nodeWrap(e)),
                                e.create = function () {
                                    return new Md5
                                }
                                ,
                                e.update = function (t) {
                                    return e.create().update(t)
                                }
                                ;
                            for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                                var i = OUTPUT_TYPES[t];
                                e[i] = createOutputMethod(i)
                            }
                            return e
                        }
                        , nodeWrap = function nodeWrap(method) {
                            var crypto = eval("require('crypto')")
                                , Buffer = eval("require('buffer').Buffer")
                                , nodeMethod = function (t) {
                                    if ("string" == typeof t)
                                        return crypto.createHash("md5").update(t, "utf8").digest("hex");
                                    if (null == t)
                                        throw ERROR;
                                    return t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
                                        Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t)
                                };
                            return nodeMethod
                        };
                    function Md5(t) {
                        var e;
                        t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                            this.blocks = blocks,
                            this.buffer8 = buffer8) : ARRAY_BUFFER ? (e = new ArrayBuffer(68),
                                this.buffer8 = new Uint8Array(e),
                                this.blocks = new Uint32Array(e)) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                            this.finalized = this.hashed = !1,
                            this.first = !0
                    }
                    Md5.prototype.update = function (t) {
                        if (!this.finalized) {
                            var e, i = _typeof(t);
                            if ("string" !== i) {
                                if ("object" !== i)
                                    throw ERROR;
                                if (null === t)
                                    throw ERROR;
                                if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                                    t = new Uint8Array(t);
                                else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t)))
                                    throw ERROR;
                                e = !0
                            }
                            for (var r, o, n = 0, a = t.length, s = this.blocks, c = this.buffer8; n < a;) {
                                if (this.hashed && (this.hashed = !1,
                                    s[0] = s[16],
                                    s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0),
                                    e)
                                    if (ARRAY_BUFFER)
                                        for (o = this.start; n < a && o < 64; ++n)
                                            c[o++] = t[n];
                                    else
                                        for (o = this.start; n < a && o < 64; ++n)
                                            s[o >> 2] |= t[n] << SHIFT[3 & o++];
                                else if (ARRAY_BUFFER)
                                    for (o = this.start; n < a && o < 64; ++n)
                                        (r = t.charCodeAt(n)) < 128 ? c[o++] = r : (r < 2048 ? c[o++] = 192 | r >> 6 : (r < 55296 || 57344 <= r ? c[o++] = 224 | r >> 12 : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++n)),
                                            c[o++] = 240 | r >> 18,
                                            c[o++] = 128 | r >> 12 & 63),
                                            c[o++] = 128 | r >> 6 & 63),
                                            c[o++] = 128 | 63 & r);
                                else
                                    for (o = this.start; n < a && o < 64; ++n)
                                        (r = t.charCodeAt(n)) < 128 ? s[o >> 2] |= r << SHIFT[3 & o++] : (r < 2048 ? s[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++] : (r < 55296 || 57344 <= r ? s[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++] : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++n)),
                                            s[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++]),
                                            s[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++]),
                                            s[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                                this.lastByteIndex = o,
                                    this.bytes += o - this.start,
                                    64 <= o ? (this.start = o - 64,
                                        this.hash(),
                                        this.hashed = !0) : this.start = o
                            }
                            return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0,
                                this.bytes = this.bytes % 4294967296),
                                this
                        }
                    }
                        ,
                        Md5.prototype.finalize = function () {
                            var t, e;
                            this.finalized || (this.finalized = !0,
                                (t = this.blocks)[(e = this.lastByteIndex) >> 2] |= EXTRA[3 & e],
                                56 <= e && (this.hashed || this.hash(),
                                    t[0] = t[16],
                                    t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
                                t[14] = this.bytes << 3,
                                t[15] = this.hBytes << 3 | this.bytes >>> 29,
                                this.hash())
                        }
                        ,
                        Md5.prototype.hash = function () {
                            var t, e, i, r, o, n = this.blocks, a = this.first ? ((a = ((t = ((t = n[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + n[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + n[2] - 1126478375) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[3] - 1316259209) << 22 | a >>> 10) + e << 0 : (t = this.h0,
                                a = this.h1,
                                e = this.h2,
                                ((a += ((t = ((t += ((i = this.h3) ^ a & (e ^ i)) + n[0] - 680876936) << 7 | t >>> 25) + a << 0) ^ (e = ((e += (a ^ (i = ((i += (e ^ t & (a ^ e)) + n[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ a)) + n[2] + 606105819) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[3] - 1044525330) << 22 | a >>> 10) + e << 0);
                            a = ((a += ((t = ((t += (i ^ a & (e ^ i)) + n[4] - 176418897) << 7 | t >>> 25) + a << 0) ^ (e = ((e += (a ^ (i = ((i += (e ^ t & (a ^ e)) + n[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ a)) + n[6] - 1473231341) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[7] - 45705983) << 22 | a >>> 10) + e << 0,
                                a = ((a += ((t = ((t += (i ^ a & (e ^ i)) + n[8] + 1770035416) << 7 | t >>> 25) + a << 0) ^ (e = ((e += (a ^ (i = ((i += (e ^ t & (a ^ e)) + n[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ a)) + n[10] - 42063) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[11] - 1990404162) << 22 | a >>> 10) + e << 0,
                                a = ((a += ((t = ((t += (i ^ a & (e ^ i)) + n[12] + 1804603682) << 7 | t >>> 25) + a << 0) ^ (e = ((e += (a ^ (i = ((i += (e ^ t & (a ^ e)) + n[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ a)) + n[14] - 1502002290) << 17 | e >>> 15) + i << 0) & (i ^ t)) + n[15] + 1236535329) << 22 | a >>> 10) + e << 0,
                                a = ((a += ((i = ((i += (a ^ e & ((t = ((t += (e ^ i & (a ^ e)) + n[1] - 165796510) << 5 | t >>> 27) + a << 0) ^ a)) + n[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ a & (i ^ t)) + n[11] + 643717713) << 14 | e >>> 18) + i << 0) ^ i)) + n[0] - 373897302) << 20 | a >>> 12) + e << 0,
                                a = ((a += ((i = ((i += (a ^ e & ((t = ((t += (e ^ i & (a ^ e)) + n[5] - 701558691) << 5 | t >>> 27) + a << 0) ^ a)) + n[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ a & (i ^ t)) + n[15] - 660478335) << 14 | e >>> 18) + i << 0) ^ i)) + n[4] - 405537848) << 20 | a >>> 12) + e << 0,
                                a = ((a += ((i = ((i += (a ^ e & ((t = ((t += (e ^ i & (a ^ e)) + n[9] + 568446438) << 5 | t >>> 27) + a << 0) ^ a)) + n[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ a & (i ^ t)) + n[3] - 187363961) << 14 | e >>> 18) + i << 0) ^ i)) + n[8] + 1163531501) << 20 | a >>> 12) + e << 0,
                                a = ((a += ((i = ((i += (a ^ e & ((t = ((t += (e ^ i & (a ^ e)) + n[13] - 1444681467) << 5 | t >>> 27) + a << 0) ^ a)) + n[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ a & (i ^ t)) + n[7] + 1735328473) << 14 | e >>> 18) + i << 0) ^ i)) + n[12] - 1926607734) << 20 | a >>> 12) + e << 0,
                                a = ((a += ((o = (i = ((i += ((r = a ^ e) ^ (t = ((t += (r ^ i) + n[5] - 378558) << 4 | t >>> 28) + a << 0)) + n[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ a) + n[11] + 1839030562) << 16 | e >>> 16) + i << 0)) + n[14] - 35309556) << 23 | a >>> 9) + e << 0,
                                a = ((a += ((o = (i = ((i += ((r = a ^ e) ^ (t = ((t += (r ^ i) + n[1] - 1530992060) << 4 | t >>> 28) + a << 0)) + n[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ a) + n[7] - 155497632) << 16 | e >>> 16) + i << 0)) + n[10] - 1094730640) << 23 | a >>> 9) + e << 0,
                                a = ((a += ((o = (i = ((i += ((r = a ^ e) ^ (t = ((t += (r ^ i) + n[13] + 681279174) << 4 | t >>> 28) + a << 0)) + n[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ a) + n[3] - 722521979) << 16 | e >>> 16) + i << 0)) + n[6] + 76029189) << 23 | a >>> 9) + e << 0,
                                a = ((a += ((o = (i = ((i += ((r = a ^ e) ^ (t = ((t += (r ^ i) + n[9] - 640364487) << 4 | t >>> 28) + a << 0)) + n[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ a) + n[15] + 530742520) << 16 | e >>> 16) + i << 0)) + n[2] - 995338651) << 23 | a >>> 9) + e << 0,
                                a = ((a += ((i = ((i += (a ^ ((t = ((t += (e ^ (a | ~i)) + n[0] - 198630844) << 6 | t >>> 26) + a << 0) | ~e)) + n[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~a)) + n[14] - 1416354905) << 15 | e >>> 17) + i << 0) | ~t)) + n[5] - 57434055) << 21 | a >>> 11) + e << 0,
                                a = ((a += ((i = ((i += (a ^ ((t = ((t += (e ^ (a | ~i)) + n[12] + 1700485571) << 6 | t >>> 26) + a << 0) | ~e)) + n[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~a)) + n[10] - 1051523) << 15 | e >>> 17) + i << 0) | ~t)) + n[1] - 2054922799) << 21 | a >>> 11) + e << 0,
                                a = ((a += ((i = ((i += (a ^ ((t = ((t += (e ^ (a | ~i)) + n[8] + 1873313359) << 6 | t >>> 26) + a << 0) | ~e)) + n[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~a)) + n[6] - 1560198380) << 15 | e >>> 17) + i << 0) | ~t)) + n[13] + 1309151649) << 21 | a >>> 11) + e << 0,
                                a = ((a += ((i = ((i += (a ^ ((t = ((t += (e ^ (a | ~i)) + n[4] - 145523070) << 6 | t >>> 26) + a << 0) | ~e)) + n[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~a)) + n[2] + 718787259) << 15 | e >>> 17) + i << 0) | ~t)) + n[9] - 343485551) << 21 | a >>> 11) + e << 0,
                                this.first ? (this.h0 = t + 1732584193 << 0,
                                    this.h1 = a - 271733879 << 0,
                                    this.h2 = e - 1732584194 << 0,
                                    this.h3 = i + 271733878 << 0,
                                    this.first = !1) : (this.h0 = this.h0 + t << 0,
                                        this.h1 = this.h1 + a << 0,
                                        this.h2 = this.h2 + e << 0,
                                        this.h3 = this.h3 + i << 0)
                        }
                        ,
                        Md5.prototype.hex = function () {
                            this.finalize();
                            var t = this.h0
                                , e = this.h1
                                , i = this.h2
                                , r = this.h3;
                            return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15]
                        }
                        ,
                        Md5.prototype.toString = Md5.prototype.hex,
                        Md5.prototype.digest = function () {
                            this.finalize();
                            var t = this.h0
                                , e = this.h1
                                , i = this.h2
                                , r = this.h3;
                            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255]
                        }
                        ,
                        Md5.prototype.array = Md5.prototype.digest,
                        Md5.prototype.arrayBuffer = function () {
                            this.finalize();
                            var t = new ArrayBuffer(16)
                                , e = new Uint32Array(t);
                            return e[0] = this.h0,
                                e[1] = this.h1,
                                e[2] = this.h2,
                                e[3] = this.h3,
                                t
                        }
                        ,
                        Md5.prototype.buffer = Md5.prototype.arrayBuffer,
                        Md5.prototype.base64 = function () {
                            for (var t, e, i, r = "", o = this.array(), n = 0; n < 15;)
                                t = o[n++],
                                    e = o[n++],
                                    i = o[n++],
                                    r += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | i >>> 6)] + BASE64_ENCODE_CHAR[63 & i];
                            return t = o[n],
                                r + (BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==")
                        }
                        ;
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.md5 = exports,
                        AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return exports
                        }
                            .call(exports, __webpack_require__, exports, module),
                            void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                }()
            },
            23: function _(module, exports, __webpack_require__) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                !function () {
                    "use strict";
                    var ERROR = "input is invalid type"
                        , WINDOW = "object" == ("undefined" == typeof window ? "undefined" : _typeof(window))
                        , root = WINDOW ? window : {};
                    root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" == ("undefined" == typeof self ? "undefined" : _typeof(self))
                        , NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == ("undefined" == typeof process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
                    NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports
                        , AMD = __webpack_require__.amdO
                        , ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer
                        , HEX_CHARS = "0123456789abcdef".split("")
                        , EXTRA = [-2147483648, 8388608, 32768, 128]
                        , SHIFT = [24, 16, 8, 0]
                        , K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
                        , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
                        , blocks = [];
                    !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }
                    ),
                        !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
                            return "object" == _typeof(t) && t.buffer && t.buffer.constructor === ArrayBuffer
                        }
                        );
                    var createOutputMethod = function (e, i) {
                        return function (t) {
                            return new Sha256(i, !0).update(t)[e]()
                        }
                    }
                        , createMethod = function (t) {
                            var e = createOutputMethod("hex", t);
                            NODE_JS && (e = nodeWrap(e, t)),
                                e.create = function () {
                                    return new Sha256(t)
                                }
                                ,
                                e.update = function (t) {
                                    return e.create().update(t)
                                }
                                ;
                            for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
                                var r = OUTPUT_TYPES[i];
                                e[r] = createOutputMethod(r, t)
                            }
                            return e
                        }
                        , nodeWrap = function nodeWrap(method, is224) {
                            var crypto = eval("require('crypto')")
                                , Buffer = eval("require('buffer').Buffer")
                                , algorithm = is224 ? "sha224" : "sha256"
                                , nodeMethod = function (t) {
                                    if ("string" == typeof t)
                                        return crypto.createHash(algorithm).update(t, "utf8").digest("hex");
                                    if (null == t)
                                        throw new Error(ERROR);
                                    return t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
                                        Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(t)).digest("hex") : method(t)
                                };
                            return nodeMethod
                        }
                        , createHmacOutputMethod = function (i, r) {
                            return function (t, e) {
                                return new HmacSha256(t, r, !0).update(e)[i]()
                            }
                        }
                        , createHmacMethod = function (e) {
                            var i = createHmacOutputMethod("hex", e);
                            i.create = function (t) {
                                return new HmacSha256(t, e)
                            }
                                ,
                                i.update = function (t, e) {
                                    return i.create(t).update(e)
                                }
                                ;
                            for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                                var r = OUTPUT_TYPES[t];
                                i[r] = createHmacOutputMethod(r, e)
                            }
                            return i
                        };
                    function Sha256(t, e) {
                        e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                            this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            t ? (this.h0 = 3238371032,
                                this.h1 = 914150663,
                                this.h2 = 812702999,
                                this.h3 = 4144912697,
                                this.h4 = 4290775857,
                                this.h5 = 1750603025,
                                this.h6 = 1694076839,
                                this.h7 = 3204075428) : (this.h0 = 1779033703,
                                    this.h1 = 3144134277,
                                    this.h2 = 1013904242,
                                    this.h3 = 2773480762,
                                    this.h4 = 1359893119,
                                    this.h5 = 2600822924,
                                    this.h6 = 528734635,
                                    this.h7 = 1541459225),
                            this.block = this.start = this.bytes = this.hBytes = 0,
                            this.finalized = this.hashed = !1,
                            this.first = !0,
                            this.is224 = t
                    }
                    function HmacSha256(t, e, i) {
                        var r = _typeof(t);
                        if ("string" === r) {
                            for (var o, n = [], a = t.length, s = 0, c = 0; c < a; ++c)
                                (o = t.charCodeAt(c)) < 128 ? n[s++] = o : (o < 2048 ? n[s++] = 192 | o >> 6 : (o < 55296 || 57344 <= o ? n[s++] = 224 | o >> 12 : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++c)),
                                    n[s++] = 240 | o >> 18,
                                    n[s++] = 128 | o >> 12 & 63),
                                    n[s++] = 128 | o >> 6 & 63),
                                    n[s++] = 128 | 63 & o);
                            t = n
                        } else {
                            if ("object" !== r)
                                throw new Error(ERROR);
                            if (null === t)
                                throw new Error(ERROR);
                            if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                                t = new Uint8Array(t);
                            else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t)))
                                throw new Error(ERROR)
                        }
                        64 < t.length && (t = new Sha256(e, !0).update(t).array());
                        var l = []
                            , d = [];
                        for (c = 0; c < 64; ++c) {
                            var h = t[c] || 0;
                            l[c] = 92 ^ h,
                                d[c] = 54 ^ h
                        }
                        Sha256.call(this, e, i),
                            this.update(d),
                            this.oKeyPad = l,
                            this.inner = !0,
                            this.sharedMemory = i
                    }
                    Sha256.prototype.update = function (t) {
                        if (!this.finalized) {
                            var e, i = _typeof(t);
                            if ("string" !== i) {
                                if ("object" !== i)
                                    throw new Error(ERROR);
                                if (null === t)
                                    throw new Error(ERROR);
                                if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                                    t = new Uint8Array(t);
                                else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t)))
                                    throw new Error(ERROR);
                                e = !0
                            }
                            for (var r, o, n = 0, a = t.length, s = this.blocks; n < a;) {
                                if (this.hashed && (this.hashed = !1,
                                    s[0] = this.block,
                                    s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0),
                                    e)
                                    for (o = this.start; n < a && o < 64; ++n)
                                        s[o >> 2] |= t[n] << SHIFT[3 & o++];
                                else
                                    for (o = this.start; n < a && o < 64; ++n)
                                        (r = t.charCodeAt(n)) < 128 ? s[o >> 2] |= r << SHIFT[3 & o++] : (r < 2048 ? s[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++] : (r < 55296 || 57344 <= r ? s[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++] : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++n)),
                                            s[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++],
                                            s[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++]),
                                            s[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++]),
                                            s[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                                this.lastByteIndex = o,
                                    this.bytes += o - this.start,
                                    64 <= o ? (this.block = s[16],
                                        this.start = o - 64,
                                        this.hash(),
                                        this.hashed = !0) : this.start = o
                            }
                            return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0,
                                this.bytes = this.bytes % 4294967296),
                                this
                        }
                    }
                        ,
                        Sha256.prototype.finalize = function () {
                            var t, e;
                            this.finalized || (this.finalized = !0,
                                t = this.blocks,
                                e = this.lastByteIndex,
                                t[16] = this.block,
                                t[e >> 2] |= EXTRA[3 & e],
                                this.block = t[16],
                                56 <= e && (this.hashed || this.hash(),
                                    t[0] = this.block,
                                    t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
                                t[14] = this.hBytes << 3 | this.bytes >>> 29,
                                t[15] = this.bytes << 3,
                                this.hash())
                        }
                        ,
                        Sha256.prototype.hash = function () {
                            for (var t, e, i, r, o, n, a, s, c = this.h0, l = this.h1, d = this.h2, h = this.h3, u = this.h4, p = this.h5, f = this.h6, m = this.h7, y = this.blocks, v = 16; v < 64; ++v)
                                t = ((r = y[v - 15]) >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3,
                                    e = ((r = y[v - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10,
                                    y[v] = y[v - 16] + t + y[v - 7] + e << 0;
                            for (s = l & d,
                                v = 0; v < 64; v += 4)
                                this.first ? (h = this.is224 ? (o = 300032,
                                    m = (r = y[0] - 1413257819) - 150054599 << 0,
                                    r + 24177077 << 0) : (o = 704751109,
                                        m = (r = y[0] - 210244248) - 1521486534 << 0,
                                        r + 143694565 << 0),
                                    this.first = !1) : (t = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10),
                                        i = (o = c & l) ^ c & d ^ s,
                                        m = h + (r = m + (e = (u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & p ^ ~u & f) + K[v] + y[v]) << 0,
                                        h = r + (t + i) << 0),
                                    t = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10),
                                    i = (n = h & c) ^ h & l ^ o,
                                    f = d + (r = f + (e = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & u ^ ~m & p) + K[v + 1] + y[v + 1]) << 0,
                                    t = ((d = r + (t + i) << 0) >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10),
                                    i = (a = d & h) ^ d & c ^ n,
                                    p = l + (r = p + (e = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & m ^ ~f & u) + K[v + 2] + y[v + 2]) << 0,
                                    t = ((l = r + (t + i) << 0) >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10),
                                    i = (s = l & d) ^ l & h ^ a,
                                    u = c + (r = u + (e = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & f ^ ~p & m) + K[v + 3] + y[v + 3]) << 0,
                                    c = r + (t + i) << 0;
                            this.h0 = this.h0 + c << 0,
                                this.h1 = this.h1 + l << 0,
                                this.h2 = this.h2 + d << 0,
                                this.h3 = this.h3 + h << 0,
                                this.h4 = this.h4 + u << 0,
                                this.h5 = this.h5 + p << 0,
                                this.h6 = this.h6 + f << 0,
                                this.h7 = this.h7 + m << 0
                        }
                        ,
                        Sha256.prototype.hex = function () {
                            this.finalize();
                            var t = this.h0
                                , e = this.h1
                                , i = this.h2
                                , r = this.h3
                                , o = this.h4
                                , n = this.h5
                                , a = this.h6
                                , s = this.h7
                                , c = HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a];
                            return this.is224 || (c += HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s]),
                                c
                        }
                        ,
                        Sha256.prototype.toString = Sha256.prototype.hex,
                        Sha256.prototype.digest = function () {
                            this.finalize();
                            var t = this.h0
                                , e = this.h1
                                , i = this.h2
                                , r = this.h3
                                , o = this.h4
                                , n = this.h5
                                , a = this.h6
                                , s = this.h7
                                , c = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
                            return this.is224 || c.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s),
                                c
                        }
                        ,
                        Sha256.prototype.array = Sha256.prototype.digest,
                        Sha256.prototype.arrayBuffer = function () {
                            this.finalize();
                            var t = new ArrayBuffer(this.is224 ? 28 : 32)
                                , e = new DataView(t);
                            return e.setUint32(0, this.h0),
                                e.setUint32(4, this.h1),
                                e.setUint32(8, this.h2),
                                e.setUint32(12, this.h3),
                                e.setUint32(16, this.h4),
                                e.setUint32(20, this.h5),
                                e.setUint32(24, this.h6),
                                this.is224 || e.setUint32(28, this.h7),
                                t
                        }
                        ,
                        HmacSha256.prototype = new Sha256,
                        HmacSha256.prototype.finalize = function () {
                            var t;
                            Sha256.prototype.finalize.call(this),
                                this.inner && (this.inner = !1,
                                    t = this.array(),
                                    Sha256.call(this, this.is224, this.sharedMemory),
                                    this.update(this.oKeyPad),
                                    this.update(t),
                                    Sha256.prototype.finalize.call(this))
                        }
                        ;
                    var exports = createMethod();
                    exports.sha256 = exports,
                        exports.sha224 = createMethod(!0),
                        exports.sha256.hmac = createHmacMethod(),
                        exports.sha224.hmac = createHmacMethod(!0),
                        COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256,
                            root.sha224 = exports.sha224,
                            AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                                return exports
                            }
                                .call(exports, __webpack_require__, exports, module),
                                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                }()
            },
            61: function (H, t, e) {
                var C = e(698).default;
                function A() {
                    "use strict";
                    H.exports = A = function () {
                        return a
                    }
                        ,
                        H.exports.__esModule = !0,
                        H.exports.default = H.exports;
                    var a = {}
                        , t = Object.prototype
                        , d = t.hasOwnProperty
                        , h = Object.defineProperty || function (t, e, i) {
                            t[e] = i.value
                        }
                        , e = "function" == typeof Symbol ? Symbol : {}
                        , o = e.iterator || "@@iterator"
                        , i = e.asyncIterator || "@@asyncIterator"
                        , r = e.toStringTag || "@@toStringTag";
                    function n(t, e, i) {
                        return Object.defineProperty(t, e, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                            t[e]
                    }
                    try {
                        n({}, "")
                    } catch (t) {
                        n = function (t, e, i) {
                            return t[e] = i
                        }
                    }
                    function s(t, e, i, r) {
                        var n, a, s, c, o = e && e.prototype instanceof f ? e : f, l = Object.create(o.prototype), d = new x(r || []);
                        return h(l, "_invoke", {
                            value: (n = t,
                                a = i,
                                s = d,
                                c = "suspendedStart",
                                function (t, e) {
                                    if ("executing" === c)
                                        throw new Error("Generator is already running");
                                    if ("completed" === c) {
                                        if ("throw" === t)
                                            throw e;
                                        return $()
                                    }
                                    for (s.method = t,
                                        s.arg = e; ;) {
                                        var i = s.delegate;
                                        if (i) {
                                            var r = w(i, s);
                                            if (r) {
                                                if (r === p)
                                                    continue;
                                                return r
                                            }
                                        }
                                        if ("next" === s.method)
                                            s.sent = s._sent = s.arg;
                                        else if ("throw" === s.method) {
                                            if ("suspendedStart" === c)
                                                throw c = "completed",
                                                s.arg;
                                            s.dispatchException(s.arg)
                                        } else
                                            "return" === s.method && s.abrupt("return", s.arg);
                                        c = "executing";
                                        var o = u(n, a, s);
                                        if ("normal" === o.type) {
                                            if (c = s.done ? "completed" : "suspendedYield",
                                                o.arg === p)
                                                continue;
                                            return {
                                                value: o.arg,
                                                done: s.done
                                            }
                                        }
                                        "throw" === o.type && (c = "completed",
                                            s.method = "throw",
                                            s.arg = o.arg)
                                    }
                                }
                            )
                        }),
                            l
                    }
                    function u(t, e, i) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, i)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    a.wrap = s;
                    var p = {};
                    function f() { }
                    function c() { }
                    function l() { }
                    var m = {};
                    n(m, o, function () {
                        return this
                    });
                    var y = Object.getPrototypeOf
                        , v = y && y(y(E([])));
                    v && v !== t && d.call(v, o) && (m = v);
                    var _ = l.prototype = f.prototype = Object.create(m);
                    function g(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            n(t, e, function (t) {
                                return this._invoke(e, t)
                            })
                        })
                    }
                    function b(c, l) {
                        var e;
                        h(this, "_invoke", {
                            value: function (i, r) {
                                function t() {
                                    return new l(function (t, e) {
                                        !function e(t, i, r, o) {
                                            var n = u(c[t], c, i);
                                            if ("throw" !== n.type) {
                                                var a = n.arg
                                                    , s = a.value;
                                                return s && "object" == C(s) && d.call(s, "__await") ? l.resolve(s.__await).then(function (t) {
                                                    e("next", t, r, o)
                                                }, function (t) {
                                                    e("throw", t, r, o)
                                                }) : l.resolve(s).then(function (t) {
                                                    a.value = t,
                                                        r(a)
                                                }, function (t) {
                                                    return e("throw", t, r, o)
                                                })
                                            }
                                            o(n.arg)
                                        }(i, r, t, e)
                                    }
                                    )
                                }
                                return e = e ? e.then(t, t) : t()
                            }
                        })
                    }
                    function w(t, e) {
                        var i = e.method
                            , r = t.iterator[i];
                        if (void 0 === r)
                            return e.delegate = null,
                                "throw" === i && t.iterator.return && (e.method = "return",
                                    e.arg = void 0,
                                    w(t, e),
                                    "throw" === e.method) || "return" !== i && (e.method = "throw",
                                        e.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                                p;
                        var o = u(r, t.iterator, e.arg);
                        if ("throw" === o.type)
                            return e.method = "throw",
                                e.arg = o.arg,
                                e.delegate = null,
                                p;
                        var n = o.arg;
                        return n ? n.done ? (e[t.resultName] = n.value,
                            e.next = t.nextLoc,
                            "return" !== e.method && (e.method = "next",
                                e.arg = void 0),
                            e.delegate = null,
                            p) : n : (e.method = "throw",
                                e.arg = new TypeError("iterator result is not an object"),
                                e.delegate = null,
                                p)
                    }
                    function S(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]),
                            2 in t && (e.finallyLoc = t[2],
                                e.afterLoc = t[3]),
                            this.tryEntries.push(e)
                    }
                    function k(t) {
                        var e = t.completion || {};
                        e.type = "normal",
                            delete e.arg,
                            t.completion = e
                    }
                    function x(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                            t.forEach(S, this),
                            this.reset(!0)
                    }
                    function E(e) {
                        if (e) {
                            var t = e[o];
                            if (t)
                                return t.call(e);
                            if ("function" == typeof e.next)
                                return e;
                            if (!isNaN(e.length)) {
                                var i = -1
                                    , r = function t() {
                                        for (; ++i < e.length;)
                                            if (d.call(e, i))
                                                return t.value = e[i],
                                                    t.done = !1,
                                                    t;
                                        return t.value = void 0,
                                            t.done = !0,
                                            t
                                    };
                                return r.next = r
                            }
                        }
                        return {
                            next: $
                        }
                    }
                    function $() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return h(_, "constructor", {
                        value: c.prototype = l,
                        configurable: !0
                    }),
                        h(l, "constructor", {
                            value: c,
                            configurable: !0
                        }),
                        c.displayName = n(l, r, "GeneratorFunction"),
                        a.isGeneratorFunction = function (t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === c || "GeneratorFunction" === (e.displayName || e.name))
                        }
                        ,
                        a.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, l) : (t.__proto__ = l,
                                n(t, r, "GeneratorFunction")),
                                t.prototype = Object.create(_),
                                t
                        }
                        ,
                        a.awrap = function (t) {
                            return {
                                __await: t
                            }
                        }
                        ,
                        g(b.prototype),
                        n(b.prototype, i, function () {
                            return this
                        }),
                        a.AsyncIterator = b,
                        a.async = function (t, e, i, r, o) {
                            void 0 === o && (o = Promise);
                            var n = new b(s(t, e, i, r), o);
                            return a.isGeneratorFunction(e) ? n : n.next().then(function (t) {
                                return t.done ? t.value : n.next()
                            })
                        }
                        ,
                        g(_),
                        n(_, r, "Generator"),
                        n(_, o, function () {
                            return this
                        }),
                        n(_, "toString", function () {
                            return "[object Generator]"
                        }),
                        a.keys = function (t) {
                            var i = Object(t)
                                , r = [];
                            for (var e in i)
                                r.push(e);
                            return r.reverse(),
                                function t() {
                                    for (; r.length;) {
                                        var e = r.pop();
                                        if (e in i)
                                            return t.value = e,
                                                t.done = !1,
                                                t
                                    }
                                    return t.done = !0,
                                        t
                                }
                        }
                        ,
                        a.values = E,
                        x.prototype = {
                            constructor: x,
                            reset: function (t) {
                                if (this.prev = 0,
                                    this.next = 0,
                                    this.sent = this._sent = void 0,
                                    this.done = !1,
                                    this.delegate = null,
                                    this.method = "next",
                                    this.arg = void 0,
                                    this.tryEntries.forEach(k),
                                    !t)
                                    for (var e in this)
                                        "t" === e.charAt(0) && d.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                            },
                            stop: function () {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type)
                                    throw t.arg;
                                return this.rval
                            },
                            dispatchException: function (i) {
                                if (this.done)
                                    throw i;
                                var r = this;
                                function t(t, e) {
                                    return n.type = "throw",
                                        n.arg = i,
                                        r.next = t,
                                        e && (r.method = "next",
                                            r.arg = void 0),
                                        !!e
                                }
                                for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                    var o = this.tryEntries[e]
                                        , n = o.completion;
                                    if ("root" === o.tryLoc)
                                        return t("end");
                                    if (o.tryLoc <= this.prev) {
                                        var a = d.call(o, "catchLoc")
                                            , s = d.call(o, "finallyLoc");
                                        if (a && s) {
                                            if (this.prev < o.catchLoc)
                                                return t(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc)
                                                return t(o.finallyLoc)
                                        } else if (a) {
                                            if (this.prev < o.catchLoc)
                                                return t(o.catchLoc, !0)
                                        } else {
                                            if (!s)
                                                throw new Error("try statement without catch or finally");
                                            if (this.prev < o.finallyLoc)
                                                return t(o.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function (t, e) {
                                for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                                    var r = this.tryEntries[i];
                                    if (r.tryLoc <= this.prev && d.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                        var o = r;
                                        break
                                    }
                                }
                                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                var n = o ? o.completion : {};
                                return n.type = t,
                                    n.arg = e,
                                    o ? (this.method = "next",
                                        this.next = o.finallyLoc,
                                        p) : this.complete(n)
                            },
                            complete: function (t, e) {
                                if ("throw" === t.type)
                                    throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                                    this.method = "return",
                                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                                    p
                            },
                            finish: function (t) {
                                for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                    var i = this.tryEntries[e];
                                    if (i.finallyLoc === t)
                                        return this.complete(i.completion, i.afterLoc),
                                            k(i),
                                            p
                                }
                            },
                            catch: function (t) {
                                for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                    var i = this.tryEntries[e];
                                    if (i.tryLoc === t) {
                                        var r, o = i.completion;
                                        return "throw" === o.type && (r = o.arg,
                                            k(i)),
                                            r
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function (t, e, i) {
                                return this.delegate = {
                                    iterator: E(t),
                                    resultName: e,
                                    nextLoc: i
                                },
                                    "next" === this.method && (this.arg = void 0),
                                    p
                            }
                        },
                        a
                }
                H.exports = A,
                    H.exports.__esModule = !0,
                    H.exports.default = H.exports
            },
            698: function (e) {
                function i(t) {
                    return e.exports = i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
                        return _typeof(t)
                    }
                        : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t)
                        }
                        ,
                        e.exports.__esModule = !0,
                        e.exports.default = e.exports,
                        i(t)
                }
                e.exports = i,
                    e.exports.__esModule = !0,
                    e.exports.default = e.exports
            },
            687: function (t, e, i) {
                var r = i(61)();
                t.exports = r;
                try {
                    regeneratorRuntime = r
                } catch (t) {
                    "object" == ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
                }
            }
        }
            , __webpack_module_cache__ = {};
        function __webpack_require__(t) {
            var e = __webpack_module_cache__[t];
            if (void 0 !== e)
                return e.exports;
            var i = __webpack_module_cache__[t] = {
                exports: {}
            };
            return __webpack_modules__[t](i, i.exports, __webpack_require__),
                i.exports
        }
        __webpack_require__.amdO = {},
            __webpack_require__.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                }
                    : function () {
                        return t
                    }
                    ;
                return __webpack_require__.d(e, {
                    a: e
                }),
                    e
            }
            ,
            __webpack_require__.d = function (t, e) {
                for (var i in e)
                    __webpack_require__.o(e, i) && !__webpack_require__.o(t, i) && Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
            }
            ,
            __webpack_require__.g = function () {
                if ("object" == ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis)))
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" == ("undefined" == typeof window ? "undefined" : _typeof(window)))
                        return window
                }
            }(),
            __webpack_require__.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            __webpack_require__.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
            ;
        var __webpack_exports__ = {};
        return function () {
            "use strict";
            function n(t) {
                if (0 < document.cookie.length) {
                    var e = document.cookie.indexOf(t + "=");
                    if (-1 !== e) {
                        e = e + t.length + 1;
                        var i = document.cookie.indexOf(";", e);
                        return -1 === i && (i = document.cookie.length),
                            decodeURIComponent(document.cookie.substring(e, i))
                    }
                }
                return ""
            }
            function o(t, e, i) {
                var r = Object.assign({}, {
                    domain: ".591.com.tw",
                    expires: 365,
                    path: "/"
                }, i);
                "number" == typeof r.expires && (r.expires = new Date(+new Date + 864e5 * r.expires)),
                    r.expires = r.expires ? r.expires.toUTCString() : "";
                var o = "";
                for (var n in r)
                    r[n] && (o += "; " + n,
                        !0 !== r[n] && (o += "=" + r[n].split(";")[0]));
                document.cookie = t + "=" + e + o
            }
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    default: function () {
                        return z
                    }
                });
            var t = [];
            t[1] = {
                id: 1,
                txt: "台北市"
            },
                t[3] = {
                    id: 3,
                    txt: "新北市"
                },
                t[6] = {
                    id: 6,
                    txt: "桃園市"
                },
                t[4] = {
                    id: 4,
                    txt: "新竹市"
                },
                t[5] = {
                    id: 5,
                    txt: "新竹縣"
                },
                t[21] = {
                    id: 21,
                    txt: "宜蘭縣"
                },
                t[2] = {
                    id: 2,
                    txt: "基隆市"
                },
                t[8] = {
                    id: 8,
                    txt: "台中市"
                },
                t[10] = {
                    id: 10,
                    txt: "彰化縣"
                },
                t[14] = {
                    id: 14,
                    txt: "雲林縣"
                },
                t[7] = {
                    id: 7,
                    txt: "苗栗縣"
                },
                t[11] = {
                    id: 11,
                    txt: "南投縣"
                },
                t[17] = {
                    id: 17,
                    txt: "高雄市"
                },
                t[15] = {
                    id: 15,
                    txt: "台南市"
                },
                t[12] = {
                    id: 12,
                    txt: "嘉義市"
                },
                t[13] = {
                    id: 13,
                    txt: "嘉義縣"
                },
                t[19] = {
                    id: 19,
                    txt: "屏東縣"
                },
                t[22] = {
                    id: 22,
                    txt: "台東縣"
                },
                t[23] = {
                    id: 23,
                    txt: "花蓮縣"
                },
                t[24] = {
                    id: 24,
                    txt: "澎湖縣"
                },
                t[25] = {
                    id: 25,
                    txt: "金門縣"
                },
                t[26] = {
                    id: 26,
                    txt: "連江縣"
                };
            var e = t;
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++)
                    r[i] = t[i];
                return r
            }
            function a(t) {
                return new RegExp(/^\d$/g).test(t) ? "0" + t : t
            }
            function h(t) {
                return t ? (t = parseInt(t),
                    i = parseInt(t % 60),
                    e = parseInt(t % 3600 / 60),
                    r = parseInt(t % 3600 / 3600 / 60),
                    a(r) + ":" + a(e) + ":" + a(i)) : "";
                var e, i, r
            }
            function u(t, e) {
                var i = document.createElement("script");
                i.type = "text/javascript",
                    i.src = t,
                    i.onload = i.onreadystatechange = function () {
                        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (this.onload = this.onreadystatechange = null,
                            this.parentNode.removeChild(this)),
                            e && e()
                    }
                    ,
                    document.getElementsByTagName("head")[0].appendChild(i)
            }
            function f(t) {
                var e, i = new URLSearchParams(t || window.location.search), r = {}, o = function (t, e) {
                    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!i) {
                        if (Array.isArray(t) || (i = function (t) {
                            if (t) {
                                if ("string" == typeof t)
                                    return c(t, void 0);
                                var e = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === e && t.constructor && (e = t.constructor.name),
                                    "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? c(t, void 0) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                            i && (t = i);
                            var r = 0
                                , o = function () { };
                            return {
                                s: o,
                                n: function () {
                                    return r >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[r++]
                                    }
                                },
                                e: function (t) {
                                    throw t
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var n, a = !0, s = !1;
                    return {
                        s: function () {
                            i = i.call(t)
                        },
                        n: function () {
                            var t = i.next();
                            return a = t.done,
                                t
                        },
                        e: function (t) {
                            s = !0,
                                n = t
                        },
                        f: function () {
                            try {
                                a || null == i.return || i.return()
                            } finally {
                                if (s)
                                    throw n
                            }
                        }
                    }
                }(i.keys());
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var n = e.value;
                        r[n] = i.get(n)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return r
            }
            function m(t) {
                t = t || 8;
                for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", i = e.length, r = "", o = 0; o < t; o++)
                    r += e.charAt(Math.floor(Math.random() * i));
                return r
            }
            var i = n("T591_TOKEN") || window.T591_TOKEN
                , r = n(document.getElementById("unionTouch") ? "regionCookieId" : "urlJumpIp") || 1
                , s = e[e[r] ? r : 1].txt;
            function l(t, e, i, r, o, n, a) {
                try {
                    var s = t[n](a)
                        , c = s.value
                } catch (t) {
                    return void i(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }
            function d(s) {
                return function () {
                    var t = this
                        , a = arguments;
                    return new Promise(function (e, i) {
                        var r = s.apply(t, a);
                        function o(t) {
                            l(r, e, i, o, n, "next", t)
                        }
                        function n(t) {
                            l(r, e, i, o, n, "throw", t)
                        }
                        o(void 0)
                    }
                    )
                }
            }
            function p(t) {
                if (t.length < 2)
                    return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? C(192 | e >>> 6) + C(128 | 63 & e) : C(224 | e >>> 12 & 15) + C(128 | e >>> 6 & 63) + C(128 | 63 & e);
                var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                return C(240 | e >>> 18 & 7) + C(128 | e >>> 12 & 63) + C(128 | e >>> 6 & 63) + C(128 | 63 & e)
            }
            function y(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : P ? window.navigator.userAgent : void 0
                    , i = {
                        model: "",
                        vendor: ""
                    };
                if ("string" != typeof e)
                    return i;
                i.model = "pc";
                for (var r = 0; r <= j.length && j[r]; r++) {
                    var o = j[r]
                        , n = o.regs
                        , a = o.vendor;
                    if (n.find(function (t) {
                        return t.exec(e)
                    })) {
                        i.model = "touch",
                            i.vendor = a;
                        break
                    }
                }
                return i
            }
            function v(e) {
                var i = "";
                return e ? (Object.keys(e).sort().forEach(function (t) {
                    i += t + "=" + e[t] + "`"
                }),
                    i = i.slice(0, i.length - 1)) : i
            }
            function _(t) {
                return M[0 < arguments.length && void 0 !== t ? t : "touch"]
            }
            var g, b, w, S = __webpack_require__(687), k = __webpack_require__.n(S), x = "function" == typeof btoa, E = "function" == typeof Buffer, $ = ("function" == typeof TextDecoder && new TextDecoder,
                "function" == typeof TextEncoder ? new TextEncoder : void 0), H = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), C = (g = {},
                    H.forEach(function (t, e) {
                        return g[t] = e
                    }),
                    String.fromCharCode.bind(String)), A = ("function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array),
                        function (t) {
                            return t.replace(/=/g, "").replace(/[+\/]/g, function (t) {
                                return "+" == t ? "-" : "_"
                            })
                        }
                    ), T = x ? function (t) {
                        return btoa(t)
                    }
                        : E ? function (t) {
                            return Buffer.from(t, "binary").toString("base64")
                        }
                            : function (t) {
                                for (var e, i, r, o, n = "", a = t.length % 3, s = 0; s < t.length;) {
                                    if (255 < (i = t.charCodeAt(s++)) || 255 < (r = t.charCodeAt(s++)) || 255 < (o = t.charCodeAt(s++)))
                                        throw new TypeError("invalid character found");
                                    n += H[(e = i << 16 | r << 8 | o) >> 18 & 63] + H[e >> 12 & 63] + H[e >> 6 & 63] + H[63 & e]
                                }
                                return a ? n.slice(0, a - 3) + "===".substring(a) : n
                            }
                , I = E ? function (t) {
                    return Buffer.from(t).toString("base64")
                }
                    : function (t) {
                        for (var e = [], i = 0, r = t.length; i < r; i += 4096)
                            e.push(C.apply(null, t.subarray(i, i + 4096)));
                        return T(e.join(""))
                    }
                , R = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, O = E ? function (t) {
                    return Buffer.from(t, "utf8").toString("base64")
                }
                    : $ ? function (t) {
                        return I($.encode(t))
                    }
                        : function (t) {
                            return T(t.replace(R, p))
                        }
                , L = function (t, e) {
                    return 1 < arguments.length && void 0 !== e && e ? A(O(t)) : O(t)
                }, N = __webpack_require__(495), B = __webpack_require__.n(N), D = __webpack_require__(23), W = __webpack_require__.n(D), j = [{
                    regs: [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i, /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                    vendor: "Samsung"
                }, {
                    regs: [/\((ip(?:hone|od)[\w ]*);/i, /\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    vendor: "Apple"
                }, {
                    regs: [/(pixel c)\b/i, /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    vendor: "Google"
                }, {
                    regs: [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i, /(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    vendor: "Huawei"
                }, {
                    regs: [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    vendor: "Xiaomi"
                }, {
                    regs: [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    vendor: "OPPO"
                }, {
                    regs: [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    vendor: "Vivo"
                }, {
                    regs: [/(Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i],
                    vendor: "other"
                }], P = "undefined" != typeof window, M = {
                    android: {
                        appid: "nqqpaNaqebvq",
                        secret: "735e4ebbbb6eff36f4ec9d800107fdee"
                    },
                    ios: {
                        appid: "nqqpaVBF",
                        secret: "2cac67e737d4a454e6d15ae2aeeb9eae"
                    },
                    touch: {
                        appid: "nqqpaGbhpu",
                        secret: "13f61eb5a0b38e8362758f4072cd94da"
                    },
                    pc: {
                        appid: "nqqpaCP",
                        secret: "e1d0b33290b29970ab1693a0939d350b"
                    }
                }, F = (w = d(k().mark(function t() {
                    var r, e;
                    return k().wrap(function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    if (r = n("timeDifference")) {
                                        t.next = 10;
                                        break
                                    }
                                    return e = "https://api.debug.591.com.tw/api/tools/getTimestamp",
                                        window.location.hostname.includes("debug") || window.location.hostname.includes(".dev") || (e = e.replace(/\.debug/gim, "")),
                                        t.next = 7,
                                        fetch(e, {
                                            params: {
                                                times: (new Date).getTime()
                                            }
                                        }).then(function (t) {
                                            return t.json()
                                        }).then(function (t) {
                                            if (1 === t.status) {
                                                var e = t.data._timestamp
                                                    , i = new Date((new Date).getTime() + 36e5);
                                                return o("timeDifference", r = e - Math.round((new Date).getTime() / 1e3), {
                                                    expires: i
                                                }),
                                                    r
                                            }
                                        });
                                case 7:
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                    }, t)
                })),
                    function () {
                        return w.apply(this, arguments)
                    }
                ), U = (b = d(k().mark(function t(r) {
                    var o, n, a, s, c, l, d, h, u, p;
                    return k().wrap(function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.t0 = Math.round((new Date).getTime() / 1e3),
                                        t.next = 3,
                                        F();
                                case 3:
                                    return t.t1 = +t.sent,
                                        o = t.t0 + t.t1,
                                        n = f(),
                                        a = y(),
                                        s = r.device || n.embed || a.model || "pc",
                                        c = _(s),
                                        l = new URL(r.url),
                                        r.params.device = s,
                                        d = {
                                            method: (r.method || "GET").toUpperCase(),
                                            url: l.hostname + l.pathname,
                                            param: v(r.params),
                                            secret: c.secret,
                                            timestamp: o,
                                            randomStr: m()
                                        },
                                        i = p = d.method + d.url + d.param + d.secret + (h = d.timestamp) + (u = d.randomStr),
                                        p = W()(i),
                                        e = p,
                                        p = B()(e),
                                        p = L(p),
                                        t.abrupt("return", {
                                            sigParams: {
                                                _signature: p,
                                                _timestamp: h,
                                                _randomstr: u,
                                                _appid: c.appid
                                            },
                                            sigStr: "device=".concat(s, "&_signature=").concat(p, "&_timestamp=").concat(h, "&_randomstr=").concat(u, "&_appid=").concat(c.appid)
                                        });
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        var e, i
                    }, t)
                })),
                    function (t) {
                        return b.apply(this, arguments)
                    }
                ), X = {};
            function q(i, s) {
                var c = this
                    , e = "300px"
                    , r = "250px";
                function o(t) {
                    var e, i, r, o = "";
                    return -1 < t.indexOf("watch") ? (i = t || location.search,
                        r = {},
                        i.length && i.split("?")[1].split("&").forEach(function (t) {
                            e = t.split("="),
                                r[e[0]] = e[1]
                        }),
                        o = r.v) : -1 < t.indexOf("youtu.be") ? o = t.replace("https://youtu.be/", "") : -1 < t.indexOf("embed") && (o = t.replace("https://www.youtube.com/embed/", "")),
                        o
                }
                s.push(i),
                    c.defaults.isTouch && (e = "100%",
                        r = "206px"),
                    window.onYouTubeIframeAPIReady = function () {
                        for (var a = {}, t = 0; t < s.length; t++)
                            !function (n) {
                                window["player" + s[n].aid] = new YT.Player("ytbPlayer" + s[n].aid, {
                                    width: e,
                                    height: r,
                                    videoId: o(s[n].youtube_url),
                                    playerVars: {
                                        autoplay: 1,
                                        controls: 1,
                                        iv_load_policy: 3,
                                        playlist: o(s[n].youtube_url),
                                        loop: 1,
                                        modestbranding: 1,
                                        origin: 1,
                                        playsinline: 1,
                                        showinfo: 0
                                    },
                                    events: {
                                        onReady: function (e) {
                                            var i = "timer" + s[n].aid
                                                , r = parseInt(window["player" + s[n].aid].getDuration())
                                                , o = document.getElementById("ytbPlayer" + s[n].aid + "-time");
                                            e.target.mute(),
                                                c.scrollEventHandler({
                                                    ele: e.target.a,
                                                    twoThirdShowEvent: function () {
                                                        if ("{}" !== JSON.stringify(X) && c.defaults.isTouch)
                                                            for (var t in X)
                                                                clearInterval(X[t]),
                                                                    delete X[t];
                                                        X[i] = setInterval(function () {
                                                            if (!o.parentNode && c.defaults.isTouch)
                                                                return clearInterval(X[i]),
                                                                    !1;
                                                            var t = window["player" + s[n].aid].getCurrentTime();
                                                            a[i] = r - t,
                                                                o.innerText = h(a[i]),
                                                                a[i]--,
                                                                0 === a[i] && (a[i] = r)
                                                        }, 1e3),
                                                            document.getElementById(e.target.getIframe().id + "-img").style.display = "none",
                                                            e.target.playVideo()
                                                    },
                                                    twoThirdHiddeEvent: function () {
                                                        clearInterval(X[i]),
                                                            e.target.pauseVideo()
                                                    }
                                                })
                                        },
                                        onStateChange: function (t) {
                                            1 === t.data && document.getElementById("playYtbVideo") && (document.getElementById("playYtbVideo").style.display = "none")
                                        }
                                    }
                                })
                            }(t)
                    }
                    ,
                    this.getScript("https://s.591.com.tw/union/generator/lib/iframe_api.js", function () {
                        YT.Player && window.onYouTubeIframeAPIReady && window.onYouTubeIframeAPIReady()
                    });
                var n = document.getElementById("ytbPlayer" + i.aid + "-voice");
                n.addEventListener("click", function (t) {
                    var e = '<span class="no-voice"></span>';
                    "no-voice" === ("ytbVoice" === t.target.className ? t.target.children[0] : t.target).className ? (e = '<b class="voice"></b>',
                        window["player" + i.aid].unMute()) : window["player" + i.aid].mute(),
                        n.innerHTML = e
                }),
                    document.getElementById("playYtbVideo").addEventListener("click", function () {
                        window["player" + i.aid].playVideo()
                    })
            }
            function K(t, e, i, r) {
                var o = this.getGAString(t.position_name, t.order_number, 1);
                this.hotEventSend(o);
                var n = {
                    href: t.url && this.addToken(t.event_click_url),
                    title: t.txt,
                    target: !this.defaults.isTouch,
                    attrValue: this.getGAString(t.position_name, t.order_number),
                    attrHref: (t.hls_video_url || t.youtube_url) && t.event_media_url
                }
                    , a = this.createLink(n);
                return "string" == typeof e ? a.innerHTML = e : a.appendChild(e),
                    i && function (t, e, i, r) {
                        var o, n, a, s, c, l, d, h, u, p = this;
                        t && (r.style = "display:block; width:100%; min-height:211px",
                            (o = p.createLink(i)).style = "position:absolute; left:0; top:0; width:100%; height:100%; z-index:8;",
                            r.appendChild(o),
                            n = "250px",
                            a = "width:44px; height:44px; bottom:35px;",
                            p.defaults.isTouch && (n = "193px",
                                a = "width:.8rem; height:.8rem; top:161px;"),
                            (s = document.createElement("div")).className = "ytbVoice",
                            s.id = r.getElementsByClassName("ytbPlayer")[0].id + "-voice",
                            s.innerHTML = '<span class="no-voice"></span>',
                            s.style = "position:absolute;" + a + "left:0; z-index:9;",
                            r.appendChild(s),
                            (c = p.createLink(i)).id = r.getElementsByClassName("ytbPlayer")[0].id + "-img",
                            c.style = "background:url(" + e.img + ") no-repeat center/cover;position:absolute;top:0;left:0;width:100%;height:" + n + ";z-index:8;",
                            r.appendChild(c),
                            (l = document.createElement("strong")).className = "ytbTime",
                            l.id = r.getElementsByClassName("ytbPlayer")[0].id + "-time",
                            r.appendChild(l)),
                            p.defaults.isTouch ? ((d = p.createLink(i)).innerHTML = e.txt,
                                d.style = "display:block; width:100%; background-color:#f5f5f5; margin-top: -5px; font-size:14px; color:#222; padding: .2rem;; border-bottom:1px solid #e6e6e6;",
                                r.appendChild(d)) : ((h = document.createElement("p")).classList.add("title"),
                                    h.innerHTML = e.txt,
                                    r.appendChild(h)),
                            p.defaults.isTouch && t && ((u = document.createElement("div")).id = "playYtbVideo",
                                u.style = "position: absolute; width:2rem; height:2rem; top:42%; left:50%; transform: translate(-50%, -50%); z-index: 9;",
                                r.appendChild(u))
                    }
                        .call(this, r, t, n, a),
                    a.appendChild(function (t, e) {
                        this.sendUnionStat(null, t);
                        var i = document.createElement("div");
                        return i.setAttribute("data-union-stat", this.addToken(t)),
                            i.setAttribute("data-gtm-str", e),
                            i.className = "unionDataStat",
                            i
                    }
                        .call(this, t.event_show_url, o)),
                    a
            }
            function V(c, t) {
                var l, d, e = t.length;
                0 < e ? (l = t[this.random(0, e - 1)],
                    (d = this).creatHTML(l).then(function (t) {
                        var i, e, r, o, n, a, s;
                        c.innerHTML = t.outerHTML,
                            d.scrollSendStat(c, l),
                            4 === l.pd_type && (l.hls_video_url ? (i = c.getElementsByTagName("video")[0],
                                s = i,
                                u("//s.591.com.tw/widget/plugin/hls.light.min.js", function () {
                                    var t;
                                    Hls.isSupported() && ((t = new Hls).loadSource(s.src),
                                        t.attachMedia(s),
                                        t.on(Hls.Events.MANIFEST_PARSED, function () {
                                            s.play().then(function () {
                                                s.muted = !0,
                                                    s.play()
                                            }).catch(function () {
                                                s.muted = !0,
                                                    s.play()
                                            })
                                        }))
                                }),
                                (e = document.createElement("i")).classList.add("time"),
                                c.appendChild(e),
                                r = c.getElementsByTagName("i")[0],
                                (o = document.createElement("span")).classList.add("no-voice"),
                                d.defaults.isTouch ? ((n = document.createElement("div")).classList.add("voice-box"),
                                    n.style = "position: absolute;width:0.8rem;height:1rem;bottom:.88rem;left:0;z-index: 99;",
                                    n.appendChild(o),
                                    o = n,
                                    (a = document.createElement("div")).classList.add("btn-box"),
                                    a.innerHTML = "<em></em>",
                                    a.style = "position: absolute;width:1rem;height:1rem;top:0;right:0;z-index: 9;",
                                    c.appendChild(a),
                                    navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && (i.setAttribute("webkit-playsinline", !0),
                                        i.setAttribute("playsinline", !0),
                                        i.setAttribute("x-webkit-airplay", "allow"),
                                        i.setAttribute("x5-playsinline", !0))) : c.addEventListener("click", function (t) {
                                            var e = (t = t || window.event).target;
                                            "span" === e.nodeName.toLowerCase() && (e.classList.contains("no-voice") ? (i.muted = !1,
                                                e.classList.remove("no-voice"),
                                                e.classList.add("voice")) : (i.muted = !0,
                                                    e.classList.remove("voice"),
                                                    e.classList.add("no-voice")))
                                        }),
                                c.appendChild(o),
                                i.onloadedmetadata = function () {
                                    var t = h(i.duration);
                                    r.innerText = t
                                }
                                ,
                                i.ontimeupdate = function () {
                                    var t = i.duration - i.currentTime
                                        , t = h(t);
                                    r.innerText = t
                                }
                            ) : l.youtube_url && q.call(d, l, d.defaults.arrAid))
                    })) : c.innerHTML = ""
            }
            var J;
            function z(t) {
                if (!(this instanceof z))
                    return new z(t);
                if ((t = t || {}).pid) {
                    var e = !!document.getElementById("unionTouch");
                    for (var i in this.defaults = {
                        pid: "",
                        callback: null,
                        isCreatImg: !0,
                        regionid: n(e ? "regionCookieId" : "urlJumpIp") || 1,
                        param: "",
                        arrAid: [],
                        isTouch: e
                    },
                        t)
                        t.hasOwnProperty(i) && (this.defaults[i] = t[i]);
                    var r = (new Date).toLocaleDateString().replace(new RegExp("/", "gm"), "-")
                        , o = -1 < location.host.indexOf("dev") || -1 < location.host.indexOf("debug") ? ".debug" : "";
                    this.scriptUrl = "//union" + o + ".591.com.tw/ssp?callback=unionName_" + this.defaults.pid + "&pid=" + this.defaults.pid + "&regionid=" + this.defaults.regionid + (this.defaults.isTouch ? "&device=touch" : "") + (this.defaults.param ? "&" + this.defaults.param : "") + "&_v=" + r,
                        this.init()
                }
            }
            function Y(t) {
                return J.apply(this, arguments)
            }
            (window.UNION_SHOW = z).version = "v7",
                z.prototype = {
                    version: "v7",
                    init: function () {
                        this.getScript(this.scriptUrl),
                            this.callbackFun()
                    },
                    callbackFun: function () {
                        var e = this;
                        window["unionName_" + e.defaults.pid] = function (t) {
                            (function (t) {
                                var e, i, r = Object.keys(t.data), o = r[0], n = 1 === r.length ? t.data[o] : t.data;
                                this.defaults.callback && this.defaults.callback.call(this, n),
                                    this.defaults.isCreatImg && (e = t.data[o],
                                        (i = document.getElementById("UNION_" + this.defaults.pid)) && V.call(this, i, e))
                            }
                            ).call(e, t),
                                window["unionName_" + e.defaults.pid] = function () {
                                    console.warn("未找到unionName_" + e.defaults.pid + "方法！")
                                }
                        }
                    },
                    random: function (t, e) {
                        return parseInt(Math.random() * (e - t + 1) + t, 10)
                    },
                    shuffle: function (t) {
                        return t.sort(function () {
                            return .5 < Math.random() ? -1 : 1
                        })
                    },
                    getNumberArray: function (t) {
                        for (var e = [], i = 0; i < t; i++)
                            e.push(i);
                        return e
                    },
                    addToken: function (t) {
                        return t + "&_u=" + i
                    },
                    getGAString: function (t, e, i, r) {
                        return (1 === i ? "廣告瀏覽-Union" : "廣告點擊-Union") + "_" + (r || s) + "-" + t + "_" + (e || 1)
                    },
                    getScript: u,
                    scrollEventHandler: function (t) {
                        var i = {
                            ele: t.ele || "",
                            twoThirdHiddeEvent: t.twoThirdHiddeEvent || "",
                            twoThirdShowEvent: t.twoThirdShowEvent || "",
                            triggerOne: t.triggerOne || !0
                        };
                        if ("" === i.ele)
                            return !1;
                        function r() {
                            if (!i.ele.clientHeight)
                                return document.removeEventListener("scroll", r, !1),
                                    !1;
                            var t, e = {
                                top: (t = (i.ele.clientHeight ? i.ele : document.getElementById(i.ele.id)).getBoundingClientRect()).top,
                                left: t.left,
                                bottom: t.bottom,
                                right: t.right,
                                width: t.width || t.right - t.left,
                                height: t.height || t.bottom - t.top
                            };
                            e.top <= n - 2 * e.height / 3 && 2 * e.height / 3 <= e.bottom && (i.triggerOne ? void 0 !== o && !o || (i.twoThirdShowEvent && i.twoThirdShowEvent(),
                                o = !1) : i.twoThirdShowEvent && i.twoThirdShowEvent()),
                                (n < e.top + e.height / 3 || e.bottom < e.height / 3) && (i.triggerOne ? void 0 !== o && o || (i.twoThirdHiddeEvent && i.twoThirdHiddeEvent(),
                                    o = !0) : i.twoThirdHiddeEvent && i.twoThirdHiddeEvent())
                        }
                        var o, n = window.innerHeight || document.documentElement.clientHeight;
                        r(),
                            document.removeEventListener("scroll", r, !1),
                            document.addEventListener("scroll", r, !1)
                    },
                    scrollSendStat: function (t, e) {
                        var i, r = this;
                        i = e,
                            r.scrollEventHandler({
                                ele: t,
                                twoThirdShowEvent: function () {
                                    r.sendUnionStat(r.getGAString(i.position_name, i.order_number, 1), r.addToken(i.event_show_url))
                                }
                            })
                    },
                    nativeDataAdapter: function (t, e) {
                        for (var i, r = !1, o = this, n = t.length, a = 0; a < n; a++) {
                            void 0 !== t[a].is_native && 1 === t[a].is_native && (r = !0,
                                i = e || t[a].position_name,
                                t[a].event_show_url = o.addToken(t[a].event_show_url),
                                t[a].event_click_url = o.addToken(t[a].event_click_url),
                                t[a].data_gtm_click = o.getGAString(i, t[a].native_orderno, null, t[a].region || t[a].region_name),
                                t[a].data_gtm_show = o.getGAString(i, t[a].native_orderno, 1, t[a].region || t[a].region_name),
                                o.hotEventSend(t[a].data_gtm_show))
                        }
                        return {
                            data: t,
                            isNative: r
                        }
                    },
                    hotEventSend: (J = function (e) {
                        try {
                            hotEventSend(e)
                        } catch (t) {
                            var i = e && e.split("_");
                            e && dataLayer.push({
                                event: "public_hot_event",
                                hot_event_1: i[0],
                                hot_event_2: i[1],
                                hot_event_3: i[2],
                                hot_event_4: i[3]
                            })
                        }
                    }
                        ,
                        Y.toString = function () {
                            return J.toString()
                        }
                        ,
                        Y),
                    sendUnionStat: function (t, e) {
                        var i, r, o, n;
                        t && this.hotEventSend(t),
                            e && "string" == typeof e && (-1 === e.indexOf("_u=") && (e = this.addToken(e)),
                                o = (i = e).replace(".dev", ".debug"),
                                "/stats/event/redirect" === (n = new URL(o)).pathname ? (o = o.replace("/stats/event/redirect", "/stats/event/redirect-v2"),
                                    r = f(n.search),
                                    U({
                                        url: o,
                                        params: r
                                    }).then(function (t) {
                                        var e = t.sigStr;
                                        (new Image).src = o + "&".concat(e)
                                    })) : (new Image).src = i)
                    },
                    createLink: function (t) {
                        var e = {
                            href: t.href || "javascript:;",
                            title: t.title || "",
                            target: t.target && !0,
                            attrName: t.attrName || "data-gtm-stat",
                            attrValue: t.attrValue || "UnionEvent_缺省_" + t.title,
                            attrHref: t.attrHref
                        }
                            , i = document.createElement("a");
                        return i.setAttribute(e.attrName, e.attrValue),
                            t.attrHref && i.setAttribute("data-href", e.attrHref),
                            i.href = e.href,
                            i.className = "union-wrap",
                            e.target && t.href && (i.target = "_blank"),
                            i
                    },
                    creatHTML: function (s) {
                        var c = this;
                        return new Promise(function (e, t) {
                            var i, r, o, n, a;
                            2 === s.pd_type ? e(K.call(c, s, s.txt)) : 4 === s.pd_type && (s.hls_video_url || s.youtube_url) ? (i = !s.hls_video_url && s.youtube_url,
                                r = s,
                                o = i,
                                new Promise(function (t, e) {
                                    var i;
                                    o ? t('<div class="ytbPlayer" id="ytbPlayer' + r.aid + '" data-aid="' + r.aid + '"></div>') : ((i = document.createElement("video")).src = r.hls_video_url,
                                        i.autoplay = !0,
                                        i.loop = !0,
                                        i.style = "background:url(" + r.img + ") 0% 0% / 100% 100% no-repeat",
                                        i.setAttribute("muted", "true"),
                                        i.id = "customVideo",
                                        i.onload = t(i),
                                        i.onerror = e(new Error("Could not load image at " + i.src)))
                                }
                                ).then(function (t) {
                                    e(K.call(c, s, t, !0, i))
                                })) : (n = {
                                    src: s.img
                                },
                                    a = {
                                        src: n.src || "",
                                        alt: n.alt || "",
                                        data: n.data || null
                                    },
                                    new Promise(function (t, e) {
                                        var i = new Image;
                                        i.onload = t(i),
                                            i.onerror = e(new Error("Could not load image at " + a.src)),
                                            i.src = a.src
                                    }
                                    ).then(function (t) {
                                        e(K.call(c, s, t, 41 === c.defaults.pid && s.txt))
                                    }))
                        }
                        )
                    },
                    createManyHTML: function (t, e, i, r) {
                        var o = function (t, e) {
                            for (var i = [], r = {}, o = 0, n = 0, a = t.length; n < a; n++) {
                                var s = t[n];
                                r.hasOwnProperty(s[e]) ? i[r[s[e]]].items.push(s) : (r[s[e]] = o++,
                                    i.push({
                                        name: s[e],
                                        items: [s]
                                    }))
                            }
                            return i
                        }(t, r || "row");
                        i && (o = this.shuffle(o));
                        for (var n = 0; n < o.length; n++) {
                            var a = o[n]
                                , s = a.name;
                            "saleListRight" !== i && "rentListRight" !== i || (s = n + 1);
                            var c = document.getElementById(e + s);
                            c && V.call(this, c, a.items)
                        }
                    },
                    signature: U
                }
        }(),
            __webpack_exports__
    }),
    define("setIdentity", ["utility"], function (require, exports, module) {
        function n() {
            var t = $.cookie("house_detail_stat") || "[]";
            return JSON.parse(t)
        }
        function a(t) {
            var e = t.length ? JSON.stringify(t) : null;
            $.cookie("house_detail_stat", e, {
                expires: 1,
                path: "/",
                domain: "591.com.tw"
            })
        }
        var s = require("utility").T591_TOKEN;
        return {
            setStat: function () {
                window.onmousedown = function (o) {
                    document.querySelectorAll("[house-detail-stat]").forEach(function (t) {
                        var e, i, r;
                        !t.contains(o.target) || 3 === (e = t.getAttribute("house-detail-stat").split("-")).length && (i = {
                            type: e[0],
                            resource: e[1],
                            post_id: e[2]
                        },
                            r = n().concat(i),
                            a(r))
                    })
                }
            },
            sendStat: function (e, t) {
                var i = n()
                    , r = i.find(function (t) {
                        return t.post_id === e
                    }) || {
                        type: t,
                        post_id: e,
                        resource: "15"
                    };
                $.post(HOST.statistics + "/ware/detail/visitSource", _objectSpread({
                    device: "pc",
                    mobile_id: s
                }, r), function () { });
                var o = i.filter(function (t) {
                    return t.post_id !== e
                });
                a(o)
            }
        }
    }),
    define("firebase", function (require, exports, module) {
        require("https://s.591.com.tw/widget/plugin/cookie.js");
        var e = -1 < location.host.search(".debug") ? "debug" : -1 < location.host.search(".dev") ? "dev" : ""
            , i = "fcm_pc_token"
            , r = document.querySelector(".accreditPop")
            , o = window.Notification ? Notification.permission : ""
            , n = {
                apiKey: "AIzaSyC5iOyQAjnQ_R7HG1VsEx_tNaHVak_m770",
                authDomain: "push-9d0cc.firebaseapp.com",
                databaseURL: "https://push-9d0cc.firebaseio.com",
                projectId: "push-9d0cc",
                storageBucket: "push-9d0cc.appspot.com",
                messagingSenderId: "112034126422",
                appId: "1:112034126422:web:6683eff9796eaa4b9739f7"
            }
            , a = "BI1DQaKo4XXLaCL_YhSaks4nYhSb1em3FIXJjCwmfOR3J5ySYKqCiI72bibZIizGNkC-pCzonPqIi6WrhZHM9jA";
        function s() {
            t("https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js").then(function () {
                t("https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js").then(function () {
                    navigator.serviceWorker.register("/firebase-messaging-sw.js?v=20230322").then(function (t) {
                        firebase.initializeApp(n),
                            firebase.messaging().getToken({
                                vapidKey: a,
                                serviceWorkerRegistration: t
                            }).then(function (t) {
                                t ? (function (t) {
                                    if ($.cookie(i) === t)
                                        return;
                                    $.cookie(i, t, {
                                        expires: 365,
                                        path: "/",
                                        domain: ".591.com.tw"
                                    }),
                                        $.post("/home/data/bindUserDeviceToken", {
                                            device: "pc",
                                            privacy_agree: "default" === o ? 1 : "",
                                            fcm_token: t
                                        }).then(function (t) {
                                            1 === t.status && $.cookie("tw591__privacy_agree", "1", {
                                                expires: 365,
                                                path: "/",
                                                domain: "591.com.tw"
                                            })
                                        })
                                }(t),
                                    r && (r.style.display = "none")) : console.log("沒有可用的註冊令牌，請求權限來生成一個")
                            }).catch(function (t) {
                                console.log("error", t)
                            })
                    }).catch(function (t) {
                        console.log("register error", t)
                    })
                })
            })
        }
        function t(r) {
            return new Promise(function (e, i) {
                var t = document.createElement("script");
                t.src = r,
                    t.onload = function (t) {
                        e(t)
                    }
                    ,
                    t.onerror = function (t) {
                        i(t)
                    }
                    ,
                    document.body.appendChild(t)
            }
            )
        }
        module.exports = {
            init: function () {
                "serviceWorker" in navigator && "http:" !== location.protocol && function () {
                    var t = window.Notification && Notification.permission;
                    if ("denied" === t)
                        return;
                    if ("default" === t)
                        return r && (r.style.display = "block",
                            document.querySelector(".accreditPop > a").onclick = function () {
                                r.style.display = "none"
                            }
                        ),
                            Notification.requestPermission().then(function (t) {
                                "denied" !== t ? s() : console.log("用戶拒絕授權通知")
                            }).catch(function (t) {
                                console.log("獲取權限失敗", t)
                            }),
                            function () {
                                var t = document.createElement("iframe")
                                    , i = 0
                                    , r = !0;
                                t.src = "https://www." + e + "591.com.tw/home/index/localStorage?type=syncNotification",
                                    t.style.display = "none",
                                    document.body.appendChild(t),
                                    window.addEventListener("message", function (t) {
                                        var e = t.data;
                                        "syncNotification" === e.type && location.hostname !== e.hostname && (i++,
                                            "granted" === e.permission && (r = !1),
                                            6 === i && r && s())
                                    })
                            }();
                    "granted" === t && s()
                }()
            }
        }
    }),
    define("_recordWidget", function (require, exports, module) {
        var a;
        (a = jQuery).fn.recordWidget = function (t) {
            var n = {
                loginPopup: '<div class="record-pop-first"><span class="record-pop-success">收藏成功!</span><a href="/user-login.html" target="_blank" class="record-pop-more">查看更多</a></div>',
                notLoginPopup: '<div class="record-pop-first"><span class="record-pop-success">收藏成功!</span><a href="/user-login.html" target="_blank" class="record-pop-more">查看更多</a></div><div class="record-pop-second">該收藏僅在本設備保存，登入后可同步登入賬號永久保存</div><div class="record-pop-third"><a href="/user-login.html" class="record-pop-login">立即登入</a><div class="record-pop-stay">繼續瀏覽物件</div></div>',
                loginPopup_width: "480px",
                loginPopup_height: "160px",
                notLoginPopup_width: "480px",
                notLoginPopup_height: "230px",
                collect: null,
                callback: null
            };
            return t && a.extend(n, t),
                this.each(function () {
                    a(this).on("click", ".shoucang a", function (t) {
                        a(this).attr("data-bind");
                        var e = a(this).attr("data-colle")
                            , i = o(this)
                            , r = a("#base_url").val() + "/index.php";
                        null != n.callback && n.callback(),
                            "0" == e ? (n.collect.addColle(i),
                                a.ajax({
                                    type: "GET",
                                    dataType: "json",
                                    url: r,
                                    data: "module=user&action=userAuth",
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    success: function (t) {
                                        var e;
                                        0 == t.is_login ? (e = n.notLoginPopup,
                                            a.popbox({
                                                id: "j_popbox_colle",
                                                title: "溫馨提示",
                                                size: {
                                                    width: n.notLoginPopup_width,
                                                    height: n.notLoginPopup_height
                                                },
                                                type: "html",
                                                content: e,
                                                shade: !0
                                            }),
                                            a(document).on("click", ".record-pop-stay", function () {
                                                a.popbox.close("j_popbox_colle")
                                            })) : (e = n.loginPopup,
                                                a.popbox({
                                                    id: "j_popbox_colle",
                                                    title: "溫馨提示",
                                                    size: {
                                                        width: n.loginPopup_width,
                                                        height: n.loginPopup_height
                                                    },
                                                    type: "html",
                                                    content: e,
                                                    shade: !0
                                                }))
                                    }
                                })) : "1" == e && (n.collect.cancelColle(i.id),
                                    a.ajax({
                                        type: "GET",
                                        dataType: "json",
                                        url: "/index.php",
                                        data: "module=user&action=userAuth",
                                        xhrFields: {
                                            withCredentials: !0
                                        },
                                        success: function (t) {
                                            t.is_login,
                                                t.is_login
                                        }
                                    }))
                    });
                    var o = function (t) {
                        var e = (new Date).getTime();
                        return {
                            time: e = parseInt(e / 1e3) + "",
                            id: a(t).attr("data-text"),
                            type: a(t).attr("data-bind"),
                            act: "1" == a(t).attr("data-colle") ? "cancel" : "collection",
                            isBusiness: "0"
                        }
                    }
                })
        }
    }),
    define("uploadTemplate", ["template", "roll", "photoScroll", "utility"], function (require, exports, module) {
        var l = require("template");
        require("roll"),
            require("photoScroll");
        var d, h = UNION_SHOW(), t = require("utility"), u = t.isNewBusinessPage, p = t.getNewBusinessPageUrl;
        (d = jQuery).fn.uploadTemplate = function (t, s) {
            var c = {
                ajax_url: null,
                templateId: null,
                scroll: !1,
                scrollOption: null,
                addParam: null,
                isNative: !1,
                callback: null
            };
            return t && d.extend(c, t),
                this.each(function () {
                    var a = d(this)
                        , o = a.attr("data-id");
                    a.roll({
                        threshold: 500,
                        showCallBack: function () {
                            var e, t = "", n = "", t = c.ajax_url ? a.attr("data-url") : d("#template_" + o).attr("data-src"), n = c.templateId ? c.templateId : "template_" + o, i = a.addClass("loading").attr("data-param");
                            function r(t) {
                                c.addParam && (t.addParam = c.addParam);
                                var e = c.isNative ? function (t) {
                                    for (var e = !1, i = t.length, r = 0; r < i; r++)
                                        void 0 !== t[r].is_native && 1 === t[r].is_native && (e = !0,
                                            t[r].event_show_url = h.addToken(t[r].event_show_url),
                                            t[r].event_click_url = h.addToken(t[r].event_click_url),
                                            t[r].data_gtm_click = h.getGAString("首頁推薦建案", t[r].native_orderno, null, t[r].region_name),
                                            t[r].data_gtm_show = h.getGAString("首頁推薦建案", t[r].native_orderno, 1, t[r].region_name),
                                            h.hotEventSend(t[r].data_gtm_show));
                                    return {
                                        data: t,
                                        isNative: e
                                    }
                                }(t.data) : t
                                    , i = l(n, e)
                                    , r = d(i).find(".union-stat-link").data("stat-show");
                                h.sendUnionStat(null, r);
                                var o = a.html(i).removeClass("loading");
                                c.isNative && e.isNative && d.each(d(".unionNative"), function (t, e) {
                                    var i = d(e)
                                        , r = i.attr("data-gtm-show")
                                        , o = i.find(".eventShowUrl").attr("src")
                                        , n = i.find(".union-stat-link").data("stat-show");
                                    h.scrollEventHandler({
                                        ele: document.getElementById(i.attr("id")),
                                        twoThirdShowEvent: function () {
                                            var t, e;
                                            t = r,
                                                e = o || n,
                                                h.sendUnionStat(t, e)
                                        }
                                    })
                                }),
                                    a.find(".newbuild-name strong").each(function (t, e) {
                                        var i = d(this).html()
                                            , r = null;
                                        -1 < i.indexOf("碧") && (r = i.replace("碧", '<span style="font-weight:  500">碧</span>'),
                                            d(this).html(r))
                                    }),
                                    c.scroll && o.photoScroll(c.scrollOption),
                                    !d.isEmptyObject(t.data) && c.callback && c.callback(t.data)
                            }
                            s ? r(s) : (e = function (t) {
                                r(t)
                            }
                                ,
                                i = i ? {
                                    type: i
                                } : "",
                                d.post(t, i, function (t) {
                                    t.data.forEach(function (t) {
                                        1 == +t.type ? t.link = u(+t.kind_origin) ? p(1, t.houseId) : "".concat(HOST.rent, "/rent-detail-").concat(t.houseId, ".html") : 2 == +t.type && (t.link = u(+t.kind_origin) ? p(2, t.houseId) : "".concat(HOST.sale, "/home/house/detail/2/").concat(t.houseId, ".html"))
                                    }),
                                        e && e(t)
                                }))
                        }
                    })
                })
        }
    }),
    define("_latestActivities", ["photoScroll", "utility"], function (require, exports, module) {
        require("photoScroll");
        var o = require("utility").observer
            , n = UNION_SHOW();
        new Vue({
            data: {
                list: []
            },
            methods: {
                stat: function () {
                    var r = this;
                    $.each($(".activities-item"), function (t, e) {
                        var i = r.list[t].union_events ? r.list[t].union_events.roster.type.index_preferential_new.event_show_url : "";
                        i && o(e, function () {
                            n.sendUnionStat(null, i)
                        })
                    })
                }
            },
            mounted: function () {
                var e = this;
                $.get(HOST.union + "/roster/preferential-build?device=pc&regionid=" + $.cookie("urlJumpIp") + "&type=48", function (t) {
                    t.status && (e.list = t.data),
                        4 <= e.list.length && ($("#anchor_latestActivities").show(),
                            setTimeout(function () {
                                $("#latestActivities_unknow").photoScroll({
                                    ajax_url: null,
                                    templateId: null,
                                    scroll: !1,
                                    scrollOption: null,
                                    addParam: null,
                                    isNative: !1,
                                    callback: null,
                                    number: 4
                                }),
                                    e.stat()
                            }))
                })
            }
        }).$mount("#template_latestActivities")
    }),
    define("_record", ["template"], function (require, exports, module) {
        module.exports = function (o) {
            if (void 0 === o)
                throw new Error("Record need a config object");
            if (void 0 !== o.width && $(".record-body").width(o.width),
                o.title,
                void 0 !== o.type && ("history" == o.type ? $(".record-bottom").text("清空瀏覽歷史記錄") : "collection" == o.type && $(".record-colle-bottom").text("登入查看所有收藏")),
                void 0 === o.listName)
                throw new Error("you need a listName");
            function r() {
                $(".record-list").empty()
            }
            function n(t) {
                var e = v();
                for (x in e.arr)
                    e.arr[x].id == t && e.arr.splice(x, 1);
                y(e),
                    g("set")
            }
            function a(t) {
                var e = v()
                    , i = (new Date).getTime()
                    , i = parseInt(i / 1e3) + "";
                for (x in e.arr)
                    e.arr[x].id == t && (e.arr[x].act = "cancel",
                        e.arr[x].time = i);
                y(e),
                    h(t),
                    g("set")
            }
            function e(t) {
                var e = ""
                    , i = {
                        arr: []
                    };
                if ("rent" == t) {
                    (e = v()).arr.length;
                    for (x in e.arr)
                        "1" == e.arr[x].type && "collection" == e.arr[x].act && i.arr.push(e.arr[x])
                } else if ("sale" == t) {
                    (e = v()).arr.length;
                    for (x in e.arr)
                        "2" == e.arr[x].type && "collection" == e.arr[x].act && i.arr.push(e.arr[x])
                } else if ("newhouse" == t) {
                    (e = v()).arr.length;
                    for (x in e.arr)
                        "8" == e.arr[x].type && "collection" == e.arr[x].act && i.arr.push(e.arr[x])
                } else if ("business" == t) {
                    (e = v()).arr.length;
                    for (x in e.arr)
                        "1" == e.arr[x].isBusiness && "collection" == e.arr[x].act && i.arr.push(e.arr[x])
                }
                var r = u(i);
                p(r, t)
            }
            function s() {
                var t = $(".record-body")
                    , e = "-" + o.width + "px";
                t.removeAttr("data-type").animate({
                    right: e
                }, function () {
                    t.hide(),
                        r()
                })
            }
            function i() {
                var t = $(".record-body");
                o.width,
                    t.show(),
                    t.attr("data-type", o.type).animate({
                        right: "0"
                    }, 300, function () {
                        t.show()
                    })
            }
            function c() {
                $(".record-container").hide(),
                    $(".record-empty").show(),
                    $(".record-empty-close").bind("click", function () {
                        s(),
                            $(".newFiexdSide").animate({
                                right: "0"
                            }, function () {
                                $("#backOld_wrap").show()
                            })
                    })
            }
            var l = o.listName
                , d = require("template")
                , h = function (t) {
                    var e = v()
                        , i = 0;
                    for (x in e.arr)
                        if (t == e.arr[x].id && "collection" == e.arr[x].act) {
                            $(".shoucang a[data-text=" + t + "][data-bind=" + e.arr[x].type + "]").parent().addClass("isShoucang"),
                                $(".shoucang a[data-text=" + t + "][data-bind=" + e.arr[x].type + "]").attr("data-colle", "1"),
                                i = 1;
                            break
                        }
                    0 == i && ($(".shoucang a[data-text=" + t + "]").parent().removeClass("isShoucang"),
                        $(".shoucang a[data-text=" + t + "]").attr("data-colle", "0"))
                }
                , u = function (t) {
                    void 0 === t && (t = v());
                    var e = $("#hid_type").val()
                        , i = ""
                        , r = "";
                    for (x in "1" == e ? i = "R" : "2" == e ? i = "S" : "8" == e ? i = "H" : "6" == e && (i = "D"),
                        t && t.arr && 20 < t.arr.length && (t.arr = t.arr.slice(0, 20)),
                        t.arr) {
                        if (18 < x)
                            break;
                        r = r + ("1" == t.arr[x].type ? "R" : "2" == t.arr[x].type ? "S" : "8" == t.arr[x].type ? "H" : "6" == t.arr[x].type ? "D" : i) + t.arr[x].id,
                            x < t.arr.length - 1 && (r += ",")
                    }
                    return r
                }
                , p = function (t, e) {
                    var i;
                    void 0 === t && (t = u()),
                        i = "newhouse" == e ? "/home/housing/wareBaseInfo?ware_ids=" + t : "/home/house/wareBaseInfo?ware_ids=" + t,
                        $.get(i, function (t) {
                            f(t, e)
                        }, "json")
                }
                , f = function (t) {
                    if (r(),
                        t.data.length < 1 && "history" == o.type)
                        return c(),
                            void $(".record-colle-empty").hide();
                    if (t.data.length < 1 && "collection" == o.type)
                        return $(".record-list").hide(),
                            $(".record-colle-bottom").hide(),
                            $(".record-colle-empty").show(),
                            $(".colle-empty-close").bind("click", function () {
                                s(),
                                    $(".newFiexdSide").animate({
                                        right: "0"
                                    }, function () {
                                        $("#backOld_wrap").show()
                                    })
                            }),
                            void $(".record-empty").hide();
                    $(".record-container").show(),
                        $(".record-list").show(),
                        $(".record-empty").hide(),
                        $(".record-colle-empty").hide(),
                        "collection" == o.type && $(".record-colle-bottom").show();
                    var e, i = "";
                    "history" === o.type && (i += '<p style="font-size: 12px; color: #999; margin: 0 0 10px 10px;">暫不顯示新建案的瀏覽記錄</p>'),
                        i += d("historyListTpl", t),
                        document.getElementById("record-list").innerHTML = i,
                        "history" == o.type && $(".record-list-colle").hide(),
                        $(".record-list-a").bind("click", function (t) {
                            var e = (new Date).getTime()
                                , i = $(this).attr("data-id")
                                , r = v();
                            for (x in r.arr)
                                r.arr[x].id == i && (r.arr[x].time = e);
                            m(r.arr),
                                y(r),
                                "history" == o.type && p()
                        }),
                        "history" == o.type ? $(".record-list-del").bind("click", function (t) {
                            t.stopPropagation(),
                                t.preventDefault();
                            var e = $(this).attr("data-id");
                            n(e),
                                $(this).parent().hide()
                        }) : "collection" == o.type && $(".record-list-del").bind("click", function (t) {
                            t.stopPropagation(),
                                t.preventDefault();
                            var e = $(this).attr("data-id");
                            a(e),
                                $(this).parent().hide()
                        }),
                        $(".record-list-colle").on("click", function (t) {
                            t.stopPropagation(),
                                t.preventDefault();
                            var e = $(this).attr("data-id");
                            a(e),
                                $(this).parent().parent().hide()
                        }),
                        $(".record-bottom").bind("click", function () {
                            r(),
                                localStorage.setItem(l, ""),
                                c()
                        }),
                        e = $(".record-list").offset().top + $(".record-list").height() - $(window).scrollTop(),
                        $(window).height() < e ? $(".record-bottom").addClass("fixed-bottom") : $(".record-bottom").removeClass("fixed-bottom")
                }
                , m = function (t) {
                    t.sort(function (t, e) {
                        return e.time - t.time
                    })
                }
                , y = function (t) {
                    var e = JSON.stringify(t);
                    localStorage.setItem(l, e)
                }
                , v = function () {
                    var t = localStorage.getItem(l);
                    return t = void 0 === t || "" == t || null == t || "null" == t ? {
                        arr: []
                    } : JSON.parse(t)
                }
                , _ = function (t) {
                    var e = v().arr;
                    for (x in e)
                        if (e[x].id == t)
                            return !0;
                    return !1
                }
                , g = function (t) {
                    var e, i, r = localStorage.getItem(l);
                    0 < $("#cIframe").length ? i = (e = $("#cIframe")).attr("src") : (e = $('<iframe id="cIframe" frameborder="0" style="display:none;"></iframe>'),
                        i = "https:" + HOST.www + "/home/index/localStorage",
                        e.attr("src", i),
                        $("body").append(e));
                    var o = {
                        list: l,
                        method: t,
                        data: r
                    };
                    setTimeout(function () {
                        e[0].contentWindow.postMessage(o, i)
                    }, 1e3)
                };
            return window.addEventListener && window.addEventListener("message", function (t) {
                t.data.list == l && localStorage.setItem(l, t.data.data)
            }),
            {
                init: function () {
                    $(".record-close").bind("click", function () {
                        s(),
                            $(".newFiexdSide").animate({
                                right: "0"
                            }, function () {
                                $("#backOld_wrap").show(),
                                    $(".diamonds").show()
                            })
                    }),
                        $(document).on("click", function (t) {
                            0 == $(t.target).parents(".record-body").length && 0 == $(t.target).parents(".newFiexdSide").length && (s(),
                                $(".newFiexdSide").animate({
                                    right: "0"
                                }, function () {
                                    $("#backOld_wrap").show(),
                                        $(".diamonds").show()
                                }))
                        }),
                        $(".newFiexdSide ." + o.listName).bind("click", function () {
                            var t;
                            $(".record-title").text(o.title),
                                "none" == $(".record-body").css("display") || $(".record-body").attr("data-type") != o.type ? (i(),
                                    t = o.width + "px",
                                    $(".newFiexdSide").animate({
                                        right: t
                                    }, 300),
                                    $("#backOld_wrap").hide(),
                                    $(".diamonds").hide(),
                                    "collection" == o.type ? ($(".record-tab-item").removeClass("record-tab-on"),
                                        $(".record-tab-rent").addClass("record-tab-on"),
                                        e("rent")) : "history" == o.type && p()) : (s(),
                                            $(".newFiexdSide").animate({
                                                right: "0"
                                            }, function () {
                                                $("#backOld_wrap").show(),
                                                    $(".diamonds").show()
                                            })),
                                "collection" == o.type ? ($(".record-tab").show(),
                                    $(".record-bottom").hide(),
                                    $(".record-colle-bottom").show()) : "history" == o.type && ($(".record-tab").hide(),
                                        $(".record-bottom").show(),
                                        $(".record-colle-bottom").hide())
                        }),
                        "collection" == o.type && ($(".record-tab-rent").on("click", function () {
                            e("rent"),
                                $(".record-tab-item").removeClass("record-tab-on"),
                                $(this).addClass("record-tab-on")
                        }),
                            $(".record-tab-sale").on("click", function () {
                                e("sale"),
                                    $(".record-tab-item").removeClass("record-tab-on"),
                                    $(this).addClass("record-tab-on")
                            }),
                            $(".record-tab-business").on("click", function () {
                                e("business"),
                                    $(".record-tab-item").removeClass("record-tab-on"),
                                    $(this).addClass("record-tab-on")
                            }),
                            $(".record-tab-newhouse").on("click", function () {
                                e("newhouse"),
                                    $(".record-tab-item").removeClass("record-tab-on"),
                                    $(this).addClass("record-tab-on")
                            }))
                },
                addItem: function (t) {
                    !function (t) {
                        var e = v();
                        if (_(t.id))
                            for (x in e.arr)
                                e.arr[x].id == t.id && e.arr.splice(x, 1);
                        e.arr.push(t),
                            m(e.arr),
                            y(e),
                            g("set")
                    }(t)
                },
                delItem: function (t) {
                    n(t)
                },
                emptyList: function () {
                    r(),
                        localStorage.setItem(l, "")
                },
                showList: function () {
                    i()
                },
                addColle: function (t) {
                    !function (t) {
                        var e = v();
                        if (_(t.id))
                            for (x in e.arr)
                                e.arr[x].id == t.id && e.arr.splice(x, 1);
                        e.arr.push(t),
                            m(e.arr),
                            y(e),
                            h(t.id),
                            g("set")
                    }(t)
                },
                cancelColle: function (t) {
                    a(t)
                },
                heartShow: function (t) {
                    !function (t) {
                        if (Array.isArray(t))
                            for (x in t)
                                t[x].hid ? h(t[x].hid) : t[x].houseId ? h(t[x].houseId) : h(t[x].post_id);
                        else
                            h(t)
                    }(t)
                },
                changeHeart: function (t) {
                    h(t)
                },
                postData: function () {
                    g()
                }
            }
        }
    }),
    define("_trackBid", function (require, exports, module) {
        [{
            id: "#vue-search",
            bid: "3164"
        }, {
            id: "#guessLove",
            bid: "3165"
        }, {
            id: "#anchor_hot",
            bid: "3166"
        }, {
            id: "#anchor_hot_sale",
            bid: "3166"
        }, {
            id: "#anchor_recomsale",
            bid: "3167"
        }, {
            id: "#anchor_recomunkonw",
            bid: "3167"
        }, {
            id: "#anchor_opens",
            bid: "3168"
        }, {
            id: "#anchor_open",
            bid: "3168"
        }, {
            id: "#anchor_theme",
            bid: "3169"
        }].forEach(function (t) {
            return e = t.id,
                i = t.bid,
                void (0 !== $(e).length && 0 < $(e).length && $(e).on("click", "a", function (t) {
                    var e = decodeURIComponent($.trim($(this).attr("href")));
                    e.includes("/home/housing/detail") && (t.preventDefault ? t.preventDefault() : window.event.returnValue = !0,
                        e.includes("591.com.tw/stats/event/redirect") ? e = $.trim($(this).attr("href")).replace(/(url=[^&]+)/gi, "$1" + encodeURIComponent("&bid=" + i)) : e += "&bid=".concat(i),
                        "_blank" === $(this).attr("target") ? window.open(e) : window.location.href = e)
                }));
            var e, i
        })
    }),
    define("_forLove", ["cookie", "UNION"], function (require, exports, module) {
        require("cookie"),
            require("UNION"),
            UNION_SHOW({
                pid: 107,
                regionid: $.cookie("urlJumpIp") || 1,
                callback: function (t) {
                    if (t && t.length) {
                        if (localStorage.getItem("tw591_act-".concat(t[0].aid)))
                            return;
                        var i, e = setInterval(function () {
                            0 == +$("#area-select-region-id").val() && i && (clearInterval(e),
                                $(".for-love").css("display", "flex"),
                                $(".for-love").click(function () {
                                    $(".for-love").css("display", "none"),
                                        localStorage.setItem("tw591_act-".concat(t[0].aid), 1)
                                }))
                        }, 200), r = setInterval(function () {
                            var t, e = $("#UNION_107 a > img");
                            e.length && ((t = new Image).src = e.attr("src"),
                                t.onload = function () {
                                    i = !0,
                                        $(".for-love-close").css("display", "inline-block")
                                }
                                ,
                                clearInterval(r))
                        }, 50)
                    }
                }
            })
    }),
    define("_fixedBtAd", ["cookie", "UNION"], function (require, exports, module) {
        require("cookie"),
            require("UNION");
        var t = parseInt($(".fixedBottomBanner .bannerBox").attr("data-id"))
            , e = Date.parse(new Date)
            , i = $.cookie("urlJumpIp") || 1;
        (!$.cookie("adFixedCloseTime") || e > parseInt($.cookie("adFixedCloseTime")) + 72e5) && (UNION_SHOW({
            pid: t,
            regionid: i,
            callback: function (t) {
                0 < t.length && $(".fixedBottomBanner").show()
            }
        }),
            $("#bannerClose").on("click", function () {
                $.cookie("adFixedCloseTime", e, {
                    expires: 1,
                    path: "/",
                    domain: "591.com.tw"
                }),
                    $(".fixedBottomBanner").hide()
            }))
    }),
    define("_focus", ["UNION"], function (require, exports, module) {
        require("UNION");
        "1" !== $("#hid_role").val() && UNION_SHOW({
            pid: 40,
            isCreatImg: !1,
            callback: function (t) {
                if (0 === t.length)
                    return $("#subjects").hide(),
                        !1;
                var e;
                $("#subjects").height("140"),
                    this.createManyHTML(t, "union_"),
                    e = $(".indexFocus_wrap"),
                    $(window).on("load", function () {
                        e.addClass("ready indexFocus_state_0")
                    }),
                    $(".indexFocus_item").on("mouseover", function () {
                        var t = $(".indexFocus_item").index($(this));
                        e.removeClass().addClass("indexFocus_wrap indexFocus_state_" + (t + 1))
                    }).on("mouseout", function () {
                        e.removeClass().addClass("indexFocus_wrap indexFocus_state_0")
                    })
            }
        })
    }),
    define("_search", ["UNION", "areaBoxNew", "utility", "template", "localStorage", "_vueSearchList", "_vueMarketSearch", "_vueSaleSearch", "index_gulp-seajs-cmobo_32"], function (require, exports, module) {
        require("UNION"),
            require("areaBoxNew");
        var r, n, t = require("utility").observer, c = require("template"), e = require("localStorage"), a = require("_vueSearchList"), s = require("_vueMarketSearch"), l = require("_vueSaleSearch"), d = require("index_gulp-seajs-cmobo_32");
        function i(t) {
            e.init.call(this, t)
        }
        for (var o in e)
            "init" !== o && "function" == typeof e[o] && (i.prototype[o] = e[o]);
        i.prototype.del = function (i, r) {
            var o = this.getData();
            o.forEach(function (t, e) {
                t[i] === r && o.splice(e, 1)
            }),
                this.item(this._storeName, JSON.stringify(o))
        }
            ;
        var h = UNION_SHOW();
        function u() {
            hotEventSend && hotEventSend(h.getGAString(n.position_name, n.order_number)),
                window.open(n.event_click_url)
        }
        function p() {
            var t;
            n = h.shuffle(r)[0],
                S[8] = n.txt,
                8 == +O && (t = n,
                    h.sendUnionStat(h.getGAString(t.position_name, t.order_number, 1), h.addToken(t.event_show_url)),
                    E.input.attr("placeholder", n.txt))
        }
        UNION_SHOW({
            pid: 102,
            isCreatImg: !1,
            callback: function (t) {
                t && t.length && (r = t,
                    p())
            }
        });
        var f, m, y = $("#hid_rentUrl").val(), v = $("#hid_saleUrl").val(), _ = $("#hid_newhouseUrl").val(), g = $("#hid_marketUrl").val(), b = "/home/search/keywordsMatch", w = {
            expires: 30,
            path: "/",
            domain: "591.com.tw"
        }, S = {
            1: "請輸入關鍵字（社區名，街道名，捷運名稱等）",
            2: "請輸入社區/街道名稱搜尋",
            8: "請輸入建案名、縣市、鄉鎮",
            9: "請輸入社區名或街道",
            12: "您想住在哪裡？"
        }, k = {
            1: "搜尋按鈕_租屋",
            2: "搜尋按鈕_中古屋",
            8: "搜尋按鈕_新建案",
            9: "搜尋按鈕_實價登錄",
            12: "搜尋按鈕_高檔住宅"
        }, x = $("#hid_crole").val(), E = {
            doc: $(document),
            wrap: $(".auto-container"),
            city: $(".auto-city"),
            tag: $(".auto-type-tab"),
            triangle: $(".auto-search-traingle"),
            clearInputBtn: $(".auto-search-clear"),
            searchBtn: $(".auto-search-btn"),
            input: $(".auto-search-input"),
            listWrap: $("#auto-list-wrap"),
            searchList: $("#auto-dropdown"),
            historyList: $("#auto-history")
        }, H = $.cookie("urlJumpIp"), C = H in {
            1: 1,
            3: 1,
            6: 1,
            8: 1,
            15: 1,
            17: 1
        }, A = 0, T = "", I = "", R = "", O = $("#search_select").val(), L = (f = {
            1: new i({
                maxlen: 10,
                storageType: "localStorage",
                storeName: "rentLocalStorage",
                uniqueType: 4
            }),
            2: new i({
                maxlen: 10,
                storageType: "localStorage",
                storeName: "saleLocalStorage",
                uniqueType: 4
            }),
            8: new i({
                maxlen: 10,
                storageType: "localStorage",
                storeName: "searchHistory",
                uniqueType: 4
            })
        },
            function () {
                return f[O] || f[1]
            }
        ), N = function (t) {
            return "[object Undefined]" !== Object.prototype.toString.call(t) ? E.input.val(t) : $.trim(E.input.val())
        }, B = !1;
        function D() {
            var s = {
                q: N()
            }
                , t = b;
            s.r = H,
                s.t = O,
                $.get(t, s, function (t) {
                    var e, i, r, o, n, a = "8" == O ? 2 : 1;
                    if (t.status !== a)
                        return E.searchList.empty().hide(),
                            void E.historyList.empty().hide();
                    (e = "8" == O ? t.data.items : t.data).length && (i = e,
                        r = s.q,
                        o = "8" == O ? "newSearchKeywords" : "searchKeywords",
                        n = [],
                        i.forEach(function (t) {
                            var e = {}
                                , e = "8" == O ? {
                                    id: t.id,
                                    price: t.price,
                                    region: t.region,
                                    section: t.section,
                                    value: t.name,
                                    name: t.name.replace(r, "<em>" + r + "</em>")
                                } : {
                                    kind: t.kind,
                                    num: t.num,
                                    tips: t.tips,
                                    value: t.title,
                                    title: t.title.replace(r, "<em>" + r + "</em>")
                                };
                            n.push(e)
                        }),
                        E.searchList.html(c(o, {
                            data: n
                        })).show().find(".auto-rs-click").eq(0).addClass("select"),
                        j(),
                        E.historyList.hide(),
                        P())
                }, "json")
        }
        function W() {
            var t, e = L().getData(), i = $("#hid_favNum").val(), r = $("#hid_role_search").val(), o = {
                1: "租屋",
                2: "中古屋",
                8: "新建案"
            };
            0 !== e.length && ((0 < i && "company" != r && "medium" != r || localStorage.getItem("collectionList") && JSON.parse(localStorage.getItem("collectionList")).arr.length) && ga("send", "event", "我的收藏", "出現次數", o[O]),
                E.historyList.html(c("searchHistory", {
                    data: e,
                    typeName: "點擊次數_" + o[O]
                })).show(),
                j(),
                E.searchList.hide(),
                (t = localStorage.getItem("collectionList")) && 0 != JSON.parse(t).arr.length ? (t = JSON.parse(t),
                    $(".j-search-logOut-favWareList").html('<i class="auto-colle-icon"></i>我的收藏（共' + t.arr.length + "筆）")) : $(".j-search-logOut-favWareList").hide())
        }
        function j() {
            var t = E.searchList.is(":visible")
                , e = t && "8" == O ? "newSelect" : "select";
            $(t ? ".auto-drop-words" : ".auto-dropdown-item").on("mouseover", function (t) {
                $(this).addClass(e).siblings().removeClass(e),
                    P()
            }),
                t || (E.historyList.find(".auto-dropdown-clear").on("mouseover", function (t) {
                    E.historyList.find(".select").removeClass("select")
                }),
                    E.historyList.find(".auto-dropdown-colle").on("mouseover", function (t) {
                        E.historyList.find(".select").removeClass("select")
                    }))
        }
        function P() {
            var t, e, i;
            "8" != O && (t = E.searchList.find('[id^="auto-advanced"]'),
                i = (e = E.searchList.find(".select")).find('[id^="auto-advanced"]'),
                e.length ? (i.html() || i.html(c("advancedKeywords", {
                    type: O,
                    opt: e.data("kind"),
                    isLiudu: C
                })),
                    t.hide(),
                    i.show(),
                    E.searchList.addClass("advanced")) : (t.hide(),
                        E.searchList.removeClass("advanced")))
        }
        function M() {
            N() ? E.clearInputBtn.show() : E.clearInputBtn.hide()
        }
        function F(t, e) {
            var i, r, o, n, a, s, c = "";
            switch (t = t || {
                9: "market",
                8: "newHouse-list",
                2: "sale",
                1: "rent"
            }[O]) {
                case "rent":
                    for (var l in c += y + "/?",
                        e)
                        e[l] && ("?" !== c.charAt(c.length - 1) && (c += "&"),
                            c += l,
                            c += "=",
                            c += e[l]);
                    break;
                case "sale":
                    c += v,
                        c += "/house-rentSale-",
                        c += H,
                        c += ".html?search_type=kind,price,pattern&search_val=",
                        c += (e.kind || 0) + ",",
                        c += (e.price || 0) + ",",
                        c += e.pattern || 0,
                        c += "&keywords=",
                        c += e.keywords;
                    break;
                case "newHouse-list":
                    c += _,
                        c += "/housing-list.html?&keyword=",
                        c += encodeURIComponent(e.keywords),
                        $.cookie("phone_track_bid") || $.cookie("phone_track_bid", 3164, {
                            path: "/",
                            domain: "591.com.tw"
                        });
                    break;
                case "newHouse-detail":
                    c += _,
                        c += "/home/housing/detail?hid=",
                        c += e.id,
                        c += "&bid=3164";
                    break;
                case "market":
                    c += g,
                        e.keywords && (c += "?keywords=",
                            c += encodeURIComponent(e.keywords))
            }
            "market" !== t && (i = e.keywords,
                r = L().getData(),
                o = !1,
                i && (r.forEach(function (t) {
                    t.keywords === i && (o = !0)
                }),
                    o || L().save({
                        keywords: i
                    }))),
                n = L().getData().length ? 1 : 0,
                a = E.searchList.is("visible") ? 1 : 0,
                s = JSON.stringify({
                    role: $("#hid_crole").val(),
                    type: O,
                    keyword: T || N(),
                    selectKeyword: I || "",
                    menu: R || "",
                    hasHistory: n,
                    hasPrompt: a,
                    history: A
                }),
                $.cookie("index_keyword_search_analysis", s, w),
                window.location.href = c
        }
        function U(t) {
            return t ? t.target : window.event ? window.event.srcElement : null
        }
        c.isEscape = !1,
            function () {
                if (8 == +O)
                    return;
                var t = L().getData()[0];
                t && N(t.keywords)
            }(),
            M(),
            E.doc.on("click", function (t) {
                var e = $(U(t));
                0 != e.parents(".auto-city").length || e.hasClass(".auto-city") || (E.city.find(".searchAreabox").hide(),
                    E.city.removeClass("active")),
                    0 !== e.parents("#auto-list-wrap").length || "auto-list-wrap" === e.attr("id") || e.hasClass("auto-search-input") || (E.searchList.hide(),
                        E.historyList.hide())
            }),
            E.city.areabox({
                style: "searchAreabox",
                event: "click",
                callback: function (t) {
                    E.city.find("span em").text(t.text()),
                        $.post("//" + location.hostname + "/home/data/regionClick?cr=" + $.cookie("urlJumpIp") + "&r=" + t.data("id")),
                        $.cookie("urlJumpIp", t.data("id"), w),
                        window.location.reload()
                }
            }),
            E.tag.on("mouseover", function (t) {
                var e = $(this)
                    , i = e.index();
                ga("send", "event", "搜尋切換", "移上" + ["高檔住宅", "新建案", "中古屋", "租屋", "店面", "辦公", "廠房土地", "實價登錄"][i], x),
                    e.data("type") && (9 != +(O = e.data("type")) ? s.$vm.close() : hotEventSend && hotEventSend("首頁搜尋實價登錄_搜尋切換實價登錄"),
                        2 != +O && l.$vm.close(),
                        2 == +O && E.input.val(""),
                        8 == +O ? (E.input.val(""),
                            a.$set("type", O),
                            r && p()) : (a.$set("type", O),
                                a.$set("show", !1)),
                        12 != +O ? d.$vm.close() : E.input.val(""),
                        9 != +O && E.triangle.show(),
                        E.triangle.stop().animate({
                            left: e.position().left + e.width() / 2 + 8
                        }, "fast", "linear", function () {
                            9 == +O && E.triangle.hide()
                        }),
                        E.input.attr("placeholder", S[O]).blur(),
                        E.searchBtn.attr("google-data-stat", k[O]),
                        E.searchList.hide(),
                        E.historyList.hide(),
                        E.searchList.removeClass("advanced"),
                        e.addClass("select").siblings().removeClass("select"),
                        M(),
                        $.cookie("last_search_type", O, w))
            }),
            E.input.on("focus", function (t) {
                if (2 == +O)
                    return l.$vm.onFocus(t, N()),
                        E.input.addClass("onfocus"),
                        void E.input.removeClass("ie-color");
                if (9 == +O)
                    return s.$vm.onFocus(t, N()),
                        E.input.addClass("onfocus"),
                        void E.input.removeClass("ie-color");
                if (12 == +O)
                    return d.$vm.onFocus(t, N()),
                        E.input.addClass("onfocus"),
                        void E.input.removeClass("ie-color");
                var e = L().getData().length;
                E.input.addClass("onfocus"),
                    E.input.removeClass("ie-color"),
                    (8 != +O && e ? W : D)()
            }),
            E.input.on("blur", function () {
                E.input.removeClass("onfocus"),
                    N() || E.input.addClass("ie-color"),
                    9 == +O && s.$vm.onBlur(),
                    2 == +O && l.$vm.onBlur(),
                    12 == +O && d.$vm.onBlur()
            }),
            E.input.on("compositionstart", function () {
                9 != +O && 2 != +O || (B = !0)
            }),
            E.input.on("compositionend", function (t) {
                9 != +O && 2 != +O || (B = !1)
            }),
            E.input.on("keyup", function (e) {
                var t, i, r, o = e.keyCode;
                if (12 == +O)
                    return d.$vm.onKeyup(e),
                        void M();
                if (8 == +O)
                    return a.$set("q", N()),
                        void (13 === o && !N() && n && u());
                if (2 == +O) {
                    if (B)
                        return;
                    return clearTimeout(m),
                        void (m = setTimeout(function () {
                            l.$vm.onChange(N()),
                                13 === o && l.$vm.onKeyDownHandler(e),
                                M()
                        }, 300))
                }
                if (9 == +O) {
                    if (B)
                        return;
                    return clearTimeout(m),
                        void (_itd = setTimeout(function () {
                            var t;
                            s.$vm.onChange(N()),
                                13 === o && ((t = s.$vm.$refs.matchList || s.$vm.$refs.historyList) && void 0 !== t.activeIndex && -1 < t.activeIndex ? s.$vm.onKeyDownHandle(e) : F(null, {
                                    keywords: N()
                                })),
                                38 !== o && 40 !== o || s.$vm.onKeyDownHandle(e),
                                M()
                        }, 300))
                }
                38 !== o && 40 !== o ? (13 === o && (t = E.searchList.find(".newSelect"),
                    i = {
                        keywords: N()
                    },
                    t.length ? (r = "newHouse-detail",
                        i.id = t.data("id")) : r = "8" == O ? "newHouse-list" : "2" == O ? "sale" : "rent",
                    F(r, i)),
                    A = 2,
                    T = N(),
                    M(),
                    20 < N().length && N(N().substr(0, 20)),
                    clearTimeout(m),
                    m = setTimeout(function () {
                        (N() ? D : W)()
                    }, 300)) : function (t) {
                        var e = E.searchList.is(":visible")
                            , i = e ? E.searchList : E.historyList
                            , r = e ? ".auto-drop-words" : ".auto-dropdown-item"
                            , o = e && "8" == O ? "newSelect" : "select"
                            , n = i.find("." + o);
                        if (!n.length)
                            return i.find(r).eq(0).addClass(o),
                                P();
                        38 === t ? n.prev(r).length ? n.removeClass(o).prev(r).addClass(o) : i.find(r).removeClass(o).last().addClass(o) : n.next(r).length ? n.removeClass(o).next(r).addClass(o) : i.find(r).removeClass(o).first().addClass(o);
                        A = 1,
                            N(i.find("." + o).data("value")),
                            P()
                    }(o)
            }),
            E.searchBtn.on("click", function (t) {
                8 != +O || N() || !n ? 2 != +O ? 12 != +O ? F(null, {
                    keywords: N()
                }) : d.$vm.onBtnClick(N()) : l.$vm.onSearchBtnHandler(N()) : u()
            }),
            E.clearInputBtn.on("click", function () {
                9 == ~~O && hotEventSend && hotEventSend("首頁搜尋實價登錄_搜尋框叉叉"),
                    N(""),
                    E.clearInputBtn.hide()
            }),
            E.clearInputBtn.on("mousedown", function (t) {
                9 == ~~O && (t.preventDefault(),
                    s.$vm.keywords = ""),
                    2 == ~~O && (t.preventDefault(),
                        l.$vm.clearKeyWords()),
                    12 == ~O && (t.preventDefault(),
                        d.$vm.onClearInput())
            }),
            E.listWrap.on("mouseleave", function (t) {
                var e = E.searchList.is(":visible")
                    , i = e ? E.searchList : E.historyList
                    , r = e && "8" == O ? "newSelect" : "select";
                i.find("." + r).removeClass(r),
                    P()
            }),
            E.listWrap.on("click", function (t) {
                var e, i = $(U(t)), r = "auto-drop-words", o = "auto-dropdown-item", n = {};
                if (i.hasClass("auto-item-del"))
                    (i = i.parents("." + o)).remove(),
                        L().del("keywords", i.data("value")),
                        E.historyList.find("." + o).length || E.historyList.empty().hide();
                else if (i.hasClass("auto-dropdown-clear") || 0 < i.parents(".auto-dropdown-clear").length) {
                    var a = L();
                    E.historyList.empty(),
                        a.removeItem(a._storeName)
                } else if (i.hasClass("auto-advanced-condition")) {
                    var s = i.data("index")
                        , c = i.attr("class").split("auto-advanced-condition auto-advanced-")[1];
                    switch (I = n.keywords = i.parents(".auto-drop-words").data("value"),
                    R = i.text(),
                    c) {
                        case "pattern":
                            e = 1 == O ? "rent" : "sale",
                                n.pattern = s;
                            break;
                        case "rentKind":
                            e = "rent",
                                n.kind = s;
                            break;
                        case "saleKind":
                            e = "sale",
                                n.kind = s;
                            break;
                        case "rentprice":
                            e = "rent",
                                n.rentprice = s;
                            break;
                        case "saleprice":
                            e = "sale",
                                n.price = s
                    }
                    F(e, n)
                } else
                    i.hasClass(r) || 0 < i.parents("." + r).length ? (i = i.hasClass(r) ? i : i.parents("." + r),
                        e = "8" == O && "newHouse-detail",
                        I = n.keywords = i.data("value"),
                        n.id = i.data("id"),
                        F(e, n)) : (i.hasClass(o) || 0 < i.parents("." + o).length) && (i = i.hasClass(o) ? i : i.parents("." + o),
                            I = n.keywords = i.data("value"),
                            n.id = i.data("id"),
                            A = 1,
                            F(null, n))
            }),
            $("#search-house-entrust-entry").size() && t(document.getElementById("search-house-entrust-entry"), function () {
                hotEventSend("屋主委託_委託入口_首頁banner入口曝光")
            }),
            $("#search-house-entrust-entry").click(function () {
                window.dispatchEvent(new CustomEvent("needle_house_entrust_modal", {
                    detail: {
                        modelValue: !0,
                        entryType: "7"
                    }
                }))
            })
    }),
    define("index", ["_search", "_focus", "cookie", "popbox", "swiper", "_fixedBtAd", "_forLove", "_trackBid", "utility", "template", "_record", "_latestActivities", "fixedfloat", "scrollspy", "txtSlider", "uploadTemplate", "roll", "localStorage", "_recordWidget", "lazyloadImg", "utility", "firebase", "setIdentity"], function (require, exports, module) {
        require("_search"),
            require("_focus"),
            require("cookie"),
            require("popbox"),
            require("swiper"),
            require("_fixedBtAd"),
            require("_forLove"),
            require("_trackBid");
        var t = require("utility")
            , r = t.isNewBusinessPage
            , o = t.getNewBusinessPageUrl
            , n = require("template")
            , e = $("#hid_role").val()
            , i = require("_record");
        [1, 2].includes(+e) || require("_latestActivities");
        var a, s = new i({
            title: "我的收藏",
            type: "collection",
            width: "257",
            close: !0,
            listName: "collectionList"
        }), c = new i({
            title: "瀏覽歷史記錄",
            type: "history",
            width: "257",
            close: !0,
            listName: "historyList"
        });
        function l(t) {
            var e;
            switch (t) {
                case "pet":
                    e = "&other=pet";
                    break;
                case "mrt":
                    e = "&mrt=1";
                    break;
                case "host":
                    e = "&shType=host";
                    break;
                case "cartplace":
                    e = "&other=cartplace";
                    break;
                default:
                    e = "&mrt=1"
            }
            return e
        }
        require("fixedfloat"),
            $("#sideNav").fixedfloat({
                left: "10px",
                top: "50px",
                fixedTop: 610,
                bottomStop: $(".download-wrapper"),
                isCloseBtn: !1
            }),
            require("scrollspy"),
            $(".anchor").each(function (t) {
                var e = $(this).position();
                $(this).scrollspy({
                    min: e.top - 50,
                    max: e.top + $(this).height() - 50,
                    onEnter: function (t) {
                        var e = $(t).attr("id");
                        e && $("#sideNav").find("." + e).addClass("active").siblings().removeClass("active")
                    }
                })
            }),
            $("#sideNav ul li").on("click", function () {
                $(this).addClass("active").siblings().removeClass("active")
            }),
            require("txtSlider"),
            $("#bannerTxt").txtSlider(),
            require("uploadTemplate"),
            $("#guessLove").uploadTemplate({
                scroll: !0,
                scrollOption: {
                    number: 4
                },
                callback: s.heartShow
            }),
            $("#community-rank-wrapper").hide(),
            $.get("".concat(HOST.bff, "/v1/community/community-rank?regionid=").concat($.cookie("urlJumpIp")), function (t) {
                1 === t.data.show && ($("#community-rank-wrapper").show(),
                    $("#communityRank").uploadTemplate({
                        templateId: "template_communityRank",
                        scroll: !0,
                        scrollOption: {
                            number: 4
                        },
                        callback: function () {
                            $(".rank-item").hover(function () {
                                $(this).siblings().removeClass("actived"),
                                    $(this).addClass("actived")
                            }),
                                $(".rank").hover(function () { }, function () {
                                    $(this).find(".rank-item").each(function (t) {
                                        0 === t && ($(this).addClass("actived"),
                                            $(this).siblings().removeClass("actived"))
                                    })
                                }),
                                $(".rank-list").each(function () {
                                    $($(this).find(".rank-item")[0]).addClass("actived")
                                })
                        }
                    }, t))
            }),
            function (t) {
                0 == t ? ($("#hotBuild_unknow").uploadTemplate({
                    scroll: !0,
                    scrollOption: {
                        number: 4
                    },
                    callback: s.heartShow
                }),
                    $("#recommendBuild_unknow").uploadTemplate({
                        scroll: !0,
                        scrollOption: {
                            number: 4
                        },
                        isNative: !0,
                        callback: s.heartShow
                    }),
                    $("#openBuild_unknow").uploadTemplate({
                        scroll: !0,
                        scrollOption: {
                            number: 4
                        },
                        callback: s.heartShow
                    }),
                    $("#telBuild_unknow").uploadTemplate({
                        scroll: !0,
                        scrollOption: {
                            autoPlay: !0,
                            autoPlayLoop: !0
                        },
                        callback: s.heartShow
                    }),
                    $("#houseSale_unknow").uploadTemplate({
                        scroll: !0,
                        scrollOption: {
                            number: 4
                        },
                        callback: s.heartShow
                    }),
                    $("#houseRent").uploadTemplate({
                        scroll: !0,
                        scrollOption: {
                            number: 4
                        },
                        callback: s.heartShow
                    })) : 1 == t ? ($("#family").uploadTemplate({
                        ajax_url: !0,
                        templateId: "template_rent",
                        scroll: !0,
                        addParam: {
                            kind: 1,
                            resource: "2"
                        },
                        scrollOption: {
                            number: 4
                        },
                        callback: s.heartShow
                    }),
                        $("#personal").uploadTemplate({
                            ajax_url: !0,
                            templateId: "template_rent",
                            scroll: !0,
                            addParam: {
                                kind: 2,
                                resource: "3"
                            },
                            scrollOption: {
                                number: 4
                            },
                            callback: s.heartShow
                        }),
                        $("#sublet").uploadTemplate({
                            ajax_url: !0,
                            templateId: "template_rent",
                            scroll: !0,
                            addParam: {
                                kind: 3,
                                resource: "4"
                            },
                            scrollOption: {
                                number: 4
                            },
                            callback: s.heartShow
                        }),
                        $("#mrt").uploadTemplate({
                            addParam: {
                                param: l($("#mrt").attr("data-param")),
                                resource: "5"
                            },
                            callback: s.heartShow
                        }),
                        $("#recom").uploadTemplate({
                            ajax_url: !0,
                            templateId: "template_rent",
                            scroll: !0,
                            addParam: {
                                kind: 3,
                                resource: "6"
                            },
                            scrollOption: {
                                number: 4
                            },
                            callback: s.heartShow
                        })) : ($("#hotBuild_sale").uploadTemplate({
                            scroll: !0,
                            scrollOption: {
                                number: 4
                            },
                            callback: s.heartShow
                        }),
                            $("#recommendBuild_sale").uploadTemplate({
                                scroll: !0,
                                scrollOption: {
                                    number: 4
                                },
                                isNative: !0,
                                callback: s.heartShow
                            }),
                            $("#openBuild_sale").uploadTemplate({
                                scroll: !0,
                                scrollOption: {
                                    number: 4
                                },
                                callback: s.heartShow
                            }),
                            $("#telBuild_sale").uploadTemplate({
                                scroll: !0,
                                scrollOption: {
                                    autoPlay: !0,
                                    autoPlayLoop: !0
                                },
                                callback: s.heartShow
                            }),
                            $("#houseSale_sale").uploadTemplate({
                                scroll: !0,
                                scrollOption: {
                                    number: 4
                                },
                                callback: s.heartShow
                            }));
                function i(t) {
                    var e = {
                        count_type: "all",
                        device: "pc",
                        event: t
                    };
                    $.get("/home/data/generalStatistics", e)
                }
                require("roll"),
                    require("localStorage"),
                    $("#anchor_housenews").roll({
                        threshold: 500,
                        showCallBack: function () {
                            var t = {
                                role: 0,
                                device: 4,
                                channel: "index",
                                position: "index-news"
                            };
                            $.cookie("urlJumpIp") && (t.regionid = $.cookie("urlJumpIp")),
                                $.get("/home/index/recomNews", t, function (t) {
                                    var e;
                                    1 === t.status && 4 === t.data.length ? (i("xwrk_index_index-news_exposure"),
                                        e = n("template_housenews", t),
                                        $("#housenews").html(e),
                                        localStorage.getItem("index-news-guidance") || (localStorage.setItem("index-news-guidance", 1),
                                            $("body").append('<div class="guidance-mask"></div><div class="guidance"><div class="guidance-title">房市新聞</div><div class="guidance-stitle">為您提供最新房市動態</div><div class="guidance-btn"><div class="guidance-btn-l">去看看</div><div class="guidance-btn-r">我知道了</div></div></div>'),
                                            $(".guidance-btn-l").click(function () {
                                                $(".guidance, .guidance-mask").hide(),
                                                    $('a[href="#anchor_housenews"]')[0].click()
                                            }),
                                            $(".guidance-btn-r").click(function () {
                                                $(".guidance, .guidance-mask").hide()
                                            })),
                                        $("#anchor_housenews").on("click", ".housenews_click_stat", function () {
                                            i("xwrk_index_index-news_click")
                                        })) : $("#anchor_housenews").hide()
                                })
                        }
                    })
            }(e),
            $("#houseTab a").on("click", function () {
                var i, t;
                $(this).hasClass("active") || ($(this).addClass("active").siblings().removeClass("active"),
                    $("#mrt").addClass("loading").html(""),
                    i = $(this).attr("data-param"),
                    t = $("#template_mrt").attr("data-src"),
                    $.post(t, {
                        type: i
                    }, function (t) {
                        t.data.forEach(function (t) {
                            1 == +t.type ? t.link = r(+t.kind_origin) ? o(1, t.houseId) : "".concat(HOST.rent, "/rent-detail-").concat(t.houseId, ".html") : 2 == +t.type && (t.link = r(+t.kind_origin) ? o(2, t.houseId) : "".concat(HOST.sale, "/home/house/detail/2/").concat(t.houseId, ".html"))
                        }),
                            t.addParam = {
                                param: l(i)
                            };
                        var e = n("template_mrt", t);
                        $("#mrt").removeClass("loading").html(e),
                            $.isEmptyObject(t.data) || s.heartShow(t.data)
                    }))
            }),
            $("#houseSaleTab a").on("click", function () {
                var i, t, e = $(this);
                e.hasClass("active") || (i = e.attr("data-param"),
                    t = $("#template_themeBuild").attr("data-src"),
                    e.addClass("active").siblings().removeClass("active"),
                    "article" === i ? ($("#themeBuild").css("display", "none"),
                        $("#anchor_theme .article-box").css("display", "block")) : ($("#anchor_theme .article-box").css("display", "none"),
                            $("#themeBuild").css("display", "block").addClass("loading").html(""),
                            $.post(t, {
                                type: i
                            }, function (t) {
                                t.addParam = i;
                                var e = n("template_themeBuild", t);
                                $("#themeBuild").removeClass("loading").html(e),
                                    $.isEmptyObject(t.data) || s.heartShow(t.data)
                            })))
            }),
            a = new Swiper(".swiper-container", {
                pagination: ".download-navigation",
                paginationClickable: !0,
                nextButton: ".sw-button-next",
                prevButton: ".sw-button-prev",
                slidesPerView: 1,
                speed: 600,
                loop: !0,
                autoplay: 4e3,
                autoplayDisableOnInteraction: !1,
                bulletActiveClass: "active"
            }),
            $(".download-wrapper").hover(function () {
                a.stopAutoplay()
            }, function () {
                a.startAutoplay()
            });
        var d, h, u;
        require("_recordWidget"),
            $(".clearfix").recordWidget({
                collect: s
            }),
            d = 'a[href*="/rent-detail-"]',
            h = 'a[href*="/house/detail"]',
            u = 'a[href*="/home/housing/detail?hid"]',
            $(document).on("click", function (t) {
                var e = $(t.target)
                    , i = "";
                e.filter(d).length || e.parents(d).length ? (e = e.filter(d).length ? e : e.parents(d),
                    i = "1") : e.filter(h).length || e.parents(h).length ? (e = e.filter(h).length ? e : e.parents(h),
                        i = "2") : (e.filter(u).length || e.parents(u).length) && (e = e.filter(u).length ? e : e.parents(u),
                            i = "8"),
                    e.hasClass("record-list-a") || function (t) {
                        var e, i = this.attr("href"), r = Date.now();
                        switch (t) {
                            case "1":
                                e = i.match(/rent-detail-(\d+)\.html/)[1];
                                break;
                            case "2":
                                e = i.match(/house\/detail\/\d\/(\d+)\.html/)[1];
                                break;
                            case "6":
                                e = i.match(/ding-detail-(\d+)\.html/)[1];
                                break;
                            case "8":
                                e = i.match(/detail\?hid=(\d+)/)[1]
                        }
                        e && c.addItem({
                            id: e,
                            time: r,
                            type: t
                        })
                    }
                        .call(e, i)
            }),
            require("lazyloadImg"),
            $("img.lazy").lazyloadImg({
                effect: "fadeIn",
                skip_invisible: !0,
                threshold: 200
            }),
            require("utility").UNION_EVENT("page-pc_page-1_page-" + $.cookie("urlJumpIp"), !0);
        var p = require("firebase");
        window.addEventListener("load", p.init),
            require("setIdentity").setStat()
    });
