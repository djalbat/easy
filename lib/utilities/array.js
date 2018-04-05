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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheSIsInNwbGljZSIsImFycmF5MSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsImFycmF5MiIsImFyZ3MiLCJkZWxldGVkSXRlbXNBcnJheSIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJhdWdtZW50IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7QUFFMUMsU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLEtBQXhCLEVBQW9FO0FBQUEsTUFBckNDLFdBQXFDLHVFQUF2QkMsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQ2xFLE1BQU1DLFFBQVFKLEtBQVIsRUFBZUMsV0FBZiw0QkFBK0JFLE1BQS9CLEVBQU47QUFBQSxNQUNLRSxvQkFBb0JDLE1BQU1DLFNBQU4sQ0FBZ0JULE1BQWhCLENBQXVCVSxLQUF2QixDQUE2QlQsTUFBN0IsRUFBcUNLLElBQXJDLENBRHpCOztBQUdBLFNBQU9DLGlCQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksT0FBVCxDQUFpQlYsTUFBakIsRUFBeUJJLE1BQXpCLEVBQWlDTyxJQUFqQyxFQUF1QztBQUNyQ1AsU0FBT1EsT0FBUCxDQUFlLFVBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3RDLFFBQU1DLFNBQVNKLEtBQUtFLE9BQUwsRUFBY0MsS0FBZCxDQUFmOztBQUVBLFFBQUlDLE1BQUosRUFBWTtBQUNWZixhQUFPZ0IsSUFBUCxDQUFZSCxPQUFaO0FBQ0Q7QUFDRixHQU5EO0FBT0Q7O0FBRURJLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnJCLFNBQU9BLEtBRFE7QUFFZkUsVUFBUUEsTUFGTztBQUdmVyxXQUFTQTtBQUhNLENBQWpCIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc3BsaWNlOiBzcGxpY2UsXG4gIGF1Z21lbnQ6IGF1Z21lbnRcbn07XG4iXX0=