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
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/forgotpassword", {
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
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("/login", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUNTO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWSxpREFDUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQ1M7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQUssbUJBQW1CLDJCQUEyQixJQUFJLFdBQVcsc0RBQUksaUJBQWlCO0FBQzNHO0FBQ0EseUJBQXlCLDZDQUE2QyxJQUFJLCtCQUErQixJQUFJLHNEQUFJLFNBQVMsR0FBRyxzREFBSSxpQkFBaUI7QUFDbEo7QUFDQSx5QkFBeUIsNkNBQTZDLElBQUkseUJBQXlCLEtBQUs7QUFDeEc7QUFDQTtBQUNBLG9CQUFvQixzREFBSSxtQkFBbUIsMkJBQTJCLElBQUksVUFBVSxzREFBSSxtQkFBbUIsNkJBQTZCLElBQUksVUFBVSxzREFBSSxDQUFDLHFEQUFPLElBQUksR0FBRyxJQUFJO0FBQzdLO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLFVBQVUsV0FBVyx1REFBSyxDQUFDLG1EQUFLLGFBQWE7QUFDOUQ7QUFDQSxtQkFBbUIsSUFBSSxXQUFXLHNEQUFJLFFBQVEsOEVBQThFLEdBQUcsdURBQUssb0JBQW9CO0FBQ3hKO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQix5QkFBeUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUssSUFBSTtBQUN0SDtBQUNBLHFDQUFxQyxrQkFBa0IsR0FBRyxJQUFJLHNEQUFJLG1CQUFtQixnQ0FBZ0MsSUFBSSxVQUFVLHNEQUFJLENBQUMsb0RBQU0sYUFBYSwyRUFBMkUsSUFBSSxvQkFBb0IsSUFBSSxLQUFLLEtBQUssSUFBSSx1REFBSyxtQkFBbUIsbUJBQW1CLElBQUksV0FBVyxzREFBSSxrQkFBa0IsK0JBQStCLElBQUksdUNBQXVDLElBQUksdURBQUssaUJBQWlCLHlCQUF5QixJQUFJLHlJQUF5SSxJQUFJLHNEQUFJLENBQUMsbURBQUssSUFBSTtBQUM1bkI7QUFDQSx5QkFBeUIsbUJBQW1CLEdBQUcsdURBQUssb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQiwwQkFBMEIsSUFBSSxVQUFVLHVEQUFLLG1CQUFtQiwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLFlBQVk7QUFDM0w7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw2Q0FBNkMsbUNBQW1DLEdBQUcsc0RBQUksWUFBWTtBQUNuRztBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QyxtQ0FBbUMsR0FBRyxzREFBSSxZQUFZO0FBQ25HO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsNkNBQTZDLG1DQUFtQyxHQUFHLHNEQUFJLFlBQVk7QUFDbkc7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw2Q0FBNkMsbUNBQW1DLEdBQUcsc0RBQUksWUFBWTtBQUNuRztBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QyxtQ0FBbUMsSUFBSSxJQUFJLHNCQUFzQixLQUFLLEtBQUs7QUFDeEg7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdSb0M7QUFDWTtBQUMvQztBQUNrQjtBQUNaO0FBQ2xDO0FBQ0EsWUFBWSxzREFBSSxDQUFDLDJEQUFNLElBQUksVUFBVSx1REFBSyxDQUFDLG9EQUFNLElBQUksV0FBVyxzREFBSSxDQUFDLG1EQUFLLElBQUkseUJBQXlCLHNEQUFJLENBQUMsOENBQUssSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxtREFBSyxJQUFJLG1DQUFtQyxzREFBSSxDQUFDLHVEQUFjLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsbURBQUssSUFBSSw0QkFBNEIsc0RBQUksQ0FBQyxpREFBUSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQzlRO0FBQ0EsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvYXV0aGVudGljYXRpb24vRm9yZ290UGFzc3dvcmQudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2F1dGhlbnRpY2F0aW9uL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9hdXRoZW50aWNhdGlvbi9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3MvYXV0aGVudGljYXRpb24vVmVyaWZ5RW1haWwudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL2F1dGhlbnRpY2F0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHZhbGlkYXRlLCB1dGlsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbnZhciBGb3Jnb3RQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYVswXSwgc2V0TG9hZGluZyA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZCA9IF9iWzBdLCBzZXRQYXNzd29yZCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgcGFzc3dvcmRTdWNjZXNzID0gX2NbMF0sIHNldFBhc3N3b3JkU3VjY2VzcyA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZEVycm9yID0gX2RbMF0sIHNldFBhc3N3b3JkRXJyb3IgPSBfZFsxXTtcbiAgICB2YXIgX2UgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZVswXSwgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZSh0cnVlKSwgY29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZlswXSwgc2V0Q29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1QYXNzd29yZFN1Y2Nlc3MgPSBfZ1swXSwgc2V0Q29uZmlybVBhc3N3b3JkU3VjY2VzcyA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtUGFzc3dvcmQgPSBfaFswXSwgc2V0Q29uZmlybVBhc3N3b3JkID0gX2hbMV07XG4gICAgdmFyIF9qID0gdXNlU3RhdGUoXCJzaG93LWZvcm1cIiksIHN0YXR1cyA9IF9qWzBdLCBzZXRTdGF0dXMgPSBfalsxXTtcbiAgICB2YXIgX2sgPSB1c2VTdGF0ZShcIlwiKSwgbWVzc2FnZSA9IF9rWzBdLCBzZXRNZXNzYWdlID0gX2tbMV07XG4gICAgdmFyIF9sID0gdXNlU3RhdGUoZmFsc2UpLCBidG5EaXNhYmxlZCA9IF9sWzBdLCBzZXRCdG5EaXNhYmxlZCA9IF9sWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrQWxsKCk7XG4gICAgfSwgW3Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmRdKTtcbiAgICB2YXIgY2hlY2tBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZChwYXNzd29yZCkgJiZcbiAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KHBhc3N3b3JkKSAmJlxuICAgICAgICAgICAgcGFzc3dvcmQgPT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgc2V0QnRuRGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0QnRuRGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjb25maXJtUGFzc3dvcmRSZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKFwiXCIpO1xuICAgICAgICBzZXRDb25maXJtUGFzc3dvcmREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJcIik7XG4gICAgfTtcbiAgICB2YXIgb25JbnB1dEZvY3VzT3V0ID0gZnVuY3Rpb24gKHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGxlYXNlIGNob29zZSBhIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRSZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiY29uZmlybVBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGxlYXNlIGNob29zZSBhIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkTmFtZSkge1xuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHZhbHVlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4gYSBjYXBpdGFsIGxldHRlciwgbGV0dGVycyBhbmQgbnVtYmVycy5cIik7XG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUubGVuKHZhbHVlLCA4LCAzMCkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlBhc3N3b3JkIHNob3VsZCBjb250YWluIDggdG8gMzAgY2hhcmFjdGVycy5cIik7XG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkUmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5sZW4odmFsdWUsIDgsIDMwKSAmJlxuICAgICAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSAmJlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcImNvbmZpcm1QYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCB1cC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzRW1wdHkoY29uZmlybVBhc3N3b3JkKSAmJiBwYXNzd29yZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRDb25maXJtUGFzc3dvcmRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvYXBpL3Jlc2V0cGFzc3dvcmRcIiwge1xuICAgICAgICAgICAgdXNlcklkOiB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcImlcIiksXG4gICAgICAgICAgICB0b2tlbjogeyBjb2RlOiB1dGlsLmdldFBhcmFtZXRlckJ5TmFtZShcInRcIikgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gXCJpbnZhbGlkIGxpbmtcIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJUaGUgbGluayB5b3UndmUgY2xpY2tlZCBvbiBpcyBub3QgdmFsaWQsIG1ha2Ugc3VyZSB0aGF0IHlvdSBvcGVuIHRoZSBleGFjdCBsaW5rIHdlJ3ZlIHNlbnQgdG8geW91ciBlbWFpbC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gXCJsaW5rIGV4cGlyZWRcIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJUaGUgbGluayB5b3UndmUgY2xpY2tlZCBvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIHJlcXVlc3QgZm9yIGEgcGFzc3dvcmQgcmVzZXQgb25jZSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIEVMO1xuICAgIGlmIChzdGF0dXMgPT09IFwic2hvdy1mb3JtXCIpIHtcbiAgICAgICAgdmFyIHRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlRWwuaW5uZXJIVE1MID0gXCJSZXNldCBQYXNzd29yZCB8IFBhZ3NlclwiO1xuICAgICAgICBFTCA9IChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJoZWFkaW5nLXRlcnRpYXJ5XCIgfSwgeyBjaGlsZHJlbjogXCJDcmVhdGUgYSBuZXcgcGFzc3dvcmRcIiB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNtYWxsLWNvcHlcIiB9LCB7IGNoaWxkcmVuOiBcIkFmdGVyIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLCB5b3Ugd2lsbCBwcm9tcHRlZCB0byBsb2dpbiB3aXRoIHlvdXIgbmV3IHBhc3N3b3JkLlwiIH0pKSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgbWV0aG9kOiBcInBvc3RcIiwgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHBhc3N3b3JkLCBlcnJvcjogcGFzc3dvcmRFcnJvciwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZSh2YWx1ZSwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc3VjY2VzczogcGFzc3dvcmRTdWNjZXNzLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcInBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJQYXNzd29yZFwiIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIGVycm9yOiBjb25maXJtUGFzc3dvcmRFcnJvciwgdmFsdWU6IGNvbmZpcm1QYXNzd29yZCwgc3VjY2VzczogY29uZmlybVBhc3N3b3JkU3VjY2Vzcywgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZSh2YWx1ZSwgXCJjb25maXJtUGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Rm9jdXNPdXQodmFsdWUsIFwiY29uZmlybVBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogY29uZmlybVBhc3N3b3JkRGlzYWJsZWQsIGxhYmVsOiBcIkNvbmZpcm0gUGFzc3dvcmRcIiB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgdS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdHlwZTogXCJzdWJtaXRcIiwgbG9hZGluZzogbG9hZGluZywgcm91bmRlZDogdHJ1ZSwgZGlzYWJsZWQ6IGJ0bkRpc2FibGVkLCBjb2xvcjogXCJibHVlXCIgfSwgeyBjaGlsZHJlbjogXCJSZXNldFwiIH0pKSB9KSldIH0pKV0gfSkpKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIEVMID0gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWlkZGxlLWJveCBtaWRkbGUtYm94LS1hYnNvbHV0ZSBtaWRkbGUtYm94LS1lcnJvclwiIH0sIHsgY2hpbGRyZW46IG1lc3NhZ2UgfSkpKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgRUwgPSAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtaWRkbGUtYm94IG1pZGRsZS1ib3gtLWFic29sdXRlIG1pZGRsZS1ib3gtLXN1Y2Nlc3NcIiB9LCB7IGNoaWxkcmVuOiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZXNldCB5b3VyIHBhc3N3b3JkLiBOb3cgeW91IGNhbiBnbyBhaGVhZCBhbmQgbG9naW4gdG8geW91ciBhY2NvdW50IHdpdGggeW91ciBuZXcgcGFzc3dvcmQuXCIgfSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIEVMO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQWxlcnQsIE1vZGFsLCBCdXR0b24sIElucHV0LCB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG52YXIgTG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFwiXCIpLCBlbWFpbCA9IF9iWzBdLCBzZXRFbWFpbCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKFwiXCIpLCBwYXNzd29yZCA9IF9jWzBdLCBzZXRQYXNzd29yZCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBhbGVydE1lc3NhZ2UgPSBfZFswXSwgc2V0QWxlcnRNZXNzYWdlID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoXCJzdWNjZXNzXCIpLCBhbGVydFR5cGUgPSBfZVswXSwgc2V0QWxlcnRUeXBlID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nID0gX2ZbMF0sIHNldExvYWRpbmcgPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmdGb3Jnb3RQYXNzd29yZCA9IF9nWzBdLCBzZXRMb2FkaW5nRm9yZ290UGFzc3dvcmQgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VTdGF0ZShmYWxzZSksIGZvcmdvdFBhc3NNZGwgPSBfaFswXSwgc2V0Rm9yZ290UGFzc01kbCA9IF9oWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlZGlyZWN0ZWRGcm9tID0gdXRpbC5nZXRQYXJhbWV0ZXJCeU5hbWUoXCJyZWRpcmVjdGVkXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgc3dpdGNoIChyZWRpcmVjdGVkRnJvbSkge1xuICAgICAgICAgICAgY2FzZSBcIm5ldy1wYWdlXCI6XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiUGxlYXNlIGxvZ2luIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gY3JlYXRlIGEgbmV3IHBhZ2UuXCIpO1xuICAgICAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcIm5vcm1hbGxcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5cIjpcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJQbGVhc2UgbG9naW4gdG8gYWNjZXNzIHRoZSBhZG1pbiBhcmVhLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJub3JtYWxsXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFjY2Vzc1wiOlxuICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlBsZWFzZSBsb2dpbiB0byBwcm9jZWVkLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJub3JtYWxsXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8vIENhbGwgc2VydmVyIHRvIHNlbmQgYW4gZW1haWwgdG8gcmVzZXQgdGhlIHBhc3N3b3JkXG4gICAgdmFyIG9uRm9yZ290UGFzc3dvcmRTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmdGb3Jnb3RQYXNzd29yZCh0cnVlKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KFwiL2FwaS9mb3Jnb3RwYXNzd29yZFwiLCB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIkluc3RydWN0aW9ucyBvbiBob3cgdG8gcmVzZXQgeW91ciBwYXNzd29yZCB3ZXJlIHNlbnQgdG8gXCIuY29uY2F0KGVtYWlsKSk7XG4gICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgc2V0Rm9yZ290UGFzc01kbChmYWxzZSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRm9yZ290UGFzc3dvcmQoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiTm8gb25lIHdpdGggdGhlIGVtYWlsIFwiLmNvbmNhdChlbWFpbCwgXCIgd2FzIGZvdW5kZWQuXCIpKTtcbiAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgc2V0Rm9yZ290UGFzc01kbChmYWxzZSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nRm9yZ290UGFzc3dvcmQoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBvbkZvcm1TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcIi9sb2dpblwiLCB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2hvbWVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiSW5jb3JyZWN0IHBhc3N3b3JkIG9yIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIHJlbmRlckJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgdS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdHlwZTogXCJzdWJtaXRcIiwgcm91bmRlZDogdHJ1ZSwgb3V0bGluZWQ6IHRydWUsIHNpemU6IFwiYmlnXCIsIGNvbG9yOiBcImJsdWVcIiwgbG9hZGluZzogbG9hZGluZyB9LCB7IGNoaWxkcmVuOiBcIlNpZ24gSW5cIiB9KSkgfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9yZ290UGFzc01kbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiBcImJ1dHRvbi10ZXh0XCIgfSwgeyBjaGlsZHJlbjogXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIiB9KSldIH0pKTtcbiAgICB9O1xuICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtLWxvZ2luLWJ0blwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiTG9naW4gfCBQYWdzZXJcIjtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoTW9kYWwsIF9fYXNzaWduKHsgaGVhZGVyOiBcIlJlc2V0IHlvdXIgcGFzc3dvcmRcIiwgb3BlbjogZm9yZ290UGFzc01kbCwgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGb3Jnb3RQYXNzTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIlB1dCB5b3VyIGVtYWlsIGFkZHJlc3MgaGVyZSBhbmQgd2UnbGwgc2VuZCB5b3UgdGhlIGluc3RydWN0aW9ucy5cIiB9KSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3Jnb3RQYXNzd29yZFN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcImVtYWlsXCIsIGxhYmVsOiBcIkVtYWlsXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZTogZW1haWwsIHJlcXVpcmVkOiB0cnVlIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1yaWdodFwiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIHJvdW5kZWQ6IHRydWUsIGNvbG9yOiBcImJsdWVcIiwgbG9hZGluZzogbG9hZGluZ0ZvcmdvdFBhc3N3b3JkIH0sIHsgY2hpbGRyZW46IFwiU2VuZFwiIH0pKSB9KSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX29wdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoX19vcHRpb25zLS1yZWdpc3RlclwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShcIi9yZWdpc3RlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBcIlJlZ2lzdGVyXCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX29wdGlvbnMtLWxvZ2luLS1hY3RpdmVcIiB9LCB7IGNoaWxkcmVuOiBcImxvZ2luXCIgfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX2NvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkxvZyBpbnRvIHlvdXIgYWNjb3VudFwiIH0pKSwgX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNtYWxsLWNvcHlcIiB9LCB7IGNoaWxkcmVuOiBbXCJXZSBhcmUgaGFwcHkgdG8gc2VlIHlvdSBsb2dnaW5nIGluISBMb2dpbiB0byBtYW5hZ2UgYWxsIG9mIHlvdXIgcGFnZXMuIFlvdSBjYW4gcmVzZXQgeW91ciBwYXNzd29yZCBpZiB5b3UgXCIsIFwiZG9uJ3QgXCIsIFwiIHJlbWVtYmVyIGl0LlwiXSB9KSksIF9qc3goQWxlcnQsIHsgbWVzc2FnZTogYWxlcnRNZXNzYWdlIHx8IHVuZGVmaW5lZCwgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0eXBlOiBhbGVydFR5cGUgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IG1ldGhvZDogXCJwb3N0XCIsIG9uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvcm1TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJFbWFpbCBBZGRyZXNzXCIsIHZhbHVlOiBlbWFpbCwgcmVxdWlyZWQ6IHRydWUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJZb3VyIFBhc3N3b3JkXCIsIHZhbHVlOiBwYXNzd29yZCB9KSB9KSksIHJlbmRlckJ1dHRvbnMoKV0gfSkpXSB9KSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCBWZXJpZnlFbWFpbCBmcm9tIFwiLi9WZXJpZnlFbWFpbFwiO1xudmFyIFJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShcIlwiKSwgbmFtZSA9IF9iWzBdLCBzZXROYW1lID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIG5hbWVFcnJvciA9IF9jWzBdLCBzZXROYW1lRXJyb3IgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZShmYWxzZSksIG5hbWVTdWNjZXNzID0gX2RbMF0sIHNldE5hbWVTdWNjZXNzID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoXCJcIiksIHVzZXJuYW1lID0gX2VbMF0sIHNldFVzZXJuYW1lID0gX2VbMV07XG4gICAgdmFyIF9mID0gdXNlU3RhdGUoXCJcIiksIHVzZXJuYW1lRXJyb3IgPSBfZlswXSwgc2V0VXNlcm5hbWVFcnJvciA9IF9mWzFdO1xuICAgIHZhciBfZyA9IHVzZVN0YXRlKFwiXCIpLCBlbWFpbCA9IF9nWzBdLCBzZXRFbWFpbCA9IF9nWzFdO1xuICAgIHZhciBfaCA9IHVzZVN0YXRlKFwiXCIpLCBlbWFpbEVycm9yID0gX2hbMF0sIHNldEVtYWlsRXJyb3IgPSBfaFsxXTtcbiAgICB2YXIgX2ogPSB1c2VTdGF0ZShmYWxzZSksIGVtYWlsU3VjY2VzcyA9IF9qWzBdLCBzZXRFbWFpbFN1Y2Nlc3MgPSBfalsxXTtcbiAgICB2YXIgX2sgPSB1c2VTdGF0ZShcIlwiKSwgcGFzc3dvcmQgPSBfa1swXSwgc2V0UGFzc3dvcmQgPSBfa1sxXTtcbiAgICB2YXIgX2wgPSB1c2VTdGF0ZShcIlwiKSwgcGFzc3dvcmRFcnJvciA9IF9sWzBdLCBzZXRQYXNzd29yZEVycm9yID0gX2xbMV07XG4gICAgdmFyIF9tID0gdXNlU3RhdGUoZmFsc2UpLCBwYXNzd29yZFN1Y2Nlc3MgPSBfbVswXSwgc2V0UGFzc3dvcmRTdWNjZXNzID0gX21bMV07XG4gICAgdmFyIF9vID0gdXNlU3RhdGUoXCJcIiksIGNvbmZpcm1QYXNzd29yZCA9IF9vWzBdLCBzZXRDb25maXJtUGFzc3dvcmQgPSBfb1sxXTtcbiAgICB2YXIgX3AgPSB1c2VTdGF0ZSh0cnVlKSwgY29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfcFswXSwgc2V0Q29uZmlybVBhc3N3b3JkRGlzYWJsZWQgPSBfcFsxXTtcbiAgICB2YXIgX3EgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybVBhc3N3b3JkRXJyb3IgPSBfcVswXSwgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IgPSBfcVsxXTtcbiAgICB2YXIgX3IgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1QYXNzd29yZFN1Y2Nlc3MgPSBfclswXSwgc2V0Q29uZmlybVBhc3N3b3JkU3VjY2VzcyA9IF9yWzFdO1xuICAgIHZhciBfcyA9IHVzZVN0YXRlKG51bGwpLCB1c2VybmFtZUlzT0sgPSBfc1swXSwgc2V0VXNlcm5hbWVJc09LID0gX3NbMV07XG4gICAgdmFyIF90ID0gdXNlU3RhdGUoXCJzaG93LWZvcm1cIiksIHN0YXR1cyA9IF90WzBdLCBzZXRTdGF0dXMgPSBfdFsxXTtcbiAgICB2YXIgX3UgPSB1c2VTdGF0ZShudWxsKSwgYWxlcnRNZXNzYWdlID0gX3VbMF0sIHNldEFsZXJ0TWVzc2FnZSA9IF91WzFdO1xuICAgIHZhciBfdiA9IHVzZVN0YXRlKFwic3VjY2Vzc1wiKSwgYWxlcnRUeXBlID0gX3ZbMF0sIHNldEFsZXJ0VHlwZSA9IF92WzFdO1xuICAgIHZhciBfdyA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF93WzBdLCBzZXRMb2FkaW5nID0gX3dbMV07XG4gICAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICAvLyBjb25zdCBvblVzZXJuYW1lQ2hhbmdlID0gKCkgPT4ge1xuICAgIC8vICAgdmFyIGN1cnJlbnRVc2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIC8vICAgYXhpb3NcbiAgICAvLyAgICAgLnBvc3QoYC91c2VybmFtZUF2YWlsYWJpbGl0eWAsIHtcbiAgICAvLyAgICAgICB1c2VybmFtZTogY3VycmVudFVzZXJuYW1lLFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbigocmVzcG9uZCkgPT4ge1xuICAgIC8vICAgICAgIGlmIChyZXNwb25kLmRhdGEubWVzc2FnZSA9PT0gXCJva1wiKSB7XG4gICAgLy8gICAgICAgICB1dGlsLmlucHV0T0soXCJ1c2VybmFtZVwiKTtcbiAgICAvLyAgICAgICAgIHNldFVzZXJuYW1lSXNPSyh0cnVlKTtcbiAgICAvLyAgICAgICB9IGVsc2UgaWYgKHJlc3BvbmQuZGF0YS5tZXNzYWdlID09PSBcInRha2VuXCIpIHtcbiAgICAvLyAgICAgICAgIHNldFVzZXJuYW1lSXNPSyhmYWxzZSk7XG4gICAgLy8gICAgICAgICB1dGlsLmlucHV0RXJyb3IoXG4gICAgLy8gICAgICAgICAgIFwidXNlcm5hbWVcIixcbiAgICAvLyAgICAgICAgICAgYCR7Y3VycmVudFVzZXJuYW1lfSBpcyBhbHJlYWR5IHRha2VuLCBwbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLmBcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9O1xuICAgIHZhciBjb25maXJtUGFzc3dvcmRSZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKFwiXCIpO1xuICAgICAgICBzZXRDb25maXJtUGFzc3dvcmREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJcIik7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgaW5wdXQgZm9jdXMgb3V0IGV2ZW50c1xuICAgIHZhciBvbklucHV0Rm9jdXNPdXQgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkTmFtZSkge1xuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0TmFtZUVycm9yKFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzQWxwaGEodmFsdWUpICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldE5hbWVFcnJvcihcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG5hbWUgdGhhdCBjb250YWlucyBvbmx5IGxldHRlcnMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5sZW4odmFsdWUsIDMsIDMwKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXROYW1lRXJyb3IoXCJQbGVhc2UgZW50ZXIgYSBuYW1lIHRoYXQgaXMgYmV0d2VlbiAzIGFuZCAzMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5sZW4odmFsdWUsIDMsIDMwKSAmJlxuICAgICAgICAgICAgICAgICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSAmJlxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmlzQWxwaGEodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0TmFtZUVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldE5hbWVTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwidXNlcm5hbWVcIikge1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdChcIi91c2VybmFtZUF2YWlsYWJpbGl0eVwiLCB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHZhbHVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uZCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25kLmRhdGEubWVzc2FnZSA9PT0gXCJva1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHV0aWwuaW5wdXRPSyhcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlzT0sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbmQuZGF0YS5tZXNzYWdlID09PSBcInRha2VuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVJc09LKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVFcnJvcihcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgaXMgYWxyZWFkeSB0YWtlbiwgcGxlYXNlIGNob29zZSBhbm90aGVyIG9uZS5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVJc09LKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUVycm9yKFwiUGxlYXNlIGNob29zZSBhIHVzZXJuYW1lLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUubGVuKHZhbHVlLCA1LCAxNSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVJc09LKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUVycm9yKFwiUGxlYXNlIGNob29zZSBhIHVzZXJuYW1lIG5hbWUgYmV0d2VlbiA1IGFuZCAxNSBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNVc2VybmFtZSh2YWx1ZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVJc09LKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUVycm9yKFwiUGxlYXNlIGNob29zZSBhIHVzZXJuYW1lIHRoYXQgY29udGFpbnMgb25seSBsZXR0ZXJzLCBudW1iZXJzIGFuZCB1bmRlcnNjb3JlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcImVtYWlsXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldEVtYWlsRXJyb3IoXCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzRW1haWwodmFsdWUpICYmICF2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldEVtYWlsRXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtYWlsKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldEVtYWlsRXJyb3IoXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGxlYXNlIGNob29zZSBhIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRSZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiY29uZmlybVBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZS5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGhhbmRsZSBpbnB1dCBjaGFuZ2UgZXZlbnRzXG4gICAgdmFyIG9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkTmFtZSkge1xuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0KCk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzSGFyZFBhc3N3b3JkKHZhbHVlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGFzc3dvcmQgc2hvdWxkIGF0IGxlYXN0IGNvbnRhaW4gYSBjYXBpdGFsIGFuZCBhIHNtYWxsIGxldHRlciwgYW5kIGEgbnVtYmVyLlwiKTtcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRSZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5sZW4odmFsdWUsIDgsIDMwKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwiUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4gOCB0byAzMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRSZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlLmxlbih2YWx1ZSwgOCwgMzApICYmXG4gICAgICAgICAgICAgICAgIXZhbGlkYXRlLmlzRW1wdHkodmFsdWUpICYmXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUuaXNIYXJkUGFzc3dvcmQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZE5hbWUgPT09IFwiY29uZmlybVBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkRXJyb3IoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoIHVwLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNFbXB0eShjb25maXJtUGFzc3dvcmQpICYmIHBhc3N3b3JkID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZEVycm9yKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldENvbmZpcm1QYXNzd29yZFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvbkZvcm1TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uSW5wdXRGb2N1c091dChuYW1lLCBcIm5hbWVcIik7XG4gICAgICAgIG9uSW5wdXRGb2N1c091dCh1c2VybmFtZSwgXCJ1c2VybmFtZVwiKTtcbiAgICAgICAgb25JbnB1dEZvY3VzT3V0KGVtYWlsLCBcImVtYWlsXCIpO1xuICAgICAgICBvbklucHV0Rm9jdXNPdXQocGFzc3dvcmQsIFwicGFzc3dvcmRcIik7XG4gICAgICAgIG9uSW5wdXRGb2N1c091dChjb25maXJtUGFzc3dvcmQsIFwiY29uZmlybVBhc3N3b3JkXCIpO1xuICAgICAgICBpZiAodXNlcm5hbWVJc09LICYmXG4gICAgICAgICAgICAhdmFsaWRhdGUuaXNFbXB0eShuYW1lKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUuaXNBbHBoYShuYW1lKSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUubGVuKG5hbWUsIDMsIDMwKSAmJlxuICAgICAgICAgICAgIXZhbGlkYXRlLmlzRW1wdHkodXNlcm5hbWUpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5sZW4odXNlcm5hbWUsIDUsIDE1KSAmJlxuICAgICAgICAgICAgdmFsaWRhdGUuaXNVc2VybmFtZSh1c2VybmFtZSkgJiZcbiAgICAgICAgICAgIHZhbGlkYXRlLmlzRW1haWwoZW1haWwpICYmXG4gICAgICAgICAgICB2YWxpZGF0ZS5pc0hhcmRQYXNzd29yZChwYXNzd29yZCkgJiZcbiAgICAgICAgICAgIHZhbGlkYXRlLmxlbihwYXNzd29yZCwgOCwgMzApICYmXG4gICAgICAgICAgICBwYXNzd29yZCA9PT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgdmFyIHVzZXIgPSB7IG5hbWU6IG5hbWUsIGVtYWlsOiBlbWFpbCwgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBvc3QoXCIvYXBpL3NlbmRjb2RlXCIsIHVzZXIpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKG51bGwpO1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cyhcInZlcmlmeS1lbWFpbFwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yID09PSBcImVtYWlsIGlzIGluIHVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlRoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UsIHlvdSBjYW4gbG9naW4gb3IgcmVzZXQgeW91ciBwYXNzd29yZCBpbiB0aGUgbG9naW4gdGFiLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSZW5kZXIgdGhlIHN1Ym1pdCBidXR0b24gZm9yIHRoZSByZWdpc3RyYXRpb24gc2VjdGlvblxuICAgIHZhciByZW5kZXJCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXAgbWFyZ2luLWJvdHRvbS0wXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTlcIiB9LCB7IGNoaWxkcmVuOiBbXCJCeSBjbGlja2luZyBTaWduIFVwLCB5b3UgYWdyZWUgdG8gb3VyXCIsIFwiIFwiLCBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiL3Rlcm1zLW9mLXVzZVwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzTmFtZTogXCJidXR0b24tdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwiVGVybXNcIiB9KSksIFwiIFwiLCBcImFuZFwiLCBcIiBcIiwgX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcIi9wcml2YWN5LXBvbGljeVwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzTmFtZTogXCJidXR0b24tdGV4dFwiIH0sIHsgY2hpbGRyZW46IFwiUHJpdmFjeSBQb2xpY3lcIiB9KSksIFwiLlwiXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLXRvcC0xLTUgdS1mbGV4LXRleHQtY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBzaXplOiBcImJpZ1wiLCByb3VuZGVkOiB0cnVlLCBvdXRsaW5lZDogdHJ1ZSwgdHlwZTogXCJzdWJtaXRcIiwgbG9hZGluZzogbG9hZGluZyB9LCB7IGNoaWxkcmVuOiBcIlNpZ24gVXBcIiB9KSkgfSkpXSB9KSkpO1xuICAgIH07XG4gICAgKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy0tbG9naW4tYnRuXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgICB2YXIgRUw7XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJzaG93LWZvcm1cIikge1xuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIik7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IFwiUmVnaXN0ZXIgfCBQYWdzZXJcIjtcbiAgICAgICAgRUwgPSAoX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX29wdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhdXRoX19vcHRpb25zLS1yZWdpc3Rlci0tYWN0aXZlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgfSB9LCB7IGNoaWxkcmVuOiBcIlJlZ2lzdGVyXCIgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImF1dGhfX29wdGlvbnMtLWxvZ2luXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKFwiL2xvZ2luXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwibG9naW5cIiB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aF9fY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiQ3JlYXRlIHlvdXIgYWNjb3VudFwiIH0pKSwgX2pzeChcInBcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwic21hbGwtY29weVwiIH0sIHsgY2hpbGRyZW46IFwiQnkgY3JlYXRpbmcgYW4gYWNjb3VudCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGNyZWF0ZSBwYWdlcywgZmF2b3JpdGUgcGFnZXMsIGNvbW1lbnQgb24gb3RoZXIgcGFnZXMgYW5kIG1vcmUuXCIgfSkpLCBfanN4KEFsZXJ0LCB7IG1lc3NhZ2U6IGFsZXJ0TWVzc2FnZSwgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0eXBlOiBhbGVydFR5cGUgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IG1ldGhvZDogXCJwb3N0XCIsIG9uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvcm1TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIsIGlkOiBcIm5hbWVcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJGdWxsIE5hbWVcIiwgZXJyb3I6IG5hbWVFcnJvciwgc3VjY2VzczogbmFtZVN1Y2Nlc3MsIHZhbHVlOiBuYW1lIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIsIGlkOiBcInVzZXJuYW1lXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgb25CbHVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRGb2N1c091dCh2YWx1ZSwgXCJ1c2VybmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJVc2VybmFtZVwiLCBlcnJvcjogdXNlcm5hbWVFcnJvciwgc3VjY2VzczogdXNlcm5hbWVJc09LIHx8IGZhbHNlLCB2YWx1ZTogdXNlcm5hbWUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwiZW1haWxcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwiZW1haWxcIiwgb25CbHVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRGb2N1c091dCh2YWx1ZSwgXCJlbWFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBsYWJlbDogXCJFbWFpbFwiLCBlcnJvcjogZW1haWxFcnJvciwgc3VjY2VzczogZW1haWxTdWNjZXNzLCB2YWx1ZTogZW1haWwgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiwgaWQ6IFwicGFzc3dvcmRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KElucHV0LCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgb25CbHVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRGb2N1c091dCh2YWx1ZSwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZSh2YWx1ZSwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbGFiZWw6IFwiUGFzc3dvcmRcIiwgZXJyb3I6IHBhc3N3b3JkRXJyb3IsIHN1Y2Nlc3M6IHBhc3N3b3JkU3VjY2VzcywgdmFsdWU6IHBhc3N3b3JkIH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIsIGlkOiBcIlwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBvbkJsdXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dEZvY3VzT3V0KHZhbHVlLCBcImNvbmZpcm1QYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZSh2YWx1ZSwgXCJjb25maXJtUGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIkNvbmZpcm0gUGFzc3dvcmRcIiwgZGlzYWJsZWQ6IGNvbmZpcm1QYXNzd29yZERpc2FibGVkLCBlcnJvcjogY29uZmlybVBhc3N3b3JkRXJyb3IsIHN1Y2Nlc3M6IGNvbmZpcm1QYXNzd29yZFN1Y2Nlc3MsIHZhbHVlOiBjb25maXJtUGFzc3dvcmQgfSkgfSkpLCByZW5kZXJCdXR0b24oKV0gfSkpXSB9KSldIH0pKSB9KSk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IFwidmVyaWZ5LWVtYWlsXCIpIHtcbiAgICAgICAgRUwgPSAoX2pzeChWZXJpZnlFbWFpbCwgeyBuYW1lOiBuYW1lLCB1c2VybmFtZTogdXNlcm5hbWUsIGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkLCBvbkVtYWlsQ2hhbmdlOiBmdW5jdGlvbiAobmV3RW1haWwpIHtcbiAgICAgICAgICAgICAgICBzZXRFbWFpbChuZXdFbWFpbCk7XG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIEVMO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFsZXJ0LCBNb2RhbCwgTG9hZGluZywgSW5wdXQsIEJ1dHRvbiwgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xudmFyIFZlcmlmeUVtYWlsID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGZpcnN0RGlnaXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHNlY29uZERpZ2l0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciB0aGlyZERpZ2l0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBmb3VydGhEaWdpdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgZmlmdGhEaWdpdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgZmlyc3REaWdpdCA9IF9hWzBdLCBzZXRGaXJzdERpZ2l0ID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoXCJcIiksIHNlY29uZERpZ2l0ID0gX2JbMF0sIHNldFNlY29uZERpZ2l0ID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIHRoaXJkRGlnaXQgPSBfY1swXSwgc2V0VGhpcmREaWdpdCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBmb3VydGhEaWdpdCA9IF9kWzBdLCBzZXRGb3VydGhEaWdpdCA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFwiXCIpLCBmaWZ0aERpZ2l0ID0gX2VbMF0sIHNldEZpZnRoRGlnaXQgPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShcIlwiKSwgY2hhbmdlZEVtYWlsID0gX2ZbMF0sIHNldENoYW5nZWRFbWFpbCA9IF9mWzFdO1xuICAgIHZhciBfZyA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9nWzBdLCBzZXRMb2FkaW5nID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlU3RhdGUoZmFsc2UpLCBsb2FkaW5nQ2hhbmdlRW1haWwgPSBfaFswXSwgc2V0TG9hZGluZ0NoYW5nZUVtYWlsID0gX2hbMV07XG4gICAgdmFyIF9qID0gdXNlU3RhdGUobnVsbCksIGFsZXJ0TWVzc2FnZSA9IF9qWzBdLCBzZXRBbGVydE1lc3NhZ2UgPSBfalsxXTtcbiAgICB2YXIgX2sgPSB1c2VTdGF0ZShcInN1Y2Nlc3NcIiksIGFsZXJ0VHlwZSA9IF9rWzBdLCBzZXRBbGVydFR5cGUgPSBfa1sxXTtcbiAgICB2YXIgX2wgPSB1c2VTdGF0ZShmYWxzZSksIGNoYW5nZUVtYWlsTWRsID0gX2xbMF0sIHNldENoYW5nZUVtYWlsTWRsID0gX2xbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tEaWdpdHMoKTtcbiAgICB9LCBbZmlyc3REaWdpdCwgc2Vjb25kRGlnaXQsIHRoaXJkRGlnaXQsIGZvdXJ0aERpZ2l0LCBmaWZ0aERpZ2l0XSk7XG4gICAgLy8gUmVzZXQgdGhlIGRpZ2l0cyBpbnB1dHNcbiAgICB2YXIgcmVzZXREaWdpdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc2V0Rmlyc3REaWdpdChcIlwiKTtcbiAgICAgICAgc2V0U2Vjb25kRGlnaXQoXCJcIik7XG4gICAgICAgIHNldFRoaXJkRGlnaXQoXCJcIik7XG4gICAgICAgIHNldEZvdXJ0aERpZ2l0KFwiXCIpO1xuICAgICAgICBzZXRGaWZ0aERpZ2l0KFwiXCIpO1xuICAgICAgICAoX2EgPSBmaXJzdERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgIH07XG4gICAgdmFyIHJlc2VuZENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcIi9hcGkvc2VuZGNvZGVcIiwge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9wcy51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGVtYWlsOiBwcm9wcy5lbWFpbCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJOZXcgY29kZSBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuXCIpO1xuICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHJlc2V0RGlnaXRzKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcImVycm9yXCIpO1xuICAgICAgICAgICAgcmVzZXREaWdpdHMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgb25WZXJpZnlDb2RlU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICB2YXIgY29kZSA9IFwiXCIuY29uY2F0KGZpcnN0RGlnaXQpLmNvbmNhdChzZWNvbmREaWdpdCkuY29uY2F0KHRoaXJkRGlnaXQpLmNvbmNhdChmb3VydGhEaWdpdCkuY29uY2F0KGZpZnRoRGlnaXQpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvcmVnaXN0ZXIvdmFsaWRhdGVjb2RlXCIsIHtcbiAgICAgICAgICAgIGNvZGU6IE51bWJlcihjb2RlKSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAucG9zdChcIi9yZWdpc3RlclwiLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogcHJvcHMudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBwcm9wcy5lbWFpbCxcbiAgICAgICAgICAgICAgICBjb2RlOiBOdW1iZXIoY29kZSksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9ob21lXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgcmVzZXREaWdpdHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJUaGUgY29kZSBpcyBpbnZhbGlkLCBtYWtlIHN1cmUgdGhhdCB5b3UgcHV0IHRoZSBleGFjdCBjb2RlIHdlJ3ZlIHNlbnQgdG8geW91ciBlbWFpbC4gWW91IG1heSB3YW50IHRvIHJlc2VuZCB0aGUgY29kZS5cIik7XG4gICAgICAgICAgICBzZXRBbGVydFR5cGUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHJlc2V0RGlnaXRzKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIG9uQ2hhbmdlRW1haWxTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmdDaGFuZ2VFbWFpbCh0cnVlKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KFwiL2FwaS9zZW5kY29kZVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHByb3BzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICAgICAgZW1haWw6IGNoYW5nZWRFbWFpbCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcHJvcHMub25FbWFpbENoYW5nZShjaGFuZ2VkRW1haWwpO1xuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiTmV3IGNvZGUgaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsLlwiKTtcbiAgICAgICAgICAgIHNldEFsZXJ0VHlwZShcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICBzZXRDaGFuZ2VFbWFpbE1kbChmYWxzZSk7XG4gICAgICAgICAgICBzZXRDaGFuZ2VkRW1haWwoXCJcIik7XG4gICAgICAgICAgICByZXNldERpZ2l0cygpO1xuICAgICAgICAgICAgc2V0TG9hZGluZ0NoYW5nZUVtYWlsKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yID09PSBcImVtYWlsIGlzIGluIHVzZVwiKSB7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiXCIuY29uY2F0KGNoYW5nZWRFbWFpbCwgXCIgaXMgYWxyZWFkeSBpbiB1c2UsIHBsZWFzZSBsb2dpbiB3aXRoIHRoaXMgZW1haWwgb3IgY2hvb3NlIGFub3RoZXIgb25lLlwiKSk7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgc2V0Q2hhbmdlRW1haWxNZGwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJlc2V0RGlnaXRzKCk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0NoYW5nZUVtYWlsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRDaGFuZ2VkRW1haWwoXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnRUeXBlKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgcmVzZXREaWdpdHMoKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQ2hhbmdlRW1haWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldENoYW5nZWRFbWFpbChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBNb3ZlIHRvIHRoZSBzcGVjaWZpZWQgZGlnZXRcbiAgICB2YXIgbW92ZURpZ2l0ID0gZnVuY3Rpb24gKG51bWJlcikgeyB9O1xuICAgIC8vIENoZWNrIGlmIGFsbCBkaWdpdHMgYXJlIGVudGVyZWRcbiAgICB2YXIgY2hlY2tEaWdpdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmaXJzdERpZ2l0Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgc2Vjb25kRGlnaXQubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICB0aGlyZERpZ2l0Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgZm91cnRoRGlnaXQubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICBmaWZ0aERpZ2l0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgb25WZXJpZnlDb2RlU3VibWl0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFdoZW4gYSBkaWdpdCBpcyBjaGFuZ2VkXG4gICAgdmFyIG9uRGlnaXRDaGFuZ2VkID0gZnVuY3Rpb24gKHZhbHVlRW50ZXJlZCwgbnVtYmVyKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3QodmFsdWVFbnRlcmVkKSkge1xuICAgICAgICAgICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmlyc3RcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3REaWdpdCh2YWx1ZUVudGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBzZWNvbmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmREaWdpdCh2YWx1ZUVudGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSB0aGlyZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhpcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0VGhpcmREaWdpdCh2YWx1ZUVudGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAoX2MgPSBmb3VydGhEaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZvdXJ0aFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRGb3VydGhEaWdpdCh2YWx1ZUVudGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAoX2QgPSBmaWZ0aERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmlmdGhcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlmdGhEaWdpdCh2YWx1ZUVudGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gV2hlbiB1c2VyIHByZXNzZXMgYSBrZXkgaW4gYSBkaWdpdFxuICAgIHZhciBvbkRpZ2l0S2V5RG93biA9IGZ1bmN0aW9uIChldmVudCwgbnVtYmVyKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2wsIF9tO1xuICAgICAgICAvLyBCYWNrc3BhY2Uga2V5IHByZXNzZWRcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgICAgICAgICAgICAgIHNldEZpcnN0RGlnaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWNvbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kRGlnaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGZpcnN0RGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aGlyZFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRUaGlyZERpZ2l0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBzZWNvbmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZvdXJ0aFwiOlxuICAgICAgICAgICAgICAgICAgICBzZXRGb3VydGhEaWdpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgKF9jID0gdGhpcmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZpZnRoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldEZpZnRoRGlnaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IGZvdXJ0aERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBMZWZ0IGFycm93IGtleSBwcmVzc2VkXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgICAgICAgICAgICAgIChfZSA9IGZpcnN0RGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aGlyZFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2YgPSBzZWNvbmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImZvdXJ0aFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2cgPSB0aGlyZERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmlmdGhcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9oID0gZm91cnRoRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJpZ2h0IGFycm93IGtleSBwcmVzc2VkXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmlyc3RcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9qID0gc2Vjb25kRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWNvbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9rID0gdGhpcmREaWdpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2suZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRoaXJkXCI6XG4gICAgICAgICAgICAgICAgICAgIChfbCA9IGZvdXJ0aERpZ2l0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZm91cnRoXCI6XG4gICAgICAgICAgICAgICAgICAgIChfbSA9IGZpZnRoRGlnaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX20gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9tLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSZW5kZXIgYnV0dG9ucyBmb3IgdmVyaWZ5IGVtYWlsIHBhcnRcbiAgICB2YXIgcmVuZGVyQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1hcmdpbi10b3AtM1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VFbWFpbE1kbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogXCJidG4tdGV4dCBidG4tdGV4dC11bmRlcmxpbmVkXCIgfSwgeyBjaGlsZHJlbjogXCJDaGFuZ2UgeW91ciBlbWFpbFwiIH0pKSwgX2pzeChcImJyXCIsIHt9KSwgX2pzeChcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZW5kQ29kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiBcImJ0bi10ZXh0IGJ0bi10ZXh0LXVuZGVybGluZWRcIiB9LCB7IGNoaWxkcmVuOiBcIlJlc2VuZCBjb2RlXCIgfSkpXSB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm1hcmdpbi10b3AtM1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkgfSkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoTW9kYWwsIF9fYXNzaWduKHsgaGVhZGVyOiBcIkNoYW5nZSB5b3VyIGVtYWlsXCIsIG9wZW46IGNoYW5nZUVtYWlsTWRsLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoYW5nZUVtYWlsTWRsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIlB1dCB5b3VyIGVtYWlsIGFkZHJlc3MgaGVyZSBhbmQgd2Ugd2lsbCBzZW5kIGEgbmV3IGNvZGUgdG8gdGhhdC5cIiB9KSwgX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VFbWFpbFN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyByZXF1aXJlZDogdHJ1ZSwgdHlwZTogXCJlbWFpbFwiLCB2YWx1ZTogY2hhbmdlZEVtYWlsLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlZEVtYWlsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxhYmVsOiBcIkVtYWlsXCIgfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInUtZmxleC10ZXh0LXJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdHlwZTogXCJzdWJtaXRcIiwgcm91bmRlZDogdHJ1ZSwgY29sb3I6IFwiYmx1ZVwiLCBsb2FkaW5nOiBsb2FkaW5nQ2hhbmdlRW1haWwgfSwgeyBjaGlsZHJlbjogXCJDaGFuZ2VcIiB9KSkgfSkpXSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYXV0aFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiVmVyaWZ5IHlvdXIgZW1haWwgYWRkcmVzc1wiIH0pKSwgX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInNtYWxsLWNvcHlcIiB9LCB7IGNoaWxkcmVuOiBbcHJvcHMuZW1haWwsIFwiIC0gVGhlIGxhc3Qgc3RlcCBpcyB0byBlbnRlciB0aGUgNSBkaWdpdHMgY29kZSB3ZSBoYXZlIGp1c3Qgc2VudCB0byB5b3VyIGVtYWlsIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3MuXCJdIH0pKSwgX2pzeChBbGVydCwgeyBhZGRpdGlvbmFsQ2xhc3NlczogXCJ1LW1hcmdpbi1ib3R0b20tMlwiLCBtZXNzYWdlOiBhbGVydE1lc3NhZ2UsIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0eXBlOiBhbGVydFR5cGUgfSksIF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IG9uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmVyaWZ5Q29kZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImlucHV0LWRpZ2l0c1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRlbFwiLCBhdXRvRm9jdXM6IHRydWUsIHZhbHVlOiBmaXJzdERpZ2l0LCByZWY6IGZpcnN0RGlnaXRSZWYsIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0S2V5RG93bihldmVudCwgXCJmaXJzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdENoYW5nZWQoZXZlbnQudGFyZ2V0LnZhbHVlLCBcImZpcnN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogbG9hZGluZywgbWF4TGVuZ3RoOiAxIH0pLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRlbFwiLCB2YWx1ZTogc2Vjb25kRGlnaXQsIHJlZjogc2Vjb25kRGlnaXRSZWYsIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0S2V5RG93bihldmVudCwgXCJzZWNvbmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRDaGFuZ2VkKGV2ZW50LnRhcmdldC52YWx1ZSwgXCJzZWNvbmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRpc2FibGVkOiBsb2FkaW5nLCBtYXhMZW5ndGg6IDEgfSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGVsXCIsIHZhbHVlOiB0aGlyZERpZ2l0LCByZWY6IHRoaXJkRGlnaXRSZWYsIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0S2V5RG93bihldmVudCwgXCJ0aGlyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdENoYW5nZWQoZXZlbnQudGFyZ2V0LnZhbHVlLCBcInRoaXJkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogbG9hZGluZywgbWF4TGVuZ3RoOiAxIH0pLCBfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRlbFwiLCB2YWx1ZTogZm91cnRoRGlnaXQsIHJlZjogZm91cnRoRGlnaXRSZWYsIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0S2V5RG93bihldmVudCwgXCJmb3VydGhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlnaXRDaGFuZ2VkKGV2ZW50LnRhcmdldC52YWx1ZSwgXCJmb3VydGhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRpc2FibGVkOiBsb2FkaW5nLCBtYXhMZW5ndGg6IDEgfSksIF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGVsXCIsIHZhbHVlOiBmaWZ0aERpZ2l0LCByZWY6IGZpZnRoRGlnaXRSZWYsIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpZ2l0S2V5RG93bihldmVudCwgXCJmaWZ0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EaWdpdENoYW5nZWQoZXZlbnQudGFyZ2V0LnZhbHVlLCBcImZpZnRoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkaXNhYmxlZDogbG9hZGluZywgbWF4TGVuZ3RoOiAxIH0pXSB9KSkgfSkpLCByZW5kZXJCdXR0b25zKCldIH0pKV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5RW1haWw7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gXCIuL0ZvcmdvdFBhc3N3b3JkXCI7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vUmVnaXN0ZXJcIjtcbmZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uKHByb3BzKSB7XG4gICAgcmV0dXJuIChfanN4KFJvdXRlciwgeyBjaGlsZHJlbjogX2pzeHMoUm91dGVzLCB7IGNoaWxkcmVuOiBbX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9sb2dpblwiLCBlbGVtZW50OiBfanN4KExvZ2luLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvZm9yZ290LXBhc3N3b3JkXCIsIGVsZW1lbnQ6IF9qc3goRm9yZ290UGFzc3dvcmQsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9yZWdpc3RlclwiLCBlbGVtZW50OiBfanN4KFJlZ2lzdGVyLCB7fSkgfSldIH0pIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEF1dGhlbnRpY2F0aW9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9