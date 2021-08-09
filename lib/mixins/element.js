"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
var _constants = require("../constants");
var _dom = require("../utilities/dom");
function getParentElement(param) {
    var selector = param === void 0 ? _constants.WILDCARD : param;
    var parentElement = null;
    var parentDOMElement = this.domElement.parentElement;
    if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
            var parentDOMElements = [
                parentDOMElement
            ], parentElements = (0, _dom).elementsFromDOMElements(parentDOMElements), firstParentElement = (0, _array).first(parentElements);
            parentElement = firstParentElement || null;
        }
    }
    return parentElement;
}
function getChildElements(param) {
    var selector = param === void 0 ? _constants.WILDCARD : param;
    var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom).filterDOMNodesBySelector(childDOMNodes, selector), childElements = (0, _dom).elementsFromDOMElements(childDOMElements);
    return childElements;
}
function getAscendantElements(param, param1) {
    var selector = param === void 0 ? _constants.WILDCARD : param, height = param1 === void 0 ? Infinity : param1;
    var domNode = this.domElement, ascendantDOMNodes = (0, _dom).ascendantDOMNodesFromDOMNode(domNode, height), ascendantDOMElements = (0, _dom).filterDOMNodesBySelector(ascendantDOMNodes, selector), ascendantElements = (0, _dom).elementsFromDOMElements(ascendantDOMElements);
    return ascendantElements;
}
function getDescendantElements(param, param1) {
    var selector = param === void 0 ? _constants.WILDCARD : param, depth = param1 === void 0 ? Infinity : param1;
    var domNode = this.domElement, descendantDOMNodes = (0, _dom).descendantDOMNodesFromDOMNode(domNode, depth), descendantDOMElements = (0, _dom).filterDOMNodesBySelector(descendantDOMNodes, selector), descendantElements = (0, _dom).elementsFromDOMElements(descendantDOMElements);
    return descendantElements;
}
function getNextSiblingElement(param) {
    var selector = param === void 0 ? _constants.WILDCARD : param;
    var nextSiblingElement = null;
    var nextSiblingDOMNode = this.domElement.nextSibling;
    if (nextSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
    }
    return nextSiblingElement;
}
function getPreviousSiblingElement(param) {
    var selector = param === void 0 ? _constants.WILDCARD : param;
    var previousSiblingElement = null;
    var previousSiblingDOMNode = this.domElement.previousSibling; ///
    if (previousSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
    }
    return previousSiblingElement;
}
var elementMixins = {
    getParentElement: getParentElement,
    getChildElements: getChildElements,
    getAscendantElements: getAscendantElements,
    getDescendantElements: getDescendantElements,
    getNextSiblingElement: getNextSiblingElement,
    getPreviousSiblingElement: getPreviousSiblingElement
};
var _default = elementMixins;
exports.default = _default;
