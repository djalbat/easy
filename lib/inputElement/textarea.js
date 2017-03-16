'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Textarea = function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea(selector, changeHandler, scrollHandler) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }

    if (scrollHandler) {
      _this.onScroll(scrollHandler);
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Textarea.clone(this, changeHandler);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.scrollTop;
    }
  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.scrollLeft;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: 'setSelectionStart',
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: 'setSelectionEnd',
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: 'setScrollTop',
    value: function setScrollTop(scrollTop) {
      this.domElement.scrollTop = scrollTop;
    }
  }, {
    key: 'setScrollLeft',
    value: function setScrollLeft(scrollLeft) {
      this.domElement.scrollLeft = scrollLeft;
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateScrollHandler.bind(this);
      }

      this.on('scroll', handler);
    }
  }, {
    key: 'offScroll',
    value: function offScroll(handler) {
      this.off('scroll', handler);
    }
  }, {
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler, scrollHandler) {
      return InputElement.clone(Textarea, element, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler, scrollHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler, scrollHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Textarea;
      }

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Textarea;
}(InputElement);

Object.assign(Textarea, {
  tagName: 'textarea',
  customHandlerNames: ['onChange', 'onScroll']
});

module.exports = Textarea;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

function defaultIntermediateScrollHandler(handler, event) {
  var scrollTop = this.getScrollTop(),
      scrollLeft = this.getScrollLeft(),
      preventDefault = handler(scrollTop, scrollLeft);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlRleHRhcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwic2Nyb2xsSGFuZGxlciIsIm9uQ2hhbmdlIiwib25TY3JvbGwiLCJjbG9uZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwidW5kZWZpbmVkIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJiaW5kIiwib24iLCJvZmYiLCJkZWZhdWx0SW50ZXJtZWRpYXRlU2Nyb2xsSGFuZGxlciIsInJlc2l6ZUhhbmRsZXIiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJjdXN0b21IYW5kbGVyTmFtZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJnZXRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0U2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztJQUVNQyxROzs7QUFDSixvQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLGFBQXJDLEVBQW9EO0FBQUE7O0FBQUEsb0hBQzVDRixRQUQ0Qzs7QUFHbEQsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLRSxRQUFMLENBQWNGLGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtFLFFBQUwsQ0FBY0YsYUFBZDtB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RmtCO0FBRkUsQ0FBeEI7O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJwQyxRQUFqQjs7QUFFQSxTQUFTZ0IsZ0NBQVQsQ0FBMENILE9BQTFDLEVBQW1Ed0IsS0FBbkQsRUFBMEQ7QUFDeEQsTUFBTTdCLFFBQVEsS0FBSzhCLFFBQUwsRUFBZDtBQUFBLE1BQ01DLGlCQUFpQjFCLFFBQVFMLEtBQVIsQ0FEdkI7O0FBR0EsU0FBTytCLGNBQVA7QUFDRDs7QUFFRCxTQUFTbkIsZ0NBQVQsQ0FBMENQLE9BQTFDLEVBQW1Ed0IsS0FBbkQsRUFBMEQ7QUFDeEQsTUFBTTFCLFlBQVksS0FBSzZCLFlBQUwsRUFBbEI7QUFBQSxNQUNNNUIsYUFBYSxLQUFLNkIsYUFBTCxFQURuQjtBQUFBLE1BRU1GLGlCQUFpQjFCLFFBQVFGLFNBQVIsRUFBbUJDLFVBQW5CLENBRnZCOztBQUlBLFNBQU8yQixjQUFQO0FBQ0QiLCJmaWxlIjoidGV4dGFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbEhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25TY3JvbGwoc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dGFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cbiAgXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG4gIFxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cbiAgXG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25TY3JvbGwoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0YXJlYSwgZWxlbWVudCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dGFyZWEsIGh0bWwsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRhcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFRleHRhcmVhO1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgY3VzdG9tSGFuZGxlck5hbWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnb25TY3JvbGwnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRhcmVhO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIl19