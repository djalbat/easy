'use strict';

const necessary = require('necessary');

const { array } = necessary,
      { splice } = array;

class domUtilities {
  static domElementFromSelector(selector) {
  const domElement = (typeof selector === 'string') ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}

  static elementsFromDOMElements(domElements) {
    const domElementsWithElements = domUtilities.filterDOMNodes(domElements, function(domElement) {
            return (domElement.__element__ !== undefined);
          }),
          elements = domElementsWithElements.map(function(domElement) {
            return domElement.__element__;
          });
  
    return elements;
  }

  static descendantDOMNodesFromDOMNode(domNode, descendantDOMNodes = []) {
    const start = -1,
          deleteCount = 0,
          childDOMNodes = domNode.childNodes;  ///
  
    splice(descendantDOMNodes, start, deleteCount, childDOMNodes);
  
    childDOMNodes.forEach(function(childDOMNode) {
      domUtilities.descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
    });
  
    return descendantDOMNodes;
  }

  static filterDOMNodesBySelector(domNodes, selector) {
    const filteredDOMNodes = domUtilities.filterDOMNodes(domNodes, function(domNode) {
      return domUtilities.domNodeMatchesSelector(domNode, selector);
    });
  
    return filteredDOMNodes;
  }

  static domNodeMatchesSelector(domNode, selector) {
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

  static filterDOMNodes(domNodes, test) {
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
}

module.exports = domUtilities;
