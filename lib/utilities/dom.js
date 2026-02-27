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
    get ascendantDOMNodesFromDOMNode () {
        return ascendantDOMNodesFromDOMNode;
    },
    get descendantDOMNodesFromDOMNode () {
        return descendantDOMNodesFromDOMNode;
    },
    get domNodeMatchesSelector () {
        return domNodeMatchesSelector;
    },
    get elementsFromDOMElements () {
        return elementsFromDOMElements;
    },
    get filterDOMNodes () {
        return filterDOMNodes;
    },
    get filterDOMNodesBySelector () {
        return filterDOMNodesBySelector;
    }
});
const _array = require("../utilities/array");
const _constants = require("../constants");
function elementsFromDOMElements(domElements) {
    const domElementsWithElements = filterDOMNodes(domElements, (domElement)=>{
        if (domElement.__element__) {
            return true;
        }
    }), elements = domElementsWithElements.map((domElement)=>{
        const element = domElement.__element__; ///
        return element;
    });
    return elements;
}
function ascendantDOMNodesFromDOMNode(domNode, height, ascendantDOMNodes = []) {
    if (height > 0) {
        const parentDOMNode = domNode.parentElement; ///
        if (parentDOMNode !== null) {
            ascendantDOMNodes.push(parentDOMNode);
            height--;
            ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
        }
    }
    return ascendantDOMNodes;
}
function descendantDOMNodesFromDOMNode(domNode, depth, descendantDOMNodes = []) {
    if (depth > 0) {
        const childDOMNodes = domNode.childNodes; ///
        (0, _array.push)(descendantDOMNodes, childDOMNodes);
        depth--;
        childDOMNodes.forEach((childDOMNode)=>{
            descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
    }
    return descendantDOMNodes;
}
function filterDOMNodesBySelector(domNodes, selector) {
    const filteredDOMNodes = filterDOMNodes(domNodes, (domNode)=>{
        if (domNodeMatchesSelector(domNode, selector)) {
            return true;
        }
    });
    return filteredDOMNodes;
}
function domNodeMatchesSelector(domNode, selector) {
    const domNodeType = domNode.nodeType; ///
    switch(domNodeType){
        case Node.ELEMENT_NODE:
            {
                const domElement = domNode; ///
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
    const filteredDOMNodes = [], domNodesLength = domNodes.length;
    for(let index = 0; index < domNodesLength; index++){
        const domNode = domNodes[index], result = test(domNode);
        if (result) {
            filteredDOMNodes.push(domNode);
        }
    }
    return filteredDOMNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZG9tRWxlbWVudC5fX2VsZW1lbnRfXykpIHsgLy8vXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fOyAvLy9cblxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGlmIChwYXJlbnRET01Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgICBoZWlnaHQtLTtcblxuICAgICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHB1c2goZGVzY2VuZGFudERPTU5vZGVzLCBjaGlsZERPTU5vZGVzKTtcblxuICAgIGRlcHRoLS07XG5cbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goKGNoaWxkRE9NTm9kZSkgPT4ge1xuICAgICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IHtcbiAgICBpZiAoZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTsgLy8vXG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJmaWx0ZXJET01Ob2RlcyIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMiLCJkb21FbGVtZW50IiwiX19lbGVtZW50X18iLCJlbGVtZW50cyIsIm1hcCIsImVsZW1lbnQiLCJkb21Ob2RlIiwiaGVpZ2h0IiwiYXNjZW5kYW50RE9NTm9kZXMiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50RWxlbWVudCIsInB1c2giLCJkZXB0aCIsImRlc2NlbmRhbnRET01Ob2RlcyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkRE9NTm9kZSIsImRvbU5vZGVzIiwic2VsZWN0b3IiLCJmaWx0ZXJlZERPTU5vZGVzIiwiZG9tTm9kZVR5cGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJtYXRjaGVzIiwiVEVYVF9OT0RFIiwiV0lMRENBUkQiLCJ0ZXN0IiwiZG9tTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBb0JnQkE7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUEwQkFDO2VBQUFBOztRQXpEQUM7ZUFBQUE7O1FBNkVBQztlQUFBQTs7UUE5QkFDO2VBQUFBOzs7dUJBbERLOzJCQUNJO0FBRWxCLFNBQVNGLHdCQUF3QkcsV0FBVztJQUNqRCxNQUFNQywwQkFBMEJILGVBQWVFLGFBQWEsQ0FBQ0U7UUFDckQsSUFBS0EsV0FBV0MsV0FBVyxFQUFHO1lBQzVCLE9BQU87UUFDVDtJQUNGLElBQ0FDLFdBQVdILHdCQUF3QkksR0FBRyxDQUFDLENBQUNIO1FBQ3RDLE1BQU1JLFVBQVVKLFdBQVdDLFdBQVcsRUFBRSxHQUFHO1FBRTNDLE9BQU9HO0lBQ1Q7SUFFTixPQUFPRjtBQUNUO0FBRU8sU0FBU1YsNkJBQTZCYSxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUU7SUFDbEYsSUFBSUQsU0FBUyxHQUFHO1FBQ2QsTUFBTUUsZ0JBQWdCSCxRQUFRSSxhQUFhLEVBQUcsR0FBRztRQUVqRCxJQUFJRCxrQkFBa0IsTUFBTTtZQUMxQkQsa0JBQWtCRyxJQUFJLENBQUNGO1lBRXZCRjtZQUVBZCw2QkFBNkJnQixlQUFlRixRQUFRQztRQUN0RDtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNkLDhCQUE4QlksT0FBTyxFQUFFTSxLQUFLLEVBQUVDLHFCQUFxQixFQUFFO0lBQ25GLElBQUlELFFBQVEsR0FBRztRQUNiLE1BQU1FLGdCQUFnQlIsUUFBUVMsVUFBVSxFQUFHLEdBQUc7UUFFOUNKLElBQUFBLFdBQUksRUFBQ0Usb0JBQW9CQztRQUV6QkY7UUFFQUUsY0FBY0UsT0FBTyxDQUFDLENBQUNDO1lBQ3JCdkIsOEJBQThCdUIsY0FBY0wsT0FBT0M7UUFDckQ7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTZix5QkFBeUJvQixRQUFRLEVBQUVDLFFBQVE7SUFDekQsTUFBTUMsbUJBQW1CdkIsZUFBZXFCLFVBQVUsQ0FBQ1o7UUFDakQsSUFBSVgsdUJBQXVCVyxTQUFTYSxXQUFXO1lBQzdDLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVN6Qix1QkFBdUJXLE9BQU8sRUFBRWEsUUFBUTtJQUN0RCxNQUFNRSxjQUFjZixRQUFRZ0IsUUFBUSxFQUFFLEdBQUc7SUFFekMsT0FBUUQ7UUFDTixLQUFLRSxLQUFLQyxZQUFZO1lBQUU7Z0JBQ3RCLE1BQU12QixhQUFhSyxTQUFTLEdBQUc7Z0JBRS9CLE9BQU9MLFdBQVd3QixPQUFPLENBQUNOO1lBQzVCO1FBRUEsS0FBS0ksS0FBS0csU0FBUztZQUFFO2dCQUNuQixJQUFJUCxhQUFhUSxtQkFBUSxFQUFFO29CQUN6QixPQUFPO2dCQUNUO1lBQ0Y7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVPLFNBQVM5QixlQUFlcUIsUUFBUSxFQUFFVSxJQUFJO0lBQzNDLE1BQU1SLG1CQUFtQixFQUFFLEVBQ3JCUyxpQkFBaUJYLFNBQVNZLE1BQU07SUFFdEMsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFGLGdCQUFnQkUsUUFBUztRQUNuRCxNQUFNekIsVUFBVVksUUFBUSxDQUFDYSxNQUFNLEVBQ3pCQyxTQUFTSixLQUFLdEI7UUFFcEIsSUFBSTBCLFFBQVE7WUFDVlosaUJBQWlCVCxJQUFJLENBQUNMO1FBQ3hCO0lBQ0Y7SUFFQSxPQUFPYztBQUNUIn0=