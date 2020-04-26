"use strict";

export function first(array) { return array[0]; }

export function splice(array1, start, deleteCount = Infinity, array2 = []) {
  const args = [start, deleteCount, ...array2],
       deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

export function flatten(array) {
  return array.reduce(function(array, element) {
    array = array.concat(element);  ///

    return array;
  }, []);
}

export function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
              [arrayOrElement];
}

export function augment(array1, array2, test) {
  array2.forEach(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}
