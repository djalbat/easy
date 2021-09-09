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
    var eventListener = this.eventListeners.find(function(eventListener) {
        var found = eventListener.element === element && eventListener.handler === handler && eventListener.eventType === eventType;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZXZlbnQuanMiXSwibmFtZXMiOlsiU1BBQ0UiLCJSRVNJWkVfRVZFTlRfVFlQRSIsInJlbW92ZVJlc2l6ZU9iamVjdCIsIm9uIiwiZXZlbnRUeXBlcyIsImhhbmRsZXIiLCJlbGVtZW50Iiwic3BsaXQiLCJmb3JFYWNoIiwiZXZlbnRUeXBlIiwicmVzaXplRXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCIsImxlbmd0aCIsImFkZFJlc2l6ZU9iamVjdCIsImV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tRWxlbWVudCIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVycyIsInVuZGVmaW5lZCIsImNyZWF0ZUV2ZW50TGlzdGVuZXIiLCJwdXNoIiwiZmluZEV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZmluZCIsImZvdW5kIiwiZXZlbnQiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBYyxDQUFkLFVBQWM7QUFDRixHQUFlLENBQWYsV0FBZTtBQUNkLEdBQWtCLENBQWxCLE9BQWtCO1NBRTVDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3pDLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUxULFVBQWM7SUFPbEMsVUFBVSxDQUFDLE9BQU8sRUFBQyxRQUFRLENBQVAsU0FBUyxFQUFLLENBQUM7UUFDakMsRUFBRSxFQUFFLFNBQVMsS0FQaUIsV0FBZSxvQkFPUixDQUFDO1lBQ3BDLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBUnhCLFdBQWUscUJBU3JDLDBCQUEwQixHQUFHLG9CQUFv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