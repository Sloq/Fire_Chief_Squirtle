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
          this.game = new Game(that);
          // game.stopPropogation();
        }
    });
  }

  gameWon() {

  }

  needRestart() {
    this.overlay.font = "40px Coiny, sans-serif";
    this.overlay.fillText("Press Enter",110,150);
    this.overlay.fillText("To Start New Game",90,110);
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
