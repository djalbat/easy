"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
function onScroll(scrollHandler, element) {
    this.on(_constants.SCROLL, scrollHandler, element);
}
function offScroll(scrollHandler, element) {
    this.off(_constants.SCROLL, scrollHandler, element);
}
function getScrollTop() {
    return this.domElement.scrollTop;
}
function getScrollLeft() {
    return this.domElement.scrollLeft;
}
function setScrollTop(scrollTop) {
    this.domElement.scrollTop = scrollTop;
}
function setScrollLeft(scrollLeft) {
    this.domElement.scrollLeft = scrollLeft;
}
var scrollMixins = {
    onScroll: onScroll,
    offScroll: offScroll,
    getScrollTop: getScrollTop,
    getScrollLeft: getScrollLeft,
    setScrollTop: setScrollTop,
    setScrollLeft: setScrollLeft
};
var _default = scrollMixins;
exports.default = _default;
