"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Bounds;
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
var Bounds = /*#__PURE__*/ function() {
    function Bounds(top, left, right, bottom) {
        _class_call_check(this, Bounds);
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
    }
    _create_class(Bounds, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDw9IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDw9IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0UmlnaHQiLCJnZXRCb3R0b20iLCJnZXRXaWR0aCIsIndpZHRoIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0VG9wIiwic2V0TGVmdCIsInNldFJpZ2h0Iiwic2V0Qm90dG9tIiwic2hpZnQiLCJob3Jpem9udGFsT2Zmc2V0IiwidmVydGljYWxPZmZzZXQiLCJpc092ZXJsYXBwaW5nTW91c2UiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsImFyZU92ZXJsYXBwaW5nIiwiYm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1Njcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwid2luZG93U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxHQUFHLEVBQUVDLElB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