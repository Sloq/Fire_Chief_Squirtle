import Keyboarder from './keyboarder';

class Squirtle {
  constructor(game, gameSize) {
    this.size = { x: 15, y: 15 };
    this.center = { x: gameSize.x/2, y: gameSize.y/2 - this.size};
    this.game = game;
    this.keyboarder = new Keyboarder();
  }

  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      this.center.x -= 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      this.center.x += 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
      this.center.y += 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
      this.center.y -= 2;
    }
  }
}

export default Squirtle;
