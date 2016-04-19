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
  }], [{
    key: 'clone',
    value: function clone(selectorOr$Element) {
      return InputElement.clone(Input, selectorOr$Element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return InputElement.fromHTML(Input, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Input, domElement);
    }
  }]);

  return Input;
}(InputElement);

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxLQUNKLENBQVksa0JBQVosRUFBZ0MsYUFBaEMsRUFBK0M7MEJBRDNDLE9BQzJDOzt1RUFEM0Msa0JBRUkscUJBRHVDOztBQUc3QyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZCxFQURpQjtLQUFuQjtpQkFINkM7R0FBL0M7O2VBREk7OzRCQVNJO0FBQUUsYUFBTyxNQUFNLEtBQU4sQ0FBWSxLQUFLLFFBQUwsQ0FBbkIsQ0FBRjs7Ozs2QkFFQyxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsWUFBVztBQUMvQixtQkFBVyxZQUFXO0FBQ3BCLGNBQUksUUFBUSxLQUFLLFFBQUwsRUFBUixDQURnQjs7QUFHcEIsa0JBQVEsS0FBUixFQUhvQjtTQUFYLENBSVQsSUFKUyxDQUlKLElBSkksQ0FBWCxFQUQrQjtPQUFYLENBTXBCLElBTm9CLENBTWYsSUFOZSxDQUF0QixFQURnQjs7OzsrQkFVUDtBQUNULFVBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxHQUFkLEVBQVIsQ0FESzs7QUFHVCxhQUFPLEtBQVAsQ0FIUzs7Ozt3Q0FNUztBQUNsQixVQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixLQUF4QixDQUFaO1VBQ0EsaUJBQWlCLFVBQVUsT0FBVixDQUFqQjs7QUFGYyxhQUlYLGNBQVAsQ0FKa0I7Ozs7c0NBT0Y7QUFDaEIsVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsS0FBeEIsQ0FBWjtVQUNBLGVBQWUsVUFBVSxLQUFWLENBQWY7O0FBRlksYUFJVCxZQUFQLENBSmdCOzs7OzZCQU9ULE9BQU87QUFDZCxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEVBRGM7Ozs7NkJBSVA7QUFDUCxXQUFLLFFBQUwsQ0FBYyxNQUFkLEdBRE87Ozs7MEJBSUksb0JBQW9CO0FBQy9CLGFBQU8sYUFBYSxLQUFiLENBQW1CLEtBQW5CLEVBQTBCLGtCQUExQixDQUFQLENBRCtCOzs7OzZCQUlqQixNQUFNO0FBQ3BCLGFBQU8sYUFBYSxRQUFiLENBQXNCLEtBQXRCLEVBQTZCLElBQTdCLENBQVAsQ0FEb0I7Ozs7bUNBSUEsWUFBWTtBQUNoQyxhQUFPLFFBQVEsY0FBUixDQUF1QixLQUF2QixFQUE4QixVQUE5QixDQUFQLENBRGdDOzs7O1NBekQ5QjtFQUFjOztBQThEcEIsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCdqcXVlcnktdGV4dHJhbmdlJyk7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMuJGVsZW1lbnQpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQua2V5ZG93bihmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgICBoYW5kbGVyKHZhbHVlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHtcbiAgICB2YXIgdGV4dHJhbmdlID0gdGhpcy4kZWxlbWVudC50ZXh0cmFuZ2UoJ2dldCcpLFxuICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHRleHRyYW5nZVsnc3RhcnQnXTsgIC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvblN0YXJ0O1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkge1xuICAgIHZhciB0ZXh0cmFuZ2UgPSB0aGlzLiRlbGVtZW50LnRleHRyYW5nZSgnZ2V0JyksXG4gICAgICAgIHNlbGVjdGlvbkVuZCA9IHRleHRyYW5nZVsnZW5kJ107ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3Rpb25FbmQ7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG4gIFxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgc2VsZWN0b3JPciRFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuIl19
