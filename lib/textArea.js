'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('jquery-textrange');

var InputElement = require('./inputElement');

var TextArea = function (_InputElement) {
  _inherits(TextArea, _InputElement);

  function TextArea(selectorOr$Element, changeHandler) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, selectorOr$Element));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(TextArea, [{
    key: 'clone',
    value: function clone() {
      return TextArea.clone(this.$element);
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
      var textRange = this.$element.textrange('get'),
          selectionStart = textRange['start']; ///

      return selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      var textRange = this.$element.textrange('get'),
          selectionEnd = textRange['end']; ///

      return selectionEnd;
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
  }], [{
    key: 'clone',
    value: function clone(selectorOr$Element) {
      return InputElement.clone(TextArea, selectorOr$Element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return InputElement.fromHTML(TextArea, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(TextArea, domElement);
    }
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxRQUNKLENBQVksa0JBQVosRUFBZ0MsYUFBaEMsRUFBK0M7MEJBRDNDLFVBQzJDOzt1RUFEM0MscUJBRUkscUJBRHVDOztBQUc3QyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZCxFQURpQjtLQUFuQjtpQkFINkM7R0FBL0M7O2VBREk7OzRCQVNJO0FBQUUsYUFBTyxTQUFTLEtBQVQsQ0FBZSxLQUFLLFFBQUwsQ0FBdEIsQ0FBRjs7Ozs2QkFFQyxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsWUFBVztBQUMvQixtQkFBVyxZQUFXO0FBQ3BCLGNBQUksUUFBUSxLQUFLLFFBQUwsRUFBUixDQURnQjs7QUFHcEIsa0JBQVEsS0FBUixFQUhvQjtTQUFYLENBSVQsSUFKUyxDQUlKLElBSkksQ0FBWCxFQUQrQjtPQUFYLENBTXBCLElBTm9CLENBTWYsSUFOZSxDQUF0QixFQURnQjs7Ozs2QkFVVCxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsWUFBVztBQUM5QixZQUFJLFlBQVksS0FBSyxZQUFMLEVBQVo7WUFDQSxhQUFhLEtBQUssYUFBTCxFQUFiLENBRjBCOztBQUk5QixnQkFBUSxTQUFSLEVBQW1CLFVBQW5CLEVBSjhCO09BQVgsQ0FLbkIsSUFMbUIsQ0FLZCxJQUxjLENBQXJCLEVBRGdCOzs7O21DQVNIO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxTQUFkLEVBQVAsQ0FBRjs7OztvQ0FDQztBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsVUFBZCxFQUFQLENBQUY7Ozs7K0JBRUw7QUFDVCxVQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFSLENBREs7O0FBR1QsYUFBTyxLQUFQLENBSFM7Ozs7d0NBTVM7QUFDbEIsVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsS0FBeEIsQ0FBWjtVQUNBLGlCQUFpQixVQUFVLE9BQVYsQ0FBakI7O0FBRmMsYUFJWCxjQUFQLENBSmtCOzs7O3NDQU9GO0FBQ2hCLFVBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLENBQVo7VUFDQSxlQUFlLFVBQVUsS0FBVixDQUFmOztBQUZZLGFBSVQsWUFBUCxDQUpnQjs7Ozs2QkFPVCxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQURjOzs7O2lDQUlILFdBQVc7QUFBRSxXQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLFNBQXhCLEVBQUY7Ozs7a0NBQ1YsWUFBWTtBQUFFLFdBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsVUFBekIsRUFBRjs7Ozs2QkFFakI7QUFDUCxXQUFLLFFBQUwsQ0FBYyxNQUFkLEdBRE87Ozs7MEJBSUksb0JBQW9CO0FBQy9CLGFBQU8sYUFBYSxLQUFiLENBQW1CLFFBQW5CLEVBQTZCLGtCQUE3QixDQUFQLENBRCtCOzs7OzZCQUlqQixNQUFNO0FBQ3BCLGFBQU8sYUFBYSxRQUFiLENBQXNCLFFBQXRCLEVBQWdDLElBQWhDLENBQVAsQ0FEb0I7Ozs7bUNBSUEsWUFBWTtBQUNoQyxhQUFPLFFBQVEsY0FBUixDQUF1QixRQUF2QixFQUFpQyxVQUFqQyxDQUFQLENBRGdDOzs7O1NBeEU5QjtFQUFpQjs7QUE2RXZCLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJ0ZXh0QXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnanF1ZXJ5LXRleHRyYW5nZScpO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0QXJlYS5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmtleWRvd24oZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgICAgaGFuZGxlcih2YWx1ZSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBvblNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIGhhbmRsZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5zY3JvbGxUb3AoKTsgfVxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KCk7IH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLiRlbGVtZW50LnZhbCgpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgdmFyIHRleHRSYW5nZSA9IHRoaXMuJGVsZW1lbnQudGV4dHJhbmdlKCdnZXQnKSxcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSB0ZXh0UmFuZ2VbJ3N0YXJ0J107ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3Rpb25TdGFydDtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHtcbiAgICB2YXIgdGV4dFJhbmdlID0gdGhpcy4kZWxlbWVudC50ZXh0cmFuZ2UoJ2dldCcpLFxuICAgICAgICBzZWxlY3Rpb25FbmQgPSB0ZXh0UmFuZ2VbJ2VuZCddOyAgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0aW9uRW5kO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7IH1cbiAgc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTsgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dEFyZWEsIHNlbGVjdG9yT3IkRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChUZXh0QXJlYSwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0QXJlYTtcbiJdfQ==
