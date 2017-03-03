# EasyUI

A V-framework.

EasyUI is an MVC framework without the M and without the C. It's without a model, only abstracting away from the view, namely the document object model. There is some irony here. It's without a controller, or whatever. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches. 

It leverages jQuery to provide a very basic set of classes for elements such as buttons, links, etc. It covers up jQuery's idiosyncratic syntax and is hopefully a bit more readable. It allows you to associate JavaScript classes directly with static HTML, you don't have to dynamically create DOM elements unless you want to.

## Related projects

- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout elements that work with CSS flexbox.
- [EasyUI-DragAndDrop](https://github.com/djalbat/EasyUI-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [EasyUI-RichTextArea](https://github.com/djalbat/EasyUI-RichTextArea) A textarea component that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Installation

You can install EasyUI with [npm](https://www.npmjs.com/):

    npm install easyui

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/EasyUI.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Usage

If you're building with [Node.js](http://nodejs.org) the usage is as follows:

```js
var easyui = require('easyui'),
    Select = easyui.Select,
    Checkbox = easyui.Checkbox;
```

To use EasyUI in the browser, take the `easyui.js` file from the project's `dist/` directory and put it somewhere such as a `public/scripts/lib` directory. Referencing this distribution file from a `script` element...

```html
<script src="scripts/lib/easyui.js"> </script>
```

...will give you a global `easyui` variable which can be used directly:

```js
var Button = easyui.Button;
```

Alternatively, if you're using an AMD style `require` the usage is similar to the Node.js case, only make sure that the path to the distribution file is correct. The following script should work, assuming it lives in the the `public/scripts/` directory:

```js
var easyui = require('lib/easyui'),
    Button = easyui.Button;
```

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Examples

See the `examples.html` file in the project's root directory, or read on.

### Working example

Here an element corresponding to the `body` DOM element is constructed and an outer `div` element is appended to that. `Div` elements corresponding to two of the three inner `div`s are then constructed. Note there are no references. These can be recovered by iterating over the child elements of the outer `div`. Note also that there is no second inner `div`, since no corresponding `Div` element has been created for it.   

```js
var body = new Body(),
    outerDiv = Div.fromHTML('<div><div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div></div>');

body.append(outerDiv);

new Div('#firstDiv');
new Div('#thirdDiv');

var outerDivChildElements = outerDiv.childElements();

outerDivChildElements.forEach(function(outDiverChildElement) {
  var outDivChildElementId = outDiverChildElement.getAttribute('id');

  console.log(outDivChildElementId);    // firstDiv, thirdDiv
});
```

### Creating elements

You can pass jQuery selectors to constructors:

```js
var link = new Link('#link', function(href) {
  console.log('Link click with href ' + href);
});
```

Or you can use HTML snippets or DOM elements with the `fromHTML()` and `fromDOMElement()` factory methods of any relevant class:

```js
var checkboxFromHTML = Checkbox.fromHTML('<input type="checkbox"/>');

var body = Body.fromDOMElement(document.getElementsByTagName('body')[0]);
```

If constructors take handlers or other arguments you can pass these to `fromHTML()` and `fromDOMElement()` methods.

Note that in the second case the `document` is the global document reference, not EasyUI's `document` singleton.

### Cloning elements

You can call the `clone()` method of an element. If your element has an `id` attribute it's best to remove this from the cloned element:
 
```js
var button = new Button('#button'),
    clonedButton = button.clone();
     
clonedButton.removeAttribute('id');
```

You can also use the `clone()` factory methods of the relevant classes and pass jQuery selectors. Again remove the `id` attribute from the cloned element if necessary:

```js
var clonedButton = Button.clone('#button');
     
clonedButton.removeAttribute('id');
```

When you clone an existing element you will need to re-register any click or change handlers. You can pass these straight to the `clone()` methods if you like.

If constructors take handlers or other arguments you can pass these to both instance and static `clone()` methods.

### Adding elements to the DOM
 
The methods to add elements to the DOM are hopefully intuitive. Note the difference between the `append()`, `appendAfter()` and `appendTo()` methods.

```js
var button = Button.fromHTML('<button/>'),
    select = Select.fromHTML('<select><option>a</option></select>');
    
select.appendAfter(button); // what you want, the select and button elements become siblings

select.append(button); // not what you want, the button element would become a child of the select element
```

```js
var body = new Body(),
    form = Element.fromHTML('<form></form>');

body.append(form); // what you want, the form element becomes a child of the body element

form.appendTo(body); // also what you would want, the form element would become a child of the body element
```

Similarly for the prepend methods.

## Supported elements

-  window
-  document
-  Div
-  Span
-  Body
-  Element
-  Link
-  Input
-  Select
-  Button
-  Checkbox
-  TextArea
-  InputElement

The `Window` and `Document` classes are not exported, only singletons, hence the lowercase. Obviously the list is incomplete. Use the `Element` class if there is no relevant class, submit a pull request or roll your own.

## Standard methods

Each element bar the `window` and `document` singletons has the following methods:

- `clone`
- `getPosition`
- `getBounds`
- `getWidth`
- `getHeight`
- `getAttribute`
- `addAttribute`
- `removeAttribute`
- `hasClass`
- `addClass`
- `removeClass`
- `removeClasses`
- `setWidth`
- `setHeight`
- `prependBefore`
- `appendAfter`
- `prepend`
- `append`
- `show`
- `hide`
- `enable`
- `disable`
- `remove`
- `detach`
- `empty`
- `html`
- `css`
- `data`
- `findElements`
- `childElements`
- `parentElement`
- `parentElements`
- `onClick`
- `offClick`
- `onDoubleClick`
- `offDoubleClick`

Each input element, that is `Link`, `Input`, `Select`, `Button`, `Checkbox` or `Textarea` element, has the following methods:

- `hasFocus`
- `onFocus`
- `onBlur`
- `focus`

Look at the source code of the `Element` and `InputElement` classes for signatures and functionality. Mostly these methods ape the functionality of the jQuery methods on which they rely. Aside from that the following notes may help.

## Other shared methods

- `getPosition` returns an instance of the `Position` class.
- `getBounds` returns an instance of the `Bounds` class.
- `on` takes a third, optional `namespace` argument.
- `off` takes a second, optional `namespace` argument.
- `onClick` takes a handler which is invoked every time the left or middle mouse button is clicked and a second, optional `namespace` argument.
- `offClick` takes an optional `namespace` argument.
- `onDoubleClick` takes a handler which is invoked every time the left mouse button is double clicked.
- `offDoubleClick` takes an option `namespace` argument.
- `onMouseXXX` calls the handler with `mouseTop`, `mouseLeft` and `mouseButton` arguments .
- `offMouseXXX` takes an optional namespace argument.
- `findElements` returns an array containing all the descendant elements, taking an optional selector.
- `childElements` returns an array containing all the immediate descendant elements, taking an optional selector.
- `parentElement` returns the immediate ascendant element or null, taking an optional selector.
- `parentElements` returns an array containing all the ascendant elements, taking an optional selector.
- `getWidth`, `getHeight` take two optional arguments, namely `includeBorder` and `includeMargin`, both set to `false` by default.
- `getBounds` takes optional `includeBorder` and `includeMargin` arguments in a similar vein.

## Other methods

The `Input`, `TextArea` and `Select` classes have the following methods:

- `onChange` takes a handler which is invoked when the value of the element changes, plus an optional second `namespace` argument. The behaviour is the same as the underlying jQuery behaviour, namely thaht for select boxes the handler is invoked immediately when the user makes a selection with the mouse, but for other elements the handler is invoked only when the element in question loses the focus.
- `offChange` takes an optional `namespace` argument.

The `Input` and `TextArea` classes both have the following methods:

- `getSelectionStart`
- `getSelectionEnd`
- `setSelectionStart`
- `setSelectionEnd`

The `TextArea` class has the following methods:
 
- `onScroll` takes a handler which is invoked when the text area is scrolled with arguments `scrollTop` and `scrollLeft`.
- `getScrollTop` 
- `getScrollLeft` 
- `setScrollTop`
- `setScrollLeft`

Both the `window` and `document` singletons have the following methods, which are identical to the corresponding ones described above:

- `on`
- `off`

The `window` singleton and all but the `Input` and `Textarea` classes have the following methods:

- `onResize`
- `offResize`

However the behaviour of these methods is different. In the case of the `window` singleton, they are no more than a shorthand for `on('resize', ...)` and `off('resize', ...)` and behave in the same way, that is taking a third, optional `namespace` argument. In the case of the other elements, however, there is no optional namespace and the `offResize()` method must be passed the same handler that was passed to the `onResize()` method in order to de-register it. Additionally they will pass `width` and `height` arguments to the handlers.

***Note that you must explicitly set the `position` style attribute of an element to `relative` in order for its `onResize()` method to work.*** This was thought to be a better approach than setting it on the sly. It can be done dynamically with JavaScript or alternatively with CSS.

## Rolling your own elements

We use the existing `Div` element as an example:

```js
class Div extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Div.clone(this); }

  static clone(selectorOrElement) {
    return Element.clone(Div, selectorOrElement);
  }

  static fromHTML(html) {
    return Element.fromHTML(Div, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Div, domElement);
  }
}
```

You can use the private `$element` property to abstract away from jQuery functionality, as in the `Checkbox` element:
    
```js
class Checkbox extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Checkbox.clone(this, changeHandler); }
  
  ...

  isChecked() {
    return this.$element.is(':checked');
  }
  
  ...
}
```

## Contact

- james.smith@djalbat.com
- http://djalbat.com
