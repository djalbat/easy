'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selectorOr$Element) {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputElement).call(this, selectorOr$Element));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksWUFDSixDQUFZLGtCQUFaLEVBQWdDOzBCQUQ1QixjQUM0Qjs7a0VBRDVCLHlCQUVJLHFCQUR3QjtHQUFoQzs7ZUFESTs7K0JBS087QUFDVCxVQUFJLFVBQVUsU0FBUyxhQUFULEtBQTJCLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBM0I7O0FBREwsYUFHRixPQUFQLENBSFM7Ozs7NEJBTUgsY0FBYztBQUNwQixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQXBCLEVBRG9COzs7OzJCQUlmLGFBQWE7QUFDbEIsV0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQURrQjs7Ozs0QkFJWjtBQUNOLFdBQUssUUFBTCxDQUFjLEtBQWQsR0FETTs7OztTQW5CSjtFQUFxQjs7QUF3QjNCLE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJpbnB1dEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuICB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgdmFyIGZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLiRlbGVtZW50WzBdOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXNlZDtcbiAgfVxuXG4gIG9uRm9jdXMoZm9jdXNIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5mb2N1cyhmb2N1c0hhbmRsZXIpO1xuICB9XG5cbiAgb25CbHVyKGJsdXJIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5ibHVyKGJsdXJIYW5kbGVyKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiJdfQ==
