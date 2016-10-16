'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Document = function () {
  function Document() {
    _classCallCheck(this, Document);

    this.$element = $(document); ///
  }

  _createClass(Document, [{
    key: 'onKeyUp',
    value: function onKeyUp(handler) {
      this.$element.keyup(handler);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(handler) {
      this.$element.keydown(handler);
    }
  }]);

  return Document;
}();

module.exports = new Document(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkRvY3VtZW50IiwiJGVsZW1lbnQiLCJkb2N1bWVudCIsImhhbmRsZXIiLCJrZXl1cCIsImtleWRvd24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0lBRU1DLFE7QUFDSixzQkFBYztBQUFBOztBQUNaLFNBQUtDLFFBQUwsR0FBZ0JILEVBQUVJLFFBQUYsQ0FBaEIsQ0FEWSxDQUNrQjtBQUMvQjs7Ozs0QkFFT0MsTyxFQUFTO0FBQ2YsV0FBS0YsUUFBTCxDQUFjRyxLQUFkLENBQW9CRCxPQUFwQjtBQUNEOzs7OEJBRVNBLE8sRUFBUztBQUNqQixXQUFLRixRQUFMLENBQWNJLE9BQWQsQ0FBc0JGLE9BQXRCO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCLElBQUlQLFFBQUosRUFBakIsQyxDQUFrQyIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkb2N1bWVudCk7ICAvLy9cbiAgfVxuXG4gIG9uS2V5VXAoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQua2V5dXAoaGFuZGxlcik7XG4gIH1cblxuICBvbktleURvd24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQua2V5ZG93bihoYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEb2N1bWVudCgpOyAgLy8vXG4iXX0=