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
    offScroll: function() {
        return offScroll;
    },
    onScroll: function() {
        return onScroll;
    }
});
var _eventTypes = require("../eventTypes");
function onScroll(scrollHandler, element) {
    this.onEvent(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
}
function offScroll(scrollHandler, element) {
    this.offEvent(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
}
function scrollTo(scrollTop, scrollLeft) {
    this.domElement.scrollTo(scrollTop, scrollLeft);
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
    scrollTo: scrollTo,
    getScrollTop: getScrollTop,
    getScrollLeft: getScrollLeft,
    setScrollTop: setScrollTop,
    setScrollLeft: setScrollLeft
};
var _default = scrollMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTQ1JPTExfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG8oc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG5jb25zdCBzY3JvbGxNaXhpbnMgPSB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGwsXG4gIHNjcm9sbFRvLFxuICBnZXRTY3JvbGxUb3AsXG4gIGdldFNjcm9sbExlZnQsXG4gIHNldFNjcm9sbFRvcCxcbiAgc2V0U2Nyb2xsTGVmdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9mZlNjcm9sbCIsIm9uU2Nyb2xsIiwic2Nyb2xsSGFuZGxlciIsImVsZW1lbnQiLCJvbkV2ZW50IiwiU0NST0xMX0VWRU5UX1RZUEUiLCJvZmZFdmVudCIsInNjcm9sbFRvIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImRvbUVsZW1lbnQiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsTGVmdCIsInNjcm9sbE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNEJBLE9BQTRCO2VBQTVCOztJQXRCZ0JBLFNBQVM7ZUFBVEE7O0lBRkFDLFFBQVE7ZUFBUkE7OzswQkFGa0I7QUFFM0IsU0FBU0EsU0FBU0MsYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNDLDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRXJHLFNBQVNILFVBQVVFLGFBQWEsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0csUUFBUSxDQUFDRCw2QkFBaUIsRUFBRUgsZUFBZUM7QUFBVTtBQUU5RyxTQUFTSSxTQUFTQyxTQUFTLEVBQUVDLFVBQVU7SUFBSSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0gsUUFBUSxDQUFDQyxXQUFXQztBQUFhO0FBRTVGLFNBQVNFO0lBQWlCLE9BQU8sSUFBSSxDQUFDRCxVQUFVLENBQUNGLFNBQVM7QUFBRTtBQUU1RCxTQUFTSTtJQUFrQixPQUFPLElBQUksQ0FBQ0YsVUFBVSxDQUFDRCxVQUFVO0FBQUU7QUFFOUQsU0FBU0ksYUFBYUwsU0FBUztJQUFJLElBQUksQ0FBQ0UsVUFBVSxDQUFDRixTQUFTLEdBQUdBO0FBQVc7QUFFMUUsU0FBU00sY0FBY0wsVUFBVTtJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDRCxVQUFVLEdBQUdBO0FBQVk7QUFFOUUsSUFBTU0sZUFBZTtJQUNuQmQsVUFBQUE7SUFDQUQsV0FBQUE7SUFDQU8sVUFBQUE7SUFDQUksY0FBQUE7SUFDQUMsZUFBQUE7SUFDQUMsY0FBQUE7SUFDQUMsZUFBQUE7QUFDRjtJQUVBLFdBQWVDIn0=