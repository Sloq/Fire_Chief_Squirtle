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
    // this.isDown = this.isDown.bind(this);
  }

  isDown(keyCode) {
    // console.log(keyCode);
    return this.keyState[keyCode] === true;
  }
}

export default Keyboarder;

// squirtle.keyboarder.keystate[e]
