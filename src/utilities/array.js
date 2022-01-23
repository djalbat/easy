"use strict";

export function first(array) { return array[0]; }

export function push(array1, array2) { Array.prototype.push.apply(array1, array2); }

export function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
              [arrayOrElement];
}

export function augment(array1, array2, test) {
  array1 = [ ...array1 ]; ///

  array2.forEach((element, index) => {
    const passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });

  return array1;
}
