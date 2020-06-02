"use strict";

import { Button, constants } from "../../index";  ///

const { LEFT_MOUSE_BUTTON } = constants;

export default class SubmitButton extends Button {
  childElements(properties) {
    return "Submit";
  }

  static defaultProperties = {
    className: "submit"
  };

  initialise(properties) {
    this.onClick((event, element) => {
      const { button } = event;

      console.log(button === LEFT_MOUSE_BUTTON)
    });
  }

  static fromClass(Class, properties) {
    const submitButton = Button.fromClass(Class, properties);

    submitButton.initialise(properties);

    return submitButton;
  }
}
