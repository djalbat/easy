"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _eventTypes = require("../eventTypes");
function onScroll(scrollHandler, element) {
    this.on(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
}
function offScroll(scrollHandler, element) {
    this.off(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
}
function getScrollTop() {
    return this.domElement.scrollTop;
}
function getScrollLeft() {
    return this.domElement.scrollLeft;
}
function setScrollTop(scrollTop) {
    this.domElement.scrollTop = scrollTop;
}
function setScrollLeft(scrollLeft) {
    this.domElement.scrollLeft = scrollLeft;
}
var scrollMixins = {
    onScroll: onScroll,
    offScroll: offScroll,
    getScrollTop: getScrollTop,
    getScrollLeft: getScrollLeft,
    setScrollTop: setScrollTop,
    setScrollLeft: setScrollLeft
};
var _default = scrollMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc2Nyb2xsLmpzIl0sIm5hbWVzIjpbIlNDUk9MTF9FVkVOVF9UWVBFIiwib25TY3JvbGwiLCJzY3JvbGxIYW5kbGVyIiwiZWxlbWVudCIsIm9uIiwib2ZmU2Nyb2xsIiwib2ZmIiwiZ2V0U2Nyb2xsVG9wIiwiZG9tRWxlbWVudCIsInNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsTGVmdCIsInNjcm9sbE1peGlucyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFc0IsR0FBZSxDQUFmLFdBQWU7U0FFeEMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBRmpCLFdBQWUsb0JBRXNCLGFBQWEsRUFBRSxPQUFPO0FBQUcsQ0FBQztTQUV4RixTQUFTLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQUMsSUFBSSxDQUFDLEdBQUcsQ0FKbkIsV0FBZSxvQkFJd0IsYUFBYSxFQUFFLE9BQU87QUFBRyxDQUFDO1NBRTFGLFlBQVksR0FBRyxDQUFDO0lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztBQUFFLENBQUM7U0FFcEQsYUFBYSxHQUFHLENBQUM7SUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO0FBQUUsQ0FBQztTQUV0RCxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTO0FBQUUsQ0FBQztTQUVsRSxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVO0FBQUUsQ0FBQztBQUUvRSxHQUFLLENBQUMsWUFBWSxHQUFHLENBQUM7SUFDcEIsUUFBUSxFQUFSLFFBQVE7SUFDUixTQUFTLEVBQVQsU0FBUztJQUNULFlBQVksRUFBWixZQUFZO0lBQ1osYUFBYSxFQUFiLGFBQWE7SUFDYixZQUFZLEVBQVosWUFBWTtJQUNaLGFBQWEsRUFBYixhQUFhO0FBQ2YsQ0FBQztlQUVjLFlBQVkifQ==