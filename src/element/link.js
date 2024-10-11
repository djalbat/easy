"use strict";

import Element from "../element";
import focusMixins from "../mixins/focus";

export default class Link extends Element {
  getHRef() { return this.getAttribute("href"); }

  setHRef(href) { return this.setAttribute("href", href); }

  static tagName = "a";
}

Object.assign(Link.prototype, focusMixins);
