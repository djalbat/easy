'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Link = function (_Element) {
  _inherits(Link, _Element);

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
}(Element);

Link.clone = function (selectorOr$Element, clickHandler) {
  return Element.clone(Link, selectorOr$Element, clickHandler);
};

Link.fromHTML = function (html, clickHandler) {
  return Element.fromHTML(Link, html, clickHandler);
};

module.exports = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLElBQ0osQ0FBWSxrQkFBWixFQUFnQyxZQUFoQyxFQUE4QzswQkFEMUMsTUFDMEM7O3VFQUQxQyxpQkFFSSxxQkFEc0M7O0FBRzVDLFFBQUksWUFBSixFQUFrQjtBQUNoQixZQUFLLE9BQUwsQ0FBYSxZQUFiLEVBRGdCO0tBQWxCO2lCQUg0QztHQUE5Qzs7ZUFESTs7MEJBU0UsY0FBYztBQUFFLGFBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxRQUFMLEVBQWUsWUFBMUIsQ0FBUCxDQUFGOzs7OzRCQUVaLFNBQVM7QUFDZixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsWUFBSSxPQUFPLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsTUFBbkIsQ0FBUCxDQUR5Qjs7QUFHN0IsZ0JBQVEsSUFBUixFQUg2Qjs7QUFLN0IsZUFBTyxLQUFQLENBTDZCO09BQVgsQ0FNbEIsSUFOa0IsQ0FNYixJQU5hLENBQXBCLEVBRGU7Ozs7U0FYYjtFQUFhOztBQXNCbkIsS0FBSyxLQUFMLEdBQWEsVUFBUyxrQkFBVCxFQUE2QixZQUE3QixFQUEyQztBQUN0RCxTQUFPLFFBQVEsS0FBUixDQUFjLElBQWQsRUFBb0Isa0JBQXBCLEVBQXdDLFlBQXhDLENBQVAsQ0FEc0Q7Q0FBM0M7O0FBSWIsS0FBSyxRQUFMLEdBQWdCLFVBQVMsSUFBVCxFQUFlLFlBQWYsRUFBNkI7QUFDM0MsU0FBTyxRQUFRLFFBQVIsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsWUFBN0IsQ0FBUCxDQUQyQztDQUE3Qjs7QUFJaEIsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyZWYgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblxuICAgICAgaGFuZGxlcihocmVmKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxufVxuXG5MaW5rLmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoTGluaywgc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpO1xufTtcblxuTGluay5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIl19