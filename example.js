(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // lib/offset.js
  var require_offset = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Offset = /* @__PURE__ */ function() {
      function Offset2(top, left) {
        _classCallCheck(this, Offset2);
        this.top = top;
        this.left = left;
      }
      _createClass(Offset2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        }
      ]);
      return Offset2;
    }();
    exports.default = Offset;
  });

  // lib/bounds.js
  var require_bounds = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Bounds = /* @__PURE__ */ function() {
      function Bounds2(top, left, bottom, right) {
        _classCallCheck(this, Bounds2);
        this.top = top;
        this.left = left;
        this.bottom = bottom;
        this.right = right;
      }
      _createClass(Bounds2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        },
        {
          key: "getBottom",
          value: function getBottom() {
            return this.bottom;
          }
        },
        {
          key: "getRight",
          value: function getRight() {
            return this.right;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var width = this.right - this.left;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var height = this.bottom - this.top;
            return height;
          }
        },
        {
          key: "setTop",
          value: function setTop(top) {
            this.top = top;
          }
        },
        {
          key: "setLeft",
          value: function setLeft(left) {
            this.left = left;
          }
        },
        {
          key: "setBottom",
          value: function setBottom(bottom) {
            this.bottom = bottom;
          }
        },
        {
          key: "setRight",
          value: function setRight(right) {
            this.right = right;
          }
        },
        {
          key: "shift",
          value: function shift(horizontalOffset, verticalOffset) {
            this.top += verticalOffset;
            this.left += horizontalOffset;
            this.bottom += verticalOffset;
            this.right += horizontalOffset;
          }
        },
        {
          key: "isOverlappingMouse",
          value: function isOverlappingMouse(mouseTop, mouseLeft) {
            return this.top <= mouseTop && this.left <= mouseLeft && this.right > mouseLeft && this.bottom > mouseTop;
          }
        },
        {
          key: "areOverlapping",
          value: function areOverlapping(bounds) {
            return this.top < bounds.bottom && this.left < bounds.right && this.right > bounds.left && this.bottom > bounds.top;
          }
        }
      ], [
        {
          key: "fromBoundingClientRect",
          value: function fromBoundingClientRect(boundingClientRect) {
            var windowScrollTop = window.pageYOffset, windowScrollLeft = window.pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, right = boundingClientRect.right + windowScrollLeft, bounds = new Bounds2(top, left, bottom, right);
            return bounds;
          }
        },
        {
          key: "fromTopLeftWidthAndHeight",
          value: function fromTopLeftWidthAndHeight(top, left, width, height) {
            var bottom = top + height, right = left + width, bounds = new Bounds2(top, left, bottom, right);
            return bounds;
          }
        }
      ]);
      return Bounds2;
    }();
    exports.default = Bounds;
  });

  // lib/utilities/object.js
  var require_object = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combine = combine;
    exports.prune = prune;
    function combine(targetObject, param) {
      var sourceObject = param === void 0 ? {} : param;
      var sourceKeys = Object.keys(sourceObject);
      sourceKeys.forEach(function(sourceKey) {
        var targetProperty = targetObject[sourceKey], sourceProperty = sourceObject[sourceKey];
        targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? "".concat(targetProperty, " ").concat(sourceProperty) : sourceProperty;
      });
    }
    function prune(targetObject, sourceKeys) {
      sourceKeys.forEach(function(sourceKey) {
        if (targetObject.hasOwnProperty(sourceKey)) {
          delete targetObject[sourceKey];
        }
      });
    }
  });

  // lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.push = push;
    exports.flatten = flatten;
    exports.guarantee = guarantee;
    exports.augment = augment;
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function first(array) {
      return array[0];
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function flatten(array) {
      return array.reduce(function(array1, element) {
        array1 = array1.concat(element);
        return array1;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
      ];
    }
    function augment(array1, array2, test) {
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
  });

  // lib/utilities/name.js
  var require_name = __commonJS((exports) => {
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
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_PROPERTIES = exports.BLOCK = exports.CLICK = exports.SPACE = exports.EMPTY_STRING = exports.BODY = exports.UNDEFINED = exports.MOUSEOUT = exports.DISPLAY = exports.OBJECT = exports.LEFT_MOUSE_BUTTON = exports.CLASS_NAME = exports.RIGHT_MOUSE_BUTTON = exports.TEXT_HTML = exports.CLASS = exports.WIDTH = exports.MIDDLE_MOUSE_BUTTON = exports.WILDCARD = exports.DISABLED = exports.HTML_FOR = exports.ABOUT_BLANK = exports.FUNCTION = exports.HEIGHT = exports.SVG_NAMESPACE_URI = exports.CHANGE = exports.KEYDOWN = exports.default = exports.KEYUP = exports.NONE = exports.MOUSEMOVE = exports.MOUSEDOWN = exports.MOUSEUP = exports.STRING = exports.RESIZE = exports.SCROLL = exports.FOR = exports.MOUSEOVER = exports.BOOLEAN = exports.IGNORED_PROPERTIES = void 0;
    var FOR = "for";
    exports.FOR = FOR;
    var BODY = "body";
    exports.BODY = BODY;
    var NONE = "none";
    exports.NONE = NONE;
    var SPACE = " ";
    exports.SPACE = SPACE;
    var CLASS = "class";
    exports.CLASS = CLASS;
    var CLICK = "click";
    exports.CLICK = CLICK;
    var KEYUP = "keyup";
    exports.KEYUP = KEYUP;
    var WIDTH = "width";
    exports.WIDTH = WIDTH;
    var BLOCK = "block";
    exports.BLOCK = BLOCK;
    var HEIGHT = "height";
    exports.HEIGHT = HEIGHT;
    var OBJECT = "object";
    exports.OBJECT = OBJECT;
    var CHANGE = "change";
    exports.CHANGE = CHANGE;
    var RESIZE = "resize";
    exports.RESIZE = RESIZE;
    var SCROLL = "scroll";
    exports.SCROLL = SCROLL;
    var STRING = "string";
    exports.STRING = STRING;
    var DISPLAY = "display";
    exports.DISPLAY = DISPLAY;
    var KEYDOWN = "keydown";
    exports.KEYDOWN = KEYDOWN;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var MOUSEUP = "mouseup";
    exports.MOUSEUP = MOUSEUP;
    var DISABLED = "disabled";
    exports.DISABLED = DISABLED;
    var FUNCTION = "function";
    exports.FUNCTION = FUNCTION;
    var WILDCARD = "*";
    exports.WILDCARD = WILDCARD;
    var MOUSEOUT = "mouseout";
    exports.MOUSEOUT = MOUSEOUT;
    var HTML_FOR = "htmlFor";
    exports.HTML_FOR = HTML_FOR;
    var UNDEFINED = "undefined";
    exports.UNDEFINED = UNDEFINED;
    var MOUSEOVER = "mouseover";
    exports.MOUSEOVER = MOUSEOVER;
    var MOUSEDOWN = "mousedown";
    exports.MOUSEDOWN = MOUSEDOWN;
    var MOUSEMOVE = "mousemove";
    exports.MOUSEMOVE = MOUSEMOVE;
    var TEXT_HTML = "text/html";
    exports.TEXT_HTML = TEXT_HTML;
    var CLASS_NAME = "className";
    exports.CLASS_NAME = CLASS_NAME;
    var ABOUT_BLANK = "about:blank";
    exports.ABOUT_BLANK = ABOUT_BLANK;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
    exports.SVG_NAMESPACE_URI = SVG_NAMESPACE_URI;
    var DEFAULT_PROPERTIES = "defaultProperties";
    exports.DEFAULT_PROPERTIES = DEFAULT_PROPERTIES;
    var IGNORED_PROPERTIES = "ignoredProperties";
    exports.IGNORED_PROPERTIES = IGNORED_PROPERTIES;
    var LEFT_MOUSE_BUTTON = 0;
    exports.LEFT_MOUSE_BUTTON = LEFT_MOUSE_BUTTON;
    var RIGHT_MOUSE_BUTTON = 2;
    exports.RIGHT_MOUSE_BUTTON = RIGHT_MOUSE_BUTTON;
    var MIDDLE_MOUSE_BUTTON = 1;
    exports.MIDDLE_MOUSE_BUTTON = MIDDLE_MOUSE_BUTTON;
    var _default = {
      LEFT_MOUSE_BUTTON,
      RIGHT_MOUSE_BUTTON,
      MIDDLE_MOUSE_BUTTON
    };
    exports.default = _default;
  });

  // lib/utilities/dom.js
  var require_dom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elementsFromDOMElements = elementsFromDOMElements;
    exports.ascendantDOMNodesFromDOMNode = ascendantDOMNodesFromDOMNode;
    exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
    exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
    exports.domNodeMatchesSelector = domNodeMatchesSelector;
    exports.filterDOMNodes = filterDOMNodes;
    var _array = require_array();
    var _constants = require_constants();
    function elementsFromDOMElements(domElements) {
      var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        return domElement.__element__ !== void 0;
      }), elements = domElementsWithElements.map(function(domElement) {
        return domElement.__element__;
      });
      return elements;
    }
    function ascendantDOMNodesFromDOMNode(domNode, height, param) {
      var ascendantDOMNodes = param === void 0 ? [] : param;
      if (height > 0) {
        var parentDOMNode = domNode.parentElement;
        if (parentDOMNode !== null) {
          ascendantDOMNodes.push(parentDOMNode);
          height--;
          ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
        }
      }
      return ascendantDOMNodes;
    }
    function descendantDOMNodesFromDOMNode(domNode, depth, param) {
      var descendantDOMNodes = param === void 0 ? [] : param;
      if (depth > 0) {
        var childDOMNodes = domNode.childNodes;
        (0, _array).push(descendantDOMNodes, childDOMNodes);
        depth--;
        childDOMNodes.forEach(function(childDOMNode) {
          return descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
      }
      return descendantDOMNodes;
    }
    function filterDOMNodesBySelector(domNodes, selector) {
      var filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
        return domNodeMatchesSelector(domNode, selector);
      });
      return filteredDOMNodes;
    }
    function domNodeMatchesSelector(domNode, selector) {
      var domNodeType = domNode.nodeType;
      switch (domNodeType) {
        case Node.ELEMENT_NODE: {
          var domElement = domNode;
          return domElement.matches(selector);
        }
        case Node.TEXT_NODE: {
          if (selector === _constants.WILDCARD) {
            return true;
          }
        }
      }
      return false;
    }
    function filterDOMNodes(domNodes, test) {
      var filteredDOMNodes = [], domNodesLength = domNodes.length;
      for (var index = 0; index < domNodesLength; index++) {
        var domNode = domNodes[index], result = test(domNode);
        if (result) {
          filteredDOMNodes.push(domNode);
        }
      }
      return filteredDOMNodes;
    }
  });

  // lib/mixins/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array();
    var _constants = require_constants();
    var _dom = require_dom();
    function getParentElement(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;
      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [
            parentDOMElement
          ], parentElements = (0, _dom).elementsFromDOMElements(parentDOMElements), firstParentElement = (0, _array).first(parentElements);
          parentElement = firstParentElement || null;
        }
      }
      return parentElement;
    }
    function getChildElements(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom).filterDOMNodesBySelector(childDOMNodes, selector), childElements = (0, _dom).elementsFromDOMElements(childDOMElements);
      return childElements;
    }
    function getAscendantElements(param, param1) {
      var selector = param === void 0 ? _constants.WILDCARD : param, height = param1 === void 0 ? Infinity : param1;
      var domNode = this.domElement, ascendantDOMNodes = (0, _dom).ascendantDOMNodesFromDOMNode(domNode, height), ascendantDOMElements = (0, _dom).filterDOMNodesBySelector(ascendantDOMNodes, selector), ascendantElements = (0, _dom).elementsFromDOMElements(ascendantDOMElements);
      return ascendantElements;
    }
    function getDescendantElements(param, param1) {
      var selector = param === void 0 ? _constants.WILDCARD : param, depth = param1 === void 0 ? Infinity : param1;
      var domNode = this.domElement, descendantDOMNodes = (0, _dom).descendantDOMNodesFromDOMNode(domNode, depth), descendantDOMElements = (0, _dom).filterDOMNodesBySelector(descendantDOMNodes, selector), descendantElements = (0, _dom).elementsFromDOMElements(descendantDOMElements);
      return descendantElements;
    }
    function getNextSiblingElement(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;
      if (nextSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }
      return nextSiblingElement;
    }
    function getPreviousSiblingElement(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling;
      if (previousSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }
      return previousSiblingElement;
    }
    var elementMixins = {
      getParentElement,
      getChildElements,
      getAscendantElements,
      getDescendantElements,
      getNextSiblingElement,
      getPreviousSiblingElement
    };
    var _default = elementMixins;
    exports.default = _default;
  });

  // lib/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _element = _interopRequireDefault2(require_element());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = /* @__PURE__ */ function() {
      function TextElement2(text) {
        _classCallCheck(this, TextElement2);
        this.domElement = document.createTextNode(text);
        this.domElement.__element__ = this;
      }
      _createClass(TextElement2, [
        {
          key: "getText",
          value: function getText() {
            var nodeValue = this.domElement.nodeValue, text = nodeValue;
            return text;
          }
        },
        {
          key: "setText",
          value: function setText(text) {
            var nodeValue = text;
            this.domElement.nodeValue = nodeValue;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var clientWidth = this.domElement.clientWidth, width = clientWidth;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var clientHeight = this.domElement.clientHeight, height = clientHeight;
            return height;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "remove",
          value: function remove() {
            this.domElement.remove();
          }
        }
      ]);
      return TextElement2;
    }();
    Object.assign(TextElement.prototype, _element.default);
    var _default = TextElement;
    exports.default = _default;
  });

  // lib/utilities/elements.js
  var require_elements = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeFalseyElements = removeFalseyElements;
    exports.replaceStringsWithTextElements = replaceStringsWithTextElements;
    var _textElement = _interopRequireDefault2(require_textElement());
    var _constants = require_constants();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function removeFalseyElements(elements) {
      elements = elements.reduce(function(elements1, element) {
        if (element) {
          elements1.push(element);
        }
        return elements1;
      }, []);
      return elements;
    }
    function replaceStringsWithTextElements(elements) {
      elements = elements.map(function(element) {
        if (_typeof(element) === _constants.STRING) {
          var text = element, textElement = new _textElement.default(text);
          element = textElement;
        }
        return element;
      });
      return elements;
    }
  });

  // lib/mixins/jsx.js
  var require_jsx = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _object = require_object();
    var _array = require_array();
    var _name = require_name();
    var _elements = require_elements();
    var _constants = require_constants();
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function applyProperties(properties, defaultProperties, ignoredProperties) {
      this.properties = properties;
      properties = Object.assign({}, properties);
      (0, _object).combine(properties, defaultProperties);
      var childElements = childElementsFromElement(this) || properties.childElements;
      (0, _object).prune(properties, ignoredProperties);
      var _domElement = this.domElement, namespaceURI = _domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, names = Object.keys(properties);
      names.forEach(function(name) {
        var value = properties[name];
        if (false) {
        } else if (isHandlerName(name)) {
          addHandler(this, name, value);
        } else if (isAttributeName(name, svg)) {
          addAttribute(this, name, value);
        } else {
        }
      }.bind(this));
      var context = {};
      childElements.forEach(function(childElement) {
        updateContext(childElement, context);
        this.add(childElement);
      }.bind(this));
      this.context = context;
    }
    function getProperties() {
      return this.properties;
    }
    function getContext() {
      return this.context;
    }
    function assignContext(names, thenDelete) {
      var argumentsLength = arguments.length;
      if (argumentsLength === 1) {
        var firstArgument = (0, _array).first(arguments);
        if (_typeof(firstArgument) === _constants.BOOLEAN) {
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
      names.forEach(function(name) {
        var value = this.context[name], propertyName = name, descriptor = {
          value
        };
        Object.defineProperty(this, propertyName, descriptor);
        if (thenDelete) {
          delete this.context[name];
        }
      }.bind(this), []);
    }
    var jsxMixins = {
      applyProperties,
      getProperties,
      getContext,
      assignContext
    };
    var _default = jsxMixins;
    exports.default = _default;
    function childElementsFromElement(element) {
      var childElements = null;
      if (_typeof(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array).guarantee(childElements);
        childElements = (0, _elements).removeFalseyElements(childElements);
        childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      }
      return childElements;
    }
    function updateContext(childElement, context) {
      var parentContext = _typeof(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context;
      Object.assign(context, parentContext);
    }
    function addHandler(element, name, value) {
      var eventType = name.substr(2).toLowerCase(), handler = value;
      element.on(eventType, handler);
    }
    function addAttribute(element, name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if (_typeof(value) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          element.domElement[name][key] = value[key];
        });
      } else if (_typeof(value) === _constants.BOOLEAN) {
        if (value) {
          value = name;
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
      return svg ? (0, _name).isSVGAttributeName(name) : (0, _name).isHTMLAttributeName(name);
    }
  });

  // lib/mixins/key.js
  var require_key = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onKeyUp(keyUpHandler, element) {
      this.on(_constants.KEYUP, keyUpHandler, element);
    }
    function offKeyUp(keyUpHandler, element) {
      this.off(_constants.KEYUP, keyUpHandler, element);
    }
    function onKeyDown(keyDownHandler, element) {
      this.on(_constants.KEYDOWN, keyDownHandler, element);
    }
    function offKeyDown(keyDownHandler, element) {
      this.off(_constants.KEYDOWN, keyDownHandler, element);
    }
    var keyMixins = {
      onKeyUp,
      offKeyUp,
      onKeyDown,
      offKeyDown
    };
    var _default = keyMixins;
    exports.default = _default;
  });

  // lib/mixins/click.js
  var require_click = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onClick(clickHandler, element) {
      this.on(_constants.CLICK, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.off(_constants.CLICK, clickHandler, element);
    }
    var clickMixins = {
      onClick,
      offClick
    };
    var _default = clickMixins;
    exports.default = _default;
  });

  // lib/mixins/state.js
  var require_state = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function getState() {
      return this.state;
    }
    function setState(state) {
      this.state = state;
    }
    function updateState(state) {
      Object.assign(this.state, state);
    }
    var stateMixins = {
      getState,
      setState,
      updateState
    };
    var _default = stateMixins;
    exports.default = _default;
  });

  // lib/mixins/resize.js
  var require_resize = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.onResize = onResize;
    exports.offResize = offResize;
    exports.default = void 0;
    var _constants = require_constants();
    function onResize(resizeHandler, element) {
      this.on(_constants.RESIZE, resizeHandler, element);
    }
    function offResize(resizeHandler, element) {
      this.off(_constants.RESIZE, resizeHandler, element);
    }
    function addResizeObject() {
      var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _constants.TEXT_HTML;
      resizeObject.setAttribute("style", style);
      resizeObject.data = data;
      resizeObject.type = type;
      this.__resizeObject__ = resizeObject;
      resizeObject.onload = function() {
        return resizeObjectLoadHandler(this);
      }.bind(this);
      this.domElement.appendChild(resizeObject);
    }
    function removeResizeObject() {
      var resizeObject = this.__resizeObject__, objectWindow = resizeObject.contentDocument.defaultView;
      objectWindow.removeEventListener(_constants.RESIZE, resizeEventListener);
      this.domElement.removeChild(resizeObject);
      delete this.__resizeObject__;
    }
    var resizeMixins = {
      onResize,
      offResize,
      addResizeObject,
      removeResizeObject
    };
    var _default = resizeMixins;
    exports.default = _default;
    function resizeObjectLoadHandler(element) {
      var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView;
      resizeObjectWindow.addEventListener(_constants.RESIZE, function(event) {
        var resizeEventListeners = element.findEventListeners(_constants.RESIZE);
        resizeEventListeners.forEach(function(resizeEventListener2) {
          return resizeEventListener2(event);
        });
      });
    }
  });

  // lib/mixins/event.js
  var require_event = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _resize = require_resize();
    function on(eventTypes, handler, element) {
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _constants.RESIZE) {
          var resizeEventListeners = this.findEventListeners(_constants.RESIZE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            this.addResizeObject();
          }
        }
        var eventListener = this.addEventListener(eventType, handler, element);
        this.domElement.addEventListener(eventType, eventListener);
      }.bind(this));
    }
    function off(eventTypes, handler, element) {
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        var eventListener = this.removeEventListener(eventType, handler, element);
        this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _constants.RESIZE) {
          var resizeEventListeners = this.findEventListeners(_constants.RESIZE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            (0, _resize).removeResizeObject(this);
          }
        }
      }.bind(this));
    }
    function addEventListener(eventType, handler, param) {
      var element = param === void 0 ? this : param;
      if (this.eventListeners === void 0) {
        this.eventListeners = [];
      }
      var eventListener = createEventListener(eventType, handler, element);
      this.eventListeners.push(eventListener);
      return eventListener;
    }
    function removeEventListener(eventType, handler, param) {
      var element = param === void 0 ? this : param;
      var eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
      this.eventListeners.splice(start, deleteCount);
      if (this.eventListeners.length === 0) {
        delete this.eventListeners;
      }
      return eventListener;
    }
    function findEventListener(eventType, handler, element) {
      var eventListener = this.eventListeners.find(function(eventListener1) {
        var found = eventListener1.element === element && eventListener1.handler === handler && eventListener1.eventType === eventType;
        if (found) {
          return true;
        }
      });
      return eventListener;
    }
    function findEventListeners(eventType) {
      var eventListeners = [];
      if (this.eventListeners !== void 0) {
        this.eventListeners.forEach(function(eventListener) {
          var found = eventListener.eventType === eventType;
          if (found) {
            eventListeners.push(eventListener);
          }
        });
      }
      return eventListeners;
    }
    function createEventListener(eventType, handler, element) {
      var eventListener;
      eventListener = function(event) {
        handler.call(element, event, element);
      };
      Object.assign(eventListener, {
        element,
        handler,
        eventType
      });
      return eventListener;
    }
    var eventMixins = {
      on,
      off,
      addEventListener,
      removeEventListener,
      findEventListener,
      findEventListeners
    };
    var _default = eventMixins;
    exports.default = _default;
  });

  // lib/mixins/mouse.js
  var require_mouse = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onMouseUp(mouseUpHandler, element) {
      this.on(_constants.MOUSEUP, mouseUpHandler, element);
    }
    function offMouseUp(mouseUpHandler, element) {
      this.off(_constants.MOUSEUP, mouseUpHandler, element);
    }
    function onMouseOut(mouseOutHandler, element) {
      this.on(_constants.MOUSEOUT, mouseOutHandler, element);
    }
    function offMouseOut(mouseOutHandler, element) {
      this.off(_constants.MOUSEOUT, mouseOutHandler, element);
    }
    function onMouseDown(mouseDownHandler, element) {
      this.on(_constants.MOUSEDOWN, mouseDownHandler, element);
    }
    function offMouseDown(mouseDownHandler, element) {
      this.off(_constants.MOUSEDOWN, mouseDownHandler, element);
    }
    function onMouseOver(mouseOverHandler, element) {
      this.on(_constants.MOUSEOVER, mouseOverHandler, element);
    }
    function offMouseOver(mouseOverHandler, element) {
      this.off(_constants.MOUSEOVER, mouseOverHandler, element);
    }
    function onMouseMove(mouseMoveHandler, element) {
      this.on(_constants.MOUSEMOVE, mouseMoveHandler, element);
    }
    function offMouseMove(mouseMoveHandler, element) {
      this.off(_constants.MOUSEMOVE, mouseMoveHandler, element);
    }
    var mouseMixins = {
      onMouseUp,
      offMouseUp,
      onMouseOut,
      offMouseOut,
      onMouseDown,
      offMouseDown,
      onMouseOver,
      offMouseOver,
      onMouseMove,
      offMouseMove
    };
    var _default = mouseMixins;
    exports.default = _default;
  });

  // lib/mixins/scroll.js
  var require_scroll = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onScroll(scrollHandler, element) {
      this.on(_constants.SCROLL, scrollHandler, element);
    }
    function offScroll(scrollHandler, element) {
      this.off(_constants.SCROLL, scrollHandler, element);
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
    var scrollMixins = {
      onScroll,
      offScroll,
      getScrollTop,
      getScrollLeft,
      setScrollTop,
      setScrollLeft
    };
    var _default = scrollMixins;
    exports.default = _default;
  });

  // lib/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _jsx = _interopRequireDefault2(require_jsx());
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _state = _interopRequireDefault2(require_state());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _resize = _interopRequireDefault2(require_resize());
    var _scroll = _interopRequireDefault2(require_scroll());
    var _element = _interopRequireDefault2(require_element());
    var _object = require_object();
    var _name = require_name();
    var _array = require_array();
    var _constants = require_constants();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _bind;
    var Element1 = /* @__PURE__ */ function() {
      function Element12(selector) {
        _classCallCheck(this, Element12);
        if (selector) {
          this.domElement = document.querySelector(selector);
          this.domElement.__element__ = this;
        }
      }
      _createClass(Element12, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth(param) {
            var includeBorder = param === void 0 ? true : param;
            var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
            return width;
          }
        },
        {
          key: "setWidth",
          value: function setWidth(width) {
            width = "".concat(width, "px");
            this.style(_constants.WIDTH, width);
          }
        },
        {
          key: "getHeight",
          value: function getHeight(param) {
            var includeBorder = param === void 0 ? true : param;
            var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
            return height;
          }
        },
        {
          key: "setHeight",
          value: function setHeight(height) {
            height = "".concat(height, "px");
            this.style(_constants.HEIGHT, height);
          }
        },
        {
          key: "hasAttribute",
          value: function hasAttribute(name) {
            return this.domElement.hasAttribute(name);
          }
        },
        {
          key: "getAttribute",
          value: function getAttribute(name) {
            return this.domElement.getAttribute(name);
          }
        },
        {
          key: "setAttribute",
          value: function setAttribute(name, value) {
            this.domElement.setAttribute(name, value);
          }
        },
        {
          key: "clearAttribute",
          value: function clearAttribute(name) {
            this.domElement.removeAttribute(name);
          }
        },
        {
          key: "addAttribute",
          value: function addAttribute(name, value) {
            this.setAttribute(name, value);
          }
        },
        {
          key: "removeAttribute",
          value: function removeAttribute(name) {
            this.clearAttribute(name);
          }
        },
        {
          key: "setClass",
          value: function setClass(className) {
            this.domElement.className = className;
          }
        },
        {
          key: "addClass",
          value: function addClass(className) {
            this.domElement.classList.add(className);
          }
        },
        {
          key: "removeClass",
          value: function removeClass(className) {
            this.domElement.classList.remove(className);
          }
        },
        {
          key: "toggleClass",
          value: function toggleClass(className) {
            this.domElement.classList.toggle(className);
          }
        },
        {
          key: "hasClass",
          value: function hasClass(className) {
            return this.domElement.classList.contains(className);
          }
        },
        {
          key: "clearClasses",
          value: function clearClasses() {
            this.domElement.className = _constants.EMPTY_STRING;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "prepend",
          value: function prepend(element) {
            var domElement = element.domElement, firstChildDOMElement = this.domElement.firstChild;
            this.domElement.insertBefore(domElement, firstChildDOMElement);
          }
        },
        {
          key: "append",
          value: function append(element) {
            var domElement = element.domElement;
            this.domElement.insertBefore(domElement, null);
          }
        },
        {
          key: "add",
          value: function add(element) {
            this.append(element);
          }
        },
        {
          key: "remove",
          value: function remove(element) {
            if (element) {
              var domElement = element.domElement;
              this.domElement.removeChild(domElement);
            } else {
              this.domElement.remove();
            }
          }
        },
        {
          key: "mount",
          value: function mount(element) {
            var descendantElements = element.getDescendantElements(), elements = [
              element
            ].concat(_toConsumableArray(descendantElements));
            elements.reverse();
            this.add(element);
            elements.forEach(function(element1) {
              return element1.didMount && element1.didMount();
            });
          }
        },
        {
          key: "unmount",
          value: function unmount(element) {
            var descendantElements = element.getDescendantElements(), elements = [
              element
            ].concat(_toConsumableArray(descendantElements));
            elements.forEach(function(element1) {
              return element1.willUnmount && element1.willUnmount();
            });
            this.remove(element);
          }
        },
        {
          key: "show",
          value: function show(param) {
            var displayStyle = param === void 0 ? _constants.BLOCK : param;
            this.display(displayStyle);
          }
        },
        {
          key: "hide",
          value: function hide() {
            this.style(_constants.DISPLAY, _constants.NONE);
          }
        },
        {
          key: "display",
          value: function display(display1) {
            this.style(_constants.DISPLAY, display1);
          }
        },
        {
          key: "enable",
          value: function enable() {
            this.clearAttribute(_constants.DISABLED);
          }
        },
        {
          key: "disable",
          value: function disable() {
            this.setAttribute(_constants.DISABLED, _constants.DISABLED);
          }
        },
        {
          key: "isEnabled",
          value: function isEnabled() {
            var disabled = this.isDisabled(), enabled = !disabled;
            return enabled;
          }
        },
        {
          key: "isDisabled",
          value: function isDisabled() {
            var disabled = this.hasAttribute(_constants.DISABLED);
            return disabled;
          }
        },
        {
          key: "isDisplayed",
          value: function isDisplayed() {
            var display = this.css(_constants.DISPLAY), displayed = display !== _constants.NONE;
            return displayed;
          }
        },
        {
          key: "isShowing",
          value: function isShowing() {
            var displayed = this.isDisplayed(), showing = displayed;
            return showing;
          }
        },
        {
          key: "isHidden",
          value: function isHidden() {
            var displayed = this.isDisplayed(), hidden = !displayed;
            return hidden;
          }
        },
        {
          key: "style",
          value: function style(name, value) {
            if (value !== void 0) {
              this.domElement.style[name] = value;
            } else {
              var style1 = this.domElement.style[name];
              return style1;
            }
          }
        },
        {
          key: "html",
          value: function html(html1) {
            if (html1 === void 0) {
              var innerHTML = this.domElement.innerHTML;
              html1 = innerHTML;
              return html1;
            } else {
              var innerHTML = html1;
              this.domElement.innerHTML = innerHTML;
            }
          }
        },
        {
          key: "css",
          value: function css(css1) {
            if (css1 === void 0) {
              var computedStyle = getComputedStyle(this.domElement), css2 = {};
              for (var index = 0; index < computedStyle.length; index++) {
                var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name);
                css2[name] = value;
              }
              return css2;
            } else if (_typeof(css1) === _constants.STRING) {
              var name = css1;
              var computedStyle = getComputedStyle(this.domElement), value = computedStyle.getPropertyValue(name);
              css1 = value;
              return css1;
            } else {
              var names = Object.keys(css1);
              names.forEach(function(name2) {
                var value2 = css1[name2];
                this.style(name2, value2);
              }.bind(this));
            }
          }
        },
        {
          key: "blur",
          value: function blur() {
            this.domElement.blur();
          }
        },
        {
          key: "focus",
          value: function focus() {
            this.domElement.focus();
          }
        },
        {
          key: "hasFocus",
          value: function hasFocus() {
            var focus = document.activeElement === this.domElement;
            return focus;
          }
        }
      ], [
        {
          key: "fromClass",
          value: function fromClass(Class, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
              remainingArguments[_key1 - 2] = arguments[_key1];
            }
            var tagName = Class.tagName, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        },
        {
          key: "fromTagName",
          value: function fromTagName(tagName, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
              remainingArguments[_key1 - 2] = arguments[_key1];
            }
            var Class = Element12, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = {}, ignoredProperties = [];
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        }
      ]);
      return Element12;
    }();
    Object.assign(Element1.prototype, _jsx.default);
    Object.assign(Element1.prototype, _key.default);
    Object.assign(Element1.prototype, _click.default);
    Object.assign(Element1.prototype, _state.default);
    Object.assign(Element1.prototype, _event.default);
    Object.assign(Element1.prototype, _mouse.default);
    Object.assign(Element1.prototype, _resize.default);
    Object.assign(Element1.prototype, _scroll.default);
    Object.assign(Element1.prototype, _element.default);
    var _default = Element1;
    exports.default = _default;
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
        remainingArguments[_key1 - 2] = arguments[_key1];
      }
      var selector = null, element = new ((_bind = Function.prototype.bind).call.apply(_bind, [
        Class,
        null,
        selector
      ].concat(_toConsumableArray(remainingArguments))))();
      element.domElement = (0, _name).isSVGTagName(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      element.domElement.__element__ = element;
      return element;
    }
    function defaultPropertiesFromClass(Class, param) {
      var defaultProperties = param === void 0 ? {} : param;
      if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        (0, _object).combine(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        defaultPropertiesFromClass(superClass, defaultProperties);
      }
      return defaultProperties;
    }
    function ignoredPropertiesFromClass(Class, param) {
      var ignoredProperties = param === void 0 ? [] : param;
      if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        (0, _array).augment(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
          return !ignoredProperties.includes(ignoredProperty);
        });
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        ignoredPropertiesFromClass(superClass, ignoredProperties);
      }
      return ignoredProperties;
    }
  });

  // lib/element/body.js
  var require_body = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _constants = require_constants();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Body = /* @__PURE__ */ function(Element1) {
      _inherits(Body2, Element1);
      function Body2(param) {
        var selector = param === void 0 ? _constants.BODY : param;
        _classCallCheck(this, Body2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Body2).call(this, selector));
      }
      return Body2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Body, "tagName", "body");
    exports.default = Body;
  });

  // lib/element/button.js
  var require_button = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Button = /* @__PURE__ */ function(Element1) {
      _inherits(Button2, Element1);
      function Button2() {
        _classCallCheck(this, Button2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Button2).apply(this, arguments));
      }
      return Button2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Button, "tagName", "button");
    exports.default = Button;
  });

  // lib/mixins/change.js
  var require_change = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onChange(changeHandler, element) {
      this.on(_constants.CHANGE, changeHandler, element);
    }
    function offChange(changeHandler, element) {
      this.off(_constants.CHANGE, changeHandler, element);
    }
    var changeMixins = {
      onChange,
      offChange
    };
    var _default = changeMixins;
    exports.default = _default;
  });

  // lib/element/checkbox.js
  var require_checkbox = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Checkbox = /* @__PURE__ */ function(Element1) {
      _inherits(Checkbox2, Element1);
      function Checkbox2() {
        _classCallCheck(this, Checkbox2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox2).apply(this, arguments));
      }
      _createClass(Checkbox2, [
        {
          key: "isChecked",
          value: function isChecked() {
            return this.domElement.checked;
          }
        },
        {
          key: "check",
          value: function check(param) {
            var checked = param === void 0 ? true : param;
            this.domElement.checked = checked;
          }
        }
      ]);
      return Checkbox2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Checkbox, "tagName", "input");
    _defineProperty(Checkbox, "defaultProperties", {
      type: "checkbox"
    });
    Object.assign(Checkbox.prototype, _change.default);
    var _default = Checkbox;
    exports.default = _default;
  });

  // lib/element/link.js
  var require_link = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Link = /* @__PURE__ */ function(Element1) {
      _inherits(Link2, Element1);
      function Link2() {
        _classCallCheck(this, Link2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Link2).apply(this, arguments));
      }
      _createClass(Link2, [
        {
          key: "getHRef",
          value: function getHRef() {
            return this.getAttribute("href");
          }
        },
        {
          key: "setHRef",
          value: function setHRef(href) {
            return this.setAttribute("href", href);
          }
        }
      ]);
      return Link2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Link, "tagName", "a");
    exports.default = Link;
  });

  // lib/element/select.js
  var require_select = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Select = /* @__PURE__ */ function(Element1) {
      _inherits(Select2, Element1);
      function Select2() {
        _classCallCheck(this, Select2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Select2).apply(this, arguments));
      }
      _createClass(Select2, [
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        }
      ]);
      return Select2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Select, "tagName", "select");
    Object.assign(Select.prototype, _change.default);
    var _default = Select;
    exports.default = _default;
  });

  // lib/inputElement.js
  var require_inputElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    var _constants = require_constants();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var InputElement = /* @__PURE__ */ function(Element1) {
      _inherits(InputElement2, Element1);
      function InputElement2() {
        _classCallCheck(this, InputElement2);
        return _possibleConstructorReturn(this, _getPrototypeOf(InputElement2).apply(this, arguments));
      }
      _createClass(InputElement2, [
        {
          key: "onChange",
          value: function onChange(changeHandler, element) {
            this.on(_constants.CHANGE, changeHandler, element);
          }
        },
        {
          key: "offChange",
          value: function offChange(changeHandler, element) {
            this.off(_constants.CHANGE, changeHandler, element);
          }
        },
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "getSelectionStart",
          value: function getSelectionStart() {
            return this.domElement.selectionStart;
          }
        },
        {
          key: "getSelectionEnd",
          value: function getSelectionEnd() {
            return this.domElement.selectionEnd;
          }
        },
        {
          key: "isReadOnly",
          value: function isReadOnly() {
            return this.domElement.readOnly;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        },
        {
          key: "setSelectionStart",
          value: function setSelectionStart(selectionStart) {
            this.domElement.selectionStart = selectionStart;
          }
        },
        {
          key: "setSelectionEnd",
          value: function setSelectionEnd(selectionEnd) {
            this.domElement.selectionEnd = selectionEnd;
          }
        },
        {
          key: "setReadOnly",
          value: function setReadOnly(readOnly) {
            this.domElement.readOnly = readOnly;
          }
        },
        {
          key: "select",
          value: function select() {
            this.domElement.select();
          }
        }
      ]);
      return InputElement2;
    }(_wrapNativeSuper(_element.default));
    Object.assign(InputElement.prototype, _change.default);
    var _default = InputElement;
    exports.default = _default;
  });

  // lib/inputElement/input.js
  var require_input = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Input = /* @__PURE__ */ function(InputElement) {
      _inherits(Input2, InputElement);
      function Input2() {
        _classCallCheck(this, Input2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Input2).apply(this, arguments));
      }
      return Input2;
    }(_inputElement.default);
    _defineProperty(Input, "tagName", "input");
    exports.default = Input;
  });

  // lib/inputElement/textarea.js
  var require_textarea = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Textarea = /* @__PURE__ */ function(InputElement) {
      _inherits(Textarea2, InputElement);
      function Textarea2() {
        _classCallCheck(this, Textarea2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Textarea2).apply(this, arguments));
      }
      return Textarea2;
    }(_inputElement.default);
    _defineProperty(Textarea, "tagName", "textarea");
    exports.default = Textarea;
  });

  // lib/mixins/window.js
  var require_window = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _resize = require_resize();
    var _default = {
      onResize: _resize.onResize,
      offResize: _resize.offResize
    };
    exports.default = _default;
  });

  // lib/window.js
  var require_window2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _click = _interopRequireDefault2(require_click());
    var _window = _interopRequireDefault2(require_window());
    var _constants = require_constants();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _Object;
    var Window1 = /* @__PURE__ */ function() {
      function Window12() {
        _classCallCheck(this, Window12);
        this.domElement = window;
      }
      _createClass(Window12, [
        {
          key: "assign",
          value: function assign() {
            for (var _len = arguments.length, sources = new Array(_len), _key1 = 0; _key1 < _len; _key1++) {
              sources[_key1] = arguments[_key1];
            }
            var target = this.domElement;
            (_Object = Object).assign.apply(_Object, [
              target
            ].concat(_toConsumableArray(sources)));
          }
        },
        {
          key: "addResizeObject",
          value: function addResizeObject() {
          }
        },
        {
          key: "removeResizeObject",
          value: function removeResizeObject() {
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            return this.domElement.innerWidth;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            return this.domElement.innerHeight;
          }
        },
        {
          key: "getScrollTop",
          value: function getScrollTop() {
            return this.domElement.pageYOffset;
          }
        },
        {
          key: "getScrollLeft",
          value: function getScrollLeft() {
            return this.domElement.pageXOffset;
          }
        }
      ]);
      return Window12;
    }();
    Object.assign(Window1.prototype, _key.default);
    Object.assign(Window1.prototype, _event.default);
    Object.assign(Window1.prototype, _mouse.default);
    Object.assign(Window1.prototype, _click.default);
    Object.assign(Window1.prototype, _window.default);
    var _default = _typeof(window) === _constants.UNDEFINED ? void 0 : new Window1();
    exports.default = _default;
  });

  // lib/document.js
  var require_document = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _constants = require_constants();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Document1 = function Document12() {
      _classCallCheck(this, Document12);
      this.domElement = document;
    };
    var _default = _typeof(document) === _constants.UNDEFINED ? void 0 : new Document1();
    exports.default = _default;
    Object.assign(Document1.prototype, _key.default);
    Object.assign(Document1.prototype, _click.default);
    Object.assign(Document1.prototype, _event.default);
    Object.assign(Document1.prototype, _mouse.default);
  });

  // lib/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _array = require_array();
    var _constants = require_constants();
    var _elements = require_elements();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        var childElements = childElementsFromRemainingArguments(remainingArguments);
        properties = Object.assign({
          childElements
        }, properties);
        if (false) {
        } else if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          element = Class.fromClass(Class, properties);
        } else if (_typeof(firstArgument) === _constants.STRING) {
          var tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if (_typeof(firstArgument) === _constants.FUNCTION) {
          var elementFunction = firstArgument;
          element = elementFunction(properties);
        }
      }
      return element;
    }
    var React2 = {
      createElement
    };
    var _default = React2;
    exports.default = _default;
    function childElementsFromRemainingArguments(remainingArguments) {
      remainingArguments = (0, _array).flatten(remainingArguments);
      var childElements = remainingArguments;
      childElements = (0, _elements).removeFalseyElements(childElements);
      childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      return childElements;
    }
    function isSubclassOf(argument, Class) {
      var typeOf = false;
      if (argument.name === Class.name) {
        typeOf = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument) {
          typeOf = isSubclassOf(argument, Class);
        }
      }
      return typeOf;
    }
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _body = _interopRequireDefault2(require_body());
    var _button = _interopRequireDefault2(require_button());
    var _checkbox = _interopRequireDefault2(require_checkbox());
    var _link = _interopRequireDefault2(require_link());
    var _select = _interopRequireDefault2(require_select());
    var _input = _interopRequireDefault2(require_input());
    var _textarea = _interopRequireDefault2(require_textarea());
    var _element = _interopRequireDefault2(require_element2());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _inputElement = _interopRequireDefault2(require_inputElement());
    var _window = _interopRequireDefault2(require_window2());
    var _document = _interopRequireDefault2(require_document());
    var _constants = _interopRequireDefault2(require_constants());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _offset = _interopRequireDefault2(require_offset());
    var _react = _interopRequireDefault2(require_react());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "Body", {
      enumerable: true,
      get: function() {
        return _body.default;
      }
    });
    Object.defineProperty(exports, "Button", {
      enumerable: true,
      get: function() {
        return _button.default;
      }
    });
    Object.defineProperty(exports, "Checkbox", {
      enumerable: true,
      get: function() {
        return _checkbox.default;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return _link.default;
      }
    });
    Object.defineProperty(exports, "Select", {
      enumerable: true,
      get: function() {
        return _select.default;
      }
    });
    Object.defineProperty(exports, "Input", {
      enumerable: true,
      get: function() {
        return _input.default;
      }
    });
    Object.defineProperty(exports, "Textarea", {
      enumerable: true,
      get: function() {
        return _textarea.default;
      }
    });
    Object.defineProperty(exports, "Element", {
      enumerable: true,
      get: function() {
        return _element.default;
      }
    });
    Object.defineProperty(exports, "TextElement", {
      enumerable: true,
      get: function() {
        return _textElement.default;
      }
    });
    Object.defineProperty(exports, "InputElement", {
      enumerable: true,
      get: function() {
        return _inputElement.default;
      }
    });
    Object.defineProperty(exports, "window", {
      enumerable: true,
      get: function() {
        return _window.default;
      }
    });
    Object.defineProperty(exports, "document", {
      enumerable: true,
      get: function() {
        return _document.default;
      }
    });
    Object.defineProperty(exports, "constants", {
      enumerable: true,
      get: function() {
        return _constants.default;
      }
    });
    Object.defineProperty(exports, "Bounds", {
      enumerable: true,
      get: function() {
        return _bounds.default;
      }
    });
    Object.defineProperty(exports, "Offset", {
      enumerable: true,
      get: function() {
        return _offset.default;
      }
    });
    Object.defineProperty(exports, "React", {
      enumerable: true,
      get: function() {
        return _react.default;
      }
    });
  });

  // lib/example/preamble.js
  var require_preamble = __commonJS(() => {
    "use strict";
    var _index2 = require_lib();
    _index2.window.assign({
      React: _index2.React
    });
  });

  // lib/example/view.js
  var require_view = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index2 = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var LEFT_MOUSE_BUTTON = _index2.constants.LEFT_MOUSE_BUTTON;
    var View = function(properties) {
      return React.createElement("div", {
        className: "view"
      }, /* @__PURE__ */ React.createElement(_index2.Checkbox, {
        checked: true,
        onChange: function(event, element) {
          console.log("Changed");
        }
      }), /* @__PURE__ */ React.createElement(_index2.Textarea, {
        onChange: function(event, element) {
          console.log("change");
        },
        onScroll: function onScroll(event, element) {
          var scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
          console.log(scrollTop, scrollLeft);
        }
      }), /* @__PURE__ */ React.createElement(_index2.Button, {
        onClick: function(event, element) {
          var button = event.button;
          console.log(button === LEFT_MOUSE_BUTTON);
        }
      }, "Submit"), /* @__PURE__ */ React.createElement(Div, null));
    };
    var _default = View;
    exports.default = _default;
    var Div = /* @__PURE__ */ function(Element1) {
      _inherits(Div2, Element1);
      function Div2() {
        _classCallCheck(this, Div2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Div2).apply(this, arguments));
      }
      _createClass(Div2, [
        {
          key: "resizeHandler",
          value: function resizeHandler(event, element) {
            var width = this.getWidth(), height = this.getHeight();
            console.log(width, height);
          }
        },
        {
          key: "mouseMoveHandler",
          value: function mouseMoveHandler(event, element) {
            var pageX = event.pageX, pageY = event.pageY;
            console.log(pageX, pageY);
          }
        },
        {
          key: "didMount",
          value: function didMount() {
            this.onResize(this.resizeHandler, this);
            this.onMouseMove(this.mouseMoveHandler, this);
          }
        },
        {
          key: "willUnmount",
          value: function willUnmount() {
            this.offMouseMove(this.mouseMoveHandler, this);
            this.offResize(this.resizeHandler, this);
          }
        },
        {
          key: "childElements",
          value: function childElements() {
            return /* @__PURE__ */ React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers.");
          }
        }
      ]);
      return Div2;
    }(_wrapNativeSuper(_index2.Element));
    _defineProperty(Div, "tagName", "div");
  });

  // lib/example.js
  "use strict";
  require_preamble();
  var _index = require_lib();
  var _view = _interopRequireDefault(require_view());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var body = new _index.Body();
  body.mount(/* @__PURE__ */ React.createElement(_view.default, null));
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL29mZnNldC5qcyIsICJzcmMvYm91bmRzLmpzIiwgInNyYy91dGlsaXRpZXMvb2JqZWN0LmpzIiwgInNyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAic3JjL3V0aWxpdGllcy9uYW1lLmpzIiwgInNyYy9jb25zdGFudHMuanMiLCAic3JjL3V0aWxpdGllcy9kb20uanMiLCAic3JjL21peGlucy9lbGVtZW50LmpzIiwgInNyYy90ZXh0RWxlbWVudC5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9taXhpbnMvanN4LmpzIiwgInNyYy9taXhpbnMva2V5LmpzIiwgInNyYy9taXhpbnMvY2xpY2suanMiLCAic3JjL21peGlucy9zdGF0ZS5qcyIsICJzcmMvbWl4aW5zL3Jlc2l6ZS5qcyIsICJzcmMvbWl4aW5zL2V2ZW50LmpzIiwgInNyYy9taXhpbnMvbW91c2UuanMiLCAic3JjL21peGlucy9zY3JvbGwuanMiLCAic3JjL2VsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvYm9keS5qcyIsICJzcmMvZWxlbWVudC9idXR0b24uanMiLCAic3JjL21peGlucy9jaGFuZ2UuanMiLCAic3JjL2VsZW1lbnQvY2hlY2tib3guanMiLCAic3JjL2VsZW1lbnQvbGluay5qcyIsICJzcmMvZWxlbWVudC9zZWxlY3QuanMiLCAic3JjL2lucHV0RWxlbWVudC5qcyIsICJzcmMvaW5wdXRFbGVtZW50L2lucHV0LmpzIiwgInNyYy9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCAic3JjL21peGlucy93aW5kb3cuanMiLCAic3JjL3dpbmRvdy5qcyIsICJzcmMvZG9jdW1lbnQuanMiLCAic3JjL3JlYWN0LmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9wcmVhbWJsZS5qcyIsICJzcmMvZXhhbXBsZS92aWV3LmpzIiwgInNyYy9leGFtcGxlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2Zmc2V0IHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSAodGhpcy5yaWdodCAtIHRoaXMubGVmdCk7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMuYm90dG9tIC0gdGhpcy50b3ApO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuICBcbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNldFJpZ2h0KHJpZ2h0KSB7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgc2hpZnQoaG9yaXpvbnRhbE9mZnNldCwgdmVydGljYWxPZmZzZXQpIHtcbiAgICB0aGlzLnRvcCArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgICB0aGlzLmxlZnQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgICB0aGlzLmJvdHRvbSArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgICB0aGlzLnJpZ2h0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPD0gbW91c2VUb3ApXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPD0gbW91c2VMZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXRPYmplY3QsIHNvdXJjZU9iamVjdCA9IHt9KSB7XG4gIGNvbnN0IHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2VPYmplY3QpO1xuXG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XSxcbiAgICAgICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZU9iamVjdFtzb3VyY2VLZXldO1xuXG4gICAgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0gPSB0YXJnZXRPYmplY3QuaGFzT3duUHJvcGVydHkoc291cmNlS2V5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0UHJvcGVydHl9ICR7c291cmNlUHJvcGVydHl9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUHJvcGVydHk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgaWYgKHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpKSB7XG4gICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV07XG4gICAgfVxuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRk9SID0gXCJmb3JcIjtcbmV4cG9ydCBjb25zdCBCT0RZID0gXCJib2R5XCI7XG5leHBvcnQgY29uc3QgTk9ORSA9IFwibm9uZVwiO1xuZXhwb3J0IGNvbnN0IFNQQUNFID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ0xBU1MgPSBcImNsYXNzXCI7XG5leHBvcnQgY29uc3QgQ0xJQ0sgPSBcImNsaWNrXCI7XG5leHBvcnQgY29uc3QgS0VZVVAgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgV0lEVEggPSBcIndpZHRoXCI7XG5leHBvcnQgY29uc3QgQkxPQ0sgPSBcImJsb2NrXCI7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gXCJoZWlnaHRcIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1QgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRSA9IFwiY2hhbmdlXCI7XG5leHBvcnQgY29uc3QgUkVTSVpFID0gXCJyZXNpemVcIjtcbmV4cG9ydCBjb25zdCBTQ1JPTEwgPSBcInNjcm9sbFwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgRElTUExBWSA9IFwiZGlzcGxheVwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV04gPSBcImtleWRvd25cIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUCA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEID0gXCIqXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVVQgPSBcIm1vdXNlb3V0XCI7XG5leHBvcnQgY29uc3QgSFRNTF9GT1IgPSBcImh0bWxGb3JcIjtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcbmV4cG9ydCBjb25zdCBNT1VTRU9WRVIgPSBcIm1vdXNlb3ZlclwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTiA9IFwibW91c2Vkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VNT1ZFID0gXCJtb3VzZW1vdmVcIjtcbmV4cG9ydCBjb25zdCBURVhUX0hUTUwgPSBcInRleHQvaHRtbFwiO1xuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuZXhwb3J0IGNvbnN0IEFCT1VUX0JMQU5LID0gXCJhYm91dDpibGFua1wiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRV9VUkkgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QRVJUSUVTID0gXCJkZWZhdWx0UHJvcGVydGllc1wiO1xuZXhwb3J0IGNvbnN0IElHTk9SRURfUFJPUEVSVElFUyA9IFwiaWdub3JlZFByb3BlcnRpZXNcIjtcblxuZXhwb3J0IGNvbnN0IExFRlRfTU9VU0VfQlVUVE9OID0gMDtcbmV4cG9ydCBjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyO1xuZXhwb3J0IGNvbnN0IE1JRERMRV9NT1VTRV9CVVRUT04gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OLFxuICBSSUdIVF9NT1VTRV9CVVRUT04sXG4gIE1JRERMRV9NT1VTRV9CVVRUT05cbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZG9tRWxlbWVudHMsIChkb21FbGVtZW50KSA9PiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiBkb21FbGVtZW50Ll9fZWxlbWVudF9fKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGlmIChwYXJlbnRET01Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgICBoZWlnaHQtLTtcblxuICAgICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHB1c2goZGVzY2VuZGFudERPTU5vZGVzLCBjaGlsZERPTU5vZGVzKTtcblxuICAgIGRlcHRoLS07XG5cbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goKGNoaWxkRE9NTm9kZSkgPT4gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzKSk7XG4gIH1cblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRvbU5vZGVzLCBzZWxlY3Rvcikge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIChkb21Ob2RlKSA9PiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTtcblxuICBzd2l0Y2ggKGRvbU5vZGVUeXBlKSB7XG4gICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERToge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFOiB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IFdJTERDQVJEKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBbXSxcbiAgICAgICAgZG9tTm9kZXNMZW5ndGggPSBkb21Ob2Rlcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvbU5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IGRvbU5vZGVzW2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXN0KGRvbU5vZGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZmlsdGVyZWRET01Ob2Rlcy5wdXNoKGRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFdJTERDQVJEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIGhlaWdodCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgYXNjZW5kYW50RE9NTm9kZXMgPSBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCksXG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGFzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIGRlcHRoID0gSW5maW5pdHkpIHtcbiAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCksXG4gICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXRQYXJlbnRFbGVtZW50LFxuICBnZXRDaGlsZEVsZW1lbnRzLFxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGg7ICAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRFbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgZWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMpOyAvLy9cblxuICBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMpIHx8IHByb3BlcnRpZXMuY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gIHBydW5lKHByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCB7IG5hbWVzcGFjZVVSSSB9ID0gdGhpcy5kb21FbGVtZW50LFxuICAgICAgICBzdmcgPSAobmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpOyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpKSB7XG4gICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLy9cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgcmV0dXJuIHN2ZyA/IGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6IGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSlcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgS0VZVVAsIEtFWURPV04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oS0VZVVAsIGtleVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKEtFWVVQLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKEtFWURPV04sIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlEb3duKGtleURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKEtFWURPV04sIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBrZXlNaXhpbnMgPSB7XG4gIG9uS2V5VXAsXG4gIG9mZktleVVwLFxuICBvbktleURvd24sXG4gIG9mZktleURvd25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ0xJQ0sgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oQ0xJQ0ssIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENMSUNLLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW5zID0ge1xuICBvbkNsaWNrLFxuICBvZmZDbGlja1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn1cblxuY29uc3Qgc3RhdGVNaXhpbnMgPSB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgdXBkYXRlU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1QsIFJFU0laRSwgVEVYVF9IVE1MLCBBQk9VVF9CTEFOSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihSRVNJWkUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihSRVNJWkUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBBQk9VVF9CTEFOSyxcbiAgICAgICAgdHlwZSA9IFRFWFRfSFRNTDtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xuXG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcblxuICByZXNpemVPYmplY3QudHlwZSA9IHR5cGU7XG5cbiAgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSAoKSA9PiByZXNpemVPYmplY3RMb2FkSGFuZGxlcih0aGlzKTtcblxuICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSB0aGlzLl9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihSRVNJWkUsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xuXG4gIGRlbGV0ZSB0aGlzLl9fcmVzaXplT2JqZWN0X187XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRVNJWkUsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZWxlbWVudC5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFKTtcblxuICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpKTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFLCBSRVNJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVSZXNpemVPYmplY3QgfSBmcm9tIFwiLi4vbWl4aW5zL3Jlc2l6ZVwiO1xuXG5mdW5jdGlvbiBvbihldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkZFJlc2l6ZU9iamVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuXG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCBmb3VuZCA9ICggKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiZcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpICk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpXG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbnMgPSB7XG4gIG9uLFxuICBvZmYsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQLCBNT1VTRU9VVCwgTU9VU0VET1dOLCBNT1VTRU9WRVIsIE1PVVNFTU9WRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VVUCwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoTU9VU0VVUCwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VPVVQsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFT1VULCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihNT1VTRURPV04sIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFRE9XTiwgbW91c2VEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFT1ZFUiwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoTU9VU0VPVkVSLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VNT1ZFLCBtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRU1PVkUsIG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IG1vdXNlTWl4aW5zID0ge1xuICBvbk1vdXNlVXAsXG4gIG9mZk1vdXNlVXAsXG4gIG9uTW91c2VPdXQsXG4gIG9mZk1vdXNlT3V0LFxuICBvbk1vdXNlRG93bixcbiAgb2ZmTW91c2VEb3duLFxuICBvbk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdmVyLFxuICBvbk1vdXNlTW92ZSxcbiAgb2ZmTW91c2VNb3ZlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3VzZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0NST0xMIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oU0NST0xMLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihTQ1JPTEwsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmNvbnN0IHNjcm9sbE1peGlucyA9IHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbCxcbiAgZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShIRUlHSFQsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgQk9EWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IEJPRFkpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYm9keVwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDSEFOR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDSEFOR0UsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENIQU5HRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2hhbmdlTWl4aW5zID0ge1xuICBvbkNoYW5nZSxcbiAgb2ZmQ2hhbmdlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgY2hhbmdlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvY2hhbmdlXCI7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHsgdGhpcy5kb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LnByb3RvdHlwZSwgY2hhbmdlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SFJlZigpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTsgfVxuXG4gIHNldEhSZWYoaHJlZikgeyByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jaGFuZ2VcIjtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9IC8vL1xuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAgLy8vXG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzZWxlY3RcIjtcbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QucHJvdG90eXBlLCBjaGFuZ2VNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5pbXBvcnQgeyBDSEFOR0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDSEFOR0UsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoQ0hBTkdFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9IC8vL1xuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAgLy8vXG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dEVsZW1lbnQgZnJvbSBcIi4uL2lucHV0RWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBvblJlc2l6ZSwgb2ZmUmVzaXplIH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCB3aW5kb3dNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3dpbmRvd1wiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIGFkZFJlc2l6ZU9iamVjdCgpIHt9IC8vL1xuXG4gIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHt9IC8vL1xuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIHdpbmRvd01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiBkb2N1bWVudCA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBEb2N1bWVudCgpOyAgLy8vXG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzID0gZmxhdHRlbihyZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cblxuICBsZXQgY2hpbGRFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50czsgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2R5IH0gZnJvbSBcIi4vZWxlbWVudC9ib2R5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL2VsZW1lbnQvYnV0dG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSBcIi4vZWxlbWVudC9jaGVja2JveFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSBcIi4vZWxlbWVudC9saW5rXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL2VsZW1lbnQvc2VsZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRhcmVhIH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L3RleHRhcmVhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRFbGVtZW50IH0gZnJvbSBcIi4vdGV4dEVsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRFbGVtZW50IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZHMgfSBmcm9tIFwiLi9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIHdpbmRvdyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbndpbmRvdy5hc3NpZ24oe1xuICBSZWFjdFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHRhcmVhLCBDaGVja2JveCwgQnV0dG9uLCBjb25zdGFudHMsIEVsZW1lbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT5cblxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICA8Q2hlY2tib3ggY2hlY2tlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkXCIpXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8VGV4dGFyZWEgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlXCIpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXtmdW5jdGlvbihldmVudCwgZWxlbWVudCkgeyAgLy8vXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYnV0dG9uID09PSBMRUZUX01PVVNFX0JVVFRPTilcbiAgICAgICAgICAgIH19XG4gICAgPlxuICAgICAgU3VibWl0XG4gICAgPC9CdXR0b24+XG4gICAgPERpdiAvPlxuICA8L2Rpdj5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcmVzaXplSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2V4YW1wbGUvcHJlYW1ibGVcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCJcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFcUIsU0FBTSwyQkFBQTt1QkFDYixLQUFLLE1BQUk7OEJBREY7YUFFWixNQUFNO2FBQ04sT0FBTzs7bUJBSEssU0FBTTs7VUFNekIsS0FBTTttQ0FBQTt3QkFDUTs7OztVQUdkLEtBQU87b0NBQUE7d0JBQ087Ozs7YUFYSzs7c0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDQUEsU0FBTSwyQkFBQTt1QkFDYixLQUFLLE1BQU0sUUFBUSxPQUFLOzhCQURqQjthQUVaLE1BQU07YUFDTixPQUFPO2FBQ1AsU0FBUzthQUNULFFBQVE7O21CQUxJLFNBQU07O1VBUXpCLEtBQU07bUNBQUE7d0JBQ1E7Ozs7VUFHZCxLQUFPO29DQUFBO3dCQUNPOzs7O1VBR2QsS0FBUztzQ0FBQTt3QkFDSzs7OztVQUdkLEtBQVE7cUNBQUE7d0JBQ007Ozs7VUFHZCxLQUFRO3FDQUFBO2dCQUNBLFFBQUssS0FBUyxRQUFLLEtBQVE7bUJBRTFCOzs7O1VBR1QsS0FBUztzQ0FBQTtnQkFDRCxTQUFNLEtBQVMsU0FBTSxLQUFRO21CQUU1Qjs7OztVQUdULEtBQU07aUNBQUMs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
