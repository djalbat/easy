'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function first(array) {
  return array[0];
}

function splice(array1, start) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

module.exports = {
  first: first,
  splice: splice,
  augment: augment
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheSIsInNwbGljZSIsImFycmF5MSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsImFycmF5MiIsImFyZ3MiLCJkZWxldGVkSXRlbXNBcnJheSIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJhdWdtZW50IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7QUFFMUMsU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLEtBQXhCLEVBQW9FO0FBQUEsTUFBckNDLFdBQXFDLHVFQUF2QkMsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQ2xFLE1BQU1DLFFBQVFKLEtBQVIsRUFBZUMsV0FBZiw0QkFBK0JFLE1BQS9CLEVBQU47QUFBQSxNQUNLRSxvQkFBb0JDLE1BQU1DLFNBQU4sQ0FBZ0JULE1BQWhCLENBQXVCVSxLQUF2QixDQUE2QlQsTUFBN0IsRUFBcUNLLElBQXJDLENBRHpCOztBQUdBLFNBQU9DLGlCQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksT0FBVCxDQUFpQlYsTUFBakIsRUFBeUJJLE1BQXpCLEVBQWlDTyxJQUFqQyxFQUF1QztBQUNyQ1AsU0FBT1EsT0FBUCxDQUFlLFVBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3RDLFFBQU1DLFNBQVNKLEtBQUtFLE9BQUwsRUFBY0MsS0FBZCxDQUFmOztBQUVBLFFBQUlDLE1BQUosRUFBWTtBQUNWZixhQUFPZ0IsSUFBUCxDQUFZSCxPQUFaO0FBQ0Q7QUFDRixHQU5EO0FBT0Q7O0FBRURJLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnJCLGNBRGU7QUFFZkUsZ0JBRmU7QUFHZlc7QUFIZSxDQUFqQiIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdCxcbiAgc3BsaWNlLFxuICBhdWdtZW50XG59O1xuIl19