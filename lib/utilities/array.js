"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.push = push;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkxID0gWyAuLi5hcnJheTEgXTsgLy8vXG5cbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTE7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJwdXNoIiwiZ3VhcmFudGVlIiwiYXVnbWVudCIsImFycmF5IiwiYXJyYXkxIiwiYXJyYXkyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImFycmF5T3JFbGVtZW50IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFFSUEsS0FBSyxHQUFMQSxLQUFLO1FBRUxDLElBQUksR0FBSkEsSUFBSTtRQUVKQyxTQUFTLEdBQVRBLFNBQVM7UUFRVEMsT0FBTyxHQUFQQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FaUEgsS0FBSyxDQUFDSSxLQUFLLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQ0EsS0FBSyxDQUFDLENBQUM7QUFBRyxDQUFDO1NBRWpDSCxJQUFJLENBQUNJLE1BQU0sRUFBRUMsTUFBTSxFQUFFLENBQUM7SUFBQ0MsS0FBSyxDQUFDQyxTQUFTLENBQUNQLElBQUksQ0FBQ1EsS0FBSyxDQUFDSixNQUFNLEVBQUVDLE1BQU07QUFBRyxDQUFDO1NBRXBFSixTQUFTLENBQUNRLGNBQWMsRUFBRSxDQUFDO0lBQ3pDQSxjQUFjLEdBQUdBLGNBQWMsSUFBSSxDQUFDLENBQUM7SUFFckMsTUFBTSxDQUFFQSxXQUErQixDQUEvQkEsY0FBYyxFQUFZSCxLQUFLLElBQzdCRyxjQUFjLEdBQ1osQ0FBQ0E7UUFBQUEsY0FBYztJQUFBLENBQUM7QUFDOUIsQ0FBQztTQUVlUCxPQUFPLENBQUNFLE1BQU0sRUFBRUMsTUFBTSxFQUFFSyxJQUFJLEVBQUUsQ0FBQztJQUM3Q04sTUFBTSxzQkFBUUEsTUFBTSxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUzQkMsTUFBTSxDQUFDTSxPQUFPLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUVDLEtBQUssRUFBSyxDQUFDO1FBQ2xDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSixJQUFJLENBQUNFLE9BQU8sRUFBRUMsS0FBSztRQUVsQyxFQUFFLEVBQUVDLE1BQU0sRUFBRSxDQUFDO1lBQ1hWLE1BQU0sQ0FBQ0osSUFBSSxDQUFDWSxPQUFPO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDUixNQUFNO0FBQ2YsQ0FBQyJ9