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
      this.on('input', function () {
        ///
        var value = this.getValue();

        changeHandler(value);
      }.bind(this), namespace);
    }
  }, {
    key: 'offChange',
    value: function offChange(namespace) {
      this.off('input', namespace); ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiSW5wdXQiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiJGVsZW1lbnQiLCJ2YWwiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInZhbHVlIiwic2VsZWN0IiwibmFtZXNwYWNlIiwib24iLCJnZXRWYWx1ZSIsImJpbmQiLCJvZmYiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxnQkFBUixDQUFuQjs7SUFFTUMsSztZQUFBQSxLOztBQUNKLFdBRElBLEtBQ0osQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQSwwQkFEakNGLEtBQ2lDOztBQUFBLHVFQURqQ0EsS0FDaUMsYUFDN0JDLFFBRDZCOztBQUduQyxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOztlQVBHRixLOzs0QkFTSTtBQUFFLGFBQU9BLE1BQU1JLEtBQU4sQ0FBWSxJQUFaLENBQVA7QUFBMkI7OzsrQkFFMUI7QUFBRSxhQUFPLEtBQUtDLFFBQUwsQ0FBY0MsR0FBZCxFQUFQO0FBQTZCOzs7d0NBQ3RCO0FBQUUsYUFBTyxLQUFLRCxRQUFMLENBQWMsQ0FBZCxFQUFpQkUsY0FBeEI7QUFBeUMsSyxDQUFDOzs7O3NDQUM5QztBQUFFLGFBQU8sS0FBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJHLFlBQXhCO0FBQXVDLEssQ0FBQzs7Ozs2QkFFbkRDLEssRUFBTztBQUFFLFdBQUtKLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkcsS0FBbEI7QUFBMkI7Ozs2QkFFcEM7QUFBRSxXQUFLSixRQUFMLENBQWNLLE1BQWQ7QUFBeUI7Ozs2QkFFM0JSLGEsRUFBZVMsUyxFQUFXO0FBQ2pDLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFlBQVc7QUFBRTtBQUM1QixZQUFJSCxRQUFRLEtBQUtJLFFBQUwsRUFBWjs7QUFFQVgsc0JBQWNPLEtBQWQ7QUFDRCxPQUpnQixDQUlmSyxJQUplLENBSVYsSUFKVSxDQUFqQixFQUljSCxTQUpkO0FBS0Q7Ozs4QkFFU0EsUyxFQUFXO0FBQ25CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCSixTQUFsQixFQURtQixDQUNXO0FBQy9COzs7MEJBRVlLLGlCLEVBQW1CO0FBQzlCLGFBQU9sQixhQUFhTSxLQUFiLENBQW1CSixLQUFuQixFQUEwQmdCLGlCQUExQixDQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNO0FBQ3BCLGFBQU9uQixhQUFhb0IsUUFBYixDQUFzQmxCLEtBQXRCLEVBQTZCaUIsSUFBN0IsQ0FBUDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsYUFBT3JCLGFBQWFzQixjQUFiLENBQTRCcEIsS0FBNUIsRUFBbUNtQixVQUFuQyxDQUFQO0FBQ0Q7OztTQXpDR25CLEs7RUFBY0YsWTs7QUE0Q3BCdUIsT0FBT0MsT0FBUCxHQUFpQnRCLEtBQWpCIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQudmFsKCk7IH1cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvblN0YXJ0OyB9IC8vL1xuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50WzBdLnNlbGVjdGlvbkVuZDsgfSAvLy9cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LnZhbCh2YWx1ZSk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuJGVsZW1lbnQuc2VsZWN0KCk7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkgeyAvLy9cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgY2hhbmdlSGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKG5hbWVzcGFjZSkge1xuICAgIHRoaXMub2ZmKCdpbnB1dCcsIG5hbWVzcGFjZSk7IC8vL1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiJdfQ==