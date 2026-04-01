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
                var __webpack_modules__ = {
                    "./src/state/scoreState.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.addPoint = addPoint;
                        exports.buildResultParams = buildResultParams;
                        exports.initialState = initialState;
                        exports.refreshDisplay = refreshDisplay;
                        exports.saveSnapshot = saveSnapshot;
                        exports.undoPoint = undoPoint;
                        const POINTS = [
                            0,
                            15,
                            30,
                            40
                        ];
                        function initialState(firstServer) {
                            return {
                                ptA: '0',
                                ptB: '0',
                                idxA: 0,
                                idxB: 0,
                                gamesA: 0,
                                gamesB: 0,
                                setsA: 0,
                                setsB: 0,
                                deuceState: '',
                                serving: firstServer || 'B',
                                servingPlayer: '1',
                                serveCountA: 0,
                                serveCountB: 0,
                                statusMsg: '',
                                setHistory: [],
                                history: []
                            };
                        }
                        function refreshDisplay(state) {
                            const ds = state.deuceState;
                            if ('deuce' === ds) {
                                state.ptA = '40';
                                state.ptB = '40';
                                state.statusMsg = 'DEUCE';
                            } else if ('advA' === ds) {
                                state.ptA = 'ADV';
                                state.ptB = '40';
                                state.statusMsg = 'Adv A';
                            } else if ('advB' === ds) {
                                state.ptA = '40';
                                state.ptB = 'ADV';
                                state.statusMsg = 'Adv B';
                            } else {
                                state.ptA = String(POINTS[state.idxA]);
                                state.ptB = String(POINTS[state.idxB]);
                                state.statusMsg = '';
                            }
                            return state;
                        }
                        function saveSnapshot(state) {
                            state.history.push({
                                idxA: state.idxA,
                                idxB: state.idxB,
                                gamesA: state.gamesA,
                                gamesB: state.gamesB,
                                setsA: state.setsA,
                                setsB: state.setsB,
                                deuceState: state.deuceState,
                                serving: state.serving,
                                servingPlayer: state.servingPlayer,
                                serveCountA: state.serveCountA,
                                serveCountB: state.serveCountB,
                                setHistory: JSON.parse(JSON.stringify(state.setHistory))
                            });
                            if (state.history.length > 10) state.history.shift();
                            return state;
                        }
                        function undoPoint(state) {
                            if (0 === state.history.length) return refreshDisplay(state);
                            const prev = state.history.pop();
                            state.idxA = prev.idxA;
                            state.idxB = prev.idxB;
                            state.gamesA = prev.gamesA;
                            state.gamesB = prev.gamesB;
                            state.setsA = prev.setsA;
                            state.setsB = prev.setsB;
                            state.deuceState = prev.deuceState;
                            state.serving = prev.serving;
                            state.servingPlayer = prev.servingPlayer;
                            state.serveCountA = prev.serveCountA;
                            state.serveCountB = prev.serveCountB;
                            state.setHistory = prev.setHistory;
                            return refreshDisplay(state);
                        }
                        function rotateServe(state) {
                            state.serving = 'A' === state.serving ? 'B' : 'A';
                            if ('A' === state.serving) {
                                state.serveCountA = state.serveCountA + 1;
                                state.servingPlayer = state.serveCountA % 2 === 1 ? '1' : '2';
                            } else {
                                state.serveCountB = state.serveCountB + 1;
                                state.servingPlayer = state.serveCountB % 2 === 1 ? '1' : '2';
                            }
                            return state;
                        }
                        function checkSet(state, maxSets) {
                            const gA = state.gamesA;
                            const gB = state.gamesB;
                            let setWinner = null;
                            if (gA >= 6 && gA - gB >= 2 || 7 === gA) setWinner = 'A';
                            else if (gB >= 6 && gB - gA >= 2 || 7 === gB) setWinner = 'B';
                            if (!setWinner) return {
                                state: refreshDisplay(state),
                                matchWinner: null
                            };
                            state.setHistory.push({
                                a: gA,
                                b: gB
                            });
                            if ('A' === setWinner) state.setsA = state.setsA + 1;
                            else state.setsB = state.setsB + 1;
                            state.gamesA = 0;
                            state.gamesB = 0;
                            refreshDisplay(state);
                            const setsToWin = Math.ceil(maxSets / 2);
                            const matchWinner = state.setsA >= setsToWin || state.setsB >= setsToWin ? setWinner : null;
                            return {
                                state,
                                matchWinner
                            };
                        }
                        function winGame(state, team, maxSets) {
                            state.idxA = 0;
                            state.idxB = 0;
                            state.deuceState = '';
                            if ('A' === team) state.gamesA = state.gamesA + 1;
                            else state.gamesB = state.gamesB + 1;
                            rotateServe(state);
                            refreshDisplay(state);
                            return checkSet(state, maxSets);
                        }
                        function addPoint(state, team, scoringMode, maxSets) {
                            if ('deuce' === state.deuceState) {
                                state.deuceState = 'A' === team ? 'advA' : 'advB';
                                return {
                                    state: refreshDisplay(state),
                                    matchWinner: null
                                };
                            }
                            if ('advA' === state.deuceState) {
                                if ('A' === team) return winGame(state, 'A', maxSets);
                                state.deuceState = 'deuce';
                                return {
                                    state: refreshDisplay(state),
                                    matchWinner: null
                                };
                            }
                            if ('advB' === state.deuceState) {
                                if ('B' === team) return winGame(state, 'B', maxSets);
                                state.deuceState = 'deuce';
                                return {
                                    state: refreshDisplay(state),
                                    matchWinner: null
                                };
                            }
                            const cur = 'A' === team ? state.idxA : state.idxB;
                            const other = 'A' === team ? state.idxB : state.idxA;
                            if (3 === cur) {
                                if (3 === other) {
                                    if ('golden' === scoringMode) return winGame(state, team, maxSets);
                                    state.deuceState = 'deuce';
                                    return {
                                        state: refreshDisplay(state),
                                        matchWinner: null
                                    };
                                }
                                return winGame(state, team, maxSets);
                            }
                            if ('A' === team) state.idxA = cur + 1;
                            else state.idxB = cur + 1;
                            return {
                                state: refreshDisplay(state),
                                matchWinner: null
                            };
                        }
                        function buildResultParams(state, teamA, teamB, winner) {
                            return {
                                teamA: teamA,
                                teamB: teamB,
                                setsA: state.setsA,
                                setsB: state.setsB,
                                winner: 'A' === winner ? teamA : teamB,
                                setHistory: JSON.stringify(state.setHistory)
                            };
                        }
                    }
                };
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
                var __webpack_exports__ = {};
                (()=>{
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
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#000000"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "half-a"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "210px",
                                backgroundColor: "#00101a",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "half-b"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "210px",
                                backgroundColor: "#180800",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "half-inner"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "148px",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingLeft: "10px",
                                paddingRight: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "half-center"
                                ]
                            ],
                            {
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ball-vis"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#ffcc00",
                                width: "18px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ball-hid"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#000000",
                                width: "18px",
                                textAlign: "center"
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
                                fontSize: "11px",
                                color: "#336688",
                                textAlign: "center",
                                marginBottom: "2px"
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
                                fontSize: "11px",
                                color: "#885522",
                                textAlign: "center",
                                marginTop: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "score-a"
                                ]
                            ],
                            {
                                fontSize: "64px",
                                fontWeight: "bold",
                                color: "#00b4ff",
                                height: "72px",
                                width: "110px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "score-b"
                                ]
                            ],
                            {
                                fontSize: "64px",
                                fontWeight: "bold",
                                color: "#ff6b00",
                                height: "72px",
                                width: "110px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sets-lbl-a"
                                ]
                            ],
                            {
                                fontSize: "11px",
                                color: "#336688",
                                textAlign: "center",
                                height: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sets-lbl-b"
                                ]
                            ],
                            {
                                fontSize: "11px",
                                color: "#885522",
                                textAlign: "center",
                                height: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "net-bar"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "28px",
                                backgroundColor: "#0d0d0d",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "status"
                                ]
                            ],
                            {
                                fontSize: "11px",
                                color: "#ffcc00",
                                width: "52px",
                                textAlign: "right",
                                marginRight: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "games-a"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#00b4ff",
                                width: "16px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "games-sep"
                                ]
                            ],
                            {
                                fontSize: "14px",
                                color: "#333333",
                                width: "10px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "games-b"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#ff6b00",
                                width: "16px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "undo-bar"
                                ]
                            ],
                            {
                                width: "100%",
                                height: "36px",
                                backgroundColor: "#080300",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btn-undo"
                                ]
                            ],
                            {
                                width: "80px",
                                height: "26px",
                                borderRadius: "13px",
                                backgroundColor: "#1a0d00",
                                color: "#ff6b00",
                                fontSize: "13px",
                                marginRight: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btn-end"
                                ]
                            ],
                            {
                                width: "50px",
                                height: "26px",
                                borderRadius: "13px",
                                backgroundColor: "#1a0000",
                                color: "#ff4444",
                                fontSize: "13px"
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
                        var _scoreState = __webpack_require__("./src/state/scoreState.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            protected: {
                                teamA: 'Opponents',
                                teamB: 'Us',
                                maxSets: 3,
                                scoringMode: 'golden',
                                firstServer: 'B'
                            },
                            private: {
                                ptA: '0',
                                ptB: '0',
                                statusMsg: '',
                                gamesA: 0,
                                gamesB: 0,
                                setsA: 0,
                                setsB: 0,
                                serving: 'B',
                                servingPlayer: '1',
                                _state: null
                            },
                            onInit () {
                                this._state = (0, _scoreState.initialState)(this.firstServer);
                                this._sync();
                            },
                            _sync () {
                                const s = this._state;
                                this.ptA = s.ptA;
                                this.ptB = s.ptB;
                                this.statusMsg = s.statusMsg;
                                this.gamesA = s.gamesA;
                                this.gamesB = s.gamesB;
                                this.setsA = s.setsA;
                                this.setsB = s.setsB;
                                this.serving = s.serving;
                                this.servingPlayer = s.servingPlayer;
                            },
                            pointA () {
                                (0, _scoreState.saveSnapshot)(this._state);
                                const { state, matchWinner } = (0, _scoreState.addPoint)(this._state, 'A', this.scoringMode, this.maxSets);
                                this._state = state;
                                this._sync();
                                if (matchWinner) this._finish(matchWinner);
                            },
                            pointB () {
                                (0, _scoreState.saveSnapshot)(this._state);
                                const { state, matchWinner } = (0, _scoreState.addPoint)(this._state, 'B', this.scoringMode, this.maxSets);
                                this._state = state;
                                this._sync();
                                if (matchWinner) this._finish(matchWinner);
                            },
                            undoPoint () {
                                this._state = (0, _scoreState.undoPoint)(this._state);
                                this._sync();
                            },
                            _finish (winner) {
                                _system.default.push({
                                    uri: '/pages/result',
                                    params: (0, _scoreState.buildResultParams)(this._state, this.teamA, this.teamB, winner)
                                });
                            },
                            endMatch () {
                                const winner = this.setsA > this.setsB ? 'A' : this.setsB > this.setsA ? 'B' : 'A';
                                const params = (0, _scoreState.buildResultParams)(this._state, this.teamA, this.teamB, winner);
                                params.winner = this.setsA > this.setsB ? this.teamA : this.setsB > this.setsA ? this.teamB : 'No winner';
                                _system.default.push({
                                    uri: '/pages/result',
                                    params
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
                                        "half-a"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.pointA(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "half-inner"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: function() {
                                                const $classValue$ = "A" === _vm_.serving && "1" === _vm_.servingPlayer ? "ball-vis" : "ball-hid";
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            value: "●"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "half-center"
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
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "score-a"
                                                ],
                                                value: function() {
                                                    return _vm_.ptA;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sets-lbl-a"
                                                ],
                                                value: function() {
                                                    return "Won: " + _vm_.setsA;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: function() {
                                                const $classValue$ = "A" === _vm_.serving && "2" === _vm_.servingPlayer ? "ball-vis" : "ball-hid";
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            value: "●"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "net-bar"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "status"
                                        ],
                                        value: function() {
                                            return _vm_.statusMsg;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "games-a"
                                        ],
                                        value: function() {
                                            return _vm_.gamesA;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "games-sep"
                                        ],
                                        value: "-"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "games-b"
                                        ],
                                        value: function() {
                                            return _vm_.gamesB;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "half-b"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.pointB(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "half-inner"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: function() {
                                                const $classValue$ = "B" === _vm_.serving && "2" === _vm_.servingPlayer ? "ball-vis" : "ball-hid";
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            value: "●"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "half-center"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sets-lbl-b"
                                                ],
                                                value: function() {
                                                    return "Won: " + _vm_.setsB;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "score-b"
                                                ],
                                                value: function() {
                                                    return _vm_.ptB;
                                                }
                                            }
                                        }, []),
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
                                                const $classValue$ = "B" === _vm_.serving && "1" === _vm_.servingPlayer ? "ball-vis" : "ball-hid";
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            value: "●"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "undo-bar"
                                    ]
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-undo"
                                        ],
                                        type: "button",
                                        value: "UNDO",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.undoPoint(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-end"
                                        ],
                                        type: "button",
                                        value: "END",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.endMatch(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ])
                        ]);
                    };
                    $app_exports$['entry'] = function($app_exports$) {
                        $app_script$({}, $app_exports$, $app_require$1);
                        $app_exports$.default.template = $app_template$;
                        $app_exports$.default.style = $app_style$;
                    };
                })();
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2NvcmUvc2NvcmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TY29yZWwvc3JjL3N0YXRlL3Njb3JlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vU2NvcmVsL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TY29yZWwvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2NvcmVsL3NyYy9wYWdlcy9zY29yZS9zY29yZS51eCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHNjb3JlU3RhdGUuanNcbiAqIFB1cmUgZ2FtZSBsb2dpYyBmb3IgU2NvcmVsIHBhZGVsIHRyYWNrZXIuXG4gKiBBbGwgZnVuY3Rpb25zIHJlY2VpdmUgdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0IGFuZCByZXR1cm5cbiAqIGEgbmV3IChtdXRhdGVkKSBzdGF0ZSDigJQgbm8gVUkgb3IgZnJhbWV3b3JrIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5jb25zdCBQT0lOVFMgPSBbMCwgMTUsIDMwLCA0MF1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBJbml0aWFsIHN0YXRlIGZhY3Rvcnlcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbFN0YXRlKGZpcnN0U2VydmVyKSB7XG4gIHJldHVybiB7XG4gICAgcHRBOiAgICAgICAgICAgJzAnLFxuICAgIHB0QjogICAgICAgICAgICcwJyxcbiAgICBpZHhBOiAgICAgICAgICAwLFxuICAgIGlkeEI6ICAgICAgICAgIDAsXG4gICAgZ2FtZXNBOiAgICAgICAgMCxcbiAgICBnYW1lc0I6ICAgICAgICAwLFxuICAgIHNldHNBOiAgICAgICAgIDAsXG4gICAgc2V0c0I6ICAgICAgICAgMCxcbiAgICBkZXVjZVN0YXRlOiAgICAnJyxcbiAgICBzZXJ2aW5nOiAgICAgICBmaXJzdFNlcnZlciB8fCAnQicsXG4gICAgc2VydmluZ1BsYXllcjogJzEnLFxuICAgIHNlcnZlQ291bnRBOiAgIDAsXG4gICAgc2VydmVDb3VudEI6ICAgMCxcbiAgICBzdGF0dXNNc2c6ICAgICAnJyxcbiAgICBzZXRIaXN0b3J5OiAgICBbXSxcbiAgICBoaXN0b3J5OiAgICAgICBbXVxuICB9XG59XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gRGlzcGxheSByZWZyZXNoXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hEaXNwbGF5KHN0YXRlKSB7XG4gIGNvbnN0IGRzID0gc3RhdGUuZGV1Y2VTdGF0ZVxuICBpZiAoZHMgPT09ICdkZXVjZScpIHtcbiAgICBzdGF0ZS5wdEEgICAgICAgPSAnNDAnXG4gICAgc3RhdGUucHRCICAgICAgID0gJzQwJ1xuICAgIHN0YXRlLnN0YXR1c01zZyA9ICdERVVDRSdcbiAgfSBlbHNlIGlmIChkcyA9PT0gJ2FkdkEnKSB7XG4gICAgc3RhdGUucHRBICAgICAgID0gJ0FEVidcbiAgICBzdGF0ZS5wdEIgICAgICAgPSAnNDAnXG4gICAgc3RhdGUuc3RhdHVzTXNnID0gJ0FkdiBBJ1xuICB9IGVsc2UgaWYgKGRzID09PSAnYWR2QicpIHtcbiAgICBzdGF0ZS5wdEEgICAgICAgPSAnNDAnXG4gICAgc3RhdGUucHRCICAgICAgID0gJ0FEVidcbiAgICBzdGF0ZS5zdGF0dXNNc2cgPSAnQWR2IEInXG4gIH0gZWxzZSB7XG4gICAgc3RhdGUucHRBICAgICAgID0gU3RyaW5nKFBPSU5UU1tzdGF0ZS5pZHhBXSlcbiAgICBzdGF0ZS5wdEIgICAgICAgPSBTdHJpbmcoUE9JTlRTW3N0YXRlLmlkeEJdKVxuICAgIHN0YXRlLnN0YXR1c01zZyA9ICcnXG4gIH1cbiAgcmV0dXJuIHN0YXRlXG59XG5cbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuLy8gU25hcHNob3QgKHVuZG8pXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTbmFwc2hvdChzdGF0ZSkge1xuICBzdGF0ZS5oaXN0b3J5LnB1c2goe1xuICAgIGlkeEE6ICAgICAgICAgIHN0YXRlLmlkeEEsXG4gICAgaWR4QjogICAgICAgICAgc3RhdGUuaWR4QixcbiAgICBnYW1lc0E6ICAgICAgICBzdGF0ZS5nYW1lc0EsXG4gICAgZ2FtZXNCOiAgICAgICAgc3RhdGUuZ2FtZXNCLFxuICAgIHNldHNBOiAgICAgICAgIHN0YXRlLnNldHNBLFxuICAgIHNldHNCOiAgICAgICAgIHN0YXRlLnNldHNCLFxuICAgIGRldWNlU3RhdGU6ICAgIHN0YXRlLmRldWNlU3RhdGUsXG4gICAgc2VydmluZzogICAgICAgc3RhdGUuc2VydmluZyxcbiAgICBzZXJ2aW5nUGxheWVyOiBzdGF0ZS5zZXJ2aW5nUGxheWVyLFxuICAgIHNlcnZlQ291bnRBOiAgIHN0YXRlLnNlcnZlQ291bnRBLFxuICAgIHNlcnZlQ291bnRCOiAgIHN0YXRlLnNlcnZlQ291bnRCLFxuICAgIHNldEhpc3Rvcnk6ICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUuc2V0SGlzdG9yeSkpXG4gIH0pXG4gIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA+IDEwKSB7XG4gICAgc3RhdGUuaGlzdG9yeS5zaGlmdCgpXG4gIH1cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRvUG9pbnQoc3RhdGUpIHtcbiAgaWYgKHN0YXRlLmhpc3RvcnkubGVuZ3RoID09PSAwKSByZXR1cm4gcmVmcmVzaERpc3BsYXkoc3RhdGUpXG4gIGNvbnN0IHByZXYgPSBzdGF0ZS5oaXN0b3J5LnBvcCgpXG4gIHN0YXRlLmlkeEEgICAgICAgICAgPSBwcmV2LmlkeEFcbiAgc3RhdGUuaWR4QiAgICAgICAgICA9IHByZXYuaWR4QlxuICBzdGF0ZS5nYW1lc0EgICAgICAgID0gcHJldi5nYW1lc0FcbiAgc3RhdGUuZ2FtZXNCICAgICAgICA9IHByZXYuZ2FtZXNCXG4gIHN0YXRlLnNldHNBICAgICAgICAgPSBwcmV2LnNldHNBXG4gIHN0YXRlLnNldHNCICAgICAgICAgPSBwcmV2LnNldHNCXG4gIHN0YXRlLmRldWNlU3RhdGUgICAgPSBwcmV2LmRldWNlU3RhdGVcbiAgc3RhdGUuc2VydmluZyAgICAgICA9IHByZXYuc2VydmluZ1xuICBzdGF0ZS5zZXJ2aW5nUGxheWVyID0gcHJldi5zZXJ2aW5nUGxheWVyXG4gIHN0YXRlLnNlcnZlQ291bnRBICAgPSBwcmV2LnNlcnZlQ291bnRBXG4gIHN0YXRlLnNlcnZlQ291bnRCICAgPSBwcmV2LnNlcnZlQ291bnRCXG4gIHN0YXRlLnNldEhpc3RvcnkgICAgPSBwcmV2LnNldEhpc3RvcnlcbiAgcmV0dXJuIHJlZnJlc2hEaXNwbGF5KHN0YXRlKVxufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIFNlcnZlIHJvdGF0aW9uXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuZnVuY3Rpb24gcm90YXRlU2VydmUoc3RhdGUpIHtcbiAgc3RhdGUuc2VydmluZyA9IHN0YXRlLnNlcnZpbmcgPT09ICdBJyA/ICdCJyA6ICdBJ1xuICBpZiAoc3RhdGUuc2VydmluZyA9PT0gJ0EnKSB7XG4gICAgc3RhdGUuc2VydmVDb3VudEEgICA9IHN0YXRlLnNlcnZlQ291bnRBICsgMVxuICAgIHN0YXRlLnNlcnZpbmdQbGF5ZXIgPSAoc3RhdGUuc2VydmVDb3VudEEgJSAyID09PSAxKSA/ICcxJyA6ICcyJ1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLnNlcnZlQ291bnRCICAgPSBzdGF0ZS5zZXJ2ZUNvdW50QiArIDFcbiAgICBzdGF0ZS5zZXJ2aW5nUGxheWVyID0gKHN0YXRlLnNlcnZlQ291bnRCICUgMiA9PT0gMSkgPyAnMScgOiAnMidcbiAgfVxuICByZXR1cm4gc3RhdGVcbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBTZXQgY2hlY2sg4oCUIHJldHVybnMgeyBzdGF0ZSwgbWF0Y2hXaW5uZXIgfVxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbmZ1bmN0aW9uIGNoZWNrU2V0KHN0YXRlLCBtYXhTZXRzKSB7XG4gIGNvbnN0IGdBID0gc3RhdGUuZ2FtZXNBXG4gIGNvbnN0IGdCID0gc3RhdGUuZ2FtZXNCXG4gIGxldCBzZXRXaW5uZXIgPSBudWxsXG5cbiAgaWYgKChnQSA+PSA2ICYmIGdBIC0gZ0IgPj0gMikgfHwgZ0EgPT09IDcpIHsgc2V0V2lubmVyID0gJ0EnIH1cbiAgZWxzZSBpZiAoKGdCID49IDYgJiYgZ0IgLSBnQSA+PSAyKSB8fCBnQiA9PT0gNykgeyBzZXRXaW5uZXIgPSAnQicgfVxuXG4gIGlmICghc2V0V2lubmVyKSByZXR1cm4geyBzdGF0ZTogcmVmcmVzaERpc3BsYXkoc3RhdGUpLCBtYXRjaFdpbm5lcjogbnVsbCB9XG5cbiAgc3RhdGUuc2V0SGlzdG9yeS5wdXNoKHsgYTogZ0EsIGI6IGdCIH0pXG5cbiAgaWYgKHNldFdpbm5lciA9PT0gJ0EnKSB7IHN0YXRlLnNldHNBID0gc3RhdGUuc2V0c0EgKyAxIH1cbiAgZWxzZSAgICAgICAgICAgICAgICAgICB7IHN0YXRlLnNldHNCID0gc3RhdGUuc2V0c0IgKyAxIH1cblxuICBzdGF0ZS5nYW1lc0EgPSAwXG4gIHN0YXRlLmdhbWVzQiA9IDBcbiAgcmVmcmVzaERpc3BsYXkoc3RhdGUpXG5cbiAgY29uc3Qgc2V0c1RvV2luID0gTWF0aC5jZWlsKG1heFNldHMgLyAyKVxuICBjb25zdCBtYXRjaFdpbm5lciA9IChzdGF0ZS5zZXRzQSA+PSBzZXRzVG9XaW4gfHwgc3RhdGUuc2V0c0IgPj0gc2V0c1RvV2luKVxuICAgID8gc2V0V2lubmVyXG4gICAgOiBudWxsXG5cbiAgcmV0dXJuIHsgc3RhdGUsIG1hdGNoV2lubmVyIH1cbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBXaW4gZ2FtZVxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbmZ1bmN0aW9uIHdpbkdhbWUoc3RhdGUsIHRlYW0sIG1heFNldHMpIHtcbiAgc3RhdGUuaWR4QSAgICAgICA9IDBcbiAgc3RhdGUuaWR4QiAgICAgICA9IDBcbiAgc3RhdGUuZGV1Y2VTdGF0ZSA9ICcnXG5cbiAgaWYgKHRlYW0gPT09ICdBJykgeyBzdGF0ZS5nYW1lc0EgPSBzdGF0ZS5nYW1lc0EgKyAxIH1cbiAgZWxzZSAgICAgICAgICAgICAgeyBzdGF0ZS5nYW1lc0IgPSBzdGF0ZS5nYW1lc0IgKyAxIH1cblxuICByb3RhdGVTZXJ2ZShzdGF0ZSlcbiAgcmVmcmVzaERpc3BsYXkoc3RhdGUpXG5cbiAgcmV0dXJuIGNoZWNrU2V0KHN0YXRlLCBtYXhTZXRzKVxufVxuXG4vLyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbi8vIEFkZCBwb2ludCDigJQgbWFpbiBlbnRyeSBwb2ludFxuLy8gUmV0dXJucyB7IHN0YXRlLCBtYXRjaFdpbm5lciB9XG4vLyBtYXRjaFdpbm5lciBpcyAnQScsICdCJywgb3IgbnVsbFxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludChzdGF0ZSwgdGVhbSwgc2NvcmluZ01vZGUsIG1heFNldHMpIHtcbiAgLy8gRGV1Y2UgLyBhZHZhbnRhZ2Ugc3RhdGVzIChvbmx5IGluIGFkdmFudGFnZSBtb2RlKVxuICBpZiAoc3RhdGUuZGV1Y2VTdGF0ZSA9PT0gJ2RldWNlJykge1xuICAgIHN0YXRlLmRldWNlU3RhdGUgPSB0ZWFtID09PSAnQScgPyAnYWR2QScgOiAnYWR2QidcbiAgICByZXR1cm4geyBzdGF0ZTogcmVmcmVzaERpc3BsYXkoc3RhdGUpLCBtYXRjaFdpbm5lcjogbnVsbCB9XG4gIH1cbiAgaWYgKHN0YXRlLmRldWNlU3RhdGUgPT09ICdhZHZBJykge1xuICAgIGlmICh0ZWFtID09PSAnQScpIHJldHVybiB3aW5HYW1lKHN0YXRlLCAnQScsIG1heFNldHMpXG4gICAgc3RhdGUuZGV1Y2VTdGF0ZSA9ICdkZXVjZSdcbiAgICByZXR1cm4geyBzdGF0ZTogcmVmcmVzaERpc3BsYXkoc3RhdGUpLCBtYXRjaFdpbm5lcjogbnVsbCB9XG4gIH1cbiAgaWYgKHN0YXRlLmRldWNlU3RhdGUgPT09ICdhZHZCJykge1xuICAgIGlmICh0ZWFtID09PSAnQicpIHJldHVybiB3aW5HYW1lKHN0YXRlLCAnQicsIG1heFNldHMpXG4gICAgc3RhdGUuZGV1Y2VTdGF0ZSA9ICdkZXVjZSdcbiAgICByZXR1cm4geyBzdGF0ZTogcmVmcmVzaERpc3BsYXkoc3RhdGUpLCBtYXRjaFdpbm5lcjogbnVsbCB9XG4gIH1cblxuICAvLyBOb3JtYWwgcG9pbnRcbiAgY29uc3QgY3VyICAgPSB0ZWFtID09PSAnQScgPyBzdGF0ZS5pZHhBIDogc3RhdGUuaWR4QlxuICBjb25zdCBvdGhlciA9IHRlYW0gPT09ICdBJyA/IHN0YXRlLmlkeEIgOiBzdGF0ZS5pZHhBXG5cbiAgaWYgKGN1ciA9PT0gMykge1xuICAgIGlmIChvdGhlciA9PT0gMykge1xuICAgICAgaWYgKHNjb3JpbmdNb2RlID09PSAnZ29sZGVuJykge1xuICAgICAgICByZXR1cm4gd2luR2FtZShzdGF0ZSwgdGVhbSwgbWF4U2V0cylcbiAgICAgIH1cbiAgICAgIHN0YXRlLmRldWNlU3RhdGUgPSAnZGV1Y2UnXG4gICAgICByZXR1cm4geyBzdGF0ZTogcmVmcmVzaERpc3BsYXkoc3RhdGUpLCBtYXRjaFdpbm5lcjogbnVsbCB9XG4gICAgfVxuICAgIHJldHVybiB3aW5HYW1lKHN0YXRlLCB0ZWFtLCBtYXhTZXRzKVxuICB9XG5cbiAgaWYgKHRlYW0gPT09ICdBJykgeyBzdGF0ZS5pZHhBID0gY3VyICsgMSB9XG4gIGVsc2UgICAgICAgICAgICAgIHsgc3RhdGUuaWR4QiA9IGN1ciArIDEgfVxuXG4gIHJldHVybiB7IHN0YXRlOiByZWZyZXNoRGlzcGxheShzdGF0ZSksIG1hdGNoV2lubmVyOiBudWxsIH1cbn1cblxuLy8g4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4vLyBCdWlsZCByZXN1bHQgcGFyYW1zIGZvciByb3V0ZXJcbi8vIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSZXN1bHRQYXJhbXMoc3RhdGUsIHRlYW1BLCB0ZWFtQiwgd2lubmVyKSB7XG4gIHJldHVybiB7XG4gICAgdGVhbUE6ICAgICAgdGVhbUEsXG4gICAgdGVhbUI6ICAgICAgdGVhbUIsXG4gICAgc2V0c0E6ICAgICAgc3RhdGUuc2V0c0EsXG4gICAgc2V0c0I6ICAgICAgc3RhdGUuc2V0c0IsXG4gICAgd2lubmVyOiAgICAgd2lubmVyID09PSAnQScgPyB0ZWFtQSA6IHRlYW1CLFxuICAgIHNldEhpc3Rvcnk6IEpTT04uc3RyaW5naWZ5KHN0YXRlLnNldEhpc3RvcnkpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTBcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMFwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cblxuICAgIDwhLS0gVE9QIEhBTEY6IFRlYW0gQSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiaGFsZi1hXCIgb25jbGljaz1cInBvaW50QVwiPlxuXG4gICAgICA8IS0tIEZ1bGwtd2lkdGggcm93OiBiYWxsLXAyIHwgY29udGVudCB8IGJhbGwtcDEgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGFsZi1pbm5lclwiPlxuXG4gICAgICAgIDwhLS0gTGVmdCBiYWxsOiBwbGF5ZXIgMSAobWlycm9yZWQgZm9yIHRvcCB0ZWFtKSAtLT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ7eyBzZXJ2aW5nID09PSAnQScgJiYgc2VydmluZ1BsYXllciA9PT0gJzEnID8gJ2JhbGwtdmlzJyA6ICdiYWxsLWhpZCcgfX1cIj7il488L3RleHQ+XG5cbiAgICAgICAgPCEtLSBDZW50cmUgY29udGVudCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhhbGYtY2VudGVyXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0ZWFtLWxibC1hXCI+e3sgdGVhbUEgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzY29yZS1hXCI+e3sgcHRBIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2V0cy1sYmwtYVwiPldvbjoge3sgc2V0c0EgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gUmlnaHQgYmFsbDogcGxheWVyIDIgKG1pcnJvcmVkIGZvciB0b3AgdGVhbSkgLS0+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwie3sgc2VydmluZyA9PT0gJ0EnICYmIHNlcnZpbmdQbGF5ZXIgPT09ICcyJyA/ICdiYWxsLXZpcycgOiAnYmFsbC1oaWQnIH19XCI+4pePPC90ZXh0PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gTkVUIEJBUjogc3RhdHVzICsgZ2FtZXMgc2NvcmUgLS0+XG4gICAgPGRpdiBjbGFzcz1cIm5ldC1iYXJcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwic3RhdHVzXCI+e3sgc3RhdHVzTXNnIH19PC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJnYW1lcy1hXCI+e3sgZ2FtZXNBIH19PC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJnYW1lcy1zZXBcIj4tPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJnYW1lcy1iXCI+e3sgZ2FtZXNCIH19PC90ZXh0PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBCT1RUT00gSEFMRjogVGVhbSBCIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJoYWxmLWJcIiBvbmNsaWNrPVwicG9pbnRCXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJoYWxmLWlubmVyXCI+XG5cbiAgICAgICAgPCEtLSBMZWZ0IGJhbGw6IHBsYXllciAyIC0tPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInt7IHNlcnZpbmcgPT09ICdCJyAmJiBzZXJ2aW5nUGxheWVyID09PSAnMicgPyAnYmFsbC12aXMnIDogJ2JhbGwtaGlkJyB9fVwiPuKXjzwvdGV4dD5cblxuICAgICAgICA8IS0tIENlbnRyZSBjb250ZW50IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZi1jZW50ZXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInNldHMtbGJsLWJcIj5Xb246IHt7IHNldHNCIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2NvcmUtYlwiPnt7IHB0QiB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRlYW0tbGJsLWJcIj57eyB0ZWFtQiB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBSaWdodCBiYWxsOiBwbGF5ZXIgMSAtLT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ7eyBzZXJ2aW5nID09PSAnQicgJiYgc2VydmluZ1BsYXllciA9PT0gJzEnID8gJ2JhbGwtdmlzJyA6ICdiYWxsLWhpZCcgfX1cIj7il488L3RleHQ+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBVTkRPIEJBUiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwidW5kby1iYXJcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImJ0bi11bmRvXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiVU5ET1wiIG9uY2xpY2s9XCJ1bmRvUG9pbnRcIiAvPlxuICAgICAgPGlucHV0IGNsYXNzPVwiYnRuLWVuZFwiICB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJFTkRcIiAgb25jbGljaz1cImVuZE1hdGNoXCIgIC8+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5wYWdlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgLyog4pSA4pSAIEhhbHZlcyDilIDilIAgKi9cbiAgLmhhbGYtYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxMDFhO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaGFsZi1iIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODA4MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC8qIFJvdyB0aGF0IHNwYW5zIGZ1bGwgd2lkdGg6IGJhbGwgfCBjZW50ZXIgfCBiYWxsICovXG4gIC5oYWxmLWlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAvKiBDZW50cmUgY29sdW1uICovXG4gIC5oYWxmLWNlbnRlciB7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAvKiDilIDilIAgQmFsbCBzZXJ2ZSBpY29ucyDilIDilIAgKi9cbiAgLmJhbGwtdmlzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmNjMDA7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJhbGwtaGlkIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLyog4pSA4pSAIFRlYW0gbGFiZWxzIOKUgOKUgCAqL1xuICAudGVhbS1sYmwtYSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjMzM2Njg4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cblxuICAudGVhbS1sYmwtYiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjODg1NTIyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cblxuICAvKiDilIDilIAgQmlnIHNjb3JlIOKUgOKUgCAqL1xuICAuc2NvcmUtYSB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDBiNGZmO1xuICAgIGhlaWdodDogNzJweDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNjb3JlLWIge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmNmIwMDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC8qIOKUgOKUgCBTZXRzIHdvbiBsYWJlbCBpbnNpZGUgZWFjaCBoYWxmIOKUgOKUgCAqL1xuICAuc2V0cy1sYmwtYSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjMzM2Njg4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gIH1cblxuICAuc2V0cy1sYmwtYiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjODg1NTIyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gIH1cblxuICAvKiDilIDilIAgTmV0IGJhciDigJQgbm93IHNob3dzIGdhbWVzIOKUgOKUgCAqL1xuICAubmV0LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDBkMGQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnN0YXR1cyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjZmZjYzAwO1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgLmdhbWVzLWEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwYjRmZjtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZ2FtZXMtc2VwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmdhbWVzLWIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmNmIwMDtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAvKiDilIDilIAgVW5kbyBiYXIg4pSA4pSAICovXG4gIC51bmRvLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODAzMDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmJ0bi11bmRvIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEwZDAwO1xuICAgIGNvbG9yOiAjZmY2YjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAuYnRuLWVuZCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMDAwMDtcbiAgICBjb2xvcjogI2ZmNDQ0NDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInXG4gIGltcG9ydCB7XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNhdmVTbmFwc2hvdCxcbiAgICB1bmRvUG9pbnQsXG4gICAgYWRkUG9pbnQsXG4gICAgYnVpbGRSZXN1bHRQYXJhbXNcbiAgfSBmcm9tICcuLi8uLi9zdGF0ZS9zY29yZVN0YXRlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm90ZWN0ZWQ6IHtcbiAgICAgIHRlYW1BOiAgICAgICAnT3Bwb25lbnRzJyxcbiAgICAgIHRlYW1COiAgICAgICAnVXMnLFxuICAgICAgbWF4U2V0czogICAgIDMsXG4gICAgICBzY29yaW5nTW9kZTogJ2dvbGRlbicsXG4gICAgICBmaXJzdFNlcnZlcjogJ0InXG4gICAgfSxcblxuICAgIHByaXZhdGU6IHtcbiAgICAgIC8vIERpc3BsYXkgc3RyaW5ncyAoYm91bmQgaW4gdGVtcGxhdGUpXG4gICAgICBwdEE6ICAgICAgICAgICAnMCcsXG4gICAgICBwdEI6ICAgICAgICAgICAnMCcsXG4gICAgICBzdGF0dXNNc2c6ICAgICAnJyxcbiAgICAgIGdhbWVzQTogICAgICAgIDAsXG4gICAgICBnYW1lc0I6ICAgICAgICAwLFxuICAgICAgc2V0c0E6ICAgICAgICAgMCxcbiAgICAgIHNldHNCOiAgICAgICAgIDAsXG4gICAgICBzZXJ2aW5nOiAgICAgICAnQicsXG4gICAgICBzZXJ2aW5nUGxheWVyOiAnMScsXG4gICAgICAvLyBJbnRlcm5hbCBnYW1lIHN0YXRlIChub3QgYm91bmQgaW4gdGVtcGxhdGUpXG4gICAgICBfc3RhdGU6IG51bGxcbiAgICB9LFxuXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBpbml0aWFsU3RhdGUodGhpcy5maXJzdFNlcnZlcilcbiAgICAgIHRoaXMuX3N5bmMoKVxuICAgIH0sXG5cbiAgICAvLyBDb3B5IGxvZ2ljIHN0YXRlIGludG8gcmVhY3RpdmUgcHJvcGVydGllcyBzbyB0aGUgVUkgdXBkYXRlc1xuICAgIF9zeW5jKCkge1xuICAgICAgY29uc3QgcyA9IHRoaXMuX3N0YXRlXG4gICAgICB0aGlzLnB0QSAgICAgICAgICAgPSBzLnB0QVxuICAgICAgdGhpcy5wdEIgICAgICAgICAgID0gcy5wdEJcbiAgICAgIHRoaXMuc3RhdHVzTXNnICAgICA9IHMuc3RhdHVzTXNnXG4gICAgICB0aGlzLmdhbWVzQSAgICAgICAgPSBzLmdhbWVzQVxuICAgICAgdGhpcy5nYW1lc0IgICAgICAgID0gcy5nYW1lc0JcbiAgICAgIHRoaXMuc2V0c0EgICAgICAgICA9IHMuc2V0c0FcbiAgICAgIHRoaXMuc2V0c0IgICAgICAgICA9IHMuc2V0c0JcbiAgICAgIHRoaXMuc2VydmluZyAgICAgICA9IHMuc2VydmluZ1xuICAgICAgdGhpcy5zZXJ2aW5nUGxheWVyID0gcy5zZXJ2aW5nUGxheWVyXG4gICAgfSxcblxuICAgIHBvaW50QSgpIHtcbiAgICAgIHNhdmVTbmFwc2hvdCh0aGlzLl9zdGF0ZSlcbiAgICAgIGNvbnN0IHsgc3RhdGUsIG1hdGNoV2lubmVyIH0gPSBhZGRQb2ludCh0aGlzLl9zdGF0ZSwgJ0EnLCB0aGlzLnNjb3JpbmdNb2RlLCB0aGlzLm1heFNldHMpXG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlXG4gICAgICB0aGlzLl9zeW5jKClcbiAgICAgIGlmIChtYXRjaFdpbm5lcikgdGhpcy5fZmluaXNoKG1hdGNoV2lubmVyKVxuICAgIH0sXG5cbiAgICBwb2ludEIoKSB7XG4gICAgICBzYXZlU25hcHNob3QodGhpcy5fc3RhdGUpXG4gICAgICBjb25zdCB7IHN0YXRlLCBtYXRjaFdpbm5lciB9ID0gYWRkUG9pbnQodGhpcy5fc3RhdGUsICdCJywgdGhpcy5zY29yaW5nTW9kZSwgdGhpcy5tYXhTZXRzKVxuICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZVxuICAgICAgdGhpcy5fc3luYygpXG4gICAgICBpZiAobWF0Y2hXaW5uZXIpIHRoaXMuX2ZpbmlzaChtYXRjaFdpbm5lcilcbiAgICB9LFxuXG4gICAgdW5kb1BvaW50KCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSB1bmRvUG9pbnQodGhpcy5fc3RhdGUpXG4gICAgICB0aGlzLl9zeW5jKClcbiAgICB9LFxuXG4gICAgX2ZpbmlzaCh3aW5uZXIpIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgdXJpOiAnL3BhZ2VzL3Jlc3VsdCcsXG4gICAgICAgIHBhcmFtczogYnVpbGRSZXN1bHRQYXJhbXModGhpcy5fc3RhdGUsIHRoaXMudGVhbUEsIHRoaXMudGVhbUIsIHdpbm5lcilcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGVuZE1hdGNoKCkge1xuICAgICAgY29uc3Qgd2lubmVyID0gdGhpcy5zZXRzQSA+IHRoaXMuc2V0c0IgPyAnQScgOiAodGhpcy5zZXRzQiA+IHRoaXMuc2V0c0EgPyAnQicgOiAnQScpXG4gICAgICBjb25zdCBwYXJhbXMgPSBidWlsZFJlc3VsdFBhcmFtcyh0aGlzLl9zdGF0ZSwgdGhpcy50ZWFtQSwgdGhpcy50ZWFtQiwgd2lubmVyKVxuICAgICAgcGFyYW1zLndpbm5lciA9IHRoaXMuc2V0c0EgPiB0aGlzLnNldHNCXG4gICAgICAgID8gdGhpcy50ZWFtQVxuICAgICAgICA6ICh0aGlzLnNldHNCID4gdGhpcy5zZXRzQSA/IHRoaXMudGVhbUIgOiAnTm8gd2lubmVyJylcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiAnL3BhZ2VzL3Jlc3VsdCcsIHBhcmFtcyB9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiUE9JTlRTIiwiaW5pdGlhbFN0YXRlIiwiZmlyc3RTZXJ2ZXIiLCJwdEEiLCJwdEIiLCJpZHhBIiwiaWR4QiIsImdhbWVzQSIsImdhbWVzQiIsInNldHNBIiwic2V0c0IiLCJkZXVjZVN0YXRlIiwic2VydmluZyIsInNlcnZpbmdQbGF5ZXIiLCJzZXJ2ZUNvdW50QSIsInNlcnZlQ291bnRCIiwic3RhdHVzTXNnIiwic2V0SGlzdG9yeSIsImhpc3RvcnkiLCJyZWZyZXNoRGlzcGxheSIsInN0YXRlIiwiZHMiLCJTdHJpbmciLCJzYXZlU25hcHNob3QiLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibGVuZ3RoIiwic2hpZnQiLCJ1bmRvUG9pbnQiLCJwcmV2IiwicG9wIiwicm90YXRlU2VydmUiLCJjaGVja1NldCIsIm1heFNldHMiLCJnQSIsImdCIiwic2V0V2lubmVyIiwibWF0Y2hXaW5uZXIiLCJhIiwiYiIsInNldHNUb1dpbiIsIk1hdGgiLCJjZWlsIiwid2luR2FtZSIsInRlYW0iLCJhZGRQb2ludCIsInNjb3JpbmdNb2RlIiwiY3VyIiwib3RoZXIiLCJidWlsZFJlc3VsdFBhcmFtcyIsInRlYW1BIiwidGVhbUIiLCJ3aW5uZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3Njb3JlU3RhdGUiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJvdGVjdGVkIiwicHJpdmF0ZSIsIl9zdGF0ZSIsIm9uSW5pdCIsIl9zeW5jIiwicyIsInBvaW50QSIsIl9m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