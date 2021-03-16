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
    return React.createElement("div", {
        className: "view"
    }, React.createElement(_index.Checkbox, {
        checked: true,
        onChange: function(event, element) {
            console.log('Changed');
        }
    }), React.createElement(_index.Textarea, {
        onChange: function(event, element) {
            console.log("change");
        },
        onScroll: function onScroll(event, element) {
            var scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
            console.log(scrollTop, scrollLeft);
        }
    }), React.createElement(_index.Button, {
        onClick: function(event, element) {
            var button = event.button;
            console.log(button === LEFT_MOUSE_BUTTON);
        }
    }, "Submit"), React.createElement(Div, null));
};
var _default = View;
exports.default = _default;
var Div = function(Element1) {
    _inherits(Div, _index.Element);
    function Div() {
        _classCallCheck(this, Div);
        return _possibleConstructorReturn(this, _getPrototypeOf(Div).apply(this, arguments));
    }
    _createClass(Div, [
        {
            key: "childElements",
            value: function childElements() {
                return React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers.");
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.onResize((function(event, element) {
                    var width = this.getWidth(), height = this.getHeight();
                    console.log(width, height);
                }).bind(this));
                this.onMouseMove(function(event, element) {
                    var pageX = event.pageX, pageY = event.pageY;
                    console.log(pageX, pageY);
                });
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var div = _index.Element.fromClass(Class, properties);
                div.initialise();
                return div;
            }
        }
    ]);
    return Div;
}(_wrapNativeSuper(_index.Element));
_defineProperty(Div, "tagName", "div");

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHRhcmVhLCBDaGVja2JveCwgQnV0dG9uLCBjb25zdGFudHMsIEVsZW1lbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT5cblxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICA8Q2hlY2tib3ggY2hlY2tlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlZCcpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKVxuXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXtmdW5jdGlvbihldmVudCwgZWxlbWVudCkgeyAgLy8vXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcblxuICAgICAgICAgICAgICB9fVxuICAgIC8+XG4gICAgPEJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYnV0dG9uID09PSBMRUZUX01PVVNFX0JVVFRPTilcblxuICAgICAgICAgICAgfX1cbiAgICA+XG4gICAgICBTdWJtaXRcbiAgICA8L0J1dHRvbj5cbiAgICA8RGl2IC8+XG4gIDwvZGl2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG5cbiAgICB9KTtcblxuICAgIHRoaXMub25Nb3VzZU1vdmUoKGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGRpdi5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxpQkFBQSxHQUZBLE1BQUEsV0FFQSxpQkFBQTtJQUVBLElBQUEsWUFBQSxVQUFBO2dDQUVBLEdBQUE7QUFBQSxpQkFBQSxHQUFBLElBQUE7MkJBTkEsTUFBQTtBQU9BLGVBQUEsRUFBQSxJQUFBO0FBQ0EsZ0JBQUEsV0FBQSxLQUFBLEVBQUEsT0FBQTtBQUVBLG1CQUFBLENBQUEsR0FBQSxFQUFBLE9BQUE7OzRCQVZBLE1BQUE7QUFjQSxnQkFBQSxXQUFBLEtBQUEsRUFBQSxPQUFBO0FBRUEsbUJBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQTs7QUFHQSxnQkFBQSxXQUFBLFFBQUEsQ0FBQSxLQUFBLEVBQUEsT0FBQTtnQkFFQSxTQUFBLFFBQUEsWUFBQSxJQUNBLFVBQUEsUUFBQSxhQUFBO0FBRUEsbUJBQUEsQ0FBQSxHQUFBLENBQUEsU0FBQSxFQUFBLFVBQUE7OzRCQXhCQSxNQUFBO0FBNEJBLGVBQUEsV0FBQSxLQUFBLEVBQUEsT0FBQTtnQkFFQSxNQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUE7QUFFQSxtQkFBQSxDQUFBLEdBQUEsQ0FBQSxNQUFBLEtBQUEsaUJBQUE7O1FBR0EsTUFFQSx3QkFDQSxHQUFBOztlQUtBLElBQUE7O0lBRUEsR0FBQSxZQUFBLFFBQUE7Y0FBQSxHQUFBLEVBN0NBLE1BQUE7YUE2Q0EsR0FBQTs4QkFBQSxHQUFBO2dFQUFBLEdBQUE7O2lCQUFBLEdBQUE7O0FBQ0EsZUFBQSxHQUFBLGFBQUE7NEJBQUEsYUFBQTs0Q0FHQSxDQUFBLFVBQUEsbUVBRUE7Ozs7QUFLQSxlQUFBLEdBQUEsVUFBQTs0QkFBQSxVQUFBO3FCQUNBLFFBQUEsV0FBQSxLQUFBLEVBQUEsT0FBQTt3QkFFQSxLQUFBLFFBQUEsUUFBQSxJQUNBLE1BQUEsUUFBQSxTQUFBO0FBRUEsMkJBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxFQUFBLE1BQUE7O3FCQUlBLFdBQUEsVUFBQSxLQUFBLEVBQUEsT0FBQTt3QkFFQSxLQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxLQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFFQSwyQkFBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLEVBQUEsS0FBQTs7Ozs7O0FBT0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQSxDQUFBLEtBQUEsRUFBQSxVQUFBO29CQUNBLEdBQUEsR0E5RUEsTUFBQSxTQThFQSxTQUFBLENBQUEsS0FBQSxFQUFBLFVBQUE7QUFFQSxtQkFBQSxDQUFBLFVBQUE7dUJBRUEsR0FBQTs7OztXQXJDQSxHQUFBO21CQTdDQSxNQUFBO2dCQTZDQSxHQUFBLEdBOEJBLE9BQUEsSUFBQSxHQUFBIn0=