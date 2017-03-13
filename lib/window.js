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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiZXZlbnRNaXhpbiIsInJlcXVpcmUiLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJoYW5kbGVyc01hcCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImhhbmRsZXIiLCJ0eXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEhhbmRsZXIiLCJldmVudExpc3RlbmVyIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVIYW5kbGVyIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiaGFuZGxlcnMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGFBQWFELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1FLGFBQWFGLFFBQVEsZUFBUixDQUZuQjs7SUFJTUcsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsVUFBTCxHQUFrQkMsTUFBbEI7O0FBRUEsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNEOzs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRixVQUFMLENBQWdCRyxVQUF2QjtBQUFvQyxLLENBQUM7Ozs7Z0NBRXRDO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7NkJBRTNDQyxPLEVBQVM7QUFDaEIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtDLFVBQUwsQ0FBZ0JGLElBQWhCLEVBQXNCRCxPQUF0QixDQUR6Qjs7QUFHQSxVQUFJRSxnQkFBSixFQUFzQjtBQUNwQixhQUFLUCxVQUFMLENBQWdCTyxnQkFBaEIsQ0FBaUNELElBQWpDLEVBQXVDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXZDO0FBQ0Q7QUFDRjs7OzhCQUVTTCxPLEVBQVM7QUFDakIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUssc0JBQXNCLEtBQUtDLGFBQUwsQ0FBbUJOLElBQW5CLEVBQXlCRCxPQUF6QixDQUQ1Qjs7QUFHQSxVQUFJTSxtQkFBSixFQUF5QjtBQUN2QixhQUFLWCxVQUFMLENBQWdCVyxtQkFBaEIsQ0FBb0NMLElBQXBDLEVBQTBDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQTFDO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hHLE9BQU9DLE1BQVAsQ0FBY2YsT0FBT2dCLFNBQXJCLEVBQWdDcEIsVUFBaEM7QUFDQWtCLE9BQU9DLE1BQVAsQ0FBY2YsT0FBT2dCLFNBQXJCLEVBQWdDbEIsVUFBaEM7QUFDQWdCLE9BQU9DLE1BQVAsQ0FBY2YsT0FBT2dCLFNBQXJCLEVBQWdDakIsVUFBaEM7O0FBRUFrQixPQUFPQyxPQUFQLEdBQWlCLElBQUlsQixNQUFKLEVBQWpCLEMsQ0FBZ0M7O0FBRWhDLFNBQVNVLGFBQVQsQ0FBdUJTLEtBQXZCLEVBQThCO0FBQzVCLE1BQU1aLE9BQU9ZLE1BQU1aLElBQW5CO0FBQUEsTUFDTWEsV0FBVyxLQUFLakIsV0FBTCxDQUFpQkksSUFBakIsQ0FEakI7QUFBQSxNQUVNYyxRQUFRLEtBQUtDLFFBQUwsRUFGZDtBQUFBLE1BR01DLFNBQVMsS0FBS0MsU0FBTCxFQUhmOztBQUtBSixXQUFTSyxPQUFULENBQWlCLFVBQVNuQixPQUFULEVBQWtCO0FBQ2pDQSxZQUFRZSxLQUFSLEVBQWVFLE1BQWY7QUFDRCxHQUZEO0FBR0QiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdztcblxuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cbiAgXG4gIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCB0eXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkSGFuZGxlcih0eXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChhZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgdHlwZSA9ICdyZXNpemUnLFxuICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUhhbmRsZXIodHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAocmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBXaW5kb3coKTsgIC8vL1xuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGV2ZW50KSB7XG4gIGNvbnN0IHR5cGUgPSBldmVudC50eXBlLFxuICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbdHlwZV0sXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIGhhbmRsZXIod2lkdGgsIGhlaWdodCk7XG4gIH0pO1xufVxuIl19