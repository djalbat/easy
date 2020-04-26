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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXkiLCJzcGxpY2UiLCJhcnJheTEiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhcnJheTIiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZmxhdHRlbiIsInJlZHVjZSIsImVsZW1lbnQiLCJjb25jYXQiLCJndWFyYW50ZWUiLCJhcnJheU9yRWxlbWVudCIsImF1Z21lbnQiLCJ0ZXN0IiwiZm9yRWFjaCIsImluZGV4IiwicGFzc2VkIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQWtCOztBQUUxQyxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QkMsS0FBeEIsRUFBb0U7QUFBQSxNQUFyQ0MsV0FBcUMsdUVBQXZCQyxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsdUVBQUosRUFBSTtBQUN6RSxNQUFNQyxJQUFJLElBQUlKLEtBQUosRUFBV0MsV0FBWCw0QkFBMkJFLE1BQTNCLEVBQVY7QUFBQSxNQUNLRSxpQkFBaUIsR0FBR0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCVCxNQUFoQixDQUF1QlUsS0FBdkIsQ0FBNkJULE1BQTdCLEVBQXFDSyxJQUFyQyxDQUR6QjtBQUdBLFNBQU9DLGlCQUFQO0FBQ0Q7O0FBRU0sU0FBU0ksT0FBVCxDQUFpQlosS0FBakIsRUFBd0I7QUFDN0IsU0FBT0EsS0FBSyxDQUFDYSxNQUFOLENBQWEsVUFBQ2IsS0FBRCxFQUFRYyxPQUFSLEVBQW9CO0FBQ3RDZCxJQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ2UsTUFBTixDQUFhRCxPQUFiLENBQVIsQ0FEc0MsQ0FDTjs7QUFFaEMsV0FBT2QsS0FBUDtBQUNELEdBSk0sRUFJSixFQUpJLENBQVA7QUFLRDs7QUFFTSxTQUFTZ0IsU0FBVCxDQUFtQkMsY0FBbkIsRUFBbUM7QUFDeENBLEVBQUFBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLEVBQW5DO0FBRUEsU0FBUUEsY0FBYyxZQUFZUixLQUEzQixHQUNHUSxjQURILEdBRUssQ0FBQ0EsY0FBRCxDQUZaO0FBR0Q7O0FBRU0sU0FBU0MsT0FBVCxDQUFpQmhCLE1BQWpCLEVBQXlCSSxNQUF6QixFQUFpQ2EsSUFBakMsRUFBdUM7QUFDNUNiLEVBQUFBLE1BQU0sQ0FBQ2MsT0FBUCxDQUFlLFVBQUNOLE9BQUQsRUFBVU8sS0FBVixFQUFvQjtBQUNqQyxRQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQ0wsT0FBRCxFQUFVTyxLQUFWLENBQW5COztBQUVBLFFBQUlDLE1BQUosRUFBWTtBQUNWcEIsTUFBQUEsTUFBTSxDQUFDcUIsSUFBUCxDQUFZVCxPQUFaO0FBQ0Q7QUFDRixHQU5EO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuIl19