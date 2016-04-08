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

module.exports = Body;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9ib2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLElBQ0osQ0FBWSxrQkFBWixFQUFnQzswQkFENUIsTUFDNEI7O0FBQzlCLFFBQUksdUJBQXVCLFNBQXZCLEVBQWtDO0FBQ3BDLDJCQUFxQixNQUFyQixDQURvQztLQUF0Qzs7a0VBRkUsaUJBTUkscUJBTHdCO0dBQWhDOztlQURJOzs0QkFTSTtBQUFFLGFBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxRQUFMLENBQWxCLENBQUY7Ozs7NEJBRUEsU0FBUztBQUNmLFdBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsWUFBVztBQUM3QixrQkFENkI7O0FBRzdCLGVBQU8sS0FBUCxDQUg2QjtPQUFYLENBQXBCLENBRGU7Ozs7a0NBUUgsU0FBUztBQUNyQixXQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFlBQVc7QUFDaEMsa0JBRGdDOztBQUdoQyxlQUFPLEtBQVAsQ0FIZ0M7T0FBWCxDQUF2QixDQURxQjs7OztTQW5CbkI7RUFBYTs7QUE0Qm5CLEtBQUssS0FBTCxHQUFhLFVBQVMsa0JBQVQsRUFBNkI7QUFDeEMsU0FBTyxRQUFRLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLGtCQUFwQixDQUFQLENBRHdDO0NBQTdCOztBQUliLEtBQUssUUFBTCxHQUFnQixVQUFTLElBQVQsRUFBZTtBQUM3QixTQUFPLFFBQVEsUUFBUixDQUFpQixJQUFqQixFQUF1QixJQUF2QixDQUFQLENBRDZCO0NBQWY7O0FBSWhCLE9BQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJib2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICAgIGlmIChzZWxlY3Rvck9yJEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3JPciRFbGVtZW50ID0gJ2JvZHknO1xuICAgIH1cblxuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcy4kZWxlbWVudCk7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxuXG4gIG9uRG91YmxlQ2xpY2soaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59XG5cbkJvZHkuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQm9keSwgc2VsZWN0b3JPciRFbGVtZW50KTtcbn07XG5cbkJvZHkuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJvZHksIGh0bWwpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIl19
