class Keyboarder {
  constructor() {
    const keyState = {};
    const KEYS = { LEFT: 65,
      LEFTA: 37,
      UP: 38,
      UPA: 87,
      RIGHT: 68,
      RIGHTA: 39,
      DOWN: 83,
      DOWNA: 40,
      SPACE: 32,
    };
    this.keyState = keyState;
    this.KEYS = KEYS;
    window.addEventListener('keydown', (e) => {
      if ((e.keyCode == 32||e.keyCode == 37||e.keyCode==38||e.keyCode==39||e.keyCode==40) && e.target == document.body) {
        e.preventDefault();
      }
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
