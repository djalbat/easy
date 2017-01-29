'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

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
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiVGV4dEFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiJGVsZW1lbnQiLCJ2YWwiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ2YWx1ZSIsInNlbGVjdCIsIm5hbWVzcGFjZSIsIm9uIiwiZ2V0VmFsdWUiLCJiaW5kIiwiaGFuZGxlciIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJvZmYiLCJyZXNpemVIYW5kbGVyIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLG9IQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLFNBQVNJLEtBQVQsQ0FBZSxJQUFmLEVBQXFCRixhQUFyQixDQUFQO0FBQTZDOzs7K0JBRXpEO0FBQUUsYUFBTyxLQUFLRyxRQUFMLENBQWNDLEdBQWQsRUFBUDtBQUE2Qjs7O3dDQUN0QjtBQUFFLGFBQU8sS0FBS0QsUUFBTCxDQUFjLENBQWQsRUFBaUJFLGNBQXhCO0FBQXlDOzs7c0NBQzdDO0FBQUUsYUFBTyxLQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBeEI7QUFBdUM7OzttQ0FDNUM7QUFBRSxhQUFPLEtBQUtILFFBQUwsQ0FBY0ksU0FBZCxFQUFQO0FBQW1DOzs7b0NBQ3BDO0FBQUUsYUFBTyxLQUFLSixRQUFMLENBQWNLLFVBQWQsRUFBUDtBQUFvQzs7OzZCQUU3Q0MsSyxFQUFPO0FBQUUsV0FBS04sUUFBTCxDQUFjQyxHQUFkLENBQWtCSyxLQUFsQjtBQUEyQjs7O3NDQUMzQkosYyxFQUFnQjtBQUFFLFdBQUtGLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRSxjQUFqQixDQUFnQ0EsY0FBaEM7QUFBa0QsSyxDQUFDOzs7O29DQUN2RUMsWSxFQUFjO0FBQUUsV0FBS0gsUUFBTCxDQUFjLENBQWQsRUFBaUJHLFlBQWpCLENBQThCQSxZQUE5QjtBQUE4QyxLLENBQUM7Ozs7aUNBQ2xFQyxTLEVBQVc7QUFBRSxXQUFLSixRQUFMLENBQWNJLFNBQWQsQ0FBd0JBLFNBQXhCO0FBQXFDOzs7a0NBQ2pEQyxVLEVBQVk7QUFBRSxXQUFLTCxRQUFMLENBQWNLLFVBQWQsQ0FBeUJBLFVBQXpCO0FBQXVDOzs7NkJBRTFEO0FBQUUsV0FBS0wsUUFBTCxDQUFjTyxNQUFkO0FBQXlCOzs7NkJBRTNCVixhLEVBQWVXLFMsRUFBVztBQUNqQyxXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQixZQUFXO0FBQzNCLFlBQUlILFFBQVEsS0FBS0ksUUFBTCxFQUFaOztBQUVBYixzQkFBY1MsS0FBZDtBQUNELE9BSmlCLENBSWhCSyxJQUpnQixDQUlYLElBSlcsQ0FBbEIsRUFJY0gsU0FKZDtBQUtEOzs7NkJBRVFJLE8sRUFBU0osUyxFQUFXO0FBQzNCLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQVc7QUFDM0IsWUFBSUwsWUFBWSxLQUFLUyxZQUFMLEVBQWhCO0FBQUEsWUFDSVIsYUFBYSxLQUFLUyxhQUFMLEVBRGpCOztBQUdBRixnQkFBUVIsU0FBUixFQUFtQkMsVUFBbkI7QUFDRCxPQUxpQixDQUtoQk0sSUFMZ0IsQ0FLWCxJQUxXLENBQWxCLEVBS2NILFNBTGQ7QUFNRDs7OzhCQUVTQSxTLEVBQVc7QUFDbkIsV0FBS08sR0FBTCxDQUFTLFFBQVQsRUFBbUJQLFNBQW5CO0FBQ0Q7Ozs4QkFFU0EsUyxFQUFXO0FBQ25CLFdBQUtPLEdBQUwsQ0FBUyxRQUFULEVBQW1CUCxTQUFuQjtBQUNEOzs7NkJBRVFRLGEsRUFBZSxDQUFFOzs7OEJBQ2hCQSxhLEVBQWUsQ0FBRTs7OzBCQUVkQyxpQixFQUFtQnBCLGEsRUFBZTtBQUM3QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixRQUFuQixFQUE2QnNCLGlCQUE3QixFQUFnRHBCLGFBQWhELENBQVA7QUFDRDs7OzZCQUVlcUIsSSxFQUFNckIsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWEwQixRQUFiLENBQXNCeEIsUUFBdEIsRUFBZ0N1QixJQUFoQyxFQUFzQ3JCLGFBQXRDLENBQVA7QUFDRDs7O21DQUVxQnVCLFUsRUFBWXZCLGEsRUFBZTtBQUMvQyxhQUFPSixhQUFhNEIsY0FBYixDQUE0QjFCLFFBQTVCLEVBQXNDeUIsVUFBdEMsRUFBa0R2QixhQUFsRCxDQUFQO0FBQ0Q7Ozs7RUEvRG9CSixZOztBQWtFdkI2QixPQUFPQyxPQUFQLEdBQWlCNUIsUUFBakIiLCJmaWxlIjoidGV4dEFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dEFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQudmFsKCk7IH1cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvblN0YXJ0OyB9XG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kOyB9XG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsVG9wKCk7IH1cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuc2Nyb2xsTGVmdCgpOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpOyB9XG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpOyB9IC8vL1xuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCk7IH0gLy8vXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTsgfVxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KHNjcm9sbExlZnQpOyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLiRlbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIodmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKG5hbWVzcGFjZSkge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBuYW1lc3BhY2UpO1xuICB9XG4gIFxuICBvZmZTY3JvbGwobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIG5hbWVzcGFjZSlcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dEFyZWEsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0QXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dEFyZWEsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEFyZWE7XG4iXX0=