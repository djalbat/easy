'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('jquery-textrange');

var InputElement = require('./inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input(selector, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, selector));

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
    value: function clone(selector) {
      return InputElement.clone(Input, selector);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxLQUNKLENBQVksUUFBWixFQUFzQixhQUF0QixFQUFxQzswQkFEakMsT0FDaUM7O3VFQURqQyxrQkFFSSxXQUQ2Qjs7QUFHbkMsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQsRUFEaUI7S0FBbkI7aUJBSG1DO0dBQXJDOztlQURJOzs0QkFTSTtBQUFFLGFBQU8sTUFBTSxLQUFOLENBQVksS0FBSyxRQUFMLENBQW5CLENBQUY7Ozs7NkJBRUMsU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFlBQVc7QUFDL0IsbUJBQVcsWUFBVztBQUNwQixjQUFJLFFBQVEsS0FBSyxRQUFMLEVBQVIsQ0FEZ0I7O0FBR3BCLGtCQUFRLEtBQVIsRUFIb0I7U0FBWCxDQUlULElBSlMsQ0FJSixJQUpJLENBQVgsRUFEK0I7T0FBWCxDQU1wQixJQU5vQixDQU1mLElBTmUsQ0FBdEIsRUFEZ0I7Ozs7K0JBVVA7QUFDVCxVQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFSLENBREs7O0FBR1QsYUFBTyxLQUFQLENBSFM7Ozs7d0NBTVM7QUFDbEIsVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsS0FBeEIsQ0FBWjtVQUNBLGlCQUFpQixVQUFVLE9BQVYsQ0FBakI7O0FBRmMsYUFJWCxjQUFQLENBSmtCOzs7O3NDQU9GO0FBQ2hCLFVBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLENBQVo7VUFDQSxlQUFlLFVBQVUsS0FBVixDQUFmOztBQUZZLGFBSVQsWUFBUCxDQUpnQjs7Ozs2QkFPVCxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQURjOzs7OzZCQUlQO0FBQ1AsV0FBSyxRQUFMLENBQWMsTUFBZCxHQURPOzs7OzBCQUlJLFVBQVU7QUFDckIsYUFBTyxhQUFhLEtBQWIsQ0FBbUIsS0FBbkIsRUFBMEIsUUFBMUIsQ0FBUCxDQURxQjs7Ozs2QkFJUCxNQUFNO0FBQ3BCLGFBQU8sYUFBYSxRQUFiLENBQXNCLEtBQXRCLEVBQTZCLElBQTdCLENBQVAsQ0FEb0I7Ozs7bUNBSUEsWUFBWTtBQUNoQyxhQUFPLFFBQVEsY0FBUixDQUF1QixLQUF2QixFQUE4QixVQUE5QixDQUFQLENBRGdDOzs7O1NBekQ5QjtFQUFjOztBQThEcEIsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCdqcXVlcnktdGV4dHJhbmdlJyk7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmtleWRvd24oZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgICAgaGFuZGxlcih2YWx1ZSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLiRlbGVtZW50LnZhbCgpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgdmFyIHRleHRyYW5nZSA9IHRoaXMuJGVsZW1lbnQudGV4dHJhbmdlKCdnZXQnKSxcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSB0ZXh0cmFuZ2VbJ3N0YXJ0J107ICAvLy9cblxuICAgIHJldHVybiBzZWxlY3Rpb25TdGFydDtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHtcbiAgICB2YXIgdGV4dHJhbmdlID0gdGhpcy4kZWxlbWVudC50ZXh0cmFuZ2UoJ2dldCcpLFxuICAgICAgICBzZWxlY3Rpb25FbmQgPSB0ZXh0cmFuZ2VbJ2VuZCddOyAgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0aW9uRW5kO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxuICBcbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iXX0=
