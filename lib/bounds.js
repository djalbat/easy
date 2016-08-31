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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ib3VuZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osa0JBQVksR0FBWixFQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQixLQUEvQixFQUFzQzs7O0FBQ3BDLFNBQUssR0FBTCxHQUFXLEdBQVgsQ0FEb0M7QUFFcEMsU0FBSyxJQUFMLEdBQVksSUFBWixDQUZvQztBQUdwQyxTQUFLLE1BQUwsR0FBYyxNQUFkLENBSG9DO0FBSXBDLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FKb0M7R0FBdEM7Ozs7NkJBT1M7QUFDUCxhQUFPLEtBQUssR0FBTCxDQURBOzs7OzhCQUlDO0FBQ1IsYUFBTyxLQUFLLElBQUwsQ0FEQzs7OztnQ0FJRTtBQUNWLGFBQU8sS0FBSyxNQUFMLENBREc7Ozs7K0JBSUQ7QUFDVCxhQUFPLEtBQUssS0FBTCxDQURFOzs7O21DQUlJLFFBQVE7QUFDckIsYUFBTyxLQUFLLEdBQUwsR0FBVyxPQUFPLE1BQVAsSUFDWCxLQUFLLElBQUwsR0FBWSxPQUFPLEtBQVAsSUFDWixLQUFLLE1BQUwsR0FBYyxPQUFPLEdBQVAsSUFDZCxLQUFLLEtBQUwsR0FBYSxPQUFPLElBQVAsQ0FKQzs7Ozs7OztBQVF6QixPQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoiYm91bmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBhcmVPdmVybGFwcGluZyhib3VuZHMpIHtcbiAgICByZXR1cm4gdGhpcy50b3AgPCBib3VuZHMuYm90dG9tXG4gICAgICAgICYmIHRoaXMubGVmdCA8IGJvdW5kcy5yaWdodFxuICAgICAgICAmJiB0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3BcbiAgICAgICAgJiYgdGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIl19
