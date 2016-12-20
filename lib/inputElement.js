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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiJGVsZW1lbnQiLCJmb2N1c0hhbmRsZXIiLCJibHVySGFuZGxlciIsImJsdXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLHVIQUNkQSxRQURjO0FBRXJCOzs7OytCQUVVO0FBQ1QsVUFBSUMsUUFBU0MsU0FBU0MsYUFBVCxLQUEyQixLQUFLQyxRQUFMLENBQWMsQ0FBZCxDQUF4QyxDQURTLENBQ21EOztBQUU1RCxhQUFPSCxLQUFQO0FBQ0Q7Ozs0QkFFT0ksWSxFQUFjO0FBQ3BCLFdBQUtELFFBQUwsQ0FBY0gsS0FBZCxDQUFvQkksWUFBcEI7QUFDRDs7OzJCQUVNQyxXLEVBQWE7QUFDbEIsV0FBS0YsUUFBTCxDQUFjRyxJQUFkLENBQW1CRCxXQUFuQjtBQUNEOzs7NEJBRU87QUFDTixXQUFLRixRQUFMLENBQWNILEtBQWQ7QUFDRDs7OztFQXJCd0JKLE87O0FBd0IzQlcsT0FBT0MsT0FBUCxHQUFpQlYsWUFBakIiLCJmaWxlIjoiaW5wdXRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBoYXNGb2N1cygpIHtcbiAgICB2YXIgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kZWxlbWVudFswXSk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIG9uRm9jdXMoZm9jdXNIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5mb2N1cyhmb2N1c0hhbmRsZXIpO1xuICB9XG5cbiAgb25CbHVyKGJsdXJIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5ibHVyKGJsdXJIYW5kbGVyKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiJdfQ==