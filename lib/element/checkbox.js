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

  function Checkbox(selector, changeHandler, checked) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selector));

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    _this.check(checked);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiY2hlY2siLCJlbGVtZW50Iiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiY2hlY2tib3giLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFDbkIsb0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDQyxPQUFyQyxFQUE4QztBQUFBOztBQUFBOztBQUM1QyxrRkFBTUYsUUFBTjs7QUFFQSxRQUFJQyxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUIsWUFBS0UsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7O0FBRUQsVUFBS0csS0FBTCxDQUFXRixPQUFYOztBQVA0QztBQVE3Qzs7Ozs2QkFFUUQsYSxFQUFlSSxPLEVBQVM7QUFBRSxXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQkwsYUFBakIsRUFBZ0NJLE9BQWhDO0FBQTJDLEssQ0FBQzs7Ozs4QkFFckVKLGEsRUFBZUksTyxFQUFTO0FBQUUsV0FBS0UsR0FBTCxDQUFTLE9BQVQsRUFBa0JOLGFBQWxCLEVBQWlDSSxPQUFqQztBQUE0QyxLLENBQUM7Ozs7NEJBRTNEO0FBQUEsVUFBaEJILE9BQWdCLHVFQUFOLElBQU07QUFBRSxXQUFLTSxVQUFMLENBQWdCTixPQUFoQixHQUEwQkEsT0FBMUI7QUFBb0M7OztnQ0FFaEQ7QUFBRSxhQUFPLEtBQUtNLFVBQUwsQ0FBZ0JOLE9BQXZCO0FBQWlDOzs7OEJBYTlCTyxLLEVBQU9DLFUsRUFBWTtBQUFBLGlDQUNVQSxVQURWLENBQzFCUCxRQUQwQjtBQUFBLFVBQzFCQSxRQUQwQixxQ0FDZixJQURlO0FBQUEsZ0NBQ1VPLFVBRFYsQ0FDVFIsT0FEUztBQUFBLFVBQ1RBLE9BRFMsb0NBQ0MsSUFERDtBQUFBLFVBRTVCRCxhQUY0QixHQUVaRSxRQUZZO0FBQUEsVUFHNUJRLFFBSDRCLEdBR2pCQyxvQkFBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLEVBQXFDVCxhQUFyQyxFQUFvREMsT0FBcEQsQ0FIaUI7O0FBS2xDLGFBQU9TLFFBQVA7QUFDRDs7OztFQXBDbUNDLG1COzs7O2dCQUFqQmIsUSxhQW1CRixPOztnQkFuQkVBLFEsdUJBcUJRLENBQ3pCLFVBRHlCLEVBRXpCLFNBRnlCLEM7O2dCQXJCUkEsUSx1QkEwQlE7QUFDekJlLEVBQUFBLElBQUksRUFBRTtBQURtQixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihcImNsaWNrXCIsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwiY2xpY2tcIiwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH0gLy8vXG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHsgdGhpcy5kb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkOyB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNoYW5nZVwiLFxuICAgIFwiY2hlY2tlZFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlID0gbnVsbCwgY2hlY2tlZCA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcblxuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxufVxuIl19