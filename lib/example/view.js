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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHRhcmVhLCBCdXR0b24sIGNvbnN0YW50cywgRWxlbWVudCB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveFwiO1xuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OIH0gPSBjb25zdGFudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlZFwiKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgLz4sXG4gICAgICA8VGV4dGFyZWEgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIilcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtmdW5jdGlvbihldmVudCwgZWxlbWVudCkgeyAgLy8vXG4gICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgIC8+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKVxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxEaXYgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICByZXNpemVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50O1xuXG4gICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vZmZSZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHA+XG4gICAgICAgIEEgcGFyYWdyYXBoIGNvbnRhaW5lZCBpbiBhIGRpdiB3aXRoIHJlc2l6ZSBhbmQgbW91c2UgbW92ZSBoYW5kbGVycy5cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG59XG4iXSwibmFtZXMiOlsiTEVGVF9NT1VTRV9CVVRUT04iLCJWaWV3IiwiY2hpbGRFbGVtZW50cyIsIm9uQ2hhbmdlIiwiZWxlbWVudCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImNoZWNrZWQiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwib25DbGljayIsImJ1dHRvbiIsIkRpdiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInJlc2l6ZUhhbmRsZXIiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwibW91c2VNb3ZlSGFuZGxlciIsInBhZ2VYIiwicGFnZVkiLCJkaWRNb3VudCIsIm9uUmVzaXplIiwib25Nb3VzZU1vdmUiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlTW92ZSIsIm9mZlJlc2l6ZSIsInAiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXlDLEdBQVUsQ0FBVixNQUFVO0FBRTFDLEdBQVksQ0FBWixTQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxHQUFLLENBQUdBLGlCQUFpQixHQUo0QixNQUFVLFdBSXZEQSxpQkFBaUI7SUFFSkMsSUFBSSxpQkFBVixRQUFRO2NBQUZBLElBQUk7YUFBSkEsSUFBSTs4QkFBSkEsSUFBSTtnRUFBSkEsSUFBSTs7aUJBQUpBLElBQUk7O1lBQ3ZCQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFFLENBQUM7c0RBTlEsU0FBWTt3QkFRakJDLFFBQVEsRUFBRSxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE9BQU8sRUFBSyxDQUFDOzRCQUM3QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUzt3QkFDdkIsQ0FBQzt3QkFDREMsT0FBTyxFQUFQQSxJQUFPOztzREFiOEIsTUFBVTt3QkFlL0NMLFFBQVEsRUFBRSxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE9BQU8sRUFBSyxDQUFDOzRCQUM3QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUTt3QkFDdEIsQ0FBQzt3QkFDREUsUUFBUSxFQUFFLFFBQVEsQ0FBbEJBLFFBQVEsQ0FBV0osS0FBSyxFQUFFRCxPQUFPLEVBQUUsQ0FBQzs0QkFDbEMsR0FBSyxDQUFDTSxTQUFTLEdBQUcsSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhOzRCQUVyQ1AsT0FBTyxDQUFDQyxHQUFHLENBQUNHLFNBQVMsRUFBRUUsVUFBVTt3QkFDbkMsQ0FBQzs7c0RBdkJvQyxNQUFVO3dCQXlCakRFLE9BQU8sRUFBRSxRQUFRVixDQUFQQyxLQUFLLEVBQUVELE9BQU8sRUFBSyxDQUFDOzRCQUM1QixHQUFLLENBQUdXLE1BQU0sR0FBS1YsS0FBSyxDQUFoQlUsTUFBTTs0QkFFZFQsT0FBTyxDQUFDQyxHQUFHLENBQUNRLE1BQU0sS0FBS2YsaUJBQWlCO3dCQUMxQyxDQUFDO3VCQUNSLENBRUQ7c0RBQ0NnQixHQUFHO2dCQUVOLENBQUM7WUFDSCxDQUFDOzs7V0E5QmtCZixJQUFJO21CQU40QixNQUFVO2dCQU0xQ0EsSUFBSSxFQWdDaEJnQixDQUFPLFVBQUcsQ0FBSztnQkFoQ0hoQixJQUFJLEVBa0NoQmlCLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUM7a0JBcENrQmxCLElBQUk7SUF1Q25CZSxHQUFHLGlCQUFULFFBQVE7Y0FBRkEsR0FBRzthQUFIQSxHQUFHOzhCQUFIQSxHQUFHO2dFQUFIQSxHQUFHOztpQkFBSEEsR0FBRzs7WUFDUEksR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsQ0FBQ2YsS0FBSyxFQUFFRCxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsR0FBSyxDQUFDaUIsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUztnQkFFN0JsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsS0FBSyxFQUFFRSxNQUFNO1lBQzNCLENBQUM7OztZQUVERSxHQUFnQixFQUFoQkEsQ0FBZ0I7bUJBQWhCQSxRQUFRLENBQVJBLGdCQUFnQixDQUFDcEIsS0FBSyxFQUFFRCxPQUFPLEVBQUUsQ0FBQztnQkFDaEMsR0FBSyxDQUFHc0IsS0FBSyxHQUFZckIsS0FBSyxDQUF0QnFCLEtBQUssRUFBRUMsS0FBSyxHQUFLdEIsS0FBSyxDQUFmc0IsS0FBSztnQkFFcEJyQixPQUFPLENBQUNDLEdBQUcsQ0FBQ21CLEtBQUssRUFBRUMsS0FBSztZQUMxQixDQUFDOzs7WUFFREMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ1QsYUFBYSxFQUFFLElBQUk7Z0JBQ3RDLElBQUksQ0FBQ1UsV0FBVyxDQUFDLElBQUksQ0FBQ0wsZ0JBQWdCLEVBQUUsSUFBSTtZQUM5QyxDQUFDOzs7WUFFRE0sR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ1AsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDN0MsSUFBSSxDQUFDUSxTQUFTLENBQUMsSUFBSSxDQUFDYixhQUFhLEVBQUUsSUFBSTtZQUN6QyxDQUFDOzs7WUFFRGxCLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLG1DQUVIZ0MsQ0FBQyxVQUFDLENBRUg7WUFHSixDQUFDOzs7V0FoQ0dsQixHQUFHO21CQTdDNEMsTUFBVTtnQkE2Q3pEQSxHQUFHLEVBa0NBQyxDQUFPLFVBQUcsQ0FBSyJ9