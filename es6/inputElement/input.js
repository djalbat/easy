"use strict";

import InputElement from "../inputElement";

export default class Input extends InputElement {
  static tagName = "input";

  static fromHTML(html, changeHandler) { return InputElement.fromHTML(Input, html, changeHandler); }

  static fromDOMElement(domElement, changeHandler) { return InputElement.fromDOMElement(Input, domElement, changeHandler); }

  static fromProperties(properties) { return InputElement.fromProperties(Input, properties); }
}
