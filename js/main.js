import Game from './game.js';

class Master {
  constructor() {
    const consoleScreen = document.getElementById("console-canvas");
    const overlay = consoleScreen.getContext('2d');

    this.overlay = overlay;
    overlay.font = "40px Coiny, sans-serif";
    overlay.fillText("Start New Game",110,150);
    overlay.font = "30px Coiny, sans-serif";
    overlay.fillText("Press Enter",170,180);

    const that = this;
    window.addEventListener('keypress', function capture(e) {
        if (e.keyCode === 13) {
          window.removeEventListener('keypress', capture, false);
          overlay.clearRect(0, 0, 500, 350);
          that.game = new Game(that);
        }
    });
  }

  gameWon() {
    this.overlay.font = "80px Coiny, sans-serif";
    this.overlay.fillText("You Win!",79,170);
    this.overlay.font = "20px Coiny, sans-serif";
    this.overlay.fillText("Press Enter To Start New Game",95,200);

    const that = this;
    window.addEventListener('keypress', function capture(e) {
        if (e.keyCode === 13) {
          window.removeEventListener('keypress', capture, false);
          that.overlay.clearRect(0, 0, 500, 350);
          that.game = new Game(that);
          // game.stopPropogation();
        }
    });
  }

  needRestart() {
    this.overlay.fillStyle = 'white';
    this.overlay.strokeStyle = 'black';
    this.overlay.lineWidth = 4;
    this.overlay.font = "55px Coiny, sans-serif";
    this.overlay.fillText("Game Over",105,140);
    this.overlay.strokeText('Game Over', 105, 140);

    this.overlay.fillStyle = 'white';
    this.overlay.strokeStyle = 'black';
    this.overlay.lineWidth = 2;
    this.overlay.font = "35px Coiny, sans-serif";
    this.overlay.fillText("Press Enter To Restart",60,180);
    this.overlay.strokeText("Press Enter To Restart",60,180);

    const that = this;
    window.addEventListener('keypress', function capture(e) {
        if (e.keyCode === 13) {
          window.removeEventListener('keypress', capture, false);
          that.overlay.clearRect(0, 0, 500, 350);
          that.game = new Game(that);
          // game.stopPropogation();
        }
    });
  }

}

export default Master;

window.onload = () => {
  new Master();
};
