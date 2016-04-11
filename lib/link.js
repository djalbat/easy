'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Link = function (_InputElement) {
  _inherits(Link, _InputElement);

  function Link(selectorOr$Element, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, selectorOr$Element));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Link, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Link.clone(this.$element, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      this.$element.click(function () {
        var href = this.$element.attr('href');

        handler(href);

        return false;
      }.bind(this));
    }
  }], [{
    key: 'clone',
    value: function clone(selectorOr$Element, clickHandler) {
      return InputElement.clone(Link, selectorOr$Element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Link, domElement, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

module.exports = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9saW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxJQUNKLENBQVksa0JBQVosRUFBZ0MsWUFBaEMsRUFBOEM7MEJBRDFDLE1BQzBDOzt1RUFEMUMsaUJBRUkscUJBRHNDOztBQUc1QyxRQUFJLFlBQUosRUFBa0I7QUFDaEIsWUFBSyxPQUFMLENBQWEsWUFBYixFQURnQjtLQUFsQjtpQkFINEM7R0FBOUM7O2VBREk7OzBCQVNFLGNBQWM7QUFBRSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssUUFBTCxFQUFlLFlBQTFCLENBQVAsQ0FBRjs7Ozs0QkFFWixTQUFTO0FBQ2YsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixZQUFXO0FBQzdCLFlBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE1BQW5CLENBQVAsQ0FEeUI7O0FBRzdCLGdCQUFRLElBQVIsRUFINkI7O0FBSzdCLGVBQU8sS0FBUCxDQUw2QjtPQUFYLENBTWxCLElBTmtCLENBTWIsSUFOYSxDQUFwQixFQURlOzs7OzBCQVVKLG9CQUFvQixjQUFjO0FBQzdDLGFBQU8sYUFBYSxLQUFiLENBQW1CLElBQW5CLEVBQXlCLGtCQUF6QixFQUE2QyxZQUE3QyxDQUFQLENBRDZDOzs7OzZCQUkvQixNQUFNLGNBQWM7QUFDbEMsYUFBTyxhQUFhLFFBQWIsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsWUFBbEMsQ0FBUCxDQURrQzs7OzttQ0FJZCxZQUFZLGNBQWM7QUFDOUMsYUFBTyxRQUFRLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsVUFBN0IsRUFBeUMsWUFBekMsQ0FBUCxDQUQ4Qzs7OztTQTdCNUM7RUFBYTs7QUFrQ25CLE9BQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgTGluayBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLiRlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy4kZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cbiAgICAgIGhhbmRsZXIoaHJlZik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKExpbmssIHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iXX0=
