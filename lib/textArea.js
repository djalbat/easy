'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('jquery-textrange');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxRQUNKLENBQVksUUFBWixFQUFzQixhQUF0QixFQUFxQzswQkFEakMsVUFDaUM7O3VFQURqQyxxQkFFSSxXQUQ2Qjs7QUFHbkMsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQsRUFEaUI7S0FBbkI7aUJBSG1DO0dBQXJDOztlQURJOzs0QkFTSTtBQUFFLGFBQU8sU0FBUyxLQUFULENBQWUsSUFBZixDQUFQLENBQUY7Ozs7NkJBRUMsU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFlBQVc7QUFDL0IsbUJBQVcsWUFBVztBQUNwQixjQUFJLFFBQVEsS0FBSyxRQUFMLEVBQVIsQ0FEZ0I7O0FBR3BCLGtCQUFRLEtBQVIsRUFIb0I7U0FBWCxDQUlULElBSlMsQ0FJSixJQUpJLENBQVgsRUFEK0I7T0FBWCxDQU1wQixJQU5vQixDQU1mLElBTmUsQ0FBdEIsRUFEZ0I7Ozs7NkJBVVQsU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLFlBQVc7QUFDOUIsWUFBSSxZQUFZLEtBQUssWUFBTCxFQUFaO1lBQ0EsYUFBYSxLQUFLLGFBQUwsRUFBYixDQUYwQjs7QUFJOUIsZ0JBQVEsU0FBUixFQUFtQixVQUFuQixFQUo4QjtPQUFYLENBS25CLElBTG1CLENBS2QsSUFMYyxDQUFyQixFQURnQjs7OzttQ0FTSDtBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsU0FBZCxFQUFQLENBQUY7Ozs7b0NBQ0M7QUFBRSxhQUFPLEtBQUssUUFBTCxDQUFjLFVBQWQsRUFBUCxDQUFGOzs7OytCQUVMO0FBQ1QsVUFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLEdBQWQsRUFBUixDQURLOztBQUdULGFBQU8sS0FBUCxDQUhTOzs7O3dDQU1TO0FBQ2xCLFVBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLENBQVo7VUFDQSxpQkFBaUIsVUFBVSxPQUFWLENBQWpCOztBQUZjLGFBSVgsY0FBUCxDQUprQjs7OztzQ0FPRjtBQUNoQixVQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixLQUF4QixDQUFaO1VBQ0EsZUFBZSxVQUFVLEtBQVYsQ0FBZjs7QUFGWSxhQUlULFlBQVAsQ0FKZ0I7Ozs7NkJBT1QsT0FBTztBQUNkLFdBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsS0FBbEIsRUFEYzs7OztpQ0FJSCxXQUFXO0FBQUUsV0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixTQUF4QixFQUFGOzs7O2tDQUNWLFlBQVk7QUFBRSxXQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLFVBQXpCLEVBQUY7Ozs7NkJBRWpCO0FBQ1AsV0FBSyxRQUFMLENBQWMsTUFBZCxHQURPOzs7OzBCQUlJLG1CQUFtQjtBQUM5QixhQUFPLGFBQWEsS0FBYixDQUFtQixRQUFuQixFQUE2QixpQkFBN0IsQ0FBUCxDQUQ4Qjs7Ozs2QkFJaEIsTUFBTTtBQUNwQixhQUFPLGFBQWEsUUFBYixDQUFzQixRQUF0QixFQUFnQyxJQUFoQyxDQUFQLENBRG9COzs7O21DQUlBLFlBQVk7QUFDaEMsYUFBTyxhQUFhLGNBQWIsQ0FBNEIsUUFBNUIsRUFBc0MsVUFBdEMsQ0FBUCxDQURnQzs7OztTQXhFOUI7RUFBaUI7O0FBNkV2QixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoidGV4dEFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJ2pxdWVyeS10ZXh0cmFuZ2UnKTtcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFRleHRBcmVhLmNsb25lKHRoaXMpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQua2V5ZG93bihmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgICBoYW5kbGVyKHZhbHVlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcCgpOyB9XG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoKTsgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHtcbiAgICB2YXIgdGV4dFJhbmdlID0gdGhpcy4kZWxlbWVudC50ZXh0cmFuZ2UoJ2dldCcpLFxuICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHRleHRSYW5nZVsnc3RhcnQnXTsgIC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvblN0YXJ0O1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkge1xuICAgIHZhciB0ZXh0UmFuZ2UgPSB0aGlzLiRlbGVtZW50LnRleHRyYW5nZSgnZ2V0JyksXG4gICAgICAgIHNlbGVjdGlvbkVuZCA9IHRleHRSYW5nZVsnZW5kJ107ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3Rpb25FbmQ7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTsgfVxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KHNjcm9sbExlZnQpOyB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFRleHRBcmVhLCBzZWxlY3Rvck9yRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRBcmVhLCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRBcmVhO1xuIl19
