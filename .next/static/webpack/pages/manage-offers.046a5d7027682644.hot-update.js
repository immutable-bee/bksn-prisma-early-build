"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/manage-offers",{

/***/ "./pages/manage-offers.js":
/*!********************************!*\
  !*** ./pages/manage-offers.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _compontents_VNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compontents/VNavBar */ \"./compontents/VNavBar.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ManageOffersPage = ()=>{\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"lReceived\");\n    const [listingOffersRecieved, setListingOffersRecieved] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [requestOffersRecieved, setRequestOffersReceived] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [listingOffersSent, setListingOffersSent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [requestOffersSent, setRequestOffersSent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const LORHandler = ()=>{\n        setView(\"lRecieved\");\n    };\n    const LOSHandler = ()=>{\n        setView(\"lSent\");\n    };\n    const RORHandler = ()=>{\n        setView(\"rReceived\");\n    };\n    const ROSHandler = ()=>{\n        setView(\"rsent\");\n    };\n    const getOffers = async ()=>{\n        await fetch(\"/api/offers\", {\n            method: \"POST\",\n            body: session.user.email\n        }).then((response)=>{\n            return response.json();\n        }).then((data)=>{\n            let [listingOffersR, requestOffersR, listingOffersS, requestOffersS] = data;\n            setListingOffersRecieved(listingOffersR);\n            setRequestOffersReceived(requestOffersR);\n            setListingOffersSent(listingOffersS);\n            setRequestOffersSent(requestOffersS);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (session) {\n            getOffers();\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"manage-page-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compontents_VNavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                manage: \"active-btn\"\n            }, void 0, false, {\n                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"manage-body-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        id: \"manage-offers-title\",\n                        children: \"Manage Offers\"\n                    }, void 0, false, {\n                        fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    view == \"lReceived\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"manage-view-buttons-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                id: \"active-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Recieved\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: LOSHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: RORHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Received\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: ROSHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined) : view == \"lSent\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"manage-view-buttons-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: LORHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Recieved\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                id: \"active-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: RORHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Received\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: ROSHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined) : view == \"rReceived\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"manage-view-buttons-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: LORHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Recieved\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: LOSHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                id: \"active-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Received\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: ROSHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"manage-view-buttons-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: LORHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Recieved\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 149,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: LOSHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Listed Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: RORHandler,\n                                className: \"inactive-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Received\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                id: \"active-tab\",\n                                rounded: true,\n                                size: \"sm\",\n                                children: \"Request Offers Sent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                                lineNumber: 173,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/briangarber/Desktop/Projects/tests/bksn-prisma-test/pages/manage-offers.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageOffersPage, \"bgTbgy0CFFudjv1f2OsX+Mxfqc8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = ManageOffersPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageOffersPage);\nvar _c;\n$RefreshReg$(_c, \"ManageOffersPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztvQ0FJRGhDLFFBQVEsNEJBQ1YsOERBQUMyQjt3QkFBSUMsSUFBRzs7MENBQ04sOERBQUNuQyxxREFBTUE7Z0NBQ0x3QyxTQUFTdkI7Z0NBQ1R3QixXQUFVO2dDQUNWSCxPQUFPO2dDQUNQQyxNQUFNOzBDQUNQOzs7Ozs7MENBR0QsOERBQUN2QyxxREFBTUE7Z0NBQ0x3QyxTQUFTdEI7Z0NBQ1R1QixXQUFVO2dDQUNWSCxPQUFPO2dDQUNQQyxNQUFNOzBDQUNQOzs7Ozs7MENBR0QsOERBQUN2QyxxREFBTUE7Z0NBQUNtQyxJQUFHO2dDQUFhRyxPQUFPO2dDQUFDQyxNQUFNOzBDQUFNOzs7Ozs7MENBRzVDLDhEQUFDdkMscURBQU1BO2dDQUNMd0MsU0FBU3BCO2dDQUNUcUIsV0FBVTtnQ0FDVkgsT0FBTztnQ0FDUEMsTUFBTTswQ0FDUDs7Ozs7Ozs7Ozs7a0RBS0gsOERBQUNMO3dCQUFJQyxJQUFHOzswQ0FDTiw4REFBQ25DLHFEQUFNQTtnQ0FDTHdDLFNBQVN2QjtnQ0FDVHdCLFdBQVU7Z0NBQ1ZILE9BQU87Z0NBQ1BDLE1BQU07MENBQ1A7Ozs7OzswQ0FHRCw4REFBQ3ZDLHFEQUFNQTtnQ0FDTHdDLFNBQVN0QjtnQ0FDVHVCLFdBQVU7Z0NBQ1ZILE9BQU87Z0NBQ1BDLE1BQU07MENBQ1A7Ozs7OzswQ0FHRCw4REFBQ3ZDLHFEQUFNQTtnQ0FDTHdDLFNBQVNyQjtnQ0FDVHNCLFdBQVU7Z0NBQ1ZILE9BQU87Z0NBQ1BDLE1BQU07MENBQ1A7Ozs7OzswQ0FHRCw4REFBQ3ZDLHFEQUFNQTtnQ0FBQ21DLElBQUc7Z0NBQWFHLE9BQU87Z0NBQUNDLE1BQU07MENBQU07Ozs7Ozs7Ozs7O2lDQUkvQzs7Ozs7Ozs7Ozs7OztBQUlUO0dBL0tNbkM7O1FBQ3NCRCx1REFBVUE7OztLQURoQ0M7QUFpTE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYW5hZ2Utb2ZmZXJzLmpzP2NmMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbnRlbnRzL1ZOYXZCYXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuY29uc3QgTWFuYWdlT2ZmZXJzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKFwibFJlY2VpdmVkXCIpO1xuXG4gIGNvbnN0IFtsaXN0aW5nT2ZmZXJzUmVjaWV2ZWQsIHNldExpc3RpbmdPZmZlcnNSZWNpZXZlZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcmVxdWVzdE9mZmVyc1JlY2lldmVkLCBzZXRSZXF1ZXN0T2ZmZXJzUmVjZWl2ZWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xpc3RpbmdPZmZlcnNTZW50LCBzZXRMaXN0aW5nT2ZmZXJzU2VudF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcmVxdWVzdE9mZmVyc1NlbnQsIHNldFJlcXVlc3RPZmZlcnNTZW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgTE9SSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRWaWV3KFwibFJlY2lldmVkXCIpO1xuICB9O1xuICBjb25zdCBMT1NIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFZpZXcoXCJsU2VudFwiKTtcbiAgfTtcbiAgY29uc3QgUk9SSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRWaWV3KFwiclJlY2VpdmVkXCIpO1xuICB9O1xuICBjb25zdCBST1NIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFZpZXcoXCJyc2VudFwiKTtcbiAgfTtcblxuICBjb25zdCBnZXRPZmZlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goXCIvYXBpL29mZmVyc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgW2xpc3RpbmdPZmZlcnNSLCByZXF1ZXN0T2ZmZXJzUiwgbGlzdGluZ09mZmVyc1MsIHJlcXVlc3RPZmZlcnNTXSA9XG4gICAgICAgICAgZGF0YTtcbiAgICAgICAgc2V0TGlzdGluZ09mZmVyc1JlY2lldmVkKGxpc3RpbmdPZmZlcnNSKTtcbiAgICAgICAgc2V0UmVxdWVzdE9mZmVyc1JlY2VpdmVkKHJlcXVlc3RPZmZlcnNSKTtcbiAgICAgICAgc2V0TGlzdGluZ09mZmVyc1NlbnQobGlzdGluZ09mZmVyc1MpO1xuICAgICAgICBzZXRSZXF1ZXN0T2ZmZXJzU2VudChyZXF1ZXN0T2ZmZXJzUyk7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICBnZXRPZmZlcnMoKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibWFuYWdlLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICA8Vk5hdkJhciBtYW5hZ2U9XCJhY3RpdmUtYnRuXCIgLz5cbiAgICAgIDxkaXYgaWQ9XCJtYW5hZ2UtYm9keS1jb250YWluZXJcIj5cbiAgICAgICAgPGg1IGlkPVwibWFuYWdlLW9mZmVycy10aXRsZVwiPk1hbmFnZSBPZmZlcnM8L2g1PlxuICAgICAgICB7dmlldyA9PSBcImxSZWNlaXZlZFwiID8gKFxuICAgICAgICAgIDxkaXYgaWQ9XCJtYW5hZ2Utdmlldy1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImFjdGl2ZS10YWJcIiByb3VuZGVkIHNpemU9e1wic21cIn0+XG4gICAgICAgICAgICAgIExpc3RlZCBPZmZlcnMgUmVjaWV2ZWRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtMT1NIYW5kbGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmFjdGl2ZS10YWJcIlxuICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgIHNpemU9e1wic21cIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTGlzdGVkIE9mZmVycyBTZW50XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Uk9SSGFuZGxlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5hY3RpdmUtdGFiXCJcbiAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICBzaXplPXtcInNtXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlcXVlc3QgT2ZmZXJzIFJlY2VpdmVkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Uk9TSGFuZGxlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5hY3RpdmUtdGFiXCJcbiAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICBzaXplPXtcInNtXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlcXVlc3QgT2ZmZXJzIFNlbnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogdmlldyA9PSBcImxTZW50XCIgPyAoXG4gICAgICAgICAgPGRpdiBpZD1cIm1hbmFnZS12aWV3LWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e0xPUkhhbmRsZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluYWN0aXZlLXRhYlwiXG4gICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMaXN0ZWQgT2ZmZXJzIFJlY2lldmVkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJhY3RpdmUtdGFiXCIgcm91bmRlZCBzaXplPXtcInNtXCJ9PlxuICAgICAgICAgICAgICBMaXN0ZWQgT2ZmZXJzIFNlbnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtST1JIYW5kbGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmFjdGl2ZS10YWJcIlxuICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgIHNpemU9e1wic21cIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVxdWVzdCBPZmZlcnMgUmVjZWl2ZWRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtST1NIYW5kbGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmFjdGl2ZS10YWJcIlxuICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgIHNpemU9e1wic21cIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVxdWVzdCBPZmZlcnMgU2VudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiB2aWV3ID09IFwiclJlY2VpdmVkXCIgPyAoXG4gICAgICAgICAgPGRpdiBpZD1cIm1hbmFnZS12aWV3LWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e0xPUkhhbmRsZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluYWN0aXZlLXRhYlwiXG4gICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMaXN0ZWQgT2ZmZXJzIFJlY2lldmVkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17TE9TSGFuZGxlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5hY3RpdmUtdGFiXCJcbiAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICBzaXplPXtcInNtXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExpc3RlZCBPZmZlcnMgU2VudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGlkPVwiYWN0aXZlLXRhYlwiIHJvdW5kZWQgc2l6ZT17XCJzbVwifT5cbiAgICAgICAgICAgICAgUmVxdWVzdCBPZmZlcnMgUmVjZWl2ZWRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtST1NIYW5kbGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmFjdGl2ZS10YWJcIlxuICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgIHNpemU9e1wic21cIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVxdWVzdCBPZmZlcnMgU2VudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBpZD1cIm1hbmFnZS12aWV3LWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e0xPUkhhbmRsZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluYWN0aXZlLXRhYlwiXG4gICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMaXN0ZWQgT2ZmZXJzIFJlY2lldmVkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17TE9TSGFuZGxlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5hY3RpdmUtdGFiXCJcbiAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICBzaXplPXtcInNtXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExpc3RlZCBPZmZlcnMgU2VudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e1JPUkhhbmRsZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluYWN0aXZlLXRhYlwiXG4gICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXF1ZXN0IE9mZmVycyBSZWNlaXZlZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGlkPVwiYWN0aXZlLXRhYlwiIHJvdW5kZWQgc2l6ZT17XCJzbVwifT5cbiAgICAgICAgICAgICAgUmVxdWVzdCBPZmZlcnMgU2VudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZU9mZmVyc1BhZ2U7XG4iXSwibmFtZXMiOlsiVk5hdkJhciIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsIk1hbmFnZU9mZmVyc1BhZ2UiLCJkYXRhIiwic2Vzc2lvbiIsInZpZXciLCJzZXRWaWV3IiwibGlzdGluZ09mZmVyc1JlY2lldmVkIiwic2V0TGlzdGluZ09mZmVyc1JlY2lldmVkIiwicmVxdWVzdE9mZmVyc1JlY2lldmVkIiwic2V0UmVxdWVzdE9mZmVyc1JlY2VpdmVkIiwibGlzdGluZ09mZmVyc1NlbnQiLCJzZXRMaXN0aW5nT2ZmZXJzU2VudCIsInJlcXVlc3RPZmZlcnNTZW50Iiwic2V0UmVxdWVzdE9mZmVyc1NlbnQiLCJMT1JIYW5kbGVyIiwiTE9TSGFuZGxlciIsIlJPUkhhbmRsZXIiLCJST1NIYW5kbGVyIiwiZ2V0T2ZmZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidXNlciIsImVtYWlsIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImxpc3RpbmdPZmZlcnNSIiwicmVxdWVzdE9mZmVyc1IiLCJsaXN0aW5nT2ZmZXJzUyIsInJlcXVlc3RPZmZlcnNTIiwiZGl2IiwiaWQiLCJtYW5hZ2UiLCJoNSIsInJvdW5kZWQiLCJzaXplIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/manage-offers.js\n"));

/***/ })

});