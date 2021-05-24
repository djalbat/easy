"use strict";

import { first } from "../utilities/array";
import { WILDCARD } from "../constants";
import { ascendantDOMNodesFromDOMNode, descendantDOMNodesFromDOMNode, domNodeMatchesSelector, elementsFromDOMElements, filterDOMNodesBySelector } from "../utilities/dom";

function getDescendantElements(selector = WILDCARD) {
  const domNode = this.domElement,  ///
        descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
        descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
        descendantElements = elementsFromDOMElements(descendantDOMElements);

  return descendantElements;
}

function getChildElements(selector = WILDCARD) {
  const childDOMNodes = this.domElement.childNodes,
        childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
        childElements = elementsFromDOMElements(childDOMElements);

  return childElements;
}

function getParentElement(selector = WILDCARD) {
  let parentElement = null;

  const parentDOMElement = this.domElement.parentElement;

  if (parentDOMElement !== null) {
    if (parentDOMElement.matches(selector)) {
      const parentDOMElements = [parentDOMElement],
            parentElements = elementsFromDOMElements(parentDOMElements),
            firstParentElement = first(parentElements);

      parentElement = firstParentElement || null;
    }
  }

  return parentElement;
}

function getAscendantElements(selector = WILDCARD) {
  const domNode = this.domElement,  ///
        ascendantDOMNodes = ascendantDOMNodesFromDOMNode(domNode),
        ascendantDOMElements = filterDOMNodesBySelector(ascendantDOMNodes, selector),
        ascendantElements = elementsFromDOMElements(ascendantDOMElements);

  return ascendantElements;
}

function getPreviousSiblingElement(selector = WILDCARD) {
  let previousSiblingElement = null;

  const previousSiblingDOMNode = this.domElement.previousSibling;  ///

  if ((previousSiblingDOMNode !== null) && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
    previousSiblingElement = previousSiblingDOMNode.__element__ || null;
  }

  return previousSiblingElement;
}

function getNextSiblingElement(selector = WILDCARD) {
  let nextSiblingElement = null;

  const nextSiblingDOMNode = this.domElement.nextSibling;

  if ((nextSiblingDOMNode !== null) && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
    nextSiblingElement = nextSiblingDOMNode.__element__ || null;
  }

  return nextSiblingElement;
}

const elementMixins = {
  getDescendantElements,
  getChildElements,
  getParentElement,
  getAscendantElements,
  getPreviousSiblingElement,
  getNextSiblingElement
};

export default elementMixins;