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
        if (domElement.__element__) {
            return true;
        }
    }), elements = domElementsWithElements.map(function(domElement) {
        var element = domElement.__element__;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoKGRvbUVsZW1lbnQuX19lbGVtZW50X18pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X187XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGhlaWdodCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgICBpZiAocGFyZW50RE9NTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYXNjZW5kYW50RE9NTm9kZXMucHVzaChwYXJlbnRET01Ob2RlKTtcblxuICAgICAgaGVpZ2h0LS07XG5cbiAgICAgIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUocGFyZW50RE9NTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBwdXNoKGRlc2NlbmRhbnRET01Ob2RlcywgY2hpbGRET01Ob2Rlcyk7XG5cbiAgICBkZXB0aC0tO1xuXG4gICAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IHtcbiAgICAgIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRvbU5vZGVzLCBzZWxlY3Rvcikge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIChkb21Ob2RlKSA9PiB7XG4gICAgaWYgKGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImRvbU5vZGVNYXRjaGVzU2VsZWN0b3IiLCJmaWx0ZXJET01Ob2RlcyIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMiLCJkb21FbGVtZW50IiwiX19lbGVtZW50X18iLCJlbGVtZW50cyIsIm1hcCIsImVsZW1lbnQiLCJkb21Ob2RlIiwiaGVpZ2h0IiwiYXNjZW5kYW50RE9NTm9kZXMiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50RWxlbWVudCIsInB1c2giLCJkZXB0aCIsImRlc2NlbmRhbnRET01Ob2RlcyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkRE9NTm9kZSIsImRvbU5vZGVzIiwic2VsZWN0b3IiLCJmaWx0ZXJlZERPTU5vZGVzIiwiZG9tTm9kZVR5cGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJtYXRjaGVzIiwiVEVYVF9OT0RFIiwiV0lMRENBUkQiLCJ0ZXN0IiwiZG9tTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBS2dCQSx1QkFBdUI7ZUFBdkJBOztJQWVBQyw0QkFBNEI7ZUFBNUJBOztJQWdCQUMsNkJBQTZCO2VBQTdCQTs7SUFnQkFDLHdCQUF3QjtlQUF4QkE7O0lBVUFDLHNCQUFzQjtlQUF0QkE7O0lBb0JBQyxjQUFjO2VBQWRBOzs7cUJBaEZLO3lCQUNJO0FBRWxCLFNBQVNMLHdCQUF3Qk0sV0FBVztJQUNqRCxJQUFNQywwQkFBMEJGLGVBQWVDLGFBQWEsU0FBQ0U7UUFDdkQsSUFBS0EsV0FBV0MsV0FBVyxFQUFHO1lBQzVCLE9BQU87UUFDVDtJQUNBLElBQ0FDLFdBQVdILHdCQUF3QkksR0FBRyxDQUFDLFNBQUNIO1FBQ3RDLElBQU1JLFVBQVVKLFdBQVdDLFdBQVc7UUFFdEMsT0FBT0c7SUFDVDtJQUVOLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTVCw2QkFBNkJZLE9BQU8sRUFBRUMsTUFBTTtRQUFFQyxvQkFBQUEsaUVBQW9CLEVBQUU7SUFDbEYsSUFBSUQsU0FBUyxHQUFHO1FBQ2QsSUFBTUUsZ0JBQWdCSCxRQUFRSSxhQUFhLEVBQUcsR0FBRztRQUVqRCxJQUFJRCxrQkFBa0IsTUFBTTtZQUMxQkQsa0JBQWtCRyxJQUFJLENBQUNGO1lBRXZCRjtZQUVBYiw2QkFBNkJlLGVBQWVGLFFBQVFDO1FBQ3REO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU2IsOEJBQThCVyxPQUFPLEVBQUVNLEtBQUs7UUFBRUMscUJBQUFBLGlFQUFxQixFQUFFO0lBQ25GLElBQUlELFFBQVEsR0FBRztRQUNiLElBQU1FLGdCQUFnQlIsUUFBUVMsVUFBVSxFQUFHLEdBQUc7UUFFOUNKLElBQUFBLFdBQUksRUFBQ0Usb0JBQW9CQztRQUV6QkY7UUFFQUUsY0FBY0UsT0FBTyxDQUFDLFNBQUNDO1lBQ3JCdEIsOEJBQThCc0IsY0FBY0wsT0FBT0M7UUFDckQ7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTakIseUJBQXlCc0IsUUFBUSxFQUFFQyxRQUFRO0lBQ3pELElBQU1DLG1CQUFtQnRCLGVBQWVvQixVQUFVLFNBQUNaO1FBQ2pELElBQUlULHVCQUF1QlMsU0FBU2EsV0FBVztZQUM3QyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTdkIsdUJBQXVCUyxPQUFPLEVBQUVhLFFBQVE7SUFDdEQsSUFBTUUsY0FBY2YsUUFBUWdCLFFBQVE7SUFFcEMsT0FBUUQ7UUFDTixLQUFLRSxLQUFLQyxZQUFZO1lBQUU7Z0JBQ3RCLElBQU12QixhQUFhSyxTQUFTLEdBQUc7Z0JBRS9CLE9BQU9MLFdBQVd3QixPQUFPLENBQUNOO1lBQzVCO1FBRUEsS0FBS0ksS0FBS0csU0FBUztZQUFFO2dCQUNuQixJQUFJUCxhQUFhUSxtQkFBUSxFQUFFO29CQUN6QixPQUFPO2dCQUNUO1lBQ0Y7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVPLFNBQVM3QixlQUFlb0IsUUFBUSxFQUFFVSxJQUFJO0lBQzNDLElBQU1SLG1CQUFtQixFQUFFLEVBQ3JCUyxpQkFBaUJYLFNBQVNZLE1BQU07SUFFdEMsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFGLGdCQUFnQkUsUUFBUztRQUNuRCxJQUFNekIsVUFBVVksUUFBUSxDQUFDYSxNQUFNLEVBQ3pCQyxTQUFTSixLQUFLdEI7UUFFcEIsSUFBSTBCLFFBQVE7WUFDVlosaUJBQWlCVCxJQUFJLENBQUNMO1FBQ3hCO0lBQ0Y7SUFFQSxPQUFPYztBQUNUIn0=