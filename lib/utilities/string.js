"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "camelCaseToSnakeCase", {
    enumerable: true,
    get: function() {
        return camelCaseToSnakeCase;
    }
});
var _constants = require("../constants");
function camelCaseToSnakeCase(string) {
    return string.replace(/([A-Z])/g, function(match, character) {
        var upperCaseCharacter = character.toLowerCase(), snakeCaseCharacters = "".concat(_constants.DASH).concat(upperCaseCharacter);
        return snakeCaseCharacters;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEQVNIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9TbmFrZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFtBLVpdKS9nLCAobWF0Y2gsIGNoYXJhY3RlcikgPT4ge1xuICAgIGNvbnN0IHVwcGVyQ2FzZUNoYXJhY3RlciA9IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHNuYWtlQ2FzZUNoYXJhY3RlcnMgPSBgJHtEQVNIfSR7dXBwZXJDYXNlQ2hhcmFjdGVyfWA7XG5cbiAgICByZXR1cm4gc25ha2VDYXNlQ2hhcmFjdGVycztcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY2FtZWxDYXNlVG9TbmFrZUNhc2UiLCJzdHJpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJjaGFyYWN0ZXIiLCJ1cHBlckNhc2VDaGFyYWN0ZXIiLCJ0b0xvd2VyQ2FzZSIsInNuYWtlQ2FzZUNoYXJhY3RlcnMiLCJEQVNIIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3lCQUZLO0FBRWQsU0FBU0EscUJBQXFCQyxNQUFNO0lBQ3pDLE9BQU9BLE9BQU9DLE9BQU8sQ0FBQyxZQUFZLFNBQUNDLE9BQU9DO1FBQ3hDLElBQU1DLHFCQUFxQkQsVUFBVUUsV0FBVyxJQUMxQ0Msc0JBQXNCLEFBQUMsR0FBU0YsT0FBUEcsZUFBSSxFQUFzQixPQUFuQkg7UUFFdEMsT0FBT0U7SUFDVDtBQUNGIn0=