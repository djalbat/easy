"use strict";

import { Textarea } from "../index";

import SubmitButton from "./button/submit";

const View = (properties) =>

  <div className="view">
    <SubmitButton />
    <Textarea onScroll={function(event, element) {

      const scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft();

      console.log(scrollTop, scrollLeft)

    }}
    />
    <div className="grey"
         onResize={(event, element) => {

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
