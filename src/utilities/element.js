"use strict";

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
  mountElement,
  unmountElement
};
