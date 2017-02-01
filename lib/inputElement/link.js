'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

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
    value: function onClick(clickHandler, namespace, button) {
      var allowDefault = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'onClick', this).call(this, function () {
        var href = this.getAttribute('href');

        clickHandler(href);
      }.bind(this), namespace, button, allowDefault);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwib25DbGljayIsImNsb25lIiwibmFtZXNwYWNlIiwiYnV0dG9uIiwiYWxsb3dEZWZhdWx0IiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsImJpbmQiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGlCQUFSLENBQW5COztJQUVNQyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQSw0R0FDNUJELFFBRDRCOztBQUdsQyxRQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQUtDLE9BQUwsQ0FBYUQsWUFBYjtBQUNEO0FBTGlDO0FBTW5DOzs7OzBCQUVLQSxZLEVBQWM7QUFBRSxhQUFPRixLQUFLSSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsWUFBakIsQ0FBUDtBQUF3Qzs7OzRCQUV0REEsWSxFQUFjRyxTLEVBQVdDLE0sRUFBOEI7QUFBQSxVQUF0QkMsWUFBc0IsdUVBQVAsS0FBTzs7QUFDN0QsMEdBQWMsWUFBVztBQUN2QixZQUFJQyxPQUFPLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBWDs7QUFFQVAscUJBQWFNLElBQWI7QUFDRCxPQUphLENBSVpFLElBSlksQ0FJUCxJQUpPLENBQWQsRUFJY0wsU0FKZCxFQUl5QkMsTUFKekIsRUFJaUNDLFlBSmpDO0FBS0Q7OzswQkFFWUksaUIsRUFBbUJULFksRUFBYztBQUM1QyxhQUFPSixhQUFhTSxLQUFiLENBQW1CSixJQUFuQixFQUF5QlcsaUJBQXpCLEVBQTRDVCxZQUE1QyxDQUFQO0FBQ0Q7Ozs2QkFFZVUsSSxFQUFNVixZLEVBQWM7QUFDbEMsYUFBT0osYUFBYWUsUUFBYixDQUFzQmIsSUFBdEIsRUFBNEJZLElBQTVCLEVBQWtDVixZQUFsQyxDQUFQO0FBQ0Q7OzttQ0FFcUJZLFUsRUFBWVosWSxFQUFjO0FBQzlDLGFBQU9KLGFBQWFpQixjQUFiLENBQTRCZixJQUE1QixFQUFrQ2MsVUFBbEMsRUFBOENaLFlBQTlDLENBQVA7QUFDRDs7OztFQTdCZ0JKLFk7O0FBZ0NuQmtCLE9BQU9DLE9BQVAsR0FBaUJqQixJQUFqQiIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgbmFtZXNwYWNlLCBidXR0b24sIGFsbG93RGVmYXVsdCA9IGZhbHNlKSB7XG4gICAgc3VwZXIub25DbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgY2xpY2tIYW5kbGVyKGhyZWYpO1xuICAgIH0uYmluZCh0aGlzKSwgbmFtZXNwYWNlLCBidXR0b24sIGFsbG93RGVmYXVsdClcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShzZWxlY3Rvck9yRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShMaW5rLCBzZWxlY3Rvck9yRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcbiJdfQ==