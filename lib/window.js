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

module.exports = new Window(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS93aW5kb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUksSUFBSSxRQUFRLFFBQVIsQ0FBSjs7SUFFRTtBQUNKLG9CQUFjOzs7QUFDWixTQUFLLFFBQUwsR0FBZ0IsRUFBRSxNQUFGLENBQWhCO0FBRFksR0FBZDs7Ozs2QkFJUyxTQUFTO0FBQ2hCLFdBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsT0FBckIsRUFEZ0I7Ozs7Ozs7QUFLcEIsT0FBTyxPQUFQLEdBQWlCLElBQUksTUFBSixFQUFqQiIsImZpbGUiOiJ3aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKHdpbmRvdyk7ICAvLy9cbiAgfVxuXG4gIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LnJlc2l6ZShoYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBXaW5kb3coKTsgIC8vL1xuIl19
