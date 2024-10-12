"use strict";

import { Element } from "../../index";  ///

export default class Div extends Element {
  mouseMoveHandler = (event, element) => {
    const { pageX, pageY } = event;

    console.log(pageX, pageY)
  }

  resizeHandler = (event, element) => {
    const width = this.getWidth(),
          height = this.getHeight();

    console.log(width, height)
  }

  didMount() {
    this.onResize(this.resizeHandler, this);
    this.onMouseMove(this.mouseMoveHandler, this);
  }

  willUnmount() {
    this.offMouseMove(this.mouseMoveHandler, this);
    this.offResize(this.resizeHandler, this);
  }

  childElements() {
    return (

      <p>
        A paragraph contained in a div with resize and mouse move handlers.
      </p>

    );
  }

  static tagName = "div";
}
