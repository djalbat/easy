'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selectorOr$Element, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, selectorOr$Element));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this.$element, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      this.$element.change(function () {
        var selectedOptionValue = this.getSelectedOptionValue();

        handler(selectedOptionValue);
      }.bind(this));
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var $selectedOption = this.$element.find(':selected'),
          selectedOptionValue = $selectedOption.val();

      return selectedOptionValue;
    }
  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(value) {
      this.$element.val(value);
    }
  }]);

  return Select;
}(InputElement);

Select.clone = function (selectorOr$Element, changeHandler) {
  return InputElement.clone(Select, selectorOr$Element, changeHandler);
};

Select.fromHTML = function (html, changeHandler) {
  return InputElement.fromHTML(Select, html, changeHandler);
};

module.exports = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWUsUUFBUSxnQkFBUixDQUFmOztJQUVFOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxrQkFBWixFQUFnQyxhQUFoQyxFQUErQzswQkFEM0MsUUFDMkM7O3VFQUQzQyxtQkFFSSxxQkFEdUM7O0FBRzdDLFFBQUksYUFBSixFQUFtQjtBQUNqQixZQUFLLFFBQUwsQ0FBYyxhQUFkLEVBRGlCO0tBQW5CO2lCQUg2QztHQUEvQzs7ZUFESTs7MEJBU0UsZUFBZTtBQUFFLGFBQU8sT0FBTyxLQUFQLENBQWEsS0FBSyxRQUFMLEVBQWUsYUFBNUIsQ0FBUCxDQUFGOzs7OzZCQUVaLFNBQVM7QUFDaEIsV0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixZQUFXO0FBQzlCLFlBQUksc0JBQXNCLEtBQUssc0JBQUwsRUFBdEIsQ0FEMEI7O0FBRzlCLGdCQUFRLG1CQUFSLEVBSDhCO09BQVgsQ0FJbkIsSUFKbUIsQ0FJZCxJQUpjLENBQXJCLEVBRGdCOzs7OzZDQVFPO0FBQ3ZCLFVBQUksa0JBQWtCLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsQ0FBbEI7VUFDQSxzQkFBc0IsZ0JBQWdCLEdBQWhCLEVBQXRCLENBRm1COztBQUl2QixhQUFPLG1CQUFQLENBSnVCOzs7OzZDQU9BLE9BQU87QUFDOUIsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQUQ4Qjs7OztTQTFCNUI7RUFBZTs7QUErQnJCLE9BQU8sS0FBUCxHQUFlLFVBQVMsa0JBQVQsRUFBNkIsYUFBN0IsRUFBNEM7QUFDekQsU0FBTyxhQUFhLEtBQWIsQ0FBbUIsTUFBbkIsRUFBMkIsa0JBQTNCLEVBQStDLGFBQS9DLENBQVAsQ0FEeUQ7Q0FBNUM7O0FBSWYsT0FBTyxRQUFQLEdBQWtCLFVBQVMsSUFBVCxFQUFlLGFBQWYsRUFBOEI7QUFDOUMsU0FBTyxhQUFhLFFBQWIsQ0FBc0IsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0MsYUFBcEMsQ0FBUCxDQUQ4QztDQUE5Qjs7QUFJbEIsT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcy4kZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLFxuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gJHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH1cbn1cblxuU2VsZWN0LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xufTtcblxuU2VsZWN0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcbiJdfQ==
