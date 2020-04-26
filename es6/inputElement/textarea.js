"use strict";

import InputElement from "../inputElement";

export default class Textarea extends InputElement {
  static tagName = "textarea";

  static fromProperties(properties) { return InputElement.fromProperties(Textarea, properties); }
}
