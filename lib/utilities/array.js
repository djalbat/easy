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
    return array.reduce(function(array1, element) {
        array1 = array1.concat(element); ///
        return array1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7O1FBRUEsS0FBQSxHQUFBLEtBQUE7UUFFQSxJQUFBLEdBQUEsSUFBQTtRQUVBLE9BQUEsR0FBQSxPQUFBO1FBUUEsU0FBQSxHQUFBLFNBQUE7UUFRQSxPQUFBLEdBQUEsT0FBQTs7Ozs7Ozs7U0FwQkEsS0FBQSxDQUFBLEtBQUE7V0FBQSxLQUFBLENBQUEsQ0FBQTs7U0FFQSxJQUFBLENBQUEsTUFBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLE1BQUE7O1NBRUEsT0FBQSxDQUFBLEtBQUE7V0FDQSxLQUFBLENBQUEsTUFBQSxVQUFBLE1BQUEsRUFBQSxPQUFBO0FBQ0EsY0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBO2VBRUEsTUFBQTs7O1NBSUEsU0FBQSxDQUFBLGNBQUE7QUFDQSxrQkFBQSxHQUFBLGNBQUE7V0FFQSxXQUFBLENBQUEsY0FBQSxFQUFBLEtBQUEsSUFDQSxjQUFBO0FBQ0Esc0JBQUE7OztTQUdBLE9BQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLElBQUE7QUFDQSxVQUFBLENBQUEsT0FBQSxVQUFBLE9BQUEsRUFBQSxLQUFBO1lBQ0EsTUFBQSxHQUFBLElBQUEsQ0FBQSxPQUFBLEVBQUEsS0FBQTtZQUVBLE1BQUE7QUFDQSxrQkFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBIn0=