"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _checkbox = _interopRequireDefault(require("./checkbox"));
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
exports.default = View;
var Div = /*#__PURE__*/ function(Element) {
    _inherits(Div, Element);
    var _super = _createSuper(Div);
    function Div() {
        _classCallCheck(this, Div);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHRhcmVhLCBCdXR0b24sIGJ1dHRvbnMsIEVsZW1lbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3hcIjtcblxuY29uc3QgeyBMRUZUX01PVVNFX0JVVFRPTiB9ID0gYnV0dG9ucztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkXCIpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAvPixcbiAgICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e2Z1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7ICAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcmVzaXplSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIl0sIm5hbWVzIjpbIkxFRlRfTU9VU0VfQlVUVE9OIiwiVmlldyIsImNoaWxkRWxlbWVudHMiLCJvbkNoYW5nZSIsImVsZW1lbnQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsIm9uQ2xpY2siLCJidXR0b24iLCJEaXYiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJyZXNpemVIYW5kbGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm1vdXNlTW92ZUhhbmRsZXIiLCJwYWdlWCIsInBhZ2VZIiwiZGlkTW91bnQiLCJvblJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwid2lsbFVubW91bnQiLCJvZmZNb3VzZU1vdmUiLCJvZmZSZXNpemUiLCJwIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUV1QyxHQUFVLENBQVYsTUFBVTtBQUV4QyxHQUFZLENBQVosU0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsR0FBSyxDQUFHQSxpQkFBaUIsR0FKMEIsTUFBVSxTQUlyREEsaUJBQWlCO0lBRUpDLElBQUksaUJBQVYsUUFBUTs7O2FBQUZBLElBQUk7Ozs7OztZQUN2QkMsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sQ0FBRSxDQUFDO3NEQU5RLFNBQVk7d0JBUWpCQyxRQUFRLEVBQUUsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxPQUFPLEVBQUssQ0FBQzs0QkFDN0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVM7d0JBQ3ZCLENBQUM7d0JBQ0RDLE9BQU8sRUFBUEEsSUFBTzs7c0RBYjRCLE1BQVU7d0JBZTdDTCxRQUFRLEVBQUUsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxPQUFPLEVBQUssQ0FBQzs0QkFDN0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVE7d0JBQ3RCLENBQUM7d0JBQ0RFLFFBQVEsRUFBRSxRQUFRLENBQWxCQSxRQUFRLENBQVdKLEtBQUssRUFBRUQsT0FBTyxFQUFFLENBQUM7NEJBQ2xDLEdBQUssQ0FBQ00sU0FBUyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYTs0QkFFckNQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxTQUFTLEVBQUVFLFVBQVU7d0JBQ25DLENBQUM7O3NEQXZCa0MsTUFBVTt3QkF5Qi9DRSxPQUFPLEVBQUUsUUFBUVYsQ0FBUEMsS0FBSyxFQUFFRCxPQUFPLEVBQUssQ0FBQzs0QkFDNUIsR0FBSyxDQUFHVyxNQUFNLEdBQUtWLEtBQUssQ0FBaEJVLE1BQU07NEJBRWRULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxNQUFNLEtBQUtmLGlCQUFpQjt3QkFDMUMsQ0FBQzt1QkFDUixDQUVEO3NEQUNDZ0IsR0FBRztnQkFFTixDQUFDO1lBQ0gsQ0FBQzs7OzttQkFwQ2dELE1BQVU7Z0JBTXhDZixJQUFJLEVBZ0NoQmdCLENBQU8sVUFBRyxDQUFLO2dCQWhDSGhCLElBQUksRUFrQ2hCaUIsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQU07QUFDbkIsQ0FBQztrQkFwQ2tCbEIsSUFBSTtJQXVDbkJlLEdBQUcsaUJBQVQsUUFBUTs7O2FBQUZBLEdBQUc7Ozs7OztZQUNQSSxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxDQUFDZixLQUFLLEVBQUVELE9BQU8sRUFBRSxDQUFDO2dCQUM3QixHQUFLLENBQUNpQixLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxTQUFTO2dCQUU3QmxCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxLQUFLLEVBQUVFLE1BQU07WUFDM0IsQ0FBQzs7O1lBRURFLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLENBQUNwQixLQUFLLEVBQUVELE9BQU8sRUFBRSxDQUFDO2dCQUNoQyxHQUFLLENBQUdzQixLQUFLLEdBQVlyQixLQUFLLENBQXRCcUIsS0FBSyxFQUFFQyxLQUFLLEdBQUt0QixLQUFLLENBQWZzQixLQUFLO2dCQUVwQnJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbUIsS0FBSyxFQUFFQyxLQUFLO1lBQzFCLENBQUM7OztZQUVEQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDVCxhQUFhLEVBQUUsSUFBSTtnQkFDdEMsSUFBSSxDQUFDVSxXQUFXLENBQUMsSUFBSSxDQUFDTCxnQkFBZ0IsRUFBRSxJQUFJO1lBQzlDLENBQUM7OztZQUVETSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDUCxnQkFBZ0IsRUFBRSxJQUFJO2dCQUM3QyxJQUFJLENBQUNRLFNBQVMsQ0FBQyxJQUFJLENBQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ3pDLENBQUM7OztZQUVEbEIsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sbUNBRUhnQyxDQUFDLFVBQUMsQ0FFSDtZQUdKLENBQUM7Ozs7bUJBN0VnRCxNQUFVO2dCQTZDdkRsQixHQUFHLEVBa0NBQyxDQUFPLFVBQUcsQ0FBSyJ9