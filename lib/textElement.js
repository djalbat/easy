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
            key: "getOffset",
            value: function getOffset() {
                var offset = _offset.default.fromDOMElement(this.domElement);
                return offset;
            }
        },
        {
            key: "getBounds",
            value: function getBounds() {
                var bounds = _bounds.default.fromDOMElement(this.domElement);
                return bounds;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                return this.domElement.offsetWidth;
            } ///
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.domElement.offsetHeight;
            } ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0RWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5cbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGdldFBhcmVudEVsZW1lbnQsIGdldEFzY2VuZGFudEVsZW1lbnRzLCBnZXROZXh0U2libGluZ0VsZW1lbnQsIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQgfSBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21ET01FbGVtZW50KHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoOyB9ICAvLy9cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0OyB9ICAvLy9cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0RWxlbWVudC5wcm90b3R5cGUsIHtcbiAgZ2V0UGFyZW50RWxlbWVudCxcbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMsXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudCxcbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudFxufSk7XG4iXSwibmFtZXMiOlsiVGV4dEVsZW1lbnQiLCJ0ZXh0IiwiZWxlbWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRPZmZzZXQiLCJvZmZzZXQiLCJPZmZzZXQiLCJmcm9tRE9NRWxlbWVudCIsImdldEJvdW5kcyIsImJvdW5kcyIsIkJvdW5kcyIsImdldFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJnZXRUZXh0Iiwibm9kZVZhbHVlIiwic2V0VGV4dCIsInByZXBlbmRUbyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJhZGRUbyIsImFkZCIsInJlbW92ZUZyb20iLCJyZW1vdmUiLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwiZGVzdHJveSIsImRlc3Ryb3lFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZ2V0UGFyZW50RWxlbWVudCIsImdldEFzY2VuZGFudEVsZW1lbnRzIiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NkRBTkY7NkRBQ0E7dUJBRThCO3dCQUN3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLElBQUk7Z0NBREdEO1FBRWpCLElBQU1FLFVBQVUsSUFBSSxFQUNkQyxhQUFhQyxTQUFTQyxjQUFjLENBQUNKLE9BQU8sR0FBRztRQUVyREssSUFBQUEseUJBQWdCLEVBQUNKLFNBQVNDOztrQkFMVEg7O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBU0MsZUFBTSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDUixVQUFVO2dCQUVwRCxPQUFPTTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVNDLGVBQU0sQ0FBQ0gsY0FBYyxDQUFDLElBQUksQ0FBQ1IsVUFBVTtnQkFFcEQsT0FBT1U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ1osVUFBVSxDQUFDYSxXQUFXO1lBQUUsRUFBRyxHQUFHOzs7WUFFdkRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ2QsVUFBVSxDQUFDZSxZQUFZO1lBQUUsRUFBRyxHQUFHOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ2lCLFNBQVMsRUFDckNuQixPQUFPbUIsV0FBVyxHQUFHO2dCQUUzQixPQUFPbkI7WUFDVDs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUEsUUFBUXBCLElBQUk7Z0JBQ1YsSUFBTW1CLFlBQVluQixNQUFNLEdBQUc7Z0JBRTNCLElBQUksQ0FBQ0UsVUFBVSxDQUFDaUIsU0FBUyxHQUFHQTtZQUM5Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxhQUFhO2dCQUFJQSxjQUFjQyxPQUFPLENBQUMsSUFBSTtZQUFHOzs7WUFFeERDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixhQUFhO2dCQUFJQSxjQUFjRyxNQUFNLENBQUMsSUFBSTtZQUFHOzs7WUFFdERDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixhQUFhO2dCQUFJQSxjQUFjSyxHQUFHLENBQUMsSUFBSTtZQUFHOzs7WUFFaERDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXTixhQUFhO2dCQUFJQSxjQUFjTyxNQUFNLENBQUMsSUFBSTtZQUFHOzs7WUFFeERDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxjQUFjO2dCQUN6QixJQUFNQyxnQkFBZ0JELGVBQWU3QixVQUFVLENBQUMrQixVQUFVLEVBQ3BEQyxvQkFBb0JILGVBQWU3QixVQUFVLEVBQUcsR0FBRztnQkFFekQ4QixjQUFjRixZQUFZLENBQUMsSUFBSSxDQUFDNUIsVUFBVSxFQUFFZ0M7WUFDOUM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUosY0FBYztnQkFDeEIsSUFBTUMsZ0JBQWdCRCxlQUFlN0IsVUFBVSxDQUFDK0IsVUFBVSxFQUNwREMsb0JBQW9CSCxlQUFlN0IsVUFBVSxFQUFHLEdBQUc7Z0JBRXpEOEIsY0FBY0YsWUFBWSxDQUFDLElBQUksQ0FBQzVCLFVBQVUsRUFBRWdDLGtCQUFrQkUsV0FBVyxHQUFJLEdBQUc7WUFDbEY7OztZQUVBUCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDM0IsVUFBVSxDQUFDMkIsTUFBTTtZQUN4Qjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNcEMsVUFBVSxJQUFJLEVBQUUsR0FBRztnQkFFekJxQyxJQUFBQSx1QkFBYyxFQUFDckM7WUFDakI7OztXQXZFbUJGOztBQTBFckJ3QyxPQUFPQyxNQUFNLENBQUN6QyxZQUFZMEMsU0FBUyxFQUFFO0lBQ25DQyxrQkFBQUEsMEJBQWdCO0lBQ2hCQyxzQkFBQUEsOEJBQW9CO0lBQ3BCQyx1QkFBQUEsK0JBQXFCO0lBQ3JCQywyQkFBQUEsbUNBQXlCO0FBQzNCIn0=