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
        const { pageXOffset, pageYOffset } = window, boundingClientRect = domElement.getBoundingClientRect(), windowScrollTop = pageYOffset, windowScrollLeft = pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, right = boundingClientRect.right + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, bounds = new Bounds(top, left, right, bottom);
        return bounds;
    }
    static fromTopLeftWidthAndHeight(top, left, width, height) {
        const bottom = top + height, right = left + width, bounds = new Bounds(top, left, right, bottom);
        return bounds;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib3VuZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIGNvbnN0IGJvdHRvbSA9IGJvdW5kcy5nZXRCb3R0b20oKSxcbiAgICAgICAgICByaWdodCA9IGJvdW5kcy5nZXRSaWdodCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBvdmVybGFwcGluZyA9ICgodGhpcy50b3AgPCBib3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IHJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IG92ZXJsYXBwaW5nID0gKCh0aGlzLnRvcCA8PSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQgfSA9IHdpbmRvdyxcbiAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIHdpbmRvd1Njcm9sbFRvcCA9IHBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gcGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQm91bmRzIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImdldFJpZ2h0IiwiZ2V0Qm90dG9tIiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImdldEhlaWdodCIsImhlaWdodCIsInNldFRvcCIsInNldExlZnQiLCJzZXRSaWdodCIsInNldEJvdHRvbSIsImFyZU92ZXJsYXBwaW5nIiwiYm91bmRzIiwib3ZlcmxhcHBpbmciLCJhcmVPdmVybGFwcGluZ0J5VG9wQW5kTGVmdCIsImZyb21ET01FbGVtZW50IiwiZG9tRWxlbWVudCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJ3aW5kb3ciLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3dTY3JvbGxUb3AiLCJ3aW5kb3dTY3JvbGxMZWZ0IiwiZnJvbVRvcExlZnRX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