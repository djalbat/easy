"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _key = _interopRequireDefault(require("./mixins/key"));
var _event = _interopRequireDefault(require("./mixins/event"));
var _mouse = _interopRequireDefault(require("./mixins/mouse"));
var _click = _interopRequireDefault(require("./mixins/click"));
var _resize = _interopRequireDefault(require("./mixins/resize"));
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
var onResize = _resize.default.onResize, offResize = _resize.default.offResize;
var Window1 = /*#__PURE__*/ function() {
    function Window1() {
        _classCallCheck(this, Window1);
        this.domElement = window; ///
    }
    _createClass(Window1, [
        {
            key: "assign",
            value: function assign() {
                for(var _len = arguments.length, sources = new Array(_len), _key1 = 0; _key1 < _len; _key1++){
                    sources[_key1] = arguments[_key1];
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
            }
        },
        {
            key: "removeResizeObject",
            value: function removeResizeObject() {
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                return this.domElement.innerWidth;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.domElement.innerHeight;
            }
        },
        {
            key: "getScrollTop",
            value: function getScrollTop() {
                return this.domElement.pageYOffset;
            }
        },
        {
            key: "getScrollLeft",
            value: function getScrollLeft() {
                return this.domElement.pageXOffset;
            }
        }
    ]);
    return Window1;
}();
Object.assign(Window1.prototype, _key.default);
Object.assign(Window1.prototype, _event.default);
Object.assign(Window1.prototype, _mouse.default);
Object.assign(Window1.prototype, _click.default);
Object.assign(Window1.prototype, {
    onResize: onResize,
    offResize: offResize
}); ///
var _default = _typeof(window) === _constants.UNDEFINED ? undefined : new Window1();
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IG9uUmVzaXplLCBvZmZSZXNpemUgfSA9IHJlc2l6ZU1peGlucztcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIGFkZFJlc2l6ZU9iamVjdCgpIHt9IC8vL1xuXG4gIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHt9IC8vL1xuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9KTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxJQUFjO0lBQ1osTUFBZ0I7SUFDaEIsTUFBZ0I7SUFDaEIsTUFBZ0I7SUFDZixPQUFpQjtJQUVoQixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZbkMsT0FBTTtJQVZGLFFBQVEsR0FKUyxPQUFpQixTQUlsQyxRQUFRLEVBQUUsU0FBUyxHQUpGLE9BQWlCLFNBSXhCLFNBQVM7SUFFckIsT0FBTTthQUFOLE9BQU07OEJBQU4sT0FBTTthQUVILFVBQVUsR0FBRyxNQUFNLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztpQkFGM0IsT0FBTTs7WUFLVixHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNO3dCQUFDLElBQVUsR0FBVixTQUFVLENBQVYsTUFBVSxFQUFQLE9BQU8sYUFBVixJQUFVLEdBQVYsS0FBVSxHQUFWLENBQVUsRUFBVixLQUFVLEdBQVYsSUFBVSxFQUFWLEtBQVU7b0JBQVAsT0FBTyxDQUFWLEtBQVUsSUFBVixTQUFVLENBQVYsS0FBVTs7b0JBQ1QsTUFBTSxRQUFRLFVBQVUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7aUJBRW5DLE9BQU0sR0FBTixNQUFNLEVBQUMsTUFBTSxDQUFiLEtBQWlDLENBQWpDLE9BQU07b0JBQVEsTUFBTTtrQkFBcEIsTUFBaUMsb0JBQVIsT0FBTzs7OztZQUdsQyxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlOzs7O1lBRWYsR0FBa0IsR0FBbEIsa0JBQWtCOzRCQUFsQixrQkFBa0I7Ozs7WUFFbEIsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTs0QkFBaUIsVUFBVSxDQUFDLFVBQVU7Ozs7WUFFOUMsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFBaUIsVUFBVSxDQUFDLFdBQVc7Ozs7WUFFaEQsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWTs0QkFBaUIsVUFBVSxDQUFDLFdBQVc7Ozs7WUFFbkQsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTs0QkFBaUIsVUFBVSxDQUFDLFdBQVc7Ozs7V0FyQmhELE9BQU07O0FBd0JaLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTSxDQUFDLFNBQVMsRUFsQ1IsSUFBYztBQW1DcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFNLENBQUMsU0FBUyxFQWxDTixNQUFnQjtBQW1DeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFNLENBQUMsU0FBUyxFQWxDTixNQUFnQjtBQW1DeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFNLENBQUMsU0FBUyxFQWxDTixNQUFnQjtBQW1DeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFNLENBQUMsU0FBUztJQUFJLFFBQVEsRUFBUixRQUFRO0lBQUUsU0FBUyxFQUFULFNBQVM7R0FBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7ZUFFN0MsT0FBYSxDQUFOLE1BQU0sTUFsQ0gsVUFBYSxhQWtDUSxTQUFTLE9BQU8sT0FBTSJ9