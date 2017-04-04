'use strict';

const Element = require('./element'),
      TextElement = require('./textElement');

function createElement(firstArgument, properties, ...childArguments) {
  let element = null;

  if (firstArgument !== undefined) {
    const childElements = childElementsFromChildArguments(childArguments);

    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {

    } else if (isSubclassOf(firstArgument, Element)) {
      const Class = firstArgument;  ///

      element = Class.fromProperties(properties);
    } else if (typeof firstArgument === 'function') {
      const elementFunction = firstArgument;  ///

      element = elementFunction(properties);
    } else if (typeof firstArgument === 'string') {
      const tagName = firstArgument,  ///
            html = `<${tagName} />`;

      element = Element.fromHTML(Element, html);

      element.applyProperties(properties);
    }
  }

  return element;
}

const React = {
  createElement: createElement
};

module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function(childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  const childElements = childArguments.map(function(childArgument) {
    let childElement;
    
    if (typeof childArgument === 'string') {
      const text = childArgument, ///
            textElement = new TextElement(text);

      childElement = textElement;
    } else {
      childElement = childArgument;  ///
    }

    return childElement;
  });

  return childElements;
}

function isSubclassOf(argument, Class) {
  let typeOf = false;

  if (argument.name === Class.name) { ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}
