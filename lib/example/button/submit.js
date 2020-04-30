"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

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

var LEFT_MOUSE_BUTTON = _index.constants.LEFT_MOUSE_BUTTON;

var SubmitButton = /*#__PURE__*/function (_Button) {
  _inherits(SubmitButton, _Button);

  function SubmitButton() {
    _classCallCheck(this, SubmitButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubmitButton).apply(this, arguments));
  }

  _createClass(SubmitButton, [{
    key: "childElements",
    value: function childElements(properties) {
      return "Submit";
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.onClick(function (event, element) {
        var button = event.button;
        console.log(button === LEFT_MOUSE_BUTTON);
      });
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var submitButton = _index.Button.fromClass(Class, properties);

      submitButton.initialise(properties);
      return submitButton;
    }
  }]);

  return SubmitButton;
}(_index.Button);

exports["default"] = SubmitButton;

_defineProperty(SubmitButton, "defaultProperties", {
  className: "submit"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJMRUZUX01PVVNFX0JVVFRPTiIsImNvbnN0YW50cyIsIlN1Ym1pdEJ1dHRvbiIsInByb3BlcnRpZXMiLCJvbkNsaWNrIiwiZXZlbnQiLCJlbGVtZW50IiwiYnV0dG9uIiwiY29uc29sZSIsImxvZyIsIkNsYXNzIiwic3VibWl0QnV0dG9uIiwiQnV0dG9uIiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxpQixHQUFzQkMsZ0IsQ0FBdEJELGlCOztJQUVhRSxZOzs7Ozs7Ozs7OztrQ0FDTEMsVSxFQUFZO0FBQ3hCLGFBQU8sUUFBUDtBQUNEOzs7K0JBTVVBLFUsRUFBWTtBQUNyQixXQUFLQyxPQUFMLENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsWUFDdkJDLE1BRHVCLEdBQ1pGLEtBRFksQ0FDdkJFLE1BRHVCO0FBRy9CQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxLQUFLUCxpQkFBdkI7QUFDRCxPQUpEO0FBS0Q7Ozs4QkFFZ0JVLEssRUFBT1AsVSxFQUFZO0FBQ2xDLFVBQU1RLFlBQVksR0FBR0MsY0FBT0MsU0FBUCxDQUFpQkgsS0FBakIsRUFBd0JQLFVBQXhCLENBQXJCOztBQUVBUSxNQUFBQSxZQUFZLENBQUNHLFVBQWIsQ0FBd0JYLFVBQXhCO0FBRUEsYUFBT1EsWUFBUDtBQUNEOzs7O0VBdkJ1Q0MsYTs7OztnQkFBckJWLFksdUJBS1E7QUFDekJhLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBjb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcblxuY29uc3QgeyBMRUZUX01PVVNFX0JVVFRPTiB9ID0gY29uc3RhbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJtaXRCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gXCJTdWJtaXRcIjtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3VibWl0XCJcbiAgfTtcblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLm9uQ2xpY2soKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gQnV0dG9uLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBzdWJtaXRCdXR0b24uaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBzdWJtaXRCdXR0b247XG4gIH1cbn1cbiJdfQ==