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
            key: "getSelection",
            value: function getSelection() {
                return this.domElement.getSelection();
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
            } ///
        },
        {
            key: "offSelectionChange",
            value: function offSelectionChange(selectionChangeHandler, element) {
                this.offEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
            } ///
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
var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? undefined : new Document();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG5cbiAgY3JlYXRlUmFuZ2UoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY3JlYXRlUmFuZ2UoKTsgfVxuXG4gIGNyZWF0ZVRleHROb2RlKGRhdGEpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTsgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuICBvZmZTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuICBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICAgIGxldCBldmVudExpc3RlbmVyO1xuXG4gICAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICAgIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHsgZG9tRWxlbWVudCB9ID0gaGFuZGxlckVsZW1lbnQsXG4gICAgICAgICAgICAgIHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBoYW5kbGVyLFxuICAgICAgZXZlbnRUeXBlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiBkb2N1bWVudCA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBEb2N1bWVudCgpOyAgLy8vXG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRET01FbGVtZW50IiwiZ2V0U2VsZWN0aW9uIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVUZXh0Tm9kZSIsImRhdGEiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGlvbkNoYW5nZUhhbmRsZXIiLCJlbGVtZW50Iiwib25FdmVudCIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwib2ZmU2VsZWN0aW9uQ2hhbmdlIiwib2ZmRXZlbnQiLCJjcmVhdGVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImFjdGl2ZUVsZW1lbnQiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwiVU5ERUZJTkVEIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpRUEsVUFBOEUsR0FBRzs7OztlQUFqRjs7OzBEQS9Ec0I7NERBQ0U7NERBQ0E7NERBQ0E7eUJBRUU7MEJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFBLEFBQU1BLHlCQUFOO2FBQU1BO2dDQUFBQTtRQUVGLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxVQUFVLEdBQUc7O2tCQUY3QkY7O1lBS0pHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csWUFBWTtZQUFJOzs7WUFFeERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBZ0IsT0FBTyxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ksV0FBVztZQUFJOzs7WUFFdERDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxJQUFJO2dCQUFJLE9BQU8sSUFBSSxDQUFDTixVQUFVLENBQUNLLGNBQWMsQ0FBQ0M7WUFBTzs7O1lBRXBFQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxzQkFBc0IsRUFBRUMsT0FBTztnQkFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0Msc0NBQTBCLEVBQUVILHdCQUF3QkM7WUFBVSxFQUFFLEdBQUc7OztZQUVySUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkosc0JBQXNCLEVBQUVDLE9BQU87Z0JBQUksSUFBSSxDQUFDSSxRQUFRLENBQUNGLHNDQUEwQixFQUFFSCx3QkFBd0JDO1lBQVUsRUFBRSxHQUFHOzs7WUFFdklLLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFNBQVMsRUFBRUMsT0FBTyxFQUFFUCxPQUFPOztnQkFDN0MsSUFBSVE7Z0JBRUosSUFBTUMsaUJBQWlCVCxTQUFTLEdBQUc7Z0JBRW5DUSxnQkFBZ0IsU0FBQ0U7b0JBQ2YsSUFBSUosY0FBY0osc0NBQTBCLEVBQUU7d0JBQzVDLElBQU0sQUFBRVgsYUFBZWtCLGVBQWZsQixZQUNGLEFBQUVvQixnQkFBa0JELE1BQWxCQyxlQUNGLEFBQUVDLGdCQUFrQkQsY0FBbEJDO3dCQUVSLElBQUlyQixlQUFlcUIsZUFBZTs0QkFDaEM7d0JBQ0Y7b0JBQ0Y7b0JBRUEsSUFBTVosbUJBQWdCLEdBQUc7b0JBRXpCTyxRQUFRTSxJQUFJLENBQUNKLGdCQUFnQkMsT0FBT1Y7Z0JBQ3RDO2dCQUVBYyxPQUFPQyxNQUFNLENBQUNQLGVBQWU7b0JBQzNCUixTQUFBQTtvQkFDQU8sU0FBQUE7b0JBQ0FELFdBQUFBO2dCQUNGO2dCQUVBLE9BQU9FO1lBQ1Q7OztXQS9DSWxCOztBQWtETndCLE9BQU9DLE1BQU0sQ0FBQ3pCLFNBQVMwQixTQUFTLEVBQUVDLFlBQVM7QUFDM0NILE9BQU9DLE1BQU0sQ0FBQ3pCLFNBQVMwQixTQUFTLEVBQUVFLGNBQVc7QUFDN0NKLE9BQU9DLE1BQU0sQ0FBQ3pCLFNBQVMwQixTQUFTLEVBQUVHLGNBQVc7QUFDN0NMLE9BQU9DLE1BQU0sQ0FBQ3pCLFNBQVMwQixTQUFTLEVBQUVJLGNBQVc7SUFFN0MsV0FBZSxBQUFDLENBQUEsT0FBTzVCLHlDQUFQLFNBQU9BLFNBQU8sTUFBTTZCLG9CQUFTLEdBQUlDLFlBQVksSUFBSWhDIn0=