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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUmVzaXplT2JqZWN0IH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZnVuY3Rpb24gb25FdmVudChldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkZFJlc2l6ZU9iamVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZFdmVudChldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcblxuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5jcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGlmICgoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJiAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb25FdmVudCxcbiAgb2ZmRXZlbnQsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9uRXZlbnQiLCJldmVudFR5cGVzIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzcGxpdCIsIlNQQUNFIiwiZm9yRWFjaCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwicmVzaXplRXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCIsImxlbmd0aCIsImFkZFJlc2l6ZU9iamVjdCIsImV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRWxlbWVudCIsIm9mZkV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZVJlc2l6ZU9iamVjdCIsImNyZWF0ZUV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVycyIsInB1c2giLCJmaW5kRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmaW5kIiwiZm91bmQiLCJoYW5kbGVyRWxlbWVudCIsImV2ZW50IiwiY2FsbCIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50TWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStIQTs7O2VBQUE7Ozt5QkE3SHNCOzBCQUNZO3NCQUNDO0FBRW5DLFNBQVNBLFFBQVFDLFVBQVUsRUFBRUMsT0FBTzs7UUFBRUMsVUFBQUEsaUVBQVUsSUFBSTtJQUNsREYsYUFBYUEsV0FBV0csS0FBSyxDQUFDQyxnQkFBSyxHQUFHLEdBQUc7SUFFekNKLFdBQVdLLE9BQU8sQ0FBQyxTQUFDQztRQUNsQixJQUFJQSxjQUFjQyw2QkFBaUIsRUFBRTtZQUNuQyxJQUFNQyx1QkFBdUIsTUFBS0Msa0JBQWtCLENBQUNGLDZCQUFpQixHQUNoRUcsNkJBQTZCRixxQkFBcUJHLE1BQU07WUFFOUQsSUFBSUQsK0JBQStCLEdBQUc7Z0JBQ3BDLE1BQUtFLGVBQWU7WUFDdEI7UUFDRjtRQUVBLElBQU1DLGdCQUFnQixNQUFLQyxnQkFBZ0IsQ0FBQ1IsV0FBV0wsU0FBU0M7UUFFaEUsTUFBS2EsVUFBVSxDQUFDRCxnQkFBZ0IsQ0FBQ1IsV0FBV087SUFDOUM7QUFDRjtBQUVBLFNBQVNHLFNBQVNoQixVQUFVLEVBQUVDLE9BQU87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