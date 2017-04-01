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
          clickHandler = onClick; ///    

      return Element.fromProperties(Link, properties, clickHandler);
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
  href = link.getAttribute('href'),
      preventDefault = clickHandler(href, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2xpbmsuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJMaW5rIiwic2VsZWN0b3IiLCJjbGlja0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xvbmUiLCJpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyIiwib24iLCJvZmYiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsImxpbmsiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQSw0R0FDNUJELFFBRDRCOztBQUdsQyxRQUFJQyxpQkFBaUJDLFNBQXJCLEVBQWdDO0FBQzlCLFlBQUtDLE9BQUwsQ0FBYUYsWUFBYjtBQUNEO0FBTGlDO0FBTW5DOzs7OzBCQUVLQSxZLEVBQWM7QUFBRSxhQUFPRixLQUFLSyxLQUFMLENBQVcsSUFBWCxFQUFpQkgsWUFBakIsQ0FBUDtBQUF3Qzs7OzRCQUV0REEsWSxFQUEwRTtBQUFBLFVBQTVESSx3QkFBNEQsdUVBQWpDQywrQkFBaUM7O0FBQ2hGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCTixZQUFqQixFQUErQkksd0JBQS9CO0FBQ0Q7Ozs2QkFFUUosWSxFQUFjO0FBQ3JCLFdBQUtPLEdBQUwsQ0FBUyxPQUFULEVBQWtCUCxZQUFsQjtBQUNEOzs7MEJBRVlRLE8sRUFBU1IsWSxFQUFjO0FBQ2xDLGFBQU9KLFFBQVFPLEtBQVIsQ0FBY0wsSUFBZCxFQUFvQlUsT0FBcEIsRUFBNkJSLFlBQTdCLENBQVA7QUFDRDs7OzZCQUVlUyxJLEVBQU1ULFksRUFBYztBQUNsQyxhQUFPSixRQUFRYyxRQUFSLENBQWlCWixJQUFqQixFQUF1QlcsSUFBdkIsRUFBNkJULFlBQTdCLENBQVA7QUFDRDs7O21DQUVxQlcsVSxFQUFZWCxZLEVBQWM7QUFDOUMsYUFBT0osUUFBUWdCLGNBQVIsQ0FBdUJkLElBQXZCLEVBQTZCYSxVQUE3QixFQUF5Q1gsWUFBekMsQ0FBUDtBQUNEOzs7bUNBRXFCYSxVLEVBQVk7QUFDMUIsVUFBRVgsT0FBRixHQUFjVyxVQUFkLENBQUVYLE9BQUY7QUFBQSxVQUNBRixZQURBLEdBQ2VFLE9BRGYsQ0FEMEIsQ0FFRjs7QUFFOUIsYUFBT04sUUFBUWtCLGNBQVIsQ0FBdUJoQixJQUF2QixFQUE2QmUsVUFBN0IsRUFBeUNiLFlBQXpDLENBQVA7QUFDRDs7OztFQXBDZ0JKLE87O0FBdUNuQm1CLE9BQU9DLE1BQVAsQ0FBY2xCLElBQWQsRUFBb0I7QUFDbEJtQixXQUFTLEdBRFM7QUFFbEJDLHFCQUFtQixDQUNqQixTQURpQjtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCdEIsSUFBakI7O0FBRUEsU0FBU08sK0JBQVQsQ0FBeUNMLFlBQXpDLEVBQXVEcUIsS0FBdkQsRUFBOERDLGFBQTlELEVBQTZFO0FBQzNFLE1BQU1DLE9BQU9ELGFBQWI7QUFBQSxNQUE0QjtBQUN0QkUsU0FBT0QsS0FBS0UsWUFBTCxDQUFrQixNQUFsQixDQURiO0FBQUEsTUFFTUMsaUJBQWlCMUIsYUFBYXdCLElBQWIsRUFBbUJGLGFBQW5CLENBRnZCOztBQUlBLFNBQU9JLGNBQVA7QUFDRCIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExpbmssIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMaW5rLCB7XG4gIHRhZ05hbWU6ICdhJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DbGljaydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IGxpbmsgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2xpY2tIYW5kbGVyKGhyZWYsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn0iXX0=