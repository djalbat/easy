"use strict";

import Element from "./element";

import { flatten } from "./utilities/array";
import { removeFalseyElements, replaceStringsWithTextElements } from "./utilities/elements";

function createElement(firstArgument, properties, ...childArguments) {
  let element = null;

  if (firstArgument !== undefined) {
    const childElements = childElementsFromChildArguments(childArguments);

    properties = Object.assign({
      childElements
    }, properties);

    if (false) {
      ///
    } else if (isSubclassOf(firstArgument, Element)) {
      const Class = firstArgument;  ///

      element = Class.fromProperties(properties);
    } else if (typeof firstArgument === "string") {
      const tagName = firstArgument; ///

      element = Element.fromTagName(tagName, properties);
    } else if (typeof firstArgument === "function") {
      const elementFunction = firstArgument;  ///

      element = elementFunction(properties);
    }
  }

  return element;
}

const React = {
  createElement: createElement
};

export default React;

function childElementsFromChildArguments(childArguments) {
  childArguments = flatten(childArguments); ///

  let childElements = childArguments; ///

  childElements = removeFalseyElements(childElements);

  childElements = replaceStringsWithTextElements(childElements);

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
