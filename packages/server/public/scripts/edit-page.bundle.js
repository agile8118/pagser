"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["edit-page"],{

/***/ "./src/views/edit-page/EditPage.tsx":
/*!******************************************!*\
  !*** ./src/views/edit-page/EditPage.tsx ***!
  \******************************************/
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





var EditPage = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), page = _a[0], setPage = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), usedUrls = _b[0], setUsedUrls = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loadError = _c[0], setLoadError = _c[1];
    // Form fields
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), title = _d[0], setTitle = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), titleError = _e[0], setTitleError = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), briefDes = _f[0], setBriefDes = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), briefDesError = _g[0], setBriefDesError = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), targets = _h[0], setTargets = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), targetsError = _j[0], setTargetsError = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), body = _k[0], setBody = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), bodyError = _l[0], setBodyError = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), anonymously = _m[0], setAnonymously = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), commentsDisabled = _o[0], setCommentsDisabled = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), ratingsDisabled = _p[0], setRatingsDisabled = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), linksDisabled = _q[0], setLinksDisabled = _q[1];
    var _r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), tags = _r[0], setTags = _r[1];
    var _s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), tagsError = _s[0], setTagsError = _s[1];
    var _t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), url = _t[0], setUrl = _t[1];
    var _u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), urlError = _u[0], setUrlError = _u[1];
    var _v = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), submitLoading = _v[0], setSubmitLoading = _v[1];
    var pageType = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("t", window.location.href);
    var pathParts = window.location.pathname.split("/");
    // Private: /:username/:url/edit  → pathParts = ["", username, url, "edit"]
    // Public:  /public-pages/:url/edit → pathParts = ["", "public-pages", url, "edit"]
    var username = pathParts[1];
    var urlSlug = pathParts[2];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var apiUrl, response, p, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        apiUrl = void 0;
                        if (pageType === "public") {
                            apiUrl = "/public-pages/".concat(urlSlug, "/edit");
                        }
                        else {
                            apiUrl = "/".concat(username, "/").concat(urlSlug, "/edit");
                        }
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.get(apiUrl, { auth: true })];
                    case 1:
                        response = (_a.sent());
                        p = response.page;
                        setPage(p);
                        setTitle(p.title || "");
                        setBriefDes(p.brief_description || "");
                        setTargets(p.targets || "");
                        setBody(p.body || "");
                        setUrl(p.url || "");
                        setAnonymously(p.anonymously || false);
                        setCommentsDisabled(p.comments_disabled || false);
                        setRatingsDisabled(p.ratings_disabled || false);
                        setLinksDisabled(p.links_disabled || false);
                        if (response.usedUrls) {
                            setUsedUrls(response.usedUrls);
                        }
                        // Set tags as comma-separated string for the tags input
                        if (p.type === "public" && Array.isArray(p.tags)) {
                            setTags(p.tags.join(","));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1.status === 401) {
                            window.location.href = "/login";
                        }
                        else {
                            setLoadError(true);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    // Initialize tags input after page loads for public pages
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if ((page === null || page === void 0 ? void 0 : page.type) === "public") {
            if (!document.querySelector("div.tags-input")) {
                (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.tagsInput)(document.querySelector('input[type="tags"]'));
            }
            var tagsEl = document.querySelector("#tags");
            if (tagsEl) {
                tagsEl.addEventListener("change", function () {
                    setTags(this.value);
                });
            }
        }
    }, [page]);
    var getBodyText = function (html) {
        var div = document.createElement("div");
        div.innerHTML = html;
        return (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim();
    };
    var checkTitleValidation = function (value) {
        if (!page)
            return false;
        var errMsg = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page(page.type).title(value !== null && value !== void 0 ? value : title);
        if (errMsg) {
            setTitleError(errMsg);
            return false;
        }
        setTitleError("");
        return true;
    };
    var checkBriefDesValidation = function () {
        if (!page)
            return false;
        var errMsg = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page(page.type).briefDes(briefDes);
        if (errMsg) {
            setBriefDesError(errMsg);
            return false;
        }
        setBriefDesError("");
        return true;
    };
    var checkTargetsValidation = function () {
        if (!page)
            return false;
        var errMsg = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page(page.type).targets(targets);
        if (errMsg) {
            setTargetsError(errMsg);
            return false;
        }
        setTargetsError("");
        return true;
    };
    var checkBodyValidation = function () {
        if (!page)
            return false;
        var bodyText = getBodyText(body);
        var minLen = page.type === "public" ? 50 : 1;
        var tinymceEl = document.querySelector(".mce-tinymce");
        if (bodyText.length < minLen) {
            if (tinymceEl)
                tinymceEl.style.border = "1px solid #e74c3c";
            setBodyError(page.type === "public" ? "Body should be more than ".concat(minLen, " characters.") : "Body cannot be blank.");
            return false;
        }
        if (bodyText.length > 200000) {
            if (tinymceEl)
                tinymceEl.style.border = "1px solid #e74c3c";
            setBodyError("Body should be less than 200000 characters.");
            return false;
        }
        if (tinymceEl)
            tinymceEl.style.border = "1px solid #CACACA";
        setBodyError("");
        return true;
    };
    var checkTagsValidation = function () {
        var errMsg = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page("public").tags(tags.split(",").filter(Boolean));
        if (errMsg) {
            setTagsError(errMsg);
            return false;
        }
        setTagsError("");
        return true;
    };
    var checkUrlValidation = function () {
        var errMsg = _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page("private").url(url, usedUrls);
        if (errMsg) {
            setUrlError(errMsg);
            return false;
        }
        setUrlError("");
        return true;
    };
    var checkIfAllOk = function () {
        if (!page)
            return false;
        var bodyText = getBodyText(body);
        var minBodyLen = page.type === "public" ? 50 : 1;
        var titleOk = !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page(page.type).title(title);
        var briefDesOk = !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page(page.type).briefDes(briefDes);
        var targetsOk = !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page(page.type).targets(targets);
        var bodyOk = bodyText.length >= minBodyLen && bodyText.length <= 200000;
        if (page.type === "public") {
            var tagsOk = !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page("public").tags(tags.split(",").filter(Boolean));
            return titleOk && briefDesOk && targetsOk && bodyOk && tagsOk;
        }
        if (page.type === "private") {
            var urlOk = !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.page("private").url(url, usedUrls);
            return titleOk && briefDesOk && targetsOk && bodyOk && urlOk;
        }
        return false;
    };
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!page)
                        return [2 /*return*/];
                    if (!checkIfAllOk()) {
                        checkTitleValidation();
                        checkBriefDesValidation();
                        checkTargetsValidation();
                        checkBodyValidation();
                        if (page.type === "public")
                            checkTagsValidation();
                        if (page.type === "private")
                            checkUrlValidation();
                        return [2 /*return*/];
                    }
                    setSubmitLoading(true);
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Saving...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.put("/pages/".concat(page.id), {
                            page: {
                                type: page.type,
                                title: title,
                                briefDes: briefDes,
                                targets: targets,
                                body: body,
                                configurations: {
                                    anonymously: anonymously,
                                    comments: commentsDisabled,
                                    rating: ratingsDisabled,
                                    links: linksDisabled,
                                },
                                url: page.type === "private" ? url : undefined,
                                tags: page.type === "public" ? tags.split(",").filter(Boolean) : undefined,
                            },
                        }, { auth: true })];
                case 2:
                    response = (_a.sent());
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                    if (response.type === "public") {
                        window.location.href = "/public-pages/".concat(response.url);
                    }
                    else {
                        window.location.href = "/".concat(response.username, "/").concat(response.url);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    e_2 = _a.sent();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)();
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.alert)("An error occurred while saving. Please try again.", "error");
                    return [3 /*break*/, 5];
                case 4:
                    setSubmitLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var onBackClicked = function () {
        if (!page)
            return;
        if (page.type === "public") {
            window.location.href = "/public-pages/".concat(page.url);
        }
        else {
            window.location.href = "/".concat(username, "/").concat(page.url);
        }
    };
    if (loadError) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "center-content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Failed to load page. Please try again." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ onClick: function () { return window.location.reload(); }, color: "blue" }, { children: "Retry" }))] })) })));
    }
    if (!page) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page-new" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Loading, {}) })) })));
    }
    var bodyClassName = "form__group" + (bodyError ? " form__group--error" : "");
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", __assign({ className: "button-text button-text--big a-11", onClick: onBackClicked }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-left", "aria-hidden": "true" }), " Back"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Update your page" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__contents" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Input, { label: page.type === "private" ? "Title *" : "Title", id: "title", value: title, onChange: function (value) {
                                setTitle(value);
                                if (value)
                                    checkTitleValidation(value);
                            }, onBlur: function () { return checkTitleValidation(); }, placeholder: "Choose a title for your page.", maxLength: 50, error: titleError }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Textarea, { label: "Brief Description", id: "briefDes", value: briefDes, rows: 3, onChange: function (value) {
                                setBriefDes(value);
                                if (value)
                                    checkBriefDesValidation();
                            }, onBlur: function () { return checkBriefDesValidation(); }, placeholder: "Describe briefly what your page is all about.", maxLength: 300, error: briefDesError }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Textarea, { label: "Targets", id: "targets", value: targets, rows: 3, onChange: function (value) {
                                setTargets(value);
                                if (value)
                                    checkTargetsValidation();
                            }, onBlur: function () { return checkTargetsValidation(); }, placeholder: "Describe briefly who this page is for.", maxLength: 300, error: targetsError }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", { className: "hr u-margin-top-5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: bodyClassName, id: "body" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", __assign({ htmlFor: "bodyInput", className: "form__label" }, { children: ["Page Body", page.type === "private" && " *"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_tinymce__WEBPACK_IMPORTED_MODULE_2___default()), { content: body, config: {
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
                                    var _a, _b;
                                    if (localStorage.getItem("theme") === "dark") {
                                        var iframe = document.querySelector("iframe");
                                        if ((_b = (_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.children[0]) === null || _b === void 0 ? void 0 : _b.children[1]) {
                                            iframe.contentDocument.children[0].children[1].style.background = "#555";
                                            iframe.contentDocument.children[0].children[1].style.color = "#fff";
                                        }
                                    }
                                }, onChange: function (e) {
                                    setBody(e.target.getContent());
                                }, onBlur: function () { return checkBodyValidation(); } }, page.type), bodyError && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "input-error" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-exclamation-circle" }), " ", bodyError] })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page-new__final-step" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switches" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Disable Comments" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return setCommentsDisabled(!commentsDisabled); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !commentsDisabled ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Disable Rating" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return setRatingsDisabled(!ratingsDisabled); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !ratingsDisabled ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) }))] })), page.type === "public" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Do Not Display Related Pages and Tags" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return setLinksDisabled(!linksDisabled); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: !linksDisabled ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) }))] }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "new-page-final-step__switch" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Create This Page Anonymously" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue", onClick: function () { return setAnonymously(!anonymously); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: anonymously ? "fa fa-2x fa-toggle-on" : "fa fa-2x fa-toggle-off", "aria-hidden": "true" }) }))] }))] })), page.type === "public" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form__group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", __assign({ className: "form__label", htmlFor: "tags" }, { children: ["Tags ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "(Minimum 5)" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tags", className: "tags-input", id: "tags", defaultValue: tags }), tagsError && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "input-error" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-exclamation-circle" }), " ", tagsError] })))] }))), page.type === "private" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Input, { id: "url", label: "URL", placeholder: "Choose a URL for your page.", type: "text", error: urlError, value: url, onBlur: function () { return checkUrlValidation(); }, onChange: function (value) {
                                            setUrl(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.convertToUrl(value));
                                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "url__display" }, { children: ["pagser.com/", username, "/", url] }))] })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "small-paragraph" }, { children: ["See more information on what to provide in each input", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "#", target: "_blank", className: "button-text" }, { children: "here." }))] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ onClick: onSubmit, loading: submitLoading, color: "blue" }, { children: "Update" })) }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPage);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksdUVBQXVFLGlCQUFpQix1REFBSyxvQkFBb0IsMEJBQTBCLElBQUksV0FBVyxzREFBSSxRQUFRLHVDQUF1QyxvQkFBb0IsTUFBTSxpQ0FBaUMsdURBQUssbUJBQW1CLHlCQUF5QixJQUFJLFdBQVcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLHNJQUFzSSw4QkFBOEI7QUFDN3dGLG1EQUFtRCw2REFBaUI7QUFDcEUsMkNBQTJDLEdBQUcsdURBQUssaUJBQWlCLDJCQUEyQixJQUFJLCtDQUErQyxLQUFLLE1BQU0sSUFBSSxzREFBSSxVQUFVLFVBQVUsdURBQUssaUJBQWlCLDhCQUE4QixJQUFJLHlFQUF5RSxzREFBSSxpQkFBaUIsdURBQXVELElBQUksbUJBQW1CLEtBQUssSUFBSSxHQUFHLHNEQUFJLG1CQUFtQixpQ0FBaUMsSUFBSSxVQUFVLHNEQUFJLENBQUMsb0RBQU0sYUFBYSwwREFBMEQsSUFBSSxvQkFBb0IsSUFBSSxLQUFLLEtBQUs7QUFDdm1CO0FBQ0EsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvZWRpdC1wYWdlL0VkaXRQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlueU1DRSBmcm9tIFwicmVhY3QtdGlueW1jZVwiO1xuaW1wb3J0IHsgdXRpbCwgcmVxdWVzdCwgbG9hZGluZ01vZGFsLCBhbGVydCwgdGFnc0lucHV0LCB2YWxpZGF0ZSB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgTG9hZGluZywgQnV0dG9uLCBJbnB1dCwgVGV4dGFyZWEgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xudmFyIEVkaXRQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKG51bGwpLCBwYWdlID0gX2FbMF0sIHNldFBhZ2UgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShbXSksIHVzZWRVcmxzID0gX2JbMF0sIHNldFVzZWRVcmxzID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkRXJyb3IgPSBfY1swXSwgc2V0TG9hZEVycm9yID0gX2NbMV07XG4gICAgLy8gRm9ybSBmaWVsZHNcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShcIlwiKSwgdGl0bGUgPSBfZFswXSwgc2V0VGl0bGUgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZShcIlwiKSwgdGl0bGVFcnJvciA9IF9lWzBdLCBzZXRUaXRsZUVycm9yID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoXCJcIiksIGJyaWVmRGVzID0gX2ZbMF0sIHNldEJyaWVmRGVzID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoXCJcIiksIGJyaWVmRGVzRXJyb3IgPSBfZ1swXSwgc2V0QnJpZWZEZXNFcnJvciA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKFwiXCIpLCB0YXJnZXRzID0gX2hbMF0sIHNldFRhcmdldHMgPSBfaFsxXTtcbiAgICB2YXIgX2ogPSB1c2VTdGF0ZShcIlwiKSwgdGFyZ2V0c0Vycm9yID0gX2pbMF0sIHNldFRhcmdldHNFcnJvciA9IF9qWzFdO1xuICAgIHZhciBfayA9IHVzZVN0YXRlKFwiXCIpLCBib2R5ID0gX2tbMF0sIHNldEJvZHkgPSBfa1sxXTtcbiAgICB2YXIgX2wgPSB1c2VTdGF0ZShcIlwiKSwgYm9keUVycm9yID0gX2xbMF0sIHNldEJvZHlFcnJvciA9IF9sWzFdO1xuICAgIHZhciBfbSA9IHVzZVN0YXRlKGZhbHNlKSwgYW5vbnltb3VzbHkgPSBfbVswXSwgc2V0QW5vbnltb3VzbHkgPSBfbVsxXTtcbiAgICB2YXIgX28gPSB1c2VTdGF0ZShmYWxzZSksIGNvbW1lbnRzRGlzYWJsZWQgPSBfb1swXSwgc2V0Q29tbWVudHNEaXNhYmxlZCA9IF9vWzFdO1xuICAgIHZhciBfcCA9IHVzZVN0YXRlKGZhbHNlKSwgcmF0aW5nc0Rpc2FibGVkID0gX3BbMF0sIHNldFJhdGluZ3NEaXNhYmxlZCA9IF9wWzFdO1xuICAgIHZhciBfcSA9IHVzZVN0YXRlKGZhbHNlKSwgbGlua3NEaXNhYmxlZCA9IF9xWzBdLCBzZXRMaW5rc0Rpc2FibGVkID0gX3FbMV07XG4gICAgdmFyIF9yID0gdXNlU3RhdGUoXCJcIiksIHRhZ3MgPSBfclswXSwgc2V0VGFncyA9IF9yWzFdO1xuICAgIHZhciBfcyA9IHVzZVN0YXRlKFwiXCIpLCB0YWdzRXJyb3IgPSBfc1swXSwgc2V0VGFnc0Vycm9yID0gX3NbMV07XG4gICAgdmFyIF90ID0gdXNlU3RhdGUoXCJcIiksIHVybCA9IF90WzBdLCBzZXRVcmwgPSBfdFsxXTtcbiAgICB2YXIgX3UgPSB1c2VTdGF0ZShcIlwiKSwgdXJsRXJyb3IgPSBfdVswXSwgc2V0VXJsRXJyb3IgPSBfdVsxXTtcbiAgICB2YXIgX3YgPSB1c2VTdGF0ZShmYWxzZSksIHN1Ym1pdExvYWRpbmcgPSBfdlswXSwgc2V0U3VibWl0TG9hZGluZyA9IF92WzFdO1xuICAgIHZhciBwYWdlVHlwZSA9IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwidFwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgdmFyIHBhdGhQYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XG4gICAgLy8gUHJpdmF0ZTogLzp1c2VybmFtZS86dXJsL2VkaXQgIOKGkiBwYXRoUGFydHMgPSBbXCJcIiwgdXNlcm5hbWUsIHVybCwgXCJlZGl0XCJdXG4gICAgLy8gUHVibGljOiAgL3B1YmxpYy1wYWdlcy86dXJsL2VkaXQg4oaSIHBhdGhQYXJ0cyA9IFtcIlwiLCBcInB1YmxpYy1wYWdlc1wiLCB1cmwsIFwiZWRpdFwiXVxuICAgIHZhciB1c2VybmFtZSA9IHBhdGhQYXJ0c1sxXTtcbiAgICB2YXIgdXJsU2x1ZyA9IHBhdGhQYXJ0c1syXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcGlVcmwsIHJlc3BvbnNlLCBwLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpVXJsID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VUeXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpVXJsID0gXCIvcHVibGljLXBhZ2VzL1wiLmNvbmNhdCh1cmxTbHVnLCBcIi9lZGl0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpVXJsID0gXCIvXCIuY29uY2F0KHVzZXJuYW1lLCBcIi9cIikuY29uY2F0KHVybFNsdWcsIFwiL2VkaXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmdldChhcGlVcmwsIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gcmVzcG9uc2UucGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2UocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShwLnRpdGxlIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJpZWZEZXMocC5icmllZl9kZXNjcmlwdGlvbiB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhcmdldHMocC50YXJnZXRzIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Qm9keShwLmJvZHkgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcmwocC51cmwgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBbm9ueW1vdXNseShwLmFub255bW91c2x5IHx8IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzRGlzYWJsZWQocC5jb21tZW50c19kaXNhYmxlZCB8fCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSYXRpbmdzRGlzYWJsZWQocC5yYXRpbmdzX2Rpc2FibGVkIHx8IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExpbmtzRGlzYWJsZWQocC5saW5rc19kaXNhYmxlZCB8fCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudXNlZFVybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VkVXJscyhyZXNwb25zZS51c2VkVXJscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGFncyBhcyBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nIGZvciB0aGUgdGFncyBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAudHlwZSA9PT0gXCJwdWJsaWNcIiAmJiBBcnJheS5pc0FycmF5KHAudGFncykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYWdzKHAudGFncy5qb2luKFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVfMS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIEluaXRpYWxpemUgdGFncyBpbnB1dCBhZnRlciBwYWdlIGxvYWRzIGZvciBwdWJsaWMgcGFnZXNcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoKHBhZ2UgPT09IG51bGwgfHwgcGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZS50eXBlKSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRhZ3MtaW5wdXRcIikpIHtcbiAgICAgICAgICAgICAgICB0YWdzSW5wdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRhZ3NcIl0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGFnc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdzXCIpO1xuICAgICAgICAgICAgaWYgKHRhZ3NFbCkge1xuICAgICAgICAgICAgICAgIHRhZ3NFbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFncyh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtwYWdlXSk7XG4gICAgdmFyIGdldEJvZHlUZXh0ID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gKGRpdi50ZXh0Q29udGVudCB8fCBkaXYuaW5uZXJUZXh0IHx8IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICB9O1xuICAgIHZhciBjaGVja1RpdGxlVmFsaWRhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBlcnJNc2cgPSB2YWxpZGF0ZS5wYWdlKHBhZ2UudHlwZSkudGl0bGUodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogdGl0bGUpO1xuICAgICAgICBpZiAoZXJyTXNnKSB7XG4gICAgICAgICAgICBzZXRUaXRsZUVycm9yKGVyck1zZyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGl0bGVFcnJvcihcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICB2YXIgY2hlY2tCcmllZkRlc1ZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGVyck1zZyA9IHZhbGlkYXRlLnBhZ2UocGFnZS50eXBlKS5icmllZkRlcyhicmllZkRlcyk7XG4gICAgICAgIGlmIChlcnJNc2cpIHtcbiAgICAgICAgICAgIHNldEJyaWVmRGVzRXJyb3IoZXJyTXNnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRCcmllZkRlc0Vycm9yKFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBjaGVja1RhcmdldHNWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBlcnJNc2cgPSB2YWxpZGF0ZS5wYWdlKHBhZ2UudHlwZSkudGFyZ2V0cyh0YXJnZXRzKTtcbiAgICAgICAgaWYgKGVyck1zZykge1xuICAgICAgICAgICAgc2V0VGFyZ2V0c0Vycm9yKGVyck1zZyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGFyZ2V0c0Vycm9yKFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBjaGVja0JvZHlWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBib2R5VGV4dCA9IGdldEJvZHlUZXh0KGJvZHkpO1xuICAgICAgICB2YXIgbWluTGVuID0gcGFnZS50eXBlID09PSBcInB1YmxpY1wiID8gNTAgOiAxO1xuICAgICAgICB2YXIgdGlueW1jZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tY2UtdGlueW1jZVwiKTtcbiAgICAgICAgaWYgKGJvZHlUZXh0Lmxlbmd0aCA8IG1pbkxlbikge1xuICAgICAgICAgICAgaWYgKHRpbnltY2VFbClcbiAgICAgICAgICAgICAgICB0aW55bWNlRWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2U3NGMzY1wiO1xuICAgICAgICAgICAgc2V0Qm9keUVycm9yKHBhZ2UudHlwZSA9PT0gXCJwdWJsaWNcIiA/IFwiQm9keSBzaG91bGQgYmUgbW9yZSB0aGFuIFwiLmNvbmNhdChtaW5MZW4sIFwiIGNoYXJhY3RlcnMuXCIpIDogXCJCb2R5IGNhbm5vdCBiZSBibGFuay5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlUZXh0Lmxlbmd0aCA+IDIwMDAwMCkge1xuICAgICAgICAgICAgaWYgKHRpbnltY2VFbClcbiAgICAgICAgICAgICAgICB0aW55bWNlRWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2U3NGMzY1wiO1xuICAgICAgICAgICAgc2V0Qm9keUVycm9yKFwiQm9keSBzaG91bGQgYmUgbGVzcyB0aGFuIDIwMDAwMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGlueW1jZUVsKVxuICAgICAgICAgICAgdGlueW1jZUVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNDQUNBQ0FcIjtcbiAgICAgICAgc2V0Qm9keUVycm9yKFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBjaGVja1RhZ3NWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyTXNnID0gdmFsaWRhdGUucGFnZShcInB1YmxpY1wiKS50YWdzKHRhZ3Muc3BsaXQoXCIsXCIpLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgIGlmIChlcnJNc2cpIHtcbiAgICAgICAgICAgIHNldFRhZ3NFcnJvcihlcnJNc2cpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldFRhZ3NFcnJvcihcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICB2YXIgY2hlY2tVcmxWYWxpZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyTXNnID0gdmFsaWRhdGUucGFnZShcInByaXZhdGVcIikudXJsKHVybCwgdXNlZFVybHMpO1xuICAgICAgICBpZiAoZXJyTXNnKSB7XG4gICAgICAgICAgICBzZXRVcmxFcnJvcihlcnJNc2cpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNldFVybEVycm9yKFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBjaGVja0lmQWxsT2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGJvZHlUZXh0ID0gZ2V0Qm9keVRleHQoYm9keSk7XG4gICAgICAgIHZhciBtaW5Cb2R5TGVuID0gcGFnZS50eXBlID09PSBcInB1YmxpY1wiID8gNTAgOiAxO1xuICAgICAgICB2YXIgdGl0bGVPayA9ICF2YWxpZGF0ZS5wYWdlKHBhZ2UudHlwZSkudGl0bGUodGl0bGUpO1xuICAgICAgICB2YXIgYnJpZWZEZXNPayA9ICF2YWxpZGF0ZS5wYWdlKHBhZ2UudHlwZSkuYnJpZWZEZXMoYnJpZWZEZXMpO1xuICAgICAgICB2YXIgdGFyZ2V0c09rID0gIXZhbGlkYXRlLnBhZ2UocGFnZS50eXBlKS50YXJnZXRzKHRhcmdldHMpO1xuICAgICAgICB2YXIgYm9keU9rID0gYm9keVRleHQubGVuZ3RoID49IG1pbkJvZHlMZW4gJiYgYm9keVRleHQubGVuZ3RoIDw9IDIwMDAwMDtcbiAgICAgICAgaWYgKHBhZ2UudHlwZSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICAgICAgdmFyIHRhZ3NPayA9ICF2YWxpZGF0ZS5wYWdlKFwicHVibGljXCIpLnRhZ3ModGFncy5zcGxpdChcIixcIikuZmlsdGVyKEJvb2xlYW4pKTtcbiAgICAgICAgICAgIHJldHVybiB0aXRsZU9rICYmIGJyaWVmRGVzT2sgJiYgdGFyZ2V0c09rICYmIGJvZHlPayAmJiB0YWdzT2s7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZ2UudHlwZSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgIHZhciB1cmxPayA9ICF2YWxpZGF0ZS5wYWdlKFwicHJpdmF0ZVwiKS51cmwodXJsLCB1c2VkVXJscyk7XG4gICAgICAgICAgICByZXR1cm4gdGl0bGVPayAmJiBicmllZkRlc09rICYmIHRhcmdldHNPayAmJiBib2R5T2sgJiYgdXJsT2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgdmFyIG9uU3VibWl0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCBlXzI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVja0lmQWxsT2soKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tUaXRsZVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQnJpZWZEZXNWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1RhcmdldHNWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JvZHlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFnZS50eXBlID09PSBcInB1YmxpY1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVGFnc1ZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlLnR5cGUgPT09IFwicHJpdmF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXJsVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIlNhdmluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCA0LCA1XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucHV0KFwiL3BhZ2VzL1wiLmNvbmNhdChwYWdlLmlkKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcGFnZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWVmRGVzOiBicmllZkRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGFyZ2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFub255bW91c2x5OiBhbm9ueW1vdXNseSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBjb21tZW50c0Rpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nOiByYXRpbmdzRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rczogbGlua3NEaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBwYWdlLnR5cGUgPT09IFwicHJpdmF0ZVwiID8gdXJsIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBwYWdlLnR5cGUgPT09IFwicHVibGljXCIgPyB0YWdzLnNwbGl0KFwiLFwiKS5maWx0ZXIoQm9vbGVhbikgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHVibGljLXBhZ2VzL1wiLmNvbmNhdChyZXNwb25zZS51cmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIi5jb25jYXQocmVzcG9uc2UudXNlcm5hbWUsIFwiL1wiKS5jb25jYXQocmVzcG9uc2UudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2F2aW5nLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCBcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25CYWNrQ2xpY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFwYWdlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAocGFnZS50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3B1YmxpYy1wYWdlcy9cIi5jb25jYXQocGFnZS51cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIi5jb25jYXQodXNlcm5hbWUsIFwiL1wiKS5jb25jYXQocGFnZS51cmwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAobG9hZEVycm9yKSB7XG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld1wiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiRmFpbGVkIHRvIGxvYWQgcGFnZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiB9KSwgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9LCBjb2xvcjogXCJibHVlXCIgfSwgeyBjaGlsZHJlbjogXCJSZXRyeVwiIH0pKV0gfSkpIH0pKSk7XG4gICAgfVxuICAgIGlmICghcGFnZSkge1xuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpIH0pKSk7XG4gICAgfVxuICAgIHZhciBib2R5Q2xhc3NOYW1lID0gXCJmb3JtX19ncm91cFwiICsgKGJvZHlFcnJvciA/IFwiIGZvcm1fX2dyb3VwLS1lcnJvclwiIDogXCJcIik7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidXR0b24tdGV4dCBidXR0b24tdGV4dC0tYmlnIGEtMTFcIiwgb25DbGljazogb25CYWNrQ2xpY2tlZCB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtYXJyb3ctbGVmdFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBcIiBCYWNrXCJdIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJVcGRhdGUgeW91ciBwYWdlXCIgfSkpIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZS1uZXdfX2NvbnRlbnRzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgbGFiZWw6IHBhZ2UudHlwZSA9PT0gXCJwcml2YXRlXCIgPyBcIlRpdGxlICpcIiA6IFwiVGl0bGVcIiwgaWQ6IFwidGl0bGVcIiwgdmFsdWU6IHRpdGxlLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tUaXRsZVZhbGlkYXRpb24odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hlY2tUaXRsZVZhbGlkYXRpb24oKTsgfSwgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGEgdGl0bGUgZm9yIHlvdXIgcGFnZS5cIiwgbWF4TGVuZ3RoOiA1MCwgZXJyb3I6IHRpdGxlRXJyb3IgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRleHRhcmVhLCB7IGxhYmVsOiBcIkJyaWVmIERlc2NyaXB0aW9uXCIsIGlkOiBcImJyaWVmRGVzXCIsIHZhbHVlOiBicmllZkRlcywgcm93czogMywgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCcmllZkRlcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQnJpZWZEZXNWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjaGVja0JyaWVmRGVzVmFsaWRhdGlvbigpOyB9LCBwbGFjZWhvbGRlcjogXCJEZXNjcmliZSBicmllZmx5IHdoYXQgeW91ciBwYWdlIGlzIGFsbCBhYm91dC5cIiwgbWF4TGVuZ3RoOiAzMDAsIGVycm9yOiBicmllZkRlc0Vycm9yIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChUZXh0YXJlYSwgeyBsYWJlbDogXCJUYXJnZXRzXCIsIGlkOiBcInRhcmdldHNcIiwgdmFsdWU6IHRhcmdldHMsIHJvd3M6IDMsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0cyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVGFyZ2V0c1ZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkJsdXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNoZWNrVGFyZ2V0c1ZhbGlkYXRpb24oKTsgfSwgcGxhY2Vob2xkZXI6IFwiRGVzY3JpYmUgYnJpZWZseSB3aG8gdGhpcyBwYWdlIGlzIGZvci5cIiwgbWF4TGVuZ3RoOiAzMDAsIGVycm9yOiB0YXJnZXRzRXJyb3IgfSkgfSkpLCBfanN4KFwiaHJcIiwgeyBjbGFzc05hbWU6IFwiaHIgdS1tYXJnaW4tdG9wLTVcIiB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGJvZHlDbGFzc05hbWUsIGlkOiBcImJvZHlcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGh0bWxGb3I6IFwiYm9keUlucHV0XCIsIGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiIH0sIHsgY2hpbGRyZW46IFtcIlBhZ2UgQm9keVwiLCBwYWdlLnR5cGUgPT09IFwicHJpdmF0ZVwiICYmIFwiICpcIl0gfSkpLCBfanN4KFRpbnlNQ0UsIHsgY29udGVudDogYm9keSwgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2luX3VybDogXCIvdGlueW1jZS1za2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiBcInByZXZpZXcgbGluayBsaXN0cyBhZHZsaXN0IGNvZGVzYW1wbGUgaW1hZ2UgaW1hZ2V0b29sc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogXCJmb3JtYXRzZWxlY3QgfCBib2xkIGl0YWxpYyB1bmRlcmxpbmUgfCBsaW5rIGNvZGVzYW1wbGUgaW1hZ2UgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGJ1bGxpc3QgbnVtbGlzdCB8IG91dGRlbnQgaW5kZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19mb3JtYXRzOiBcIlBhcmFncmFwaD1wOyBIZWFkZXI9aDI7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c2JhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV9kaW1lbnNpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdldG9vbHNfdG9vbGJhcjogXCJyb3RhdGVsZWZ0IHJvdGF0ZXJpZ2h0IHwgZmxpcHYgZmxpcGggfCBpbWFnZW9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9iID0gKF9hID0gaWZyYW1lID09PSBudWxsIHx8IGlmcmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWZyYW1lLmNvbnRlbnREb2N1bWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoaWxkcmVuWzBdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjNTU1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc3R5bGUuY29sb3IgPSBcIiNmZmZcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Qm9keShlLnRhcmdldC5nZXRDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkJsdXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNoZWNrQm9keVZhbGlkYXRpb24oKTsgfSB9LCBwYWdlLnR5cGUpLCBib2R5RXJyb3IgJiYgKF9qc3hzKFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJpbnB1dC1lcnJvclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiB9KSwgXCIgXCIsIGJvZHlFcnJvcl0gfSkpKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlLW5ld19fZmluYWwtc3RlcFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hlc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIHsgY2hpbGRyZW46IFwiRGlzYWJsZSBDb21tZW50c1wiIH0pLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q29tbWVudHNEaXNhYmxlZCghY29tbWVudHNEaXNhYmxlZCk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6ICFjb21tZW50c0Rpc2FibGVkID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIiA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIHsgY2hpbGRyZW46IFwiRGlzYWJsZSBSYXRpbmdcIiB9KSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFJhdGluZ3NEaXNhYmxlZCghcmF0aW5nc0Rpc2FibGVkKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogIXJhdGluZ3NEaXNhYmxlZCA/IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9uXCIgOiBcImZhIGZhLTJ4IGZhLXRvZ2dsZS1vZmZcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSB9KSldIH0pKSwgcGFnZS50eXBlID09PSBcInB1YmxpY1wiICYmIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuZXctcGFnZS1maW5hbC1zdGVwX19zd2l0Y2hcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIHsgY2hpbGRyZW46IFwiRG8gTm90IERpc3BsYXkgUmVsYXRlZCBQYWdlcyBhbmQgVGFnc1wiIH0pLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0TGlua3NEaXNhYmxlZCghbGlua3NEaXNhYmxlZCk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6ICFsaW5rc0Rpc2FibGVkID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIiA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKV0gfSkpKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibmV3LXBhZ2UtZmluYWwtc3RlcF9fc3dpdGNoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBUaGlzIFBhZ2UgQW5vbnltb3VzbHlcIiB9KSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEFub255bW91c2x5KCFhbm9ueW1vdXNseSk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IGFub255bW91c2x5ID8gXCJmYSBmYS0yeCBmYS10b2dnbGUtb25cIiA6IFwiZmEgZmEtMnggZmEtdG9nZ2xlLW9mZlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKV0gfSkpXSB9KSksIHBhZ2UudHlwZSA9PT0gXCJwdWJsaWNcIiAmJiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiLCBodG1sRm9yOiBcInRhZ3NcIiB9LCB7IGNoaWxkcmVuOiBbXCJUYWdzIFwiLCBfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiBcIihNaW5pbXVtIDUpXCIgfSldIH0pKSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJ0YWdzXCIsIGNsYXNzTmFtZTogXCJ0YWdzLWlucHV0XCIsIGlkOiBcInRhZ3NcIiwgZGVmYXVsdFZhbHVlOiB0YWdzIH0pLCB0YWdzRXJyb3IgJiYgKF9qc3hzKFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJpbnB1dC1lcnJvclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiB9KSwgXCIgXCIsIHRhZ3NFcnJvcl0gfSkpKV0gfSkpKSwgcGFnZS50eXBlID09PSBcInByaXZhdGVcIiAmJiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KElucHV0LCB7IGlkOiBcInVybFwiLCBsYWJlbDogXCJVUkxcIiwgcGxhY2Vob2xkZXI6IFwiQ2hvb3NlIGEgVVJMIGZvciB5b3VyIHBhZ2UuXCIsIHR5cGU6IFwidGV4dFwiLCBlcnJvcjogdXJsRXJyb3IsIHZhbHVlOiB1cmwsIG9uQmx1cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hlY2tVcmxWYWxpZGF0aW9uKCk7IH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXJsKHV0aWwuY29udmVydFRvVXJsKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInVybF9fZGlzcGxheVwiIH0sIHsgY2hpbGRyZW46IFtcInBhZ3Nlci5jb20vXCIsIHVzZXJuYW1lLCBcIi9cIiwgdXJsXSB9KSldIH0pKSldIH0pKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4cyhcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic21hbGwtcGFyYWdyYXBoXCIgfSwgeyBjaGlsZHJlbjogW1wiU2VlIG1vcmUgaW5mb3JtYXRpb24gb24gd2hhdCB0byBwcm92aWRlIGluIGVhY2ggaW5wdXRcIiwgXCIgXCIsIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIjXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJoZXJlLlwiIH0pKV0gfSkpIH0pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LWNlbnRlclwiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IG9uU3VibWl0LCBsb2FkaW5nOiBzdWJtaXRMb2FkaW5nLCBjb2xvcjogXCJibHVlXCIgfSwgeyBjaGlsZHJlbjogXCJVcGRhdGVcIiB9KSkgfSkpXSB9KSldIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdFBhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=