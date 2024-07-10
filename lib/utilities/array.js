"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    augment: function() {
        return augment;
    },
    first: function() {
        return first;
    },
    flatten: function() {
        return flatten;
    },
    guarantee: function() {
        return guarantee;
    },
    push: function() {
        return push;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function first(array) {
    return array[0];
}
function push(array1, array2) {
    Array.prototype.push.apply(array1, array2);
}
function augment(array1, array2, test) {
    array1 = _to_consumable_array(array1); ///
    array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
            array1.push(element);
        }
    });
    return array1;
}
function flatten(array) {
    return array.reduce(function(array, element) {
        array = array.concat(element); ///
        return array;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuIl0sIm5hbWVzIjpbImF1Z21lbnQiLCJmaXJzdCIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJwdXNoIiwiYXJyYXkiLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiLCJyZWR1Y2UiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWdCQSxPQUFPO2VBQVBBOztJQUpBQyxLQUFLO2VBQUxBOztJQWtCQUMsT0FBTztlQUFQQTs7SUFRQUMsU0FBUztlQUFUQTs7SUF4QkFDLElBQUk7ZUFBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRlQsU0FBU0gsTUFBTUksS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQyxFQUFFO0FBQUU7QUFFekMsU0FBU0QsS0FBS0UsTUFBTSxFQUFFQyxNQUFNO0lBQUlDLE1BQU1DLFNBQVMsQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUNKLFFBQVFDO0FBQVM7QUFFNUUsU0FBU1AsUUFBUU0sTUFBTSxFQUFFQyxNQUFNLEVBQUVJLElBQUk7SUFDMUNMLFNBQVcscUJBQUdBLFNBQVUsR0FBRztJQUUzQkMsT0FBT0ssT0FBTyxDQUFDLFNBQUNDLFNBQVNDO1FBQ3ZCLElBQU1DLFNBQVNKLEtBQUtFLFNBQVNDO1FBRTdCLElBQUlDLFFBQVE7WUFDVlQsT0FBT0YsSUFBSSxDQUFDUztRQUNkO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUO0FBRU8sU0FBU0osUUFBUUcsS0FBSztJQUMzQixPQUFPQSxNQUFNVyxNQUFNLENBQUMsU0FBQ1gsT0FBT1E7UUFDMUJSLFFBQVFBLE1BQU1ZLE1BQU0sQ0FBQ0osVUFBVyxHQUFHO1FBRW5DLE9BQU9SO0lBQ1QsR0FBRyxFQUFFO0FBQ1A7QUFFTyxTQUFTRixVQUFVZSxjQUFjO0lBQ3RDQSxpQkFBaUJBLGtCQUFrQixFQUFFO0lBRXJDLE9BQU8sQUFBQ0EsQUFBYyxZQUFkQSxnQkFBMEJWLFNBQ3hCVSxpQkFDRTtRQUFDQTtLQUFlO0FBQzlCIn0=