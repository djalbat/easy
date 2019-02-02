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

module.exports = typeof window === 'undefined' ? undefined : new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();

  handler.call(window, width, height, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsia2V5TWl4aW5zIiwicmVxdWlyZSIsImV2ZW50TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJtb3VzZU1peGlucyIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzb3VyY2VzIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsImhhbmRsZXIiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIiLCJldmVudFR5cGVzIiwib24iLCJvZmYiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJlbGVtZW50Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGdCQUFSLENBRHBCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxnQkFBUixDQUZwQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZ0JBQVIsQ0FIcEI7O0lBS01JLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCLENBRFksQ0FDYztBQUMzQjs7Ozs2QkFFa0I7QUFDakIsVUFBTUMsU0FBUyxLQUFLRixVQUFwQixDQURpQixDQUNlOztBQURmLHdDQUFURyxPQUFTO0FBQVRBLGVBQVM7QUFBQTs7QUFHakJDLGFBQU9DLE1BQVAsZ0JBQWNILE1BQWQsU0FBeUJDLE9BQXpCO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0gsVUFBTCxDQUFnQk0sVUFBdkI7QUFBb0MsSyxDQUFDOzs7O2dDQUV0QztBQUFFLGFBQU8sS0FBS04sVUFBTCxDQUFnQk8sV0FBdkI7QUFBcUMsSyxDQUFDOzs7O21DQUVyQztBQUFFLGFBQU8sS0FBS1AsVUFBTCxDQUFnQlEsV0FBdkI7QUFBcUMsSyxDQUFFOzs7O29DQUV4QztBQUFFLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsV0FBdkI7QUFBcUMsSyxDQUFDOzs7OzZCQUUvQ0MsTyxFQUFTQyxNLEVBQWdFO0FBQUEsVUFBeERDLG1CQUF3RCx1RUFBbENDLGdDQUFrQzs7QUFDaEYsVUFBTUMsYUFBYSxRQUFuQjs7QUFFQSxXQUFLQyxFQUFMLENBQVFELFVBQVIsRUFBb0JKLE9BQXBCLEVBQTZCQyxNQUE3QixFQUFxQ0MsbUJBQXJDO0FBQ0Q7Ozs4QkFFU0YsTyxFQUFTQyxNLEVBQVE7QUFDekIsVUFBTUcsYUFBYSxRQUFuQjs7QUFFQSxXQUFLRSxHQUFMLENBQVNGLFVBQVQsRUFBcUJKLE9BQXJCLEVBQThCQyxNQUE5QjtBQUNEOzs7Ozs7QUFHSFAsT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0N2QixTQUFoQztBQUNBVSxPQUFPQyxNQUFQLENBQWNOLE9BQU9rQixTQUFyQixFQUFnQ3JCLFdBQWhDO0FBQ0FRLE9BQU9DLE1BQVAsQ0FBY04sT0FBT2tCLFNBQXJCLEVBQWdDcEIsV0FBaEM7QUFDQU8sT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0NuQixXQUFoQzs7QUFFQW9CLE9BQU9DLE9BQVAsR0FBa0IsT0FBT2xCLE1BQVAsS0FBa0IsV0FBbkIsR0FBa0NtQixTQUFsQyxHQUE4QyxJQUFJckIsTUFBSixFQUEvRCxDLENBQThFOztBQUU5RSxTQUFTYyxnQ0FBVCxDQUEwQ0gsT0FBMUMsRUFBbURXLEtBQW5ELEVBQTBEQyxPQUExRCxFQUFtRTtBQUNqRSxNQUFNckIsU0FBU3FCLE9BQWY7QUFBQSxNQUF3QjtBQUNsQkMsVUFBUXRCLE9BQU91QixRQUFQLEVBRGQ7QUFBQSxNQUVNQyxTQUFTeEIsT0FBT3lCLFNBQVAsRUFGZjs7QUFJQWhCLFVBQVFpQixJQUFSLENBQWExQixNQUFiLEVBQXFCc0IsS0FBckIsRUFBNEJFLE1BQTVCLEVBQW9DSixLQUFwQztBQUNEIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga2V5TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMva2V5JyksXG4gICAgICBldmVudE1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2V2ZW50JyksXG4gICAgICBjbGlja01peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBvblJlc2l6ZShoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcikge1xuICAgIGNvbnN0IGV2ZW50VHlwZXMgPSAncmVzaXplJztcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9ICdyZXNpemUnO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcihoYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldEhlaWdodCgpO1xuICBcbiAgaGFuZGxlci5jYWxsKHdpbmRvdywgd2lkdGgsIGhlaWdodCwgZXZlbnQpO1xufVxuIl19