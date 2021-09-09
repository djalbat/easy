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
var InputElement = /*#__PURE__*/ function(Element) {
    _inherits(InputElement, Element);
    function InputElement() {
        _classCallCheck(this, InputElement);
        return _possibleConstructorReturn(this, _getPrototypeOf(InputElement).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnB1dEVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsImNoYW5nZU1peGlucyIsIkNIQU5HRV9FVkVOVF9UWVBFIiwiSW5wdXRFbGVtZW50Iiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwiZWxlbWVudCIsIm9uIiwib2ZmQ2hhbmdlIiwib2ZmIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwib2ZmUmVzaXplIiwiZ2V0VmFsdWUiLCJkb21FbGVtZW50IiwidmFsdWUiLCJnZXRTZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvblN0YXJ0IiwiZ2V0U2VsZWN0aW9uRW5kIiwic2VsZWN0aW9uRW5kIiwiaXNSZWFkT25seSIsInJlYWRPbmx5Iiwic2V0VmFsdWUiLCJzZXRTZWxlY3Rpb25TdGFydCIsInNldFNlbGVjdGlvbkVuZCIsInNldFJlYWRPbmx5Iiwic2VsZWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVRLEdBQVcsQ0FBWCxRQUFXO0FBQ04sR0FBaUIsQ0FBakIsT0FBaUI7QUFFUixHQUFjLENBQWQsV0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQyxZQUFZLGlCQUFsQixRQUFRO2NBQUYsWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUNoQixHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUhWLFdBQWMsb0JBR2dCLGFBQWEsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRXhGLEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxHQUFHLENBTFosV0FBYyxvQkFLa0IsYUFBYSxFQUFFLE9BQU87WUFBRyxDQUFDOzs7WUFFMUYsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFBQSxDQUFDLEFBQUMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzs7WUFFdkMsR0FBUyxHQUFULFNBQVM7bUJBQVQsUUFBUSxDQUFSLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFBQSxDQUFDLEFBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzs7WUFFekMsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFBRSxDQUFDOzs7WUFFNUMsR0FBaUIsR0FBakIsaUJBQWlCO21CQUFqQixRQUFRLENBQVIsaUJBQWlCLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjO1lBQUUsQ0FBQzs7O1lBRTlELEdBQWUsR0FBZixlQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO1lBQUUsQ0FBQzs7O1lBRTFELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQUUsQ0FBQzs7O1lBRWpELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUFFLENBQUM7OztZQUVsRCxHQUFpQixHQUFqQixpQkFBaUI7bUJBQWpCLFFBQVEsQ0FBUixpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxjQUFjO1lBQUUsQ0FBQzs7O1lBRXRGLEdBQWUsR0FBZixlQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsWUFBWTtZQUFFLENBQUM7OztZQUU5RSxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVE7WUFBRSxDQUFDOzs7WUFFOUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUFJLENBQUM7OztXQXpCbEMsWUFBWTttQkFMRSxRQUFXO0FBaUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBaENYLE9BQWlCO2VBa0MzQixZQUFZIn0=