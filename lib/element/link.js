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
  hrefAttribute = link.getAttribute('href'),
      href = hrefAttribute; ///

  clickHandler.call(element, href, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2xpbmsuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJMaW5rIiwic2VsZWN0b3IiLCJjbGlja0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xvbmUiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwib24iLCJvZmYiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImxpbmsiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImhyZWZBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJocmVmIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLEk7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLDRHQUM1QkQsUUFENEI7O0FBR2xDLFFBQUlDLGlCQUFpQkMsU0FBckIsRUFBZ0M7QUFDOUIsWUFBS0MsT0FBTCxDQUFhRixZQUFiO0FBQ0Q7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLEtBQUtLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCSCxZQUFqQixDQUFQO0FBQXdDOzs7NEJBRXREQSxZLEVBQWNJLE0sRUFBb0U7QUFBQSxVQUE1REMsd0JBQTRELHVFQUFqQ0MsK0JBQWlDOztBQUN4RixXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQlAsWUFBakIsRUFBK0JJLE1BQS9CLEVBQXVDQyx3QkFBdkM7QUFDRDs7OzZCQUVRTCxZLEVBQWNJLE0sRUFBUTtBQUM3QixXQUFLSSxHQUFMLENBQVMsT0FBVCxFQUFrQlIsWUFBbEIsRUFBZ0NJLE1BQWhDO0FBQ0Q7OzswQkFFWUssTyxFQUFTVCxZLEVBQWM7QUFBRSxhQUFPSixRQUFRTyxLQUFSLENBQWNMLElBQWQsRUFBb0JXLE9BQXBCLEVBQTZCVCxZQUE3QixDQUFQO0FBQW9EOzs7NkJBRTFFVSxJLEVBQU1WLFksRUFBYztBQUFFLGFBQU9KLFFBQVFlLFFBQVIsQ0FBaUJiLElBQWpCLEVBQXVCWSxJQUF2QixFQUE2QlYsWUFBN0IsQ0FBUDtBQUFvRDs7O21DQUVwRVksVSxFQUFZWixZLEVBQWM7QUFBRSxhQUFPSixRQUFRaUIsY0FBUixDQUF1QmYsSUFBdkIsRUFBNkJjLFVBQTdCLEVBQXlDWixZQUF6QyxDQUFQO0FBQWdFOzs7bUNBRTVGYyxVLEVBQVk7QUFDMUIsVUFBRVosT0FBRixHQUFjWSxVQUFkLENBQUVaLE9BQUY7QUFBQSxVQUNBRixZQURBLEdBQ2VFLE9BRGY7QUFBQSxVQUVBYSxJQUZBLEdBRU9uQixRQUFRb0IsY0FBUixDQUF1QmxCLElBQXZCLEVBQTZCZ0IsVUFBN0IsRUFBeUNkLFlBQXpDLENBRlA7OztBQUlOLGFBQU9lLElBQVA7QUFDRDs7OztFQS9CZ0JuQixPOztBQWtDbkJxQixPQUFPQyxNQUFQLENBQWNwQixJQUFkLEVBQW9CO0FBQ2xCcUIsV0FBUyxHQURTO0FBRWxCQyxxQkFBbUIsQ0FDakIsU0FEaUI7QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQnhCLElBQWpCOztBQUVBLFNBQVNRLCtCQUFULENBQXlDTixZQUF6QyxFQUF1RHVCLEtBQXZELEVBQThEZCxPQUE5RCxFQUF1RTtBQUNyRSxNQUFNTSxPQUFPTixPQUFiO0FBQUEsTUFBc0I7QUFDaEJlLGtCQUFnQlQsS0FBS1UsWUFBTCxDQUFrQixNQUFsQixDQUR0QjtBQUFBLE1BRU1DLE9BQU9GLGFBRmIsQ0FEcUUsQ0FHekM7O0FBRTVCeEIsZUFBYTJCLElBQWIsQ0FBa0JsQixPQUFsQixFQUEyQmlCLElBQTNCLEVBQWlDSCxLQUFqQyxFQUF3Q2QsT0FBeEM7QUFDRCIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljaywgLy8vXG4gICAgICAgICAgbGluayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gbGluaztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExpbmssIHtcbiAgdGFnTmFtZTogJ2EnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgbGluayA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBocmVmQXR0cmlidXRlID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgaHJlZiA9IGhyZWZBdHRyaWJ1dGU7IC8vL1xuICBcbiAgY2xpY2tIYW5kbGVyLmNhbGwoZWxlbWVudCwgaHJlZiwgZXZlbnQsIGVsZW1lbnQpO1xufSJdfQ==