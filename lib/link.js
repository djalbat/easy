'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Link = function (_InputElement) {
  _inherits(Link, _InputElement);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

    if (clickHandler) {
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
      _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'onClick', this).call(this, function () {
        var href = this.getAttribute('href');

        clickHandler(href);

        return false;
      }.bind(this));
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, clickHandler) {
      return InputElement.clone(Link, selectorOrElement, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Link, domElement, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

module.exports = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5rLmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJMaW5rIiwic2VsZWN0b3IiLCJjbGlja0hhbmRsZXIiLCJvbkNsaWNrIiwiY2xvbmUiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiYmluZCIsInNlbGVjdG9yT3JFbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBbkI7O0lBRU1DLEk7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLDRHQUM1QkQsUUFENEI7O0FBR2xDLFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0MsT0FBTCxDQUFhRCxZQUFiO0FBQ0Q7QUFMaUM7QUFNbkM7Ozs7MEJBRUtBLFksRUFBYztBQUFFLGFBQU9GLEtBQUtJLEtBQUwsQ0FBVyxJQUFYLEVBQWlCRixZQUFqQixDQUFQO0FBQXdDOzs7NEJBRXREQSxZLEVBQWM7QUFDcEIsMEdBQWMsWUFBVztBQUN2QixZQUFJRyxPQUFPLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBWDs7QUFFQUoscUJBQWFHLElBQWI7O0FBRUEsZUFBTyxLQUFQO0FBQ0QsT0FOYSxDQU1aRSxJQU5ZLENBTVAsSUFOTyxDQUFkO0FBT0Q7OzswQkFFWUMsaUIsRUFBbUJOLFksRUFBYztBQUM1QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixJQUFuQixFQUF5QlEsaUJBQXpCLEVBQTRDTixZQUE1QyxDQUFQO0FBQ0Q7Ozs2QkFFZU8sSSxFQUFNUCxZLEVBQWM7QUFDbEMsYUFBT0osYUFBYVksUUFBYixDQUFzQlYsSUFBdEIsRUFBNEJTLElBQTVCLEVBQWtDUCxZQUFsQyxDQUFQO0FBQ0Q7OzttQ0FFcUJTLFUsRUFBWVQsWSxFQUFjO0FBQzlDLGFBQU9KLGFBQWFjLGNBQWIsQ0FBNEJaLElBQTVCLEVBQWtDVyxVQUFsQyxFQUE4Q1QsWUFBOUMsQ0FBUDtBQUNEOzs7O0VBL0JnQkosWTs7QUFrQ25CZSxPQUFPQyxPQUFQLEdBQWlCZCxJQUFqQiIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgTGluayBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub25DbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgY2xpY2tIYW5kbGVyKGhyZWYpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKExpbmssIHNlbGVjdG9yT3JFbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIl19