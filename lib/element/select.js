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
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          select = _element["default"].fromClass(Class, properties, changeHandler);

      return select;
    }
  }]);

  return Select;
}(_element["default"]);

exports["default"] = Select;

_defineProperty(Select, "tagName", "select");

_defineProperty(Select, "ignoredProperties", ["onChange"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsIm9uIiwib2ZmIiwidmFsdWUiLCJkb21FbGVtZW50Iiwic2VsZWN0ZWRPcHRpb25WYWx1ZSIsIkNsYXNzIiwicHJvcGVydGllcyIsInNlbGVjdCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBQ25CLGtCQUFZQyxvQkFBWixFQUF3RDtBQUFBOztBQUFBLFFBQXRCQyxhQUFzQix1RUFBTixJQUFNOztBQUFBOztBQUN0RCxnRkFBTUQsb0JBQU47O0FBRUEsUUFBSUMsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEOztBQUxxRDtBQU12RDs7Ozs2QkFFUUEsYSxFQUFlO0FBQUUsV0FBS0UsRUFBTCxDQUFRLFFBQVIsRUFBa0JGLGFBQWxCO0FBQW1DOzs7OEJBRW5EQSxhLEVBQWU7QUFBRSxXQUFLRyxHQUFMLENBQVMsUUFBVCxFQUFtQkgsYUFBbkI7QUFBb0M7Ozs2Q0FFdEM7QUFDdkIsVUFBTUksS0FBSyxHQUFHLEtBQUtDLFVBQUwsQ0FBZ0JELEtBQTlCO0FBQUEsVUFBc0M7QUFDaENFLE1BQUFBLG1CQUFtQixHQUFHRixLQUQ1QixDQUR1QixDQUVhOztBQUVwQyxhQUFPRSxtQkFBUDtBQUNEOzs7NkNBRXdCQSxtQixFQUFxQjtBQUM1QyxVQUFNRixLQUFLLEdBQUdFLG1CQUFkLENBRDRDLENBQ1I7O0FBRXBDLFdBQUtELFVBQUwsQ0FBZ0JELEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNEOzs7OEJBUWdCRyxLLEVBQU9DLFUsRUFBWTtBQUM1QixVQUFFUCxRQUFGLEdBQWVPLFVBQWYsQ0FBRVAsUUFBRjtBQUFBLFVBQ0FELGFBREEsR0FDZ0JDLFFBRGhCO0FBQUEsVUFFQVEsTUFGQSxHQUVTQyxvQkFBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLEVBQXFDUixhQUFyQyxDQUZUOztBQUlOLGFBQU9TLE1BQVA7QUFDRDs7OztFQXRDaUNDLG1COzs7O2dCQUFmWixNLGFBMEJGLFE7O2dCQTFCRUEsTSx1QkE0QlEsQ0FDekIsVUFEeUIsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIgPSBudWxsKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlcikgeyB0aGlzLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHsgdGhpcy5vZmYoXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kb21FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHZhbHVlOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb25WYWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2VsZWN0ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBzZWxlY3Q7XG4gIH1cbn1cbiJdfQ==