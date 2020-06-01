# Easy

Elements that abstract away from the DOM.

A set of classes that abstract away from the browser's document object model so that you can easily create elements with underlying DOM elements and the methods to manipulate them. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches.

If you like Easy you might like [Easy with Style](https://github.com/djalbat/easy-with-style).

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. In fact JSX brings with it [several benefits](http://djalbat.com/juxtapose#jsxIsGreat). So although Easy elements will continue to work standalone, their use with Juxtapose is recommended. The contents of this readme file will stay as a reference, however a much better place to start from now on is here:

**[Juxtapose online documentation](http://juxtapose.info)**

### Related projects

- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy RichTextarea](https://github.com/djalbat/easy-richTextarea) A textarea element that handles and hands off events well.
- [Easy DragAndDrop](https://github.com/djalbat/easy-draganddrop) Drag and drop elements including an explorer and a rubbish bin.

## Installation

You can install Easy with [npm](https://www.npmjs.com/):

    npm install easy

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

Typically you should create a view and mount it to the DOM's body element. This can be done by instantiating the `Body` class and appending the view to it:

```
import { Body } from "easy";

import View from "./view";

const body = new Body();

body.prepend(

  <View />

);
```
For more usage examples, see the Juxtapose documentation.

## Creating elements

You can pass CSS-style selectors to constructors:

```
const link = new Link("#link", (event, element) => {

  event.preventDefault();

  console.log(element.getAttribute("href"))

});
```
## Supported elements

-  Body
-  Button
-  Checkbox
-  Link
-  Select
-  Input
-  Textarea
-  window
-  document

The `Window` and `Document` classes are not exported, only singletons, hence the lowercase. Note also that if the underlying `window` and `document` global objects are not defined, for whatever reason, then these singletons will also be undefined.

Obviously the list is incomplete. If you want to create other elements, you can extend the `Element` or `InputElement` classes.

## Standard methods

Each class bar the `Window`, `Document` and `TextElement` classes has the following methods. They are taken from the `Element` class and are overridden in many cases, in which case the signatures may change:

- `getDOMElement()`
- `getOffset()`
- `getBounds()`
- `getWidth(includeBorder = true)`
- `setWidth(width)`
- `getHeight(includeBorder = true)`
- `setHeight(height)`
- `hasAttribute(name)`
- `getAttribute(name)`
- `setAttribute(name, value)`
- `clearAttribute(name)`
- `addAttribute(name, value)`
- `removeAttribute(name)`
- `setClass(className)`
- `addClass(className)`
- `removeClass(className)`
- `toggleClass(className)`
- `hasClass(className)`
- `clearClasses()`
- `appendTo(parentElement)`
- `prependTo(parentElement)`
- `addTo(parentElement)`
- `removeFrom(parentElement)`
- `insertBefore(siblingElement)`
- `insertAfter(siblingElement)`
- `prepend(element)`
- `append(element)`
- `add(element)`
- `remove(element)`
- `show(displayStyle = 'block')`
- `hide()`
- `display(displayStyle)`
- `enable()`
- `disable()`
- `isEnabled()`
- `isDisabled()`
- `isDisplayed()`
- `isShowing()`
- `isHidden()`
- `style(style)`
- `html(html)`
- `css(css)`
- `blur()`
- `focus()`
- `hasFocus()`
- `getDescendantElements(selector = "*")`
- `getChildElements(selector = "*")`
- `getParentElement(selector = "*")`
- `getAscendantElements(selector = "*")`
- `getPreviousSiblingElement(selector = "*")`
- `getNextSiblingElement(selector = "*")`
- `getScrollTop()`
- `getScrollLeft()`
- `setScrollTop(scrollTop)`
- `setScrollLeft(scrollLeft)`
- `on(eventTypes, handler)`
- `off(eventTypes, handler)`
- `onClick(handler)`
- `offClick(handler)`
- `onKeyUp(handler)`
- `onKeyDown(handler)`
- `onMouseUp(handler)`
- `onMouseDown(handler)`
- `onMouseOver(handler)`
- `onMouseOut(handler)`
- `onMouseMove(handler)`
- `offMouseUp(handler)`
- `offMouseDown(handler)`
- `offMouseOver(handler)`
- `offMouseOut(handler)`
- `offMouseMove(handler)`
- `onScroll(handler)`
- `offScroll(handler)`
- `onResize(handler)`
- `offResize(handler)`

Please note the following:

* The `setWidth()` and `setHeight()` methods take number arguments and prepend `px` to them. If you want to set the widths and heights of elements using something other than pixels, use the `style()` method.

* The `html()` and `css()` methods allow you to both get and set HTML and CSS, respectively. Their functionality is based on the jQuery methods of the same name. The `style()` method behaves similarly.

* The `blur()` and `focus()` events are defined on all elements, however they will not have an effect if the element in question cannot have the focus. 

* The `onResize()` and `offResize()` methods are similarly defined on all elements, by way of a mixin. The resize functionality relies on attaching a child object to the element in question and therefore will not work for elements which cannot have child elements. In these cases, the `onResize()` and `offResize()` methods simply do nothing. Also, the aforementioned child object is given amongst others the style `position: relative` and therefore the element in question must be given either the `position: relative` or the `position: absolute` style in order for this trick to work.

The `Input` and `Textarea` classes also have the following methods, taken from the `InputElement` class:

- `onChange(handler)`
- `offChange(handler)`
- `getValue()`
- `getSelectionStart()`
- `getSelectionEnd()`
- `isReadOnly()`
- `setValue(value)`
- `setSelectionStart(selectionStart)`
- `setSelectionEnd(selectionEnd)`
- `setReadOnly(readOnly)`
- `select()`

The `TextElement` class has the following methods only:

- `getText()`
- `setText(text)`
- `getOffset()`
- `getBounds()`
- `getWidth()`
- `getHeight()`
- `prependTo(parentElement)`
- `appendTo(parentElement)`
- `addTo(parentElement)`
- `removeFrom(parentElement)`
- `insertBefore(siblingElement)`
- `insertAfter(siblingElement)`
- `remove()`

Each of the supported elements has methods specific to its function, check the source for details.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

* The resize support is based on an idea from [this post](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/) by Daniel Buchner.

* The SVG tag and attribute names were taken from Titus Wormer's [svg-element-attributes](https://github.com/wooorm/svg-element-attributes) package.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
