'use strict';

const Element = require('./element');

class React {
  static createElement(firstArgument, properties, ...childElements) {
    let element = null;

    if (firstArgument !== undefined) {
      childElements = flattenChildElements(childElements);

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
      } else if (firstArgument.prototype.render) {
        const Class = firstArgument,  ///
              instance = new Class(properties);

        element = instance.render();
      } else if (typeof firstArgument === 'function') {
        const elementFunction = firstArgument;  ///

        element = elementFunction(properties);
      }
    }

    return element;
  }
}

module.exports = React;

function flattenChildElements(childElements) {
  childElements = childElements.reduce(function(childElements, childElement) {  ///
    childElements = childElements.concat(childElement);

    return childElements;
  }, []);

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
