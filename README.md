# EasyUI

A V-framework.

EasyUI is an MVC framework without the M and without the C. It's without a model, only abstracting away from the view, namely the document object model. There is some irony here. It's without a controller, or whatever. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches. 

It leverages jQuery to provide a very basic set of classes for elements such as buttons, links, etc. It covers up jQuery's idiosyncratic syntax and is more readable. It allows you to associate JavaScript classes directly with static HTML, you don't have to dynamically create DOM elements unless you want to. Few frameworks allow you to do this without fuss.

It's liberating to cast off the dogma that says that an application's view and model always have to be two sides of the exact same coin. And you won't have to wade through hundreds of lines of obscure source code when things slow down or start to go wrong. The nearest thing to EasyUI is ReactJS but EasyUI is an order of magnitude less complex. 

## Related projects

- [Florence](https://github.com/jecs-imperial/Florence) A collaborative proof assistant that depends on all three EasyUI projects. 
- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout elements that work with CSS flexbox.
- [EasyUI-DragAndDrop](https://github.com/djalbat/EasyUI-DragAndDrop) Drag and drop elements including a file explorer and rubbish bin. 
 
## Installation

If you're running [Node.js](http://nodejs.org) you can install EasyUI with [npm](https://www.npmjs.com/):

    npm install easyui

Client-side you can take the `easyui.js` file in the `dist/` folder put it somewhere and reference it via the usual script element:
 
```html
<script src="scripts/lib/easyui.js"> </script>
```

This will give you a global `easyUI` variable which you use directly:
  
```js
var Button = easyUI.Button;
```
 
If you're using AMD require client-side or CommonJS server-side the syntax for requiring EasyUI is much the same:

```js
var easyUI = require('lib/easyui'),
    Select = easyUI.Select,
    Checkbox = easyUI.Checkbox;
```

## Documentation

See the `examples.html` file in the `docs/` folder for some examples.

#### Working example

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

#### Creating elements 

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

#### Cloning elements

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

#### Standard methods

Each element has the following methods. These do nothing much apart from abstract away from jQuery functionality:

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

Each input element has the following additional methods:

- `hasFocus`
- `onFocus`
- `onBlur`
- `focus`

#### Other shared methods

- `getPosition` returns an instance of the `Position` class with the `top` and `left` position of the element relative to the offset parent.
- `getBounds` returns an instance of the `Bounds` class with the `top`, `left`, `bottom` and `right` bounds of the element relative to the document.
- `on` abstracts away from jQuery functionality except that it accepts a third, optional argument for the namespace
- `off` abstracts away from jQuery functionality except that it accepts a second, optional argument for the namespace
- `onMouseXXX` each abstracts away from jQuery functionality except that it calls the handler with `mouseTop`, `mouseLeft` and `mouseButton` rather than the event object. If you want the event object, use the `on()` method. The value of the `mouseButton` argument is either `Element.LEFT_MOUSE_BUTTON`, `Element.MIDDLE_MOUSE_BUTTON` or `Element.RIGHT_MOUSE_BUTTON`. A namespace can be passed as a second, optional argument.
- `offMouseXXX` each abstracts away from jQuery functionality. A namespace can be passed as an optional argument.
- `findElements` returns an array containing all the descendant elements, taking an optional selector
- `childElements` returns an array containing all the immediate descendant elements, taking an optional selector
- `parentElement` returns the immediate ascendant element or null, taking an optional selector
- `parentElements` returns an array containing all the ascendant elements, taking an optional selector

#### Other methods

The `Input` and `TextArea` classes both have the following methods:

- `onChange` takes a handler which is invoked every time the value of the element changes by way of a keypress.
- `getSelectionStart`
- `getSelectionEnd`

Note that the behaviour of the `onChange` method is different from the jQuery method it abstracts away from.

The `TextArea` class has the following methods:
 
- `onScroll` takes a handler which is invoked when the text area is scrolled
- `getScrollTop` 
- `getScrollLeft` 
- `setScrollTop`
- `setScrollLeft`

The `window` singleton only has one `onResize` method, the `document` singleton has the `onKeyUp` and `onKeyDown` methods.

Other elements may have still other methods, please check the source!

#### Adding elements to the DOM
 
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

#### Supported elements:

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

#### Rolling your own elements

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

  clone(changeHandler) { return Checkbox.clone(this.$element, changeHandler); }
  
  ...

  isChecked() {
    return this.$element.is(':checked');
  }
}
```

## Contact

- james.smith@djalbat.com
- http://djalbat.com
