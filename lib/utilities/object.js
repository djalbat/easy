"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get combine () {
        return combine;
    },
    get prune () {
        return prune;
    }
});
const _constants = require("../constants");
function combine(target, source = {}) {
    target = {
        ...target
    };
    const names = Object.keys(source); ///
    names.forEach((name)=>{
        const targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue; ///
    });
    return target;
}
function prune(target, names = []) {
    target = {
        ...target
    };
    names.forEach((name)=>{
        const targetHasOwnProperty = target.hasOwnProperty(name);
        if (targetHasOwnProperty) {
            delete target[name];
        }
    });
    return target;
}
function combineValues(targetValue, sourceValue) {
    const targetValueBoolean = isValueBoolean(targetValue), sourceValueBoolean = isValueBoolean(sourceValue), combinedValue = targetValueBoolean && sourceValueBoolean ? targetValue : `${targetValue} ${sourceValue}`;
    return combinedValue;
}
function isValueBoolean(value) {
    const valueBoolean = typeof value === _constants.BOOLEAN;
    return valueBoolean;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCT09MRUFOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXQsIHNvdXJjZSA9IHt9KSB7XG4gIHRhcmdldCA9IHsgIC8vL1xuICAgIC4uLnRhcmdldFxuICB9O1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoc291cmNlKTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtuYW1lXSxcbiAgICAgICAgICBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtuYW1lXSxcbiAgICAgICAgICB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIHRhcmdldFtuYW1lXSA9IHRhcmdldEhhc093blByb3BlcnR5ID9cbiAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOyAvLy9cbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKHRhcmdldCwgbmFtZXMgPSBbXSkge1xuICB0YXJnZXQgPSB7ICAvLy9cbiAgICAuLi50YXJnZXRcbiAgfTtcblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0SGFzT3duUHJvcGVydHkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRbbmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkge1xuICBjb25zdCB0YXJnZXRWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbih0YXJnZXRWYWx1ZSksXG4gICAgICAgIHNvdXJjZVZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHNvdXJjZVZhbHVlKSxcbiAgICAgICAgY29tYmluZWRWYWx1ZSA9ICh0YXJnZXRWYWx1ZUJvb2xlYW4gJiYgc291cmNlVmFsdWVCb29sZWFuKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0VmFsdWV9ICR7c291cmNlVmFsdWV9YDtcblxuICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUJvb2xlYW4odmFsdWUpIHtcbiAgY29uc3QgdmFsdWVCb29sZWFuID0gKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTik7XG5cbiAgcmV0dXJuIHZhbHVlQm9vbGVhbjtcbn1cbiJdLCJuYW1lcyI6WyJjb21iaW5lIiwicHJ1bmUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsInRhcmdldFZhbHVlIiwic291cmNlVmFsdWUiLCJ0YXJnZXRIYXNPd25Qcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiY29tYmluZVZhbHVlcyIsInRhcmdldFZhbHVlQm9vbGVhbiIsImlzVmFsdWVCb29sZWFuIiwic291cmNlVmFsdWVCb29sZWFuIiwiY29tYmluZWRWYWx1ZSIsInZhbHVlIiwidmFsdWVCb29sZWFuIiwiQk9PTEVBTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUFvQkFDO2VBQUFBOzs7MkJBdEJRO0FBRWpCLFNBQVNELFFBQVFFLE1BQU0sRUFBRUMsU0FBUyxDQUFDLENBQUM7SUFDekNELFNBQVM7UUFDUCxHQUFHQSxNQUFNO0lBQ1g7SUFFQSxNQUFNRSxRQUFRQyxPQUFPQyxJQUFJLENBQUNILFNBQVUsR0FBRztJQUV2Q0MsTUFBTUcsT0FBTyxDQUFDLENBQUNDO1FBQ2IsTUFBTUMsY0FBY1AsTUFBTSxDQUFDTSxLQUFLLEVBQzFCRSxjQUFjUCxNQUFNLENBQUNLLEtBQUssRUFDMUJHLHVCQUF1QlQsT0FBT1UsY0FBYyxDQUFDSjtRQUVuRE4sTUFBTSxDQUFDTSxLQUFLLEdBQUdHLHVCQUNFRSxjQUFjSixhQUFhQyxlQUN6QkEsYUFBYSxHQUFHO0lBQ3JDO0lBRUEsT0FBT1I7QUFDVDtBQUVPLFNBQVNELE1BQU1DLE1BQU0sRUFBRUUsUUFBUSxFQUFFO0lBQ3RDRixTQUFTO1FBQ1AsR0FBR0EsTUFBTTtJQUNYO0lBRUFFLE1BQU1HLE9BQU8sQ0FBQyxDQUFDQztRQUNiLE1BQU1HLHVCQUF1QlQsT0FBT1UsY0FBYyxDQUFDSjtRQUVuRCxJQUFJRyxzQkFBc0I7WUFDeEIsT0FBT1QsTUFBTSxDQUFDTSxLQUFLO1FBQ3JCO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUO0FBRUEsU0FBU1csY0FBY0osV0FBVyxFQUFFQyxXQUFXO0lBQzdDLE1BQU1JLHFCQUFxQkMsZUFBZU4sY0FDcENPLHFCQUFxQkQsZUFBZUwsY0FDcENPLGdCQUFnQixBQUFDSCxzQkFBc0JFLHFCQUNyQlAsY0FDRSxHQUFHQSxZQUFZLENBQUMsRUFBRUMsYUFBYTtJQUV6RCxPQUFPTztBQUNUO0FBRUEsU0FBU0YsZUFBZUcsS0FBSztJQUMzQixNQUFNQyxlQUFnQixPQUFPRCxVQUFVRSxrQkFBTztJQUU5QyxPQUFPRDtBQUNUIn0=