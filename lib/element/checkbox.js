"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Checkbox;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _input = /*#__PURE__*/ _interop_require_default(require("../mixins/input"));
const _focus = /*#__PURE__*/ _interop_require_default(require("../mixins/focus"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Checkbox extends _element.default {
    isChecked() {
        return this.domElement.checked;
    }
    check(checked = true) {
        this.domElement.checked = checked;
    }
    static tagName = "input";
    static defaultProperties = {
        type: "checkbox"
    };
}
Object.assign(Checkbox.prototype, _input.default);
Object.assign(Checkbox.prototype, _focus.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHsgdGhpcy5kb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDaGVja2JveC5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJDaGVja2JveCIsIkVsZW1lbnQiLCJpc0NoZWNrZWQiLCJkb21FbGVtZW50IiwiY2hlY2tlZCIsImNoZWNrIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImlucHV0TWl4aW5zIiwiZm9jdXNNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7Z0VBSkQ7OERBQ0k7OERBQ0E7Ozs7OztBQUVULE1BQU1BLGlCQUFpQkMsZ0JBQU87SUFDM0NDLFlBQVk7UUFBRSxPQUFPLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPO0lBQUU7SUFFOUNDLE1BQU1ELFVBQVUsSUFBSSxFQUFFO1FBQUUsSUFBSSxDQUFDRCxVQUFVLENBQUNDLE9BQU8sR0FBR0E7SUFBUztJQUUzRCxPQUFPRSxVQUFVLFFBQVE7SUFFekIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxNQUFNO0lBQ1IsRUFBRTtBQUNKO0FBRUFDLE9BQU9DLE1BQU0sQ0FBQ1YsU0FBU1csU0FBUyxFQUFFQyxjQUFXO0FBQzdDSCxPQUFPQyxNQUFNLENBQUNWLFNBQVNXLFNBQVMsRUFBRUUsY0FBVyJ9