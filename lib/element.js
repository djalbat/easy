"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _jsx = _interopRequireDefault(require("./mixins/jsx"));

var _key4 = _interopRequireDefault(require("./mixins/key"));

var _click = _interopRequireDefault(require("./mixins/click"));

var _state = _interopRequireDefault(require("./mixins/state"));

var _event = _interopRequireDefault(require("./mixins/event"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

var _resize = _interopRequireDefault(require("./mixins/resize"));

var _scroll = _interopRequireDefault(require("./mixins/scroll"));

var _object = require("./utilities/object");

var _asynchronous = require("./utilities/asynchronous");

var _name2 = require("./utilities/name");

var _array = require("./utilities/array");

var _constants = require("./constants");

var _dom = require("./utilities/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    if (selector) {
      this.domElement = document.querySelector(selector);
      this.domElement.__element__ = this; ///
    }
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
    key: "mount",
    value: function mount(element, done) {
      var _this = this;

      var descendantElements = element.getDescendantElements(),
          elements = [element].concat(_toConsumableArray(descendantElements));
      elements.reverse(); ///

      (0, _asynchronous.forEach)(elements, function (element, next) {
        if (element.willMount) {
          var _done = next; ///

          element.willMount(_done);
          return;
        }

        next();
      }, function () {
        _this.add(element);

        elements.forEach(function (element) {
          return element.didMount && element.didMount();
        }); ///

        done && done();
      });
    }
  }, {
    key: "unmount",
    value: function unmount(element, done) {
      var descendantElements = element.getDescendantElements(),
          elements = [element].concat(_toConsumableArray(descendantElements));
      elements.forEach(function (element) {
        return element.willUnmount && element.willUnmount();
      }); ///

      this.remove(element);
      (0, _asynchronous.forEach)(elements, function (element, next) {
        if (element.willUnmount) {
          var _done2 = next; ///

          element.willUnmount(_done2);
          return;
        }

        next();
      }, function () {
        done && done();
      });
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
      var _this2 = this;

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

          _this2.style(name, value);
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
      var domNode = this.domElement,
          ///
      ascendantDOMNodes = (0, _dom.ascendantDOMNodesFromDOMNode)(domNode),
          ascendantDOMElements = (0, _dom.filterDOMNodesBySelector)(ascendantDOMNodes, selector),
          ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
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

      var Class = Element,
          ///
      element = elementFromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///

      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }, {
    key: "fromClass",
    value: function fromClass(Class, properties) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      var tagName = Class.tagName,
          element = elementFromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);
      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, _jsx["default"]);
Object.assign(Element.prototype, _key4["default"]);
Object.assign(Element.prototype, _click["default"]);
Object.assign(Element.prototype, _state["default"]);
Object.assign(Element.prototype, _event["default"]);
Object.assign(Element.prototype, _mouse["default"]);
Object.assign(Element.prototype, _resize["default"]);
Object.assign(Element.prototype, _scroll["default"]);
var _default = Element;
exports["default"] = _default;

function elementFromTagName(Class, tagName) {
  var _Function$prototype$b;

  for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    remainingArguments[_key3 - 2] = arguments[_key3];
  }

  var selector = null,
      element = new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class, null, selector].concat(remainingArguments)))();
  element.domElement = (0, _name2.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
  element.domElement.__element__ = element; ///

  return element;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJPZmZzZXQiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkb25lIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJyZXZlcnNlIiwibmV4dCIsIndpbGxNb3VudCIsImZvckVhY2giLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImVuYWJsZWQiLCJkaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInNob3dpbmciLCJoaWRkZW4iLCJ1bmRlZmluZWQiLCJodG1sIiwiaW5uZXJIVE1MIiwiY3NzIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImdldFByb3BlcnR5VmFsdWUiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJibHVyIiwiZm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiZG9tTm9kZSIsImRlc2NlbmRhbnRET01Ob2RlcyIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJhc2NlbmRhbnRET01Ob2RlcyIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RWxlbWVudHMiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRE9NTm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsInRhZ05hbWUiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJlbGVtZW50RnJvbVRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyIsImFzc2lnbiIsInByb3RvdHlwZSIsImpzeE1peGlucyIsImtleU1peGlucyIsImNsaWNrTWl4aW5zIiwic3RhdGVNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIiwicmVzaXplTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwiRnVuY3Rpb24iLCJiaW5kIiwiY2FsbCIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5Iiwic3VwZXJDbGFzcyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPO0FBQ0osbUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsUUFBSUEsUUFBSixFQUFjO0FBQ1osV0FBS0MsVUFBTCxHQUFrQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCSCxRQUF2QixDQUFsQjtBQUVBLFdBQUtDLFVBQUwsQ0FBZ0JHLFdBQWhCLEdBQThCLElBQTlCLENBSFksQ0FHd0I7QUFDckM7QUFDRjs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0gsVUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNSSxHQUFHLEdBQUcsS0FBS0osVUFBTCxDQUFnQkssU0FBNUI7QUFBQSxVQUF3QztBQUNsQ0MsTUFBQUEsSUFBSSxHQUFHLEtBQUtOLFVBQUwsQ0FBZ0JPLFVBRDdCO0FBQUEsVUFDMEM7QUFDcENDLE1BQUFBLE1BQU0sR0FBRyxJQUFJQyxrQkFBSixDQUFXTCxHQUFYLEVBQWdCRSxJQUFoQixDQUZmO0FBSUEsYUFBT0UsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNRSxrQkFBa0IsR0FBRyxLQUFLVixVQUFMLENBQWdCVyxxQkFBaEIsRUFBM0I7QUFBQSxVQUNNQyxNQUFNLEdBQUdDLG1CQUFPQyxzQkFBUCxDQUE4Qkosa0JBQTlCLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7K0JBRThCO0FBQUEsVUFBdEJHLGFBQXNCLHVFQUFOLElBQU07QUFDN0IsVUFB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RCxFQUFhdEIsaUJBQWIsQ0FBMUI7QUFDRDs7QUFFRCxTQUFPQSxpQkFBUDtBQUNEOztBQUVELFNBQVNJLDBCQUFULENBQW9DTixLQUFwQyxFQUFtRTtBQUFBLE1BQXhCRyxpQkFBd0IsdUVBQUosRUFBSTs7QUFDakUsTUFBSUgsS0FBSyxDQUFDdUIsY0FBTixDQUFxQixtQkFBckIsQ0FBSixFQUErQztBQUM3Qyx3QkFBUXBCLGlCQUFSLEVBQTJCSCxLQUFLLENBQUNHLGlCQUFqQyxFQUFvRCxVQUFDdUIsZUFBRDtBQUFBLGFBQXFCLENBQUN2QixpQkFBaUIsQ0FBQ3dCLFFBQWxCLENBQTJCRCxlQUEzQixDQUF0QjtBQUFBLEtBQXBEO0FBQ0Q7O0FBRUQsTUFBTUYsVUFBVSxHQUFHcEQsTUFBTSxDQUFDcUQsY0FBUCxDQUFzQnpCLEtBQXRCLENBQW5COztBQUVBLE1BQUl3QixVQUFVLEtBQUssSUFBbkIsRUFBeUI7QUFDdkJsQixJQUFBQSwwQkFBMEIsQ0FBQ2tCLFVBQUQsRUFBYXJCLGlCQUFiLENBQTFCO0FBQ0Q7O0FBRUQsU0FBT0EsaUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCJcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcIndpZHRoXCIsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcImhlaWdodFwiLCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQsIGRvbmUpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICBlbGVtZW50cy5yZXZlcnNlKCk7IC8vL1xuXG4gICAgZm9yRWFjaChlbGVtZW50cywgKGVsZW1lbnQsIG5leHQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LndpbGxNb3VudCkge1xuICAgICAgICBjb25zdCBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQud2lsbE1vdW50KGRvbmUpO1xuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBuZXh0KCk7XG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmRpZE1vdW50ICYmIGVsZW1lbnQuZGlkTW91bnQoKSkpOyAgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50LCBkb25lKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuXG4gICAgZm9yRWFjaChlbGVtZW50cywgKGVsZW1lbnQsIG5leHQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LndpbGxVbm1vdW50KSB7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudC53aWxsVW5tb3VudChkb25lKTtcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbmV4dCgpO1xuICAgIH0sICgpID0+IHtcbiAgICAgIGRvbmUgJiYgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBhc2NlbmRhbnRET01Ob2RlcyA9IGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSksXG4gICAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoYXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICAgIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZWRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl19