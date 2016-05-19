'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('./inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selector, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
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
    value: function clone(selectorOrElement, changeHandler) {
      return InputElement.clone(Checkbox, selectorOrElement, changeHandler);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLFFBQVosRUFBc0IsYUFBdEIsRUFBcUM7MEJBRGpDLFVBQ2lDOzt1RUFEakMscUJBRUksV0FENkI7O0FBR25DLFFBQUksYUFBSixFQUFtQjtBQUNqQixZQUFLLFFBQUwsQ0FBYyxhQUFkLEVBRGlCO0tBQW5CO2lCQUhtQztHQUFyQzs7ZUFESTs7MEJBU0UsZUFBZTtBQUFFLGFBQU8sU0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixhQUFyQixDQUFQLENBQUY7Ozs7NkJBRVosU0FBUztBQUNoQixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsWUFBSSxVQUFVLEtBQUssU0FBTCxFQUFWLENBRHlCOztBQUc3QixnQkFBUSxPQUFSLEVBSDZCO09BQVgsQ0FJbEIsSUFKa0IsQ0FJYixJQUphLENBQXBCLEVBRGdCOzs7OzBCQVFaLFNBQVM7QUFDYixVQUFJLFVBQVUsTUFBVixLQUFxQixDQUFyQixFQUF3QjtBQUMxQixrQkFBVSxJQUFWLENBRDBCO09BQTVCOztBQUlBLFVBQUksT0FBSixFQUFhO0FBQ1gsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixTQUFuQixFQUE4QixTQUE5QixFQURXO09BQWIsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsU0FBekIsRUFESztPQUZQOzs7O2dDQU9VO0FBQ1YsYUFBTyxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWlCLFVBQWpCLENBQVAsQ0FEVTs7OzswQkFJQyxtQkFBbUIsZUFBZTtBQUM3QyxhQUFPLGFBQWEsS0FBYixDQUFtQixRQUFuQixFQUE2QixpQkFBN0IsRUFBZ0QsYUFBaEQsQ0FBUCxDQUQ2Qzs7Ozs2QkFJL0IsTUFBTSxlQUFlO0FBQ25DLGFBQU8sYUFBYSxRQUFiLENBQXNCLFFBQXRCLEVBQWdDLElBQWhDLEVBQXNDLGFBQXRDLENBQVAsQ0FEbUM7Ozs7bUNBSWYsWUFBWSxlQUFlO0FBQy9DLGFBQU8sYUFBYSxjQUFiLENBQTRCLFFBQTVCLEVBQXNDLFVBQXRDLEVBQWtELGFBQWxELENBQVAsQ0FEK0M7Ozs7U0EzQzdDO0VBQWlCOztBQWdEdkIsT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKCk7XG5cbiAgICAgIGhhbmRsZXIoY2hlY2tlZCk7XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY2hlY2soY2hlY2tlZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgfVxuICB9XG5cbiAgaXNDaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yT3JFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShDaGVja2JveCwgc2VsZWN0b3JPckVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiJdfQ==
