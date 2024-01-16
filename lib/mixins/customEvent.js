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
        var element = eventListener.element;
        var handler = eventListener.handler;
        var customHandler = handler, customHandlerElement = element; ///
        element = _this; ///
        (_customHandler = customHandler).call.apply(_customHandler, [
            customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            element
        ]));
    });
}
var customEventMixins = {
    onCustomEvent: onCustomEvent,
    offCustomEvent: offCustomEvent,
    callCustomHandlers: callCustomHandlers
};
var _default = customEventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBvbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGN1c3RvbUV2ZW50VHlwZXMgPSBjdXN0b21FdmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBjdXN0b21FdmVudFR5cGVzLmZvckVhY2goKGN1c3RvbUV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGN1c3RvbUV2ZW50VHlwZTsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBjdXN0b21FdmVudFR5cGU7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKTtcblxuICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgbGV0IHsgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcjtcblxuICAgIGNvbnN0IHsgaGFuZGxlciB9ID0gZXZlbnRMaXN0ZW5lcjtcblxuICAgIGNvbnN0IGN1c3RvbUhhbmRsZXIgPSBoYW5kbGVyLCAgLy8vXG4gICAgICAgICAgY3VzdG9tSGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmNvbnN0IGN1c3RvbUV2ZW50TWl4aW5zID0ge1xuICBvbkN1c3RvbUV2ZW50LFxuICBvZmZDdXN0b21FdmVudCxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21FdmVudE1peGlucztcbiJdLCJuYW1lcyI6WyJvbkN1c3RvbUV2ZW50IiwiY3VzdG9tRXZlbnRUeXBlcyIsImhhbmRsZXIiLCJlbGVtZW50Iiwic3BsaXQiLCJTUEFDRSIsImZvckVhY2giLCJjdXN0b21FdmVudFR5cGUiLCJldmVudFR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmQ3VzdG9tRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwiY3VzdG9tSGFuZGxlciIsImN1c3RvbUhhbmRsZXJFbGVtZW50IiwiY2FsbCIsImN1c3RvbUV2ZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErQ0E7OztlQUFBOzs7eUJBN0NzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsU0FBU0EsY0FBY0MsZ0JBQWdCLEVBQUVDLE9BQU87UUFBRUMsVUFBQUEsaUVBQVUsSUFBSTs7SUFDOURGLG1CQUFtQkEsaUJBQWlCRyxLQUFLLENBQUNDLGdCQUFLO0lBRS9DSixpQkFBaUJLLE9BQU8sQ0FBQyxTQUFDQztRQUN4QixJQUFNQyxZQUFZRCxpQkFBa0IsR0FBRztRQUV2QyxNQUFLRSxnQkFBZ0IsQ0FBQ0QsV0FBV04sU0FBU0M7SUFDNUM7QUFDRjtBQUVBLFNBQVNPLGVBQWVULGdCQUFnQixFQUFFQyxPQUFPO1FBQUVDLFVBQUFBLGlFQUFVLElBQUk7O0lBQy9ERixtQkFBbUJBLGlCQUFpQkcsS0FBSyxDQUFDQyxnQkFBSztJQUUvQ0osaUJBQWlCSyxPQUFPLENBQUMsU0FBQ0M7UUFDeEIsSUFBTUMsWUFBWUQsaUJBQWtCLEdBQUc7UUFFdkMsTUFBS0ksbUJBQW1CLENBQUNILFdBQVdOLFNBQVNDO0lBQy9DO0FBQ0Y7QUFFQSxTQUFTUyxtQkFBbUJMLGVBQWU7SUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR00scUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7O0lBQ2hFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDUjtJQUUvQ08sZUFBZVIsT0FBTyxDQUFDLFNBQUNVO1lBVXRCQztRQVRBLElBQUksQUFBRWQsVUFBWWEsY0FBWmI7UUFFTixJQUFNLEFBQUVELFVBQVljLGNBQVpkO1FBRVIsSUFBTWUsZ0JBQWdCZixTQUNoQmdCLHVCQUF1QmYsU0FBUyxHQUFHO1FBRXpDQSxpQkFBZ0IsR0FBRztRQUVuQmMsQ0FBQUEsaUJBQUFBLGVBQWNFLElBQUksQ0FBbEJGLE1BQUFBLGdCQUFBQTtZQUFtQkM7U0FBcUQsQ0FBeEVELE9BQXlDLHFCQUFHSixxQkFBNUNJO1lBQWdFZDtTQUFRO0lBQzFFO0FBQ0Y7QUFFQSxJQUFNaUIsb0JBQW9CO0lBQ3hCcEIsZUFBQUE7SUFDQVUsZ0JBQUFBO0lBQ0FFLG9CQUFBQTtBQUNGO0lBRUEsV0FBZVEifQ==