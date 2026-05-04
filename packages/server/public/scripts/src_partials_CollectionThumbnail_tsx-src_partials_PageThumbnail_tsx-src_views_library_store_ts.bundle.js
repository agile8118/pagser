"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["src_partials_CollectionThumbnail_tsx-src_partials_PageThumbnail_tsx-src_views_library_store_ts"],{

/***/ "./src/partials/CollectionThumbnail.tsx":
/*!**********************************************!*\
  !*** ./src/partials/CollectionThumbnail.tsx ***!
  \**********************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
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




var Collection = function (props) {
    var numText = props.pageNum && props.pageNum > 1
        ? "".concat(props.pageNum, " pages")
        : "".concat(props.pageNum || 0, " page");
    var content = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__photo" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: props.img, onError: function (e) {
                            e.target.src =
                                _pagser_common__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_PLACEHOLDER_IMAGE;
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__num-label" }, { children: [numText, " ", props.pageNum > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-newspaper-o", "aria-hidden": "true" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__view-label" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-eye", "aria-hidden": "true" }), "View"] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__details" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail__name" }, { children: props.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail__desc" }, { children: props.desc })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail__author" }, { children: props.author }))] }))] }));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail", onClick: props.onClick }, { children: props.refresh ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/collection/".concat(props.id), target: props.target }, { children: content }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, __assign({ to: "/collection/".concat(props.id) }, { children: content }))) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection);


/***/ }),

/***/ "./src/partials/PageThumbnail.tsx":
/*!****************************************!*\
  !*** ./src/partials/PageThumbnail.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_1__);
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


var PageThumbnail = function (props) {
    if (props.noPhoto) {
        var briefDes_1 = props.briefDes;
        var title_1 = props.title;
        var url_1 = "";
        var className_1 = "";
        var target_1 = props.target;
        if (props.title.length > 25) {
            title_1 = props.title.substring(0, 25) + "...";
        }
        if (props.briefDes.length > 35) {
            briefDes_1 = props.briefDes.substring(0, 35) + "...";
        }
        if (props.briefDes.length === 0) {
            briefDes_1 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: "No brief description provided." });
        }
        if (props.type === "draft") {
            url_1 = "/new-page/page-contents?id=".concat(props.id);
        }
        if (props.status === "normal" || !props.status) {
            className_1 = "page-thumbnail page-thumbnail-no-photo";
        }
        else if (props.status === "editing") {
            className_1 =
                "page-thumbnail page-thumbnail-no-photo page-thumbnail--shaking";
            url_1 = "javascript:void(0)";
            target_1 = "_self";
        }
        if (props.status === "editing" && props.selected)
            className_1 += " page-thumbnail--selected";
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: className_1, onClick: props.onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: url_1, target: target_1 }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-thumbnail__details" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: title_1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: briefDes_1 })] })), props.label && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "page-thumbnail__type" }, { children: props.label })))] })) })));
    }
    var briefDes = props.briefDes;
    var title = props.title;
    var url = "";
    var className = "";
    var target = props.target;
    if (props.type === "private") {
        url = "/".concat(props.authorUsername, "/").concat(props.url);
    }
    else if (props.type === "public") {
        url = "/public-pages/".concat(props.url);
    }
    if (props.title.length > 25) {
        title = props.title.substring(0, 25) + "...";
    }
    if (props.briefDes.length > 35) {
        briefDes = props.briefDes.substring(0, 35) + "...";
    }
    if (props.briefDes.length === 0) {
        briefDes = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: "No brief description provided." });
    }
    if (props.status === "normal" || !props.status) {
        className = "page-thumbnail";
    }
    else if (props.status === "editing") {
        className = "page-thumbnail page-thumbnail--shaking";
        url = "javascript:void(0)";
        target = "_self";
    }
    if (props.status === "editing" && props.selected)
        className += " page-thumbnail--selected";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: className, onClick: props.onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: url, target: target }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-thumbnail__photo" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: props.image || _pagser_common__WEBPACK_IMPORTED_MODULE_1__.PAGE_PLACEHOLDER_IMAGE, onError: function (e) {
                            e.target.src =
                                _pagser_common__WEBPACK_IMPORTED_MODULE_1__.PAGE_PLACEHOLDER_IMAGE;
                        } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-thumbnail__details" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: briefDes })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "page-thumbnail__type" }, { children: props.label ? props.label : props.type }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageThumbnail);


/***/ }),

/***/ "./src/views/library/pagesSlice.ts":
/*!*****************************************!*\
  !*** ./src/views/library/pagesSlice.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchPages": () => (/* binding */ fetchPages),
/* harmony export */   "pagesSlice": () => (/* binding */ pagesSlice),
/* harmony export */   "removePages": () => (/* binding */ removePages),
/* harmony export */   "selectFilterBy": () => (/* binding */ selectFilterBy),
/* harmony export */   "selectLoading": () => (/* binding */ selectLoading),
/* harmony export */   "selectPage": () => (/* binding */ selectPage),
/* harmony export */   "selectPages": () => (/* binding */ selectPages),
/* harmony export */   "selectSelectedPages": () => (/* binding */ selectSelectedPages),
/* harmony export */   "selectSortBy": () => (/* binding */ selectSortBy),
/* harmony export */   "selectStatus": () => (/* binding */ selectStatus),
/* harmony export */   "setFilterBy": () => (/* binding */ setFilterBy),
/* harmony export */   "setList": () => (/* binding */ setList),
/* harmony export */   "setLoading": () => (/* binding */ setLoading),
/* harmony export */   "setSortBy": () => (/* binding */ setSortBy),
/* harmony export */   "setStatus": () => (/* binding */ setStatus)
/* harmony export */ });
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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
var _a;


var initialState = {
    loading: true,
    list: [],
    selected: [],
    status: "normal",
    sortBy: "date-added-asc",
    filterBy: "all",
};
var pagesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "Pages",
    initialState: initialState,
    reducers: {
        setLoading: function (state, action) {
            state.loading = action.payload;
        },
        setStatus: function (state, action) {
            state.status = action.payload;
            state.selected = [];
        },
        setSortBy: function (state, action) {
            state.sortBy = action.payload;
        },
        setFilterBy: function (state, action) {
            state.filterBy = action.payload;
        },
        setList: function (state, action) {
            state.list = action.payload;
        },
        selectPage: function (state, action) {
            var index = state.selected.indexOf(action.payload);
            if (index === -1) {
                // Add the page to the selected list
                state.selected.push(action.payload);
            }
            else {
                // Remove the page from the selected list
                state.selected.splice(index, 1);
            }
        },
    },
});
// Fetch pages from the server
var fetchPages = function (kind, filterBy, sortBy) {
    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch(setLoading(true));
                    url = kind === "PB-pages"
                        ? "/users/".concat(window.location.pathname.split("/")[2], "/pages")
                        : "/".concat(kind, "?sortBy=").concat(sortBy, "&filterBy=").concat(filterBy);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_0__.request.get(url, {
                            auth: true,
                        })];
                case 1:
                    response = (_a.sent());
                    /** @todo: make it so that we always use data.pages */
                    dispatch(setList(response.results || response.pages));
                    if (filterBy)
                        dispatch(setFilterBy(response.filterBy));
                    if (sortBy)
                        dispatch(setSortBy(response.sortBy));
                    dispatch(setLoading(false));
                    return [2 /*return*/];
            }
        });
    }); };
};
// Sends a request to server to remove pages from a list, or delete draft pages
var removePages = function (kind) {
    return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
        var newList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_0__.loadingModal)("Loading...");
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_0__.request["delete"]("/".concat(kind), {
                            data: { ids: getState().pages.selected },
                            auth: true,
                        })];
                case 1:
                    _a.sent();
                    newList = getState().pages.list.filter(function (page) {
                        return getState().pages.selected.indexOf(page.id) === -1;
                    });
                    dispatch(setList(newList));
                    dispatch(setStatus("normal"));
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_0__.loadingModal)();
                    if (getState().sideNav.section === "pages/draft") {
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_0__.alert)("Draft Page(s) successfully deleted.", "success");
                    }
                    else {
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_0__.alert)("Page(s) successfully removed from your list.", "success");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
};
var setLoading = (_a = pagesSlice.actions, _a.setLoading), setStatus = _a.setStatus, setSortBy = _a.setSortBy, setFilterBy = _a.setFilterBy, selectPage = _a.selectPage, setList = _a.setList;
var selectLoading = function (state) { return state.pages.loading; };
var selectStatus = function (state) { return state.pages.status; };
var selectSortBy = function (state) { return state.pages.sortBy; };
var selectFilterBy = function (state) { return state.pages.filterBy; };
var selectSelectedPages = function (state) { return state.pages.selected; };
var selectPages = function (state) { return state.pages.list; };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pagesSlice.reducer);


/***/ }),

/***/ "./src/views/library/side-nav/sideNavSlice.ts":
/*!****************************************************!*\
  !*** ./src/views/library/side-nav/sideNavSlice.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "selectSection": () => (/* binding */ selectSection),
/* harmony export */   "setSection": () => (/* binding */ setSection),
/* harmony export */   "sideNavSlice": () => (/* binding */ sideNavSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var initialState = {
    section: "",
};
var sideNavSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "sideNav",
    initialState: initialState,
    reducers: {
        setSection: function (state, action) {
            state.section = action.payload;
        },
    },
});
var setSection = sideNavSlice.actions.setSection;
var selectSection = function (state) { return state.sideNav.section; };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideNavSlice.reducer);


/***/ }),

/***/ "./src/views/library/store.ts":
/*!************************************!*\
  !*** ./src/views/library/store.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav/sideNavSlice */ "./src/views/library/side-nav/sideNavSlice.ts");
/* harmony import */ var _pagesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagesSlice */ "./src/views/library/pagesSlice.ts");



var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        sideNav: _side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_0__["default"],
        pages: _pagesSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhcnRpYWxzX0NvbGxlY3Rpb25UaHVtYm5haWxfdHN4LXNyY19wYXJ0aWFsc19QYWdlVGh1bWJuYWlsX3RzeC1zcmNfdmlld3NfbGlicmFyeV9zdG9yZV90cy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDckM7QUFDb0M7QUFDdEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQUssQ0FBQyx1REFBYyxJQUFJLFdBQVcsdURBQUssbUJBQW1CLDBDQUEwQyxJQUFJLFdBQVcsc0RBQUksVUFBVTtBQUNySjtBQUNBLGdDQUFnQyx3RUFBNEI7QUFDNUQsMkJBQTJCLEdBQUcsdURBQUssbUJBQW1CLDhDQUE4QyxJQUFJLCtDQUErQyxzREFBSSxRQUFRLHVEQUF1RCxLQUFLLElBQUksdURBQUssbUJBQW1CLCtDQUErQyxJQUFJLFdBQVcsc0RBQUksUUFBUSwrQ0FBK0MsWUFBWSxLQUFLLElBQUksdURBQUssbUJBQW1CLDRDQUE0QyxJQUFJLFdBQVcsc0RBQUksbUJBQW1CLHlDQUF5QyxJQUFJLHNCQUFzQixJQUFJLHNEQUFJLG1CQUFtQix5Q0FBeUMsSUFBSSxzQkFBc0IsSUFBSSxzREFBSSxtQkFBbUIsMkNBQTJDLElBQUksd0JBQXdCLEtBQUssS0FBSztBQUNod0IsWUFBWSxzREFBSSxtQkFBbUIsMkRBQTJELElBQUksMkJBQTJCLHNEQUFJLGlCQUFpQiw2REFBNkQsSUFBSSxtQkFBbUIsT0FBTyxzREFBSSxDQUFDLGtEQUFJLGFBQWEscUNBQXFDLElBQUksbUJBQW1CLEtBQUs7QUFDcFU7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMUIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNQO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQUksU0FBUyw0Q0FBNEM7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFJLG1CQUFtQixnREFBZ0QsSUFBSSxVQUFVLHVEQUFLLGlCQUFpQiwrQkFBK0IsSUFBSSxXQUFXLHVEQUFLLG1CQUFtQixzQ0FBc0MsSUFBSSxXQUFXLHNEQUFJLFNBQVMsbUJBQW1CLEdBQUcsc0RBQUksUUFBUSxzQkFBc0IsSUFBSSxvQkFBb0Isc0RBQUksb0JBQW9CLG1DQUFtQyxJQUFJLHVCQUF1QixNQUFNLElBQUk7QUFDbmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQUksU0FBUyw0Q0FBNEM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQUksbUJBQW1CLDhDQUE4QyxJQUFJLFVBQVUsdURBQUssaUJBQWlCLDJCQUEyQixJQUFJLFdBQVcsc0RBQUksbUJBQW1CLG9DQUFvQyxJQUFJLFVBQVUsc0RBQUksVUFBVSxvQkFBb0Isa0VBQXNCO0FBQ2hTO0FBQ0EsZ0NBQWdDLGtFQUFzQjtBQUN0RCwyQkFBMkIsR0FBRyxJQUFJLHVEQUFLLG1CQUFtQixzQ0FBc0MsSUFBSSxXQUFXLHNEQUFJLFNBQVMsaUJBQWlCLEdBQUcsc0RBQUksUUFBUSxvQkFBb0IsSUFBSSxJQUFJLHNEQUFJLG9CQUFvQixtQ0FBbUMsSUFBSSxrREFBa0QsS0FBSyxJQUFJO0FBQ2xUO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRjdCLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDOEQ7QUFDZjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCLDZEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDTztBQUNQLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVEQUFXO0FBQ3BEO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBWTtBQUNoQyx5Q0FBeUMsNkRBQWM7QUFDdkQsb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CLDREQUFZO0FBQ2hDO0FBQ0Esd0JBQXdCLHFEQUFLO0FBQzdCO0FBQ0E7QUFDQSx3QkFBd0IscURBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ0EsdUNBQXVDO0FBQ3ZDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsd0NBQXdDO0FBQ3hDLDZDQUE2QztBQUM3QyxxQ0FBcUM7QUFDNUMsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSmE7QUFDL0M7QUFDQTtBQUNBO0FBQ08sbUJBQW1CLDZEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDTTtBQUNBLHVDQUF1QztBQUM5QyxpRUFBZSxvQkFBb0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmM7QUFDRztBQUNiO0FBQ2pDLFlBQVksZ0VBQWM7QUFDakM7QUFDQSxpQkFBaUIsOERBQWM7QUFDL0IsZUFBZSxtREFBWTtBQUMzQixLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3BhcnRpYWxzL0NvbGxlY3Rpb25UaHVtYm5haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3BhcnRpYWxzL1BhZ2VUaHVtYm5haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvcGFnZXNTbGljZS50cyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L3NpZGUtbmF2L3NpZGVOYXZTbGljZS50cyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ09MTEVDVElPTl9QTEFDRUhPTERFUl9JTUFHRSB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG52YXIgQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBudW1UZXh0ID0gcHJvcHMucGFnZU51bSAmJiBwcm9wcy5wYWdlTnVtID4gMVxuICAgICAgICA/IFwiXCIuY29uY2F0KHByb3BzLnBhZ2VOdW0sIFwiIHBhZ2VzXCIpXG4gICAgICAgIDogXCJcIi5jb25jYXQocHJvcHMucGFnZU51bSB8fCAwLCBcIiBwYWdlXCIpO1xuICAgIHZhciBjb250ZW50ID0gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi10aHVtYm5haWxfX3Bob3RvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IHByb3BzLmltZywgb25FcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT0xMRUNUSU9OX1BMQUNFSE9MREVSX0lNQUdFO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi10aHVtYm5haWxfX251bS1sYWJlbFwiIH0sIHsgY2hpbGRyZW46IFtudW1UZXh0LCBcIiBcIiwgcHJvcHMucGFnZU51bSA+IDAgJiYgKF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLW5ld3NwYXBlci1vXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb24tdGh1bWJuYWlsX192aWV3LWxhYmVsXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWV5ZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBcIlZpZXdcIl0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb24tdGh1bWJuYWlsX19kZXRhaWxzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi10aHVtYm5haWxfX25hbWVcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5uYW1lIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsZWN0aW9uLXRodW1ibmFpbF9fZGVzY1wiIH0sIHsgY2hpbGRyZW46IHByb3BzLmRlc2MgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb24tdGh1bWJuYWlsX19hdXRob3JcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5hdXRob3IgfSkpXSB9KSldIH0pKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi10aHVtYm5haWxcIiwgb25DbGljazogcHJvcHMub25DbGljayB9LCB7IGNoaWxkcmVuOiBwcm9wcy5yZWZyZXNoID8gKF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvY29sbGVjdGlvbi9cIi5jb25jYXQocHJvcHMuaWQpLCB0YXJnZXQ6IHByb3BzLnRhcmdldCB9LCB7IGNoaWxkcmVuOiBjb250ZW50IH0pKSkgOiAoX2pzeChMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi9jb2xsZWN0aW9uL1wiLmNvbmNhdChwcm9wcy5pZCkgfSwgeyBjaGlsZHJlbjogY29udGVudCB9KSkpIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUEFHRV9QTEFDRUhPTERFUl9JTUFHRSB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xudmFyIFBhZ2VUaHVtYm5haWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMubm9QaG90bykge1xuICAgICAgICB2YXIgYnJpZWZEZXNfMSA9IHByb3BzLmJyaWVmRGVzO1xuICAgICAgICB2YXIgdGl0bGVfMSA9IHByb3BzLnRpdGxlO1xuICAgICAgICB2YXIgdXJsXzEgPSBcIlwiO1xuICAgICAgICB2YXIgY2xhc3NOYW1lXzEgPSBcIlwiO1xuICAgICAgICB2YXIgdGFyZ2V0XzEgPSBwcm9wcy50YXJnZXQ7XG4gICAgICAgIGlmIChwcm9wcy50aXRsZS5sZW5ndGggPiAyNSkge1xuICAgICAgICAgICAgdGl0bGVfMSA9IHByb3BzLnRpdGxlLnN1YnN0cmluZygwLCAyNSkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5icmllZkRlcy5sZW5ndGggPiAzNSkge1xuICAgICAgICAgICAgYnJpZWZEZXNfMSA9IHByb3BzLmJyaWVmRGVzLnN1YnN0cmluZygwLCAzNSkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5icmllZkRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGJyaWVmRGVzXzEgPSBfanN4KFwiZW1cIiwgeyBjaGlsZHJlbjogXCJObyBicmllZiBkZXNjcmlwdGlvbiBwcm92aWRlZC5cIiB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJkcmFmdFwiKSB7XG4gICAgICAgICAgICB1cmxfMSA9IFwiL25ldy1wYWdlL3BhZ2UtY29udGVudHM/aWQ9XCIuY29uY2F0KHByb3BzLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuc3RhdHVzID09PSBcIm5vcm1hbFwiIHx8ICFwcm9wcy5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZV8xID0gXCJwYWdlLXRodW1ibmFpbCBwYWdlLXRodW1ibmFpbC1uby1waG90b1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnN0YXR1cyA9PT0gXCJlZGl0aW5nXCIpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZV8xID1cbiAgICAgICAgICAgICAgICBcInBhZ2UtdGh1bWJuYWlsIHBhZ2UtdGh1bWJuYWlsLW5vLXBob3RvIHBhZ2UtdGh1bWJuYWlsLS1zaGFraW5nXCI7XG4gICAgICAgICAgICB1cmxfMSA9IFwiamF2YXNjcmlwdDp2b2lkKDApXCI7XG4gICAgICAgICAgICB0YXJnZXRfMSA9IFwiX3NlbGZcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuc3RhdHVzID09PSBcImVkaXRpbmdcIiAmJiBwcm9wcy5zZWxlY3RlZClcbiAgICAgICAgICAgIGNsYXNzTmFtZV8xICs9IFwiIHBhZ2UtdGh1bWJuYWlsLS1zZWxlY3RlZFwiO1xuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZV8xLCBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IHVybF8xLCB0YXJnZXQ6IHRhcmdldF8xIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLXRodW1ibmFpbF9fZGV0YWlsc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogdGl0bGVfMSB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogYnJpZWZEZXNfMSB9KV0gfSkpLCBwcm9wcy5sYWJlbCAmJiAoX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS10aHVtYm5haWxfX3R5cGVcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5sYWJlbCB9KSkpXSB9KSkgfSkpKTtcbiAgICB9XG4gICAgdmFyIGJyaWVmRGVzID0gcHJvcHMuYnJpZWZEZXM7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdmFyIHVybCA9IFwiXCI7XG4gICAgdmFyIGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgdmFyIHRhcmdldCA9IHByb3BzLnRhcmdldDtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgdXJsID0gXCIvXCIuY29uY2F0KHByb3BzLmF1dGhvclVzZXJuYW1lLCBcIi9cIikuY29uY2F0KHByb3BzLnVybCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgdXJsID0gXCIvcHVibGljLXBhZ2VzL1wiLmNvbmNhdChwcm9wcy51cmwpO1xuICAgIH1cbiAgICBpZiAocHJvcHMudGl0bGUubGVuZ3RoID4gMjUpIHtcbiAgICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZS5zdWJzdHJpbmcoMCwgMjUpICsgXCIuLi5cIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmJyaWVmRGVzLmxlbmd0aCA+IDM1KSB7XG4gICAgICAgIGJyaWVmRGVzID0gcHJvcHMuYnJpZWZEZXMuc3Vic3RyaW5nKDAsIDM1KSArIFwiLi4uXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5icmllZkRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJpZWZEZXMgPSBfanN4KFwiZW1cIiwgeyBjaGlsZHJlbjogXCJObyBicmllZiBkZXNjcmlwdGlvbiBwcm92aWRlZC5cIiB9KTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnN0YXR1cyA9PT0gXCJub3JtYWxcIiB8fCAhcHJvcHMuc3RhdHVzKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IFwicGFnZS10aHVtYm5haWxcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMuc3RhdHVzID09PSBcImVkaXRpbmdcIikge1xuICAgICAgICBjbGFzc05hbWUgPSBcInBhZ2UtdGh1bWJuYWlsIHBhZ2UtdGh1bWJuYWlsLS1zaGFraW5nXCI7XG4gICAgICAgIHVybCA9IFwiamF2YXNjcmlwdDp2b2lkKDApXCI7XG4gICAgICAgIHRhcmdldCA9IFwiX3NlbGZcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLnN0YXR1cyA9PT0gXCJlZGl0aW5nXCIgJiYgcHJvcHMuc2VsZWN0ZWQpXG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBwYWdlLXRodW1ibmFpbC0tc2VsZWN0ZWRcIjtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgb25DbGljazogcHJvcHMub25DbGljayB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImFcIiwgX19hc3NpZ24oeyBocmVmOiB1cmwsIHRhcmdldDogdGFyZ2V0IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtdGh1bWJuYWlsX19waG90b1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzcmM6IHByb3BzLmltYWdlIHx8IFBBR0VfUExBQ0VIT0xERVJfSU1BR0UsIG9uRXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFHRV9QTEFDRUhPTERFUl9JTUFHRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLXRodW1ibmFpbF9fZGV0YWlsc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogdGl0bGUgfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IGJyaWVmRGVzIH0pXSB9KSksIF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtdGh1bWJuYWlsX190eXBlXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMubGFiZWwgPyBwcm9wcy5sYWJlbCA6IHByb3BzLnR5cGUgfSkpXSB9KSkgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQYWdlVGh1bWJuYWlsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfYTtcbmltcG9ydCB7IGFsZXJ0LCByZXF1ZXN0LCBsb2FkaW5nTW9kYWwgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBsaXN0OiBbXSxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgc3RhdHVzOiBcIm5vcm1hbFwiLFxuICAgIHNvcnRCeTogXCJkYXRlLWFkZGVkLWFzY1wiLFxuICAgIGZpbHRlckJ5OiBcImFsbFwiLFxufTtcbmV4cG9ydCB2YXIgcGFnZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcIlBhZ2VzXCIsXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0TG9hZGluZzogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U3RhdHVzOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZCA9IFtdO1xuICAgICAgICB9LFxuICAgICAgICBzZXRTb3J0Qnk6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5zb3J0QnkgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RmlsdGVyQnk6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5maWx0ZXJCeSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICBzZXRMaXN0OiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUubGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RQYWdlOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gc3RhdGUuc2VsZWN0ZWQuaW5kZXhPZihhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwYWdlIHRvIHRoZSBzZWxlY3RlZCBsaXN0XG4gICAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWQucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHBhZ2UgZnJvbSB0aGUgc2VsZWN0ZWQgbGlzdFxuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuLy8gRmV0Y2ggcGFnZXMgZnJvbSB0aGUgc2VydmVyXG5leHBvcnQgdmFyIGZldGNoUGFnZXMgPSBmdW5jdGlvbiAoa2luZCwgZmlsdGVyQnksIHNvcnRCeSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIGdldFN0YXRlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsLCByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGtpbmQgPT09IFwiUEItcGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi91c2Vycy9cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvcGFnZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvXCIuY29uY2F0KGtpbmQsIFwiP3NvcnRCeT1cIikuY29uY2F0KHNvcnRCeSwgXCImZmlsdGVyQnk9XCIpLmNvbmNhdChmaWx0ZXJCeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAvKiogQHRvZG86IG1ha2UgaXQgc28gdGhhdCB3ZSBhbHdheXMgdXNlIGRhdGEucGFnZXMgKi9cbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TGlzdChyZXNwb25zZS5yZXN1bHRzIHx8IHJlc3BvbnNlLnBhZ2VzKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJCeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEZpbHRlckJ5KHJlc3BvbnNlLmZpbHRlckJ5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0QnkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTb3J0QnkocmVzcG9uc2Uuc29ydEJ5KSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbn07XG4vLyBTZW5kcyBhIHJlcXVlc3QgdG8gc2VydmVyIHRvIHJlbW92ZSBwYWdlcyBmcm9tIGEgbGlzdCwgb3IgZGVsZXRlIGRyYWZ0IHBhZ2VzXG5leHBvcnQgdmFyIHJlbW92ZVBhZ2VzID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld0xpc3Q7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZGVsZXRlKFwiL1wiLmNvbmNhdChraW5kKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWRzOiBnZXRTdGF0ZSgpLnBhZ2VzLnNlbGVjdGVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdCA9IGdldFN0YXRlKCkucGFnZXMubGlzdC5maWx0ZXIoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdGF0ZSgpLnBhZ2VzLnNlbGVjdGVkLmluZGV4T2YocGFnZS5pZCkgPT09IC0xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TGlzdChuZXdMaXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFN0YXR1cyhcIm5vcm1hbFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0U3RhdGUoKS5zaWRlTmF2LnNlY3Rpb24gPT09IFwicGFnZXMvZHJhZnRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJEcmFmdCBQYWdlKHMpIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlBhZ2Uocykgc3VjY2Vzc2Z1bGx5IHJlbW92ZWQgZnJvbSB5b3VyIGxpc3QuXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xufTtcbmV4cG9ydCB2YXIgc2V0TG9hZGluZyA9IChfYSA9IHBhZ2VzU2xpY2UuYWN0aW9ucywgX2Euc2V0TG9hZGluZyksIHNldFN0YXR1cyA9IF9hLnNldFN0YXR1cywgc2V0U29ydEJ5ID0gX2Euc2V0U29ydEJ5LCBzZXRGaWx0ZXJCeSA9IF9hLnNldEZpbHRlckJ5LCBzZWxlY3RQYWdlID0gX2Euc2VsZWN0UGFnZSwgc2V0TGlzdCA9IF9hLnNldExpc3Q7XG5leHBvcnQgdmFyIHNlbGVjdExvYWRpbmcgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLnBhZ2VzLmxvYWRpbmc7IH07XG5leHBvcnQgdmFyIHNlbGVjdFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUucGFnZXMuc3RhdHVzOyB9O1xuZXhwb3J0IHZhciBzZWxlY3RTb3J0QnkgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLnBhZ2VzLnNvcnRCeTsgfTtcbmV4cG9ydCB2YXIgc2VsZWN0RmlsdGVyQnkgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLnBhZ2VzLmZpbHRlckJ5OyB9O1xuZXhwb3J0IHZhciBzZWxlY3RTZWxlY3RlZFBhZ2VzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5wYWdlcy5zZWxlY3RlZDsgfTtcbmV4cG9ydCB2YXIgc2VsZWN0UGFnZXMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLnBhZ2VzLmxpc3Q7IH07XG5leHBvcnQgZGVmYXVsdCBwYWdlc1NsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICAgIHNlY3Rpb246IFwiXCIsXG59O1xuZXhwb3J0IHZhciBzaWRlTmF2U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJzaWRlTmF2XCIsXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0U2VjdGlvbjogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnNlY3Rpb24gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5leHBvcnQgdmFyIHNldFNlY3Rpb24gPSBzaWRlTmF2U2xpY2UuYWN0aW9ucy5zZXRTZWN0aW9uO1xuZXhwb3J0IHZhciBzZWxlY3RTZWN0aW9uID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5zaWRlTmF2LnNlY3Rpb247IH07XG5leHBvcnQgZGVmYXVsdCBzaWRlTmF2U2xpY2UucmVkdWNlcjtcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBzaWRlTmF2UmVkdWNlciBmcm9tIFwiLi9zaWRlLW5hdi9zaWRlTmF2U2xpY2VcIjtcbmltcG9ydCBwYWdlc1JlZHVjZXIgZnJvbSBcIi4vcGFnZXNTbGljZVwiO1xuZXhwb3J0IHZhciBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIHNpZGVOYXY6IHNpZGVOYXZSZWR1Y2VyLFxuICAgICAgICBwYWdlczogcGFnZXNSZWR1Y2VyLFxuICAgIH0sXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==