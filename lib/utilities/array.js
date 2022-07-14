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
    first: function() {
        return first;
    },
    push: function() {
        return push;
    },
    augment: function() {
        return augment;
    },
    flatten: function() {
        return flatten;
    },
    guarantee: function() {
        return guarantee;
    }
});
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function first(array) {
    return array[0];
}
function push(array1, array2) {
    Array.prototype.push.apply(array1, array2);
}
function augment(array1, array2, test) {
    array1 = _toConsumableArray(array1); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwicHVzaCIsImF1Z21lbnQiLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwiYXJyYXkiLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiLCJyZWR1Y2UiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVHQSxLQUFLO2VBQUxBLEtBQUs7O0lBRUxDLElBQUk7ZUFBSkEsSUFBSTs7SUFFSkMsT0FBTztlQUFQQSxPQUFPOztJQWNQQyxPQUFPO2VBQVBBLE9BQU87O0lBUVBDLFNBQVM7ZUFBVEEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExQmxCLFNBQVNKLEtBQUssQ0FBQ0ssS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQUU7QUFFMUMsU0FBU0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUFFQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDUyxLQUFLLENBQUNKLE1BQU0sRUFBRUMsTUFBTSxDQUFDLENBQUM7Q0FBRTtBQUU3RSxTQUFTTCxPQUFPLENBQUNJLE1BQU0sRUFBRUMsTUFBTSxFQUFFSSxJQUFJLEVBQUU7SUFDNUNMLE1BQU0sR0FBSyxtQkFBR0EsTUFBTSxDQUFOQSxBQUFRLENBQUMsQ0FBQyxHQUFHO0lBRTNCQyxNQUFNLENBQUNLLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBSztRQUNqQyxJQUFNQyxNQUFNLEdBQUdKLElBQUksQ0FBQ0UsT0FBTyxFQUFFQyxLQUFLLENBQUMsQUFBQztRQUVwQyxJQUFJQyxNQUFNLEVBQUU7WUFDVlQsTUFBTSxDQUFDTCxJQUFJLENBQUNZLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBT1AsTUFBTSxDQUFDO0NBQ2Y7QUFFTSxTQUFTSCxPQUFPLENBQUNFLEtBQUssRUFBRTtJQUM3QixPQUFPQSxLQUFLLENBQUNXLE1BQU0sQ0FBQyxTQUFDWCxLQUFLLEVBQUVRLE9BQU8sRUFBSztRQUN0Q1IsS0FBSyxHQUFHQSxLQUFLLENBQUNZLE1BQU0sQ0FBQ0osT0FBTyxDQUFDLENBQUMsQ0FBRSxHQUFHO1FBRW5DLE9BQU9SLEtBQUssQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDUjtBQUVNLFNBQVNELFNBQVMsQ0FBQ2MsY0FBYyxFQUFFO0lBQ3hDQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxFQUFFLENBQUM7SUFFdEMsT0FBTyxBQUFDQSxBQUFjLFdBQVlWLENBQTFCVSxjQUFjLEVBQVlWLEtBQUssQ0FBQSxHQUM3QlUsY0FBYyxHQUNaO1FBQUNBLGNBQWM7S0FBQyxDQUFDO0NBQzlCIn0=