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
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<select></select>',
          changeHandler = properties.changeHandler;


      return Select.fromHTML(html, changeHandler);
    }
  }]);

  return Select;
}(InputElement);

module.exports = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvc2VsZWN0LmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwibmFtZXNwYWNlIiwib24iLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsImJpbmQiLCJvZmYiLCIkc2VsZWN0ZWRPcHRpb24iLCIkZWxlbWVudCIsImZpbmQiLCJ2YWwiLCJ2YWx1ZSIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsZ0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsT0FBT0ksS0FBUCxDQUFhLElBQWIsRUFBbUJGLGFBQW5CLENBQVA7QUFBMkM7Ozs2QkFFekRBLGEsRUFBZUcsUyxFQUFXO0FBQ2pDLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQVc7QUFDM0IsWUFBSUMsc0JBQXNCLEtBQUtDLHNCQUFMLEVBQTFCOztBQUVBTixzQkFBY0ssbUJBQWQ7QUFDRCxPQUppQixDQUloQkUsSUFKZ0IsQ0FJWCxJQUpXLENBQWxCLEVBSWNKLFNBSmQ7QUFLRDs7OzhCQUVTQSxTLEVBQVc7QUFDbkIsV0FBS0ssR0FBTCxDQUFTLFFBQVQsRUFBbUJMLFNBQW5CO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBSU0sa0JBQWtCLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixXQUFuQixDQUF0QjtBQUFBLFVBQXdEO0FBQ3BETiw0QkFBc0JJLGdCQUFnQkcsR0FBaEIsRUFEMUIsQ0FEdUIsQ0FFMkI7O0FBRWxELGFBQU9QLG1CQUFQO0FBQ0Q7Ozs2Q0FFd0JRLEssRUFBTztBQUFFLFdBQUtILFFBQUwsQ0FBY0UsR0FBZCxDQUFrQkMsS0FBbEI7QUFBMkI7OzswQkFFaERDLGlCLEVBQW1CZCxhLEVBQWU7QUFDN0MsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosTUFBbkIsRUFBMkJnQixpQkFBM0IsRUFBOENkLGFBQTlDLENBQVA7QUFDRDs7OzZCQUVlZSxJLEVBQU1mLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhb0IsUUFBYixDQUFzQmxCLE1BQXRCLEVBQThCaUIsSUFBOUIsRUFBb0NmLGFBQXBDLENBQVA7QUFDRDs7O21DQUVxQmlCLFUsRUFBWWpCLGEsRUFBZTtBQUMvQyxhQUFPSixhQUFhc0IsY0FBYixDQUE0QnBCLE1BQTVCLEVBQW9DbUIsVUFBcEMsRUFBZ0RqQixhQUFoRCxDQUFQO0FBQ0Q7OzttQ0FFcUJtQixVLEVBQVk7QUFDNUIsaUJBQU8sbUJBQVA7QUFBQSxVQUNFbkIsYUFERixHQUNvQm1CLFVBRHBCLENBQ0VuQixhQURGOzs7QUFHSixhQUFPRixPQUFPa0IsUUFBUCxDQUFnQkQsSUFBaEIsRUFBc0JmLGFBQXRCLENBQVA7QUFDRDs7OztFQWpEa0JKLFk7O0FBb0RyQndCLE9BQU9DLE9BQVAsR0FBaUJ2QixNQUFqQiIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIoc2VsZWN0ZWRPcHRpb25WYWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG4gIFxuICBvZmZDaGFuZ2UobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIG5hbWVzcGFjZSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIHZhciAkc2VsZWN0ZWRPcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLCAgLy8vXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgaHRtbCA9ICc8c2VsZWN0Pjwvc2VsZWN0PicsXG4gICAgICAgIHsgY2hhbmdlSGFuZGxlciB9ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiBTZWxlY3QuZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG4iXX0=