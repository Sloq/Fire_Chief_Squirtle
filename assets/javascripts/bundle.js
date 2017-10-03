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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_objects__ = __webpack_require__(2);


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
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__temporary_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class Diamond extends __WEBPACK_IMPORTED_MODULE_0__temporary_object__["a" /* default */] {
  constructor(img, sootX, sootY) {
    const start_gem = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 3, 114, 15, 12);
    const sprites = [start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 21, 114, 15, 12),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 39, 114, 15, 12),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 57, 114, 15, 12),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 75, 114, 15, 12)];

    super('gem', sprites[0], sootX, sootY, 23, 18, 200);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    this.value = 100;
  }

  update() {
      super.update()
      this.spriteTicker += 1;
      if (this.spriteTicker >= 2) {
        this.spriteTicker = 0;
        this.spriteRotation = (this.spriteRotation + 1) % 15;
        this.sprite = this.sprites[this.spriteRotation];
      }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Diamond);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(5);


class Master {
  constructor() {
    const consoleScreen = document.getElementById("console-canvas");
    const overlay = consoleScreen.getContext('2d');
    this.overlay = overlay;
    this.userModal = document.getElementById("user-modal");
    this.submitButton = document.getElementById("submit-button");
    this.userTextarea = document.getElementById("input-textarea");
    this.username = this.userTextarea.value;

    overlay.font = "40px Wendy One, sans-serif";
    overlay.fillText("Start New Game",110,150);
    overlay.font = "30px Wendy One, sans-serif";
    overlay.fillText("Press Enter",170,180);

    const that = this;
    window.addEventListener('keypress', function capture(e) {
        if (e.keyCode === 13) {
          window.removeEventListener('keypress', capture, false);
          overlay.clearRect(0, 0, 500, 350);
          that.game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](that);
        }
    });

    this.userTextarea.addEventListener('input', (e) => {
      this.userTextarea.value = this.userTextarea.value.replace(/[\n\r\t]/, '');
      this.username = this.userTextarea.value;
    })
  }

  gameWon(score) {
    this.overlay.font = "80px Coiny, sans-serif";
    this.overlay.fillText("You Win!",79,170);
    this.overlay.font = "20px Coiny, sans-serif";
    this.overlay.fillText("Press Enter To Start New Game",95,200);

    this.userModal.style.display = "block";
    const that = this;
    
    console.log(`${this.username} won on ${new Date().toDateString()} with a score of: ${score}`)

  }

  // 0212e2f1c1fcad370dcb3454a4e655a8b41a0def26855225b3b80f8dbe67f990


  needRestart(score) {
    // const time = new Date().toDateString();
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
    this.userModal.style.display = "block";
    const that = this;
    this.submitButton.onclick = () => {
      this.userModal.style.display = "none";
      console.log(`${this.username} scored on ${new Date().toDateString()}: ${score}`)    
      window.addEventListener('keypress', function capture(e) {
        if (e.keyCode === 13) {
          window.removeEventListener('keypress', capture, false);
          that.overlay.clearRect(0, 0, 500, 350);
          that.game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](that);
        }
     });
    }
    
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Master);

window.onload = () => {
  new Master();
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_black_fire__ = __webpack_require__(13);




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
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize, this)],
      [new __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__["a" /* default */](this, sprites, gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize, this)],
      [new __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__["a" /* default */](this, sprites, gameSize),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize, this)],
      [new __WEBPACK_IMPORTED_MODULE_0__objects_squirtle__["a" /* default */](this, sprites, gameSize),
        new __WEBPACK_IMPORTED_MODULE_2__objects_black_fire__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites,gameSize, this),
        new __WEBPACK_IMPORTED_MODULE_1__objects_fire_enemy1__["a" /* default */](sprites, gameSize, this)]
    ];

    this.levelEnemies = levelEnemies;
    this.scoreCtx = scoreCtx;
    this.sprites = sprites;
    this.movingObjects = levelEnemies[this.level];
    this.gameOver = false;
    this.levelWon = false;
    this.master = master;
    this.score = 0;
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
      this.levelWon = true;
    }
  }

  tick() {
    this.update();
    this.draw(this.canvasScreen, this.gameSize);
    if (!this.gameOver && !this.levelWon) {
        window.requestAnimationFrame(this.tick);
    }
    if (this.levelWon &&
      this.level+1 === this.levelEnemies.length) {
        this.master.gameWon(this.score);
    } else if (this.levelWon) {
      this.level += 1;
      this.score += 1000;
      this.levelWon = false;
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
      this.master.needRestart(this.score);
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
            body1.x + (body1.width/2) < body2.x - body2.width/2 ||
            body1.y + body1.height/2 < body2.y - body2.height/2 + 6 ||
            body1.x - (body1.width/2 - 0) > body2.x + body2.width/2 ||
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboarder__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moving_objects__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprite__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__water_splash__ = __webpack_require__(8);





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
    this.game.scoreCtx.fillText(`level: ${this.game.level+1}`, 10, 25);
    this.game.scoreCtx.fillText(`Score: ${this.game.score}`, 333, 25);

    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited) {
        this.isDead = true;
        this.width = 34;        
        this.sprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](this.img, 1, 45, 17, 19);
      } else if (e.type === "gem") {
        this.game.score += e.value;
        e.lifeSpan = 0;
      }
    });

    let spaceDown = false;
    if (!this.isDead) {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT) || this.keyboarder.isDown(this.keyboarder.KEYS.LEFTA)) {
        if (this.x >= 0) {
          this.x -= 2;
          this.facing = 9;
          // this.height = 48;
          this.width = 46;
          this.sprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](this.img, 52, 64, 25, 22);
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)||this.keyboarder.isDown(this.keyboarder.KEYS.RIGHTA)) {
        if (this.x <= this.gameSize.x-17) {
          this.x += 2;
          this.facing = 3;
          // this.height = 48;
          this.width = 46;
          this.sprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](this.img, 77, 64, 25, 22);
        }
      }

      if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)||this.keyboarder.isDown(this.keyboarder.KEYS.UPA)) {
        if (this.y >= 40 ){
          this.y -= 2;
          this.facing = 12;
          this.width = 34;
          this.sprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](this.img, 1, 1, 17, 21);
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)||this.keyboarder.isDown(this.keyboarder.KEYS.DOWNA)) {
        if (this.y <= this.gameSize.y-34 ) {
          this.y += 2;
          this.facing = 6;
          this.width = 34;
          this.sprite = new __WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */](this.img, 1, 22, 17, 21);          
        }
      }
      let time = Date.now();
      if  (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) && (time-this.spaceDown > 411)) {
        this.spaceDown = time;
        let splashPositionX = this.x + 3;
        let splashPositionY = this.y;
        if (this.facing === 12) {
          splashPositionY -= 30;
        } else if (this.facing === 6) {
          splashPositionY += 40;
        } else if (this.facing === 3) {
          splashPositionX += 36;
        } else if (this.facing === 9) {
          splashPositionX -= 26;
        }
        this.game.addBody(new __WEBPACK_IMPORTED_MODULE_3__water_splash__["a" /* default */](this.img, splashPositionX, splashPositionY));
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Squirtle);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Keyboarder);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__temporary_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class WaterSplash extends __WEBPACK_IMPORTED_MODULE_0__temporary_object__["a" /* default */] {
  constructor(img, squirtleX, squirtleY) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 60, 0, 13, 13);
    super('water', sprite, squirtleX, squirtleY, 30, 30, 18);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (WaterSplash);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_objects__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__small_gem__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medium_gem__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__large_gem__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diamond__ = __webpack_require__(3);







class BounceFlame extends __WEBPACK_IMPORTED_MODULE_0__moving_objects__["a" /* default */] {
  constructor(img, gameSize, game) {
    // this.size = { x: 30, y: 38 };
    const sprites = [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 90, 46, 15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 108, 46,15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 126, 46,15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 144, 46,15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 162, 46, 15, 18)];
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

    this.game = game;
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
    if (this.spriteTicker >= 4 && this.ignited) {
      this.spriteTicker = 0;
      this.spriteRotation = (this.spriteRotation + 1) % 5;
      this.sprite = this.sprites[this.spriteRotation];
    }
    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited && this.x < 40 && this.y < 40) {
        bounce = true;
      } else if (e.type === "water" && this.ignited) {
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
    if (this.game.level === 0 ) {
      this.game.addBody(new __WEBPACK_IMPORTED_MODULE_2__small_gem__["a" /* default */](this.img, this.x, this.y));
    } else if (this.game.level === 1 ) {
      this.game.addBody(new __WEBPACK_IMPORTED_MODULE_3__medium_gem__["a" /* default */](this.img, this.x, this.y));
    } else if (this.game.level === 2 ) {
      this.game.addBody(new __WEBPACK_IMPORTED_MODULE_4__large_gem__["a" /* default */](this.img, this.x, this.y));
    } else if (this.game.level === 3 ) {
      this.game.addBody(new __WEBPACK_IMPORTED_MODULE_5__diamond__["a" /* default */](this.img, this.x, this.y));
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BounceFlame);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__temporary_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class SmallGem extends __WEBPACK_IMPORTED_MODULE_0__temporary_object__["a" /* default */] {
  constructor(img, sootX, sootY) {
    const start_gem = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 133, 17, 11, 11);
    const sprites = [start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 133, 3, 11, 11),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 147, 3, 11, 11),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 161, 3, 11, 11),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 175, 3, 11, 11),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 189, 3, 11, 11),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 203, 3, 11, 11)];

    super('gem', sprites[0], sootX, sootY, 22, 22, 200);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    this.value = 25;
  }

  update() {
      super.update()
      this.spriteTicker += 1;
      if (this.spriteTicker >= 2) {
        this.spriteTicker = 0;
        this.spriteRotation = (this.spriteRotation + 1) % 17;
        this.sprite = this.sprites[this.spriteRotation];
      }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SmallGem);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__temporary_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class MediumGem extends __WEBPACK_IMPORTED_MODULE_0__temporary_object__["a" /* default */] {
  constructor(img, sootX, sootY) {
    const start_gem = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 149, 19, 10, 18);
    const sprites = [start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 162, 19, 10, 18),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 175, 19, 10, 18),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 188, 19, 10, 18),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 201, 19, 10, 18)];

    super('gem', sprites[0], sootX, sootY, 15, 27, 200);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    this.value = 50;
  }

  update() {
      super.update()
      this.spriteTicker += 1;
      if (this.spriteTicker >= 2) {
        this.spriteTicker = 0;
        this.spriteRotation = (this.spriteRotation + 1) % 15;
        this.sprite = this.sprites[this.spriteRotation];
      }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MediumGem);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__temporary_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);



class LargeGem extends __WEBPACK_IMPORTED_MODULE_0__temporary_object__["a" /* default */] {
  constructor(img, sootX, sootY) {
    const start_gem = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 4, 130, 14, 14);
    const sprites = [start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        start_gem,
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 21, 130, 14, 14),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 38, 130, 14, 14),
        new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 55, 130, 14, 14)];

    super('gem', sprites[0], sootX, sootY, 21, 21, 200);

    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    this.value = 75;
  }

  update() {
      super.update()
      this.spriteTicker += 1;
      if (this.spriteTicker >= 2) {
        this.spriteTicker = 0;
        this.spriteRotation = (this.spriteRotation + 1) % 14;
        this.sprite = this.sprites[this.spriteRotation];
      }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LargeGem);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moving_objects__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diamond__ = __webpack_require__(3);




class BlackFire extends __WEBPACK_IMPORTED_MODULE_0__moving_objects__["a" /* default */] {
  constructor(img, gameSize, game) {
    // this.size = { x: 30, y: 38 };
    const sprites = [new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 180, 46, 15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 198, 46,15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 216, 46,15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 234, 46,15, 18),
                    new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 252, 46, 15, 18)];
    let xTrial = 35;
    let yTrial = 300;
  
    super('enemy', sprites[0], xTrial, yTrial, 30, 36);

    this.game = game;
    this.sprites = sprites;
    this.spriteRotation = 0;
    this.spriteTicker = 0;
    let speedX = 2;
    let speedY = 2;

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
    this.canBounce = 16;
  }

  reignite() {
    if (this.x <= 15 && this.y <= 65) {
      this.ignited = true;
      this.sprite = this.sprites[0];
      this.speedX = 2*Math.ceil(2*Math.random());
      this.speedY = 2*Math.ceil(2*Math.random());
    }
  }

  update(collisions) {
    this.spriteTicker += 1;
    let bounce = false;
    this.canBounce++;
    if (this.spriteTicker >= 4 && this.ignited ) {
      this.spriteTicker = 0;
      this.spriteRotation = (this.spriteRotation + 1) % 5;
      this.sprite = this.sprites[this.spriteRotation];
    }
    collisions.forEach(e => {
      if (e.type === "enemy" && e.ignited && this.x > 30 && this.y > 50 && this.canBounce > 15) {
        bounce = true;
        this.canBounce = 0;
      } else if (e.type === "water" && this.ignited) {
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
    this.game.addBody(new __WEBPACK_IMPORTED_MODULE_2__diamond__["a" /* default */](this.img, this.x, this.y));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BlackFire);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map