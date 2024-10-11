"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Select;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _input = /*#__PURE__*/ _interop_require_default(require("../mixins/input"));
var _focus = /*#__PURE__*/ _interop_require_default(require("../mixins/focus"));
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
var Select = /*#__PURE__*/ function(Element) {
    _inherits(Select, Element);
    function Select() {
        _class_call_check(this, Select);
        return _call_super(this, Select, arguments);
    }
    _create_class(Select, [
        {
            key: "onResize",
            value: function onResize(resizeHandler, element) {} ///
        },
        {
            key: "offResize",
            value: function offResize(resizeHandler, element) {} ///
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.domElement.value;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.domElement.value = value;
            }
        }
    ]);
    return Select;
}(_wrap_native_super(_element.default));
_define_property(Select, "tagName", "select");
Object.assign(Select.prototype, _input.default);
Object.assign(Select.prototype, _focus.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBpbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2lucHV0XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gLy8vXG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9ICAvLy9cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlbGVjdFwiO1xufVxuXG5PYmplY3QuYXNzaWduKFNlbGVjdC5wcm90b3R5cGUsIGlucHV0TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIlNlbGVjdCIsIm9uUmVzaXplIiwicmVzaXplSGFuZGxlciIsImVsZW1lbnQiLCJvZmZSZXNpemUiLCJnZXRWYWx1ZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJpbnB1dE1peGlucyIsImZvY3VzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs4REFKRDs0REFDSTs0REFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSx1QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsYUFBYSxFQUFFQyxPQUFPLEdBQUcsRUFBRSxHQUFHOzs7WUFFdkNDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixhQUFhLEVBQUVDLE9BQU8sR0FBRyxFQUFHLEdBQUc7OztZQUV6Q0UsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFhLE9BQU8sSUFBSSxDQUFDQyxVQUFVLENBQUNDLEtBQUs7WUFBRTs7O1lBRTNDQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0QsS0FBSztnQkFBSSxJQUFJLENBQUNELFVBQVUsQ0FBQ0MsS0FBSyxHQUFHQTtZQUFPOzs7V0FQOUJQO3FCQUFlUyxnQkFBTztBQVN6QyxpQkFUbUJULFFBU1pVLFdBQVU7QUFHbkJDLE9BQU9DLE1BQU0sQ0FBQ1osT0FBT2EsU0FBUyxFQUFFQyxjQUFXO0FBQzNDSCxPQUFPQyxNQUFNLENBQUNaLE9BQU9hLFNBQVMsRUFBRUUsY0FBVyJ9