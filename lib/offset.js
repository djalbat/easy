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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vZmZzZXQuanMiXSwibmFtZXMiOlsiT2Zmc2V0IiwiY29uc3RydWN0b3IiLCJ0b3AiLCJsZWZ0IiwiZ2V0VG9wIiwiZ2V0TGVmdCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVMsTUFBTSxpQkFBWixRQUFRO2FBQUYsTUFBTSxDQUNiLEdBQUcsRUFBRSxJQUFJOzhCQURGLE1BQU07UUFFdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJOztpQkFIQyxNQUFNOztZQU16QixHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2pCLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDbEIsQ0FBQzs7O1dBWmtCLE1BQU07O2tCQUFOLE1BQU0ifQ==