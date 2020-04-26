"use strict";

import { splice } from "../utilities/array";

export function elementsFromDOMElements(domElements) {
  const domElementsWithElements = filterDOMNodes(domElements, (domElement) => (domElement.__element__ !== undefined)),
        elements = domElementsWithElements.map((domElement) => domElement.__element__);

  return elements;
}

export function descendantDOMNodesFromDOMNode(domNode, descendantDOMNodes = []) {
  const start = -1,
        deleteCount = 0,
        childDOMNodes = domNode.childNodes;  ///

  splice(descendantDOMNodes, start, deleteCount, childDOMNodes);

  childDOMNodes.forEach((childDOMNode) => descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes));

  return descendantDOMNodes;
}

export function filterDOMNodesBySelector(domNodes, selector) {
  const filteredDOMNodes = filterDOMNodes(domNodes, (domNode) => domNodeMatchesSelector(domNode, selector));

  return filteredDOMNodes;
}

export function domNodeMatchesSelector(domNode, selector) {
  const domNodeType = domNode.nodeType;

  switch (domNodeType) {
    case Node.ELEMENT_NODE : {
      const domElement = domNode; ///

      return domElement.matches(selector);
    }

    case Node.TEXT_NODE : {
      if (selector === "*") {
        return true;
      }
    }
  }

  return false;
}

export function filterDOMNodes(domNodes, test) {
  const filteredDOMNodes = [],
        domNodesLength = domNodes.length;

  for (let index = 0; index < domNodesLength; index++) {
    const domNode = domNodes[index],
          result = test(domNode);

    if (result) {
      filteredDOMNodes.push(domNode);
    }
  }

  return filteredDOMNodes;
}
