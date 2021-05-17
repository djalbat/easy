"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _resize = require("./resize");
function on(eventTypes, handler, element) {
    eventTypes = eventTypes.split(" "); ///
    eventTypes.forEach((function(eventType) {
        if (eventType === "resize") {
            var resizeEventListeners = this.findEventListeners("resize"), resizeEventListenersLength = resizeEventListeners.length;
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
        if (eventType === "resize") {
            var resizeEventListeners = this.findEventListeners("resize"), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                (0, _resize).removeResizeObject(this);
            }
        }
    }).bind(this));
}
function addEventListener(eventType, handler, param) {
    var element = param === void 0 ? this : param;
    if (!this.hasOwnProperty("eventListeners")) {
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
    if (this.hasOwnProperty("eventListeners")) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7cmVtb3ZlUmVzaXplT2JqZWN0fSBmcm9tIFwiLi9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChcIiBcIik7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gXCJyZXNpemVcIikge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhcInJlc2l6ZVwiKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoXCIgXCIpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBcInJlc2l6ZVwiKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFwicmVzaXplXCIpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShcImV2ZW50TGlzdGVuZXJzXCIpKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gKCAoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiZXZlbnRMaXN0ZW5lcnNcIikpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCwgZWxlbWVudClcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb24sXG4gIG9mZixcbiAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNaXhpbnM7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFcUIsT0FBVTtTQUVsQyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPO0lBQ3RDLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFDLENBQUcsR0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFdkMsVUFBVSxDQUFDLE9BQU8sV0FBRSxTQUFTO1lBQ3ZCLFNBQVMsTUFBSyxNQUFRO2dCQUNsQixvQkFBb0IsUUFBUSxrQkFBa0IsRUFBQyxNQUFRLElBQ3ZELDBCQUEwQixHQUFHLG9CQUFvQixDQUFDLE1BQU07Z0JBRTFELDBCQUEwQixLQUFLLENBQUM7cUJBQzdCLGVBQWU7OztZQUlsQixhQUFhLFFBQVEsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9B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