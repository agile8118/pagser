"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["actions"],{

/***/ "./src/views/show-page/Actions.tsx":
/*!*****************************************!*\
  !*** ./src/views/show-page/Actions.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pagser/reusable */ "../reusable/dist/index.js");
/* harmony import */ var _pagser_reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pagser/common */ "../common/dist/index.js");
/* harmony import */ var _pagser_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pagser_common__WEBPACK_IMPORTED_MODULE_4__);
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







var Actions = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), titleTyped = _a[0], setTitleTyped = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), deletePageMdl = _b[0], setDeletePageMdl = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), deleteButtonDisabled = _c[0], setDeleteButtonDisabled = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), addToCollectionModal = _d[0], setAddToCollectionModal = _d[1];
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectId);
    var title = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectContents).title;
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectStatus);
    var readLater = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectReadLater);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (props.type && props.type === "public") {
            dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchPublicPage)());
        }
        // Send a view request to server
        setTimeout(function () {
            if (pageId)
                sendViewRequest(pageId);
        }, 15000);
    }, [loading]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (titleTyped.toLowerCase().replace(/\s/g, "") ===
            title.toLowerCase().replace(/\s/g, "")) {
            setDeleteButtonDisabled(false);
        }
        else {
            setDeleteButtonDisabled(true);
        }
    }, [titleTyped]);
    var sendViewRequest = function (pageId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request.post("/views/".concat(pageId), null, { auth: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var onDeletePageSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_4__.request["delete"]("/pages/".concat(pageId), { auth: true })];
                case 1:
                    _a.sent();
                    location.reload();
                    return [2 /*return*/];
            }
        });
    }); };
    var renderContent = function () {
        if (status === "owner") {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Modal, __assign({ header: "Delete your page", open: deletePageMdl, onClose: function () {
                            setDeletePageMdl(false);
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", __assign({ className: "margin-bottom-08" }, { children: "Are you sure that you want to delete your page? All of the comments and likes will be deleted." })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ onSubmit: function (event) {
                                    event.preventDefault();
                                    onDeletePageSubmit();
                                } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "margin-bottom-08" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "text", placeholder: "Type in your page title to confirm to delete it", onChange: function (value) {
                                                setTitleTyped(value);
                                            }, value: titleTyped, required: true }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: title.toLowerCase() }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "u-flex-text-right" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.Button, __assign({ color: "red", rounded: true, type: "submit", id: "deleteButton", disabled: deleteButtonDisabled }, { children: "Delete" })) }))] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                            var url;
                            if (props.type === "public") {
                                url = "/public-pages/".concat(window.location.pathname.split("/")[2], "/edit?t=public");
                            }
                            else if (props.type === "private") {
                                url = "/".concat(window.location.pathname.split("/")[1], "/").concat(window.location.pathname.split("/")[2], "/edit?t=private");
                            }
                            window.location.href = "".concat(url);
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-pencil-square-o" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                            setDeletePageMdl(true);
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-trash-o" }) }))] }));
        }
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.toggleReadLater)(pageId));
            } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: rlBtnClass }) })));
    };
    if (loading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    // read later button class
    var rlBtnClass = readLater ? "fa fa-bookmark" : "fa fa-bookmark-o";
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_3__.AddToCollection, { open: addToCollectionModal, pageId: pageId, onClose: function () {
                    setAddToCollectionModal(false);
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__header__actions" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i btn-i-blue btn-i-big", onClick: function () {
                            if (status === "spectator") {
                                console.log("DSd");
                                (0,_pagser_common__WEBPACK_IMPORTED_MODULE_4__.alert)("Please login to be able to add pages to collections.");
                            }
                            else {
                                setAddToCollectionModal(true);
                            }
                        } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-th-large", "aria-hidden": "true" }) })), renderContent()] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNEQUFJLFFBQVEsb0NBQW9DLEdBQUcsSUFBSSxzREFBSSxzQkFBc0I7QUFDMUg7QUFDQSwyQkFBMkIsSUFBSSxVQUFVLHNEQUFJLFFBQVEsNEJBQTRCLEdBQUcsS0FBSztBQUN6RjtBQUNBLGdCQUFnQixzREFBSSxzQkFBc0I7QUFDMUMseUJBQXlCLDJEQUFlO0FBQ3hDLGVBQWUsSUFBSSxVQUFVLHNEQUFJLFFBQVEsdUJBQXVCLEdBQUc7QUFDbkU7QUFDQTtBQUNBLGVBQWUsc0RBQUksVUFBVTtBQUM3QjtBQUNBO0FBQ0EsWUFBWSx1REFBSyxDQUFDLHVEQUFjLElBQUksV0FBVyxzREFBSSxDQUFDLDZEQUFlLElBQUk7QUFDdkU7QUFDQSxtQkFBbUIsR0FBRyx1REFBSyxtQkFBbUIsb0NBQW9DLElBQUksV0FBVyxzREFBSSxzQkFBc0I7QUFDM0g7QUFDQTtBQUNBLGdDQUFnQyxxREFBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJLFVBQVUsc0RBQUksUUFBUSxvREFBb0QsR0FBRyxzQkFBc0IsS0FBSztBQUN2STtBQUNBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BwYWdzZXIvd2ViLy4vc3JjL3ZpZXdzL3Nob3ctcGFnZS9BY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBNb2RhbCwgSW5wdXQsIEJ1dHRvbiwgQWRkVG9Db2xsZWN0aW9uIH0gZnJvbSBcIkBwYWdzZXIvcmV1c2FibGVcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGFsZXJ0IH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBzZWxlY3RDb250ZW50cywgc2VsZWN0SWQsIGZldGNoUHVibGljUGFnZSwgc2VsZWN0TG9hZGluZywgdG9nZ2xlUmVhZExhdGVyLCB9IGZyb20gXCIuL3BhZ2VTbGljZVwiO1xuaW1wb3J0IHsgc2VsZWN0U3RhdHVzLCBzZWxlY3RSZWFkTGF0ZXIgfSBmcm9tIFwiLi91c2VyU2xpY2VcIjtcbnZhciBBY3Rpb25zID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoXCJcIiksIHRpdGxlVHlwZWQgPSBfYVswXSwgc2V0VGl0bGVUeXBlZCA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgZGVsZXRlUGFnZU1kbCA9IF9iWzBdLCBzZXREZWxldGVQYWdlTWRsID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUodHJ1ZSksIGRlbGV0ZUJ1dHRvbkRpc2FibGVkID0gX2NbMF0sIHNldERlbGV0ZUJ1dHRvbkRpc2FibGVkID0gX2NbMV07XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBhZGRUb0NvbGxlY3Rpb25Nb2RhbCA9IF9kWzBdLCBzZXRBZGRUb0NvbGxlY3Rpb25Nb2RhbCA9IF9kWzFdO1xuICAgIHZhciBwYWdlSWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJZCk7XG4gICAgdmFyIHRpdGxlID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q29udGVudHMpLnRpdGxlO1xuICAgIHZhciBzdGF0dXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGF0dXMpO1xuICAgIHZhciByZWFkTGF0ZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RSZWFkTGF0ZXIpO1xuICAgIHZhciBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvcHMudHlwZSAmJiBwcm9wcy50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFB1YmxpY1BhZ2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2VuZCBhIHZpZXcgcmVxdWVzdCB0byBzZXJ2ZXJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocGFnZUlkKVxuICAgICAgICAgICAgICAgIHNlbmRWaWV3UmVxdWVzdChwYWdlSWQpO1xuICAgICAgICB9LCAxNTAwMCk7XG4gICAgfSwgW2xvYWRpbmddKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGl0bGVUeXBlZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSA9PT1cbiAgICAgICAgICAgIHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpKSB7XG4gICAgICAgICAgICBzZXREZWxldGVCdXR0b25EaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXREZWxldGVCdXR0b25EaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt0aXRsZVR5cGVkXSk7XG4gICAgdmFyIHNlbmRWaWV3UmVxdWVzdCA9IGZ1bmN0aW9uIChwYWdlSWQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3QucG9zdChcIi92aWV3cy9cIi5jb25jYXQocGFnZUlkKSwgbnVsbCwgeyBhdXRoOiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25EZWxldGVQYWdlU3VibWl0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5kZWxldGUoXCIvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCksIHsgYXV0aDogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcIm93bmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhNb2RhbCwgX19hc3NpZ24oeyBoZWFkZXI6IFwiRGVsZXRlIHlvdXIgcGFnZVwiLCBvcGVuOiBkZWxldGVQYWdlTWRsLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlUGFnZU1kbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJtYXJnaW4tYm90dG9tLTA4XCIgfSwgeyBjaGlsZHJlbjogXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgeW91ciBwYWdlPyBBbGwgb2YgdGhlIGNvbW1lbnRzIGFuZCBsaWtlcyB3aWxsIGJlIGRlbGV0ZWQuXCIgfSkpLCBfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBvblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVQYWdlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwibWFyZ2luLWJvdHRvbS0wOFwiIH0sIHsgY2hpbGRyZW46IF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlR5cGUgaW4geW91ciBwYWdlIHRpdGxlIHRvIGNvbmZpcm0gdG8gZGVsZXRlIGl0XCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlVHlwZWQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZTogdGl0bGVUeXBlZCwgcmVxdWlyZWQ6IHRydWUgfSkgfSkpLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IHRpdGxlLnRvTG93ZXJDYXNlKCkgfSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidS1mbGV4LXRleHQtcmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBjb2xvcjogXCJyZWRcIiwgcm91bmRlZDogdHJ1ZSwgdHlwZTogXCJzdWJtaXRcIiwgaWQ6IFwiZGVsZXRlQnV0dG9uXCIsIGRpc2FibGVkOiBkZWxldGVCdXR0b25EaXNhYmxlZCB9LCB7IGNoaWxkcmVuOiBcIkRlbGV0ZVwiIH0pKSB9KSldIH0pKV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL3B1YmxpYy1wYWdlcy9cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvZWRpdD90PXB1YmxpY1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvXCIuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMV0sIFwiL1wiKS5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXSwgXCIvZWRpdD90PXByaXZhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJcIi5jb25jYXQodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgfSkgfSkpLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVQYWdlTWRsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10cmFzaC1vXCIgfSkgfSkpXSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pIGJ0bi1pLWJsdWUgYnRuLWktYmlnXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh0b2dnbGVSZWFkTGF0ZXIocGFnZUlkKSk7XG4gICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBybEJ0bkNsYXNzIH0pIH0pKSk7XG4gICAgfTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIC8vIHJlYWQgbGF0ZXIgYnV0dG9uIGNsYXNzXG4gICAgdmFyIHJsQnRuQ2xhc3MgPSByZWFkTGF0ZXIgPyBcImZhIGZhLWJvb2ttYXJrXCIgOiBcImZhIGZhLWJvb2ttYXJrLW9cIjtcbiAgICByZXR1cm4gKF9qc3hzKFJlYWN0LkZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChBZGRUb0NvbGxlY3Rpb24sIHsgb3BlbjogYWRkVG9Db2xsZWN0aW9uTW9kYWwsIHBhZ2VJZDogcGFnZUlkLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZFRvQ29sbGVjdGlvbk1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IH0pLCBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJwYWdlX19oZWFkZXJfX2FjdGlvbnNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJidG4taSBidG4taS1ibHVlIGJ0bi1pLWJpZ1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJzcGVjdGF0b3JcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRTZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgbG9naW4gdG8gYmUgYWJsZSB0byBhZGQgcGFnZXMgdG8gY29sbGVjdGlvbnMuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWRkVG9Db2xsZWN0aW9uTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYSBmYS10aC1sYXJnZVwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pIH0pKSwgcmVuZGVyQ29udGVudCgpXSB9KSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9