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

module.exports = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9saW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxJQUNKLENBQVksa0JBQVosRUFBZ0MsWUFBaEMsRUFBOEM7MEJBRDFDLE1BQzBDOzt1RUFEMUMsaUJBRUkscUJBRHNDOztBQUc1QyxRQUFJLFlBQUosRUFBa0I7QUFDaEIsWUFBSyxPQUFMLENBQWEsWUFBYixFQURnQjtLQUFsQjtpQkFINEM7R0FBOUM7O2VBREk7OzBCQVNFLGNBQWM7QUFBRSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssUUFBTCxFQUFlLFlBQTFCLENBQVAsQ0FBRjs7Ozs0QkFFWixTQUFTO0FBQ2YsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixZQUFXO0FBQzdCLFlBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE1BQW5CLENBQVAsQ0FEeUI7O0FBRzdCLGdCQUFRLElBQVIsRUFINkI7O0FBSzdCLGVBQU8sS0FBUCxDQUw2QjtPQUFYLENBTWxCLElBTmtCLENBTWIsSUFOYSxDQUFwQixFQURlOzs7O1NBWGI7RUFBYTs7QUFzQm5CLEtBQUssS0FBTCxHQUFhLFVBQVMsa0JBQVQsRUFBNkIsWUFBN0IsRUFBMkM7QUFDdEQsU0FBTyxhQUFhLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUIsa0JBQXpCLEVBQTZDLFlBQTdDLENBQVAsQ0FEc0Q7Q0FBM0M7O0FBSWIsS0FBSyxRQUFMLEdBQWdCLFVBQVMsSUFBVCxFQUFlLFlBQWYsRUFBNkI7QUFDM0MsU0FBTyxhQUFhLFFBQWIsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsWUFBbEMsQ0FBUCxDQUQyQztDQUE3Qjs7QUFJaEIsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyZWYgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblxuICAgICAgaGFuZGxlcihocmVmKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxufVxuXG5MaW5rLmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShMaW5rLCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5MaW5rLmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcbiJdfQ==
