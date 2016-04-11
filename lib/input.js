'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('jquery-textrange');

var InputElement = require('./inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input(selectorOr$Element, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, selectorOr$Element));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone() {
      return Input.clone(this.$element);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      this.$element.keydown(function () {
        setTimeout(function () {
          var value = this.getValue();

          handler(value);
        }.bind(this));
      }.bind(this));
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
      var textrange = this.$element.textrange('get'),
          selectionStart = textrange['start']; ///

      return selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      var textrange = this.$element.textrange('get'),
          selectionEnd = textrange['end']; ///

      return selectionEnd;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.$element.val(value);
    }
  }, {
    key: 'select',
    value: function select() {
      this.$element.select();
    }
  }]);

  return Input;
}(InputElement);

Input.clone = function (selectorOr$Element) {
  return InputElement.clone(Input, selectorOr$Element);
};

Input.fromHTML = function (html) {
  return InputElement.fromHTML(Input, html);
};

Input.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(Input, domElement);
};

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxLQUNKLENBQVksa0JBQVosRUFBZ0MsYUFBaEMsRUFBK0M7MEJBRDNDLE9BQzJDOzt1RUFEM0Msa0JBRUkscUJBRHVDOztBQUc3QyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZCxFQURpQjtLQUFuQjtpQkFINkM7R0FBL0M7O2VBREk7OzRCQVNJO0FBQUUsYUFBTyxNQUFNLEtBQU4sQ0FBWSxLQUFLLFFBQUwsQ0FBbkIsQ0FBRjs7Ozs2QkFFQyxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsWUFBVztBQUMvQixtQkFBVyxZQUFXO0FBQ3BCLGNBQUksUUFBUSxLQUFLLFFBQUwsRUFBUixDQURnQjs7QUFHcEIsa0JBQVEsS0FBUixFQUhvQjtTQUFYLENBSVQsSUFKUyxDQUlKLElBSkksQ0FBWCxFQUQrQjtPQUFYLENBTXBCLElBTm9CLENBTWYsSUFOZSxDQUF0QixFQURnQjs7OzsrQkFVUDtBQUNULFVBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxHQUFkLEVBQVIsQ0FESzs7QUFHVCxhQUFPLEtBQVAsQ0FIUzs7Ozt3Q0FNUztBQUNsQixVQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixLQUF4QixDQUFaO1VBQ0EsaUJBQWlCLFVBQVUsT0FBVixDQUFqQjs7QUFGYyxhQUlYLGNBQVAsQ0FKa0I7Ozs7c0NBT0Y7QUFDaEIsVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsS0FBeEIsQ0FBWjtVQUNBLGVBQWUsVUFBVSxLQUFWLENBQWY7O0FBRlksYUFJVCxZQUFQLENBSmdCOzs7OzZCQU9ULE9BQU87QUFDZCxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEVBRGM7Ozs7NkJBSVA7QUFDUCxXQUFLLFFBQUwsQ0FBYyxNQUFkLEdBRE87Ozs7U0E3Q0w7RUFBYzs7QUFrRHBCLE1BQU0sS0FBTixHQUFjLFVBQVMsa0JBQVQsRUFBNkI7QUFDekMsU0FBTyxhQUFhLEtBQWIsQ0FBbUIsS0FBbkIsRUFBMEIsa0JBQTFCLENBQVAsQ0FEeUM7Q0FBN0I7O0FBSWQsTUFBTSxRQUFOLEdBQWlCLFVBQVMsSUFBVCxFQUFlO0FBQzlCLFNBQU8sYUFBYSxRQUFiLENBQXNCLEtBQXRCLEVBQTZCLElBQTdCLENBQVAsQ0FEOEI7Q0FBZjs7QUFJakIsTUFBTSxjQUFOLEdBQXVCLFVBQVMsVUFBVCxFQUFxQjtBQUMxQyxTQUFPLFFBQVEsY0FBUixDQUF1QixLQUF2QixFQUE4QixVQUE5QixDQUFQLENBRDBDO0NBQXJCOztBQUl2QixPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJ2pxdWVyeS10ZXh0cmFuZ2UnKTtcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcy4kZWxlbWVudCk7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5rZXlkb3duKGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICAgIGhhbmRsZXIodmFsdWUpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkge1xuICAgIHZhciB0ZXh0cmFuZ2UgPSB0aGlzLiRlbGVtZW50LnRleHRyYW5nZSgnZ2V0JyksXG4gICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gdGV4dHJhbmdlWydzdGFydCddOyAgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0aW9uU3RhcnQ7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7XG4gICAgdmFyIHRleHRyYW5nZSA9IHRoaXMuJGVsZW1lbnQudGV4dHJhbmdlKCdnZXQnKSxcbiAgICAgICAgc2VsZWN0aW9uRW5kID0gdGV4dHJhbmdlWydlbmQnXTsgIC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbkVuZDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7XG4gIH1cbn1cblxuSW5wdXQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgc2VsZWN0b3JPciRFbGVtZW50KTtcbn07XG5cbklucHV0LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sKTtcbn07XG5cbklucHV0LmZyb21ET01FbGVtZW50ID0gZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIl19
