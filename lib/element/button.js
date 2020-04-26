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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = /*#__PURE__*/function (_Element) {
  _inherits(Button, _Element);

  function Button(selector, clickHandler) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Button, [{
    key: "clone",
    value: function clone(clickHandler) {
      return Button.clone(this, clickHandler);
    }
  }, {
    key: "onClick",
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;

      _get(_getPrototypeOf(Button.prototype), "onClick", this).call(this, clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: "offClick",
    value: function offClick(clickHandler, object) {
      _get(_getPrototypeOf(Button.prototype), "offClick", this).call(this, clickHandler, object);
    }
  }], [{
    key: "clone",
    value: function clone(element, clickHandler) {
      return _element["default"].clone(Button, element, clickHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, clickHandler) {
      return _element["default"].fromHTML(Button, html, clickHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, clickHandler) {
      return _element["default"].fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          button = _element["default"].fromProperties(Button, properties, clickHandler);

      return button;
    }
  }]);

  return Button;
}(_element["default"]);

exports["default"] = Button;

_defineProperty(Button, "tagName", "button");

_defineProperty(Button, "ignoredProperties", ["onClick"]);

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var button = event.button,
      mouseButton = button; ///

  clickHandler.call(element, mouseButton, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsInVuZGVmaW5lZCIsIm9uQ2xpY2siLCJjbG9uZSIsIm9iamVjdCIsImludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJlbGVtZW50IiwiRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJidXR0b24iLCJmcm9tUHJvcGVydGllcyIsImV2ZW50IiwibW91c2VCdXR0b24iLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFDbkIsa0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQ2xDLGdGQUFNRCxRQUFOOztBQUVBLFFBQUlDLFlBQVksS0FBS0MsU0FBckIsRUFBZ0M7QUFDOUIsWUFBS0MsT0FBTCxDQUFhRixZQUFiO0FBQ0Q7O0FBTGlDO0FBTW5DOzs7OzBCQUVLQSxZLEVBQWM7QUFBRSxhQUFPRixNQUFNLENBQUNLLEtBQVAsQ0FBYSxJQUFiLEVBQW1CSCxZQUFuQixDQUFQO0FBQTBDOzs7NEJBRXhEQSxZLEVBQWNJLE0sRUFBb0U7QUFBQSxVQUE1REMsd0JBQTRELHVFQUFqQ0MsK0JBQWlDOztBQUN4RiwwRUFBY04sWUFBZCxFQUE0QkksTUFBNUIsRUFBb0NDLHdCQUFwQztBQUNEOzs7NkJBRVFMLFksRUFBY0ksTSxFQUFRO0FBQzdCLDJFQUFlSixZQUFmLEVBQTZCSSxNQUE3QjtBQUNEOzs7MEJBUVlHLE8sRUFBU1AsWSxFQUFjO0FBQUUsYUFBT1Esb0JBQVFMLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQlMsT0FBdEIsRUFBK0JQLFlBQS9CLENBQVA7QUFBc0Q7Ozs2QkFFNUVTLEksRUFBTVQsWSxFQUFjO0FBQUUsYUFBT1Esb0JBQVFFLFFBQVIsQ0FBaUJaLE1BQWpCLEVBQXlCVyxJQUF6QixFQUErQlQsWUFBL0IsQ0FBUDtBQUFzRDs7O21DQUV0RVcsVSxFQUFZWCxZLEVBQWM7QUFBRSxhQUFPUSxvQkFBUUksY0FBUixDQUF1QmQsTUFBdkIsRUFBK0JhLFVBQS9CLEVBQTJDWCxZQUEzQyxDQUFQO0FBQWtFOzs7bUNBRTlGYSxVLEVBQVk7QUFDMUIsVUFBRVgsT0FBRixHQUFjVyxVQUFkLENBQUVYLE9BQUY7QUFBQSxVQUNBRixZQURBLEdBQ2VFLE9BRGY7QUFBQSxVQUVBWSxNQUZBLEdBRVNOLG9CQUFRTyxjQUFSLENBQXVCakIsTUFBdkIsRUFBK0JlLFVBQS9CLEVBQTJDYixZQUEzQyxDQUZUOztBQUlOLGFBQU9jLE1BQVA7QUFDRDs7OztFQXJDaUNOLG1COzs7O2dCQUFmVixNLGFBbUJGLFE7O2dCQW5CRUEsTSx1QkFxQlEsQ0FDekIsU0FEeUIsQzs7QUFtQjdCLFNBQVNRLCtCQUFULENBQXlDTixZQUF6QyxFQUF1RGdCLEtBQXZELEVBQThEVCxPQUE5RCxFQUF1RTtBQUMvRCxNQUFFTyxNQUFGLEdBQWFFLEtBQWIsQ0FBRUYsTUFBRjtBQUFBLE1BQ0pHLFdBREksR0FDVUgsTUFEVixDQUQrRCxDQUU3Qzs7QUFFeEJkLEVBQUFBLFlBQVksQ0FBQ2tCLElBQWIsQ0FBa0JYLE9BQWxCLEVBQTJCVSxXQUEzQixFQUF3Q0QsS0FBeEMsRUFBK0NULE9BQS9DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub25DbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgc3VwZXIub2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2xpY2tcIlxuICBdO1xuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2ssIC8vL1xuICAgICAgICAgIGJ1dHRvbiA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQnV0dG9uLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudCxcblx0XHRcdFx0bW91c2VCdXR0b24gPSBidXR0b247XHQvLy9cbiAgXG4gIGNsaWNrSGFuZGxlci5jYWxsKGVsZW1lbnQsIG1vdXNlQnV0dG9uLCBldmVudCwgZWxlbWVudCk7XG59XG4iXX0=