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
      this.$element.on('resize', handler);
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      this.$element.off('resize', handler);
    }
  }]);

  return Window;
}();

module.exports = new Window(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJXaW5kb3ciLCIkZWxlbWVudCIsIndpbmRvdyIsImhhbmRsZXIiLCJvbiIsIm9mZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7SUFFTUMsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsUUFBTCxHQUFnQkgsRUFBRUksTUFBRixDQUFoQixDQURZLENBQ2dCO0FBQzdCOzs7OzZCQUVRQyxPLEVBQVM7QUFDaEIsV0FBS0YsUUFBTCxDQUFjRyxFQUFkLENBQWlCLFFBQWpCLEVBQTJCRCxPQUEzQjtBQUNEOzs7OEJBRVNBLE8sRUFBUztBQUNqQixXQUFLRixRQUFMLENBQWNJLEdBQWQsQ0FBa0IsUUFBbEIsRUFBNEJGLE9BQTVCO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCLElBQUlQLE1BQUosRUFBakIsQyxDQUFnQyIsImZpbGUiOiJ3aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKHdpbmRvdyk7ICAvLy9cbiAgfVxuXG4gIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdyZXNpemUnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG4iXX0=