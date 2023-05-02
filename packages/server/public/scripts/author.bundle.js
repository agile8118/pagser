"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["author"],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0Y7QUFDckQ7QUFDc0I7QUFDRjtBQUNHO0FBQ2E7QUFDUjtBQUM3RDtBQUNBLGFBQWEsK0NBQVE7QUFDckIsaUJBQWlCLHdEQUFXLENBQUMsb0RBQVk7QUFDekMsa0JBQWtCLHdEQUFXLENBQUMscURBQWE7QUFDM0MscUJBQXFCLHdEQUFXLENBQUMsd0RBQWdCO0FBQ2pELGlCQUFpQix3REFBVyxDQUFDLG9EQUFZO0FBQ3pDLG1CQUFtQix3REFBVztBQUM5QjtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUksVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLENBQUMsMERBQVksSUFBSTtBQUMvRDtBQUNBLG9CQUFvQiw0REFBWTtBQUNoQyw2QkFBNkIscURBQVM7QUFDdEMsb0JBQW9CLDREQUFZO0FBQ2hDLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQiwwQkFBMEIsR0FBRyx1REFBSyxtQkFBbUIsMkJBQTJCLElBQUksV0FBVyx1REFBSyxtQkFBbUIsaUNBQWlDLElBQUksV0FBVyxzREFBSSxVQUFVO0FBQ3RNO0FBQ0E7QUFDQSxtQ0FBbUMsR0FBRyx1REFBSyxtQkFBbUIsb0NBQW9DLElBQUksV0FBVyxzREFBSSxpQkFBaUIsb0ZBQW9GLElBQUksdUJBQXVCLElBQUksdURBQUssVUFBVSxxREFBcUQsSUFBSSxJQUFJLHNEQUFJLG1CQUFtQixnQ0FBZ0MsSUFBSSxpQ0FBaUMsc0RBQUksQ0FBQyxvREFBTSxhQUFhLG9GQUFvRixJQUFJLG1EQUFtRCxLQUFLLEtBQUssSUFBSSxzREFBSSxpQkFBaUIseUJBQXlCLElBQUksbUJBQW1CLEtBQUssS0FBSztBQUNqcUI7QUFDQSxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9zaG93LXBhZ2UvQXV0aG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9hZGluZ01vZGFsLCBhbGVydCB9IGZyb20gXCJAcGFnc2VyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29uZmlybU1vZGFsLCBCdXR0b24gfSBmcm9tIFwiQHBhZ3Nlci9yZXVzYWJsZVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RBdXRob3IgfSBmcm9tIFwiLi9wYWdlU2xpY2VcIjtcbmltcG9ydCB7IHNlbGVjdFN0YXR1cywgc2VsZWN0U3Vic2NyaWJlZCB9IGZyb20gXCIuL3VzZXJTbGljZVwiO1xudmFyIEF1dGhvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGNvbmZpcm1hdGlvbk1vZGFsT3BlbiA9IF9hWzBdLCBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4gPSBfYVsxXTtcbiAgICB2YXIgc3RhdHVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3RhdHVzKTtcbiAgICB2YXIgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICAgIHZhciBzdWJzY3JpYmVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0U3Vic2NyaWJlZCk7XG4gICAgdmFyIGF1dGhvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEF1dGhvcik7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgb25TdWJzY3JpYmVDbGlja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBcImF1dGhlbnRpY2F0ZWRcIilcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBsb2dpbiB0byBiZSBhYmxlIHRvIHN1YnNjcmliZSB0byBhdXRob3JzLlwiKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHN1YnNjcmliZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHt9KTtcbiAgICB2YXIgdXNlckJpbyA9IGF1dGhvci5iaW9ncmFwaHkubGVuZ3RoXG4gICAgICAgID8gYXV0aG9yLmJpb2dyYXBoeVxuICAgICAgICA6IFwiVGhpcyB1c2VyIGhhcyBub3QgYWRkZWQgYSBiaW9ncmFwaHkuXCI7XG4gICAgdmFyIGJpb0NsYXNzTmFtZSA9IGF1dGhvci5iaW9ncmFwaHkubGVuZ3RoXG4gICAgICAgID8gXCJwYWdlX19hdXRob3JfX2Jpb1wiXG4gICAgICAgIDogXCJwYWdlX19hdXRob3JfX2JpbyBpdGFsaWNcIjtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQ29uZmlybU1vZGFsLCB7IGhlYWRlcjogXCJVbnN1YnNjcmliZSBmcm9tIFwiLmNvbmNhdChhdXRob3IudXNlcm5hbWUsIFwiP1wiKSwgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byB1bnN1YnNjcmliZSBmcm9tIHRoaXMgYXV0aG9yP1wiLCBvcGVuOiBjb25maXJtYXRpb25Nb2RhbE9wZW4sIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtYXRpb25Nb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTW9kYWwoXCJVbnN1YnNjcmliaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzdWJzY3JpYmUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgIH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbk1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgYnRuTmFtZTogXCJVbnN1YnNjcmliZVwiIH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19hdXRob3JcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXV0aG9yX19oZWFkXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IGF1dGhvci5waG90b1VybCwgaWQ6IFwidXNlci1waG90b1wiLCBhbHQ6IFwiQXV0aG9yIGltYWdlXCIsIG9uRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlci1waG90b1wiKS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ltYWdlcy91c2Vycy9wbGFjZWhvbGRlci5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXV0aG9yX19kZXRhaWxzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJhXCIsIF9fYXNzaWduKHsgaHJlZjogXCIvdXNlcnMvXCIuY29uY2F0KGF1dGhvci51c2VybmFtZSksIHRhcmdldDogXCJfYmxhbmtcIiwgY2xhc3NOYW1lOiBcImJsYWNrLWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBhdXRob3IubmFtZSB9KSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFthdXRob3Iuc3Vic2NyaWJlcnNDb3VudCwgXCIgU3Vic2NyaWJlcnNcIl0gfSldIH0pKSwgX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19hdXRob3JfX3N1YlwiIH0sIHsgY2hpbGRyZW46IHN0YXR1cyAhPT0gXCJvd25lclwiICYmIChfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogc3Vic2NyaWJlZCA/IFwiZGVmYXVsdFwiIDogXCJibHVlXCIsIHJvdW5kZWQ6IHRydWUsIG9uQ2xpY2s6IG9uU3Vic2NyaWJlQ2xpY2tlZCB9LCB7IGNoaWxkcmVuOiBzdWJzY3JpYmVkID8gXCJTdWJzY3JpYmVkXCIgOiBcIlN1YnNjcmliZVwiIH0pKSkgfSkpXSB9KSksIF9qc3goXCJwXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBiaW9DbGFzc05hbWUgfSwgeyBjaGlsZHJlbjogdXNlckJpbyB9KSldIH0pKV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==