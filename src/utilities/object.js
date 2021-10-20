"use strict";

export function combine(targetObject, sourceObject = {}) {
  targetObject = { ...targetObject };  ///

  const sourceKeys = Object.keys(sourceObject);

  sourceKeys.forEach((sourceKey) => {
    const targetProperty = targetObject[sourceKey],
          sourceProperty = sourceObject[sourceKey];

    targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ?
                               `${targetProperty} ${sourceProperty}` :
                                  sourceProperty;
  });

  return targetObject;
}

export function prune(targetObject, sourceKeys = []) {
  targetObject = { ...targetObject };  ///

  sourceKeys.forEach((sourceKey) => {
    if (targetObject.hasOwnProperty(sourceKey)) {
      delete targetObject[sourceKey];
    }
  });

  return targetObject;
}
