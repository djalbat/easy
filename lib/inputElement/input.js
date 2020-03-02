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

var InputElement = require('../inputElement');

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
      return InputElement.clone(Input, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(Input, properties);
    }
  }]);

  return Input;
}(InputElement);

Object.assign(Input, {
  tagName: 'input'
});
module.exports = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dCIsImNoYW5nZUhhbmRsZXIiLCJjbG9uZSIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0lBRU1DLEs7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWU7QUFBRSxhQUFPRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxJQUFaLEVBQWtCRCxhQUFsQixDQUFQO0FBQTBDOzs7MEJBRXBERSxPLEVBQVNGLGEsRUFBZTtBQUFFLGFBQU9ILFlBQVksQ0FBQ0ksS0FBYixDQUFtQkYsS0FBbkIsRUFBMEJHLE9BQTFCLEVBQW1DRixhQUFuQyxDQUFQO0FBQTJEOzs7NkJBRWxGRyxJLEVBQU1ILGEsRUFBZTtBQUFFLGFBQU9ILFlBQVksQ0FBQ08sUUFBYixDQUFzQkwsS0FBdEIsRUFBNkJJLElBQTdCLEVBQW1DSCxhQUFuQyxDQUFQO0FBQTJEOzs7bUNBRTVFSyxVLEVBQVlMLGEsRUFBZTtBQUFFLGFBQU9ILFlBQVksQ0FBQ1MsY0FBYixDQUE0QlAsS0FBNUIsRUFBbUNNLFVBQW5DLEVBQStDTCxhQUEvQyxDQUFQO0FBQXVFOzs7bUNBRXBHTyxVLEVBQVk7QUFBRSxhQUFPVixZQUFZLENBQUNXLGNBQWIsQ0FBNEJULEtBQTVCLEVBQW1DUSxVQUFuQyxDQUFQO0FBQXdEOzs7O0VBVDFFVixZOztBQVlwQlksTUFBTSxDQUFDQyxNQUFQLENBQWNYLEtBQWQsRUFBcUI7QUFDbkJZLEVBQUFBLE9BQU8sRUFBRTtBQURVLENBQXJCO0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsS0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhJbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiJdfQ==