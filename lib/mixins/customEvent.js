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
    var _this = this;
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    customEventTypes = customEventTypes.split(_constants.SPACE); ///
    customEventTypes.forEach(function(customEventType) {
        _this.addCustomEventListener(customEventType, customHandler, element);
    });
}
function offCustomEvent(customEventTypes, customHandler) {
    var _this = this;
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    customEventTypes = customEventTypes.split(_constants.SPACE); ///
    customEventTypes.forEach(function(customEventType) {
        _this.removeCustomEventListener(customEventType, customHandler, element);
    });
}
function callCustomHandlers(customEventType) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var customEventListeners = this.findCustomEventListeners(customEventType);
    customEventListeners.forEach(function(customEventListener) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element; ///
        (_customHandler = customHandler).call.apply(_customHandler, [
            customHandlerElement
        ].concat(_to_consumable_array(remainingArguments)));
    });
}
function callCustomHandlersAsync(customEventType) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var customEventListeners = this.findCustomEventListeners(customEventType), done = remainingArguments.pop(); ///
    (0, _async.forEach)(customEventListeners, function(customEventListener, next) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element, done = next; ///
        (_customHandler = customHandler).call.apply(_customHandler, [
            customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            done
        ]));
    }, done);
}
function addCustomEventListener(customEventType, customHandler, element) {
    var customEventListener = this.createCustomEventListener(customEventType, customHandler, element);
    if (!this.customEventListeners) {
        this.customEventListeners = [];
    }
    this.customEventListeners.push(customEventListener);
    return customEventListener;
}
function removeCustomEventListener(customEventType, customHandler, element) {
    var customEventListener = this.findCustomEventListener(customEventType, customHandler, element), index = this.customEventListeners.indexOf(customEventListener), start = index, deleteCount = 1;
    this.customEventListeners.splice(start, deleteCount);
    if (this.customEventListeners.length === 0) {
        delete this.customEventListeners;
    }
    return customEventListener;
}
function findCustomEventListener(customEventType, customHandler, element) {
    var customEventListener = this.customEventListeners.find(function(customEventListener) {
        if (customEventListener.element === element && customEventListener.customHandler === customHandler && customEventListener.customEventType === customEventType) {
            return true;
        }
    });
    return customEventListener;
}
function findCustomEventListeners(customEventType) {
    var customEventListeners = [];
    if (this.customEventListeners) {
        this.customEventListeners.forEach(function(customEventListener) {
            var found = customEventListener.customEventType === customEventType;
            if (found) {
                customEventListeners.push(customEventListener);
            }
        });
    }
    return customEventListeners;
}
function createCustomEventListener(customEventType, customHandler, element) {
    var customEventListener;
    customEventListener = function() {}; ///
    Object.assign(customEventListener, {
        element: element,
        customHandler: customHandler,
        customEventType: customEventType
    });
    return customEventListener;
}
var customEventMixins = {
    onCustomEvent: onCustomEvent,
    offCustomEvent: offCustomEvent,
    callCustomHandlers: callCustomHandlers,
    callCustomHandlersAsync: callCustomHandlersAsync,
    addCustomEventListener: addCustomEventListener,
    removeCustomEventListener: removeCustomEventListener,
    findCustomEventListener: findCustomEventListener,
    findCustomEventListeners: findCustomEventListeners,
    createCustomEventListener: createCustomEventListener
};
var _default = customEventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNcIjtcblxuZnVuY3Rpb24gb25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGN1c3RvbUV2ZW50VHlwZXMuZm9yRWFjaCgoY3VzdG9tRXZlbnRUeXBlKSA9PiB7XG4gICAgdGhpcy5hZGRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGN1c3RvbUV2ZW50VHlwZXMuZm9yRWFjaCgoY3VzdG9tRXZlbnRUeXBlKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpO1xuXG4gIGN1c3RvbUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQ6IGN1c3RvbUhhbmRsZXJFbGVtZW50IH0gPSBjdXN0b21FdmVudExpc3RlbmVyOyAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKSxcbiAgICAgICAgZG9uZSA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgIC8vL1xuXG4gIGZvckVhY2goY3VzdG9tRXZlbnRMaXN0ZW5lcnMsIChjdXN0b21FdmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b21IYW5kbGVyLCBlbGVtZW50OiBjdXN0b21IYW5kbGVyRWxlbWVudCB9ID0gY3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgY3VzdG9tSGFuZGxlci5jYWxsKGN1c3RvbUhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGRvbmUpO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gYWRkQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIGlmICghdGhpcy5jdXN0b21FdmVudExpc3RlbmVycykge1xuICAgIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMucHVzaChjdXN0b21FdmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmluZGV4T2YoY3VzdG9tRXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmZpbmQoKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGN1c3RvbUV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tSGFuZGxlciA9PT0gY3VzdG9tSGFuZGxlcikgJiYgKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tRXZlbnRUeXBlID09PSBjdXN0b21FdmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tRXZlbnRUeXBlID09PSBjdXN0b21FdmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRMaXN0ZW5lcnMucHVzaChjdXN0b21FdmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGN1c3RvbUV2ZW50TGlzdGVuZXI7XG5cbiAgY3VzdG9tRXZlbnRMaXN0ZW5lciA9ICgpID0+IHt9OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGN1c3RvbUV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGN1c3RvbUhhbmRsZXIsXG4gICAgY3VzdG9tRXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBjdXN0b21FdmVudE1peGlucyA9IHtcbiAgb25DdXN0b21FdmVudCxcbiAgb2ZmQ3VzdG9tRXZlbnQsXG4gIGNhbGxDdXN0b21IYW5kbGVycyxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMsXG4gIGFkZEN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRDdXN0b21FdmVudExpc3RlbmVyLFxuICBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUV2ZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9uQ3VzdG9tRXZlbnQiLCJjdXN0b21FdmVudFR5cGVzIiwiY3VzdG9tSGFuZGxlciIsImVsZW1lbnQiLCJzcGxpdCIsIlNQQUNFIiwiZm9yRWFjaCIsImN1c3RvbUV2ZW50VHlwZSIsImFkZEN1c3RvbUV2ZW50TGlzdGVuZXIiLCJvZmZDdXN0b21FdmVudCIsInJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjdXN0b21FdmVudExpc3RlbmVycyIsImZpbmRDdXN0b21FdmVudExpc3RlbmVycyIsImN1c3RvbUV2ZW50TGlzdGVuZXIiLCJjdXN0b21IYW5kbGVyRWxlbWVudCIsImNhbGwiLCJjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyIsImRvbmUiLCJwb3AiLCJuZXh0IiwiY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lciIsInB1c2giLCJmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJsZW5ndGgiLCJmaW5kIiwiZm91bmQiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXN0b21FdmVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEhBOzs7ZUFBQTs7O3lCQXhIc0I7cUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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