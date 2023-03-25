"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/listings";
exports.ids = ["pages/api/listings"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./db/prismaDb.ts":
/*!************************!*\
  !*** ./db/prismaDb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9wcmlzbWFEYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRztBQUVuRSxJQUFJSSxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ia3NuLXByaXNtYS10ZXN0Ly4vZGIvcHJpc21hRGIudHM/MDU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/prismaDb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/listings.js":
/*!*******************************!*\
  !*** ./pages/api/listings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prismaDb */ \"(api)/./db/prismaDb.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const senderEmail = JSON.parse(req.body);\n    const sender = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email: senderEmail\n        }\n    });\n    const listings = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.listing.findMany({\n        where: {\n            NOT: {\n                ownerId: sender.id\n            }\n        },\n        include: {\n            owner: {\n                select: {\n                    business_name: true,\n                    business_state: true,\n                    business_city: true\n                }\n            }\n        }\n    });\n    res.json(listings);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0MsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNQyxjQUFjQyxLQUFLQyxLQUFLLENBQUNKLElBQUlLLElBQUk7SUFFdkMsTUFBTUMsU0FBUyxNQUFNUCxnRUFBc0IsQ0FBQztRQUMxQ1UsT0FBTztZQUNMQyxPQUFPUjtRQUNUO0lBQ0Y7SUFFQSxNQUFNUyxXQUFXLE1BQU1aLGlFQUF1QixDQUFDO1FBQzdDVSxPQUFPO1lBQ0xLLEtBQUs7Z0JBQ0hDLFNBQVNULE9BQU9VLEVBQUU7WUFDcEI7UUFDRjtRQUNBQyxTQUFTO1lBQ1BDLE9BQU87Z0JBQ0xDLFFBQVE7b0JBQ05DLGVBQWUsSUFBSTtvQkFDbkJDLGdCQUFnQixJQUFJO29CQUNwQkMsZUFBZSxJQUFJO2dCQUNyQjtZQUNGO1FBQ0Y7SUFDRjtJQUNBckIsSUFBSXNCLElBQUksQ0FBQ1o7QUFDWCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmtzbi1wcmlzbWEtdGVzdC8uL3BhZ2VzL2FwaS9saXN0aW5ncy5qcz82ODgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9kYi9wcmlzbWFEYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc2VuZGVyRW1haWwgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICBjb25zdCBzZW5kZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgZW1haWw6IHNlbmRlckVtYWlsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGxpc3RpbmdzID0gYXdhaXQgcHJpc21hLmxpc3RpbmcuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBOT1Q6IHtcbiAgICAgICAgb3duZXJJZDogc2VuZGVyLmlkLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIG93bmVyOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGJ1c2luZXNzX25hbWU6IHRydWUsXG4gICAgICAgICAgYnVzaW5lc3Nfc3RhdGU6IHRydWUsXG4gICAgICAgICAgYnVzaW5lc3NfY2l0eTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5qc29uKGxpc3RpbmdzKTtcbn07XG4iXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwic2VuZGVyRW1haWwiLCJKU09OIiwicGFyc2UiLCJib2R5Iiwic2VuZGVyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVtYWlsIiwibGlzdGluZ3MiLCJsaXN0aW5nIiwiZmluZE1hbnkiLCJOT1QiLCJvd25lcklkIiwiaWQiLCJpbmNsdWRlIiwib3duZXIiLCJzZWxlY3QiLCJidXNpbmVzc19uYW1lIiwiYnVzaW5lc3Nfc3RhdGUiLCJidXNpbmVzc19jaXR5IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/listings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/listings.js"));
module.exports = __webpack_exports__;

})();