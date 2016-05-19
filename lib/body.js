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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).call(this, selector));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9ib2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLElBQ0osQ0FBWSxRQUFaLEVBQXNCOzBCQURsQixNQUNrQjs7QUFDcEIsUUFBSSxhQUFhLFNBQWIsRUFBd0I7QUFDMUIsaUJBQVcsTUFBWCxDQUQwQjtLQUE1Qjs7a0VBRkUsaUJBTUksV0FMYztHQUF0Qjs7ZUFESTs7NEJBU0k7QUFBRSxhQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBUCxDQUFGOzs7OzRCQUVBLFNBQVM7QUFDZixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0Isa0JBRDZCOztBQUc3QixlQUFPLEtBQVAsQ0FINkI7T0FBWCxDQUFwQixDQURlOzs7O2tDQVFILFNBQVM7QUFDckIsV0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixZQUFXO0FBQ2hDLGtCQURnQzs7QUFHaEMsZUFBTyxLQUFQLENBSGdDO09BQVgsQ0FBdkIsQ0FEcUI7Ozs7MEJBUVYsbUJBQW1CO0FBQzlCLGFBQU8sUUFBUSxLQUFSLENBQWMsSUFBZCxFQUFvQixpQkFBcEIsQ0FBUCxDQUQ4Qjs7Ozs2QkFJaEIsTUFBTTtBQUNwQixhQUFPLFFBQVEsUUFBUixDQUFpQixJQUFqQixFQUF1QixJQUF2QixDQUFQLENBRG9COzs7O21DQUlBLFlBQVk7QUFDaEMsYUFBTyxRQUFRLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsVUFBN0IsQ0FBUCxDQURnQzs7OztTQW5DOUI7RUFBYTs7QUF3Q25CLE9BQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJib2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gJ2JvZHknO1xuICAgIH1cblxuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gQm9keS5jbG9uZSh0aGlzKTsgfVxuXG4gIG9uQ2xpY2soaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgb25Eb3VibGVDbGljayhoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5kYmxjbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBzZWxlY3Rvck9yRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJvZHksIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCb2R5LCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG4iXX0=
