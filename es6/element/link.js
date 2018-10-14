'use strict';

const Element = require('../element');

class Link extends Element {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler !== undefined) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Link.clone(this, clickHandler); }

  onClick(clickHandler, object, intermediateClickHandler = defaultIntermediateClickHandler) {
    this.on('click', clickHandler, object, intermediateClickHandler);
  }
  
  offClick(clickHandler, object) {
    this.off('click', clickHandler, object);
  }

  static clone(element, clickHandler) { return Element.clone(Link, element, clickHandler); }

  static fromHTML(html, clickHandler) { return Element.fromHTML(Link, html, clickHandler); }

  static fromDOMElement(domElement, clickHandler) { return Element.fromDOMElement(Link, domElement, clickHandler); }

  static fromProperties(properties) {
    const { onClick } = properties,
          clickHandler = onClick, ///
          link = Element.fromProperties(Link, properties, clickHandler);
    
    return link;
  }
}

Object.assign(Link, {
  tagName: 'a',
  ignoredProperties: [
    'onClick'
  ]
});

module.exports = Link;

function defaultIntermediateClickHandler(clickHandler, event, element) {
  const link = element, ///
        href = link.getAttribute('href');
  
  clickHandler.call(link, href, event);
}