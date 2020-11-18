"use strict";

import { first } from "../utilities/array";
import { ascendantDOMNodesFromDOMNode, descendantDOMNodesFromDOMNode, domNodeMatchesSelector, elementsFromDOMElements, filterDOMNodesBySelector } from "../utilities/dom";

function getDescendantElements(selector = "*") {
  const domNode = this.domElement,  ///
        descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
        descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
        descendantElements = elementsFromDOMElements(descendantDOMElements);

  return descendantElements;
}

function getChildElements(selector = "*") {
  const childDOMNodes = this.domElement.childNodes,
        childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
        childElements = elementsFromDOMElements(childDOMElements);

  return childElements;
}

function getParentElement(selector = "*") {
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

function getAscendantElements(selector = "*") {
  const domNode = this.domElement,  ///
        ascendantDOMNodes = ascendantDOMNodesFromDOMNode(domNode),
        ascendantDOMElements = filterDOMNodesBySelector(ascendantDOMNodes, selector),
        ascendantElements = elementsFromDOMElements(ascendantDOMElements);

  return ascendantElements;
}

function getPreviousSiblingElement(selector = "*") {
  let previousSiblingElement = null;

  const previousSiblingDOMNode = this.domElement.previousSibling;  ///

  if ((previousSiblingDOMNode !== null) && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
    previousSiblingElement = previousSiblingDOMNode.__element__ || null;
  }

  return previousSiblingElement;
}

function getNextSiblingElement(selector = "*") {
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
