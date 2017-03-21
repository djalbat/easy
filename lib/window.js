'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window;

    this.handlersMap = {};
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
    value: function onResize(handler) {
      var type = 'resize',
          addEventListener = this.addHandler(type, handler);

      if (addEventListener) {
        this.domElement.addEventListener(type, eventListener.bind(this));
      }
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      var type = 'resize',
          removeEventListener = this.removeHandler(type, handler);

      if (removeEventListener) {
        this.domElement.removeEventListener(type, eventListener.bind(this));
      }
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);

module.exports = new Window(); ///

function eventListener(event) {
  var type = event.type,
      handlers = this.handlersMap[type],
      width = this.getWidth(),
      height = this.getHeight();

  handlers.forEach(function (handler) {
    handler(width, height);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiZXZlbnRNaXhpbiIsInJlcXVpcmUiLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJoYW5kbGVyc01hcCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJoYW5kbGVyIiwidHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRIYW5kbGVyIiwiZXZlbnRMaXN0ZW5lciIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSGFuZGxlciIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImhhbmRsZXJzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGVBQVIsQ0FGbkI7O0lBSU1HLE07QUFDSixXQURJQSxNQUNKLEdBQWM7QUFBQSwwQkFEVkEsTUFDVTs7QUFDWixTQUFLQyxVQUFMLEdBQWtCQyxNQUFsQjs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0Q7O2VBTEdILE07OytCQU9PO0FBQUUsYUFBTyxLQUFLQyxVQUFMLENBQWdCRyxVQUF2QjtBQUFvQyxLLENBQUM7Ozs7Z0NBRXRDO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7bUNBRXJDO0FBQUUsYUFBTyxLQUFLSixVQUFMLENBQWdCSyxXQUF2QjtBQUFxQyxLLENBQUU7Ozs7b0NBRXhDO0FBQUUsYUFBTyxLQUFLTCxVQUFMLENBQWdCTSxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7NkJBRS9DQyxPLEVBQVM7QUFDaEIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtDLFVBQUwsQ0FBZ0JGLElBQWhCLEVBQXNCRCxPQUF0QixDQUR6Qjs7QUFHQSxVQUFJRSxnQkFBSixFQUFzQjtBQUNwQixhQUFLVCxVQUFMLENBQWdCUyxnQkFBaEIsQ0FBaUNELElBQWpDLEVBQXVDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXZDO0FBQ0Q7QUFDRjs7OzhCQUVTTCxPLEVBQVM7QUFDakIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUssc0JBQXNCLEtBQUtDLGFBQUwsQ0FBbUJOLElBQW5CLEVBQXlCRCxPQUF6QixDQUQ1Qjs7QUFHQSxVQUFJTSxtQkFBSixFQUF5QjtBQUN2QixhQUFLYixVQUFMLENBQWdCYSxtQkFBaEIsQ0FBb0NMLElBQXBDLEVBQTBDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQTFDO0FBQ0Q7QUFDRjs7O1NBL0JHYixNOzs7QUFrQ05nQixPQUFPQyxNQUFQLENBQWNqQixPQUFPa0IsU0FBckIsRUFBZ0N0QixVQUFoQztBQUNBb0IsT0FBT0MsTUFBUCxDQUFjakIsT0FBT2tCLFNBQXJCLEVBQWdDcEIsVUFBaEM7QUFDQWtCLE9BQU9DLE1BQVAsQ0FBY2pCLE9BQU9rQixTQUFyQixFQUFnQ25CLFVBQWhDOztBQUVBb0IsT0FBT0MsT0FBUCxHQUFpQixJQUFJcEIsTUFBSixFQUFqQixDLENBQWdDOztBQUVoQyxTQUFTWSxhQUFULENBQXVCUyxLQUF2QixFQUE4QjtBQUM1QixNQUFNWixPQUFPWSxNQUFNWixJQUFuQjtBQUFBLE1BQ01hLFdBQVcsS0FBS25CLFdBQUwsQ0FBaUJNLElBQWpCLENBRGpCO0FBQUEsTUFFTWMsUUFBUSxLQUFLQyxRQUFMLEVBRmQ7QUFBQSxNQUdNQyxTQUFTLEtBQUtDLFNBQUwsRUFIZjs7QUFLQUosV0FBU0ssT0FBVCxDQUFpQixVQUFTbkIsT0FBVCxFQUFrQjtBQUNqQ0EsWUFBUWUsS0FBUixFQUFlRSxNQUFmO0FBQ0QsR0FGRDtBQUdEIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cbiAgXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCB0eXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkSGFuZGxlcih0eXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChhZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgdHlwZSA9ICdyZXNpemUnLFxuICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUhhbmRsZXIodHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAocmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBXaW5kb3coKTsgIC8vL1xuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGV2ZW50KSB7XG4gIGNvbnN0IHR5cGUgPSBldmVudC50eXBlLFxuICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbdHlwZV0sXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIGhhbmRsZXIod2lkdGgsIGhlaWdodCk7XG4gIH0pO1xufVxuIl19