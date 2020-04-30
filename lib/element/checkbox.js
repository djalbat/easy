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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Checkbox = /*#__PURE__*/function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selectorOrDOMElement, changeHandler, checked) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selectorOrDOMElement));

    _defineProperty(_assertThisInitialized(_this), "onChange", onChange);

    _defineProperty(_assertThisInitialized(_this), "offChange", offChange);

    _this.check(checked);

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Checkbox, [{
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

function onChange(changeHandler, element) {
  this.on("click", changeHandler, element);
} ///


function offChange(changeHandler, element) {
  this.off("click", changeHandler, element);
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwic2VsZWN0b3JPckRPTUVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwib2ZmQ2hhbmdlIiwiY2hlY2siLCJkb21FbGVtZW50IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiY2hlY2tib3giLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwidHlwZSIsImVsZW1lbnQiLCJvbiIsIm9mZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFJbkIsb0JBQVlDLG9CQUFaLEVBQWtDQyxhQUFsQyxFQUFpREMsT0FBakQsRUFBMEQ7QUFBQTs7QUFBQTs7QUFDeEQsa0ZBQU1GLG9CQUFOOztBQUR3RCwrREFIL0NHLFFBRytDOztBQUFBLGdFQUY5Q0MsU0FFOEM7O0FBR3hELFVBQUtDLEtBQUwsQ0FBV0gsT0FBWDs7QUFFQSxRQUFJRCxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUIsWUFBS0UsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7O0FBUHVEO0FBUXpEOzs7OzRCQUVxQjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNO0FBQUUsV0FBS0ksVUFBTCxDQUFnQkosT0FBaEIsR0FBMEJBLE9BQTFCO0FBQW9DOzs7Z0NBRWhEO0FBQUUsYUFBTyxLQUFLSSxVQUFMLENBQWdCSixPQUF2QjtBQUFpQzs7OzhCQWE5QkssSyxFQUFPQyxVLEVBQVk7QUFBQSxpQ0FDVUEsVUFEVixDQUMxQkwsUUFEMEI7QUFBQSxVQUMxQkEsUUFEMEIscUNBQ2YsSUFEZTtBQUFBLGdDQUNVSyxVQURWLENBQ1ROLE9BRFM7QUFBQSxVQUNUQSxPQURTLG9DQUNDLElBREQ7QUFBQSxVQUU1QkQsYUFGNEIsR0FFWkUsUUFGWTtBQUFBLFVBRzVCTSxRQUg0QixHQUdqQkMsb0JBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixFQUFxQ1AsYUFBckMsRUFBb0RDLE9BQXBELENBSGlCOztBQUtsQyxhQUFPTyxRQUFQO0FBQ0Q7Ozs7RUFuQ21DQyxtQjs7OztnQkFBakJYLFEsYUFrQkYsTzs7Z0JBbEJFQSxRLHVCQW9CUSxDQUN6QixVQUR5QixFQUV6QixTQUZ5QixDOztnQkFwQlJBLFEsdUJBeUJRO0FBQ3pCYSxFQUFBQSxJQUFJLEVBQUU7QUFEbUIsQzs7QUFhN0IsU0FBU1QsUUFBVCxDQUFrQkYsYUFBbEIsRUFBaUNZLE9BQWpDLEVBQTBDO0FBQUUsT0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJiLGFBQWpCLEVBQWdDWSxPQUFoQztBQUEyQyxDLENBQUM7OztBQUV4RixTQUFTVCxTQUFULENBQW1CSCxhQUFuQixFQUFrQ1ksT0FBbEMsRUFBMkM7QUFBRSxPQUFLRSxHQUFMLENBQVMsT0FBVCxFQUFrQmQsYUFBbEIsRUFBaUNZLE9BQWpDO0FBQTRDLEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBvbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICBvZmZDaGFuZ2UgPSBvZmZDaGFuZ2U7XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHsgdGhpcy5kb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkOyB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNoYW5nZVwiLFxuICAgIFwiY2hlY2tlZFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlID0gbnVsbCwgY2hlY2tlZCA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcblxuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuZnVuY3Rpb24gb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cbiJdfQ==