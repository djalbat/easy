'use strict';

const InputElement = require('../inputElement');

class TextArea extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return TextArea.clone(this, changeHandler); }

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
    const preventDefault = undefined; ///

    this.on('change', handler, preventDefault, intermediateChangeHandler.bind(this));
  }

  offChange(handler) {
    this.off('change', handler);
  }

  onScroll(handler) {
    const preventDefault = undefined; ///

    this.on('scroll', handler, preventDefault, intermediateScrollHandler.bind(this));
  }

  offScroll(handler) {
    this.off('scroll', handler);
  }

  onResize(resizeHandler) {}
  
  offResize(resizeHandler) {}

  static clone(element, changeHandler) {
    return InputElement.clone(TextArea, element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(TextArea, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(TextArea, domElement, changeHandler);
  }

  static fromProperties(properties) {
    const html = '<textarea></textarea>',
          { onChange } = properties,
          changeHandler = onChange; ///

    return TextArea.fromHTML(html, changeHandler);
  }
}

module.exports = TextArea;

function intermediateChangeHandler(handler, event) {
  const value = this.getValue();

  handler(value);
}

function intermediateScrollHandler(handler, event) {
  const scrollTop = this.getScrollTop(),
        scrollLeft = this.getScrollLeft();

  handler(scrollTop, scrollLeft);
}
