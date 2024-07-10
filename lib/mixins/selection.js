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
    this.onEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
}
function offSelectionChange(selectionChangeHandler, element) {
    this.offEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc2VsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgeyBkb21FbGVtZW50IH0gPSBoYW5kbGVyRWxlbWVudCxcbiAgICAgICAgICAgIHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgICB7IGFjdGl2ZUVsZW1lbnQgfSA9IGN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgIGlmIChkb21FbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBzZWxlY3Rpb25NaXhpbnMgPSB7XG4gIG9uU2VsZWN0aW9uQ2hhbmdlLFxuICBvZmZTZWxlY3Rpb25DaGFuZ2UsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGlvbk1peGlucztcbiJdLCJuYW1lcyI6WyJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGlvbkNoYW5nZUhhbmRsZXIiLCJlbGVtZW50Iiwib25FdmVudCIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwib2ZmU2VsZWN0aW9uQ2hhbmdlIiwib2ZmRXZlbnQiLCJjcmVhdGVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImV2ZW50IiwiZG9tRWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwiY2FsbCIsIk9iamVjdCIsImFzc2lnbiIsInNlbGVjdGlvbk1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNENBOzs7ZUFBQTs7OzBCQTFDMkM7QUFFM0MsU0FBU0Esa0JBQWtCQyxzQkFBc0IsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxzQ0FBMEIsRUFBRUgsd0JBQXdCQztBQUFVO0FBRXpJLFNBQVNHLG1CQUFtQkosc0JBQXNCLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0Ysc0NBQTBCLEVBQUVILHdCQUF3QkM7QUFBVTtBQUUzSSxTQUFTSyxvQkFBb0JDLFNBQVMsRUFBRUMsT0FBTyxFQUFFUCxPQUFPOztJQUN0RCxJQUFJUTtJQUVKLElBQU1DLGlCQUFpQlQsU0FBUyxHQUFHO0lBRW5DUSxnQkFBZ0IsU0FBQ0U7UUFDZixJQUFJSixjQUFjSixzQ0FBMEIsRUFBRTtZQUM1QyxJQUFNLEFBQUVTLGFBQWVGLGVBQWZFLFlBQ0YsQUFBRUMsZ0JBQWtCRixNQUFsQkUsZUFDRixBQUFFQyxnQkFBa0JELGNBQWxCQztZQUVSLElBQUlGLGVBQWVFLGVBQWU7Z0JBQ2hDO1lBQ0Y7UUFDRjtRQUVBLElBQU1iLG1CQUFnQixHQUFHO1FBRXpCTyxRQUFRTyxJQUFJLENBQUNMLGdCQUFnQkMsT0FBT1Y7SUFDdEM7SUFFQWUsT0FBT0MsTUFBTSxDQUFDUixlQUFlO1FBQzNCUixTQUFBQTtRQUNBTyxTQUFBQTtRQUNBRCxXQUFBQTtJQUNGO0lBRUEsT0FBT0U7QUFDVDtBQUVBLElBQU1TLGtCQUFrQjtJQUN0Qm5CLG1CQUFBQTtJQUNBSyxvQkFBQUE7SUFDQUUscUJBQUFBO0FBQ0Y7SUFFQSxXQUFlWSJ9