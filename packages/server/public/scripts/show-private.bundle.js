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
                                setConfirmModalFileId(file._id);
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
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationModalOpen = _a[0], setConfirmationModalOpen = _a[1];
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
    if (loading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    var userBio = author.biography.length
        ? author.biography
        : "This user has not added a biography.";
    var bioClassName = author.biography.length
        ? "page__author__bio"
        : "page__author__bio italic";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, { header: "Unsubscribe from ".concat(author.username, "?"), message: "Are you sure that you want to unsubscribe from this author?", open: confirmationModalOpen, onConfirm: function () {
                    setConfirmationModalOpen(false);
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Unsubscribing...");
                    dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.subscribe)());
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                }, onCancel: function () {
                    setConfirmationModalOpen(false);
                }, btnName: "Unsubscribe" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__author" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__author__head" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: author.photoUrl, id: "user-photo", alt: "Author image", onError: function () {
                                    document.querySelector("#user-photo").src =
                                        "/images/users/placeholder.png";
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [!loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page__photo" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: photoUrl, alt: "Page featured image", onLoad: function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0RBQUksV0FBVyx5QkFBeUIsR0FBRyxzREFBSSxzQkFBc0I7QUFDL1A7QUFDQSwrQkFBK0IsSUFBSSxVQUFVLHNEQUFJLFFBQVEsOEJBQThCLEdBQUcsS0FBSyxHQUFHLHVEQUFLLFVBQVUsV0FBVyxzREFBSSxXQUFXLDRCQUE0QixHQUFHLHNEQUFJLHNCQUFzQjtBQUNwTTtBQUNBLCtCQUErQixJQUFJLFVBQVUsc0RBQUksUUFBUSxnQ0FBZ0MsR0FBRyxLQUFLLElBQUksSUFBSTtBQUN6RztBQUNBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9BY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9zaG93LXBhZ2UvQXR0YWNoRmlsZXMudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9BdXRob3IudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9QaG90by50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3Mvc2hvdy1wYWdlL1ByaXZhdGUudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9SYXRpbmdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNb2RhbCwgSW5wdXQsIEJ1dHRvbiwgQWRkVG9Db2xsZWN0aW9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGFsZXJ0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBzZWxlY3RDb250ZW50cywgc2VsZWN0SWQsIGZldGNoUHVibGljUGFnZSwgc2VsZWN0TG9hZGluZywgdG9nZ2xlUmVhZExhdGVyLCB9IGZyb20gXCIuL3BhZ2VTbGljZVwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzLCBzZWxlY3RSZWFkTGF0ZXIgfSBmcm9tIFwiLi91c2VyU2xpY2VcIjtcbnZhciBBY3Rpb25zID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoXCJcIiksIHRpdGxlVHlwZWQgPSBfYVswXSwgc2V0VGl0bGVUeXBlZCA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgZGVsZXRlUGFnZU1kbCA9IF9iWzBdLCBzZXREZWxldGVQYWdlTWRsID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUodHJ1ZSksIGRlbGV0ZUJ1dHRvbkRpc2FibGVkID0gX2NbMF0sIHNldERlbGV0ZUJ1dHRvbkRpc2FibGVkID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBhZGRUb0NvbGxlY3Rpb25Nb2RhbCA9IF9kWzBdLCBzZXRBZGRUb0NvbGxlY3Rpb25Nb2RhbCA9IF9kWzFdO1xuICAgIHZhciBwYWdlSWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJZCk7XG4gICAgdmFyIHRpdGxlID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q29udGVudHMpLnRpdGxlO1xuICAgIHZhciBzdGF0dXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGF0dXMpO1xuICAgIHZhciByZWFkTGF0ZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RSZWFkTGF0ZXIpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvcHMudHlwZSAmJiBwcm9wcy50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFB1YmxpY1BhZ2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2VuZCBhIHZpZXcgcmVxdWVzdCB0byBzZXJ2ZXJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocGFnZUlkKVxuICAgICAgICAgICAgICAgIHNlbmRWaWV3UmVxdWVzdChwYWdlSWQpO1xuICAgICAgICB9LCAxNTAwMCk7XG4gICAgfSwgW2xvYWRpbmddKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGl0bGVUeXBlZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSA9PT1cbiAgICAgICAgICAgIHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpKSB7XG4gICAgICAgICAgICBzZXREZWxldGVCdXR0b25EaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXREZWxldGVCdXR0b25EaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt0aXRsZVR5cGVkXSk7XG4gICAgdmFyIHNlbmRWaWV3UmVxdWVzdCA9IGZ1bmN0aW9uIChwYWdlSWQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucG9zdChcIi92aWV3cy9cIi5jb25jYXQocGFnZUlkKSwgbnVsbCwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25EZWxldGVQYWdlU3VibWl0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5kZWxldGUoXCIvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCksIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcIm93bmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhNb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiRGVsZXRlIHlvdXIgcGFnZVwiLCBvcGVuOiBkZWxldGVQYWdlTWRsLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlUGFnZU1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tYm90dG9tLTA4XCIgfSwgeyBjaGlsZHJlbjogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBwYWdlPyBBbGwgb2YgdGhlIGNvbW1lbnRzIGFuZCBsaWtlcyB3aWxsIGJlIGRlbGV0ZWQuXCIgfSkpLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVQYWdlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLWJvdHRvbS0wOFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlR5cGUgaW4geW91ciBwYWdlIHRpdGxlIHRvIGNvbmZpcm0gdG8gZGVsZXRlIGl0XCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlVHlwZWQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZTogdGl0bGVUeXBlZCwgcmVxdWlyZWQ6IHRydWUgfSkgfSkpLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IHRpdGxlLnRvTG93ZXJDYXNlKCkgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJyZWRcIiwgcm91bmRlZDogdHJ1ZSwgdHlwZTogXCJzdWJtaXRcIiwgaWQ6IFwiZGVsZXRlQnV0dG9uXCIsIGRpc2FibGVkOiBkZWxldGVCdXR0b25EaXNhYmxlZCB9LCB7IGNoaWxkcmVuOiBcIkRlbGV0ZVwiIH0pKSB9KSldIH0pKV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL3B1YmxpYy1wYWdlcy9cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvZWRpdD90PXB1YmxpY1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvXCIuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0sIFwiL1wiKS5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvZWRpdD90PXByaXZhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJcIi5jb25jYXQodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgfSkgfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVQYWdlTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10cmFzaC1vXCIgfSkgfSkpXSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVSZWFkTGF0ZXIocGFnZUlkKSk7XG4gICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBybEJ0bkNsYXNzIH0pIH0pKSk7XG4gICAgfTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIC8vIHJlYWQgbGF0ZXIgYnV0dG9uIGNsYXNzXG4gICAgdmFyIHJsQnRuQ2xhc3MgPSByZWFkTGF0ZXIgPyBcImZhIGZhLWJvb2ttYXJrXCIgOiBcImZhIGZhLWJvb2ttYXJrLW9cIjtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChBZGRUb0NvbGxlY3Rpb24sIHsgb3BlbjogYWRkVG9Db2xsZWN0aW9uTW9kYWwsIHBhZ2VJZDogcGFnZUlkLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZFRvQ29sbGVjdGlvbk1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19oZWFkZXJfX2FjdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlIGJ0bi1pLWJpZ1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJzcGVjdGF0b3JcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRTZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgbG9naW4gdG8gYmUgYWJsZSB0byBhZGQgcGFnZXMgdG8gY29sbGVjdGlvbnMuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWRkVG9Db2xsZWN0aW9uTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aC1sYXJnZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgcmVuZGVyQ29udGVudCgpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGxvYWRpbmdNb2RhbCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29uZmlybU1vZGFsLCBVcGxvYWRBdHRhY2hGaWxlLCBCdXR0b24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgZmV0Y2hBdHRhY2hGaWxlcywgc2VsZWN0TG9hZGluZywgc2VsZWN0SWQsIHNlbGVjdEF0dGFjaEZpbGVzLCB9IGZyb20gXCIuL3BhZ2VTbGljZVwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzIH0gZnJvbSBcIi4vdXNlclNsaWNlXCI7XG52YXIgQXR0YWNoRmlsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCB1cGxvYWRBdHRhY2hGaWxlc01vZGFsT3BlbiA9IF9hWzBdLCBzZXRVcGxvYWRBdHRhY2hGaWxlc01vZGFsT3BlbiA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZmlybU1vZGFsT3BlbiA9IF9iWzBdLCBzZXRDb25maXJtTW9kYWxPcGVuID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIGNvbmZpcm1Nb2RhbEZpbGVJZCA9IF9jWzBdLCBzZXRDb25maXJtTW9kYWxGaWxlSWQgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybU1vZGFsRmlsZU5hbWUgPSBfZFswXSwgc2V0Q29uZmlybU1vZGFsRmlsZU5hbWUgPSBfZFsxXTtcbiAgICB2YXIgcGFnZUlkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SWQpO1xuICAgIHZhciBzdGF0dXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGF0dXMpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIGF0dGFjaEZpbGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0QXR0YWNoRmlsZXMpO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgLy8gUmVuZGVyIGFsbCBhdHRhY2ggZmlsZXMgb2YgdGhlIHBhZ2VcbiAgICB2YXIgcmVuZGVyRmlsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwib3duZXJcIilcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaXMgdGhlIG93bmVyIG9mIHRoZSBwYWdlXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNoRmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmlsZS1saW5rXCIsIGhyZWY6IFwiL2FwaS9wYWdlcy9cIi5jb25jYXQocGFnZUlkLCBcIi9hdHRhY2gtZmlsZXMvXCIpLmNvbmNhdChmaWxlLm5hbWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1kb3dubG9hZFwiIH0pLCBcIiBcIiArIGZpbGUubmFtZSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcHJldmVudCB0aGUgZmlsZSBmcm9tIHN0YXJ0aW5nIHRvIGdldCBkb3dubG9hZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsRmlsZUlkKGZpbGUuX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsRmlsZU5hbWUoZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRpbWVzXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkgfSkpXSB9KSwgZmlsZS5uYW1lKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gSWYgdXNlciBpcyBub3QgdGhlIG93bmVyIG9mIHRoZSBwYWdlXG4gICAgICAgIHJldHVybiBhdHRhY2hGaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZpbGUtbGlua1wiLCBocmVmOiBcIi9hcGkvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCwgXCIvYXR0YWNoLWZpbGVzL1wiKS5jb25jYXQoZmlsZS5uYW1lKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZG93bmxvYWRcIiB9KSwgXCIgXCIgKyBmaWxlLm5hbWVdIH0pLCBmaWxlLm5hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcIlwiO1xuICAgIC8vIFJlbmRlciB0aGUgYWRkIGFuIGF0dGFjaCBmaWxlIGJ1dHRvblxuICAgIHZhciByZW5kZXJCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwib3duZXJcIiAmJiBhdHRhY2hGaWxlcy5sZW5ndGggPCA1KVxuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyB0aGUgb3duZXIgb2YgdGhlIHBhZ2VcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRBdHRhY2hGaWxlc01vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXVwbG9hZCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBcIiBBZGQgYW4gQXR0YWNoIEZpbGVcIl0gfSkpLCBfanN4KFVwbG9hZEF0dGFjaEZpbGUsIHsgb3BlbjogdXBsb2FkQXR0YWNoRmlsZXNNb2RhbE9wZW4sIGhlYWRlcjogXCJBZGQgYW4gQXR0YWNoIEZpbGVcIiwgdGV4dDogXCJZb3UgY2FuIHVwbG9hZCBtYXhpbXVtIG9mIDUgZmlsZXMgMTBNQiBlYWNoIGZvciBldmVyeSBwYWdlLlwiLCBzaXplOiAxMDAwMDAwMCwgdXJsOiBcIi9wYWdlcy9cIi5jb25jYXQocGFnZUlkLCBcIi9hdHRhY2gtZmlsZXNcIiksIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaEF0dGFjaEZpbGVzKFwiRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRBdHRhY2hGaWxlc01vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSk7XG4gICAgICAgIC8vIElmIHZpZXdlciBpcyBub3QgdGhlIG93bmVyIG9mIHRoZSBwYWdlIGp1c3QgcmV0dXJuIGEgc2ltcGxlIGRpdlxuICAgICAgICByZXR1cm4gX2pzeChcImRpdlwiLCB7fSk7XG4gICAgfTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXR0YWNoLWZpbGVzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goQ29uZmlybU1vZGFsLCBfX2Fzc2lnbih7IGhlYWRlcjogXCJSZW1vdmUgdGhlIGF0dGFjaCBmaWxlXCIsIG9wZW46IGNvbmZpcm1Nb2RhbE9wZW4sIG9uQ29uZmlybTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkRlbGV0aW5nIHRoZSBhdHRhY2ggZmlsZS4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5kZWxldGUoXCIvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCwgXCIvYXR0YWNoLWZpbGVzL1wiKS5jb25jYXQoY29uZmlybU1vZGFsRmlsZUlkKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoQXR0YWNoRmlsZXMoXCJGaWxlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRDb25maXJtTW9kYWxPcGVuKGZhbHNlKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYXR0YWNoIGZpbGVcIiwgXCIgXCIsIF9qc3hzKFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFtcIidcIiwgY29uZmlybU1vZGFsRmlsZU5hbWUsIFwiJ1wiXSB9KSwgXCI/IEFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLlwiXSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmlsZS1saW5rc1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckZpbGVzKCkgfSkpLCByZW5kZXJCdXR0b24oKSwgYXR0YWNoRmlsZXMubGVuZ3RoID09PSA1ICYmIHN0YXR1cyA9PT0gXCJvd25lclwiICYmIChfanN4KFwiZW1cIiwgeyBjaGlsZHJlbjogXCJZb3UgY2FuIG9ubHkgaGF2ZSA1IGF0dGFjaCBmaWxlcyBmb3IgZWFjaCBwYWdlLCBpZiB5b3Ugd2FudCB0byB1cGxvYWQgYSBuZXcgb25lIHJlbW92ZSBvbmUgb2YgdGhlIGF0dGFjaCBmaWxlcyBmaXJzdC5cIiB9KSldIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXR0YWNoRmlsZXM7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9hZGluZ01vZGFsLCBhbGVydCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29uZmlybU1vZGFsLCBCdXR0b24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RBdXRob3IgfSBmcm9tIFwiLi9wYWdlU2xpY2VcIjtcbmltcG9ydCB7IHNlbGVjdFN0YXR1cywgc2VsZWN0U3Vic2NyaWJlZCB9IGZyb20gXCIuL3VzZXJTbGljZVwiO1xudmFyIEF1dGhvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1hdGlvbk1vZGFsT3BlbiA9IF9hWzBdLCBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4gPSBfYVsxXTtcbiAgICB2YXIgc3RhdHVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3RhdHVzKTtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBzdWJzY3JpYmVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3Vic2NyaWJlZCk7XG4gICAgdmFyIGF1dGhvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEF1dGhvcik7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgb25TdWJzY3JpYmVDbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBcImF1dGhlbnRpY2F0ZWRcIilcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBsb2dpbiB0byBiZSBhYmxlIHRvIHN1YnNjcmliZSB0byBhdXRob3JzLlwiKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHN1YnNjcmliZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHt9KTtcbiAgICB2YXIgdXNlckJpbyA9IGF1dGhvci5iaW9ncmFwaHkubGVuZ3RoXG4gICAgICAgID8gYXV0aG9yLmJpb2dyYXBoeVxuICAgICAgICA6IFwiVGhpcyB1c2VyIGhhcyBub3QgYWRkZWQgYSBiaW9ncmFwaHkuXCI7XG4gICAgdmFyIGJpb0NsYXNzTmFtZSA9IGF1dGhvci5iaW9ncmFwaHkubGVuZ3RoXG4gICAgICAgID8gXCJwYWdlX19hdXRob3JfX2Jpb1wiXG4gICAgICAgIDogXCJwYWdlX19hdXRob3JfX2JpbyBpdGFsaWNcIjtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQ29uZmlybU1vZGFsLCB7IGhlYWRlcjogXCJVbnN1YnNjcmliZSBmcm9tIFwiLmNvbmNhdChhdXRob3IudXNlcm5hbWUsIFwiP1wiKSwgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byB1bnN1YnNjcmliZSBmcm9tIHRoaXMgYXV0aG9yP1wiLCBvcGVuOiBjb25maXJtYXRpb25Nb2RhbE9wZW4sIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJVbnN1YnNjcmliaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzdWJzY3JpYmUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgYnRuTmFtZTogXCJVbnN1YnNjcmliZVwiIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19hdXRob3JcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXV0aG9yX19oZWFkXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IGF1dGhvci5waG90b1VybCwgaWQ6IFwidXNlci1waG90b1wiLCBhbHQ6IFwiQXV0aG9yIGltYWdlXCIsIG9uRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlci1waG90b1wiKS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ltYWdlcy91c2Vycy9wbGFjZWhvbGRlci5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXV0aG9yX19kZXRhaWxzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KGF1dGhvci51c2VybmFtZSksIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJsYWNrLWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBhdXRob3IubmFtZSB9KSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFthdXRob3Iuc3Vic2NyaWJlcnNDb3VudCwgXCIgU3Vic2NyaWJlcnNcIl0gfSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19hdXRob3JfX3N1YlwiIH0sIHsgY2hpbGRyZW46IHN0YXR1cyAhPT0gXCJvd25lclwiICYmIChfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogc3Vic2NyaWJlZCA/IFwiZGVmYXVsdFwiIDogXCJibHVlXCIsIHJvdW5kZWQ6IHRydWUsIG9uQ2xpY2s6IG9uU3Vic2NyaWJlQ2xpY2tlZCB9LCB7IGNoaWxkcmVuOiBzdWJzY3JpYmVkID8gXCJTdWJzY3JpYmVkXCIgOiBcIlN1YnNjcmliZVwiIH0pKSkgfSkpXSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBiaW9DbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogdXNlckJpbyB9KSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENvbmZpcm1Nb2RhbCwgVXBsb2FkUGhvdG8sIEJ1dHRvbiB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyBkZWxldGVQaG90bywgc2V0UGhvdG9VcmwsIHNlbGVjdFBob3RvVXJsLCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RJZCwgfSBmcm9tIFwiLi9wYWdlU2xpY2VcIjtcbmltcG9ydCB7IHNlbGVjdFN0YXR1cyB9IGZyb20gXCIuL3VzZXJTbGljZVwiO1xudmFyIFBob3RvID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgdXBsb2FkUGhvdG9Nb2RhbE9wZW4gPSBfYVswXSwgc2V0VXBsb2FkUGhvdG9Nb2RhbE9wZW4gPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1Nb2RhbE9wZW4gPSBfYlswXSwgc2V0Q29uZmlybU1vZGFsT3BlbiA9IF9iWzFdO1xuICAgIHZhciBwYWdlSWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJZCk7XG4gICAgdmFyIHN0YXR1cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFN0YXR1cyk7XG4gICAgdmFyIGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcbiAgICB2YXIgcGhvdG9VcmwgPSB1c2VTZWxlY3RvcihzZWxlY3RQaG90b1VybCk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbIWxvYWRpbmcgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fcGhvdG9cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaW1nXCIsIHsgc3JjOiBwaG90b1VybCwgYWx0OiBcIlBhZ2UgZmVhdHVyZWQgaW1hZ2VcIiwgb25Mb2FkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb25FcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gfSkgfSkpKSwgIWxvYWRpbmcgJiYgc3RhdHVzID09PSBcIm93bmVyXCIgJiYgKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChDb25maXJtTW9kYWwsIHsgaGVhZGVyOiBcIlJlbW92ZSB5b3VyIHBhZ2UgcGhvdG9cIiwgbWVzc2FnZTogXCJBcmUgeW91IHJlYWxseSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgcGFnZSBwaG90bz9cXG4gICAgICAgICAgICAgICAgICBUaGlzIGNhbm5vdCBiZSB1bmRvbmUuXCIsIG9wZW46IGNvbmZpcm1Nb2RhbE9wZW4sIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVBob3RvKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENvbmZpcm1Nb2RhbE9wZW4oZmFsc2UpOyB9IH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX3Bob3RvLWFjdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiBwaG90b1VybCA/IChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIHNpemU6IFwic21hbGxcIiwgcm91bmRlZDogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgYnRuLXNtIGJ0bi1yb3VuZCBtYXJnaW4tYm90dG9tLTIgbWFyZ2luLXJpZ2h0LTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0VXBsb2FkUGhvdG9Nb2RhbE9wZW4odHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXVwbG9hZCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBcIkNoYW5nZSBQYWdlIFBob3RvXCJdIH0pKSwgX2pzeHMoQnV0dG9uLCBfX2Fzc2lnbih7IGNvbG9yOiBcInJlZFwiLCBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcm91bmQgYnRuLXJlZCBtYXJnaW4tYm90dG9tLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q29uZmlybU1vZGFsT3Blbih0cnVlKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdHJhc2ggYnV0dG9uX19pY29uLWxlZnRcIiB9KSwgXCJSZW1vdmUgUGFnZSBQaG90b1wiXSB9KSldIH0pKSA6IChfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSBidG4tc20gYnRuLXJvdW5kIG1hcmdpbi1ib3R0b20tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0VXBsb2FkUGhvdG9Nb2RhbE9wZW4odHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXVwbG9hZCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBcIlVwbG9hZCBhIFBhZ2UgUGhvdG9cIl0gfSkpKSB9KSksIF9qc3goVXBsb2FkUGhvdG8sIHsgb3BlbjogdXBsb2FkUGhvdG9Nb2RhbE9wZW4sIGhlYWRlcjogXCJVcGxvYWQgUGFnZSBQaG90b1wiLCB0ZXh0OiBcIlVwbG9hZCBhIGJlYXV0aWZ1bCBwaG90byB0byBiZSBzZXQgYXMgYSBmZWF0dXJlZCBpbWFnZSBvZiB5b3VyIHBhZ2U6XCIsIGNyb3BNc2c6IFwiQ2hvb3NlIGFuIGFyZWEgdG8gYmUgc2hvd24gYXMgZm9yIHRoZSBwYWdlIHRodW1ibmFpbCwgdGhpcyB3b24ndFxcbiAgICAgICAgICAgICAgICBjcm9wIHlvdXIgaW1hZ2UsIHRoaXMgaXMganVzdCB0aGUgYXJlYSB0aGF0IHdpbGwgYmUgc2hvd24gYXMgdGhlXFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5cIiwgaW5wdXRMYWJlbE5hbWU6IFwiQ2hvb3NlIGEgcGhvdG9cIiwgdXJsOiBcIi9wYWdlcy9cIi5jb25jYXQocGFnZUlkLCBcIi9waG90b1wiKSwgbWluV2lkdGg6IDEyMDAsIG1pbkhlaWdodDogNjc1LCBzaXplOiA4MDAwMDAwLCBhc3BlY3RSYXRpbzogNDggLyAyNywgc3VjY2VzczogZnVuY3Rpb24gKGltYWdlKSB7IHJldHVybiBkaXNwYXRjaChzZXRQaG90b1VybChpbWFnZSkpOyB9LCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkUGhvdG9Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGhvdG87XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IGZldGNoUHJpdmF0ZVBhZ2UsIHNlbGVjdExvYWRpbmcsIHNlbGVjdElkLCBzZWxlY3RDb250ZW50cywgc2VsZWN0RGF0ZSwgc2VsZWN0Q29uZmlndXJhdGlvbnMsIH0gZnJvbSBcIi4vcGFnZVNsaWNlXCI7XG5pbXBvcnQgQWN0aW9ucyBmcm9tIFwiLi9BY3Rpb25zXCI7XG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuL0F1dGhvclwiO1xuaW1wb3J0IFJhdGluZ3MgZnJvbSBcIi4vUmF0aW5nc1wiO1xuaW1wb3J0IFBob3RvIGZyb20gXCIuL1Bob3RvXCI7XG5pbXBvcnQgQXR0YWNoRmlsZXMgZnJvbSBcIi4vQXR0YWNoRmlsZXNcIjtcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi9Db21tZW50c1wiO1xudmFyIFByaXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcbiAgICB2YXIgcGFnZUlkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SWQpO1xuICAgIHZhciBjb250ZW50cyA9IHVzZVNlbGVjdG9yKHNlbGVjdENvbnRlbnRzKTtcbiAgICB2YXIgZGF0ZSA9IHVzZVNlbGVjdG9yKHNlbGVjdERhdGUpO1xuICAgIHZhciBjb25maWd1cmF0aW9ucyA9IHVzZVNlbGVjdG9yKHNlbGVjdENvbmZpZ3VyYXRpb25zKTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJpdmF0ZVBhZ2UoKSk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZW5kZXJCb2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2pzeChcInBcIiwgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGNvbnRlbnRzLmJvZHkgfSB9KTtcbiAgICB9O1xuICAgIHZhciByZW5kZXJDb21tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbnMuY29tbWVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBfanN4KENvbW1lbnRzLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5vcm1hbC1wYXJhZ3JhcGggZGlzYWJsZWQtbWVzc2FnZS1jb21tZW50cyBjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFwiQ29tbWVudHMgYXJlIGRpc2FibGVkIGZvciB0aGlzIHBhZ2UuXCIgfSkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlbmRlclJhdGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9ucy5yYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFJhdGluZ3MsIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibm9ybWFsLXBhcmFncmFwaCBkaXNhYmxlZC1tZXNzYWdlXCIgfSwgeyBjaGlsZHJlbjogXCJSYXRpbmdzIGFyZSBkaXNhYmxlZCBmb3IgdGhpcyBwYWdlLlwiIH0pKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZW5kZXJBdXRob3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghY29uZmlndXJhdGlvbnMuYW5vbnltb3VzbHkpIHtcbiAgICAgICAgICAgIHJldHVybiBfanN4KEF1dGhvciwge30pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJub3JtYWwtcGFyYWdyYXBoIGRpc2FibGVkLW1lc3NhZ2VcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgcGFnZSBoYXMgYmVlbiBjcmVhdGVkIGFub255bW91c2x5LlwiIH0pKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZW5kZXJCcmllZkRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRlbnRzLmJyaWVmRGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgIGNvbnRlbnRzLmJyaWVmRGVzY3JpcHRpb24ucmVwbGFjZSgvIC9nLCBcIlwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiV2hhdCdzIHRoaXMgcGFnZSBhYm91dD9cIiB9KSwgY29udGVudHMuYnJpZWZEZXNjcmlwdGlvbl0gfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGVudHMudGFyZ2V0cyAmJiBjb250ZW50cy50YXJnZXRzLnJlcGxhY2UoLyAvZywgXCJcIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIldobydzIHRoaXMgcGFnZSBmb3I/XCIgfSksIGNvbnRlbnRzLnRhcmdldHNdIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHt9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50IG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goTG9hZGluZywge30pIH0pKSk7XG4gICAgfVxuICAgIC8vIG5vdCBmb3VuZFxuICAgIGlmIChwYWdlSWQgPT09IFwiMFwiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJib2R5LWdyZXlcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJQYWdlIE5vdCBGb3VuZCB8IFBhZ3NlclwiO1xuICAgICAgICByZXR1cm4gKF9qc3hzKFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYS0xIGNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW1wiU29ycnkgYnV0IG5vIHBhZ2Ugd2l0aCB0aGlzIFVSTCB3YXMgZm91bmQuIFwiLCBfanN4KFwiYnJcIiwge30pLCBcIiBNYXliZSB0aGUgYXV0aG9yIGhhcyBkZWxldGVkIHRoaXMgcGFnZS5cIl0gfSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2hlYWRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEFjdGlvbnMsIHsgdHlwZTogXCJwcml2YXRlXCIgfSksIF9qc3goXCJoMVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19oZWFkZXJfX3RpdGxlXCIgfSwgeyBjaGlsZHJlbjogY29udGVudHMudGl0bGUgfSkpLCBfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19oZWFkZXJfX3RpbWVcIiB9LCB7IGNoaWxkcmVuOiBkYXRlIH0pKV0gfSkpLCBfanN4KFBob3RvLCB7fSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2NvbnRlbnRzXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2luZm9ybWF0aW9uXCIgfSwgeyBjaGlsZHJlbjogW3JlbmRlckJyaWVmRGVzKCksIHJlbmRlclRhcmdldCgpXSB9KSksIF9qc3goXCJoclwiLCB7fSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYm9keVwiIH0sIHsgY2hpbGRyZW46IHJlbmRlckJvZHkoKSB9KSksIF9qc3goQXR0YWNoRmlsZXMsIHt9KV0gfSkpLCByZW5kZXJBdXRob3IoKSwgcmVuZGVyUmF0aW5ncygpXSB9KSkgfSkpLCByZW5kZXJDb21tZW50KCksIF9qc3goXCJiclwiLCB7fSksIF9qc3goXCJiclwiLCB7fSksIF9qc3goXCJiclwiLCB7fSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcml2YXRlO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2FkaW5nTW9kYWwsIGFsZXJ0LCByZXF1ZXN0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBzZWxlY3RMb2FkaW5nLCBzZWxlY3RJZCwgc2VsZWN0UmF0aW5ncywgc2V0UmF0aW5ncywgfSBmcm9tIFwiLi9wYWdlU2xpY2VcIjtcbnZhciBSYXRpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIHBhZ2VJZCA9IHVzZVNlbGVjdG9yKHNlbGVjdElkKTtcbiAgICB2YXIgcmF0aW5ncyA9IHVzZVNlbGVjdG9yKHNlbGVjdFJhdGluZ3MpO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIG9uUmF0ZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCBlXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucGF0Y2goXCIvcmF0ZS9wYWdlL1wiLmNvbmNhdChwYWdlSWQpLCB7IHJhdGU6IGFjdGlvbiB9LCB7IGF1dGg6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0UmF0aW5ncyhyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVfMS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgbG9naW4gdG8gcmF0ZSBhIHBhZ2UuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIGlmIChsb2FkaW5nKVxuICAgICAgICByZXR1cm4gX2pzeChcImRpdlwiLCB7fSk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX3JhdGluZ1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIkhvdyB3b3VsZCB5b3UgcmF0ZSB0aGlzIHBhZ2U/XCIgfSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiByYXRpbmdzLmxpa2VzIH0pLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJpZyBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlQnV0dG9uQ2xpY2soXCJsaWtlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdGh1bWJzLXVwXCIgfSkgfSkpXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IHJhdGluZ3MuZGlzbGlrZXMgfSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmlnIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGVCdXR0b25DbGljayhcImRpc2xpa2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aHVtYnMtZG93blwiIH0pIH0pKV0gfSldIH0pKSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmF0aW5ncztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==