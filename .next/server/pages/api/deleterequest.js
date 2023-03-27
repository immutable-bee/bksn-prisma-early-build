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
exports.id = "pages/api/deleterequest";
exports.ids = ["pages/api/deleterequest"];
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

/***/ "(api)/./pages/api/deleterequest.js":
/*!************************************!*\
  !*** ./pages/api/deleterequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prismaDb */ \"(api)/./db/prismaDb.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const [email, requestID] = JSON.parse(req.body);\n    const requestToDelete = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.request.findUnique({\n        where: {\n            id: requestID\n        }\n    });\n    const sender = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email: email\n        }\n    });\n    const owner = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            id: requestToDelete.ownerId\n        }\n    });\n    if (sender.id === owner.id) {\n        const deletedRequest = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.request[\"delete\"]({\n            where: {\n                id: requestID\n            }\n        });\n        res.json(deletedRequest);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU0sQ0FBQ0MsT0FBT0MsVUFBVSxHQUFHQyxLQUFLQyxLQUFLLENBQUNMLElBQUlNLElBQUk7SUFDOUMsTUFBTUMsa0JBQWtCLE1BQU1SLG1FQUF5QixDQUFDO1FBQ3REVyxPQUFPO1lBQUVDLElBQUlSO1FBQVU7SUFDekI7SUFDQSxNQUFNUyxTQUFTLE1BQU1iLGdFQUFzQixDQUFDO1FBQzFDVyxPQUFPO1lBQUVSLE9BQU9BO1FBQU07SUFDeEI7SUFDQSxNQUFNWSxRQUFRLE1BQU1mLGdFQUFzQixDQUFDO1FBQ3pDVyxPQUFPO1lBQUVDLElBQUlKLGdCQUFnQlEsT0FBTztRQUFDO0lBQ3ZDO0lBQ0EsSUFBSUgsT0FBT0QsRUFBRSxLQUFLRyxNQUFNSCxFQUFFLEVBQUU7UUFDMUIsTUFBTUssaUJBQWlCLE1BQU1qQixrRUFBcUIsQ0FBQztZQUNqRFcsT0FBTztnQkFBRUMsSUFBSVI7WUFBVTtRQUN6QjtRQUNBRixJQUFJaUIsSUFBSSxDQUFDRjtJQUNYLENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmtzbi1wcmlzbWEtdGVzdC8uL3BhZ2VzL2FwaS9kZWxldGVyZXF1ZXN0LmpzPzM5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL2RiL3ByaXNtYURiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBbZW1haWwsIHJlcXVlc3RJRF0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgY29uc3QgcmVxdWVzdFRvRGVsZXRlID0gYXdhaXQgcHJpc21hLnJlcXVlc3QuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHJlcXVlc3RJRCB9LFxuICB9KTtcbiAgY29uc3Qgc2VuZGVyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWw6IGVtYWlsIH0sXG4gIH0pO1xuICBjb25zdCBvd25lciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiByZXF1ZXN0VG9EZWxldGUub3duZXJJZCB9LFxuICB9KTtcbiAgaWYgKHNlbmRlci5pZCA9PT0gb3duZXIuaWQpIHtcbiAgICBjb25zdCBkZWxldGVkUmVxdWVzdCA9IGF3YWl0IHByaXNtYS5yZXF1ZXN0LmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVxdWVzdElEIH0sXG4gICAgfSk7XG4gICAgcmVzLmpzb24oZGVsZXRlZFJlcXVlc3QpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInByaXNtYSIsInJlcSIsInJlcyIsImVtYWlsIiwicmVxdWVzdElEIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInJlcXVlc3RUb0RlbGV0ZSIsInJlcXVlc3QiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInNlbmRlciIsInVzZXIiLCJvd25lciIsIm93bmVySWQiLCJkZWxldGVkUmVxdWVzdCIsImRlbGV0ZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/deleterequest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deleterequest.js"));
module.exports = __webpack_exports__;

})();