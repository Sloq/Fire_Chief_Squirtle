import TemporaryObject from './temporary_object';
import Sprite from './sprite';

class WaterSplash extends TemporaryObject {
  constructor(img, squirtleX, squirtleY) {
    const sprite = new Sprite(img, 58, 0, 16, 16);
    super('water', sprite, squirtleX, squirtleY, 32, 32, 18);
  }
}

export default WaterSplash;
