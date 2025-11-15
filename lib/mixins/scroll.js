"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get offScroll () {
        return offScroll;
    },
    get onScroll () {
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
    this.domElement.scrollTo(scrollLeft, scrollTop);
} ///
function getScrollTop() {
    return this.domElement.scrollTop;
}
function getScrollLeft() {
    return this.domElement.scrollLeft;
}
function getScrollWidth() {
    return this.domElement.scrollWidth;
}
function getScrollHeight() {
    return this.domElement.scrollHeight;
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
    getScrollWidth: getScrollWidth,
    getScrollHeight: getScrollHeight,
    setScrollTop: setScrollTop,
    setScrollLeft: setScrollLeft
};
var _default = scrollMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTQ1JPTExfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG8oc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTsgfSAvLy9cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsV2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsV2lkdGg7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsSGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbEhlaWdodDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG5jb25zdCBzY3JvbGxNaXhpbnMgPSB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGwsXG4gIHNjcm9sbFRvLFxuICBnZXRTY3JvbGxUb3AsXG4gIGdldFNjcm9sbExlZnQsXG4gIGdldFNjcm9sbFdpZHRoLFxuICBnZXRTY3JvbGxIZWlnaHQsXG4gIHNldFNjcm9sbFRvcCxcbiAgc2V0U2Nyb2xsTGVmdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9mZlNjcm9sbCIsIm9uU2Nyb2xsIiwic2Nyb2xsSGFuZGxlciIsImVsZW1lbnQiLCJvbkV2ZW50IiwiU0NST0xMX0VWRU5UX1RZUEUiLCJvZmZFdmVudCIsInNjcm9sbFRvIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImRvbUVsZW1lbnQiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsV2lkdGgiLCJzY3JvbGxXaWR0aCIsImdldFNjcm9sbEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldFNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJzY3JvbGxNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWtDQTtlQUFBOztRQTVCZ0JBO2VBQUFBOztRQUZBQztlQUFBQTs7OzBCQUZrQjtBQUUzQixTQUFTQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFckcsU0FBU0gsVUFBVUUsYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDRyxRQUFRLENBQUNELDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRTlHLFNBQVNJLFNBQVNDLFNBQVMsRUFBRUMsVUFBVTtJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDSCxRQUFRLENBQUNFLFlBQVlEO0FBQVksRUFBRSxHQUFHO0FBRWpHLFNBQVNHO0lBQWlCLE9BQU8sSUFBSSxDQUFDRCxVQUFVLENBQUNGLFNBQVM7QUFBRTtBQUU1RCxTQUFTSTtJQUFrQixPQUFPLElBQUksQ0FBQ0YsVUFBVSxDQUFDRCxVQUFVO0FBQUU7QUFFOUQsU0FBU0k7SUFBbUIsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0ksV0FBVztBQUFFO0FBRWhFLFNBQVNDO0lBQW9CLE9BQU8sSUFBSSxDQUFDTCxVQUFVLENBQUNNLFlBQVk7QUFBRTtBQUVsRSxTQUFTQyxhQUFhVCxTQUFTO0lBQUksSUFBSSxDQUFDRSxVQUFVLENBQUNGLFNBQVMsR0FBR0E7QUFBVztBQUUxRSxTQUFTVSxjQUFjVCxVQUFVO0lBQUksSUFBSSxDQUFDQyxVQUFVLENBQUNELFVBQVUsR0FBR0E7QUFBWTtBQUU5RSxJQUFNVSxlQUFlO0lBQ25CbEIsVUFBQUE7SUFDQUQsV0FBQUE7SUFDQU8sVUFBQUE7SUFDQUksY0FBQUE7SUFDQUMsZUFBQUE7SUFDQUMsZ0JBQUFBO0lBQ0FFLGlCQUFBQTtJQUNBRSxjQUFBQTtJQUNBQyxlQUFBQTtBQUNGO0lBRUEsV0FBZUMifQ==