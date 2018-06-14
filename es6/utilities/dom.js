'use strict';

const arrayUtilities = require('../utilities/array');

const { splice } = arrayUtilities;

function domElementFromSelector(selector) {
  const domElement = (typeof selector === 'string') ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}

function elementsFromDOMElements(domElements) {
  const domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
          return (domElement.__element__ !== undefined);
        }),
        elements = domElementsWithElements.map(function(domElement) {
          return domElement.__element__;
        });

  return elements;
}

function descendantDOMNodesFromDOMNode(domNode, descendantDOMNodes = []) {
  const start = -1,
        deleteCount = 0,
        childDOMNodes = domNode.childNodes;  ///

  splice(descendantDOMNodes, start, deleteCount, childDOMNodes);

  childDOMNodes.forEach(function(childDOMNode) {
    descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
  });

  return descendantDOMNodes;
}

function filterDOMNodesBySelector(domNodes, selector) {
  const filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
    return domNodeMatchesSelector(domNode, selector);
  });

  return filteredDOMNodes;
}

function domNodeMatchesSelector(domNode, selector) {
  const domNodeType = domNode.nodeType;

  switch (domNodeType) {
    case Node.ELEMENT_NODE : {
      const domElement = domNode; ///

      return domElement.matches(selector);
    }

    case Node.TEXT_NODE : {
      if (selector === '*') {
        return true;
      }
    }
  }

  return false;
}

function filterDOMNodes(domNodes, test) {
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

module.exports = {
  domElementFromSelector,
  elementsFromDOMElements,
  descendantDOMNodesFromDOMNode,
  filterDOMNodesBySelector,
  domNodeMatchesSelector,
  filterDOMNodes
};
