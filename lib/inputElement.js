'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector) {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));
  }

  _createClass(InputElement, [{
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'onFocus',
    value: function onFocus(handler) {
      this.on('focus', handler);
    }
  }, {
    key: 'onBlur',
    value: function onBlur(handler) {
      this.on('blur', handler);
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }]);

  return InputElement;
}(Element);

module.exports = InputElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsImhhbmRsZXIiLCJvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLHVIQUNkQSxRQURjO0FBRXJCOzs7OytCQUVVO0FBQ1QsVUFBTUMsUUFBU0MsU0FBU0MsYUFBVCxLQUEyQixLQUFLQyxVQUEvQyxDQURTLENBQ29EOztBQUU3RCxhQUFPSCxLQUFQO0FBQ0Q7Ozs0QkFFT0ksTyxFQUFTO0FBQ2YsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJELE9BQWpCO0FBQ0Q7OzsyQkFFTUEsTyxFQUFTO0FBQ2QsV0FBS0MsRUFBTCxDQUFRLE1BQVIsRUFBZ0JELE9BQWhCO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUtELFVBQUwsQ0FBZ0JILEtBQWhCO0FBQ0Q7Ozs7RUFyQndCSixPOztBQXdCM0JVLE9BQU9DLE9BQVAsR0FBaUJULFlBQWpCIiwiZmlsZSI6ImlucHV0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBvbkZvY3VzKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdmb2N1cycsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25CbHVyKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdibHVyJywgaGFuZGxlcik7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiJdfQ==