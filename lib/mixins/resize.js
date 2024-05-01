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
function onResize(resizeHandler, element) {
    this.onEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
}
function offResize(resizeHandler, element) {
    this.offEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
}
function addResizeObject() {
    var _this = this;
    var resizeObject = document.createElement(_constants.OBJECT), type = _constants.TEXT_HTML, data = _constants.ABOUT_BLANK, style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;";
    Object.assign(resizeObject, {
        type: type,
        data: data
    });
    resizeObject.setAttribute("style", style);
    this.__resizeObject__ = resizeObject; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBPQkpFQ1QsIFRFWFRfSFRNTCwgQUJPVVRfQkxBTksgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxuICAgICAgICB0eXBlID0gVEVYVF9IVE1MLCAgLy8vXG4gICAgICAgIGRhdGEgPSBBQk9VVF9CTEFOSywgLy8vXG4gICAgICAgIHN0eWxlID0gYGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YDtcblxuICBPYmplY3QuYXNzaWduKHJlc2l6ZU9iamVjdCwge1xuICAgIHR5cGUsXG4gICAgZGF0YVxuICB9KTtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDsgLy8vXG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcih0aGlzKTtcbiAgfTtcblxuICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSB0aGlzLl9fcmVzaXplT2JqZWN0X18sIC8vL1xuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xuXG4gIGRlbGV0ZSB0aGlzLl9fcmVzaXplT2JqZWN0X187XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRVNJWkVfRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSk7XG5cbiAgICByZXNpemVFdmVudExpc3RlbmVycy5mb3JFYWNoKChyZXNpemVFdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsib2ZmUmVzaXplIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsIm9uRXZlbnQiLCJSRVNJWkVfRVZFTlRfVFlQRSIsIm9mZkV2ZW50IiwiYWRkUmVzaXplT2JqZWN0IiwicmVzaXplT2JqZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0JKRUNUIiwidHlwZSIsIlRFWFRfSFRNTCIsImRhdGEiLCJBQk9VVF9CTEFOSyIsInN0eWxlIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0QXR0cmlidXRlIiwiX19yZXNpemVPYmplY3RfXyIsIm9ubG9hZCIsInJlc2l6ZU9iamVjdExvYWRIYW5kbGVyIiwiZG9tRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlUmVzaXplT2JqZWN0Iiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwicmVzaXplTWl4aW5zIiwicmVzaXplT2JqZWN0V2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicmVzaXplRXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlEQSxPQUE0QjtlQUE1Qjs7SUFsRGdCQSxTQUFTO2VBQVRBOztJQUZBQyxRQUFRO2VBQVJBOzs7MEJBSGtCO3lCQUNhO0FBRXhDLFNBQVNBLFNBQVNDLGFBQWEsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUVyRyxTQUFTSCxVQUFVRSxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNHLFFBQVEsQ0FBQ0QsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFOUcsU0FBU0k7O0lBQ1AsSUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDQyxpQkFBTSxHQUM1Q0MsT0FBT0Msb0JBQVMsRUFDaEJDLE9BQU9DLHNCQUFXLEVBQ2xCQyxRQUFTO0lBVWZDLE9BQU9DLE1BQU0sQ0FBQ1YsY0FBYztRQUMxQkksTUFBQUE7UUFDQUUsTUFBQUE7SUFDRjtJQUVBTixhQUFhVyxZQUFZLENBQUMsU0FBU0g7SUFFbkMsSUFBSSxDQUFDSSxnQkFBZ0IsR0FBR1osY0FBYyxHQUFHO0lBRXpDQSxhQUFhYSxNQUFNLEdBQUc7UUFDcEJDO0lBQ0Y7SUFFQSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDaEI7QUFDOUI7QUFFQSxTQUFTaUI7SUFDUCxJQUFNakIsZUFBZSxJQUFJLENBQUNZLGdCQUFnQixFQUNwQ00sZUFBZWxCLGFBQWFtQixlQUFlLENBQUNDLFdBQVcsRUFBRyxHQUFHO0lBRW5FRixhQUFhRyxtQkFBbUIsQ0FBQ3hCLDZCQUFpQixFQUFFeUI7SUFFcEQsSUFBSSxDQUFDUCxVQUFVLENBQUNRLFdBQVcsQ0FBQ3ZCO0lBRTVCLE9BQU8sSUFBSSxDQUFDWSxnQkFBZ0I7QUFDOUI7QUFFQSxJQUFNWSxlQUFlO0lBQ25CL0IsVUFBQUE7SUFDQUQsV0FBQUE7SUFDQU8saUJBQUFBO0lBQ0FrQixvQkFBQUE7QUFDRjtJQUVBLFdBQWVPO0FBRWYsU0FBU1Ysd0JBQXdCbkIsT0FBTztJQUN0QyxJQUFNSyxlQUFlTCxRQUFRaUIsZ0JBQWdCLEVBQ3ZDYSxxQkFBcUJ6QixhQUFhbUIsZUFBZSxDQUFDQyxXQUFXLEVBQUcsR0FBRztJQUV6RUssbUJBQW1CQyxnQkFBZ0IsQ0FBQzdCLDZCQUFpQixFQUFFLFNBQUM4QjtRQUN0RCxJQUFNQyx1QkFBdUJqQyxRQUFRa0Msa0JBQWtCLENBQUNoQyw2QkFBaUI7UUFFekUrQixxQkFBcUJFLE9BQU8sQ0FBQyxTQUFDUjtZQUM1QkEscUJBQW9CSztRQUN0QjtJQUNGO0FBQ0YifQ==