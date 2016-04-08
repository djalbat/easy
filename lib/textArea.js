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
      var textrange = this.$element.textrange('get'),
          selectionStart = textrange['start']; ///

      return selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      var textrange = this.$element.textrange('get'),
          selectionEnd = textrange['end']; ///

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
  }]);

  return TextArea;
}(InputElement);

TextArea.clone = function (selectorOr$Element) {
  return InputElement.clone(TextArea, selectorOr$Element);
};

TextArea.fromHTML = function (html) {
  return InputElement.fromHTML(TextArea, html);
};

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxRQUNKLENBQVksa0JBQVosRUFBZ0MsYUFBaEMsRUFBK0M7MEJBRDNDLFVBQzJDOzt1RUFEM0MscUJBRUkscUJBRHVDOztBQUc3QyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZCxFQURpQjtLQUFuQjtpQkFINkM7R0FBL0M7O2VBREk7OzRCQVNJO0FBQUUsYUFBTyxTQUFTLEtBQVQsQ0FBZSxLQUFLLFFBQUwsQ0FBdEIsQ0FBRjs7Ozs2QkFFQyxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsWUFBVztBQUMvQixtQkFBVyxZQUFXO0FBQ3BCLGNBQUksUUFBUSxLQUFLLFFBQUwsRUFBUixDQURnQjs7QUFHcEIsa0JBQVEsS0FBUixFQUhvQjtTQUFYLENBSVQsSUFKUyxDQUlKLElBSkksQ0FBWCxFQUQrQjtPQUFYLENBTXBCLElBTm9CLENBTWYsSUFOZSxDQUF0QixFQURnQjs7Ozs2QkFVVCxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsWUFBVztBQUM5QixZQUFJLFlBQVksS0FBSyxZQUFMLEVBQVo7WUFDQSxhQUFhLEtBQUssYUFBTCxFQUFiLENBRjBCOztBQUk5QixnQkFBUSxTQUFSLEVBQW1CLFVBQW5CLEVBSjhCO09BQVgsQ0FLbkIsSUFMbUIsQ0FLZCxJQUxjLENBQXJCLEVBRGdCOzs7O21DQVNIO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxTQUFkLEVBQVAsQ0FBRjs7OztvQ0FDQztBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsVUFBZCxFQUFQLENBQUY7Ozs7K0JBRUw7QUFDVCxVQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFSLENBREs7O0FBR1QsYUFBTyxLQUFQLENBSFM7Ozs7d0NBTVM7QUFDbEIsVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsS0FBeEIsQ0FBWjtVQUNBLGlCQUFpQixVQUFVLE9BQVYsQ0FBakI7O0FBRmMsYUFJWCxjQUFQLENBSmtCOzs7O3NDQU9GO0FBQ2hCLFVBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLENBQVo7VUFDQSxlQUFlLFVBQVUsS0FBVixDQUFmOztBQUZZLGFBSVQsWUFBUCxDQUpnQjs7Ozs2QkFPVCxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQURjOzs7O2lDQUlILFdBQVc7QUFBRSxXQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLFNBQXhCLEVBQUY7Ozs7a0NBQ1YsWUFBWTtBQUFFLFdBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsVUFBekIsRUFBRjs7Ozs2QkFFakI7QUFDUCxXQUFLLFFBQUwsQ0FBYyxNQUFkLEdBRE87Ozs7U0E1REw7RUFBaUI7O0FBaUV2QixTQUFTLEtBQVQsR0FBaUIsVUFBUyxrQkFBVCxFQUE2QjtBQUM1QyxTQUFPLGFBQWEsS0FBYixDQUFtQixRQUFuQixFQUE2QixrQkFBN0IsQ0FBUCxDQUQ0QztDQUE3Qjs7QUFJakIsU0FBUyxRQUFULEdBQW9CLFVBQVMsSUFBVCxFQUFlO0FBQ2pDLFNBQU8sYUFBYSxRQUFiLENBQXNCLFFBQXRCLEVBQWdDLElBQWhDLENBQVAsQ0FEaUM7Q0FBZjs7QUFJcEIsT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InRleHRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCdqcXVlcnktdGV4dHJhbmdlJyk7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFRleHRBcmVhLmNsb25lKHRoaXMuJGVsZW1lbnQpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQua2V5ZG93bihmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgICBoYW5kbGVyKHZhbHVlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcCgpOyB9XG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoKTsgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHtcbiAgICB2YXIgdGV4dHJhbmdlID0gdGhpcy4kZWxlbWVudC50ZXh0cmFuZ2UoJ2dldCcpLFxuICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHRleHRyYW5nZVsnc3RhcnQnXTsgIC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvblN0YXJ0O1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkge1xuICAgIHZhciB0ZXh0cmFuZ2UgPSB0aGlzLiRlbGVtZW50LnRleHRyYW5nZSgnZ2V0JyksXG4gICAgICAgIHNlbGVjdGlvbkVuZCA9IHRleHRyYW5nZVsnZW5kJ107ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3Rpb25FbmQ7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTsgfVxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KHNjcm9sbExlZnQpOyB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7XG4gIH1cbn1cblxuVGV4dEFyZWEuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0QXJlYSwgc2VsZWN0b3JPciRFbGVtZW50KTtcbn07XG5cblRleHRBcmVhLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRBcmVhLCBodG1sKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEFyZWE7XG4iXX0=
