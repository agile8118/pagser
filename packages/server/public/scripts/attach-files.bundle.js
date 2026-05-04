"use strict";
(self["webpackChunk_pagser_web"] = self["webpackChunk_pagser_web"] || []).push([["attach-files"],{

/***/ "./src/views/show-page/AttachFiles.tsx":
/*!*********************************************!*\
  !*** ./src/views/show-page/AttachFiles.tsx ***!
  \*********************************************/
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







var AttachFiles = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), uploadAttachFilesModalOpen = _a[0], setUploadAttachFilesModalOpen = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confirmModalOpen = _b[0], setConfirmModalOpen = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmModalFileId = _c[0], setConfirmModalFileId = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), confirmModalFileName = _d[0], setConfirmModalFileName = _d[1];
    var pageId = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectId);
    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_userSlice__WEBPACK_IMPORTED_MODULE_6__.selectStatus);
    var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    var attachFiles = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_pageSlice__WEBPACK_IMPORTED_MODULE_5__.selectAttachFiles);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    // Render all attach files of the page
    var renderFiles = function () {
        if (status === "owner")
            // If user is the owner of the page
            return attachFiles.map(function (file) {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ className: "file-link", href: "/api/pages/".concat(pageId, "/attach-files/").concat(file.name) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-download" }), " " + file.name, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ className: "btn-i", onClick: function (e) {
                                // This will prevent the file from starting to get downloaded
                                e.preventDefault();
                                setConfirmModalFileId(String(file.id));
                                setConfirmModalFileName(file.name);
                                setConfirmModalOpen(true);
                            } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-times", "aria-hidden": "true" }) }))] }), file.name));
            });
        // If user is not the owner of the page
        return attachFiles.map(function (file) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", __assign({ className: "file-link", href: "/api/pages/".concat(pageId, "/attach-files/").concat(file.name) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-download" }), " " + file.name] }), file.name));
        });
    };
    "";
    // Render the add an attach file button
    var renderButton = function () {
        if (status === "owner" && attachFiles.length < 5)
            // If user is the owner of the page
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.Button, __assign({ color: "blue", size: "small", rounded: true, onClick: function () {
                            setUploadAttachFilesModalOpen(true);
                        } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-upload button__icon-left" }), " Add an Attach File"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.UploadAttachFile, { open: uploadAttachFilesModalOpen, header: "Add an Attach File", text: "You can upload maximum of 5 files 10MB each for every page.", size: 10000000, url: "/pages/".concat(pageId, "/attach-files"), success: function () {
                            dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchAttachFiles)("File uploaded successfully."));
                        }, onClose: function () {
                            setUploadAttachFilesModalOpen(false);
                        } })] }));
        // If viewer is not the owner of the page just return a simple div
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    };
    if (loading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "page__attach-files" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagser_reusable__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, __assign({ header: "Remove the attach file", open: confirmModalOpen, onConfirm: function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                setConfirmModalOpen(false);
                                (0,_pagser_common__WEBPACK_IMPORTED_MODULE_3__.loadingModal)("Deleting the attach file...");
                                return [4 /*yield*/, _pagser_common__WEBPACK_IMPORTED_MODULE_3__.request["delete"]("/pages/".concat(pageId, "/attach-files/").concat(confirmModalFileId), {
                                        auth: true,
                                    })];
                            case 1:
                                _a.sent();
                                dispatch((0,_pageSlice__WEBPACK_IMPORTED_MODULE_5__.fetchAttachFiles)("File deleted successfully."));
                                return [2 /*return*/];
                        }
                    });
                }); }, onCancel: function () { return setConfirmModalOpen(false); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Are you sure that you want to delete this attach file", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: ["'", confirmModalFileName, "'"] }), "? Action cannot be undone."] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "file-links" }, { children: renderFiles() })), renderButton(), attachFiles.length === 5 && status === "owner" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: "You can only have 5 attach files for each page, if you want to upload a new one remove one of the attach files first." }))] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachFiles);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5RSx1REFBSyxhQUFhLDRDQUE0QyxrQ0FBa0MsR0FBRyxJQUFJLHNEQUFJLG1CQUFtQix5QkFBeUIsSUFBSSx5QkFBeUIsdUVBQXVFLHNEQUFJLFNBQVMsbUlBQW1JLEtBQUs7QUFDemtCO0FBQ0EsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHBhZ3Nlci93ZWIvLi9zcmMvdmlld3Mvc2hvdy1wYWdlL0F0dGFjaEZpbGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgbG9hZGluZ01vZGFsIH0gZnJvbSBcIkBwYWdzZXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwsIFVwbG9hZEF0dGFjaEZpbGUsIEJ1dHRvbiB9IGZyb20gXCJAcGFnc2VyL3JldXNhYmxlXCI7XG5pbXBvcnQgeyBmZXRjaEF0dGFjaEZpbGVzLCBzZWxlY3RMb2FkaW5nLCBzZWxlY3RJZCwgc2VsZWN0QXR0YWNoRmlsZXMsIH0gZnJvbSBcIi4vcGFnZVNsaWNlXCI7XG5pbXBvcnQgeyBzZWxlY3RTdGF0dXMgfSBmcm9tIFwiLi91c2VyU2xpY2VcIjtcbnZhciBBdHRhY2hGaWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIHVwbG9hZEF0dGFjaEZpbGVzTW9kYWxPcGVuID0gX2FbMF0sIHNldFVwbG9hZEF0dGFjaEZpbGVzTW9kYWxPcGVuID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBjb25maXJtTW9kYWxPcGVuID0gX2JbMF0sIHNldENvbmZpcm1Nb2RhbE9wZW4gPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShcIlwiKSwgY29uZmlybU1vZGFsRmlsZUlkID0gX2NbMF0sIHNldENvbmZpcm1Nb2RhbEZpbGVJZCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBjb25maXJtTW9kYWxGaWxlTmFtZSA9IF9kWzBdLCBzZXRDb25maXJtTW9kYWxGaWxlTmFtZSA9IF9kWzFdO1xuICAgIHZhciBwYWdlSWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJZCk7XG4gICAgdmFyIHN0YXR1cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFN0YXR1cyk7XG4gICAgdmFyIGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcbiAgICB2YXIgYXR0YWNoRmlsZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RBdHRhY2hGaWxlcyk7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICAvLyBSZW5kZXIgYWxsIGF0dGFjaCBmaWxlcyBvZiB0aGUgcGFnZVxuICAgIHZhciByZW5kZXJGaWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJvd25lclwiKVxuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyB0aGUgb3duZXIgb2YgdGhlIHBhZ2VcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2hGaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiYVwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJmaWxlLWxpbmtcIiwgaHJlZjogXCIvYXBpL3BhZ2VzL1wiLmNvbmNhdChwYWdlSWQsIFwiL2F0dGFjaC1maWxlcy9cIikuY29uY2F0KGZpbGUubmFtZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLWRvd25sb2FkXCIgfSksIFwiIFwiICsgZmlsZS5uYW1lLCBfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0bi1pXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IHRoZSBmaWxlIGZyb20gc3RhcnRpbmcgdG8gZ2V0IGRvd25sb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maXJtTW9kYWxGaWxlSWQoU3RyaW5nKGZpbGUuaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsRmlsZU5hbWUoZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXRpbWVzXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkgfSkpXSB9KSwgZmlsZS5uYW1lKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gSWYgdXNlciBpcyBub3QgdGhlIG93bmVyIG9mIHRoZSBwYWdlXG4gICAgICAgIHJldHVybiBhdHRhY2hGaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoXCJhXCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBcImZpbGUtbGlua1wiLCBocmVmOiBcIi9hcGkvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCwgXCIvYXR0YWNoLWZpbGVzL1wiKS5jb25jYXQoZmlsZS5uYW1lKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtZG93bmxvYWRcIiB9KSwgXCIgXCIgKyBmaWxlLm5hbWVdIH0pLCBmaWxlLm5hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcIlwiO1xuICAgIC8vIFJlbmRlciB0aGUgYWRkIGFuIGF0dGFjaCBmaWxlIGJ1dHRvblxuICAgIHZhciByZW5kZXJCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwib3duZXJcIiAmJiBhdHRhY2hGaWxlcy5sZW5ndGggPCA1KVxuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyB0aGUgb3duZXIgb2YgdGhlIHBhZ2VcbiAgICAgICAgICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhCdXR0b24sIF9fYXNzaWduKHsgY29sb3I6IFwiYmx1ZVwiLCBzaXplOiBcInNtYWxsXCIsIHJvdW5kZWQ6IHRydWUsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRBdHRhY2hGaWxlc01vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhIGZhLXVwbG9hZCBidXR0b25fX2ljb24tbGVmdFwiIH0pLCBcIiBBZGQgYW4gQXR0YWNoIEZpbGVcIl0gfSkpLCBfanN4KFVwbG9hZEF0dGFjaEZpbGUsIHsgb3BlbjogdXBsb2FkQXR0YWNoRmlsZXNNb2RhbE9wZW4sIGhlYWRlcjogXCJBZGQgYW4gQXR0YWNoIEZpbGVcIiwgdGV4dDogXCJZb3UgY2FuIHVwbG9hZCBtYXhpbXVtIG9mIDUgZmlsZXMgMTBNQiBlYWNoIGZvciBldmVyeSBwYWdlLlwiLCBzaXplOiAxMDAwMDAwMCwgdXJsOiBcIi9wYWdlcy9cIi5jb25jYXQocGFnZUlkLCBcIi9hdHRhY2gtZmlsZXNcIiksIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaEF0dGFjaEZpbGVzKFwiRmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRBdHRhY2hGaWxlc01vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSk7XG4gICAgICAgIC8vIElmIHZpZXdlciBpcyBub3QgdGhlIG93bmVyIG9mIHRoZSBwYWdlIGp1c3QgcmV0dXJuIGEgc2ltcGxlIGRpdlxuICAgICAgICByZXR1cm4gX2pzeChcImRpdlwiLCB7fSk7XG4gICAgfTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwge30pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwicGFnZV9fYXR0YWNoLWZpbGVzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goQ29uZmlybU1vZGFsLCBfX2Fzc2lnbih7IGhlYWRlcjogXCJSZW1vdmUgdGhlIGF0dGFjaCBmaWxlXCIsIG9wZW46IGNvbmZpcm1Nb2RhbE9wZW4sIG9uQ29uZmlybTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlybU1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb2RhbChcIkRlbGV0aW5nIHRoZSBhdHRhY2ggZmlsZS4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVxdWVzdC5kZWxldGUoXCIvcGFnZXMvXCIuY29uY2F0KHBhZ2VJZCwgXCIvYXR0YWNoLWZpbGVzL1wiKS5jb25jYXQoY29uZmlybU1vZGFsRmlsZUlkKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoQXR0YWNoRmlsZXMoXCJGaWxlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH0sIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRDb25maXJtTW9kYWxPcGVuKGZhbHNlKTsgfSB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW1wiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYXR0YWNoIGZpbGVcIiwgXCIgXCIsIF9qc3hzKFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFtcIidcIiwgY29uZmlybU1vZGFsRmlsZU5hbWUsIFwiJ1wiXSB9KSwgXCI/IEFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLlwiXSB9KSB9KSksIF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmlsZS1saW5rc1wiIH0sIHsgY2hpbGRyZW46IHJlbmRlckZpbGVzKCkgfSkpLCByZW5kZXJCdXR0b24oKSwgYXR0YWNoRmlsZXMubGVuZ3RoID09PSA1ICYmIHN0YXR1cyA9PT0gXCJvd25lclwiICYmIChfanN4KFwiZW1cIiwgeyBjaGlsZHJlbjogXCJZb3UgY2FuIG9ubHkgaGF2ZSA1IGF0dGFjaCBmaWxlcyBmb3IgZWFjaCBwYWdlLCBpZiB5b3Ugd2FudCB0byB1cGxvYWQgYSBuZXcgb25lIHJlbW92ZSBvbmUgb2YgdGhlIGF0dGFjaCBmaWxlcyBmaXJzdC5cIiB9KSldIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXR0YWNoRmlsZXM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=