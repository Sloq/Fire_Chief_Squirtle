import Squirtle from './objects/squirtle';
import BounceFlame from './objects/fire_enemy1';

class Game {
  constructor(master) {
    const main = document.getElementById("main-canvas");
    const background = document.getElementById("background-canvas");
    const foreground = document.getElementById("foreground-canvas");
    const sprites = document.getElementById("squirtel_sprite");
    const canvasScreen = main.getContext('2d');
    const gameSize = { x: main.width, y: main.height };
    this.tick = this.tick.bind(this);
    this.canvasScreen = canvasScreen;
    this.gameSize = gameSize;
    const movingObjects = [];
    [new Squirtle(this, sprites, gameSize), new BounceFlame(sprites, gameSize), new BounceFlame(sprites, gameSize)].forEach(obj => {
      movingObjects.push(obj);
    });
    this.sprites = sprites;
    this.movingObjects = movingObjects;
    this.gameOver = false;
    this.master = master;
    this.tick();
  }

  update() {
    let allIgnited = this.movingObjects.length;
    for (let i = 0; i < this.movingObjects.length; i++) {
      const collisionArr = [];
      if (this.movingObjects[i].isDead) {
        this.gameOver = true;
      }
      if (!this.movingObjects[i].ignited) {
        allIgnited -= 1;
      }
      for (let x = 0; x < this.movingObjects.length; x++) {
        if (this.colliding(this.movingObjects[i],
          this.movingObjects[x])) {
          collisionArr.push(this.movingObjects[x]);
        }
      }
      this.movingObjects[i].update(collisionArr);
    }
    // if (allIgnited === 0) {
    //   this.master.gameWon();
    // }
  }

  tick() {
    this.update();
    this.draw(this.canvasScreen, this.gameSize);

    // if ()

    if (!this.gameOver) {
      window.requestAnimationFrame(this.tick);
    } else {
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
      this.master.needRestart();
    }
  }

  draw(screen, gamesize) {
    console.log("in draw");
    screen.clearRect(0, 0, gamesize.x, gamesize.y);
    for (let i = 0; i < this.movingObjects.length; i++) {
      this.drawImage(screen, this.movingObjects[i]);
    }
  }

  colliding(body1, body2) {
    return !(body1 === body2 ||
            body1.x + body1.width/2 < body2.x - body2.width/2 ||
            body1.y + body1.height/2 < body2.y - body2.height/2 + 4 ||
            body1.x - body1.width/2 > body2.x + body2.width/2 ||
            body1.y - body1.height/2 + 4 > body2.y + body2.height/2);
  }

  drawImage(screen, body) {
    // console.log(body);
    screen.drawImage(body.sprite.img,
        body.sprite.srcX, body.sprite.srcY,
        body.sprite.width, body.sprite.height,
        body.x, body.y,
        body.width, body.height
      );
  }

  addBody(obj) {
    console.log("adding body");
    console.log(obj);
    this.movingObjects.push(obj);
  }

}

export default Game;
