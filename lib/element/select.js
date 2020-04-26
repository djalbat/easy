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

  function Select(selector, changeHandler) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Select, [{
    key: "onChange",
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;
      this.on("change", changeHandler, object, intermediateChangeHandler);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, object) {
      this.off("change", changeHandler, object);
    }
  }, {
    key: "getSelectedOptionValue",
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: "setSelectedOptionByValue",
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue,
          ///
      domElement = this.getDOMElement();
      domElement.value = value;
    }
  }], [{
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return _element["default"].fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
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

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var select = element,
      ///
  selectedOptionValue = select.getSelectedOptionValue();
  changeHandler.call(element, selectedOptionValue, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsIm9iamVjdCIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwidmFsdWUiLCJFbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic2VsZWN0IiwiZnJvbVByb3BlcnRpZXMiLCJldmVudCIsImVsZW1lbnQiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFDbkIsa0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLGdGQUFNRCxRQUFOOztBQUVBLFFBQUlDLGFBQWEsS0FBS0MsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7O0FBTGtDO0FBTXBDOzs7OzZCQUVRQSxhLEVBQWVHLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHVFQUFsQ0MsZ0NBQWtDO0FBQzVGLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCTixhQUFsQixFQUFpQ0csTUFBakMsRUFBeUNDLHlCQUF6QztBQUNEOzs7OEJBRVNKLGEsRUFBZUcsTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxRQUFULEVBQW1CUCxhQUFuQixFQUFrQ0csTUFBbEM7QUFDRDs7OzZDQUV3QjtBQUN2QixVQUFNSyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLG1CQUFtQixHQUFHRixVQUFVLENBQUNHLEtBRHZDLENBRHVCLENBRXdCOztBQUUvQyxhQUFPRCxtQkFBUDtBQUNEOzs7NkNBRXdCQSxtQixFQUFxQjtBQUM1QyxVQUFNQyxLQUFLLEdBQUdELG1CQUFkO0FBQUEsVUFBb0M7QUFDOUJGLE1BQUFBLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBRG5CO0FBR0FELE1BQUFBLFVBQVUsQ0FBQ0csS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDs7O21DQVFxQkgsVSxFQUFZUixhLEVBQWU7QUFBRSxhQUFPWSxvQkFBUUMsY0FBUixDQUF1QmYsTUFBdkIsRUFBK0JVLFVBQS9CLEVBQTJDUixhQUEzQyxDQUFQO0FBQW1FOzs7bUNBRWhHYyxVLEVBQVk7QUFDMUIsVUFBRVosUUFBRixHQUFlWSxVQUFmLENBQUVaLFFBQUY7QUFBQSxVQUNBRixhQURBLEdBQ2dCRSxRQURoQjtBQUFBLFVBRUFhLE1BRkEsR0FFU0gsb0JBQVFJLGNBQVIsQ0FBdUJsQixNQUF2QixFQUErQmdCLFVBQS9CLEVBQTJDZCxhQUEzQyxDQUZUOztBQUlOLGFBQU9lLE1BQVA7QUFDRDs7OztFQTdDaUNILG1COzs7O2dCQUFmZCxNLGFBK0JGLFE7O2dCQS9CRUEsTSx1QkFpQ1EsQ0FDekIsVUFEeUIsQzs7QUFlN0IsU0FBU08sZ0NBQVQsQ0FBMENMLGFBQTFDLEVBQXlEaUIsS0FBekQsRUFBZ0VDLE9BQWhFLEVBQXlFO0FBQ3ZFLE1BQU1ILE1BQU0sR0FBR0csT0FBZjtBQUFBLE1BQXdCO0FBQ2xCUixFQUFBQSxtQkFBbUIsR0FBR0ssTUFBTSxDQUFDSSxzQkFBUCxFQUQ1QjtBQUdBbkIsRUFBQUEsYUFBYSxDQUFDb0IsSUFBZCxDQUFtQkYsT0FBbkIsRUFBNEJSLG1CQUE1QixFQUFpRE8sS0FBakQsRUFBd0RDLE9BQXhEO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IGRvbUVsZW1lbnQudmFsdWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZShzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvblZhbHVlLCAgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuICAgIFxuICAgIGRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzZWxlY3QgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzZWxlY3QgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHNlbGVjdC5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyLmNhbGwoZWxlbWVudCwgc2VsZWN0ZWRPcHRpb25WYWx1ZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIl19