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
Object.assign(Document.prototype, _selection.default);
var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? undefined : new Document();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG5cbiAgY3JlYXRlVGV4dE5vZGUoZGF0YSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpOyB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIG9mZlNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUpIHtcbiAgICAgICAgY29uc3QgeyBkb21FbGVtZW50IH0gPSBoYW5kbGVyRWxlbWVudCxcbiAgICAgICAgICAgICAgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICAgICAgeyBhY3RpdmVFbGVtZW50IH0gPSBjdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBldmVudFR5cGVcbiAgICB9KTtcblxuICAgIHJldHVybiBldmVudExpc3RlbmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIHNlbGVjdGlvbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlVGV4dE5vZGUiLCJkYXRhIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyIiwiZWxlbWVudCIsIm9uRXZlbnQiLCJTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSIsIm9mZlNlbGVjdGlvbkNoYW5nZSIsIm9mZkV2ZW50IiwiY3JlYXRlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwiY2FsbCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImtleU1peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiLCJjbGlja01peGlucyIsInNlbGVjdGlvbk1peGlucyIsIlVOREVGSU5FRCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUVBLFVBQThFLEdBQUc7Ozs7ZUFBakY7OzswREEvRHNCOzREQUNFOzREQUNBOzREQUNBO2dFQUNJO3lCQUVGOzBCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBQSxBQUFNQSx5QkFBTjthQUFNQTtnQ0FBQUE7UUFFRixJQUFJLENBQUNDLFVBQVUsR0FBR0MsVUFBVSxHQUFHOztrQkFGN0JGOztZQUtKRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWdCLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNHLFdBQVc7WUFBSTs7O1lBRXREQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsSUFBSTtnQkFBSSxPQUFPLElBQUksQ0FBQ0wsVUFBVSxDQUFDSSxjQUFjLENBQUNDO1lBQU87OztZQUVwRUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsc0JBQXNCLEVBQUVDLE9BQU87Z0JBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNDLHNDQUEwQixFQUFFSCx3QkFBd0JDO1lBQVUsRUFBRSxHQUFHOzs7WUFFcklHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJKLHNCQUFzQixFQUFFQyxPQUFPO2dCQUFJLElBQUksQ0FBQ0ksUUFBUSxDQUFDRixzQ0FBMEIsRUFBRUgsd0JBQXdCQztZQUFVLEVBQUUsR0FBRzs7O1lBRXZJSyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxTQUFTLEVBQUVDLE9BQU8sRUFBRVAsT0FBTzs7Z0JBQzdDLElBQUlRO2dCQUVKLElBQU1DLGlCQUFpQlQsU0FBUyxHQUFHO2dCQUVuQ1EsZ0JBQWdCLFNBQUNFO29CQUNmLElBQUlKLGNBQWNKLHNDQUEwQixFQUFFO3dCQUM1QyxJQUFNLEFBQUVWLGFBQWVpQixlQUFmakIsWUFDRixBQUFFbUIsZ0JBQWtCRCxNQUFsQkMsZUFDRixBQUFFQyxnQkFBa0JELGNBQWxCQzt3QkFFUixJQUFJcEIsZUFBZW9CLGVBQWU7NEJBQ2hDO3dCQUNGO29CQUNGO29CQUVBLElBQU1aLG1CQUFnQixHQUFHO29CQUV6Qk8sUUFBUU0sSUFBSSxDQUFDSixnQkFBZ0JDLE9BQU9WO2dCQUN0QztnQkFFQWMsT0FBT0MsTUFBTSxDQUFDUCxlQUFlO29CQUMzQlIsU0FBQUE7b0JBQ0FPLFNBQUFBO29CQUNBRCxXQUFBQTtnQkFDRjtnQkFFQSxPQUFPRTtZQUNUOzs7V0E3Q0lqQjs7QUFnRE51QixPQUFPQyxNQUFNLENBQUN4QixTQUFTeUIsU0FBUyxFQUFFQyxZQUFTO0FBQzNDSCxPQUFPQyxNQUFNLENBQUN4QixTQUFTeUIsU0FBUyxFQUFFRSxjQUFXO0FBQzdDSixPQUFPQyxNQUFNLENBQUN4QixTQUFTeUIsU0FBUyxFQUFFRyxjQUFXO0FBQzdDTCxPQUFPQyxNQUFNLENBQUN4QixTQUFTeUIsU0FBUyxFQUFFSSxjQUFXO0FBQzdDTixPQUFPQyxNQUFNLENBQUN4QixTQUFTeUIsU0FBUyxFQUFFSyxrQkFBZTtJQUVqRCxXQUFlLEFBQUMsQ0FBQSxPQUFPNUIseUNBQVAsU0FBT0EsU0FBTyxNQUFNNkIsb0JBQVMsR0FBSUMsWUFBWSxJQUFJaEMifQ==