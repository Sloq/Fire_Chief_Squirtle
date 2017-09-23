import TemporaryObject from './temporary_object';
import Sprite from './sprite';

class Diamond extends TemporaryObject {
  constructor(img, sootX, sootY) {
    const start_gem = new Sprite(img, 3, 114, 15, 12);
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
        new Sprite(img, 21, 114, 15, 12),
        new Sprite(img, 39, 114, 15, 12),
        new Sprite(img, 57, 114, 15, 12),
        new Sprite(img, 75, 114, 15, 12)];

    super('gem', sprites[0], sootX, sootY, 23, 18, 200);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    this.value = 100;
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

export default Diamond;