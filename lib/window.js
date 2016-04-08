'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.$element = $(window); ///
  }

  _createClass(Window, [{
    key: 'onResize',
    value: function onResize(handler) {
      this.$element.resize(handler);
    }
  }]);

  return Window;
}();

var window = new Window();

module.exports = window;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS93aW5kb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUksSUFBSSxRQUFRLFFBQVIsQ0FBSjs7SUFFRTtBQUNKLFdBREksTUFDSixHQUFjOzBCQURWLFFBQ1U7O0FBQ1osU0FBSyxRQUFMLEdBQWdCLEVBQUUsTUFBRixDQUFoQjtBQURZLEdBQWQ7O2VBREk7OzZCQUtLLFNBQVM7QUFDaEIsV0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixPQUFyQixFQURnQjs7OztTQUxkOzs7QUFVTixJQUFJLFNBQVMsSUFBSSxNQUFKLEVBQVQ7O0FBRUosT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQod2luZG93KTsgIC8vL1xuICB9XG5cbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQucmVzaXplKGhhbmRsZXIpO1xuICB9XG59XG5cbnZhciB3aW5kb3cgPSBuZXcgV2luZG93KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93O1xuIl19
