'use strict';

var InputElement = require('./inputElement');

class TextArea extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return TextArea.clone(this, changeHandler); }

  getValue() { return this.$element.val(); }
  getSelectionStart() { return this.$element[0].selectionStart; }
  getSelectionEnd() { return this.$element[0].selectionEnd; }
  getScrollTop() { return this.$element.scrollTop(); }
  getScrollLeft() { return this.$element.scrollLeft(); }

  setValue(value) { this.$element.val(value); }
  setScrollTop(scrollTop) { this.$element.scrollTop(scrollTop); }
  setScrollLeft(scrollLeft) { this.$element.scrollLeft(scrollLeft); }

  select() { this.$element.select(); }

  onChange(changeHandler, namespace) {
    this.on('change', function() {
      var value = this.getValue();

      changeHandler(value);
    }.bind(this), namespace);
  }

  onScroll(handler, namespace) {
    this.on('scroll', function() {
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();

      handler(scrollTop, scrollLeft);
    }.bind(this), namespace);
  }

  offChange(namespace) {
    this.off('change', namespace);
  }
  
  offScroll(namespace) {
    this.off('scroll', namespace)
  }

  onResize(resizeHandler) {}
  offResize(resizeHandler) {}

  static clone(selectorOrElement, changeHandler) {
    return InputElement.clone(TextArea, selectorOrElement, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(TextArea, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(TextArea, domElement, changeHandler);
  }
}

module.exports = TextArea;
