"use strict";

import Element from "../element";

export default class Link extends Element {
  getHRef() { return this.getAttribute("href"); }

  setHRef(href) { return this.setAttribute("href", href); }

  static tagName = "a";
}
