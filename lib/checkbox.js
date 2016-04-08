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

module.exports = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLGtCQUFaLEVBQWdDLGFBQWhDLEVBQStDOzBCQUQzQyxVQUMyQzs7dUVBRDNDLHFCQUVJLHFCQUR1Qzs7QUFHN0MsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQsRUFEaUI7S0FBbkI7aUJBSDZDO0dBQS9DOztlQURJOzswQkFTRSxlQUFlO0FBQUUsYUFBTyxTQUFTLEtBQVQsQ0FBZSxLQUFLLFFBQUwsRUFBZSxhQUE5QixDQUFQLENBQUY7Ozs7NkJBRVosU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsWUFBSSxVQUFVLEtBQUssU0FBTCxFQUFWLENBRHlCOztBQUc3QixnQkFBUSxPQUFSLEVBSDZCO09BQVgsQ0FJbEIsSUFKa0IsQ0FJYixJQUphLENBQXBCLEVBRGdCOzs7OzBCQVFaLFNBQVM7QUFDYixVQUFJLFVBQVUsTUFBVixLQUFxQixDQUFyQixFQUF3QjtBQUMxQixrQkFBVSxJQUFWLENBRDBCO09BQTVCOztBQUlBLFVBQUksT0FBSixFQUFhO0FBQ1gsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixTQUFuQixFQUE4QixTQUE5QixFQURXO09BQWIsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsU0FBekIsRUFESztPQUZQOzs7O2dDQU9VO0FBQ1YsYUFBTyxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLFVBQWpCLENBQVAsQ0FEVTs7OztTQS9CUjtFQUFpQjs7QUFvQ3ZCLFNBQVMsS0FBVCxHQUFpQixVQUFTLGtCQUFULEVBQTZCLGFBQTdCLEVBQTRDO0FBQzNELFNBQU8sYUFBYSxLQUFiLENBQW1CLFFBQW5CLEVBQTZCLGtCQUE3QixFQUFpRCxhQUFqRCxDQUFQLENBRDJEO0NBQTVDOztBQUlqQixTQUFTLFFBQVQsR0FBb0IsVUFBUyxJQUFULEVBQWUsYUFBZixFQUE4QjtBQUNoRCxTQUFPLGFBQWEsUUFBYixDQUFzQixRQUF0QixFQUFnQyxJQUFoQyxFQUFzQyxhQUF0QyxDQUFQLENBRGdEO0NBQTlCOztBQUlwQixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLiRlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuXG4gICAgICBoYW5kbGVyKGNoZWNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5pcygnOmNoZWNrZWQnKTtcbiAgfVxufVxuXG5DaGVja2JveC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKENoZWNrYm94LCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxuQ2hlY2tib3guZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiJdfQ==
