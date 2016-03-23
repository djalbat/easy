'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Select = function (_Element) {
  _inherits(Select, _Element);

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
}(Element);

Select.clone = function (selectorOr$Element, changeHandler) {
  return Element.clone(Select, selectorOr$Element, changeHandler);
};

Select.fromHTML = function (html, changeHandler) {
  return Element.fromHTML(Select, html, changeHandler);
};

module.exports = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksTUFDSixDQUFZLGtCQUFaLEVBQWdDLGFBQWhDLEVBQStDOzBCQUQzQyxRQUMyQzs7dUVBRDNDLG1CQUVJLHFCQUR1Qzs7QUFHN0MsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQsRUFEaUI7S0FBbkI7aUJBSDZDO0dBQS9DOztlQURJOzswQkFTRSxlQUFlO0FBQUUsYUFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFLLFFBQUwsRUFBZSxhQUE1QixDQUFQLENBQUY7Ozs7NkJBRVosU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLFlBQVc7QUFDOUIsWUFBSSxzQkFBc0IsS0FBSyxzQkFBTCxFQUF0QixDQUQwQjs7QUFHOUIsZ0JBQVEsbUJBQVIsRUFIOEI7T0FBWCxDQUluQixJQUptQixDQUlkLElBSmMsQ0FBckIsRUFEZ0I7Ozs7NkNBUU87QUFDdkIsVUFBSSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixXQUFuQixDQUFsQjtVQUNBLHNCQUFzQixnQkFBZ0IsR0FBaEIsRUFBdEIsQ0FGbUI7O0FBSXZCLGFBQU8sbUJBQVAsQ0FKdUI7Ozs7NkNBT0EsT0FBTztBQUM5QixXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEVBRDhCOzs7O1NBMUI1QjtFQUFlOztBQStCckIsT0FBTyxLQUFQLEdBQWUsVUFBUyxrQkFBVCxFQUE2QixhQUE3QixFQUE0QztBQUN6RCxTQUFPLFFBQVEsS0FBUixDQUFjLE1BQWQsRUFBc0Isa0JBQXRCLEVBQTBDLGFBQTFDLENBQVAsQ0FEeUQ7Q0FBNUM7O0FBSWYsT0FBTyxRQUFQLEdBQWtCLFVBQVMsSUFBVCxFQUFlLGFBQWYsRUFBOEI7QUFDOUMsU0FBTyxRQUFRLFFBQVIsQ0FBaUIsTUFBakIsRUFBeUIsSUFBekIsRUFBK0IsYUFBL0IsQ0FBUCxDQUQ4QztDQUE5Qjs7QUFJbEIsT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcy4kZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLFxuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gJHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH1cbn1cblxuU2VsZWN0LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKFNlbGVjdCwgc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbn07XG5cblNlbGVjdC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuIl19