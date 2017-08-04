/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(10);


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
          that.game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](that);
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
          that.game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](that);
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
          that.game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](that);
          // game.stopPropogation();
        }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Master);

window.onload = () => {
  new Master();
};


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Keyboarder);


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__ = __webpack_require__(16);



class Game {
  constructor(master) {
    const main = document.getElementById("main-canvas");
    const background = document.getElementById("background-canvas");
    const foreground = document.getElementById("foreground-canvas");
    const sprites = document.getElementById("squirtel_sprite");
    const canvasScreen = main.getContext('2d');
    const scoreCtx = foreground.getContext('2d');
    const gameSize = { x: main.width, y: main.height };
    this.tick = this.tick.bind(this);
    this.canvasScreen = canvasScreen;
    this.gameSize = gameSize;
    this.level = 0;
    const levelEnemies = [
      [new __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__["a" /* default */](this, sprites, gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize)],
      [new __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__["a" /* default */](this, sprites, gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize)],
      [new __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__["a" /* default */](this, sprites, gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize)],
      [new __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__["a" /* default */](this, sprites, gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize)]
    ];

    this.levelEnemies = levelEnemies;
    this.scoreCtx = scoreCtx;
    this.sprites = sprites;
    this.movingObjects = levelEnemies[this.level];
    this.gameOver = false;
    this.gameWon = false;
    this.master = master;
    this.tick();
  }

  update() {
    let countIgnited = 0;
    let expiredObjects = [];
    for (let i = 0; i < this.movingObjects.length; i++) {
      const collisionArr = [];
      if (this.movingObjects[i].isDead) {
        this.gameOver = true;
      }
      if (this.movingObjects[i].type === "enemy" &&
          this.movingObjects[i].ignited) {
        countIgnited += 1;
      }
      this.movingObjects[i].lifeSpan -= 1;
      if (this.movingObjects[i].lifeSpan <= 0) {
        expiredObjects.push(i);
      }
      for (let x = 0; x < this.movingObjects.length; x++) {
        if (this.colliding(this.movingObjects[i],
          this.movingObjects[x])) {
          collisionArr.push(this.movingObjects[x]);
        }
      }
      this.movingObjects[i].update(collisionArr);
    }
    for (let i = expiredObjects.length-1; i >= 0; i--) {
      this.movingObjects.splice(expiredObjects[i], 1);
    }
    if (countIgnited === 0) {
      this.gameWon = true;
    }
  }

  tick() {
    this.update();
    this.draw(this.canvasScreen, this.gameSize);
    if (!this.gameOver && !this.gameWon) {
        window.requestAnimationFrame(this.tick);
    }
    if (this.gameWon &&
      this.level+1 === this.levelEnemies.length) {
        this.master.gameWon();
    } else if (this.gameWon) {
      this.level += 1;
      this.gameWon = false;
      this.movingObjects = this.levelEnemies[this.level];
      this.tick();
    } else if (this.gameOver) {
      let x = 0;
      const interval = setInterval(() => {
        x += 1;
        if (x < 400) {
          this.addBody(new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](this.sprites, this.gameSize));
          this.draw(this.canvasScreen, this.gameSize);
        } else {
          clearInterval(interval);
        }
      }, 5);
      this.master.needRestart();
    }
  }

  draw(screen, gamesize) {
    screen.clearRect(0, 0, gamesize.x, gamesize.y);
    for (let i = 0; i < this.movingObjects.length; i++) {
      this.drawImage(screen, this.movingObjects[i]);
    }
  }

  colliding(body1, body2) {
    return !(body1 === body2 ||
            body1.x + body1.width/2 < body2.x - body2.width/2 ||
            body1.y + body1.height/2 < body2.y - body2.height/2 + 6 ||
            body1.x - body1.width/2 > body2.x + body2.width/2 ||
            body1.y - body1.height/2 + 6 > body2.y + body2.height/2);
  }

  drawImage(screen, body) {
    screen.drawImage(body.sprite.img,
        body.sprite.srcX, body.sprite.srcY,
        body.sprite.width, body.sprite.height,
        body.x, body.y,
        body.width, body.height
      );
  }

  addBody(obj) {
    this.movingObjects.push(obj);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class MovingObjects {
  constructor(type, sprite, x, y, width, height) {
    this.type = type;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MovingObjects);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sprite {
  constructor(img, srcX, srcY, srcW, srcH) {
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.width = srcW;
    this.height = srcH;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sprite);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboarder__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moving_objects__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprite__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__water_splash__ = __webpack_require__(14);





class Squirtle extends __WEBPACK_IMPORTED_MODULE_1__moving_objects__["a" /* default */] {
  constructor(game, img, gameSize) {
    let sprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](img, 1, 22, 17, 21);
    super('squirtle', sprite, gameSize.x/2, gameSize.y/2, 34, 38);
    this.img = img;
    this.sprite = sprite;
    this.gameSize = gameSize;
    this.keyboarder = new __WEBPACK_IMPORTED_MODULE_0__keyboarder__["a" /* default */]();
    this.lives = 3;
    this.isDead = false;
    this.facing = 6;
    this.game = game;
    this.spaceDown = Date.now();
    this.stats = [];
  }

  update(collisions) {
    this.game.scoreCtx.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.game.scoreCtx.font = "25px Coiny, sans-serif";
    this.game.scoreCtx.fillText(`level: ${this.game.level+1}`,10,25);



    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited) {
        this.isDead = true;
        this.sprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](this.img, 1, 45, 17, 19);
      }
    });

    let spaceDown = false;
    if (!this.isDead) {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        if (this.x >= 0) {
          this.x -= 2;
          this.facing = 9;
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        if (this.x <= this.gameSize.x-17) {
          this.x += 2;
          this.facing = 3;
        }
      }

      if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
        if (this.y >= 40 ){
          this.y -= 2;
          this.facing = 12;
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
        if (this.y <= this.gameSize.y-34 ) {
          this.y += 2;
          this.facing = 6;
        }
      }
      let time = Date.now();
      if  (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) && (time-this.spaceDown > 500)) {
        this.spaceDown = time;
        let splashPositionX = this.x + 3;
        let splashPositionY = this.y;
        if (this.facing === 12) {
          splashPositionY -= 27;
        } else if (this.facing === 6) {
          splashPositionY += 38;
        } else if (this.facing === 3) {
          splashPositionX += 34;
        } else if (this.facing === 9) {
          splashPositionX -= 24;
        }
        this.game.addBody(new __WEBPACK_IMPORTED_MODULE_3__water_splash__["a" /* default */](this.img, splashPositionX, splashPositionY));
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Squirtle);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__temporary_object__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(12);



class WaterSplash extends __WEBPACK_IMPORTED_MODULE_0__temporary_object__["a" /* default */] {
  constructor(img, squirtleX, squirtleY) {
    // this.size = { x: 30, y: 38 };
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 60, 0, 13, 13);
    super('water', sprite, squirtleX, squirtleY, 26, 26, 18);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (WaterSplash);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_objects__ = __webpack_require__(11);


class TemporaryObject extends __WEBPACK_IMPORTED_MODULE_0__moving_objects__["a" /* default */] {
  constructor(type, sprite, x, y, width, height, lifeSpan) {
    super(type, sprite, x, y, width, height);
    this.lifeSpan = lifeSpan;
  }

  update() {
    this.lifeSpan -= 1;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TemporaryObject);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_objects__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(12);



class BounceFlame extends __WEBPACK_IMPORTED_MODULE_0__moving_objects__["a" /* default */] {
  constructor(img, gameSize) {
    // this.size = { x: 30, y: 38 };
    const sprites = [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 90, 46, 15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 108, 46,15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 126, 46, 15, 18)];
    let xTrial = 30 + (gameSize.x-40)*Math.random();
    let yTrial = 65 + (gameSize.y-65)*Math.random();
    while (xTrial < 290
      && xTrial > 230
      && yTrial > 135
      && yTrial < 235 || yTrial <  19 || yTrial > 315) {
        xTrial = gameSize.x*Math.random();
        yTrial = gameSize.y*Math.random();
    }
    super('enemy', sprites[0], xTrial, yTrial, 30, 36);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    let speedX = Math.ceil(2*Math.random());
    let speedY = Math.ceil(1*Math.random());

    if (this.x > gameSize.x/2) {
      speedX = speedX;
    } else {
      speedX = -speedX;
    }

    if (this.y > gameSize.y/2) {
      speedY = speedY;
    } else {
      speedY = -speedY;
    }
    this.img = img;
    this.speedX = speedX;
    this.speedY = speedY;
    this.gameSize = gameSize;
    this.ignited = true;
  }

  reignite() {
    if (this.x < 10 && this.y < 65) {
      this.ignited = true;
      this.sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](this.img, 90, 46, 15, 18);
      this.speedX = Math.ceil(2*Math.random());
      this.speedY = Math.ceil(1*Math.random());
    }
  }

  update(collisions) {
    this.spriteTicker += 1;
    let bounce = false;
    if (this.spriteTicker === 40 && this.ignited) {
      this.spriteTicker = 0;
      this.spriteRotation = (this.spriteRotation + 1) % 3;
      this.sprite = this.sprites[this.spriteRotation];
    }
    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited && this.x < 40 && this.y < 40) {
        bounce = true;
      } else if (e.type === "water") {
        this.snuffedOut();
      }
    });
    if (this.ignited) {
      if (this.x <= 0 || bounce) {
        this.speedX = -this.speedX;
      } else if (this.x >= this.gameSize.x-23) {
        this.speedX = -this.speedX;
      }

      if (this.y <= 35 || bounce) {
        this.speedY = -this.speedY;
      } else if (this.y >= this.gameSize.y-35) {
        this.speedY = -this.speedY;
      }
    } else {
      this.aimForHome();
      // this.speedX = -Math.abs(this.speedX);
      // this.speedY = -Math.abs(this.speedY);
    }
    this.reignite();
    this.x += this.speedX;
    this.y += this.speedY;
  }

  aimForHome() {
    this.speedY = 0;
    this.speedX = 0;
    if (this.x > 5) {
      this.x -= 1;
    }
    if (this.y > 65) {
      this.y -= 1;
    }
  }

  snuffedOut() {
    this.ignited = false;
    this.sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](this.img, 56, 47, 15, 14);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BounceFlame);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map