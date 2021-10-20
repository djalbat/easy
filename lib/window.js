"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _key = _interopRequireDefault(require("./mixins/key"));
var _event = _interopRequireDefault(require("./mixins/event"));
var _mouse = _interopRequireDefault(require("./mixins/mouse"));
var _click = _interopRequireDefault(require("./mixins/click"));
var _window = _interopRequireDefault(require("./mixins/window"));
var _constants = require("./constants");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
            value: function addResizeObject() {
            } ///
        },
        {
            key: "removeResizeObject",
            value: function removeResizeObject() {
            } ///
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHdpbmRvd01peGlucyBmcm9tIFwiLi9taXhpbnMvd2luZG93XCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgYWRkUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgcmVtb3ZlUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgd2luZG93TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cbiJdLCJuYW1lcyI6WyJXaW5kb3ciLCJkb21FbGVtZW50Iiwid2luZG93IiwiYXNzaWduIiwic291cmNlcyIsIk9iamVjdCIsInRhcmdldCIsImFkZFJlc2l6ZU9iamVjdCIsInJlbW92ZVJlc2l6ZU9iamVjdCIsImdldFdpZHRoIiwiaW5uZXJXaWR0aCIsImdldEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBYyxDQUFkLElBQWM7QUFDWixHQUFnQixDQUFoQixNQUFnQjtBQUNoQixHQUFnQixDQUFoQixNQUFnQjtBQUNoQixHQUFnQixDQUFoQixNQUFnQjtBQUNmLEdBQWlCLENBQWpCLE9BQWlCO0FBRWhCLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakNBLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNOzhCQUFOQSxNQUFNO1FBRVIsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLE1BQU0sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O2lCQUYzQkYsTUFBTTs7WUFLVkcsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1B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