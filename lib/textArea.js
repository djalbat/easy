'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var TextArea = function (_InputElement) {
  _inherits(TextArea, _InputElement);

  function TextArea(selector, changeHandler) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(TextArea, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return TextArea.clone(this, changeHandler);
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
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.$element[0].selectionEnd;
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.$element.scrollTop();
    }
  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.$element.scrollLeft();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.$element.val(value);
    }
  }, {
    key: 'setScrollTop',
    value: function setScrollTop(scrollTop) {
      this.$element.scrollTop(scrollTop);
    }
  }, {
    key: 'setScrollLeft',
    value: function setScrollLeft(scrollLeft) {
      this.$element.scrollLeft(scrollLeft);
    }
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
    key: 'onScroll',
    value: function onScroll(handler, namespace) {
      this.$element.scroll(function () {
        var scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft();

        handler(scrollTop, scrollLeft);
      }.bind(this), namespace);
    }
  }, {
    key: 'offChange',
    value: function offChange(namespace) {
      this.off('change', namespace); ///
    }
  }, {
    key: 'offScroll',
    value: function offScroll(namespace) {
      this.off('scroll', namespace);
    }
  }, {
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(TextArea, selectorOrElement, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(TextArea, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(TextArea, domElement, changeHandler);
    }
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiVGV4dEFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiJGVsZW1lbnQiLCJ2YWwiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ2YWx1ZSIsInNlbGVjdCIsIm5hbWVzcGFjZSIsIm9uIiwiZ2V0VmFsdWUiLCJiaW5kIiwiaGFuZGxlciIsInNjcm9sbCIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJvZmYiLCJyZXNpemVIYW5kbGVyIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLG9IQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLFNBQVNJLEtBQVQsQ0FBZSxJQUFmLEVBQXFCRixhQUFyQixDQUFQO0FBQTZDOzs7K0JBRXpEO0FBQUUsYUFBTyxLQUFLRyxRQUFMLENBQWNDLEdBQWQsRUFBUDtBQUE2Qjs7O3dDQUN0QjtBQUFFLGFBQU8sS0FBS0QsUUFBTCxDQUFjLENBQWQsRUFBaUJFLGNBQXhCO0FBQXlDOzs7c0NBQzdDO0FBQUUsYUFBTyxLQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBeEI7QUFBdUM7OzttQ0FDNUM7QUFBRSxhQUFPLEtBQUtILFFBQUwsQ0FBY0ksU0FBZCxFQUFQO0FBQW1DOzs7b0NBQ3BDO0FBQUUsYUFBTyxLQUFLSixRQUFMLENBQWNLLFVBQWQsRUFBUDtBQUFvQzs7OzZCQUU3Q0MsSyxFQUFPO0FBQUUsV0FBS04sUUFBTCxDQUFjQyxHQUFkLENBQWtCSyxLQUFsQjtBQUEyQjs7O2lDQUNoQ0YsUyxFQUFXO0FBQUUsV0FBS0osUUFBTCxDQUFjSSxTQUFkLENBQXdCQSxTQUF4QjtBQUFxQzs7O2tDQUNqREMsVSxFQUFZO0FBQUUsV0FBS0wsUUFBTCxDQUFjSyxVQUFkLENBQXlCQSxVQUF6QjtBQUF1Qzs7OzZCQUUxRDtBQUFFLFdBQUtMLFFBQUwsQ0FBY08sTUFBZDtBQUF5Qjs7OzZCQUUzQlYsYSxFQUFlVyxTLEVBQVc7QUFDakMsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBVztBQUFFO0FBQzdCLFlBQUlILFFBQVEsS0FBS0ksUUFBTCxFQUFaOztBQUVBYixzQkFBY1MsS0FBZDtBQUNELE9BSmlCLENBSWhCSyxJQUpnQixDQUlYLElBSlcsQ0FBbEIsRUFJY0gsU0FKZDtBQUtEOzs7NkJBRVFJLE8sRUFBU0osUyxFQUFXO0FBQzNCLFdBQUtSLFFBQUwsQ0FBY2EsTUFBZCxDQUFxQixZQUFXO0FBQzlCLFlBQUlULFlBQVksS0FBS1UsWUFBTCxFQUFoQjtBQUFBLFlBQ0lULGFBQWEsS0FBS1UsYUFBTCxFQURqQjs7QUFHQUgsZ0JBQVFSLFNBQVIsRUFBbUJDLFVBQW5CO0FBQ0QsT0FMb0IsQ0FLbkJNLElBTG1CLENBS2QsSUFMYyxDQUFyQixFQUtjSCxTQUxkO0FBTUQ7Ozs4QkFFU0EsUyxFQUFXO0FBQ25CLFdBQUtRLEdBQUwsQ0FBUyxRQUFULEVBQW1CUixTQUFuQixFQURtQixDQUNZO0FBQ2hDOzs7OEJBRVNBLFMsRUFBVztBQUNuQixXQUFLUSxHQUFMLENBQVMsUUFBVCxFQUFtQlIsU0FBbkI7QUFDRDs7OzZCQUVRUyxhLEVBQWUsQ0FBRTs7OzhCQUNoQkEsYSxFQUFlLENBQUU7OzswQkFFZEMsaUIsRUFBbUJyQixhLEVBQWU7QUFDN0MsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosUUFBbkIsRUFBNkJ1QixpQkFBN0IsRUFBZ0RyQixhQUFoRCxDQUFQO0FBQ0Q7Ozs2QkFFZXNCLEksRUFBTXRCLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhMkIsUUFBYixDQUFzQnpCLFFBQXRCLEVBQWdDd0IsSUFBaEMsRUFBc0N0QixhQUF0QyxDQUFQO0FBQ0Q7OzttQ0FFcUJ3QixVLEVBQVl4QixhLEVBQWU7QUFDL0MsYUFBT0osYUFBYTZCLGNBQWIsQ0FBNEIzQixRQUE1QixFQUFzQzBCLFVBQXRDLEVBQWtEeEIsYUFBbEQsQ0FBUDtBQUNEOzs7O0VBN0RvQkosWTs7QUFnRXZCOEIsT0FBT0MsT0FBUCxHQUFpQjdCLFFBQWpCIiwiZmlsZSI6InRleHRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFRleHRBcmVhLmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnZhbCgpOyB9XG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydDsgfVxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvbkVuZDsgfVxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcCgpOyB9XG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoKTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTsgfVxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7IH1cbiAgc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyAvLy9cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgb25TY3JvbGwoaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIGhhbmRsZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgICB9LmJpbmQodGhpcyksIG5hbWVzcGFjZSk7XG4gIH1cblxuICBvZmZDaGFuZ2UobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIG5hbWVzcGFjZSk7IC8vL1xuICB9XG4gIFxuICBvZmZTY3JvbGwobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIG5hbWVzcGFjZSlcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dEFyZWEsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0QXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dEFyZWEsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEFyZWE7XG4iXX0=