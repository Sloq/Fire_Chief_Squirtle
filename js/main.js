import Squirtle from './squirtle';

class Game {
  constructor(canvasId) {
    const canvas = document.getElementById(canvasId);
    const canvasScreen = canvas.getContext('2d');
    const gameSize = { x: canvas.width, y: canvas.height };
    this.tick = this.tick.bind(this);
    this.canvasScreen = canvasScreen;
    this.gameSize = gameSize;
    this.displayComponents = [new Squirtle(this, gameSize)];
    this.tick();
  }

  update() {
    for (let i = 0; i < this.displayComponents.length; i++) {
      this.displayComponents[i].update();
    }
  }

  tick() {
    this.update();
    this.draw(this.canvasScreen, this.gameSize);
    window.requestAnimationFrame(this.tick);
  }

  draw(screen, gamesize) {
    for (let i = 0; i < this.displayComponents.length; i++) {
      this.drawRect(screen, this.displayComponents[i]);
    }
  }

  drawRect(screen, body) {
    screen.fillRect(body.center.x - body.size.x/2,
                    body.center.y - body.size.y/2,
                    body.size.x, body.size.y);
  }
}

window.onload = () => {
  new Game("background-canvas");
};
