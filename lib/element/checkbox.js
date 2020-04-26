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

var Checkbox = /*#__PURE__*/function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selector, changeHandler, checked) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }

    return _this;
  }

  _createClass(Checkbox, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: "onChange",
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;
      this.on("click", changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, object) {
      this.off("click", changeHandler, object); ///
    }
  }, {
    key: "check",
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var domElement = this.getDOMElement();
      domElement.checked = checked;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;
      return checked;
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return _element["default"].clone(Checkbox, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return _element["default"].fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return _element["default"].fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          checkbox = _element["default"].fromProperties(Checkbox, properties, changeHandler, checked);

      return checkbox;
    }
  }]);

  return Checkbox;
}(_element["default"]);

exports["default"] = Checkbox;
Object.assign(Checkbox, {
  tagName: "input",
  ignoredProperties: ["onChange", "checked"],
  defaultProperties: {
    type: "checkbox"
  }
});

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var checkbox = element,
      ///
  checked = checkbox.isChecked();
  changeHandler.call(element, checked, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2hlY2siLCJjbG9uZSIsIm9iamVjdCIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJlbGVtZW50IiwiRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImNoZWNrYm94IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJldmVudCIsImlzQ2hlY2tlZCIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNuQixvQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLGtGQUFNRixRQUFOOztBQUVBLFFBQUlDLGFBQWEsS0FBS0UsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjSCxhQUFkO0FBQ0Q7O0FBRUQsUUFBSUMsT0FBTyxLQUFLQyxTQUFoQixFQUEyQjtBQUN6QixZQUFLRSxLQUFMLENBQVdILE9BQVg7QUFDRDs7QUFUMkM7QUFVN0M7Ozs7MEJBRUtELGEsRUFBZTtBQUFFLGFBQU9GLFFBQVEsQ0FBQ08sS0FBVCxDQUFlLElBQWYsRUFBcUJMLGFBQXJCLENBQVA7QUFBNkM7Ozs2QkFFM0RBLGEsRUFBZU0sTSxFQUFzRTtBQUFBLFVBQTlEQyx5QkFBOEQsdUVBQWxDQyxnQ0FBa0M7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJULGFBQWpCLEVBQWdDTSxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNQLGEsRUFBZU0sTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCVixhQUFsQixFQUFpQ00sTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7OzRCQUVxQjtBQUFBLFVBQWhCTCxPQUFnQix1RUFBTixJQUFNO0FBQ3BCLFVBQU1VLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBRUFELE1BQUFBLFVBQVUsQ0FBQ1YsT0FBWCxHQUFxQkEsT0FBckI7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTVUsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNJWCxPQUFPLEdBQUdVLFVBQVUsQ0FBQ1YsT0FEekI7QUFHQSxhQUFPQSxPQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7Z0NBRUQsQ0FBRTs7OzBCQUVEWSxPLEVBQVNiLGEsRUFBZTtBQUFFLGFBQU9jLG9CQUFRVCxLQUFSLENBQWNQLFFBQWQsRUFBd0JlLE9BQXhCLEVBQWlDYixhQUFqQyxDQUFQO0FBQXlEOzs7NkJBRWhGZSxJLEVBQU1mLGEsRUFBZTtBQUFFLGFBQU9jLG9CQUFRRSxRQUFSLENBQWlCbEIsUUFBakIsRUFBMkJpQixJQUEzQixFQUFpQ2YsYUFBakMsQ0FBUDtBQUF5RDs7O21DQUUxRVcsVSxFQUFZWCxhLEVBQWU7QUFBRSxhQUFPYyxvQkFBUUcsY0FBUixDQUF1Qm5CLFFBQXZCLEVBQWlDYSxVQUFqQyxFQUE2Q1gsYUFBN0MsQ0FBUDtBQUFxRTs7O21DQUVsR2tCLFUsRUFBWTtBQUFBLFVBQ3hCZixRQUR3QixHQUNGZSxVQURFLENBQ3hCZixRQUR3QjtBQUFBLFVBQ2RGLE9BRGMsR0FDRmlCLFVBREUsQ0FDZGpCLE9BRGM7QUFBQSxVQUUxQkQsYUFGMEIsR0FFVkcsUUFGVTtBQUFBLFVBRzFCZ0IsUUFIMEIsR0FHZkwsb0JBQVFNLGNBQVIsQ0FBdUJ0QixRQUF2QixFQUFpQ29CLFVBQWpDLEVBQTZDbEIsYUFBN0MsRUFBNERDLE9BQTVELENBSGU7O0FBS2hDLGFBQU9rQixRQUFQO0FBQ0Q7Ozs7RUFwRG1DTCxtQjs7O0FBdUR0Q08sTUFBTSxDQUFDQyxNQUFQLENBQWN4QixRQUFkLEVBQXdCO0FBQ3RCeUIsRUFBQUEsT0FBTyxFQUFFLE9BRGE7QUFFdEJDLEVBQUFBLGlCQUFpQixFQUFFLENBQ2pCLFVBRGlCLEVBRWpCLFNBRmlCLENBRkc7QUFNdEJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxJQUFJLEVBQUU7QUFEVztBQU5HLENBQXhCOztBQVdBLFNBQVNsQixnQ0FBVCxDQUEwQ1IsYUFBMUMsRUFBeUQyQixLQUF6RCxFQUFnRWQsT0FBaEUsRUFBeUU7QUFDdkUsTUFBTU0sUUFBUSxHQUFHTixPQUFqQjtBQUFBLE1BQTBCO0FBQ3BCWixFQUFBQSxPQUFPLEdBQUdrQixRQUFRLENBQUNTLFNBQVQsRUFEaEI7QUFHQTVCLEVBQUFBLGFBQWEsQ0FBQzZCLElBQWQsQ0FBbUJoQixPQUFuQixFQUE0QlosT0FBNUIsRUFBcUMwQixLQUFyQyxFQUE0Q2QsT0FBNUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cbiAgXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZihcImNsaWNrXCIsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vLyAgICBcbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuICAgIFxuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6IFwiaW5wdXRcIixcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJjaGVja2VkXCJcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZWxlbWVudCwgLy8vXG4gICAgICAgIGNoZWNrZWQgPSBjaGVja2JveC5pc0NoZWNrZWQoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIuY2FsbChlbGVtZW50LCBjaGVja2VkLCBldmVudCwgZWxlbWVudCk7XG59XG4iXX0=