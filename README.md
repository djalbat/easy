# Easy

Elements that abstract away from the DOM.

A set of classes that abstract away from the browser's document object model so that you can easily create elements with underlying DOM elements and the methods to manipulate them. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches.

If you like Easy you might like [Easy with Style](https://github.com/djalbat/easy-with-style).

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Easy projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Gestures](https://github.com/djalbat/easy-gestures) Touch gestures for web applications.
- [Easy Navigation](https://github.com/djalbat/easy-navigation) A responsive accordion and associated navigation.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy Rich Textarea](https://github.com/djalbat/easy-richtextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy with [npm](https://www.npmjs.com/):

    npm install easy

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Typically you should create a view and mount it to the DOM's body element. This can be done by instantiating the `Body` class and appending the view to it:

```
import { Body } from "easy";

import View from "./view";

const body = new Body();

body.mount(

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

Obviously the list is incomplete. If you want to create other elements, you can extend the `Element` class.

## API

Please see the source and the examples for guidance. The following files will be helpful:

- `element.js`
- `window.js`
- `document.js`
- `textElement.js`

Also the mixins files will be useful Here are some of them:

- `mixins/event.js`
- `mixins/element.js`
- `mixins/customEvent.js`

Perhaps an API reference will follow someday. The examples in the other Easy projects, given close to the top of this file, really are the best place to look.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

* The SVG tag and attribute names were taken from Titus Wormer's [svg-element-attributes](https://github.com/wooorm/svg-element-attributes) package.

## Contact

* james.smith@djalbat.com
