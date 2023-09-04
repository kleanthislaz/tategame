import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import PixilartDrawing from "./PixilartDrawing/PixilartDrawing.js";
import MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview from "./MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview/MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  PixilartDrawing: new PixilartDrawing({
    x: 124,
    y: -88,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 400,
    visible: true,
    layerOrder: 1
  }),
  MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview: new MyBluMyblurVapeDeviceBlueedition1446461397RemovebgPreview(
    {
      x: 174,
      y: -154.1436309814453,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 50,
      visible: true,
      layerOrder: 2
    }
  ),
  Sprite1: new Sprite1({
    x: 106,
    y: -9,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
