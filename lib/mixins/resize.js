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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVzaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplTWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9mZlJlc2l6ZSIsIm9uUmVzaXplIiwicmVzaXplSGFuZGxlciIsImVsZW1lbnQiLCJvbkV2ZW50IiwiUkVTSVpFX0VWRU5UX1RZUEUiLCJvZmZFdmVudCIsInJlc2l6ZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBYUEsT0FBNEI7ZUFBNUI7O0lBUGdCQSxTQUFTO2VBQVRBOztJQUZBQyxRQUFRO2VBQVJBOzs7MEJBRmtCO0FBRTNCLFNBQVNBLFNBQVNDLGFBQWEsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUVyRyxTQUFTSCxVQUFVRSxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNHLFFBQVEsQ0FBQ0QsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFOUcsSUFBTUksZUFBZTtJQUNuQk4sVUFBQUE7SUFDQUQsV0FBQUE7QUFDRjtJQUVBLFdBQWVPIn0=