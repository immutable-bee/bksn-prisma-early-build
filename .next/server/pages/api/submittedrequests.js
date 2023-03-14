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
exports.id = "pages/api/submittedrequests";
exports.ids = ["pages/api/submittedrequests"];
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

/***/ "(api)/./pages/api/submittedrequests.js":
/*!****************************************!*\
  !*** ./pages/api/submittedrequests.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prismaDb */ \"(api)/./db/prismaDb.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const ownerEmail = JSON.parse(req.body);\n    const owner = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email: ownerEmail\n        }\n    });\n    const ownedBookRequests = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.request.findMany({\n        where: {\n            ownerId: owner.id\n        }\n    });\n    res.json(ownedBookRequests);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0dGVkcmVxdWVzdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0MsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNQyxhQUFhQyxLQUFLQyxLQUFLLENBQUNKLElBQUlLLElBQUk7SUFDdEMsTUFBTUMsUUFBUSxNQUFNUCxnRUFBc0IsQ0FBQztRQUN6Q1UsT0FBTztZQUFFQyxPQUFPUjtRQUFXO0lBQzdCO0lBQ0EsTUFBTVMsb0JBQW9CLE1BQU1aLGlFQUF1QixDQUFDO1FBQ3REVSxPQUFPO1lBQUVLLFNBQVNSLE1BQU1TLEVBQUU7UUFBQztJQUM3QjtJQUNBZCxJQUFJZSxJQUFJLENBQUNMO0FBQ1gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jrc24tcHJpc21hLXRlc3QvLi9wYWdlcy9hcGkvc3VibWl0dGVkcmVxdWVzdHMuanM/YzA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vZGIvcHJpc21hRGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG93bmVyRW1haWwgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgY29uc3Qgb3duZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbDogb3duZXJFbWFpbCB9LFxuICB9KTtcbiAgY29uc3Qgb3duZWRCb29rUmVxdWVzdHMgPSBhd2FpdCBwcmlzbWEucmVxdWVzdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHsgb3duZXJJZDogb3duZXIuaWQgfSxcbiAgfSk7XG4gIHJlcy5qc29uKG93bmVkQm9va1JlcXVlc3RzKTtcbn07XG4iXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwib3duZXJFbWFpbCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJvd25lciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsIm93bmVkQm9va1JlcXVlc3RzIiwicmVxdWVzdCIsImZpbmRNYW55Iiwib3duZXJJZCIsImlkIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/submittedrequests.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submittedrequests.js"));
module.exports = __webpack_exports__;

})();