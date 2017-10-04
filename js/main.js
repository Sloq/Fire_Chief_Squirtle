import Game from './game.js';

class Master {
  constructor() {
    const consoleScreen = document.getElementById("console-canvas");
    const overlay = consoleScreen.getContext('2d');
    this.overlay = overlay;
    this.userModal = document.getElementById("user-modal");
    this.submitButton = document.getElementById("submit-button");
    this.userTextarea = document.getElementById("input-textarea");
    this.username = this.userTextarea.value;
    this.leaderList = document.getElementById("leader-list");

    overlay.font = "40px Wendy One, sans-serif";
    overlay.fillText("Start New Game",110,150);
    overlay.font = "30px Wendy One, sans-serif";
    overlay.fillText("Press Enter",170,180);

    const that = this;

    fetch("http://localhost:3000/api/scores",  {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    })
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch(error => { console.log('request failed', error); });


    window.addEventListener('keypress', function capture(e) {
        if (e.keyCode === 13) {
          window.removeEventListener('keypress', capture, false);
          overlay.clearRect(0, 0, 500, 350);
          that.game = new Game(that);
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
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      fetch(`http://localhost:3000/api/scores`, {
        method: "POST",
        headers: {
          'Content-Type':'application/json',
        },
        mode: "cors",
        cache: 'default',        
        body: JSON.stringify({
          "name": that.username,
          "score": score
        })
      })
      // .then(fetch(`http://localhost:3000/api/scores/${that.username}`, {
      //   method: "GET",
      //   headers: {
      //     "Accept": "application/json"
      //   }
      // })).then((res) => res.json())
      .then(console.log(`${that.username}:${score}`))
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch(error => { console.log('request failed', error); });  
      window.addEventListener('keypress', function capture(e) {
        if (e.keyCode === 13) {
          window.removeEventListener('keypress', capture, false);
          that.overlay.clearRect(0, 0, 500, 350);
          that.game = new Game(that);
        }
     })
    }
    
  }

}

export default Master;

window.onload = () => {
  new Master();
};
