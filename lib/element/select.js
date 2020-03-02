'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require('../element');

var Select = /*#__PURE__*/function (_Element) {
  _inherits(Select, _Element);

  function Select(selector, changeHandler) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Select, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: "onChange",
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;
      this.on('change', changeHandler, object, intermediateChangeHandler);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, object) {
      this.off('change', changeHandler, object);
    }
  }, {
    key: "getSelectedOptionValue",
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: "setSelectedOptionByValue",
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue,
          ///
      domElement = this.getDOMElement();
      domElement.value = value;
    }
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return Element.clone(Select, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
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

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var select = element,
      ///
  selectedOptionValue = select.getSelectedOptionValue();
  changeHandler.call(element, selectedOptionValue, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlNlbGVjdCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2xvbmUiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2VsZWN0ZWRPcHRpb25WYWx1ZSIsInZhbHVlIiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsInNlbGVjdCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBOztBQUNuQyxnRkFBTUQsUUFBTjs7QUFFQSxRQUFJQyxhQUFhLEtBQUtDLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0YsYUFBZDtBQUNEOztBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsTUFBTSxDQUFDSyxLQUFQLENBQWEsSUFBYixFQUFtQkgsYUFBbkIsQ0FBUDtBQUEyQzs7OzZCQUV6REEsYSxFQUFlSSxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQztBQUM1RixXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQlAsYUFBbEIsRUFBaUNJLE1BQWpDLEVBQXlDQyx5QkFBekM7QUFDRDs7OzhCQUVTTCxhLEVBQWVJLE0sRUFBUTtBQUMvQixXQUFLSSxHQUFMLENBQVMsUUFBVCxFQUFtQlIsYUFBbkIsRUFBa0NJLE1BQWxDO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBTUssVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxtQkFBbUIsR0FBR0YsVUFBVSxDQUFDRyxLQUR2QyxDQUR1QixDQUV3Qjs7QUFFL0MsYUFBT0QsbUJBQVA7QUFDRDs7OzZDQUV3QkEsbUIsRUFBcUI7QUFDNUMsVUFBTUMsS0FBSyxHQUFHRCxtQkFBZDtBQUFBLFVBQW9DO0FBQzlCRixNQUFBQSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQURuQjtBQUdBRCxNQUFBQSxVQUFVLENBQUNHLEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0Q7OzswQkFFWUMsTyxFQUFTYixhLEVBQWU7QUFBRSxhQUFPSixPQUFPLENBQUNPLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQmUsT0FBdEIsRUFBK0JiLGFBQS9CLENBQVA7QUFBdUQ7Ozs2QkFFOUVjLEksRUFBTWQsYSxFQUFlO0FBQUUsYUFBT0osT0FBTyxDQUFDbUIsUUFBUixDQUFpQmpCLE1BQWpCLEVBQXlCZ0IsSUFBekIsRUFBK0JkLGFBQS9CLENBQVA7QUFBdUQ7OzttQ0FFeEVTLFUsRUFBWVQsYSxFQUFlO0FBQUUsYUFBT0osT0FBTyxDQUFDb0IsY0FBUixDQUF1QmxCLE1BQXZCLEVBQStCVyxVQUEvQixFQUEyQ1QsYUFBM0MsQ0FBUDtBQUFtRTs7O21DQUVoR2lCLFUsRUFBWTtBQUMxQixVQUFFZixRQUFGLEdBQWVlLFVBQWYsQ0FBRWYsUUFBRjtBQUFBLFVBQ0FGLGFBREEsR0FDZ0JFLFFBRGhCO0FBQUEsVUFFQWdCLE1BRkEsR0FFU3RCLE9BQU8sQ0FBQ3VCLGNBQVIsQ0FBdUJyQixNQUF2QixFQUErQm1CLFVBQS9CLEVBQTJDakIsYUFBM0MsQ0FGVDtBQUlOLGFBQU9rQixNQUFQO0FBQ0Q7Ozs7RUE3Q2tCdEIsTzs7QUFnRHJCd0IsTUFBTSxDQUFDQyxNQUFQLENBQWN2QixNQUFkLEVBQXNCO0FBQ3BCd0IsRUFBQUEsT0FBTyxFQUFFLFFBRFc7QUFFcEJDLEVBQUFBLGlCQUFpQixFQUFFLENBQ2pCLFVBRGlCO0FBRkMsQ0FBdEI7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCM0IsTUFBakI7O0FBRUEsU0FBU1EsZ0NBQVQsQ0FBMENOLGFBQTFDLEVBQXlEMEIsS0FBekQsRUFBZ0ViLE9BQWhFLEVBQXlFO0FBQ3ZFLE1BQU1LLE1BQU0sR0FBR0wsT0FBZjtBQUFBLE1BQXdCO0FBQ2xCRixFQUFBQSxtQkFBbUIsR0FBR08sTUFBTSxDQUFDUyxzQkFBUCxFQUQ1QjtBQUdBM0IsRUFBQUEsYUFBYSxDQUFDNEIsSUFBZCxDQUFtQmYsT0FBbkIsRUFBNEJGLG1CQUE1QixFQUFpRGUsS0FBakQsRUFBd0RiLE9BQXhEO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IGRvbUVsZW1lbnQudmFsdWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZShzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvblZhbHVlLCAgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuICAgIFxuICAgIGRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShTZWxlY3QsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzZWxlY3QgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNlbGVjdCwge1xuICB0YWdOYW1lOiAnc2VsZWN0JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudCwgLy8vXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBzZWxlY3QuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuICBcbiAgY2hhbmdlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHNlbGVjdGVkT3B0aW9uVmFsdWUsIGV2ZW50LCBlbGVtZW50KTtcbn1cbiJdfQ==