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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTQ1JPTExfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG8oc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTsgfSAvLy9cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuY29uc3Qgc2Nyb2xsTWl4aW5zID0ge1xuICBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsLFxuICBzY3JvbGxUbyxcbiAgZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE1peGlucztcbiJdLCJuYW1lcyI6WyJvZmZTY3JvbGwiLCJvblNjcm9sbCIsInNjcm9sbEhhbmRsZXIiLCJlbGVtZW50Iiwib25FdmVudCIsIlNDUk9MTF9FVkVOVF9UWVBFIiwib2ZmRXZlbnQiLCJzY3JvbGxUbyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJkb21FbGVtZW50IiwiZ2V0U2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsTGVmdCIsInNldFNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJzY3JvbGxNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTRCQTtlQUFBOztRQXRCZ0JBO2VBQUFBOztRQUZBQztlQUFBQTs7OzBCQUZrQjtBQUUzQixTQUFTQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsNkJBQWlCLEVBQUVILGVBQWVDO0FBQVU7QUFFckcsU0FBU0gsVUFBVUUsYUFBYSxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDRyxRQUFRLENBQUNELDZCQUFpQixFQUFFSCxlQUFlQztBQUFVO0FBRTlHLFNBQVNJLFNBQVNDLFNBQVMsRUFBRUMsVUFBVTtJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDSCxRQUFRLENBQUNFLFlBQVlEO0FBQVksRUFBRSxHQUFHO0FBRWpHLFNBQVNHO0lBQWlCLE9BQU8sSUFBSSxDQUFDRCxVQUFVLENBQUNGLFNBQVM7QUFBRTtBQUU1RCxTQUFTSTtJQUFrQixPQUFPLElBQUksQ0FBQ0YsVUFBVSxDQUFDRCxVQUFVO0FBQUU7QUFFOUQsU0FBU0ksYUFBYUwsU0FBUztJQUFJLElBQUksQ0FBQ0UsVUFBVSxDQUFDRixTQUFTLEdBQUdBO0FBQVc7QUFFMUUsU0FBU00sY0FBY0wsVUFBVTtJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDRCxVQUFVLEdBQUdBO0FBQVk7QUFFOUUsSUFBTU0sZUFBZTtJQUNuQmQsVUFBQUE7SUFDQUQsV0FBQUE7SUFDQU8sVUFBQUE7SUFDQUksY0FBQUE7SUFDQUMsZUFBQUE7SUFDQUMsY0FBQUE7SUFDQUMsZUFBQUE7QUFDRjtJQUVBLFdBQWVDIn0=