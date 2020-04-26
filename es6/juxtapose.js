"use strict";

import { React } from "./index";

Object.defineProperty(window, "React", {
  get: function() {
    return React;
  }
});
