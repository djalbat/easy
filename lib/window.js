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

    this.domElement = window;
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

function defaultIntermediateResizeHandler(handler) {
  var width = this.getWidth(),
      height = this.getHeight(),
      targetElement = this,
      ///
  preventDefault = handler(width, height, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiZXZlbnRNaXhpbiIsInJlcXVpcmUiLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsImtleU1peGluIiwiV2luZG93IiwiZG9tRWxlbWVudCIsIndpbmRvdyIsInRhcmdldCIsInNvdXJjZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaGFuZGxlciIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlciIsImV2ZW50VHlwZSIsIm9uIiwib2ZmIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJ0YXJnZXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGVBQVIsQ0FGbkI7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLGFBQVIsQ0FIakI7O0lBS01JLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCO0FBQ0Q7Ozs7NkJBRWtCO0FBQ2pCLFVBQU1DLFNBQVMsS0FBS0YsVUFBcEIsQ0FEaUIsQ0FDZTs7QUFEZix3Q0FBVEcsT0FBUztBQUFUQSxlQUFTO0FBQUE7O0FBR2pCQyxhQUFPQyxNQUFQLGdCQUFjSCxNQUFkLFNBQXlCQyxPQUF6QjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JNLFVBQXZCO0FBQW9DLEssQ0FBQzs7OztnQ0FFdEM7QUFBRSxhQUFPLEtBQUtOLFVBQUwsQ0FBZ0JPLFdBQXZCO0FBQXFDLEssQ0FBQzs7OzttQ0FFckM7QUFBRSxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFdBQXZCO0FBQXFDLEssQ0FBRTs7OztvQ0FFeEM7QUFBRSxhQUFPLEtBQUtSLFVBQUwsQ0FBZ0JTLFdBQXZCO0FBQXFDLEssQ0FBQzs7Ozs2QkFFL0NDLE8sRUFBUztBQUNoQixVQUFJQSxRQUFRQyxtQkFBUixLQUFnQ0MsU0FBcEMsRUFBK0M7QUFDN0NGLGdCQUFRQyxtQkFBUixHQUE4QkUsZ0NBQTlCO0FBQ0Q7O0FBRUQsVUFBTUMsWUFBWSxRQUFsQjs7QUFFQSxXQUFLQyxFQUFMLENBQVFELFNBQVIsRUFBbUJKLE9BQW5CO0FBQ0Q7Ozs4QkFFU0EsTyxFQUFTO0FBQ2pCLFVBQU1JLFlBQVksUUFBbEI7O0FBRUEsV0FBS0UsR0FBTCxDQUFTRixTQUFULEVBQW9CSixPQUFwQjtBQUNEOzs7Ozs7QUFHSE4sT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0N2QixVQUFoQztBQUNBVSxPQUFPQyxNQUFQLENBQWNOLE9BQU9rQixTQUFyQixFQUFnQ3JCLFVBQWhDO0FBQ0FRLE9BQU9DLE1BQVAsQ0FBY04sT0FBT2tCLFNBQXJCLEVBQWdDcEIsVUFBaEM7QUFDQU8sT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0NuQixRQUFoQzs7QUFFQW9CLE9BQU9DLE9BQVAsR0FBaUIsSUFBSXBCLE1BQUosRUFBakIsQyxDQUFnQzs7QUFFaEMsU0FBU2MsZ0NBQVQsQ0FBMENILE9BQTFDLEVBQW1EO0FBQ2pELE1BQU1VLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsTUFDTUMsU0FBUyxLQUFLQyxTQUFMLEVBRGY7QUFBQSxNQUVNQyxnQkFBZ0IsSUFGdEI7QUFBQSxNQUU0QjtBQUN0QkMsbUJBQWlCZixRQUFRVSxLQUFSLEVBQWVFLE1BQWYsRUFBdUJFLGFBQXZCLENBSHZCOztBQUtBLFNBQU9DLGNBQVA7QUFDRCIsImZpbGUiOiJ3aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIGtleU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9rZXknKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93O1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG4gIFxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBvblJlc2l6ZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJztcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge1xuICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIod2lkdGgsIGhlaWdodCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIl19