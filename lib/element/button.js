'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Button = function (_Element) {
  _inherits(Button, _Element);

  function Button(selector, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler !== undefined) {
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
    value: function onClick(clickHandler) {
      var intermediateClickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateClickHandler;

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, clickHandler, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, clickHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return Element.clone(Button, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return Element.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          button = Element.fromProperties(Button, properties, clickHandler);


      return button;
    }
  }]);

  return Button;
}(Element);

Object.assign(Button, {
  tagName: 'button',
  ignoredProperties: ['onClick']
});

module.exports = Button;

function defaultIntermediateClickHandler(clickHandler, event, targetElement) {
  var mouseButton = event.button;

  clickHandler(mouseButton, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkJ1dHRvbiIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwidW5kZWZpbmVkIiwib25DbGljayIsImNsb25lIiwiaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiYnV0dG9uIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwibW91c2VCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLGdIQUM1QkQsUUFENEI7O0FBR2xDLFFBQUlDLGlCQUFpQkMsU0FBckIsRUFBZ0M7QUFDOUIsWUFBS0MsT0FBTCxDQUFhRixZQUFiO0FBQ0Q7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLE9BQU9LLEtBQVAsQ0FBYSxJQUFiLEVBQW1CSCxZQUFuQixDQUFQO0FBQTBDOzs7NEJBRXhEQSxZLEVBQTBFO0FBQUEsVUFBNURJLHdCQUE0RCx1RUFBakNDLCtCQUFpQzs7QUFDaEYsOEdBQWNMLFlBQWQsRUFBNEJJLHdCQUE1QjtBQUNEOzs7NkJBRVFKLFksRUFBYztBQUNyQiwrR0FBZUEsWUFBZjtBQUNEOzs7MEJBRVlNLE8sRUFBU04sWSxFQUFjO0FBQUUsYUFBT0osUUFBUU8sS0FBUixDQUFjTCxNQUFkLEVBQXNCUSxPQUF0QixFQUErQk4sWUFBL0IsQ0FBUDtBQUFzRDs7OzZCQUU1RU8sSSxFQUFNUCxZLEVBQWM7QUFBRSxhQUFPSixRQUFRWSxRQUFSLENBQWlCVixNQUFqQixFQUF5QlMsSUFBekIsRUFBK0JQLFlBQS9CLENBQVA7QUFBc0Q7OzttQ0FFdEVTLFUsRUFBWVQsWSxFQUFjO0FBQUUsYUFBT0osUUFBUWMsY0FBUixDQUF1QlosTUFBdkIsRUFBK0JXLFVBQS9CLEVBQTJDVCxZQUEzQyxDQUFQO0FBQWtFOzs7bUNBRTlGVyxVLEVBQVk7QUFDMUIsVUFBRVQsT0FBRixHQUFjUyxVQUFkLENBQUVULE9BQUY7QUFBQSxVQUNBRixZQURBLEdBQ2VFLE9BRGY7QUFBQSxVQUVBVSxNQUZBLEdBRVNoQixRQUFRaUIsY0FBUixDQUF1QmYsTUFBdkIsRUFBK0JhLFVBQS9CLEVBQTJDWCxZQUEzQyxDQUZUOzs7QUFJTixhQUFPWSxNQUFQO0FBQ0Q7Ozs7RUEvQmtCaEIsTzs7QUFrQ3JCa0IsT0FBT0MsTUFBUCxDQUFjakIsTUFBZCxFQUFzQjtBQUNwQmtCLFdBQVMsUUFEVztBQUVwQkMscUJBQW1CLENBQ2pCLFNBRGlCO0FBRkMsQ0FBdEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJyQixNQUFqQjs7QUFFQSxTQUFTTywrQkFBVCxDQUF5Q0wsWUFBekMsRUFBdURvQixLQUF2RCxFQUE4REMsYUFBOUQsRUFBNkU7QUFDM0UsTUFBTUMsY0FBY0YsTUFBTVIsTUFBMUI7O0FBRUFaLGVBQWFzQixXQUFiLEVBQTBCRixLQUExQixFQUFpQ0MsYUFBakM7QUFDRCIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlci5vbkNsaWNrKGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNsaWNrKGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyLm9mZkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBidXR0b24gPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJ1dHRvbiwgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgXG4gIGNsaWNrSGFuZGxlcihtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIl19