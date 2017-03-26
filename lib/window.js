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

    this.handlersMap = {};
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
Object.assign(Window.prototype, keyMixin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiZXZlbnRNaXhpbiIsInJlcXVpcmUiLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsImtleU1peGluIiwiV2luZG93IiwiZG9tRWxlbWVudCIsIndpbmRvdyIsImhhbmRsZXJzTWFwIiwidGFyZ2V0Iiwic291cmNlcyIsIk9iamVjdCIsImFzc2lnbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJoYW5kbGVyIiwidHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRIYW5kbGVyIiwiZXZlbnRMaXN0ZW5lciIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSGFuZGxlciIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImhhbmRsZXJzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGVBQVIsQ0FGbkI7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLGFBQVIsQ0FIakI7O0lBS01JLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCOztBQUVBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDRDs7Ozs2QkFFa0I7QUFDakIsVUFBTUMsU0FBUyxLQUFLSCxVQUFwQixDQURpQixDQUNlOztBQURmLHdDQUFUSSxPQUFTO0FBQVRBLGVBQVM7QUFBQTs7QUFHakJDLGFBQU9DLE1BQVAsZ0JBQWNILE1BQWQsU0FBeUJDLE9BQXpCO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0osVUFBTCxDQUFnQk8sVUFBdkI7QUFBb0MsSyxDQUFDOzs7O2dDQUV0QztBQUFFLGFBQU8sS0FBS1AsVUFBTCxDQUFnQlEsV0FBdkI7QUFBcUMsSyxDQUFDOzs7O21DQUVyQztBQUFFLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsV0FBdkI7QUFBcUMsSyxDQUFFOzs7O29DQUV4QztBQUFFLGFBQU8sS0FBS1QsVUFBTCxDQUFnQlUsV0FBdkI7QUFBcUMsSyxDQUFDOzs7OzZCQUUvQ0MsTyxFQUFTO0FBQ2hCLFVBQU1DLE9BQU8sUUFBYjtBQUFBLFVBQ01DLG1CQUFtQixLQUFLQyxVQUFMLENBQWdCRixJQUFoQixFQUFzQkQsT0FBdEIsQ0FEekI7O0FBR0EsVUFBSUUsZ0JBQUosRUFBc0I7QUFDcEIsYUFBS2IsVUFBTCxDQUFnQmEsZ0JBQWhCLENBQWlDRCxJQUFqQyxFQUF1Q0csY0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUF2QztBQUNEO0FBQ0Y7Ozs4QkFFU0wsTyxFQUFTO0FBQ2pCLFVBQU1DLE9BQU8sUUFBYjtBQUFBLFVBQ01LLHNCQUFzQixLQUFLQyxhQUFMLENBQW1CTixJQUFuQixFQUF5QkQsT0FBekIsQ0FENUI7O0FBR0EsVUFBSU0sbUJBQUosRUFBeUI7QUFDdkIsYUFBS2pCLFVBQUwsQ0FBZ0JpQixtQkFBaEIsQ0FBb0NMLElBQXBDLEVBQTBDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQTFDO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hYLE9BQU9DLE1BQVAsQ0FBY1AsT0FBT29CLFNBQXJCLEVBQWdDekIsVUFBaEM7QUFDQVcsT0FBT0MsTUFBUCxDQUFjUCxPQUFPb0IsU0FBckIsRUFBZ0N2QixVQUFoQztBQUNBUyxPQUFPQyxNQUFQLENBQWNQLE9BQU9vQixTQUFyQixFQUFnQ3RCLFVBQWhDO0FBQ0FRLE9BQU9DLE1BQVAsQ0FBY1AsT0FBT29CLFNBQXJCLEVBQWdDckIsUUFBaEM7O0FBRUFzQixPQUFPQyxPQUFQLEdBQWlCLElBQUl0QixNQUFKLEVBQWpCLEMsQ0FBZ0M7O0FBRWhDLFNBQVNnQixhQUFULENBQXVCTyxLQUF2QixFQUE4QjtBQUM1QixNQUFNVixPQUFPVSxNQUFNVixJQUFuQjtBQUFBLE1BQ01XLFdBQVcsS0FBS3JCLFdBQUwsQ0FBaUJVLElBQWpCLENBRGpCO0FBQUEsTUFFTVksUUFBUSxLQUFLQyxRQUFMLEVBRmQ7QUFBQSxNQUdNQyxTQUFTLEtBQUtDLFNBQUwsRUFIZjs7QUFLQUosV0FBU0ssT0FBVCxDQUFpQixVQUFTakIsT0FBVCxFQUFrQjtBQUNqQ0EsWUFBUWEsS0FBUixFQUFlRSxNQUFmO0FBQ0QsR0FGRDtBQUdEIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAga2V5TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2tleScpO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cbiAgXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCB0eXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkSGFuZGxlcih0eXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChhZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgdHlwZSA9ICdyZXNpemUnLFxuICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUhhbmRsZXIodHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAocmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgdHlwZSA9IGV2ZW50LnR5cGUsXG4gICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFt0eXBlXSxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgfSk7XG59XG4iXX0=