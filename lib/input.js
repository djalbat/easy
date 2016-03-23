'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var Input = function (_Element) {
  _inherits(Input, _Element);

  function Input(selectorOr$Element, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, selectorOr$Element));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone() {
      return Input.clone(this.$element);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      this.$element.change(function () {
        var value = this.getValue();

        handler(value);
      }.bind(this));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = this.$element.val();

      return value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.$element.val(value);
    }
  }, {
    key: 'select',
    value: function select() {
      this.$element.select();
    }
  }]);

  return Input;
}(Element);

Input.clone = function (selectorOr$Element) {
  return Element.clone(Input, selectorOr$Element);
};

Input.fromHTML = function (html) {
  return Element.fromHTML(Input, html);
};

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksVUFBVSxRQUFRLFdBQVIsQ0FBVjs7SUFFRTs7O0FBQ0osV0FESSxLQUNKLENBQVksa0JBQVosRUFBZ0MsYUFBaEMsRUFBK0M7MEJBRDNDLE9BQzJDOzt1RUFEM0Msa0JBRUkscUJBRHVDOztBQUc3QyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZCxFQURpQjtLQUFuQjtpQkFINkM7R0FBL0M7O2VBREk7OzRCQVNJO0FBQUUsYUFBTyxNQUFNLEtBQU4sQ0FBWSxLQUFLLFFBQUwsQ0FBbkIsQ0FBRjs7Ozs2QkFFQyxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsWUFBVztBQUM5QixZQUFJLFFBQVEsS0FBSyxRQUFMLEVBQVIsQ0FEMEI7O0FBRzlCLGdCQUFRLEtBQVIsRUFIOEI7T0FBWCxDQUluQixJQUptQixDQUlkLElBSmMsQ0FBckIsRUFEZ0I7Ozs7K0JBUVA7QUFDVCxVQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFSLENBREs7O0FBR1QsYUFBTyxLQUFQLENBSFM7Ozs7NkJBTUYsT0FBTztBQUNkLFdBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsS0FBbEIsRUFEYzs7Ozs2QkFJUDtBQUNQLFdBQUssUUFBTCxDQUFjLE1BQWQsR0FETzs7OztTQTdCTDtFQUFjOztBQWtDcEIsTUFBTSxLQUFOLEdBQWMsVUFBUyxrQkFBVCxFQUE2QjtBQUN6QyxTQUFPLFFBQVEsS0FBUixDQUFjLEtBQWQsRUFBcUIsa0JBQXJCLENBQVAsQ0FEeUM7Q0FBN0I7O0FBSWQsTUFBTSxRQUFOLEdBQWlCLFVBQVMsSUFBVCxFQUFlO0FBQzlCLFNBQU8sUUFBUSxRQUFSLENBQWlCLEtBQWpCLEVBQXdCLElBQXhCLENBQVAsQ0FEOEI7Q0FBZjs7QUFJakIsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgaGFuZGxlcih2YWx1ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbHVlKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLiRlbGVtZW50LnNlbGVjdCgpO1xuICB9XG59XG5cbklucHV0LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHJldHVybiBFbGVtZW50LmNsb25lKElucHV0LCBzZWxlY3Rvck9yJEVsZW1lbnQpO1xufTtcblxuSW5wdXQuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHJldHVybiBFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iXX0=