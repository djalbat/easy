'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selectorOr$Element, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, selectorOr$Element));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this.$element, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
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
  }], [{
    key: 'clone',
    value: function clone(selectorOr$Element, changeHandler) {
      return InputElement.clone(Checkbox, selectorOr$Element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }]);

  return Checkbox;
}(InputElement);

module.exports = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLGtCQUFaLEVBQWdDLGFBQWhDLEVBQStDOzBCQUQzQyxVQUMyQzs7dUVBRDNDLHFCQUVJLHFCQUR1Qzs7QUFHN0MsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQsRUFEaUI7S0FBbkI7aUJBSDZDO0dBQS9DOztlQURJOzswQkFTRSxlQUFlO0FBQUUsYUFBTyxTQUFTLEtBQVQsQ0FBZSxLQUFLLFFBQUwsRUFBZSxhQUE5QixDQUFQLENBQUY7Ozs7NkJBRVosU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsWUFBSSxVQUFVLEtBQUssU0FBTCxFQUFWLENBRHlCOztBQUc3QixnQkFBUSxPQUFSLEVBSDZCO09BQVgsQ0FJbEIsSUFKa0IsQ0FJYixJQUphLENBQXBCLEVBRGdCOzs7OzBCQVFaLFNBQVM7QUFDYixVQUFJLFVBQVUsTUFBVixLQUFxQixDQUFyQixFQUF3QjtBQUMxQixrQkFBVSxJQUFWLENBRDBCO09BQTVCOztBQUlBLFVBQUksT0FBSixFQUFhO0FBQ1gsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixTQUFuQixFQUE4QixTQUE5QixFQURXO09BQWIsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsU0FBekIsRUFESztPQUZQOzs7O2dDQU9VO0FBQ1YsYUFBTyxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLFVBQWpCLENBQVAsQ0FEVTs7OzswQkFJQyxvQkFBb0IsZUFBZTtBQUM5QyxhQUFPLGFBQWEsS0FBYixDQUFtQixRQUFuQixFQUE2QixrQkFBN0IsRUFBaUQsYUFBakQsQ0FBUCxDQUQ4Qzs7Ozs2QkFJaEMsTUFBTSxlQUFlO0FBQ25DLGFBQU8sYUFBYSxRQUFiLENBQXNCLFFBQXRCLEVBQWdDLElBQWhDLEVBQXNDLGFBQXRDLENBQVAsQ0FEbUM7Ozs7bUNBSWYsWUFBWSxlQUFlO0FBQy9DLGFBQU8sYUFBYSxjQUFiLENBQTRCLFFBQTVCLEVBQXNDLFVBQXRDLEVBQWtELGFBQWxELENBQVAsQ0FEK0M7Ozs7U0EzQzdDO0VBQWlCOztBQWdEdkIsT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcy4kZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoKTtcblxuICAgICAgaGFuZGxlcihjaGVja2VkKTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cblxuICBjaGVjayhjaGVja2VkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaXMoJzpjaGVja2VkJyk7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShDaGVja2JveCwgc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG4iXX0=
