"use strict";

import { Textarea, Checkbox, Button, constants } from "../index";  ///

const { LEFT_MOUSE_BUTTON } = constants;

const View = (properties) =>

  <div className="view">
    <Checkbox checked
              onChange={(event, element) => {

                console.log('Changed')

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
    <div onResize={(event, element) => {

           const width = element.getWidth(),
                 height = element.getHeight();

           console.log(width, height)

         }}
         onMouseMove={(event, element) => {

           const { pageX, pageY } = event;

           console.log(pageX, pageY)

         }}
    >
      <p>
        A paragraph contained in a div with resize and mouse move handlers.
      </p>
    </div>
  </div>

;

export default View;
