'use strict';

function first(array) { return array[0]; }

function splice(array1, start, deleteCount = Infinity, array2 = []) {
  const args = [start, deleteCount, ...array2],
       deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

function flatten(array) {
  return array.reduce(function(array, element) {
    array = array.concat(element);  ///

    return array;
  }, []);
}

function augment(array1, array2, test) {
  array2.forEach(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

module.exports = {
  first,
  splice,
  flatten,
  augment
};
