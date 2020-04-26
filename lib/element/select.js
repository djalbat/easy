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
    key: "clone",
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
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
    key: "clone",
    value: function clone(element, changeHandler) {
      return _element["default"].clone(Select, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return _element["default"].fromHTML(Select, html, changeHandler);
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJ2YWx1ZSIsImVsZW1lbnQiLCJFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic2VsZWN0IiwiZnJvbVByb3BlcnRpZXMiLCJldmVudCIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQUNuQixrQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQTs7QUFDbkMsZ0ZBQU1ELFFBQU47O0FBRUEsUUFBSUMsYUFBYSxLQUFLQyxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNGLGFBQWQ7QUFDRDs7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhLElBQWIsRUFBbUJILGFBQW5CLENBQVA7QUFBMkM7Ozs2QkFFekRBLGEsRUFBZUksTSxFQUFzRTtBQUFBLFVBQTlEQyx5QkFBOEQsdUVBQWxDQyxnQ0FBa0M7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0JQLGFBQWxCLEVBQWlDSSxNQUFqQyxFQUF5Q0MseUJBQXpDO0FBQ0Q7Ozs4QkFFU0wsYSxFQUFlSSxNLEVBQVE7QUFDL0IsV0FBS0ksR0FBTCxDQUFTLFFBQVQsRUFBbUJSLGFBQW5CLEVBQWtDSSxNQUFsQztBQUNEOzs7NkNBRXdCO0FBQ3ZCLFVBQU1LLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsbUJBQW1CLEdBQUdGLFVBQVUsQ0FBQ0csS0FEdkMsQ0FEdUIsQ0FFd0I7O0FBRS9DLGFBQU9ELG1CQUFQO0FBQ0Q7Ozs2Q0FFd0JBLG1CLEVBQXFCO0FBQzVDLFVBQU1DLEtBQUssR0FBR0QsbUJBQWQ7QUFBQSxVQUFvQztBQUM5QkYsTUFBQUEsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFEbkI7QUFHQUQsTUFBQUEsVUFBVSxDQUFDRyxLQUFYLEdBQW1CQSxLQUFuQjtBQUNEOzs7MEJBUVlDLE8sRUFBU2IsYSxFQUFlO0FBQUUsYUFBT2Msb0JBQVFYLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQmUsT0FBdEIsRUFBK0JiLGFBQS9CLENBQVA7QUFBdUQ7Ozs2QkFFOUVlLEksRUFBTWYsYSxFQUFlO0FBQUUsYUFBT2Msb0JBQVFFLFFBQVIsQ0FBaUJsQixNQUFqQixFQUF5QmlCLElBQXpCLEVBQStCZixhQUEvQixDQUFQO0FBQXVEOzs7bUNBRXhFUyxVLEVBQVlULGEsRUFBZTtBQUFFLGFBQU9jLG9CQUFRRyxjQUFSLENBQXVCbkIsTUFBdkIsRUFBK0JXLFVBQS9CLEVBQTJDVCxhQUEzQyxDQUFQO0FBQW1FOzs7bUNBRWhHa0IsVSxFQUFZO0FBQzFCLFVBQUVoQixRQUFGLEdBQWVnQixVQUFmLENBQUVoQixRQUFGO0FBQUEsVUFDQUYsYUFEQSxHQUNnQkUsUUFEaEI7QUFBQSxVQUVBaUIsTUFGQSxHQUVTTCxvQkFBUU0sY0FBUixDQUF1QnRCLE1BQXZCLEVBQStCb0IsVUFBL0IsRUFBMkNsQixhQUEzQyxDQUZUOztBQUlOLGFBQU9tQixNQUFQO0FBQ0Q7Ozs7RUFuRGlDTCxtQjs7OztnQkFBZmhCLE0sYUFpQ0YsUTs7Z0JBakNFQSxNLHVCQW1DUSxDQUN6QixVQUR5QixDOztBQW1CN0IsU0FBU1EsZ0NBQVQsQ0FBMENOLGFBQTFDLEVBQXlEcUIsS0FBekQsRUFBZ0VSLE9BQWhFLEVBQXlFO0FBQ3ZFLE1BQU1NLE1BQU0sR0FBR04sT0FBZjtBQUFBLE1BQXdCO0FBQ2xCRixFQUFBQSxtQkFBbUIsR0FBR1EsTUFBTSxDQUFDRyxzQkFBUCxFQUQ1QjtBQUdBdEIsRUFBQUEsYUFBYSxDQUFDdUIsSUFBZCxDQUFtQlYsT0FBbkIsRUFBNEJGLG1CQUE1QixFQUFpRFUsS0FBakQsRUFBd0RSLE9BQXhEO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IGRvbUVsZW1lbnQudmFsdWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZShzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvblZhbHVlLCAgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuICAgIFxuICAgIGRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIlxuICBdO1xuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIHNlbGVjdCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2VsZWN0LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gc2VsZWN0LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIuY2FsbChlbGVtZW50LCBzZWxlY3RlZE9wdGlvblZhbHVlLCBldmVudCwgZWxlbWVudCk7XG59XG4iXX0=