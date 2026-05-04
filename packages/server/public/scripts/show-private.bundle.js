"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["show-private"],{

/***/ "./src/views/show-page/Actions.tsx":
/*!*****************************************!*\
  !*** ./src/views/show-page/Actions.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageSlice */ "./src/views/show-page/pageSlice.ts");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userSlice */ "./src/views/show-page/userSlice.ts");
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







var Actions = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), titleTyped = _a[0], setTitleTyped = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), deletePageMdl = _b[0], setDeletePageMdl = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), deleteButtonDisabled = _c[0], setDeleteButtonDisabled = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), addToCollectionModal = _d[0], setAddToCollectionModal = _d[1];
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectId);
    var title = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectContents).title;
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectStatus);
    var readLater = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectReadLater);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (props.type && props.type === "public") {
            dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchPublicPage)());
        }
        // Send a view request to server
        setTimeout(function () {
            if (pageId)
                sendViewRequest(pageId);
        }, 15000);
    }, [loading]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (titleTyped.toLowerCase().replace(/\s/g, "") ===
            title.toLowerCase().replace(/\s/g, "")) {
            setDeleteButtonDisabled(false);
        }
        else {
            setDeleteButtonDisabled(true);
        }
    }, [titleTyped]);
    var sendViewRequest = function (pageId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request.post("/views/".concat(pageId), null, { auth: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var onDeletePageSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request["delete"]("/pages/".concat(pageId), { auth: true })];
                case 1:
                    _a.sent();
                    location.reload();
                    return [2 /*return*/];
            }
        });
    }); };
    var renderContent = function () {
        if (status === "owner") {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Modal, __assign({ header: "Delete your page", open: deletePageMdl, onClose: function () {
                            setDeletePageMdl(false);
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "margin-bottom-08" }, { children: "Are you sure that you want to delete your page? All of the comments and likes will be deleted." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ onSubmit: function (event) {
                                    event.preventDefault();
                                    onDeletePageSubmit();
                                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "margin-bottom-08" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "text", placeholder: "Type in your page title to confirm to delete it", onChange: function (value) {
                                                setTitleTyped(value);
                                            }, value: titleTyped, required: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: title.toLowerCase() }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "red", rounded: true, type: "submit", id: "deleteButton", disabled: deleteButtonDisabled }, { children: "Delete" })) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                            var url;
                            if (props.type === "public") {
                                url = "/public-pages/".concat(window.location.pathname.split("/")[2], "/edit?t=public");
                            }
                            else if (props.type === "private") {
                                url = "/".concat(window.location.pathname.split("/")[1], "/").concat(window.location.pathname.split("/")[2], "/edit?t=private");
                            }
                            window.location.href = "".concat(url);
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil-square-o" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                            setDeletePageMdl(true);
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-trash-o" }) }))] }));
        }
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.toggleReadLater)(pageId));
            } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: rlBtnClass }) })));
    };
    if (loading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    // read later button class
    var rlBtnClass = readLater ? "fa fa-bookmark" : "fa fa-bookmark-o";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.AddToCollection, { open: addToCollectionModal, pageId: pageId, onClose: function () {
                    setAddToCollectionModal(false);
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__header__actions" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                            if (status === "spectator") {
                                console.log("DSd");
                                (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("Please login to be able to add pages to collections.");
                            }
                            else {
                                setAddToCollectionModal(true);
                            }
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-th-large", "aria-hidden": "true" }) })), renderContent()] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);


/***/ }),

/***/ "./src/views/show-page/AttachFiles.tsx":
/*!*********************************************!*\
  !*** ./src/views/show-page/AttachFiles.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageSlice */ "./src/views/show-page/pageSlice.ts");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userSlice */ "./src/views/show-page/userSlice.ts");
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
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), uploadAttachFilesModalOpen = _a[0], setUploadAttachFilesModalOpen = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmModalOpen = _b[0], setConfirmModalOpen = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmModalFileId = _c[0], setConfirmModalFileId = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmModalFileName = _d[0], setConfirmModalFileName = _d[1];
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectId);
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var attachFiles = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectAttachFiles);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    // Render all attach files of the page
    var renderFiles = function () {
        if (status === "owner")
            // If user is the owner of the page
            return attachFiles.map(function (file) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ className: "file-link", href: "/api/pages/".concat(pageId, "/attach-files/").concat(file.name) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-download" }), " " + file.name, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i", onClick: function (e) {
                                // This will prevent the file from starting to get downloaded
                                e.preventDefault();
                                setConfirmModalFileId(String(file.id));
                                setConfirmModalFileName(file.name);
                                setConfirmModalOpen(true);
                            } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-times", "aria-hidden": "true" }) }))] }), file.name));
            });
        // If user is not the owner of the page
        return attachFiles.map(function (file) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ className: "file-link", href: "/api/pages/".concat(pageId, "/attach-files/").concat(file.name) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-download" }), " " + file.name] }), file.name));
        });
    };
    "";
    // Render the add an attach file button
    var renderButton = function () {
        if (status === "owner" && attachFiles.length < 5)
            // If user is the owner of the page
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ color: "blue", size: "small", rounded: true, onClick: function () {
                            setUploadAttachFilesModalOpen(true);
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-upload button__icon-left" }), " Add an Attach File"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.UploadAttachFile, { open: uploadAttachFilesModalOpen, header: "Add an Attach File", text: "You can upload maximum of 5 files 10MB each for every page.", size: 10000000, url: "/pages/".concat(pageId, "/attach-files"), success: function () {
                            dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchAttachFiles)("File uploaded successfully."));
                        }, onClose: function () {
                            setUploadAttachFilesModalOpen(false);
                        } })] }));
        // If viewer is not the owner of the page just return a simple div
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    };
    if (loading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__attach-files" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, __assign({ header: "Remove the attach file", open: confirmModalOpen, onConfirm: function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                setConfirmModalOpen(false);
                                (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Deleting the attach file...");
                                return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request["delete"]("/pages/".concat(pageId, "/attach-files/").concat(confirmModalFileId), {
                                        auth: true,
                                    })];
                            case 1:
                                _a.sent();
                                dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchAttachFiles)("File deleted successfully."));
                                return [2 /*return*/];
                        }
                    });
                }); }, onCancel: function () { return setConfirmModalOpen(false); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Are you sure that you want to delete this attach file", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: ["'", confirmModalFileName, "'"] }), "? Action cannot be undone."] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "file-links" }, { children: renderFiles() })), renderButton(), attachFiles.length === 5 && status === "owner" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: "You can only have 5 attach files for each page, if you want to upload a new one remove one of the attach files first." }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachFiles);


/***/ }),

/***/ "./src/views/show-page/Author.tsx":
/*!****************************************!*\
  !*** ./src/views/show-page/Author.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageSlice */ "./src/views/show-page/pageSlice.ts");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userSlice */ "./src/views/show-page/userSlice.ts");
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







var Author = function () {
    var _a, _b;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationModalOpen = _c[0], setConfirmationModalOpen = _c[1];
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var subscribed = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectSubscribed);
    var author = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectAuthor);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var onSubscribeClicked = function () {
        if (status !== "authenticated")
            return (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.alert)("Please login to be able to subscribe to authors.");
        if (subscribed) {
            setConfirmationModalOpen(true);
        }
        else {
            dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.subscribe)());
        }
    };
    if (loading || !author)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    var userBio = ((_a = author.biography) === null || _a === void 0 ? void 0 : _a.length)
        ? author.biography
        : "This user has not added a biography.";
    var bioClassName = ((_b = author.biography) === null || _b === void 0 ? void 0 : _b.length)
        ? "page__author__bio"
        : "page__author__bio italic";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, { header: "Unsubscribe from ".concat(author.username, "?"), message: "Are you sure that you want to unsubscribe from this author?", open: confirmationModalOpen, onConfirm: function () {
                    setConfirmationModalOpen(false);
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Unsubscribing...");
                    dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.subscribe)());
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                }, onCancel: function () {
                    setConfirmationModalOpen(false);
                }, btnName: "Unsubscribe" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__author" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__author__head" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: author.photoUrl || _pagser_common__WEBPACK_IMPORTED_MODULE_3__.USER_PLACEHOLDER_IMAGE, id: "user-photo", alt: "Author image", onError: function () {
                                    document.querySelector("#user-photo").src =
                                        _pagser_common__WEBPACK_IMPORTED_MODULE_3__.USER_PLACEHOLDER_IMAGE;
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__author__details" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/users/".concat(author.username), target: "_blank", className: "black-link" }, { children: author.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [author.subscribersCount, " Subscribers"] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page__author__sub" }, { children: status !== "owner" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ color: subscribed ? "default" : "blue", rounded: true, onClick: onSubscribeClicked }, { children: subscribed ? "Subscribed" : "Subscribe" }))) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: bioClassName }, { children: userBio }))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);


/***/ }),

/***/ "./src/views/show-page/Photo.tsx":
/*!***************************************!*\
  !*** ./src/views/show-page/Photo.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pageSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageSlice */ "./src/views/show-page/pageSlice.ts");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userSlice */ "./src/views/show-page/userSlice.ts");
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






var Photo = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), uploadPhotoModalOpen = _a[0], setUploadPhotoModalOpen = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmModalOpen = _b[0], setConfirmModalOpen = _b[1];
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectId);
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_5__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
    var photoUrl = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectPhotoUrl);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [!loading && photoUrl && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page__photo" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: photoUrl, alt: "Page featured image", onLoad: function (e) {
                        e.target.classList.remove("display-none");
                    }, onError: function (e) {
                        e.target.classList.add("display-none");
                    } }) }))), !loading && status === "owner" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, { header: "Remove your page photo", message: "Are you really sure that you want to delete your page photo?\n                  This cannot be undone.", open: confirmModalOpen, onConfirm: function () {
                            dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_4__.deletePhoto)());
                            setConfirmModalOpen(false);
                        }, onCancel: function () { return setConfirmModalOpen(false); } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page__photo-actions" }, { children: photoUrl ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "blue", size: "small", rounded: true, 
                                    // className="btn btn-blue btn-sm btn-round margin-bottom-2 margin-right-1"
                                    onClick: function () { return setUploadPhotoModalOpen(true); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-upload button__icon-left" }), "Change Page Photo"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "red", size: "small", rounded: true, 
                                    // className="btn btn-sm btn-round btn-red margin-bottom-2"
                                    onClick: function () { return setConfirmModalOpen(true); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-trash button__icon-left" }), "Remove Page Photo"] }))] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "blue", size: "small", rounded: true, 
                            // className="btn btn-blue btn-sm btn-round margin-bottom-2"
                            onClick: function () { return setUploadPhotoModalOpen(true); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-upload button__icon-left" }), "Upload a Page Photo"] }))) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.UploadPhoto, { open: uploadPhotoModalOpen, header: "Upload Page Photo", text: "Upload a beautiful photo to be set as a featured image of your page:", cropMsg: "Choose an area to be shown as for the page thumbnail, this won't\n                crop your image, this is just the area that will be shown as the\n                thumbnail.", inputLabelName: "Choose a photo", url: "/pages/".concat(pageId, "/photo"), minWidth: 1200, minHeight: 675, size: 8000000, aspectRatio: 48 / 27, success: function (image) { return dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_4__.setPhotoUrl)(image)); }, onClose: function () {
                            setUploadPhotoModalOpen(false);
                        } })] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photo);


/***/ }),

/***/ "./src/views/show-page/Private.tsx":
/*!*****************************************!*\
  !*** ./src/views/show-page/Private.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pageSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageSlice */ "./src/views/show-page/pageSlice.ts");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Actions */ "./src/views/show-page/Actions.tsx");
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Author */ "./src/views/show-page/Author.tsx");
/* harmony import */ var _Ratings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ratings */ "./src/views/show-page/Ratings.tsx");
/* harmony import */ var _Photo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Photo */ "./src/views/show-page/Photo.tsx");
/* harmony import */ var _AttachFiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AttachFiles */ "./src/views/show-page/AttachFiles.tsx");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Comments */ "./src/views/show-page/Comments.tsx");
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











var Private = function () {
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectId);
    var contents = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectContents);
    var date = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectDate);
    var configurations = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_4__.selectConfigurations);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_4__.fetchPrivatePage)());
    }, []);
    var renderBody = function () {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { dangerouslySetInnerHTML: { __html: contents.body } });
    };
    var renderComment = function () {
        if (configurations.comments) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {});
        }
        else {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "normal-paragraph disabled-message-comments center-content" }, { children: "Comments are disabled for this page." })));
        }
    };
    var renderRatings = function () {
        if (configurations.rating) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Ratings__WEBPACK_IMPORTED_MODULE_7__["default"], {});
        }
        else {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "normal-paragraph disabled-message" }, { children: "Ratings are disabled for this page." })));
        }
    };
    var renderAuthor = function () {
        if (!configurations.anonymously) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Author__WEBPACK_IMPORTED_MODULE_6__["default"], {});
        }
        else {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "normal-paragraph disabled-message" }, { children: "This page has been created anonymously." })));
        }
    };
    var renderBriefDes = function () {
        if (contents.briefDescription &&
            contents.briefDescription.replace(/ /g, "").length > 0) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "What's this page about?" }), contents.briefDescription] }));
        }
        else {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
        }
    };
    var renderTarget = function () {
        if (contents.targets && contents.targets.replace(/ /g, "").length > 0) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Who's this page for?" }), contents.targets] }));
        }
        else {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
        }
    };
    if (loading) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })));
    }
    // not found
    if (pageId === "0") {
        document.querySelector("body").classList.add("body-grey");
        document.querySelector("title").innerHTML =
            "Page Not Found | Pagser";
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", __assign({ className: "a-1 center-content" }, { children: ["Sorry but no page with this URL was found. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " Maybe the author has deleted this page."] })));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__header" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Actions__WEBPACK_IMPORTED_MODULE_5__["default"], { type: "private" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", __assign({ className: "page__header__title" }, { children: contents.title })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "page__header__time" }, { children: date }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Photo__WEBPACK_IMPORTED_MODULE_8__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__contents" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__information" }, { children: [renderBriefDes(), renderTarget()] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page__body" }, { children: renderBody() })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AttachFiles__WEBPACK_IMPORTED_MODULE_9__["default"], {})] })), renderAuthor(), renderRatings()] })) })), renderComment(), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Private);


/***/ }),

/***/ "./src/views/show-page/Ratings.tsx":
/*!*****************************************!*\
  !*** ./src/views/show-page/Ratings.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageSlice */ "./src/views/show-page/pageSlice.ts");
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




var Ratings = function () {
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_3__.selectId);
    var ratings = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_3__.selectRatings);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var onRateButtonClick = function (action) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.loadingModal)("Loading...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.patch("/rate/page/".concat(pageId), { rate: action }, { auth: true })];
                case 2:
                    response = (_a.sent());
                    dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_3__.setRatings)(response));
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    if (e_1.status === 401) {
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.alert)("Please login to rate a page.");
                    }
                    else {
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.alert)("An unknown error occurred.");
                    }
                    return [3 /*break*/, 4];
                case 4:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.loadingModal)();
                    return [2 /*return*/];
            }
        });
    }); };
    if (loading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__rating" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "How would you rate this page?" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: ratings.likes }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-big btn-i-blue", onClick: function () {
                                onRateButtonClick("like");
                            } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-thumbs-up" }) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: ratings.dislikes }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-big btn-i-blue", onClick: function () {
                                onRateButtonClick("dislike");
                            } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-thumbs-down" }) }))] })] })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ratings);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksUUFBUSwyQ0FBMkMsR0FBRyx1REFBSyxVQUFVLFdBQVcsc0RBQUksV0FBVyx5QkFBeUIsR0FBRyxzREFBSSxzQkFBc0I7QUFDL1A7QUFDQSwrQkFBK0IsSUFBSSxVQUFVLHNEQUFJLFFBQVEsOEJBQThCLEdBQUcsS0FBSyxHQUFHLHVEQUFLLFVBQVUsV0FBVyxzREFBSSxXQUFXLDRCQUE0QixHQUFHLHNEQUFJLHNCQUFzQjtBQUNwTTtBQUNBLCtCQUErQixJQUFJLFVBQVUsc0RBQUksUUFBUSxnQ0FBZ0MsR0FBRyxLQUFLLElBQUksSUFBSTtBQUN6RztBQUNBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9BY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9zaG93LXBhZ2UvQXR0YWNoRmlsZXMudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9BdXRob3IudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9QaG90by50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3Mvc2hvdy1wYWdlL1ByaXZhdGUudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9SYXRpbmdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNb2RhbCwgSW5wdXQsIEJ1dHRvbiwgQWRkVG9Db2xsZWN0aW9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGFsZXJ0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBzZWxlY3RDb250ZW50cywgc2VsZWN0SWQsIGZldGNoUHVibGljUGFnZSwgc2VsZWN0TG9hZGluZywgdG9nZ2xlUmVhZExhdGVyLCB9IGZyb20gXCIuL3BhZ2VTbGljZVwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzLCBzZWxlY3RSZWFkTGF0ZXIgfSBmcm9tIFwiLi91c2VyU2xpY2VcIjtcbnZhciBBY3Rpb25zID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoXCJcIiksIHRpdGxlVHlwZWQgPSBfYVswXSwgc2V0VGl0bGVUeXBlZCA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgZGVsZXRlUGFnZU1kbCA9IF9iWzBdLCBzZXREZWxldGVQYWdlTWRsID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUodHJ1ZSksIGRlbGV0ZUJ1dHRvbkRpc2FibGVkID0gX2NbMF0sIHNldERlbGV0ZUJ1dHRvbkRpc2FibGVkID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBhZGRUb0NvbGxlY3Rpb25Nb2RhbCA9IF9kWzBdLCBzZXRBZGRUb0NvbGxlY3Rpb25Nb2RhbCA9IF9kWzFdO1xuICAgIHZhciBwYWdlSWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJZCk7XG4gICAgdmFyIHRpdGxlID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q29udGVudHMpLnRpdGxlO1xuICAgIHZhciBzdGF0dXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGF0dXMpO1xuICAgIHZhciByZWFkTGF0ZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RSZWFkTGF0ZXIpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvcHMudHlwZSAmJiBwcm9wcy50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFB1YmxpY1BhZ2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2VuZCBhIHZpZXcgcmVxdWVzdCB0byBzZXJ2ZXJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocGFnZUlkKVxuICAgICAgICAgICAgICAgIHNlbmRWaWV3UmVxdWVzdChwYWdlSWQpO1xuICAgICAgICB9LCAxNTAwMCk7XG4gICAgfSwgW2xvYWRpbmddKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGl0bGVUeXBlZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSA9PT1cbiAgICAgICAgICAgIHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpKSB7XG4gICAgICAgICAgICBzZXREZWxldGVCdXR0b25EaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXREZWxldGVCdXR0b25EaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt0aXRsZVR5cGVkXSk7XG4gICAgdmFyIHNlbmRWaWV3UmVxdWVzdCA9IGZ1bmN0aW9uIChwYWdlSWQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucG9zdChcIi92aWV3cy9cIi5jb25jYXQocGFnZUlkKSwgbnVsbCwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25EZWxldGVQYWdlU3VibWl0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5kZWxldGUoXCIvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCksIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcIm93bmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhNb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiRGVsZXRlIHlvdXIgcGFnZVwiLCBvcGVuOiBkZWxldGVQYWdlTWRsLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlUGFnZU1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tYm90dG9tLTA4XCIgfSwgeyBjaGlsZHJlbjogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBwYWdlPyBBbGwgb2YgdGhlIGNvbW1lbnRzIGFuZCBsaWtlcyB3aWxsIGJlIGRlbGV0ZWQuXCIgfSkpLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVQYWdlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLWJvdHRvbS0wOFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlR5cGUgaW4geW91ciBwYWdlIHRpdGxlIHRvIGNvbmZpcm0gdG8gZGVsZXRlIGl0XCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlVHlwZWQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZTogdGl0bGVUeXBlZCwgcmVxdWlyZWQ6IHRydWUgfSkgfSkpLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IHRpdGxlLnRvTG93ZXJDYXNlKCkgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJyZWRcIiwgcm91bmRlZDogdHJ1ZSwgdHlwZTogXCJzdWJtaXRcIiwgaWQ6IFwiZGVsZXRlQnV0dG9uXCIsIGRpc2FibGVkOiBkZWxldGVCdXR0b25EaXNhYmxlZCB9LCB7IGNoaWxkcmVuOiBcIkRlbGV0ZVwiIH0pKSB9KSldIH0pKV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL3B1YmxpYy1wYWdlcy9cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvZWRpdD90PXB1YmxpY1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvXCIuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0sIFwiL1wiKS5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvZWRpdD90PXByaXZhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJcIi5jb25jYXQodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgfSkgfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVQYWdlTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10cmFzaC1vXCIgfSkgfSkpXSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVSZWFkTGF0ZXIocGFnZUlkKSk7XG4gICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBybEJ0bkNsYXNzIH0pIH0pKSk7XG4gICAgfTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIC8vIHJlYWQgbGF0ZXIgYnV0dG9uIGNsYXNzXG4gICAgdmFyIHJsQnRuQ2xhc3MgPSByZWFkTGF0ZXIgPyBcImZhIGZhLWJvb2ttYXJrXCIgOiBcImZhIGZhLWJvb2ttYXJrLW9cIjtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChBZGRUb0NvbGxlY3Rpb24sIHsgb3BlbjogYWRkVG9Db2xsZWN0aW9uTW9kYWwsIHBhZ2VJZDogcGFnZUlkLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZFRvQ29sbGVjdGlvbk1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19oZWFkZXJfX2FjdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlIGJ0bi1pLWJpZ1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJzcGVjdGF0b3JcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRTZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgbG9naW4gdG8gYmUgYWJsZSB0byBhZGQgcGFnZXMgdG8gY29sbGVjdGlvbnMuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWRkVG9Db2xsZWN0aW9uTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aC1sYXJnZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgcmVuZGVyQ29udGVudCgpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGxvYWRpbmdNb2RhbCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29uZmlybU1vZGFsLCBVcGxvYWRBdHRhY2hGaWxlLCBCdXR0b24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgZmV0Y2hBdHRhY2hGaWxlcywgc2VsZWN0TG9hZGluZywgc2VsZWN0SWQsIHNlbGVjdEF0dGFjaEZpbGVzLCB9IGZyb20gXCIuL3BhZ2VTbGljZVwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzIH0gZnJvbSBcIi4vdXNlclNsaWNlXCI7XG52YXIgQXR0YWNoRmlsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCB1cGxvYWRBdHRhY2hGaWxlc01vZGFsT3BlbiA9IF9hWzBdLCBzZXRVcGxvYWRBdHRhY2hGaWxlc01vZGFsT3BlbiA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZmlybU1vZGFsT3BlbiA9IF9iWzBdLCBzZXRDb25maXJtTW9kYWxPcGVuID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIGNvbmZpcm1Nb2RhbEZpbGVJZCA9IF9jWzBdLCBzZXRDb25maXJtTW9kYWxGaWxlSWQgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybU1vZGFsRmlsZU5hbWUgPSBfZFswXSwgc2V0Q29uZmlybU1vZGFsRmlsZU5hbWUgPSBfZFsxXTtcbiAgICB2YXIgcGFnZUlkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SWQpO1xuICAgIHZhciBzdGF0dXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGF0dXMpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIGF0dGFjaEZpbGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0QXR0YWNoRmlsZXMpO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgLy8gUmVuZGVyIGFsbCBhdHRhY2ggZmlsZXMgb2YgdGhlIHBhZ2VcbiAgICB2YXIgcmVuZGVyRmlsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwib3duZXJcIilcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaXMgdGhlIG93bmVyIG9mIHRoZSBwYWdlXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNoRmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmlsZS1saW5rXCIsIGhyZWY6IFwiL2FwaS9wYWdlcy9cIi5jb25jYXQocGFnZUlkLCBcIi9hdHRhY2gtZmlsZXMvXCIpLmNvbmNhdChmaWxlLm5hbWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1kb3dubG9hZFwiIH0pLCBcIiBcIiArIGZpbGUubmFtZSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcHJldmVudCB0aGUgZmlsZSBmcm9tIHN0YXJ0aW5nIHRvIGdldCBkb3dubG9hZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsRmlsZUlkKFN0cmluZyhmaWxlLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1Nb2RhbEZpbGVOYW1lKGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1Nb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aW1lc1wiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKV0gfSksIGZpbGUubmFtZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vIElmIHVzZXIgaXMgbm90IHRoZSBvd25lciBvZiB0aGUgcGFnZVxuICAgICAgICByZXR1cm4gYXR0YWNoRmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmaWxlLWxpbmtcIiwgaHJlZjogXCIvYXBpL3BhZ2VzL1wiLmNvbmNhdChwYWdlSWQsIFwiL2F0dGFjaC1maWxlcy9cIikuY29uY2F0KGZpbGUubmFtZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWRvd25sb2FkXCIgfSksIFwiIFwiICsgZmlsZS5uYW1lXSB9KSwgZmlsZS5uYW1lKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgXCJcIjtcbiAgICAvLyBSZW5kZXIgdGhlIGFkZCBhbiBhdHRhY2ggZmlsZSBidXR0b25cbiAgICB2YXIgcmVuZGVyQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcIm93bmVyXCIgJiYgYXR0YWNoRmlsZXMubGVuZ3RoIDwgNSlcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaXMgdGhlIG93bmVyIG9mIHRoZSBwYWdlXG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgc2l6ZTogXCJzbWFsbFwiLCByb3VuZGVkOiB0cnVlLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkQXR0YWNoRmlsZXNNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS11cGxvYWQgYnV0dG9uX19pY29uLWxlZnRcIiB9KSwgXCIgQWRkIGFuIEF0dGFjaCBGaWxlXCJdIH0pKSwgX2pzeChVcGxvYWRBdHRhY2hGaWxlLCB7IG9wZW46IHVwbG9hZEF0dGFjaEZpbGVzTW9kYWxPcGVuLCBoZWFkZXI6IFwiQWRkIGFuIEF0dGFjaCBGaWxlXCIsIHRleHQ6IFwiWW91IGNhbiB1cGxvYWQgbWF4aW11bSBvZiA1IGZpbGVzIDEwTUIgZWFjaCBmb3IgZXZlcnkgcGFnZS5cIiwgc2l6ZTogMTAwMDAwMDAsIHVybDogXCIvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCwgXCIvYXR0YWNoLWZpbGVzXCIpLCBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hBdHRhY2hGaWxlcyhcIkZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkQXR0YWNoRmlsZXNNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpO1xuICAgICAgICAvLyBJZiB2aWV3ZXIgaXMgbm90IHRoZSBvd25lciBvZiB0aGUgcGFnZSBqdXN0IHJldHVybiBhIHNpbXBsZSBkaXZcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIH07XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHt9KTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2F0dGFjaC1maWxlc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KENvbmZpcm1Nb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiUmVtb3ZlIHRoZSBhdHRhY2ggZmlsZVwiLCBvcGVuOiBjb25maXJtTW9kYWxPcGVuLCBvbkNvbmZpcm06IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJEZWxldGluZyB0aGUgYXR0YWNoIGZpbGUuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZGVsZXRlKFwiL3BhZ2VzL1wiLmNvbmNhdChwYWdlSWQsIFwiL2F0dGFjaC1maWxlcy9cIikuY29uY2F0KGNvbmZpcm1Nb2RhbEZpbGVJZCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaEF0dGFjaEZpbGVzKFwiRmlsZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pOyB9LCBvbkNhbmNlbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q29uZmlybU1vZGFsT3BlbihmYWxzZSk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGF0dGFjaCBmaWxlXCIsIFwiIFwiLCBfanN4cyhcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBbXCInXCIsIGNvbmZpcm1Nb2RhbEZpbGVOYW1lLCBcIidcIl0gfSksIFwiPyBBY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5cIl0gfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZpbGUtbGlua3NcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJGaWxlcygpIH0pKSwgcmVuZGVyQnV0dG9uKCksIGF0dGFjaEZpbGVzLmxlbmd0aCA9PT0gNSAmJiBzdGF0dXMgPT09IFwib3duZXJcIiAmJiAoX2pzeChcImVtXCIsIHsgY2hpbGRyZW46IFwiWW91IGNhbiBvbmx5IGhhdmUgNSBhdHRhY2ggZmlsZXMgZm9yIGVhY2ggcGFnZSwgaWYgeW91IHdhbnQgdG8gdXBsb2FkIGEgbmV3IG9uZSByZW1vdmUgb25lIG9mIHRoZSBhdHRhY2ggZmlsZXMgZmlyc3QuXCIgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEF0dGFjaEZpbGVzO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvYWRpbmdNb2RhbCwgYWxlcnQsIFVTRVJfUExBQ0VIT0xERVJfSU1BR0UgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCB7IENvbmZpcm1Nb2RhbCwgQnV0dG9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHN1YnNjcmliZSwgc2VsZWN0TG9hZGluZywgc2VsZWN0QXV0aG9yIH0gZnJvbSBcIi4vcGFnZVNsaWNlXCI7XG5pbXBvcnQgeyBzZWxlY3RTdGF0dXMsIHNlbGVjdFN1YnNjcmliZWQgfSBmcm9tIFwiLi91c2VyU2xpY2VcIjtcbnZhciBBdXRob3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1hdGlvbk1vZGFsT3BlbiA9IF9jWzBdLCBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4gPSBfY1sxXTtcbiAgICB2YXIgc3RhdHVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3RhdHVzKTtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBzdWJzY3JpYmVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3Vic2NyaWJlZCk7XG4gICAgdmFyIGF1dGhvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEF1dGhvcik7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgb25TdWJzY3JpYmVDbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBcImF1dGhlbnRpY2F0ZWRcIilcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBsb2dpbiB0byBiZSBhYmxlIHRvIHN1YnNjcmliZSB0byBhdXRob3JzLlwiKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHN1YnNjcmliZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGxvYWRpbmcgfHwgIWF1dGhvcilcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIHZhciB1c2VyQmlvID0gKChfYSA9IGF1dGhvci5iaW9ncmFwaHkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpXG4gICAgICAgID8gYXV0aG9yLmJpb2dyYXBoeVxuICAgICAgICA6IFwiVGhpcyB1c2VyIGhhcyBub3QgYWRkZWQgYSBiaW9ncmFwaHkuXCI7XG4gICAgdmFyIGJpb0NsYXNzTmFtZSA9ICgoX2IgPSBhdXRob3IuYmlvZ3JhcGh5KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGVuZ3RoKVxuICAgICAgICA/IFwicGFnZV9fYXV0aG9yX19iaW9cIlxuICAgICAgICA6IFwicGFnZV9fYXV0aG9yX19iaW8gaXRhbGljXCI7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KENvbmZpcm1Nb2RhbCwgeyBoZWFkZXI6IFwiVW5zdWJzY3JpYmUgZnJvbSBcIi5jb25jYXQoYXV0aG9yLnVzZXJuYW1lLCBcIj9cIiksIG1lc3NhZ2U6IFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gdW5zdWJzY3JpYmUgZnJvbSB0aGlzIGF1dGhvcj9cIiwgb3BlbjogY29uZmlybWF0aW9uTW9kYWxPcGVuLCBvbkNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKFwiVW5zdWJzY3JpYmluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICB9LCBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIGJ0bk5hbWU6IFwiVW5zdWJzY3JpYmVcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXV0aG9yXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2F1dGhvcl9faGVhZFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgc3JjOiBhdXRob3IucGhvdG9VcmwgfHwgVVNFUl9QTEFDRUhPTERFUl9JTUFHRSwgaWQ6IFwidXNlci1waG90b1wiLCBhbHQ6IFwiQXV0aG9yIGltYWdlXCIsIG9uRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlci1waG90b1wiKS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVTRVJfUExBQ0VIT0xERVJfSU1BR0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2F1dGhvcl9fZGV0YWlsc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiL3VzZXJzL1wiLmNvbmNhdChhdXRob3IudXNlcm5hbWUpLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzTmFtZTogXCJibGFjay1saW5rXCIgfSwgeyBjaGlsZHJlbjogYXV0aG9yLm5hbWUgfSkpLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbYXV0aG9yLnN1YnNjcmliZXJzQ291bnQsIFwiIFN1YnNjcmliZXJzXCJdIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXV0aG9yX19zdWJcIiB9LCB7IGNoaWxkcmVuOiBzdGF0dXMgIT09IFwib3duZXJcIiAmJiAoX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IHN1YnNjcmliZWQgPyBcImRlZmF1bHRcIiA6IFwiYmx1ZVwiLCByb3VuZGVkOiB0cnVlLCBvbkNsaWNrOiBvblN1YnNjcmliZUNsaWNrZWQgfSwgeyBjaGlsZHJlbjogc3Vic2NyaWJlZCA/IFwiU3Vic2NyaWJlZFwiIDogXCJTdWJzY3JpYmVcIiB9KSkpIH0pKV0gfSkpLCBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogYmlvQ2xhc3NOYW1lIH0sIHsgY2hpbGRyZW46IHVzZXJCaW8gfSkpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBdXRob3I7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwsIFVwbG9hZFBob3RvLCBCdXR0b24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgZGVsZXRlUGhvdG8sIHNldFBob3RvVXJsLCBzZWxlY3RQaG90b1VybCwgc2VsZWN0TG9hZGluZywgc2VsZWN0SWQsIH0gZnJvbSBcIi4vcGFnZVNsaWNlXCI7XG5pbXBvcnQgeyBzZWxlY3RTdGF0dXMgfSBmcm9tIFwiLi91c2VyU2xpY2VcIjtcbnZhciBQaG90byA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIHVwbG9hZFBob3RvTW9kYWxPcGVuID0gX2FbMF0sIHNldFVwbG9hZFBob3RvTW9kYWxPcGVuID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBjb25maXJtTW9kYWxPcGVuID0gX2JbMF0sIHNldENvbmZpcm1Nb2RhbE9wZW4gPSBfYlsxXTtcbiAgICB2YXIgcGFnZUlkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SWQpO1xuICAgIHZhciBzdGF0dXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGF0dXMpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIHBob3RvVXJsID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGhvdG9VcmwpO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogWyFsb2FkaW5nICYmIHBob3RvVXJsICYmIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX3Bob3RvXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IHNyYzogcGhvdG9VcmwsIGFsdDogXCJQYWdlIGZlYXR1cmVkIGltYWdlXCIsIG9uTG9hZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIG9uRXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSksICFsb2FkaW5nICYmIHN0YXR1cyA9PT0gXCJvd25lclwiICYmIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQ29uZmlybU1vZGFsLCB7IGhlYWRlcjogXCJSZW1vdmUgeW91ciBwYWdlIHBob3RvXCIsIG1lc3NhZ2U6IFwiQXJlIHlvdSByZWFsbHkgc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyIHBhZ2UgcGhvdG8/XFxuICAgICAgICAgICAgICAgICAgVGhpcyBjYW5ub3QgYmUgdW5kb25lLlwiLCBvcGVuOiBjb25maXJtTW9kYWxPcGVuLCBvbkNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChkZWxldGVQaG90bygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRDb25maXJtTW9kYWxPcGVuKGZhbHNlKTsgfSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19waG90by1hY3Rpb25zXCIgfSwgeyBjaGlsZHJlbjogcGhvdG9VcmwgPyAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIGJ0bi1zbSBidG4tcm91bmQgbWFyZ2luLWJvdHRvbS0yIG1hcmdpbi1yaWdodC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFVwbG9hZFBob3RvTW9kYWxPcGVuKHRydWUpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS11cGxvYWQgYnV0dG9uX19pY29uLWxlZnRcIiB9KSwgXCJDaGFuZ2UgUGFnZSBQaG90b1wiXSB9KSksIF9qc3hzKEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJyZWRcIiwgc2l6ZTogXCJzbWFsbFwiLCByb3VuZGVkOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXJvdW5kIGJ0bi1yZWQgbWFyZ2luLWJvdHRvbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENvbmZpcm1Nb2RhbE9wZW4odHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRyYXNoIGJ1dHRvbl9faWNvbi1sZWZ0XCIgfSksIFwiUmVtb3ZlIFBhZ2UgUGhvdG9cIl0gfSkpXSB9KSkgOiAoX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgc2l6ZTogXCJzbWFsbFwiLCByb3VuZGVkOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgYnRuLXNtIGJ0bi1yb3VuZCBtYXJnaW4tYm90dG9tLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFVwbG9hZFBob3RvTW9kYWxPcGVuKHRydWUpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS11cGxvYWQgYnV0dG9uX19pY29uLWxlZnRcIiB9KSwgXCJVcGxvYWQgYSBQYWdlIFBob3RvXCJdIH0pKSkgfSkpLCBfanN4KFVwbG9hZFBob3RvLCB7IG9wZW46IHVwbG9hZFBob3RvTW9kYWxPcGVuLCBoZWFkZXI6IFwiVXBsb2FkIFBhZ2UgUGhvdG9cIiwgdGV4dDogXCJVcGxvYWQgYSBiZWF1dGlmdWwgcGhvdG8gdG8gYmUgc2V0IGFzIGEgZmVhdHVyZWQgaW1hZ2Ugb2YgeW91ciBwYWdlOlwiLCBjcm9wTXNnOiBcIkNob29zZSBhbiBhcmVhIHRvIGJlIHNob3duIGFzIGZvciB0aGUgcGFnZSB0aHVtYm5haWwsIHRoaXMgd29uJ3RcXG4gICAgICAgICAgICAgICAgY3JvcCB5b3VyIGltYWdlLCB0aGlzIGlzIGp1c3QgdGhlIGFyZWEgdGhhdCB3aWxsIGJlIHNob3duIGFzIHRoZVxcbiAgICAgICAgICAgICAgICB0aHVtYm5haWwuXCIsIGlucHV0TGFiZWxOYW1lOiBcIkNob29zZSBhIHBob3RvXCIsIHVybDogXCIvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCwgXCIvcGhvdG9cIiksIG1pbldpZHRoOiAxMjAwLCBtaW5IZWlnaHQ6IDY3NSwgc2l6ZTogODAwMDAwMCwgYXNwZWN0UmF0aW86IDQ4IC8gMjcsIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpbWFnZSkgeyByZXR1cm4gZGlzcGF0Y2goc2V0UGhvdG9VcmwoaW1hZ2UpKTsgfSwgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZFBob3RvTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBob3RvO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyBmZXRjaFByaXZhdGVQYWdlLCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RJZCwgc2VsZWN0Q29udGVudHMsIHNlbGVjdERhdGUsIHNlbGVjdENvbmZpZ3VyYXRpb25zLCB9IGZyb20gXCIuL3BhZ2VTbGljZVwiO1xuaW1wb3J0IEFjdGlvbnMgZnJvbSBcIi4vQWN0aW9uc1wiO1xuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9BdXRob3JcIjtcbmltcG9ydCBSYXRpbmdzIGZyb20gXCIuL1JhdGluZ3NcIjtcbmltcG9ydCBQaG90byBmcm9tIFwiLi9QaG90b1wiO1xuaW1wb3J0IEF0dGFjaEZpbGVzIGZyb20gXCIuL0F0dGFjaEZpbGVzXCI7XG5pbXBvcnQgQ29tbWVudHMgZnJvbSBcIi4vQ29tbWVudHNcIjtcbnZhciBQcml2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIHBhZ2VJZCA9IHVzZVNlbGVjdG9yKHNlbGVjdElkKTtcbiAgICB2YXIgY29udGVudHMgPSB1c2VTZWxlY3RvcihzZWxlY3RDb250ZW50cyk7XG4gICAgdmFyIGRhdGUgPSB1c2VTZWxlY3RvcihzZWxlY3REYXRlKTtcbiAgICB2YXIgY29uZmlndXJhdGlvbnMgPSB1c2VTZWxlY3RvcihzZWxlY3RDb25maWd1cmF0aW9ucyk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByaXZhdGVQYWdlKCkpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVuZGVyQm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9qc3goXCJwXCIsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBjb250ZW50cy5ib2R5IH0gfSk7XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQ29tbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25zLmNvbW1lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChDb21tZW50cywge30pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJub3JtYWwtcGFyYWdyYXBoIGRpc2FibGVkLW1lc3NhZ2UtY29tbWVudHMgY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBcIkNvbW1lbnRzIGFyZSBkaXNhYmxlZCBmb3IgdGhpcyBwYWdlLlwiIH0pKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZW5kZXJSYXRpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbnMucmF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChSYXRpbmdzLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5vcm1hbC1wYXJhZ3JhcGggZGlzYWJsZWQtbWVzc2FnZVwiIH0sIHsgY2hpbGRyZW46IFwiUmF0aW5ncyBhcmUgZGlzYWJsZWQgZm9yIHRoaXMgcGFnZS5cIiB9KSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQXV0aG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb25zLmFub255bW91c2x5KSB7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChBdXRob3IsIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibm9ybWFsLXBhcmFncmFwaCBkaXNhYmxlZC1tZXNzYWdlXCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIHBhZ2UgaGFzIGJlZW4gY3JlYXRlZCBhbm9ueW1vdXNseS5cIiB9KSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQnJpZWZEZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZW50cy5icmllZkRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICBjb250ZW50cy5icmllZkRlc2NyaXB0aW9uLnJlcGxhY2UoLyAvZywgXCJcIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIldoYXQncyB0aGlzIHBhZ2UgYWJvdXQ/XCIgfSksIGNvbnRlbnRzLmJyaWVmRGVzY3JpcHRpb25dIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHt9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlbmRlclRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRlbnRzLnRhcmdldHMgJiYgY29udGVudHMudGFyZ2V0cy5yZXBsYWNlKC8gL2csIFwiXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJXaG8ncyB0aGlzIHBhZ2UgZm9yP1wiIH0pLCBjb250ZW50cy50YXJnZXRzXSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX2pzeChcImRpdlwiLCB7fSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtYXJnaW4tdG9wLTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpO1xuICAgIH1cbiAgICAvLyBub3QgZm91bmRcbiAgICBpZiAocGFnZUlkID09PSBcIjBcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiYm9keS1ncmV5XCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiUGFnZSBOb3QgRm91bmQgfCBQYWdzZXJcIjtcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMSBjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFtcIlNvcnJ5IGJ1dCBubyBwYWdlIHdpdGggdGhpcyBVUkwgd2FzIGZvdW5kLiBcIiwgX2pzeChcImJyXCIsIHt9KSwgXCIgTWF5YmUgdGhlIGF1dGhvciBoYXMgZGVsZXRlZCB0aGlzIHBhZ2UuXCJdIH0pKSk7XG4gICAgfVxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19oZWFkZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChBY3Rpb25zLCB7IHR5cGU6IFwicHJpdmF0ZVwiIH0pLCBfanN4KFwiaDFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9faGVhZGVyX190aXRsZVwiIH0sIHsgY2hpbGRyZW46IGNvbnRlbnRzLnRpdGxlIH0pKSwgX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9faGVhZGVyX190aW1lXCIgfSwgeyBjaGlsZHJlbjogZGF0ZSB9KSldIH0pKSwgX2pzeChQaG90bywge30pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19jb250ZW50c1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19pbmZvcm1hdGlvblwiIH0sIHsgY2hpbGRyZW46IFtyZW5kZXJCcmllZkRlcygpLCByZW5kZXJUYXJnZXQoKV0gfSkpLCBfanN4KFwiaHJcIiwge30pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2JvZHlcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJCb2R5KCkgfSkpLCBfanN4KEF0dGFjaEZpbGVzLCB7fSldIH0pKSwgcmVuZGVyQXV0aG9yKCksIHJlbmRlclJhdGluZ3MoKV0gfSkpIH0pKSwgcmVuZGVyQ29tbWVudCgpLCBfanN4KFwiYnJcIiwge30pLCBfanN4KFwiYnJcIiwge30pLCBfanN4KFwiYnJcIiwge30pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9hZGluZ01vZGFsLCBhbGVydCwgcmVxdWVzdCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgc2VsZWN0TG9hZGluZywgc2VsZWN0SWQsIHNlbGVjdFJhdGluZ3MsIHNldFJhdGluZ3MsIH0gZnJvbSBcIi4vcGFnZVNsaWNlXCI7XG52YXIgUmF0aW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBwYWdlSWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJZCk7XG4gICAgdmFyIHJhdGluZ3MgPSB1c2VTZWxlY3RvcihzZWxlY3RSYXRpbmdzKTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHZhciBvblJhdGVCdXR0b25DbGljayA9IGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXNwb25zZSwgZV8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJMb2FkaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LnBhdGNoKFwiL3JhdGUvcGFnZS9cIi5jb25jYXQocGFnZUlkKSwgeyByYXRlOiBhY3Rpb24gfSwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFJhdGluZ3MocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzEuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGxvZ2luIHRvIHJhdGUgYSBwYWdlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19yYXRpbmdcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJIb3cgd291bGQgeW91IHJhdGUgdGhpcyBwYWdlP1wiIH0pLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogcmF0aW5ncy5saWtlcyB9KSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1iaWcgYnRuLWktYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0ZUJ1dHRvbkNsaWNrKFwibGlrZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRodW1icy11cFwiIH0pIH0pKV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiByYXRpbmdzLmRpc2xpa2VzIH0pLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJpZyBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlQnV0dG9uQ2xpY2soXCJkaXNsaWtlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdGh1bWJzLWRvd25cIiB9KSB9KSldIH0pXSB9KSkgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJhdGluZ3M7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=