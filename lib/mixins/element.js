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
    getAscendantElements: function() {
        return getAscendantElements;
    },
    getChildElements: function() {
        return getChildElements;
    },
    getDescendantElements: function() {
        return getDescendantElements;
    },
    getNextSiblingElement: function() {
        return getNextSiblingElement;
    },
    getParentElement: function() {
        return getParentElement;
    },
    getPreviousSiblingElement: function() {
        return getPreviousSiblingElement;
    }
});
var _array = require("../utilities/array");
var _constants = require("../constants");
var _dom = require("../utilities/dom");
function getParentElement() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
    var parentElement = null;
    var parentDOMElement = this.domElement.parentElement; ///
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
    var nextSiblingDOMNode = this.domElement.nextSibling; ///
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
    getParentElement: getParentElement,
    getChildElements: getChildElements,
    getAscendantElements: getAscendantElements,
    getDescendantElements: getDescendantElements,
    getNextSiblingElement: getNextSiblingElement,
    getPreviousSiblingElement: getPreviousSiblingElement
};
var _default = elementMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50OyAvLy9cblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1IZWlnaHQgPSBJbmZpbml0eSkge1xuICBjb25zdCBoZWlnaHQgPSBtYXhpbXVtSGVpZ2h0LCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBhc2NlbmRhbnRET01Ob2RlcyA9IGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0KSxcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoYXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoLCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCksXG4gICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nOyAvLy9cblxuICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXRQYXJlbnRFbGVtZW50LFxuICBnZXRDaGlsZEVsZW1lbnRzLFxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsiZ2V0QXNjZW5kYW50RWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImdldFByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJzZWxlY3RvciIsIldJTERDQVJEIiwicGFyZW50RWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImZpcnN0IiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yIiwiY2hpbGRFbGVtZW50cyIsIm1heGltdW1IZWlnaHQiLCJJbmZpbml0eSIsImhlaWdodCIsImRvbU5vZGUiLCJhc2NlbmRhbnRET01Ob2RlcyIsImFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudEVsZW1lbnRzIiwibWF4aW11bURlcHRoIiwiZGVwdGgiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsImRlc2NlbmRhbnRFbGVtZW50cyIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsIm5leHRTaWJsaW5nIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0RPTU5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJlbGVtZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1RkEsT0FBNkI7ZUFBN0I7O0lBckRnQkEsb0JBQW9CO2VBQXBCQTs7SUFSQUMsZ0JBQWdCO2VBQWhCQTs7SUFrQkFDLHFCQUFxQjtlQUFyQkE7O0lBVUFDLHFCQUFxQjtlQUFyQkE7O0lBaERBQyxnQkFBZ0I7ZUFBaEJBOztJQTREQUMseUJBQXlCO2VBQXpCQTs7O3FCQWhFTTt5QkFDRzttQkFDOEg7QUFFaEosU0FBU0Q7UUFBaUJFLFdBQUFBLGlFQUFXQyxtQkFBUTtJQUNsRCxJQUFJQyxnQkFBZ0I7SUFFcEIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixhQUFhLEVBQUUsR0FBRztJQUUzRCxJQUFJQyxxQkFBcUIsTUFBTTtRQUM3QixJQUFJQSxpQkFBaUJFLE9BQU8sQ0FBQ0wsV0FBVztZQUN0QyxJQUFNTSxvQkFBb0I7Z0JBQ2xCSDthQUNELEVBQ0RJLGlCQUFpQkMsSUFBQUEsNEJBQXVCLEVBQUNGLG9CQUN6Q0cscUJBQXFCQyxJQUFBQSxZQUFLLEVBQUNIO1lBRWpDTCxnQkFBZ0JPLHNCQUFzQjtRQUN4QztJQUNGO0lBRUEsT0FBT1A7QUFDVDtBQUVPLFNBQVNQO1FBQWlCSyxXQUFBQSxpRUFBV0MsbUJBQVE7SUFDbEQsSUFBTVUsZ0JBQWdCLElBQUksQ0FBQ1AsVUFBVSxDQUFDUSxVQUFVLEVBQzFDQyxtQkFBbUJDLElBQUFBLDZCQUF3QixFQUFDSCxlQUFlWCxXQUMzRGUsZ0JBQWdCUCxJQUFBQSw0QkFBdUIsRUFBQ0s7SUFFOUMsT0FBT0U7QUFDVDtBQUVPLFNBQVNyQjtRQUFxQk0sV0FBQUEsaUVBQVdDLG1CQUFRLEVBQUVlLGdCQUFBQSxpRUFBZ0JDO0lBQ3hFLElBQU1DLFNBQVNGLGVBQ1RHLFVBQVUsSUFBSSxDQUFDZixVQUFVLEVBQ3pCZ0Isb0JBQW9CQyxJQUFBQSxpQ0FBNEIsRUFBQ0YsU0FBU0QsU0FDMURJLHVCQUF1QlIsSUFBQUEsNkJBQXdCLEVBQUNNLG1CQUFtQnBCLFdBQ25FdUIsb0JBQW9CZixJQUFBQSw0QkFBdUIsRUFBQ2M7SUFFbEQsT0FBT0M7QUFDVDtBQUVPLFNBQVMzQjtRQUFzQkksV0FBQUEsaUVBQVdDLG1CQUFRLEVBQUV1QixlQUFBQSxpRUFBZVA7SUFDeEUsSUFBTVEsUUFBUUQsY0FDUkwsVUFBVSxJQUFJLENBQUNmLFVBQVUsRUFDekJzQixxQkFBcUJDLElBQUFBLGtDQUE2QixFQUFDUixTQUFTTSxRQUM1REcsd0JBQXdCZCxJQUFBQSw2QkFBd0IsRUFBQ1ksb0JBQW9CMUIsV0FDckU2QixxQkFBcUJyQixJQUFBQSw0QkFBdUIsRUFBQ29CO0lBRW5ELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTaEM7UUFBc0JHLFdBQUFBLGlFQUFXQyxtQkFBUTtJQUN2RCxJQUFJNkIscUJBQXFCO0lBRXpCLElBQU1DLHFCQUFxQixJQUFJLENBQUMzQixVQUFVLENBQUM0QixXQUFXLEVBQUUsR0FBRztJQUUzRCxJQUFJLEFBQUNELHVCQUF1QixRQUFTRSxJQUFBQSwyQkFBc0IsRUFBQ0Ysb0JBQW9CL0IsV0FBVztRQUN6RjhCLHFCQUFxQkMsbUJBQW1CRyxXQUFXLElBQUk7SUFDekQ7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBUy9CO1FBQTBCQyxXQUFBQSxpRUFBV0MsbUJBQVE7SUFDM0QsSUFBSWtDLHlCQUF5QjtJQUU3QixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDaEMsVUFBVSxDQUFDaUMsZUFBZSxFQUFHLEdBQUc7SUFFcEUsSUFBSSxBQUFDRCwyQkFBMkIsUUFBU0gsSUFBQUEsMkJBQXNCLEVBQUNHLHdCQUF3QnBDLFdBQVc7UUFDakdtQyx5QkFBeUJDLHVCQUF1QkYsV0FBVyxJQUFJO0lBQ2pFO0lBRUEsT0FBT0M7QUFDVDtBQUVBLElBQU1HLGdCQUFnQjtJQUNwQnhDLGtCQUFBQTtJQUNBSCxrQkFBQUE7SUFDQUQsc0JBQUFBO0lBQ0FFLHVCQUFBQTtJQUNBQyx1QkFBQUE7SUFDQUUsMkJBQUFBO0FBQ0Y7SUFFQSxXQUFldUMifQ==