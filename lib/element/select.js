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

var Select = /*#__PURE__*/function (_Element) {
  _inherits(Select, _Element);

  function Select(selectorOrDOMElement, changeHandler) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, selectorOrDOMElement));

    _defineProperty(_assertThisInitialized(_this), "onChange", onChange);

    _defineProperty(_assertThisInitialized(_this), "offChange", offChange);

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Select, [{
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
      var _properties$onChange = properties.onChange,
          onChange = _properties$onChange === void 0 ? null : _properties$onChange,
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

function onChange(changeHandler, element) {
  this.on("change", changeHandler, element);
}

function offChange(changeHandler, element) {
  this.off("change", changeHandler, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsIm9mZkNoYW5nZSIsInZhbHVlIiwiZG9tRWxlbWVudCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJzZWxlY3QiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiZWxlbWVudCIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQUluQixrQkFBWUMsb0JBQVosRUFBa0NDLGFBQWxDLEVBQWlEO0FBQUE7O0FBQUE7O0FBQy9DLGdGQUFNRCxvQkFBTjs7QUFEK0MsK0RBSHRDRSxRQUdzQzs7QUFBQSxnRUFGckNDLFNBRXFDOztBQUcvQyxRQUFJRixhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7O0FBTDhDO0FBTWhEOzs7OzZDQUV3QjtBQUN2QixVQUFNRyxLQUFLLEdBQUcsS0FBS0MsVUFBTCxDQUFnQkQsS0FBOUI7QUFBQSxVQUFzQztBQUNoQ0UsTUFBQUEsbUJBQW1CLEdBQUdGLEtBRDVCLENBRHVCLENBRWE7O0FBRXBDLGFBQU9FLG1CQUFQO0FBQ0Q7Ozs2Q0FFd0JBLG1CLEVBQXFCO0FBQzVDLFVBQU1GLEtBQUssR0FBR0UsbUJBQWQsQ0FENEMsQ0FDUjs7QUFFcEMsV0FBS0QsVUFBTCxDQUFnQkQsS0FBaEIsR0FBd0JBLEtBQXhCO0FBQ0Q7Ozs4QkFRZ0JHLEssRUFBT0MsVSxFQUFZO0FBQUEsaUNBQ05BLFVBRE0sQ0FDMUJOLFFBRDBCO0FBQUEsVUFDMUJBLFFBRDBCLHFDQUNmLElBRGU7QUFBQSxVQUU1QkQsYUFGNEIsR0FFWkMsUUFGWTtBQUFBLFVBRzVCTyxNQUg0QixHQUduQkMsb0JBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixFQUFxQ1AsYUFBckMsQ0FIbUI7O0FBS2xDLGFBQU9RLE1BQVA7QUFDRDs7OztFQXJDaUNDLG1COzs7O2dCQUFmWCxNLGFBeUJGLFE7O2dCQXpCRUEsTSx1QkEyQlEsQ0FDekIsVUFEeUIsQzs7QUFjN0IsU0FBU0csUUFBVCxDQUFrQkQsYUFBbEIsRUFBaUNXLE9BQWpDLEVBQTBDO0FBQUUsT0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0JaLGFBQWxCLEVBQWlDVyxPQUFqQztBQUE0Qzs7QUFFeEYsU0FBU1QsU0FBVCxDQUFtQkYsYUFBbkIsRUFBa0NXLE9BQWxDLEVBQTJDO0FBQUUsT0FBS0UsR0FBTCxDQUFTLFFBQVQsRUFBbUJiLGFBQW5CLEVBQWtDVyxPQUFsQztBQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgb25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgb2ZmQ2hhbmdlID0gb2ZmQ2hhbmdlO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB2YWx1ZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uVmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlbGVjdFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzZWxlY3QgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuIl19