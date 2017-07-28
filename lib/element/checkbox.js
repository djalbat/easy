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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, selector));

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
      var intermediateChangeHandler = arguments.length <= 2 || arguments[2] === undefined ? defaultIntermediateChangeHandler : arguments[2];

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
      var checked = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

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
      var onChange = properties.onChange;
      var checked = properties.checked;
      var changeHandler = onChange; ///    
      var checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);

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
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJjaGVjayIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJzZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiY2hlY2tib3giLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwiaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsUTtZQUFBQSxROztBQUNKLFdBRElBLFFBQ0osQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQUEsMEJBRDFDSCxRQUMwQzs7QUFBQSx1RUFEMUNBLFFBQzBDLGFBQ3RDQyxRQURzQzs7QUFHNUMsUUFBSUMsa0JBQWtCRSxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxZQUFZQyxTQUFoQixFQUEyQjtBQUN6QixZQUFLRSxLQUFMLENBQVdILE9BQVg7QUFDRDtBQVQyQztBQVU3Qzs7ZUFYR0gsUTs7MEJBYUVFLGEsRUFBZTtBQUFFLGFBQU9GLFNBQVNPLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTCxhQUFyQixDQUFQO0FBQTZDOzs7NkJBRTNEQSxhLEVBQWVNLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHlEQUFsQ0MsZ0NBQWtDOztBQUM1RixXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQlQsYUFBakIsRUFBZ0NNLE1BQWhDLEVBQXdDQyx5QkFBeEMsRUFENEYsQ0FDdkI7QUFDdEU7Ozs4QkFFU1AsYSxFQUFlTSxNLEVBQVE7QUFDL0IsV0FBS0ksR0FBTCxDQUFTLE9BQVQsRUFBa0JWLGFBQWxCLEVBQWlDTSxNQUFqQyxFQUQrQixDQUNZO0FBQzVDOzs7NEJBRXFCO0FBQUEsVUFBaEJMLE9BQWdCLHlEQUFOLElBQU07O0FBQ3BCQSxnQkFDRSxLQUFLVSxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLFNBQTdCLENBREYsR0FFSSxLQUFLQyxjQUFMLENBQW9CLFNBQXBCLENBRko7QUFHRDs7O2dDQUVXO0FBQ1YsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDSWIsVUFBVVksV0FBV1osT0FEekI7O0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7O2dDQUVELENBQUU7OzswQkFFRGMsTyxFQUFTZixhLEVBQWU7QUFBRSxhQUFPSixRQUFRUyxLQUFSLENBQWNQLFFBQWQsRUFBd0JpQixPQUF4QixFQUFpQ2YsYUFBakMsQ0FBUDtBQUF5RDs7OzZCQUVoRmdCLEksRUFBTWhCLGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFxQixRQUFSLENBQWlCbkIsUUFBakIsRUFBMkJrQixJQUEzQixFQUFpQ2hCLGFBQWpDLENBQVA7QUFBeUQ7OzttQ0FFMUVhLFUsRUFBWWIsYSxFQUFlO0FBQUUsYUFBT0osUUFBUXNCLGNBQVIsQ0FBdUJwQixRQUF2QixFQUFpQ2UsVUFBakMsRUFBNkNiLGFBQTdDLENBQVA7QUFBcUU7OzttQ0FFbEdtQixVLEVBQVk7QUFBQSxVQUN4QmhCLFFBRHdCLEdBQ0ZnQixVQURFLENBQ3hCaEIsUUFEd0I7QUFDMUIsVUFBWUYsT0FBWixHQUF3QmtCLFVBQXhCLENBQVlsQixPQUFaO0FBQ0EsMEJBQWdCRSxRQUFoQixDQUYwQixDQUVBO0FBQzFCLHFCQUFXUCxRQUFRd0IsY0FBUixDQUF1QnRCLFFBQXZCLEVBQWlDcUIsVUFBakMsRUFBNkNuQixhQUE3QyxFQUE0REMsT0FBNUQsQ0FBWDs7QUFFTixhQUFPb0IsUUFBUDtBQUNEOzs7U0FwREd2QixRO0VBQWlCRixPOztBQXVEdkIwQixPQUFPQyxNQUFQLENBQWN6QixRQUFkLEVBQXdCO0FBQ3RCMEIsV0FBUyxPQURhO0FBRXRCQyxxQkFBbUIsQ0FDakIsVUFEaUIsRUFFakIsU0FGaUIsQ0FGRztBQU10QkMscUJBQW1CO0FBQ2pCQyxVQUFNO0FBRFc7QUFORyxDQUF4Qjs7QUFXQUMsT0FBT0MsT0FBUCxHQUFpQi9CLFFBQWpCOztBQUVBLFNBQVNVLGdDQUFULENBQTBDUixhQUExQyxFQUF5RDhCLEtBQXpELEVBQWdFQyxhQUFoRSxFQUErRTtBQUM3RSxNQUFNVixXQUFXVSxhQUFqQjtBQUFBLE1BQWdDO0FBQzFCOUIsWUFBVW9CLFNBQVNXLFNBQVQsRUFEaEI7O0FBR0FoQyxnQkFBY0MsT0FBZCxFQUF1QjZCLEtBQXZCLEVBQThCQyxhQUE5QjtBQUNEIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTsgIC8vL1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjaGVja2VkID9cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA6XG4gICAgICAgIHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vLyAgICBcbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuICAgIFxuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyKGNoZWNrZWQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiJdfQ==