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
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler;
      }

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, handler);
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

function defaultIntermediateClickHandler(handler, event) {
  var mouseButton = event.button,
      preventDefault = handler(mouseButton);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsIm9uQ2xpY2siLCJjbG9uZSIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwidW5kZWZpbmVkIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwibW91c2VCdXR0b24iLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLGdIQUM1QkQsUUFENEI7O0FBR2xDLFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0MsT0FBTCxDQUFhRCxZQUFiO0FBQ0Q7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLE9BQU9JLEtBQVAsQ0FBYSxJQUFiLEVBQW1CRixZQUFuQixDQUFQO0FBQTBDOzs7NEJBRXhERyxPLEVBQVM7QUFDZixVQUFJQSxRQUFRQyxtQkFBUixLQUFnQ0MsU0FBcEMsRUFBK0M7QUFDN0NGLGdCQUFRQyxtQkFBUixHQUE4QkUsK0JBQTlCO0FBQ0Q7O0FBRUQsOEdBQWNILE9BQWQ7QUFDRDs7OzZCQUVRQSxPLEVBQVM7QUFDaEIsK0dBQWVBLE9BQWY7QUFDRDs7OzBCQUVZSSxPLEVBQVNQLFksRUFBYztBQUNsQyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixNQUFuQixFQUEyQlMsT0FBM0IsRUFBb0NQLFlBQXBDLENBQVA7QUFDRDs7OzZCQUVlUSxJLEVBQU1SLFksRUFBYztBQUNsQyxhQUFPSixhQUFhYSxRQUFiLENBQXNCWCxNQUF0QixFQUE4QlUsSUFBOUIsRUFBb0NSLFlBQXBDLENBQVA7QUFDRDs7O21DQUVxQlUsVSxFQUFZVixZLEVBQWM7QUFDOUMsYUFBT0osYUFBYWUsY0FBYixDQUE0QmIsTUFBNUIsRUFBb0NZLFVBQXBDLEVBQWdEVixZQUFoRCxDQUFQO0FBQ0Q7OzttQ0FFcUJZLFUsRUFBWTtBQUMxQixpQkFBTyxtQkFBUDtBQUNBLFVBQUVYLE9BQUYsR0FBY1csVUFBZCxDQUFFWCxPQUFGO0FBQ0EseUJBQWVBLE9BQWYsQ0FIMEIsQ0FHRjs7QUFFOUIsYUFBT0gsT0FBT1csUUFBUCxDQUFnQkQsSUFBaEIsRUFBc0JSLFlBQXRCLENBQVA7QUFDRDs7OztFQXpDa0JKLFk7O0FBNENyQmlCLE9BQU9DLE9BQVAsR0FBaUJoQixNQUFqQjs7QUFFQSxTQUFTUSwrQkFBVCxDQUF5Q0gsT0FBekMsRUFBa0RZLEtBQWxELEVBQXlEO0FBQ3ZELE1BQU1DLGNBQWNELE1BQU1FLE1BQTFCO0FBQUEsTUFDTUMsaUJBQWlCZixRQUFRYSxXQUFSLENBRHZCOztBQUdBLFNBQU9FLGNBQVA7QUFDRCIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcjtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIub25DbGljayhoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNsaWNrKGhhbmRsZXIpIHtcbiAgICBzdXBlci5vZmZDbGljayhoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8YnV0dG9uPjwvYnV0dG9uPicsXG4gICAgICAgICAgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vL1xuXG4gICAgcmV0dXJuIEJ1dHRvbi5mcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VCdXR0b24pO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiJdfQ==