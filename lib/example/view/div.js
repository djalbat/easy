"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Div;
    }
});
const _index = require("../../index");
class Div extends _index.Element {
    mouseMoveHandler = (event, element)=>{
        const { pageX, pageY } = event;
        console.log(pageX, pageY);
    };
    resizeHandler = (event, element)=>{
        const width = this.getWidth(), height = this.getHeight();
        console.log(width, height);
    };
    didMount() {
        this.onResize(this.resizeHandler, this);
        this.onMouseMove(this.mouseMoveHandler, this);
    }
    willUnmount() {
        this.offMouseMove(this.mouseMoveHandler, this);
        this.offResize(this.resizeHandler, this);
    }
    childElements() {
        return /*#__PURE__*/ React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers.");
    }
    static tagName = "div";
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZXZlbnQ7XG5cbiAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgQSBwYXJhZ3JhcGggY29udGFpbmVkIGluIGEgZGl2IHdpdGggcmVzaXplIGFuZCBtb3VzZSBtb3ZlIGhhbmRsZXJzLlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcbn1cbiJdLCJuYW1lcyI6WyJEaXYiLCJFbGVtZW50IiwibW91c2VNb3ZlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInBhZ2VYIiwicGFnZVkiLCJjb25zb2xlIiwibG9nIiwicmVzaXplSGFuZGxlciIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJkaWRNb3VudCIsIm9uUmVzaXplIiwib25Nb3VzZU1vdmUiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlTW92ZSIsIm9mZlJlc2l6ZSIsImNoaWxkRWxlbWVudHMiLCJwIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozt1QkFGRztBQUVULE1BQU1BLFlBQVlDLGNBQU87SUFDdENDLG1CQUFtQixDQUFDQyxPQUFPQztRQUN6QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQUdIO1FBRXpCSSxRQUFRQyxHQUFHLENBQUNILE9BQU9DO0lBQ3JCLEVBQUM7SUFFREcsZ0JBQWdCLENBQUNOLE9BQU9DO1FBQ3RCLE1BQU1NLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUztRQUU3Qk4sUUFBUUMsR0FBRyxDQUFDRSxPQUFPRTtJQUNyQixFQUFDO0lBRURFLFdBQVc7UUFDVCxJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNOLGFBQWEsRUFBRSxJQUFJO1FBQ3RDLElBQUksQ0FBQ08sV0FBVyxDQUFDLElBQUksQ0FBQ2QsZ0JBQWdCLEVBQUUsSUFBSTtJQUM5QztJQUVBZSxjQUFjO1FBQ1osSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDaEIsZ0JBQWdCLEVBQUUsSUFBSTtRQUM3QyxJQUFJLENBQUNpQixTQUFTLENBQUMsSUFBSSxDQUFDVixhQUFhLEVBQUUsSUFBSTtJQUN6QztJQUVBVyxnQkFBZ0I7UUFDZCxxQkFFRSxvQkFBQ0MsV0FBRTtJQUtQO0lBRUEsT0FBT0MsVUFBVSxNQUFNO0FBQ3pCIn0=