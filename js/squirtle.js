import Keyboarder from './keyboarder';

class Squirtle {
  constructor(game, gameSize) {
    this.size = { x: 30, y: 38 };
    this.center = { x: gameSize.x/2, y: gameSize.y/2 - this.size.y};
    this.game = game;
    this.gameSize = gameSize;
    this.keyboarder = new Keyboarder();
  }

  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      if (this.center.x >= 8) {
        this.center.x -= 2;
      }
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      if (this.center.x <= this.gameSize.x-8) {
        this.center.x += 2;
      }
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
      if (this.center.y >= 62 ){
        this.center.y -= 2;
      }
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
      if (this.center.y <= this.gameSize.y-8 ) {
        this.center.y += 2;
      }
    }
  }
}

export default Squirtle;
