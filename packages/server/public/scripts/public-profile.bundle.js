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
            var _a, _b;
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_CollectionThumbnail__WEBPACK_IMPORTED_MODULE_4__["default"], { id: cl.id, name: cl.name, img: ((_a = cl.photo) === null || _a === void 0 ? void 0 : _a.secure_url) || "", desc: cl.description, pageNum: cl.pageCount, author: (_b = cl.user) === null || _b === void 0 ? void 0 : _b.username, refresh: true, target: "_blank" }) }), cl.id));
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
            var _a, _b, _c;
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { status: "normal", id: item.id, briefDes: (_a = item.contents) === null || _a === void 0 ? void 0 : _a.briefDes, title: (_b = item.contents) === null || _b === void 0 ? void 0 : _b.title, image: (_c = item.photo) === null || _c === void 0 ? void 0 : _c.secure_url, target: "_blank", url: item.url, type: "public", label: item.date }) }), item.id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDWTtBQUNwQztBQUNFO0FBQ1g7QUFDSjtBQUNFO0FBQ1k7QUFDeEM7QUFDQSxZQUFZLHNEQUFJLENBQUMsaURBQVEsYUFBYSxPQUFPLGlEQUFLLEVBQUUsSUFBSSxVQUFVLHVEQUFLLENBQUMsMkRBQU0sSUFBSSxXQUFXLHNEQUFJLENBQUMsK0NBQU0sSUFBSSxHQUFHLHVEQUFLLENBQUMsb0RBQU0sSUFBSSxXQUFXLHNEQUFJLENBQUMsbURBQUssSUFBSSx5Q0FBeUMsc0RBQUksQ0FBQyw4Q0FBSyxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLG1EQUFLLElBQUksK0NBQStDLHNEQUFJLENBQUMsb0RBQVcsSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLG1DQUFtQyxzREFBSSxDQUFDLDZDQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRztBQUN4WDtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3B1YmxpYy1wcm9maWxlL0NvbGxlY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wdWJsaWMtcHJvZmlsZS9IZWFkZXIudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3B1YmxpYy1wcm9maWxlL0hvbWUudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3B1YmxpYy1wcm9maWxlL1BhZ2VzLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wdWJsaWMtcHJvZmlsZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vcGFydGlhbHMvQ29sbGVjdGlvblRodW1ibmFpbFwiO1xudmFyIENvbGxlY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFtdKSwgY29sbGVjdGlvbnMgPSBfYVswXSwgc2V0Q29sbGVjdGlvbnMgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBmZXRjaENvbGxlY3Rpb25zKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFNlbmQgYSByZXF1ZXN0IHRvIGZldGNoIHRoZSBsaXN0IG9mIGNvbGxlY3Rpb25zXG4gICAgdmFyIGZldGNoQ29sbGVjdGlvbnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL2NvbGxlY3Rpb25zL3NoYXJlZC9cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbGxlY3Rpb25zKHJlc3BvbnNlLmNvbGxlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICAvLyBSZW5kZXIgbGlzdCBvZiBjb2xsZWN0aW9uc1xuICAgIHZhciByZW5kZXJDb2xsZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25zID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTE0XCIgfSwgeyBjaGlsZHJlbjogXCJVc2VyIGhhc24ndCBzaGFyZWQgYW55IGNvbGxlY3Rpb24uXCIgfSkpIH0pKSk7XG4gICAgICAgIGlmIChjb2xsZWN0aW9ucy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbnMubWFwKGZ1bmN0aW9uIChjbCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi01IGNvbC1tZC0xLW9mLTUgY29sLXNtLTEtb2YtMyBjb2wteHMtMS1vZi0yIGNvbC14eHMtMS1vZi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChDb2xsZWN0aW9uLCB7IGlkOiBjbC5pZCwgbmFtZTogY2wubmFtZSwgaW1nOiAoKF9hID0gY2wucGhvdG8pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZWN1cmVfdXJsKSB8fCBcIlwiLCBkZXNjOiBjbC5kZXNjcmlwdGlvbiwgcGFnZU51bTogY2wucGFnZUNvdW50LCBhdXRob3I6IChfYiA9IGNsLnVzZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi51c2VybmFtZSwgcmVmcmVzaDogdHJ1ZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH0pIH0pLCBjbC5pZCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYi1tYWluXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb2xsZWN0aW9ucygpIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25zO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbnZhciBIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgc2VjdGlvbiA9IF9hWzBdLCBzZXRTZWN0aW9uID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0U2VjdGlvbihnZXRTZWN0aW9uKCkpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgc2VjdGlvbiBiYXNlZCBvbiB0aGUgdXJsXG4gICAgdmFyIGdldFNlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PSBcInVzZXJzXCIpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob21lXCI7XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSA9PT0gXCJjb2xsZWN0aW9uc1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbGxlY3Rpb25zXCI7XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVszXSA9PT0gXCJwYWdlc1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInBhZ2VzXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGluZWQtYnRucy0yXCIgfSwgeyBjaGlsZHJlbjogW19qc3goTGluaywgX19hc3NpZ24oeyB0bzogXCIvdXNlcnMvXCIuY29uY2F0KHVzZXJuYW1lLCBcIi9cIiksIGNsYXNzTmFtZTogXCJidG4tbGluZWQgXCIuY29uY2F0KHNlY3Rpb24gPT09IFwiaG9tZVwiID8gXCJidG4tbGluZWQtLWFjdGl2ZVwiIDogXCJcIiksIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFNlY3Rpb24oXCJob21lXCIpOyB9IH0sIHsgY2hpbGRyZW46IFwiSG9tZVwiIH0pKSwgX2pzeChMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi91c2Vycy9cIi5jb25jYXQodXNlcm5hbWUsIFwiL3BhZ2VzXCIpLCBjbGFzc05hbWU6IFwiYnRuLWxpbmVkIFwiLmNvbmNhdChzZWN0aW9uID09PSBcInBhZ2VzXCIgPyBcImJ0bi1saW5lZC0tYWN0aXZlXCIgOiBcIlwiKSwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0U2VjdGlvbihcInBhZ2VzXCIpOyB9IH0sIHsgY2hpbGRyZW46IFwiUGFnZXNcIiB9KSksIF9qc3goTGluaywgX19hc3NpZ24oeyB0bzogXCIvdXNlcnMvXCIuY29uY2F0KHVzZXJuYW1lLCBcIi9jb2xsZWN0aW9uc1wiKSwgY2xhc3NOYW1lOiBcImJ0bi1saW5lZCBcIi5jb25jYXQoc2VjdGlvbiA9PT0gXCJjb2xsZWN0aW9uc1wiID8gXCJidG4tbGluZWQtLWFjdGl2ZVwiIDogXCJcIiksIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFNlY3Rpb24oXCJjb2xsZWN0aW9uc1wiKTsgfSB9LCB7IGNoaWxkcmVuOiBcIkNvbGxlY3Rpb25zXCIgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIEhvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBiLW1haW5cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeSBjZW50ZXItY29udGVudCBpdGFsaWNcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgcGFydCB3aWxsIGJlIGNvbXBsZXRlZCBzaG9ydGx5IVwiIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2VUaHVtYm5haWwgZnJvbSBcIi4uLy4uL3BhcnRpYWxzL1BhZ2VUaHVtYm5haWxcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgZmV0Y2hQYWdlcywgc2VsZWN0UGFnZXMsIHNlbGVjdExvYWRpbmcgfSBmcm9tIFwiLi4vbGlicmFyeS9wYWdlc1NsaWNlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbnZhciBQYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBwYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2VzKTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUGFnZXMoXCJQQi1wYWdlc1wiKSk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZW5kZXJQYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvYWRpbmcpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgICAgICBpZiAocGFnZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTRcIiB9LCB7IGNoaWxkcmVuOiBcIlVzZXIgZG9lc24ndCBoYXZlIGFueSBwdWJsaWMgcGFnZS5cIiB9KSkgfSkpKTtcbiAgICAgICAgLyoqIEB0b2RvOiBmaXggdGhlIGFueSB0eXBlICovXG4gICAgICAgIHJldHVybiBwYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbC1sZy0xLW9mLTUgY29sLW1kLTEtb2YtNSBjb2wtc20tMS1vZi0zIGNvbC14cy0xLW9mLTIgY29sLXh4cy0xLW9mLTFcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFBhZ2VUaHVtYm5haWwsIHsgc3RhdHVzOiBcIm5vcm1hbFwiLCBpZDogaXRlbS5pZCwgYnJpZWZEZXM6IChfYSA9IGl0ZW0uY29udGVudHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5icmllZkRlcywgdGl0bGU6IChfYiA9IGl0ZW0uY29udGVudHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50aXRsZSwgaW1hZ2U6IChfYyA9IGl0ZW0ucGhvdG8pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zZWN1cmVfdXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHVybDogaXRlbS51cmwsIHR5cGU6IFwicHVibGljXCIsIGxhYmVsOiBpdGVtLmRhdGUgfSkgfSksIGl0ZW0uaWQpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGItbWFpblwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogcmVuZGVyUGFnZXMoKSB9KSkgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQYWdlcztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9saWJyYXJ5L3N0b3JlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IFBhZ2VzIGZyb20gXCIuL1BhZ2VzXCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcIi4vQ29sbGVjdGlvbnNcIjtcbmZ1bmN0aW9uIFB1YmxpY1Byb2ZpbGUoKSB7XG4gICAgcmV0dXJuIChfanN4KFByb3ZpZGVyLCBfX2Fzc2lnbih7IHN0b3JlOiBzdG9yZSB9LCB7IGNoaWxkcmVuOiBfanN4cyhSb3V0ZXIsIHsgY2hpbGRyZW46IFtfanN4KEhlYWRlciwge30pLCBfanN4cyhSb3V0ZXMsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IHBhdGg6IFwiL3VzZXJzLzp1c2VybmFtZS9wYWdlc1wiLCBlbGVtZW50OiBfanN4KFBhZ2VzLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvdXNlcnMvOnVzZXJuYW1lL2NvbGxlY3Rpb25zXCIsIGVsZW1lbnQ6IF9qc3goQ29sbGVjdGlvbnMsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi91c2Vycy86dXNlcm5hbWVcIiwgZWxlbWVudDogX2pzeChIb21lLCB7fSkgfSldIH0pXSB9KSB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgUHVibGljUHJvZmlsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==