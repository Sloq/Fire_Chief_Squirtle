import TemporaryObject from './temporary_object';
import Sprite from './sprite';

class MediumGem extends TemporaryObject {
  constructor(img, sootX, sootY) {
    const start_gem = new Sprite(img, 149, 19, 10, 18);
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
        new Sprite(img, 162, 19, 10, 18),
        new Sprite(img, 175, 19, 10, 18),
        new Sprite(img, 188, 19, 10, 18),
        new Sprite(img, 201, 19, 10, 18)];

    super('gem', sprites[0], sootX, sootY, 15, 27, 200);

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
        this.spriteRotation = (this.spriteRotation + 1) % 15;
        this.sprite = this.sprites[this.spriteRotation];
      }
  }
}

export default MediumGem;