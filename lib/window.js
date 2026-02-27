"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" ///
, {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
const _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
const _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
const _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
const _focus = /*#__PURE__*/ _interop_require_default(require("./mixins/focus"));
const _constants = require("./constants");
const _eventTypes = require("./eventTypes");
const _scroll = require("./mixins/scroll");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Window {
    constructor(){
        this.domElement = window; ///
    }
    getDOMElement() {
        return this.domElement;
    }
    assign(...sources) {
        const target = this.domElement; ///
        Object.assign(target, ...sources);
    }
    reload() {
        window.location.reload(); ///
    }
    getWidth() {
        return this.domElement.innerWidth;
    }
    getHeight() {
        return this.domElement.innerHeight;
    }
    getScrollTop() {
        return this.domElement.pageYOffset;
    }
    getScrollLeft() {
        return this.domElement.pageXOffset;
    }
    getSelection() {
        return this.domElement.getSelection();
    }
    getScreenWidth() {
        return this.domElement.screen.width;
    }
    getScreenHeight() {
        return this.domElement.screen.height;
    }
    scrollTo(scrollTop, scrollLeft) {
        this.domElement.scrollTo(scrollLeft, scrollTop);
    }
    onResize(resizeHandler, element) {
        const eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.addEventListener(eventType, resizeHandler, element);
        this.domElement.addEventListener(eventType, eventListener);
    }
    offResize(resizeHandler, element) {
        const eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.removeEventListener(eventType, resizeHandler, element);
        this.domElement.removeEventListener(eventType, eventListener);
    }
}
Object.assign(Window.prototype, _key.default);
Object.assign(Window.prototype, _event.default);
Object.assign(Window.prototype, _mouse.default);
Object.assign(Window.prototype, _click.default);
Object.assign(Window.prototype, _focus.default);
Object.assign(Window.prototype, {
    onScroll: _scroll.onScroll,
    offScroll: _scroll.offScroll
});
const _default = typeof window === _constants.UNDEFINED ? undefined : new Window();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuL21peGlucy9mb2N1c1wiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgb25TY3JvbGwsIG9mZlNjcm9sbCB9IGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IC8vL1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG5cbiAgZ2V0U2NyZWVuV2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2NyZWVuLndpZHRoOyB9XG5cbiAgZ2V0U2NyZWVuSGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcmVlbi5oZWlnaHQ7IH1cblxuICBzY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvKHNjcm9sbExlZnQsIHNjcm9sbFRvcCk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVTSVpFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVTSVpFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwge1xuICBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cbiJdLCJuYW1lcyI6WyJXaW5kb3ciLCJkb21FbGVtZW50Iiwid2luZG93IiwiZ2V0RE9NRWxlbWVudCIsImFzc2lnbiIsInNvdXJjZXMiLCJ0YXJnZXQiLCJPYmplY3QiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImdldFdpZHRoIiwiaW5uZXJXaWR0aCIsImdldEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJnZXRTZWxlY3Rpb24iLCJnZXRTY3JlZW5XaWR0aCIsInNjcmVlbiIsIndpZHRoIiwiZ2V0U2NyZWVuSGVpZ2h0IiwiaGVpZ2h0Iiwic2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZSZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwiZm9jdXNNaXhpbnMiLCJvblNjcm9sbCIsIm9mZlNjcm9sbCIsIlVOREVGSU5FRCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0VBLFVBQTBFLEdBQUc7Ozs7ZUFBN0U7Ozs0REF0RXNCOzhEQUNFOzhEQUNBOzhEQUNBOzhEQUNBOzJCQUVFOzRCQUNRO3dCQUNFOzs7Ozs7QUFFcEMsTUFBTUE7SUFDSixhQUFjO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsR0FBRztJQUMvQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxPQUFPLEdBQUdDLE9BQU8sRUFBRTtRQUNqQixNQUFNQyxTQUFTLElBQUksQ0FBQ0wsVUFBVSxFQUFFLEdBQUc7UUFFbkNNLE9BQU9ILE1BQU0sQ0FBQ0UsV0FBV0Q7SUFDM0I7SUFFQUcsU0FBUztRQUNQTixPQUFPTyxRQUFRLENBQUNELE1BQU0sSUFBSSxHQUFHO0lBQy9CO0lBRUFFLFdBQVc7UUFBRSxPQUFPLElBQUksQ0FBQ1QsVUFBVSxDQUFDVSxVQUFVO0lBQUU7SUFFaERDLFlBQVk7UUFBRSxPQUFPLElBQUksQ0FBQ1gsVUFBVSxDQUFDWSxXQUFXO0lBQUU7SUFFbERDLGVBQWU7UUFBRSxPQUFPLElBQUksQ0FBQ2IsVUFBVSxDQUFDYyxXQUFXO0lBQUU7SUFFckRDLGdCQUFnQjtRQUFFLE9BQU8sSUFBSSxDQUFDZixVQUFVLENBQUNnQixXQUFXO0lBQUU7SUFFdERDLGVBQWU7UUFBRSxPQUFPLElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ2lCLFlBQVk7SUFBSTtJQUV4REMsaUJBQWlCO1FBQUUsT0FBTyxJQUFJLENBQUNsQixVQUFVLENBQUNtQixNQUFNLENBQUNDLEtBQUs7SUFBRTtJQUV4REMsa0JBQWtCO1FBQUUsT0FBTyxJQUFJLENBQUNyQixVQUFVLENBQUNtQixNQUFNLENBQUNHLE1BQU07SUFBRTtJQUUxREMsU0FBU0MsU0FBUyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxJQUFJLENBQUN6QixVQUFVLENBQUN1QixRQUFRLENBQUNFLFlBQVlEO0lBQVk7SUFFbkZFLFNBQVNDLGFBQWEsRUFBRUMsT0FBTyxFQUFFO1FBQy9CLE1BQU1DLFlBQVlDLDZCQUFpQixFQUM3QkMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFdBQVdGLGVBQWVDO1FBRXRFLElBQUksQ0FBQzVCLFVBQVUsQ0FBQ2dDLGdCQUFnQixDQUFDSCxXQUFXRTtJQUM5QztJQUVBRSxVQUFVTixhQUFhLEVBQUVDLE9BQU8sRUFBRTtRQUNoQyxNQUFNQyxZQUFZQyw2QkFBaUIsRUFDN0JDLGdCQUFnQixJQUFJLENBQUNHLG1CQUFtQixDQUFDTCxXQUFXRixlQUFlQztRQUV6RSxJQUFJLENBQUM1QixVQUFVLENBQUNrQyxtQkFBbUIsQ0FBQ0wsV0FBV0U7SUFDakQ7QUFDRjtBQUVBekIsT0FBT0gsTUFBTSxDQUFDSixPQUFPb0MsU0FBUyxFQUFFQyxZQUFTO0FBQ3pDOUIsT0FBT0gsTUFBTSxDQUFDSixPQUFPb0MsU0FBUyxFQUFFRSxjQUFXO0FBQzNDL0IsT0FBT0gsTUFBTSxDQUFDSixPQUFPb0MsU0FBUyxFQUFFRyxjQUFXO0FBQzNDaEMsT0FBT0gsTUFBTSxDQUFDSixPQUFPb0MsU0FBUyxFQUFFSSxjQUFXO0FBQzNDakMsT0FBT0gsTUFBTSxDQUFDSixPQUFPb0MsU0FBUyxFQUFFSyxjQUFXO0FBQzNDbEMsT0FBT0gsTUFBTSxDQUFDSixPQUFPb0MsU0FBUyxFQUFFO0lBQzlCTSxVQUFBQSxnQkFBUTtJQUNSQyxXQUFBQSxpQkFBUztBQUNYO01BRUEsV0FBZSxBQUFDLE9BQU96QyxXQUFXMEMsb0JBQVMsR0FBSUMsWUFBWSxJQUFJN0MifQ==