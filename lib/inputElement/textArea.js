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
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvdGV4dEFyZWEuanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIlRleHRBcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsIiRlbGVtZW50IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwidmFsdWUiLCJzZWxlY3QiLCJuYW1lc3BhY2UiLCJvbiIsImdldFZhbHVlIiwiYmluZCIsImhhbmRsZXIiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0Iiwib2ZmIiwicmVzaXplSGFuZGxlciIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGlCQUFSLENBQW5COztJQUVNQyxROzs7QUFDSixvQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSxvSEFDN0JELFFBRDZCOztBQUduQyxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OzBCQUVLQSxhLEVBQWU7QUFBRSxhQUFPRixTQUFTSSxLQUFULENBQWUsSUFBZixFQUFxQkYsYUFBckIsQ0FBUDtBQUE2Qzs7OytCQUV6RDtBQUFFLGFBQU8sS0FBS0csUUFBTCxDQUFjQyxHQUFkLEVBQVA7QUFBNkI7Ozt3Q0FDdEI7QUFBRSxhQUFPLEtBQUtELFFBQUwsQ0FBYyxDQUFkLEVBQWlCRSxjQUF4QjtBQUF5Qzs7O3NDQUM3QztBQUFFLGFBQU8sS0FBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJHLFlBQXhCO0FBQXVDOzs7bUNBQzVDO0FBQUUsYUFBTyxLQUFLSCxRQUFMLENBQWNJLFNBQWQsRUFBUDtBQUFtQzs7O29DQUNwQztBQUFFLGFBQU8sS0FBS0osUUFBTCxDQUFjSyxVQUFkLEVBQVA7QUFBb0M7Ozs2QkFFN0NDLEssRUFBTztBQUFFLFdBQUtOLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkssS0FBbEI7QUFBMkI7OztzQ0FDM0JKLGMsRUFBZ0I7QUFBRSxXQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQkUsY0FBakIsQ0FBZ0NBLGNBQWhDO0FBQWtELEssQ0FBQzs7OztvQ0FDdkVDLFksRUFBYztBQUFFLFdBQUtILFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxZQUFqQixDQUE4QkEsWUFBOUI7QUFBOEMsSyxDQUFDOzs7O2lDQUNsRUMsUyxFQUFXO0FBQUUsV0FBS0osUUFBTCxDQUFjSSxTQUFkLENBQXdCQSxTQUF4QjtBQUFxQzs7O2tDQUNqREMsVSxFQUFZO0FBQUUsV0FBS0wsUUFBTCxDQUFjSyxVQUFkLENBQXlCQSxVQUF6QjtBQUF1Qzs7OzZCQUUxRDtBQUFFLFdBQUtMLFFBQUwsQ0FBY08sTUFBZDtBQUF5Qjs7OzZCQUUzQlYsYSxFQUFlVyxTLEVBQVc7QUFDakMsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBVztBQUMzQixZQUFJSCxRQUFRLEtBQUtJLFFBQUwsRUFBWjs7QUFFQWIsc0JBQWNTLEtBQWQ7QUFDRCxPQUppQixDQUloQkssSUFKZ0IsQ0FJWCxJQUpXLENBQWxCLEVBSWNILFNBSmQ7QUFLRDs7OzZCQUVRSSxPLEVBQVNKLFMsRUFBVztBQUMzQixXQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQixZQUFXO0FBQzNCLFlBQUlMLFlBQVksS0FBS1MsWUFBTCxFQUFoQjtBQUFBLFlBQ0lSLGFBQWEsS0FBS1MsYUFBTCxFQURqQjs7QUFHQUYsZ0JBQVFSLFNBQVIsRUFBbUJDLFVBQW5CO0FBQ0QsT0FMaUIsQ0FLaEJNLElBTGdCLENBS1gsSUFMVyxDQUFsQixFQUtjSCxTQUxkO0FBTUQ7Ozs4QkFFU0EsUyxFQUFXO0FBQ25CLFdBQUtPLEdBQUwsQ0FBUyxRQUFULEVBQW1CUCxTQUFuQjtBQUNEOzs7OEJBRVNBLFMsRUFBVztBQUNuQixXQUFLTyxHQUFMLENBQVMsUUFBVCxFQUFtQlAsU0FBbkI7QUFDRDs7OzZCQUVRUSxhLEVBQWUsQ0FBRTs7OzhCQUNoQkEsYSxFQUFlLENBQUU7OzswQkFFZEMsaUIsRUFBbUJwQixhLEVBQWU7QUFDN0MsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosUUFBbkIsRUFBNkJzQixpQkFBN0IsRUFBZ0RwQixhQUFoRCxDQUFQO0FBQ0Q7Ozs2QkFFZXFCLEksRUFBTXJCLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhMEIsUUFBYixDQUFzQnhCLFFBQXRCLEVBQWdDdUIsSUFBaEMsRUFBc0NyQixhQUF0QyxDQUFQO0FBQ0Q7OzttQ0FFcUJ1QixVLEVBQVl2QixhLEVBQWU7QUFDL0MsYUFBT0osYUFBYTRCLGNBQWIsQ0FBNEIxQixRQUE1QixFQUFzQ3lCLFVBQXRDLEVBQWtEdkIsYUFBbEQsQ0FBUDtBQUNEOzs7O0VBL0RvQkosWTs7QUFrRXZCNkIsT0FBT0MsT0FBUCxHQUFpQjVCLFFBQWpCIiwiZmlsZSI6InRleHRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBUZXh0QXJlYS5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTsgfVxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQ7IH1cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQ7IH1cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5zY3JvbGxUb3AoKTsgfVxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KCk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7IH1cbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCk7IH0gLy8vXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKTsgfSAvLy9cbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcChzY3JvbGxUb3ApOyB9XG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgb25TY3JvbGwoaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIGhhbmRsZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgICB9LmJpbmQodGhpcyksIG5hbWVzcGFjZSk7XG4gIH1cblxuICBvZmZDaGFuZ2UobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIG5hbWVzcGFjZSk7XG4gIH1cbiAgXG4gIG9mZlNjcm9sbChuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9mZignc2Nyb2xsJywgbmFtZXNwYWNlKVxuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0QXJlYSwgc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRBcmVhLCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChUZXh0QXJlYSwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0QXJlYTtcbiJdfQ==