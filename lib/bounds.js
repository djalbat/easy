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
            key: "areOverlapping",
            value: function areOverlapping(bounds) {
                var bottom = bounds.getBottom(), right = bounds.getRight(), left = bounds.getLeft(), top = bounds.getTop(), overlapping = this.top < bottom && this.left < right && this.right > left && this.bottom > top;
                return overlapping;
            }
        },
        {
            key: "areOverlappingByTopAndLeft",
            value: function areOverlappingByTopAndLeft(top, left) {
                var overlapping = this.top <= top && this.left <= left && this.right > left && this.bottom > top;
                return overlapping;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIGNvbnN0IGJvdHRvbSA9IGJvdW5kcy5nZXRCb3R0b20oKSxcbiAgICAgICAgICByaWdodCA9IGJvdW5kcy5nZXRSaWdodCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBvdmVybGFwcGluZyA9ICgodGhpcy50b3AgPCBib3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IHJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IG92ZXJsYXBwaW5nID0gKCh0aGlzLnRvcCA8PSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0UmlnaHQiLCJnZXRCb3R0b20iLCJnZXRXaWR0aCIsIndpZHRoIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0VG9wIiwic2V0TGVmdCIsInNldFJpZ2h0Iiwic2V0Qm90dG9tIiwiYXJlT3ZlcmxhcHBpbmciLCJib3VuZHMiLCJvdmVybGFwcGluZyIsImFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0IiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1Njcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwid2luZG93U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx1QkFBRCxBQUFMO2FBQU1BLE9BQ1BDLEdBQUcsRUFBRUMs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