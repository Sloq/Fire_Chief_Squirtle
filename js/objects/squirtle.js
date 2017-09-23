import Keyboarder from '../keyboarder';
import MovingObjects from './moving_objects';
import Sprite from './sprite';
import WaterSplash from './water_splash';

class Squirtle extends MovingObjects {
  constructor(game, img, gameSize) {
    let sprite = new Sprite(img, 1, 22, 17, 21);
    super('squirtle', sprite, gameSize.x/2, gameSize.y/2, 34, 38);
    this.img = img;
    this.sprite = sprite;
    this.gameSize = gameSize;
    this.keyboarder = new Keyboarder();
    this.lives = 3;
    this.isDead = false;
    this.facing = 6;
    this.game = game;
    this.spaceDown = Date.now();
    this.stats = [];
  }

  update(collisions) {
    this.game.scoreCtx.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.game.scoreCtx.font = "25px Coiny, sans-serif";
    this.game.scoreCtx.fillText(`level: ${this.game.level+1}`, 10, 25);
    this.game.scoreCtx.fillText(`Score: ${this.game.score}`, 333, 25);

    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited) {
        this.isDead = true;
        this.width = 34;        
        this.sprite = new Sprite(this.img, 1, 45, 17, 19);
      } else if (e.type === "gem") {
        this.game.score += e.value;
        e.lifeSpan = 0;
      }
    });

    let spaceDown = false;
    if (!this.isDead) {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        if (this.x >= 0) {
          this.x -= 2;
          this.facing = 9;
          // this.height = 48;
          this.width = 46;
          this.sprite = new Sprite(this.img, 52, 64, 25, 22);
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        if (this.x <= this.gameSize.x-17) {
          this.x += 2;
          this.facing = 3;
          // this.height = 48;
          this.width = 46;
          this.sprite = new Sprite(this.img, 77, 64, 25, 22);
        }
      }

      if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
        if (this.y >= 40 ){
          this.y -= 2;
          this.facing = 12;
          this.width = 34;
          this.sprite = new Sprite(this.img, 1, 1, 17, 21);
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
        if (this.y <= this.gameSize.y-34 ) {
          this.y += 2;
          this.facing = 6;
          this.width = 34;
          this.sprite = new Sprite(this.img, 1, 22, 17, 21);          
        }
      }
      let time = Date.now();
      if  (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) && (time-this.spaceDown > 411)) {
        this.spaceDown = time;
        let splashPositionX = this.x + 3;
        let splashPositionY = this.y;
        if (this.facing === 12) {
          splashPositionY -= 30;
        } else if (this.facing === 6) {
          splashPositionY += 40;
        } else if (this.facing === 3) {
          splashPositionX += 36;
        } else if (this.facing === 9) {
          splashPositionX -= 26;
        }
        this.game.addBody(new WaterSplash(this.img, splashPositionX, splashPositionY));
      }
    }
  }
}

export default Squirtle;
