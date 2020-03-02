'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require('../element');

var Div = /*#__PURE__*/function (_Element) {
  _inherits(Div, _Element);

  function Div(selector) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, _getPrototypeOf(Div).call(this, selector));
  }

  _createClass(Div, [{
    key: "clone",
    value: function clone() {
      return Div.clone(this);
    }
  }], [{
    key: "clone",
    value: function clone(element) {
      return Element.clone(Div, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return Element.fromHTML(Div, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Div, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Element.fromProperties(Div, properties);
    }
  }]);

  return Div;
}(Element);

Object.assign(Div, {
  tagName: 'div'
});
module.exports = Div;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpdiIsInNlbGVjdG9yIiwiY2xvbmUiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0lBRU1DLEc7OztBQUNKLGVBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSw0RUFDZEEsUUFEYztBQUVyQjs7Ozs0QkFFTztBQUFFLGFBQU9ELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLElBQVYsQ0FBUDtBQUF5Qjs7OzBCQUV0QkMsTyxFQUFTO0FBQUUsYUFBT0wsT0FBTyxDQUFDSSxLQUFSLENBQWNGLEdBQWQsRUFBbUJHLE9BQW5CLENBQVA7QUFBcUM7Ozs2QkFFN0NDLEksRUFBTTtBQUFFLGFBQU9OLE9BQU8sQ0FBQ08sUUFBUixDQUFpQkwsR0FBakIsRUFBc0JJLElBQXRCLENBQVA7QUFBcUM7OzttQ0FFdkNFLFUsRUFBWTtBQUFFLGFBQU9SLE9BQU8sQ0FBQ1MsY0FBUixDQUF1QlAsR0FBdkIsRUFBNEJNLFVBQTVCLENBQVA7QUFBaUQ7OzttQ0FFL0RFLFUsRUFBWTtBQUFFLGFBQU9WLE9BQU8sQ0FBQ1csY0FBUixDQUF1QlQsR0FBdkIsRUFBNEJRLFVBQTVCLENBQVA7QUFBaUQ7Ozs7RUFickVWLE87O0FBZ0JsQlksTUFBTSxDQUFDQyxNQUFQLENBQWNYLEdBQWQsRUFBbUI7QUFDakJZLEVBQUFBLE9BQU8sRUFBRTtBQURRLENBQW5CO0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsR0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRGl2LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoRGl2LCBlbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKERpdiwgaHRtbCk7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChEaXYsIGRvbUVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRGl2LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKERpdiwge1xuICB0YWdOYW1lOiAnZGl2J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGl2O1xuIl19