"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
function onMouseUp(mouseUpHandler, element) {
    this.on(_constants.MOUSEUP, mouseUpHandler, element);
}
function offMouseUp(mouseUpHandler, element) {
    this.off(_constants.MOUSEUP, mouseUpHandler, element);
}
function onMouseOut(mouseOutHandler, element) {
    this.on(_constants.MOUSEOUT, mouseOutHandler, element);
}
function offMouseOut(mouseOutHandler, element) {
    this.off(_constants.MOUSEOUT, mouseOutHandler, element);
}
function onMouseDown(mouseDownHandler, element) {
    this.on(_constants.MOUSEDOWN, mouseDownHandler, element);
}
function offMouseDown(mouseDownHandler, element) {
    this.off(_constants.MOUSEDOWN, mouseDownHandler, element);
}
function onMouseOver(mouseOverHandler, element) {
    this.on(_constants.MOUSEOVER, mouseOverHandler, element);
}
function offMouseOver(mouseOverHandler, element) {
    this.off(_constants.MOUSEOVER, mouseOverHandler, element);
}
function onMouseMove(mouseMoveHandler, element) {
    this.on(_constants.MOUSEMOVE, mouseMoveHandler, element);
}
function offMouseMove(mouseMoveHandler, element) {
    this.off(_constants.MOUSEMOVE, mouseMoveHandler, element);
}
var mouseMixins = {
    onMouseUp: onMouseUp,
    offMouseUp: offMouseUp,
    onMouseOut: onMouseOut,
    offMouseOut: offMouseOut,
    onMouseDown: onMouseDown,
    offMouseDown: offMouseDown,
    onMouseOver: onMouseOver,
    offMouseOver: offMouseOver,
    onMouseMove: onMouseMove,
    offMouseMove: offMouseMove
};
var _default = mouseMixins;
exports.default = _default;
