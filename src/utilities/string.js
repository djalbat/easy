"use strict";

export function camelCaseToSnakeCase(string) {
  return string.replace(/([A-Z]+)/g, (match, characters) => {
    const upperCaseCharacters = characters.toLowerCase(),
          snakeCaseCharacters = `-${upperCaseCharacters}`;

    return snakeCaseCharacters;
  });
}
