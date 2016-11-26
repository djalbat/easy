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
      this.$element.on('resize', handler); ///
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      this.$element.off('resize', handler); ///
    }
  }]);

  return Window;
}();

var window = new Window();

module.exports = window;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJXaW5kb3ciLCIkZWxlbWVudCIsIndpbmRvdyIsImhhbmRsZXIiLCJvbiIsIm9mZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7SUFFTUMsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsUUFBTCxHQUFnQkgsRUFBRUksTUFBRixDQUFoQixDQURZLENBQ2dCO0FBQzdCOzs7OzZCQUVRQyxPLEVBQVM7QUFDaEIsV0FBS0YsUUFBTCxDQUFjRyxFQUFkLENBQWlCLFFBQWpCLEVBQTJCRCxPQUEzQixFQURnQixDQUNzQjtBQUN2Qzs7OzhCQUVTQSxPLEVBQVM7QUFDakIsV0FBS0YsUUFBTCxDQUFjSSxHQUFkLENBQWtCLFFBQWxCLEVBQTRCRixPQUE1QixFQURpQixDQUNxQjtBQUN2Qzs7Ozs7O0FBR0gsSUFBSUQsU0FBUyxJQUFJRixNQUFKLEVBQWI7O0FBRUFNLE9BQU9DLE9BQVAsR0FBaUJMLE1BQWpCIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQod2luZG93KTsgIC8vL1xuICB9XG5cbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ3Jlc2l6ZScsIGhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdyZXNpemUnLCBoYW5kbGVyKTsgLy8vXG4gIH1cbn1cblxudmFyIHdpbmRvdyA9IG5ldyBXaW5kb3coKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3c7XG4iXX0=