"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onResize = onResize;
exports.offResize = offResize;
exports.default = void 0;
var _eventTypes = require("../eventTypes");
var _constants = require("../constants");
var _contentTypes = require("../contentTypes");
function onResize(resizeHandler, element) {
    this.on(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
}
function offResize(resizeHandler, element) {
    this.off(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
}
function addResizeObject() {
    var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _contentTypes.TEXT_HTML_CONTENT_TYPE;
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
    objectWindow.removeEventListener(_eventTypes.RESIZE_EVENT_TYPE, resizeEventListener);
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
    resizeObjectWindow.addEventListener(_eventTypes.RESIZE_EVENT_TYPE, function(event) {
        var resizeEventListeners = element.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
        resizeEventListeners.forEach(function(resizeEventListener) {
            return resizeEventListener(event);
        });
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBPQkpFQ1QsIEFCT1VUX0JMQU5LIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBhZGRSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoT0JKRUNUKSxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgLFxuICAgICAgICBkYXRhID0gQUJPVVRfQkxBTkssXG4gICAgICAgIHR5cGUgPSBURVhUX0hUTUxfQ09OVEVOVF9UWVBFO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG5cbiAgcmVzaXplT2JqZWN0LmRhdGEgPSBkYXRhO1xuXG4gIHJlc2l6ZU9iamVjdC50eXBlID0gdHlwZTtcblxuICB0aGlzLl9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9ICgpID0+IHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKHRoaXMpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IHRoaXMuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVFdmVudExpc3RlbmVyKTtcblxuICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcblxuICBkZWxldGUgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fO1xufVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemUsXG4gIGFkZFJlc2l6ZU9iamVjdCxcbiAgcmVtb3ZlUmVzaXplT2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNpemVNaXhpbnM7XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZWxlbWVudC5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4gcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCkpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksUUFBUSxHQUFSLFFBQVE7UUFFUixTQUFTLEdBQVQsU0FBUzs7SUFOUyxXQUFlO0lBQ2IsVUFBYztJQUNYLGFBQWlCO1NBRXhDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTztTQUFTLEVBQUUsQ0FKeEIsV0FBZSxvQkFJNkIsYUFBYSxFQUFFLE9BQU87O1NBRXBGLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTztTQUFTLEdBQUcsQ0FOMUIsV0FBZSxvQkFNK0IsYUFBYSxFQUFFLE9BQU87O1NBRTdGLGVBQWU7UUFDaEIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBUlQsVUFBYyxVQVMxQyxLQUFLLElBQUksNFJBUVksR0FDckIsSUFBSSxHQWxCd0IsVUFBYyxjQW1CMUMsSUFBSSxHQWxCMkIsYUFBaUI7SUFvQnRELFlBQVksQ0FBQyxZQUFZLEVBQUMsS0FBTyxHQUFFLEtBQUs7SUFFeEMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJO0lBRXhCLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSTtTQUVuQixnQkFBZ0IsR0FBRyxZQUFZO0lBRXBDLFlBQVksQ0FBQyxNQUFNO2VBQVMsdUJBQXVCOztTQUU5QyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVk7O1NBR2pDLGtCQUFrQjtRQUNuQixZQUFZLFFBQVEsZ0JBQWdCLEVBQ3BDLFlBQVksR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFbkUsWUFBWSxDQUFDLG1CQUFtQixDQXZDQSxXQUFlLG9CQXVDSyxtQkFBbUI7U0FFbEUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZO2dCQUU1QixnQkFBZ0I7O0lBR3hCLFlBQVk7SUFDaEIsUUFBUSxFQUFSLFFBQVE7SUFDUixTQUFTLEVBQVQsU0FBUztJQUNULGVBQWUsRUFBZixlQUFlO0lBQ2Ysa0JBQWtCLEVBQWxCLGtCQUFrQjs7ZUFHTCxZQUFZOztTQUVsQix1QkFBdUIsQ0FBQyxPQUFPO1FBQ2hDLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQ3ZDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV6RSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0EzREgsV0FBZSw2QkEyRFMsS0FBSztZQUNyRCxvQkFBb0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBNUR6QixXQUFlO1FBOEQ3QyxvQkFBb0IsQ0FBQyxPQUFPLFVBQUUsbUJBQW1CO21CQUFLLG1CQUFtQixDQUFDLEtBQUsifQ==