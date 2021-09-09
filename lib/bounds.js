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
var Bounds = /*#__PURE__*/ function() {
    function Bounds(top, left, bottom, right) {
        _classCallCheck(this, Bounds);
        this.top = top;
        this.left = left;
        this.bottom = bottom;
        this.right = right;
    }
    _createClass(Bounds, [
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
        },
        {
            key: "getBottom",
            value: function getBottom() {
                return this.bottom;
            }
        },
        {
            key: "getRight",
            value: function getRight() {
                return this.right;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                var width = this.right - this.left;
                return width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var height = this.bottom - this.top;
                return height;
            }
        },
        {
            key: "setTop",
            value: function setTop(top) {
                this.top = top;
            }
        },
        {
            key: "setLeft",
            value: function setLeft(left) {
                this.left = left;
            }
        },
        {
            key: "setBottom",
            value: function setBottom(bottom) {
                this.bottom = bottom;
            }
        },
        {
            key: "setRight",
            value: function setRight(right) {
                this.right = right;
            }
        },
        {
            key: "shift",
            value: function shift(horizontalOffset, verticalOffset) {
                this.top += verticalOffset;
                this.left += horizontalOffset;
                this.bottom += verticalOffset;
                this.right += horizontalOffset;
            }
        },
        {
            key: "isOverlappingMouse",
            value: function isOverlappingMouse(mouseTop, mouseLeft) {
                return this.top <= mouseTop && this.left <= mouseLeft && this.right > mouseLeft && this.bottom > mouseTop;
            }
        },
        {
            key: "areOverlapping",
            value: function areOverlapping(bounds) {
                return this.top < bounds.bottom && this.left < bounds.right && this.right > bounds.left && this.bottom > bounds.top;
            }
        }
    ], [
        {
            key: "fromBoundingClientRect",
            value: function fromBoundingClientRect(boundingClientRect) {
                var windowScrollTop = window.pageYOffset, windowScrollLeft = window.pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, right = boundingClientRect.right + windowScrollLeft, bounds = new Bounds(top, left, bottom, right);
                return bounds;
            }
        },
        {
            key: "fromTopLeftWidthAndHeight",
            value: function fromTopLeftWidthAndHeight(top, left, width, height) {
                var bottom = top + height, right = left + width, bounds = new Bounds(top, left, bottom, right);
                return bounds;
            }
        }
    ]);
    return Bounds;
}();
exports.default = Bounds;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiXSwibmFtZXMiOlsiQm91bmRzIiwiY29uc3RydWN0b3IiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0Qm90dG9tIiwiZ2V0UmlnaHQiLCJnZXRXaWR0aCIsIndpZHRoIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0VG9wIiwic2V0TGVmdCIsInNldEJvdHRvbSIsInNldFJpZ2h0Iiwic2hpZnQiLCJob3Jpem9udGFsT2Zmc2V0IiwidmVydGljYWxPZmZzZXQiLCJpc092ZXJsYXBwaW5nTW91c2UiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsImFyZU92ZXJsYXBwaW5nIiwiYm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1Njcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwid2luZG93U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVMsTUFBTSxpQkFBWixRQUFRO2FBQUYsTUFBTSxDQUNiLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUs7OEJBRGpCLE1BQU07UUFFdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7O2lCQUxELE1BQU07O1lBUXpCLEdBQU0sR0FBTixNQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLEdBQUcsQ0FBQztnQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDakIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sR0FBRyxD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