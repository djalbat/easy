'use strict';

var InputElement = require('./inputElement');

class TextArea extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone() { return TextArea.clone(this); }

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
    this.on('input', function() { ///
      var value = this.getValue();

      changeHandler(value);
    }.bind(this), namespace);
  }

  onScroll(handler, namespace) {
    this.$element.scroll(function() {
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();

      handler(scrollTop, scrollLeft);
    }.bind(this), namespace);
  }

  offChange(namespace) {
    this.off('input', namespace); ///
  }
  
  offScroll(namespace) {
    this.off('scroll', namespace)
  }

  onResize(resizeHandler) {}
  offResize(resizeHandler) {}

  static clone(selectorOrElement) {
    return InputElement.clone(TextArea, selectorOrElement);
  }

  static fromHTML(html) {
    return InputElement.fromHTML(TextArea, html);
  }

  static fromDOMElement(domElement) {
    return InputElement.fromDOMElement(TextArea, domElement);
  }
}

module.exports = TextArea;
