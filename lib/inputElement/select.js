'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selector, changeHandler, selectedOptionValue) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (selectedOptionValue !== undefined) {
      _this.setSelectedOptionByValue(selectedOptionValue);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var selectedOptionValue = this.domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue; ///

      this.domElement.value = value;
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Select, element, changeHandler);
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
      var onChange = properties.onChange,
          selectedOptionValue = properties.selectedOptionValue,
          changeHandler = onChange; ///    

      return InputElement.fromProperties(Select, properties, changeHandler, selectedOptionValue);
    }
  }]);

  return Select;
}(InputElement);

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: ['onChange']
});

module.exports = Select;

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  var selectedOptionValue = this.getSelectedOptionValue(),
      preventDefault = handler(selectedOptionValue, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvc2VsZWN0LmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUiLCJjbG9uZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJiaW5kIiwib24iLCJvZmYiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsbUJBQXJDLEVBQTBEO0FBQUE7O0FBQUEsZ0hBQ2xERixRQURrRDs7QUFHeEQsUUFBSUMsa0JBQWtCRSxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyx3QkFBd0JDLFNBQTVCLEVBQXVDO0FBQ3JDLFlBQUtFLHdCQUFMLENBQThCSCxtQkFBOUI7QUFDRDtBQVR1RDtBQVV6RDs7OzswQkFFS0QsYSxFQUFlO0FBQUUsYUFBT0YsT0FBT08sS0FBUCxDQUFhLElBQWIsRUFBbUJMLGFBQW5CLENBQVA7QUFBMkM7Ozs2Q0FFekM7QUFDdkIsVUFBTUMsc0JBQXNCLEtBQUtLLFVBQUwsQ0FBZ0JDLEtBQTVDLENBRHVCLENBQzZCOztBQUVwRCxhQUFPTixtQkFBUDtBQUNEOzs7NkNBRXdCQSxtQixFQUFxQjtBQUM1QyxVQUFNTSxRQUFRTixtQkFBZCxDQUQ0QyxDQUNSOztBQUVwQyxXQUFLSyxVQUFMLENBQWdCQyxLQUFoQixHQUF3QkEsS0FBeEI7QUFDRDs7OzZCQUVRQyxPLEVBQVM7QUFDaEIsVUFBSUEsUUFBUUMsbUJBQVIsS0FBZ0NQLFNBQXBDLEVBQStDO0FBQzdDTSxnQkFBUUMsbUJBQVIsR0FBOEJDLGlDQUFpQ0MsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBOUI7QUFDRDs7QUFFRCxXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQkosT0FBbEI7QUFDRDs7OzhCQUVTQSxPLEVBQVM7QUFDakIsV0FBS0ssR0FBTCxDQUFTLFFBQVQsRUFBbUJMLE9BQW5CO0FBQ0Q7OzswQkFFWU0sTyxFQUFTZCxhLEVBQWU7QUFDbkMsYUFBT0osYUFBYVMsS0FBYixDQUFtQlAsTUFBbkIsRUFBMkJnQixPQUEzQixFQUFvQ2QsYUFBcEMsQ0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTWYsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFvQixRQUFiLENBQXNCbEIsTUFBdEIsRUFBOEJpQixJQUE5QixFQUFvQ2YsYUFBcEMsQ0FBUDtBQUNEOzs7bUNBRXFCTSxVLEVBQVlOLGEsRUFBZTtBQUMvQyxhQUFPSixhQUFhcUIsY0FBYixDQUE0Qm5CLE1BQTVCLEVBQW9DUSxVQUFwQyxFQUFnRE4sYUFBaEQsQ0FBUDtBQUNEOzs7bUNBRXFCa0IsVSxFQUFZO0FBQUEsVUFDeEJmLFFBRHdCLEdBQ1VlLFVBRFYsQ0FDeEJmLFFBRHdCO0FBQUEsVUFDZEYsbUJBRGMsR0FDVWlCLFVBRFYsQ0FDZGpCLG1CQURjO0FBQUEsVUFFMUJELGFBRjBCLEdBRVZHLFFBRlUsRUFFQTs7QUFFaEMsYUFBT1AsYUFBYXVCLGNBQWIsQ0FBNEJyQixNQUE1QixFQUFvQ29CLFVBQXBDLEVBQWdEbEIsYUFBaEQsRUFBK0RDLG1CQUEvRCxDQUFQO0FBQ0Q7Ozs7RUF4RGtCTCxZOztBQTJEckJ3QixPQUFPQyxNQUFQLENBQWN2QixNQUFkLEVBQXNCO0FBQ3BCd0IsV0FBUyxRQURXO0FBRXBCQyxxQkFBbUIsQ0FDakIsVUFEaUI7QUFGQyxDQUF0Qjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjNCLE1BQWpCOztBQUVBLFNBQVNZLGdDQUFULENBQTBDRixPQUExQyxFQUFtRGtCLEtBQW5ELEVBQTBEQyxhQUExRCxFQUF5RTtBQUN2RSxNQUFNMUIsc0JBQXNCLEtBQUsyQixzQkFBTCxFQUE1QjtBQUFBLE1BQ01DLGlCQUFpQnJCLFFBQVFQLG1CQUFSLEVBQTZCMEIsYUFBN0IsQ0FEdkI7O0FBR0EsU0FBT0UsY0FBUDtBQUNEIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHNlbGVjdGVkT3B0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHsgXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uVmFsdWU7ICAvLy9cbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHNlbGVjdGVkT3B0aW9uVmFsdWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgc2VsZWN0ZWRPcHRpb25WYWx1ZSk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiJdfQ==