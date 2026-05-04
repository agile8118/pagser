"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["comments"],{

/***/ "./src/partials/comment/AddReplyForm.tsx":
/*!***********************************************!*\
  !*** ./src/partials/comment/AddReplyForm.tsx ***!
  \***********************************************/
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



// @TODO: fix the any type
var addReplyForm = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), text = _a[0], setText = _a[1];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "form", onSubmit: function (e) {
            e.preventDefault();
            props.onSubmit(text);
            setText("");
        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form__group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Input, { size: "small", value: text, lined: true, autoFocus: true, required: true, innerInputLabel: props.toName, placeholder: "Add your reply...", onChange: function (value) {
                        setText(value);
                    } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "right-content margin-bottom-2" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: "button", className: "btn btn-sm btn-default margin-right-1", onClick: function () { return props.onCancel(); } }, { children: "Cancel" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: "submit", className: "btn btn-sm btn-blue" }, { children: "Add" }))] }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addReplyForm);


/***/ }),

/***/ "./src/partials/comment/CommentActions.tsx":
/*!*************************************************!*\
  !*** ./src/partials/comment/CommentActions.tsx ***!
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



// @TODO: fix the any type
var CommentActions = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (props, ref) {
    if (props.status === "edit")
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment__ratings" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: props.likes }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-big btn-i-blue", onClick: function () { return props.onLike(); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-thumbs-up" }) }))] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ className: "btn-i btn-i-big btn-i-blue", href: "javascript:void(0)", onClick: function () {
                    var _a;
                    props.onReply();
                    if (ref.current)
                        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-reply" }) })), props.viewer === "owner" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_2__.Dropdown, __assign({ type: "mini", className: "btn-i btn-i-big btn-i-blue comment__ellipsis", num: props.id, onChange: function (name) {
                    if (name === "edit")
                        props.onEdit();
                    if (name === "delete")
                        props.onDelete();
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-role-name": "btn-name", "data-icon-class": "fa fa-ellipsis-v" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ "data-role-name": "item", "data-name": "edit" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil-square-o margin-right-07" }), " Edit"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ "data-role-name": "item", "data-name": "delete" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-trash margin-right-07" }), " Delete"] }))] })))] }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentActions);


/***/ }),

/***/ "./src/partials/comment/CommentBody.tsx":
/*!**********************************************!*\
  !*** ./src/partials/comment/CommentBody.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/show-page/commentsSlice */ "./src/views/show-page/commentsSlice.ts");
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



var CommentBody = function (props) {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment__body" }, { children: props.status === "edit" ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "form", onSubmit: function (e) {
                e.preventDefault();
                // @ts-ignore
                var value = e.target.children[0].children[1]
                    ? // @ts-ignore
                        e.target.children[0].children[1].value
                    : // @ts-ignore
                        e.target.children[0].children[0].value;
                dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_2__.editComment)(props.id, value));
            } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "form__group" }, { children: [props.inReplyToUser && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "form__input__text-label", ref: function (elem) {
                                // Add a left padding to the input because of the name label
                                if (elem)
                                    // @ts-ignore
                                    elem.nextSibling.style.paddingLeft = "".concat(elem.clientWidth + 10, "px");
                            } }, { children: props.inReplyToUser }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", { rows: 1, required: true, className: "form__input form__input--lined", ref: function (el) {
                                if (el) {
                                    el.value = props.text;
                                    el.focus();
                                }
                            } })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "right-content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: "button", onClick: function () {
                                return dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_2__.changeCommentStatus)({
                                    commentId: props.id,
                                    status: "normal",
                                    replyId: props.replyId,
                                }));
                            }, className: "btn btn-sm btn-default  margin-right-1" }, { children: "Cancel" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: "submit", className: "btn btn-sm btn-blue " }, { children: "Update" }))] }))] }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [props.inReplyToUser && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({ className: "a-17" }, { children: props.inReplyToUser }))), props.text] })) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentBody);


/***/ }),

/***/ "./src/partials/comment/CommentReply.tsx":
/*!***********************************************!*\
  !*** ./src/partials/comment/CommentReply.tsx ***!
  \***********************************************/
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
/* harmony import */ var _CommentActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentActions */ "./src/partials/comment/CommentActions.tsx");
/* harmony import */ var _CommentBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentBody */ "./src/partials/comment/CommentBody.tsx");
/* harmony import */ var _AddReplyForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddReplyForm */ "./src/partials/comment/AddReplyForm.tsx");
/* harmony import */ var _views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/show-page/commentsSlice */ "./src/views/show-page/commentsSlice.ts");
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








var CommentReply = function (props) {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var addReplyInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment__header" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "display-flex" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "comment__header__image", src: props.author.photo, alt: "comment's author image", onError: function (e) {
                                            e.target.src =
                                                _pagser_common__WEBPACK_IMPORTED_MODULE_3__.USER_PLACEHOLDER_IMAGE;
                                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment__header__name-and-date" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__name" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ target: "_blank", href: "/users/".concat(props.author.username) }, { children: props.author.name })), props.author.id === props.pageAuthorId && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__author-label" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "-------" }), "Author"] })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: props.date })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment__header__actions" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentActions__WEBPACK_IMPORTED_MODULE_4__["default"], { id: props.id, viewer: props.viewer, ref: addReplyInput, likes: props.likes, status: props.status, onReply: function () {
                                        dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.changeCommentStatus)({
                                            commentId: props.parentCommentId,
                                            status: "add-reply",
                                            replyId: props.id,
                                            toName: props.author.name, // ?!
                                            // @TODO: pass userId
                                        }));
                                        // props.addReplyForm(
                                        //   props.parentCommentId,
                                        //   "show",
                                        //   props.id,
                                        //   props.name
                                        // );
                                    }, onLike: function () {
                                        dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.likeComment)(props.id, props.parentCommentId));
                                    }, onEdit: function () {
                                        dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.changeCommentStatus)({
                                            commentId: props.parentCommentId,
                                            status: "edit",
                                            replyId: props.id,
                                        }));
                                        // props.editCommentForm(props.parentCommentId, "show", props.id);
                                    }, onDelete: function () {
                                        if (props.openDeleteConfirmation)
                                            props.openDeleteConfirmation(props.id);
                                        // props.openMdl("confDeleteComment", props.id);
                                    } }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentBody__WEBPACK_IMPORTED_MODULE_5__["default"], { status: props.status, inReplyToUser: props.inReplyToUser, text: props.text, id: props.parentCommentId, replyId: props.id })] })), props.status === "add-reply" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddReplyForm__WEBPACK_IMPORTED_MODULE_6__["default"]
            // ref={addReplyInput}
            , { 
                // ref={addReplyInput}
                toName: props.toName, onSubmit: function (text) {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.addComment)(text, props.parentCommentId, props.id));
                }, onCancel: function () {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.changeCommentStatus)({
                        commentId: props.parentCommentId,
                        status: "normal",
                        replyId: props.id,
                        // @TODO: pass userId
                    }));
                    // props.addReplyForm(props.parentCommentId, "hide", props.id);
                } }))] }, props.id));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentReply);


/***/ }),

/***/ "./src/partials/comment/index.tsx":
/*!****************************************!*\
  !*** ./src/partials/comment/index.tsx ***!
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
/* harmony import */ var _CommentReply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentReply */ "./src/partials/comment/CommentReply.tsx");
/* harmony import */ var _CommentActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentActions */ "./src/partials/comment/CommentActions.tsx");
/* harmony import */ var _CommentBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentBody */ "./src/partials/comment/CommentBody.tsx");
/* harmony import */ var _AddReplyForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddReplyForm */ "./src/partials/comment/AddReplyForm.tsx");
/* harmony import */ var _views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../views/show-page/commentsSlice */ "./src/views/show-page/commentsSlice.ts");
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









var Comment = function (props) {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var addReplyInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    // Number of comment replies
    var repliesNum = typeof props.replies === "number" ? props.replies : props.replies.length;
    // Button to either show or hide the replies
    var showHideRepliesBtn = !props.showReplies ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: "javascript:void(0)", className: "btn btn-text comment__view-replies", onClick: function () {
            dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__.fetchReplies)(props.id));
        } }, { children: [repliesNum > 1 ? "View all ".concat(repliesNum, " replies") : "View reply", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-caret-down", "aria-hidden": "true" })] }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: "javascript:void(0)", className: "btn btn-text comment__view-replies", onClick: function () {
            dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__.hideReplies)(props.id));
        } }, { children: [repliesNum > 1 ? "Hide all ".concat(repliesNum, " replies") : "Hide reply", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-caret-up", "aria-hidden": "true" })] })));
    // Render the comment replies along with show hide replies button
    var replies = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [repliesNum > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "right-content" }, { children: showHideRepliesBtn }))), props.showReplies &&
                repliesNum > 0 &&
                props.replies.map(function (comment) {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentReply__WEBPACK_IMPORTED_MODULE_4__["default"], { parentCommentId: props.id, id: comment.id, author: comment.author, pageAuthorId: props.pageAuthorId, date: comment.date, text: comment.text, status: comment.status, likes: comment.likes, viewer: comment.viewer, inReplyToUser: comment.inReplyToUser, toName: comment.toName }, comment.id));
                }), props.highlightedReplies &&
                !props.showReplies &&
                props.highlightedReplies.map(function (comment) {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentReply__WEBPACK_IMPORTED_MODULE_4__["default"], { parentCommentId: props.id, id: comment.id, author: comment.author, pageAuthorId: props.pageAuthorId, date: comment.date, text: comment.text, status: comment.status, likes: comment.likes, viewer: comment.viewer, inReplyToUser: comment.inReplyToUser, toName: comment.toName }, comment.id));
                })] }));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment__header" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "display-flex" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "comment__header__image", src: props.author.photo, alt: "comment's author image", onError: function (e) {
                                    e.target.src =
                                        _pagser_common__WEBPACK_IMPORTED_MODULE_3__.USER_PLACEHOLDER_IMAGE;
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment__header__name-and-date" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__name" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ target: "_blank", href: "/users/".concat(props.author.username) }, { children: props.author.name })), props.author.id === props.pageAuthorId && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__author-label" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "-------" }), "Author"] })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: props.date })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment__header__actions" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentActions__WEBPACK_IMPORTED_MODULE_5__["default"], { id: props.id, viewer: props.viewer, ref: addReplyInput, status: props.status, likes: props.likes, onReply: function () {
                                dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__.changeCommentStatus)({
                                    commentId: props.id,
                                    status: "add-reply",
                                }));
                            }, onLike: function () {
                                dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__.likeComment)(props.id));
                            }, onEdit: function () {
                                dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__.changeCommentStatus)({
                                    commentId: props.id,
                                    status: "edit",
                                }));
                            }, onDelete: function () {
                                props.openDeleteConfirmation(props.id);
                            } }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentBody__WEBPACK_IMPORTED_MODULE_6__["default"], { status: props.status, text: props.text, id: props.id }), props.status == "add-reply" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddReplyForm__WEBPACK_IMPORTED_MODULE_7__["default"]
            // ref={addReplyInput}
            , { 
                // ref={addReplyInput}
                onSubmit: function (text) {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__.addComment)(text, props.id));
                }, onCancel: function () {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_8__.changeCommentStatus)({
                        commentId: props.id,
                        status: "normal",
                    }));
                } })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment-replies" }, { children: replies }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);


/***/ }),

/***/ "./src/views/show-page/Comments.tsx":
/*!******************************************!*\
  !*** ./src/views/show-page/Comments.tsx ***!
  \******************************************/
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
/* harmony import */ var _commentsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commentsSlice */ "./src/views/show-page/commentsSlice.ts");
/* harmony import */ var _pageSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageSlice */ "./src/views/show-page/pageSlice.ts");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userSlice */ "./src/views/show-page/userSlice.ts");
/* harmony import */ var _partials_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/comment */ "./src/partials/comment/index.tsx");
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









var Comments = function () {
    var pageLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_6__.selectLoading);
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_6__.selectId);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.selectComments);
    var userStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_7__.selectStatus);
    var totalCount = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.selectTotalCount);
    var pageAuthor = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_6__.selectAuthor);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), newComment = _a[0], setNewComment = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmationModalOpen = _b[0], setConfirmationModalOpen = _b[1]; // delete comment confirmation
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmationModalCommentId = _c[0], setConfirmationModalCommentId = _c[1]; // id of the comment to be deleted
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!pageLoading) {
            dispatch((0,_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.fetchComments)());
        }
    }, [pageLoading]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        document.addEventListener("scroll", trackScrolling);
    }, [comments.length]);
    // @TODO: WHY?!
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        (0,_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.fetchComments)();
    }, [pageId]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        return function () {
            document.removeEventListener("scroll", trackScrolling);
        };
    }, []);
    var trackScrolling = function () {
        var wrappedElement = document.getElementById("comments2");
        if (_pagser_common__WEBPACK_IMPORTED_MODULE_3__.util.isBottom(wrappedElement) &&
            comments.length > 1 &&
            comments.length % 10 === 0) {
            dispatch((0,_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.fetchComments)());
            document.removeEventListener("scroll", trackScrolling);
        }
    };
    // Render the list of comments
    var renderComments = function () {
        if (comments.length === 0)
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "no-comment-message margin-top-2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "No comment yet. Be the first one to comment on this page!" }) })));
        if (comments.length > 0)
            return comments.map(function (comment) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_partials_comment__WEBPACK_IMPORTED_MODULE_8__["default"], { id: comment.id, showReplies: comment.showReplies, status: comment.status, viewer: comment.viewer, author: comment.author, pageAuthorId: pageAuthor.id, date: comment.date, text: comment.text, likes: comment.likes, replies: comment.replies || [], highlightedReplies: comment.highlightedReplies, openDeleteConfirmation: function (id) {
                        setConfirmationModalOpen(true);
                        setConfirmationModalCommentId(id);
                    } }, comment.id));
            });
    };
    // Render add comment form, doesn't show the form if user is not logged in
    var renderAddComment = function () {
        if (!userStatus || userStatus === "spectator")
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__comments__add" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", __assign({ className: "form__label" }, { children: "Add a new comment" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({ className: "normal-paragraph" }, { children: ["Please ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ href: "/login" }, { children: "login" })), " if you want to add your comment for this page or reply to others."] }))] })));
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page__comments__add", id: "add-comment" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ method: "post", onSubmit: function (e) {
                    e.preventDefault();
                    dispatch((0,_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.addComment)(newComment));
                    setNewComment("");
                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Textarea, { label: "Add a New Comment", value: newComment, rows: 5, placeholder: "Type your comment about the page...", onChange: function (value) {
                                setNewComment(value);
                            } }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ type: "submit", rounded: true, color: "blue", disabled: newComment.length > 0 ? false : true }, { children: "Submit" })) }))] })) })));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, __assign({ header: "Delete Your Comment?", open: confirmationModalOpen, btnName: "Delete", onConfirm: function () {
                    return dispatch((0,_commentsSlice__WEBPACK_IMPORTED_MODULE_5__.deleteComment)(confirmationModalCommentId, function () {
                        setConfirmationModalCommentId("");
                        setConfirmationModalOpen(false);
                    }));
                }, onCancel: function () {
                    setConfirmationModalOpen(false);
                    setConfirmationModalCommentId("");
                } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Are you sure that you want to delete your comment? All the other replies associated with this comment will also get removed.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "You ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "cannot undo" }), " this action."] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "page__comments", id: "comments2" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "row" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comments-wrapper" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", __assign({ className: "heading-tertiary center-content" }, { children: [totalCount, " Comments"] })), !loading && renderAddComment(), !loading && renderComments(), loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "center-content" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Loading, {}) })))] })) })) }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLCtCQUErQixJQUFJLHNCQUFzQixzREFBSSxpQkFBaUIsZ0JBQWdCLElBQUksbUJBQW1CLDJFQUEyRSxLQUFLO0FBQ2xaLGdCQUFnQixzREFBSSxtQkFBbUIscURBQXFELElBQUksVUFBVSx1REFBSyxvQkFBb0I7QUFDbkk7QUFDQSw2QkFBNkIsMERBQVU7QUFDdkM7QUFDQSxtQkFBbUIsSUFBSSxXQUFXLHNEQUFJLG1CQUFtQix5QkFBeUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsc0RBQVEsSUFBSTtBQUNqSDtBQUNBLCtCQUErQixHQUFHLElBQUksc0RBQUksbUJBQW1CLGdDQUFnQyxJQUFJLFVBQVUsc0RBQUksQ0FBQyxvREFBTSxhQUFhLDhGQUE4RixJQUFJLG9CQUFvQixJQUFJLEtBQUssSUFBSTtBQUN0UTtBQUNBLFlBQVksdURBQUssQ0FBQyx1REFBYyxJQUFJLFdBQVcsc0RBQUksQ0FBQywwREFBWSxhQUFhO0FBQzdFLG9DQUFvQyw2REFBYTtBQUNqRDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsbUJBQW1CLElBQUksVUFBVSx1REFBSyxRQUFRLDJJQUEySSxzREFBSSxTQUFTLFdBQVcsc0RBQUksYUFBYSx5QkFBeUIscUJBQXFCLEdBQUcsSUFBSSxzREFBSSxtQkFBbUIsOENBQThDLElBQUksVUFBVSxzREFBSSxtQkFBbUIsa0JBQWtCLElBQUksVUFBVSx1REFBSyxtQkFBbUIsK0JBQStCLElBQUksV0FBVyx1REFBSyxrQkFBa0IsOENBQThDLElBQUkscUNBQXFDLDhFQUE4RSxzREFBSSxtQkFBbUIsNkJBQTZCLElBQUksVUFBVSxzREFBSSxDQUFDLHFEQUFPLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxLQUFLO0FBQzN3QjtBQUNBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3BhcnRpYWxzL2NvbW1lbnQvQWRkUmVwbHlGb3JtLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy9wYXJ0aWFscy9jb21tZW50L0NvbW1lbnRBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy9wYXJ0aWFscy9jb21tZW50L0NvbW1lbnRCb2R5LnRzeCIsIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy9wYXJ0aWFscy9jb21tZW50L0NvbW1lbnRSZXBseS50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvcGFydGlhbHMvY29tbWVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3Mvc2hvdy1wYWdlL0NvbW1lbnRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG4vLyBAVE9ETzogZml4IHRoZSBhbnkgdHlwZVxudmFyIGFkZFJlcGx5Rm9ybSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFwiXCIpLCB0ZXh0ID0gX2FbMF0sIHNldFRleHQgPSBfYVsxXTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcHJvcHMub25TdWJtaXQodGV4dCk7XG4gICAgICAgICAgICBzZXRUZXh0KFwiXCIpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyBzaXplOiBcInNtYWxsXCIsIHZhbHVlOiB0ZXh0LCBsaW5lZDogdHJ1ZSwgYXV0b0ZvY3VzOiB0cnVlLCByZXF1aXJlZDogdHJ1ZSwgaW5uZXJJbnB1dExhYmVsOiBwcm9wcy50b05hbWUsIHBsYWNlaG9sZGVyOiBcIkFkZCB5b3VyIHJlcGx5Li4uXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRleHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicmlnaHQtY29udGVudCBtYXJnaW4tYm90dG9tLTJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IG1hcmdpbi1yaWdodC0xXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb3BzLm9uQ2FuY2VsKCk7IH0gfSwgeyBjaGlsZHJlbjogXCJDYW5jZWxcIiB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zbSBidG4tYmx1ZVwiIH0sIHsgY2hpbGRyZW46IFwiQWRkXCIgfSkpXSB9KSldIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkUmVwbHlGb3JtO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG4vLyBAVE9ETzogZml4IHRoZSBhbnkgdHlwZVxudmFyIENvbW1lbnRBY3Rpb25zID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIGlmIChwcm9wcy5zdGF0dXMgPT09IFwiZWRpdFwiKVxuICAgICAgICByZXR1cm4gX2pzeChcImRpdlwiLCB7fSk7XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29tbWVudF9fcmF0aW5nc1wiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiBwcm9wcy5saWtlcyB9KSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1iaWcgYnRuLWktYmx1ZVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9wcy5vbkxpa2UoKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aHVtYnMtdXBcIiB9KSB9KSldIH0pIH0pKSwgX2pzeChcImFcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmlnIGJ0bi1pLWJsdWVcIiwgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uUmVwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gcmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcmVwbHlcIiB9KSB9KSksIHByb3BzLnZpZXdlciA9PT0gXCJvd25lclwiICYmIChfanN4cyhEcm9wZG93biwgX19hc3NpZ24oeyB0eXBlOiBcIm1pbmlcIiwgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJpZyBidG4taS1ibHVlIGNvbW1lbnRfX2VsbGlwc2lzXCIsIG51bTogcHJvcHMuaWQsIG9uQ2hhbmdlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkVkaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiZGVsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkRlbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBcImRhdGEtcm9sZS1uYW1lXCI6IFwiYnRuLW5hbWVcIiwgXCJkYXRhLWljb24tY2xhc3NcIjogXCJmYSBmYS1lbGxpcHNpcy12XCIgfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJlZGl0XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBtYXJnaW4tcmlnaHQtMDdcIiB9KSwgXCIgRWRpdFwiXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcIml0ZW1cIiwgXCJkYXRhLW5hbWVcIjogXCJkZWxldGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdHJhc2ggbWFyZ2luLXJpZ2h0LTA3XCIgfSksIFwiIERlbGV0ZVwiXSB9KSldIH0pKSldIH0pKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEFjdGlvbnM7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjaGFuZ2VDb21tZW50U3RhdHVzLCBlZGl0Q29tbWVudCwgfSBmcm9tIFwiLi4vLi4vdmlld3Mvc2hvdy1wYWdlL2NvbW1lbnRzU2xpY2VcIjtcbnZhciBDb21tZW50Qm9keSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2JvZHlcIiB9LCB7IGNoaWxkcmVuOiBwcm9wcy5zdGF0dXMgPT09IFwiZWRpdFwiID8gKF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS50YXJnZXQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV1cbiAgICAgICAgICAgICAgICAgICAgPyAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGVkaXRDb21tZW50KHByb3BzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9fZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbcHJvcHMuaW5SZXBseVRvVXNlciAmJiAoX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybV9faW5wdXRfX3RleHQtbGFiZWxcIiwgcmVmOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgYSBsZWZ0IHBhZGRpbmcgdG8gdGhlIGlucHV0IGJlY2F1c2Ugb2YgdGhlIG5hbWUgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm5leHRTaWJsaW5nLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCJcIi5jb25jYXQoZWxlbS5jbGllbnRXaWR0aCArIDEwLCBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogcHJvcHMuaW5SZXBseVRvVXNlciB9KSkpLCBfanN4KFwidGV4dGFyZWFcIiwgeyByb3dzOiAxLCByZXF1aXJlZDogdHJ1ZSwgY2xhc3NOYW1lOiBcImZvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1saW5lZFwiLCByZWY6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnZhbHVlID0gcHJvcHMudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJpZ2h0LWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKGNoYW5nZUNvbW1lbnRTdGF0dXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkOiBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGx5SWQ6IHByb3BzLnJlcGx5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCAgbWFyZ2luLXJpZ2h0LTFcIiB9LCB7IGNoaWxkcmVuOiBcIkNhbmNlbFwiIH0pKSwgX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXNtIGJ0bi1ibHVlIFwiIH0sIHsgY2hpbGRyZW46IFwiVXBkYXRlXCIgfSkpXSB9KSldIH0pKSkgOiAoX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtwcm9wcy5pblJlcGx5VG9Vc2VyICYmIChfanN4KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJhLTE3XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMuaW5SZXBseVRvVXNlciB9KSkpLCBwcm9wcy50ZXh0XSB9KSkgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21tZW50Qm9keTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFVTRVJfUExBQ0VIT0xERVJfSU1BR0UgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCBDb21tZW50QWN0aW9ucyBmcm9tIFwiLi9Db21tZW50QWN0aW9uc1wiO1xuaW1wb3J0IENvbW1lbnRCb2R5IGZyb20gXCIuL0NvbW1lbnRCb2R5XCI7XG5pbXBvcnQgQWRkUmVwbHlGb3JtIGZyb20gXCIuL0FkZFJlcGx5Rm9ybVwiO1xuaW1wb3J0IHsgYWRkQ29tbWVudCwgY2hhbmdlQ29tbWVudFN0YXR1cywgbGlrZUNvbW1lbnQsIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL3Nob3ctcGFnZS9jb21tZW50c1NsaWNlXCI7XG52YXIgQ29tbWVudFJlcGx5ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgYWRkUmVwbHlJbnB1dCA9IHVzZVJlZigpO1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJkaXNwbGF5LWZsZXhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImltZ1wiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50X19oZWFkZXJfX2ltYWdlXCIsIHNyYzogcHJvcHMuYXV0aG9yLnBob3RvLCBhbHQ6IFwiY29tbWVudCdzIGF1dGhvciBpbWFnZVwiLCBvbkVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zcmMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVVNFUl9QTEFDRUhPTERFUl9JTUFHRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50X19oZWFkZXJfX25hbWUtYW5kLWRhdGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fbmFtZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KHByb3BzLmF1dGhvci51c2VybmFtZSkgfSwgeyBjaGlsZHJlbjogcHJvcHMuYXV0aG9yLm5hbWUgfSkpLCBwcm9wcy5hdXRob3IuaWQgPT09IHByb3BzLnBhZ2VBdXRob3JJZCAmJiAoX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fYXV0aG9yLWxhYmVsXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiLS0tLS0tLVwiIH0pLCBcIkF1dGhvclwiXSB9KSkpXSB9KSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IHByb3BzLmRhdGUgfSldIH0pKV0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fYWN0aW9uc1wiIH0sIHsgY2hpbGRyZW46IF9qc3goQ29tbWVudEFjdGlvbnMsIHsgaWQ6IHByb3BzLmlkLCB2aWV3ZXI6IHByb3BzLnZpZXdlciwgcmVmOiBhZGRSZXBseUlucHV0LCBsaWtlczogcHJvcHMubGlrZXMsIHN0YXR1czogcHJvcHMuc3RhdHVzLCBvblJlcGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlQ29tbWVudFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogcHJvcHMucGFyZW50Q29tbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiYWRkLXJlcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGx5SWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b05hbWU6IHByb3BzLmF1dGhvci5uYW1lLCAvLyA/IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAVE9ETzogcGFzcyB1c2VySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHMuYWRkUmVwbHlGb3JtKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcHJvcHMucGFyZW50Q29tbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHByb3BzLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25MaWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobGlrZUNvbW1lbnQocHJvcHMuaWQsIHByb3BzLnBhcmVudENvbW1lbnRJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25FZGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlQ29tbWVudFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogcHJvcHMucGFyZW50Q29tbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBseUlkOiBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHMuZWRpdENvbW1lbnRGb3JtKHByb3BzLnBhcmVudENvbW1lbnRJZCwgXCJzaG93XCIsIHByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uRGVsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLm9wZW5EZWxldGVDb25maXJtYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9wZW5EZWxldGVDb25maXJtYXRpb24ocHJvcHMuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3BzLm9wZW5NZGwoXCJjb25mRGVsZXRlQ29tbWVudFwiLCBwcm9wcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKV0gfSkpLCBfanN4KENvbW1lbnRCb2R5LCB7IHN0YXR1czogcHJvcHMuc3RhdHVzLCBpblJlcGx5VG9Vc2VyOiBwcm9wcy5pblJlcGx5VG9Vc2VyLCB0ZXh0OiBwcm9wcy50ZXh0LCBpZDogcHJvcHMucGFyZW50Q29tbWVudElkLCByZXBseUlkOiBwcm9wcy5pZCB9KV0gfSkpLCBwcm9wcy5zdGF0dXMgPT09IFwiYWRkLXJlcGx5XCIgJiYgKF9qc3goQWRkUmVwbHlGb3JtXG4gICAgICAgICAgICAvLyByZWY9e2FkZFJlcGx5SW5wdXR9XG4gICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgLy8gcmVmPXthZGRSZXBseUlucHV0fVxuICAgICAgICAgICAgICAgIHRvTmFtZTogcHJvcHMudG9OYW1lLCBvblN1Ym1pdDogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ29tbWVudCh0ZXh0LCBwcm9wcy5wYXJlbnRDb21tZW50SWQsIHByb3BzLmlkKSk7XG4gICAgICAgICAgICAgICAgfSwgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlQ29tbWVudFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQ6IHByb3BzLnBhcmVudENvbW1lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGx5SWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IHBhc3MgdXNlcklkXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHMuYWRkUmVwbHlGb3JtKHByb3BzLnBhcmVudENvbW1lbnRJZCwgXCJoaWRlXCIsIHByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICB9IH0pKV0gfSwgcHJvcHMuaWQpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21tZW50UmVwbHk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBVU0VSX1BMQUNFSE9MREVSX0lNQUdFIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgQ29tbWVudFJlcGx5IGZyb20gXCIuL0NvbW1lbnRSZXBseVwiO1xuaW1wb3J0IENvbW1lbnRBY3Rpb25zIGZyb20gXCIuL0NvbW1lbnRBY3Rpb25zXCI7XG5pbXBvcnQgQ29tbWVudEJvZHkgZnJvbSBcIi4vQ29tbWVudEJvZHlcIjtcbmltcG9ydCBBZGRSZXBseUZvcm0gZnJvbSBcIi4vQWRkUmVwbHlGb3JtXCI7XG5pbXBvcnQgeyBmZXRjaFJlcGxpZXMsIGFkZENvbW1lbnQsIGNoYW5nZUNvbW1lbnRTdGF0dXMsIGhpZGVSZXBsaWVzLCBsaWtlQ29tbWVudCwgfSBmcm9tIFwiLi4vLi4vdmlld3Mvc2hvdy1wYWdlL2NvbW1lbnRzU2xpY2VcIjtcbnZhciBDb21tZW50ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgYWRkUmVwbHlJbnB1dCA9IHVzZVJlZigpO1xuICAgIC8vIE51bWJlciBvZiBjb21tZW50IHJlcGxpZXNcbiAgICB2YXIgcmVwbGllc051bSA9IHR5cGVvZiBwcm9wcy5yZXBsaWVzID09PSBcIm51bWJlclwiID8gcHJvcHMucmVwbGllcyA6IHByb3BzLnJlcGxpZXMubGVuZ3RoO1xuICAgIC8vIEJ1dHRvbiB0byBlaXRoZXIgc2hvdyBvciBoaWRlIHRoZSByZXBsaWVzXG4gICAgdmFyIHNob3dIaWRlUmVwbGllc0J0biA9ICFwcm9wcy5zaG93UmVwbGllcyA/IChfanN4cyhcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi10ZXh0IGNvbW1lbnRfX3ZpZXctcmVwbGllc1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFJlcGxpZXMocHJvcHMuaWQpKTtcbiAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbcmVwbGllc051bSA+IDEgPyBcIlZpZXcgYWxsIFwiLmNvbmNhdChyZXBsaWVzTnVtLCBcIiByZXBsaWVzXCIpIDogXCJWaWV3IHJlcGx5XCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWNhcmV0LWRvd25cIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpKSA6IChfanN4cyhcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi10ZXh0IGNvbW1lbnRfX3ZpZXctcmVwbGllc1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlUmVwbGllcyhwcm9wcy5pZCkpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtyZXBsaWVzTnVtID4gMSA/IFwiSGlkZSBhbGwgXCIuY29uY2F0KHJlcGxpZXNOdW0sIFwiIHJlcGxpZXNcIikgOiBcIkhpZGUgcmVwbHlcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtY2FyZXQtdXBcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpKTtcbiAgICAvLyBSZW5kZXIgdGhlIGNvbW1lbnQgcmVwbGllcyBhbG9uZyB3aXRoIHNob3cgaGlkZSByZXBsaWVzIGJ1dHRvblxuICAgIHZhciByZXBsaWVzID0gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbcmVwbGllc051bSA+IDAgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicmlnaHQtY29udGVudFwiIH0sIHsgY2hpbGRyZW46IHNob3dIaWRlUmVwbGllc0J0biB9KSkpLCBwcm9wcy5zaG93UmVwbGllcyAmJlxuICAgICAgICAgICAgICAgIHJlcGxpZXNOdW0gPiAwICYmXG4gICAgICAgICAgICAgICAgcHJvcHMucmVwbGllcy5tYXAoZnVuY3Rpb24gKGNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KENvbW1lbnRSZXBseSwgeyBwYXJlbnRDb21tZW50SWQ6IHByb3BzLmlkLCBpZDogY29tbWVudC5pZCwgYXV0aG9yOiBjb21tZW50LmF1dGhvciwgcGFnZUF1dGhvcklkOiBwcm9wcy5wYWdlQXV0aG9ySWQsIGRhdGU6IGNvbW1lbnQuZGF0ZSwgdGV4dDogY29tbWVudC50ZXh0LCBzdGF0dXM6IGNvbW1lbnQuc3RhdHVzLCBsaWtlczogY29tbWVudC5saWtlcywgdmlld2VyOiBjb21tZW50LnZpZXdlciwgaW5SZXBseVRvVXNlcjogY29tbWVudC5pblJlcGx5VG9Vc2VyLCB0b05hbWU6IGNvbW1lbnQudG9OYW1lIH0sIGNvbW1lbnQuaWQpKTtcbiAgICAgICAgICAgICAgICB9KSwgcHJvcHMuaGlnaGxpZ2h0ZWRSZXBsaWVzICYmXG4gICAgICAgICAgICAgICAgIXByb3BzLnNob3dSZXBsaWVzICYmXG4gICAgICAgICAgICAgICAgcHJvcHMuaGlnaGxpZ2h0ZWRSZXBsaWVzLm1hcChmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goQ29tbWVudFJlcGx5LCB7IHBhcmVudENvbW1lbnRJZDogcHJvcHMuaWQsIGlkOiBjb21tZW50LmlkLCBhdXRob3I6IGNvbW1lbnQuYXV0aG9yLCBwYWdlQXV0aG9ySWQ6IHByb3BzLnBhZ2VBdXRob3JJZCwgZGF0ZTogY29tbWVudC5kYXRlLCB0ZXh0OiBjb21tZW50LnRleHQsIHN0YXR1czogY29tbWVudC5zdGF0dXMsIGxpa2VzOiBjb21tZW50Lmxpa2VzLCB2aWV3ZXI6IGNvbW1lbnQudmlld2VyLCBpblJlcGx5VG9Vc2VyOiBjb21tZW50LmluUmVwbHlUb1VzZXIsIHRvTmFtZTogY29tbWVudC50b05hbWUgfSwgY29tbWVudC5pZCkpO1xuICAgICAgICAgICAgICAgIH0pXSB9KSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJkaXNwbGF5LWZsZXhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImltZ1wiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50X19oZWFkZXJfX2ltYWdlXCIsIHNyYzogcHJvcHMuYXV0aG9yLnBob3RvLCBhbHQ6IFwiY29tbWVudCdzIGF1dGhvciBpbWFnZVwiLCBvbkVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVU0VSX1BMQUNFSE9MREVSX0lNQUdFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50X19oZWFkZXJfX25hbWUtYW5kLWRhdGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fbmFtZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KHByb3BzLmF1dGhvci51c2VybmFtZSkgfSwgeyBjaGlsZHJlbjogcHJvcHMuYXV0aG9yLm5hbWUgfSkpLCBwcm9wcy5hdXRob3IuaWQgPT09IHByb3BzLnBhZ2VBdXRob3JJZCAmJiAoX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fYXV0aG9yLWxhYmVsXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiLS0tLS0tLVwiIH0pLCBcIkF1dGhvclwiXSB9KSkpXSB9KSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IHByb3BzLmRhdGUgfSldIH0pKV0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fYWN0aW9uc1wiIH0sIHsgY2hpbGRyZW46IF9qc3goQ29tbWVudEFjdGlvbnMsIHsgaWQ6IHByb3BzLmlkLCB2aWV3ZXI6IHByb3BzLnZpZXdlciwgcmVmOiBhZGRSZXBseUlucHV0LCBzdGF0dXM6IHByb3BzLnN0YXR1cywgbGlrZXM6IHByb3BzLmxpa2VzLCBvblJlcGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUNvbW1lbnRTdGF0dXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkOiBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJhZGQtcmVwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uTGlrZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChsaWtlQ29tbWVudChwcm9wcy5pZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uRWRpdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VDb21tZW50U3RhdHVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogcHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25EZWxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlbkRlbGV0ZUNvbmZpcm1hdGlvbihwcm9wcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSldIH0pKSwgX2pzeChDb21tZW50Qm9keSwgeyBzdGF0dXM6IHByb3BzLnN0YXR1cywgdGV4dDogcHJvcHMudGV4dCwgaWQ6IHByb3BzLmlkIH0pLCBwcm9wcy5zdGF0dXMgPT0gXCJhZGQtcmVwbHlcIiAmJiAoX2pzeChBZGRSZXBseUZvcm1cbiAgICAgICAgICAgIC8vIHJlZj17YWRkUmVwbHlJbnB1dH1cbiAgICAgICAgICAgICwgeyBcbiAgICAgICAgICAgICAgICAvLyByZWY9e2FkZFJlcGx5SW5wdXR9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZENvbW1lbnQodGV4dCwgcHJvcHMuaWQpKTtcbiAgICAgICAgICAgICAgICB9LCBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2VDb21tZW50U3RhdHVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogcHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50LXJlcGxpZXNcIiB9LCB7IGNoaWxkcmVuOiByZXBsaWVzIH0pKV0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1dGlsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwsIEJ1dHRvbiwgTG9hZGluZywgVGV4dGFyZWEgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgc2VsZWN0TG9hZGluZywgZmV0Y2hDb21tZW50cywgc2VsZWN0Q29tbWVudHMsIHNlbGVjdFRvdGFsQ291bnQsIGRlbGV0ZUNvbW1lbnQsIGFkZENvbW1lbnQsIH0gZnJvbSBcIi4vY29tbWVudHNTbGljZVwiO1xuaW1wb3J0IHsgc2VsZWN0TG9hZGluZyBhcyBzZWxlY3RQYWdlTG9hZGluZywgc2VsZWN0QXV0aG9yLCBzZWxlY3RJZCwgfSBmcm9tIFwiLi9wYWdlU2xpY2VcIjtcbmltcG9ydCB7IHNlbGVjdFN0YXR1cyB9IGZyb20gXCIuL3VzZXJTbGljZVwiO1xuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4uLy4uL3BhcnRpYWxzL2NvbW1lbnRcIjtcbnZhciBDb21tZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFnZUxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RQYWdlTG9hZGluZyk7XG4gICAgdmFyIHBhZ2VJZCA9IHVzZVNlbGVjdG9yKHNlbGVjdElkKTtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBjb21tZW50cyA9IHVzZVNlbGVjdG9yKHNlbGVjdENvbW1lbnRzKTtcbiAgICB2YXIgdXNlclN0YXR1cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFN0YXR1cyk7XG4gICAgdmFyIHRvdGFsQ291bnQgPSB1c2VTZWxlY3RvcihzZWxlY3RUb3RhbENvdW50KTtcbiAgICB2YXIgcGFnZUF1dGhvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEF1dGhvcik7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgbmV3Q29tbWVudCA9IF9hWzBdLCBzZXROZXdDb21tZW50ID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBjb25maXJtYXRpb25Nb2RhbE9wZW4gPSBfYlswXSwgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuID0gX2JbMV07IC8vIGRlbGV0ZSBjb21tZW50IGNvbmZpcm1hdGlvblxuICAgIHZhciBfYyA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtYXRpb25Nb2RhbENvbW1lbnRJZCA9IF9jWzBdLCBzZXRDb25maXJtYXRpb25Nb2RhbENvbW1lbnRJZCA9IF9jWzFdOyAvLyBpZCBvZiB0aGUgY29tbWVudCB0byBiZSBkZWxldGVkXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFwYWdlTG9hZGluZykge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hDb21tZW50cygpKTtcbiAgICAgICAgfVxuICAgIH0sIFtwYWdlTG9hZGluZ10pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdHJhY2tTY3JvbGxpbmcpO1xuICAgIH0sIFtjb21tZW50cy5sZW5ndGhdKTtcbiAgICAvLyBAVE9ETzogV0hZPyFcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBmZXRjaENvbW1lbnRzKCk7XG4gICAgfSwgW3BhZ2VJZF0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYWNrU2Nyb2xsaW5nKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHRyYWNrU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRzMlwiKTtcbiAgICAgICAgaWYgKHV0aWwuaXNCb3R0b20od3JhcHBlZEVsZW1lbnQpICYmXG4gICAgICAgICAgICBjb21tZW50cy5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICBjb21tZW50cy5sZW5ndGggJSAxMCA9PT0gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hDb21tZW50cygpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdHJhY2tTY3JvbGxpbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSZW5kZXIgdGhlIGxpc3Qgb2YgY29tbWVudHNcbiAgICB2YXIgcmVuZGVyQ29tbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb21tZW50cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibm8tY29tbWVudC1tZXNzYWdlIG1hcmdpbi10b3AtMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiTm8gY29tbWVudCB5ZXQuIEJlIHRoZSBmaXJzdCBvbmUgdG8gY29tbWVudCBvbiB0aGlzIHBhZ2UhXCIgfSkgfSkpKTtcbiAgICAgICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gY29tbWVudHMubWFwKGZ1bmN0aW9uIChjb21tZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KENvbW1lbnQsIHsgaWQ6IGNvbW1lbnQuaWQsIHNob3dSZXBsaWVzOiBjb21tZW50LnNob3dSZXBsaWVzLCBzdGF0dXM6IGNvbW1lbnQuc3RhdHVzLCB2aWV3ZXI6IGNvbW1lbnQudmlld2VyLCBhdXRob3I6IGNvbW1lbnQuYXV0aG9yLCBwYWdlQXV0aG9ySWQ6IHBhZ2VBdXRob3IuaWQsIGRhdGU6IGNvbW1lbnQuZGF0ZSwgdGV4dDogY29tbWVudC50ZXh0LCBsaWtlczogY29tbWVudC5saWtlcywgcmVwbGllczogY29tbWVudC5yZXBsaWVzIHx8IFtdLCBoaWdobGlnaHRlZFJlcGxpZXM6IGNvbW1lbnQuaGlnaGxpZ2h0ZWRSZXBsaWVzLCBvcGVuRGVsZXRlQ29uZmlybWF0aW9uOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsQ29tbWVudElkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LCBjb21tZW50LmlkKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIFJlbmRlciBhZGQgY29tbWVudCBmb3JtLCBkb2Vzbid0IHNob3cgdGhlIGZvcm0gaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAgdmFyIHJlbmRlckFkZENvbW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdXNlclN0YXR1cyB8fCB1c2VyU3RhdHVzID09PSBcInNwZWN0YXRvclwiKVxuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19jb21tZW50c19fYWRkXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19sYWJlbFwiIH0sIHsgY2hpbGRyZW46IFwiQWRkIGEgbmV3IGNvbW1lbnRcIiB9KSksIF9qc3hzKFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJub3JtYWwtcGFyYWdyYXBoXCIgfSwgeyBjaGlsZHJlbjogW1wiUGxlYXNlIFwiLCBfanN4KFwiYVwiLCBfX2Fzc2lnbih7IGhyZWY6IFwiL2xvZ2luXCIgfSwgeyBjaGlsZHJlbjogXCJsb2dpblwiIH0pKSwgXCIgaWYgeW91IHdhbnQgdG8gYWRkIHlvdXIgY29tbWVudCBmb3IgdGhpcyBwYWdlIG9yIHJlcGx5IHRvIG90aGVycy5cIl0gfSkpXSB9KSkpO1xuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fY29tbWVudHNfX2FkZFwiLCBpZDogXCJhZGQtY29tbWVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZm9ybVwiLCBfX2Fzc2lnbih7IG1ldGhvZDogXCJwb3N0XCIsIG9uU3VibWl0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZENvbW1lbnQobmV3Q29tbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICBzZXROZXdDb21tZW50KFwiXCIpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goVGV4dGFyZWEsIHsgbGFiZWw6IFwiQWRkIGEgTmV3IENvbW1lbnRcIiwgdmFsdWU6IG5ld0NvbW1lbnQsIHJvd3M6IDUsIHBsYWNlaG9sZGVyOiBcIlR5cGUgeW91ciBjb21tZW50IGFib3V0IHRoZSBwYWdlLi4uXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3Q29tbWVudCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCByb3VuZGVkOiB0cnVlLCBjb2xvcjogXCJibHVlXCIsIGRpc2FibGVkOiBuZXdDb21tZW50Lmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWUgfSwgeyBjaGlsZHJlbjogXCJTdWJtaXRcIiB9KSkgfSkpXSB9KSkgfSkpKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KENvbmZpcm1Nb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiRGVsZXRlIFlvdXIgQ29tbWVudD9cIiwgb3BlbjogY29uZmlybWF0aW9uTW9kYWxPcGVuLCBidG5OYW1lOiBcIkRlbGV0ZVwiLCBvbkNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKGRlbGV0ZUNvbW1lbnQoY29uZmlybWF0aW9uTW9kYWxDb21tZW50SWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsQ29tbWVudElkKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsQ29tbWVudElkKFwiXCIpO1xuICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB5b3VyIGNvbW1lbnQ/IEFsbCB0aGUgb3RoZXIgcmVwbGllcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb21tZW50IHdpbGwgYWxzbyBnZXQgcmVtb3ZlZC5cIiwgX2pzeChcImJyXCIsIHt9KSwgXCJZb3UgXCIsIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJjYW5ub3QgdW5kb1wiIH0pLCBcIiB0aGlzIGFjdGlvbi5cIl0gfSkgfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2NvbW1lbnRzXCIsIGlkOiBcImNvbW1lbnRzMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicm93XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29tbWVudHMtd3JhcHBlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImgyXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImhlYWRpbmctdGVydGlhcnkgY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBbdG90YWxDb3VudCwgXCIgQ29tbWVudHNcIl0gfSkpLCAhbG9hZGluZyAmJiByZW5kZXJBZGRDb21tZW50KCksICFsb2FkaW5nICYmIHJlbmRlckNvbW1lbnRzKCksIGxvYWRpbmcgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2VudGVyLWNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KExvYWRpbmcsIHt9KSB9KSkpXSB9KSkgfSkpIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9