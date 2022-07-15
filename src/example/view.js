"use strict";

import { Textarea, Button, buttons, Element } from "../index";  ///

import Checkbox from "./checkbox";

const { LEFT_MOUSE_BUTTON } = buttons;

export default class View extends Element {
  childElements() {
    return ([

      <Checkbox onChange={(event, element) => {
                  console.log("Changed")
                }}
                checked
      />,
      <Textarea onChange={(event, element) => {
                  console.log("change")
                }}
                onScroll={function(event, element) {  ///
                  const scrollTop = this.getScrollTop(),
                        scrollLeft = this.getScrollLeft();

                  console.log(scrollTop, scrollLeft)
                }}
      />,
      <Button onClick={(event, element) => {
                const { button } = event;

                console.log(button === LEFT_MOUSE_BUTTON)
              }}
      >
        Submit
      </Button>,
      <Div/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

class Div extends Element {
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
