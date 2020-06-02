"use strict";

import { React, Body, window } from "./index";  ///

import View from "./example/view"

window.assign({
  React
});

const body = new Body();

body.mount(

  <View />

);

// window.onResize((event, element) => {
//
//   const width = window.getWidth(),
//         height = window.getHeight();
//
//   console.log(width, height)
//
// });
