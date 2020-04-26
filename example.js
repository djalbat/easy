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

var _default = typeof document === "undefined" ? undefined : new Document(); ///


exports["default"] = _default;

},{"./mixins/click":17,"./mixins/event":18,"./mixins/key":20,"./mixins/mouse":21}],3:[function(require,module,exports){
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

var _key5 = require("./mixins/key");

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
  function Element(selectorOrDOMElement) {
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

    _defineProperty(this, "onKeyUp", _key5.onKeyUp);

    _defineProperty(this, "offKeyUp", _key5.offKeyUp);

    _defineProperty(this, "onKeyDown", _key5.onKeyDown);

    _defineProperty(this, "offKeyDown", _key5.offKeyDown);

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

    if (typeof selectorOrDOMElement === "string") {
      var selector = selectorOrDOMElement;
      this.domElement = document.querySelector(selector);
    } else {
      var domElement = selectorOrDOMElement; ///

      this.domElement = domElement;
    }

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
    key: "fromTagName",
    value: function fromTagName(tagName, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var element = _fromTagName.apply(void 0, [Element, tagName].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///


      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      var tagName = Class.tagName,
          element = _fromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }]);

  return Element;
}();

exports["default"] = Element;

function _fromTagName(Class, tagName) {
  var domElement = (0, _name2.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    remainingArguments[_key3 - 2] = arguments[_key3];
  }

  return fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
}

function fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    remainingArguments[_key4 - 2] = arguments[_key4];
  }

  remainingArguments.unshift(domElement);
  remainingArguments.unshift(null);
  return new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class].concat(remainingArguments)))();
}

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Class.hasOwnProperty("className")) {
    var className = Class.className;
    Object.assign(defaultProperties, {
      className: className
    });
  }

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

},{"./constants":1,"./miscellaneous/bounds":15,"./miscellaneous/offset":16,"./mixins/click":17,"./mixins/event":18,"./mixins/jsx":19,"./mixins/key":20,"./mixins/mouse":21,"./mixins/resize":22,"./mixins/scroll":23,"./mixins/state":24,"./utilities/array":27,"./utilities/dom":28,"./utilities/name":30,"./utilities/object":31}],4:[function(require,module,exports){
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
    var selectorOrDOMElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, selectorOrDOMElement));
  }

  _createClass(Body, null, [{
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = /*#__PURE__*/function (_Element) {
  _inherits(Button, _Element);

  function Button(selectorOrDOMElement) {
    var _this;

    var clickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, selectorOrDOMElement));

    if (clickHandler !== null) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Button, null, [{
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

  function Checkbox(selectorOrDOMElement) {
    var _this;

    var changeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selectorOrDOMElement));

    _this.check(checked);

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChange",
    value: function onChange(changeHandler) {
      this.on("click", changeHandler);
    } ///

  }, {
    key: "offChange",
    value: function offChange(changeHandler) {
      this.off("click", changeHandler);
    } ///

  }, {
    key: "check",
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.domElement.checked = checked;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      return this.domElement.checked;
    }
  }], [{
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

var Link = /*#__PURE__*/function (_Element) {
  _inherits(Link, _Element);

  function Link(selectorOrDOMElement) {
    var _this;

    var clickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, selectorOrDOMElement));

    if (clickHandler !== null) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Link, null, [{
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

var Select = /*#__PURE__*/function (_Element) {
  _inherits(Select, _Element);

  function Select(selectorOrDOMElement) {
    var _this;

    var changeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Select, [{
    key: "onChange",
    value: function onChange(changeHandler) {
      this.on("change", changeHandler);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler) {
      this.off("change", changeHandler);
    }
  }, {
    key: "getSelectedOptionValue",
    value: function getSelectedOptionValue() {
      var value = this.domElement.value,
          ///
      selectedOptionValue = value; ///

      return selectedOptionValue;
    }
  }, {
    key: "setSelectedOptionByValue",
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue; ///

      this.domElement.value = value;
    }
  }], [{
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

},{"../element":3}],9:[function(require,module,exports){
"use strict";

require("./juxtapose");

var _index = require("./index");

///
var LEFT_MOUSE_BUTTON = _index.constants.LEFT_MOUSE_BUTTON,
    MIDDLE_MOUSE_BUTTON = _index.constants.MIDDLE_MOUSE_BUTTON,
    body = new _index.Body(),
    button = React.createElement(_index.Button, {
  onClick: function onClick(event, element) {
    var button = event.button;
    console.log(button === LEFT_MOUSE_BUTTON);
  }
}, "A button"),
    div = React.createElement("div", {
  onClick: function onClick(event, element) {
    var pageY = event.pageY,
        pageX = event.pageX;
    console.log(pageX, pageY);
  },
  onMouseMove: function onMouseMove(event, element) {
    var pageY = event.pageY,
        pageX = event.pageX;
    console.log(pageX, pageY);
  }
});
button.on("auxclick", function (event, element) {
  var button = event.button;
  console.log(button === MIDDLE_MOUSE_BUTTON);
});
div.onResize(function (event, element) {
  var width = element.getWidth(),
      height = element.getHeight();
  console.log(width, height);
});
body.prepend(React.createElement("article", null, React.createElement("h1", null, "Easy"), React.createElement("br", null), button, React.createElement("br", null), React.createElement(_index.Checkbox, {
  checked: true,
  onChange: function onChange(event, element) {
    console.log(element.isChecked());
  }
}), React.createElement("br", null), React.createElement(_index.Link, {
  href: "http://juxtapose.info",
  onClick: function onClick(event, element) {
    event.preventDefault();
    console.log(element.getAttribute("href"));
  }
}, "A link"), React.createElement("br", null), React.createElement(_index.Select, {
  onChange: function onChange(event, element) {
    console.log(element.getSelectedOptionValue());
  }
}, React.createElement("option", {
  value: "1"
}, "one"), React.createElement("option", {
  value: "2"
}, "two"), React.createElement("option", {
  value: "3"
}, "three")), React.createElement("br", null), React.createElement(_index.Input, {
  type: "password",
  onChange: function onChange(event, element) {
    console.log(element.getValue());
  },
  onKeyUp: function onKeyUp(event, element) {
    var keyCode = event.keyCode;
    console.log(keyCode);
  }
}), React.createElement("br", null), React.createElement(_index.Textarea, {
  onChange: function onChange(event, element) {
    console.log(element.getValue());
  },
  onKeyDown: function onKeyDown(event, element) {
    var keyCode = event.keyCode;
    console.log(keyCode);
  },
  onScroll: function onScroll(event, element) {
    var scrollTop = element.getScrollTop(),
        scrollLeft = element.getScrollLeft();
    console.log(scrollTop, scrollLeft);
  }
}), div));

_index.document.onClick(function (event, element) {
  var screenX = event.screenX,
      screenY = event.screenY;
  console.log(screenX, screenY);
});

_index.window.onClick(function (event, element) {
  var width = _index.window.getWidth(),
      height = _index.window.getHeight();

  console.log(width, height);
});

},{"./index":10,"./juxtapose":14}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Body", {
  enumerable: true,
  get: function get() {
    return _body["default"];
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
Object.defineProperty(exports, "InputElement", {
  enumerable: true,
  get: function get() {
    return _inputElement["default"];
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
Object.defineProperty(exports, "constants", {
  enumerable: true,
  get: function get() {
    return _constants["default"];
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

var _body = _interopRequireDefault(require("./element/body"));

var _button = _interopRequireDefault(require("./element/button"));

var _checkbox = _interopRequireDefault(require("./element/checkbox"));

var _link = _interopRequireDefault(require("./element/link"));

var _select = _interopRequireDefault(require("./element/select"));

var _input = _interopRequireDefault(require("./inputElement/input"));

var _textarea = _interopRequireDefault(require("./inputElement/textarea"));

var _element = _interopRequireDefault(require("./element"));

var _textElement = _interopRequireDefault(require("./textElement"));

var _inputElement = _interopRequireDefault(require("./inputElement"));

var _window = _interopRequireDefault(require("./window"));

var _document = _interopRequireDefault(require("./document"));

var _constants = _interopRequireDefault(require("./constants"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _react = _interopRequireDefault(require("./react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./constants":1,"./document":2,"./element":3,"./element/body":4,"./element/button":5,"./element/checkbox":6,"./element/link":7,"./element/select":8,"./inputElement":11,"./inputElement/input":12,"./inputElement/textarea":13,"./miscellaneous/bounds":15,"./miscellaneous/offset":16,"./react":25,"./textElement":26,"./window":32}],11:[function(require,module,exports){
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

  function InputElement(selectorOrDOMElement) {
    var _this;

    var changeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, InputElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputElement).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
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
      this.on("change", changeHandler);
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
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _element["default"].fromProperties.apply(_element["default"], [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(_element["default"]);

exports["default"] = InputElement;

_defineProperty(InputElement, "ignoredProperties", ["onChange"]);

},{"./element":3}],12:[function(require,module,exports){
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
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _inputElement["default"].fromProperties(Input, properties);
    }
  }]);

  return Input;
}(_inputElement["default"]);

exports["default"] = Input;

_defineProperty(Input, "tagName", "input");

},{"../inputElement":11}],13:[function(require,module,exports){
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
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _inputElement["default"].fromProperties(Textarea, properties);
    }
  }]);

  return Textarea;
}(_inputElement["default"]);

exports["default"] = Textarea;

_defineProperty(Textarea, "tagName", "textarea");

},{"../inputElement":11}],14:[function(require,module,exports){
"use strict";

var _index = require("./index");

Object.defineProperty(window, "React", {
  get: function get() {
    return _index.React;
  }
});

},{"./index":10}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClick = onClick;
exports.offClick = offClick;

function onClick(clickHandler) {
  this.on("click", clickHandler);
}

function offClick(clickHandler) {
  this.off("click", clickHandler);
}

},{}],18:[function(require,module,exports){
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

  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach(function (eventType) {
    var eventListener = _this.addEventListener(eventType, handler);

    _this.domElement.addEventListener(eventType, eventListener);
  });
}

function off(eventTypes, handler) {
  var _this2 = this;

  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach(function (eventType) {
    var eventListener = _this2.removeEventListener(eventType, handler);

    _this2.domElement.removeEventListener(eventType, eventListener);
  });
}

function addEventListener(eventType, handler) {
  if (!this.hasOwnProperty("eventListeners")) {
    this.eventListeners = [];
  }

  var eventListeners = this.eventListeners,
      eventListener = createEventListener(eventType, handler, this);
  eventListeners.push(eventListener);
  return eventListener;
}

function removeEventListener(eventType, handler) {
  var _this3 = this;

  var eventListeners = this.eventListeners,
      eventListener = eventListeners.find(function (eventListener) {
    return eventListener.eventType === eventType && eventListener.handler === handler && eventListener.element === _this3;
  }),
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

function createEventListener(eventType, handler, element) {
  var eventListener;

  eventListener = function eventListener(event) {
    handler.call(element, event, element);
  };

  Object.assign(eventListener, {
    eventType: eventType,
    handler: handler,
    element: element
  });
  return eventListener;
}

},{}],19:[function(require,module,exports){
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

},{"../constants":1,"../utilities/array":27,"../utilities/elements":29,"../utilities/name":30,"../utilities/object":31}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onKeyUp = onKeyUp;
exports.offKeyUp = offKeyUp;
exports.onKeyDown = onKeyDown;
exports.offKeyDown = offKeyDown;

function onKeyUp(keyUpHandler) {
  this.on("keyup", keyUpHandler);
}

function offKeyUp(keyUpHandler) {
  this.off("keyup", keyUpHandler);
}

function onKeyDown(keyDownHandler) {
  this.on("keydown", keyDownHandler);
}

function offKeyDown(keyDownHandler) {
  this.off("keydown", keyDownHandler);
}

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseUp = onMouseUp;
exports.offMouseUp = offMouseUp;
exports.onMouseOut = onMouseOut;
exports.offMouseOut = offMouseOut;
exports.onMouseDown = onMouseDown;
exports.offMouseDown = offMouseDown;
exports.onMouseOver = onMouseOver;
exports.offMouseOver = offMouseOver;
exports.onMouseMove = onMouseMove;
exports.offMouseMove = offMouseMove;

function onMouseUp(mouseUpHandler) {
  this.on("mouseup", mouseUpHandler);
}

function offMouseUp(mouseUpHandler) {
  this.off("mouseup", mouseUpHandler);
}

function onMouseOut(mouseOutHandler) {
  this.on("mouseout", mouseOutHandler);
}

function offMouseOut(mouseOutHandler) {
  this.off("mouseout", mouseOutHandler);
}

function onMouseDown(mouseDownHandler) {
  this.on("mousedown", mouseDownHandler);
}

function offMouseDown(mouseDownHandler) {
  this.off("mousedown", mouseDownHandler);
}

function onMouseOver(mouseOverHandler) {
  this.on("mouseover", mouseOverHandler);
}

function offMouseOver(mouseOverHandler) {
  this.off("mouseover", mouseOverHandler);
}

function onMouseMove(mouseMoveHandler) {
  this.on("mousemove", mouseMoveHandler);
}

function offMouseMove(mouseMoveHandler) {
  this.off("mousemove", mouseMoveHandler);
}

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onResize = onResize;
exports.offResize = offResize;

function onResize(resizeHandler) {
  var resizeEventListeners = findResizeEventListeners(this);

  if (resizeEventListeners.length === 0) {
    addResizeObject(this);
  }

  this.addEventListener("resize", resizeHandler);
}

function offResize(resizeHandler) {
  this.removeEventListener("resize", resizeHandler);
  var resizeEventListeners = findResizeEventListeners(this);

  if (resizeEventListeners.length === 0) {
    removeResizeObject(this);
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

},{}],23:[function(require,module,exports){
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

function onScroll(scrollHandler) {
  this.on("scroll", scrollHandler);
}

function offScroll(scrollHandler) {
  this.off("scroll", scrollHandler);
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{"./element":3,"./utilities/array":27,"./utilities/elements":29}],26:[function(require,module,exports){
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
      var clientWidth = this.domElement.clientWidth,
          width = clientWidth; ///

      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var clientHeight = this.domElement.clientHeight,
          height = clientHeight; ///

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

},{"./miscellaneous/bounds":15,"./miscellaneous/offset":16}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementsFromDOMElements = elementsFromDOMElements;
exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
exports.domNodeMatchesSelector = domNodeMatchesSelector;
exports.filterDOMNodes = filterDOMNodes;

var _array = require("../utilities/array");

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

},{"../utilities/array":27}],29:[function(require,module,exports){
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

},{"../textElement":26}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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
    value: function onResize(resizeHandler) {
      this.on("resize", resizeHandler);
    }
  }, {
    key: "offResize",
    value: function offResize(resizeHandler) {
      this.off("resize", resizeHandler);
    }
  }]);

  return Window;
}();

var _default = typeof window === "undefined" ? undefined : new Window(); ///


exports["default"] = _default;

},{"./mixins/click":17,"./mixins/event":18,"./mixins/key":20,"./mixins/mouse":21}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29uc3RhbnRzLmpzIiwibGliL2RvY3VtZW50LmpzIiwibGliL2VsZW1lbnQuanMiLCJsaWIvZWxlbWVudC9ib2R5LmpzIiwibGliL2VsZW1lbnQvYnV0dG9uLmpzIiwibGliL2VsZW1lbnQvY2hlY2tib3guanMiLCJsaWIvZWxlbWVudC9saW5rLmpzIiwibGliL2VsZW1lbnQvc2VsZWN0LmpzIiwibGliL2V4YW1wbGUuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvaW5wdXRFbGVtZW50LmpzIiwibGliL2lucHV0RWxlbWVudC9pbnB1dC5qcyIsImxpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCJsaWIvanV4dGFwb3NlLmpzIiwibGliL21pc2NlbGxhbmVvdXMvYm91bmRzLmpzIiwibGliL21pc2NlbGxhbmVvdXMvb2Zmc2V0LmpzIiwibGliL21peGlucy9jbGljay5qcyIsImxpYi9taXhpbnMvZXZlbnQuanMiLCJsaWIvbWl4aW5zL2pzeC5qcyIsImxpYi9taXhpbnMva2V5LmpzIiwibGliL21peGlucy9tb3VzZS5qcyIsImxpYi9taXhpbnMvcmVzaXplLmpzIiwibGliL21peGlucy9zY3JvbGwuanMiLCJsaWIvbWl4aW5zL3N0YXRlLmpzIiwibGliL3JlYWN0LmpzIiwibGliL3RleHRFbGVtZW50LmpzIiwibGliL3V0aWxpdGllcy9hcnJheS5qcyIsImxpYi91dGlsaXRpZXMvZG9tLmpzIiwibGliL3V0aWxpdGllcy9lbGVtZW50cy5qcyIsImxpYi91dGlsaXRpZXMvbmFtZS5qcyIsImxpYi91dGlsaXRpZXMvb2JqZWN0LmpzIiwibGliL3dpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7QUFFTyxJQUFNLGlCQUFpQixHQUFHLDRCQUExQjs7QUFDQSxJQUFNLGlCQUFpQixHQUFHLENBQTFCOztBQUNBLElBQU0sa0JBQWtCLEdBQUcs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O0FBQUUsV0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixhQUFuQjtBQUFvQzs7Ozs7O2VBR2pELE9BQU8sTUFBUCxLQUFrQixXQUFuQixHQUFrQyxTQUFsQyxHQUE4QyxJQUFJLE1BQUosRSxFQUFlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFX1VSSSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmV4cG9ydCBjb25zdCBMRUZUX01PVVNFX0JVVFRPTiA9IDA7XG5leHBvcnQgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjtcbmV4cG9ydCBjb25zdCBNSURETEVfTU9VU0VfQlVUVE9OID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBMRUZUX01PVVNFX0JVVFRPTixcbiAgUklHSFRfTU9VU0VfQlVUVE9OLFxuICBNSURETEVfTU9VU0VfQlVUVE9OXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG9uQ2xpY2ssIG9mZkNsaWNrIH0gZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgeyBvbktleVVwLCBvZmZLZXlVcCwgb25LZXlEb3duLCBvZmZLZXlEb3duIH0gZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IHsgb24sIG9mZiwgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IHsgb25Nb3VzZVVwLCBvbk1vdXNlRG93biwgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXQsIG9uTW91c2VNb3ZlLCBvZmZNb3VzZVVwLCBvZmZNb3VzZURvd24sIG9mZk1vdXNlT3Zlciwgb2ZmTW91c2VPdXQsIG9mZk1vdXNlTW92ZSB9IGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIG9uID0gb247XG4gIG9mZiA9IG9mZjtcblxuICBvbkNsaWNrID0gb25DbGljaztcbiAgb2ZmQ2xpY2sgPSBvZmZDbGljaztcblxuICBvbktleVVwID0gb25LZXlVcDtcbiAgb2ZmS2V5VXAgPSBvZmZLZXlVcDtcbiAgb25LZXlEb3duID0gb25LZXlEb3duO1xuICBvZmZLZXlEb3duID0gb2ZmS2V5RG93bjtcblxuICBvbk1vdXNlVXAgPSBvbk1vdXNlVXA7XG4gIG9uTW91c2VEb3duID0gb25Nb3VzZURvd247XG4gIG9uTW91c2VPdmVyID0gb25Nb3VzZU92ZXI7XG4gIG9uTW91c2VPdXQgPSBvbk1vdXNlT3V0O1xuICBvbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlO1xuICBvZmZNb3VzZVVwID0gb2ZmTW91c2VVcDtcbiAgb2ZmTW91c2VEb3duID0gb2ZmTW91c2VEb3duO1xuICBvZmZNb3VzZU92ZXIgPSBvZmZNb3VzZU92ZXI7XG4gIG9mZk1vdXNlT3V0ID0gb2ZmTW91c2VPdXQ7XG4gIG9mZk1vdXNlTW92ZSA9IG9mZk1vdXNlTW92ZTtcblxuICBhZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cywgZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yLCBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9kb21cIjtcblxuaW1wb3J0IHsgb25DbGljaywgb2ZmQ2xpY2sgfSBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCB7IG9uUmVzaXplLCBvZmZSZXNpemUgfSBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVwZGF0ZVN0YXRlIH0gZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgeyBvbktleVVwLCBvZmZLZXlVcCwgb25LZXlEb3duLCBvZmZLZXlEb3duIH0gZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IHsgb24sIG9mZiwgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IHsgZ2V0Q29udGV4dCwgZ2V0UHJvcGVydGllcywgYXNzaWduQ29udGV4dCwgYXBwbHlQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IHsgb25TY3JvbGwsIG9mZlNjcm9sbCwgZ2V0U2Nyb2xsVG9wLCBnZXRTY3JvbGxMZWZ0LCBzZXRTY3JvbGxUb3AsIHNldFNjcm9sbExlZnQgfSBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5pbXBvcnQgeyBvbk1vdXNlVXAsIG9uTW91c2VEb3duLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dCwgb25Nb3VzZU1vdmUsIG9mZk1vdXNlVXAsIG9mZk1vdXNlRG93biwgb2ZmTW91c2VPdmVyLCBvZmZNb3VzZU91dCwgb2ZmTW91c2VNb3ZlIH0gZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBvbiA9IG9uO1xuICBvZmYgPSBvZmY7XG5cbiAgb25DbGljayA9IG9uQ2xpY2s7XG4gIG9mZkNsaWNrID0gb2ZmQ2xpY2s7XG5cbiAgb25SZXNpemUgPSBvblJlc2l6ZTtcbiAgb2ZmUmVzaXplID0gb2ZmUmVzaXplO1xuXG4gIGdldFN0YXRlID0gZ2V0U3RhdGU7XG4gIHNldFN0YXRlID0gc2V0U3RhdGU7XG4gIHVwZGF0ZVN0YXRlID0gdXBkYXRlU3RhdGU7XG5cbiAgb25LZXlVcCA9IG9uS2V5VXA7XG4gIG9mZktleVVwID0gb2ZmS2V5VXA7XG4gIG9uS2V5RG93biA9IG9uS2V5RG93bjtcbiAgb2ZmS2V5RG93biA9IG9mZktleURvd247XG5cbiAgb25Nb3VzZVVwID0gb25Nb3VzZVVwO1xuICBvbk1vdXNlRG93biA9IG9uTW91c2VEb3duO1xuICBvbk1vdXNlT3ZlciA9IG9uTW91c2VPdmVyO1xuICBvbk1vdXNlT3V0ID0gb25Nb3VzZU91dDtcbiAgb25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZTtcbiAgb2ZmTW91c2VVcCA9IG9mZk1vdXNlVXA7XG4gIG9mZk1vdXNlRG93biA9IG9mZk1vdXNlRG93bjtcbiAgb2ZmTW91c2VPdmVyID0gb2ZmTW91c2VPdmVyO1xuICBvZmZNb3VzZU91dCA9IG9mZk1vdXNlT3V0O1xuICBvZmZNb3VzZU1vdmUgPSBvZmZNb3VzZU1vdmU7XG5cbiAgb25TY3JvbGwgPSBvblNjcm9sbDtcbiAgb2ZmU2Nyb2xsID0gb2ZmU2Nyb2xsO1xuICBnZXRTY3JvbGxUb3AgPSBnZXRTY3JvbGxUb3A7XG4gIGdldFNjcm9sbExlZnQgPSBnZXRTY3JvbGxMZWZ0O1xuICBzZXRTY3JvbGxUb3AgPSBzZXRTY3JvbGxUb3A7XG4gIHNldFNjcm9sbExlZnQgPSBzZXRTY3JvbGxMZWZ0O1xuXG4gIGdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuICBnZXRQcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcztcbiAgYXNzaWduQ29udGV4dCA9IGFzc2lnbkNvbnRleHQ7XG4gIGFwcGx5UHJvcGVydGllcyA9IGFwcGx5UHJvcGVydGllcztcblxuICBhZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yT3JET01FbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yT3JET01FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IHNlbGVjdG9yT3JET01FbGVtZW50OyAgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcIndpZHRoXCIsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcImhlaWdodFwiLCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gXCJibG9ja1wiKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBcIm5vbmVcIik7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgZGVzY2VuZGFudERPTU5vZGVzID0gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSksXG4gICAgICAgICAgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIGlmICgocHJldmlvdXNTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihwcmV2aW91c1NpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzU2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZyb21UYWdOYW1lKEVsZW1lbnQsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGVsZW1lbnQgPSBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gQ2xhc3MuY2xhc3NOYW1lO1xuXG4gICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0UHJvcGVydGllcywge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG4gIH1cblxuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0UHJvcGVydGllc1wiKSkge1xuICAgIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJpZ25vcmVkUHJvcGVydGllc1wiKSkge1xuICAgIGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50ID0gXCJib2R5XCIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYm9keVwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJvZHksIHByb3BlcnRpZXMpOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjbGlja0hhbmRsZXIgPSBudWxsKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2xpY2tcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2ssIC8vL1xuICAgICAgICAgIGJ1dHRvbiA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQnV0dG9uLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgY2hhbmdlSGFuZGxlciA9IG51bGwsIGNoZWNrZWQgPSBmYWxzZSkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7IHRoaXMub24oXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyKTsgfSAvLy9cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikgeyB0aGlzLm9mZihcImNsaWNrXCIsIGNoYW5nZUhhbmRsZXIpOyB9IC8vL1xuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7IHRoaXMuZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDsgfVxuXG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcImNoZWNrZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuXG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgY2xpY2tIYW5kbGVyID0gbnVsbCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljaywgLy8vXG4gICAgICAgICAgbGluayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gbGluaztcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgY2hhbmdlSGFuZGxlciA9IG51bGwpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7IHRoaXMub24oXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikgeyB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gdmFsdWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZShzZWxlY3RlZE9wdGlvblZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvblZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzZWxlY3RcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNoYW5nZVwiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2VsZWN0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICAgIFxuICAgIHJldHVybiBzZWxlY3Q7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2p1eHRhcG9zZVwiOyAvLy9cblxuaW1wb3J0IHsgQm9keSwgQnV0dG9uLCBDaGVja2JveCwgTGluaywgU2VsZWN0LCBJbnB1dCwgVGV4dGFyZWEsIHdpbmRvdywgZG9jdW1lbnQsIGNvbnN0YW50cyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IHsgTEVGVF9NT1VTRV9CVVRUT04sIE1JRERMRV9NT1VTRV9CVVRUT04gfSA9IGNvbnN0YW50cyxcbiAgICAgIGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgYnV0dG9uID1cblxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQSBidXR0b25cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICxcbiAgICAgIGRpdiA9XG5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlWSwgcGFnZVggfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG5cbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlWSwgcGFnZVggfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG5cbiAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICA7XG5cbmJ1dHRvbi5vbihcImF1eGNsaWNrXCIsIChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICBjb25zb2xlLmxvZyhidXR0b24gPT09IE1JRERMRV9NT1VTRV9CVVRUT04pO1xuXG59KTtcblxuZGl2Lm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBlbGVtZW50LmdldEhlaWdodCgpO1xuXG4gIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG5cbn0pO1xuXG5ib2R5LnByZXBlbmQoXG5cbiAgPGFydGljbGU+XG4gICAgPGgxPlxuICAgICAgRWFzeVxuICAgIDwvaDE+XG4gICAgPGJyIC8+XG4gICAge2J1dHRvbn1cbiAgICA8YnIgLz5cbiAgICA8Q2hlY2tib3ggY2hlY2tlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmlzQ2hlY2tlZCgpKVxuXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8YnIgLz5cbiAgICA8TGluayBocmVmPVwiaHR0cDovL2p1eHRhcG9zZS5pbmZvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKVxuXG4gICAgICAgICAgfX1cbiAgICA+XG4gICAgICBBIGxpbmtcbiAgICA8L0xpbms+XG4gICAgPGJyIC8+XG4gICAgPFNlbGVjdCBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkpXG5cbiAgICAgICAgICAgIH19XG4gICAgPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5vbmU8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+dHdvPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnRocmVlPC9vcHRpb24+XG4gICAgPC9TZWxlY3Q+XG4gICAgPGJyIC8+XG4gICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuZ2V0VmFsdWUoKSlcblxuICAgICAgICAgICB9fVxuICAgICAgICAgICBvbktleVVwPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlDb2RlKVxuXG4gICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8YnIgLz5cbiAgICA8VGV4dGFyZWEgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5nZXRWYWx1ZSgpKVxuXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5Q29kZSlcblxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblNjcm9sbD17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBlbGVtZW50LmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSBlbGVtZW50LmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcblxuICAgICAgICAgICAgICB9fVxuICAgIC8+XG4gICAge2Rpdn1cbiAgPC9hcnRpY2xlPlxuXG4pO1xuXG5kb2N1bWVudC5vbkNsaWNrKChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gIGNvbnN0IHsgc2NyZWVuWCwgc2NyZWVuWSB9ID0gZXZlbnQ7XG5cbiAgY29uc29sZS5sb2coc2NyZWVuWCwgc2NyZWVuWSlcblxufSk7XG5cbndpbmRvdy5vbkNsaWNrKChldmVudCwgZWxlbWVudCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB3aW5kb3cuZ2V0SGVpZ2h0KCk7XG5cbiAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodClcblxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9keSB9IGZyb20gXCIuL2VsZW1lbnQvYm9keVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9lbGVtZW50L2J1dHRvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja2JveCB9IGZyb20gXCIuL2VsZW1lbnQvY2hlY2tib3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gXCIuL2VsZW1lbnQvbGlua1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWxlY3QgfSBmcm9tIFwiLi9lbGVtZW50L3NlbGVjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gXCIuL2lucHV0RWxlbWVudC9pbnB1dFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL2lucHV0RWxlbWVudC90ZXh0YXJlYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RWxlbWVudCB9IGZyb20gXCIuL3RleHRFbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0RWxlbWVudCB9IGZyb20gXCIuL2lucHV0RWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aW5kb3cgfSBmcm9tIFwiLi93aW5kb3dcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZG9jdW1lbnQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm91bmRzIH0gZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9vZmZzZXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjaGFuZ2VIYW5kbGVyID0gbnVsbCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpIHsgdGhpcy5vbihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7IHRoaXMub2ZmKFwiY2hhbmdlXCIsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhJbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXRFbGVtZW50IGZyb20gXCIuLi9pbnB1dEVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHRhcmVhLCBwcm9wZXJ0aWVzKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgXCJSZWFjdFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMucmlnaHQgLSB0aGlzLmxlZnQ7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRCb3R0b20oYm90dG9tKSB7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5ib3R0b20gKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgbW91c2VUb3ApXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPCBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IG1vdXNlTGVmdCkgICk7XG4gIH1cblxuICBhcmVPdmVybGFwcGluZyhib3VuZHMpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgYm91bmRzLmJvdHRvbSlcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IGJvdW5kcy5yaWdodClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gYm91bmRzLnRvcClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBib3VuZHMubGVmdCkgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCB3aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsIC8vL1xuICAgICAgICAgIHdpbmRvd1Njcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2Zmc2V0IHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25DbGljayhjbGlja0hhbmRsZXIpIHsgdGhpcy5vbihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZkNsaWNrKGNsaWNrSGFuZGxlcikgeyB0aGlzLm9mZihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7IH1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChcIiBcIik7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoXCIgXCIpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KFwiZXZlbnRMaXN0ZW5lcnNcIikpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMsXG4gICAgICAgIGV2ZW50TGlzdGVuZXIgPSBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgdGhpcyk7XG5cbiAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycyxcbiAgICAgICAgZXZlbnRMaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+ICgoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkgJiYgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiYgKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gdGhpcykpKSxcbiAgICAgICAgaW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAoZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCwgZWxlbWVudClcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBldmVudFR5cGUsXG4gICAgaGFuZGxlcixcbiAgICBlbGVtZW50XG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUsIHBydW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGZpcnN0LCBndWFyYW50ZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUsIGlzU1ZHQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzID0ge30sIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHM7ICAvLy9cblxuICBwcnVuZShwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3Qgc3ZnID0gKHRoaXMuZG9tRWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2ZykpIHtcbiAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIHByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgY2hpbGRFbGVtZW50LmFkZFRvKHRoaXMpO1xuICB9KTtcblxuICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICBjb250ZXh0XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgfVxuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xuXG4gIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcbiAgICBuYW1lID0gXCJjbGFzc1wiO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IFwiaHRtbEZvclwiKSB7XG4gICAgbmFtZSA9IFwiZm9yXCI7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICByZXR1cm4gc3ZnID8gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpIDogaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbktleVVwKGtleVVwSGFuZGxlcikgeyB0aGlzLm9uKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmS2V5VXAoa2V5VXBIYW5kbGVyKSB7IHRoaXMub2ZmKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb25LZXlEb3duKGtleURvd25IYW5kbGVyKSB7IHRoaXMub24oXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmS2V5RG93bihrZXlEb3duSGFuZGxlcikgeyB0aGlzLm9mZihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpOyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2VVcChtb3VzZVVwSGFuZGxlcikgeyB0aGlzLm9uKFwibW91c2V1cFwiLCBtb3VzZVVwSGFuZGxlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZk1vdXNlVXAobW91c2VVcEhhbmRsZXIpIHsgdGhpcy5vZmYoXCJtb3VzZXVwXCIsIG1vdXNlVXBIYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIpIHsgdGhpcy5vbihcIm1vdXNlb3V0XCIsIG1vdXNlT3V0SGFuZGxlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlcikgeyB0aGlzLm9mZihcIm1vdXNlb3V0XCIsIG1vdXNlT3V0SGFuZGxlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIpIHsgdGhpcy5vbihcIm1vdXNlZG93blwiLCBtb3VzZURvd25IYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIpIHsgdGhpcy5vZmYoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duSGFuZGxlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIpIHsgdGhpcy5vbihcIm1vdXNlb3ZlclwiLCBtb3VzZU92ZXJIYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIpIHsgdGhpcy5vZmYoXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVySGFuZGxlcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIpIHsgdGhpcy5vbihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVIYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIpIHsgdGhpcy5vZmYoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlSGFuZGxlcik7IH1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25SZXNpemUocmVzaXplSGFuZGxlcikge1xuICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGZpbmRSZXNpemVFdmVudExpc3RlbmVycyh0aGlzKTtcblxuICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgYWRkUmVzaXplT2JqZWN0KHRoaXMpO1xuICB9XG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpO1xuXG4gIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKHRoaXMpO1xuICBcbiAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2JqZWN0XCIpLFxuICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHN0eWxlID0gYGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YCxcbiAgICAgICAgZGF0YSA9IFwiYWJvdXQ6YmxhbmtcIixcbiAgICAgICAgdHlwZSA9IFwidGV4dC9odG1sXCI7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHN0eWxlKTtcbiAgcmVzaXplT2JqZWN0LmRhdGEgPSBkYXRhO1xuICByZXNpemVPYmplY3QudHlwZSA9IHR5cGU7XG5cbiAgZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSAoKSA9PiByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KTtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgcmVzaXplT2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4gcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZFJlc2l6ZUV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgXG4gIGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KFwiZXZlbnRMaXN0ZW5lcnNcIikpIHtcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IGVsZW1lbnQuZXZlbnRMaXN0ZW5lcnM7ICAvLy9cblxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGlmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gXCJyZXNpemVcIikge1xuICAgICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVyID0gZXZlbnRMaXN0ZW5lcjtcblxuICAgICAgICByZXNpemVFdmVudExpc3RlbmVycy5wdXNoKHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgfSAgICAgIFxuICAgIH0pO1xuICB9ICBcbiAgXG4gIHJldHVybiByZXNpemVFdmVudExpc3RlbmVycztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25TY3JvbGwoc2Nyb2xsSGFuZGxlcikgeyB0aGlzLm9uKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlcikgeyB0aGlzLm9mZihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdGUodXBkYXRlKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgdXBkYXRlKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKTtcblxuICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gZmxhdHRlbihjaGlsZEFyZ3VtZW50cyk7IC8vL1xuXG4gIGxldCBjaGlsZEVsZW1lbnRzID0gY2hpbGRBcmd1bWVudHM7IC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2JvdW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwbGljZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZG9tRWxlbWVudHMsIChkb21FbGVtZW50KSA9PiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiBkb21FbGVtZW50Ll9fZWxlbWVudF9fKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBzdGFydCA9IC0xLFxuICAgICAgICBkZWxldGVDb3VudCA9IDAsXG4gICAgICAgIGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICBzcGxpY2UoZGVzY2VuZGFudERPTU5vZGVzLCBzdGFydCwgZGVsZXRlQ291bnQsIGNoaWxkRE9NTm9kZXMpO1xuXG4gIGNoaWxkRE9NTm9kZXMuZm9yRWFjaCgoY2hpbGRET01Ob2RlKSA9PiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShjaGlsZERPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcykpO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpKTtcblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBcIipcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VPYmplY3QgPSB7fSkge1xuICBjb25zdCBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlT2JqZWN0KTtcblxuICBzb3VyY2VLZXlzLmZvckVhY2goKHNvdXJjZUtleSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0sXG4gICAgICAgICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2VPYmplY3Rbc291cmNlS2V5XTtcblxuICAgIHRhcmdldE9iamVjdFtzb3VyY2VLZXldID0gdGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFByb3BlcnR5fSAke3NvdXJjZVByb3BlcnR5fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVByb3BlcnR5O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKHRhcmdldE9iamVjdCwgc291cmNlS2V5cykge1xuICBzb3VyY2VLZXlzLmZvckVhY2goKHNvdXJjZUtleSkgPT4ge1xuICAgIGlmICh0YXJnZXRPYmplY3QuaGFzT3duUHJvcGVydHkoc291cmNlS2V5KSkge1xuICAgICAgZGVsZXRlIHRhcmdldE9iamVjdFtzb3VyY2VLZXldO1xuICAgIH1cbiAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb25DbGljaywgb2ZmQ2xpY2sgfSBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCB7IG9uS2V5VXAsIG9mZktleVVwLCBvbktleURvd24sIG9mZktleURvd24gfSBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgeyBvbiwgb2ZmLCBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgeyBvbk1vdXNlVXAsIG9uTW91c2VEb3duLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dCwgb25Nb3VzZU1vdmUsIG9mZk1vdXNlVXAsIG9mZk1vdXNlRG93biwgb2ZmTW91c2VPdmVyLCBvZmZNb3VzZU91dCwgb2ZmTW91c2VNb3ZlIH0gZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIG9uID0gb247XG4gIG9mZiA9IG9mZjtcblxuICBvbkNsaWNrID0gb25DbGljaztcbiAgb2ZmQ2xpY2sgPSBvZmZDbGljaztcblxuICBvbktleVVwID0gb25LZXlVcDtcbiAgb2ZmS2V5VXAgPSBvZmZLZXlVcDtcbiAgb25LZXlEb3duID0gb25LZXlEb3duO1xuICBvZmZLZXlEb3duID0gb2ZmS2V5RG93bjtcblxuICBvbk1vdXNlVXAgPSBvbk1vdXNlVXA7XG4gIG9uTW91c2VEb3duID0gb25Nb3VzZURvd247XG4gIG9uTW91c2VPdmVyID0gb25Nb3VzZU92ZXI7XG4gIG9uTW91c2VPdXQgPSBvbk1vdXNlT3V0O1xuICBvbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlO1xuICBvZmZNb3VzZVVwID0gb2ZmTW91c2VVcDtcbiAgb2ZmTW91c2VEb3duID0gb2ZmTW91c2VEb3duO1xuICBvZmZNb3VzZU92ZXIgPSBvZmZNb3VzZU92ZXI7XG4gIG9mZk1vdXNlT3V0ID0gb2ZmTW91c2VPdXQ7XG4gIG9mZk1vdXNlTW92ZSA9IG9mZk1vdXNlTW92ZTtcblxuICBhZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHsgdGhpcy5vbihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTsgfVxuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7IHRoaXMub2ZmKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIl19
