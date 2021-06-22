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
var _constants = require("../constants");
function elementsFromDOMElements(domElements) {
    var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        return domElement.__element__ !== undefined;
    }), elements = domElementsWithElements.map(function(domElement) {
        return domElement.__element__;
    });
    return elements;
}
function ascendantDOMNodesFromDOMNode(domNode, height, param) {
    var ascendantDOMNodes = param === void 0 ? [] : param;
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
function descendantDOMNodesFromDOMNode(domNode, depth, param) {
    var descendantDOMNodes = param === void 0 ? [] : param;
    if (depth > 0) {
        var childDOMNodes = domNode.childNodes; ///
        (0, _array).push(descendantDOMNodes, childDOMNodes);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCkpLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXyk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGhlaWdodCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgICBpZiAocGFyZW50RE9NTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYXNjZW5kYW50RE9NTm9kZXMucHVzaChwYXJlbnRET01Ob2RlKTtcblxuICAgICAgaGVpZ2h0LS07XG5cbiAgICAgIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUocGFyZW50RE9NTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBwdXNoKGRlc2NlbmRhbnRET01Ob2RlcywgY2hpbGRET01Ob2Rlcyk7XG5cbiAgICBkZXB0aC0tO1xuXG4gICAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcykpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBS0ksdUJBQXVCLEdBQXZCLHVCQUF1QjtRQU92Qiw0QkFBNEIsR0FBNUIsNEJBQTRCO1FBZ0I1Qiw2QkFBNkIsR0FBN0IsNkJBQTZCO1FBYzdCLHdCQUF3QixHQUF4Qix3QkFBd0I7UUFNeEIsc0JBQXNCLEdBQXRCLHNCQUFzQjtRQW9CdEIsY0FBYyxHQUFkLGNBQWM7SUFsRVQsTUFBb0I7SUFDaEIsVUFBYztTQUV2Qix1QkFBdUIsQ0FBQyxXQUFXO1FBQzNDLHVCQUF1QixHQUFHLGNBQWMsQ0FBQyxXQUFXLFdBQUcsVUFBVTtlQUFNLFVBQVUsQ0FBQyxXQUFXLEtBQUssU0FBUztRQUMzRyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxVQUFFLFVBQVU7ZUFBSyxVQUFVLENBQUMsV0FBVzs7V0FFNUUsUUFBUTs7U0FHRCw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQXNCO1FBQXRCLGlCQUFpQixHQUFqQixLQUFzQixtQkFBdEIsS0FBc0I7UUFDOUUsTUFBTSxHQUFHLENBQUM7WUFDTixhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFFN0MsYUFBYSxLQUFLLElBQUk7WUFDeEIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFFcEMsTUFBTTtZQUVOLDRCQUE0QixDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsaUJBQWlCOzs7V0FJbEUsaUJBQWlCOztTQUdWLDZCQUE2QixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBdUI7UUFBdkIsa0JBQWtCLEdBQWxCLEtBQXVCLG1CQUF2QixLQUF1QjtRQUMvRSxLQUFLLEdBQUcsQ0FBQztZQUNMLGFBQWEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztZQTVCN0IsTUFBb0IsT0E4QmhDLGtCQUFrQixFQUFFLGFBQWE7UUFFdEMsS0FBSztRQUVMLGFBQWEsQ0FBQyxPQUFPLFVBQUUsWUFBWTttQkFBSyw2QkFBNkIsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLGtCQUFrQjs7O1dBR3hHLGtCQUFrQjs7U0FHWCx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsUUFBUTtRQUNuRCxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsUUFBUSxXQUFHLE9BQU87ZUFBSyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsUUFBUTs7V0FFaEcsZ0JBQWdCOztTQUdULHNCQUFzQixDQUFDLE9BQU8sRUFBRSxRQUFRO1FBQ2hELFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUTtXQUU1QixXQUFXO2FBQ1osSUFBSSxDQUFDLFlBQVk7O29CQUNkLFVBQVUsR0FBRyxPQUFPLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV4QixVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVE7O2FBRy9CLElBQUksQ0FBQyxTQUFTOztvQkFDYixRQUFRLEtBeERPLFVBQWM7MkJBeUR4QixJQUFJOzs7O1dBS1YsS0FBSzs7U0FHRSxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUk7UUFDckMsZ0JBQWdCLE9BQ2hCLGNBQWMsR0FBRyxRQUFRLENBQUMsTUFBTTtZQUU3QixLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxjQUFjLEVBQUUsS0FBSztZQUN6QyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO1lBRXZCLE1BQU07WUFDUixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTzs7O1dBSTFCLGdCQUFnQiJ9