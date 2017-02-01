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
        ///
        var value = this.getValue();

        changeHandler(value);
      }.bind(this), namespace);
    }
  }, {
    key: 'offChange',
    value: function offChange(namespace) {
      this.off('change', namespace); ///
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
  }]);

  return Input;
}(InputElement);

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIklucHV0Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsIiRlbGVtZW50IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJ2YWx1ZSIsInNlbGVjdCIsIm5hbWVzcGFjZSIsIm9uIiwiZ2V0VmFsdWUiLCJiaW5kIiwib2ZmIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsaUJBQVIsQ0FBbkI7O0lBRU1DLEs7OztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLDhHQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLE1BQU1JLEtBQU4sQ0FBWSxJQUFaLEVBQWtCRixhQUFsQixDQUFQO0FBQTBDOzs7K0JBRXREO0FBQUUsYUFBTyxLQUFLRyxRQUFMLENBQWNDLEdBQWQsRUFBUDtBQUE2Qjs7O3dDQUN0QjtBQUFFLGFBQU8sS0FBS0QsUUFBTCxDQUFjLENBQWQsRUFBaUJFLGNBQXhCO0FBQXlDLEssQ0FBQzs7OztzQ0FDOUM7QUFBRSxhQUFPLEtBQUtGLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxZQUF4QjtBQUF1QyxLLENBQUM7Ozs7NkJBRW5EQyxLLEVBQU87QUFBRSxXQUFLSixRQUFMLENBQWNDLEdBQWQsQ0FBa0JHLEtBQWxCO0FBQTJCOzs7c0NBQzNCRixjLEVBQWdCO0FBQUUsV0FBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJFLGNBQWpCLENBQWdDQSxjQUFoQztBQUFrRCxLLENBQUM7Ozs7b0NBQ3ZFQyxZLEVBQWM7QUFBRSxXQUFLSCxRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBakIsQ0FBOEJBLFlBQTlCO0FBQThDLEssQ0FBQzs7Ozs2QkFFdEU7QUFBRSxXQUFLSCxRQUFMLENBQWNLLE1BQWQ7QUFBeUI7Ozs2QkFFM0JSLGEsRUFBZVMsUyxFQUFXO0FBQ2pDLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQVc7QUFBRTtBQUM3QixZQUFJSCxRQUFRLEtBQUtJLFFBQUwsRUFBWjs7QUFFQVgsc0JBQWNPLEtBQWQ7QUFDRCxPQUppQixDQUloQkssSUFKZ0IsQ0FJWCxJQUpXLENBQWxCLEVBSWNILFNBSmQ7QUFLRDs7OzhCQUVTQSxTLEVBQVc7QUFDbkIsV0FBS0ksR0FBTCxDQUFTLFFBQVQsRUFBbUJKLFNBQW5CLEVBRG1CLENBQ1k7QUFDaEM7OzswQkFFWUssaUIsRUFBbUJkLGEsRUFBZTtBQUM3QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixLQUFuQixFQUEwQmdCLGlCQUExQixFQUE2Q2QsYUFBN0MsQ0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTWYsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFvQixRQUFiLENBQXNCbEIsS0FBdEIsRUFBNkJpQixJQUE3QixFQUFtQ2YsYUFBbkMsQ0FBUDtBQUNEOzs7bUNBRXFCaUIsVSxFQUFZakIsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFzQixjQUFiLENBQTRCcEIsS0FBNUIsRUFBbUNtQixVQUFuQyxFQUErQ2pCLGFBQS9DLENBQVA7QUFDRDs7OztFQTNDaUJKLFk7O0FBOENwQnVCLE9BQU9DLE9BQVAsR0FBaUJ0QixLQUFqQiIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQudmFsKCk7IH1cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvblN0YXJ0OyB9IC8vL1xuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvbkVuZDsgfSAvLy9cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7IH1cbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCk7IH0gLy8vXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKTsgfSAvLy9cblxuICBzZWxlY3QoKSB7IHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgLy8vXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIodmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgbmFtZXNwYWNlKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKElucHV0LCBzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIl19