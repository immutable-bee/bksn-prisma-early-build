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
exports.id = "pages/api/offers";
exports.ids = ["pages/api/offers"];
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

/***/ "(api)/./pages/api/offers.js":
/*!*****************************!*\
  !*** ./pages/api/offers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prismaDb */ \"(api)/./db/prismaDb.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const senderEmail = JSON.parse(req.body);\n    const sender = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email: senderEmail\n        }\n    });\n    const listingsWithOffers = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.listing.findMany({\n        where: {\n            ownerId: sender.id,\n            offers: {\n                some: {}\n            }\n        }\n    });\n    const requestsWithOffers = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.request.findMany({\n        where: {\n            ownerId: sender.id,\n            offers: {\n                some: {}\n            }\n        }\n    });\n    const requestOffers = requestsWithOffers.forEach(async (request)=>await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.offer.findUnique({\n            where: {\n                requestId: request.id\n            }\n        }));\n    const listingOffers = listingsWithOffers.forEach(async (listing)=>await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.offer.findUnique({\n            where: {\n                listingId: listing.id\n            }\n        }));\n    const listingOffersSent = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.offer.findMany({\n        where: {\n            sender: sender,\n            request: {\n                is: null\n            }\n        }\n    });\n    const requestOffersSent = await _db_prismaDb__WEBPACK_IMPORTED_MODULE_0__.prisma.offer.findMany({\n        where: {\n            sender: sender,\n            listing: {\n                is: null\n            }\n        }\n    });\n    res.json([\n        listingOffers,\n        requestOffers,\n        listingOffersSent,\n        requestOffersSent\n    ]);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb2ZmZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTNDLGlFQUFlLE9BQU9DLEtBQUtDLE1BQVE7SUFDakMsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDSixJQUFJSyxJQUFJO0lBQ3ZDLE1BQU1DLFNBQVMsTUFBTVAsZ0VBQXNCLENBQUM7UUFDMUNVLE9BQU87WUFBRUMsT0FBT1I7UUFBWTtJQUM5QjtJQUNBLE1BQU1TLHFCQUFxQixNQUFNWixpRUFBdUIsQ0FBQztRQUN2RFUsT0FBTztZQUFFSyxTQUFTUixPQUFPUyxFQUFFO1lBQUVDLFFBQVE7Z0JBQUVDLE1BQU0sQ0FBQztZQUFFO1FBQUU7SUFDcEQ7SUFFQSxNQUFNQyxxQkFBcUIsTUFBTW5CLGlFQUF1QixDQUFDO1FBQ3ZEVSxPQUFPO1lBQUVLLFNBQVNSLE9BQU9TLEVBQUU7WUFBRUMsUUFBUTtnQkFBRUMsTUFBTSxDQUFDO1lBQUU7UUFBRTtJQUNwRDtJQUVBLE1BQU1HLGdCQUFnQkYsbUJBQW1CRyxPQUFPLENBQzlDLE9BQU9GLFVBQ0wsTUFBTXBCLGlFQUF1QixDQUFDO1lBQzVCVSxPQUFPO2dCQUFFYyxXQUFXSixRQUFRSixFQUFFO1lBQUM7UUFDakM7SUFHSixNQUFNUyxnQkFBZ0JiLG1CQUFtQlUsT0FBTyxDQUM5QyxPQUFPVCxVQUNMLE1BQU1iLGlFQUF1QixDQUFDO1lBQzVCVSxPQUFPO2dCQUFFZ0IsV0FBV2IsUUFBUUcsRUFBRTtZQUFDO1FBQ2pDO0lBR0osTUFBTVcsb0JBQW9CLE1BQU0zQiwrREFBcUIsQ0FBQztRQUNwRFUsT0FBTztZQUFFSCxRQUFRQTtZQUFRYSxTQUFTO2dCQUFFUSxJQUFJLElBQUk7WUFBQztRQUFFO0lBQ2pEO0lBRUEsTUFBTUMsb0JBQW9CLE1BQU03QiwrREFBcUIsQ0FBQztRQUNwRFUsT0FBTztZQUFFSCxRQUFRQTtZQUFRTSxTQUFTO2dCQUFFZSxJQUFJLElBQUk7WUFBQztRQUFFO0lBQ2pEO0lBRUExQixJQUFJNEIsSUFBSSxDQUFDO1FBQ1BMO1FBQ0FKO1FBQ0FNO1FBQ0FFO0tBQ0Q7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmtzbi1wcmlzbWEtdGVzdC8uL3BhZ2VzL2FwaS9vZmZlcnMuanM/NzJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vZGIvcHJpc21hRGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNlbmRlckVtYWlsID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gIGNvbnN0IHNlbmRlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsOiBzZW5kZXJFbWFpbCB9LFxuICB9KTtcbiAgY29uc3QgbGlzdGluZ3NXaXRoT2ZmZXJzID0gYXdhaXQgcHJpc21hLmxpc3RpbmcuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IG93bmVySWQ6IHNlbmRlci5pZCwgb2ZmZXJzOiB7IHNvbWU6IHt9IH0gfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVxdWVzdHNXaXRoT2ZmZXJzID0gYXdhaXQgcHJpc21hLnJlcXVlc3QuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IG93bmVySWQ6IHNlbmRlci5pZCwgb2ZmZXJzOiB7IHNvbWU6IHt9IH0gfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVxdWVzdE9mZmVycyA9IHJlcXVlc3RzV2l0aE9mZmVycy5mb3JFYWNoKFxuICAgIGFzeW5jIChyZXF1ZXN0KSA9PlxuICAgICAgYXdhaXQgcHJpc21hLm9mZmVyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyByZXF1ZXN0SWQ6IHJlcXVlc3QuaWQgfSxcbiAgICAgIH0pXG4gICk7XG5cbiAgY29uc3QgbGlzdGluZ09mZmVycyA9IGxpc3RpbmdzV2l0aE9mZmVycy5mb3JFYWNoKFxuICAgIGFzeW5jIChsaXN0aW5nKSA9PlxuICAgICAgYXdhaXQgcHJpc21hLm9mZmVyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBsaXN0aW5nSWQ6IGxpc3RpbmcuaWQgfSxcbiAgICAgIH0pXG4gICk7XG5cbiAgY29uc3QgbGlzdGluZ09mZmVyc1NlbnQgPSBhd2FpdCBwcmlzbWEub2ZmZXIuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHNlbmRlcjogc2VuZGVyLCByZXF1ZXN0OiB7IGlzOiBudWxsIH0gfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVxdWVzdE9mZmVyc1NlbnQgPSBhd2FpdCBwcmlzbWEub2ZmZXIuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHNlbmRlcjogc2VuZGVyLCBsaXN0aW5nOiB7IGlzOiBudWxsIH0gfSxcbiAgfSk7XG5cbiAgcmVzLmpzb24oW1xuICAgIGxpc3RpbmdPZmZlcnMsXG4gICAgcmVxdWVzdE9mZmVycyxcbiAgICBsaXN0aW5nT2ZmZXJzU2VudCxcbiAgICByZXF1ZXN0T2ZmZXJzU2VudCxcbiAgXSk7XG59O1xuIl0sIm5hbWVzIjpbInByaXNtYSIsInJlcSIsInJlcyIsInNlbmRlckVtYWlsIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNlbmRlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsImxpc3RpbmdzV2l0aE9mZmVycyIsImxpc3RpbmciLCJmaW5kTWFueSIsIm93bmVySWQiLCJpZCIsIm9mZmVycyIsInNvbWUiLCJyZXF1ZXN0c1dpdGhPZmZlcnMiLCJyZXF1ZXN0IiwicmVxdWVzdE9mZmVycyIsImZvckVhY2giLCJvZmZlciIsInJlcXVlc3RJZCIsImxpc3RpbmdPZmZlcnMiLCJsaXN0aW5nSWQiLCJsaXN0aW5nT2ZmZXJzU2VudCIsImlzIiwicmVxdWVzdE9mZmVyc1NlbnQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/offers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/offers.js"));
module.exports = __webpack_exports__;

})();