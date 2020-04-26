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

var Section = /*#__PURE__*/function (_Element) {
  _inherits(Section, _Element);

  function Section(selector) {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, _getPrototypeOf(Section).call(this, selector));
  }

  _createClass(Section, [{
    key: "clone",
    value: function clone() {
      return Section.clone(this);
    }
  }], [{
    key: "clone",
    value: function clone(element) {
      return _element["default"].clone(Section, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return _element["default"].fromHTML(Section, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return _element["default"].fromDOMElement(Section, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _element["default"].fromProperties(Section, properties);
    }
  }]);

  return Section;
}(_element["default"]);

Object.assign(Section, {
  tagName: "div"
});
module.exports = Section;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24uanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsInNlbGVjdG9yIiwiY2xvbmUiLCJlbGVtZW50IiwiRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLGdGQUNkQSxRQURjO0FBRXJCOzs7OzRCQUVPO0FBQUUsYUFBT0QsT0FBTyxDQUFDRSxLQUFSLENBQWMsSUFBZCxDQUFQO0FBQTZCOzs7MEJBRTFCQyxPLEVBQVM7QUFBRSxhQUFPQyxvQkFBUUYsS0FBUixDQUFjRixPQUFkLEVBQXVCRyxPQUF2QixDQUFQO0FBQXlDOzs7NkJBRWpERSxJLEVBQU07QUFBRSxhQUFPRCxvQkFBUUUsUUFBUixDQUFpQk4sT0FBakIsRUFBMEJLLElBQTFCLENBQVA7QUFBeUM7OzttQ0FFM0NFLFUsRUFBWTtBQUFFLGFBQU9ILG9CQUFRSSxjQUFSLENBQXVCUixPQUF2QixFQUFnQ08sVUFBaEMsQ0FBUDtBQUFxRDs7O21DQUVuRUUsVSxFQUFZO0FBQUUsYUFBT0wsb0JBQVFNLGNBQVIsQ0FBdUJWLE9BQXZCLEVBQWdDUyxVQUFoQyxDQUFQO0FBQXFEOzs7O0VBYnJFTCxtQjs7QUFnQnRCTyxNQUFNLENBQUNDLE1BQVAsQ0FBY1osT0FBZCxFQUF1QjtBQUNyQmEsRUFBQUEsT0FBTyxFQUFFO0FBRFksQ0FBdkI7QUFJQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixPQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBTZWN0aW9uLmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VjdGlvbiwgZWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTZWN0aW9uLCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlY3Rpb24sIGRvbUVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2VjdGlvbiwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWN0aW9uLCB7XG4gIHRhZ05hbWU6IFwiZGl2XCJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlY3Rpb247XG4iXX0=