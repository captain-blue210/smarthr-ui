"use strict";
var __assign = (this && this.__assign) || function () {
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDialogContent = void 0;
var react_1 = __importStar(require("react"));
var DialogWrapper_1 = require("./DialogWrapper");
var DialogContentInner_1 = require("./DialogContentInner");
var MessageDialogContentInner_1 = require("./MessageDialogContentInner");
exports.MessageDialogContent = function (_a) {
    var title = _a.title, description = _a.description, closeText = _a.closeText, props = __rest(_a, ["title", "description", "closeText"]);
    var _b = react_1.useContext(DialogWrapper_1.DialogContext), DialogContentRoot = _b.DialogContentRoot, onClickClose = _b.onClickClose, active = _b.active;
    return (react_1.default.createElement(DialogContentRoot, null,
        react_1.default.createElement(DialogContentInner_1.DialogContentInner, __assign({ onClickOverlay: onClickClose, onPressEscape: onClickClose, isOpen: active }, props),
            react_1.default.createElement(MessageDialogContentInner_1.MessageDialogContentInner, { title: title, description: description, closeText: closeText, onClickClose: onClickClose }))));
};
//# sourceMappingURL=MessageDialogContent.js.map