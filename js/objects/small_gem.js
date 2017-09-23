import TemporaryObject from './temporary_object';
import Sprite from './sprite';

class SmallGem extends TemporaryObject {
  constructor(img, sootX, sootY) {
    const start_gem = new Sprite(img, 133, 17, 11, 11);
    const sprites = [start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        new Sprite(img, 133, 3, 11, 11),
        new Sprite(img, 147, 3, 11, 11),
        new Sprite(img, 161, 3, 11, 11),
        new Sprite(img, 175, 3, 11, 11),
        new Sprite(img, 189, 3, 11, 11),
        new Sprite(img, 203, 3, 11, 11)];

    super('gem', sprites[0], sootX, sootY, 22, 22, 200);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    this.value = 25;
  }

  update() {
      super.update()
      this.spriteTicker += 1;
      if (this.spriteTicker >= 2) {
        this.spriteTicker = 0;
        this.spriteRotation = (this.spriteRotation + 1) % 17;
        this.sprite = this.sprites[this.spriteRotation];
      }
  }
}

export default SmallGem;