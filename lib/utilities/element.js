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
    default: function() {
        return _default;
    },
    mountElement: function() {
        return mountElement;
    },
    unmountElement: function() {
        return unmountElement;
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
function mountElement(element) {
    var descendantElements = element.getDescendantElements(), elements = [
        element
    ].concat(_to_consumable_array(descendantElements));
    elements.reverse(); ///
    elements.forEach(function(element) {
        element.didMount && element.didMount();
    });
}
function unmountElement(element) {
    var descendantElements = element.getDescendantElements(), elements = [
        element
    ].concat(_to_consumable_array(descendantElements));
    elements.forEach(function(element) {
        element.willUnmount && element.willUnmount();
    });
}
var _default = {
    mountElement: mountElement,
    unmountElement: unmountElement
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICBdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbW91bnRFbGVtZW50LFxuICB1bm1vdW50RWxlbWVudFxufTtcbiJdLCJuYW1lcyI6WyJtb3VudEVsZW1lbnQiLCJ1bm1vdW50RWxlbWVudCIsImVsZW1lbnQiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJlbGVtZW50cyIsInJldmVyc2UiLCJmb3JFYWNoIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNEJBLE9BR0U7ZUFIRjs7SUExQmdCQSxZQUFZO2VBQVpBOztJQWNBQyxjQUFjO2VBQWRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZFQsU0FBU0QsYUFBYUUsT0FBTztJQUNsQyxJQUFNQyxxQkFBcUJELFFBQVFFLHFCQUFxQixJQUNsREMsV0FBVztRQUNUSDtLQUVELENBSFUsT0FFVCxxQkFBR0M7SUFHWEUsU0FBU0MsT0FBTyxJQUFJLEdBQUc7SUFFdkJELFNBQVNFLE9BQU8sQ0FBQyxTQUFDTDtRQUNoQkEsUUFBUU0sUUFBUSxJQUFJTixRQUFRTSxRQUFRO0lBQ3RDO0FBQ0Y7QUFFTyxTQUFTUCxlQUFlQyxPQUFPO0lBQ3BDLElBQU1DLHFCQUFxQkQsUUFBUUUscUJBQXFCLElBQ2xEQyxXQUFXO1FBQ1RIO0tBRUQsQ0FIVSxPQUVULHFCQUFHQztJQUdYRSxTQUFTRSxPQUFPLENBQUMsU0FBQ0w7UUFDaEJBLFFBQVFPLFdBQVcsSUFBSVAsUUFBUU8sV0FBVztJQUM1QztBQUNGO0lBRUEsV0FBZTtJQUNiVCxjQUFBQTtJQUNBQyxnQkFBQUE7QUFDRiJ9