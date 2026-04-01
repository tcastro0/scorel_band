export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.10";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.10";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "winner-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "18px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "trophy"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#ffcc00",
                            marginRight: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "winner-name"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "grid"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            flexWrap: "wrap",
                            width: "200px",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "cell"
                            ]
                        ],
                        {
                            width: "50px",
                            height: "40px",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "cell-head"
                            ]
                        ],
                        {
                            width: "50px",
                            height: "24px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "cell-head-txt"
                            ]
                        ],
                        {
                            width: "50px",
                            height: "24px",
                            fontSize: "12px",
                            color: "#555555",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "cell-team"
                            ]
                        ],
                        {
                            width: "50px",
                            height: "40px",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            paddingLeft: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "team-lbl-a"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#00b4ff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "team-lbl-b"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#ff6b00",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "num-win-a"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#00b4ff",
                            textAlign: "center",
                            width: "50px",
                            height: "40px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "num-win-b"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#ff6b00",
                            textAlign: "center",
                            width: "50px",
                            height: "40px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "num-lose"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            color: "#333333",
                            textAlign: "center",
                            width: "50px",
                            height: "40px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hidden"
                            ]
                        ],
                        {
                            color: "#000000",
                            width: "50px",
                            height: "40px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-new"
                            ]
                        ],
                        {
                            width: "160px",
                            height: "42px",
                            borderRadius: "21px",
                            backgroundColor: "#1a1a1a",
                            color: "#ffffff",
                            fontSize: "15px",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-share"
                            ]
                        ],
                        {
                            width: "160px",
                            height: "42px",
                            borderRadius: "21px",
                            backgroundColor: "#001a33",
                            color: "#00b4ff",
                            fontSize: "15px"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.interconnect"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        protected: {
                            teamA: 'Team A',
                            teamB: 'Team B',
                            setsA: 0,
                            setsB: 0,
                            winner: '',
                            setHistory: '[]'
                        },
                        private: {
                            sets: 0,
                            s1a: '-',
                            s1b: '-',
                            s1WinA: false,
                            s1WinB: false,
                            s2a: '-',
                            s2b: '-',
                            s2WinA: false,
                            s2WinB: false,
                            s3a: '-',
                            s3b: '-',
                            s3WinA: false,
                            s3WinB: false,
                            shareLabel: 'Send to Phone'
                        },
                        onInit () {
                            const history = JSON.parse(this.setHistory || '[]');
                            this.sets = history.length;
                            if (history[0]) {
                                this.s1a = String(history[0].a);
                                this.s1b = String(history[0].b);
                                this.s1WinA = history[0].a > history[0].b;
                                this.s1WinB = history[0].b > history[0].a;
                            }
                            if (history[1]) {
                                this.s2a = String(history[1].a);
                                this.s2b = String(history[1].b);
                                this.s2WinA = history[1].a > history[1].b;
                                this.s2WinB = history[1].b > history[1].a;
                            }
                            if (history[2]) {
                                this.s3a = String(history[2].a);
                                this.s3b = String(history[2].b);
                                this.s3WinA = history[2].a > history[2].b;
                                this.s3WinB = history[2].b > history[2].a;
                            }
                        },
                        shareResult () {
                            const history = JSON.parse(this.setHistory || '[]');
                            const sets = history.map(function(s) {
                                return s.a + '-' + s.b;
                            }).join(', ');
                            const msg = 'Padel: ' + this.winner + ' won! ' + this.teamA + ' ' + this.setsA + '-' + this.setsB + ' ' + this.teamB + ' (' + sets + ')';
                            const connect = _system2.default.instance();
                            connect.getReadyState({
                                success: (function(data) {
                                    if (1 === data.status) connect.send({
                                        message: msg,
                                        success: (function() {
                                            this.shareLabel = 'Sent!';
                                            _system3.default.showToast({
                                                message: 'Sent to phone!',
                                                duration: 2000
                                            });
                                        }).bind(this),
                                        fail: (function() {
                                            this.shareLabel = 'Failed';
                                            _system3.default.showToast({
                                                message: 'Send failed',
                                                duration: 2000
                                            });
                                        }).bind(this)
                                    });
                                    else {
                                        this.shareLabel = 'No connection';
                                        _system3.default.showToast({
                                            message: 'Phone not connected',
                                            duration: 2000
                                        });
                                    }
                                }).bind(this),
                                fail: (function() {
                                    this.shareLabel = 'No connection';
                                    _system3.default.showToast({
                                        message: 'Phone not connected',
                                        duration: 2000
                                    });
                                }).bind(this)
                            });
                        },
                        newMatch () {
                            _system.default.push({
                                uri: '/pages/index'
                            });
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "winner-row"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "trophy"
                                    ],
                                    value: "★"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "winner-name"
                                    ],
                                    value: function() {
                                        return _vm_.winner;
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "grid"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "cell",
                                        "cell-head"
                                    ]
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "cell",
                                        "cell-head-txt"
                                    ],
                                    value: "S1"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell cell-head-txt " + (_vm_.sets < 2 ? "hidden" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: "S2"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell cell-head-txt " + (_vm_.sets < 3 ? "hidden" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: "S3"
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "cell",
                                        "cell-team"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "team-lbl-a"
                                        ],
                                        value: function() {
                                            return _vm_.teamA;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell " + (_vm_.s1WinA ? "num-win-a" : "num-lose");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: function() {
                                        return _vm_.s1a;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell " + (_vm_.sets < 2 ? "hidden" : _vm_.s2WinA ? "num-win-a" : "num-lose");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: function() {
                                        return _vm_.s2a;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell " + (_vm_.sets < 3 ? "hidden" : _vm_.s3WinA ? "num-win-a" : "num-lose");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: function() {
                                        return _vm_.s3a;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "cell",
                                        "cell-team"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "team-lbl-b"
                                        ],
                                        value: function() {
                                            return _vm_.teamB;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell " + (_vm_.s1WinB ? "num-win-b" : "num-lose");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: function() {
                                        return _vm_.s1b;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell " + (_vm_.sets < 2 ? "hidden" : _vm_.s2WinB ? "num-win-b" : "num-lose");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: function() {
                                        return _vm_.s2b;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "cell " + (_vm_.sets < 3 ? "hidden" : _vm_.s3WinB ? "num-win-b" : "num-lose");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    value: function() {
                                        return _vm_.s3b;
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("input", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn-new"
                                ],
                                type: "button",
                                value: "New Match",
                                events: {
                                    click: function(evt) {
                                        return _vm_.newMatch(evt);
                                    }
                                }
                            }
                        }, []),
                        aiot.__ce__("input", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn-share"
                                ],
                                type: "button",
                                value: function() {
                                    return _vm_.shareLabel;
                                },
                                events: {
                                    click: function(evt) {
                                        return _vm_.shareResult(evt);
                                    }
                                }
                            }
                        }, [])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVzdWx0L3Jlc3VsdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1Njb3JlbC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vU2NvcmVsL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1Njb3JlbC9zcmMvcGFnZXMvcmVzdWx0L3Jlc3VsdC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjEwXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTBcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG5cbiAgICA8IS0tIFdpbm5lciByb3cgLS0+XG4gICAgPGRpdiBjbGFzcz1cIndpbm5lci1yb3dcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidHJvcGh5XCI+4piFPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJ3aW5uZXItbmFtZVwiPnt7IHdpbm5lciB9fTwvdGV4dD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gR3JpZDogdGVhbSBpY29uIGNvbCArIG9uZSBjb2wgcGVyIHNldCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuXG4gICAgICA8IS0tIEhlYWRlciByb3c6IGJsYW5rICsgUzEsIFMyLCBTMyAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIGNlbGwtaGVhZFwiPjwvZGl2PlxuICAgICAgPHRleHQgY2xhc3M9XCJjZWxsIGNlbGwtaGVhZC10eHRcIj5TMTwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2VsbCBjZWxsLWhlYWQtdHh0IHt7IHNldHMgPCAyID8gJ2hpZGRlbicgOiAnJyB9fVwiPlMyPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJjZWxsIGNlbGwtaGVhZC10eHQge3sgc2V0cyA8IDMgPyAnaGlkZGVuJyA6ICcnIH19XCI+UzM8L3RleHQ+XG5cbiAgICAgIDwhLS0gVGVhbSBBIHJvdyAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIGNlbGwtdGVhbVwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInRlYW0tbGJsLWFcIj57eyB0ZWFtQSB9fTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRleHQgY2xhc3M9XCJjZWxsIHt7IHMxV2luQSA/ICdudW0td2luLWEnIDogJ251bS1sb3NlJyB9fVwiPnt7IHMxYSB9fTwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2VsbCB7eyBzZXRzIDwgMiA/ICdoaWRkZW4nIDogKHMyV2luQSA/ICdudW0td2luLWEnIDogJ251bS1sb3NlJykgfX1cIj57eyBzMmEgfX08L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cImNlbGwge3sgc2V0cyA8IDMgPyAnaGlkZGVuJyA6IChzM1dpbkEgPyAnbnVtLXdpbi1hJyA6ICdudW0tbG9zZScpIH19XCI+e3sgczNhIH19PC90ZXh0PlxuXG4gICAgICA8IS0tIFRlYW0gQiByb3cgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBjZWxsLXRlYW1cIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0ZWFtLWxibC1iXCI+e3sgdGVhbUIgfX08L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2VsbCB7eyBzMVdpbkIgPyAnbnVtLXdpbi1iJyA6ICdudW0tbG9zZScgfX1cIj57eyBzMWIgfX08L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cImNlbGwge3sgc2V0cyA8IDIgPyAnaGlkZGVuJyA6IChzMldpbkIgPyAnbnVtLXdpbi1iJyA6ICdudW0tbG9zZScpIH19XCI+e3sgczJiIH19PC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJjZWxsIHt7IHNldHMgPCAzID8gJ2hpZGRlbicgOiAoczNXaW5CID8gJ251bS13aW4tYicgOiAnbnVtLWxvc2UnKSB9fVwiPnt7IHMzYiB9fTwvdGV4dD5cblxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBOZXcgbWF0Y2ggYnV0dG9uIC0tPlxuICAgIDxpbnB1dCBjbGFzcz1cImJ0bi1uZXdcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJOZXcgTWF0Y2hcIiBvbmNsaWNrPVwibmV3TWF0Y2hcIiAvPlxuXG4gICAgPCEtLSBTaGFyZSByZXN1bHQgYnV0dG9uIC0tPlxuICAgIDxpbnB1dCBjbGFzcz1cImJ0bi1zaGFyZVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IHNoYXJlTGFiZWwgfX1cIiBvbmNsaWNrPVwic2hhcmVSZXN1bHRcIiAvPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAucGFnZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgLyogV2lubmVyIHJvdyAqL1xuICAud2lubmVyLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIH1cblxuICAudHJvcGh5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmZmNjMDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cblxuICAud2lubmVyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC8qIEdyaWQgKi9cbiAgLmdyaWQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmNlbGwge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmNlbGwtaGVhZCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLmNlbGwtaGVhZC10eHQge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNlbGwtdGVhbSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICB9XG5cbiAgLnRlYW0tbGJsLWEge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwYjRmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC50ZWFtLWxibC1iIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNmZjZiMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAubnVtLXdpbi1hIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMGI0ZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIC5udW0td2luLWIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmNmIwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLm51bS1sb3NlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIC5oaWRkZW4ge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIC8qIEJ1dHRvbiAqL1xuICAuYnRuLW5ldyB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuYnRuLXNoYXJlIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWEzMztcbiAgICBjb2xvcjogIzAwYjRmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInXG4gIGltcG9ydCBpbnRlcmNvbm5lY3QgZnJvbSAnQHN5c3RlbS5pbnRlcmNvbm5lY3QnXG4gIGltcG9ydCBwcm9tcHQgZnJvbSAnQHN5c3RlbS5wcm9tcHQnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3RlY3RlZDoge1xuICAgICAgdGVhbUE6ICAgICAgJ1RlYW0gQScsXG4gICAgICB0ZWFtQjogICAgICAnVGVhbSBCJyxcbiAgICAgIHNldHNBOiAgICAgIDAsXG4gICAgICBzZXRzQjogICAgICAwLFxuICAgICAgd2lubmVyOiAgICAgJycsXG4gICAgICBzZXRIaXN0b3J5OiAnW10nXG4gICAgfSxcblxuICAgIHByaXZhdGU6IHtcbiAgICAgIHNldHM6ICAgMCxcbiAgICAgIHMxYTogJy0nLCBzMWI6ICctJywgczFXaW5BOiBmYWxzZSwgczFXaW5COiBmYWxzZSxcbiAgICAgIHMyYTogJy0nLCBzMmI6ICctJywgczJXaW5BOiBmYWxzZSwgczJXaW5COiBmYWxzZSxcbiAgICAgIHMzYTogJy0nLCBzM2I6ICctJywgczNXaW5BOiBmYWxzZSwgczNXaW5COiBmYWxzZSxcbiAgICAgIHNoYXJlTGFiZWw6ICdTZW5kIHRvIFBob25lJ1xuICAgIH0sXG5cbiAgICBvbkluaXQoKSB7XG4gICAgICBjb25zdCBoaXN0b3J5ID0gSlNPTi5wYXJzZSh0aGlzLnNldEhpc3RvcnkgfHwgJ1tdJylcbiAgICAgIHRoaXMuc2V0cyA9IGhpc3RvcnkubGVuZ3RoXG5cbiAgICAgIGlmIChoaXN0b3J5WzBdKSB7XG4gICAgICAgIHRoaXMuczFhICAgID0gU3RyaW5nKGhpc3RvcnlbMF0uYSlcbiAgICAgICAgdGhpcy5zMWIgICAgPSBTdHJpbmcoaGlzdG9yeVswXS5iKVxuICAgICAgICB0aGlzLnMxV2luQSA9IGhpc3RvcnlbMF0uYSA+IGhpc3RvcnlbMF0uYlxuICAgICAgICB0aGlzLnMxV2luQiA9IGhpc3RvcnlbMF0uYiA+IGhpc3RvcnlbMF0uYVxuICAgICAgfVxuICAgICAgaWYgKGhpc3RvcnlbMV0pIHtcbiAgICAgICAgdGhpcy5zMmEgICAgPSBTdHJpbmcoaGlzdG9yeVsxXS5hKVxuICAgICAgICB0aGlzLnMyYiAgICA9IFN0cmluZyhoaXN0b3J5WzFdLmIpXG4gICAgICAgIHRoaXMuczJXaW5BID0gaGlzdG9yeVsxXS5hID4gaGlzdG9yeVsxXS5iXG4gICAgICAgIHRoaXMuczJXaW5CID0gaGlzdG9yeVsxXS5iID4gaGlzdG9yeVsxXS5hXG4gICAgICB9XG4gICAgICBpZiAoaGlzdG9yeVsyXSkge1xuICAgICAgICB0aGlzLnMzYSAgICA9IFN0cmluZyhoaXN0b3J5WzJdLmEpXG4gICAgICAgIHRoaXMuczNiICAgID0gU3RyaW5nKGhpc3RvcnlbMl0uYilcbiAgICAgICAgdGhpcy5zM1dpbkEgPSBoaXN0b3J5WzJdLmEgPiBoaXN0b3J5WzJdLmJcbiAgICAgICAgdGhpcy5zM1dpbkIgPSBoaXN0b3J5WzJdLmIgPiBoaXN0b3J5WzJdLmFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcmVSZXN1bHQoKSB7XG4gICAgICBjb25zdCBoaXN0b3J5ID0gSlNPTi5wYXJzZSh0aGlzLnNldEhpc3RvcnkgfHwgJ1tdJylcbiAgICAgIGNvbnN0IHNldHMgPSBoaXN0b3J5Lm1hcChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLmEgKyAnLScgKyBzLmJcbiAgICAgIH0pLmpvaW4oJywgJylcblxuICAgICAgY29uc3QgbXNnID0gJ1BhZGVsOiAnICsgdGhpcy53aW5uZXIgKyAnIHdvbiEgJyArXG4gICAgICAgICAgICAgICAgICB0aGlzLnRlYW1BICsgJyAnICsgdGhpcy5zZXRzQSArICctJyArIHRoaXMuc2V0c0IgKyAnICcgKyB0aGlzLnRlYW1CICtcbiAgICAgICAgICAgICAgICAgICcgKCcgKyBzZXRzICsgJyknXG5cbiAgICAgIGNvbnN0IGNvbm5lY3QgPSBpbnRlcmNvbm5lY3QuaW5zdGFuY2UoKVxuXG4gICAgICBjb25uZWN0LmdldFJlYWR5U3RhdGUoe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICBjb25uZWN0LnNlbmQoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBtc2csXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMYWJlbCA9ICdTZW50ISdcbiAgICAgICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHsgbWVzc2FnZTogJ1NlbnQgdG8gcGhvbmUhJywgZHVyYXRpb246IDIwMDAgfSlcbiAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGFiZWwgPSAnRmFpbGVkJ1xuICAgICAgICAgICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiAnU2VuZCBmYWlsZWQnLCBkdXJhdGlvbjogMjAwMCB9KVxuICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hhcmVMYWJlbCA9ICdObyBjb25uZWN0aW9uJ1xuICAgICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICdQaG9uZSBub3QgY29ubmVjdGVkJywgZHVyYXRpb246IDIwMDAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zaGFyZUxhYmVsID0gJ05vIGNvbm5lY3Rpb24nXG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6ICdQaG9uZSBub3QgY29ubmVjdGVkJywgZHVyYXRpb246IDIwMDAgfSlcbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBuZXdNYXRjaCgpIHtcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnL3BhZ2VzL2luZGV4JyB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcm90ZWN0ZWQiLCJ0ZWFtQSIsInRlYW1CIiwic2V0c0EiLCJzZXRzQiIsIndpbm5lciIsInNldEhpc3RvcnkiLCJwcml2YXRlIiwic2V0cyIsInMxYSIsInMxYiIsInMxV2luQSIsInMxV2luQiIsInMyYSIsInMyYiIsInMyV2luQSIsInMyV2luQiIsInMzYSIsInMzYiIsInMzV2luQSIsInMzV2luQiIsInNoYXJlTGFiZWwiLCJvbkluaXQiLCJoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwiU3RyaW5nIiwiYSIsImIiLCJzaGFyZVJlc3VsdCIsIm1hcCIsInMiLCJqb2luIiwibXNnIiwiY29ubmVjdCIsImludGVyY29ubmVjdCIsImluc3RhbmNlIiwiZ2V0UmVhZHlTdGF0ZSIsInN1Y2Nlc3MiLCJkYXRhIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImJpbmQiLCJmYWlsIiwibmV3TWF0Y2giLCJyb3V0ZXIiLCJwdXNoIiwidXJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNpTHpCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO29CQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO29CQUFtQyxTQUFBRCx1QkFBQUksQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFcEI7d0JBQ2JHLFdBQVc7NEJBQ1RDLE9BQVk7NEJBQ1pDLE9BQVk7NEJBQ1pDLE9BQVk7NEJBQ1pDLE9BQVk7NEJBQ1pDLFFBQVk7NEJBQ1pDLFlBQVk7d0JBQ2Q7d0JBRUFDLFNBQVM7NEJBQ1BDLE1BQVE7NEJBQ1JDLEtBQUs7NEJBQUtDLEtBQUs7NEJBQUtDLFFBQVE7NEJBQU9DLFFBQVE7NEJBQzNDQyxLQUFLOzRCQUFLQyxLQUFLOzRCQUFLQyxRQUFROzRCQUFPQyxRQUFROzRCQUMzQ0MsS0FBSzs0QkFBS0MsS0FBSzs0QkFBS0MsUUFBUTs0QkFBT0MsUUFBUTs0QkFDM0NDLFlBQVk7d0JBQ2Q7d0JBRUFDOzRCQUNFLE1BQU1DLFVBQVVDLEtBQUtDLEtBQUssQ0FBQyxJQUFJLENBQUNuQixVQUFVLElBQUk7NEJBQzlDLElBQUksQ0FBQ0UsSUFBSSxHQUFHZSxRQUFRRyxNQUFNOzRCQUUxQixJQUFJSCxPQUFPLENBQUMsRUFBRSxFQUFFO2dDQUNkLElBQUksQ0FBQ2QsR0FBRyxHQUFNa0IsT0FBT0osT0FBTyxDQUFDLEVBQUUsQ0FBQ0ssQ0FBQztnQ0FDakMsSUFBSSxDQUFDbEIsR0FBRyxHQUFNaUIsT0FBT0osT0FBTyxDQUFDLEVBQUUsQ0FBQ00sQ0FBQztnQ0FDakMsSUFBSSxDQUFDbEIsTUFBTSxHQUFHWSxPQUFPLENBQUMsRUFBRSxDQUFDSyxDQUFDLEdBQUdMLE9BQU8sQ0FBQyxFQUFFLENBQUNNLENBQUM7Z0NBQ3pDLElBQUksQ0FBQ2pCLE1BQU0sR0FBR1csT0FBTyxDQUFDLEVBQUUsQ0FBQ00sQ0FBQyxHQUFHTixPQUFPLENBQUMsRUFBRSxDQUFDSyxDQUFDOzRCQUMzQzs0QkFDQSxJQUFJTCxPQUFPLENBQUMsRUFBRSxFQUFFO2dDQUNkLElBQUksQ0FBQ1YsR0FBRyxHQUFNYyxPQUFPSixPQUFPLENBQUMsRUFBRSxDQUFDSyxDQUFDO2dDQUNqQyxJQUFJLENBQUNkLEdBQUcsR0FBTWEsT0FBT0osT0FBTyxDQUFDLEVBQUUsQ0FBQ00sQ0FBQztnQ0FDakMsSUFBSSxDQUFDZCxNQUFNLEdBQUdRLE9BQU8sQ0FBQyxFQUFFLENBQUNLLENBQUMsR0FBR0wsT0FBTyxDQUFDLEVBQUUsQ0FBQ00sQ0FBQztnQ0FDekMsSUFBSSxDQUFDYixNQUFNLEdBQUdPLE9BQU8sQ0FBQyxFQUFFLENBQUNNLENBQUMsR0FBR04sT0FBTyxDQUFDLEVBQUUsQ0FBQ0ssQ0FBQzs0QkFDM0M7NEJBQ0EsSUFBSUwsT0FBTyxDQUFDLEVBQUUsRUFBRTtnQ0FDZCxJQUFJLENBQUNOLEdBQUcsR0FBTVUsT0FBT0osT0FBTyxDQUFDLEVBQUUsQ0FBQ0ssQ0FBQztnQ0FDakMsSUFBSSxDQUFDVixHQUFHLEdBQU1TLE9BQU9KLE9BQU8sQ0FBQyxFQUFFLENBQUNNLENBQUM7Z0NBQ2pDLElBQUksQ0FBQ1YsTUFBTSxHQUFHSSxPQUFPLENBQUMsRUFBRSxDQUFDSyxDQUFDLEdBQUdMLE9BQU8sQ0FBQyxFQUFFLENBQUNNLENBQUM7Z0NBQ3pDLElBQUksQ0FBQ1QsTUFBTSxHQUFHRyxPQUFPLENBQUMsRUFBRSxDQUFDTSxDQUFDLEdBQUdOLE9BQU8sQ0FBQyxFQUFFLENBQUNLLENBQUM7NEJBQzNDO3dCQUNGO3dCQUVBRTs0QkFDRSxNQUFNUCxVQUFVQyxLQUFLQyxLQUFLLENBQUMsSUFBSSxDQUFDbkIsVUFBVSxJQUFJOzRCQUM5QyxNQUFNRSxPQUFPZSxRQUFRUSxHQUFHLENBQUMsU0FBU0MsQ0FBQztnQ0FDakMsT0FBT0EsRUFBRUosQ0FBQyxHQUFHLE1BQU1JLEVBQUVILENBQUM7NEJBQ3hCLEdBQUdJLElBQUksQ0FBQzs0QkFFUixNQUFNQyxNQUFNLFlBQVksSUFBSSxDQUFDN0IsTUFBTSxHQUFHLFdBQzFCLElBQUksQ0FBQ0osS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDRSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUNDLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQ0YsS0FBSyxHQUNuRSxPQUFPTSxPQUFPOzRCQUUxQixNQUFNMkIsVUFBVUMsU0FBQUEsT0FBWSxDQUFDQyxRQUFROzRCQUVyQ0YsUUFBUUcsYUFBYSxDQUFDO2dDQUNwQkMsU0FBUyxVQUFTQyxJQUFJO29DQUNwQixJQUFJQSxBQUFnQixNQUFoQkEsS0FBS0MsTUFBTSxFQUNiTixRQUFRTyxJQUFJLENBQUM7d0NBQ1hDLFNBQVNUO3dDQUNUSyxTQUFTOzRDQUNQLElBQUksQ0FBQ2xCLFVBQVUsR0FBRzs0Q0FDbEJ1QixTQUFBQSxPQUFNLENBQUNDLFNBQVMsQ0FBQztnREFBRUYsU0FBUztnREFBa0JHLFVBQVU7NENBQUs7d0NBQy9ELEdBQUVDLElBQUksQ0FBQyxJQUFJO3dDQUNYQyxNQUFNOzRDQUNKLElBQUksQ0FBQzNCLFVBQVUsR0FBRzs0Q0FDbEJ1QixTQUFBQSxPQUFNLENBQUNDLFNBQVMsQ0FBQztnREFBRUYsU0FBUztnREFBZUcsVUFBVTs0Q0FBSzt3Q0FDNUQsR0FBRUMsSUFBSSxDQUFDLElBQUk7b0NBQ2I7eUNBQ0s7d0NBQ0wsSUFBSSxDQUFDMUIsVUFBVSxHQUFHO3dDQUNsQnVCLFNBQUFBLE9BQU0sQ0FBQ0MsU0FBUyxDQUFDOzRDQUFFRixTQUFTOzRDQUF1QkcsVUFBVTt3Q0FBSztvQ0FDcEU7Z0NBQ0YsR0FBRUMsSUFBSSxDQUFDLElBQUk7Z0NBQ1hDLE1BQU07b0NBQ0osSUFBSSxDQUFDM0IsVUFBVSxHQUFHO29DQUNsQnVCLFNBQUFBLE9BQU0sQ0FBQ0MsU0FBUyxDQUFDO3dDQUFFRixTQUFTO3dDQUF1QkcsVUFBVTtvQ0FBSztnQ0FDcEUsR0FBRUMsSUFBSSxDQUFDLElBQUk7NEJBQ2I7d0JBQ0Y7d0JBRUFFOzRCQUNFQyxRQUFBQSxPQUFNLENBQUNDLElBQUksQ0FBQztnQ0FBRUMsS0FBSzs0QkFBZTt3QkFDcEM7b0JBQ0YifQ==