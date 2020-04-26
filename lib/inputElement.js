"use strict";

var _element = _interopRequireDefault(require("./element"));

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

var InputElement = /*#__PURE__*/function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector, changeHandler) {
    var _this;

    _classCallCheck(this, InputElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputElement).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(InputElement, [{
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }, {
    key: "onChange",
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;
      this.on("change", changeHandler, intermediateChangeHandler);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler) {
      this.off("change", changeHandler);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: "getSelectionStart",
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: "getSelectionEnd",
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return this.domElement.readOnly;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: "setSelectionStart",
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: "setSelectionEnd",
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: "setReadOnly",
    value: function setReadOnly(readOnly) {
      this.domElement.readOnly = readOnly;
    }
  }, {
    key: "select",
    value: function select() {
      this.domElement.select();
    }
  }], [{
    key: "clone",
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _element["default"].clone.apply(_element["default"], [Class, element].concat(remainingArguments));
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _element["default"].fromHTML.apply(_element["default"], [Class, html].concat(remainingArguments));
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return _element["default"].fromDOMElement.apply(_element["default"], [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      return _element["default"].fromProperties.apply(_element["default"], [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(_element["default"]);

Object.assign(InputElement, {
  ignoredProperties: ["onChange"]
});
module.exports = InputElement;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var inputElement = element,
      ///
  value = inputElement.getValue();
  changeHandler.call(element, value, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsInZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJyZWFkT25seSIsInNlbGVjdCIsIkNsYXNzIiwiZWxlbWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJjbG9uZSIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJpbnB1dEVsZW1lbnQiLCJnZXRWYWx1ZSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBOztBQUNuQyxzRkFBTUQsUUFBTjs7QUFFQSxRQUFJQyxhQUFhLEtBQUtDLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0YsYUFBZDtBQUNEOztBQUxrQztBQU1wQzs7OzsrQkFFVSxDQUFFOzs7Z0NBRUQsQ0FBRTs7OzZCQUVMQSxhLEVBQTZFO0FBQUEsVUFBOURHLHlCQUE4RCx1RUFBbENDLGdDQUFrQztBQUNwRixXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQkwsYUFBbEIsRUFBaUNHLHlCQUFqQztBQUNEOzs7OEJBRVNILGEsRUFBZTtBQUN2QixXQUFLTSxHQUFMLENBQVMsUUFBVCxFQUFtQk4sYUFBbkI7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLTyxVQUFMLENBQWdCQyxLQUF2QjtBQUErQjs7O3dDQUV4QjtBQUFFLGFBQU8sS0FBS0QsVUFBTCxDQUFnQkUsY0FBdkI7QUFBd0M7OztzQ0FFNUM7QUFBRSxhQUFPLEtBQUtGLFVBQUwsQ0FBZ0JHLFlBQXZCO0FBQXNDOzs7aUNBRTdDO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxRQUF2QjtBQUFrQzs7OzZCQUV4Q0gsSyxFQUFPO0FBQUUsV0FBS0QsVUFBTCxDQUFnQkMsS0FBaEIsR0FBd0JBLEtBQXhCO0FBQWdDOzs7c0NBRWhDQyxjLEVBQWdCO0FBQUUsV0FBS0YsVUFBTCxDQUFnQkUsY0FBaEIsR0FBaUNBLGNBQWpDO0FBQWtEOzs7b0NBRXRFQyxZLEVBQWM7QUFBRSxXQUFLSCxVQUFMLENBQWdCRyxZQUFoQixHQUErQkEsWUFBL0I7QUFBOEM7OztnQ0FFbEVDLFEsRUFBVTtBQUFFLFdBQUtKLFVBQUwsQ0FBZ0JJLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUFzQzs7OzZCQUVyRDtBQUFFLFdBQUtKLFVBQUwsQ0FBZ0JLLE1BQWhCO0FBQTJCOzs7MEJBRXpCQyxLLEVBQU9DLE8sRUFBZ0M7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBQ2xELGFBQU9DLG9CQUFRQyxLQUFSLDZCQUFjSixLQUFkLEVBQXFCQyxPQUFyQixTQUFpQ0Msa0JBQWpDLEVBQVA7QUFDRDs7OzZCQUVlRixLLEVBQU9LLEksRUFBNkI7QUFBQSx5Q0FBcEJILGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBQ2xELGFBQU9DLG9CQUFRRyxRQUFSLDZCQUFpQk4sS0FBakIsRUFBd0JLLElBQXhCLFNBQWlDSCxrQkFBakMsRUFBUDtBQUNEOzs7bUNBRXFCRixLLEVBQU9OLFUsRUFBbUM7QUFBQSx5Q0FBcEJRLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBQzlELGFBQU9DLG9CQUFRSSxjQUFSLDZCQUF1QlAsS0FBdkIsRUFBOEJOLFVBQTlCLFNBQTZDUSxrQkFBN0MsRUFBUDtBQUNEOzs7bUNBRXFCRixLLEVBQU9RLFUsRUFBbUM7QUFDeEQsVUFBRW5CLFFBQUYsR0FBZW1CLFVBQWYsQ0FBRW5CLFFBQUY7QUFBQSxVQUNBRixhQURBLEdBQ2dCRSxRQURoQixDQUR3RCxDQUU5Qjs7QUFGOEIseUNBQXBCYSxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUk5RCxhQUFPQyxvQkFBUU0sY0FBUiw2QkFBdUJULEtBQXZCLEVBQThCUSxVQUE5QixFQUEwQ3JCLGFBQTFDLFNBQTREZSxrQkFBNUQsRUFBUDtBQUNEOzs7O0VBeER3QkMsbUI7O0FBMkQzQk8sTUFBTSxDQUFDQyxNQUFQLENBQWMxQixZQUFkLEVBQTRCO0FBQzFCMkIsRUFBQUEsaUJBQWlCLEVBQUUsQ0FDakIsVUFEaUI7QUFETyxDQUE1QjtBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI3QixZQUFqQjs7QUFFQSxTQUFTTSxnQ0FBVCxDQUEwQ0osYUFBMUMsRUFBeUQ0QixLQUF6RCxFQUFnRWQsT0FBaEUsRUFBeUU7QUFDdkUsTUFBTWUsWUFBWSxHQUFHZixPQUFyQjtBQUFBLE1BQThCO0FBQ3hCTixFQUFBQSxLQUFLLEdBQUdxQixZQUFZLENBQUNDLFFBQWIsRUFEZDtBQUdBOUIsRUFBQUEsYUFBYSxDQUFDK0IsSUFBZCxDQUFtQmpCLE9BQW5CLEVBQTRCTixLQUE1QixFQUFtQ29CLEtBQW5DLEVBQTBDZCxPQUExQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBpc1JlYWRPbmx5KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7IHRoaXMuZG9tRWxlbWVudC5yZWFkT25seSA9IHJlYWRPbmx5OyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQsIHtcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbGVtZW50O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgdmFsdWUgPSBpbnB1dEVsZW1lbnQuZ2V0VmFsdWUoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIuY2FsbChlbGVtZW50LCB2YWx1ZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIl19