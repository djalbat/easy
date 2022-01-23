"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.push = push;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkxID0gWyAuLi5hcnJheTEgXTsgLy8vXG5cbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTE7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJwdXNoIiwiZ3VhcmFudGVlIiwiYXVnbWVudCIsImFycmF5IiwiYXJyYXkxIiwiYXJyYXkyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImFycmF5T3JFbGVtZW50IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFFSUEsS0FBSyxHQUFMQSxLQUFLO1FBRUxDLElBQUksR0FBSkEsSUFBSTtRQUVKQyxTQUFTLEdBQVRBLFNBQVM7UUFRVEMsT0FBTyxHQUFQQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBWlBILEtBQUssQ0FBQ0ksS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUNBLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVqQ0gsSUFBSSxDQUFDSSxNQUFNLEVBQUVDLE1BQU0sRUFBRSxDQUFDO0lBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJLENBQUNRLEtBQUssQ0FBQ0osTUFBTSxFQUFFQyxNQUFNO0FBQUcsQ0FBQztTQUVwRUosU0FBUyxDQUFDUSxjQUFjLEVBQUUsQ0FBQztJQUN6Q0EsY0FBYyxHQUFHQSxjQUFjLElBQUksQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBRUEsV0FBK0IsQ0FBL0JBLGNBQWMsRUFBWUgsS0FBSyxJQUM3QkcsY0FBYyxHQUNaLENBQUNBO1FBQUFBLGNBQWM7SUFBQSxDQUFDO0FBQzlCLENBQUM7U0FFZVAsT0FBTyxDQUFDRSxNQUFNLEVBQUVDLE1BQU0sRUFBRUssSUFBSSxFQUFFLENBQUM7SUFDN0NOLE1BQU0sc0JBQVFBLE1BQU0sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFM0JDLE1BQU0sQ0FBQ00sT0FBTyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFFQyxLQUFLLEVBQUssQ0FBQztRQUNsQyxHQUFLLENBQUNDLE1BQU0sR0FBR0osSUFBSSxDQUFDRSxPQUFPLEVBQUVDLEtBQUs7UUFFbEMsRUFBRSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUNYVixNQUFNLENBQUNKLElBQUksQ0FBQ1ksT0FBTztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ1IsTUFBTTtBQUNmLENBQUMifQ==