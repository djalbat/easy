'use strict';

const Element = require('./element'),
      TextElement = require('./textElement');

class React {
  static createElement(firstArgument, properties, ...childArguments) {
    let element = null;

    if (firstArgument !== undefined) {
      const childElements = childElementsFromChildArguments(childArguments);

      properties = Object.assign({
        childElements: childElements
      }, properties);

      if (false) {

      } else if (typeof firstArgument === 'string') {
        const tagName = firstArgument,  ///
              html = `<${tagName}></${tagName}>`;

        element = Element.fromHTML(html);

        element.applyProperties(properties);
      } else if (isTypeOf(firstArgument, Element)) {
        const Class = firstArgument;  ///

        element = Class.fromProperties(properties);
      } else if (typeof firstArgument === 'function') {
        const elementFunction = firstArgument;  ///

        element = elementFunction(properties);
      }
    }

    return element;
  }
}

module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function(childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  const childElements = childArguments.map(function(childArgument) {
    let childElement;

    if (  (childArgument instanceof Element)
       || (childArgument instanceof TextElement)  ) {
      childElement = childArgument;  ///
    } else {
      const text = childArgument, ///
            textElement = new TextElement(text);

      childElement = textElement;
    }

    return childElement;
  });

  return childElements;
}

function isTypeOf(argument, Class) {
  let typeOf = false;

  if (argument === Class) { ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}
