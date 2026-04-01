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
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#00b4ff",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: "14px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            width: "180px",
                            height: "28px",
                            marginBottom: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "dot-a"
                            ]
                        ],
                        {
                            fontSize: "10px",
                            color: "#00b4ff",
                            width: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "dot-b"
                            ]
                        ],
                        {
                            fontSize: "10px",
                            color: "#ff6b00",
                            width: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "val-a"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#00b4ff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "val-b"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ff6b00",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "row-serve"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "180px",
                            height: "36px",
                            marginTop: "10px",
                            marginBottom: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "row-mode"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "180px",
                            height: "36px",
                            marginBottom: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "lbl-serve"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#555555",
                            width: "60px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "serve-toggle"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-team"
                            ]
                        ],
                        {
                            width: "54px",
                            height: "28px",
                            borderRadius: "14px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            marginLeft: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-active-a"
                            ]
                        ],
                        {
                            backgroundColor: "#003355",
                            color: "#00b4ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-active-b"
                            ]
                        ],
                        {
                            backgroundColor: "#331500",
                            color: "#ff6b00"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-inactive"
                            ]
                        ],
                        {
                            backgroundColor: "#1a1a1a",
                            color: "#444444"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-mode"
                            ]
                        ],
                        {
                            width: "114px",
                            height: "28px",
                            borderRadius: "14px",
                            fontSize: "12px",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-mode-gold"
                            ]
                        ],
                        {
                            backgroundColor: "#1a0d00",
                            color: "#ff6b00"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-mode-adv"
                            ]
                        ],
                        {
                            backgroundColor: "#001a33",
                            color: "#00b4ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-start"
                            ]
                        ],
                        {
                            width: "180px",
                            height: "44px",
                            borderRadius: "22px",
                            backgroundColor: "#00b4ff",
                            color: "#000000",
                            fontSize: "17px",
                            fontWeight: "bold",
                            marginTop: "16px"
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
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            firstServer: 'B',
                            scoringMode: 'golden',
                            modeLabel: 'Golden Point'
                        },
                        setServerA () {
                            this.firstServer = 'A';
                        },
                        setServerB () {
                            this.firstServer = 'B';
                        },
                        toggleMode () {
                            if ('golden' === this.scoringMode) {
                                this.scoringMode = 'advantage';
                                this.modeLabel = 'Adv (normal)';
                            } else {
                                this.scoringMode = 'golden';
                                this.modeLabel = 'Golden Point';
                            }
                        },
                        startMatch () {
                            _system.default.push({
                                uri: '/pages/score',
                                params: {
                                    teamA: 'Opponents',
                                    teamB: 'Us',
                                    maxSets: 3,
                                    scoringMode: this.scoringMode,
                                    firstServer: this.firstServer
                                }
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
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ],
                                value: "SCOREL"
                            }
                        }, []),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "row"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "dot-a"
                                    ],
                                    value: "●"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "val-a"
                                    ],
                                    value: "Opponents"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "row"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "dot-b"
                                    ],
                                    value: "●"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "val-b"
                                    ],
                                    value: "Us"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "row-serve"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "lbl-serve"
                                    ],
                                    value: "Serves first"
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "serve-toggle"
                                    ]
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "btn-team " + ("A" === _vm_.firstServer ? "btn-active-a" : "btn-inactive");
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        type: "button",
                                        value: "Opp",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.setServerA(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "btn-team " + ("B" === _vm_.firstServer ? "btn-active-b" : "btn-inactive");
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        type: "button",
                                        value: "Us",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.setServerB(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "row-mode"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "lbl-serve"
                                    ],
                                    value: "Mode"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "btn-mode " + ("golden" === _vm_.scoringMode ? "btn-mode-gold" : "btn-mode-adv");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    type: "button",
                                    value: function() {
                                        return _vm_.modeLabel;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.toggleMode(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("input", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn-start"
                                ],
                                type: "button",
                                value: "START",
                                events: {
                                    click: function(evt) {
                                        return _vm_.startMatch(evt);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXgvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TY29yZWwvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1Njb3JlbC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TY29yZWwvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTBcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cblxuICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj5TQ09SRUw8L3RleHQ+XG5cbiAgICA8IS0tIFRlYW0gbmFtZXMgKGZpeGVkKSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImRvdC1hXCI+4pePPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJ2YWwtYVwiPk9wcG9uZW50czwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImRvdC1iXCI+4pePPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJ2YWwtYlwiPlVzPC90ZXh0PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBXaG8gc2VydmVzIGZpcnN0IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3ctc2VydmVcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibGJsLXNlcnZlXCI+U2VydmVzIGZpcnN0PC90ZXh0PlxuICAgICAgPGRpdiBjbGFzcz1cInNlcnZlLXRvZ2dsZVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4tdGVhbSB7eyBmaXJzdFNlcnZlciA9PT0gJ0EnID8gJ2J0bi1hY3RpdmUtYScgOiAnYnRuLWluYWN0aXZlJyB9fVwiXG4gICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJPcHBcIiBvbmNsaWNrPVwic2V0U2VydmVyQVwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0bi10ZWFtIHt7IGZpcnN0U2VydmVyID09PSAnQicgPyAnYnRuLWFjdGl2ZS1iJyA6ICdidG4taW5hY3RpdmUnIH19XCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlVzXCIgb25jbGljaz1cInNldFNlcnZlckJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFNjb3JpbmcgbW9kZSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93LW1vZGVcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibGJsLXNlcnZlXCI+TW9kZTwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImJ0bi1tb2RlIHt7IHNjb3JpbmdNb2RlID09PSAnZ29sZGVuJyA/ICdidG4tbW9kZS1nb2xkJyA6ICdidG4tbW9kZS1hZHYnIH19XCJcbiAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7eyBtb2RlTGFiZWwgfX1cIiBvbmNsaWNrPVwidG9nZ2xlTW9kZVwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8aW5wdXQgY2xhc3M9XCJidG4tc3RhcnRcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTVEFSVFwiIG9uY2xpY2s9XCJzdGFydE1hdGNoXCIgLz5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLnBhZ2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMDBiNGZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICB9XG5cbiAgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgLmRvdC1hIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICMwMGI0ZmY7XG4gICAgd2lkdGg6IDE2cHg7XG4gIH1cblxuICAuZG90LWIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmNmIwMDtcbiAgICB3aWR0aDogMTZweDtcbiAgfVxuXG4gIC52YWwtYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDBiNGZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnZhbC1iIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZjZiMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAucm93LXNlcnZlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cblxuICAucm93LW1vZGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cblxuICAubGJsLXNlcnZlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cblxuICAuc2VydmUtdG9nZ2xlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gIH1cblxuICAuYnRuLXRlYW0ge1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICB9XG5cbiAgLmJ0bi1hY3RpdmUtYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM1NTtcbiAgICBjb2xvcjogIzAwYjRmZjtcbiAgfVxuXG4gIC5idG4tYWN0aXZlLWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzE1MDA7XG4gICAgY29sb3I6ICNmZjZiMDA7XG4gIH1cblxuICAuYnRuLWluYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICB9XG5cbiAgLmJ0bi1tb2RlIHtcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmJ0bi1tb2RlLWdvbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTBkMDA7XG4gICAgY29sb3I6ICNmZjZiMDA7XG4gIH1cblxuICAuYnRuLW1vZGUtYWR2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxYTMzO1xuICAgIGNvbG9yOiAjMDBiNGZmO1xuICB9XG5cbiAgLmJ0bi1zdGFydCB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGI0ZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByaXZhdGU6IHtcbiAgICAgIGZpcnN0U2VydmVyOiAnQicsXG4gICAgICBzY29yaW5nTW9kZTogJ2dvbGRlbicsXG4gICAgICBtb2RlTGFiZWw6ICAgJ0dvbGRlbiBQb2ludCdcbiAgICB9LFxuXG4gICAgc2V0U2VydmVyQSgpIHtcbiAgICAgIHRoaXMuZmlyc3RTZXJ2ZXIgPSAnQSdcbiAgICB9LFxuXG4gICAgc2V0U2VydmVyQigpIHtcbiAgICAgIHRoaXMuZmlyc3RTZXJ2ZXIgPSAnQidcbiAgICB9LFxuXG4gICAgdG9nZ2xlTW9kZSgpIHtcbiAgICAgIGlmICh0aGlzLnNjb3JpbmdNb2RlID09PSAnZ29sZGVuJykge1xuICAgICAgICB0aGlzLnNjb3JpbmdNb2RlID0gJ2FkdmFudGFnZSdcbiAgICAgICAgdGhpcy5tb2RlTGFiZWwgICA9ICdBZHYgKG5vcm1hbCknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjb3JpbmdNb2RlID0gJ2dvbGRlbidcbiAgICAgICAgdGhpcy5tb2RlTGFiZWwgICA9ICdHb2xkZW4gUG9pbnQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0TWF0Y2goKSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHVyaTogJy9wYWdlcy9zY29yZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHRlYW1BOiAgICAgICAnT3Bwb25lbnRzJyxcbiAgICAgICAgICB0ZWFtQjogICAgICAgJ1VzJyxcbiAgICAgICAgICBtYXhTZXRzOiAgICAgMyxcbiAgICAgICAgICBzY29yaW5nTW9kZTogdGhpcy5zY29yaW5nTW9kZSxcbiAgICAgICAgICBmaXJzdFNlcnZlcjogdGhpcy5maXJzdFNlcnZlclxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJmaXJzdFNlcnZlciIsInNjb3JpbmdNb2RlIiwibW9kZUxhYmVsIiwic2V0U2VydmVyQSIsInNldFNlcnZlckIiLCJ0b2dnbGVNb2RlIiwic3RhcnRNYXRjaCIsInJvdXRlciIsInB1c2giLCJ1cmkiLCJwYXJhbXMiLCJ0ZWFtQSIsInRlYW1CIiwibWF4U2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDOEt6QixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFBbUMsU0FBQUQsdUJBQUFFLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXBCO3dCQUNiRyxTQUFTOzRCQUNQQyxhQUFhOzRCQUNiQyxhQUFhOzRCQUNiQyxXQUFhO3dCQUNmO3dCQUVBQzs0QkFDRSxJQUFJLENBQUNILFdBQVcsR0FBRzt3QkFDckI7d0JBRUFJOzRCQUNFLElBQUksQ0FBQ0osV0FBVyxHQUFHO3dCQUNyQjt3QkFFQUs7NEJBQ0UsSUFBSSxBQUFxQixhQUFyQixJQUFJLENBQUNKLFdBQVcsRUFBZTtnQ0FDakMsSUFBSSxDQUFDQSxXQUFXLEdBQUc7Z0NBQ25CLElBQUksQ0FBQ0MsU0FBUyxHQUFLOzRCQUNyQixPQUFPO2dDQUNMLElBQUksQ0FBQ0QsV0FBVyxHQUFHO2dDQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBSzs0QkFDckI7d0JBQ0Y7d0JBRUFJOzRCQUNFQyxRQUFBQSxPQUFNLENBQUNDLElBQUksQ0FBQztnQ0FDVkMsS0FBSztnQ0FDTEMsUUFBUTtvQ0FDTkMsT0FBYTtvQ0FDYkMsT0FBYTtvQ0FDYkMsU0FBYTtvQ0FDYlosYUFBYSxJQUFJLENBQUNBLFdBQVc7b0NBQzdCRCxhQUFhLElBQUksQ0FBQ0EsV0FBVztnQ0FDL0I7NEJBQ0Y7d0JBQ0Y7b0JBQ0YifQ==