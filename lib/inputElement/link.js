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
    value: function onClick(handler, mouseButton) {
      var allowDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'onClick', this).call(this, function () {
        var href = this.getAttribute('href');

        handler(href);
      }.bind(this), mouseButton, allowDefault);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Link, element, clickHandler);
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
      var html = '<a></a>';
      var onClick = properties.onClick;
      var clickHandler = onClick; ///

      return Link.fromHTML(html, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

module.exports = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJJbnB1dEVsZW1lbnQiLCJyZXF1aXJlIiwiTGluayIsInNlbGVjdG9yIiwiY2xpY2tIYW5kbGVyIiwib25DbGljayIsImNsb25lIiwiaGFuZGxlciIsIm1vdXNlQnV0dG9uIiwiYWxsb3dEZWZhdWx0IiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsImJpbmQiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZG9tRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBb0M7QUFBQTs7QUFBQSw0R0FDNUJELFFBRDRCOztBQUdsQyxRQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQUtDLE9BQUwsQ0FBYUQsWUFBYjtBQUNEO0FBTGlDO0FBTW5DOzs7OzBCQUVLQSxZLEVBQWM7QUFBRSxhQUFPRixLQUFLSSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsWUFBakIsQ0FBUDtBQUF3Qzs7OzRCQUV0REcsTyxFQUFTQyxXLEVBQW1DO0FBQUEsVUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQ2xELDBHQUFjLFlBQVc7QUFDdkIsWUFBTUMsT0FBTyxLQUFLQyxZQUFMLENBQWtCLE1BQWxCLENBQWI7O0FBRUFKLGdCQUFRRyxJQUFSO0FBQ0QsT0FKYSxDQUlaRSxJQUpZLENBSVAsSUFKTyxDQUFkLEVBSWNKLFdBSmQsRUFJMkJDLFlBSjNCO0FBS0Q7OzswQkFFWUksTyxFQUFTVCxZLEVBQWM7QUFDbEMsYUFBT0osYUFBYU0sS0FBYixDQUFtQkosSUFBbkIsRUFBeUJXLE9BQXpCLEVBQWtDVCxZQUFsQyxDQUFQO0FBQ0Q7Ozs2QkFFZVUsSSxFQUFNVixZLEVBQWM7QUFDbEMsYUFBT0osYUFBYWUsUUFBYixDQUFzQmIsSUFBdEIsRUFBNEJZLElBQTVCLEVBQWtDVixZQUFsQyxDQUFQO0FBQ0Q7OzttQ0FFcUJZLFUsRUFBWVosWSxFQUFjO0FBQzlDLGFBQU9KLGFBQWFpQixjQUFiLENBQTRCZixJQUE1QixFQUFrQ2MsVUFBbEMsRUFBOENaLFlBQTlDLENBQVA7QUFDRDs7O21DQUVxQmMsVSxFQUFZO0FBQzFCLGlCQUFPLFNBQVA7QUFDQSxVQUFFYixPQUFGLEdBQWNhLFVBQWQsQ0FBRWIsT0FBRjtBQUNBLHlCQUFlQSxPQUFmLENBSDBCLENBR0Y7O0FBRTlCLGFBQU9ILEtBQUthLFFBQUwsQ0FBY0QsSUFBZCxFQUFvQlYsWUFBcEIsQ0FBUDtBQUNEOzs7O0VBckNnQkosWTs7QUF3Q25CbUIsT0FBT0MsT0FBUCxHQUFpQmxCLElBQWpCIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0ID0gZmFsc2UpIHtcbiAgICBzdXBlci5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgIGhhbmRsZXIoaHJlZik7XG4gICAgfS5iaW5kKHRoaXMpLCBtb3VzZUJ1dHRvbiwgYWxsb3dEZWZhdWx0KVxuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoTGluaywgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBodG1sID0gJzxhPjwvYT4nLFxuICAgICAgICAgIHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrOyAvLy9cblxuICAgIHJldHVybiBMaW5rLmZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIl19