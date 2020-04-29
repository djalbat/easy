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

var Checkbox = /*#__PURE__*/function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selectorOrDOMElement, changeHandler, checked) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selectorOrDOMElement));

    _this.check(checked);

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChange",
    value: function onChange(changeHandler) {
      this.on("click", changeHandler);
    } ///

  }, {
    key: "offChange",
    value: function offChange(changeHandler) {
      this.off("click", changeHandler);
    } ///

  }, {
    key: "check",
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.domElement.checked = checked;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      return this.domElement.checked;
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$onChange = properties.onChange,
          onChange = _properties$onChange === void 0 ? null : _properties$onChange,
          _properties$checked = properties.checked,
          checked = _properties$checked === void 0 ? null : _properties$checked,
          changeHandler = onChange,
          checkbox = _element["default"].fromClass(Class, properties, changeHandler, checked);

      return checkbox;
    }
  }]);

  return Checkbox;
}(_element["default"]);

exports["default"] = Checkbox;

_defineProperty(Checkbox, "tagName", "input");

_defineProperty(Checkbox, "ignoredProperties", ["onChange", "checked"]);

_defineProperty(Checkbox, "defaultProperties", {
  type: "checkbox"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwic2VsZWN0b3JPckRPTUVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsImNoZWNrIiwib25DaGFuZ2UiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJjaGVja2JveCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNuQixvQkFBWUMsb0JBQVosRUFBa0NDLGFBQWxDLEVBQWlEQyxPQUFqRCxFQUEwRDtBQUFBOztBQUFBOztBQUN4RCxrRkFBTUYsb0JBQU47O0FBRUEsVUFBS0csS0FBTCxDQUFXRCxPQUFYOztBQUVBLFFBQUlELGFBQWEsS0FBSyxJQUF0QixFQUE0QjtBQUMxQixZQUFLRyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFQdUQ7QUFRekQ7Ozs7NkJBRVFBLGEsRUFBZTtBQUFFLFdBQUtJLEVBQUwsQ0FBUSxPQUFSLEVBQWlCSixhQUFqQjtBQUFrQyxLLENBQUM7Ozs7OEJBRW5EQSxhLEVBQWU7QUFBRSxXQUFLSyxHQUFMLENBQVMsT0FBVCxFQUFrQkwsYUFBbEI7QUFBbUMsSyxDQUFDOzs7OzRCQUV6QztBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNO0FBQUUsV0FBS0ssVUFBTCxDQUFnQkwsT0FBaEIsR0FBMEJBLE9BQTFCO0FBQW9DOzs7Z0NBRWhEO0FBQUUsYUFBTyxLQUFLSyxVQUFMLENBQWdCTCxPQUF2QjtBQUFpQzs7OzhCQWE5Qk0sSyxFQUFPQyxVLEVBQVk7QUFBQSxpQ0FDVUEsVUFEVixDQUMxQkwsUUFEMEI7QUFBQSxVQUMxQkEsUUFEMEIscUNBQ2YsSUFEZTtBQUFBLGdDQUNVSyxVQURWLENBQ1RQLE9BRFM7QUFBQSxVQUNUQSxPQURTLG9DQUNDLElBREQ7QUFBQSxVQUU1QkQsYUFGNEIsR0FFWkcsUUFGWTtBQUFBLFVBRzVCTSxRQUg0QixHQUdqQkMsb0JBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixFQUFxQ1IsYUFBckMsRUFBb0RDLE9BQXBELENBSGlCOztBQUtsQyxhQUFPUSxRQUFQO0FBQ0Q7Ozs7RUFwQ21DQyxtQjs7OztnQkFBakJaLFEsYUFtQkYsTzs7Z0JBbkJFQSxRLHVCQXFCUSxDQUN6QixVQUR5QixFQUV6QixTQUZ5QixDOztnQkFyQlJBLFEsdUJBMEJRO0FBQ3pCYyxFQUFBQSxJQUFJLEVBQUU7QUFEbUIsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7IHRoaXMub24oXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyKTsgfSAvLy9cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikgeyB0aGlzLm9mZihcImNsaWNrXCIsIGNoYW5nZUhhbmRsZXIpOyB9IC8vL1xuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7IHRoaXMuZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDsgfVxuXG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcImNoZWNrZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSA9IG51bGwsIGNoZWNrZWQgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgY2hlY2tib3ggPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG5cbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH1cbn1cbiJdfQ==