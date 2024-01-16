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
    this.onEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
}
function offResize(resizeHandler, element) {
    this.offEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBPQkpFQ1QsIEFCT1VUX0JMQU5LIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gYWRkUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KE9CSkVDVCksXG4gICAgICAgIHN0eWxlID0gYGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YCxcbiAgICAgICAgZGF0YSA9IEFCT1VUX0JMQU5LLFxuICAgICAgICB0eXBlID0gVEVYVF9IVE1MX0NPTlRFTlRfVFlQRTtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xuXG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcblxuICByZXNpemVPYmplY3QudHlwZSA9IHR5cGU7XG5cbiAgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIodGhpcyk7XG4gIH07XG5cbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gdGhpcy5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xuXG4gIGRlbGV0ZSB0aGlzLl9fcmVzaXplT2JqZWN0X187XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRVNJWkVfRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSk7XG5cbiAgICByZXNpemVFdmVudExpc3RlbmVycy5mb3JFYWNoKChyZXNpemVFdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsib2ZmUmVzaXplIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsIm9uRXZlbnQiLCJSRVNJWkVfRVZFTlRfVFlQRSIsIm9mZkV2ZW50IiwiYWRkUmVzaXplT2JqZWN0IiwicmVzaXplT2JqZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT0JKRUNUIiwic3R5bGUiLCJkYXRhIiwiQUJPVVRfQkxBTksiLCJ0eXBlIiwiVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSIsInNldEF0dHJpYnV0ZSIsIl9fcmVzaXplT2JqZWN0X18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImRvbUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZVJlc2l6ZU9iamVjdCIsIm9iamVjdFdpbmRvdyIsImNvbnRlbnREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2l6ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU1peGlucyIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInJlc2l6ZUV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeURBLE9BQTRCO2VBQTVCOztJQWpEZ0JBLFNBQVM7ZUFBVEE7O0lBRkFDLFFBQVE7ZUFBUkE7OzswQkFKa0I7eUJBQ0U7NEJBQ0c7QUFFaEMsU0FBU0EsU0FBU0MsYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNDLDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRXJHLFNBQVNILFVBQVVFLGFBQWEsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0csUUFBUSxDQUFDRCw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUU5RyxTQUFTSTs7SUFDUCxJQUFNQyxlQUFlQyxTQUFTQyxhQUFhLENBQUNDLGlCQUFNLEdBQzVDQyxRQUFTLGdTQVNUQyxPQUFPQyxzQkFBVyxFQUNsQkMsT0FBT0Msb0NBQXNCO0lBRW5DUixhQUFhUyxZQUFZLENBQUMsU0FBU0w7SUFFbkNKLGFBQWFLLElBQUksR0FBR0E7SUFFcEJMLGFBQWFPLElBQUksR0FBR0E7SUFFcEIsSUFBSSxDQUFDRyxnQkFBZ0IsR0FBR1Y7SUFFeEJBLGFBQWFXLE1BQU0sR0FBRztRQUNwQkM7SUFDRjtJQUVBLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxXQUFXLENBQUNkO0FBQzlCO0FBRUEsU0FBU2U7SUFDUCxJQUFNZixlQUFlLElBQUksQ0FBQ1UsZ0JBQWdCLEVBQ3BDTSxlQUFlaEIsYUFBYWlCLGVBQWUsQ0FBQ0MsV0FBVyxFQUFHLEdBQUc7SUFFbkVGLGFBQWFHLG1CQUFtQixDQUFDdEIsNkJBQWlCLEVBQUV1QjtJQUVwRCxJQUFJLENBQUNQLFVBQVUsQ0FBQ1EsV0FBVyxDQUFDckI7SUFFNUIsT0FBTyxJQUFJLENBQUNVLGdCQUFnQjtBQUM5QjtBQUVBLElBQU1ZLGVBQWU7SUFDbkI3QixVQUFBQTtJQUNBRCxXQUFBQTtJQUNBTyxpQkFBQUE7SUFDQWdCLG9CQUFBQTtBQUNGO0lBRUEsV0FBZU87QUFFZixTQUFTVix3QkFBd0JqQixPQUFPO0lBQ3RDLElBQU1LLGVBQWVMLFFBQVFlLGdCQUFnQixFQUN2Q2EscUJBQXFCdkIsYUFBYWlCLGVBQWUsQ0FBQ0MsV0FBVyxFQUFHLEdBQUc7SUFFekVLLG1CQUFtQkMsZ0JBQWdCLENBQUMzQiw2QkFBaUIsRUFBRSxTQUFDNEI7UUFDdEQsSUFBTUMsdUJBQXVCL0IsUUFBUWdDLGtCQUFrQixDQUFDOUIsNkJBQWlCO1FBRXpFNkIscUJBQXFCRSxPQUFPLENBQUMsU0FBQ1I7WUFDNUJBLHFCQUFvQks7UUFDdEI7SUFDRjtBQUNGIn0=