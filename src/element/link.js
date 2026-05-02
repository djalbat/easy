"use strict";

import Element from "../element";
import focusMixins from "../mixins/focus";

export default class Link extends Element {
  getHref() { return this.getAttribute("href"); }

  setHref(href) { return this.setAttribute("href", href); }

  static tagName = "a";
}

Object.assign(Link.prototype, focusMixins);
