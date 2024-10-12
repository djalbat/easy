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
var _eventTypes = require("../eventTypes");
function onEvent(eventTypes, handler) {
    var _this = this;
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    eventTypes = eventTypes.split(_constants.SPACE); ///
    eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                _this.resizeObserver = new ResizeObserver(function(entries) {
                    var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
                    resizeEventListeners.forEach(function(resizeEventListener) {
                        var event = null;
                        resizeEventListener(event);
                    });
                });
                _this.resizeObserver.observe(_this.domElement);
            }
            _this.addEventListener(eventType, handler, element);
        } else {
            var eventListener = _this.addEventListener(eventType, handler, element);
            _this.domElement.addEventListener(eventType, eventListener);
        }
    });
}
function offEvent(eventTypes, handler) {
    var _this = this;
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    eventTypes = eventTypes.split(_constants.SPACE); ///
    eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            _this.removeEventListener(eventType, handler, element);
            var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                _this.resizeObserver.unobserve(_this.domElement);
                delete _this.resizeObserver;
            }
        } else {
            var eventListener = _this.removeEventListener(eventType, handler, element);
            _this.domElement.removeEventListener(eventType, eventListener);
        }
    });
}
function addEventListener(eventType, handler, element) {
    var eventListener = this.createEventListener(eventType, handler, element);
    if (!this.eventListeners) {
        this.eventListeners = [];
    }
    this.eventListeners.push(eventListener);
    return eventListener;
}
function removeEventListener(eventType, handler, element) {
    var eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
    this.eventListeners.splice(start, deleteCount);
    if (this.eventListeners.length === 0) {
        delete this.eventListeners;
    }
    return eventListener;
}
function findEventListener(eventType, handler, element) {
    var eventListener = this.eventListeners.find(function(eventListener) {
        if (eventListener.element === element && eventListener.handler === handler && eventListener.eventType === eventType) {
            return true;
        }
    });
    return eventListener;
}
function findEventListeners(eventType) {
    var eventListeners = [];
    if (this.eventListeners) {
        this.eventListeners.forEach(function(eventListener) {
            var found = eventListener.eventType === eventType;
            if (found) {
                eventListeners.push(eventListener);
            }
        });
    }
    return eventListeners;
}
function createEventListener(eventType, handler, element) {
    var _this = this;
    var eventListener;
    var handlerElement = element; ///
    eventListener = function(event) {
        var _$element = _this; ///
        handler.call(handlerElement, event, _$element);
    };
    Object.assign(eventListener, {
        element: element,
        handler: handler,
        eventType: eventType
    });
    return eventListener;
}
var eventMixins = {
    onEvent: onEvent,
    offEvent: offEvent,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    findEventListener: findEventListener,
    findEventListeners: findEventListeners,
    createEventListener: createEventListener
};
var _default = eventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkV2ZW50KGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKTtcblxuICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmRvbUVsZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmRXZlbnQoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMucmVzaXplT2JzZXJ2ZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5jcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGlmICgoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJiAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb25FdmVudCxcbiAgb2ZmRXZlbnQsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9uRXZlbnQiLCJldmVudFR5cGVzIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzcGxpdCIsIlNQQUNFIiwiZm9yRWFjaCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwicmVzaXplRXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCIsImxlbmd0aCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwicmVzaXplRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib2JzZXJ2ZSIsImRvbUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lciIsIm9mZkV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVub2JzZXJ2ZSIsImNyZWF0ZUV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVycyIsInB1c2giLCJmaW5kRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmaW5kIiwiZm91bmQiLCJoYW5kbGVyRWxlbWVudCIsImNhbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOElBOzs7ZUFBQTs7O3lCQTVJc0I7MEJBQ1k7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