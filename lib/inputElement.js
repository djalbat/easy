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

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var inputElement = targetElement,
      ///
  value = inputElement.getValue();

  changeHandler(value, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsInZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJyZWFkT25seSIsInNlbGVjdCIsIkNsYXNzIiwiZWxlbWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNsb25lIiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJzdHJpbmciLCJmcm9tU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZ2V0VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSw0SEFDN0JELFFBRDZCOztBQUduQyxRQUFJQyxrQkFBa0JDLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0YsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OytCQUVVLENBQUU7OztnQ0FFRCxDQUFFOzs7NkJBRUxBLGEsRUFBNkU7QUFBQSxVQUE5REcseUJBQThELHVFQUFsQ0MsZ0NBQWtDOztBQUNwRixXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQkwsYUFBbEIsRUFBaUNHLHlCQUFqQztBQUNEOzs7OEJBRVNILGEsRUFBZTtBQUN2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IHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVN0cmluZyhzdHJpbmcsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQsIHtcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHZhbHVlID0gaW5wdXRFbGVtZW50LmdldFZhbHVlKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyKHZhbHVlLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iXX0=