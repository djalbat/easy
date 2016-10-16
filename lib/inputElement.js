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

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImZvY3VzZWQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCIkZWxlbWVudCIsImZvY3VzSGFuZGxlciIsImZvY3VzIiwiYmx1ckhhbmRsZXIiLCJibHVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDs7SUFFTUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx1SEFDZEEsUUFEYztBQUVyQjs7OzsrQkFFVTtBQUNULFVBQUlDLFVBQVVDLFNBQVNDLGFBQVQsS0FBMkIsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBekMsQ0FEUyxDQUNtRDs7QUFFNUQsYUFBT0gsT0FBUDtBQUNEOzs7NEJBRU9JLFksRUFBYztBQUNwQixXQUFLRCxRQUFMLENBQWNFLEtBQWQsQ0FBb0JELFlBQXBCO0FBQ0Q7OzsyQkFFTUUsVyxFQUFhO0FBQ2xCLFdBQUtILFFBQUwsQ0FBY0ksSUFBZCxDQUFtQkQsV0FBbkI7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS0gsUUFBTCxDQUFjRSxLQUFkO0FBQ0Q7Ozs7RUFyQndCVCxPOztBQXdCM0JZLE9BQU9DLE9BQVAsR0FBaUJYLFlBQWpCIiwiZmlsZSI6ImlucHV0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgdmFyIGZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLiRlbGVtZW50WzBdOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXNlZDtcbiAgfVxuXG4gIG9uRm9jdXMoZm9jdXNIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5mb2N1cyhmb2N1c0hhbmRsZXIpO1xuICB9XG5cbiAgb25CbHVyKGJsdXJIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5ibHVyKGJsdXJIYW5kbGVyKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiJdfQ==