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
    value: function clone() {
      return TextArea.clone(this);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      this.$element.keydown(function () {
        setTimeout(function () {
          var value = this.getValue();

          handler(value);
        }.bind(this));
      }.bind(this));
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      this.$element.scroll(function () {
        var scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft();

        handler(scrollTop, scrollLeft);
      }.bind(this));
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
    key: 'getValue',
    value: function getValue() {
      var value = this.$element.val();

      return value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiVGV4dEFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiaGFuZGxlciIsIiRlbGVtZW50Iiwia2V5ZG93biIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYmluZCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3QiLCJyZXNpemVIYW5kbGVyIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLG9IQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7NEJBRU87QUFBRSxhQUFPRixTQUFTSSxLQUFULENBQWUsSUFBZixDQUFQO0FBQThCOzs7NkJBRS9CQyxPLEVBQVM7QUFDaEIsV0FBS0MsUUFBTCxDQUFjQyxPQUFkLENBQXNCLFlBQVc7QUFDL0JDLG1CQUFXLFlBQVc7QUFDcEIsY0FBSUMsUUFBUSxLQUFLQyxRQUFMLEVBQVo7O0FBRUFMLGtCQUFRSSxLQUFSO0FBQ0QsU0FKVSxDQUlURSxJQUpTLENBSUosSUFKSSxDQUFYO0FBS0QsT0FOcUIsQ0FNcEJBLElBTm9CLENBTWYsSUFOZSxDQUF0QjtBQU9EOzs7NkJBRVFOLE8sRUFBUztBQUNoQixXQUFLQyxRQUFMLENBQWNNLE1BQWQsQ0FBcUIsWUFBVztBQUM5QixZQUFJQyxZQUFZLEtBQUtDLFlBQUwsRUFBaEI7QUFBQSxZQUNJQyxhQUFhLEtBQUtDLGFBQUwsRUFEakI7O0FBR0FYLGdCQUFRUSxTQUFSLEVBQW1CRSxVQUFuQjtBQUNELE9BTG9CLENBS25CSixJQUxtQixDQUtkLElBTGMsQ0FBckI7QUFNRDs7O21DQUVjO0FBQUUsYUFBTyxLQUFLTCxRQUFMLENBQWNPLFNBQWQsRUFBUDtBQUFtQzs7O29DQUNwQztBQUFFLGFBQU8sS0FBS1AsUUFBTCxDQUFjUyxVQUFkLEVBQVA7QUFBb0M7OzsrQkFFM0M7QUFDVCxVQUFJTixRQUFRLEtBQUtILFFBQUwsQ0FBY1csR0FBZCxFQUFaOztBQUVBLGFBQU9SLEtBQVA7QUFDRDs7O3dDQUVtQjtBQUFFLGFBQU8sS0FBS0gsUUFBTCxDQUFjLENBQWQsRUFBaUJZLGNBQXhCO0FBQXlDOzs7c0NBQzdDO0FBQUUsYUFBTyxLQUFLWixRQUFMLENBQWMsQ0FBZCxFQUFpQmEsWUFBeEI7QUFBdUM7Ozs2QkFFbERWLEssRUFBTztBQUNkLFdBQUtILFFBQUwsQ0FBY1csR0FBZCxDQUFrQlIsS0FBbEI7QUFDRDs7O2lDQUVZSSxTLEVBQVc7QUFBRSxXQUFLUCxRQUFMLENBQWNPLFNBQWQsQ0FBd0JBLFNBQXhCO0FBQXFDOzs7a0NBQ2pERSxVLEVBQVk7QUFBRSxXQUFLVCxRQUFMLENBQWNTLFVBQWQsQ0FBeUJBLFVBQXpCO0FBQXVDOzs7NkJBRTFEO0FBQ1AsV0FBS1QsUUFBTCxDQUFjYyxNQUFkO0FBQ0Q7Ozs2QkFFUUMsYSxFQUFlLENBQUU7Ozs4QkFDaEJBLGEsRUFBZSxDQUFFOzs7MEJBRWRDLGlCLEVBQW1CO0FBQzlCLGFBQU94QixhQUFhTSxLQUFiLENBQW1CSixRQUFuQixFQUE2QnNCLGlCQUE3QixDQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNO0FBQ3BCLGFBQU96QixhQUFhMEIsUUFBYixDQUFzQnhCLFFBQXRCLEVBQWdDdUIsSUFBaEMsQ0FBUDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsYUFBTzNCLGFBQWE0QixjQUFiLENBQTRCMUIsUUFBNUIsRUFBc0N5QixVQUF0QyxDQUFQO0FBQ0Q7Ozs7RUFsRW9CM0IsWTs7QUFxRXZCNkIsT0FBT0MsT0FBUCxHQUFpQjVCLFFBQWpCIiwiZmlsZSI6InRleHRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gVGV4dEFyZWEuY2xvbmUodGhpcyk7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5rZXlkb3duKGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICAgIGhhbmRsZXIodmFsdWUpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgb25TY3JvbGwoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKCk7IH1cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdCgpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydDsgfVxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvbkVuZDsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG5cbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcChzY3JvbGxUb3ApOyB9XG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7IH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dEFyZWEsIHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0QXJlYSwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dEFyZWEsIGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEFyZWE7XG4iXX0=