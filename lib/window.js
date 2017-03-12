'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mixin = require('./mixin'),
    event = require('./mixin/event'),
    click = require('./mixin/click'),
    mouse = require('./mixin/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window;

    this.handlersMap = {};

    mixin(event, this, Window);
    mixin(click, this, Window);
    mixin(mouse, this, Window);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsibWl4aW4iLCJyZXF1aXJlIiwiZXZlbnQiLCJjbGljayIsIm1vdXNlIiwiV2luZG93IiwiZG9tRWxlbWVudCIsIndpbmRvdyIsImhhbmRsZXJzTWFwIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiaGFuZGxlciIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSGFuZGxlciIsImV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUhhbmRsZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiaGFuZGxlcnMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxlQUFSLENBRGQ7QUFBQSxJQUVNRSxRQUFRRixRQUFRLGVBQVIsQ0FGZDtBQUFBLElBR01HLFFBQVFILFFBQVEsZUFBUixDQUhkOztJQUtNSSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxVQUFMLEdBQWtCQyxNQUFsQjs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5COztBQUVBUixVQUFNRSxLQUFOLEVBQWEsSUFBYixFQUFtQkcsTUFBbkI7QUFDQUwsVUFBTUcsS0FBTixFQUFhLElBQWIsRUFBbUJFLE1BQW5CO0FBQ0FMLFVBQU1JLEtBQU4sRUFBYSxJQUFiLEVBQW1CQyxNQUFuQjtBQUNEOzs7OytCQUVVO0FBQUUsYUFBTyxLQUFLQyxVQUFMLENBQWdCRyxVQUF2QjtBQUFvQyxLLENBQUM7Ozs7Z0NBRXRDO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7NkJBRTNDQyxPLEVBQVM7QUFDaEIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtDLFVBQUwsQ0FBZ0JGLElBQWhCLEVBQXNCRCxPQUF0QixDQUR6Qjs7QUFHQSxVQUFJRSxnQkFBSixFQUFzQjtBQUNwQixhQUFLUCxVQUFMLENBQWdCTyxnQkFBaEIsQ0FBaUNELElBQWpDLEVBQXVDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXZDO0FBQ0Q7QUFDRjs7OzhCQUVTTCxPLEVBQVM7QUFDakIsVUFBTUMsT0FBTyxRQUFiO0FBQUEsVUFDTUssc0JBQXNCLEtBQUtDLGFBQUwsQ0FBbUJOLElBQW5CLEVBQXlCRCxPQUF6QixDQUQ1Qjs7QUFHQSxVQUFJTSxtQkFBSixFQUF5QjtBQUN2QixhQUFLWCxVQUFMLENBQWdCVyxtQkFBaEIsQ0FBb0NMLElBQXBDLEVBQTBDRyxjQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQTFDO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUIsSUFBSWYsTUFBSixFQUFqQixDLENBQWdDOztBQUVoQyxTQUFTVSxhQUFULENBQXVCYixLQUF2QixFQUE4QjtBQUM1QixNQUFNVSxPQUFPVixNQUFNVSxJQUFuQjtBQUFBLE1BQ01TLFdBQVcsS0FBS2IsV0FBTCxDQUFpQkksSUFBakIsQ0FEakI7QUFBQSxNQUVNVSxRQUFRLEtBQUtDLFFBQUwsRUFGZDtBQUFBLE1BR01DLFNBQVMsS0FBS0MsU0FBTCxFQUhmOztBQUtBSixXQUFTSyxPQUFULENBQWlCLFVBQVNmLE9BQVQsRUFBa0I7QUFDakNBLFlBQVFXLEtBQVIsRUFBZUUsTUFBZjtBQUNELEdBRkQ7QUFHRCIsImZpbGUiOiJ3aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1peGluID0gcmVxdWlyZSgnLi9taXhpbicpLFxuICAgICAgZXZlbnQgPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGljayA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG5cbiAgICBtaXhpbihldmVudCwgdGhpcywgV2luZG93KTtcbiAgICBtaXhpbihjbGljaywgdGhpcywgV2luZG93KTtcbiAgICBtaXhpbihtb3VzZSwgdGhpcywgV2luZG93KTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cbiAgXG4gIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCB0eXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkSGFuZGxlcih0eXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChhZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgdHlwZSA9ICdyZXNpemUnLFxuICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUhhbmRsZXIodHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAocmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCB0eXBlID0gZXZlbnQudHlwZSxcbiAgICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW3R5cGVdLFxuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cbiJdfQ==