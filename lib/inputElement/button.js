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
      var html = '<button></button>',
          onClick = properties.onClick,
          clickHandler = onClick,
          button = Button.fromHTML(html, clickHandler);


      button.applyProperties(properties);

      return button;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsIm9uQ2xpY2siLCJjbG9uZSIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwidW5kZWZpbmVkIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiYnV0dG9uIiwiYXBwbHlQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwibW91c2VCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLGdIQUM1QkQsUUFENEI7O0FBR2xDLFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0MsT0FBTCxDQUFhRCxZQUFiO0FBQ0Q7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLE9BQU9JLEtBQVAsQ0FBYSxJQUFiLEVBQW1CRixZQUFuQixDQUFQO0FBQTBDOzs7NEJBRXhERyxPLEVBQVM7QUFDZixVQUFJQSxRQUFRQyxtQkFBUixLQUFnQ0MsU0FBcEMsRUFBK0M7QUFDN0NGLGdCQUFRQyxtQkFBUixHQUE4QkUsK0JBQTlCO0FBQ0Q7O0FBRUQsOEdBQWNILE9BQWQ7QUFDRDs7OzZCQUVRQSxPLEVBQVM7QUFDaEIsK0dBQWVBLE9BQWY7QUFDRDs7OzBCQUVZSSxPLEVBQVNQLFksRUFBYztBQUNsQyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixNQUFuQixFQUEyQlMsT0FBM0IsRUFBb0NQLFlBQXBDLENBQVA7QUFDRDs7OzZCQUVlUSxJLEVBQU1SLFksRUFBYztBQUNsQyxhQUFPSixhQUFhYSxRQUFiLENBQXNCWCxNQUF0QixFQUE4QlUsSUFBOUIsRUFBb0NSLFlBQXBDLENBQVA7QUFDRDs7O21DQUVxQlUsVSxFQUFZVixZLEVBQWM7QUFDOUMsYUFBT0osYUFBYWUsY0FBYixDQUE0QmIsTUFBNUIsRUFBb0NZLFVBQXBDLEVBQWdEVixZQUFoRCxDQUFQO0FBQ0Q7OzttQ0FFcUJZLFUsRUFBWTtBQUMxQixpQkFBTyxtQkFBUDtBQUFBLFVBQ0VYLE9BREYsR0FDY1csVUFEZCxDQUNFWCxPQURGO0FBQUEsVUFFQUQsWUFGQSxHQUVlQyxPQUZmO0FBQUEsVUFHQVksTUFIQSxHQUdTZixPQUFPVyxRQUFQLENBQWdCRCxJQUFoQixFQUFzQlIsWUFBdEIsQ0FIVDs7O0FBS05hLGFBQU9DLGVBQVAsQ0FBdUJGLFVBQXZCOztBQUVBLGFBQU9DLE1BQVA7QUFDRDs7OztFQTVDa0JqQixZOztBQStDckJtQixPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakI7O0FBRUEsU0FBU1EsK0JBQVQsQ0FBeUNILE9BQXpDLEVBQWtEYyxLQUFsRCxFQUF5RDtBQUN2RCxNQUFNQyxjQUFjRCxNQUFNSixNQUExQjtBQUFBLE1BQ01NLGlCQUFpQmhCLFFBQVFlLFdBQVIsQ0FEdkI7O0FBR0EsU0FBT0MsY0FBUDtBQUNEIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5vbkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soaGFuZGxlcikge1xuICAgIHN1cGVyLm9mZkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBodG1sID0gJzxidXR0b24+PC9idXR0b24+JyxcbiAgICAgICAgICB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljaywgLy8vXG4gICAgICAgICAgYnV0dG9uID0gQnV0dG9uLmZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gICAgXG4gICAgYnV0dG9uLmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VCdXR0b24pO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiJdfQ==