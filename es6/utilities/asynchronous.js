"use strict";

export function forEach(array, callback, done) {
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

      callback(element, next, done, index);
    }
  }

  next();
}