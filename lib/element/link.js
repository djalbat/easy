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

  function Link(selector, clickHandler) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Link, [{
    key: "clone",
    value: function clone(clickHandler) {
      return Link.clone(this, clickHandler);
    }
  }, {
    key: "onClick",
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;
      this.on("click", clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: "offClick",
    value: function offClick(clickHandler, object) {
      this.off("click", clickHandler, object);
    }
  }], [{
    key: "clone",
    value: function clone(element, clickHandler) {
      return _element["default"].clone(Link, element, clickHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, clickHandler) {
      return _element["default"].fromHTML(Link, html, clickHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, clickHandler) {
      return _element["default"].fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          link = _element["default"].fromProperties(Link, properties, clickHandler);

      return link;
    }
  }]);

  return Link;
}(_element["default"]);

exports["default"] = Link;

_defineProperty(Link, "tagName", "a");

_defineProperty(Link, "ignoredProperties", ["onClick"]);

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var link = element,
      ///
  hrefAttribute = link.getAttribute("href"),
      href = hrefAttribute; ///

  clickHandler.call(element, href, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuanMiXSwibmFtZXMiOlsiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwidW5kZWZpbmVkIiwib25DbGljayIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsIm9uIiwib2ZmIiwiZWxlbWVudCIsIkVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibGluayIsImZyb21Qcm9wZXJ0aWVzIiwiZXZlbnQiLCJocmVmQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaHJlZiIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBQ25CLGdCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBOztBQUNsQyw4RUFBTUQsUUFBTjs7QUFFQSxRQUFJQyxZQUFZLEtBQUtDLFNBQXJCLEVBQWdDO0FBQzlCLFlBQUtDLE9BQUwsQ0FBYUYsWUFBYjtBQUNEOztBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsSUFBSSxDQUFDSyxLQUFMLENBQVcsSUFBWCxFQUFpQkgsWUFBakIsQ0FBUDtBQUF3Qzs7OzRCQUV0REEsWSxFQUFjSSxNLEVBQW9FO0FBQUEsVUFBNURDLHdCQUE0RCx1RUFBakNDLCtCQUFpQztBQUN4RixXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQlAsWUFBakIsRUFBK0JJLE1BQS9CLEVBQXVDQyx3QkFBdkM7QUFDRDs7OzZCQUVRTCxZLEVBQWNJLE0sRUFBUTtBQUM3QixXQUFLSSxHQUFMLENBQVMsT0FBVCxFQUFrQlIsWUFBbEIsRUFBZ0NJLE1BQWhDO0FBQ0Q7OzswQkFRWUssTyxFQUFTVCxZLEVBQWM7QUFBRSxhQUFPVSxvQkFBUVAsS0FBUixDQUFjTCxJQUFkLEVBQW9CVyxPQUFwQixFQUE2QlQsWUFBN0IsQ0FBUDtBQUFvRDs7OzZCQUUxRVcsSSxFQUFNWCxZLEVBQWM7QUFBRSxhQUFPVSxvQkFBUUUsUUFBUixDQUFpQmQsSUFBakIsRUFBdUJhLElBQXZCLEVBQTZCWCxZQUE3QixDQUFQO0FBQW9EOzs7bUNBRXBFYSxVLEVBQVliLFksRUFBYztBQUFFLGFBQU9VLG9CQUFRSSxjQUFSLENBQXVCaEIsSUFBdkIsRUFBNkJlLFVBQTdCLEVBQXlDYixZQUF6QyxDQUFQO0FBQWdFOzs7bUNBRTVGZSxVLEVBQVk7QUFDMUIsVUFBRWIsT0FBRixHQUFjYSxVQUFkLENBQUViLE9BQUY7QUFBQSxVQUNBRixZQURBLEdBQ2VFLE9BRGY7QUFBQSxVQUVBYyxJQUZBLEdBRU9OLG9CQUFRTyxjQUFSLENBQXVCbkIsSUFBdkIsRUFBNkJpQixVQUE3QixFQUF5Q2YsWUFBekMsQ0FGUDs7QUFJTixhQUFPZ0IsSUFBUDtBQUNEOzs7O0VBckMrQk4sbUI7Ozs7Z0JBQWJaLEksYUFtQkYsRzs7Z0JBbkJFQSxJLHVCQXFCUSxDQUN6QixTQUR5QixDOztBQW1CN0IsU0FBU1EsK0JBQVQsQ0FBeUNOLFlBQXpDLEVBQXVEa0IsS0FBdkQsRUFBOERULE9BQTlELEVBQXVFO0FBQ3JFLE1BQU1PLElBQUksR0FBR1AsT0FBYjtBQUFBLE1BQXNCO0FBQ2hCVSxFQUFBQSxhQUFhLEdBQUdILElBQUksQ0FBQ0ksWUFBTCxDQUFrQixNQUFsQixDQUR0QjtBQUFBLE1BRU1DLElBQUksR0FBR0YsYUFGYixDQURxRSxDQUd6Qzs7QUFFNUJuQixFQUFBQSxZQUFZLENBQUNzQixJQUFiLENBQWtCYixPQUFsQixFQUEyQlksSUFBM0IsRUFBaUNILEtBQWpDLEVBQXdDVCxPQUF4QztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZDbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBsaW5rID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhMaW5rLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBsaW5rO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBsaW5rID0gZWxlbWVudCwgLy8vXG4gICAgICAgIGhyZWZBdHRyaWJ1dGUgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIiksXG4gICAgICAgIGhyZWYgPSBocmVmQXR0cmlidXRlOyAvLy9cbiAgXG4gIGNsaWNrSGFuZGxlci5jYWxsKGVsZW1lbnQsIGhyZWYsIGV2ZW50LCBlbGVtZW50KTtcbn0iXX0=