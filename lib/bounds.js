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
    key: 'areOverlapping',
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }]);

  return Bounds;
}();

module.exports = Bounds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9ib3VuZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxNQUNKLENBQVksR0FBWixFQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQixLQUEvQixFQUFzQzswQkFEbEMsUUFDa0M7O0FBQ3BDLFNBQUssR0FBTCxHQUFXLEdBQVgsQ0FEb0M7QUFFcEMsU0FBSyxJQUFMLEdBQVksSUFBWixDQUZvQztBQUdwQyxTQUFLLE1BQUwsR0FBYyxNQUFkLENBSG9DO0FBSXBDLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FKb0M7R0FBdEM7O2VBREk7OzZCQVFLO0FBQ1AsYUFBTyxLQUFLLEdBQUwsQ0FEQTs7Ozs4QkFJQztBQUNSLGFBQU8sS0FBSyxJQUFMLENBREM7Ozs7Z0NBSUU7QUFDVixhQUFPLEtBQUssTUFBTCxDQURHOzs7OytCQUlEO0FBQ1QsYUFBTyxLQUFLLEtBQUwsQ0FERTs7OzttQ0FJSSxRQUFRO0FBQ3JCLGFBQU8sS0FBSyxHQUFMLEdBQVcsT0FBTyxNQUFQLElBQ1gsS0FBSyxJQUFMLEdBQVksT0FBTyxLQUFQLElBQ1osS0FBSyxNQUFMLEdBQWMsT0FBTyxHQUFQLElBQ2QsS0FBSyxLQUFMLEdBQWEsT0FBTyxJQUFQLENBSkM7Ozs7U0F4Qm5COzs7QUFnQ04sT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6ImJvdW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wIDwgYm91bmRzLmJvdHRvbVxuICAgICAgICAmJiB0aGlzLmxlZnQgPCBib3VuZHMucmlnaHRcbiAgICAgICAgJiYgdGhpcy5ib3R0b20gPiBib3VuZHMudG9wXG4gICAgICAgICYmIHRoaXMucmlnaHQgPiBib3VuZHMubGVmdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcbiJdfQ==
