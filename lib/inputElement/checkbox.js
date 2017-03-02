'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selector, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler, namespace) {
      var button = undefined,
          allowDefault = true;

      this.onClick(function () {
        var checked = this.isChecked();

        changeHandler(checked);
      }.bind(this), namespace, button, allowDefault);
    }
  }, {
    key: 'check',
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      checked ? this.addAttribute('checked', 'checked') : this.removeAttribute('checked');
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      var checked = this.$element.is(':checked'); ///

      return checked;
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(Checkbox, selectorOrElement, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<input type="checkbox" />',
          changeHandler = properties.changeHandler;


      return Checkbox.fromHTML(html, changeHandler);
    }
  }]);

  return Checkbox;
}(InputElement);

module.exports = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvY2hlY2tib3guanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIkNoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsIm5hbWVzcGFjZSIsImJ1dHRvbiIsInVuZGVmaW5lZCIsImFsbG93RGVmYXVsdCIsIm9uQ2xpY2siLCJjaGVja2VkIiwiaXNDaGVja2VkIiwiYmluZCIsImFkZEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIiRlbGVtZW50IiwiaXMiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsaUJBQVIsQ0FBbkI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLG9IQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLFNBQVNJLEtBQVQsQ0FBZSxJQUFmLEVBQXFCRixhQUFyQixDQUFQO0FBQTZDOzs7NkJBRTNEQSxhLEVBQWVHLFMsRUFBVztBQUNqQyxVQUFJQyxTQUFTQyxTQUFiO0FBQUEsVUFDSUMsZUFBZSxJQURuQjs7QUFHQSxXQUFLQyxPQUFMLENBQWEsWUFBVztBQUN0QixZQUFJQyxVQUFVLEtBQUtDLFNBQUwsRUFBZDs7QUFFQVQsc0JBQWNRLE9BQWQ7QUFDRCxPQUpZLENBSVhFLElBSlcsQ0FJTixJQUpNLENBQWIsRUFJY1AsU0FKZCxFQUl5QkMsTUFKekIsRUFJaUNFLFlBSmpDO0FBS0Q7Ozs0QkFFcUI7QUFBQSxVQUFoQkUsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDcEJBLGdCQUNFLEtBQUtHLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsU0FBN0IsQ0FERixHQUVJLEtBQUtDLGVBQUwsQ0FBcUIsU0FBckIsQ0FGSjtBQUdEOzs7Z0NBRVc7QUFDVixVQUFJSixVQUFVLEtBQUtLLFFBQUwsQ0FBY0MsRUFBZCxDQUFpQixVQUFqQixDQUFkLENBRFUsQ0FDa0M7O0FBRTVDLGFBQU9OLE9BQVA7QUFDRDs7OzBCQUVZTyxpQixFQUFtQmYsYSxFQUFlO0FBQzdDLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLFFBQW5CLEVBQTZCaUIsaUJBQTdCLEVBQWdEZixhQUFoRCxDQUFQO0FBQ0Q7Ozs2QkFFZWdCLEksRUFBTWhCLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhcUIsUUFBYixDQUFzQm5CLFFBQXRCLEVBQWdDa0IsSUFBaEMsRUFBc0NoQixhQUF0QyxDQUFQO0FBQ0Q7OzttQ0FFcUJrQixVLEVBQVlsQixhLEVBQWU7QUFDL0MsYUFBT0osYUFBYXVCLGNBQWIsQ0FBNEJyQixRQUE1QixFQUFzQ29CLFVBQXRDLEVBQWtEbEIsYUFBbEQsQ0FBUDtBQUNEOzs7bUNBRXFCb0IsVSxFQUFZO0FBQzVCLGlCQUFPLDJCQUFQO0FBQUEsVUFDRXBCLGFBREYsR0FDb0JvQixVQURwQixDQUNFcEIsYUFERjs7O0FBR0osYUFBT0YsU0FBU21CLFFBQVQsQ0FBa0JELElBQWxCLEVBQXdCaEIsYUFBeEIsQ0FBUDtBQUNEOzs7O0VBbkRvQkosWTs7QUFzRHZCeUIsT0FBT0MsT0FBUCxHQUFpQnhCLFFBQWpCIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIHZhciBidXR0b24gPSB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93RGVmYXVsdCA9IHRydWU7XG5cbiAgICB0aGlzLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKCk7XG5cbiAgICAgIGNoYW5nZUhhbmRsZXIoY2hlY2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UsIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KVxuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjaGVja2VkID9cbiAgICAgIHRoaXMuYWRkQXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgdmFyIGNoZWNrZWQgPSB0aGlzLiRlbGVtZW50LmlzKCc6Y2hlY2tlZCcpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgaHRtbCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4nLFxuICAgICAgICB7IGNoYW5nZUhhbmRsZXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gQ2hlY2tib3guZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiJdfQ==