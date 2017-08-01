'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
    key: 'first',
    value: function first(array) {
      return array[0];
    }
  }, {
    key: 'splice',
    value: function splice(array, start, deleteCount) {
      var itemsArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      var args = [start, deleteCount].concat(_toConsumableArray(itemsArray)),
          deletedItemsArray = Array.prototype.splice.apply(array, args);

      return deletedItemsArray;
    }
  }, {
    key: 'combine',
    value: function combine(targetArray) {
      var sourceArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      targetArray = sourceArray.reduce(function (targetArray, sourceArrayElement) {
        if (!targetArray.includes(sourceArrayElement)) {
          var targetArrayElement = sourceArrayElement; ///

          targetArray.push(targetArrayElement);
        }

        return targetArray;
      }, targetArray);

      return targetArray;
    }
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5IiwidGFyZ2V0QXJyYXkiLCJzb3VyY2VBcnJheSIsInJlZHVjZSIsInNvdXJjZUFycmF5RWxlbWVudCIsImluY2x1ZGVzIiwidGFyZ2V0QXJyYXlFbGVtZW50IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxTOzs7Ozs7OzBCQUNTQyxLLEVBQU87QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7OzJCQUUxQkEsSyxFQUFPQyxLLEVBQU9DLFcsRUFBOEI7QUFBQSxVQUFqQkMsVUFBaUIsdUVBQUosRUFBSTs7QUFDeEQsVUFBTUMsUUFBUUgsS0FBUixFQUFlQyxXQUFmLDRCQUErQkMsVUFBL0IsRUFBTjtBQUFBLFVBQ01FLG9CQUFvQkMsTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCVCxLQUE3QixFQUFvQ0ksSUFBcEMsQ0FEMUI7O0FBR0EsYUFBT0MsaUJBQVA7QUFDRDs7OzRCQUVjSyxXLEVBQStCO0FBQUEsVUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7O0FBQzVDRCxvQkFBY0MsWUFBWUMsTUFBWixDQUFtQixVQUFTRixXQUFULEVBQXNCRyxrQkFBdEIsRUFBMEM7QUFDekUsWUFBSSxDQUFDSCxZQUFZSSxRQUFaLENBQXFCRCxrQkFBckIsQ0FBTCxFQUErQztBQUM3QyxjQUFNRSxxQkFBcUJGLGtCQUEzQixDQUQ2QyxDQUNHOztBQUVoREgsc0JBQVlNLElBQVosQ0FBaUJELGtCQUFqQjtBQUNEOztBQUVELGVBQU9MLFdBQVA7QUFDRCxPQVJhLEVBUVhBLFdBUlcsQ0FBZDs7QUFVQSxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCbkIsU0FBakIiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5VXRpbCB7XG4gIHN0YXRpYyBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuICBzdGF0aWMgc3BsaWNlKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkgPSBbXSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtc0FycmF5XSxcbiAgICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuXG4gICAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xuICB9XG5cbiAgc3RhdGljIGNvbWJpbmUodGFyZ2V0QXJyYXksIHNvdXJjZUFycmF5ID0gW10pIHtcbiAgICB0YXJnZXRBcnJheSA9IHNvdXJjZUFycmF5LnJlZHVjZShmdW5jdGlvbih0YXJnZXRBcnJheSwgc291cmNlQXJyYXlFbGVtZW50KSB7XG4gICAgICBpZiAoIXRhcmdldEFycmF5LmluY2x1ZGVzKHNvdXJjZUFycmF5RWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0QXJyYXlFbGVtZW50ID0gc291cmNlQXJyYXlFbGVtZW50OyAgLy8vXG4gICAgICAgIFxuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHRhcmdldEFycmF5RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXRBcnJheTtcbiAgICB9LCB0YXJnZXRBcnJheSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWw7XG4iXX0=