"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Offset;
    }
});
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Offset = /*#__PURE__*/ function() {
    function Offset(top, left) {
        _class_call_check(this, Offset);
        this.top = top;
        this.left = left;
    }
    _create_class(Offset, [
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
    ], [
        {
            key: "fromDOMElement",
            value: function fromDOMElement(domElement) {
                var offsetTop = domElement.offsetTop, offsetLeft = domElement.offsetLeft, top = offsetTop, left = offsetLeft, offset = new Offset(top, left);
                return offset;
            }
        }
    ]);
    return Offset;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vZmZzZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IG9mZnNldFRvcCwgb2Zmc2V0TGVmdCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICB0b3AgPSBvZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gb2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPZmZzZXQiLCJ0b3AiLCJsZWZ0IiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImZyb21ET01FbGVtZW50IiwiZG9tRWxlbWVudCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsdUJBQU47YUFBTUEsT0FDUEMsR0FBRyxFQUFFQyxJQUFJO2dDQURGRjtRQUVqQixJQUFJLENBQUNDLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsR0FBRztZQUNqQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5QixJQUFRQyxZQUEwQkQsV0FBMUJDLFdBQVdDLGFBQWVGLFdBQWZFLFlBQ2JQLE1BQU1NLFdBQ05MLE9BQU9NLFlBQ1BDLFNBQVMsSUFsQkVULE9Ba0JTQyxLQUFLQztnQkFFL0IsT0FBT087WUFDVDs7O1dBckJtQlQifQ==