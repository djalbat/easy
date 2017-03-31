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
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler;
      }

      this.on('click', handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      this.off('click', handler);
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

function defaultIntermediateClickHandler(handler, event, targetElement) {
  var link = targetElement,
      ///
  href = link.getAttribute('href'),
      preventDefault = handler(href, targetElement);

  return preventDefault;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2xpbmsuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJMaW5rIiwic2VsZWN0b3IiLCJjbGlja0hhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xvbmUiLCJoYW5kbGVyIiwiaW50ZXJtZWRpYXRlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIiLCJvbiIsIm9mZiIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwibGluayIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLEk7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLDRHQUM1QkQsUUFENEI7O0FBR2xDLFFBQUlDLGlCQUFpQkMsU0FBckIsRUFBZ0M7QUFDOUIsWUFBS0MsT0FBTCxDQUFhRixZQUFiO0FBQ0Q7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLEtBQUtLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCSCxZQUFqQixDQUFQO0FBQXdDOzs7NEJBRXRESSxPLEVBQVM7QUFDZixVQUFJQSxRQUFRQyxtQkFBUixLQUFnQ0osU0FBcEMsRUFBK0M7QUFDN0NHLGdCQUFRQyxtQkFBUixHQUE4QkMsK0JBQTlCO0FBQ0Q7O0FBRUQsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJILE9BQWpCO0FBQ0Q7Ozs2QkFFUUEsTyxFQUFTO0FBQ2hCLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCSixPQUFsQjtBQUNEOzs7MEJBRVlLLE8sRUFBU1QsWSxFQUFjO0FBQ2xDLGFBQU9KLFFBQVFPLEtBQVIsQ0FBY0wsSUFBZCxFQUFvQlcsT0FBcEIsRUFBNkJULFlBQTdCLENBQVA7QUFDRDs7OzZCQUVlVSxJLEVBQU1WLFksRUFBYztBQUNsQyxhQUFPSixRQUFRZSxRQUFSLENBQWlCYixJQUFqQixFQUF1QlksSUFBdkIsRUFBNkJWLFlBQTdCLENBQVA7QUFDRDs7O21DQUVxQlksVSxFQUFZWixZLEVBQWM7QUFDOUMsYUFBT0osUUFBUWlCLGNBQVIsQ0FBdUJmLElBQXZCLEVBQTZCYyxVQUE3QixFQUF5Q1osWUFBekMsQ0FBUDtBQUNEOzs7bUNBRXFCYyxVLEVBQVk7QUFDMUIsVUFBRVosT0FBRixHQUFjWSxVQUFkLENBQUVaLE9BQUY7QUFBQSxVQUNBRixZQURBLEdBQ2VFLE9BRGYsQ0FEMEIsQ0FFRjs7QUFFOUIsYUFBT04sUUFBUW1CLGNBQVIsQ0FBdUJqQixJQUF2QixFQUE2QmdCLFVBQTdCLEVBQXlDZCxZQUF6QyxDQUFQO0FBQ0Q7Ozs7RUF4Q2dCSixPOztBQTJDbkJvQixPQUFPQyxNQUFQLENBQWNuQixJQUFkLEVBQW9CO0FBQ2xCb0IsV0FBUyxHQURTO0FBRWxCQyxxQkFBbUIsQ0FDakIsU0FEaUI7QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQnZCLElBQWpCOztBQUVBLFNBQVNRLCtCQUFULENBQXlDRixPQUF6QyxFQUFrRGtCLEtBQWxELEVBQXlEQyxhQUF6RCxFQUF3RTtBQUN0RSxNQUFNQyxPQUFPRCxhQUFiO0FBQUEsTUFBNEI7QUFDdEJFLFNBQU9ELEtBQUtFLFlBQUwsQ0FBa0IsTUFBbEIsQ0FEYjtBQUFBLE1BRU1DLGlCQUFpQnZCLFFBQVFxQixJQUFSLEVBQWNGLGFBQWQsQ0FGdkI7O0FBSUEsU0FBT0ksY0FBUDtBQUNEIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXI7XG4gICAgfVxuICAgIFxuICAgIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExpbmssIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMaW5rLCB7XG4gIHRhZ05hbWU6ICdhJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DbGljaydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBsaW5rID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoaHJlZiwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufSJdfQ==