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
    value: function onChange(changeHandler, element) {
      this.on("click", changeHandler, element);
    } ///

  }, {
    key: "offChange",
    value: function offChange(changeHandler, element) {
      this.off("click", changeHandler, element);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwic2VsZWN0b3JPckRPTUVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsImNoZWNrIiwib25DaGFuZ2UiLCJlbGVtZW50Iiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiY2hlY2tib3giLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFDbkIsb0JBQVlDLG9CQUFaLEVBQWtDQyxhQUFsQyxFQUFpREMsT0FBakQsRUFBMEQ7QUFBQTs7QUFBQTs7QUFDeEQsa0ZBQU1GLG9CQUFOOztBQUVBLFVBQUtHLEtBQUwsQ0FBV0QsT0FBWDs7QUFFQSxRQUFJRCxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUIsWUFBS0csUUFBTCxDQUFjSCxhQUFkO0FBQ0Q7O0FBUHVEO0FBUXpEOzs7OzZCQUVRQSxhLEVBQWVJLE8sRUFBUztBQUFFLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCTCxhQUFqQixFQUFnQ0ksT0FBaEM7QUFBMkMsSyxDQUFDOzs7OzhCQUVyRUosYSxFQUFlSSxPLEVBQVM7QUFBRSxXQUFLRSxHQUFMLENBQVMsT0FBVCxFQUFrQk4sYUFBbEIsRUFBaUNJLE9BQWpDO0FBQTRDLEssQ0FBQzs7Ozs0QkFFM0Q7QUFBQSxVQUFoQkgsT0FBZ0IsdUVBQU4sSUFBTTtBQUFFLFdBQUtNLFVBQUwsQ0FBZ0JOLE9BQWhCLEdBQTBCQSxPQUExQjtBQUFvQzs7O2dDQUVoRDtBQUFFLGFBQU8sS0FBS00sVUFBTCxDQUFnQk4sT0FBdkI7QUFBaUM7Ozs4QkFhOUJPLEssRUFBT0MsVSxFQUFZO0FBQUEsaUNBQ1VBLFVBRFYsQ0FDMUJOLFFBRDBCO0FBQUEsVUFDMUJBLFFBRDBCLHFDQUNmLElBRGU7QUFBQSxnQ0FDVU0sVUFEVixDQUNUUixPQURTO0FBQUEsVUFDVEEsT0FEUyxvQ0FDQyxJQUREO0FBQUEsVUFFNUJELGFBRjRCLEdBRVpHLFFBRlk7QUFBQSxVQUc1Qk8sUUFINEIsR0FHakJDLG9CQUFRQyxTQUFSLENBQWtCSixLQUFsQixFQUF5QkMsVUFBekIsRUFBcUNULGFBQXJDLEVBQW9EQyxPQUFwRCxDQUhpQjs7QUFLbEMsYUFBT1MsUUFBUDtBQUNEOzs7O0VBcENtQ0MsbUI7Ozs7Z0JBQWpCYixRLGFBbUJGLE87O2dCQW5CRUEsUSx1QkFxQlEsQ0FDekIsVUFEeUIsRUFFekIsU0FGeUIsQzs7Z0JBckJSQSxRLHVCQTBCUTtBQUN6QmUsRUFBQUEsSUFBSSxFQUFFO0FBRG1CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFwiY2xpY2tcIiwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH0gLy8vXG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7IH1cblxuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJjaGVja2VkXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgPSBudWxsLCBjaGVja2VkID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIGNoZWNrYm94ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuXG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG59XG4iXX0=