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
    value: function clone(element) {
      return Element.clone(Div, element);
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
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Div, properties);
    }
  }]);

  return Div;
}(Element);

Object.assign(Div, {
  tagName: 'div'
});

module.exports = Div;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Rpdi5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkRpdiIsInNlbGVjdG9yIiwiY2xvbmUiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxHOzs7QUFDSixlQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUEscUdBQ2RBLFFBRGM7QUFFckI7Ozs7NEJBRU87QUFBRSxhQUFPRCxJQUFJRSxLQUFKLENBQVUsSUFBVixDQUFQO0FBQXlCOzs7MEJBRXRCQyxPLEVBQVM7QUFBRSxhQUFPTCxRQUFRSSxLQUFSLENBQWNGLEdBQWQsRUFBbUJHLE9BQW5CLENBQVA7QUFBcUM7Ozs2QkFFN0NDLEksRUFBTTtBQUFFLGFBQU9OLFFBQVFPLFFBQVIsQ0FBaUJMLEdBQWpCLEVBQXNCSSxJQUF0QixDQUFQO0FBQXFDOzs7bUNBRXZDRSxVLEVBQVk7QUFBRSxhQUFPUixRQUFRUyxjQUFSLENBQXVCUCxHQUF2QixFQUE0Qk0sVUFBNUIsQ0FBUDtBQUFpRDs7O21DQUUvREUsVSxFQUFZO0FBQUUsYUFBT1YsUUFBUVcsY0FBUixDQUF1QlQsR0FBdkIsRUFBNEJRLFVBQTVCLENBQVA7QUFBaUQ7Ozs7RUFickVWLE87O0FBZ0JsQlksT0FBT0MsTUFBUCxDQUFjWCxHQUFkLEVBQW1CO0FBQ2pCWSxXQUFTO0FBRFEsQ0FBbkI7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUJkLEdBQWpCIiwiZmlsZSI6ImRpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KERpdiwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhEaXYsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2LCB7XG4gIHRhZ05hbWU6ICdkaXYnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXY7XG4iXX0=