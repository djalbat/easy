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
var _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
var _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
var _selection = /*#__PURE__*/ _interop_require_default(require("./mixins/selection"));
var _constants = require("./constants");
var _eventTypes = require("./eventTypes");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var Document = /*#__PURE__*/ function() {
    function Document() {
        _class_call_check(this, Document);
        this.domElement = document; ///
    }
    _create_class(Document, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "createRange",
            value: function createRange() {
                return this.domElement.createRange();
            }
        },
        {
            key: "createTextNode",
            value: function createTextNode(data) {
                return this.domElement.createTextNode(data);
            }
        },
        {
            key: "onSelectionChange",
            value: function onSelectionChange(selectionChangeHandler, element) {
                this.onEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
            }
        },
        {
            key: "offSelectionChange",
            value: function offSelectionChange(selectionChangeHandler, element) {
                this.offEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
            }
        },
        {
            key: "createEventListener",
            value: function createEventListener(eventType, handler, element) {
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
        }
    ]);
    return Document;
}();
Object.assign(Document.prototype, _key.default);
Object.assign(Document.prototype, _event.default);
Object.assign(Document.prototype, _mouse.default);
Object.assign(Document.prototype, _click.default);
Object.assign(Document.prototype, _selection.default);
var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? undefined : new Document();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG5cbiAgY3JlYXRlVGV4dE5vZGUoZGF0YSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpOyB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbiAgb2ZmU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICAgIGxldCBldmVudExpc3RlbmVyO1xuXG4gICAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICAgIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHsgZG9tRWxlbWVudCB9ID0gaGFuZGxlckVsZW1lbnQsXG4gICAgICAgICAgICAgIHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBoYW5kbGVyLFxuICAgICAgZXZlbnRUeXBlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cbiJdLCJuYW1lcyI6WyJEb2N1bWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImdldERPTUVsZW1lbnQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZVRleHROb2RlIiwiZGF0YSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0aW9uQ2hhbmdlSGFuZGxlciIsImVsZW1lbnQiLCJvbkV2ZW50IiwiU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUiLCJvZmZTZWxlY3Rpb25DaGFuZ2UiLCJvZmZFdmVudCIsImNyZWF0ZUV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXJFbGVtZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsImNhbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJrZXlNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJzZWxlY3Rpb25NaXhpbnMiLCJVTkRFRklORUQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlFQSxVQUE4RSxHQUFHOzs7O2VBQWpGOzs7MERBL0RzQjs0REFDRTs0REFDQTs0REFDQTtnRUFDSTt5QkFFRjswQkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQUEsQUFBTUEseUJBQU47YUFBTUE7Z0NBQUFBO1FBRUYsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFVBQVUsR0FBRzs7a0JBRjdCRjs7WUFLSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFnQixPQUFPLElBQUksQ0FBQ0gsVUFBVSxDQUFDRyxXQUFXO1lBQUk7OztZQUV0REMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLElBQUk7Z0JBQUksT0FBTyxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ksY0FBYyxDQUFDQztZQUFPOzs7WUFFcEVDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLHNCQUFzQixFQUFFQyxPQUFPO2dCQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxzQ0FBMEIsRUFBRUgsd0JBQXdCQztZQUFVOzs7WUFFaElHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJKLHNCQUFzQixFQUFFQyxPQUFPO2dCQUFJLElBQUksQ0FBQ0ksUUFBUSxDQUFDRixzQ0FBMEIsRUFBRUgsd0JBQXdCQztZQUFVOzs7WUFFbElLLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFNBQVMsRUFBRUMsT0FBTyxFQUFFUCxPQUFPOztnQkFDN0MsSUFBSVE7Z0JBRUosSUFBTUMsaUJBQWlCVCxTQUFTLEdBQUc7Z0JBRW5DUSxnQkFBZ0IsU0FBQ0U7b0JBQ2YsSUFBSUosY0FBY0osc0NBQTBCLEVBQUU7d0JBQzVDLElBQU0sQUFBRVYsYUFBZWlCLGVBQWZqQixZQUNGLEFBQUVtQixnQkFBa0JELE1BQWxCQyxlQUNGLEFBQUVDLGdCQUFrQkQsY0FBbEJDO3dCQUVSLElBQUlwQixlQUFlb0IsZUFBZTs0QkFDaEM7d0JBQ0Y7b0JBQ0Y7b0JBRUEsSUFBTVosbUJBQWdCLEdBQUc7b0JBRXpCTyxRQUFRTSxJQUFJLENBQUNKLGdCQUFnQkMsT0FBT1Y7Z0JBQ3RDO2dCQUVBYyxPQUFPQyxNQUFNLENBQUNQLGVBQWU7b0JBQzNCUixTQUFBQTtvQkFDQU8sU0FBQUE7b0JBQ0FELFdBQUFBO2dCQUNGO2dCQUVBLE9BQU9FO1lBQ1Q7OztXQTdDSWpCOztBQWdETnVCLE9BQU9DLE1BQU0sQ0FBQ3hCLFNBQVN5QixTQUFTLEVBQUVDLFlBQVM7QUFDM0NILE9BQU9DLE1BQU0sQ0FBQ3hCLFNBQVN5QixTQUFTLEVBQUVFLGNBQVc7QUFDN0NKLE9BQU9DLE1BQU0sQ0FBQ3hCLFNBQVN5QixTQUFTLEVBQUVHLGNBQVc7QUFDN0NMLE9BQU9DLE1BQU0sQ0FBQ3hCLFNBQVN5QixTQUFTLEVBQUVJLGNBQVc7QUFDN0NOLE9BQU9DLE1BQU0sQ0FBQ3hCLFNBQVN5QixTQUFTLEVBQUVLLGtCQUFlO0lBRWpELFdBQWUsQUFBQyxDQUFBLE9BQU81Qix5Q0FBUCxTQUFPQSxTQUFPLE1BQU02QixvQkFBUyxHQUFJQyxZQUFZLElBQUloQyJ9