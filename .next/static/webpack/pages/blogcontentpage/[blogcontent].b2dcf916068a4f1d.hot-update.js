"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogcontentpage/[blogcontent]",{

/***/ "./components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx":
/*!*********************************************************************************************!*\
  !*** ./components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx ***!
  \*********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DataInfo_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../DataInfo/data.component */ \"./DataInfo/data.component.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar HeroBlogContent = function() {\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(), query = ref.query, asPath = ref.asPath;\n    var id = query.id;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), service = ref1[0], setSetvice = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSetvice(id === null || id === void 0 ? void 0 : id.toString());\n    }, [\n        asPath,\n        id\n    ]);\n    var blogFilter = _DataInfo_data_component__WEBPACK_IMPORTED_MODULE_3__.BlogContent.filter(function(info) {\n        return service === info.id;\n    });\n    console.log(\"este es =>\", blogFilter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white\",\n            children: [\n                blogFilter.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center mt-16 sm:mt-11\",\n                                \"data-aos\": \"fade-down \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10/12 bg-cover\",\n                                    src: item.content.cabecera,\n                                    alt: item.content.altCabecera,\n                                    title: item.content.titleCabecera\n                                }, void 0, false, {\n                                    fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-center font-PlayfairDisplay text-4xl sm:text-6xl font-bold leading-7 sm:leading-[90px] sm:mt-10\",\n                                \"data-aos\": \"fade-down\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, item.title, true, {\n                        fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"data-aos\": \"fade-right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center font-manrope not-italic sm:font-semibold leading-5 sm:leading-8 text-base mt-2 sm:text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\",\n                                children: \"Por:\"\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, _this),\n                            \" Juan David |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\",\n                                children: \"Cargo: \"\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this),\n                            \"Ceo de Juroc\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\",\n                                children: \"Fecha: \"\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this),\n                            \"Julio 02,2023\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonardo/Escritorio/testproduccion/prueba-juroc/components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HeroBlogContent, \"GVmyKKAnBkMwl3Fsz3M78X/Blng=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = HeroBlogContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroBlogContent);\nvar _c;\n$RefreshReg$(_c, \"HeroBlogContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZXdzL2Jsb2cvaW5mb3JtYXRpdmVibG9nL2hlcm9ibG9nY29udGVudC9oZXJvYmxvZ2NvbnRlbnQuY29tcG9uZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBMkM7QUFDSjtBQUM2QjtBQUVwRSxJQUFNSSxlQUFlLEdBQUcsV0FBTTs7SUFFNUIsSUFBMEJGLEdBQVcsR0FBWEEsc0RBQVMsRUFBRSxFQUE3QkcsS0FBSyxHQUFhSCxHQUFXLENBQTdCRyxLQUFLLEVBQUVDLE1BQU0sR0FBS0osR0FBVyxDQUF0QkksTUFBTTtJQUNyQixJQUFNLEVBQUksR0FBS0QsS0FBSyxDQUFaRSxFQUFFO0lBQ1YsSUFBOEJOLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBbkNPLE9BQU8sR0FBZ0JQLElBQVksR0FBNUIsRUFBRVEsVUFBVSxHQUFJUixJQUFZLEdBQWhCO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFDZFMsVUFBVSxDQUFDRixFQUFFLGFBQUZBLEVBQUUsV0FBVSxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLEVBQUUsQ0FBRUcsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQyxFQUFFO1FBQUNKLE1BQU07UUFBRUMsRUFBRTtLQUFDLENBQUM7SUFFaEIsSUFBTUksVUFBVSxHQUFHUix3RUFBa0IsQ0FBQ1UsU0FBQUEsSUFBSTtlQUFJTCxPQUFPLEtBQUtLLElBQUksQ0FBQ04sRUFBRTtLQUFBLENBQUM7SUFDbEVPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRUosVUFBVSxDQUFDO0lBRXJDLHFCQUNFO2tCQUNFLDRFQUFDSyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxZQUFZOztnQkFDeEJOLFVBQVUsQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ25CLDhEQUFDSCxLQUFHOzswQ0FDRiw4REFBQ0EsS0FBRztnQ0FDRkMsU0FBUyxFQUFDLG9DQUFvQztnQ0FDOUNHLFVBQVEsRUFBQyxZQUFZOzBDQUVyQiw0RUFBQ0MsS0FBRztvQ0FDRkosU0FBUyxFQUFDLGtCQUFrQjtvQ0FDNUJLLEdBQUcsRUFBRUgsSUFBSSxDQUFDSSxPQUFPLENBQUNDLFFBQVE7b0NBQzFCQyxHQUFHLEVBQUVOLElBQUksQ0FBQ0ksT0FBTyxDQUFDRyxXQUFXO29DQUM3QkMsS0FBSyxFQUFFUixJQUFJLENBQUNJLE9BQU8sQ0FBQ0ssYUFBYTs7Ozs7eUNBQ2pDOzs7OztxQ0FDRTswQ0FFTiw4REFBQ0MsSUFBRTtnQ0FDRFosU0FBUyxFQUFDLHNHQUFzRztnQ0FDaEhHLFVBQVEsRUFBQyxXQUFXOzBDQUVuQkQsSUFBSSxDQUFDUSxLQUFLOzs7OztxQ0FDUjs7dUJBbEJHUixJQUFJLENBQUNRLEtBQUs7Ozs7NkJBbUJkO2lCQUNQLENBQUM7OEJBSUYsOERBQUNYLEtBQUc7b0JBQUNJLFVBQVEsRUFBQyxZQUFZOzhCQUN4Qiw0RUFBQ1UsR0FBQzt3QkFDQWIsU0FBUyxFQUFDLHVHQUNZOzswQ0FFdEIsOERBQUNjLE1BQUk7Z0NBQUNkLFNBQVMsRUFBQyxFQUFFOzBDQUFDLE1BQUk7Ozs7O3FDQUFPOzRCQUFBLGVBQWE7NEJBQUMsR0FBRzswQ0FDL0MsOERBQUNjLE1BQUk7Z0NBQUNkLFNBQVMsRUFBQyxFQUFFOzBDQUFDLFNBQU87Ozs7O3FDQUFPOzRCQUFBLGNBQ2pDOzBDQUFBLDhEQUFDZSxJQUFFOzs7O3FDQUFHOzBDQUNOLDhEQUFDRCxNQUFJO2dDQUFDZCxTQUFTLEVBQUMsRUFBRTswQ0FBQyxTQUFPOzs7OztxQ0FBTzs0QkFBQSxlQUNuQzs7Ozs7OzZCQUFJOzs7Ozt5QkFDQTs7Ozs7O2lCQUNGO3FCQUNMLENBQ0o7QUFDSCxDQUFDO0dBdkRLYixlQUFlOztRQUVPRixrREFBUzs7O0FBRi9CRSxLQUFBQSxlQUFlO0FBd0RyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZpZXdzL2Jsb2cvaW5mb3JtYXRpdmVibG9nL2hlcm9ibG9nY29udGVudC9oZXJvYmxvZ2NvbnRlbnQuY29tcG9uZW50LnRzeD9mODYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IEJsb2dDb250ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0RhdGFJbmZvL2RhdGEuY29tcG9uZW50XCJcblxuY29uc3QgSGVyb0Jsb2dDb250ZW50ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgeyBxdWVyeSwgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSBxdWVyeVxuICBjb25zdCBbc2VydmljZSwgc2V0U2V0dmljZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2V0dmljZShpZD8udG9TdHJpbmcoKSlcbiAgfSwgW2FzUGF0aCwgaWRdKVxuXG4gIGNvbnN0IGJsb2dGaWx0ZXIgPSBCbG9nQ29udGVudC5maWx0ZXIoaW5mbyA9PiBzZXJ2aWNlID09PSBpbmZvLmlkKVxuICBjb25zb2xlLmxvZyhcImVzdGUgZXMgPT5cIiwgYmxvZ0ZpbHRlcilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAge2Jsb2dGaWx0ZXIubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTE2IHNtOm10LTExXCJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLWRvd24gXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAvMTIgYmctY292ZXJcIlxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5jb250ZW50LmNhYmVjZXJhfVxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5jb250ZW50LmFsdENhYmVjZXJhfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLmNvbnRlbnQudGl0bGVDYWJlY2VyYX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1QbGF5ZmFpckRpc3BsYXkgdGV4dC00eGwgc206dGV4dC02eGwgZm9udC1ib2xkIGxlYWRpbmctNyBzbTpsZWFkaW5nLVs5MHB4XSBzbTptdC0xMFwiXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1kb3duXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX0gXG5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1tYW5yb3BlIG5vdC1pdGFsaWMgc206Zm9udC1zZW1pYm9sZCBsZWFkaW5nLTUgc206bGVhZGluZy04IFxuICAgICAgICB0ZXh0LWJhc2UgbXQtMiBzbTp0ZXh0LXhsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5Qb3I6PC9zcGFuPiBKdWFuIERhdmlkIHx7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5DYXJnbzogPC9zcGFuPkNlbyBkZSBKdXJvY1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5GZWNoYTogPC9zcGFuPkp1bGlvIDAyLDIwMjNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhlcm9CbG9nQ29udGVudFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQmxvZ0NvbnRlbnQiLCJIZXJvQmxvZ0NvbnRlbnQiLCJxdWVyeSIsImFzUGF0aCIsImlkIiwic2VydmljZSIsInNldFNldHZpY2UiLCJ0b1N0cmluZyIsImJsb2dGaWx0ZXIiLCJmaWx0ZXIiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJkYXRhLWFvcyIsImltZyIsInNyYyIsImNvbnRlbnQiLCJjYWJlY2VyYSIsImFsdCIsImFsdENhYmVjZXJhIiwidGl0bGUiLCJ0aXRsZUNhYmVjZXJhIiwiaDIiLCJwIiwic3BhbiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/views/blog/informativeblog/heroblogcontent/heroblogcontent.component.tsx\n"));

/***/ })

});