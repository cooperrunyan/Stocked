"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./src/components/Navigation/Navigation.tsx":
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigation\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/components/index.ts\");\n/* harmony import */ var style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style/components/Navigation.module.scss */ \"./style/components/Navigation.module.scss\");\n/* harmony import */ var style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ \"./src/components/Navigation/svg/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction Navigation(param) {\n    var className = param.className;\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().route.replace('/', '');\n    console.log(route);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav) + ' ' + className,\n        __source: {\n            fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ul),\n                __source: {\n                    fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + ' ' + (route === 'dashboard' || route === '' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                        __source: {\n                            fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            href: \"/dashboard\",\n                            __source: {\n                                fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \"Dashboard \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Dashboard, {\n                                    __source: {\n                                        fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                        lineNumber: 17,\n                                        columnNumber: 23\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + ' ' + (route === 'lists' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                        __source: {\n                            fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            href: \"/lists\",\n                            __source: {\n                                fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \"Lists \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Lists, {\n                                    __source: {\n                                        fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 19\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + ' ' + (route === 'search' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                        __source: {\n                            fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            href: \"/search\",\n                            __source: {\n                                fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \"Search \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Search, {\n                                    __source: {\n                                        fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 20\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + ' ' + (route === 'settings' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                        __source: {\n                            fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            href: \"/settings\",\n                            __source: {\n                                fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \"Settings \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Settings, {\n                                    __source: {\n                                        fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 22\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Stocked, {\n                __source: {\n                    fileName: \"/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ2tDO0FBRTdCO0FBRVM7QUFFaEMsU0FBU0ksVUFBVSxDQUFDLEtBQTZDLEVBQUUsQ0FBQztRQUE5Q0MsU0FBUyxHQUFYLEtBQTZDLENBQTNDQSxTQUFTO0lBQ3BDLEdBQUssQ0FBQ0MsS0FBSyxHQUFHSCxzREFBUyxHQUFHRyxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFHLElBQUUsQ0FBRTtJQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7SUFDakIsTUFBTSx1RUFDSEksQ0FBRztRQUFDTCxTQUFTLEVBQUVKLG9GQUFTLEdBQUcsQ0FBRyxLQUFHSSxTQUFTOzs7Ozs7OztrRkFDeENPLENBQUU7Z0JBQUNQLFNBQVMsRUFBRUosbUZBQVE7Ozs7Ozs7O3lGQUNwQlksQ0FBRTt3QkFBQ1IsU0FBUyxFQUFFSixtRkFBUSxHQUFHLENBQUcsTUFBSUssS0FBSyxLQUFLLENBQVcsY0FBSUEsS0FBSyxLQUFLLENBQUUsSUFBR0wsdUZBQVksR0FBRyxJQUFJOzs7Ozs7O3dHQUN6RkQsbUNBQUk7NEJBQUNLLFNBQVMsRUFBRUoscUZBQVU7NEJBQUVlLElBQUksRUFBQyxDQUFZOzs7Ozs7OztnQ0FBQyxDQUNuQztxR0FBQ2QsMkNBQWU7Ozs7Ozs7Ozs7O3lGQUc3QlcsQ0FBRTt3QkFBQ1IsU0FBUyxFQUFFSixtRkFBUSxHQUFHLENBQUcsTUFBSUssS0FBSyxLQUFLLENBQU8sU0FBR0wsdUZBQVksR0FBRyxJQUFJOzs7Ozs7O3dHQUNyRUQsbUNBQUk7NEJBQUNLLFNBQVMsRUFBRUoscUZBQVU7NEJBQUVlLElBQUksRUFBQyxDQUFROzs7Ozs7OztnQ0FBQyxDQUNuQztxR0FBQ2QsdUNBQVc7Ozs7Ozs7Ozs7O3lGQUdyQlcsQ0FBRTt3QkFBQ1IsU0FBUyxFQUFFSixtRkFBUSxHQUFHLENBQUcsTUFBSUssS0FBSyxLQUFLLENBQVEsVUFBR0wsdUZBQVksR0FBRyxJQUFJOzs7Ozs7O3dHQUN0RUQsbUNBQUk7NEJBQUNLLFNBQVMsRUFBRUoscUZBQVU7NEJBQUVlLElBQUksRUFBQyxDQUFTOzs7Ozs7OztnQ0FBQyxDQUNuQztxR0FBQ2Qsd0NBQVk7Ozs7Ozs7Ozs7O3lGQUd2QlcsQ0FBRTt3QkFBQ1IsU0FBUyxFQUFFSixtRkFBUSxHQUFHLENBQUcsTUFBSUssS0FBSyxLQUFLLENBQVUsWUFBR0wsdUZBQVksR0FBRyxJQUFJOzs7Ozs7O3dHQUN4RUQsbUNBQUk7NEJBQUNLLFNBQVMsRUFBRUoscUZBQVU7NEJBQUVlLElBQUksRUFBQyxDQUFXOzs7Ozs7OztnQ0FBQyxDQUNuQztxR0FBQ2QsMENBQWM7Ozs7Ozs7Ozs7Ozs7aUZBSTdCQSx5Q0FBYTs7Ozs7Ozs7OztBQUdwQixDQUFDO0tBOUJlRSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3g/MGY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLic7XG5pbXBvcnQgc3R5bGUgZnJvbSAnc3R5bGUvY29tcG9uZW50cy9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi9zdmcnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgY2xhc3NOYW1lIH06IEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50Pikge1xuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpLnJvdXRlLnJlcGxhY2UoJy8nLCAnJyk7XG4gIGNvbnNvbGUubG9nKHJvdXRlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2ICsgJyAnICsgY2xhc3NOYW1lfT5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlLnVsfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGkgKyAnICcgKyAocm91dGUgPT09ICdkYXNoYm9hcmQnIHx8IHJvdXRlID09PSAnJyA/IHN0eWxlLmFjdGl2ZSA6IG51bGwpfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICBEYXNoYm9hcmQgPGljb25zLkRhc2hib2FyZCAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGkgKyAnICcgKyAocm91dGUgPT09ICdsaXN0cycgPyBzdHlsZS5hY3RpdmUgOiBudWxsKX0+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPVwiL2xpc3RzXCI+XG4gICAgICAgICAgICBMaXN0cyA8aWNvbnMuTGlzdHMgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLmxpICsgJyAnICsgKHJvdXRlID09PSAnc2VhcmNoJyA/IHN0eWxlLmFjdGl2ZSA6IG51bGwpfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCIvc2VhcmNoXCI+XG4gICAgICAgICAgICBTZWFyY2ggPGljb25zLlNlYXJjaCAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGkgKyAnICcgKyAocm91dGUgPT09ICdzZXR0aW5ncycgPyBzdHlsZS5hY3RpdmUgOiBudWxsKX0+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPVwiL3NldHRpbmdzXCI+XG4gICAgICAgICAgICBTZXR0aW5ncyA8aWNvbnMuU2V0dGluZ3MgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGljb25zLlN0b2NrZWQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGUiLCJpY29ucyIsInVzZVJvdXRlciIsIk5hdmlnYXRpb24iLCJjbGFzc05hbWUiLCJyb3V0ZSIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibmF2IiwidWwiLCJsaSIsImFjdGl2ZSIsImxpbmsiLCJocmVmIiwiRGFzaGJvYXJkIiwiTGlzdHMiLCJTZWFyY2giLCJTZXR0aW5ncyIsIlN0b2NrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navigation/Navigation.tsx\n");

/***/ })

});