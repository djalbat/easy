"use strict";

import { React, Body, window } from "./index";

import View from "./example/view"

Object.assign(window, {
  React
});

const body = new Body();

body.prepend(

  <View />

);

window.onResize((event, element) => {

  const width = window.getWidth(),
        height = window.getHeight();

  console.log(width, height)

});
