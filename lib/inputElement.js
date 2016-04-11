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
InputElement.fromDOMElement = Element.fromDOMElement;

module.exports = InputElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksWUFDSixDQUFZLGtCQUFaLEVBQWdDOzBCQUQ1QixjQUM0Qjs7a0VBRDVCLHlCQUVJLHFCQUR3QjtHQUFoQzs7ZUFESTs7K0JBS087QUFDVCxVQUFJLFVBQVUsU0FBUyxhQUFULEtBQTJCLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBM0I7O0FBREwsYUFHRixPQUFQLENBSFM7Ozs7NEJBTUgsY0FBYztBQUNwQixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQXBCLEVBRG9COzs7OzJCQUlmLGFBQWE7QUFDbEIsV0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQURrQjs7Ozs0QkFJWjtBQUNOLFdBQUssUUFBTCxDQUFjLEtBQWQsR0FETTs7OztTQW5CSjtFQUFxQjs7QUF3QjNCLGFBQWEsS0FBYixHQUFxQixRQUFRLEtBQVI7QUFDckIsYUFBYSxRQUFiLEdBQXdCLFFBQVEsUUFBUjtBQUN4QixhQUFhLGNBQWIsR0FBOEIsUUFBUSxjQUFSOztBQUU5QixPQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoiaW5wdXRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcbiAgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIHZhciBmb2N1c2VkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kZWxlbWVudFswXTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzZWQ7XG4gIH1cblxuICBvbkZvY3VzKGZvY3VzSGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZm9jdXMoZm9jdXNIYW5kbGVyKTtcbiAgfVxuXG4gIG9uQmx1cihibHVySGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuYmx1cihibHVySGFuZGxlcik7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cblxuSW5wdXRFbGVtZW50LmNsb25lID0gRWxlbWVudC5jbG9uZTtcbklucHV0RWxlbWVudC5mcm9tSFRNTCA9IEVsZW1lbnQuZnJvbUhUTUw7XG5JbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQgPSBFbGVtZW50LmZyb21ET01FbGVtZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiJdfQ==
