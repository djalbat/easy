"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _eventTypes = require("../eventTypes");
var _resize = require("../mixins/resize");
function on(eventTypes, handler, element) {
    eventTypes = eventTypes.split(_constants.SPACE);
    eventTypes.forEach((function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            var resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                this.addResizeObject();
            }
        }
        var eventListener = this.addEventListener(eventType, handler, element);
        this.domElement.addEventListener(eventType, eventListener);
    }).bind(this));
}
function off(eventTypes, handler, element) {
    eventTypes = eventTypes.split(_constants.SPACE);
    eventTypes.forEach((function(eventType) {
        var eventListener = this.removeEventListener(eventType, handler, element);
        this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            var resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                (0, _resize).removeResizeObject(this);
            }
        }
    }).bind(this));
}
function addEventListener(eventType, handler, param) {
    var element = param === void 0 ? this : param;
    if (this.eventListeners === undefined) {
        this.eventListeners = [];
    }
    var eventListener = createEventListener(eventType, handler, element);
    this.eventListeners.push(eventListener);
    return eventListener;
}
function removeEventListener(eventType, handler, param) {
    var element = param === void 0 ? this : param;
    var eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
    this.eventListeners.splice(start, deleteCount);
    if (this.eventListeners.length === 0) {
        delete this.eventListeners;
    }
    return eventListener;
}
function findEventListener(eventType, handler, element) {
    var eventListener = this.eventListeners.find(function(eventListener1) {
        var found = eventListener1.element === element && eventListener1.handler === handler && eventListener1.eventType === eventType;
        if (found) {
            return true;
        }
    });
    return eventListener;
}
function findEventListeners(eventType) {
    var eventListeners = [];
    if (this.eventListeners !== undefined) {
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
    var eventListener;
    eventListener = function(event) {
        handler.call(element, event, element);
    };
    Object.assign(eventListener, {
        element: element,
        handler: handler,
        eventType: eventType
    });
    return eventListener;
}
var eventMixins = {
    on: on,
    off: off,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    findEventListener: findEventListener,
    findEventListeners: findEventListeners
};
var _default = eventMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUmVzaXplT2JqZWN0IH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCBmb3VuZCA9ICggKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiZcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpICk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpXG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbnMgPSB7XG4gIG9uLFxuICBvZmYsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsVUFBYztJQUNGLFdBQWU7SUFDZCxPQUFrQjtTQUU1QyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPO0lBQ3RDLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUxULFVBQWM7SUFPbEMsVUFBVSxDQUFDLE9BQU8sV0FBRSxTQUFTO1lBQ3ZCLFNBQVMsS0FQaUIsV0FBZTtnQkFRckMsb0JBQW9CLFFBQVEsa0JBQWtCLENBUnhCLFdBQWUscUJBU3JDLDBC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