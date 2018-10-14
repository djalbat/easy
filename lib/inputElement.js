'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector, changeHandler) {
    _classCallCheck(this, InputElement);

    var _this = _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(InputElement, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }, {
    key: 'onChange',
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;

      this.on('change', changeHandler, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler) {
      this.off('change', changeHandler);
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
    key: 'isReadOnly',
    value: function isReadOnly() {
      return this.domElement.readOnly;
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
    key: 'setReadOnly',
    value: function setReadOnly(readOnly) {
      this.domElement.readOnly = readOnly;
    }
  }, {
    key: 'select',
    value: function select() {
      this.domElement.select();
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.clone.apply(Element, [Class, element].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement.apply(Element, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      return Element.fromProperties.apply(Element, [Class, properties, changeHandler].concat(remainingArguments));
    }
  }, {
    key: 'fromString',
    value: function fromString(string, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
      }

      return Element.fromString.apply(Element, [string, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(Element);

Object.assign(InputElement, {
  ignoredProperties: ['onChange']
});

module.exports = InputElement;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var inputElement = element,
      ///
  value = inputElement.getValue();

  changeHandler.apply(inputElement, value, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsInZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJyZWFkT25seSIsInNlbGVjdCIsIkNsYXNzIiwiZWxlbWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNsb25lIiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJzdHJpbmciLCJmcm9tU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJpbnB1dEVsZW1lbnQiLCJnZXRWYWx1ZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7SUFFTUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsNEhBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsa0JBQWtCQyxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNGLGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzsrQkFFVSxDQUFFOzs7Z0NBRUQsQ0FBRTs7OzZCQUVMQSxhLEVBQTZFO0FBQUEsVUFBOURHLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDcEYsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0JMLGFBQWxCLEVBQWlDRyx5QkFBakM7QUFDRDs7OzhCQUVTSCxhLEVBQWU7QUFDdkIsV0FBS00s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IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgaXNSZWFkT25seSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZWFkT25seTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRSZWFkT25seShyZWFkT25seSkgeyB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHkgPSByZWFkT25seTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tU3RyaW5nKHN0cmluZywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudCwge1xuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbGVtZW50O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgdmFsdWUgPSBpbnB1dEVsZW1lbnQuZ2V0VmFsdWUoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIuYXBwbHkoaW5wdXRFbGVtZW50LCB2YWx1ZSwgZXZlbnQpO1xufVxuIl19