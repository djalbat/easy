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
    value: function clone() {
      return TextArea.clone(this);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler) {
      this.on('input', function () {
        ///
        var value = this.getValue();

        changeHandler(value);
      }.bind(this));
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      this.$element.scroll(function () {
        var scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft();

        handler(scrollTop, scrollLeft);
      }.bind(this));
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
    key: 'getValue',
    value: function getValue() {
      var value = this.$element.val();

      return value;
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
    key: 'setValue',
    value: function setValue(value) {
      this.$element.val(value);
    }
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
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement) {
      return InputElement.clone(TextArea, selectorOrElement);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return InputElement.fromHTML(TextArea, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return InputElement.fromDOMElement(TextArea, domElement);
    }
  }]);

  return TextArea;
}(InputElement);

module.exports = TextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiVGV4dEFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwiYmluZCIsImhhbmRsZXIiLCIkZWxlbWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3QiLCJyZXNpemVIYW5kbGVyIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLG9IQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7NEJBRU87QUFBRSxhQUFPRixTQUFTSSxLQUFULENBQWUsSUFBZixDQUFQO0FBQThCOzs7NkJBRS9CRixhLEVBQWU7QUFDdEIsV0FBS0csRUFBTCxDQUFRLE9BQVIsRUFBaUIsWUFBVztBQUFFO0FBQzVCLFlBQUlDLFFBQVEsS0FBS0MsUUFBTCxFQUFaOztBQUVBTCxzQkFBY0ksS0FBZDtBQUNELE9BSmdCLENBSWZFLElBSmUsQ0FJVixJQUpVLENBQWpCO0FBS0Q7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBY0MsTUFBZCxDQUFxQixZQUFXO0FBQzlCLFlBQUlDLFlBQVksS0FBS0MsWUFBTCxFQUFoQjtBQUFBLFlBQ0lDLGFBQWEsS0FBS0MsYUFBTCxFQURqQjs7QUFHQU4sZ0JBQVFHLFNBQVIsRUFBbUJFLFVBQW5CO0FBQ0QsT0FMb0IsQ0FLbkJOLElBTG1CLENBS2QsSUFMYyxDQUFyQjtBQU1EOzs7bUNBRWM7QUFBRSxhQUFPLEtBQUtFLFFBQUwsQ0FBY0UsU0FBZCxFQUFQO0FBQW1DOzs7b0NBQ3BDO0FBQUUsYUFBTyxLQUFLRixRQUFMLENBQWNJLFVBQWQsRUFBUDtBQUFvQzs7OytCQUUzQztBQUNULFVBQUlSLFFBQVEsS0FBS0ksUUFBTCxDQUFjTSxHQUFkLEVBQVo7O0FBRUEsYUFBT1YsS0FBUDtBQUNEOzs7d0NBRW1CO0FBQUUsYUFBTyxLQUFLSSxRQUFMLENBQWMsQ0FBZCxFQUFpQk8sY0FBeEI7QUFBeUM7OztzQ0FDN0M7QUFBRSxhQUFPLEtBQUtQLFFBQUwsQ0FBYyxDQUFkLEVBQWlCUSxZQUF4QjtBQUF1Qzs7OzZCQUVsRFosSyxFQUFPO0FBQ2QsV0FBS0ksUUFBTCxDQUFjTSxHQUFkLENBQWtCVixLQUFsQjtBQUNEOzs7aUNBRVlNLFMsRUFBVztBQUFFLFdBQUtGLFFBQUwsQ0FBY0UsU0FBZCxDQUF3QkEsU0FBeEI7QUFBcUM7OztrQ0FDakRFLFUsRUFBWTtBQUFFLFdBQUtKLFFBQUwsQ0FBY0ksVUFBZCxDQUF5QkEsVUFBekI7QUFBdUM7Ozs2QkFFMUQ7QUFDUCxXQUFLSixRQUFMLENBQWNTLE1BQWQ7QUFDRDs7OzZCQUVRQyxhLEVBQWUsQ0FBRTs7OzhCQUNoQkEsYSxFQUFlLENBQUU7OzswQkFFZEMsaUIsRUFBbUI7QUFDOUIsYUFBT3ZCLGFBQWFNLEtBQWIsQ0FBbUJKLFFBQW5CLEVBQTZCcUIsaUJBQTdCLENBQVA7QUFDRDs7OzZCQUVlQyxJLEVBQU07QUFDcEIsYUFBT3hCLGFBQWF5QixRQUFiLENBQXNCdkIsUUFBdEIsRUFBZ0NzQixJQUFoQyxDQUFQO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxhQUFPMUIsYUFBYTJCLGNBQWIsQ0FBNEJ6QixRQUE1QixFQUFzQ3dCLFVBQXRDLENBQVA7QUFDRDs7OztFQWhFb0IxQixZOztBQW1FdkI0QixPQUFPQyxPQUFQLEdBQWlCM0IsUUFBakIiLCJmaWxlIjoidGV4dEFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0QXJlYS5jbG9uZSh0aGlzKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkgeyAvLy9cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbFRvcCgpOyB9XG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LnNjcm9sbExlZnQoKTsgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQ7IH1cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTsgfVxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy4kZWxlbWVudC5zY3JvbGxMZWZ0KHNjcm9sbExlZnQpOyB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7XG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge31cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFRleHRBcmVhLCBzZWxlY3Rvck9yRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dEFyZWEsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRBcmVhLCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRBcmVhO1xuIl19