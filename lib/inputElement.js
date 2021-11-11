"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
var _change = _interopRequireDefault(require("./mixins/change"));
var _eventTypes = require("./eventTypes");
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var InputElement = /*#__PURE__*/ function(Element) {
    _inherits(InputElement, Element);
    var _super = _createSuper(InputElement);
    function InputElement() {
        _classCallCheck(this, InputElement);
        return _super.apply(this, arguments);
    }
    _createClass(InputElement, [
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
            value: function onResize(resizeHandler, element) {
            } ///
        },
        {
            key: "offResize",
            value: function offResize(resizeHandler, element) {
            } ///
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
}(_wrapNativeSuper(_element.default));
Object.assign(InputElement.prototype, _change.default);
var _default = InputElement;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnB1dEVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5pbXBvcnQgeyBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAvLy9cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gIC8vL1xuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBpc1JlYWRPbmx5KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7IHRoaXMuZG9tRWxlbWVudC5yZWFkT25seSA9IHJlYWRPbmx5OyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBjaGFuZ2VNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7XG4iXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50Iiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwiZWxlbWVudCIsIm9uIiwib2ZmQ2hhbmdlIiwib2ZmIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwib2ZmUmVzaXplIiwiZ2V0VmFsdWUiLCJkb21FbGVtZW50IiwidmFsdWUiLCJnZXRTZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvblN0YXJ0IiwiZ2V0U2VsZWN0aW9uRW5kIiwic2VsZWN0aW9uRW5kIiwiaXNSZWFkT25seSIsInJlYWRPbmx5Iiwic2V0VmFsdWUiLCJzZXRTZWxlY3Rpb25TdGFydCIsInNldFNlbGVjdGlvbkVuZCIsInNldFJlYWRPbmx5Iiwic2VsZWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVRLEdBQVcsQ0FBWCxRQUFXO0FBQ04sR0FBaUIsQ0FBakIsT0FBaUI7QUFFUixHQUFjLENBQWQsV0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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