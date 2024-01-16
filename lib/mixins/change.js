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
function onChange(changeHandler, element) {
    this.onEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
}
function offChange(changeHandler, element) {
    this.offEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
}
var changeMixins = {
    onChange: onChange,
    offChange: offChange
};
var _default = changeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2hhbmdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBjaGFuZ2VNaXhpbnMgPSB7XG4gIG9uQ2hhbmdlLFxuICBvZmZDaGFuZ2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZU1peGlucztcbiJdLCJuYW1lcyI6WyJvbkNoYW5nZSIsImNoYW5nZUhhbmRsZXIiLCJlbGVtZW50Iiwib25FdmVudCIsIkNIQU5HRV9FVkVOVF9UWVBFIiwib2ZmQ2hhbmdlIiwib2ZmRXZlbnQiLCJjaGFuZ2VNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzBCQVhrQztBQUVsQyxTQUFTQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFckcsU0FBU0csVUFBVUosYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDSSxRQUFRLENBQUNGLDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRXZHLElBQU1LLGVBQWU7SUFDbkJQLFVBQUFBO0lBQ0FLLFdBQUFBO0FBQ0Y7SUFFQSxXQUFlRSJ9