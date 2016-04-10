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
      this.$element.onKeyUp(handler);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(handler) {
      this.$element.onKeyDown(handler);
    }
  }]);

  return Document;
}();

var document = new Document();

module.exports = document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxJQUFJLFFBQVEsUUFBUixDQUFKOztJQUVFO0FBQ0osV0FESSxRQUNKLEdBQWM7MEJBRFYsVUFDVTs7QUFDWixTQUFLLFFBQUwsR0FBZ0IsRUFBRSxRQUFGLENBQWhCO0FBRFksR0FBZDs7ZUFESTs7NEJBS0ksU0FBUztBQUNmLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsT0FBdEIsRUFEZTs7Ozs4QkFJUCxTQUFTO0FBQ2pCLFdBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsT0FBeEIsRUFEaUI7Ozs7U0FUZjs7O0FBY04sSUFBSSxXQUFXLElBQUksUUFBSixFQUFYOztBQUVKLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkb2N1bWVudCk7ICAvLy9cbiAgfVxuXG4gIG9uS2V5VXAoaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQub25LZXlVcChoYW5kbGVyKTtcbiAgfVxuXG4gIG9uS2V5RG93bihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vbktleURvd24oaGFuZGxlcik7XG4gIH1cbn1cblxudmFyIGRvY3VtZW50ID0gbmV3IERvY3VtZW50KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQ7XG4iXX0=
