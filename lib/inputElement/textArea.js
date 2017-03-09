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
      this.on('change', function () {
        var value = this.getValue();

        handler(value);
      }.bind(this));
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      this.on('scroll', function () {
        var scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft();

        handler(scrollTop, scrollLeft);
      }.bind(this));
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvdGV4dEFyZWEuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlRleHRBcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImhhbmRsZXIiLCJvbiIsImdldFZhbHVlIiwiYmluZCIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJvZmYiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxpQkFBUixDQUFyQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsb0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJGLGFBQXJCLENBQVA7QUFBNkM7OzsrQkFFekQ7QUFBRSxhQUFPLEtBQUtHLFVBQUwsQ0FBZ0JDLEtBQXZCO0FBQStCOzs7d0NBRXhCO0FBQUUsYUFBTyxLQUFLRCxVQUFMLENBQWdCRSxjQUF2QjtBQUF3Qzs7O3NDQUU1QztBQUFFLGFBQU8sS0FBS0YsVUFBTCxDQUFnQkcsWUFBdkI7QUFBc0M7OzttQ0FFM0M7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JJLFNBQXZCO0FBQW1DOzs7b0NBRXBDO0FBQUUsYUFBTyxLQUFLSixVQUFMLENBQWdCSyxVQUF2QjtBQUFvQzs7OzZCQUU3Q0osSyxFQUFPO0FBQUUsV0FBS0QsVUFBTCxDQUFnQkMsS0FBaEIsR0FBd0JBLEtBQXhCO0FBQWdDOzs7c0NBRWhDQyxjLEVBQWdCO0FBQUUsV0FBS0YsVUFBTCxDQUFnQkUsY0FBaEIsR0FBaUNBLGNBQWpDO0FBQWtEOzs7b0NBRXRFQyxZLEVBQWM7QUFBRSxXQUFLSCxVQUFMLENBQWdCRyxZQUFoQixHQUErQkEsWUFBL0I7QUFBOEM7OztpQ0FFakVDLFMsRUFBVztBQUFFLFdBQUtKLFVBQUwsQ0FBZ0JJLFNBQWhCLEdBQTRCQSxTQUE1QjtBQUF3Qzs7O2tDQUVwREMsVSxFQUFZO0FBQUUsV0FBS0wsVUFBTCxDQUFnQkssVUFBaEIsR0FBNkJBLFVBQTdCO0FBQTBDOzs7NkJBRTdEQyxPLEVBQVM7QUFDaEIsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBVztBQUMzQixZQUFNTixRQUFRLEtBQUtPLFFBQUwsRUFBZDs7QUFFQUYsZ0JBQVFMLEtBQVI7QUFDRCxPQUppQixDQUloQlEsSUFKZ0IsQ0FJWCxJQUpXLENBQWxCO0FBS0Q7Ozs2QkFFUUgsTyxFQUFTO0FBQ2hCLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQVc7QUFDM0IsWUFBTUgsWUFBWSxLQUFLTSxZQUFMLEVBQWxCO0FBQUEsWUFDTUwsYUFBYSxLQUFLTSxhQUFMLEVBRG5COztBQUdBTCxnQkFBUUYsU0FBUixFQUFtQkMsVUFBbkI7QUFDRCxPQUxpQixDQUtoQkksSUFMZ0IsQ0FLWCxJQUxXLENBQWxCO0FBTUQ7Ozs4QkFFU0gsTyxFQUFTO0FBQ2pCLFdBQUtNLEdBQUwsQ0FBUyxRQUFULEVBQW1CTixPQUFuQjtBQUNEOzs7OEJBRVNBLE8sRUFBUztBQUNqQixXQUFLTSxHQUFMLENBQVMsUUFBVCxFQUFtQk4sT0FBbkI7QUFDRDs7OzZCQUVRTyxhLEVBQWUsQ0FBRTs7OzhCQUVoQkEsYSxFQUFlLENBQUU7OzswQkFFZEMsTyxFQUFTakIsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLFFBQW5CLEVBQTZCbUIsT0FBN0IsRUFBc0NqQixhQUF0QyxDQUFQO0FBQ0Q7Ozs2QkFFZWtCLEksRUFBTWxCLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhdUIsUUFBYixDQUFzQnJCLFFBQXRCLEVBQWdDb0IsSUFBaEMsRUFBc0NsQixhQUF0QyxDQUFQO0FBQ0Q7OzttQ0FFcUJHLFUsRUFBWUgsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWF3QixjQUFiLENBQTRCdEIsUUFBNUIsRUFBc0NLLFVBQXRDLEVBQWtESCxhQUFsRCxDQUFQO0FBQ0Q7OzttQ0FFcUJxQixVLEVBQVk7QUFDMUIsaUJBQU8sdUJBQVA7QUFDQSxVQUFFcEIsUUFBRixHQUFlb0IsVUFBZixDQUFFcEIsUUFBRjtBQUNBLDBCQUFnQkEsUUFBaEIsQ0FIMEIsQ0FHQTs7QUFFaEMsYUFBT0gsU0FBU3FCLFFBQVQsQ0FBa0JELElBQWxCLEVBQXdCbEIsYUFBeEIsQ0FBUDtBQUNEOzs7O0VBOUVvQkosWTs7QUFpRnZCMEIsT0FBT0MsT0FBUCxHQUFpQnpCLFFBQWpCIiwiZmlsZSI6InRleHRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFRleHRBcmVhLmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cbiAgXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG4gIFxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuICBcbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuICBcbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG4gIFxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIGhhbmRsZXIodmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBvblNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZTY3JvbGwoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdzY3JvbGwnLCBoYW5kbGVyKVxuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0QXJlYSwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRBcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8dGV4dGFyZWE+PC90ZXh0YXJlYT4nLFxuICAgICAgICAgIHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBUZXh0QXJlYS5mcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRBcmVhO1xuIl19