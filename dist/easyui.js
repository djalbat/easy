(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easyui = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  Element: require('./lib/element'),
  Bounds: require('./lib/bounds'),
  Body: require('./lib/body'),
  Link: require('./lib/link'),
  Input: require('./lib/input'),
  Select: require('./lib/select'),
  Button: require('./lib/button'),
  Checkbox: require('./lib/checkbox')
};

},{"./lib/body":3,"./lib/bounds":4,"./lib/button":5,"./lib/checkbox":6,"./lib/element":7,"./lib/input":8,"./lib/link":9,"./lib/select":10}],2:[function(require,module,exports){
'use strict';

var inherits = function(target, source) {
  var targetPrototype = Object.getPrototypeOf(target);

  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop];
    } else {
      if (!targetPrototype[prop]) {
        targetPrototype[prop] = source[prop];
      }
    }
  }
};

module.exports = inherits;

},{}],3:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Body = function() {
  var selector = 'body';  ///

  inherits(this, new Element(selector));
};

Body.prototype = {
  clone: function() { return Body.clone(this.$element); },

  onClick: function(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  },

  onDoubleClick: function(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }
};

Body.fromHTML = function(html) {
  var $element = $(html),
      button = new Body($element);

  return button;
};

Body.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Body); };

module.exports = Body;

},{"../inherits":2,"./element":7}],4:[function(require,module,exports){
'use strict';

var Bounds = function(top, left, bottom, right) {
  this.top = top;
  this.left = left;
  this.bottom = bottom;
  this.right = right;
};

Bounds.prototype = {
  getTop: function() {
    return this.top;
  },

  getLeft: function() {
    return this.left;
  },

  getBottom: function() {
    return this.bottom;
  },

  getRight: function() {
    return this.right;
  },

  areOverlapping: function(bounds) {
    return this.top <= bounds.bottom
        && this.left <= bounds.right
        && this.bottom >= bounds.top
        && this.right >= bounds.left;
  }
};

module.exports = Bounds;

},{}],5:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Button = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Button.prototype = {
  clone: function() { return Button.clone(this.$element); },

  onClick: function(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  },

  onDoubleClick: function(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }
};

Button.fromHTML = function(html) {
  var $element = $(html),
      button = new Button($element);

  return button;
};

Button.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Button); };

module.exports = Button;

},{"../inherits":2,"./element":7}],6:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Checkbox = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Checkbox.prototype = {
  clone: function() { return Checkbox.clone(this.$element); },

  onClick: function(handler) {
    this.$element.click(function() {
      var checked = this.isChecked();

      handler(checked);
    }.bind(this))
  },

  check: function(checked) {
    if (arguments.length === 0) {
      checked = true;
    }

    if (checked) {
      this.$element.attr('checked', 'checked');
    } else {
      this.$element.removeAttr('checked');
    }
  },

  isChecked: function() {
    return this.$element.is(':checked');
  }
};

Checkbox.fromHTML = function(html) {
  var $element = $(html),
      checkbox = new Checkbox($element);

  return checkbox;
};

Checkbox.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Checkbox); };

module.exports = Checkbox;

},{"../inherits":2,"./element":7}],7:[function(require,module,exports){
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

},{"./bounds":4}],8:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Input = function(selectorOr$Element) {
  inherits(this, new Element(selectorOr$Element));
};

Input.prototype = {
  clone: function() { return Input.clone(this.$element); },

  getValue: function() {
    var value = this.$element.val();

    return value;
  },

  setValue: function(value) {
    this.$element.val(value);
  },

  select: function() {
    this.$element.select();
  }
};

Input.fromHTML = function(html) {
  var $element = $(html),
      input = new Input($element);

  return input;
};

Input.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Input); };

module.exports = Input;

},{"../inherits":2,"./element":7}],9:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Link = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Link.prototype = {
  clone: function() { return Link.clone(this.$element); },

  onClick: function(handler) {
    this.$element.click(function() {
      var href = this.$element.attr('href');

      handler(href);

      return false;
    }.bind(this))
  }
};

Link.fromHTML = function(html) {
  var $element = $(html),
      link = new Link($element);

  return  link;
};

Link.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Link); };

module.exports = Link;

},{"../inherits":2,"./element":7}],10:[function(require,module,exports){
'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Select = function(selectorOr$Element, changeHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (changeHandler) {
    this.onChange(changeHandler);
  }
};

Select.prototype = {
  clone: function() { return Select.clone(this.$element); },

  onChange: function(handler) {
    this.$element.change(function() {
      var selectedOptionValue = this.getSelectedOptionValue();

      handler(selectedOptionValue);
    }.bind(this));
  },

  getSelectedOptionValue: function() {
    var $selectedOption = this.$element.find(':selected'),
        selectedOptionValue = $selectedOption.val();

    return selectedOptionValue;
  },

  setSelectedOptionByValue: function(value) {
    this.$element.val(value);
  }
};

Select.fromHTML = function(html) {
  var $element = $(html),
      select = new Select($element);

  return  select;
};

Select.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Select); };

module.exports = Select;

},{"../inherits":2,"./element":7}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImluaGVyaXRzLmpzIiwibGliL2JvZHkuanMiLCJsaWIvYm91bmRzLmpzIiwibGliL2J1dHRvbi5qcyIsImxpYi9jaGVja2JveC5qcyIsImxpYi9lbGVtZW50LmpzIiwibGliL2lucHV0LmpzIiwibGliL2xpbmsuanMiLCJsaWIvc2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBCb3VuZHM6IHJlcXVpcmUoJy4vbGliL2JvdW5kcycpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9ib2R5JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2xpbmsnKSxcbiAgSW5wdXQ6IHJlcXVpcmUoJy4vbGliL2lucHV0JyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvYnV0dG9uJyksXG4gIENoZWNrYm94OiByZXF1aXJlKCcuL2xpYi9jaGVja2JveCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG5cbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGFyZ2V0UHJvdG90eXBlW3Byb3BdKSB7XG4gICAgICAgIHRhcmdldFByb3RvdHlwZVtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5oZXJpdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBCb2R5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxlY3RvciA9ICdib2R5JzsgIC8vL1xuXG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yKSk7XG59O1xuXG5Cb2R5LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gQm9keS5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgb25Eb3VibGVDbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59O1xuXG5Cb2R5LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgJGVsZW1lbnQgPSAkKGh0bWwpLFxuICAgICAgYnV0dG9uID0gbmV3IEJvZHkoJGVsZW1lbnQpO1xuXG4gIHJldHVybiBidXR0b247XG59O1xuXG5Cb2R5LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgQm9keSk7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJvdW5kcyA9IGZ1bmN0aW9uKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICB0aGlzLnRvcCA9IHRvcDtcbiAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIHRoaXMucmlnaHQgPSByaWdodDtcbn07XG5cbkJvdW5kcy5wcm90b3R5cGUgPSB7XG4gIGdldFRvcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9LFxuXG4gIGdldExlZnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH0sXG5cbiAgZ2V0Qm90dG9tOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH0sXG5cbiAgZ2V0UmlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9LFxuXG4gIGFyZU92ZXJsYXBwaW5nOiBmdW5jdGlvbihib3VuZHMpIHtcbiAgICByZXR1cm4gdGhpcy50b3AgPD0gYm91bmRzLmJvdHRvbVxuICAgICAgICAmJiB0aGlzLmxlZnQgPD0gYm91bmRzLnJpZ2h0XG4gICAgICAgICYmIHRoaXMuYm90dG9tID49IGJvdW5kcy50b3BcbiAgICAgICAgJiYgdGhpcy5yaWdodCA+PSBib3VuZHMubGVmdDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcblxuICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gIH1cbn07XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH0sXG5cbiAgb25Eb3VibGVDbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIHRoaXMuJGVsZW1lbnQuZGJsY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG59O1xuXG5CdXR0b24uZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBidXR0b24gPSBuZXcgQnV0dG9uKCRlbGVtZW50KTtcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuQnV0dG9uLmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmNsb25lKHNlbGVjdG9yT3IkRWxlbWVudCwgQnV0dG9uKTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBDaGVja2JveCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxufTtcblxuQ2hlY2tib3gucHJvdG90eXBlID0ge1xuICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoKTtcblxuICAgICAgaGFuZGxlcihjaGVja2VkKTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH0sXG5cbiAgY2hlY2s6IGZ1bmN0aW9uKGNoZWNrZWQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgIH1cbiAgfSxcblxuICBpc0NoZWNrZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuICB9XG59O1xuXG5DaGVja2JveC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGNoZWNrYm94ID0gbmV3IENoZWNrYm94KCRlbGVtZW50KTtcblxuICByZXR1cm4gY2hlY2tib3g7XG59O1xuXG5DaGVja2JveC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIENoZWNrYm94KTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyk7XG5cbnZhciBFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudCA9IHR5cGVvZiBzZWxlY3Rvck9yJEVsZW1lbnQgPT09ICdzdHJpbmcnID8gLy8vXG4gICAgICAgICAgICAgICAgICAgJChzZWxlY3Rvck9yJEVsZW1lbnQpIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JPciRFbGVtZW50OyAgLy8vXG5cbiAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xufTtcblxuRWxlbWVudC5wcm90b3R5cGUgPSB7XG4gIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2xvbmVkRWxlbWVudCA9IEVsZW1lbnQuY2xvbmUodGhpcy4kZWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH0sXG4gIGhpZGU6IGZ1bmN0aW9uKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfSxcbiAgZW5hYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9LFxuXG4gIGdldFdpZHRoOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQud2lkdGgoKTsgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH0sXG4gIHNldFdpZHRoOiBmdW5jdGlvbih3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfSxcbiAgc2V0SGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfSxcblxuICBnZXRCb3VuZHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfSxcblxuICBhZGRBdHRyaWJ1dGU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH0sXG4gIHJlbW92ZUF0dHJpYnV0ZTogZnVuY3Rpb24obmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH0sXG5cbiAgcHJlcGVuZEJlZm9yZTogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgYXBwZW5kQWZ0ZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgcHJlcGVuZDogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LnByZXBlbmQoZWxlbWVudC4kZWxlbWVudCk7IH0sXG4gIGFwcGVuZDogZnVuY3Rpb24oZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFwcGVuZChlbGVtZW50LiRlbGVtZW50KTsgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbigpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfSxcblxuICBoYXNDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH0sXG4gIGFkZENsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9LFxuICByZW1vdmVDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfSxcbiAgcmVtb3ZlQ2xhc3NlczogZnVuY3Rpb24oKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfSxcblxuICBodG1sOiBmdW5jdGlvbihodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfSxcblxuICBjc3M6IGZ1bmN0aW9uKGNzcykge1xuICAgIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGNzcztcblxuICAgICAgY3NzID0gdGhpcy4kZWxlbWVudC5jc3MocHJvcGVydHlOYW1lKTtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKTtcbiAgICB9XG4gIH0sXG5cbiAgb246IGZ1bmN0aW9uKGV2ZW50cywgaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7IH0sXG5cbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNldXAnLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH0sXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZG93bicsIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfSxcbiAgb25Nb3VzZU92ZXI6IGZ1bmN0aW9uKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdmVyJywgbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlT3V0OiBmdW5jdGlvbihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3V0JywgbW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9LFxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbn07XG5cbmZ1bmN0aW9uIG1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVg7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbiAgfTtcbn1cblxuRWxlbWVudC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyICRlbGVtZW50ID0gJChodG1sKSxcbiAgICAgIGVsZW1lbnQgPSBuZXcgRWxlbWVudCgkZWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5FbGVtZW50LmNsb25lID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBDbGFzcykge1xuICB2YXIgJGVsZW1lbnQgPSB0eXBlb2Ygc2VsZWN0b3JPciRFbGVtZW50ID09PSAnc3RyaW5nJyA/IC8vL1xuICAgICAgICAgICAgICAgICAgICQoc2VsZWN0b3JPciRFbGVtZW50KSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yT3IkRWxlbWVudDsgIC8vL1xuXG4gIENsYXNzID0gQ2xhc3MgfHwgRWxlbWVudDsgLy8vXG5cbiAgdmFyIGNsb25lZCRFbGVtZW50ID0gJGVsZW1lbnQuY2xvbmUoKSxcbiAgICAgIGNsb25lZEluc3RhbmNlID0gbmV3IENsYXNzKGNsb25lZCRFbGVtZW50KTtcblxuICByZXR1cm4gY2xvbmVkSW5zdGFuY2U7XG59O1xuXG5FbGVtZW50LmNoaWxkJEVsZW1lbnQgPSBmdW5jdGlvbihwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQsIGNoaWxkU2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudCRFbGVtZW50ID0gdHlwZW9mIHBhcmVudFNlbGVjdG9yT3IkRWxlbWVudCA9PT0gJ3N0cmluZycgPyAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAkKHBhcmVudFNlbGVjdG9yT3IkRWxlbWVudCkgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQ7ICAvLy9cblxuICB2YXIgY2hpbGQkRWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG5cbiAgcmV0dXJuIGNoaWxkJEVsZW1lbnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICBpbmhlcml0cyh0aGlzLCBuZXcgRWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpKTtcbn07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcy4kZWxlbWVudCk7IH0sXG5cbiAgZ2V0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgc2V0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9LFxuXG4gIHNlbGVjdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWxlbWVudC5zZWxlY3QoKTtcbiAgfVxufTtcblxuSW5wdXQuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBpbnB1dCA9IG5ldyBJbnB1dCgkZWxlbWVudCk7XG5cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuSW5wdXQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBJbnB1dCk7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL2luaGVyaXRzJyk7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbnZhciBMaW5rID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgaW5oZXJpdHModGhpcywgbmV3IEVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KSk7XG5cbiAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG59O1xuXG5MaW5rLnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLiRlbGVtZW50KTsgfSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocmVmID0gdGhpcy4kZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cbiAgICAgIGhhbmRsZXIoaHJlZik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cbn07XG5cbkxpbmsuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBsaW5rID0gbmV3IExpbmsoJGVsZW1lbnQpO1xuXG4gIHJldHVybiAgbGluaztcbn07XG5cbkxpbmsuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoc2VsZWN0b3JPciRFbGVtZW50LCBMaW5rKTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi9pbmhlcml0cycpO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG52YXIgU2VsZWN0ID0gZnVuY3Rpb24oc2VsZWN0b3JPciRFbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gIGluaGVyaXRzKHRoaXMsIG5ldyBFbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkpO1xuXG4gIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufTtcblxuU2VsZWN0LnByb3RvdHlwZSA9IHtcbiAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMuJGVsZW1lbnQpOyB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpO1xuXG4gICAgICBoYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRzZWxlY3RlZE9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJyksXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSAkc2VsZWN0ZWRPcHRpb24udmFsKCk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfSxcblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy4kZWxlbWVudC52YWwodmFsdWUpO1xuICB9XG59O1xuXG5TZWxlY3QuZnJvbUhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoaHRtbCksXG4gICAgICBzZWxlY3QgPSBuZXcgU2VsZWN0KCRlbGVtZW50KTtcblxuICByZXR1cm4gIHNlbGVjdDtcbn07XG5cblNlbGVjdC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShzZWxlY3Rvck9yJEVsZW1lbnQsIFNlbGVjdCk7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuIl19
