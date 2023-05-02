"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["new-page"],{

/***/ "./src/views/new-page/AttachFiles.tsx":
/*!********************************************!*\
  !*** ./src/views/new-page/AttachFiles.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./src/views/new-page/ProgressBar.tsx");
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






var AttachFiles = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), files = _a[0], setFiles = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), error = _b[0], setError = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationMdl = _d[0], setConfirmationMdl = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmationMdlDataId = _e[0], setConfirmationMdlDataId = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), uploadAttachFileMdl = _f[0], setUploadAttachFileMdl = _f[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        fetchFiles();
    }, []);
    var fetchFiles = function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setLoading(true);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.get("/pages/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href), "/attach-files?type=draft"), {
                            auth: true,
                        })];
                case 1:
                    response = (_a.sent());
                    setFiles(response.attachFiles);
                    setLoading(false);
                    if (msg)
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.alert)(msg, "success");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (error_1.status === 401) {
                        window.location.href = "/login?redirected=new-page";
                    }
                    else {
                        navigate("/new-page/initial-step");
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var renderFiles = function () {
        return files.map(function (file) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ className: "file-link", href: "/api/pages/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href), "/attach-files/").concat(file.name) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-download" }), " " + file.name, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i", onClick: function (e) {
                            // This will prevent the file from starting to get downloaded
                            e.preventDefault();
                            setConfirmationMdl(true);
                            setConfirmationMdlDataId(file.id);
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-times", "aria-hidden": "true" }) }))] }), file.name));
        });
    };
    var onBackButtonClicked = function () {
        navigate("/new-page/page-thumbnail?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)));
    };
    var onNextButtonClicked = function () {
        navigate("/new-page/final-step?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)));
    };
    var renderContents = function () {
        if (loading)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Loading, {}) })));
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "button-text button-text--big a-11", onClick: function () {
                        onBackButtonClicked();
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }), " Back"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Add Attach Files" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-18" }, { children: "Add attach files for your page in pretty much any format that you want:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ color: "blue", size: "small", rounded: true, onClick: function () {
                        setUploadAttachFileMdl(true);
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-upload button__icon-left" }), " Add an Attach File"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, { header: "Remove the attach file", open: confirmationMdl, message: "Are you sure that you want to remove this attach file?", onConfirm: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    setConfirmationMdl(false);
                                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Deleting the attach file...");
                                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request["delete"]("/pages/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href), "/attach-files/").concat(confirmationMdlDataId, "?type=draft"), {
                                            auth: true,
                                        })];
                                case 1:
                                    _a.sent();
                                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                                    fetchFiles("File deleted successfully.");
                                    return [2 /*return*/];
                            }
                        });
                    }); }, onCancel: function () { return setConfirmationMdl(false); } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.UploadAttachFile, { open: uploadAttachFileMdl, header: "Add an Attach File", text: "You can upload maximum of 5 files 10MB each for every page.", size: 10000000, url: "/pages/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href), "/attach-files?type=draft"), success: function () {
                        fetchFiles("File uploaded successfully.");
                    }, onClose: function () {
                        setUploadAttachFileMdl(false);
                    } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "new-page-attach-files__files" }, { children: renderFiles() })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-18 italic" }, { children: files.length
                        ? "You can always add/remove attach files after you published your page."
                        : "You can always add/remove attach files after you published your page, you can also skip this for now and do it after you published your page." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ onClick: function () {
                            onNextButtonClicked();
                        }, color: files.length ? "blue" : "default" }, { children: [files.length ? "Next" : "Skip", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-circle-right button__icon-right" })] })) }))] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], { width: 80 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new" }, { children: renderContents() }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachFiles);


/***/ }),

/***/ "./src/views/new-page/FinalStep.tsx":
/*!******************************************!*\
  !*** ./src/views/new-page/FinalStep.tsx ***!
  \******************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./src/views/new-page/ProgressBar.tsx");
/* harmony import */ var _FinalStepPublic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FinalStepPublic */ "./src/views/new-page/FinalStepPublic.tsx");
/* harmony import */ var _FinalStepPrivate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FinalStepPrivate */ "./src/views/new-page/FinalStepPrivate.tsx");
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








var FinalStep = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), type = _a[0], setType = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), comments = _b[0], setComments = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), rating = _c[0], setRating = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), anonymously = _d[0], setAnonymously = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), links = _e[0], setLinks = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), tags = _f[0], setTags = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), username = _g[0], setUsername = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), url = _h[0], setUrl = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), usedUrls = _j[0], setUsedUrls = _j[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.get("/new-page/final-step/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href)), {
                                auth: true,
                            })];
                    case 1:
                        response = (_a.sent());
                        setType(response.page.type);
                        setComments(response.page.comments_disabled);
                        setRating(response.page.ratings_disabled);
                        setAnonymously(response.page.anonymously);
                        setLinks(response.page.links_disabled);
                        setTags(response.tags);
                        setUsername(response.page.user_username);
                        setUrl(response.page.url || null);
                        setUsedUrls(response.urls);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.status === 401) {
                            window.location.href = "/login?redirected=new-page";
                        }
                        else {
                            navigate("/new-page/initial-step");
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var content;
    if (!type) {
        content = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })));
    }
    else if (type === "public") {
        content = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FinalStepPublic__WEBPACK_IMPORTED_MODULE_5__["default"], { comments: comments || false, rating: rating || false, links: links || false, anonymously: anonymously || false, tags: tags }));
    }
    else if (type === "private") {
        content = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FinalStepPrivate__WEBPACK_IMPORTED_MODULE_6__["default"], { username: username || "", comments: comments || false, rating: rating || false, anonymously: anonymously || false, url: url || "", usedUrls: usedUrls }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ id: "new-page-container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], { width: 100 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new" }, { children: content }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinalStep);


/***/ }),

/***/ "./src/views/new-page/FinalStepPrivate.tsx":
/*!*************************************************!*\
  !*** ./src/views/new-page/FinalStepPrivate.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
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





var FinalStepPrivate = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.comments), comments = _a[0], setComments = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.rating), rating = _b[0], setRating = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.anonymously), anonymously = _c[0], setAnonymously = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.url), url = _d[0], setUrl = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), urlError = _e[0], setUrlError = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), publishBtnLoading = _f[0], setPublishBtnLoading = _f[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Loading...");
        updatePage(function () {
            (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
        });
    }, [rating, comments, anonymously]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        // check for URL validation on change
        if (url)
            checkUrlValidation();
    }, [url]);
    // Toggle each switch button
    var onSwitchClicked = function (role) {
        switch (role) {
            case "comments":
                setComments(!comments);
                break;
            case "rating":
                setRating(!rating);
                break;
            case "anonymously":
                setAnonymously(!anonymously);
                break;
        }
    };
    // Check to see if a chosen URL is valid
    var checkUrlValidation = function () {
        if (url && url.length > 0 && props.usedUrls.indexOf(url) === -1) {
            setUrlError("");
            return true;
        }
        else if (props.usedUrls.indexOf(url) !== -1) {
            setUrlError("You have already used \"".concat(url, "\" url, choose something else."));
            return false;
        }
        else {
            setUrlError("Please choose a URL for your page.");
            return false;
        }
    };
    // Sends a request to the server to update the draft page
    var updatePage = function (callback) { return __awaiter(void 0, void 0, void 0, function () {
        var page, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = {
                        id: _pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href),
                        type: "private",
                        configurations: {
                            comments: comments,
                            rating: rating,
                            anonymously: anonymously,
                        },
                        url: url,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.patch("/new-page/final-step/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)), {
                            page: page,
                        }, {
                            auth: true,
                        })];
                case 2:
                    _a.sent();
                    if (callback)
                        callback();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    if (callback)
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                    navigate("/new-page/initial-step");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onSubmitButtonClicked = function () {
        if (!checkUrlValidation())
            return document.querySelector("#url").focus();
        setPublishBtnLoading(true);
        updatePage(function () { return __awaiter(void 0, void 0, void 0, function () {
            var pageId, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageId = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.post("/new-page/".concat(pageId), null, {
                                auth: true,
                            })];
                    case 2:
                        response = (_a.sent());
                        navigate("/new-page/message?type=private&status=success&url=".concat(response.url, "&username=").concat(response.username));
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.message.error === "error with contents") {
                            navigate("/new-page/message?type=private&status=error-contents&id=".concat(pageId));
                        }
                        else {
                            navigate("/new-page/message?type=private&status=error");
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        setPublishBtnLoading(false);
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    var onBackButtonClicked = function () {
        updatePage(function () {
            (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
            navigate("/new-page/attach-files?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)));
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "button-text button-text--big a-11", onClick: function () {
                    onBackButtonClicked();
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }), " Back"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Configurations and URL" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__final-step" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switches" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Disable Comments" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "tooltip tooltip-top tooltip--info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", className: "tooltip__icon" }, { children: "?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "tooltip__text" }, { children: "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return onSwitchClicked("comments"); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !comments ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", value: "false" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Disable Rating" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "tooltip tooltip-top tooltip--info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", className: "tooltip__icon" }, { children: "?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "tooltip__text" }, { children: "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return onSwitchClicked("rating"); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !rating ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", value: "false" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Create This Page Anonymously" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "tooltip tooltip-top tooltip--info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", className: "tooltip__icon" }, { children: "?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "tooltip__text" }, { children: "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return onSwitchClicked("anonymously"); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: anonymously
                                                ? "fa fa-2x fa-toggle-on"
                                                : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", value: "false" })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Input, { id: "url", label: "URL", placeholder: "Choose a URL for your page.", type: "text", error: urlError, value: url, onBlur: function () {
                                    updatePage();
                                    checkUrlValidation();
                                }, onChange: function (value) {
                                    setUrl(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.convertToUrl(value));
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "url__display" }, { children: ["pagser.com/", props.username, "/", url] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "url__note" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Important note about URL:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["This URL will be for your page, please copy this because the only way other persons can view this page is to have this URL. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " ", "You should share this URL in order for others to view it."] })] }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ onClick: function () {
                        onSubmitButtonClicked();
                    }, loading: publishBtnLoading, color: "green" }, { children: ["Publish", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-globe button__icon-right" })] })) }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinalStepPrivate);


/***/ }),

/***/ "./src/views/new-page/FinalStepPublic.tsx":
/*!************************************************!*\
  !*** ./src/views/new-page/FinalStepPublic.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
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





var FinalStepPublic = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.comments), comments = _a[0], setComments = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.rating), rating = _b[0], setRating = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.links), links = _c[0], setLinks = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.anonymously), anonymously = _d[0], setAnonymously = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.tags), tags = _e[0], setTags = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), tagsError = _f[0], setTagsError = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), publishBtnLoading = _g[0], setPublishBtnLoading = _g[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        // To fix width issue client-js/node_modules/tags-input/tags-input.js and in setInputWidth
        // function change the value to a higher value (5 -> 10)
        if (!document.querySelector("div.tags-input"))
            (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.tagsInput)(document.querySelector('input[type="tags"]'));
        document.querySelector("#tags").addEventListener("change", function () {
            setTags(this.value);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Loading...");
        updatePage(function () {
            (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
        });
    }, [comments, rating, links, anonymously]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (tags) {
            updatePage();
            checkTagsValidation();
        }
    }, [tags]);
    var updatePage = function (callback) { return __awaiter(void 0, void 0, void 0, function () {
        var page, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    page = {
                        type: "public",
                        configurations: {
                            comments: comments,
                            rating: rating,
                            links: links,
                            anonymously: anonymously,
                        },
                        tags: tags,
                    };
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.patch("/new-page/final-step/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)), { page: page }, {
                            auth: true,
                        })];
                case 1:
                    _a.sent();
                    if (callback)
                        callback();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                    navigate("/new-page/initial-step");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // Check if the tags are valid
    var checkTagsValidation = function () {
        if (tags.split(",").length < 5) {
            setTagsError("Please choose at least 5 tags.");
            return false;
        }
        if (tags.replace(/,/g, "").length >= 200) {
            setTagsError("Tags must be less than 200 characters.");
            return false;
        }
        setTagsError("");
        return true;
    };
    // Toggle each switch button
    var onSwitchClicked = function (role) {
        switch (role) {
            case "comments":
                setComments(!comments);
                break;
            case "rating":
                setRating(!rating);
                break;
            case "links":
                setLinks(!links);
                break;
            case "anonymously":
                setAnonymously(!anonymously);
                break;
        }
    };
    var onBackButtonClicked = function () {
        updatePage(function () {
            (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
            navigate("/new-page/attach-files?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)));
        });
    };
    var onPublishButtonClicked = function () {
        if (!checkTagsValidation())
            return document.querySelector("#tags").focus();
        setPublishBtnLoading(true);
        updatePage(function () { return __awaiter(void 0, void 0, void 0, function () {
            var pageId, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageId = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.post("/new-page/".concat(pageId), null, {
                                auth: true,
                            })];
                    case 2:
                        response = (_a.sent());
                        navigate("/new-page/message?type=public&status=success&url=".concat(response.url));
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.message.error === "error with contents") {
                            navigate("/new-page/message?type=public&status=error-contents&id=".concat(pageId));
                        }
                        else {
                            navigate("/new-page/message?type=public&status=error");
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                        setPublishBtnLoading(false);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "button-text button-text--big a-11", onClick: function () {
                    onBackButtonClicked();
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }), " Back"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Configurations and Tags" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__final-step" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switches" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Disable Comments" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "tooltip tooltip-top tooltip--info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", className: "tooltip__icon" }, { children: "?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "tooltip__text" }, { children: "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return onSwitchClicked("comments"); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !comments ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", value: "false" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Disable Rating" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "tooltip tooltip-top tooltip--info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", className: "tooltip__icon" }, { children: "?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "tooltip__text" }, { children: "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return onSwitchClicked("rating"); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !rating ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", value: "false" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Do Not Display Related Pages and Tags" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "tooltip tooltip-top tooltip--info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", className: "tooltip__icon" }, { children: "?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "tooltip__text" }, { children: "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return onSwitchClicked("links"); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !links ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", value: "false" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Create This Page Anonymously" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "tooltip tooltip-top tooltip--info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", className: "tooltip__icon" }, { children: "?" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "tooltip__text" }, { children: "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return onSwitchClicked("anonymously"); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: anonymously
                                                ? "fa fa-2x fa-toggle-on"
                                                : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", value: "false" })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form__group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ className: "form__label", htmlFor: "tags" }, { children: "Tags" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tags", className: "tags-input", id: "tags", defaultValue: tags }), tagsError && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "input-error" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-exclamation-circle" }), tagsError] })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "small-paragraph" }, { children: ["Please read", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", target: "_blank", className: "button-text" }, { children: "this" })), " ", "quick guide before you change any of the configurations and choose any tags."] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ onClick: function () {
                        onPublishButtonClicked();
                    }, loading: publishBtnLoading, color: "green" }, { children: ["Publish", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-globe button__icon-right" })] })) }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinalStepPublic);


/***/ }),

/***/ "./src/views/new-page/InitialStep.tsx":
/*!********************************************!*\
  !*** ./src/views/new-page/InitialStep.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./src/views/new-page/ProgressBar.tsx");
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






var InitialStep = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), type = _a[0], setType = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), nextButtonLoading = _c[0], setNextButtonLoading = _c[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var pageId, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        pageId = _pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!pageId) return [3 /*break*/, 3];
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.get("/new-page/initial-step/".concat(pageId), {
                                auth: true,
                            })];
                    case 2:
                        response = (_a.sent());
                        setType(response.type);
                        _a.label = 3;
                    case 3:
                        setLoading(false);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        if ((e_1 === null || e_1 === void 0 ? void 0 : e_1.status) === 401) {
                            window.location.href = "/login?redirected=new-page";
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var onRadioChange = function (selectedType) {
        setType(selectedType);
    };
    var onNextButtonClicked = function () { return __awaiter(void 0, void 0, void 0, function () {
        var pageId, response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setNextButtonLoading(true);
                    pageId = _pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    response = void 0;
                    if (!pageId) return [3 /*break*/, 3];
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.patch("/new-page/initial-step/".concat(pageId), { page: { type: type } }, { auth: true })];
                case 2:
                    response = (_a.sent());
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.post("/new-page", { page: { type: type } }, { auth: true })];
                case 4:
                    // Create a new page
                    response = (_a.sent());
                    _a.label = 5;
                case 5:
                    navigate("/new-page/page-contents?id=".concat(response.id));
                    return [3 /*break*/, 7];
                case 6:
                    e_2 = _a.sent();
                    return [3 /*break*/, 7];
                case 7:
                    setNextButtonLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderContent = function () {
        if (loading)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })));
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Choose Your Page Type" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__types" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", __assign({ className: "control control--radio" }, { children: ["Public", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", value: "public", name: "radio", onClick: function () {
                                        onRadioChange("public");
                                    }, defaultChecked: type === "public" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "control__indicator" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new__types__details" }, { children: "Choose this one if you want your page to be visible to everyone, your page can be founded by search engines if you supply it with good content. Public pages will be shown in your public profile unless you create it anonymously." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", __assign({ className: "control control--radio font-weight-400" }, { children: ["Private", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", value: "private", name: "radio", defaultChecked: type === "private", onClick: function () {
                                        onRadioChange("private");
                                    } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "control__indicator" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__types__details" }, { children: ["Choose this if you want your page to be visible by only a specific kind of persons, such as your friends, workmates, students ,etc. You can restrict to only certain people to be able to view it. Your private pages will not been shown on your public profile.", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "The only way for others to find the page is by the URL that you will give them." })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ onClick: function () {
                            onNextButtonClicked();
                        }, color: "blue", disabled: !type, loading: nextButtonLoading }, { children: ["Next", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-circle-right button__icon-right" })] })) }))] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], { width: 20 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new" }, { children: renderContent() }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InitialStep);


/***/ }),

/***/ "./src/views/new-page/Message.tsx":
/*!****************************************!*\
  !*** ./src/views/new-page/Message.tsx ***!
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


var Message = function () {
    var status = _pagser_common__WEBPACK_IMPORTED_MODULE_1__.util.getParameterByName("status", window.location.href);
    var type = _pagser_common__WEBPACK_IMPORTED_MODULE_1__.util.getParameterByName("type", window.location.href);
    var url = _pagser_common__WEBPACK_IMPORTED_MODULE_1__.util.getParameterByName("url", window.location.href);
    var id = _pagser_common__WEBPACK_IMPORTED_MODULE_1__.util.getParameterByName("id", window.location.href);
    var username = _pagser_common__WEBPACK_IMPORTED_MODULE_1__.util.getParameterByName("username", window.location.href);
    if (type === "public" && status === "success") {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "middle-box middle-box--success margin-bottom-1" }, { children: ["You have successfully published your public page, you can view that from the link below. Other users can like, dislike or comment on your page if you haven't disabled them and we will send you notifications about them. You can view all the public and private pages you've created in", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "white-link", href: "/u/pages" }, { children: "pages section." })) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content middle-box--link" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "blue-link", href: "/public-pages/".concat(url) }, { children: "View your public page" })) }))] }));
    }
    if (type === "private" && status === "success") {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "middle-box middle-box--success margin-bottom-1" }, { children: ["You have successfully created your private page, you can view that from the link below. To share this page with the persons you want, you should share the link of your page with them (link below). You can view all the public and private pages you've created in", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "white-link", href: "/u/pages" }, { children: "pages section." })) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content middle-box--link" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "blue-link", href: "/".concat(username, "/").concat(url) }, { children: "View your private page" })) }))] }));
    }
    if (status === "error-contents") {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "middle-box middle-box--error margin-bottom-1" }, { children: "There was something wrong with the contents you've provided, please review your page contents and make sure that everything is OK." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content middle-box--link" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "blue-link", href: "/new-page/initial-step?id=".concat(id) }, { children: "Review your page" })) }))] }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "middle-box middle-box--error margin-bottom-1" }, { children: "Sorry something went wrong because of us! We will review what happened as soon as possible and let you know what was the issue. In the meanwhile please create your page again from scratch or view your draft pages via the links below. We apologize for the inconvenience." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "center-content middle-box--link" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "blue-link", href: "/new-page/initial-step" }, { children: "Create a new page" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "blue-link", href: "/u/pages/draft" }, { children: "View your draft pages" }))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/views/new-page/PageContents.tsx":
/*!*********************************************!*\
  !*** ./src/views/new-page/PageContents.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tinymce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tinymce */ "../../node_modules/react-tinymce/lib/main.js");
/* harmony import */ var react_tinymce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tinymce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressBar */ "./src/views/new-page/ProgressBar.tsx");
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







var PageContents = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), type = _a[0], setType = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), title = _b[0], setTitle = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), titleError = _c[0], setTitleError = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), briefDes = _d[0], setBriefDes = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), briefDesError = _e[0], setBriefDesError = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), targets = _f[0], setTargets = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), targetsError = _g[0], setTargetsError = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), body = _h[0], setBody = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), bodyError = _j[0], setBodyError = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), saved = _k[0], setSaved = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), nextButtonLoading = _l[0], setNextButtonLoading = _l[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var pageId, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageId = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.get("/new-page/page-contents/".concat(pageId), { auth: true })];
                    case 2:
                        response = (_a.sent());
                        setBody(response.page.body || "");
                        setType(response.page.type || "");
                        setTitle(response.page.title || "");
                        setTargets(response.page.targets || "");
                        setBriefDes(response.page.brief_description || "");
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1.status === 401) {
                            window.location.href = "/login?redirected=new-page";
                        }
                        else {
                            navigate("/new-page/initial-step");
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        // Send a request to server automatically to save the changes, we won't send a request
        // if the changes are already saved
        var interval = setInterval(function () {
            if (!saved)
                updatePage();
        }, 5000);
        return function () { return clearInterval(interval); };
    }, [title, body, briefDes, targets]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        checkPageBodyValidation();
    }, [body]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        checkTargetsValidation();
    }, [targets]);
    var handlerBeforeunload = function (e) {
        e.preventDefault();
        e.returnValue = "Unsaved changes, are you sure you want to close?";
        return;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (saved === false) {
            // window.addEventListener("beforeunload", handlerBeforeunload, true);
        }
    }, [saved]);
    // This will send the current page data to server for saving.
    // This will run when user wants to change the current stage
    // either by going to the next or previous stage
    var updatePage = function (to, successMessage) { return __awaiter(void 0, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (to && !(to === null || to === void 0 ? void 0 : to.includes("page-thumbnail")))
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Loading...");
                    if (to && to.includes("page-thumbnail")) {
                        setNextButtonLoading(true);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.patch("/new-page/page-contents/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)), {
                            page: {
                                contents: {
                                    title: title,
                                    briefDes: briefDes,
                                    body: body,
                                    targets: targets,
                                },
                            },
                        }, { auth: true })];
                case 2:
                    _a.sent();
                    setSaved(true);
                    // @Todo: doesn't work!
                    window.removeEventListener("beforeunload", handlerBeforeunload, true);
                    if (successMessage)
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.alert)(successMessage, "success");
                    if (to) {
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                        setNextButtonLoading(false);
                        navigate(to);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    if (to) {
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                        setNextButtonLoading(false);
                        navigate("/new-page/initial-step");
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onBackButtonClicked = function () {
        updatePage("/new-page/initial-step?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)));
    };
    var onNextButtonClicked = function () {
        var _a, _b, _c;
        if (checkIfAllOk()) {
            updatePage("/new-page/page-thumbnail?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("id", window.location.href)));
        }
        else {
            if (!checkTitleValidation()) {
                var titleEl = document.querySelector("#title");
                titleEl.focus();
                return;
            }
            if (!checkBriefDesValidation()) {
                var briefDesEl = document.querySelector("#briefDes");
                briefDesEl.focus();
                return;
            }
            if (!checkTargetsValidation()) {
                var targetsEl = document.querySelector("#targets");
                targetsEl.focus();
                return;
            }
            if (!checkPageBodyValidation()) {
                (_a = document.getElementById("targetsInput")) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
                (_c = (_b = document.querySelector("iframe")) === null || _b === void 0 ? void 0 : _b.contentWindow) === null || _c === void 0 ? void 0 : _c.document.body.focus();
            }
        }
    };
    // Check if the title provided by user is valid or not.
    // This will run by onblur and onchange event on title input
    var checkTitleValidation = function (text) {
        var minLen = type === "public" ? 15 : 1;
        var val = text ? text : title;
        if (val.length < minLen) {
            setTitleError(type === "public"
                ? "Title should be more than ".concat(minLen, " characters.")
                : "Title cannot be be blank.");
            return false;
        }
        if (val.length > 50) {
            setTitleError("Title should be less than 50 characters.");
            return false;
        }
        setTitleError("");
        return true;
    };
    // Check if the brief description provided by user is valid or not.
    // This will run by onblur and onchange event on briefDes input
    var checkBriefDesValidation = function () {
        var minLen = type === "public" ? 30 : 0;
        if (briefDes.length < minLen) {
            setBriefDesError(type === "public"
                ? "Brief description should be more than ".concat(minLen, " characters.")
                : "");
            return false;
        }
        if (briefDes.length > 300) {
            setBriefDesError("Brief description should be less than 300 characters.");
            return false;
        }
        setBriefDesError("");
        return true;
    };
    // Check if the targets provided by user is valid or not.
    // This will run by onblur and onchange event on targets input
    var checkTargetsValidation = function () {
        var minLen = type === "public" ? 20 : 0;
        if (targets.length < minLen) {
            setTargetsError("Targets description should be more than ".concat(minLen, " characters."));
            return false;
        }
        if (targets.length > 300) {
            setTargetsError("Targets description should be less than 300 characters.");
            return false;
        }
        setTargetsError("");
        return true;
    };
    // Check if the Page Body provided by user is valid or not.
    // This will run by onchange event on TinyMCE input
    var checkPageBodyValidation = function () {
        // Remove all html and extra spaces and then check
        var html = body;
        var div = document.createElement("div");
        div.innerHTML = html;
        var bodyText = div.textContent || div.innerText || "";
        bodyText = bodyText.replace(/\s+/g, " ").trim();
        var minLen = type === "public" ? 50 : 1;
        var tinymceEL = document.querySelector(".mce-tinymce");
        if (bodyText.length < minLen && tinymceEL) {
            tinymceEL.style.border = "1px solid #e74c3c";
            setBodyError(type === "public"
                ? "Body should be more than ".concat(minLen, " characters.")
                : "Body cannot be blank.");
            return false;
        }
        if (bodyText.length > 20000 && tinymceEL) {
            tinymceEL.style.border = "1px solid #e74c3c";
            setBodyError("Body should be less than 20000 characters.");
            return false;
        }
        if (tinymceEL) {
            tinymceEL.style.border = "1px solid #CACACA";
            setBodyError("");
            return true;
        }
        return false;
    };
    // Return true or false to indicate if all the inputs are valid or not
    var checkIfAllOk = function () {
        // For page body, remove all html and extra spaces and then check
        var html = body;
        var div = document.createElement("div");
        div.innerHTML = html;
        var bodyText = div.textContent || div.innerText || "";
        bodyText = bodyText.replace(/\s+/g, " ").trim();
        if (type === "public") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(title, 15, 50) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(briefDes, 30, 300) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(targets, 20, 300) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(bodyText, 50, 20000)) {
                return true;
            }
            else {
                return false;
            }
        }
        if (type === "private") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(title, 1, 50) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(briefDes, 0, 300) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(targets, 0, 300) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(bodyText, 1, 200000)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    var renderContents = function () {
        var requiredLabel;
        if (type === "private") {
            requiredLabel = " *";
        }
        var bodyClassName = "form__group";
        bodyClassName += bodyError && " form__group--error";
        if (type) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "button-text button-text--big a-11", onClick: function () {
                            onBackButtonClicked();
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }), " Back"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Fill Out Your Page Content" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__contents" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Input, { label: type === "private" ? "Title *" : "Title", id: "title", value: title, onChange: function (value) {
                                        if (value)
                                            checkTitleValidation(value);
                                        setTitle(value);
                                        setSaved(false);
                                    }, placeholder: "Choose a title for your page.", maxLength: 50, help: "this is some text to help you understand the input better.", error: titleError, onBlur: function (value) {
                                        checkTitleValidation(value);
                                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Textarea, { label: "Brief Description", id: "briefDes", value: briefDes, rows: 3, onChange: function (value) {
                                        if (value)
                                            checkBriefDesValidation();
                                        setBriefDes(value);
                                        setSaved(false);
                                    }, placeholder: "Describe briefly what your page is all about.", help: "this is some text to help you understand the input better.", maxLength: 300, error: briefDesError, onBlur: function () {
                                        checkBriefDesValidation();
                                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Textarea, { label: "Targets", value: targets, id: "targets", rows: 3, onChange: function (value) {
                                        if (value)
                                            checkTargetsValidation();
                                        setTargets(value);
                                        setSaved(false);
                                    }, placeholder: "Describe briefly who this page is for.", help: "this is some text to help you understand the input better.", maxLength: 300, error: targetsError, onBlur: function () {
                                        checkTargetsValidation();
                                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", { className: "hr u-margin-top-5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: bodyClassName, id: "body" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", __assign({ htmlFor: "bodyInput", className: "form__label" }, { children: ["Page Body", requiredLabel] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_tinymce__WEBPACK_IMPORTED_MODULE_2___default()), { content: body, config: {
                                            skin_url: "/tinymce-skin",
                                            plugins: "preview link lists advlist codesample image imagetools",
                                            toolbar: "formatselect | bold italic underline | link codesample image | alignleft aligncenter alignright | bullist numlist | outdent indent",
                                            block_formats: "Paragraph=p; Header=h2;",
                                            menubar: false,
                                            statusbar: false,
                                            image_dimensions: false,
                                            imagetools_toolbar: "rotateleft rotateright | flipv fliph | imageoptions",
                                            height: 350,
                                        }, onInit: function () {
                                            if (localStorage.getItem("theme") === "dark") {
                                                // @ts-ignore
                                                document.querySelector("iframe"
                                                // @ts-ignore
                                                ).contentDocument.children[0].children[1].style.background =
                                                    "#555";
                                                // @ts-ignore
                                                document.querySelector("iframe"
                                                // @ts-ignore
                                                ).contentDocument.children[0].children[1].style.color =
                                                    "#fff";
                                            }
                                        }, onChange: function (e) {
                                            setBody(e.target.getContent());
                                            setSaved(false);
                                        }, onBlur: function (e) { } }, type), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "input-error" }, { children: [bodyError && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-exclamation-circle" }), bodyError] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [saved === false && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "text-orange" }, { children: "Saving changes..." }))), saved === true && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "text-green" }, { children: "Changes saved to the cloud!" })))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "small-paragraph" }, { children: ["See more information on what to provide in each input", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", target: "_blank", className: "button-text" }, { children: "here." }))] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ onClick: function () {
                                        onNextButtonClicked();
                                    }, loading: nextButtonLoading, color: "blue", disabled: !type }, { children: ["Next", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-circle-right button__icon-right" })] })) }))] }))] }));
        }
        else {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Loading, {}) })));
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], { width: 40 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__note-box" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "A note about saving:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["We ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "automatically save" }), " what you write and all the other changes you do, your page is saved as a draft until you decide to publish it, which you can do in the last step."] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["You can view all of your draft pages", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/u/pages/draft", target: "_blank", className: "button-text" }, { children: "here" })), "."] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new" }, { children: renderContents() }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContents);


/***/ }),

/***/ "./src/views/new-page/PageThumbnail.tsx":
/*!**********************************************!*\
  !*** ./src/views/new-page/PageThumbnail.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./src/views/new-page/ProgressBar.tsx");
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






var PageThumbnail = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), photo = _a[0], setPhoto = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), uploadPhotoMdl = _c[0], setUploadPhotoMdl = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationMdl = _d[0], setConfirmationMdl = _d[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        setLoading(true);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.get("/new-page/page-thumbnail/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href)), { auth: true })];
                    case 1:
                        response = (_b.sent());
                        setPhoto((_a = response === null || response === void 0 ? void 0 : response.page) === null || _a === void 0 ? void 0 : _a.photo_url);
                        setLoading(false);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        if (e_1.status === 401) {
                            window.location.href = "/login?redirected=new-page";
                        }
                        else {
                            navigate("/new-page/initial-step");
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    // Delete the photo user's uploaded
    var deletePagePhoto = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.loadingModal)("Removing the photo...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request["delete"]("/pages/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href), "/photo?type=draft"), { auth: true })];
                case 2:
                    _a.sent();
                    setPhoto("");
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.loadingModal)();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.alert)("Photo was successfully removed.", "success");
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.loadingModal)();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.alert)("There was problem with removing the photo.", "error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onBackButtonClicked = function () {
        navigate("/new-page/page-contents?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href)));
    };
    var onNextButtonClicked = function () {
        navigate("/new-page/attach-files?id=".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href)));
    };
    var renderContents = function () {
        if (loading)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })));
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "button-text button-text--big a-11", onClick: function () {
                        onBackButtonClicked();
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }), " Back"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Choose a Page Thumbnail" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-18" }, { children: photo
                        ? "This photo will be used for your page thumbnail:"
                        : "Upload a beautiful photo to set as a thumbnail of your page:" })), photo && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: photo }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-thumbnail__action-buttons" }, { children: [photo && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ size: "small", rounded: true, color: "red", onClick: function () {
                                setConfirmationMdl(true);
                            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-trash button__icon-left" }), "Remove Page Photo"] }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "blue", rounded: true, size: "small", onClick: function () {
                                setUploadPhotoMdl(true);
                            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-upload button__icon-left" }), photo ? "Change Page Photo" : "Upload a Page Photo"] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-18 italic" }, { children: photo
                        ? "You can always change or remove your page photo after you published your page."
                        : "You can always upload a new photo after you published your page, you can also skip uploading a photo for now and do it after publishing the page." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.UploadPhoto, { open: uploadPhotoMdl, onClose: function () {
                        setUploadPhotoMdl(false);
                    }, header: "Upload Page Photo", text: "Upload a stunning photo to set as the featured image of your page:", cropMsg: "Choose an area to be shown as for the page thumbnail, this won't\n                crop your image, this is just the area that will be shown as the\n                thumbnail.", inputLabelName: "Choose a photo", url: "/pages/".concat(_pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.getParameterByName("id", window.location.href), "/photo?type=draft"), minWidth: 1200, minHeight: 675, size: 8000000, aspectRatio: 48 / 27, success: function (imageUrl) {
                        setPhoto(imageUrl);
                    } }), photo && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, { header: "Remove your page photo", message: "Are you sure that you want to delete your page photo?\n                  This cannot be undo.", open: confirmationMdl, onConfirm: function () {
                        deletePagePhoto();
                        setConfirmationMdl(false);
                    }, onCancel: function () {
                        setConfirmationMdl(false);
                    } })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ onClick: function () {
                            onNextButtonClicked();
                        }, color: photo ? "blue" : "default" }, { children: [photo ? "Next" : "Skip", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-circle-right button__icon-right" })] })) }))] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], { width: 60 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new" }, { children: renderContents() })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__note-box" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Why it's important to choose a thumbnail for your page?" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "A good page thumbnail will help to increase your page views and let other users distinguish your page more and make it more recognizable if they add it to their collections or other places." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "We highly suggest you choose a photo for your page thumbnail." }) })] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageThumbnail);


/***/ }),

/***/ "./src/views/new-page/ProgressBar.tsx":
/*!********************************************!*\
  !*** ./src/views/new-page/ProgressBar.tsx ***!
  \********************************************/
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

var ProgressBar = function (props) {
    var style = {
        width: props.width + "%",
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ id: "myProgress" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "myBar", style: style }) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ }),

/***/ "./src/views/new-page/index.tsx":
/*!**************************************!*\
  !*** ./src/views/new-page/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _InitialStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InitialStep */ "./src/views/new-page/InitialStep.tsx");
/* harmony import */ var _PageContents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageContents */ "./src/views/new-page/PageContents.tsx");
/* harmony import */ var _PageThumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageThumbnail */ "./src/views/new-page/PageThumbnail.tsx");
/* harmony import */ var _AttachFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AttachFiles */ "./src/views/new-page/AttachFiles.tsx");
/* harmony import */ var _FinalStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FinalStep */ "./src/views/new-page/FinalStep.tsx");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Message */ "./src/views/new-page/Message.tsx");








function NewPage() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page/initial-step", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InitialStep__WEBPACK_IMPORTED_MODULE_1__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page/page-contents", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PageContents__WEBPACK_IMPORTED_MODULE_2__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page/page-thumbnail", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PageThumbnail__WEBPACK_IMPORTED_MODULE_3__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page/attach-files", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AttachFiles__WEBPACK_IMPORTED_MODULE_4__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page/attach-files", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AttachFiles__WEBPACK_IMPORTED_MODULE_4__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page/final-step", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FinalStep__WEBPACK_IMPORTED_MODULE_5__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page/message", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Message__WEBPACK_IMPORTED_MODULE_6__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/new-page", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Navigate, { to: "/new-page/initial-step", replace: true }) })] }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsbURBQUssSUFBSSwyQ0FBMkMsc0RBQUksQ0FBQyxzREFBYSxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLG1EQUFLLElBQUkseUNBQXlDLHNEQUFJLENBQUMsb0RBQVcsSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLHlDQUF5QyxzREFBSSxDQUFDLG9EQUFXLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsbURBQUssSUFBSSx1Q0FBdUMsc0RBQUksQ0FBQyxrREFBUyxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLG1EQUFLLElBQUksb0NBQW9DLHNEQUFJLENBQUMsZ0RBQU8sSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLDRCQUE0QixzREFBSSxDQUFDLHNEQUFRLElBQUksNkNBQTZDLEdBQUcsSUFBSSxHQUFHO0FBQ2x1QjtBQUNBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL0F0dGFjaEZpbGVzLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9uZXctcGFnZS9GaW5hbFN0ZXAudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL0ZpbmFsU3RlcFByaXZhdGUudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL0ZpbmFsU3RlcFB1YmxpYy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbmV3LXBhZ2UvSW5pdGlhbFN0ZXAudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL01lc3NhZ2UudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL1BhZ2VDb250ZW50cy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbmV3LXBhZ2UvUGFnZVRodW1ibmFpbC50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbmV3LXBhZ2UvUHJvZ3Jlc3NCYXIudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQnV0dG9uLCBDb25maXJtTW9kYWwsIFVwbG9hZEF0dGFjaEZpbGUsIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHV0aWwsIHJlcXVlc3QsIGxvYWRpbmdNb2RhbCwgYWxlcnQgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xudmFyIEF0dGFjaEZpbGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFtdKSwgZmlsZXMgPSBfYVswXSwgc2V0RmlsZXMgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgZXJyb3IgPSBfYlswXSwgc2V0RXJyb3IgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfY1swXSwgc2V0TG9hZGluZyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZmlybWF0aW9uTWRsID0gX2RbMF0sIHNldENvbmZpcm1hdGlvbk1kbCA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtYXRpb25NZGxEYXRhSWQgPSBfZVswXSwgc2V0Q29uZmlybWF0aW9uTWRsRGF0YUlkID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoZmFsc2UpLCB1cGxvYWRBdHRhY2hGaWxlTWRsID0gX2ZbMF0sIHNldFVwbG9hZEF0dGFjaEZpbGVNZGwgPSBfZlsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoRmlsZXMoKTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIGZldGNoRmlsZXMgPSBmdW5jdGlvbiAobXNnKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UsIGVycm9yXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL3BhZ2VzL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSwgXCIvYXR0YWNoLWZpbGVzP3R5cGU9ZHJhZnRcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZXMocmVzcG9uc2UuYXR0YWNoRmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KG1zZywgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcl8xLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luP3JlZGlyZWN0ZWQ9bmV3LXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2luaXRpYWwtc3RlcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgdmFyIHJlbmRlckZpbGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmaWxlLWxpbmtcIiwgaHJlZjogXCIvYXBpL3BhZ2VzL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSwgXCIvYXR0YWNoLWZpbGVzL1wiKS5jb25jYXQoZmlsZS5uYW1lKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZG93bmxvYWRcIiB9KSwgXCIgXCIgKyBmaWxlLm5hbWUsIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWlcIiwgb25DbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcHJldmVudCB0aGUgZmlsZSBmcm9tIHN0YXJ0aW5nIHRvIGdldCBkb3dubG9hZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1kbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25NZGxEYXRhSWQoZmlsZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRpbWVzXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkgfSkpXSB9KSwgZmlsZS5uYW1lKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIG9uQmFja0J1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL3BhZ2UtdGh1bWJuYWlsP2lkPVwiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkpO1xuICAgIH07XG4gICAgdmFyIG9uTmV4dEJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2ZpbmFsLXN0ZXA/aWQ9XCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSk7XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2FkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKTtcbiAgICAgICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0IGJ1dHRvbi10ZXh0LS1iaWcgYS0xMVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJhY2tCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWFycm93LWxlZnRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgQmFja1wiXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiQWRkIEF0dGFjaCBGaWxlc1wiIH0pKSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMThcIiB9LCB7IGNoaWxkcmVuOiBcIkFkZCBhdHRhY2ggZmlsZXMgZm9yIHlvdXIgcGFnZSBpbiBwcmV0dHkgbXVjaCBhbnkgZm9ybWF0IHRoYXQgeW91IHdhbnQ6XCIgfSkpLCBfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZEF0dGFjaEZpbGVNZGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXVwbG9hZCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBcIiBBZGQgYW4gQXR0YWNoIEZpbGVcIl0gfSkpLCBfanN4KENvbmZpcm1Nb2RhbCwgeyBoZWFkZXI6IFwiUmVtb3ZlIHRoZSBhdHRhY2ggZmlsZVwiLCBvcGVuOiBjb25maXJtYXRpb25NZGwsIG1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgYXR0YWNoIGZpbGU/XCIsIG9uQ29uZmlybTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJEZWxldGluZyB0aGUgYXR0YWNoIGZpbGUuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmRlbGV0ZShcIi9wYWdlcy9cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZiksIFwiL2F0dGFjaC1maWxlcy9cIikuY29uY2F0KGNvbmZpcm1hdGlvbk1kbERhdGFJZCwgXCI/dHlwZT1kcmFmdFwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEZpbGVzKFwiRmlsZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pOyB9LCBvbkNhbmNlbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q29uZmlybWF0aW9uTWRsKGZhbHNlKTsgfSB9KSwgX2pzeChVcGxvYWRBdHRhY2hGaWxlLCB7IG9wZW46IHVwbG9hZEF0dGFjaEZpbGVNZGwsIGhlYWRlcjogXCJBZGQgYW4gQXR0YWNoIEZpbGVcIiwgdGV4dDogXCJZb3UgY2FuIHVwbG9hZCBtYXhpbXVtIG9mIDUgZmlsZXMgMTBNQiBlYWNoIGZvciBldmVyeSBwYWdlLlwiLCBzaXplOiAxMDAwMDAwMCwgdXJsOiBcIi9wYWdlcy9cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZiksIFwiL2F0dGFjaC1maWxlcz90eXBlPWRyYWZ0XCIpLCBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEZpbGVzKFwiRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRBdHRhY2hGaWxlTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1hdHRhY2gtZmlsZXNfX2ZpbGVzXCIgfSwgeyBjaGlsZHJlbjogcmVuZGVyRmlsZXMoKSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTggaXRhbGljXCIgfSwgeyBjaGlsZHJlbjogZmlsZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiWW91IGNhbiBhbHdheXMgYWRkL3JlbW92ZSBhdHRhY2ggZmlsZXMgYWZ0ZXIgeW91IHB1Ymxpc2hlZCB5b3VyIHBhZ2UuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJZb3UgY2FuIGFsd2F5cyBhZGQvcmVtb3ZlIGF0dGFjaCBmaWxlcyBhZnRlciB5b3UgcHVibGlzaGVkIHlvdXIgcGFnZSwgeW91IGNhbiBhbHNvIHNraXAgdGhpcyBmb3Igbm93IGFuZCBkbyBpdCBhZnRlciB5b3UgcHVibGlzaGVkIHlvdXIgcGFnZS5cIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5leHRCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjb2xvcjogZmlsZXMubGVuZ3RoID8gXCJibHVlXCIgOiBcImRlZmF1bHRcIiB9LCB7IGNoaWxkcmVuOiBbZmlsZXMubGVuZ3RoID8gXCJOZXh0XCIgOiBcIlNraXBcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0IGJ1dHRvbl9faWNvbi1yaWdodFwiIH0pXSB9KSkgfSkpXSB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChQcm9ncmVzc0JhciwgeyB3aWR0aDogODAgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb250ZW50cygpIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEF0dGFjaEZpbGVzO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXRpbCwgcmVxdWVzdCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBGaW5hbFN0ZXBQdWJsaWMgZnJvbSBcIi4vRmluYWxTdGVwUHVibGljXCI7XG5pbXBvcnQgRmluYWxTdGVwUHJpdmF0ZSBmcm9tIFwiLi9GaW5hbFN0ZXBQcml2YXRlXCI7XG52YXIgRmluYWxTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKG51bGwpLCB0eXBlID0gX2FbMF0sIHNldFR5cGUgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShudWxsKSwgY29tbWVudHMgPSBfYlswXSwgc2V0Q29tbWVudHMgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShudWxsKSwgcmF0aW5nID0gX2NbMF0sIHNldFJhdGluZyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKG51bGwpLCBhbm9ueW1vdXNseSA9IF9kWzBdLCBzZXRBbm9ueW1vdXNseSA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKG51bGwpLCBsaW5rcyA9IF9lWzBdLCBzZXRMaW5rcyA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCB0YWdzID0gX2ZbMF0sIHNldFRhZ3MgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShudWxsKSwgdXNlcm5hbWUgPSBfZ1swXSwgc2V0VXNlcm5hbWUgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShudWxsKSwgdXJsID0gX2hbMF0sIHNldFVybCA9IF9oWzFdO1xuICAgIHZhciBfaiA9IHVzZVN0YXRlKFtdKSwgdXNlZFVybHMgPSBfalswXSwgc2V0VXNlZFVybHMgPSBfalsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBlcnJvcl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL25ldy1wYWdlL2ZpbmFsLXN0ZXAvXCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFR5cGUocmVzcG9uc2UucGFnZS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKHJlc3BvbnNlLnBhZ2UuY29tbWVudHNfZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF0aW5nKHJlc3BvbnNlLnBhZ2UucmF0aW5nc19kaXNhYmxlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBbm9ueW1vdXNseShyZXNwb25zZS5wYWdlLmFub255bW91c2x5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExpbmtzKHJlc3BvbnNlLnBhZ2UubGlua3NfZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFncyhyZXNwb25zZS50YWdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHJlc3BvbnNlLnBhZ2UudXNlcl91c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcmwocmVzcG9uc2UucGFnZS51cmwgfHwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VkVXJscyhyZXNwb25zZS51cmxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yXzEuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luP3JlZGlyZWN0ZWQ9bmV3LXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2luaXRpYWwtc3RlcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pKCk7XG4gICAgfSwgW10pO1xuICAgIHZhciBjb250ZW50O1xuICAgIGlmICghdHlwZSkge1xuICAgICAgICBjb250ZW50ID0gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgIGNvbnRlbnQgPSAoX2pzeChGaW5hbFN0ZXBQdWJsaWMsIHsgY29tbWVudHM6IGNvbW1lbnRzIHx8IGZhbHNlLCByYXRpbmc6IHJhdGluZyB8fCBmYWxzZSwgbGlua3M6IGxpbmtzIHx8IGZhbHNlLCBhbm9ueW1vdXNseTogYW5vbnltb3VzbHkgfHwgZmFsc2UsIHRhZ3M6IHRhZ3MgfSkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcInByaXZhdGVcIikge1xuICAgICAgICBjb250ZW50ID0gKF9qc3goRmluYWxTdGVwUHJpdmF0ZSwgeyB1c2VybmFtZTogdXNlcm5hbWUgfHwgXCJcIiwgY29tbWVudHM6IGNvbW1lbnRzIHx8IGZhbHNlLCByYXRpbmc6IHJhdGluZyB8fCBmYWxzZSwgYW5vbnltb3VzbHk6IGFub255bW91c2x5IHx8IGZhbHNlLCB1cmw6IHVybCB8fCBcIlwiLCB1c2VkVXJsczogdXNlZFVybHMgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgaWQ6IFwibmV3LXBhZ2UtY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goUHJvZ3Jlc3NCYXIsIHsgd2lkdGg6IDEwMCB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld1wiIH0sIHsgY2hpbGRyZW46IGNvbnRlbnQgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZpbmFsU3RlcDtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHV0aWwsIHJlcXVlc3QsIGxvYWRpbmdNb2RhbCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xudmFyIEZpbmFsU3RlcFByaXZhdGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShwcm9wcy5jb21tZW50cyksIGNvbW1lbnRzID0gX2FbMF0sIHNldENvbW1lbnRzID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUocHJvcHMucmF0aW5nKSwgcmF0aW5nID0gX2JbMF0sIHNldFJhdGluZyA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKHByb3BzLmFub255bW91c2x5KSwgYW5vbnltb3VzbHkgPSBfY1swXSwgc2V0QW5vbnltb3VzbHkgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShwcm9wcy51cmwpLCB1cmwgPSBfZFswXSwgc2V0VXJsID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoXCJcIiksIHVybEVycm9yID0gX2VbMF0sIHNldFVybEVycm9yID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoZmFsc2UpLCBwdWJsaXNoQnRuTG9hZGluZyA9IF9mWzBdLCBzZXRQdWJsaXNoQnRuTG9hZGluZyA9IF9mWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZGluZ01vZGFsKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICAgdXBkYXRlUGFnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW3JhdGluZywgY29tbWVudHMsIGFub255bW91c2x5XSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIFVSTCB2YWxpZGF0aW9uIG9uIGNoYW5nZVxuICAgICAgICBpZiAodXJsKVxuICAgICAgICAgICAgY2hlY2tVcmxWYWxpZGF0aW9uKCk7XG4gICAgfSwgW3VybF0pO1xuICAgIC8vIFRvZ2dsZSBlYWNoIHN3aXRjaCBidXR0b25cbiAgICB2YXIgb25Td2l0Y2hDbGlja2VkID0gZnVuY3Rpb24gKHJvbGUpIHtcbiAgICAgICAgc3dpdGNoIChyb2xlKSB7XG4gICAgICAgICAgICBjYXNlIFwiY29tbWVudHNcIjpcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyghY29tbWVudHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJhdGluZ1wiOlxuICAgICAgICAgICAgICAgIHNldFJhdGluZyghcmF0aW5nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhbm9ueW1vdXNseVwiOlxuICAgICAgICAgICAgICAgIHNldEFub255bW91c2x5KCFhbm9ueW1vdXNseSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiBhIGNob3NlbiBVUkwgaXMgdmFsaWRcbiAgICB2YXIgY2hlY2tVcmxWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodXJsICYmIHVybC5sZW5ndGggPiAwICYmIHByb3BzLnVzZWRVcmxzLmluZGV4T2YodXJsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNldFVybEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcHMudXNlZFVybHMuaW5kZXhPZih1cmwpICE9PSAtMSkge1xuICAgICAgICAgICAgc2V0VXJsRXJyb3IoXCJZb3UgaGF2ZSBhbHJlYWR5IHVzZWQgXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIiB1cmwsIGNob29zZSBzb21ldGhpbmcgZWxzZS5cIikpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VXJsRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgVVJMIGZvciB5b3VyIHBhZ2UuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB0byB1cGRhdGUgdGhlIGRyYWZ0IHBhZ2VcbiAgICB2YXIgdXBkYXRlUGFnZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhZ2UsIGVfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpdmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50czogY29tbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nOiByYXRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzbHk6IGFub255bW91c2x5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LnBhdGNoKFwiL25ldy1wYWdlL2ZpbmFsLXN0ZXAvXCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25TdWJtaXRCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWNoZWNrVXJsVmFsaWRhdGlvbigpKVxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXJsXCIpLmZvY3VzKCk7XG4gICAgICAgIHNldFB1Ymxpc2hCdG5Mb2FkaW5nKHRydWUpO1xuICAgICAgICB1cGRhdGVQYWdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFnZUlkLCByZXNwb25zZSwgZXJyb3JfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJZCA9IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wb3N0KFwiL25ldy1wYWdlL1wiLmNvbmNhdChwYWdlSWQpLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvbWVzc2FnZT90eXBlPXByaXZhdGUmc3RhdHVzPXN1Y2Nlc3MmdXJsPVwiLmNvbmNhdChyZXNwb25zZS51cmwsIFwiJnVzZXJuYW1lPVwiKS5jb25jYXQocmVzcG9uc2UudXNlcm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yXzEubWVzc2FnZS5lcnJvciA9PT0gXCJlcnJvciB3aXRoIGNvbnRlbnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9tZXNzYWdlP3R5cGU9cHJpdmF0ZSZzdGF0dXM9ZXJyb3ItY29udGVudHMmaWQ9XCIuY29uY2F0KHBhZ2VJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvbWVzc2FnZT90eXBlPXByaXZhdGUmc3RhdHVzPWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFB1Ymxpc2hCdG5Mb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSk7XG4gICAgfTtcbiAgICB2YXIgb25CYWNrQnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlUGFnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2F0dGFjaC1maWxlcz9pZD1cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZikpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHQgYnV0dG9uLXRleHQtLWJpZyBhLTExXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25CYWNrQnV0dG9uQ2xpY2tlZCgpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWFycm93LWxlZnRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgQmFja1wiXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiQ29uZmlndXJhdGlvbnMgYW5kIFVSTFwiIH0pKSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3X19maW5hbC1zdGVwXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLWZpbmFsLXN0ZXBfX3N3aXRjaGVzXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLWZpbmFsLXN0ZXBfX3N3aXRjaFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgeyBjaGlsZHJlbjogXCJEaXNhYmxlIENvbW1lbnRzXCIgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXAgdG9vbHRpcC10b3AgdG9vbHRpcC0taW5mb1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwidG9vbHRpcF9faWNvblwiIH0sIHsgY2hpbGRyZW46IFwiP1wiIH0pKSwgX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwXCIgfSkpXSB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvblN3aXRjaENsaWNrZWQoXCJjb21tZW50c1wiKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogIWNvbW1lbnRzID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIiA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgdmFsdWU6IFwiZmFsc2VcIiB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIHsgY2hpbGRyZW46IFwiRGlzYWJsZSBSYXRpbmdcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcCB0b29sdGlwLS1pbmZvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBcIiB9KSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3dpdGNoQ2xpY2tlZChcInJhdGluZ1wiKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogIXJhdGluZyA/IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9uXCIgOiBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vZmZcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIHZhbHVlOiBcImZhbHNlXCIgfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtZmluYWwtc3RlcF9fc3dpdGNoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBUaGlzIFBhZ2UgQW5vbnltb3VzbHlcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcCB0b29sdGlwLS1pbmZvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBcIiB9KSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3dpdGNoQ2xpY2tlZChcImFub255bW91c2x5XCIpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBhbm9ueW1vdXNseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgdmFsdWU6IFwiZmFsc2VcIiB9KV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChJbnB1dCwgeyBpZDogXCJ1cmxcIiwgbGFiZWw6IFwiVVJMXCIsIHBsYWNlaG9sZGVyOiBcIkNob29zZSBhIFVSTCBmb3IgeW91ciBwYWdlLlwiLCB0eXBlOiBcInRleHRcIiwgZXJyb3I6IHVybEVycm9yLCB2YWx1ZTogdXJsLCBvbkJsdXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXJsVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcmwodXRpbC5jb252ZXJ0VG9VcmwodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInVybF9fZGlzcGxheVwiIH0sIHsgY2hpbGRyZW46IFtcInBhZ3Nlci5jb20vXCIsIHByb3BzLnVzZXJuYW1lLCBcIi9cIiwgdXJsXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInVybF9fbm90ZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiSW1wb3J0YW50IG5vdGUgYWJvdXQgVVJMOlwiIH0pLCBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiVGhpcyBVUkwgd2lsbCBiZSBmb3IgeW91ciBwYWdlLCBwbGVhc2UgY29weSB0aGlzIGJlY2F1c2UgdGhlIG9ubHkgd2F5IG90aGVyIHBlcnNvbnMgY2FuIHZpZXcgdGhpcyBwYWdlIGlzIHRvIGhhdmUgdGhpcyBVUkwuIFwiLCBfanN4KFwiYnJcIiwge30pLCBcIiBcIiwgXCJZb3Ugc2hvdWxkIHNoYXJlIHRoaXMgVVJMIGluIG9yZGVyIGZvciBvdGhlcnMgdG8gdmlldyBpdC5cIl0gfSldIH0pKV0gfSkpXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0QnV0dG9uQ2xpY2tlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBsb2FkaW5nOiBwdWJsaXNoQnRuTG9hZGluZywgY29sb3I6IFwiZ3JlZW5cIiB9LCB7IGNoaWxkcmVuOiBbXCJQdWJsaXNoXCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWdsb2JlIGJ1dHRvbl9faWNvbi1yaWdodFwiIH0pXSB9KSkgfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmluYWxTdGVwUHJpdmF0ZTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgdXRpbCwgcmVxdWVzdCwgbG9hZGluZ01vZGFsLCB0YWdzSW5wdXQgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbnZhciBGaW5hbFN0ZXBQdWJsaWMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShwcm9wcy5jb21tZW50cyksIGNvbW1lbnRzID0gX2FbMF0sIHNldENvbW1lbnRzID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUocHJvcHMucmF0aW5nKSwgcmF0aW5nID0gX2JbMF0sIHNldFJhdGluZyA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKHByb3BzLmxpbmtzKSwgbGlua3MgPSBfY1swXSwgc2V0TGlua3MgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShwcm9wcy5hbm9ueW1vdXNseSksIGFub255bW91c2x5ID0gX2RbMF0sIHNldEFub255bW91c2x5ID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUocHJvcHMudGFncyksIHRhZ3MgPSBfZVswXSwgc2V0VGFncyA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCB0YWdzRXJyb3IgPSBfZlswXSwgc2V0VGFnc0Vycm9yID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoZmFsc2UpLCBwdWJsaXNoQnRuTG9hZGluZyA9IF9nWzBdLCBzZXRQdWJsaXNoQnRuTG9hZGluZyA9IF9nWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVG8gZml4IHdpZHRoIGlzc3VlIGNsaWVudC1qcy9ub2RlX21vZHVsZXMvdGFncy1pbnB1dC90YWdzLWlucHV0LmpzIGFuZCBpbiBzZXRJbnB1dFdpZHRoXG4gICAgICAgIC8vIGZ1bmN0aW9uIGNoYW5nZSB0aGUgdmFsdWUgdG8gYSBoaWdoZXIgdmFsdWUgKDUgLT4gMTApXG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi50YWdzLWlucHV0XCIpKVxuICAgICAgICAgICAgdGFnc0lucHV0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0YWdzXCJdJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUYWdzKHRoaXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZGluZ01vZGFsKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICAgdXBkYXRlUGFnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW2NvbW1lbnRzLCByYXRpbmcsIGxpbmtzLCBhbm9ueW1vdXNseV0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgICAgICB1cGRhdGVQYWdlKCk7XG4gICAgICAgICAgICBjaGVja1RhZ3NWYWxpZGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9LCBbdGFnc10pO1xuICAgIHZhciB1cGRhdGVQYWdlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFnZSwgZV8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICBwYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwdWJsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM6IGNvbW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZzogcmF0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzOiBsaW5rcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNseTogYW5vbnltb3VzbHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogdGFncyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wYXRjaChcIi9uZXctcGFnZS9maW5hbC1zdGVwL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSksIHsgcGFnZTogcGFnZSB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICAvLyBDaGVjayBpZiB0aGUgdGFncyBhcmUgdmFsaWRcbiAgICB2YXIgY2hlY2tUYWdzVmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRhZ3Muc3BsaXQoXCIsXCIpLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHNldFRhZ3NFcnJvcihcIlBsZWFzZSBjaG9vc2UgYXQgbGVhc3QgNSB0YWdzLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFncy5yZXBsYWNlKC8sL2csIFwiXCIpLmxlbmd0aCA+PSAyMDApIHtcbiAgICAgICAgICAgIHNldFRhZ3NFcnJvcihcIlRhZ3MgbXVzdCBiZSBsZXNzIHRoYW4gMjAwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldFRhZ3NFcnJvcihcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvLyBUb2dnbGUgZWFjaCBzd2l0Y2ggYnV0dG9uXG4gICAgdmFyIG9uU3dpdGNoQ2xpY2tlZCA9IGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgIHN3aXRjaCAocm9sZSkge1xuICAgICAgICAgICAgY2FzZSBcImNvbW1lbnRzXCI6XG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMoIWNvbW1lbnRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyYXRpbmdcIjpcbiAgICAgICAgICAgICAgICBzZXRSYXRpbmcoIXJhdGluZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGlua3NcIjpcbiAgICAgICAgICAgICAgICBzZXRMaW5rcyghbGlua3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFub255bW91c2x5XCI6XG4gICAgICAgICAgICAgICAgc2V0QW5vbnltb3VzbHkoIWFub255bW91c2x5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uQmFja0J1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZVBhZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9hdHRhY2gtZmlsZXM/aWQ9XCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIG9uUHVibGlzaEJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghY2hlY2tUYWdzVmFsaWRhdGlvbigpKVxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFnc1wiKS5mb2N1cygpO1xuICAgICAgICBzZXRQdWJsaXNoQnRuTG9hZGluZyh0cnVlKTtcbiAgICAgICAgdXBkYXRlUGFnZShmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VJZCwgcmVzcG9uc2UsIGVycm9yXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSWQgPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucG9zdChcIi9uZXctcGFnZS9cIi5jb25jYXQocGFnZUlkKSwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL21lc3NhZ2U/dHlwZT1wdWJsaWMmc3RhdHVzPXN1Y2Nlc3MmdXJsPVwiLmNvbmNhdChyZXNwb25zZS51cmwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yXzEubWVzc2FnZS5lcnJvciA9PT0gXCJlcnJvciB3aXRoIGNvbnRlbnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9tZXNzYWdlP3R5cGU9cHVibGljJnN0YXR1cz1lcnJvci1jb250ZW50cyZpZD1cIi5jb25jYXQocGFnZUlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9tZXNzYWdlP3R5cGU9cHVibGljJnN0YXR1cz1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFB1Ymxpc2hCdG5Mb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0IGJ1dHRvbi10ZXh0LS1iaWcgYS0xMVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQmFja0J1dHRvbkNsaWNrZWQoKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1sZWZ0XCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSksIFwiIEJhY2tcIl0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkNvbmZpZ3VyYXRpb25zIGFuZCBUYWdzXCIgfSkpIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdfX2ZpbmFsLXN0ZXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtZmluYWwtc3RlcF9fc3dpdGNoZXNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtZmluYWwtc3RlcF9fc3dpdGNoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBcIkRpc2FibGUgQ29tbWVudHNcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcCB0b29sdGlwLS1pbmZvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBcIiB9KSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3dpdGNoQ2xpY2tlZChcImNvbW1lbnRzXCIpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiAhY29tbWVudHMgPyBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vblwiIDogXCJmYSBmYS0yeCBmYS10b2dnbGUtb2ZmXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCB2YWx1ZTogXCJmYWxzZVwiIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLWZpbmFsLXN0ZXBfX3N3aXRjaFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgeyBjaGlsZHJlbjogXCJEaXNhYmxlIFJhdGluZ1wiIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwIHRvb2x0aXAtdG9wIHRvb2x0aXAtLWluZm9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2ljb25cIiB9LCB7IGNoaWxkcmVuOiBcIj9cIiB9KSksIF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX3RleHRcIiB9LCB7IGNoaWxkcmVuOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcFwiIH0pKV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gb25Td2l0Y2hDbGlja2VkKFwicmF0aW5nXCIpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiAhcmF0aW5nID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIiA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgdmFsdWU6IFwiZmFsc2VcIiB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIHsgY2hpbGRyZW46IFwiRG8gTm90IERpc3BsYXkgUmVsYXRlZCBQYWdlcyBhbmQgVGFnc1wiIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwIHRvb2x0aXAtdG9wIHRvb2x0aXAtLWluZm9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2ljb25cIiB9LCB7IGNoaWxkcmVuOiBcIj9cIiB9KSksIF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX3RleHRcIiB9LCB7IGNoaWxkcmVuOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcFwiIH0pKV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gb25Td2l0Y2hDbGlja2VkKFwibGlua3NcIik7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6ICFsaW5rcyA/IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9uXCIgOiBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vZmZcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIHZhbHVlOiBcImZhbHNlXCIgfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtZmluYWwtc3RlcF9fc3dpdGNoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBUaGlzIFBhZ2UgQW5vbnltb3VzbHlcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcCB0b29sdGlwLS1pbmZvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBcIiB9KSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3dpdGNoQ2xpY2tlZChcImFub255bW91c2x5XCIpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBhbm9ueW1vdXNseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgdmFsdWU6IFwiZmFsc2VcIiB9KV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiLCBodG1sRm9yOiBcInRhZ3NcIiB9LCB7IGNoaWxkcmVuOiBcIlRhZ3NcIiB9KSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGFnc1wiLCBjbGFzc05hbWU6IFwidGFncy1pbnB1dFwiLCBpZDogXCJ0YWdzXCIsIGRlZmF1bHRWYWx1ZTogdGFncyB9KSwgdGFnc0Vycm9yICYmIChfanN4cyhcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5wdXQtZXJyb3JcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIgfSksIHRhZ3NFcnJvcl0gfSkpKV0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1hcmdpbi10b3AtMVwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzbWFsbC1wYXJhZ3JhcGhcIiB9LCB7IGNoaWxkcmVuOiBbXCJQbGVhc2UgcmVhZFwiLCBcIiBcIiwgX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIiNcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBcInRoaXNcIiB9KSksIFwiIFwiLCBcInF1aWNrIGd1aWRlIGJlZm9yZSB5b3UgY2hhbmdlIGFueSBvZiB0aGUgY29uZmlndXJhdGlvbnMgYW5kIGNob29zZSBhbnkgdGFncy5cIl0gfSkpIH0pKV0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LWNlbnRlclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblB1Ymxpc2hCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGxvYWRpbmc6IHB1Ymxpc2hCdG5Mb2FkaW5nLCBjb2xvcjogXCJncmVlblwiIH0sIHsgY2hpbGRyZW46IFtcIlB1Ymxpc2hcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZ2xvYmUgYnV0dG9uX19pY29uLXJpZ2h0XCIgfSldIH0pKSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaW5hbFN0ZXBQdWJsaWM7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1dGlsLCByZXF1ZXN0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBMb2FkaW5nLCBCdXR0b24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG52YXIgSW5pdGlhbFN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUodW5kZWZpbmVkKSwgdHlwZSA9IF9hWzBdLCBzZXRUeXBlID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX2JbMF0sIHNldExvYWRpbmcgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShmYWxzZSksIG5leHRCdXR0b25Mb2FkaW5nID0gX2NbMF0sIHNldE5leHRCdXR0b25Mb2FkaW5nID0gX2NbMV07XG4gICAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlSWQsIHJlc3BvbnNlLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUlkID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2VJZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmdldChcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXAvXCIuY29uY2F0KHBhZ2VJZCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUeXBlKHJlc3BvbnNlLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVfMSA9PT0gbnVsbCB8fCBlXzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVfMS5zdGF0dXMpID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luP3JlZGlyZWN0ZWQ9bmV3LXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pKCk7XG4gICAgfSwgW10pO1xuICAgIHZhciBvblJhZGlvQ2hhbmdlID0gZnVuY3Rpb24gKHNlbGVjdGVkVHlwZSkge1xuICAgICAgICBzZXRUeXBlKHNlbGVjdGVkVHlwZSk7XG4gICAgfTtcbiAgICB2YXIgb25OZXh0QnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYWdlSWQsIHJlc3BvbnNlLCBlXzI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRCdXR0b25Mb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBwYWdlSWQgPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA2LCAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFnZUlkKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wYXRjaChcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXAvXCIuY29uY2F0KHBhZ2VJZCksIHsgcGFnZTogeyB0eXBlOiB0eXBlIH0gfSwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wb3N0KFwiL25ldy1wYWdlXCIsIHsgcGFnZTogeyB0eXBlOiB0eXBlIH0gfSwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL3BhZ2UtY29udGVudHM/aWQ9XCIuY29uY2F0KHJlc3BvbnNlLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRCdXR0b25Mb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgcmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvYWRpbmcpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkNob29zZSBZb3VyIFBhZ2UgVHlwZVwiIH0pKSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3X190eXBlc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRyb2wgY29udHJvbC0tcmFkaW9cIiB9LCB7IGNoaWxkcmVuOiBbXCJQdWJsaWNcIiwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJyYWRpb1wiLCB2YWx1ZTogXCJwdWJsaWNcIiwgbmFtZTogXCJyYWRpb1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYWRpb0NoYW5nZShcInB1YmxpY1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRlZmF1bHRDaGVja2VkOiB0eXBlID09PSBcInB1YmxpY1wiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRyb2xfX2luZGljYXRvclwiIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdfX3R5cGVzX19kZXRhaWxzXCIgfSwgeyBjaGlsZHJlbjogXCJDaG9vc2UgdGhpcyBvbmUgaWYgeW91IHdhbnQgeW91ciBwYWdlIHRvIGJlIHZpc2libGUgdG8gZXZlcnlvbmUsIHlvdXIgcGFnZSBjYW4gYmUgZm91bmRlZCBieSBzZWFyY2ggZW5naW5lcyBpZiB5b3Ugc3VwcGx5IGl0IHdpdGggZ29vZCBjb250ZW50LiBQdWJsaWMgcGFnZXMgd2lsbCBiZSBzaG93biBpbiB5b3VyIHB1YmxpYyBwcm9maWxlIHVubGVzcyB5b3UgY3JlYXRlIGl0IGFub255bW91c2x5LlwiIH0pKSwgX2pzeHMoXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250cm9sIGNvbnRyb2wtLXJhZGlvIGZvbnQtd2VpZ2h0LTQwMFwiIH0sIHsgY2hpbGRyZW46IFtcIlByaXZhdGVcIiwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJyYWRpb1wiLCB2YWx1ZTogXCJwcml2YXRlXCIsIG5hbWU6IFwicmFkaW9cIiwgZGVmYXVsdENoZWNrZWQ6IHR5cGUgPT09IFwicHJpdmF0ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYWRpb0NoYW5nZShcInByaXZhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRyb2xfX2luZGljYXRvclwiIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3X190eXBlc19fZGV0YWlsc1wiIH0sIHsgY2hpbGRyZW46IFtcIkNob29zZSB0aGlzIGlmIHlvdSB3YW50IHlvdXIgcGFnZSB0byBiZSB2aXNpYmxlIGJ5IG9ubHkgYSBzcGVjaWZpYyBraW5kIG9mIHBlcnNvbnMsIHN1Y2ggYXMgeW91ciBmcmllbmRzLCB3b3JrbWF0ZXMsIHN0dWRlbnRzICxldGMuIFlvdSBjYW4gcmVzdHJpY3QgdG8gb25seSBjZXJ0YWluIHBlb3BsZSB0byBiZSBhYmxlIHRvIHZpZXcgaXQuIFlvdXIgcHJpdmF0ZSBwYWdlcyB3aWxsIG5vdCBiZWVuIHNob3duIG9uIHlvdXIgcHVibGljIHByb2ZpbGUuXCIsIFwiIFwiLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiVGhlIG9ubHkgd2F5IGZvciBvdGhlcnMgdG8gZmluZCB0aGUgcGFnZSBpcyBieSB0aGUgVVJMIHRoYXQgeW91IHdpbGwgZ2l2ZSB0aGVtLlwiIH0pXSB9KSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV4dEJ1dHRvbkNsaWNrZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNvbG9yOiBcImJsdWVcIiwgZGlzYWJsZWQ6ICF0eXBlLCBsb2FkaW5nOiBuZXh0QnV0dG9uTG9hZGluZyB9LCB7IGNoaWxkcmVuOiBbXCJOZXh0XCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWFycm93LWNpcmNsZS1yaWdodCBidXR0b25fX2ljb24tcmlnaHRcIiB9KV0gfSkpIH0pKV0gfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChQcm9ncmVzc0JhciwgeyB3aWR0aDogMjAgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb250ZW50KCkgfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW5pdGlhbFN0ZXA7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHV0aWwgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbnZhciBNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXMgPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcInN0YXR1c1wiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgdmFyIHR5cGUgPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcInR5cGVcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHZhciB1cmwgPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcInVybFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgdmFyIGlkID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgdmFyIHVzZXJuYW1lID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJ1c2VybmFtZVwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHR5cGUgPT09IFwicHVibGljXCIgJiYgc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtaWRkbGUtYm94IG1pZGRsZS1ib3gtLXN1Y2Nlc3MgbWFyZ2luLWJvdHRvbS0xXCIgfSwgeyBjaGlsZHJlbjogW1wiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZCB5b3VyIHB1YmxpYyBwYWdlLCB5b3UgY2FuIHZpZXcgdGhhdCBmcm9tIHRoZSBsaW5rIGJlbG93LiBPdGhlciB1c2VycyBjYW4gbGlrZSwgZGlzbGlrZSBvciBjb21tZW50IG9uIHlvdXIgcGFnZSBpZiB5b3UgaGF2ZW4ndCBkaXNhYmxlZCB0aGVtIGFuZCB3ZSB3aWxsIHNlbmQgeW91IG5vdGlmaWNhdGlvbnMgYWJvdXQgdGhlbS4gWW91IGNhbiB2aWV3IGFsbCB0aGUgcHVibGljIGFuZCBwcml2YXRlIHBhZ2VzIHlvdSd2ZSBjcmVhdGVkIGluXCIsIFwiIFwiLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIndoaXRlLWxpbmtcIiwgaHJlZjogXCIvdS9wYWdlc1wiIH0sIHsgY2hpbGRyZW46IFwicGFnZXMgc2VjdGlvbi5cIiB9KSkgfSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtaWRkbGUtYm94LS1saW5rXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYmx1ZS1saW5rXCIsIGhyZWY6IFwiL3B1YmxpYy1wYWdlcy9cIi5jb25jYXQodXJsKSB9LCB7IGNoaWxkcmVuOiBcIlZpZXcgeW91ciBwdWJsaWMgcGFnZVwiIH0pKSB9KSldIH0pKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IFwicHJpdmF0ZVwiICYmIHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWlkZGxlLWJveCBtaWRkbGUtYm94LS1zdWNjZXNzIG1hcmdpbi1ib3R0b20tMVwiIH0sIHsgY2hpbGRyZW46IFtcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIHlvdXIgcHJpdmF0ZSBwYWdlLCB5b3UgY2FuIHZpZXcgdGhhdCBmcm9tIHRoZSBsaW5rIGJlbG93LiBUbyBzaGFyZSB0aGlzIHBhZ2Ugd2l0aCB0aGUgcGVyc29ucyB5b3Ugd2FudCwgeW91IHNob3VsZCBzaGFyZSB0aGUgbGluayBvZiB5b3VyIHBhZ2Ugd2l0aCB0aGVtIChsaW5rIGJlbG93KS4gWW91IGNhbiB2aWV3IGFsbCB0aGUgcHVibGljIGFuZCBwcml2YXRlIHBhZ2VzIHlvdSd2ZSBjcmVhdGVkIGluXCIsIFwiIFwiLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIndoaXRlLWxpbmtcIiwgaHJlZjogXCIvdS9wYWdlc1wiIH0sIHsgY2hpbGRyZW46IFwicGFnZXMgc2VjdGlvbi5cIiB9KSkgfSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtaWRkbGUtYm94LS1saW5rXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYmx1ZS1saW5rXCIsIGhyZWY6IFwiL1wiLmNvbmNhdCh1c2VybmFtZSwgXCIvXCIpLmNvbmNhdCh1cmwpIH0sIHsgY2hpbGRyZW46IFwiVmlldyB5b3VyIHByaXZhdGUgcGFnZVwiIH0pKSB9KSldIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJlcnJvci1jb250ZW50c1wiKSB7XG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWlkZGxlLWJveCBtaWRkbGUtYm94LS1lcnJvciBtYXJnaW4tYm90dG9tLTFcIiB9LCB7IGNoaWxkcmVuOiBcIlRoZXJlIHdhcyBzb21ldGhpbmcgd3Jvbmcgd2l0aCB0aGUgY29udGVudHMgeW91J3ZlIHByb3ZpZGVkLCBwbGVhc2UgcmV2aWV3IHlvdXIgcGFnZSBjb250ZW50cyBhbmQgbWFrZSBzdXJlIHRoYXQgZXZlcnl0aGluZyBpcyBPSy5cIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWlkZGxlLWJveC0tbGlua1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJsdWUtbGlua1wiLCBocmVmOiBcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXA/aWQ9XCIuY29uY2F0KGlkKSB9LCB7IGNoaWxkcmVuOiBcIlJldmlldyB5b3VyIHBhZ2VcIiB9KSkgfSkpXSB9KSk7XG4gICAgfVxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWlkZGxlLWJveCBtaWRkbGUtYm94LS1lcnJvciBtYXJnaW4tYm90dG9tLTFcIiB9LCB7IGNoaWxkcmVuOiBcIlNvcnJ5IHNvbWV0aGluZyB3ZW50IHdyb25nIGJlY2F1c2Ugb2YgdXMhIFdlIHdpbGwgcmV2aWV3IHdoYXQgaGFwcGVuZWQgYXMgc29vbiBhcyBwb3NzaWJsZSBhbmQgbGV0IHlvdSBrbm93IHdoYXQgd2FzIHRoZSBpc3N1ZS4gSW4gdGhlIG1lYW53aGlsZSBwbGVhc2UgY3JlYXRlIHlvdXIgcGFnZSBhZ2FpbiBmcm9tIHNjcmF0Y2ggb3IgdmlldyB5b3VyIGRyYWZ0IHBhZ2VzIHZpYSB0aGUgbGlua3MgYmVsb3cuIFdlIGFwb2xvZ2l6ZSBmb3IgdGhlIGluY29udmVuaWVuY2UuXCIgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtaWRkbGUtYm94LS1saW5rXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJsdWUtbGlua1wiLCBocmVmOiBcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIiB9LCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBhIG5ldyBwYWdlXCIgfSkpLCBfanN4KFwiYnJcIiwge30pLCBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJibHVlLWxpbmtcIiwgaHJlZjogXCIvdS9wYWdlcy9kcmFmdFwiIH0sIHsgY2hpbGRyZW46IFwiVmlldyB5b3VyIGRyYWZ0IHBhZ2VzXCIgfSkpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUaW55TUNFIGZyb20gXCJyZWFjdC10aW55bWNlXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZSwgdXRpbCwgcmVxdWVzdCwgbG9hZGluZ01vZGFsLCBhbGVydCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgTG9hZGluZywgQnV0dG9uLCBJbnB1dCwgVGV4dGFyZWEgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG52YXIgUGFnZUNvbnRlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKG51bGwpLCB0eXBlID0gX2FbMF0sIHNldFR5cGUgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgdGl0bGUgPSBfYlswXSwgc2V0VGl0bGUgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShcIlwiKSwgdGl0bGVFcnJvciA9IF9jWzBdLCBzZXRUaXRsZUVycm9yID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoXCJcIiksIGJyaWVmRGVzID0gX2RbMF0sIHNldEJyaWVmRGVzID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoXCJcIiksIGJyaWVmRGVzRXJyb3IgPSBfZVswXSwgc2V0QnJpZWZEZXNFcnJvciA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCB0YXJnZXRzID0gX2ZbMF0sIHNldFRhcmdldHMgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShcIlwiKSwgdGFyZ2V0c0Vycm9yID0gX2dbMF0sIHNldFRhcmdldHNFcnJvciA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKFwiXCIpLCBib2R5ID0gX2hbMF0sIHNldEJvZHkgPSBfaFsxXTtcbiAgICB2YXIgX2ogPSB1c2VTdGF0ZShcIlwiKSwgYm9keUVycm9yID0gX2pbMF0sIHNldEJvZHlFcnJvciA9IF9qWzFdO1xuICAgIHZhciBfayA9IHVzZVN0YXRlKG51bGwpLCBzYXZlZCA9IF9rWzBdLCBzZXRTYXZlZCA9IF9rWzFdO1xuICAgIHZhciBfbCA9IHVzZVN0YXRlKGZhbHNlKSwgbmV4dEJ1dHRvbkxvYWRpbmcgPSBfbFswXSwgc2V0TmV4dEJ1dHRvbkxvYWRpbmcgPSBfbFsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VJZCwgcmVzcG9uc2UsIGVfMTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJZCA9IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5nZXQoXCIvbmV3LXBhZ2UvcGFnZS1jb250ZW50cy9cIi5jb25jYXQocGFnZUlkKSwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJvZHkocmVzcG9uc2UucGFnZS5ib2R5IHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZShyZXNwb25zZS5wYWdlLnR5cGUgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShyZXNwb25zZS5wYWdlLnRpdGxlIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0cyhyZXNwb25zZS5wYWdlLnRhcmdldHMgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCcmllZkRlcyhyZXNwb25zZS5wYWdlLmJyaWVmX2Rlc2NyaXB0aW9uIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlXzEuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luP3JlZGlyZWN0ZWQ9bmV3LXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2luaXRpYWwtc3RlcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pKCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFNlbmQgYSByZXF1ZXN0IHRvIHNlcnZlciBhdXRvbWF0aWNhbGx5IHRvIHNhdmUgdGhlIGNoYW5nZXMsIHdlIHdvbid0IHNlbmQgYSByZXF1ZXN0XG4gICAgICAgIC8vIGlmIHRoZSBjaGFuZ2VzIGFyZSBhbHJlYWR5IHNhdmVkXG4gICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc2F2ZWQpXG4gICAgICAgICAgICAgICAgdXBkYXRlUGFnZSgpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyB9O1xuICAgIH0sIFt0aXRsZSwgYm9keSwgYnJpZWZEZXMsIHRhcmdldHNdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja1BhZ2VCb2R5VmFsaWRhdGlvbigpO1xuICAgIH0sIFtib2R5XSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tUYXJnZXRzVmFsaWRhdGlvbigpO1xuICAgIH0sIFt0YXJnZXRzXSk7XG4gICAgdmFyIGhhbmRsZXJCZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBcIlVuc2F2ZWQgY2hhbmdlcywgYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsb3NlP1wiO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2F2ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBoYW5kbGVyQmVmb3JldW5sb2FkLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtzYXZlZF0pO1xuICAgIC8vIFRoaXMgd2lsbCBzZW5kIHRoZSBjdXJyZW50IHBhZ2UgZGF0YSB0byBzZXJ2ZXIgZm9yIHNhdmluZy5cbiAgICAvLyBUaGlzIHdpbGwgcnVuIHdoZW4gdXNlciB3YW50cyB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgc3RhZ2VcbiAgICAvLyBlaXRoZXIgYnkgZ29pbmcgdG8gdGhlIG5leHQgb3IgcHJldmlvdXMgc3RhZ2VcbiAgICB2YXIgdXBkYXRlUGFnZSA9IGZ1bmN0aW9uICh0bywgc3VjY2Vzc01lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0byAmJiAhKHRvID09PSBudWxsIHx8IHRvID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0by5pbmNsdWRlcyhcInBhZ2UtdGh1bWJuYWlsXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0byAmJiB0by5pbmNsdWRlcyhcInBhZ2UtdGh1bWJuYWlsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0QnV0dG9uTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LnBhdGNoKFwiL25ldy1wYWdlL3BhZ2UtY29udGVudHMvXCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWVmRGVzOiBicmllZkRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiB0YXJnZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7IGF1dGg6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTYXZlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQFRvZG86IGRvZXNuJ3Qgd29yayFcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgaGFuZGxlckJlZm9yZXVubG9hZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHN1Y2Nlc3NNZXNzYWdlLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0QnV0dG9uTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSh0byk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0QnV0dG9uTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciBvbkJhY2tCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVQYWdlKFwiL25ldy1wYWdlL2luaXRpYWwtc3RlcD9pZD1cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZikpKTtcbiAgICB9O1xuICAgIHZhciBvbk5leHRCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgaWYgKGNoZWNrSWZBbGxPaygpKSB7XG4gICAgICAgICAgICB1cGRhdGVQYWdlKFwiL25ldy1wYWdlL3BhZ2UtdGh1bWJuYWlsP2lkPVwiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFjaGVja1RpdGxlVmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgICAgICAgICAgICAgIHRpdGxlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNoZWNrQnJpZWZEZXNWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnJpZWZEZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnJpZWZEZXNcIik7XG4gICAgICAgICAgICAgICAgYnJpZWZEZXNFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2hlY2tUYXJnZXRzVmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFyZ2V0c1wiKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRzRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNoZWNrUGFnZUJvZHlWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldHNJbnB1dFwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgKF9jID0gKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNvbnRlbnRXaW5kb3cpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5kb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIENoZWNrIGlmIHRoZSB0aXRsZSBwcm92aWRlZCBieSB1c2VyIGlzIHZhbGlkIG9yIG5vdC5cbiAgICAvLyBUaGlzIHdpbGwgcnVuIGJ5IG9uYmx1ciBhbmQgb25jaGFuZ2UgZXZlbnQgb24gdGl0bGUgaW5wdXRcbiAgICB2YXIgY2hlY2tUaXRsZVZhbGlkYXRpb24gPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICB2YXIgbWluTGVuID0gdHlwZSA9PT0gXCJwdWJsaWNcIiA/IDE1IDogMTtcbiAgICAgICAgdmFyIHZhbCA9IHRleHQgPyB0ZXh0IDogdGl0bGU7XG4gICAgICAgIGlmICh2YWwubGVuZ3RoIDwgbWluTGVuKSB7XG4gICAgICAgICAgICBzZXRUaXRsZUVycm9yKHR5cGUgPT09IFwicHVibGljXCJcbiAgICAgICAgICAgICAgICA/IFwiVGl0bGUgc2hvdWxkIGJlIG1vcmUgdGhhbiBcIi5jb25jYXQobWluTGVuLCBcIiBjaGFyYWN0ZXJzLlwiKVxuICAgICAgICAgICAgICAgIDogXCJUaXRsZSBjYW5ub3QgYmUgYmUgYmxhbmsuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIHNldFRpdGxlRXJyb3IoXCJUaXRsZSBzaG91bGQgYmUgbGVzcyB0aGFuIDUwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpdGxlRXJyb3IoXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGJyaWVmIGRlc2NyaXB0aW9uIHByb3ZpZGVkIGJ5IHVzZXIgaXMgdmFsaWQgb3Igbm90LlxuICAgIC8vIFRoaXMgd2lsbCBydW4gYnkgb25ibHVyIGFuZCBvbmNoYW5nZSBldmVudCBvbiBicmllZkRlcyBpbnB1dFxuICAgIHZhciBjaGVja0JyaWVmRGVzVmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1pbkxlbiA9IHR5cGUgPT09IFwicHVibGljXCIgPyAzMCA6IDA7XG4gICAgICAgIGlmIChicmllZkRlcy5sZW5ndGggPCBtaW5MZW4pIHtcbiAgICAgICAgICAgIHNldEJyaWVmRGVzRXJyb3IodHlwZSA9PT0gXCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgID8gXCJCcmllZiBkZXNjcmlwdGlvbiBzaG91bGQgYmUgbW9yZSB0aGFuIFwiLmNvbmNhdChtaW5MZW4sIFwiIGNoYXJhY3RlcnMuXCIpXG4gICAgICAgICAgICAgICAgOiBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJpZWZEZXMubGVuZ3RoID4gMzAwKSB7XG4gICAgICAgICAgICBzZXRCcmllZkRlc0Vycm9yKFwiQnJpZWYgZGVzY3JpcHRpb24gc2hvdWxkIGJlIGxlc3MgdGhhbiAzMDAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0QnJpZWZEZXNFcnJvcihcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvLyBDaGVjayBpZiB0aGUgdGFyZ2V0cyBwcm92aWRlZCBieSB1c2VyIGlzIHZhbGlkIG9yIG5vdC5cbiAgICAvLyBUaGlzIHdpbGwgcnVuIGJ5IG9uYmx1ciBhbmQgb25jaGFuZ2UgZXZlbnQgb24gdGFyZ2V0cyBpbnB1dFxuICAgIHZhciBjaGVja1RhcmdldHNWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWluTGVuID0gdHlwZSA9PT0gXCJwdWJsaWNcIiA/IDIwIDogMDtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoIDwgbWluTGVuKSB7XG4gICAgICAgICAgICBzZXRUYXJnZXRzRXJyb3IoXCJUYXJnZXRzIGRlc2NyaXB0aW9uIHNob3VsZCBiZSBtb3JlIHRoYW4gXCIuY29uY2F0KG1pbkxlbiwgXCIgY2hhcmFjdGVycy5cIikpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDMwMCkge1xuICAgICAgICAgICAgc2V0VGFyZ2V0c0Vycm9yKFwiVGFyZ2V0cyBkZXNjcmlwdGlvbiBzaG91bGQgYmUgbGVzcyB0aGFuIDMwMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUYXJnZXRzRXJyb3IoXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLy8gQ2hlY2sgaWYgdGhlIFBhZ2UgQm9keSBwcm92aWRlZCBieSB1c2VyIGlzIHZhbGlkIG9yIG5vdC5cbiAgICAvLyBUaGlzIHdpbGwgcnVuIGJ5IG9uY2hhbmdlIGV2ZW50IG9uIFRpbnlNQ0UgaW5wdXRcbiAgICB2YXIgY2hlY2tQYWdlQm9keVZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgaHRtbCBhbmQgZXh0cmEgc3BhY2VzIGFuZCB0aGVuIGNoZWNrXG4gICAgICAgIHZhciBodG1sID0gYm9keTtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB2YXIgYm9keVRleHQgPSBkaXYudGV4dENvbnRlbnQgfHwgZGl2LmlubmVyVGV4dCB8fCBcIlwiO1xuICAgICAgICBib2R5VGV4dCA9IGJvZHlUZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICAgICAgdmFyIG1pbkxlbiA9IHR5cGUgPT09IFwicHVibGljXCIgPyA1MCA6IDE7XG4gICAgICAgIHZhciB0aW55bWNlRUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1jZS10aW55bWNlXCIpO1xuICAgICAgICBpZiAoYm9keVRleHQubGVuZ3RoIDwgbWluTGVuICYmIHRpbnltY2VFTCkge1xuICAgICAgICAgICAgdGlueW1jZUVMLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlNzRjM2NcIjtcbiAgICAgICAgICAgIHNldEJvZHlFcnJvcih0eXBlID09PSBcInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgPyBcIkJvZHkgc2hvdWxkIGJlIG1vcmUgdGhhbiBcIi5jb25jYXQobWluTGVuLCBcIiBjaGFyYWN0ZXJzLlwiKVxuICAgICAgICAgICAgICAgIDogXCJCb2R5IGNhbm5vdCBiZSBibGFuay5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlUZXh0Lmxlbmd0aCA+IDIwMDAwICYmIHRpbnltY2VFTCkge1xuICAgICAgICAgICAgdGlueW1jZUVMLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlNzRjM2NcIjtcbiAgICAgICAgICAgIHNldEJvZHlFcnJvcihcIkJvZHkgc2hvdWxkIGJlIGxlc3MgdGhhbiAyMDAwMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGlueW1jZUVMKSB7XG4gICAgICAgICAgICB0aW55bWNlRUwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0NBQ0FDQVwiO1xuICAgICAgICAgICAgc2V0Qm9keUVycm9yKFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy8gUmV0dXJuIHRydWUgb3IgZmFsc2UgdG8gaW5kaWNhdGUgaWYgYWxsIHRoZSBpbnB1dHMgYXJlIHZhbGlkIG9yIG5vdFxuICAgIHZhciBjaGVja0lmQWxsT2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEZvciBwYWdlIGJvZHksIHJlbW92ZSBhbGwgaHRtbCBhbmQgZXh0cmEgc3BhY2VzIGFuZCB0aGVuIGNoZWNrXG4gICAgICAgIHZhciBodG1sID0gYm9keTtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB2YXIgYm9keVRleHQgPSBkaXYudGV4dENvbnRlbnQgfHwgZGl2LmlubmVyVGV4dCB8fCBcIlwiO1xuICAgICAgICBib2R5VGV4dCA9IGJvZHlUZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5sZW4odGl0bGUsIDE1LCA1MCkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5sZW4oYnJpZWZEZXMsIDMwLCAzMDApICYmXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUubGVuKHRhcmdldHMsIDIwLCAzMDApICYmXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUubGVuKGJvZHlUZXh0LCA1MCwgMjAwMDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IFwicHJpdmF0ZVwiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUubGVuKHRpdGxlLCAxLCA1MCkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5sZW4oYnJpZWZEZXMsIDAsIDMwMCkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5sZW4odGFyZ2V0cywgMCwgMzAwKSAmJlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmxlbihib2R5VGV4dCwgMSwgMjAwMDAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXF1aXJlZExhYmVsO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgIHJlcXVpcmVkTGFiZWwgPSBcIiAqXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJvZHlDbGFzc05hbWUgPSBcImZvcm1fX2dyb3VwXCI7XG4gICAgICAgIGJvZHlDbGFzc05hbWUgKz0gYm9keUVycm9yICYmIFwiIGZvcm1fX2dyb3VwLS1lcnJvclwiO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHQgYnV0dG9uLXRleHQtLWJpZyBhLTExXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJhY2tCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1sZWZ0XCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSksIFwiIEJhY2tcIl0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkZpbGwgT3V0IFlvdXIgUGFnZSBDb250ZW50XCIgfSkpIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdfX2NvbnRlbnRzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgbGFiZWw6IHR5cGUgPT09IFwicHJpdmF0ZVwiID8gXCJUaXRsZSAqXCIgOiBcIlRpdGxlXCIsIGlkOiBcInRpdGxlXCIsIHZhbHVlOiB0aXRsZSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tUaXRsZVZhbGlkYXRpb24odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwbGFjZWhvbGRlcjogXCJDaG9vc2UgYSB0aXRsZSBmb3IgeW91ciBwYWdlLlwiLCBtYXhMZW5ndGg6IDUwLCBoZWxwOiBcInRoaXMgaXMgc29tZSB0ZXh0IHRvIGhlbHAgeW91IHVuZGVyc3RhbmQgdGhlIGlucHV0IGJldHRlci5cIiwgZXJyb3I6IHRpdGxlRXJyb3IsIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tUaXRsZVZhbGlkYXRpb24odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goVGV4dGFyZWEsIHsgbGFiZWw6IFwiQnJpZWYgRGVzY3JpcHRpb25cIiwgaWQ6IFwiYnJpZWZEZXNcIiwgdmFsdWU6IGJyaWVmRGVzLCByb3dzOiAzLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JyaWVmRGVzVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyaWVmRGVzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwbGFjZWhvbGRlcjogXCJEZXNjcmliZSBicmllZmx5IHdoYXQgeW91ciBwYWdlIGlzIGFsbCBhYm91dC5cIiwgaGVscDogXCJ0aGlzIGlzIHNvbWUgdGV4dCB0byBoZWxwIHlvdSB1bmRlcnN0YW5kIHRoZSBpbnB1dCBiZXR0ZXIuXCIsIG1heExlbmd0aDogMzAwLCBlcnJvcjogYnJpZWZEZXNFcnJvciwgb25CbHVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCcmllZkRlc1ZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRleHRhcmVhLCB7IGxhYmVsOiBcIlRhcmdldHNcIiwgdmFsdWU6IHRhcmdldHMsIGlkOiBcInRhcmdldHNcIiwgcm93czogMywgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tUYXJnZXRzVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhcmdldHModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBsYWNlaG9sZGVyOiBcIkRlc2NyaWJlIGJyaWVmbHkgd2hvIHRoaXMgcGFnZSBpcyBmb3IuXCIsIGhlbHA6IFwidGhpcyBpcyBzb21lIHRleHQgdG8gaGVscCB5b3UgdW5kZXJzdGFuZCB0aGUgaW5wdXQgYmV0dGVyLlwiLCBtYXhMZW5ndGg6IDMwMCwgZXJyb3I6IHRhcmdldHNFcnJvciwgb25CbHVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tUYXJnZXRzVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSksIF9qc3goXCJoclwiLCB7IGNsYXNzTmFtZTogXCJociB1LW1hcmdpbi10b3AtNVwiIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogYm9keUNsYXNzTmFtZSwgaWQ6IFwiYm9keVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImxhYmVsXCIsIF9fYXNzaWduKHsgaHRtbEZvcjogXCJib2R5SW5wdXRcIiwgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsXCIgfSwgeyBjaGlsZHJlbjogW1wiUGFnZSBCb2R5XCIsIHJlcXVpcmVkTGFiZWxdIH0pKSwgX2pzeChUaW55TUNFLCB7IGNvbnRlbnQ6IGJvZHksIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2luX3VybDogXCIvdGlueW1jZS1za2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFwicHJldmlldyBsaW5rIGxpc3RzIGFkdmxpc3QgY29kZXNhbXBsZSBpbWFnZSBpbWFnZXRvb2xzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IFwiZm9ybWF0c2VsZWN0IHwgYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHwgbGluayBjb2Rlc2FtcGxlIGltYWdlIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBidWxsaXN0IG51bWxpc3QgfCBvdXRkZW50IGluZGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19mb3JtYXRzOiBcIlBhcmFncmFwaD1wOyBIZWFkZXI9aDI7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9kaW1lbnNpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2V0b29sc190b29sYmFyOiBcInJvdGF0ZWxlZnQgcm90YXRlcmlnaHQgfCBmbGlwdiBmbGlwaCB8IGltYWdlb3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwiZGFya1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuY29udGVudERvY3VtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzU1NVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmNvbnRlbnREb2N1bWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zdHlsZS5jb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjZmZmXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Qm9keShlLnRhcmdldC5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBmdW5jdGlvbiAoZSkgeyB9IH0sIHR5cGUpLCBfanN4cyhcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5wdXQtZXJyb3JcIiB9LCB7IGNoaWxkcmVuOiBbYm9keUVycm9yICYmIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiIH0pLCBib2R5RXJyb3JdIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbc2F2ZWQgPT09IGZhbHNlICYmIChfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0ZXh0LW9yYW5nZVwiIH0sIHsgY2hpbGRyZW46IFwiU2F2aW5nIGNoYW5nZXMuLi5cIiB9KSkpLCBzYXZlZCA9PT0gdHJ1ZSAmJiAoX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidGV4dC1ncmVlblwiIH0sIHsgY2hpbGRyZW46IFwiQ2hhbmdlcyBzYXZlZCB0byB0aGUgY2xvdWQhXCIgfSkpKV0gfSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNtYWxsLXBhcmFncmFwaFwiIH0sIHsgY2hpbGRyZW46IFtcIlNlZSBtb3JlIGluZm9ybWF0aW9uIG9uIHdoYXQgdG8gcHJvdmlkZSBpbiBlYWNoIGlucHV0XCIsIFwiIFwiLCBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiI1wiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzTmFtZTogXCJidXR0b24tdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwiaGVyZS5cIiB9KSldIH0pKSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV4dEJ1dHRvbkNsaWNrZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxvYWRpbmc6IG5leHRCdXR0b25Mb2FkaW5nLCBjb2xvcjogXCJibHVlXCIsIGRpc2FibGVkOiAhdHlwZSB9LCB7IGNoaWxkcmVuOiBbXCJOZXh0XCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWFycm93LWNpcmNsZS1yaWdodCBidXR0b25fX2ljb24tcmlnaHRcIiB9KV0gfSkpIH0pKV0gfSkpXSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChQcm9ncmVzc0JhciwgeyB3aWR0aDogNDAgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3X19ub3RlLWJveFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgeyBjaGlsZHJlbjogXCJBIG5vdGUgYWJvdXQgc2F2aW5nOlwiIH0pLCBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiV2UgXCIsIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJhdXRvbWF0aWNhbGx5IHNhdmVcIiB9KSwgXCIgd2hhdCB5b3Ugd3JpdGUgYW5kIGFsbCB0aGUgb3RoZXIgY2hhbmdlcyB5b3UgZG8sIHlvdXIgcGFnZSBpcyBzYXZlZCBhcyBhIGRyYWZ0IHVudGlsIHlvdSBkZWNpZGUgdG8gcHVibGlzaCBpdCwgd2hpY2ggeW91IGNhbiBkbyBpbiB0aGUgbGFzdCBzdGVwLlwiXSB9KSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcIllvdSBjYW4gdmlldyBhbGwgb2YgeW91ciBkcmFmdCBwYWdlc1wiLCBcIiBcIiwgX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIi91L3BhZ2VzL2RyYWZ0XCIsIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJoZXJlXCIgfSkpLCBcIi5cIl0gfSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckNvbnRlbnRzKCkgfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRlbnRzO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHV0aWwsIHJlcXVlc3QsIGxvYWRpbmdNb2RhbCwgYWxlcnQgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCB7IExvYWRpbmcsIEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBVcGxvYWRQaG90byB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbnZhciBQYWdlVGh1bWJuYWlsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFwiXCIpLCBwaG90byA9IF9hWzBdLCBzZXRQaG90byA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9iWzBdLCBzZXRMb2FkaW5nID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCB1cGxvYWRQaG90b01kbCA9IF9jWzBdLCBzZXRVcGxvYWRQaG90b01kbCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZmlybWF0aW9uTWRsID0gX2RbMF0sIHNldENvbmZpcm1hdGlvbk1kbCA9IF9kWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGVfMTtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5nZXQoXCIvbmV3LXBhZ2UvcGFnZS10aHVtYm5haWwvXCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Iuc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob3RvKChfYSA9IHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5wYWdlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGhvdG9fdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlXzEuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luP3JlZGlyZWN0ZWQ9bmV3LXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2luaXRpYWwtc3RlcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIERlbGV0ZSB0aGUgcGhvdG8gdXNlcidzIHVwbG9hZGVkXG4gICAgdmFyIGRlbGV0ZVBhZ2VQaG90byA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIlJlbW92aW5nIHRoZSBwaG90by4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5kZWxldGUoXCIvcGFnZXMvXCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpLCBcIi9waG90bz90eXBlPWRyYWZ0XCIpLCB7IGF1dGg6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQaG90byhcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGhvdG8gd2FzIHN1Y2Nlc3NmdWxseSByZW1vdmVkLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgcHJvYmxlbSB3aXRoIHJlbW92aW5nIHRoZSBwaG90by5cIiwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciBvbkJhY2tCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9wYWdlLWNvbnRlbnRzP2lkPVwiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkpO1xuICAgIH07XG4gICAgdmFyIG9uTmV4dEJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2F0dGFjaC1maWxlcz9pZD1cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZikpKTtcbiAgICB9O1xuICAgIHZhciByZW5kZXJDb250ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvYWRpbmcpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgICAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHQgYnV0dG9uLXRleHQtLWJpZyBhLTExXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmFja0J1dHRvbkNsaWNrZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctbGVmdFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBcIiBCYWNrXCJdIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDaG9vc2UgYSBQYWdlIFRodW1ibmFpbFwiIH0pKSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMThcIiB9LCB7IGNoaWxkcmVuOiBwaG90b1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlRoaXMgcGhvdG8gd2lsbCBiZSB1c2VkIGZvciB5b3VyIHBhZ2UgdGh1bWJuYWlsOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiVXBsb2FkIGEgYmVhdXRpZnVsIHBob3RvIHRvIHNldCBhcyBhIHRodW1ibmFpbCBvZiB5b3VyIHBhZ2U6XCIgfSkpLCBwaG90byAmJiBfanN4KFwiaW1nXCIsIHsgc3JjOiBwaG90byB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtdGh1bWJuYWlsX19hY3Rpb24tYnV0dG9uc1wiIH0sIHsgY2hpbGRyZW46IFtwaG90byAmJiAoX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IHNpemU6IFwic21hbGxcIiwgcm91bmRlZDogdHJ1ZSwgY29sb3I6IFwicmVkXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRyYXNoIGJ1dHRvbl9faWNvbi1sZWZ0XCIgfSksIFwiUmVtb3ZlIFBhZ2UgUGhvdG9cIl0gfSkpKSwgX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgcm91bmRlZDogdHJ1ZSwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZFBob3RvTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXVwbG9hZCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBwaG90byA/IFwiQ2hhbmdlIFBhZ2UgUGhvdG9cIiA6IFwiVXBsb2FkIGEgUGFnZSBQaG90b1wiXSB9KSldIH0pKSwgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYS0xOCBpdGFsaWNcIiB9LCB7IGNoaWxkcmVuOiBwaG90b1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIllvdSBjYW4gYWx3YXlzIGNoYW5nZSBvciByZW1vdmUgeW91ciBwYWdlIHBob3RvIGFmdGVyIHlvdSBwdWJsaXNoZWQgeW91ciBwYWdlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiWW91IGNhbiBhbHdheXMgdXBsb2FkIGEgbmV3IHBob3RvIGFmdGVyIHlvdSBwdWJsaXNoZWQgeW91ciBwYWdlLCB5b3UgY2FuIGFsc28gc2tpcCB1cGxvYWRpbmcgYSBwaG90byBmb3Igbm93IGFuZCBkbyBpdCBhZnRlciBwdWJsaXNoaW5nIHRoZSBwYWdlLlwiIH0pKSwgX2pzeChVcGxvYWRQaG90bywgeyBvcGVuOiB1cGxvYWRQaG90b01kbCwgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkUGhvdG9NZGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9LCBoZWFkZXI6IFwiVXBsb2FkIFBhZ2UgUGhvdG9cIiwgdGV4dDogXCJVcGxvYWQgYSBzdHVubmluZyBwaG90byB0byBzZXQgYXMgdGhlIGZlYXR1cmVkIGltYWdlIG9mIHlvdXIgcGFnZTpcIiwgY3JvcE1zZzogXCJDaG9vc2UgYW4gYXJlYSB0byBiZSBzaG93biBhcyBmb3IgdGhlIHBhZ2UgdGh1bWJuYWlsLCB0aGlzIHdvbid0XFxuICAgICAgICAgICAgICAgIGNyb3AgeW91ciBpbWFnZSwgdGhpcyBpcyBqdXN0IHRoZSBhcmVhIHRoYXQgd2lsbCBiZSBzaG93biBhcyB0aGVcXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsLlwiLCBpbnB1dExhYmVsTmFtZTogXCJDaG9vc2UgYSBwaG90b1wiLCB1cmw6IFwiL3BhZ2VzL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSwgXCIvcGhvdG8/dHlwZT1kcmFmdFwiKSwgbWluV2lkdGg6IDEyMDAsIG1pbkhlaWdodDogNjc1LCBzaXplOiA4MDAwMDAwLCBhc3BlY3RSYXRpbzogNDggLyAyNywgc3VjY2VzczogZnVuY3Rpb24gKGltYWdlVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQaG90byhpbWFnZVVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSksIHBob3RvICYmIChfanN4KENvbmZpcm1Nb2RhbCwgeyBoZWFkZXI6IFwiUmVtb3ZlIHlvdXIgcGFnZSBwaG90b1wiLCBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyIHBhZ2UgcGhvdG8/XFxuICAgICAgICAgICAgICAgICAgVGhpcyBjYW5ub3QgYmUgdW5kby5cIiwgb3BlbjogY29uZmlybWF0aW9uTWRsLCBvbkNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVBhZ2VQaG90bygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LWNlbnRlclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OZXh0QnV0dG9uQ2xpY2tlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgY29sb3I6IHBob3RvID8gXCJibHVlXCIgOiBcImRlZmF1bHRcIiB9LCB7IGNoaWxkcmVuOiBbcGhvdG8gPyBcIk5leHRcIiA6IFwiU2tpcFwiLCBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1jaXJjbGUtcmlnaHQgYnV0dG9uX19pY29uLXJpZ2h0XCIgfSldIH0pKSB9KSldIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFByb2dyZXNzQmFyLCB7IHdpZHRoOiA2MCB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckNvbnRlbnRzKCkgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld19fbm90ZS1ib3hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2hpbGRyZW46IFwiV2h5IGl0J3MgaW1wb3J0YW50IHRvIGNob29zZSBhIHRodW1ibmFpbCBmb3IgeW91ciBwYWdlP1wiIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIkEgZ29vZCBwYWdlIHRodW1ibmFpbCB3aWxsIGhlbHAgdG8gaW5jcmVhc2UgeW91ciBwYWdlIHZpZXdzIGFuZCBsZXQgb3RoZXIgdXNlcnMgZGlzdGluZ3Vpc2ggeW91ciBwYWdlIG1vcmUgYW5kIG1ha2UgaXQgbW9yZSByZWNvZ25pemFibGUgaWYgdGhleSBhZGQgaXQgdG8gdGhlaXIgY29sbGVjdGlvbnMgb3Igb3RoZXIgcGxhY2VzLlwiIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiV2UgaGlnaGx5IHN1Z2dlc3QgeW91IGNob29zZSBhIHBob3RvIGZvciB5b3VyIHBhZ2UgdGh1bWJuYWlsLlwiIH0pIH0pXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQYWdlVGh1bWJuYWlsO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG52YXIgUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCArIFwiJVwiLFxuICAgIH07XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgaWQ6IFwibXlQcm9ncmVzc1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBpZDogXCJteUJhclwiLCBzdHlsZTogc3R5bGUgfSkgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBOYXZpZ2F0ZSwgUm91dGUsIFJvdXRlcywgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJbml0aWFsU3RlcCBmcm9tIFwiLi9Jbml0aWFsU3RlcFwiO1xuaW1wb3J0IFBhZ2VDb250ZW50cyBmcm9tIFwiLi9QYWdlQ29udGVudHNcIjtcbmltcG9ydCBQYWdlVGh1bWJuYWlsIGZyb20gXCIuL1BhZ2VUaHVtYm5haWxcIjtcbmltcG9ydCBBdHRhY2hGaWxlcyBmcm9tIFwiLi9BdHRhY2hGaWxlc1wiO1xuaW1wb3J0IEZpbmFsU3RlcCBmcm9tIFwiLi9GaW5hbFN0ZXBcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2VcIjtcbmZ1bmN0aW9uIE5ld1BhZ2UoKSB7XG4gICAgcmV0dXJuIChfanN4KFJvdXRlciwgeyBjaGlsZHJlbjogX2pzeHMoUm91dGVzLCB7IGNoaWxkcmVuOiBbX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIiwgZWxlbWVudDogX2pzeChJbml0aWFsU3RlcCwge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL25ldy1wYWdlL3BhZ2UtY29udGVudHNcIiwgZWxlbWVudDogX2pzeChQYWdlQ29udGVudHMsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXctcGFnZS9wYWdlLXRodW1ibmFpbFwiLCBlbGVtZW50OiBfanN4KFBhZ2VUaHVtYm5haWwsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXctcGFnZS9hdHRhY2gtZmlsZXNcIiwgZWxlbWVudDogX2pzeChBdHRhY2hGaWxlcywge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL25ldy1wYWdlL2F0dGFjaC1maWxlc1wiLCBlbGVtZW50OiBfanN4KEF0dGFjaEZpbGVzLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvbmV3LXBhZ2UvZmluYWwtc3RlcFwiLCBlbGVtZW50OiBfanN4KEZpbmFsU3RlcCwge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL25ldy1wYWdlL21lc3NhZ2VcIiwgZWxlbWVudDogX2pzeChNZXNzYWdlLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvbmV3LXBhZ2VcIiwgZWxlbWVudDogX2pzeChOYXZpZ2F0ZSwgeyB0bzogXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwXCIsIHJlcGxhY2U6IHRydWUgfSkgfSldIH0pIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE5ld1BhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=