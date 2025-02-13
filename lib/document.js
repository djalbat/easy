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
            key: "getInnerWidth",
            value: function getInnerWidth() {
                return this.domElement.clientWidth;
            } ///
        },
        {
            key: "getInnerHeight",
            value: function getInnerHeight() {
                return this.domElement.clientHeight;
            } ///
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
Object.assign(Document.prototype, _selection.default);
var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? undefined : new Document();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRJbm5lcldpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9IC8vL1xuXG4gIGdldElubmVySGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfSAvLy9cblxuICBnZXRTZWxlY3Rpb24oKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7IH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG5cbiAgY3JlYXRlVGV4dE5vZGUoZGF0YSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpOyB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIG9mZlNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUpIHtcbiAgICAgICAgY29uc3QgeyBkb21FbGVtZW50IH0gPSBoYW5kbGVyRWxlbWVudCxcbiAgICAgICAgICAgICAgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICAgICAgeyBhY3RpdmVFbGVtZW50IH0gPSBjdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBldmVudFR5cGVcbiAgICB9KTtcblxuICAgIHJldHVybiBldmVudExpc3RlbmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIHNlbGVjdGlvbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RE9NRWxlbWVudCIsImdldElubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImdldElubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZ2V0U2VsZWN0aW9uIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVUZXh0Tm9kZSIsImRhdGEiLCJvblNlbGVjdGlvbkNoYW5nZSIsInNlbGVjdGlvbkNoYW5nZUhhbmRsZXIiLCJlbGVtZW50Iiwib25FdmVudCIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwib2ZmU2VsZWN0aW9uQ2hhbmdlIiwib2ZmRXZlbnQiLCJjcmVhdGVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImFjdGl2ZUVsZW1lbnQiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwic2VsZWN0aW9uTWl4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