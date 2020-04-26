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

var Link = /*#__PURE__*/function (_Element) {
  _inherits(Link, _Element);

  function Link(selectorOrDOMElement) {
    var _this;

    var clickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, selectorOrDOMElement));

    if (clickHandler !== null) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Link, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = Link;
      }

      var _properties = properties,
          onClick = _properties.onClick,
          clickHandler = onClick,
          link = _element["default"].fromProperties(Class, properties, clickHandler);

      return link;
    }
  }]);

  return Link;
}(_element["default"]);

exports["default"] = Link;

_defineProperty(Link, "tagName", "a");

_defineProperty(Link, "ignoredProperties", ["onClick"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuanMiXSwibmFtZXMiOlsiTGluayIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiY2xpY2tIYW5kbGVyIiwib25DbGljayIsIkNsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsImxpbmsiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBQ25CLGdCQUFZQyxvQkFBWixFQUF1RDtBQUFBOztBQUFBLFFBQXJCQyxZQUFxQix1RUFBTixJQUFNOztBQUFBOztBQUNyRCw4RUFBTUQsb0JBQU47O0FBRUEsUUFBSUMsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3pCLFlBQUtDLE9BQUwsQ0FBYUQsWUFBYjtBQUNEOztBQUxvRDtBQU10RDs7OzttQ0FRcUJFLEssRUFBT0MsVSxFQUFZO0FBQ3ZDLFVBQUlBLFVBQVUsS0FBS0MsU0FBbkIsRUFBOEI7QUFDNUJELFFBQUFBLFVBQVUsR0FBR0QsS0FBYixDQUQ0QixDQUNSOztBQUVwQkEsUUFBQUEsS0FBSyxHQUFHSixJQUFSO0FBQ0Q7O0FBTHNDLHdCQU9uQkssVUFQbUI7QUFBQSxVQU8vQkYsT0FQK0IsZUFPL0JBLE9BUCtCO0FBQUEsVUFRakNELFlBUmlDLEdBUWxCQyxPQVJrQjtBQUFBLFVBU2pDSSxJQVRpQyxHQVMxQkMsb0JBQVFDLGNBQVIsQ0FBdUJMLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ0gsWUFBMUMsQ0FUMEI7O0FBV3ZDLGFBQU9LLElBQVA7QUFDRDs7OztFQTNCK0JDLG1COzs7O2dCQUFiUixJLGFBU0YsRzs7Z0JBVEVBLEksdUJBV1EsQ0FDekIsU0FEeUIsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjbGlja0hhbmRsZXIgPSBudWxsKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IExpbms7XG4gICAgfVxuXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2ssIC8vL1xuICAgICAgICAgIGxpbmsgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBsaW5rO1xuICB9XG59XG4iXX0=