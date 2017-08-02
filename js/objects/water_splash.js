import TemporaryObject from './temporary_object';
import Sprite from './sprite';

class WaterSplash extends TemporaryObject {
  constructor(img, squirtleX, squirtleY) {
    // this.size = { x: 30, y: 38 };
    const sprite = new Sprite(img, 60, 0, 13, 13);
    super('water', sprite, squirtleX, squirtleY, 26, 26, 15);
  }
}

export default WaterSplash;
