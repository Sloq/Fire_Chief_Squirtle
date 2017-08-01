import MovingObjects from './moving_objects';
import Sprite from './sprite';

class BounceFlame extends MovingObjects {
  constructor(img, gameSize) {
    // this.size = { x: 30, y: 38 };
    const sprite = new Sprite(img, 90, 46, 15, 18);
    let xTrial = gameSize.x*Math.random();
    let yTrial = gameSize.y*Math.random();
    while (xTrial < 280
      && xTrial > 230
      && yTrial > 175
      && yTrial < 225 || yTrial <  19 || yTrial > 315) {
        xTrial = gameSize.x*Math.random();
        yTrial = gameSize.y*Math.random();
    }

    super('enemy', sprite, xTrial, yTrial, 30, 38);


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

    this.speedX = speedX;
    this.speedY = speedY;
    this.gameSize = gameSize;
    this.ignited = true;
  }

  reignite() {
    if (this.x < 100 && this.y < 100) {
      this.ignited = true;
    }
  }

  update(collisions) {
    let bounce = false;
    collisions.forEach(e => {
      if (e.type === "enemy") {
        bounce = true;
      }
    });
    if (this.ignited) {
      if (this.x <= 0 || bounce) {
        this.speedX = -this.speedX;
      } else if (this.x >= this.gameSize.x-23) {
        this.speedX = -this.speedX;
      }

      if (this.y <= 65 || bounce) {
        this.speedY = -this.speedY;
      } else if (this.y >= this.gameSize.y-35) {
        this.speedY = -this.speedY;
      }
    } else {
      this.speedX = -Math.abs(this.speedX);
      this.speedY = -Math.abs(this.speedY);
    }
    this.reignite();
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

export default BounceFlame;
