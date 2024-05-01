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
    ascendantDOMNodesFromDOMNode: function() {
        return ascendantDOMNodesFromDOMNode;
    },
    descendantDOMNodesFromDOMNode: function() {
        return descendantDOMNodesFromDOMNode;
    },
    domNodeMatchesSelector: function() {
        return domNodeMatchesSelector;
    },
    elementsFromDOMElements: function() {
        return elementsFromDOMElements;
    },
    filterDOMNodes: function() {
        return filterDOMNodes;
    },
    filterDOMNodesBySelector: function() {
        return filterDOMNodesBySelector;
    }
});
var _array = require("../utilities/array");
var _constants = require("../constants");
function elementsFromDOMElements(domElements) {
    var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        if (domElement.__element__) {
            return true;
        }
    }), elements = domElementsWithElements.map(function(domElement) {
        var element = domElement.__element__; ///
        return element;
    });
    return elements;
}
function ascendantDOMNodesFromDOMNode(domNode, height) {
    var ascendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (height > 0) {
        var parentDOMNode = domNode.parentElement; ///
        if (parentDOMNode !== null) {
            ascendantDOMNodes.push(parentDOMNode);
            height--;
            ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
        }
    }
    return ascendantDOMNodes;
}
function descendantDOMNodesFromDOMNode(domNode, depth) {
    var descendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (depth > 0) {
        var childDOMNodes = domNode.childNodes; ///
        (0, _array.push)(descendantDOMNodes, childDOMNodes);
        depth--;
        childDOMNodes.forEach(function(childDOMNode) {
            descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
    }
    return descendantDOMNodes;
}
function filterDOMNodesBySelector(domNodes, selector) {
    var filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
        if (domNodeMatchesSelector(domNode, selector)) {
            return true;
        }
    });
    return filteredDOMNodes;
}
function domNodeMatchesSelector(domNode, selector) {
    var domNodeType = domNode.nodeType; ///
    switch(domNodeType){
        case Node.ELEMENT_NODE:
            {
                var domElement = domNode; ///
                return domElement.matches(selector);
            }
        case Node.TEXT_NODE:
            {
                if (selector === _constants.WILDCARD) {
                    return true;
                }
            }
    }
    return false;
}
function filterDOMNodes(domNodes, test) {
    var filteredDOMNodes = [], domNodesLength = domNodes.length;
    for(var index = 0; index < domNodesLength; index++){
        var domNode = domNodes[index], result = test(domNode);
        if (result) {
            filteredDOMNodes.push(domNode);
        }
    }
    return filteredDOMNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZG9tRWxlbWVudC5fX2VsZW1lbnRfXykpIHsgLy8vXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fOyAvLy9cblxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGlmIChwYXJlbnRET01Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgICBoZWlnaHQtLTtcblxuICAgICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHB1c2goZGVzY2VuZGFudERPTU5vZGVzLCBjaGlsZERPTU5vZGVzKTtcblxuICAgIGRlcHRoLS07XG5cbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goKGNoaWxkRE9NTm9kZSkgPT4ge1xuICAgICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IHtcbiAgICBpZiAoZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTsgLy8vXG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJmaWx0ZXJET01Ob2RlcyIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMiLCJkb21FbGVtZW50IiwiX19lbGVtZW50X18iLCJlbGVtZW50cyIsIm1hcCIsImVsZW1lbnQiLCJkb21Ob2RlIiwiaGVpZ2h0IiwiYXNjZW5kYW50RE9NTm9kZXMiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50RWxlbWVudCIsInB1c2giLCJkZXB0aCIsImRlc2NlbmRhbnRET01Ob2RlcyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkRE9NTm9kZSIsImRvbU5vZGVzIiwic2VsZWN0b3IiLCJmaWx0ZXJlZERPTU5vZGVzIiwiZG9tTm9kZVR5cGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJtYXRjaGVzIiwiVEVYVF9OT0RFIiwiV0lMRENBUkQiLCJ0ZXN0IiwiZG9tTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsInJlc3VsdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb0JnQkEsNEJBQTRCO2VBQTVCQTs7SUFnQkFDLDZCQUE2QjtlQUE3QkE7O0lBMEJBQyxzQkFBc0I7ZUFBdEJBOztJQXpEQUMsdUJBQXVCO2VBQXZCQTs7SUE2RUFDLGNBQWM7ZUFBZEE7O0lBOUJBQyx3QkFBd0I7ZUFBeEJBOzs7cUJBbERLO3lCQUNJO0FBRWxCLFNBQVNGLHdCQUF3QkcsV0FBVztJQUNqRCxJQUFNQywwQkFBMEJILGVBQWVFLGFBQWEsU0FBQ0U7UUFDckQsSUFBS0EsV0FBV0MsV0FBVyxFQUFHO1lBQzVCLE9BQU87UUFDVDtJQUNGLElBQ0FDLFdBQVdILHdCQUF3QkksR0FBRyxDQUFDLFNBQUNIO1FBQ3RDLElBQU1JLFVBQVVKLFdBQVdDLFdBQVcsRUFBRSxHQUFHO1FBRTNDLE9BQU9HO0lBQ1Q7SUFFTixPQUFPRjtBQUNUO0FBRU8sU0FBU1YsNkJBQTZCYSxPQUFPLEVBQUVDLE1BQU07UUFBRUMsb0JBQUFBLGlFQUFvQixFQUFFO0lBQ2xGLElBQUlELFNBQVMsR0FBRztRQUNkLElBQU1FLGdCQUFnQkgsUUFBUUksYUFBYSxFQUFHLEdBQUc7UUFFakQsSUFBSUQsa0JBQWtCLE1BQU07WUFDMUJELGtCQUFrQkcsSUFBSSxDQUFDRjtZQUV2QkY7WUFFQWQsNkJBQTZCZ0IsZUFBZUYsUUFBUUM7UUFDdEQ7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTZCw4QkFBOEJZLE9BQU8sRUFBRU0sS0FBSztRQUFFQyxxQkFBQUEsaUVBQXFCLEVBQUU7SUFDbkYsSUFBSUQsUUFBUSxHQUFHO1FBQ2IsSUFBTUUsZ0JBQWdCUixRQUFRUyxVQUFVLEVBQUcsR0FBRztRQUU5Q0osSUFBQUEsV0FBSSxFQUFDRSxvQkFBb0JDO1FBRXpCRjtRQUVBRSxjQUFjRSxPQUFPLENBQUMsU0FBQ0M7WUFDckJ2Qiw4QkFBOEJ1QixjQUFjTCxPQUFPQztRQUNyRDtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNmLHlCQUF5Qm9CLFFBQVEsRUFBRUMsUUFBUTtJQUN6RCxJQUFNQyxtQkFBbUJ2QixlQUFlcUIsVUFBVSxTQUFDWjtRQUNqRCxJQUFJWCx1QkFBdUJXLFNBQVNhLFdBQVc7WUFDN0MsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPQztBQUNUO0FBRU8sU0FBU3pCLHVCQUF1QlcsT0FBTyxFQUFFYSxRQUFRO0lBQ3RELElBQU1FLGNBQWNmLFFBQVFnQixRQUFRLEVBQUUsR0FBRztJQUV6QyxPQUFRRDtRQUNOLEtBQUtFLEtBQUtDLFlBQVk7WUFBRTtnQkFDdEIsSUFBTXZCLGFBQWFLLFNBQVMsR0FBRztnQkFFL0IsT0FBT0wsV0FBV3dCLE9BQU8sQ0FBQ047WUFDNUI7UUFFQSxLQUFLSSxLQUFLRyxTQUFTO1lBQUU7Z0JBQ25CLElBQUlQLGFBQWFRLG1CQUFRLEVBQUU7b0JBQ3pCLE9BQU87Z0JBQ1Q7WUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRU8sU0FBUzlCLGVBQWVxQixRQUFRLEVBQUVVLElBQUk7SUFDM0MsSUFBTVIsbUJBQW1CLEVBQUUsRUFDckJTLGlCQUFpQlgsU0FBU1ksTUFBTTtJQUV0QyxJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUYsZ0JBQWdCRSxRQUFTO1FBQ25ELElBQU16QixVQUFVWSxRQUFRLENBQUNhLE1BQU0sRUFDekJDLFNBQVNKLEtBQUt0QjtRQUVwQixJQUFJMEIsUUFBUTtZQUNWWixpQkFBaUJULElBQUksQ0FBQ0w7UUFDeEI7SUFDRjtJQUVBLE9BQU9jO0FBQ1QifQ==