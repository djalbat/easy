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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJXaW5kb3ciLCJoYW5kbGVyIiwid2luZG93Iiwib24iLCJvZmYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0lBRU1DLE07Ozs7Ozs7NkJBQ0tDLE8sRUFBUztBQUNoQkgsUUFBRUksTUFBRixFQUFVQyxFQUFWLENBQWEsUUFBYixFQUF1QkYsT0FBdkIsRUFEZ0IsQ0FDa0I7QUFDbkM7Ozs4QkFFU0EsTyxFQUFTO0FBQ2pCSCxRQUFFSSxNQUFGLEVBQVVFLEdBQVYsQ0FBYyxRQUFkLEVBQXdCSCxPQUF4QixFQURpQixDQUNpQjtBQUNuQzs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUIsSUFBSU4sTUFBSixFQUFqQixDLENBQWdDIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY2xhc3MgV2luZG93IHtcbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgaGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIG9mZlJlc2l6ZShoYW5kbGVyKSB7XG4gICAgJCh3aW5kb3cpLm9mZigncmVzaXplJywgaGFuZGxlcik7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG4iXX0=