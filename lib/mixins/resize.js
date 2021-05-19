"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1QsIFJFU0laRSwgVEVYVF9IVE1MLCBBQk9VVF9CTEFOSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFJFU0laRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoUkVTSVpFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBhZGRSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoT0JKRUNUKSxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgLFxuICAgICAgICBkYXRhID0gQUJPVVRfQkxBTkssXG4gICAgICAgIHR5cGUgPSBURVhUX0hUTUw7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHN0eWxlKTtcblxuICByZXNpemVPYmplY3QuZGF0YSA9IGRhdGE7XG5cbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIodGhpcyk7XG5cbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gdGhpcy5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUkVTSVpFLCByZXNpemVFdmVudExpc3RlbmVyKTtcblxuICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcblxuICBkZWxldGUgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fO1xufVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemUsXG4gIGFkZFJlc2l6ZU9iamVjdCxcbiAgcmVtb3ZlUmVzaXplT2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNpemVNaXhpbnM7XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUkVTSVpFLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGVsZW1lbnQuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRSk7XG5cbiAgICByZXNpemVFdmVudExpc3RlbmVycy5mb3JFYWNoKChyZXNpemVFdmVudExpc3RlbmVyKSA9PiByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRTJDLFVBQWM7U0FFNUQsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPO1NBQVMsRUFBRSxDQUZJLFVBQWMsU0FFVCxhQUFhLEVBQUUsT0FBTzs7U0FFekUsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPO1NBQVMsR0FBRyxDQUpFLFVBQWMsU0FJUCxhQUFhLEVBQUUsT0FBTzs7U0FFM0UsZUFBZTtRQUNoQixZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FQVSxVQUFjLFVBUTdELEtBQUssSUFBSSw0UkFRWSxHQUNyQixJQUFJLEdBakIyQyxVQUFjLGNBa0I3RCxJQUFJLEdBbEIyQyxVQUFjO0lBb0JuRSxZQUFZLENBQUMsWUFBWSxFQUFDLEtBQU8sR0FBRSxLQUFLO0lBRXhDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUV4QixZQUFZLENBQUMsSUFBSSxHQUFHLElBQUk7U0FFbkIsZ0JBQWdCLEdBQUcsWUFBWTtJQUVwQyxZQUFZLENBQUMsTUFBTTtlQUFTLHVCQUF1Qjs7U0FFOUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZOztTQUdqQyxrQkFBa0I7UUFDbkIsWUFBWSxRQUFRLGdCQUFnQixFQUNwQyxZQUFZLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRW5FLFlBQVksQ0FBQyxtQkFBbUIsQ0FyQ3FCLFVBQWMsU0FxQzFCLG1CQUFtQjtTQUV2RCxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVk7Z0JBRTVCLGdCQUFnQjs7SUFHeEIsWUFBWTtJQUNoQixRQUFRLEVBQVIsUUFBUTtJQUNSLFNBQVMsRUFBVCxTQUFTO0lBQ1QsZUFBZSxFQUFmLGVBQWU7SUFDZixrQkFBa0IsRUFBbEIsa0JBQWtCOztlQUdMLFlBQVk7O1NBRWxCLHVCQUF1QixDQUFDLE9BQU87UUFDaEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFDdkMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXpFLGtCQUFrQixDQUFDLGdCQUFnQixDQXpEa0IsVUFBYyxrQkF5RHRCLEtBQUs7WUFDMUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQTFESixVQUFjO1FBNERqRSxvQkFBb0IsQ0FBQyxPQUFPLFVBQUUsbUJBQW1CO21CQUFLLG1CQUFtQixDQUFDLEtBQUsifQ==