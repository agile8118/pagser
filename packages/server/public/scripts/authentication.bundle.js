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
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/resetpassword", {
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
            axios__WEBPACK_IMPORTED_MODULE_2___default().post("/usernameAvailability", {
                username: value,
            })
                .then(function (respond) {
                if (respond.data.message === "ok") {
                    // util.inputOK("username");
                    setUsernameError("");
                    setUsernameIsOK(true);
                }
                else if (respond.data.message === "taken") {
                    setUsernameIsOK(false);
                    setUsernameError("".concat(value, " is already taken, please choose another one."));
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
            axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/sendcode", user)
                .then(function (response) {
                setLoading(false);
                setAlertMessage(null);
                setStatus("verify-email");
            })
                .catch(function (error) {
                setLoading(false);
                if (error.response.data.error === "email is in use") {
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
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/sendcode", {
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
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/register/validatecode", {
            code: Number(code),
        })
            .then(function (response) {
            axios__WEBPACK_IMPORTED_MODULE_2___default().post("/register", {
                name: props.name,
                username: props.username,
                password: props.password,
                email: props.email,
                code: Number(code),
            })
                .then(function (response) {
                localStorage.setItem("token", response.data.token);
                window.location.href = "/home";
            })
                .catch(function (error) {
                setLoading(false);
                setAlertMessage("Something went wrong, please try again.");
                setAlertType("error");
                resetDigits();
            });
        })
            .catch(function (error) {
            setLoading(false);
            setAlertMessage("The code is invalid, make sure that you put the exact code we've sent to your email. You may want to resend the code.");
            setAlertType("error");
            resetDigits();
        });
    };
    var onChangeEmailSubmit = function () {
        setLoadingChangeEmail(true);
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/sendcode", {
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
            if (error.response.data.error === "email is in use") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUNTO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWSxpREFDUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQ1M7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQUssbUJBQW1CLDJCQUEyQixJQUFJLFdBQVcsc0RBQUksaUJBQWlCO0FBQzNHO0FBQ0EseUJBQXlCLDZDQUE2QyxJQUFJLCtCQUErQixJQUFJLHNEQUFJLFNBQVMsR0FBRyxzREFBSSxpQkFBaUI7QUFDbEo7QUFDQSx5QkFBeUIsNkNBQTZDLElBQUkseUJBQXlCLEtBQUs7QUFDeEc7QUFDQTtBQUNBLG9CQUFvQixzREFBSSxtQkFBbUIsMkJBQTJCLElBQUksVUFBVSxzREFBSSxtQkFBbUIsNkJBQTZCLElBQUksVUFBVSxzREFBSSxDQUFDLHFEQUFPLElBQUksR0FBRyxJQUFJO0FBQzdLO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLFVBQVUsV0FBVyx1REFBSyxDQUFDLG1EQUFLLGFBQWE7QUFDOUQ7QUFDQSxtQkFBbUIsSUFBSSxXQUFXLHNEQUFJLFFBQVEsOEVBQThFLEdBQUcsdURBQUssb0JBQW9CO0FBQ3hKO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQix5QkFBeUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUssSUFBSTtBQUN0SDtBQUNBLHFDQUFxQyxrQkFBa0IsR0FBRyxJQUFJLHNEQUFJLG1CQUFtQixnQ0FBZ0MsSUFBSSxVQUFVLHNEQUFJLENBQUMsb0RBQU0sYUFBYSwyRUFBMkUsSUFBSSxvQkFBb0IsSUFBSSxLQUFLLEtBQUssSUFBSSx1REFBSyxtQkFBbUIsbUJBQW1CLElBQUksV0FBVyxzREFBSSxrQkFBa0IsK0JBQStCLElBQUksdUNBQXVDLElBQUksdURBQUssaUJBQWlCLHlCQUF5QixJQUFJLHlJQUF5SSxJQUFJLHNEQUFJLENBQUMsbURBQUssSUFBSTtBQUM1bkI7QUFDQSx5QkFBeUIsbUJBQW1CLEdBQUcsdURBQUssb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQiwwQkFBMEIsSUFBSSxVQUFVLHVEQUFLLG1CQUFtQiwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLFlBQVk7QUFDM0w7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw2Q0FBNkMsbUNBQW1DLEdBQUcsc0RBQUksWUFBWTtBQUNuRztBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QyxtQ0FBbUMsR0FBRyxzREFBSSxZQUFZO0FBQ25HO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsNkNBQTZDLG1DQUFtQyxHQUFHLHNEQUFJLFlBQVk7QUFDbkc7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw2Q0FBNkMsbUNBQW1DLEdBQUcsc0RBQUksWUFBWTtBQUNuRztBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QyxtQ0FBbUMsSUFBSSxJQUFJLHNCQUFzQixLQUFLLEtBQUs7QUFDeEg7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdSb0M7QUFDWTtBQUMvQztBQUNrQjtBQUNaO0FBQ2xDO0FBQ0EsWUFBWSxzREFBSSxDQUFDLDJEQUFNLElBQUksVUFBVSx1REFBSyxDQUFDLG9EQUFNLElBQUksV0FBVyxzREFBSSxDQUFDLG1EQUFLLElBQUkseUJBQXlCLHNEQUFJLENBQUMsOENBQUssSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLG1DQUFtQyxzREFBSSxDQUFDLHVEQUFjLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsbURBQUssSUFBSSw0QkFBNEIsc0RBQUksQ0FBQyxpREFBUSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQzlRO0FBQ0EsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvYXV0aGVudGljYXRpb24vRm9yZ290UGFzc3dvcmQudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2F1dGhlbnRpY2F0aW9uL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9hdXRoZW50aWNhdGlvbi9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvYXV0aGVudGljYXRpb24vVmVyaWZ5RW1haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2F1dGhlbnRpY2F0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHZhbGlkYXRlLCB1dGlsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbnZhciBGb3Jnb3RQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZCA9IF9iWzBdLCBzZXRQYXNzd29yZCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgcGFzc3dvcmRTdWNjZXNzID0gX2NbMF0sIHNldFBhc3N3b3JkU3VjY2VzcyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZEVycm9yID0gX2RbMF0sIHNldFBhc3N3b3JkRXJyb3IgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZVswXSwgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZSh0cnVlKSwgY29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZlswXSwgc2V0Q29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1QYXNzd29yZFN1Y2Nlc3MgPSBfZ1swXSwgc2V0Q29uZmlybVBhc3N3b3JkU3VjY2VzcyA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtUGFzc3dvcmQgPSBfaFswXSwgc2V0Q29uZmlybVBhc3N3b3JkID0gX2hbMV07XG4gICAgdmFyIF9qID0gdXNlU3RhdGUoXCJzaG93LWZvcm1cIiksIHN0YXR1cyA9IF9qWzBdLCBzZXRTdGF0dXMgPSBfalsxXTtcbiAgICB2YXIgX2sgPSB1c2VTdGF0ZShcIlwiKSwgbWVzc2FnZSA9IF9rWzBdLCBzZXRNZXNzYWdlID0gX2tbMV07XG4gICAgdmFyIF9sID0gdXNlU3RhdGUoZmFsc2UpLCBidG5EaXNhYmxlZCA9IF9sWzBdLCBzZXRCdG5EaXNhYmxlZCA9IF9sWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrQWxsKCk7XG4gICAgfSwgW3Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmRdKTtcbiAgICB2YXIgY2hlY2tBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZChwYXNzd29yZCkgJiZcbiAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KHBhc3N3b3JkKSAmJlxuICAgICAgICAgICAgcGFzc3dvcmQgPT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgc2V0QnRuRGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0QnRuRGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjb25maXJtUGFzc3dvcmRSZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKFwiXCIpO1xuICAgICAgICBzZXRDb25maXJtUGFzc3dvcmREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJcIik7XG4gICAgfTtcbiAgICB2YXIgb25JbnB1dEZvY3VzT3V0ID0gZnVuY3Rpb24gKHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGxlYXNlIGNob29zZSBhIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRSZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiY29uZmlybVBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGxlYXNlIGNob29zZSBhIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkTmFtZSkge1xuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHZhbHVlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4gYSBjYXBpdGFsIGxldHRlciwgbGV0dGVycyBhbmQgbnVtYmVycy5cIik7XG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUubGVuKHZhbHVlLCA4LCAzMCkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlBhc3N3b3JkIHNob3VsZCBjb250YWluIDggdG8gMzAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5sZW4odmFsdWUsIDgsIDMwKSAmJlxuICAgICAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSAmJlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcImNvbmZpcm1QYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCB1cC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzRW1wdHkoY29uZmlybVBhc3N3b3JkKSAmJiBwYXNzd29yZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvYXBpL3Jlc2V0cGFzc3dvcmRcIiwge1xuICAgICAgICAgICAgdXNlcklkOiB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlcIiksXG4gICAgICAgICAgICB0b2tlbjogeyBjb2RlOiB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcInRcIikgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gXCJpbnZhbGlkIGxpbmtcIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJUaGUgbGluayB5b3UndmUgY2xpY2tlZCBvbiBpcyBub3QgdmFsaWQsIG1ha2Ugc3VyZSB0aGF0IHlvdSBvcGVuIHRoZSBleGFjdCBsaW5rIHdlJ3ZlIHNlbnQgdG8geW91ciBlbWFpbC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gXCJsaW5rIGV4cGlyZWRcIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJUaGUgbGluayB5b3UndmUgY2xpY2tlZCBvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIHJlcXVlc3QgZm9yIGEgcGFzc3dvcmQgcmVzZXQgb25jZSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIEVMO1xuICAgIGlmIChzdGF0dXMgPT09IFwic2hvdy1mb3JtXCIpIHtcbiAgICAgICAgdmFyIHRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlRWwuaW5uZXJIVE1MID0gXCJSZXNldCBQYXNzd29yZCB8IFBhZ3NlclwiO1xuICAgICAgICBFTCA9IChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDcmVhdGUgYSBuZXcgcGFzc3dvcmRcIiB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNtYWxsLWNvcHlcIiB9LCB7IGNoaWxkcmVuOiBcIkFmdGVyIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLCB5b3Ugd2lsbCBwcm9tcHRlZCB0byBsb2dpbiB3aXRoIHlvdXIgbmV3IHBhc3N3b3JkLlwiIH0pKSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgbWV0aG9kOiBcInBvc3RcIiwgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHBhc3N3b3JkLCBlcnJvcjogcGFzc3dvcmRFcnJvciwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZSh2YWx1ZSwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc3VjY2VzczogcGFzc3dvcmRTdWNjZXNzLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcInBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJQYXNzd29yZFwiIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIGVycm9yOiBjb25maXJtUGFzc3dvcmRFcnJvciwgdmFsdWU6IGNvbmZpcm1QYXNzd29yZCwgc3VjY2VzczogY29uZmlybVBhc3N3b3JkU3VjY2Vzcywgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZSh2YWx1ZSwgXCJjb25maXJtUGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwiY29uZmlybVBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogY29uZmlybVBhc3N3b3JkRGlzYWJsZWQsIGxhYmVsOiBcIkNvbmZpcm0gUGFzc3dvcmRcIiB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgdS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdHlwZTogXCJzdWJtaXRcIiwgbG9hZGluZzogbG9hZGluZywgcm91bmRlZDogdHJ1ZSwgZGlzYWJsZWQ6IGJ0bkRpc2FibGVkLCBjb2xvcjogXCJibHVlXCIgfSwgeyBjaGlsZHJlbjogXCJSZXNldFwiIH0pKSB9KSldIH0pKV0gfSkpKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIEVMID0gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWlkZGxlLWJveCBtaWRkbGUtYm94LS1hYnNvbHV0ZSBtaWRkbGUtYm94LS1lcnJvclwiIH0sIHsgY2hpbGRyZW46IG1lc3NhZ2UgfSkpKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgRUwgPSAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtaWRkbGUtYm94IG1pZGRsZS1ib3gtLWFic29sdXRlIG1pZGRsZS1ib3gtLXN1Y2Nlc3NcIiB9LCB7IGNoaWxkcmVuOiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZXNldCB5b3VyIHBhc3N3b3JkLiBOb3cgeW91IGNhbiBnbyBhaGVhZCBhbmQgbG9naW4gdG8geW91ciBhY2NvdW50IHdpdGggeW91ciBuZXcgcGFzc3dvcmQuXCIgfSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIEVMO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQWxlcnQsIE1vZGFsLCBCdXR0b24sIElucHV0LCB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG52YXIgTG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIpLCBlbWFpbCA9IF9iWzBdLCBzZXRFbWFpbCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZCA9IF9jWzBdLCBzZXRQYXNzd29yZCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBhbGVydE1lc3NhZ2UgPSBfZFswXSwgc2V0QWxlcnRNZXNzYWdlID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoXCJzdWNjZXNzXCIpLCBhbGVydFR5cGUgPSBfZVswXSwgc2V0QWxlcnRUeXBlID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX2ZbMF0sIHNldExvYWRpbmcgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmdGb3Jnb3RQYXNzd29yZCA9IF9nWzBdLCBzZXRMb2FkaW5nRm9yZ290UGFzc3dvcmQgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShmYWxzZSksIGZvcmdvdFBhc3NNZGwgPSBfaFswXSwgc2V0Rm9yZ290UGFzc01kbCA9IF9oWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlZGlyZWN0ZWRGcm9tID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJyZWRpcmVjdGVkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgc3dpdGNoIChyZWRpcmVjdGVkRnJvbSkge1xuICAgICAgICAgICAgY2FzZSBcIm5ldy1wYWdlXCI6XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiUGxlYXNlIGxvZ2luIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gY3JlYXRlIGEgbmV3IHBhZ2UuXCIpO1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcIm5vcm1hbGxcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5cIjpcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJQbGVhc2UgbG9naW4gdG8gYWNjZXNzIHRoZSBhZG1pbiBhcmVhLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJub3JtYWxsXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFjY2Vzc1wiOlxuICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlBsZWFzZSBsb2dpbiB0byBwcm9jZWVkLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJub3JtYWxsXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8vIENhbGwgc2VydmVyIHRvIHNlbmQgYW4gZW1haWwgdG8gcmVzZXQgdGhlIHBhc3N3b3JkXG4gICAgdmFyIG9uRm9yZ290UGFzc3dvcmRTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmdGb3Jnb3RQYXNzd29yZCh0cnVlKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KFwiL2FwaS9mb3Jnb3QtcGFzc3dvcmRcIiwge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJJbnN0cnVjdGlvbnMgb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQgd2VyZSBzZW50IHRvIFwiLmNvbmNhdChlbWFpbCkpO1xuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHNldEZvcmdvdFBhc3NNZGwoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TG9hZGluZ0ZvcmdvdFBhc3N3b3JkKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIk5vIG9uZSB3aXRoIHRoZSBlbWFpbCBcIi5jb25jYXQoZW1haWwsIFwiIHdhcyBmb3VuZGVkLlwiKSk7XG4gICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNldEZvcmdvdFBhc3NNZGwoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TG9hZGluZ0ZvcmdvdFBhc3N3b3JkKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgb25Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvYXBpL2xvZ2luXCIsIHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJJbmNvcnJlY3QgcGFzc3dvcmQgb3IgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgcmVuZGVyQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCB1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCByb3VuZGVkOiB0cnVlLCBvdXRsaW5lZDogdHJ1ZSwgc2l6ZTogXCJiaWdcIiwgY29sb3I6IFwiYmx1ZVwiLCBsb2FkaW5nOiBsb2FkaW5nIH0sIHsgY2hpbGRyZW46IFwiU2lnbiBJblwiIH0pKSB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb3Jnb3RQYXNzTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IFwiYnV0dG9uLXRleHRcIiB9LCB7IGNoaWxkcmVuOiBcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiIH0pKV0gfSkpO1xuICAgIH07XG4gICAgKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy0tbG9naW4tYnRuXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJMb2dpbiB8IFBhZ3NlclwiO1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhNb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiUmVzZXQgeW91ciBwYXNzd29yZFwiLCBvcGVuOiBmb3Jnb3RQYXNzTWRsLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZvcmdvdFBhc3NNZGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiUHV0IHlvdXIgZW1haWwgYWRkcmVzcyBoZXJlIGFuZCB3ZSdsbCBzZW5kIHlvdSB0aGUgaW5zdHJ1Y3Rpb25zLlwiIH0pLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvcmdvdFBhc3N3b3JkU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwiZW1haWxcIiwgbGFiZWw6IFwiRW1haWxcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlOiBlbWFpbCwgcmVxdWlyZWQ6IHRydWUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LXJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdHlwZTogXCJzdWJtaXRcIiwgcm91bmRlZDogdHJ1ZSwgY29sb3I6IFwiYmx1ZVwiLCBsb2FkaW5nOiBsb2FkaW5nRm9yZ290UGFzc3dvcmQgfSwgeyBjaGlsZHJlbjogXCJTZW5kXCIgfSkpIH0pKV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fb3B0aW9uc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX29wdGlvbnMtLXJlZ2lzdGVyXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL3JlZ2lzdGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiUmVnaXN0ZXJcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fb3B0aW9ucy0tbG9naW4tLWFjdGl2ZVwiIH0sIHsgY2hpbGRyZW46IFwibG9naW5cIiB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiTG9nIGludG8geW91ciBhY2NvdW50XCIgfSkpLCBfanN4cyhcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic21hbGwtY29weVwiIH0sIHsgY2hpbGRyZW46IFtcIldlIGFyZSBoYXBweSB0byBzZWUgeW91IGxvZ2dpbmcgaW4hIExvZ2luIHRvIG1hbmFnZSBhbGwgb2YgeW91ciBwYWdlcy4gWW91IGNhbiByZXNldCB5b3VyIHBhc3N3b3JkIGlmIHlvdSBcIiwgXCJkb24ndCBcIiwgXCIgcmVtZW1iZXIgaXQuXCJdIH0pKSwgX2pzeChBbGVydCwgeyBtZXNzYWdlOiBhbGVydE1lc3NhZ2UgfHwgdW5kZWZpbmVkLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IGFsZXJ0VHlwZSB9KSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgbWV0aG9kOiBcInBvc3RcIiwgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIkVtYWlsIEFkZHJlc3NcIiwgdmFsdWU6IGVtYWlsLCByZXF1aXJlZDogdHJ1ZSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIllvdXIgUGFzc3dvcmRcIiwgdmFsdWU6IHBhc3N3b3JkIH0pIH0pKSwgcmVuZGVyQnV0dG9ucygpXSB9KSldIH0pKV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IFZlcmlmeUVtYWlsIGZyb20gXCIuL1ZlcmlmeUVtYWlsXCI7XG52YXIgUmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIpLCBuYW1lID0gX2JbMF0sIHNldE5hbWUgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShcIlwiKSwgbmFtZUVycm9yID0gX2NbMF0sIHNldE5hbWVFcnJvciA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgbmFtZVN1Y2Nlc3MgPSBfZFswXSwgc2V0TmFtZVN1Y2Nlc3MgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZShcIlwiKSwgdXNlcm5hbWUgPSBfZVswXSwgc2V0VXNlcm5hbWUgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShcIlwiKSwgdXNlcm5hbWVFcnJvciA9IF9mWzBdLCBzZXRVc2VybmFtZUVycm9yID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoXCJcIiksIGVtYWlsID0gX2dbMF0sIHNldEVtYWlsID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlU3RhdGUoXCJcIiksIGVtYWlsRXJyb3IgPSBfaFswXSwgc2V0RW1haWxFcnJvciA9IF9oWzFdO1xuICAgIHZhciBfaiA9IHVzZVN0YXRlKGZhbHNlKSwgZW1haWxTdWNjZXNzID0gX2pbMF0sIHNldEVtYWlsU3VjY2VzcyA9IF9qWzFdO1xuICAgIHZhciBfayA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZCA9IF9rWzBdLCBzZXRQYXNzd29yZCA9IF9rWzFdO1xuICAgIHZhciBfbCA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZEVycm9yID0gX2xbMF0sIHNldFBhc3N3b3JkRXJyb3IgPSBfbFsxXTtcbiAgICB2YXIgX20gPSB1c2VTdGF0ZShmYWxzZSksIHBhc3N3b3JkU3VjY2VzcyA9IF9tWzBdLCBzZXRQYXNzd29yZFN1Y2Nlc3MgPSBfbVsxXTtcbiAgICB2YXIgX28gPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybVBhc3N3b3JkID0gX29bMF0sIHNldENvbmZpcm1QYXNzd29yZCA9IF9vWzFdO1xuICAgIHZhciBfcCA9IHVzZVN0YXRlKHRydWUpLCBjb25maXJtUGFzc3dvcmREaXNhYmxlZCA9IF9wWzBdLCBzZXRDb25maXJtUGFzc3dvcmREaXNhYmxlZCA9IF9wWzFdO1xuICAgIHZhciBfcSA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtUGFzc3dvcmRFcnJvciA9IF9xWzBdLCBzZXRDb25maXJtUGFzc3dvcmRFcnJvciA9IF9xWzFdO1xuICAgIHZhciBfciA9IHVzZVN0YXRlKGZhbHNlKSwgY29uZmlybVBhc3N3b3JkU3VjY2VzcyA9IF9yWzBdLCBzZXRDb25maXJtUGFzc3dvcmRTdWNjZXNzID0gX3JbMV07XG4gICAgdmFyIF9zID0gdXNlU3RhdGUobnVsbCksIHVzZXJuYW1lSXNPSyA9IF9zWzBdLCBzZXRVc2VybmFtZUlzT0sgPSBfc1sxXTtcbiAgICB2YXIgX3QgPSB1c2VTdGF0ZShcInNob3ctZm9ybVwiKSwgc3RhdHVzID0gX3RbMF0sIHNldFN0YXR1cyA9IF90WzFdO1xuICAgIHZhciBfdSA9IHVzZVN0YXRlKG51bGwpLCBhbGVydE1lc3NhZ2UgPSBfdVswXSwgc2V0QWxlcnRNZXNzYWdlID0gX3VbMV07XG4gICAgdmFyIF92ID0gdXNlU3RhdGUoXCJzdWNjZXNzXCIpLCBhbGVydFR5cGUgPSBfdlswXSwgc2V0QWxlcnRUeXBlID0gX3ZbMV07XG4gICAgdmFyIF93ID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX3dbMF0sIHNldExvYWRpbmcgPSBfd1sxXTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIC8vIGNvbnN0IG9uVXNlcm5hbWVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgLy8gICB2YXIgY3VycmVudFVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgLy8gICBheGlvc1xuICAgIC8vICAgICAucG9zdChgL3VzZXJuYW1lQXZhaWxhYmlsaXR5YCwge1xuICAgIC8vICAgICAgIHVzZXJuYW1lOiBjdXJyZW50VXNlcm5hbWUsXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25kKSA9PiB7XG4gICAgLy8gICAgICAgaWYgKHJlc3BvbmQuZGF0YS5tZXNzYWdlID09PSBcIm9rXCIpIHtcbiAgICAvLyAgICAgICAgIHV0aWwuaW5wdXRPSyhcInVzZXJuYW1lXCIpO1xuICAgIC8vICAgICAgICAgc2V0VXNlcm5hbWVJc09LKHRydWUpO1xuICAgIC8vICAgICAgIH0gZWxzZSBpZiAocmVzcG9uZC5kYXRhLm1lc3NhZ2UgPT09IFwidGFrZW5cIikge1xuICAgIC8vICAgICAgICAgc2V0VXNlcm5hbWVJc09LKGZhbHNlKTtcbiAgICAvLyAgICAgICAgIHV0aWwuaW5wdXRFcnJvcihcbiAgICAvLyAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgIC8vICAgICAgICAgICBgJHtjdXJyZW50VXNlcm5hbWV9IGlzIGFscmVhZHkgdGFrZW4sIHBsZWFzZSBjaG9vc2UgYW5vdGhlciBvbmUuYFxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH07XG4gICAgdmFyIGNvbmZpcm1QYXNzd29yZFJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRDb25maXJtUGFzc3dvcmQoXCJcIik7XG4gICAgICAgIHNldENvbmZpcm1QYXNzd29yZERpc2FibGVkKHRydWUpO1xuICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlwiKTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZSBpbnB1dCBmb2N1cyBvdXQgZXZlbnRzXG4gICAgdmFyIG9uSW5wdXRGb2N1c091dCA9IGZ1bmN0aW9uICh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXROYW1lRXJyb3IoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNBbHBoYSh2YWx1ZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0TmFtZUVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbmFtZSB0aGF0IGNvbnRhaW5zIG9ubHkgbGV0dGVycy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmxlbih2YWx1ZSwgMywgMzApICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldE5hbWVFcnJvcihcIlBsZWFzZSBlbnRlciBhIG5hbWUgdGhhdCBpcyBiZXR3ZWVuIDMgYW5kIDMwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmxlbih2YWx1ZSwgMywgMzApICYmXG4gICAgICAgICAgICAgICAgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpICYmXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUuaXNBbHBoYSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXROYW1lRXJyb3IoXCJcIik7XG4gICAgICAgICAgICAgICAgc2V0TmFtZVN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJ1c2VybmFtZVwiKSB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wb3N0KFwiL3VzZXJuYW1lQXZhaWxhYmlsaXR5XCIsIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdmFsdWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbmQuZGF0YS5tZXNzYWdlID09PSBcIm9rXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXRpbC5pbnB1dE9LKFwidXNlcm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lRXJyb3IoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lSXNPSyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uZC5kYXRhLm1lc3NhZ2UgPT09IFwidGFrZW5cIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUVycm9yKFwiXCIuY29uY2F0KHZhbHVlLCBcIiBpcyBhbHJlYWR5IHRha2VuLCBwbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgdXNlcm5hbWUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5sZW4odmFsdWUsIDUsIDE1KSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgdXNlcm5hbWUgbmFtZSBiZXR3ZWVuIDUgYW5kIDE1IGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5pc1VzZXJuYW1lKHZhbHVlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0soZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgdXNlcm5hbWUgdGhhdCBjb250YWlucyBvbmx5IGxldHRlcnMsIG51bWJlcnMgYW5kIHVuZGVyc2NvcmUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWxFcnJvcihcIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNFbWFpbCh2YWx1ZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWxFcnJvcihcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1haWwodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0RW1haWxFcnJvcihcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQbGVhc2UgY2hvb3NlIGEgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJjb25maXJtUGFzc3dvcmRcIikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gaGFuZGxlIGlucHV0IGNoYW5nZSBldmVudHNcbiAgICB2YXIgb25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0UGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNIYXJkUGFzc3dvcmQodmFsdWUpICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQYXNzd29yZCBzaG91bGQgYXQgbGVhc3QgY29udGFpbiBhIGNhcGl0YWwgYW5kIGEgc21hbGwgbGV0dGVyLCBhbmQgYSBudW1iZXIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmxlbih2YWx1ZSwgOCwgMzApICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQYXNzd29yZCBzaG91bGQgY29udGFpbiA4IHRvIDMwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUubGVuKHZhbHVlLCA4LCAzMCkgJiZcbiAgICAgICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJjb25maXJtUGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChwYXNzd29yZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2ggdXAuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5pc0VtcHR5KGNvbmZpcm1QYXNzd29yZCkgJiYgcGFzc3dvcmQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJcIik7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25JbnB1dEZvY3VzT3V0KG5hbWUsIFwibmFtZVwiKTtcbiAgICAgICAgb25JbnB1dEZvY3VzT3V0KHVzZXJuYW1lLCBcInVzZXJuYW1lXCIpO1xuICAgICAgICBvbklucHV0Rm9jdXNPdXQoZW1haWwsIFwiZW1haWxcIik7XG4gICAgICAgIG9uSW5wdXRGb2N1c091dChwYXNzd29yZCwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgb25JbnB1dEZvY3VzT3V0KGNvbmZpcm1QYXNzd29yZCwgXCJjb25maXJtUGFzc3dvcmRcIik7XG4gICAgICAgIGlmICh1c2VybmFtZUlzT0sgJiZcbiAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KG5hbWUpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5pc0FscGhhKG5hbWUpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5sZW4obmFtZSwgMywgMzApICYmXG4gICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eSh1c2VybmFtZSkgJiZcbiAgICAgICAgICAgIHZhbGlkYXRlLmxlbih1c2VybmFtZSwgNSwgMTUpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5pc1VzZXJuYW1lKHVzZXJuYW1lKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUuaXNFbWFpbChlbWFpbCkgJiZcbiAgICAgICAgICAgIHZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHBhc3N3b3JkKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUubGVuKHBhc3N3b3JkLCA4LCAzMCkgJiZcbiAgICAgICAgICAgIHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB2YXIgdXNlciA9IHsgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsLCB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdChcIi9hcGkvc2VuZGNvZGVcIiwgdXNlcilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UobnVsbCk7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKFwidmVyaWZ5LWVtYWlsXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgPT09IFwiZW1haWwgaXMgaW4gdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZSwgeW91IGNhbiBsb2dpbiBvciByZXNldCB5b3VyIHBhc3N3b3JkIGluIHRoZSBsb2dpbiB0YWIuXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFJlbmRlciB0aGUgc3VibWl0IGJ1dHRvbiBmb3IgdGhlIHJlZ2lzdHJhdGlvbiBzZWN0aW9uXG4gICAgdmFyIHJlbmRlckJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cCBtYXJnaW4tYm90dG9tLTBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImEtOVwiIH0sIHsgY2hpbGRyZW46IFtcIkJ5IGNsaWNraW5nIFNpZ24gVXAsIHlvdSBhZ3JlZSB0byBvdXJcIiwgXCIgXCIsIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdGVybXMtb2YtdXNlXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJUZXJtc1wiIH0pKSwgXCIgXCIsIFwiYW5kXCIsIFwiIFwiLCBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiL3ByaXZhY3ktcG9saWN5XCIsIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJQcml2YWN5IFBvbGljeVwiIH0pKSwgXCIuXCJdIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tdG9wLTEtNSB1LWZsZXgtdGV4dC1jZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJibHVlXCIsIHNpemU6IFwiYmlnXCIsIHJvdW5kZWQ6IHRydWUsIG91dGxpbmVkOiB0cnVlLCB0eXBlOiBcInN1Ym1pdFwiLCBsb2FkaW5nOiBsb2FkaW5nIH0sIHsgY2hpbGRyZW46IFwiU2lnbiBVcFwiIH0pKSB9KSldIH0pKSk7XG4gICAgfTtcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLS1sb2dpbi1idG5cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuICAgIHZhciBFTDtcbiAgICBpZiAoc3RhdHVzID09PSBcInNob3ctZm9ybVwiKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJSZWdpc3RlciB8IFBhZ3NlclwiO1xuICAgICAgICBFTCA9IChfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fb3B0aW9uc1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX29wdGlvbnMtLXJlZ2lzdGVyLS1hY3RpdmVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyB9IH0sIHsgY2hpbGRyZW46IFwiUmVnaXN0ZXJcIiB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fb3B0aW9ucy0tbG9naW5cIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoXCIvbG9naW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogXCJsb2dpblwiIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoX19jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDcmVhdGUgeW91ciBhY2NvdW50XCIgfSkpLCBfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJzbWFsbC1jb3B5XCIgfSwgeyBjaGlsZHJlbjogXCJCeSBjcmVhdGluZyBhbiBhY2NvdW50IHlvdSB3aWxsIGJlIGFibGUgdG8gY3JlYXRlIHBhZ2VzLCBmYXZvcml0ZSBwYWdlcywgY29tbWVudCBvbiBvdGhlciBwYWdlcyBhbmQgbW9yZS5cIiB9KSksIF9qc3goQWxlcnQsIHsgbWVzc2FnZTogYWxlcnRNZXNzYWdlLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IGFsZXJ0VHlwZSB9KSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgbWV0aG9kOiBcInBvc3RcIiwgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwibmFtZVwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIkZ1bGwgTmFtZVwiLCBlcnJvcjogbmFtZUVycm9yLCBzdWNjZXNzOiBuYW1lU3VjY2VzcywgdmFsdWU6IG5hbWUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwidXNlcm5hbWVcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIlVzZXJuYW1lXCIsIGVycm9yOiB1c2VybmFtZUVycm9yLCBzdWNjZXNzOiB1c2VybmFtZUlzT0sgfHwgZmFsc2UsIHZhbHVlOiB1c2VybmFtZSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiLCBpZDogXCJlbWFpbFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJlbWFpbFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcImVtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIkVtYWlsXCIsIGVycm9yOiBlbWFpbEVycm9yLCBzdWNjZXNzOiBlbWFpbFN1Y2Nlc3MsIHZhbHVlOiBlbWFpbCB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiLCBpZDogXCJwYXNzd29yZFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcInBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKHZhbHVlLCBcInBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJQYXNzd29yZFwiLCBlcnJvcjogcGFzc3dvcmRFcnJvciwgc3VjY2VzczogcGFzc3dvcmRTdWNjZXNzLCB2YWx1ZTogcGFzc3dvcmQgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwiXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwiY29uZmlybVBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKHZhbHVlLCBcImNvbmZpcm1QYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbGFiZWw6IFwiQ29uZmlybSBQYXNzd29yZFwiLCBkaXNhYmxlZDogY29uZmlybVBhc3N3b3JkRGlzYWJsZWQsIGVycm9yOiBjb25maXJtUGFzc3dvcmRFcnJvciwgc3VjY2VzczogY29uZmlybVBhc3N3b3JkU3VjY2VzcywgdmFsdWU6IGNvbmZpcm1QYXNzd29yZCB9KSB9KSksIHJlbmRlckJ1dHRvbigpXSB9KSldIH0pKV0gfSkpIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJ2ZXJpZnktZW1haWxcIikge1xuICAgICAgICBFTCA9IChfanN4KFZlcmlmeUVtYWlsLCB7IG5hbWU6IG5hbWUsIHVzZXJuYW1lOiB1c2VybmFtZSwgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQsIG9uRW1haWxDaGFuZ2U6IGZ1bmN0aW9uIChuZXdFbWFpbCkge1xuICAgICAgICAgICAgICAgIHNldEVtYWlsKG5ld0VtYWlsKTtcbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICByZXR1cm4gRUw7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQWxlcnQsIE1vZGFsLCBMb2FkaW5nLCBJbnB1dCwgQnV0dG9uLCB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG52YXIgVmVyaWZ5RW1haWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgZmlyc3REaWdpdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgc2Vjb25kRGlnaXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHRoaXJkRGlnaXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIGZvdXJ0aERpZ2l0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBmaWZ0aERpZ2l0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFwiXCIpLCBmaXJzdERpZ2l0ID0gX2FbMF0sIHNldEZpcnN0RGlnaXQgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgc2Vjb25kRGlnaXQgPSBfYlswXSwgc2V0U2Vjb25kRGlnaXQgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShcIlwiKSwgdGhpcmREaWdpdCA9IF9jWzBdLCBzZXRUaGlyZERpZ2l0ID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoXCJcIiksIGZvdXJ0aERpZ2l0ID0gX2RbMF0sIHNldEZvdXJ0aERpZ2l0ID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoXCJcIiksIGZpZnRoRGlnaXQgPSBfZVswXSwgc2V0RmlmdGhEaWdpdCA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCBjaGFuZ2VkRW1haWwgPSBfZlswXSwgc2V0Q2hhbmdlZEVtYWlsID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX2dbMF0sIHNldExvYWRpbmcgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmdDaGFuZ2VFbWFpbCA9IF9oWzBdLCBzZXRMb2FkaW5nQ2hhbmdlRW1haWwgPSBfaFsxXTtcbiAgICB2YXIgX2ogPSB1c2VTdGF0ZShudWxsKSwgYWxlcnRNZXNzYWdlID0gX2pbMF0sIHNldEFsZXJ0TWVzc2FnZSA9IF9qWzFdO1xuICAgIHZhciBfayA9IHVzZVN0YXRlKFwic3VjY2Vzc1wiKSwgYWxlcnRUeXBlID0gX2tbMF0sIHNldEFsZXJ0VHlwZSA9IF9rWzFdO1xuICAgIHZhciBfbCA9IHVzZVN0YXRlKGZhbHNlKSwgY2hhbmdlRW1haWxNZGwgPSBfbFswXSwgc2V0Q2hhbmdlRW1haWxNZGwgPSBfbFsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0RpZ2l0cygpO1xuICAgIH0sIFtmaXJzdERpZ2l0LCBzZWNvbmREaWdpdCwgdGhpcmREaWdpdCwgZm91cnRoRGlnaXQsIGZpZnRoRGlnaXRdKTtcbiAgICAvLyBSZXNldCB0aGUgZGlnaXRzIGlucHV0c1xuICAgIHZhciByZXNldERpZ2l0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzZXRGaXJzdERpZ2l0KFwiXCIpO1xuICAgICAgICBzZXRTZWNvbmREaWdpdChcIlwiKTtcbiAgICAgICAgc2V0VGhpcmREaWdpdChcIlwiKTtcbiAgICAgICAgc2V0Rm91cnRoRGlnaXQoXCJcIik7XG4gICAgICAgIHNldEZpZnRoRGlnaXQoXCJcIik7XG4gICAgICAgIChfYSA9IGZpcnN0RGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgfTtcbiAgICB2YXIgcmVzZW5kQ29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KFwiL2FwaS9zZW5kY29kZVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHByb3BzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICAgICAgZW1haWw6IHByb3BzLmVtYWlsLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIk5ldyBjb2RlIGhhcyBiZWVuIHNlbnQgdG8geW91ciBlbWFpbC5cIik7XG4gICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgcmVzZXREaWdpdHMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICByZXNldERpZ2l0cygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBvblZlcmlmeUNvZGVTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHZhciBjb2RlID0gXCJcIi5jb25jYXQoZmlyc3REaWdpdCkuY29uY2F0KHNlY29uZERpZ2l0KS5jb25jYXQodGhpcmREaWdpdCkuY29uY2F0KGZvdXJ0aERpZ2l0KS5jb25jYXQoZmlmdGhEaWdpdCk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcIi9yZWdpc3Rlci92YWxpZGF0ZWNvZGVcIiwge1xuICAgICAgICAgICAgY29kZTogTnVtYmVyKGNvZGUpLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wb3N0KFwiL3JlZ2lzdGVyXCIsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9wcy51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZW1haWw6IHByb3BzLmVtYWlsLFxuICAgICAgICAgICAgICAgIGNvZGU6IE51bWJlcihjb2RlKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2hvbWVcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICByZXNldERpZ2l0cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlRoZSBjb2RlIGlzIGludmFsaWQsIG1ha2Ugc3VyZSB0aGF0IHlvdSBwdXQgdGhlIGV4YWN0IGNvZGUgd2UndmUgc2VudCB0byB5b3VyIGVtYWlsLiBZb3UgbWF5IHdhbnQgdG8gcmVzZW5kIHRoZSBjb2RlLlwiKTtcbiAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgcmVzZXREaWdpdHMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgb25DaGFuZ2VFbWFpbFN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TG9hZGluZ0NoYW5nZUVtYWlsKHRydWUpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvYXBpL3NlbmRjb2RlXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB1c2VybmFtZTogcHJvcHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbDogY2hhbmdlZEVtYWlsLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkVtYWlsQ2hhbmdlKGNoYW5nZWRFbWFpbCk7XG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJOZXcgY29kZSBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuXCIpO1xuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHNldENoYW5nZUVtYWlsTWRsKGZhbHNlKTtcbiAgICAgICAgICAgIHNldENoYW5nZWRFbWFpbChcIlwiKTtcbiAgICAgICAgICAgIHJlc2V0RGlnaXRzKCk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nQ2hhbmdlRW1haWwoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgPT09IFwiZW1haWwgaXMgaW4gdXNlXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJcIi5jb25jYXQoY2hhbmdlZEVtYWlsLCBcIiBpcyBhbHJlYWR5IGluIHVzZSwgcGxlYXNlIGxvZ2luIHdpdGggdGhpcyBlbWFpbCBvciBjaG9vc2UgYW5vdGhlciBvbmUuXCIpKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICBzZXRDaGFuZ2VFbWFpbE1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmVzZXREaWdpdHMoKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ2hhbmdlRW1haWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldENoYW5nZWRFbWFpbChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICByZXNldERpZ2l0cygpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdDaGFuZ2VFbWFpbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0Q2hhbmdlZEVtYWlsKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIE1vdmUgdG8gdGhlIHNwZWNpZmllZCBkaWdldFxuICAgIHZhciBtb3ZlRGlnaXQgPSBmdW5jdGlvbiAobnVtYmVyKSB7IH07XG4gICAgLy8gQ2hlY2sgaWYgYWxsIGRpZ2l0cyBhcmUgZW50ZXJlZFxuICAgIHZhciBjaGVja0RpZ2l0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZpcnN0RGlnaXQubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICBzZWNvbmREaWdpdC5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIHRoaXJkRGlnaXQubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICBmb3VydGhEaWdpdC5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIGZpZnRoRGlnaXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBvblZlcmlmeUNvZGVTdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gV2hlbiBhIGRpZ2l0IGlzIGNoYW5nZWRcbiAgICB2YXIgb25EaWdpdENoYW5nZWQgPSBmdW5jdGlvbiAodmFsdWVFbnRlcmVkLCBudW1iZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZUVudGVyZWQpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmaXJzdFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdERpZ2l0KHZhbHVlRW50ZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHNlY29uZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZERpZ2l0KHZhbHVlRW50ZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IHRoaXJkRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aGlyZFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRUaGlyZERpZ2l0KHZhbHVlRW50ZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgIChfYyA9IGZvdXJ0aERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZm91cnRoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldEZvdXJ0aERpZ2l0KHZhbHVlRW50ZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IGZpZnRoRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmaWZ0aFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRGaWZ0aERpZ2l0KHZhbHVlRW50ZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBXaGVuIHVzZXIgcHJlc3NlcyBhIGtleSBpbiBhIGRpZ2l0XG4gICAgdmFyIG9uRGlnaXRLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50LCBudW1iZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX207XG4gICAgICAgIC8vIEJhY2tzcGFjZSBrZXkgcHJlc3NlZFxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmlyc3RcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3REaWdpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmREaWdpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gZmlyc3REaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRoaXJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldFRoaXJkRGlnaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IHNlY29uZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZm91cnRoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldEZvdXJ0aERpZ2l0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAoX2MgPSB0aGlyZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmlmdGhcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlmdGhEaWdpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgKF9kID0gZm91cnRoRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIExlZnQgYXJyb3cga2V5IHByZXNzZWRcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWNvbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9lID0gZmlyc3REaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRoaXJkXCI6XG4gICAgICAgICAgICAgICAgICAgIChfZiA9IHNlY29uZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZm91cnRoXCI6XG4gICAgICAgICAgICAgICAgICAgIChfZyA9IHRoaXJkRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmaWZ0aFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2ggPSBmb3VydGhEaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2guZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmlnaHQgYXJyb3cga2V5IHByZXNzZWRcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmaXJzdFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2ogPSBzZWNvbmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ouZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2sgPSB0aGlyZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfay5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhpcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9sID0gZm91cnRoRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2wgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9sLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmb3VydGhcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9tID0gZmlmdGhEaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX20uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFJlbmRlciBidXR0b25zIGZvciB2ZXJpZnkgZW1haWwgcGFydFxuICAgIHZhciByZW5kZXJCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobG9hZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLXRvcC0zXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZUVtYWlsTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiBcImJ0bi10ZXh0IGJ0bi10ZXh0LXVuZGVybGluZWRcIiB9LCB7IGNoaWxkcmVuOiBcIkNoYW5nZSB5b3VyIGVtYWlsXCIgfSkpLCBfanN4KFwiYnJcIiwge30pLCBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlbmRDb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IFwiYnRuLXRleHQgYnRuLXRleHQtdW5kZXJsaW5lZFwiIH0sIHsgY2hpbGRyZW46IFwiUmVzZW5kIGNvZGVcIiB9KSldIH0pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLXRvcC0zXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goTG9hZGluZywge30pIH0pKSB9KSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4cyhNb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiQ2hhbmdlIHlvdXIgZW1haWxcIiwgb3BlbjogY2hhbmdlRW1haWxNZGwsIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlRW1haWxNZGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiUHV0IHlvdXIgZW1haWwgYWRkcmVzcyBoZXJlIGFuZCB3ZSB3aWxsIHNlbmQgYSBuZXcgY29kZSB0byB0aGF0LlwiIH0pLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUVtYWlsU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHJlcXVpcmVkOiB0cnVlLCB0eXBlOiBcImVtYWlsXCIsIHZhbHVlOiBjaGFuZ2VkRW1haWwsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VkRW1haWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbGFiZWw6IFwiRW1haWxcIiB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCByb3VuZGVkOiB0cnVlLCBjb2xvcjogXCJibHVlXCIsIGxvYWRpbmc6IGxvYWRpbmdDaGFuZ2VFbWFpbCB9LCB7IGNoaWxkcmVuOiBcIkNoYW5nZVwiIH0pKSB9KSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJWZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzXCIgfSkpLCBfanN4cyhcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic21hbGwtY29weVwiIH0sIHsgY2hpbGRyZW46IFtwcm9wcy5lbWFpbCwgXCIgLSBUaGUgbGFzdCBzdGVwIGlzIHRvIGVudGVyIHRoZSA1IGRpZ2l0cyBjb2RlIHdlIGhhdmUganVzdCBzZW50IHRvIHlvdXIgZW1haWwgdG8gdmVyaWZ5IHlvdXIgZW1haWwgYWRkcmVzcy5cIl0gfSkpLCBfanN4KEFsZXJ0LCB7IGFkZGl0aW9uYWxDbGFzc2VzOiBcInUtbWFyZ2luLWJvdHRvbS0yXCIsIG1lc3NhZ2U6IGFsZXJ0TWVzc2FnZSwgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHR5cGU6IGFsZXJ0VHlwZSB9KSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WZXJpZnlDb2RlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5wdXQtZGlnaXRzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGVsXCIsIGF1dG9Gb2N1czogdHJ1ZSwgdmFsdWU6IGZpcnN0RGlnaXQsIHJlZjogZmlyc3REaWdpdFJlZiwgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRLZXlEb3duKGV2ZW50LCBcImZpcnN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0Q2hhbmdlZChldmVudC50YXJnZXQudmFsdWUsIFwiZmlyc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRpc2FibGVkOiBsb2FkaW5nLCBtYXhMZW5ndGg6IDEgfSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGVsXCIsIHZhbHVlOiBzZWNvbmREaWdpdCwgcmVmOiBzZWNvbmREaWdpdFJlZiwgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRLZXlEb3duKGV2ZW50LCBcInNlY29uZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdENoYW5nZWQoZXZlbnQudGFyZ2V0LnZhbHVlLCBcInNlY29uZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGlzYWJsZWQ6IGxvYWRpbmcsIG1heExlbmd0aDogMSB9KSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZWxcIiwgdmFsdWU6IHRoaXJkRGlnaXQsIHJlZjogdGhpcmREaWdpdFJlZiwgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRLZXlEb3duKGV2ZW50LCBcInRoaXJkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0Q2hhbmdlZChldmVudC50YXJnZXQudmFsdWUsIFwidGhpcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRpc2FibGVkOiBsb2FkaW5nLCBtYXhMZW5ndGg6IDEgfSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGVsXCIsIHZhbHVlOiBmb3VydGhEaWdpdCwgcmVmOiBmb3VydGhEaWdpdFJlZiwgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRLZXlEb3duKGV2ZW50LCBcImZvdXJ0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdENoYW5nZWQoZXZlbnQudGFyZ2V0LnZhbHVlLCBcImZvdXJ0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGlzYWJsZWQ6IGxvYWRpbmcsIG1heExlbmd0aDogMSB9KSwgX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZWxcIiwgdmFsdWU6IGZpZnRoRGlnaXQsIHJlZjogZmlmdGhEaWdpdFJlZiwgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRLZXlEb3duKGV2ZW50LCBcImZpZnRoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0Q2hhbmdlZChldmVudC50YXJnZXQudmFsdWUsIFwiZmlmdGhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRpc2FibGVkOiBsb2FkaW5nLCBtYXhMZW5ndGg6IDEgfSldIH0pKSB9KSksIHJlbmRlckJ1dHRvbnMoKV0gfSkpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWZXJpZnlFbWFpbDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmQgZnJvbSBcIi4vRm9yZ290UGFzc3dvcmRcIjtcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3RlclwiO1xuZnVuY3Rpb24gQXV0aGVudGljYXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gKF9qc3goUm91dGVyLCB7IGNoaWxkcmVuOiBfanN4cyhSb3V0ZXMsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2xvZ2luXCIsIGVsZW1lbnQ6IF9qc3goTG9naW4sIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9mb3Jnb3QtcGFzc3dvcmRcIiwgZWxlbWVudDogX2pzeChGb3Jnb3RQYXNzd29yZCwge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL3JlZ2lzdGVyXCIsIGVsZW1lbnQ6IF9qc3goUmVnaXN0ZXIsIHt9KSB9KV0gfSkgfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRpb247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=