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
var _key = /*#__PURE__*/ _interopRequireDefault(require("./mixins/key"));
var _event = /*#__PURE__*/ _interopRequireDefault(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interopRequireDefault(require("./mixins/mouse"));
var _click = /*#__PURE__*/ _interopRequireDefault(require("./mixins/click"));
var _window = /*#__PURE__*/ _interopRequireDefault(require("./mixins/window"));
var _constants = require("./constants");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var Window = /*#__PURE__*/ function() {
    function Window() {
        _classCallCheck(this, Window);
        this.domElement = window; ///
    }
    _createClass(Window, [
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
                ].concat(_toConsumableArray(sources)));
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
var _default = (typeof window === "undefined" ? "undefined" : _typeof(window)) === _constants.UNDEFINED ? undefined : new Window();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHdpbmRvd01peGlucyBmcm9tIFwiLi9taXhpbnMvd2luZG93XCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgYWRkUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgcmVtb3ZlUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgd2luZG93TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cbiJdLCJuYW1lcyI6WyJXaW5kb3ciLCJkb21FbGVtZW50Iiwid2luZG93IiwiYXNzaWduIiwic291cmNlcyIsIk9iamVjdCIsInRhcmdldCIsImFkZFJlc2l6ZU9iamVjdCIsInJlbW92ZVJlc2l6ZU9iamVjdCIsImdldFdpZHRoIiwiaW5uZXJXaWR0aCIsImdldEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJnZXRTZWxlY3Rpb24iLCJwcm90b3R5cGUiLCJrZXlNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJ3aW5kb3dNaXhpbnMiLCJVTkRFRklORUQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQSxVQUEwRSxHQUFHOzs7O2VBQTdFOzs7d0RBeENzQjswREFDRTswREFDQTswREFDQTsyREFDQzt5QkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsdUJBMEJILEFBMUJIO2FBQU1BOzhCQUFBQTtRQUVGLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLEdBQUc7O2lCQUYzQkY7O1lBS0pHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFtQjtnQkFBWixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsVUFBSCxVQUFBLE9BQUEsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO29CQUFHQSxRQUFILFFBQUEsU0FBQSxDQUFBLEtBQVU7Z0JBQUQ7b0JBR2RDO2dCQUZBLElBQU1DLFNBQVMsSUFBSSxDQUFDTCxVQUFVLEVBQUUsR0FBRztnQkFFbkNJLENBQUFBLFVBQUFBLFFBQU9GLE1BQU0sQ0FBYkUsTUFBQUEsU0FBQUE7b0JBQWNDO2lCQUFtQixDQUFqQ0QsT0FBc0IsbUJBQUdEO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQixDQUFDLEVBQUUsR0FBRzs7O1lBRXhCQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCLENBQUMsRUFBRSxHQUFHOzs7WUFFM0JDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUFFLE9BQU8sSUFBSSxDQUFDUixVQUFVLENBQUNTLFVBQVU7WUFBRSxFQUFFLEdBQUc7OztZQUVyREMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQUUsT0FBTyxJQUFJLENBQUNWLFVBQVUsQ0FBQ1csV0FBVztZQUFFLEVBQUUsR0FBRzs7O1lBRXZEQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFBRSxPQUFPLElBQUksQ0FBQ1osVUFBVSxDQUFDYSxXQUFXO1lBQUUsRUFBRyxHQUFHOzs7WUFFM0RDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQUUsT0FBTyxJQUFJLENBQUNkLFVBQVUsQ0FBQ2UsV0FBVztZQUFFLEVBQUUsR0FBRzs7O1lBRTNEQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFBRSxPQUFPLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2dCLFlBQVk7WUFBSTs7O1dBdkJwRGpCOztBQTBCTkssT0FBT0YsTUFBTSxDQUFDSCxPQUFPa0IsU0FBUyxFQUFFQyxZQUFTO0FBQ3pDZCxPQUFPRixNQUFNLENBQUNILE9BQU9rQixTQUFTLEVBQUVFLGNBQVc7QUFDM0NmLE9BQU9GLE1BQU0sQ0FBQ0gsT0FBT2tCLFNBQVMsRUFBRUcsY0FBVztBQUMzQ2hCLE9BQU9GLE1BQU0sQ0FBQ0gsT0FBT2tCLFNBQVMsRUFBRUksY0FBVztBQUMzQ2pCLE9BQU9GLE1BQU0sQ0FBQ0gsT0FBT2tCLFNBQVMsRUFBRUssZUFBWTtJQUU1QyxXQUFlLEFBQUMsQ0FBQSxPQUFPckIsdUNBQVAsUUFBT0EsT0FBTSxBQUFELE1BQU1zQixvQkFBUyxHQUFJQyxZQUFZLElBQUl6QixRQUFRIn0=