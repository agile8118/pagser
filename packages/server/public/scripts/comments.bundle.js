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
/* harmony import */ var _CommentActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentActions */ "./src/partials/comment/CommentActions.tsx");
/* harmony import */ var _CommentBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentBody */ "./src/partials/comment/CommentBody.tsx");
/* harmony import */ var _AddReplyForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddReplyForm */ "./src/partials/comment/AddReplyForm.tsx");
/* harmony import */ var _views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/show-page/commentsSlice */ "./src/views/show-page/commentsSlice.ts");
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
                                                "/images/users/placeholder.png";
                                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment__header__name-and-date" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__name" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ target: "_blank", href: "/users/".concat(props.author.username) }, { children: props.author.name })), props.author.id === props.pageAuthorId && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__author-label" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "-------" }), "Author"] })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: props.date })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment__header__actions" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentActions__WEBPACK_IMPORTED_MODULE_3__["default"], { id: props.id, viewer: props.viewer, ref: addReplyInput, likes: props.likes, status: props.status, onReply: function () {
                                        dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_6__.changeCommentStatus)({
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
                                        dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_6__.likeComment)(props.id, props.parentCommentId));
                                    }, onEdit: function () {
                                        dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_6__.changeCommentStatus)({
                                            commentId: props.parentCommentId,
                                            status: "edit",
                                            replyId: props.id,
                                        }));
                                        // props.editCommentForm(props.parentCommentId, "show", props.id);
                                    }, onDelete: function () {
                                        if (props.openDeleteConfirmation)
                                            props.openDeleteConfirmation(props.id);
                                        // props.openMdl("confDeleteComment", props.id);
                                    } }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentBody__WEBPACK_IMPORTED_MODULE_4__["default"], { status: props.status, inReplyToUser: props.inReplyToUser, text: props.text, id: props.parentCommentId, replyId: props.id })] })), props.status === "add-reply" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddReplyForm__WEBPACK_IMPORTED_MODULE_5__["default"]
            // ref={addReplyInput}
            , { 
                // ref={addReplyInput}
                toName: props.toName, onSubmit: function (text) {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_6__.addComment)(text, props.parentCommentId, props.id));
                }, onCancel: function () {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_6__.changeCommentStatus)({
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
/* harmony import */ var _CommentReply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentReply */ "./src/partials/comment/CommentReply.tsx");
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








var Comment = function (props) {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var addReplyInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    // Number of comment replies
    var repliesNum = typeof props.replies === "number" ? props.replies : props.replies.length;
    // Button to either show or hide the replies
    var showHideRepliesBtn = !props.showReplies ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: "javascript:void(0)", className: "btn btn-text comment__view-replies", onClick: function () {
            dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.fetchReplies)(props.id));
        } }, { children: [repliesNum > 1 ? "View all ".concat(repliesNum, " replies") : "View reply", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-caret-down", "aria-hidden": "true" })] }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ href: "javascript:void(0)", className: "btn btn-text comment__view-replies", onClick: function () {
            dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.hideReplies)(props.id));
        } }, { children: [repliesNum > 1 ? "Hide all ".concat(repliesNum, " replies") : "Hide reply", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-caret-up", "aria-hidden": "true" })] })));
    // Render the comment replies along with show hide replies button
    var replies = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [repliesNum > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "right-content" }, { children: showHideRepliesBtn }))), props.showReplies &&
                repliesNum > 0 &&
                props.replies.map(function (comment) {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentReply__WEBPACK_IMPORTED_MODULE_3__["default"], { parentCommentId: props.id, id: comment.id, author: comment.author, pageAuthorId: props.pageAuthorId, date: comment.date, text: comment.text, status: comment.status, likes: comment.likes, viewer: comment.viewer, inReplyToUser: comment.inReplyToUser, toName: comment.toName }, comment.id));
                }), props.highlightedReplies &&
                !props.showReplies &&
                props.highlightedReplies.map(function (comment) {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentReply__WEBPACK_IMPORTED_MODULE_3__["default"], { parentCommentId: props.id, id: comment.id, author: comment.author, pageAuthorId: props.pageAuthorId, date: comment.date, text: comment.text, status: comment.status, likes: comment.likes, viewer: comment.viewer, inReplyToUser: comment.inReplyToUser, toName: comment.toName }, comment.id));
                })] }));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment__header" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "display-flex" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "comment__header__image", src: props.author.photo, alt: "comment's author image", onError: function (e) {
                                    e.target.src =
                                        "/images/users/placeholder.png";
                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "comment__header__name-and-date" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__name" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", __assign({ target: "_blank", href: "/users/".concat(props.author.username) }, { children: props.author.name })), props.author.id === props.pageAuthorId && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", __assign({ className: "comment__header__author-label" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "-------" }), "Author"] })))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: props.date })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "comment__header__actions" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentActions__WEBPACK_IMPORTED_MODULE_4__["default"], { id: props.id, viewer: props.viewer, ref: addReplyInput, status: props.status, likes: props.likes, onReply: function () {
                                dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.changeCommentStatus)({
                                    commentId: props.id,
                                    status: "add-reply",
                                }));
                            }, onLike: function () {
                                dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.likeComment)(props.id));
                            }, onEdit: function () {
                                dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.changeCommentStatus)({
                                    commentId: props.id,
                                    status: "edit",
                                }));
                            }, onDelete: function () {
                                props.openDeleteConfirmation(props.id);
                            } }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CommentBody__WEBPACK_IMPORTED_MODULE_5__["default"], { status: props.status, text: props.text, id: props.id }), props.status == "add-reply" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddReplyForm__WEBPACK_IMPORTED_MODULE_6__["default"]
            // ref={addReplyInput}
            , { 
                // ref={addReplyInput}
                onSubmit: function (text) {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.addComment)(text, props.id));
                }, onCancel: function () {
                    dispatch((0,_views_show_page_commentsSlice__WEBPACK_IMPORTED_MODULE_7__.changeCommentStatus)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLG1CQUFtQiwyRUFBMkUsS0FBSztBQUNsWixnQkFBZ0Isc0RBQUksbUJBQW1CLHFEQUFxRCxJQUFJLFVBQVUsdURBQUssb0JBQW9CO0FBQ25JO0FBQ0EsNkJBQTZCLDBEQUFVO0FBQ3ZDO0FBQ0EsbUJBQW1CLElBQUksV0FBVyxzREFBSSxtQkFBbUIseUJBQXlCLElBQUksVUFBVSxzREFBSSxDQUFDLHNEQUFRLElBQUk7QUFDakg7QUFDQSwrQkFBK0IsR0FBRyxJQUFJLHNEQUFJLG1CQUFtQixnQ0FBZ0MsSUFBSSxVQUFVLHNEQUFJLENBQUMsb0RBQU0sYUFBYSw4RkFBOEYsSUFBSSxvQkFBb0IsSUFBSSxLQUFLLElBQUk7QUFDdFE7QUFDQSxZQUFZLHVEQUFLLENBQUMsdURBQWMsSUFBSSxXQUFXLHNEQUFJLENBQUMsMERBQVksYUFBYTtBQUM3RSxvQ0FBb0MsNkRBQWE7QUFDakQ7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1CQUFtQixJQUFJLFVBQVUsdURBQUssUUFBUSwySUFBMkksc0RBQUksU0FBUyxXQUFXLHNEQUFJLGFBQWEseUJBQXlCLHFCQUFxQixHQUFHLElBQUksc0RBQUksbUJBQW1CLDhDQUE4QyxJQUFJLFVBQVUsc0RBQUksbUJBQW1CLGtCQUFrQixJQUFJLFVBQVUsdURBQUssbUJBQW1CLCtCQUErQixJQUFJLFdBQVcsdURBQUssa0JBQWtCLDhDQUE4QyxJQUFJLHFDQUFxQyw4RUFBOEUsc0RBQUksbUJBQW1CLDZCQUE2QixJQUFJLFVBQVUsc0RBQUksQ0FBQyxxREFBTyxJQUFJLEdBQUcsTUFBTSxJQUFJLElBQUksS0FBSztBQUMzd0I7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy9wYXJ0aWFscy9jb21tZW50L0FkZFJlcGx5Rm9ybS50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvcGFydGlhbHMvY29tbWVudC9Db21tZW50QWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvcGFydGlhbHMvY29tbWVudC9Db21tZW50Qm9keS50c3giLCJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvcGFydGlhbHMvY29tbWVudC9Db21tZW50UmVwbHkudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3BhcnRpYWxzL2NvbW1lbnQvaW5kZXgudHN4Iiwid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9Db21tZW50cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuLy8gQFRPRE86IGZpeCB0aGUgYW55IHR5cGVcbnZhciBhZGRSZXBseUZvcm0gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShcIlwiKSwgdGV4dCA9IF9hWzBdLCBzZXRUZXh0ID0gX2FbMV07XG4gICAgcmV0dXJuIChfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByb3BzLm9uU3VibWl0KHRleHQpO1xuICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtX19ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgc2l6ZTogXCJzbWFsbFwiLCB2YWx1ZTogdGV4dCwgbGluZWQ6IHRydWUsIGF1dG9Gb2N1czogdHJ1ZSwgcmVxdWlyZWQ6IHRydWUsIGlubmVySW5wdXRMYWJlbDogcHJvcHMudG9OYW1lLCBwbGFjZWhvbGRlcjogXCJBZGQgeW91ciByZXBseS4uLlwiLCBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJpZ2h0LWNvbnRlbnQgbWFyZ2luLWJvdHRvbS0yXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBtYXJnaW4tcmlnaHQtMVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9wcy5vbkNhbmNlbCgpOyB9IH0sIHsgY2hpbGRyZW46IFwiQ2FuY2VsXCIgfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tc20gYnRuLWJsdWVcIiB9LCB7IGNoaWxkcmVuOiBcIkFkZFwiIH0pKV0gfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFkZFJlcGx5Rm9ybTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuLy8gQFRPRE86IGZpeCB0aGUgYW55IHR5cGVcbnZhciBDb21tZW50QWN0aW9ucyA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICBpZiAocHJvcHMuc3RhdHVzID09PSBcImVkaXRcIilcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX3JhdGluZ3NcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogcHJvcHMubGlrZXMgfSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmlnIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvcHMub25MaWtlKCk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdGh1bWJzLXVwXCIgfSkgfSkpXSB9KSB9KSksIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJpZyBidG4taS1ibHVlXCIsIGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblJlcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IHJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXJlcGx5XCIgfSkgfSkpLCBwcm9wcy52aWV3ZXIgPT09IFwib3duZXJcIiAmJiAoX2pzeHMoRHJvcGRvd24sIF9fYXNzaWduKHsgdHlwZTogXCJtaW5pXCIsIGNsYXNzTmFtZTogXCJidG4taSBidG4taS1iaWcgYnRuLWktYmx1ZSBjb21tZW50X19lbGxpcHNpc1wiLCBudW06IHByb3BzLmlkLCBvbkNoYW5nZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiZWRpdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25FZGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25EZWxldGUoKTtcbiAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgXCJkYXRhLXJvbGUtbmFtZVwiOiBcImJ0bi1uYW1lXCIsIFwiZGF0YS1pY29uLWNsYXNzXCI6IFwiZmEgZmEtZWxsaXBzaXMtdlwiIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwiZWRpdFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW8gbWFyZ2luLXJpZ2h0LTA3XCIgfSksIFwiIEVkaXRcIl0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IFwiZGF0YS1yb2xlLW5hbWVcIjogXCJpdGVtXCIsIFwiZGF0YS1uYW1lXCI6IFwiZGVsZXRlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRyYXNoIG1hcmdpbi1yaWdodC0wN1wiIH0pLCBcIiBEZWxldGVcIl0gfSkpXSB9KSkpXSB9KSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRBY3Rpb25zO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY2hhbmdlQ29tbWVudFN0YXR1cywgZWRpdENvbW1lbnQsIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL3Nob3ctcGFnZS9jb21tZW50c1NsaWNlXCI7XG52YXIgQ29tbWVudEJvZHkgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50X19ib2R5XCIgfSwgeyBjaGlsZHJlbjogcHJvcHMuc3RhdHVzID09PSBcImVkaXRcIiA/IChfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdXG4gICAgICAgICAgICAgICAgICAgID8gLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChlZGl0Q29tbWVudChwcm9wcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2dyb3VwXCIgfSwgeyBjaGlsZHJlbjogW3Byb3BzLmluUmVwbHlUb1VzZXIgJiYgKF9qc3goXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2lucHV0X190ZXh0LWxhYmVsXCIsIHJlZjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgbGVmdCBwYWRkaW5nIHRvIHRoZSBpbnB1dCBiZWNhdXNlIG9mIHRoZSBuYW1lIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5uZXh0U2libGluZy5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiXCIuY29uY2F0KGVsZW0uY2xpZW50V2lkdGggKyAxMCwgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IHByb3BzLmluUmVwbHlUb1VzZXIgfSkpKSwgX2pzeChcInRleHRhcmVhXCIsIHsgcm93czogMSwgcmVxdWlyZWQ6IHRydWUsIGNsYXNzTmFtZTogXCJmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tbGluZWRcIiwgcmVmOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC52YWx1ZSA9IHByb3BzLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyaWdodC1jb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChjaGFuZ2VDb21tZW50U3RhdHVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogcHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBseUlkOiBwcm9wcy5yZXBseUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiBcImJ0biBidG4tc20gYnRuLWRlZmF1bHQgIG1hcmdpbi1yaWdodC0xXCIgfSwgeyBjaGlsZHJlbjogXCJDYW5jZWxcIiB9KSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1zbSBidG4tYmx1ZSBcIiB9LCB7IGNoaWxkcmVuOiBcIlVwZGF0ZVwiIH0pKV0gfSkpXSB9KSkpIDogKF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbcHJvcHMuaW5SZXBseVRvVXNlciAmJiAoX2pzeChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYS0xN1wiIH0sIHsgY2hpbGRyZW46IHByb3BzLmluUmVwbHlUb1VzZXIgfSkpKSwgcHJvcHMudGV4dF0gfSkpIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEJvZHk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ29tbWVudEFjdGlvbnMgZnJvbSBcIi4vQ29tbWVudEFjdGlvbnNcIjtcbmltcG9ydCBDb21tZW50Qm9keSBmcm9tIFwiLi9Db21tZW50Qm9keVwiO1xuaW1wb3J0IEFkZFJlcGx5Rm9ybSBmcm9tIFwiLi9BZGRSZXBseUZvcm1cIjtcbmltcG9ydCB7IGFkZENvbW1lbnQsIGNoYW5nZUNvbW1lbnRTdGF0dXMsIGxpa2VDb21tZW50LCB9IGZyb20gXCIuLi8uLi92aWV3cy9zaG93LXBhZ2UvY29tbWVudHNTbGljZVwiO1xudmFyIENvbW1lbnRSZXBseSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIGFkZFJlcGx5SW5wdXQgPSB1c2VSZWYoKTtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29tbWVudFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50X19oZWFkZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZGlzcGxheS1mbGV4XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwiY29tbWVudF9faGVhZGVyX19pbWFnZVwiLCBzcmM6IHByb3BzLmF1dGhvci5waG90bywgYWx0OiBcImNvbW1lbnQncyBhdXRob3IgaW1hZ2VcIiwgb25FcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ltYWdlcy91c2Vycy9wbGFjZWhvbGRlci5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50X19oZWFkZXJfX25hbWUtYW5kLWRhdGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fbmFtZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYVwiLCBfX2Fzc2lnbih7IHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KHByb3BzLmF1dGhvci51c2VybmFtZSkgfSwgeyBjaGlsZHJlbjogcHJvcHMuYXV0aG9yLm5hbWUgfSkpLCBwcm9wcy5hdXRob3IuaWQgPT09IHByb3BzLnBhZ2VBdXRob3JJZCAmJiAoX2pzeHMoXCJzcGFuXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fYXV0aG9yLWxhYmVsXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiLS0tLS0tLVwiIH0pLCBcIkF1dGhvclwiXSB9KSkpXSB9KSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IHByb3BzLmRhdGUgfSldIH0pKV0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fYWN0aW9uc1wiIH0sIHsgY2hpbGRyZW46IF9qc3goQ29tbWVudEFjdGlvbnMsIHsgaWQ6IHByb3BzLmlkLCB2aWV3ZXI6IHByb3BzLnZpZXdlciwgcmVmOiBhZGRSZXBseUlucHV0LCBsaWtlczogcHJvcHMubGlrZXMsIHN0YXR1czogcHJvcHMuc3RhdHVzLCBvblJlcGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlQ29tbWVudFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogcHJvcHMucGFyZW50Q29tbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiYWRkLXJlcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGx5SWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b05hbWU6IHByb3BzLmF1dGhvci5uYW1lLCAvLyA/IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAVE9ETzogcGFzcyB1c2VySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHMuYWRkUmVwbHlGb3JtKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcHJvcHMucGFyZW50Q29tbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHByb3BzLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25MaWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobGlrZUNvbW1lbnQocHJvcHMuaWQsIHByb3BzLnBhcmVudENvbW1lbnRJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25FZGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlQ29tbWVudFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogcHJvcHMucGFyZW50Q29tbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBseUlkOiBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHMuZWRpdENvbW1lbnRGb3JtKHByb3BzLnBhcmVudENvbW1lbnRJZCwgXCJzaG93XCIsIHByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uRGVsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLm9wZW5EZWxldGVDb25maXJtYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9wZW5EZWxldGVDb25maXJtYXRpb24ocHJvcHMuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3BzLm9wZW5NZGwoXCJjb25mRGVsZXRlQ29tbWVudFwiLCBwcm9wcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKV0gfSkpLCBfanN4KENvbW1lbnRCb2R5LCB7IHN0YXR1czogcHJvcHMuc3RhdHVzLCBpblJlcGx5VG9Vc2VyOiBwcm9wcy5pblJlcGx5VG9Vc2VyLCB0ZXh0OiBwcm9wcy50ZXh0LCBpZDogcHJvcHMucGFyZW50Q29tbWVudElkLCByZXBseUlkOiBwcm9wcy5pZCB9KV0gfSkpLCBwcm9wcy5zdGF0dXMgPT09IFwiYWRkLXJlcGx5XCIgJiYgKF9qc3goQWRkUmVwbHlGb3JtXG4gICAgICAgICAgICAvLyByZWY9e2FkZFJlcGx5SW5wdXR9XG4gICAgICAgICAgICAsIHsgXG4gICAgICAgICAgICAgICAgLy8gcmVmPXthZGRSZXBseUlucHV0fVxuICAgICAgICAgICAgICAgIHRvTmFtZTogcHJvcHMudG9OYW1lLCBvblN1Ym1pdDogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ29tbWVudCh0ZXh0LCBwcm9wcy5wYXJlbnRDb21tZW50SWQsIHByb3BzLmlkKSk7XG4gICAgICAgICAgICAgICAgfSwgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlQ29tbWVudFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQ6IHByb3BzLnBhcmVudENvbW1lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGx5SWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IHBhc3MgdXNlcklkXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvcHMuYWRkUmVwbHlGb3JtKHByb3BzLnBhcmVudENvbW1lbnRJZCwgXCJoaWRlXCIsIHByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICB9IH0pKV0gfSwgcHJvcHMuaWQpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21tZW50UmVwbHk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ29tbWVudFJlcGx5IGZyb20gXCIuL0NvbW1lbnRSZXBseVwiO1xuaW1wb3J0IENvbW1lbnRBY3Rpb25zIGZyb20gXCIuL0NvbW1lbnRBY3Rpb25zXCI7XG5pbXBvcnQgQ29tbWVudEJvZHkgZnJvbSBcIi4vQ29tbWVudEJvZHlcIjtcbmltcG9ydCBBZGRSZXBseUZvcm0gZnJvbSBcIi4vQWRkUmVwbHlGb3JtXCI7XG5pbXBvcnQgeyBmZXRjaFJlcGxpZXMsIGFkZENvbW1lbnQsIGNoYW5nZUNvbW1lbnRTdGF0dXMsIGhpZGVSZXBsaWVzLCBsaWtlQ29tbWVudCwgfSBmcm9tIFwiLi4vLi4vdmlld3Mvc2hvdy1wYWdlL2NvbW1lbnRzU2xpY2VcIjtcbnZhciBDb21tZW50ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgYWRkUmVwbHlJbnB1dCA9IHVzZVJlZigpO1xuICAgIC8vIE51bWJlciBvZiBjb21tZW50IHJlcGxpZXNcbiAgICB2YXIgcmVwbGllc051bSA9IHR5cGVvZiBwcm9wcy5yZXBsaWVzID09PSBcIm51bWJlclwiID8gcHJvcHMucmVwbGllcyA6IHByb3BzLnJlcGxpZXMubGVuZ3RoO1xuICAgIC8vIEJ1dHRvbiB0byBlaXRoZXIgc2hvdyBvciBoaWRlIHRoZSByZXBsaWVzXG4gICAgdmFyIHNob3dIaWRlUmVwbGllc0J0biA9ICFwcm9wcy5zaG93UmVwbGllcyA/IChfanN4cyhcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi10ZXh0IGNvbW1lbnRfX3ZpZXctcmVwbGllc1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFJlcGxpZXMocHJvcHMuaWQpKTtcbiAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbcmVwbGllc051bSA+IDEgPyBcIlZpZXcgYWxsIFwiLmNvbmNhdChyZXBsaWVzTnVtLCBcIiByZXBsaWVzXCIpIDogXCJWaWV3IHJlcGx5XCIsIF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWNhcmV0LWRvd25cIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpKSA6IChfanN4cyhcImFcIiwgX19hc3NpZ24oeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi10ZXh0IGNvbW1lbnRfX3ZpZXctcmVwbGllc1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlUmVwbGllcyhwcm9wcy5pZCkpO1xuICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtyZXBsaWVzTnVtID4gMSA/IFwiSGlkZSBhbGwgXCIuY29uY2F0KHJlcGxpZXNOdW0sIFwiIHJlcGxpZXNcIikgOiBcIkhpZGUgcmVwbHlcIiwgX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtY2FyZXQtdXBcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KV0gfSkpKTtcbiAgICAvLyBSZW5kZXIgdGhlIGNvbW1lbnQgcmVwbGllcyBhbG9uZyB3aXRoIHNob3cgaGlkZSByZXBsaWVzIGJ1dHRvblxuICAgIHZhciByZXBsaWVzID0gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbcmVwbGllc051bSA+IDAgJiYgKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicmlnaHQtY29udGVudFwiIH0sIHsgY2hpbGRyZW46IHNob3dIaWRlUmVwbGllc0J0biB9KSkpLCBwcm9wcy5zaG93UmVwbGllcyAmJlxuICAgICAgICAgICAgICAgIHJlcGxpZXNOdW0gPiAwICYmXG4gICAgICAgICAgICAgICAgcHJvcHMucmVwbGllcy5tYXAoZnVuY3Rpb24gKGNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KENvbW1lbnRSZXBseSwgeyBwYXJlbnRDb21tZW50SWQ6IHByb3BzLmlkLCBpZDogY29tbWVudC5pZCwgYXV0aG9yOiBjb21tZW50LmF1dGhvciwgcGFnZUF1dGhvcklkOiBwcm9wcy5wYWdlQXV0aG9ySWQsIGRhdGU6IGNvbW1lbnQuZGF0ZSwgdGV4dDogY29tbWVudC50ZXh0LCBzdGF0dXM6IGNvbW1lbnQuc3RhdHVzLCBsaWtlczogY29tbWVudC5saWtlcywgdmlld2VyOiBjb21tZW50LnZpZXdlciwgaW5SZXBseVRvVXNlcjogY29tbWVudC5pblJlcGx5VG9Vc2VyLCB0b05hbWU6IGNvbW1lbnQudG9OYW1lIH0sIGNvbW1lbnQuaWQpKTtcbiAgICAgICAgICAgICAgICB9KSwgcHJvcHMuaGlnaGxpZ2h0ZWRSZXBsaWVzICYmXG4gICAgICAgICAgICAgICAgIXByb3BzLnNob3dSZXBsaWVzICYmXG4gICAgICAgICAgICAgICAgcHJvcHMuaGlnaGxpZ2h0ZWRSZXBsaWVzLm1hcChmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goQ29tbWVudFJlcGx5LCB7IHBhcmVudENvbW1lbnRJZDogcHJvcHMuaWQsIGlkOiBjb21tZW50LmlkLCBhdXRob3I6IGNvbW1lbnQuYXV0aG9yLCBwYWdlQXV0aG9ySWQ6IHByb3BzLnBhZ2VBdXRob3JJZCwgZGF0ZTogY29tbWVudC5kYXRlLCB0ZXh0OiBjb21tZW50LnRleHQsIHN0YXR1czogY29tbWVudC5zdGF0dXMsIGxpa2VzOiBjb21tZW50Lmxpa2VzLCB2aWV3ZXI6IGNvbW1lbnQudmlld2VyLCBpblJlcGx5VG9Vc2VyOiBjb21tZW50LmluUmVwbHlUb1VzZXIsIHRvTmFtZTogY29tbWVudC50b05hbWUgfSwgY29tbWVudC5pZCkpO1xuICAgICAgICAgICAgICAgIH0pXSB9KSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJkaXNwbGF5LWZsZXhcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImltZ1wiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50X19oZWFkZXJfX2ltYWdlXCIsIHNyYzogcHJvcHMuYXV0aG9yLnBob3RvLCBhbHQ6IFwiY29tbWVudCdzIGF1dGhvciBpbWFnZVwiLCBvbkVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9pbWFnZXMvdXNlcnMvcGxhY2Vob2xkZXIucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksIF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnRfX2hlYWRlcl9fbmFtZS1hbmQtZGF0ZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29tbWVudF9faGVhZGVyX19uYW1lXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgdGFyZ2V0OiBcIl9ibGFua1wiLCBocmVmOiBcIi91c2Vycy9cIi5jb25jYXQocHJvcHMuYXV0aG9yLnVzZXJuYW1lKSB9LCB7IGNoaWxkcmVuOiBwcm9wcy5hdXRob3IubmFtZSB9KSksIHByb3BzLmF1dGhvci5pZCA9PT0gcHJvcHMucGFnZUF1dGhvcklkICYmIChfanN4cyhcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29tbWVudF9faGVhZGVyX19hdXRob3ItbGFiZWxcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogXCItLS0tLS0tXCIgfSksIFwiQXV0aG9yXCJdIH0pKSldIH0pKSwgX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogcHJvcHMuZGF0ZSB9KV0gfSkpXSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29tbWVudF9faGVhZGVyX19hY3Rpb25zXCIgfSwgeyBjaGlsZHJlbjogX2pzeChDb21tZW50QWN0aW9ucywgeyBpZDogcHJvcHMuaWQsIHZpZXdlcjogcHJvcHMudmlld2VyLCByZWY6IGFkZFJlcGx5SW5wdXQsIHN0YXR1czogcHJvcHMuc3RhdHVzLCBsaWtlczogcHJvcHMubGlrZXMsIG9uUmVwbHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hhbmdlQ29tbWVudFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImFkZC1yZXBseVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25MaWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxpa2VDb21tZW50KHByb3BzLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25FZGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUNvbW1lbnRTdGF0dXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkOiBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJlZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkRlbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcGVuRGVsZXRlQ29uZmlybWF0aW9uKHByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKV0gfSkpLCBfanN4KENvbW1lbnRCb2R5LCB7IHN0YXR1czogcHJvcHMuc3RhdHVzLCB0ZXh0OiBwcm9wcy50ZXh0LCBpZDogcHJvcHMuaWQgfSksIHByb3BzLnN0YXR1cyA9PSBcImFkZC1yZXBseVwiICYmIChfanN4KEFkZFJlcGx5Rm9ybVxuICAgICAgICAgICAgLy8gcmVmPXthZGRSZXBseUlucHV0fVxuICAgICAgICAgICAgLCB7IFxuICAgICAgICAgICAgICAgIC8vIHJlZj17YWRkUmVwbHlJbnB1dH1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdDogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ29tbWVudCh0ZXh0LCBwcm9wcy5pZCkpO1xuICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUNvbW1lbnRTdGF0dXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudElkOiBwcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gfSkpLCBfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbW1lbnQtcmVwbGllc1wiIH0sIHsgY2hpbGRyZW46IHJlcGxpZXMgfSkpXSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHV0aWwgfSBmcm9tIFwiQHBhZ3Nlci9jb21tb25cIjtcbmltcG9ydCB7IENvbmZpcm1Nb2RhbCwgQnV0dG9uLCBMb2FkaW5nLCBUZXh0YXJlYSB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyBzZWxlY3RMb2FkaW5nLCBmZXRjaENvbW1lbnRzLCBzZWxlY3RDb21tZW50cywgc2VsZWN0VG90YWxDb3VudCwgZGVsZXRlQ29tbWVudCwgYWRkQ29tbWVudCwgfSBmcm9tIFwiLi9jb21tZW50c1NsaWNlXCI7XG5pbXBvcnQgeyBzZWxlY3RMb2FkaW5nIGFzIHNlbGVjdFBhZ2VMb2FkaW5nLCBzZWxlY3RBdXRob3IsIHNlbGVjdElkLCB9IGZyb20gXCIuL3BhZ2VTbGljZVwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzIH0gZnJvbSBcIi4vdXNlclNsaWNlXCI7XG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi4vLi4vcGFydGlhbHMvY29tbWVudFwiO1xudmFyIENvbW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYWdlTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2VMb2FkaW5nKTtcbiAgICB2YXIgcGFnZUlkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SWQpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIGNvbW1lbnRzID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q29tbWVudHMpO1xuICAgIHZhciB1c2VyU3RhdHVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3RhdHVzKTtcbiAgICB2YXIgdG90YWxDb3VudCA9IHVzZVNlbGVjdG9yKHNlbGVjdFRvdGFsQ291bnQpO1xuICAgIHZhciBwYWdlQXV0aG9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0QXV0aG9yKTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFwiXCIpLCBuZXdDb21tZW50ID0gX2FbMF0sIHNldE5ld0NvbW1lbnQgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1hdGlvbk1vZGFsT3BlbiA9IF9iWzBdLCBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4gPSBfYlsxXTsgLy8gZGVsZXRlIGNvbW1lbnQgY29uZmlybWF0aW9uXG4gICAgdmFyIF9jID0gdXNlU3RhdGUoXCJcIiksIGNvbmZpcm1hdGlvbk1vZGFsQ29tbWVudElkID0gX2NbMF0sIHNldENvbmZpcm1hdGlvbk1vZGFsQ29tbWVudElkID0gX2NbMV07IC8vIGlkIG9mIHRoZSBjb21tZW50IHRvIGJlIGRlbGV0ZWRcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXBhZ2VMb2FkaW5nKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaENvbW1lbnRzKCkpO1xuICAgICAgICB9XG4gICAgfSwgW3BhZ2VMb2FkaW5nXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFja1Njcm9sbGluZyk7XG4gICAgfSwgW2NvbW1lbnRzLmxlbmd0aF0pO1xuICAgIC8vIEBUT0RPOiBXSFk/IVxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoQ29tbWVudHMoKTtcbiAgICB9LCBbcGFnZUlkXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdHJhY2tTY3JvbGxpbmcpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICB2YXIgdHJhY2tTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudHMyXCIpO1xuICAgICAgICBpZiAodXRpbC5pc0JvdHRvbSh3cmFwcGVkRWxlbWVudCkgJiZcbiAgICAgICAgICAgIGNvbW1lbnRzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIGNvbW1lbnRzLmxlbmd0aCAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaENvbW1lbnRzKCkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFja1Njcm9sbGluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFJlbmRlciB0aGUgbGlzdCBvZiBjb21tZW50c1xuICAgIHZhciByZW5kZXJDb21tZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJuby1jb21tZW50LW1lc3NhZ2UgbWFyZ2luLXRvcC0yXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJObyBjb21tZW50IHlldC4gQmUgdGhlIGZpcnN0IG9uZSB0byBjb21tZW50IG9uIHRoaXMgcGFnZSFcIiB9KSB9KSkpO1xuICAgICAgICBpZiAoY29tbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBjb21tZW50cy5tYXAoZnVuY3Rpb24gKGNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goQ29tbWVudCwgeyBpZDogY29tbWVudC5pZCwgc2hvd1JlcGxpZXM6IGNvbW1lbnQuc2hvd1JlcGxpZXMsIHN0YXR1czogY29tbWVudC5zdGF0dXMsIHZpZXdlcjogY29tbWVudC52aWV3ZXIsIGF1dGhvcjogY29tbWVudC5hdXRob3IsIHBhZ2VBdXRob3JJZDogcGFnZUF1dGhvci5pZCwgZGF0ZTogY29tbWVudC5kYXRlLCB0ZXh0OiBjb21tZW50LnRleHQsIGxpa2VzOiBjb21tZW50Lmxpa2VzLCByZXBsaWVzOiBjb21tZW50LnJlcGxpZXMgfHwgW10sIGhpZ2hsaWdodGVkUmVwbGllczogY29tbWVudC5oaWdobGlnaHRlZFJlcGxpZXMsIG9wZW5EZWxldGVDb25maXJtYXRpb246IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxDb21tZW50SWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sIGNvbW1lbnQuaWQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gUmVuZGVyIGFkZCBjb21tZW50IGZvcm0sIGRvZXNuJ3Qgc2hvdyB0aGUgZm9ybSBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cbiAgICB2YXIgcmVuZGVyQWRkQ29tbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF1c2VyU3RhdHVzIHx8IHVzZXJTdGF0dXMgPT09IFwic3BlY3RhdG9yXCIpXG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX2NvbW1lbnRzX19hZGRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm1fX2xhYmVsXCIgfSwgeyBjaGlsZHJlbjogXCJBZGQgYSBuZXcgY29tbWVudFwiIH0pKSwgX2pzeHMoXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5vcm1hbC1wYXJhZ3JhcGhcIiB9LCB7IGNoaWxkcmVuOiBbXCJQbGVhc2UgXCIsIF9qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvbG9naW5cIiB9LCB7IGNoaWxkcmVuOiBcImxvZ2luXCIgfSkpLCBcIiBpZiB5b3Ugd2FudCB0byBhZGQgeW91ciBjb21tZW50IGZvciB0aGlzIHBhZ2Ugb3IgcmVwbHkgdG8gb3RoZXJzLlwiXSB9KSldIH0pKSk7XG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19jb21tZW50c19fYWRkXCIsIGlkOiBcImFkZC1jb21tZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJmb3JtXCIsIF9fYXNzaWduKHsgbWV0aG9kOiBcInBvc3RcIiwgb25TdWJtaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ29tbWVudChuZXdDb21tZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIHNldE5ld0NvbW1lbnQoXCJcIik7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChUZXh0YXJlYSwgeyBsYWJlbDogXCJBZGQgYSBOZXcgQ29tbWVudFwiLCB2YWx1ZTogbmV3Q29tbWVudCwgcm93czogNSwgcGxhY2Vob2xkZXI6IFwiVHlwZSB5b3VyIGNvbW1lbnQgYWJvdXQgdGhlIHBhZ2UuLi5cIiwgb25DaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdDb21tZW50KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJ1LWZsZXgtdGV4dC1yaWdodFwiIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IHR5cGU6IFwic3VibWl0XCIsIHJvdW5kZWQ6IHRydWUsIGNvbG9yOiBcImJsdWVcIiwgZGlzYWJsZWQ6IG5ld0NvbW1lbnQubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIlN1Ym1pdFwiIH0pKSB9KSldIH0pKSB9KSkpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQ29uZmlybU1vZGFsLCBfX2Fzc2lnbih7IGhlYWRlcjogXCJEZWxldGUgWW91ciBDb21tZW50P1wiLCBvcGVuOiBjb25maXJtYXRpb25Nb2RhbE9wZW4sIGJ0bk5hbWU6IFwiRGVsZXRlXCIsIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goZGVsZXRlQ29tbWVudChjb25maXJtYXRpb25Nb2RhbENvbW1lbnRJZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxDb21tZW50SWQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSwgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybWF0aW9uTW9kYWxDb21tZW50SWQoXCJcIik7XG4gICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHlvdXIgY29tbWVudD8gQWxsIHRoZSBvdGhlciByZXBsaWVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbW1lbnQgd2lsbCBhbHNvIGdldCByZW1vdmVkLlwiLCBfanN4KFwiYnJcIiwge30pLCBcIllvdSBcIiwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcImNhbm5vdCB1bmRvXCIgfSksIFwiIHRoaXMgYWN0aW9uLlwiXSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fY29tbWVudHNcIiwgaWQ6IFwiY29tbWVudHMyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjb21tZW50cy13cmFwcGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiaDJcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiaGVhZGluZy10ZXJ0aWFyeSBjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFt0b3RhbENvdW50LCBcIiBDb21tZW50c1wiXSB9KSksICFsb2FkaW5nICYmIHJlbmRlckFkZENvbW1lbnQoKSwgIWxvYWRpbmcgJiYgcmVuZGVyQ29tbWVudHMoKSwgbG9hZGluZyAmJiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJjZW50ZXItY29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goTG9hZGluZywge30pIH0pKSldIH0pKSB9KSkgfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=