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
var _index = require("../index");
var _checkbox = /*#__PURE__*/ _interopRequireDefault(require("./checkbox"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
function _interopRequireDefault(obj) {
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var LEFT_MOUSE_BUTTON = _index.buttons.LEFT_MOUSE_BUTTON;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_checkbox.default, {
                        onChange: function(event, element) {
                            console.log("Changed");
                        },
                        checked: true
                    }),
                    /*#__PURE__*/ React.createElement(_index.Textarea, {
                        onChange: function(event, element) {
                            console.log("change");
                        },
                        onScroll: function onScroll(event, element) {
                            var scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
                            console.log(scrollTop, scrollLeft);
                        }
                    }),
                    /*#__PURE__*/ React.createElement(_index.Button, {
                        onClick: function(event, element) {
                            var button = event.button;
                            console.log(button === LEFT_MOUSE_BUTTON);
                        }
                    }, "Submit"),
                    /*#__PURE__*/ React.createElement(Div, null)
                ];
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_index.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var Div = /*#__PURE__*/ function(Element) {
    _inherits(Div, Element);
    var _super = _createSuper(Div);
    function Div() {
        _classCallCheck(this, Div);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "mouseMoveHandler", function(event, element) {
            var pageX = event.pageX, pageY = event.pageY;
            console.log(pageX, pageY);
        });
        _defineProperty(_assertThisInitialized(_this), "resizeHandler", function(event, element) {
            var width = _this.getWidth(), height = _this.getHeight();
            console.log(width, height);
        });
        return _this;
    }
    _createClass(Div, [
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
                return /*#__PURE__*/ React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers.");
            }
        }
    ]);
    return Div;
}(_wrapNativeSuper(_index.Element));
_defineProperty(Div, "tagName", "div");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHRhcmVhLCBCdXR0b24sIGJ1dHRvbnMsIEVsZW1lbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3hcIjtcblxuY29uc3QgeyBMRUZUX01PVVNFX0JVVFRPTiB9ID0gYnV0dG9ucztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkXCIpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAvPixcbiAgICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e2Z1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7ICAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbW91c2VNb3ZlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodClcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWaWV3IiwiTEVGVF9NT1VTRV9CVVRUT04iLCJidXR0b25zIiwiY2hpbGRFbGVtZW50cyIsIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tlZCIsIlRleHRhcmVhIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJidXR0b24iLCJEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW91c2VNb3ZlSGFuZGxlciIsInBhZ2VYIiwicGFnZVkiLCJyZXNpemVIYW5kbGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImRpZE1vdW50Iiwib25SZXNpemUiLCJvbk1vdXNlTW92ZSIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VNb3ZlIiwib2ZmUmVzaXplIiwicCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLElBQUk7OztxQkFOMEIsVUFBVTs2REFFeEMsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTSxBQUFFQyxp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