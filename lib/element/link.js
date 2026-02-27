"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Link;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _focus = /*#__PURE__*/ _interop_require_default(require("../mixins/focus"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Link extends _element.default {
    getHRef() {
        return this.getAttribute("href");
    }
    setHRef(href) {
        return this.setAttribute("href", href);
    }
    static tagName = "a";
}
Object.assign(Link.prototype, _focus.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEhSZWYoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7IH1cblxuICBzZXRIUmVmKGhyZWYpIHsgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oTGluay5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiRWxlbWVudCIsImdldEhSZWYiLCJnZXRBdHRyaWJ1dGUiLCJzZXRIUmVmIiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmb2N1c01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7OztnRUFIRDs4REFDSTs7Ozs7O0FBRVQsTUFBTUEsYUFBYUMsZ0JBQU87SUFDdkNDLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQ0MsWUFBWSxDQUFDO0lBQVM7SUFFOUNDLFFBQVFDLElBQUksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDQyxZQUFZLENBQUMsUUFBUUQ7SUFBTztJQUV4RCxPQUFPRSxVQUFVLElBQUk7QUFDdkI7QUFFQUMsT0FBT0MsTUFBTSxDQUFDVCxLQUFLVSxTQUFTLEVBQUVDLGNBQVcifQ==