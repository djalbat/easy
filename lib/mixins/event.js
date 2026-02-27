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
const _constants = require("../constants");
const _eventTypes = require("../eventTypes");
function onEvent(eventTypes, handler, element = this) {
    eventTypes = eventTypes.split(_constants.SPACE); ///
    eventTypes.forEach((eventType)=>{
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            const resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                this.resizeObserver = new ResizeObserver((entries)=>{
                    const resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
                    resizeEventListeners.forEach((resizeEventListener)=>{
                        const event = null;
                        resizeEventListener(event);
                    });
                });
                this.resizeObserver.observe(this.domElement);
            }
            this.addEventListener(eventType, handler, element);
        } else {
            const eventListener = this.addEventListener(eventType, handler, element);
            this.domElement.addEventListener(eventType, eventListener);
        }
    });
}
function offEvent(eventTypes, handler, element = this) {
    eventTypes = eventTypes.split(_constants.SPACE); ///
    eventTypes.forEach((eventType)=>{
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
            this.removeEventListener(eventType, handler, element);
            const resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
            if (resizeEventListenersLength === 0) {
                this.resizeObserver.unobserve(this.domElement);
                delete this.resizeObserver;
            }
        } else {
            const eventListener = this.removeEventListener(eventType, handler, element);
            this.domElement.removeEventListener(eventType, eventListener);
        }
    });
}
function addEventListener(eventType, handler, element) {
    const eventListener = this.createEventListener(eventType, handler, element);
    if (!this.eventListeners) {
        this.eventListeners = [];
    }
    this.eventListeners.push(eventListener);
    return eventListener;
}
function removeEventListener(eventType, handler, element) {
    const eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
    this.eventListeners.splice(start, deleteCount);
    if (this.eventListeners.length === 0) {
        delete this.eventListeners;
    }
    return eventListener;
}
function findEventListener(eventType, handler, element) {
    const eventListener = this.eventListeners.find((eventListener)=>{
        if (eventListener.element === element && eventListener.handler === handler && eventListener.eventType === eventType) {
            return true;
        }
    });
    return eventListener;
}
function findEventListeners(eventType) {
    const eventListeners = [];
    if (this.eventListeners) {
        this.eventListeners.forEach((eventListener)=>{
            const found = eventListener.eventType === eventType;
            if (found) {
                eventListeners.push(eventListener);
            }
        });
    }
    return eventListeners;
}
function createEventListener(eventType, handler, element) {
    let eventListener;
    const handlerElement = element; ///
    eventListener = (event)=>{
        const element = this; ///
        handler.call(handlerElement, event, element);
    };
    Object.assign(eventListener, {
        element,
        handler,
        eventType
    });
    return eventListener;
}
const eventMixins = {
    onEvent,
    offEvent,
    addEventListener,
    removeEventListener,
    findEventListener,
    findEventListeners,
    createEventListener
};
const _default = eventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkV2ZW50KGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKTtcblxuICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmRvbUVsZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmRXZlbnQoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMucmVzaXplT2JzZXJ2ZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5jcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGlmICgoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJiAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb25FdmVudCxcbiAgb2ZmRXZlbnQsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9uRXZlbnQiLCJldmVudFR5cGVzIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzcGxpdCIsIlNQQUNFIiwiZm9yRWFjaCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwicmVzaXplRXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCIsImxlbmd0aCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwicmVzaXplRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib2JzZXJ2ZSIsImRvbUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lciIsIm9mZkV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVub2JzZXJ2ZSIsImNyZWF0ZUV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVycyIsInB1c2giLCJmaW5kRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmaW5kIiwiZm91bmQiLCJoYW5kbGVyRWxlbWVudCIsImNhbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOElBOzs7ZUFBQTs7OzJCQTVJc0I7NEJBQ1k7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