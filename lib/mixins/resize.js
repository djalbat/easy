"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onResize = onResize;
exports.offResize = offResize;
exports.default = void 0;
var _constants = require("../constants");
function onResize(resizeHandler, element) {
    this.on(_constants.RESIZE, resizeHandler, element);
}
function offResize(resizeHandler, element) {
    this.off(_constants.RESIZE, resizeHandler, element);
}
function addResizeObject() {
    var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _constants.TEXT_HTML;
    resizeObject.setAttribute("style", style);
    resizeObject.data = data;
    resizeObject.type = type;
    this.__resizeObject__ = resizeObject;
    resizeObject.onload = (function() {
        return resizeObjectLoadHandler(this);
    }).bind(this);
    this.domElement.appendChild(resizeObject);
}
function removeResizeObject() {
    var resizeObject = this.__resizeObject__, objectWindow = resizeObject.contentDocument.defaultView; ///
    objectWindow.removeEventListener(_constants.RESIZE, resizeEventListener);
    this.domElement.removeChild(resizeObject);
    delete this.__resizeObject__;
}
var resizeMixins = {
    onResize: onResize,
    offResize: offResize,
    addResizeObject: addResizeObject,
    removeResizeObject: removeResizeObject
};
var _default = resizeMixins;
exports.default = _default;
function resizeObjectLoadHandler(element) {
    var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView; ///
    resizeObjectWindow.addEventListener(_constants.RESIZE, function(event) {
        var resizeEventListeners = element.findEventListeners(_constants.RESIZE);
        resizeEventListeners.forEach(function(resizeEventListener) {
            return resizeEventListener(event);
        });
    });
}
