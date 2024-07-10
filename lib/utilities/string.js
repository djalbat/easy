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
    return string.replace(/([A-Z]+)/g, function(match, characters) {
        var upperCaseCharacters = characters.toLowerCase(), snakeCaseCharacters = "".concat(_constants.DASH).concat(upperCaseCharacters);
        return snakeCaseCharacters;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEQVNIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9TbmFrZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFtBLVpdKykvZywgKG1hdGNoLCBjaGFyYWN0ZXJzKSA9PiB7XG4gICAgY29uc3QgdXBwZXJDYXNlQ2hhcmFjdGVycyA9IGNoYXJhY3RlcnMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBzbmFrZUNhc2VDaGFyYWN0ZXJzID0gYCR7REFTSH0ke3VwcGVyQ2FzZUNoYXJhY3RlcnN9YDtcblxuICAgIHJldHVybiBzbmFrZUNhc2VDaGFyYWN0ZXJzO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjYW1lbENhc2VUb1NuYWtlQ2FzZSIsInN0cmluZyIsInJlcGxhY2UiLCJtYXRjaCIsImNoYXJhY3RlcnMiLCJ1cHBlckNhc2VDaGFyYWN0ZXJzIiwidG9Mb3dlckNhc2UiLCJzbmFrZUNhc2VDaGFyYWN0ZXJzIiwiREFTSCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRks7QUFFZCxTQUFTQSxxQkFBcUJDLE1BQU07SUFDekMsT0FBT0EsT0FBT0MsT0FBTyxDQUFDLGFBQWEsU0FBQ0MsT0FBT0M7UUFDekMsSUFBTUMsc0JBQXNCRCxXQUFXRSxXQUFXLElBQzVDQyxzQkFBc0IsQUFBQyxHQUFTRixPQUFQRyxlQUFJLEVBQXVCLE9BQXBCSDtRQUV0QyxPQUFPRTtJQUNUO0FBQ0YifQ==