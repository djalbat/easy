(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MIDDLE_MOUSE_BUTTON = exports.RIGHT_MOUSE_BUTTON = exports.LEFT_MOUSE_BUTTON = exports.SVG_NAMESPACE_URI = void 0;
var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
exports.SVG_NAMESPACE_URI = SVG_NAMESPACE_URI;
var LEFT_MOUSE_BUTTON = 0;
exports.LEFT_MOUSE_BUTTON = LEFT_MOUSE_BUTTON;
var RIGHT_MOUSE_BUTTON = 2;
exports.RIGHT_MOUSE_BUTTON = RIGHT_MOUSE_BUTTON;
var MIDDLE_MOUSE_BUTTON = 1;
exports.MIDDLE_MOUSE_BUTTON = MIDDLE_MOUSE_BUTTON;
var _default = {
  SVG_NAMESPACE_URI: SVG_NAMESPACE_URI,
  LEFT_MOUSE_BUTTON: LEFT_MOUSE_BUTTON,
  RIGHT_MOUSE_BUTTON: RIGHT_MOUSE_BUTTON,
  MIDDLE_MOUSE_BUTTON: MIDDLE_MOUSE_BUTTON
};
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _click = require("./mixins/click");

var _key = require("./mixins/key");

var _event = require("./mixins/event");

var _mouse = require("./mixins/mouse");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Document = function Document() {
  _classCallCheck(this, Document);

  _defineProperty(this, "on", _event.on);

  _defineProperty(this, "off", _event.off);

  _defineProperty(this, "onClick", _click.onClick);

  _defineProperty(this, "offClick", _click.offClick);

  _defineProperty(this, "onKeyUp", _key.onKeyUp);

  _defineProperty(this, "offKeyUp", _key.offKeyUp);

  _defineProperty(this, "onKeyDown", _key.onKeyDown);

  _defineProperty(this, "offKeyDown", _key.offKeyDown);

  _defineProperty(this, "onMouseUp", _mouse.onMouseUp);

  _defineProperty(this, "onMouseDown", _mouse.onMouseDown);

  _defineProperty(this, "onMouseOver", _mouse.onMouseOver);

  _defineProperty(this, "onMouseOut", _mouse.onMouseOut);

  _defineProperty(this, "onMouseMove", _mouse.onMouseMove);

  _defineProperty(this, "offMouseUp", _mouse.offMouseUp);

  _defineProperty(this, "offMouseDown", _mouse.offMouseDown);

  _defineProperty(this, "offMouseOver", _mouse.offMouseOver);

  _defineProperty(this, "offMouseOut", _mouse.offMouseOut);

  _defineProperty(this, "offMouseMove", _mouse.offMouseMove);

  _defineProperty(this, "addEventListener", _event.addEventListener);

  _defineProperty(this, "removeEventListener", _event.removeEventListener);

  this.domElement = document; ///
};

var document = typeof document === "undefined" ? undefined : new Document(); ///

var _default = document;
exports["default"] = _default;

},{"./mixins/click":19,"./mixins/event":20,"./mixins/key":22,"./mixins/mouse":23}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _object = require("./utilities/object");

var _name2 = require("./utilities/name");

var _array = require("./utilities/array");

var _constants = require("./constants");

var _dom = require("./utilities/dom");

var _click = require("./mixins/click");

var _resize = require("./mixins/resize");

var _state = require("./mixins/state");

var _key7 = require("./mixins/key");

var _event = require("./mixins/event");

var _jsx = require("./mixins/jsx");

var _scroll = require("./mixins/scroll");

var _mouse = require("./mixins/mouse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Element = /*#__PURE__*/function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    _defineProperty(this, "on", _event.on);

    _defineProperty(this, "off", _event.off);

    _defineProperty(this, "onClick", _click.onClick);

    _defineProperty(this, "offClick", _click.offClick);

    _defineProperty(this, "onResize", _resize.onResize);

    _defineProperty(this, "offResize", _resize.offResize);

    _defineProperty(this, "getState", _state.getState);

    _defineProperty(this, "setState", _state.setState);

    _defineProperty(this, "updateState", _state.updateState);

    _defineProperty(this, "onKeyUp", _key7.onKeyUp);

    _defineProperty(this, "offKeyUp", _key7.offKeyUp);

    _defineProperty(this, "onKeyDown", _key7.onKeyDown);

    _defineProperty(this, "offKeyDown", _key7.offKeyDown);

    _defineProperty(this, "onMouseUp", _mouse.onMouseUp);

    _defineProperty(this, "onMouseDown", _mouse.onMouseDown);

    _defineProperty(this, "onMouseOver", _mouse.onMouseOver);

    _defineProperty(this, "onMouseOut", _mouse.onMouseOut);

    _defineProperty(this, "onMouseMove", _mouse.onMouseMove);

    _defineProperty(this, "offMouseUp", _mouse.offMouseUp);

    _defineProperty(this, "offMouseDown", _mouse.offMouseDown);

    _defineProperty(this, "offMouseOver", _mouse.offMouseOver);

    _defineProperty(this, "offMouseOut", _mouse.offMouseOut);

    _defineProperty(this, "offMouseMove", _mouse.offMouseMove);

    _defineProperty(this, "onScroll", _scroll.onScroll);

    _defineProperty(this, "offScroll", _scroll.offScroll);

    _defineProperty(this, "getScrollTop", _scroll.getScrollTop);

    _defineProperty(this, "getScrollLeft", _scroll.getScrollLeft);

    _defineProperty(this, "setScrollTop", _scroll.setScrollTop);

    _defineProperty(this, "setScrollLeft", _scroll.setScrollLeft);

    _defineProperty(this, "getContext", _jsx.getContext);

    _defineProperty(this, "getProperties", _jsx.getProperties);

    _defineProperty(this, "assignContext", _jsx.assignContext);

    _defineProperty(this, "applyProperties", _jsx.applyProperties);

    _defineProperty(this, "addEventListener", _event.addEventListener);

    _defineProperty(this, "removeEventListener", _event.removeEventListener);

    this.domElement = (0, _dom.domElementFromSelector)(selector);
    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
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
      offset = new _offset["default"](top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = _bounds["default"].fromBoundingClientRect(boundingClientRect);

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
      descendantDOMNodes = (0, _dom.descendantDOMNodesFromDOMNode)(domNode),
          descendantDOMElements = (0, _dom.filterDOMNodesBySelector)(descendantDOMNodes, selector),
          descendantElements = (0, _dom.elementsFromDOMElements)(descendantDOMElements);
      return descendantElements;
    }
  }, {
    key: "getChildElements",
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = (0, _dom.filterDOMNodesBySelector)(childDOMNodes, selector),
          childElements = (0, _dom.elementsFromDOMElements)(childDOMElements);
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
              parentElements = (0, _dom.elementsFromDOMElements)(parentDOMElements),
              firstParentElement = (0, _array.first)(parentElements);
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

      var ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
      return ascendantElements;
    }
  }, {
    key: "getPreviousSiblingElement",
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(previousSiblingDOMNode, selector)) {
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

      if (nextSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: "fromHTML",
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement("div");
      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(Class, domElement) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
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
      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
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

exports["default"] = Element;

function _fromTagName(Class, tagName) {
  var domElement = (0, _name2.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len5 = arguments.length, remainingArguments = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    remainingArguments[_key5 - 2] = arguments[_key5];
  }

  return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
}

function _fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len6 = arguments.length, remainingArguments = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    remainingArguments[_key6 - 2] = arguments[_key6];
  }

  remainingArguments.unshift(domElement);
  remainingArguments.unshift(null);
  return new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class].concat(remainingArguments)))();
}

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Class.hasOwnProperty("defaultProperties")) {
    (0, _object.combine)(defaultProperties, Class.defaultProperties);
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
    (0, _array.augment)(ignoredProperties, Class.ignoredProperties, function (ignoredProperty) {
      return !ignoredProperties.includes(ignoredProperty);
    });
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}

},{"./constants":1,"./miscellaneous/bounds":17,"./miscellaneous/offset":18,"./mixins/click":19,"./mixins/event":20,"./mixins/jsx":21,"./mixins/key":22,"./mixins/mouse":23,"./mixins/resize":24,"./mixins/scroll":25,"./mixins/state":26,"./utilities/array":29,"./utilities/dom":30,"./utilities/name":32,"./utilities/object":33}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Body = /*#__PURE__*/function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, selector));
  }

  _createClass(Body, null, [{
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

exports["default"] = Body;

_defineProperty(Body, "tagName", "body");

},{"../element":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports["default"] = Button;

_defineProperty(Button, "tagName", "button");

_defineProperty(Button, "ignoredProperties", ["onClick"]);

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var button = event.button,
      mouseButton = button; ///

  clickHandler.call(element, mouseButton, event, element);
}

},{"../element":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return _element["default"].fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return _element["default"].fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          checkbox = _element["default"].fromProperties(Checkbox, properties, changeHandler, checked);

      return checkbox;
    }
  }]);

  return Checkbox;
}(_element["default"]);

exports["default"] = Checkbox;

_defineProperty(Checkbox, "tagName", "input");

_defineProperty(Checkbox, "ignoredProperties", ["onChange", "checked"]);

_defineProperty(Checkbox, "defaultProperties", {
  type: "checkbox"
});

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var checkbox = element,
      ///
  checked = checkbox.isChecked();
  changeHandler.call(element, checked, event, element);
}

},{"../element":3}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Div = /*#__PURE__*/function (_Element) {
  _inherits(Div, _Element);

  function Div(selector) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, _getPrototypeOf(Div).call(this, selector));
  }

  _createClass(Div, null, [{
    key: "fromHTML",
    value: function fromHTML(html) {
      return _element["default"].fromHTML(Div, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return _element["default"].fromDOMElement(Div, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _element["default"].fromProperties(Div, properties);
    }
  }]);

  return Div;
}(_element["default"]);

exports["default"] = Div;

_defineProperty(Div, "tagName", "div");

},{"../element":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    key: "fromHTML",
    value: function fromHTML(html, clickHandler) {
      return _element["default"].fromHTML(Link, html, clickHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, clickHandler) {
      return _element["default"].fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick,
          link = _element["default"].fromProperties(Link, properties, clickHandler);

      return link;
    }
  }]);

  return Link;
}(_element["default"]);

exports["default"] = Link;

_defineProperty(Link, "tagName", "a");

_defineProperty(Link, "ignoredProperties", ["onClick"]);

function defaultIntermediateClickHandler(clickHandler, event, element) {
  var link = element,
      ///
  hrefAttribute = link.getAttribute("href"),
      href = hrefAttribute; ///

  clickHandler.call(element, href, event, element);
}

},{"../element":3}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return _element["default"].fromHTML(Select, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return _element["default"].fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          select = _element["default"].fromProperties(Select, properties, changeHandler);

      return select;
    }
  }]);

  return Select;
}(_element["default"]);

exports["default"] = Select;

_defineProperty(Select, "tagName", "select");

_defineProperty(Select, "ignoredProperties", ["onChange"]);

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var select = element,
      ///
  selectedOptionValue = select.getSelectedOptionValue();
  changeHandler.call(element, selectedOptionValue, event, element);
}

},{"../element":3}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Span = /*#__PURE__*/function (_Element) {
  _inherits(Span, _Element);

  function Span() {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, _getPrototypeOf(Span).apply(this, arguments));
  }

  _createClass(Span, [{
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }], [{
    key: "fromHTML",
    value: function fromHTML(html) {
      return _element["default"].fromHTML(Span, html);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement) {
      return _element["default"].fromDOMElement(Span, domElement);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _element["default"].fromProperties(properties);
    }
  }]);

  return Span;
}(_element["default"]);

exports["default"] = Span;

_defineProperty(Span, "tagName", "span");

},{"../element":3}],11:[function(require,module,exports){
"use strict";

require("./juxtapose");

var _index = require("./index");

///
var body = new _index.Body();
body.prepend(React.createElement("h1", null, "Easy"));

},{"./index":12,"./juxtapose":16}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "constants", {
  enumerable: true,
  get: function get() {
    return _constants["default"];
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _window["default"];
  }
});
Object.defineProperty(exports, "document", {
  enumerable: true,
  get: function get() {
    return _document["default"];
  }
});
Object.defineProperty(exports, "Div", {
  enumerable: true,
  get: function get() {
    return _div["default"];
  }
});
Object.defineProperty(exports, "Span", {
  enumerable: true,
  get: function get() {
    return _span["default"];
  }
});
Object.defineProperty(exports, "Body", {
  enumerable: true,
  get: function get() {
    return _body["default"];
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _link["default"];
  }
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _select["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button["default"];
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _checkbox["default"];
  }
});
Object.defineProperty(exports, "Element", {
  enumerable: true,
  get: function get() {
    return _element["default"];
  }
});
Object.defineProperty(exports, "TextElement", {
  enumerable: true,
  get: function get() {
    return _textElement["default"];
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _input["default"];
  }
});
Object.defineProperty(exports, "Textarea", {
  enumerable: true,
  get: function get() {
    return _textarea["default"];
  }
});
Object.defineProperty(exports, "InputElement", {
  enumerable: true,
  get: function get() {
    return _inputElement["default"];
  }
});
Object.defineProperty(exports, "Bounds", {
  enumerable: true,
  get: function get() {
    return _bounds["default"];
  }
});
Object.defineProperty(exports, "Offset", {
  enumerable: true,
  get: function get() {
    return _offset["default"];
  }
});
Object.defineProperty(exports, "React", {
  enumerable: true,
  get: function get() {
    return _react["default"];
  }
});

var _constants = _interopRequireDefault(require("./constants"));

var _window = _interopRequireDefault(require("./window"));

var _document = _interopRequireDefault(require("./document"));

var _div = _interopRequireDefault(require("./element/div"));

var _span = _interopRequireDefault(require("./element/span"));

var _body = _interopRequireDefault(require("./element/body"));

var _link = _interopRequireDefault(require("./element/link"));

var _select = _interopRequireDefault(require("./element/select"));

var _button = _interopRequireDefault(require("./element/button"));

var _checkbox = _interopRequireDefault(require("./element/checkbox"));

var _element = _interopRequireDefault(require("./element"));

var _textElement = _interopRequireDefault(require("./textElement"));

var _input = _interopRequireDefault(require("./inputElement/input"));

var _textarea = _interopRequireDefault(require("./inputElement/textarea"));

var _inputElement = _interopRequireDefault(require("./inputElement"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _react = _interopRequireDefault(require("./react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./constants":1,"./document":2,"./element":3,"./element/body":4,"./element/button":5,"./element/checkbox":6,"./element/div":7,"./element/link":8,"./element/select":9,"./element/span":10,"./inputElement":13,"./inputElement/input":14,"./inputElement/textarea":15,"./miscellaneous/bounds":17,"./miscellaneous/offset":18,"./react":27,"./textElement":28,"./window":34}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    key: "fromHTML",
    value: function fromHTML(Class, html) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _element["default"].fromHTML.apply(_element["default"], [Class, html].concat(remainingArguments));
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(Class, domElement) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _element["default"].fromDOMElement.apply(_element["default"], [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return _element["default"].fromProperties.apply(_element["default"], [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(_element["default"]);

exports["default"] = InputElement;

_defineProperty(InputElement, "ignoredProperties", ["onChange"]);

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var inputElement = element,
      ///
  value = inputElement.getValue();
  changeHandler.call(element, value, event, element);
}

},{"./element":3}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inputElement = _interopRequireDefault(require("../inputElement"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input = /*#__PURE__*/function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, null, [{
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return _inputElement["default"].fromHTML(Input, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return _inputElement["default"].fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _inputElement["default"].fromProperties(Input, properties);
    }
  }]);

  return Input;
}(_inputElement["default"]);

exports["default"] = Input;

_defineProperty(Input, "tagName", "input");

},{"../inputElement":13}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inputElement = _interopRequireDefault(require("../inputElement"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Textarea = /*#__PURE__*/function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, null, [{
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return _inputElement["default"].fromHTML(Textarea, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return _inputElement["default"].fromDOMElement(Textarea, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _inputElement["default"].fromProperties(Textarea, properties);
    }
  }]);

  return Textarea;
}(_inputElement["default"]);

exports["default"] = Textarea;

_defineProperty(Textarea, "tagName", "textarea");

},{"../inputElement":13}],16:[function(require,module,exports){
"use strict";

var _index = require("./index");

Object.defineProperty(window, "React", {
  get: function get() {
    return _index.React;
  }
});

},{"./index":12}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Bounds;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Offset;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClick = onClick;
exports.offClick = offClick;

function onClick(handler, element) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;
  this.on("click", handler, element, intermediateHandler);
}

function offClick(handler, element) {
  this.off("click", handler, element);
}

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;

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
    return eventListener.eventType === eventType && eventListener.element === element && eventListener.handler === handler;
  });
  return eventListener;
}

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyProperties = applyProperties;
exports.getProperties = getProperties;
exports.getContext = getContext;
exports.assignContext = assignContext;

var _object = require("../utilities/object");

var _array = require("../utilities/array");

var _constants = require("../constants");

var _name = require("../utilities/name");

var _elements = require("../utilities/elements");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function applyProperties() {
  var _this = this;

  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProperties = arguments.length > 1 ? arguments[1] : undefined;
  var ignoredProperties = arguments.length > 2 ? arguments[2] : undefined;
  (0, _object.combine)(properties, defaultProperties);
  var childElements = childElementsFromElementAndProperties(this, properties) || properties.childElements; ///

  (0, _object.prune)(properties, ignoredProperties);
  var svg = this.domElement.namespaceURI === _constants.SVG_NAMESPACE_URI,
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
    var firstArgument = (0, _array.first)(arguments);

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

function childElementsFromElementAndProperties(element, properties) {
  var childElements = null;

  if (typeof element.childElements === "function") {
    childElements = element.childElements(properties);
    childElements = (0, _array.guarantee)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
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
  return svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
}

},{"../constants":1,"../utilities/array":29,"../utilities/elements":31,"../utilities/name":32,"../utilities/object":33}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onKeyUp = onKeyUp;
exports.onKeyDown = onKeyDown;
exports.offKeyUp = offKeyUp;
exports.offKeyDown = offKeyDown;

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

function defaultIntermediateHandler(handler, event, element) {
  var keyCode = event.keyCode;
  handler.call(element, keyCode, event, element);
}

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseUp = onMouseUp;
exports.onMouseDown = onMouseDown;
exports.onMouseOver = onMouseOver;
exports.onMouseOut = onMouseOut;
exports.onMouseMove = onMouseMove;
exports.offMouseUp = offMouseUp;
exports.offMouseDown = offMouseDown;
exports.offMouseOver = offMouseOver;
exports.offMouseOut = offMouseOut;
exports.offMouseMove = offMouseMove;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onResize = onResize;
exports.offResize = offResize;

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
    return resizeObjectLoadHandler(element);
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
      return resizeEventListener(event);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onScroll = onScroll;
exports.offScroll = offScroll;
exports.getScrollTop = getScrollTop;
exports.getScrollLeft = getScrollLeft;
exports.setScrollTop = setScrollTop;
exports.setScrollLeft = setScrollLeft;

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

function defaultIntermediateHandler(handler, event, element) {
  var scrollTop = element.getScrollTop(),
      scrollLeft = element.getScrollLeft();
  handler.call(element, scrollTop, scrollLeft, event, element);
}

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = getState;
exports.setState = setState;
exports.updateState = updateState;

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

function updateState(update) {
  Object.assign(this.state, update);
}

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

var _array = require("./utilities/array");

var _elements = require("./utilities/elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    } else if (isSubclassOf(firstArgument, _element["default"])) {
      var Class = firstArgument; ///

      element = Class.fromProperties(properties);
    } else if (typeof firstArgument === "string") {
      var tagName = firstArgument; ///

      element = _element["default"].fromTagName(tagName, properties);
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
var _default = React;
exports["default"] = _default;

function childElementsFromChildArguments(childArguments) {
  childArguments = (0, _array.flatten)(childArguments); ///

  var childElements = childArguments; ///

  childElements = (0, _elements.removeFalseyElements)(childElements);
  childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
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

},{"./element":3,"./utilities/array":29,"./utilities/elements":31}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextElement = /*#__PURE__*/function () {
  function TextElement(text) {
    _classCallCheck(this, TextElement);

    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  _createClass(TextElement, [{
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
      offset = new _offset["default"](top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = _bounds["default"].fromBoundingClientRect(boundingClientRect);

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

exports["default"] = TextElement;

},{"./miscellaneous/bounds":17,"./miscellaneous/offset":18}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;
exports.splice = splice;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.augment = augment;

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

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domElementFromSelector = domElementFromSelector;
exports.elementsFromDOMElements = elementsFromDOMElements;
exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
exports.domNodeMatchesSelector = domNodeMatchesSelector;
exports.filterDOMNodes = filterDOMNodes;

var _array = require("../utilities/array");

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

  (0, _array.splice)(descendantDOMNodes, start, deleteCount, childDOMNodes);
  childDOMNodes.forEach(function (childDOMNode) {
    return descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
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

},{"../utilities/array":29}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFalseyElements = removeFalseyElements;
exports.replaceStringsWithTextElements = replaceStringsWithTextElements;

var _textElement = _interopRequireDefault(require("../textElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      textElement = new _textElement["default"](text);
      element = textElement; ///
    }

    return element;
  });
  return elements;
}

},{"../textElement":28}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSVGTagName = isSVGTagName;
exports.isSVGAttributeName = isSVGAttributeName;
exports.isHTMLAttributeName = isHTMLAttributeName;

function isSVGTagName(tagName) {
  return svgTagNames.includes(tagName);
}

function isSVGAttributeName(attributeName) {
  return svgAttributeNames.includes(attributeName);
}

function isHTMLAttributeName(attributeName) {
  return htmlAttributeNames.includes(attributeName);
}

var svgTagNames = ["altGlyph", "animate", "animateColor", "animateMotion", "animateTransform", "animation", "audio", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "handler", "hatch", "hatchpath", "hkern", "image", "line", "linearGradient", "listener", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "prefetch", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "tbreak", "text", "textArea", "textPath", "title", "tref", "tspan", "unknown", "use", "video", "view", "vkern"],
    svgAttributeNames = ["accent-height", "accumulate", "additive", "alignment-baseline", "alphabetic", "amplitude", "arabic-form", "ascent", "attributeName", "attributeType", "azimuth", "bandwidth", "baseFrequency", "baseProfile", "baseline-shift", "bbox", "begin", "bias", "by", "calcMode", "cap-height", "clip", "className", "clip-path", "clip-rule", "clipPathUnits", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "contentScriptType", "contentStyleType", "crossorigin", "cursor", "cx", "cy", "d", "defaultAction", "descent", "diffuseConstant", "direction", "display", "divisor", "dominant-baseline", "download", "dur", "dx", "dy", "edgeMode", "editable", "elevation", "enable-background", "end", "event", "exponent", "externalResourcesRequired", "fill", "fill-opacity", "fill-rule", "filter", "filterRes", "filterUnits", "flood-color", "flood-opacity", "focusHighlight", "focusable", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "fr", "from", "fx", "fy", "g1", "g2", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphRef", "gradientTransform", "gradientUnits", "handler", "hanging", "hatchContentUnits", "hatchUnits", "height", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "href", "hreflang", "ideographic", "image-rendering", "in", "in2", "initialVisibility", "intercept", "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letter-spacing", "lighting-color", "limitingConeAngle", "local", "marker-end", "marker-mid", "marker-start", "markerHeight", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "max", "media", "mediaCharacterEncoding", "mediaContentEncodings", "mediaSize", "mediaTime", "method", "min", "mode", "name", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "numOctaves", "observer", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlay", "overline-position", "overline-thickness", "panose-1", "path", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "phase", "pitch", "playbackOrder", "playbackorder", "pointer-events", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "propagate", "r", "radius", "refX", "refY", "rendering-intent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "requiredFonts", "requiredFormats", "restart", "result", "rotate", "rx", "ry", "scale", "seed", "shape-rendering", "side", "slope", "snapshotTime", "spacing", "specularConstant", "specularExponent", "spreadMethod", "src", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "string", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfaceScale", "syncBehavior", "syncBehaviorDefault", "syncMaster", "syncTolerance", "syncToleranceDefault", "systemLanguage", "tableValues", "target", "targetX", "targetY", "text-anchor", "text-decoration", "text-rendering", "textLength", "timelineBegin", "timelinebegin", "title", "to", "transform", "transformBehavior", "type", "u1", "u2", "underline-position", "underline-thickness", "unicode", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "values", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "viewBox", "viewTarget", "visibility", "width", "widths", "word-spacing", "writing-mode", "x", "x-height", "x1", "x2", "xChannelSelector", "y", "y1", "y2", "yChannelSelector", "z", "zoomAndPan"],
    htmlAttributeNames = ["accept", "acceptCharset", "accessKey", "action", "allow", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap"];

},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combine = combine;
exports.prune = prune;

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

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _click = require("./mixins/click");

var _key2 = require("./mixins/key");

var _event = require("./mixins/event");

var _mouse = require("./mixins/mouse");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Window = /*#__PURE__*/function () {
  function Window() {
    _classCallCheck(this, Window);

    _defineProperty(this, "on", _event.on);

    _defineProperty(this, "off", _event.off);

    _defineProperty(this, "onClick", _click.onClick);

    _defineProperty(this, "offClick", _click.offClick);

    _defineProperty(this, "onKeyUp", _key2.onKeyUp);

    _defineProperty(this, "offKeyUp", _key2.offKeyUp);

    _defineProperty(this, "onKeyDown", _key2.onKeyDown);

    _defineProperty(this, "offKeyDown", _key2.offKeyDown);

    _defineProperty(this, "onMouseUp", _mouse.onMouseUp);

    _defineProperty(this, "onMouseDown", _mouse.onMouseDown);

    _defineProperty(this, "onMouseOver", _mouse.onMouseOver);

    _defineProperty(this, "onMouseOut", _mouse.onMouseOut);

    _defineProperty(this, "onMouseMove", _mouse.onMouseMove);

    _defineProperty(this, "offMouseUp", _mouse.offMouseUp);

    _defineProperty(this, "offMouseDown", _mouse.offMouseDown);

    _defineProperty(this, "offMouseOver", _mouse.offMouseOver);

    _defineProperty(this, "offMouseOut", _mouse.offMouseOut);

    _defineProperty(this, "offMouseMove", _mouse.offMouseMove);

    _defineProperty(this, "addEventListener", _event.addEventListener);

    _defineProperty(this, "removeEventListener", _event.removeEventListener);

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

var window = typeof window === "undefined" ? undefined : new Window(); ///

var _default = window;
exports["default"] = _default;

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();
  handler.call(element, width, height, event, element);
}

},{"./mixins/click":19,"./mixins/event":20,"./mixins/key":22,"./mixins/mouse":23}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29uc3RhbnRzLmpzIiwibGliL2RvY3VtZW50LmpzIiwibGliL2VsZW1lbnQuanMiLCJsaWIvZWxlbWVudC9ib2R5LmpzIiwibGliL2VsZW1lbnQvYnV0dG9uLmpzIiwibGliL2VsZW1lbnQvY2hlY2tib3guanMiLCJsaWIvZWxlbWVudC9kaXYuanMiLCJsaWIvZWxlbWVudC9saW5rLmpzIiwibGliL2VsZW1lbnQvc2VsZWN0LmpzIiwibGliL2VsZW1lbnQvc3Bhbi5qcyIsImxpYi9leGFtcGxlLmpzIiwibGliL2luZGV4LmpzIiwibGliL2lucHV0RWxlbWVudC5qcyIsImxpYi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiLCJsaWIvaW5wdXRFbGVtZW50L3RleHRhcmVhLmpzIiwibGliL2p1eHRhcG9zZS5qcyIsImxpYi9taXNjZWxsYW5lb3VzL2JvdW5kcy5qcyIsImxpYi9taXNjZWxsYW5lb3VzL29mZnNldC5qcyIsImxpYi9taXhpbnMvY2xpY2suanMiLCJsaWIvbWl4aW5zL2V2ZW50LmpzIiwibGliL21peGlucy9qc3guanMiLCJsaWIvbWl4aW5zL2tleS5qcyIsImxpYi9taXhpbnMvbW91c2UuanMiLCJsaWIvbWl4aW5zL3Jlc2l6ZS5qcyIsImxpYi9taXhpbnMvc2Nyb2xsLmpzIiwibGliL21peGlucy9zdGF0ZS5qcyIsImxpYi9yZWFjdC5qcyIsImxpYi90ZXh0RWxlbWVudC5qcyIsImxpYi91dGlsaXRpZXMvYXJyYXkuanMiLCJsaWIvdXRpbGl0aWVzL2RvbS5qcyIsImxpYi91dGlsaXRpZXMvZWxlbWVudHMuanMiLCJsaWIvdXRpbGl0aWVzL25hbWUuanMiLCJsaWIvdXRpbGl0aWVzL29iamVjdC5qcyIsImxpYi93aW5kb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7O0FBRU8sSUFBTSxpQkFBaUIsR0FBRyw0QkFBMUI7O0FBQ0EsSUFB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LEdBQUcsUUFBbkI7QUFFQSxXQUFLLEdBQUwsQ0FBUyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLE1BQTlCO0FBQ0Q7Ozs7OztBQUdILElBQU0sTUFBTSxHQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFuQixHQUFrQyxTQUFsQyxHQUE4QyxJQUFJLE1BQUosRUFBN0QsQyxDQUE0RTs7ZUFFN0QsTTs7O0FBRWYsU0FBUyxnQ0FBVCxDQUEwQyxPQUExQyxFQUFtRCxLQUFuRCxFQUEwRCxPQUExRCxFQUFtRTtBQUNqRSxNQUFNLE1BQU0sR0FBRyxPQUFmO0FBQUEsTUFBd0I7QUFDbEIsRUFBQSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVAsRUFEZDtBQUFBLE1BRU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFQLEVBRmY7QUFJQSxFQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsT0FBYixFQUFzQixLQUF0QixFQUE2QixNQUE3QixFQUFxQyxLQUFyQyxFQUE0QyxPQUE1QztBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFX1VSSSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmV4cG9ydCBjb25zdCBMRUZUX01PVVNFX0JVVFRPTiA9IDA7XG5leHBvcnQgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjtcbmV4cG9ydCBjb25zdCBNSURETEVfTU9VU0VfQlVUVE9OID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgTEVGVF9NT1VTRV9CVVRUT04sXG4gIFJJR0hUX01PVVNFX0JVVFRPTixcbiAgTUlERExFX01PVVNFX0JVVFRPTlxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBvbkNsaWNrLCBvZmZDbGljayB9IGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHsgb25LZXlVcCwgb2ZmS2V5VXAsIG9uS2V5RG93biwgb2ZmS2V5RG93biB9IGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCB7IG9uLCBvZmYsIGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCB7IG9uTW91c2VVcCwgb25Nb3VzZURvd24sIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBvbk1vdXNlTW92ZSwgb2ZmTW91c2VVcCwgb2ZmTW91c2VEb3duLCBvZmZNb3VzZU92ZXIsIG9mZk1vdXNlT3V0LCBvZmZNb3VzZU1vdmUgfSBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBvbiA9IG9uO1xuICBvZmYgPSBvZmY7XG5cbiAgb25DbGljayA9IG9uQ2xpY2s7XG4gIG9mZkNsaWNrID0gb2ZmQ2xpY2s7XG5cbiAgb25LZXlVcCA9IG9uS2V5VXA7XG4gIG9mZktleVVwID0gb2ZmS2V5VXA7XG4gIG9uS2V5RG93biA9IG9uS2V5RG93bjtcbiAgb2ZmS2V5RG93biA9IG9mZktleURvd247XG5cbiAgb25Nb3VzZVVwID0gb25Nb3VzZVVwO1xuICBvbk1vdXNlRG93biA9IG9uTW91c2VEb3duO1xuICBvbk1vdXNlT3ZlciA9IG9uTW91c2VPdmVyO1xuICBvbk1vdXNlT3V0ID0gb25Nb3VzZU91dDtcbiAgb25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZTtcbiAgb2ZmTW91c2VVcCA9IG9mZk1vdXNlVXA7XG4gIG9mZk1vdXNlRG93biA9IG9mZk1vdXNlRG93bjtcbiAgb2ZmTW91c2VPdmVyID0gb2ZmTW91c2VPdmVyO1xuICBvZmZNb3VzZU91dCA9IG9mZk1vdXNlT3V0O1xuICBvZmZNb3VzZU1vdmUgPSBvZmZNb3VzZU1vdmU7XG5cbiAgYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxufVxuXG5jb25zdCBkb2N1bWVudCA9ICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2JvdW5kc1wiO1xuXG5pbXBvcnQgeyBjb21iaW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IGZpcnN0LCBhdWdtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZG9tRWxlbWVudEZyb21TZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZG9tXCI7XG5cbmltcG9ydCB7IG9uQ2xpY2ssIG9mZkNsaWNrIH0gZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgeyBvblJlc2l6ZSwgb2ZmUmVzaXplIH0gZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCB1cGRhdGVTdGF0ZSB9IGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IHsgb25LZXlVcCwgb2ZmS2V5VXAsIG9uS2V5RG93biwgb2ZmS2V5RG93biB9IGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCB7IG9uLCBvZmYsIGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCB7IGdldENvbnRleHQsIGdldFByb3BlcnRpZXMsIGFzc2lnbkNvbnRleHQsIGFwcGx5UHJvcGVydGllcyB9IGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCB7IG9uU2Nyb2xsLCBvZmZTY3JvbGwsIGdldFNjcm9sbFRvcCwgZ2V0U2Nyb2xsTGVmdCwgc2V0U2Nyb2xsVG9wLCBzZXRTY3JvbGxMZWZ0IH0gZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IHsgb25Nb3VzZVVwLCBvbk1vdXNlRG93biwgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXQsIG9uTW91c2VNb3ZlLCBvZmZNb3VzZVVwLCBvZmZNb3VzZURvd24sIG9mZk1vdXNlT3Zlciwgb2ZmTW91c2VPdXQsIG9mZk1vdXNlTW92ZSB9IGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgb24gPSBvbjtcbiAgb2ZmID0gb2ZmO1xuXG4gIG9uQ2xpY2sgPSBvbkNsaWNrO1xuICBvZmZDbGljayA9IG9mZkNsaWNrO1xuXG4gIG9uUmVzaXplID0gb25SZXNpemU7XG4gIG9mZlJlc2l6ZSA9IG9mZlJlc2l6ZTtcblxuICBnZXRTdGF0ZSA9IGdldFN0YXRlO1xuICBzZXRTdGF0ZSA9IHNldFN0YXRlO1xuICB1cGRhdGVTdGF0ZSA9IHVwZGF0ZVN0YXRlO1xuXG4gIG9uS2V5VXAgPSBvbktleVVwO1xuICBvZmZLZXlVcCA9IG9mZktleVVwO1xuICBvbktleURvd24gPSBvbktleURvd247XG4gIG9mZktleURvd24gPSBvZmZLZXlEb3duO1xuXG4gIG9uTW91c2VVcCA9IG9uTW91c2VVcDtcbiAgb25Nb3VzZURvd24gPSBvbk1vdXNlRG93bjtcbiAgb25Nb3VzZU92ZXIgPSBvbk1vdXNlT3ZlcjtcbiAgb25Nb3VzZU91dCA9IG9uTW91c2VPdXQ7XG4gIG9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gIG9mZk1vdXNlVXAgPSBvZmZNb3VzZVVwO1xuICBvZmZNb3VzZURvd24gPSBvZmZNb3VzZURvd247XG4gIG9mZk1vdXNlT3ZlciA9IG9mZk1vdXNlT3ZlcjtcbiAgb2ZmTW91c2VPdXQgPSBvZmZNb3VzZU91dDtcbiAgb2ZmTW91c2VNb3ZlID0gb2ZmTW91c2VNb3ZlO1xuXG4gIG9uU2Nyb2xsID0gb25TY3JvbGw7XG4gIG9mZlNjcm9sbCA9IG9mZlNjcm9sbDtcbiAgZ2V0U2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wO1xuICBnZXRTY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsTGVmdDtcbiAgc2V0U2Nyb2xsVG9wID0gc2V0U2Nyb2xsVG9wO1xuICBzZXRTY3JvbGxMZWZ0ID0gc2V0U2Nyb2xsTGVmdDtcblxuICBnZXRDb250ZXh0ID0gZ2V0Q29udGV4dDtcbiAgZ2V0UHJvcGVydGllcyA9IGdldFByb3BlcnRpZXM7XG4gIGFzc2lnbkNvbnRleHQgPSBhc3NpZ25Db250ZXh0O1xuICBhcHBseVByb3BlcnRpZXMgPSBhcHBseVByb3BlcnRpZXM7XG5cbiAgYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwid2lkdGhcIiwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG91dGVyRE9NRWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gb3V0ZXJET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgZWxlbWVudCA9IGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmcm9tVGFnTmFtZShFbGVtZW50LCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0UHJvcGVydGllc1wiKSkge1xuICAgIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJpZ25vcmVkUHJvcGVydGllc1wiKSkge1xuICAgIGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gXCJib2R5XCIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYm9keVwiO1xuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJvZHksIGh0bWwpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQm9keSwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb2R5LCBwcm9wZXJ0aWVzKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub25DbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgc3VwZXIub2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2xpY2tcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBidXR0b24gPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJ1dHRvbiwgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQsXG5cdFx0XHRcdG1vdXNlQnV0dG9uID0gYnV0dG9uO1x0Ly8vXG4gIFxuICBjbGlja0hhbmRsZXIuY2FsbChlbGVtZW50LCBtb3VzZUJ1dHRvbiwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cbiAgXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZihcImNsaWNrXCIsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJjaGVja2VkXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vICAgIFxuICAgICAgICAgIGNoZWNrYm94ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDaGVja2JveCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG4gICAgXG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZWxlbWVudCwgLy8vXG4gICAgICAgIGNoZWNrZWQgPSBjaGVja2JveC5pc0NoZWNrZWQoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIuY2FsbChlbGVtZW50LCBjaGVja2VkLCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKERpdiwgaHRtbCk7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChEaXYsIGRvbUVsZW1lbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRGl2LCBwcm9wZXJ0aWVzKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub24oXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgb2JqZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljaywgLy8vXG4gICAgICAgICAgbGluayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gbGluaztcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgbGluayA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBocmVmQXR0cmlidXRlID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLFxuICAgICAgICBocmVmID0gaHJlZkF0dHJpYnV0ZTsgLy8vXG4gIFxuICBjbGlja0hhbmRsZXIuY2FsbChlbGVtZW50LCBocmVmLCBldmVudCwgZWxlbWVudCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBkb21FbGVtZW50LnZhbHVlOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb25WYWx1ZSwgIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcbiAgICBcbiAgICBkb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IFxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlbGVjdFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIHNlbGVjdCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2VsZWN0LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gc2VsZWN0LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKTtcbiAgXG4gIGNoYW5nZUhhbmRsZXIuY2FsbChlbGVtZW50LCBzZWxlY3RlZE9wdGlvblZhbHVlLCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNwYW4sIGh0bWwpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU3BhbiwgZG9tRWxlbWVudCk7IH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vanV4dGFwb3NlXCI7IC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkucHJlcGVuZChcblxuICAgIDxoMT5cbiAgICAgIEVhc3lcbiAgICA8L2gxPlxuXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aW5kb3cgfSBmcm9tIFwiLi93aW5kb3dcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZG9jdW1lbnQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXYgfSBmcm9tIFwiLi9lbGVtZW50L2RpdlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGFuIH0gZnJvbSBcIi4vZWxlbWVudC9zcGFuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvZHkgfSBmcm9tIFwiLi9lbGVtZW50L2JvZHlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gXCIuL2VsZW1lbnQvbGlua1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWxlY3QgfSBmcm9tIFwiLi9lbGVtZW50L3NlbGVjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9lbGVtZW50L2J1dHRvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja2JveCB9IGZyb20gXCIuL2VsZW1lbnQvY2hlY2tib3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi90ZXh0RWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gXCIuL2lucHV0RWxlbWVudC9pbnB1dFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL2lucHV0RWxlbWVudC90ZXh0YXJlYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dEVsZW1lbnQgfSBmcm9tIFwiLi9pbnB1dEVsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm91bmRzIH0gZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9vZmZzZXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBpc1JlYWRPbmx5KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7IHRoaXMuZG9tRWxlbWVudC5yZWFkT25seSA9IHJlYWRPbmx5OyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNoYW5nZVwiXG4gIF07XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICB2YWx1ZSA9IGlucHV0RWxlbWVudC5nZXRWYWx1ZSgpO1xuICBcbiAgY2hhbmdlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHZhbHVlLCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChJbnB1dCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoSW5wdXQsIHByb3BlcnRpZXMpOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0YXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRhcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBcIlJlYWN0XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3Q7XG4gIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5yaWdodCAtIHRoaXMubGVmdDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmJvdHRvbSAtIHRoaXMudG9wO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuICBcbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNldFJpZ2h0KHJpZ2h0KSB7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgc2hpZnQoaG9yaXpvbnRhbE9mZnNldCwgdmVydGljYWxPZmZzZXQpIHtcbiAgICB0aGlzLnRvcCArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgICB0aGlzLmxlZnQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgICB0aGlzLmJvdHRvbSArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgICB0aGlzLnJpZ2h0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBtb3VzZVRvcClcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwiY2xpY2tcIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZDbGljayhoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwiY2xpY2tcIiwgaGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBwYWdlWSwgcGFnZVgsIGJ1dHRvbiB9ID0gZXZlbnQsXG5cdFx0XHRcdG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGJ1dHRvbjsgLy8vXG4gIFxuICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgbW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24sIGV2ZW50LCBlbGVtZW50KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBudWxsKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFwiIFwiKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoXCIgXCIpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KFwiZXZlbnRMaXN0ZW5lcnNcIikpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMsXG4gICAgICAgIGV2ZW50TGlzdGVuZXIgPSBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG5cbiAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycyxcbiAgICAgICAgZXZlbnRMaXN0ZW5lciA9IGZpbmRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJzLCBldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IGV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmIChldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBpZiAoaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gbnVsbCkge1xuICAgIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCwgZWxlbWVudClcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGV2ZW50VHlwZSxcbiAgICBoYW5kbGVyLFxuICAgIGVsZW1lbnRcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJzLCBldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+ICgoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkgJiYgKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikpKTtcbiAgXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUsIHBydW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGZpcnN0LCBndWFyYW50ZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUsIGlzU1ZHQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzID0ge30sIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHM7ICAvLy9cblxuICBwcnVuZShwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3Qgc3ZnID0gKHRoaXMuZG9tRWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2ZykpIHtcbiAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIHByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgY2hpbGRFbGVtZW50LmFkZFRvKHRoaXMpO1xuICB9KTtcblxuICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICBjb250ZXh0XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgfVxuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xuXG4gIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcbiAgICBuYW1lID0gXCJjbGFzc1wiO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IFwiaHRtbEZvclwiKSB7XG4gICAgbmFtZSA9IFwiZm9yXCI7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICByZXR1cm4gc3ZnID8gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpIDogaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbktleVVwKGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwia2V5dXBcIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbktleURvd24oaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJrZXlkb3duXCIsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmS2V5VXAoaGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcImtleXVwXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZLZXlEb3duKGhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJrZXlkb3duXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG4gIFxuICBoYW5kbGVyLmNhbGwoZWxlbWVudCwga2V5Q29kZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk1vdXNlVXAoaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJtb3VzZXVwXCIsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZURvd24oaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJtb3VzZWRvd25cIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk1vdXNlT3ZlcihoYW5kbGVyLCBlbGVtZW50LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbihcIm1vdXNlb3ZlclwiLCBoYW5kbGVyLCBlbGVtZW50LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2VPdXQoaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJtb3VzZW91dFwiLCBoYW5kbGVyLCBlbGVtZW50LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGhhbmRsZXIsIGVsZW1lbnQsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmTW91c2VVcChoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwibW91c2V1cFwiLCBoYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmTW91c2VEb3duKGhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJtb3VzZWRvd25cIiwgaGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZk1vdXNlT3ZlcihoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwibW91c2VvdmVyXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZNb3VzZU91dChoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwibW91c2VvdXRcIiwgaGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZk1vdXNlTW92ZShoYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIsIGhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgcGFnZVksIHBhZ2VYLCBidXR0b24gfSA9IGV2ZW50LFxuXHRcdFx0XHRtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBidXR0b247IC8vL1xuICBcbiAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCBldmVudCwgZWxlbWVudCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIpIHtcbiAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBmaW5kUmVzaXplRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCk7XG5cbiAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFkZFJlc2l6ZU9iamVjdChlbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50VHlwZSA9IFwicmVzaXplXCI7XG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gXCJyZXNpemVcIjtcblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGZpbmRSZXNpemVFdmVudExpc3RlbmVycyhlbGVtZW50KTtcbiAgXG4gIGlmIChyZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9iamVjdFwiKSxcbiAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBcImFib3V0OmJsYW5rXCIsXG4gICAgICAgIHR5cGUgPSBcInRleHQvaHRtbFwiO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCk7XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGZpbmRSZXNpemVFdmVudExpc3RlbmVycyhlbGVtZW50KTtcblxuICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZXNpemVFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gW107XG4gIFxuICBpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eShcImV2ZW50TGlzdGVuZXJzXCIpKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmV2ZW50TGlzdGVuZXJzOyAgLy8vXG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IFwicmVzaXplXCIpIHtcbiAgICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXI7XG5cbiAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMucHVzaChyZXNpemVFdmVudExpc3RlbmVyKTtcbiAgICAgIH0gICAgICBcbiAgICB9KTtcbiAgfSAgXG4gIFxuICByZXR1cm4gcmVzaXplRXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQsIC8vL1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB3aW5kb3cuZ2V0SGVpZ2h0KCk7XG5cbiAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQsIGV2ZW50LCBlbGVtZW50KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25TY3JvbGwoaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oXCJzY3JvbGxcIiwgaGFuZGxlciwgZWxlbWVudCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZTY3JvbGwoaGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcInNjcm9sbFwiLCBoYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZWxlbWVudC5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuICBcbiAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZSh1cGRhdGUpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB1cGRhdGUpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBmbGF0dGVuKGNoaWxkQXJndW1lbnRzKTsgLy8vXG5cbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50czsgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGxpY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlcyhkb21FbGVtZW50cywgKGRvbUVsZW1lbnQpID0+IChkb21FbGVtZW50Ll9fZWxlbWVudF9fICE9PSB1bmRlZmluZWQpKSxcbiAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IGRvbUVsZW1lbnQuX19lbGVtZW50X18pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMCxcbiAgICAgICAgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuXG4gIHNwbGljZShkZXNjZW5kYW50RE9NTm9kZXMsIHN0YXJ0LCBkZWxldGVDb3VudCwgY2hpbGRET01Ob2Rlcyk7XG5cbiAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzKSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREUgOiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tTm9kZTsgLy8vXG5cbiAgICAgIHJldHVybiBkb21FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNhc2UgTm9kZS5URVhUX05PREUgOiB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBbXSxcbiAgICAgICAgZG9tTm9kZXNMZW5ndGggPSBkb21Ob2Rlcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvbU5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IGRvbU5vZGVzW2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXN0KGRvbU5vZGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZmlsdGVyZWRET01Ob2Rlcy5wdXNoKGRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXRPYmplY3QsIHNvdXJjZU9iamVjdCA9IHt9KSB7XG4gIGNvbnN0IHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2VPYmplY3QpO1xuXG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XSxcbiAgICAgICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZU9iamVjdFtzb3VyY2VLZXldO1xuXG4gICAgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0gPSB0YXJnZXRPYmplY3QuaGFzT3duUHJvcGVydHkoc291cmNlS2V5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0UHJvcGVydHl9ICR7c291cmNlUHJvcGVydHl9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUHJvcGVydHk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgaWYgKHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpKSB7XG4gICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV07XG4gICAgfVxuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBvbkNsaWNrLCBvZmZDbGljayB9IGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHsgb25LZXlVcCwgb2ZmS2V5VXAsIG9uS2V5RG93biwgb2ZmS2V5RG93biB9IGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCB7IG9uLCBvZmYsIGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCB7IG9uTW91c2VVcCwgb25Nb3VzZURvd24sIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBvbk1vdXNlTW92ZSwgb2ZmTW91c2VVcCwgb2ZmTW91c2VEb3duLCBvZmZNb3VzZU92ZXIsIG9mZk1vdXNlT3V0LCBvZmZNb3VzZU1vdmUgfSBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcblxuY2xhc3MgV2luZG93IHtcbiAgb24gPSBvbjtcbiAgb2ZmID0gb2ZmO1xuXG4gIG9uQ2xpY2sgPSBvbkNsaWNrO1xuICBvZmZDbGljayA9IG9mZkNsaWNrO1xuXG4gIG9uS2V5VXAgPSBvbktleVVwO1xuICBvZmZLZXlVcCA9IG9mZktleVVwO1xuICBvbktleURvd24gPSBvbktleURvd247XG4gIG9mZktleURvd24gPSBvZmZLZXlEb3duO1xuXG4gIG9uTW91c2VVcCA9IG9uTW91c2VVcDtcbiAgb25Nb3VzZURvd24gPSBvbk1vdXNlRG93bjtcbiAgb25Nb3VzZU92ZXIgPSBvbk1vdXNlT3ZlcjtcbiAgb25Nb3VzZU91dCA9IG9uTW91c2VPdXQ7XG4gIG9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gIG9mZk1vdXNlVXAgPSBvZmZNb3VzZVVwO1xuICBvZmZNb3VzZURvd24gPSBvZmZNb3VzZURvd247XG4gIG9mZk1vdXNlT3ZlciA9IG9mZk1vdXNlT3ZlcjtcbiAgb2ZmTW91c2VPdXQgPSBvZmZNb3VzZU91dDtcbiAgb2ZmTW91c2VNb3ZlID0gb2ZmTW91c2VNb3ZlO1xuXG4gIGFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuICByZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBldmVudFR5cGVzID0gXCJyZXNpemVcIjtcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9IFwicmVzaXplXCI7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QpO1xuICB9XG59XG5cbmNvbnN0IHdpbmRvdyA9ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3c7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQsIC8vL1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB3aW5kb3cuZ2V0SGVpZ2h0KCk7XG4gIFxuICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgd2lkdGgsIGhlaWdodCwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIl19
