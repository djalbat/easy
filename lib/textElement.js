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
var _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
var _element = require("./utilities/element");
var _element1 = require("./mixins/element");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TextElement = /*#__PURE__*/ function() {
    function TextElement(text) {
        _class_call_check(this, TextElement);
        var element = this, domElement = document.createTextNode(text); ///
        (0, _element.constructElement)(element, domElement);
    }
    _create_class(TextElement, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "getText",
            value: function getText() {
                var nodeValue = this.domElement.nodeValue, text = nodeValue; ///
                return text;
            }
        },
        {
            key: "setText",
            value: function setText(text) {
                var nodeValue = text; ///
                this.domElement.nodeValue = nodeValue;
            }
        },
        {
            key: "getOffset",
            value: function getOffset() {
                var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
                return offset;
            }
        },
        {
            key: "getBounds",
            value: function getBounds() {
                var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
                return bounds;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                var clientWidth = this.domElement.clientWidth, width = clientWidth; ///
                return width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var clientHeight = this.domElement.clientHeight, height = clientHeight; ///
                return height;
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentElement) {
                parentElement.prepend(this);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentElement) {
                parentElement.append(this);
            }
        },
        {
            key: "addTo",
            value: function addTo(parentElement) {
                parentElement.add(this);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentElement) {
                parentElement.remove(this);
            }
        },
        {
            key: "insertBefore",
            value: function insertBefore(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "insertAfter",
            value: function insertAfter(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
            }
        },
        {
            key: "remove",
            value: function remove() {
                this.domElement.remove();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var element = this; ///
                (0, _element.destroyElement)(element);
            }
        }
    ]);
    return TextElement;
}();
Object.assign(TextElement.prototype, {
    getParentElement: _element1.getParentElement,
    getAscendantElements: _element1.getAscendantElements,
    getNextSiblingElement: _element1.getNextSiblingElement,
    getPreviousSiblingElement: _element1.getPreviousSiblingElement
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0RWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5cbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0UGFyZW50RWxlbWVudCwgZ2V0QXNjZW5kYW50RWxlbWVudHMsIGdldE5leHRTaWJsaW5nRWxlbWVudCwgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCB9IGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vL1xuXG4gICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGg7ICAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0RWxlbWVudC5wcm90b3R5cGUsIHtcbiAgZ2V0UGFyZW50RWxlbWVudCxcbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMsXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudCxcbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudFxufSk7XG4iXSwibmFtZXMiOlsiVGV4dEVsZW1lbnQiLCJ0ZXh0IiwiZWxlbWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRUZXh0Iiwibm9kZVZhbHVlIiwic2V0VGV4dCIsImdldE9mZnNldCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiT2Zmc2V0IiwiZ2V0Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiQm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJ3aWR0aCIsImdldEhlaWdodCIsImNsaWVudEhlaWdodCIsImhlaWdodCIsInByZXBlbmRUbyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJhZGRUbyIsImFkZCIsInJlbW92ZUZyb20iLCJyZW1vdmUiLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwiZGVzdHJveSIsImRlc3Ryb3lFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZ2V0UGFyZW50RWxlbWVudCIsImdldEFzY2VuZGFudEVsZW1lbnRzIiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NkRBUEY7NkRBQ0E7dUJBRThCO3dCQUV3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLElBQUk7Z0NBREdEO1FBRWpCLElBQU1FLFVBQVUsSUFBSSxFQUNkQyxhQUFhQyxTQUFTQyxjQUFjLENBQUNKLE9BQU8sR0FBRztRQUVyREssSUFBQUEseUJBQWdCLEVBQUNKLFNBQVNDOztrQkFMVEg7O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7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