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
      return this.$element[0].selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.$element[0].selectionEnd;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiSW5wdXQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiaGFuZGxlciIsIiRlbGVtZW50Iiwia2V5ZG93biIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYmluZCIsInZhbCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2VsZWN0IiwicmVzaXplSGFuZGxlciIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGdCQUFSLENBQW5COztJQUVNQyxLOzs7QUFDSixpQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSw4R0FDN0JELFFBRDZCOztBQUduQyxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OzRCQUVPO0FBQUUsYUFBT0YsTUFBTUksS0FBTixDQUFZLElBQVosQ0FBUDtBQUEyQjs7OzZCQUU1QkMsTyxFQUFTO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixZQUFXO0FBQy9CQyxtQkFBVyxZQUFXO0FBQ3BCLGNBQUlDLFFBQVEsS0FBS0MsUUFBTCxFQUFaOztBQUVBTCxrQkFBUUksS0FBUjtBQUNELFNBSlUsQ0FJVEUsSUFKUyxDQUlKLElBSkksQ0FBWDtBQUtELE9BTnFCLENBTXBCQSxJQU5vQixDQU1mLElBTmUsQ0FBdEI7QUFPRDs7OytCQUVVO0FBQ1QsVUFBSUYsUUFBUSxLQUFLSCxRQUFMLENBQWNNLEdBQWQsRUFBWjs7QUFFQSxhQUFPSCxLQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFBRSxhQUFPLEtBQUtILFFBQUwsQ0FBYyxDQUFkLEVBQWlCTyxjQUF4QjtBQUF5Qzs7O3NDQUM3QztBQUFFLGFBQU8sS0FBS1AsUUFBTCxDQUFjLENBQWQsRUFBaUJRLFlBQXhCO0FBQXVDOzs7NkJBRWxETCxLLEVBQU87QUFDZCxXQUFLSCxRQUFMLENBQWNNLEdBQWQsQ0FBa0JILEtBQWxCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtILFFBQUwsQ0FBY1MsTUFBZDtBQUNEOzs7NkJBRVFDLGEsRUFBZSxDQUFFOzs7OEJBQ2hCQSxhLEVBQWUsQ0FBRTs7OzBCQUVkQyxpQixFQUFtQjtBQUM5QixhQUFPbkIsYUFBYU0sS0FBYixDQUFtQkosS0FBbkIsRUFBMEJpQixpQkFBMUIsQ0FBUDtBQUNEOzs7NkJBRWVDLEksRUFBTTtBQUNwQixhQUFPcEIsYUFBYXFCLFFBQWIsQ0FBc0JuQixLQUF0QixFQUE2QmtCLElBQTdCLENBQVA7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLGFBQU90QixhQUFhdUIsY0FBYixDQUE0QnJCLEtBQTVCLEVBQW1Db0IsVUFBbkMsQ0FBUDtBQUNEOzs7O0VBbkRpQnRCLFk7O0FBc0RwQndCLE9BQU9DLE9BQVAsR0FBaUJ2QixLQUFqQiIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQua2V5ZG93bihmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgICBoYW5kbGVyKHZhbHVlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uc2VsZWN0aW9uU3RhcnQ7IH1cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5zZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG4gIFxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoSW5wdXQsIGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iXX0=