'use strict';

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

module.exports = {
  first: first,
  splice: splice,
  flatten: flatten,
  guarantee: guarantee,
  augment: augment
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXkiLCJzcGxpY2UiLCJhcnJheTEiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhcnJheTIiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZmxhdHRlbiIsInJlZHVjZSIsImVsZW1lbnQiLCJjb25jYXQiLCJndWFyYW50ZWUiLCJhcnJheU9yRWxlbWVudCIsImF1Z21lbnQiLCJ0ZXN0IiwiZm9yRWFjaCIsImluZGV4IiwicGFzc2VkIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUFrQjs7QUFFMUMsU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLEtBQXhCLEVBQW9FO0FBQUEsTUFBckNDLFdBQXFDLHVFQUF2QkMsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFDbEUsTUFBTUMsSUFBSSxJQUFJSixLQUFKLEVBQVdDLFdBQVgsNEJBQTJCRSxNQUEzQixFQUFWO0FBQUEsTUFDS0UsaUJBQWlCLEdBQUdDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQlQsTUFBaEIsQ0FBdUJVLEtBQXZCLENBQTZCVCxNQUE3QixFQUFxQ0ssSUFBckMsQ0FEekI7QUFHQSxTQUFPQyxpQkFBUDtBQUNEOztBQUVELFNBQVNJLE9BQVQsQ0FBaUJaLEtBQWpCLEVBQXdCO0FBQ3RCLFNBQU9BLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQVNiLEtBQVQsRUFBZ0JjLE9BQWhCLEVBQXlCO0FBQzNDZCxJQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ2UsTUFBTixDQUFhRCxPQUFiLENBQVIsQ0FEMkMsQ0FDWDs7QUFFaEMsV0FBT2QsS0FBUDtBQUNELEdBSk0sRUFJSixFQUpJLENBQVA7QUFLRDs7QUFFRCxTQUFTZ0IsU0FBVCxDQUFtQkMsY0FBbkIsRUFBbUM7QUFDakNBLEVBQUFBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLEVBQW5DO0FBRUEsU0FBUUEsY0FBYyxZQUFZUixLQUEzQixHQUNHUSxjQURILEdBRUssQ0FBQ0EsY0FBRCxDQUZaO0FBR0Q7O0FBRUQsU0FBU0MsT0FBVCxDQUFpQmhCLE1BQWpCLEVBQXlCSSxNQUF6QixFQUFpQ2EsSUFBakMsRUFBdUM7QUFDckNiLEVBQUFBLE1BQU0sQ0FBQ2MsT0FBUCxDQUFlLFVBQVNOLE9BQVQsRUFBa0JPLEtBQWxCLEVBQXlCO0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0gsSUFBSSxDQUFDTCxPQUFELEVBQVVPLEtBQVYsQ0FBbkI7O0FBRUEsUUFBSUMsTUFBSixFQUFZO0FBQ1ZwQixNQUFBQSxNQUFNLENBQUNxQixJQUFQLENBQVlULE9BQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFFRFUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2YxQixFQUFBQSxLQUFLLEVBQUxBLEtBRGU7QUFFZkUsRUFBQUEsTUFBTSxFQUFOQSxNQUZlO0FBR2ZXLEVBQUFBLE9BQU8sRUFBUEEsT0FIZTtBQUlmSSxFQUFBQSxTQUFTLEVBQVRBLFNBSmU7QUFLZkUsRUFBQUEsT0FBTyxFQUFQQTtBQUxlLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKGFycmF5LCBlbGVtZW50KSB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0LFxuICBzcGxpY2UsXG4gIGZsYXR0ZW4sXG4gIGd1YXJhbnRlZSxcbiAgYXVnbWVudFxufTtcbiJdfQ==