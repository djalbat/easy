"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
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
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
var LEFT_MOUSE_BUTTON = _index.constants.LEFT_MOUSE_BUTTON;
var View = function(properties) {
    /*#__PURE__*/ return React.createElement("div", {
        className: "view"
    }, /*#__PURE__*/ React.createElement(_index.Checkbox, {
        checked: true,
        onChange: function(event, element) {
            console.log("Changed");
        }
    }), /*#__PURE__*/ React.createElement(_index.Textarea, {
        onChange: function(event, element) {
            console.log("change");
        },
        onScroll: function onScroll(event, element) {
            var scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
            console.log(scrollTop, scrollLeft);
        }
    }), /*#__PURE__*/ React.createElement(_index.Button, {
        onClick: function(event, element) {
            var button = event.button;
            console.log(button === LEFT_MOUSE_BUTTON);
        }
    }, "Submit"), /*#__PURE__*/ React.createElement(Div, null));
};
var _default = View;
exports.default = _default;
var Div = /*#__PURE__*/ function(Element) {
    _inherits(Div, Element);
    function Div() {
        _classCallCheck(this, Div);
        return _possibleConstructorReturn(this, _getPrototypeOf(Div).apply(this, arguments));
    }
    _createClass(Div, [
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
                return(/*#__PURE__*/ React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers."));
            }
        }
    ]);
    return Div;
}(_wrapNativeSuper(_index.Element));
_defineProperty(Div, "tagName", "div");

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiVGV4dGFyZWEiLCJDaGVja2JveCIsIkJ1dHRvbiIsImNvbnN0YW50cyIsIkVsZW1lbnQiLCJMRUZUX01PVVNFX0JVVFRPTiIsIlZpZXciLCJwcm9wZXJ0aWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsIm9uU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwiRGl2IiwicmVzaXplSGFuZGxlciIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFnZVgiLCJwYWdlWSIsImRpZE1vdW50Iiwib25SZXNpemUiLCJvbk1vdXNlTW92ZSIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VNb3ZlIiwib2ZmUmVzaXplIiwiY2hpbGRFbGVtZW50cyIsInAiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtRCxHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLEdBQUssQ0FBRyxpQkFBaUIsR0FGc0MsTUFBVSxXQUVqRSxpQkFBaUI7QUFFekIsR0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQVAsVUFBVTtrQkFFdEIsTUFBTSxzQkFBTCxHQUFHO1FBQUMsU0FBUyxHQUFDLElBQU07eUNBTndDLE1BQVU7UUFPM0QsT0FBTyxFQUFQLElBQU87UUFDUCxRQUFRLEVBQUUsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFP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