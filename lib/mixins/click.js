"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
function onClick(clickHandler, element) {
    this.on(_constants.CLICK, clickHandler, element);
}
function offClick(clickHandler, element) {
    this.off(_constants.CLICK, clickHandler, element);
}
var clickMixins = {
    onClick: onClick,
    offClick: offClick
};
var _default = clickMixins;
exports.default = _default;
