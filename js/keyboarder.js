class Keyboarder {
  constructor() {
    const keyState = {};
    const KEYS = { LEFT: 65, UP: 87, RIGHT: 68, DOWN: 83, SPACE: 32 };
    this.keyState = keyState;
    this.KEYS = KEYS;
    window.addEventListener('keydown', (e) => {
        keyState[e.keyCode] = true;
    });
    window.addEventListener('keyup', (e) => {
        keyState[e.keyCode] = false;
    });
  }

  isDown(keyCode) {
    return this.keyState[keyCode] === true;
  }
}

export default Keyboarder;
