'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);
  }

  _createClass(Window, [{
    key: 'onResize',
    value: function onResize(handler) {
      $(window).on('resize', handler); ///
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      $(window).off('resize', handler); ///
    }
  }]);

  return Window;
}();

module.exports = new Window(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJXaW5kb3ciLCJoYW5kbGVyIiwid2luZG93Iiwib24iLCJvZmYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0lBRU1DLE07V0FBQUEsTTswQkFBQUEsTTs7O2VBQUFBLE07OzZCQUNLQyxPLEVBQVM7QUFDaEJILFFBQUVJLE1BQUYsRUFBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUJGLE9BQXZCLEVBRGdCLENBQ2tCO0FBQ25DOzs7OEJBRVNBLE8sRUFBUztBQUNqQkgsUUFBRUksTUFBRixFQUFVRSxHQUFWLENBQWMsUUFBZCxFQUF3QkgsT0FBeEIsRUFEaUIsQ0FDaUI7QUFDbkM7OztTQVBHRCxNOzs7QUFVTkssT0FBT0MsT0FBUCxHQUFpQixJQUFJTixNQUFKLEVBQWpCLEMsQ0FBZ0MiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5jbGFzcyBXaW5kb3cge1xuICBvblJlc2l6ZShoYW5kbGVyKSB7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBoYW5kbGVyKTsgIC8vL1xuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUnLCBoYW5kbGVyKTsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cbiJdfQ==