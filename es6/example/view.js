"use strict";

import { Textarea } from "../index";

import SubmitButton from "./button/submit";

const View =

  <div className="view">
    <SubmitButton />
    <Textarea onScroll={(event, element) => {

      const scrollTop = element.getScrollTop(),
            scrollLeft = element.getScrollLeft();

      console.log(scrollTop, scrollLeft)

    }}
    />
    <div className="grey"
         onResize={(event, element) => {

           const width = this.getWidth(),
                 height = this.getHeight();

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
