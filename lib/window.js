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
    key: 'assign',
    value: function assign() {
      var target = this.domElement; ///

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      Object.assign.apply(Object, [target].concat(sources));
    }
  }, {
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

module.exports = new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();

  handler.call(window, width, height, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsia2V5TWl4aW5zIiwicmVxdWlyZSIsImV2ZW50TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJtb3VzZU1peGlucyIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzb3VyY2VzIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsImhhbmRsZXIiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIiLCJldmVudFR5cGVzIiwib24iLCJvZmYiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJlbGVtZW50Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGdCQUFSLENBRHBCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxnQkFBUixDQUZwQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZ0JBQVIsQ0FIcEI7O0lBS01JLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCLENBRFksQ0FDYztBQUMzQjs7Ozs2QkFFa0I7QUFDakIsVUFBTUMsU0FBUyxLQUFLRixVQUFwQixDQURpQixDQUNlOztBQURmLHdDQUFURyxPQUFTO0FBQVRBLGVBQVM7QUFBQTs7QUFHakJDLGFBQU9DLE1BQVAsZ0JBQWNILE1BQWQsU0FBeUJDLE9BQXpCO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0gsVUFBTCxDQUFnQk0sVUFBdkI7QUFBb0MsSyxDQUFDOzs7O2dDQUV0QztBQUFFLGFBQU8sS0FBS04sVUFBTCxDQUFnQk8sV0FBdkI7QUFBcUMsSyxDQUFDOzs7O21DQUVyQztBQUFFLGFBQU8sS0FBS1AsVUFBTCxDQUFnQlEsV0FBdkI7QUFBcUMsSyxDQUFFOzs7O29DQUV4QztBQUFFLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsV0FBdkI7QUFBcUMsSyxDQUFDOzs7OzZCQUUvQ0MsTyxFQUFTQyxNLEVBQWdFO0FBQUEsVUFBeERDLG1CQUF3RCx1RUFBbENDLGdDQUFrQzs7QUFDaEYsVUFBTUMsYUFBYSxRQUFuQjs7QUFFQSxXQUFLQyxFQUFMLENBQVFELFVBQVIsRUFBb0JKLE9BQXBCLEVBQTZCQyxNQUE3QixFQUFxQ0MsbUJBQXJDO0FBQ0Q7Ozs4QkFFU0YsTyxFQUFTQyxNLEVBQVE7QUFDekIsVUFBTUcsYUFBYSxRQUFuQjs7QUFFQSxXQUFLRSxHQUFMLENBQVNGLFVBQVQsRUFBcUJKLE9BQXJCLEVBQThCQyxNQUE5QjtBQUNEOzs7Ozs7QUFHSFAsT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0N2QixTQUFoQztBQUNBVSxPQUFPQyxNQUFQLENBQWNOLE9BQU9rQixTQUFyQixFQUFnQ3JCLFdBQWhDO0FBQ0FRLE9BQU9DLE1BQVAsQ0FBY04sT0FBT2tCLFNBQXJCLEVBQWdDcEIsV0FBaEM7QUFDQU8sT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0NuQixXQUFoQzs7QUFFQW9CLE9BQU9DLE9BQVAsR0FBaUIsSUFBSXBCLE1BQUosRUFBakIsQyxDQUFnQzs7QUFFaEMsU0FBU2MsZ0NBQVQsQ0FBMENILE9BQTFDLEVBQW1EVSxLQUFuRCxFQUEwREMsT0FBMUQsRUFBbUU7QUFDakUsTUFBTXBCLFNBQVNvQixPQUFmO0FBQUEsTUFBd0I7QUFDbEJDLFVBQVFyQixPQUFPc0IsUUFBUCxFQURkO0FBQUEsTUFFTUMsU0FBU3ZCLE9BQU93QixTQUFQLEVBRmY7O0FBSUFmLFVBQVFnQixJQUFSLENBQWF6QixNQUFiLEVBQXFCcUIsS0FBckIsRUFBNEJFLE1BQTVCLEVBQW9DSixLQUFwQztBQUNEIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga2V5TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMva2V5JyksXG4gICAgICBldmVudE1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2V2ZW50JyksXG4gICAgICBjbGlja01peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cbiAgXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9ICdyZXNpemUnO1xuICAgIFxuICAgIHRoaXMub24oZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyLCBvYmplY3QpIHtcbiAgICBjb25zdCBldmVudFR5cGVzID0gJ3Jlc2l6ZSc7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudCwgLy8vXG4gICAgICAgIHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRIZWlnaHQoKTtcbiAgXG4gIGhhbmRsZXIuY2FsbCh3aW5kb3csIHdpZHRoLCBoZWlnaHQsIGV2ZW50KTtcbn1cbiJdfQ==