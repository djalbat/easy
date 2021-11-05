"use strict";

import { BOOLEAN } from "../constants";

export function combine(target, source = {}) {
  target = { ...target };  ///

  const names = Object.keys(source);  ///

  names.forEach((name) => {
    const targetValue = target[name],
          sourceValue = source[name],
          targetHasOwnProperty = target.hasOwnProperty(name);

    target[name] = targetHasOwnProperty ?
                     combineValues(targetValue, sourceValue) :
                       sourceValue; ///
  });

  return target;
}

export function prune(target, names = []) {
  target = { ...target };  ///

  names.forEach((name) => {
    const targetHasOwnProperty = target.hasOwnProperty(name);

    if (targetHasOwnProperty) {
      delete target[name];
    }
  });

  return target;
}

function combineValues(targetValue, sourceValue) {
  const targetValueBoolean = isValueBoolean(targetValue),
        sourceValueBoolean = isValueBoolean(sourceValue),
        combinedValue = (targetValueBoolean && sourceValueBoolean) ?
                          targetValue : ///
                            `${targetValue} ${sourceValue}`;

  return combinedValue;
}

function isValueBoolean(value) {
  const valueBoolean = (typeof value === BOOLEAN);

  return valueBoolean;
}
