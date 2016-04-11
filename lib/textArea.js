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

TextArea.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(TextArea, domElement);
};

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxRQUNKLENBQVksa0JBQVosRUFBZ0MsYUFBaEMsRUFBK0M7MEJBRDNDLFVBQzJDOzt1RUFEM0MscUJBRUkscUJBRHVDOztBQUc3QyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZCxFQURpQjtLQUFuQjtpQkFINkM7R0FBL0M7O2VBREk7OzRCQVNJO0FBQUUsYUFBTyxTQUFTLEtBQVQsQ0FBZSxLQUFLLFFBQUwsQ0FBdEIsQ0FBRjs7Ozs2QkFFQyxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsWUFBVztBQUMvQixtQkFBVyxZQUFXO0FBQ3BCLGNBQUksUUFBUSxLQUFLLFFBQUwsRUFBUixDQURnQjs7QUFHcEIsa0JBQVEsS0FBUixFQUhvQjtTQUFYLENBSVQsSUFKUyxDQUlKLElBSkksQ0FBWCxFQUQrQjtPQUFYLENBTXBCLElBTm9CLENBTWYsSUFOZSxDQUF0QixFQURnQjs7Ozs2QkFVVCxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsWUFBVztBQUM5QixZQUFJLFlBQVksS0FBSyxZQUFMLEVBQVo7WUFDQSxhQUFhLEtBQUssYUFBTCxFQUFiLENBRjBCOztBQUk5QixnQkFBUSxTQUFSLEVBQW1CLFVBQW5CLEVBSjhCO09BQVgsQ0FLbkIsSUFMbUIsQ0FLZCxJQUxjLENBQXJCLEVBRGdCOzs7O21DQVNIO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxTQUFkLEVBQVAsQ0FBRjs7OztvQ0FDQztBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsVUFBZCxFQUFQLENBQUY7Ozs7K0JBRUw7QUFDVCxVQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFSLENBREs7O0FBR1QsYUFBTyxLQUFQLENBSFM7Ozs7d0NBTVM7QUFDbEIsVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsS0FBeEIsQ0FBWjtVQUNBLGlCQUFpQixVQUFVLE9BQVYsQ0FBakI7O0FBRmMsYUFJWCxjQUFQLENBSmtCOzs7O3NDQU9GO0FBQ2hCLFVBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLENBQVo7VUFDQSxlQUFlLFVBQVUsS0FBVixDQUFmOztBQUZZLGFBSVQsWUFBUCxDQUpnQjs7Ozs2QkFPVCxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQURjOzs7O2lDQUlILFdBQVc7QUFBRSxXQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLFNBQXhCLEVBQUY7Ozs7a0NBQ1YsWUFBWTtBQUFFLFdBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsVUFBekIsRUFBRjs7Ozs2QkFFakI7QUFDUCxXQUFLLFFBQUwsQ0FBYyxNQUFkLEdBRE87Ozs7U0E1REw7RUFBaUI7O0FBaUV2QixTQUFTLEtBQVQsR0FBaUIsVUFBUyxrQkFBVCxFQUE2QjtBQUM1QyxTQUFPLGFBQWEsS0FBYixDQUFtQixRQUFuQixFQUE2QixrQkFBN0IsQ0FBUCxDQUQ0QztDQUE3Qjs7QUFJakIsU0FBUyxRQUFULEdBQW9CLFVBQVMsSUFBVCxFQUFlO0FBQ2pDLFNBQU8sYUFBYSxRQUFiLENBQXNCLFFBQXRCLEVBQWdDLElBQWhDLENBQVAsQ0FEaUM7Q0FBZjs7QUFJcEIsU0FBUyxjQUFULEdBQTBCLFVBQVMsVUFBVCxFQUFxQjtBQUM3QyxTQUFPLFFBQVEsY0FBUixDQUF1QixRQUF2QixFQUFpQyxVQUFqQyxDQUFQLENBRDZDO0NBQXJCOztBQUkxQixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoidGV4dEFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJ2pxdWVyeS10ZXh0cmFuZ2UnKTtcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gVGV4dEFyZWEuY2xvbmUodGhpcy4kZWxlbWVudCk7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5rZXlkb3duKGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICAgIGhhbmRsZXIodmFsdWUpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgb25TY3JvbGwoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKCk7IH1cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdCgpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkge1xuICAgIHZhciB0ZXh0cmFuZ2UgPSB0aGlzLiRlbGVtZW50LnRleHRyYW5nZSgnZ2V0JyksXG4gICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gdGV4dHJhbmdlWydzdGFydCddOyAgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0aW9uU3RhcnQ7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7XG4gICAgdmFyIHRleHRyYW5nZSA9IHRoaXMuJGVsZW1lbnQudGV4dHJhbmdlKCdnZXQnKSxcbiAgICAgICAgc2VsZWN0aW9uRW5kID0gdGV4dHJhbmdlWydlbmQnXTsgIC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbkVuZDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG5cbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcChzY3JvbGxUb3ApOyB9XG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7IH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxufVxuXG5UZXh0QXJlYS5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFRleHRBcmVhLCBzZWxlY3Rvck9yJEVsZW1lbnQpO1xufTtcblxuVGV4dEFyZWEuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwpO1xufTtcblxuVGV4dEFyZWEuZnJvbURPTUVsZW1lbnQgPSBmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRBcmVhLCBkb21FbGVtZW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEFyZWE7XG4iXX0=
