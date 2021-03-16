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
                _resize.removeResizeObject(this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7cmVtb3ZlUmVzaXplT2JqZWN0fSBmcm9tIFwiLi9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChcIiBcIik7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gXCJyZXNpemVcIikge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhcInJlc2l6ZVwiKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoXCIgXCIpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBcInJlc2l6ZVwiKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFwicmVzaXplXCIpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShcImV2ZW50TGlzdGVuZXJzXCIpKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gKCAoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiZXZlbnRMaXN0ZW5lcnNcIikpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCwgZWxlbWVudClcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb24sXG4gIG9mZixcbiAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNaXhpbnM7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxPQUFBO1NBRUEsRUFBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEVBQUEsT0FBQTtBQUNBLGNBQUEsR0FBQSxVQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLGNBQUEsQ0FBQSxPQUFBLFdBQUEsU0FBQTtZQUNBLFNBQUEsTUFBQSxNQUFBO2dCQUNBLG9CQUFBLFFBQUEsa0JBQUEsRUFBQSxNQUFBLElBQ0EsMEJBQUEsR0FBQSxvQkFBQSxDQUFBLE1BQUE7Z0JBRUEsMEJBQUEsS0FBQSxDQUFBO3FCQUNBLGVBQUE7OztZQUlBLGFBQUEsUUFBQSxnQkFBQSxDQUFBLFNBQUEsRUFBQSxPQUFBLEVBQUEsT0FBQTthQUVBLFVBQUEsQ0FB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