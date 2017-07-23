'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key');

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
    value: function onResize(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateResizeHandler;
      }

      var eventType = 'resize';

      this.on(eventType, handler);
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      var eventType = 'resize';

      this.off(eventType, handler);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);
Object.assign(Window.prototype, keyMixin);

module.exports = new Window(); ///

function defaultIntermediateResizeHandler(handler, event, targetElement) {
  var window = targetElement,
      ///
  width = window.getWidth(),
      height = targetElement.getHeight();

  handler(width, height, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiZXZlbnRNaXhpbiIsInJlcXVpcmUiLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsImtleU1peGluIiwiV2luZG93IiwiZG9tRWxlbWVudCIsIndpbmRvdyIsInRhcmdldCIsInNvdXJjZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaGFuZGxlciIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlciIsImV2ZW50VHlwZSIsIm9uIiwib2ZmIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGVBQVIsQ0FGbkI7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLGFBQVIsQ0FIakI7O0lBS01JLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCLENBRFksQ0FDYztBQUMzQjs7Ozs2QkFFa0I7QUFDakIsVUFBTUMsU0FBUyxLQUFLRixVQUFwQixDQURpQixDQUNlOztBQURmLHdDQUFURyxPQUFTO0FBQVRBLGVBQVM7QUFBQTs7QUFHakJDLGFBQU9DLE1BQVAsZ0JBQWNILE1BQWQsU0FBeUJDLE9BQXpCO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0gsVUFBTCxDQUFnQk0sVUFBdkI7QUFBb0MsSyxDQUFDOzs7O2dDQUV0QztBQUFFLGFBQU8sS0FBS04sVUFBTCxDQUFnQk8sV0FBdkI7QUFBcUMsSyxDQUFDOzs7O21DQUVyQztBQUFFLGFBQU8sS0FBS1AsVUFBTCxDQUFnQlEsV0FBdkI7QUFBcUMsSyxDQUFFOzs7O29DQUV4QztBQUFFLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsV0FBdkI7QUFBcUMsSyxDQUFDOzs7OzZCQUUvQ0MsTyxFQUFTO0FBQ2hCLFVBQUlBLFFBQVFDLG1CQUFSLEtBQWdDQyxTQUFwQyxFQUErQztBQUM3Q0YsZ0JBQVFDLG1CQUFSLEdBQThCRSxnQ0FBOUI7QUFDRDs7QUFFRCxVQUFNQyxZQUFZLFFBQWxCOztBQUVBLFdBQUtDLEVBQUwsQ0FBUUQsU0FBUixFQUFtQkosT0FBbkI7QUFDRDs7OzhCQUVTQSxPLEVBQVM7QUFDakIsVUFBTUksWUFBWSxRQUFsQjs7QUFFQSxXQUFLRSxHQUFMLENBQVNGLFNBQVQsRUFBb0JKLE9BQXBCO0FBQ0Q7Ozs7OztBQUdITixPQUFPQyxNQUFQLENBQWNOLE9BQU9rQixTQUFyQixFQUFnQ3ZCLFVBQWhDO0FBQ0FVLE9BQU9DLE1BQVAsQ0FBY04sT0FBT2tCLFNBQXJCLEVBQWdDckIsVUFBaEM7QUFDQVEsT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0NwQixVQUFoQztBQUNBTyxPQUFPQyxNQUFQLENBQWNOLE9BQU9rQixTQUFyQixFQUFnQ25CLFFBQWhDOztBQUVBb0IsT0FBT0MsT0FBUCxHQUFpQixJQUFJcEIsTUFBSixFQUFqQixDLENBQWdDOztBQUVoQyxTQUFTYyxnQ0FBVCxDQUEwQ0gsT0FBMUMsRUFBbURVLEtBQW5ELEVBQTBEQyxhQUExRCxFQUF5RTtBQUN2RSxNQUFNcEIsU0FBU29CLGFBQWY7QUFBQSxNQUE4QjtBQUN4QkMsVUFBUXJCLE9BQU9zQixRQUFQLEVBRGQ7QUFBQSxNQUVNQyxTQUFTSCxjQUFjSSxTQUFkLEVBRmY7O0FBSUFmLFVBQVFZLEtBQVIsRUFBZUUsTUFBZixFQUF1QkosS0FBdkIsRUFBOEJDLGFBQTlCO0FBQ0QiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cbiAgXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnO1xuICAgIFxuICAgIHRoaXMub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZSc7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGUsIGhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBXaW5kb3coKTsgIC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGFyZ2V0RWxlbWVudC5nZXRIZWlnaHQoKTtcbiAgXG4gIGhhbmRsZXIod2lkdGgsIGhlaWdodCwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIl19