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
      var selectedOptionValue = this.domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue; ///

      this.domElement.value = value;
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
          changeHandler = onChange; ///    

      return Element.fromProperties(Select, properties, changeHandler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlNlbGVjdCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2xvbmUiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJkb21FbGVtZW50IiwidmFsdWUiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50Iiwic2VsZWN0IiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsZ0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsa0JBQWtCQyxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNGLGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsT0FBT0ssS0FBUCxDQUFhLElBQWIsRUFBbUJILGFBQW5CLENBQVA7QUFBMkM7Ozs2QkFFekRBLGEsRUFBNkU7QUFBQSxVQUE5REkseUJBQThELHVFQUFsQ0MsZ0NBQWtDOztBQUNwRixXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQk4sYUFBbEIsRUFBaUNJLHlCQUFqQztBQUNEOzs7OEJBRVNKLGEsRUFBZTtBQUN2QixXQUFLTyxHQUFMLENBQVMsUUFBVCxFQUFtQlAsYUFBbkI7QUFDRDs7OzZDQUV3QjtBQUN2QixVQUFNUSxzQkFBc0IsS0FBS0MsVUFBTCxDQUFnQkMsS0FBNUMsQ0FEdUIsQ0FDNkI7O0FBRXBELGFBQU9GLG1CQUFQO0FBQ0Q7Ozs2Q0FFd0JBLG1CLEVBQXFCO0FBQzVDLFVBQU1FLFFBQVFGLG1CQUFkLENBRDRDLENBQ1I7O0FBRXBDLFdBQUtDLFVBQUwsQ0FBZ0JDLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNEOzs7MEJBRVlDLE8sRUFBU1gsYSxFQUFlO0FBQ25DLGFBQU9KLFFBQVFPLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQmEsT0FBdEIsRUFBK0JYLGFBQS9CLENBQVA7QUFDRDs7OzZCQUVlWSxJLEVBQU1aLGEsRUFBZTtBQUNuQyxhQUFPSixRQUFRaUIsUUFBUixDQUFpQmYsTUFBakIsRUFBeUJjLElBQXpCLEVBQStCWixhQUEvQixDQUFQO0FBQ0Q7OzttQ0FFcUJTLFUsRUFBWVQsYSxFQUFlO0FBQy9DLGFBQU9KLFFBQVFrQixjQUFSLENBQXVCaEIsTUFBdkIsRUFBK0JXLFVBQS9CLEVBQTJDVCxhQUEzQyxDQUFQO0FBQ0Q7OzttQ0FFcUJlLFUsRUFBWTtBQUMxQixVQUFFYixRQUFGLEdBQWVhLFVBQWYsQ0FBRWIsUUFBRjtBQUFBLFVBQ0FGLGFBREEsR0FDZ0JFLFFBRGhCLENBRDBCLENBRUE7O0FBRWhDLGFBQU9OLFFBQVFvQixjQUFSLENBQXVCbEIsTUFBdkIsRUFBK0JpQixVQUEvQixFQUEyQ2YsYUFBM0MsQ0FBUDtBQUNEOzs7O0VBaERrQkosTzs7QUFtRHJCcUIsT0FBT0MsTUFBUCxDQUFjcEIsTUFBZCxFQUFzQjtBQUNwQnFCLFdBQVMsUUFEVztBQUVwQkMscUJBQW1CLENBQ2pCLFVBRGlCO0FBRkMsQ0FBdEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJ4QixNQUFqQjs7QUFFQSxTQUFTTyxnQ0FBVCxDQUEwQ0wsYUFBMUMsRUFBeUR1QixLQUF6RCxFQUFnRUMsYUFBaEUsRUFBK0U7QUFDN0UsTUFBTUMsU0FBU0QsYUFBZjtBQUFBLE1BQThCO0FBQ3hCaEIsd0JBQXNCaUIsT0FBT0Msc0JBQVAsRUFENUI7QUFBQSxNQUVNQyxpQkFBaUIzQixjQUFjUSxtQkFBZCxFQUFtQ2dCLGFBQW5DLENBRnZCOztBQUlBLFNBQU9HLGNBQVA7QUFDRCIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uVmFsdWU7ICAvLy9cbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LCB7XG4gIHRhZ05hbWU6ICdzZWxlY3QnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBzZWxlY3QgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHNlbGVjdC5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2hhbmdlSGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iXX0=