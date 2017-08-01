import createjs from 'preload-js';
import Squirtle from './squirtle';
import BounceFlame from './fire_enemy1';

class Game {
  constructor(topCanvas, lowerCanvas, img) {
    const foreground = document.getElementById(topCanvas);
    const background = document.getElementById(lowerCanvas);
    const sprites = document.getElementById(img);
    const canvasScreen = foreground.getContext('2d');
    const gameSize = { x: foreground.width, y: foreground.height };
    this.tick = this.tick.bind(this);
    this.canvasScreen = canvasScreen;
    this.gameSize = gameSize;
    const movingObjects = [];
    // sprites.addEventListener('load', () => {
    //   console.log("in load callback");
    //   [new Squirtle(sprites, gameSize), new BounceFlame(sprites, gameSize), new BounceFlame(sprites, gameSize)].forEach(obj => {
    //     movingObjects.push(obj);
    //   });
    // });
    [new Squirtle(sprites, gameSize), new BounceFlame(sprites, gameSize), new BounceFlame(sprites, gameSize)].forEach(obj => {
      movingObjects.push(obj);
    });

    // sprites.src = '../assets/img/squirtel_sprite.png';
    this.movingObjects = movingObjects;
    this.tick();
  }

  update() {
    for (let i = 0; i < this.movingObjects.length; i++) {
      const collisionArr = [];
      for (let x = 0; x < this.movingObjects.length; x++) {
        if (this.colliding(this.movingObjects[i], this.movingObjects[x])) {
          collisionArr.push(this.movingObjects[x]);
        }
      }
      this.movingObjects[i].update(collisionArr);
    }
  }

  tick() {
    this.update();
    this.draw(this.canvasScreen, this.gameSize);
    window.requestAnimationFrame(this.tick);
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
            body1.y + body1.height/2 < body2.y - body2.height/2 ||
            body1.x - body1.width/2 > body2.x + body2.width/2 ||
            body1.y - body1.height/2 > body2.y + body2.height/2);
  }

  drawImage(screen, body) {
    console.log(screen);
    console.log(body);
    screen.drawImage(body.sprite.img,
        body.sprite.srcX, body.sprite.srcY,
        body.sprite.width, body.sprite.height,
        body.x, body.y,
        body.width, body.height,
      );
  }

  // data.canvas.ctx.drawImage(
  //       entity.sprite.img,
  //       entity.sprite.srcX, entity.sprite.srcY,
  //       entity.sprite.srcW, entity.sprite.srcH,
  //       entity.xPos - data.viewport.vX, entity.yPos - data.viewport.vY,
  //       entity.width, entity.height,


}

window.onload = () => {
  // var queue = new createjs.LoadQueue(true);
  // queue.on("complete", console.log("loaded"));
  // queue.loadManifest(["squirtel_sprite.png", "grass-background.png"]);

  new Game("foreground-canvas", "background-canvas","squirtel_sprite");
};
//
// document.addEventListener('DOMContentLoaded', () => {
//   new Game("foreground-canvas", "background-canvas");
// });
