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
