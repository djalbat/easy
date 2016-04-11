'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selectorOr$Element, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, selectorOr$Element));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this.$element, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      this.$element.click(function () {
        var checked = this.isChecked();

        handler(checked);
      }.bind(this));
    }
  }, {
    key: 'check',
    value: function check(checked) {
      if (arguments.length === 0) {
        checked = true;
      }

      if (checked) {
        this.$element.attr('checked', 'checked');
      } else {
        this.$element.removeAttr('checked');
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.$element.is(':checked');
    }
  }]);

  return Checkbox;
}(InputElement);

Checkbox.clone = function (selectorOr$Element, changeHandler) {
  return InputElement.clone(Checkbox, selectorOr$Element, changeHandler);
};

Checkbox.fromHTML = function (html, changeHandler) {
  return InputElement.fromHTML(Checkbox, html, changeHandler);
};

Checkbox.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(Checkbox, domElement);
};

module.exports = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLGtCQUFaLEVBQWdDLGFBQWhDLEVBQStDOzBCQUQzQyxVQUMyQzs7dUVBRDNDLHFCQUVJLHFCQUR1Qzs7QUFHN0MsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQsRUFEaUI7S0FBbkI7aUJBSDZDO0dBQS9DOztlQURJOzswQkFTRSxlQUFlO0FBQUUsYUFBTyxTQUFTLEtBQVQsQ0FBZSxLQUFLLFFBQUwsRUFBZSxhQUE5QixDQUFQLENBQUY7Ozs7NkJBRVosU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsWUFBSSxVQUFVLEtBQUssU0FBTCxFQUFWLENBRHlCOztBQUc3QixnQkFBUSxPQUFSLEVBSDZCO09BQVgsQ0FJbEIsSUFKa0IsQ0FJYixJQUphLENBQXBCLEVBRGdCOzs7OzBCQVFaLFNBQVM7QUFDYixVQUFJLFVBQVUsTUFBVixLQUFxQixDQUFyQixFQUF3QjtBQUMxQixrQkFBVSxJQUFWLENBRDBCO09BQTVCOztBQUlBLFVBQUksT0FBSixFQUFhO0FBQ1gsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixTQUFuQixFQUE4QixTQUE5QixFQURXO09BQWIsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsU0FBekIsRUFESztPQUZQOzs7O2dDQU9VO0FBQ1YsYUFBTyxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLFVBQWpCLENBQVAsQ0FEVTs7OztTQS9CUjtFQUFpQjs7QUFvQ3ZCLFNBQVMsS0FBVCxHQUFpQixVQUFTLGtCQUFULEVBQTZCLGFBQTdCLEVBQTRDO0FBQzNELFNBQU8sYUFBYSxLQUFiLENBQW1CLFFBQW5CLEVBQTZCLGtCQUE3QixFQUFpRCxhQUFqRCxDQUFQLENBRDJEO0NBQTVDOztBQUlqQixTQUFTLFFBQVQsR0FBb0IsVUFBUyxJQUFULEVBQWUsYUFBZixFQUE4QjtBQUNoRCxTQUFPLGFBQWEsUUFBYixDQUFzQixRQUF0QixFQUFnQyxJQUFoQyxFQUFzQyxhQUF0QyxDQUFQLENBRGdEO0NBQTlCOztBQUlwQixTQUFTLGNBQVQsR0FBMEIsVUFBUyxVQUFULEVBQXFCO0FBQzdDLFNBQU8sUUFBUSxjQUFSLENBQXVCLFFBQXZCLEVBQWlDLFVBQWpDLENBQVAsQ0FENkM7Q0FBckI7O0FBSTFCLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMuJGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKCk7XG5cbiAgICAgIGhhbmRsZXIoY2hlY2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY2hlY2soY2hlY2tlZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgfVxuICB9XG5cbiAgaXNDaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuICB9XG59XG5cbkNoZWNrYm94LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG59O1xuXG5DaGVja2JveC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG59O1xuXG5DaGVja2JveC5mcm9tRE9NRWxlbWVudCA9IGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiJdfQ==
