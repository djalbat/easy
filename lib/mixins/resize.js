"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function onResize(resizeHandler, element) {
    this.on("resize", resizeHandler, element);
}
function offResize(resizeHandler, element) {
    this.off("resize", resizeHandler, element);
}
function addResizeObject() {
    var resizeObject = document.createElement("object"), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = "about:blank", type = "text/html";
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
    objectWindow.removeEventListener("resize", resizeEventListener);
    this.domElement.removeChild(resizeObject);
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
    resizeObjectWindow.addEventListener("resize", function(event) {
        var resizeEventListeners = element.findEventListeners("resize");
        resizeEventListeners.forEach(function(resizeEventListener) {
            return resizeEventListener(event);
        });
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gYWRkUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2JqZWN0XCIpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBcImFib3V0OmJsYW5rXCIsXG4gICAgICAgIHR5cGUgPSBcInRleHQvaHRtbFwiO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIodGhpcyk7XG5cbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gdGhpcy5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGVsZW1lbnQuZmluZEV2ZW50TGlzdGVuZXJzKFwicmVzaXplXCIpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4gcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCkpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztTQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTztTQUFTLEVBQUUsRUFBQyxNQUFRLEdBQUUsYUFBYSxFQUFFLE9BQU87O1NBRTNFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTztTQUFTLEdBQUcsRUFBQyxNQUFRLEdBQUUsYUFBYSxFQUFFLE9BQU87O1NBRTdFLGVBQWU7UUFDaEIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUMsTUFBUSxJQUM5QyxLQUFLLElBQUksNFJBUVksR0FDckIsSUFBSSxJQUFHLFdBQWEsR0FDcEIsSUFBSSxJQUFHLFNBQVc7SUFFeEIsWUFBWSxDQUFDLFlBQVksRUFBQyxLQUFPLEdBQUUsS0FBSztJQUN4QyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUk7SUFDeEIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJO1NBRW5CLGdCQUFnQixHQUFHLFlBQVk7SUFFcEMsWUFBWSxDQUFDLE1BQU07ZUFBUyx1QkFBdUI7O1NBRTlDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWTs7U0FHakMsa0JBQWtCO1FBQ25CLFlBQVksUUFBUSxnQkFBZ0IsRUFDcEMsWUFBWSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVuRSxZQUFZLENBQUMsbUJBQW1CLEVBQUMsTUFBUSxHQUFFLG1CQUFtQjtTQUV6RCxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVk7O0lBR3BDLFlBQVk7SUFDaEIsUUFBUSxFQUFSLFFBQVE7SUFDUixTQUFTLEVBQVQsU0FBUztJQUNULGVBQWUsRUFBZixlQUFlO0lBQ2Ysa0JBQWtCLEVBQWxCLGtCQUFrQjs7ZUFHTCxZQUFZOztTQUVsQix1QkFBdUIsQ0FBQyxPQUFPO1FBQ2hDLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQ3ZDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV6RSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBQyxNQUFRLFlBQUcsS0FBSztZQUM1QyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLEVBQUMsTUFBUTtRQUVoRSxvQkFBb0IsQ0FBQyxPQUFPLFVBQUUsbUJBQW1CO21CQUFLLG1CQUFtQixDQUFDLEtBQUsifQ==