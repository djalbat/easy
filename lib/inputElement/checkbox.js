'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selector, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
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
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
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
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Checkbox;
      }

      Object.assign(properties, { /// 
        type: 'checkbox'
      });

      var _properties = properties,
          onChange = _properties.onChange,
          changeHandler = onChange;


      return InputElement.fromProperties(Class, properties, changeHandler);
    }
  }]);

  return Checkbox;
}(InputElement);

Checkbox.tagName = 'input'; ///

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event) {
  var checked = this.isChecked(),
      preventDefault = handler(checked);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvY2hlY2tib3guanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIkNoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsImhhbmRsZXIiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwidW5kZWZpbmVkIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJiaW5kIiwib24iLCJvZmYiLCJjaGVja2VkIiwic2V0QXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImZyb21ET01FbGVtZW50IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiT2JqZWN0IiwiYXNzaWduIiwidHlwZSIsImZyb21Qcm9wZXJ0aWVzIiwidGFnTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImlzQ2hlY2tlZCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLG9IQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLFNBQVNJLEtBQVQsQ0FBZSxJQUFmLEVBQXFCRixhQUFyQixDQUFQO0FBQTZDOzs7NkJBRTNERyxPLEVBQVM7QUFDaEIsVUFBSUEsUUFBUUMsbUJBQVIsS0FBZ0NDLFNBQXBDLEVBQStDO0FBQzdDRixnQkFBUUMsbUJBQVIsR0FBOEJFLGlDQUFpQ0MsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBOUI7QUFDRDs7QUFFRCxXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQkwsT0FBakIsRUFMZ0IsQ0FLWTtBQUM3Qjs7OzhCQUVTQSxPLEVBQVM7QUFDakIsV0FBS00sR0FBTCxDQUFTLE9BQVQsRUFBa0JOLE9BQWxCLEVBRGlCLENBQ1k7QUFDOUI7Ozs0QkFFcUI7QUFBQSxVQUFoQk8sT0FBZ0IsdUVBQU4sSUFBTTs7QUFDcEJBLGdCQUNFLEtBQUtDLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsU0FBN0IsQ0FERixHQUVJLEtBQUtDLGNBQUwsQ0FBb0IsU0FBcEIsQ0FGSjtBQUdEOzs7Z0NBRVc7QUFBRSxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0JILE9BQXZCO0FBQWlDOzs7MEJBRWxDSSxPLEVBQVNkLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixRQUFuQixFQUE2QmdCLE9BQTdCLEVBQXNDZCxhQUF0QyxDQUFQO0FBQ0Q7Ozs2QkFFZWUsSSxFQUFNZixhLEVBQWU7QUFDbkMsYUFBT0osYUFBYW9CLFFBQWIsQ0FBc0JsQixRQUF0QixFQUFnQ2lCLElBQWhDLEVBQXNDZixhQUF0QyxDQUFQO0FBQ0Q7OzttQ0FFcUJhLFUsRUFBWWIsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFxQixjQUFiLENBQTRCbkIsUUFBNUIsRUFBc0NlLFVBQXRDLEVBQWtEYixhQUFsRCxDQUFQO0FBQ0Q7OzttQ0FFcUJrQixLLEVBQU9DLFUsRUFBWTtBQUN2QyxVQUFJQyxVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCRixxQkFBYUQsS0FBYjtBQUNBQSxnQkFBUXBCLFFBQVI7QUFDRDs7QUFFRHdCLGFBQU9DLE1BQVAsQ0FBY0osVUFBZCxFQUEwQixFQUFFO0FBQzFCSyxjQUFNO0FBRGtCLE9BQTFCOztBQU51Qyx3QkFVbEJMLFVBVmtCO0FBQUEsVUFVL0JsQixRQVYrQixlQVUvQkEsUUFWK0I7QUFBQSxVQVdqQ0QsYUFYaUMsR0FXakJDLFFBWGlCOzs7QUFhdkMsYUFBT0wsYUFBYTZCLGNBQWIsQ0FBNEJQLEtBQTVCLEVBQW1DQyxVQUFuQyxFQUErQ25CLGFBQS9DLENBQVA7QUFDRDs7OztFQXpEb0JKLFk7O0FBNER2QkUsU0FBUzRCLE9BQVQsR0FBbUIsT0FBbkIsQyxDQUE0Qjs7QUFFNUJDLE9BQU9DLE9BQVAsR0FBaUI5QixRQUFqQjs7QUFHQSxTQUFTUSxnQ0FBVCxDQUEwQ0gsT0FBMUMsRUFBbUQwQixLQUFuRCxFQUEwRDtBQUN4RCxNQUFNbkIsVUFBVSxLQUFLb0IsU0FBTCxFQUFoQjtBQUFBLE1BQ01DLGlCQUFpQjVCLFFBQVFPLE9BQVIsQ0FEdkI7O0FBR0EsU0FBT3FCLGNBQVA7QUFDRCIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignY2xpY2snLCBoYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNoZWNrZWQgP1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDpcbiAgICAgICAgdGhpcy5jbGVhckF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBDaGVja2JveDtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHsgLy8vIFxuICAgICAgdHlwZTogJ2NoZWNrYm94JyBcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlO1xuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxuQ2hlY2tib3gudGFnTmFtZSA9ICdpbnB1dCc7IC8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoY2hlY2tlZCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIl19