"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _eventTypes = require("../eventTypes");
function onKeyUp(keyUpHandler, element) {
    this.on(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
}
function offKeyUp(keyUpHandler, element) {
    this.off(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
}
function onKeyDown(keyDownHandler, element) {
    this.on(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
}
function offKeyDown(keyDownHandler, element) {
    this.off(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
}
var keyMixins = {
    onKeyUp: onKeyUp,
    offKeyUp: offKeyUp,
    onKeyDown: onKeyDown,
    offKeyDown: offKeyDown
};
var _default = keyMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMva2V5LmpzIl0sIm5hbWVzIjpbIktFWVVQX0VWRU5UX1RZUEUiLCJLRVlET1dOX0VWRU5UX1RZUEUiLCJvbktleVVwIiwia2V5VXBIYW5kbGVyIiwiZWxlbWVudCIsIm9uIiwib2ZmS2V5VXAiLCJvZmYiLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJrZXlNaXhpbnMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXlDLEdBQWUsQ0FBZixXQUFlO1NBRTNELE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUZJLFdBQWUsbUJBRUEsWUFBWSxFQUFFLE9BQU87QUFBRyxDQUFDO1NBRXBGLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsR0FBRyxDQUpFLFdBQWUsbUJBSUUsWUFBWSxFQUFFLE9BQU87QUFBRyxDQUFDO1NBRXRGLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQU5BLFdBQWUscUJBTU0sY0FBYyxFQUFFLE9BQU87QUFBRyxDQUFDO1NBRTVGLFVBQVUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsR0FBRyxDQVJGLFdBQWUscUJBUVEsY0FBYyxFQUFFLE9BQU87QUFBRyxDQUFDO0FBRXZHLEdBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUNqQixPQUFPLEVBQVAsT0FBTztJQUNQLFFBQVEsRUFBUixRQUFRO0lBQ1IsU0FBUyxFQUFULFNBQVM7SUFDVCxVQUFVLEVBQVYsVUFBVTtBQUNaLENBQUM7ZUFFYyxTQUFTIn0=