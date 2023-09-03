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
    this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
}
function offChange(changeHandler, element) {
    this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
}
var changeMixins = {
    onChange: onChange,
    offChange: offChange
};
var _default = changeMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2hhbmdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGNoYW5nZU1peGlucyA9IHtcbiAgb25DaGFuZ2UsXG4gIG9mZkNoYW5nZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlTWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwiY2hhbmdlSGFuZGxlciIsImVsZW1lbnQiLCJvbiIsIkNIQU5HRV9FVkVOVF9UWVBFIiwib2ZmQ2hhbmdlIiwib2ZmIiwiY2hhbmdlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzswQkFYa0M7QUFFbEMsU0FBU0EsU0FBU0MsYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDQyxFQUFFLENBQUNDLDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRWhHLFNBQVNHLFVBQVVKLGFBQWEsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0ksR0FBRyxDQUFDRiw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUVsRyxJQUFNSyxlQUFlO0lBQ25CUCxVQUFBQTtJQUNBSyxXQUFBQTtBQUNGO0lBRUEsV0FBZUUifQ==