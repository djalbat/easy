'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      this.$element.change(function () {
        var selectedOptionValue = this.getSelectedOptionValue();

        handler(selectedOptionValue);
      }.bind(this));
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var $selectedOption = this.$element.find(':selected'),
          selectedOptionValue = $selectedOption.val();

      return selectedOptionValue;
    }
  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(value) {
      this.$element.val(value);
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(Select, selectorOrElement, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Select, domElement, changeHandler);
    }
  }]);

  return Select;
}(InputElement);

module.exports = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWUsUUFBUSxnQkFBUixDQUFmOztJQUVFOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxRQUFaLEVBQXNCLGFBQXRCLEVBQXFDOzBCQURqQyxRQUNpQzs7dUVBRGpDLG1CQUVJLFdBRDZCOztBQUduQyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZCxFQURpQjtLQUFuQjtpQkFIbUM7R0FBckM7O2VBREk7OzBCQVNFLGVBQWU7QUFBRSxhQUFPLE9BQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsYUFBbkIsQ0FBUCxDQUFGOzs7OzZCQUVaLFNBQVM7QUFDaEIsV0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixZQUFXO0FBQzlCLFlBQUksc0JBQXNCLEtBQUssc0JBQUwsRUFBdEIsQ0FEMEI7O0FBRzlCLGdCQUFRLG1CQUFSLEVBSDhCO09BQVgsQ0FJbkIsSUFKbUIsQ0FJZCxJQUpjLENBQXJCLEVBRGdCOzs7OzZDQVFPO0FBQ3ZCLFVBQUksa0JBQWtCLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsQ0FBbEI7VUFDQSxzQkFBc0IsZ0JBQWdCLEdBQWhCLEVBQXRCLENBRm1COztBQUl2QixhQUFPLG1CQUFQLENBSnVCOzs7OzZDQU9BLE9BQU87QUFDOUIsV0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixFQUQ4Qjs7OzswQkFJbkIsbUJBQW1CLGVBQWU7QUFDN0MsYUFBTyxhQUFhLEtBQWIsQ0FBbUIsTUFBbkIsRUFBMkIsaUJBQTNCLEVBQThDLGFBQTlDLENBQVAsQ0FENkM7Ozs7NkJBSS9CLE1BQU0sZUFBZTtBQUNuQyxhQUFPLGFBQWEsUUFBYixDQUFzQixNQUF0QixFQUE4QixJQUE5QixFQUFvQyxhQUFwQyxDQUFQLENBRG1DOzs7O21DQUlmLFlBQVksZUFBZTtBQUMvQyxhQUFPLGFBQWEsY0FBYixDQUE0QixNQUE1QixFQUFvQyxVQUFwQyxFQUFnRCxhQUFoRCxDQUFQLENBRCtDOzs7O1NBdEM3QztFQUFlOztBQTJDckIsT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKTtcblxuICAgICAgaGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICB2YXIgJHNlbGVjdGVkT3B0aW9uID0gdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKSxcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9ICRzZWxlY3RlZE9wdGlvbi52YWwoKTtcblxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShTZWxlY3QsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG4iXX0=
