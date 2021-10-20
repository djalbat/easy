"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combine = combine;
exports.prune = prune;
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
function combine(targetObject, param) {
    var sourceObject = param === void 0 ? {
    } : param;
    targetObject = _objectSpread({
    }, targetObject); ///
    var sourceKeys = Object.keys(sourceObject);
    sourceKeys.forEach(function(sourceKey) {
        var targetProperty = targetObject[sourceKey], sourceProperty = sourceObject[sourceKey];
        targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? "".concat(targetProperty, " ").concat(sourceProperty) : sourceProperty;
    });
    return targetObject;
}
function prune(targetObject, param) {
    var sourceKeys = param === void 0 ? [] : param;
    targetObject = _objectSpread({
    }, targetObject); ///
    sourceKeys.forEach(function(sourceKey) {
        if (targetObject.hasOwnProperty(sourceKey)) {
            delete targetObject[sourceKey];
        }
    });
    return targetObject;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXRPYmplY3QsIHNvdXJjZU9iamVjdCA9IHt9KSB7XG4gIHRhcmdldE9iamVjdCA9IHsgLi4udGFyZ2V0T2JqZWN0IH07ICAvLy9cblxuICBjb25zdCBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlT2JqZWN0KTtcblxuICBzb3VyY2VLZXlzLmZvckVhY2goKHNvdXJjZUtleSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0sXG4gICAgICAgICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2VPYmplY3Rbc291cmNlS2V5XTtcblxuICAgIHRhcmdldE9iamVjdFtzb3VyY2VLZXldID0gdGFyZ2V0T2JqZWN0Lmhhc093blByb3BlcnR5KHNvdXJjZUtleSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFByb3BlcnR5fSAke3NvdXJjZVByb3BlcnR5fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVByb3BlcnR5O1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzID0gW10pIHtcbiAgdGFyZ2V0T2JqZWN0ID0geyAuLi50YXJnZXRPYmplY3QgfTsgIC8vL1xuXG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgaWYgKHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpKSB7XG4gICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xufVxuIl0sIm5hbWVzIjpbImNvbWJpbmUiLCJwcnVuZSIsInRhcmdldE9iamVjdCIsInNvdXJjZU9iamVjdCIsInNvdXJjZUtleXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNvdXJjZUtleSIsInRhcmdldFByb3BlcnR5Iiwic291cmNlUHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUVJQSxPQUFPLEdBQVBBLE9BQU87UUFpQlBDLEtBQUssR0FBTEEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBakJMRCxPQUFPLENBQUNFLFlBQVksRUFBRUMsS0FBaUIsRUFBRSxDQUFDO1FBQXBCQSxZQUFZLEdBQVpBLEtBQWlCLGNBQUYsQ0FBQztJQUFBLENBQUMsR0FBakJBLEtBQWlCO0lBQ3JERCxZQUFZO09BQVFBLFlBQVksRUFBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFeEMsR0FBSyxDQUFDRSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxZQUFZO0lBRTNDQyxVQUFVLENBQUNHLE9BQU8sQ0FBQyxRQUFRLENBQVBDLFNBQVMsRUFBSyxDQUFDO1FBQ2pDLEdBQUssQ0FBQ0MsY0FBYyxHQUFHUCxZQUFZLENBQUNNLFNBQVMsR0FDdkNFLGNBQWMsR0FBR1AsWUFBWSxDQUFDSyxTQUFTO1FBRTdDTixZQUFZLENBQUNNLFNBQVMsSUFBSU4sWUFBWSxDQUFDUyxjQUFjLENBQUNILFNBQVMsSUFDbkMsQ0FBQSxFQUFvQkUsTUFBYyxDQUFoQ0QsY0FBYyxFQUFDLENBQUMsSUFBaUIsTUFBQSxDQUFmQyxjQUFjLElBQ2hDQSxjQUFjO0lBQzlDLENBQUM7SUFFRCxNQUFNLENBQUNSLFlBQVk7QUFDckIsQ0FBQztTQUVlRCxLQUFLLENBQUNDLFlBQVksRUFBRUUsS0FBZSxFQUFFLENBQUM7UUFBbEJBLFVBQVUsR0FBVkEsS0FBZSxjQUFGLENBQUMsQ0FBQyxHQUFmQSxLQUFlO0lBQ2pERixZQUFZO09BQVFBLFlBQVksRUFBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFeENFLFVBQVUsQ0FBQ0csT0FBTyxDQUFDLFFBQVEsQ0FBUEMsU0FBUyxFQUFLLENBQUM7UUFDakMsRUFBRSxFQUFFTixZQUFZLENBQUNTLGNBQWMsQ0FBQ0gsU0FBUyxHQUFHLENBQUM7WUFDM0MsTUFBTSxDQUFDTixZQUFZLENBQUNNLFNBQVM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNOLFlBQVk7QUFDckIsQ0FBQyJ9