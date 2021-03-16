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
var _Object;
var onResize = _resize.default.onResize, offResize = _resize.default.offResize;
var Window1 = function() {
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
var _default = typeof window === "undefined" ? undefined : new Window1();
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5cbmNvbnN0IHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9ID0gcmVzaXplTWl4aW5zO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgYWRkUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgcmVtb3ZlUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgeyBvblJlc2l6ZSwgb2ZmUmVzaXplIH0pOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxJQUFBO0lBQ0EsTUFBQTtJQUNBLE1BQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBWUEsT0FBQTtJQVZBLFFBQUEsR0FGQSxPQUFBLFNBRUEsUUFBQSxFQUFBLFNBQUEsR0FGQSxPQUFBLFNBRUEsU0FBQTtJQUVBLE9BQUE7YUFBQSxPQUFBOzhCQUFBLE9BQUE7YUFFQSxVQUFBLEdBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBOztpQkFGQSxPQUFBOztBQUtBLGVBQUEsR0FBQSxNQUFBOzRCQUFBLE1BQUE7d0JBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsT0FBQSxhQUFBLElBQUEsR0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxJQUFBLEVBQUEsS0FBQTtBQUFBLDJCQUFBLENBQUEsS0FBQSxJQUFBLFNBQUEsQ0FBQSxLQUFBOztvQkFDQSxNQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO2lCQUVBLE9BQUEsR0FBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxPQUFBO0FBQUEsMEJBQUE7a0JBQUEsTUFBQSxvQkFBQSxPQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGVBQUE7NEJBQUEsZUFBQTs7OztBQUVBLGVBQUEsR0FBQSxrQkFBQTs0QkFBQSxrQkFBQTs7OztBQUVBLGVBQUEsR0FBQSxRQUFBOzRCQUFBLFFBQUE7NEJBQUEsVUFBQSxDQUFBLFVBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsU0FBQTs0QkFBQSxTQUFBOzRCQUFBLFVBQUEsQ0FBQSxXQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFlBQUE7NEJBQUEsWUFBQTs0QkFBQSxVQUFBLENBQUEsV0FBQTs7OztBQUVBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7NEJBQUEsVUFBQSxDQUFBLFdBQUE7Ozs7V0FyQkEsT0FBQTs7QUF3QkEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxFQWhDQSxJQUFBO0FBaUNBLE1BQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsRUFoQ0EsTUFBQTtBQWlDQSxNQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLEVBaENBLE1BQUE7QUFpQ0EsTUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxFQWhDQSxNQUFBO0FBaUNBLE1BQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLFNBQUE7QUFBQSxZQUFBLEVBQUEsUUFBQTtBQUFBLGFBQUEsRUFBQSxTQUFBO0dBQUEsQ0FBQSxFQUFBLENBQUE7c0JBRUEsTUFBQSxNQUFBLFNBQUEsSUFBQSxTQUFBLE9BQUEsT0FBQSJ9