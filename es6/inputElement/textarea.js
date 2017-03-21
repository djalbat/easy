'use strict';

const InputElement = require('../inputElement');

class Textarea extends InputElement {
  constructor(selector, changeHandler, scrollHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }

    if (scrollHandler) {
      this.onScroll(scrollHandler);
    }
  }

  clone(changeHandler) { return Textarea.clone(this, changeHandler); }

  getValue() { return this.domElement.value; }
  
  getSelectionStart() { return this.domElement.selectionStart; }
  
  getSelectionEnd() { return this.domElement.selectionEnd; }
  
  getScrollTop() { return this.domElement.scrollTop; }
  
  getScrollLeft() { return this.domElement.scrollLeft; }

  setValue(value) { this.domElement.value = value; }
  
  setSelectionStart(selectionStart) { this.domElement.selectionStart = selectionStart; }
  
  setSelectionEnd(selectionEnd) { this.domElement.selectionEnd = selectionEnd; }
  
  setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }
  
  setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

  onChange(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
    }
    
    this.on('change', handler);
  }

  offChange(handler) {
    this.off('change', handler);
  }

  onScroll(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateScrollHandler.bind(this);
    }

    this.on('scroll', handler);
  }

  offScroll(handler) {
    this.off('scroll', handler);
  }

  onResize(resizeHandler) {}
  
  offResize(resizeHandler) {}

  static clone(element, changeHandler, scrollHandler) {
    return InputElement.clone(Textarea, element, changeHandler, scrollHandler);
  }

  static fromHTML(html, changeHandler, scrollHandler) {
    return InputElement.fromHTML(Textarea, html, changeHandler, scrollHandler);
  }

  static fromDOMElement(domElement, changeHandler, scrollHandler) {
    return InputElement.fromDOMElement(Textarea, domElement, changeHandler, scrollHandler);
  }

  static fromProperties(Class, properties, ) {
    const { onChange, onScroll } = properties,
          changeHandler = onChange, ///
          scrollHandler = onScroll; ///
    
    return InputElement.fromProperties(Textarea, properties, changeHandler, scrollHandler);
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

function defaultIntermediateChangeHandler(handler, event) {
  const value = this.getValue(),
        preventDefault = handler(value);

  return preventDefault;
}

function defaultIntermediateScrollHandler(handler, event) {
  const scrollTop = this.getScrollTop(),
        scrollLeft = this.getScrollLeft(),
        preventDefault = handler(scrollTop, scrollLeft);

  return preventDefault;
}
