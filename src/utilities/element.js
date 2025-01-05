"use strict";

export function constructElement(element, domElement) {
  element.domElement = domElement;

  domElement.__element__ = element; ///
}

export function destroyElement(element) {
  const descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.forEach((element) => {
    const domElement = element.getDOMElement();

    delete element.domElement;

    delete domElement.__element__;
  });
}

export function mountElement(element) {
  const descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.reverse(); ///

  elements.forEach((element) => {
    element.didMount && element.didMount();
  });
}

export function unmountElement(element) {
  const descendantElements = element.getDescendantElements(),
        elements = [
          element,
          ...descendantElements
        ];

  elements.forEach((element) => {
    element.willUnmount && element.willUnmount();
  });
}

export default {
  constructElement,
  destroyElement,
  mountElement,
  unmountElement
};
