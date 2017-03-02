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
      return this.$element.val();
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.$element[0].selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.$element[0].selectionEnd;
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
    key: 'setValue',
    value: function setValue(value) {
      this.$element.val(value);
    }
  }, {
    key: 'setSelectionStart',
    value: function setSelectionStart(selectionStart) {
      this.$element[0].selectionStart(selectionStart);
    } ///

  }, {
    key: 'setSelectionEnd',
    value: function setSelectionEnd(selectionEnd) {
      this.$element[0].selectionEnd(selectionEnd);
    } ///

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
  }, {
    key: 'onChange',
    value: function onChange(changeHandler, namespace) {
      this.on('change', function () {
        var value = this.getValue();

        changeHandler(value);
      }.bind(this), namespace);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler, namespace) {
      this.on('scroll', function () {
        var scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft();

        handler(scrollTop, scrollLeft);
      }.bind(this), namespace);
    }
  }, {
    key: 'offChange',
    value: function offChange(namespace) {
      this.off('change', namespace);
    }
  }, {
    key: 'offScroll',
    value: function offScroll(namespace) {
      this.off('scroll', namespace);
    }
  }, {
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(TextArea, selectorOrElement, changeHandler);
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
      var html = '<textarea></textarea>',
          changeHandler = properties.changeHandler;


      return TextArea.fromHTML(html, changeHandler);
    }
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvdGV4dEFyZWEuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlRleHRBcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsIiRlbGVtZW50IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwidmFsdWUiLCJzZWxlY3QiLCJuYW1lc3BhY2UiLCJvbiIsImdldFZhbHVlIiwiYmluZCIsImhhbmRsZXIiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0Iiwib2ZmIiwicmVzaXplSGFuZGxlciIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsb0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJGLGFBQXJCLENBQVA7QUFBNkM7OzsrQkFFekQ7QUFBRSxhQUFPLEtBQUtHLFFBQUwsQ0FBY0MsR0FBZCxFQUFQO0FBQTZCOzs7d0NBQ3RCO0FBQUUsYUFBTyxLQUFLRCxRQUFMLENBQWMsQ0FBZCxFQUFpQkUsY0FBeEI7QUFBeUM7OztzQ0FDN0M7QUFBRSxhQUFPLEtBQUtGLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxZQUF4QjtBQUF1Qzs7O21DQUM1QztBQUFFLGFBQU8sS0FBS0gsUUFBTCxDQUFjSSxTQUFkLEVBQVA7QUFBbUM7OztvQ0FDcEM7QUFBRSxhQUFPLEtBQUtKLFFBQUwsQ0FBY0ssVUFBZCxFQUFQO0FBQW9DOzs7NkJBRTdDQyxLLEVBQU87QUFBRSxXQUFLTixRQUFMLENBQWNDLEdBQWQsQ0FBa0JLLEtBQWxCO0FBQTJCOzs7c0NBQzNCSixjLEVBQWdCO0FBQUUsV0FBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJFLGNBQWpCLENBQWdDQSxjQUFoQztBQUFrRCxLLENBQUM7Ozs7b0NBQ3ZFQyxZLEVBQWM7QUFBRSxXQUFLSCxRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBakIsQ0FBOEJBLFlBQTlCO0FBQThDLEssQ0FBQzs7OztpQ0FDbEVDLFMsRUFBVztBQUFFLFdBQUtKLFFBQUwsQ0FBY0ksU0FBZCxDQUF3QkEsU0FBeEI7QUFBcUM7OztrQ0FDakRDLFUsRUFBWTtBQUFFLFdBQUtMLFFBQUwsQ0FBY0ssVUFBZCxDQUF5QkEsVUFBekI7QUFBdUM7Ozs2QkFFMUQ7QUFBRSxXQUFLTCxRQUFMLENBQWNPLE1BQWQ7QUFBeUI7Ozs2QkFFM0JWLGEsRUFBZVcsUyxFQUFXO0FBQ2pDLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQVc7QUFDM0IsWUFBSUgsUUFBUSxLQUFLSSxRQUFMLEVBQVo7O0FBRUFiLHNCQUFjUyxLQUFkO0FBQ0QsT0FKaUIsQ0FJaEJLLElBSmdCLENBSVgsSUFKVyxDQUFsQixFQUljSCxTQUpkO0FBS0Q7Ozs2QkFFUUksTyxFQUFTSixTLEVBQVc7QUFDM0IsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBVztBQUMzQixZQUFJTCxZQUFZLEtBQUtTLFlBQUwsRUFBaEI7QUFBQSxZQUNJUixhQUFhLEtBQUtTLGFBQUwsRUFEakI7O0FBR0FGLGdCQUFRUixTQUFSLEVBQW1CQyxVQUFuQjtBQUNELE9BTGlCLENBS2hCTSxJQUxnQixDQUtYLElBTFcsQ0FBbEIsRUFLY0gsU0FMZDtBQU1EOzs7OEJBRVNBLFMsRUFBVztBQUNuQixXQUFLTyxHQUFMLENBQVMsUUFBVCxFQUFtQlAsU0FBbkI7QUFDRDs7OzhCQUVTQSxTLEVBQVc7QUFDbkIsV0FBS08sR0FBTCxDQUFTLFFBQVQsRUFBbUJQLFNBQW5CO0FBQ0Q7Ozs2QkFFUVEsYSxFQUFlLENBQUU7Ozs4QkFDaEJBLGEsRUFBZSxDQUFFOzs7MEJBRWRDLGlCLEVBQW1CcEIsYSxFQUFlO0FBQzdDLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLFFBQW5CLEVBQTZCc0IsaUJBQTdCLEVBQWdEcEIsYUFBaEQsQ0FBUDtBQUNEOzs7NkJBRWVxQixJLEVBQU1yQixhLEVBQWU7QUFDbkMsYUFBT0osYUFBYTBCLFFBQWIsQ0FBc0J4QixRQUF0QixFQUFnQ3VCLElBQWhDLEVBQXNDckIsYUFBdEMsQ0FBUDtBQUNEOzs7bUNBRXFCdUIsVSxFQUFZdkIsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWE0QixjQUFiLENBQTRCMUIsUUFBNUIsRUFBc0N5QixVQUF0QyxFQUFrRHZCLGFBQWxELENBQVA7QUFDRDs7O21DQUVxQnlCLFUsRUFBWTtBQUM1QixpQkFBTyx1QkFBUDtBQUFBLFVBQ0V6QixhQURGLEdBQ29CeUIsVUFEcEIsQ0FDRXpCLGFBREY7OztBQUdKLGFBQU9GLFNBQVN3QixRQUFULENBQWtCRCxJQUFsQixFQUF3QnJCLGFBQXhCLENBQVA7QUFDRDs7OztFQXRFb0JKLFk7O0FBeUV2QjhCLE9BQU9DLE9BQVAsR0FBaUI3QixRQUFqQiIsImZpbGUiOiJ0ZXh0QXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dEFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQudmFsKCk7IH1cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvblN0YXJ0OyB9XG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kOyB9XG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKCk7IH1cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdCgpOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpOyB9XG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpOyB9IC8vL1xuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCk7IH0gLy8vXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTsgfVxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KHNjcm9sbExlZnQpOyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLiRlbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIodmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKG5hbWVzcGFjZSkge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBuYW1lc3BhY2UpO1xuICB9XG4gIFxuICBvZmZTY3JvbGwobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIG5hbWVzcGFjZSlcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dEFyZWEsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0QXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dEFyZWEsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgaHRtbCA9ICc8dGV4dGFyZWE+PC90ZXh0YXJlYT4nLFxuICAgICAgICB7IGNoYW5nZUhhbmRsZXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gVGV4dEFyZWEuZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0QXJlYTtcbiJdfQ==