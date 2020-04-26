"use strict";

import TextElement from "../textElement";

export function removeFalseyElements(elements) {
  elements = elements.reduce(function(elements, element) {
    if (element) {
      elements.push(element);
    }

    return elements;
  }, []);

  return elements;
}

export function replaceStringsWithTextElements(elements) {
  elements = elements.map(function(element) {  ///
    if (typeof element === "string") {
      const text = element,  ///
            textElement = new TextElement(text);

      element = textElement; ///
    }

    return element;
  });

  return elements;
}
