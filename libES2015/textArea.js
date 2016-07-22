'use strict';

require('jquery-textrange');

var InputElement = require('./inputElement');

class TextArea extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone() { return TextArea.clone(this); }

  onChange(handler) {
    this.$element.keydown(function() {
      setTimeout(function() {
        var value = this.getValue();

        handler(value);
      }.bind(this));
    }.bind(this));
  }

  onScroll(handler) {
    this.$element.scroll(function() {
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();

      handler(scrollTop, scrollLeft);
    }.bind(this));
  }

  getScrollTop() { return this.$element.scrollTop(); }
  getScrollLeft() { return this.$element.scrollLeft(); }

  getValue() {
    var value = this.$element.val();

    return value;
  }

  getSelectionStart() {
    var textRange = this.$element.textrange('get'),
        selectionStart = textRange['start'];  ///

    return selectionStart;
  }

  getSelectionEnd() {
    var textRange = this.$element.textrange('get'),
        selectionEnd = textRange['end'];  ///

    return selectionEnd;
  }

  setValue(value) {
    this.$element.val(value);
  }

  setScrollTop(scrollTop) { this.$element.scrollTop(scrollTop); }
  setScrollLeft(scrollLeft) { this.$element.scrollLeft(scrollLeft); }

  select() {
    this.$element.select();
  }

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
