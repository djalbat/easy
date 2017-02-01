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
  }]);

  return Checkbox;
}(InputElement);

module.exports = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvY2hlY2tib3guanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIkNoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsIm5hbWVzcGFjZSIsImJ1dHRvbiIsInVuZGVmaW5lZCIsImFsbG93RGVmYXVsdCIsIm9uQ2xpY2siLCJjaGVja2VkIiwiaXNDaGVja2VkIiwiYmluZCIsImFkZEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIiRlbGVtZW50IiwiaXMiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsb0hBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJGLGFBQXJCLENBQVA7QUFBNkM7Ozs2QkFFM0RBLGEsRUFBZUcsUyxFQUFXO0FBQ2pDLFVBQUlDLFNBQVNDLFNBQWI7QUFBQSxVQUNJQyxlQUFlLElBRG5COztBQUdBLFdBQUtDLE9BQUwsQ0FBYSxZQUFXO0FBQ3RCLFlBQUlDLFVBQVUsS0FBS0MsU0FBTCxFQUFkOztBQUVBVCxzQkFBY1EsT0FBZDtBQUNELE9BSlksQ0FJWEUsSUFKVyxDQUlOLElBSk0sQ0FBYixFQUljUCxTQUpkLEVBSXlCQyxNQUp6QixFQUlpQ0UsWUFKakM7QUFLRDs7OzRCQUVxQjtBQUFBLFVBQWhCRSxPQUFnQix1RUFBTixJQUFNOztBQUNwQkEsZ0JBQ0UsS0FBS0csWUFBTCxDQUFrQixTQUFsQixFQUE2QixTQUE3QixDQURGLEdBRUksS0FBS0MsZUFBTCxDQUFxQixTQUFyQixDQUZKO0FBR0Q7OztnQ0FFVztBQUNWLFVBQUlKLFVBQVUsS0FBS0ssUUFBTCxDQUFjQyxFQUFkLENBQWlCLFVBQWpCLENBQWQsQ0FEVSxDQUNrQzs7QUFFNUMsYUFBT04sT0FBUDtBQUNEOzs7MEJBRVlPLGlCLEVBQW1CZixhLEVBQWU7QUFDN0MsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosUUFBbkIsRUFBNkJpQixpQkFBN0IsRUFBZ0RmLGFBQWhELENBQVA7QUFDRDs7OzZCQUVlZ0IsSSxFQUFNaEIsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFxQixRQUFiLENBQXNCbkIsUUFBdEIsRUFBZ0NrQixJQUFoQyxFQUFzQ2hCLGFBQXRDLENBQVA7QUFDRDs7O21DQUVxQmtCLFUsRUFBWWxCLGEsRUFBZTtBQUMvQyxhQUFPSixhQUFhdUIsY0FBYixDQUE0QnJCLFFBQTVCLEVBQXNDb0IsVUFBdEMsRUFBa0RsQixhQUFsRCxDQUFQO0FBQ0Q7Ozs7RUE1Q29CSixZOztBQStDdkJ3QixPQUFPQyxPQUFQLEdBQWlCdkIsUUFBakIiLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdmFyIGJ1dHRvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dEZWZhdWx0ID0gdHJ1ZTtcblxuICAgIHRoaXMub25DbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcihjaGVja2VkKTtcbiAgICB9LmJpbmQodGhpcyksIG5hbWVzcGFjZSwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNoZWNrZWQgP1xuICAgICAgdGhpcy5hZGRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICB2YXIgY2hlY2tlZCA9IHRoaXMuJGVsZW1lbnQuaXMoJzpjaGVja2VkJyk7IC8vL1xuICAgIFxuICAgIHJldHVybiBjaGVja2VkO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShDaGVja2JveCwgc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiJdfQ==