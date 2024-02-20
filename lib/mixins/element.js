"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _array = require("../utilities/array");
var _constants = require("../constants");
var _dom = require("../utilities/dom");
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
function getParentElement() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
    var parentElement = null;
    var parentDOMElement = this.domElement.parentElement;
    if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
            var parentDOMElements = [
                parentDOMElement
            ], parentElements = (0, _dom.elementsFromDOMElements)(parentDOMElements), firstParentElement = (0, _array.first)(parentElements);
            parentElement = firstParentElement || null;
        }
    }
    return parentElement;
}
function getChildElements() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
    var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom.filterDOMNodesBySelector)(childDOMNodes, selector), childElements = (0, _dom.elementsFromDOMElements)(childDOMElements);
    return childElements;
}
function getAscendantElements() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumHeight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
    var height = maximumHeight, domNode = this.domElement, ascendantDOMNodes = (0, _dom.ascendantDOMNodesFromDOMNode)(domNode, height), ascendantDOMElements = (0, _dom.filterDOMNodesBySelector)(ascendantDOMNodes, selector), ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
    return ascendantElements;
}
function getDescendantElements() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
    var depth = maximumDepth, domNode = this.domElement, descendantDOMNodes = (0, _dom.descendantDOMNodesFromDOMNode)(domNode, depth), descendantDOMElements = (0, _dom.filterDOMNodesBySelector)(descendantDOMNodes, selector), descendantElements = (0, _dom.elementsFromDOMElements)(descendantDOMElements);
    return descendantElements;
}
function getNextSiblingElement() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
    var nextSiblingElement = null;
    var nextSiblingDOMNode = this.domElement.nextSibling;
    if (nextSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
    }
    return nextSiblingElement;
}
function getPreviousSiblingElement() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
    var previousSiblingElement = null;
    var previousSiblingDOMNode = this.domElement.previousSibling; ///
    if (previousSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
    }
    return previousSiblingElement;
}
var elementMixins = {
    mountElement: mountElement,
    unmountElement: unmountElement,
    getParentElement: getParentElement,
    getChildElements: getChildElements,
    getAscendantElements: getAscendantElements,
    getDescendantElements: getDescendantElements,
    getNextSiblingElement: getNextSiblingElement,
    getPreviousSiblingElement: getPreviousSiblingElement
};
var _default = elementMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZnVuY3Rpb24gbW91bnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5yZXZlcnNlKCk7IC8vL1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmRpZE1vdW50ICYmIGVsZW1lbnQuZGlkTW91bnQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVubW91bnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC53aWxsVW5tb3VudCAmJiBlbGVtZW50LndpbGxVbm1vdW50KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1IZWlnaHQgPSBJbmZpbml0eSkge1xuICBjb25zdCBoZWlnaHQgPSBtYXhpbXVtSGVpZ2h0LCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBhc2NlbmRhbnRET01Ob2RlcyA9IGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0KSxcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoYXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgY29uc3QgZGVwdGggPSBtYXhpbXVtRGVwdGgsIC8vL1xuICAgICAgICBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlcHRoKSxcbiAgICAgICAgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gIGlmICgocHJldmlvdXNTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihwcmV2aW91c1NpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHByZXZpb3VzU2libGluZ0VsZW1lbnQ7XG59XG5cbmNvbnN0IGVsZW1lbnRNaXhpbnMgPSB7XG4gIG1vdW50RWxlbWVudCxcbiAgdW5tb3VudEVsZW1lbnQsXG4gIGdldFBhcmVudEVsZW1lbnQsXG4gIGdldENoaWxkRWxlbWVudHMsXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzLFxuICBnZXREZXNjZW5kYW50RWxlbWVudHMsXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudCxcbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE1peGlucztcbiJdLCJuYW1lcyI6WyJtb3VudEVsZW1lbnQiLCJlbGVtZW50IiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImRpZE1vdW50IiwidW5tb3VudEVsZW1lbnQiLCJ3aWxsVW5tb3VudCIsImdldFBhcmVudEVsZW1lbnQiLCJzZWxlY3RvciIsIldJTERDQVJEIiwicGFyZW50RWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImZpcnN0IiwiZ2V0Q2hpbGRFbGVtZW50cyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiY2hpbGRET01FbGVtZW50cyIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImNoaWxkRWxlbWVudHMiLCJnZXRBc2NlbmRhbnRFbGVtZW50cyIsIm1heGltdW1IZWlnaHQiLCJJbmZpbml0eSIsImhlaWdodCIsImRvbU5vZGUiLCJhc2NlbmRhbnRET01Ob2RlcyIsImFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudEVsZW1lbnRzIiwibWF4aW11bURlcHRoIiwiZGVwdGgiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsIm5leHRTaWJsaW5nIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwiZWxlbWVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUhBOzs7ZUFBQTs7O3FCQS9Hc0I7eUJBQ0c7bUJBQzhIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2SixTQUFTQSxhQUFhQyxPQUFPO0lBQzNCLElBQU1DLHFCQUFxQkQsUUFBUUUscUJBQXFCLElBQ2xEQyxXQUFXO1FBQ1RIO0tBRUQsQ0FIVSxPQUVULHFCQUFHQztJQUdYRSxTQUFTQyxPQUFPLElBQUksR0FBRztJQUV2QkQsU0FBU0UsT0FBTyxDQUFDLFNBQUNMO1FBQ2hCQSxRQUFRTSxRQUFRLElBQUlOLFFBQVFNLFFBQVE7SUFDdEM7QUFDRjtBQUVBLFNBQVNDLGVBQWVQLE9BQU87SUFDN0IsSUFBTUMscUJBQXFCRCxRQUFRRSxxQkFBcUIsSUFDbERDLFdBQVc7UUFDVEg7S0FFRCxDQUhVLE9BRVQscUJBQUdDO0lBR1hFLFNBQVNFLE9BQU8sQ0FBQyxTQUFDTDtRQUNoQkEsUUFBUVEsV0FBVyxJQUFJUixRQUFRUSxXQUFXO0lBQzVDO0FBQ0Y7QUFFQSxTQUFTQztRQUFpQkMsV0FBQUEsaUVBQVdDLG1CQUFRO0lBQzNDLElBQUlDLGdCQUFnQjtJQUVwQixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxVQUFVLENBQUNGLGFBQWE7SUFFdEQsSUFBSUMscUJBQXFCLE1BQU07UUFDN0IsSUFBSUEsaUJBQWlCRSxPQUFPLENBQUNMLFdBQVc7WUFDdEMsSUFBTU0sb0JBQW9CO2dCQUFDSDthQUFpQixFQUN0Q0ksaUJBQWlCQyxJQUFBQSw0QkFBdUIsRUFBQ0Ysb0JBQ3pDRyxxQkFBcUJDLElBQUFBLFlBQUssRUFBQ0g7WUFFakNMLGdCQUFnQk8sc0JBQXNCO1FBQ3hDO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUO0FBRUEsU0FBU1M7UUFBaUJYLFdBQUFBLGlFQUFXQyxtQkFBUTtJQUMzQyxJQUFNVyxnQkFBZ0IsSUFBSSxDQUFDUixVQUFVLENBQUNTLFVBQVUsRUFDMUNDLG1CQUFtQkMsSUFBQUEsNkJBQXdCLEVBQUNILGVBQWVaLFdBQzNEZ0IsZ0JBQWdCUixJQUFBQSw0QkFBdUIsRUFBQ007SUFFOUMsT0FBT0U7QUFDVDtBQUVBLFNBQVNDO1FBQXFCakIsV0FBQUEsaUVBQVdDLG1CQUFRLEVBQUVpQixnQkFBQUEsaUVBQWdCQztJQUNqRSxJQUFNQyxTQUFTRixlQUNURyxVQUFVLElBQUksQ0FBQ2pCLFVBQVUsRUFDekJrQixvQkFBb0JDLElBQUFBLGlDQUE0QixFQUFDRixTQUFTRCxTQUMxREksdUJBQXVCVCxJQUFBQSw2QkFBd0IsRUFBQ08sbUJBQW1CdEIsV0FDbkV5QixvQkFBb0JqQixJQUFBQSw0QkFBdUIsRUFBQ2dCO0lBRWxELE9BQU9DO0FBQ1Q7QUFFQSxTQUFTakM7UUFBc0JRLFdBQUFBLGlFQUFXQyxtQkFBUSxFQUFFeUIsZUFBQUEsaUVBQWVQO0lBQ2pFLElBQU1RLFFBQVFELGNBQ1JMLFVBQVUsSUFBSSxDQUFDakIsVUFBVSxFQUN6QndCLHFCQUFxQkMsSUFBQUEsa0NBQTZCLEVBQUNSLFNBQVNNLFFBQzVERyx3QkFBd0JmLElBQUFBLDZCQUF3QixFQUFDYSxvQkFBb0I1QixXQUNyRVQscUJBQXFCaUIsSUFBQUEsNEJBQXVCLEVBQUNzQjtJQUVuRCxPQUFPdkM7QUFDVDtBQUVBLFNBQVN3QztRQUFzQi9CLFdBQUFBLGlFQUFXQyxtQkFBUTtJQUNoRCxJQUFJK0IscUJBQXFCO0lBRXpCLElBQU1DLHFCQUFxQixJQUFJLENBQUM3QixVQUFVLENBQUM4QixXQUFXO0lBRXRELElBQUksQUFBQ0QsdUJBQXVCLFFBQVNFLElBQUFBLDJCQUFzQixFQUFDRixvQkFBb0JqQyxXQUFXO1FBQ3pGZ0MscUJBQXFCQyxtQkFBbUJHLFdBQVcsSUFBSTtJQUN6RDtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTSztRQUEwQnJDLFdBQUFBLGlFQUFXQyxtQkFBUTtJQUNwRCxJQUFJcUMseUJBQXlCO0lBRTdCLElBQU1DLHlCQUF5QixJQUFJLENBQUNuQyxVQUFVLENBQUNvQyxlQUFlLEVBQUcsR0FBRztJQUVwRSxJQUFJLEFBQUNELDJCQUEyQixRQUFTSixJQUFBQSwyQkFBc0IsRUFBQ0ksd0JBQXdCdkMsV0FBVztRQUNqR3NDLHlCQUF5QkMsdUJBQXVCSCxXQUFXLElBQUk7SUFDakU7SUFFQSxPQUFPRTtBQUNUO0FBRUEsSUFBTUcsZ0JBQWdCO0lBQ3BCcEQsY0FBQUE7SUFDQVEsZ0JBQUFBO0lBQ0FFLGtCQUFBQTtJQUNBWSxrQkFBQUE7SUFDQU0sc0JBQUFBO0lBQ0F6Qix1QkFBQUE7SUFDQXVDLHVCQUFBQTtJQUNBTSwyQkFBQUE7QUFDRjtJQUVBLFdBQWVJIn0=