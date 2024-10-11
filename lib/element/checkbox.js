"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _change = /*#__PURE__*/ _interop_require_default(require("../mixins/change"));
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
var Checkbox = /*#__PURE__*/ function(Element) {
    _inherits(Checkbox, Element);
    function Checkbox() {
        _class_call_check(this, Checkbox);
        return _call_super(this, Checkbox, arguments);
    }
    _create_class(Checkbox, [
        {
            key: "isChecked",
            value: function isChecked() {
                return this.domElement.checked;
            }
        },
        {
            key: "check",
            value: function check() {
                var checked = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                this.domElement.checked = checked;
            }
        }
    ]);
    return Checkbox;
}(_wrap_native_super(_element.default));
_define_property(Checkbox, "tagName", "input");
_define_property(Checkbox, "defaultProperties", {
    type: "checkbox"
});
Object.assign(Checkbox.prototype, _change.default);
var _default = Checkbox;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGNoYW5nZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7IHRoaXMuZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwiaXNDaGVja2VkIiwiZG9tRWxlbWVudCIsImNoZWNrZWQiLCJjaGVjayIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY2hhbmdlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7OERBakJvQjs2REFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTztZQUFFOzs7WUFFOUNDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBTUQsVUFBQUEsaUVBQVU7Z0JBQVEsSUFBSSxDQUFDRCxVQUFVLENBQUNDLE9BQU8sR0FBR0E7WUFBUzs7O1dBSHZESDtxQkFBaUJLLGdCQUFPO0FBSzVCLGlCQUxJTCxVQUtHTSxXQUFVO0FBRWpCLGlCQVBJTixVQU9HTyxxQkFBb0I7SUFDekJDLE1BQU07QUFDUjtBQUdGQyxPQUFPQyxNQUFNLENBQUNWLFNBQVNXLFNBQVMsRUFBRUMsZUFBWTtJQUU5QyxXQUFlWiJ9