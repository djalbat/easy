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
    var eventListener = this.createEventListener(eventType, handler, element);
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
    eventListener = (function(event) {
        handler.call(element, event, this); ///
    }).bind(this);
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUmVzaXplT2JqZWN0IH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gKCAoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCwgdGhpcyk7IC8vL1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW5zID0ge1xuICBvbixcbiAgb2ZmLFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyLFxuICBjcmVhdGVFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXJzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudE1peGlucztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLFVBQWM7SUFDRixXQUFlO0lBQ2QsT0FBa0I7U0FFNUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTztJQUN0QyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FMVCxVQUFjO0lBT2xDLFVBQVUsQ0FBQyxPQUFPLFdBQUUsU0FBUztZQUN2QixTQUFTLEtBUGlCLFdBQWU7Z0JBUXJDLG9CQUFvQixRQUFRLGtCQUFrQixDQVJ4QixXQUFlLHFCQVNyQywwQkFBMEIsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNO2dCQUUxRCwwQkFBMEIsS0FBSyxDQUFDO3FCQUM3QixlQUFlOzs7WUFJbEIsYUFBYSxRQUFRLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTzthQUVsRSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGFBQWE7OztTQUlwRCxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPO0lBQ3ZDLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQXhCVCxVQUFjO0lBMEJsQyxVQUFVLENBQUMsT0FBTyxXQUFFLFNBQVM7WUFDckIsYUFBYSxRQUFRLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTzthQUVyRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGFBQWE7WUFFeEQsU0FBUyxLQTlCaUIsV0FBZTtnQkErQnJDLG9CQUFvQixRQUFRLGtCQUFrQixDQS9CeEIsV0FBZSxxQkFnQ3JDLDBCQUEwQixHQUFHLG9CQUFvQixDQUFDLE1BQU07Z0JBRTFELDBCQUEwQixLQUFLLENBQUM7b0JBakNQLE9BQWtCOzs7OztTQXdDNUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFjO1FBQWQsT0FBTyxHQUFQLEtBQWMscUJBQWQsS0FBYzthQUNqRCxjQUFjLEtBQUssU0FBUzthQUM5QixjQUFjOztRQUdmLGFBQWEsUUFBUSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87U0FFckUsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhO1dBRS9CLGFBQWE7O1NBR2IsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFjO1FBQWQsT0FBTyxHQUFQLEtBQWMscUJBQWQsS0FBYztRQUN2RCxhQUFhLFFBQVEsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQ2xFLEtBQUssUUFBUSxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FDakQsS0FBSyxHQUFHLEtBQUssRUFDYixXQUFXLEdBQUcsQ0FBQztTQUVoQixjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXO2FBRXBDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFDdEIsY0FBYzs7V0FHckIsYUFBYTs7U0FHYixpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87UUFDOUMsYUFBYSxRQUFRLGNBQWMsQ0FBQyxJQUFJLFVBQUUsY0FBYTtZQUNyRCxLQUFLLEdBQU0sY0FBYSxDQUFDLE9BQU8sS0FBSyxPQUFPLElBQ2pDLGNBQWEsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUNqQyxjQUFhLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFFbEQsS0FBSzttQkFDQSxJQUFJOzs7V0FJUixhQUFhOztTQUdiLGtCQUFrQixDQUFDLFNBQVM7UUFDN0IsY0FBYzthQUVYLGNBQWMsS0FBSyxTQUFTO2FBQzlCLGNBQWMsQ0FBQyxPQUFPLFVBQUUsYUFBYTtnQkFDbEMsS0FBSyxHQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUztnQkFFaEQsS0FBSztnQkFDUCxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWE7Ozs7V0FLaEMsY0FBYzs7U0FHZCxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87UUFDbEQsYUFBYTtJQUVqQixhQUFhLGFBQUksS0FBSztRQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztJQUd6QyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWE7UUFDekIsT0FBTyxFQUFQLE9BQU87UUFDUCxPQUFPLEVBQVAsT0FBTztRQUNQLFNBQVMsRUFBVCxTQUFTOztXQUdKLGFBQWE7O0lBR2hCLFdBQVc7SUFDZixFQUFFLEVBQUYsRUFBRTtJQUNGLEdBQUcsRUFBSCxHQUFHO0lBQ0gsZ0JBQWdCLEVBQWhCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQWpCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBbEIsa0JBQWtCOztlQUdMLFdBQVcifQ==