import Squirtle from './objects/squirtle';
import BounceFlame from './objects/fire_enemy1';

class Game {
  constructor(master) {
    const main = document.getElementById("main-canvas");
    const background = document.getElementById("background-canvas");
    const foreground = document.getElementById("foreground-canvas");
    const sprites = document.getElementById("squirtel_sprite");
    const canvasScreen = main.getContext('2d');
    const scoreCtx = foreground.getContext('2d');
    const gameSize = { x: main.width, y: main.height };
    this.tick = this.tick.bind(this);
    this.canvasScreen = canvasScreen;
    this.gameSize = gameSize;
    this.level = 0;
    const levelEnemies = [
      [new Squirtle(this, sprites, gameSize),
        new BounceFlame(sprites, gameSize, this),
        new BounceFlame(sprites, gameSize, this)],
      // [new Squirtle(this, sprites, gameSize),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites, gameSize, this)],
      // [new Squirtle(this, sprites, gameSize),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites, gameSize, this)],
      // [new Squirtle(this, sprites, gameSize),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites,gameSize, this),
      //   new BounceFlame(sprites, gameSize, this)]
    ];

    this.levelEnemies = levelEnemies;
    this.scoreCtx = scoreCtx;
    this.sprites = sprites;
    this.movingObjects = levelEnemies[this.level];
    this.gameOver = false;
    this.levelWon = false;
    this.master = master;
    this.score = 0;
    this.tick();
  }

  update() {
    let countIgnited = 0;
    let expiredObjects = [];
    for (let i = 0; i < this.movingObjects.length; i++) {
      const collisionArr = [];
      if (this.movingObjects[i].isDead) {
        this.gameOver = true;
      }
      if (this.movingObjects[i].type === "enemy" &&
          this.movingObjects[i].ignited) {
        countIgnited += 1;
      }
      this.movingObjects[i].lifeSpan -= 1;
      if (this.movingObjects[i].lifeSpan <= 0) {
        expiredObjects.push(i);
      }
      for (let x = 0; x < this.movingObjects.length; x++) {
        if (this.colliding(this.movingObjects[i],
          this.movingObjects[x])) {
          collisionArr.push(this.movingObjects[x]);
        }
      }
      this.movingObjects[i].update(collisionArr);
    }
    for (let i = expiredObjects.length-1; i >= 0; i--) {
      this.movingObjects.splice(expiredObjects[i], 1);
    }
    if (countIgnited === 0) {
      this.levelWon = true;
    }
  }

  tick() {
    this.update();
    this.draw(this.canvasScreen, this.gameSize);
    if (!this.gameOver && !this.levelWon) {
        window.requestAnimationFrame(this.tick);
    }
    if (this.levelWon &&
      this.level+1 === this.levelEnemies.length) {
        this.master.gameWon(this.score);
    } else if (this.levelWon) {
      this.level += 1;
      this.score += 1000;
      this.levelWon = false;
      this.movingObjects = this.levelEnemies[this.level];
      this.tick();
    } else if (this.gameOver) {
      let x = 0;
      const interval = setInterval(() => {
        x += 1;
        if (x < 400) {
          this.addBody(new BounceFlame(this.sprites, this.gameSize));
          this.draw(this.canvasScreen, this.gameSize);
        } else {
          clearInterval(interval);
        }
      }, 5);
      this.master.needRestart(this.score);
    }
  }

  draw(screen, gamesize) {
    screen.clearRect(0, 0, gamesize.x, gamesize.y);
    for (let i = 0; i < this.movingObjects.length; i++) {
      this.drawImage(screen, this.movingObjects[i]);
    }
  }

  colliding(body1, body2) {
    return !(body1 === body2 ||
            body1.x + (body1.width/2) < body2.x - body2.width/2 ||
            body1.y + body1.height/2 < body2.y - body2.height/2 + 6 ||
            body1.x - (body1.width/2 - 0) > body2.x + body2.width/2 ||
            body1.y - body1.height/2 + 6 > body2.y + body2.height/2);
  }

  drawImage(screen, body) {
    screen.drawImage(body.sprite.img,
        body.sprite.srcX, body.sprite.srcY,
        body.sprite.width, body.sprite.height,
        body.x, body.y,
        body.width, body.height
      );
  }

  addBody(obj) {
    this.movingObjects.push(obj);
  }

}

export default Game;
