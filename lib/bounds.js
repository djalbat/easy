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
class Bounds {
    constructor(top, left, right, bottom){
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
    }
    getTop() {
        return this.top;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }
    getBottom() {
        return this.bottom;
    }
    getWidth() {
        const width = this.right - this.left;
        return width;
    }
    getHeight() {
        const height = this.bottom - this.top;
        return height;
    }
    setTop(top) {
        this.top = top;
    }
    setLeft(left) {
        this.left = left;
    }
    setRight(right) {
        this.right = right;
    }
    setBottom(bottom) {
        this.bottom = bottom;
    }
    areOverlapping(bounds) {
        const bottom = bounds.getBottom(), right = bounds.getRight(), left = bounds.getLeft(), top = bounds.getTop(), overlapping = this.top < bottom && this.left < right && this.right > left && this.bottom > top;
        return overlapping;
    }
    areOverlappingByTopAndLeft(top, left) {
        const overlapping = this.top <= top && this.left <= left && this.right > left && this.bottom > top;
        return overlapping;
    }
    static fromDOMElement(domElement) {
        const { pageXOffset, pageYOffset } = window, windowScrollTop = pageYOffset, windowScrollLeft = pageXOffset, boundingClientRect = domElement.getBoundingClientRect();
        let top, left, right, bottom;
        ({ top, left, right, bottom } = boundingClientRect);
        top += windowScrollTop;
        left += windowScrollLeft;
        right += windowScrollLeft;
        bottom += windowScrollTop;
        const bounds = new Bounds(top, left, right, bottom);
        return bounds;
    }
    static fromTopLeftWidthAndHeight(top, left, width, height) {
        const bottom = top + height, right = left + width, bounds = new Bounds(top, left, right, bottom);
        return bounds;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIGNvbnN0IGJvdHRvbSA9IGJvdW5kcy5nZXRCb3R0b20oKSxcbiAgICAgICAgICByaWdodCA9IGJvdW5kcy5nZXRSaWdodCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBvdmVybGFwcGluZyA9ICgodGhpcy50b3AgPCBib3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IHJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IG92ZXJsYXBwaW5nID0gKCh0aGlzLnRvcCA8PSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQgfSA9IHdpbmRvdyxcbiAgICAgICAgICB3aW5kb3dTY3JvbGxUb3AgPSBwYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHBhZ2VYT2Zmc2V0LCAvLy9cbiAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgbGV0IHRvcCxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIGJvdHRvbTtcblxuICAgICh7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSB9ID0gYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHRvcCArPSB3aW5kb3dTY3JvbGxUb3A7XG4gICAgbGVmdCArPSB3aW5kb3dTY3JvbGxMZWZ0O1xuICAgIHJpZ2h0ICs9IHdpbmRvd1Njcm9sbExlZnQ7XG4gICAgYm90dG9tICs9IHdpbmRvd1Njcm9sbFRvcDtcblxuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJvdW5kcyIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImdldFRvcCIsImdldExlZnQiLCJnZXRSaWdodCIsImdldEJvdHRvbSIsImdldFdpZHRoIiwid2lkdGgiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJzZXRUb3AiLCJzZXRMZWZ0Iiwic2V0UmlnaHQiLCJzZXRCb3R0b20iLCJhcmVPdmVybGFwcGluZyIsImJvdW5kcyIsIm92ZXJsYXBwaW5nIiwiYXJlT3ZlcmxhcHBpbmdCeVRvcEFuZExlZnQiLCJmcm9tRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0Iiwid2luZG93Iiwid2luZG93U2Nyb2xsVG9wIiwid2luZG93U2Nyb2xsTGVmdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZyb21Ub3BMZWZ0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