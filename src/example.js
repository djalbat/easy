"use strict";

import "./example/preamble";

import { Body } from "./index";  ///

import View from "./example/view"

const body = new Body();

body.mount(

  <View/>

);
