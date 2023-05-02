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
                        setComments(response.page.configurations.comments);
                        setRating(response.page.configurations.rating);
                        setAnonymously(response.page.configurations.anonymously);
                        setLinks(response.page.configurations.links);
                        setTags(response.page.tags[0] ? response.page.tags[0] : "");
                        setUsername(response.page.author.username);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsbURBQUssSUFBSSwyQ0FBMkMsc0RBQUksQ0FBQyxzREFBYSxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLG1EQUFLLElBQUkseUNBQXlDLHNEQUFJLENBQUMsb0RBQVcsSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLHlDQUF5QyxzREFBSSxDQUFDLG9EQUFXLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsbURBQUssSUFBSSx1Q0FBdUMsc0RBQUksQ0FBQyxrREFBUyxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLG1EQUFLLElBQUksb0NBQW9DLHNEQUFJLENBQUMsZ0RBQU8sSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLDRCQUE0QixzREFBSSxDQUFDLHNEQUFRLElBQUksNkNBQTZDLEdBQUcsSUFBSSxHQUFHO0FBQ2x1QjtBQUNBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL0F0dGFjaEZpbGVzLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9uZXctcGFnZS9GaW5hbFN0ZXAudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL0ZpbmFsU3RlcFByaXZhdGUudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL0ZpbmFsU3RlcFB1YmxpYy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbmV3LXBhZ2UvSW5pdGlhbFN0ZXAudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL01lc3NhZ2UudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL1BhZ2VDb250ZW50cy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbmV3LXBhZ2UvUGFnZVRodW1ibmFpbC50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbmV3LXBhZ2UvUHJvZ3Jlc3NCYXIudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL25ldy1wYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTG9hZGluZywgQnV0dG9uLCBDb25maXJtTW9kYWwsIFVwbG9hZEF0dGFjaEZpbGUsIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHV0aWwsIHJlcXVlc3QsIGxvYWRpbmdNb2RhbCwgYWxlcnQgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xudmFyIEF0dGFjaEZpbGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFtdKSwgZmlsZXMgPSBfYVswXSwgc2V0RmlsZXMgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgZXJyb3IgPSBfYlswXSwgc2V0RXJyb3IgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfY1swXSwgc2V0TG9hZGluZyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZmlybWF0aW9uTWRsID0gX2RbMF0sIHNldENvbmZpcm1hdGlvbk1kbCA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtYXRpb25NZGxEYXRhSWQgPSBfZVswXSwgc2V0Q29uZmlybWF0aW9uTWRsRGF0YUlkID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoZmFsc2UpLCB1cGxvYWRBdHRhY2hGaWxlTWRsID0gX2ZbMF0sIHNldFVwbG9hZEF0dGFjaEZpbGVNZGwgPSBfZlsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoRmlsZXMoKTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIGZldGNoRmlsZXMgPSBmdW5jdGlvbiAobXNnKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UsIGVycm9yXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL3BhZ2VzL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSwgXCIvYXR0YWNoLWZpbGVzP3R5cGU9ZHJhZnRcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZXMocmVzcG9uc2UuYXR0YWNoRmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KG1zZywgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcl8xLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luP3JlZGlyZWN0ZWQ9bmV3LXBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2luaXRpYWwtc3RlcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgdmFyIHJlbmRlckZpbGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmaWxlLWxpbmtcIiwgaHJlZjogXCIvYXBpL3BhZ2VzL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSwgXCIvYXR0YWNoLWZpbGVzL1wiKS5jb25jYXQoZmlsZS5uYW1lKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZG93bmxvYWRcIiB9KSwgXCIgXCIgKyBmaWxlLm5hbWUsIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWlcIiwgb25DbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcHJldmVudCB0aGUgZmlsZSBmcm9tIHN0YXJ0aW5nIHRvIGdldCBkb3dubG9hZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1kbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25NZGxEYXRhSWQoZmlsZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRpbWVzXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkgfSkpXSB9KSwgZmlsZS5uYW1lKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIG9uQmFja0J1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL3BhZ2UtdGh1bWJuYWlsP2lkPVwiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkpO1xuICAgIH07XG4gICAgdmFyIG9uTmV4dEJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL2ZpbmFsLXN0ZXA/aWQ9XCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSk7XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2FkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKTtcbiAgICAgICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0IGJ1dHRvbi10ZXh0LS1iaWcgYS0xMVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJhY2tCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWFycm93LWxlZnRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgQmFja1wiXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiQWRkIEF0dGFjaCBGaWxlc1wiIH0pKSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMThcIiB9LCB7IGNoaWxkcmVuOiBcIkFkZCBhdHRhY2ggZmlsZXMgZm9yIHlvdXIgcGFnZSBpbiBwcmV0dHkgbXVjaCBhbnkgZm9ybWF0IHRoYXQgeW91IHdhbnQ6XCIgfSkpLCBfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZEF0dGFjaEZpbGVNZGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXVwbG9hZCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBcIiBBZGQgYW4gQXR0YWNoIEZpbGVcIl0gfSkpLCBfanN4KENvbmZpcm1Nb2RhbCwgeyBoZWFkZXI6IFwiUmVtb3ZlIHRoZSBhdHRhY2ggZmlsZVwiLCBvcGVuOiBjb25maXJtYXRpb25NZGwsIG1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgYXR0YWNoIGZpbGU/XCIsIG9uQ29uZmlybTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJEZWxldGluZyB0aGUgYXR0YWNoIGZpbGUuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmRlbGV0ZShcIi9wYWdlcy9cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZiksIFwiL2F0dGFjaC1maWxlcy9cIikuY29uY2F0KGNvbmZpcm1hdGlvbk1kbERhdGFJZCwgXCI/dHlwZT1kcmFmdFwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEZpbGVzKFwiRmlsZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pOyB9LCBvbkNhbmNlbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q29uZmlybWF0aW9uTWRsKGZhbHNlKTsgfSB9KSwgX2pzeChVcGxvYWRBdHRhY2hGaWxlLCB7IG9wZW46IHVwbG9hZEF0dGFjaEZpbGVNZGwsIGhlYWRlcjogXCJBZGQgYW4gQXR0YWNoIEZpbGVcIiwgdGV4dDogXCJZb3UgY2FuIHVwbG9hZCBtYXhpbXVtIG9mIDUgZmlsZXMgMTBNQiBlYWNoIGZvciBldmVyeSBwYWdlLlwiLCBzaXplOiAxMDAwMDAwMCwgdXJsOiBcIi9wYWdlcy9cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZiksIFwiL2F0dGFjaC1maWxlcz90eXBlPWRyYWZ0XCIpLCBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEZpbGVzKFwiRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRBdHRhY2hGaWxlTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1hdHRhY2gtZmlsZXNfX2ZpbGVzXCIgfSwgeyBjaGlsZHJlbjogcmVuZGVyRmlsZXMoKSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTggaXRhbGljXCIgfSwgeyBjaGlsZHJlbjogZmlsZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiWW91IGNhbiBhbHdheXMgYWRkL3JlbW92ZSBhdHRhY2ggZmlsZXMgYWZ0ZXIgeW91IHB1Ymxpc2hlZCB5b3VyIHBhZ2UuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJZb3UgY2FuIGFsd2F5cyBhZGQvcmVtb3ZlIGF0dGFjaCBmaWxlcyBhZnRlciB5b3UgcHVibGlzaGVkIHlvdXIgcGFnZSwgeW91IGNhbiBhbHNvIHNraXAgdGhpcyBmb3Igbm93IGFuZCBkbyBpdCBhZnRlciB5b3UgcHVibGlzaGVkIHlvdXIgcGFnZS5cIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5leHRCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjb2xvcjogZmlsZXMubGVuZ3RoID8gXCJibHVlXCIgOiBcImRlZmF1bHRcIiB9LCB7IGNoaWxkcmVuOiBbZmlsZXMubGVuZ3RoID8gXCJOZXh0XCIgOiBcIlNraXBcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0IGJ1dHRvbl9faWNvbi1yaWdodFwiIH0pXSB9KSkgfSkpXSB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChQcm9ncmVzc0JhciwgeyB3aWR0aDogODAgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb250ZW50cygpIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEF0dGFjaEZpbGVzO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXRpbCwgcmVxdWVzdCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBGaW5hbFN0ZXBQdWJsaWMgZnJvbSBcIi4vRmluYWxTdGVwUHVibGljXCI7XG5pbXBvcnQgRmluYWxTdGVwUHJpdmF0ZSBmcm9tIFwiLi9GaW5hbFN0ZXBQcml2YXRlXCI7XG52YXIgRmluYWxTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKG51bGwpLCB0eXBlID0gX2FbMF0sIHNldFR5cGUgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShudWxsKSwgY29tbWVudHMgPSBfYlswXSwgc2V0Q29tbWVudHMgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShudWxsKSwgcmF0aW5nID0gX2NbMF0sIHNldFJhdGluZyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKG51bGwpLCBhbm9ueW1vdXNseSA9IF9kWzBdLCBzZXRBbm9ueW1vdXNseSA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKG51bGwpLCBsaW5rcyA9IF9lWzBdLCBzZXRMaW5rcyA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCB0YWdzID0gX2ZbMF0sIHNldFRhZ3MgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShudWxsKSwgdXNlcm5hbWUgPSBfZ1swXSwgc2V0VXNlcm5hbWUgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShudWxsKSwgdXJsID0gX2hbMF0sIHNldFVybCA9IF9oWzFdO1xuICAgIHZhciBfaiA9IHVzZVN0YXRlKFtdKSwgdXNlZFVybHMgPSBfalswXSwgc2V0VXNlZFVybHMgPSBfalsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBlcnJvcl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL25ldy1wYWdlL2ZpbmFsLXN0ZXAvXCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFR5cGUocmVzcG9uc2UucGFnZS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKHJlc3BvbnNlLnBhZ2UuY29uZmlndXJhdGlvbnMuY29tbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF0aW5nKHJlc3BvbnNlLnBhZ2UuY29uZmlndXJhdGlvbnMucmF0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFub255bW91c2x5KHJlc3BvbnNlLnBhZ2UuY29uZmlndXJhdGlvbnMuYW5vbnltb3VzbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlua3MocmVzcG9uc2UucGFnZS5jb25maWd1cmF0aW9ucy5saW5rcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWdzKHJlc3BvbnNlLnBhZ2UudGFnc1swXSA/IHJlc3BvbnNlLnBhZ2UudGFnc1swXSA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUocmVzcG9uc2UucGFnZS5hdXRob3IudXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXJsKHJlc3BvbnNlLnBhZ2UudXJsIHx8IG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlZFVybHMocmVzcG9uc2UudXJscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcl8xLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpbj9yZWRpcmVjdGVkPW5ldy1wYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9KSgpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgY29udGVudDtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgY29udGVudCA9IChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICBjb250ZW50ID0gKF9qc3goRmluYWxTdGVwUHVibGljLCB7IGNvbW1lbnRzOiBjb21tZW50cyB8fCBmYWxzZSwgcmF0aW5nOiByYXRpbmcgfHwgZmFsc2UsIGxpbmtzOiBsaW5rcyB8fCBmYWxzZSwgYW5vbnltb3VzbHk6IGFub255bW91c2x5IHx8IGZhbHNlLCB0YWdzOiB0YWdzIH0pKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgY29udGVudCA9IChfanN4KEZpbmFsU3RlcFByaXZhdGUsIHsgdXNlcm5hbWU6IHVzZXJuYW1lIHx8IFwiXCIsIGNvbW1lbnRzOiBjb21tZW50cyB8fCBmYWxzZSwgcmF0aW5nOiByYXRpbmcgfHwgZmFsc2UsIGFub255bW91c2x5OiBhbm9ueW1vdXNseSB8fCBmYWxzZSwgdXJsOiB1cmwgfHwgXCJcIiwgdXNlZFVybHM6IHVzZWRVcmxzIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGlkOiBcIm5ldy1wYWdlLWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFByb2dyZXNzQmFyLCB7IHdpZHRoOiAxMDAgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdcIiB9LCB7IGNoaWxkcmVuOiBjb250ZW50IH0pKV0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaW5hbFN0ZXA7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB1dGlsLCByZXF1ZXN0LCBsb2FkaW5nTW9kYWwgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbnZhciBGaW5hbFN0ZXBQcml2YXRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUocHJvcHMuY29tbWVudHMpLCBjb21tZW50cyA9IF9hWzBdLCBzZXRDb21tZW50cyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKHByb3BzLnJhdGluZyksIHJhdGluZyA9IF9iWzBdLCBzZXRSYXRpbmcgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShwcm9wcy5hbm9ueW1vdXNseSksIGFub255bW91c2x5ID0gX2NbMF0sIHNldEFub255bW91c2x5ID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUocHJvcHMudXJsKSwgdXJsID0gX2RbMF0sIHNldFVybCA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCB1cmxFcnJvciA9IF9lWzBdLCBzZXRVcmxFcnJvciA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKGZhbHNlKSwgcHVibGlzaEJ0bkxvYWRpbmcgPSBfZlswXSwgc2V0UHVibGlzaEJ0bkxvYWRpbmcgPSBfZlsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgIHVwZGF0ZVBhZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtyYXRpbmcsIGNvbW1lbnRzLCBhbm9ueW1vdXNseV0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBVUkwgdmFsaWRhdGlvbiBvbiBjaGFuZ2VcbiAgICAgICAgaWYgKHVybClcbiAgICAgICAgICAgIGNoZWNrVXJsVmFsaWRhdGlvbigpO1xuICAgIH0sIFt1cmxdKTtcbiAgICAvLyBUb2dnbGUgZWFjaCBzd2l0Y2ggYnV0dG9uXG4gICAgdmFyIG9uU3dpdGNoQ2xpY2tlZCA9IGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgIHN3aXRjaCAocm9sZSkge1xuICAgICAgICAgICAgY2FzZSBcImNvbW1lbnRzXCI6XG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMoIWNvbW1lbnRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyYXRpbmdcIjpcbiAgICAgICAgICAgICAgICBzZXRSYXRpbmcoIXJhdGluZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYW5vbnltb3VzbHlcIjpcbiAgICAgICAgICAgICAgICBzZXRBbm9ueW1vdXNseSghYW5vbnltb3VzbHkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgYSBjaG9zZW4gVVJMIGlzIHZhbGlkXG4gICAgdmFyIGNoZWNrVXJsVmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHVybCAmJiB1cmwubGVuZ3RoID4gMCAmJiBwcm9wcy51c2VkVXJscy5pbmRleE9mKHVybCkgPT09IC0xKSB7XG4gICAgICAgICAgICBzZXRVcmxFcnJvcihcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnVzZWRVcmxzLmluZGV4T2YodXJsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNldFVybEVycm9yKFwiWW91IGhhdmUgYWxyZWFkeSB1c2VkIFxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCIgdXJsLCBjaG9vc2Ugc29tZXRoaW5nIGVsc2UuXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFVybEVycm9yKFwiUGxlYXNlIGNob29zZSBhIFVSTCBmb3IgeW91ciBwYWdlLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU2VuZHMgYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gdXBkYXRlIHRoZSBkcmFmdCBwYWdlXG4gICAgdmFyIHVwZGF0ZVBhZ2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYWdlLCBlXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM6IGNvbW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZzogcmF0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFub255bW91c2x5OiBhbm9ueW1vdXNseSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wYXRjaChcIi9uZXctcGFnZS9maW5hbC1zdGVwL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgdmFyIG9uU3VibWl0QnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFjaGVja1VybFZhbGlkYXRpb24oKSlcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VybFwiKS5mb2N1cygpO1xuICAgICAgICBzZXRQdWJsaXNoQnRuTG9hZGluZyh0cnVlKTtcbiAgICAgICAgdXBkYXRlUGFnZShmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VJZCwgcmVzcG9uc2UsIGVycm9yXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSWQgPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucG9zdChcIi9uZXctcGFnZS9cIi5jb25jYXQocGFnZUlkKSwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL21lc3NhZ2U/dHlwZT1wcml2YXRlJnN0YXR1cz1zdWNjZXNzJnVybD1cIi5jb25jYXQocmVzcG9uc2UudXJsLCBcIiZ1c2VybmFtZT1cIikuY29uY2F0KHJlc3BvbnNlLnVzZXJuYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcl8xLm1lc3NhZ2UuZXJyb3IgPT09IFwiZXJyb3Igd2l0aCBjb250ZW50c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvbWVzc2FnZT90eXBlPXByaXZhdGUmc3RhdHVzPWVycm9yLWNvbnRlbnRzJmlkPVwiLmNvbmNhdChwYWdlSWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL25ldy1wYWdlL21lc3NhZ2U/dHlwZT1wcml2YXRlJnN0YXR1cz1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQdWJsaXNoQnRuTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pO1xuICAgIH07XG4gICAgdmFyIG9uQmFja0J1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZVBhZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9hdHRhY2gtZmlsZXM/aWQ9XCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0IGJ1dHRvbi10ZXh0LS1iaWcgYS0xMVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQmFja0J1dHRvbkNsaWNrZWQoKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1sZWZ0XCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSksIFwiIEJhY2tcIl0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkNvbmZpZ3VyYXRpb25zIGFuZCBVUkxcIiB9KSkgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld19fZmluYWwtc3RlcFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hlc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIHsgY2hpbGRyZW46IFwiRGlzYWJsZSBDb21tZW50c1wiIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwIHRvb2x0aXAtdG9wIHRvb2x0aXAtLWluZm9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcInRvb2x0aXBfX2ljb25cIiB9LCB7IGNoaWxkcmVuOiBcIj9cIiB9KSksIF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXBfX3RleHRcIiB9LCB7IGNoaWxkcmVuOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcFwiIH0pKV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gb25Td2l0Y2hDbGlja2VkKFwiY29tbWVudHNcIik7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6ICFjb21tZW50cyA/IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9uXCIgOiBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vZmZcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIHZhbHVlOiBcImZhbHNlXCIgfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtZmluYWwtc3RlcF9fc3dpdGNoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBcIkRpc2FibGUgUmF0aW5nXCIgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXAgdG9vbHRpcC10b3AgdG9vbHRpcC0taW5mb1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwidG9vbHRpcF9faWNvblwiIH0sIHsgY2hpbGRyZW46IFwiP1wiIH0pKSwgX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwXCIgfSkpXSB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvblN3aXRjaENsaWNrZWQoXCJyYXRpbmdcIik7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6ICFyYXRpbmcgPyBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vblwiIDogXCJmYSBmYS0yeCBmYS10b2dnbGUtb2ZmXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCB2YWx1ZTogXCJmYWxzZVwiIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLWZpbmFsLXN0ZXBfX3N3aXRjaFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgeyBjaGlsZHJlbjogXCJDcmVhdGUgVGhpcyBQYWdlIEFub255bW91c2x5XCIgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXAgdG9vbHRpcC10b3AgdG9vbHRpcC0taW5mb1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwidG9vbHRpcF9faWNvblwiIH0sIHsgY2hpbGRyZW46IFwiP1wiIH0pKSwgX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwXCIgfSkpXSB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvblN3aXRjaENsaWNrZWQoXCJhbm9ueW1vdXNseVwiKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogYW5vbnltb3VzbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vZmZcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIHZhbHVlOiBcImZhbHNlXCIgfSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goSW5wdXQsIHsgaWQ6IFwidXJsXCIsIGxhYmVsOiBcIlVSTFwiLCBwbGFjZWhvbGRlcjogXCJDaG9vc2UgYSBVUkwgZm9yIHlvdXIgcGFnZS5cIiwgdHlwZTogXCJ0ZXh0XCIsIGVycm9yOiB1cmxFcnJvciwgdmFsdWU6IHVybCwgb25CbHVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VybFZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXJsKHV0aWwuY29udmVydFRvVXJsKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksIF9qc3hzKFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1cmxfX2Rpc3BsYXlcIiB9LCB7IGNoaWxkcmVuOiBbXCJwYWdzZXIuY29tL1wiLCBwcm9wcy51c2VybmFtZSwgXCIvXCIsIHVybF0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1cmxfX25vdGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIkltcG9ydGFudCBub3RlIGFib3V0IFVSTDpcIiB9KSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcIlRoaXMgVVJMIHdpbGwgYmUgZm9yIHlvdXIgcGFnZSwgcGxlYXNlIGNvcHkgdGhpcyBiZWNhdXNlIHRoZSBvbmx5IHdheSBvdGhlciBwZXJzb25zIGNhbiB2aWV3IHRoaXMgcGFnZSBpcyB0byBoYXZlIHRoaXMgVVJMLiBcIiwgX2pzeChcImJyXCIsIHt9KSwgXCIgXCIsIFwiWW91IHNob3VsZCBzaGFyZSB0aGlzIFVSTCBpbiBvcmRlciBmb3Igb3RoZXJzIHRvIHZpZXcgaXQuXCJdIH0pXSB9KSldIH0pKV0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LWNlbnRlclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdEJ1dHRvbkNsaWNrZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgbG9hZGluZzogcHVibGlzaEJ0bkxvYWRpbmcsIGNvbG9yOiBcImdyZWVuXCIgfSwgeyBjaGlsZHJlbjogW1wiUHVibGlzaFwiLCBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1nbG9iZSBidXR0b25fX2ljb24tcmlnaHRcIiB9KV0gfSkpIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZpbmFsU3RlcFByaXZhdGU7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHV0aWwsIHJlcXVlc3QsIGxvYWRpbmdNb2RhbCwgdGFnc0lucHV0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG52YXIgRmluYWxTdGVwUHVibGljID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUocHJvcHMuY29tbWVudHMpLCBjb21tZW50cyA9IF9hWzBdLCBzZXRDb21tZW50cyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKHByb3BzLnJhdGluZyksIHJhdGluZyA9IF9iWzBdLCBzZXRSYXRpbmcgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShwcm9wcy5saW5rcyksIGxpbmtzID0gX2NbMF0sIHNldExpbmtzID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUocHJvcHMuYW5vbnltb3VzbHkpLCBhbm9ueW1vdXNseSA9IF9kWzBdLCBzZXRBbm9ueW1vdXNseSA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKHByb3BzLnRhZ3MpLCB0YWdzID0gX2VbMF0sIHNldFRhZ3MgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShcIlwiKSwgdGFnc0Vycm9yID0gX2ZbMF0sIHNldFRhZ3NFcnJvciA9IF9mWzFdO1xuICAgIHZhciBfZyA9IHVzZVN0YXRlKGZhbHNlKSwgcHVibGlzaEJ0bkxvYWRpbmcgPSBfZ1swXSwgc2V0UHVibGlzaEJ0bkxvYWRpbmcgPSBfZ1sxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRvIGZpeCB3aWR0aCBpc3N1ZSBjbGllbnQtanMvbm9kZV9tb2R1bGVzL3RhZ3MtaW5wdXQvdGFncy1pbnB1dC5qcyBhbmQgaW4gc2V0SW5wdXRXaWR0aFxuICAgICAgICAvLyBmdW5jdGlvbiBjaGFuZ2UgdGhlIHZhbHVlIHRvIGEgaGlnaGVyIHZhbHVlICg1IC0+IDEwKVxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYudGFncy1pbnB1dFwiKSlcbiAgICAgICAgICAgIHRhZ3NJbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGFnc1wiXScpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VGFncyh0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgIHVwZGF0ZVBhZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtjb21tZW50cywgcmF0aW5nLCBsaW5rcywgYW5vbnltb3VzbHldKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFncykge1xuICAgICAgICAgICAgdXBkYXRlUGFnZSgpO1xuICAgICAgICAgICAgY2hlY2tUYWdzVmFsaWRhdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgW3RhZ3NdKTtcbiAgICB2YXIgdXBkYXRlUGFnZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhZ2UsIGVfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHVibGljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBjb21tZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc6IHJhdGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rczogbGlua3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzbHk6IGFub255bW91c2x5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucGF0Y2goXCIvbmV3LXBhZ2UvZmluYWwtc3RlcC9cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZikpLCB7IHBhZ2U6IHBhZ2UgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHRhZ3MgYXJlIHZhbGlkXG4gICAgdmFyIGNoZWNrVGFnc1ZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YWdzLnNwbGl0KFwiLFwiKS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBzZXRUYWdzRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGF0IGxlYXN0IDUgdGFncy5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhZ3MucmVwbGFjZSgvLC9nLCBcIlwiKS5sZW5ndGggPj0gMjAwKSB7XG4gICAgICAgICAgICBzZXRUYWdzRXJyb3IoXCJUYWdzIG11c3QgYmUgbGVzcyB0aGFuIDIwMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUYWdzRXJyb3IoXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLy8gVG9nZ2xlIGVhY2ggc3dpdGNoIGJ1dHRvblxuICAgIHZhciBvblN3aXRjaENsaWNrZWQgPSBmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICBzd2l0Y2ggKHJvbGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjb21tZW50c1wiOlxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKCFjb21tZW50cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmF0aW5nXCI6XG4gICAgICAgICAgICAgICAgc2V0UmF0aW5nKCFyYXRpbmcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxpbmtzXCI6XG4gICAgICAgICAgICAgICAgc2V0TGlua3MoIWxpbmtzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhbm9ueW1vdXNseVwiOlxuICAgICAgICAgICAgICAgIHNldEFub255bW91c2x5KCFhbm9ueW1vdXNseSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvbkJhY2tCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVQYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvYXR0YWNoLWZpbGVzP2lkPVwiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBvblB1Ymxpc2hCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWNoZWNrVGFnc1ZhbGlkYXRpb24oKSlcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3NcIikuZm9jdXMoKTtcbiAgICAgICAgc2V0UHVibGlzaEJ0bkxvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHVwZGF0ZVBhZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlSWQsIHJlc3BvbnNlLCBlcnJvcl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUlkID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LnBvc3QoXCIvbmV3LXBhZ2UvXCIuY29uY2F0KHBhZ2VJZCksIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9tZXNzYWdlP3R5cGU9cHVibGljJnN0YXR1cz1zdWNjZXNzJnVybD1cIi5jb25jYXQocmVzcG9uc2UudXJsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcl8xLm1lc3NhZ2UuZXJyb3IgPT09IFwiZXJyb3Igd2l0aCBjb250ZW50c1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvbWVzc2FnZT90eXBlPXB1YmxpYyZzdGF0dXM9ZXJyb3ItY29udGVudHMmaWQ9XCIuY29uY2F0KHBhZ2VJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvbWVzc2FnZT90eXBlPXB1YmxpYyZzdGF0dXM9ZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQdWJsaXNoQnRuTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidXR0b24tdGV4dCBidXR0b24tdGV4dC0tYmlnIGEtMTFcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvbkJhY2tCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctbGVmdFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBcIiBCYWNrXCJdIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDb25maWd1cmF0aW9ucyBhbmQgVGFnc1wiIH0pKSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3X19maW5hbC1zdGVwXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLWZpbmFsLXN0ZXBfX3N3aXRjaGVzXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLWZpbmFsLXN0ZXBfX3N3aXRjaFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgeyBjaGlsZHJlbjogXCJEaXNhYmxlIENvbW1lbnRzXCIgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXAgdG9vbHRpcC10b3AgdG9vbHRpcC0taW5mb1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwidG9vbHRpcF9faWNvblwiIH0sIHsgY2hpbGRyZW46IFwiP1wiIH0pKSwgX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwXCIgfSkpXSB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvblN3aXRjaENsaWNrZWQoXCJjb21tZW50c1wiKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogIWNvbW1lbnRzID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIiA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgdmFsdWU6IFwiZmFsc2VcIiB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIHsgY2hpbGRyZW46IFwiRGlzYWJsZSBSYXRpbmdcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcCB0b29sdGlwLS1pbmZvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBcIiB9KSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3dpdGNoQ2xpY2tlZChcInJhdGluZ1wiKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogIXJhdGluZyA/IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9uXCIgOiBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vZmZcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIHZhbHVlOiBcImZhbHNlXCIgfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtZmluYWwtc3RlcF9fc3dpdGNoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBcIkRvIE5vdCBEaXNwbGF5IFJlbGF0ZWQgUGFnZXMgYW5kIFRhZ3NcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcCB0b29sdGlwLXRvcCB0b29sdGlwLS1pbmZvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJ0b29sdGlwX19pY29uXCIgfSwgeyBjaGlsZHJlbjogXCI/XCIgfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ0b29sdGlwX190ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBcIiB9KSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3dpdGNoQ2xpY2tlZChcImxpbmtzXCIpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiAhbGlua3MgPyBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vblwiIDogXCJmYSBmYS0yeCBmYS10b2dnbGUtb2ZmXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCB2YWx1ZTogXCJmYWxzZVwiIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLWZpbmFsLXN0ZXBfX3N3aXRjaFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgeyBjaGlsZHJlbjogXCJDcmVhdGUgVGhpcyBQYWdlIEFub255bW91c2x5XCIgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRvb2x0aXAgdG9vbHRpcC10b3AgdG9vbHRpcC0taW5mb1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwidG9vbHRpcF9faWNvblwiIH0sIHsgY2hpbGRyZW46IFwiP1wiIH0pKSwgX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidG9vbHRpcF9fdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwXCIgfSkpXSB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBvblN3aXRjaENsaWNrZWQoXCJhbm9ueW1vdXNseVwiKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogYW5vbnltb3VzbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vZmZcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIHZhbHVlOiBcImZhbHNlXCIgfSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxcIiwgaHRtbEZvcjogXCJ0YWdzXCIgfSwgeyBjaGlsZHJlbjogXCJUYWdzXCIgfSkpLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRhZ3NcIiwgY2xhc3NOYW1lOiBcInRhZ3MtaW5wdXRcIiwgaWQ6IFwidGFnc1wiLCBkZWZhdWx0VmFsdWU6IHRhZ3MgfSksIHRhZ3NFcnJvciAmJiAoX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImlucHV0LWVycm9yXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiIH0pLCB0YWdzRXJyb3JdIH0pKSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tdG9wLTFcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic21hbGwtcGFyYWdyYXBoXCIgfSwgeyBjaGlsZHJlbjogW1wiUGxlYXNlIHJlYWRcIiwgXCIgXCIsIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJ0aGlzXCIgfSkpLCBcIiBcIiwgXCJxdWljayBndWlkZSBiZWZvcmUgeW91IGNoYW5nZSBhbnkgb2YgdGhlIGNvbmZpZ3VyYXRpb25zIGFuZCBjaG9vc2UgYW55IHRhZ3MuXCJdIH0pKSB9KSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25QdWJsaXNoQnV0dG9uQ2xpY2tlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBsb2FkaW5nOiBwdWJsaXNoQnRuTG9hZGluZywgY29sb3I6IFwiZ3JlZW5cIiB9LCB7IGNoaWxkcmVuOiBbXCJQdWJsaXNoXCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWdsb2JlIGJ1dHRvbl9faWNvbi1yaWdodFwiIH0pXSB9KSkgfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmluYWxTdGVwUHVibGljO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXRpbCwgcmVxdWVzdCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgTG9hZGluZywgQnV0dG9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xudmFyIEluaXRpYWxTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHVuZGVmaW5lZCksIHR5cGUgPSBfYVswXSwgc2V0VHlwZSA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9iWzBdLCBzZXRMb2FkaW5nID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCBuZXh0QnV0dG9uTG9hZGluZyA9IF9jWzBdLCBzZXROZXh0QnV0dG9uTG9hZGluZyA9IF9jWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFnZUlkLCByZXNwb25zZSwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJZCA9IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYWdlSWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5nZXQoXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwL1wiLmNvbmNhdChwYWdlSWQpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZShyZXNwb25zZS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlXzEgPT09IG51bGwgfHwgZV8xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlXzEuc3RhdHVzKSA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpbj9yZWRpcmVjdGVkPW5ldy1wYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9KSgpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgb25SYWRpb0NoYW5nZSA9IGZ1bmN0aW9uIChzZWxlY3RlZFR5cGUpIHtcbiAgICAgICAgc2V0VHlwZShzZWxlY3RlZFR5cGUpO1xuICAgIH07XG4gICAgdmFyIG9uTmV4dEJ1dHRvbkNsaWNrZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFnZUlkLCByZXNwb25zZSwgZV8yO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBzZXROZXh0QnV0dG9uTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUlkID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNiwgLCA3XSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2VJZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucGF0Y2goXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwL1wiLmNvbmNhdChwYWdlSWQpLCB7IHBhZ2U6IHsgdHlwZTogdHlwZSB9IH0sIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucG9zdChcIi9uZXctcGFnZVwiLCB7IHBhZ2U6IHsgdHlwZTogdHlwZSB9IH0sIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFnZVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9wYWdlLWNvbnRlbnRzP2lkPVwiLmNvbmNhdChyZXNwb25zZS5pZCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBzZXROZXh0QnV0dG9uTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgdmFyIHJlbmRlckNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2FkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKTtcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDaG9vc2UgWW91ciBQYWdlIFR5cGVcIiB9KSkgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld19fdHlwZXNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb250cm9sIGNvbnRyb2wtLXJhZGlvXCIgfSwgeyBjaGlsZHJlbjogW1wiUHVibGljXCIsIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwicmFkaW9cIiwgdmFsdWU6IFwicHVibGljXCIsIG5hbWU6IFwicmFkaW9cIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmFkaW9DaGFuZ2UoXCJwdWJsaWNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkZWZhdWx0Q2hlY2tlZDogdHlwZSA9PT0gXCJwdWJsaWNcIiB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250cm9sX19pbmRpY2F0b3JcIiB9KV0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3X190eXBlc19fZGV0YWlsc1wiIH0sIHsgY2hpbGRyZW46IFwiQ2hvb3NlIHRoaXMgb25lIGlmIHlvdSB3YW50IHlvdXIgcGFnZSB0byBiZSB2aXNpYmxlIHRvIGV2ZXJ5b25lLCB5b3VyIHBhZ2UgY2FuIGJlIGZvdW5kZWQgYnkgc2VhcmNoIGVuZ2luZXMgaWYgeW91IHN1cHBseSBpdCB3aXRoIGdvb2QgY29udGVudC4gUHVibGljIHBhZ2VzIHdpbGwgYmUgc2hvd24gaW4geW91ciBwdWJsaWMgcHJvZmlsZSB1bmxlc3MgeW91IGNyZWF0ZSBpdCBhbm9ueW1vdXNseS5cIiB9KSksIF9qc3hzKFwibGFiZWxcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udHJvbCBjb250cm9sLS1yYWRpbyBmb250LXdlaWdodC00MDBcIiB9LCB7IGNoaWxkcmVuOiBbXCJQcml2YXRlXCIsIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwicmFkaW9cIiwgdmFsdWU6IFwicHJpdmF0ZVwiLCBuYW1lOiBcInJhZGlvXCIsIGRlZmF1bHRDaGVja2VkOiB0eXBlID09PSBcInByaXZhdGVcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmFkaW9DaGFuZ2UoXCJwcml2YXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250cm9sX19pbmRpY2F0b3JcIiB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld19fdHlwZXNfX2RldGFpbHNcIiB9LCB7IGNoaWxkcmVuOiBbXCJDaG9vc2UgdGhpcyBpZiB5b3Ugd2FudCB5b3VyIHBhZ2UgdG8gYmUgdmlzaWJsZSBieSBvbmx5IGEgc3BlY2lmaWMga2luZCBvZiBwZXJzb25zLCBzdWNoIGFzIHlvdXIgZnJpZW5kcywgd29ya21hdGVzLCBzdHVkZW50cyAsZXRjLiBZb3UgY2FuIHJlc3RyaWN0IHRvIG9ubHkgY2VydGFpbiBwZW9wbGUgdG8gYmUgYWJsZSB0byB2aWV3IGl0LiBZb3VyIHByaXZhdGUgcGFnZXMgd2lsbCBub3QgYmVlbiBzaG93biBvbiB5b3VyIHB1YmxpYyBwcm9maWxlLlwiLCBcIiBcIiwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIlRoZSBvbmx5IHdheSBmb3Igb3RoZXJzIHRvIGZpbmQgdGhlIHBhZ2UgaXMgYnkgdGhlIFVSTCB0aGF0IHlvdSB3aWxsIGdpdmUgdGhlbS5cIiB9KV0gfSkpXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5leHRCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjb2xvcjogXCJibHVlXCIsIGRpc2FibGVkOiAhdHlwZSwgbG9hZGluZzogbmV4dEJ1dHRvbkxvYWRpbmcgfSwgeyBjaGlsZHJlbjogW1wiTmV4dFwiLCBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1jaXJjbGUtcmlnaHQgYnV0dG9uX19pY29uLXJpZ2h0XCIgfSldIH0pKSB9KSldIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goUHJvZ3Jlc3NCYXIsIHsgd2lkdGg6IDIwIH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3XCIgfSwgeyBjaGlsZHJlbjogcmVuZGVyQ29udGVudCgpIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEluaXRpYWxTdGVwO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG52YXIgTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJzdGF0dXNcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHZhciB0eXBlID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJ0eXBlXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICB2YXIgdXJsID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJ1cmxcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHZhciBpZCA9IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHZhciB1c2VybmFtZSA9IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwidXNlcm5hbWVcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGlmICh0eXBlID09PSBcInB1YmxpY1wiICYmIHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWlkZGxlLWJveCBtaWRkbGUtYm94LS1zdWNjZXNzIG1hcmdpbi1ib3R0b20tMVwiIH0sIHsgY2hpbGRyZW46IFtcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBwdWJsaXNoZWQgeW91ciBwdWJsaWMgcGFnZSwgeW91IGNhbiB2aWV3IHRoYXQgZnJvbSB0aGUgbGluayBiZWxvdy4gT3RoZXIgdXNlcnMgY2FuIGxpa2UsIGRpc2xpa2Ugb3IgY29tbWVudCBvbiB5b3VyIHBhZ2UgaWYgeW91IGhhdmVuJ3QgZGlzYWJsZWQgdGhlbSBhbmQgd2Ugd2lsbCBzZW5kIHlvdSBub3RpZmljYXRpb25zIGFib3V0IHRoZW0uIFlvdSBjYW4gdmlldyBhbGwgdGhlIHB1YmxpYyBhbmQgcHJpdmF0ZSBwYWdlcyB5b3UndmUgY3JlYXRlZCBpblwiLCBcIiBcIiwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ3aGl0ZS1saW5rXCIsIGhyZWY6IFwiL3UvcGFnZXNcIiB9LCB7IGNoaWxkcmVuOiBcInBhZ2VzIHNlY3Rpb24uXCIgfSkpIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWlkZGxlLWJveC0tbGlua1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJsdWUtbGlua1wiLCBocmVmOiBcIi9wdWJsaWMtcGFnZXMvXCIuY29uY2F0KHVybCkgfSwgeyBjaGlsZHJlbjogXCJWaWV3IHlvdXIgcHVibGljIHBhZ2VcIiB9KSkgfSkpXSB9KSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcInByaXZhdGVcIiAmJiBzdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1pZGRsZS1ib3ggbWlkZGxlLWJveC0tc3VjY2VzcyBtYXJnaW4tYm90dG9tLTFcIiB9LCB7IGNoaWxkcmVuOiBbXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCB5b3VyIHByaXZhdGUgcGFnZSwgeW91IGNhbiB2aWV3IHRoYXQgZnJvbSB0aGUgbGluayBiZWxvdy4gVG8gc2hhcmUgdGhpcyBwYWdlIHdpdGggdGhlIHBlcnNvbnMgeW91IHdhbnQsIHlvdSBzaG91bGQgc2hhcmUgdGhlIGxpbmsgb2YgeW91ciBwYWdlIHdpdGggdGhlbSAobGluayBiZWxvdykuIFlvdSBjYW4gdmlldyBhbGwgdGhlIHB1YmxpYyBhbmQgcHJpdmF0ZSBwYWdlcyB5b3UndmUgY3JlYXRlZCBpblwiLCBcIiBcIiwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ3aGl0ZS1saW5rXCIsIGhyZWY6IFwiL3UvcGFnZXNcIiB9LCB7IGNoaWxkcmVuOiBcInBhZ2VzIHNlY3Rpb24uXCIgfSkpIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWlkZGxlLWJveC0tbGlua1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJsdWUtbGlua1wiLCBocmVmOiBcIi9cIi5jb25jYXQodXNlcm5hbWUsIFwiL1wiKS5jb25jYXQodXJsKSB9LCB7IGNoaWxkcmVuOiBcIlZpZXcgeW91ciBwcml2YXRlIHBhZ2VcIiB9KSkgfSkpXSB9KSk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IFwiZXJyb3ItY29udGVudHNcIikge1xuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1pZGRsZS1ib3ggbWlkZGxlLWJveC0tZXJyb3IgbWFyZ2luLWJvdHRvbS0xXCIgfSwgeyBjaGlsZHJlbjogXCJUaGVyZSB3YXMgc29tZXRoaW5nIHdyb25nIHdpdGggdGhlIGNvbnRlbnRzIHlvdSd2ZSBwcm92aWRlZCwgcGxlYXNlIHJldmlldyB5b3VyIHBhZ2UgY29udGVudHMgYW5kIG1ha2Ugc3VyZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgT0suXCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50IG1pZGRsZS1ib3gtLWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJibHVlLWxpbmtcIiwgaHJlZjogXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwP2lkPVwiLmNvbmNhdChpZCkgfSwgeyBjaGlsZHJlbjogXCJSZXZpZXcgeW91ciBwYWdlXCIgfSkpIH0pKV0gfSkpO1xuICAgIH1cbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1pZGRsZS1ib3ggbWlkZGxlLWJveC0tZXJyb3IgbWFyZ2luLWJvdHRvbS0xXCIgfSwgeyBjaGlsZHJlbjogXCJTb3JyeSBzb21ldGhpbmcgd2VudCB3cm9uZyBiZWNhdXNlIG9mIHVzISBXZSB3aWxsIHJldmlldyB3aGF0IGhhcHBlbmVkIGFzIHNvb24gYXMgcG9zc2libGUgYW5kIGxldCB5b3Uga25vdyB3aGF0IHdhcyB0aGUgaXNzdWUuIEluIHRoZSBtZWFud2hpbGUgcGxlYXNlIGNyZWF0ZSB5b3VyIHBhZ2UgYWdhaW4gZnJvbSBzY3JhdGNoIG9yIHZpZXcgeW91ciBkcmFmdCBwYWdlcyB2aWEgdGhlIGxpbmtzIGJlbG93LiBXZSBhcG9sb2dpemUgZm9yIHRoZSBpbmNvbnZlbmllbmNlLlwiIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWlkZGxlLWJveC0tbGlua1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJibHVlLWxpbmtcIiwgaHJlZjogXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwXCIgfSwgeyBjaGlsZHJlbjogXCJDcmVhdGUgYSBuZXcgcGFnZVwiIH0pKSwgX2pzeChcImJyXCIsIHt9KSwgX2pzeChcImFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYmx1ZS1saW5rXCIsIGhyZWY6IFwiL3UvcGFnZXMvZHJhZnRcIiB9LCB7IGNoaWxkcmVuOiBcIlZpZXcgeW91ciBkcmFmdCBwYWdlc1wiIH0pKV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlueU1DRSBmcm9tIFwicmVhY3QtdGlueW1jZVwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdmFsaWRhdGUsIHV0aWwsIHJlcXVlc3QsIGxvYWRpbmdNb2RhbCwgYWxlcnQgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCB7IExvYWRpbmcsIEJ1dHRvbiwgSW5wdXQsIFRleHRhcmVhIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xudmFyIFBhZ2VDb250ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShudWxsKSwgdHlwZSA9IF9hWzBdLCBzZXRUeXBlID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoXCJcIiksIHRpdGxlID0gX2JbMF0sIHNldFRpdGxlID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIHRpdGxlRXJyb3IgPSBfY1swXSwgc2V0VGl0bGVFcnJvciA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBicmllZkRlcyA9IF9kWzBdLCBzZXRCcmllZkRlcyA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCBicmllZkRlc0Vycm9yID0gX2VbMF0sIHNldEJyaWVmRGVzRXJyb3IgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShcIlwiKSwgdGFyZ2V0cyA9IF9mWzBdLCBzZXRUYXJnZXRzID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoXCJcIiksIHRhcmdldHNFcnJvciA9IF9nWzBdLCBzZXRUYXJnZXRzRXJyb3IgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShcIlwiKSwgYm9keSA9IF9oWzBdLCBzZXRCb2R5ID0gX2hbMV07XG4gICAgdmFyIF9qID0gdXNlU3RhdGUoXCJcIiksIGJvZHlFcnJvciA9IF9qWzBdLCBzZXRCb2R5RXJyb3IgPSBfalsxXTtcbiAgICB2YXIgX2sgPSB1c2VTdGF0ZShudWxsKSwgc2F2ZWQgPSBfa1swXSwgc2V0U2F2ZWQgPSBfa1sxXTtcbiAgICB2YXIgX2wgPSB1c2VTdGF0ZShmYWxzZSksIG5leHRCdXR0b25Mb2FkaW5nID0gX2xbMF0sIHNldE5leHRCdXR0b25Mb2FkaW5nID0gX2xbMV07XG4gICAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYWdlSWQsIHJlc3BvbnNlLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSWQgPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL25ldy1wYWdlL3BhZ2UtY29udGVudHMvXCIuY29uY2F0KHBhZ2VJZCksIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCb2R5KHJlc3BvbnNlLnBhZ2UuYm9keSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFR5cGUocmVzcG9uc2UucGFnZS50eXBlIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUocmVzcG9uc2UucGFnZS50aXRsZSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhcmdldHMocmVzcG9uc2UucGFnZS50YXJnZXRzIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJpZWZEZXMocmVzcG9uc2UucGFnZS5icmllZl9kZXNjcmlwdGlvbiB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZV8xLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpbj9yZWRpcmVjdGVkPW5ldy1wYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9KSgpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTZW5kIGEgcmVxdWVzdCB0byBzZXJ2ZXIgYXV0b21hdGljYWxseSB0byBzYXZlIHRoZSBjaGFuZ2VzLCB3ZSB3b24ndCBzZW5kIGEgcmVxdWVzdFxuICAgICAgICAvLyBpZiB0aGUgY2hhbmdlcyBhcmUgYWxyZWFkeSBzYXZlZFxuICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXNhdmVkKVxuICAgICAgICAgICAgICAgIHVwZGF0ZVBhZ2UoKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTsgfTtcbiAgICB9LCBbdGl0bGUsIGJvZHksIGJyaWVmRGVzLCB0YXJnZXRzXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tQYWdlQm9keVZhbGlkYXRpb24oKTtcbiAgICB9LCBbYm9keV0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrVGFyZ2V0c1ZhbGlkYXRpb24oKTtcbiAgICB9LCBbdGFyZ2V0c10pO1xuICAgIHZhciBoYW5kbGVyQmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnJldHVyblZhbHVlID0gXCJVbnNhdmVkIGNoYW5nZXMsIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZT9cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNhdmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgaGFuZGxlckJlZm9yZXVubG9hZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbc2F2ZWRdKTtcbiAgICAvLyBUaGlzIHdpbGwgc2VuZCB0aGUgY3VycmVudCBwYWdlIGRhdGEgdG8gc2VydmVyIGZvciBzYXZpbmcuXG4gICAgLy8gVGhpcyB3aWxsIHJ1biB3aGVuIHVzZXIgd2FudHMgdG8gY2hhbmdlIHRoZSBjdXJyZW50IHN0YWdlXG4gICAgLy8gZWl0aGVyIGJ5IGdvaW5nIHRvIHRoZSBuZXh0IG9yIHByZXZpb3VzIHN0YWdlXG4gICAgdmFyIHVwZGF0ZVBhZ2UgPSBmdW5jdGlvbiAodG8sIHN1Y2Nlc3NNZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8yO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAodG8gJiYgISh0byA9PT0gbnVsbCB8fCB0byA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG8uaW5jbHVkZXMoXCJwYWdlLXRodW1ibmFpbFwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJMb2FkaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG8gJiYgdG8uaW5jbHVkZXMoXCJwYWdlLXRodW1ibmFpbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dEJ1dHRvbkxvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wYXRjaChcIi9uZXctcGFnZS9wYWdlLWNvbnRlbnRzL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmllZkRlczogYnJpZWZEZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGFyZ2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2F2ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEBUb2RvOiBkb2Vzbid0IHdvcmshXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGhhbmRsZXJCZWZvcmV1bmxvYWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChzdWNjZXNzTWVzc2FnZSwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dEJ1dHRvbkxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUodG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dEJ1dHRvbkxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25CYWNrQnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlUGFnZShcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXA/aWQ9XCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSk7XG4gICAgfTtcbiAgICB2YXIgb25OZXh0QnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGlmIChjaGVja0lmQWxsT2soKSkge1xuICAgICAgICAgICAgdXBkYXRlUGFnZShcIi9uZXctcGFnZS9wYWdlLXRodW1ibmFpbD9pZD1cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghY2hlY2tUaXRsZVZhbGlkYXRpb24oKSkge1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICB0aXRsZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjaGVja0JyaWVmRGVzVmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJyaWVmRGVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JyaWVmRGVzXCIpO1xuICAgICAgICAgICAgICAgIGJyaWVmRGVzRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNoZWNrVGFyZ2V0c1ZhbGlkYXRpb24oKSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhcmdldHNcIik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0c0VsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjaGVja1BhZ2VCb2R5VmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRzSW5wdXRcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgICAgIChfYyA9IChfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jb250ZW50V2luZG93KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBDaGVjayBpZiB0aGUgdGl0bGUgcHJvdmlkZWQgYnkgdXNlciBpcyB2YWxpZCBvciBub3QuXG4gICAgLy8gVGhpcyB3aWxsIHJ1biBieSBvbmJsdXIgYW5kIG9uY2hhbmdlIGV2ZW50IG9uIHRpdGxlIGlucHV0XG4gICAgdmFyIGNoZWNrVGl0bGVWYWxpZGF0aW9uID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgdmFyIG1pbkxlbiA9IHR5cGUgPT09IFwicHVibGljXCIgPyAxNSA6IDE7XG4gICAgICAgIHZhciB2YWwgPSB0ZXh0ID8gdGV4dCA6IHRpdGxlO1xuICAgICAgICBpZiAodmFsLmxlbmd0aCA8IG1pbkxlbikge1xuICAgICAgICAgICAgc2V0VGl0bGVFcnJvcih0eXBlID09PSBcInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgPyBcIlRpdGxlIHNob3VsZCBiZSBtb3JlIHRoYW4gXCIuY29uY2F0KG1pbkxlbiwgXCIgY2hhcmFjdGVycy5cIilcbiAgICAgICAgICAgICAgICA6IFwiVGl0bGUgY2Fubm90IGJlIGJlIGJsYW5rLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICBzZXRUaXRsZUVycm9yKFwiVGl0bGUgc2hvdWxkIGJlIGxlc3MgdGhhbiA1MCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaXRsZUVycm9yKFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8vIENoZWNrIGlmIHRoZSBicmllZiBkZXNjcmlwdGlvbiBwcm92aWRlZCBieSB1c2VyIGlzIHZhbGlkIG9yIG5vdC5cbiAgICAvLyBUaGlzIHdpbGwgcnVuIGJ5IG9uYmx1ciBhbmQgb25jaGFuZ2UgZXZlbnQgb24gYnJpZWZEZXMgaW5wdXRcbiAgICB2YXIgY2hlY2tCcmllZkRlc1ZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtaW5MZW4gPSB0eXBlID09PSBcInB1YmxpY1wiID8gMzAgOiAwO1xuICAgICAgICBpZiAoYnJpZWZEZXMubGVuZ3RoIDwgbWluTGVuKSB7XG4gICAgICAgICAgICBzZXRCcmllZkRlc0Vycm9yKHR5cGUgPT09IFwicHVibGljXCJcbiAgICAgICAgICAgICAgICA/IFwiQnJpZWYgZGVzY3JpcHRpb24gc2hvdWxkIGJlIG1vcmUgdGhhbiBcIi5jb25jYXQobWluTGVuLCBcIiBjaGFyYWN0ZXJzLlwiKVxuICAgICAgICAgICAgICAgIDogXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJyaWVmRGVzLmxlbmd0aCA+IDMwMCkge1xuICAgICAgICAgICAgc2V0QnJpZWZEZXNFcnJvcihcIkJyaWVmIGRlc2NyaXB0aW9uIHNob3VsZCBiZSBsZXNzIHRoYW4gMzAwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldEJyaWVmRGVzRXJyb3IoXCJcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHRhcmdldHMgcHJvdmlkZWQgYnkgdXNlciBpcyB2YWxpZCBvciBub3QuXG4gICAgLy8gVGhpcyB3aWxsIHJ1biBieSBvbmJsdXIgYW5kIG9uY2hhbmdlIGV2ZW50IG9uIHRhcmdldHMgaW5wdXRcbiAgICB2YXIgY2hlY2tUYXJnZXRzVmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1pbkxlbiA9IHR5cGUgPT09IFwicHVibGljXCIgPyAyMCA6IDA7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA8IG1pbkxlbikge1xuICAgICAgICAgICAgc2V0VGFyZ2V0c0Vycm9yKFwiVGFyZ2V0cyBkZXNjcmlwdGlvbiBzaG91bGQgYmUgbW9yZSB0aGFuIFwiLmNvbmNhdChtaW5MZW4sIFwiIGNoYXJhY3RlcnMuXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAzMDApIHtcbiAgICAgICAgICAgIHNldFRhcmdldHNFcnJvcihcIlRhcmdldHMgZGVzY3JpcHRpb24gc2hvdWxkIGJlIGxlc3MgdGhhbiAzMDAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGFyZ2V0c0Vycm9yKFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8vIENoZWNrIGlmIHRoZSBQYWdlIEJvZHkgcHJvdmlkZWQgYnkgdXNlciBpcyB2YWxpZCBvciBub3QuXG4gICAgLy8gVGhpcyB3aWxsIHJ1biBieSBvbmNoYW5nZSBldmVudCBvbiBUaW55TUNFIGlucHV0XG4gICAgdmFyIGNoZWNrUGFnZUJvZHlWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGh0bWwgYW5kIGV4dHJhIHNwYWNlcyBhbmQgdGhlbiBjaGVja1xuICAgICAgICB2YXIgaHRtbCA9IGJvZHk7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgdmFyIGJvZHlUZXh0ID0gZGl2LnRleHRDb250ZW50IHx8IGRpdi5pbm5lclRleHQgfHwgXCJcIjtcbiAgICAgICAgYm9keVRleHQgPSBib2R5VGV4dC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XG4gICAgICAgIHZhciBtaW5MZW4gPSB0eXBlID09PSBcInB1YmxpY1wiID8gNTAgOiAxO1xuICAgICAgICB2YXIgdGlueW1jZUVMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tY2UtdGlueW1jZVwiKTtcbiAgICAgICAgaWYgKGJvZHlUZXh0Lmxlbmd0aCA8IG1pbkxlbiAmJiB0aW55bWNlRUwpIHtcbiAgICAgICAgICAgIHRpbnltY2VFTC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTc0YzNjXCI7XG4gICAgICAgICAgICBzZXRCb2R5RXJyb3IodHlwZSA9PT0gXCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgID8gXCJCb2R5IHNob3VsZCBiZSBtb3JlIHRoYW4gXCIuY29uY2F0KG1pbkxlbiwgXCIgY2hhcmFjdGVycy5cIilcbiAgICAgICAgICAgICAgICA6IFwiQm9keSBjYW5ub3QgYmUgYmxhbmsuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5VGV4dC5sZW5ndGggPiAyMDAwMCAmJiB0aW55bWNlRUwpIHtcbiAgICAgICAgICAgIHRpbnltY2VFTC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTc0YzNjXCI7XG4gICAgICAgICAgICBzZXRCb2R5RXJyb3IoXCJCb2R5IHNob3VsZCBiZSBsZXNzIHRoYW4gMjAwMDAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbnltY2VFTCkge1xuICAgICAgICAgICAgdGlueW1jZUVMLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNDQUNBQ0FcIjtcbiAgICAgICAgICAgIHNldEJvZHlFcnJvcihcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8vIFJldHVybiB0cnVlIG9yIGZhbHNlIHRvIGluZGljYXRlIGlmIGFsbCB0aGUgaW5wdXRzIGFyZSB2YWxpZCBvciBub3RcbiAgICB2YXIgY2hlY2tJZkFsbE9rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBGb3IgcGFnZSBib2R5LCByZW1vdmUgYWxsIGh0bWwgYW5kIGV4dHJhIHNwYWNlcyBhbmQgdGhlbiBjaGVja1xuICAgICAgICB2YXIgaHRtbCA9IGJvZHk7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgdmFyIGJvZHlUZXh0ID0gZGl2LnRleHRDb250ZW50IHx8IGRpdi5pbm5lclRleHQgfHwgXCJcIjtcbiAgICAgICAgYm9keVRleHQgPSBib2R5VGV4dC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XG4gICAgICAgIGlmICh0eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUubGVuKHRpdGxlLCAxNSwgNTApICYmXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUubGVuKGJyaWVmRGVzLCAzMCwgMzAwKSAmJlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmxlbih0YXJnZXRzLCAyMCwgMzAwKSAmJlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmxlbihib2R5VGV4dCwgNTAsIDIwMDAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBcInByaXZhdGVcIikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmxlbih0aXRsZSwgMSwgNTApICYmXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUubGVuKGJyaWVmRGVzLCAwLCAzMDApICYmXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUubGVuKHRhcmdldHMsIDAsIDMwMCkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5sZW4oYm9keVRleHQsIDEsIDIwMDAwMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlbmRlckNvbnRlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVxdWlyZWRMYWJlbDtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwicHJpdmF0ZVwiKSB7XG4gICAgICAgICAgICByZXF1aXJlZExhYmVsID0gXCIgKlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBib2R5Q2xhc3NOYW1lID0gXCJmb3JtX19ncm91cFwiO1xuICAgICAgICBib2R5Q2xhc3NOYW1lICs9IGJvZHlFcnJvciAmJiBcIiBmb3JtX19ncm91cC0tZXJyb3JcIjtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0IGJ1dHRvbi10ZXh0LS1iaWcgYS0xMVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CYWNrQnV0dG9uQ2xpY2tlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctbGVmdFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBcIiBCYWNrXCJdIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJGaWxsIE91dCBZb3VyIFBhZ2UgQ29udGVudFwiIH0pKSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2UtbmV3X19jb250ZW50c1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IGxhYmVsOiB0eXBlID09PSBcInByaXZhdGVcIiA/IFwiVGl0bGUgKlwiIDogXCJUaXRsZVwiLCBpZDogXCJ0aXRsZVwiLCB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVGl0bGVWYWxpZGF0aW9uKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2F2ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGEgdGl0bGUgZm9yIHlvdXIgcGFnZS5cIiwgbWF4TGVuZ3RoOiA1MCwgaGVscDogXCJ0aGlzIGlzIHNvbWUgdGV4dCB0byBoZWxwIHlvdSB1bmRlcnN0YW5kIHRoZSBpbnB1dCBiZXR0ZXIuXCIsIGVycm9yOiB0aXRsZUVycm9yLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVGl0bGVWYWxpZGF0aW9uKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRleHRhcmVhLCB7IGxhYmVsOiBcIkJyaWVmIERlc2NyaXB0aW9uXCIsIGlkOiBcImJyaWVmRGVzXCIsIHZhbHVlOiBicmllZkRlcywgcm93czogMywgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCcmllZkRlc1ZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCcmllZkRlcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2F2ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcGxhY2Vob2xkZXI6IFwiRGVzY3JpYmUgYnJpZWZseSB3aGF0IHlvdXIgcGFnZSBpcyBhbGwgYWJvdXQuXCIsIGhlbHA6IFwidGhpcyBpcyBzb21lIHRleHQgdG8gaGVscCB5b3UgdW5kZXJzdGFuZCB0aGUgaW5wdXQgYmV0dGVyLlwiLCBtYXhMZW5ndGg6IDMwMCwgZXJyb3I6IGJyaWVmRGVzRXJyb3IsIG9uQmx1cjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQnJpZWZEZXNWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChUZXh0YXJlYSwgeyBsYWJlbDogXCJUYXJnZXRzXCIsIHZhbHVlOiB0YXJnZXRzLCBpZDogXCJ0YXJnZXRzXCIsIHJvd3M6IDMsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVGFyZ2V0c1ZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXJnZXRzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwbGFjZWhvbGRlcjogXCJEZXNjcmliZSBicmllZmx5IHdobyB0aGlzIHBhZ2UgaXMgZm9yLlwiLCBoZWxwOiBcInRoaXMgaXMgc29tZSB0ZXh0IHRvIGhlbHAgeW91IHVuZGVyc3RhbmQgdGhlIGlucHV0IGJldHRlci5cIiwgbWF4TGVuZ3RoOiAzMDAsIGVycm9yOiB0YXJnZXRzRXJyb3IsIG9uQmx1cjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVGFyZ2V0c1ZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSkpLCBfanN4KFwiaHJcIiwgeyBjbGFzc05hbWU6IFwiaHIgdS1tYXJnaW4tdG9wLTVcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGJvZHlDbGFzc05hbWUsIGlkOiBcImJvZHlcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGh0bWxGb3I6IFwiYm9keUlucHV0XCIsIGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiIH0sIHsgY2hpbGRyZW46IFtcIlBhZ2UgQm9keVwiLCByZXF1aXJlZExhYmVsXSB9KSksIF9qc3goVGlueU1DRSwgeyBjb250ZW50OiBib2R5LCBjb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbl91cmw6IFwiL3RpbnltY2Utc2tpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiBcInByZXZpZXcgbGluayBsaXN0cyBhZHZsaXN0IGNvZGVzYW1wbGUgaW1hZ2UgaW1hZ2V0b29sc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBcImZvcm1hdHNlbGVjdCB8IGJvbGQgaXRhbGljIHVuZGVybGluZSB8IGxpbmsgY29kZXNhbXBsZSBpbWFnZSB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgYnVsbGlzdCBudW1saXN0IHwgb3V0ZGVudCBpbmRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfZm9ybWF0czogXCJQYXJhZ3JhcGg9cDsgSGVhZGVyPWgyO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzYmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfZGltZW5zaW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdldG9vbHNfdG9vbGJhcjogXCJyb3RhdGVsZWZ0IHJvdGF0ZXJpZ2h0IHwgZmxpcHYgZmxpcGggfCBpbWFnZW9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09PSBcImRhcmtcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmNvbnRlbnREb2N1bWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zdHlsZS5iYWNrZ3JvdW5kID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiM1NTVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5jb250ZW50RG9jdW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc3R5bGUuY29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2ZmZlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJvZHkoZS50YXJnZXQuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2F2ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogZnVuY3Rpb24gKGUpIHsgfSB9LCB0eXBlKSwgX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImlucHV0LWVycm9yXCIgfSwgeyBjaGlsZHJlbjogW2JvZHlFcnJvciAmJiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiB9KSwgYm9keUVycm9yXSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW3NhdmVkID09PSBmYWxzZSAmJiAoX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidGV4dC1vcmFuZ2VcIiB9LCB7IGNoaWxkcmVuOiBcIlNhdmluZyBjaGFuZ2VzLi4uXCIgfSkpKSwgc2F2ZWQgPT09IHRydWUgJiYgKF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInRleHQtZ3JlZW5cIiB9LCB7IGNoaWxkcmVuOiBcIkNoYW5nZXMgc2F2ZWQgdG8gdGhlIGNsb3VkIVwiIH0pKSldIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzbWFsbC1wYXJhZ3JhcGhcIiB9LCB7IGNoaWxkcmVuOiBbXCJTZWUgbW9yZSBpbmZvcm1hdGlvbiBvbiB3aGF0IHRvIHByb3ZpZGUgaW4gZWFjaCBpbnB1dFwiLCBcIiBcIiwgX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIiNcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBcImhlcmUuXCIgfSkpXSB9KSkgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5leHRCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsb2FkaW5nOiBuZXh0QnV0dG9uTG9hZGluZywgY29sb3I6IFwiYmx1ZVwiLCBkaXNhYmxlZDogIXR5cGUgfSwgeyBjaGlsZHJlbjogW1wiTmV4dFwiLCBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1jaXJjbGUtcmlnaHQgYnV0dG9uX19pY29uLXJpZ2h0XCIgfSldIH0pKSB9KSldIH0pKV0gfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goUHJvZ3Jlc3NCYXIsIHsgd2lkdGg6IDQwIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld19fbm90ZS1ib3hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2hpbGRyZW46IFwiQSBub3RlIGFib3V0IHNhdmluZzpcIiB9KSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcIldlIFwiLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiYXV0b21hdGljYWxseSBzYXZlXCIgfSksIFwiIHdoYXQgeW91IHdyaXRlIGFuZCBhbGwgdGhlIG90aGVyIGNoYW5nZXMgeW91IGRvLCB5b3VyIHBhZ2UgaXMgc2F2ZWQgYXMgYSBkcmFmdCB1bnRpbCB5b3UgZGVjaWRlIHRvIHB1Ymxpc2ggaXQsIHdoaWNoIHlvdSBjYW4gZG8gaW4gdGhlIGxhc3Qgc3RlcC5cIl0gfSksIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbXCJZb3UgY2FuIHZpZXcgYWxsIG9mIHlvdXIgZHJhZnQgcGFnZXNcIiwgXCIgXCIsIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdS9wYWdlcy9kcmFmdFwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzTmFtZTogXCJidXR0b24tdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwiaGVyZVwiIH0pKSwgXCIuXCJdIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb250ZW50cygpIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50cztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1dGlsLCByZXF1ZXN0LCBsb2FkaW5nTW9kYWwsIGFsZXJ0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBMb2FkaW5nLCBCdXR0b24sIENvbmZpcm1Nb2RhbCwgVXBsb2FkUGhvdG8gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG52YXIgUGFnZVRodW1ibmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgcGhvdG8gPSBfYVswXSwgc2V0UGhvdG8gPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYlswXSwgc2V0TG9hZGluZyA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgdXBsb2FkUGhvdG9NZGwgPSBfY1swXSwgc2V0VXBsb2FkUGhvdG9NZGwgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1hdGlvbk1kbCA9IF9kWzBdLCBzZXRDb25maXJtYXRpb25NZGwgPSBfZFsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBlXzE7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL25ldy1wYWdlL3BhZ2UtdGh1bWJuYWlsL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSksIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9iLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQaG90bygoX2EgPSByZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UucGFnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBob3RvX3VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZV8xLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpbj9yZWRpcmVjdGVkPW5ldy1wYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9pbml0aWFsLXN0ZXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9KSgpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBEZWxldGUgdGhlIHBob3RvIHVzZXIncyB1cGxvYWRlZFxuICAgIHZhciBkZWxldGVQYWdlUGhvdG8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8yO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJSZW1vdmluZyB0aGUgcGhvdG8uLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZGVsZXRlKFwiL3BhZ2VzL1wiLmNvbmNhdCh1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSwgXCIvcGhvdG8/dHlwZT1kcmFmdFwiKSwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG8oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlBob3RvIHdhcyBzdWNjZXNzZnVsbHkgcmVtb3ZlZC5cIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVGhlcmUgd2FzIHByb2JsZW0gd2l0aCByZW1vdmluZyB0aGUgcGhvdG8uXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25CYWNrQnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF2aWdhdGUoXCIvbmV3LXBhZ2UvcGFnZS1jb250ZW50cz9pZD1cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZikpKTtcbiAgICB9O1xuICAgIHZhciBvbk5leHRCdXR0b25DbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuYXZpZ2F0ZShcIi9uZXctcGFnZS9hdHRhY2gtZmlsZXM/aWQ9XCIuY29uY2F0KHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpKSk7XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2FkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKTtcbiAgICAgICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0IGJ1dHRvbi10ZXh0LS1iaWcgYS0xMVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJhY2tCdXR0b25DbGlja2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWFycm93LWxlZnRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgQmFja1wiXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiQ2hvb3NlIGEgUGFnZSBUaHVtYm5haWxcIiB9KSkgfSkpLCBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTE4XCIgfSwgeyBjaGlsZHJlbjogcGhvdG9cbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJUaGlzIHBob3RvIHdpbGwgYmUgdXNlZCBmb3IgeW91ciBwYWdlIHRodW1ibmFpbDpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlVwbG9hZCBhIGJlYXV0aWZ1bCBwaG90byB0byBzZXQgYXMgYSB0aHVtYm5haWwgb2YgeW91ciBwYWdlOlwiIH0pKSwgcGhvdG8gJiYgX2pzeChcImltZ1wiLCB7IHNyYzogcGhvdG8gfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5ldy1wYWdlLXRodW1ibmFpbF9fYWN0aW9uLWJ1dHRvbnNcIiB9LCB7IGNoaWxkcmVuOiBbcGhvdG8gJiYgKF9qc3hzKEJ1dHRvbiwgX19hc3NpZ24oeyBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1kbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10cmFzaCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBcIlJlbW92ZSBQYWdlIFBob3RvXCJdIH0pKSksIF9qc3hzKEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIHJvdW5kZWQ6IHRydWUsIHNpemU6IFwic21hbGxcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRQaG90b01kbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS11cGxvYWQgYnV0dG9uX19pY29uLWxlZnRcIiB9KSwgcGhvdG8gPyBcIkNoYW5nZSBQYWdlIFBob3RvXCIgOiBcIlVwbG9hZCBhIFBhZ2UgUGhvdG9cIl0gfSkpXSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTggaXRhbGljXCIgfSwgeyBjaGlsZHJlbjogcGhvdG9cbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJZb3UgY2FuIGFsd2F5cyBjaGFuZ2Ugb3IgcmVtb3ZlIHlvdXIgcGFnZSBwaG90byBhZnRlciB5b3UgcHVibGlzaGVkIHlvdXIgcGFnZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIllvdSBjYW4gYWx3YXlzIHVwbG9hZCBhIG5ldyBwaG90byBhZnRlciB5b3UgcHVibGlzaGVkIHlvdXIgcGFnZSwgeW91IGNhbiBhbHNvIHNraXAgdXBsb2FkaW5nIGEgcGhvdG8gZm9yIG5vdyBhbmQgZG8gaXQgYWZ0ZXIgcHVibGlzaGluZyB0aGUgcGFnZS5cIiB9KSksIF9qc3goVXBsb2FkUGhvdG8sIHsgb3BlbjogdXBsb2FkUGhvdG9NZGwsIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZFBob3RvTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaGVhZGVyOiBcIlVwbG9hZCBQYWdlIFBob3RvXCIsIHRleHQ6IFwiVXBsb2FkIGEgc3R1bm5pbmcgcGhvdG8gdG8gc2V0IGFzIHRoZSBmZWF0dXJlZCBpbWFnZSBvZiB5b3VyIHBhZ2U6XCIsIGNyb3BNc2c6IFwiQ2hvb3NlIGFuIGFyZWEgdG8gYmUgc2hvd24gYXMgZm9yIHRoZSBwYWdlIHRodW1ibmFpbCwgdGhpcyB3b24ndFxcbiAgICAgICAgICAgICAgICBjcm9wIHlvdXIgaW1hZ2UsIHRoaXMgaXMganVzdCB0aGUgYXJlYSB0aGF0IHdpbGwgYmUgc2hvd24gYXMgdGhlXFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5cIiwgaW5wdXRMYWJlbE5hbWU6IFwiQ2hvb3NlIGEgcGhvdG9cIiwgdXJsOiBcIi9wYWdlcy9cIi5jb25jYXQodXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJpZFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZiksIFwiL3Bob3RvP3R5cGU9ZHJhZnRcIiksIG1pbldpZHRoOiAxMjAwLCBtaW5IZWlnaHQ6IDY3NSwgc2l6ZTogODAwMDAwMCwgYXNwZWN0UmF0aW86IDQ4IC8gMjcsIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpbWFnZVVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG8oaW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pLCBwaG90byAmJiAoX2pzeChDb25maXJtTW9kYWwsIHsgaGVhZGVyOiBcIlJlbW92ZSB5b3VyIHBhZ2UgcGhvdG9cIiwgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBwYWdlIHBob3RvP1xcbiAgICAgICAgICAgICAgICAgIFRoaXMgY2Fubm90IGJlIHVuZG8uXCIsIG9wZW46IGNvbmZpcm1hdGlvbk1kbCwgb25Db25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVQYWdlUGhvdG8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25NZGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV4dEJ1dHRvbkNsaWNrZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNvbG9yOiBwaG90byA/IFwiYmx1ZVwiIDogXCJkZWZhdWx0XCIgfSwgeyBjaGlsZHJlbjogW3Bob3RvID8gXCJOZXh0XCIgOiBcIlNraXBcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0IGJ1dHRvbl9faWNvbi1yaWdodFwiIH0pXSB9KSkgfSkpXSB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChQcm9ncmVzc0JhciwgeyB3aWR0aDogNjAgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb250ZW50cygpIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdfX25vdGUtYm94XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCB7IGNoaWxkcmVuOiBcIldoeSBpdCdzIGltcG9ydGFudCB0byBjaG9vc2UgYSB0aHVtYm5haWwgZm9yIHlvdXIgcGFnZT9cIiB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJBIGdvb2QgcGFnZSB0aHVtYm5haWwgd2lsbCBoZWxwIHRvIGluY3JlYXNlIHlvdXIgcGFnZSB2aWV3cyBhbmQgbGV0IG90aGVyIHVzZXJzIGRpc3Rpbmd1aXNoIHlvdXIgcGFnZSBtb3JlIGFuZCBtYWtlIGl0IG1vcmUgcmVjb2duaXphYmxlIGlmIHRoZXkgYWRkIGl0IHRvIHRoZWlyIGNvbGxlY3Rpb25zIG9yIG90aGVyIHBsYWNlcy5cIiB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIldlIGhpZ2hseSBzdWdnZXN0IHlvdSBjaG9vc2UgYSBwaG90byBmb3IgeW91ciBwYWdlIHRodW1ibmFpbC5cIiB9KSB9KV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZVRodW1ibmFpbDtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIFByb2dyZXNzQmFyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGggKyBcIiVcIixcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGlkOiBcIm15UHJvZ3Jlc3NcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgaWQ6IFwibXlCYXJcIiwgc3R5bGU6IHN0eWxlIH0pIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGUsIFJvdXRlLCBSb3V0ZXMsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSW5pdGlhbFN0ZXAgZnJvbSBcIi4vSW5pdGlhbFN0ZXBcIjtcbmltcG9ydCBQYWdlQ29udGVudHMgZnJvbSBcIi4vUGFnZUNvbnRlbnRzXCI7XG5pbXBvcnQgUGFnZVRodW1ibmFpbCBmcm9tIFwiLi9QYWdlVGh1bWJuYWlsXCI7XG5pbXBvcnQgQXR0YWNoRmlsZXMgZnJvbSBcIi4vQXR0YWNoRmlsZXNcIjtcbmltcG9ydCBGaW5hbFN0ZXAgZnJvbSBcIi4vRmluYWxTdGVwXCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XG5mdW5jdGlvbiBOZXdQYWdlKCkge1xuICAgIHJldHVybiAoX2pzeChSb3V0ZXIsIHsgY2hpbGRyZW46IF9qc3hzKFJvdXRlcywgeyBjaGlsZHJlbjogW19qc3goUm91dGUsIHsgcGF0aDogXCIvbmV3LXBhZ2UvaW5pdGlhbC1zdGVwXCIsIGVsZW1lbnQ6IF9qc3goSW5pdGlhbFN0ZXAsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXctcGFnZS9wYWdlLWNvbnRlbnRzXCIsIGVsZW1lbnQ6IF9qc3goUGFnZUNvbnRlbnRzLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvbmV3LXBhZ2UvcGFnZS10aHVtYm5haWxcIiwgZWxlbWVudDogX2pzeChQYWdlVGh1bWJuYWlsLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvbmV3LXBhZ2UvYXR0YWNoLWZpbGVzXCIsIGVsZW1lbnQ6IF9qc3goQXR0YWNoRmlsZXMsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXctcGFnZS9hdHRhY2gtZmlsZXNcIiwgZWxlbWVudDogX2pzeChBdHRhY2hGaWxlcywge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL25ldy1wYWdlL2ZpbmFsLXN0ZXBcIiwgZWxlbWVudDogX2pzeChGaW5hbFN0ZXAsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXctcGFnZS9tZXNzYWdlXCIsIGVsZW1lbnQ6IF9qc3goTWVzc2FnZSwge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL25ldy1wYWdlXCIsIGVsZW1lbnQ6IF9qc3goTmF2aWdhdGUsIHsgdG86IFwiL25ldy1wYWdlL2luaXRpYWwtc3RlcFwiLCByZXBsYWNlOiB0cnVlIH0pIH0pXSB9KSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBOZXdQYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9