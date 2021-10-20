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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRCb3R0b20oYm90dG9tKSB7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5ib3R0b20gKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDw9IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDw9IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0Qm90dG9tIiwiZ2V0UmlnaHQiLCJnZXRXaWR0aCIsIndpZHRoIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0VG9wIiwic2V0TGVmdCIsInNldEJvdHRvbSIsInNldFJpZ2h0Iiwic2hpZnQiLCJob3Jpem9udGFsT2Zmc2V0IiwidmVydGljYWxPZmZzZXQiLCJpc092ZXJsYXBwaW5nTW91c2UiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsImFyZU92ZXJsYXBwaW5nIiwiYm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd1Njcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwid2luZG93U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVNBLE1BQU0saUJBQVosUUFBUTthQUFGQSxNQUFNLENBQ2JDLEdBQUcsRUFBRUMsSUFB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