"use strict";

import { Element } from "../index";  ///

import Div from "./view/div";

export default class View extends Element {
  childElements() {
    return (

      <Div/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
