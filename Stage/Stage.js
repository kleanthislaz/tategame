/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("School", "./Stage/costumes/School.png", { x: 480, y: 360 }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 196.67709662379988,
        y: 91.05489090894767
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.score = 28;
    this.vars.vapeSpeed = 2;
    this.vars.speed = 6;

    this.watchers.score = new Watcher({
      label: "score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 245,
      y: 175
    });
  }
}
