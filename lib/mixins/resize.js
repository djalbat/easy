"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _eventTypes = require("../eventTypes");
function onResize(resizeHandler, element) {
    this.onEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
}
function offResize(resizeHandler, element) {
    this.offEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
}
var resizeMixins = {
    onResize: onResize,
    offResize: offResize
};
var _default = resizeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcbiJdLCJuYW1lcyI6WyJvblJlc2l6ZSIsInJlc2l6ZUhhbmRsZXIiLCJlbGVtZW50Iiwib25FdmVudCIsIlJFU0laRV9FVkVOVF9UWVBFIiwib2ZmUmVzaXplIiwib2ZmRXZlbnQiLCJyZXNpemVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzBCQVhrQztBQUVsQyxTQUFTQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFckcsU0FBU0csVUFBVUosYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDSSxRQUFRLENBQUNGLDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRXZHLElBQU1LLGVBQWU7SUFDbkJQLFVBQUFBO0lBQ0FLLFdBQUFBO0FBQ0Y7SUFFQSxXQUFlRSJ9