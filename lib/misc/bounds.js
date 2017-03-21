'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bounds = function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: 'getBottom',
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: 'getRight',
    value: function getRight() {
      return this.right;
    }
  }, {
    key: 'isOverlappingMouse',
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: 'areOverlapping',
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: 'fromBoundingClientRect',
    value: function fromBoundingClientRect(boundingClientRect) {
      var windowScrollTop = window.pageYOffset,
          ///
      windowScrollLeft = window.pageXOffset,
          ///
      top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          right = boundingClientRect.right + windowScrollLeft,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
    }
  }]);

  return Bounds;
}();

module.exports = Bounds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjL2JvdW5kcy5qcyJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsImJvdW5kcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1Njcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwid2luZG93U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxNO0FBQ0osV0FESUEsTUFDSixDQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsTUFBdkIsRUFBK0JDLEtBQS9CLEVBQXNDO0FBQUEsMEJBRGxDSixNQUNrQzs7QUFDcEMsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O2VBTkdKLE07OzZCQVFLO0FBQ1AsYUFBTyxLQUFLQyxHQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozt1Q0FFa0JDLFEsRUFBVUMsUyxFQUFXO0FBQ3RDLGFBQVcsS0FBS0wsR0FBTCxHQUFXSSxRQUFaLElBQ0MsS0FBS0gsSUFBTCxHQUFZSSxTQURiLElBRUMsS0FBS0gsTUFBTCxHQUFjRSxRQUZmLElBR0MsS0FBS0QsS0FBTCxHQUFhRSxTQUh4QjtBQUlEOzs7bUNBRWNDLE0sRUFBUTtBQUNyQixhQUFXLEtBQUtOLEdBQUwsR0FBV00sT0FBT0osTUFBbkIsSUFDQyxLQUFLRCxJQUFMLEdBQVlLLE9BQU9ILEtBRHBCLElBRUMsS0FBS0QsTUFBTCxHQUFjSSxPQUFPTixHQUZ0QixJQUdDLEtBQUtHLEtBQUwsR0FBYUcsT0FBT0wsSUFIL0I7QUFJRDs7OzJDQUU2Qk0sa0IsRUFBb0I7QUFDaEQsVUFBTUMsa0JBQWtCQyxPQUFPQyxXQUEvQjtBQUFBLFVBQTRDO0FBQ3RDQyx5QkFBbUJGLE9BQU9HLFdBRGhDO0FBQUEsVUFDOEM7QUFDeENaLFlBQU1PLG1CQUFtQlAsR0FBbkIsR0FBeUJRLGVBRnJDO0FBQUEsVUFHTVAsT0FBT00sbUJBQW1CTixJQUFuQixHQUEwQlUsZ0JBSHZDO0FBQUEsVUFJTVQsU0FBU0ssbUJBQW1CTCxNQUFuQixHQUE0Qk0sZUFKM0M7QUFBQSxVQUtNTCxRQUFRSSxtQkFBbUJKLEtBQW5CLEdBQTJCUSxnQkFMekM7QUFBQSxVQU1NTCxTQUFTLElBQUlQLE1BQUosQ0FBV0MsR0FBWCxFQUFnQkMsSUFBaEIsRUFBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixDQU5mOztBQVFBLGFBQU9HLE1BQVA7QUFDRDs7O1NBaERHUCxNOzs7QUFtRE5jLE9BQU9DLE9BQVAsR0FBaUJmLE1BQWpCIiwiZmlsZSI6ImJvdW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgbW91c2VUb3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLmxlZnQgPCBtb3VzZUxlZnQpICYmXG4gICAgICAgICAgICAgICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5yaWdodCA+IG1vdXNlTGVmdCkgICk7XG4gIH1cblxuICBhcmVPdmVybGFwcGluZyhib3VuZHMpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgYm91bmRzLmJvdHRvbSkgJiZcbiAgICAgICAgICAgICAgKHRoaXMubGVmdCA8IGJvdW5kcy5yaWdodCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMuYm90dG9tID4gYm91bmRzLnRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMucmlnaHQgPiBib3VuZHMubGVmdCkgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCB3aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsIC8vL1xuICAgICAgICAgIHdpbmRvd1Njcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcbiJdfQ==