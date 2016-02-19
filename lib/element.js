'use strict';

var Bounds = require('./bounds');

var Element = function(selectorOr$Element) {
  var $element = typeof selectorOr$Element === 'string' ? ///
                   $(selectorOr$Element) :  ///
                     selectorOr$Element;  ///

  this.$element = $element;
};

Element.prototype = {
  clone: function() {
    var clonedElement = Element.clone(this.$element);

    return clonedElement;
  },

  show: function() { this.$element.show(); },
  hide: function() { this.$element.hide(); },
  enable: function() { this.$element.removeAttr('disabled'); },
  disable: function() { this.$element.attr('disabled', true); },

  getWidth: function() { return this.$element.width(); },
  getHeight: function() { return this.$element.height(); },
  setWidth: function(width) { this.$element.width(width); },
  setHeight: function(height) { this.$element.height(height); },

  getBounds: function() {
    var $offset = this.$element.offset(),
        top = $offset.top,  ///
        left = $offset.left,  ///
        width = this.getWidth(),
        height = this.getHeight(),
        bottom = top + height,
        right = left + width,
        bounds = new Bounds(top, left, bottom, right);

    return bounds;
  },

  addAttribute: function(name, value) { this.$element.attr(name, value); },
  removeAttribute: function(name) { this.$element.removeAttr(name); },

  prependBefore: function(element) { this.$element.before(element.$element); },
  appendAfter: function(element) { this.$element.after(element.$element); },
  prepend: function(element) { this.$element.prepend(element.$element); },
  append: function(element) { this.$element.append(element.$element); },
  remove: function() { this.$element.remove(); },

  hasClass: function(className) { return this.$element.hasClass(className); },
  addClass: function(className) { this.$element.addClass(className); },
  removeClass: function(className) { this.$element.removeClass(className); },
  removeClasses: function() { this.$element.removeClass(); },

  html: function(html) {
    if (arguments.length === 1) {
      this.$element.html(html)
    } else {
      html = this.$element.html();

      return html;
    }
  },

  css: function(css) {
    if (typeof css === 'string') {
      var propertyName = css;

      css = this.$element.css(propertyName);

      return css;
    } else {
      this.$element.css(css);
    }
  },

  on: function(events, handler) { this.$element.on(events, handler); },

  onMouseUp: function(handler) { this.$element.on('mouseup', mouseEventHandler(handler)); },
  onMouseDown: function(handler) { this.$element.on('mousedown', mouseEventHandler(handler)); },
  onMouseOver: function(handler) { this.$element.on('mouseover', mouseEventHandler(handler)); },
  onMouseOut: function(handler) { this.$element.on('mouseout', mouseEventHandler(handler)); },
  onMouseMove: function(handler) { this.$element.on('mousemove', mouseEventHandler(handler)); }
};

function mouseEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX; ///

    handler(mouseTop, mouseLeft);
  };
}

Element.fromHTML = function(html) {
  var $element = $(html),
      element = new Element($element);

  return element;
};

Element.clone = function(selectorOr$Element, Class) {
  var $element = typeof selectorOr$Element === 'string' ? ///
                   $(selectorOr$Element) :  ///
                     selectorOr$Element;  ///

  Class = Class || Element; ///

  var cloned$Element = $element.clone(),
      clonedInstance = new Class(cloned$Element);

  return clonedInstance;
};

Element.child$Element = function(parentSelectorOr$Element, childSelector) {
  var parent$Element = typeof parentSelectorOr$Element === 'string' ? ///
                         $(parentSelectorOr$Element) :  ///
                           parentSelectorOr$Element;  ///

  var child$Element = parent$Element.find(childSelector);

  return child$Element;
};

module.exports = Element;
