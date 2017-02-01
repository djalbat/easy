'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Body = function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, selector));
  }

  _createClass(Body, [{
    key: 'clone',
    value: function clone() {
      return Body.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement) {
      return Element.clone(Body, selectorOrElement);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Body, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Body, domElement);
    }
  }]);

  return Body;
}(Element);

module.exports = Body;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2JvZHkuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJCb2R5Iiwic2VsZWN0b3IiLCJjbG9uZSIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFlBQVIsQ0FBZDs7SUFFTUMsSTs7O0FBQ0osa0JBQStCO0FBQUEsUUFBbkJDLFFBQW1CLHVFQUFSLE1BQVE7O0FBQUE7O0FBQUEsdUdBQ3ZCQSxRQUR1QjtBQUU5Qjs7Ozs0QkFFTztBQUFFLGFBQU9ELEtBQUtFLEtBQUwsQ0FBVyxJQUFYLENBQVA7QUFBMEI7OzswQkFFdkJDLGlCLEVBQW1CO0FBQzlCLGFBQU9MLFFBQVFJLEtBQVIsQ0FBY0YsSUFBZCxFQUFvQkcsaUJBQXBCLENBQVA7QUFDRDs7OzZCQUVlQyxJLEVBQU07QUFDcEIsYUFBT04sUUFBUU8sUUFBUixDQUFpQkwsSUFBakIsRUFBdUJJLElBQXZCLENBQVA7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLGFBQU9SLFFBQVFTLGNBQVIsQ0FBdUJQLElBQXZCLEVBQTZCTSxVQUE3QixDQUFQO0FBQ0Q7Ozs7RUFqQmdCUixPOztBQW9CbkJVLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6ImJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2JvZHknKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQm9keSwgc2VsZWN0b3JPckVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCb2R5LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQm9keSwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIl19