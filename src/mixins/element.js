"use strict";

import { first } from "../utilities/array";
import { WILDCARD } from "../constants";
import { domNodeMatchesSelector, elementsFromDOMElements, filterDOMNodesBySelector, ascendantDOMNodesFromDOMNode, descendantDOMNodesFromDOMNode } from "../utilities/dom";

function mountElement(element) {
  const descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.reverse(); ///

  elements.forEach((element) => {
    element.didMount && element.didMount();
  });
}

function unmountElement(element) {
  const descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.forEach((element) => {
    element.willUnmount && element.willUnmount();
  });
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

function getChildElements(selector = WILDCARD) {
  const childDOMNodes = this.domElement.childNodes,
        childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
        childElements = elementsFromDOMElements(childDOMElements);

  return childElements;
}

function getAscendantElements(selector = WILDCARD, maximumHeight = Infinity) {
  const height = maximumHeight, ///
        domNode = this.domElement,  ///
        ascendantDOMNodes = ascendantDOMNodesFromDOMNode(domNode, height),
        ascendantDOMElements = filterDOMNodesBySelector(ascendantDOMNodes, selector),
        ascendantElements = elementsFromDOMElements(ascendantDOMElements);

  return ascendantElements;
}

function getDescendantElements(selector = WILDCARD, maximumDepth = Infinity) {
  const depth = maximumDepth, ///
        domNode = this.domElement,  ///
        descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode, depth),
        descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
        descendantElements = elementsFromDOMElements(descendantDOMElements);

  return descendantElements;
}

function getNextSiblingElement(selector = WILDCARD) {
  let nextSiblingElement = null;

  const nextSiblingDOMNode = this.domElement.nextSibling;

  if ((nextSiblingDOMNode !== null) && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
    nextSiblingElement = nextSiblingDOMNode.__element__ || null;
  }

  return nextSiblingElement;
}

function getPreviousSiblingElement(selector = WILDCARD) {
  let previousSiblingElement = null;

  const previousSiblingDOMNode = this.domElement.previousSibling;  ///

  if ((previousSiblingDOMNode !== null) && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
    previousSiblingElement = previousSiblingDOMNode.__element__ || null;
  }

  return previousSiblingElement;
}

const elementMixins = {
  mountElement,
  unmountElement,
  getParentElement,
  getChildElements,
  getAscendantElements,
  getDescendantElements,
  getNextSiblingElement,
  getPreviousSiblingElement
};

export default elementMixins;
