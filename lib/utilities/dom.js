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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZG9tLmpzIl0sIm5hbWVzIjpbInB1c2giLCJXSUxEQ0FSRCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c1dpdGhFbGVtZW50cyIsImZpbHRlckRPTU5vZGVzIiwiZG9tRWxlbWVudCIsIl9fZWxlbWVudF9fIiwidW5kZWZpbmVkIiwiZWxlbWVudHMiLCJtYXAiLCJhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZG9tTm9kZSIsImhlaWdodCIsImFzY2VuZGFudERPTU5vZGVzIiwicGFyZW50RE9NTm9kZSIsInBhcmVudEVsZW1lbnQiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsImRlcHRoIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGRET01Ob2RlIiwiZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yIiwiZG9tTm9kZXMiLCJzZWxlY3RvciIsImZpbHRlcmVkRE9NTm9kZXMiLCJkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yIiwiZG9tTm9kZVR5cGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJtYXRjaGVzIiwiVEVYVF9OT0RFIiwidGVzdCIsImRvbU5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFLSSx1QkFBdUIsR0FBdkIsdUJBQXVCO1FBT3ZCLDRCQUE0QixHQUE1Qiw0QkFBNEI7UUFnQjVCLDZCQUE2QixHQUE3Qiw2QkFBNkI7UUFjN0Isd0JBQXdCLEdBQXhCLHdCQUF3QjtRQU14QixzQkFBc0IsR0FBdEIsc0JBQXNCO1FBb0J0QixjQUFjLEdBQWQsY0FBYztBQWxFVCxHQUFvQixDQUFwQixNQUFvQjtBQUNoQixHQUFjLENBQWQsVUFBYztTQUV2Qix1QkFBdUIsQ0FBQyxXQUFXLEVBQUUs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