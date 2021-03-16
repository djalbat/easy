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
