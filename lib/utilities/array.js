"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;
exports.splice = splice;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.augment = augment;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXkiLCJzcGxpY2UiLCJhcnJheTEiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhcnJheTIiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZmxhdHRlbiIsInJlZHVjZSIsImVsZW1lbnQiLCJjb25jYXQiLCJndWFyYW50ZWUiLCJhcnJheU9yRWxlbWVudCIsImF1Z21lbnQiLCJ0ZXN0IiwiZm9yRWFjaCIsImluZGV4IiwicGFzc2VkIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQWtCOztBQUUxQyxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QkMsS0FBeEIsRUFBb0U7QUFBQSxNQUFyQ0MsV0FBcUMsdUVBQXZCQyxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsdUVBQUosRUFBSTtBQUN6RSxNQUFNQyxJQUFJLElBQUlKLEtBQUosRUFBV0MsV0FBWCw0QkFBMkJFLE1BQTNCLEVBQVY7QUFBQSxNQUNLRSxpQkFBaUIsR0FBR0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCVCxNQUFoQixDQUF1QlUsS0FBdkIsQ0FBNkJULE1BQTdCLEVBQXFDSyxJQUFyQyxDQUR6QjtBQUdBLFNBQU9DLGlCQUFQO0FBQ0Q7O0FBRU0sU0FBU0ksT0FBVCxDQUFpQlosS0FBakIsRUFBd0I7QUFDN0IsU0FBT0EsS0FBSyxDQUFDYSxNQUFOLENBQWEsVUFBU2IsS0FBVCxFQUFnQmMsT0FBaEIsRUFBeUI7QUFDM0NkLElBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDZSxNQUFOLENBQWFELE9BQWIsQ0FBUixDQUQyQyxDQUNYOztBQUVoQyxXQUFPZCxLQUFQO0FBQ0QsR0FKTSxFQUlKLEVBSkksQ0FBUDtBQUtEOztBQUVNLFNBQVNnQixTQUFULENBQW1CQyxjQUFuQixFQUFtQztBQUN4Q0EsRUFBQUEsY0FBYyxHQUFHQSxjQUFjLElBQUksRUFBbkM7QUFFQSxTQUFRQSxjQUFjLFlBQVlSLEtBQTNCLEdBQ0dRLGNBREgsR0FFSyxDQUFDQSxjQUFELENBRlo7QUFHRDs7QUFFTSxTQUFTQyxPQUFULENBQWlCaEIsTUFBakIsRUFBeUJJLE1BQXpCLEVBQWlDYSxJQUFqQyxFQUF1QztBQUM1Q2IsRUFBQUEsTUFBTSxDQUFDYyxPQUFQLENBQWUsVUFBU04sT0FBVCxFQUFrQk8sS0FBbEIsRUFBeUI7QUFDdEMsUUFBTUMsTUFBTSxHQUFHSCxJQUFJLENBQUNMLE9BQUQsRUFBVU8sS0FBVixDQUFuQjs7QUFFQSxRQUFJQyxNQUFKLEVBQVk7QUFDVnBCLE1BQUFBLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWVQsT0FBWjtBQUNEO0FBQ0YsR0FORDtBQU9EIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24oYXJyYXksIGVsZW1lbnQpIHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=