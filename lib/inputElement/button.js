'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selector, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Button.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      var preventDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler.bind(this);

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, handler, preventDefault, intermediateChangeHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Button, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<button></button>';
      var onClick = properties.onClick;
      var clickHandler = onClick; ///

      return Button.fromHTML(html, clickHandler);
    }
  }]);

  return Button;
}(InputElement);

module.exports = Button;

function defaultIntermediateChangeHandler(handler, event) {
  var mouseButton = event.button; ///

  handler(mouseButton);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsIm9uQ2xpY2siLCJjbG9uZSIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImJpbmQiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsIm1vdXNlQnV0dG9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxpQkFBUixDQUFyQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsZ0hBQzVCRCxRQUQ0Qjs7QUFHbEMsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLQyxPQUFMLENBQWFELFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsT0FBT0ksS0FBUCxDQUFhLElBQWIsRUFBbUJGLFlBQW5CLENBQVA7QUFBMEM7Ozs0QkFFeERHLE8sRUFBeUc7QUFBQSxVQUFoR0MsY0FBZ0csdUVBQS9FLElBQStFO0FBQUEsVUFBekVDLHlCQUF5RSx1RUFBN0NDLGlDQUFpQ0MsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBNkM7O0FBQy9HLDhHQUFjSixPQUFkLEVBQXVCQyxjQUF2QixFQUF1Q0MseUJBQXZDO0FBQ0Q7OzswQkFFWUcsTyxFQUFTUixZLEVBQWM7QUFDbEMsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosTUFBbkIsRUFBMkJVLE9BQTNCLEVBQW9DUixZQUFwQyxDQUFQO0FBQ0Q7Ozs2QkFFZVMsSSxFQUFNVCxZLEVBQWM7QUFDbEMsYUFBT0osYUFBYWMsUUFBYixDQUFzQlosTUFBdEIsRUFBOEJXLElBQTlCLEVBQW9DVCxZQUFwQyxDQUFQO0FBQ0Q7OzttQ0FFcUJXLFUsRUFBWVgsWSxFQUFjO0FBQzlDLGFBQU9KLGFBQWFnQixjQUFiLENBQTRCZCxNQUE1QixFQUFvQ2EsVUFBcEMsRUFBZ0RYLFlBQWhELENBQVA7QUFDRDs7O21DQUVxQmEsVSxFQUFZO0FBQzFCLGlCQUFPLG1CQUFQO0FBQ0EsVUFBRVosT0FBRixHQUFjWSxVQUFkLENBQUVaLE9BQUY7QUFDQSx5QkFBZUEsT0FBZixDQUgwQixDQUdGOztBQUU5QixhQUFPSCxPQUFPWSxRQUFQLENBQWdCRCxJQUFoQixFQUFzQlQsWUFBdEIsQ0FBUDtBQUNEOzs7O0VBakNrQkosWTs7QUFvQ3JCa0IsT0FBT0MsT0FBUCxHQUFpQmpCLE1BQWpCOztBQUVBLFNBQVNRLGdDQUFULENBQTBDSCxPQUExQyxFQUFtRGEsS0FBbkQsRUFBMEQ7QUFDeEQsTUFBTUMsY0FBY0QsTUFBTUUsTUFBMUIsQ0FEd0QsQ0FDdEI7O0FBRWxDZixVQUFRYyxXQUFSO0FBQ0QiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gdHJ1ZSwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpIHtcbiAgICBzdXBlci5vbkNsaWNrKGhhbmRsZXIsIHByZXZlbnREZWZhdWx0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8YnV0dG9uPjwvYnV0dG9uPicsXG4gICAgICAgICAgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vL1xuXG4gICAgcmV0dXJuIEJ1dHRvbi5mcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjsgLy8vXG5cbiAgaGFuZGxlcihtb3VzZUJ1dHRvbik7XG59Il19