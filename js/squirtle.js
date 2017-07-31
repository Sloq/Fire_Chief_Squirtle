import Keyboarder from './keyboarder';

class Squirtle {
  constructor(game, gameSize) {
    this.size = { x: 15, y: 15 };
    this.center = { x: gameSize.x/2, y: gameSize.y/2 - this.size.y};
    this.game = game;
    this.keyboarder = new Keyboarder();
    console.log(this.keyboarder);
  }

  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      if (this.center.x >= 8) {
        this.center.x -= 2;
      }
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      if (this.center.x <= 492) {
        this.center.x += 2;
      }
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
      if (this.center.y >= 8 ){
        this.center.y -= 2;
      }
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
      if (this.center.y <= 342 ) {
        this.center.y += 2;
      }
    }
  }
}

export default Squirtle;
