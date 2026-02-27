"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Element;
    }
});
const _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
const _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
const _jsx = /*#__PURE__*/ _interop_require_default(require("./mixins/jsx"));
const _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
const _state = /*#__PURE__*/ _interop_require_default(require("./mixins/state"));
const _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
const _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
const _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
const _touch = /*#__PURE__*/ _interop_require_default(require("./mixins/touch"));
const _scroll = /*#__PURE__*/ _interop_require_default(require("./mixins/scroll"));
const _resize = /*#__PURE__*/ _interop_require_default(require("./mixins/resize"));
const _element = /*#__PURE__*/ _interop_require_default(require("./mixins/element"));
const _fullScreen = /*#__PURE__*/ _interop_require_default(require("./mixins/fullScreen"));
const _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
const _array = require("./utilities/array");
const _object = require("./utilities/object");
const _name = require("./utilities/name");
const _element1 = require("./utilities/element");
const _constants = require("./constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Element {
    constructor(selector){
        if (selector !== null) {
            const element = this, domElement = document.querySelector(selector);
            (0, _element1.constructElement)(element, domElement);
        }
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
    getInnerWidth() {
        return this.domElement.clientWidth;
    }
    getInnerHeight() {
        return this.domElement.clientHeight;
    }
    setWidth(width) {
        width = `${width}px`; ///
        this.style(_constants.WIDTH, width);
    }
    setHeight(height) {
        height = `${height}px`; ///
        this.style(_constants.HEIGHT, height);
    }
    hasAttribute(name) {
        return this.domElement.hasAttribute(name);
    }
    getAttribute(name) {
        return this.domElement.getAttribute(name);
    }
    setAttribute(name, value) {
        this.domElement.setAttribute(name, value);
    }
    clearAttribute(name) {
        this.domElement.removeAttribute(name);
    }
    addAttribute(name, value) {
        this.setAttribute(name, value);
    }
    removeAttribute(name) {
        this.clearAttribute(name);
    }
    hasClass(className) {
        return this.domElement.classList.contains(className);
    }
    setClass(className) {
        this.domElement.className = className;
    }
    addClass(className) {
        this.domElement.classList.add(className);
    }
    removeClass(className) {
        this.domElement.classList.remove(className);
    }
    toggleClass(className) {
        this.domElement.classList.toggle(className);
    }
    removeAllClasses() {
        this.domElement.className = _constants.EMPTY_STRING;
    }
    addTo(parentElement) {
        parentElement.add(this);
    }
    appendTo(parentElement) {
        parentElement.append(this);
    }
    prependTo(parentElement) {
        parentElement.prepend(this);
    }
    removeFrom(parentElement) {
        parentElement.remove(this);
    }
    insert(element) {
        this.append(element);
    }
    add(element) {
        this.append(element);
    }
    remove(element) {
        if (element) {
            element.remove();
            return;
        }
        this.domElement.remove();
    }
    prepend(element) {
        const domElement = element.domElement, referenceDOMElement = this.domElement.firstChild; ///
        this.domElement.insertBefore(domElement, referenceDOMElement);
    }
    append(element) {
        const domElement = element.domElement, referenceDOMElement = null; ///
        this.domElement.insertBefore(domElement, referenceDOMElement);
    }
    insertBefore(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement; ///
        parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
    }
    insertAfter(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement.nextSibling; ///
        parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
    }
    mount(element) {
        this.add(element);
        (0, _element1.mountElement)(element);
    }
    unmount(element) {
        (0, _element1.unmountElement)(element);
        this.remove(element);
    }
    mountBefore(siblingElement) {
        this.insertBefore(siblingElement);
        const element = this; ///
        (0, _element1.mountElement)(element);
    }
    mountAfter(siblingElement) {
        this.insertAfter(siblingElement);
        const element = this; ///
        (0, _element1.mountElement)(element);
    }
    show(displayStyle = _constants.BLOCK) {
        this.display(displayStyle);
    }
    hide() {
        this.style(_constants.DISPLAY, _constants.NONE);
    }
    display(display) {
        this.style(_constants.DISPLAY, display);
    }
    enable() {
        this.clearAttribute(_constants.DISABLED);
    }
    disable() {
        this.setAttribute(_constants.DISABLED, _constants.DISABLED);
    }
    isEnabled() {
        const disabled = this.isDisabled(), enabled = !disabled;
        return enabled;
    }
    isDisabled() {
        const disabled = this.hasAttribute(_constants.DISABLED);
        return disabled;
    }
    isDisplayed() {
        const display = this.css(_constants.DISPLAY), displayed = display !== _constants.NONE;
        return displayed;
    }
    isShowing() {
        const displayed = this.isDisplayed(), showing = displayed; ///
        return showing;
    }
    isHidden() {
        const displayed = this.isDisplayed(), hidden = !displayed;
        return hidden;
    }
    style(name, value = null) {
        if (value !== null) {
            this.domElement.style[name] = value;
            return;
        }
        const style = this.domElement.style[name];
        return style;
    }
    html(html = null) {
        if (html !== null) {
            const innerHTML = html; ///
            this.domElement.innerHTML = innerHTML;
            return;
        }
        const innerHTML = this.domElement.innerHTML;
        html = innerHTML; ///
        return html;
    }
    css(css = null) {
        if (css === null) {
            css = {};
            const computedStyles = getComputedStyle(this.domElement); ///
            for(let index = 0; index < computedStyles.length; index++){
                const computedStyle = computedStyles[index], name = computedStyle, value = computedStyles.getPropertyValue(name); ///
                css[name] = value;
            }
        } else if (typeof css === _constants.STRING) {
            let name = css; ///
            const computedStyles = getComputedStyle(this.domElement), value = computedStyles.getPropertyValue(name); ///
            css = value; ///
        } else {
            const names = Object.keys(css); ///
            names.forEach((name)=>{
                const value = css[name];
                this.style(name, value);
            });
        }
        return css;
    }
    destroy() {
        const element = this; ///
        (0, _element1.destroyElement)(element);
    }
    static fromClass(Class, properties, ...remainingArguments) {
        const { tagName } = Class, element = elementFromTagName(Class, tagName, ...remainingArguments), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
        element.applyProperties(properties, defaultProperties, ignoredProperties);
        element.initialise && element.initialise(); ///
        return element;
    }
    static fromTagName(tagName, properties, ...remainingArguments) {
        const Class = Element, element = elementFromTagName(Class, tagName, ...remainingArguments), defaultProperties = {}, ignoredProperties = []; ///
        element.applyProperties(properties, defaultProperties, ignoredProperties);
        element.initialise && element.initialise(); ///
        return element;
    }
}
Object.assign(Element.prototype, _jsx.default);
Object.assign(Element.prototype, _key.default);
Object.assign(Element.prototype, _mouse.default);
Object.assign(Element.prototype, _click.default);
Object.assign(Element.prototype, _state.default);
Object.assign(Element.prototype, _event.default);
Object.assign(Element.prototype, _touch.default);
Object.assign(Element.prototype, _scroll.default);
Object.assign(Element.prototype, _resize.default);
Object.assign(Element.prototype, _element.default);
Object.assign(Element.prototype, _fullScreen.default);
Object.assign(Element.prototype, _customEvent.default);
function elementFromTagName(Class, tagName, ...remainingArguments) {
    const selector = null, element = new (Function.prototype.bind.call(Class, null, selector, ...remainingArguments)), domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    (0, _element1.constructElement)(element, domElement);
    return element;
}
function defaultPropertiesFromClass(Class, defaultProperties = {}) {
    if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object.combine)(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
    }
    const superClass = Object.getPrototypeOf(Class); ///
    if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
    }
    return defaultProperties;
}
function ignoredPropertiesFromClass(Class, ignoredProperties = []) {
    if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array.augment)(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], (ignoredProperty)=>{
            if (!ignoredProperties.includes(ignoredProperty)) {
                return true;
            }
        });
    }
    const superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgY29uc3RydWN0RWxlbWVudCwgZGVzdHJveUVsZW1lbnQsIG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPXRoaXMsICAvLy9cbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21ET01FbGVtZW50KHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoOyB9ICAvLy9cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0OyB9ICAvLy9cblxuICBnZXRJbm5lcldpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9IC8vL1xuXG4gIGdldElubmVySGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfSAvLy9cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUFsbENsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5uZXh0U2libGluZzsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBodG1sKGh0bWwgPSBudWxsKSB7XG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNzcyhjc3MgPSBudWxsKSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCkge1xuICAgICAgY3NzID0ge307XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpOyAvLy9cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICBuYW1lID0gY29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLCAvLy9cbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IHNlbGVjdG9yID0gbnVsbCxcbiAgICAgICAgZWxlbWVudCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgbnVsbCwgc2VsZWN0b3IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpLFxuICAgICAgICBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoREVGQVVMVF9QUk9QRVJUSUVTKSkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTsgIC8vL1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRPZmZzZXQiLCJvZmZzZXQiLCJPZmZzZXQiLCJmcm9tRE9NRWxlbWVudCIsImdldEJvdW5kcyIsImJvdW5kcyIsIkJvdW5kcyIsImdldFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJnZXRJbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRJbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInNldFdpZHRoIiwid2lkdGgiLCJzdHlsZSIsIldJRFRIIiwic2V0SGVpZ2h0IiwiaGVpZ2h0IiwiSEVJR0hUIiwiaGFzQXR0cmlidXRlIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY2xlYXJBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0Q2xhc3MiLCJhZGRDbGFzcyIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJyZW1vdmVBbGxDbGFzc2VzIiwiRU1QVFlfU1RSSU5HIiwiYWRkVG8iLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJwcmVwZW5kVG8iLCJwcmVwZW5kIiwicmVtb3ZlRnJvbSIsImluc2VydCIsInJlZmVyZW5jZURPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsImluc2VydEFmdGVyIiwibmV4dFNpYmxpbmciLCJtb3VudCIsIm1vdW50RWxlbWVudCIsInVubW91bnQiLCJ1bm1vdW50RWxlbWVudCIsIm1vdW50QmVmb3JlIiwibW91bnRBZnRlciIsInNob3ciLCJkaXNwbGF5U3R5bGUiLCJCTE9DSyIsImRpc3BsYXkiLCJoaWRlIiwiRElTUExBWSIsIk5PTkUiLCJlbmFibGUiLCJESVNBQkxFRCIsImRpc2FibGUiLCJpc0VuYWJsZWQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiaXNEaXNwbGF5ZWQiLCJjc3MiLCJkaXNwbGF5ZWQiLCJpc1Nob3dpbmciLCJzaG93aW5nIiwiaXNIaWRkZW4iLCJoaWRkZW4iLCJodG1sIiwiaW5uZXJIVE1MIiwiY29tcHV0ZWRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJjb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlNUUklORyIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZXN0cm95IiwiZGVzdHJveUVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhcHBseVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiZnJvbVRhZ05hbWUiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwic3RhdGVNaXhpbnMiLCJldmVudE1peGlucyIsInRvdWNoTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwicmVzaXplTWl4aW5zIiwiZWxlbWVudE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJjdXN0b21FdmVudE1peGlucyIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJpc1NWR1RhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIkRFRkFVTFRfUFJPUEVSVElFUyIsImNvbWJpbmUiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJJR05PUkVEX1BST1BFUlRJRVMiLCJhdWdtZW50IiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlDQTs7O2VBQXFCQTs7OytEQS9CRjsrREFDQTs0REFDRzs0REFDQTs4REFDRTs4REFDQTs4REFDQTs4REFDQTs4REFDQTsrREFDQzsrREFDQTtnRUFDQzttRUFDRztvRUFDQzt1QkFFTjt3QkFDQTtzQkFDSzswQkFDa0Q7MkJBVzVDOzs7Ozs7QUFFcEIsTUFBTUE7SUFDbkIsWUFBWUMsUUFBUSxDQUFFO1FBQ3BCLElBQUlBLGFBQWEsTUFBTTtZQUNyQixNQUFNQyxVQUFTLElBQUksRUFDYkMsYUFBYUMsU0FBU0MsYUFBYSxDQUFDSjtZQUUxQ0ssSUFBQUEsMEJBQWdCLEVBQUNKLFNBQVNDO1FBQzVCO0lBQ0Y7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssWUFBWTtRQUNWLE1BQU1DLFNBQVNDLGVBQU0sQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ1IsVUFBVTtRQUVwRCxPQUFPTTtJQUNUO0lBRUFHLFlBQVk7UUFDVixNQUFNQyxTQUFTQyxlQUFNLENBQUNILGNBQWMsQ0FBQyxJQUFJLENBQUNSLFVBQVU7UUFFcEQsT0FBT1U7SUFDVDtJQUVBRSxXQUFXO1FBQUUsT0FBTyxJQUFJLENBQUNaLFVBQVUsQ0FBQ2EsV0FBVztJQUFFO0lBRWpEQyxZ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