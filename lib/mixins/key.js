"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
function onKeyUp(keyUpHandler, element) {
    this.on(_constants.KEYUP, keyUpHandler, element);
}
function offKeyUp(keyUpHandler, element) {
    this.off(_constants.KEYUP, keyUpHandler, element);
}
function onKeyDown(keyDownHandler, element) {
    this.on(_constants.KEYDOWN, keyDownHandler, element);
}
function offKeyDown(keyDownHandler, element) {
    this.off(_constants.KEYDOWN, keyDownHandler, element);
}
var keyMixins = {
    onKeyUp: onKeyUp,
    offKeyUp: offKeyUp,
    onKeyDown: onKeyDown,
    offKeyDown: offKeyDown
};
var _default = keyMixins;
exports.default = _default;
