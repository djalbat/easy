'use strict';

const InputElement = require('../inputElement');

class Textarea extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Textarea.clone(this, changeHandler); }

  getValue() { return this.domElement.value; }
  
  getSelectionStart() { return this.domElement.selectionStart; }
  
  getSelectionEnd() { return this.domElement.selectionEnd; }
  
  setValue(value) { this.domElement.value = value; }
  
  setSelectionStart(selectionStart) { this.domElement.selectionStart = selectionStart; }
  
  setSelectionEnd(selectionEnd) { this.domElement.selectionEnd = selectionEnd; }

  select() { this.domElement.select(); }

  onChange(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
    }
    
    this.on('change', handler);
  }

  offChange(handler) {
    this.off('change', handler);
  }

  onResize(resizeHandler) {}
  
  offResize(resizeHandler) {}

  static clone(element, changeHandler) {
    return InputElement.clone(Textarea, element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Textarea, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Textarea, domElement, changeHandler);
  }

  static fromProperties(properties, ) {
    const { onChange } = properties,
          changeHandler = onChange; ///
    
    return InputElement.fromProperties(Textarea, properties, changeHandler);
  }
}

Object.assign(Textarea, {
  tagName: 'textarea',
  ignoredProperties: [
    'onChange',
    'onScroll'
  ]
});

module.exports = Textarea;

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  const value = this.getValue(),
        preventDefault = handler(value, targetElement);

  return preventDefault;
}
