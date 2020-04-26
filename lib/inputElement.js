"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputElement = /*#__PURE__*/function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selectorOrDOMElement) {
    var _this;

    var changeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, InputElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputElement).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
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
      this.on("change", changeHandler);
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
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _element["default"].fromProperties.apply(_element["default"], [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(_element["default"]);

exports["default"] = InputElement;

_defineProperty(InputElement, "ignoredProperties", ["onChange"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsInZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJyZWFkT25seSIsInNlbGVjdCIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7QUFDbkIsd0JBQVlDLG9CQUFaLEVBQXdEO0FBQUE7O0FBQUEsUUFBdEJDLGFBQXNCLHVFQUFOLElBQU07O0FBQUE7O0FBQ3RELHNGQUFNRCxvQkFBTjs7QUFFQSxRQUFJQyxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7O0FBTHFEO0FBTXZEOzs7OytCQUVVLENBQUU7OztnQ0FFRCxDQUFFOzs7NkJBRUxBLGEsRUFBZTtBQUFFLFdBQUtFLEVBQUwsQ0FBUSxRQUFSLEVBQWtCRixhQUFsQjtBQUFtQzs7OzhCQUVuREEsYSxFQUFlO0FBQUUsV0FBS0csR0FBTCxDQUFTLFFBQVQsRUFBbUJILGFBQW5CO0FBQW9DOzs7K0JBRXBEO0FBQUUsYUFBTyxLQUFLSSxVQUFMLENBQWdCQyxLQUF2QjtBQUErQjs7O3dDQUV4QjtBQUFFLGFBQU8sS0FBS0QsVUFBTCxDQUFnQkUsY0FBdkI7QUFBd0M7OztzQ0FFNUM7QUFBRSxhQUFPLEtBQUtGLFVBQUwsQ0FBZ0JHLFlBQXZCO0FBQXNDOzs7aUNBRTdDO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxRQUF2QjtBQUFrQzs7OzZCQUV4Q0gsSyxFQUFPO0FBQUUsV0FBS0QsVUFBTCxDQUFnQkMsS0FBaEIsR0FBd0JBLEtBQXhCO0FBQWdDOzs7c0NBRWhDQyxjLEVBQWdCO0FBQUUsV0FBS0YsVUFBTCxDQUFnQkUsY0FBaEIsR0FBaUNBLGNBQWpDO0FBQWtEOzs7b0NBRXRFQyxZLEVBQWM7QUFBRSxXQUFLSCxVQUFMLENBQWdCRyxZQUFoQixHQUErQkEsWUFBL0I7QUFBOEM7OztnQ0FFbEVDLFEsRUFBVTtBQUFFLFdBQUtKLFVBQUwsQ0FBZ0JJLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUFzQzs7OzZCQUVyRDtBQUFFLFdBQUtKLFVBQUwsQ0FBZ0JLLE1BQWhCO0FBQTJCOzs7bUNBTWhCQyxLLEVBQU9DLFUsRUFBbUM7QUFDeEQsVUFBRVYsUUFBRixHQUFlVSxVQUFmLENBQUVWLFFBQUY7QUFBQSxVQUNBRCxhQURBLEdBQ2dCQyxRQURoQixDQUR3RCxDQUU5Qjs7QUFGOEIsd0NBQXBCVyxrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUk5RCxhQUFPQyxvQkFBUUMsY0FBUiw2QkFBdUJKLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ1gsYUFBMUMsU0FBNERZLGtCQUE1RCxFQUFQO0FBQ0Q7Ozs7RUE1Q3VDQyxtQjs7OztnQkFBckJmLFksdUJBbUNRLENBQ3pCLFVBRHlCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIgPSBudWxsKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlcikgeyB0aGlzLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHsgdGhpcy5vZmYoXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgaXNSZWFkT25seSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZWFkT25seTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRSZWFkT25seShyZWFkT25seSkgeyB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHkgPSByZWFkT25seTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cbiJdfQ==