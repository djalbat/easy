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
var _eventTypes = require("../eventTypes");
function onSelectionChange(selectionChangeHandler, element) {
    this.on(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
}
function offSelectionChange(selectionChangeHandler, element) {
    this.off(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
}
function createEventListener(eventType, handler, element) {
    var _this = this;
    var eventListener;
    var handlerElement = element; ///
    eventListener = function(event) {
        if (eventType === _eventTypes.SELECTIONCHANGE_EVENT_TYPE) {
            var domElement = handlerElement.domElement, currentTarget = event.currentTarget, activeElement = currentTarget.activeElement;
            if (domElement !== activeElement) {
                return;
            }
        }
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
var selectionMixins = {
    onSelectionChange: onSelectionChange,
    offSelectionChange: offSelectionChange,
    createEventListener: createEventListener
};
var _default = selectionMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc2VsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCB7IGRvbUVsZW1lbnQgfSA9IGhhbmRsZXJFbGVtZW50LFxuICAgICAgICAgICAgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldDtcblxuICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IHNlbGVjdGlvbk1peGlucyA9IHtcbiAgb25TZWxlY3Rpb25DaGFuZ2UsXG4gIG9mZlNlbGVjdGlvbkNoYW5nZSxcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uTWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9uU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0aW9uQ2hhbmdlSGFuZGxlciIsImVsZW1lbnQiLCJvbiIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwib2ZmU2VsZWN0aW9uQ2hhbmdlIiwib2ZmIiwiY3JlYXRlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJldmVudCIsImRvbUVsZW1lbnQiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsImNhbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJzZWxlY3Rpb25NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRDQTs7O2VBQUE7OzswQkExQzJDO0FBRTNDLFNBQVNBLGtCQUFrQkMsc0JBQXNCLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLEVBQUUsQ0FBQ0Msc0NBQTBCLEVBQUVILHdCQUF3QkM7QUFBVTtBQUVwSSxTQUFTRyxtQkFBbUJKLHNCQUFzQixFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDSSxHQUFHLENBQUNGLHNDQUEwQixFQUFFSCx3QkFBd0JDO0FBQVU7QUFFdEksU0FBU0ssb0JBQW9CQyxTQUFTLEVBQUVDLE9BQU8sRUFBRVAsT0FBTzs7SUFDdEQsSUFBSVE7SUFFSixJQUFNQyxpQkFBaUJULFNBQVMsR0FBRztJQUVuQ1EsZ0JBQWdCLFNBQUNFO1FBQ2YsSUFBSUosY0FBY0osc0NBQTBCLEVBQUU7WUFDNUMsSUFBTSxBQUFFUyxhQUFlRixlQUFmRSxZQUNGLEFBQUVDLGdCQUFrQkYsTUFBbEJFLGVBQ0YsQUFBRUMsZ0JBQWtCRCxjQUFsQkM7WUFFUixJQUFJRixlQUFlRSxlQUFlO2dCQUNoQztZQUNGO1FBQ0Y7UUFFQSxJQUFNYixtQkFBZ0IsR0FBRztRQUV6Qk8sUUFBUU8sSUFBSSxDQUFDTCxnQkFBZ0JDLE9BQU9WO0lBQ3RDO0lBRUFlLE9BQU9DLE1BQU0sQ0FBQ1IsZUFBZTtRQUMzQlIsU0FBQUE7UUFDQU8sU0FBQUE7UUFDQUQsV0FBQUE7SUFDRjtJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxJQUFNUyxrQkFBa0I7SUFDdEJuQixtQkFBQUE7SUFDQUssb0JBQUFBO0lBQ0FFLHFCQUFBQTtBQUNGO0lBRUEsV0FBZVkifQ==