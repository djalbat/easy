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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function combine(target) {
    var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    target = _object_spread({}, target);
    var names = Object.keys(source); ///
    names.forEach(function(name) {
        var targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue; ///
    });
    return target;
}
function prune(target) {
    var names = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    target = _object_spread({}, target);
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
    var valueBoolean = (typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN;
    return valueBoolean;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCT09MRUFOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXQsIHNvdXJjZSA9IHt9KSB7XG4gIHRhcmdldCA9IHsgIC8vL1xuICAgIC4uLnRhcmdldFxuICB9O1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoc291cmNlKTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtuYW1lXSxcbiAgICAgICAgICBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtuYW1lXSxcbiAgICAgICAgICB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIHRhcmdldFtuYW1lXSA9IHRhcmdldEhhc093blByb3BlcnR5ID9cbiAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOyAvLy9cbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKHRhcmdldCwgbmFtZXMgPSBbXSkge1xuICB0YXJnZXQgPSB7ICAvLy9cbiAgICAuLi50YXJnZXRcbiAgfTtcblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0SGFzT3duUHJvcGVydHkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRbbmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkge1xuICBjb25zdCB0YXJnZXRWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbih0YXJnZXRWYWx1ZSksXG4gICAgICAgIHNvdXJjZVZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHNvdXJjZVZhbHVlKSxcbiAgICAgICAgY29tYmluZWRWYWx1ZSA9ICh0YXJnZXRWYWx1ZUJvb2xlYW4gJiYgc291cmNlVmFsdWVCb29sZWFuKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0VmFsdWV9ICR7c291cmNlVmFsdWV9YDtcblxuICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUJvb2xlYW4odmFsdWUpIHtcbiAgY29uc3QgdmFsdWVCb29sZWFuID0gKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTik7XG5cbiAgcmV0dXJuIHZhbHVlQm9vbGVhbjtcbn1cbiJdLCJuYW1lcyI6WyJjb21iaW5lIiwicHJ1bmUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsInRhcmdldFZhbHVlIiwic291cmNlVmFsdWUiLCJ0YXJnZXRIYXNPd25Qcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiY29tYmluZVZhbHVlcyIsInRhcmdldFZhbHVlQm9vbGVhbiIsImlzVmFsdWVCb29sZWFuIiwic291cmNlVmFsdWVCb29sZWFuIiwiY29tYmluZWRWYWx1ZSIsInZhbHVlIiwidmFsdWVCb29sZWFuIiwiQk9PTEVBTiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLE9BQU87ZUFBUEE7O0lBb0JBQyxLQUFLO2VBQUxBOzs7eUJBdEJROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsU0FBU0QsUUFBUUUsTUFBTTtRQUFFQyxTQUFBQSxpRUFBUyxDQUFDO0lBQ3hDRCxTQUFTLG1CQUNKQTtJQUdMLElBQU1FLFFBQVFDLE9BQU9DLElBQUksQ0FBQ0gsU0FBVSxHQUFHO0lBRXZDQyxNQUFNRyxPQUFPLENBQUMsU0FBQ0M7UUFDYixJQUFNQyxjQUFjUCxNQUFNLENBQUNNLEtBQUssRUFDMUJFLGNBQWNQLE1BQU0sQ0FBQ0ssS0FBSyxFQUMxQkcsdUJBQXVCVCxPQUFPVSxjQUFjLENBQUNKO1FBRW5ETixNQUFNLENBQUNNLEtBQUssR0FBR0csdUJBQ0VFLGNBQWNKLGFBQWFDLGVBQ3pCQSxhQUFhLEdBQUc7SUFDckM7SUFFQSxPQUFPUjtBQUNUO0FBRU8sU0FBU0QsTUFBTUMsTUFBTTtRQUFFRSxRQUFBQSxpRUFBUSxFQUFFO0lBQ3RDRixTQUFTLG1CQUNKQTtJQUdMRSxNQUFNRyxPQUFPLENBQUMsU0FBQ0M7UUFDYixJQUFNRyx1QkFBdUJULE9BQU9VLGNBQWMsQ0FBQ0o7UUFFbkQsSUFBSUcsc0JBQXNCO1lBQ3hCLE9BQU9ULE1BQU0sQ0FBQ00sS0FBSztRQUNyQjtJQUNGO0lBRUEsT0FBT047QUFDVDtBQUVBLFNBQVNXLGNBQWNKLFdBQVcsRUFBRUMsV0FBVztJQUM3QyxJQUFNSSxxQkFBcUJDLGVBQWVOLGNBQ3BDTyxxQkFBcUJELGVBQWVMLGNBQ3BDTyxnQkFBZ0IsQUFBQ0gsc0JBQXNCRSxxQkFDckJQLGNBQ0UsQUFBQyxHQUFpQkMsT0FBZkQsYUFBWSxLQUFlLE9BQVpDO0lBRTVDLE9BQU9PO0FBQ1Q7QUFFQSxTQUFTRixlQUFlRyxLQUFLO0lBQzNCLElBQU1DLGVBQWdCLENBQUEsT0FBT0Qsc0NBQVAsU0FBT0EsTUFBSSxNQUFNRSxrQkFBTztJQUU5QyxPQUFPRDtBQUNUIn0=