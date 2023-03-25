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
exports.id = "pages/api/makerequest";
exports.ids = ["pages/api/makerequest"];
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

/***/ "(api)/./pages/api/makerequest.js":
/*!**********************************!*\
  !*** ./pages/api/makerequest.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prismaDb */ \"(api)/./db/prismaDb.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const [senderEmail, requestdata] = JSON.parse(req.body);\n    const sender = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email: senderEmail\n        }\n    });\n    const createdBookRequest = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.request.create({\n        data: {\n            owner: {\n                connect: {\n                    id: sender.id\n                }\n            },\n            title: requestdata.title,\n            condition: requestdata.condition,\n            format: requestdata.format,\n            author: requestdata.author,\n            isbn: requestdata.isbn,\n            notes: requestdata.notes,\n            date_expires: requestdata.date_expires\n        }\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFrZXJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0MsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNLENBQUNDLGFBQWFDLFlBQVksR0FBR0MsS0FBS0MsS0FBSyxDQUFDTCxJQUFJTSxJQUFJO0lBRXRELE1BQU1DLFNBQVMsTUFBTVIsZ0VBQXNCLENBQUM7UUFDMUNXLE9BQU87WUFDTEMsT0FBT1Q7UUFDVDtJQUNGO0lBRUEsTUFBTVUscUJBQXFCLE1BQU1iLCtEQUFxQixDQUFDO1FBQ3JEZ0IsTUFBTTtZQUNKQyxPQUFPO2dCQUNMQyxTQUFTO29CQUNQQyxJQUFJWCxPQUFPVyxFQUFFO2dCQUNmO1lBQ0Y7WUFDQUMsT0FBT2hCLFlBQVlnQixLQUFLO1lBQ3hCQyxXQUFXakIsWUFBWWlCLFNBQVM7WUFDaENDLFFBQVFsQixZQUFZa0IsTUFBTTtZQUMxQkMsUUFBUW5CLFlBQVltQixNQUFNO1lBQzFCQyxNQUFNcEIsWUFBWW9CLElBQUk7WUFDdEJDLE9BQU9yQixZQUFZcUIsS0FBSztZQUN4QkMsY0FBY3RCLFlBQVlzQixZQUFZO1FBQ3hDO0lBQ0Y7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmtzbi1wcmlzbWEtdGVzdC8uL3BhZ2VzL2FwaS9tYWtlcmVxdWVzdC5qcz8zMTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9kYi9wcmlzbWFEYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgW3NlbmRlckVtYWlsLCByZXF1ZXN0ZGF0YV0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICBjb25zdCBzZW5kZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgZW1haWw6IHNlbmRlckVtYWlsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZWRCb29rUmVxdWVzdCA9IGF3YWl0IHByaXNtYS5yZXF1ZXN0LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgb3duZXI6IHtcbiAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgIGlkOiBzZW5kZXIuaWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHJlcXVlc3RkYXRhLnRpdGxlLFxuICAgICAgY29uZGl0aW9uOiByZXF1ZXN0ZGF0YS5jb25kaXRpb24sXG4gICAgICBmb3JtYXQ6IHJlcXVlc3RkYXRhLmZvcm1hdCxcbiAgICAgIGF1dGhvcjogcmVxdWVzdGRhdGEuYXV0aG9yLFxuICAgICAgaXNibjogcmVxdWVzdGRhdGEuaXNibixcbiAgICAgIG5vdGVzOiByZXF1ZXN0ZGF0YS5ub3RlcyxcbiAgICAgIGRhdGVfZXhwaXJlczogcmVxdWVzdGRhdGEuZGF0ZV9leHBpcmVzLFxuICAgIH0sXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJyZXEiLCJyZXMiLCJzZW5kZXJFbWFpbCIsInJlcXVlc3RkYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNlbmRlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsImNyZWF0ZWRCb29rUmVxdWVzdCIsInJlcXVlc3QiLCJjcmVhdGUiLCJkYXRhIiwib3duZXIiLCJjb25uZWN0IiwiaWQiLCJ0aXRsZSIsImNvbmRpdGlvbiIsImZvcm1hdCIsImF1dGhvciIsImlzYm4iLCJub3RlcyIsImRhdGVfZXhwaXJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/makerequest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/makerequest.js"));
module.exports = __webpack_exports__;

})();