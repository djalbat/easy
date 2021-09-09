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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZWxlbWVudC5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsIldJTERDQVJEIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yIiwiYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZ2V0UGFyZW50RWxlbWVudCIsInNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJnZXRDaGlsZEVsZW1lbnRzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsImdldEFzY2VuZGFudEVsZW1lbnRzIiwiaGVpZ2h0IiwiSW5maW5pdHkiLCJkb21Ob2RlIiwiYXNjZW5kYW50RE9NTm9kZXMiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZGVwdGgiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJkZXNjZW5kYW50RE9NRWxlbWVudHMiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0RPTU5vZGUiLCJuZXh0U2libGluZyIsIl9fZWxlbWVudF9fIiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwiZWxlbWVudE1peGlucyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7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