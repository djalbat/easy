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
function ascendantDOMNodesFromDOMNode(domNode, param) {
    var ascendantDOMNodes = param === void 0 ? [] : param;
    var parentDOMNode = domNode.parentElement; ///
    if (parentDOMNode !== null) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCkpLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXyk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBhc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICBpZiAocGFyZW50RE9NTm9kZSAhPT0gbnVsbCkge1xuICAgIGFzY2VuZGFudERPTU5vZGVzLnB1c2gocGFyZW50RE9NTm9kZSk7XG5cbiAgICBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKHBhcmVudERPTU5vZGUsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBhc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICBwdXNoKGRlc2NlbmRhbnRET01Ob2RlcywgY2hpbGRET01Ob2Rlcyk7XG5cbiAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzKSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBS0ksdUJBQXVCLEdBQXZCLHVCQUF1QjtRQU92Qiw0QkFBNEIsR0FBNUIsNEJBQTRCO1FBWTVCLDZCQUE2QixHQUE3Qiw2QkFBNkI7UUFVN0Isd0JBQXdCLEdBQXhCLHdCQUF3QjtRQU14QixzQkFBc0IsR0FBdEIsc0JBQXNCO1FBb0J0QixjQUFjLEdBQWQsY0FBYztJQTFEVCxNQUFvQjtJQUNoQixVQUFjO1NBRXZCLHVCQUF1QixDQUFDLFdBQVc7UUFDM0MsdUJBQXVCLEdBQUcsY0FBYyxDQUFDLFdBQVcsV0FBRyxVQUFVO2VBQU0sVUFBVSxDQUFDLFdBQVcsS0FBSyxTQUFTO1FBQzNHLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLFVBQUUsVUFBVTtlQUFLLFVBQVUsQ0FBQyxXQUFXOztXQUU1RSxRQUFROztTQUdELDRCQUE0QixDQUFDLE9BQU8sRUFBRSxLQUFzQjtRQUF0QixpQkFBaUIsR0FBakIsS0FBc0IsbUJBQXRCLEtBQXNCO1FBQ3BFLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUU3QyxhQUFhLEtBQUssSUFBSTtRQUN4QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYTtRQUVwQyw0QkFBNEIsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCOztXQUd4RCxpQkFBaUI7O1NBR1YsNkJBQTZCLENBQUMsT0FBTyxFQUFFLEtBQXVCO1FBQXZCLGtCQUFrQixHQUFsQixLQUF1QixtQkFBdkIsS0FBdUI7UUFDdEUsYUFBYSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBdkIzQixNQUFvQixPQXlCbEMsa0JBQWtCLEVBQUUsYUFBYTtJQUV0QyxhQUFhLENBQUMsT0FBTyxVQUFFLFlBQVk7ZUFBSyw2QkFBNkIsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCOztXQUUvRixrQkFBa0I7O1NBR1gsd0JBQXdCLENBQUMsUUFBUSxFQUFFLFFBQVE7UUFDbkQsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLFFBQVEsV0FBRyxPQUFPO2VBQUssc0JBQXNCLENBQUMsT0FBTyxFQUFFLFFBQVE7O1dBRWhHLGdCQUFnQjs7U0FHVCxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsUUFBUTtRQUNoRCxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVE7V0FFNUIsV0FBVzthQUNaLElBQUksQ0FBQyxZQUFZOztvQkFDZCxVQUFVLEdBQUcsT0FBTyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFeEIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFROzthQUcvQixJQUFJLENBQUMsU0FBUzs7b0JBQ2IsUUFBUSxLQWhETyxVQUFjOzJCQWlEeEIsSUFBSTs7OztXQUtWLEtBQUs7O1NBR0UsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJO1FBQ3JDLGdCQUFnQixPQUNoQixjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU07WUFFN0IsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsY0FBYyxFQUFFLEtBQUs7WUFDekMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTztZQUV2QixNQUFNO1lBQ1IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU87OztXQUkxQixnQkFBZ0IifQ==