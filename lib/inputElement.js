"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

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

var InputElement = /*#__PURE__*/function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selectorOrDOMElement) {
    var _this;

    var changeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, InputElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputElement).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(InputElement, [{
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }, {
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
    key: "getValue",
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: "getSelectionStart",
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: "getSelectionEnd",
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return this.domElement.readOnly;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: "setSelectionStart",
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: "setSelectionEnd",
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: "setReadOnly",
    value: function setReadOnly(readOnly) {
      this.domElement.readOnly = readOnly;
    }
  }, {
    key: "select",
    value: function select() {
      this.domElement.select();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _element["default"].fromClass.apply(_element["default"], [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(_element["default"]);

exports["default"] = InputElement;

_defineProperty(InputElement, "ignoredProperties", ["onChange"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsInZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJyZWFkT25seSIsInNlbGVjdCIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7O0FBQ25CLHdCQUFZQyxvQkFBWixFQUF3RDtBQUFBOztBQUFBLFFBQXRCQyxhQUFzQix1RUFBTixJQUFNOztBQUFBOztBQUN0RCxzRkFBTUQsb0JBQU47O0FBRUEsUUFBSUMsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEOztBQUxxRDtBQU12RDs7OzsrQkFFVSxDQUFFOzs7Z0NBRUQsQ0FBRTs7OzZCQUVMQSxhLEVBQWU7QUFBRSxXQUFLRSxFQUFMLENBQVEsUUFBUixFQUFrQkYsYUFBbEI7QUFBbUM7Ozs4QkFFbkRBLGEsRUFBZTtBQUFFLFdBQUtHLEdBQUwsQ0FBUyxRQUFULEVBQW1CSCxhQUFuQjtBQUFvQzs7OytCQUVwRDtBQUFFLGFBQU8sS0FBS0ksVUFBTCxDQUFnQkMsS0FBdkI7QUFBK0I7Ozt3Q0FFeEI7QUFBRSxhQUFPLEtBQUtELFVBQUwsQ0FBZ0JFLGNBQXZCO0FBQXdDOzs7c0NBRTVDO0FBQUUsYUFBTyxLQUFLRixVQUFMLENBQWdCRyxZQUF2QjtBQUFzQzs7O2lDQUU3QztBQUFFLGFBQU8sS0FBS0gsVUFBTCxDQUFnQkksUUFBdkI7QUFBa0M7Ozs2QkFFeENILEssRUFBTztBQUFFLFdBQUtELFVBQUwsQ0FBZ0JDLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUFnQzs7O3NDQUVoQ0MsYyxFQUFnQjtBQUFFLFdBQUtGLFVBQUwsQ0FBZ0JFLGNBQWhCLEdBQWlDQSxjQUFqQztBQUFrRDs7O29DQUV0RUMsWSxFQUFjO0FBQUUsV0FBS0gsVUFBTCxDQUFnQkcsWUFBaEIsR0FBK0JBLFlBQS9CO0FBQThDOzs7Z0NBRWxFQyxRLEVBQVU7QUFBRSxXQUFLSixVQUFMLENBQWdCSSxRQUFoQixHQUEyQkEsUUFBM0I7QUFBc0M7Ozs2QkFFckQ7QUFBRSxXQUFLSixVQUFMLENBQWdCSyxNQUFoQjtBQUEyQjs7OzhCQU1yQkMsSyxFQUFPQyxVLEVBQW1DO0FBQ25ELFVBQUVWLFFBQUYsR0FBZVUsVUFBZixDQUFFVixRQUFGO0FBQUEsVUFDQUQsYUFEQSxHQUNnQkMsUUFEaEIsQ0FEbUQsQ0FFekI7O0FBRnlCLHdDQUFwQlcsa0JBQW9CO0FBQXBCQSxRQUFBQSxrQkFBb0I7QUFBQTs7QUFJekQsYUFBT0Msb0JBQVFDLFNBQVIsNkJBQWtCSixLQUFsQixFQUF5QkMsVUFBekIsRUFBcUNYLGFBQXJDLFNBQXVEWSxrQkFBdkQsRUFBUDtBQUNEOzs7O0VBNUN1Q0MsbUI7Ozs7Z0JBQXJCZixZLHVCQW1DUSxDQUN6QixVQUR5QixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjaGFuZ2VIYW5kbGVyID0gbnVsbCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHsgdGhpcy5vbihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7IHRoaXMub2ZmKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cbiJdfQ==