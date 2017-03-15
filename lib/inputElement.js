'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector) {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));
  }

  _createClass(InputElement, [{
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.clone.apply(Element, [Class, element].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement.apply(Element, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, handlers = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        handlers[_key4 - 2] = arguments[_key4];
      }

      var handlerNames = handlers.map(function (handler) {
        var handlerName = handler.name; ///

        delete properties[handlerName];

        return handlerName;
      });

      var inputElement = Element.fromProperties(Class, properties);

      handlers.forEach(function (handler, index) {
        var handlerName = handlerNames[index];

        inputElement[handlerName](handler); ///
      });

      return inputElement;
    }
  }]);

  return InputElement;
}(Element);

module.exports = InputElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJzZWxlY3RvciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsIkNsYXNzIiwiZWxlbWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNsb25lIiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiaGFuZGxlcnMiLCJoYW5kbGVyTmFtZXMiLCJtYXAiLCJoYW5kbGVyIiwiaGFuZGxlck5hbWUiLCJuYW1lIiwiaW5wdXRFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjs7SUFFTUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx1SEFDZEEsUUFEYztBQUVyQjs7OzsrQkFFVTtBQUNULFVBQU1DLFFBQVNDLFNBQVNDLGFBQVQsS0FBMkIsS0FBS0MsVUFBL0MsQ0FEUyxDQUNvRDs7QUFFN0QsYUFBT0gsS0FBUDtBQUNEOzs7NEJBRU87QUFBRSxXQUFLRyxVQUFMLENBQWdCSCxLQUFoQjtBQUEwQjs7OzBCQUV2QkksSyxFQUFPQyxPLEVBQWdDO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUNsRCxhQUFPVixRQUFRVyxLQUFSLGlCQUFjSCxLQUFkLEVBQXFCQyxPQUFyQixTQUFpQ0Msa0JBQWpDLEVBQVA7QUFDRDs7OzZCQUVlRixLLEVBQU9JLEksRUFBNkI7QUFBQSx5Q0FBcEJGLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQ2xELGFBQU9WLFFBQVFhLFFBQVIsaUJBQWlCTCxLQUFqQixFQUF3QkksSUFBeEIsU0FBaUNGLGtCQUFqQyxFQUFQO0FBQ0Q7OzttQ0FFcUJGLEssRUFBT0QsVSxFQUFtQztBQUFBLHlDQUFwQkcsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDOUQsYUFBT1YsUUFBUWMsY0FBUixpQkFBdUJOLEtBQXZCLEVBQThCRCxVQUE5QixTQUE2Q0csa0JBQTdDLEVBQVA7QUFDRDs7O21DQUVxQkYsSyxFQUFPTyxVLEVBQXlCO0FBQUEseUNBQVZDLFFBQVU7QUFBVkEsZ0JBQVU7QUFBQTs7QUFDcEQsVUFBTUMsZUFBZUQsU0FBU0UsR0FBVCxDQUFhLFVBQVNDLE9BQVQsRUFBa0I7QUFDbEQsWUFBTUMsY0FBY0QsUUFBUUUsSUFBNUIsQ0FEa0QsQ0FDaEI7O0FBRWxDLGVBQU9OLFdBQVdLLFdBQVgsQ0FBUDs7QUFFQSxlQUFPQSxXQUFQO0FBQ0QsT0FOb0IsQ0FBckI7O0FBUUEsVUFBTUUsZUFBZXRCLFFBQVF1QixjQUFSLENBQXVCZixLQUF2QixFQUE4Qk8sVUFBOUIsQ0FBckI7O0FBRUFDLGVBQVNRLE9BQVQsQ0FBaUIsVUFBU0wsT0FBVCxFQUFrQk0sS0FBbEIsRUFBeUI7QUFDeEMsWUFBTUwsY0FBY0gsYUFBYVEsS0FBYixDQUFwQjs7QUFFQUgscUJBQWFGLFdBQWIsRUFBMEJELE9BQTFCLEVBSHdDLENBR0o7QUFDckMsT0FKRDs7QUFNQSxhQUFPRyxZQUFQO0FBQ0Q7Ozs7RUEzQ3dCdEIsTzs7QUE4QzNCMEIsT0FBT0MsT0FBUCxHQUFpQnpCLFlBQWpCIiwiZmlsZSI6ImlucHV0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLmhhbmRsZXJzKSB7XG4gICAgY29uc3QgaGFuZGxlck5hbWVzID0gaGFuZGxlcnMubWFwKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlci5uYW1lOyAvLy9cbiAgICAgIFxuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbaGFuZGxlck5hbWVdO1xuICAgICAgXG4gICAgICByZXR1cm4gaGFuZGxlck5hbWU7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgXG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyLCBpbmRleCkge1xuICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyTmFtZXNbaW5kZXhdO1xuICAgICAgXG4gICAgICBpbnB1dEVsZW1lbnRbaGFuZGxlck5hbWVdKGhhbmRsZXIpOyAvLy9cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gaW5wdXRFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbGVtZW50O1xuIl19