'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler) {
      this.on('change', function () {
        var selectedOptionValue = this.getSelectedOptionValue();

        changeHandler(selectedOptionValue);
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
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(Select, selectorOrElement, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Select, domElement, changeHandler);
    }
  }]);

  return Select;
}(InputElement);

module.exports = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zZWxlY3QuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlNlbGVjdCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsIm9uQ2hhbmdlIiwiY2xvbmUiLCJvbiIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiYmluZCIsIiRzZWxlY3RlZE9wdGlvbiIsIiRlbGVtZW50IiwiZmluZCIsInZhbCIsInZhbHVlIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLGdIQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLE9BQU9JLEtBQVAsQ0FBYSxJQUFiLEVBQW1CRixhQUFuQixDQUFQO0FBQTJDOzs7NkJBRXpEQSxhLEVBQWU7QUFDdEIsV0FBS0csRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBVztBQUMzQixZQUFJQyxzQkFBc0IsS0FBS0Msc0JBQUwsRUFBMUI7O0FBRUFMLHNCQUFjSSxtQkFBZDtBQUNELE9BSmlCLENBSWhCRSxJQUpnQixDQUlYLElBSlcsQ0FBbEI7QUFLRDs7OzZDQUV3QjtBQUN2QixVQUFJQyxrQkFBa0IsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLFdBQW5CLENBQXRCO0FBQUEsVUFDSUwsc0JBQXNCRyxnQkFBZ0JHLEdBQWhCLEVBRDFCOztBQUdBLGFBQU9OLG1CQUFQO0FBQ0Q7Ozs2Q0FFd0JPLEssRUFBTztBQUM5QixXQUFLSCxRQUFMLENBQWNFLEdBQWQsQ0FBa0JDLEtBQWxCO0FBQ0Q7OzswQkFFWUMsaUIsRUFBbUJaLGEsRUFBZTtBQUM3QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixNQUFuQixFQUEyQmMsaUJBQTNCLEVBQThDWixhQUE5QyxDQUFQO0FBQ0Q7Ozs2QkFFZWEsSSxFQUFNYixhLEVBQWU7QUFDbkMsYUFBT0osYUFBYWtCLFFBQWIsQ0FBc0JoQixNQUF0QixFQUE4QmUsSUFBOUIsRUFBb0NiLGFBQXBDLENBQVA7QUFDRDs7O21DQUVxQmUsVSxFQUFZZixhLEVBQWU7QUFDL0MsYUFBT0osYUFBYW9CLGNBQWIsQ0FBNEJsQixNQUE1QixFQUFvQ2lCLFVBQXBDLEVBQWdEZixhQUFoRCxDQUFQO0FBQ0Q7Ozs7RUF4Q2tCSixZOztBQTJDckJxQixPQUFPQyxPQUFQLEdBQWlCcEIsTUFBakIiLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBjaGFuZ2VIYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLFxuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gJHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFNlbGVjdCwgc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcbiJdfQ==