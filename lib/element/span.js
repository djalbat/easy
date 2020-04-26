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

var Span = /*#__PURE__*/function (_Element) {
  _inherits(Span, _Element);

  function Span() {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, _getPrototypeOf(Span).apply(this, arguments));
  }

  _createClass(Span, [{
    key: "clone",
    value: function clone() {
      return Span.clone(this);
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }], [{
    key: "clone",
    value: function clone(element) {
      return _element["default"].clone(Span, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return _element["default"].fromHTML(Span, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return _element["default"].fromDOMElement(Span, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _element["default"].fromProperties(properties);
    }
  }]);

  return Span;
}(_element["default"]);

Object.assign(Span, {
  tagName: "span"
});
module.exports = Span;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYW4uanMiXSwibmFtZXMiOlsiU3BhbiIsImNsb25lIiwiZWxlbWVudCIsIkVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs7NEJBQ0k7QUFBRSxhQUFPQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFYLENBQVA7QUFBMEI7OzsrQkFFekIsQ0FBRTs7O2dDQUVELENBQUU7OzswQkFFREMsTyxFQUFTO0FBQUUsYUFBT0Msb0JBQVFGLEtBQVIsQ0FBY0QsSUFBZCxFQUFvQkUsT0FBcEIsQ0FBUDtBQUFzQzs7OzZCQUU5Q0UsSSxFQUFNO0FBQUUsYUFBT0Qsb0JBQVFFLFFBQVIsQ0FBaUJMLElBQWpCLEVBQXVCSSxJQUF2QixDQUFQO0FBQXNDOzs7bUNBRXhDRSxVLEVBQVk7QUFBRSxhQUFPSCxvQkFBUUksY0FBUixDQUF1QlAsSUFBdkIsRUFBNkJNLFVBQTdCLENBQVA7QUFBa0Q7OzttQ0FFaEVFLFUsRUFBWTtBQUFFLGFBQU9MLG9CQUFRTSxjQUFSLENBQXVCRCxVQUF2QixDQUFQO0FBQTRDOzs7O0VBYi9ETCxtQjs7QUFnQm5CTyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsSUFBZCxFQUFvQjtBQUNsQlksRUFBQUEsT0FBTyxFQUFFO0FBRFMsQ0FBcEI7QUFJQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5jbGFzcyBTcGFuIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsb25lKCkgeyByZXR1cm4gU3Bhbi5jbG9uZSh0aGlzKTsgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmNsb25lKFNwYW4sIGVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU3BhbiwgaHRtbCk7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChTcGFuLCBkb21FbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3Bhbiwge1xuICB0YWdOYW1lOiBcInNwYW5cIlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BhbjtcbiJdfQ==