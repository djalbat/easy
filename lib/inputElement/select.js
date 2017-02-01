'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

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
    value: function onChange(changeHandler, namespace) {
      this.on('change', function () {
        var selectedOptionValue = this.getSelectedOptionValue();

        changeHandler(selectedOptionValue);
      }.bind(this), namespace);
    }
  }, {
    key: 'offChange',
    value: function offChange(namespace) {
      this.off('change', namespace);
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var $selectedOption = this.$element.find(':selected'),
          ///
      selectedOptionValue = $selectedOption.val(); ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvc2VsZWN0LmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwibmFtZXNwYWNlIiwib24iLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsImJpbmQiLCJvZmYiLCIkc2VsZWN0ZWRPcHRpb24iLCIkZWxlbWVudCIsImZpbmQiLCJ2YWwiLCJ2YWx1ZSIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGlCQUFSLENBQW5COztJQUVNQyxNOzs7QUFDSixrQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSxnSEFDN0JELFFBRDZCOztBQUduQyxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OzBCQUVLQSxhLEVBQWU7QUFBRSxhQUFPRixPQUFPSSxLQUFQLENBQWEsSUFBYixFQUFtQkYsYUFBbkIsQ0FBUDtBQUEyQzs7OzZCQUV6REEsYSxFQUFlRyxTLEVBQVc7QUFDakMsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBVztBQUMzQixZQUFJQyxzQkFBc0IsS0FBS0Msc0JBQUwsRUFBMUI7O0FBRUFOLHNCQUFjSyxtQkFBZDtBQUNELE9BSmlCLENBSWhCRSxJQUpnQixDQUlYLElBSlcsQ0FBbEIsRUFJY0osU0FKZDtBQUtEOzs7OEJBRVNBLFMsRUFBVztBQUNuQixXQUFLSyxHQUFMLENBQVMsUUFBVCxFQUFtQkwsU0FBbkI7QUFDRDs7OzZDQUV3QjtBQUN2QixVQUFJTSxrQkFBa0IsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLFdBQW5CLENBQXRCO0FBQUEsVUFBd0Q7QUFDcEROLDRCQUFzQkksZ0JBQWdCRyxHQUFoQixFQUQxQixDQUR1QixDQUUyQjs7QUFFbEQsYUFBT1AsbUJBQVA7QUFDRDs7OzZDQUV3QlEsSyxFQUFPO0FBQUUsV0FBS0gsUUFBTCxDQUFjRSxHQUFkLENBQWtCQyxLQUFsQjtBQUEyQjs7OzBCQUVoREMsaUIsRUFBbUJkLGEsRUFBZTtBQUM3QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixNQUFuQixFQUEyQmdCLGlCQUEzQixFQUE4Q2QsYUFBOUMsQ0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTWYsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFvQixRQUFiLENBQXNCbEIsTUFBdEIsRUFBOEJpQixJQUE5QixFQUFvQ2YsYUFBcEMsQ0FBUDtBQUNEOzs7bUNBRXFCaUIsVSxFQUFZakIsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFzQixjQUFiLENBQTRCcEIsTUFBNUIsRUFBb0NtQixVQUFwQyxFQUFnRGpCLGFBQWhELENBQVA7QUFDRDs7OztFQTFDa0JKLFk7O0FBNkNyQnVCLE9BQU9DLE9BQVAsR0FBaUJ0QixNQUFqQiIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIoc2VsZWN0ZWRPcHRpb25WYWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG4gIFxuICBvZmZDaGFuZ2UobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIG5hbWVzcGFjZSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLCAgLy8vXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuIl19