"use strict";

import "./juxtapose"; ///

import { Element, Body, Button, Checkbox, Link, Select, Input, Textarea, window, document, constants } from "./index";

class SubmitButton extends Button {
  childElements(properties) {
    return "Submit";
  }

  static fromProperties(properties) { return Element.fromProperties(SubmitButton, properties); }
}

const { LEFT_MOUSE_BUTTON, MIDDLE_MOUSE_BUTTON } = constants,
      body = new Body(),
      button =

        <Button onClick={(event, element) => {

                  const { button } = event;

                  console.log(button === LEFT_MOUSE_BUTTON)

                }}
        >
          A button
        </Button>

      ,
      div =

        <div onClick={(event, element) => {

               const { pageY, pageX } = event;

               console.log(pageX, pageY)

             }}
             onMouseMove={(event, element) => {

               const { pageY, pageX } = event;

               console.log(pageX, pageY)

             }}
        />

      ;

button.on("auxclick", (event, element) => {

  const { button } = event;

  console.log(button === MIDDLE_MOUSE_BUTTON);

});

div.onResize((event, element) => {

  const width = element.getWidth(),
        height = element.getHeight();

  console.log(width, height)

});

body.prepend(

  <article>
    <h1>
      Easy
    </h1>
    <br />
    <SubmitButton />
    <br />
    {button}
    <br />
    <Checkbox checked
              onChange={(event, element) => {

                console.log(element.isChecked())

              }}
    />
    <br />
    <Link href="http://juxtapose.info"
          onClick={(event, element) => {

            event.preventDefault();

            console.log(element.getAttribute("href"))

          }}
    >
      A link
    </Link>
    <br />
    <Select onChange={(event, element) => {

              console.log(element.getSelectedOptionValue())

            }}
    >
      <option value="1">one</option>
      <option value="2">two</option>
      <option value="3">three</option>
    </Select>
    <br />
    <Input type="password"
           onChange={(event, element) => {

             console.log(element.getValue())

           }}
           onKeyUp={(event, element) => {

             const { keyCode } = event;

             console.log(keyCode)

           }}
    />
    <br />
    <Textarea onChange={(event, element) => {

                console.log(element.getValue())

              }}
              onKeyDown={(event, element) => {

                const { keyCode } = event;

                console.log(keyCode)

              }}
              onScroll={(event, element) => {

                const scrollTop = element.getScrollTop(),
                      scrollLeft = element.getScrollLeft();

                console.log(scrollTop, scrollLeft)

              }}
    />
    {div}
  </article>

);

document.onClick((event, element) => {

  const { screenX, screenY } = event;

  console.log(screenX, screenY)

});

window.onClick((event, element) => {
  const width = window.getWidth(),
        height = window.getHeight();

  console.log(width, height)

});
