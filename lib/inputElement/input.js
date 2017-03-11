'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input(selector, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
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
    key: 'onChange',
    value: function onChange(handler, preventDefault) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler.bind(this);

      this.on('change', handler, preventDefault, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Input, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<input />';
      var onChange = properties.onChange;
      var changeHandler = onChange; ///

      return Input.fromHTML(html, changeHandler);
    }
  }]);

  return Input;
}(InputElement);

module.exports = Input;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue();

  handler(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIklucHV0Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwiaGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiYmluZCIsIm9uIiwib2ZmIiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImdldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLEs7OztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLDhHQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLE1BQU1JLEtBQU4sQ0FBWSxJQUFaLEVBQWtCRixhQUFsQixDQUFQO0FBQTBDOzs7K0JBRXREO0FBQUUsYUFBTyxLQUFLRyxVQUFMLENBQWdCQyxLQUF2QjtBQUErQjs7O3dDQUV4QjtBQUFFLGFBQU8sS0FBS0QsVUFBTCxDQUFnQkUsY0FBdkI7QUFBd0M7OztzQ0FFNUM7QUFBRSxhQUFPLEtBQUtGLFVBQUwsQ0FBZ0JHLFlBQXZCO0FBQXNDOzs7NkJBRWpERixLLEVBQU87QUFBRSxXQUFLRCxVQUFMLENBQWdCQyxLQUFoQixHQUF3QkEsS0FBeEI7QUFBZ0M7OztzQ0FFaENDLGMsRUFBZ0I7QUFBRSxXQUFLRixVQUFMLENBQWdCRSxjQUFoQixHQUFpQ0EsY0FBakM7QUFBa0Q7OztvQ0FFdEVDLFksRUFBYztBQUFFLFdBQUtILFVBQUwsQ0FBZ0JHLFlBQWhCLEdBQStCQSxZQUEvQjtBQUE4Qzs7OzZCQUVyRUMsTyxFQUFTQyxjLEVBQXlGO0FBQUEsVUFBekVDLHlCQUF5RSx1RUFBN0NDLGlDQUFpQ0MsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBNkM7O0FBQ3pHLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCTCxPQUFsQixFQUEyQkMsY0FBM0IsRUFBMkNDLHlCQUEzQztBQUNEOzs7OEJBRVNGLE8sRUFBUztBQUNqQixXQUFLTSxHQUFMLENBQVMsUUFBVCxFQUFtQk4sT0FBbkI7QUFDRDs7OzBCQUVZTyxPLEVBQVNkLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixLQUFuQixFQUEwQmdCLE9BQTFCLEVBQW1DZCxhQUFuQyxDQUFQO0FBQ0Q7Ozs2QkFFZWUsSSxFQUFNZixhLEVBQWU7QUFDbkMsYUFBT0osYUFBYW9CLFFBQWIsQ0FBc0JsQixLQUF0QixFQUE2QmlCLElBQTdCLEVBQW1DZixhQUFuQyxDQUFQO0FBQ0Q7OzttQ0FFcUJHLFUsRUFBWUgsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFxQixjQUFiLENBQTRCbkIsS0FBNUIsRUFBbUNLLFVBQW5DLEVBQStDSCxhQUEvQyxDQUFQO0FBQ0Q7OzttQ0FFcUJrQixVLEVBQVk7QUFDMUIsaUJBQU8sV0FBUDtBQUNBLFVBQUVqQixRQUFGLEdBQWVpQixVQUFmLENBQUVqQixRQUFGO0FBQ0EsMEJBQWdCQSxRQUFoQixDQUgwQixDQUdDOztBQUVqQyxhQUFPSCxNQUFNa0IsUUFBTixDQUFlRCxJQUFmLEVBQXFCZixhQUFyQixDQUFQO0FBQ0Q7Ozs7RUFqRGlCSixZOztBQW9EcEJ1QixPQUFPQyxPQUFQLEdBQWlCdEIsS0FBakI7O0FBRUEsU0FBU1ksZ0NBQVQsQ0FBMENILE9BQTFDLEVBQW1EYyxLQUFuRCxFQUEwRDtBQUN4RCxNQUFNakIsUUFBUSxLQUFLa0IsUUFBTCxFQUFkOztBQUVBZixVQUFRSCxLQUFSO0FBQ0QiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG4gIFxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlciwgcHJldmVudERlZmF1bHQsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlciwgcHJldmVudERlZmF1bHQsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGh0bWwgPSAnPGlucHV0IC8+JyxcbiAgICAgICAgICB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgIC8vL1xuXG4gICAgcmV0dXJuIElucHV0LmZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gIGhhbmRsZXIodmFsdWUpO1xufVxuIl19