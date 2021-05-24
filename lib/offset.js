"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Offset = /*#__PURE__*/ function() {
    function Offset(top, left) {
        _classCallCheck(this, Offset);
        this.top = top;
        this.left = left;
    }
    _createClass(Offset, [
        {
            key: "getTop",
            value: function getTop() {
                return this.top;
            }
        },
        {
            key: "getLeft",
            value: function getLeft() {
                return this.left;
            }
        }
    ]);
    return Offset;
}();
exports.default = Offset;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vZmZzZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVMsTUFBTTthQUFOLE1BQU0sQ0FDYixHQUFHLEVBQUUsSUFBSTs4QkFERixNQUFNO2FBRWxCLEdBQUcsR0FBRyxHQUFHO2FBQ1QsSUFBSSxHQUFHLElBQUk7O2lCQUhDLE1BQU07O1lBTXpCLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07NEJBQ1EsR0FBRzs7OztZQUdqQixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPOzRCQUNPLElBQUk7Ozs7V0FYQyxNQUFNOztrQkFBTixNQUFNIn0=