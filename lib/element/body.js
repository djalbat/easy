"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Body = /*#__PURE__*/function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, selector));
  }

  _createClass(Body, null, [{
    key: "fromHTML",
    value: function fromHTML(html) {
      return _element["default"].fromHTML(Body, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return _element["default"].fromDOMElement(Body, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _element["default"].fromProperties(Body, properties);
    }
  }]);

  return Body;
}(_element["default"]);

exports["default"] = Body;

_defineProperty(Body, "tagName", "body");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHkuanMiXSwibmFtZXMiOlsiQm9keSIsInNlbGVjdG9yIiwiaHRtbCIsIkVsZW1lbnQiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFDbkIsa0JBQStCO0FBQUEsUUFBbkJDLFFBQW1CLHVFQUFSLE1BQVE7O0FBQUE7O0FBQUEsNkVBQ3ZCQSxRQUR1QjtBQUU5Qjs7Ozs2QkFJZUMsSSxFQUFNO0FBQUUsYUFBT0Msb0JBQVFDLFFBQVIsQ0FBaUJKLElBQWpCLEVBQXVCRSxJQUF2QixDQUFQO0FBQXNDOzs7bUNBRXhDRyxVLEVBQVk7QUFBRSxhQUFPRixvQkFBUUcsY0FBUixDQUF1Qk4sSUFBdkIsRUFBNkJLLFVBQTdCLENBQVA7QUFBa0Q7OzttQ0FFaEVFLFUsRUFBWTtBQUFFLGFBQU9KLG9CQUFRSyxjQUFSLENBQXVCUixJQUF2QixFQUE2Qk8sVUFBN0IsQ0FBUDtBQUFrRDs7OztFQVh0REosbUI7Ozs7Z0JBQWJILEksYUFLRixNIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBcImJvZHlcIikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJib2R5XCI7XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQm9keSwgaHRtbCk7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCb2R5LCBkb21FbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJvZHksIHByb3BlcnRpZXMpOyB9XG59XG4iXX0=