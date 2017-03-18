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
    key: 'getPageXOffset',
    value: function getPageXOffset() {
      return this.domElement.pageXOffset;
    }
  }, {
    key: 'getPageYOffset',
    value: function getPageYOffset() {
      return this.domElement.pageYOffset;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiZXZlbnRNaXhpbiIsInJlcXVpcmUiLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJoYW5kbGVyc01hcCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJoYW5kbGVyIiwidHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRIYW5kbGVyIiwiZXZlbnRMaXN0ZW5lciIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSGFuZGxlciIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImhhbmRsZXJzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGVBQVIsQ0FGbkI7O0lBSU1HLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCOztBQUVBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDRDs7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0YsVUFBTCxDQUFnQkcsVUFBdkI7QUFBb0MsSyxDQUFDOzs7O2dDQUV0QztBQUFFLGFBQU8sS0FBS0gsVUFBTCxDQUFnQkksV0FBdkI7QUFBcUMsSyxDQUFDOzs7O3FDQUVuQztBQUFFLGFBQU8sS0FBS0osVUFBTCxDQUFnQkssV0FBdkI7QUFBcUM7OztxQ0FFdkM7QUFBRSxhQUFPLEtBQUtMLFVBQUwsQ0FBZ0JNLFdBQXZCO0FBQXFDOzs7NkJBRS9DQyxPLEVBQVM7QUFDaEIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtDLFVBQUwsQ0FBZ0JGLElBQWhCLEVBQXNCRCxPQUF0QixDQUR6Qjs7QUFHQSxVQUFJRSxnQkFBSixFQUFzQjtBQUNwQixhQUFLVCxVQUFMLENBQWdCUyxnQkFBaEIsQ0FBaUNELElBQWpDLEVBQXVDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXZDO0FBQ0Q7QUFDRjs7OzhCQUVTTCxPLEVBQVM7QUFDakIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUssc0JBQXNCLEtBQUtDLGFBQUwsQ0FBbUJOLElBQW5CLEVBQXlCRCxPQUF6QixDQUQ1Qjs7QUFHQSxVQUFJTSxtQkFBSixFQUF5QjtBQUN2QixhQUFLYixVQUFMLENBQWdCYSxtQkFBaEIsQ0FBb0NMLElBQXBDLEVBQTBDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQTFDO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hHLE9BQU9DLE1BQVAsQ0FBY2pCLE9BQU9rQixTQUFyQixFQUFnQ3RCLFVBQWhDO0FBQ0FvQixPQUFPQyxNQUFQLENBQWNqQixPQUFPa0IsU0FBckIsRUFBZ0NwQixVQUFoQztBQUNBa0IsT0FBT0MsTUFBUCxDQUFjakIsT0FBT2tCLFNBQXJCLEVBQWdDbkIsVUFBaEM7O0FBRUFvQixPQUFPQyxPQUFQLEdBQWlCLElBQUlwQixNQUFKLEVBQWpCLEMsQ0FBZ0M7O0FBRWhDLFNBQVNZLGFBQVQsQ0FBdUJTLEtBQXZCLEVBQThCO0FBQzVCLE1BQU1aLE9BQU9ZLE1BQU1aLElBQW5CO0FBQUEsTUFDTWEsV0FBVyxLQUFLbkIsV0FBTCxDQUFpQk0sSUFBakIsQ0FEakI7QUFBQSxNQUVNYyxRQUFRLEtBQUtDLFFBQUwsRUFGZDtBQUFBLE1BR01DLFNBQVMsS0FBS0MsU0FBTCxFQUhmOztBQUtBSixXQUFTSyxPQUFULENBQWlCLFVBQVNuQixPQUFULEVBQWtCO0FBQ2pDQSxZQUFRZSxLQUFSLEVBQWVFLE1BQWY7QUFDRCxHQUZEO0FBR0QiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdztcblxuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRQYWdlWE9mZnNldCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfVxuXG4gIGdldFBhZ2VZT2Zmc2V0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9XG4gIFxuICBvblJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgdHlwZSA9ICdyZXNpemUnLFxuICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEhhbmRsZXIodHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IHR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVIYW5kbGVyKHR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCB0eXBlID0gZXZlbnQudHlwZSxcbiAgICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW3R5cGVdLFxuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cbiJdfQ==