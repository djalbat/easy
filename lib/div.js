'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Div = function (_Element) {
  _inherits(Div, _Element);

  function Div(selectorOr$Element) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Div).call(this, selectorOr$Element));
  }

  _createClass(Div, [{
    key: 'clone',
    value: function clone() {
      return Div.clone(this.$element);
    }
  }]);

  return Div;
}(Element);

Div.clone = function (selectorOr$Element) {
  return Element.clone(Div, selectorOr$Element);
};

Div.fromHTML = function (html) {
  return Element.fromHTML(Div, html);
};

Div.fromDOMElement = function (domElement) {
  return Element.fromDOMElement(Div, domElement);
};

module.exports = Div;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kaXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksR0FDSixDQUFZLGtCQUFaLEVBQWdDOzBCQUQ1QixLQUM0Qjs7a0VBRDVCLGdCQUVJLHFCQUR3QjtHQUFoQzs7ZUFESTs7NEJBS0k7QUFBRSxhQUFPLElBQUksS0FBSixDQUFVLEtBQUssUUFBTCxDQUFqQixDQUFGOzs7O1NBTEo7RUFBWTs7QUFRbEIsSUFBSSxLQUFKLEdBQVksVUFBUyxrQkFBVCxFQUE2QjtBQUN2QyxTQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsRUFBbUIsa0JBQW5CLENBQVAsQ0FEdUM7Q0FBN0I7O0FBSVosSUFBSSxRQUFKLEdBQWUsVUFBUyxJQUFULEVBQWU7QUFDNUIsU0FBTyxRQUFRLFFBQVIsQ0FBaUIsR0FBakIsRUFBc0IsSUFBdEIsQ0FBUCxDQUQ0QjtDQUFmOztBQUlmLElBQUksY0FBSixHQUFxQixVQUFTLFVBQVQsRUFBcUI7QUFDeEMsU0FBTyxRQUFRLGNBQVIsQ0FBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBUCxDQUR3QztDQUFyQjs7QUFJckIsT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImRpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIERpdi5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfVxufVxuXG5EaXYuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoRGl2LCBzZWxlY3Rvck9yJEVsZW1lbnQpO1xufTtcblxuRGl2LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChEaXYsIGh0bWwpO1xufTtcblxuRGl2LmZyb21ET01FbGVtZW50ID0gZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChEaXYsIGRvbUVsZW1lbnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXY7XG4iXX0=
