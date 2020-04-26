"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

var Section = /*#__PURE__*/function (_Element) {
  _inherits(Section, _Element);

  function Section(selector) {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, _getPrototypeOf(Section).call(this, selector));
  }

  _createClass(Section, [{
    key: "clone",
    value: function clone() {
      return Section.clone(this);
    }
  }], [{
    key: "clone",
    value: function clone(element) {
      return Element.clone(Section, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return Element.fromHTML(Section, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Section, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Element.fromProperties(Section, properties);
    }
  }]);

  return Section;
}(Element);

Object.assign(Section, {
  tagName: "div"
});
module.exports = Section;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24uanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJTZWN0aW9uIiwic2VsZWN0b3IiLCJjbG9uZSIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF2Qjs7SUFFTUMsTzs7O0FBQ0osbUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSxnRkFDZEEsUUFEYztBQUVyQjs7Ozs0QkFFTztBQUFFLGFBQU9ELE9BQU8sQ0FBQ0UsS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzBCQUUxQkMsTyxFQUFTO0FBQUUsYUFBT0wsT0FBTyxDQUFDSSxLQUFSLENBQWNGLE9BQWQsRUFBdUJHLE9BQXZCLENBQVA7QUFBeUM7Ozs2QkFFakRDLEksRUFBTTtBQUFFLGFBQU9OLE9BQU8sQ0FBQ08sUUFBUixDQUFpQkwsT0FBakIsRUFBMEJJLElBQTFCLENBQVA7QUFBeUM7OzttQ0FFM0NFLFUsRUFBWTtBQUFFLGFBQU9SLE9BQU8sQ0FBQ1MsY0FBUixDQUF1QlAsT0FBdkIsRUFBZ0NNLFVBQWhDLENBQVA7QUFBcUQ7OzttQ0FFbkVFLFUsRUFBWTtBQUFFLGFBQU9WLE9BQU8sQ0FBQ1csY0FBUixDQUF1QlQsT0FBdkIsRUFBZ0NRLFVBQWhDLENBQVA7QUFBcUQ7Ozs7RUFickVWLE87O0FBZ0J0QlksTUFBTSxDQUFDQyxNQUFQLENBQWNYLE9BQWQsRUFBdUI7QUFDckJZLEVBQUFBLE9BQU8sRUFBRTtBQURZLENBQXZCO0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsT0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpO1xuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBTZWN0aW9uLmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VjdGlvbiwgZWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTZWN0aW9uLCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlY3Rpb24sIGRvbUVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2VjdGlvbiwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWN0aW9uLCB7XG4gIHRhZ05hbWU6IFwiZGl2XCJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlY3Rpb247XG4iXX0=