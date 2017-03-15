'use strict';

const Element = require('./element');

class InputElement extends Element {
  constructor(selector) {
    super(selector);
  }

  hasFocus() {
    const focus = (document.activeElement === this.domElement);  ///

    return focus;
  }

  focus() { this.domElement.focus(); }

  static clone(Class, element, ...remainingArguments) {
    return Element.clone(Class, element, ...remainingArguments);
  }

  static fromHTML(Class, html, ...remainingArguments) {
    return Element.fromHTML(Class, html, ...remainingArguments);
  }

  static fromDOMElement(Class, domElement, ...remainingArguments) {
    return Element.fromDOMElement(Class, domElement, ...remainingArguments);
  }

  static fromProperties(Class, properties, ...handlers) {
    const handlerNames = handlers.map(function(handler) {
      const handlerName = handler.name; ///
      
      delete properties[handlerName];
      
      return handlerName;
    });
    
    const inputElement = Element.fromProperties(Class, properties);
    
    handlers.forEach(function(handler, index) {
      const handlerName = handlerNames[index];
      
      inputElement[handlerName](handler); ///
    });
    
    return inputElement;
  }
}

module.exports = InputElement;
