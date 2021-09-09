"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeFalseyElements = removeFalseyElements;
exports.replaceStringsWithTextElements = replaceStringsWithTextElements;
var _textElement = _interopRequireDefault(require("../textElement"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function removeFalseyElements(elements) {
    elements = elements.reduce(function(elements, element) {
        if (element) {
            elements.push(element);
        }
        return elements;
    }, []);
    return elements;
}
function replaceStringsWithTextElements(elements) {
    elements = elements.map(function(element) {
        if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === _constants.STRING) {
            var text = element, textElement = new _textElement.default(text);
            element = textElement; ///
        }
        return element;
    });
    return elements;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwibmFtZXMiOlsiVGV4dEVsZW1lbnQiLCJTVFJJTkciLCJyZW1vdmVGYWxzZXlFbGVtZW50cyIsImVsZW1lbnRzIiwicmVkdWNlIiwiZWxlbWVudCIsInB1c2giLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJtYXAiLCJ0ZXh0IiwidGV4dEVsZW1lbnQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFNSSxvQkFBb0IsR0FBcEIsb0JBQW9CO1FBWXBCLDhCQUE4QixHQUE5Qiw4QkFBOEI7QUFoQnRCLEdBQWdCLENBQWhCLFlBQWdCO0FBRWpCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7U0FFckIsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFQLFFBQVEsRUFBRSxPQUFPLEVBQUssQ0FBQztRQUNqRCxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU87UUFDdkIsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRO0lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLENBQUMsUUFBUTtBQUNqQixDQUFDO1NBRWUsOEJBQThCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLE9BQU8sRUFBSyxDQUFDO1FBQ3BDLEVBQUUsVUFBUyxPQUFPLGlDQUFkLE9BQWMsQ0FBUCxPQUFPLE9BaEJDLFVBQWMsU0FnQkYsQ0FBQztZQUM5QixHQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFDZCxXQUFXLEdBQUcsR0FBRyxDQXBCTCxZQUFnQixTQW9CRSxJQUFJO1lBRXhDLE9BQU8sR0FBRyxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVE7QUFDakIsQ0FBQyJ9