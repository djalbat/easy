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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBPQkpFQ1QsIFRFWFRfSFRNTCwgQUJPVVRfQkxBTksgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxuICAgICAgICB0eXBlID0gVEVYVF9IVE1MLCAgLy8vXG4gICAgICAgIGRhdGEgPSBBQk9VVF9CTEFOSywgLy8vXG4gICAgICAgIHN0eWxlID0gYGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YDtcblxuICBPYmplY3QuYXNzaWduKHJlc2l6ZU9iamVjdCwge1xuICAgIHR5cGUsXG4gICAgZGF0YVxuICB9KTtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDsgLy8vXG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcih0aGlzKTtcbiAgfTtcblxuICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSB0aGlzLl9fcmVzaXplT2JqZWN0X18sIC8vL1xuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xuXG4gIGRlbGV0ZSB0aGlzLl9fcmVzaXplT2JqZWN0X187XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRVNJWkVfRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSk7XG5cbiAgICByZXNpemVFdmVudExpc3RlbmVycy5mb3JFYWNoKChyZXNpemVFdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsib2ZmUmVzaXplIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsIm9uRXZlbnQiLCJSRVNJWkVfRVZFTlRfVFlQRSIsIm9mZkV2ZW50IiwiYWRkUmVzaXplT2JqZWN0IiwicmVzaXplT2JqZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0JKRUNUIiwidHlwZSIsIlRFWFRfSFRNTCIsImRhdGEiLCJBQk9VVF9CTEFOSyIsInN0eWxlIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0QXR0cmlidXRlIiwiX19yZXNpemVPYmplY3RfXyIsIm9ubG9hZCIsInJlc2l6ZU9iamVjdExvYWRIYW5kbGVyIiwiZG9tRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlUmVzaXplT2JqZWN0Iiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwicmVzaXplTWl4aW5zIiwicmVzaXplT2JqZWN0V2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicmVzaXplRXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5REEsT0FBNEI7ZUFBNUI7O0lBbERnQkEsU0FBUztlQUFUQTs7SUFGQUMsUUFBUTtlQUFSQTs7OzBCQUhrQjt5QkFDYTtBQUV4QyxTQUFTQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFckcsU0FBU0gsVUFBVUUsYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDRyxRQUFRLENBQUNELDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRTlHLFNBQVNJOztJQUNQLElBQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQ0MsaUJBQU0sR0FDNUNDLE9BQU9DLG9CQUFTLEVBQ2hCQyxPQUFPQyxzQkFBVyxFQUNsQkMsUUFBUztJQVVmQyxPQUFPQyxNQUFNLENBQUNWLGNBQWM7UUFDMUJJLE1BQUFBO1FBQ0FFLE1BQUFBO0lBQ0Y7SUFFQU4sYUFBYVcsWUFBWSxDQUFDLFNBQVNIO0lBRW5DLElBQUksQ0FBQ0ksZ0JBQWdCLEdBQUdaLGNBQWMsR0FBRztJQUV6Q0EsYUFBYWEsTUFBTSxHQUFHO1FBQ3BCQztJQUNGO0lBRUEsSUFBSSxDQUFDQyxVQUFVLENBQUNDLFdBQVcsQ0FBQ2hCO0FBQzlCO0FBRUEsU0FBU2lCO0lBQ1AsSUFBTWpCLGVBQWUsSUFBSSxDQUFDWSxnQkFBZ0IsRUFDcENNLGVBQWVsQixhQUFhbUIsZUFBZSxDQUFDQyxXQUFXLEVBQUcsR0FBRztJQUVuRUYsYUFBYUcsbUJBQW1CLENBQUN4Qiw2QkFBaUIsRUFBRXlCO0lBRXBELElBQUksQ0FBQ1AsVUFBVSxDQUFDUSxXQUFXLENBQUN2QjtJQUU1QixPQUFPLElBQUksQ0FBQ1ksZ0JBQWdCO0FBQzlCO0FBRUEsSUFBTVksZUFBZTtJQUNuQi9CLFVBQUFBO0lBQ0FELFdBQUFBO0lBQ0FPLGlCQUFBQTtJQUNBa0Isb0JBQUFBO0FBQ0Y7SUFFQSxXQUFlTztBQUVmLFNBQVNWLHdCQUF3Qm5CLE9BQU87SUFDdEMsSUFBTUssZUFBZUwsUUFBUWlCLGdCQUFnQixFQUN2Q2EscUJBQXFCekIsYUFBYW1CLGVBQWUsQ0FBQ0MsV0FBVyxFQUFHLEdBQUc7SUFFekVLLG1CQUFtQkMsZ0JBQWdCLENBQUM3Qiw2QkFBaUIsRUFBRSxTQUFDOEI7UUFDdEQsSUFBTUMsdUJBQXVCakMsUUFBUWtDLGtCQUFrQixDQUFDaEMsNkJBQWlCO1FBRXpFK0IscUJBQXFCRSxPQUFPLENBQUMsU0FBQ1I7WUFDNUJBLHFCQUFvQks7UUFDdEI7SUFDRjtBQUNGIn0=