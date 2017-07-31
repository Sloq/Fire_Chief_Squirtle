class Keyboarder {
  constructor() {
    const keyState = {};
    const KEYS = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
    window.addEventListener('keydown', (e) => {
        keyState[e.keyCode] = true;
    });
    window.addEventListener('keyup', (e) => {
        keyState[e.keyCode] = false;
    });
    this.keyState = keyState;
    this.KEYS = KEYS;
    this.isDown = this.isDown.bind(this);
  }

  isDown(keyCode) {
    return this.keyState[keyCode] === true;
  }
}

export default Keyboarder;

// squirtle.keyboarder.keystate[e]
