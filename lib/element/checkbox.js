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

  function Checkbox(selectorOrDOMElement) {
    var _this;

    var changeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
      var onChange = properties.onChange,
          checked = properties.checked,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwic2VsZWN0b3JPckRPTUVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsImNoZWNrIiwib25DaGFuZ2UiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJjaGVja2JveCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNuQixvQkFBWUMsb0JBQVosRUFBeUU7QUFBQTs7QUFBQSxRQUF2Q0MsYUFBdUMsdUVBQXZCLElBQXVCO0FBQUEsUUFBakJDLE9BQWlCLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3ZFLGtGQUFNRixvQkFBTjs7QUFFQSxVQUFLRyxLQUFMLENBQVdELE9BQVg7O0FBRUEsUUFBSUQsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFlBQUtHLFFBQUwsQ0FBY0gsYUFBZDtBQUNEOztBQVBzRTtBQVF4RTs7Ozs2QkFFUUEsYSxFQUFlO0FBQUUsV0FBS0ksRUFBTCxDQUFRLE9BQVIsRUFBaUJKLGFBQWpCO0FBQWtDLEssQ0FBQzs7Ozs4QkFFbkRBLGEsRUFBZTtBQUFFLFdBQUtLLEdBQUwsQ0FBUyxPQUFULEVBQWtCTCxhQUFsQjtBQUFtQyxLLENBQUM7Ozs7NEJBRXpDO0FBQUEsVUFBaEJDLE9BQWdCLHVFQUFOLElBQU07QUFBRSxXQUFLSyxVQUFMLENBQWdCTCxPQUFoQixHQUEwQkEsT0FBMUI7QUFBb0M7OztnQ0FFaEQ7QUFBRSxhQUFPLEtBQUtLLFVBQUwsQ0FBZ0JMLE9BQXZCO0FBQWlDOzs7OEJBYTlCTSxLLEVBQU9DLFUsRUFBWTtBQUFBLFVBQzFCTCxRQUQwQixHQUNKSyxVQURJLENBQzFCTCxRQUQwQjtBQUFBLFVBQ2hCRixPQURnQixHQUNKTyxVQURJLENBQ2hCUCxPQURnQjtBQUFBLFVBRTVCRCxhQUY0QixHQUVaRyxRQUZZO0FBQUEsVUFHNUJNLFFBSDRCLEdBR2pCQyxvQkFBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLEVBQXFDUixhQUFyQyxFQUFvREMsT0FBcEQsQ0FIaUI7O0FBS2xDLGFBQU9RLFFBQVA7QUFDRDs7OztFQXBDbUNDLG1COzs7O2dCQUFqQlosUSxhQW1CRixPOztnQkFuQkVBLFEsdUJBcUJRLENBQ3pCLFVBRHlCLEVBRXpCLFNBRnlCLEM7O2dCQXJCUkEsUSx1QkEwQlE7QUFDekJjLEVBQUFBLElBQUksRUFBRTtBQURtQixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjaGFuZ2VIYW5kbGVyID0gbnVsbCwgY2hlY2tlZCA9IGZhbHNlKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5jaGVjayhjaGVja2VkKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHsgdGhpcy5vbihcImNsaWNrXCIsIGNoYW5nZUhhbmRsZXIpOyB9IC8vL1xuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7IHRoaXMub2ZmKFwiY2xpY2tcIiwgY2hhbmdlSGFuZGxlcik7IH0gLy8vXG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHsgdGhpcy5kb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkOyB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNoYW5nZVwiLFxuICAgIFwiY2hlY2tlZFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgY2hlY2tib3ggPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG5cbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH1cbn1cbiJdfQ==