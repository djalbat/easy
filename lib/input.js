'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiSW5wdXQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiJGVsZW1lbnQiLCJ2YWwiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInZhbHVlIiwic2VsZWN0IiwibmFtZXNwYWNlIiwib24iLCJnZXRWYWx1ZSIsImJpbmQiLCJvZmYiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxnQkFBUixDQUFuQjs7SUFFTUMsSzs7O0FBQ0osaUJBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsOEdBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsTUFBTUksS0FBTixDQUFZLElBQVosRUFBa0JGLGFBQWxCLENBQVA7QUFBMEM7OzsrQkFFdEQ7QUFBRSxhQUFPLEtBQUtHLFFBQUwsQ0FBY0MsR0FBZCxFQUFQO0FBQTZCOzs7d0NBQ3RCO0FBQUUsYUFBTyxLQUFLRCxRQUFMLENBQWMsQ0FBZCxFQUFpQkUsY0FBeEI7QUFBeUMsSyxDQUFDOzs7O3NDQUM5QztBQUFFLGFBQU8sS0FBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJHLFlBQXhCO0FBQXVDLEssQ0FBQzs7Ozs2QkFFbkRDLEssRUFBTztBQUFFLFdBQUtKLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkcsS0FBbEI7QUFBMkI7OztzQ0FDM0JGLGMsRUFBZ0I7QUFBRSxXQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQkUsY0FBakIsQ0FBZ0NBLGNBQWhDO0FBQWtELEssQ0FBQzs7OztvQ0FDdkVDLFksRUFBYztBQUFFLFdBQUtILFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxZQUFqQixDQUE4QkEsWUFBOUI7QUFBOEMsSyxDQUFDOzs7OzZCQUV0RTtBQUFFLFdBQUtILFFBQUwsQ0FBY0ssTUFBZDtBQUF5Qjs7OzZCQUUzQlIsYSxFQUFlUyxTLEVBQVc7QUFDakMsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBVztBQUFFO0FBQzdCLFlBQUlILFFBQVEsS0FBS0ksUUFBTCxFQUFaOztBQUVBWCxzQkFBY08sS0FBZDtBQUNELE9BSmlCLENBSWhCSyxJQUpnQixDQUlYLElBSlcsQ0FBbEIsRUFJY0gsU0FKZDtBQUtEOzs7OEJBRVNBLFMsRUFBVztBQUNuQixXQUFLSSxHQUFMLENBQVMsUUFBVCxFQUFtQkosU0FBbkIsRUFEbUIsQ0FDWTtBQUNoQzs7OzBCQUVZSyxpQixFQUFtQmQsYSxFQUFlO0FBQzdDLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLEtBQW5CLEVBQTBCZ0IsaUJBQTFCLEVBQTZDZCxhQUE3QyxDQUFQO0FBQ0Q7Ozs2QkFFZWUsSSxFQUFNZixhLEVBQWU7QUFDbkMsYUFBT0osYUFBYW9CLFFBQWIsQ0FBc0JsQixLQUF0QixFQUE2QmlCLElBQTdCLEVBQW1DZixhQUFuQyxDQUFQO0FBQ0Q7OzttQ0FFcUJpQixVLEVBQVlqQixhLEVBQWU7QUFDL0MsYUFBT0osYUFBYXNCLGNBQWIsQ0FBNEJwQixLQUE1QixFQUFtQ21CLFVBQW5DLEVBQStDakIsYUFBL0MsQ0FBUDtBQUNEOzs7O0VBM0NpQkosWTs7QUE4Q3BCdUIsT0FBT0MsT0FBUCxHQUFpQnRCLEtBQWpCIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnZhbCgpOyB9XG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydDsgfSAvLy9cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQ7IH0gLy8vXG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpOyB9XG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpOyB9IC8vL1xuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCk7IH0gLy8vXG5cbiAgc2VsZWN0KCkgeyB0aGlzLiRlbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IC8vL1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICBjaGFuZ2VIYW5kbGVyKHZhbHVlKTtcbiAgICB9LmJpbmQodGhpcyksIG5hbWVzcGFjZSk7XG4gIH1cblxuICBvZmZDaGFuZ2UobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIG5hbWVzcGFjZSk7IC8vL1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiJdfQ==