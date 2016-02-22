# EasyUI

A V-framework.

EasyUI is an MVC framework without the M and without the C. It's without a model, only abstracting away from the view, namely the document object model. There is some irony here. It's without a controller, or whatever. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches. 

It leverages jQuery to provide a very basic set of classes for DOM elements such as buttons, links, etc. It covers up jQuery's idiosyncratic syntax and is more readable. It allows you to associate JavaScript classes directly with static HTML, you don't have to dynamically create DOM elements unless you want to. Few frameworks allow you to do this without fuss.

It's liberating to cast off the dogma that says that an application's view and model always have to be two sides of the exact same coin. And you won't have to wade through hundreds of lines of obscure source code when things slow down or start to go wrong. The nearest thing to EasyUI is ReactJS but EasyUI is an order of magnitude less complex. 

## Related projects

- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout components that work with CSS flexbox.
- [EasyUI-Explorer](https://github.com/djalbat/EasyUI-Explorer) A file explorer with drag and drop functionality. 
- [Florence](https://github.com/jecs-imperial/Florence) A collaborative proof assistant that depends on all three EasyUI projects. 
 
## Installation

If you're running [Node.js](http://nodejs.org) you can install EasyUI with [npm](https://www.npmjs.com/):

    npm install easyui

Client-side you can take the `easyui.js` file in the `dist/` folder put it somewhere and reference it via the usual script element:
 
```html
<script src="scripts/lib/easyui.js"> </script>
```

This will give you a global `easyui` variable which you use directly:
  
```js
var Button = easyui.Button;
```
 
If you're using AMD require client-side or CommonJS server-side the syntax for requiring EasyUI is the same:

```js
var easyui = require('lib/easyui'),
    Select = easyui.Select,
    Checkbox = easyui.Checkbox;
```

jQuery is not bundled with EasyUI so you will need to include it explicitly whichever way you feel is best.

## Documentation

See the `examples.html` file in the `docs/` folder for some examples. 

#### Creating elements 

You can pass jQuery selectors to constructors:

```js
var link = new Link('#link', function(href) {
  console.log('Link click with href ' + href);
});
```

Or you can use HTML snippets with the `fromHTML()` factory method of any relevant class:

```js
var checkboxFromHTML = Checkbox.fromHTML('<input type="checkbox"/>');
```

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

Each element class extends the `Element` class and therefore has the same standard methods. These do nothing much apart from ape jQuery functionality:

- `show`
- `hide`
- `enable`
- `disable`
- `getWidth`
- `getHeight`
- `setWidth`
- `setHeight`
- `addAttribute`
- `removeAttribute`
- `prependBefore`
- `appendAfter`
- `prepend`
- `append`
- `remove`
- `hasClass`
- `addClass`
- `removeClass`
- `removeClasses`
- `html`
- `css`
- `on`

#### Other methods

- `getBounds`, returns an instance of the `Bounds` class with the `top`, `left`, `bottom` and `right` bounds of the element.
- `onMouseXXX`, each apes jQuery functionality except that it calls the handler with `mouseTop`, `mouseLeft` and `mouseButton` rather than the event object. If you want the event object, use the `on()` method. The value of the `mouseButton` argument is either `Element.LEFT_MOUSE_BUTTON`, `Element.MIDDLE_MOUSE_BUTTON` or ``Element.RIGHT_MOUSE_BUTTON`.


The methods to add elements to the DOM are hopefully intuitive. Note the difference between the `append()` and `appendAfter()` methods. 

```js
var button = Button.fromHTML('<button/>'),
    select = Select.fromHTML('<select><option>a</option></select>');
    
select.appendAfter(button); // what you want
select.append(button); // not what you want
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

- `Body`
- `Button`
- `Checkbox`
- `Input`
- `Link`
- `Select`

Obviously the list is incomplete. Use the `Element` class if there is no relevant class or submit a pull request!

## Contact

- james.smith@djalbat.com
- http://djalbat.com
