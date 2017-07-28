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
      var itemsArray = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

      var args = [start, deleteCount].concat(_toConsumableArray(itemsArray)),
          deletedItemsArray = Array.prototype.splice.apply(array, args);

      return deletedItemsArray;
    }
  }, {
    key: 'combine',
    value: function combine(targetArray) {
      var sourceArray = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      targetArray = sourceArray.reduce(function (targetArray, sourceArrayElement) {
        if (!targetArray.includes(sourceArrayElement)) {
          var targetArrayElement = sourceArrayElement; ///

          targetArray.push(targetArrayElement);
        }

        return targetArray;
      }, targetArray);

      return targetArray;
    }
  }, {
    key: 'find',
    value: function find(array, test) {
      var foundElement = null;

      array.some(function (element) {
        var found = test(element);

        if (found === true) {
          foundElement = element;

          return true;
        }
      });

      var element = foundElement; ///

      return element;
    }
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5IiwidGFyZ2V0QXJyYXkiLCJzb3VyY2VBcnJheSIsInJlZHVjZSIsInNvdXJjZUFycmF5RWxlbWVudCIsImluY2x1ZGVzIiwidGFyZ2V0QXJyYXlFbGVtZW50IiwicHVzaCIsInRlc3QiLCJmb3VuZEVsZW1lbnQiLCJzb21lIiwiZWxlbWVudCIsImZvdW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLFM7V0FBQUEsUzswQkFBQUEsUzs7O2VBQUFBLFM7OzBCQUNTQyxLLEVBQU87QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7OzJCQUUxQkEsSyxFQUFPQyxLLEVBQU9DLFcsRUFBOEI7QUFBQSxVQUFqQkMsVUFBaUIseURBQUosRUFBSTs7QUFDeEQsVUFBTUMsUUFBUUgsS0FBUixFQUFlQyxXQUFmLDRCQUErQkMsVUFBL0IsRUFBTjtBQUFBLFVBQ01FLG9CQUFvQkMsTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCVCxLQUE3QixFQUFvQ0ksSUFBcEMsQ0FEMUI7O0FBR0EsYUFBT0MsaUJBQVA7QUFDRDs7OzRCQUVjSyxXLEVBQStCO0FBQUEsVUFBbEJDLFdBQWtCLHlEQUFKLEVBQUk7O0FBQzVDRCxvQkFBY0MsWUFBWUMsTUFBWixDQUFtQixVQUFTRixXQUFULEVBQXNCRyxrQkFBdEIsRUFBMEM7QUFDekUsWUFBSSxDQUFDSCxZQUFZSSxRQUFaLENBQXFCRCxrQkFBckIsQ0FBTCxFQUErQztBQUM3QyxjQUFNRSxxQkFBcUJGLGtCQUEzQixDQUQ2QyxDQUNHOztBQUVoREgsc0JBQVlNLElBQVosQ0FBaUJELGtCQUFqQjtBQUNEOztBQUVELGVBQU9MLFdBQVA7QUFDRCxPQVJhLEVBUVhBLFdBUlcsQ0FBZDs7QUFVQSxhQUFPQSxXQUFQO0FBQ0Q7Ozt5QkFFV1YsSyxFQUFPaUIsSSxFQUFNO0FBQ3ZCLFVBQUlDLGVBQWUsSUFBbkI7O0FBRUFsQixZQUFNbUIsSUFBTixDQUFXLFVBQVNDLE9BQVQsRUFBa0I7QUFDM0IsWUFBTUMsUUFBUUosS0FBS0csT0FBTCxDQUFkOztBQUVBLFlBQUlDLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkgseUJBQWVFLE9BQWY7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxVQUFNQSxVQUFVRixZQUFoQixDQWJ1QixDQWFPOztBQUU5QixhQUFPRSxPQUFQO0FBQ0Q7OztTQXhDR3JCLFM7OztBQTJDTnVCLE9BQU9DLE9BQVAsR0FBaUJ4QixTQUFqQiIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXJyYXlVdGlsIHtcbiAgc3RhdGljIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4gIHN0YXRpYyBzcGxpY2UoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSA9IFtdKSB7XG4gICAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLml0ZW1zQXJyYXldLFxuICAgICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG5cbiAgICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgY29tYmluZSh0YXJnZXRBcnJheSwgc291cmNlQXJyYXkgPSBbXSkge1xuICAgIHRhcmdldEFycmF5ID0gc291cmNlQXJyYXkucmVkdWNlKGZ1bmN0aW9uKHRhcmdldEFycmF5LCBzb3VyY2VBcnJheUVsZW1lbnQpIHtcbiAgICAgIGlmICghdGFyZ2V0QXJyYXkuaW5jbHVkZXMoc291cmNlQXJyYXlFbGVtZW50KSkge1xuICAgICAgICBjb25zdCB0YXJnZXRBcnJheUVsZW1lbnQgPSBzb3VyY2VBcnJheUVsZW1lbnQ7ICAvLy9cbiAgICAgICAgXG4gICAgICAgIHRhcmdldEFycmF5LnB1c2godGFyZ2V0QXJyYXlFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldEFycmF5O1xuICAgIH0sIHRhcmdldEFycmF5KTtcblxuICAgIHJldHVybiB0YXJnZXRBcnJheTtcbiAgfVxuICBcbiAgc3RhdGljIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgICBsZXQgZm91bmRFbGVtZW50ID0gbnVsbDtcblxuICAgIGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgY29uc3QgZm91bmQgPSB0ZXN0KGVsZW1lbnQpO1xuICAgICAgXG4gICAgICBpZiAoZm91bmQgPT09IHRydWUpIHtcbiAgICAgICAgZm91bmRFbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBmb3VuZEVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWw7XG4iXX0=