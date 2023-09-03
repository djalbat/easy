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
    elementsFromDOMElements: function() {
        return elementsFromDOMElements;
    },
    ascendantDOMNodesFromDOMNode: function() {
        return ascendantDOMNodesFromDOMNode;
    },
    descendantDOMNodesFromDOMNode: function() {
        return descendantDOMNodesFromDOMNode;
    },
    filterDOMNodesBySelector: function() {
        return filterDOMNodesBySelector;
    },
    domNodeMatchesSelector: function() {
        return domNodeMatchesSelector;
    },
    filterDOMNodes: function() {
        return filterDOMNodes;
    }
});
var _array = require("../utilities/array");
var _constants = require("../constants");
function elementsFromDOMElements(domElements) {
    var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        return domElement.__element__ !== undefined;
    }), elements = domElementsWithElements.map(function(domElement) {
        return domElement.__element__;
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
            return descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
    }
    return descendantDOMNodes;
}
function filterDOMNodesBySelector(domNodes, selector) {
    var filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
        return domNodeMatchesSelector(domNode, selector);
    });
    return filteredDOMNodes;
}
function domNodeMatchesSelector(domNode, selector) {
    var domNodeType = domNode.nodeType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCkpLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXyk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGhlaWdodCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgICBpZiAocGFyZW50RE9NTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYXNjZW5kYW50RE9NTm9kZXMucHVzaChwYXJlbnRET01Ob2RlKTtcblxuICAgICAgaGVpZ2h0LS07XG5cbiAgICAgIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUocGFyZW50RE9NTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBwdXNoKGRlc2NlbmRhbnRET01Ob2RlcywgY2hpbGRET01Ob2Rlcyk7XG5cbiAgICBkZXB0aC0tO1xuXG4gICAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcykpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImRvbU5vZGVNYXRjaGVzU2VsZWN0b3IiLCJmaWx0ZXJET01Ob2RlcyIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMiLCJkb21FbGVtZW50IiwiX19lbGVtZW50X18iLCJ1bmRlZmluZWQiLCJlbGVtZW50cyIsIm1hcCIsImRvbU5vZGUiLCJoZWlnaHQiLCJhc2NlbmRhbnRET01Ob2RlcyIsInBhcmVudERPTU5vZGUiLCJwYXJlbnRFbGVtZW50IiwicHVzaCIsImRlcHRoIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGRET01Ob2RlIiwiZG9tTm9kZXMiLCJzZWxlY3RvciIsImZpbHRlcmVkRE9NTm9kZXMiLCJkb21Ob2RlVHlwZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsIm1hdGNoZXMiLCJURVhUX05PREUiLCJXSUxEQ0FSRCIsInRlc3QiLCJkb21Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsImluZGV4IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFLZ0JBLHVCQUF1QjtlQUF2QkE7O0lBT0FDLDRCQUE0QjtlQUE1QkE7O0lBZ0JBQyw2QkFBNkI7ZUFBN0JBOztJQWNBQyx3QkFBd0I7ZUFBeEJBOztJQU1BQyxzQkFBc0I7ZUFBdEJBOztJQW9CQUMsY0FBYztlQUFkQTs7O3FCQWxFSzt5QkFDSTtBQUVsQixTQUFTTCx3QkFBd0JNLFdBQVc7SUFDakQsSUFBTUMsMEJBQTBCRixlQUFlQyxhQUFhLFNBQUNFO2VBQWdCQSxXQUFXQyxXQUFXLEtBQUtDO1FBQ2xHQyxXQUFXSix3QkFBd0JLLEdBQUcsQ0FBQyxTQUFDSjtlQUFlQSxXQUFXQyxXQUFXOztJQUVuRixPQUFPRTtBQUNUO0FBRU8sU0FBU1YsNkJBQTZCWSxPQUFPLEVBQUVDLE1BQU07UUFBRUMsb0JBQUFBLGlFQUFvQixFQUFFO0lBQ2xGLElBQUlELFNBQVMsR0FBRztRQUNkLElBQU1FLGdCQUFnQkgsUUFBUUksYUFBYSxFQUFHLEdBQUc7UUFFakQsSUFBSUQsa0JBQWtCLE1BQU07WUFDMUJELGtCQUFrQkcsSUFBSSxDQUFDRjtZQUV2QkY7WUFFQWIsNkJBQTZCZSxlQUFlRixRQUFRQztRQUN0RDtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNiLDhCQUE4QlcsT0FBTyxFQUFFTSxLQUFLO1FBQUVDLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUNuRixJQUFJRCxRQUFRLEdBQUc7UUFDYixJQUFNRSxnQkFBZ0JSLFFBQVFTLFVBQVUsRUFBRyxHQUFHO1FBRTlDSixJQUFBQSxXQUFJLEVBQUNFLG9CQUFvQkM7UUFFekJGO1FBRUFFLGNBQWNFLE9BQU8sQ0FBQyxTQUFDQzttQkFBaUJ0Qiw4QkFBOEJzQixjQUFjTCxPQUFPQzs7SUFDN0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU2pCLHlCQUF5QnNCLFFBQVEsRUFBRUMsUUFBUTtJQUN6RCxJQUFNQyxtQkFBbUJ0QixlQUFlb0IsVUFBVSxTQUFDWjtlQUFZVCx1QkFBdUJTLFNBQVNhOztJQUUvRixPQUFPQztBQUNUO0FBRU8sU0FBU3ZCLHVCQUF1QlMsT0FBTyxFQUFFYSxRQUFRO0lBQ3RELElBQU1FLGNBQWNmLFFBQVFnQixRQUFRO0lBRXBDLE9BQVFEO1FBQ04sS0FBS0UsS0FBS0MsWUFBWTtZQUFFO2dCQUN0QixJQUFNdkIsYUFBYUssU0FBUyxHQUFHO2dCQUUvQixPQUFPTCxXQUFXd0IsT0FBTyxDQUFDTjtZQUM1QjtRQUVBLEtBQUtJLEtBQUtHLFNBQVM7WUFBRTtnQkFDbkIsSUFBSVAsYUFBYVEsbUJBQVEsRUFBRTtvQkFDekIsT0FBTztnQkFDVDtZQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTN0IsZUFBZW9CLFFBQVEsRUFBRVUsSUFBSTtJQUMzQyxJQUFNUixtQkFBbUIsRUFBRSxFQUNyQlMsaUJBQWlCWCxTQUFTWSxNQUFNO0lBRXRDLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRixnQkFBZ0JFLFFBQVM7UUFDbkQsSUFBTXpCLFVBQVVZLFFBQVEsQ0FBQ2EsTUFBTSxFQUN6QkMsU0FBU0osS0FBS3RCO1FBRXBCLElBQUkwQixRQUFRO1lBQ1ZaLGlCQUFpQlQsSUFBSSxDQUFDTDtRQUN4QjtJQUNGO0lBRUEsT0FBT2M7QUFDVCJ9