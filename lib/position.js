'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = function () {
  function Position(top, left) {
    _classCallCheck(this, Position);

    this.top = top;
    this.left = left;
  }

  _createClass(Position, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9wb3NpdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU07QUFDSixXQURJLFFBQ0osQ0FBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCOzBCQURuQixVQUNtQjs7QUFDckIsU0FBSyxHQUFMLEdBQVcsR0FBWCxDQURxQjtBQUVyQixTQUFLLElBQUwsR0FBWSxJQUFaLENBRnFCO0dBQXZCOztlQURJOzs2QkFNSztBQUNQLGFBQU8sS0FBSyxHQUFMLENBREE7Ozs7OEJBSUM7QUFDUixhQUFPLEtBQUssSUFBTCxDQURDOzs7O1NBVk47OztBQWVOLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJwb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc2l0aW9uO1xuIl19
