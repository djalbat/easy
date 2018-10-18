'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyMixins = require('./mixins/key'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    mouseMixins = require('./mixins/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window; ///
  }

  _createClass(Window, [{
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }, {
    key: 'onResize',
    value: function onResize(handler, object) {
      var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;

      var eventTypes = 'resize';

      this.on(eventTypes, handler, object, intermediateHandler);
    }
  }, {
    key: 'offResize',
    value: function offResize(handler, object) {
      var eventTypes = 'resize';

      this.off(eventTypes, handler, object);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, mouseMixins);

module.exports = typeof window === 'undefined' ? undefined : new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();

  handler.call(window, width, height, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsia2V5TWl4aW5zIiwicmVxdWlyZSIsImV2ZW50TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJtb3VzZU1peGlucyIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaGFuZGxlciIsIm9iamVjdCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlciIsImV2ZW50VHlwZXMiLCJvbiIsIm9mZiIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJldmVudCIsImVsZW1lbnQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGdCQUFSLENBRnBCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxnQkFBUixDQUhwQjs7SUFLTUksTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsVUFBTCxHQUFrQkMsTUFBbEIsQ0FEWSxDQUNjO0FBQzNCOzs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRCxVQUFMLENBQWdCRSxVQUF2QjtBQUFvQyxLLENBQUM7Ozs7Z0NBRXRDO0FBQUUsYUFBTyxLQUFLRixVQUFMLENBQWdCRyxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7bUNBRXJDO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxXQUF2QjtBQUFxQyxLLENBQUU7Ozs7b0NBRXhDO0FBQUUsYUFBTyxLQUFLSixVQUFMLENBQWdCSyxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7NkJBRS9DQyxPLEVBQVNDLE0sRUFBZ0U7QUFBQSxVQUF4REMsbUJBQXdELHVFQUFsQ0MsZ0NBQWtDOztBQUNoRixVQUFNQyxhQUFhLFFBQW5COztBQUVBLFdBQUtDLEVBQUwsQ0FBUUQsVUFBUixFQUFvQkosT0FBcEIsRUFBNkJDLE1BQTdCLEVBQXFDQyxtQkFBckM7QUFDRDs7OzhCQUVTRixPLEVBQVNDLE0sRUFBUTtBQUN6QixVQUFNRyxhQUFhLFFBQW5COztBQUVBLFdBQUtFLEdBQUwsQ0FBU0YsVUFBVCxFQUFxQkosT0FBckIsRUFBOEJDLE1BQTlCO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ3JCLFNBQWhDO0FBQ0FtQixPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ25CLFdBQWhDO0FBQ0FpQixPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ2xCLFdBQWhDO0FBQ0FnQixPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ2pCLFdBQWhDOztBQUVBa0IsT0FBT0MsT0FBUCxHQUFrQixPQUFPaEIsTUFBUCxLQUFrQixXQUFuQixHQUFrQ2lCLFNBQWxDLEdBQThDLElBQUluQixNQUFKLEVBQS9ELEMsQ0FBOEU7O0FBRTlFLFNBQVNVLGdDQUFULENBQTBDSCxPQUExQyxFQUFtRGEsS0FBbkQsRUFBMERDLE9BQTFELEVBQW1FO0FBQ2pFLE1BQU1uQixTQUFTbUIsT0FBZjtBQUFBLE1BQXdCO0FBQ2xCQyxVQUFRcEIsT0FBT3FCLFFBQVAsRUFEZDtBQUFBLE1BRU1DLFNBQVN0QixPQUFPdUIsU0FBUCxFQUZmOztBQUlBbEIsVUFBUW1CLElBQVIsQ0FBYXhCLE1BQWIsRUFBcUJvQixLQUFyQixFQUE0QkUsTUFBNUIsRUFBb0NKLEtBQXBDO0FBQ0QiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBrZXlNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9rZXknKSxcbiAgICAgIGV2ZW50TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvbW91c2UnKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9ICdyZXNpemUnO1xuICAgIFxuICAgIHRoaXMub24oZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyLCBvYmplY3QpIHtcbiAgICBjb25zdCBldmVudFR5cGVzID0gJ3Jlc2l6ZSc7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQsIC8vL1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB3aW5kb3cuZ2V0SGVpZ2h0KCk7XG4gIFxuICBoYW5kbGVyLmNhbGwod2luZG93LCB3aWR0aCwgaGVpZ2h0LCBldmVudCk7XG59XG4iXX0=