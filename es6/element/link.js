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

  onClick(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateClickHandler.bind(this);
    }
    
    this.on('click', handler);
  }
  
  offClick(handler) {
    this.off('click', handler);
  }

  static clone(element, clickHandler) {
    return Element.clone(Link, element, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return Element.fromHTML(Link, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return Element.fromDOMElement(Link, domElement, clickHandler);
  }

  static fromProperties(properties) {
    const { onClick } = properties,
          clickHandler = onClick; ///    

    return Element.fromProperties(Link, properties, clickHandler);
  }
}

Object.assign(Link, {
  tagName: 'a',
  ignoredProperties: [
    'onClick'
  ]
});

module.exports = Link;

function defaultIntermediateClickHandler(handler, event, targetElement) {
  const href = this.getAttribute('href'),
        preventDefault = handler(href, targetElement);

  return preventDefault;
}