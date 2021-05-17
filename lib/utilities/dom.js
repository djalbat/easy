"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementsFromDOMElements = elementsFromDOMElements;
exports.ascendantDOMNodesFromDOMNode = ascendantDOMNodesFromDOMNode;
exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
exports.domNodeMatchesSelector = domNodeMatchesSelector;
exports.filterDOMNodes = filterDOMNodes;
var _array = require("../utilities/array");
function elementsFromDOMElements(domElements) {
    var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        return domElement.__element__ !== undefined;
    }), elements = domElementsWithElements.map(function(domElement) {
        return domElement.__element__;
    });
    return elements;
}
function ascendantDOMNodesFromDOMNode(domNode, param) {
    var ascendantDOMNodes = param === void 0 ? [] : param;
    var parentElement = domNode.parentElement; ///
    if (parentElement !== null) {
        var parentDOMNode = parentElement; ///
        ascendantDOMNodes.push(parentDOMNode);
        ascendantDOMNodesFromDOMNode(parentDOMNode, ascendantDOMNodes);
    }
    return ascendantDOMNodes;
}
function descendantDOMNodesFromDOMNode(domNode, param) {
    var descendantDOMNodes = param === void 0 ? [] : param;
    var childDOMNodes = domNode.childNodes; ///
    (0, _array).push(descendantDOMNodes, childDOMNodes);
    childDOMNodes.forEach(function(childDOMNode) {
        return descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
    });
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
                if (selector === "*") {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlcyhkb21FbGVtZW50cywgKGRvbUVsZW1lbnQpID0+IChkb21FbGVtZW50Ll9fZWxlbWVudF9fICE9PSB1bmRlZmluZWQpKSxcbiAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IGRvbUVsZW1lbnQuX19lbGVtZW50X18pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgaWYgKHBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgcHVzaChkZXNjZW5kYW50RE9NTm9kZXMsIGNoaWxkRE9NTm9kZXMpO1xuXG4gIGNoaWxkRE9NTm9kZXMuZm9yRWFjaCgoY2hpbGRET01Ob2RlKSA9PiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShjaGlsZERPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcykpO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpKTtcblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBSUksdUJBQXVCLEdBQXZCLHVCQUF1QjtRQU92Qiw0QkFBNEIsR0FBNUIsNEJBQTRCO1FBYzVCLDZCQUE2QixHQUE3Qiw2QkFBNkI7UUFVN0Isd0JBQXdCLEdBQXhCLHdCQUF3QjtRQU14QixzQkFBc0IsR0FBdEIsc0JBQXNCO1FBb0J0QixjQUFjLEdBQWQsY0FBYztJQTNEVCxNQUFvQjtTQUV6Qix1QkFBdUIsQ0FBQyxXQUFXO1FBQzNDLHVCQUF1QixHQUFHLGNBQWMsQ0FBQyxXQUFXLFdBQUcsVUFBVTtlQUFNLFVBQVUsQ0FBQyxXQUFXLEtBQUssU0FBUztRQUMzRyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxVQUFFLFVBQVU7ZUFBSyxVQUFVLENBQUMsV0FBVzs7V0FFNUUsUUFBUTs7U0FHRCw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsS0FBc0I7UUFBdEIsaUJBQWlCLEdBQWpCLEtBQXNCLG1CQUF0QixLQUFzQjtRQUNwRSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFN0MsYUFBYSxLQUFLLElBQUk7WUFDbEIsYUFBYSxHQUFHLGFBQWEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFeEMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWE7UUFFcEMsNEJBQTRCLENBQUMsYUFBYSxFQUFFLGlCQUFpQjs7V0FHeEQsaUJBQWlCOztTQUdWLDZCQUE2QixDQUFDLE9BQU8sRUFBRSxLQUF1QjtRQUF2QixrQkFBa0IsR0FBbEIsS0FBdUIsbUJBQXZCLEtBQXVCO1FBQ3RFLGFBQWEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQXhCM0IsTUFBb0IsT0EwQmxDLGtCQUFrQixFQUFFLGFBQWE7SUFFdEMsYUFBYSxDQUFDLE9BQU8sVUFBRSxZQUFZO2VBQUssNkJBQTZCLENBQUMsWUFBWSxFQUFFLGtCQUFrQjs7V0FFL0Ysa0JBQWtCOztTQUdYLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxRQUFRO1FBQ25ELGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxRQUFRLFdBQUcsT0FBTztlQUFLLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxRQUFROztXQUVoRyxnQkFBZ0I7O1NBR1Qsc0JBQXNCLENBQUMsT0FBTyxFQUFFLFFBQVE7UUFDaEQsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRO1dBRTVCLFdBQVc7YUFDWixJQUFJLENBQUMsWUFBWTs7b0JBQ2QsVUFBVSxHQUFHLE9BQU8sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXhCLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUTs7YUFHL0IsSUFBSSxDQUFDLFNBQVM7O29CQUNiLFFBQVEsTUFBSyxDQUFHOzJCQUNYLElBQUk7Ozs7V0FLVixLQUFLOztTQUdFLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSTtRQUNyQyxnQkFBZ0IsT0FDaEIsY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNO1lBRTdCLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGNBQWMsRUFBRSxLQUFLO1lBQ3pDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxHQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFFdkIsTUFBTTtZQUNSLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPOzs7V0FJMUIsZ0JBQWdCIn0=