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
                _this.removeResizeObject();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUmVzaXplT2JqZWN0IH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpO1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkZFJlc2l6ZU9iamVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpO1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcblxuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBpZiAodGhpcy5ldmVudExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiYgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb24sXG4gIG9mZixcbiAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsib24iLCJldmVudFR5cGVzIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzcGxpdCIsIlNQQUNFIiwiZm9yRWFjaCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwicmVzaXplRXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCIsImxlbmd0aCIsImFkZFJlc2l6ZU9iamVjdCIsImV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRWxlbWVudCIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVSZXNpemVPYmplY3QiLCJldmVudExpc3RlbmVycyIsInVuZGVmaW5lZCIsImNyZWF0ZUV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZmluZEV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZmluZCIsImZvdW5kIiwiaGFuZGxlckVsZW1lbnQiLCJldmVudCIsImNhbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0hBOzs7ZUFBQTs7O3lCQTdIc0I7MEJBQ1k7c0JBQ0M7QUFFbkMsU0FBU0EsR0FBR0MsVUFBVSxFQUFFQyxPQUFPLEVBQWtCO1FBQWhCQyxVQUFBQSxpRUFBVSxJQUFJOztJQUM3Q0YsYUFBYUEsV0FBV0csS0FBSyxDQUFDQyxnQkFBSztJQUVuQ0osV0FBV0ssT0FBTyxDQUFDLFNBQUNDLFdBQWM7UUFDaEMsSUFBSUEsY0FBY0MsNkJBQWlCLEVBQUU7WUFDbkMsSUFBTUMsdUJBQXVCLE1BQUtDLGtCQUFrQixDQUFDRiw2QkFBaUIsR0FDaEVHLDZCQUE2QkYscUJBQXFCRyxNQUFNO1lBRTlELElBQUlELCtCQUErQixHQUFHO2dCQUNwQyxNQUFLRSxlQUFlO1lBQ3RCLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBTUMsZ0JBQWdCLE1BQUtDLGdCQUFnQixDQUFDUixXQUFXTCxTQUFTQztRQUVoRSxNQUFLYSxVQUFVLENBQUNELGdCQUFnQixDQUFDUixXQUFXTztJQUM5QztBQUNGO0FBRUEsU0FBU0csSUFBSWhCLFVBQVUsRUFBRUMsT0FBTyxFQUFrQjtRQUFoQkMsVUFBQUEsaUVBQVUsSUFBSTs7SUFDOUNGLGFBQWFBLFdBQVdHLEtBQUssQ0FBQ0MsZ0JBQUs7SUFFbkNKLFdBQVdLLE9BQU8sQ0FBQyxTQUFDQyxXQUFjO1FBQ2hDLElB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