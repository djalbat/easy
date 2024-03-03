"use strict";

import { push } from "../utilities/array";
import { WILDCARD } from "../constants";

export function elementsFromDOMElements(domElements) {
  const domElementsWithElements = filterDOMNodes(domElements, (domElement) => {
          if ((domElement.__element__)) { ///
            return true;
          }
        }),
        elements = domElementsWithElements.map((domElement) => {
          const element = domElement.__element__; ///

          return element;
        });

  return elements;
}

export function ascendantDOMNodesFromDOMNode(domNode, height, ascendantDOMNodes = []) {
  if (height > 0) {
    const parentDOMNode = domNode.parentElement;  ///

    if (parentDOMNode !== null) {
      ascendantDOMNodes.push(parentDOMNode);

      height--;

      ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
    }
  }

  return ascendantDOMNodes;
}

export function descendantDOMNodesFromDOMNode(domNode, depth, descendantDOMNodes = []) {
  if (depth > 0) {
    const childDOMNodes = domNode.childNodes;  ///

    push(descendantDOMNodes, childDOMNodes);

    depth--;

    childDOMNodes.forEach((childDOMNode) => {
      descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
    });
  }

  return descendantDOMNodes;
}

export function filterDOMNodesBySelector(domNodes, selector) {
  const filteredDOMNodes = filterDOMNodes(domNodes, (domNode) => {
    if (domNodeMatchesSelector(domNode, selector)) {
      return true;
    }
  });

  return filteredDOMNodes;
}

export function domNodeMatchesSelector(domNode, selector) {
  const domNodeType = domNode.nodeType; ///

  switch (domNodeType) {
    case Node.ELEMENT_NODE: {
      const domElement = domNode; ///

      return domElement.matches(selector);
    }

    case Node.TEXT_NODE: {
      if (selector === WILDCARD) {
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
