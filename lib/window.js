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
var _constants = require("./constants");
var _eventTypes = require("./eventTypes");
var _scroll = require("./mixins/scroll");
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
    onScroll: _scroll.onScroll,
    offScroll: _scroll.offScroll
});
var _default = (typeof window === "undefined" ? "undefined" : _type_of(window)) === _constants.UNDEFINED ? undefined : new Window();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuL21peGlucy9mb2N1c1wiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgb25TY3JvbGwsIG9mZlNjcm9sbCB9IGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIGdldFNlbGVjdGlvbigpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRTZWxlY3Rpb24oKTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRVNJWkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRVNJWkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIl0sIm5hbWVzIjpbIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJnZXRET01FbGVtZW50IiwiYXNzaWduIiwic291cmNlcyIsIk9iamVjdCIsInRhcmdldCIsImdldFdpZHRoIiwiaW5uZXJXaWR0aCIsImdldEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJnZXRTZWxlY3Rpb24iLCJvblJlc2l6ZSIsInJlc2l6ZUhhbmRsZXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiUkVTSVpFX0VWRU5UX1RZUEUiLCJldmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZlJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcm90b3R5cGUiLCJrZXlNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJmb2N1c01peGlucyIsIm9uU2Nyb2xsIiwib2ZmU2Nyb2xsIiwiVU5ERUZJTkVEIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REEsVUFBMEUsR0FBRzs7OztlQUE3RTs7OzBEQTVEc0I7NERBQ0U7NERBQ0E7NERBQ0E7NERBQ0E7eUJBRUU7MEJBQ1E7c0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLHVCQUFOO2FBQU1BO2dDQUFBQTtRQUVGLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLEdBQUc7O2tCQUYzQkY7O1lBS0pHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBTyxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsVUFBSCxVQUFBLE9BQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsUUFBSCxRQUFBLFNBQUEsQ0FBQSxLQUFVOztvQkFHZkM7Z0JBRkEsSUFBTUMsU0FBUyxJQUFJLENBQUNOLFVBQVUsRUFBRSxHQUFHO2dCQUVuQ0ssQ0FBQUEsVUFBQUEsUUFBT0YsTUFBTSxPQUFiRSxTQUFBQTtvQkFBY0M7aUJBQW1CLENBQWpDRCxPQUFzQixxQkFBR0Q7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNQLFVBQVUsQ0FBQ1EsVUFBVTtZQUFFLEVBQUUsR0FBRzs7O1lBRXJEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNULFVBQVUsQ0FBQ1UsV0FBVztZQUFFLEVBQUUsR0FBRzs7O1lBRXZEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDWCxVQUFVLENBQUNZLFdBQVc7WUFBRSxFQUFHLEdBQUc7OztZQUUzREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ2IsVUFBVSxDQUFDYyxXQUFXO1lBQUUsRUFBRSxHQUFHOzs7WUFFM0RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsT0FBTyxJQUFJLENBQUNmLFVBQVUsQ0FBQ2UsWUFBWTtZQUFJOzs7WUFFeERDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdCLElBQU1DLFlBQVlDLDZCQUFpQixFQUM3QkMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFdBQVdGLGVBQWVDO2dCQUV0RSxJQUFJLENBQUNsQixVQUFVLENBQUNzQixnQkFBZ0IsQ0FBQ0gsV0FBV0U7WUFDOUM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sYUFBYSxFQUFFQyxPQUFPO2dCQUM5QixJQUFNQyxZQUFZQyw2QkFBaUIsRUFDN0JDLGdCQUFnQixJQUFJLENBQUNHLG1CQUFtQixDQUFDTCxXQUFXRixlQUFlQztnQkFFekUsSUFBSSxDQUFDbEIsVUFBVSxDQUFDd0IsbUJBQW1CLENBQUNMLFdBQVdFO1lBQ2pEOzs7V0FyQ0l0Qjs7QUF3Q05NLE9BQU9GLE1BQU0sQ0FBQ0osT0FBTzBCLFNBQVMsRUFBRUMsWUFBUztBQUN6Q3JCLE9BQU9GLE1BQU0sQ0FBQ0osT0FBTzBCLFNBQVMsRUFBRUUsY0FBVztBQUMzQ3RCLE9BQU9GLE1BQU0sQ0FBQ0osT0FBTzBCLFNBQVMsRUFBRUcsY0FBVztBQUMzQ3ZCLE9BQU9GLE1BQU0sQ0FBQ0osT0FBTzBCLFNBQVMsRUFBRUksY0FBVztBQUMzQ3hCLE9BQU9GLE1BQU0sQ0FBQ0osT0FBTzBCLFNBQVMsRUFBRUssY0FBVztBQUMzQ3pCLE9BQU9GLE1BQU0sQ0FBQ0osT0FBTzBCLFNBQVMsRUFBRTtJQUM5Qk0sVUFBQUEsZ0JBQVE7SUFDUkMsV0FBQUEsaUJBQVM7QUFDWDtJQUVBLFdBQWUsQUFBQyxDQUFBLE9BQU8vQix1Q0FBUCxTQUFPQSxPQUFLLE1BQU1nQyxvQkFBUyxHQUFJQyxZQUFZLElBQUluQyJ9