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
function onCustomEvent(customEventTypes, handler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    customEventTypes = customEventTypes.split(_constants.SPACE);
    customEventTypes.forEach(function(customEventType) {
        var eventType = customEventType; ///
        _this.addEventListener(eventType, handler, element);
    });
}
function offCustomEvent(customEventTypes, handler) {
    var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var _this = this;
    customEventTypes = customEventTypes.split(_constants.SPACE);
    customEventTypes.forEach(function(customEventType) {
        var eventType = customEventType; ///
        _this.removeEventListener(eventType, handler, element);
    });
}
var customEventMixins = {
    onCustomEvent: onCustomEvent,
    offCustomEvent: offCustomEvent
};
var _default = customEventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBvbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGN1c3RvbUV2ZW50VHlwZXMgPSBjdXN0b21FdmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBjdXN0b21FdmVudFR5cGVzLmZvckVhY2goKGN1c3RvbUV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGN1c3RvbUV2ZW50VHlwZTsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBjdXN0b21FdmVudFR5cGU7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuY29uc3QgY3VzdG9tRXZlbnRNaXhpbnMgPSB7XG4gIG9uQ3VzdG9tRXZlbnQsXG4gIG9mZkN1c3RvbUV2ZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21FdmVudE1peGlucztcbiJdLCJuYW1lcyI6WyJvbkN1c3RvbUV2ZW50IiwiY3VzdG9tRXZlbnRUeXBlcyIsImhhbmRsZXIiLCJlbGVtZW50Iiwic3BsaXQiLCJTUEFDRSIsImZvckVhY2giLCJjdXN0b21FdmVudFR5cGUiLCJldmVudFR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmQ3VzdG9tRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VzdG9tRXZlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZCQTs7O2VBQUE7Ozt5QkEzQnNCO0FBRXRCLFNBQVNBLGNBQWNDLGdCQUFnQixFQUFFQyxPQUFPO1FBQUVDLFVBQUFBLGlFQUFVLElBQUk7O0lBQzlERixtQkFBbUJBLGlCQUFpQkcsS0FBSyxDQUFDQyxnQkFBSztJQUUvQ0osaUJBQWlCSyxPQUFPLENBQUMsU0FBQ0M7UUFDeEIsSUFBTUMsWUFBWUQsaUJBQWtCLEdBQUc7UUFFdkMsTUFBS0UsZ0JBQWdCLENBQUNELFdBQVdOLFNBQVNDO0lBQzVDO0FBQ0Y7QUFFQSxTQUFTTyxlQUFlVCxnQkFBZ0IsRUFBRUMsT0FBTztRQUFFQyxVQUFBQSxpRUFBVSxJQUFJOztJQUMvREYsbUJBQW1CQSxpQkFBaUJHLEtBQUssQ0FBQ0MsZ0JBQUs7SUFFL0NKLGlCQUFpQkssT0FBTyxDQUFDLFNBQUNDO1FBQ3hCLElBQU1DLFlBQVlELGlCQUFrQixHQUFHO1FBRXZDLE1BQUtJLG1CQUFtQixDQUFDSCxXQUFXTixTQUFTQztJQUMvQztBQUNGO0FBRUEsSUFBTVMsb0JBQW9CO0lBQ3hCWixlQUFBQTtJQUNBVSxnQkFBQUE7QUFDRjtJQUVBLFdBQWVFIn0=