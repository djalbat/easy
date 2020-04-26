"use strict";

import InputElement from "../inputElement";

export default class Input extends InputElement {
  static tagName = "input";

  static fromProperties(properties) { return InputElement.fromProperties(Input, properties); }
}
