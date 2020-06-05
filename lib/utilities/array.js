"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;
exports.splice = splice;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.augment = augment;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXkiLCJzcGxpY2UiLCJhcnJheTEiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhcnJheTIiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZmxhdHRlbiIsInJlZHVjZSIsImVsZW1lbnQiLCJjb25jYXQiLCJndWFyYW50ZWUiLCJhcnJheU9yRWxlbWVudCIsImF1Z21lbnQiLCJ0ZXN0IiwiZm9yRWFjaCIsImluZGV4IiwicGFzc2VkIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUFrQjs7QUFFMUMsU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLEtBQXhCLEVBQW9FO0FBQUEsTUFBckNDLFdBQXFDLHVFQUF2QkMsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFDekUsTUFBTUMsSUFBSSxJQUFJSixLQUFKLEVBQVdDLFdBQVgsNEJBQTJCRSxNQUEzQixFQUFWO0FBQUEsTUFDS0UsaUJBQWlCLEdBQUdDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQlQsTUFBaEIsQ0FBdUJVLEtBQXZCLENBQTZCVCxNQUE3QixFQUFxQ0ssSUFBckMsQ0FEekI7QUFHQSxTQUFPQyxpQkFBUDtBQUNEOztBQUVNLFNBQVNJLE9BQVQsQ0FBaUJaLEtBQWpCLEVBQXdCO0FBQzdCLFNBQU9BLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUNiLEtBQUQsRUFBUWMsT0FBUixFQUFvQjtBQUN0Q2QsSUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNlLE1BQU4sQ0FBYUQsT0FBYixDQUFSLENBRHNDLENBQ047O0FBRWhDLFdBQU9kLEtBQVA7QUFDRCxHQUpNLEVBSUosRUFKSSxDQUFQO0FBS0Q7O0FBRU0sU0FBU2dCLFNBQVQsQ0FBbUJDLGNBQW5CLEVBQW1DO0FBQ3hDQSxFQUFBQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxFQUFuQztBQUVBLFNBQVFBLGNBQWMsWUFBWVIsS0FBM0IsR0FDR1EsY0FESCxHQUVLLENBQUNBLGNBQUQsQ0FGWjtBQUdEOztBQUVNLFNBQVNDLE9BQVQsQ0FBaUJoQixNQUFqQixFQUF5QkksTUFBekIsRUFBaUNhLElBQWpDLEVBQXVDO0FBQzVDYixFQUFBQSxNQUFNLENBQUNjLE9BQVAsQ0FBZSxVQUFDTixPQUFELEVBQVVPLEtBQVYsRUFBb0I7QUFDakMsUUFBTUMsTUFBTSxHQUFHSCxJQUFJLENBQUNMLE9BQUQsRUFBVU8sS0FBVixDQUFuQjs7QUFFQSxRQUFJQyxNQUFKLEVBQVk7QUFDVnBCLE1BQUFBLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWVQsT0FBWjtBQUNEO0FBQ0YsR0FORDtBQU9EIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==