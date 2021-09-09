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
var _Object;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwibmFtZXMiOlsia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwid2luZG93TWl4aW5zIiwiVU5ERUZJTkVEIiwiV2luZG93IiwiY29uc3RydWN0b3IiLCJkb21FbGVtZW50Iiwid2luZG93IiwiYXNzaWduIiwic291cmNlcyIsInRhcmdldCIsIk9iamVjdCIsImFkZFJlc2l6ZU9iamVjdCIsInJlbW92ZVJlc2l6ZU9iamVjdCIsImdldFdpZHRoIiwiaW5uZXJXaWR0aCIsImdldEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBYyxDQUFkLElBQWM7QUFDWixHQUFnQixDQUFoQixNQUFnQjtBQUNoQixHQUFnQixDQUFoQixNQUFnQjtBQUNoQixHQUFnQixDQUFoQixNQUFnQjtBQUNmLEdBQWlCLENBQWpCLE9BQWlCO0FBRWhCLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVbkMsT0FBTTtJQVJKLE1BQU0saUJBQVosUUFBUTthQUFGLE1BQU07OEJBQU4sTUFBTTtRQUVSLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7aUJBRjNCLE1BQU07O1lBS1YsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBYSxDQUFDO2dCQUFiLEdBQUcsQ0FBSCxHQUFVLENBQVYsSUFBVSxHQUFWLFNBQVUsQ0FBVixNQUFVLEVBQVAsT0FBTyxHQUFWLEdBQVUsT0FBVixJQUFVLEdBQVYsSUFBVSxHQUFWLENBQVUsRUFBVixJQUFVLEdBQVYsSUFBVSxFQUFWLElBQVUsR0FBVixDQUFDO29CQUFFLE9BQU8sQ0FBVixJQUFVLElBQVYsU0FBVSxDQUFWLElBQVU7Z0JBQUQsQ0FBQztnQkFDZixHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2lCQUVuQyxPQUFNLEdBQU4sTUFBTSxFQUFDLE1BQU0sQ0FBYixLQUFpQyxDQUFqQyxPQUFNLEVBQU4sQ0FBQztvQkFBYSxNQUFNO2dCQUFZLENBQUMsQ0FBakMsTUFBaUMsb0JBQVIsT0FBTztZQUNsQyxDQUFDOzs7WUFFRCxHQUFlLEdBQWYsZUFBZTttQkFBZixRQUFRLENBQVIsZUFBZSxHQUFHLENBQUM7WUFBQSxDQUFDLEFBQUMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzs7WUFFeEIsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLEdBQUcsQ0FBQztZQUFBLENBQUMsQUFBQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7OztZQUUzQixHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtZQUFFLENBQUMsQUFBQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7OztZQUVyRCxHQUFTLEdBQVQsU0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztZQUFFLENBQUMsQUFBQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7OztZQUV2RCxHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztZQUFFLENBQUMsQUFBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7OztZQUUzRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztZQUFFLENBQUMsQUFBQyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7OztXQXJCdkQsTUFBTTs7QUF3QlosTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQWhDUixJQUFjO0FBaUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBaENOLE1BQWdCO0FBaUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBaENOLE1BQWdCO0FBaUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBaENOLE1BQWdCO0FBaUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBaENMLE9BQWlCO3VCQWtDbkIsTUFBTSxpQ0FBYixPQUFhLENBQU4sTUFBTSxPQWhDSCxVQUFhLGFBZ0NRLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSJ9