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
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.clone.apply(Element, [Class, element].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement.apply(Element, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromTagNameAndProperties',
    value: function fromTagNameAndProperties(Class, tagName, properties) {
      return Element.fromTagNameAndProperties(Class, tagName, properties);
    }
  }]);

  return InputElement;
}(Element);

module.exports = InputElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsIkNsYXNzIiwiZWxlbWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNsb25lIiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsImZyb21UYWdOYW1lQW5kUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLHVIQUNkQSxRQURjO0FBRXJCOzs7OytCQUVVO0FBQ1QsVUFBTUMsUUFBU0MsU0FBU0MsYUFBVCxLQUEyQixLQUFLQyxVQUEvQyxDQURTLENBQ29EOztBQUU3RCxhQUFPSCxLQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLFdBQUtHLFVBQUwsQ0FBZ0JILEtBQWhCO0FBQTBCOzs7MEJBRXZCSSxLLEVBQU9DLE8sRUFBZ0M7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQ2xELGFBQU9WLFFBQVFXLEtBQVIsaUJBQWNILEtBQWQsRUFBcUJDLE9BQXJCLFNBQWlDQyxrQkFBakMsRUFBUDtBQUNEOzs7NkJBRWVGLEssRUFBT0ksSSxFQUE2QjtBQUFBLHlDQUFwQkYsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDbEQsYUFBT1YsUUFBUWEsUUFBUixpQkFBaUJMLEtBQWpCLEVBQXdCSSxJQUF4QixTQUFpQ0Ysa0JBQWpDLEVBQVA7QUFDRDs7O21DQUVxQkYsSyxFQUFPRCxVLEVBQW1DO0FBQUEseUNBQXBCRyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxhQUFPVixRQUFRYyxjQUFSLGlCQUF1Qk4sS0FBdkIsRUFBOEJELFVBQTlCLFNBQTZDRyxrQkFBN0MsRUFBUDtBQUNEOzs7NkNBRStCRixLLEVBQU9PLE8sRUFBU0MsVSxFQUFZO0FBQzFELGFBQU9oQixRQUFRaUIsd0JBQVIsQ0FBaUNULEtBQWpDLEVBQXdDTyxPQUF4QyxFQUFpREMsVUFBakQsQ0FBUDtBQUNEOzs7O0VBM0J3QmhCLE87O0FBOEIzQmtCLE9BQU9DLE9BQVAsR0FBaUJqQixZQUFqQiIsImZpbGUiOiJpbnB1dEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lQW5kUHJvcGVydGllcyhDbGFzcywgdGFnTmFtZSwgcHJvcGVydGllcykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21UYWdOYW1lQW5kUHJvcGVydGllcyhDbGFzcywgdGFnTmFtZSwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG4iXX0=