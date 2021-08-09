"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
function onClick(clickHandler, element) {
    this.on(_constants.CLICK, clickHandler, element);
}
function offClick(clickHandler, element) {
    this.off(_constants.CLICK, clickHandler, element);
}
var clickMixins = {
    onClick: onClick,
    offClick: offClick
};
var _default = clickMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2xpY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENMSUNLIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKENMSUNLLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDTElDSywgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBjbGlja01peGlucyA9IHtcbiAgb25DbGljayxcbiAgb2ZmQ2xpY2tcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWNrTWl4aW5zO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsVUFBYztTQUUzQixPQUFPLENBQUMsWUFBWSxFQUFFLE9BQU87U0FBUyxFQUFFLENBRjNCLFVBQWMsUUFFcUIsWUFBWSxFQUFFLE9BQU87O1NBRXJFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTztTQUFTLEdBQUcsQ0FKN0IsVUFBYyxRQUl1QixZQUFZLEVBQUUsT0FBTzs7SUFFMUUsV0FBVztJQUNmLE9BQU8sRUFBUCxPQUFPO0lBQ1AsUUFBUSxFQUFSLFFBQVE7O2VBR0ssV0FBVyJ9