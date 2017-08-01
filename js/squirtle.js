import Keyboarder from './keyboarder';
import MovingObjects from './moving_objects';
import Sprite from './sprite';

class Squirtle extends MovingObjects {
  constructor(img, gameSize) {
    const sprite = new Sprite(img, 1, 25, 17, 18);
    // constructor(type, sprite, x, y, width, height)
    // this.size = { x: 30, y: 38 };
    // this = { x: gameSize.x/2, y: gameSize.y/2 - this.size.y};
    super('squirtle', sprite, gameSize.x/2, gameSize.y/2, 30, 38);

    this.gameSize = gameSize;
    this.keyboarder = new Keyboarder();
    this.alive = true;
  }

  update(collisions) {
    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited) {
        this.alive = false;
      }
    });
    if (this.alive) {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        if (this.x >= 0) {
          this.x -= 2;
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        if (this.x <= this.gameSize.x-17) {
          this.x += 2;
        }
      }

      if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
        if (this.y >= 60 ){
          this.y -= 2;
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
        if (this.y <= this.gameSize.y-34 ) {
          this.y += 2;
        }
      }
    }
  }
}

export default Squirtle;
