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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheSIsInB1c2giLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZmxhdHRlbiIsInJlZHVjZSIsImVsZW1lbnQiLCJjb25jYXQiLCJndWFyYW50ZWUiLCJhcnJheU9yRWxlbWVudCIsImF1Z21lbnQiLCJ0ZXN0IiwiZm9yRWFjaCIsImluZGV4IiwicGFzc2VkIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksS0FBSyxHQUFMLEtBQUs7UUFFTCxJQUFJLEdBQUosSUFBSTtRQUVKLE9BQU8sR0FBUCxPQUFPO1FBUVAsU0FBUyxHQUFULFNBQVM7UUFRVCxPQUFPLEdBQVAsT0FBTzs7Ozs7Ozs7U0FwQlAsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVqQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNO0FBQUcsQ0FBQztTQUVwRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPLEVBQUssQ0FBQztRQUN2QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRW5DLE1BQU0sQ0FBQyxLQUFLO0lBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNQLENBQUM7U0FFZSxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekMsY0FBYyxHQUFHLGNBQWMsSUFBSSxDQUFDLENBQUM7SUFFckMsTUFBTSxDQUFFLFdBQStCLENBQS9CLGNBQWMsRUFBWSxLQUFLLElBQzdCLGNBQWMsR0FDWixDQUFDO1FBQUEsY0FBYztJQUFBLENBQUM7QUFDOUIsQ0FBQztTQUVlLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLE9BQU8sRUFBRSxLQUFLLEVBQUssQ0FBQztRQUNsQyxHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUVsQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87UUFDckIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==