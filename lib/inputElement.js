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
      var focus = document.activeElement === this.$element[0]; ///

      return focus;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiJGVsZW1lbnQiLCJmb2N1c0hhbmRsZXIiLCJibHVySGFuZGxlciIsImJsdXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxZO1lBQUFBLFk7O0FBQ0osV0FESUEsWUFDSixDQUFZQyxRQUFaLEVBQXNCO0FBQUEsMEJBRGxCRCxZQUNrQjs7QUFBQSxrRUFEbEJBLFlBQ2tCLGFBQ2RDLFFBRGM7QUFFckI7O2VBSEdELFk7OytCQUtPO0FBQ1QsVUFBSUUsUUFBU0MsU0FBU0MsYUFBVCxLQUEyQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF4QyxDQURTLENBQ21EOztBQUU1RCxhQUFPSCxLQUFQO0FBQ0Q7Ozs0QkFFT0ksWSxFQUFjO0FBQ3BCLFdBQUtELFFBQUwsQ0FBY0gsS0FBZCxDQUFvQkksWUFBcEI7QUFDRDs7OzJCQUVNQyxXLEVBQWE7QUFDbEIsV0FBS0YsUUFBTCxDQUFjRyxJQUFkLENBQW1CRCxXQUFuQjtBQUNEOzs7NEJBRU87QUFDTixXQUFLRixRQUFMLENBQWNILEtBQWQ7QUFDRDs7O1NBckJHRixZO0VBQXFCRixPOztBQXdCM0JXLE9BQU9DLE9BQVAsR0FBaUJWLFlBQWpCIiwiZmlsZSI6ImlucHV0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgdmFyIGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuJGVsZW1lbnRbMF0pOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBvbkZvY3VzKGZvY3VzSGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZm9jdXMoZm9jdXNIYW5kbGVyKTtcbiAgfVxuXG4gIG9uQmx1cihibHVySGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuYmx1cihibHVySGFuZGxlcik7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG4iXX0=