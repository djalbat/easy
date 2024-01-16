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
var _constants = require("../constants");
var _async = require("../utilities/async");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function onCustomEvent(customEventTypes, handler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    customEventTypes = customEventTypes.split(_constants.SPACE);
    customEventTypes.forEach(function(customEventType) {
        var eventType = customEventType; ///
        _this.addEventListener(eventType, handler, element);
    });
}
function offCustomEvent(customEventTypes, handler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    customEventTypes = customEventTypes.split(_constants.SPACE);
    customEventTypes.forEach(function(customEventType) {
        var eventType = customEventType; ///
        _this.removeEventListener(eventType, handler, element);
    });
}
function callCustomHandlers(customEventType) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var _this = this;
    var eventListeners = this.findEventListeners(customEventType);
    eventListeners.forEach(function(eventListener) {
        var _customHandler;
        var customHandler = eventListener.handler, customHandlerElement = eventListener.element, element = _this; ///
        (_customHandler = customHandler).call.apply(_customHandler, [
            customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            element
        ]));
    });
}
function callCustomHandlersAsync(customEventType) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var _this = this;
    var eventListeners = this.findEventListeners(customEventType), done = remainingArguments.pop(); ///
    (0, _async.forEach)(eventListeners, function(eventListener, next) {
        var _customHandler;
        var customHandler = eventListener.handler, customHandlerElement = eventListener.element, element = _this, done = next; ///
        (_customHandler = customHandler).call.apply(_customHandler, [
            customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            element,
            done
        ]));
    }, done);
}
var customEventMixins = {
    onCustomEvent: onCustomEvent,
    offCustomEvent: offCustomEvent,
    callCustomHandlers: callCustomHandlers,
    callCustomHandlersAsync: callCustomHandlersAsync
};
var _default = customEventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNcIjtcblxuZnVuY3Rpb24gb25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBjdXN0b21FdmVudFR5cGU7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY3VzdG9tRXZlbnRUeXBlcyA9IGN1c3RvbUV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpO1xuXG4gIGN1c3RvbUV2ZW50VHlwZXMuZm9yRWFjaCgoY3VzdG9tRXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gY3VzdG9tRXZlbnRUeXBlOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSk7XG5cbiAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlcjogY3VzdG9tSGFuZGxlciwgZWxlbWVudDogY3VzdG9tSGFuZGxlckVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgY3VzdG9tSGFuZGxlci5jYWxsKGN1c3RvbUhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpLFxuICAgICAgICBkb25lID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpOyAgLy8vXG5cbiAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZXI6IGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQ6IGN1c3RvbUhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgY3VzdG9tSGFuZGxlci5jYWxsKGN1c3RvbUhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQsIGRvbmUpO1xuICB9LCBkb25lKTtcbn1cblxuY29uc3QgY3VzdG9tRXZlbnRNaXhpbnMgPSB7XG4gIG9uQ3VzdG9tRXZlbnQsXG4gIG9mZkN1c3RvbUV2ZW50LFxuICBjYWxsQ3VzdG9tSGFuZGxlcnMsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21FdmVudE1peGlucztcbiJdLCJuYW1lcyI6WyJvbkN1c3RvbUV2ZW50IiwiY3VzdG9tRXZlbnRUeXBlcyIsImhhbmRsZXIiLCJlbGVtZW50Iiwic3BsaXQiLCJTUEFDRSIsImZvckVhY2giLCJjdXN0b21FdmVudFR5cGUiLCJldmVudFR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmQ3VzdG9tRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwiY3VzdG9tSGFuZGxlciIsImN1c3RvbUhhbmRsZXJFbGVtZW50IiwiY2FsbCIsImNhbGxDdXN0b21IYW5kbGVyc0FzeW5jIiwiZG9uZSIsInBvcCIsIm5leHQiLCJjdXN0b21FdmVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0RBOzs7ZUFBQTs7O3lCQXREc0I7cUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLFNBQVNBLGNBQWNDLGdCQUFnQixFQUFFQyxPQUFPO1FBQUVDLFVBQUFBLGlFQUFVLElBQUk7O0lBQzlERixtQkFBbUJBLGlCQUFpQkcsS0FBSyxDQUFDQyxnQkFBSztJQUUvQ0osaUJBQWlCSyxPQUFPLENBQUMsU0FBQ0M7UUFDeEIsSUFBTUMsWUFBWUQsaUJBQWtCLEdBQUc7UUFFdkMsTUFBS0UsZ0JBQWdCLENBQUNELFdBQVdOLFNBQVNDO0lBQzVDO0FBQ0Y7QUFFQSxTQUFTTyxlQUFlVCxnQkFBZ0IsRUFBRUMsT0FBTztRQUFFQyxVQUFBQSxpRUFBVSxJQUFJOztJQUMvREYsbUJBQW1CQSxpQkFBaUJHLEtBQUssQ0FBQ0MsZ0JBQUs7SUFFL0NKLGlCQUFpQkssT0FBTyxDQUFDLFNBQUNDO1FBQ3hCLElBQU1DLFlBQVlELGlCQUFrQixHQUFHO1FBRXZDLE1BQUtJLG1CQUFtQixDQUFDSCxXQUFXTixTQUFTQztJQUMvQztBQUNGO0FBRUEsU0FBU1MsbUJBQW1CTCxlQUFlO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdNLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7OztJQUNoRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1I7SUFFL0NPLGVBQWVSLE9BQU8sQ0FBQyxTQUFDVTtZQUl0QkM7UUFIQSxJQUFRZixBQUFTZSxnQkFBaURELGNBQTFEZCxTQUF3QkMsQUFBU2UsdUJBQXlCRixjQUFsQ2IsU0FDMUJBLGlCQUFnQixHQUFHO1FBRXpCYyxDQUFBQSxpQkFBQUEsZUFBY0UsSUFBSSxDQUFsQkYsTUFBQUEsZ0JBQUFBO1lBQW1CQztTQUFxRCxDQUF4RUQsT0FBeUMscUJBQUdKLHFCQUE1Q0k7WUFBZ0VkO1NBQVE7SUFDMUU7QUFDRjtBQUVBLFNBQVNpQix3QkFBd0JiLGVBQWU7SUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR00scUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7O0lBQ3JFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDUixrQkFDekNjLE9BQU9SLG1CQUFtQlMsR0FBRyxJQUFLLEdBQUc7SUFFM0NoQixJQUFBQSxjQUFPLEVBQUNRLGdCQUFnQixTQUFDRSxlQUFlTztZQUt0Q047UUFKQSxJQUFRZixBQUFTZSxnQkFBaURELGNBQTFEZCxTQUF3QkMsQUFBU2UsdUJBQXlCRixjQUFsQ2IsU0FDMUJBLGlCQUNBa0IsT0FBT0UsTUFBTyxHQUFHO1FBRXZCTixDQUFBQSxpQkFBQUEsZUFBY0UsSUFBSSxDQUFsQkYsTUFBQUEsZ0JBQUFBO1lBQW1CQztTQUEyRCxDQUE5RUQsT0FBeUMscUJBQUdKLHFCQUE1Q0k7WUFBZ0VkO1lBQVNrQjtTQUFLO0lBQ2hGLEdBQUdBO0FBQ0w7QUFFQSxJQUFNRyxvQkFBb0I7SUFDeEJ4QixlQUFBQTtJQUNBVSxnQkFBQUE7SUFDQUUsb0JBQUFBO0lBQ0FRLHlCQUFBQTtBQUNGO0lBRUEsV0FBZUkifQ==