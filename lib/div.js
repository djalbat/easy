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

module.exports = Div;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kaXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUU7OztBQUNKLFdBREksR0FDSixDQUFZLGtCQUFaLEVBQWdDOzBCQUQ1QixLQUM0Qjs7a0VBRDVCLGdCQUVJLHFCQUR3QjtHQUFoQzs7ZUFESTs7NEJBS0k7QUFBRSxhQUFPLElBQUksS0FBSixDQUFVLEtBQUssUUFBTCxDQUFqQixDQUFGOzs7O1NBTEo7RUFBWTs7QUFRbEIsSUFBSSxLQUFKLEdBQVksVUFBUyxrQkFBVCxFQUE2QjtBQUN2QyxTQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsRUFBbUIsa0JBQW5CLENBQVAsQ0FEdUM7Q0FBN0I7O0FBSVosSUFBSSxRQUFKLEdBQWUsVUFBUyxJQUFULEVBQWU7QUFDNUIsU0FBTyxRQUFRLFFBQVIsQ0FBaUIsR0FBakIsRUFBc0IsSUFBdEIsQ0FBUCxDQUQ0QjtDQUFmOztBQUlmLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJkaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcy4kZWxlbWVudCk7IH1cbn1cblxuRGl2LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKERpdiwgc2VsZWN0b3JPciRFbGVtZW50KTtcbn07XG5cbkRpdi5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGl2O1xuIl19
