'use strict';

const Element = require('../element');

class Section extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Section.clone(this); }

  static clone(element) { return Element.clone(Section, element); }

  static fromHTML(html) { return Element.fromHTML(Section, html); }

  static fromDOMElement(domElement) { return Element.fromDOMElement(Section, domElement); }

  static fromProperties(properties) { return Element.fromProperties(Section, properties); }
}

Object.assign(Section, {
  tagName: 'div'
});

module.exports = Section;
