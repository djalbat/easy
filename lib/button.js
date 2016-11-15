'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    InputElement = require('./inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selector, clickHandler, button) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler) {
      _this.onClick(clickHandler, button);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Button.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(clickHandler) {
      var button = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Element.LEFT_MOUSE_BUTTON;

      this.$element.click(function (event) {
        switch (button) {
          case Element.LEFT_MOUSE_BUTTON:
            if (event.button === 0) {
              ///
              clickHandler();
            }
            break;

          case Element.MIDDLE_MOUSE_BUTTON:
            if (event.button === 1) {
              ///
              clickHandler();
            }
            break;
        }

        return false;
      });
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(doubleClickHandler) {
      this.$element.dblclick(function () {
        doubleClickHandler();

        return false;
      });
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement, clickHandler) {
      return InputElement.clone(Button, selectorOrElement, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Button, domElement, clickHandler);
    }
  }]);

  return Button;
}(InputElement);

module.exports = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9idXR0b24uanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJCdXR0b24iLCJzZWxlY3RvciIsImNsaWNrSGFuZGxlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbG9uZSIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiJGVsZW1lbnQiLCJjbGljayIsImV2ZW50IiwiTUlERExFX01PVVNFX0JVVFRPTiIsImRvdWJsZUNsaWNrSGFuZGxlciIsImRibGNsaWNrIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxnQkFBUixDQURuQjs7SUFHTUUsTTs7O0FBQ0osa0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQW9DQyxNQUFwQyxFQUE0QztBQUFBOztBQUFBLGdIQUNwQ0YsUUFEb0M7O0FBRzFDLFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0UsT0FBTCxDQUFhRixZQUFiLEVBQTJCQyxNQUEzQjtBQUNEO0FBTHlDO0FBTTNDOzs7OzBCQUVLRCxZLEVBQWM7QUFBRSxhQUFPRixPQUFPSyxLQUFQLENBQWEsSUFBYixFQUFtQkgsWUFBbkIsQ0FBUDtBQUEwQzs7OzRCQUV4REEsWSxFQUFrRDtBQUFBLFVBQXBDQyxNQUFvQyx1RUFBM0JOLFFBQVFTLGlCQUFtQjs7QUFDeEQsV0FBS0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsZ0JBQVFOLE1BQVI7QUFDRSxlQUFLTixRQUFRUyxpQkFBYjtBQUNFLGdCQUFJRyxNQUFNTixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQUU7QUFDeEJEO0FBQ0Q7QUFDRDs7QUFFRixlQUFLTCxRQUFRYSxtQkFBYjtBQUNFLGdCQUFJRCxNQUFNTixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQUU7QUFDeEJEO0FBQ0Q7QUFDRDtBQVhKOztBQWNBLGVBQU8sS0FBUDtBQUNELE9BaEJEO0FBaUJEOzs7a0NBRWFTLGtCLEVBQW9CO0FBQ2hDLFdBQUtKLFFBQUwsQ0FBY0ssUUFBZCxDQUF1QixZQUFXO0FBQ2hDRDs7QUFFQSxlQUFPLEtBQVA7QUFDRCxPQUpEO0FBS0Q7OzswQkFFWUUsaUIsRUFBbUJYLFksRUFBYztBQUM1QyxhQUFPSCxhQUFhTSxLQUFiLENBQW1CTCxNQUFuQixFQUEyQmEsaUJBQTNCLEVBQThDWCxZQUE5QyxDQUFQO0FBQ0Q7Ozs2QkFFZVksSSxFQUFNWixZLEVBQWM7QUFDbEMsYUFBT0gsYUFBYWdCLFFBQWIsQ0FBc0JmLE1BQXRCLEVBQThCYyxJQUE5QixFQUFvQ1osWUFBcEMsQ0FBUDtBQUNEOzs7bUNBRXFCYyxVLEVBQVlkLFksRUFBYztBQUM5QyxhQUFPSCxhQUFha0IsY0FBYixDQUE0QmpCLE1BQTVCLEVBQW9DZ0IsVUFBcEMsRUFBZ0RkLFlBQWhELENBQVA7QUFDRDs7OztFQWpEa0JILFk7O0FBb0RyQm1CLE9BQU9DLE9BQVAsR0FBaUJuQixNQUFqQiIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlciwgYnV0dG9uKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlciwgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIGJ1dHRvbiA9IEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04pIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgICBjYXNlIEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gOlxuICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHsgLy8vXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gOlxuICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDEpIHsgLy8vXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgb25Eb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmRibGNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKEJ1dHRvbiwgc2VsZWN0b3JPckVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG4iXX0=