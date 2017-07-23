'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Select = function (_Element) {
  _inherits(Select, _Element);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler !== undefined) {
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
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;

      this.on('change', changeHandler, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler) {
      this.off('change', changeHandler);
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue,
          ///
      domElement = this.getDOMElement();

      domElement.value = value;
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return Element.clone(Select, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          select = Element.fromProperties(Select, properties, changeHandler);


      return select;
    }
  }]);

  return Select;
}(Element);

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: ['onChange']
});

module.exports = Select;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var select = targetElement,
      ///
  selectedOptionValue = select.getSelectedOptionValue(),
      preventDefault = changeHandler(selectedOptionValue, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlNlbGVjdCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2xvbmUiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2VsZWN0ZWRPcHRpb25WYWx1ZSIsInZhbHVlIiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsInNlbGVjdCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLGdIQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGtCQUFrQkMsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLE9BQU9LLEtBQVAsQ0FBYSxJQUFiLEVBQW1CSCxhQUFuQixDQUFQO0FBQTJDOzs7NkJBRXpEQSxhLEVBQTZFO0FBQUEsVUFBOURJLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDcEYsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0JOLGFBQWxCLEVBQWlDSSx5QkFBakM7QUFDRDs7OzhCQUVTSixhLEVBQWU7QUFDdkIsV0FBS08sR0FBTCxDQUFTLFFBQVQsRUFBbUJQLGFBQW5CO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBTVEsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsc0JBQXNCRixXQUFXRyxLQUR2QyxDQUR1QixDQUV3Qjs7QUFFL0MsYUFBT0QsbUJBQVA7QUFDRDs7OzZDQUV3QkEsbUIsRUFBcUI7QUFDNUMsVUFBTUMsUUFBUUQsbUJBQWQ7QUFBQSxVQUFvQztBQUM5QkYsbUJBQWEsS0FBS0MsYUFBTCxFQURuQjs7QUFHQUQsaUJBQVdHLEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0Q7OzswQkFFWUMsTyxFQUFTWixhLEVBQWU7QUFBRSxhQUFPSixRQUFRTyxLQUFSLENBQWNMLE1BQWQsRUFBc0JjLE9BQXRCLEVBQStCWixhQUEvQixDQUFQO0FBQXVEOzs7NkJBRTlFYSxJLEVBQU1iLGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFrQixRQUFSLENBQWlCaEIsTUFBakIsRUFBeUJlLElBQXpCLEVBQStCYixhQUEvQixDQUFQO0FBQXVEOzs7bUNBRXhFUSxVLEVBQVlSLGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFtQixjQUFSLENBQXVCakIsTUFBdkIsRUFBK0JVLFVBQS9CLEVBQTJDUixhQUEzQyxDQUFQO0FBQW1FOzs7bUNBRWhHZ0IsVSxFQUFZO0FBQzFCLFVBQUVkLFFBQUYsR0FBZWMsVUFBZixDQUFFZCxRQUFGO0FBQUEsVUFDQUYsYUFEQSxHQUNnQkUsUUFEaEI7QUFBQSxVQUVBZSxNQUZBLEdBRVNyQixRQUFRc0IsY0FBUixDQUF1QnBCLE1BQXZCLEVBQStCa0IsVUFBL0IsRUFBMkNoQixhQUEzQyxDQUZUOzs7QUFJTixhQUFPaUIsTUFBUDtBQUNEOzs7O0VBN0NrQnJCLE87O0FBZ0RyQnVCLE9BQU9DLE1BQVAsQ0FBY3RCLE1BQWQsRUFBc0I7QUFDcEJ1QixXQUFTLFFBRFc7QUFFcEJDLHFCQUFtQixDQUNqQixVQURpQjtBQUZDLENBQXRCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCMUIsTUFBakI7O0FBRUEsU0FBU08sZ0NBQVQsQ0FBMENMLGFBQTFDLEVBQXlEeUIsS0FBekQsRUFBZ0VDLGFBQWhFLEVBQStFO0FBQzdFLE1BQU1ULFNBQVNTLGFBQWY7QUFBQSxNQUE4QjtBQUN4QmhCLHdCQUFzQk8sT0FBT1Usc0JBQVAsRUFENUI7QUFBQSxNQUVNQyxpQkFBaUI1QixjQUFjVSxtQkFBZCxFQUFtQ2dCLGFBQW5DLENBRnZCOztBQUlBLFNBQU9FLGNBQVA7QUFDRCIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBkb21FbGVtZW50LnZhbHVlOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb25WYWx1ZSwgIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcbiAgICBcbiAgICBkb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IFxuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2VsZWN0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBzZWxlY3Q7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gc2VsZWN0LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjaGFuZ2VIYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiJdfQ==