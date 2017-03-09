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

    // mixin(event, this, Window);
    // mixin(click, this, Window);
    // mixin(mouse, this, Window);
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
      this.domElement.onResize(function () {
        var width = this.getWidth(),
            height = this.getHeight();

        handler(width, height);
      }.bind(this));
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      this.domElement.offResize(handler);
    }
  }]);

  return Window;
}();

module.exports = new Window(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsibWl4aW4iLCJyZXF1aXJlIiwiZXZlbnQiLCJjbGljayIsIm1vdXNlIiwiV2luZG93IiwiZG9tRWxlbWVudCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImhhbmRsZXIiLCJvblJlc2l6ZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJiaW5kIiwib2ZmUmVzaXplIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxlQUFSLENBRGQ7QUFBQSxJQUVNRSxRQUFRRixRQUFRLGVBQVIsQ0FGZDtBQUFBLElBR01HLFFBQVFILFFBQVEsZUFBUixDQUhkOztJQUtNSSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxVQUFMLEdBQWtCQyxNQUFsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDRDs7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0QsVUFBTCxDQUFnQkUsVUFBdkI7QUFBb0MsSyxDQUFDOzs7O2dDQUV0QztBQUFFLGFBQU8sS0FBS0YsVUFBTCxDQUFnQkcsV0FBdkI7QUFBcUMsSyxDQUFDOzs7OzZCQUUzQ0MsTyxFQUFTO0FBQ2hCLFdBQUtKLFVBQUwsQ0FBZ0JLLFFBQWhCLENBQXlCLFlBQVc7QUFDbEMsWUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxZQUNNQyxTQUFTLEtBQUtDLFNBQUwsRUFEZjs7QUFHQUwsZ0JBQVFFLEtBQVIsRUFBZUUsTUFBZjtBQUNELE9BTHdCLENBS3ZCRSxJQUx1QixDQUtsQixJQUxrQixDQUF6QjtBQU1EOzs7OEJBRVNOLE8sRUFBUztBQUNqQixXQUFLSixVQUFMLENBQWdCVyxTQUFoQixDQUEwQlAsT0FBMUI7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUIsSUFBSWQsTUFBSixFQUFqQixDLENBQWdDIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWl4aW4gPSByZXF1aXJlKCcuL21peGluJyksXG4gICAgICBldmVudCA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgbW91c2UgPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdztcblxuICAgIC8vIG1peGluKGV2ZW50LCB0aGlzLCBXaW5kb3cpO1xuICAgIC8vIG1peGluKGNsaWNrLCB0aGlzLCBXaW5kb3cpO1xuICAgIC8vIG1peGluKG1vdXNlLCB0aGlzLCBXaW5kb3cpO1xuICB9XG4gIFxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuICBcbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIHRoaXMuZG9tRWxlbWVudC5vblJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICAgIFxuICAgICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQub2ZmUmVzaXplKGhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG4iXX0=