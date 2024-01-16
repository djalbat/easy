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
function onCustomEvent(customEventTypes, customHandler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    customEventTypes = customEventTypes.split(_constants.SPACE);
    customEventTypes.forEach(function(customEventType) {
        var eventType = customEventType, handler = customHandler; ///
        _this.addEventListener(eventType, handler, element);
    });
}
function offCustomEvent(customEventTypes, customHandler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    customEventTypes = customEventTypes.split(_constants.SPACE);
    customEventTypes.forEach(function(customEventType) {
        var eventType = customEventType, handler = customHandler; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNcIjtcblxuZnVuY3Rpb24gb25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBjdXN0b21FdmVudFR5cGUsICAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gY3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBjdXN0b21FdmVudFR5cGUsICAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gY3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpO1xuXG4gIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZXI6IGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQ6IGN1c3RvbUhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKSxcbiAgICAgICAgZG9uZSA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgIC8vL1xuXG4gIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVyOiBjdXN0b21IYW5kbGVyLCBlbGVtZW50OiBjdXN0b21IYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50LCBkb25lKTtcbiAgfSwgZG9uZSk7XG59XG5cbmNvbnN0IGN1c3RvbUV2ZW50TWl4aW5zID0ge1xuICBvbkN1c3RvbUV2ZW50LFxuICBvZmZDdXN0b21FdmVudCxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzLFxuICBjYWxsQ3VzdG9tSGFuZGxlcnNBc3luY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tRXZlbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsib25DdXN0b21FdmVudCIsImN1c3RvbUV2ZW50VHlwZXMiLCJjdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsInNwbGl0IiwiU1BBQ0UiLCJmb3JFYWNoIiwiY3VzdG9tRXZlbnRUeXBlIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZDdXN0b21FdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJjdXN0b21IYW5kbGVyRWxlbWVudCIsImNhbGwiLCJjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyIsImRvbmUiLCJwb3AiLCJuZXh0IiwiY3VzdG9tRXZlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBEQTs7O2VBQUE7Ozt5QkF4RHNCO3FCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixTQUFTQSxjQUFjQyxnQkFBZ0IsRUFBRUMsYUFBYTtRQUFFQyxVQUFBQSxpRUFBVSxJQUFJOztJQUNwRUYsbUJBQW1CQSxpQkFBaUJHLEtBQUssQ0FBQ0MsZ0JBQUs7SUFFL0NKLGlCQUFpQkssT0FBTyxDQUFDLFNBQUNDO1FBQ3hCLElBQU1DLFlBQVlELGlCQUNaRSxVQUFVUCxlQUFnQixHQUFHO1FBRW5DLE1BQUtRLGdCQUFnQixDQUFDRixXQUFXQyxTQUFTTjtJQUM1QztBQUNGO0FBRUEsU0FBU1EsZUFBZVYsZ0JBQWdCLEVBQUVDLGFBQWE7UUFBRUMsVUFBQUEsaUVBQVUsSUFBSTs7SUFDckVGLG1CQUFtQkEsaUJBQWlCRyxLQUFLLENBQUNDLGdCQUFLO0lBRS9DSixpQkFBaUJLLE9BQU8sQ0FBQyxTQUFDQztRQUN4QixJQUFNQyxZQUFZRCxpQkFDWkUsVUFBVVAsZUFBZ0IsR0FBRztRQUVuQyxNQUFLVSxtQkFBbUIsQ0FBQ0osV0FBV0MsU0FBU047SUFDL0M7QUFDRjtBQUVBLFNBQVNVLG1CQUFtQk4sZUFBZTtJQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHTyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOzs7SUFDaEUsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNUO0lBRS9DUSxlQUFlVCxPQUFPLENBQUMsU0FBQ1c7WUFJdEJmO1FBSEEsSUFBUU8sQUFBU1AsZ0JBQWlEZSxjQUExRFIsU0FBd0JOLEFBQVNlLHVCQUF5QkQsY0FBbENkLFNBQzFCQSxpQkFBZ0IsR0FBRztRQUV6QkQsQ0FBQUEsaUJBQUFBLGVBQWNpQixJQUFJLENBQWxCakIsTUFBQUEsZ0JBQUFBO1lBQW1CZ0I7U0FBcUQsQ0FBeEVoQixPQUF5QyxxQkFBR1kscUJBQTVDWjtZQUFnRUM7U0FBUTtJQUMxRTtBQUNGO0FBRUEsU0FBU2lCLHdCQUF3QmIsZUFBZTtJQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHTyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOzs7SUFDckUsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNULGtCQUN6Q2MsT0FBT1AsbUJBQW1CUSxHQUFHLElBQUssR0FBRztJQUUzQ2hCLElBQUFBLGNBQU8sRUFBQ1MsZ0JBQWdCLFNBQUNFLGVBQWVNO1lBS3RDckI7UUFKQSxJQUFRTyxBQUFTUCxnQkFBaURlLGNBQTFEUixTQUF3Qk4sQUFBU2UsdUJBQXlCRCxjQUFsQ2QsU0FDMUJBLGlCQUNBa0IsT0FBT0UsTUFBTyxHQUFHO1FBRXZCckIsQ0FBQUEsaUJBQUFBLGVBQWNpQixJQUFJLENBQWxCakIsTUFBQUEsZ0JBQUFBO1lBQW1CZ0I7U0FBMkQsQ0FBOUVoQixPQUF5QyxxQkFBR1kscUJBQTVDWjtZQUFnRUM7WUFBU2tCO1NBQUs7SUFDaEYsR0FBR0E7QUFDTDtBQUVBLElBQU1HLG9CQUFvQjtJQUN4QnhCLGVBQUFBO0lBQ0FXLGdCQUFBQTtJQUNBRSxvQkFBQUE7SUFDQU8seUJBQUFBO0FBQ0Y7SUFFQSxXQUFlSSJ9