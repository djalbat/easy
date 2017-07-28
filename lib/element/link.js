'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Link = function (_Element) {
  _inherits(Link, _Element);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Link, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Link.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length <= 2 || arguments[2] === undefined ? defaultIntermediateClickHandler : arguments[2];

      this.on('click', clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler, object) {
      this.off('click', clickHandler, object);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return Element.clone(Link, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return Element.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick;
      var clickHandler = onClick; ///
      var link = Element.fromProperties(Link, properties, clickHandler);

      return link;
    }
  }]);

  return Link;
}(Element);

Object.assign(Link, {
  tagName: 'a',
  ignoredProperties: ['onClick']
});

module.exports = Link;

function defaultIntermediateClickHandler(clickHandler, event, targetElement) {
  var link = targetElement,
      ///
  href = link.getAttribute('href');

  clickHandler(href, event, targetElement);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2xpbmsuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJMaW5rIiwic2VsZWN0b3IiLCJjbGlja0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xvbmUiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwib24iLCJvZmYiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibGluayIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsSTtZQUFBQSxJOztBQUNKLFdBRElBLElBQ0osQ0FBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQSwwQkFEaENGLElBQ2dDOztBQUFBLHVFQURoQ0EsSUFDZ0MsYUFDNUJDLFFBRDRCOztBQUdsQyxRQUFJQyxpQkFBaUJDLFNBQXJCLEVBQWdDO0FBQzlCLFlBQUtDLE9BQUwsQ0FBYUYsWUFBYjtBQUNEO0FBTGlDO0FBTW5DOztlQVBHRixJOzswQkFTRUUsWSxFQUFjO0FBQUUsYUFBT0YsS0FBS0ssS0FBTCxDQUFXLElBQVgsRUFBaUJILFlBQWpCLENBQVA7QUFBd0M7Ozs0QkFFdERBLFksRUFBY0ksTSxFQUFvRTtBQUFBLFVBQTVEQyx3QkFBNEQseURBQWpDQywrQkFBaUM7O0FBQ3hGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCUCxZQUFqQixFQUErQkksTUFBL0IsRUFBdUNDLHdCQUF2QztBQUNEOzs7NkJBRVFMLFksRUFBY0ksTSxFQUFRO0FBQzdCLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCUixZQUFsQixFQUFnQ0ksTUFBaEM7QUFDRDs7OzBCQUVZSyxPLEVBQVNULFksRUFBYztBQUFFLGFBQU9KLFFBQVFPLEtBQVIsQ0FBY0wsSUFBZCxFQUFvQlcsT0FBcEIsRUFBNkJULFlBQTdCLENBQVA7QUFBb0Q7Ozs2QkFFMUVVLEksRUFBTVYsWSxFQUFjO0FBQUUsYUFBT0osUUFBUWUsUUFBUixDQUFpQmIsSUFBakIsRUFBdUJZLElBQXZCLEVBQTZCVixZQUE3QixDQUFQO0FBQW9EOzs7bUNBRXBFWSxVLEVBQVlaLFksRUFBYztBQUFFLGFBQU9KLFFBQVFpQixjQUFSLENBQXVCZixJQUF2QixFQUE2QmMsVUFBN0IsRUFBeUNaLFlBQXpDLENBQVA7QUFBZ0U7OzttQ0FFNUZjLFUsRUFBWTtBQUMxQixVQUFFWixPQUFGLEdBQWNZLFVBQWQsQ0FBRVosT0FBRjtBQUNBLHlCQUFlQSxPQUFmLENBRjBCLENBRUY7QUFDeEIsaUJBQU9OLFFBQVFtQixjQUFSLENBQXVCakIsSUFBdkIsRUFBNkJnQixVQUE3QixFQUF5Q2QsWUFBekMsQ0FBUDs7QUFFTixhQUFPZ0IsSUFBUDtBQUNEOzs7U0EvQkdsQixJO0VBQWFGLE87O0FBa0NuQnFCLE9BQU9DLE1BQVAsQ0FBY3BCLElBQWQsRUFBb0I7QUFDbEJxQixXQUFTLEdBRFM7QUFFbEJDLHFCQUFtQixDQUNqQixTQURpQjtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCeEIsSUFBakI7O0FBRUEsU0FBU1EsK0JBQVQsQ0FBeUNOLFlBQXpDLEVBQXVEdUIsS0FBdkQsRUFBOERDLGFBQTlELEVBQTZFO0FBQzNFLE1BQU1SLE9BQU9RLGFBQWI7QUFBQSxNQUE0QjtBQUN0QkMsU0FBT1QsS0FBS1UsWUFBTCxDQUFrQixNQUFsQixDQURiOztBQUdBMUIsZUFBYXlCLElBQWIsRUFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQjtBQUNEIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIsIG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBsaW5rID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhMaW5rLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBsaW5rO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGluaywge1xuICB0YWdOYW1lOiAnYScsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2xpY2snXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBsaW5rID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBcbiAgY2xpY2tIYW5kbGVyKGhyZWYsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn0iXX0=