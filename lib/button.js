'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selector, clickHandler, button, allowDefault) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler) {
      _this.onClick(clickHandler, button, allowDefault);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler, button, allowDefault) {
      return Button.clone(this, clickHandler, button, allowDefault);
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, clickHandler, button, allowDefault) {
      return InputElement.clone(Button, selectorOrElement, clickHandler, button, allowDefault);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler, button, allowDefault) {
      return InputElement.fromHTML(Button, html, clickHandler, button, allowDefault);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler, button, allowDefault) {
      return InputElement.fromDOMElement(Button, domElement, clickHandler, button, allowDefault);
    }
  }]);

  return Button;
}(InputElement);

module.exports = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9idXR0b24uanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIkJ1dHRvbiIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwiYnV0dG9uIiwiYWxsb3dEZWZhdWx0Iiwib25DbGljayIsImNsb25lIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQ0MsTUFBcEMsRUFBNENDLFlBQTVDLEVBQTBEO0FBQUE7O0FBQUEsZ0hBQ2xESCxRQURrRDs7QUFHeEQsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLRyxPQUFMLENBQWFILFlBQWIsRUFBMkJDLE1BQTNCLEVBQW1DQyxZQUFuQztBQUNEO0FBTHVEO0FBTXpEOzs7OzBCQUVLRixZLEVBQWNDLE0sRUFBUUMsWSxFQUFjO0FBQUUsYUFBT0osT0FBT00sS0FBUCxDQUFhLElBQWIsRUFBbUJKLFlBQW5CLEVBQWlDQyxNQUFqQyxFQUF5Q0MsWUFBekMsQ0FBUDtBQUFnRTs7OzBCQUUvRkcsaUIsRUFBbUJMLFksRUFBY0MsTSxFQUFRQyxZLEVBQWM7QUFDbEUsYUFBT04sYUFBYVEsS0FBYixDQUFtQk4sTUFBbkIsRUFBMkJPLGlCQUEzQixFQUE4Q0wsWUFBOUMsRUFBNERDLE1BQTVELEVBQW9FQyxZQUFwRSxDQUFQO0FBQ0Q7Ozs2QkFFZUksSSxFQUFNTixZLEVBQWNDLE0sRUFBUUMsWSxFQUFjO0FBQ3hELGFBQU9OLGFBQWFXLFFBQWIsQ0FBc0JULE1BQXRCLEVBQThCUSxJQUE5QixFQUFvQ04sWUFBcEMsRUFBa0RDLE1BQWxELEVBQTBEQyxZQUExRCxDQUFQO0FBQ0Q7OzttQ0FFcUJNLFUsRUFBWVIsWSxFQUFjQyxNLEVBQVFDLFksRUFBYztBQUNwRSxhQUFPTixhQUFhYSxjQUFiLENBQTRCWCxNQUE1QixFQUFvQ1UsVUFBcEMsRUFBZ0RSLFlBQWhELEVBQThEQyxNQUE5RCxFQUFzRUMsWUFBdEUsQ0FBUDtBQUNEOzs7O0VBckJrQk4sWTs7QUF3QnJCYyxPQUFPQyxPQUFQLEdBQWlCYixNQUFqQiIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCk7IH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKEJ1dHRvbiwgc2VsZWN0b3JPckVsZW1lbnQsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcbiJdfQ==