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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuanMiXSwibmFtZXMiOlsiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwidW5kZWZpbmVkIiwib25DbGljayIsIm9iamVjdCIsImludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJvbiIsIm9mZiIsImh0bWwiLCJFbGVtZW50IiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibGluayIsImZyb21Qcm9wZXJ0aWVzIiwiZXZlbnQiLCJlbGVtZW50IiwiaHJlZkF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImhyZWYiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUNuQixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQTs7QUFDbEMsOEVBQU1ELFFBQU47O0FBRUEsUUFBSUMsWUFBWSxLQUFLQyxTQUFyQixFQUFnQztBQUM5QixZQUFLQyxPQUFMLENBQWFGLFlBQWI7QUFDRDs7QUFMaUM7QUFNbkM7Ozs7NEJBRU9BLFksRUFBY0csTSxFQUFvRTtBQUFBLFVBQTVEQyx3QkFBNEQsdUVBQWpDQywrQkFBaUM7QUFDeEYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJOLFlBQWpCLEVBQStCRyxNQUEvQixFQUF1Q0Msd0JBQXZDO0FBQ0Q7Ozs2QkFFUUosWSxFQUFjRyxNLEVBQVE7QUFDN0IsV0FBS0ksR0FBTCxDQUFTLE9BQVQsRUFBa0JQLFlBQWxCLEVBQWdDRyxNQUFoQztBQUNEOzs7NkJBUWVLLEksRUFBTVIsWSxFQUFjO0FBQUUsYUFBT1Msb0JBQVFDLFFBQVIsQ0FBaUJaLElBQWpCLEVBQXVCVSxJQUF2QixFQUE2QlIsWUFBN0IsQ0FBUDtBQUFvRDs7O21DQUVwRVcsVSxFQUFZWCxZLEVBQWM7QUFBRSxhQUFPUyxvQkFBUUcsY0FBUixDQUF1QmQsSUFBdkIsRUFBNkJhLFVBQTdCLEVBQXlDWCxZQUF6QyxDQUFQO0FBQWdFOzs7bUNBRTVGYSxVLEVBQVk7QUFDMUIsVUFBRVgsT0FBRixHQUFjVyxVQUFkLENBQUVYLE9BQUY7QUFBQSxVQUNBRixZQURBLEdBQ2VFLE9BRGY7QUFBQSxVQUVBWSxJQUZBLEdBRU9MLG9CQUFRTSxjQUFSLENBQXVCakIsSUFBdkIsRUFBNkJlLFVBQTdCLEVBQXlDYixZQUF6QyxDQUZQOztBQUlOLGFBQU9jLElBQVA7QUFDRDs7OztFQWpDK0JMLG1COzs7O2dCQUFiWCxJLGFBaUJGLEc7O2dCQWpCRUEsSSx1QkFtQlEsQ0FDekIsU0FEeUIsQzs7QUFpQjdCLFNBQVNPLCtCQUFULENBQXlDTCxZQUF6QyxFQUF1RGdCLEtBQXZELEVBQThEQyxPQUE5RCxFQUF1RTtBQUNyRSxNQUFNSCxJQUFJLEdBQUdHLE9BQWI7QUFBQSxNQUFzQjtBQUNoQkMsRUFBQUEsYUFBYSxHQUFHSixJQUFJLENBQUNLLFlBQUwsQ0FBa0IsTUFBbEIsQ0FEdEI7QUFBQSxNQUVNQyxJQUFJLEdBQUdGLGFBRmIsQ0FEcUUsQ0FHekM7O0FBRTVCbEIsRUFBQUEsWUFBWSxDQUFDcUIsSUFBYixDQUFrQkosT0FBbEIsRUFBMkJHLElBQTNCLEVBQWlDSixLQUFqQyxFQUF3Q0MsT0FBeEM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2xpY2tcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2ssIC8vL1xuICAgICAgICAgIGxpbmsgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExpbmssIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGxpbmsgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgaHJlZkF0dHJpYnV0ZSA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxcbiAgICAgICAgaHJlZiA9IGhyZWZBdHRyaWJ1dGU7IC8vL1xuICBcbiAgY2xpY2tIYW5kbGVyLmNhbGwoZWxlbWVudCwgaHJlZiwgZXZlbnQsIGVsZW1lbnQpO1xufSJdfQ==