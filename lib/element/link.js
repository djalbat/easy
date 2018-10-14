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
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;

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

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var link = element,
      ///
  href = link.getAttribute('href');

  clickHandler.call(link, href, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2xpbmsuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJMaW5rIiwic2VsZWN0b3IiLCJjbGlja0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xvbmUiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwib24iLCJvZmYiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImxpbmsiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsSTs7O0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsNEdBQzVCRCxRQUQ0Qjs7QUFHbEMsUUFBSUMsaUJBQWlCQyxTQUFyQixFQUFnQztBQUM5QixZQUFLQyxPQUFMLENBQWFGLFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsS0FBS0ssS0FBTCxDQUFXLElBQVgsRUFBaUJILFlBQWpCLENBQVA7QUFBd0M7Ozs0QkFFdERBLFksRUFBY0ksTSxFQUFvRTtBQUFBLFVBQTVEQyx3QkFBNEQsdUVBQWpDQywrQkFBaUM7O0FBQ3hGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCUCxZQUFqQixFQUErQkksTUFBL0IsRUFBdUNDLHdCQUF2QztBQUNEOzs7NkJBRVFMLFksRUFBY0ksTSxFQUFRO0FBQzdCLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCUixZQUFsQixFQUFnQ0ksTUFBaEM7QUFDRDs7OzBCQUVZSyxPLEVBQVNULFksRUFBYztBQUFFLGFBQU9KLFFBQVFPLEtBQVIsQ0FBY0wsSUFBZCxFQUFvQlcsT0FBcEIsRUFBNkJULFlBQTdCLENBQVA7QUFBb0Q7Ozs2QkFFMUVVLEksRUFBTVYsWSxFQUFjO0FBQUUsYUFBT0osUUFBUWUsUUFBUixDQUFpQmIsSUFBakIsRUFBdUJZLElBQXZCLEVBQTZCVixZQUE3QixDQUFQO0FBQW9EOzs7bUNBRXBFWSxVLEVBQVlaLFksRUFBYztBQUFFLGFBQU9KLFFBQVFpQixjQUFSLENBQXVCZixJQUF2QixFQUE2QmMsVUFBN0IsRUFBeUNaLFlBQXpDLENBQVA7QUFBZ0U7OzttQ0FFNUZjLFUsRUFBWTtBQUMxQixVQUFFWixPQUFGLEdBQWNZLFVBQWQsQ0FBRVosT0FBRjtBQUFBLFVBQ0FGLFlBREEsR0FDZUUsT0FEZjtBQUFBLFVBRUFhLElBRkEsR0FFT25CLFFBQVFvQixjQUFSLENBQXVCbEIsSUFBdkIsRUFBNkJnQixVQUE3QixFQUF5Q2QsWUFBekMsQ0FGUDs7O0FBSU4sYUFBT2UsSUFBUDtBQUNEOzs7O0VBL0JnQm5CLE87O0FBa0NuQnFCLE9BQU9DLE1BQVAsQ0FBY3BCLElBQWQsRUFBb0I7QUFDbEJxQixXQUFTLEdBRFM7QUFFbEJDLHFCQUFtQixDQUNqQixTQURpQjtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCeEIsSUFBakI7O0FBRUEsU0FBU1EsK0JBQVQsQ0FBeUNOLFlBQXpDLEVBQXVEdUIsS0FBdkQsRUFBOERkLE9BQTlELEVBQXVFO0FBQ3JFLE1BQU1NLE9BQU9OLE9BQWI7QUFBQSxNQUFzQjtBQUNoQmUsU0FBT1QsS0FBS1UsWUFBTCxDQUFrQixNQUFsQixDQURiOztBQUdBekIsZUFBYTBCLElBQWIsQ0FBa0JYLElBQWxCLEVBQXdCUyxJQUF4QixFQUE4QkQsS0FBOUI7QUFDRCIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljaywgLy8vXG4gICAgICAgICAgbGluayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gbGluaztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExpbmssIHtcbiAgdGFnTmFtZTogJ2EnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgbGluayA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgXG4gIGNsaWNrSGFuZGxlci5jYWxsKGxpbmssIGhyZWYsIGV2ZW50KTtcbn0iXX0=