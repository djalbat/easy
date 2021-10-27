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
    function Bounds(top, left, right, bottom) {
        _classCallCheck(this, Bounds);
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
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
            key: "getRight",
            value: function getRight() {
                return this.right;
            }
        },
        {
            key: "getBottom",
            value: function getBottom() {
                return this.bottom;
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
            key: "setRight",
            value: function setRight(right) {
                this.right = right;
            }
        },
        {
            key: "setBottom",
            value: function setBottom(bottom) {
                this.bottom = bottom;
            }
        },
        {
            key: "shift",
            value: function shift(horizontalOffset, verticalOffset) {
                this.top += verticalOffset;
                this.left += horizontalOffset;
                this.right += horizontalOffset;
                this.bottom += verticalOffset;
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
                var windowScrollTop = window.pageYOffset, windowScrollLeft = window.pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, right = boundingClientRect.right + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, bounds = new Bounds(top, left, right, bottom);
                return bounds;
            }
        },
        {
            key: "fromTopLeftWidthAndHeight",
            value: function fromTopLeftWidthAndHeight(top, left, width, height) {
                var bottom = top + height, right = left + width, bounds = new Bounds(top, left, right, bottom);
                return bounds;
            }
        }
    ]);
    return Bounds;
}();
exports.default = Bounds;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDw9IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDw9IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0UmlnaHQiLCJnZXRCb3R0b20iLCJnZXRXaWR0aCIsIndpZHRoIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0VG9wIiwic2V0TGVmdCIsInNldFJpZ2h0Iiwic2V0Qm90dG9tIiwic2hpZnQiLCJob3Jpem9udGFsT2Zmc2V0IiwidmVydGljYWxPZmZzZXQiLCJpc092ZXJsYXBwaW5nTW91c2UiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsImFyZU92ZXJsYXBwaW5nIiwiYm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1Njcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwid2luZG93U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVNBLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNLENBQ2JDLEdBQUcsRUFBRUMsSUFB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