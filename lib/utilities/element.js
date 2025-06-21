"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get constructElement () {
        return constructElement;
    },
    get default () {
        return _default;
    },
    get destroyElement () {
        return destroyElement;
    },
    get mountElement () {
        return mountElement;
    },
    get unmountElement () {
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
function constructElement(element, domElement) {
    element.domElement = domElement;
    domElement.__element__ = element; ///
}
function destroyElement(element) {
    var descendantElements = element.getDescendantElements(), elements = [
        element
    ].concat(_to_consumable_array(descendantElements));
    elements.forEach(function(element) {
        var domElement = element.getDOMElement();
        delete element.domElement;
        delete domElement.__element__;
    });
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
    constructElement: constructElement,
    destroyElement: destroyElement,
    mountElement: mountElement,
    unmountElement: unmountElement
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCkge1xuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gIGRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZGVsZXRlIGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIGRlbGV0ZSBkb21FbGVtZW50Ll9fZWxlbWVudF9fO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICBdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uc3RydWN0RWxlbWVudCxcbiAgZGVzdHJveUVsZW1lbnQsXG4gIG1vdW50RWxlbWVudCxcbiAgdW5tb3VudEVsZW1lbnRcbn07XG4iXSwibmFtZXMiOlsiY29uc3RydWN0RWxlbWVudCIsImRlc3Ryb3lFbGVtZW50IiwibW91bnRFbGVtZW50IiwidW5tb3VudEVsZW1lbnQiLCJlbGVtZW50IiwiZG9tRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZ2V0RE9NRWxlbWVudCIsInJldmVyc2UiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFFZ0JBO2VBQUFBOztRQWdEaEI7ZUFBQTs7UUExQ2dCQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQWNBQztlQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBDVCxTQUFTSCxpQkFBaUJJLE9BQU8sRUFBRUMsVUFBVTtJQUNsREQsUUFBUUMsVUFBVSxHQUFHQTtJQUVyQkEsV0FBV0MsV0FBVyxHQUFHRixTQUFTLEdBQUc7QUFDdkM7QUFFTyxTQUFTSCxlQUFlRyxPQUFPO0lBQ3BDLElBQU1HLHFCQUFxQkgsUUFBUUkscUJBQXFCLElBQ2xEQyxXQUFXO1FBQ1RMO0tBRUQsQ0FIVSxPQUVULHFCQUFHRztJQUdYRSxTQUFTQyxPQUFPLENBQUMsU0FBQ047UUFDaEIsSUFBTUMsYUFBYUQsUUFBUU8sYUFBYTtRQUV4QyxPQUFPUCxRQUFRQyxVQUFVO1FBRXpCLE9BQU9BLFdBQVdDLFdBQVc7SUFDL0I7QUFDRjtBQUVPLFNBQVNKLGFBQWFFLE9BQU87SUFDbEMsSUFBTUcscUJBQXFCSCxRQUFRSSxxQkFBcUIsSUFDbERDLFdBQVc7UUFDVEw7S0FFRCxDQUhVLE9BRVQscUJBQUdHO0lBR1hFLFNBQVNHLE9BQU8sSUFBSSxHQUFHO0lBRXZCSCxTQUFTQyxPQUFPLENBQUMsU0FBQ047UUFDaEJBLFFBQVFTLFFBQVEsSUFBSVQsUUFBUVMsUUFBUTtJQUN0QztBQUNGO0FBRU8sU0FBU1YsZUFBZUMsT0FBTztJQUNwQyxJQUFNRyxxQkFBcUJILFFBQVFJLHFCQUFxQixJQUNsREMsV0FBVztRQUNUTDtLQUVELENBSFUsT0FFVCxxQkFBR0c7SUFHWEUsU0FBU0MsT0FBTyxDQUFDLFNBQUNOO1FBQ2hCQSxRQUFRVSxXQUFXLElBQUlWLFFBQVFVLFdBQVc7SUFDNUM7QUFDRjtJQUVBLFdBQWU7SUFDYmQsa0JBQUFBO0lBQ0FDLGdCQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxnQkFBQUE7QUFDRiJ9