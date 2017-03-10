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
      var preventDefault = true;

      this.on('click', handler, preventDefault, intermediateChangeHandler.bind(this)); ///
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
    value: function fromProperties(properties) {
      var html = '<a></a>';
      var onClick = properties.onClick;
      var clickHandler = onClick; ///

      return Link.fromHTML(html, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

module.exports = Link;

function intermediateChangeHandler(handler, event) {
  var href = this.getAttribute('href');

  handler(href);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwib25DbGljayIsImNsb25lIiwiaGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwib24iLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiYmluZCIsIm9mZiIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiaHJlZiIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQSw0R0FDNUJELFFBRDRCOztBQUdsQyxRQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQUtDLE9BQUwsQ0FBYUQsWUFBYjtBQUNEO0FBTGlDO0FBTW5DOzs7OzBCQUVLQSxZLEVBQWM7QUFBRSxhQUFPRixLQUFLSSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsWUFBakIsQ0FBUDtBQUF3Qzs7OzRCQUV0REcsTyxFQUFTO0FBQ2YsVUFBTUMsaUJBQWlCLElBQXZCOztBQUVBLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCRixPQUFqQixFQUEwQkMsY0FBMUIsRUFBMENFLDBCQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBMUMsRUFIZSxDQUdtRTtBQUNuRjs7OzZCQUVRSixPLEVBQVM7QUFDaEIsV0FBS0ssR0FBTCxDQUFTLE9BQVQsRUFBa0JMLE9BQWxCO0FBQ0Q7OzswQkFFWU0sTyxFQUFTVCxZLEVBQWM7QUFDbEMsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosSUFBbkIsRUFBeUJXLE9BQXpCLEVBQWtDVCxZQUFsQyxDQUFQO0FBQ0Q7Ozs2QkFFZVUsSSxFQUFNVixZLEVBQWM7QUFDbEMsYUFBT0osYUFBYWUsUUFBYixDQUFzQmIsSUFBdEIsRUFBNEJZLElBQTVCLEVBQWtDVixZQUFsQyxDQUFQO0FBQ0Q7OzttQ0FFcUJZLFUsRUFBWVosWSxFQUFjO0FBQzlDLGFBQU9KLGFBQWFpQixjQUFiLENBQTRCZixJQUE1QixFQUFrQ2MsVUFBbEMsRUFBOENaLFlBQTlDLENBQVA7QUFDRDs7O21DQUVxQmMsVSxFQUFZO0FBQzFCLGlCQUFPLFNBQVA7QUFDQSxVQUFFYixPQUFGLEdBQWNhLFVBQWQsQ0FBRWIsT0FBRjtBQUNBLHlCQUFlQSxPQUFmLENBSDBCLENBR0Y7O0FBRTlCLGFBQU9ILEtBQUthLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlYsWUFBcEIsQ0FBUDtBQUNEOzs7O0VBdkNnQkosWTs7QUEwQ25CbUIsT0FBT0MsT0FBUCxHQUFpQmxCLElBQWpCOztBQUVBLFNBQVNRLHlCQUFULENBQW1DSCxPQUFuQyxFQUE0Q2MsS0FBNUMsRUFBbUQ7QUFDakQsTUFBTUMsT0FBTyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQWI7O0FBRUFoQixVQUFRZSxJQUFSO0FBQ0QiLCJmaWxlIjoibGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG5cbiAgICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpOyAgLy8vXG4gIH1cbiAgXG4gIG9mZkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8YT48L2E+JyxcbiAgICAgICAgICB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljazsgLy8vXG5cbiAgICByZXR1cm4gTGluay5mcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICBoYW5kbGVyKGhyZWYpO1xufVxuIl19