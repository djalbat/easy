"use strict";

import InputElement from "../inputElement";

export default class Input extends InputElement {
  static tagName = "input";

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = Input;
    }

    return InputElement.fromProperties(Class, properties);
  }
}
