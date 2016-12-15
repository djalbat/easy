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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkRvY3VtZW50IiwiaGFuZGxlciIsImRvY3VtZW50Iiwia2V5dXAiLCJrZXlkb3duIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztJQUVNQyxRO1dBQUFBLFE7MEJBQUFBLFE7OztlQUFBQSxROzs0QkFDSUMsTyxFQUFTO0FBQ2ZILFFBQUVJLFFBQUYsRUFBWUMsS0FBWixDQUFrQkYsT0FBbEIsRUFEZSxDQUNhO0FBQzdCOzs7OEJBRVNBLE8sRUFBUztBQUNqQkgsUUFBRUksUUFBRixFQUFZRSxPQUFaLENBQW9CSCxPQUFwQixFQURpQixDQUNhO0FBQy9COzs7U0FQR0QsUTs7O0FBVU5LLE9BQU9DLE9BQVAsR0FBaUIsSUFBSU4sUUFBSixFQUFqQixDLENBQWtDIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIG9uS2V5VXAoaGFuZGxlcikge1xuICAgICQoZG9jdW1lbnQpLmtleXVwKGhhbmRsZXIpOyAvLy9cbiAgfVxuXG4gIG9uS2V5RG93bihoYW5kbGVyKSB7XG4gICAgJChkb2N1bWVudCkua2V5ZG93bihoYW5kbGVyKTsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIl19