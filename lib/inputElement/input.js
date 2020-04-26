"use strict";

var _inputElement = _interopRequireDefault(require("../inputElement"));

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

var Input = /*#__PURE__*/function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
    }
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return _inputElement["default"].clone(Input, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return _inputElement["default"].fromHTML(Input, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return _inputElement["default"].fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _inputElement["default"].fromProperties(Input, properties);
    }
  }]);

  return Input;
}(_inputElement["default"]);

Object.assign(Input, {
  tagName: "input"
});
module.exports = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwiY2hhbmdlSGFuZGxlciIsImNsb25lIiwiZWxlbWVudCIsIklucHV0RWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQUUsYUFBT0QsS0FBSyxDQUFDRSxLQUFOLENBQVksSUFBWixFQUFrQkQsYUFBbEIsQ0FBUDtBQUEwQzs7OzBCQUVwREUsTyxFQUFTRixhLEVBQWU7QUFBRSxhQUFPRyx5QkFBYUYsS0FBYixDQUFtQkYsS0FBbkIsRUFBMEJHLE9BQTFCLEVBQW1DRixhQUFuQyxDQUFQO0FBQTJEOzs7NkJBRWxGSSxJLEVBQU1KLGEsRUFBZTtBQUFFLGFBQU9HLHlCQUFhRSxRQUFiLENBQXNCTixLQUF0QixFQUE2QkssSUFBN0IsRUFBbUNKLGFBQW5DLENBQVA7QUFBMkQ7OzttQ0FFNUVNLFUsRUFBWU4sYSxFQUFlO0FBQUUsYUFBT0cseUJBQWFJLGNBQWIsQ0FBNEJSLEtBQTVCLEVBQW1DTyxVQUFuQyxFQUErQ04sYUFBL0MsQ0FBUDtBQUF1RTs7O21DQUVwR1EsVSxFQUFZO0FBQUUsYUFBT0wseUJBQWFNLGNBQWIsQ0FBNEJWLEtBQTVCLEVBQW1DUyxVQUFuQyxDQUFQO0FBQXdEOzs7O0VBVDFFTCx3Qjs7QUFZcEJPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWixLQUFkLEVBQXFCO0FBQ25CYSxFQUFBQSxPQUFPLEVBQUU7QUFEVSxDQUFyQjtBQUlBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJmLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dEVsZW1lbnQgZnJvbSBcIi4uL2lucHV0RWxlbWVudFwiO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhJbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dCwge1xuICB0YWdOYW1lOiBcImlucHV0XCJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIl19