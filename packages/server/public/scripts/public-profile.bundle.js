"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["public-profile"],{

/***/ "./src/views/public-profile/Collections.tsx":
/*!**************************************************!*\
  !*** ./src/views/public-profile/Collections.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_CollectionThumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/CollectionThumbnail */ "./src/partials/CollectionThumbnail.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Collections = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), collections = _a[0], setCollections = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        fetchCollections();
    }, []);
    // Send a request to fetch the list of collections
    var fetchCollections = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.get("/collections/shared/".concat(window.location.pathname.split("/")[2]), {
                        auth: true,
                    })];
                case 1:
                    response = (_a.sent());
                    setCollections(response.collections);
                    return [2 /*return*/];
            }
        });
    }); };
    // Render list of collections
    var renderCollections = function () {
        if (collections === null)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "a-14" }, { children: "User hasn't shared any collection." })) })));
        if (collections.length === 0)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })));
        return collections.map(function (cl) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_CollectionThumbnail__WEBPACK_IMPORTED_MODULE_4__["default"], { id: cl._id, name: cl.name, img: cl.photo.secure_url, desc: cl.description, pageNum: cl.pages.length, author: cl.user.name, refresh: true, target: "_blank" }) }), cl._id));
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "pb-main" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderCollections() })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collections);


/***/ }),

/***/ "./src/views/public-profile/Header.tsx":
/*!*********************************************!*\
  !*** ./src/views/public-profile/Header.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var Header = function () {
    var username = window.location.pathname.split("/")[2];
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), section = _a[0], setSection = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        setSection(getSection());
    }, []);
    // Return the current section based on the url
    var getSection = function () {
        if (window.location.pathname.split("/")[1] === "users") {
            if (!window.location.pathname.split("/")[3])
                return "home";
            if (window.location.pathname.split("/")[3] === "collections")
                return "collections";
            if (window.location.pathname.split("/")[3] === "pages")
                return "pages";
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "lined-btns-2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, __assign({ to: "/users/".concat(username, "/"), className: "btn-lined ".concat(section === "home" ? "btn-lined--active" : ""), onClick: function () { return setSection("home"); } }, { children: "Home" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, __assign({ to: "/users/".concat(username, "/pages"), className: "btn-lined ".concat(section === "pages" ? "btn-lined--active" : ""), onClick: function () { return setSection("pages"); } }, { children: "Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, __assign({ to: "/users/".concat(username, "/collections"), className: "btn-lined ".concat(section === "collections" ? "btn-lined--active" : ""), onClick: function () { return setSection("collections"); } }, { children: "Collections" }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/views/public-profile/Home.tsx":
/*!*******************************************!*\
  !*** ./src/views/public-profile/Home.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Home = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "pb-main" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary center-content italic" }, { children: "This part will be completed shortly!" })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/views/public-profile/Pages.tsx":
/*!********************************************!*\
  !*** ./src/views/public-profile/Pages.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/PageThumbnail */ "./src/partials/PageThumbnail.tsx");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_pagesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../library/pagesSlice */ "./src/views/library/pagesSlice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var Pages = function () {
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_library_pagesSlice__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
    var pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_library_pagesSlice__WEBPACK_IMPORTED_MODULE_4__.selectPages);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        dispatch((0,_library_pagesSlice__WEBPACK_IMPORTED_MODULE_4__.fetchPages)("PB-pages"));
    }, []);
    var renderPages = function () {
        if (loading)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })));
        if (pages === null)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "a-14" }, { children: "User doesn't have any public page." })) })));
        /** @todo: fix the any type */
        return pages.map(function (item) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { status: "normal", id: item.id, briefDes: item.briefDes, title: item.title, image: item.photo, target: "_blank", url: item.url, type: "public", label: item.date }) }), item.id));
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "pb-main" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderPages() })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pages);


/***/ }),

/***/ "./src/views/public-profile/index.tsx":
/*!********************************************!*\
  !*** ./src/views/public-profile/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _library_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/store */ "./src/views/library/store.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/views/public-profile/Header.tsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ "./src/views/public-profile/Home.tsx");
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages */ "./src/views/public-profile/Pages.tsx");
/* harmony import */ var _Collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Collections */ "./src/views/public-profile/Collections.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








function PublicProfile() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, __assign({ store: _library_store__WEBPACK_IMPORTED_MODULE_2__.store }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/users/:username/pages", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Pages__WEBPACK_IMPORTED_MODULE_5__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/users/:username/collections", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collections__WEBPACK_IMPORTED_MODULE_6__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/users/:username", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {}) })] })] }) })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicProfile);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNZO0FBQ3BDO0FBQ0U7QUFDWDtBQUNKO0FBQ0U7QUFDWTtBQUN4QztBQUNBLFlBQVksc0RBQUksQ0FBQyxpREFBUSxhQUFhLE9BQU8saURBQUssRUFBRSxJQUFJLFVBQVUsdURBQUssQ0FBQywyREFBTSxJQUFJLFdBQVcsc0RBQUksQ0FBQywrQ0FBTSxJQUFJLEdBQUcsdURBQUssQ0FBQyxvREFBTSxJQUFJLFdBQVcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLHlDQUF5QyxzREFBSSxDQUFDLDhDQUFLLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsbURBQUssSUFBSSwrQ0FBK0Msc0RBQUksQ0FBQyxvREFBVyxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLG1EQUFLLElBQUksbUNBQW1DLHNEQUFJLENBQUMsNkNBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHO0FBQ3hYO0FBQ0EsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvcHVibGljLXByb2ZpbGUvQ29sbGVjdGlvbnMudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3B1YmxpYy1wcm9maWxlL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvcHVibGljLXByb2ZpbGUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvcHVibGljLXByb2ZpbGUvUGFnZXMudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3B1YmxpYy1wcm9maWxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuLi8uLi9wYXJ0aWFscy9Db2xsZWN0aW9uVGh1bWJuYWlsXCI7XG52YXIgQ29sbGVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoW10pLCBjb2xsZWN0aW9ucyA9IF9hWzBdLCBzZXRDb2xsZWN0aW9ucyA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoQ29sbGVjdGlvbnMoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gU2VuZCBhIHJlcXVlc3QgdG8gZmV0Y2ggdGhlIGxpc3Qgb2YgY29sbGVjdGlvbnNcbiAgICB2YXIgZmV0Y2hDb2xsZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5nZXQoXCIvY29sbGVjdGlvbnMvc2hhcmVkL1wiLmNvbmNhdCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sbGVjdGlvbnMocmVzcG9uc2UuY29sbGVjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIC8vIFJlbmRlciBsaXN0IG9mIGNvbGxlY3Rpb25zXG4gICAgdmFyIHJlbmRlckNvbGxlY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29sbGVjdGlvbnMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTRcIiB9LCB7IGNoaWxkcmVuOiBcIlVzZXIgaGFzbid0IHNoYXJlZCBhbnkgY29sbGVjdGlvbi5cIiB9KSkgfSkpKTtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goTG9hZGluZywge30pIH0pKSk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9ucy5tYXAoZnVuY3Rpb24gKGNsKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sLWxnLTEtb2YtNSBjb2wtbWQtMS1vZi01IGNvbC1zbS0xLW9mLTMgY29sLXhzLTEtb2YtMiBjb2wteHhzLTEtb2YtMVwiIH0sIHsgY2hpbGRyZW46IF9qc3goQ29sbGVjdGlvbiwgeyBpZDogY2wuX2lkLCBuYW1lOiBjbC5uYW1lLCBpbWc6IGNsLnBob3RvLnNlY3VyZV91cmwsIGRlc2M6IGNsLmRlc2NyaXB0aW9uLCBwYWdlTnVtOiBjbC5wYWdlcy5sZW5ndGgsIGF1dGhvcjogY2wudXNlci5uYW1lLCByZWZyZXNoOiB0cnVlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSkgfSksIGNsLl9pZCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYi1tYWluXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb2xsZWN0aW9ucygpIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25zO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbnZhciBIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgc2VjdGlvbiA9IF9hWzBdLCBzZXRTZWN0aW9uID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0U2VjdGlvbihnZXRTZWN0aW9uKCkpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgc2VjdGlvbiBiYXNlZCBvbiB0aGUgdXJsXG4gICAgdmFyIGdldFNlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PSBcInVzZXJzXCIpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob21lXCI7XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSA9PT0gXCJjb2xsZWN0aW9uc1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbGxlY3Rpb25zXCI7XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSA9PT0gXCJwYWdlc1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhZ2VzXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGluZWQtYnRucy0yXCIgfSwgeyBjaGlsZHJlbjogW19qc3goTGluaywgX19hc3NpZ24oeyB0bzogXCIvdXNlcnMvXCIuY29uY2F0KHVzZXJuYW1lLCBcIi9cIiksIGNsYXNzTmFtZTogXCJidG4tbGluZWQgXCIuY29uY2F0KHNlY3Rpb24gPT09IFwiaG9tZVwiID8gXCJidG4tbGluZWQtLWFjdGl2ZVwiIDogXCJcIiksIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFNlY3Rpb24oXCJob21lXCIpOyB9IH0sIHsgY2hpbGRyZW46IFwiSG9tZVwiIH0pKSwgX2pzeChMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi91c2Vycy9cIi5jb25jYXQodXNlcm5hbWUsIFwiL3BhZ2VzXCIpLCBjbGFzc05hbWU6IFwiYnRuLWxpbmVkIFwiLmNvbmNhdChzZWN0aW9uID09PSBcInBhZ2VzXCIgPyBcImJ0bi1saW5lZC0tYWN0aXZlXCIgOiBcIlwiKSwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0U2VjdGlvbihcInBhZ2VzXCIpOyB9IH0sIHsgY2hpbGRyZW46IFwiUGFnZXNcIiB9KSksIF9qc3goTGluaywgX19hc3NpZ24oeyB0bzogXCIvdXNlcnMvXCIuY29uY2F0KHVzZXJuYW1lLCBcIi9jb2xsZWN0aW9uc1wiKSwgY2xhc3NOYW1lOiBcImJ0bi1saW5lZCBcIi5jb25jYXQoc2VjdGlvbiA9PT0gXCJjb2xsZWN0aW9uc1wiID8gXCJidG4tbGluZWQtLWFjdGl2ZVwiIDogXCJcIiksIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFNlY3Rpb24oXCJjb2xsZWN0aW9uc1wiKTsgfSB9LCB7IGNoaWxkcmVuOiBcIkNvbGxlY3Rpb25zXCIgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIEhvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBiLW1haW5cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeSBjZW50ZXItY29udGVudCBpdGFsaWNcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgcGFydCB3aWxsIGJlIGNvbXBsZXRlZCBzaG9ydGx5IVwiIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2VUaHVtYm5haWwgZnJvbSBcIi4uLy4uL3BhcnRpYWxzL1BhZ2VUaHVtYm5haWxcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgZmV0Y2hQYWdlcywgc2VsZWN0UGFnZXMsIHNlbGVjdExvYWRpbmcgfSBmcm9tIFwiLi4vbGlicmFyeS9wYWdlc1NsaWNlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbnZhciBQYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBwYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2VzKTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUGFnZXMoXCJQQi1wYWdlc1wiKSk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZW5kZXJQYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvYWRpbmcpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgICAgICBpZiAocGFnZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTRcIiB9LCB7IGNoaWxkcmVuOiBcIlVzZXIgZG9lc24ndCBoYXZlIGFueSBwdWJsaWMgcGFnZS5cIiB9KSkgfSkpKTtcbiAgICAgICAgLyoqIEB0b2RvOiBmaXggdGhlIGFueSB0eXBlICovXG4gICAgICAgIHJldHVybiBwYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi01IGNvbC1tZC0xLW9mLTUgY29sLXNtLTEtb2YtMyBjb2wteHMtMS1vZi0yIGNvbC14eHMtMS1vZi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChQYWdlVGh1bWJuYWlsLCB7IHN0YXR1czogXCJub3JtYWxcIiwgaWQ6IGl0ZW0uaWQsIGJyaWVmRGVzOiBpdGVtLmJyaWVmRGVzLCB0aXRsZTogaXRlbS50aXRsZSwgaW1hZ2U6IGl0ZW0ucGhvdG8sIHRhcmdldDogXCJfYmxhbmtcIiwgdXJsOiBpdGVtLnVybCwgdHlwZTogXCJwdWJsaWNcIiwgbGFiZWw6IGl0ZW0uZGF0ZSB9KSB9KSwgaXRlbS5pZCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYi1tYWluXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJQYWdlcygpIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2xpYnJhcnkvc3RvcmVcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgUGFnZXMgZnJvbSBcIi4vUGFnZXNcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9Db2xsZWN0aW9uc1wiO1xuZnVuY3Rpb24gUHVibGljUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gKF9qc3goUHJvdmlkZXIsIF9fYXNzaWduKHsgc3RvcmU6IHN0b3JlIH0sIHsgY2hpbGRyZW46IF9qc3hzKFJvdXRlciwgeyBjaGlsZHJlbjogW19qc3goSGVhZGVyLCB7fSksIF9qc3hzKFJvdXRlcywgeyBjaGlsZHJlbjogW19qc3goUm91dGUsIHsgcGF0aDogXCIvdXNlcnMvOnVzZXJuYW1lL3BhZ2VzXCIsIGVsZW1lbnQ6IF9qc3goUGFnZXMsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi91c2Vycy86dXNlcm5hbWUvY29sbGVjdGlvbnNcIiwgZWxlbWVudDogX2pzeChDb2xsZWN0aW9ucywge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL3VzZXJzLzp1c2VybmFtZVwiLCBlbGVtZW50OiBfanN4KEhvbWUsIHt9KSB9KV0gfSldIH0pIH0pKSk7XG59XG5leHBvcnQgZGVmYXVsdCBQdWJsaWNQcm9maWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9