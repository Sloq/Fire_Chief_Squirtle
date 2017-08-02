import MovingObjects from './moving_objects';

class TemporaryObject extends MovingObjects {
  constructor(type, sprite, x, y, width, height, lifeSpan) {
    super(type, sprite, x, y, width, height);
    this.lifeSpan = lifeSpan;
  }

  update() {
    this.lifeSpan -= 1;
  }
}

export default TemporaryObject;
