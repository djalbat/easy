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
var _resize = require("../mixins/resize");
function on(eventTypes, handler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    eventTypes = eventTypes.split(_constants.SPACE);
    eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                _this.addResizeObject();
            }
        }
        var eventListener = _this.addEventListener(eventType, handler, element);
        _this.domElement.addEventListener(eventType, eventListener);
    });
}
function off(eventTypes, handler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    eventTypes = eventTypes.split(_constants.SPACE);
    eventTypes.forEach(function(eventType) {
        var eventListener = _this.removeEventListener(eventType, handler, element);
        _this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                (0, _resize.removeResizeObject)(_this);
            }
        }
    });
}
function addEventListener(eventType, handler, element) {
    if (this.eventListeners === undefined) {
        this.eventListeners = [];
    }
    var eventListener = this.createEventListener(eventType, handler, element);
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
    on: on,
    off: off,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    createEventListener: createEventListener,
    findEventListener: findEventListener,
    findEventListeners: findEventListeners
};
var _default = eventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUmVzaXplT2JqZWN0IH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpO1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkZFJlc2l6ZU9iamVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpO1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcblxuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlUmVzaXplT2JqZWN0KHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5jcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGlmICgoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJiAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW5zID0ge1xuICBvbixcbiAgb2ZmLFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyLFxuICBjcmVhdGVFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXJzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudE1peGlucztcbiJdLCJuYW1lcyI6WyJvbiIsImV2ZW50VHlwZXMiLCJoYW5kbGVyIiwiZWxlbWVudCIsInNwbGl0IiwiU1BBQ0UiLCJmb3JFYWNoIiwiZXZlbnRUeXBlIiwiUkVTSVpFX0VWRU5UX1RZUEUiLCJyZXNpemVFdmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsInJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoIiwibGVuZ3RoIiwiYWRkUmVzaXplT2JqZWN0IiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21FbGVtZW50Iiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZVJlc2l6ZU9iamVjdCIsImV2ZW50TGlzdGVuZXJzIiwidW5kZWZpbmVkIiwiY3JlYXRlRXZlbnRMaXN0ZW5lciIsInB1c2giLCJmaW5kRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmaW5kIiwiZm91bmQiLCJoYW5kbGVyRWxlbWVudCIsImV2ZW50IiwiY2FsbCIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErSEE7OztlQUFBOzs7eUJBN0hzQjswQkFDWTtzQkFDQztBQUVuQyxTQUFTQSxHQUFHQyxVQUFVLEVBQUVDLE9BQU8sRUFBa0I7UUFBaEJDLFVBQUFBLGlFQUFVLElBQUk7O0lBQzdDRixhQUFhQSxXQUFXRyxLQUFLLENBQUNDLGdCQUFLO0lBRW5DSixXQUFXSyxPQUFPLENBQUMsU0FBQ0MsV0FBYztRQUNoQyxJQUFJQSxjQUFjQyw2QkFBaUIsRUFBRTtZQUNuQyxJQUFNQyx1QkFBdUIsTUFBS0Msa0JBQWtCLENBQUNGLDZCQUFpQixHQUNoRUcsNkJBQTZCRixxQkFBcUJHLE1BQU07WUFFOUQsSUFBSUQsK0JBQStCLEdBQUc7Z0JBQ3BDLE1BQUtFLGVBQWU7WUFDdEIsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLENBQUNSLFdBQVdMLFNBQVNDO1FBRWhFLE1BQUthLFVBQVUsQ0FBQ0QsZ0JBQWdCLENBQUNSLFdBQVdPO0lBQzlDO0FBQ0Y7QUFFQSxTQUFTRyxJQUFJaEIsVUFBVSxFQUFFQyxPQUFPLEVBQWtCO1FBQWhCQyxVQUFBQSxpRUFBVSxJQUFJOztJQUM5Q0YsYUFBYUEsV0FBV0csS0FBSyxDQUFDQyxnQkFBSztJQUVuQ0osV0FBV0ssT0FBTyxDQUFDLFNBQUNDLFdBQWM7UUFDaEMsSUFB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