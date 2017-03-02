'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input(selector, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.$element.val();
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.$element[0].selectionStart;
    } ///

  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.$element[0].selectionEnd;
    } ///

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.$element.val(value);
    }
  }, {
    key: 'setSelectionStart',
    value: function setSelectionStart(selectionStart) {
      this.$element[0].selectionStart(selectionStart);
    } ///

  }, {
    key: 'setSelectionEnd',
    value: function setSelectionEnd(selectionEnd) {
      this.$element[0].selectionEnd(selectionEnd);
    } ///

  }, {
    key: 'select',
    value: function select() {
      this.$element.select();
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler, namespace) {
      this.on('change', function () {
        var value = this.getValue();

        changeHandler(value);
      }.bind(this), namespace);
    }
  }, {
    key: 'offChange',
    value: function offChange(namespace) {
      this.off('change', namespace);
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(Input, selectorOrElement, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<input />',
          changeHandler = properties.changeHandler;


      return Input.fromHTML(html, changeHandler);
    }
  }]);

  return Input;
}(InputElement);

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIklucHV0Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsIiRlbGVtZW50IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJ2YWx1ZSIsInNlbGVjdCIsIm5hbWVzcGFjZSIsIm9uIiwiZ2V0VmFsdWUiLCJiaW5kIiwib2ZmIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGlCQUFSLENBQW5COztJQUVNQyxLOzs7QUFDSixpQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSw4R0FDN0JELFFBRDZCOztBQUduQyxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OzBCQUVLQSxhLEVBQWU7QUFBRSxhQUFPRixNQUFNSSxLQUFOLENBQVksSUFBWixFQUFrQkYsYUFBbEIsQ0FBUDtBQUEwQzs7OytCQUV0RDtBQUFFLGFBQU8sS0FBS0csUUFBTCxDQUFjQyxHQUFkLEVBQVA7QUFBNkI7Ozt3Q0FDdEI7QUFBRSxhQUFPLEtBQUtELFFBQUwsQ0FBYyxDQUFkLEVBQWlCRSxjQUF4QjtBQUF5QyxLLENBQUM7Ozs7c0NBQzlDO0FBQUUsYUFBTyxLQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBeEI7QUFBdUMsSyxDQUFDOzs7OzZCQUVuREMsSyxFQUFPO0FBQUUsV0FBS0osUUFBTCxDQUFjQyxHQUFkLENBQWtCRyxLQUFsQjtBQUEyQjs7O3NDQUMzQkYsYyxFQUFnQjtBQUFFLFdBQUtGLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRSxjQUFqQixDQUFnQ0EsY0FBaEM7QUFBa0QsSyxDQUFDOzs7O29DQUN2RUMsWSxFQUFjO0FBQUUsV0FBS0gsUUFBTCxDQUFjLENBQWQsRUFBaUJHLFlBQWpCLENBQThCQSxZQUE5QjtBQUE4QyxLLENBQUM7Ozs7NkJBRXRFO0FBQUUsV0FBS0gsUUFBTCxDQUFjSyxNQUFkO0FBQXlCOzs7NkJBRTNCUixhLEVBQWVTLFMsRUFBVztBQUNqQyxXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQixZQUFXO0FBQzNCLFlBQUlILFFBQVEsS0FBS0ksUUFBTCxFQUFaOztBQUVBWCxzQkFBY08sS0FBZDtBQUNELE9BSmlCLENBSWhCSyxJQUpnQixDQUlYLElBSlcsQ0FBbEIsRUFJY0gsU0FKZDtBQUtEOzs7OEJBRVNBLFMsRUFBVztBQUNuQixXQUFLSSxHQUFMLENBQVMsUUFBVCxFQUFtQkosU0FBbkI7QUFDRDs7OzBCQUVZSyxpQixFQUFtQmQsYSxFQUFlO0FBQzdDLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLEtBQW5CLEVBQTBCZ0IsaUJBQTFCLEVBQTZDZCxhQUE3QyxDQUFQO0FBQ0Q7Ozs2QkFFZWUsSSxFQUFNZixhLEVBQWU7QUFDbkMsYUFBT0osYUFBYW9CLFFBQWIsQ0FBc0JsQixLQUF0QixFQUE2QmlCLElBQTdCLEVBQW1DZixhQUFuQyxDQUFQO0FBQ0Q7OzttQ0FFcUJpQixVLEVBQVlqQixhLEVBQWU7QUFDL0MsYUFBT0osYUFBYXNCLGNBQWIsQ0FBNEJwQixLQUE1QixFQUFtQ21CLFVBQW5DLEVBQStDakIsYUFBL0MsQ0FBUDtBQUNEOzs7bUNBRXFCbUIsVSxFQUFZO0FBQzVCLGlCQUFPLFdBQVA7QUFBQSxVQUNFbkIsYUFERixHQUNvQm1CLFVBRHBCLENBQ0VuQixhQURGOzs7QUFHSixhQUFPRixNQUFNa0IsUUFBTixDQUFlRCxJQUFmLEVBQXFCZixhQUFyQixDQUFQO0FBQ0Q7Ozs7RUFsRGlCSixZOztBQXFEcEJ3QixPQUFPQyxPQUFQLEdBQWlCdkIsS0FBakIiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnZhbCgpOyB9XG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydDsgfSAvLy9cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQ7IH0gLy8vXG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpOyB9XG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpOyB9IC8vL1xuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCk7IH0gLy8vXG5cbiAgc2VsZWN0KCkgeyB0aGlzLiRlbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIodmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgaHRtbCA9ICc8aW5wdXQgLz4nLFxuICAgICAgICB7IGNoYW5nZUhhbmRsZXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gSW5wdXQuZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiJdfQ==