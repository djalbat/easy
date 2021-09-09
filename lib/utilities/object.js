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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sIm5hbWVzIjpbImNvbWJpbmUiLCJ0YXJnZXRPYmplY3QiLCJzb3VyY2VPYmplY3QiLCJzb3VyY2VLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzb3VyY2VLZXkiLCJ0YXJnZXRQcm9wZXJ0eSIsInNvdXJjZVByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJwcnVuZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLE9BQU8sR0FBUCxPQUFPO1FBYVAsS0FBSyxHQUFMLEtBQUs7U0FiTCxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQWlCLEVBQUUsQ0FBQztRQUFwQixZQUFZLEdBQVosS0FBaUIsY0FBRixDQUFDO0lBQUEsQ0FBQyxHQUFqQixLQUFpQjtJQUNyRCxHQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWTtJQUUzQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxTQUFTLEVBQUssQ0FBQztRQUNqQyxHQUFLLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxTQUFTLEdBQ3ZDLGNBQWMsR0FBRyxZQUFZLENBQUMsU0FBUztRQUU3QyxZQUFZLENBQUMsU0FBUyxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsU0FBUyxPQUNmLE1BQWMsQ0FBaEMsY0FBYyxHQUFDLENBQUMsR0FBaUIsTUFBQSxDQUFmLGNBQWMsSUFDaEMsY0FBYztJQUM5QyxDQUFDO0FBQ0gsQ0FBQztTQUVlLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDL0MsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsU0FBUyxFQUFLLENBQUM7UUFDakMsRUFBRSxFQUFFLFlBQVksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLENBQUM7WUFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTO1FBQy9CLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyJ9