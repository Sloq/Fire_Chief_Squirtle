import MovingObjects from './moving_objects';
import Sprite from './sprite';
import Diamond from './diamond';

class BlackFire extends MovingObjects {
  constructor(img, gameSize, game) {
    // this.size = { x: 30, y: 38 };
    const sprites = [new Sprite(img, 180, 46, 15, 18),
                    new Sprite(img, 198, 46,15, 18),
                    new Sprite(img, 216, 46,15, 18),
                    new Sprite(img, 234, 46,15, 18),
                    new Sprite(img, 252, 46, 15, 18)];
    let xTrial = 35;
    let yTrial = 300;
  
    super('enemy', sprites[0], xTrial, yTrial, 30, 36);

    this.game = game;
    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    let speedX = 2;
    let speedY = 2;

    if (this.x > gameSize.x/2) {
      speedX = speedX;
    } else {
      speedX = -speedX;
    }

    if (this.y > gameSize.y/2) {
      speedY = speedY;
    } else {
      speedY = -speedY;
    }
    this.img = img;
    this.speedX = speedX;
    this.speedY = speedY;
    this.gameSize = gameSize;
    this.ignited = true;
    this.canBounce = 16;
  }

  reignite() {
    if (this.x <= 15 && this.y <= 65) {
      this.ignited = true;
      this.sprite = this.sprites[0];
      this.speedX = 2*Math.ceil(2*Math.random());
      this.speedY = 2*Math.ceil(2*Math.random());
    }
  }

  update(collisions) {
    this.spriteTicker += 1;
    let bounce = false;
    this.canBounce++;
    if (this.spriteTicker >= 4 && this.ignited ) {
      this.spriteTicker = 0;
      this.spriteRotation = (this.spriteRotation + 1) % 5;
      this.sprite = this.sprites[this.spriteRotation];
    }
    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited && this.x > 30 && this.y > 50 && this.canBounce > 15) {
        bounce = true;
        this.canBounce = 0;
      } else if (e.type === "water" && this.ignited) {
        this.snuffedOut();
      } 
    });
    if (this.ignited) {
      if (this.x <= 0 || bounce) {
        this.speedX = -this.speedX;
      } else if (this.x >= this.gameSize.x-23) {
        this.speedX = -this.speedX;
      }

      if (this.y <= 35 || bounce) {
        this.speedY = -this.speedY;
      } else if (this.y >= this.gameSize.y-35) {
        this.speedY = -this.speedY;
      }
    } else {
      this.aimForHome();
    }
    this.reignite();
    this.x += this.speedX;
    this.y += this.speedY;
  }

  aimForHome() {
    this.speedY = 0;
    this.speedX = 0;
    if (this.x > 5) {
      this.x -= 1;
    }
    if (this.y > 65) {
      this.y -= 1;
    }
  }

  snuffedOut() {
    this.ignited = false;
    this.sprite = new Sprite(this.img, 56, 47, 15, 14);
    this.game.addBody(new Diamond(this.img, this.x, this.y));
  }
}

export default BlackFire;
