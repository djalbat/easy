"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    combine: function() {
        return combine;
    },
    prune: function() {
        return prune;
    }
});
var _constants = require("../constants");
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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function combine(target) {
    var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    target = _objectSpread({}, target); ///
    var names = Object.keys(source); ///
    names.forEach(function(name) {
        var targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue; ///
    });
    return target;
}
function prune(target) {
    var names = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    target = _objectSpread({}, target); ///
    names.forEach(function(name) {
        var targetHasOwnProperty = target.hasOwnProperty(name);
        if (targetHasOwnProperty) {
            delete target[name];
        }
    });
    return target;
}
function combineValues(targetValue, sourceValue) {
    var targetValueBoolean = isValueBoolean(targetValue), sourceValueBoolean = isValueBoolean(sourceValue), combinedValue = targetValueBoolean && sourceValueBoolean ? targetValue : "".concat(targetValue, " ").concat(sourceValue);
    return combinedValue;
}
function isValueBoolean(value) {
    var valueBoolean = (typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN;
    return valueBoolean;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCT09MRUFOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXQsIHNvdXJjZSA9IHt9KSB7XG4gIHRhcmdldCA9IHsgLi4udGFyZ2V0IH07ICAvLy9cblxuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbbmFtZV0sXG4gICAgICAgICAgc291cmNlVmFsdWUgPSBzb3VyY2VbbmFtZV0sXG4gICAgICAgICAgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICB0YXJnZXRbbmFtZV0gPSB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA/XG4gICAgICAgICAgICAgICAgICAgICBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTsgLy8vXG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZSh0YXJnZXQsIG5hbWVzID0gW10pIHtcbiAgdGFyZ2V0ID0geyAuLi50YXJnZXQgfTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIGlmICh0YXJnZXRIYXNPd25Qcm9wZXJ0eSkge1xuICAgICAgZGVsZXRlIHRhcmdldFtuYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSB7XG4gIGNvbnN0IHRhcmdldFZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHRhcmdldFZhbHVlKSxcbiAgICAgICAgc291cmNlVmFsdWVCb29sZWFuID0gaXNWYWx1ZUJvb2xlYW4oc291cmNlVmFsdWUpLFxuICAgICAgICBjb21iaW5lZFZhbHVlID0gKHRhcmdldFZhbHVlQm9vbGVhbiAmJiBzb3VyY2VWYWx1ZUJvb2xlYW4pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0YXJnZXRWYWx1ZX0gJHtzb3VyY2VWYWx1ZX1gO1xuXG4gIHJldHVybiBjb21iaW5lZFZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlQm9vbGVhbih2YWx1ZSkge1xuICBjb25zdCB2YWx1ZUJvb2xlYW4gPSAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKTtcblxuICByZXR1cm4gdmFsdWVCb29sZWFuO1xufVxuIl0sIm5hbWVzIjpbImNvbWJpbmUiLCJwcnVuZSIsInRhcmdldCIsInNvdXJjZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJuYW1lIiwidGFyZ2V0VmFsdWUiLCJzb3VyY2VWYWx1ZSIsInRhcmdldEhhc093blByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJjb21iaW5lVmFsdWVzIiwidGFyZ2V0VmFsdWVCb29sZWFuIiwiaXNWYWx1ZUJvb2xlYW4iLCJzb3VyY2VWYWx1ZUJvb2xlYW4iLCJjb21iaW5lZFZhbHVlIiwidmFsdWUiLCJ2YWx1ZUJvb2xlYW4iLCJCT09MRUFOIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLE9BQU87ZUFBUEE7O0lBa0JBQyxLQUFLO2VBQUxBOzs7eUJBcEJROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsU0FBU0QsUUFBUUUsTUFBTSxFQUFlO1FBQWJDLFNBQUFBLGlFQUFTLENBQUMsQ0FBQztJQUN6Q0QsU0FBUyxrQkFBS0EsU0FBVyxHQUFHO0lBRTVCLElBQU1FLFFBQVFDLE9BQU9DLElBQUksQ0FBQ0gsU0FBVSxHQUFHO0lBRXZDQyxNQUFNRyxPQUFPLENBQUMsU0FBQ0MsTUFBUztRQUN0QixJQUFNQyxjQUFjUCxNQUFNLENBQUNNLEtBQUssRUFDMUJFLGNBQWNQLE1BQU0sQ0FBQ0ssS0FBSyxFQUMxQkcsdUJBQXVCVCxPQUFPVSxjQUFjLENBQUNKO1FBRW5ETixNQUFNLENBQUNNLEtBQUssR0FBR0csdUJBQ0VFLGNBQWNKLGFBQWFDLGVBQ3pCQSxXQUFXLEVBQUUsR0FBRztJQUNyQztJQUVBLE9BQU9SO0FBQ1Q7QUFFTyxTQUFTRCxNQUFNQyxNQUFNLEVBQWM7UUFBWkUsUUFBQUEsaUVBQVEsRUFBRTtJQUN0Q0YsU0FBUyxrQkFBS0EsU0FBVyxHQUFHO0lBRTVCRSxNQUFNRyxPQUFPLENBQUMsU0FBQ0MsTUFBUztRQUN0QixJQUFNRyx1QkFBdUJULE9BQU9VLGNBQWMsQ0FBQ0o7UUFFbkQsSUFBSUcsc0JBQXNCO1lBQ3hCLE9BQU9ULE1BQU0sQ0FBQ00sS0FBSztRQUNyQixDQUFDO0lBQ0g7SUFFQSxPQUFPTjtBQUNUO0FBRUEsU0FBU1csY0FBY0osV0FBVyxFQUFFQyxXQUFXLEVBQUU7SUFDL0MsSUFBTUkscUJBQXFCQyxlQUFlTixjQUNwQ08scUJBQXFCRCxlQUFlTCxjQUNwQ08sZ0JBQWdCLEFBQUNILHNCQUFzQkUscUJBQ3JCUCxjQUNFLEFBQUMsR0FBaUJDLE9BQWZELGFBQVksS0FBZSxPQUFaQyxZQUFhO0lBRXpELE9BQU9PO0FBQ1Q7QUFFQSxTQUFTRixlQUFlRyxLQUFLLEVBQUU7SUFDN0IsSUFBTUMsZUFBZ0IsQ0FBQSxPQUFPRCxzQ0FBUCxRQUFPQSxNQUFLLEFBQUQsTUFBTUUsa0JBQU87SUFFOUMsT0FBT0Q7QUFDVCJ9