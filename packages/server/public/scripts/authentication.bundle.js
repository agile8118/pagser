"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["authentication"],{

/***/ "./src/views/authentication/ForgotPassword.tsx":
/*!*****************************************************!*\
  !*** ./src/views/authentication/ForgotPassword.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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





var ForgotPassword = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), password = _b[0], setPassword = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), passwordSuccess = _c[0], setPasswordSuccess = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), passwordError = _d[0], setPasswordError = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmPasswordError = _e[0], setConfirmPasswordError = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), confirmPasswordDisabled = _f[0], setConfirmPasswordDisabled = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmPasswordSuccess = _g[0], setConfirmPasswordSuccess = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmPassword = _h[0], setConfirmPassword = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("show-form"), status = _j[0], setStatus = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), message = _k[0], setMessage = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), btnDisabled = _l[0], setBtnDisabled = _l[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        checkAll();
    }, [password, confirmPassword]);
    var checkAll = function () {
        if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isHardPassword(password) &&
            !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(password) &&
            password === confirmPassword) {
            setBtnDisabled(false);
        }
        else {
            setBtnDisabled(true);
        }
    };
    var confirmPasswordReset = function () {
        setConfirmPassword("");
        setConfirmPasswordDisabled(true);
        setConfirmPasswordError("");
    };
    var onInputFocusOut = function (value, fieldName) {
        if (fieldName === "password") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(value)) {
                setPasswordError("Please choose a password.");
                confirmPasswordReset();
            }
        }
        if (fieldName === "confirmPassword") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(value)) {
                setConfirmPasswordError("Please choose a password.");
            }
        }
    };
    var onInputChange = function (value, fieldName) {
        if (fieldName === "password") {
            setPassword(value);
            confirmPasswordReset();
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isHardPassword(value) && !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(value)) {
                setPasswordError("Password should contain a capital letter, letters and numbers.");
                confirmPasswordReset();
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(value, 8, 30) && !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(value)) {
                setPasswordError("Password should contain 8 to 30 characters.");
                confirmPasswordReset();
            }
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.len(value, 8, 30) &&
                !_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(value) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isHardPassword(value)) {
                setPasswordSuccess(true);
                setPasswordError("");
                setConfirmPasswordDisabled(false);
            }
        }
        if (fieldName === "confirmPassword") {
            setConfirmPassword(value);
            if (password !== value) {
                setConfirmPasswordError("Passwords do not match up.");
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_3__.validate.isEmpty(confirmPassword) && password === value) {
                setConfirmPasswordError("");
                setConfirmPasswordSuccess(true);
            }
        }
    };
    var onFormSubmit = function () {
        setLoading(true);
        axios__WEBPACK_IMPORTED_MODULE_2___default().patch("/api/reset-password", {
            userId: _pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("i"),
            token: { code: _pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.getParameterByName("t") },
            password: password,
        })
            .then(function (response) {
            setLoading(false);
            setStatus("success");
        })
            .catch(function (error) {
            setLoading(false);
            if (error.response.data.error === "invalid link") {
                setStatus("error");
                setMessage("The link you've clicked on is not valid, make sure that you open the exact link we've sent to your email.");
            }
            if (error.response.data.error === "link expired") {
                setStatus("error");
                setMessage("The link you've clicked on has expired. Please request for a password reset once again.");
            }
        });
    };
    var EL;
    if (status === "show-form") {
        var titleEl = document.querySelector("title");
        titleEl.innerHTML = "Reset Password | Pagser";
        EL = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Create a new password" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "small-copy" }, { children: "After resetting your password, you will prompted to login with your new password." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ method: "post", onSubmit: function (event) {
                        event.preventDefault();
                        onFormSubmit();
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Input, { type: "password", value: password, error: passwordError, onChange: function (value) {
                                    onInputChange(value, "password");
                                }, success: passwordSuccess, onBlur: function (value) {
                                    onInputFocusOut(value, "password");
                                }, label: "Password" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Input, { type: "password", error: confirmPasswordError, value: confirmPassword, success: confirmPasswordSuccess, onChange: function (value) {
                                    onInputChange(value, "confirmPassword");
                                }, onBlur: function (value) {
                                    onInputFocusOut(value, "confirmPassword");
                                }, disabled: confirmPasswordDisabled, label: "Confirm Password" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ type: "submit", loading: loading, rounded: true, disabled: btnDisabled, color: "blue" }, { children: "Reset" })) }))] }))] })));
    }
    if (status === "error") {
        EL = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "middle-box middle-box--absolute middle-box--error" }, { children: message })));
    }
    if (status === "success") {
        EL = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "middle-box middle-box--absolute middle-box--success" }, { children: "You have successfully reset your password. Now you can go ahead and login to your account with your new password." })));
    }
    return EL;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);


/***/ }),

/***/ "./src/views/authentication/Login.tsx":
/*!********************************************!*\
  !*** ./src/views/authentication/Login.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
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






var Login = function () {
    var _a;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), password = _c[0], setPassword = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), alertMessage = _d[0], setAlertMessage = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success"), alertType = _e[0], setAlertType = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _f[0], setLoading = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loadingForgotPassword = _g[0], setLoadingForgotPassword = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), forgotPassMdl = _h[0], setForgotPassMdl = _h[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var redirectedFrom = _pagser_common__WEBPACK_IMPORTED_MODULE_4__.util.getParameterByName("redirected", window.location.href);
        switch (redirectedFrom) {
            case "new-page":
                setAlertMessage("Please login in order to be able to create a new page.");
                setAlertType("normall");
                break;
            case "admin":
                setAlertMessage("Please login to access the admin area.");
                setAlertType("normall");
                break;
            case "access":
                setAlertMessage("Please login to proceed.");
                setAlertType("normall");
                break;
        }
    }, []);
    // Call server to send an email to reset the password
    var onForgotPasswordSubmit = function () {
        setLoadingForgotPassword(true);
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/forgot-password", {
            email: email,
        })
            .then(function (response) {
            setAlertMessage("Instructions on how to reset your password were sent to ".concat(email));
            setAlertType("success");
            setForgotPassMdl(false);
            setLoadingForgotPassword(false);
        })
            .catch(function (error) {
            setAlertMessage("No one with the email ".concat(email, " was founded."));
            setAlertType("error");
            setForgotPassMdl(false);
            setLoadingForgotPassword(false);
        });
    };
    var onFormSubmit = function () {
        setLoading(true);
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/login", {
            email: email,
            password: password,
        })
            .then(function (response) {
            localStorage.setItem("token", response.data.token);
            window.location.href = "/home";
        })
            .catch(function (error) {
            setLoading(false);
            setAlertMessage("Incorrect password or email address.");
            setAlertType("error");
        });
    };
    var renderButtons = function () {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ type: "submit", rounded: true, outlined: true, size: "big", color: "blue", loading: loading }, { children: "Sign In" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: "button", onClick: function () {
                        setForgotPassMdl(true);
                    }, className: "button-text" }, { children: "Forgot your password?" }))] }));
    };
    (_a = document.querySelector("#js--login-btn")) === null || _a === void 0 ? void 0 : _a.classList.add("display-none");
    var title = document.querySelector("title");
    title.innerHTML = "Login | Pagser";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Modal, __assign({ header: "Reset your password", open: forgotPassMdl, onClose: function () {
                    setForgotPassMdl(false);
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Put your email address here and we'll send you the instructions." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ onSubmit: function (event) {
                            event.preventDefault();
                            onForgotPasswordSubmit();
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "email", label: "Email", onChange: function (value) {
                                        setEmail(value);
                                    }, value: email, required: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ type: "submit", rounded: true, color: "blue", loading: loadingForgotPassword }, { children: "Send" })) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth__options" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "auth__options--register", onClick: function () {
                                    navigate("/register");
                                } }, { children: "Register" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "auth__options--login--active" }, { children: "login" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth__content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Log into your account" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "small-copy" }, { children: ["We are happy to see you logging in! Login to manage all of your pages. You can reset your password if you ", "don't ", " remember it."] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Alert, { message: alertMessage || undefined, onClose: function () {
                                    setAlertMessage("");
                                }, type: alertType }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ method: "post", onSubmit: function (event) {
                                    event.preventDefault();
                                    onFormSubmit();
                                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "text", onChange: function (value) {
                                                setEmail(value);
                                            }, label: "Email Address", value: email, required: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "password", onChange: function (value) {
                                                setPassword(value);
                                            }, label: "Your Password", value: password }) })), renderButtons()] }))] }))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ "./src/views/authentication/Register.tsx":
/*!***********************************************!*\
  !*** ./src/views/authentication/Register.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _VerifyEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VerifyEmail */ "./src/views/authentication/VerifyEmail.tsx");
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







var Register = function () {
    var _a;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), name = _b[0], setName = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), nameError = _c[0], setNameError = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), nameSuccess = _d[0], setNameSuccess = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), username = _e[0], setUsername = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), usernameError = _f[0], setUsernameError = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), email = _g[0], setEmail = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), emailError = _h[0], setEmailError = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), emailSuccess = _j[0], setEmailSuccess = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), password = _k[0], setPassword = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), passwordError = _l[0], setPasswordError = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), passwordSuccess = _m[0], setPasswordSuccess = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmPassword = _o[0], setConfirmPassword = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), confirmPasswordDisabled = _p[0], setConfirmPasswordDisabled = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmPasswordError = _q[0], setConfirmPasswordError = _q[1];
    var _r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmPasswordSuccess = _r[0], setConfirmPasswordSuccess = _r[1];
    var _s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), usernameIsOK = _s[0], setUsernameIsOK = _s[1];
    var _t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("show-form"), status = _t[0], setStatus = _t[1];
    var _u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), alertMessage = _u[0], setAlertMessage = _u[1];
    var _v = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success"), alertType = _v[0], setAlertType = _v[1];
    var _w = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _w[0], setLoading = _w[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    // const onUsernameChange = () => {
    //   var currentUsername = username;
    //   axios
    //     .post(`/usernameAvailability`, {
    //       username: currentUsername,
    //     })
    //     .then((respond) => {
    //       if (respond.data.message === "ok") {
    //         util.inputOK("username");
    //         setUsernameIsOK(true);
    //       } else if (respond.data.message === "taken") {
    //         setUsernameIsOK(false);
    //         util.inputError(
    //           "username",
    //           `${currentUsername} is already taken, please choose another one.`
    //         );
    //       }
    //     });
    // };
    var confirmPasswordReset = function () {
        setConfirmPassword("");
        setConfirmPasswordDisabled(true);
        setConfirmPasswordError("");
    };
    // handle input focus out events
    var onInputFocusOut = function (value, fieldName) {
        if (fieldName === "name") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setNameError("Please enter your name.");
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isAlpha(value) && !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setNameError("Please enter a valid name that contains only letters.");
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(value, 3, 30) && !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setNameError("Please enter a name that is between 3 and 30 characters.");
            }
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(value, 3, 30) &&
                !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isAlpha(value)) {
                setNameError("");
                setNameSuccess(true);
            }
        }
        if (fieldName === "username") {
            axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/username-availability", { username: value })
                .then(function (respond) {
                if (respond.data.message === "ok") {
                    setUsernameError("");
                    setUsernameIsOK(true);
                }
            })
                .catch(function (error) {
                var _a;
                setUsernameIsOK(false);
                if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 422) {
                    setUsernameError("".concat(value, " is already taken, please choose another one."));
                }
                else {
                    setUsernameError("Please choose a valid username.");
                }
            });
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setUsernameIsOK(false);
                setUsernameError("Please choose a username.");
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(value, 5, 15) && !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setUsernameIsOK(false);
                setUsernameError("Please choose a username name between 5 and 15 characters.");
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isUsername(value) && !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setUsernameIsOK(false);
                setUsernameError("Please choose a username that contains only letters, numbers and underscore.");
            }
        }
        if (fieldName === "email") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setEmailError("Please enter your email.");
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmail(value) && !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setEmailError("Please enter a valid email address.");
            }
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmail(value)) {
                setEmailError("");
            }
        }
        if (fieldName === "password") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setPasswordError("Please choose a password.");
                confirmPasswordReset();
            }
        }
        if (fieldName === "confirmPassword") {
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setConfirmPasswordError("Please confirm your password.");
            }
        }
    };
    // handle input change events
    var onInputChange = function (value, fieldName) {
        if (fieldName === "password") {
            setPassword(value);
            confirmPasswordReset();
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isHardPassword(value) && !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setPasswordError("Password should at least contain a capital and a small letter, and a number.");
                confirmPasswordReset();
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(value, 8, 30) && !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value)) {
                setPasswordError("Password should contain 8 to 30 characters.");
                confirmPasswordReset();
            }
            if (_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(value, 8, 30) &&
                !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(value) &&
                _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isHardPassword(value)) {
                setPasswordError("");
                setPasswordSuccess(true);
                setConfirmPasswordDisabled(false);
            }
        }
        if (fieldName === "confirmPassword") {
            setConfirmPassword(value);
            if (password !== value) {
                setConfirmPasswordError("Passwords do not match up.");
            }
            if (!_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(confirmPassword) && password === value) {
                setConfirmPasswordError("");
                setConfirmPasswordSuccess(true);
            }
        }
    };
    var onFormSubmit = function () {
        onInputFocusOut(name, "name");
        onInputFocusOut(username, "username");
        onInputFocusOut(email, "email");
        onInputFocusOut(password, "password");
        onInputFocusOut(confirmPassword, "confirmPassword");
        if (usernameIsOK &&
            !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(name) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isAlpha(name) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(name, 3, 30) &&
            !_pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmpty(username) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(username, 5, 15) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isUsername(username) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isEmail(email) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.isHardPassword(password) &&
            _pagser_common__WEBPACK_IMPORTED_MODULE_4__.validate.len(password, 8, 30) &&
            password === confirmPassword) {
            setLoading(true);
            var user = { name: name, email: email, username: username, password: password };
            axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/send-code", user)
                .then(function (response) {
                setLoading(false);
                setAlertMessage(null);
                setStatus("verify-email");
            })
                .catch(function (error) {
                setLoading(false);
                if (error.response.data.message === "email is in use") {
                    setAlertMessage("This email is already in use, you can login or reset your password in the login tab.");
                    setAlertType("error");
                }
                else {
                    setAlertMessage("Something went wrong, please try again.");
                    setAlertType("error");
                }
            });
        }
    };
    // Render the submit button for the registration section
    var renderButton = function () {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form__group margin-bottom-0" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "a-9" }, { children: ["By clicking Sign Up, you agree to our", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/terms-of-use", target: "_blank", className: "button-text" }, { children: "Terms" })), " ", "and", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/privacy-policy", target: "_blank", className: "button-text" }, { children: "Privacy Policy" })), "."] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "margin-top-1-5 u-flex-text-center" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "blue", size: "big", rounded: true, outlined: true, type: "submit", loading: loading }, { children: "Sign Up" })) }))] })));
    };
    (_a = document.querySelector("#js--login-btn")) === null || _a === void 0 ? void 0 : _a.classList.add("display-none");
    var EL;
    if (status === "show-form") {
        var title = document.querySelector("title");
        title.innerHTML = "Register | Pagser";
        EL = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth__options" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "auth__options--register--active", onClick: function () { } }, { children: "Register" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "auth__options--login", onClick: function () {
                                    navigate("/login");
                                } }, { children: "login" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth__content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Create your account" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "small-copy" }, { children: "By creating an account you will be able to create pages, favorite pages, comment on other pages and more." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Alert, { message: alertMessage, onClose: function () {
                                    setAlertMessage(null);
                                }, type: alertType }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ method: "post", onSubmit: function (event) {
                                    event.preventDefault();
                                    onFormSubmit();
                                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group", id: "name" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "text", onBlur: function (value) {
                                                onInputFocusOut(value, "name");
                                            }, onChange: function (value) {
                                                setName(value);
                                            }, label: "Full Name", error: nameError, success: nameSuccess, value: name }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group", id: "username" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "text", onBlur: function (value) {
                                                onInputFocusOut(value, "username");
                                            }, onChange: function (value) {
                                                setUsername(value);
                                            }, label: "Username", error: usernameError, success: usernameIsOK || false, value: username }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group", id: "email" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "email", onBlur: function (value) {
                                                onInputFocusOut(value, "email");
                                            }, onChange: function (value) {
                                                setEmail(value);
                                            }, label: "Email", error: emailError, success: emailSuccess, value: email }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group", id: "password" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "password", onBlur: function (value) {
                                                onInputFocusOut(value, "password");
                                            }, onChange: function (value) {
                                                onInputChange(value, "password");
                                            }, label: "Password", error: passwordError, success: passwordSuccess, value: password }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group", id: "" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "password", onBlur: function (value) {
                                                onInputFocusOut(value, "confirmPassword");
                                            }, onChange: function (value) {
                                                onInputChange(value, "confirmPassword");
                                            }, label: "Confirm Password", disabled: confirmPasswordDisabled, error: confirmPasswordError, success: confirmPasswordSuccess, value: confirmPassword }) })), renderButton()] }))] }))] })) }));
    }
    if (status === "verify-email") {
        EL = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VerifyEmail__WEBPACK_IMPORTED_MODULE_5__["default"], { name: name, username: username, email: email, password: password, onEmailChange: function (newEmail) {
                setEmail(newEmail);
            } }));
    }
    return EL;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);


/***/ }),

/***/ "./src/views/authentication/VerifyEmail.tsx":
/*!**************************************************!*\
  !*** ./src/views/authentication/VerifyEmail.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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




var VerifyEmail = function (props) {
    var firstDigitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var secondDigitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var thirdDigitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var fourthDigitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var fifthDigitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), firstDigit = _a[0], setFirstDigit = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), secondDigit = _b[0], setSecondDigit = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), thirdDigit = _c[0], setThirdDigit = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), fourthDigit = _d[0], setFourthDigit = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), fifthDigit = _e[0], setFifthDigit = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), changedEmail = _f[0], setChangedEmail = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = _g[0], setLoading = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loadingChangeEmail = _h[0], setLoadingChangeEmail = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), alertMessage = _j[0], setAlertMessage = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("success"), alertType = _k[0], setAlertType = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), changeEmailMdl = _l[0], setChangeEmailMdl = _l[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        checkDigits();
    }, [firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit]);
    // Reset the digits inputs
    var resetDigits = function () {
        var _a;
        setFirstDigit("");
        setSecondDigit("");
        setThirdDigit("");
        setFourthDigit("");
        setFifthDigit("");
        (_a = firstDigitRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var resendCode = function () {
        setLoading(true);
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/send-code", {
            name: props.name,
            username: props.username,
            password: props.password,
            email: props.email,
        })
            .then(function (response) {
            setLoading(false);
            setAlertMessage("New code has been sent to your email.");
            setAlertType("success");
            resetDigits();
        })
            .catch(function (error) {
            setLoading(false);
            setAlertMessage("Something went wrong, please try again.");
            setAlertType("error");
            resetDigits();
        });
    };
    var onVerifyCodeSubmit = function () {
        setLoading(true);
        var code = "".concat(firstDigit).concat(secondDigit).concat(thirdDigit).concat(fourthDigit).concat(fifthDigit);
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/register", {
            name: props.name,
            username: props.username,
            password: props.password,
            email: props.email,
            userEmailVerificationCode: Number(code),
        })
            .then(function (response) {
            localStorage.setItem("token", response.data.token);
            window.location.href = "/home";
        })
            .catch(function (error) {
            var _a, _b, _c, _d;
            setLoading(false);
            var errorMsg = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message;
            if (Array.isArray(errorMsg) ? (_c = errorMsg[0]) === null || _c === void 0 ? void 0 : _c.includes("code") : (_d = errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.includes) === null || _d === void 0 ? void 0 : _d.call(errorMsg, "code")) {
                setAlertMessage("The code is invalid, make sure that you put the exact code we've sent to your email. You may want to resend the code.");
            }
            else {
                setAlertMessage("Something went wrong, please try again.");
            }
            setAlertType("error");
            resetDigits();
        });
    };
    var onChangeEmailSubmit = function () {
        setLoadingChangeEmail(true);
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/send-code", {
            name: props.name,
            username: props.username,
            password: props.password,
            email: changedEmail,
        })
            .then(function (response) {
            props.onEmailChange(changedEmail);
            setAlertMessage("New code has been sent to your email.");
            setAlertType("success");
            setChangeEmailMdl(false);
            setChangedEmail("");
            resetDigits();
            setLoadingChangeEmail(false);
        })
            .catch(function (error) {
            if (error.response.data.message === "email is in use") {
                setAlertMessage("".concat(changedEmail, " is already in use, please login with this email or choose another one."));
                setAlertType("error");
                setChangeEmailMdl(false);
                resetDigits();
                setLoadingChangeEmail(false);
                setChangedEmail("");
            }
            else {
                setAlertMessage("Something went wrong, please try again.");
                setAlertType("error");
                resetDigits();
                setLoadingChangeEmail(false);
                setChangedEmail("");
            }
        });
    };
    // Move to the specified diget
    var moveDigit = function (number) { };
    // Check if all digits are entered
    var checkDigits = function () {
        if (firstDigit.length === 1 &&
            secondDigit.length === 1 &&
            thirdDigit.length === 1 &&
            fourthDigit.length === 1 &&
            fifthDigit.length === 1) {
            onVerifyCodeSubmit();
        }
    };
    // When a digit is changed
    var onDigitChanged = function (valueEntered, number) {
        var _a, _b, _c, _d;
        if (/^\d+$/.test(valueEntered)) {
            switch (number) {
                case "first":
                    setFirstDigit(valueEntered);
                    (_a = secondDigitRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                    break;
                case "second":
                    setSecondDigit(valueEntered);
                    (_b = thirdDigitRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                    break;
                case "third":
                    setThirdDigit(valueEntered);
                    (_c = fourthDigitRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                    break;
                case "fourth":
                    setFourthDigit(valueEntered);
                    (_d = fifthDigitRef.current) === null || _d === void 0 ? void 0 : _d.focus();
                    break;
                case "fifth":
                    setFifthDigit(valueEntered);
                    break;
            }
        }
    };
    // When user presses a key in a digit
    var onDigitKeyDown = function (event, number) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        // Backspace key pressed
        if (event.keyCode === 8) {
            switch (number) {
                case "first":
                    setFirstDigit("");
                    break;
                case "second":
                    setSecondDigit("");
                    (_a = firstDigitRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                    break;
                case "third":
                    setThirdDigit("");
                    (_b = secondDigitRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                    break;
                case "fourth":
                    setFourthDigit("");
                    (_c = thirdDigitRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                    break;
                case "fifth":
                    setFifthDigit("");
                    (_d = fourthDigitRef.current) === null || _d === void 0 ? void 0 : _d.focus();
                    break;
            }
        }
        // Left arrow key pressed
        if (event.keyCode === 37) {
            switch (number) {
                case "second":
                    (_e = firstDigitRef.current) === null || _e === void 0 ? void 0 : _e.focus();
                    break;
                case "third":
                    (_f = secondDigitRef.current) === null || _f === void 0 ? void 0 : _f.focus();
                    break;
                case "fourth":
                    (_g = thirdDigitRef.current) === null || _g === void 0 ? void 0 : _g.focus();
                    break;
                case "fifth":
                    (_h = fourthDigitRef.current) === null || _h === void 0 ? void 0 : _h.focus();
                    break;
            }
        }
        // Right arrow key pressed
        if (event.keyCode === 39) {
            switch (number) {
                case "first":
                    (_j = secondDigitRef.current) === null || _j === void 0 ? void 0 : _j.focus();
                    break;
                case "second":
                    (_k = thirdDigitRef.current) === null || _k === void 0 ? void 0 : _k.focus();
                    break;
                case "third":
                    (_l = fourthDigitRef.current) === null || _l === void 0 ? void 0 : _l.focus();
                    break;
                case "fourth":
                    (_m = fifthDigitRef.current) === null || _m === void 0 ? void 0 : _m.focus();
                    break;
            }
        }
    };
    // Render buttons for verify email part
    var renderButtons = function () {
        if (loading === false) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "margin-top-3" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "javascript:void(0)", onClick: function () {
                            setChangeEmailMdl(true);
                        }, className: "btn-text btn-text-underlined" }, { children: "Change your email" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "javascript:void(0)", onClick: function () {
                            resendCode();
                        }, className: "btn-text btn-text-underlined" }, { children: "Resend code" }))] })));
        }
        else {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "margin-top-3" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Loading, {}) })) })));
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Modal, __assign({ header: "Change your email", open: changeEmailMdl, onClose: function () {
                    setChangeEmailMdl(false);
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Put your email address here and we will send a new code to that." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ onSubmit: function (event) {
                            event.preventDefault();
                            onChangeEmailSubmit();
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { required: true, type: "email", value: changedEmail, onChange: function (value) {
                                        setChangedEmail(value);
                                    }, label: "Email" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ type: "submit", rounded: true, color: "blue", loading: loadingChangeEmail }, { children: "Change" })) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "auth" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({ className: "heading-tertiary" }, { children: "Verify your email address" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "small-copy" }, { children: [props.email, " - The last step is to enter the 5 digits code we have just sent to your email to verify your email address."] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Alert, { additionalClasses: "u-margin-bottom-2", message: alertMessage, onClose: function () {
                            setAlertMessage(null);
                        }, type: alertType }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ onSubmit: function (event) {
                            event.preventDefault();
                            onVerifyCodeSubmit();
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "input-digits" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tel", autoFocus: true, value: firstDigit, ref: firstDigitRef, onKeyDown: function (event) {
                                                onDigitKeyDown(event, "first");
                                            }, onChange: function (event) {
                                                onDigitChanged(event.target.value, "first");
                                            }, disabled: loading, maxLength: 1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tel", value: secondDigit, ref: secondDigitRef, onKeyDown: function (event) {
                                                onDigitKeyDown(event, "second");
                                            }, onChange: function (event) {
                                                onDigitChanged(event.target.value, "second");
                                            }, disabled: loading, maxLength: 1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tel", value: thirdDigit, ref: thirdDigitRef, onKeyDown: function (event) {
                                                onDigitKeyDown(event, "third");
                                            }, onChange: function (event) {
                                                onDigitChanged(event.target.value, "third");
                                            }, disabled: loading, maxLength: 1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tel", value: fourthDigit, ref: fourthDigitRef, onKeyDown: function (event) {
                                                onDigitKeyDown(event, "fourth");
                                            }, onChange: function (event) {
                                                onDigitChanged(event.target.value, "fourth");
                                            }, disabled: loading, maxLength: 1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tel", value: fifthDigit, ref: fifthDigitRef, onKeyDown: function (event) {
                                                onDigitKeyDown(event, "fifth");
                                            }, onChange: function (event) {
                                                onDigitChanged(event.target.value, "fifth");
                                            }, disabled: loading, maxLength: 1 })] })) })), renderButtons()] }))] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyEmail);


/***/ }),

/***/ "./src/views/authentication/index.tsx":
/*!********************************************!*\
  !*** ./src/views/authentication/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./src/views/authentication/Login.tsx");
/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword */ "./src/views/authentication/ForgotPassword.tsx");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register */ "./src/views/authentication/Register.tsx");





function Authentication(props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: "/login", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: "/forgot-password", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: "/register", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {}) })] }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authentication);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxRQUFRLGlEQUNTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQ1M7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQ1M7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQUssbUJBQW1CLDJCQUEyQixJQUFJLFdBQVcsc0RBQUksaUJBQWlCO0FBQzNHO0FBQ0EseUJBQXlCLDZDQUE2QyxJQUFJLCtCQUErQixJQUFJLHNEQUFJLFNBQVMsR0FBRyxzREFBSSxpQkFBaUI7QUFDbEo7QUFDQSx5QkFBeUIsNkNBQTZDLElBQUkseUJBQXlCLEtBQUs7QUFDeEc7QUFDQTtBQUNBLG9CQUFvQixzREFBSSxtQkFBbUIsMkJBQTJCLElBQUksVUFBVSxzREFBSSxtQkFBbUIsNkJBQTZCLElBQUksVUFBVSxzREFBSSxDQUFDLHFEQUFPLElBQUksR0FBRyxJQUFJO0FBQzdLO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLFVBQVUsV0FBVyx1REFBSyxDQUFDLG1EQUFLLGFBQWE7QUFDOUQ7QUFDQSxtQkFBbUIsSUFBSSxXQUFXLHNEQUFJLFFBQVEsOEVBQThFLEdBQUcsdURBQUssb0JBQW9CO0FBQ3hKO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQix5QkFBeUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUssSUFBSTtBQUN0SDtBQUNBLHFDQUFxQyxrQkFBa0IsR0FBRyxJQUFJLHNEQUFJLG1CQUFtQixnQ0FBZ0MsSUFBSSxVQUFVLHNEQUFJLENBQUMsb0RBQU0sYUFBYSwyRUFBMkUsSUFBSSxvQkFBb0IsSUFBSSxLQUFLLEtBQUssSUFBSSx1REFBSyxtQkFBbUIsbUJBQW1CLElBQUksV0FBVyxzREFBSSxrQkFBa0IsK0JBQStCLElBQUksdUNBQXVDLElBQUksdURBQUssaUJBQWlCLHlCQUF5QixJQUFJLHlJQUF5SSxJQUFJLHNEQUFJLENBQUMsbURBQUssSUFBSTtBQUM1bkI7QUFDQSx5QkFBeUIsbUJBQW1CLEdBQUcsdURBQUssb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQiwwQkFBMEIsSUFBSSxVQUFVLHVEQUFLLG1CQUFtQiwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLFlBQVk7QUFDM0w7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw2Q0FBNkMsbUNBQW1DLEdBQUcsc0RBQUksWUFBWTtBQUNuRztBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QyxtQ0FBbUMsR0FBRyxzREFBSSxZQUFZO0FBQ25HO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsNkNBQTZDLG1DQUFtQyxHQUFHLHNEQUFJLFlBQVk7QUFDbkc7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw2Q0FBNkMsbUNBQW1DLEdBQUcsc0RBQUksWUFBWTtBQUNuRztBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QyxtQ0FBbUMsSUFBSSxJQUFJLHNCQUFzQixLQUFLLEtBQUs7QUFDeEg7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hSb0M7QUFDWTtBQUMvQztBQUNrQjtBQUNaO0FBQ2xDO0FBQ0EsWUFBWSxzREFBSSxDQUFDLDJEQUFNLElBQUksVUFBVSx1REFBSyxDQUFDLG9EQUFNLElBQUksV0FBVyxzREFBSSxDQUFDLG1EQUFLLElBQUkseUJBQXlCLHNEQUFJLENBQUMsOENBQUssSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLG1DQUFtQyxzREFBSSxDQUFDLHVEQUFjLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsbURBQUssSUFBSSw0QkFBNEIsc0RBQUksQ0FBQyxpREFBUSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQzlRO0FBQ0EsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvYXV0aGVudGljYXRpb24vRm9yZ290UGFzc3dvcmQudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2F1dGhlbnRpY2F0aW9uL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9hdXRoZW50aWNhdGlvbi9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvYXV0aGVudGljYXRpb24vVmVyaWZ5RW1haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2F1dGhlbnRpY2F0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHZhbGlkYXRlLCB1dGlsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbnZhciBGb3Jnb3RQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZCA9IF9iWzBdLCBzZXRQYXNzd29yZCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgcGFzc3dvcmRTdWNjZXNzID0gX2NbMF0sIHNldFBhc3N3b3JkU3VjY2VzcyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZEVycm9yID0gX2RbMF0sIHNldFBhc3N3b3JkRXJyb3IgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZVswXSwgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZSh0cnVlKSwgY29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZlswXSwgc2V0Q29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1QYXNzd29yZFN1Y2Nlc3MgPSBfZ1swXSwgc2V0Q29uZmlybVBhc3N3b3JkU3VjY2VzcyA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtUGFzc3dvcmQgPSBfaFswXSwgc2V0Q29uZmlybVBhc3N3b3JkID0gX2hbMV07XG4gICAgdmFyIF9qID0gdXNlU3RhdGUoXCJzaG93LWZvcm1cIiksIHN0YXR1cyA9IF9qWzBdLCBzZXRTdGF0dXMgPSBfalsxXTtcbiAgICB2YXIgX2sgPSB1c2VTdGF0ZShcIlwiKSwgbWVzc2FnZSA9IF9rWzBdLCBzZXRNZXNzYWdlID0gX2tbMV07XG4gICAgdmFyIF9sID0gdXNlU3RhdGUoZmFsc2UpLCBidG5EaXNhYmxlZCA9IF9sWzBdLCBzZXRCdG5EaXNhYmxlZCA9IF9sWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrQWxsKCk7XG4gICAgfSwgW3Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmRdKTtcbiAgICB2YXIgY2hlY2tBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZChwYXNzd29yZCkgJiZcbiAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KHBhc3N3b3JkKSAmJlxuICAgICAgICAgICAgcGFzc3dvcmQgPT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgc2V0QnRuRGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0QnRuRGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjb25maXJtUGFzc3dvcmRSZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKFwiXCIpO1xuICAgICAgICBzZXRDb25maXJtUGFzc3dvcmREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJcIik7XG4gICAgfTtcbiAgICB2YXIgb25JbnB1dEZvY3VzT3V0ID0gZnVuY3Rpb24gKHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGxlYXNlIGNob29zZSBhIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRSZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiY29uZmlybVBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGxlYXNlIGNob29zZSBhIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkTmFtZSkge1xuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHZhbHVlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4gYSBjYXBpdGFsIGxldHRlciwgbGV0dGVycyBhbmQgbnVtYmVycy5cIik7XG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUubGVuKHZhbHVlLCA4LCAzMCkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlBhc3N3b3JkIHNob3VsZCBjb250YWluIDggdG8gMzAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5sZW4odmFsdWUsIDgsIDMwKSAmJlxuICAgICAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSAmJlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcImNvbmZpcm1QYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCB1cC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzRW1wdHkoY29uZmlybVBhc3N3b3JkKSAmJiBwYXNzd29yZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBhdGNoKFwiL2FwaS9yZXNldC1wYXNzd29yZFwiLCB7XG4gICAgICAgICAgICB1c2VySWQ6IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwiaVwiKSxcbiAgICAgICAgICAgIHRva2VuOiB7IGNvZGU6IHV0aWwuZ2V0UGFyYW1ldGVyQnlOYW1lKFwidFwiKSB9LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcInN1Y2Nlc3NcIik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yID09PSBcImludmFsaWQgbGlua1wiKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIlRoZSBsaW5rIHlvdSd2ZSBjbGlja2VkIG9uIGlzIG5vdCB2YWxpZCwgbWFrZSBzdXJlIHRoYXQgeW91IG9wZW4gdGhlIGV4YWN0IGxpbmsgd2UndmUgc2VudCB0byB5b3VyIGVtYWlsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yID09PSBcImxpbmsgZXhwaXJlZFwiKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIlRoZSBsaW5rIHlvdSd2ZSBjbGlja2VkIG9uIGhhcyBleHBpcmVkLiBQbGVhc2UgcmVxdWVzdCBmb3IgYSBwYXNzd29yZCByZXNldCBvbmNlIGFnYWluLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgRUw7XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJzaG93LWZvcm1cIikge1xuICAgICAgICB2YXIgdGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGVFbC5pbm5lckhUTUwgPSBcIlJlc2V0IFBhc3N3b3JkIHwgUGFnc2VyXCI7XG4gICAgICAgIEVMID0gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkNyZWF0ZSBhIG5ldyBwYXNzd29yZFwiIH0pKSwgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic21hbGwtY29weVwiIH0sIHsgY2hpbGRyZW46IFwiQWZ0ZXIgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQsIHlvdSB3aWxsIHByb21wdGVkIHRvIGxvZ2luIHdpdGggeW91ciBuZXcgcGFzc3dvcmQuXCIgfSkpLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBtZXRob2Q6IFwicG9zdFwiLCBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JtU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCB2YWx1ZTogcGFzc3dvcmQsIGVycm9yOiBwYXNzd29yZEVycm9yLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKHZhbHVlLCBcInBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzdWNjZXNzOiBwYXNzd29yZFN1Y2Nlc3MsIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwicGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIlBhc3N3b3JkXCIgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgZXJyb3I6IGNvbmZpcm1QYXNzd29yZEVycm9yLCB2YWx1ZTogY29uZmlybVBhc3N3b3JkLCBzdWNjZXNzOiBjb25maXJtUGFzc3dvcmRTdWNjZXNzLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKHZhbHVlLCBcImNvbmZpcm1QYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRGb2N1c091dCh2YWx1ZSwgXCJjb25maXJtUGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRpc2FibGVkOiBjb25maXJtUGFzc3dvcmREaXNhYmxlZCwgbGFiZWw6IFwiQ29uZmlybSBQYXNzd29yZFwiIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCB1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCBsb2FkaW5nOiBsb2FkaW5nLCByb3VuZGVkOiB0cnVlLCBkaXNhYmxlZDogYnRuRGlzYWJsZWQsIGNvbG9yOiBcImJsdWVcIiB9LCB7IGNoaWxkcmVuOiBcIlJlc2V0XCIgfSkpIH0pKV0gfSkpXSB9KSkpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgRUwgPSAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtaWRkbGUtYm94IG1pZGRsZS1ib3gtLWFic29sdXRlIG1pZGRsZS1ib3gtLWVycm9yXCIgfSwgeyBjaGlsZHJlbjogbWVzc2FnZSB9KSkpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICBFTCA9IChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1pZGRsZS1ib3ggbWlkZGxlLWJveC0tYWJzb2x1dGUgbWlkZGxlLWJveC0tc3VjY2Vzc1wiIH0sIHsgY2hpbGRyZW46IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHJlc2V0IHlvdXIgcGFzc3dvcmQuIE5vdyB5b3UgY2FuIGdvIGFoZWFkIGFuZCBsb2dpbiB0byB5b3VyIGFjY291bnQgd2l0aCB5b3VyIG5ldyBwYXNzd29yZC5cIiB9KSkpO1xuICAgIH1cbiAgICByZXR1cm4gRUw7XG59O1xuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQ7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBBbGVydCwgTW9kYWwsIEJ1dHRvbiwgSW5wdXQsIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHV0aWwgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbnZhciBMb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoXCJcIiksIGVtYWlsID0gX2JbMF0sIHNldEVtYWlsID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIHBhc3N3b3JkID0gX2NbMF0sIHNldFBhc3N3b3JkID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoXCJcIiksIGFsZXJ0TWVzc2FnZSA9IF9kWzBdLCBzZXRBbGVydE1lc3NhZ2UgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZShcInN1Y2Nlc3NcIiksIGFsZXJ0VHlwZSA9IF9lWzBdLCBzZXRBbGVydFR5cGUgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfZlswXSwgc2V0TG9hZGluZyA9IF9mWzFdO1xuICAgIHZhciBfZyA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZ0ZvcmdvdFBhc3N3b3JkID0gX2dbMF0sIHNldExvYWRpbmdGb3Jnb3RQYXNzd29yZCA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKGZhbHNlKSwgZm9yZ290UGFzc01kbCA9IF9oWzBdLCBzZXRGb3Jnb3RQYXNzTWRsID0gX2hbMV07XG4gICAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVkaXJlY3RlZEZyb20gPSB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcInJlZGlyZWN0ZWRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBzd2l0Y2ggKHJlZGlyZWN0ZWRGcm9tKSB7XG4gICAgICAgICAgICBjYXNlIFwibmV3LXBhZ2VcIjpcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJQbGVhc2UgbG9naW4gaW4gb3JkZXIgdG8gYmUgYWJsZSB0byBjcmVhdGUgYSBuZXcgcGFnZS5cIik7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwibm9ybWFsbFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhZG1pblwiOlxuICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlBsZWFzZSBsb2dpbiB0byBhY2Nlc3MgdGhlIGFkbWluIGFyZWEuXCIpO1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcIm5vcm1hbGxcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWNjZXNzXCI6XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiUGxlYXNlIGxvZ2luIHRvIHByb2NlZWQuXCIpO1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcIm5vcm1hbGxcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgLy8gQ2FsbCBzZXJ2ZXIgdG8gc2VuZCBhbiBlbWFpbCB0byByZXNldCB0aGUgcGFzc3dvcmRcbiAgICB2YXIgb25Gb3Jnb3RQYXNzd29yZFN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TG9hZGluZ0ZvcmdvdFBhc3N3b3JkKHRydWUpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvYXBpL2ZvcmdvdC1wYXNzd29yZFwiLCB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIkluc3RydWN0aW9ucyBvbiBob3cgdG8gcmVzZXQgeW91ciBwYXNzd29yZCB3ZXJlIHNlbnQgdG8gXCIuY29uY2F0KGVtYWlsKSk7XG4gICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgc2V0Rm9yZ290UGFzc01kbChmYWxzZSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRm9yZ290UGFzc3dvcmQoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiTm8gb25lIHdpdGggdGhlIGVtYWlsIFwiLmNvbmNhdChlbWFpbCwgXCIgd2FzIGZvdW5kZWQuXCIpKTtcbiAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgc2V0Rm9yZ290UGFzc01kbChmYWxzZSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRm9yZ290UGFzc3dvcmQoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBvbkZvcm1TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcIi9hcGkvbG9naW5cIiwge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9ob21lXCI7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIkluY29ycmVjdCBwYXNzd29yZCBvciBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciByZW5kZXJCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwIHUtZmxleC10ZXh0LWNlbnRlclwiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIHJvdW5kZWQ6IHRydWUsIG91dGxpbmVkOiB0cnVlLCBzaXplOiBcImJpZ1wiLCBjb2xvcjogXCJibHVlXCIsIGxvYWRpbmc6IGxvYWRpbmcgfSwgeyBjaGlsZHJlbjogXCJTaWduIEluXCIgfSkpIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcmdvdFBhc3NNZGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogXCJidXR0b24tdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIgfSkpXSB9KSk7XG4gICAgfTtcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLS1sb2dpbi1idG5cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkxvZ2luIHwgUGFnc2VyXCI7XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKE1vZGFsLCBfX2Fzc2lnbih7IGhlYWRlcjogXCJSZXNldCB5b3VyIHBhc3N3b3JkXCIsIG9wZW46IGZvcmdvdFBhc3NNZGwsIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm9yZ290UGFzc01kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJQdXQgeW91ciBlbWFpbCBhZGRyZXNzIGhlcmUgYW5kIHdlJ2xsIHNlbmQgeW91IHRoZSBpbnN0cnVjdGlvbnMuXCIgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IG9uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9yZ290UGFzc3dvcmRTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJlbWFpbFwiLCBsYWJlbDogXCJFbWFpbFwiLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWU6IGVtYWlsLCByZXF1aXJlZDogdHJ1ZSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCByb3VuZGVkOiB0cnVlLCBjb2xvcjogXCJibHVlXCIsIGxvYWRpbmc6IGxvYWRpbmdGb3Jnb3RQYXNzd29yZCB9LCB7IGNoaWxkcmVuOiBcIlNlbmRcIiB9KSkgfSkpXSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoX19vcHRpb25zXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fb3B0aW9ucy0tcmVnaXN0ZXJcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvcmVnaXN0ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJSZWdpc3RlclwiIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoX19vcHRpb25zLS1sb2dpbi0tYWN0aXZlXCIgfSwgeyBjaGlsZHJlbjogXCJsb2dpblwiIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoX19jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJMb2cgaW50byB5b3VyIGFjY291bnRcIiB9KSksIF9qc3hzKFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzbWFsbC1jb3B5XCIgfSwgeyBjaGlsZHJlbjogW1wiV2UgYXJlIGhhcHB5IHRvIHNlZSB5b3UgbG9nZ2luZyBpbiEgTG9naW4gdG8gbWFuYWdlIGFsbCBvZiB5b3VyIHBhZ2VzLiBZb3UgY2FuIHJlc2V0IHlvdXIgcGFzc3dvcmQgaWYgeW91IFwiLCBcImRvbid0IFwiLCBcIiByZW1lbWJlciBpdC5cIl0gfSkpLCBfanN4KEFsZXJ0LCB7IG1lc3NhZ2U6IGFsZXJ0TWVzc2FnZSB8fCB1bmRlZmluZWQsIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHlwZTogYWxlcnRUeXBlIH0pLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBtZXRob2Q6IFwicG9zdFwiLCBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JtU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbGFiZWw6IFwiRW1haWwgQWRkcmVzc1wiLCB2YWx1ZTogZW1haWwsIHJlcXVpcmVkOiB0cnVlIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbGFiZWw6IFwiWW91ciBQYXNzd29yZFwiLCB2YWx1ZTogcGFzc3dvcmQgfSkgfSkpLCByZW5kZXJCdXR0b25zKCldIH0pKV0gfSkpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIElucHV0IH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgVmVyaWZ5RW1haWwgZnJvbSBcIi4vVmVyaWZ5RW1haWxcIjtcbnZhciBSZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoXCJcIiksIG5hbWUgPSBfYlswXSwgc2V0TmFtZSA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKFwiXCIpLCBuYW1lRXJyb3IgPSBfY1swXSwgc2V0TmFtZUVycm9yID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBuYW1lU3VjY2VzcyA9IF9kWzBdLCBzZXROYW1lU3VjY2VzcyA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCB1c2VybmFtZSA9IF9lWzBdLCBzZXRVc2VybmFtZSA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCB1c2VybmFtZUVycm9yID0gX2ZbMF0sIHNldFVzZXJuYW1lRXJyb3IgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShcIlwiKSwgZW1haWwgPSBfZ1swXSwgc2V0RW1haWwgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShcIlwiKSwgZW1haWxFcnJvciA9IF9oWzBdLCBzZXRFbWFpbEVycm9yID0gX2hbMV07XG4gICAgdmFyIF9qID0gdXNlU3RhdGUoZmFsc2UpLCBlbWFpbFN1Y2Nlc3MgPSBfalswXSwgc2V0RW1haWxTdWNjZXNzID0gX2pbMV07XG4gICAgdmFyIF9rID0gdXNlU3RhdGUoXCJcIiksIHBhc3N3b3JkID0gX2tbMF0sIHNldFBhc3N3b3JkID0gX2tbMV07XG4gICAgdmFyIF9sID0gdXNlU3RhdGUoXCJcIiksIHBhc3N3b3JkRXJyb3IgPSBfbFswXSwgc2V0UGFzc3dvcmRFcnJvciA9IF9sWzFdO1xuICAgIHZhciBfbSA9IHVzZVN0YXRlKGZhbHNlKSwgcGFzc3dvcmRTdWNjZXNzID0gX21bMF0sIHNldFBhc3N3b3JkU3VjY2VzcyA9IF9tWzFdO1xuICAgIHZhciBfbyA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtUGFzc3dvcmQgPSBfb1swXSwgc2V0Q29uZmlybVBhc3N3b3JkID0gX29bMV07XG4gICAgdmFyIF9wID0gdXNlU3RhdGUodHJ1ZSksIGNvbmZpcm1QYXNzd29yZERpc2FibGVkID0gX3BbMF0sIHNldENvbmZpcm1QYXNzd29yZERpc2FibGVkID0gX3BbMV07XG4gICAgdmFyIF9xID0gdXNlU3RhdGUoXCJcIiksIGNvbmZpcm1QYXNzd29yZEVycm9yID0gX3FbMF0sIHNldENvbmZpcm1QYXNzd29yZEVycm9yID0gX3FbMV07XG4gICAgdmFyIF9yID0gdXNlU3RhdGUoZmFsc2UpLCBjb25maXJtUGFzc3dvcmRTdWNjZXNzID0gX3JbMF0sIHNldENvbmZpcm1QYXNzd29yZFN1Y2Nlc3MgPSBfclsxXTtcbiAgICB2YXIgX3MgPSB1c2VTdGF0ZShudWxsKSwgdXNlcm5hbWVJc09LID0gX3NbMF0sIHNldFVzZXJuYW1lSXNPSyA9IF9zWzFdO1xuICAgIHZhciBfdCA9IHVzZVN0YXRlKFwic2hvdy1mb3JtXCIpLCBzdGF0dXMgPSBfdFswXSwgc2V0U3RhdHVzID0gX3RbMV07XG4gICAgdmFyIF91ID0gdXNlU3RhdGUobnVsbCksIGFsZXJ0TWVzc2FnZSA9IF91WzBdLCBzZXRBbGVydE1lc3NhZ2UgPSBfdVsxXTtcbiAgICB2YXIgX3YgPSB1c2VTdGF0ZShcInN1Y2Nlc3NcIiksIGFsZXJ0VHlwZSA9IF92WzBdLCBzZXRBbGVydFR5cGUgPSBfdlsxXTtcbiAgICB2YXIgX3cgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfd1swXSwgc2V0TG9hZGluZyA9IF93WzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgLy8gY29uc3Qgb25Vc2VybmFtZUNoYW5nZSA9ICgpID0+IHtcbiAgICAvLyAgIHZhciBjdXJyZW50VXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAvLyAgIGF4aW9zXG4gICAgLy8gICAgIC5wb3N0KGAvdXNlcm5hbWVBdmFpbGFiaWxpdHlgLCB7XG4gICAgLy8gICAgICAgdXNlcm5hbWU6IGN1cnJlbnRVc2VybmFtZSxcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbmQpID0+IHtcbiAgICAvLyAgICAgICBpZiAocmVzcG9uZC5kYXRhLm1lc3NhZ2UgPT09IFwib2tcIikge1xuICAgIC8vICAgICAgICAgdXRpbC5pbnB1dE9LKFwidXNlcm5hbWVcIik7XG4gICAgLy8gICAgICAgICBzZXRVc2VybmFtZUlzT0sodHJ1ZSk7XG4gICAgLy8gICAgICAgfSBlbHNlIGlmIChyZXNwb25kLmRhdGEubWVzc2FnZSA9PT0gXCJ0YWtlblwiKSB7XG4gICAgLy8gICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgIC8vICAgICAgICAgdXRpbC5pbnB1dEVycm9yKFxuICAgIC8vICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgLy8gICAgICAgICAgIGAke2N1cnJlbnRVc2VybmFtZX0gaXMgYWxyZWFkeSB0YWtlbiwgcGxlYXNlIGNob29zZSBhbm90aGVyIG9uZS5gXG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfTtcbiAgICB2YXIgY29uZmlybVBhc3N3b3JkUmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldENvbmZpcm1QYXNzd29yZChcIlwiKTtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiXCIpO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGlucHV0IGZvY3VzIG91dCBldmVudHNcbiAgICB2YXIgb25JbnB1dEZvY3VzT3V0ID0gZnVuY3Rpb24gKHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldE5hbWVFcnJvcihcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5pc0FscGhhKHZhbHVlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXROYW1lRXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lIHRoYXQgY29udGFpbnMgb25seSBsZXR0ZXJzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUubGVuKHZhbHVlLCAzLCAzMCkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0TmFtZUVycm9yKFwiUGxlYXNlIGVudGVyIGEgbmFtZSB0aGF0IGlzIGJldHdlZW4gMyBhbmQgMzAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUubGVuKHZhbHVlLCAzLCAzMCkgJiZcbiAgICAgICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5pc0FscGhhKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldE5hbWVFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXROYW1lU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcInVzZXJuYW1lXCIpIHtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBvc3QoXCIvYXBpL3VzZXJuYW1lLWF2YWlsYWJpbGl0eVwiLCB7IHVzZXJuYW1lOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbmQuZGF0YS5tZXNzYWdlID09PSBcIm9rXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVJc09LKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmICgoKF9hID0gZXJyb3IucmVzcG9uc2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGF0dXMpID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVFcnJvcihcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgaXMgYWxyZWFkeSB0YWtlbiwgcGxlYXNlIGNob29zZSBhbm90aGVyIG9uZS5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVFcnJvcihcIlBsZWFzZSBjaG9vc2UgYSB2YWxpZCB1c2VybmFtZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgdXNlcm5hbWUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5sZW4odmFsdWUsIDUsIDE1KSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgdXNlcm5hbWUgbmFtZSBiZXR3ZWVuIDUgYW5kIDE1IGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5pc1VzZXJuYW1lKHZhbHVlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgdXNlcm5hbWUgdGhhdCBjb250YWlucyBvbmx5IGxldHRlcnMsIG51bWJlcnMgYW5kIHVuZGVyc2NvcmUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWxFcnJvcihcIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNFbWFpbCh2YWx1ZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWxFcnJvcihcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1haWwodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWxFcnJvcihcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJjb25maXJtUGFzc3dvcmRcIikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gaGFuZGxlIGlucHV0IGNoYW5nZSBldmVudHNcbiAgICB2YXIgb25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0UGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNIYXJkUGFzc3dvcmQodmFsdWUpICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQYXNzd29yZCBzaG91bGQgYXQgbGVhc3QgY29udGFpbiBhIGNhcGl0YWwgYW5kIGEgc21hbGwgbGV0dGVyLCBhbmQgYSBudW1iZXIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmxlbih2YWx1ZSwgOCwgMzApICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQYXNzd29yZCBzaG91bGQgY29udGFpbiA4IHRvIDMwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUubGVuKHZhbHVlLCA4LCAzMCkgJiZcbiAgICAgICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJjb25maXJtUGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChwYXNzd29yZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2ggdXAuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5pc0VtcHR5KGNvbmZpcm1QYXNzd29yZCkgJiYgcGFzc3dvcmQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJcIik7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25JbnB1dEZvY3VzT3V0KG5hbWUsIFwibmFtZVwiKTtcbiAgICAgICAgb25JbnB1dEZvY3VzT3V0KHVzZXJuYW1lLCBcInVzZXJuYW1lXCIpO1xuICAgICAgICBvbklucHV0Rm9jdXNPdXQoZW1haWwsIFwiZW1haWxcIik7XG4gICAgICAgIG9uSW5wdXRGb2N1c091dChwYXNzd29yZCwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgb25JbnB1dEZvY3VzT3V0KGNvbmZpcm1QYXNzd29yZCwgXCJjb25maXJtUGFzc3dvcmRcIik7XG4gICAgICAgIGlmICh1c2VybmFtZUlzT0sgJiZcbiAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KG5hbWUpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5pc0FscGhhKG5hbWUpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5sZW4obmFtZSwgMywgMzApICYmXG4gICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eSh1c2VybmFtZSkgJiZcbiAgICAgICAgICAgIHZhbGlkYXRlLmxlbih1c2VybmFtZSwgNSwgMTUpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5pc1VzZXJuYW1lKHVzZXJuYW1lKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUuaXNFbWFpbChlbWFpbCkgJiZcbiAgICAgICAgICAgIHZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHBhc3N3b3JkKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUubGVuKHBhc3N3b3JkLCA4LCAzMCkgJiZcbiAgICAgICAgICAgIHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB2YXIgdXNlciA9IHsgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsLCB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdChcIi9hcGkvc2VuZC1jb2RlXCIsIHVzZXIpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKG51bGwpO1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcInZlcmlmeS1lbWFpbFwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT09IFwiZW1haWwgaXMgaW4gdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZSwgeW91IGNhbiBsb2dpbiBvciByZXNldCB5b3VyIHBhc3N3b3JkIGluIHRoZSBsb2dpbiB0YWIuXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFJlbmRlciB0aGUgc3VibWl0IGJ1dHRvbiBmb3IgdGhlIHJlZ2lzdHJhdGlvbiBzZWN0aW9uXG4gICAgdmFyIHJlbmRlckJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBtYXJnaW4tYm90dG9tLTBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtOVwiIH0sIHsgY2hpbGRyZW46IFtcIkJ5IGNsaWNraW5nIFNpZ24gVXAsIHlvdSBhZ3JlZSB0byBvdXJcIiwgXCIgXCIsIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdGVybXMtb2YtdXNlXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJUZXJtc1wiIH0pKSwgXCIgXCIsIFwiYW5kXCIsIFwiIFwiLCBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiL3ByaXZhY3ktcG9saWN5XCIsIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJQcml2YWN5IFBvbGljeVwiIH0pKSwgXCIuXCJdIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tdG9wLTEtNSB1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIHNpemU6IFwiYmlnXCIsIHJvdW5kZWQ6IHRydWUsIG91dGxpbmVkOiB0cnVlLCB0eXBlOiBcInN1Ym1pdFwiLCBsb2FkaW5nOiBsb2FkaW5nIH0sIHsgY2hpbGRyZW46IFwiU2lnbiBVcFwiIH0pKSB9KSldIH0pKSk7XG4gICAgfTtcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLS1sb2dpbi1idG5cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuICAgIHZhciBFTDtcbiAgICBpZiAoc3RhdHVzID09PSBcInNob3ctZm9ybVwiKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJSZWdpc3RlciB8IFBhZ3NlclwiO1xuICAgICAgICBFTCA9IChfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fb3B0aW9uc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX29wdGlvbnMtLXJlZ2lzdGVyLS1hY3RpdmVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyB9IH0sIHsgY2hpbGRyZW46IFwiUmVnaXN0ZXJcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fb3B0aW9ucy0tbG9naW5cIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbG9naW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJsb2dpblwiIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoX19jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDcmVhdGUgeW91ciBhY2NvdW50XCIgfSkpLCBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzbWFsbC1jb3B5XCIgfSwgeyBjaGlsZHJlbjogXCJCeSBjcmVhdGluZyBhbiBhY2NvdW50IHlvdSB3aWxsIGJlIGFibGUgdG8gY3JlYXRlIHBhZ2VzLCBmYXZvcml0ZSBwYWdlcywgY29tbWVudCBvbiBvdGhlciBwYWdlcyBhbmQgbW9yZS5cIiB9KSksIF9qc3goQWxlcnQsIHsgbWVzc2FnZTogYWxlcnRNZXNzYWdlLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IGFsZXJ0VHlwZSB9KSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgbWV0aG9kOiBcInBvc3RcIiwgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwibmFtZVwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIkZ1bGwgTmFtZVwiLCBlcnJvcjogbmFtZUVycm9yLCBzdWNjZXNzOiBuYW1lU3VjY2VzcywgdmFsdWU6IG5hbWUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwidXNlcm5hbWVcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIlVzZXJuYW1lXCIsIGVycm9yOiB1c2VybmFtZUVycm9yLCBzdWNjZXNzOiB1c2VybmFtZUlzT0sgfHwgZmFsc2UsIHZhbHVlOiB1c2VybmFtZSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiLCBpZDogXCJlbWFpbFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJlbWFpbFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcImVtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIkVtYWlsXCIsIGVycm9yOiBlbWFpbEVycm9yLCBzdWNjZXNzOiBlbWFpbFN1Y2Nlc3MsIHZhbHVlOiBlbWFpbCB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiLCBpZDogXCJwYXNzd29yZFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcInBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKHZhbHVlLCBcInBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJQYXNzd29yZFwiLCBlcnJvcjogcGFzc3dvcmRFcnJvciwgc3VjY2VzczogcGFzc3dvcmRTdWNjZXNzLCB2YWx1ZTogcGFzc3dvcmQgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwiXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwiY29uZmlybVBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKHZhbHVlLCBcImNvbmZpcm1QYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbGFiZWw6IFwiQ29uZmlybSBQYXNzd29yZFwiLCBkaXNhYmxlZDogY29uZmlybVBhc3N3b3JkRGlzYWJsZWQsIGVycm9yOiBjb25maXJtUGFzc3dvcmRFcnJvciwgc3VjY2VzczogY29uZmlybVBhc3N3b3JkU3VjY2VzcywgdmFsdWU6IGNvbmZpcm1QYXNzd29yZCB9KSB9KSksIHJlbmRlckJ1dHRvbigpXSB9KSldIH0pKV0gfSkpIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJ2ZXJpZnktZW1haWxcIikge1xuICAgICAgICBFTCA9IChfanN4KFZlcmlmeUVtYWlsLCB7IG5hbWU6IG5hbWUsIHVzZXJuYW1lOiB1c2VybmFtZSwgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQsIG9uRW1haWxDaGFuZ2U6IGZ1bmN0aW9uIChuZXdFbWFpbCkge1xuICAgICAgICAgICAgICAgIHNldEVtYWlsKG5ld0VtYWlsKTtcbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICByZXR1cm4gRUw7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQWxlcnQsIE1vZGFsLCBMb2FkaW5nLCBJbnB1dCwgQnV0dG9uLCB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG52YXIgVmVyaWZ5RW1haWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgZmlyc3REaWdpdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgc2Vjb25kRGlnaXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHRoaXJkRGlnaXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIGZvdXJ0aERpZ2l0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBmaWZ0aERpZ2l0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFwiXCIpLCBmaXJzdERpZ2l0ID0gX2FbMF0sIHNldEZpcnN0RGlnaXQgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgc2Vjb25kRGlnaXQgPSBfYlswXSwgc2V0U2Vjb25kRGlnaXQgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShcIlwiKSwgdGhpcmREaWdpdCA9IF9jWzBdLCBzZXRUaGlyZERpZ2l0ID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoXCJcIiksIGZvdXJ0aERpZ2l0ID0gX2RbMF0sIHNldEZvdXJ0aERpZ2l0ID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoXCJcIiksIGZpZnRoRGlnaXQgPSBfZVswXSwgc2V0RmlmdGhEaWdpdCA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCBjaGFuZ2VkRW1haWwgPSBfZlswXSwgc2V0Q2hhbmdlZEVtYWlsID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX2dbMF0sIHNldExvYWRpbmcgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmdDaGFuZ2VFbWFpbCA9IF9oWzBdLCBzZXRMb2FkaW5nQ2hhbmdlRW1haWwgPSBfaFsxXTtcbiAgICB2YXIgX2ogPSB1c2VTdGF0ZShudWxsKSwgYWxlcnRNZXNzYWdlID0gX2pbMF0sIHNldEFsZXJ0TWVzc2FnZSA9IF9qWzFdO1xuICAgIHZhciBfayA9IHVzZVN0YXRlKFwic3VjY2Vzc1wiKSwgYWxlcnRUeXBlID0gX2tbMF0sIHNldEFsZXJ0VHlwZSA9IF9rWzFdO1xuICAgIHZhciBfbCA9IHVzZVN0YXRlKGZhbHNlKSwgY2hhbmdlRW1haWxNZGwgPSBfbFswXSwgc2V0Q2hhbmdlRW1haWxNZGwgPSBfbFsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0RpZ2l0cygpO1xuICAgIH0sIFtmaXJzdERpZ2l0LCBzZWNvbmREaWdpdCwgdGhpcmREaWdpdCwgZm91cnRoRGlnaXQsIGZpZnRoRGlnaXRdKTtcbiAgICAvLyBSZXNldCB0aGUgZGlnaXRzIGlucHV0c1xuICAgIHZhciByZXNldERpZ2l0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzZXRGaXJzdERpZ2l0KFwiXCIpO1xuICAgICAgICBzZXRTZWNvbmREaWdpdChcIlwiKTtcbiAgICAgICAgc2V0VGhpcmREaWdpdChcIlwiKTtcbiAgICAgICAgc2V0Rm91cnRoRGlnaXQoXCJcIik7XG4gICAgICAgIHNldEZpZnRoRGlnaXQoXCJcIik7XG4gICAgICAgIChfYSA9IGZpcnN0RGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgfTtcbiAgICB2YXIgcmVzZW5kQ29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KFwiL2FwaS9zZW5kLWNvZGVcIiwge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9wcy51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsOiBwcm9wcy5lbWFpbCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJOZXcgY29kZSBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuXCIpO1xuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHJlc2V0RGlnaXRzKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgcmVzZXREaWdpdHMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgb25WZXJpZnlDb2RlU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICB2YXIgY29kZSA9IFwiXCIuY29uY2F0KGZpcnN0RGlnaXQpLmNvbmNhdChzZWNvbmREaWdpdCkuY29uY2F0KHRoaXJkRGlnaXQpLmNvbmNhdChmb3VydGhEaWdpdCkuY29uY2F0KGZpZnRoRGlnaXQpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvYXBpL3JlZ2lzdGVyXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB1c2VybmFtZTogcHJvcHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbDogcHJvcHMuZW1haWwsXG4gICAgICAgICAgICB1c2VyRW1haWxWZXJpZmljYXRpb25Db2RlOiBOdW1iZXIoY29kZSksXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2hvbWVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdmFyIGVycm9yTXNnID0gKF9iID0gKF9hID0gZXJyb3IucmVzcG9uc2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVycm9yTXNnKSA/IChfYyA9IGVycm9yTXNnWzBdKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5jbHVkZXMoXCJjb2RlXCIpIDogKF9kID0gZXJyb3JNc2cgPT09IG51bGwgfHwgZXJyb3JNc2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yTXNnLmluY2x1ZGVzKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChlcnJvck1zZywgXCJjb2RlXCIpKSB7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiVGhlIGNvZGUgaXMgaW52YWxpZCwgbWFrZSBzdXJlIHRoYXQgeW91IHB1dCB0aGUgZXhhY3QgY29kZSB3ZSd2ZSBzZW50IHRvIHlvdXIgZW1haWwuIFlvdSBtYXkgd2FudCB0byByZXNlbmQgdGhlIGNvZGUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICByZXNldERpZ2l0cygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBvbkNoYW5nZUVtYWlsU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nQ2hhbmdlRW1haWwodHJ1ZSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcIi9hcGkvc2VuZC1jb2RlXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB1c2VybmFtZTogcHJvcHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbDogY2hhbmdlZEVtYWlsLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkVtYWlsQ2hhbmdlKGNoYW5nZWRFbWFpbCk7XG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJOZXcgY29kZSBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuXCIpO1xuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHNldENoYW5nZUVtYWlsTWRsKGZhbHNlKTtcbiAgICAgICAgICAgIHNldENoYW5nZWRFbWFpbChcIlwiKTtcbiAgICAgICAgICAgIHJlc2V0RGlnaXRzKCk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nQ2hhbmdlRW1haWwoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PT0gXCJlbWFpbCBpcyBpbiB1c2VcIikge1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlwiLmNvbmNhdChjaGFuZ2VkRW1haWwsIFwiIGlzIGFscmVhZHkgaW4gdXNlLCBwbGVhc2UgbG9naW4gd2l0aCB0aGlzIGVtYWlsIG9yIGNob29zZSBhbm90aGVyIG9uZS5cIikpO1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHNldENoYW5nZUVtYWlsTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXNldERpZ2l0cygpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdDaGFuZ2VFbWFpbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0Q2hhbmdlZEVtYWlsKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHJlc2V0RGlnaXRzKCk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NoYW5nZUVtYWlsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRDaGFuZ2VkRW1haWwoXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gTW92ZSB0byB0aGUgc3BlY2lmaWVkIGRpZ2V0XG4gICAgdmFyIG1vdmVEaWdpdCA9IGZ1bmN0aW9uIChudW1iZXIpIHsgfTtcbiAgICAvLyBDaGVjayBpZiBhbGwgZGlnaXRzIGFyZSBlbnRlcmVkXG4gICAgdmFyIGNoZWNrRGlnaXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZmlyc3REaWdpdC5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIHNlY29uZERpZ2l0Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgdGhpcmREaWdpdC5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIGZvdXJ0aERpZ2l0Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgZmlmdGhEaWdpdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIG9uVmVyaWZ5Q29kZVN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBXaGVuIGEgZGlnaXQgaXMgY2hhbmdlZFxuICAgIHZhciBvbkRpZ2l0Q2hhbmdlZCA9IGZ1bmN0aW9uICh2YWx1ZUVudGVyZWQsIG51bWJlcikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlRW50ZXJlZCkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgICAgICAgICAgICAgIHNldEZpcnN0RGlnaXQodmFsdWVFbnRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gc2Vjb25kRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWNvbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kRGlnaXQodmFsdWVFbnRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gdGhpcmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRoaXJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldFRoaXJkRGlnaXQodmFsdWVFbnRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgKF9jID0gZm91cnRoRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmb3VydGhcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm91cnRoRGlnaXQodmFsdWVFbnRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgKF9kID0gZmlmdGhEaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZpZnRoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldEZpZnRoRGlnaXQodmFsdWVFbnRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFdoZW4gdXNlciBwcmVzc2VzIGEga2V5IGluIGEgZGlnaXRcbiAgICB2YXIgb25EaWdpdEtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQsIG51bWJlcikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICAgICAgLy8gQmFja3NwYWNlIGtleSBwcmVzc2VkXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmaXJzdFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdERpZ2l0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZERpZ2l0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBmaXJzdERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhpcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0VGhpcmREaWdpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gc2Vjb25kRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmb3VydGhcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm91cnRoRGlnaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIChfYyA9IHRoaXJkRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmaWZ0aFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRGaWZ0aERpZ2l0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAoX2QgPSBmb3VydGhEaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGVmdCBhcnJvdyBrZXkgcHJlc3NlZFxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2UgPSBmaXJzdERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhpcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9mID0gc2Vjb25kRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmb3VydGhcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9nID0gdGhpcmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZpZnRoXCI6XG4gICAgICAgICAgICAgICAgICAgIChfaCA9IGZvdXJ0aERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSaWdodCBhcnJvdyBrZXkgcHJlc3NlZFxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgICAgICAgICAgICAgIChfaiA9IHNlY29uZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgICAgICAgICAgICAgIChfayA9IHRoaXJkRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aGlyZFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2wgPSBmb3VydGhEaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2wuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZvdXJ0aFwiOlxuICAgICAgICAgICAgICAgICAgICAoX20gPSBmaWZ0aERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9tID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gUmVuZGVyIGJ1dHRvbnMgZm9yIHZlcmlmeSBlbWFpbCBwYXJ0XG4gICAgdmFyIHJlbmRlckJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2FkaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tdG9wLTNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlRW1haWxNZGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IFwiYnRuLXRleHQgYnRuLXRleHQtdW5kZXJsaW5lZFwiIH0sIHsgY2hpbGRyZW46IFwiQ2hhbmdlIHlvdXIgZW1haWxcIiB9KSksIF9qc3goXCJiclwiLCB7fSksIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VuZENvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogXCJidG4tdGV4dCBidG4tdGV4dC11bmRlcmxpbmVkXCIgfSwgeyBjaGlsZHJlbjogXCJSZXNlbmQgY29kZVwiIH0pKV0gfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tdG9wLTNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNlbnRlci1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChMb2FkaW5nLCB7fSkgfSkpIH0pKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3hzKE1vZGFsLCBfX2Fzc2lnbih7IGhlYWRlcjogXCJDaGFuZ2UgeW91ciBlbWFpbFwiLCBvcGVuOiBjaGFuZ2VFbWFpbE1kbCwgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VFbWFpbE1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJQdXQgeW91ciBlbWFpbCBhZGRyZXNzIGhlcmUgYW5kIHdlIHdpbGwgc2VuZCBhIG5ldyBjb2RlIHRvIHRoYXQuXCIgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IG9uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRW1haWxTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgcmVxdWlyZWQ6IHRydWUsIHR5cGU6IFwiZW1haWxcIiwgdmFsdWU6IGNoYW5nZWRFbWFpbCwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZWRFbWFpbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJFbWFpbFwiIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1yaWdodFwiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIHJvdW5kZWQ6IHRydWUsIGNvbG9yOiBcImJsdWVcIiwgbG9hZGluZzogbG9hZGluZ0NoYW5nZUVtYWlsIH0sIHsgY2hpbGRyZW46IFwiQ2hhbmdlXCIgfSkpIH0pKV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIlZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3NcIiB9KSksIF9qc3hzKFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzbWFsbC1jb3B5XCIgfSwgeyBjaGlsZHJlbjogW3Byb3BzLmVtYWlsLCBcIiAtIFRoZSBsYXN0IHN0ZXAgaXMgdG8gZW50ZXIgdGhlIDUgZGlnaXRzIGNvZGUgd2UgaGF2ZSBqdXN0IHNlbnQgdG8geW91ciBlbWFpbCB0byB2ZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzLlwiXSB9KSksIF9qc3goQWxlcnQsIHsgYWRkaXRpb25hbENsYXNzZXM6IFwidS1tYXJnaW4tYm90dG9tLTJcIiwgbWVzc2FnZTogYWxlcnRNZXNzYWdlLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHlwZTogYWxlcnRUeXBlIH0pLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZlcmlmeUNvZGVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJpbnB1dC1kaWdpdHNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZWxcIiwgYXV0b0ZvY3VzOiB0cnVlLCB2YWx1ZTogZmlyc3REaWdpdCwgcmVmOiBmaXJzdERpZ2l0UmVmLCBvbktleURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdEtleURvd24oZXZlbnQsIFwiZmlyc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRDaGFuZ2VkKGV2ZW50LnRhcmdldC52YWx1ZSwgXCJmaXJzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGlzYWJsZWQ6IGxvYWRpbmcsIG1heExlbmd0aDogMSB9KSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZWxcIiwgdmFsdWU6IHNlY29uZERpZ2l0LCByZWY6IHNlY29uZERpZ2l0UmVmLCBvbktleURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdEtleURvd24oZXZlbnQsIFwic2Vjb25kXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0Q2hhbmdlZChldmVudC50YXJnZXQudmFsdWUsIFwic2Vjb25kXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogbG9hZGluZywgbWF4TGVuZ3RoOiAxIH0pLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRlbFwiLCB2YWx1ZTogdGhpcmREaWdpdCwgcmVmOiB0aGlyZERpZ2l0UmVmLCBvbktleURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdEtleURvd24oZXZlbnQsIFwidGhpcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRDaGFuZ2VkKGV2ZW50LnRhcmdldC52YWx1ZSwgXCJ0aGlyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGlzYWJsZWQ6IGxvYWRpbmcsIG1heExlbmd0aDogMSB9KSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZWxcIiwgdmFsdWU6IGZvdXJ0aERpZ2l0LCByZWY6IGZvdXJ0aERpZ2l0UmVmLCBvbktleURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdEtleURvd24oZXZlbnQsIFwiZm91cnRoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0Q2hhbmdlZChldmVudC50YXJnZXQudmFsdWUsIFwiZm91cnRoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogbG9hZGluZywgbWF4TGVuZ3RoOiAxIH0pLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRlbFwiLCB2YWx1ZTogZmlmdGhEaWdpdCwgcmVmOiBmaWZ0aERpZ2l0UmVmLCBvbktleURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdEtleURvd24oZXZlbnQsIFwiZmlmdGhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRDaGFuZ2VkKGV2ZW50LnRhcmdldC52YWx1ZSwgXCJmaWZ0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGlzYWJsZWQ6IGxvYWRpbmcsIG1heExlbmd0aDogMSB9KV0gfSkpIH0pKSwgcmVuZGVyQnV0dG9ucygpXSB9KSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFZlcmlmeUVtYWlsO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcbmltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZFwiO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyXCI7XG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvbihwcm9wcykge1xuICAgIHJldHVybiAoX2pzeChSb3V0ZXIsIHsgY2hpbGRyZW46IF9qc3hzKFJvdXRlcywgeyBjaGlsZHJlbjogW19qc3goUm91dGUsIHsgcGF0aDogXCIvbG9naW5cIiwgZWxlbWVudDogX2pzeChMb2dpbiwge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2ZvcmdvdC1wYXNzd29yZFwiLCBlbGVtZW50OiBfanN4KEZvcmdvdFBhc3N3b3JkLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvcmVnaXN0ZXJcIiwgZWxlbWVudDogX2pzeChSZWdpc3Rlciwge30pIH0pXSB9KSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBBdXRoZW50aWNhdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==