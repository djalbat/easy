"use strict";

import { Textarea, Checkbox, Button, constants, Element } from "../index";  ///

const { LEFT_MOUSE_BUTTON } = constants;

const View = (properties) =>

  <div className="view">
    <Checkbox checked
              onChange={(event, element) => {
                console.log("Changed")
              }}
    />
    <Textarea onChange={(event, element) => {
                console.log("change")
              }}
              onScroll={function(event, element) {  ///
                const scrollTop = this.getScrollTop(),
                      scrollLeft = this.getScrollLeft();

                console.log(scrollTop, scrollLeft)
              }}
    />
    <Button onClick={(event, element) => {
              const { button } = event;

              console.log(button === LEFT_MOUSE_BUTTON)
            }}
    >
      Submit
    </Button>
    <Div />
  </div>

;

export default View;

class Div extends Element {
  resizeHandler(event, element) {
    const width = this.getWidth(),
          height = this.getHeight();

    console.log(width, height)
  }

  mouseMoveHandler(event, element) {
    const { pageX, pageY } = event;

    console.log(pageX, pageY)
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
