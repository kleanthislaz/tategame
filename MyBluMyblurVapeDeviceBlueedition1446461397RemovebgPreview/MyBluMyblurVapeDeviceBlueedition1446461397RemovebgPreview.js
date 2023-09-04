/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "my-blu-myblur-vape-device-blueedition-1446461397-removebg-preview",
        "./MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview/costumes/my-blu-myblur-vape-device-blueedition-1446461397-removebg-preview.png",
        { x: 250, y: 250 }
      )
    ];

    this.sounds = [
      new Sound(
        "Andrew-Tate-breathe-air-meme-Sound-Effect",
        "./MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview/sounds/Andrew-Tate-breathe-air-meme-Sound-Effect.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.stage.vars.vapeSpeed = 0;
    this.stage.vars.speed = 0;
    this.stage.costume = "School";
    this.visible = true;
    this.goto(this.random(-220, 220), 220);
    while (true) {
      /* TODO: Implement motion_ifonedgebounce */ null;
      this.direction = 90;
      this.y += -5 - this.toNumber(this.stage.vars.vapeSpeed);
      if (this.touching(this.sprites["PixilartDrawing"].andClones())) {
        this.goto(this.random(-220, 220), 220);
        yield* this.startSound("Andrew-Tate-breathe-air-meme-Sound-Effect");
        this.stage.vars.score++;
        this.stage.vars.speed++;
      }
      if (this.compare(this.stage.vars.speed, 10) > 0) {
        this.stage.vars.vapeSpeed++;
        this.stage.vars.speed = 0;
      }
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.costume = "backdrop1";
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
