'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Checkbox = function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selectorOr$Element, clickHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, selectorOr$Element));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Checkbox.clone(this.$element, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      this.$element.click(function () {
        var checked = this.isChecked();

        handler(checked);
      }.bind(this));
    }
  }, {
    key: 'check',
    value: function check(checked) {
      if (arguments.length === 0) {
        checked = true;
      }

      if (checked) {
        this.$element.attr('checked', 'checked');
      } else {
        this.$element.removeAttr('checked');
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.$element.is(':checked');
    }
  }]);

  return Checkbox;
}(Element);

Checkbox.clone = function (selectorOr$Element, clickHandler) {
  return Element.clone(Checkbox, selectorOr$Element, clickHandler);
};

Checkbox.fromHTML = function (html, clickHandler) {
  return Element.fromHTML(Checkbox, html, clickHandler);
};

module.exports = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksVUFBVSxRQUFRLFdBQVIsQ0FBVjs7SUFFRTs7O0FBQ0osV0FESSxRQUNKLENBQVksa0JBQVosRUFBZ0MsWUFBaEMsRUFBOEM7MEJBRDFDLFVBQzBDOzt1RUFEMUMscUJBRUkscUJBRHNDOztBQUc1QyxRQUFJLFlBQUosRUFBa0I7QUFDaEIsWUFBSyxPQUFMLENBQWEsWUFBYixFQURnQjtLQUFsQjtpQkFINEM7R0FBOUM7O2VBREk7OzBCQVNFLGNBQWM7QUFBRSxhQUFPLFNBQVMsS0FBVCxDQUFlLEtBQUssUUFBTCxFQUFlLFlBQTlCLENBQVAsQ0FBRjs7Ozs0QkFFWixTQUFTO0FBQ2YsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixZQUFXO0FBQzdCLFlBQUksVUFBVSxLQUFLLFNBQUwsRUFBVixDQUR5Qjs7QUFHN0IsZ0JBQVEsT0FBUixFQUg2QjtPQUFYLENBSWxCLElBSmtCLENBSWIsSUFKYSxDQUFwQixFQURlOzs7OzBCQVFYLFNBQVM7QUFDYixVQUFJLFVBQVUsTUFBVixLQUFxQixDQUFyQixFQUF3QjtBQUMxQixrQkFBVSxJQUFWLENBRDBCO09BQTVCOztBQUlBLFVBQUksT0FBSixFQUFhO0FBQ1gsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixTQUFuQixFQUE4QixTQUE5QixFQURXO09BQWIsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsU0FBekIsRUFESztPQUZQOzs7O2dDQU9VO0FBQ1YsYUFBTyxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLFVBQWpCLENBQVAsQ0FEVTs7OztTQS9CUjtFQUFpQjs7QUFvQ3ZCLFNBQVMsS0FBVCxHQUFpQixVQUFTLGtCQUFULEVBQTZCLFlBQTdCLEVBQTJDO0FBQzFELFNBQU8sUUFBUSxLQUFSLENBQWMsUUFBZCxFQUF3QixrQkFBeEIsRUFBNEMsWUFBNUMsQ0FBUCxDQUQwRDtDQUEzQzs7QUFJakIsU0FBUyxRQUFULEdBQW9CLFVBQVMsSUFBVCxFQUFlLFlBQWYsRUFBNkI7QUFDL0MsU0FBTyxRQUFRLFFBQVIsQ0FBaUIsUUFBakIsRUFBMkIsSUFBM0IsRUFBaUMsWUFBakMsQ0FBUCxDQUQrQztDQUE3Qjs7QUFJcEIsT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMuJGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuXG4gICAgICBoYW5kbGVyKGNoZWNrZWQpO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5pcygnOmNoZWNrZWQnKTtcbiAgfVxufVxuXG5DaGVja2JveC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG59O1xuXG5DaGVja2JveC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG4iXX0=