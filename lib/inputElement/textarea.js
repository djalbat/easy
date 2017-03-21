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
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          onScroll = properties.onScroll,
          changeHandler = onChange,
          scrollHandler = onScroll; ///

      return InputElement.fromProperties(Textarea, properties, changeHandler, scrollHandler);
    }
  }]);

  return Textarea;
}(InputElement);

Object.assign(Textarea, {
  tagName: 'textarea',
  ignoredProperties: ['onChange', 'onScroll']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlRleHRhcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwic2Nyb2xsSGFuZGxlciIsIm9uQ2hhbmdlIiwib25TY3JvbGwiLCJjbG9uZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwidW5kZWZpbmVkIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJiaW5kIiwib24iLCJvZmYiLCJkZWZhdWx0SW50ZXJtZWRpYXRlU2Nyb2xsSGFuZGxlciIsInJlc2l6ZUhhbmRsZXIiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJnZXRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0U2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztJQUVNQyxROzs7QUFDSixvQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLGFBQXJDLEVBQW9EO0FBQUE7O0FBQUEsb0hBQzVDRixRQUQ0Qzs7QUFHbEQsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLRSxRQUFMLENBQWNGLGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtFLFFBQUwsQ0FBY0YsYUFBZDtBQUNEO0FBVGlEO0FBVW5EOzs7OzBCQUVLRCxhLEVB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LEVBQXdCO0FBQ3RCOEIsV0FBUyxVQURhO0FBRXRCQyxxQkFBbUIsQ0FDakIsVUFEaUIsRUFFakIsVUFGaUI7QUFGRyxDQUF4Qjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQmpDLFFBQWpCOztBQUVBLFNBQVNnQixnQ0FBVCxDQUEwQ0gsT0FBMUMsRUFBbURxQixLQUFuRCxFQUEwRDtBQUN4RCxNQUFNMUIsUUFBUSxLQUFLMkIsUUFBTCxFQUFkO0FBQUEsTUFDTUMsaUJBQWlCdkIsUUFBUUwsS0FBUixDQUR2Qjs7QUFHQSxTQUFPNEIsY0FBUDtBQUNEOztBQUVELFNBQVNoQixnQ0FBVCxDQUEwQ1AsT0FBMUMsRUFBbURxQixLQUFuRCxFQUEwRDtBQUN4RCxNQUFNdkIsWUFBWSxLQUFLMEIsWUFBTCxFQUFsQjtBQUFBLE1BQ016QixhQUFhLEtBQUswQixhQUFMLEVBRG5CO0FBQUEsTUFFTUYsaUJBQWlCdkIsUUFBUUYsU0FBUixFQUFtQkMsVUFBbkIsQ0FGdkI7O0FBSUEsU0FBT3dCLGNBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSGFuZGxlcikge1xuICAgICAgdGhpcy5vblNjcm9sbChzY3JvbGxIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBUZXh0YXJlYS5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG4gIFxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuICBcbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cbiAgXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuICBcbiAgc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMub24oJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvblNjcm9sbChoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlU2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMub24oJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmU2Nyb2xsKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignc2Nyb2xsJywgaGFuZGxlcik7XG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuICBcbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFRleHRhcmVhLCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0YXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dGFyZWEsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsICkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9uU2Nyb2xsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IG9uU2Nyb2xsOyAvLy9cbiAgICBcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHRhcmVhLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnb25TY3JvbGwnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRhcmVhO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIl19