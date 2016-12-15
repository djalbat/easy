'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    value: function onChange(changeHandler) {
      this.on('input', function () {
        ///
        var value = this.getValue();

        changeHandler(value);
      }.bind(this));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.$element.val();
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.$element[0].selectionStart;
    } ///

  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.$element[0].selectionEnd;
    } ///

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
  }, {
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiSW5wdXQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwiYmluZCIsIiRlbGVtZW50IiwidmFsIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3QiLCJyZXNpemVIYW5kbGVyIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLEs7WUFBQUEsSzs7QUFDSixXQURJQSxLQUNKLENBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUEsMEJBRGpDRixLQUNpQzs7QUFBQSx1RUFEakNBLEtBQ2lDLGFBQzdCQyxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7ZUFQR0YsSzs7NEJBU0k7QUFBRSxhQUFPQSxNQUFNSSxLQUFOLENBQVksSUFBWixDQUFQO0FBQTJCOzs7NkJBRTVCRixhLEVBQWU7QUFDdEIsV0FBS0csRUFBTCxDQUFRLE9BQVIsRUFBaUIsWUFBVztBQUFFO0FBQzVCLFlBQUlDLFFBQVEsS0FBS0MsUUFBTCxFQUFaOztBQUVBTCxzQkFBY0ksS0FBZDtBQUNELE9BSmdCLENBSWZFLElBSmUsQ0FJVixJQUpVLENBQWpCO0FBS0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0MsUUFBTCxDQUFjQyxHQUFkLEVBQVA7QUFBNkI7Ozt3Q0FFdEI7QUFBRSxhQUFPLEtBQUtELFFBQUwsQ0FBYyxDQUFkLEVBQWlCRSxjQUF4QjtBQUF5QyxLLENBQUM7Ozs7c0NBQzlDO0FBQUUsYUFBTyxLQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBeEI7QUFBdUMsSyxDQUFDOzs7OzZCQUVuRE4sSyxFQUFPO0FBQUUsV0FBS0csUUFBTCxDQUFjQyxHQUFkLENBQWtCSixLQUFsQjtBQUEyQjs7OzZCQUVwQztBQUFFLFdBQUtHLFFBQUwsQ0FBY0ksTUFBZDtBQUF5Qjs7OzZCQUUzQkMsYSxFQUFlLENBQUU7Ozs4QkFDaEJBLGEsRUFBZSxDQUFFOzs7MEJBRWRDLGlCLEVBQW1CO0FBQzlCLGFBQU9qQixhQUFhTSxLQUFiLENBQW1CSixLQUFuQixFQUEwQmUsaUJBQTFCLENBQVA7QUFDRDs7OzZCQUVlQyxJLEVBQU07QUFDcEIsYUFBT2xCLGFBQWFtQixRQUFiLENBQXNCakIsS0FBdEIsRUFBNkJnQixJQUE3QixDQUFQO0FBQ0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxhQUFPcEIsYUFBYXFCLGNBQWIsQ0FBNEJuQixLQUE1QixFQUFtQ2tCLFVBQW5DLENBQVA7QUFDRDs7O1NBekNHbEIsSztFQUFjRixZOztBQTRDcEJzQixPQUFPQyxPQUFQLEdBQWlCckIsS0FBakIiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkgeyAvLy9cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTsgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25TdGFydDsgfSAvLy9cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQ7IH0gLy8vXG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpOyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLiRlbGVtZW50LnNlbGVjdCgpOyB9XG4gIFxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iXX0=