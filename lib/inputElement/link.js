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
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<a></a>',
          clickHandler = properties.clickHandler;


      return Link.fromHTML(html, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

module.exports = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwib25DbGljayIsImNsb25lIiwibmFtZXNwYWNlIiwiYnV0dG9uIiwiYWxsb3dEZWZhdWx0IiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsImJpbmQiLCJzZWxlY3Rvck9yRWxlbWVudCIsImh0bWwiLCJmcm9tSFRNTCIsImRvbUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjs7SUFFTUMsSTs7O0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DO0FBQUE7O0FBQUEsNEdBQzVCRCxRQUQ0Qjs7QUFHbEMsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLQyxPQUFMLENBQWFELFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFS0EsWSxFQUFjO0FBQUUsYUFBT0YsS0FBS0ksS0FBTCxDQUFXLElBQVgsRUFBaUJGLFlBQWpCLENBQVA7QUFBd0M7Ozs0QkFFdERBLFksRUFBY0csUyxFQUFXQyxNLEVBQThCO0FBQUEsVUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQzdELDBHQUFjLFlBQVc7QUFDdkIsWUFBSUMsT0FBTyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQVg7O0FBRUFQLHFCQUFhTSxJQUFiO0FBQ0QsT0FKYSxDQUlaRSxJQUpZLENBSVAsSUFKTyxDQUFkLEVBSWNMLFNBSmQsRUFJeUJDLE1BSnpCLEVBSWlDQyxZQUpqQztBQUtEOzs7MEJBRVlJLGlCLEVBQW1CVCxZLEVBQWM7QUFDNUMsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosSUFBbkIsRUFBeUJXLGlCQUF6QixFQUE0Q1QsWUFBNUMsQ0FBUDtBQUNEOzs7NkJBRWVVLEksRUFBTVYsWSxFQUFjO0FBQ2xDLGFBQU9KLGFBQWFlLFFBQWIsQ0FBc0JiLElBQXRCLEVBQTRCWSxJQUE1QixFQUFrQ1YsWUFBbEMsQ0FBUDtBQUNEOzs7bUNBRXFCWSxVLEVBQVlaLFksRUFBYztBQUM5QyxhQUFPSixhQUFhaUIsY0FBYixDQUE0QmYsSUFBNUIsRUFBa0NjLFVBQWxDLEVBQThDWixZQUE5QyxDQUFQO0FBQ0Q7OzttQ0FFcUJjLFUsRUFBWTtBQUM1QixpQkFBTyxTQUFQO0FBQUEsVUFDRWQsWUFERixHQUNtQmMsVUFEbkIsQ0FDRWQsWUFERjs7O0FBR0osYUFBT0YsS0FBS2EsUUFBTCxDQUFjRCxJQUFkLEVBQW9CVixZQUFwQixDQUFQO0FBQ0Q7Ozs7RUFwQ2dCSixZOztBQXVDbkJtQixPQUFPQyxPQUFQLEdBQWlCbEIsSUFBakIiLCJmaWxlIjoibGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIG5hbWVzcGFjZSwgYnV0dG9uLCBhbGxvd0RlZmF1bHQgPSBmYWxzZSkge1xuICAgIHN1cGVyLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgIGNsaWNrSGFuZGxlcihocmVmKTtcbiAgICB9LmJpbmQodGhpcyksIG5hbWVzcGFjZSwgYnV0dG9uLCBhbGxvd0RlZmF1bHQpXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoTGluaywgc2VsZWN0b3JPckVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGh0bWwgPSAnPGE+PC9hPicsXG4gICAgICAgIHsgY2xpY2tIYW5kbGVyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIExpbmsuZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iXX0=