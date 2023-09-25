"use strict";

import Element from "./element";

import { flatten } from "./utilities/array";
import { STRING, FUNCTION } from "./constants";
import { removeFalseyElements, replaceStringsWithTextElements } from "./utilities/elements";

function createElement(firstArgument, properties, ...childElements) {
  let element = null;

  if (firstArgument) {
    childElements = sanitiseChildElements(childElements);

    properties = Object.assign({
      childElements
    }, properties);

    if (false) {
      ///
    } else if (isSubclassOf(firstArgument, Element)) {
      const Class = firstArgument;  ///

      element = Class.fromClass(Class, properties);
    } else if (typeof firstArgument === STRING) {
      const tagName = firstArgument; ///

      element = Element.fromTagName(tagName, properties);
    } else if (typeof firstArgument === FUNCTION) {
      const elementFunction = firstArgument;  ///

      element = elementFunction(properties);
    }
  }

  return element;
}

const React = {
  createElement
};

export default React;

function sanitiseChildElements(childElements) {
  childElements = flatten(childElements);

  childElements = removeFalseyElements(childElements);

  childElements = replaceStringsWithTextElements(childElements);

  return childElements;
}


function isSubclassOf(argument, Class) {
  const subclassOf = (argument.prototype instanceof Class);

  return subclassOf;
}
