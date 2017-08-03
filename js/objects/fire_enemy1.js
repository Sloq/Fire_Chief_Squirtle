import MovingObjects from './moving_objects';
import Sprite from './sprite';

class BounceFlame extends MovingObjects {
  constructor(img, gameSize) {
    // this.size = { x: 30, y: 38 };
    const sprites = [new Sprite(img, 90, 46, 15, 18),
                    new Sprite(img, 108, 46,15, 18),
                    new Sprite(img, 126, 46, 15, 18)];
    console.log(sprites[0]);
    let xTrial = 30 + (gameSize.x-30)*Math.random();
    let yTrial = 65 + (gameSize.y-65)*Math.random();
    while (xTrial < 290
      && xTrial > 230
      && yTrial > 165
      && yTrial < 235 || yTrial <  19 || yTrial > 315) {
        console.log("redoing landing");
        xTrial = gameSize.x*Math.random();
        yTrial = gameSize.y*Math.random();
    }
    super('enemy', sprites[0], xTrial, yTrial, 30, 36);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    let speedX = Math.ceil(2*Math.random());
    let speedY = Math.ceil(1*Math.random());

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
  }

  reignite() {
    if (this.x < 10 && this.y < 65) {
      this.ignited = true;
      this.sprite = new Sprite(this.img, 90, 46, 15, 18);
      this.speedX = Math.ceil(2*Math.random());
      this.speedY = Math.ceil(1*Math.random());
    }
  }

  update(collisions) {
    this.spriteTicker += 1;
    let bounce = false;
    if (this.spriteTicker === 40 && this.ignited) {
      this.spriteTicker = 0;
      this.spriteRotation = (this.spriteRotation + 1) % 3;
      console.log(this.spriteRotation);
      this.sprite = this.sprites[this.spriteRotation];
    }
    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited && this.x < 40 && this.y < 40) {
        bounce = true;
      } else if (e.type === "water") {
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
      // this.speedX = -Math.abs(this.speedX);
      // this.speedY = -Math.abs(this.speedY);
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
  }
}

export default BounceFlame;
