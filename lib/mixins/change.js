"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2hhbmdlLmpzIl0sIm5hbWVzIjpbIkNIQU5HRV9FVkVOVF9UWVBFIiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwiZWxlbWVudCIsIm9uIiwib2ZmQ2hhbmdlIiwib2ZmIiwiY2hhbmdlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVzQixHQUFlLENBQWYsV0FBZTtTQUV4QyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FGakIsV0FBZSxvQkFFc0IsYUFBYSxFQUFFLE9BQU87QUFBRyxDQUFDO1NBRXhGLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsR0FBRyxDQUpuQixXQUFlLG9CQUl3QixhQUFhLEVBQUUsT0FBTztBQUFHLENBQUM7QUFFbkcsR0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDO0lBQ3BCLFFBQVEsRUFBUixRQUFRO0lBQ1IsU0FBUyxFQUFULFNBQVM7QUFDWCxDQUFDO2VBRWMsWUFBWSJ9