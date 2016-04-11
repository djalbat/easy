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

Select.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(Select, domElement);
};

module.exports = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWUsUUFBUSxnQkFBUixDQUFmOztJQUVFOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxrQkFBWixFQUFnQyxhQUFoQyxFQUErQzswQkFEM0MsUUFDMkM7O3VFQUQzQyxtQkFFSSxxQkFEdUM7O0FBRzdDLFFBQUksYUFBSixFQUFtQjtBQUNqQixZQUFLLFFBQUwsQ0FBYyxhQUFkLEVBRGlCO0tBQW5CO2lCQUg2QztHQUEvQzs7ZUFESTs7MEJBU0UsZUFBZTtBQUFFLGFBQU8sT0FBTyxLQUFQLENBQWEsS0FBSyxRQUFMLEVBQWUsYUFBNUIsQ0FBUCxDQUFGOzs7OzZCQUVaLFNBQVM7QUFDaEIsV0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixZQUFXO0FBQzlCLFlBQUksc0JBQXNCLEtBQUssc0JBQUwsRUFBdEIsQ0FEMEI7O0FBRzlCLGdCQUFRLG1CQUFSLEVBSDhCO09BQVgsQ0FJbkIsSUFKbUIsQ0FJZCxJQUpjLENBQXJCLEVBRGdCOzs7OzZDQVFPO0FBQ3ZCLFVBQUksa0JBQWtCLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsQ0FBbEI7VUFDQSxzQkFBc0IsZ0JBQWdCLEdBQWhCLEVBQXRCLENBRm1COztBQUl2QixhQUFPLG1CQUFQLENBSnVCOzs7OzZDQU9BLE9BQU87QUFDOUIsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQUQ4Qjs7OztTQTFCNUI7RUFBZTs7QUErQnJCLE9BQU8sS0FBUCxHQUFlLFVBQVMsa0JBQVQsRUFBNkIsYUFBN0IsRUFBNEM7QUFDekQsU0FBTyxhQUFhLEtBQWIsQ0FBbUIsTUFBbkIsRUFBMkIsa0JBQTNCLEVBQStDLGFBQS9DLENBQVAsQ0FEeUQ7Q0FBNUM7O0FBSWYsT0FBTyxRQUFQLEdBQWtCLFVBQVMsSUFBVCxFQUFlLGFBQWYsRUFBOEI7QUFDOUMsU0FBTyxhQUFhLFFBQWIsQ0FBc0IsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0MsYUFBcEMsQ0FBUCxDQUQ4QztDQUE5Qjs7QUFJbEIsT0FBTyxjQUFQLEdBQXdCLFVBQVMsVUFBVCxFQUFxQjtBQUMzQyxTQUFPLFFBQVEsY0FBUixDQUF1QixNQUF2QixFQUErQixVQUEvQixDQUFQLENBRDJDO0NBQXJCOztBQUl4QixPQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFNlbGVjdC5jbG9uZSh0aGlzLiRlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCk7XG5cbiAgICAgIGhhbmRsZXIoc2VsZWN0ZWRPcHRpb25WYWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgdmFyICRzZWxlY3RlZE9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJyksXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxufVxuXG5TZWxlY3QuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShTZWxlY3QsIHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG59O1xuXG5TZWxlY3QuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbn07XG5cblNlbGVjdC5mcm9tRE9NRWxlbWVudCA9IGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuIl19
