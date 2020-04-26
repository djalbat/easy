"use strict";

import "./juxtapose"; ///

import { Body, Button, Checkbox, Link, Select, Input, Textarea, constants } from "./index";

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

      ;

button.on("auxclick", (event, element) => {

  const { button } = event;

  console.log(button === MIDDLE_MOUSE_BUTTON);

});

body.prepend(

  <article>
    <h1>
      Easy
    </h1>
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
    />
    <br />
    <Textarea onChange={(event, element) => {

                console.log(element.getValue())

              }}
    />
  </article>

);
