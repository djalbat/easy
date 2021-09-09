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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sIm5hbWVzIjpbIlJFU0laRV9FVkVOVF9UWVBFIiwiT0JKRUNUIiwiQUJPVVRfQkxBTksiLCJURVhUX0hUTUxfQ09OVEVOVF9UWVBFIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsIm9uIiwib2ZmUmVzaXplIiwib2ZmIiwiYWRkUmVzaXplT2JqZWN0IiwicmVzaXplT2JqZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkYXRhIiwidHlwZSIsInNldEF0dHJpYnV0ZSIsIl9fcmVzaXplT2JqZWN0X18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImRvbUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZVJlc2l6ZU9iamVjdCIsIm9iamVjdFdpbmRvdyIsImNvbnRlbnREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2l6ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU1peGlucyIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInJlc2l6ZUV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQU1JLFFBQVEsR0FBUixRQUFRO1FBRVIsU0FBUyxHQUFULFNBQVM7O0FBTlMsR0FBZSxDQUFmLFdBQWU7QUFDYixHQUFjLENBQWQsVUFBYztBQUNYLEdBQWlCLENBQWpCLGFBQWlCO1NBRXhDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUp4QixXQUFlLG9CQUk2QixhQUFhLEVBQUUsT0FBTztBQUFHLENBQUM7U0FFeEYsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUFDLElBQUksQ0FBQyxHQUFHLENBTjFCLFdBQWUsb0JBTStCLGFBQWEsRUFBRSxPQUFPO0FBQUcsQ0FBQztTQUVqRyxlQUFlLEdBQUcsQ0FBQztJQUMxQixHQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBUlQsVUFBYyxVQVMxQyxLQUFLLElBQUksNFJBUVksR0FDckIsSUFBSSxHQWxCd0IsVUFBYyxjQW1CMUMsSUFBSSxHQWxCMkIsYUFBaUI7SUFvQnRELFlBQVksQ0FBQyxZQUFZLEVBQUMsS0FBTyxHQUFFLEtBQUs7SUFFeEMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJO0lBRXhCLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUV4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWTtJQUVwQyxZQUFZLENBQUMsTUFBTSxJQUFHLFFBQVE7UUFBRixNQUFNLENBQU4sdUJBQXVCLENBQUMsSUFBSTs7SUFFeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWTtBQUMxQyxDQUFDO1NBRVEsa0JBQWtCLEdBQUcsQ0FBQztJQUM3QixHQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFDcEMsWUFBWSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVuRSxZQUFZLENBQUMsbUJBQW1CLENBdkNBLFdBQWUsb0JBdUNLLG1CQUFtQjtJQUV2RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZO0lBRXhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO0FBQzlCLENBQUM7QUFFRCxHQUFLLENBQUMsWUFBWSxHQUFHLENBQUM7SUFDcEIsUUFBUSxFQUFSLFFBQVE7SUFDUixTQUFTLEVBQVQsU0FBUztJQUNULGVBQWUsRUFBZixlQUFlO0lBQ2Ysa0JBQWtCLEVBQWxCLGtCQUFrQjtBQUNwQixDQUFDO2VBRWMsWUFBWTs7U0FFbEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsR0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQ3ZDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV6RSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0EzREgsV0FBZSxvQkEyRFEsUUFBUSxDQUFQLEtBQUssRUFBSyxDQUFDO1FBQ2pFLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBNUR6QixXQUFlO1FBOEQ3QyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLG1CQUFtQjtZQUFLLE1BQU0sQ0FBTixtQkFBbUIsQ0FBQyxLQUFLOztJQUNqRixDQUFDO0FBQ0gsQ0FBQyJ9