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

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

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
    value: function onClick(clickHandler) {
      var intermediateClickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateClickHandler;

      this.on('click', clickHandler, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler) {
      this.off('click', clickHandler);
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
      var onClick = properties.onClick,
          clickHandler = onClick,
          link = Element.fromProperties(Link, properties, clickHandler);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2xpbmsuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJMaW5rIiwic2VsZWN0b3IiLCJjbGlja0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xvbmUiLCJpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwib24iLCJvZmYiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImxpbmsiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsSTs7O0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsNEdBQzVCRCxRQUQ0Qjs7QUFHbEMsUUFBSUMsaUJBQWlCQyxTQUFyQixFQUFnQztBQUM5QixZQUFLQyxPQUFMLENBQWFGLFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsS0FBS0ssS0FBTCxDQUFXLElBQVgsRUFBaUJILFlBQWpCLENBQVA7QUFBd0M7Ozs0QkFFdERBLFksRUFBMEU7QUFBQSxVQUE1REksd0JBQTRELHVFQUFqQ0MsK0JBQWlDOztBQUNoRixXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQk4sWUFBakIsRUFBK0JJLHdCQUEvQjtBQUNEOzs7NkJBRVFKLFksRUFBYztBQUNyQixXQUFLTyxHQUFMLENBQVMsT0FBVCxFQUFrQlAsWUFBbEI7QUFDRDs7OzBCQUVZUSxPLEVBQVNSLFksRUFBYztBQUFFLGFBQU9KLFFBQVFPLEtBQVIsQ0FBY0wsSUFBZCxFQUFvQlUsT0FBcEIsRUFBNkJSLFlBQTdCLENBQVA7QUFBb0Q7Ozs2QkFFMUVTLEksRUFBTVQsWSxFQUFjO0FBQUUsYUFBT0osUUFBUWMsUUFBUixDQUFpQlosSUFBakIsRUFBdUJXLElBQXZCLEVBQTZCVCxZQUE3QixDQUFQO0FBQW9EOzs7bUNBRXBFVyxVLEVBQVlYLFksRUFBYztBQUFFLGFBQU9KLFFBQVFnQixjQUFSLENBQXVCZCxJQUF2QixFQUE2QmEsVUFBN0IsRUFBeUNYLFlBQXpDLENBQVA7QUFBZ0U7OzttQ0FFNUZhLFUsRUFBWTtBQUMxQixVQUFFWCxPQUFGLEdBQWNXLFVBQWQsQ0FBRVgsT0FBRjtBQUFBLFVBQ0FGLFlBREEsR0FDZUUsT0FEZjtBQUFBLFVBRUFZLElBRkEsR0FFT2xCLFFBQVFtQixjQUFSLENBQXVCakIsSUFBdkIsRUFBNkJlLFVBQTdCLEVBQXlDYixZQUF6QyxDQUZQOzs7QUFJTixhQUFPYyxJQUFQO0FBQ0Q7Ozs7RUEvQmdCbEIsTzs7QUFrQ25Cb0IsT0FBT0MsTUFBUCxDQUFjbkIsSUFBZCxFQUFvQjtBQUNsQm9CLFdBQVMsR0FEUztBQUVsQkMscUJBQW1CLENBQ2pCLFNBRGlCO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJ2QixJQUFqQjs7QUFFQSxTQUFTTywrQkFBVCxDQUF5Q0wsWUFBekMsRUFBdURzQixLQUF2RCxFQUE4REMsYUFBOUQsRUFBNkU7QUFDM0UsTUFBTVQsT0FBT1MsYUFBYjtBQUFBLE1BQTRCO0FBQ3RCQyxTQUFPVixLQUFLVyxZQUFMLENBQWtCLE1BQWxCLENBRGI7O0FBR0F6QixlQUFhd0IsSUFBYixFQUFtQkYsS0FBbkIsRUFBMEJDLGFBQTFCO0FBQ0QiLCJmaWxlIjoibGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgTGluayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBsaW5rID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhMaW5rLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBsaW5rO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGluaywge1xuICB0YWdOYW1lOiAnYScsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2xpY2snXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBsaW5rID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBcbiAgY2xpY2tIYW5kbGVyKGhyZWYsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn0iXX0=