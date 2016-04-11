'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Body = function (_Element) {
  _inherits(Body, _Element);

  function Body(selectorOr$Element) {
    _classCallCheck(this, Body);

    if (selectorOr$Element === undefined) {
      selectorOr$Element = 'body';
    }

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).call(this, selectorOr$Element));
  }

  _createClass(Body, [{
    key: 'clone',
    value: function clone() {
      return Body.clone(this.$element);
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

  return Body;
}(Element);

Body.clone = function (selectorOr$Element) {
  return Element.clone(Body, selectorOr$Element);
};

Body.fromHTML = function (html) {
  return Element.fromHTML(Body, html);
};

Body.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(Body, domElement);
};

module.exports = Body;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9ib2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLElBQ0osQ0FBWSxrQkFBWixFQUFnQzswQkFENUIsTUFDNEI7O0FBQzlCLFFBQUksdUJBQXVCLFNBQXZCLEVBQWtDO0FBQ3BDLDJCQUFxQixNQUFyQixDQURvQztLQUF0Qzs7a0VBRkUsaUJBTUkscUJBTHdCO0dBQWhDOztlQURJOzs0QkFTSTtBQUFFLGFBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxRQUFMLENBQWxCLENBQUY7Ozs7NEJBRUEsU0FBUztBQUNmLFdBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsWUFBVztBQUM3QixrQkFENkI7O0FBRzdCLGVBQU8sS0FBUCxDQUg2QjtPQUFYLENBQXBCLENBRGU7Ozs7a0NBUUgsU0FBUztBQUNyQixXQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFlBQVc7QUFDaEMsa0JBRGdDOztBQUdoQyxlQUFPLEtBQVAsQ0FIZ0M7T0FBWCxDQUF2QixDQURxQjs7OztTQW5CbkI7RUFBYTs7QUE0Qm5CLEtBQUssS0FBTCxHQUFhLFVBQVMsa0JBQVQsRUFBNkI7QUFDeEMsU0FBTyxRQUFRLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLGtCQUFwQixDQUFQLENBRHdDO0NBQTdCOztBQUliLEtBQUssUUFBTCxHQUFnQixVQUFTLElBQVQsRUFBZTtBQUM3QixTQUFPLFFBQVEsUUFBUixDQUFpQixJQUFqQixFQUF1QixJQUF2QixDQUFQLENBRDZCO0NBQWY7O0FBSWhCLEtBQUssY0FBTCxHQUFzQixVQUFTLFVBQVQsRUFBcUI7QUFDekMsU0FBTyxRQUFRLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsVUFBN0IsQ0FBUCxDQUR5QztDQUFyQjs7QUFJdEIsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gICAgaWYgKHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3Rvck9yJEVsZW1lbnQgPSAnYm9keSc7XG4gICAgfVxuXG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gQm9keS5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfVxuXG4gIG9uQ2xpY2soaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgb25Eb3VibGVDbGljayhoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5kYmxjbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cbn1cblxuQm9keS5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBzZWxlY3Rvck9yJEVsZW1lbnQpO1xufTtcblxuQm9keS5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQm9keSwgaHRtbCk7XG59O1xuXG5Cb2R5LmZyb21ET01FbGVtZW50ID0gZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCb2R5LCBkb21FbGVtZW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiJdfQ==
