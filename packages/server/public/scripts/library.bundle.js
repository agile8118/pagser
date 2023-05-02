"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["library"],{

/***/ "./src/views/library/analytics/Analytics.tsx":
/*!***************************************************!*\
  !*** ./src/views/library/analytics/Analytics.tsx ***!
  \***************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary center-content italic" }, { children: "The analytics section is still under development! Stay tuned!" })) })) })));
});


/***/ }),

/***/ "./src/views/library/collections/CollectionShow.tsx":
/*!**********************************************************!*\
  !*** ./src/views/library/collections/CollectionShow.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/PageThumbnail */ "./src/partials/PageThumbnail.tsx");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_4__);
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};






var CollectionShow = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("normal"), infoStatus = _a[0], setInfoStatus = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("normal"), pagesStatus = _b[0], setPagesStatus = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("spectator"), viewer = _c[0], setViewer = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("save"), btn = _d[0], setBtn = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _e[0], setLoading = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), id = _f[0], setId = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), inputName = _g[0], setInputName = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), inputDesc = _h[0], setInputDesc = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), name = _j[0], setName = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), desc = _k[0], setDesc = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), pages = _l[0], setPages = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedPages = _m[0], setSelectedPages = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), author = _o[0], setAuthor = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), photo = _p[0], setPhoto = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), uploadPhotoMdl = _q[0], setUploadPhotoMdl = _q[1];
    var _r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confCLDeletionMdl = _r[0], setConfCLDeletionMdl = _r[1];
    var _s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confCLStopSharingMdl = _s[0], setConfCLStopSharingMdl = _s[1];
    var _t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confRemovePagesMdl = _t[0], setConfRemovePagesMdl = _t[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (params.id)
            fetchCollectionData(params.id);
    }, []);
    var fetchCollectionData = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request.get("/collection/".concat(id), {
                            auth: true,
                        })];
                case 2:
                    response = (_a.sent());
                    document.title = "".concat(response.collection.name || "", " | Pagser");
                    setBtn(response.btn);
                    setViewer(response.viewer);
                    setId(response.collection._id);
                    setName(response.collection.name);
                    setDesc(response.collection.description);
                    setPhoto(response.collection.photo.secure_url);
                    setAuthor(response.collection.user.name);
                    setPages(response.collection.pages);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    if (e_1.status === 403) {
                        navigate("/u/collections");
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("Sorry you are not authorized to view that collection.", "error");
                    }
                    return [3 /*break*/, 4];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    // Sends a request to server to either save the collection in library or remove it
    // if it's already saved to the library
    var toggleInLibrary = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)("Loading...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request.post("/collection/toggle-library/".concat(id), {}, {
                            auth: true,
                        })];
                case 2:
                    response = (_a.sent());
                    if (response.status === "removed") {
                        setBtn("save");
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("The collection was successfully removed from your library.", "success");
                    }
                    if (response.status === "added") {
                        setBtn("remove");
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("The collection was successfully added to your library.", "success");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)();
                    return [2 /*return*/];
            }
        });
    }); };
    // Send a request to server to start or stop sharing the collection
    var toggleCLSharing = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)("Loading...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request.post("/collection/sharing/".concat(id), {}, {
                            auth: true,
                        })];
                case 2:
                    response = (_a.sent());
                    if (response.sharing) {
                        setBtn("stop-sharing");
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("The collection is now accessible by others.", "success");
                    }
                    if (!response.sharing) {
                        setBtn("share");
                        setConfCLStopSharingMdl(false);
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("The collection has stopped from being shared.", "success");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)();
                    return [2 /*return*/];
            }
        });
    }); };
    // Sends a request to server to update the name and the description of a collection
    var updateInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)("Saving...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request.put("/collection/info/".concat(id), { name: inputName, description: inputDesc }, {
                            auth: true,
                        })];
                case 2:
                    _a.sent();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("Collection info was updated successfully", "success");
                    setInfoStatus("normal");
                    setName(inputName);
                    setDesc(inputDesc);
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)();
                    return [2 /*return*/];
            }
        });
    }); };
    // Send the request to delete collection adn then redirect
    var deleteCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)("Loading...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request["delete"]("/collection/".concat(id), {
                            auth: true,
                        })];
                case 2:
                    _a.sent();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("Your collection was deleted successfully.", "success");
                    navigate("/u/collections");
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // Send a request to server to remove selected pages from collection
    var removePages = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newArr, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setConfRemovePagesMdl(false);
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)("Loading...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request.put("/api/collection/remove-pages/".concat(id), { pageIds: selectedPages }, {
                            auth: true,
                        })];
                case 2:
                    (_a.sent());
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("Page(s) removed from your collection successfully.", "success");
                    newArr = pages.filter(function (page) {
                        return selectedPages.indexOf(page._id) === -1;
                    });
                    setPages(newArr);
                    setSelectedPages([]);
                    setPagesStatus("normal");
                    return [3 /*break*/, 4];
                case 3:
                    e_6 = _a.sent();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.loadingModal)();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("Sorry an error occurred please try again.", "error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var renderPages = function () {
        return pages.map(function (item) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { id: item.id, selected: selectedPages.indexOf(item._id) > -1 ? true : false, status: pagesStatus, briefDes: item.contents.briefDes, title: item.contents.title, image: item.cropedPhoto.secure_url, target: "_blank", url: item.url, type: item.type, authorUsername: item.author.username, onClick: function () {
                        if (pagesStatus === "editing") {
                            var index = selectedPages.indexOf(item._id);
                            if (index === -1) {
                                // Add the page to the selected list
                                setSelectedPages(__spreadArray(__spreadArray([], selectedPages, true), [item._id], false));
                            }
                            else {
                                // Remove the page from the selected list
                                setSelectedPages(__spreadArray(__spreadArray([], selectedPages.slice(0, index), true), selectedPages.slice(index + 1), true));
                            }
                        }
                    } }) }), item._id));
        });
    };
    // Render the share, stop-sharing, save or remove buttons
    var renderBtn = function () {
        if (btn === "save")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn btn-blue-o", onClick: function () { return toggleInLibrary(); } }, { children: ["Save to Library ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-plus-square", "aria-hidden": "true" })] })));
        if (btn === "remove")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn btn-red-o", onClick: function () { return toggleInLibrary(); } }, { children: ["Remove from Library", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-minus-square", "aria-hidden": "true" })] })));
        if (btn === "share")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn btn-green-o", onClick: function () { return toggleCLSharing(); } }, { children: ["Start sharing this collection", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-share-square", "aria-hidden": "true" })] })));
        if (btn === "stop-sharing")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn btn-red-o", onClick: function () { return setConfCLStopSharingMdl(true); } }, { children: ["Stop sharing this collection", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-stop-circle", "aria-hidden": "true" })] })));
    };
    // Render the collection image, viewer should be able to update it if their owner
    var renderImg = function () {
        if (viewer === "owner") {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.UploadPhoto, { open: uploadPhotoMdl, header: "Upload a Photo", text: "Upload a photo for your collection:", inputLabelName: "Choose a photo", url: "/collection/photo/".concat(id), minWidth: 960, minHeight: 540, size: 8000000, aspectRatio: 16 / 9, success: function (photo) { return setPhoto(photo); }, onClose: function () {
                            setUploadPhotoMdl(false);
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ className: "img-upload-btn", href: "javascript:void(0)", onClick: function () { return setUploadPhotoMdl(true); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: photo, onError: function (e) {
                                    e.target.src =
                                        "/images/collection-placeholder.svg";
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "img-upload-btn__cover" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "img-upload-btn__content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-cloud-upload", "aria-hidden": "true" }), " Upload a New Photo"] })) }))] }))] }));
        }
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: photo, onError: function (e) {
                e.target.src =
                    "/images/collection-placeholder.svg";
            } }));
    };
    // Info actions buttons for owner
    var renderActionBtns = function () {
        if (viewer === "owner" && infoStatus === "normal")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-show__actions" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                            setInfoStatus("editing");
                            setInputName(name);
                            setInputDesc(desc);
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-red btn-i-big", onClick: function () { return setConfCLDeletionMdl(true); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-trash" }) }))] })));
    };
    // Edit form for collection name and description. Only for owner
    var renderEditForm = function () {
        if (viewer === "owner" && infoStatus === "editing")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "form margin-bottom-2 margin-top-3", onSubmit: function (e) {
                    e.preventDefault();
                    updateInfo();
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { lined: true, type: "text", placeholder: "Collection name", value: inputName, required: true, autoFocus: true, onChange: function (value) { return setInputName(value); } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Textarea, { rows: 1, 
                            // className="form__input form__input--lined"
                            placeholder: "Add a description", value: inputDesc, onChange: function (value) { return setInputDesc(value); } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "right-content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: "button", className: "btn btn-default btn-sm margin-right-1", onClick: function () { return setInfoStatus("normal"); } }, { children: "Cancel" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: "submit", className: "btn btn-blue btn-sm" }, { children: "Save" }))] }))] })));
    };
    if (loading) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, __assign({ header: "Delete your collection", open: confCLDeletionMdl, btnName: "Delete", onConfirm: function () {
                    deleteCollection();
                }, onCancel: function () {
                    setConfCLDeletionMdl(false);
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Are you sure that you want to delete your collection? " }), pages.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "All the pages you have saved on this collection will be removed from your library if you don't have them saved somewhere else." })), btn === "stop-sharing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "This collection is being shared for others. If you delete the collection all the people that have saved your collection won't be able to access it any longer." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "You cannot undo this action." })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, __assign({ header: "Stop sharing your collection", open: confCLStopSharingMdl, btnName: "Stop Sharing", onConfirm: function () {
                    toggleCLSharing();
                }, onCancel: function () {
                    setConfCLStopSharingMdl(false);
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Are you sure that you want to make your collection private? " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "If you stop the collection from being shared, all the people that have saved your collection won't be able to access it and the collection won't be shown on your public profile any longer until you make it public again." })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, __assign({ header: "Remove pages", open: confRemovePagesMdl, btnName: "Remove", onConfirm: function () {
                    removePages();
                }, onCancel: function () {
                    setConfRemovePagesMdl(false);
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Are you sure that you want to remove the selected page(s) from your collection?", " "] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "You cannot undo this action." })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-2 col-md-1-of-2" }, { children: renderImg() })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-2 col-md-1-of-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-show" }, { children: [renderActionBtns(), infoStatus === "normal" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", __assign({ className: "collection-show__name" }, { children: name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-show__desc" }, { children: desc }))] })), renderEditForm(), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "collection-show__creator" }, { children: ["Created by ", viewer === "owner" ? "You" : author] })), renderBtn()] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: pages.length > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav margin-top-4" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", __assign({ className: "heading-tertiary" }, { children: [pages.length, " Page", pages.length > 1 ? "s" : "", " In This Collection:"] })), pagesStatus === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav__label" }, { children: [selectedPages.length, " page", selectedPages.length > 1 ? "s" : "", " selected"] }))), viewer === "owner" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav__actions" }, { children: pagesStatus === "normal" ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text", onClick: function () { return setPagesStatus("editing"); } }, { children: "Edit" }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text btn-text-red", disabled: selectedPages.length === 0, onClick: function () { return setConfRemovePagesMdl(true); } }, { children: "Remove" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text", onClick: function () {
                                                    setPagesStatus("normal");
                                                    setSelectedPages([]);
                                                } }, { children: "Done" }))] })) })))] })), pagesStatus === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "center-content a-15" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn-text", disabled: selectedPages.length !== 1 ||
                                        pages[0]._id === selectedPages[0], onClick: function () {
                                        var newArr = __spreadArray([], pages, true);
                                        var idx = newArr.findIndex(function (p) { return p._id === selectedPages[0]; });
                                        var temp = newArr[idx];
                                        newArr[idx] = newArr[idx - 1];
                                        newArr[idx - 1] = temp;
                                        /** @todo send a request to server to update the order */
                                        setPages(newArr);
                                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-circle-left", "aria-hidden": "true" }), " ", "Move Left"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn-text", disabled: selectedPages.length !== 1 ||
                                        pages[pages.length - 1]._id === selectedPages[0], onClick: function () {
                                        var newArr = __spreadArray([], pages, true);
                                        var idx = newArr.findIndex(function (p) { return p._id === selectedPages[0]; });
                                        var temp = newArr[idx];
                                        newArr[idx] = newArr[idx + 1];
                                        newArr[idx + 1] = temp;
                                        /** @todo send a request to server to update the order */
                                        setPages(newArr);
                                    } }, { children: ["Move Right", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-circle-right", "aria-hidden": "true" })] }))] })))] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "collection-show__no-page-msg" }, { children: "This collection does not have any page." }))) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderPages() }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionShow);


/***/ }),

/***/ "./src/views/library/collections/Collections.tsx":
/*!*******************************************************!*\
  !*** ./src/views/library/collections/Collections.tsx ***!
  \*******************************************************/
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
/* harmony import */ var _partials_CollectionThumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../partials/CollectionThumbnail */ "./src/partials/CollectionThumbnail.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../side-nav/sideNavSlice */ "./src/views/library/side-nav/sideNavSlice.ts");
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
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loadingCreated = _a[0], setLoadingCreated = _a[1]; // loading for user created collections
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loadingSaved = _b[0], setLoadingSaved = _b[1]; // loading for saved collections
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), newCollectionMdl = _c[0], setNewCollectionMdl = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), name = _d[0], setName = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), description = _e[0], setDescription = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), savedCollections = _f[0], setSavedCollections = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), createdCollections = _g[0], setCreatedCollections = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("date-created"), sortByCC = _h[0], setSortByCC = _h[1]; // created collections
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("date-added"), sortBySC = _j[0], setSortBySC = _j[1]; // saved collections
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.title = "Collections | Pagser";
        fetchCollections("created-saved");
    }, []);
    // Creates a new collection
    var createCollection = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Loading...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.post("/collection", { name: name, description: description }, {
                            auth: true,
                        })];
                case 2:
                    _a.sent();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.alert)("Your collection created successfully.", "success");
                    fetchCollections("created", "date-created");
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    setNewCollectionMdl(false);
                    setName("");
                    setDescription("");
                    return [2 /*return*/];
            }
        });
    }); };
    // Fetches the list of collection from the server, either those that the user has created or saved
    var fetchCollections = function (kind, sortBy) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    switch (kind) {
                        case "created-saved":
                            setLoadingCreated(true);
                            setLoadingSaved(true);
                            break;
                        case "saved":
                            setLoadingSaved(true);
                            break;
                        case "created":
                            setLoadingCreated(true);
                            break;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.get("/collections/".concat(kind, "?sortBy=").concat(sortBy), {
                            auth: true,
                        })];
                case 2:
                    response = (_a.sent());
                    switch (kind) {
                        case "created-saved":
                            setSavedCollections(response.savedCollections);
                            setCreatedCollections(response.createdCollections);
                            break;
                        case "saved":
                            setSavedCollections(response.savedCollections);
                            break;
                        case "created":
                            setCreatedCollections(response.createdCollections);
                            break;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    setLoadingCreated(false);
                    setLoadingSaved(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderCollections = function (kind) {
        var list = [];
        if (kind === "savedCollections") {
            list = savedCollections;
        }
        else {
            list = createdCollections;
        }
        if (list.length === 0)
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "a-14" }, { children: "Collection list is empty." }));
        return list.map(function (cl) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_CollectionThumbnail__WEBPACK_IMPORTED_MODULE_4__["default"], { id: cl._id, name: cl.name, img: cl.photo.secure_url, desc: cl.description, pageNum: cl.pages.length, author: cl.user.name, onClick: function () {
                        dispatch((0,_side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_6__.setSection)(""));
                    } }) }), cl._id));
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Modal, __assign({ header: "Create a New Collection", open: newCollectionMdl, onClose: function () {
                    setNewCollectionMdl(false);
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "form", onSubmit: createCollection }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Input, { label: "Name", type: "text", placeholder: "The name of your collection.", onChange: function (value) {
                                    setName(value);
                                }, value: name, required: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Textarea, { label: "Description (optional)", placeholder: "Describe what this collection is for, contains, or any other information you deem useful.", value: description, rows: 4, onChange: function (value) {
                                    setDescription(value);
                                } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ color: "blue", type: "submit" }, { children: "Create" })) }))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav margin-bottom-1" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Collections You've Created:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav__actions" }, { children: [createdCollections.length > 1 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Dropdown, __assign({ num: "1", select: sortByCC, onChange: function (name) {
                                            fetchCollections("created", name);
                                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "btn-name", "data-icon-class": "fa fa-sort-amount-asc" }, { children: "Sort By" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "date-created" }, { children: "Date Created" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "a-z" }, { children: "A - Z" }))] }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn-text", onClick: function () {
                                            setNewCollectionMdl(true);
                                        } }, { children: ["Create a new collection", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-plus", "aria-hidden": "true" })] }))] }))] })), loadingCreated && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Loading, {}) }))), !loadingCreated && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderCollections("createdCollections") })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav margin-bottom-1" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Collections You've Saved:" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "header-nav__actions" })] })), loadingSaved && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Loading, {}) }))), !loadingSaved && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderCollections("savedCollections") })))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collections);


/***/ }),

/***/ "./src/views/library/dashboard/Dashboard.tsx":
/*!***************************************************!*\
  !*** ./src/views/library/dashboard/Dashboard.tsx ***!
  \***************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary center-content italic" }, { children: "The dashboard section is still under development! Stay tuned!" })) })) })));
});


/***/ }),

/***/ "./src/views/library/history/Comments.tsx":
/*!************************************************!*\
  !*** ./src/views/library/history/Comments.tsx ***!
  \************************************************/
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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/views/library/history/Header.tsx");
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





var Comments = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), comments = _a[0], setComments = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _b[0], setLoading = _b[1];
    // Sends a request to server to fetch the list of comments user has written
    var fetchComments = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.get("/comments/history", {
                            auth: true,
                        })];
                case 1:
                    response = (_a.sent());
                    setComments(response.comments);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        fetchComments();
    }, []);
    // Render list of comments user has written
    var renderComments = function () {
        return comments.map(function (c) {
            // Decide what to show for the comment history label
            var labelText;
            if (!c.reply.name)
                labelText = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["You commented on page", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: _pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.pageUrl(c.page.url, c.page.author.username, c.page.type), target: "_blank" }, { children: c.page.title })) })] }));
            if (c.reply.name) {
                var name_1 = c.reply.name === "yourself" ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "yourself" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/users/".concat(c.reply.username), target: "_blank" }, { children: c.reply.name })) }));
                labelText = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["You replied to ", name_1, " on page", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: _pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.pageUrl(c.page.url, c.page.author.username, c.page.type), target: "_blank" }, { children: c.page.title })) })] }));
            }
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "comment-brief__label" }, { children: labelText })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment-brief" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [c.text, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment-brief__date" }, { children: c.date }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: _pagser_common__WEBPACK_IMPORTED_MODULE_2__.util.pageUrl(c.page.url, c.page.author.username, c.page.type), className: "btn-i comment-brief__go" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-circle-right", "aria-hidden": "true" }) })) })] }))] }, c.id));
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) }))), !loading && renderComments()] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);


/***/ }),

/***/ "./src/views/library/history/Header.tsx":
/*!**********************************************!*\
  !*** ./src/views/library/history/Header.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-nav/sideNavSlice */ "./src/views/library/side-nav/sideNavSlice.ts");
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
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var section = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__.selectSection);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "lined-btns margin-bottom-2 margin-top-1" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, __assign({ to: "/feed/history/pages", className: section === "history/pages"
                    ? "btn-lined btn-lined--active"
                    : "btn-lined", onClick: function () { return dispatch((0,_side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__.setSection)("history/pages")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-file margin-right-3px" }), " Reads"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, __assign({ to: "/feed/history/comments", className: section === "history/comments"
                    ? "btn-lined btn-lined--active"
                    : "btn-lined", onClick: function () { return dispatch((0,_side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__.setSection)("history/comments")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-commenting margin-right-3px" }), " Comments"] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/views/library/history/Pages.tsx":
/*!*********************************************!*\
  !*** ./src/views/library/history/Pages.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/PageThumbnail */ "./src/partials/PageThumbnail.tsx");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/views/library/history/Header.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagesSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pagesSlice */ "./src/views/library/pagesSlice.ts");
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
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationModalOpen = _a[0], setConfirmationModalOpen = _a[1];
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectLoading);
    var filterBy = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectFilterBy);
    var sortBy = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectSortBy);
    var selectedPages = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectSelectedPages);
    var pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectPages);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.title = "History | Pagser";
        dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.fetchPages)("history", filterBy));
        return function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.setStatus)("normal"));
        };
    }, []);
    var renderDropdowns = function () {
        if (filterBy === "all" && pages.length === 0)
            return "";
        if (status === "normal")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Dropdown, __assign({ num: "1", select: filterBy, onChange: function (name) {
                    dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.fetchPages)("history", name, sortBy));
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "btn-name", "data-icon-class": "fa fa-filter" }, { children: "Filter By" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "all" }, { children: "All Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "private" }, { children: "Private Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "public" }, { children: "Public Pages" }))] })));
    };
    var renderList = function () {
        if (pages.length > 0) {
            return pages.map(function (item) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { id: item.id, selected: selectedPages.indexOf(item.id) > -1 ? true : false, status: status, briefDes: item.contents.briefDes, title: item.contents.title, image: item.photo.secure_url, target: "_blank", url: item.url, type: item.type, label: item.dateVisited, authorUsername: item.author.username, onClick: function () {
                            if (status === "editing")
                                dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectPage)(item.id));
                        } }) }), item.id));
            });
        }
        else {
            if (filterBy === "public") {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You don't have any public page on your history." })));
            }
            if (filterBy === "private") {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You don't have any private page on your history." })));
            }
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "Your reading history list is empty." }));
        }
    };
    var removeBtn = status === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text btn-text-red", disabled: selectedPages.length > 0 ? false : true, onClick: function () {
            setConfirmationModalOpen(true);
        } }, { children: "Remove" })));
    var doneBtn = status === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text", onClick: function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.setStatus)("normal"));
        } }, { children: "Done" })));
    var editBtn = pages.length > 0 && status === "normal" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn-text", onClick: function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.setStatus)("editing"));
        } }, { children: ["Edit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil-square", "aria-hidden": "true" })] })));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, __assign({ header: "Remove From History?", open: confirmationModalOpen, onConfirm: function () {
                    dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.removePages)("history"));
                    setConfirmationModalOpen(false);
                }, onCancel: function () {
                    setConfirmationModalOpen(false);
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Are you sure that you want to remove the selected page", selectedPages.length > 1 ? "s" : "", " from your history? ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " You have selected ", selectedPages.length, " page", selectedPages.length > 1 ? "s" : "", " and you cannot undo the action."] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Your Reading History:" })), !loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav__actions" }, { children: [renderDropdowns(), removeBtn, doneBtn, editBtn] })))] })), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) }))), !loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderList() }))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pages);


/***/ }),

/***/ "./src/views/library/home/Home.tsx":
/*!*****************************************!*\
  !*** ./src/views/library/home/Home.tsx ***!
  \*****************************************/
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

// this component should just link to other places:
// CREATE A NEW PAGE
// MANAGE YOUR PUBLIC PROFILE
// MANGE YOUR COLLECTIONS
// IF HAVE WROTE A PAGE: TALK ABOUT ANALYTICS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary center-content italic" }, { children: "This part is still under development where you can come here and read the pages you love based on your feed. Stay tuned!" })) })) })));
});


/***/ }),

/***/ "./src/views/library/index.tsx":
/*!*************************************!*\
  !*** ./src/views/library/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/views/library/store.ts");
/* harmony import */ var _side_nav_SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-nav/SideNav */ "./src/views/library/side-nav/SideNav.tsx");
/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/Home */ "./src/views/library/home/Home.tsx");
/* harmony import */ var _dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/Dashboard */ "./src/views/library/dashboard/Dashboard.tsx");
/* harmony import */ var _analytics_Analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics/Analytics */ "./src/views/library/analytics/Analytics.tsx");
/* harmony import */ var _monetization_Monetization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monetization/Monetization */ "./src/views/library/monetization/Monetization.tsx");
/* harmony import */ var _subscriptions_Subscriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscriptions/Subscriptions */ "./src/views/library/subscriptions/Subscriptions.tsx");
/* harmony import */ var _history_Pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./history/Pages */ "./src/views/library/history/Pages.tsx");
/* harmony import */ var _history_Comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history/Comments */ "./src/views/library/history/Comments.tsx");
/* harmony import */ var _read_later_ReadLater__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./read-later/ReadLater */ "./src/views/library/read-later/ReadLater.tsx");
/* harmony import */ var _liked_pages_LikedPages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liked-pages/LikedPages */ "./src/views/library/liked-pages/LikedPages.tsx");
/* harmony import */ var _user_pages_Published__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-pages/Published */ "./src/views/library/user-pages/Published.tsx");
/* harmony import */ var _user_pages_Draft__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-pages/Draft */ "./src/views/library/user-pages/Draft.tsx");
/* harmony import */ var _collections_Collections__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./collections/Collections */ "./src/views/library/collections/Collections.tsx");
/* harmony import */ var _collections_CollectionShow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./collections/CollectionShow */ "./src/views/library/collections/CollectionShow.tsx");
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


















function Library() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, __assign({ store: _store__WEBPACK_IMPORTED_MODULE_2__.store }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.BrowserRouter, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_side_nav_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/feed/subscriptions", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_subscriptions_Subscriptions__WEBPACK_IMPORTED_MODULE_8__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/feed/history/pages", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_history_Pages__WEBPACK_IMPORTED_MODULE_9__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/feed/history/comments", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_history_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/feed/read-later", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_read_later_ReadLater__WEBPACK_IMPORTED_MODULE_11__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/feed/liked-pages", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_liked_pages_LikedPages__WEBPACK_IMPORTED_MODULE_12__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/u/pages/published", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_user_pages_Published__WEBPACK_IMPORTED_MODULE_13__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/u/pages/draft", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_user_pages_Draft__WEBPACK_IMPORTED_MODULE_14__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/u/collections", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_collections_Collections__WEBPACK_IMPORTED_MODULE_15__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/collection/:id", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_collections_CollectionShow__WEBPACK_IMPORTED_MODULE_16__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/u/pages", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Navigate, { to: "/u/pages/published", replace: true }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/home", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_home_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/u/dashboard", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/u/analytics", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_analytics_Analytics__WEBPACK_IMPORTED_MODULE_6__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, { path: "/u/monetization", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_monetization_Monetization__WEBPACK_IMPORTED_MODULE_7__["default"], {}) })] })] }) })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);


/***/ }),

/***/ "./src/views/library/liked-pages/LikedPages.tsx":
/*!******************************************************!*\
  !*** ./src/views/library/liked-pages/LikedPages.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/PageThumbnail */ "./src/partials/PageThumbnail.tsx");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagesSlice */ "./src/views/library/pagesSlice.ts");
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






var LikedPages = function () {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var filterBy = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectFilterBy);
    var sortBy = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectSortBy);
    var selectedPages = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectSelectedPages);
    var pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectPages);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.title = "Liked Pages | Pagser";
        dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.fetchPages)("liked-pages", filterBy));
    }, []);
    var renderDropdowns = function () {
        if (filterBy === "all" && pages.length === 0)
            return "";
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Dropdown, __assign({ num: "1", select: filterBy, onChange: function (name) {
                dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.fetchPages)("liked-pages", name, sortBy));
            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "btn-name", "data-icon-class": "fa fa-filter" }, { children: "Filter By" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "all" }, { children: "All Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "private" }, { children: "Private Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "public" }, { children: "Public Pages" }))] })));
    };
    var renderList = function () {
        if (pages.length > 0) {
            return pages.map(function (item) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { id: item.id, status: "normal", briefDes: item.contents.briefDes, title: item.contents.title, image: item.photo.secure_url, target: "_blank", url: item.url, type: item.type, authorUsername: item.author.username }) }), item.id));
            });
        }
        else {
            if (filterBy === "public") {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You haven't liked any public page yet." }));
            }
            if (filterBy === "private") {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You haven't liked any private page yet. " }));
            }
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "Your haven't liked any page yet." }));
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Pages You Have Liked:" })), !loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav__actions" }, { children: renderDropdowns() })))] })), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) }))), !loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderList() }))] })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikedPages);


/***/ }),

/***/ "./src/views/library/monetization/Monetization.tsx":
/*!*********************************************************!*\
  !*** ./src/views/library/monetization/Monetization.tsx ***!
  \*********************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary center-content italic" }, { children: "The monetization section is still under development! Stay tuned!" })) })) })));
});


/***/ }),

/***/ "./src/views/library/read-later/ReadLater.tsx":
/*!****************************************************!*\
  !*** ./src/views/library/read-later/ReadLater.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/PageThumbnail */ "./src/partials/PageThumbnail.tsx");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagesSlice */ "./src/views/library/pagesSlice.ts");
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






var ReadLater = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationModalOpen = _a[0], setConfirmationModalOpen = _a[1];
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var filterBy = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectFilterBy);
    var sortBy = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectSortBy);
    var selectedPages = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectSelectedPages);
    var pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectPages);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.title = "Reading List | Pagser";
        dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.fetchPages)("read-later", filterBy, sortBy));
        return function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.setStatus)("normal"));
        };
    }, []);
    var renderDropdowns = function () {
        if (filterBy === "all" && pages.length === 0)
            return "";
        if (status === "normal")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [pages.length > 1 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Dropdown, __assign({ num: "1", select: sortBy, onChange: function (name) {
                            (0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.fetchPages)("read-later", filterBy, name);
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "btn-name", "data-icon-class": "fa fa-sort-amount-asc" }, { children: "Sort By" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "date-added-asc" }, { children: "Date Added - Newest first" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "date-added-desc" }, { children: "Date Added - Oldest first" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "date-published-asc" }, { children: "Date Published - Newest first" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "date-published-desc" }, { children: "Date Published - Oldest first" }))] }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Dropdown, __assign({ num: "2", select: filterBy, onChange: function (name) {
                            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.fetchPages)("read-later", name, sortBy));
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "btn-name", "data-icon-class": "fa fa-filter" }, { children: "Filter By" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "all" }, { children: "All Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "private" }, { children: "Private Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "public" }, { children: "Public Pages" }))] }))] }));
    };
    var renderList = function () {
        if (pages.length > 0) {
            return pages.map(function (item) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { id: item.id, selected: selectedPages.indexOf(item.id) > -1 ? true : false, status: status, briefDes: item.contents.briefDes, title: item.contents.title, image: item.photo.secure_url, target: "_blank", url: item.url, type: item.type, authorUsername: item.author.username, onClick: function () {
                            if (status === "editing")
                                (0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.selectPage)(item.id);
                        } }) }), item.id));
            });
        }
        else {
            if (filterBy === "public") {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You don't have any public page on your read later list." })));
            }
            if (filterBy === "private") {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You don't have any private page on your read later list." })));
            }
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "Your read later list is empty." }));
        }
    };
    var removeBtn = status === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text btn-text-red", disabled: selectedPages.length > 0 ? false : true, onClick: function () {
            setConfirmationModalOpen(true);
        } }, { children: "Remove" })));
    var doneBtn = status === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text", onClick: function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.setStatus)("normal"));
        } }, { children: "Done" })));
    var editBtn = pages.length > 0 && status === "normal" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn-text", onClick: function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.setStatus)("editing"));
        } }, { children: ["Edit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil-square", "aria-hidden": "true" })] })));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, __assign({ header: "Remove from the list?", open: confirmationModalOpen, onConfirm: function () {
                    dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_5__.removePages)("read-later"));
                    setConfirmationModalOpen(false);
                }, onCancel: function () {
                    setConfirmationModalOpen(false);
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Are you sure that you want to remove the selected page", selectedPages.length > 1 ? "s" : "", " from your read later list?", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " You have selected ", selectedPages.length, " page", selectedPages.length > 1 ? "s" : "", " and you cannot undo the action."] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Your Read Later List:" })), !loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav__actions" }, { children: [renderDropdowns(), removeBtn, doneBtn, editBtn] })))] })), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) }))), !loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderList() }))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadLater);


/***/ }),

/***/ "./src/views/library/side-nav/SideNav.tsx":
/*!************************************************!*\
  !*** ./src/views/library/side-nav/SideNav.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _sideNavSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideNavSlice */ "./src/views/library/side-nav/sideNavSlice.ts");
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





var SideNav = function () {
    document.querySelector("body").style.marginLeft =
        "24rem";
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var section = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.selectSection);
    var getSectionFromUrl = function () {
        var sections = [
            "home",
            "subscriptions",
            "history/pages",
            "history/comments",
            "read-later",
            "liked-pages",
            "collections",
            "dashboard",
            "analytics",
            "monetization",
            "pages/published",
            "pages/draft",
            "comments",
        ];
        if (window.location.pathname.split("/")[1] === "home") {
            return "home";
        }
        // Collection show page
        if (window.location.pathname.split("/")[1] === "collection") {
            return null;
        }
        if (window.location.pathname.split("/")[2] === "history") {
            var index_1 = sections.indexOf("".concat(window.location.pathname.split("/")[2], "/").concat(window.location.pathname.split("/")[3]));
            return sections[index_1] || "history/pages";
        }
        if (window.location.pathname.split("/")[2] === "pages") {
            var index_2 = sections.indexOf("".concat(window.location.pathname.split("/")[2], "/").concat(window.location.pathname.split("/")[3]));
            return sections[index_2] || "pages/published";
        }
        var index = sections.indexOf(window.location.pathname.split("/")[2]);
        return sections[index] || "";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!section) {
            dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)(getSectionFromUrl()));
        }
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "sidenav sidenav--open", id: "js--sidenav" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "sidenav__section" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/home", className: section === "home"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("home")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-home" }), "Home"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/feed/subscriptions", className: section === "subscriptions"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("subscriptions")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-file-text" }), "Subscriptions"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/feed/history/pages", className: section === "history/pages" || section === "history/comments"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("history/pages")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-history" }), "History"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/feed/read-later", className: section === "read-later"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("read-later")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-bookmark" }), "Read Later"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/feed/liked-pages", className: section === "liked-pages"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("liked-pages")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-thumbs-up" }), "Liked Pages"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/u/collections", className: section === "collections"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("collections")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-th-large" }), "Collections"] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "sidenav__section" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/u/dashboard", className: section === "dashboard"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("dashboard")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-dashboard" }), "Dashboard"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/u/analytics", className: section === "analytics"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("analytics")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-line-chart" }), "Analytics"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/u/monetization", className: section === "monetization"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("monetization")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-dollar" }), "Monetization"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, __assign({ to: "/u/pages", className: section === "pages/published" ||
                            section === "pages/draft" ||
                            section === "pages/trash"
                            ? "sidenav__link sidenav__link--active"
                            : "sidenav__link", onClick: function () { return dispatch((0,_sideNavSlice__WEBPACK_IMPORTED_MODULE_3__.setSection)("pages/published")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-envelope-open" }), "Your Pages"] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "sidenav__footer" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", __assign({ className: "" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", __assign({ className: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "javascript:void(0);" }, { children: "Support" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", __assign({ className: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "javascript:void(0);" }, { children: "Contact us" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", __assign({ className: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/terms-of-use" }, { children: "Terms of Use" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", __assign({ className: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/privacy-policy" }, { children: "Privacy Policy" })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\u00A9 2022 Pagser.com" })] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideNav);


/***/ }),

/***/ "./src/views/library/subscriptions/SubscriptionThumbnail.tsx":
/*!*******************************************************************!*\
  !*** ./src/views/library/subscriptions/SubscriptionThumbnail.tsx ***!
  \*******************************************************************/
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

var SubscriptionThumbnail = function (props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "sub-thumbnail" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: "/users/".concat(props.username), target: "_blank", className: "sub-thumbnail__info" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "sub-thumbnail__info-image", src: props.image }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "sub-thumbnail__info-text" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "sub-thumbnail__info-name" }, { children: props.name })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "sub-thumbnail__info-headline" }, { children: props.headline }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/users/".concat(props.username, "/pages"), className: "btn btn-default btn-round" }, { children: "View latest pages" }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionThumbnail);


/***/ }),

/***/ "./src/views/library/subscriptions/Subscriptions.tsx":
/*!***********************************************************!*\
  !*** ./src/views/library/subscriptions/Subscriptions.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SubscriptionThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscriptionThumbnail */ "./src/views/library/subscriptions/SubscriptionThumbnail.tsx");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__);
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





var Subscriptions = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), subscriptions = _a[0], setSubscriptions = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _b[0], setLoading = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document.title = "Subscriptions | Pagser";
                        setLoading(true);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.get("/subscriptions", {
                                auth: true,
                            })];
                    case 1:
                        response = (_a.sent());
                        setSubscriptions(response.subs);
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var renderSubscriptions = function () {
        if (subscriptions.length === 0)
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You haven't subscribed to any author yet." }));
        return subscriptions.map(function (item) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SubscriptionThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { name: item.author.name, username: item.author.username, headline: item.author.headline, image: item.author.photo.secure_url }, item._id));
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Your Subscriptions:" })) })), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Loading, {}) }))), !loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderSubscriptions() }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscriptions);


/***/ }),

/***/ "./src/views/library/user-pages/Draft.tsx":
/*!************************************************!*\
  !*** ./src/views/library/user-pages/Draft.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/PageThumbnail */ "./src/partials/PageThumbnail.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/views/library/user-pages/Header.tsx");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagesSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pagesSlice */ "./src/views/library/pagesSlice.ts");
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







var Published = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationModalOpen = _a[0], setConfirmationModalOpen = _a[1];
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectLoading);
    var selectedPages = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectSelectedPages);
    var pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectPages);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.title = "Draft Pages | Pagser";
        dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.fetchPages)("user-pages/draft"));
        return function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.setStatus)("normal"));
        };
    }, []);
    var renderList = function () {
        if (pages.length > 0) {
            return pages.map(function (item) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { id: item.id, target: "_blank", noPhoto: true, label: "Last updated: ".concat(item.updatedAt), type: "draft", status: status, selected: selectedPages.indexOf(item.id) > -1 ? true : false, title: item.contents.title, briefDes: item.contents.briefDes, onClick: function () {
                            if (status === "editing")
                                dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectPage)(item.id));
                        } }) }), item.id));
            });
        }
        else {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You don't have any draft page." }));
        }
    };
    var removeBtn = status === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text btn-text-red", disabled: selectedPages.length > 0 ? false : true, onClick: function () {
            setConfirmationModalOpen(true);
        } }, { children: "Delete" })));
    var doneBtn = status === "editing" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-text", onClick: function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.setStatus)("normal"));
        } }, { children: "Done" })));
    var editBtn = pages.length > 0 && status === "normal" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "btn-text", onClick: function () {
            dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.setStatus)("editing"));
        } }, { children: ["Edit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil-square", "aria-hidden": "true" })] })));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, __assign({ header: "Delete Draft Pages?", open: confirmationModalOpen, btnName: "Delete", onConfirm: function () {
                    dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.removePages)("user-pages/draft"));
                    setConfirmationModalOpen(false);
                }, onCancel: function () {
                    setConfirmationModalOpen(false);
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Are you sure that you want to delete the selected draft page", selectedPages.length > 1 ? "s " : "", "? ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " You have selected ", selectedPages.length, " draft page", selectedPages.length > 1 ? "s " : "", " and you cannot undo the action."] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Your Draft Pages:" })), !loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav__actions" }, { children: [removeBtn, doneBtn, editBtn] })))] })), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Loading, {}) }))), !loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderList() }))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Published);


/***/ }),

/***/ "./src/views/library/user-pages/Header.tsx":
/*!*************************************************!*\
  !*** ./src/views/library/user-pages/Header.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-nav/sideNavSlice */ "./src/views/library/side-nav/sideNavSlice.ts");
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
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var section = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__.selectSection);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "lined-btns margin-bottom-2 margin-top-1" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, __assign({ to: "/u/pages/published", className: section === "pages/published"
                    ? "btn-lined btn-lined--active"
                    : "btn-lined", onClick: function () { return dispatch((0,_side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__.setSection)("pages/published")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-check-square margin-right-3px" }), " Published Pages"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, __assign({ to: "/u/pages/draft", className: section === "pages/draft"
                    ? "btn-lined btn-lined--active"
                    : "btn-lined", onClick: function () { return dispatch((0,_side_nav_sideNavSlice__WEBPACK_IMPORTED_MODULE_2__.setSection)("pages/draft")); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-file margin-right-3px" }), " Draft Pages"] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/views/library/user-pages/Published.tsx":
/*!****************************************************!*\
  !*** ./src/views/library/user-pages/Published.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/PageThumbnail */ "./src/partials/PageThumbnail.tsx");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/views/library/user-pages/Header.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagesSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pagesSlice */ "./src/views/library/pagesSlice.ts");
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







var Published = function () {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectLoading);
    var filterBy = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectFilterBy);
    var pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.selectPages);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.title = "Published Pages | Pagser";
        dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.fetchPages)("user-pages/published", filterBy));
    }, []);
    var renderDropdowns = function () {
        if (filterBy === "all" && pages.length === 0)
            return "";
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Dropdown, __assign({ num: "1", select: filterBy, onChange: function (name) {
                dispatch((0,_pagesSlice__WEBPACK_IMPORTED_MODULE_6__.fetchPages)("user-pages/published", name));
            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "btn-name", "data-icon-class": "fa fa-filter" }, { children: "Filter By" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "all" }, { children: "All Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "private" }, { children: "Private Pages" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ "data-role-name": "item", "data-name": "public" }, { children: "Public Pages" }))] })));
    };
    var renderList = function () {
        if (pages.length > 0) {
            return pages.map(function (item) {
                var _a, _b;
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "col-lg-1-of-5 col-md-1-of-5 col-sm-1-of-3 col-xs-1-of-2 col-xxs-1-of-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_PageThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], { id: item.id, status: "normal", briefDes: item.contents.briefDes, title: item.contents.title, image: (_a = item.photo) === null || _a === void 0 ? void 0 : _a.secure_url, target: "_blank", url: item.url, type: item.type, authorUsername: (_b = item.author) === null || _b === void 0 ? void 0 : _b.username }) }), item.id));
            });
        }
        else {
            if (filterBy === "public") {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You haven't published any public page yet." })));
            }
            if (filterBy === "private") {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You haven't published any private page yet. " })));
            }
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "a-13" }, { children: "You haven't published any page yet." }));
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "row" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "header-nav" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Your Published Pages:" })), !loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "header-nav__actions" }, { children: renderDropdowns() })))] })), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) }))), !loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: renderList() }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Published);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLElBQUksR0FBRyxpQkFBaUIsc0RBQUksbUJBQW1CLGtCQUFrQixJQUFJLHdCQUF3QixLQUFLO0FBQ2pqQjtBQUNBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvYW5hbHl0aWNzL0FuYWx5dGljcy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbGlicmFyeS9jb2xsZWN0aW9ucy9Db2xsZWN0aW9uU2hvdy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbGlicmFyeS9jb2xsZWN0aW9ucy9Db2xsZWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbGlicmFyeS9kYXNoYm9hcmQvRGFzaGJvYXJkLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L2hpc3RvcnkvQ29tbWVudHMudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvaGlzdG9yeS9IZWFkZXIudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvaGlzdG9yeS9QYWdlcy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbGlicmFyeS9ob21lL0hvbWUudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvaW5kZXgudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvbGlrZWQtcGFnZXMvTGlrZWRQYWdlcy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvbGlicmFyeS9tb25ldGl6YXRpb24vTW9uZXRpemF0aW9uLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L3JlYWQtbGF0ZXIvUmVhZExhdGVyLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L3NpZGUtbmF2L1NpZGVOYXYudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvc3Vic2NyaXB0aW9ucy9TdWJzY3JpcHRpb25UaHVtYm5haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvc3Vic2NyaXB0aW9ucy9TdWJzY3JpcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9saWJyYXJ5L3VzZXItcGFnZXMvRHJhZnQudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvdXNlci1wYWdlcy9IZWFkZXIudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2xpYnJhcnkvdXNlci1wYWdlcy9QdWJsaXNoZWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2IG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5IGNlbnRlci1jb250ZW50IGl0YWxpY1wiIH0sIHsgY2hpbGRyZW46IFwiVGhlIGFuYWx5dGljcyBzZWN0aW9uIGlzIHN0aWxsIHVuZGVyIGRldmVsb3BtZW50ISBTdGF5IHR1bmVkIVwiIH0pKSB9KSkgfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFBhZ2VUaHVtYm5haWwgZnJvbSBcIi4uLy4uLy4uL3BhcnRpYWxzL1BhZ2VUaHVtYm5haWxcIjtcbmltcG9ydCB7IFVwbG9hZFBob3RvLCBDb25maXJtTW9kYWwsIElucHV0LCBUZXh0YXJlYSwgTG9hZGluZywgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgbG9hZGluZ01vZGFsLCBhbGVydCwgcmVxdWVzdCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xudmFyIENvbGxlY3Rpb25TaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFwibm9ybWFsXCIpLCBpbmZvU3RhdHVzID0gX2FbMF0sIHNldEluZm9TdGF0dXMgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIm5vcm1hbFwiKSwgcGFnZXNTdGF0dXMgPSBfYlswXSwgc2V0UGFnZXNTdGF0dXMgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShcInNwZWN0YXRvclwiKSwgdmlld2VyID0gX2NbMF0sIHNldFZpZXdlciA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwic2F2ZVwiKSwgYnRuID0gX2RbMF0sIHNldEJ0biA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9lWzBdLCBzZXRMb2FkaW5nID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoXCJcIiksIGlkID0gX2ZbMF0sIHNldElkID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoXCJcIiksIGlucHV0TmFtZSA9IF9nWzBdLCBzZXRJbnB1dE5hbWUgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShcIlwiKSwgaW5wdXREZXNjID0gX2hbMF0sIHNldElucHV0RGVzYyA9IF9oWzFdO1xuICAgIHZhciBfaiA9IHVzZVN0YXRlKFwiXCIpLCBuYW1lID0gX2pbMF0sIHNldE5hbWUgPSBfalsxXTtcbiAgICB2YXIgX2sgPSB1c2VTdGF0ZShcIlwiKSwgZGVzYyA9IF9rWzBdLCBzZXREZXNjID0gX2tbMV07XG4gICAgdmFyIF9sID0gdXNlU3RhdGUoW10pLCBwYWdlcyA9IF9sWzBdLCBzZXRQYWdlcyA9IF9sWzFdO1xuICAgIHZhciBfbSA9IHVzZVN0YXRlKFtdKSwgc2VsZWN0ZWRQYWdlcyA9IF9tWzBdLCBzZXRTZWxlY3RlZFBhZ2VzID0gX21bMV07XG4gICAgdmFyIF9vID0gdXNlU3RhdGUoXCJcIiksIGF1dGhvciA9IF9vWzBdLCBzZXRBdXRob3IgPSBfb1sxXTtcbiAgICB2YXIgX3AgPSB1c2VTdGF0ZShcIlwiKSwgcGhvdG8gPSBfcFswXSwgc2V0UGhvdG8gPSBfcFsxXTtcbiAgICB2YXIgX3EgPSB1c2VTdGF0ZShmYWxzZSksIHVwbG9hZFBob3RvTWRsID0gX3FbMF0sIHNldFVwbG9hZFBob3RvTWRsID0gX3FbMV07XG4gICAgdmFyIF9yID0gdXNlU3RhdGUoZmFsc2UpLCBjb25mQ0xEZWxldGlvbk1kbCA9IF9yWzBdLCBzZXRDb25mQ0xEZWxldGlvbk1kbCA9IF9yWzFdO1xuICAgIHZhciBfcyA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZkNMU3RvcFNoYXJpbmdNZGwgPSBfc1swXSwgc2V0Q29uZkNMU3RvcFNoYXJpbmdNZGwgPSBfc1sxXTtcbiAgICB2YXIgX3QgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZSZW1vdmVQYWdlc01kbCA9IF90WzBdLCBzZXRDb25mUmVtb3ZlUGFnZXNNZGwgPSBfdFsxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHZhciBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocGFyYW1zLmlkKVxuICAgICAgICAgICAgZmV0Y2hDb2xsZWN0aW9uRGF0YShwYXJhbXMuaWQpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgZmV0Y2hDb2xsZWN0aW9uRGF0YSA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCBlXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL2NvbGxlY3Rpb24vXCIuY29uY2F0KGlkKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiXCIuY29uY2F0KHJlc3BvbnNlLmNvbGxlY3Rpb24ubmFtZSB8fCBcIlwiLCBcIiB8IFBhZ3NlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnRuKHJlc3BvbnNlLmJ0bik7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXdlcihyZXNwb25zZS52aWV3ZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJZChyZXNwb25zZS5jb2xsZWN0aW9uLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUocmVzcG9uc2UuY29sbGVjdGlvbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVzYyhyZXNwb25zZS5jb2xsZWN0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG8ocmVzcG9uc2UuY29sbGVjdGlvbi5waG90by5zZWN1cmVfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXV0aG9yKHJlc3BvbnNlLmNvbGxlY3Rpb24udXNlci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZXMocmVzcG9uc2UuY29sbGVjdGlvbi5wYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZV8xLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi91L2NvbGxlY3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTb3JyeSB5b3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIHZpZXcgdGhhdCBjb2xsZWN0aW9uLlwiLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgLy8gU2VuZHMgYSByZXF1ZXN0IHRvIHNlcnZlciB0byBlaXRoZXIgc2F2ZSB0aGUgY29sbGVjdGlvbiBpbiBsaWJyYXJ5IG9yIHJlbW92ZSBpdFxuICAgIC8vIGlmIGl0J3MgYWxyZWFkeSBzYXZlZCB0byB0aGUgbGlicmFyeVxuICAgIHZhciB0b2dnbGVJbkxpYnJhcnkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UsIGVfMjtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wb3N0KFwiL2NvbGxlY3Rpb24vdG9nZ2xlLWxpYnJhcnkvXCIuY29uY2F0KGlkKSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJyZW1vdmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ0bihcInNhdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlRoZSBjb2xsZWN0aW9uIHdhcyBzdWNjZXNzZnVsbHkgcmVtb3ZlZCBmcm9tIHlvdXIgbGlicmFyeS5cIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnRuKFwicmVtb3ZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJUaGUgY29sbGVjdGlvbiB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIHlvdXIgbGlicmFyeS5cIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIC8vIFNlbmQgYSByZXF1ZXN0IHRvIHNlcnZlciB0byBzdGFydCBvciBzdG9wIHNoYXJpbmcgdGhlIGNvbGxlY3Rpb25cbiAgICB2YXIgdG9nZ2xlQ0xTaGFyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCBlXzM7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucG9zdChcIi9jb2xsZWN0aW9uL3NoYXJpbmcvXCIuY29uY2F0KGlkKSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnNoYXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ0bihcInN0b3Atc2hhcmluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVGhlIGNvbGxlY3Rpb24gaXMgbm93IGFjY2Vzc2libGUgYnkgb3RoZXJzLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5zaGFyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdG4oXCJzaGFyZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZDTFN0b3BTaGFyaW5nTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVGhlIGNvbGxlY3Rpb24gaGFzIHN0b3BwZWQgZnJvbSBiZWluZyBzaGFyZWQuXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICAvLyBTZW5kcyBhIHJlcXVlc3QgdG8gc2VydmVyIHRvIHVwZGF0ZSB0aGUgbmFtZSBhbmQgdGhlIGRlc2NyaXB0aW9uIG9mIGEgY29sbGVjdGlvblxuICAgIHZhciB1cGRhdGVJbmZvID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfNDtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKFwiU2F2aW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LnB1dChcIi9jb2xsZWN0aW9uL2luZm8vXCIuY29uY2F0KGlkKSwgeyBuYW1lOiBpbnB1dE5hbWUsIGRlc2NyaXB0aW9uOiBpbnB1dERlc2MgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29sbGVjdGlvbiBpbmZvIHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldEluZm9TdGF0dXMoXCJub3JtYWxcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUoaW5wdXROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVzYyhpbnB1dERlc2MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfNCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0IHRvIGRlbGV0ZSBjb2xsZWN0aW9uIGFkbiB0aGVuIHJlZGlyZWN0XG4gICAgdmFyIGRlbGV0ZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV81O1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJMb2FkaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmRlbGV0ZShcIi9jb2xsZWN0aW9uL1wiLmNvbmNhdChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGNvbGxlY3Rpb24gd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL3UvY29sbGVjdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZV81ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgLy8gU2VuZCBhIHJlcXVlc3QgdG8gc2VydmVyIHRvIHJlbW92ZSBzZWxlY3RlZCBwYWdlcyBmcm9tIGNvbGxlY3Rpb25cbiAgICB2YXIgcmVtb3ZlUGFnZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV3QXJyLCBlXzY7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZSZW1vdmVQYWdlc01kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucHV0KFwiL2FwaS9jb2xsZWN0aW9uL3JlbW92ZS1wYWdlcy9cIi5jb25jYXQoaWQpLCB7IHBhZ2VJZHM6IHNlbGVjdGVkUGFnZXMgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGFnZShzKSByZW1vdmVkIGZyb20geW91ciBjb2xsZWN0aW9uIHN1Y2Nlc3NmdWxseS5cIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXdBcnIgPSBwYWdlcy5maWx0ZXIoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFBhZ2VzLmluZGV4T2YocGFnZS5faWQpID09PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhZ2VzKG5ld0Fycik7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUGFnZXMoW10pO1xuICAgICAgICAgICAgICAgICAgICBzZXRQYWdlc1N0YXR1cyhcIm5vcm1hbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlXzYgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlNvcnJ5IGFuIGVycm9yIG9jY3VycmVkIHBsZWFzZSB0cnkgYWdhaW4uXCIsIFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgcmVuZGVyUGFnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi01IGNvbC1tZC0xLW9mLTUgY29sLXNtLTEtb2YtMyBjb2wteHMtMS1vZi0yIGNvbC14eHMtMS1vZi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChQYWdlVGh1bWJuYWlsLCB7IGlkOiBpdGVtLmlkLCBzZWxlY3RlZDogc2VsZWN0ZWRQYWdlcy5pbmRleE9mKGl0ZW0uX2lkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlLCBzdGF0dXM6IHBhZ2VzU3RhdHVzLCBicmllZkRlczogaXRlbS5jb250ZW50cy5icmllZkRlcywgdGl0bGU6IGl0ZW0uY29udGVudHMudGl0bGUsIGltYWdlOiBpdGVtLmNyb3BlZFBob3RvLnNlY3VyZV91cmwsIHRhcmdldDogXCJfYmxhbmtcIiwgdXJsOiBpdGVtLnVybCwgdHlwZTogaXRlbS50eXBlLCBhdXRob3JVc2VybmFtZTogaXRlbS5hdXRob3IudXNlcm5hbWUsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlc1N0YXR1cyA9PT0gXCJlZGl0aW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxlY3RlZFBhZ2VzLmluZGV4T2YoaXRlbS5faWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwYWdlIHRvIHRoZSBzZWxlY3RlZCBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUGFnZXMoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBzZWxlY3RlZFBhZ2VzLCB0cnVlKSwgW2l0ZW0uX2lkXSwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcGFnZSBmcm9tIHRoZSBzZWxlY3RlZCBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUGFnZXMoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBzZWxlY3RlZFBhZ2VzLnNsaWNlKDAsIGluZGV4KSwgdHJ1ZSksIHNlbGVjdGVkUGFnZXMuc2xpY2UoaW5kZXggKyAxKSwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSwgaXRlbS5faWQpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBSZW5kZXIgdGhlIHNoYXJlLCBzdG9wLXNoYXJpbmcsIHNhdmUgb3IgcmVtb3ZlIGJ1dHRvbnNcbiAgICB2YXIgcmVuZGVyQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYnRuID09PSBcInNhdmVcIilcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1ibHVlLW9cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9nZ2xlSW5MaWJyYXJ5KCk7IH0gfSwgeyBjaGlsZHJlbjogW1wiU2F2ZSB0byBMaWJyYXJ5IFwiLCBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1wbHVzLXNxdWFyZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pXSB9KSkpO1xuICAgICAgICBpZiAoYnRuID09PSBcInJlbW92ZVwiKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4gYnRuLXJlZC1vXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvZ2dsZUluTGlicmFyeSgpOyB9IH0sIHsgY2hpbGRyZW46IFtcIlJlbW92ZSBmcm9tIExpYnJhcnlcIiwgXCIgXCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLW1pbnVzLXNxdWFyZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pXSB9KSkpO1xuICAgICAgICBpZiAoYnRuID09PSBcInNoYXJlXCIpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0biBidG4tZ3JlZW4tb1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b2dnbGVDTFNoYXJpbmcoKTsgfSB9LCB7IGNoaWxkcmVuOiBbXCJTdGFydCBzaGFyaW5nIHRoaXMgY29sbGVjdGlvblwiLCBcIiBcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtc2hhcmUtc3F1YXJlXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSldIH0pKSk7XG4gICAgICAgIGlmIChidG4gPT09IFwic3RvcC1zaGFyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0biBidG4tcmVkLW9cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q29uZkNMU3RvcFNoYXJpbmdNZGwodHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW1wiU3RvcCBzaGFyaW5nIHRoaXMgY29sbGVjdGlvblwiLCBcIiBcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtc3RvcC1jaXJjbGVcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpKTtcbiAgICB9O1xuICAgIC8vIFJlbmRlciB0aGUgY29sbGVjdGlvbiBpbWFnZSwgdmlld2VyIHNob3VsZCBiZSBhYmxlIHRvIHVwZGF0ZSBpdCBpZiB0aGVpciBvd25lclxuICAgIHZhciByZW5kZXJJbWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2aWV3ZXIgPT09IFwib3duZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goVXBsb2FkUGhvdG8sIHsgb3BlbjogdXBsb2FkUGhvdG9NZGwsIGhlYWRlcjogXCJVcGxvYWQgYSBQaG90b1wiLCB0ZXh0OiBcIlVwbG9hZCBhIHBob3RvIGZvciB5b3VyIGNvbGxlY3Rpb246XCIsIGlucHV0TGFiZWxOYW1lOiBcIkNob29zZSBhIHBob3RvXCIsIHVybDogXCIvY29sbGVjdGlvbi9waG90by9cIi5jb25jYXQoaWQpLCBtaW5XaWR0aDogOTYwLCBtaW5IZWlnaHQ6IDU0MCwgc2l6ZTogODAwMDAwMCwgYXNwZWN0UmF0aW86IDE2IC8gOSwgc3VjY2VzczogZnVuY3Rpb24gKHBob3RvKSB7IHJldHVybiBzZXRQaG90byhwaG90byk7IH0sIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRQaG90b01kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pLCBfanN4cyhcImFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW1nLXVwbG9hZC1idG5cIiwgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0VXBsb2FkUGhvdG9NZGwodHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IHBob3RvLCBvbkVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9pbWFnZXMvY29sbGVjdGlvbi1wbGFjZWhvbGRlci5zdmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJpbWctdXBsb2FkLWJ0bl9fY292ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJpbWctdXBsb2FkLWJ0bl9fY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1jbG91ZC11cGxvYWRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgVXBsb2FkIGEgTmV3IFBob3RvXCJdIH0pKSB9KSldIH0pKV0gfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoX2pzeChcImltZ1wiLCB7IHNyYzogcGhvdG8sIG9uRXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgXCIvaW1hZ2VzL2NvbGxlY3Rpb24tcGxhY2Vob2xkZXIuc3ZnXCI7XG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9O1xuICAgIC8vIEluZm8gYWN0aW9ucyBidXR0b25zIGZvciBvd25lclxuICAgIHZhciByZW5kZXJBY3Rpb25CdG5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodmlld2VyID09PSBcIm93bmVyXCIgJiYgaW5mb1N0YXR1cyA9PT0gXCJub3JtYWxcIilcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi1zaG93X19hY3Rpb25zXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmx1ZSBidG4taS1iaWdcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEluZm9TdGF0dXMoXCJlZGl0aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dERlc2MoZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXBlbmNpbFwiIH0pIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1yZWQgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENvbmZDTERlbGV0aW9uTWRsKHRydWUpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRyYXNoXCIgfSkgfSkpXSB9KSkpO1xuICAgIH07XG4gICAgLy8gRWRpdCBmb3JtIGZvciBjb2xsZWN0aW9uIG5hbWUgYW5kIGRlc2NyaXB0aW9uLiBPbmx5IGZvciBvd25lclxuICAgIHZhciByZW5kZXJFZGl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZpZXdlciA9PT0gXCJvd25lclwiICYmIGluZm9TdGF0dXMgPT09IFwiZWRpdGluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybSBtYXJnaW4tYm90dG9tLTIgbWFyZ2luLXRvcC0zXCIsIG9uU3VibWl0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUluZm8oKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyBsaW5lZDogdHJ1ZSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkNvbGxlY3Rpb24gbmFtZVwiLCB2YWx1ZTogaW5wdXROYW1lLCByZXF1aXJlZDogdHJ1ZSwgYXV0b0ZvY3VzOiB0cnVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBzZXRJbnB1dE5hbWUodmFsdWUpOyB9IH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goVGV4dGFyZWEsIHsgcm93czogMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGQgYSBkZXNjcmlwdGlvblwiLCB2YWx1ZTogaW5wdXREZXNjLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBzZXRJbnB1dERlc2ModmFsdWUpOyB9IH0pIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicmlnaHQtY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc20gbWFyZ2luLXJpZ2h0LTFcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SW5mb1N0YXR1cyhcIm5vcm1hbFwiKTsgfSB9LCB7IGNoaWxkcmVuOiBcIkNhbmNlbFwiIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLWJsdWUgYnRuLXNtXCIgfSwgeyBjaGlsZHJlbjogXCJTYXZlXCIgfSkpXSB9KSldIH0pKSk7XG4gICAgfTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKENvbmZpcm1Nb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiRGVsZXRlIHlvdXIgY29sbGVjdGlvblwiLCBvcGVuOiBjb25mQ0xEZWxldGlvbk1kbCwgYnRuTmFtZTogXCJEZWxldGVcIiwgb25Db25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvbGxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB9LCBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25mQ0xEZWxldGlvbk1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBjb2xsZWN0aW9uPyBcIiB9KSwgcGFnZXMubGVuZ3RoID4gMCAmJiAoX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJBbGwgdGhlIHBhZ2VzIHlvdSBoYXZlIHNhdmVkIG9uIHRoaXMgY29sbGVjdGlvbiB3aWxsIGJlIHJlbW92ZWQgZnJvbSB5b3VyIGxpYnJhcnkgaWYgeW91IGRvbid0IGhhdmUgdGhlbSBzYXZlZCBzb21ld2hlcmUgZWxzZS5cIiB9KSksIGJ0biA9PT0gXCJzdG9wLXNoYXJpbmdcIiAmJiAoX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJUaGlzIGNvbGxlY3Rpb24gaXMgYmVpbmcgc2hhcmVkIGZvciBvdGhlcnMuIElmIHlvdSBkZWxldGUgdGhlIGNvbGxlY3Rpb24gYWxsIHRoZSBwZW9wbGUgdGhhdCBoYXZlIHNhdmVkIHlvdXIgY29sbGVjdGlvbiB3b24ndCBiZSBhYmxlIHRvIGFjY2VzcyBpdCBhbnkgbG9uZ2VyLlwiIH0pKSwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIllvdSBjYW5ub3QgdW5kbyB0aGlzIGFjdGlvbi5cIiB9KV0gfSkpLCBfanN4cyhDb25maXJtTW9kYWwsIF9fYXNzaWduKHsgaGVhZGVyOiBcIlN0b3Agc2hhcmluZyB5b3VyIGNvbGxlY3Rpb25cIiwgb3BlbjogY29uZkNMU3RvcFNoYXJpbmdNZGwsIGJ0bk5hbWU6IFwiU3RvcCBTaGFyaW5nXCIsIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDTFNoYXJpbmcoKTtcbiAgICAgICAgICAgICAgICB9LCBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25mQ0xTdG9wU2hhcmluZ01kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBtYWtlIHlvdXIgY29sbGVjdGlvbiBwcml2YXRlPyBcIiB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJJZiB5b3Ugc3RvcCB0aGUgY29sbGVjdGlvbiBmcm9tIGJlaW5nIHNoYXJlZCwgYWxsIHRoZSBwZW9wbGUgdGhhdCBoYXZlIHNhdmVkIHlvdXIgY29sbGVjdGlvbiB3b24ndCBiZSBhYmxlIHRvIGFjY2VzcyBpdCBhbmQgdGhlIGNvbGxlY3Rpb24gd29uJ3QgYmUgc2hvd24gb24geW91ciBwdWJsaWMgcHJvZmlsZSBhbnkgbG9uZ2VyIHVudGlsIHlvdSBtYWtlIGl0IHB1YmxpYyBhZ2Fpbi5cIiB9KV0gfSkpLCBfanN4cyhDb25maXJtTW9kYWwsIF9fYXNzaWduKHsgaGVhZGVyOiBcIlJlbW92ZSBwYWdlc1wiLCBvcGVuOiBjb25mUmVtb3ZlUGFnZXNNZGwsIGJ0bk5hbWU6IFwiUmVtb3ZlXCIsIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQYWdlcygpO1xuICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZSZW1vdmVQYWdlc01kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgc2VsZWN0ZWQgcGFnZShzKSBmcm9tIHlvdXIgY29sbGVjdGlvbj9cIiwgXCIgXCJdIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIllvdSBjYW5ub3QgdW5kbyB0aGlzIGFjdGlvbi5cIiB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi0yIGNvbC1tZC0xLW9mLTJcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJJbWcoKSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sLWxnLTEtb2YtMiBjb2wtbWQtMS1vZi0yXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi1zaG93XCIgfSwgeyBjaGlsZHJlbjogW3JlbmRlckFjdGlvbkJ0bnMoKSwgaW5mb1N0YXR1cyA9PT0gXCJub3JtYWxcIiAmJiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi1zaG93X19uYW1lXCIgfSwgeyBjaGlsZHJlbjogbmFtZSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi1zaG93X19kZXNjXCIgfSwgeyBjaGlsZHJlbjogZGVzYyB9KSldIH0pKSwgcmVuZGVyRWRpdEZvcm0oKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi1zaG93X19jcmVhdG9yXCIgfSwgeyBjaGlsZHJlbjogW1wiQ3JlYXRlZCBieSBcIiwgdmlld2VyID09PSBcIm93bmVyXCIgPyBcIllvdVwiIDogYXV0aG9yXSB9KSksIHJlbmRlckJ0bigpXSB9KSkgfSkpXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogcGFnZXMubGVuZ3RoID4gMCA/IChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRlci1uYXYgbWFyZ2luLXRvcC00XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFtwYWdlcy5sZW5ndGgsIFwiIFBhZ2VcIiwgcGFnZXMubGVuZ3RoID4gMSA/IFwic1wiIDogXCJcIiwgXCIgSW4gVGhpcyBDb2xsZWN0aW9uOlwiXSB9KSksIHBhZ2VzU3RhdHVzID09PSBcImVkaXRpbmdcIiAmJiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGVyLW5hdl9fbGFiZWxcIiB9LCB7IGNoaWxkcmVuOiBbc2VsZWN0ZWRQYWdlcy5sZW5ndGgsIFwiIHBhZ2VcIiwgc2VsZWN0ZWRQYWdlcy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwiLCBcIiBzZWxlY3RlZFwiXSB9KSkpLCB2aWV3ZXIgPT09IFwib3duZXJcIiAmJiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2X19hY3Rpb25zXCIgfSwgeyBjaGlsZHJlbjogcGFnZXNTdGF0dXMgPT09IFwibm9ybWFsXCIgPyAoX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4tdGV4dFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRQYWdlc1N0YXR1cyhcImVkaXRpbmdcIik7IH0gfSwgeyBjaGlsZHJlbjogXCJFZGl0XCIgfSkpKSA6IChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLXRleHQgYnRuLXRleHQtcmVkXCIsIGRpc2FibGVkOiBzZWxlY3RlZFBhZ2VzLmxlbmd0aCA9PT0gMCwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q29uZlJlbW92ZVBhZ2VzTWRsKHRydWUpOyB9IH0sIHsgY2hpbGRyZW46IFwiUmVtb3ZlXCIgfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi10ZXh0XCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlc1N0YXR1cyhcIm5vcm1hbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFBhZ2VzKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJEb25lXCIgfSkpXSB9KSkgfSkpKV0gfSkpLCBwYWdlc1N0YXR1cyA9PT0gXCJlZGl0aW5nXCIgJiYgKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50IGEtMTVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLXRleHRcIiwgZGlzYWJsZWQ6IHNlbGVjdGVkUGFnZXMubGVuZ3RoICE9PSAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXNbMF0uX2lkID09PSBzZWxlY3RlZFBhZ2VzWzBdLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0FyciA9IF9fc3ByZWFkQXJyYXkoW10sIHBhZ2VzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gbmV3QXJyLmZpbmRJbmRleChmdW5jdGlvbiAocCkgeyByZXR1cm4gcC5faWQgPT09IHNlbGVjdGVkUGFnZXNbMF07IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gbmV3QXJyW2lkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyW2lkeF0gPSBuZXdBcnJbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyW2lkeCAtIDFdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogQHRvZG8gc2VuZCBhIHJlcXVlc3QgdG8gc2VydmVyIHRvIHVwZGF0ZSB0aGUgb3JkZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlcyhuZXdBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctY2lyY2xlLWxlZnRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgXCIsIFwiTW92ZSBMZWZ0XCJdIH0pKSwgX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLXRleHRcIiwgZGlzYWJsZWQ6IHNlbGVjdGVkUGFnZXMubGVuZ3RoICE9PSAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0uX2lkID09PSBzZWxlY3RlZFBhZ2VzWzBdLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0FyciA9IF9fc3ByZWFkQXJyYXkoW10sIHBhZ2VzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gbmV3QXJyLmZpbmRJbmRleChmdW5jdGlvbiAocCkgeyByZXR1cm4gcC5faWQgPT09IHNlbGVjdGVkUGFnZXNbMF07IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gbmV3QXJyW2lkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyW2lkeF0gPSBuZXdBcnJbaWR4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyW2lkeCArIDFdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogQHRvZG8gc2VuZCBhIHJlcXVlc3QgdG8gc2VydmVyIHRvIHVwZGF0ZSB0aGUgb3JkZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlcyhuZXdBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbXCJNb3ZlIFJpZ2h0XCIsIFwiIFwiLCBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1jaXJjbGUtcmlnaHRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpXSB9KSkpXSB9KSkgOiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsZWN0aW9uLXNob3dfX25vLXBhZ2UtbXNnXCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIGNvbGxlY3Rpb24gZG9lcyBub3QgaGF2ZSBhbnkgcGFnZS5cIiB9KSkpIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJQYWdlcygpIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25TaG93O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBEcm9wZG93biwgSW5wdXQsIFRleHRhcmVhLCBCdXR0b24sIExvYWRpbmcsIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IGFsZXJ0LCByZXF1ZXN0LCBsb2FkaW5nTW9kYWwgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuLi8uLi8uLi9wYXJ0aWFscy9Db2xsZWN0aW9uVGh1bWJuYWlsXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0U2VjdGlvbiB9IGZyb20gXCIuLi9zaWRlLW5hdi9zaWRlTmF2U2xpY2VcIjtcbnZhciBDb2xsZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmdDcmVhdGVkID0gX2FbMF0sIHNldExvYWRpbmdDcmVhdGVkID0gX2FbMV07IC8vIGxvYWRpbmcgZm9yIHVzZXIgY3JlYXRlZCBjb2xsZWN0aW9uc1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZ1NhdmVkID0gX2JbMF0sIHNldExvYWRpbmdTYXZlZCA9IF9iWzFdOyAvLyBsb2FkaW5nIGZvciBzYXZlZCBjb2xsZWN0aW9uc1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgbmV3Q29sbGVjdGlvbk1kbCA9IF9jWzBdLCBzZXROZXdDb2xsZWN0aW9uTWRsID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoXCJcIiksIG5hbWUgPSBfZFswXSwgc2V0TmFtZSA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCBkZXNjcmlwdGlvbiA9IF9lWzBdLCBzZXREZXNjcmlwdGlvbiA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFtdKSwgc2F2ZWRDb2xsZWN0aW9ucyA9IF9mWzBdLCBzZXRTYXZlZENvbGxlY3Rpb25zID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoW10pLCBjcmVhdGVkQ29sbGVjdGlvbnMgPSBfZ1swXSwgc2V0Q3JlYXRlZENvbGxlY3Rpb25zID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlU3RhdGUoXCJkYXRlLWNyZWF0ZWRcIiksIHNvcnRCeUNDID0gX2hbMF0sIHNldFNvcnRCeUNDID0gX2hbMV07IC8vIGNyZWF0ZWQgY29sbGVjdGlvbnNcbiAgICB2YXIgX2ogPSB1c2VTdGF0ZShcImRhdGUtYWRkZWRcIiksIHNvcnRCeVNDID0gX2pbMF0sIHNldFNvcnRCeVNDID0gX2pbMV07IC8vIHNhdmVkIGNvbGxlY3Rpb25zXG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQ29sbGVjdGlvbnMgfCBQYWdzZXJcIjtcbiAgICAgICAgZmV0Y2hDb2xsZWN0aW9ucyhcImNyZWF0ZWQtc2F2ZWRcIik7XG4gICAgfSwgW10pO1xuICAgIC8vIENyZWF0ZXMgYSBuZXcgY29sbGVjdGlvblxuICAgIHZhciBjcmVhdGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5wb3N0KFwiL2NvbGxlY3Rpb25cIiwgeyBuYW1lOiBuYW1lLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgY29sbGVjdGlvbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5cIiwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbGxlY3Rpb25zKFwiY3JlYXRlZFwiLCBcImRhdGUtY3JlYXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV3Q29sbGVjdGlvbk1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIC8vIEZldGNoZXMgdGhlIGxpc3Qgb2YgY29sbGVjdGlvbiBmcm9tIHRoZSBzZXJ2ZXIsIGVpdGhlciB0aG9zZSB0aGF0IHRoZSB1c2VyIGhhcyBjcmVhdGVkIG9yIHNhdmVkXG4gICAgdmFyIGZldGNoQ29sbGVjdGlvbnMgPSBmdW5jdGlvbiAoa2luZCwgc29ydEJ5KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UsIGVfMjtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3JlYXRlZC1zYXZlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdDcmVhdGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdTYXZlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzYXZlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdTYXZlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NyZWF0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5nZXQoXCIvY29sbGVjdGlvbnMvXCIuY29uY2F0KGtpbmQsIFwiP3NvcnRCeT1cIikuY29uY2F0KHNvcnRCeSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3JlYXRlZC1zYXZlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmVkQ29sbGVjdGlvbnMocmVzcG9uc2Uuc2F2ZWRDb2xsZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3JlYXRlZENvbGxlY3Rpb25zKHJlc3BvbnNlLmNyZWF0ZWRDb2xsZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2F2ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZlZENvbGxlY3Rpb25zKHJlc3BvbnNlLnNhdmVkQ29sbGVjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNyZWF0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDcmVhdGVkQ29sbGVjdGlvbnMocmVzcG9uc2UuY3JlYXRlZENvbGxlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ3JlYXRlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdTYXZlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgdmFyIHJlbmRlckNvbGxlY3Rpb25zID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgaWYgKGtpbmQgPT09IFwic2F2ZWRDb2xsZWN0aW9uc1wiKSB7XG4gICAgICAgICAgICBsaXN0ID0gc2F2ZWRDb2xsZWN0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpc3QgPSBjcmVhdGVkQ29sbGVjdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYS0xNFwiIH0sIHsgY2hpbGRyZW46IFwiQ29sbGVjdGlvbiBsaXN0IGlzIGVtcHR5LlwiIH0pKTtcbiAgICAgICAgcmV0dXJuIGxpc3QubWFwKGZ1bmN0aW9uIChjbCkge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbC1sZy0xLW9mLTUgY29sLW1kLTEtb2YtNSBjb2wtc20tMS1vZi0zIGNvbC14cy0xLW9mLTIgY29sLXh4cy0xLW9mLTFcIiB9LCB7IGNoaWxkcmVuOiBfanN4KENvbGxlY3Rpb24sIHsgaWQ6IGNsLl9pZCwgbmFtZTogY2wubmFtZSwgaW1nOiBjbC5waG90by5zZWN1cmVfdXJsLCBkZXNjOiBjbC5kZXNjcmlwdGlvbiwgcGFnZU51bTogY2wucGFnZXMubGVuZ3RoLCBhdXRob3I6IGNsLnVzZXIubmFtZSwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2VjdGlvbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSkgfSksIGNsLl9pZCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KE1vZGFsLCBfX2Fzc2lnbih7IGhlYWRlcjogXCJDcmVhdGUgYSBOZXcgQ29sbGVjdGlvblwiLCBvcGVuOiBuZXdDb2xsZWN0aW9uTWRsLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE5ld0NvbGxlY3Rpb25NZGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1cIiwgb25TdWJtaXQ6IGNyZWF0ZUNvbGxlY3Rpb24gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyBsYWJlbDogXCJOYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJUaGUgbmFtZSBvZiB5b3VyIGNvbGxlY3Rpb24uXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZTogbmFtZSwgcmVxdWlyZWQ6IHRydWUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRleHRhcmVhLCB7IGxhYmVsOiBcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIiwgcGxhY2Vob2xkZXI6IFwiRGVzY3JpYmUgd2hhdCB0aGlzIGNvbGxlY3Rpb24gaXMgZm9yLCBjb250YWlucywgb3IgYW55IG90aGVyIGluZm9ybWF0aW9uIHlvdSBkZWVtIHVzZWZ1bC5cIiwgdmFsdWU6IGRlc2NyaXB0aW9uLCByb3dzOiA0LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LXJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCB0eXBlOiBcInN1Ym1pdFwiIH0sIHsgY2hpbGRyZW46IFwiQ3JlYXRlXCIgfSkpIH0pKV0gfSkpIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRlci1uYXYgbWFyZ2luLWJvdHRvbS0xXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDb2xsZWN0aW9ucyBZb3UndmUgQ3JlYXRlZDpcIiB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRlci1uYXZfX2FjdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiBbY3JlYXRlZENvbGxlY3Rpb25zLmxlbmd0aCA+IDEgJiYgKF9qc3hzKERyb3Bkb3duLCBfX2Fzc2lnbih7IG51bTogXCIxXCIsIHNlbGVjdDogc29ydEJ5Q0MsIG9uQ2hhbmdlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaENvbGxlY3Rpb25zKFwiY3JlYXRlZFwiLCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcImJ0bi1uYW1lXCIsIFwiZGF0YS1pY29uLWNsYXNzXCI6IFwiZmEgZmEtc29ydC1hbW91bnQtYXNjXCIgfSwgeyBjaGlsZHJlbjogXCJTb3J0IEJ5XCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJkYXRlLWNyZWF0ZWRcIiB9LCB7IGNoaWxkcmVuOiBcIkRhdGUgQ3JlYXRlZFwiIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwiYS16XCIgfSwgeyBjaGlsZHJlbjogXCJBIC0gWlwiIH0pKV0gfSkpKSwgX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLXRleHRcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdDb2xsZWN0aW9uTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW1wiQ3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cIiwgXCIgXCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXBsdXNcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpXSB9KSldIH0pKSwgbG9hZGluZ0NyZWF0ZWQgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKSwgIWxvYWRpbmdDcmVhdGVkICYmIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckNvbGxlY3Rpb25zKFwiY3JlYXRlZENvbGxlY3Rpb25zXCIpIH0pKSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRlci1uYXYgbWFyZ2luLWJvdHRvbS0xXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDb2xsZWN0aW9ucyBZb3UndmUgU2F2ZWQ6XCIgfSkpLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImhlYWRlci1uYXZfX2FjdGlvbnNcIiB9KV0gfSkpLCBsb2FkaW5nU2F2ZWQgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKSwgIWxvYWRpbmdTYXZlZCAmJiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJDb2xsZWN0aW9ucyhcInNhdmVkQ29sbGVjdGlvbnNcIikgfSkpKV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbnM7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGVyLW5hdiBtYXJnaW4tdG9wLTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeSBjZW50ZXItY29udGVudCBpdGFsaWNcIiB9LCB7IGNoaWxkcmVuOiBcIlRoZSBkYXNoYm9hcmQgc2VjdGlvbiBpcyBzdGlsbCB1bmRlciBkZXZlbG9wbWVudCEgU3RheSB0dW5lZCFcIiB9KSkgfSkpIH0pKSk7XG59KTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1dGlsLCByZXF1ZXN0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG52YXIgQ29tbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoW10pLCBjb21tZW50cyA9IF9hWzBdLCBzZXRDb21tZW50cyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9iWzBdLCBzZXRMb2FkaW5nID0gX2JbMV07XG4gICAgLy8gU2VuZHMgYSByZXF1ZXN0IHRvIHNlcnZlciB0byBmZXRjaCB0aGUgbGlzdCBvZiBjb21tZW50cyB1c2VyIGhhcyB3cml0dGVuXG4gICAgdmFyIGZldGNoQ29tbWVudHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL2NvbW1lbnRzL2hpc3RvcnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDb21tZW50cyhyZXNwb25zZS5jb21tZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoQ29tbWVudHMoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gUmVuZGVyIGxpc3Qgb2YgY29tbWVudHMgdXNlciBoYXMgd3JpdHRlblxuICAgIHZhciByZW5kZXJDb21tZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRzLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgLy8gRGVjaWRlIHdoYXQgdG8gc2hvdyBmb3IgdGhlIGNvbW1lbnQgaGlzdG9yeSBsYWJlbFxuICAgICAgICAgICAgdmFyIGxhYmVsVGV4dDtcbiAgICAgICAgICAgIGlmICghYy5yZXBseS5uYW1lKVxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA9IChfanN4cyhcInNwYW5cIiwgeyBjaGlsZHJlbjogW1wiWW91IGNvbW1lbnRlZCBvbiBwYWdlXCIsIFwiIFwiLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogdXRpbC5wYWdlVXJsKGMucGFnZS51cmwsIGMucGFnZS5hdXRob3IudXNlcm5hbWUsIGMucGFnZS50eXBlKSwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sIHsgY2hpbGRyZW46IGMucGFnZS50aXRsZSB9KSkgfSldIH0pKTtcbiAgICAgICAgICAgIGlmIChjLnJlcGx5Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gYy5yZXBseS5uYW1lID09PSBcInlvdXJzZWxmXCIgPyAoX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogXCJ5b3Vyc2VsZlwiIH0pKSA6IChfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KGMucmVwbHkudXNlcm5hbWUpLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSwgeyBjaGlsZHJlbjogYy5yZXBseS5uYW1lIH0pKSB9KSk7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gKF9qc3hzKFwic3BhblwiLCB7IGNoaWxkcmVuOiBbXCJZb3UgcmVwbGllZCB0byBcIiwgbmFtZV8xLCBcIiBvbiBwYWdlXCIsIFwiIFwiLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogdXRpbC5wYWdlVXJsKGMucGFnZS51cmwsIGMucGFnZS5hdXRob3IudXNlcm5hbWUsIGMucGFnZS50eXBlKSwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sIHsgY2hpbGRyZW46IGMucGFnZS50aXRsZSB9KSkgfSldIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50LWJyaWVmX19sYWJlbFwiIH0sIHsgY2hpbGRyZW46IGxhYmVsVGV4dCB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnQtYnJpZWZcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW2MudGV4dCwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50LWJyaWVmX19kYXRlXCIgfSwgeyBjaGlsZHJlbjogYy5kYXRlIH0pKV0gfSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiB1dGlsLnBhZ2VVcmwoYy5wYWdlLnVybCwgYy5wYWdlLmF1dGhvci51c2VybmFtZSwgYy5wYWdlLnR5cGUpLCBjbGFzc05hbWU6IFwiYnRuLWkgY29tbWVudC1icmllZl9fZ29cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1jaXJjbGUtcmlnaHRcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSkgfSldIH0pKV0gfSwgYy5pZCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogW19qc3goSGVhZGVyLCB7fSksIGxvYWRpbmcgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKSwgIWxvYWRpbmcgJiYgcmVuZGVyQ29tbWVudHMoKV0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFNlY3Rpb24sIHNlbGVjdFNlY3Rpb24gfSBmcm9tIFwiLi4vc2lkZS1uYXYvc2lkZU5hdlNsaWNlXCI7XG52YXIgSGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIHNlY3Rpb24gPSB1c2VTZWxlY3RvcihzZWxlY3RTZWN0aW9uKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImxpbmVkLWJ0bnMgbWFyZ2luLWJvdHRvbS0yIG1hcmdpbi10b3AtMVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi9mZWVkL2hpc3RvcnkvcGFnZXNcIiwgY2xhc3NOYW1lOiBzZWN0aW9uID09PSBcImhpc3RvcnkvcGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYnRuLWxpbmVkIGJ0bi1saW5lZC0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJ0bi1saW5lZFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwYXRjaChzZXRTZWN0aW9uKFwiaGlzdG9yeS9wYWdlc1wiKSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWZpbGUgbWFyZ2luLXJpZ2h0LTNweFwiIH0pLCBcIiBSZWFkc1wiXSB9KSksIF9qc3hzKExpbmssIF9fYXNzaWduKHsgdG86IFwiL2ZlZWQvaGlzdG9yeS9jb21tZW50c1wiLCBjbGFzc05hbWU6IHNlY3Rpb24gPT09IFwiaGlzdG9yeS9jb21tZW50c1wiXG4gICAgICAgICAgICAgICAgICAgID8gXCJidG4tbGluZWQgYnRuLWxpbmVkLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYnRuLWxpbmVkXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRpc3BhdGNoKHNldFNlY3Rpb24oXCJoaXN0b3J5L2NvbW1lbnRzXCIpKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtY29tbWVudGluZyBtYXJnaW4tcmlnaHQtM3B4XCIgfSksIFwiIENvbW1lbnRzXCJdIH0pKV0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZVRodW1ibmFpbCBmcm9tIFwiLi4vLi4vLi4vcGFydGlhbHMvUGFnZVRodW1ibmFpbFwiO1xuaW1wb3J0IHsgRHJvcGRvd24sIENvbmZpcm1Nb2RhbCwgTG9hZGluZyB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3RTdGF0dXMsIHNlbGVjdEZpbHRlckJ5LCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RTZWxlY3RlZFBhZ2VzLCBzZWxlY3RQYWdlcywgZmV0Y2hQYWdlcywgc2V0U3RhdHVzLCBzZWxlY3RTb3J0QnksIHNlbGVjdFBhZ2UsIHJlbW92ZVBhZ2VzLCB9IGZyb20gXCIuLi9wYWdlc1NsaWNlXCI7XG52YXIgUGFnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBjb25maXJtYXRpb25Nb2RhbE9wZW4gPSBfYVswXSwgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuID0gX2FbMV07XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgc3RhdHVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3RhdHVzKTtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBmaWx0ZXJCeSA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpbHRlckJ5KTtcbiAgICB2YXIgc29ydEJ5ID0gdXNlU2VsZWN0b3Ioc2VsZWN0U29ydEJ5KTtcbiAgICB2YXIgc2VsZWN0ZWRQYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFNlbGVjdGVkUGFnZXMpO1xuICAgIHZhciBwYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2VzKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiSGlzdG9yeSB8IFBhZ3NlclwiO1xuICAgICAgICBkaXNwYXRjaChmZXRjaFBhZ2VzKFwiaGlzdG9yeVwiLCBmaWx0ZXJCeSkpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0U3RhdHVzKFwibm9ybWFsXCIpKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlbmRlckRyb3Bkb3ducyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZpbHRlckJ5ID09PSBcImFsbFwiICYmIHBhZ2VzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcIm5vcm1hbFwiKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhEcm9wZG93biwgX19hc3NpZ24oeyBudW06IFwiMVwiLCBzZWxlY3Q6IGZpbHRlckJ5LCBvbkNoYW5nZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hQYWdlcyhcImhpc3RvcnlcIiwgbmFtZSwgc29ydEJ5KSk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJidG4tbmFtZVwiLCBcImRhdGEtaWNvbi1jbGFzc1wiOiBcImZhIGZhLWZpbHRlclwiIH0sIHsgY2hpbGRyZW46IFwiRmlsdGVyIEJ5XCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJhbGxcIiB9LCB7IGNoaWxkcmVuOiBcIkFsbCBQYWdlc1wiIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwicHJpdmF0ZVwiIH0sIHsgY2hpbGRyZW46IFwiUHJpdmF0ZSBQYWdlc1wiIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwicHVibGljXCIgfSwgeyBjaGlsZHJlbjogXCJQdWJsaWMgUGFnZXNcIiB9KSldIH0pKSk7XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sLWxnLTEtb2YtNSBjb2wtbWQtMS1vZi01IGNvbC1zbS0xLW9mLTMgY29sLXhzLTEtb2YtMiBjb2wteHhzLTEtb2YtMVwiIH0sIHsgY2hpbGRyZW46IF9qc3goUGFnZVRodW1ibmFpbCwgeyBpZDogaXRlbS5pZCwgc2VsZWN0ZWQ6IHNlbGVjdGVkUGFnZXMuaW5kZXhPZihpdGVtLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlLCBzdGF0dXM6IHN0YXR1cywgYnJpZWZEZXM6IGl0ZW0uY29udGVudHMuYnJpZWZEZXMsIHRpdGxlOiBpdGVtLmNvbnRlbnRzLnRpdGxlLCBpbWFnZTogaXRlbS5waG90by5zZWN1cmVfdXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHVybDogaXRlbS51cmwsIHR5cGU6IGl0ZW0udHlwZSwgbGFiZWw6IGl0ZW0uZGF0ZVZpc2l0ZWQsIGF1dGhvclVzZXJuYW1lOiBpdGVtLmF1dGhvci51c2VybmFtZSwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwiZWRpdGluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZWxlY3RQYWdlKGl0ZW0uaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSksIGl0ZW0uaWQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZpbHRlckJ5ID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTEzXCIgfSwgeyBjaGlsZHJlbjogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgcHVibGljIHBhZ2Ugb24geW91ciBoaXN0b3J5LlwiIH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsdGVyQnkgPT09IFwicHJpdmF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTEzXCIgfSwgeyBjaGlsZHJlbjogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJpdmF0ZSBwYWdlIG9uIHlvdXIgaGlzdG9yeS5cIiB9KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTNcIiB9LCB7IGNoaWxkcmVuOiBcIllvdXIgcmVhZGluZyBoaXN0b3J5IGxpc3QgaXMgZW1wdHkuXCIgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVtb3ZlQnRuID0gc3RhdHVzID09PSBcImVkaXRpbmdcIiAmJiAoX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4tdGV4dCBidG4tdGV4dC1yZWRcIiwgZGlzYWJsZWQ6IHNlbGVjdGVkUGFnZXMubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZSwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuKHRydWUpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiUmVtb3ZlXCIgfSkpKTtcbiAgICB2YXIgZG9uZUJ0biA9IHN0YXR1cyA9PT0gXCJlZGl0aW5nXCIgJiYgKF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLXRleHRcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0U3RhdHVzKFwibm9ybWFsXCIpKTtcbiAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBcIkRvbmVcIiB9KSkpO1xuICAgIHZhciBlZGl0QnRuID0gcGFnZXMubGVuZ3RoID4gMCAmJiBzdGF0dXMgPT09IFwibm9ybWFsXCIgJiYgKF9qc3hzKFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi10ZXh0XCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFN0YXR1cyhcImVkaXRpbmdcIikpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtcIkVkaXQgXCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXBlbmNpbC1zcXVhcmVcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpKTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChDb25maXJtTW9kYWwsIF9fYXNzaWduKHsgaGVhZGVyOiBcIlJlbW92ZSBGcm9tIEhpc3Rvcnk/XCIsIG9wZW46IGNvbmZpcm1hdGlvbk1vZGFsT3Blbiwgb25Db25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVBhZ2VzKFwiaGlzdG9yeVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHNlbGVjdGVkIHBhZ2VcIiwgc2VsZWN0ZWRQYWdlcy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwiLCBcIiBmcm9tIHlvdXIgaGlzdG9yeT8gXCIsIF9qc3goXCJiclwiLCB7fSksIFwiIFlvdSBoYXZlIHNlbGVjdGVkIFwiLCBzZWxlY3RlZFBhZ2VzLmxlbmd0aCwgXCIgcGFnZVwiLCBzZWxlY3RlZFBhZ2VzLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCIsIFwiIGFuZCB5b3UgY2Fubm90IHVuZG8gdGhlIGFjdGlvbi5cIl0gfSkgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChIZWFkZXIsIHt9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGVyLW5hdlwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiWW91ciBSZWFkaW5nIEhpc3Rvcnk6XCIgfSkpLCAhbG9hZGluZyAmJiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGVyLW5hdl9fYWN0aW9uc1wiIH0sIHsgY2hpbGRyZW46IFtyZW5kZXJEcm9wZG93bnMoKSwgcmVtb3ZlQnRuLCBkb25lQnRuLCBlZGl0QnRuXSB9KSkpXSB9KSksIGxvYWRpbmcgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKSwgIWxvYWRpbmcgJiYgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJMaXN0KCkgfSkpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQYWdlcztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLy8gdGhpcyBjb21wb25lbnQgc2hvdWxkIGp1c3QgbGluayB0byBvdGhlciBwbGFjZXM6XG4vLyBDUkVBVEUgQSBORVcgUEFHRVxuLy8gTUFOQUdFIFlPVVIgUFVCTElDIFBST0ZJTEVcbi8vIE1BTkdFIFlPVVIgQ09MTEVDVElPTlNcbi8vIElGIEhBVkUgV1JPVEUgQSBQQUdFOiBUQUxLIEFCT1VUIEFOQUxZVElDU1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2IG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5IGNlbnRlci1jb250ZW50IGl0YWxpY1wiIH0sIHsgY2hpbGRyZW46IFwiVGhpcyBwYXJ0IGlzIHN0aWxsIHVuZGVyIGRldmVsb3BtZW50IHdoZXJlIHlvdSBjYW4gY29tZSBoZXJlIGFuZCByZWFkIHRoZSBwYWdlcyB5b3UgbG92ZSBiYXNlZCBvbiB5b3VyIGZlZWQuIFN0YXkgdHVuZWQhXCIgfSkpIH0pKSB9KSkpO1xufSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBOYXZpZ2F0ZSwgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuL3NpZGUtbmF2L1NpZGVOYXZcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUvSG9tZVwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmQvRGFzaGJvYXJkXCI7XG5pbXBvcnQgQW5hbHl0aWNzIGZyb20gXCIuL2FuYWx5dGljcy9BbmFseXRpY3NcIjtcbmltcG9ydCBNb25ldGl6YXRpb24gZnJvbSBcIi4vbW9uZXRpemF0aW9uL01vbmV0aXphdGlvblwiO1xuaW1wb3J0IFN1YnNjcmlwdGlvbnMgZnJvbSBcIi4vc3Vic2NyaXB0aW9ucy9TdWJzY3JpcHRpb25zXCI7XG5pbXBvcnQgSGlzdG9yeVBhZ2VzIGZyb20gXCIuL2hpc3RvcnkvUGFnZXNcIjtcbmltcG9ydCBIaXN0b3J5Q29tbWVudHMgZnJvbSBcIi4vaGlzdG9yeS9Db21tZW50c1wiO1xuaW1wb3J0IFJlYWRMYXRlciBmcm9tIFwiLi9yZWFkLWxhdGVyL1JlYWRMYXRlclwiO1xuaW1wb3J0IExpa2VkUGFnZXMgZnJvbSBcIi4vbGlrZWQtcGFnZXMvTGlrZWRQYWdlc1wiO1xuaW1wb3J0IFVzZXJQYWdlc1B1Ymxpc2hlZCBmcm9tIFwiLi91c2VyLXBhZ2VzL1B1Ymxpc2hlZFwiO1xuaW1wb3J0IFVzZXJQYWdlc0RyYWZ0IGZyb20gXCIuL3VzZXItcGFnZXMvRHJhZnRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9jb2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25TaG93IGZyb20gXCIuL2NvbGxlY3Rpb25zL0NvbGxlY3Rpb25TaG93XCI7XG5mdW5jdGlvbiBMaWJyYXJ5KCkge1xuICAgIHJldHVybiAoX2pzeChQcm92aWRlciwgX19hc3NpZ24oeyBzdG9yZTogc3RvcmUgfSwgeyBjaGlsZHJlbjogX2pzeHMoUm91dGVyLCB7IGNoaWxkcmVuOiBbX2pzeChTaWRlTmF2LCB7fSksIF9qc3hzKFJvdXRlcywgeyBjaGlsZHJlbjogW19qc3goUm91dGUsIHsgcGF0aDogXCIvZmVlZC9zdWJzY3JpcHRpb25zXCIsIGVsZW1lbnQ6IF9qc3goU3Vic2NyaXB0aW9ucywge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2ZlZWQvaGlzdG9yeS9wYWdlc1wiLCBlbGVtZW50OiBfanN4KEhpc3RvcnlQYWdlcywge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2ZlZWQvaGlzdG9yeS9jb21tZW50c1wiLCBlbGVtZW50OiBfanN4KEhpc3RvcnlDb21tZW50cywge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2ZlZWQvcmVhZC1sYXRlclwiLCBlbGVtZW50OiBfanN4KFJlYWRMYXRlciwge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2ZlZWQvbGlrZWQtcGFnZXNcIiwgZWxlbWVudDogX2pzeChMaWtlZFBhZ2VzLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvdS9wYWdlcy9wdWJsaXNoZWRcIiwgZWxlbWVudDogX2pzeChVc2VyUGFnZXNQdWJsaXNoZWQsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi91L3BhZ2VzL2RyYWZ0XCIsIGVsZW1lbnQ6IF9qc3goVXNlclBhZ2VzRHJhZnQsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi91L2NvbGxlY3Rpb25zXCIsIGVsZW1lbnQ6IF9qc3goQ29sbGVjdGlvbnMsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9jb2xsZWN0aW9uLzppZFwiLCBlbGVtZW50OiBfanN4KENvbGxlY3Rpb25TaG93LCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvdS9wYWdlc1wiLCBlbGVtZW50OiBfanN4KE5hdmlnYXRlLCB7IHRvOiBcIi91L3BhZ2VzL3B1Ymxpc2hlZFwiLCByZXBsYWNlOiB0cnVlIH0pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2hvbWVcIiwgZWxlbWVudDogX2pzeChIb21lLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvdS9kYXNoYm9hcmRcIiwgZWxlbWVudDogX2pzeChEYXNoYm9hcmQsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi91L2FuYWx5dGljc1wiLCBlbGVtZW50OiBfanN4KEFuYWx5dGljcywge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL3UvbW9uZXRpemF0aW9uXCIsIGVsZW1lbnQ6IF9qc3goTW9uZXRpemF0aW9uLCB7fSkgfSldIH0pXSB9KSB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2VUaHVtYm5haWwgZnJvbSBcIi4uLy4uLy4uL3BhcnRpYWxzL1BhZ2VUaHVtYm5haWxcIjtcbmltcG9ydCB7IERyb3Bkb3duLCBMb2FkaW5nIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzLCBzZWxlY3RGaWx0ZXJCeSwgc2VsZWN0TG9hZGluZywgc2VsZWN0U2VsZWN0ZWRQYWdlcywgc2VsZWN0UGFnZXMsIGZldGNoUGFnZXMsIHNlbGVjdFNvcnRCeSwgfSBmcm9tIFwiLi4vcGFnZXNTbGljZVwiO1xudmFyIExpa2VkUGFnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgc3RhdHVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3RhdHVzKTtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBmaWx0ZXJCeSA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpbHRlckJ5KTtcbiAgICB2YXIgc29ydEJ5ID0gdXNlU2VsZWN0b3Ioc2VsZWN0U29ydEJ5KTtcbiAgICB2YXIgc2VsZWN0ZWRQYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFNlbGVjdGVkUGFnZXMpO1xuICAgIHZhciBwYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2VzKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiTGlrZWQgUGFnZXMgfCBQYWdzZXJcIjtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQYWdlcyhcImxpa2VkLXBhZ2VzXCIsIGZpbHRlckJ5KSk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZW5kZXJEcm9wZG93bnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmaWx0ZXJCeSA9PT0gXCJhbGxcIiAmJiBwYWdlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgcmV0dXJuIChfanN4cyhEcm9wZG93biwgX19hc3NpZ24oeyBudW06IFwiMVwiLCBzZWxlY3Q6IGZpbHRlckJ5LCBvbkNoYW5nZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaFBhZ2VzKFwibGlrZWQtcGFnZXNcIiwgbmFtZSwgc29ydEJ5KSk7XG4gICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcImJ0bi1uYW1lXCIsIFwiZGF0YS1pY29uLWNsYXNzXCI6IFwiZmEgZmEtZmlsdGVyXCIgfSwgeyBjaGlsZHJlbjogXCJGaWx0ZXIgQnlcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiaXRlbVwiLCBcImRhdGEtbmFtZVwiOiBcImFsbFwiIH0sIHsgY2hpbGRyZW46IFwiQWxsIFBhZ2VzXCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJwcml2YXRlXCIgfSwgeyBjaGlsZHJlbjogXCJQcml2YXRlIFBhZ2VzXCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJwdWJsaWNcIiB9LCB7IGNoaWxkcmVuOiBcIlB1YmxpYyBQYWdlc1wiIH0pKV0gfSkpKTtcbiAgICB9O1xuICAgIHZhciByZW5kZXJMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocGFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2VzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi01IGNvbC1tZC0xLW9mLTUgY29sLXNtLTEtb2YtMyBjb2wteHMtMS1vZi0yIGNvbC14eHMtMS1vZi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChQYWdlVGh1bWJuYWlsLCB7IGlkOiBpdGVtLmlkLCBzdGF0dXM6IFwibm9ybWFsXCIsIGJyaWVmRGVzOiBpdGVtLmNvbnRlbnRzLmJyaWVmRGVzLCB0aXRsZTogaXRlbS5jb250ZW50cy50aXRsZSwgaW1hZ2U6IGl0ZW0ucGhvdG8uc2VjdXJlX3VybCwgdGFyZ2V0OiBcIl9ibGFua1wiLCB1cmw6IGl0ZW0udXJsLCB0eXBlOiBpdGVtLnR5cGUsIGF1dGhvclVzZXJuYW1lOiBpdGVtLmF1dGhvci51c2VybmFtZSB9KSB9KSwgaXRlbS5pZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyQnkgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYS0xM1wiIH0sIHsgY2hpbGRyZW46IFwiWW91IGhhdmVuJ3QgbGlrZWQgYW55IHB1YmxpYyBwYWdlIHlldC5cIiB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsdGVyQnkgPT09IFwicHJpdmF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTNcIiB9LCB7IGNoaWxkcmVuOiBcIllvdSBoYXZlbid0IGxpa2VkIGFueSBwcml2YXRlIHBhZ2UgeWV0LiBcIiB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYS0xM1wiIH0sIHsgY2hpbGRyZW46IFwiWW91ciBoYXZlbid0IGxpa2VkIGFueSBwYWdlIHlldC5cIiB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRlci1uYXZcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIlBhZ2VzIFlvdSBIYXZlIExpa2VkOlwiIH0pKSwgIWxvYWRpbmcgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGVyLW5hdl9fYWN0aW9uc1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckRyb3Bkb3ducygpIH0pKSldIH0pKSwgbG9hZGluZyAmJiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtYXJnaW4tdG9wLTFcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpLCAhbG9hZGluZyAmJiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckxpc3QoKSB9KSldIH0pKSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTGlrZWRQYWdlcztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2IG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5IGNlbnRlci1jb250ZW50IGl0YWxpY1wiIH0sIHsgY2hpbGRyZW46IFwiVGhlIG1vbmV0aXphdGlvbiBzZWN0aW9uIGlzIHN0aWxsIHVuZGVyIGRldmVsb3BtZW50ISBTdGF5IHR1bmVkIVwiIH0pKSB9KSkgfSkpKTtcbn0pO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2VUaHVtYm5haWwgZnJvbSBcIi4uLy4uLy4uL3BhcnRpYWxzL1BhZ2VUaHVtYm5haWxcIjtcbmltcG9ydCB7IERyb3Bkb3duLCBDb25maXJtTW9kYWwsIExvYWRpbmcgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3RTdGF0dXMsIHNlbGVjdEZpbHRlckJ5LCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RTZWxlY3RlZFBhZ2VzLCBzZWxlY3RQYWdlcywgZmV0Y2hQYWdlcywgc2V0U3RhdHVzLCBzZWxlY3RTb3J0QnksIHNlbGVjdFBhZ2UsIHJlbW92ZVBhZ2VzLCB9IGZyb20gXCIuLi9wYWdlc1NsaWNlXCI7XG52YXIgUmVhZExhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZmlybWF0aW9uTW9kYWxPcGVuID0gX2FbMF0sIHNldENvbmZpcm1hdGlvbk1vZGFsT3BlbiA9IF9hWzFdO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIHN0YXR1cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFN0YXR1cyk7XG4gICAgdmFyIGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcbiAgICB2YXIgZmlsdGVyQnkgPSB1c2VTZWxlY3RvcihzZWxlY3RGaWx0ZXJCeSk7XG4gICAgdmFyIHNvcnRCeSA9IHVzZVNlbGVjdG9yKHNlbGVjdFNvcnRCeSk7XG4gICAgdmFyIHNlbGVjdGVkUGFnZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTZWxlY3RlZFBhZ2VzKTtcbiAgICB2YXIgcGFnZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RQYWdlcyk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlYWRpbmcgTGlzdCB8IFBhZ3NlclwiO1xuICAgICAgICBkaXNwYXRjaChmZXRjaFBhZ2VzKFwicmVhZC1sYXRlclwiLCBmaWx0ZXJCeSwgc29ydEJ5KSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRTdGF0dXMoXCJub3JtYWxcIikpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVuZGVyRHJvcGRvd25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZmlsdGVyQnkgPT09IFwiYWxsXCIgJiYgcGFnZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwibm9ybWFsXCIpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbcGFnZXMubGVuZ3RoID4gMSAmJiAoX2pzeHMoRHJvcGRvd24sIF9fYXNzaWduKHsgbnVtOiBcIjFcIiwgc2VsZWN0OiBzb3J0QnksIG9uQ2hhbmdlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUGFnZXMoXCJyZWFkLWxhdGVyXCIsIGZpbHRlckJ5LCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiYnRuLW5hbWVcIiwgXCJkYXRhLWljb24tY2xhc3NcIjogXCJmYSBmYS1zb3J0LWFtb3VudC1hc2NcIiB9LCB7IGNoaWxkcmVuOiBcIlNvcnQgQnlcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiaXRlbVwiLCBcImRhdGEtbmFtZVwiOiBcImRhdGUtYWRkZWQtYXNjXCIgfSwgeyBjaGlsZHJlbjogXCJEYXRlIEFkZGVkIC0gTmV3ZXN0IGZpcnN0XCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJkYXRlLWFkZGVkLWRlc2NcIiB9LCB7IGNoaWxkcmVuOiBcIkRhdGUgQWRkZWQgLSBPbGRlc3QgZmlyc3RcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiaXRlbVwiLCBcImRhdGEtbmFtZVwiOiBcImRhdGUtcHVibGlzaGVkLWFzY1wiIH0sIHsgY2hpbGRyZW46IFwiRGF0ZSBQdWJsaXNoZWQgLSBOZXdlc3QgZmlyc3RcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiaXRlbVwiLCBcImRhdGEtbmFtZVwiOiBcImRhdGUtcHVibGlzaGVkLWRlc2NcIiB9LCB7IGNoaWxkcmVuOiBcIkRhdGUgUHVibGlzaGVkIC0gT2xkZXN0IGZpcnN0XCIgfSkpXSB9KSkpLCBfanN4cyhEcm9wZG93biwgX19hc3NpZ24oeyBudW06IFwiMlwiLCBzZWxlY3Q6IGZpbHRlckJ5LCBvbkNoYW5nZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaFBhZ2VzKFwicmVhZC1sYXRlclwiLCBuYW1lLCBzb3J0QnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiYnRuLW5hbWVcIiwgXCJkYXRhLWljb24tY2xhc3NcIjogXCJmYSBmYS1maWx0ZXJcIiB9LCB7IGNoaWxkcmVuOiBcIkZpbHRlciBCeVwiIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwiYWxsXCIgfSwgeyBjaGlsZHJlbjogXCJBbGwgUGFnZXNcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiaXRlbVwiLCBcImRhdGEtbmFtZVwiOiBcInByaXZhdGVcIiB9LCB7IGNoaWxkcmVuOiBcIlByaXZhdGUgUGFnZXNcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiaXRlbVwiLCBcImRhdGEtbmFtZVwiOiBcInB1YmxpY1wiIH0sIHsgY2hpbGRyZW46IFwiUHVibGljIFBhZ2VzXCIgfSkpXSB9KSldIH0pKTtcbiAgICB9O1xuICAgIHZhciByZW5kZXJMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocGFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2VzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi01IGNvbC1tZC0xLW9mLTUgY29sLXNtLTEtb2YtMyBjb2wteHMtMS1vZi0yIGNvbC14eHMtMS1vZi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChQYWdlVGh1bWJuYWlsLCB7IGlkOiBpdGVtLmlkLCBzZWxlY3RlZDogc2VsZWN0ZWRQYWdlcy5pbmRleE9mKGl0ZW0uaWQpID4gLTEgPyB0cnVlIDogZmFsc2UsIHN0YXR1czogc3RhdHVzLCBicmllZkRlczogaXRlbS5jb250ZW50cy5icmllZkRlcywgdGl0bGU6IGl0ZW0uY29udGVudHMudGl0bGUsIGltYWdlOiBpdGVtLnBob3RvLnNlY3VyZV91cmwsIHRhcmdldDogXCJfYmxhbmtcIiwgdXJsOiBpdGVtLnVybCwgdHlwZTogaXRlbS50eXBlLCBhdXRob3JVc2VybmFtZTogaXRlbS5hdXRob3IudXNlcm5hbWUsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcImVkaXRpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UGFnZShpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSksIGl0ZW0uaWQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZpbHRlckJ5ID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTEzXCIgfSwgeyBjaGlsZHJlbjogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgcHVibGljIHBhZ2Ugb24geW91ciByZWFkIGxhdGVyIGxpc3QuXCIgfSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWx0ZXJCeSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTNcIiB9LCB7IGNoaWxkcmVuOiBcIllvdSBkb24ndCBoYXZlIGFueSBwcml2YXRlIHBhZ2Ugb24geW91ciByZWFkIGxhdGVyIGxpc3QuXCIgfSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTEzXCIgfSwgeyBjaGlsZHJlbjogXCJZb3VyIHJlYWQgbGF0ZXIgbGlzdCBpcyBlbXB0eS5cIiB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZW1vdmVCdG4gPSBzdGF0dXMgPT09IFwiZWRpdGluZ1wiICYmIChfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi10ZXh0IGJ0bi10ZXh0LXJlZFwiLCBkaXNhYmxlZDogc2VsZWN0ZWRQYWdlcy5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJSZW1vdmVcIiB9KSkpO1xuICAgIHZhciBkb25lQnRuID0gc3RhdHVzID09PSBcImVkaXRpbmdcIiAmJiAoX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4tdGV4dFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRTdGF0dXMoXCJub3JtYWxcIikpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiRG9uZVwiIH0pKSk7XG4gICAgdmFyIGVkaXRCdG4gPSBwYWdlcy5sZW5ndGggPiAwICYmIHN0YXR1cyA9PT0gXCJub3JtYWxcIiAmJiAoX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLXRleHRcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0U3RhdHVzKFwiZWRpdGluZ1wiKSk7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW1wiRWRpdCBcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGVuY2lsLXNxdWFyZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pXSB9KSkpO1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KENvbmZpcm1Nb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiUmVtb3ZlIGZyb20gdGhlIGxpc3Q/XCIsIG9wZW46IGNvbmZpcm1hdGlvbk1vZGFsT3Blbiwgb25Db25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlbW92ZVBhZ2VzKFwicmVhZC1sYXRlclwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHNlbGVjdGVkIHBhZ2VcIiwgc2VsZWN0ZWRQYWdlcy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwiLCBcIiBmcm9tIHlvdXIgcmVhZCBsYXRlciBsaXN0P1wiLCBcIiBcIiwgX2pzeChcImJyXCIsIHt9KSwgXCIgWW91IGhhdmUgc2VsZWN0ZWQgXCIsIHNlbGVjdGVkUGFnZXMubGVuZ3RoLCBcIiBwYWdlXCIsIHNlbGVjdGVkUGFnZXMubGVuZ3RoID4gMSA/IFwic1wiIDogXCJcIiwgXCIgYW5kIHlvdSBjYW5ub3QgdW5kbyB0aGUgYWN0aW9uLlwiXSB9KSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJZb3VyIFJlYWQgTGF0ZXIgTGlzdDpcIiB9KSksICFsb2FkaW5nICYmIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2X19hY3Rpb25zXCIgfSwgeyBjaGlsZHJlbjogW3JlbmRlckRyb3Bkb3ducygpLCByZW1vdmVCdG4sIGRvbmVCdG4sIGVkaXRCdG5dIH0pKSldIH0pKSwgbG9hZGluZyAmJiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtYXJnaW4tdG9wLTFcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpLCAhbG9hZGluZyAmJiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckxpc3QoKSB9KSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlYWRMYXRlcjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0U2VjdGlvbiwgc2V0U2VjdGlvbiB9IGZyb20gXCIuL3NpZGVOYXZTbGljZVwiO1xudmFyIFNpZGVOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUubWFyZ2luTGVmdCA9XG4gICAgICAgIFwiMjRyZW1cIjtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHZhciBzZWN0aW9uID0gdXNlU2VsZWN0b3Ioc2VsZWN0U2VjdGlvbik7XG4gICAgdmFyIGdldFNlY3Rpb25Gcm9tVXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VjdGlvbnMgPSBbXG4gICAgICAgICAgICBcImhvbWVcIixcbiAgICAgICAgICAgIFwic3Vic2NyaXB0aW9uc1wiLFxuICAgICAgICAgICAgXCJoaXN0b3J5L3BhZ2VzXCIsXG4gICAgICAgICAgICBcImhpc3RvcnkvY29tbWVudHNcIixcbiAgICAgICAgICAgIFwicmVhZC1sYXRlclwiLFxuICAgICAgICAgICAgXCJsaWtlZC1wYWdlc1wiLFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJkYXNoYm9hcmRcIixcbiAgICAgICAgICAgIFwiYW5hbHl0aWNzXCIsXG4gICAgICAgICAgICBcIm1vbmV0aXphdGlvblwiLFxuICAgICAgICAgICAgXCJwYWdlcy9wdWJsaXNoZWRcIixcbiAgICAgICAgICAgIFwicGFnZXMvZHJhZnRcIixcbiAgICAgICAgICAgIFwiY29tbWVudHNcIixcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0gPT09IFwiaG9tZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJob21lXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29sbGVjdGlvbiBzaG93IHBhZ2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0gPT09IFwiY29sbGVjdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSA9PT0gXCJoaXN0b3J5XCIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleF8xID0gc2VjdGlvbnMuaW5kZXhPZihcIlwiLmNvbmNhdCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdLCBcIi9cIikuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbM10pKTtcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uc1tpbmRleF8xXSB8fCBcImhpc3RvcnkvcGFnZXNcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSA9PT0gXCJwYWdlc1wiKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhfMiA9IHNlY3Rpb25zLmluZGV4T2YoXCJcIi5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvXCIpLmNvbmNhdCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzNdKSk7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbnNbaW5kZXhfMl0gfHwgXCJwYWdlcy9wdWJsaXNoZWRcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSBzZWN0aW9ucy5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMl0pO1xuICAgICAgICByZXR1cm4gc2VjdGlvbnNbaW5kZXhdIHx8IFwiXCI7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXNlY3Rpb24pIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlY3Rpb24oZ2V0U2VjdGlvbkZyb21VcmwoKSkpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic2lkZW5hdiBzaWRlbmF2LS1vcGVuXCIsIGlkOiBcImpzLS1zaWRlbmF2XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNpZGVuYXZfX3NlY3Rpb25cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoTGluaywgX19hc3NpZ24oeyB0bzogXCIvaG9tZVwiLCBjbGFzc05hbWU6IHNlY3Rpb24gPT09IFwiaG9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNpZGVuYXZfX2xpbmsgc2lkZW5hdl9fbGluay0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2lkZW5hdl9fbGlua1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwYXRjaChzZXRTZWN0aW9uKFwiaG9tZVwiKSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWhvbWVcIiB9KSwgXCJIb21lXCJdIH0pKSwgX2pzeHMoTGluaywgX19hc3NpZ24oeyB0bzogXCIvZmVlZC9zdWJzY3JpcHRpb25zXCIsIGNsYXNzTmFtZTogc2VjdGlvbiA9PT0gXCJzdWJzY3JpcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2lkZW5hdl9fbGluayBzaWRlbmF2X19saW5rLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaWRlbmF2X19saW5rXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRpc3BhdGNoKHNldFNlY3Rpb24oXCJzdWJzY3JpcHRpb25zXCIpKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZmlsZS10ZXh0XCIgfSksIFwiU3Vic2NyaXB0aW9uc1wiXSB9KSksIF9qc3hzKExpbmssIF9fYXNzaWduKHsgdG86IFwiL2ZlZWQvaGlzdG9yeS9wYWdlc1wiLCBjbGFzc05hbWU6IHNlY3Rpb24gPT09IFwiaGlzdG9yeS9wYWdlc1wiIHx8IHNlY3Rpb24gPT09IFwiaGlzdG9yeS9jb21tZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNpZGVuYXZfX2xpbmsgc2lkZW5hdl9fbGluay0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2lkZW5hdl9fbGlua1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwYXRjaChzZXRTZWN0aW9uKFwiaGlzdG9yeS9wYWdlc1wiKSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWhpc3RvcnlcIiB9KSwgXCJIaXN0b3J5XCJdIH0pKSwgX2pzeHMoTGluaywgX19hc3NpZ24oeyB0bzogXCIvZmVlZC9yZWFkLWxhdGVyXCIsIGNsYXNzTmFtZTogc2VjdGlvbiA9PT0gXCJyZWFkLWxhdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2lkZW5hdl9fbGluayBzaWRlbmF2X19saW5rLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaWRlbmF2X19saW5rXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRpc3BhdGNoKHNldFNlY3Rpb24oXCJyZWFkLWxhdGVyXCIpKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYm9va21hcmtcIiB9KSwgXCJSZWFkIExhdGVyXCJdIH0pKSwgX2pzeHMoTGluaywgX19hc3NpZ24oeyB0bzogXCIvZmVlZC9saWtlZC1wYWdlc1wiLCBjbGFzc05hbWU6IHNlY3Rpb24gPT09IFwibGlrZWQtcGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaWRlbmF2X19saW5rIHNpZGVuYXZfX2xpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNpZGVuYXZfX2xpbmtcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGlzcGF0Y2goc2V0U2VjdGlvbihcImxpa2VkLXBhZ2VzXCIpKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdGh1bWJzLXVwXCIgfSksIFwiTGlrZWQgUGFnZXNcIl0gfSkpLCBfanN4cyhMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi91L2NvbGxlY3Rpb25zXCIsIGNsYXNzTmFtZTogc2VjdGlvbiA9PT0gXCJjb2xsZWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNpZGVuYXZfX2xpbmsgc2lkZW5hdl9fbGluay0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2lkZW5hdl9fbGlua1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwYXRjaChzZXRTZWN0aW9uKFwiY29sbGVjdGlvbnNcIikpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aC1sYXJnZVwiIH0pLCBcIkNvbGxlY3Rpb25zXCJdIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzaWRlbmF2X19zZWN0aW9uXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKExpbmssIF9fYXNzaWduKHsgdG86IFwiL3UvZGFzaGJvYXJkXCIsIGNsYXNzTmFtZTogc2VjdGlvbiA9PT0gXCJkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaWRlbmF2X19saW5rIHNpZGVuYXZfX2xpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNpZGVuYXZfX2xpbmtcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGlzcGF0Y2goc2V0U2VjdGlvbihcImRhc2hib2FyZFwiKSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWRhc2hib2FyZFwiIH0pLCBcIkRhc2hib2FyZFwiXSB9KSksIF9qc3hzKExpbmssIF9fYXNzaWduKHsgdG86IFwiL3UvYW5hbHl0aWNzXCIsIGNsYXNzTmFtZTogc2VjdGlvbiA9PT0gXCJhbmFseXRpY3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaWRlbmF2X19saW5rIHNpZGVuYXZfX2xpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNpZGVuYXZfX2xpbmtcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGlzcGF0Y2goc2V0U2VjdGlvbihcImFuYWx5dGljc1wiKSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWxpbmUtY2hhcnRcIiB9KSwgXCJBbmFseXRpY3NcIl0gfSkpLCBfanN4cyhMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi91L21vbmV0aXphdGlvblwiLCBjbGFzc05hbWU6IHNlY3Rpb24gPT09IFwibW9uZXRpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2lkZW5hdl9fbGluayBzaWRlbmF2X19saW5rLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaWRlbmF2X19saW5rXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRpc3BhdGNoKHNldFNlY3Rpb24oXCJtb25ldGl6YXRpb25cIikpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1kb2xsYXJcIiB9KSwgXCJNb25ldGl6YXRpb25cIl0gfSkpLCBfanN4cyhMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi91L3BhZ2VzXCIsIGNsYXNzTmFtZTogc2VjdGlvbiA9PT0gXCJwYWdlcy9wdWJsaXNoZWRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24gPT09IFwicGFnZXMvZHJhZnRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24gPT09IFwicGFnZXMvdHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaWRlbmF2X19saW5rIHNpZGVuYXZfX2xpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNpZGVuYXZfX2xpbmtcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGlzcGF0Y2goc2V0U2VjdGlvbihcInBhZ2VzL3B1Ymxpc2hlZFwiKSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWVudmVsb3BlLW9wZW5cIiB9KSwgXCJZb3VyIFBhZ2VzXCJdIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzaWRlbmF2X19mb290ZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJ1bFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSwgeyBjaGlsZHJlbjogXCJTdXBwb3J0XCIgfSkpIH0pKSwgX2pzeChcImxpXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSwgeyBjaGlsZHJlbjogXCJDb250YWN0IHVzXCIgfSkpIH0pKSwgX2pzeChcImxpXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdGVybXMtb2YtdXNlXCIgfSwgeyBjaGlsZHJlbjogXCJUZXJtcyBvZiBVc2VcIiB9KSkgfSkpLCBfanN4KFwibGlcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIi9wcml2YWN5LXBvbGljeVwiIH0sIHsgY2hpbGRyZW46IFwiUHJpdmFjeSBQb2xpY3lcIiB9KSkgfSkpXSB9KSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiXFx1MDBBOSAyMDIyIFBhZ3Nlci5jb21cIiB9KV0gfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBTdWJzY3JpcHRpb25UaHVtYm5haWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInN1Yi10aHVtYm5haWxcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KHByb3BzLnVzZXJuYW1lKSwgdGFyZ2V0OiBcIl9ibGFua1wiLCBjbGFzc05hbWU6IFwic3ViLXRodW1ibmFpbF9faW5mb1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBcInN1Yi10aHVtYm5haWxfX2luZm8taW1hZ2VcIiwgc3JjOiBwcm9wcy5pbWFnZSB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic3ViLXRodW1ibmFpbF9faW5mby10ZXh0XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic3ViLXRodW1ibmFpbF9faW5mby1uYW1lXCIgfSwgeyBjaGlsZHJlbjogcHJvcHMubmFtZSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic3ViLXRodW1ibmFpbF9faW5mby1oZWFkbGluZVwiIH0sIHsgY2hpbGRyZW46IHByb3BzLmhlYWRsaW5lIH0pKV0gfSkpXSB9KSksIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KHByb3BzLnVzZXJuYW1lLCBcIi9wYWdlc1wiKSwgY2xhc3NOYW1lOiBcImJ0biBidG4tZGVmYXVsdCBidG4tcm91bmRcIiB9LCB7IGNoaWxkcmVuOiBcIlZpZXcgbGF0ZXN0IHBhZ2VzXCIgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmlwdGlvblRodW1ibmFpbDtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdWJzY3JpcHRpb25UaHVtYm5haWwgZnJvbSBcIi4vU3Vic2NyaXB0aW9uVGh1bWJuYWlsXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbnZhciBTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFtdKSwgc3Vic2NyaXB0aW9ucyA9IF9hWzBdLCBzZXRTdWJzY3JpcHRpb25zID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX2JbMF0sIHNldExvYWRpbmcgPSBfYlsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJTdWJzY3JpcHRpb25zIHwgUGFnc2VyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5nZXQoXCIvc3Vic2NyaXB0aW9uc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3Vic2NyaXB0aW9ucyhyZXNwb25zZS5zdWJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSkoKTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlbmRlclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTEzXCIgfSwgeyBjaGlsZHJlbjogXCJZb3UgaGF2ZW4ndCBzdWJzY3JpYmVkIHRvIGFueSBhdXRob3IgeWV0LlwiIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3goU3Vic2NyaXB0aW9uVGh1bWJuYWlsLCB7IG5hbWU6IGl0ZW0uYXV0aG9yLm5hbWUsIHVzZXJuYW1lOiBpdGVtLmF1dGhvci51c2VybmFtZSwgaGVhZGxpbmU6IGl0ZW0uYXV0aG9yLmhlYWRsaW5lLCBpbWFnZTogaXRlbS5hdXRob3IucGhvdG8uc2VjdXJlX3VybCB9LCBpdGVtLl9pZCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGVyLW5hdlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJZb3VyIFN1YnNjcmlwdGlvbnM6XCIgfSkpIH0pKSwgbG9hZGluZyAmJiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudCBtYXJnaW4tdG9wLTFcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpLCAhbG9hZGluZyAmJiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlclN1YnNjcmlwdGlvbnMoKSB9KSldIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaXB0aW9ucztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYWdlVGh1bWJuYWlsIGZyb20gXCIuLi8uLi8uLi9wYXJ0aWFscy9QYWdlVGh1bWJuYWlsXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IHsgQ29uZmlybU1vZGFsLCBMb2FkaW5nIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzLCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RTZWxlY3RlZFBhZ2VzLCBzZWxlY3RQYWdlcywgZmV0Y2hQYWdlcywgc2V0U3RhdHVzLCBzZWxlY3RQYWdlLCByZW1vdmVQYWdlcywgfSBmcm9tIFwiLi4vcGFnZXNTbGljZVwiO1xudmFyIFB1Ymxpc2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1hdGlvbk1vZGFsT3BlbiA9IF9hWzBdLCBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4gPSBfYVsxXTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHZhciBzdGF0dXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGF0dXMpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIHNlbGVjdGVkUGFnZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTZWxlY3RlZFBhZ2VzKTtcbiAgICB2YXIgcGFnZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RQYWdlcyk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkRyYWZ0IFBhZ2VzIHwgUGFnc2VyXCI7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUGFnZXMoXCJ1c2VyLXBhZ2VzL2RyYWZ0XCIpKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFN0YXR1cyhcIm5vcm1hbFwiKSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHZhciByZW5kZXJMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocGFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2VzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi01IGNvbC1tZC0xLW9mLTUgY29sLXNtLTEtb2YtMyBjb2wteHMtMS1vZi0yIGNvbC14eHMtMS1vZi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChQYWdlVGh1bWJuYWlsLCB7IGlkOiBpdGVtLmlkLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIG5vUGhvdG86IHRydWUsIGxhYmVsOiBcIkxhc3QgdXBkYXRlZDogXCIuY29uY2F0KGl0ZW0udXBkYXRlZEF0KSwgdHlwZTogXCJkcmFmdFwiLCBzdGF0dXM6IHN0YXR1cywgc2VsZWN0ZWQ6IHNlbGVjdGVkUGFnZXMuaW5kZXhPZihpdGVtLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlLCB0aXRsZTogaXRlbS5jb250ZW50cy50aXRsZSwgYnJpZWZEZXM6IGl0ZW0uY29udGVudHMuYnJpZWZEZXMsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcImVkaXRpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2VsZWN0UGFnZShpdGVtLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pLCBpdGVtLmlkKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTEzXCIgfSwgeyBjaGlsZHJlbjogXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgZHJhZnQgcGFnZS5cIiB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZW1vdmVCdG4gPSBzdGF0dXMgPT09IFwiZWRpdGluZ1wiICYmIChfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi10ZXh0IGJ0bi10ZXh0LXJlZFwiLCBkaXNhYmxlZDogc2VsZWN0ZWRQYWdlcy5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJEZWxldGVcIiB9KSkpO1xuICAgIHZhciBkb25lQnRuID0gc3RhdHVzID09PSBcImVkaXRpbmdcIiAmJiAoX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4tdGV4dFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRTdGF0dXMoXCJub3JtYWxcIikpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiRG9uZVwiIH0pKSk7XG4gICAgdmFyIGVkaXRCdG4gPSBwYWdlcy5sZW5ndGggPiAwICYmIHN0YXR1cyA9PT0gXCJub3JtYWxcIiAmJiAoX2pzeHMoXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLXRleHRcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0U3RhdHVzKFwiZWRpdGluZ1wiKSk7XG4gICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW1wiRWRpdCBcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGVuY2lsLXNxdWFyZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pXSB9KSkpO1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KENvbmZpcm1Nb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiRGVsZXRlIERyYWZ0IFBhZ2VzP1wiLCBvcGVuOiBjb25maXJtYXRpb25Nb2RhbE9wZW4sIGJ0bk5hbWU6IFwiRGVsZXRlXCIsIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZW1vdmVQYWdlcyhcInVzZXItcGFnZXMvZHJhZnRcIikpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBzZWxlY3RlZCBkcmFmdCBwYWdlXCIsIHNlbGVjdGVkUGFnZXMubGVuZ3RoID4gMSA/IFwicyBcIiA6IFwiXCIsIFwiPyBcIiwgX2pzeChcImJyXCIsIHt9KSwgXCIgWW91IGhhdmUgc2VsZWN0ZWQgXCIsIHNlbGVjdGVkUGFnZXMubGVuZ3RoLCBcIiBkcmFmdCBwYWdlXCIsIHNlbGVjdGVkUGFnZXMubGVuZ3RoID4gMSA/IFwicyBcIiA6IFwiXCIsIFwiIGFuZCB5b3UgY2Fubm90IHVuZG8gdGhlIGFjdGlvbi5cIl0gfSkgfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChIZWFkZXIsIHt9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGVyLW5hdlwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiWW91ciBEcmFmdCBQYWdlczpcIiB9KSksICFsb2FkaW5nICYmIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2X19hY3Rpb25zXCIgfSwgeyBjaGlsZHJlbjogW3JlbW92ZUJ0biwgZG9uZUJ0biwgZWRpdEJ0bl0gfSkpKV0gfSkpLCBsb2FkaW5nICYmIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50IG1hcmdpbi10b3AtMVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTG9hZGluZywge30pIH0pKSksICFsb2FkaW5nICYmIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogcmVuZGVyTGlzdCgpIH0pKV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHVibGlzaGVkO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0U2VjdGlvbiwgc2VsZWN0U2VjdGlvbiB9IGZyb20gXCIuLi9zaWRlLW5hdi9zaWRlTmF2U2xpY2VcIjtcbnZhciBIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgc2VjdGlvbiA9IHVzZVNlbGVjdG9yKHNlbGVjdFNlY3Rpb24pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGluZWQtYnRucyBtYXJnaW4tYm90dG9tLTIgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKExpbmssIF9fYXNzaWduKHsgdG86IFwiL3UvcGFnZXMvcHVibGlzaGVkXCIsIGNsYXNzTmFtZTogc2VjdGlvbiA9PT0gXCJwYWdlcy9wdWJsaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYnRuLWxpbmVkIGJ0bi1saW5lZC0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJ0bi1saW5lZFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwYXRjaChzZXRTZWN0aW9uKFwicGFnZXMvcHVibGlzaGVkXCIpKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtY2hlY2stc3F1YXJlIG1hcmdpbi1yaWdodC0zcHhcIiB9KSwgXCIgUHVibGlzaGVkIFBhZ2VzXCJdIH0pKSwgX2pzeHMoTGluaywgX19hc3NpZ24oeyB0bzogXCIvdS9wYWdlcy9kcmFmdFwiLCBjbGFzc05hbWU6IHNlY3Rpb24gPT09IFwicGFnZXMvZHJhZnRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYnRuLWxpbmVkIGJ0bi1saW5lZC0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJ0bi1saW5lZFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwYXRjaChzZXRTZWN0aW9uKFwicGFnZXMvZHJhZnRcIikpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1maWxlIG1hcmdpbi1yaWdodC0zcHhcIiB9KSwgXCIgRHJhZnQgUGFnZXNcIl0gfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZVRodW1ibmFpbCBmcm9tIFwiLi4vLi4vLi4vcGFydGlhbHMvUGFnZVRodW1ibmFpbFwiO1xuaW1wb3J0IHsgRHJvcGRvd24sIExvYWRpbmcgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0RmlsdGVyQnksIHNlbGVjdExvYWRpbmcsIHNlbGVjdFBhZ2VzLCBmZXRjaFBhZ2VzLCB9IGZyb20gXCIuLi9wYWdlc1NsaWNlXCI7XG52YXIgUHVibGlzaGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcbiAgICB2YXIgZmlsdGVyQnkgPSB1c2VTZWxlY3RvcihzZWxlY3RGaWx0ZXJCeSk7XG4gICAgdmFyIHBhZ2VzID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGFnZXMpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJQdWJsaXNoZWQgUGFnZXMgfCBQYWdzZXJcIjtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQYWdlcyhcInVzZXItcGFnZXMvcHVibGlzaGVkXCIsIGZpbHRlckJ5KSk7XG4gICAgfSwgW10pO1xuICAgIHZhciByZW5kZXJEcm9wZG93bnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmaWx0ZXJCeSA9PT0gXCJhbGxcIiAmJiBwYWdlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgcmV0dXJuIChfanN4cyhEcm9wZG93biwgX19hc3NpZ24oeyBudW06IFwiMVwiLCBzZWxlY3Q6IGZpbHRlckJ5LCBvbkNoYW5nZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaFBhZ2VzKFwidXNlci1wYWdlcy9wdWJsaXNoZWRcIiwgbmFtZSkpO1xuICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJidG4tbmFtZVwiLCBcImRhdGEtaWNvbi1jbGFzc1wiOiBcImZhIGZhLWZpbHRlclwiIH0sIHsgY2hpbGRyZW46IFwiRmlsdGVyIEJ5XCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJhbGxcIiB9LCB7IGNoaWxkcmVuOiBcIkFsbCBQYWdlc1wiIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwicHJpdmF0ZVwiIH0sIHsgY2hpbGRyZW46IFwiUHJpdmF0ZSBQYWdlc1wiIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwicHVibGljXCIgfSwgeyBjaGlsZHJlbjogXCJQdWJsaWMgUGFnZXNcIiB9KSldIH0pKSk7XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctMS1vZi01IGNvbC1tZC0xLW9mLTUgY29sLXNtLTEtb2YtMyBjb2wteHMtMS1vZi0yIGNvbC14eHMtMS1vZi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChQYWdlVGh1bWJuYWlsLCB7IGlkOiBpdGVtLmlkLCBzdGF0dXM6IFwibm9ybWFsXCIsIGJyaWVmRGVzOiBpdGVtLmNvbnRlbnRzLmJyaWVmRGVzLCB0aXRsZTogaXRlbS5jb250ZW50cy50aXRsZSwgaW1hZ2U6IChfYSA9IGl0ZW0ucGhvdG8pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZWN1cmVfdXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHVybDogaXRlbS51cmwsIHR5cGU6IGl0ZW0udHlwZSwgYXV0aG9yVXNlcm5hbWU6IChfYiA9IGl0ZW0uYXV0aG9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudXNlcm5hbWUgfSkgfSksIGl0ZW0uaWQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZpbHRlckJ5ID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTEzXCIgfSwgeyBjaGlsZHJlbjogXCJZb3UgaGF2ZW4ndCBwdWJsaXNoZWQgYW55IHB1YmxpYyBwYWdlIHlldC5cIiB9KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbHRlckJ5ID09PSBcInByaXZhdGVcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYS0xM1wiIH0sIHsgY2hpbGRyZW46IFwiWW91IGhhdmVuJ3QgcHVibGlzaGVkIGFueSBwcml2YXRlIHBhZ2UgeWV0LiBcIiB9KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtMTNcIiB9LCB7IGNoaWxkcmVuOiBcIllvdSBoYXZlbid0IHB1Ymxpc2hlZCBhbnkgcGFnZSB5ZXQuXCIgfSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KEhlYWRlciwge30pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkZXItbmF2XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJZb3VyIFB1Ymxpc2hlZCBQYWdlczpcIiB9KSksICFsb2FkaW5nICYmIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRlci1uYXZfX2FjdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJEcm9wZG93bnMoKSB9KSkpXSB9KSksIGxvYWRpbmcgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKSwgIWxvYWRpbmcgJiYgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByZW5kZXJMaXN0KCkgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hlZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==