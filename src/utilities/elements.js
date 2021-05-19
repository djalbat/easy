"use strict";

import TextElement from "../textElement";

import { STRING } from "../constants";

export function removeFalseyElements(elements) {
  elements = elements.reduce((elements, element) => {
    if (element) {
      elements.push(element);
    }

    return elements;
  }, []);

  return elements;
}

export function replaceStringsWithTextElements(elements) {
  elements = elements.map((element) => {  ///
    if (typeof element === STRING) {
      const text = element,  ///
            textElement = new TextElement(text);

      element = textElement; ///
    }

    return element;
  });

  return elements;
}
