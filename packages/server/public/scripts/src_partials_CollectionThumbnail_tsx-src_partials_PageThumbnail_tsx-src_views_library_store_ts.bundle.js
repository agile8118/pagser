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



var Collection = function (props) {
    var numText = props.pageNum && props.pageNum > 1
        ? "".concat(props.pageNum, " pages")
        : "".concat(props.pageNum || 0, " page");
    var content = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__photo" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: props.img, onError: function (e) {
                            e.target.src =
                                "/images/collection-placeholder.svg";
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__num-label" }, { children: [numText, " ", props.pageNum > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-newspaper-o", "aria-hidden": "true" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__view-label" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-eye", "aria-hidden": "true" }), "View"] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-thumbnail__details" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail__name" }, { children: props.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail__desc" }, { children: props.desc })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail__author" }, { children: props.author }))] }))] }));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-thumbnail", onClick: props.onClick }, { children: props.refresh ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/collection/".concat(props.id), target: props.target }, { children: content }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, __assign({ to: "/collection/".concat(props.id) }, { children: content }))) })));
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: className, onClick: props.onClick }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: url, target: target }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-thumbnail__photo" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: props.image, onError: function (e) {
                            e.target.src =
                                "/images/pages/placeholder.svg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhcnRpYWxzX0NvbGxlY3Rpb25UaHVtYm5haWxfdHN4LXNyY19wYXJ0aWFsc19QYWdlVGh1bWJuYWlsX3RzeC1zcmNfdmlld3NfbGlicmFyeV9zdG9yZV90cy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ3JDO0FBQ2M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQUssQ0FBQyx1REFBYyxJQUFJLFdBQVcsdURBQUssbUJBQW1CLDBDQUEwQyxJQUFJLFdBQVcsc0RBQUksVUFBVTtBQUNySjtBQUNBO0FBQ0EsMkJBQTJCLEdBQUcsdURBQUssbUJBQW1CLDhDQUE4QyxJQUFJLCtDQUErQyxzREFBSSxRQUFRLHVEQUF1RCxLQUFLLElBQUksdURBQUssbUJBQW1CLCtDQUErQyxJQUFJLFdBQVcsc0RBQUksUUFBUSwrQ0FBK0MsWUFBWSxLQUFLLElBQUksdURBQUssbUJBQW1CLDRDQUE0QyxJQUFJLFdBQVcsc0RBQUksbUJBQW1CLHlDQUF5QyxJQUFJLHNCQUFzQixJQUFJLHNEQUFJLG1CQUFtQix5Q0FBeUMsSUFBSSxzQkFBc0IsSUFBSSxzREFBSSxtQkFBbUIsMkNBQTJDLElBQUksd0JBQXdCLEtBQUssS0FBSztBQUNod0IsWUFBWSxzREFBSSxtQkFBbUIsMkRBQTJELElBQUksMkJBQTJCLHNEQUFJLGlCQUFpQiw2REFBNkQsSUFBSSxtQkFBbUIsT0FBTyxzREFBSSxDQUFDLGtEQUFJLGFBQWEscUNBQXFDLElBQUksbUJBQW1CLEtBQUs7QUFDcFU7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjFCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0EseUNBQXlDLHVEQUFXO0FBQ3BEO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBWTtBQUNoQyx5Q0FBeUMsNkRBQWM7QUFDdkQsb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CLDREQUFZO0FBQ2hDO0FBQ0Esd0JBQXdCLHFEQUFLO0FBQzdCO0FBQ0E7QUFDQSx3QkFBd0IscURBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ0EsdUNBQXVDO0FBQ3ZDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsd0NBQXdDO0FBQ3hDLDZDQUE2QztBQUM3QyxxQ0FBcUM7QUFDNUMsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSmE7QUFDL0M7QUFDQTtBQUNBO0FBQ08sbUJBQW1CLDZEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDTTtBQUNBLHVDQUF1QztBQUM5QyxpRUFBZSxvQkFBb0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmM7QUFDRztBQUNiO0FBQ2pDLFlBQVksZ0VBQWM7QUFDakM7QUFDQSxpQkFBaUIsOERBQWM7QUFDL0IsZUFBZSxtREFBWTtBQUMzQixLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3BhcnRpYWxzL0NvbGxlY3Rpb25UaHVtYm5haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3BhcnRpYWxzL1BhZ2VUaHVtYm5haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvcGFnZXNTbGljZS50cyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L3NpZGUtbmF2L3NpZGVOYXZTbGljZS50cyIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG52YXIgQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBudW1UZXh0ID0gcHJvcHMucGFnZU51bSAmJiBwcm9wcy5wYWdlTnVtID4gMVxuICAgICAgICA/IFwiXCIuY29uY2F0KHByb3BzLnBhZ2VOdW0sIFwiIHBhZ2VzXCIpXG4gICAgICAgIDogXCJcIi5jb25jYXQocHJvcHMucGFnZU51bSB8fCAwLCBcIiBwYWdlXCIpO1xuICAgIHZhciBjb250ZW50ID0gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi10aHVtYm5haWxfX3Bob3RvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IHByb3BzLmltZywgb25FcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9pbWFnZXMvY29sbGVjdGlvbi1wbGFjZWhvbGRlci5zdmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb24tdGh1bWJuYWlsX19udW0tbGFiZWxcIiB9LCB7IGNoaWxkcmVuOiBbbnVtVGV4dCwgXCIgXCIsIHByb3BzLnBhZ2VOdW0gPiAwICYmIChfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1uZXdzcGFwZXItb1wiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsZWN0aW9uLXRodW1ibmFpbF9fdmlldy1sYWJlbFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1leWVcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCJWaWV3XCJdIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsZWN0aW9uLXRodW1ibmFpbF9fZGV0YWlsc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb24tdGh1bWJuYWlsX19uYW1lXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMubmFtZSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi10aHVtYm5haWxfX2Rlc2NcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5kZXNjIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsZWN0aW9uLXRodW1ibmFpbF9fYXV0aG9yXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMuYXV0aG9yIH0pKV0gfSkpXSB9KSk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb24tdGh1bWJuYWlsXCIsIG9uQ2xpY2s6IHByb3BzLm9uQ2xpY2sgfSwgeyBjaGlsZHJlbjogcHJvcHMucmVmcmVzaCA/IChfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiL2NvbGxlY3Rpb24vXCIuY29uY2F0KHByb3BzLmlkKSwgdGFyZ2V0OiBwcm9wcy50YXJnZXQgfSwgeyBjaGlsZHJlbjogY29udGVudCB9KSkpIDogKF9qc3goTGluaywgX19hc3NpZ24oeyB0bzogXCIvY29sbGVjdGlvbi9cIi5jb25jYXQocHJvcHMuaWQpIH0sIHsgY2hpbGRyZW46IGNvbnRlbnQgfSkpKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb247XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBQYWdlVGh1bWJuYWlsID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLm5vUGhvdG8pIHtcbiAgICAgICAgdmFyIGJyaWVmRGVzXzEgPSBwcm9wcy5icmllZkRlcztcbiAgICAgICAgdmFyIHRpdGxlXzEgPSBwcm9wcy50aXRsZTtcbiAgICAgICAgdmFyIHVybF8xID0gXCJcIjtcbiAgICAgICAgdmFyIGNsYXNzTmFtZV8xID0gXCJcIjtcbiAgICAgICAgdmFyIHRhcmdldF8xID0gcHJvcHMudGFyZ2V0O1xuICAgICAgICBpZiAocHJvcHMudGl0bGUubGVuZ3RoID4gMjUpIHtcbiAgICAgICAgICAgIHRpdGxlXzEgPSBwcm9wcy50aXRsZS5zdWJzdHJpbmcoMCwgMjUpICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuYnJpZWZEZXMubGVuZ3RoID4gMzUpIHtcbiAgICAgICAgICAgIGJyaWVmRGVzXzEgPSBwcm9wcy5icmllZkRlcy5zdWJzdHJpbmcoMCwgMzUpICsgXCIuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMuYnJpZWZEZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBicmllZkRlc18xID0gX2pzeChcImVtXCIsIHsgY2hpbGRyZW46IFwiTm8gYnJpZWYgZGVzY3JpcHRpb24gcHJvdmlkZWQuXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09IFwiZHJhZnRcIikge1xuICAgICAgICAgICAgdXJsXzEgPSBcIi9uZXctcGFnZS9wYWdlLWNvbnRlbnRzP2lkPVwiLmNvbmNhdChwcm9wcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLnN0YXR1cyA9PT0gXCJub3JtYWxcIiB8fCAhcHJvcHMuc3RhdHVzKSB7XG4gICAgICAgICAgICBjbGFzc05hbWVfMSA9IFwicGFnZS10aHVtYm5haWwgcGFnZS10aHVtYm5haWwtbm8tcGhvdG9cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5zdGF0dXMgPT09IFwiZWRpdGluZ1wiKSB7XG4gICAgICAgICAgICBjbGFzc05hbWVfMSA9XG4gICAgICAgICAgICAgICAgXCJwYWdlLXRodW1ibmFpbCBwYWdlLXRodW1ibmFpbC1uby1waG90byBwYWdlLXRodW1ibmFpbC0tc2hha2luZ1wiO1xuICAgICAgICAgICAgdXJsXzEgPSBcImphdmFzY3JpcHQ6dm9pZCgwKVwiO1xuICAgICAgICAgICAgdGFyZ2V0XzEgPSBcIl9zZWxmXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLnN0YXR1cyA9PT0gXCJlZGl0aW5nXCIgJiYgcHJvcHMuc2VsZWN0ZWQpXG4gICAgICAgICAgICBjbGFzc05hbWVfMSArPSBcIiBwYWdlLXRodW1ibmFpbC0tc2VsZWN0ZWRcIjtcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVfMSwgb25DbGljazogcHJvcHMub25DbGljayB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImFcIiwgX19hc3NpZ24oeyBocmVmOiB1cmxfMSwgdGFyZ2V0OiB0YXJnZXRfMSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS10aHVtYm5haWxfX2RldGFpbHNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IHRpdGxlXzEgfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IGJyaWVmRGVzXzEgfSldIH0pKSwgcHJvcHMubGFiZWwgJiYgKF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtdGh1bWJuYWlsX190eXBlXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMubGFiZWwgfSkpKV0gfSkpIH0pKSk7XG4gICAgfVxuICAgIHZhciBicmllZkRlcyA9IHByb3BzLmJyaWVmRGVzO1xuICAgIHZhciB0aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIHZhciB1cmwgPSBcIlwiO1xuICAgIHZhciBjbGFzc05hbWUgPSBcIlwiO1xuICAgIHZhciB0YXJnZXQgPSBwcm9wcy50YXJnZXQ7XG4gICAgaWYgKHByb3BzLnR5cGUgPT09IFwicHJpdmF0ZVwiKSB7XG4gICAgICAgIHVybCA9IFwiL1wiLmNvbmNhdChwcm9wcy5hdXRob3JVc2VybmFtZSwgXCIvXCIpLmNvbmNhdChwcm9wcy51cmwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgIHVybCA9IFwiL3B1YmxpYy1wYWdlcy9cIi5jb25jYXQocHJvcHMudXJsKTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnRpdGxlLmxlbmd0aCA+IDI1KSB7XG4gICAgICAgIHRpdGxlID0gcHJvcHMudGl0bGUuc3Vic3RyaW5nKDAsIDI1KSArIFwiLi4uXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5icmllZkRlcy5sZW5ndGggPiAzNSkge1xuICAgICAgICBicmllZkRlcyA9IHByb3BzLmJyaWVmRGVzLnN1YnN0cmluZygwLCAzNSkgKyBcIi4uLlwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuYnJpZWZEZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyaWVmRGVzID0gX2pzeChcImVtXCIsIHsgY2hpbGRyZW46IFwiTm8gYnJpZWYgZGVzY3JpcHRpb24gcHJvdmlkZWQuXCIgfSk7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zdGF0dXMgPT09IFwibm9ybWFsXCIgfHwgIXByb3BzLnN0YXR1cykge1xuICAgICAgICBjbGFzc05hbWUgPSBcInBhZ2UtdGh1bWJuYWlsXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnN0YXR1cyA9PT0gXCJlZGl0aW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gXCJwYWdlLXRodW1ibmFpbCBwYWdlLXRodW1ibmFpbC0tc2hha2luZ1wiO1xuICAgICAgICB1cmwgPSBcImphdmFzY3JpcHQ6dm9pZCgwKVwiO1xuICAgICAgICB0YXJnZXQgPSBcIl9zZWxmXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zdGF0dXMgPT09IFwiZWRpdGluZ1wiICYmIHByb3BzLnNlbGVjdGVkKVxuICAgICAgICBjbGFzc05hbWUgKz0gXCIgcGFnZS10aHVtYm5haWwtLXNlbGVjdGVkXCI7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIG9uQ2xpY2s6IHByb3BzLm9uQ2xpY2sgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogdXJsLCB0YXJnZXQ6IHRhcmdldCB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLXRodW1ibmFpbF9fcGhvdG9cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaW1nXCIsIHsgc3JjOiBwcm9wcy5pbWFnZSwgb25FcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9pbWFnZXMvcGFnZXMvcGxhY2Vob2xkZXIuc3ZnXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS10aHVtYm5haWxfX2RldGFpbHNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IHRpdGxlIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBicmllZkRlcyB9KV0gfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLXRodW1ibmFpbF9fdHlwZVwiIH0sIHsgY2hpbGRyZW46IHByb3BzLmxhYmVsID8gcHJvcHMubGFiZWwgOiBwcm9wcy50eXBlIH0pKV0gfSkpIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZVRodW1ibmFpbDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX2E7XG5pbXBvcnQgeyBhbGVydCwgcmVxdWVzdCwgbG9hZGluZ01vZGFsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbGlzdDogW10sXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIHN0YXR1czogXCJub3JtYWxcIixcbiAgICBzb3J0Qnk6IFwiZGF0ZS1hZGRlZC1hc2NcIixcbiAgICBmaWx0ZXJCeTogXCJhbGxcIixcbn07XG5leHBvcnQgdmFyIHBhZ2VzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJQYWdlc1wiLFxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldExvYWRpbmc6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFN0YXR1czogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWQgPSBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U29ydEJ5OiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuc29ydEJ5ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEZpbHRlckJ5OiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuZmlsdGVyQnkgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGlzdDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0UGFnZTogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHN0YXRlLnNlbGVjdGVkLmluZGV4T2YoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcGFnZSB0byB0aGUgc2VsZWN0ZWQgbGlzdFxuICAgICAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwYWdlIGZyb20gdGhlIHNlbGVjdGVkIGxpc3RcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbi8vIEZldGNoIHBhZ2VzIGZyb20gdGhlIHNlcnZlclxuZXhwb3J0IHZhciBmZXRjaFBhZ2VzID0gZnVuY3Rpb24gKGtpbmQsIGZpbHRlckJ5LCBzb3J0QnkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybCwgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBraW5kID09PSBcIlBCLXBhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIvdXNlcnMvXCIuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMl0sIFwiL3BhZ2VzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiL1wiLmNvbmNhdChraW5kLCBcIj9zb3J0Qnk9XCIpLmNvbmNhdChzb3J0QnksIFwiJmZpbHRlckJ5PVwiKS5jb25jYXQoZmlsdGVyQnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0b2RvOiBtYWtlIGl0IHNvIHRoYXQgd2UgYWx3YXlzIHVzZSBkYXRhLnBhZ2VzICovXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExpc3QocmVzcG9uc2UucmVzdWx0cyB8fCByZXNwb25zZS5wYWdlcykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyQnkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXJCeShyZXNwb25zZS5maWx0ZXJCeSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydEJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0U29ydEJ5KHJlc3BvbnNlLnNvcnRCeSkpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG59O1xuLy8gU2VuZHMgYSByZXF1ZXN0IHRvIHNlcnZlciB0byByZW1vdmUgcGFnZXMgZnJvbSBhIGxpc3QsIG9yIGRlbGV0ZSBkcmFmdCBwYWdlc1xuZXhwb3J0IHZhciByZW1vdmVQYWdlcyA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgZ2V0U3RhdGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdMaXN0O1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJMb2FkaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmRlbGV0ZShcIi9cIi5jb25jYXQoa2luZCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkczogZ2V0U3RhdGUoKS5wYWdlcy5zZWxlY3RlZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3QgPSBnZXRTdGF0ZSgpLnBhZ2VzLmxpc3QuZmlsdGVyKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUoKS5wYWdlcy5zZWxlY3RlZC5pbmRleE9mKHBhZ2UuaWQpID09PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExpc3QobmV3TGlzdCkpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTdGF0dXMoXCJub3JtYWxcIikpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldFN0YXRlKCkuc2lkZU5hdi5zZWN0aW9uID09PSBcInBhZ2VzL2RyYWZ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRHJhZnQgUGFnZShzKSBzdWNjZXNzZnVsbHkgZGVsZXRlZC5cIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQYWdlKHMpIHN1Y2Nlc3NmdWxseSByZW1vdmVkIGZyb20geW91ciBsaXN0LlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbn07XG5leHBvcnQgdmFyIHNldExvYWRpbmcgPSAoX2EgPSBwYWdlc1NsaWNlLmFjdGlvbnMsIF9hLnNldExvYWRpbmcpLCBzZXRTdGF0dXMgPSBfYS5zZXRTdGF0dXMsIHNldFNvcnRCeSA9IF9hLnNldFNvcnRCeSwgc2V0RmlsdGVyQnkgPSBfYS5zZXRGaWx0ZXJCeSwgc2VsZWN0UGFnZSA9IF9hLnNlbGVjdFBhZ2UsIHNldExpc3QgPSBfYS5zZXRMaXN0O1xuZXhwb3J0IHZhciBzZWxlY3RMb2FkaW5nID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5wYWdlcy5sb2FkaW5nOyB9O1xuZXhwb3J0IHZhciBzZWxlY3RTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLnBhZ2VzLnN0YXR1czsgfTtcbmV4cG9ydCB2YXIgc2VsZWN0U29ydEJ5ID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5wYWdlcy5zb3J0Qnk7IH07XG5leHBvcnQgdmFyIHNlbGVjdEZpbHRlckJ5ID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5wYWdlcy5maWx0ZXJCeTsgfTtcbmV4cG9ydCB2YXIgc2VsZWN0U2VsZWN0ZWRQYWdlcyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUucGFnZXMuc2VsZWN0ZWQ7IH07XG5leHBvcnQgdmFyIHNlbGVjdFBhZ2VzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5wYWdlcy5saXN0OyB9O1xuZXhwb3J0IGRlZmF1bHQgcGFnZXNTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzZWN0aW9uOiBcIlwiLFxufTtcbmV4cG9ydCB2YXIgc2lkZU5hdlNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6IFwic2lkZU5hdlwiLFxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldFNlY3Rpb246IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZWN0aW9uID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuZXhwb3J0IHZhciBzZXRTZWN0aW9uID0gc2lkZU5hdlNsaWNlLmFjdGlvbnMuc2V0U2VjdGlvbjtcbmV4cG9ydCB2YXIgc2VsZWN0U2VjdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuc2lkZU5hdi5zZWN0aW9uOyB9O1xuZXhwb3J0IGRlZmF1bHQgc2lkZU5hdlNsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgc2lkZU5hdlJlZHVjZXIgZnJvbSBcIi4vc2lkZS1uYXYvc2lkZU5hdlNsaWNlXCI7XG5pbXBvcnQgcGFnZXNSZWR1Y2VyIGZyb20gXCIuL3BhZ2VzU2xpY2VcIjtcbmV4cG9ydCB2YXIgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBzaWRlTmF2OiBzaWRlTmF2UmVkdWNlcixcbiAgICAgICAgcGFnZXM6IHBhZ2VzUmVkdWNlcixcbiAgICB9LFxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=