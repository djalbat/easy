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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gYWRkUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2JqZWN0XCIpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBcImFib3V0OmJsYW5rXCIsXG4gICAgICAgIHR5cGUgPSBcInRleHQvaHRtbFwiO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIodGhpcyk7XG5cbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gdGhpcy5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGVsZW1lbnQuZmluZEV2ZW50TGlzdGVuZXJzKFwicmVzaXplXCIpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4gcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCkpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztTQUVBLFFBQUEsQ0FBQSxhQUFBLEVBQUEsT0FBQTtTQUFBLEVBQUEsRUFBQSxNQUFBLEdBQUEsYUFBQSxFQUFBLE9BQUE7O1NBRUEsU0FBQSxDQUFBLGFBQUEsRUFBQSxPQUFBO1NBQUEsR0FBQSxFQUFBLE1BQUEsR0FBQSxhQUFBLEVBQUEsT0FBQTs7U0FFQSxlQUFBO1FBQ0EsWUFBQSxHQUFBLFFBQUEsQ0FBQSxhQUFBLEVBQUEsTUFBQSxJQUNBLEtBQUEsSUFBQSw0UkFRQSxHQUNBLElBQUEsSUFBQSxXQUFBLEdBQ0EsSUFBQSxJQUFBLFNBQUE7QUFFQSxnQkFBQSxDQUFBLFlBQUEsRUFBQSxLQUFBLEdBQUEsS0FBQTtBQUNBLGdCQUFBLENBQUEsSUFBQSxHQUFBLElBQUE7QUFDQSxnQkFBQSxDQUFBLElBQUEsR0FBQSxJQUFBO1NBRUEsZ0JBQUEsR0FBQSxZQUFBO0FBRUEsZ0JBQUEsQ0FBQSxNQUFBO2VBQUEsdUJBQUE7O1NBRUEsVUFBQSxDQUFBLFdBQUEsQ0FBQSxZQUFBOztTQUdBLGtCQUFBO1FBQ0EsWUFBQSxRQUFBLGdCQUFBLEVBQ0EsWUFBQSxHQUFBLFlBQUEsQ0FBQSxlQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsZ0JBQUEsQ0FBQSxtQkFBQSxFQUFBLE1BQUEsR0FBQSxtQkFBQTtTQUVBLFVBQUEsQ0FBQSxXQUFBLENBQUEsWUFBQTs7SUFHQSxZQUFBO0FBQ0EsWUFBQSxFQUFBLFFBQUE7QUFDQSxhQUFBLEVBQUEsU0FBQTtBQUNBLG1CQUFBLEVBQUEsZUFBQTtBQUNBLHNCQUFBLEVBQUEsa0JBQUE7O2VBR0EsWUFBQTs7U0FFQSx1QkFBQSxDQUFBLE9BQUE7UUFDQSxZQUFBLEdBQUEsT0FBQSxDQUFBLGdCQUFBLEVBQ0Esa0JBQUEsR0FBQSxZQUFBLENBQUEsZUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLHNCQUFBLENBQUEsZ0JBQUEsRUFBQSxNQUFBLFlBQUEsS0FBQTtZQUNBLG9CQUFBLEdBQUEsT0FBQSxDQUFBLGtCQUFBLEVBQUEsTUFBQTtBQUVBLDRCQUFBLENBQUEsT0FBQSxVQUFBLG1CQUFBO21CQUFBLG1CQUFBLENBQUEsS0FBQSJ9