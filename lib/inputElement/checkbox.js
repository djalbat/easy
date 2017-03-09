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
      var mouseButton = Element.LEFT_MOUSE_BUTTON,
          allowDefault = true;

      this.onClick(function () {
        var checked = this.isChecked();

        handler(checked);
      }.bind(this), mouseButton, allowDefault);
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
    value: function fromProperties(properties) {
      var html = '<input type="checkbox" />';
      var onChange = properties.onChange;
      var changeHandler = onChange; ///

      return Checkbox.fromHTML(html, changeHandler);
    }
  }]);

  return Checkbox;
}(InputElement);

module.exports = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvY2hlY2tib3guanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwicmVxdWlyZSIsIkNoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwib25DaGFuZ2UiLCJjbG9uZSIsImhhbmRsZXIiLCJtb3VzZUJ1dHRvbiIsIkVsZW1lbnQiLCJMRUZUX01PVVNFX0JVVFRPTiIsImFsbG93RGVmYXVsdCIsIm9uQ2xpY2siLCJjaGVja2VkIiwiaXNDaGVja2VkIiwiYmluZCIsInNldEF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiZG9tRWxlbWVudCIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLG9IQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGFBQUosRUFBbUI7QUFDakIsWUFBS0MsUUFBTCxDQUFjRCxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUtBLGEsRUFBZTtBQUFFLGFBQU9GLFNBQVNJLEtBQVQsQ0FBZSxJQUFmLEVBQXFCRixhQUFyQixDQUFQO0FBQTZDOzs7NkJBRTNERyxPLEVBQVM7QUFDaEIsVUFBTUMsY0FBY0MsUUFBUUMsaUJBQTVCO0FBQUEsVUFDTUMsZUFBZSxJQURyQjs7QUFHQSxXQUFLQyxPQUFMLENBQWEsWUFBVztBQUN0QixZQUFNQyxVQUFVLEtBQUtDLFNBQUwsRUFBaEI7O0FBRUFQLGdCQUFRTSxPQUFSO0FBQ0QsT0FKWSxDQUlYRSxJQUpXLENBSU4sSUFKTSxDQUFiLEVBSWNQLFdBSmQsRUFJMkJHLFlBSjNCO0FBS0Q7Ozs0QkFFcUI7QUFBQSxVQUFoQkUsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDcEJBLGdCQUNFLEtBQUtHLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsU0FBN0IsQ0FERixHQUVJLEtBQUtDLGNBQUwsQ0FBb0IsU0FBcEIsQ0FGSjtBQUdEOzs7Z0NBRVc7QUFBRSxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0JMLE9BQXZCO0FBQWlDOzs7MEJBRWxDTSxPLEVBQVNmLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixRQUFuQixFQUE2QmlCLE9BQTdCLEVBQXNDZixhQUF0QyxDQUFQO0FBQ0Q7Ozs2QkFFZWdCLEksRUFBTWhCLGEsRUFBZTtBQUNuQyxhQUFPSixhQUFhcUIsUUFBYixDQUFzQm5CLFFBQXRCLEVBQWdDa0IsSUFBaEMsRUFBc0NoQixhQUF0QyxDQUFQO0FBQ0Q7OzttQ0FFcUJjLFUsRUFBWWQsYSxFQUFlO0FBQy9DLGFBQU9KLGFBQWFzQixjQUFiLENBQTRCcEIsUUFBNUIsRUFBc0NnQixVQUF0QyxFQUFrRGQsYUFBbEQsQ0FBUDtBQUNEOzs7bUNBRXFCbUIsVSxFQUFZO0FBQzFCLGlCQUFPLDJCQUFQO0FBQ0EsVUFBRWxCLFFBQUYsR0FBZWtCLFVBQWYsQ0FBRWxCLFFBQUY7QUFDQSwwQkFBZ0JBLFFBQWhCLENBSDBCLENBR0M7O0FBRWpDLGFBQU9ILFNBQVNtQixRQUFULENBQWtCRCxJQUFsQixFQUF3QmhCLGFBQXhCLENBQVA7QUFDRDs7OztFQWhEb0JKLFk7O0FBbUR2QndCLE9BQU9DLE9BQVAsR0FBaUJ2QixRQUFqQiIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZUJ1dHRvbiA9IEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04sXG4gICAgICAgICAgYWxsb3dEZWZhdWx0ID0gdHJ1ZTtcblxuICAgIHRoaXMub25DbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuXG4gICAgICBoYW5kbGVyKGNoZWNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSwgbW91c2VCdXR0b24sIGFsbG93RGVmYXVsdClcbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY2hlY2tlZCA/XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgOlxuICAgICAgICB0aGlzLmNsZWFyQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShDaGVja2JveCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgaHRtbCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4nLFxuICAgICAgICAgIHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAgLy8vXG5cbiAgICByZXR1cm4gQ2hlY2tib3guZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiJdfQ==