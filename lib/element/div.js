"use strict";

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
      return _element["default"].clone(Div, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return _element["default"].fromHTML(Div, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return _element["default"].fromDOMElement(Div, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _element["default"].fromProperties(Div, properties);
    }
  }]);

  return Div;
}(_element["default"]);

Object.assign(Div, {
  tagName: "div"
});
module.exports = Div;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi5qcyJdLCJuYW1lcyI6WyJEaXYiLCJzZWxlY3RvciIsImNsb25lIiwiZWxlbWVudCIsIkVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLDRFQUNkQSxRQURjO0FBRXJCOzs7OzRCQUVPO0FBQUUsYUFBT0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsSUFBVixDQUFQO0FBQXlCOzs7MEJBRXRCQyxPLEVBQVM7QUFBRSxhQUFPQyxvQkFBUUYsS0FBUixDQUFjRixHQUFkLEVBQW1CRyxPQUFuQixDQUFQO0FBQXFDOzs7NkJBRTdDRSxJLEVBQU07QUFBRSxhQUFPRCxvQkFBUUUsUUFBUixDQUFpQk4sR0FBakIsRUFBc0JLLElBQXRCLENBQVA7QUFBcUM7OzttQ0FFdkNFLFUsRUFBWTtBQUFFLGFBQU9ILG9CQUFRSSxjQUFSLENBQXVCUixHQUF2QixFQUE0Qk8sVUFBNUIsQ0FBUDtBQUFpRDs7O21DQUUvREUsVSxFQUFZO0FBQUUsYUFBT0wsb0JBQVFNLGNBQVIsQ0FBdUJWLEdBQXZCLEVBQTRCUyxVQUE1QixDQUFQO0FBQWlEOzs7O0VBYnJFTCxtQjs7QUFnQmxCTyxNQUFNLENBQUNDLE1BQVAsQ0FBY1osR0FBZCxFQUFtQjtBQUNqQmEsRUFBQUEsT0FBTyxFQUFFO0FBRFEsQ0FBbkI7QUFJQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixHQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIERpdi5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmNsb25lKERpdiwgZWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChEaXYsIGh0bWwpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoRGl2LCBkb21FbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKERpdiwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihEaXYsIHtcbiAgdGFnTmFtZTogXCJkaXZcIlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGl2O1xuIl19