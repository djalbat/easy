"use strict";

import { DASH } from "../constants";

export function camelCaseToSnakeCase(string) {
  return string.replace(/([A-Z]+)/g, (match, characters) => {
    const upperCaseCharacters = characters.toLowerCase(),
          snakeCaseCharacters = `${DASH}${upperCaseCharacters}`;

    return snakeCaseCharacters;
  });
}
