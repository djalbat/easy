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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Offset;
      }
    });
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Offset = /* @__PURE__ */ function() {
      function Offset2(top, left) {
        _class_call_check(this, Offset2);
        this.top = top;
        this.left = left;
      }
      _create_class(Offset2, [
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
  });

  // lib/bounds.js
  var require_bounds = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Bounds;
      }
    });
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Bounds = /* @__PURE__ */ function() {
      function Bounds2(top, left, right, bottom) {
        _class_call_check(this, Bounds2);
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
      }
      _create_class(Bounds2, [
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
          key: "getRight",
          value: function getRight() {
            return this.right;
          }
        },
        {
          key: "getBottom",
          value: function getBottom() {
            return this.bottom;
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
          key: "setRight",
          value: function setRight(right) {
            this.right = right;
          }
        },
        {
          key: "setBottom",
          value: function setBottom(bottom) {
            this.bottom = bottom;
          }
        },
        {
          key: "shift",
          value: function shift(horizontalOffset, verticalOffset) {
            this.top += verticalOffset;
            this.left += horizontalOffset;
            this.right += horizontalOffset;
            this.bottom += verticalOffset;
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
            var windowScrollTop = window.pageYOffset, windowScrollLeft = window.pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, right = boundingClientRect.right + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, bounds = new Bounds2(top, left, right, bottom);
            return bounds;
          }
        },
        {
          key: "fromTopLeftWidthAndHeight",
          value: function fromTopLeftWidthAndHeight(top, left, width, height) {
            var bottom = top + height, right = left + width, bounds = new Bounds2(top, left, right, bottom);
            return bounds;
          }
        }
      ]);
      return Bounds2;
    }();
  });

  // lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      FOR: function() {
        return FOR;
      },
      BODY: function() {
        return BODY;
      },
      NONE: function() {
        return NONE;
      },
      SPACE: function() {
        return SPACE;
      },
      CLASS: function() {
        return CLASS;
      },
      WIDTH: function() {
        return WIDTH;
      },
      BLOCK: function() {
        return BLOCK;
      },
      HEIGHT: function() {
        return HEIGHT;
      },
      OBJECT: function() {
        return OBJECT;
      },
      STRING: function() {
        return STRING;
      },
      DISPLAY: function() {
        return DISPLAY;
      },
      BOOLEAN: function() {
        return BOOLEAN;
      },
      DISABLED: function() {
        return DISABLED;
      },
      FUNCTION: function() {
        return FUNCTION;
      },
      WILDCARD: function() {
        return WILDCARD;
      },
      HTML_FOR: function() {
        return HTML_FOR;
      },
      UNDEFINED: function() {
        return UNDEFINED;
      },
      CLASS_NAME: function() {
        return CLASS_NAME;
      },
      ABOUT_BLANK: function() {
        return ABOUT_BLANK;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      SVG_NAMESPACE_URI: function() {
        return SVG_NAMESPACE_URI;
      },
      DEFAULT_PROPERTIES: function() {
        return DEFAULT_PROPERTIES;
      },
      IGNORED_PROPERTIES: function() {
        return IGNORED_PROPERTIES;
      }
    });
    var FOR = "for";
    var BODY = "body";
    var NONE = "none";
    var SPACE = " ";
    var CLASS = "class";
    var WIDTH = "width";
    var BLOCK = "block";
    var HEIGHT = "height";
    var OBJECT = "object";
    var STRING = "string";
    var DISPLAY = "display";
    var BOOLEAN = "boolean";
    var DISABLED = "disabled";
    var FUNCTION = "function";
    var WILDCARD = "*";
    var HTML_FOR = "htmlFor";
    var UNDEFINED = "undefined";
    var CLASS_NAME = "className";
    var ABOUT_BLANK = "about:blank";
    var EMPTY_STRING = "";
    var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
    var DEFAULT_PROPERTIES = "defaultProperties";
    var IGNORED_PROPERTIES = "ignoredProperties";
  });

  // lib/utilities/object.js
  var require_object = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      combine: function() {
        return combine;
      },
      prune: function() {
        return prune;
      }
    });
    var _constants = require_constants();
    function _define_property(obj, key, value) {
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
    function _object_spread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _define_property(target, key, source[key]);
        });
      }
      return target;
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function combine(target) {
      var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      target = _object_spread({}, target);
      var names = Object.keys(source);
      names.forEach(function(name) {
        var targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue;
      });
      return target;
    }
    function prune(target) {
      var names = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      target = _object_spread({}, target);
      names.forEach(function(name) {
        var targetHasOwnProperty = target.hasOwnProperty(name);
        if (targetHasOwnProperty) {
          delete target[name];
        }
      });
      return target;
    }
    function combineValues(targetValue, sourceValue) {
      var targetValueBoolean = isValueBoolean(targetValue), sourceValueBoolean = isValueBoolean(sourceValue), combinedValue = targetValueBoolean && sourceValueBoolean ? targetValue : "".concat(targetValue, " ").concat(sourceValue);
      return combinedValue;
    }
    function isValueBoolean(value) {
      var valueBoolean = (typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN;
      return valueBoolean;
    }
  });

  // lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      first: function() {
        return first;
      },
      push: function() {
        return push;
      },
      augment: function() {
        return augment;
      },
      flatten: function() {
        return flatten;
      },
      guarantee: function() {
        return guarantee;
      }
    });
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function first(array) {
      return array[0];
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function augment(array1, array2, test) {
      array1 = _to_consumable_array(array1);
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
      return array1;
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
  });

  // lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      isSVGTagName: function() {
        return isSVGTagName;
      },
      isSVGAttributeName: function() {
        return isSVGAttributeName;
      },
      isHTMLAttributeName: function() {
        return isHTMLAttributeName;
      }
    });
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

  // lib/utilities/dom.js
  var require_dom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      elementsFromDOMElements: function() {
        return elementsFromDOMElements;
      },
      ascendantDOMNodesFromDOMNode: function() {
        return ascendantDOMNodesFromDOMNode;
      },
      descendantDOMNodesFromDOMNode: function() {
        return descendantDOMNodesFromDOMNode;
      },
      filterDOMNodesBySelector: function() {
        return filterDOMNodesBySelector;
      },
      domNodeMatchesSelector: function() {
        return domNodeMatchesSelector;
      },
      filterDOMNodes: function() {
        return filterDOMNodes;
      }
    });
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
    function ascendantDOMNodesFromDOMNode(domNode, height) {
      var ascendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
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
    function descendantDOMNodesFromDOMNode(domNode, depth) {
      var descendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (depth > 0) {
        var childDOMNodes = domNode.childNodes;
        (0, _array.push)(descendantDOMNodes, childDOMNodes);
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _array = require_array();
    var _constants = require_constants();
    var _dom = require_dom();
    function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;
      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [
            parentDOMElement
          ], parentElements = (0, _dom.elementsFromDOMElements)(parentDOMElements), firstParentElement = (0, _array.first)(parentElements);
          parentElement = firstParentElement || null;
        }
      }
      return parentElement;
    }
    function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom.filterDOMNodesBySelector)(childDOMNodes, selector), childElements = (0, _dom.elementsFromDOMElements)(childDOMElements);
      return childElements;
    }
    function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumHeight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var height = maximumHeight, domNode = this.domElement, ascendantDOMNodes = (0, _dom.ascendantDOMNodesFromDOMNode)(domNode, height), ascendantDOMElements = (0, _dom.filterDOMNodesBySelector)(ascendantDOMNodes, selector), ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
      return ascendantElements;
    }
    function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var depth = maximumDepth, domNode = this.domElement, descendantDOMNodes = (0, _dom.descendantDOMNodesFromDOMNode)(domNode, depth), descendantDOMElements = (0, _dom.filterDOMNodesBySelector)(descendantDOMNodes, selector), descendantElements = (0, _dom.elementsFromDOMElements)(descendantDOMElements);
      return descendantElements;
    }
    function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;
      if (nextSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }
      return nextSiblingElement;
    }
    function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling;
      if (previousSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(previousSiblingDOMNode, selector)) {
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
  });

  // lib/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = /* @__PURE__ */ function() {
      function TextElement2(text) {
        _class_call_check(this, TextElement2);
        this.domElement = document.createTextNode(text);
        this.domElement.__element__ = this;
      }
      _create_class(TextElement2, [
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
  });

  // lib/utilities/elements.js
  var require_elements = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      removeFalseyElements: function() {
        return removeFalseyElements;
      },
      replaceStringsWithTextElements: function() {
        return replaceStringsWithTextElements;
      }
    });
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
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
        if ((typeof element === "undefined" ? "undefined" : _type_of(element)) === _constants.STRING) {
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _object = require_object();
    var _array = require_array();
    var _name = require_name();
    var _elements = require_elements();
    var _constants = require_constants();
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function applyProperties(properties, defaultProperties, ignoredProperties) {
      var _this = this;
      this.properties = (0, _object.combine)(properties, defaultProperties);
      properties = (0, _object.prune)(this.properties, ignoredProperties);
      var namespaceURI = this.domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, propertiesKeys = Object.keys(properties), names = propertiesKeys;
      names.forEach(function(name) {
        var value = properties[name], nameHandlerName = isNameHandlerName(name);
        if (nameHandlerName) {
          addHandler(_this, name, value);
        } else {
          var nameAttributeName = isNameAttributeName(name, svg);
          if (nameAttributeName) {
            addAttribute(_this, name, value);
          }
        }
      });
      var childElements = childElementsFromElement(this) || properties.childElements, context = {};
      childElements.forEach(function(childElement) {
        updateContext(childElement, context);
        _this.add(childElement);
      });
      this.context = context;
    }
    function getProperties() {
      return this.properties;
    }
    function getContext() {
      return this.context;
    }
    function assignContext(names, thenDelete) {
      var _this = this;
      var argumentsLength = arguments.length;
      if (argumentsLength === 1) {
        var firstArgument = (0, _array.first)(arguments);
        if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.BOOLEAN) {
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
        var value = _this.context[name], propertyName = name, descriptor = {
          value
        };
        Object.defineProperty(_this, propertyName, descriptor);
        if (thenDelete) {
          delete _this.context[name];
        }
      }, []);
    }
    var jsxMixins = {
      applyProperties,
      getProperties,
      getContext,
      assignContext
    };
    var _default = jsxMixins;
    function childElementsFromElement(element) {
      var childElements = null;
      if (_type_of(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array.guarantee)(childElements);
        childElements = (0, _elements.removeFalseyElements)(childElements);
        childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
      }
      return childElements;
    }
    function updateContext(childElement, context) {
      var parentContext = _type_of(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context;
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
      if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          element.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN) {
        if (value) {
          value = name;
          element.addAttribute(name, value);
        }
      } else {
        element.addAttribute(name, value);
      }
    }
    function isNameHandlerName(name) {
      return /^on/.test(name);
    }
    function isNameAttributeName(name, svg) {
      return svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
    }
  });

  // lib/eventTypes.js
  var require_eventTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      CUT_EVENT_TYPE: function() {
        return CUT_EVENT_TYPE;
      },
      COPY_EVENT_TYPE: function() {
        return COPY_EVENT_TYPE;
      },
      BLUR_EVENT_TYPE: function() {
        return BLUR_EVENT_TYPE;
      },
      PASTE_EVENT_TYPE: function() {
        return PASTE_EVENT_TYPE;
      },
      WHEEL_EVENT_TYPE: function() {
        return WHEEL_EVENT_TYPE;
      },
      INPUT_EVENT_TYPE: function() {
        return INPUT_EVENT_TYPE;
      },
      FOCUS_EVENT_TYPE: function() {
        return FOCUS_EVENT_TYPE;
      },
      CLICK_EVENT_TYPE: function() {
        return CLICK_EVENT_TYPE;
      },
      KEYUP_EVENT_TYPE: function() {
        return KEYUP_EVENT_TYPE;
      },
      SELECT_EVENT_TYPE: function() {
        return SELECT_EVENT_TYPE;
      },
      CHANGE_EVENT_TYPE: function() {
        return CHANGE_EVENT_TYPE;
      },
      RESIZE_EVENT_TYPE: function() {
        return RESIZE_EVENT_TYPE;
      },
      SCROLL_EVENT_TYPE: function() {
        return SCROLL_EVENT_TYPE;
      },
      KEYDOWN_EVENT_TYPE: function() {
        return KEYDOWN_EVENT_TYPE;
      },
      MOUSEUP_EVENT_TYPE: function() {
        return MOUSEUP_EVENT_TYPE;
      },
      AUXCLICK_EVENT_TYPE: function() {
        return AUXCLICK_EVENT_TYPE;
      },
      MOUSEOUT_EVENT_TYPE: function() {
        return MOUSEOUT_EVENT_TYPE;
      },
      DBLCLICK_EVENT_TYPE: function() {
        return DBLCLICK_EVENT_TYPE;
      },
      MOUSEOVER_EVENT_TYPE: function() {
        return MOUSEOVER_EVENT_TYPE;
      },
      MOUSEDOWN_EVENT_TYPE: function() {
        return MOUSEDOWN_EVENT_TYPE;
      },
      MOUSEMOVE_EVENT_TYPE: function() {
        return MOUSEMOVE_EVENT_TYPE;
      },
      CONTEXTMENU_EVENT_TYPE: function() {
        return CONTEXTMENU_EVENT_TYPE;
      },
      SELECTIONCHANGE_EVENT_TYPE: function() {
        return SELECTIONCHANGE_EVENT_TYPE;
      },
      default: function() {
        return _default;
      }
    });
    var CUT_EVENT_TYPE = "cut";
    var COPY_EVENT_TYPE = "copy";
    var BLUR_EVENT_TYPE = "blur";
    var PASTE_EVENT_TYPE = "paste";
    var WHEEL_EVENT_TYPE = "wheel";
    var INPUT_EVENT_TYPE = "input";
    var FOCUS_EVENT_TYPE = "focus";
    var CLICK_EVENT_TYPE = "click";
    var KEYUP_EVENT_TYPE = "keyup";
    var SELECT_EVENT_TYPE = "select";
    var CHANGE_EVENT_TYPE = "change";
    var RESIZE_EVENT_TYPE = "resize";
    var SCROLL_EVENT_TYPE = "scroll";
    var KEYDOWN_EVENT_TYPE = "keydown";
    var MOUSEUP_EVENT_TYPE = "mouseup";
    var AUXCLICK_EVENT_TYPE = "auxclick";
    var MOUSEOUT_EVENT_TYPE = "mouseout";
    var DBLCLICK_EVENT_TYPE = "dblclick";
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    var CONTEXTMENU_EVENT_TYPE = "contextmenu";
    var SELECTIONCHANGE_EVENT_TYPE = "selectionchange";
    var _default = {
      CUT_EVENT_TYPE,
      COPY_EVENT_TYPE,
      BLUR_EVENT_TYPE,
      PASTE_EVENT_TYPE,
      WHEEL_EVENT_TYPE,
      INPUT_EVENT_TYPE,
      FOCUS_EVENT_TYPE,
      CLICK_EVENT_TYPE,
      KEYUP_EVENT_TYPE,
      SELECT_EVENT_TYPE,
      CHANGE_EVENT_TYPE,
      RESIZE_EVENT_TYPE,
      SCROLL_EVENT_TYPE,
      KEYDOWN_EVENT_TYPE,
      MOUSEUP_EVENT_TYPE,
      AUXCLICK_EVENT_TYPE,
      MOUSEOUT_EVENT_TYPE,
      DBLCLICK_EVENT_TYPE,
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE,
      CONTEXTMENU_EVENT_TYPE,
      SELECTIONCHANGE_EVENT_TYPE
    };
  });

  // lib/mixins/key.js
  var require_key = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
  });

  // lib/mixins/click.js
  var require_click = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onClick(clickHandler, element) {
      this.on(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.off(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function onDoubleClick(clickHandler, element) {
      this.on(_eventTypes.DBLCLICK_EVENT_TYPE, clickHandler, element);
    }
    function offDoubleClick(clickHandler, element) {
      this.off(_eventTypes.DBLCLICK_EVENT_TYPE, clickHandler, element);
    }
    var clickMixins = {
      onClick,
      offClick,
      onDoubleClick,
      offDoubleClick
    };
    var _default = clickMixins;
  });

  // lib/mixins/state.js
  var require_state = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
  });

  // lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "TEXT_HTML_CONTENT_TYPE", {
      enumerable: true,
      get: function() {
        return TEXT_HTML_CONTENT_TYPE;
      }
    });
    var TEXT_HTML_CONTENT_TYPE = "text/html";
  });

  // lib/mixins/resize.js
  var require_resize = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      onResize: function() {
        return onResize;
      },
      offResize: function() {
        return offResize;
      },
      default: function() {
        return _default;
      }
    });
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
      var _this = this;
      var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _contentTypes.TEXT_HTML_CONTENT_TYPE;
      resizeObject.setAttribute("style", style);
      resizeObject.data = data;
      resizeObject.type = type;
      this.__resizeObject__ = resizeObject;
      resizeObject.onload = function() {
        return resizeObjectLoadHandler(_this);
      };
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
    function resizeObjectLoadHandler(element) {
      var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView;
      resizeObjectWindow.addEventListener(_eventTypes.RESIZE_EVENT_TYPE, function(event) {
        var resizeEventListeners = element.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
        resizeEventListeners.forEach(function(resizeEventListener1) {
          return resizeEventListener1(event);
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
    var _resize = require_resize();
    function on(eventTypes, handler) {
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      var _this = this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            _this.addResizeObject();
          }
        }
        var eventListener = _this.addEventListener(eventType, handler, element);
        _this.domElement.addEventListener(eventType, eventListener);
      });
    }
    function off(eventTypes, handler) {
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      var _this = this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        var eventListener = _this.removeEventListener(eventType, handler, element);
        _this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            _this.removeResizeObject();
          }
        }
      });
    }
    function addEventListener(eventType, handler, element) {
      if (this.eventListeners === void 0) {
        this.eventListeners = [];
      }
      var eventListener = this.createEventListener(eventType, handler, element);
      this.eventListeners.push(eventListener);
      return eventListener;
    }
    function removeEventListener(eventType, handler, element) {
      var eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
      this.eventListeners.splice(start, deleteCount);
      if (this.eventListeners.length === 0) {
        delete this.eventListeners;
      }
      return eventListener;
    }
    function findEventListener(eventType, handler, element) {
      var eventListener = this.eventListeners.find(function(eventListener2) {
        if (eventListener2.element === element && eventListener2.handler === handler && eventListener2.eventType === eventType) {
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
      var _this = this;
      var eventListener;
      var handlerElement = element;
      eventListener = function(event) {
        var _$element = _this;
        handler.call(handlerElement, event, _$element);
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
      createEventListener,
      findEventListener,
      findEventListeners
    };
    var _default = eventMixins;
  });

  // lib/mixins/mouse.js
  var require_mouse = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
  });

  // lib/mixins/scroll.js
  var require_scroll = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
  });

  // lib/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _jsx = /* @__PURE__ */ _interop_require_default(require_jsx());
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _state = /* @__PURE__ */ _interop_require_default(require_state());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _resize = /* @__PURE__ */ _interop_require_default(require_resize());
    var _scroll = /* @__PURE__ */ _interop_require_default(require_scroll());
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _object = require_object();
    var _name = require_name();
    var _array = require_array();
    var _constants = require_constants();
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    var Element = /* @__PURE__ */ function() {
      function Element2(selector) {
        _class_call_check(this, Element2);
        if (selector) {
          this.domElement = document.querySelector(selector);
          this.domElement.__element__ = this;
        }
      }
      _create_class(Element2, [
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
          value: function getWidth() {
            var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
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
          value: function getHeight() {
            var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
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
          key: "insert",
          value: function insert(element) {
            this.append(element);
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
          key: "mountBefore",
          value: function mountBefore(siblingElement) {
            this.insertBefore(siblingElement);
            var element = this;
            mountElement(element);
          }
        },
        {
          key: "mountAfter",
          value: function mountAfter(siblingElement) {
            this.insertBefore(siblingElement);
            var element = this;
            mountElement(element);
          }
        },
        {
          key: "mount",
          value: function mount(element) {
            this.add(element);
            mountElement(element);
          }
        },
        {
          key: "unmount",
          value: function unmount(element) {
            unmountElement(element);
            this.remove(element);
          }
        },
        {
          key: "show",
          value: function show() {
            var displayStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BLOCK;
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
          value: function display(display) {
            this.style(_constants.DISPLAY, display);
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
          value: function html(html) {
            if (html === void 0) {
              var innerHTML = this.domElement.innerHTML;
              html = innerHTML;
              return html;
            } else {
              var innerHTML1 = html;
              this.domElement.innerHTML = innerHTML1;
            }
          }
        },
        {
          key: "css",
          value: function css(css) {
            var _this = this;
            if (css === void 0) {
              var computedStyle = getComputedStyle(this.domElement), _$css = {};
              for (var index = 0; index < computedStyle.length; index++) {
                var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name);
                _$css[name] = value;
              }
              return _$css;
            } else if ((typeof css === "undefined" ? "undefined" : _type_of(css)) === _constants.STRING) {
              var name1 = css;
              var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1);
              css = value1;
              return css;
            } else {
              var names = Object.keys(css);
              names.forEach(function(name2) {
                var value2 = css[name2];
                _this.style(name2, value2);
              });
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
            ].concat(_to_consumable_array(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
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
            ].concat(_to_consumable_array(remainingArguments))), defaultProperties = {}, ignoredProperties = [];
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
    function mountElement(element) {
      var descendantElements = element.getDescendantElements(), elements = [
        element
      ].concat(_to_consumable_array(descendantElements));
      elements.reverse();
      elements.forEach(function(element2) {
        return element2.didMount && element2.didMount();
      });
    }
    function unmountElement(element) {
      var descendantElements = element.getDescendantElements(), elements = [
        element
      ].concat(_to_consumable_array(descendantElements));
      elements.forEach(function(element2) {
        return element2.willUnmount && element2.willUnmount();
      });
    }
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }
      var _Function_prototype_bind;
      var selector = null, element = new ((_Function_prototype_bind = Function.prototype.bind).call.apply(_Function_prototype_bind, [
        Class,
        null,
        selector
      ].concat(_to_consumable_array(remainingArguments))))();
      element.domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      element.domElement.__element__ = element;
      return element;
    }
    function defaultPropertiesFromClass(Class) {
      var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object.combine)(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
      }
      return defaultProperties;
    }
    function ignoredPropertiesFromClass(Class) {
      var ignoredProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array.augment)(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
          return !ignoredProperties.includes(ignoredProperty);
        });
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    var _array = require_array();
    var _constants = require_constants();
    var _elements = require_elements();
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        childElements = sanitiseChildElements(childElements);
        properties = Object.assign({
          childElements
        }, properties);
        if (false) {
        } else if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          element = Class.fromClass(Class, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
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
    function sanitiseChildElements(childElements) {
      childElements = (0, _array.flatten)(childElements);
      childElements = (0, _elements.removeFalseyElements)(childElements);
      childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
      return childElements;
    }
    function isSubclassOf(argument, Class) {
      var subclassOf = _instanceof(argument.prototype, Class);
      return subclassOf;
    }
  });

  // lib/element/body.js
  var require_body = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Body;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    var _constants = require_constants();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Body = /* @__PURE__ */ function(Element) {
      _inherits(Body2, Element);
      var _super = _create_super(Body2);
      function Body2() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BODY;
        _class_call_check(this, Body2);
        return _super.call(this, selector);
      }
      return Body2;
    }(_wrap_native_super(_element.default));
    _define_property(Body, "tagName", "body");
  });

  // lib/element/link.js
  var require_link = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Link;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Link = /* @__PURE__ */ function(Element) {
      _inherits(Link2, Element);
      var _super = _create_super(Link2);
      function Link2() {
        _class_call_check(this, Link2);
        return _super.apply(this, arguments);
      }
      _create_class(Link2, [
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
    }(_wrap_native_super(_element.default));
    _define_property(Link, "tagName", "a");
  });

  // lib/mixins/change.js
  var require_change = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
  });

  // lib/inputElement.js
  var require_inputElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    var _change = /* @__PURE__ */ _interop_require_default(require_change());
    var _eventTypes = require_eventTypes();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var InputElement = /* @__PURE__ */ function(Element) {
      _inherits(InputElement2, Element);
      var _super = _create_super(InputElement2);
      function InputElement2() {
        _class_call_check(this, InputElement2);
        return _super.apply(this, arguments);
      }
      _create_class(InputElement2, [
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
    }(_wrap_native_super(_element.default));
    Object.assign(InputElement.prototype, _change.default);
    var _default = InputElement;
  });

  // lib/inputElement/input.js
  var require_input = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Input;
      }
    });
    var _inputElement = /* @__PURE__ */ _interop_require_default(require_inputElement());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Input = /* @__PURE__ */ function(InputElement) {
      _inherits(Input2, InputElement);
      var _super = _create_super(Input2);
      function Input2() {
        _class_call_check(this, Input2);
        return _super.apply(this, arguments);
      }
      return Input2;
    }(_inputElement.default);
    _define_property(Input, "tagName", "input");
  });

  // lib/element/button.js
  var require_button = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Button;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Button = /* @__PURE__ */ function(Element) {
      _inherits(Button2, Element);
      var _super = _create_super(Button2);
      function Button2() {
        _class_call_check(this, Button2);
        return _super.apply(this, arguments);
      }
      return Button2;
    }(_wrap_native_super(_element.default));
    _define_property(Button, "tagName", "button");
  });

  // lib/element/select.js
  var require_select = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    var _change = /* @__PURE__ */ _interop_require_default(require_change());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Select = /* @__PURE__ */ function(Element) {
      _inherits(Select2, Element);
      var _super = _create_super(Select2);
      function Select2() {
        _class_call_check(this, Select2);
        return _super.apply(this, arguments);
      }
      _create_class(Select2, [
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
    }(_wrap_native_super(_element.default));
    _define_property(Select, "tagName", "select");
    Object.assign(Select.prototype, _change.default);
    var _default = Select;
  });

  // lib/element/checkbox.js
  var require_checkbox = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    var _change = /* @__PURE__ */ _interop_require_default(require_change());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Checkbox = /* @__PURE__ */ function(Element) {
      _inherits(Checkbox2, Element);
      var _super = _create_super(Checkbox2);
      function Checkbox2() {
        _class_call_check(this, Checkbox2);
        return _super.apply(this, arguments);
      }
      _create_class(Checkbox2, [
        {
          key: "isChecked",
          value: function isChecked() {
            return this.domElement.checked;
          }
        },
        {
          key: "check",
          value: function check() {
            var checked = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            this.domElement.checked = checked;
          }
        }
      ]);
      return Checkbox2;
    }(_wrap_native_super(_element.default));
    _define_property(Checkbox, "tagName", "input");
    _define_property(Checkbox, "defaultProperties", {
      type: "checkbox"
    });
    Object.assign(Checkbox.prototype, _change.default);
    var _default = Checkbox;
  });

  // lib/inputElement/textarea.js
  var require_textarea = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Textarea;
      }
    });
    var _inputElement = /* @__PURE__ */ _interop_require_default(require_inputElement());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Textarea = /* @__PURE__ */ function(InputElement) {
      _inherits(Textarea2, InputElement);
      var _super = _create_super(Textarea2);
      function Textarea2() {
        _class_call_check(this, Textarea2);
        return _super.apply(this, arguments);
      }
      return Textarea2;
    }(_inputElement.default);
    _define_property(Textarea, "tagName", "textarea");
  });

  // lib/mixins/window.js
  var require_window = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _resize = require_resize();
    var _default = {
      onResize: _resize.onResize,
      offResize: _resize.offResize
    };
  });

  // lib/window.js
  var require_window2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _window = /* @__PURE__ */ _interop_require_default(require_window());
    var _constants = require_constants();
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    var Window = /* @__PURE__ */ function() {
      function Window2() {
        _class_call_check(this, Window2);
        this.domElement = window;
      }
      _create_class(Window2, [
        {
          key: "assign",
          value: function assign() {
            for (var _len = arguments.length, sources = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
              sources[_key2] = arguments[_key2];
            }
            var _Object;
            var target = this.domElement;
            (_Object = Object).assign.apply(_Object, [
              target
            ].concat(_to_consumable_array(sources)));
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
        },
        {
          key: "getSelection",
          value: function getSelection() {
            return this.domElement.getSelection();
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
    var _default = (typeof window === "undefined" ? "undefined" : _type_of(window)) === _constants.UNDEFINED ? void 0 : new Window();
  });

  // lib/mixins/selection.js
  var require_selection = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onSelectionChange(selectionChangeHandler, element) {
      this.on(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
    }
    function offSelectionChange(selectionChangeHandler, element) {
      this.off(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
    }
    function createEventListener(eventType, handler, element) {
      var _this = this;
      var eventListener;
      var handlerElement = element;
      eventListener = function(event) {
        if (eventType === _eventTypes.SELECTIONCHANGE_EVENT_TYPE) {
          var domElement = handlerElement.domElement, currentTarget = event.currentTarget, activeElement = currentTarget.activeElement;
          if (domElement !== activeElement) {
            return;
          }
        }
        var _$element = _this;
        handler.call(handlerElement, event, _$element);
      };
      Object.assign(eventListener, {
        element,
        handler,
        eventType
      });
      return eventListener;
    }
    var selectionMixins = {
      onSelectionChange,
      offSelectionChange,
      createEventListener
    };
    var _default = selectionMixins;
  });

  // lib/document.js
  var require_document = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _selection = /* @__PURE__ */ _interop_require_default(require_selection());
    var _constants = require_constants();
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    var Document = /* @__PURE__ */ function() {
      function Document2() {
        _class_call_check(this, Document2);
        this.domElement = document;
      }
      _create_class(Document2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "createRange",
          value: function createRange() {
            return this.domElement.createRange();
          }
        }
      ]);
      return Document2;
    }();
    var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? void 0 : new Document();
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _click.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
    Object.assign(Document.prototype, _selection.default);
  });

  // lib/mouseButtons.js
  var require_mouseButtons = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      LEFT_MOUSE_BUTTON: function() {
        return LEFT_MOUSE_BUTTON;
      },
      RIGHT_MOUSE_BUTTON: function() {
        return RIGHT_MOUSE_BUTTON;
      },
      MIDDLE_MOUSE_BUTTON: function() {
        return MIDDLE_MOUSE_BUTTON;
      },
      default: function() {
        return _default;
      }
    });
    var LEFT_MOUSE_BUTTON = 0;
    var RIGHT_MOUSE_BUTTON = 2;
    var MIDDLE_MOUSE_BUTTON = 1;
    var _default = {
      LEFT_MOUSE_BUTTON,
      RIGHT_MOUSE_BUTTON,
      MIDDLE_MOUSE_BUTTON
    };
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      React: function() {
        return _react.default;
      },
      Bounds: function() {
        return _bounds.default;
      },
      Offset: function() {
        return _offset.default;
      },
      Body: function() {
        return _body.default;
      },
      Link: function() {
        return _link.default;
      },
      Input: function() {
        return _input.default;
      },
      Button: function() {
        return _button.default;
      },
      Select: function() {
        return _select.default;
      },
      Element: function() {
        return _element.default;
      },
      Checkbox: function() {
        return _checkbox.default;
      },
      Textarea: function() {
        return _textarea.default;
      },
      TextElement: function() {
        return _textElement.default;
      },
      InputElement: function() {
        return _inputElement.default;
      },
      window: function() {
        return _window.default;
      },
      document: function() {
        return _document.default;
      },
      eventTypes: function() {
        return _eventTypes.default;
      },
      mouseButtons: function() {
        return _mouseButtons.default;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _body = /* @__PURE__ */ _interop_require_default(require_body());
    var _link = /* @__PURE__ */ _interop_require_default(require_link());
    var _input = /* @__PURE__ */ _interop_require_default(require_input());
    var _button = /* @__PURE__ */ _interop_require_default(require_button());
    var _select = /* @__PURE__ */ _interop_require_default(require_select());
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    var _checkbox = /* @__PURE__ */ _interop_require_default(require_checkbox());
    var _textarea = /* @__PURE__ */ _interop_require_default(require_textarea());
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _inputElement = /* @__PURE__ */ _interop_require_default(require_inputElement());
    var _window = /* @__PURE__ */ _interop_require_default(require_window2());
    var _document = /* @__PURE__ */ _interop_require_default(require_document());
    var _eventTypes = /* @__PURE__ */ _interop_require_default(require_eventTypes());
    var _mouseButtons = /* @__PURE__ */ _interop_require_default(require_mouseButtons());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/preamble.js
  var require_preamble = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _index = require_lib();
    _index.window.assign({
      React: _index.React
    });
  });

  // lib/example/checkbox.js
  var require_checkbox2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _class;
      }
    });
    var _index = require_lib();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var _class = /* @__PURE__ */ function(Checkbox) {
      _inherits(_class2, Checkbox);
      var _super = _create_super(_class2);
      function _class2() {
        _class_call_check(this, _class2);
        return _super.apply(this, arguments);
      }
      return _class2;
    }(_index.Checkbox);
    _define_property(_class, "defaultProperties", {
      className: "example",
      reference: "example"
    });
  });

  // lib/example/view.js
  var require_view = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return View;
      }
    });
    var _index = require_lib();
    var _checkbox = /* @__PURE__ */ _interop_require_default(require_checkbox2());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var LEFT_MOUSE_BUTTON = _index.mouseButtons.LEFT_MOUSE_BUTTON;
    var View = /* @__PURE__ */ function(Element) {
      _inherits(View2, Element);
      var _super = _create_super(View2);
      function View2() {
        _class_call_check(this, View2);
        return _super.apply(this, arguments);
      }
      _create_class(View2, [
        {
          key: "childElements",
          value: function childElements() {
            return [
              /* @__PURE__ */ React.createElement(_checkbox.default, {
                onChange: function(event, element) {
                  console.log("Changed");
                },
                checked: true
              }),
              /* @__PURE__ */ React.createElement(_index.Textarea, {
                onChange: function(event, element) {
                  console.log("change");
                },
                onScroll: function onScroll(event, element) {
                  var scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
                  console.log(scrollTop, scrollLeft);
                }
              }),
              /* @__PURE__ */ React.createElement(_index.Button, {
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
    }(_wrap_native_super(_index.Element));
    _define_property(View, "tagName", "div");
    _define_property(View, "defaultProperties", {
      className: "view"
    });
    var Div = /* @__PURE__ */ function(Element) {
      _inherits(Div2, Element);
      var _super = _create_super(Div2);
      function Div2() {
        _class_call_check(this, Div2);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "mouseMoveHandler", function(event, element) {
          var pageX = event.pageX, pageY = event.pageY;
          console.log(pageX, pageY);
        });
        _define_property(_assert_this_initialized(_this), "resizeHandler", function(event, element) {
          var width = _this.getWidth(), height = _this.getHeight();
          console.log(width, height);
        });
        return _this;
      }
      _create_class(Div2, [
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
    }(_wrap_native_super(_index.Element));
    _define_property(Div, "tagName", "div");
  });

  // lib/example.js
  var require_example = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    require_preamble();
    var _index = require_lib();
    var _view = /* @__PURE__ */ _interop_require_default(require_view());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var body = new _index.Body();
    body.mount(/* @__PURE__ */ React.createElement(_view.default, null));
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL29mZnNldC5qcyIsICJzcmMvYm91bmRzLmpzIiwgInNyYy9jb25zdGFudHMuanMiLCAic3JjL3V0aWxpdGllcy9vYmplY3QuanMiLCAic3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJzcmMvdXRpbGl0aWVzL25hbWUuanMiLCAic3JjL3V0aWxpdGllcy9kb20uanMiLCAic3JjL21peGlucy9lbGVtZW50LmpzIiwgInNyYy90ZXh0RWxlbWVudC5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9taXhpbnMvanN4LmpzIiwgInNyYy9ldmVudFR5cGVzLmpzIiwgInNyYy9taXhpbnMva2V5LmpzIiwgInNyYy9taXhpbnMvY2xpY2suanMiLCAic3JjL21peGlucy9zdGF0ZS5qcyIsICJzcmMvY29udGVudFR5cGVzLmpzIiwgInNyYy9taXhpbnMvcmVzaXplLmpzIiwgInNyYy9taXhpbnMvZXZlbnQuanMiLCAic3JjL21peGlucy9tb3VzZS5qcyIsICJzcmMvbWl4aW5zL3Njcm9sbC5qcyIsICJzcmMvZWxlbWVudC5qcyIsICJzcmMvcmVhY3QuanMiLCAic3JjL2VsZW1lbnQvYm9keS5qcyIsICJzcmMvZWxlbWVudC9saW5rLmpzIiwgInNyYy9taXhpbnMvY2hhbmdlLmpzIiwgInNyYy9pbnB1dEVsZW1lbnQuanMiLCAic3JjL2lucHV0RWxlbWVudC9pbnB1dC5qcyIsICJzcmMvZWxlbWVudC9idXR0b24uanMiLCAic3JjL2VsZW1lbnQvc2VsZWN0LmpzIiwgInNyYy9lbGVtZW50L2NoZWNrYm94LmpzIiwgInNyYy9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCAic3JjL21peGlucy93aW5kb3cuanMiLCAic3JjL3dpbmRvdy5qcyIsICJzcmMvbWl4aW5zL3NlbGVjdGlvbi5qcyIsICJzcmMvZG9jdW1lbnQuanMiLCAic3JjL21vdXNlQnV0dG9ucy5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUvcHJlYW1ibGUuanMiLCAic3JjL2V4YW1wbGUvY2hlY2tib3guanMiLCAic3JjL2V4YW1wbGUvdmlldy5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDw9IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDw9IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEZPUiA9IFwiZm9yXCI7XG5leHBvcnQgY29uc3QgQk9EWSA9IFwiYm9keVwiO1xuZXhwb3J0IGNvbnN0IE5PTkUgPSBcIm5vbmVcIjtcbmV4cG9ydCBjb25zdCBTUEFDRSA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IENMQVNTID0gXCJjbGFzc1wiO1xuZXhwb3J0IGNvbnN0IFdJRFRIID0gXCJ3aWR0aFwiO1xuZXhwb3J0IGNvbnN0IEJMT0NLID0gXCJibG9ja1wiO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IFwiaGVpZ2h0XCI7XG5leHBvcnQgY29uc3QgT0JKRUNUID0gXCJvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IERJU1BMQVkgPSBcImRpc3BsYXlcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgRElTQUJMRUQgPSBcImRpc2FibGVkXCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkQgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBIVE1MX0ZPUiA9IFwiaHRtbEZvclwiO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9ICd1bmRlZmluZWQnO1xuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuZXhwb3J0IGNvbnN0IEFCT1VUX0JMQU5LID0gXCJhYm91dDpibGFua1wiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRV9VUkkgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QRVJUSUVTID0gXCJkZWZhdWx0UHJvcGVydGllc1wiO1xuZXhwb3J0IGNvbnN0IElHTk9SRURfUFJPUEVSVElFUyA9IFwiaWdub3JlZFByb3BlcnRpZXNcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9PTEVBTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUodGFyZ2V0LCBzb3VyY2UgPSB7fSkge1xuICB0YXJnZXQgPSB7IC4uLnRhcmdldCB9OyAgLy8vXG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W25hbWVdLFxuICAgICAgICAgIHNvdXJjZVZhbHVlID0gc291cmNlW25hbWVdLFxuICAgICAgICAgIHRhcmdldEhhc093blByb3BlcnR5ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgdGFyZ2V0W25hbWVdID0gdGFyZ2V0SGFzT3duUHJvcGVydHkgP1xuICAgICAgICAgICAgICAgICAgICAgY29tYmluZVZhbHVlcyh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU7IC8vL1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0LCBuYW1lcyA9IFtdKSB7XG4gIHRhcmdldCA9IHsgLi4udGFyZ2V0IH07ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0SGFzT3duUHJvcGVydHkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRbbmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkge1xuICBjb25zdCB0YXJnZXRWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbih0YXJnZXRWYWx1ZSksXG4gICAgICAgIHNvdXJjZVZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHNvdXJjZVZhbHVlKSxcbiAgICAgICAgY29tYmluZWRWYWx1ZSA9ICh0YXJnZXRWYWx1ZUJvb2xlYW4gJiYgc291cmNlVmFsdWVCb29sZWFuKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0VmFsdWV9ICR7c291cmNlVmFsdWV9YDtcblxuICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUJvb2xlYW4odmFsdWUpIHtcbiAgY29uc3QgdmFsdWVCb29sZWFuID0gKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTik7XG5cbiAgcmV0dXJuIHZhbHVlQm9vbGVhbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkxID0gWyAuLi5hcnJheTEgXTsgLy8vXG5cbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR1RhZ05hbWUodGFnTmFtZSkge1xuICByZXR1cm4gc3ZnVGFnTmFtZXMuaW5jbHVkZXModGFnTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuY29uc3Qgc3ZnVGFnTmFtZXMgPSBbXG4gICAgICAgIFwiYWx0R2x5cGhcIiwgXCJhbmltYXRlXCIsIFwiYW5pbWF0ZUNvbG9yXCIsIFwiYW5pbWF0ZU1vdGlvblwiLCBcImFuaW1hdGVUcmFuc2Zvcm1cIiwgXCJhbmltYXRpb25cIiwgXCJhdWRpb1wiLFxuICAgICAgICBcImNpcmNsZVwiLCBcImNsaXBQYXRoXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImN1cnNvclwiLFxuICAgICAgICBcImRlZnNcIiwgXCJkZXNjXCIsIFwiZGlzY2FyZFwiLFxuICAgICAgICBcImVsbGlwc2VcIixcbiAgICAgICAgXCJmZUJsZW5kXCIsIFwiZmVDb2xvck1hdHJpeFwiLCBcImZlQ29tcG9uZW50VHJhbnNmZXJcIiwgXCJmZUNvbXBvc2l0ZVwiLCBcImZlQ29udm9sdmVNYXRyaXhcIiwgXCJmZURpZmZ1c2VMaWdodGluZ1wiLCBcImZlRGlzcGxhY2VtZW50TWFwXCIsIFwiZmVEaXN0YW50TGlnaHRcIiwgXCJmZURyb3BTaGFkb3dcIiwgXCJmZUZsb29kXCIsIFwiZmVGdW5jQVwiLCBcImZlRnVuY0JcIiwgXCJmZUZ1bmNHXCIsIFwiZmVGdW5jUlwiLCBcImZlR2F1c3NpYW5CbHVyXCIsIFwiZmVJbWFnZVwiLCBcImZlTWVyZ2VcIiwgXCJmZU1lcmdlTm9kZVwiLCBcImZlTW9ycGhvbG9neVwiLCBcImZlT2Zmc2V0XCIsIFwiZmVQb2ludExpZ2h0XCIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsIFwiZmVTcG90TGlnaHRcIiwgXCJmZVRpbGVcIiwgXCJmZVR1cmJ1bGVuY2VcIiwgXCJmaWx0ZXJcIiwgXCJmb250XCIsIFwiZm9udC1mYWNlXCIsIFwiZm9udC1mYWNlLWZvcm1hdFwiLCBcImZvbnQtZmFjZS1uYW1lXCIsIFwiZm9udC1mYWNlLXVyaVwiLCBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgXCJnXCIsIFwiZ2x5cGhcIiwgXCJnbHlwaFJlZlwiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYXRjaFwiLCBcImhhdGNocGF0aFwiLCBcImhrZXJuXCIsXG4gICAgICAgIFwiaW1hZ2VcIiwgXCJsaW5lXCIsIFwibGluZWFyR3JhZGllbnRcIixcbiAgICAgICAgXCJsaXN0ZW5lclwiLFxuICAgICAgICBcIm1hcmtlclwiLCBcIm1hc2tcIiwgXCJtZXNoXCIsIFwibWVzaGdyYWRpZW50XCIsIFwibWVzaHBhdGNoXCIsIFwibWVzaHJvd1wiLCBcIm1ldGFkYXRhXCIsIFwibWlzc2luZy1nbHlwaFwiLCBcIm1wYXRoXCIsXG4gICAgICAgIFwicGF0aFwiLCBcInBhdHRlcm5cIiwgXCJwb2x5Z29uXCIsIFwicG9seWxpbmVcIiwgXCJwcmVmZXRjaFwiLFxuICAgICAgICBcInJhZGlhbEdyYWRpZW50XCIsIFwicmVjdFwiLFxuICAgICAgICBcInNjcmlwdFwiLCBcInNldFwiLCBcInNvbGlkY29sb3JcIiwgXCJzdG9wXCIsIFwic3R5bGVcIiwgXCJzdmdcIiwgXCJzd2l0Y2hcIiwgXCJzeW1ib2xcIixcbiAgICAgICAgXCJ0YnJlYWtcIiwgXCJ0ZXh0XCIsIFwidGV4dEFyZWFcIiwgXCJ0ZXh0UGF0aFwiLCBcInRpdGxlXCIsIFwidHJlZlwiLCBcInRzcGFuXCIsXG4gICAgICAgIFwidW5rbm93blwiLCBcInVzZVwiLFxuICAgICAgICBcInZpZGVvXCIsIFwidmlld1wiLCBcInZrZXJuXCJcbiAgICAgIF0sXG4gICAgICBzdmdBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlbnQtaGVpZ2h0XCIsIFwiYWNjdW11bGF0ZVwiLCBcImFkZGl0aXZlXCIsIFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiYWxwaGFiZXRpY1wiLCBcImFtcGxpdHVkZVwiLCBcImFyYWJpYy1mb3JtXCIsIFwiYXNjZW50XCIsIFwiYXR0cmlidXRlTmFtZVwiLCBcImF0dHJpYnV0ZVR5cGVcIiwgXCJhemltdXRoXCIsXG4gICAgICAgIFwiYmFuZHdpZHRoXCIsIFwiYmFzZUZyZXF1ZW5jeVwiLCBcImJhc2VQcm9maWxlXCIsIFwiYmFzZWxpbmUtc2hpZnRcIiwgXCJiYm94XCIsIFwiYmVnaW5cIiwgXCJiaWFzXCIsIFwiYnlcIixcbiAgICAgICAgXCJjYWxjTW9kZVwiLCBcImNhcC1oZWlnaHRcIiwgXCJjbGlwXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xpcC1wYXRoXCIsIFwiY2xpcC1ydWxlXCIsIFwiY2xpcFBhdGhVbml0c1wiLCBcImNvbG9yXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvblwiLCBcImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1wiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjb2xvci1yZW5kZXJpbmdcIiwgXCJjb250ZW50U2NyaXB0VHlwZVwiLCBcImNvbnRlbnRTdHlsZVR5cGVcIiwgXCJjcm9zc29yaWdpblwiLCBcImN1cnNvclwiLCBcImN4XCIsIFwiY3lcIixcbiAgICAgICAgXCJkXCIsIFwiZGVmYXVsdEFjdGlvblwiLCBcImRlc2NlbnRcIiwgXCJkaWZmdXNlQ29uc3RhbnRcIiwgXCJkaXJlY3Rpb25cIiwgXCJkaXNwbGF5XCIsIFwiZGl2aXNvclwiLCBcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiZG93bmxvYWRcIiwgXCJkdXJcIiwgXCJkeFwiLCBcImR5XCIsXG4gICAgICAgIFwiZWRnZU1vZGVcIiwgXCJlZGl0YWJsZVwiLCBcImVsZXZhdGlvblwiLCBcImVuYWJsZS1iYWNrZ3JvdW5kXCIsIFwiZW5kXCIsIFwiZXZlbnRcIiwgXCJleHBvbmVudFwiLCBcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcbiAgICAgICAgXCJmaWxsXCIsIFwiZmlsbC1vcGFjaXR5XCIsIFwiZmlsbC1ydWxlXCIsIFwiZmlsdGVyXCIsIFwiZmlsdGVyUmVzXCIsIFwiZmlsdGVyVW5pdHNcIiwgXCJmbG9vZC1jb2xvclwiLCBcImZsb29kLW9wYWNpdHlcIiwgXCJmb2N1c0hpZ2hsaWdodFwiLCBcImZvY3VzYWJsZVwiLCBcImZvbnQtZmFtaWx5XCIsIFwiZm9udC1zaXplXCIsIFwiZm9udC1zaXplLWFkanVzdFwiLCBcImZvbnQtc3RyZXRjaFwiLCBcImZvbnQtc3R5bGVcIiwgXCJmb250LXZhcmlhbnRcIiwgXCJmb250LXdlaWdodFwiLCBcImZvcm1hdFwiLCBcImZyXCIsIFwiZnJvbVwiLCBcImZ4XCIsIFwiZnlcIixcbiAgICAgICAgXCJnMVwiLCBcImcyXCIsIFwiZ2x5cGgtbmFtZVwiLCBcImdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWxcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbFwiLCBcImdseXBoUmVmXCIsIFwiZ3JhZGllbnRUcmFuc2Zvcm1cIiwgXCJncmFkaWVudFVuaXRzXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhbmdpbmdcIiwgXCJoYXRjaENvbnRlbnRVbml0c1wiLCBcImhhdGNoVW5pdHNcIiwgXCJoZWlnaHRcIiwgXCJob3Jpei1hZHYteFwiLCBcImhvcml6LW9yaWdpbi14XCIsIFwiaG9yaXotb3JpZ2luLXlcIiwgXCJocmVmXCIsIFwiaHJlZmxhbmdcIixcbiAgICAgICAgXCJpZFwiLCBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZG9tRWxlbWVudHMsIChkb21FbGVtZW50KSA9PiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiBkb21FbGVtZW50Ll9fZWxlbWVudF9fKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGlmIChwYXJlbnRET01Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgICBoZWlnaHQtLTtcblxuICAgICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHB1c2goZGVzY2VuZGFudERPTU5vZGVzLCBjaGlsZERPTU5vZGVzKTtcblxuICAgIGRlcHRoLS07XG5cbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goKGNoaWxkRE9NTm9kZSkgPT4gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzKSk7XG4gIH1cblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRvbU5vZGVzLCBzZWxlY3Rvcikge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIChkb21Ob2RlKSA9PiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTtcblxuICBzd2l0Y2ggKGRvbU5vZGVUeXBlKSB7XG4gICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERToge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFOiB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IFdJTERDQVJEKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBbXSxcbiAgICAgICAgZG9tTm9kZXNMZW5ndGggPSBkb21Ob2Rlcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvbU5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IGRvbU5vZGVzW2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXN0KGRvbU5vZGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZmlsdGVyZWRET01Ob2Rlcy5wdXNoKGRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFdJTERDQVJEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1IZWlnaHQgPSBJbmZpbml0eSkge1xuICBjb25zdCBoZWlnaHQgPSBtYXhpbXVtSGVpZ2h0LCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBhc2NlbmRhbnRET01Ob2RlcyA9IGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0KSxcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoYXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgY29uc3QgZGVwdGggPSBtYXhpbXVtRGVwdGgsIC8vL1xuICAgICAgICBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlcHRoKSxcbiAgICAgICAgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gIGlmICgocHJldmlvdXNTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihwcmV2aW91c1NpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHByZXZpb3VzU2libGluZ0VsZW1lbnQ7XG59XG5cbmNvbnN0IGVsZW1lbnRNaXhpbnMgPSB7XG4gIGdldFBhcmVudEVsZW1lbnQsXG4gIGdldENoaWxkRWxlbWVudHMsXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzLFxuICBnZXREZXNjZW5kYW50RWxlbWVudHMsXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudCxcbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEVsZW1lbnQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUsIHBydW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGZpcnN0LCBndWFyYW50ZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lLCBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEhUTUxfRk9SLCBDTEFTU19OQU1FLCBCT09MRUFOLCBGVU5DVElPTiwgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgcHJvcGVydGllcyA9IHBydW5lKHRoaXMucHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpOyAvLy9cblxuICBjb25zdCB7IG5hbWVzcGFjZVVSSSB9ID0gdGhpcy5kb21FbGVtZW50LFxuICAgICAgICBzdmcgPSAobmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLFxuICAgICAgICBuYW1lcyA9IHByb3BlcnRpZXNLZXlzOyAgLy8vPVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV0sXG4gICAgICAgICAgbmFtZUhhbmRsZXJOYW1lID0gaXNOYW1lSGFuZGxlck5hbWUobmFtZSk7XG5cbiAgICBpZiAobmFtZUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zyk7XG5cbiAgICAgIGlmIChuYW1lQXR0cmlidXRlTmFtZSkge1xuICAgICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudCh0aGlzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMsICAvLy9cbiAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGQoY2hpbGRFbGVtZW50KTtcbiAgfSk7XG5cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gQk9PTEVBTikge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgfVxuICB9LCBbXSk7XG59XG5cbmNvbnN0IGpzeE1peGlucyA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzLFxuICBnZXRQcm9wZXJ0aWVzLFxuICBnZXRDb250ZXh0LFxuICBhc3NpZ25Db250ZXh0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBqc3hNaXhpbnM7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gIGxldCBjaGlsZEVsZW1lbnRzID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5jaGlsZEVsZW1lbnRzLmNhbGwoZWxlbWVudCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOYW1lSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gL15vbi8udGVzdChuYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgcmV0dXJuIHN2ZyA/IGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6IGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSlcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IENVVF9FVkVOVF9UWVBFID0gXCJjdXRcIjtcbmV4cG9ydCBjb25zdCBDT1BZX0VWRU5UX1RZUEUgPSBcImNvcHlcIjtcbmV4cG9ydCBjb25zdCBCTFVSX0VWRU5UX1RZUEUgPSBcImJsdXJcIjtcbmV4cG9ydCBjb25zdCBQQVNURV9FVkVOVF9UWVBFID0gXCJwYXN0ZVwiO1xuZXhwb3J0IGNvbnN0IFdIRUVMX0VWRU5UX1RZUEUgPSBcIndoZWVsXCI7XG5leHBvcnQgY29uc3QgSU5QVVRfRVZFTlRfVFlQRSA9IFwiaW5wdXRcIjtcbmV4cG9ydCBjb25zdCBGT0NVU19FVkVOVF9UWVBFID0gXCJmb2N1c1wiO1xuZXhwb3J0IGNvbnN0IENMSUNLX0VWRU5UX1RZUEUgPSBcImNsaWNrXCI7XG5leHBvcnQgY29uc3QgS0VZVVBfRVZFTlRfVFlQRSA9IFwia2V5dXBcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfRVZFTlRfVFlQRSA9IFwic2VsZWN0XCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IFJFU0laRV9FVkVOVF9UWVBFID0gXCJyZXNpemVcIjtcbmV4cG9ydCBjb25zdCBTQ1JPTExfRVZFTlRfVFlQRSA9IFwic2Nyb2xsXCI7XG5leHBvcnQgY29uc3QgS0VZRE9XTl9FVkVOVF9UWVBFID0gXCJrZXlkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUF9FVkVOVF9UWVBFID0gXCJtb3VzZXVwXCI7XG5leHBvcnQgY29uc3QgQVVYQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiYXV4Y2xpY2tcIjtcbmV4cG9ydCBjb25zdCBNT1VTRU9VVF9FVkVOVF9UWVBFID0gXCJtb3VzZW91dFwiO1xuZXhwb3J0IGNvbnN0IERCTENMSUNLX0VWRU5UX1RZUEUgPSBcImRibGNsaWNrXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVkVSX0VWRU5UX1RZUEUgPSBcIm1vdXNlb3ZlclwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTl9FVkVOVF9UWVBFID0gXCJtb3VzZWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRU1PVkVfRVZFTlRfVFlQRSA9IFwibW91c2Vtb3ZlXCI7XG5leHBvcnQgY29uc3QgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSA9IFwiY29udGV4dG1lbnVcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSA9IFwic2VsZWN0aW9uY2hhbmdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQ1VUX0VWRU5UX1RZUEUsXG4gIENPUFlfRVZFTlRfVFlQRSxcbiAgQkxVUl9FVkVOVF9UWVBFLFxuICBQQVNURV9FVkVOVF9UWVBFLFxuICBXSEVFTF9FVkVOVF9UWVBFLFxuICBJTlBVVF9FVkVOVF9UWVBFLFxuICBGT0NVU19FVkVOVF9UWVBFLFxuICBDTElDS19FVkVOVF9UWVBFLFxuICBLRVlVUF9FVkVOVF9UWVBFLFxuICBTRUxFQ1RfRVZFTlRfVFlQRSxcbiAgQ0hBTkdFX0VWRU5UX1RZUEUsXG4gIFJFU0laRV9FVkVOVF9UWVBFLFxuICBTQ1JPTExfRVZFTlRfVFlQRSxcbiAgS0VZRE9XTl9FVkVOVF9UWVBFLFxuICBNT1VTRVVQX0VWRU5UX1RZUEUsXG4gIEFVWENMSUNLX0VWRU5UX1RZUEUsXG4gIE1PVVNFT1VUX0VWRU5UX1RZUEUsXG4gIERCTENMSUNLX0VWRU5UX1RZUEUsXG4gIE1PVVNFT1ZFUl9FVkVOVF9UWVBFLFxuICBNT1VTRURPV05fRVZFTlRfVFlQRSxcbiAgTU9VU0VNT1ZFX0VWRU5UX1RZUEUsXG4gIENPTlRFWFRNRU5VX0VWRU5UX1RZUEUsXG4gIFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBLRVlVUF9FVkVOVF9UWVBFLCBLRVlET1dOX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbktleVVwKGtleVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKEtFWVVQX0VWRU5UX1RZUEUsIGtleVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKEtFWVVQX0VWRU5UX1RZUEUsIGtleVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25LZXlEb3duKGtleURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihLRVlET1dOX0VWRU5UX1RZUEUsIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBrZXlNaXhpbnMgPSB7XG4gIG9uS2V5VXAsXG4gIG9mZktleVVwLFxuICBvbktleURvd24sXG4gIG9mZktleURvd25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ0xJQ0tfRVZFTlRfVFlQRSwgREJMQ0xJQ0tfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oQ0xJQ0tfRVZFTlRfVFlQRSwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoQ0xJQ0tfRVZFTlRfVFlQRSwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKERCTENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmRG91YmxlQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKERCTENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2xpY2tNaXhpbnMgPSB7XG4gIG9uQ2xpY2ssXG4gIG9mZkNsaWNrLFxuICBvbkRvdWJsZUNsaWNrLFxuICBvZmZEb3VibGVDbGlja1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn1cblxuY29uc3Qgc3RhdGVNaXhpbnMgPSB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgdXBkYXRlU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IE9CSkVDVCwgQUJPVVRfQkxBTksgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBURVhUX0hUTUxfQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBBQk9VVF9CTEFOSyxcbiAgICAgICAgdHlwZSA9IFRFWFRfSFRNTF9DT05URU5UX1RZUEU7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHN0eWxlKTtcblxuICByZXNpemVPYmplY3QuZGF0YSA9IGRhdGE7XG5cbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIodGhpcyk7XG5cbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gdGhpcy5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xuXG4gIGRlbGV0ZSB0aGlzLl9fcmVzaXplT2JqZWN0X187XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRVNJWkVfRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSk7XG5cbiAgICByZXNpemVFdmVudExpc3RlbmVycy5mb3JFYWNoKChyZXNpemVFdmVudExpc3RlbmVyKSA9PiByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KSk7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHJlbW92ZVJlc2l6ZU9iamVjdCB9IGZyb20gXCIuLi9taXhpbnMvcmVzaXplXCI7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5ldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVycy5maW5kKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChldmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbnMgPSB7XG4gIG9uLFxuICBvZmYsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5UX1RZUEUsXG4gICAgICAgICBNT1VTRU9VVF9FVkVOVF9UWVBFLFxuICAgICAgICAgTU9VU0VET1dOX0VWRU5UX1RZUEUsXG4gICAgICAgICBNT1VTRU9WRVJfRVZFTlRfVFlQRSxcbiAgICAgICAgIE1PVVNFTU9WRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRVVQX0VWRU5UX1RZUEUsIG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRU9WRVJfRVZFTlRfVFlQRSwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgbW91c2VNaXhpbnMgPSB7XG4gIG9uTW91c2VVcCxcbiAgb2ZmTW91c2VVcCxcbiAgb25Nb3VzZU91dCxcbiAgb2ZmTW91c2VPdXQsXG4gIG9uTW91c2VEb3duLFxuICBvZmZNb3VzZURvd24sXG4gIG9uTW91c2VPdmVyLFxuICBvZmZNb3VzZU92ZXIsXG4gIG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZU1vdmVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdXNlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTQ1JPTExfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmNvbnN0IHNjcm9sbE1peGlucyA9IHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbCxcbiAgZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShIRUlHSFQsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgaW5zZXJ0KGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IEJMT0NLKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBOT05FKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKERJU1BMQVksIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKERJU0FCTEVEKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKERJU0FCTEVELCBESVNBQkxFRCk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRUQpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jc3MoRElTUExBWSksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IE5PTkUpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29tcHV0ZWRTdHlsZSA9IGZpcnN0W2NvbXB1dGVkU3R5bGVdLFxuICAgICAgICAgICAgICBuYW1lID0gZmlyc3RDb21wdXRlZFN0eWxlLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFNUUklORykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBDbGFzcyxcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIG1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xufVxuXG5mdW5jdGlvbiB1bm1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cbn1cblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBCT0RZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQk9EWSkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJib2R5XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SFJlZigpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTsgfVxuXG4gIHNldEhSZWYoaHJlZikgeyByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBjaGFuZ2VNaXhpbnMgPSB7XG4gIG9uQ2hhbmdlLFxuICBvZmZDaGFuZ2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IGNoYW5nZU1peGlucyBmcm9tIFwiLi9taXhpbnMvY2hhbmdlXCI7XG5cbmltcG9ydCB7IENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9IC8vL1xuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAgLy8vXG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgY2hhbmdlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvY2hhbmdlXCI7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAvLy9cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gIC8vL1xuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgY2hhbmdlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGNoYW5nZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7IHRoaXMuZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXRFbGVtZW50IGZyb20gXCIuLi9pbnB1dEVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9IGZyb20gXCIuLi9taXhpbnMvcmVzaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgd2luZG93TWl4aW5zIGZyb20gXCIuL21peGlucy93aW5kb3dcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICBhZGRSZXNpemVPYmplY3QoKSB7fSAvLy9cblxuICByZW1vdmVSZXNpemVPYmplY3QoKSB7fSAvLy9cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBnZXRTZWxlY3Rpb24oKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCB3aW5kb3dNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCB7IGRvbUVsZW1lbnQgfSA9IGhhbmRsZXJFbGVtZW50LFxuICAgICAgICAgICAgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldDtcblxuICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IHNlbGVjdGlvbk1peGlucyA9IHtcbiAgb25TZWxlY3Rpb25DaGFuZ2UsXG4gIG9mZlNlbGVjdGlvbkNoYW5nZSxcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBzZWxlY3Rpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NlbGVjdGlvblwiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuXG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgTEVGVF9NT1VTRV9CVVRUT04gPSAwO1xuZXhwb3J0IGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5leHBvcnQgY29uc3QgTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTEVGVF9NT1VTRV9CVVRUT04sXG4gIFJJR0hUX01PVVNFX0JVVFRPTixcbiAgTUlERExFX01PVVNFX0JVVFRPTlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvdW5kcyB9IGZyb20gXCIuL2JvdW5kc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2R5IH0gZnJvbSBcIi4vZWxlbWVudC9ib2R5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmsgfSBmcm9tIFwiLi9lbGVtZW50L2xpbmtcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXQgfSBmcm9tIFwiLi9pbnB1dEVsZW1lbnQvaW5wdXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vZWxlbWVudC9idXR0b25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VsZWN0IH0gZnJvbSBcIi4vZWxlbWVudC9zZWxlY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tib3ggfSBmcm9tIFwiLi9lbGVtZW50L2NoZWNrYm94XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRhcmVhIH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L3RleHRhcmVhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRFbGVtZW50IH0gZnJvbSBcIi4vdGV4dEVsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRFbGVtZW50IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2luZG93IH0gZnJvbSBcIi4vd2luZG93XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRvY3VtZW50IH0gZnJvbSBcIi4vZG9jdW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbW91c2VCdXR0b25zIH0gZnJvbSBcIi4vbW91c2VCdXR0b25zXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCB3aW5kb3cgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG53aW5kb3cuYXNzaWduKHtcbiAgUmVhY3Rcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ2hlY2tib3gge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4YW1wbGVcIixcbiAgICByZWZlcmVuY2U6IFwiZXhhbXBsZVwiXG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBFbGVtZW50LCBUZXh0YXJlYSwgbW91c2VCdXR0b25zIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94XCI7XG5cbmNvbnN0IHsgTEVGVF9NT1VTRV9CVVRUT04gfSA9IG1vdXNlQnV0dG9ucztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkXCIpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAvPixcbiAgICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e2Z1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7ICAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbW91c2VNb3ZlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodClcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2V4YW1wbGUvcHJlYW1ibGVcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCJcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztlQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sU0FBTiwyQkFBQTt1QkFDRCxLQUFLLE1BQUk7Z0NBREY7QUFFakIsYUFBSyxNQUFNO0FBQ1gsYUFBSyxPQUFPOztvQkFISyxTQUFBOztVQU1uQixLQUFBO2lCQUFBLGtCQUFBO0FBQ0UsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsbUJBQUE7QUFDRSxtQkFBTyxLQUFLOzs7O2FBWEs7Ozs7O0FDRnJCOzs7Ozs7OztlQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sU0FBTiwyQkFBQTt1QkFDRCxLQUFLLE1BQU0sT0FBTyxRQUFNO2dDQURqQjtBQUVqQixhQUFLLE1BQU07QUFDWCxhQUFLLE9BQU87QUFDWixhQUFLLFFBQVE7QUFDYixhQUFLLFNBQVM7O29CQUxHLFNBQUE7O1VBUW5CLEtBQUE7aUJBQUEsa0JBQUE7QUFDRSxtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxtQkFBQTtBQUNFLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLG9CQUFBO0FBQ0UsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEscUJBQUE7QUFDRSxt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
