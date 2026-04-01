export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.scorel.padel","name":"Scorel","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.interconnect"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/score":{"component":"score"},"pages/result":{"component":"result"}}}}');
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
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.10";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.10";
                })();
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _default = exports.default = {
                            onCreate () {
                                console.log("app created");
                            },
                            onDestroy () {
                                console.log("app destroyed");
                            }
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2NvcmVsL2pzb258L1VzZXJzL3RjYXN0cm8vRG9jdW1lbnRzL3Byb2plY3RzL2JhbmQvc2NvcmVsLy50ZW1wX1Njb3JlbC9zcmMvbWFuaWZlc3QuanNvbiIsIndlYnBhY2s6Ly9TY29yZWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TY29yZWwvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1Njb3JlbC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TY29yZWwvc3JjL2FwcC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEpTT04ucGFyc2UoJ3tcInBhY2thZ2VcIjpcImNvbS5zY29yZWwucGFkZWxcIixcIm5hbWVcIjpcIlNjb3JlbFwiLFwidmVyc2lvbk5hbWVcIjpcIjEuMC4wXCIsXCJ2ZXJzaW9uQ29kZVwiOjEsXCJtaW5QbGF0Zm9ybVZlcnNpb25cIjoxMDAwLFwiaWNvblwiOlwiL2NvbW1vbi9sb2dvLnBuZ1wiLFwiZGV2aWNlVHlwZUxpc3RcIjpbXCJ3YXRjaFwiXSxcImZlYXR1cmVzXCI6W3tcIm5hbWVcIjpcInN5c3RlbS5yb3V0ZXJcIn0se1wibmFtZVwiOlwic3lzdGVtLmludGVyY29ubmVjdFwifSx7XCJuYW1lXCI6XCJzeXN0ZW0ucHJvbXB0XCJ9XSxcImNvbmZpZ1wiOntcImxvZ0xldmVsXCI6XCJsb2dcIixcImRlc2lnbldpZHRoXCI6XCJkZXZpY2Utd2lkdGhcIn0sXCJyb3V0ZXJcIjp7XCJlbnRyeVwiOlwicGFnZXMvaW5kZXhcIixcInBhZ2VzXCI6e1wicGFnZXMvaW5kZXhcIjp7XCJjb21wb25lbnRcIjpcImluZGV4XCJ9LFwicGFnZXMvc2NvcmVcIjp7XCJjb21wb25lbnRcIjpcInNjb3JlXCJ9LFwicGFnZXMvcmVzdWx0XCI6e1wiY29tcG9uZW50XCI6XCJyZXN1bHRcIn19fX0nKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTBcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMFwiOyIsIjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uQ3JlYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiYXBwIGNyZWF0ZWRcIilcbiAgfSxcbiAgb25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKFwiYXBwIGRlc3Ryb3llZFwiKVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJKU09OIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCIiLCJvbkNyZWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7d0JBQUFBLE9BQU8sT0FBTyxHQUFHQyxLQUFLLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7b0JDQTVCQyxvQkFBb0IsQ0FBQyxHQUFHLEFBQUM7d0JBQ3hCLElBQUksQUFBc0IsWUFBdEIsT0FBT0MsWUFBeUIsT0FBT0E7d0JBQzNDLElBQUk7NEJBQ0gsT0FBTyxJQUFJLElBQUksSUFBSUMsU0FBUzt3QkFDN0IsRUFBRSxPQUFPQyxHQUFHOzRCQUNYLElBQUksQUFBa0IsWUFBbEIsT0FBT0MsUUFBcUIsT0FBT0E7d0JBQ3hDO29CQUNEOzs7b0JDUEFKLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozt3QkNDM0JLLElBQUFBLFdBQUFBLFFBQUFBLE9BQUFBLEdBQWU7NEJBQ2JDO2dDQUNFQyxRQUFRQyxHQUFHLENBQUM7NEJBQ2Q7NEJBQ0FDO2dDQUNFRixRQUFRQyxHQUFHLENBQUM7NEJBQ2Q7d0JBQ0YifQ==