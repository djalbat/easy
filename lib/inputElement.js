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
                this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
            }
        },
        {
            key: "offChange",
            value: function offChange(changeHandler, element) {
                this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnB1dEVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5pbXBvcnQgeyBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAvLy9cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gIC8vL1xuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBpc1JlYWRPbmx5KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7IHRoaXMuZG9tRWxlbWVudC5yZWFkT25seSA9IHJlYWRPbmx5OyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBjaGFuZ2VNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7XG4iXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50Iiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwiZWxlbWVudCIsIm9uIiwiQ0hBTkdFX0VWRU5UX1RZUEUiLCJvZmZDaGFuZ2UiLCJvZmYiLCJvblJlc2l6ZSIsInJlc2l6ZUhhbmRsZXIiLCJvZmZSZXNpemUiLCJnZXRWYWx1ZSIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsImdldFNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJnZXRTZWxlY3Rpb25FbmQiLCJzZWxlY3Rpb25FbmQiLCJpc1JlYWRPbmx5IiwicmVhZE9ubHkiLCJzZXRWYWx1ZSIsInNldFNlbGVjdGlvblN0YXJ0Iiwic2V0U2VsZWN0aW9uRW5kIiwic2V0UmVhZE9ubHkiLCJzZWxlY3QiLCJFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY2hhbmdlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQ0E7OztlQUFBOzs7OERBbkNvQjs2REFDSzswQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSw2QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87Z0JBQUksSUFBSSxDQUFDQyxFQUFFLENBQUNDLDZCQUFpQixFQUFFSCxlQUFlQztZQUFVOzs7WUFFdkZHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVSixhQUFhLEVBQUVDLE9BQU87Z0JBQUksSUFBSSxDQUFDSSxHQUFHLENBQUNGLDZCQUFpQixFQUFFSCxlQUFlQztZQUFVOzs7WUFFekZLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxhQUFhLEVBQUVOLE9BQU8sR0FBRyxFQUFFLEdBQUc7OztZQUV2Q08sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVELGFBQWEsRUFBRU4sT0FBTyxHQUFHLEVBQUcsR0FBRzs7O1lBRXpDUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSztZQUFFOzs7WUFFM0NDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBc0IsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0csY0FBYztZQUFFOzs7WUFFN0RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBb0IsT0FBTyxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ssWUFBWTtZQUFFOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBZSxPQUFPLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxRQUFRO1lBQUU7OztZQUVoREMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNQLEtBQUs7Z0JBQUksSUFBSSxDQUFDRCxVQUFVLENBQUNDLEtBQUssR0FBR0E7WUFBTzs7O1lBRWpEUSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCTixjQUFjO2dCQUFJLElBQUksQ0FBQ0gsVUFBVSxDQUFDRyxjQUFjLEdBQUdBO1lBQWdCOzs7WUFFckZPLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JMLFlBQVk7Z0JBQUksSUFBSSxDQUFDTCxVQUFVLENBQUNLLFlBQVksR0FBR0E7WUFBYzs7O1lBRTdFTSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUosUUFBUTtnQkFBSSxJQUFJLENBQUNQLFVBQVUsQ0FBQ08sUUFBUSxHQUFHQTtZQUFVOzs7WUFFN0RLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVyxJQUFJLENBQUNaLFVBQVUsQ0FBQ1ksTUFBTTtZQUFJOzs7V0F6QmpDeEI7cUJBQXFCeUIsZ0JBQU87QUE0QmxDQyxPQUFPQyxNQUFNLENBQUMzQixhQUFhNEIsU0FBUyxFQUFFQyxlQUFZO0lBRWxELFdBQWU3QiJ9