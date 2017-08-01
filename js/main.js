import Squirtle from './squirtle';
import BounceFlame from './fire_enemy1';

class Game {
  constructor(topCanvas, lowerCanvas) {
    const foreground = document.getElementById(topCanvas);
    const background = document.getElementById(lowerCanvas);
    const canvasScreen = foreground.getContext('2d');
    const gameSize = { x: foreground.width, y: foreground.height };
    this.tick = this.tick.bind(this);
    this.canvasScreen = canvasScreen;
    this.gameSize = gameSize;
    this.movingObjects = [new Squirtle(this, gameSize), new BounceFlame(this, gameSize)];
    this.tick();
  }

  update() {
    for (let i = 0; i < this.movingObjects.length; i++) {
      this.movingObjects[i].update();
    }
  }

  tick() {
    this.update();
    this.draw(this.canvasScreen, this.gameSize);
    window.requestAnimationFrame(this.tick);
  }

  draw(screen, gamesize) {
    screen.clearRect(0, 0, gamesize.x, gamesize.y);
    for (let i = 0; i < this.movingObjects.length; i++) {
      this.drawRect(screen, this.movingObjects[i]);
    }
  }

  drawRect(screen, body) {
    screen.fillRect(body.center.x - body.size.x/2,
                    body.center.y - body.size.y/2,
                    body.size.x, body.size.y);
  }
}

window.onload = () => {
  new Game("foreground-canvas", "background-canvas");
};
