'use strict';

var Element = require('./element'),
    InputElement = require('./inputElement');

class Button extends InputElement {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Button.clone(this, clickHandler); }

  onClick(clickHandler, button = Element.LEFT_MOUSE_BUTTON) {
    this.$element.click(function(event) {
      switch (button) {
        case Element.LEFT_MOUSE_BUTTON :
          if (event.button === 0) { ///
            clickHandler();
          }
          break;

        case Element.MIDDLE_MOUSE_BUTTON :
          if (event.button === 1) { ///
            clickHandler();
          }
          break;
        }

      return false;
    });
  }

  onDoubleClick(doubleClickHandler) {
    this.$element.dblclick(function() {
      doubleClickHandler();

      return false;
    })
  }

  static clone(selectorOrElement, clickHandler) {
    return InputElement.clone(Button, selectorOrElement, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Button, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return InputElement.fromDOMElement(Button, domElement, clickHandler);
  }
}

module.exports = Button;
