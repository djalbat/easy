"use strict";

import { DASH } from "../constants";

export function camelCaseToSnakeCase(string) {
  return string.replace(/([A-Z])/g, (match, character) => {
    const upperCaseCharacter = character.toLowerCase(),
          snakeCaseCharacters = `${DASH}${upperCaseCharacter}`;

    return snakeCaseCharacters;
  });
}
