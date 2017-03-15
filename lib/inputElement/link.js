'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Link = function (_InputElement) {
  _inherits(Link, _InputElement);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Link, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Link.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler.bind(this);
      }

      this.on('click', handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      this.off('click', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Link, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Link;
      }

      var _properties = properties,
          onClick = _properties.onClick,
          clickHandler = onClick;


      return InputElement.fromProperties(Class, properties, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

Link.tagName = 'a'; ///

module.exports = Link;

function defaultIntermediateClickHandler(handler, event) {
  var href = this.getAttribute('href'),
      preventDefault = handler(href);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwib25DbGljayIsImNsb25lIiwiaGFuZGxlciIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwiYmluZCIsIm9uIiwib2ZmIiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsIkNsYXNzIiwicHJvcGVydGllcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZyb21Qcm9wZXJ0aWVzIiwidGFnTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQSw0R0FDNUJELFFBRDRCOztBQUdsQyxRQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQUtDLE9BQUwsQ0FBYUQsWUFBYjtBQUNEO0FBTGlDO0FBTW5DOzs7OzBCQUVLQSxZLEVBQWM7QUFBRSxhQUFPRixLQUFLSSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsWUFBakIsQ0FBUDtBQUF3Qzs7OzRCQUV0REcsTyxFQUFTO0FBQ2YsVUFBSUEsUUFBUUMsbUJBQVIsS0FBZ0NDLFNBQXBDLEVBQStDO0FBQzdDRixnQkFBUUMsbUJBQVIsR0FBOEJFLGdDQUFnQ0MsSUFBaEMsQ0FBcUMsSUFBckMsQ0FBOUI7QUFDRDs7QUFFRCxXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQkwsT0FBakI7QUFDRDs7OzZCQUVRQSxPLEVBQVM7QUFDaEIsV0FBS00sR0FBTCxDQUFTLE9BQVQsRUFBa0JOLE9BQWxCO0FBQ0Q7OzswQkFFWU8sTyxFQUFTVixZLEVBQWM7QUFDbEMsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosSUFBbkIsRUFBeUJZLE9BQXpCLEVBQWtDVixZQUFsQyxDQUFQO0FBQ0Q7Ozs2QkFFZVcsSSxFQUFNWCxZLEVBQWM7QUFDbEMsYUFBT0osYUFBYWdCLFFBQWIsQ0FBc0JkLElBQXRCLEVBQTRCYSxJQUE1QixFQUFrQ1gsWUFBbEMsQ0FBUDtBQUNEOzs7bUNBRXFCYSxVLEVBQVliLFksRUFBYztBQUM5QyxhQUFPSixhQUFha0IsY0FBYixDQUE0QmhCLElBQTVCLEVBQWtDZSxVQUFsQyxFQUE4Q2IsWUFBOUMsQ0FBUDtBQUNEOzs7bUNBRXFCZSxLLEVBQU9DLFUsRUFBWTtBQUN2QyxVQUFJQyxVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCRixxQkFBYUQsS0FBYjtBQUNBQSxnQkFBUWpCLElBQVI7QUFDRDs7QUFKc0Msd0JBTW5Ca0IsVUFObUI7QUFBQSxVQU0vQmYsT0FOK0IsZUFNL0JBLE9BTitCO0FBQUEsVUFPakNELFlBUGlDLEdBT2xCQyxPQVBrQjs7O0FBU3ZDLGFBQU9MLGFBQWF1QixjQUFiLENBQTRCSixLQUE1QixFQUFtQ0MsVUFBbkMsRUFBK0NoQixZQUEvQyxDQUFQO0FBQ0Q7Ozs7RUE3Q2dCSixZOztBQWdEbkJFLEtBQUtzQixPQUFMLEdBQWUsR0FBZixDLENBQW9COztBQUVwQkMsT0FBT0MsT0FBUCxHQUFpQnhCLElBQWpCOztBQUVBLFNBQVNRLCtCQUFULENBQXlDSCxPQUF6QyxFQUFrRG9CLEtBQWxELEVBQXlEO0FBQ3ZELE1BQU1DLE9BQU8sS0FBS0MsWUFBTCxDQUFrQixNQUFsQixDQUFiO0FBQUEsTUFDTUMsaUJBQWlCdkIsUUFBUXFCLElBQVIsQ0FEdkI7O0FBR0EsU0FBT0UsY0FBUDtBQUNEIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IExpbms7XG4gICAgfVxuXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7XG5cbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICB9XG59XG5cbkxpbmsudGFnTmFtZSA9ICdhJzsgLy8vXG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKGhyZWYpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn0iXX0=