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

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
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
    key: 'onChange',
    value: function onChange(changeHandler, namespace) {
      this.on('change', function () {
        ///
        var value = this.getValue();

        changeHandler(value);
      }.bind(this), namespace);
    }
  }, {
    key: 'offChange',
    value: function offChange(namespace) {
      this.off('change', namespace); ///
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(Input, selectorOrElement, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }]);

  return Input;
}(InputElement);

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiSW5wdXQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiJGVsZW1lbnQiLCJ2YWwiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInZhbHVlIiwic2VsZWN0IiwibmFtZXNwYWNlIiwib24iLCJnZXRWYWx1ZSIsImJpbmQiLCJvZmYiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxnQkFBUixDQUFuQjs7SUFFTUMsSzs7O0FBQ0osaUJBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsOEdBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsYUFBSixFQUFtQjtBQUNqQixZQUFLQyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFS0EsYSxFQUFlO0FBQUUsYUFBT0YsTUFBTUksS0FBTixDQUFZLElBQVosRUFBa0JGLGFBQWxCLENBQVA7QUFBMEM7OzsrQkFFdEQ7QUFBRSxhQUFPLEtBQUtHLFFBQUwsQ0FBY0MsR0FBZCxFQUFQO0FBQTZCOzs7d0NBQ3RCO0FBQUUsYUFBTyxLQUFLRCxRQUFMLENBQWMsQ0FBZCxFQUFpQkUsY0FBeEI7QUFBeUMsSyxDQUFDOzs7O3NDQUM5QztBQUFFLGFBQU8sS0FBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJHLFlBQXhCO0FBQXVDLEssQ0FBQzs7Ozs2QkFFbkRDLEssRUFBTztBQUFFLFdBQUtKLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkcsS0FBbEI7QUFBMkI7Ozs2QkFFcEM7QUFBRSxXQUFLSixRQUFMLENBQWNLLE1BQWQ7QUFBeUI7Ozs2QkFFM0JSLGEsRUFBZVMsUyxFQUFXO0FBQ2pDLFdBQUtDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQVc7QUFBRTtBQUM3QixZQUFJSCxRQUFRLEtBQUtJLFFBQUwsRUFBWjs7QUFFQVgsc0JBQWNPLEtBQWQ7QUFDRCxPQUppQixDQUloQkssSUFKZ0IsQ0FJWCxJQUpXLENBQWxCLEVBSWNILFNBSmQ7QUFLRDs7OzhCQUVTQSxTLEVBQVc7QUFDbkIsV0FBS0ksR0FBTCxDQUFTLFFBQVQsRUFBbUJKLFNBQW5CLEVBRG1CLENBQ1k7QUFDaEM7OzswQkFFWUssaUIsRUFBbUJkLGEsRUFBZTtBQUM3QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixLQUFuQixFQUEwQmdCLGlCQUExQixFQUE2Q2QsYUFBN0MsQ0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTWYsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFvQixRQUFiLENBQXNCbEIsS0FBdEIsRUFBNkJpQixJQUE3QixFQUFtQ2YsYUFBbkMsQ0FBUDtBQUNEOzs7bUNBRXFCaUIsVSxFQUFZakIsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFzQixjQUFiLENBQTRCcEIsS0FBNUIsRUFBbUNtQixVQUFuQyxFQUErQ2pCLGFBQS9DLENBQVA7QUFDRDs7OztFQXpDaUJKLFk7O0FBNENwQnVCLE9BQU9DLE9BQVAsR0FBaUJ0QixLQUFqQiIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTsgfVxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQ7IH0gLy8vXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uRW5kOyB9IC8vL1xuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyAvLy9cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKG5hbWVzcGFjZSkge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBuYW1lc3BhY2UpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iXX0=