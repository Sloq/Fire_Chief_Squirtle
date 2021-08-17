# Fire Chief Squirtle

[Play it Here](https://sloq.github.io/Fire_Chief_Squirtle/)

Fire Chief Squirtle is a JavaScript game inspired by classic console games such as The Legend of Zelda.

![Fire Chief Squirtle Gif](docs/squirtle.gif)

## Gameplay

| Action     | Key Input      |
|:----------:|:--------------:|
| Move Left  | 'A' & Left Arrow |
| Move Right | 'D' & Right Arrow|
| Move Up    | 'W' & Up Arrow   |
| Move Down  | 'S' & Down Arrow |
| Shoot Water| Spacebar         |
| Restart    | Enter            |

## Technologies Used
Fire Chief Squirtle was build with the following technologies
* Vanilla JavaScript for game mechanics
* HTML Canvas for rendering of the game
* Node.js for the backend
* MongodDB server
* CSS3 for page layout
* Webpack to bundle and serve the multiple scripts used


## Technical details

All object that can interact onscreen are classes that inherit from the MovingObjects class. Objects with a finite lifespan further inherit from the TemporaryObject class. In this way adding new enemies, attacks, or bonus items will be easy updates in the future.

In order to throttle how often Squirtle was able to spray water in the constructor I set a spaceDown variable to the current time

```javascript
this.spaceDown = Date.now();
```
Then in the update function I checked the time since the previous space press against the current time to see if enough time had elapsed for a second press

```javascript
let time = Date.now();
if  (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) && (time-this.spaceDown > 500)) {
  this.spaceDown = time;
  let splashPositionX = this.x + 3;
  let splashPositionY = this.y;
```
The backend was built with Node.js and serves responses from a MongoDB database.

## Future Features

* New enemy classes that employ different/more complex logic
* Add sound effects and background music
* Have gems power up Squirtle to upgrades it's water splash
* Smoother transitions
