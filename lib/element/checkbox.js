'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Checkbox = function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selector, changeHandler, checked) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
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
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;

      this.on('click', changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler, object) {
      this.off('click', changeHandler, object); ///
    }
  }, {
    key: 'check',
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      checked ? this.setAttribute('checked', 'checked') : this.clearAttribute('checked');
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;

      return checked;
    }
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return Element.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);


      return checkbox;
    }
  }]);

  return Checkbox;
}(Element);

Object.assign(Checkbox, {
  tagName: 'input',
  ignoredProperties: ['onChange', 'checked'],
  defaultProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var checkbox = element,
      ///
  checked = checkbox.isChecked();

  changeHandler.apply(checkbox, checked, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJjaGVjayIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJzZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImNoZWNrYm94IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJpc0NoZWNrZWQiLCJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsT0FBckMsRUFBOEM7QUFBQTs7QUFBQSxvSEFDdENGLFFBRHNDOztBQUc1QyxRQUFJQyxrQkFBa0JFLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0gsYUFBZDtBQUNEOztBQUVELFFBQUlDLFlBQVlDLFNBQWhCLEVBQTJCO0FBQ3pCLFlBQUtFLEtBQUwsQ0FBV0gsT0FBWDtBQUNEO0FBVDJDO0FBVTdDOzs7OzBCQUVLRCxhLEVBQWU7QUFBRSxhQUFPRixTQUFTTyxLQUFULENBQWUsSUFBZixFQUFxQkwsYUFBckIsQ0FBUDtBQUE2Qzs7OzZCQUUzREEsYSxFQUFlTSxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJULGFBQWpCLEVBQWdDTSxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNQLGEsRUFBZU0sTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCVixhQUFsQixFQUFpQ00sTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7OzRCQUVxQjtBQUFBLFVBQWhCTCxPQUFnQix1RUFBTixJQUFNOztBQUNwQkEsZ0JBQ0UsS0FBS1UsWUFBTCxDQUFrQixTQUFsQixFQUE2QixTQUE3QixDQURGLEdBRUksS0FBS0MsY0FBTCxDQUFvQixTQUFwQixDQUZKO0FBR0Q7OztnQ0FFVztBQUNWLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ0liLFVBQVVZLFdBQVdaLE9BRHpCOztBQUdBLGFBQU9BLE9BQVA7QUFDRDs7OytCQUVVLENBQUU7OztnQ0FFRCxDQUFFOzs7MEJBRURjLE8sRUFBU2YsYSxFQUFlO0FBQUUsYUFBT0osUUFBUVMsS0FBUixDQUFjUCxRQUFkLEVBQXdCaUIsT0FBeEIsRUFBaUNmLGFBQWpDLENBQVA7QUFBeUQ7Ozs2QkFFaEZnQixJLEVBQU1oQixhLEVBQWU7QUFBRSxhQUFPSixRQUFRcUIsUUFBUixDQUFpQm5CLFFBQWpCLEVBQTJCa0IsSUFBM0IsRUFBaUNoQixhQUFqQyxDQUFQO0FBQXlEOzs7bUNBRTFFYSxVLEVBQVliLGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFzQixjQUFSLENBQXVCcEIsUUFBdkIsRUFBaUNlLFVBQWpDLEVBQTZDYixhQUE3QyxDQUFQO0FBQXFFOzs7bUNBRWxHbUIsVSxFQUFZO0FBQUEsVUFDeEJoQixRQUR3QixHQUNGZ0IsVUFERSxDQUN4QmhCLFFBRHdCO0FBQUEsVUFDZEYsT0FEYyxHQUNGa0IsVUFERSxDQUNkbEIsT0FEYztBQUFBLFVBRTFCRCxhQUYwQixHQUVWRyxRQUZVO0FBQUEsVUFHMUJpQixRQUgwQixHQUdmeEIsUUFBUXlCLGNBQVIsQ0FBdUJ2QixRQUF2QixFQUFpQ3FCLFVBQWpDLEVBQTZDbkIsYUFBN0MsRUFBNERDLE9BQTVELENBSGU7OztBQUtoQyxhQUFPbUIsUUFBUDtBQUNEOzs7O0VBcERvQnhCLE87O0FBdUR2QjBCLE9BQU9DLE1BQVAsQ0FBY3pCLFFBQWQsRUFBd0I7QUFDdEIwQixXQUFTLE9BRGE7QUFFdEJDLHFCQUFtQixDQUNqQixVQURpQixFQUVqQixTQUZpQixDQUZHO0FBTXRCQyxxQkFBbUI7QUFDakJDLFVBQU07QUFEVztBQU5HLENBQXhCOztBQVdBQyxPQUFPQyxPQUFQLEdBQWlCL0IsUUFBakI7O0FBRUEsU0FBU1UsZ0NBQVQsQ0FBMENSLGFBQTFDLEVBQXlEOEIsS0FBekQsRUFBZ0VmLE9BQWhFLEVBQXlFO0FBQ3ZFLE1BQU1LLFdBQVdMLE9BQWpCO0FBQUEsTUFBMEI7QUFDcEJkLFlBQVVtQixTQUFTVyxTQUFULEVBRGhCOztBQUdBL0IsZ0JBQWNnQyxLQUFkLENBQW9CWixRQUFwQixFQUE4Qm5CLE9BQTlCLEVBQXVDNkIsS0FBdkM7QUFDRCIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY2hlY2tlZCA/XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgOlxuICAgICAgICB0aGlzLmNsZWFyQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBjaGVja2VkID0gZG9tRWxlbWVudC5jaGVja2VkO1xuXG4gICAgcmV0dXJuIGNoZWNrZWQ7XG4gIH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShDaGVja2JveCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy8gICAgXG4gICAgICAgICAgY2hlY2tib3ggPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcbiAgICBcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ2NoZWNrZWQnXG4gIF0sXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ2NoZWNrYm94J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBlbGVtZW50LCAvLy9cbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrYm94LmlzQ2hlY2tlZCgpO1xuICBcbiAgY2hhbmdlSGFuZGxlci5hcHBseShjaGVja2JveCwgY2hlY2tlZCwgZXZlbnQpO1xufVxuIl19