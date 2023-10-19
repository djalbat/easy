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
    default: function() {
        return _default;
    },
    offResize: function() {
        return offResize;
    },
    onResize: function() {
        return onResize;
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
        resizeObjectLoadHandler(_this);
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
            resizeEventListener1(event);
        });
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBPQkpFQ1QsIEFCT1VUX0JMQU5LIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBhZGRSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoT0JKRUNUKSxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgLFxuICAgICAgICBkYXRhID0gQUJPVVRfQkxBTkssXG4gICAgICAgIHR5cGUgPSBURVhUX0hUTUxfQ09OVEVOVF9UWVBFO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG5cbiAgcmVzaXplT2JqZWN0LmRhdGEgPSBkYXRhO1xuXG4gIHJlc2l6ZU9iamVjdC50eXBlID0gdHlwZTtcblxuICB0aGlzLl9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcih0aGlzKTtcbiAgfTtcblxuICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSB0aGlzLl9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG5cbiAgZGVsZXRlIHRoaXMuX19yZXNpemVPYmplY3RfXztcbn1cblxuY29uc3QgcmVzaXplTWl4aW5zID0ge1xuICBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplLFxuICBhZGRSZXNpemVPYmplY3QsXG4gIHJlbW92ZVJlc2l6ZU9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplTWl4aW5zO1xuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgcmVzaXplT2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFJFU0laRV9FVkVOVF9UWVBFLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGVsZW1lbnQuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKTtcblxuICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJvZmZSZXNpemUiLCJvblJlc2l6ZSIsInJlc2l6ZUhhbmRsZXIiLCJlbGVtZW50Iiwib24iLCJSRVNJWkVfRVZFTlRfVFlQRSIsIm9mZiIsImFkZFJlc2l6ZU9iamVjdCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9CSkVDVCIsInN0eWxlIiwiZGF0YSIsIkFCT1VUX0JMQU5LIiwidHlwZSIsIlRFWFRfSFRNTF9DT05URU5UX1RZUEUiLCJzZXRBdHRyaWJ1dGUiLCJfX3Jlc2l6ZU9iamVjdF9fIiwib25sb2FkIiwicmVzaXplT2JqZWN0TG9hZEhhbmRsZXIiLCJkb21FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVSZXNpemVPYmplY3QiLCJvYmplY3RXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNpemVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJyZXNpemVNaXhpbnMiLCJyZXNpemVPYmplY3RXaW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZXNpemVFdmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlEQSxPQUE0QjtlQUE1Qjs7SUFqRGdCQSxTQUFTO2VBQVRBOztJQUZBQyxRQUFRO2VBQVJBOzs7MEJBSmtCO3lCQUNFOzRCQUNHO0FBRWhDLFNBQVNBLFNBQVNDLGFBQWEsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0MsRUFBRSxDQUFDQyw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUVoRyxTQUFTSCxVQUFVRSxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNHLEdBQUcsQ0FBQ0QsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFekcsU0FBU0k7O0lBQ1AsSUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDQyxpQkFBTSxHQUM1Q0MsUUFBUyxnU0FTVEMsT0FBT0Msc0JBQVcsRUFDbEJDLE9BQU9DLG9DQUFzQjtJQUVuQ1IsYUFBYVMsWUFBWSxDQUFDLFNBQVNMO0lBRW5DSixhQUFhSyxJQUFJLEdBQUdBO0lBRXBCTCxhQUFhTyxJQUFJLEdBQUdBO0lBRXBCLElBQUksQ0FBQ0csZ0JBQWdCLEdBQUdWO0lBRXhCQSxhQUFhVyxNQUFNLEdBQUc7UUFDcEJDO0lBQ0Y7SUFFQSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDZDtBQUM5QjtBQUVBLFNBQVNlO0lBQ1AsSUFBTWYsZUFBZSxJQUFJLENBQUNVLGdCQUFnQixFQUNwQ00sZUFBZWhCLGFBQWFpQixlQUFlLENBQUNDLFdBQVcsRUFBRyxHQUFHO0lBRW5FRixhQUFhRyxtQkFBbUIsQ0FBQ3RCLDZCQUFpQixFQUFFdUI7SUFFcEQsSUFBSSxDQUFDUCxVQUFVLENBQUNRLFdBQVcsQ0FBQ3JCO0lBRTVCLE9BQU8sSUFBSSxDQUFDVSxnQkFBZ0I7QUFDOUI7QUFFQSxJQUFNWSxlQUFlO0lBQ25CN0IsVUFBQUE7SUFDQUQsV0FBQUE7SUFDQU8saUJBQUFBO0lBQ0FnQixvQkFBQUE7QUFDRjtJQUVBLFdBQWVPO0FBRWYsU0FBU1Ysd0JBQXdCakIsT0FBTztJQUN0QyxJQUFNSyxlQUFlTCxRQUFRZSxnQkFBZ0IsRUFDdkNhLHFCQUFxQnZCLGFBQWFpQixlQUFlLENBQUNDLFdBQVcsRUFBRyxHQUFHO0lBRXpFSyxtQkFBbUJDLGdCQUFnQixDQUFDM0IsNkJBQWlCLEVBQUUsU0FBQzRCO1FBQ3RELElBQU1DLHVCQUF1Qi9CLFFBQVFnQyxrQkFBa0IsQ0FBQzlCLDZCQUFpQjtRQUV6RTZCLHFCQUFxQkUsT0FBTyxDQUFDLFNBQUNSO1lBQzVCQSxxQkFBb0JLO1FBQ3RCO0lBQ0Y7QUFDRiJ9