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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zZWxlY3QuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlNlbGVjdCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsIm9uQ2hhbmdlIiwiY2xvbmUiLCJuYW1lc3BhY2UiLCJvbiIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiYmluZCIsIm9mZiIsIiRzZWxlY3RlZE9wdGlvbiIsIiRlbGVtZW50IiwiZmluZCIsInZhbCIsInZhbHVlIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLGdIQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLE9BQU9JLEtBQVAsQ0FBYSxJQUFiLEVBQW1CRixhQUFuQixDQUFQO0FBQTJDOzs7NkJBRXpEQSxhLEVBQWVHLFMsRUFBVztBQUNqQyxXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQixZQUFXO0FBQzNCLFlBQUlDLHNCQUFzQixLQUFLQyxzQkFBTCxFQUExQjs7QUFFQU4sc0JBQWNLLG1CQUFkO0FBQ0QsT0FKaUIsQ0FJaEJFLElBSmdCLENBSVgsSUFKVyxDQUFsQixFQUljSixTQUpkO0FBS0Q7Ozs4QkFFU0EsUyxFQUFXO0FBQ25CLFdBQUtLLEdBQUwsQ0FBUyxRQUFULEVBQW1CTCxTQUFuQjtBQUNEOzs7NkNBRXdCO0FBQ3ZCLFVBQUlNLGtCQUFrQixLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsV0FBbkIsQ0FBdEI7QUFBQSxVQUF3RDtBQUNwRE4sNEJBQXNCSSxnQkFBZ0JHLEdBQWhCLEVBRDFCLENBRHVCLENBRTJCOztBQUVsRCxhQUFPUCxtQkFBUDtBQUNEOzs7NkNBRXdCUSxLLEVBQU87QUFBRSxXQUFLSCxRQUFMLENBQWNFLEdBQWQsQ0FBa0JDLEtBQWxCO0FBQTJCOzs7MEJBRWhEQyxpQixFQUFtQmQsYSxFQUFlO0FBQzdDLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLE1BQW5CLEVBQTJCZ0IsaUJBQTNCLEVBQThDZCxhQUE5QyxDQUFQO0FBQ0Q7Ozs2QkFFZWUsSSxFQUFNZixhLEVBQWU7QUFDbkMsYUFBT0osYUFBYW9CLFFBQWIsQ0FBc0JsQixNQUF0QixFQUE4QmlCLElBQTlCLEVBQW9DZixhQUFwQyxDQUFQO0FBQ0Q7OzttQ0FFcUJpQixVLEVBQVlqQixhLEVBQWU7QUFDL0MsYUFBT0osYUFBYXNCLGNBQWIsQ0FBNEJwQixNQUE1QixFQUFvQ21CLFVBQXBDLEVBQWdEakIsYUFBaEQsQ0FBUDtBQUNEOzs7O0VBMUNrQkosWTs7QUE2Q3JCdUIsT0FBT0MsT0FBUCxHQUFpQnRCLE1BQWpCIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBjaGFuZ2VIYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSwgbmFtZXNwYWNlKTtcbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKG5hbWVzcGFjZSkge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICB2YXIgJHNlbGVjdGVkT3B0aW9uID0gdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKSwgIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gJHNlbGVjdGVkT3B0aW9uLnZhbCgpOyAgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZSh2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7IH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFNlbGVjdCwgc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcbiJdfQ==