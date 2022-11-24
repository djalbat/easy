"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    onResize: function() {
        return onResize;
    },
    offResize: function() {
        return offResize;
    },
    default: function() {
        return _default;
    }
});
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
    var _this = this;
    var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _contentTypes.TEXT_HTML_CONTENT_TYPE;
    resizeObject.setAttribute("style", style);
    resizeObject.data = data;
    resizeObject.type = type;
    this.__resizeObject__ = resizeObject;
    resizeObject.onload = function() {
        return resizeObjectLoadHandler(_this);
    };
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
function resizeObjectLoadHandler(element) {
    var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView; ///
    resizeObjectWindow.addEventListener(_eventTypes.RESIZE_EVENT_TYPE, function(event) {
        var resizeEventListeners = element.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
        resizeEventListeners.forEach(function(resizeEventListener1) {
            return resizeEventListener1(event);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBPQkpFQ1QsIEFCT1VUX0JMQU5LIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBhZGRSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoT0JKRUNUKSxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgLFxuICAgICAgICBkYXRhID0gQUJPVVRfQkxBTkssXG4gICAgICAgIHR5cGUgPSBURVhUX0hUTUxfQ09OVEVOVF9UWVBFO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG5cbiAgcmVzaXplT2JqZWN0LmRhdGEgPSBkYXRhO1xuXG4gIHJlc2l6ZU9iamVjdC50eXBlID0gdHlwZTtcblxuICB0aGlzLl9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9ICgpID0+IHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKHRoaXMpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IHRoaXMuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVFdmVudExpc3RlbmVyKTtcblxuICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcblxuICBkZWxldGUgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fO1xufVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemUsXG4gIGFkZFJlc2l6ZU9iamVjdCxcbiAgcmVtb3ZlUmVzaXplT2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNpemVNaXhpbnM7XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZWxlbWVudC5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4gcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCkpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJvblJlc2l6ZSIsIm9mZlJlc2l6ZSIsInJlc2l6ZUhhbmRsZXIiLCJlbGVtZW50Iiwib24iLCJSRVNJWkVfRVZFTlRfVFlQRSIsIm9mZiIsImFkZFJlc2l6ZU9iamVjdCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9CSkVDVCIsInN0eWxlIiwiZGF0YSIsIkFCT1VUX0JMQU5LIiwidHlwZSIsIlRFWFRfSFRNTF9DT05URU5UX1RZUEUiLCJzZXRBdHRyaWJ1dGUiLCJfX3Jlc2l6ZU9iamVjdF9fIiwib25sb2FkIiwicmVzaXplT2JqZWN0TG9hZEhhbmRsZXIiLCJkb21FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVSZXNpemVPYmplY3QiLCJvYmplY3RXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNpemVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJyZXNpemVNaXhpbnMiLCJyZXNpemVPYmplY3RXaW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZXNpemVFdmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsUUFBUTtlQUFSQTs7SUFFQUMsU0FBUztlQUFUQTs7SUErQ2hCLE9BQTRCO2VBQTVCOzs7MEJBckRrQzt5QkFDRTs0QkFDRztBQUVoQyxTQUFTRCxTQUFTRSxhQUFhLEVBQUVDLE9BQU8sRUFBRTtJQUFFLElBQUksQ0FBQ0MsRUFBRSxDQUFDQyw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUVoRyxTQUFTRixVQUFVQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtJQUFFLElBQUksQ0FBQ0csR0FBRyxDQUFDRCw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUV6RyxTQUFTSSxrQkFBa0I7O0lBQ3pCLElBQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQ0MsaUJBQU0sR0FDNUNDLFFBQVMsZ1NBU1RDLE9BQU9DLHNCQUFXLEVBQ2xCQyxPQUFPQyxvQ0FBc0I7SUFFbkNSLGFBQWFTLFlBQVksQ0FBQyxTQUFTTDtJQUVuQ0osYUFBYUssSUFBSSxHQUFHQTtJQUVwQkwsYUFBYU8sSUFBSSxHQUFHQTtJQUVwQixJQUFJLENBQUNHLGdCQUFnQixHQUFHVjtJQUV4QkEsYUFBYVcsTUFBTSxHQUFHO2VBQU1DOztJQUU1QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDZDtBQUM5QjtBQUVBLFNBQVNlLHFCQUFxQjtJQUM1QixJQUFNZixlQUFlLElBQUksQ0FBQ1UsZ0JBQWdCLEVBQ3BDTSxlQUFlaEIsYUFBYWlCLGVBQWUsQ0FBQ0MsV0FBVyxFQUFHLEdBQUc7SUFFbkVGLGFBQWFHLG1CQUFtQixDQUFDdEIsNkJBQWlCLEVBQUV1QjtJQUVwRCxJQUFJLENBQUNQLFVBQVUsQ0FBQ1EsV0FBVyxDQUFDckI7SUFFNUIsT0FBTyxJQUFJLENBQUNVLGdCQUFnQjtBQUM5QjtBQUVBLElBQU1ZLGVBQWU7SUFDbkI5QixVQUFBQTtJQUNBQyxXQUFBQTtJQUNBTSxpQkFBQUE7SUFDQWdCLG9CQUFBQTtBQUNGO0lBRUEsV0FBZU87QUFFZixTQUFTVix3QkFBd0JqQixPQUFPLEVBQUU7SUFDeEMsSUFBTUssZUFBZUwsUUFBUWUsZ0JBQWdCLEVBQ3ZDYSxxQkFBcUJ2QixhQUFhaUIsZUFBZSxDQUFDQyxXQUFXLEVBQUcsR0FBRztJQUV6RUssbUJBQW1CQyxnQkFBZ0IsQ0FBQzNCLDZCQUFpQixFQUFFLFNBQUM0QixPQUFVO1FBQ2hFLElBQU1DLHVCQUF1Qi9CLFFBQVFnQyxrQkFBa0IsQ0FBQzlCLDZCQUFpQjtRQUV6RTZCLHFCQUFxQkUsT0FBTyxDQUFDLFNBQUNSO21CQUF3QkEscUJBQW9CSzs7SUFDNUU7QUFDRiJ9