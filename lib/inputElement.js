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

InputElement.clone = Element.clone;
InputElement.fromHTML = Element.fromHTML;

module.exports = InputElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksWUFDSixDQUFZLGtCQUFaLEVBQWdDOzBCQUQ1QixjQUM0Qjs7a0VBRDVCLHlCQUVJLHFCQUR3QjtHQUFoQzs7ZUFESTs7K0JBS087QUFDVCxVQUFJLFVBQVUsU0FBUyxhQUFULEtBQTJCLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBM0I7O0FBREwsYUFHRixPQUFQLENBSFM7Ozs7NEJBTUgsY0FBYztBQUNwQixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQXBCLEVBRG9COzs7OzJCQUlmLGFBQWE7QUFDbEIsV0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQURrQjs7Ozs0QkFJWjtBQUNOLFdBQUssUUFBTCxDQUFjLEtBQWQsR0FETTs7OztTQW5CSjtFQUFxQjs7QUF3QjNCLGFBQWEsS0FBYixHQUFxQixRQUFRLEtBQVI7QUFDckIsYUFBYSxRQUFiLEdBQXdCLFFBQVEsUUFBUjs7QUFFeEIsT0FBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6ImlucHV0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG4gIH1cblxuICBoYXNGb2N1cygpIHtcbiAgICB2YXIgZm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuJGVsZW1lbnRbMF07ICAvLy9cblxuICAgIHJldHVybiBmb2N1c2VkO1xuICB9XG5cbiAgb25Gb2N1cyhmb2N1c0hhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZvY3VzKGZvY3VzSGFuZGxlcik7XG4gIH1cblxuICBvbkJsdXIoYmx1ckhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmJsdXIoYmx1ckhhbmRsZXIpO1xuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5mb2N1cygpO1xuICB9XG59XG5cbklucHV0RWxlbWVudC5jbG9uZSA9IEVsZW1lbnQuY2xvbmU7XG5JbnB1dEVsZW1lbnQuZnJvbUhUTUwgPSBFbGVtZW50LmZyb21IVE1MO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiJdfQ==
