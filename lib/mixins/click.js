"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function onClick(clickHandler, element) {
    this.on("click", clickHandler, element);
}
function offClick(clickHandler, element) {
    this.off("click", clickHandler, element);
}
var clickMixins = {
    onClick: onClick,
    offClick: offClick
};
var _default = clickMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2xpY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2xpY2tNaXhpbnMgPSB7XG4gIG9uQ2xpY2ssXG4gIG9mZkNsaWNrXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGlja01peGlucztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztTQUVILE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTztTQUFTLEVBQUUsRUFBQyxLQUFPLEdBQUUsWUFBWSxFQUFFLE9BQU87O1NBRXZFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTztTQUFTLEdBQUcsRUFBQyxLQUFPLEdBQUUsWUFBWSxFQUFFLE9BQU87O0lBRTVFLFdBQVc7SUFDZixPQUFPLEVBQVAsT0FBTztJQUNQLFFBQVEsRUFBUixRQUFROztlQUdLLFdBQVcifQ==