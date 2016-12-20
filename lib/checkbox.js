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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jaGVja2JveC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiYnV0dG9uIiwidW5kZWZpbmVkIiwiYWxsb3dEZWZhdWx0Iiwib25DbGljayIsImNoZWNrZWQiLCJpc0NoZWNrZWQiLCJiaW5kIiwiYWRkQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiJGVsZW1lbnQiLCJpcyIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGdCQUFSLENBQW5COztJQUVNQyxROzs7QUFDSixvQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSxvSEFDN0JELFFBRDZCOztBQUduQyxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OzBCQUVLQSxhLEVBQWU7QUFBRSxhQUFPRixTQUFTSSxLQUFULENBQWUsSUFBZixFQUFxQkYsYUFBckIsQ0FBUDtBQUE2Qzs7OzZCQUUzREEsYSxFQUFlO0FBQ3RCLFVBQUlHLFNBQVNDLFNBQWI7QUFBQSxVQUNJQyxlQUFlLElBRG5COztBQUdBLFdBQUtDLE9BQUwsQ0FBYSxZQUFXO0FBQ3RCLFlBQUlDLFVBQVUsS0FBS0MsU0FBTCxFQUFkOztBQUVBUixzQkFBY08sT0FBZDtBQUNELE9BSlksQ0FJWEUsSUFKVyxDQUlOLElBSk0sQ0FBYixFQUljTixNQUpkLEVBSXNCRSxZQUp0QjtBQUtEOzs7NEJBRXFCO0FBQUEsVUFBaEJFLE9BQWdCLHVFQUFOLElBQU07O0FBQ3BCQSxnQkFDRSxLQUFLRyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLFNBQTdCLENBREYsR0FFSSxLQUFLQyxlQUFMLENBQXFCLFNBQXJCLENBRko7QUFHRDs7O2dDQUVXO0FBQ1YsVUFBSUosVUFBVSxLQUFLSyxRQUFMLENBQWNDLEVBQWQsQ0FBaUIsVUFBakIsQ0FBZCxDQURVLENBQ2tDOztBQUU1QyxhQUFPTixPQUFQO0FBQ0Q7OzswQkFFWU8saUIsRUFBbUJkLGEsRUFBZTtBQUM3QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixRQUFuQixFQUE2QmdCLGlCQUE3QixFQUFnRGQsYUFBaEQsQ0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTWYsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFvQixRQUFiLENBQXNCbEIsUUFBdEIsRUFBZ0NpQixJQUFoQyxFQUFzQ2YsYUFBdEMsQ0FBUDtBQUNEOzs7bUNBRXFCaUIsVSxFQUFZakIsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFzQixjQUFiLENBQTRCcEIsUUFBNUIsRUFBc0NtQixVQUF0QyxFQUFrRGpCLGFBQWxELENBQVA7QUFDRDs7OztFQTVDb0JKLFk7O0FBK0N2QnVCLE9BQU9DLE9BQVAsR0FBaUJ0QixRQUFqQiIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB2YXIgYnV0dG9uID0gdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd0RlZmF1bHQgPSB0cnVlO1xuXG4gICAgdGhpcy5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuXG4gICAgICBjaGFuZ2VIYW5kbGVyKGNoZWNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNoZWNrZWQgP1xuICAgICAgdGhpcy5hZGRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICB2YXIgY2hlY2tlZCA9IHRoaXMuJGVsZW1lbnQuaXMoJzpjaGVja2VkJyk7IC8vL1xuICAgIFxuICAgIHJldHVybiBjaGVja2VkO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShDaGVja2JveCwgc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiJdfQ==