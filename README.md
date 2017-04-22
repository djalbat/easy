# Easy

A V-framework.

Easy is an MVC framework without the M and without the C. It's without a model, only abstracting away from the view, namely the document object model. There is some irony here. It's without a controller, or whatever. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. In fact JSX brings with it [several benefits](http://djalbat.com/juxtapose#jsxIsGreat). So although Easy elements will continue to work standalone, their use with Juxtapose is *highly recommended*. The contents of this readme file will stay as a reference, however a much better place to start from now on is here:

* [Juxtapose online documentation](http://djalbat.com/juxtapose/)

### Related projects

- [Easy-Layout](https://github.com/djalbat/Easy-Layout) Layout elements that work with CSS flexbox.
- [Easy-DragAndDrop](https://github.com/djalbat/Easy-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [Easy-RichTextarea](https://github.com/djalbat/Easy-RichTextarea) A textarea element that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Installation

You can install Easy with [npm](https://www.npmjs.com/):

    npm install easy

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Easy.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

If you are building with [Node.js](http://nodejs.org) the usage is as follows:

```js
const easy = require('easy'),
      Select = easy.Select,
      Checkbox = easy.Checkbox;
```

To use Easy in the browser, take the `easy.js` file from the project's `dist/` directory and put it somewhere such as a `public/scripts/lib` directory. Referencing this distribution file from a `script` element...

```html
<script src="scripts/lib/easy.js"> </script>
```

...will give you a global `easy` variable which can be used directly:

```js
const Button = easy.Button;
```

Alternatively, if you are using an AMD style `require` the usage is similar to the Node.js case, only make sure that the path to the distribution file is correct. The following script should work, assuming it lives in the the `public/scripts/` directory:

```js
const easy = require('lib/easy'),
      Button = easy.Button;
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Creating elements

You can pass CSS-style selectors to constructors:

```js
const link = new Link('#link', function(href) {
  console.log('Link click with href ' + href);
});
```

You can also use existing DOM elements or HTML snippets with the static `fromDOMElement()` or `fromHTML()` factory methods of the relevant class, respectively:

```js
const bodyDOMElements = document.getElementsByTagName('body'),
      firstBodyDOMElement = first(bodyDOMElements),
      bodyDOMElement = firstBodyDOMElement;
    
const body = Body.fromDOMElement(bodyDOMElement),
      checkbox = Checkbox.fromHTML('<input type="checkbox" />');
```

Note that `document` here is the global document reference, not Easy's `document` singleton.

If constructors take handlers or other additional arguments, you can pass these to the corresponding `fromDOMElement()` or `fromHTML()` factory methods and they will be passed on the constructor. 

## Cloning elements

You can call the `clone()` method of an element to clone it, or the equivalent static factory method. In either case, if the original element has an `id` attribute, it is best to remove this from the cloned element:
 
```js
const button = new Button('#button'),
      clonedButton1 = button.clone(),
      clonedButton2 = Button.clone(button)
     
clonedButton1.removeAttribute('id');
clonedButton2.removeAttribute('id');
```

As in the case of `fromDOMElement()` and `fromHTML()` factory methods, the `clone()` methods will pass additional arguments on to the corresponding constructor. Note that when you clone an element you will need to re-register handlers. 

## Adding elements to the DOM
 
The methods to add elements to the DOM are hopefully intuitive. Note the difference between the `append()` and `appendTo()` methods:

```js
const body = new Body(),
      form = Element.fromHTML(Element, '<form></form>');

body.append(form); // what you want, the form element becomes a child of the body element

form.appendTo(body); // also what you want, the form element becomes a child of the body element
```

Similarly for the prepend methods.

## Supported elements

-  Body
-  Div
-  Span
-  Button
-  Checkbox
-  Input
-  Link
-  Textarea
-  Select
-  window
-  document

The `Window` and `Document` classes are not exported, only singletons, hence the lowercase. 

Obviously the list is incomplete. If you do not want to roll your own classes, use the `Element` class:

```js
const br = Element.fromHTML(Element, '<br />');
```

## Rolling your own classes

Using the existing `Div` class as an example:

```js
const Element = require('../element');

class Div extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Div.clone(this); }
  
  ...

  static clone(element) {
    return Element.clone(Div, element);
  }

  static fromHTML(html) {
    return Element.fromHTML(Div, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Div, domElement);
  }
}
```

You can then use the private `domElement` property to create methods that abstract away from DOM functionality.
    
## Standard methods

Each class bar the `Window`, `Document` and `TextElement` classes has the following methods. They are taken from the `Element` class and are overridden in many cases, in which case the signatures may change:

- `clone()`
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
- `enable()`
- `disable()`
- `isEnabled()`
- `isDisabled()`
- `html(html)`
- `css(css)`
- `blur()`
- `focus()`
- `hasFocus()`
- `getDescendantElements(selector = '*')`
- `getChildElements(selector = '*')`
- `getParentElement(selector = '*')`
- `getAscendantElements(selector = '*')`
- `getPreviousSiblingElement(selector = '*')`
- `getNextSiblingElement(selector = '*')`
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

* The `html()` and `css()` methods allow you to both get and set HTML and CSS, respectively. Their functionality is based on the jQuery methods of the same name. 

* The `blur()` and `focus()` events are defined on all elements, however they will not have an effect if the element in question cannot have the focus. 

* The `onResize()` and `offResize()` methods are similarly defined on all elements, by way of a mixin. The resize functionality relies on attaching a child object to the element in question and therefore will not work for elements which cannot have child elements. In these cases, the `onResize()` and `offResize()` methods simply do nothing. 

Aside from the above methods there are the aforementioned static factory methods.
 
- `static clone(Class, element, ...remainingArguments)`
- `static fromHTML(Class, html, ...remainingArguments)`
- `static fromDOMElement(Class, domElement, ...remainingArguments)`

Again bear in mind that the signatures will change for classes that inherit from the `Element` class.

The `Input` and `Textarea` classes have the following methods, taken from the `InputElement` class:

- `onChange(handler)`
- `offChange(handler)`
- `getValue()`
- `getSelectionStart()`
- `getSelectionEnd()`
- `setValue(value)`
- `setSelectionStart(selectionStart)`
- `setSelectionEnd(selectionEnd)`
- `select()`

The `TextElement` class has the following methods:

- `clone()`
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

It does not have any static factory methods.

The `Checkbox` class has the following additional methods:

- `onChange(handler)`
- `offChange(handler)`
- `check(checked = true)`
- `isChecked()`

The `Input` class has the following additional methods:

- `getValue()`
- `getSelectionStart()`
- `getSelectionEnd()`
- `setValue(value)`
- `setSelectionStart(selectionStart)`
- `setSelectionEnd(selectionEnd)`
- `onChange(handler)`
- `offChange(handler)`

The `Select` class has the following additional methods:

- `getSelectedOptionValue()`
- `setSelectedOptionByValue(selectedOptionValue)`
- `onChange(handler)`
- `offChange(handler)`
  
Both the `Window` and `Document` singletons have the following methods:

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

The `Window` class, but not the `Document` class, has the following methods:

- `assign(...sources)`
- `onResize(handler)`
- `offResize(handler)`
- `getWidth`
- `getHeight`
- `getScrollTop`
- `getScrollLeft`

Remember that the `Window` and `Document` classes are exported as singletons.

## Acknowledgements

The resize support is based on an idea from [this post](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/) by Daniel Buchner.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
