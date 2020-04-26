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

var Select = /*#__PURE__*/function (_Element) {
  _inherits(Select, _Element);

  function Select(selectorOrDOMElement) {
    var _this;

    var changeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Select, [{
    key: "onChange",
    value: function onChange(changeHandler) {
      this.on("change", changeHandler);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler) {
      this.off("change", changeHandler);
    }
  }, {
    key: "getSelectedOptionValue",
    value: function getSelectedOptionValue() {
      var value = this.domElement.value,
          ///
      selectedOptionValue = value; ///

      return selectedOptionValue;
    }
  }, {
    key: "setSelectedOptionByValue",
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue; ///

      this.domElement.value = value;
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          select = _element["default"].fromProperties(Select, properties, changeHandler);

      return select;
    }
  }]);

  return Select;
}(_element["default"]);

exports["default"] = Select;

_defineProperty(Select, "tagName", "select");

_defineProperty(Select, "ignoredProperties", ["onChange"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsIm9uIiwib2ZmIiwidmFsdWUiLCJkb21FbGVtZW50Iiwic2VsZWN0ZWRPcHRpb25WYWx1ZSIsInByb3BlcnRpZXMiLCJzZWxlY3QiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBQ25CLGtCQUFZQyxvQkFBWixFQUF3RDtBQUFBOztBQUFBLFFBQXRCQyxhQUFzQix1RUFBTixJQUFNOztBQUFBOztBQUN0RCxnRkFBTUQsb0JBQU47O0FBRUEsUUFBSUMsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEOztBQUxxRDtBQU12RDs7Ozs2QkFFUUEsYSxFQUFlO0FBQUUsV0FBS0UsRUFBTCxDQUFRLFFBQVIsRUFBa0JGLGFBQWxCO0FBQW1DOzs7OEJBRW5EQSxhLEVBQWU7QUFBRSxXQUFLRyxHQUFMLENBQVMsUUFBVCxFQUFtQkgsYUFBbkI7QUFBb0M7Ozs2Q0FFdEM7QUFDdkIsVUFBTUksS0FBSyxHQUFHLEtBQUtDLFVBQUwsQ0FBZ0JELEtBQTlCO0FBQUEsVUFBc0M7QUFDaENFLE1BQUFBLG1CQUFtQixHQUFHRixLQUQ1QixDQUR1QixDQUVhOztBQUVwQyxhQUFPRSxtQkFBUDtBQUNEOzs7NkNBRXdCQSxtQixFQUFxQjtBQUM1QyxVQUFNRixLQUFLLEdBQUdFLG1CQUFkLENBRDRDLENBQ1I7O0FBRXBDLFdBQUtELFVBQUwsQ0FBZ0JELEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNEOzs7bUNBUXFCRyxVLEVBQVk7QUFDMUIsVUFBRU4sUUFBRixHQUFlTSxVQUFmLENBQUVOLFFBQUY7QUFBQSxVQUNBRCxhQURBLEdBQ2dCQyxRQURoQjtBQUFBLFVBRUFPLE1BRkEsR0FFU0Msb0JBQVFDLGNBQVIsQ0FBdUJaLE1BQXZCLEVBQStCUyxVQUEvQixFQUEyQ1AsYUFBM0MsQ0FGVDs7QUFJTixhQUFPUSxNQUFQO0FBQ0Q7Ozs7RUF0Q2lDQyxtQjs7OztnQkFBZlgsTSxhQTBCRixROztnQkExQkVBLE0sdUJBNEJRLENBQ3pCLFVBRHlCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjaGFuZ2VIYW5kbGVyID0gbnVsbCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHsgdGhpcy5vbihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7IHRoaXMub2ZmKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB2YWx1ZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uVmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlbGVjdFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzZWxlY3QgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxufVxuIl19