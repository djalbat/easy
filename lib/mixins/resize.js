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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1QsIFJFU0laRSwgVEVYVF9IVE1MLCBBQk9VVF9CTEFOSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihSRVNJWkUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihSRVNJWkUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBBQk9VVF9CTEFOSyxcbiAgICAgICAgdHlwZSA9IFRFWFRfSFRNTDtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xuXG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcblxuICByZXNpemVPYmplY3QudHlwZSA9IHR5cGU7XG5cbiAgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSAoKSA9PiByZXNpemVPYmplY3RMb2FkSGFuZGxlcih0aGlzKTtcblxuICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSB0aGlzLl9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihSRVNJWkUsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xuXG4gIGRlbGV0ZSB0aGlzLl9fcmVzaXplT2JqZWN0X187XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRVNJWkUsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZWxlbWVudC5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFKTtcblxuICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUlJLFFBQVEsR0FBUixRQUFRO1FBRVIsU0FBUyxHQUFULFNBQVM7O0lBSjhCLFVBQWM7U0FFckQsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPO1NBQVMsRUFBRSxDQUZILFVBQWMsU0FFRixhQUFhLEVBQUUsT0FBTzs7U0FFekUsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPO1NBQVMsR0FBRyxDQUpMLFVBQWMsU0FJQSxhQUFhLEVBQUUsT0FBTzs7U0FFbEYsZUFBZTtRQUNoQixZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FQVSxVQUFjLFVBUTdELEtBQUssSUFBSSw0UkFRWSxHQUNyQixJQUFJLEdBakIyQyxVQUFjLGNBa0I3RCxJQUFJLEdBbEIyQyxVQUFjO0lBb0JuRSxZQUFZLENBQUMsWUFBWSxFQUFDLEtBQU8sR0FBRSxLQUFLO0lBRXhDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUV4QixZQUFZLENBQUMsSUFBSSxHQUFHLElBQUk7U0FFbkIsZ0JBQWdCLEdBQUcsWUFBWTtJQUVwQyxZQUFZLENBQUMsTUFBTTtlQUFTLHVCQUF1Qjs7U0FFOUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZOztTQUdqQyxrQkFBa0I7UUFDbkIsWUFBWSxRQUFRLGdCQUFnQixFQUNwQyxZQUFZLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRW5FLFlBQVksQ0FBQyxtQkFBbUIsQ0FyQ3FCLFVBQWMsU0FxQzFCLG1CQUFtQjtTQUV2RCxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVk7Z0JBRTVCLGdCQUFnQjs7SUFHeEIsWUFBWTtJQUNoQixRQUFRLEVBQVIsUUFBUTtJQUNSLFNBQVMsRUFBVCxTQUFTO0lBQ1QsZUFBZSxFQUFmLGVBQWU7SUFDZixrQkFBa0IsRUFBbEIsa0JBQWtCOztlQUdMLFlBQVk7O1NBRWxCLHVCQUF1QixDQUFDLE9BQU87UUFDaEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFDdkMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXpFLGtCQUFrQixDQUFDLGdCQUFnQixDQXpEa0IsVUFBYyxrQkF5RHRCLEtBQUs7WUFDMUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQTFESixVQUFjO1FBNERqRSxvQkFBb0IsQ0FBQyxPQUFPLFVBQUUsbUJBQW1CO21CQUFLLG1CQUFtQixDQUFDLEtBQUsifQ==