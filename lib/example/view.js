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
var _checkbox = /*#__PURE__*/ _interop_require_default(require("./checkbox"));
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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        return _super.apply(this, arguments);
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
    var _super = _create_super(Div);
    function Div() {
        _class_call_check(this, Div);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgRWxlbWVudCwgVGV4dGFyZWEsIG1vdXNlQnV0dG9ucyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveFwiO1xuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OIH0gPSBtb3VzZUJ1dHRvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZFwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgLz4sXG4gICAgICA8VGV4dGFyZWEgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIilcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtmdW5jdGlvbihldmVudCwgZWxlbWVudCkgeyAgLy8vXG4gICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgIC8+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKVxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZXZlbnQ7XG5cbiAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgQSBwYXJhZ3JhcGggY29udGFpbmVkIGluIGEgZGl2IHdpdGggcmVzaXplIGFuZCBtb3VzZSBtb3ZlIGhhbmRsZXJzLlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiTEVGVF9NT1VTRV9CVVRUT04iLCJtb3VzZUJ1dHRvbnMiLCJjaGlsZEVsZW1lbnRzIiwiQ2hlY2tib3giLCJvbkNoYW5nZSIsImV2ZW50IiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwiVGV4dGFyZWEiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0IiwiQnV0dG9uIiwib25DbGljayIsImJ1dHRvbiIsIkRpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFnZVgiLCJwYWdlWSIsInJlc2l6ZUhhbmRsZXIiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiZGlkTW91bnQiLCJvblJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwid2lsbFVubW91bnQiLCJvZmZNb3VzZU1vdmUiLCJvZmZSZXNpemUiLCJwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztxQkFObUM7K0RBRW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxBQUFFQyxvQkFBc0JDLG1CQUFZLENBQWxDRDtBQUVPLElBQUEsQUFBTUQscUJBdUNsQixBQXZDWTtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLGlCQUFRO3dCQUFDQyxVQUFVLFNBQUNDLE9BQU9DOzRCQUNoQkMsUUFBUUMsR0FBRyxDQUFDO3dCQUNkO3dCQUNBQyxTQUFBQTs7a0NBRVYsb0JBQUNDLGVBQVE7d0JBQUNOLFVBQVUsU0FBQ0MsT0FBT0M7NEJBQ2hCQyxRQUFRQyxHQUFHLENBQUM7d0JBQ2Q7d0JBQ0FHLFVBQVUsU0FBVkEsU0FBbUJOLEtBQUssRUFBRUMsT0FBTzs0QkFDL0IsSUFBTU0sWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLGFBQWEsSUFBSSxDQUFDQyxhQUFhOzRCQUVyQ1IsUUFBUUMsR0FBRyxDQUFDSSxXQUFXRTt3QkFDekI7O2tDQUVWLG9CQUFDRSxhQUFNO3dCQUFDQyxTQUFTLFNBQUNaLE9BQU9DOzRCQUNmLElBQU0sQUFBRVksU0FBV2IsTUFBWGE7NEJBRVJYLFFBQVFDLEdBQUcsQ0FBQ1UsV0FBV2xCO3dCQUN6Qjt1QkFDUDtrQ0FHRCxvQkFBQ21CO2lCQUVGO1lBQ0g7OztXQTlCbUJwQjtxQkFBYXFCLGNBQU87QUFnQ3ZDLGlCQWhDbUJyQixNQWdDWnNCLFdBQVU7QUFFakIsaUJBbENtQnRCLE1Ba0NadUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRixJQUFBLEFBQU1KLG9CQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKSyxrREFBQUEsb0JBQW1CLFNBQUNuQixPQUFPQztZQUN6QixJQUFRbUIsUUFBaUJwQixNQUFqQm9CLE9BQU9DLFFBQVVyQixNQUFWcUI7WUFFZm5CLFFBQVFDLEdBQUcsQ0FBQ2lCLE9BQU9DO1FBQ3JCO1FBRUFDLGtEQUFBQSxpQkFBZ0IsU0FBQ3RCLE9BQU9DO1lBQ3RCLElBQU1zQixRQUFRLE1BQUtDLFFBQVEsSUFDckJDLFNBQVMsTUFBS0MsU0FBUztZQUU3QnhCLFFBQVFDLEdBQUcsQ0FBQ29CLE9BQU9FO1FBQ3JCOzs7a0JBWklYOztZQWNKYSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDTixhQUFhLEVBQUUsSUFBSTtnQkFDdEMsSUFBSSxDQUFDTyxXQUFXLENBQUMsSUFBSSxDQUFDVixnQkFBZ0IsRUFBRSxJQUFJO1lBQzlDOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ1osZ0JBQWdCLEVBQUUsSUFBSTtnQkFDN0MsSUFBSSxDQUFDYSxTQUFTLENBQUMsSUFBSSxDQUFDVixhQUFhLEVBQUUsSUFBSTtZQUN6Qzs7O1lBRUF6QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNvQyxXQUFFO1lBS1A7OztXQWhDSW5CO3FCQUFZQyxjQUFPO0FBa0N2QixpQkFsQ0lELEtBa0NHRSxXQUFVIn0=