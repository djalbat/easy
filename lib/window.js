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
var _window = /*#__PURE__*/ _interop_require_default(require("./mixins/window"));
var _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
var _constants = require("./constants");
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
            key: "addResizeObject",
            value: function addResizeObject() {} ///
        },
        {
            key: "removeResizeObject",
            value: function removeResizeObject() {} ///
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
        }
    ]);
    return Window;
}();
Object.assign(Window.prototype, _key.default);
Object.assign(Window.prototype, _event.default);
Object.assign(Window.prototype, _mouse.default);
Object.assign(Window.prototype, _click.default);
Object.assign(Window.prototype, _window.default);
Object.assign(Window.prototype, _customEvent.default);
var _default = (typeof window === "undefined" ? "undefined" : _type_of(window)) === _constants.UNDEFINED ? undefined : new Window();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHdpbmRvd01peGlucyBmcm9tIFwiLi9taXhpbnMvd2luZG93XCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgYWRkUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgcmVtb3ZlUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgd2luZG93TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIl0sIm5hbWVzIjpbIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJhc3NpZ24iLCJzb3VyY2VzIiwiT2JqZWN0IiwidGFyZ2V0IiwiYWRkUmVzaXplT2JqZWN0IiwicmVtb3ZlUmVzaXplT2JqZWN0IiwiZ2V0V2lkdGgiLCJpbm5lcldpZHRoIiwiZ2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJnZXRTY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImdldFNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImdldFNlbGVjdGlvbiIsInByb3RvdHlwZSIsImtleU1peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiLCJjbGlja01peGlucyIsIndpbmRvd01peGlucyIsImN1c3RvbUV2ZW50TWl4aW5zIiwiVU5ERUZJTkVEIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0Q0EsVUFBMEUsR0FBRzs7OztlQUE3RTs7OzBEQTFDc0I7NERBQ0U7NERBQ0E7NERBQ0E7NkRBQ0M7a0VBQ0s7eUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHVCQUFELEFBQUw7YUFBTUE7Z0NBQUFBO1FBRUYsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsR0FBRzs7a0JBRjNCRjs7WUFLSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFPLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxVQUFILFVBQUEsT0FBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxRQUFILFFBQUEsU0FBQSxDQUFBLEtBQVU7O29CQUdmQztnQkFGQSxJQUFNQyxTQUFTLElBQUksQ0FBQ0wsVUFBVSxFQUFFLEdBQUc7Z0JBRW5DSSxDQUFBQSxVQUFBQSxRQUFPRixNQUFNLENBQWJFLE1BQUFBLFNBQUFBO29CQUFjQztpQkFBbUIsQ0FBakNELE9BQXNCLHFCQUFHRDtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUIsRUFBRSxHQUFHOzs7WUFFeEJDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0IsRUFBRSxHQUFHOzs7WUFFM0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxVQUFVO1lBQUUsRUFBRSxHQUFHOzs7WUFFckRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ1YsVUFBVSxDQUFDVyxXQUFXO1lBQUUsRUFBRSxHQUFHOzs7WUFFdkRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsT0FBTyxJQUFJLENBQUNaLFVBQVUsQ0FBQ2EsV0FBVztZQUFFLEVBQUcsR0FBRzs7O1lBRTNEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDZCxVQUFVLENBQUNlLFdBQVc7WUFBRSxFQUFFLEdBQUc7OztZQUUzREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2dCLFlBQVk7WUFBSTs7O1dBdkJwRGpCOztBQTBCTkssT0FBT0YsTUFBTSxDQUFDSCxPQUFPa0IsU0FBUyxFQUFFQyxZQUFTO0FBQ3pDZCxPQUFPRixNQUFNLENBQUNILE9BQU9rQixTQUFTLEVBQUVFLGNBQVc7QUFDM0NmLE9BQU9GLE1BQU0sQ0FBQ0gsT0FBT2tCLFNBQVMsRUFBRUcsY0FBVztBQUMzQ2hCLE9BQU9GLE1BQU0sQ0FBQ0gsT0FBT2tCLFNBQVMsRUFBRUksY0FBVztBQUMzQ2pCLE9BQU9GLE1BQU0sQ0FBQ0gsT0FBT2tCLFNBQVMsRUFBRUssZUFBWTtBQUM1Q2xCLE9BQU9GLE1BQU0sQ0FBQ0gsT0FBT2tCLFNBQVMsRUFBRU0sb0JBQWlCO0lBRWpELFdBQWUsQUFBQyxDQUFBLE9BQU90Qix1Q0FBUCxTQUFPQSxPQUFLLE1BQU11QixvQkFBUyxHQUFJQyxZQUFZLElBQUkxQiJ9