(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

module.exports = {
  window: require('./lib/window'),
  document: require('./lib/document'),
  Div: require('./lib/element/div'),
  Span: require('./lib/element/span'),
  Body: require('./lib/element/body'),
  Link: require('./lib/element/link'),
  Select: require('./lib/element/select'),
  Button: require('./lib/element/button'),
  Checkbox: require('./lib/element/checkbox'),
  Element: require('./lib/element'),
  TextElement: require('./lib/textElement'),
  Input: require('./lib/inputElement/input'),
  Textarea: require('./lib/inputElement/textarea'),
  InputElement: require('./lib/inputElement'),
  Bounds: require('./lib/miscellaneous/bounds'),
  Offset: require('./lib/miscellaneous/offset'),
  React: require('./lib/react')
};

},{"./lib/document":3,"./lib/element":4,"./lib/element/body":5,"./lib/element/button":6,"./lib/element/checkbox":7,"./lib/element/div":8,"./lib/element/link":9,"./lib/element/select":10,"./lib/element/span":11,"./lib/inputElement":13,"./lib/inputElement/input":14,"./lib/inputElement/textarea":15,"./lib/miscellaneous/bounds":17,"./lib/miscellaneous/offset":18,"./lib/react":27,"./lib/textElement":28,"./lib/window":34}],2:[function(require,module,exports){
"use strict";

var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
module.exports = {
  SVG_NAMESPACE_URI: SVG_NAMESPACE_URI
};

},{}],3:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyMixins = require("./mixins/key"),
    eventMixins = require("./mixins/event"),
    clickMixins = require("./mixins/click"),
    mouseMixins = require("./mixins/mouse");

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document; ///
};

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, mouseMixins);
module.exports = typeof document === "undefined" ? undefined : new Document(); ///

},{"./mixins/click":19,"./mixins/event":20,"./mixins/key":22,"./mixins/mouse":23}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Offset = require("./miscellaneous/offset"),
    Bounds = require("./miscellaneous/bounds"),
    constants = require("./constants"),
    jsxMixins = require("./mixins/jsx"),
    keyMixins = require("./mixins/key"),
    stateMixins = require("./mixins/state"),
    mouseMixins = require("./mixins/mouse"),
    eventMixins = require("./mixins/event"),
    clickMixins = require("./mixins/click"),
    scrollMixins = require("./mixins/scroll"),
    resizeMixins = require("./mixins/resize"),
    domUtilities = require("./utilities/dom"),
    nameUtilities = require("./utilities/name"),
    arrayUtilities = require("./utilities/array"),
    objectUtilities = require("./utilities/object");

var combine = objectUtilities.combine,
    isSVGTagName = nameUtilities.isSVGTagName,
    first = arrayUtilities.first,
    augment = arrayUtilities.augment,
    SVG_NAMESPACE_URI = constants.SVG_NAMESPACE_URI,
    domNodeMatchesSelector = domUtilities.domNodeMatchesSelector,
    domElementFromSelector = domUtilities.domElementFromSelector,
    elementsFromDOMElements = domUtilities.elementsFromDOMElements,
    filterDOMNodesBySelector = domUtilities.filterDOMNodesBySelector,
    descendantDOMNodesFromDOMNode = domUtilities.descendantDOMNodesFromDOMNode;

var Element = /*#__PURE__*/function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);
    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
    key: "clone",
    value: function clone() {
      return Element.clone(this);
    }
  }, {
    key: "getDOMElement",
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);
      return bounds;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
      return width;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      width = "".concat(width, "px"); ///

      this.style("width", width);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
      return height;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      height = "".concat(height, "px"); ///

      this.style("height", height);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: "clearAttribute",
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: "setClass",
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: "clearClasses",
    value: function clearClasses() {
      this.domElement.className = "";
    }
  }, {
    key: "prependTo",
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: "appendTo",
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: "addTo",
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: "removeFrom",
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: "prepend",
    value: function prepend(element) {
      var domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;
      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: "append",
    value: function append(element) {
      var domElement = element.domElement;
      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: "add",
    value: function add(element) {
      this.append(element);
    }
  }, {
    key: "remove",
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;
        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "block";
      this.display(displayStyle);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.style("display", "none");
    }
  }, {
    key: "display",
    value: function display(_display) {
      this.style("display", _display);
    }
  }, {
    key: "enable",
    value: function enable() {
      this.clearAttribute("disabled");
    }
  }, {
    key: "disable",
    value: function disable() {
      this.setAttribute("disabled", "disabled");
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      var disabled = this.isDisabled(),
          enabled = !disabled;
      return enabled;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var disabled = this.hasAttribute("disabled");
      return disabled;
    }
  }, {
    key: "isDisplayed",
    value: function isDisplayed() {
      var display = this.style("display"),
          displayed = display !== "none";
      return displayed;
    }
  }, {
    key: "isShowing",
    value: function isShowing() {
      var displayed = this.isDisplayed(),
          showing = displayed; ///

      return showing;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      var displayed = this.isDisplayed(),
          hidden = !displayed;
      return hidden;
    }
  }, {
    key: "style",
    value: function style(name, value) {
      if (value !== undefined) {
        this.domElement.style[name] = value;
      } else {
        var style = this.domElement.style[name];
        return style;
      }
    }
  }, {
    key: "html",
    value: function html(_html) {
      if (_html === undefined) {
        var innerHTML = this.domElement.innerHTML;
        _html = innerHTML; ///

        return _html;
      } else {
        var _innerHTML = _html; ///

        this.domElement.innerHTML = _innerHTML;
      }
    }
  }, {
    key: "css",
    value: function css(_css) {
      var _this = this;

      if (_css === undefined) {
        var computedStyle = getComputedStyle(this.domElement),
            css = {};

        for (var index = 0; index < computedStyle.length; index++) {
          var name = computedStyle[0],
              ///
          value = computedStyle.getPropertyValue(name); ///

          css[name] = value;
        }

        return css;
      } else if (typeof _css === "string") {
        var _name = _css; ///

        var _computedStyle = getComputedStyle(this.domElement),
            _value = _computedStyle.getPropertyValue(_name); ///


        _css = _value; ///

        return _css;
      } else {
        var names = Object.keys(_css); ///

        names.forEach(function (name) {
          var value = _css[name];

          _this.style(name, value);
        });
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.domElement.blur();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.domElement.focus();
    }
  }, {
    key: "hasFocus",
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: "getDescendantElements",
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var domNode = this.domElement,
          ///
      descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);
      return descendantElements;
    }
  }, {
    key: "getChildElements",
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);
      return childElements;
    }
  }, {
    key: "getParentElement",
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;

      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [parentDOMElement],
              parentElements = elementsFromDOMElements(parentDOMElements),
              firstParentElement = first(parentElements);
          parentElement = firstParentElement || null;
        }
      }

      return parentElement;
    }
  }, {
    key: "getAscendantElements",
    value: function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;
      var ascendantDOMElement = parentDOMElement; ///

      while (ascendantDOMElement !== null) {
        if (ascendantDOMElement.matches(selector)) {
          ascendantDOMElements.push(ascendantDOMElement);
        }

        ascendantDOMElement = ascendantDOMElement.parentElement;
      }

      var ascendantElements = elementsFromDOMElements(ascendantDOMElements);
      return ascendantElements;
    }
  }, {
    key: "getPreviousSiblingElement",
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }

      return previousSiblingElement;
    }
  }, {
    key: "getNextSiblingElement",
    value: function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;

      if (nextSiblingDOMNode !== null && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: "clone",
    value: function clone(Class, element) {
      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement("div");
      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var tagName = Class.tagName,
          element = _fromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }, {
    key: "fromTagName",
    value: function fromTagName(tagName, properties) {
      for (var _len5 = arguments.length, remainingArguments = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
      }

      var element = _fromTagName.apply(void 0, [Element, tagName].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///


      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixins);
Object.assign(Element.prototype, keyMixins);
Object.assign(Element.prototype, stateMixins);
Object.assign(Element.prototype, mouseMixins);
Object.assign(Element.prototype, eventMixins);
Object.assign(Element.prototype, clickMixins);
Object.assign(Element.prototype, scrollMixins);
Object.assign(Element.prototype, resizeMixins);
Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  RIGHT_MOUSE_BUTTON: 2,
  MIDDLE_MOUSE_BUTTON: 1
});
module.exports = Element;

function _fromTagName(Class, tagName) {
  var domElement = isSVGTagName(tagName) ? document.createElementNS(SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len6 = arguments.length, remainingArguments = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    remainingArguments[_key6 - 2] = arguments[_key6];
  }

  return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
}

function _fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len7 = arguments.length, remainingArguments = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    remainingArguments[_key7 - 2] = arguments[_key7];
  }

  remainingArguments.unshift(domElement);
  remainingArguments.unshift(null);
  return new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class].concat(remainingArguments)))();
}

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Class.hasOwnProperty("defaultProperties")) {
    combine(defaultProperties, Class.defaultProperties);
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class) {
  var ignoredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Class.hasOwnProperty("ignoredProperties")) {
    augment(ignoredProperties, Class.ignoredProperties, function (ignoredProperty) {
      return !ignoredProperties.includes(ignoredProperty);
    });
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}

},{"./constants":2,"./miscellaneous/bounds":17,"./miscellaneous/offset":18,"./mixins/click":19,"./mixins/event":20,"./mixins/jsx":21,"./mixins/key":22,"./mixins/mouse":23,"./mixins/resize":24,"./mixins/scroll":25,"./mixins/state":26,"./utilities/array":29,"./utilities/dom":30,"./utilities/name":32,"./utilities/object":33}],5:[function(require,module,exports){
"use strict";

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Body = /*#__PURE__*/function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, selector));
  }

  _createClass(Body, [{
    key: "clone",
    value: function clone() {
      return Body.clone(this);
    }
  }], [{
    key: "clone",
    value: function clone(element) {
      return _element["default"].clone(Body, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return _element["default"].fromHTML(Body, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return _element["default"].fromDOMElement(Body, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _element["default"].fromProperties(Body, properties);
    }
  }]);

  return Body;
}(_element["default"]);

Object.assign(Body, {
  tagName: "body"
});
module.exports = Body;

},{"../element":4}],6:[function(require,module,exports){
"use strict";

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Button = /*#__PURE__*/function (_Element) {
  _inherits(Button, _Element);

  function Button(selector, clickHandler) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Button, [{
    key: "clone",
    value: function clone(clickHandler) {
      return Button.clone(this, clickHandler);
    }
  }, {
    key: "onClick",
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;

      _get(_getPrototypeOf(Button.prototype), "onClick", this).call(this, clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: "offClick",
    value: function offClick(clickHandler, object) {
      _get(_getPrototypeOf(Button.prototype), "offClick", this).call(this, clickHandler, object);
    }
  }], [{
    key: "clone",
    value: function clone(element, clickHandler) {
      return _element["default"].clone(Button, element, clickHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, clickHandler) {
      return _element["default"].fromHTML(Button, html, clickHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, clickHandler) {
      return _element["default"].fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          button = _element["default"].fromProperties(Button, properties, clickHandler);

      return button;
    }
  }]);

  return Button;
}(_element["default"]);

Object.assign(Button, {
  tagName: "button",
  ignoredProperties: ["onClick"]
});
module.exports = Button;

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var button = event.button,
      mouseButton = button; ///

  clickHandler.call(element, mouseButton, event, element);
}

},{"../element":4}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

var Checkbox = /*#__PURE__*/function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selector, changeHandler, checked) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }

    return _this;
  }

  _createClass(Checkbox, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: "onChange",
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;
      this.on("click", changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, object) {
      this.off("click", changeHandler, object); ///
    }
  }, {
    key: "check",
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var domElement = this.getDOMElement();
      domElement.checked = checked;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;
      return checked;
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return Element.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);
      return checkbox;
    }
  }]);

  return Checkbox;
}(Element);

Object.assign(Checkbox, {
  tagName: "input",
  ignoredProperties: ["onChange", "checked"],
  defaultProperties: {
    type: "checkbox"
  }
});
module.exports = Checkbox;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var checkbox = element,
      ///
  checked = checkbox.isChecked();
  changeHandler.call(element, checked, event, element);
}

},{"../element":4}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

var Div = /*#__PURE__*/function (_Element) {
  _inherits(Div, _Element);

  function Div(selector) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, _getPrototypeOf(Div).call(this, selector));
  }

  _createClass(Div, [{
    key: "clone",
    value: function clone() {
      return Div.clone(this);
    }
  }], [{
    key: "clone",
    value: function clone(element) {
      return Element.clone(Div, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return Element.fromHTML(Div, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Div, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Element.fromProperties(Div, properties);
    }
  }]);

  return Div;
}(Element);

Object.assign(Div, {
  tagName: "div"
});
module.exports = Div;

},{"../element":4}],9:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

var Link = /*#__PURE__*/function (_Element) {
  _inherits(Link, _Element);

  function Link(selector, clickHandler) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Link, [{
    key: "clone",
    value: function clone(clickHandler) {
      return Link.clone(this, clickHandler);
    }
  }, {
    key: "onClick",
    value: function onClick(clickHandler, object) {
      var intermediateClickHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateClickHandler;
      this.on("click", clickHandler, object, intermediateClickHandler);
    }
  }, {
    key: "offClick",
    value: function offClick(clickHandler, object) {
      this.off("click", clickHandler, object);
    }
  }], [{
    key: "clone",
    value: function clone(element, clickHandler) {
      return Element.clone(Link, element, clickHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, clickHandler) {
      return Element.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          link = Element.fromProperties(Link, properties, clickHandler);
      return link;
    }
  }]);

  return Link;
}(Element);

Object.assign(Link, {
  tagName: "a",
  ignoredProperties: ["onClick"]
});
module.exports = Link;

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var link = element,
      ///
  hrefAttribute = link.getAttribute("href"),
      href = hrefAttribute; ///

  clickHandler.call(element, href, event, element);
}

},{"../element":4}],10:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

var Select = /*#__PURE__*/function (_Element) {
  _inherits(Select, _Element);

  function Select(selector, changeHandler) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Select, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: "onChange",
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;
      this.on("change", changeHandler, object, intermediateChangeHandler);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, object) {
      this.off("change", changeHandler, object);
    }
  }, {
    key: "getSelectedOptionValue",
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: "setSelectedOptionByValue",
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue,
          ///
      domElement = this.getDOMElement();
      domElement.value = value;
    }
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return Element.clone(Select, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          select = Element.fromProperties(Select, properties, changeHandler);
      return select;
    }
  }]);

  return Select;
}(Element);

Object.assign(Select, {
  tagName: "select",
  ignoredProperties: ["onChange"]
});
module.exports = Select;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var select = element,
      ///
  selectedOptionValue = select.getSelectedOptionValue();
  changeHandler.call(element, selectedOptionValue, event, element);
}

},{"../element":4}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

var Span = /*#__PURE__*/function (_Element) {
  _inherits(Span, _Element);

  function Span() {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, _getPrototypeOf(Span).apply(this, arguments));
  }

  _createClass(Span, [{
    key: "clone",
    value: function clone() {
      return Span.clone(this);
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }], [{
    key: "clone",
    value: function clone(element) {
      return Element.clone(Span, element);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html) {
      return Element.fromHTML(Span, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Span, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Element.fromProperties(properties);
    }
  }]);

  return Span;
}(Element);

Object.assign(Span, {
  tagName: "span"
});
module.exports = Span;

},{"../element":4}],12:[function(require,module,exports){
"use strict";

require("./juxtapose");

var _index = require("../index");

///
var body = new _index.Body();
body.prepend(React.createElement("h1", null, "Easy"));

},{"../index":1,"./juxtapose":16}],13:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("./element");

var InputElement = /*#__PURE__*/function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector, changeHandler) {
    var _this;

    _classCallCheck(this, InputElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputElement).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(InputElement, [{
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }, {
    key: "onChange",
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;
      this.on("change", changeHandler, intermediateChangeHandler);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler) {
      this.off("change", changeHandler);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: "getSelectionStart",
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: "getSelectionEnd",
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return this.domElement.readOnly;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: "setSelectionStart",
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: "setSelectionEnd",
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: "setReadOnly",
    value: function setReadOnly(readOnly) {
      this.domElement.readOnly = readOnly;
    }
  }, {
    key: "select",
    value: function select() {
      this.domElement.select();
    }
  }], [{
    key: "clone",
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.clone.apply(Element, [Class, element].concat(remainingArguments));
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement.apply(Element, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      return Element.fromProperties.apply(Element, [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(Element);

Object.assign(InputElement, {
  ignoredProperties: ["onChange"]
});
module.exports = InputElement;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var inputElement = element,
      ///
  value = inputElement.getValue();
  changeHandler.call(element, value, event, element);
}

},{"./element":4}],14:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputElement = require("../inputElement");

var Input = /*#__PURE__*/function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
    }
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return InputElement.clone(Input, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(Input, properties);
    }
  }]);

  return Input;
}(InputElement);

Object.assign(Input, {
  tagName: "input"
});
module.exports = Input;

},{"../inputElement":13}],15:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputElement = require("../inputElement");

var Textarea = /*#__PURE__*/function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Textarea.clone(this, changeHandler);
    }
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return InputElement.clone(Textarea, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(Textarea, properties);
    }
  }]);

  return Textarea;
}(InputElement);

Object.assign(Textarea, {
  tagName: "textarea"
});
module.exports = Textarea;

},{"../inputElement":13}],16:[function(require,module,exports){
"use strict";

var _index = require("../index");

Object.defineProperty(window, "React", {
  get: function get() {
    return _index.React;
  }
});

},{"../index":1}],17:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bounds = /*#__PURE__*/function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: "getTop",
    value: function getTop() {
      return this.top;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.right;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var width = this.right - this.left;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var height = this.bottom - this.top;
      return height;
    }
  }, {
    key: "setTop",
    value: function setTop(top) {
      this.top = top;
    }
  }, {
    key: "setLeft",
    value: function setLeft(left) {
      this.left = left;
    }
  }, {
    key: "setBottom",
    value: function setBottom(bottom) {
      this.bottom = bottom;
    }
  }, {
    key: "setRight",
    value: function setRight(right) {
      this.right = right;
    }
  }, {
    key: "shift",
    value: function shift(horizontalOffset, verticalOffset) {
      this.top += verticalOffset;
      this.left += horizontalOffset;
      this.bottom += verticalOffset;
      this.right += horizontalOffset;
    }
  }, {
    key: "isOverlappingMouse",
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: "areOverlapping",
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: "fromBoundingClientRect",
    value: function fromBoundingClientRect(boundingClientRect) {
      var windowScrollTop = window.pageYOffset,
          ///
      windowScrollLeft = window.pageXOffset,
          ///
      top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          right = boundingClientRect.right + windowScrollLeft,
          bounds = new Bounds(top, left, bottom, right);
      return bounds;
    }
  }, {
    key: "fromTopLeftWidthAndHeight",
    value: function fromTopLeftWidthAndHeight(top, left, width, height) {
      var bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, bottom, right);
      return bounds;
    }
  }]);

  return Bounds;
}();

module.exports = Bounds;

},{}],18:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Offset = /*#__PURE__*/function () {
  function Offset(top, left) {
    _classCallCheck(this, Offset);

    this.top = top;
    this.left = left;
  }

  _createClass(Offset, [{
    key: "getTop",
    value: function getTop() {
      return this.top;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.left;
    }
  }]);

  return Offset;
}();

module.exports = Offset;

},{}],19:[function(require,module,exports){
"use strict";

function onClick(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("click", handler, element, intermediateHandler);
}

function offClick(handler, element) {
  this.off("click", handler, element);
}

module.exports = {
  onClick: onClick,
  offClick: offClick
};

function defaultIntermediateHandler(handler, event, element) {
  var pageY = event.pageY,
      pageX = event.pageX,
      button = event.button,
      mouseTop = pageY,
      mouseLeft = pageX,
      mouseButton = button; ///

  handler.call(element, mouseTop, mouseLeft, mouseButton, event, element);
}

},{}],20:[function(require,module,exports){
"use strict";

function on(eventTypes, handler) {
  var _this = this;

  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
  var intermediateHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach(function (eventType) {
    var eventListener = _this.addEventListener(eventType, handler, element, intermediateHandler);

    _this.domElement.addEventListener(eventType, eventListener);
  });
}

function off(eventTypes, handler) {
  var _this2 = this;

  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach(function (eventType) {
    var eventListener = _this2.removeEventListener(eventType, handler, element);

    _this2.domElement.removeEventListener(eventType, eventListener);
  });
}

module.exports = {
  on: on,
  off: off,
  addEventListener: addEventListener,
  removeEventListener: removeEventListener
};

function addEventListener(eventType, handler, element, intermediateHandler) {
  if (!this.hasOwnProperty("eventListeners")) {
    this.eventListeners = [];
  }

  var eventListeners = this.eventListeners,
      eventListener = createEventListener(eventType, handler, element, intermediateHandler);
  eventListeners.push(eventListener);
  return eventListener;
}

function removeEventListener(eventType, handler, element) {
  var eventListeners = this.eventListeners,
      eventListener = findEventListener(eventListeners, eventType, handler, element),
      index = eventListeners.indexOf(eventListener),
      start = index,
      ///
  deleteCount = 1;
  eventListeners.splice(start, deleteCount);

  if (eventListeners.length === 0) {
    delete this.eventListeners;
  }

  return eventListener;
}

function createEventListener(eventType, handler, element, intermediateHandler) {
  var eventListener;

  if (intermediateHandler === null) {
    eventListener = function eventListener(event) {
      handler.call(element, event, element);
    };
  } else {
    eventListener = function eventListener(event) {
      intermediateHandler(handler, event, element);
    };
  }

  Object.assign(eventListener, {
    eventType: eventType,
    handler: handler,
    element: element
  });
  return eventListener;
}

function findEventListener(eventListeners, eventType, handler, element) {
  var eventListener = eventListeners.find(function (eventListener) {
    if (eventListener.eventType === eventType && eventListener.element === element && eventListener.handler === handler) {
      return true;
    }
  });
  return eventListener;
}

},{}],21:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var constants = require("../constants"),
    nameUtilities = require("../utilities/name"),
    arrayUtilities = require("../utilities/array"),
    objectUtilities = require("../utilities/object"),
    elementsUtilities = require("../utilities/elements");

var combine = objectUtilities.combine,
    prune = objectUtilities.prune,
    first = arrayUtilities.first,
    guarantee = arrayUtilities.guarantee,
    SVG_NAMESPACE_URI = constants.SVG_NAMESPACE_URI,
    isHTMLAttributeName = nameUtilities.isHTMLAttributeName,
    isSVGAttributeName = nameUtilities.isSVGAttributeName,
    removeFalseyElements = elementsUtilities.removeFalseyElements,
    replaceStringsWithTextElements = elementsUtilities.replaceStringsWithTextElements;

function applyProperties() {
  var _this = this;

  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProperties = arguments.length > 1 ? arguments[1] : undefined;
  var ignoredProperties = arguments.length > 2 ? arguments[2] : undefined;
  combine(properties, defaultProperties);
  var childElements = childElementsFromElementAndProperties(this, properties) || properties.childElements; ///

  prune(properties, ignoredProperties);
  var svg = this.domElement.namespaceURI === SVG_NAMESPACE_URI,
      ///
  names = Object.keys(properties); ///

  names.forEach(function (name) {
    var value = properties[name];

    if (false) {///
    } else if (isHandlerName(name)) {
      addHandler(_this, name, value);
    } else if (isAttributeName(name, svg)) {
      addAttribute(_this, name, value);
    } else {
      if (!_this.hasOwnProperty("properties")) {
        var _properties = {};
        Object.assign(_this, {
          properties: _properties
        });
      }

      _this.properties[name] = value;
    }
  });
  var context = {};
  childElements.forEach(function (childElement) {
    updateContext(childElement, context);
    childElement.addTo(_this);
  });
  Object.assign(this, {
    context: context
  });
}

function getProperties() {
  return this.properties;
}

function getContext() {
  return this.context;
}

function assignContext(names, thenDelete) {
  var _this2 = this;

  var argumentsLength = arguments.length;

  if (argumentsLength === 1) {
    var firstArgument = first(arguments);

    if (typeof firstArgument === "boolean") {
      names = Object.keys(this.context);
      thenDelete = firstArgument;
    } else {
      thenDelete = true;
    }
  }

  if (argumentsLength === 0) {
    names = Object.keys(this.context);
    thenDelete = true;
  }

  names.forEach(function (name) {
    var value = _this2.context[name],
        propertyName = name,
        ///
    descriptor = {
      value: value
    };
    Object.defineProperty(_this2, propertyName, descriptor);

    if (thenDelete) {
      delete _this2.context[name];
    }
  }, []);
}

module.exports = {
  applyProperties: applyProperties,
  getProperties: getProperties,
  getContext: getContext,
  assignContext: assignContext
};

function childElementsFromElementAndProperties(element, properties) {
  var childElements = null;

  if (typeof element.childElements === "function") {
    childElements = element.childElements(properties);
    childElements = guarantee(childElements);
    childElements = removeFalseyElements(childElements);
    childElements = replaceStringsWithTextElements(childElements);
  }

  return childElements;
}

function updateContext(childElement, context) {
  var parentContext = typeof childElement.parentContext === "function" ? childElement.parentContext() : childElement.context; ///

  Object.assign(context, parentContext);
  delete childElement.context;
}

function addHandler(element, name, value) {
  var eventType = name.substr(2).toLowerCase(),
      ///
  handler = value; ///

  element.on(eventType, handler);
}

function addAttribute(element, name, value) {
  if (name === "className") {
    name = "class";
  }

  if (name === "htmlFor") {
    name = "for";
  }

  if (_typeof(value) === "object") {
    var keys = Object.keys(value);
    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    });
  } else if (typeof value === "boolean") {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name, svg) {
  return svg ? isSVGAttributeName(name) : isHTMLAttributeName(name);
}

},{"../constants":2,"../utilities/array":29,"../utilities/elements":31,"../utilities/name":32,"../utilities/object":33}],22:[function(require,module,exports){
"use strict";

function onKeyUp(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("keyup", handler, element, intermediateHandler);
}

function onKeyDown(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("keydown", handler, element, intermediateHandler);
}

function offKeyUp(handler, element) {
  this.off("keyup", handler, element);
}

function offKeyDown(handler, element) {
  this.off("keydown", handler, element);
}

module.exports = {
  onKeyUp: onKeyUp,
  onKeyDown: onKeyDown,
  offKeyUp: offKeyUp,
  offKeyDown: offKeyDown
};

function defaultIntermediateHandler(handler, event, element) {
  var keyCode = event.keyCode;
  handler.call(element, keyCode, event, element);
}

},{}],23:[function(require,module,exports){
"use strict";

function onMouseUp(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("mouseup", handler, element, intermediateHandler);
}

function onMouseDown(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("mousedown", handler, element, intermediateHandler);
}

function onMouseOver(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("mouseover", handler, element, intermediateHandler);
}

function onMouseOut(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("mouseout", handler, element, intermediateHandler);
}

function onMouseMove(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("mousemove", handler, element, intermediateHandler);
}

function offMouseUp(handler, element) {
  this.off("mouseup", handler, element);
}

function offMouseDown(handler, element) {
  this.off("mousedown", handler, element);
}

function offMouseOver(handler, element) {
  this.off("mouseover", handler, element);
}

function offMouseOut(handler, element) {
  this.off("mouseout", handler, element);
}

function offMouseMove(handler, element) {
  this.off("mousemove", handler, element);
}

module.exports = {
  onMouseUp: onMouseUp,
  onMouseDown: onMouseDown,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  onMouseMove: onMouseMove,
  offMouseUp: offMouseUp,
  offMouseDown: offMouseDown,
  offMouseOver: offMouseOver,
  offMouseOut: offMouseOut,
  offMouseMove: offMouseMove
};

function defaultIntermediateHandler(handler, event, element) {
  var pageY = event.pageY,
      pageX = event.pageX,
      button = event.button,
      mouseTop = pageY,
      mouseLeft = pageX,
      mouseButton = button; ///

  handler.call(element, mouseTop, mouseLeft, mouseButton, event, element);
}

},{}],24:[function(require,module,exports){
"use strict";

function onResize(handler) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;
  var resizeEventListeners = findResizeEventListeners(element);

  if (resizeEventListeners.length === 0) {
    addResizeObject(element);
  }

  var eventType = "resize";
  this.addEventListener(eventType, handler, element, intermediateHandler);
}

function offResize(handler) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
  var eventType = "resize";
  this.removeEventListener(eventType, handler, element);
  var resizeEventListeners = findResizeEventListeners(element);

  if (resizeEventListeners.length === 0) {
    removeResizeObject(element);
  }
}

module.exports = {
  onResize: onResize,
  offResize: offResize
};

function addResizeObject(element) {
  var resizeObject = document.createElement("object"),
      domElement = element.getDOMElement(),
      style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;",
      data = "about:blank",
      type = "text/html";
  resizeObject.setAttribute("style", style);
  resizeObject.data = data;
  resizeObject.type = type;
  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function () {
    resizeObjectLoadHandler(element);
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  var domElement = element.getDOMElement(),
      resizeObject = element.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView; ///

  objectWindow.removeEventListener("resize", resizeEventListener);
  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  var resizeObject = element.__resizeObject__,
      resizeObjectWindow = resizeObject.contentDocument.defaultView; ///

  resizeObjectWindow.addEventListener("resize", function (event) {
    var resizeEventListeners = findResizeEventListeners(element);
    resizeEventListeners.forEach(function (resizeEventListener) {
      resizeEventListener(event);
    });
  });
}

function findResizeEventListeners(element) {
  var resizeEventListeners = [];

  if (element.hasOwnProperty("eventListeners")) {
    var eventListeners = element.eventListeners; ///

    eventListeners.forEach(function (eventListener) {
      if (eventListener.eventType === "resize") {
        var _resizeEventListener = eventListener;
        resizeEventListeners.push(_resizeEventListener);
      }
    });
  }

  return resizeEventListeners;
}

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();
  handler.call(element, width, height, event, element);
}

},{}],25:[function(require,module,exports){
"use strict";

function onScroll(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("scroll", handler, element, intermediateHandler);
}

function offScroll(handler, element) {
  this.off("scroll", handler, element);
}

function getScrollTop() {
  return this.domElement.scrollTop;
}

function getScrollLeft() {
  return this.domElement.scrollLeft;
}

function setScrollTop(scrollTop) {
  this.domElement.scrollTop = scrollTop;
}

function setScrollLeft(scrollLeft) {
  this.domElement.scrollLeft = scrollLeft;
}

module.exports = {
  onScroll: onScroll,
  offScroll: offScroll,
  getScrollTop: getScrollTop,
  getScrollLeft: getScrollLeft,
  setScrollTop: setScrollTop,
  setScrollLeft: setScrollLeft
};

function defaultIntermediateHandler(handler, event, element) {
  var scrollTop = element.getScrollTop(),
      scrollLeft = element.getScrollLeft();
  handler.call(element, scrollTop, scrollLeft, event, element);
}

},{}],26:[function(require,module,exports){
"use strict";

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

function updateState(update) {
  Object.assign(this.state, update);
}

module.exports = {
  getState: getState,
  setState: setState,
  updateState: updateState
};

},{}],27:[function(require,module,exports){
"use strict";

var Element = require("./element"),
    arrayUtilities = require("./utilities/array"),
    elementsUtilities = require("./utilities/elements");

var flatten = arrayUtilities.flatten,
    removeFalseyElements = elementsUtilities.removeFalseyElements,
    replaceStringsWithTextElements = elementsUtilities.replaceStringsWithTextElements;

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, childArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      childArguments[_key - 2] = arguments[_key];
    }

    var childElements = childElementsFromChildArguments(childArguments);
    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {///
    } else if (isSubclassOf(firstArgument, Element)) {
      var Class = firstArgument; ///

      element = Class.fromProperties(properties);
    } else if (typeof firstArgument === "string") {
      var tagName = firstArgument; ///

      element = Element.fromTagName(tagName, properties);
    } else if (typeof firstArgument === "function") {
      var elementFunction = firstArgument; ///

      element = elementFunction(properties);
    }
  }

  return element;
}

var React = {
  createElement: createElement
};
module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = flatten(childArguments); ///

  var childElements = childArguments; ///

  childElements = removeFalseyElements(childElements);
  childElements = replaceStringsWithTextElements(childElements);
  return childElements;
}

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":4,"./utilities/array":29,"./utilities/elements":31}],28:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Offset = require("./miscellaneous/offset"),
    Bounds = require("./miscellaneous/bounds");

var TextElement = /*#__PURE__*/function () {
  function TextElement(text) {
    _classCallCheck(this, TextElement);

    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  _createClass(TextElement, [{
    key: "clone",
    value: function clone() {
      return TextElement.clone(this);
    }
  }, {
    key: "getText",
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);
      return bounds;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var width = this.domElement.clientWidth;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var height = this.domElement.clientHeight;
      return height;
    }
  }, {
    key: "prependTo",
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: "appendTo",
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: "addTo",
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: "removeFrom",
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: "remove",
    value: function remove() {
      this.domElement.remove();
    }
  }]);

  return TextElement;
}();

module.exports = TextElement;

},{"./miscellaneous/bounds":17,"./miscellaneous/offset":18}],29:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function first(array) {
  return array[0];
}

function splice(array1, start) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);
  return deletedItemsArray;
}

function flatten(array) {
  return array.reduce(function (array, element) {
    array = array.concat(element); ///

    return array;
  }, []);
}

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

module.exports = {
  first: first,
  splice: splice,
  flatten: flatten,
  guarantee: guarantee,
  augment: augment
};

},{}],30:[function(require,module,exports){
"use strict";

var arrayUtilities = require("../utilities/array");

var splice = arrayUtilities.splice;

function domElementFromSelector(selector) {
  var domElement = typeof selector === "string" ? document.querySelector(selector) : selector; ///

  return domElement;
}

function elementsFromDOMElements(domElements) {
  var domElementsWithElements = filterDOMNodes(domElements, function (domElement) {
    return domElement.__element__ !== undefined;
  }),
      elements = domElementsWithElements.map(function (domElement) {
    return domElement.__element__;
  });
  return elements;
}

function descendantDOMNodesFromDOMNode(domNode) {
  var descendantDOMNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var start = -1,
      deleteCount = 0,
      childDOMNodes = domNode.childNodes; ///

  splice(descendantDOMNodes, start, deleteCount, childDOMNodes);
  childDOMNodes.forEach(function (childDOMNode) {
    descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
  });
  return descendantDOMNodes;
}

function filterDOMNodesBySelector(domNodes, selector) {
  var filteredDOMNodes = filterDOMNodes(domNodes, function (domNode) {
    return domNodeMatchesSelector(domNode, selector);
  });
  return filteredDOMNodes;
}

function domNodeMatchesSelector(domNode, selector) {
  var domNodeType = domNode.nodeType;

  switch (domNodeType) {
    case Node.ELEMENT_NODE:
      {
        var domElement = domNode; ///

        return domElement.matches(selector);
      }

    case Node.TEXT_NODE:
      {
        if (selector === "*") {
          return true;
        }
      }
  }

  return false;
}

function filterDOMNodes(domNodes, test) {
  var filteredDOMNodes = [],
      domNodesLength = domNodes.length;

  for (var index = 0; index < domNodesLength; index++) {
    var domNode = domNodes[index],
        result = test(domNode);

    if (result) {
      filteredDOMNodes.push(domNode);
    }
  }

  return filteredDOMNodes;
}

module.exports = {
  domElementFromSelector: domElementFromSelector,
  elementsFromDOMElements: elementsFromDOMElements,
  descendantDOMNodesFromDOMNode: descendantDOMNodesFromDOMNode,
  filterDOMNodesBySelector: filterDOMNodesBySelector,
  domNodeMatchesSelector: domNodeMatchesSelector,
  filterDOMNodes: filterDOMNodes
};

},{"../utilities/array":29}],31:[function(require,module,exports){
"use strict";

var TextElement = require("../textElement");

function removeFalseyElements(elements) {
  elements = elements.reduce(function (elements, element) {
    if (element) {
      elements.push(element);
    }

    return elements;
  }, []);
  return elements;
}

function replaceStringsWithTextElements(elements) {
  elements = elements.map(function (element) {
    ///
    if (typeof element === "string") {
      var text = element,
          ///
      textElement = new TextElement(text);
      element = textElement; ///
    }

    return element;
  });
  return elements;
}

module.exports = {
  removeFalseyElements: removeFalseyElements,
  replaceStringsWithTextElements: replaceStringsWithTextElements
};

},{"../textElement":28}],32:[function(require,module,exports){
"use strict";

function isSVGTagName(tagName) {
  return svgTagNames.includes(tagName);
}

function isSVGAttributeName(attributeName) {
  return svgAttributeNames.includes(attributeName);
}

function isHTMLAttributeName(attributeName) {
  return htmlAttributeNames.includes(attributeName);
}

module.exports = {
  isSVGTagName: isSVGTagName,
  isSVGAttributeName: isSVGAttributeName,
  isHTMLAttributeName: isHTMLAttributeName
};
var svgTagNames = ["altGlyph", "animate", "animateColor", "animateMotion", "animateTransform", "animation", "audio", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "handler", "hatch", "hatchpath", "hkern", "image", "line", "linearGradient", "listener", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "prefetch", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "tbreak", "text", "textArea", "textPath", "title", "tref", "tspan", "unknown", "use", "video", "view", "vkern"],
    svgAttributeNames = ["accent-height", "accumulate", "additive", "alignment-baseline", "alphabetic", "amplitude", "arabic-form", "ascent", "attributeName", "attributeType", "azimuth", "bandwidth", "baseFrequency", "baseProfile", "baseline-shift", "bbox", "begin", "bias", "by", "calcMode", "cap-height", "clip", "className", "clip-path", "clip-rule", "clipPathUnits", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "contentScriptType", "contentStyleType", "crossorigin", "cursor", "cx", "cy", "d", "defaultAction", "descent", "diffuseConstant", "direction", "display", "divisor", "dominant-baseline", "download", "dur", "dx", "dy", "edgeMode", "editable", "elevation", "enable-background", "end", "event", "exponent", "externalResourcesRequired", "fill", "fill-opacity", "fill-rule", "filter", "filterRes", "filterUnits", "flood-color", "flood-opacity", "focusHighlight", "focusable", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "fr", "from", "fx", "fy", "g1", "g2", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphRef", "gradientTransform", "gradientUnits", "handler", "hanging", "hatchContentUnits", "hatchUnits", "height", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "href", "hreflang", "ideographic", "image-rendering", "in", "in2", "initialVisibility", "intercept", "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letter-spacing", "lighting-color", "limitingConeAngle", "local", "marker-end", "marker-mid", "marker-start", "markerHeight", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "max", "media", "mediaCharacterEncoding", "mediaContentEncodings", "mediaSize", "mediaTime", "method", "min", "mode", "name", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "numOctaves", "observer", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlay", "overline-position", "overline-thickness", "panose-1", "path", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "phase", "pitch", "playbackOrder", "playbackorder", "pointer-events", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "propagate", "r", "radius", "refX", "refY", "rendering-intent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "requiredFonts", "requiredFormats", "restart", "result", "rotate", "rx", "ry", "scale", "seed", "shape-rendering", "side", "slope", "snapshotTime", "spacing", "specularConstant", "specularExponent", "spreadMethod", "src", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "string", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfaceScale", "syncBehavior", "syncBehaviorDefault", "syncMaster", "syncTolerance", "syncToleranceDefault", "systemLanguage", "tableValues", "target", "targetX", "targetY", "text-anchor", "text-decoration", "text-rendering", "textLength", "timelineBegin", "timelinebegin", "title", "to", "transform", "transformBehavior", "type", "u1", "u2", "underline-position", "underline-thickness", "unicode", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "values", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "viewBox", "viewTarget", "visibility", "width", "widths", "word-spacing", "writing-mode", "x", "x-height", "x1", "x2", "xChannelSelector", "y", "y1", "y2", "yChannelSelector", "z", "zoomAndPan"],
    htmlAttributeNames = ["accept", "acceptCharset", "accessKey", "action", "allow", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap"];

},{}],33:[function(require,module,exports){
"use strict";

function combine(targetObject) {
  var sourceObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var sourceKeys = Object.keys(sourceObject);
  sourceKeys.forEach(function (sourceKey) {
    var targetProperty = targetObject[sourceKey],
        sourceProperty = sourceObject[sourceKey];
    targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? "".concat(targetProperty, " ").concat(sourceProperty) : sourceProperty;
  });
}

function prune(targetObject, sourceKeys) {
  sourceKeys.forEach(function (sourceKey) {
    if (targetObject.hasOwnProperty(sourceKey)) {
      delete targetObject[sourceKey];
    }
  });
}

module.exports = {
  combine: combine,
  prune: prune
};

},{}],34:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var keyMixins = require("./mixins/key"),
    eventMixins = require("./mixins/event"),
    clickMixins = require("./mixins/click"),
    mouseMixins = require("./mixins/mouse");

var Window = /*#__PURE__*/function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window; ///
  }

  _createClass(Window, [{
    key: "assign",
    value: function assign() {
      var target = this.domElement; ///

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      Object.assign.apply(Object, [target].concat(sources));
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }, {
    key: "onResize",
    value: function onResize(handler, object) {
      var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;
      var eventTypes = "resize";
      this.on(eventTypes, handler, object, intermediateHandler);
    }
  }, {
    key: "offResize",
    value: function offResize(handler, object) {
      var eventTypes = "resize";
      this.off(eventTypes, handler, object);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, mouseMixins);
module.exports = typeof window === "undefined" ? undefined : new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();
  handler.call(element, width, height, event, element);
}

},{"./mixins/click":19,"./mixins/event":20,"./mixins/key":22,"./mixins/mouse":23}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9jb25zdGFudHMuanMiLCJsaWIvZG9jdW1lbnQuanMiLCJsaWIvZWxlbWVudC5qcyIsImxpYi9lbGVtZW50L2JvZHkuanMiLCJsaWIvZWxlbWVudC9idXR0b24uanMiLCJsaWIvZWxlbWVudC9jaGVja2JveC5qcyIsImxpYi9lbGVtZW50L2Rpdi5qcyIsImxpYi9lbGVtZW50L2xpbmsuanMiLCJsaWIvZWxlbWVudC9zZWxlY3QuanMiLCJsaWIvZWxlbWVudC9zcGFuLmpzIiwibGliL2V4YW1wbGUuanMiLCJsaWIvaW5wdXRFbGVtZW50LmpzIiwibGliL2lucHV0RWxlbWVudC9pbnB1dC5qcyIsImxpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCJsaWIvanV4dGFwb3NlLmpzIiwibGliL21pc2NlbGxhbmVvdXMvYm91bmRzLmpzIiwibGliL21pc2NlbGxhbmVvdXMvb2Zmc2V0LmpzIiwibGliL21peGlucy9jbGljay5qcyIsImxpYi9taXhpbnMvZXZlbnQuanMiLCJsaWIvbWl4aW5zL2pzeC5qcyIsImxpYi9taXhpbnMva2V5LmpzIiwibGliL21peGlucy9tb3VzZS5qcyIsImxpYi9taXhpbnMvcmVzaXplLmpzIiwibGliL21peGlucy9zY3JvbGwuanMiLCJsaWIvbWl4aW5zL3N0YXRlLmpzIiwibGliL3JlYWN0LmpzIiwibGliL3RleHRFbGVtZW50LmpzIiwibGliL3V0aWxpdGllcy9hcnJheS5qcyIsImxpYi91dGlsaXRpZXMvZG9tLmpzIiwibGliL3V0aWxpdGllcy9lbGVtZW50cy5qcyIsImxpYi91dGlsaXRpZXMvbmFtZS5qcyIsImxpYi91dGlsaXRpZXMvb2JqZWN0LmpzIiwibGliL3dpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUMsTUFBUCxDQUFjLE1BQU0sQ0FBQyxTQUFyQixFQUFnQyxXQUFoQztBQUNBLE1BQU0sQ0FBQyxNQUFQLENBQWMsTUFBTSxDQUFDLFNBQXJCLEVBQWdDLFdBQWhDO0FBQ0EsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFNLENBQUMsU0FBckIsRUFBZ0MsV0FBaEM7QUFFQSxNQUFNLENBQUMsT0FBUCxHQUFrQixPQUFPLE1BQVAsS0FBa0IsV0FBbkIsR0FBa0MsU0FBbEMsR0FBOEMsSUFBSSxNQUFKLEVBQS9ELEMsQ0FBOEU7O0FBRTlFLFNBQVMsZ0NBQVQsQ0FBMEMsT0FBMUMsRUFBbUQsS0FBbkQsRUFBMEQsT0FBMUQsRUFBbUU7QUFDakUsTUFBTSxNQUFNLEdBQUcsT0FBZjtBQUFBLE1BQXdCO0FBQ2xCLEVBQUEsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFQLEVBRGQ7QUFBQSxNQUVNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUCxFQUZmO0FBSUEsRUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLE9BQWIsRUFBc0IsS0FBdEIsRUFBNkIsTUFBN0IsRUFBcUMsS0FBckMsRUFBNEMsT0FBNUM7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdpbmRvdzogcmVxdWlyZSgnLi9saWIvd2luZG93JyksXG4gIGRvY3VtZW50OiByZXF1aXJlKCcuL2xpYi9kb2N1bWVudCcpLFxuICBEaXY6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvZGl2JyksXG4gIFNwYW46IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc3BhbicpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2JvZHknKSxcbiAgTGluazogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9saW5rJyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9zZWxlY3QnKSxcbiAgQnV0dG9uOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jaGVja2JveCcpLFxuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIFRleHRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi90ZXh0RWxlbWVudCcpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2lucHV0JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKSxcbiAgSW5wdXRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9taXNjZWxsYW5lb3VzL2JvdW5kcycpLFxuICBPZmZzZXQ6IHJlcXVpcmUoJy4vbGliL21pc2NlbGxhbmVvdXMvb2Zmc2V0JyksXG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFNWR19OQU1FU1BBQ0VfVVJJID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU1ZHX05BTUVTUEFDRV9VUklcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qga2V5TWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL2tleVwiKSxcbiAgICAgIGV2ZW50TWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL2V2ZW50XCIpLFxuICAgICAgY2xpY2tNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvY2xpY2tcIiksXG4gICAgICBtb3VzZU1peGlucyA9IHJlcXVpcmUoXCIuL21peGlucy9tb3VzZVwiKTtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCIpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZShcIi4vbWlzY2VsbGFuZW91cy9ib3VuZHNcIiksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIiksXG4gICAgICBqc3hNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvanN4XCIpLFxuICAgICAga2V5TWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL2tleVwiKSxcbiAgICAgIHN0YXRlTWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL3N0YXRlXCIpLFxuICAgICAgbW91c2VNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvbW91c2VcIiksXG4gICAgICBldmVudE1peGlucyA9IHJlcXVpcmUoXCIuL21peGlucy9ldmVudFwiKSxcbiAgICAgIGNsaWNrTWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL2NsaWNrXCIpLFxuICAgICAgc2Nyb2xsTWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL3Njcm9sbFwiKSxcbiAgICAgIHJlc2l6ZU1peGlucyA9IHJlcXVpcmUoXCIuL21peGlucy9yZXNpemVcIiksXG4gICAgICBkb21VdGlsaXRpZXMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvZG9tXCIpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllcy9uYW1lXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBvYmplY3RVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvb2JqZWN0XCIpO1xuXG5jb25zdCB7IGNvbWJpbmUgfSA9IG9iamVjdFV0aWxpdGllcyxcbiAgICAgIHsgaXNTVkdUYWdOYW1lIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgYXVnbWVudCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cbiAgXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwid2lkdGhcIiwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGVsZW1lbnQgPSBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZnJvbVRhZ05hbWUoRWxlbWVudCwgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQsIHtcbiAgTEVGVF9NT1VTRV9CVVRUT046IDAsXG4gIFJJR0hUX01PVVNFX0JVVFRPTjogMixcbiAgTUlERExFX01PVVNFX0JVVFRPTjogMVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZWRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsIGZ1bmN0aW9uKGlnbm9yZWRQcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IFwiYm9keVwiKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQm9keSwgZWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCb2R5LCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJvZHksIGRvbUVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQm9keSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihCb2R5LCB7XG4gIHRhZ05hbWU6IFwiYm9keVwiXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyLm9uQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBvZmZDbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCkge1xuICAgIHN1cGVyLm9mZkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2ssIC8vL1xuICAgICAgICAgIGJ1dHRvbiA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQnV0dG9uLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCdXR0b24sIHtcbiAgdGFnTmFtZTogXCJidXR0b25cIixcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICBcIm9uQ2xpY2tcIlxuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQsXG5cdFx0XHRcdG1vdXNlQnV0dG9uID0gYnV0dG9uO1x0Ly8vXG4gIFxuICBjbGlja0hhbmRsZXIuY2FsbChlbGVtZW50LCBtb3VzZUJ1dHRvbiwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKFwiY2xpY2tcIiwgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpOyAgLy8vXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBjaGVja2VkID0gZG9tRWxlbWVudC5jaGVja2VkO1xuXG4gICAgcmV0dXJuIGNoZWNrZWQ7XG4gIH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShDaGVja2JveCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy8gICAgXG4gICAgICAgICAgY2hlY2tib3ggPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcbiAgICBcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveCwge1xuICB0YWdOYW1lOiBcImlucHV0XCIsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgXCJvbkNoYW5nZVwiLFxuICAgIFwiY2hlY2tlZFwiXG4gIF0sXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyLmNhbGwoZWxlbWVudCwgY2hlY2tlZCwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KERpdiwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhEaXYsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2LCB7XG4gIHRhZ05hbWU6IFwiZGl2XCJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpdjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vbihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZDbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljaywgLy8vXG4gICAgICAgICAgbGluayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gbGluaztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExpbmssIHtcbiAgdGFnTmFtZTogXCJhXCIsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgXCJvbkNsaWNrXCJcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGxpbmsgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgaHJlZkF0dHJpYnV0ZSA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxcbiAgICAgICAgaHJlZiA9IGhyZWZBdHRyaWJ1dGU7IC8vL1xuICBcbiAgY2xpY2tIYW5kbGVyLmNhbGwoZWxlbWVudCwgaHJlZiwgZXZlbnQsIGVsZW1lbnQpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBkb21FbGVtZW50LnZhbHVlOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb25WYWx1ZSwgIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcbiAgICBcbiAgICBkb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IFxuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2VsZWN0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBzZWxlY3Q7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QsIHtcbiAgdGFnTmFtZTogXCJzZWxlY3RcIixcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzZWxlY3QgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHNlbGVjdC5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyLmNhbGwoZWxlbWVudCwgc2VsZWN0ZWRPcHRpb25WYWx1ZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcblxuY2xhc3MgU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbG9uZSgpIHsgcmV0dXJuIFNwYW4uY2xvbmUodGhpcyk7IH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZShTcGFuLCBlbGVtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNwYW4sIGh0bWwpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU3BhbiwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwYW4sIHtcbiAgdGFnTmFtZTogXCJzcGFuXCJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwYW47XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9qdXh0YXBvc2VcIjsgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkucHJlcGVuZChcblxuICAgIDxoMT5cbiAgICAgIEVhc3lcbiAgICA8L2gxPlxuXG4pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKFwiLi9lbGVtZW50XCIpO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudCwge1xuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgIFwib25DaGFuZ2VcIlxuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICB2YWx1ZSA9IGlucHV0RWxlbWVudC5nZXRWYWx1ZSgpO1xuICBcbiAgY2hhbmdlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHZhbHVlLCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZShcIi4uL2lucHV0RWxlbWVudFwiKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoSW5wdXQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXQsIHtcbiAgdGFnTmFtZTogXCJpbnB1dFwiXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vaW5wdXRFbGVtZW50XCIpO1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFRleHRhcmVhLmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0YXJlYSwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRhcmVhLCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dGFyZWEsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0YXJlYSwge1xuICB0YWdOYW1lOiBcInRleHRhcmVhXCJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRhcmVhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIFwiUmVhY3RcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYm90dG9tIC0gdGhpcy50b3A7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG4gIFxuICBzZXRUb3AodG9wKSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgc2V0Qm90dG9tKGJvdHRvbSkge1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgc2V0UmlnaHQocmlnaHQpIHtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBzaGlmdChob3Jpem9udGFsT2Zmc2V0LCB2ZXJ0aWNhbE9mZnNldCkge1xuICAgIHRoaXMudG9wICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMubGVmdCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMucmlnaHQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBtb3VzZVRvcClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwiY2xpY2tcIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZkNsaWNrKGhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJjbGlja1wiLCBoYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb25DbGljayxcbiAgb2ZmQ2xpY2tcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgcGFnZVksIHBhZ2VYLCBidXR0b24gfSA9IGV2ZW50LFxuXHRcdFx0XHRtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBidXR0b247IC8vL1xuICBcbiAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBudWxsKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFwiIFwiKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChcIiBcIik7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbixcbiAgb2ZmLFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyXG59O1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoXCJldmVudExpc3RlbmVyc1wiKSkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLFxuICAgICAgICBldmVudExpc3RlbmVyID0gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xuXG4gIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycyxcbiAgICAgICAgZXZlbnRMaXN0ZW5lciA9IGZpbmRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJzLCBldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IGV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmIChldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuICBcbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50LCBpbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGlmIChpbnRlcm1lZGlhdGVIYW5kbGVyID09PSBudWxsKSB7XG4gICAgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBldmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGV2ZW50VHlwZSxcbiAgICBoYW5kbGVyLFxuICAgIGVsZW1lbnRcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJzLCBldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXJzLmZpbmQoZnVuY3Rpb24oZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmICggKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpICYmIChldmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIiksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9uYW1lXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgb2JqZWN0VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9vYmplY3RcIiksXG4gICAgICBlbGVtZW50c1V0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvZWxlbWVudHNcIik7XG5cbmNvbnN0IHsgY29tYmluZSwgcHJ1bmUgfSA9IG9iamVjdFV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIGd1YXJhbnRlZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUsIGlzU1ZHQXR0cmlidXRlTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9ID0gZWxlbWVudHNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzID0ge30sIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHM7ICAvLy9cblxuICBwcnVuZShwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3Qgc3ZnID0gKHRoaXMuZG9tRWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2ZykpIHtcbiAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIHByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgY2hpbGRFbGVtZW50LmFkZFRvKHRoaXMpO1xuICB9KTtcblxuICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICBjb250ZXh0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgfVxuICB9LCBbXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQsXG4gIGFzc2lnbkNvbnRleHRcbn07XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xuXG4gIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcbiAgICBuYW1lID0gXCJjbGFzc1wiO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IFwiaHRtbEZvclwiKSB7XG4gICAgbmFtZSA9IFwiZm9yXCI7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKSB7XG4gIHJldHVybiBzdmcgPyBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb25LZXlVcChoYW5kbGVyLCBlbGVtZW50LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbihcImtleXVwXCIsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbktleURvd24oaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJrZXlkb3duXCIsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZLZXlVcChoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwia2V5dXBcIiwgaGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5RG93bihoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwia2V5ZG93blwiLCBoYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb25LZXlVcCxcbiAgb25LZXlEb3duLFxuICBvZmZLZXlVcCxcbiAgb2ZmS2V5RG93blxufTtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcbiAgXG4gIGhhbmRsZXIuY2FsbChlbGVtZW50LCBrZXlDb2RlLCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb25Nb3VzZVVwKGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwibW91c2V1cFwiLCBoYW5kbGVyLCBlbGVtZW50LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24oaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJtb3VzZWRvd25cIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwibW91c2VvdmVyXCIsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwibW91c2VvdXRcIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKGhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJtb3VzZXVwXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwibW91c2Vkb3duXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3ZlcihoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwibW91c2VvdmVyXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KGhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJtb3VzZW91dFwiLCBoYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUoaGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcIm1vdXNlbW92ZVwiLCBoYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb25Nb3VzZVVwLFxuICBvbk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXIsXG4gIG9uTW91c2VPdXQsXG4gIG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZVVwLFxuICBvZmZNb3VzZURvd24sXG4gIG9mZk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdXQsXG4gIG9mZk1vdXNlTW92ZVxufTtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBwYWdlWSwgcGFnZVgsIGJ1dHRvbiB9ID0gZXZlbnQsXG5cdFx0XHRcdG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGJ1dHRvbjsgLy8vXG4gIFxuICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgbW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24sIGV2ZW50LCBlbGVtZW50KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShoYW5kbGVyLCBlbGVtZW50ID0gdGhpcywgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKSB7XG4gIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gIGlmIChyZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBhZGRSZXNpemVPYmplY3QoZWxlbWVudCk7XG4gIH1cblxuICBjb25zdCBldmVudFR5cGUgPSBcInJlc2l6ZVwiO1xuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gXCJyZXNpemVcIjtcblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGZpbmRSZXNpemVFdmVudExpc3RlbmVycyhlbGVtZW50KTtcbiAgXG4gIGlmIChyZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemVcbn07XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvYmplY3RcIiksXG4gICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgLFxuICAgICAgICBkYXRhID0gXCJhYm91dDpibGFua1wiLFxuICAgICAgICB0eXBlID0gXCJ0ZXh0L2h0bWxcIjtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xuICByZXNpemVPYmplY3QuZGF0YSA9IGRhdGE7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gdHlwZTtcblxuICBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpXG4gIH07XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihyZXNpemVFdmVudExpc3RlbmVyKXtcbiAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgXG4gIGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KFwiZXZlbnRMaXN0ZW5lcnNcIikpIHtcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IGVsZW1lbnQuZXZlbnRMaXN0ZW5lcnM7ICAvLy9cblxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRMaXN0ZW5lcikge1xuICAgICAgaWYgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBcInJlc2l6ZVwiKSB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVyO1xuXG4gICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLnB1c2gocmVzaXplRXZlbnRMaXN0ZW5lcik7XG4gICAgICB9ICAgICAgXG4gICAgfSk7XG4gIH0gIFxuICBcbiAgcmV0dXJuIHJlc2l6ZUV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcihoYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldEhlaWdodCgpO1xuXG4gIGhhbmRsZXIuY2FsbChlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb25TY3JvbGwoaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJzY3JvbGxcIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlNjcm9sbChoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwic2Nyb2xsXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsLFxuICBnZXRTY3JvbGxUb3AsXG4gIGdldFNjcm9sbExlZnQsXG4gIHNldFNjcm9sbFRvcCxcbiAgc2V0U2Nyb2xsTGVmdFxufTtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZWxlbWVudC5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuICBcbiAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZSh1cGRhdGUpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB1cGRhdGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICB1cGRhdGVTdGF0ZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4vZWxlbWVudFwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgZWxlbWVudHNVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIik7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSA9IGVsZW1lbnRzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICBjaGlsZEFyZ3VtZW50cyA9IGZsYXR0ZW4oY2hpbGRBcmd1bWVudHMpOyAvLy9cblxuICBsZXQgY2hpbGRFbGVtZW50cyA9IGNoaWxkQXJndW1lbnRzOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCIpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZShcIi4vbWlzY2VsbGFuZW91cy9ib3VuZHNcIik7XG5cbmNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFRleHRFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKGFycmF5LCBlbGVtZW50KSB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0LFxuICBzcGxpY2UsXG4gIGZsYXR0ZW4sXG4gIGd1YXJhbnRlZSxcbiAgYXVnbWVudFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXJyYXlcIik7XG5cbmNvbnN0IHsgc3BsaWNlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlcyhkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBzdGFydCA9IC0xLFxuICAgICAgICBkZWxldGVDb3VudCA9IDAsXG4gICAgICAgIGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICBzcGxpY2UoZGVzY2VuZGFudERPTU5vZGVzLCBzdGFydCwgZGVsZXRlQ291bnQsIGNoaWxkRE9NTm9kZXMpO1xuXG4gIGNoaWxkRE9NTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZERPTU5vZGUpIHtcbiAgICBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShjaGlsZERPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlcyk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCBmdW5jdGlvbihkb21Ob2RlKSB7XG4gICAgcmV0dXJuIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpO1xuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxuZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREUgOiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tTm9kZTsgLy8vXG5cbiAgICAgIHJldHVybiBkb21FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNhc2UgTm9kZS5URVhUX05PREUgOiB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IFtdLFxuICAgICAgICBkb21Ob2Rlc0xlbmd0aCA9IGRvbU5vZGVzLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9tTm9kZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkb21Ob2RlID0gZG9tTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZG9tTm9kZSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZERPTU5vZGVzLnB1c2goZG9tTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb21FbGVtZW50RnJvbVNlbGVjdG9yLFxuICBlbGVtZW50c0Zyb21ET01FbGVtZW50cyxcbiAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsXG4gIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcixcbiAgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcixcbiAgZmlsdGVyRE9NTm9kZXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgVGV4dEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vdGV4dEVsZW1lbnRcIik7XG5cbmZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGVsZW1lbnRzLCBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCkgeyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlbW92ZUZhbHNleUVsZW1lbnRzLFxuICByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5mdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNTVkdUYWdOYW1lLFxuICBpc1NWR0F0dHJpYnV0ZU5hbWUsXG4gIGlzSFRNTEF0dHJpYnV0ZU5hbWVcbn07XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjb21iaW5lKHRhcmdldE9iamVjdCwgc291cmNlT2JqZWN0ID0ge30pIHtcbiAgY29uc3Qgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZU9iamVjdCk7XG5cbiAgc291cmNlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZUtleSkge1xuICAgIGNvbnN0IHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0sXG4gICAgICAgICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2VPYmplY3Rbc291cmNlS2V5XTtcblxuICAgIHRhcmdldE9iamVjdFtzb3VyY2VLZXldID0gdGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFByb3BlcnR5fSAke3NvdXJjZVByb3BlcnR5fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVByb3BlcnR5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gIHNvdXJjZUtleXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2VLZXkpIHtcbiAgICBpZiAodGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tYmluZSxcbiAgcHJ1bmVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qga2V5TWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL2tleVwiKSxcbiAgICAgIGV2ZW50TWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL2V2ZW50XCIpLFxuICAgICAgY2xpY2tNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvY2xpY2tcIiksXG4gICAgICBtb3VzZU1peGlucyA9IHJlcXVpcmUoXCIuL21peGlucy9tb3VzZVwiKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9IFwicmVzaXplXCI7XG4gICAgXG4gICAgdGhpcy5vbihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIsIG9iamVjdCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZXMgPSBcInJlc2l6ZVwiO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQsIC8vL1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB3aW5kb3cuZ2V0SGVpZ2h0KCk7XG4gIFxuICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgd2lkdGgsIGhlaWdodCwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIl19
