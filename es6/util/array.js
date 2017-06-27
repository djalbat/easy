'use strict';

class arrayUtil {
  static first(array) { return array[0]; }


  static splice(array, start, deleteCount, itemsArray = []) {
    const args = [start, deleteCount, ...itemsArray],
          deletedItemsArray = Array.prototype.splice.apply(array, args);

    return deletedItemsArray;
  }
}

module.exports = arrayUtil;