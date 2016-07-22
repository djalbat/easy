'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector) {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputElement).call(this, selector));
  }

  _createClass(InputElement, [{
    key: 'hasFocus',
    value: function hasFocus() {
      var focused = document.activeElement === this.$element[0]; ///

      return focused;
    }
  }, {
    key: 'onFocus',
    value: function onFocus(focusHandler) {
      this.$element.focus(focusHandler);
    }
  }, {
    key: 'onBlur',
    value: function onBlur(blurHandler) {
      this.$element.blur(blurHandler);
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.$element.focus();
    }
  }]);

  return InputElement;
}(Element);

module.exports = InputElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLHdCQUFZLFFBQVosRUFBc0I7OzsyRkFDZCxXQURjO0dBQXRCOzs7OytCQUlXO0FBQ1QsVUFBSSxVQUFVLFNBQVMsYUFBVCxLQUEyQixLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQTNCOztBQURMLGFBR0YsT0FBUCxDQUhTOzs7OzRCQU1ILGNBQWM7QUFDcEIsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixZQUFwQixFQURvQjs7OzsyQkFJZixhQUFhO0FBQ2xCLFdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsRUFEa0I7Ozs7NEJBSVo7QUFDTixXQUFLLFFBQUwsQ0FBYyxLQUFkLEdBRE07Ozs7O0VBbkJpQjs7QUF3QjNCLE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJpbnB1dEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIHZhciBmb2N1c2VkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kZWxlbWVudFswXTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzZWQ7XG4gIH1cblxuICBvbkZvY3VzKGZvY3VzSGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZm9jdXMoZm9jdXNIYW5kbGVyKTtcbiAgfVxuXG4gIG9uQmx1cihibHVySGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuYmx1cihibHVySGFuZGxlcik7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG4iXX0=
