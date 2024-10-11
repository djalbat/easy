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
var _checkbox = /*#__PURE__*/ _interop_require_default(require("./view/checkbox"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
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
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var LEFT_MOUSE_BUTTON = _index.mouseButtons.LEFT_MOUSE_BUTTON;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        return _call_super(this, View, arguments);
    }
    _create_class(View, [
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
}(_wrap_native_super(_index.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var Div = /*#__PURE__*/ function(Element) {
    _inherits(Div, Element);
    function Div() {
        _class_call_check(this, Div);
        var _this;
        _this = _call_super(this, Div, arguments), _define_property(_this, "mouseMoveHandler", function(event, element) {
            var pageX = event.pageX, pageY = event.pageY;
            console.log(pageX, pageY);
        }), _define_property(_this, "resizeHandler", function(event, element) {
            var width = _this.getWidth(), height = _this.getHeight();
            console.log(width, height);
        });
        return _this;
    }
    _create_class(Div, [
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
}(_wrap_native_super(_index.Element));
_define_property(Div, "tagName", "div");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgRWxlbWVudCwgVGV4dGFyZWEsIG1vdXNlQnV0dG9ucyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi92aWV3L2NoZWNrYm94XCI7XG5cbmNvbnN0IHsgTEVGVF9NT1VTRV9CVVRUT04gfSA9IG1vdXNlQnV0dG9ucztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkXCIpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAvPixcbiAgICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e2Z1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7ICAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbW91c2VNb3ZlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodClcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJMRUZUX01PVVNFX0JVVFRPTiIsIm1vdXNlQnV0dG9ucyIsImNoaWxkRWxlbWVudHMiLCJDaGVja2JveCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImNoZWNrZWQiLCJUZXh0YXJlYSIsIm9uU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uIiwiRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJwYWdlWCIsInBhZ2VZIiwicmVzaXplSGFuZGxlciIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJkaWRNb3VudCIsIm9uUmVzaXplIiwib25Nb3VzZU1vdmUiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlTW92ZSIsIm9mZlJlc2l6ZSIsInAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3FCQU5tQzsrREFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFNLEFBQUVDLG9CQUFzQkMsbUJBQVksQ0FBbENEO0FBRU8sSUFBQSxBQUFNRCxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0MsaUJBQVE7d0JBQUNDLFVBQVUsU0FBQ0MsT0FBT0M7NEJBQ2hCQyxRQUFRQyxHQUFHLENBQUM7d0JBQ2Q7d0JBQ0FDLFNBQUFBOztrQ0FFVixvQkFBQ0MsZUFBUTt3QkFBQ04sVUFBVSxTQUFDQyxPQUFPQzs0QkFDaEJDLFFBQVFDLEdBQUcsQ0FBQzt3QkFDZDt3QkFDQUcsVUFBVSxTQUFWQSxTQUFtQk4sS0FBSyxFQUFFQyxPQUFPOzRCQUMvQixJQUFNTSxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsYUFBYSxJQUFJLENBQUNDLGFBQWE7NEJBRXJDUixRQUFRQyxHQUFHLENBQUNJLFdBQVdFO3dCQUN6Qjs7a0NBRVYsb0JBQUNFLGFBQU07d0JBQUNDLFNBQVMsU0FBQ1osT0FBT0M7NEJBQ2YsSUFBTSxBQUFFWSxTQUFXYixNQUFYYTs0QkFFUlgsUUFBUUMsR0FBRyxDQUFDVSxXQUFXbEI7d0JBQ3pCO3VCQUNQO2tDQUdELG9CQUFDbUI7aUJBRUY7WUFDSDs7O1dBOUJtQnBCO3FCQUFhcUIsY0FBTztBQWdDdkMsaUJBaENtQnJCLE1BZ0Nac0IsV0FBVTtBQUVqQixpQkFsQ21CdEIsTUFrQ1p1QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUdGLElBQUEsQUFBTUosb0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztrQ0FBQUEsaUJBQ0pLLHdCQUFBQSxvQkFBbUIsU0FBQ25CLE9BQU9DO1lBQ3pCLElBQVFtQixRQUFpQnBCLE1BQWpCb0IsT0FBT0MsUUFBVXJCLE1BQVZxQjtZQUVmbkIsUUFBUUMsR0FBRyxDQUFDaUIsT0FBT0M7UUFDckIsSUFFQUMsd0JBQUFBLGlCQUFnQixTQUFDdEIsT0FBT0M7WUFDdEIsSUFBTXNCLFFBQVEsTUFBS0MsUUFBUSxJQUNyQkMsU0FBUyxNQUFLQyxTQUFTO1lBRTdCeEIsUUFBUUMsR0FBRyxDQUFDb0IsT0FBT0U7UUFDckI7OztrQkFaSVg7O1lBY0phLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNOLGFBQWEsRUFBRSxJQUFJO2dCQUN0QyxJQUFJLENBQUNPLFdBQVcsQ0FBQyxJQUFJLENBQUNWLGdCQUFnQixFQUFFLElBQUk7WUFDOUM7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDWixnQkFBZ0IsRUFBRSxJQUFJO2dCQUM3QyxJQUFJLENBQUNhLFNBQVMsQ0FBQyxJQUFJLENBQUNWLGFBQWEsRUFBRSxJQUFJO1lBQ3pDOzs7WUFFQXpCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ29DLFdBQUU7WUFLUDs7O1dBaENJbkI7cUJBQVlDLGNBQU87QUFrQ3ZCLGlCQWxDSUQsS0FrQ0dFLFdBQVUifQ==