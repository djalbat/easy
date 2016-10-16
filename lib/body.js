'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Body = function (_Element) {
  _inherits(Body, _Element);

  function Body(selector) {
    _classCallCheck(this, Body);

    if (selector === undefined) {
      selector = 'body';
    }

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, selector));
  }

  _createClass(Body, [{
    key: 'clone',
    value: function clone() {
      return Body.clone(this);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      this.$element.click(function () {
        handler();

        return false;
      });
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(handler) {
      this.$element.dblclick(function () {
        handler();

        return false;
      });
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOrElement) {
      return Element.clone(Body, selectorOrElement);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Body, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Body, domElement);
    }
  }]);

  return Body;
}(Element);

module.exports = Body;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ib2R5LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQm9keSIsInNlbGVjdG9yIiwidW5kZWZpbmVkIiwiY2xvbmUiLCJoYW5kbGVyIiwiJGVsZW1lbnQiLCJjbGljayIsImRibGNsaWNrIiwic2VsZWN0b3JPckVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJkb21FbGVtZW50IiwiZnJvbURPTUVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxJOzs7QUFDSixnQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixRQUFJQSxhQUFhQyxTQUFqQixFQUE0QjtBQUMxQkQsaUJBQVcsTUFBWDtBQUNEOztBQUhtQix1R0FLZEEsUUFMYztBQU1yQjs7Ozs0QkFFTztBQUFFLGFBQU9ELEtBQUtHLEtBQUwsQ0FBVyxJQUFYLENBQVA7QUFBMEI7Ozs0QkFFNUJDLE8sRUFBUztBQUNmLFdBQUtDLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixZQUFXO0FBQzdCRjs7QUFFQSxlQUFPLEtBQVA7QUFDRCxPQUpEO0FBS0Q7OztrQ0FFYUEsTyxFQUFTO0FBQ3JCLFdBQUtDLFFBQUwsQ0FBY0UsUUFBZCxDQUF1QixZQUFXO0FBQ2hDSDs7QUFFQSxlQUFPLEtBQVA7QUFDRCxPQUpEO0FBS0Q7OzswQkFFWUksaUIsRUFBbUI7QUFDOUIsYUFBT1YsUUFBUUssS0FBUixDQUFjSCxJQUFkLEVBQW9CUSxpQkFBcEIsQ0FBUDtBQUNEOzs7NkJBRWVDLEksRUFBTTtBQUNwQixhQUFPWCxRQUFRWSxRQUFSLENBQWlCVixJQUFqQixFQUF1QlMsSUFBdkIsQ0FBUDtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFDaEMsYUFBT2IsUUFBUWMsY0FBUixDQUF1QlosSUFBdkIsRUFBNkJXLFVBQTdCLENBQVA7QUFDRDs7OztFQXJDZ0JiLE87O0FBd0NuQmUsT0FBT0MsT0FBUCxHQUFpQmQsSUFBakIiLCJmaWxlIjoiYm9keS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9ICdib2R5JztcbiAgICB9XG5cbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcyk7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxuXG4gIG9uRG91YmxlQ2xpY2soaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQm9keSwgc2VsZWN0b3JPckVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCb2R5LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQm9keSwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIl19