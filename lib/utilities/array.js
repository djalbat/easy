"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.push = push;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.augment = augment;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function first(array) {
    return array[0];
}
function push(array1, array2) {
    Array.prototype.push.apply(array1, array2);
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
function augment(array1, array2, test) {
    array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
            array1.push(element);
        }
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsInB1c2giLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwiYXVnbWVudCIsImFycmF5IiwiYXJyYXkxIiwiYXJyYXkyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInJlZHVjZSIsImVsZW1lbnQiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCIsInRlc3QiLCJmb3JFYWNoIiwiaW5kZXgiLCJwYXNzZWQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFFSUEsS0FBSyxHQUFMQSxLQUFLO1FBRUxDLElBQUksR0FBSkEsSUFBSTtRQUVKQyxPQUFPLEdBQVBBLE9BQU87UUFRUEMsU0FBUyxHQUFUQSxTQUFTO1FBUVRDLE9BQU8sR0FBUEEsT0FBTzs7Ozs7Ozs7U0FwQlBKLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUNBLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVqQ0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxDQUFDO0lBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDUixJQUFJLENBQUNTLEtBQUssQ0FBQ0osTUFBTSxFQUFFQyxNQUFNO0FBQUcsQ0FBQztTQUVwRUwsT0FBTyxDQUFDRyxLQUFLLEVBQUUsQ0FBQztJQUM5QixNQUFNLENBQUNBLEtBQUssQ0FBQ00sTUFBTSxDQUFDLFFBQVFDLENBQVBQLEtBQUssRUFBRU8sT0FBTyxFQUFLLENBQUM7UUFDdkNQLEtBQUssR0FBR0EsS0FBSyxDQUFDUSxNQUFNLENBQUNELE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFbkMsTUFBTSxDQUFDUCxLQUFLO0lBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNQLENBQUM7U0FFZUYsU0FBUyxDQUFDVyxjQUFjLEVBQUUsQ0FBQztJQUN6Q0EsY0FBYyxHQUFHQSxjQUFjLElBQUksQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBRUEsV0FBK0IsQ0FBL0JBLGNBQWMsRUFBWU4sS0FBSyxJQUM3Qk0sY0FBYyxHQUNaLENBQUNBO1FBQUFBLGNBQWM7SUFBQSxDQUFDO0FBQzlCLENBQUM7U0FFZVYsT0FBTyxDQUFDRSxNQUFNLEVBQUVDLE1BQU0sRUFBRVEsSUFBSSxFQUFFLENBQUM7SUFDN0NSLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDLFFBQVEsQ0FBUEosT0FBTyxFQUFFSyxLQUFLLEVBQUssQ0FBQztRQUNsQyxHQUFLLENBQUNDLE1BQU0sR0FBR0gsSUFBSSxDQUFDSCxPQUFPLEVBQUVLLEtBQUs7UUFFbEMsRUFBRSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUNYWixNQUFNLENBQUNMLElBQUksQ0FBQ1csT0FBTztRQUNyQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMifQ==