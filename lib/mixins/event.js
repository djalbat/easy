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
                _this.addResizeObject();
            }
        }
        var eventListener = _this.addEventListener(eventType, handler, element);
        _this.domElement.addEventListener(eventType, eventListener);
    });
}
function offEvent(eventTypes, handler) {
    var _this = this;
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    eventTypes = eventTypes.split(_constants.SPACE); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkV2ZW50KGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZkV2ZW50KGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuXG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnJlbW92ZVJlc2l6ZU9iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5ldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVycy5maW5kKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChldmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW5zID0ge1xuICBvbkV2ZW50LFxuICBvZmZFdmVudCxcbiAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVycyxcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsib25FdmVudCIsImV2ZW50VHlwZXMiLCJoYW5kbGVyIiwiZWxlbWVudCIsInNwbGl0IiwiU1BBQ0UiLCJmb3JFYWNoIiwiZXZlbnRUeXBlIiwiUkVTSVpFX0VWRU5UX1RZUEUiLCJyZXNpemVFdmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsInJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoIiwibGVuZ3RoIiwiYWRkUmVzaXplT2JqZWN0IiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21FbGVtZW50Iiwib2ZmRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlUmVzaXplT2JqZWN0IiwiY3JlYXRlRXZlbnRMaXN0ZW5lciIsImV2ZW50TGlzdGVuZXJzIiwicHVzaCIsImZpbmRFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZpbmQiLCJmb3VuZCIsImhhbmRsZXJFbGVtZW50IiwiZXZlbnQiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThIQTs7O2VBQUE7Ozt5QkE1SHNCOzBCQUNZO0FBRWxDLFNBQVNBLFFBQVFDLFVBQVUsRUFBRUMsT0FBTzs7UUFBRUMsVUFBQUEsaUVBQVUsSUFBSTtJQUNsREYsYUFBYUEsV0FBV0csS0FBSyxDQUFDQyxnQkFBSyxHQUFHLEdBQUc7SUFFekNKLFdBQVdLLE9BQU8sQ0FBQyxTQUFDQztRQUNsQixJQUFJQSxjQUFjQyw2QkFBaUIsRUFBRTtZQUNuQyxJQUFNQyx1QkFBdUIsTUFBS0Msa0JBQWtCLENBQUNGLDZCQUFpQixHQUNoRUcsNkJBQTZCRixxQkFBcUJHLE1BQU07WUFFOUQsSUFBSUQsK0JBQStCLEdBQUc7Z0JBQ3BDLE1BQUtFLGVBQWU7WUFDdEI7UUFDRjtRQUVBLElBQU1DLGdCQUFnQixNQUFLQyxnQkFBZ0IsQ0FBQ1IsV0FBV0wsU0FBU0M7UUFFaEUsTUFBS2EsVUFBVSxDQUFDRCxnQkFBZ0IsQ0FBQ1IsV0FBV087SUFDOUM7QUFDRjtBQUVBLFNBQVNHLFNBQVNoQixVQUFVLEVBQUVDLE9BQU87O1FBQUVDLFVBQUFBLGlFQUFVLElBQUk7SUFDbkRGLGFBQWFBLFdBQVdHLEtBQUssQ0FBQ0MsZ0JBQUssR0FBRyxHQUFHO0lBRXpDSixXQUFXSyxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTU8sZ0JBQWdCLE1BQUtJLG1CQUFtQixDQUFDWCxXQUFXTCxTQUFTQztRQUVuRSxNQUFLYSxVQUFVLENBQUNFLG1CQUFtQixDQUFDWCxX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