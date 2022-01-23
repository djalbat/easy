"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.push = push;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.augment = augment;
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
        return right[Symbol.hasInstance](left);
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
function flatten(array1) {
    return array1.reduce(function(array, element) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwicHVzaCIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJhdWdtZW50IiwiYXJyYXkiLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwicmVkdWNlIiwiZWxlbWVudCIsImNvbmNhdCIsImFycmF5T3JFbGVtZW50IiwidGVzdCIsImZvckVhY2giLCJpbmRleCIsInBhc3NlZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUVJQSxLQUFLLEdBQUxBLEtBQUs7UUFFTEMsSUFBSSxHQUFKQSxJQUFJO1FBRUpDLE9BQU8sR0FBUEEsT0FBTztRQVFQQyxTQUFTLEdBQVRBLFNBQVM7UUFRVEMsT0FBTyxHQUFQQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FwQlBKLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUNBLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVqQ0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxDQUFDO0lBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDUixJQUFJLENBQUNTLEtBQUssQ0FBQ0osTUFBTSxFQUFFQyxNQUFNO0FBQUcsQ0FBQztTQUVwRUwsT0FBTyxDQUFDRyxNQUFLLEVBQUUsQ0FBQztJQUM5QixNQUFNLENBQUNBLE1BQUssQ0FBQ00sTUFBTSxDQUFDLFFBQVFDLENBQVBQLEtBQUssRUFBRU8sT0FBTyxFQUFLLENBQUM7UUFDdkNQLEtBQUssR0FBR0EsS0FBSyxDQUFDUSxNQUFNLENBQUNELE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFbkMsTUFBTSxDQUFDUCxLQUFLO0lBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNQLENBQUM7U0FFZUYsU0FBUyxDQUFDVyxjQUFjLEVBQUUsQ0FBQztJQUN6Q0EsY0FBYyxHQUFHQSxjQUFjLElBQUksQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBRUEsV0FBK0IsQ0FBL0JBLGNBQWMsRUFBWU4sS0FBSyxJQUM3Qk0sY0FBYyxHQUNaLENBQUNBO1FBQUFBLGNBQWM7SUFBQSxDQUFDO0FBQzlCLENBQUM7U0FFZVYsT0FBTyxDQUFDRSxNQUFNLEVBQUVDLE1BQU0sRUFBRVEsSUFBSSxFQUFFLENBQUM7SUFDN0NULE1BQU0sc0JBQVFBLE1BQU0sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFM0JDLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDLFFBQVEsQ0FBUEosT0FBTyxFQUFFSyxLQUFLLEVBQUssQ0FBQztRQUNsQyxHQUFLLENBQUNDLE1BQU0sR0FBR0gsSUFBSSxDQUFDSCxPQUFPLEVBQUVLLEtBQUs7UUFFbEMsRUFBRSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUNYWixNQUFNLENBQUNMLElBQUksQ0FBQ1csT0FBTztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ04sTUFBTTtBQUNmLENBQUMifQ==