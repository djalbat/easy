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
        handler.intermediateHandler = function (handler, event) {
          var mouseButton = event.button,
              preventDefault = handler(mouseButton);

          return preventDefault;
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvYnV0dG9uLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsIm9uQ2xpY2siLCJjbG9uZSIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJtb3VzZUJ1dHRvbiIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxpQkFBUixDQUFyQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsZ0hBQzVCRCxRQUQ0Qjs7QUFHbEMsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLQyxPQUFMLENBQWFELFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsT0FBT0ksS0FBUCxDQUFhLElBQWIsRUFBbUJGLFlBQW5CLENBQVA7QUFBMEM7Ozs0QkFFeERHLE8sRUFBUztBQUNmLFVBQUlBLFFBQVFDLG1CQUFSLEtBQWdDQyxTQUFwQyxFQUErQztBQUM3Q0YsZ0JBQVFDLG1CQUFSLEdBQThCLFVBQVNELE9BQVQsRUFBa0JHLEtBQWxCLEVBQXlCO0FBQ3JELGNBQU1DLGNBQWNELE1BQU1FLE1BQTFCO0FBQUEsY0FDTUMsaUJBQWlCTixRQUFRSSxXQUFSLENBRHZCOztBQUdBLGlCQUFPRSxjQUFQO0FBQ0QsU0FMRDtBQU1EOztBQUVELDhHQUFjTixPQUFkO0FBQ0Q7Ozs2QkFFUUEsTyxFQUFTO0FBQ2hCLCtHQUFlQSxPQUFmO0FBQ0Q7OzswQkFFWU8sTyxFQUFTVixZLEVBQWM7QUFDbEMsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosTUFBbkIsRUFBMkJZLE9BQTNCLEVBQW9DVixZQUFwQyxDQUFQO0FBQ0Q7Ozs2QkFFZVcsSSxFQUFNWCxZLEVBQWM7QUFDbEMsYUFBT0osYUFBYWdCLFFBQWIsQ0FBc0JkLE1BQXRCLEVBQThCYSxJQUE5QixFQUFvQ1gsWUFBcEMsQ0FBUDtBQUNEOzs7bUNBRXFCYSxVLEVBQVliLFksRUFBYztBQUM5QyxhQUFPSixhQUFha0IsY0FBYixDQUE0QmhCLE1BQTVCLEVBQW9DZSxVQUFwQyxFQUFnRGIsWUFBaEQsQ0FBUDtBQUNEOzs7bUNBRXFCZSxVLEVBQVk7QUFDMUIsaUJBQU8sbUJBQVA7QUFDQSxVQUFFZCxPQUFGLEdBQWNjLFVBQWQsQ0FBRWQsT0FBRjtBQUNBLHlCQUFlQSxPQUFmLENBSDBCLENBR0Y7O0FBRTlCLGFBQU9ILE9BQU9jLFFBQVAsQ0FBZ0JELElBQWhCLEVBQXNCWCxZQUF0QixDQUFQO0FBQ0Q7Ozs7RUE5Q2tCSixZOztBQWlEckJvQixPQUFPQyxPQUFQLEdBQWlCbkIsTUFBakIiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGZ1bmN0aW9uKGhhbmRsZXIsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbiAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHN1cGVyLm9uQ2xpY2soaGFuZGxlcik7XG4gIH1cblxuICBvZmZDbGljayhoYW5kbGVyKSB7XG4gICAgc3VwZXIub2ZmQ2xpY2soaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShCdXR0b24sIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGh0bWwgPSAnPGJ1dHRvbj48L2J1dHRvbj4nLFxuICAgICAgICAgIHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrOyAvLy9cblxuICAgIHJldHVybiBCdXR0b24uZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcblxuIl19