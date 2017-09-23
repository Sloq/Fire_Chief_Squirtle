import TemporaryObject from './temporary_object';
import Sprite from './sprite';

class LargeGem extends TemporaryObject {
  constructor(img, sootX, sootY) {
    const start_gem = new Sprite(img, 4, 130, 14, 14);
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
        new Sprite(img, 21, 130, 14, 14),
        new Sprite(img, 38, 130, 14, 14),
        new Sprite(img, 55, 130, 14, 14)];

    super('gem', sprites[0], sootX, sootY, 21, 21, 200);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    this.value = 50;
  }

  update() {
      super.update()
      this.spriteTicker += 1;
      if (this.spriteTicker >= 2) {
        this.spriteTicker = 0;
        this.spriteRotation = (this.spriteRotation + 1) % 14;
        this.sprite = this.sprites[this.spriteRotation];
      }
  }
}

export default LargeGem;