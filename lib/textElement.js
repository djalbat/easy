"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
var _element = /*#__PURE__*/ _interop_require_default(require("./mixins/element"));
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
        this.domElement = document.createTextNode(text); ///
        this.domElement.__element__ = this; ///
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
        }
    ]);
    return TextElement;
}();
Object.assign(TextElement.prototype, _element.default);
var _default = TextElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0RWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGg7ICAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRFbGVtZW50O1xuIl0sIm5hbWVzIjpbIlRleHRFbGVtZW50IiwidGV4dCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiX19lbGVtZW50X18iLCJnZXRET01FbGVtZW50IiwiZ2V0VGV4dCIsIm5vZGVWYWx1ZSIsInNldFRleHQiLCJnZXRPZmZzZXQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImdldEJvdW5kcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaWR0aCIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJnZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJwcmVwZW5kVG8iLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZFRvIiwiYXBwZW5kIiwiYWRkVG8iLCJhZGQiLCJyZW1vdmVGcm9tIiwicmVtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImVsZW1lbnRNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdGQTs7O2VBQUE7Ozs2REF0Rm1COzZEQUNBOzhEQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsNEJBQUQsQUFBTDthQUFNQSxZQUNRQyxJQUFJO2dDQURaRDtRQUVGLElBQUksQ0FBQ0UsVUFBVSxHQUFHQyxTQUFTQyxjQUFjLENBQUNILE9BQU8sR0FBRztRQUVwRCxJQUFJLENBQUNDLFVBQVUsQ0FBQ0csV0FBVyxHQUFHLElBQUksRUFBRSxHQUFHOztrQkFKckNMOztZQU9KTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNOLFVBQVUsQ0FBQ00sU0FBUyxFQUNyQ1AsT0FBT08sV0FBVyxHQUFHO2dCQUUzQixPQUFPUDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFSLElBQUk7Z0JBQ1YsSUFBTU8sWUFBWVAsTUFBTSxHQUFHO2dCQUUzQixJQUFJLENBQUNDLFVBQVUsQ0FBQ00sU0FBUyxHQUFHQTtZQUM5Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxNQUFNLElBQUksQ0FBQ1QsVUFBVSxDQUFDVSxTQUFTLEVBQy9CQyxPQUFPLElBQUksQ0FBQ1gsVUFBVSxDQUFDWSxVQUFVLEVBQ2pDQyxTQUFTLElBQUlDLGVBQU0sQ0FBQ0wsS0FBS0U7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2lCLHFCQUFxQixJQUMxREMsU0FBU0MsZUFBTSxDQUFDQyxzQkFBc0IsQ0FBQ0o7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUN0QixVQUFVLENBQUNzQixXQUFXLEVBQ3pDQyxRQUFRRCxhQUFjLEdBQUc7Z0JBRS9CLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUN6QixVQUFVLENBQUN5QixZQUFZLEVBQzNDQyxTQUFTRCxjQUFlLEdBQUc7Z0JBRWpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsYUFBYTtnQkFBSUEsY0FBY0MsT0FBTyxDQUFDLElBQUk7WUFBRzs7O1lBRXhEQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0YsYUFBYTtnQkFBSUEsY0FBY0csTUFBTSxDQUFDLElBQUk7WUFBRzs7O1lBRXREQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUosYUFBYTtnQkFBSUEsY0FBY0ssR0FBRyxDQUFDLElBQUk7WUFBRzs7O1lBRWhEQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV04sYUFBYTtnQkFBSUEsY0FBY08sTUFBTSxDQUFDLElBQUk7WUFBRzs7O1lBRXhEQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsY0FBYztnQkFDekIsSUFBTUMsZ0JBQWdCRCxlQUFlckMsVUFBVSxDQUFDdUMsVUFBVSxFQUNwREMsb0JBQW9CSCxlQUFlckMsVUFBVSxFQUFHLEdBQUc7Z0JBRXpEc0MsY0FBY0YsWUFBWSxDQUFDLElBQUksQ0FBQ3BDLFVBQVUsRUFBRXdDO1lBQzlDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlKLGNBQWM7Z0JBQ3hCLElBQU1DLGdCQUFnQkQsZUFBZXJDLFVBQVUsQ0FBQ3VDLFVBQVUsRUFDcERDLG9CQUFvQkgsZUFBZXJDLFVBQVUsRUFBRyxHQUFHO2dCQUV6RHNDLGNBQWNGLFlBQVksQ0FBQyxJQUFJLENBQUNwQyxVQUFVLEVBQUV3QyxrQkFBa0JFLFdBQVcsR0FBSSxHQUFHO1lBQ2xGOzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ25DLFVBQVUsQ0FBQ21DLE1BQU07WUFDeEI7OztXQTdFSXJDOztBQWdGTjZDLE9BQU9DLE1BQU0sQ0FBQzlDLFlBQVkrQyxTQUFTLEVBQUVDLGdCQUFhO0lBRWxELFdBQWVoRCJ9