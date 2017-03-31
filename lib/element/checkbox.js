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
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler;
      }

      this.on('click', handler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('click', handler); ///
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
          changeHandler = onChange; ///    

      return Element.fromProperties(Checkbox, properties, changeHandler, checked);
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

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked(),
      preventDefault = handler(checked, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJjaGVjayIsImNsb25lIiwiaGFuZGxlciIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwic2V0QXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsImNoZWNrYm94IiwiaXNDaGVja2VkIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxROzs7QUFDSixvQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQUE7O0FBQUEsb0hBQ3RDRixRQURzQzs7QUFHNUMsUUFBSUMsa0JBQWtCRSxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxZQUFZQyxTQUFoQixFQUEyQjtBQUN6QixZQUFLRSxLQUFMLENBQVdILE9BQVg7QUFDRDtBQVQyQztBQVU3Qzs7OzswQkFFS0QsYSxFQUFlO0FBQUUsYUFBT0YsU0FBU08sS0FBVCxDQUFlLElBQWYsRUFBcUJMLGFBQXJCLENBQVA7QUFBNkM7Ozs2QkFFM0RNLE8sRUFBUztBQUNoQixVQUFJQSxRQUFRQyxtQkFBUixLQUFnQ0wsU0FBcEMsRUFBK0M7QUFDN0NJLGdCQUFRQyxtQkFBUixHQUE4QkMsZ0NBQTlCO0FBQ0Q7O0FBRUQsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJILE9BQWpCLEVBTGdCLENBS1k7QUFDN0I7Ozs4QkFFU0EsTyxFQUFTO0FBQ2pCLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCSixPQUFsQixFQURpQixDQUNZO0FBQzlCOzs7NEJBRXFCO0FBQUEsVUFBaEJMLE9BQWdCLHVFQUFOLElBQU07O0FBQ3BCQSxnQkFDRSxLQUFLVSxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLFNBQTdCLENBREYsR0FFSSxLQUFLQyxjQUFMLENBQW9CLFNBQXBCLENBRko7QUFHRDs7O2dDQUVXO0FBQUUsYUFBTyxLQUFLQyxVQUFMLENBQWdCWixPQUF2QjtBQUFpQzs7OytCQUVwQyxDQUFFOzs7Z0NBRUQsQ0FBRTs7OzBCQUVEYSxPLEVBQVNkLGEsRUFBZTtBQUNuQyxhQUFPSixRQUFRUyxLQUFSLENBQWNQLFFBQWQsRUFBd0JnQixPQUF4QixFQUFpQ2QsYUFBakMsQ0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTWYsYSxFQUFlO0FBQ25DLGFBQU9KLFFBQVFvQixRQUFSLENBQWlCbEIsUUFBakIsRUFBMkJpQixJQUEzQixFQUFpQ2YsYUFBakMsQ0FBUDtBQUNEOzs7bUNBRXFCYSxVLEVBQVliLGEsRUFBZTtBQUMvQyxhQUFPSixRQUFRcUIsY0FBUixDQUF1Qm5CLFFBQXZCLEVBQWlDZSxVQUFqQyxFQUE2Q2IsYUFBN0MsQ0FBUDtBQUNEOzs7bUNBRXFCa0IsVSxFQUFZO0FBQUEsVUFDeEJmLFFBRHdCLEdBQ0ZlLFVBREUsQ0FDeEJmLFFBRHdCO0FBQUEsVUFDZEYsT0FEYyxHQUNGaUIsVUFERSxDQUNkakIsT0FEYztBQUFBLFVBRTFCRCxhQUYwQixHQUVWRyxRQUZVLEVBRUE7O0FBRWhDLGFBQU9QLFFBQVF1QixjQUFSLENBQXVCckIsUUFBdkIsRUFBaUNvQixVQUFqQyxFQUE2Q2xCLGFBQTdDLEVBQTREQyxPQUE1RCxDQUFQO0FBQ0Q7Ozs7RUF4RG9CTCxPOztBQTJEdkJ3QixPQUFPQyxNQUFQLENBQWN2QixRQUFkLEVBQXdCO0FBQ3RCd0IsV0FBUyxPQURhO0FBRXRCQyxxQkFBbUIsQ0FDakIsVUFEaUIsRUFFakIsU0FGaUIsQ0FGRztBQU10QkMscUJBQW1CO0FBQ2pCQyxVQUFNO0FBRFc7QUFORyxDQUF4Qjs7QUFXQUMsT0FBT0MsT0FBUCxHQUFpQjdCLFFBQWpCOztBQUVBLFNBQVNVLGdDQUFULENBQTBDRixPQUExQyxFQUFtRHNCLEtBQW5ELEVBQTBEQyxhQUExRCxFQUF5RTtBQUN2RSxNQUFNQyxXQUFXRCxhQUFqQjtBQUFBLE1BQWdDO0FBQzFCNUIsWUFBVTZCLFNBQVNDLFNBQVQsRUFEaEI7QUFBQSxNQUVNQyxpQkFBaUIxQixRQUFRTCxPQUFSLEVBQWlCNEIsYUFBakIsQ0FGdkI7O0FBSUEsU0FBT0csY0FBUDtBQUNEIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcjtcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIpOyAgLy8vXG4gIH1cbiAgXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgaGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY2hlY2tlZCA/XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgOlxuICAgICAgICB0aGlzLmNsZWFyQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihjaGVja2VkLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iXX0=