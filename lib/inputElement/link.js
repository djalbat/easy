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
    value: function onClick(handler, preventDefault) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler.bind(this);

      this.on('click', handler, preventDefault, intermediateChangeHandler);
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

function defaultIntermediateChangeHandler(handler, event) {
  var href = this.getAttribute('href');

  handler(href);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwib25DbGljayIsImNsb25lIiwiaGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiYmluZCIsIm9uIiwib2ZmIiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLEk7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLDRHQUM1QkQsUUFENEI7O0FBR2xDLFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0MsT0FBTCxDQUFhRCxZQUFiO0FBQ0Q7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLEtBQUtJLEtBQUwsQ0FBVyxJQUFYLEVBQWlCRixZQUFqQixDQUFQO0FBQXdDOzs7NEJBRXRERyxPLEVBQVNDLGMsRUFBeUY7QUFBQSxVQUF6RUMseUJBQXlFLHVFQUE3Q0MsaUNBQWlDQyxJQUFqQyxDQUFzQyxJQUF0QyxDQUE2Qzs7QUFDeEcsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJMLE9BQWpCLEVBQTBCQyxjQUExQixFQUEwQ0MseUJBQTFDO0FBQ0Q7Ozs2QkFFUUYsTyxFQUFTO0FBQ2hCLFdBQUtNLEdBQUwsQ0FBUyxPQUFULEVBQWtCTixPQUFsQjtBQUNEOzs7MEJBRVlPLE8sRUFBU1YsWSxFQUFjO0FBQ2xDLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLElBQW5CLEVBQXlCWSxPQUF6QixFQUFrQ1YsWUFBbEMsQ0FBUDtBQUNEOzs7NkJBRWVXLEksRUFBTVgsWSxFQUFjO0FBQ2xDLGFBQU9KLGFBQWFnQixRQUFiLENBQXNCZCxJQUF0QixFQUE0QmEsSUFBNUIsRUFBa0NYLFlBQWxDLENBQVA7QUFDRDs7O21DQUVxQmEsVSxFQUFZYixZLEVBQWM7QUFDOUMsYUFBT0osYUFBYWtCLGNBQWIsQ0FBNEJoQixJQUE1QixFQUFrQ2UsVUFBbEMsRUFBOENiLFlBQTlDLENBQVA7QUFDRDs7O21DQUVxQmUsVSxFQUFZO0FBQzFCLGlCQUFPLFNBQVA7QUFDQSxVQUFFZCxPQUFGLEdBQWNjLFVBQWQsQ0FBRWQsT0FBRjtBQUNBLHlCQUFlQSxPQUFmLENBSDBCLENBR0Y7O0FBRTlCLGFBQU9ILEtBQUtjLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlgsWUFBcEIsQ0FBUDtBQUNEOzs7O0VBckNnQkosWTs7QUF3Q25Cb0IsT0FBT0MsT0FBUCxHQUFpQm5CLElBQWpCOztBQUVBLFNBQVNRLGdDQUFULENBQTBDSCxPQUExQyxFQUFtRGUsS0FBbkQsRUFBMEQ7QUFDeEQsTUFBTUMsT0FBTyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQWI7O0FBRUFqQixVQUFRZ0IsSUFBUjtBQUNEIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoTGluaywgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBodG1sID0gJzxhPjwvYT4nLFxuICAgICAgICAgIHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrOyAvLy9cblxuICAgIHJldHVybiBMaW5rLmZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICBoYW5kbGVyKGhyZWYpO1xufVxuIl19