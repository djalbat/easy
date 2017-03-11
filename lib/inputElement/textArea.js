'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

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
      var preventDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler.bind(this);

      this.on('change', handler, preventDefault, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      var preventDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateScrollHandler.bind(this);

      this.on('scroll', handler, preventDefault, intermediateChangeHandler);
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
    value: function clone(element, changeHandler) {
      return InputElement.clone(TextArea, element, changeHandler);
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
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<textarea></textarea>';
      var onChange = properties.onChange;
      var changeHandler = onChange; ///

      return TextArea.fromHTML(html, changeHandler);
    }
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue();

  handler(value);
}

function defaultIntermediateScrollHandler(handler, event) {
  var scrollTop = this.getScrollTop(),
      scrollLeft = this.getScrollLeft();

  handler(scrollTop, scrollLeft);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvdGV4dEFyZWEuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlRleHRBcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImJpbmQiLCJvbiIsIm9mZiIsImRlZmF1bHRJbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyIiwicmVzaXplSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJnZXRWYWx1ZSIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxpQkFBUixDQUFyQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsb0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJGLGFBQXJCLENBQVA7QUFBNkM7OzsrQkFFekQ7QUFBRSxhQUFPLEtBQUtHLFVBQUwsQ0FBZ0JDLEtBQXZCO0FBQStCOzs7d0NBRXhCO0FBQUUsYUFBTyxLQUFLRCxVQUFMLENBQWdCRSxjQUF2QjtBQUF3Qzs7O3NDQUU1QztB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dXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBUZXh0QXJlYS5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG4gIFxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuICBcbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cbiAgXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuICBcbiAgc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIsIHByZXZlbnREZWZhdWx0ID0gZmFsc2UsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlciwgcHJldmVudERlZmF1bHQsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvblNjcm9sbChoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKSkge1xuICAgIHRoaXMub24oJ3Njcm9sbCcsIGhhbmRsZXIsIHByZXZlbnREZWZhdWx0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0QXJlYSwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRBcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8dGV4dGFyZWE+PC90ZXh0YXJlYT4nLFxuICAgICAgICAgIHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBUZXh0QXJlYS5mcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRBcmVhO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICBoYW5kbGVyKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVNjcm9sbEhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gIGhhbmRsZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbn1cbiJdfQ==