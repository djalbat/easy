'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsImJ1dHRvbiIsImFsbG93RGVmYXVsdCIsIm9uQ2xpY2siLCJjbG9uZSIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGlCQUFSLENBQW5COztJQUVNQyxNOzs7QUFDSixrQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0NDLE1BQXBDLEVBQTRDQyxZQUE1QyxFQUEwRDtBQUFBOztBQUFBLGdIQUNsREgsUUFEa0Q7O0FBR3hELFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0csT0FBTCxDQUFhSCxZQUFiLEVBQTJCQyxNQUEzQixFQUFtQ0MsWUFBbkM7QUFDRDtBQUx1RDtBQU16RDs7OzswQkFFS0YsWSxFQUFjQyxNLEVBQVFDLFksRUFBYztBQUFFLGFBQU9KLE9BQU9NLEtBQVAsQ0FBYSxJQUFiLEVBQW1CSixZQUFuQixFQUFpQ0MsTUFBakMsRUFBeUNDLFlBQXpDLENBQVA7QUFBZ0U7OzswQkFFL0ZHLGlCLEVBQW1CTCxZLEVBQWNDLE0sRUFBUUMsWSxFQUFjO0FBQ2xFLGFBQU9OLGFBQWFRLEtBQWIsQ0FBbUJOLE1BQW5CLEVBQTJCTyxpQkFBM0IsRUFBOENMLFlBQTlDLEVBQTREQyxNQUE1RCxFQUFvRUMsWUFBcEUsQ0FBUDtBQUNEOzs7NkJBRWVJLEksRUFBTU4sWSxFQUFjQyxNLEVBQVFDLFksRUFBYztBQUN4RCxhQUFPTixhQUFhVyxRQUFiLENBQXNCVCxNQUF0QixFQUE4QlEsSUFBOUIsRUFBb0NOLFlBQXBDLEVBQWtEQyxNQUFsRCxFQUEwREMsWUFBMUQsQ0FBUDtBQUNEOzs7bUNBRXFCTSxVLEVBQVlSLFksRUFBY0MsTSxFQUFRQyxZLEVBQWM7QUFDcEUsYUFBT04sYUFBYWEsY0FBYixDQUE0QlgsTUFBNUIsRUFBb0NVLFVBQXBDLEVBQWdEUixZQUFoRCxFQUE4REMsTUFBOUQsRUFBc0VDLFlBQXRFLENBQVA7QUFDRDs7OztFQXJCa0JOLFk7O0FBd0JyQmMsT0FBT0MsT0FBUCxHQUFpQmIsTUFBakIiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KTsgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBzZWxlY3Rvck9yRWxlbWVudCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuIl19