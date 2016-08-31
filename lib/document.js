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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxJQUFJLFFBQVEsUUFBUixDQUFKOztJQUVFO0FBQ0osc0JBQWM7OztBQUNaLFNBQUssUUFBTCxHQUFnQixFQUFFLFFBQUYsQ0FBaEI7QUFEWSxHQUFkOzs7OzRCQUlRLFNBQVM7QUFDZixXQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLE9BQXBCLEVBRGU7Ozs7OEJBSVAsU0FBUztBQUNqQixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLE9BQXRCLEVBRGlCOzs7Ozs7O0FBS3JCLE9BQU8sT0FBUCxHQUFpQixJQUFJLFFBQUosRUFBakIiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZG9jdW1lbnQpOyAgLy8vXG4gIH1cblxuICBvbktleVVwKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmtleXVwKGhhbmRsZXIpO1xuICB9XG5cbiAgb25LZXlEb3duKGhhbmRsZXIpIHtcbiAgICB0aGlzLiRlbGVtZW50LmtleWRvd24oaGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIl19
