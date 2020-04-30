"use strict";

import "./juxtapose"; ///

import { Body, window } from "./index";

import View from "./example/view"

const body = new Body();

body.prepend(

  <View />

);

window.onResize((event, element) => {

  const width = window.getWidth(),
        height = window.getHeight();

  console.log(width, height)

});
