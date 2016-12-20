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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(TextArea, [{
    key: 'clone',
    value: function clone() {
      return TextArea.clone(this);
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
      this.on('input', function () {
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
      this.off('input', namespace); ///
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
    value: function clone(selectorOrElement) {
      return InputElement.clone(TextArea, selectorOrElement);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return InputElement.fromHTML(TextArea, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return InputElement.fromDOMElement(TextArea, domElement);
    }
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiVGV4dEFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiJGVsZW1lbnQiLCJ2YWwiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ2YWx1ZSIsInNlbGVjdCIsIm5hbWVzcGFjZSIsIm9uIiwiZ2V0VmFsdWUiLCJiaW5kIiwiaGFuZGxlciIsInNjcm9sbCIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJvZmYiLCJyZXNpemVIYW5kbGVyIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLFE7WUFBQUEsUTs7QUFDSixXQURJQSxRQUNKLENBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUEsMEJBRGpDRixRQUNpQzs7QUFBQSx1RUFEakNBLFFBQ2lDLGFBQzdCQyxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7ZUFQR0YsUTs7NEJBU0k7QUFBRSxhQUFPQSxTQUFTSSxLQUFULENBQWUsSUFBZixDQUFQO0FBQThCOzs7K0JBRTdCO0FBQUUsYUFBTyxLQUFLQyxRQUFMLENBQWNDLEdBQWQsRUFBUDtBQUE2Qjs7O3dDQUN0QjtBQUFFLGFBQU8sS0FBS0QsUUFBTCxDQUFjLENBQWQsRUFBaUJFLGNBQXhCO0FBQXlDOzs7c0NBQzdDO0FBQUUsYUFBTyxLQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBeEI7QUFBdUM7OzttQ0FDNUM7QUFBRSxhQUFPLEtBQUtILFFBQUwsQ0FBY0ksU0FBZCxFQUFQO0FBQW1DOzs7b0NBQ3BDO0FBQUUsYUFBTyxLQUFLSixRQUFMLENBQWNLLFVBQWQsRUFBUDtBQUFvQzs7OzZCQUU3Q0MsSyxFQUFPO0FBQUUsV0FBS04sUUFBTCxDQUFjQyxHQUFkLENBQWtCSyxLQUFsQjtBQUEyQjs7O2lDQUNoQ0YsUyxFQUFXO0FBQUUsV0FBS0osUUFBTCxDQUFjSSxTQUFkLENBQXdCQSxTQUF4QjtBQUFxQzs7O2tDQUNqREMsVSxFQUFZO0FBQUUsV0FBS0wsUUFBTCxDQUFjSyxVQUFkLENBQXlCQSxVQUF6QjtBQUF1Qzs7OzZCQUUxRDtBQUFFLFdBQUtMLFFBQUwsQ0FBY08sTUFBZDtBQUF5Qjs7OzZCQUUzQlYsYSxFQUFlVyxTLEVBQVc7QUFDakMsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUIsWUFBVztBQUFFO0FBQzVCLFlBQUlILFFBQVEsS0FBS0ksUUFBTCxFQUFaOztBQUVBYixzQkFBY1MsS0FBZDtBQUNELE9BSmdCLENBSWZLLElBSmUsQ0FJVixJQUpVLENBQWpCLEVBSWNILFNBSmQ7QUFLRDs7OzZCQUVRSSxPLEVBQVNKLFMsRUFBVztBQUMzQixXQUFLUixRQUFMLENBQWNhLE1BQWQsQ0FBcUIsWUFBVztBQUM5QixZQUFJVCxZQUFZLEtBQUtVLFlBQUwsRUFBaEI7QUFBQSxZQUNJVCxhQUFhLEtBQUtVLGFBQUwsRUFEakI7O0FBR0FILGdCQUFRUixTQUFSLEVBQW1CQyxVQUFuQjtBQUNELE9BTG9CLENBS25CTSxJQUxtQixDQUtkLElBTGMsQ0FBckIsRUFLY0gsU0FMZDtBQU1EOzs7OEJBRVNBLFMsRUFBVztBQUNuQixXQUFLUSxHQUFMLENBQVMsT0FBVCxFQUFrQlIsU0FBbEIsRUFEbUIsQ0FDVztBQUMvQjs7OzhCQUVTQSxTLEVBQVc7QUFDbkIsV0FBS1EsR0FBTCxDQUFTLFFBQVQsRUFBbUJSLFNBQW5CO0FBQ0Q7Ozs2QkFFUVMsYSxFQUFlLENBQUU7Ozs4QkFDaEJBLGEsRUFBZSxDQUFFOzs7MEJBRWRDLGlCLEVBQW1CO0FBQzlCLGFBQU96QixhQUFhTSxLQUFiLENBQW1CSixRQUFuQixFQUE2QnVCLGlCQUE3QixDQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNO0FBQ3BCLGFBQU8xQixhQUFhMkIsUUFBYixDQUFzQnpCLFFBQXRCLEVBQWdDd0IsSUFBaEMsQ0FBUDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsYUFBTzVCLGFBQWE2QixjQUFiLENBQTRCM0IsUUFBNUIsRUFBc0MwQixVQUF0QyxDQUFQO0FBQ0Q7OztTQTdERzFCLFE7RUFBaUJGLFk7O0FBZ0V2QjhCLE9BQU9DLE9BQVAsR0FBaUI3QixRQUFqQiIsImZpbGUiOiJ0ZXh0QXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFRleHRBcmVhLmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnZhbCgpOyB9XG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydDsgfVxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvbkVuZDsgfVxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcCgpOyB9XG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoKTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTsgfVxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7IH1cbiAgc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7IC8vL1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICBjaGFuZ2VIYW5kbGVyKHZhbHVlKTtcbiAgICB9LmJpbmQodGhpcyksIG5hbWVzcGFjZSk7XG4gIH1cblxuICBvblNjcm9sbChoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICAgIH0uYmluZCh0aGlzKSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9mZignaW5wdXQnLCBuYW1lc3BhY2UpOyAvLy9cbiAgfVxuICBcbiAgb2ZmU2Nyb2xsKG5hbWVzcGFjZSkge1xuICAgIHRoaXMub2ZmKCdzY3JvbGwnLCBuYW1lc3BhY2UpXG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge31cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFRleHRBcmVhLCBzZWxlY3Rvck9yRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRBcmVhLCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRBcmVhO1xuIl19