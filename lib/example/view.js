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
var Div = /*#__PURE__*/ function(Element1) {
    _inherits(Div, Element1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHRhcmVhLCBDaGVja2JveCwgQnV0dG9uLCBjb25zdGFudHMsIEVsZW1lbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT5cblxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICA8Q2hlY2tib3ggY2hlY2tlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkXCIpXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8VGV4dGFyZWEgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlXCIpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXtmdW5jdGlvbihldmVudCwgZWxlbWVudCkgeyAgLy8vXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYnV0dG9uID09PSBMRUZUX01PVVNFX0JVVFRPTilcbiAgICAgICAgICAgIH19XG4gICAgPlxuICAgICAgU3VibWl0XG4gICAgPC9CdXR0b24+XG4gICAgPERpdiAvPlxuICA8L2Rpdj5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcmVzaXplSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRW1ELE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqRSxpQkFBaUIsR0FGc0MsTUFBVSxXQUVqRSxpQkFBaUI7SUFFbkIsSUFBSSxZQUFJLFVBQVU7OENBRXJCLEdBQUc7UUFBQyxTQUFTLEdBQUMsSUFBTTt5Q0FOd0MsTUFBVTtRQU8zRCxPQUFPLEVBQVAsSUFBTztRQUNQLFFBQVEsV0FBRyxLQUFLLEVBQUUsT0FBTztZQUN2QixPQUFPLENBQUMsR0FBRyxFQUFDLE9BQVM7OzBDQVQwQixNQUFVO1FBWTNELFFBQVEsV0FBRyxLQUFLLEVBQUUsT0FBTztZQUN2QixPQUFPLENBQUMsR0FBRyxFQUFDLE1BQVE7O1FBRXRCLFFBQVEsV0FBUixRQUFRLENBQVcsS0FBSyxFQUFFLE9BQU87Z0JBQ3pCLFNBQVMsUUFBUSxZQUFZLElBQzdCLFVBQVUsUUFBUSxhQUFhO1lBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVU7OzBDQW5CYyxNQUFVO1FBc0I3RCxPQUFPLFdBQUcsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsTUFBTSxHQUFLLEtBQUssQ0FBaEIsTUFBTTtZQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLGlCQUFpQjs7UUFFakQsTUFFRCxzQ0FDQyxHQUFHOztlQUtPLElBQUk7O0lBRWIsR0FBRztjQUFILEdBQUc7YUFBSCxHQUFHOzhCQUFILEdBQUc7Z0VBQUgsR0FBRzs7aUJBQUgsR0FBRzs7WUFDUCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBQ3BCLEtBQUssUUFBUSxRQUFRLElBQ3JCLE1BQU0sUUFBUSxTQUFTO2dCQUU3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNOzs7O1lBRzNCLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBQ3JCLEtBQUssR0FBWSxLQUFLLENBQXRCLEtBQUssRUFBRSxLQUFLLEdBQUssS0FBSyxDQUFmLEtBQUs7Z0JBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUs7Ozs7WUFHMUIsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtxQkFDRCxRQUFRLE1BQU0sYUFBYTtxQkFDM0IsV0FBVyxNQUFNLGdCQUFnQjs7OztZQUd4QyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3FCQUNKLFlBQVksTUFBTSxnQkFBZ0I7cUJBQ2xDLFNBQVMsTUFBTSxhQUFhOzs7O1lBR25DLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7MERBR1IsQ0FBQyxVQUFDLG1FQUVIOzs7O1dBN0JBLEdBQUc7bUJBckNzRCxNQUFVO2dCQXFDbkUsR0FBRyxHQWtDQSxPQUFPLElBQUcsR0FBSyJ9