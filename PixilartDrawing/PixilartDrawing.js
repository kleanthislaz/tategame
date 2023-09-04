/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixilartDrawing extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixilart-drawing",
        "./PixilartDrawing/costumes/pixilart-drawing.png",
        { x: 100, y: 100 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10 + this.toNumber(this.stage.vars.vapeSpeed);
      }
      if (this.keyPressed("left arrow")) {
        this.x += -10 - this.toNumber(this.stage.vars.vapeSpeed);
      }
      if (this.compare(this.stage.vars.speed, 10) > 0) {
        this.stage.vars.vapeSpeed++;
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      this.direction = 90;
      yield;
    }
  }
}
