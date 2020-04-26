"use strict";

import InputElement from "../inputElement";

export default class Textarea extends InputElement {
  static tagName = "textarea";

  static fromHTML(html, changeHandler) { return InputElement.fromHTML(Textarea, html, changeHandler); }

  static fromDOMElement(domElement, changeHandler) { return InputElement.fromDOMElement(Textarea, domElement, changeHandler); }

  static fromProperties(properties) { return InputElement.fromProperties(Textarea, properties); }
}
