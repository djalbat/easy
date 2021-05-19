"use strict";

import Element from "../element";

import { BODY } from "../constants";

export default class Body extends Element {
  constructor(selector = BODY) {
    super(selector);
  }

  static tagName = "body";
}
