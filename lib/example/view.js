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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_index.Checkbox, {
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
exports.default = View;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiVGV4dGFyZWEiLCJDaGVja2JveCIsIkJ1dHRvbiIsImNvbnN0YW50cyIsIkVsZW1lbnQiLCJMRUZUX01PVVNFX0JVVFRPTiIsIlZpZXciLCJjaGlsZEVsZW1lbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tlZCIsIm9uU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwiRGl2IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicmVzaXplSGFuZGxlciIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFnZVgiLCJwYWdlWSIsImRpZE1vdW50Iiwib25SZXNpemUiLCJvbk1vdXNlTW92ZSIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VNb3ZlIiwib2ZmUmVzaXplIiwicCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUQsR0FBVSxDQUFWLE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxHQUFLLENBQUcsaUJBQWlCLEdBRnNDLE1BQVUsV0FFakUsaUJBQWlCO0lBRUosSUFBSSxpQkFBVixRQUFRO2NBQUYsSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTtnRUFBSixJQUFJOztpQkFBSixJQUFJOztZQUN2QixHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFFLENBQUM7c0RBTmtE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YSwgQ2hlY2tib3gsIEJ1dHRvbiwgY29uc3RhbnRzLCBFbGVtZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBMRUZUX01PVVNFX0JVVFRPTiB9ID0gY29uc3RhbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZWRcIilcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgIC8+LFxuICAgICAgPFRleHRhcmVhIG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlXCIpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvblNjcm9sbD17ZnVuY3Rpb24oZXZlbnQsIGVsZW1lbnQpIHsgIC8vL1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBidXR0b24gfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYnV0dG9uID09PSBMRUZUX01PVVNFX0JVVFRPTilcbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8RGl2IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcmVzaXplSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIl19