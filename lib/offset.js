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
class Offset {
    constructor(top, left){
        this.top = top;
        this.left = left;
    }
    getTop() {
        return this.top;
    }
    getLeft() {
        return this.left;
    }
    static fromDOMElement(domElement) {
        const { offsetTop, offsetLeft } = domElement, top = offsetTop, left = offsetLeft, offset = new Offset(top, left);
        return offset;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vZmZzZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IG9mZnNldFRvcCwgb2Zmc2V0TGVmdCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICB0b3AgPSBvZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gb2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPZmZzZXQiLCJ0b3AiLCJsZWZ0IiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImZyb21ET01FbGVtZW50IiwiZG9tRWxlbWVudCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBcUJBOzs7QUFBTixNQUFNQTtJQUNuQixZQUFZQyxHQUFHLEVBQUVDLElBQUksQ0FBRTtRQUNyQixJQUFJLENBQUNELEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUNGLEdBQUc7SUFDakI7SUFFQUcsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUEsT0FBT0csZUFBZUMsVUFBVSxFQUFFO1FBQ2hDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR0YsWUFDNUJMLE1BQU1NLFdBQ05MLE9BQU9NLFlBQ1BDLFNBQVMsSUFBSVQsT0FBT0MsS0FBS0M7UUFFL0IsT0FBT087SUFDVDtBQUNGIn0=