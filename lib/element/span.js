'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Span = function (_Element) {
  _inherits(Span, _Element);

  function Span(selector) {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).call(this, selector));
  }

  _createClass(Span, [{
    key: 'clone',
    value: function clone() {
      return Span.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Span, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Span, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Span, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<span></span>',
          span = Span.fromHTML(html);

      span.applyProperties(properties);

      return span;
    }
  }]);

  return Span;
}(Element);

module.exports = Span;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NwYW4uanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJTcGFuIiwic2VsZWN0b3IiLCJjbG9uZSIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic3BhbiIsImFwcGx5UHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLHVHQUNkQSxRQURjO0FBRXJCOzs7OzRCQUVPO0FBQUUsYUFBT0QsS0FBS0UsS0FBTCxDQUFXLElBQVgsQ0FBUDtBQUEwQjs7OzBCQUV2QkMsTyxFQUFTO0FBQ3BCLGFBQU9MLFFBQVFJLEtBQVIsQ0FBY0YsSUFBZCxFQUFvQkcsT0FBcEIsQ0FBUDtBQUNEOzs7NkJBRWVDLEksRUFBTTtBQUNwQixhQUFPTixRQUFRTyxRQUFSLENBQWlCTCxJQUFqQixFQUF1QkksSUFBdkIsQ0FBUDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsYUFBT1IsUUFBUVMsY0FBUixDQUF1QlAsSUFBdkIsRUFBNkJNLFVBQTdCLENBQVA7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQU1KLE9BQU8sZUFBYjtBQUFBLFVBQ01LLE9BQU9ULEtBQUtLLFFBQUwsQ0FBY0QsSUFBZCxDQURiOztBQUdBSyxXQUFLQyxlQUFMLENBQXFCRixVQUFyQjs7QUFFQSxhQUFPQyxJQUFQO0FBQ0Q7Ozs7RUExQmdCWCxPOztBQTZCbkJhLE9BQU9DLE9BQVAsR0FBaUJaLElBQWpCIiwiZmlsZSI6InNwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNwYW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFNwYW4uY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKFNwYW4sIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTcGFuLCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU3BhbiwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGh0bWwgPSAnPHNwYW4+PC9zcGFuPicsXG4gICAgICAgICAgc3BhbiA9IFNwYW4uZnJvbUhUTUwoaHRtbCk7XG4gICAgXG4gICAgc3Bhbi5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgXG4gICAgcmV0dXJuIHNwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGFuO1xuIl19