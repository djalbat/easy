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
var _element = /*#__PURE__*/ _interop_require_default(require("./element"));
var _change = /*#__PURE__*/ _interop_require_default(require("./mixins/change"));
var _eventTypes = require("./eventTypes");
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
var InputElement = /*#__PURE__*/ function(Element) {
    _inherits(InputElement, Element);
    var _super = _create_super(InputElement);
    function InputElement() {
        _class_call_check(this, InputElement);
        return _super.apply(this, arguments);
    }
    _create_class(InputElement, [
        {
            key: "onChange",
            value: function onChange(changeHandler, element) {
                this.onEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
            }
        },
        {
            key: "offChange",
            value: function offChange(changeHandler, element) {
                this.offEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
            }
        },
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
            key: "getSelectionStart",
            value: function getSelectionStart() {
                return this.domElement.selectionStart;
            }
        },
        {
            key: "getSelectionEnd",
            value: function getSelectionEnd() {
                return this.domElement.selectionEnd;
            }
        },
        {
            key: "isReadOnly",
            value: function isReadOnly() {
                return this.domElement.readOnly;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.domElement.value = value;
            }
        },
        {
            key: "setSelectionStart",
            value: function setSelectionStart(selectionStart) {
                this.domElement.selectionStart = selectionStart;
            }
        },
        {
            key: "setSelectionEnd",
            value: function setSelectionEnd(selectionEnd) {
                this.domElement.selectionEnd = selectionEnd;
            }
        },
        {
            key: "setReadOnly",
            value: function setReadOnly(readOnly) {
                this.domElement.readOnly = readOnly;
            }
        },
        {
            key: "select",
            value: function select() {
                this.domElement.select();
            }
        }
    ]);
    return InputElement;
}(_wrap_native_super(_element.default));
Object.assign(InputElement.prototype, _change.default);
var _default = InputElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnB1dEVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5pbXBvcnQgeyBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gLy8vXG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9ICAvLy9cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgaXNSZWFkT25seSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZWFkT25seTsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRSZWFkT25seShyZWFkT25seSkgeyB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHkgPSByZWFkT25seTsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgY2hhbmdlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRFbGVtZW50O1xuIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsIm9uQ2hhbmdlIiwiY2hhbmdlSGFuZGxlciIsImVsZW1lbnQiLCJvbkV2ZW50IiwiQ0hBTkdFX0VWRU5UX1RZUEUiLCJvZmZDaGFuZ2UiLCJvZmZFdmVudCIsIm9uUmVzaXplIiwicmVzaXplSGFuZGxlciIsIm9mZlJlc2l6ZSIsImdldFZhbHVlIiwiZG9tRWxlbWVudCIsInZhbHVlIiwiZ2V0U2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsImdldFNlbGVjdGlvbkVuZCIsInNlbGVjdGlvbkVuZCIsImlzUmVhZE9ubHkiLCJyZWFkT25seSIsInNldFZhbHVlIiwic2V0U2VsZWN0aW9uU3RhcnQiLCJzZXRTZWxlY3Rpb25FbmQiLCJzZXRSZWFkT25seSIsInNlbGVjdCIsIkVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjaGFuZ2VNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFDQTs7O2VBQUE7Ozs4REFuQ29COzZEQUNLOzBCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLDZCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGFBQWEsRUFBRUMsT0FBTztnQkFBSSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsNkJBQWlCLEVBQUVILGVBQWVDO1lBQVU7OztZQUU1RkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVKLGFBQWEsRUFBRUMsT0FBTztnQkFBSSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0YsNkJBQWlCLEVBQUVILGVBQWVDO1lBQVU7OztZQUU5RkssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLGFBQWEsRUFBRU4sT0FBTyxHQUFHLEVBQUUsR0FBRzs7O1lBRXZDTyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUQsYUFBYSxFQUFFTixPQUFPLEdBQUcsRUFBRyxHQUFHOzs7WUFFekNRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLO1lBQUU7OztZQUUzQ0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFzQixPQUFPLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxjQUFjO1lBQUU7OztZQUU3REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQixPQUFPLElBQUksQ0FBQ0osVUFBVSxDQUFDSyxZQUFZO1lBQUU7OztZQUV6REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFlLE9BQU8sSUFBSSxDQUFDTixVQUFVLENBQUNPLFFBQVE7WUFBRTs7O1lBRWhEQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1AsS0FBSztnQkFBSSxJQUFJLENBQUNELFVBQVUsQ0FBQ0MsS0FBSyxHQUFHQTtZQUFPOzs7WUFFakRRLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JOLGNBQWM7Z0JBQUksSUFBSSxDQUFDSCxVQUFVLENBQUNHLGNBQWMsR0FBR0E7WUFBZ0I7OztZQUVyRk8sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkwsWUFBWTtnQkFBSSxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ssWUFBWSxHQUFHQTtZQUFjOzs7WUFFN0VNLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZSixRQUFRO2dCQUFJLElBQUksQ0FBQ1AsVUFBVSxDQUFDTyxRQUFRLEdBQUdBO1lBQVU7OztZQUU3REssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFXLElBQUksQ0FBQ1osVUFBVSxDQUFDWSxNQUFNO1lBQUk7OztXQXpCakN4QjtxQkFBcUJ5QixnQkFBTztBQTRCbENDLE9BQU9DLE1BQU0sQ0FBQzNCLGFBQWE0QixTQUFTLEVBQUVDLGVBQVk7SUFFbEQsV0FBZTdCIn0=