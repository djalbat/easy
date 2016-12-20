'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Document = function () {
  function Document() {
    _classCallCheck(this, Document);
  }

  _createClass(Document, [{
    key: 'onKeyUp',
    value: function onKeyUp(handler) {
      $(document).keyup(handler); ///
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(handler) {
      $(document).keydown(handler); ///
    }
  }]);

  return Document;
}();

module.exports = new Document(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkRvY3VtZW50IiwiaGFuZGxlciIsImRvY3VtZW50Iiwia2V5dXAiLCJrZXlkb3duIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztJQUVNQyxROzs7Ozs7OzRCQUNJQyxPLEVBQVM7QUFDZkgsUUFBRUksUUFBRixFQUFZQyxLQUFaLENBQWtCRixPQUFsQixFQURlLENBQ2E7QUFDN0I7Ozs4QkFFU0EsTyxFQUFTO0FBQ2pCSCxRQUFFSSxRQUFGLEVBQVlFLE9BQVosQ0FBb0JILE9BQXBCLEVBRGlCLENBQ2E7QUFDL0I7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCLElBQUlOLFFBQUosRUFBakIsQyxDQUFrQyIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBvbktleVVwKGhhbmRsZXIpIHtcbiAgICAkKGRvY3VtZW50KS5rZXl1cChoYW5kbGVyKTsgLy8vXG4gIH1cblxuICBvbktleURvd24oaGFuZGxlcikge1xuICAgICQoZG9jdW1lbnQpLmtleWRvd24oaGFuZGxlcik7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERvY3VtZW50KCk7ICAvLy9cbiJdfQ==