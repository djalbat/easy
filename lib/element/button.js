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
  var mouseButton = event.button,
      preventDefault = clickHandler(mouseButton, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkJ1dHRvbiIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwidW5kZWZpbmVkIiwib25DbGljayIsImNsb25lIiwiaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiYnV0dG9uIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwibW91c2VCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsZ0hBQzVCRCxRQUQ0Qjs7QUFHbEMsUUFBSUMsaUJBQWlCQyxTQUFyQixFQUFnQztBQUM5QixZQUFLQyxPQUFMLENBQWFGLFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsT0FBT0ssS0FBUCxDQUFhLElBQWIsRUFBbUJILFlBQW5CLENBQVA7QUFBMEM7Ozs0QkFFeERBLFksRUFBMEU7QUFBQSxVQUE1REksd0JBQTRELHVFQUFqQ0MsK0JBQWlDOztBQUNoRiw4R0FBY0wsWUFBZCxFQUE0Qkksd0JBQTVCO0FBQ0Q7Ozs2QkFFUUosWSxFQUFjO0FBQ3JCLCtHQUFlQSxZQUFmO0FBQ0Q7OzswQkFFWU0sTyxFQUFTTixZLEVBQWM7QUFBRSxhQUFPSixRQUFRTyxLQUFSLENBQWNMLE1BQWQsRUFBc0JRLE9BQXRCLEVBQStCTixZQUEvQixDQUFQO0FBQXNEOzs7NkJBRTVFTyxJLEVBQU1QLFksRUFBYztBQUFFLGFBQU9KLFFBQVFZLFFBQVIsQ0FBaUJWLE1BQWpCLEVBQXlCUyxJQUF6QixFQUErQlAsWUFBL0IsQ0FBUDtBQUFzRDs7O21DQUV0RVMsVSxFQUFZVCxZLEVBQWM7QUFBRSxhQUFPSixRQUFRYyxjQUFSLENBQXVCWixNQUF2QixFQUErQlcsVUFBL0IsRUFBMkNULFlBQTNDLENBQVA7QUFBa0U7OzttQ0FFOUZXLFUsRUFBWTtBQUMxQixVQUFFVCxPQUFGLEdBQWNTLFVBQWQsQ0FBRVQsT0FBRjtBQUFBLFVBQ0FGLFlBREEsR0FDZUUsT0FEZjtBQUFBLFVBRUFVLE1BRkEsR0FFU2hCLFFBQVFpQixjQUFSLENBQXVCZixNQUF2QixFQUErQmEsVUFBL0IsRUFBMkNYLFlBQTNDLENBRlQ7OztBQUlOLGFBQU9ZLE1BQVA7QUFDRDs7OztFQS9Ca0JoQixPOztBQWtDckJrQixPQUFPQyxNQUFQLENBQWNqQixNQUFkLEVBQXNCO0FBQ3BCa0IsV0FBUyxRQURXO0FBRXBCQyxxQkFBbUIsQ0FDakIsU0FEaUI7QUFGQyxDQUF0Qjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQnJCLE1BQWpCOztBQUVBLFNBQVNPLCtCQUFULENBQXlDTCxZQUF6QyxFQUF1RG9CLEtBQXZELEVBQThEQyxhQUE5RCxFQUE2RTtBQUMzRSxNQUFNQyxjQUFjRixNQUFNUixNQUExQjtBQUFBLE1BQ01XLGlCQUFpQnZCLGFBQWFzQixXQUFiLEVBQTBCRCxhQUExQixDQUR2Qjs7QUFHQSxTQUFPRSxjQUFQO0FBQ0QiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub25DbGljayhjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlci5vZmZDbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShCdXR0b24sIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljaywgLy8vXG4gICAgICAgICAgYnV0dG9uID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCdXR0b24sIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJ1dHRvbiwge1xuICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DbGljaydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2xpY2tIYW5kbGVyKG1vdXNlQnV0dG9uLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iXX0=