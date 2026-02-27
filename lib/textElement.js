"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextElement;
    }
});
const _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
const _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
const _element = require("./utilities/element");
const _element1 = require("./mixins/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TextElement {
    constructor(text){
        const element = this, domElement = document.createTextNode(text); ///
        (0, _element.constructElement)(element, domElement);
    }
    getDOMElement() {
        return this.domElement;
    }
    getOffset() {
        const offset = _offset.default.fromDOMElement(this.domElement);
        return offset;
    }
    getBounds() {
        const bounds = _bounds.default.fromDOMElement(this.domElement);
        return bounds;
    }
    getWidth() {
        return this.domElement.offsetWidth;
    }
    getHeight() {
        return this.domElement.offsetHeight;
    }
    getText() {
        const nodeValue = this.domElement.nodeValue, text = nodeValue; ///
        return text;
    }
    setText(text) {
        const nodeValue = text; ///
        this.domElement.nodeValue = nodeValue;
    }
    prependTo(parentElement) {
        parentElement.prepend(this);
    }
    appendTo(parentElement) {
        parentElement.append(this);
    }
    addTo(parentElement) {
        parentElement.add(this);
    }
    removeFrom(parentElement) {
        parentElement.remove(this);
    }
    insertBefore(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
        parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
    insertAfter(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
        parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
    remove() {
        this.domElement.remove();
    }
    destroy() {
        const element = this; ///
        (0, _element.destroyElement)(element);
    }
}
Object.assign(TextElement.prototype, {
    getParentElement: _element1.getParentElement,
    getAscendantElements: _element1.getAscendantElements,
    getNextSiblingElement: _element1.getNextSiblingElement,
    getPreviousSiblingElement: _element1.getPreviousSiblingElement
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0RWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5cbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGdldFBhcmVudEVsZW1lbnQsIGdldEFzY2VuZGFudEVsZW1lbnRzLCBnZXROZXh0U2libGluZ0VsZW1lbnQsIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQgfSBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21ET01FbGVtZW50KHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoOyB9ICAvLy9cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0OyB9ICAvLy9cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0RWxlbWVudC5wcm90b3R5cGUsIHtcbiAgZ2V0UGFyZW50RWxlbWVudCxcbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMsXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudCxcbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudFxufSk7XG4iXSwibmFtZXMiOlsiVGV4dEVsZW1lbnQiLCJ0ZXh0IiwiZWxlbWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRPZmZzZXQiLCJvZmZzZXQiLCJPZmZzZXQiLCJmcm9tRE9NRWxlbWVudCIsImdldEJvdW5kcyIsImJvdW5kcyIsIkJvdW5kcyIsImdldFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJnZXRUZXh0Iiwibm9kZVZhbHVlIiwic2V0VGV4dCIsInByZXBlbmRUbyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJhZGRUbyIsImFkZCIsInJlbW92ZUZyb20iLCJyZW1vdmUiLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwiZGVzdHJveSIsImRlc3Ryb3lFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZ2V0UGFyZW50RWxlbWVudCIsImdldEFzY2VuZGFudEVsZW1lbnRzIiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OzsrREFORjsrREFDQTt5QkFFOEI7MEJBQ3dEOzs7Ozs7QUFFMUYsTUFBTUE7SUFDbkIsWUFBWUMsSUFBSSxDQUFFO1FBQ2hCLE1BQU1DLFVBQVUsSUFBSSxFQUNkQyxhQUFhQyxTQUFTQyxjQUFjLENBQUNKLE9BQU8sR0FBRztRQUVyREssSUFBQUEseUJBQWdCLEVBQUNKLFNBQVNDO0lBQzVCO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLFlBQVk7UUFDVixNQUFNQyxTQUFTQyxlQUFNLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUNSLFVBQVU7UUFFcEQsT0FBT007SUFDVDtJQUVBRyxZQUFZO1FBQ1YsTUFBTUMsU0FBU0MsZUFBTSxDQUFDSCxjQUFjLENBQUMsSUFBSSxDQUFDUixVQUFVO1FBRXBELE9BQU9VO0lBQ1Q7SUFFQUUsV0FBVztRQUFFLE9BQU8sSUFBSSxDQUFDWixVQUFVLENBQUNhLFdBQVc7SUFBRTtJQUVqREMsWUFBWTtRQUFFLE9BQU8sSUFBSSxDQUFDZCxVQUFVLENBQUNlLFlBQVk7SUFBRTtJQUVuREMsVUFBVTtRQUNSLE1BQU1DLFlBQVksSUFBSSxDQUFDakIsVUFBVSxDQUFDaUIsU0FBUyxFQUNyQ25CLE9BQU9tQixXQUFXLEdBQUc7UUFFM0IsT0FBT25CO0lBQ1Q7SUFFQW9CLFFBQVFwQixJQUFJLEVBQUU7UUFDWixNQUFNbUIsWUFBWW5CLE1BQU0sR0FBRztRQUUzQixJQUFJLENBQUNFLFVBQVUsQ0FBQ2lCLFNBQVMsR0FBR0E7SUFDOUI7SUFFQUUsVUFBVUMsYUFBYSxFQUFFO1FBQUVBLGNBQWNDLE9BQU8sQ0FBQyxJQUFJO0lBQUc7SUFFeERDLFNBQVNGLGFBQWEsRUFBRTtRQUFFQSxjQUFjRyxNQUFNLENBQUMsSUFBSTtJQUFHO0lBRXREQyxNQUFNSixhQUFhLEVBQUU7UUFBRUEsY0FBY0ssR0FBRyxDQUFDLElBQUk7SUFBRztJQUVoREMsV0FBV04sYUFBYSxFQUFFO1FBQUVBLGNBQWNPLE1BQU0sQ0FBQyxJQUFJO0lBQUc7SUFFeERDLGFBQWFDLGNBQWMsRUFBRTtRQUMzQixNQUFNQyxnQkFBZ0JELGVBQWU3QixVQUFVLENBQUMrQixVQUFVLEVBQ3BEQyxvQkFBb0JILGVBQWU3QixVQUFVLEVBQUcsR0FBRztRQUV6RDhCLGNBQWNGLFlBQVksQ0FBQyxJQUFJLENBQUM1QixVQUFVLEVBQUVnQztJQUM5QztJQUVBQyxZQUFZSixjQUFjLEVBQUU7UUFDMUIsTUFBTUMsZ0JBQWdCRCxlQUFlN0IsVUFBVSxDQUFDK0IsVUFBVSxFQUNwREMsb0JBQW9CSCxlQUFlN0IsVUFBVSxFQUFHLEdBQUc7UUFFekQ4QixjQUFjRixZQUFZLENBQUMsSUFBSSxDQUFDNUIsVUFBVSxFQUFFZ0Msa0JBQWtCRSxXQUFXLEdBQUksR0FBRztJQUNsRjtJQUVBUCxTQUFTO1FBQ1AsSUFBSSxDQUFDM0IsVUFBVSxDQUFDMkIsTUFBTTtJQUN4QjtJQUVBUSxVQUFVO1FBQ1IsTUFBTXBDLFVBQVUsSUFBSSxFQUFFLEdBQUc7UUFFekJxQyxJQUFBQSx1QkFBYyxFQUFDckM7SUFDakI7QUFDRjtBQUVBc0MsT0FBT0MsTUFBTSxDQUFDekMsWUFBWTBDLFNBQVMsRUFBRTtJQUNuQ0Msa0JBQUFBLDBCQUFnQjtJQUNoQkMsc0JBQUFBLDhCQUFvQjtJQUNwQkMsdUJBQUFBLCtCQUFxQjtJQUNyQkMsMkJBQUFBLG1DQUF5QjtBQUMzQiJ9