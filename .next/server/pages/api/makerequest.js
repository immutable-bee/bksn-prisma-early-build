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

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prismaDb */ \"(api)/./db/prismaDb.ts\");\n/* harmony import */ var _utils_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/middleware */ \"(api)/./utils/middleware.js\");\n\n\nconst handler = async (req, res)=>{\n    const [senderEmail, requestdata] = JSON.parse(req.body);\n    const sender = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email: senderEmail\n        }\n    });\n    const createdBookRequest = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.request.create({\n        data: {\n            owner: {\n                connect: {\n                    id: sender.id\n                }\n            },\n            title: requestdata.title,\n            condition: requestdata.condition,\n            format: requestdata.format,\n            author: requestdata.author,\n            isbn: requestdata.isbn,\n            notes: requestdata.notes,\n            date_expires: requestdata.date_expires\n        }\n    });\n    res.status(200).json({\n        message: \"Book request created successfully\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    await (0,_utils_middleware__WEBPACK_IMPORTED_MODULE_1__.auth)(req, res, async ()=>{\n        await (0,_utils_middleware__WEBPACK_IMPORTED_MODULE_1__.requireRole)([\n            \"APPROVED_USER\",\n            \"SUBSCRIBED_USER\"\n        ])(req, res, async ()=>{\n            await handler(req, res);\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFrZXJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2dCO0FBRTNELE1BQU1HLFVBQVUsT0FBT0MsS0FBS0MsTUFBUTtJQUNsQyxNQUFNLENBQUNDLGFBQWFDLFlBQVksR0FBR0MsS0FBS0MsS0FBSyxDQUFDTCxJQUFJTSxJQUFJO0lBRXRELE1BQU1DLFNBQVMsTUFBTVgsZ0VBQXNCLENBQUM7UUFDMUNjLE9BQU87WUFDTEMsT0FBT1Q7UUFDVDtJQUNGO0lBRUEsTUFBTVUscUJBQXFCLE1BQU1oQiwrREFBcUIsQ0FBQztRQUNyRG1CLE1BQU07WUFDSkMsT0FBTztnQkFDTEMsU0FBUztvQkFDUEMsSUFBSVgsT0FBT1csRUFBRTtnQkFDZjtZQUNGO1lBQ0FDLE9BQU9oQixZQUFZZ0IsS0FBSztZQUN4QkMsV0FBV2pCLFlBQVlpQixTQUFTO1lBQ2hDQyxRQUFRbEIsWUFBWWtCLE1BQU07WUFDMUJDLFFBQVFuQixZQUFZbUIsTUFBTTtZQUMxQkMsTUFBTXBCLFlBQVlvQixJQUFJO1lBQ3RCQyxPQUFPckIsWUFBWXFCLEtBQUs7WUFDeEJDLGNBQWN0QixZQUFZc0IsWUFBWTtRQUN4QztJQUNGO0lBQ0F4QixJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxTQUFTO0lBQW9DO0FBQ3RFO0FBRUEsaUVBQWUsT0FBTzVCLEtBQUtDLE1BQVE7SUFDakMsTUFBTUosdURBQUlBLENBQUNHLEtBQUtDLEtBQUssVUFBWTtRQUMvQixNQUFNSCw4REFBV0EsQ0FBQztZQUFDO1lBQWlCO1NBQWtCLEVBQ3BERSxLQUNBQyxLQUNBLFVBQVk7WUFDVixNQUFNRixRQUFRQyxLQUFLQztRQUNyQjtJQUVKO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jrc24tcHJpc21hLXRlc3QvLi9wYWdlcy9hcGkvbWFrZXJlcXVlc3QuanM/MzEwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vZGIvcHJpc21hRGJcIjtcbmltcG9ydCB7IGF1dGgsIHJlcXVpcmVSb2xlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21pZGRsZXdhcmVcIjtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBbc2VuZGVyRW1haWwsIHJlcXVlc3RkYXRhXSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuXG4gIGNvbnN0IHNlbmRlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBlbWFpbDogc2VuZGVyRW1haWwsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlZEJvb2tSZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnJlcXVlc3QuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBvd25lcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHNlbmRlci5pZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aXRsZTogcmVxdWVzdGRhdGEudGl0bGUsXG4gICAgICBjb25kaXRpb246IHJlcXVlc3RkYXRhLmNvbmRpdGlvbixcbiAgICAgIGZvcm1hdDogcmVxdWVzdGRhdGEuZm9ybWF0LFxuICAgICAgYXV0aG9yOiByZXF1ZXN0ZGF0YS5hdXRob3IsXG4gICAgICBpc2JuOiByZXF1ZXN0ZGF0YS5pc2JuLFxuICAgICAgbm90ZXM6IHJlcXVlc3RkYXRhLm5vdGVzLFxuICAgICAgZGF0ZV9leHBpcmVzOiByZXF1ZXN0ZGF0YS5kYXRlX2V4cGlyZXMsXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJCb29rIHJlcXVlc3QgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBhdXRoKHJlcSwgcmVzLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgcmVxdWlyZVJvbGUoW1wiQVBQUk9WRURfVVNFUlwiLCBcIlNVQlNDUklCRURfVVNFUlwiXSkoXG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGhhbmRsZXIocmVxLCByZXMpO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJhdXRoIiwicmVxdWlyZVJvbGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2VuZGVyRW1haWwiLCJyZXF1ZXN0ZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJzZW5kZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJjcmVhdGVkQm9va1JlcXVlc3QiLCJyZXF1ZXN0IiwiY3JlYXRlIiwiZGF0YSIsIm93bmVyIiwiY29ubmVjdCIsImlkIiwidGl0bGUiLCJjb25kaXRpb24iLCJmb3JtYXQiLCJhdXRob3IiLCJpc2JuIiwibm90ZXMiLCJkYXRlX2V4cGlyZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/makerequest.js\n");

/***/ }),

/***/ "(api)/./utils/middleware.js":
/*!*****************************!*\
  !*** ./utils/middleware.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"requireRole\": () => (/* binding */ requireRole)\n/* harmony export */ });\n/* harmony import */ var _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/prismaDb */ \"(api)/./db/prismaDb.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function auth(req, res, next) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (!session) {\n        res.status(401).json({\n            message: \"Not authenticated\"\n        });\n        return;\n    }\n    const user = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!user) {\n        res.status(401).json({\n            message: \"User not found\"\n        });\n        return;\n    }\n    req.user = user;\n    next();\n}\nfunction requireRole(allowedRoles) {\n    return (req, res, next)=>{\n        if (!allowedRoles.includes(req.user.role)) {\n            res.status(403).json({\n                message: \"Forbidden: insufficient permissions\"\n            });\n            return;\n        }\n        next();\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9taWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ0s7QUFFdEMsZUFBZUUsS0FBS0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRTtJQUN6QyxNQUFNQyxVQUFVLE1BQU1MLDJEQUFVQSxDQUFDO1FBQUVFO0lBQUk7SUFFdkMsSUFBSSxDQUFDRyxTQUFTO1FBQ1pGLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFvQjtRQUNwRDtJQUNGLENBQUM7SUFFRCxNQUFNQyxPQUFPLE1BQU1WLGdFQUFzQixDQUFDO1FBQ3hDWSxPQUFPO1lBQUVDLE9BQU9QLFFBQVFJLElBQUksQ0FBQ0csS0FBSztRQUFDO0lBQ3JDO0lBRUEsSUFBSSxDQUFDSCxNQUFNO1FBQ1ROLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFpQjtRQUNqRDtJQUNGLENBQUM7SUFFRE4sSUFBSU8sSUFBSSxHQUFHQTtJQUNYTDtBQUNGLENBQUM7QUFFTSxTQUFTUyxZQUFZQyxZQUFZLEVBQUU7SUFDeEMsT0FBTyxDQUFDWixLQUFLQyxLQUFLQyxPQUFTO1FBQ3pCLElBQUksQ0FBQ1UsYUFBYUMsUUFBUSxDQUFDYixJQUFJTyxJQUFJLENBQUNPLElBQUksR0FBRztZQUN6Q2IsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFzQztZQUN0RTtRQUNGLENBQUM7UUFFREo7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ia3NuLXByaXNtYS10ZXN0Ly4vdXRpbHMvbWlkZGxld2FyZS5qcz8yMmM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi9kYi9wcmlzbWFEYlwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGgocmVxLCByZXMsIG5leHQpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIk5vdCBhdXRoZW50aWNhdGVkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcbiAgfSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVxLnVzZXIgPSB1c2VyO1xuICBuZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlUm9sZShhbGxvd2VkUm9sZXMpIHtcbiAgcmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGlmICghYWxsb3dlZFJvbGVzLmluY2x1ZGVzKHJlcS51c2VyLnJvbGUpKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6IFwiRm9yYmlkZGVuOiBpbnN1ZmZpY2llbnQgcGVybWlzc2lvbnNcIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0KCk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiZ2V0U2Vzc2lvbiIsImF1dGgiLCJyZXEiLCJyZXMiLCJuZXh0Iiwic2Vzc2lvbiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVtYWlsIiwicmVxdWlyZVJvbGUiLCJhbGxvd2VkUm9sZXMiLCJpbmNsdWRlcyIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/middleware.js\n");

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