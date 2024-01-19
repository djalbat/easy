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
    var _this = this;
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var customEventListeners = this.findCustomEventListeners(customEventType);
    customEventListeners.forEach(function(customEventListener) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element, element = _this; ///
        (_customHandler = customHandler).call.apply(_customHandler, [
            customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            element
        ]));
    });
}
function callCustomHandlersAsync(customEventType) {
    var _this = this;
    for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        remainingArguments[_key - 1] = arguments[_key];
    }
    var customEventListeners = this.findCustomEventListeners(customEventType), done = remainingArguments.pop(); ///
    (0, _async.forEach)(customEventListeners, function(customEventListener, next) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element, element = _this, done = next; ///
        (_customHandler = customHandler).call.apply(_customHandler, [
            customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
            element,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNcIjtcblxuZnVuY3Rpb24gb25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGN1c3RvbUV2ZW50VHlwZXMuZm9yRWFjaCgoY3VzdG9tRXZlbnRUeXBlKSA9PiB7XG4gICAgdGhpcy5hZGRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGN1c3RvbUV2ZW50VHlwZXMuZm9yRWFjaCgoY3VzdG9tRXZlbnRUeXBlKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpO1xuXG4gIGN1c3RvbUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQ6IGN1c3RvbUhhbmRsZXJFbGVtZW50IH0gPSBjdXN0b21FdmVudExpc3RlbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKSxcbiAgICAgICAgZG9uZSA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgIC8vL1xuXG4gIGZvckVhY2goY3VzdG9tRXZlbnRMaXN0ZW5lcnMsIChjdXN0b21FdmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b21IYW5kbGVyLCBlbGVtZW50OiBjdXN0b21IYW5kbGVyRWxlbWVudCB9ID0gY3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50LCBkb25lKTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcblxuICBpZiAoIXRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLnB1c2goY3VzdG9tRXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5pbmRleE9mKGN1c3RvbUV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVyID0gdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5maW5kKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChjdXN0b21FdmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUhhbmRsZXIgPT09IGN1c3RvbUhhbmRsZXIpICYmIChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUV2ZW50VHlwZSA9PT0gY3VzdG9tRXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5mb3JFYWNoKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUV2ZW50VHlwZSA9PT0gY3VzdG9tRXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50TGlzdGVuZXJzLnB1c2goY3VzdG9tRXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBjdXN0b21FdmVudExpc3RlbmVyO1xuXG4gIGN1c3RvbUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7fTsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjdXN0b21FdmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBjdXN0b21IYW5kbGVyLFxuICAgIGN1c3RvbUV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgY3VzdG9tRXZlbnRNaXhpbnMgPSB7XG4gIG9uQ3VzdG9tRXZlbnQsXG4gIG9mZkN1c3RvbUV2ZW50LFxuICBjYWxsQ3VzdG9tSGFuZGxlcnMsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jLFxuICBhZGRDdXN0b21FdmVudExpc3RlbmVyLFxuICByZW1vdmVDdXN0b21FdmVudExpc3RlbmVyLFxuICBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzLFxuICBjcmVhdGVDdXN0b21FdmVudExpc3RlbmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21FdmVudE1peGlucztcbiJdLCJuYW1lcyI6WyJvbkN1c3RvbUV2ZW50IiwiY3VzdG9tRXZlbnRUeXBlcyIsImN1c3RvbUhhbmRsZXIiLCJlbGVtZW50Iiwic3BsaXQiLCJTUEFDRSIsImZvckVhY2giLCJjdXN0b21FdmVudFR5cGUiLCJhZGRDdXN0b21FdmVudExpc3RlbmVyIiwib2ZmQ3VzdG9tRXZlbnQiLCJyZW1vdmVDdXN0b21FdmVudExpc3RlbmVyIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY3VzdG9tRXZlbnRMaXN0ZW5lcnMiLCJmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMiLCJjdXN0b21FdmVudExpc3RlbmVyIiwiY3VzdG9tSGFuZGxlckVsZW1lbnQiLCJjYWxsIiwiY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMiLCJkb25lIiwicG9wIiwibmV4dCIsImNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibGVuZ3RoIiwiZmluZCIsImZvdW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VzdG9tRXZlbnRNaXhpbnMiXSwi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