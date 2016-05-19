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
      return Input.clone(this);
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
    value: function clone(selectorOrElement) {
      return InputElement.clone(Input, selectorOrElement);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return InputElement.fromHTML(Input, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return InputElement.fromDOMElement(Input, domElement);
    }
  }]);

  return Input;
}(InputElement);

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxLQUNKLENBQVksUUFBWixFQUFzQixhQUF0QixFQUFxQzswQkFEakMsT0FDaUM7O3VFQURqQyxrQkFFSSxXQUQ2Qjs7QUFHbkMsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQsRUFEaUI7S0FBbkI7aUJBSG1DO0dBQXJDOztlQURJOzs0QkFTSTtBQUFFLGFBQU8sTUFBTSxLQUFOLENBQVksSUFBWixDQUFQLENBQUY7Ozs7NkJBRUMsU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFlBQVc7QUFDL0IsbUJBQVcsWUFBVztBQUNwQixjQUFJLFFBQVEsS0FBSyxRQUFMLEVBQVIsQ0FEZ0I7O0FBR3BCLGtCQUFRLEtBQVIsRUFIb0I7U0FBWCxDQUlULElBSlMsQ0FJSixJQUpJLENBQVgsRUFEK0I7T0FBWCxDQU1wQixJQU5vQixDQU1mLElBTmUsQ0FBdEIsRUFEZ0I7Ozs7K0JBVVA7QUFDVCxVQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFSLENBREs7O0FBR1QsYUFBTyxLQUFQLENBSFM7Ozs7d0NBTVM7QUFDbEIsVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsS0FBeEIsQ0FBWjtVQUNBLGlCQUFpQixVQUFVLE9BQVYsQ0FBakI7O0FBRmMsYUFJWCxjQUFQLENBSmtCOzs7O3NDQU9GO0FBQ2hCLFVBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLENBQVo7VUFDQSxlQUFlLFVBQVUsS0FBVixDQUFmOztBQUZZLGFBSVQsWUFBUCxDQUpnQjs7Ozs2QkFPVCxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQURjOzs7OzZCQUlQO0FBQ1AsV0FBSyxRQUFMLENBQWMsTUFBZCxHQURPOzs7OzBCQUlJLG1CQUFtQjtBQUM5QixhQUFPLGFBQWEsS0FBYixDQUFtQixLQUFuQixFQUEwQixpQkFBMUIsQ0FBUCxDQUQ4Qjs7Ozs2QkFJaEIsTUFBTTtBQUNwQixhQUFPLGFBQWEsUUFBYixDQUFzQixLQUF0QixFQUE2QixJQUE3QixDQUFQLENBRG9COzs7O21DQUlBLFlBQVk7QUFDaEMsYUFBTyxhQUFhLGNBQWIsQ0FBNEIsS0FBNUIsRUFBbUMsVUFBbkMsQ0FBUCxDQURnQzs7OztTQXpEOUI7RUFBYzs7QUE4RHBCLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnanF1ZXJ5LXRleHRyYW5nZScpO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcyk7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5rZXlkb3duKGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgICAgIGhhbmRsZXIodmFsdWUpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkge1xuICAgIHZhciB0ZXh0cmFuZ2UgPSB0aGlzLiRlbGVtZW50LnRleHRyYW5nZSgnZ2V0JyksXG4gICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gdGV4dHJhbmdlWydzdGFydCddOyAgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0aW9uU3RhcnQ7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7XG4gICAgdmFyIHRleHRyYW5nZSA9IHRoaXMuJGVsZW1lbnQudGV4dHJhbmdlKCdnZXQnKSxcbiAgICAgICAgc2VsZWN0aW9uRW5kID0gdGV4dHJhbmdlWydlbmQnXTsgIC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbkVuZDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7XG4gIH1cbiAgXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iXX0=
