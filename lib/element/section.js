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

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, selector));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NlY3Rpb24uanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJTZWN0aW9uIiwic2VsZWN0b3IiLCJjbG9uZSIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLE87OztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUEsNkdBQ2RBLFFBRGM7QUFFckI7Ozs7NEJBRU87QUFBRSxhQUFPRCxRQUFRRSxLQUFSLENBQWMsSUFBZCxDQUFQO0FBQTZCOzs7MEJBRTFCQyxPLEVBQVM7QUFBRSxhQUFPTCxRQUFRSSxLQUFSLENBQWNGLE9BQWQsRUFBdUJHLE9BQXZCLENBQVA7QUFBeUM7Ozs2QkFFakRDLEksRUFBTTtBQUFFLGFBQU9OLFFBQVFPLFFBQVIsQ0FBaUJMLE9BQWpCLEVBQTBCSSxJQUExQixDQUFQO0FBQXlDOzs7bUNBRTNDRSxVLEVBQVk7QUFBRSxhQUFPUixRQUFRUyxjQUFSLENBQXVCUCxPQUF2QixFQUFnQ00sVUFBaEMsQ0FBUDtBQUFxRDs7O21DQUVuRUUsVSxFQUFZO0FBQUUsYUFBT1YsUUFBUVcsY0FBUixDQUF1QlQsT0FBdkIsRUFBZ0NRLFVBQWhDLENBQVA7QUFBcUQ7Ozs7RUFickVWLE87O0FBZ0J0QlksT0FBT0MsTUFBUCxDQUFjWCxPQUFkLEVBQXVCO0FBQ3JCWSxXQUFTO0FBRFksQ0FBdkI7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUJkLE9BQWpCIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFNlY3Rpb24uY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShTZWN0aW9uLCBlbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNlY3Rpb24sIGh0bWwpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VjdGlvbiwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWN0aW9uLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFNlY3Rpb24sIHtcbiAgdGFnTmFtZTogJ2Rpdidcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlY3Rpb247XG4iXX0=