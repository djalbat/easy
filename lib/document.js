"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" ///
, {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
const _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
const _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
const _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
const _constants = require("./constants");
const _eventTypes = require("./eventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Document {
    constructor(){
        this.domElement = document; ///
    }
    getDOMElement() {
        return this.domElement;
    }
    getSelection() {
        return this.domElement.getSelection();
    }
    createRange() {
        return this.domElement.createRange();
    }
    createTextNode(data) {
        return this.domElement.createTextNode(data);
    }
    onSelectionChange(selectionChangeHandler, element) {
        this.onEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
    }
    offSelectionChange(selectionChangeHandler, element) {
        this.offEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
    }
    createEventListener(eventType, handler, element) {
        let eventListener;
        const handlerElement = element; ///
        eventListener = (event)=>{
            if (eventType === _eventTypes.SELECTIONCHANGE_EVENT_TYPE) {
                const { domElement } = handlerElement, { currentTarget } = event, { activeElement } = currentTarget;
                if (domElement !== activeElement) {
                    return;
                }
            }
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
}
Object.assign(Document.prototype, _key.default);
Object.assign(Document.prototype, _event.default);
Object.assign(Document.prototype, _mouse.default);
Object.assign(Document.prototype, _click.default);
const _default = typeof document === _constants.UNDEFINED ? undefined : new Document();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG5cbiAgY3JlYXRlUmFuZ2UoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY3JlYXRlUmFuZ2UoKTsgfVxuXG4gIGNyZWF0ZVRleHROb2RlKGRhdGEpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTsgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuICBvZmZTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuICBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICAgIGxldCBldmVudExpc3RlbmVyO1xuXG4gICAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICAgIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHsgZG9tRWxlbWVudCB9ID0gaGFuZGxlckVsZW1lbnQsXG4gICAgICAgICAgICAgIHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBoYW5kbGVyLFxuICAgICAgZXZlbnRUeXBlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiBkb2N1bWVudCA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBEb2N1bWVudCgpOyAgLy8vXG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRET01FbGVtZW50IiwiZ2V0U2VsZWN0aW9uIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVUZXh0Tm9kZSIsImRhdGEiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGlvbkNoYW5nZUhhbmRsZXIiLCJlbGVtZW50Iiwib25FdmVudCIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwib2ZmU2VsZWN0aW9uQ2hhbmdlIiwib2ZmRXZlbnQiLCJjcmVhdGVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImFjdGl2ZUVsZW1lbnQiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwiVU5ERUZJTkVEIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpRUEsVUFBOEUsR0FBRzs7OztlQUFqRjs7OzREQS9Ec0I7OERBQ0U7OERBQ0E7OERBQ0E7MkJBRUU7NEJBQ2lCOzs7Ozs7QUFFM0MsTUFBTUE7SUFDSixhQUFjO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFVBQVUsR0FBRztJQUNqQztJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxlQUFlO1FBQUUsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csWUFBWTtJQUFJO0lBRXhEQyxjQUFjO1FBQUUsT0FBTyxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ksV0FBVztJQUFJO0lBRXREQyxlQUFlQyxJQUFJLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ04sVUFBVSxDQUFDSyxjQUFjLENBQUNDO0lBQU87SUFFcEVDLGtCQUFrQkMsc0JBQXNCLEVBQUVDLE9BQU8sRUFBRTtRQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxzQ0FBMEIsRUFBRUgsd0JBQXdCQztJQUFVO0lBRWhJRyxtQkFBbUJKLHNCQUFzQixFQUFFQyxPQUFPLEVBQUU7UUFBRSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0Ysc0NBQTBCLEVBQUVILHdCQUF3QkM7SUFBVTtJQUVsSUssb0JBQW9CQyxTQUFTLEVBQUVDLE9BQU8sRUFBRVAsT0FBTyxFQUFFO1FBQy9DLElBQUlRO1FBRUosTUFBTUMsaUJBQWlCVCxTQUFTLEdBQUc7UUFFbkNRLGdCQUFnQixDQUFDRTtZQUNmLElBQUlKLGNBQWNKLHNDQUEwQixFQUFFO2dCQUM1QyxNQUFNLEVBQUVYLFVBQVUsRUFBRSxHQUFHa0IsZ0JBQ2pCLEVBQUVFLGFBQWEsRUFBRSxHQUFHRCxPQUNwQixFQUFFRSxhQUFhLEVBQUUsR0FBR0Q7Z0JBRTFCLElBQUlwQixlQUFlcUIsZUFBZTtvQkFDaEM7Z0JBQ0Y7WUFDRjtZQUVBLE1BQU1aLFVBQVUsSUFBSSxFQUFFLEdBQUc7WUFFekJPLFFBQVFNLElBQUksQ0FBQ0osZ0JBQWdCQyxPQUFPVjtRQUN0QztRQUVBYyxPQUFPQyxNQUFNLENBQUNQLGVBQWU7WUFDM0JSO1lBQ0FPO1lBQ0FEO1FBQ0Y7UUFFQSxPQUFPRTtJQUNUO0FBQ0Y7QUFFQU0sT0FBT0MsTUFBTSxDQUFDekIsU0FBUzBCLFNBQVMsRUFBRUMsWUFBUztBQUMzQ0gsT0FBT0MsTUFBTSxDQUFDekIsU0FBUzBCLFNBQVMsRUFBRUUsY0FBVztBQUM3Q0osT0FBT0MsTUFBTSxDQUFDekIsU0FBUzBCLFNBQVMsRUFBRUcsY0FBVztBQUM3Q0wsT0FBT0MsTUFBTSxDQUFDekIsU0FBUzBCLFNBQVMsRUFBRUksY0FBVztNQUU3QyxXQUFlLEFBQUMsT0FBTzVCLGFBQWE2QixvQkFBUyxHQUFJQyxZQUFZLElBQUloQyJ9