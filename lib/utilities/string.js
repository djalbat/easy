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
        return _constants.DASH + character.toLowerCase();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEQVNIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9TbmFrZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFtBLVpdKS9nLCAobWF0Y2gsIGNoYXJhY3RlcikgPT4gREFTSCArIGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpKTtcbn1cbiJdLCJuYW1lcyI6WyJjYW1lbENhc2VUb1NuYWtlQ2FzZSIsInN0cmluZyIsInJlcGxhY2UiLCJtYXRjaCIsImNoYXJhY3RlciIsIkRBU0giLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRks7QUFFZCxTQUFTQSxxQkFBcUJDLE1BQU07SUFDekMsT0FBT0EsT0FBT0MsT0FBTyxDQUFDLFlBQVksU0FBQ0MsT0FBT0M7ZUFBY0MsZUFBSSxHQUFHRCxVQUFVRSxXQUFXOztBQUN0RiJ9