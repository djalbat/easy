'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selectorOr$Element, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, selectorOr$Element));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Button.clone(this.$element, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      this.$element.click(function () {
        handler();

        return false;
      });
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(handler) {
      this.$element.dblclick(function () {
        handler();

        return false;
      });
    }
  }]);

  return Button;
}(InputElement);

Button.clone = function (selectorOr$Element, clickHandler) {
  return InputElement.clone(Button, selectorOr$Element, clickHandler);
};

Button.fromHTML = function (html, clickHandler) {
  return InputElement.fromHTML(Button, html, clickHandler);
};

Button.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(Button, domElement);
};

module.exports = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWUsUUFBUSxnQkFBUixDQUFmOztJQUVFOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxrQkFBWixFQUFnQyxZQUFoQyxFQUE4QzswQkFEMUMsUUFDMEM7O3VFQUQxQyxtQkFFSSxxQkFEc0M7O0FBRzVDLFFBQUksWUFBSixFQUFrQjtBQUNoQixZQUFLLE9BQUwsQ0FBYSxZQUFiLEVBRGdCO0tBQWxCO2lCQUg0QztHQUE5Qzs7ZUFESTs7MEJBU0UsY0FBYztBQUFFLGFBQU8sT0FBTyxLQUFQLENBQWEsS0FBSyxRQUFMLEVBQWUsWUFBNUIsQ0FBUCxDQUFGOzs7OzRCQUVaLFNBQVM7QUFDZixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0Isa0JBRDZCOztBQUc3QixlQUFPLEtBQVAsQ0FINkI7T0FBWCxDQUFwQixDQURlOzs7O2tDQVFILFNBQVM7QUFDckIsV0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixZQUFXO0FBQ2hDLGtCQURnQzs7QUFHaEMsZUFBTyxLQUFQLENBSGdDO09BQVgsQ0FBdkIsQ0FEcUI7Ozs7U0FuQm5CO0VBQWU7O0FBNEJyQixPQUFPLEtBQVAsR0FBZSxVQUFTLGtCQUFULEVBQTZCLFlBQTdCLEVBQTJDO0FBQ3hELFNBQU8sYUFBYSxLQUFiLENBQW1CLE1BQW5CLEVBQTJCLGtCQUEzQixFQUErQyxZQUEvQyxDQUFQLENBRHdEO0NBQTNDOztBQUlmLE9BQU8sUUFBUCxHQUFrQixVQUFTLElBQVQsRUFBZSxZQUFmLEVBQTZCO0FBQzdDLFNBQU8sYUFBYSxRQUFiLENBQXNCLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DLFlBQXBDLENBQVAsQ0FENkM7Q0FBN0I7O0FBSWxCLE9BQU8sY0FBUCxHQUF3QixVQUFTLFVBQVQsRUFBcUI7QUFDM0MsU0FBTyxRQUFRLGNBQVIsQ0FBdUIsTUFBdkIsRUFBK0IsVUFBL0IsQ0FBUCxDQUQyQztDQUFyQjs7QUFJeEIsT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxuXG4gIG9uRG91YmxlQ2xpY2soaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59XG5cbkJ1dHRvbi5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5CdXR0b24uZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5CdXR0b24uZnJvbURPTUVsZW1lbnQgPSBmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcbiJdfQ==
