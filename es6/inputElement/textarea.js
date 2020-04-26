"use strict";

import InputElement from "../inputElement";

export default class Textarea extends InputElement {
  static tagName = "textarea";

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = Textarea;
    }

    return InputElement.fromProperties(Class, properties);
  }
}
