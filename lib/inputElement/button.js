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
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Button;
      }

      var _properties = properties,
          onClick = _properties.onClick,
          clickHandler = onClick;


      return InputElement.fromProperties(Class, properties, clickHandler);
    }
  }]);

  return Button;
}(InputElement);

Button.tagName = 'button';

module.exports = Button;

function defaultIntermediateClickHandler(handler, event) {
  var mouseButton = event.button,
      preventDefault = handler(mouseButton);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsIm9uQ2xpY2siLCJjbG9uZSIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwidW5kZWZpbmVkIiwiZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmcm9tUHJvcGVydGllcyIsInRhZ05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJtb3VzZUJ1dHRvbiIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxpQkFBUixDQUFyQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsZ0hBQzVCRCxRQUQ0Qjs7QUFHbEMsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLQyxPQUFMLENBQWFELFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsT0FBT0ksS0FBUCxDQUFhLElBQWIsRUFBbUJGLFlBQW5CLENBQVA7QUFBMEM7Ozs0QkFFeERHLE8sRUFBUztBQUNmLFVBQUlBLFFBQVFDLG1CQUFSLEtBQWdDQyxTQUFwQyxFQUErQztBQUM3Q0YsZ0JBQVFDLG1CQUFSLEdBQThCRSwrQkFBOUI7QUFDRDs7QUFFRCw4R0FBY0gsT0FBZDtBQUNEOzs7NkJBRVFBLE8sRUFBUztBQUNoQiwrR0FBZUEsT0FBZjtBQUNEOzs7MEJBRVlJLE8sRUFBU1AsWSxFQUFjO0FBQ2xDLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLE1BQW5CLEVBQTJCUyxPQUEzQixFQUFvQ1AsWUFBcEMsQ0FBUDtBQUNEOzs7NkJBRWVRLEksRUFBTVIsWSxFQUFjO0FBQ2xDLGFBQU9KLGFBQWFhLFFBQWIsQ0FBc0JYLE1BQXRCLEVBQThCVSxJQUE5QixFQUFvQ1IsWUFBcEMsQ0FBUDtBQUNEOzs7bUNBRXFCVSxVLEVBQVlWLFksRUFBYztBQUM5QyxhQUFPSixhQUFhZSxjQUFiLENBQTRCYixNQUE1QixFQUFvQ1ksVUFBcEMsRUFBZ0RWLFlBQWhELENBQVA7QUFDRDs7O21DQUVxQlksSyxFQUFPQyxVLEVBQVk7QUFDdkMsVUFBSUMsVUFBVUMsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQkYscUJBQWFELEtBQWI7QUFDQUEsZ0JBQVFkLE1BQVI7QUFDRDs7QUFKc0Msd0JBTW5CZSxVQU5tQjtBQUFBLFVBTS9CWixPQU4rQixlQU0vQkEsT0FOK0I7QUFBQSxVQU9qQ0QsWUFQaUMsR0FPbEJDLE9BUGtCOzs7QUFTdkMsYUFBT0wsYUFBYW9CLGNBQWIsQ0FBNEJKLEtBQTVCLEVBQW1DQyxVQUFuQyxFQUErQ2IsWUFBL0MsQ0FBUDtBQUNEOzs7O0VBN0NrQkosWTs7QUFnRHJCRSxPQUFPbUIsT0FBUCxHQUFpQixRQUFqQjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQnJCLE1BQWpCOztBQUVBLFNBQVNRLCtCQUFULENBQXlDSCxPQUF6QyxFQUFrRGlCLEtBQWxELEVBQXlEO0FBQ3ZELE1BQU1DLGNBQWNELE1BQU1FLE1BQTFCO0FBQUEsTUFDTUMsaUJBQWlCcEIsUUFBUWtCLFdBQVIsQ0FEdkI7O0FBR0EsU0FBT0UsY0FBUDtBQUNEIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5vbkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soaGFuZGxlcikge1xuICAgIHN1cGVyLm9mZkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gQnV0dG9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrO1xuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5CdXR0b24udGFnTmFtZSA9ICdidXR0b24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlQnV0dG9uKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iXX0=