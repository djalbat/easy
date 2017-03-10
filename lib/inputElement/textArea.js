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
      var preventDefault = undefined; ///

      this.on('change', handler, preventDefault, intermediateChangeHandler.bind(this));
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      var preventDefault = undefined; ///

      this.on('scroll', handler, preventDefault, intermediateScrollHandler.bind(this));
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

function intermediateChangeHandler(handler, event) {
  var value = this.getValue();

  handler(value);
}

function intermediateScrollHandler(handler, event) {
  var scrollTop = this.getScrollTop(),
      scrollLeft = this.getScrollLeft();

  handler(scrollTop, scrollLeft);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvdGV4dEFyZWEuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlRleHRBcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsIm9uIiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImJpbmQiLCJvZmYiLCJpbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyIiwicmVzaXplSGFuZGxlciIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJnZXRWYWx1ZSIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxpQkFBUixDQUFyQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsb0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJGLGFBQXJCLENBQVA7QUFBNkM7OzsrQkFFekQ7QUFBRSxhQUFPLEtBQUtHLFVBQUwsQ0FBZ0JDLEtBQXZCO0FBQStCOzs7d0NBRXhCO0FBQUUsYUFBTyxLQUFLRCxVQUFMLENBQWdCRSxjQUF2QjtBQUF3Qzs7O3NDQUU1QztBQUFFLGFBQU8sS0FBS0YsVUFBTCxDQUFnQkcsWUFBdkI7QUFBc0M7OzttQ0FFM0M7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JJLFNBQXZCO0FBQW1DOzs7b0NBRXBDO0FBQUUsYUFBTyxLQUFLSixVQUFMLENBQWdCSyxVQUF2QjtBQUFvQzs7OzZCQUU3Q0osSyxFQUFPO0FBQUUsV0FBS0QsVUFBTCxDQUFnQkMsS0FBaEIsR0FBd0JBLEtBQXhCO0FBQWdDOzs7c0NBRWhDQyxjLEVBQWdCO0FBQUUsV0FBS0YsVUFBTCxDQUFnQkUsY0FBaEIsR0FBaUNBLGNBQWpDO0FBQWtEOzs7b0NBRXRFQyxZLEVBQWM7QUFBRSxXQUFLSCxVQUFMLENBQWdCRyxZQUFoQixHQUErQkEsWUFBL0I7QUFBOEM7OztpQ0FFakVDLFMsRUFBVztBQUFFLFdBQUtKLFVBQUwsQ0FBZ0JJLFNBQWhCLEdBQTRCQSxTQUE1QjtBQUF3Qzs7O2tDQUVwREMsVSxFQUFZO0FBQUUsV0FBS0wsVUFBTCxDQUFnQkssVUFBaEIsR0FBNkJBLFVBQTdCO0FBQTBDOzs7NkJBRTdEQyxPLEVBQVM7QUFDaEIsVUFBTUMsaUJBQWlCQyxTQUF2QixDQURnQixDQUNrQjs7QUFFbEMsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0JILE9BQWxCLEVBQTJCQyxjQUEzQixFQUEyQ0csMEJBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUEzQztBQUNEOzs7OEJBRVNMLE8sRUFBUztBQUNqQixXQUFLTSxHQUFMLENBQVMsUUFBVCxFQUFtQk4sT0FBbkI7QUFDRDs7OzZCQUVRQSxPLEVBQVM7QUFDaEIsVUFBTUMsaUJBQWlCQyxTQUF2QixDQURnQixDQUNrQjs7QUFFbEMsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0JILE9BQWxCLEVBQTJCQyxjQUEzQixFQUEyQ00sMEJBQTBCRixJQUExQixDQUErQixJQUEvQixDQUEzQztBQUNEOzs7OEJBRVNMLE8sRUFBUztBQUNqQixXQUFLTSxHQUFMLENBQVMsUUFBVCxFQUFtQk4sT0FBbkI7QUFDRDs7OzZCQUVRUSxhLEVBQWUsQ0FBRTs7OzhCQUVoQkEsYSxFQUFlLENBQUU7OzswQkFFZEMsTyxFQUFTbEIsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLFFBQW5CLEVBQTZCb0IsT0FBN0IsRUFBc0NsQixhQUF0QyxDQUFQO0FBQ0Q7Ozs2QkFFZW1CLEksRUFBTW5CLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhd0IsUUFBYixDQUFzQnRCLFFBQXRCLEVBQWdDcUIsSUFBaEMsRUFBc0NuQixhQUF0QyxDQUFQO0FBQ0Q7OzttQ0FFcUJHLFUsRUFBWUgsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWF5QixjQUFiLENBQTRCdkIsUUFBNUIsRUFBc0NLLFVBQXRDLEVBQWtESCxhQUFsRCxDQUFQO0FBQ0Q7OzttQ0FFcUJzQixVLEVBQVk7QUFDMUIsaUJBQU8sdUJBQVA7QUFDQSxVQUFFckIsUUFBRixHQUFlcUIsVUFBZixDQUFFckIsUUFBRjtBQUNBLDBCQUFnQkEsUUFBaEIsQ0FIMEIsQ0FHQTs7QUFFaEMsYUFBT0gsU0FBU3NCLFFBQVQsQ0FBa0JELElBQWxCLEVBQXdCbkIsYUFBeEIsQ0FBUDtBQUNEOzs7O0VBekVvQkosWTs7QUE0RXZCMkIsT0FBT0MsT0FBUCxHQUFpQjFCLFFBQWpCOztBQUVBLFNBQVNlLHlCQUFULENBQW1DSixPQUFuQyxFQUE0Q2dCLEtBQTVDLEVBQW1EO0FBQ2pELE1BQU1yQixRQUFRLEtBQUtzQixRQUFMLEVBQWQ7O0FBRUFqQixVQUFRTCxLQUFSO0FBQ0Q7O0FBRUQsU0FBU1kseUJBQVQsQ0FBbUNQLE9BQW5DLEVBQTRDZ0IsS0FBNUMsRUFBbUQ7QUFDakQsTUFBTWxCLFlBQVksS0FBS29CLFlBQUwsRUFBbEI7QUFBQSxNQUNNbkIsYUFBYSxLQUFLb0IsYUFBTCxFQURuQjs7QUFHQW5CLFVBQVFGLFNBQVIsRUFBbUJDLFVBQW5CO0FBQ0QiLCJmaWxlIjoidGV4dEFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dEFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cbiAgXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG4gIFxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cbiAgXG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgY29uc3QgcHJldmVudERlZmF1bHQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlciwgcHJldmVudERlZmF1bHQsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIpIHtcbiAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLm9uKCdzY3JvbGwnLCBoYW5kbGVyLCBwcmV2ZW50RGVmYXVsdCwgaW50ZXJtZWRpYXRlU2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9mZlNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0QXJlYSwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRBcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8dGV4dGFyZWE+PC90ZXh0YXJlYT4nLFxuICAgICAgICAgIHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBUZXh0QXJlYS5mcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRBcmVhO1xuXG5mdW5jdGlvbiBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gIGhhbmRsZXIodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG59XG4iXX0=