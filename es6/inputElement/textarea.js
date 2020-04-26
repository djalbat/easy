"use strict";

import InputElement from "../inputElement";

export default class Textarea extends InputElement {
  static tagName = "textarea";

  static fromDOMElement(domElement, changeHandler) { return InputElement.fromDOMElement(Textarea, domElement, changeHandler); }

  static fromProperties(properties) { return InputElement.fromProperties(Textarea, properties); }
}
