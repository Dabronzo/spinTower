

class GameDisplay {
  constructor() {
    this.isCreated = false;
  }


  updateCreated() {
    this.isCreated = !this.isCreated;
  }
}



export class ScoreDisplay {
    constructor() {
      this.score = 0;
  
      // Create a div element for the score display
      this.scoreElement = document.createElement('div');
      this.scoreElement.style.position = 'absolute';
      this.scoreElement.style.top = '10px'; // Adjust the top position as needed
      this.scoreElement.style.left = '50%'; // Center horizontally
      this.scoreElement.style.transform = 'translateX(-50%)'; // Center horizontally
  
      // Add styling to the score element
      this.scoreElement.style.color = 'white';
      this.scoreElement.style.fontFamily = 'Arial, sans-serif';
      this.scoreElement.style.fontSize = '24px';

      this.shouldFreeze = false;
  
      // Append the score element to the document body
      document.body.appendChild(this.scoreElement);
  
      // Initial update
      this.updateScore();
    }

    freezeScore() {
      this.shouldFreeze = true;
    };

  
    updateScore() {
      if (!this.shouldFreeze){
              // Update the text content of the score element
      this.scoreElement.textContent = `Score: ${this.score}`;
      };
    };

    incrementScore(points = 10) {
      if (!this.shouldFreeze) {
         // Increment the score by the specified points
        this.score += points;
        this.updateScore();
      };
    };
  };

export class DarkLayer extends GameDisplay {
  constructor() {
    super();
    this.layer = document.createElement('div');
    this.layer.id = 'overlayer'
    this.layer.style.width = '100%';
    this.layer.style.position = 'fixed';
    this.layer.style.top = '0px';
    this.layer.style.left = '0px';
    this.layer.style.right = '0px';
    this.layer.style.bottom = '0px';
    this.layer.style.height = '100%';
    this.layer.style.backgroundColor = 'rgba(0,0,0,0.7)'
    this.layer.style.zIndex = 2;

  };

  addLayer() {
    if(this.isCreated) return
    document.body.appendChild(this.layer);
    this.updateCreated();
  }

  removelayer() {
    document.body.removeChild(this.layer);
  }
}

export class GameOverUI extends GameDisplay {
  constructor({ text, color }) {
    super();
    // Big text
    this.gameText = document.createElement('div');
    this.gameText.textContent = text;

    // Assign the 'gameOver' class to the created div
    this.gameText.classList.add('gameOver');

    // Set color dynamically
    this.gameText.style.color = color;
  }

  addText() {
    if (!this.isCreated) {
      document.body.appendChild(this.gameText);
      this.updateCreated();   
    }
  }

  removeText() {
    // Set opacity to 0 before removing to trigger a smooth fade-out effect
    this.gameText.style.opacity = 0;

    // Remove the element after the fade-out is complete
    setTimeout(() => {
      document.body.removeChild(this.gameText);
    }, 1000); // Adjust the timeout to match the transition duration
  }
}

export class PlayButton extends GameDisplay {
  constructor() {
    super();
    this.playButton = document.createElement('button');
    this.playButton.type = 'button';
    this.playButton.textContent = 'Play Again';
    this.playButton.classList.add('playAgain');
    this.playButton.addEventListener('click', () => {
      // Handle the play again button click event
      // You can implement the logic to restart the game here
      console.log('Play again button clicked!');
    });
  }

  addButton() {
    if (this.isCreated) return;
    setTimeout(() => {
      document.body.appendChild(this.playButton);
    }, 2000); // Adjust the timeout to match the transition duration
   
    this.updateCreated();
  }


}
