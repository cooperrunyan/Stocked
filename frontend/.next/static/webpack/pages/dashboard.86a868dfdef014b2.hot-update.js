'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/dashboard', {
  /***/ './src/components/Navigation/Navigation.tsx':
    /*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.tsx ***!
  \**************************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Navigation": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/components/index.ts");\n/* harmony import */ var style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style/components/Navigation.module.scss */ "./style/components/Navigation.module.scss");\n/* harmony import */ var style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./src/components/Navigation/svg/index.ts");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction Navigation(param) {\n    var className = param.className;\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().route.replace(\'/\', \'\');\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {\n                type: "checkbox",\n                name: "clicker",\n                id: "clicker",\n                className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().clicker),\n                __source: {\n                    fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n                className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav) + \' \' + className,\n                __source: {\n                    fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {\n                        className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ul),\n                        __source: {\n                            fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {\n                                className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + \' \' + (route === \'dashboard\' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                                __source: {\n                                    fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                    lineNumber: 16,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: "/dashboard",\n                                    __source: {\n                                        fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                        lineNumber: 17,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        "Dashboard ",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Dashboard, {\n                                            __source: {\n                                                fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                                lineNumber: 18,\n                                                columnNumber: 25\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {\n                                className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + \' \' + (route === \'lists\' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                                __source: {\n                                    fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                    lineNumber: 21,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: "/lists",\n                                    __source: {\n                                        fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        "Lists ",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Lists, {\n                                            __source: {\n                                                fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                                lineNumber: 23,\n                                                columnNumber: 21\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {\n                                className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + \' \' + (route === \'search\' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                                __source: {\n                                    fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                    lineNumber: 26,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: "/search",\n                                    __source: {\n                                        fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        "Search ",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Search, {\n                                            __source: {\n                                                fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                                lineNumber: 28,\n                                                columnNumber: 22\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {\n                                className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li) + \' \' + (route === \'settings\' ? (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : null),\n                                __source: {\n                                    fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                    lineNumber: 31,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    className: (style_components_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: "/settings",\n                                    __source: {\n                                        fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        "Settings ",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Settings, {\n                                            __source: {\n                                                fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                                                lineNumber: 33,\n                                                columnNumber: 24\n                                            },\n                                            __self: this\n                                        })\n                                    ]\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_2__.Stocked, {\n                        __source: {\n                            fileName: "/home/cooperrunyan/Coding/Projects/Stocked/frontend/src/components/Navigation/Navigation.tsx",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, "Navigation");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ2tDO0FBRTdCO0FBRVM7QUFFaEMsU0FBU0ksVUFBVSxDQUFDLEtBQTZDLEVBQUUsQ0FBQztRQUE5Q0MsU0FBUyxHQUFYLEtBQTZDLENBQTNDQSxTQUFTO0lBQ3BDLEdBQUssQ0FBQ0MsS0FBSyxHQUFHSCxzREFBUyxHQUFHRyxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFHLElBQUUsQ0FBRTtJQUMvQyxNQUFNOztpRkFFREMsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQVU7Z0JBQUNDLElBQUksRUFBQyxDQUFTO2dCQUFDQyxFQUFFLEVBQUMsQ0FBUztnQkFBQ04sU0FBUyxFQUFFSix3RkFBYTs7Ozs7Ozs7a0ZBQzFFWSxDQUFHO2dCQUFDUixTQUFTLEVBQUVKLG9GQUFTLEdBQUcsQ0FBRyxLQUFHSSxTQUFTOzs7Ozs7OzswRkFDeENVLENBQUU7d0JBQUNWLFNBQVMsRUFBRUosbUZBQVE7Ozs7Ozs7O2lHQUNwQmUsQ0FBRTtnQ0FBQ1gsU0FBUyxFQUFFSixtRkFBUSxHQUFHLENBQUcsTUFBSUssS0FBSyxLQUFLLENBQVcsYUFBR0wsdUZBQVksR0FBRyxJQUFJOzs7Ozs7O2dIQUN6RUQsbUNBQUk7b0NBQUNLLFNBQVMsRUFBRUoscUZBQVU7b0NBQUVrQixJQUFJLEVBQUMsQ0FBWTs7Ozs7Ozs7d0NBQUMsQ0FDbkM7NkdBQUNqQiwyQ0FBZTs7Ozs7Ozs7Ozs7aUdBRzdCYyxDQUFFO2dDQUFDWCxTQUFTLEVBQUVKLG1GQUFRLEdBQUcsQ0FBRyxNQUFJSyxLQUFLLEtBQUssQ0FBTyxTQUFHTCx1RkFBWSxHQUFHLElBQUk7Ozs7Ozs7Z0hBQ3JFRCxtQ0FBSTtvQ0FBQ0ssU0FBUyxFQUFFSixxRkFBVTtvQ0FBRWtCLElBQUksRUFBQyxDQUFROzs7Ozs7Ozt3Q0FBQyxDQUNuQzs2R0FBQ2pCLHVDQUFXOzs7Ozs7Ozs7OztpR0FHckJjLENBQUU7Z0NBQUNYLFNBQVMsRUFBRUosbUZBQVEsR0FBRyxDQUFHLE1BQUlLLEtBQUssS0FBSyxDQUFRLFVBQUdMLHVGQUFZLEdBQUcsSUFBSTs7Ozs7OztnSEFDdEVELG1DQUFJO29DQUFDSyxTQUFTLEVBQUVKLHFGQUFVO29DQUFFa0IsSUFBSSxFQUFDLENBQVM7Ozs7Ozs7O3dDQUFDLENBQ25DOzZHQUFDakIsd0NBQVk7Ozs7Ozs7Ozs7O2lHQUd2QmMsQ0FBRTtnQ0FBQ1gsU0FBUyxFQUFFSixtRkFBUSxHQUFHLENBQUcsTUFBSUssS0FBSyxLQUFLLENBQVUsWUFBR0wsdUZBQVksR0FBRyxJQUFJOzs7Ozs7O2dIQUN4RUQsbUNBQUk7b0NBQUNLLFNBQVMsRUFBRUoscUZBQVU7b0NBQUVrQixJQUFJLEVBQUMsQ0FBVzs7Ozs7Ozs7d0NBQUMsQ0FDbkM7NkdBQUNqQiwwQ0FBYzs7Ozs7Ozs7Ozs7Ozt5RkFJN0JBLHlDQUFhOzs7Ozs7Ozs7Ozs7QUFJdEIsQ0FBQztLQWhDZUUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24udHN4PzBmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHN0eWxlIGZyb20gJ3N0eWxlL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCAqIGFzIGljb25zIGZyb20gJy4vc3ZnJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbih7IGNsYXNzTmFtZSB9OiBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pIHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKS5yb3V0ZS5yZXBsYWNlKCcvJywgJycpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNsaWNrZXJcIiBpZD1cImNsaWNrZXJcIiBjbGFzc05hbWU9e3N0eWxlLmNsaWNrZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2ICsgJyAnICsgY2xhc3NOYW1lfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGUudWx9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLmxpICsgJyAnICsgKHJvdXRlID09PSAnZGFzaGJvYXJkJyA/IHN0eWxlLmFjdGl2ZSA6IG51bGwpfT5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGUubGlua30gaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgRGFzaGJvYXJkIDxpY29ucy5EYXNoYm9hcmQgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLmxpICsgJyAnICsgKHJvdXRlID09PSAnbGlzdHMnID8gc3R5bGUuYWN0aXZlIDogbnVsbCl9PlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPVwiL2xpc3RzXCI+XG4gICAgICAgICAgICAgIExpc3RzIDxpY29ucy5MaXN0cyAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGkgKyAnICcgKyAocm91dGUgPT09ICdzZWFyY2gnID8gc3R5bGUuYWN0aXZlIDogbnVsbCl9PlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPVwiL3NlYXJjaFwiPlxuICAgICAgICAgICAgICBTZWFyY2ggPGljb25zLlNlYXJjaCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGUubGkgKyAnICcgKyAocm91dGUgPT09ICdzZXR0aW5ncycgPyBzdHlsZS5hY3RpdmUgOiBudWxsKX0+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCIvc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgU2V0dGluZ3MgPGljb25zLlNldHRpbmdzIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGljb25zLlN0b2NrZWQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZSIsImljb25zIiwidXNlUm91dGVyIiwiTmF2aWdhdGlvbiIsImNsYXNzTmFtZSIsInJvdXRlIiwicmVwbGFjZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsImNsaWNrZXIiLCJkaXYiLCJuYXYiLCJ1bCIsImxpIiwiYWN0aXZlIiwibGluayIsImhyZWYiLCJEYXNoYm9hcmQiLCJMaXN0cyIsIlNlYXJjaCIsIlNldHRpbmdzIiwiU3RvY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navigation/Navigation.tsx\n',
      );

      /***/
    },
});
