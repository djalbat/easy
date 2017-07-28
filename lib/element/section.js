'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Section = function (_Element) {
  _inherits(Section, _Element);

  function Section(selector) {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).call(this, selector));
  }

  _createClass(Section, [{
    key: 'clone',
    value: function clone() {
      return Section.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Section, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Section, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Section, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Section, properties);
    }
  }]);

  return Section;
}(Element);

Object.assign(Section, {
  tagName: 'div'
});

module.exports = Section;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NlY3Rpb24uanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJTZWN0aW9uIiwic2VsZWN0b3IiLCJjbG9uZSIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLE87WUFBQUEsTzs7QUFDSixXQURJQSxPQUNKLENBQVlDLFFBQVosRUFBc0I7QUFBQSwwQkFEbEJELE9BQ2tCOztBQUFBLGtFQURsQkEsT0FDa0IsYUFDZEMsUUFEYztBQUVyQjs7ZUFIR0QsTzs7NEJBS0k7QUFBRSxhQUFPQSxRQUFRRSxLQUFSLENBQWMsSUFBZCxDQUFQO0FBQTZCOzs7MEJBRTFCQyxPLEVBQVM7QUFBRSxhQUFPTCxRQUFRSSxLQUFSLENBQWNGLE9BQWQsRUFBdUJHLE9BQXZCLENBQVA7QUFBeUM7Ozs2QkFFakRDLEksRUFBTTtBQUFFLGFBQU9OLFFBQVFPLFFBQVIsQ0FBaUJMLE9BQWpCLEVBQTBCSSxJQUExQixDQUFQO0FBQXlDOzs7bUNBRTNDRSxVLEVBQVk7QUFBRSxhQUFPUixRQUFRUyxjQUFSLENBQXVCUCxPQUF2QixFQUFnQ00sVUFBaEMsQ0FBUDtBQUFxRDs7O21DQUVuRUUsVSxFQUFZO0FBQUUsYUFBT1YsUUFBUVcsY0FBUixDQUF1QlQsT0FBdkIsRUFBZ0NRLFVBQWhDLENBQVA7QUFBcUQ7OztTQWJyRlIsTztFQUFnQkYsTzs7QUFnQnRCWSxPQUFPQyxNQUFQLENBQWNYLE9BQWQsRUFBdUI7QUFDckJZLFdBQVM7QUFEWSxDQUF2Qjs7QUFJQUMsT0FBT0MsT0FBUCxHQUFpQmQsT0FBakIiLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gU2VjdGlvbi5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmNsb25lKFNlY3Rpb24sIGVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VjdGlvbiwgaHRtbCk7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWN0aW9uLCBkb21FbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlY3Rpb24sIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2VjdGlvbiwge1xuICB0YWdOYW1lOiAnZGl2J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VjdGlvbjtcbiJdfQ==