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
      return array.reduce(function(array2, element) {
        array2 = array2.concat(element);
        return array2;
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
    exports.FUNCTION = exports.HEIGHT = exports.SVG_NAMESPACE_URI = exports.DEFAULT_PROPERTIES = exports.BLOCK = exports.SPACE = exports.EMPTY_STRING = exports.BODY = exports.UNDEFINED = exports.DISPLAY = exports.OBJECT = exports.NONE = exports.LEFT_MOUSE_BUTTON = exports.CLASS_NAME = exports.RIGHT_MOUSE_BUTTON = exports.MIDDLE_MOUSE_BUTTON = exports.CLASS = exports.WIDTH = exports.STRING = exports.WILDCARD = exports.DISABLED = exports.FOR = exports.HTML_FOR = exports.default = exports.IGNORED_PROPERTIES = exports.BOOLEAN = exports.ABOUT_BLANK = void 0;
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
    var WIDTH = "width";
    exports.WIDTH = WIDTH;
    var BLOCK = "block";
    exports.BLOCK = BLOCK;
    var HEIGHT = "height";
    exports.HEIGHT = HEIGHT;
    var OBJECT = "object";
    exports.OBJECT = OBJECT;
    var STRING = "string";
    exports.STRING = STRING;
    var DISPLAY = "display";
    exports.DISPLAY = DISPLAY;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var DISABLED = "disabled";
    exports.DISABLED = DISABLED;
    var FUNCTION = "function";
    exports.FUNCTION = FUNCTION;
    var WILDCARD = "*";
    exports.WILDCARD = WILDCARD;
    var HTML_FOR = "htmlFor";
    exports.HTML_FOR = HTML_FOR;
    var UNDEFINED = "undefined";
    exports.UNDEFINED = UNDEFINED;
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
      elements = elements.reduce(function(elements2, element) {
        if (element) {
          elements2.push(element);
        }
        return elements2;
      }, []);
      return elements;
    }
    function replaceStringsWithTextElements(elements) {
      elements = elements.map(function(element) {
        if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === _constants.STRING) {
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
        if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.BOOLEAN) {
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
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          element.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
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

  // lib/eventTypes.js
  var require_eventTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KEYDOWN_EVENT_TYPE = exports.CLICK_EVENT_TYPE = exports.MOUSEUP_EVENT_TYPE = exports.SCROLL_EVENT_TYPE = exports.CHANGE_EVENT_TYPE = exports.MOUSEOVER_EVENT_TYPE = exports.default = exports.RESIZE_EVENT_TYPE = exports.MOUSEDOWN_EVENT_TYPE = exports.MOUSEMOVE_EVENT_TYPE = exports.KEYUP_EVENT_TYPE = exports.MOUSEOUT_EVENT_TYPE = void 0;
    var CLICK_EVENT_TYPE = "click";
    exports.CLICK_EVENT_TYPE = CLICK_EVENT_TYPE;
    var KEYUP_EVENT_TYPE = "keyup";
    exports.KEYUP_EVENT_TYPE = KEYUP_EVENT_TYPE;
    var CHANGE_EVENT_TYPE = "change";
    exports.CHANGE_EVENT_TYPE = CHANGE_EVENT_TYPE;
    var RESIZE_EVENT_TYPE = "resize";
    exports.RESIZE_EVENT_TYPE = RESIZE_EVENT_TYPE;
    var SCROLL_EVENT_TYPE = "scroll";
    exports.SCROLL_EVENT_TYPE = SCROLL_EVENT_TYPE;
    var KEYDOWN_EVENT_TYPE = "keydown";
    exports.KEYDOWN_EVENT_TYPE = KEYDOWN_EVENT_TYPE;
    var MOUSEUP_EVENT_TYPE = "mouseup";
    exports.MOUSEUP_EVENT_TYPE = MOUSEUP_EVENT_TYPE;
    var MOUSEOUT_EVENT_TYPE = "mouseout";
    exports.MOUSEOUT_EVENT_TYPE = MOUSEOUT_EVENT_TYPE;
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    exports.MOUSEOVER_EVENT_TYPE = MOUSEOVER_EVENT_TYPE;
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    exports.MOUSEDOWN_EVENT_TYPE = MOUSEDOWN_EVENT_TYPE;
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    exports.MOUSEMOVE_EVENT_TYPE = MOUSEMOVE_EVENT_TYPE;
    var _default = {
      CLICK_EVENT_TYPE,
      KEYUP_EVENT_TYPE,
      CHANGE_EVENT_TYPE,
      RESIZE_EVENT_TYPE,
      SCROLL_EVENT_TYPE,
      KEYDOWN_EVENT_TYPE,
      MOUSEUP_EVENT_TYPE,
      MOUSEOUT_EVENT_TYPE,
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE
    };
    exports.default = _default;
  });

  // lib/mixins/key.js
  var require_key = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onKeyUp(keyUpHandler, element) {
      this.on(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function offKeyUp(keyUpHandler, element) {
      this.off(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function onKeyDown(keyDownHandler, element) {
      this.on(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
    }
    function offKeyDown(keyDownHandler, element) {
      this.off(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
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
    var _eventTypes = require_eventTypes();
    function onClick(clickHandler, element) {
      this.on(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.off(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
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

  // lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TEXT_HTML_CONTENT_TYPE = void 0;
    var TEXT_HTML_CONTENT_TYPE = "text/html";
    exports.TEXT_HTML_CONTENT_TYPE = TEXT_HTML_CONTENT_TYPE;
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
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    var _contentTypes = require_contentTypes();
    function onResize(resizeHandler, element) {
      this.on(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function offResize(resizeHandler, element) {
      this.off(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function addResizeObject() {
      var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _contentTypes.TEXT_HTML_CONTENT_TYPE;
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
      objectWindow.removeEventListener(_eventTypes.RESIZE_EVENT_TYPE, resizeEventListener);
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
      resizeObjectWindow.addEventListener(_eventTypes.RESIZE_EVENT_TYPE, function(event) {
        var resizeEventListeners = element.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
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
    var _eventTypes = require_eventTypes();
    var _resize = require_resize();
    function on(eventTypes, handler, element) {
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
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
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
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
      var eventListener = this.createEventListener(eventType, handler, element);
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
      var eventListener = this.eventListeners.find(function(eventListener2) {
        var found = eventListener2.element === element && eventListener2.handler === handler && eventListener2.eventType === eventType;
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
        handler.call(element, event, this);
      }.bind(this);
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
      createEventListener,
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
    var _eventTypes = require_eventTypes();
    function onMouseUp(mouseUpHandler, element) {
      this.on(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function offMouseUp(mouseUpHandler, element) {
      this.off(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function onMouseOut(mouseOutHandler, element) {
      this.on(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function offMouseOut(mouseOutHandler, element) {
      this.off(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function onMouseDown(mouseDownHandler, element) {
      this.on(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function offMouseDown(mouseDownHandler, element) {
      this.off(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function onMouseOver(mouseOverHandler, element) {
      this.on(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function offMouseOver(mouseOverHandler, element) {
      this.off(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function onMouseMove(mouseMoveHandler, element) {
      this.on(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
    }
    function offMouseMove(mouseMoveHandler, element) {
      this.off(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
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
    var _eventTypes = require_eventTypes();
    function onScroll(scrollHandler, element) {
      this.on(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function offScroll(scrollHandler, element) {
      this.off(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
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
    var Element = /* @__PURE__ */ function() {
      function Element2(selector) {
        _classCallCheck(this, Element2);
        if (selector) {
          this.domElement = document.querySelector(selector);
          this.domElement.__element__ = this;
        }
      }
      _createClass(Element2, [
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
            elements.forEach(function(element2) {
              return element2.didMount && element2.didMount();
            });
          }
        },
        {
          key: "unmount",
          value: function unmount(element) {
            var descendantElements = element.getDescendantElements(), elements = [
              element
            ].concat(_toConsumableArray(descendantElements));
            elements.forEach(function(element2) {
              return element2.willUnmount && element2.willUnmount();
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
              var style2 = this.domElement.style[name];
              return style2;
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
            } else if ((typeof css1 === "undefined" ? "undefined" : _typeof(css1)) === _constants.STRING) {
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
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
              remainingArguments[_key2 - 2] = arguments[_key2];
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
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
              remainingArguments[_key2 - 2] = arguments[_key2];
            }
            var Class = Element2, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = {}, ignoredProperties = [];
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        }
      ]);
      return Element2;
    }();
    Object.assign(Element.prototype, _jsx.default);
    Object.assign(Element.prototype, _key.default);
    Object.assign(Element.prototype, _click.default);
    Object.assign(Element.prototype, _state.default);
    Object.assign(Element.prototype, _event.default);
    Object.assign(Element.prototype, _mouse.default);
    Object.assign(Element.prototype, _resize.default);
    Object.assign(Element.prototype, _scroll.default);
    Object.assign(Element.prototype, _element.default);
    var _default = Element;
    exports.default = _default;
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
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
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
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
      var subclassOf = false;
      if (argument.name === Class.name) {
        subclassOf = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument) {
          subclassOf = isSubclassOf(argument, Class);
        }
      }
      return subclassOf;
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
    var Body = /* @__PURE__ */ function(Element) {
      _inherits(Body2, Element);
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
    var Link = /* @__PURE__ */ function(Element) {
      _inherits(Link2, Element);
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

  // lib/mixins/change.js
  var require_change = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onChange(changeHandler, element) {
      this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    function offChange(changeHandler, element) {
      this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    var changeMixins = {
      onChange,
      offChange
    };
    var _default = changeMixins;
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
    var _eventTypes = require_eventTypes();
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
    var InputElement = /* @__PURE__ */ function(Element) {
      _inherits(InputElement2, Element);
      function InputElement2() {
        _classCallCheck(this, InputElement2);
        return _possibleConstructorReturn(this, _getPrototypeOf(InputElement2).apply(this, arguments));
      }
      _createClass(InputElement2, [
        {
          key: "onChange",
          value: function onChange(changeHandler, element) {
            this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
          }
        },
        {
          key: "offChange",
          value: function offChange(changeHandler, element) {
            this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
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
    var Button = /* @__PURE__ */ function(Element) {
      _inherits(Button2, Element);
      function Button2() {
        _classCallCheck(this, Button2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Button2).apply(this, arguments));
      }
      return Button2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Button, "tagName", "button");
    exports.default = Button;
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
    var Select = /* @__PURE__ */ function(Element) {
      _inherits(Select2, Element);
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
    var Checkbox = /* @__PURE__ */ function(Element) {
      _inherits(Checkbox2, Element);
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
    var Window = /* @__PURE__ */ function() {
      function Window2() {
        _classCallCheck(this, Window2);
        this.domElement = window;
      }
      _createClass(Window2, [
        {
          key: "assign",
          value: function assign() {
            for (var _len = arguments.length, sources = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
              sources[_key2] = arguments[_key2];
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
      return Window2;
    }();
    Object.assign(Window.prototype, _key.default);
    Object.assign(Window.prototype, _event.default);
    Object.assign(Window.prototype, _mouse.default);
    Object.assign(Window.prototype, _click.default);
    Object.assign(Window.prototype, _window.default);
    var _default = (typeof window === "undefined" ? "undefined" : _typeof(window)) === _constants.UNDEFINED ? void 0 : new Window();
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
    var Document = function Document2() {
      _classCallCheck(this, Document2);
      this.domElement = document;
    };
    var _default = (typeof document === "undefined" ? "undefined" : _typeof(document)) === _constants.UNDEFINED ? void 0 : new Document();
    exports.default = _default;
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _click.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "React", {
      enumerable: true,
      get: function() {
        return _react.default;
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
    Object.defineProperty(exports, "Body", {
      enumerable: true,
      get: function() {
        return _body.default;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return _link.default;
      }
    });
    Object.defineProperty(exports, "Input", {
      enumerable: true,
      get: function() {
        return _input.default;
      }
    });
    Object.defineProperty(exports, "Button", {
      enumerable: true,
      get: function() {
        return _button.default;
      }
    });
    Object.defineProperty(exports, "Select", {
      enumerable: true,
      get: function() {
        return _select.default;
      }
    });
    Object.defineProperty(exports, "Element", {
      enumerable: true,
      get: function() {
        return _element.default;
      }
    });
    Object.defineProperty(exports, "Checkbox", {
      enumerable: true,
      get: function() {
        return _checkbox.default;
      }
    });
    Object.defineProperty(exports, "Textarea", {
      enumerable: true,
      get: function() {
        return _textarea.default;
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
    Object.defineProperty(exports, "eventTypes", {
      enumerable: true,
      get: function() {
        return _eventTypes.default;
      }
    });
    var _react = _interopRequireDefault2(require_react());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _offset = _interopRequireDefault2(require_offset());
    var _body = _interopRequireDefault2(require_body());
    var _link = _interopRequireDefault2(require_link());
    var _input = _interopRequireDefault2(require_input());
    var _button = _interopRequireDefault2(require_button());
    var _select = _interopRequireDefault2(require_select());
    var _element = _interopRequireDefault2(require_element2());
    var _checkbox = _interopRequireDefault2(require_checkbox());
    var _textarea = _interopRequireDefault2(require_textarea());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _inputElement = _interopRequireDefault2(require_inputElement());
    var _window = _interopRequireDefault2(require_window2());
    var _document = _interopRequireDefault2(require_document());
    var _constants = _interopRequireDefault2(require_constants());
    var _eventTypes = _interopRequireDefault2(require_eventTypes());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
    var View = /* @__PURE__ */ function(Element) {
      _inherits(View2, Element);
      function View2() {
        _classCallCheck(this, View2);
        return _possibleConstructorReturn(this, _getPrototypeOf(View2).apply(this, arguments));
      }
      _createClass(View2, [
        {
          key: "childElements",
          value: function childElements() {
            return [
              /* @__PURE__ */ React.createElement(_index2.Checkbox, {
                onChange: function(event, element) {
                  console.log("Changed");
                },
                checked: true
              }),
              /* @__PURE__ */ React.createElement(_index2.Textarea, {
                onChange: function(event, element) {
                  console.log("change");
                },
                onScroll: function onScroll(event, element) {
                  var scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
                  console.log(scrollTop, scrollLeft);
                }
              }),
              /* @__PURE__ */ React.createElement(_index2.Button, {
                onClick: function(event, element) {
                  var button = event.button;
                  console.log(button === LEFT_MOUSE_BUTTON);
                }
              }, "Submit"),
              /* @__PURE__ */ React.createElement(Div, null)
            ];
          }
        }
      ]);
      return View2;
    }(_wrapNativeSuper(_index2.Element));
    _defineProperty(View, "tagName", "div");
    _defineProperty(View, "defaultProperties", {
      className: "view"
    });
    exports.default = View;
    var Div = /* @__PURE__ */ function(Element) {
      _inherits(Div2, Element);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL29mZnNldC5qcyIsICJzcmMvYm91bmRzLmpzIiwgInNyYy91dGlsaXRpZXMvb2JqZWN0LmpzIiwgInNyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAic3JjL3V0aWxpdGllcy9uYW1lLmpzIiwgInNyYy9jb25zdGFudHMuanMiLCAic3JjL3V0aWxpdGllcy9kb20uanMiLCAic3JjL21peGlucy9lbGVtZW50LmpzIiwgInNyYy90ZXh0RWxlbWVudC5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9taXhpbnMvanN4LmpzIiwgInNyYy9ldmVudFR5cGVzLmpzIiwgInNyYy9taXhpbnMva2V5LmpzIiwgInNyYy9taXhpbnMvY2xpY2suanMiLCAic3JjL21peGlucy9zdGF0ZS5qcyIsICJzcmMvY29udGVudFR5cGVzLmpzIiwgInNyYy9taXhpbnMvcmVzaXplLmpzIiwgInNyYy9taXhpbnMvZXZlbnQuanMiLCAic3JjL21peGlucy9tb3VzZS5qcyIsICJzcmMvbWl4aW5zL3Njcm9sbC5qcyIsICJzcmMvZWxlbWVudC5qcyIsICJzcmMvcmVhY3QuanMiLCAic3JjL2VsZW1lbnQvYm9keS5qcyIsICJzcmMvZWxlbWVudC9saW5rLmpzIiwgInNyYy9taXhpbnMvY2hhbmdlLmpzIiwgInNyYy9pbnB1dEVsZW1lbnQuanMiLCAic3JjL2lucHV0RWxlbWVudC9pbnB1dC5qcyIsICJzcmMvZWxlbWVudC9idXR0b24uanMiLCAic3JjL2VsZW1lbnQvc2VsZWN0LmpzIiwgInNyYy9lbGVtZW50L2NoZWNrYm94LmpzIiwgInNyYy9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCAic3JjL21peGlucy93aW5kb3cuanMiLCAic3JjL3dpbmRvdy5qcyIsICJzcmMvZG9jdW1lbnQuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL3ByZWFtYmxlLmpzIiwgInNyYy9leGFtcGxlL3ZpZXcuanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9ICh0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0KTtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSAodGhpcy5ib3R0b20gLSB0aGlzLnRvcCk7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG4gIFxuICBzZXRUb3AodG9wKSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgc2V0Qm90dG9tKGJvdHRvbSkge1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgc2V0UmlnaHQocmlnaHQpIHtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBzaGlmdChob3Jpem9udGFsT2Zmc2V0LCB2ZXJ0aWNhbE9mZnNldCkge1xuICAgIHRoaXMudG9wICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMubGVmdCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMucmlnaHQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8PSBtb3VzZVRvcClcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBtb3VzZVRvcCkgICk7XG4gIH1cblxuICBhcmVPdmVybGFwcGluZyhib3VuZHMpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgYm91bmRzLmJvdHRvbSlcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IGJvdW5kcy5yaWdodClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBib3VuZHMubGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gYm91bmRzLnRvcCkgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCB3aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsIC8vL1xuICAgICAgICAgIHdpbmRvd1Njcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKHRhcmdldE9iamVjdCwgc291cmNlT2JqZWN0ID0ge30pIHtcbiAgY29uc3Qgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZU9iamVjdCk7XG5cbiAgc291cmNlS2V5cy5mb3JFYWNoKChzb3VyY2VLZXkpID0+IHtcbiAgICBjb25zdCB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldE9iamVjdFtzb3VyY2VLZXldLFxuICAgICAgICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlT2JqZWN0W3NvdXJjZUtleV07XG5cbiAgICB0YXJnZXRPYmplY3Rbc291cmNlS2V5XSA9IHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0YXJnZXRQcm9wZXJ0eX0gJHtzb3VyY2VQcm9wZXJ0eX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQcm9wZXJ0eTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZSh0YXJnZXRPYmplY3QsIHNvdXJjZUtleXMpIHtcbiAgc291cmNlS2V5cy5mb3JFYWNoKChzb3VyY2VLZXkpID0+IHtcbiAgICBpZiAodGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XTtcbiAgICB9XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR1RhZ05hbWUodGFnTmFtZSkge1xuICByZXR1cm4gc3ZnVGFnTmFtZXMuaW5jbHVkZXModGFnTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuY29uc3Qgc3ZnVGFnTmFtZXMgPSBbXG4gICAgICAgIFwiYWx0R2x5cGhcIiwgXCJhbmltYXRlXCIsIFwiYW5pbWF0ZUNvbG9yXCIsIFwiYW5pbWF0ZU1vdGlvblwiLCBcImFuaW1hdGVUcmFuc2Zvcm1cIiwgXCJhbmltYXRpb25cIiwgXCJhdWRpb1wiLFxuICAgICAgICBcImNpcmNsZVwiLCBcImNsaXBQYXRoXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImN1cnNvclwiLFxuICAgICAgICBcImRlZnNcIiwgXCJkZXNjXCIsIFwiZGlzY2FyZFwiLFxuICAgICAgICBcImVsbGlwc2VcIixcbiAgICAgICAgXCJmZUJsZW5kXCIsIFwiZmVDb2xvck1hdHJpeFwiLCBcImZlQ29tcG9uZW50VHJhbnNmZXJcIiwgXCJmZUNvbXBvc2l0ZVwiLCBcImZlQ29udm9sdmVNYXRyaXhcIiwgXCJmZURpZmZ1c2VMaWdodGluZ1wiLCBcImZlRGlzcGxhY2VtZW50TWFwXCIsIFwiZmVEaXN0YW50TGlnaHRcIiwgXCJmZURyb3BTaGFkb3dcIiwgXCJmZUZsb29kXCIsIFwiZmVGdW5jQVwiLCBcImZlRnVuY0JcIiwgXCJmZUZ1bmNHXCIsIFwiZmVGdW5jUlwiLCBcImZlR2F1c3NpYW5CbHVyXCIsIFwiZmVJbWFnZVwiLCBcImZlTWVyZ2VcIiwgXCJmZU1lcmdlTm9kZVwiLCBcImZlTW9ycGhvbG9neVwiLCBcImZlT2Zmc2V0XCIsIFwiZmVQb2ludExpZ2h0XCIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsIFwiZmVTcG90TGlnaHRcIiwgXCJmZVRpbGVcIiwgXCJmZVR1cmJ1bGVuY2VcIiwgXCJmaWx0ZXJcIiwgXCJmb250XCIsIFwiZm9udC1mYWNlXCIsIFwiZm9udC1mYWNlLWZvcm1hdFwiLCBcImZvbnQtZmFjZS1uYW1lXCIsIFwiZm9udC1mYWNlLXVyaVwiLCBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgXCJnXCIsIFwiZ2x5cGhcIiwgXCJnbHlwaFJlZlwiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYXRjaFwiLCBcImhhdGNocGF0aFwiLCBcImhrZXJuXCIsXG4gICAgICAgIFwiaW1hZ2VcIiwgXCJsaW5lXCIsIFwibGluZWFyR3JhZGllbnRcIixcbiAgICAgICAgXCJsaXN0ZW5lclwiLFxuICAgICAgICBcIm1hcmtlclwiLCBcIm1hc2tcIiwgXCJtZXNoXCIsIFwibWVzaGdyYWRpZW50XCIsIFwibWVzaHBhdGNoXCIsIFwibWVzaHJvd1wiLCBcIm1ldGFkYXRhXCIsIFwibWlzc2luZy1nbHlwaFwiLCBcIm1wYXRoXCIsXG4gICAgICAgIFwicGF0aFwiLCBcInBhdHRlcm5cIiwgXCJwb2x5Z29uXCIsIFwicG9seWxpbmVcIiwgXCJwcmVmZXRjaFwiLFxuICAgICAgICBcInJhZGlhbEdyYWRpZW50XCIsIFwicmVjdFwiLFxuICAgICAgICBcInNjcmlwdFwiLCBcInNldFwiLCBcInNvbGlkY29sb3JcIiwgXCJzdG9wXCIsIFwic3R5bGVcIiwgXCJzdmdcIiwgXCJzd2l0Y2hcIiwgXCJzeW1ib2xcIixcbiAgICAgICAgXCJ0YnJlYWtcIiwgXCJ0ZXh0XCIsIFwidGV4dEFyZWFcIiwgXCJ0ZXh0UGF0aFwiLCBcInRpdGxlXCIsIFwidHJlZlwiLCBcInRzcGFuXCIsXG4gICAgICAgIFwidW5rbm93blwiLCBcInVzZVwiLFxuICAgICAgICBcInZpZGVvXCIsIFwidmlld1wiLCBcInZrZXJuXCJcbiAgICAgIF0sXG4gICAgICBzdmdBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlbnQtaGVpZ2h0XCIsIFwiYWNjdW11bGF0ZVwiLCBcImFkZGl0aXZlXCIsIFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiYWxwaGFiZXRpY1wiLCBcImFtcGxpdHVkZVwiLCBcImFyYWJpYy1mb3JtXCIsIFwiYXNjZW50XCIsIFwiYXR0cmlidXRlTmFtZVwiLCBcImF0dHJpYnV0ZVR5cGVcIiwgXCJhemltdXRoXCIsXG4gICAgICAgIFwiYmFuZHdpZHRoXCIsIFwiYmFzZUZyZXF1ZW5jeVwiLCBcImJhc2VQcm9maWxlXCIsIFwiYmFzZWxpbmUtc2hpZnRcIiwgXCJiYm94XCIsIFwiYmVnaW5cIiwgXCJiaWFzXCIsIFwiYnlcIixcbiAgICAgICAgXCJjYWxjTW9kZVwiLCBcImNhcC1oZWlnaHRcIiwgXCJjbGlwXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xpcC1wYXRoXCIsIFwiY2xpcC1ydWxlXCIsIFwiY2xpcFBhdGhVbml0c1wiLCBcImNvbG9yXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvblwiLCBcImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1wiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjb2xvci1yZW5kZXJpbmdcIiwgXCJjb250ZW50U2NyaXB0VHlwZVwiLCBcImNvbnRlbnRTdHlsZVR5cGVcIiwgXCJjcm9zc29yaWdpblwiLCBcImN1cnNvclwiLCBcImN4XCIsIFwiY3lcIixcbiAgICAgICAgXCJkXCIsIFwiZGVmYXVsdEFjdGlvblwiLCBcImRlc2NlbnRcIiwgXCJkaWZmdXNlQ29uc3RhbnRcIiwgXCJkaXJlY3Rpb25cIiwgXCJkaXNwbGF5XCIsIFwiZGl2aXNvclwiLCBcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiZG93bmxvYWRcIiwgXCJkdXJcIiwgXCJkeFwiLCBcImR5XCIsXG4gICAgICAgIFwiZWRnZU1vZGVcIiwgXCJlZGl0YWJsZVwiLCBcImVsZXZhdGlvblwiLCBcImVuYWJsZS1iYWNrZ3JvdW5kXCIsIFwiZW5kXCIsIFwiZXZlbnRcIiwgXCJleHBvbmVudFwiLCBcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcbiAgICAgICAgXCJmaWxsXCIsIFwiZmlsbC1vcGFjaXR5XCIsIFwiZmlsbC1ydWxlXCIsIFwiZmlsdGVyXCIsIFwiZmlsdGVyUmVzXCIsIFwiZmlsdGVyVW5pdHNcIiwgXCJmbG9vZC1jb2xvclwiLCBcImZsb29kLW9wYWNpdHlcIiwgXCJmb2N1c0hpZ2hsaWdodFwiLCBcImZvY3VzYWJsZVwiLCBcImZvbnQtZmFtaWx5XCIsIFwiZm9udC1zaXplXCIsIFwiZm9udC1zaXplLWFkanVzdFwiLCBcImZvbnQtc3RyZXRjaFwiLCBcImZvbnQtc3R5bGVcIiwgXCJmb250LXZhcmlhbnRcIiwgXCJmb250LXdlaWdodFwiLCBcImZvcm1hdFwiLCBcImZyXCIsIFwiZnJvbVwiLCBcImZ4XCIsIFwiZnlcIixcbiAgICAgICAgXCJnMVwiLCBcImcyXCIsIFwiZ2x5cGgtbmFtZVwiLCBcImdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWxcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbFwiLCBcImdseXBoUmVmXCIsIFwiZ3JhZGllbnRUcmFuc2Zvcm1cIiwgXCJncmFkaWVudFVuaXRzXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhbmdpbmdcIiwgXCJoYXRjaENvbnRlbnRVbml0c1wiLCBcImhhdGNoVW5pdHNcIiwgXCJoZWlnaHRcIiwgXCJob3Jpei1hZHYteFwiLCBcImhvcml6LW9yaWdpbi14XCIsIFwiaG9yaXotb3JpZ2luLXlcIiwgXCJocmVmXCIsIFwiaHJlZmxhbmdcIixcbiAgICAgICAgXCJpZFwiLCBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGT1IgPSBcImZvclwiO1xuZXhwb3J0IGNvbnN0IEJPRFkgPSBcImJvZHlcIjtcbmV4cG9ydCBjb25zdCBOT05FID0gXCJub25lXCI7XG5leHBvcnQgY29uc3QgU1BBQ0UgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDTEFTUyA9IFwiY2xhc3NcIjtcbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBCTE9DSyA9IFwiYmxvY2tcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBESVNQTEFZID0gXCJkaXNwbGF5XCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEID0gXCIqXCI7XG5leHBvcnQgY29uc3QgSFRNTF9GT1IgPSBcImh0bWxGb3JcIjtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbmV4cG9ydCBjb25zdCBBQk9VVF9CTEFOSyA9IFwiYWJvdXQ6YmxhbmtcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0VfVVJJID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPUEVSVElFUyA9IFwiZGVmYXVsdFByb3BlcnRpZXNcIjtcbmV4cG9ydCBjb25zdCBJR05PUkVEX1BST1BFUlRJRVMgPSBcImlnbm9yZWRQcm9wZXJ0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBMRUZUX01PVVNFX0JVVFRPTiA9IDA7XG5leHBvcnQgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjtcbmV4cG9ydCBjb25zdCBNSURETEVfTU9VU0VfQlVUVE9OID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBMRUZUX01PVVNFX0JVVFRPTixcbiAgUklHSFRfTU9VU0VfQlVUVE9OLFxuICBNSURETEVfTU9VU0VfQlVUVE9OXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCkpLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXyk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGhlaWdodCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgICBpZiAocGFyZW50RE9NTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYXNjZW5kYW50RE9NTm9kZXMucHVzaChwYXJlbnRET01Ob2RlKTtcblxuICAgICAgaGVpZ2h0LS07XG5cbiAgICAgIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUocGFyZW50RE9NTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBwdXNoKGRlc2NlbmRhbnRET01Ob2RlcywgY2hpbGRET01Ob2Rlcyk7XG5cbiAgICBkZXB0aC0tO1xuXG4gICAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcykpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFdJTERDQVJELCBoZWlnaHQgPSBJbmZpbml0eSkge1xuICBjb25zdCBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgIGFzY2VuZGFudERPTU5vZGVzID0gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQpLFxuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihhc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFdJTERDQVJELCBkZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgZGVzY2VuZGFudERPTU5vZGVzID0gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgpLFxuICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gIH1cblxuICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbn1cblxuY29uc3QgZWxlbWVudE1peGlucyA9IHtcbiAgZ2V0UGFyZW50RWxlbWVudCxcbiAgZ2V0Q2hpbGRFbGVtZW50cyxcbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMsXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50LFxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoOyAgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0RWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0RWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRFbGVtZW50IGZyb20gXCIuLi90ZXh0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZSwgcHJ1bmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgZmlyc3QsIGd1YXJhbnRlZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUsIGlzU1ZHQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgSFRNTF9GT1IsIENMQVNTX05BTUUsIEJPT0xFQU4sIEZVTkNUSU9OLCBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuXG4gIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudCh0aGlzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHM7ICAvLy9cblxuICBwcnVuZShwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3QgeyBuYW1lc3BhY2VVUkkgfSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKSkge1xuICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8vXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb250ZXh0ID0ge307XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZChjaGlsZEVsZW1lbnQpO1xuICB9KTtcblxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBCT09MRUFOKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gIH1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0sIFtdKTtcbn1cblxuY29uc3QganN4TWl4aW5zID0ge1xuICBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQsXG4gIGFzc2lnbkNvbnRleHRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGpzeE1peGlucztcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMuY2FsbChlbGVtZW50KTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKSB7XG4gIHJldHVybiBzdmcgPyBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDTElDS19FVkVOVF9UWVBFID0gXCJjbGlja1wiO1xuZXhwb3J0IGNvbnN0IEtFWVVQX0VWRU5UX1RZUEUgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IFJFU0laRV9FVkVOVF9UWVBFID0gXCJyZXNpemVcIjtcbmV4cG9ydCBjb25zdCBTQ1JPTExfRVZFTlRfVFlQRSA9IFwic2Nyb2xsXCI7XG5leHBvcnQgY29uc3QgS0VZRE9XTl9FVkVOVF9UWVBFID0gXCJrZXlkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUF9FVkVOVF9UWVBFID0gXCJtb3VzZXVwXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVVRfRVZFTlRfVFlQRSA9IFwibW91c2VvdXRcIjtcbmV4cG9ydCBjb25zdCBNT1VTRU9WRVJfRVZFTlRfVFlQRSA9IFwibW91c2VvdmVyXCI7XG5leHBvcnQgY29uc3QgTU9VU0VET1dOX0VWRU5UX1RZUEUgPSBcIm1vdXNlZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFTU9WRV9FVkVOVF9UWVBFID0gXCJtb3VzZW1vdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBDTElDS19FVkVOVF9UWVBFLFxuICBLRVlVUF9FVkVOVF9UWVBFLFxuICBDSEFOR0VfRVZFTlRfVFlQRSxcbiAgUkVTSVpFX0VWRU5UX1RZUEUsXG4gIFNDUk9MTF9FVkVOVF9UWVBFLFxuICBLRVlET1dOX0VWRU5UX1RZUEUsXG4gIE1PVVNFVVBfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVkVSX0VWRU5UX1RZUEUsXG4gIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxuICBNT1VTRU1PVkVfRVZFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25LZXlVcChrZXlVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleVVwKGtleVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleURvd24oa2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3Qga2V5TWl4aW5zID0ge1xuICBvbktleVVwLFxuICBvZmZLZXlVcCxcbiAgb25LZXlEb3duLFxuICBvZmZLZXlEb3duXG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXlNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENMSUNLX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2xpY2tNaXhpbnMgPSB7XG4gIG9uQ2xpY2ssXG4gIG9mZkNsaWNrXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGlja01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgc3RhdGUpO1xufVxuXG5jb25zdCBzdGF0ZU1peGlucyA9IHtcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICB1cGRhdGVTdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWxcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgT0JKRUNULCBBQk9VVF9CTEFOSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFWFRfSFRNTF9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gYWRkUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KE9CSkVDVCksXG4gICAgICAgIHN0eWxlID0gYGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyBcbiAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YCxcbiAgICAgICAgZGF0YSA9IEFCT1VUX0JMQU5LLFxuICAgICAgICB0eXBlID0gVEVYVF9IVE1MX0NPTlRFTlRfVFlQRTtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xuXG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcblxuICByZXNpemVPYmplY3QudHlwZSA9IHR5cGU7XG5cbiAgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSAoKSA9PiByZXNpemVPYmplY3RMb2FkSGFuZGxlcih0aGlzKTtcblxuICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSB0aGlzLl9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG5cbiAgZGVsZXRlIHRoaXMuX19yZXNpemVPYmplY3RfXztcbn1cblxuY29uc3QgcmVzaXplTWl4aW5zID0ge1xuICBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplLFxuICBhZGRSZXNpemVPYmplY3QsXG4gIHJlbW92ZVJlc2l6ZU9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplTWl4aW5zO1xuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgcmVzaXplT2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFJFU0laRV9FVkVOVF9UWVBFLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IGVsZW1lbnQuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKTtcblxuICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpKTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUmVzaXplT2JqZWN0IH0gZnJvbSBcIi4uL21peGlucy9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gKCAoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCwgdGhpcyk7IC8vL1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW5zID0ge1xuICBvbixcbiAgb2ZmLFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyLFxuICBjcmVhdGVFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXJzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTU9VU0VVUF9FVkVOVF9UWVBFLFxuICAgICAgICAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgICAgICAgIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxuICAgICAgICAgTU9VU0VPVkVSX0VWRU5UX1RZUEUsXG4gICAgICAgICBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihNT1VTRU9VVF9FVkVOVF9UWVBFLCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRU9VVF9FVkVOVF9UWVBFLCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihNT1VTRU9WRVJfRVZFTlRfVFlQRSwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoTU9VU0VPVkVSX0VWRU5UX1RZUEUsIG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IG1vdXNlTWl4aW5zID0ge1xuICBvbk1vdXNlVXAsXG4gIG9mZk1vdXNlVXAsXG4gIG9uTW91c2VPdXQsXG4gIG9mZk1vdXNlT3V0LFxuICBvbk1vdXNlRG93bixcbiAgb2ZmTW91c2VEb3duLFxuICBvbk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdmVyLFxuICBvbk1vdXNlTW92ZSxcbiAgb2ZmTW91c2VNb3ZlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3VzZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0NST0xMX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG5jb25zdCBzY3JvbGxNaXhpbnMgPSB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGwsXG4gIGdldFNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsTGVmdCxcbiAgc2V0U2Nyb2xsVG9wLFxuICBzZXRTY3JvbGxMZWZ0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuaW1wb3J0IGpzeE1peGlucyBmcm9tIFwiLi9taXhpbnMvanN4XCI7XG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBzdGF0ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IHNjcm9sbE1peGlucyBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IGZpcnN0LCBhdWdtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBOT05FLFxuICAgICAgICAgQkxPQ0ssXG4gICAgICAgICBXSURUSCxcbiAgICAgICAgIFNUUklORyxcbiAgICAgICAgIEhFSUdIVCxcbiAgICAgICAgIERJU1BMQVksXG4gICAgICAgICBESVNBQkxFRCxcbiAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgIFNWR19OQU1FU1BBQ0VfVVJJLFxuICAgICAgICAgREVGQVVMVF9QUk9QRVJUSUVTLFxuICAgICAgICAgSUdOT1JFRF9QUk9QRVJUSUVTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLnJldmVyc2UoKTsgLy8vXG5cbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmRpZE1vdW50ICYmIGVsZW1lbnQuZGlkTW91bnQoKSkpOyAgLy8vXG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC53aWxsVW5tb3VudCAmJiBlbGVtZW50LndpbGxVbm1vdW50KCkpKTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IEJMT0NLKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBOT05FKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKERJU1BMQVksIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKERJU0FCTEVEKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKERJU0FCTEVELCBESVNBQkxFRCk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRUQpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jc3MoRElTUExBWSksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IE5PTkUpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29tcHV0ZWRTdHlsZSA9IGZpcnN0W2NvbXB1dGVkU3R5bGVdLFxuICAgICAgICAgICAgICBuYW1lID0gZmlyc3RDb21wdXRlZFN0eWxlLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFNUUklORykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBDbGFzcyxcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IHNlbGVjdG9yID0gbnVsbCxcbiAgICAgICAgZWxlbWVudCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgbnVsbCwgc2VsZWN0b3IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpO1xuXG4gIGVsZW1lbnQuZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGVsZW1lbnQuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IGVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoREVGQVVMVF9QUk9QRVJUSUVTKSkge1xuICAgIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3NbSUdOT1JFRF9QUk9QRVJUSUVTXSwgKGlnbm9yZWRQcm9wZXJ0eSkgPT4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMgPSBmbGF0dGVuKHJlbWFpbmluZ0FyZ3VtZW50cyk7IC8vL1xuXG4gIGxldCBjaGlsZEVsZW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3NPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHN1YmNsYXNzT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHN1YmNsYXNzT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgQk9EWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IEJPRFkpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYm9keVwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEhSZWYoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7IH1cblxuICBzZXRIUmVmKGhyZWYpIHsgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2hhbmdlTWl4aW5zID0ge1xuICBvbkNoYW5nZSxcbiAgb2ZmQ2hhbmdlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5pbXBvcnQgeyBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAvLy9cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gIC8vL1xuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBpc1JlYWRPbmx5KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7IHRoaXMuZG9tRWxlbWVudC5yZWFkT25seSA9IHJlYWRPbmx5OyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBjaGFuZ2VNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dEVsZW1lbnQgZnJvbSBcIi4uL2lucHV0RWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGNoYW5nZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gLy8vXG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9ICAvLy9cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlbGVjdFwiO1xufVxuXG5PYmplY3QuYXNzaWduKFNlbGVjdC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jaGFuZ2VcIjtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gucHJvdG90eXBlLCBjaGFuZ2VNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG9uUmVzaXplLCBvZmZSZXNpemUgfSBmcm9tIFwiLi4vbWl4aW5zL3Jlc2l6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHdpbmRvd01peGlucyBmcm9tIFwiLi9taXhpbnMvd2luZG93XCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgYWRkUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgcmVtb3ZlUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgd2luZG93TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZHMgfSBmcm9tIFwiLi9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9keSB9IGZyb20gXCIuL2VsZW1lbnQvYm9keVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSBcIi4vZWxlbWVudC9saW5rXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL2VsZW1lbnQvYnV0dG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL2VsZW1lbnQvc2VsZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSBcIi4vZWxlbWVudC9jaGVja2JveFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL2lucHV0RWxlbWVudC90ZXh0YXJlYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RWxlbWVudCB9IGZyb20gXCIuL3RleHRFbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0RWxlbWVudCB9IGZyb20gXCIuL2lucHV0RWxlbWVudFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgd2luZG93IH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxud2luZG93LmFzc2lnbih7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dGFyZWEsIENoZWNrYm94LCBCdXR0b24sIGNvbnN0YW50cywgRWxlbWVudCB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgTEVGVF9NT1VTRV9CVVRUT04gfSA9IGNvbnN0YW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkXCIpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAvPixcbiAgICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e2Z1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7ICAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPERpdiAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHJlc2l6ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodClcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZXZlbnQ7XG5cbiAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgQSBwYXJhZ3JhcGggY29udGFpbmVkIGluIGEgZGl2IHdpdGggcmVzaXplIGFuZCBtb3VzZSBtb3ZlIGhhbmRsZXJzLlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9leGFtcGxlL3ByZWFtYmxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiXG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7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
