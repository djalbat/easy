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
    _array.push(descendantDOMNodes, childDOMNodes);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlcyhkb21FbGVtZW50cywgKGRvbUVsZW1lbnQpID0+IChkb21FbGVtZW50Ll9fZWxlbWVudF9fICE9PSB1bmRlZmluZWQpKSxcbiAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IGRvbUVsZW1lbnQuX19lbGVtZW50X18pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgaWYgKHBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgcHVzaChkZXNjZW5kYW50RE9NTm9kZXMsIGNoaWxkRE9NTm9kZXMpO1xuXG4gIGNoaWxkRE9NTm9kZXMuZm9yRWFjaCgoY2hpbGRET01Ob2RlKSA9PiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShjaGlsZERPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcykpO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpKTtcblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7O1FBSUEsdUJBQUEsR0FBQSx1QkFBQTtRQU9BLDRCQUFBLEdBQUEsNEJBQUE7UUFjQSw2QkFBQSxHQUFBLDZCQUFBO1FBVUEsd0JBQUEsR0FBQSx3QkFBQTtRQU1BLHNCQUFBLEdBQUEsc0JBQUE7UUFvQkEsY0FBQSxHQUFBLGNBQUE7SUEzREEsTUFBQTtTQUVBLHVCQUFBLENBQUEsV0FBQTtRQUNBLHVCQUFBLEdBQUEsY0FBQSxDQUFBLFdBQUEsV0FBQSxVQUFBO2VBQUEsVUFBQSxDQUFBLFdBQUEsS0FBQSxTQUFBO1FBQ0EsUUFBQSxHQUFBLHVCQUFBLENBQUEsR0FBQSxVQUFBLFVBQUE7ZUFBQSxVQUFBLENBQUEsV0FBQTs7V0FFQSxRQUFBOztTQUdBLDRCQUFBLENBQUEsT0FBQSxFQUFBLEtBQUE7UUFBQSxpQkFBQSxHQUFBLEtBQUEsbUJBQUEsS0FBQTtRQUNBLGFBQUEsR0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1FBRUEsYUFBQSxLQUFBLElBQUE7WUFDQSxhQUFBLEdBQUEsYUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEseUJBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQTtBQUVBLG9DQUFBLENBQUEsYUFBQSxFQUFBLGlCQUFBOztXQUdBLGlCQUFBOztTQUdBLDZCQUFBLENBQUEsT0FBQSxFQUFBLEtBQUE7UUFBQSxrQkFBQSxHQUFBLEtBQUEsbUJBQUEsS0FBQTtRQUNBLGFBQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBeEJBLFVBQUEsTUEwQkEsa0JBQUEsRUFBQSxhQUFBO0FBRUEsaUJBQUEsQ0FBQSxPQUFBLFVBQUEsWUFBQTtlQUFBLDZCQUFBLENBQUEsWUFBQSxFQUFBLGtCQUFBOztXQUVBLGtCQUFBOztTQUdBLHdCQUFBLENBQUEsUUFBQSxFQUFBLFFBQUE7UUFDQSxnQkFBQSxHQUFBLGNBQUEsQ0FBQSxRQUFBLFdBQUEsT0FBQTtlQUFBLHNCQUFBLENBQUEsT0FBQSxFQUFBLFFBQUE7O1dBRUEsZ0JBQUE7O1NBR0Esc0JBQUEsQ0FBQSxPQUFBLEVBQUEsUUFBQTtRQUNBLFdBQUEsR0FBQSxPQUFBLENBQUEsUUFBQTtXQUVBLFdBQUE7YUFDQSxJQUFBLENBQUEsWUFBQTs7b0JBQ0EsVUFBQSxHQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxVQUFBLENBQUEsT0FBQSxDQUFBLFFBQUE7O2FBR0EsSUFBQSxDQUFBLFNBQUE7O29CQUNBLFFBQUEsTUFBQSxDQUFBOzJCQUNBLElBQUE7Ozs7V0FLQSxLQUFBOztTQUdBLGNBQUEsQ0FBQSxRQUFBLEVBQUEsSUFBQTtRQUNBLGdCQUFBLE9BQ0EsY0FBQSxHQUFBLFFBQUEsQ0FBQSxNQUFBO1lBRUEsS0FBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsY0FBQSxFQUFBLEtBQUE7WUFDQSxPQUFBLEdBQUEsUUFBQSxDQUFBLEtBQUEsR0FDQSxNQUFBLEdBQUEsSUFBQSxDQUFBLE9BQUE7WUFFQSxNQUFBO0FBQ0EsNEJBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQTs7O1dBSUEsZ0JBQUEifQ==