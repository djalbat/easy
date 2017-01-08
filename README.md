# EasyUI

A V-framework.

EasyUI is an MVC framework without the M and without the C. It's without a model, only abstracting away from the view, namely the document object model. There is some irony here. It's without a controller, or whatever. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches. 

It leverages jQuery to provide a very basic set of classes for elements such as buttons, links, etc. It covers up jQuery's idiosyncratic syntax and is hopefully a bit more readable. It allows you to associate JavaScript classes directly with static HTML, you don't have to dynamically create DOM elements unless you want to.

## Related projects

- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout elements that work with CSS flexbox.
- [EasyUI-DragAndDrop](https://github.com/djalbat/EasyUI-DragAndDrop) Drag and drop elements including a file explorer and a rubbish bin.

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

To use EasyUI in the browser, take the `easyui.js` file from the project's `dist/` folder and put it somewhere such as a `public/scripts/lib` directory. Referencing this distribution file from a `script` element...

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

var outDivChildElements = outerDiv.childElements();

outDivChildElements.forEach(function(outDivChildElement) {
  var outDivChildElementId = outDivChildElement.getAttribute('id');

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

Note that in the second case the `document` is the global document reference, not EasyUI's `document` singleton.

If constructors take change or click handlers you can pass these to `fromHTML()` methods.

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

### Adding elements to the DOM
 
The methods to add elements to the DOM are hopefully intuitive. Note the difference between the `append()` and `appendAfter()` methods.

```js
var button = Button.fromHTML('<button/>'),
    select = Select.fromHTML('<select><option>a</option></select>');
    
select.appendAfter(button); // what you want
select.append(button); // probably not what you want
```

The `appendAfter()` call above results in the following HTML:

```html
<select><option>a</option></select></button>
```

The `append()` call above results in the following HTML and is probably not what you want in this instance:

```html
<select><option>a</option></button></select>
```

Similarly for the `prepend()` and `prependBefore()` methods.

## Supported elements

- `window`
- `document`
- `Body`
- `Div`
- `Button`
- `Checkbox`
- `TextArea`
- `Input`
- `Link`
- `Select`

The `Window` and `Document` classes are not exported, only singletons.

Obviously the list is incomplete. Use the `Element` class if there is no relevant class, submit a pull request or roll your own.

## Standard methods

Each element has the following methods:

- `show`
- `hide`
- `enable`
- `disable`
- `remove`
- `detach`
- `empty`
- `getWidth`
- `getHeight`
- `setWidth`
- `setHeight`
- `getAttribute`
- `addAttribute`
- `removeAttribute`
- `prependBefore`
- `appendAfter`
- `prepend`
- `append`
- `hasClass`
- `addClass`
- `removeClass`
- `removeClasses`
- `html`
- `css`
- `data`
- `on`

The `getWidth` and `getHeight` methods take two optional arguments, namely `includeBorder` and `includeMargin`, both set to `false` by default. To make use of the second argument, the first must be given explicitly.

Each input element has the following additional methods:

- `hasFocus`
- `onFocus`
- `onBlur`
- `focus`

## Other shared methods

- `getPosition` returns an instance of the `Position` class.
- `getBounds` returns an instance of the `Bounds` class.
- `on` takes a third, optional `namespace` argument.
- `off` takes a second, optional `namespace` argument.
- `onClick` takes a handler which is invoked every time the left or middle mouse button is clicked and a fourth, optional `namespace` argument. The second and third optional arguments are explained below.
- `offClick` takes an optional `namespace` argument.
- `onDoubleClick` takes a handler which is invoked every time the left mouse button is double clicked.
- `offDoubleClick` takes an option `namespace` argument.
- `onMouseXXX` calls the handler with `mouseTop`, `mouseLeft` and `mouseButton` arguments .
- `offMouseXXX` takes an optional namespace argument.
- `findElements` returns an array containing all the descendant elements, taking an optional selector.
- `childElements` returns an array containing all the immediate descendant elements, taking an optional selector.
- `parentElement` returns the immediate ascendant element or null, taking an optional selector.
- `parentElements` returns an array containing all the ascendant elements, taking an optional selector.

The `getBounds` method takes optional `includeBorder` and `includeMargin` arguments in a similar vein to the `getWidth` and `getHeight` methods.

The value of the third `mouseButton` argument of the handler passed to the `onMouseXXX` method is either `Element.LEFT_MOUSE_BUTTON`, `Element.MIDDLE_MOUSE_BUTTON` or `Element.RIGHT_MOUSE_BUTTON`. If you want the native event object passed to callbacks instead, use the `on()` method. 

The second `button` argument of the `onClick` method is an optional value specifying the mouse button, the default value being `Element.LEFT_MOUSE_BUTTON` and the other being `Element.MIDDLE_MOUSE_BUTTON`. Only the left and middle mouse buttons are supported, not the right button. The third `allowDefault` argument specifies whether the browser's default behaviour is allowed. The default is `false`. The fourth argument is the standard optional `namespace` argument. The `Button` constructor the first two of these optional arguments in addition to the standard first `selector` and second `clickHandler` argument.
  
In the case of the `Link` class, the click handler is passed the value of the underlying element's `href` attribute. 

## Other methods

The `Input`, `TextArea` and `Select` classes have the following method:

- `onChange` takes a handler which is invoked when the value of the element changes, plus an optional second `namespace` argument. The behaviour is the same as the underlying jQuery behaviour, namely thaht for select boxes the handler is invoked immediately when the user makes a selection with the mouse, but for other elements the handler is invoked only when the element in question loses the focus.
- `offChange` takes an optional `namespace` argument.

The `Input` and `TextArea` classes both have the following methods:

- `getSelectionStart`
- `getSelectionEnd`

The `TextArea` class has the following methods:
 
- `onScroll` takes a handler which is invoked when the text area is scrolled
- `getScrollTop` 
- `getScrollLeft` 
- `setScrollTop`
- `setScrollLeft`

The `window` singleton and all but the `Input` and `Textarea` classes have the following methods:

- `onResize`
- `offResize`

Both take a handler that is passed `width` and `height` arguments when the resize event is fired. ***Note that you must explicitly set the `position` style attribute of an element to `relative` in order for its `onResize()` method to work.*** This was thought to be a better approach than setting it on the sly. It can be done dynamically with JavaScript or alternatively with CSS.

Only the `document` singleton has the following methods:

- `onKeyUp` 
- `onKeyDown`

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
