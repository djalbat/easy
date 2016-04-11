'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Link = function (_InputElement) {
  _inherits(Link, _InputElement);

  function Link(selectorOr$Element, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, selectorOr$Element));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Link, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Link.clone(this.$element, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      this.$element.click(function () {
        var href = this.$element.attr('href');

        handler(href);

        return false;
      }.bind(this));
    }
  }]);

  return Link;
}(InputElement);

Link.clone = function (selectorOr$Element, clickHandler) {
  return InputElement.clone(Link, selectorOr$Element, clickHandler);
};

Link.fromHTML = function (html, clickHandler) {
  return InputElement.fromHTML(Link, html, clickHandler);
};

Link.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(Link, domElement);
};

module.exports = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9saW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxJQUNKLENBQVksa0JBQVosRUFBZ0MsWUFBaEMsRUFBOEM7MEJBRDFDLE1BQzBDOzt1RUFEMUMsaUJBRUkscUJBRHNDOztBQUc1QyxRQUFJLFlBQUosRUFBa0I7QUFDaEIsWUFBSyxPQUFMLENBQWEsWUFBYixFQURnQjtLQUFsQjtpQkFINEM7R0FBOUM7O2VBREk7OzBCQVNFLGNBQWM7QUFBRSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssUUFBTCxFQUFlLFlBQTFCLENBQVAsQ0FBRjs7Ozs0QkFFWixTQUFTO0FBQ2YsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixZQUFXO0FBQzdCLFlBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE1BQW5CLENBQVAsQ0FEeUI7O0FBRzdCLGdCQUFRLElBQVIsRUFINkI7O0FBSzdCLGVBQU8sS0FBUCxDQUw2QjtPQUFYLENBTWxCLElBTmtCLENBTWIsSUFOYSxDQUFwQixFQURlOzs7O1NBWGI7RUFBYTs7QUFzQm5CLEtBQUssS0FBTCxHQUFhLFVBQVMsa0JBQVQsRUFBNkIsWUFBN0IsRUFBMkM7QUFDdEQsU0FBTyxhQUFhLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUIsa0JBQXpCLEVBQTZDLFlBQTdDLENBQVAsQ0FEc0Q7Q0FBM0M7O0FBSWIsS0FBSyxRQUFMLEdBQWdCLFVBQVMsSUFBVCxFQUFlLFlBQWYsRUFBNkI7QUFDM0MsU0FBTyxhQUFhLFFBQWIsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsWUFBbEMsQ0FBUCxDQUQyQztDQUE3Qjs7QUFJaEIsS0FBSyxjQUFMLEdBQXNCLFVBQVMsVUFBVCxFQUFxQjtBQUN6QyxTQUFPLFFBQVEsY0FBUixDQUF1QixJQUF2QixFQUE2QixVQUE3QixDQUFQLENBRHlDO0NBQXJCOztBQUl0QixPQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcy4kZWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHJlZiA9IHRoaXMuJGVsZW1lbnQuYXR0cignaHJlZicpO1xuXG4gICAgICBoYW5kbGVyKGhyZWYpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9XG59XG5cbkxpbmsuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKExpbmssIHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbkxpbmsuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xufTtcblxuTGluay5mcm9tRE9NRWxlbWVudCA9IGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iXX0=
