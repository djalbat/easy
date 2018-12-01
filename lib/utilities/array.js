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

function flatten(array) {
  return array.reduce(function (array, element) {
    array = array.concat(element); ///

    return array;
  }, []);
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
  flatten: flatten,
  augment: augment
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheSIsInNwbGljZSIsImFycmF5MSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsImFycmF5MiIsImFyZ3MiLCJkZWxldGVkSXRlbXNBcnJheSIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJmbGF0dGVuIiwicmVkdWNlIiwiZWxlbWVudCIsImNvbmNhdCIsImF1Z21lbnQiLCJ0ZXN0IiwiZm9yRWFjaCIsImluZGV4IiwicGFzc2VkIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNDLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCQyxLQUF4QixFQUFvRTtBQUFBLE1BQXJDQyxXQUFxQyx1RUFBdkJDLFFBQXVCO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUNsRSxNQUFNQyxRQUFRSixLQUFSLEVBQWVDLFdBQWYsNEJBQStCRSxNQUEvQixFQUFOO0FBQUEsTUFDS0Usb0JBQW9CQyxNQUFNQyxTQUFOLENBQWdCVCxNQUFoQixDQUF1QlUsS0FBdkIsQ0FBNkJULE1BQTdCLEVBQXFDSyxJQUFyQyxDQUR6Qjs7QUFHQSxTQUFPQyxpQkFBUDtBQUNEOztBQUVELFNBQVNJLE9BQVQsQ0FBaUJaLEtBQWpCLEVBQXdCO0FBQ3RCLFNBQU9BLE1BQU1hLE1BQU4sQ0FBYSxVQUFTYixLQUFULEVBQWdCYyxPQUFoQixFQUF5QjtBQUMzQ2QsWUFBUUEsTUFBTWUsTUFBTixDQUFhRCxPQUFiLENBQVIsQ0FEMkMsQ0FDWDs7QUFFaEMsV0FBT2QsS0FBUDtBQUNELEdBSk0sRUFJSixFQUpJLENBQVA7QUFLRDs7QUFFRCxTQUFTZ0IsT0FBVCxDQUFpQmQsTUFBakIsRUFBeUJJLE1BQXpCLEVBQWlDVyxJQUFqQyxFQUF1QztBQUNyQ1gsU0FBT1ksT0FBUCxDQUFlLFVBQVNKLE9BQVQsRUFBa0JLLEtBQWxCLEVBQXlCO0FBQ3RDLFFBQU1DLFNBQVNILEtBQUtILE9BQUwsRUFBY0ssS0FBZCxDQUFmOztBQUVBLFFBQUlDLE1BQUosRUFBWTtBQUNWbEIsYUFBT21CLElBQVAsQ0FBWVAsT0FBWjtBQUNEO0FBQ0YsR0FORDtBQU9EOztBQUVEUSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z4QixjQURlO0FBRWZFLGdCQUZlO0FBR2ZXLGtCQUhlO0FBSWZJO0FBSmUsQ0FBakIiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24oYXJyYXksIGVsZW1lbnQpIHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdCxcbiAgc3BsaWNlLFxuICBmbGF0dGVuLFxuICBhdWdtZW50XG59O1xuIl19