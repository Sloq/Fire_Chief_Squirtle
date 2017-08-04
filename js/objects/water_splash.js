import TemporaryObject from './temporary_object';
import Sprite from './sprite';

class WaterSplash extends TemporaryObject {
  constructor(img, squirtleX, squirtleY) {
    const sprite = new Sprite(img, 60, 0, 13, 13);
    super('water', sprite, squirtleX, squirtleY, 26, 26, 18);
  }
}

export default WaterSplash;
