"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _resize = require("../mixins/resize");
function on(eventTypes, handler, element) {
    eventTypes = eventTypes.split(" "); ///
    eventTypes.forEach((function(eventType) {
        if (eventType === _constants.RESIZE) {
            var resizeEventListeners = this.findEventListeners(_constants.RESIZE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                this.addResizeObject();
            }
        }
        var eventListener = this.addEventListener(eventType, handler, element);
        this.domElement.addEventListener(eventType, eventListener);
    }).bind(this));
}
function off(eventTypes, handler, element) {
    eventTypes = eventTypes.split(" "); ///
    eventTypes.forEach((function(eventType) {
        var eventListener = this.removeEventListener(eventType, handler, element);
        this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _constants.RESIZE) {
            var resizeEventListeners = this.findEventListeners(_constants.RESIZE), resizeEventListenersLength = resizeEventListeners.length;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJFU0laRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZVJlc2l6ZU9iamVjdCB9IGZyb20gXCIuLi9taXhpbnMvcmVzaXplXCI7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoXCIgXCIpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkZFJlc2l6ZU9iamVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChcIiBcIik7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcblxuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICBjb25zdCBldmVudExpc3RlbmVyID0gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5ldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVycy5maW5kKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSAoIChldmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmXG4gICAgICAgICAgICAgICAgICAgIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmXG4gICAgICAgICAgICAgICAgICAgIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKSApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KVxuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW5zID0ge1xuICBvbixcbiAgb2ZmLFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXJzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudE1peGlucztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVXLFVBQWM7SUFDRixPQUFrQjtTQUU1QyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPO0lBQ3RDLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFDLENBQUcsR0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFdkMsVUFBVSxDQUFDLE9BQU8sV0FBRSxTQUFTO1lBQ3ZCLFNBQVMsS0FQTSxVQUFjO2dCQVF6QixvQkFBb0IsUUFBUSxrQkFBa0IsQ0FSbkMsVUFBYyxVQVN6QiwwQkFBMEIsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNO2dCQUUxRCwwQkFBMEIsS0FBSyxDQUFDO3FCQUM3QixlQUFlOzs7WUFJbEIs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