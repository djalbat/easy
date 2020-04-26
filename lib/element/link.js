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

Object.assign(Link, {
  tagName: "a",
  ignoredProperties: ["onClick"]
});
module.exports = Link;

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var link = element,
      ///
  hrefAttribute = link.getAttribute("href"),
      href = hrefAttribute; ///

  clickHandler.call(element, href, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuanMiXSwibmFtZXMiOlsiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwidW5kZWZpbmVkIiwib25DbGljayIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsIm9uIiwib2ZmIiwiZWxlbWVudCIsIkVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibGluayIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiaHJlZkF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImhyZWYiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQTs7QUFDbEMsOEVBQU1ELFFBQU47O0FBRUEsUUFBSUMsWUFBWSxLQUFLQyxTQUFyQixFQUFnQztBQUM5QixZQUFLQyxPQUFMLENBQWFGLFlBQWI7QUFDRDs7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLElBQUksQ0FBQ0ssS0FBTCxDQUFXLElBQVgsRUFBaUJILFlBQWpCLENBQVA7QUFBd0M7Ozs0QkFFdERBLFksRUFBY0ksTSxFQUFvRTtBQUFBLFVBQTVEQyx3QkFBNEQsdUVBQWpDQywrQkFBaUM7QUFDeEYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJQLFlBQWpCLEVBQStCSSxNQUEvQixFQUF1Q0Msd0JBQXZDO0FBQ0Q7Ozs2QkFFUUwsWSxFQUFjSSxNLEVBQVE7QUFDN0IsV0FBS0ksR0FBTCxDQUFTLE9BQVQsRUFBa0JSLFlBQWxCLEVBQWdDSSxNQUFoQztBQUNEOzs7MEJBRVlLLE8sRUFBU1QsWSxFQUFjO0FBQUUsYUFBT1Usb0JBQVFQLEtBQVIsQ0FBY0wsSUFBZCxFQUFvQlcsT0FBcEIsRUFBNkJULFlBQTdCLENBQVA7QUFBb0Q7Ozs2QkFFMUVXLEksRUFBTVgsWSxFQUFjO0FBQUUsYUFBT1Usb0JBQVFFLFFBQVIsQ0FBaUJkLElBQWpCLEVBQXVCYSxJQUF2QixFQUE2QlgsWUFBN0IsQ0FBUDtBQUFvRDs7O21DQUVwRWEsVSxFQUFZYixZLEVBQWM7QUFBRSxhQUFPVSxvQkFBUUksY0FBUixDQUF1QmhCLElBQXZCLEVBQTZCZSxVQUE3QixFQUF5Q2IsWUFBekMsQ0FBUDtBQUFnRTs7O21DQUU1RmUsVSxFQUFZO0FBQzFCLFVBQUViLE9BQUYsR0FBY2EsVUFBZCxDQUFFYixPQUFGO0FBQUEsVUFDQUYsWUFEQSxHQUNlRSxPQURmO0FBQUEsVUFFQWMsSUFGQSxHQUVPTixvQkFBUU8sY0FBUixDQUF1Qm5CLElBQXZCLEVBQTZCaUIsVUFBN0IsRUFBeUNmLFlBQXpDLENBRlA7O0FBSU4sYUFBT2dCLElBQVA7QUFDRDs7OztFQS9CZ0JOLG1COztBQWtDbkJRLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjckIsSUFBZCxFQUFvQjtBQUNsQnNCLEVBQUFBLE9BQU8sRUFBRSxHQURTO0FBRWxCQyxFQUFBQSxpQkFBaUIsRUFBRSxDQUNqQixTQURpQjtBQUZELENBQXBCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLElBQWpCOztBQUVBLFNBQVNRLCtCQUFULENBQXlDTixZQUF6QyxFQUF1RHdCLEtBQXZELEVBQThEZixPQUE5RCxFQUF1RTtBQUNyRSxNQUFNTyxJQUFJLEdBQUdQLE9BQWI7QUFBQSxNQUFzQjtBQUNoQmdCLEVBQUFBLGFBQWEsR0FBR1QsSUFBSSxDQUFDVSxZQUFMLENBQWtCLE1BQWxCLENBRHRCO0FBQUEsTUFFTUMsSUFBSSxHQUFHRixhQUZiLENBRHFFLENBR3pDOztBQUU1QnpCLEVBQUFBLFlBQVksQ0FBQzRCLElBQWIsQ0FBa0JuQixPQUFsQixFQUEyQmtCLElBQTNCLEVBQWlDSCxLQUFqQyxFQUF3Q2YsT0FBeEM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub24oXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgb2JqZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoTGluaywgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2ssIC8vL1xuICAgICAgICAgIGxpbmsgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExpbmssIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMaW5rLCB7XG4gIHRhZ05hbWU6IFwiYVwiLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgIFwib25DbGlja1wiXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBsaW5rID0gZWxlbWVudCwgLy8vXG4gICAgICAgIGhyZWZBdHRyaWJ1dGUgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIiksXG4gICAgICAgIGhyZWYgPSBocmVmQXR0cmlidXRlOyAvLy9cbiAgXG4gIGNsaWNrSGFuZGxlci5jYWxsKGVsZW1lbnQsIGhyZWYsIGV2ZW50LCBlbGVtZW50KTtcbn0iXX0=