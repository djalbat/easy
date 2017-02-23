'use strict';

class util {
  static findPrototype(element, Class) {
    var elements = [];

    findElements(element, Class, elements);

    var lastElement = last(elements),
        prototype = Object.getPrototypeOf(lastElement);

    return prototype;
  }
}

module.exports = util;

function findElements(element, Class, elements) {
  if (element instanceof Class) {
    elements.push(element);

    element = Object.getPrototypeOf(element); ///

    findElements(element, Class, elements);
  }
}

function last(array) { return array[array.length - 1]; }

