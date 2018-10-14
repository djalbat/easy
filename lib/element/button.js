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
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler, object) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, clickHandler, object);
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

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var mouseButton = event.button;

  clickHandler.apply(element, mouseButton, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkJ1dHRvbiIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwidW5kZWZpbmVkIiwib25DbGljayIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiYnV0dG9uIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJtb3VzZUJ1dHRvbiIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxNOzs7QUFDSixrQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQSxnSEFDNUJELFFBRDRCOztBQUdsQyxRQUFJQyxpQkFBaUJDLFNBQXJCLEVBQWdDO0FBQzlCLFlBQUtDLE9BQUwsQ0FBYUYsWUFBYjtBQUNEO0FBTGlDO0FBTW5DOzs7OzBCQUVLQSxZLEVBQWM7QUFBRSxhQUFPRixPQUFPSyxLQUFQLENBQWEsSUFBYixFQUFtQkgsWUFBbkIsQ0FBUDtBQUEwQzs7OzRCQUV4REEsWSxFQUFjSSxNLEVBQW9FO0FBQUEsVUFBNURDLHdCQUE0RCx1RUFBakNDLCtCQUFpQzs7QUFDeEYsOEdBQWNOLFlBQWQsRUFBNEJJLE1BQTVCLEVBQW9DQyx3QkFBcEM7QUFDRDs7OzZCQUVRTCxZLEVBQWNJLE0sRUFBUTtBQUM3QiwrR0FBZUosWUFBZixFQUE2QkksTUFBN0I7QUFDRDs7OzBCQUVZRyxPLEVBQVNQLFksRUFBYztBQUFFLGFBQU9KLFFBQVFPLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQlMsT0FBdEIsRUFBK0JQLFlBQS9CLENBQVA7QUFBc0Q7Ozs2QkFFNUVRLEksRUFBTVIsWSxFQUFjO0FBQUUsYUFBT0osUUFBUWEsUUFBUixDQUFpQlgsTUFBakIsRUFBeUJVLElBQXpCLEVBQStCUixZQUEvQixDQUFQO0FBQXNEOzs7bUNBRXRFVSxVLEVBQVlWLFksRUFBYztBQUFFLGFBQU9KLFFBQVFlLGNBQVIsQ0FBdUJiLE1BQXZCLEVBQStCWSxVQUEvQixFQUEyQ1YsWUFBM0MsQ0FBUDtBQUFrRTs7O21DQUU5RlksVSxFQUFZO0FBQzFCLFVBQUVWLE9BQUYsR0FBY1UsVUFBZCxDQUFFVixPQUFGO0FBQUEsVUFDQUYsWUFEQSxHQUNlRSxPQURmO0FBQUEsVUFFQVcsTUFGQSxHQUVTakIsUUFBUWtCLGNBQVIsQ0FBdUJoQixNQUF2QixFQUErQmMsVUFBL0IsRUFBMkNaLFlBQTNDLENBRlQ7OztBQUlOLGFBQU9hLE1BQVA7QUFDRDs7OztFQS9Ca0JqQixPOztBQWtDckJtQixPQUFPQyxNQUFQLENBQWNsQixNQUFkLEVBQXNCO0FBQ3BCbUIsV0FBUyxRQURXO0FBRXBCQyxxQkFBbUIsQ0FDakIsU0FEaUI7QUFGQyxDQUF0Qjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQnRCLE1BQWpCOztBQUVBLFNBQVNRLCtCQUFULENBQXlDTixZQUF6QyxFQUF1RHFCLEtBQXZELEVBQThEZCxPQUE5RCxFQUF1RTtBQUNyRSxNQUFNZSxjQUFjRCxNQUFNUixNQUExQjs7QUFFQWIsZUFBYXVCLEtBQWIsQ0FBbUJoQixPQUFuQixFQUE0QmUsV0FBNUIsRUFBeUNELEtBQXpDO0FBQ0QiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlci5vbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICBzdXBlci5vZmZDbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBidXR0b24gPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJ1dHRvbiwgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgXG4gIGNsaWNrSGFuZGxlci5hcHBseShlbGVtZW50LCBtb3VzZUJ1dHRvbiwgZXZlbnQpO1xufVxuIl19