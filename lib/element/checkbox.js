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
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;

      this.on('click', changeHandler, intermediateChangeHandler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler) {
      this.off('click', changeHandler); ///
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
      return this.domElement.checked;
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

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked(),
      preventDefault = changeHandler(checked, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJjaGVjayIsImNsb25lIiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJzZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hlY2tib3giLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJpc0NoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsT0FBckMsRUFBOEM7QUFBQTs7QUFBQSxvSEFDdENGLFFBRHNDOztBQUc1QyxRQUFJQyxrQkFBa0JFLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0gsYUFBZDtBQUNEOztBQUVELFFBQUlDLFlBQVlDLFNBQWhCLEVBQTJCO0FBQ3pCLFlBQUtFLEtBQUwsQ0FBV0gsT0FBWDtBQUNEO0FBVDJDO0FBVTdDOzs7OzBCQUVLRCxhLEVBQWU7QUFBRSxhQUFPRixTQUFTTyxLQUFULENBQWUsSUFBZixFQUFxQkwsYUFBckIsQ0FBUDtBQUE2Qzs7OzZCQUUzREEsYSxFQUE2RTtBQUFBLFVBQTlETSx5QkFBOEQsdUVBQWxDQyxnQ0FBa0M7O0FBQ3BGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCUixhQUFqQixFQUFnQ00seUJBQWhDLEVBRG9GLENBQ3ZCO0FBQzlEOzs7OEJBRVNOLGEsRUFBZTtBQUN2QixXQUFLUyxHQUFMLENBQVMsT0FBVCxFQUFrQlQsYUFBbEIsRUFEdUIsQ0FDWTtBQUNwQzs7OzRCQUVxQjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNwQkEsZ0JBQ0UsS0FBS1MsWUFBTCxDQUFrQixTQUFsQixFQUE2QixTQUE3QixDQURGLEdBRUksS0FBS0MsY0FBTCxDQUFvQixTQUFwQixDQUZKO0FBR0Q7OztnQ0FFVztBQUFFLGFBQU8sS0FBS0MsVUFBTCxDQUFnQlgsT0FBdkI7QUFBaUM7OzsrQkFFcEMsQ0FBRTs7O2dDQUVELENBQUU7OzswQkFFRFksTyxFQUFTYixhLEVBQWU7QUFBRSxhQUFPSixRQUFRUyxLQUFSLENBQWNQLFFBQWQsRUFBd0JlLE9BQXhCLEVBQWlDYixhQUFqQyxDQUFQO0FBQXlEOzs7NkJBRWhGYyxJLEVBQU1kLGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFtQixRQUFSLENBQWlCakIsUUFBakIsRUFBMkJnQixJQUEzQixFQUFpQ2QsYUFBakMsQ0FBUDtBQUF5RDs7O21DQUUxRVksVSxFQUFZWixhLEVBQWU7QUFBRSxhQUFPSixRQUFRb0IsY0FBUixDQUF1QmxCLFFBQXZCLEVBQWlDYyxVQUFqQyxFQUE2Q1osYUFBN0MsQ0FBUDtBQUFxRTs7O21DQUVsR2lCLFUsRUFBWTtBQUFBLFVBQ3hCZCxRQUR3QixHQUNGYyxVQURFLENBQ3hCZCxRQUR3QjtBQUFBLFVBQ2RGLE9BRGMsR0FDRmdCLFVBREUsQ0FDZGhCLE9BRGM7QUFBQSxVQUUxQkQsYUFGMEIsR0FFVkcsUUFGVTtBQUFBLFVBRzFCZSxRQUgwQixHQUdmdEIsUUFBUXVCLGNBQVIsQ0FBdUJyQixRQUF2QixFQUFpQ21CLFVBQWpDLEVBQTZDakIsYUFBN0MsRUFBNERDLE9BQTVELENBSGU7OztBQUtoQyxhQUFPaUIsUUFBUDtBQUNEOzs7O0VBL0NvQnRCLE87O0FBa0R2QndCLE9BQU9DLE1BQVAsQ0FBY3ZCLFFBQWQsRUFBd0I7QUFDdEJ3QixXQUFTLE9BRGE7QUFFdEJDLHFCQUFtQixDQUNqQixVQURpQixFQUVqQixTQUZpQixDQUZHO0FBTXRCQyxxQkFBbUI7QUFDakJDLFVBQU07QUFEVztBQU5HLENBQXhCOztBQVdBQyxPQUFPQyxPQUFQLEdBQWlCN0IsUUFBakI7O0FBRUEsU0FBU1MsZ0NBQVQsQ0FBMENQLGFBQTFDLEVBQXlENEIsS0FBekQsRUFBZ0VDLGFBQWhFLEVBQStFO0FBQzdFLE1BQU1YLFdBQVdXLGFBQWpCO0FBQUEsTUFBZ0M7QUFDMUI1QixZQUFVaUIsU0FBU1ksU0FBVCxFQURoQjtBQUFBLE1BRU1DLGlCQUFpQi9CLGNBQWNDLE9BQWQsRUFBdUI0QixhQUF2QixDQUZ2Qjs7QUFJQSxTQUFPRSxjQUFQO0FBQ0QiLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjaGVja2VkID9cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA6XG4gICAgICAgIHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vICAgIFxuICAgICAgICAgIGNoZWNrYm94ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDaGVja2JveCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG4gICAgXG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnLFxuICAgICdjaGVja2VkJ1xuICBdLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6ICdjaGVja2JveCdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIGNoZWNrZWQgPSBjaGVja2JveC5pc0NoZWNrZWQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjaGFuZ2VIYW5kbGVyKGNoZWNrZWQsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiJdfQ==