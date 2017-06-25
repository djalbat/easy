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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlNlbGVjdCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2xvbmUiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJkb21FbGVtZW50IiwidmFsdWUiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwic2VsZWN0IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsZ0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsa0JBQWtCQyxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNGLGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsT0FBT0ssS0FBUCxDQUFhLElBQWIsRUFBbUJILGFBQW5CLENBQVA7QUFBMkM7Ozs2QkFFekRBLGEsRUFBNkU7QUFBQSxVQUE5REkseUJBQThELHVFQUFsQ0MsZ0NBQWtDOztBQUNwRixXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQk4sYUFBbEIsRUFBaUNJLHlCQUFqQztBQUNEOzs7OEJBRVNKLGEsRUFBZTtBQUN2QixXQUFLTyxHQUFMLENBQVMsUUFBVCxFQUFtQlAsYUFBbkI7QUFDRDs7OzZDQUV3QjtBQUN2QixVQUFNUSxzQkFBc0IsS0FBS0MsVUFBTCxDQUFnQkMsS0FBNUMsQ0FEdUIsQ0FDNkI7O0FBRXBELGFBQU9GLG1CQUFQO0FBQ0Q7Ozs2Q0FFd0JBLG1CLEVBQXFCO0FBQzVDLFVBQU1FLFFBQVFGLG1CQUFkLENBRDRDLENBQ1I7O0FBRXBDLFdBQUtDLFVBQUwsQ0FBZ0JDLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNEOzs7MEJBRVlDLE8sRUFBU1gsYSxFQUFlO0FBQUUsYUFBT0osUUFBUU8sS0FBUixDQUFjTCxNQUFkLEVBQXNCYSxPQUF0QixFQUErQlgsYUFBL0IsQ0FBUDtBQUF1RDs7OzZCQUU5RVksSSxFQUFNWixhLEVBQWU7QUFBRSxhQUFPSixRQUFRaUIsUUFBUixDQUFpQmYsTUFBakIsRUFBeUJjLElBQXpCLEVBQStCWixhQUEvQixDQUFQO0FBQXVEOzs7bUNBRXhFUyxVLEVBQVlULGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFrQixjQUFSLENBQXVCaEIsTUFBdkIsRUFBK0JXLFVBQS9CLEVBQTJDVCxhQUEzQyxDQUFQO0FBQW1FOzs7bUNBRWhHZSxVLEVBQVk7QUFDMUIsVUFBRWIsUUFBRixHQUFlYSxVQUFmLENBQUViLFFBQUY7QUFBQSxVQUNBRixhQURBLEdBQ2dCRSxRQURoQjtBQUFBLFVBRUFjLE1BRkEsR0FFU3BCLFFBQVFxQixjQUFSLENBQXVCbkIsTUFBdkIsRUFBK0JpQixVQUEvQixFQUEyQ2YsYUFBM0MsQ0FGVDs7O0FBSU4sYUFBT2dCLE1BQVA7QUFDRDs7OztFQTNDa0JwQixPOztBQThDckJzQixPQUFPQyxNQUFQLENBQWNyQixNQUFkLEVBQXNCO0FBQ3BCc0IsV0FBUyxRQURXO0FBRXBCQyxxQkFBbUIsQ0FDakIsVUFEaUI7QUFGQyxDQUF0Qjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQnpCLE1BQWpCOztBQUVBLFNBQVNPLGdDQUFULENBQTBDTCxhQUExQyxFQUF5RHdCLEtBQXpELEVBQWdFQyxhQUFoRSxFQUErRTtBQUM3RSxNQUFNVCxTQUFTUyxhQUFmO0FBQUEsTUFBOEI7QUFDeEJqQix3QkFBc0JRLE9BQU9VLHNCQUFQLEVBRDVCO0FBQUEsTUFFTUMsaUJBQWlCM0IsY0FBY1EsbUJBQWQsRUFBbUNpQixhQUFuQyxDQUZ2Qjs7QUFJQSxTQUFPRSxjQUFQO0FBQ0QiLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFNlbGVjdC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQudmFsdWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZShzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvblZhbHVlOyAgLy8vXG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IFxuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2VsZWN0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBzZWxlY3Q7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gc2VsZWN0LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjaGFuZ2VIYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiJdfQ==