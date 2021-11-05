"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combine = combine;
exports.prune = prune;
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
        var source = arguments[i] != null ? arguments[i] : {
        };
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function combine(target, param) {
    var source = param === void 0 ? {
    } : param;
    target = _objectSpread({
    }, target); ///
    var names = Object.keys(source); ///
    names.forEach(function(name) {
        var targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue; ///
    });
    return target;
}
function prune(target, param) {
    var names = param === void 0 ? [] : param;
    target = _objectSpread({
    }, target); ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sIm5hbWVzIjpbIkJPT0xFQU4iLCJjb21iaW5lIiwidGFyZ2V0Iiwic291cmNlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJ0YXJnZXRWYWx1ZSIsInNvdXJjZVZhbHVlIiwidGFyZ2V0SGFzT3duUHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbWJpbmVWYWx1ZXMiLCJwcnVuZSIsInRhcmdldFZhbHVlQm9vbGVhbiIsImlzVmFsdWVCb29sZWFuIiwic291cmNlVmFsdWVCb29sZWFuIiwiY29tYmluZWRWYWx1ZSIsInZhbHVlIiwidmFsdWVCb29sZWFuIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBSUksT0FBTyxHQUFQLE9BQU87UUFrQlAsS0FBSyxHQUFMLEtBQUs7QUFwQkcsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUV0QixPQUFPLENBQUMsTUFBTSxFQUFFLEtBQVcsRUFBRSxDQUFDO1FBQWQsTUFBTSxHQUFOLEtBQVcsY0FBRixDQUFDO0lBQUEsQ0FBQyxHQUFYLEtBQVc7SUFDekMsTUFBTTtPQUFRLE1BQU0sRUFBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFNUIsR0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFdkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsSUFBSSxFQUFLLENBQUM7UUFDdkIsR0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUN6QixXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksR0FDekIsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJO1FBRXZELE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CLEdBQ2xCLGFBQWEsQ0FBQyxXQUFXLEVBQUUsV0FBVyxJQUNwQyxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQ3JDLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTTtBQUNmLENBQUM7U0FFZSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQVUsRUFBRSxDQUFDO1FBQWIsS0FBSyxHQUFMLEtBQVUsY0FBRixDQUFDLENBQUMsR0FBVixLQUFVO0lBQ3RDLE1BQU07T0FBUSxNQUFNLEVBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTVCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLElBQUksRUFBSyxDQUFDO1FBQ3ZCLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUk7UUFFdkQsRUFBRSxFQUFFLG9CQUFvQixFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU07QUFDZixDQUFDO1NBRVEsYUFBYSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUNoRCxHQUFLLENBQUMsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLFdBQVcsR0FDL0Msa0JBQWtCLEdBQUcsY0FBYyxDQUFDLFdBQVcsR0FDL0MsYUFBYSxHQUFJLGtCQUFrQixJQUFJLGtCQUFrQixHQUN2QyxXQUFXLE1BQ1MsTUFBVyxDQUExQixXQUFXLEdBQUMsQ0FBQyxHQUFjLE1BQUEsQ0FBWixXQUFXO0lBRXZELE1BQU0sQ0FBQyxhQUFhO0FBQ3RCLENBQUM7U0FFUSxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsR0FBSyxDQUFDLFlBQVksV0FBVyxLQUFLLGlDQUFaLE9BQVksQ0FBTCxLQUFLLE9BN0NaLFVBQWM7SUErQ3BDLE1BQU0sQ0FBQyxZQUFZO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9PTEVBTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUodGFyZ2V0LCBzb3VyY2UgPSB7fSkge1xuICB0YXJnZXQgPSB7IC4uLnRhcmdldCB9OyAgLy8vXG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W25hbWVdLFxuICAgICAgICAgIHNvdXJjZVZhbHVlID0gc291cmNlW25hbWVdLFxuICAgICAgICAgIHRhcmdldEhhc093blByb3BlcnR5ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgdGFyZ2V0W25hbWVdID0gdGFyZ2V0SGFzT3duUHJvcGVydHkgP1xuICAgICAgICAgICAgICAgICAgICAgY29tYmluZVZhbHVlcyh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU7IC8vL1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0LCBuYW1lcyA9IFtdKSB7XG4gIHRhcmdldCA9IHsgLi4udGFyZ2V0IH07ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0SGFzT3duUHJvcGVydHkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRbbmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkge1xuICBjb25zdCB0YXJnZXRWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbih0YXJnZXRWYWx1ZSksXG4gICAgICAgIHNvdXJjZVZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHNvdXJjZVZhbHVlKSxcbiAgICAgICAgY29tYmluZWRWYWx1ZSA9ICh0YXJnZXRWYWx1ZUJvb2xlYW4gJiYgc291cmNlVmFsdWVCb29sZWFuKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0VmFsdWV9ICR7c291cmNlVmFsdWV9YDtcblxuICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUJvb2xlYW4odmFsdWUpIHtcbiAgY29uc3QgdmFsdWVCb29sZWFuID0gKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTik7XG5cbiAgcmV0dXJuIHZhbHVlQm9vbGVhbjtcbn1cbiJdfQ==