import Keyboarder from '../keyboarder';
import MovingObjects from './moving_objects';
import Sprite from './sprite';
import WaterSplash from './water_splash';

class Squirtle extends MovingObjects {
  constructor(game, img, gameSize) {
    let sprite = new Sprite(img, 1, 25, 17, 19);
    super('squirtle', sprite, gameSize.x/2, gameSize.y/2, 34, 38);
    this.img = img;
    this.sprite = sprite;
    this.gameSize = gameSize;
    this.keyboarder = new Keyboarder();
    this.isDead = false;
    this.facing = 6;
    this.game = game;
    this.spaceDown = Date.now();
  }

  update(collisions) {
    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited) {
        this.isDead = true;
        this.sprite = new Sprite(this.img, 1, 45, 17, 19);
      }
    });

    let spaceDown = false;
    if (!this.isDead) {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        if (this.x >= 0) {
          this.x -= 2;
          this.facing = 9;
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        if (this.x <= this.gameSize.x-17) {
          this.x += 2;
          this.facing = 3;
        }
      }

      if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
        if (this.y >= 40 ){
          this.y -= 2;
          this.facing = 12;
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
        if (this.y <= this.gameSize.y-34 ) {
          this.y += 2;
          this.facing = 6;
        }
      }
      let time = Date.now();
      if  (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) && (time-this.spaceDown > 500)) {
        this.spaceDown = time;
        let splashPositionX = this.x + 3;
        let splashPositionY = this.y;
        if (this.facing === 12) {
          splashPositionY -= 27;
        } else if (this.facing === 6) {
          splashPositionY += 38;
        } else if (this.facing === 3) {
          splashPositionX += 34;
        } else if (this.facing === 9) {
          splashPositionX -= 24;
        }
        this.game.addBody(new WaterSplash(this.img, splashPositionX, splashPositionY));
      }
    }
  }
}

export default Squirtle;
