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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDw9IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDw9IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQm91bmRzIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImdldFJpZ2h0IiwiZ2V0Qm90dG9tIiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImdldEhlaWdodCIsImhlaWdodCIsInNldFRvcCIsInNldExlZnQiLCJzZXRSaWdodCIsInNldEJvdHRvbSIsInNoaWZ0IiwiaG9yaXpvbnRhbE9mZnNldCIsInZlcnRpY2FsT2Zmc2V0IiwiaXNPdmVybGFwcGluZ01vdXNlIiwibW91c2VUb3AiLCJtb3VzZUxlZnQiLCJhcmVPdmVybGFwcGluZyIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3dTY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsIndpbmRvd1Njcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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