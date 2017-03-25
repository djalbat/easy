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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiZXZlbnRNaXhpbiIsInJlcXVpcmUiLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJoYW5kbGVyc01hcCIsInRhcmdldCIsInNvdXJjZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaGFuZGxlciIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSGFuZGxlciIsImV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUhhbmRsZXIiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJoYW5kbGVycyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTUUsYUFBYUYsUUFBUSxlQUFSLENBRm5COztJQUlNRyxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxVQUFMLEdBQWtCQyxNQUFsQjs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0Q7Ozs7NkJBRWtCO0FBQ2pCLFVBQU1DLFNBQVMsS0FBS0gsVUFBcEIsQ0FEaUIsQ0FDZTs7QUFEZix3Q0FBVEksT0FBUztBQUFUQSxlQUFTO0FBQUE7O0FBR2pCQyxhQUFPQyxNQUFQLGdCQUFjSCxNQUFkLFNBQXlCQyxPQUF6QjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtKLFVBQUwsQ0FBZ0JPLFVBQXZCO0FBQW9DLEssQ0FBQzs7OztnQ0FFdEM7QUFBRSxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFdBQXZCO0FBQXFDLEssQ0FBQzs7OzttQ0FFckM7QUFBRSxhQUFPLEtBQUtSLFVBQUwsQ0FBZ0JTLFdBQXZCO0FBQXFDLEssQ0FBRTs7OztvQ0FFeEM7QUFBRSxhQUFPLEtBQUtULFVBQUwsQ0FBZ0JVLFdBQXZCO0FBQXFDLEssQ0FBQzs7Ozs2QkFFL0NDLE8sRUFBUztBQUNoQixVQUFNQyxPQUFPLFFBQWI7QUFBQSxVQUNNQyxtQkFBbUIsS0FBS0MsVUFBTCxDQUFnQkYsSUFBaEIsRUFBc0JELE9BQXRCLENBRHpCOztBQUdBLFVBQUlFLGdCQUFKLEVBQXNCO0FBQ3BCLGFBQUtiLFVBQUwsQ0FBZ0JhLGdCQUFoQixDQUFpQ0QsSUFBakMsRUFBdUNHLGNBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBdkM7QUFDRDtBQUNGOzs7OEJBRVNMLE8sRUFBUztBQUNqQixVQUFNQyxPQUFPLFFBQWI7QUFBQSxVQUNNSyxzQkFBc0IsS0FBS0MsYUFBTCxDQUFtQk4sSUFBbkIsRUFBeUJELE9BQXpCLENBRDVCOztBQUdBLFVBQUlNLG1CQUFKLEVBQXlCO0FBQ3ZCLGFBQUtqQixVQUFMLENBQWdCaUIsbUJBQWhCLENBQW9DTCxJQUFwQyxFQUEwQ0csY0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUExQztBQUNEO0FBQ0Y7Ozs7OztBQUdIWCxPQUFPQyxNQUFQLENBQWNQLE9BQU9vQixTQUFyQixFQUFnQ3hCLFVBQWhDO0FBQ0FVLE9BQU9DLE1BQVAsQ0FBY1AsT0FBT29CLFNBQXJCLEVBQWdDdEIsVUFBaEM7QUFDQVEsT0FBT0MsTUFBUCxDQUFjUCxPQUFPb0IsU0FBckIsRUFBZ0NyQixVQUFoQzs7QUFFQXNCLE9BQU9DLE9BQVAsR0FBaUIsSUFBSXRCLE1BQUosRUFBakIsQyxDQUFnQzs7QUFFaEMsU0FBU2dCLGFBQVQsQ0FBdUJPLEtBQXZCLEVBQThCO0FBQzVCLE1BQU1WLE9BQU9VLE1BQU1WLElBQW5CO0FBQUEsTUFDTVcsV0FBVyxLQUFLckIsV0FBTCxDQUFpQlUsSUFBakIsQ0FEakI7QUFBQSxNQUVNWSxRQUFRLEtBQUtDLFFBQUwsRUFGZDtBQUFBLE1BR01DLFNBQVMsS0FBS0MsU0FBTCxFQUhmOztBQUtBSixXQUFTSyxPQUFULENBQWlCLFVBQVNqQixPQUFULEVBQWtCO0FBQ2pDQSxZQUFRYSxLQUFSLEVBQWVFLE1BQWY7QUFDRCxHQUZEO0FBR0QiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdztcblxuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSB7fTtcbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IHR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgICBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5hZGRIYW5kbGVyKHR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCB0eXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlSGFuZGxlcih0eXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgdHlwZSA9IGV2ZW50LnR5cGUsXG4gICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFt0eXBlXSxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgfSk7XG59XG4iXX0=