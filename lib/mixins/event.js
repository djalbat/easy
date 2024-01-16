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
function offEvent(eventTypes, handler) {
    var _this = this;
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
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
    createEventListener: createEventListener,
    findEventListener: findEventListener,
    findEventListeners: findEventListeners
};
var _default = eventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUmVzaXplT2JqZWN0IH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZnVuY3Rpb24gb25FdmVudChldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZkV2ZW50KGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIGlmICghdGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiYgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbnMgPSB7XG4gIG9uRXZlbnQsXG4gIG9mZkV2ZW50LFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyLFxuICBjcmVhdGVFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXJzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudE1peGlucztcbiJdLCJuYW1lcyI6WyJvbkV2ZW50IiwiZXZlbnRUeXBlcyIsImhhbmRsZXIiLCJlbGVtZW50Iiwic3BsaXQiLCJTUEFDRSIsImZvckVhY2giLCJldmVudFR5cGUiLCJSRVNJWkVfRVZFTlRfVFlQRSIsInJlc2l6ZUV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwicmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGgiLCJsZW5ndGgiLCJhZGRSZXNpemVPYmplY3QiLCJldmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvbUVsZW1lbnQiLCJvZmZFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVSZXNpemVPYmplY3QiLCJjcmVhdGVFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lcnMiLCJwdXNoIiwiZmluZEV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZmluZCIsImZvdW5kIiwiaGFuZGxlckVsZW1lbnQiLCJldmVudCIsImNhbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0hBOzs7ZUFBQTs7O3lCQTdIc0I7MEJBQ1k7c0JBQ0M7QUFFbkMsU0FBU0EsUUFBUUMsVUFBVSxFQUFFQyxPQUFPOztRQUFFQyxVQUFBQSxpRUFBVSxJQUFJO0lBQ2xERixhQUFhQSxXQUFXRyxLQUFLLENBQUNDLGdCQUFLO0lBRW5DSixXQUFXSyxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBSUEsY0FBY0MsNkJBQWlCLEVBQUU7WUFDbkMsSUFBTUMsdUJBQXVCLE1BQUtDLGtCQUFrQixDQUFDRiw2QkFBaUIsR0FDaEVHLDZCQUE2QkYscUJBQXFCRyxNQUFNO1lBRTlELElBQUlELCtCQUErQixHQUFHO2dCQUNwQyxNQUFLRSxlQUFlO1lBQ3RCO1FBQ0Y7UUFFQSxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLENBQUNSLFdBQVdMLFNBQVNDO1FBRWhFLE1BQUthLFVBQVUsQ0FBQ0QsZ0JBQWdCLENBQUNSLFdBQVdPO0lBQzlDO0FBQ0Y7QUFFQSxTQUFTRyxTQUFTaEIsVUFBVSxFQUFFQyxPQUFPOztRQUFFQyxVQUFBQSxpRUFBVSxJQUFJO0lBQ25ERixhQUFhQSxXQUFXRyxLQUFLLENBQUNDLGdCQUFLO0lBRW5DSixXQUFXSyxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTU8sZ0JBQWdCLE1BQUtJLG1CQUFtQixDQUFDWCxXQUFXTCxTQUFTQztR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