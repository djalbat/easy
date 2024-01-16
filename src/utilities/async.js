"use strict";

export function forEach(array, operation, done, context) {
  const length = array.length;  ///

  let count = -1;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    } else {
      const index = count,  ///
            element = array[index];

      operation(element, next, done, context, index);
    }
  }

  next();
}
