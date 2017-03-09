'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selector, clickHandler, mouseButton, allowDefault) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler) {
      _this.onClick(clickHandler, mouseButton, allowDefault);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler, mouseButton, allowDefault) {
      return Button.clone(this, clickHandler, mouseButton, allowDefault);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler, mouseButton, allowDefault) {
      return InputElement.clone(Button, element, clickHandler, mouseButton, allowDefault);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler, mouseButton, allowDefault) {
      return InputElement.fromHTML(Button, html, clickHandler, mouseButton, allowDefault);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler, mouseButton, allowDefault) {
      return InputElement.fromDOMElement(Button, domElement, clickHandler, mouseButton, allowDefault);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<button></button>';
      var onClick = properties.onClick;
      var button = properties.button;
      var allowDefault = properties.allowDefault;
      var clickHandler = onClick; ///

      return Button.fromHTML(html, clickHandler, button, allowDefault);
    }
  }]);

  return Button;
}(InputElement);

module.exports = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsIm1vdXNlQnV0dG9uIiwiYWxsb3dEZWZhdWx0Iiwib25DbGljayIsImNsb25lIiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJidXR0b24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQ0MsV0FBcEMsRUFBaURDLFlBQWpELEVBQStEO0FBQUE7O0FBQUEsZ0hBQ3ZESCxRQUR1RDs7QUFHN0QsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLRyxPQUFMLENBQWFILFlBQWIsRUFBMkJDLFdBQTNCLEVBQXdDQyxZQUF4QztBQUNEO0FBTDREO0FBTTlEOzs7OzBCQUVLRixZLEVBQWNDLFcsRUFBYUMsWSxFQUFjO0FBQUUsYUFBT0osT0FBT00sS0FBUCxDQUFhLElBQWIsRUFBbUJKLFlBQW5CLEVBQWlDQyxXQUFqQyxFQUE4Q0MsWUFBOUMsQ0FBUDtBQUFxRTs7OzBCQUV6R0csTyxFQUFTTCxZLEVBQWNDLFcsRUFBYUMsWSxFQUFjO0FBQzdELGFBQU9OLGFBQWFRLEtBQWIsQ0FBbUJOLE1BQW5CLEVBQTJCTyxPQUEzQixFQUFvQ0wsWUFBcEMsRUFBa0RDLFdBQWxELEVBQStEQyxZQUEvRCxDQUFQO0FBQ0Q7Ozs2QkFFZUksSSxFQUFNTixZLEVBQWNDLFcsRUFBYUMsWSxFQUFjO0FBQzdELGFBQU9OLGFBQWFXLFFBQWIsQ0FBc0JULE1BQXRCLEVBQThCUSxJQUE5QixFQUFvQ04sWUFBcEMsRUFBa0RDLFdBQWxELEVBQStEQyxZQUEvRCxDQUFQO0FBQ0Q7OzttQ0FFcUJNLFUsRUFBWVIsWSxFQUFjQyxXLEVBQWFDLFksRUFBYztBQUN6RSxhQUFPTixhQUFhYSxjQUFiLENBQTRCWCxNQUE1QixFQUFvQ1UsVUFBcEMsRUFBZ0RSLFlBQWhELEVBQThEQyxXQUE5RCxFQUEyRUMsWUFBM0UsQ0FBUDtBQUNEOzs7bUNBRXFCUSxVLEVBQVk7QUFDMUIsaUJBQU8sbUJBQVA7QUFEMEIsVUFFeEJQLE9BRndCLEdBRVVPLFVBRlYsQ0FFeEJQLE9BRndCO0FBQUEsVUFFZlEsTUFGZSxHQUVVRCxVQUZWLENBRWZDLE1BRmU7QUFFMUIsVUFBbUJULFlBQW5CLEdBQW9DUSxVQUFwQyxDQUFtQlIsWUFBbkI7QUFDQSx5QkFBZUMsT0FBZixDQUgwQixDQUdGOztBQUU5QixhQUFPTCxPQUFPUyxRQUFQLENBQWdCRCxJQUFoQixFQUFzQk4sWUFBdEIsRUFBb0NXLE1BQXBDLEVBQTRDVCxZQUE1QyxDQUFQO0FBQ0Q7Ozs7RUE3QmtCTixZOztBQWdDckJnQixPQUFPQyxPQUFQLEdBQWlCZixNQUFqQiIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlciwgbW91c2VCdXR0b24sIGFsbG93RGVmYXVsdCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0KSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0KTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIsIG1vdXNlQnV0dG9uLCBhbGxvd0RlZmF1bHQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIsIG1vdXNlQnV0dG9uLCBhbGxvd0RlZmF1bHQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIsIG1vdXNlQnV0dG9uLCBhbGxvd0RlZmF1bHQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8YnV0dG9uPjwvYnV0dG9uPicsXG4gICAgICAgICAgeyBvbkNsaWNrLCBidXR0b24sIGFsbG93RGVmYXVsdCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrOyAvLy9cblxuICAgIHJldHVybiBCdXR0b24uZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyLCBidXR0b24sIGFsbG93RGVmYXVsdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG4iXX0=