"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combine = combine;
exports.prune = prune;
function combine(targetObject, param) {
    var sourceObject = param === void 0 ? {
    } : param;
    var sourceKeys = Object.keys(sourceObject);
    sourceKeys.forEach(function(sourceKey) {
        var targetProperty = targetObject[sourceKey], sourceProperty = sourceObject[sourceKey];
        targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? "".concat(targetProperty, " ").concat(sourceProperty) : sourceProperty;
    });
}
function prune(targetObject, sourceKeys) {
    sourceKeys.forEach(function(sourceKey) {
        if (targetObject.hasOwnProperty(sourceKey)) {
            delete targetObject[sourceKey];
        }
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXRPYmplY3QsIHNvdXJjZU9iamVjdCA9IHt9KSB7XG4gIGNvbnN0IHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2VPYmplY3QpO1xuXG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XSxcbiAgICAgICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZU9iamVjdFtzb3VyY2VLZXldO1xuXG4gICAgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0gPSB0YXJnZXRPYmplY3QuaGFzT3duUHJvcGVydHkoc291cmNlS2V5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0UHJvcGVydHl9ICR7c291cmNlUHJvcGVydHl9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUHJvcGVydHk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgaWYgKHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpKSB7XG4gICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV07XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksT0FBTyxHQUFQLE9BQU87UUFhUCxLQUFLLEdBQUwsS0FBSztTQWJMLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBaUI7UUFBakIsWUFBWSxHQUFaLEtBQWlCO1FBQWpCLEtBQWlCO1FBQy9DLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7SUFFM0MsVUFBVSxDQUFDLE9BQU8sVUFBRSxTQUFTO1lBQ3JCLGNBQWMsR0FBRyxZQUFZLENBQUMsU0FBUyxHQUN2QyxjQUFjLEdBQUcsWUFBWSxDQUFDLFNBQVM7UUFFN0MsWUFBWSxDQUFDLFNBQVMsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLFNBQVMsT0FDZixNQUFjLENBQWhDLGNBQWMsR0FBQyxDQUFDLEdBQWlCLE1BQUEsQ0FBZixjQUFjLElBQ2hDLGNBQWM7OztTQUloQyxLQUFLLENBQUMsWUFBWSxFQUFFLFVBQVU7SUFDNUMsVUFBVSxDQUFDLE9BQU8sVUFBRSxTQUFTO1lBQ3ZCLFlBQVksQ0FBQyxjQUFjLENBQUMsU0FBUzttQkFDaEMsWUFBWSxDQUFDLFNBQVMifQ==