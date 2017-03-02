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
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<button></button>',
          clickHandler = properties.clickHandler,
          button = properties.button,
          allowDefault = properties.allowDefault;


      return Button.fromHTML(html, clickHandler, button, allowDefault);
    }
  }]);

  return Button;
}(InputElement);

module.exports = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsImJ1dHRvbiIsImFsbG93RGVmYXVsdCIsIm9uQ2xpY2siLCJjbG9uZSIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsWUFBNUMsRUFBMEQ7QUFBQTs7QUFBQSxnSEFDbERILFFBRGtEOztBQUd4RCxRQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQUtHLE9BQUwsQ0FBYUgsWUFBYixFQUEyQkMsTUFBM0IsRUFBbUNDLFlBQW5DO0FBQ0Q7QUFMdUQ7QUFNekQ7Ozs7MEJBRUtGLFksRUFBY0MsTSxFQUFRQyxZLEVBQWM7QUFBRSxhQUFPSixPQUFPTSxLQUFQLENBQWEsSUFBYixFQUFtQkosWUFBbkIsRUFBaUNDLE1BQWpDLEVBQXlDQyxZQUF6QyxDQUFQO0FBQWdFOzs7MEJBRS9GRyxpQixFQUFtQkwsWSxFQUFjQyxNLEVBQVFDLFksRUFBYztBQUNsRSxhQUFPTixhQUFhUSxLQUFiLENBQW1CTixNQUFuQixFQUEyQk8saUJBQTNCLEVBQThDTCxZQUE5QyxFQUE0REMsTUFBNUQsRUFBb0VDLFlBQXBFLENBQVA7QUFDRDs7OzZCQUVlSSxJLEVBQU1OLFksRUFBY0MsTSxFQUFRQyxZLEVBQWM7QUFDeEQsYUFBT04sYUFBYVcsUUFBYixDQUFzQlQsTUFBdEIsRUFBOEJRLElBQTlCLEVBQW9DTixZQUFwQyxFQUFrREMsTUFBbEQsRUFBMERDLFlBQTFELENBQVA7QUFDRDs7O21DQUVxQk0sVSxFQUFZUixZLEVBQWNDLE0sRUFBUUMsWSxFQUFjO0FBQ3BFLGFBQU9OLGFBQWFhLGNBQWIsQ0FBNEJYLE1BQTVCLEVBQW9DVSxVQUFwQyxFQUFnRFIsWUFBaEQsRUFBOERDLE1BQTlELEVBQXNFQyxZQUF0RSxDQUFQO0FBQ0Q7OzttQ0FFcUJRLFUsRUFBWTtBQUM1QixpQkFBTyxtQkFBUDtBQUFBLFVBQ0VWLFlBREYsR0FDeUNVLFVBRHpDLENBQ0VWLFlBREY7QUFBQSxVQUNnQkMsTUFEaEIsR0FDeUNTLFVBRHpDLENBQ2dCVCxNQURoQjtBQUFBLFVBQ3dCQyxZQUR4QixHQUN5Q1EsVUFEekMsQ0FDd0JSLFlBRHhCOzs7QUFHSixhQUFPSixPQUFPUyxRQUFQLENBQWdCRCxJQUFoQixFQUFzQk4sWUFBdEIsRUFBb0NDLE1BQXBDLEVBQTRDQyxZQUE1QyxDQUFQO0FBQ0Q7Ozs7RUE1QmtCTixZOztBQStCckJlLE9BQU9DLE9BQVAsR0FBaUJkLE1BQWpCIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCk7IH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKEJ1dHRvbiwgc2VsZWN0b3JPckVsZW1lbnQsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGh0bWwgPSAnPGJ1dHRvbj48L2J1dHRvbj4nLFxuICAgICAgICB7IGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQgfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gQnV0dG9uLmZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlciwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuIl19