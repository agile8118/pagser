"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["profile"],{

/***/ "./src/views/profile/Header.tsx":
/*!**************************************!*\
  !*** ./src/views/profile/Header.tsx ***!
  \**************************************/
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
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.location.pathname.split("/")[1]), section = _a[0], setSection = _a[1];
    var settingClass = "btn-lined ".concat(section === "settings" ? "btn-lined--active" : "");
    var profileClass = "btn-lined ".concat(section === "profile" ? "btn-lined--active" : "");
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "admin__header" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "lined-btns lined-btns-big margin-bottom-2 margin-top-1" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, __assign({ to: "/profile", className: profileClass, onClick: function () {
                            setSection("profile");
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-user margin-right-3px" }), " Profile"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, __assign({ to: "/settings", className: settingClass, onClick: function () {
                            setSection("settings");
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-cogs margin-right-3px" }), " Settings"] }))] })) })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/views/profile/Info.tsx":
/*!************************************!*\
  !*** ./src/views/profile/Info.tsx ***!
  \************************************/
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
/* harmony import */ var _Photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Photo */ "./src/views/profile/Photo.tsx");
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





var Info = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _a[0], setLoading = _a[1]; // loading when loading content
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loadingSaving = _b[0], setLoadingSaving = _b[1]; // loading when saving changes
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), name = _c[0], setName = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), username = _d[0], setUsername = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), nameError = _e[0], setNameError = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), btnDisabled = _f[0], setBtnDisabled = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), headline = _g[0], setHeadline = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), headlineError = _h[0], setHeadlineError = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), biography = _j[0], setBiography = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), biographyError = _k[0], setBiographyError = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), website = _l[0], setWebsite = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), twitter = _m[0], setTwitter = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), youtube = _o[0], setYoutube = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), linkedin = _p[0], setLinkedin = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), facebook = _q[0], setFacebook = _q[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.title = "Profile | Pagser";
        setLoading(true);
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, user, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.get("/profile", { auth: true })];
                    case 1:
                        response = (_a.sent());
                        user = response.user;
                        setName(user.name || "");
                        setHeadline(user.headline || "");
                        setBiography(user.biography || "");
                        setUsername(user.username);
                        setWebsite(user.links.website);
                        setTwitter(user.links.twitter);
                        setYoutube(user.links.youtube);
                        setLinkedin(user.links.linkedin);
                        setFacebook(user.links.facebook);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1.status === 401) {
                            window.location.href = "/login?redirected=admin";
                        }
                        return [3 /*break*/, 3];
                    case 3:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    // Name changes handle
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(name)) {
            setNameError("You must enter your name.");
        }
        if (!_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isAlpha(name) && !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(name)) {
            setNameError("Your name should contains only letters.");
        }
        if (!_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(name, 3, 30) && !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(name)) {
            setNameError("Your name should be between 3 and 30 characters.");
        }
        if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(name, 3, 30) &&
            !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(name) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isAlpha(name)) {
            setNameError("");
        }
    }, [name]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.letterPercentage(headline, 60)) {
            setHeadlineError("More than 60% of your headline must be letters.");
        }
        if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.letterPercentage(headline, 60)) {
            setHeadlineError("");
        }
    }, [headline]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.letterPercentage(biography, 70)) {
            setBiographyError("More than 70% of your biography must be letters.");
        }
        if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.letterPercentage(biography, 70)) {
            setBiographyError("");
        }
    }, [biography]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        checkIfAllOk();
    }, [name, headline, biography]);
    var checkIfAllOk = function () {
        if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(name, 3, 30) &&
            !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(name) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isAlpha(name) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.letterPercentage(headline, 60) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.letterPercentage(biography, 70)) {
            setBtnDisabled(false);
        }
        else {
            setBtnDisabled(true);
        }
    };
    var onSaveClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoadingSaving(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.patch("/profile", {
                            name: name,
                            headline: headline,
                            biography: biography,
                            links: { website: website, twitter: twitter, linkedin: linkedin, youtube: youtube, facebook: facebook },
                        }, { auth: true })];
                case 2:
                    response = (_a.sent());
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.alert)("Your profile was updated successfully.", "success");
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    setLoadingSaving(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "admin" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary", id: "information" }, { children: "Your Information" })) })), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Loading, {}) }))), !loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Input, { value: name, error: nameError, label: "Name", placeholder: "Full name", onChange: function (value) {
                                    setName(value);
                                } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Input, { maxLength: 50, label: "Headline", error: headlineError, placeholder: "Describe yourself in few words", value: headline, onChange: function (value) {
                                    setHeadline(value);
                                } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form__label" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Textarea, { label: "Biography", maxLength: 250, error: biographyError, value: biography, onChange: function (value) {
                                        setBiography(value);
                                    }, placeholder: "Add more information about yourself", rows: 4 })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form__group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ className: "form__label" }, { children: "Links" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group--sm" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", maxLength: 100, placeholder: "Website (http://www.example.com)", className: "form__input", value: website, onChange: function (event) {
                                            setWebsite(event.target.value);
                                        } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group--sm" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "input__group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "https://twitter.com/" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { maxLength: 100, type: "text", placeholder: "Twitter Profile", value: twitter, className: "form__input", onChange: function (event) {
                                                    setTwitter(event.target.value);
                                                } })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group--sm" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "input__group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "https://youtube.com/" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { maxLength: 100, type: "text", placeholder: "Youtube Profile", value: youtube, className: "form__input", onChange: function (event) {
                                                    setYoutube(event.target.value);
                                                } })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group--sm" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "input__group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "https://linkedin.com/" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { maxLength: 100, type: "text", placeholder: "LinkedIn Profile", value: linkedin, className: "form__input", onChange: function (event) {
                                                    setLinkedin(event.target.value);
                                                } })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group--sm" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "input__group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "https://facebook.com/" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", maxLength: 100, placeholder: "Facebook Profile", value: facebook, className: "form__input", onChange: function (event) {
                                                    setFacebook(event.target.value);
                                                } })] })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({ outlined: true, color: "blue", rounded: true, disabled: btnDisabled, loading: loadingSaving, onClick: function () { return onSaveClick(); } }, { children: "Save" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Photo__WEBPACK_IMPORTED_MODULE_4__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "right-content margin-top-4" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: "/users/".concat(username), target: "_blank", className: "button-text" }, { children: ["View public profile ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-arrow-right" })] })) }))] }))] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);


/***/ }),

/***/ "./src/views/profile/Photo.tsx":
/*!*************************************!*\
  !*** ./src/views/profile/Photo.tsx ***!
  \*************************************/
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




var Photo = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.USER_PLACEHOLDER_IMAGE), photo = _a[0], setPhoto = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), uploadPhotoModal = _b[0], setUploadPhotoModal = _b[1];
    // Is used to avoid memory leak.
    // This was used when the component was class based, we need to figure out
    // whether or not it's still needed in the function based components with hooks.
    var _isMounted = false;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, user, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _isMounted = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request.get("/profile", { auth: true })];
                    case 2:
                        response = (_a.sent());
                        user = response.user;
                        if (_isMounted) {
                            setPhoto(user.photo_url || _pagser_common__WEBPACK_IMPORTED_MODULE_3__.USER_PLACEHOLDER_IMAGE);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1.status === 401) {
                            window.location.href = "/login?redirected=admin";
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
        return function () {
            // Set the _isMounted as false so that no ajax request will be made after the unmount
            _isMounted = false;
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "center-content margin-top-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary", id: "photo" }, { children: "Photo" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "profile__img", src: photo, onError: function () {
                            setPhoto(_pagser_common__WEBPACK_IMPORTED_MODULE_3__.USER_PLACEHOLDER_IMAGE);
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "javascript:void(0)", onClick: function () {
                            setUploadPhotoModal(true);
                        }, className: "button-text" }, { children: "Change or upload a new photo" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.UploadPhoto, { open: uploadPhotoModal, header: "Upload a Profile Photo", text: "Upload a beautiful non-pixelated photo of yourself:", inputLabelName: "Choose your photo", url: "/profile/photo", minWidth: 250, minHeight: 250, size: 5000000, aspectRatio: 1 / 1, success: function (photo) {
                    setPhoto(photo);
                }, onClose: function () {
                    setUploadPhotoModal(false);
                } })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photo);


/***/ }),

/***/ "./src/views/profile/index.tsx":
/*!*************************************!*\
  !*** ./src/views/profile/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info */ "./src/views/profile/Info.tsx");
/* harmony import */ var _settings_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/Settings */ "./src/views/profile/settings/Settings.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/views/profile/Header.tsx");





function Profile() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: "/profile", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Info__WEBPACK_IMPORTED_MODULE_1__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: "/settings", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_settings_Settings__WEBPACK_IMPORTED_MODULE_2__["default"], {}) })] })] }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);


/***/ }),

/***/ "./src/views/profile/settings/Email.tsx":
/*!**********************************************!*\
  !*** ./src/views/profile/settings/Email.tsx ***!
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
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
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




var Email = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), email = _b[0], setEmail = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.get("/settings/email", {
                                auth: true,
                            })];
                    case 2:
                        response = (_a.sent());
                        setEmail(response.email);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1.status === 401) {
                            window.location.href = "/login?redirected=admin";
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var onFormSubmit = function () { };
    if (loading) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group margin-bottom-0" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ className: "form__label" }, { children: "Change Your Email" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "left-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) }))] }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "form", onSubmit: function (event) {
            event.preventDefault();
            onFormSubmit();
        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-roup" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { label: "Change Your Email", type: "text", value: email, placeholder: "Your New Email", onChange: function (value) {
                        setEmail(value);
                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ rounded: true, outlined: true, color: "blue", onClick: function () {
                        (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.alert)("Sorry this part is still under development.");
                    }, type: "submit" }, { children: "Change" })) }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);


/***/ }),

/***/ "./src/views/profile/settings/Password.tsx":
/*!*************************************************!*\
  !*** ./src/views/profile/settings/Password.tsx ***!
  \*************************************************/
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




var Password = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), password = _a[0], setPassword = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), passwordError = _b[0], setPasswordError = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmPassword = _c[0], setConfirmPassword = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmPasswordError = _d[0], setConfirmPasswordError = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), confirmPasswordDisabled = _e[0], setConfirmPasswordDisabled = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), buttonDisabled = _f[0], setButtonDisabled = _f[1];
    var confirmPasswordReset = function () {
        setConfirmPasswordDisabled(true);
        setConfirmPasswordError("");
        setConfirmPassword("");
    };
    var onInputFocusOut = function (value, fieldName) {
        if (fieldName === "password") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isEmpty(value)) {
                setPassword("");
                confirmPasswordReset();
                setButtonDisabled(true);
            }
        }
        if (fieldName === "confirmPassword") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isEmpty(value)) {
                setConfirmPasswordError("Please confirm your password.");
            }
        }
    };
    var onInputChange = function (value, fieldName) {
        if (fieldName === "password") {
            setPassword(value);
            confirmPasswordReset();
            setButtonDisabled(true);
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isHardPassword(value) && !_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isEmpty(value)) {
                setPasswordError("Password should contain a capital letter, letters and numbers.");
                confirmPasswordReset();
                setButtonDisabled(true);
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.len(value, 8, 30) && !_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isEmpty(value)) {
                setPasswordError("Password should contain 8 to 30 characters.");
                setButtonDisabled(true);
                confirmPasswordReset();
            }
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.len(value, 8, 30) &&
                !_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isEmpty(value) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isHardPassword(value)) {
                setPasswordError("");
                setConfirmPasswordDisabled(false);
            }
        }
        if (fieldName === "confirmPassword") {
            setConfirmPassword(value);
            if (password !== value) {
                setConfirmPasswordError("Passwords do not match up.");
                setButtonDisabled(true);
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_2__.validate.isEmpty(value) && password === value) {
                setConfirmPasswordError("");
                setButtonDisabled(false);
            }
        }
    };
    var onFormSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.loadingModal)("Updating your password...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_2__.request.patch("/settings/password", {
                            password: password,
                        }, { auth: true })];
                case 2:
                    response = _a.sent();
                    setPassword("");
                    setPasswordError("");
                    setButtonDisabled(true);
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.alert)("Password was updated successfully.", "success");
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    (0,_pagser_common__WEBPACK_IMPORTED_MODULE_2__.loadingModal)();
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ method: "post", onSubmit: function (event) {
                event.preventDefault();
                onFormSubmit();
            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ className: "form__label margin-top-2" }, { children: "Change Your Password" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { placeholder: "New Password", type: "password", error: passwordError, onBlur: function (value) {
                            onInputFocusOut(value, "password");
                        }, onChange: function (value) {
                            onInputChange(value, "password");
                        }, value: password }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "margin-top-1" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "password", placeholder: "Confirm Password", error: confirmPasswordError, disabled: confirmPasswordDisabled, onBlur: function (value) {
                            onInputFocusOut(value, "confirmPassword");
                        }, onChange: function (value) {
                            onInputChange(value, "confirmPassword");
                        }, value: confirmPassword }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "blue", type: "submit", outlined: true, rounded: true, disabled: buttonDisabled }, { children: "Change" })) }))] })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Password);


/***/ }),

/***/ "./src/views/profile/settings/Settings.tsx":
/*!*************************************************!*\
  !*** ./src/views/profile/settings/Settings.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email */ "./src/views/profile/settings/Email.tsx");
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Password */ "./src/views/profile/settings/Password.tsx");
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



var Settings = function () {
    document.title = "Settings | Pagser";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "admin" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary margin-bottom-2" }, { children: "Website and User Settings" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Email__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Password__WEBPACK_IMPORTED_MODULE_2__["default"], {})] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNEQUFJLGtCQUFrQiwrQ0FBK0MsSUFBSSx1Q0FBdUMsSUFBSSxJQUFJLHNEQUFJLENBQUMsOENBQUssSUFBSSxHQUFHLHNEQUFJLENBQUMsaURBQVEsSUFBSSxJQUFJLElBQUk7QUFDbFc7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wcm9maWxlL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvcHJvZmlsZS9JbmZvLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wcm9maWxlL1Bob3RvLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wcm9maWxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wcm9maWxlL3NldHRpbmdzL0VtYWlsLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wcm9maWxlL3NldHRpbmdzL1Bhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9wcm9maWxlL3NldHRpbmdzL1NldHRpbmdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbnZhciBIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSksIHNlY3Rpb24gPSBfYVswXSwgc2V0U2VjdGlvbiA9IF9hWzFdO1xuICAgIHZhciBzZXR0aW5nQ2xhc3MgPSBcImJ0bi1saW5lZCBcIi5jb25jYXQoc2VjdGlvbiA9PT0gXCJzZXR0aW5nc1wiID8gXCJidG4tbGluZWQtLWFjdGl2ZVwiIDogXCJcIik7XG4gICAgdmFyIHByb2ZpbGVDbGFzcyA9IFwiYnRuLWxpbmVkIFwiLmNvbmNhdChzZWN0aW9uID09PSBcInByb2ZpbGVcIiA/IFwiYnRuLWxpbmVkLS1hY3RpdmVcIiA6IFwiXCIpO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhZG1pbl9faGVhZGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJsaW5lZC1idG5zIGxpbmVkLWJ0bnMtYmlnIG1hcmdpbi1ib3R0b20tMiBtYXJnaW4tdG9wLTFcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoTGluaywgX19hc3NpZ24oeyB0bzogXCIvcHJvZmlsZVwiLCBjbGFzc05hbWU6IHByb2ZpbGVDbGFzcywgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlY3Rpb24oXCJwcm9maWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdXNlciBtYXJnaW4tcmlnaHQtM3B4XCIgfSksIFwiIFByb2ZpbGVcIl0gfSkpLCBfanN4cyhMaW5rLCBfX2Fzc2lnbih7IHRvOiBcIi9zZXR0aW5nc1wiLCBjbGFzc05hbWU6IHNldHRpbmdDbGFzcywgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlY3Rpb24oXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWNvZ3MgbWFyZ2luLXJpZ2h0LTNweFwiIH0pLCBcIiBTZXR0aW5nc1wiXSB9KSldIH0pKSB9KSkgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRpbmcsIElucHV0LCBCdXR0b24sIFRleHRhcmVhIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IGFsZXJ0LCB2YWxpZGF0ZSwgcmVxdWVzdCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IFBob3RvIGZyb20gXCIuL1Bob3RvXCI7XG52YXIgSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdOyAvLyBsb2FkaW5nIHdoZW4gbG9hZGluZyBjb250ZW50XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nU2F2aW5nID0gX2JbMF0sIHNldExvYWRpbmdTYXZpbmcgPSBfYlsxXTsgLy8gbG9hZGluZyB3aGVuIHNhdmluZyBjaGFuZ2VzXG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIG5hbWUgPSBfY1swXSwgc2V0TmFtZSA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCB1c2VybmFtZSA9IF9kWzBdLCBzZXRVc2VybmFtZSA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCBuYW1lRXJyb3IgPSBfZVswXSwgc2V0TmFtZUVycm9yID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoZmFsc2UpLCBidG5EaXNhYmxlZCA9IF9mWzBdLCBzZXRCdG5EaXNhYmxlZCA9IF9mWzFdO1xuICAgIHZhciBfZyA9IHVzZVN0YXRlKFwiXCIpLCBoZWFkbGluZSA9IF9nWzBdLCBzZXRIZWFkbGluZSA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKFwiXCIpLCBoZWFkbGluZUVycm9yID0gX2hbMF0sIHNldEhlYWRsaW5lRXJyb3IgPSBfaFsxXTtcbiAgICB2YXIgX2ogPSB1c2VTdGF0ZShcIlwiKSwgYmlvZ3JhcGh5ID0gX2pbMF0sIHNldEJpb2dyYXBoeSA9IF9qWzFdO1xuICAgIHZhciBfayA9IHVzZVN0YXRlKFwiXCIpLCBiaW9ncmFwaHlFcnJvciA9IF9rWzBdLCBzZXRCaW9ncmFwaHlFcnJvciA9IF9rWzFdO1xuICAgIHZhciBfbCA9IHVzZVN0YXRlKFwiXCIpLCB3ZWJzaXRlID0gX2xbMF0sIHNldFdlYnNpdGUgPSBfbFsxXTtcbiAgICB2YXIgX20gPSB1c2VTdGF0ZShcIlwiKSwgdHdpdHRlciA9IF9tWzBdLCBzZXRUd2l0dGVyID0gX21bMV07XG4gICAgdmFyIF9vID0gdXNlU3RhdGUoXCJcIiksIHlvdXR1YmUgPSBfb1swXSwgc2V0WW91dHViZSA9IF9vWzFdO1xuICAgIHZhciBfcCA9IHVzZVN0YXRlKFwiXCIpLCBsaW5rZWRpbiA9IF9wWzBdLCBzZXRMaW5rZWRpbiA9IF9wWzFdO1xuICAgIHZhciBfcSA9IHVzZVN0YXRlKFwiXCIpLCBmYWNlYm9vayA9IF9xWzBdLCBzZXRGYWNlYm9vayA9IF9xWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJQcm9maWxlIHwgUGFnc2VyXCI7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCB1c2VyLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5nZXQoXCIvcHJvZmlsZVwiLCB7IGF1dGg6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lKHVzZXIubmFtZSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlYWRsaW5lKHVzZXIuaGVhZGxpbmUgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCaW9ncmFwaHkodXNlci5iaW9ncmFwaHkgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh1c2VyLnVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdlYnNpdGUodXNlci5saW5rcy53ZWJzaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFR3aXR0ZXIodXNlci5saW5rcy50d2l0dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFlvdXR1YmUodXNlci5saW5rcy55b3V0dWJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExpbmtlZGluKHVzZXIubGlua3MubGlua2VkaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmFjZWJvb2sodXNlci5saW5rcy5mYWNlYm9vayk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVfMS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW4/cmVkaXJlY3RlZD1hZG1pblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSkoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gTmFtZSBjaGFuZ2VzIGhhbmRsZVxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KG5hbWUpKSB7XG4gICAgICAgICAgICBzZXROYW1lRXJyb3IoXCJZb3UgbXVzdCBlbnRlciB5b3VyIG5hbWUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFsaWRhdGUuaXNBbHBoYShuYW1lKSAmJiAhdmFsaWRhdGUuaXNFbXB0eShuYW1lKSkge1xuICAgICAgICAgICAgc2V0TmFtZUVycm9yKFwiWW91ciBuYW1lIHNob3VsZCBjb250YWlucyBvbmx5IGxldHRlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFsaWRhdGUubGVuKG5hbWUsIDMsIDMwKSAmJiAhdmFsaWRhdGUuaXNFbXB0eShuYW1lKSkge1xuICAgICAgICAgICAgc2V0TmFtZUVycm9yKFwiWW91ciBuYW1lIHNob3VsZCBiZSBiZXR3ZWVuIDMgYW5kIDMwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGF0ZS5sZW4obmFtZSwgMywgMzApICYmXG4gICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eShuYW1lKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUuaXNBbHBoYShuYW1lKSkge1xuICAgICAgICAgICAgc2V0TmFtZUVycm9yKFwiXCIpO1xuICAgICAgICB9XG4gICAgfSwgW25hbWVdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXZhbGlkYXRlLmxldHRlclBlcmNlbnRhZ2UoaGVhZGxpbmUsIDYwKSkge1xuICAgICAgICAgICAgc2V0SGVhZGxpbmVFcnJvcihcIk1vcmUgdGhhbiA2MCUgb2YgeW91ciBoZWFkbGluZSBtdXN0IGJlIGxldHRlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGF0ZS5sZXR0ZXJQZXJjZW50YWdlKGhlYWRsaW5lLCA2MCkpIHtcbiAgICAgICAgICAgIHNldEhlYWRsaW5lRXJyb3IoXCJcIik7XG4gICAgICAgIH1cbiAgICB9LCBbaGVhZGxpbmVdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXZhbGlkYXRlLmxldHRlclBlcmNlbnRhZ2UoYmlvZ3JhcGh5LCA3MCkpIHtcbiAgICAgICAgICAgIHNldEJpb2dyYXBoeUVycm9yKFwiTW9yZSB0aGFuIDcwJSBvZiB5b3VyIGJpb2dyYXBoeSBtdXN0IGJlIGxldHRlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGF0ZS5sZXR0ZXJQZXJjZW50YWdlKGJpb2dyYXBoeSwgNzApKSB7XG4gICAgICAgICAgICBzZXRCaW9ncmFwaHlFcnJvcihcIlwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtiaW9ncmFwaHldKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0lmQWxsT2soKTtcbiAgICB9LCBbbmFtZSwgaGVhZGxpbmUsIGJpb2dyYXBoeV0pO1xuICAgIHZhciBjaGVja0lmQWxsT2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZS5sZW4obmFtZSwgMywgMzApICYmXG4gICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eShuYW1lKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUuaXNBbHBoYShuYW1lKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUubGV0dGVyUGVyY2VudGFnZShoZWFkbGluZSwgNjApICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5sZXR0ZXJQZXJjZW50YWdlKGJpb2dyYXBoeSwgNzApKSB7XG4gICAgICAgICAgICBzZXRCdG5EaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRCdG5EaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uU2F2ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCBlXzI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdTYXZpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucGF0Y2goXCIvcHJvZmlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkbGluZTogaGVhZGxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlvZ3JhcGh5OiBiaW9ncmFwaHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua3M6IHsgd2Vic2l0ZTogd2Vic2l0ZSwgdHdpdHRlcjogdHdpdHRlciwgbGlua2VkaW46IGxpbmtlZGluLCB5b3V0dWJlOiB5b3V0dWJlLCBmYWNlYm9vazogZmFjZWJvb2sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IChfYS5zZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgcHJvZmlsZSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ1NhdmluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImFkbWluXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiLCBpZDogXCJpbmZvcm1hdGlvblwiIH0sIHsgY2hpbGRyZW46IFwiWW91ciBJbmZvcm1hdGlvblwiIH0pKSB9KSksIGxvYWRpbmcgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnQgbWFyZ2luLXRvcC0yXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpKSwgIWxvYWRpbmcgJiYgKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdmFsdWU6IG5hbWUsIGVycm9yOiBuYW1lRXJyb3IsIGxhYmVsOiBcIk5hbWVcIiwgcGxhY2Vob2xkZXI6IFwiRnVsbCBuYW1lXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyBtYXhMZW5ndGg6IDUwLCBsYWJlbDogXCJIZWFkbGluZVwiLCBlcnJvcjogaGVhZGxpbmVFcnJvciwgcGxhY2Vob2xkZXI6IFwiRGVzY3JpYmUgeW91cnNlbGYgaW4gZmV3IHdvcmRzXCIsIHZhbHVlOiBoZWFkbGluZSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGxpbmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgeyBjbGFzc05hbWU6IFwiZm9ybV9fbGFiZWxcIiB9KSwgX2pzeChUZXh0YXJlYSwgeyBsYWJlbDogXCJCaW9ncmFwaHlcIiwgbWF4TGVuZ3RoOiAyNTAsIGVycm9yOiBiaW9ncmFwaHlFcnJvciwgdmFsdWU6IGJpb2dyYXBoeSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJpb2dyYXBoeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwbGFjZWhvbGRlcjogXCJBZGQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB5b3Vyc2VsZlwiLCByb3dzOiA0IH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiIH0sIHsgY2hpbGRyZW46IFwiTGlua3NcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAtLXNtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIG1heExlbmd0aDogMTAwLCBwbGFjZWhvbGRlcjogXCJXZWJzaXRlIChodHRwOi8vd3d3LmV4YW1wbGUuY29tKVwiLCBjbGFzc05hbWU6IFwiZm9ybV9faW5wdXRcIiwgdmFsdWU6IHdlYnNpdGUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2Vic2l0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwLS1zbVwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImlucHV0X19ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB9KSwgX2pzeChcImlucHV0XCIsIHsgbWF4TGVuZ3RoOiAxMDAsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJUd2l0dGVyIFByb2ZpbGVcIiwgdmFsdWU6IHR3aXR0ZXIsIGNsYXNzTmFtZTogXCJmb3JtX19pbnB1dFwiLCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHdpdHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cC0tc21cIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJpbnB1dF9fZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcImh0dHBzOi8veW91dHViZS5jb20vXCIgfSksIF9qc3goXCJpbnB1dFwiLCB7IG1heExlbmd0aDogMTAwLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiWW91dHViZSBQcm9maWxlXCIsIHZhbHVlOiB5b3V0dWJlLCBjbGFzc05hbWU6IFwiZm9ybV9faW5wdXRcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFlvdXR1YmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSldIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAtLXNtXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5wdXRfX2dyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogXCJodHRwczovL2xpbmtlZGluLmNvbS9cIiB9KSwgX2pzeChcImlucHV0XCIsIHsgbWF4TGVuZ3RoOiAxMDAsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJMaW5rZWRJbiBQcm9maWxlXCIsIHZhbHVlOiBsaW5rZWRpbiwgY2xhc3NOYW1lOiBcImZvcm1fX2lucHV0XCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaW5rZWRpbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cC0tc21cIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJpbnB1dF9fZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcImh0dHBzOi8vZmFjZWJvb2suY29tL1wiIH0pLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgbWF4TGVuZ3RoOiAxMDAsIHBsYWNlaG9sZGVyOiBcIkZhY2Vib29rIFByb2ZpbGVcIiwgdmFsdWU6IGZhY2Vib29rLCBjbGFzc05hbWU6IFwiZm9ybV9faW5wdXRcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZhY2Vib29rKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSkgfSkpXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvdXRsaW5lZDogdHJ1ZSwgY29sb3I6IFwiYmx1ZVwiLCByb3VuZGVkOiB0cnVlLCBkaXNhYmxlZDogYnRuRGlzYWJsZWQsIGxvYWRpbmc6IGxvYWRpbmdTYXZpbmcsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU2F2ZUNsaWNrKCk7IH0gfSwgeyBjaGlsZHJlbjogXCJTYXZlXCIgfSkpIH0pKSwgX2pzeChQaG90bywge30pLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJpZ2h0LWNvbnRlbnQgbWFyZ2luLXRvcC00XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KHVzZXJuYW1lKSwgdGFyZ2V0OiBcIl9ibGFua1wiLCBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBbXCJWaWV3IHB1YmxpYyBwcm9maWxlIFwiLCBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1hcnJvdy1yaWdodFwiIH0pXSB9KSkgfSkpXSB9KSldIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEluZm87XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXBsb2FkUGhvdG8gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgVVNFUl9QTEFDRUhPTERFUl9JTUFHRSB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xudmFyIFBob3RvID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFVTRVJfUExBQ0VIT0xERVJfSU1BR0UpLCBwaG90byA9IF9hWzBdLCBzZXRQaG90byA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgdXBsb2FkUGhvdG9Nb2RhbCA9IF9iWzBdLCBzZXRVcGxvYWRQaG90b01vZGFsID0gX2JbMV07XG4gICAgLy8gSXMgdXNlZCB0byBhdm9pZCBtZW1vcnkgbGVhay5cbiAgICAvLyBUaGlzIHdhcyB1c2VkIHdoZW4gdGhlIGNvbXBvbmVudCB3YXMgY2xhc3MgYmFzZWQsIHdlIG5lZWQgdG8gZmlndXJlIG91dFxuICAgIC8vIHdoZXRoZXIgb3Igbm90IGl0J3Mgc3RpbGwgbmVlZGVkIGluIHRoZSBmdW5jdGlvbiBiYXNlZCBjb21wb25lbnRzIHdpdGggaG9va3MuXG4gICAgdmFyIF9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgdXNlciwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LmdldChcIi9wcm9maWxlXCIsIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gcmVzcG9uc2UudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG8odXNlci5waG90b191cmwgfHwgVVNFUl9QTEFDRUhPTERFUl9JTUFHRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVfMS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW4/cmVkaXJlY3RlZD1hZG1pblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSkoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgX2lzTW91bnRlZCBhcyBmYWxzZSBzbyB0aGF0IG5vIGFqYXggcmVxdWVzdCB3aWxsIGJlIG1hZGUgYWZ0ZXIgdGhlIHVubW91bnRcbiAgICAgICAgICAgIF9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50IG1hcmdpbi10b3AtM1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiLCBpZDogXCJwaG90b1wiIH0sIHsgY2hpbGRyZW46IFwiUGhvdG9cIiB9KSksIF9qc3goXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwicHJvZmlsZV9faW1nXCIsIHNyYzogcGhvdG8sIG9uRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQaG90byhVU0VSX1BMQUNFSE9MREVSX0lNQUdFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksIF9qc3goXCJiclwiLCB7fSksIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZFBob3RvTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBcIkNoYW5nZSBvciB1cGxvYWQgYSBuZXcgcGhvdG9cIiB9KSldIH0pKSwgX2pzeChVcGxvYWRQaG90bywgeyBvcGVuOiB1cGxvYWRQaG90b01vZGFsLCBoZWFkZXI6IFwiVXBsb2FkIGEgUHJvZmlsZSBQaG90b1wiLCB0ZXh0OiBcIlVwbG9hZCBhIGJlYXV0aWZ1bCBub24tcGl4ZWxhdGVkIHBob3RvIG9mIHlvdXJzZWxmOlwiLCBpbnB1dExhYmVsTmFtZTogXCJDaG9vc2UgeW91ciBwaG90b1wiLCB1cmw6IFwiL3Byb2ZpbGUvcGhvdG9cIiwgbWluV2lkdGg6IDI1MCwgbWluSGVpZ2h0OiAyNTAsIHNpemU6IDUwMDAwMDAsIGFzcGVjdFJhdGlvOiAxIC8gMSwgc3VjY2VzczogZnVuY3Rpb24gKHBob3RvKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBob3RvKHBob3RvKTtcbiAgICAgICAgICAgICAgICB9LCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZFBob3RvTW9kYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gfSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQaG90bztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vSW5mb1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzL1NldHRpbmdzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gKF9qc3hzKFJvdXRlciwgeyBjaGlsZHJlbjogW19qc3goSGVhZGVyLCB7fSksIF9qc3hzKFJvdXRlcywgeyBjaGlsZHJlbjogW19qc3goUm91dGUsIHsgcGF0aDogXCIvcHJvZmlsZVwiLCBlbGVtZW50OiBfanN4KEluZm8sIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9zZXR0aW5nc1wiLCBlbGVtZW50OiBfanN4KFNldHRpbmdzLCB7fSkgfSldIH0pXSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZXF1ZXN0LCBhbGVydCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgTG9hZGluZywgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG52YXIgRW1haWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX2FbMF0sIHNldExvYWRpbmcgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgZW1haWwgPSBfYlswXSwgc2V0RW1haWwgPSBfYlsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QuZ2V0KFwiL3NldHRpbmdzL2VtYWlsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbChyZXNwb25zZS5lbWFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVfMS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW4/cmVkaXJlY3RlZD1hZG1pblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSkoKTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIG9uRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgbWFyZ2luLWJvdHRvbS0wXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsXCIgfSwgeyBjaGlsZHJlbjogXCJDaGFuZ2UgWW91ciBFbWFpbFwiIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibGVmdC1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpXSB9KSk7XG4gICAgfVxuICAgIHJldHVybiAoX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1cIiwgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tcm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgbGFiZWw6IFwiQ2hhbmdlIFlvdXIgRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBlbWFpbCwgcGxhY2Vob2xkZXI6IFwiWW91ciBOZXcgRW1haWxcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1yaWdodCBtYXJnaW4tdG9wLTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyByb3VuZGVkOiB0cnVlLCBvdXRsaW5lZDogdHJ1ZSwgY29sb3I6IFwiYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlNvcnJ5IHRoaXMgcGFydCBpcyBzdGlsbCB1bmRlciBkZXZlbG9wbWVudC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IFwic3VibWl0XCIgfSwgeyBjaGlsZHJlbjogXCJDaGFuZ2VcIiB9KSkgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEVtYWlsO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxvYWRpbmdNb2RhbCwgdmFsaWRhdGUsIHJlcXVlc3QsIGFsZXJ0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbnZhciBQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgcGFzc3dvcmQgPSBfYVswXSwgc2V0UGFzc3dvcmQgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgcGFzc3dvcmRFcnJvciA9IF9iWzBdLCBzZXRQYXNzd29yZEVycm9yID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIGNvbmZpcm1QYXNzd29yZCA9IF9jWzBdLCBzZXRDb25maXJtUGFzc3dvcmQgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZFswXSwgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZSh0cnVlKSwgY29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZVswXSwgc2V0Q29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZSh0cnVlKSwgYnV0dG9uRGlzYWJsZWQgPSBfZlswXSwgc2V0QnV0dG9uRGlzYWJsZWQgPSBfZlsxXTtcbiAgICB2YXIgY29uZmlybVBhc3N3b3JkUmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldENvbmZpcm1QYXNzd29yZERpc2FibGVkKHRydWUpO1xuICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlwiKTtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKFwiXCIpO1xuICAgIH07XG4gICAgdmFyIG9uSW5wdXRGb2N1c091dCA9IGZ1bmN0aW9uICh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzZXRCdXR0b25EaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcImNvbmZpcm1QYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlBsZWFzZSBjb25maXJtIHlvdXIgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0UGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIHNldEJ1dHRvbkRpc2FibGVkKHRydWUpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZCh2YWx1ZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlBhc3N3b3JkIHNob3VsZCBjb250YWluIGEgY2FwaXRhbCBsZXR0ZXIsIGxldHRlcnMgYW5kIG51bWJlcnMuXCIpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2V0QnV0dG9uRGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmxlbih2YWx1ZSwgOCwgMzApICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQYXNzd29yZCBzaG91bGQgY29udGFpbiA4IHRvIDMwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgICAgIHNldEJ1dHRvbkRpc2FibGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUubGVuKHZhbHVlLCA4LCAzMCkgJiZcbiAgICAgICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcImNvbmZpcm1QYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCB1cC5cIik7XG4gICAgICAgICAgICAgICAgc2V0QnV0dG9uRGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpICYmIHBhc3N3b3JkID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldEJ1dHRvbkRpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXNwb25zZSwgZV8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJVcGRhdGluZyB5b3VyIHBhc3N3b3JkLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0LnBhdGNoKFwiL3NldHRpbmdzL3Bhc3N3b3JkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7IGF1dGg6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25EaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZCB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IG1ldGhvZDogXCJwb3N0XCIsIG9uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsIG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46IFwiQ2hhbmdlIFlvdXIgUGFzc3dvcmRcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyBwbGFjZWhvbGRlcjogXCJOZXcgUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiLCBlcnJvcjogcGFzc3dvcmRFcnJvciwgb25CbHVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwicGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZSh2YWx1ZSwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlOiBwYXNzd29yZCB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLXRvcC0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0gUGFzc3dvcmRcIiwgZXJyb3I6IGNvbmZpcm1QYXNzd29yZEVycm9yLCBkaXNhYmxlZDogY29uZmlybVBhc3N3b3JkRGlzYWJsZWQsIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcImNvbmZpcm1QYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKHZhbHVlLCBcImNvbmZpcm1QYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlOiBjb25maXJtUGFzc3dvcmQgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LXJpZ2h0IG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IGNvbG9yOiBcImJsdWVcIiwgdHlwZTogXCJzdWJtaXRcIiwgb3V0bGluZWQ6IHRydWUsIHJvdW5kZWQ6IHRydWUsIGRpc2FibGVkOiBidXR0b25EaXNhYmxlZCB9LCB7IGNoaWxkcmVuOiBcIkNoYW5nZVwiIH0pKSB9KSldIH0pKSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmQ7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBFbWFpbCBmcm9tIFwiLi9FbWFpbFwiO1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gXCIuL1Bhc3N3b3JkXCI7XG52YXIgU2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBcIlNldHRpbmdzIHwgUGFnc2VyXCI7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImFkbWluXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeSBtYXJnaW4tYm90dG9tLTJcIiB9LCB7IGNoaWxkcmVuOiBcIldlYnNpdGUgYW5kIFVzZXIgU2V0dGluZ3NcIiB9KSkgfSkpLCBfanN4KEVtYWlsLCB7fSksIF9qc3goUGFzc3dvcmQsIHt9KV0gfSkpIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=