"use strict";

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

Object.assign(Select, {
  tagName: "select",
  ignoredProperties: ["onChange"]
});
module.exports = Select;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var select = element,
      ///
  selectedOptionValue = select.getSelectedOptionValue();
  changeHandler.call(element, selectedOptionValue, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJ2YWx1ZSIsImVsZW1lbnQiLCJFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic2VsZWN0IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLGdGQUFNRCxRQUFOOztBQUVBLFFBQUlDLGFBQWEsS0FBS0MsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7O0FBTGtDO0FBTXBDOzs7OzBCQUVLQSxhLEVBQWU7QUFBRSxhQUFPRixNQUFNLENBQUNLLEtBQVAsQ0FBYSxJQUFiLEVBQW1CSCxhQUFuQixDQUFQO0FBQTJDOzs7NkJBRXpEQSxhLEVBQWVJLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHVFQUFsQ0MsZ0NBQWtDO0FBQzVGLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCUCxhQUFsQixFQUFpQ0ksTUFBakMsRUFBeUNDLHlCQUF6QztBQUNEOzs7OEJBRVNMLGEsRUFBZUksTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxRQUFULEVBQW1CUixhQUFuQixFQUFrQ0ksTUFBbEM7QUFDRDs7OzZDQUV3QjtBQUN2QixVQUFNSyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLG1CQUFtQixHQUFHRixVQUFVLENBQUNHLEtBRHZDLENBRHVCLENBRXdCOztBQUUvQyxhQUFPRCxtQkFBUDtBQUNEOzs7NkNBRXdCQSxtQixFQUFxQjtBQUM1QyxVQUFNQyxLQUFLLEdBQUdELG1CQUFkO0FBQUEsVUFBb0M7QUFDOUJGLE1BQUFBLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBRG5CO0FBR0FELE1BQUFBLFVBQVUsQ0FBQ0csS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDs7OzBCQUVZQyxPLEVBQVNiLGEsRUFBZTtBQUFFLGFBQU9jLG9CQUFRWCxLQUFSLENBQWNMLE1BQWQsRUFBc0JlLE9BQXRCLEVBQStCYixhQUEvQixDQUFQO0FBQXVEOzs7NkJBRTlFZSxJLEVBQU1mLGEsRUFBZTtBQUFFLGFBQU9jLG9CQUFRRSxRQUFSLENBQWlCbEIsTUFBakIsRUFBeUJpQixJQUF6QixFQUErQmYsYUFBL0IsQ0FBUDtBQUF1RDs7O21DQUV4RVMsVSxFQUFZVCxhLEVBQWU7QUFBRSxhQUFPYyxvQkFBUUcsY0FBUixDQUF1Qm5CLE1BQXZCLEVBQStCVyxVQUEvQixFQUEyQ1QsYUFBM0MsQ0FBUDtBQUFtRTs7O21DQUVoR2tCLFUsRUFBWTtBQUMxQixVQUFFaEIsUUFBRixHQUFlZ0IsVUFBZixDQUFFaEIsUUFBRjtBQUFBLFVBQ0FGLGFBREEsR0FDZ0JFLFFBRGhCO0FBQUEsVUFFQWlCLE1BRkEsR0FFU0wsb0JBQVFNLGNBQVIsQ0FBdUJ0QixNQUF2QixFQUErQm9CLFVBQS9CLEVBQTJDbEIsYUFBM0MsQ0FGVDs7QUFJTixhQUFPbUIsTUFBUDtBQUNEOzs7O0VBN0NrQkwsbUI7O0FBZ0RyQk8sTUFBTSxDQUFDQyxNQUFQLENBQWN4QixNQUFkLEVBQXNCO0FBQ3BCeUIsRUFBQUEsT0FBTyxFQUFFLFFBRFc7QUFFcEJDLEVBQUFBLGlCQUFpQixFQUFFLENBQ2pCLFVBRGlCO0FBRkMsQ0FBdEI7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUIsTUFBakI7O0FBRUEsU0FBU1EsZ0NBQVQsQ0FBMENOLGFBQTFDLEVBQXlEMkIsS0FBekQsRUFBZ0VkLE9BQWhFLEVBQXlFO0FBQ3ZFLE1BQU1NLE1BQU0sR0FBR04sT0FBZjtBQUFBLE1BQXdCO0FBQ2xCRixFQUFBQSxtQkFBbUIsR0FBR1EsTUFBTSxDQUFDUyxzQkFBUCxFQUQ1QjtBQUdBNUIsRUFBQUEsYUFBYSxDQUFDNkIsSUFBZCxDQUFtQmhCLE9BQW5CLEVBQTRCRixtQkFBNUIsRUFBaURnQixLQUFqRCxFQUF3RGQsT0FBeEQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFNlbGVjdC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gZG9tRWxlbWVudC52YWx1ZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uVmFsdWUsICAvLy9cbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG4gICAgXG4gICAgZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyBcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIHNlbGVjdCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2VsZWN0LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LCB7XG4gIHRhZ05hbWU6IFwic2VsZWN0XCIsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgXCJvbkNoYW5nZVwiXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudCwgLy8vXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBzZWxlY3QuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuICBcbiAgY2hhbmdlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHNlbGVjdGVkT3B0aW9uVmFsdWUsIGV2ZW50LCBlbGVtZW50KTtcbn1cbiJdfQ==