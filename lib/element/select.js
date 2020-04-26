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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsIm9iamVjdCIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwidmFsdWUiLCJodG1sIiwiRWxlbWVudCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic2VsZWN0IiwiZnJvbVByb3BlcnRpZXMiLCJldmVudCIsImVsZW1lbnQiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFDbkIsa0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLGdGQUFNRCxRQUFOOztBQUVBLFFBQUlDLGFBQWEsS0FBS0MsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7O0FBTGtDO0FBTXBDOzs7OzZCQUVRQSxhLEVBQWVHLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHVFQUFsQ0MsZ0NBQWtDO0FBQzVGLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCTixhQUFsQixFQUFpQ0csTUFBakMsRUFBeUNDLHlCQUF6QztBQUNEOzs7OEJBRVNKLGEsRUFBZUcsTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxRQUFULEVBQW1CUCxhQUFuQixFQUFrQ0csTUFBbEM7QUFDRDs7OzZDQUV3QjtBQUN2QixVQUFNSyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLG1CQUFtQixHQUFHRixVQUFVLENBQUNHLEtBRHZDLENBRHVCLENBRXdCOztBQUUvQyxhQUFPRCxtQkFBUDtBQUNEOzs7NkNBRXdCQSxtQixFQUFxQjtBQUM1QyxVQUFNQyxLQUFLLEdBQUdELG1CQUFkO0FBQUEsVUFBb0M7QUFDOUJGLE1BQUFBLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBRG5CO0FBR0FELE1BQUFBLFVBQVUsQ0FBQ0csS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDs7OzZCQVFlQyxJLEVBQU1aLGEsRUFBZTtBQUFFLGFBQU9hLG9CQUFRQyxRQUFSLENBQWlCaEIsTUFBakIsRUFBeUJjLElBQXpCLEVBQStCWixhQUEvQixDQUFQO0FBQXVEOzs7bUNBRXhFUSxVLEVBQVlSLGEsRUFBZTtBQUFFLGFBQU9hLG9CQUFRRSxjQUFSLENBQXVCakIsTUFBdkIsRUFBK0JVLFVBQS9CLEVBQTJDUixhQUEzQyxDQUFQO0FBQW1FOzs7bUNBRWhHZ0IsVSxFQUFZO0FBQzFCLFVBQUVkLFFBQUYsR0FBZWMsVUFBZixDQUFFZCxRQUFGO0FBQUEsVUFDQUYsYUFEQSxHQUNnQkUsUUFEaEI7QUFBQSxVQUVBZSxNQUZBLEdBRVNKLG9CQUFRSyxjQUFSLENBQXVCcEIsTUFBdkIsRUFBK0JrQixVQUEvQixFQUEyQ2hCLGFBQTNDLENBRlQ7O0FBSU4sYUFBT2lCLE1BQVA7QUFDRDs7OztFQS9DaUNKLG1COzs7O2dCQUFmZixNLGFBK0JGLFE7O2dCQS9CRUEsTSx1QkFpQ1EsQ0FDekIsVUFEeUIsQzs7QUFpQjdCLFNBQVNPLGdDQUFULENBQTBDTCxhQUExQyxFQUF5RG1CLEtBQXpELEVBQWdFQyxPQUFoRSxFQUF5RTtBQUN2RSxNQUFNSCxNQUFNLEdBQUdHLE9BQWY7QUFBQSxNQUF3QjtBQUNsQlYsRUFBQUEsbUJBQW1CLEdBQUdPLE1BQU0sQ0FBQ0ksc0JBQVAsRUFENUI7QUFHQXJCLEVBQUFBLGFBQWEsQ0FBQ3NCLElBQWQsQ0FBbUJGLE9BQW5CLEVBQTRCVixtQkFBNUIsRUFBaURTLEtBQWpELEVBQXdEQyxPQUF4RDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBkb21FbGVtZW50LnZhbHVlOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb25WYWx1ZSwgIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcbiAgICBcbiAgICBkb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IFxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlbGVjdFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIHNlbGVjdCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2VsZWN0LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gc2VsZWN0LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIuY2FsbChlbGVtZW50LCBzZWxlY3RlZE9wdGlvblZhbHVlLCBldmVudCwgZWxlbWVudCk7XG59XG4iXX0=