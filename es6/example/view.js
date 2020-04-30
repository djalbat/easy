"use strict";

import { Element, Textarea } from "../index";

import SubmitButton from "./button/submit";

export default class View extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  childElements(properties) {
    return ([

      <SubmitButton />,
      <Textarea onScroll={(event, element) => {

                  const scrollTop = element.getScrollTop(),
                        scrollLeft = element.getScrollLeft();

                  console.log(scrollTop, scrollLeft)

                }}
      />,
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
      />,

    ]);
  }
}
