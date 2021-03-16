"use strict";

import Element from "../element";

export default class Body extends Element {
  constructor(selector = "body") {
    super(selector);
  }

  static tagName = "body";
}
