"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.push = push;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.augment = augment;
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwicHVzaCIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJhdWdtZW50IiwiYXJyYXkiLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwicmVkdWNlIiwiZWxlbWVudCIsImNvbmNhdCIsImFycmF5T3JFbGVtZW50IiwidGVzdCIsImZvckVhY2giLCJpbmRleCIsInBhc3NlZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUVJQSxLQUFLLEdBQUxBLEtBQUs7UUFFTEMsSUFBSSxHQUFKQSxJQUFJO1FBRUpDLE9BQU8sR0FBUEEsT0FBTztRQVFQQyxTQUFTLEdBQVRBLFNBQVM7UUFRVEMsT0FBTyxHQUFQQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBcEJQSixLQUFLLENBQUNLLEtBQUssRUFBRSxDQUFDO0lBQUMsTUFBTSxDQUFDQSxLQUFLLENBQUMsQ0FBQztBQUFHLENBQUM7U0FFakNKLElBQUksQ0FBQ0ssTUFBTSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDUyxLQUFLLENBQUNKLE1BQU0sRUFBRUMsTUFBTTtBQUFHLENBQUM7U0FFcEVMLE9BQU8sQ0FBQ0csTUFBSyxFQUFFLENBQUM7SUFDOUIsTUFBTSxDQUFDQSxNQUFLLENBQUNNLE1BQU0sQ0FBQyxRQUFRQyxDQUFQUCxLQUFLLEVBQUVPLE9BQU8sRUFBSyxDQUFDO1FBQ3ZDUCxLQUFLLEdBQUdBLEtBQUssQ0FBQ1EsTUFBTSxDQUFDRCxPQUFPLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRW5DLE1BQU0sQ0FBQ1AsS0FBSztJQUNkLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDUCxDQUFDO1NBRWVGLFNBQVMsQ0FBQ1csY0FBYyxFQUFFLENBQUM7SUFDekNBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLENBQUMsQ0FBQztJQUVyQyxNQUFNLENBQUVBLFdBQStCLENBQS9CQSxjQUFjLEVBQVlOLEtBQUssSUFDN0JNLGNBQWMsR0FDWixDQUFDQTtRQUFBQSxjQUFjO0lBQUEsQ0FBQztBQUM5QixDQUFDO1NBRWVWLE9BQU8sQ0FBQ0UsTUFBTSxFQUFFQyxNQUFNLEVBQUVRLElBQUksRUFBRSxDQUFDO0lBQzdDVCxNQUFNLHNCQUFRQSxNQUFNLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNCQyxNQUFNLENBQUNTLE9BQU8sQ0FBQyxRQUFRLENBQVBKLE9BQU8sRUFBRUssS0FBSyxFQUFLLENBQUM7UUFDbEMsR0FBSyxDQUFDQyxNQUFNLEdBQUdILElBQUksQ0FBQ0gsT0FBTyxFQUFFSyxLQUFLO1FBRWxDLEVBQUUsRUFBRUMsTUFBTSxFQUFFLENBQUM7WUFDWFosTUFBTSxDQUFDTCxJQUFJLENBQUNXLE9BQU87UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNOLE1BQU07QUFDZixDQUFDIn0=