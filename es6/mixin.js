'use strict';

function mixin(object, element, Class) {
  const prototype = findPrototype(element, Class),
        names = Object.keys(object); ///
  
  names.forEach(function(name) {
    const method = object[name];

    prototype[name] = method;
  });
}

module.exports = mixin;

function findPrototype(element, Class) {
  const elements = [];

  findElements(element, Class, elements);

  const lastElement = last(elements),
        prototype = Object.getPrototypeOf(lastElement);

  return prototype;
}

function findElements(element, Class, elements) {
  if (element instanceof Class) {
    elements.push(element);

    element = Object.getPrototypeOf(element); ///

    findElements(element, Class, elements);
  }
}

function last(array) { return array[array.length - 1]; }
