'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Button = function (_Element) {
  _inherits(Button, _Element);

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
}(Element);

Button.clone = function (selectorOr$Element, clickHandler) {
  return Element.clone(Button, selectorOr$Element, clickHandler);
};

Button.fromHTML = function (html, clickHandler) {
  return Element.fromHTML(Button, html, clickHandler);
};

module.exports = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksTUFDSixDQUFZLGtCQUFaLEVBQWdDLFlBQWhDLEVBQThDOzBCQUQxQyxRQUMwQzs7dUVBRDFDLG1CQUVJLHFCQURzQzs7QUFHNUMsUUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUssT0FBTCxDQUFhLFlBQWIsRUFEZ0I7S0FBbEI7aUJBSDRDO0dBQTlDOztlQURJOzswQkFTRSxjQUFjO0FBQUUsYUFBTyxPQUFPLEtBQVAsQ0FBYSxLQUFLLFFBQUwsRUFBZSxZQUE1QixDQUFQLENBQUY7Ozs7NEJBRVosU0FBUztBQUNmLFdBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsWUFBVztBQUM3QixrQkFENkI7O0FBRzdCLGVBQU8sS0FBUCxDQUg2QjtPQUFYLENBQXBCLENBRGU7Ozs7a0NBUUgsU0FBUztBQUNyQixXQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFlBQVc7QUFDaEMsa0JBRGdDOztBQUdoQyxlQUFPLEtBQVAsQ0FIZ0M7T0FBWCxDQUF2QixDQURxQjs7OztTQW5CbkI7RUFBZTs7QUE0QnJCLE9BQU8sS0FBUCxHQUFlLFVBQVMsa0JBQVQsRUFBNkIsWUFBN0IsRUFBMkM7QUFDeEQsU0FBTyxRQUFRLEtBQVIsQ0FBYyxNQUFkLEVBQXNCLGtCQUF0QixFQUEwQyxZQUExQyxDQUFQLENBRHdEO0NBQTNDOztBQUlmLE9BQU8sUUFBUCxHQUFrQixVQUFTLElBQVQsRUFBZSxZQUFmLEVBQTZCO0FBQzdDLFNBQU8sUUFBUSxRQUFSLENBQWlCLE1BQWpCLEVBQXlCLElBQXpCLEVBQStCLFlBQS9CLENBQVAsQ0FENkM7Q0FBN0I7O0FBSWxCLE9BQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLiRlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBvbkRvdWJsZUNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmRibGNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxufVxuXG5CdXR0b24uY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5jbG9uZShCdXR0b24sIHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbkJ1dHRvbi5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcbiJdfQ==