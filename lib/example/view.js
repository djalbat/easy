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
var LEFT_MOUSE_BUTTON = _index.mouseButtons.LEFT_MOUSE_BUTTON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgRWxlbWVudCwgVGV4dGFyZWEsIG1vdXNlQnV0dG9ucyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveFwiO1xuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OIH0gPSBtb3VzZUJ1dHRvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZFwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgLz4sXG4gICAgICA8VGV4dGFyZWEgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIilcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtmdW5jdGlvbihldmVudCwgZWxlbWVudCkgeyAgLy8vXG4gICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgIC8+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKVxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZXZlbnQ7XG5cbiAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgQSBwYXJhZ3JhcGggY29udGFpbmVkIGluIGEgZGl2IHdpdGggcmVzaXplIGFuZCBtb3VzZSBtb3ZlIGhhbmRsZXJzLlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmlldyIsIkxFRlRfTU9VU0VfQlVUVE9OIiwibW91c2VCdXR0b25zIiwiY2hpbGRFbGVtZW50cyIsIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tlZCIsIlRleHRhcmVhIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJidXR0b24iLCJEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW91c2VNb3ZlSGFuZGxlciIsInBhZ2VYIiwicGFnZVkiLCJyZXNpemVIYW5kbGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImRpZE1vdW50Iiwib25SZXNpemUiLCJvbk1vdXNlTW92ZSIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VNb3ZlIiwib2ZmUmVzaXplIiwicCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7cUJBTm1DOzZEQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxBQUFFQyxvQkFBc0JDLG1CQUFZLENBQWxDRDtBQUVPLElBQUEsQUFBTUQscUJBdUNsQixBQXZDWTtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxPQUFRO2tDQUVOLG9CQUFDQyxpQkFBUTt3QkFBQ0MsVUFBVSxTQUFDQyxPQUFPQyxTQUFZOzRCQUM1QkMsUUFBUUMsR0FBRyxDQUFDO3dCQUNkO3dCQUNBQyxTQUFBQSxJQUFPOztrQ0FFakIsb0JBQUNDLGVBQVE7d0JBQUNOLFVBQVUsU0FBQ0MsT0FBT0MsU0FBWTs0QkFDNUJDLFFBQVFDLEdBQUcsQ0FBQzt3QkFDZDt3QkFDQUcsVUFBVSxTQUFWQSxTQUFtQk4sS0FBSyxFQUFFQyxPQUFPLEVBQUU7NEJBQ2pDLElBQU1NLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTs0QkFFckNSLFFBQVFDLEdBQUcsQ0FBQ0ksV0FBV0U7d0JBQ3pCOztrQ0FFVixvQkFBQ0UsYUFBTTt3QkFBQ0MsU0FBUyxTQUFDWixPQUFPQyxTQUFZOzRCQUMzQixJQUFNLEFBQUVZLFNBQVdiLE1BQVhhOzRCQUVSWCxRQUFRQyxHQUFHLENBQUNVLFdBQVdsQjt3QkFDekI7dUJBQ1A7a0NBR0Qsb0JBQUNtQjtpQkFFRjtZQUNIOzs7V0E5Qm1CcEI7bUJBQWFxQixjQUFPO0FBZ0N2QyxnQkFoQ21CckIsTUFnQ1pzQixXQUFVO0FBRWpCLGdCQWxDbUJ0QixNQWtDWnVCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBR0YsSUFBQSxBQUFNSixvQkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDSkssK0NBQUFBLG9CQUFtQixTQUFDbkIsT0FBT0MsU0FBWTtZQUNyQyxJQUFRbUIsUUFBaUJwQixNQUFqQm9CLE9BQU9DLFFBQVVyQixNQUFWcUI7WUFFZm5CLFFBQVFDLEdBQUcsQ0FBQ2lCLE9BQU9DO1FBQ3JCO1FBRUFDLCtDQUFBQSxpQkFBZ0IsU0FBQ3RCLE9BQU9DLFNBQVk7WUFDbEMsSUFBTXNCLFFBQVEsTUFBS0MsUUFBUSxJQUNyQkMsU0FBUyxNQUFLQyxTQUFTO1lBRTdCeEIsUUFBUUMsR0FBRyxDQUFDb0IsT0FBT0U7UUFDckI7OztpQkFaSVg7O1lBY0phLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ04sYUFBYSxFQUFFLElBQUk7Z0JBQ3RDLElBQUksQ0FBQ08sV0FBVyxDQUFDLElBQUksQ0FBQ1YsZ0JBQWdCLEVBQUUsSUFBSTtZQUM5Qzs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ1osZ0JBQWdCLEVBQUUsSUFBSTtnQkFDN0MsSUFBSSxDQUFDYSxTQUFTLENBQUMsSUFBSSxDQUFDVixhQUFhLEVBQUUsSUFBSTtZQUN6Qzs7O1lBRUF6QixLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDb0MsV0FBRTtZQUtQOzs7V0FoQ0luQjttQkFBWUMsY0FBTztBQWtDdkIsZ0JBbENJRCxLQWtDR0UsV0FBVSJ9