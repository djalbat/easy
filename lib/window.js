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
var _focus = /*#__PURE__*/ _interop_require_default(require("./mixins/focus"));
var _scroll = /*#__PURE__*/ _interop_require_default(require("./mixins/scroll"));
var _constants = require("./constants");
var _eventTypes = require("./eventTypes");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var onScroll = _scroll.default.onScroll, offScroll = _scroll.default.offScroll;
var Window = /*#__PURE__*/ function() {
    function Window() {
        _class_call_check(this, Window);
        this.domElement = window; ///
    }
    _create_class(Window, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "assign",
            value: function assign() {
                for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++){
                    sources[_key] = arguments[_key];
                }
                var _Object;
                var target = this.domElement; ///
                (_Object = Object).assign.apply(_Object, [
                    target
                ].concat(_to_consumable_array(sources)));
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                return this.domElement.innerWidth;
            } ///
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.domElement.innerHeight;
            } ///
        },
        {
            key: "getScrollTop",
            value: function getScrollTop() {
                return this.domElement.pageYOffset;
            } ///
        },
        {
            key: "getScrollLeft",
            value: function getScrollLeft() {
                return this.domElement.pageXOffset;
            } ///
        },
        {
            key: "getSelection",
            value: function getSelection() {
                return this.domElement.getSelection();
            }
        },
        {
            key: "onResize",
            value: function onResize(resizeHandler, element) {
                var eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.addEventListener(eventType, resizeHandler, element);
                this.domElement.addEventListener(eventType, eventListener);
            }
        },
        {
            key: "offResize",
            value: function offResize(resizeHandler, element) {
                var eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.removeEventListener(eventType, resizeHandler, element);
                this.domElement.removeEventListener(eventType, eventListener);
            }
        }
    ]);
    return Window;
}();
Object.assign(Window.prototype, _key.default);
Object.assign(Window.prototype, _event.default);
Object.assign(Window.prototype, _mouse.default);
Object.assign(Window.prototype, _click.default);
Object.assign(Window.prototype, _focus.default);
Object.assign(Window.prototype, {
    onScroll: onScroll,
    offScroll: offScroll
}); ///
var _default = (typeof window === "undefined" ? "undefined" : _type_of(window)) === _constants.UNDEFINED ? undefined : new Window();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuL21peGlucy9mb2N1c1wiO1xuaW1wb3J0IHNjcm9sbE1peGlucyBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgb25TY3JvbGwsIG9mZlNjcm9sbCB9ID0gc2Nyb2xsTWl4aW5zO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFU0laRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFU0laRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIHsgb25TY3JvbGwsIG9mZlNjcm9sbCB9KTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iXSwibmFtZXMiOlsib25TY3JvbGwiLCJzY3JvbGxNaXhpbnMiLCJvZmZTY3JvbGwiLCJXaW5kb3ciLCJkb21FbGVtZW50Iiwid2luZG93IiwiZ2V0RE9NRWxlbWVudCIsImFzc2lnbiIsInNvdXJjZXMiLCJPYmplY3QiLCJ0YXJnZXQiLCJnZXRXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRIZWlnaHQiLCJpbm5lckhlaWdodCIsImdldFNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiZ2V0U2VsZWN0aW9uIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZSZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwiZm9jdXNNaXhpbnMiLCJVTkRFRklORUQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZEQSxVQUEwRSxHQUFHOzs7O2VBQTdFOzs7MERBM0RzQjs0REFDRTs0REFDQTs0REFDQTs0REFDQTs2REFDQzt5QkFFQzswQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQVFBLFdBQXdCQyxlQUFZLENBQXBDRCxVQUFVRSxZQUFjRCxlQUFZLENBQTFCQztBQUVsQixJQUFBLEFBQU1DLHVCQUFOO2FBQU1BO2dDQUFBQTtRQUVGLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxR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