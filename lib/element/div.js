'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Div = function (_Element) {
  _inherits(Div, _Element);

  function Div(selector) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, selector));
  }

  _createClass(Div, [{
    key: 'clone',
    value: function clone() {
      return Div.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement) {
      return Element.clone(Div, selectorOrElement);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Div, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Div, domElement);
    }
  }]);

  return Div;
}(Element);

module.exports = Div;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Rpdi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpdiIsInNlbGVjdG9yIiwiY2xvbmUiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxZQUFSLENBQWQ7O0lBRU1DLEc7OztBQUNKLGVBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSxxR0FDZEEsUUFEYztBQUVyQjs7Ozs0QkFFTztBQUFFLGFBQU9ELElBQUlFLEtBQUosQ0FBVSxJQUFWLENBQVA7QUFBeUI7OzswQkFFdEJDLGlCLEVBQW1CO0FBQzlCLGFBQU9MLFFBQVFJLEtBQVIsQ0FBY0YsR0FBZCxFQUFtQkcsaUJBQW5CLENBQVA7QUFDRDs7OzZCQUVlQyxJLEVBQU07QUFDcEIsYUFBT04sUUFBUU8sUUFBUixDQUFpQkwsR0FBakIsRUFBc0JJLElBQXRCLENBQVA7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLGFBQU9SLFFBQVFTLGNBQVIsQ0FBdUJQLEdBQXZCLEVBQTRCTSxVQUE1QixDQUFQO0FBQ0Q7Ozs7RUFqQmVSLE87O0FBb0JsQlUsT0FBT0MsT0FBUCxHQUFpQlQsR0FBakIiLCJmaWxlIjoiZGl2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoRGl2LCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpdjtcbiJdfQ==