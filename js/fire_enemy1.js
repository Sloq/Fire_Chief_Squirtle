import Keyboarder from './keyboarder';

class BounceFlame {
  constructor(game, gameSize) {
    this.size = { x: 30, y: 38 };
    this.center = {
      x: gameSize.x*Math.random() ,
      y: gameSize.y*Math.random()};

    while (this.center.x < 280
      && this.center.x > 230
      && this.center.y > 175
      && this.center.y < 225) {
        this.center.x = gameSize.x*Math.random();
        this.center.y = gameSize.y*Math.random();
    }

    let speedX = Math.ceil(2*Math.random());
    let speedY = Math.ceil(1*Math.random());

    if (this.center.x > gameSize.x/2) {
      speedX = speedX;
    } else {
      speedX = -speedX;
    }

    if (this.center.y > gameSize.y/2) {
      speedY = speedY;
    } else {
      speedY = -speedY;
    }

    this.speedX = speedX;
    this.speedY = speedY;
    this.game = game;
    this.gameSize = gameSize;
    this.ignited = true;
    this.keyboarder = new Keyboarder();
  }

  reignite() {
    if (this.center.x < 100 && this.center.y < 100) {
      this.ignited = true;
    }
  }

  update() {
    if (this.ignited) {
      if (this.center.x <= 15) {
        this.speedX = -this.speedX;
      } else if (this.center.x >= this.gameSize.x-8) {
        this.speedX = -this.speedX;
      }

      if (this.center.y <= 58) {
        this.speedY = -this.speedY;
      } else if (this.center.y >= this.gameSize.y-14) {
        this.speedY = -this.speedY;
      }
    } else {
      this.speedX = -Math.abs(this.speedX);
      this.speedY = -Math.abs(this.speedY);
    }
    this.reignite();
    this.center.x += this.speedX;
    this.center.y += this.speedY;
  }
}

export default BounceFlame;
