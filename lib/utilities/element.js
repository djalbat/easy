"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get constructElement () {
        return constructElement;
    },
    get default () {
        return _default;
    },
    get destroyElement () {
        return destroyElement;
    },
    get mountElement () {
        return mountElement;
    },
    get unmountElement () {
        return unmountElement;
    }
});
function constructElement(element, domElement) {
    element.domElement = domElement;
    domElement.__element__ = element; ///
}
function destroyElement(element) {
    const descendantElements = element.getDescendantElements(), elements = [
        element,
        ...descendantElements
    ];
    elements.forEach((element)=>{
        const domElement = element.getDOMElement();
        delete element.domElement;
        delete domElement.__element__;
    });
}
function mountElement(element) {
    const descendantElements = element.getDescendantElements(), elements = [
        element,
        ...descendantElements
    ];
    elements.reverse(); ///
    elements.forEach((element)=>{
        element.didMount && element.didMount();
    });
}
function unmountElement(element) {
    const descendantElements = element.getDescendantElements(), elements = [
        element,
        ...descendantElements
    ];
    elements.forEach((element)=>{
        element.willUnmount && element.willUnmount();
    });
}
const _default = {
    constructElement,
    destroyElement,
    mountElement,
    unmountElement
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCkge1xuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gIGRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZGVsZXRlIGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIGRlbGV0ZSBkb21FbGVtZW50Ll9fZWxlbWVudF9fO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICBdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uc3RydWN0RWxlbWVudCxcbiAgZGVzdHJveUVsZW1lbnQsXG4gIG1vdW50RWxlbWVudCxcbiAgdW5tb3VudEVsZW1lbnRcbn07XG4iXSwibmFtZXMiOlsiY29uc3RydWN0RWxlbWVudCIsImRlc3Ryb3lFbGVtZW50IiwibW91bnRFbGVtZW50IiwidW5tb3VudEVsZW1lbnQiLCJlbGVtZW50IiwiZG9tRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZ2V0RE9NRWxlbWVudCIsInJldmVyc2UiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFFZ0JBO2VBQUFBOztRQWdEaEI7ZUFBQTs7UUExQ2dCQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQWNBQztlQUFBQTs7O0FBcENULFNBQVNILGlCQUFpQkksT0FBTyxFQUFFQyxVQUFVO0lBQ2xERCxRQUFRQyxVQUFVLEdBQUdBO0lBRXJCQSxXQUFXQyxXQUFXLEdBQUdGLFNBQVMsR0FBRztBQUN2QztBQUVPLFNBQVNILGVBQWVHLE9BQU87SUFDcEMsTUFBTUcscUJBQXFCSCxRQUFRSSxxQkFBcUIsSUFDbERDLFdBQVc7UUFDVEw7V0FDR0c7S0FDSjtJQUVQRSxTQUFTQyxPQUFPLENBQUMsQ0FBQ047UUFDaEIsTUFBTUMsYUFBYUQsUUFBUU8sYUFBYTtRQUV4QyxPQUFPUCxRQUFRQyxVQUFVO1FBRXpCLE9BQU9BLFdBQVdDLFdBQVc7SUFDL0I7QUFDRjtBQUVPLFNBQVNKLGFBQWFFLE9BQU87SUFDbEMsTUFBTUcscUJBQXFCSCxRQUFRSSxxQkFBcUIsSUFDbERDLFdBQVc7UUFDVEw7V0FDR0c7S0FDSjtJQUVQRSxTQUFTRyxPQUFPLElBQUksR0FBRztJQUV2QkgsU0FBU0MsT0FBTyxDQUFDLENBQUNOO1FBQ2hCQSxRQUFRUyxRQUFRLElBQUlULFFBQVFTLFFBQVE7SUFDdEM7QUFDRjtBQUVPLFNBQVNWLGVBQWVDLE9BQU87SUFDcEMsTUFBTUcscUJBQXFCSCxRQUFRSSxxQkFBcUIsSUFDbERDLFdBQVc7UUFDVEw7V0FDR0c7S0FDSjtJQUVQRSxTQUFTQyxPQUFPLENBQUMsQ0FBQ047UUFDaEJBLFFBQVFVLFdBQVcsSUFBSVYsUUFBUVUsV0FBVztJQUM1QztBQUNGO01BRUEsV0FBZTtJQUNiZDtJQUNBQztJQUNBQztJQUNBQztBQUNGIn0=