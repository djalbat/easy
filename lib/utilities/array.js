"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.push = push;
exports.augment = augment;
exports.flatten = flatten;
exports.guarantee = guarantee;
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
function flatten(array3) {
    return array3.reduce(function(array, element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwicHVzaCIsImF1Z21lbnQiLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwiYXJyYXkiLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiLCJyZWR1Y2UiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O1FBRUdBLEtBQUssR0FBTEEsS0FBSztRQUVMQyxJQUFJLEdBQUpBLElBQUk7UUFFSkMsT0FBTyxHQUFQQSxPQUFPO1FBY1BDLE9BQU8sR0FBUEEsT0FBTztRQVFQQyxTQUFTLEdBQVRBLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTFCbEIsU0FBU0osS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFBRSxPQUFPQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FBRTtBQUUxQyxTQUFTSixJQUFJLENBQUNLLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQUVDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDUixJQUFJLENBQUNTLEtBQUssQ0FBQ0osTUFBTSxFQUFFQyxNQUFNLENBQUMsQ0FBQztDQUFFO0FBRTdFLFNBQVNMLE9BQU8sQ0FBQ0ksTUFBTSxFQUFFQyxNQUFNLEVBQUVJLElBQUksRUFBRTtJQUM1Q0wsTUFBTSxHQUFLLG1CQUFHQSxNQUFNLENBQU5BLEFBQVEsQ0FBQyxDQUFDLEdBQUc7SUFFM0JDLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO1FBQ2pDLElBQU1DLE1BQU0sR0FBR0osSUFBSSxDQUFDRSxPQUFPLEVBQUVDLEtBQUssQ0FBQyxBQUFDO1FBRXBDLElBQUlDLE1BQU0sRUFBRTtZQUNWVCxNQUFNLENBQUNMLElBQUksQ0FBQ1ksT0FBTyxDQUFDLENBQUM7U0FDdEI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPUCxNQUFNLENBQUM7Q0FDZjtBQUVNLFNBQVNILE9BQU8sQ0FBQ0UsTUFBSyxFQUFFO0lBQzdCLE9BQU9BLE1BQUssQ0FBQ1csTUFBTSxDQUFDLFNBQUNYLEtBQUssRUFBRVEsT0FBTyxFQUFLO1FBQ3RDUixLQUFLLEdBQUdBLEtBQUssQ0FBQ1ksTUFBTSxDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFFLEdBQUc7UUFFbkMsT0FBT1IsS0FBSyxDQUFDO0tBQ2QsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNSO0FBRU0sU0FBU0QsU0FBUyxDQUFDYyxjQUFjLEVBQUU7SUFDeENBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLEVBQUUsQ0FBQztJQUV0QyxPQUFPLEFBQUNBLFdBQStCLENBQS9CQSxjQUFjLEVBQVlWLEtBQUssQ0FBQSxHQUM3QlUsY0FBYyxHQUNaO1FBQUNBLGNBQWM7S0FBQyxDQUFDO0NBQzlCIn0=