'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selector, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, selector));

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
    value: function onChange(changeHandler) {
      var button = undefined,
          allowDefault = true;

      this.onClick(function () {
        var checked = this.isChecked();

        changeHandler(checked);
      }.bind(this), button, allowDefault);
    }
  }, {
    key: 'check',
    value: function check() {
      var checked = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jaGVja2JveC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiYnV0dG9uIiwidW5kZWZpbmVkIiwiYWxsb3dEZWZhdWx0Iiwib25DbGljayIsImNoZWNrZWQiLCJpc0NoZWNrZWQiLCJiaW5kIiwiYWRkQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiJGVsZW1lbnQiLCJpcyIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGdCQUFSLENBQW5COztJQUVNQyxRO1lBQUFBLFE7O0FBQ0osV0FESUEsUUFDSixDQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBLDBCQURqQ0YsUUFDaUM7O0FBQUEsdUVBRGpDQSxRQUNpQyxhQUM3QkMsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7O2VBUEdGLFE7OzBCQVNFRSxhLEVBQWU7QUFBRSxhQUFPRixTQUFTSSxLQUFULENBQWUsSUFBZixFQUFxQkYsYUFBckIsQ0FBUDtBQUE2Qzs7OzZCQUUzREEsYSxFQUFlO0FBQ3RCLFVBQUlHLFNBQVNDLFNBQWI7QUFBQSxVQUNJQyxlQUFlLElBRG5COztBQUdBLFdBQUtDLE9BQUwsQ0FBYSxZQUFXO0FBQ3RCLFlBQUlDLFVBQVUsS0FBS0MsU0FBTCxFQUFkOztBQUVBUixzQkFBY08sT0FBZDtBQUNELE9BSlksQ0FJWEUsSUFKVyxDQUlOLElBSk0sQ0FBYixFQUljTixNQUpkLEVBSXNCRSxZQUp0QjtBQUtEOzs7NEJBRXFCO0FBQUEsVUFBaEJFLE9BQWdCLHlEQUFOLElBQU07O0FBQ3BCQSxnQkFDRSxLQUFLRyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLFNBQTdCLENBREYsR0FFSSxLQUFLQyxlQUFMLENBQXFCLFNBQXJCLENBRko7QUFHRDs7O2dDQUVXO0FBQ1YsVUFBSUosVUFBVSxLQUFLSyxRQUFMLENBQWNDLEVBQWQsQ0FBaUIsVUFBakIsQ0FBZCxDQURVLENBQ2tDOztBQUU1QyxhQUFPTixPQUFQO0FBQ0Q7OzswQkFFWU8saUIsRUFBbUJkLGEsRUFBZTtBQUM3QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixRQUFuQixFQUE2QmdCLGlCQUE3QixFQUFnRGQsYUFBaEQsQ0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTWYsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFvQixRQUFiLENBQXNCbEIsUUFBdEIsRUFBZ0NpQixJQUFoQyxFQUFzQ2YsYUFBdEMsQ0FBUDtBQUNEOzs7bUNBRXFCaUIsVSxFQUFZakIsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFzQixjQUFiLENBQTRCcEIsUUFBNUIsRUFBc0NtQixVQUF0QyxFQUFrRGpCLGFBQWxELENBQVA7QUFDRDs7O1NBNUNHRixRO0VBQWlCRixZOztBQStDdkJ1QixPQUFPQyxPQUFQLEdBQWlCdEIsUUFBakIiLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdmFyIGJ1dHRvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dEZWZhdWx0ID0gdHJ1ZTtcblxuICAgIHRoaXMub25DbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcihjaGVja2VkKTtcbiAgICB9LmJpbmQodGhpcyksIGJ1dHRvbiwgYWxsb3dEZWZhdWx0KVxuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjaGVja2VkID9cbiAgICAgIHRoaXMuYWRkQXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgdmFyIGNoZWNrZWQgPSB0aGlzLiRlbGVtZW50LmlzKCc6Y2hlY2tlZCcpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG4iXX0=