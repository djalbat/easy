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
    key: 'onChange',
    value: function onChange(changeHandler) {
      this.on('input', function () {
        ///
        var value = this.getValue();

        changeHandler(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiVGV4dEFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwiYmluZCIsImhhbmRsZXIiLCIkZWxlbWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3QiLCJyZXNpemVIYW5kbGVyIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLFE7WUFBQUEsUTs7QUFDSixXQURJQSxRQUNKLENBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUEsMEJBRGpDRixRQUNpQzs7QUFBQSx1RUFEakNBLFFBQ2lDLGFBQzdCQyxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7ZUFQR0YsUTs7NEJBU0k7QUFBRSxhQUFPQSxTQUFTSSxLQUFULENBQWUsSUFBZixDQUFQO0FBQThCOzs7NkJBRS9CRixhLEVBQWU7QUFDdEIsV0FBS0csRUFBTCxDQUFRLE9BQVIsRUFBaUIsWUFBVztBQUFFO0FBQzVCLFlBQUlDLFFBQVEsS0FBS0MsUUFBTCxFQUFaOztBQUVBTCxzQkFBY0ksS0FBZDtBQUNELE9BSmdCLENBSWZFLElBSmUsQ0FJVixJQUpVLENBQWpCO0FBS0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixZQUFXO0FBQzlCLFlBQUlDLFlBQVksS0FBS0MsWUFBTCxFQUFoQjtBQUFBLFlBQ0lDLGFBQWEsS0FBS0MsYUFBTCxFQURqQjs7QUFHQU4sZ0JBQVFHLFNBQVIsRUFBbUJFLFVBQW5CO0FBQ0QsT0FMb0IsQ0FLbkJOLElBTG1CLENBS2QsSUFMYyxDQUFyQjtBQU1EOzs7bUNBRWM7QUFBRSxhQUFPLEtBQUtFLFFBQUwsQ0FBY0UsU0FBZCxFQUFQO0FBQW1DOzs7b0NBQ3BDO0FBQUUsYUFBTyxLQUFLRixRQUFMLENBQWNJLFVBQWQsRUFBUDtBQUFvQzs7OytCQUUzQztBQUNULFVBQUlSLFFBQVEsS0FBS0ksUUFBTCxDQUFjTSxHQUFkLEVBQVo7O0FBRUEsYUFBT1YsS0FBUDtBQUNEOzs7d0NBRW1CO0FBQUUsYUFBTyxLQUFLSSxRQUFMLENBQWMsQ0FBZCxFQUFpQk8sY0FBeEI7QUFBeUM7OztzQ0FDN0M7QUFBRSxhQUFPLEtBQUtQLFFBQUwsQ0FBYyxDQUFkLEVBQWlCUSxZQUF4QjtBQUF1Qzs7OzZCQUVsRFosSyxFQUFPO0FBQ2QsV0FBS0ksUUFBTCxDQUFjTSxHQUFkLENBQWtCVixLQUFsQjtBQUNEOzs7aUNBRVlNLFMsRUFBVztBQUFFLFdBQUtGLFFBQUwsQ0FBY0UsU0FBZCxDQUF3QkEsU0FBeEI7QUFBcUM7OztrQ0FDakRFLFUsRUFBWTtBQUFFLFdBQUtKLFFBQUwsQ0FBY0ksVUFBZCxDQUF5QkEsVUFBekI7QUFBdUM7Ozs2QkFFMUQ7QUFDUCxXQUFLSixRQUFMLENBQWNTLE1BQWQ7QUFDRDs7OzZCQUVRQyxhLEVBQWUsQ0FBRTs7OzhCQUNoQkEsYSxFQUFlLENBQUU7OzswQkFFZEMsaUIsRUFBbUI7QUFDOUIsYUFBT3ZCLGFBQWFNLEtBQWIsQ0FBbUJKLFFBQW5CLEVBQTZCcUIsaUJBQTdCLENBQVA7QUFDRDs7OzZCQUVlQyxJLEVBQU07QUFDcEIsYUFBT3hCLGFBQWF5QixRQUFiLENBQXNCdkIsUUFBdEIsRUFBZ0NzQixJQUFoQyxDQUFQO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxhQUFPMUIsYUFBYTJCLGNBQWIsQ0FBNEJ6QixRQUE1QixFQUFzQ3dCLFVBQXRDLENBQVA7QUFDRDs7O1NBaEVHeEIsUTtFQUFpQkYsWTs7QUFtRXZCNEIsT0FBT0MsT0FBUCxHQUFpQjNCLFFBQWpCIiwiZmlsZSI6InRleHRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gVGV4dEFyZWEuY2xvbmUodGhpcyk7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignaW5wdXQnLCBmdW5jdGlvbigpIHsgLy8vXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIodmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBvblNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIGhhbmRsZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5zY3JvbGxUb3AoKTsgfVxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KCk7IH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLiRlbGVtZW50LnZhbCgpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvblN0YXJ0OyB9XG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7IH1cbiAgc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTsgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0QXJlYSwgc2VsZWN0b3JPckVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRBcmVhLCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChUZXh0QXJlYSwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0QXJlYTtcbiJdfQ==