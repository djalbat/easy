"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function onChange(changeHandler, element) {
    this.on("change", changeHandler, element);
}
function offChange(changeHandler, element) {
    this.off("change", changeHandler, element);
}
var changeMixins = {
    onChange: onChange,
    offChange: offChange
};
var _default = changeMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2hhbmdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2hhbmdlTWl4aW5zID0ge1xuICBvbkNoYW5nZSxcbiAgb2ZmQ2hhbmdlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VNaXhpbnM7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7U0FFSCxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU87U0FBUyxFQUFFLEVBQUMsTUFBUSxHQUFFLGFBQWEsRUFBRSxPQUFPOztTQUUzRSxTQUFTLENBQUMsYUFBYSxFQUFFLE9BQU87U0FBUyxHQUFHLEVBQUMsTUFBUSxHQUFFLGFBQWEsRUFBRSxPQUFPOztJQUVoRixZQUFZO0lBQ2hCLFFBQVEsRUFBUixRQUFRO0lBQ1IsU0FBUyxFQUFULFNBQVM7O2VBR0ksWUFBWSJ9