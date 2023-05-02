"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["ratings"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5ncy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQytEO0FBQ1I7QUFDTztBQUNvQjtBQUNsRjtBQUNBLGtCQUFrQix3REFBVyxDQUFDLHFEQUFhO0FBQzNDLGlCQUFpQix3REFBVyxDQUFDLGdEQUFRO0FBQ3JDLGtCQUFrQix3REFBVyxDQUFDLHFEQUFhO0FBQzNDLG1CQUFtQix3REFBVztBQUM5QixnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNERBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlEQUFhLGlDQUFpQyxjQUFjLElBQUksWUFBWTtBQUNySDtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFLO0FBQzdCO0FBQ0E7QUFDQSx3QkFBd0IscURBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFZO0FBQ2hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsZUFBZSxzREFBSSxVQUFVO0FBQzdCLFlBQVksc0RBQUksVUFBVSxVQUFVLHVEQUFLLG1CQUFtQiwyQkFBMkIsSUFBSSxXQUFXLHNEQUFJLFFBQVEsMkNBQTJDLEdBQUcsdURBQUssVUFBVSxXQUFXLHNEQUFJLFdBQVcseUJBQXlCLEdBQUcsc0RBQUksc0JBQXNCO0FBQy9QO0FBQ0EsK0JBQStCLElBQUksVUFBVSxzREFBSSxRQUFRLDhCQUE4QixHQUFHLEtBQUssR0FBRyx1REFBSyxVQUFVLFdBQVcsc0RBQUksV0FBVyw0QkFBNEIsR0FBRyxzREFBSSxzQkFBc0I7QUFDcE07QUFDQSwrQkFBK0IsSUFBSSxVQUFVLHNEQUFJLFFBQVEsZ0NBQWdDLEdBQUcsS0FBSyxJQUFJLElBQUk7QUFDekc7QUFDQSxpRUFBZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcGFnc2VyL3dlYi8uL3NyYy92aWV3cy9zaG93LXBhZ2UvUmF0aW5ncy50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2FkaW5nTW9kYWwsIGFsZXJ0LCByZXF1ZXN0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBzZWxlY3RMb2FkaW5nLCBzZWxlY3RJZCwgc2VsZWN0UmF0aW5ncywgc2V0UmF0aW5ncywgfSBmcm9tIFwiLi9wYWdlU2xpY2VcIjtcbnZhciBSYXRpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIHBhZ2VJZCA9IHVzZVNlbGVjdG9yKHNlbGVjdElkKTtcbiAgICB2YXIgcmF0aW5ncyA9IHVzZVNlbGVjdG9yKHNlbGVjdFJhdGluZ3MpO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIG9uUmF0ZUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCBlXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucGF0Y2goXCIvcmF0ZS9wYWdlL1wiLmNvbmNhdChwYWdlSWQpLCB7IHJhdGU6IGFjdGlvbiB9LCB7IGF1dGg6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0UmF0aW5ncyhyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVfMS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgbG9naW4gdG8gcmF0ZSBhIHBhZ2UuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIGlmIChsb2FkaW5nKVxuICAgICAgICByZXR1cm4gX2pzeChcImRpdlwiLCB7fSk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInBhZ2VfX3JhdGluZ1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIkhvdyB3b3VsZCB5b3UgcmF0ZSB0aGlzIHBhZ2U/XCIgfSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiByYXRpbmdzLmxpa2VzIH0pLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJpZyBidG4taS1ibHVlXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRlQnV0dG9uQ2xpY2soXCJsaWtlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtdGh1bWJzLXVwXCIgfSkgfSkpXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IHJhdGluZ3MuZGlzbGlrZXMgfSksIF9qc3goXCJidXR0b25cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuLWkgYnRuLWktYmlnIGJ0bi1pLWJsdWVcIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGVCdXR0b25DbGljayhcImRpc2xpa2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aHVtYnMtZG93blwiIH0pIH0pKV0gfSldIH0pKSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmF0aW5ncztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==