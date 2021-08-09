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
